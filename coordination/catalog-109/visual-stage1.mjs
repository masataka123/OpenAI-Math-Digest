// Local Stage 1 previews only. Final site behavior/PDF remain Stage 2 checks.
import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright-core';
const root=path.resolve('coordination/catalog-109/validation');
const out=root+'/screens';fs.mkdirSync(out,{recursive:true});
const englishArticleOnly=process.argv.includes('--english-article');
const allSpecs=JSON.parse(fs.readFileSync(root+'/preview-report.json'));
const specs=allSpecs.filter(s=>!englishArticleOnly||s.lang==='en'&&s.paperId!=='overview');
const browser=await chromium.launch({channel:'chrome',headless:true});
const previous=englishArticleOnly?JSON.parse(fs.readFileSync(root+'/visual-report.json')):null;
const report=previous?previous.report.filter(s=>!(s.lang==='en'&&s.paperId!=='overview')):[];
const errors=[];
for(const spec of specs)for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:950}});
 page.on('pageerror',e=>errors.push(String(e)));
 await page.goto('file://'+root+`/preview/${spec.paperId}.${spec.lang}.html`);
 await page.evaluate(()=>document.fonts.ready);
 const measurement=await page.evaluate(()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,figures:document.querySelectorAll('.proof-figure').length,sourceLines:document.querySelectorAll('.source-line').length,inventoryColumns:document.querySelectorAll('.catalog-inventory thead th').length,theorems:document.querySelectorAll('.theorem-statement').length,missingSvgGlyphs:[...document.querySelectorAll('svg use')].filter(e=>{const ref=e.getAttribute('href')||e.getAttribute('xlink:href');return ref?.startsWith('#')&&!document.getElementById(ref.slice(1));}).length}));
 await page.screenshot({path:`${out}/${spec.paperId}.${spec.lang}.${width}.top.png`});
 // Focused element captures must not contain the viewport's fixed masthead.
 await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
 for(const selector of ['#papers','#results','#diagram-sources','#proof-1','#proof-2','#proof-3','#sources'])if(await page.locator(selector).count()){
  await page.locator(selector).first().evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));
  await page.screenshot({path:`${out}/${spec.paperId}.${spec.lang}.${width}.${selector.slice(1)}.png`});
 }
 if(width===1280)for(let i=0;i<measurement.figures;i++)await page.locator('.proof-diagram').nth(i).screenshot({path:`${out}/${spec.paperId}.${spec.lang}.figure-${i+1}.png`});
 report.push({...spec,width,...measurement});await page.close();
}
if(!englishArticleOnly)for(const lang of ['ja','en'])for(const [name,selector] of [['034','.catalog-inventory'],['schnell','#argument'],['orbifold','#diagram-sources']])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:950}});
 await page.goto('file://'+root+`/preview/reference-${name}.${lang}.html`);
 await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
 if(await page.locator(selector).count())await page.locator(selector).first().screenshot({path:`${out}/reference-${name}.${lang}.${width}.png`});
 else errors.push('Missing reference selector '+name+' '+selector);
 await page.close();
}
await browser.close();
const failures=report.filter(r=>r.scrollWidth>r.width||r.mathErrors||r.missingSvgGlyphs||(r.paperId==='overview'&&r.inventoryColumns!==4));
fs.writeFileSync(root+'/visual-report.json',JSON.stringify({scope:'Unregistered Stage 1 local preview with current shared renderer and CSS; no site registration, booklet PDF or final navigation check.',report,errors,failures},null,2)+'\n');
fs.writeFileSync(root+'/images.html','<!doctype html><meta charset="utf-8"><title>109 Stage 1 QA</title>'+fs.readdirSync(out).filter(n=>n.endsWith('.png')).map(n=>`<p><a href="screens/${n}">${n}</a></p><img src="screens/${n}" style="max-width:100%;border:1px solid #ccc">`).join('\n'));
console.log({pages:report.length,errors,failures});
if(errors.length||failures.length)process.exitCode=1;
