import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const out='tmp/catalog-057-stage2/screenshots';const base='http://127.0.0.1:4325/OpenAI-Math-Digest/';
const ids=['special-kahler-abelianity','two-step-monodromy','half-weight-fourfold-abelianity'];
const figures=[7,5,3];const report=[],issues=[],interactions=[];
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({deviceScaleFactor:1});
await context.route('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',r=>r.fulfill({path:'node_modules/mathjax-full/es5/tex-svg.js',contentType:'text/javascript'}));
const page=await context.newPage();page.on('pageerror',e=>issues.push(String(e)));
async function ready(){await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});}
for(const lang of ['ja','en'])for(const route of ['','fields/algebraic-complex-geometry/','catalog/057/',...ids.map(x=>'papers/'+x+'/')])for(const width of [1280,375]){
 await page.setViewportSize({width,height:1000});await page.goto(base+lang+'/'+route);await ready();
 const metrics=await page.evaluate(()=>({viewport:innerWidth,pageWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,mathCount:document.querySelectorAll('mjx-container').length,figureCount:document.querySelectorAll('.proof-figure').length,brokenImages:[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.src),bodyFont:getComputedStyle(document.querySelector('main')).fontSize,sourceFont:document.querySelector('.source-line')?getComputedStyle(document.querySelector('.source-line')).fontSize:null}));
 assert.equal(metrics.pageWidth,width,route);assert.equal(metrics.mathErrors,0);assert.deepEqual(metrics.brokenImages,[]);
 const stem=(route||'home').replaceAll('/','-');await page.screenshot({path:`${out}/${lang}-${stem}-${width}.png`});
 if(route==='catalog/057/'){
  const href=await page.locator('.catalog-pdf a').getAttribute('href');assert.equal(href,`/OpenAI-Math-Digest/pdf/catalog-057-${lang}.pdf`);assert.equal((await context.request.get(new URL(href,base).href)).status(),200);
  assert.equal(await page.locator('.catalog-inventory tbody tr').count(),3);assert.equal(metrics.figureCount,1);
  assert.equal(await page.locator('.dependency-controls,.catalog-themes').count(),0);
  for(const id of ids)assert.equal(await page.locator('#paper-'+id).count(),1);
  for(const [sel,label] of [['.catalog-inventory','inventory'],['#connections','connections']])await page.locator(sel).screenshot({path:`${out}/${lang}-catalog-${label}-${width}.png`});
  const scrolling=await page.locator('.catalog-inventory').evaluate(el=>{const wrap=el.closest('.table-wrap')??el.parentElement;return {width:wrap.clientWidth,scrollWidth:wrap.scrollWidth,overflow:getComputedStyle(wrap).overflowX};});metrics.table=scrolling;
 }
 if(route.startsWith('papers/')){
  const id=route.split('/')[1];assert.equal(metrics.figureCount,figures[ids.indexOf(id)]);assert.ok(metrics.mathCount>100);
  if(id==='half-weight-fourfold-abelianity')assert.match(await page.locator('.contents a[href="#proof-overview"]').innerText(),/Theorem 1\.3/);
  for(const [sel,label] of [['#results','results'],['#diagram-sources','references'],['.proof-section','proof']])await page.locator(sel).first().screenshot({path:`${out}/${lang}-${id}-${label}-${width}.png`});
  if(width===1280)for(let i=0;i<metrics.figureCount;i++)await page.locator('.proof-diagram').nth(i).screenshot({path:`${out}/${lang}-${id}-figure-${i+1}.png`});
 }
 report.push({lang,route,width,...metrics});
}
for(const lang of ['ja','en'])for(const id of ids){
 await page.setViewportSize({width:375,height:900});await page.goto(base+lang+'/fields/algebraic-complex-geometry/');await ready();
 await page.locator('h3 a[href$="/catalog/057/"]').click();await ready();await page.locator(`#paper-${id} a.manuscript-title`).click();await ready();
 assert.equal(new URL(page.url()).pathname,`/OpenAI-Math-Digest/${lang}/papers/${id}/`);
 await page.locator('.contents a[href="#proof-overview"]').click();await page.locator('#language').click();await ready();const other=lang==='ja'?'en':'ja';assert.ok(page.url().endsWith(`/${other}/papers/${id}/#proof-overview`));
 const tex=await page.locator('.diagram-tools a[download]').first().getAttribute('href');assert.equal((await context.request.get(new URL(tex,base).href)).status(),200);
 await page.locator('.diagram-tools a[href$=".svg"]').first().click();await page.locator('.diagram-viewer').waitFor({state:'visible'});
 const initial=await page.locator('.diagram-viewer output').textContent();await page.locator('[data-zoom="in"]').click();assert.notEqual(await page.locator('.diagram-viewer output').textContent(),initial);await page.locator('[data-zoom="out"]').click();await page.locator('[data-fit]').click();
 const dup=await page.evaluate(()=>{const ids=[...document.querySelectorAll('[id]')].map(n=>n.id);return ids.filter((id,i)=>ids.indexOf(id)!==i);});assert.deepEqual(dup,[]);
 const target=page.locator('.diagram-viewer-canvas svg a').first(),href=await target.getAttribute('xlink:href')??await target.getAttribute('href');assert.ok(href.startsWith('https://'));
 await context.route(href.split('#')[0],r=>r.fulfill({status:200,contentType:'text/html',body:'<title>Citation navigation test</title>'}));
 const wait=page.waitForEvent('popup');await target.click();const popup=await wait;await popup.waitForLoadState();assert.equal(popup.url(),href);await popup.close();assert.equal(await page.locator('.diagram-viewer').isVisible(),false);
 await page.locator('.source-note a[href*="/catalog/057/#paper-"]').click();await ready();assert.ok(page.url().endsWith('/catalog/057/#paper-'+id));
 interactions.push({lang,id,fieldToCatalogToArticle:true,languageAnchor:true,texDownload:true,zoomInOutFit:true,uniqueIds:true,citationPopupTarget:href,returnToCatalog:true});
}
for(const lang of ['ja','en'])for(const [id,route,sel] of [['034','catalog/034/','.catalog-inventory'],['schnell','papers/schnell-fiber-spaces/','#argument'],['orbifold','papers/orbifold-logarithmic-iitaka/','#diagram-sources']])for(const width of [1280,375]){
 await page.setViewportSize({width,height:1000});await page.goto(base+lang+'/'+route);await ready();await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});await page.locator(sel).screenshot({path:`${out}/${lang}-model-${id}-${width}.png`});
}
assert.deepEqual(issues,[]);await fs.writeFile('tmp/catalog-057-stage2/browser-qa.json',JSON.stringify({pages:report,interactions,pageErrors:issues,externalCitationCheck:'URL navigation tested with intercepted response; external manuscript content checked in Stage1'},null,2)+'\n');
await browser.close();console.log(JSON.stringify({viewports:report.length,interactions:interactions.length,pageErrors:issues}));
