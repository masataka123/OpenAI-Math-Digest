import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {chromium} from 'playwright-core';
import {serveBuiltSite} from './browser/site-server.mjs';
import {ready,inspectPage,checkViewers,checkLanguage} from './browser/inspect-page.mjs';
import {pdfRuntime} from './pdf/runtime.mjs';

export function browserOptions(args){
 const options={references:false};
 for(let i=0;i<args.length;i++){
  const key=args[i];
  if(key==='--catalog'&&!options.catalog&&/^\d{3}$/.test(args[i+1]??''))options.catalog=args[++i];
  else if(['--dist','--output'].includes(key)&&args[i+1]&&!args[i+1].startsWith('--')&&!options[key.slice(2)])options[key.slice(2)]=args[++i];
  else if(key==='--references'&&!options.references)options.references=true;
  else throw Error(`Unknown or incomplete argument: ${key}`);
 }
 if(!options.catalog)throw Error('Use --catalog NNN [--references] [--dist DIR] [--output DIR].');
 return options;
}
export function browserTargets(catalog,references=false){
 const pages=[{route:`catalog/${catalog.id}/`,kind:'catalog',paperIds:catalog.paperIds},
  ...catalog.paperIds.map(id=>({route:`papers/${id}/`,kind:'paper'}))];
 if(references)for(const route of ['catalog/034/','papers/schnell-fiber-spaces/','papers/orbifold-logarithmic-iitaka/'])
  if(!pages.some(p=>p.route===route))pages.push({route,kind:'reference'});
 return pages.flatMap(page=>['ja','en'].flatMap(lang=>(page.kind==='reference'?[1280]:[1280,375]).map(width=>({...page,lang,width}))));
}
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
function gallery(report){
 return `<!doctype html><meta charset="utf-8"><title>Catalogue ${esc(report.catalog)} — browser checks</title>
 <style>body{font:16px/1.6 system-ui;margin:32px;background:#f7f6f1;color:#25322f}section{border-top:1px solid #bbc6bc;padding:20px 0}img{width:220px;max-height:320px;object-fit:cover;object-position:top;border:1px solid #aaa}a{color:#246657}.fail{color:#a22}ul{padding-left:24px}</style>
 <h1>カタログ ${esc(report.catalog)} の画面検査</h1><p>${esc(report.status)} · ${report.results.length}表示条件</p>
 <p>自動検査とスクリーンショットの記録です。数式や図の意味、文字の重なり、読みやすさは目視してください。画像を開くと原寸で確認できます。</p>
 <p>見本ページはPC幅のみ。PDFの紙面検査は含みません。<a href="report.json">JSON記録</a></p>
 ${report.results.map(r=>`<section><h2 class="${r.status==='fail'?'fail':''}">${esc(r.lang)} / ${r.width}px / ${esc(r.route)} ${r.kind==='reference'?'（見本）':''} — ${esc(r.status)}</h2>
 <ul>${r.issues.map(s=>`<li>${esc(s)}</li>`).join('')}</ul>${r.screenshots.map(file=>`<a href="${esc(file)}"><img loading="lazy" src="${esc(file)}" alt="${esc(file)}"></a>`).join(' ')}</section>`).join('')}`;
}

