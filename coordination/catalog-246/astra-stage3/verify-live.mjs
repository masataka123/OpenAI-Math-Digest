import fs from 'node:fs';import assert from 'node:assert/strict';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const base='https://masataka123.github.io/OpenAI-Math-Digest/',out='coordination/catalog-246/astra-stage3/live';fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});const results=[];
for(const lang of ['ja','en'])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const [kind,route] of [['catalog','catalog/246/'],['article','papers/modulus-cannon/']]){
  const response=await page.goto(base+lang+'/'+route);assert.equal(response.status(),200);
  await page.waitForFunction(()=>window.MathJax?.startup?.promise);await page.evaluate(()=>MathJax.startup.promise);await page.addStyleTag({content:'html,body,*{scroll-behavior:auto!important}'});
  const m=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,figures:document.querySelectorAll('.proof-figure').length,mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error]').length,brokenFragments:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(id))}));assert.equal(m.width,m.scrollWidth);assert.equal(m.mathErrors,0);assert.deepEqual(m.brokenFragments,[]);
  await page.screenshot({path:out+`/${kind}.${lang}.${width}.png`,fullPage:true});
  if(kind==='catalog'){
   assert.equal(await page.locator('.catalog-inventory tbody tr').count(),1);
   const pdf=await page.locator('.catalog-pdf a').getAttribute('href');assert.equal(pdf,`/OpenAI-Math-Digest/pdf/catalog-246-${lang}.pdf`);
   const routeLink=page.locator(`a[href$="/papers/modulus-cannon/#proof-4"]`);await routeLink.click();await page.waitForURL('**/#proof-4');assert.ok(await page.locator('#proof-4').count());
  }else{
   assert.equal(m.figures,6);await page.locator('.diagram-tools a[href$=".svg"]').first().click();await page.locator('.diagram-viewer[open]').waitFor();await page.locator('[data-fit]').click();assert.ok(await page.locator('.diagram-viewer-canvas svg a').count());await page.screenshot({path:out+`/figure.${lang}.${width}.png`});await page.locator('[data-close]').click();
   await page.evaluate(()=>{location.hash='proof-4'});await page.waitForTimeout(80);await page.locator('#language').click();await page.waitForURL('**/#proof-4');assert.ok(page.url().includes('/'+(lang==='ja'?'en':'ja')+'/'));
  }
  results.push({lang,width,kind,...m});
 }
 assert.deepEqual(errors,[]);await page.close();
}
await browser.close();fs.writeFileSync(out+'/browser-verification.json',JSON.stringify({checkedAt:new Date().toISOString(),results},null,2));console.log('PASS: live JA/EN catalogue and article at PC/mobile widths; CDN MathJax, links, figure viewer and language anchor.');
