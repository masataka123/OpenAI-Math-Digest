import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
const root=path.resolve('coordination/catalog-074'),out=root+'/reference-screens';fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch({channel:'chrome',headless:true}),report=[];
for(const lang of ['ja','en'])for(const route of ['catalog-034','papers-schnell-fiber-spaces','papers-orbifold-logarithmic-iitaka'])for(const width of [1280,375]){
 const f=`${route}.${lang}.html`,page=await b.newPage({viewport:{width,height:1000}});await page.goto('file://'+root+'/reference-preview/'+f);
 for(const selector of route==='catalog-034'?['.catalog-inventory']:route.includes('schnell')?['#results','#diagram-sources','#argument']:['#results','#diagram-sources','#proof-1']){
  const e=page.locator(selector).first();if(await e.count()){await e.evaluate(e=>e.scrollIntoView({behavior:'instant',block:'start'}));await page.screenshot({path:`${out}/${f}.${width}.${selector.slice(1)}.png`});}
 }
 report.push({file:f,width,sha256:createHash('sha256').update(fs.readFileSync(root+'/reference-preview/'+f)).digest('hex'),...await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length}))});await page.close();
}
fs.writeFileSync(root+'/reference-screen-checks.json',JSON.stringify(report,null,2)+'\n');await b.close();console.log('Captured',report.length,'reference display conditions');
