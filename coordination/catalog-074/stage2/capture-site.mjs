import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out='coordination/catalog-074/stage2',base='/OpenAI-Math-Digest/';
const server=http.createServer((req,res)=>{let url=decodeURIComponent(req.url.split('?')[0]);if(!url.startsWith(base)){res.writeHead(404).end();return;}let f=path.join('dist',url.slice(base.length));if(url.endsWith('/'))f+='index.html';try{const b=fs.readFileSync(f);res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.pdf':'application/pdf'})[path.extname(f)]||'application/octet-stream');res.end(b);}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const origin=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const checks=[];
// Reuses only the existing website QA harness; all mathematical content comes from the completed 074 drafts.
try {
for(const lang of ['ja','en'])for(const width of [1280,375])for(const [name,route] of Object.entries({three:'papers/kakeya-maximal-three/',four:'papers/kakeya-hausdorff-four/',overview:'catalog/074/',schnell:'papers/schnell-fiber-spaces/',orbifold:'papers/orbifold-logarithmic-iitaka/',catalog034:'catalog/034/'})){
 const page=await browser.newPage({viewport:{width,height:900}}),errors=[],failures=[];
 page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)failures.push([r.url(),r.status()]);});
 await page.route('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',route=>route.fulfill({path:'node_modules/mathjax-full/es5/tex-svg.js',contentType:'text/javascript'}));
 await page.goto(`${origin}${base}${lang}/${route}`,{waitUntil:'load'});
 await page.evaluate(async()=>{await window.MathJax?.startup?.promise;await document.fonts.ready;});
 const c=await page.evaluate(()=>({bodyWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error]').length,mathCount:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length,statements:document.querySelectorAll('.theorem-statement').length,tableColumns:document.querySelector('.catalog-inventory thead tr')?.children.length??0,sourceFont:document.querySelector('.source-line')?getComputedStyle(document.querySelector('.source-line')).fontSize:null,bodyFont:getComputedStyle(document.body).fontSize,missingLocalAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(id)),unexpandedTokens:document.body.innerText.match(/CATALOGINVENTORYTOKEN|TEXMATH\d+TOKEN|PROOFDIAGRAM\d+TOKEN/g)??[]}));
 Object.assign(c,{name,lang,width,pageErrors:errors,failedResponses:failures});
 await page.screenshot({path:`${out}/screens/${name}.${lang}.${width}.top.png`});
 for(const [label,selector] of [['results','#results'],['references','#diagram-sources'],['proof','.proof-figure'],['inventory','.catalog-inventory']]){const el=page.locator(selector).first();if(await el.count()){await el.scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/screens/${name}.${lang}.${width}.${label}.png`});}}
 if(['three','four','overview'].includes(name)){
  c.figureChecks=[];const figures=page.locator('.proof-figure');
  for(let i=0;i<await figures.count();i++){
   const fig=figures.nth(i);await fig.locator('.diagram-tools a[href$=".svg"]').click();
   await page.locator('.diagram-viewer[open]').waitFor();await page.locator('[data-fit]').click();
   const f=await page.locator('.diagram-viewer').evaluate(x=>({open:x.open,links:[...x.querySelectorAll('svg a')].map(a=>a.getAttribute('href')||a.getAttribute('xlink:href')),canvasWidth:x.querySelector('.diagram-viewer-canvas').getBoundingClientRect().width,scrollWidth:x.querySelector('.diagram-viewer-scroll').clientWidth}));
   await page.screenshot({path:`${out}/screens/modal-${name}-${i+1}.${lang}.${width}.png`});await page.locator('[data-zoom="in"]').click();f.zoomed=await page.locator('.diagram-viewer-canvas').evaluate(x=>x.getBoundingClientRect().width)>f.canvasWidth;
   await page.locator('[data-close]').click();f.closed=await page.locator('.diagram-viewer').evaluate(x=>!x.open);c.figureChecks.push(f);
  }
 }
 if(['three','four','overview'].includes(name)){
  const anchor=name==='overview'?'sources':'proof-1';await page.evaluate(a=>location.hash=a,anchor);
  c.languageVisible=await page.locator('#language').isVisible();await page.locator('#language').click();await page.waitForLoadState('load');
  c.languageSwitched=page.url().includes(`/${lang==='ja'?'en':'ja'}/${route}`)&&page.url().endsWith('#'+anchor);
  if(name==='overview'){const links=await page.locator('a[href$=".pdf"]').evaluateAll(xs=>xs.map(a=>a.getAttribute('href')).filter(x=>x.includes('/pdf/catalog-074-')));c.pdfLinks=links; c.pdfResponses=[];for(const link of links)c.pdfResponses.push((await page.request.get(new URL(link,origin).href)).status());}
 }
 checks.push(c);await page.close();
}
// Field membership is checked in both rendered languages.
for(const lang of ['ja','en']){const response=await fetch(`${origin}${base}${lang}/fields/real-complex-analysis/`);const text=await response.text();checks.push({name:'field',lang,status:response.status,has074:text.includes('/catalog/074/')});}
fs.writeFileSync(`${out}/screen-checks.json`,JSON.stringify(checks,null,2));
console.log(JSON.stringify(checks.map(({name,lang,width,bodyWidth,mathErrors,languageSwitched,pdfResponses,pageErrors})=>({name,lang,width,bodyWidth,mathErrors,languageSwitched,pdfResponses,pageErrors})),null,2));
}finally{await browser.close();server.close();}
