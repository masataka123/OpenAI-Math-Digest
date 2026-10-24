import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {fromHtml} from 'hast-util-from-html';
import {checkLinks} from '../check-links.mjs';
import {catalogIndex} from './catalog-index.mjs';
import {hash,readJSON,writeJSON,exists,atomic,inside,relative,runtime,command,git,withLock,fingerprint,directoryHash} from './common.mjs';

export function runDirectory(root,name){
 if(!name)throw Error('Specify --run NAME (or the saved run directory).');
 return inside(root,name.includes('/')||path.isAbsolute(name)?name:'coordination/comics/runs/'+name);
}
export function validateManifest(manifest,index){
 if(manifest.version!==1||manifest.sourceCommit!==index.sourceCommit)throw Error('Manifest/source version mismatch');
 if(!manifest.catalogs?.length)throw Error('Empty manifest');const ids=new Set();
 for(const entry of manifest.catalogs){
  const cat=index.catalogs.find(c=>c.id===entry.catalogId);if(!cat||ids.has(entry.catalogId))throw Error('Unknown/duplicate catalogue: '+entry.catalogId);ids.add(entry.catalogId);
  if(!entry.title?.ja?.trim()||!entry.title?.en?.trim()||entry.title.en.includes('\\'))throw Error('Confirm Japanese/English title: '+entry.catalogId);
  if(!entry.scope?.trim()||!entry.targetSourcePaths?.length)throw Error('Record the visible scope and target manuscripts: '+entry.catalogId);
  if(entry.targetSourcePaths.some(p=>!cat.manuscripts.some(m=>m.path===p)))throw Error('Unknown target manuscript: '+entry.catalogId);
  if(!/^v[1-9]\d*$/.test(entry.edition??'v1'))throw Error('Invalid image edition');
  if(!entry.pages?.length||entry.pages.some(p=>!p.input?.file||!/^([a-f0-9]{64})$/.test(p.sha256)||!(p.width>0&&p.height>0)))throw Error('Invalid input pages: '+entry.catalogId);
  if(entry.supplement&&(entry.supplement.status!=='approved'||!entry.supplement.author?.trim()||!entry.supplement.text?.trim()||!/^\d{4}-\d{2}-\d{2}$/.test(entry.supplement.receivedOn??'')))throw Error('Invalid author-provided supplement: '+entry.catalogId);
 }
}
export async function plan(root,{run,inputs=[],catalogs=[],edition}){
 const directory=runDirectory(root,run);if(await exists(path.join(directory,'manifest.json')))throw Error('Run already exists; resume it instead of replacing its manifest.');
 const env=await runtime(root),index=await catalogIndex(root),entries=await readJSON(path.join(root,'src/data/comics.json')),metadata=await readJSON(path.join(root,'src/data/comic-catalogs.json'));
 if(metadata.sourceCommit!==index.sourceCommit)throw Error('Comic metadata uses a different source commit');
 let inventory=[];
 if(inputs.length){await command(env.python,['scripts/comics/intake.py','inventory','--output',path.join(directory,'intake.json'),...inputs.flatMap(p=>['--input',path.resolve(p)])],{root});inventory=await readJSON(path.join(directory,'intake.json'));}
 if(catalogs.length){if(inputs.length)throw Error('Use inputs or existing catalogue numbers, not both.');for(const n of catalogs){const e=entries.find(e=>e.catalogId===n);if(!e)throw Error('No registered comic: '+n);for(const [i,p] of e.pages.entries()){
   // Existing IMAGE_BUILD records preserve the source for every selected page.
   const first=i===0?e.original:e.originalPages?.[i];if(!first)throw Error('Missing original-page record for '+n+'/'+(i+1));
   inventory.push({catalogId:n,page:i+1,input:{file:path.join(root,first.path)},sha256:first.sha256,width:p.width,height:p.height});
  }}}
 if(!inventory.length)throw Error('Supply --input PNG/DIRECTORY/ZIP or --catalogs NNN,NNN');
 const normal=await import(pathToFileURL(path.join(root,'src/data/site.mjs')).href);
 const manifest={version:1,createdAt:new Date().toISOString(),sourceCommit:index.sourceCommit,catalogs:[]};
 for(const n of [...new Set(inventory.map(e=>e.catalogId))].sort()){
  const cat=index.catalogs.find(e=>e.id===n);if(!cat)throw Error('Unknown official number: '+n);
  const old=entries.find(e=>e.catalogId===n),known=metadata.catalogs.find(e=>e.id===n),normalCat=normal.catalogs.find(c=>c.id===n);
  manifest.catalogs.push({catalogId:n,edition:edition??(old?.pages[0]?.png.match(/\/(v\d+)\//)?.[1]??'v1'),title:known?.title??{ja:normalCat?.title.ja??null,en:cat.titleNeedsReview?null:cat.title.en},scope:old?.scope??null,targetSourcePaths:old?.targetSourcePaths??(cat.manuscripts.length===1?[cat.manuscripts[0].path]:[]),pages:inventory.filter(e=>e.catalogId===n).sort((a,b)=>a.page-b.page).map(({input,sha256,width,height})=>({input,sha256,width,height}))});
 }
 await writeJSON(path.join(directory,'manifest.json'),manifest);await writeJSON(path.join(directory,'runtime.json'),env);
 await atomic(path.join(directory,'HANDOFF.md'),`# 漫画掲載の受付\n\n対象: ${manifest.catalogs.map(e=>e.catalogId).join('・')}\n\nmanifest.json の題名・対象論文・scopeを確認し、準備を実行してください。補足文は自動生成しません。\n\n再開: ${env.node} scripts/comics/run.mjs prepare --run ${JSON.stringify(relative(root,directory))}\n`);
 return {directory,manifest,indexCacheReused:index.cacheReused};
}

export function registration(oldEntries,oldMetadata,manifest,index,images){
 const entries=structuredClone(oldEntries),metadata=structuredClone(oldMetadata),changed=[];
 for(const entry of manifest.catalogs){
  const existing=entries.find(e=>e.catalogId===entry.catalogId),official=index.catalogs.find(e=>e.id===entry.catalogId),edition=entry.edition??'v1';
  const known=metadata.catalogs.find(c=>c.id===entry.catalogId);if(known&&JSON.stringify(known.title)!==JSON.stringify(entry.title))throw Error('Existing title differs; make a separate explicit metadata edit.');
  if(!known)metadata.catalogs.push({id:entry.catalogId,title:entry.title,manuscripts:official.manuscripts});
  const pages=entry.pages.map((p,i)=>{const row=images.find(r=>r.catalogId===entry.catalogId&&r.page===i+1);if(!row)throw Error('Missing image result');const png=row.images.find(a=>a.path.endsWith('.png')&&a.path.startsWith('public/')),webp=row.images.find(a=>a.path.endsWith('.webp'));if(!png||png.dimensions[0]!==p.width||png.dimensions[1]!==p.height)throw Error('Input image dimensions changed');return {id:`page-${String(i+1).padStart(3,'0')}`,width:p.width,height:p.height,...(webp?{webp:webp.path.slice(7)}:{}),png:png.path.slice(7),alt:existing?.pages[i]?.alt??`カタログ${entry.catalogId}「${entry.title.ja}」を紹介する日本語の漫画`};});
  const originals=images.filter(r=>r.catalogId===entry.catalogId).sort((a,b)=>a.page-b.page).map(r=>({path:r.images[0].path,sha256:r.images[0].sha256}));
  if(existing){
   if(existing.original.sha256===originals[0].sha256&&JSON.stringify(existing.pages.map(p=>({png:p.png,webp:p.webp})))===JSON.stringify(pages.map(p=>({png:p.png,webp:p.webp})))){
    if(existing.scope!==entry.scope||JSON.stringify(existing.targetSourcePaths)!==JSON.stringify(entry.targetSourcePaths))throw Error('Existing scope differs; edit it explicitly outside an image-only replay.');
    if(entry.supplement&&JSON.stringify(existing.supplement)!==JSON.stringify(entry.supplement)){existing.supplement=structuredClone(entry.supplement);existing.updatedOn=entry.supplement.receivedOn;changed.push(entry.catalogId);}
    continue;
   }
   const previous=Number(existing.pages[0].png.match(/\/v(\d+)\//)?.[1]??1);if(Number(edition.slice(1))<=previous)throw Error('Changed images need a new edition; existing images are never overwritten.');
   Object.assign(existing,{original:originals[0],originalPages:originals,pages,scope:entry.scope,targetSourcePaths:entry.targetSourcePaths,updatedOn:entry.supplement?.receivedOn??new Date().toISOString().slice(0,10),...(entry.supplement?{supplement:structuredClone(entry.supplement)}:{})});changed.push(entry.catalogId);
  }else{
   entries.push({id:'catalog-'+entry.catalogId,catalogId:entry.catalogId,status:'published',imageLanguage:'ja',updatedOn:entry.supplement?.receivedOn??new Date().toISOString().slice(0,10),targetSourcePaths:entry.targetSourcePaths,scope:entry.scope,verificationNote:'原稿の主張を紹介するAI生成の漫画です。証明全体の独立検証は行っていません。正確な仮定・結論・出典は原論文でご確認ください。',original:originals[0],...(originals.length>1?{originalPages:originals}:{}),pages,supplement:entry.supplement?structuredClone(entry.supplement):{status:'awaiting-author',author:'岩井雅崇',text:null,receivedOn:null},review:{status:'publication-checks-only',record:'coordination/comics/README.md',imageSha256:originals[0].sha256,requestedModel:'gpt-6.1-sol',requestedReasoningEffort:'xhigh'},scopeRecord:{basis:'supplied-image-topic-reading',status:'topics-recorded-not-proof-verified',sourceCommit:index.sourceCommit}});changed.push(entry.catalogId);
  }
 }
 return {entries,metadata,changed};
}

function nodes(n,p){return [...(p(n)?[n]:[]),...(n.children??[]).flatMap(c=>nodes(c,p))];}
export async function inspectBuilt(root,directory,dist){
 const manifest=await readJSON(path.join(directory,'manifest.json'));const {comics,activeComicFields}=await import(pathToFileURL(path.join(root,'src/data/comics.mjs')).href+'?run='+Date.now());
 const targets=comics.filter(e=>manifest.catalogs.some(c=>c.catalogId===e.catalogId));const fields=activeComicFields.filter(f=>f.comics.some(c=>targets.some(t=>t.catalogId===c.catalogId)));
 const routes=[{route:'comics/',kind:'home',count:comics.length,fields:activeComicFields.length},...fields.map(f=>({route:`comics/fields/${f.id}/`,kind:'field',ids:f.comics.map(c=>c.catalogId)})),...targets.map(e=>({route:`comics/catalog/${e.catalogId}/`,kind:'catalog',catalogId:e.catalogId,pages:e.pages,supplement:e.supplement,targetUrls:e.targetPapers.map(p=>p.sourceUrl)}))];
 const htmlHashes={},checks=[];
 for(const route of routes){const file=inside(dist,route.route+'index.html'),raw=await readFile(file,'utf8'),tree=fromHtml(raw);htmlHashes[route.route]=hash(raw);const links=nodes(tree,n=>n.type==='element'&&n.tagName==='a').map(n=>n.properties.href);const issues=[];
  if(route.kind==='catalog'){
   if(route.targetUrls.some(url=>!links.includes(url)))issues.push('Missing target source');
   const text=nodes(tree,n=>n.type==='text').map(n=>n.value).join('');if(route.supplement.status==='approved'){for(const p of route.supplement.text?.split('\n\n')??[])if(!text.includes(p))issues.push('Author text differs');}else if(!raw.includes('comic-pending'))issues.push('Missing author-pending status');
   for(const page of route.pages)for(const asset of [page.png,page.webp].filter(Boolean))if(!await exists(inside(dist,asset)))issues.push('Missing image: '+asset);
  }else if(route.kind==='field'){const actual=nodes(tree,n=>n.type==='element'&&n.properties.dataComicCatalog).map(n=>n.properties.dataComicCatalog);if(JSON.stringify(actual)!==JSON.stringify(route.ids))issues.push('Field order differs');}
  if(issues.length)throw Error(route.route+': '+issues.join(', '));checks.push({route:route.route,ok:true});
 }
 return {routes,htmlHashes,checks};
}

async function saveReport(directory,report){
 report.updatedAt=new Date().toISOString();await writeJSON(path.join(directory,'report.json'),report);
 const steps=Object.entries(report.steps??{}).map(([name,s])=>`| ${name} | ${s.status} | ${s.durationMs??0} ms |`).join('\n');
 await atomic(path.join(directory,'HANDOFF.md'),`# 漫画掲載の実行記録\n\n状態: ${report.status}\n\n対象: ${report.catalogIds.join('・')}\n\n| 工程 | 状態 | 実行時間 |\n|---|---|---|\n${steps}\n\n実測は各機械処理の時間です。対象範囲の判断・目視・AIの操作間隔は含みません。\n\n次: ${report.next??'report.json を確認'}\n\n再開: ${report.runtime?.node??'node'} scripts/comics/run.mjs prepare --run ${JSON.stringify(report.run)}\n\n${report.error?'失敗: '+report.error+'\n':''}`);
}
export async function prepare(root,{run}){return withLock(root,async()=>{
 const invocationStarted=new Date().toISOString(),invocationClock=performance.now();
 const directory=runDirectory(root,run),manifestFile=path.join(directory,'manifest.json'),manifest=await readJSON(manifestFile),index=await catalogIndex(root);validateManifest(manifest,index);
 const env=await runtime(root),signature=hash(await readFile(manifestFile)),report=await exists(path.join(directory,'report.json'))?await readJSON(path.join(directory,'report.json')):{version:1,createdAt:new Date().toISOString(),run:relative(root,directory),catalogIds:manifest.catalogs.map(e=>e.catalogId),steps:{}};
 if(report.manifestHash&&report.manifestHash!==signature)throw Error('Manifest changed after preparation. Use a new run to preserve its previous evidence.');
 Object.assign(report,{manifestHash:signature,runtime:env,status:'preparing',error:null});
 async function step(name,key,work,artifacts=[]){const previous=report.steps[name];if(previous?.status==='passed'&&previous.key===key&&(await Promise.all(artifacts.map(exists))).every(Boolean)){previous.reused=true;return previous.result;}
  const start=performance.now();report.steps[name]={status:'running',key,startedAt:new Date().toISOString()};await saveReport(directory,report);
  try{const result=await work();report.steps[name]={...report.steps[name],status:'passed',durationMs:Math.round(performance.now()-start),result,reused:false};await saveReport(directory,report);return result;}catch(error){report.steps[name]={...report.steps[name],status:'failed',durationMs:Math.round(performance.now()-start),error:error.message};throw error;}}
 try{
  const currentEntries=await readJSON(path.join(root,'src/data/comics.json')),currentMeta=await readJSON(path.join(root,'src/data/comic-catalogs.json'));
  if(currentMeta.sourceCommit!==index.sourceCommit)throw Error('Registry/source commit mismatch');
  report.changedCatalogIds=[...new Set([...(report.changedCatalogIds??[]),...(report.steps.registration?.result?.changed??[])])];
  const owned=file=>['src/data/comics.json','src/data/comic-catalogs.json'].includes(file)||manifest.catalogs.some(c=>file.startsWith(`public/images/comics/catalog-${c.catalogId}/`));
  const protectedBefore=await fingerprint(root,{exclude:owned});
  if(!await exists(path.join(directory,'baseline.json')))await writeJSON(path.join(directory,'baseline.json'),{entries:currentEntries,metadata:currentMeta,head:await git(root,['rev-parse','HEAD'])});
  const imagesFile=path.join(directory,'images.json');
  // Decode and verify selected images each invocation; verified outputs are never re-encoded.
  const images=await step('images',signature+':'+Date.now(),async()=>{await command(env.python,['scripts/comics/intake.py','prepare','--root',root,'--manifest',manifestFile,'--output',imagesFile],{root,log:path.join(directory,'images.log')});return await readJSON(imagesFile);});
  await step('registration',signature+':'+hash(JSON.stringify([currentEntries,currentMeta])),async()=>{
   const result=registration(currentEntries,currentMeta,manifest,index,images);
   if(result.changed.length||JSON.stringify(currentMeta)!==JSON.stringify(result.metadata)){const comicsFile=path.join(root,'src/data/comics.json'),metadataFile=path.join(root,'src/data/comic-catalogs.json');const raw=await readFile(comicsFile,'utf8');if(hash(JSON.stringify(await readJSON(comicsFile)))!==hash(JSON.stringify(currentEntries))||hash(JSON.stringify(await readJSON(metadataFile)))!==hash(JSON.stringify(currentMeta)))throw Error('Concurrent registry change');
    // Appends retain the exact bytes of every pre-existing author paragraph.
    if(result.entries.length>currentEntries.length&&result.changed.every(id=>!currentEntries.some(e=>e.catalogId===id))){const addition=JSON.stringify(result.entries.slice(currentEntries.length),null,2);await atomic(comicsFile,raw.trimEnd().slice(0,-1).trimEnd()+(currentEntries.length?',':'')+addition.slice(1)+'\n');}
    else if(result.changed.length)await writeJSON(comicsFile,result.entries);
    if(JSON.stringify(currentMeta)!==JSON.stringify(result.metadata))await writeJSON(metadataFile,result.metadata);
   }return {changed:result.changed};
  });
  const signatureSite=await fingerprint(root),dist=path.join(root,'tmp/comics-pipeline',path.basename(directory),'dist');report.siteFingerprint=signatureSite;report.dist=relative(root,dist);
  await step('tests',signatureSite,async()=>{const tests=(await readdir(path.join(root,'scripts'))).filter(f=>f.endsWith('.test.mjs')).map(f=>'scripts/'+f);await command(env.node,['--test',...tests],{root,log:path.join(directory,'tests.log')});return {log:'tests.log'};},[path.join(directory,'tests.log')]);
  await step('image-tests',signatureSite,async()=>{await command(env.python,['-m','unittest','discover','-s','scripts/comics','-p','test_*.py'],{root,log:path.join(directory,'image-tests.log')});return {log:'image-tests.log'};},[path.join(directory,'image-tests.log')]);
  await step('citations',signatureSite,async()=>{await command(env.node,['scripts/sync-citations.mjs','--check'],{root,log:path.join(directory,'citations.log')});return {log:'citations.log'};},[path.join(directory,'citations.log')]);
  let buildKey=signatureSite;
  if(report.steps.build?.result?.outputHash&&await exists(dist)&&await directoryHash(dist)!==report.steps.build.result.outputHash)buildKey+=':damaged-output';
  await step('build',buildKey,async()=>{await command(env.node,['node_modules/astro/astro.js','build','--outDir',dist],{root,log:path.join(directory,'build.log')});return {dist:report.dist,outputHash:await directoryHash(dist)};},[path.join(dist,'comics/index.html')]);
  await step('links',signatureSite,async()=>{const result=await checkLinks({root:dist});await writeJSON(path.join(directory,'links.json'),result);if(result.errors.length)throw Error(result.errors.slice(0,5).join('\n'));return {pages:result.pages,checked:result.checked};},[path.join(directory,'links.json')]);
  await step('pdf',signatureSite,async()=>{await command(env.node,['scripts/build-catalog-pdf.mjs','--check'],{root,log:path.join(directory,'pdf.log')});return {log:'pdf.log'};},[path.join(directory,'pdf.log')]);
  const built=await inspectBuilt(root,directory,dist);Object.assign(report,built);
  const baseline=await readJSON(path.join(directory,'baseline.json')),nowEntries=await readJSON(path.join(root,'src/data/comics.json')),nowMeta=await readJSON(path.join(root,'src/data/comic-catalogs.json'));
  report.changedCatalogIds=[...new Set([...(report.changedCatalogIds??[]),...report.steps.registration.result.changed])];
  const changed=report.changedCatalogIds;
  report.managedFiles=[...new Set(images.flatMap(r=>r.images.map(i=>i.path)))];
  for(const entry of manifest.catalogs)for(let i=0;i<entry.pages.length;i++){
   const edition=entry.edition??'v1',name=i===0&&edition==='v1'?'IMAGE_BUILD.json':`IMAGE_BUILD-${edition}-page-${String(i+1).padStart(3,'0')}.json`;
   report.managedFiles.push(`coordination/comics/catalog-${entry.catalogId}/${name}`);
  }
  if(baseline.entries.some(e=>!changed.includes(e.catalogId)&&JSON.stringify(e)!==JSON.stringify(nowEntries.find(n=>n.catalogId===e.catalogId))))throw Error('Unrelated comic/author supplement changed');
  if(baseline.metadata.catalogs.some(c=>JSON.stringify(c)!==JSON.stringify(nowMeta.catalogs.find(n=>n.id===c.id))))throw Error('Existing bibliography changed');
  if(await fingerprint(root,{exclude:owned})!==protectedBefore)throw Error('Unrelated site files changed during preparation.');
  report.protection={unrelatedSiteFilesUnchanged:true,unrelatedComicsUnchanged:true,existingBibliographyUnchanged:true};
  if(await fingerprint(root)!==signatureSite)throw Error('Site changed while being checked; resume for current inputs.');
  const reviewFile=path.join(directory,'review.json');let reviewed=false;if(await exists(reviewFile)){const review=await readJSON(reviewFile);reviewed=review.siteFingerprint===signatureSite&&review.manifestHash===signature&&review.status==='passed'&&review.manualReview?.approved===true;}
  report.status=reviewed?'ready':'awaiting-review';report.next=reviewed?'公開指示があれば publish --authorized。既存版の確認だけなら verify。':'serveで表示し、browser-review.mjsの共通検査と目視を実施。';report.lastInvocation={startedAt:invocationStarted,finishedAt:new Date().toISOString(),durationMs:Math.round(performance.now()-invocationClock),reusedStages:Object.entries(report.steps).filter(([,s])=>s.reused).map(([n])=>n)};await saveReport(directory,report);return report;
 }catch(error){report.status='failed';report.error=error.message;report.next='原因を修正し、同じ run で prepare を再実行。';await saveReport(directory,report);throw error;}
});}

export async function assertReady(root,directory){
 const report=await readJSON(path.join(directory,'report.json')),review=await readJSON(path.join(directory,'review.json'));
 if(report.siteFingerprint!==await fingerprint(root)||report.manifestHash!==hash(await readFile(path.join(directory,'manifest.json'))))throw Error('Inputs changed after checks; prepare/review again.');
 if(Object.values(report.steps).some(s=>s.status!=='passed'))throw Error('Preparation has incomplete checks');
 if(review.status!=='passed'||review.siteFingerprint!==report.siteFingerprint||review.manifestHash!==report.manifestHash||review.manualReview?.approved!==true)throw Error('Current browser checks and explicit visual review are required');
 for(const [route,expected] of Object.entries(report.htmlHashes))if(hash(await readFile(inside(path.join(root,report.dist),route+'index.html')))!==expected)throw Error('Built HTML changed after review');
 return report;
}
export {saveReport};
