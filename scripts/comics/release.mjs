import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {hash,readJSON,writeJSON,inside,relative,git,withLock} from './common.mjs';
import {assertReady,runDirectory,saveReport} from './pipeline.mjs';

export function repository(remote){
 const match=remote.match(/^(?:https:\/\/github\.com\/|git@github\.com:)([\w.-]+\/[\w.-]+?)(?:\.git)?$/);
 if(!match)throw Error('Expected a GitHub origin remote');return match[1];
}
export async function http(url,options={}){
 const result=await fetch(url,{...options,signal:AbortSignal.timeout(45000),headers:{'Cache-Control':'no-cache',...(process.env.GITHUB_TOKEN&&url.startsWith('https://api.github.com/')?{Authorization:'Bearer '+process.env.GITHUB_TOKEN}:{}),...options.headers}});
 if(!result.ok)throw Error(`HTTP ${result.status}: ${url}`);return result;
}
async function pool(items,work,limit=4){let next=0;const results=[];await Promise.all(Array.from({length:Math.min(limit,items.length)},async()=>{while(next<items.length){const i=next++;results[i]=await work(items[i]);}}));return results;}
export async function verifyPublic(root,{run,base='https://masataka123.github.io/OpenAI-Math-Digest/',fetcher=http}){
 const directory=runDirectory(root,run),report=await readJSON(path.join(directory,'report.json'));if(!report.htmlHashes)throw Error('Prepare this run first');
 const dist=inside(root,report.dist),tasks=Object.entries(report.htmlHashes).map(([route,sha256])=>({kind:'html',route,sha256}));
 const seen=new Set();for(const target of report.routes.filter(r=>r.kind==='catalog'))for(const page of target.pages){
  for(const file of [page.png,page.webp].filter(Boolean)){if(seen.has(file))continue;seen.add(file);const data=await readFile(inside(dist,file));tasks.push({kind:file===page.png&&page.webp?'png-head':'image',route:file,sha256:hash(data),bytes:data.length});}
 }
 const started=performance.now();const results=await pool(tasks,async task=>{try{const response=await fetcher(new URL(task.route,base).href,{method:task.kind==='png-head'?'HEAD':'GET'});
  if(task.kind==='png-head'){if(Number(response.headers.get('content-length'))!==task.bytes)throw Error('PNG size differs');}
  else if(hash(Buffer.from(await response.arrayBuffer()))!==task.sha256)throw Error('Published content differs');return {...task,ok:true};
 }catch(error){return {...task,ok:false,error:error.message};}});
 const proof={base,recordedAt:new Date().toISOString(),siteFingerprint:report.siteFingerprint,manifestHash:report.manifestHash,durationMs:Math.round(performance.now()-started),checks:results.length,passed:results.filter(r=>r.ok).length,results};await writeJSON(path.join(directory,'public-checks.json'),proof);
 if(proof.passed!==proof.checks)throw Error('Public verification failed; inspect public-checks.json.');return proof;
}

