import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const out='tmp/catalog-057-stage2/screenshots',base='http://127.0.0.1:4325/OpenAI-Math-Digest/';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context=await browser.newContext();await context.route('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',r=>r.fulfill({path:'node_modules/mathjax-full/es5/tex-svg.js',contentType:'text/javascript'}));
const page=await context.newPage(),report=[];
async function ready(){await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await MathJax.startup.promise;await document.fonts.ready;});}
for(const lang of ['ja','en']){
 await page.setViewportSize({width:375,height:900});await page.goto(base+lang+'/catalog/057/');await ready();
 const scroll=await page.locator('.catalog-inventory').evaluate(el=>{const w=el.closest('.digest-table-wrap');w.scrollLeft=w.scrollWidth;return {width:w.clientWidth,scrollWidth:w.scrollWidth,overflow:getComputedStyle(w).overflowX,scrolled:w.scrollLeft,documentWidth:document.documentElement.scrollWidth};});
 assert.equal(scroll.documentWidth,375);assert.equal(scroll.overflow,'auto');assert.ok(scroll.scrolled>0);
 await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});await page.locator('.catalog-inventory').evaluate(el=>el.closest('.digest-table-wrap').scrollIntoView());
 await page.screenshot({path:`${out}/${lang}-catalog-scroll-375.png`});report.push({lang,...scroll});
}
await fs.writeFile('tmp/catalog-057-stage2/scroll-check.json',JSON.stringify(report,null,2)+'\n');await browser.close();console.log(JSON.stringify(report));