export async function runBrowserChecks({catalog,targets,dist='dist',output,base='/OpenAI-Math-Digest/',browserPath}){
 dist=path.resolve(dist);output=path.resolve(output);
 await mkdir(output,{recursive:true});
 const report={catalog,startedAt:new Date().toISOString(),status:'running',manualReview:'required',
  mathJax:'Built page scripts, including the real configured CDN; no replacement.',results:[]};
 const save=async()=>{
  await writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  await writeFile(path.join(output,'index.html'),gallery(report));
 };
 let server,browser;
 try {
  // Record the exact built pages under inspection, including the translated targets.
  const files=[...new Set(targets.flatMap(t=>['ja','en'].map(lang=>`${lang}/${t.route}index.html`)))];
  const before=new Map(await Promise.all(files.map(async file=>[file,createHash('sha256').update(await readFile(path.join(dist,file))).digest('hex')])));
  report.htmlHashes=Object.fromEntries(before);
  server=await serveBuiltSite(dist,base);
  browser=await chromium.launch(browserPath?{executablePath:browserPath,headless:true}:{channel:'chrome',headless:true});
  report.browser=browser.version();
  const context=await browser.newContext();
  context.setDefaultTimeout(10000);
  for(const target of targets){
   const result={...target,status:'running',issues:[],screenshots:[]};
   const page=await context.newPage();await page.setViewportSize({width:target.width,height:900});
   const errors=[];page.on('pageerror',e=>errors.push('JavaScript: '+e.message));
   page.on('requestfailed',r=>errors.push(`Resource failed: ${r.url()} (${r.failure()?.errorText})`));
   page.on('response',r=>{if(r.status()>=400)errors.push(`HTTP ${r.status()}: ${r.url()}`);});
   const stem=`${target.lang}-${target.route.replaceAll('/','-')}${target.width}`;
   const snapshot=async(suffix,fullPage)=>{
    const file=`${stem}-${suffix}.png`;await page.screenshot({path:path.join(output,file),fullPage,animations:'disabled',timeout:30000});result.screenshots.push(file);
   };
   try{
    const response=await page.goto(server.origin+base+target.lang+'/'+target.route,{waitUntil:'load',timeout:30000});
    if(response?.status()!==200)throw Error(`Page status: ${response?.status()}`);
    await ready(page);
    // Only disable smooth scrolling for repeatable navigation; do not change layout.
    await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
    result.layout=await page.evaluate(inspectPage);result.issues.push(...result.layout.issues);
    if(target.kind==='catalog'){
     const inventory=await page.locator('.catalog-inventory').evaluateAll(es=>es.map(e=>({columns:e.querySelector('thead tr')?.children.length,rows:[...e.querySelectorAll('tbody tr')].map(r=>[...r.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')))})));
     if(inventory.length!==1||inventory[0].columns!==4||inventory[0].rows.length!==target.paperIds.length)result.issues.push('Catalogue inventory does not match registered papers / four columns');
     else for(const [i,id] of target.paperIds.entries())if(!inventory[0].rows[i].some(href=>href.endsWith(`/${target.lang}/papers/${id}/`)))result.issues.push(`Inventory order/link mismatch: ${id}`);
     const pdf=await page.locator('.catalog-pdf a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')));
     if(!pdf.some(href=>href.endsWith(`/catalog-${catalog}-${target.lang}.pdf`)))result.issues.push('Missing catalogue PDF link');
     result.inventory=inventory;
    }
    await page.evaluate(()=>scrollTo(0,0));await snapshot('page',true);
    if(target.kind!=='reference'){
     result.viewers=await checkViewers(page);
     // Full-page capture records all figures; one enlarged sample per article/case supplements it.
     const first=page.locator('.proof-figure .diagram-tools a[href$=".svg"]').first();
     if(await first.count()){
      await first.click();await page.locator('dialog[open]').waitFor({state:'visible'});
      await page.locator('dialog[open] [data-fit]').click();await snapshot('figure',false);
      await page.locator('dialog[open] [data-close]').click();await page.locator('dialog[open]').waitFor({state:'hidden'});
     }
     result.language=await checkLanguage(page,target,server.origin,base);
    }
   }catch(error){
    result.issues.push(error.message);
    try {await snapshot('failure',false);}catch(capture){result.issues.push('Screenshot failed: '+capture.message);}
   }finally{
    result.issues.push(...errors);result.issues=[...new Set(result.issues)];
    result.status=result.issues.length?'fail':'pass';report.results.push(result);await page.close();await save();
    console.log(`${result.status.toUpperCase()} ${target.lang} ${target.width}px ${target.route}`);
   }
  }
  // A concurrent/repeated build invalidates the evidence instead of yielding a false pass.
  for(const [file,hash] of before)if(createHash('sha256').update(await readFile(path.join(dist,file))).digest('hex')!==hash)throw Error(`Built page changed during inspection: ${file}`);
  report.status=report.results.every(r=>r.status==='pass')?'automated-checks-passed':'failed';
 }catch(error){report.status='failed';report.error=error.message;}
 finally{
  await browser?.close();await server?.close();report.finishedAt=new Date().toISOString();await save();
 }
 return report;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try{
  const options=browserOptions(process.argv.slice(2));
  const {catalogs}=await import('../src/data/site.mjs');const c=catalogs.find(c=>c.id===options.catalog);
  if(!c)throw Error(`Catalogue ${options.catalog} is not registered.`);
  const {default:config}=await import('../astro.config.mjs');
  const env=await pdfRuntime();
  const output=options.output??path.join('tmp/browser-checks',options.catalog,new Date().toISOString().replaceAll(':','-')+'-'+process.pid);
  const report=await runBrowserChecks({...options,output,targets:browserTargets(c,options.references),base:config.base.replace(/\/$/,'')+'/',browserPath:env.PDF_BROWSER_PATH});
  console.log(`Report: ${path.resolve(output,'index.html')}`);
  if(report.status==='failed'){console.error(report.error??'Browser checks failed; inspect report.json and screenshots.');process.exitCode=1;}
 }catch(error){console.error(error.message);process.exitCode=1;}
}