export function allowedBatchPath(file,ids,run,managedFiles=[]){
 return ['src/data/comics.json','src/data/comic-catalogs.json'].includes(file)||file.startsWith(run+'/')||(managedFiles.includes(file)&&ids.some(id=>['assets/comics/','public/images/comics/','coordination/comics/'].some(prefix=>file.startsWith(prefix+'catalog-'+id+'/'))));
}
export function assertRegistryScope(before,after,ids,key){
 for(const entry of before)if(!ids.includes(entry[key])&&JSON.stringify(entry)!==JSON.stringify(after.find(e=>e[key]===entry[key])))throw Error('Unrelated registry edits would be published: '+entry[key]);
 for(const entry of after)if(!ids.includes(entry[key])&&!before.some(e=>e[key]===entry[key]))throw Error('Unrelated new registry entry: '+entry[key]);
}
export async function publish(root,{run,authorized=false,dryRun=false,waitMs=900000,fetcher=http,sleep=ms=>new Promise(r=>setTimeout(r,ms)),gitCommand=args=>git(root,args),ready=assertReady}){
 // A manifest or an attached document cannot grant publication authorization.
 if(!authorized)throw Error('Publication needs the current user instruction; then pass --authorized explicitly.');
 return withLock(root,async()=>{
  const directory=runDirectory(root,run),report=await ready(root,directory),runPath=relative(root,directory);
  const invocationClock=performance.now();
  try{
  if(await gitCommand(['branch','--show-current'])!=='main')throw Error('Publish from main after reviewing the target branch.');
  async function finishRecords(){
   const staged=(await gitCommand(['diff','--cached','--name-only'])).split('\n').filter(Boolean);if(staged.some(f=>!f.startsWith(runPath+'/')))throw Error('Unexpected staged changes before recording publication.');
   await gitCommand(['add','--',runPath]);const records=(await gitCommand(['diff','--cached','--name-only'])).split('\n').filter(Boolean);
   if(records.length)await gitCommand(['commit','-m','Record comics publication verification [skip ci]']);await gitCommand(['push','origin','main']);
  }
  if(report.status==='published'&&report.release?.verifiedAt){
   const proof=await readJSON(path.join(directory,'public-checks.json'));if(proof.siteFingerprint!==report.siteFingerprint||proof.manifestHash!==report.manifestHash||proof.checks!==proof.passed)throw Error('Published receipt is inconsistent');
   if(dryRun)return {dryRun:true,resume:'record-only push',commit:report.release.commit};await finishRecords();return report;
  }
  const staged=(await gitCommand(['diff','--cached','--name-only'])).split('\n').filter(Boolean);
  if(staged.length&&(!report.release?.stagingFiles||staged.some(f=>!report.release.stagingFiles.includes(f))))throw Error('Existing staged changes must be preserved; resolve them before publishing this batch.');
  for(const file of ['src/data/comics.json','src/data/comic-catalogs.json']){
   const committed=JSON.parse(await gitCommand(['show','HEAD:'+file])),working=await readJSON(path.join(root,file));assertRegistryScope(Array.isArray(committed)?committed:committed.catalogs,Array.isArray(working)?working:working.catalogs,report.catalogIds,file.endsWith('/comics.json')?'catalogId':'id');
  }
  const repo=repository(await gitCommand(['remote','get-url','origin']));
  const changed=(await gitCommand(['status','--porcelain','--untracked-files=all'])).split('\n').filter(Boolean).map(line=>line.slice(3));
  const allowed=file=>allowedBatchPath(file,report.catalogIds,runPath,report.managedFiles);
  const files=changed.filter(allowed);
  const outside=changed.filter(file=>!allowed(file));
  if(dryRun)return {dryRun:true,repository:repo,files,untouchedChangeCount:outside.length,willCommit:files.some(file=>!file.startsWith(runPath+'/'))};
  report.release??={};await saveReport(directory,report);
  if(!report.release.commit){
   const remoteHead=(await gitCommand(['ls-remote','origin','refs/heads/main'])).split(/\s+/)[0];
   if(remoteHead!==await gitCommand(['rev-parse','HEAD']))throw Error('Local main differs from remote main. Review other commits before publishing this batch.');
   if(!files.some(file=>!file.startsWith(runPath+'/')))throw Error('This run has no new comic changes; use verify instead of republishing.');
   report.release.stagingFiles=files;await saveReport(directory,report);
   await gitCommand(['add','--',...files]);const actual=(await gitCommand(['diff','--cached','--name-only'])).split('\n').filter(Boolean);if(actual.some(file=>!allowed(file)))throw Error('Unexpected staged changes; publication stopped.');
   await gitCommand(['commit','-m','Publish comics '+report.catalogIds.join(', ')]);report.release.commit=await gitCommand(['rev-parse','HEAD']);await saveReport(directory,report);
  }
  if(!report.release.pushed){await gitCommand(['-c','http.version=HTTP/1.1','-c','http.postBuffer=524288000','push','origin','main']);report.release.pushed=true;await saveReport(directory,report);}
  const deadline=Date.now()+waitMs;let delay=15000,last='';
  while(Date.now()<deadline){
   const response=await fetcher(`https://api.github.com/repos/${repo}/actions/runs?head_sha=${report.release.commit}&per_page=5`);const data=await response.json();const runs=(data.workflow_runs??[]).filter(r=>r.head_sha===report.release.commit&&r.event==='push');
   const current=runs.find(r=>r.name==='Build and deploy OpenAI Math Digest')??runs[0];
   if(current){report.release.workflow={id:current.id,url:current.html_url,status:current.status,conclusion:current.conclusion};await saveReport(directory,report);
    const status=current.status+'/'+current.conclusion;if(status!==last){console.log('GitHub: '+status);last=status;}
    if(current.status==='completed'){if(current.conclusion!=='success')throw Error('GitHub publication failed: '+current.html_url);break;}}
   await sleep(delay);delay=Math.min(60000,Math.round(delay*1.5));
  }
  if(report.release.workflow?.conclusion!=='success')throw Error('Publication is still pending; resume publish with this same run.');
  const proof=await verifyPublic(root,{run,fetcher});report.release.verifiedAt=proof.recordedAt;report.release.checks=proof.checks;report.release.lastInvocationMs=Math.round(performance.now()-invocationClock);report.status='published';report.error=null;report.next='公開確認済み。本人の補足は提供・公開指示を受けて追記。';await saveReport(directory,report);
  await writeJSON(path.join(directory,'deployment.json'),report.release);
  // One small record-only commit; it never triggers a second site deployment.
  await finishRecords();return report;
  }catch(error){
   if(!dryRun){report.status=report.release?.verifiedAt?'published':'publication-failed';report.error=error.message;report.next='同じrunで publish --authorized を再実行。完了済みのcommit・pushは再利用する。';await saveReport(directory,report);}
   throw error;
  }
 });
}
