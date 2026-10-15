import fs from 'node:fs';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const run='coordination/catalog-187/astra-stage2-20261015', screen=run+'/screens'; fs.mkdirSync(screen,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});const results=[];
const base='http://127.0.0.1:4188/OpenAI-Math-Digest/';
for(const lang of ['ja','en'])for(const [name,route] of [['article','papers/snaky-in-21-maker-moves/'],['overview','catalog/187/'],['schnell','papers/schnell-fiber-spaces/'],['orbifold','papers/orbifold-logarithmic-iitaka/'],['catalog034','catalog/034/']])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});const errors=[],failed=[];page.on('pageerror',e=>errors.push(String(e)));page.on('requestfailed',r=>failed.push({url:r.url(),error:r.failure()?.errorText}));
 const response=await page.goto(base+lang+'/'+route);if(response.status()!==200)throw Error('HTTP '+response.status());
 await page.waitForFunction(()=>!!window.MathJax?.startup?.promise,{},{timeout:30000});await page.evaluate(()=>window.MathJax.startup.promise);await page.evaluate(()=>document.fonts.ready);await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
 const facts=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mjx-error]').length,math:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length,rows:document.querySelectorAll('.catalog-inventory tbody tr').length,missing:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(decodeURIComponent(id))),duplicateIds:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i),images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),h2:[...document.querySelectorAll('main h2')].map(e=>e.textContent),tables:[...document.querySelectorAll('.digest-table-wrap')].map(e=>({width:e.clientWidth,scroll:e.scrollWidth}))}));
 await page.screenshot({path:`${screen}/${name}.${lang}.${width}.top.png`});
 const sels=name==='article'?['#results','#diagram-sources','#proof-overview','#proof-1','#proof-2','#proof-3','#sources']:name==='overview'?['#papers','#connections']:name==='schnell'?['.theorem-statement','.proof-figure']:name==='orbifold'?['.figure-key']:['.catalog-inventory'];
 for(let i=0;i<sels.length;i++){const el=page.locator(sels[i]).first();if(await el.count()){await el.scrollIntoViewIfNeeded();await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});await el.screenshot({path:`${screen}/${name}.${lang}.${width}.section-${i}.png`});}}
 await page.addStyleTag({content:'.site-chrome{visibility:visible!important}'});
 if(name==='article'){
  const all=page.locator('.proof-figure');facts.viewer=[];
  for(let i=0;i<await all.count();i++){
   await all.nth(i).locator('.diagram-tools a[href$=".svg"]').click();await page.locator('dialog[open]').waitFor();
   const before=await page.locator('.diagram-viewer output').textContent();await page.locator('[data-zoom="in"]').click();const after=await page.locator('.diagram-viewer output').textContent();
   const citations=await page.locator('.diagram-viewer-canvas svg a').evaluateAll(es=>es.map(e=>e.getAttribute('href')||e.getAttribute('xlink:href')));
   facts.viewer.push({figure:i+1,opened:true,before,after,citations});
   if(i===0)await page.screenshot({path:`${screen}/viewer.${lang}.${width}.png`});
   await page.locator('[data-close]').click();
  }
  if(width===1280){await page.setViewportSize({width,height:2000});for(let i=0;i<4;i++)await page.locator('.proof-diagram').nth(i).screenshot({path:`${screen}/figure.${lang}.${i+1}.png`});await page.setViewportSize({width,height:900});}
 }
 if(name==='overview'){
  const href=await page.locator('.catalog-pdf a').getAttribute('href');const res=await page.request.get(new URL(href,base).href);const buf=await res.body();facts.pdf={href,status:res.status(),bytes:buf.length,signature:buf.subarray(0,5).toString()};
  const routeLinks=await page.locator('#connections a, #sources a').evaluateAll(es=>es.map(e=>e.getAttribute('href')).filter(h=>h.includes('/papers/snaky-in-21-maker-moves/')));facts.readingRoutes=[];
  for(const href of routeLinks){await page.locator(`a[href="${href}"]`).first().click();await page.waitForURL(u=>u.pathname.includes('/papers/snaky-in-21-maker-moves/'));await page.waitForFunction(()=>!!window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);const anchor=new URL(page.url()).hash.slice(1);facts.readingRoutes.push({url:page.url(),anchor,found:await page.locator('#'+anchor).count()});await page.goto(base+lang+'/'+route);await page.waitForFunction(()=>!!window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});}
  const wrap=page.locator('.catalog-inventory').locator('..');facts.tableScroll=await wrap.evaluate(e=>{e.scrollLeft=e.scrollWidth;return {left:e.scrollLeft,client:e.clientWidth,scroll:e.scrollWidth}});await wrap.screenshot({path:`${screen}/table-right.${lang}.${width}.png`});
 }
 if(['article','overview'].includes(name)){
  await page.evaluate(()=>{location.hash='sources';document.getElementById('sources').scrollIntoView()});facts.languageAtBottom=await page.locator('.language-switch').boundingBox();await page.screenshot({path:`${screen}/bottom.${name}.${lang}.${width}.png`});
  await page.locator('#language').click();await page.waitForURL(u=>u.pathname.includes('/'+(lang==='ja'?'en':'ja')+'/'));await page.waitForFunction(()=>!!window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);
  facts.languageSwitch={url:page.url(),hash:new URL(page.url()).hash,anchor:await page.locator('#sources').count()};
 }
 results.push({name,lang,width,...facts,errors,failed});fs.writeFileSync(run+'/browser.json',JSON.stringify(results,null,2)+'\n');await page.close();
}
await browser.close();console.log(JSON.stringify(results.map(r=>({name:r.name,lang:r.lang,width:r.width,overflow:r.width-r.viewport,mathErrors:r.mathErrors,missing:r.missing.length,duplicateIds:r.duplicateIds.length,errors:r.errors,failed:r.failed})),null,2));
if(results.some(r=>r.width>r.viewport||r.mathErrors||r.missing.length||r.duplicateIds.length||r.errors.length||r.images.length))process.exitCode=1;
