import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('coordination/catalog-052'),out=root+'/screenshots';const b=await chromium.launch({channel:'chrome',headless:true});const report=[];
for(const lang of ['ja','en'])for(const width of [1280,375])for(const name of ['catalog-034','papers-schnell-fiber-spaces','papers-orbifold-logarithmic-iitaka']){
 const page=await b.newPage({viewport:{width,height:1000}});await page.goto('file://'+root+`/reference-preview/${name}.${lang}.html`);
 const selectors=name==='catalog-034'?['.catalog-table','table']:name.includes('schnell')?['#main-results','#results','#argument']:['#results','#diagram-sources','#proof-1'];let shots=[];
 for(const selector of selectors){if(await page.locator(selector).count()){await page.locator(selector).first().evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));const file=`reference-${name}.${lang}.${width}.${selector.replace(/[^a-z0-9]/g,'')}.png`;await page.screenshot({path:out+'/'+file});shots.push(file);}}
 if(!shots.length){const file=`reference-${name}.${lang}.${width}.png`;await page.screenshot({path:out+'/'+file});shots.push(file);}
 report.push({name,lang,width,screenshots:shots});await page.close();
}
await b.close();fs.writeFileSync(root+'/reference-comparison.json',JSON.stringify(report,null,2)+'\n');console.log('Reference snapshots:',report.length);
