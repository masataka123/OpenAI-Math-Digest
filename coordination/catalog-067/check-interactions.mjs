import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({viewport:{width:375,height:950}}),report=[];
for(const lang of ['ja','en'])for(const id of ['campana-peternell-six','overview']){
 await page.goto(`http://127.0.0.1:43867/preview/${id}.${lang}.html`);
 await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await MathJax.startup.promise;await document.fonts.ready;});
 const checks=await page.evaluate(()=>{
  const brokenAnchors=[...document.querySelectorAll('.draft-body a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>!document.getElementById(id));
  const scrollers=[...document.querySelectorAll('.draft-body *')].filter(e=>e.scrollWidth>e.clientWidth+1&&['auto','scroll'].includes(getComputedStyle(e).overflowX)).map(e=>{e.scrollLeft=e.scrollWidth;return {tag:e.tagName,className:e.className,width:e.clientWidth,scrollWidth:e.scrollWidth,scrolled:e.scrollLeft>0};});
  const assets=[...document.querySelectorAll('.draft-body a')].map(a=>a.href).filter(h=>/\/diagrams\/catalog-067\/.*\.(svg|tex)$/.test(h));
  const sources=[...document.querySelectorAll('.proof-diagram a')].map(a=>a.getAttribute('href')||a.getAttribute('xlink:href')).filter(Boolean);
  return {brokenAnchors,scrollers,assets,sources: sources.length};
 });
 for(const href of checks.assets){const res=await page.request.get(href);if(!res.ok())throw Error('Failed asset '+href);}
 if(checks.brokenAnchors.length||checks.scrollers.some(x=>!x.scrolled))throw Error(JSON.stringify(checks));
 if(id==='overview'){
  if(!checks.scrollers.some(x=>x.scrollWidth>=900))throw Error('Missing table scroll');
  await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
  await page.locator('.digest-table-wrap').screenshot({path:`coordination/catalog-067/validation/screens/overview.${lang}.375.inventory-right.png`});
 }
 report.push({lang,id,...checks});
}
await browser.close();fs.writeFileSync('coordination/catalog-067/validation/interactions.json',JSON.stringify(report,null,2)+'\n');console.log(report.map(({assets,...x})=>({...x,assets:assets.length})));
