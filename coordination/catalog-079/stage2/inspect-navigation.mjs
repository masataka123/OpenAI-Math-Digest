// Additional Stage-2 entry navigation and readable section images.
// The common catalog:prepare pipeline remains the publication checker.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {chromium} from 'playwright-core';
import {serveBuiltSite} from '../../../scripts/browser/site-server.mjs';
import {ready,inspectPage} from '../../../scripts/browser/inspect-page.mjs';
const out='coordination/catalog-079/stage2/navigation';
fs.mkdirSync(out,{recursive:true});
const base='/OpenAI-Math-Digest/';
function hashes(){
 const result={};
 for(const lang of ['ja','en'])for(const route of ['','fields/real-complex-analysis/','catalog/079/','papers/euclidean-wave/','papers/critical-wave-three/']){
  const file=`dist/${lang}/${route}index.html`;
  result[file]=createHash('sha256').update(fs.readFileSync(file)).digest('hex');
 }
 return result;
}
const before=hashes(),server=await serveBuiltSite('dist',base),results=[];
let browser;
try{
 browser=await chromium.launch({channel:'chrome',headless:true});
 for(const lang of ['ja','en'])for(const width of [1280,375]){
  const page=await browser.newPage({viewport:{width,height:1000}}),screenshots=[];
  const snapshot=async(name)=>{const file=`${lang}-${width}-${name}.png`;await page.screenshot({path:path.join(out,file)});screenshots.push(file);};
  await page.goto(server.origin+base+lang+'/');await ready(page);
  const field=page.locator(`a[href="${base}${lang}/fields/real-complex-analysis/"]`).first();
  await field.scrollIntoViewIfNeeded();await snapshot('home-field');await field.click();await ready(page);
  const fieldOrder=await page.locator('.catalog-number').allTextContents();
  if(JSON.stringify(fieldOrder)!==JSON.stringify(['074','079']))throw Error('Wrong field order');
  const row=page.locator('.field-catalog').filter({has:page.locator(`a.catalog-number[href="${base}${lang}/catalog/079/"]`)});
  if(lang==='ja'&&(await row.locator('.field-catalog-summary').innerText()).includes('図で'))throw Error('Incorrect summary-diagram promise');
  const details=row.locator('details'),initiallyClosed=await details.getAttribute('open')===null;
  if(!initiallyClosed)throw Error('Paper list should start collapsed');
  await details.locator('summary').click();
  const paperUrls=await details.locator('ol a').evaluateAll(a=>a.map(x=>x.getAttribute('href')));
  if(paperUrls.length!==2)throw Error('Missing paper entries');
  await row.locator('h3').scrollIntoViewIfNeeded();await snapshot('field-079');
  const fieldLayout=await page.evaluate(inspectPage);
  if(fieldLayout.issues.length)throw Error(JSON.stringify(fieldLayout.issues));
  await row.locator('.catalog-number').click();await ready(page);await snapshot('catalog-top');
  for(const id of ['papers','comparison','sources']){
   await page.locator('#'+id).evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));await snapshot('catalog-'+id);
  }
  for(const paperId of ['euclidean-wave','critical-wave-three']){
   await page.goto(server.origin+base+lang+'/papers/'+paperId+'/');await ready(page);
   for(const id of ['results','diagram-sources','sources']){
    await page.locator('#'+id).evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));await snapshot(paperId+'-'+id);
   }
  }
  results.push({lang,width,fieldOrder,initiallyClosed,paperUrls,fieldLayout,screenshots});await page.close();
 }
}finally{await browser?.close();await server.close();}
const after=hashes();if(JSON.stringify(before)!==JSON.stringify(after))throw Error('Built pages changed during navigation inspection');
fs.writeFileSync(out+'/report.json',JSON.stringify({scope:'Additional field-entry navigation and section images',createdAt:new Date().toISOString(),htmlHashes:after,results},null,2)+'\n');
console.log('Top → field → 079 → both papers: all four language/width cases passed');
