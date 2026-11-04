// Public-site verification using the repository's common inspection helpers.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {chromium} from 'playwright-core';
import {ready,inspectPage,checkViewers,checkLanguage} from '../../../scripts/browser/inspect-page.mjs';
const out='coordination/catalog-340/stage3/live-browser';fs.mkdirSync(out,{recursive:true});
const candidate=JSON.parse(fs.readFileSync('coordination/catalog-340/stage3/release-candidate.json')).directory;
const origin='https://masataka123.github.io',base='/OpenAI-Math-Digest/';
const browser=await chromium.launch({channel:'chrome',headless:true}),results=[],startedAt=new Date().toISOString();
try{
 for(const lang of ['ja','en'])for(const width of [1280,375])for(const kind of ['catalog','article']){
  const route=kind==='catalog'?'catalog/340/':'papers/nearby-lagrangian-counterexample/';
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[],record={lang,width,kind,route};
  page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()+': '+r.failure()?.errorText));page.on('response',r=>{if(r.status()>=400)errors.push('HTTP '+r.status()+': '+r.url());});
  try{
   const response=await page.goto(origin+base+lang+'/'+route,{waitUntil:'load'});if(response.status()!==200)throw Error('HTTP '+response.status());
   const expected=createHash('sha256').update(fs.readFileSync(candidate+'/dist/'+lang+'/'+route+'index.html')).digest('hex');
   record.htmlSha256=createHash('sha256').update(await response.body()).digest('hex');if(record.htmlSha256!==expected)throw Error('Public HTML differs from tested candidate');
   await ready(page);
   // The lazy guide image can still be loading when cached MathJax finishes.
   await page.waitForFunction(()=>[...document.images].filter(i=>i.getBoundingClientRect().top<innerHeight&&i.getBoundingClientRect().bottom>0).every(i=>i.complete&&i.naturalWidth>0),{timeout:30000});
   await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});record.layout=await page.evaluate(inspectPage);if(record.layout.issues.length)throw Error(record.layout.issues.join('; '));
   if(kind==='catalog'){
    record.inventory=await page.locator('.catalog-inventory').evaluate(e=>({columns:e.querySelector('thead tr').children.length,rows:e.querySelectorAll('tbody tr').length}));
    record.pdf=await page.locator('.catalog-pdf a').getAttribute('href');if(record.inventory.columns!==4||record.inventory.rows!==1||!record.pdf.endsWith('catalog-340-'+lang+'.pdf'))throw Error('Inventory/PDF route mismatch');
   }else{if(record.layout.diagrams.length!==4)throw Error('Diagram count mismatch');await page.locator('#results').evaluate(e=>e.scrollIntoView({block:'start'}));}
   const stem=`${lang}-${kind}-${width}`;await page.screenshot({path:out+'/'+stem+'.png'});
   record.viewers=await checkViewers(page);
   if(kind==='article'){await page.locator('.proof-figure .diagram-tools a[href$=".svg"]').first().click();await page.locator('dialog[open] [data-fit]').click();await page.screenshot({path:out+'/'+stem+'-figure.png'});await page.locator('dialog[open] [data-close]').click();}
   record.language=await checkLanguage(page,{lang,route},origin,base);if(errors.length)throw Error(errors.join('; '));record.status='pass';
  }catch(e){record.status='fail';record.error=e.message;await page.screenshot({path:out+`/failure-${lang}-${kind}-${width}.png`});}
  record.errors=errors;results.push(record);await page.close();
 }
}finally{await browser.close();}
const report={startedAt,finishedAt:new Date().toISOString(),scope:'Public GitHub Pages and actual MathJax CDN; shared layout/viewer/language helpers, no local substitution',results,passed:results.every(r=>r.status==='pass')};
fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({passed:report.passed,conditions:results.length,failed:results.filter(r=>r.status!=='pass')},null,2));if(!report.passed)process.exitCode=1;
