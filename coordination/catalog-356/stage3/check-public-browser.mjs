import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root='coordination/catalog-356/stage3';fs.mkdirSync(`${root}/public-screens`,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});const results=[];
for(const lang of ['ja','en'])for(const [name,route,count] of [['catalog','catalog/356/',1],['main','papers/gigli-characterization/',5],['companion','papers/weak-hessian-geodesics/',3]]){
 const page=await browser.newPage({viewport:{width:375,height:1000}});
 const url=`https://masataka123.github.io/OpenAI-Math-Digest/${lang}/${route}`;
 const response=await page.goto(url,{waitUntil:'load'});assert.equal(response.status(),200);
 await page.waitForFunction(()=>window.MathJax?.startup?.promise,{timeout:30000});await page.evaluate(()=>window.MathJax.startup.promise);
 const data=await page.evaluate(()=>({width:innerWidth,documentWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mjx-error]').length,figures:document.querySelectorAll('.proof-figure').length,notice:!!document.querySelector('.ai-notice'),guide:!!document.querySelector('.reading-guide')}));
 assert.equal(data.width,data.documentWidth);assert.equal(data.mathErrors,0);assert.equal(data.figures,count);assert.ok(data.notice&&data.guide);
 if(name==='catalog')assert.ok((await page.locator('.catalog-pdf a').getAttribute('href')).endsWith(`catalog-356-${lang}.pdf`));
 await page.screenshot({path:`${root}/public-screens/${name}-${lang}-375.png`});
 await page.evaluate(()=>{location.hash='sources';window.scrollTo(0,document.body.scrollHeight)});const box=await page.locator('.language-switch').boundingBox();assert.ok(box.y>=0&&box.y+box.height<=1000);
 const other=lang==='ja'?'en':'ja';await page.locator('#language').click();await page.waitForURL(`**/${other}/${route}#sources`);assert.equal(new URL(page.url()).hash,'#sources');
 results.push({url,...data,languageSwitch:'visible after scroll, correct route and anchor preserved'});await page.close();
}
await browser.close();fs.writeFileSync(`${root}/public-browser.json`,JSON.stringify(results,null,2)+'\n');console.log('Public browser checks passed: 6 bilingual pages at 375px.');
