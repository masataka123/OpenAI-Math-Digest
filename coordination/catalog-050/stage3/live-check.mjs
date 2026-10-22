import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {chromium} from 'playwright-core';
import {browserTargets} from '../../../scripts/check-browser.mjs';
import {ready,inspectPage,checkViewers,checkLanguage} from '../../../scripts/browser/inspect-page.mjs';

const root=fileURLToPath(new URL('../../../',import.meta.url));
const buildRoot=path.resolve(process.argv[2]??root);
const output=path.join(root,'coordination/catalog-050/stage3');
const origin='https://masataka123.github.io',base='/OpenAI-Math-Digest/';
const commit='61634a438452ab557ddff68820bf7edb6d24d3e1';
const hash=b=>createHash('sha256').update(b).digest('hex');
const save=(file,value)=>writeFile(path.join(output,file),JSON.stringify(value,null,2)+'\n');
await mkdir(path.join(output,'screens'),{recursive:true});
const catalog={id:'050',paperIds:['ample-quadric']};
const routes=['ja/','en/',...['ja','en'].flatMap(lang=>[
 `${lang}/fields/algebraic-complex-geometry/`,`${lang}/catalog/050/`,`${lang}/papers/ample-quadric/`])];
const resources=new Map(routes.map(route=>[route,path.join(buildRoot,'dist',route,'index.html')]));
for(const file of await readdir(path.join(root,'public/diagrams/catalog-050/ample-quadric')))
 resources.set('diagrams/catalog-050/ample-quadric/'+file,path.join(root,'public/diagrams/catalog-050/ample-quadric',file));
for(const lang of ['ja','en'])resources.set(`pdf/catalog-050-${lang}.pdf`,path.join(root,`public/pdf/catalog-050-${lang}.pdf`));
for(const [route,file] of [...resources])if(file.endsWith('.html')){
 const html=await readFile(file,'utf8');
 for(const match of html.matchAll(/(?:src|href)="(\/OpenAI-Math-Digest\/_astro\/[^"#?]+)"/g)){
  const resource=match[1].slice(base.length);resources.set(resource,path.join(buildRoot,'dist',resource));
 }
}
const raw={commit,buildRoot,startedAt:new Date().toISOString(),comparison:'Published response bytes against a build of the publication commit/public assets',results:[]};
const entries=[...resources];
for(let i=0;i<entries.length;i+=6)await Promise.all(entries.slice(i,i+6).map(async([route,file])=>{
 const row={route,url:origin+base+route};
 try{
  const response=await fetch(row.url+'?verify='+commit,{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});
  const bytes=Buffer.from(await response.arrayBuffer());
  Object.assign(row,{status:response.status,contentType:response.headers.get('content-type'),bytes:bytes.length,
   localSha256:hash(await readFile(file)),publishedSha256:hash(bytes)});
  row.match=row.status===200&&row.localSha256===row.publishedSha256;
 }catch(error){row.match=false;row.error=error.message;}
 raw.results.push(row);
}));
raw.finishedAt=new Date().toISOString();raw.passed=raw.results.every(r=>r.match);
await save('live-resources.json',raw);
console.log('Resource identity:',raw.passed,raw.results.length,'responses');
if(!raw.passed)throw Error('Published resources differ: '+raw.results.filter(r=>!r.match).map(r=>r.route).join(', '));

const report={commit,startedAt:new Date().toISOString(),mathJax:'Real configured CDN; common inspection helpers',results:[],navigation:[]};
const browser=await chromium.launch({channel:'chrome',headless:true});
try{
 report.browser=browser.version();
 const context=await browser.newContext();context.setDefaultTimeout(15000);
 for(const target of browserTargets(catalog,true)){
  const page=await context.newPage();await page.setViewportSize({width:target.width,height:900});
  const row={...target,issues:[],screenshots:[]},errors=[];
  page.on('pageerror',e=>errors.push('JavaScript: '+e.message));
  page.on('requestfailed',r=>errors.push('Request: '+r.url()+' '+r.failure()?.errorText));
  page.on('response',r=>{if(r.status()>=400)errors.push('HTTP '+r.status()+': '+r.url());});
  try{
   const response=await page.goto(origin+base+target.lang+'/'+target.route,{waitUntil:'load'});
   if(response.status()!==200)throw Error('Page HTTP '+response.status());
   await ready(page);await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
   // Visit lazy images and await decoding before classifying an image as broken.
   await page.evaluate(async()=>{
    const position=scrollY;
    for(const img of document.images){
     if(!img.complete)img.scrollIntoView();
     await img.decode();
    }
    scrollTo(0,position);
   });
   row.layout=await page.evaluate(inspectPage);row.issues.push(...row.layout.issues);
   if(target.kind==='catalog'){
    row.inventory=await page.locator('.catalog-inventory').evaluateAll(es=>es.map(e=>({columns:e.querySelector('thead tr')?.children.length,rows:e.querySelectorAll('tbody tr').length})));
    if(row.inventory.length!==1||row.inventory[0].columns!==4||row.inventory[0].rows!==1)throw Error('Official four-column inventory mismatch');
    row.pdfLinks=await page.locator('.catalog-pdf a[href]').evaluateAll(es=>es.map(e=>e.href));
    if(!row.pdfLinks.some(url=>url.endsWith(`/catalog-050-${target.lang}.pdf`)))throw Error('Missing corresponding PDF');
   }
   const stem=`${target.lang}-${target.route.replaceAll('/','-')}${target.width}`;
   const screenshot=`screens/${stem}.png`;
   await page.screenshot({path:path.join(output,screenshot),fullPage:true,animations:'disabled'});row.screenshots.push(screenshot);
   if(target.kind!=='reference')row.viewers=await checkViewers(page);
   if(target.kind==='paper'){
    await page.locator('.proof-figure .diagram-tools a[href$=".svg"]').first().click();
    await page.locator('dialog[open] [data-fit]').click();
    const enlarged=`screens/${stem}-figure.png`;
    await page.screenshot({path:path.join(output,enlarged),animations:'disabled'});row.screenshots.push(enlarged);
    await page.locator('dialog[open] [data-close]').click();
   }
   if(target.kind!=='reference')row.language=await checkLanguage(page,target,origin,base);
  }catch(error){row.issues.push(error.message);}
  row.issues.push(...errors);row.passed=row.issues.length===0;
  report.results.push(row);await page.close();await save('live-browser.json',report);
  console.log(row.passed?'PASS':'FAIL',target.lang,target.width,target.route);
 }
 for(const lang of ['ja','en']){
  const page=await context.newPage();await page.setViewportSize({width:375,height:900});
  const row={lang,width:375,issues:[]};
  try{
   await page.goto(origin+base+lang+'/');await ready(page);
   await page.locator(`a[href="${base}${lang}/fields/algebraic-complex-geometry/"]`).first().click();
   await ready(page);row.field=page.url();
   await page.locator(`a[href="${base}${lang}/catalog/050/"]`).first().click();
   await ready(page);row.catalog=page.url();
   await page.locator(`.catalog-inventory a[href="${base}${lang}/papers/ample-quadric/"]`).first().click();
   await ready(page);row.paper=page.url();
  }catch(error){row.issues.push(error.message);}
  row.passed=row.issues.length===0;report.navigation.push(row);await page.close();
 }
}finally{await browser.close();}
report.finishedAt=new Date().toISOString();report.passed=[...report.results,...report.navigation].every(r=>r.passed);
await save('live-browser.json',report);
console.log('Browser result:',report.passed);
if(!report.passed)process.exitCode=1;
