import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const base='https://masataka123.github.io/OpenAI-Math-Digest/',out='coordination/catalog-036/stage3/screens';await fs.mkdir(out,{recursive:true});
const ids=JSON.parse(await fs.readFile('coordination/catalog-036/inventory.json','utf8')).manuscripts.map(m=>m.paperId),counts=[5,5,3,2];
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({deviceScaleFactor:1}),page=await context.newPage(),pages=[],interactions=[],errors=[],failedRequests=[];
page.on('pageerror',e=>errors.push(String(e)));page.on('requestfailed',r=>failedRequests.push({url:r.url(),error:r.failure()?.errorText}));
async function ready(){await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await MathJax.startup.promise;await document.fonts.ready;await Promise.all([...document.images].map(async img=>{img.loading="eager";await img.decode();}));});await page.waitForFunction(()=>[...document.images].every(x=>x.complete&&x.naturalWidth>0));}
for(const lang of ['ja','en'])for(const width of [1280,375])for(const route of ['','fields/algebraic-complex-geometry/','catalog/036/',...ids.map(x=>'papers/'+x+'/')]){
 await page.setViewportSize({width,height:950});const response=await page.goto(base+lang+'/'+route);assert.equal(response.status(),200);await ready();
 const m=await page.evaluate(()=>({width:innerWidth,pageWidth:document.documentElement.scrollWidth,mathCount:document.querySelectorAll('mjx-container').length,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,figures:document.querySelectorAll('.proof-figure').length,brokenImages:[...document.images].filter(x=>!x.complete||!x.naturalWidth).map(x=>x.src),language:!!document.querySelector('#language')}));
 assert.equal(m.pageWidth,width);assert.equal(m.mathErrors,0);assert.deepEqual(m.brokenImages,[]);assert.ok(m.language);
 if(route==='catalog/036/'){
  assert.equal(await page.locator('.catalog-inventory tbody tr').count(),4);assert.equal(m.figures,1);
  const pdf=await page.locator('.catalog-pdf').innerText();assert.ok(pdf.includes(lang==='ja'?'56':'62'));assert.equal(await page.locator('.catalog-pdf a').getAttribute('href'),`/OpenAI-Math-Digest/pdf/catalog-036-${lang}.pdf`);
 }
 if(route.startsWith('papers/')){const id=route.split('/')[1];assert.equal(m.figures,counts[ids.indexOf(id)]);assert.ok(m.mathCount>0);}
 await page.screenshot({path:`${out}/${lang}-${(route||'home').replaceAll('/','-')}-${width}.jpg`,quality:85});pages.push({lang,route,...m});
}
for(const lang of ['ja','en'])for(const id of ids){
 await page.setViewportSize({width:375,height:900});await page.goto(base+lang+'/fields/algebraic-complex-geometry/');await ready();await page.locator('h3 a[href$="/catalog/036/"]').click();await ready();await page.locator(`#paper-${id} a.manuscript-title`).click();await ready();
 await page.locator('.contents a[href="#proof-1"]').click();await page.locator('#language').click();await ready();const other=lang==='ja'?'en':'ja';assert.ok(page.url().endsWith(`/${other}/papers/${id}/#proof-1`));
 const tex=await page.locator('.diagram-tools a[download]').first().getAttribute('href');assert.equal((await context.request.get(new URL(tex,base).href)).status(),200);
 await page.locator('.diagram-tools a[href$=".svg"]').first().click();await page.locator('.diagram-viewer').waitFor({state:'visible'});
 const initial=await page.locator('.diagram-viewer output').textContent();await page.locator('[data-zoom="in"]').click();assert.notEqual(await page.locator('.diagram-viewer output').textContent(),initial);await page.locator('[data-zoom="out"]').click();await page.locator('[data-fit]').click();
 const link=page.locator('.diagram-viewer-canvas svg a').first(),href=await link.getAttribute('xlink:href')??await link.getAttribute('href');assert.ok(href.startsWith('https://'));
 const popped=page.waitForEvent('popup');await link.click();const popup=await popped;await popup.waitForURL(href,{waitUntil:'commit'});assert.equal(popup.url(),href);await popup.close();await page.keyboard.press('Escape');
 await page.locator('.source-note a[href*="/catalog/036/#paper-"]').click();await ready();assert.ok(page.url().endsWith('/catalog/036/#paper-'+id));
 interactions.push({lang,id,fieldCatalogArticle:true,languageAnchor:true,texDownload:true,diagramZoom:true,citationPopupUrl:href,backToCatalog:true});
}
await fs.writeFile('coordination/catalog-036/stage3/live-browser.json',JSON.stringify({checkedAt:new Date().toISOString(),base,usesActualMathJaxCdn:true,pages,interactions,errors,failedRequests},null,2)+'\n');await browser.close();assert.deepEqual(errors,[]);console.log(JSON.stringify({pages:pages.length,interactions:interactions.length,errors,failedRequests}));
