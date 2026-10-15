import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire('/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const {chromium}=require('playwright');
const root='coordination/catalog-087/stage3',screens=`${root}/screens`;fs.mkdirSync(screens,{recursive:true});
const base='https://masataka123.github.io/OpenAI-Math-Digest/';
const entries=['catalog/087','papers/symmetric-mahler','papers/general-mahler','papers/symplectic-polar-products'];
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const results=[];
for(const route of entries.filter(x=>!process.argv[2]||x===process.argv[2]))for(const lang of ['ja','en'])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',e=>errors.push(String(e)));
 const response=await page.goto(`${base}${lang}/${route}/`,{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.MathJax?.startup?.document?.state()!=null,{timeout:30000});
 await page.evaluate(()=>window.MathJax.startup.promise);
 const checks=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,mathExpressions:document.querySelectorAll('mjx-container').length,mathErrors:[...document.querySelectorAll('[data-mml-node="merror"],mjx-merror')].map(x=>x.textContent),figures:document.querySelectorAll('.proof-figure').length,brokenHashes:[...document.querySelectorAll('a[href^="#"]')].map(x=>x.getAttribute('href').slice(1)).filter(x=>x&&!document.getElementById(decodeURIComponent(x))),aiNotice:!!document.querySelector('.ai-notice'),guideImage:!!document.querySelector('main img'),pdf:document.querySelector('.catalog-pdf a')?.getAttribute('href'),tableRows:document.querySelectorAll('.catalog-inventory tbody tr').length}));
 const stem=`${route.split('/').at(-1)}.${lang}.${width}`;
 await page.screenshot({path:`${screens}/${stem}.top.png`});
 for(const [label,selector] of [['references','#diagram-sources'],['proof','.proof-section'],['table','.catalog-inventory']]){
  const el=page.locator(selector).first();if(await el.count()){await el.evaluate(e=>{document.documentElement.style.scrollBehavior='auto';e.scrollIntoView();scrollBy(0,-115)});await page.screenshot({path:`${screens}/${stem}.${label}.png`});}
 }
 if(route==='catalog/087'){const href=checks.pdf;checks.pdfStatus=href?(await page.request.get(new URL(href,base).href)).status():null;checks.pdfBeforeInventory=await page.evaluate(()=>{const a=document.querySelector('.catalog-pdf'),b=document.querySelector('.catalog-inventory');return !!a&&!!b&&!!(a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING)});await page.locator('.catalog-pdf').scrollIntoViewIfNeeded();await page.screenshot({path:`${screens}/${stem}.pdf-link.png`});}
 const own=route.includes('087')||route.includes('mahler')||route.includes('symplectic');
 if(own){
  const figures=page.locator('.proof-figure');
  for(let i=0;i<await figures.count();i++)await figures.nth(i).screenshot({path:`${screens}/${stem}.figure-${i+1}.png`});
  const link=page.locator('.diagram-tools a[href$=".svg"]').first();
  if(await link.count()){
   await link.click();checks.viewerOpened=await page.locator('dialog').evaluate(e=>e.open);
   checks.viewerCitations=await page.locator('.diagram-viewer-canvas svg a').count();
   await page.locator('[data-zoom="in"]').click();await page.locator('[data-fit]').click();
   await page.screenshot({path:`${screens}/${stem}.viewer.png`});await page.keyboard.press('Escape');
   checks.viewerClosed=!(await page.locator('dialog').evaluate(e=>e.open));
  }
  await page.evaluate(()=>{location.hash=document.querySelector('.proof-section')?.id||'sources'});
  await page.waitForTimeout(50);
  const hash=await page.evaluate(()=>location.hash);
  checks.languageHash=(await page.locator('#language').getAttribute('href')).endsWith(hash);
  checks.switchVisibleAfterScroll=await page.locator('.language-switch').evaluate(e=>{const r=e.getBoundingClientRect();return r.top>=0&&r.bottom<innerHeight});
  await page.locator('#language').click();await page.waitForLoadState('networkidle');
  checks.languageDestination=page.url().includes(`/${lang==='ja'?'en':'ja'}/`)&&page.url().endsWith(hash);
 }
 results.push({route,lang,viewport:width,status:response.status(),...checks,errors});await page.close();
}
await browser.close();
const failures=results.filter(x=>x.status!==200||(x.route==='catalog/087'&&(x.pdfStatus!==200||!x.pdfBeforeInventory))||x.scrollWidth>x.width+2||x.mathErrors.length||x.brokenHashes.length||x.errors.length||x.viewerOpened===false||x.viewerClosed===false||x.languageHash===false||x.languageDestination===false||x.switchVisibleAfterScroll===false);
fs.writeFileSync(`${root}/site-checks${process.argv[2]?'-final-catalog':''}.json`,JSON.stringify({checkedAt:new Date().toISOString(),results,failures},null,2));console.log(JSON.stringify({conditions:results.length,failures},null,2));
