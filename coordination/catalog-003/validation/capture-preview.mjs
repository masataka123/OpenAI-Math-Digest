// Stage-1 harness adapted from catalog-060; shared inspector is read-only.
import {inspectPage} from '../../../scripts/browser/inspect-page.mjs';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=process.cwd(), dir=path.join(root,'coordination/catalog-003/validation'), out=path.join(dir,'screens');
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const inventory=JSON.parse(fs.readFileSync('coordination/catalog-003/inventory.json','utf8'));
const draftNames=[...inventory.manuscripts.map(p=>p.paperId),'overview'];
const checks=[];
for(const lang of ['ja','en'])for(const width of [1280,375])for(const name of [...draftNames,'schnell','orbifold','catalog034']){
 if(process.env.QA_NAMES&&!process.env.QA_NAMES.split(',').includes(name))continue;
 if(process.env.QA_WIDTHS&&!process.env.QA_WIDTHS.split(',').map(Number).includes(width))continue;
 const file=path.join(dir,'preview',`${name}.${lang}.html`);if(!fs.existsSync(file))continue;
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
 const errors=[];page.on('pageerror',e=>errors.push(String(e)));
 await page.goto(`file://${file}`,{waitUntil:'load'});
 await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
 await page.evaluate(async()=>{if(window.MathJax?.startup?.promise)await window.MathJax.startup.promise;await document.fonts.ready;});
 const shared=await page.evaluate(inspectPage);
 const check=await page.evaluate(()=>({title:document.title,bodyWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error]').length,unrenderedMathCommands:[...document.querySelectorAll('mjx-container')].map(x=>x.textContent).filter(t=>/\\[A-Za-z]+/.test(t)),mathCount:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length,statements:document.querySelectorAll('.theorem-statement').length,tableColumns:document.querySelector('.catalog-inventory thead tr')?.children.length??0,tables:[...document.querySelectorAll('.digest-table-wrap')].map(x=>({client:x.clientWidth,scroll:x.scrollWidth})),sourceFont:document.querySelector('.source-line')?getComputedStyle(document.querySelector('.source-line')).fontSize:null,bodyFont:getComputedStyle(document.body).fontSize,missingLocalAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(id)),mathOverflows:[...document.querySelectorAll('mjx-container[display="true"]')].filter(x=>x.scrollWidth>x.clientWidth+1).map(x=>({clientWidth:x.clientWidth,scrollWidth:x.scrollWidth,overflowX:getComputedStyle(x).overflowX,section:x.closest('section')?.id,formula:x.textContent})),languageLink:document.querySelector('#language')?.getAttribute('href'),figureCaptions:[...document.querySelectorAll('.proof-figure figcaption')].map(e=>e.textContent),externalLinks:[...document.querySelectorAll('a[href]')].filter(e=>/^https?:/.test(e.getAttribute('href'))).length,unexpandedTokens:document.body.innerText.match(/CATALOGINVENTORYTOKEN|TEXMATH\d+TOKEN|PROOFDIAGRAM\d+TOKEN/g)??[]}));
 check.sharedInspection=shared;check.name=name;check.lang=lang;check.width=width;check.pageErrors=errors;
 check.htmlSha256=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
 check.checkedAt=new Date().toISOString();
 await page.screenshot({path:path.join(out,`${name}.${lang}.${width}.top.png`)});
 if(draftNames.includes(name)){const figs=page.locator('.proof-figure');for(let i=0;i<await figs.count();i++){await figs.nth(i).evaluate(x=>window.scrollTo(0,window.scrollY+x.getBoundingClientRect().top-120));await page.screenshot({path:path.join(out,`${name}.figure-context-${i+1}.${lang}.${width}.png`)});}}
 if(draftNames.includes(name)) await page.screenshot({path:path.join(out,`${name}.${lang}.${width}.full.png`),fullPage:true});
 for(const [label,selector] of [['results','#results'],['references','#diagram-sources'],['proof','.proof-figure'],['inventory','.catalog-inventory'],['normalization','#proof-overview-step-1'],['proof-target','#proof-1'],['step-one','#proof-1-step-1'],['finish','#proof-1-step-6'],['sources','#sources']]){
  const el=page.locator(selector).first();if(await el.count()){await el.evaluate(x=>window.scrollTo({top:window.scrollY+x.getBoundingClientRect().top-120,behavior:'instant'}));await page.waitForTimeout(180);await page.screenshot({path:path.join(out,`${name}.${lang}.${width}.${label}.png`)});}
 }
 if(name==='overview'&&width===375){const table=page.locator('.catalog-inventory');if(await table.count()){await table.evaluate(x=>{window.scrollTo({top:window.scrollY+x.getBoundingClientRect().top-120,behavior:'instant'});x.parentElement.scrollLeft=x.parentElement.scrollWidth;});await page.waitForTimeout(180);await page.screenshot({path:path.join(out,`${name}.${lang}.${width}.inventory-right.png`)});}}
 if(draftNames.includes(name)&&name!=='overview'&&width===375){
  const math=page.locator('#theorem-1-1 mjx-container[display="true"]').first();
  if(await math.count()){
   await math.evaluate(x=>{window.scrollTo({top:window.scrollY+x.getBoundingClientRect().top-260,behavior:'instant'});x.scrollLeft=x.scrollWidth;});await page.waitForTimeout(180);
   check.theorem1MathRight=await math.evaluate(x=>({clientWidth:x.clientWidth,scrollWidth:x.scrollWidth,scrollLeft:x.scrollLeft,overflowX:getComputedStyle(x).overflowX}));
   await page.screenshot({path:path.join(out,`${name}.${lang}.${width}.theorem-math-right.png`)});
  }
 }
 if(draftNames.includes(name)&&name!=='overview'){
  await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
  const figs=page.locator('.proof-figure');for(let i=0;i<await figs.count();i++){await figs.nth(i).evaluate(x=>window.scrollTo({top:window.scrollY+x.getBoundingClientRect().top,behavior:'instant'}));await page.waitForTimeout(180);await figs.nth(i).screenshot({path:path.join(out,`${name}.figure-${i+1}.${lang}.${width}.png`)});}
 }
 checks.push(check);await page.close();
}
await browser.close();
fs.writeFileSync(path.join(dir,process.env.QA_REPORT??'screen-checks.json'),JSON.stringify(checks,null,2));
console.log(JSON.stringify(checks.map(({name,lang,width,bodyWidth,mathErrors,pageErrors})=>({name,lang,width,bodyWidth,mathErrors,pageErrors})),null,2));
