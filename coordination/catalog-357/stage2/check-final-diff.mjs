import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const dir='coordination/catalog-357/stage2',base='http://127.0.0.1:8357/OpenAI-Math-Digest/';
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const initial=JSON.parse(fs.readFileSync(`${dir}/browser-checks.json`));
const diff=initial.manifest.map(row=>({...row,finalSha256:sha(fs.readFileSync(row.file))})).filter(row=>row.sha256!==row.finalSha256);
const pdfs=JSON.parse(fs.readFileSync('src/data/pdf-editions.json'))['357'];
const browser=await chromium.launch({headless:true,channel:'chrome'}),context=await browser.newContext(),results=[];
for(const lang of ['ja','en'])for(const width of [1280,375]){
 const page=await context.newPage(),errors=[];await page.setViewportSize({width,height:900});page.on('pageerror',e=>errors.push(e.message));
 await page.goto(`${base}${lang}/catalog/357/`,{waitUntil:'load'});await page.waitForFunction(()=>window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
 const link=page.locator('.catalog-pdf a');assert.equal(await link.count(),1);const url=await link.getAttribute('href'),expected=`/OpenAI-Math-Digest/pdf/${pdfs[lang].file}`;assert.equal(url,expected);
 const response=await context.request.get(new URL(url,base).href),bytes=await response.body();assert.equal(response.status(),200);assert.match(response.headers()['content-type'],/application\/pdf/);assert.equal(bytes.length,pdfs[lang].bytes);
 const file=`public/pdf/${pdfs[lang].file}`;assert.equal(sha(bytes),sha(fs.readFileSync(file)));
 const info=await page.evaluate(()=>({bodyWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"],mjx-merror').length,mathCount:document.querySelectorAll('mjx-container').length,tableMathCount:document.querySelectorAll('.catalog-inventory mjx-container').length,unrenderedMathCommands:[...document.querySelectorAll('mjx-container')].map(x=>x.textContent).filter(t=>/\\[A-Za-z]+/.test(t)),tableColumns:document.querySelector('.catalog-inventory thead tr')?.children.length,tableWidths:[...document.querySelectorAll('.digest-table-wrap')].map(x=>({client:x.clientWidth,scroll:x.scrollWidth})),pdfText:document.querySelector('.catalog-pdf').textContent,staleNotice:/未生成|not yet generated|not generated yet/i.test(document.body.innerText)}));
 assert.equal(info.bodyWidth,width);assert.equal(info.mathErrors,0);assert.equal(info.staleNotice,false);assert.deepEqual(info.unrenderedMathCommands,[]);assert.equal(info.tableColumns,4);assert.ok(info.tableMathCount>=2);assert.ok(info.pdfText.includes('20'));
 await page.locator('.catalog-pdf').evaluate(e=>window.scrollTo({top:scrollY+e.getBoundingClientRect().top-130,behavior:'instant'}));await page.waitForTimeout(180);await page.screenshot({path:`${dir}/screens/final-catalog.${lang}.${width}.pdf-entry.png`});
 await page.locator('.catalog-inventory').evaluate(e=>window.scrollTo({top:scrollY+e.getBoundingClientRect().top-120,behavior:'instant'}));await page.waitForTimeout(180);await page.screenshot({path:`${dir}/screens/final-catalog.${lang}.${width}.inventory.png`});if(width===375){await page.locator('.catalog-inventory').evaluate(e=>e.parentElement.scrollLeft=e.parentElement.scrollWidth);await page.waitForTimeout(180);await page.screenshot({path:`${dir}/screens/final-catalog.${lang}.${width}.inventory-right.png`});}
 assert.deepEqual(errors,[]);results.push({lang,width,...info,pdfUrl:new URL(url,base).href,httpStatus:response.status(),contentType:response.headers()['content-type'],bytes:bytes.length,sha256:sha(bytes),matchesPublicFile:file});await page.close();
}
await browser.close();
fs.writeFileSync(`${dir}/final-diff.json`,JSON.stringify({checkedAt:new Date().toISOString(),changedPagesSinceInitial:diff,pdfResults:results,scope:'PDF web entry and delivered-byte comparison; PDF page/content QA belongs to site HQ'},null,2)+'\n');console.log(JSON.stringify({changedPages:diff.map(x=>x.file),pdfResults:results},null,2));
