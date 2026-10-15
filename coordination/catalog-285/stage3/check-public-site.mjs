import fs from 'node:fs';import path from 'node:path';import http from 'node:http';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=process.cwd(),out=path.join(root,'coordination/catalog-285/stage3'),base='/OpenAI-Math-Digest/';
const inv=JSON.parse(fs.readFileSync('coordination/catalog-285/inventory.json')),ids=inv.manuscripts.map(p=>p.paperId),report=[];
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.pdf':'application/pdf','.woff':'font/woff','.woff2':'font/woff2'};
const origin='https://masataka123.github.io';
fs.mkdirSync(path.join(out,'screens'),{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
try{
for(const lang of ['ja','en'])for(const [name,route]of [['overview',`catalog/285/`],...ids.map(id=>[id,`papers/${id}/`])])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});page.setDefaultTimeout(20000);const errors=[],badResources=[];
 page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)badResources.push({url:r.url(),status:r.status()});});
 await page.goto(origin+base+lang+'/'+route);await page.waitForFunction(()=>window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);await page.evaluate(()=>document.fonts.ready);await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
 const facts=await page.evaluate(()=>({documentWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mjx-error],merror').length,mathExpressions:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length,rows:document.querySelectorAll('.catalog-inventory tbody tr').length,missingAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(decodeURIComponent(id))),duplicates:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i),emptyImages:[...document.images].filter(e=>!e.complete||e.naturalWidth===0).map(e=>e.src),bodyFont:getComputedStyle(document.body).fontSize,aiNotice:!!document.querySelector('.ai-notice'),tables:[...document.querySelectorAll('.digest-table-wrap')].map(e=>({width:e.clientWidth,scroll:e.scrollWidth})),pdfLink:document.querySelector('.catalog-pdf a')?.getAttribute('href')}));
 const prefix=`${name}.${lang}.${width}`;await page.screenshot({path:path.join(out,'screens',prefix+'.top.png')});
 const selectors=name==='overview'?['#papers','#assembly','#connections','#sources']:ids.includes(name)?['#results','#diagram-sources','#proof-overview','#proof-1','#proof-2','#proof-3','#sources']:name==='schnell'?['.theorem-statement','.proof-figure']:name==='orbifold'?['.figure-key','.theorem-statement']:['.catalog-inventory'];
 for(const selector of selectors){const loc=page.locator(selector).first();if(await loc.count()){await loc.scrollIntoViewIfNeeded();await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});await loc.screenshot({path:path.join(out,'screens',`${prefix}.${selector.slice(1)}.png`)});}}
 await page.addStyleTag({content:'.site-chrome{visibility:visible!important}'});
 facts.viewer=[];
 if(ids.includes(name))for(let n=0;n<facts.figures;n++){
  const fig=page.locator('.proof-figure').nth(n),trigger=fig.locator('.diagram-tools a[href$=".svg"]');await trigger.click();const dialog=page.locator('dialog.diagram-viewer');await dialog.waitFor({state:'visible'});
  const start=await dialog.locator('output').textContent();await dialog.locator('[data-zoom="in"]').click();const zoomed=await dialog.locator('output').textContent();await dialog.locator('[data-fit]').click();
  const fit=await dialog.locator('.diagram-viewer-canvas').boundingBox(),scroll=await dialog.locator('.diagram-viewer-scroll').boundingBox();
  const cloned=await dialog.locator('.diagram-viewer-canvas').evaluate(e=>({links:[...e.querySelectorAll('a')].map(a=>a.getAttribute('href')||a.getAttribute('xlink:href')),duplicates:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i).length}));
  if(n===0)await dialog.screenshot({path:path.join(out,'screens',prefix+'.viewer.png')});
  const a=dialog.locator('.diagram-viewer-canvas a').first();await a.evaluate(e=>e.addEventListener('click',ev=>ev.preventDefault(),{once:true}));await a.click({force:true});
  facts.viewer.push({figure:n+1,opens:true,zoom:start!==zoomed,fit:fit.width<=scroll.width+1,links:cloned.links.length,allUrls:cloned.links.every(s=>/^https?:/.test(s)),duplicateIds:cloned.duplicates,closesOnCitation:!(await dialog.isVisible())});
 }
 if(ids.includes(name)||name==='overview'){
  await page.evaluate(()=>{location.hash='sources';scrollTo(0,document.body.scrollHeight);});
  const bbox=await page.locator('.language-switch').boundingBox();facts.languageVisibleAfterScroll=!!bbox&&bbox.y>=0&&bbox.y+bbox.height<=900;
  await page.locator('#language').click();await page.waitForFunction(()=>window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);
  facts.languageSwitch={lang:await page.locator('html').getAttribute('lang'),hash:new URL(page.url()).hash};
  if(name==='overview'){const link=page.locator('.catalog-pdf a');const href=await link.getAttribute('href');const response=await page.request.get(origin+href);facts.pdfResponse={status:response.status(),type:response.headers()['content-type'],magic:(await response.body()).subarray(0,5).toString()};}
 }
 report.push({name,lang,width,...facts,errors,badResources});await page.close();
}
// Verify the complete navigation route in both languages on a phone viewport.
for(const lang of ['ja','en']){const page=await browser.newPage({viewport:{width:375,height:900}});await page.goto(origin+base+lang+'/');await page.locator(`a[href="${base}${lang}/fields/operator-algebras/"]`).first().click();await page.locator(`a[href="${base}${lang}/catalog/285/"]`).first().click();await page.locator(`a[href="${base}${lang}/papers/${ids[0]}/"]`).first().click();report.push({name:'navigation',lang,success:new URL(page.url()).pathname===base+lang+'/papers/'+ids[0]+'/'});await page.close();}
}finally{await browser.close();}
fs.writeFileSync(path.join(out,'site-browser.json'),JSON.stringify({mathjax:'Actual public CDN script executed; published website and assets checked',report},null,2)+'\n');
const current=report.filter(r=>ids.includes(r.name)||r.name==='overview');const bad=current.filter(r=>r.documentWidth!==r.width||r.mathErrors||r.missingAnchors.length||r.duplicates.length||r.emptyImages.length||r.errors.length||r.badResources.length||!r.languageVisibleAfterScroll||r.languageSwitch.hash!=='#sources'||r.languageSwitch.lang==r.lang||r.viewer.some(v=>!v.zoom||!v.fit||!v.allUrls||v.duplicateIds||!v.closesOnCitation)||(r.name==='overview'&&(r.rows!==3||r.pdfResponse.status!==200||r.pdfResponse.magic!=='%PDF-')));
const navigation=report.filter(r=>r.name==='navigation');console.log(JSON.stringify({displayConditions:current.length,referenceConditions:report.length-current.length-navigation.length,navigation:navigation.every(r=>r.success),failed:bad},null,2));if(bad.length||navigation.some(r=>!r.success))process.exitCode=1;
