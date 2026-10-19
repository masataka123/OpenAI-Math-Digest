import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=process.cwd(),out=path.join(root,'coordination/catalog-356/stage2/screens');fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true,channel:'chrome'}),results=[];
const dist=process.env.CATALOG356_DIST??path.join(root,'dist');
const origin='http://catalog356.local',base='/OpenAI-Math-Digest/';
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.pdf':'application/pdf','.woff2':'font/woff2'};
const context=await browser.newContext();
await context.route('**/*',async route=>{
 const u=new URL(route.request().url());let file;
 if(u.hostname==='cdn.jsdelivr.net'&&u.pathname.endsWith('/tex-svg.js'))file=path.join(root,'node_modules/mathjax-full/es5/tex-svg.js');
 else if(u.origin===origin&&u.pathname.startsWith(base)){let rel=decodeURIComponent(u.pathname.slice(base.length));if(rel.endsWith('/'))rel+='index.html';file=path.join(dist,rel);}
 if(!file||!fs.existsSync(file))return route.fulfill({status:404,body:'Not a local build resource'});
 await route.fulfill({status:200,contentType:mime[path.extname(file)]??'application/octet-stream',body:fs.readFileSync(file)});
});
for(const lang of ['ja','en'])for(const width of [1440,375]){
 const page=await context.newPage();await page.setViewportSize({width,height:1000});
 for(const [name,route] of [['home',''],['field','fields/differential-geometry/'],['catalog','catalog/356/'],['main','papers/gigli-characterization/'],['companion','papers/weak-hessian-geodesics/'],['reference034','catalog/034/'],['schnell','papers/schnell-fiber-spaces/'],['orbifold','papers/orbifold-logarithmic-iitaka/']]){
  const errors=[];const listener=e=>errors.push(e.message);page.on('pageerror',listener);
  await page.goto(origin+base+lang+'/'+route,{waitUntil:'load'});
  await page.waitForFunction(()=>window.MathJax?.startup?.promise);await page.evaluate(()=>window.MathJax.startup.promise);
  await page.addStyleTag({content:'*{scroll-behavior:auto!important}'});
  const info=await page.evaluate(()=>({documentWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,figures:document.querySelectorAll('.proof-figure').length,notice:!!document.querySelector('.ai-notice'),guide:!!document.querySelector('.reading-guide'),breadcrumb:document.querySelector('.breadcrumbs')?.textContent}));
  assert.equal(info.documentWidth,width,`${name}/${lang}/${width}: overflow`);assert.equal(info.mathErrors,0);assert.ok(info.notice&&info.guide);
  if(['main','companion'].includes(name)){assert.equal(info.figures,name==='main'?5:3);assert.ok(info.breadcrumb.includes(lang==='ja'?'微分幾何学':'Differential geometry'));assert.ok(!info.breadcrumb.includes('Algebraic'));}
  if(name==='catalog'){assert.equal(await page.locator('.catalog-inventory tbody tr').count(),2);assert.equal(await page.locator('.catalog-pdf a').count(),1);}
  if(name==='home')assert.equal(await page.locator(`.field-card a[href$="/fields/differential-geometry/"]`).count(),1);
  const selectors=['main','companion'].includes(name)?['.family-header','#theorem-1-1','#diagram-sources','#proof-overview','#proof-1','#proof-2','#sources']:name==='catalog'?['.catalog-intro','.catalog-inventory']:name==='home'?['.field-card:has(a[href$="/fields/differential-geometry/"])']:name==='field'?['.family-header']:name==='reference034'?['.catalog-inventory']:name==='schnell'?['#results','#argument']:['#diagram-sources','#proof-1'];
  for(let i=0;i<selectors.length;i++){const loc=page.locator(selectors[i]).first();if(!await loc.count())continue;await loc.evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+scrollY-110));await page.screenshot({path:path.join(out,`${name}-${lang}-${width}-${i}.png`)});}
  if(name==='catalog'&&width===375){await page.locator('.catalog-inventory').evaluate(el=>{const scroller=el.closest('.catalog-inventory-wrap')??el.parentElement;scroller.scrollLeft=scroller.scrollWidth;});await page.screenshot({path:path.join(out,`catalog-${lang}-${width}-table-right.png`)});}
  if(['main','companion'].includes(name)){
   for(let i=0;i<info.figures;i++){
    await page.locator('.diagram-tools a[href$=".svg"]').nth(i).click();assert.equal(await page.locator('dialog[open]').count(),1);
    assert.ok(await page.locator('.diagram-viewer-canvas svg a').count()>0);await page.locator('[data-zoom="in"]').click();await page.locator('[data-fit]').click();
    await page.screenshot({path:path.join(out,`viewer-${name}-${lang}-${width}-${i}.png`)});await page.locator('[data-close]').click();
   }
   await page.evaluate(()=>{location.hash='sources';window.scrollTo(0,document.body.scrollHeight);});
   const sticky=await page.locator('.language-switch').boundingBox();assert.ok(sticky.y>=0&&sticky.y+sticky.height<=1000);
   const other=lang==='ja'?'en':'ja';await page.locator('#language').click();await page.waitForURL(`**/${other}/papers/${name==='main'?'gigli-characterization':'weak-hessian-geodesics'}/#sources`);await page.evaluate(()=>window.MathJax.startup.promise);
   assert.equal(new URL(page.url()).hash,'#sources');info.languageSwitch='anchor preserved';info.figureViewer=`${info.figures} open/zoom/fit/close passed`;info.stickyLanguage='visible after scroll';
  }
  assert.deepEqual(errors,[]);page.off('pageerror',listener);results.push({name,lang,width,...info});
 }
 await page.close();
}
await browser.close();fs.writeFileSync(path.join(root,'coordination/catalog-356/stage2/browser.json'),JSON.stringify(results,null,2)+'\n');console.log(`Passed ${results.length} built-page states, all bilingual article figure viewers and language switches.`);
