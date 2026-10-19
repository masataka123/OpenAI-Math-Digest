import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=process.cwd(),dir=path.join(root,'coordination/catalog-357/stage2'),out=path.join(dir,'screens');
const origin='http://127.0.0.1:8357',base='/OpenAI-Math-Digest/',paper='regular-rcd-coordinates';
const browser=await chromium.launch({headless:true,channel:'chrome'}),context=await browser.newContext(),results=[],resources=new Map();
const routes={home:'',field:'fields/differential-geometry/',catalog:'catalog/357/',article:`papers/${paper}/`,catalog034:'catalog/034/',schnell:'papers/schnell-fiber-spaces/',orbifold:'papers/orbifold-logarithmic-iitaka/'};
const source=JSON.parse(fs.readFileSync('coordination/catalog-357/inventory.json','utf8')).manuscripts[0].sourceUrl;
const startedAt=new Date().toISOString();
async function ready(page){await page.waitForFunction(()=>window.MathJax?.startup?.promise,{timeout:30000});await page.evaluate(()=>window.MathJax.startup.promise);await page.evaluate(()=>document.fonts.ready);}
async function snap(page,filename,selector){if(selector){const loc=page.locator(selector).first();if(!await loc.count())return;await loc.evaluate(e=>window.scrollTo({top:scrollY+e.getBoundingClientRect().top-120,behavior:'instant'}));}await page.waitForTimeout(180);await page.screenshot({path:path.join(out,filename)});}
for(const lang of ['ja','en'])for(const width of [1280,375])for(const [name,route] of Object.entries(routes)){
 const page=await context.newPage();await page.setViewportSize({width,height:900});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const record={name,lang,width,url:origin+base+lang+'/'+route};
 try{
  const response=await page.goto(record.url,{waitUntil:'load'});assert.equal(response.status(),200);await ready(page);
  // Disable animated scrolling only for repeatable captures; no layout overrides.
  await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  Object.assign(record,await page.evaluate(()=>({documentWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('mjx-merror,[data-mjx-error],[data-mml-node="merror"]').length,unrenderedMathCommands:[...document.querySelectorAll('mjx-container')].map(x=>x.textContent).filter(t=>/\\[A-Za-z]+/.test(t)),mathCount:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length,statements:document.querySelectorAll('.theorem-statement').length,tableColumns:document.querySelector('.catalog-inventory thead tr')?.children.length??0,tableRows:document.querySelectorAll('.catalog-inventory tbody tr').length,notice:!!document.querySelector('.ai-notice'),breadcrumb:document.querySelector('.breadcrumbs')?.textContent,missingAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(id)),tableWidths:[...document.querySelectorAll('.digest-table-wrap')].map(x=>({client:x.clientWidth,scroll:x.scrollWidth})),mathOverflows:[...document.querySelectorAll('mjx-container[display="true"]')].filter(x=>x.scrollWidth>x.clientWidth+1).map(x=>({client:x.clientWidth,scroll:x.scrollWidth,overflowX:getComputedStyle(x).overflowX,section:x.closest('section')?.id})),sourceFont:document.querySelector('.source-line')?getComputedStyle(document.querySelector('.source-line')).fontSize:null})));
  assert.equal(record.documentWidth,width,'document overflow');assert.equal(record.mathErrors,0);assert.deepEqual(record.unrenderedMathCommands,[]);assert.deepEqual(record.missingAnchors,[]);assert.ok(record.notice);
  if(name==='article'){assert.equal(record.figures,5);assert.equal(record.statements,5);assert.ok(record.breadcrumb.includes(lang==='ja'?'微分幾何学':'Differential geometry'));}
  if(name==='catalog'){assert.equal(record.tableColumns,4);assert.equal(record.tableRows,1);record.pdfLinks=await page.locator('.catalog-pdf a').evaluateAll(a=>a.map(x=>x.href));}
  await snap(page,`${name}.${lang}.${width}.top.png`);
  const selectors=name==='article'?{results:'#results',references:'#diagram-sources',proof:'#proof-overview',normalization:'#proof-overview-step-1',sources:'#sources'}:name==='catalog'||name==='catalog034'?{inventory:'.catalog-inventory'}:name==='schnell'?{results:'#results',proof:'.proof-figure'}:name==='orbifold'?{references:'#diagram-sources'}:name==='home'?{field:'a[href$="/fields/differential-geometry/"]'}:{catalog:'a[href$="/catalog/357/"]'};
  for(const [label,selector]of Object.entries(selectors))await snap(page,`${name}.${lang}.${width}.${label}.png`,selector);
  if(name==='catalog'&&width===375){await page.locator('.catalog-inventory').evaluate(x=>x.parentElement.scrollLeft=x.parentElement.scrollWidth);await snap(page,`${name}.${lang}.${width}.inventory-right.png`);}
  if(name==='article'&&width===375){const math=page.locator('#theorem-1-1 mjx-container[display="true"]').first();await math.evaluate(x=>{window.scrollTo({top:scrollY+x.getBoundingClientRect().top-220,behavior:'instant'});x.scrollLeft=x.scrollWidth;});record.theoremMathRight=await math.evaluate(x=>({width:x.clientWidth,scrollWidth:x.scrollWidth,left:x.scrollLeft,overflowX:getComputedStyle(x).overflowX}));assert.ok(record.theoremMathRight.left>0);await snap(page,`article.${lang}.${width}.math-right.png`);}
  if(name==='home'){
   await page.locator(`a[href="${base}${lang}/fields/differential-geometry/"]`).first().click();await page.waitForURL(`**/${lang}/fields/differential-geometry/`);await ready(page);
   await page.locator(`a[href="${base}${lang}/catalog/357/"]`).first().click();await page.waitForURL(`**/${lang}/catalog/357/`);await ready(page);
   await page.locator(`.catalog-inventory a[href="${base}${lang}/papers/${paper}/"]`).first().click();await page.waitForURL(`**/${lang}/papers/${paper}/`);await ready(page);
   await page.locator('a[href="#proof-overview"]').first().click();assert.equal(new URL(page.url()).hash,'#proof-overview');record.navigation='home → Differential geometry → 357 → article → proof-overview';
  }
  if(name==='article'||name==='catalog'){
   record.localTargets=await page.locator('main a[href]').evaluateAll(els=>[...new Set(els.map(a=>a.href).filter(h=>h.startsWith(location.origin)))].filter(h=>!h.includes('#')));
   for(const target of record.localTargets)if(!resources.has(target)){const r=await context.request.get(target);resources.set(target,{url:target,status:r.status(),contentType:r.headers()['content-type'],bytes:(await r.body()).length});assert.equal(r.status(),200,`Local target: ${target}`);}
   record.originalTargets=await page.locator('main a[href], main svg a').evaluateAll(els=>[...new Set(els.map(a=>a.getAttribute('href')??a.getAttribute('xlink:href')).filter(h=>/^https?:/.test(h??'')))]);
   assert.ok(record.originalTargets.some(u=>u===source),'Official source link');
  }
  if(name==='article'){
   record.viewers=[];
   for(let i=0;i<5;i++){
    const link=page.locator('.diagram-tools a[href$=".svg"]').nth(i);await link.click();assert.equal(await page.locator('dialog[open]').count(),1);
    const original=await page.locator('.proof-diagram').nth(i).locator('svg a').evaluateAll(es=>es.map(e=>e.getAttribute('href')??e.getAttribute('xlink:href')));
    const cloned=await page.locator('.diagram-viewer-canvas svg a').evaluateAll(es=>es.map(e=>e.getAttribute('href')??e.getAttribute('xlink:href')));assert.deepEqual(cloned,original);assert.ok(cloned.length>0);
    const before=await page.locator('.diagram-viewer-canvas').evaluate(e=>e.getBoundingClientRect().width);await page.locator('[data-zoom="in"]').click();const after=await page.locator('.diagram-viewer-canvas').evaluate(e=>e.getBoundingClientRect().width);assert.ok(after>before);await page.locator('[data-fit]').click();
    await snap(page,`viewer.${lang}.${width}.${i+1}.png`);await page.locator('[data-close]').click();assert.equal(await page.locator('dialog[open]').count(),0);record.viewers.push({figure:i+1,sourceLinksPreserved:cloned.length,zoomBefore:before,zoomAfter:after,openZoomFitClose:'pass'});
   }
  }
  if(['article','catalog','field'].includes(name)){
   const hash=name==='article'?'sources':name==='catalog'?'inventory':'';await page.evaluate(h=>{if(h)location.hash=h;window.scrollTo(0,document.body.scrollHeight);},hash);await page.waitForTimeout(180);
   const sticky=await page.locator('.language-switch').boundingBox();assert.ok(sticky.y>=0&&sticky.y+sticky.height<=900);record.stickyLanguage=sticky;
   const other=lang==='ja'?'en':'ja';await page.locator('#language').click();await page.waitForURL(origin+base+other+'/'+route+(hash?'#'+hash:''));await ready(page);assert.equal(new URL(page.url()).hash,hash?'#'+hash:'');record.languageSwitch={to:other,preservedHash:hash,passed:true};
  }
  assert.deepEqual(errors,[]);record.status='pass';
 }catch(e){record.status='fail';record.error=String(e);await page.screenshot({path:path.join(out,`failure.${name}.${lang}.${width}.png`)});}
 record.pageErrors=errors;results.push(record);await page.close();
}
await browser.close();
const manifest=[];for(const lang of ['ja','en'])for(const route of Object.values(routes)){const file=`dist/${lang}/${route}index.html`;manifest.push({file,sha256:crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')});}
fs.writeFileSync(path.join(dir,'browser-checks.json'),JSON.stringify({startedAt,finishedAt:new Date().toISOString(),mathJax:'Actual CDN requested by built Layout; no network substitution',results,resources:[...resources.values()],manifest},null,2)+'\n');
console.log(JSON.stringify(results.map(({name,lang,width,status,error})=>({name,lang,width,status,error})),null,2));if(results.some(r=>r.status!=='pass'))process.exitCode=1;
