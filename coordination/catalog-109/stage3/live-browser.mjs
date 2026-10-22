import { chromium } from 'playwright-core';
import { ready,inspectPage,checkViewers,checkLanguage } from '../../../scripts/browser/inspect-page.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const out=path.dirname(fileURLToPath(import.meta.url));
const origin='https://masataka123.github.io',base='/OpenAI-Math-Digest/';
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[];
try{
 for(const lang of ['ja','en'])for(const route of ['catalog/109/','papers/integer-multiplication-below-n-log-n/'])for(const width of [1280,375]){
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto(origin+base+lang+'/'+route,{waitUntil:'networkidle'});
  await ready(page);
  const info=await page.evaluate(inspectPage);
  const item={lang,route,width,status:response.status(),...info,pageErrors:errors};
  if(route.startsWith('catalog')){
   item.pdfHref=await page.locator(`a[href$="catalog-109-${lang}.pdf"]`).first().getAttribute('href');
   item.table=await page.locator('.digest-table').first().evaluate(e=>({headings:e.querySelectorAll('thead th').length,rows:e.querySelectorAll('tbody tr').length}));
   if(item.table.headings!==4||item.table.rows!==1)info.issues.push('Expected one row / four columns');
  }else{
   item.viewers=await checkViewers(page);
   if(item.viewers.length!==3)info.issues.push('Expected three figures');
  }
  await page.evaluate(()=>{location.hash='';scrollTo(0,0)});
  item.screenshot=`screens/${lang}-${route.startsWith('catalog')?'catalog':'article'}-${width}.png`;
  await fs.mkdir(path.join(out,'screens'),{recursive:true});
  await page.screenshot({path:path.join(out,item.screenshot)});
  item.language=await checkLanguage(page,{lang,route},origin,base);
  item.ok=response.status()===200&&info.issues.length===0&&errors.length===0;
  results.push(item);await page.close();
  console.log(JSON.stringify({lang,route,width,ok:item.ok,issues:info.issues}));
 }
}finally{await browser.close();}
const report={checkedAt:new Date().toISOString(),passed:results.length===8&&results.every(r=>r.ok),results};
await fs.writeFile(path.join(out,'live-browser.json'),JSON.stringify(report,null,2)+'\n');
if(!report.passed)process.exitCode=1;
