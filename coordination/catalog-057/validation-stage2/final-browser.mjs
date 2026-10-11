import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const out='tmp/catalog-057-stage2/screenshots',base='http://127.0.0.1:4325/OpenAI-Math-Digest/';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext();await context.route('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',r=>r.fulfill({path:'node_modules/mathjax-full/es5/tex-svg.js',contentType:'text/javascript'}));
const page=await context.newPage(),report=[];
async function ready(){await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await MathJax.startup.promise;await document.fonts.ready;});}
for(const lang of ['ja','en'])for(const width of [1280,375]){
 await page.setViewportSize({width,height:1000});await page.goto(base+lang+'/catalog/057/');await ready();
 await page.screenshot({path:`${out}/${lang}-catalog-final-${width}.png`});
 const pdf=await page.locator('.catalog-pdf').innerText();assert.ok(!pdf.includes('未生成'));
 const href=await page.locator('.catalog-pdf a').getAttribute('href');const response=await context.request.get(new URL(href,base).href);assert.equal(response.status(),200);
 assert.deepEqual(await response.body(),await fs.readFile(`public/pdf/catalog-057-${lang}.pdf`));
 await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
 await page.locator('.catalog-inventory').screenshot({path:`${out}/${lang}-catalog-inventory-final-${width}.png`});
 const table=await page.locator('.catalog-inventory').evaluate(el=>({width:el.clientWidth,scrollWidth:el.scrollWidth,overflow:getComputedStyle(el).overflowX}));
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),width);
 report.push({lang,width,pdf,bytes:(await response.body()).length,table});
 for(const id of ['special-kahler-abelianity','two-step-monodromy','half-weight-fourfold-abelianity']){
  await page.goto(base+lang+'/papers/'+id+'/');await ready();await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
  for(const [sel,label] of [['#results','results'],['#diagram-sources','references'],['.proof-section','proof']])await page.locator(sel).first().screenshot({path:`${out}/${lang}-${id}-${label}-final-${width}.png`});
 }
}
await fs.writeFile('tmp/catalog-057-stage2/final-browser.json',JSON.stringify(report,null,2)+'\n');await browser.close();console.log(JSON.stringify(report));
