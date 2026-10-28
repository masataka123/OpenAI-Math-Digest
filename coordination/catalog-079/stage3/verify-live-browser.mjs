// Live deployment verification with the shared browser inspectors.
import fs from 'node:fs';
import {chromium} from 'playwright-core';
import {ready,inspectPage,checkViewers,checkLanguage} from '../../../scripts/browser/inspect-page.mjs';
import {catalogs} from '../../../src/data/site.mjs';
import {browserTargets} from '../../../scripts/check-browser.mjs';
const catalog=catalogs.find(c=>c.id==='079');
const origin='https://masataka123.github.io',base='/OpenAI-Math-Digest/';
const out='coordination/catalog-079/stage3';fs.mkdirSync(out+'/screens',{recursive:true});
const results=[],browser=await chromium.launch({channel:'chrome',headless:true});
try{
 const context=await browser.newContext();context.setDefaultTimeout(15000);
 for(const target of browserTargets(catalog)){
  const page=await context.newPage();await page.setViewportSize({width:target.width,height:900});
  const result={...target,issues:[],screenshots:[]};
  page.on('pageerror',e=>result.issues.push(e.message));
  page.on('requestfailed',r=>result.issues.push(`${r.url()}: ${r.failure()?.errorText}`));
  page.on('response',r=>{if(r.status()>=400)result.issues.push(`HTTP ${r.status()}: ${r.url()}`);});
  await page.goto(origin+base+target.lang+'/'+target.route,{waitUntil:'load',timeout:60000});await ready(page);
  await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  result.layout=await page.evaluate(inspectPage);result.issues.push(...result.layout.issues);
  const stem=`${target.lang}-${target.route.replaceAll('/','-')}${target.width}`;
  await page.screenshot({path:`${out}/screens/${stem}-top.png`});result.screenshots.push(`${stem}-top.png`);
  if(target.kind==='catalog'){
   result.inventoryOrder=await page.locator('.catalog-inventory tbody tr').evaluateAll(rows=>rows.map(r=>r.id));
   if(JSON.stringify(result.inventoryOrder)!==JSON.stringify(catalog.paperIds.map(id=>'paper-'+id)))throw Error('Incorrect official inventory order');
   result.pdfLink=await page.locator('.catalog-pdf a').getAttribute('href');
   if(!result.pdfLink.endsWith(`catalog-079-${target.lang}.pdf`))throw Error('Incorrect PDF language');
  }
  result.viewers=await checkViewers(page);
  if(result.viewers.length){
   const figure=page.locator('.proof-figure').first();
   await figure.locator('.diagram-tools a[href$=".svg"]').click();
   await page.locator('dialog.diagram-viewer[open]').waitFor();
   await page.screenshot({path:`${out}/screens/${stem}-figure.png`});result.screenshots.push(`${stem}-figure.png`);
   await page.locator('dialog.diagram-viewer[open] [data-close]').click();
  }
  result.language=await checkLanguage(page,target,origin,base);
  if(result.issues.length)throw Error(JSON.stringify(result.issues));
  results.push(result);await page.close();console.log(`PASS ${target.lang} ${target.width} ${target.route}`);
 }
 fs.writeFileSync(out+'/live-browser.json',JSON.stringify({checkedAt:new Date().toISOString(),
  publicationCommit:fs.readFileSync(out+'/publication-commit.txt','utf8').trim(),
  browser:browser.version(),status:'passed',results},null,2)+'\n');
}finally{await browser.close();}
