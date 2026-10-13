import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';import assert from 'node:assert/strict';
import http from 'node:http';import path from 'node:path';
const out='coordination/catalog-046/stage2/screenshots';await fs.mkdir(out,{recursive:true});
const server=http.createServer(async(req,res)=>{try{const u=new URL(req.url,'http://local'),relative=decodeURIComponent(u.pathname).replace(/^\/OpenAI-Math-Digest\//,'');if(relative.includes('..'))throw Error('path');const file=path.resolve('dist',relative+(relative.endsWith('/')?'index.html':''));const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.pdf':'application/pdf'};res.setHeader('Content-Type',types[path.extname(file)]??'application/octet-stream');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end('Missing');}});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}/OpenAI-Math-Digest/`;
const inventory=JSON.parse(await fs.readFile('coordination/catalog-046/inventory.json','utf8'));const ids=inventory.manuscripts.map(m=>m.paperId);
const figures=[4,5];const report=[],issues=[],interactions=[];
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext({deviceScaleFactor:1});
await context.route('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',r=>r.fulfill({path:'node_modules/mathjax-full/es5/tex-svg.js',contentType:'text/javascript'}));
const page=await context.newPage();page.on('pageerror',e=>issues.push(String(e)));
async function ready(){await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});}
for(const lang of ['ja','en'])for(const route of ['','fields/algebraic-complex-geometry/','catalog/046/',...ids.map(x=>'papers/'+x+'/')])for(const width of [1280,375]){
 await page.setViewportSize({width,height:1000});await page.goto(base+lang+'/'+route);await ready();
 const metrics=await page.evaluate(()=>({viewport:innerWidth,pageWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,mathCount:document.querySelectorAll('mjx-container').length,figureCount:document.querySelectorAll('.proof-figure').length,brokenImages:[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.src),bodyFont:getComputedStyle(document.querySelector('main')).fontSize,sourceFont:document.querySelector('.source-line')?getComputedStyle(document.querySelector('.source-line')).fontSize:null}));
 assert.equal(await page.locator('.ai-notice').count(),1);if(route)assert.equal(await page.locator('.reading-guide img').count(),1);assert.equal(metrics.pageWidth,width,route);assert.equal(metrics.mathErrors,0);assert.deepEqual(metrics.brokenImages,[]);
 const stem=(route||'home').replaceAll('/','-');await page.screenshot({path:`${out}/${lang}-${stem}-${width}.png`});
 const captureStyle=await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
 if(route==='catalog/046/'){
  const href=await page.locator('.catalog-pdf a').getAttribute('href');assert.equal(href,`/OpenAI-Math-Digest/pdf/catalog-046-${lang}.pdf`);assert.equal((await context.request.get(new URL(href,base).href)).status(),200);
  assert.equal(await page.locator('.catalog-inventory tbody tr').count(),2);assert.equal(metrics.figureCount,1);
  assert.equal(await page.locator('.dependency-controls,.catalog-themes').count(),0);
  assert.equal(Buffer.compare(await (await context.request.get(new URL(href,base).href)).body(),await fs.readFile(`public/pdf/catalog-046-${lang}.pdf`)),0);
  for(const id of ids)assert.equal(await page.locator('#paper-'+id).count(),1);
  for(const [sel,label] of [['.catalog-inventory','inventory'],['#connections','connections']])await page.locator(sel).screenshot({path:`${out}/${lang}-catalog-${label}-${width}.png`});
  if(width===1280)await page.locator('.proof-diagram').screenshot({path:`${out}/${lang}-overview-figure-1.png`});
  const scrolling=await page.locator('.catalog-inventory').evaluate(el=>{const wrap=el.parentElement;wrap.scrollLeft=wrap.scrollWidth;return {width:wrap.clientWidth,scrollWidth:wrap.scrollWidth,scrolled:wrap.scrollLeft,overflow:getComputedStyle(wrap).overflowX};});metrics.table=scrolling;
 }
 if(route.startsWith('papers/')){
  const id=route.split('/')[1];assert.equal(metrics.figureCount,figures[ids.indexOf(id)]);assert.ok(metrics.mathCount>20);

  for(const [sel,label] of [['.theorem-block','statement'],['#diagram-sources','references-heading'],['.reference-guide','references'],['.proof-figure','proof']])if(await page.locator(sel).count())await page.locator(sel).first().screenshot({path:`${out}/${lang}-${id}-${label}-${width}.png`});
  for(const anchor of ['results','diagram-sources','proof-1']){await page.locator('#'+anchor).evaluate(el=>el.scrollIntoView({behavior:'instant',block:'start'}));await page.screenshot({path:`${out}/${lang}-${id}-${anchor}-section-${width}.png`});}
  if(width===1280)for(let i=0;i<metrics.figureCount;i++)await page.locator('.proof-diagram').nth(i).screenshot({path:`${out}/${lang}-${id}-figure-${i+1}.png`});
 }
 await captureStyle.evaluate(e=>e.remove());
 report.push({lang,route,width,...metrics});
}
for(const lang of ['ja','en'])for(const id of ids){
 await page.setViewportSize({width:375,height:900});await page.goto(base+lang+'/fields/algebraic-complex-geometry/');await ready();
 await page.locator('h3 a[href$="/catalog/046/"]').click();await ready();await page.locator(`#paper-${id} a.manuscript-title`).click();await ready();
 assert.equal(new URL(page.url()).pathname,`/OpenAI-Math-Digest/${lang}/papers/${id}/`);
 await page.locator('.contents a[href="#proof-1"]').click();await page.locator('#language').click();await ready();const other=lang==='ja'?'en':'ja';assert.ok(page.url().endsWith(`/${other}/papers/${id}/#proof-1`));const switchBox=await page.locator('.language-switch').boundingBox();assert.ok(switchBox.x>=0&&switchBox.x+switchBox.width<=375&&switchBox.y>=0&&switchBox.y<200);
 const tex=await page.locator('.diagram-tools a[download]').first().getAttribute('href');assert.equal((await context.request.get(new URL(tex,base).href)).status(),200);
 await page.locator('.diagram-tools a[href$=".svg"]').first().click();await page.locator('.diagram-viewer').waitFor({state:'visible'});
 const initial=await page.locator('.diagram-viewer output').textContent();await page.locator('[data-zoom="in"]').click();assert.notEqual(await page.locator('.diagram-viewer output').textContent(),initial);await page.locator('[data-zoom="out"]').click();await page.locator('[data-fit]').click();
 const dup=await page.evaluate(()=>{const ids=[...document.querySelectorAll('[id]')].map(n=>n.id);return ids.filter((id,i)=>ids.indexOf(id)!==i);});assert.deepEqual(dup,[]);
 const target=page.locator('.diagram-viewer-canvas svg a').first(),href=await target.getAttribute('xlink:href')??await target.getAttribute('href');assert.ok(href.startsWith('https://'));
 await context.route(href.split('#')[0],r=>r.fulfill({status:200,contentType:'text/html',body:'<title>Citation navigation test</title>'}));
 const wait=page.waitForEvent('popup');await target.click();const popup=await wait;await popup.waitForLoadState();assert.equal(popup.url(),href);await popup.close();assert.equal(await page.locator('.diagram-viewer').isVisible(),false);
 await page.locator('.source-note a[href*="/catalog/046/#paper-"]').click();await ready();assert.ok(page.url().endsWith('/catalog/046/#paper-'+id));
 interactions.push({lang,id,fieldToCatalogToArticle:true,languageAnchor:true,texDownload:true,zoomInOutFit:true,uniqueIds:true,citationPopupTarget:href,returnToCatalog:true});
}
for(const lang of ['ja','en'])for(const [id,route,sel] of [['034','catalog/034/','.catalog-inventory'],['schnell','papers/schnell-fiber-spaces/','#argument'],['orbifold','papers/orbifold-logarithmic-iitaka/','#diagram-sources']])for(const width of [1280,375]){
 await page.setViewportSize({width,height:1000});await page.goto(base+lang+'/'+route);await ready();await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});await page.locator(sel).screenshot({path:`${out}/${lang}-model-${id}-${width}.png`});
}
assert.deepEqual(issues,[]);await fs.writeFile('coordination/catalog-046/stage2/browser.json',JSON.stringify({pages:report,interactions,pageErrors:issues,externalCitationCheck:'URL navigation tested with intercepted response; external manuscript content checked in Stage1'},null,2)+'\n');
await browser.close();server.close();console.log(JSON.stringify({viewports:report.length,interactions:interactions.length,pageErrors:issues}));
