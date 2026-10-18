import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root='coordination/catalog-197/stage3',dir=`${root}/screens`;fs.mkdirSync(dir,{recursive:true});
const inventory=JSON.parse(fs.readFileSync('coordination/catalog-197/inventory.json'));
const base='https://masataka123.github.io/OpenAI-Math-Digest/';
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[],errors=[];
const filter=process.argv.slice(2);
const routes=[['overview','catalog/197/'],...inventory.manuscripts.map(p=>[p.paperId,`papers/${p.paperId}/`]),['algebra','fields/algebra/'],['top',''],].filter(([id])=>!filter.length||filter.includes(id));
for(const [id,route] of routes)for(const lang of ['ja','en'])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});
 const jsErrors=[],failed=[];page.on('pageerror',e=>jsErrors.push(e.message));page.on('requestfailed',r=>failed.push({url:r.url(),failure:r.failure()}));page.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()});});
 await page.goto(`${base}${lang}/${route}`,{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.MathJax?.startup?.promise,{timeout:20000});
 await page.evaluate(()=>window.MathJax.startup.promise);
 const stem=`${id}.${lang}-${width}`;
 await page.screenshot({path:`${dir}/${stem}-top.png`});
 const info=await page.evaluate(()=>{
  const ids=[...document.querySelectorAll('[id]')].map(x=>x.id),seen=new Set(),duplicates=[];for(const id of ids){if(seen.has(id))duplicates.push(id);seen.add(id);}
  return {bodyWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:[...document.querySelectorAll('[data-mjx-error]')].map(x=>x.getAttribute('data-mjx-error')),formulas:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length,statements:document.querySelectorAll('.theorem-statement').length,duplicateIds:[...new Set(duplicates)],pdfLinks:[...document.querySelectorAll('.catalog-pdf a')].map(x=>x.getAttribute('href')),inventoryRows:document.querySelectorAll('.catalog-inventory tbody tr').length,missingAnchors:[...document.querySelectorAll('a[href^="#"]')].map(x=>x.hash.slice(1)).filter(x=>x&&!document.getElementById(decodeURIComponent(x))),aiNotice:!!document.querySelector('.ai-notice'),guide:!!document.querySelector('.reading-guide')};
 });
 if(info.bodyWidth>width||info.mathErrors.length||info.duplicateIds.length||info.missingAnchors.length||jsErrors.length||failed.length)errors.push({id,lang,width,info,jsErrors,failed});
 if(id==='overview'&&(info.pdfLinks.length!==1||info.inventoryRows!==4))errors.push({id,lang,width,reason:'PDF or official inventory missing',info});
 for(const anchor of id.startsWith('reference')?['results','diagram-sources','papers','manuscripts']:[]){const loc=page.locator('#'+anchor);if(await loc.count()){await loc.scrollIntoViewIfNeeded();await page.screenshot({path:`${dir}/${stem}-${anchor}.png`});}}
 if(!id.startsWith('reference')){
  for(const anchor of ['results','diagram-sources','papers']){const loc=page.locator('#'+anchor);if(await loc.count()){await loc.scrollIntoViewIfNeeded();await page.screenshot({path:`${dir}/${stem}-${anchor}.png`});}}
  const figs=page.locator('.proof-figure');
  if(width===1280)for(let i=0;i<await figs.count();i++)await figs.nth(i).screenshot({path:`${dir}/${stem}-figure-${i+1}.png`,style:'.site-chrome {visibility:hidden!important}'});
  let zoomChecks=0;
  for(let i=0;i<await figs.count();i++){
   await figs.nth(i).locator('.diagram-tools a[href$=".svg"]').click();
   const dlg=page.locator('dialog.diagram-viewer');if(!await dlg.evaluate(x=>x.open))throw Error('Diagram dialog failed');
   const citations=await dlg.locator('svg a').count();if(!citations)errors.push({id,lang,width,figure:i,reason:'viewer citations missing'});
   const before=await dlg.locator('output').textContent();await dlg.locator('[data-zoom="in"]').click();const after=await dlg.locator('output').textContent();if(before===after)errors.push({id,lang,width,figure:i,reason:'zoom did not change'});
   await dlg.locator('[data-fit]').click();
   if(i===0)await page.screenshot({path:`${dir}/${stem}-viewer.png`});
   await dlg.locator('[data-close]').click();zoomChecks++;
  }
  info.zoomChecks=zoomChecks;
  const anchor=await page.locator('#results').count()?'results':await page.locator('#papers').count()?'papers':await page.locator('#fields').count()?'fields':'content';
  await page.evaluate(x=>{location.hash=x},anchor);
  await page.locator('#language').click();await page.waitForLoadState('networkidle');await page.evaluate(()=>window.MathJax.startup.promise);
  info.languageDestination=page.url();if(!page.url().includes(`/${lang==='ja'?'en':'ja'}/`)||!page.url().endsWith('#'+anchor))errors.push({id,lang,width,reason:'language/hash mismatch',url:page.url()});
 }
 results.push({id,lang,width,...info,jsErrors,failed});await page.close();
}
await browser.close();
const prior=filter.length&&fs.existsSync(`${root}/browser-checks.json`)?JSON.parse(fs.readFileSync(`${root}/browser-checks.json`)).results.filter(r=>!filter.includes(r.id)):[];
fs.writeFileSync(`${root}/browser-checks.json`,JSON.stringify({checkedAt:new Date().toISOString(),mathRuntime:'Live site CDN script, no substitutions',results:[...prior,...results],errors},null,2)+'\n');
console.log(JSON.stringify({views:results.length,errors},null,2));process.exitCode=errors.length?1:0;
