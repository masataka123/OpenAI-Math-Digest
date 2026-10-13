import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('coordination/catalog-046'),out=root+'/screenshots';fs.mkdirSync(out,{recursive:true});const b=await chromium.launch({channel:'chrome',headless:true});const report=[];
const files=fs.readdirSync(root+'/preview').filter(x=>x.endsWith('.html'));
for(const file of files)for(const width of [1280,375]){const page=await b.newPage({viewport:{width,height:1000}});await page.goto('file://'+root+'/preview/'+file);const measured=await page.evaluate(()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,figures:document.querySelectorAll('.proof-figure').length,sourceLines:document.querySelectorAll('.source-line').length,languageVisible:(()=>{const r=document.querySelector('.language-switch')?.getBoundingClientRect();return r&&r.right<=innerWidth&&r.left>=0})()}));
 await page.screenshot({path:`${out}/${file}.${width}.top.png`});
 for(const target of ['#papers','#results','#diagram-sources','#proof-1','#connections','#proof-overview','#proof-2','#proof-3','#proof-4','#proof-5','#proof-6','#sources','#dependencies']){if(await page.locator(target).count()){await page.locator(target).evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));await page.screenshot({path:`${out}/${file}.${width}.${target.slice(1)}.png`});}}
 if(width===375){
  const scrolls=page.locator('.digest-table-wrap, .math-display');
  for(let i=0;i<await scrolls.count();i++){
   const el=scrolls.nth(i);const wide=await el.evaluate(e=>e.scrollWidth>e.clientWidth+1);
   if(wide){await el.evaluate(e=>{e.scrollIntoView({block:'center',behavior:'instant'});e.scrollLeft=e.scrollWidth});await page.screenshot({path:`${out}/${file}.375.scroll-${i+1}-right.png`});await el.evaluate(e=>e.scrollLeft=0);}
  }
 }
 measured.languageVisibleAfterScroll=await page.locator('.language-switch').evaluate(e=>{const r=e.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight&&r.left>=0&&r.right<=innerWidth});
 if(width===1280){await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});const figures=page.locator('.proof-figure');for(let i=0;i<await figures.count();i++)await figures.nth(i).screenshot({path:`${out}/${file}.figure-${i+1}.png`});}
 report.push({file,width,...measured});await page.close();}
// Compare the required 034 / Schnell / Orbifold Iitaka references using existing built HTML.
for (const file of fs.readdirSync(root+'/reference-preview').filter(x=>x.endsWith('.html'))) for (const width of [1280,375]) {
 const page=await b.newPage({viewport:{width,height:1000}});await page.goto('file://'+root+'/reference-preview/'+file);
 await page.screenshot({path:`${out}/reference-${file}.${width}.top.png`});
 for(const target of ['#papers','#manuscripts','#results','#diagram-sources','#proof-1','#argument']) if(await page.locator(target).count()) {
  await page.locator(target).evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'})); await page.screenshot({path:`${out}/reference-${file}.${width}.${target.slice(1)}.png`});
 }
 await page.close();
}
fs.writeFileSync(root+'/screen-checks.json',JSON.stringify(report,null,2)+'\n');await b.close();console.log(JSON.stringify(report));
