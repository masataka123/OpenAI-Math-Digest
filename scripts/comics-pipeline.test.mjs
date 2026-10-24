import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {createHash} from 'node:crypto';
import {parseCatalogues,catalogIndex} from './comics/catalog-index.mjs';
import {registration,validateManifest,runDirectory} from './comics/pipeline.mjs';
import {parseArgs} from './comics/run.mjs';
import {withLock,writeJSON,hash,readJSON,directoryHash} from './comics/common.mjs';
import {publish,verifyPublic,assertRegistryScope,repository} from './comics/release.mjs';

const source='a'.repeat(40),manuscript={title:'Paper',path:'preprints/Paper/paper.pdf'};
const index={sourceCommit:source,catalogs:[{id:'071',title:{en:'Circle domains'},manuscripts:[manuscript]}]};
const manifest={version:1,sourceCommit:source,catalogs:[{catalogId:'071',edition:'v1',title:{ja:'円領域',en:'Circle domains'},scope:'Provided image scope',targetSourcePaths:[manuscript.path],pages:[{input:{file:'/provided/Catalog_071.png'},sha256:'b'.repeat(64),width:2,height:3}]}]};
const images=[{catalogId:'071',page:1,images:[{path:'assets/comics/catalog-071/original/Catalog_071.png',sha256:'b'.repeat(64)},{path:'public/images/comics/catalog-071/v1/page-001.png',dimensions:[2,3]},{path:'public/images/comics/catalog-071/v1/page-001.webp',dimensions:[2,3]}]}];
async function temporary(t){const root=await mkdtemp(path.join(os.tmpdir(),'comic-pipeline-'));t.after(()=>rm(root,{recursive:true,force:true}));return root;}

test('official source cache checks blob hashes before reusing an index',async t=>{
 const root=await temporary(t),dir=path.join(root,'coordination/comics/source');await mkdir(dir,{recursive:true});
 const tex='\\resultentry{071}{Koebe\'s circle domains}{Claim}{Links}',contents='**071. Circle domains**\n&emsp;[Paper](preprints/Paper/paper.pdf)\n';
 const files={};for(const [name,text] of [['overview.tex',tex],['CONTENTS.md',contents]]){await writeFile(path.join(dir,name),text);files[name]=createHash('sha1').update(`blob ${Buffer.byteLength(text)}\0`).update(text).digest('hex');}
 await writeJSON(path.join(dir,'PROVENANCE.json'),{sourceCommit:source,files});assert.equal((await catalogIndex(root)).cacheReused,false);assert.equal((await catalogIndex(root)).cacheReused,true);
 await writeFile(path.join(dir,'overview.tex'),tex+' modified');await assert.rejects(catalogIndex(root),/Official source changed/);
});

test('registration is idempotent and retains approved author text exactly',()=>{
 validateManifest(manifest,index);const first=registration([],{sourceCommit:source,catalogs:[]},manifest,index,images);first.entries[0].supplement={status:'approved',author:'岩井雅崇',text:'本人の文章。  \n\n引用文を保持。',receivedOn:'2026-10-24'};
 const next=registration(first.entries,first.metadata,manifest,index,images);assert.deepEqual(next.changed,[]);assert.deepEqual(next.entries,first.entries);assert.deepEqual(next.metadata,first.metadata);
});
test('registration can resume if the previous registry write preceded the bibliography write',()=>{
 const first=registration([],{sourceCommit:source,catalogs:[]},manifest,index,images);
 const resumed=registration(first.entries,{sourceCommit:source,catalogs:[]},manifest,index,images);
 assert.deepEqual(resumed.entries,first.entries);assert.deepEqual(resumed.metadata,first.metadata);
});
test('explicitly supplied author notes update existing images idempotently',()=>{
 const first=registration([],{sourceCommit:source,catalogs:[]},manifest,index,images);const input=structuredClone(manifest);input.catalogs[0].supplement={status:'approved',author:'岩井雅崇',text:'本人から受領した補足。',receivedOn:'2026-10-25'};
 validateManifest(input,index);const next=registration(first.entries,first.metadata,input,index,images);assert.deepEqual(next.changed,['071']);assert.deepEqual(next.entries[0].pages,first.entries[0].pages);assert.equal(next.entries[0].supplement.text,input.catalogs[0].supplement.text);assert.deepEqual(registration(next.entries,next.metadata,input,index,images).changed,[]);
 input.catalogs[0].supplement.status='awaiting-author';assert.throws(()=>validateManifest(input,index),/Invalid author-provided/);
});

test('changed image editions preserve supplements and require a new version',()=>{
 const first=registration([],{sourceCommit:source,catalogs:[]},manifest,index,images);const input=structuredClone(images);input[0].images[0].sha256='c'.repeat(64);assert.throws(()=>registration(first.entries,first.metadata,manifest,index,input),/new edition/);
 const nextManifest=structuredClone(manifest);nextManifest.catalogs[0].edition='v2';for(const image of input[0].images)image.path=image.path.replace('/v1/','/v2/');
 const next=registration(first.entries,first.metadata,nextManifest,index,input);assert.equal(next.entries[0].original.sha256,'c'.repeat(64));assert.deepEqual(next.entries[0].supplement,first.entries[0].supplement);assert.equal(first.entries[0].original.sha256,'b'.repeat(64));
});

test('unconfirmed scopes, invalid sources and duplicate catalogues stop before registration',()=>{
 const clone=structuredClone(manifest);clone.catalogs[0].scope=null;assert.throws(()=>validateManifest(clone,index),/scope/);
 clone.catalogs[0].scope='visible scope';clone.catalogs[0].targetSourcePaths=['preprints/other.pdf'];assert.throws(()=>validateManifest(clone,index),/Unknown target/);
 assert.throws(()=>validateManifest({...manifest,catalogs:[...manifest.catalogs,...manifest.catalogs]},index),/duplicate/);
 assert.throws(()=>runDirectory('/workspace','../../other'),/outside workspace/);
});

test('publication options cannot be smuggled through plan and outside registry edits are refused',()=>{
 assert.throws(()=>parseArgs(['plan','--run','batch','--authorized']),/Publication flags/);
 assert.equal(repository('git@github.com:owner/repo.git'),'owner/repo');
 assert.throws(()=>assertRegistryScope([{catalogId:'034',text:'old'}],[{catalogId:'034',text:'changed'}],['071'],'catalogId'),/Unrelated registry edits/);
});

test('a concurrent run cannot acquire the same workspace lock',async t=>{
 const root=await temporary(t);await withLock(root,async()=>{await assert.rejects(withLock(root,async()=>{}),/Another comic pipeline/);});
 await withLock(root,async()=>{});
});

test('build fingerprints detect corrupted files even at the same path',async t=>{
 const root=await temporary(t);await writeFile(path.join(root,'index.html'),'checked');const before=await directoryHash(root);await writeFile(path.join(root,'index.html'),'changed');assert.notEqual(await directoryHash(root),before);
});

async function releaseFixture(t){
 const root=await temporary(t),run='coordination/comics/runs/test',directory=path.join(root,run),dist='tmp/dist';await mkdir(path.join(root,dist,'comics'),{recursive:true});await mkdir(path.join(root,'src/data'),{recursive:true});
 await writeJSON(path.join(root,'src/data/comics.json'),[{catalogId:'071'}]);await writeJSON(path.join(root,'src/data/comic-catalogs.json'),{catalogs:[]});await writeFile(path.join(root,dist,'comics/index.html'),'checked page');
 const report={run,catalogIds:['071'],steps:{tests:{status:'passed'}},siteFingerprint:'current',manifestHash:'manifest',dist,htmlHashes:{'comics/':hash('checked page')},routes:[{route:'comics/',kind:'home'}],status:'ready'};await writeJSON(path.join(directory,'report.json'),report);
 const calls=[],state={staged:[],commits:0,failPush:false,pushFailed:false};
 const gitCommand=async args=>{calls.push(args);const key=args.join(' ');
  if(key==='branch --show-current')return 'main';if(key==='diff --cached --name-only')return state.staged.join('\n');
  if(args[0]==='show')return args[1].endsWith('/comics.json')?'[]':'{"catalogs":[]}';
  if(key==='remote get-url origin')return 'https://github.com/owner/repo.git';
  if(args[0]==='status')return ' M src/data/comics.json\n?? '+run+'/report.json';
  if(args[0]==='add'){state.staged=args[2]===run?[run+'/report.json']:args.slice(2);return '';}
  if(args[0]==='commit'){state.commits++;state.staged=[];return '';}
  if(key==='rev-parse HEAD')return 'c'.repeat(40);
  if(key==='ls-remote origin refs/heads/main')return 'c'.repeat(40)+'\trefs/heads/main';
  if(args.includes('push')){if(state.failPush&&!state.pushFailed){state.pushFailed=true;throw Error('temporary connection failure');}return '';}
  throw Error('Unexpected git operation: '+key);
 };
 const fetcher=async url=>url.startsWith('https://api.github.com/')?new Response(JSON.stringify({workflow_runs:[{id:1,head_sha:'c'.repeat(40),event:'push',name:'Build and deploy OpenAI Math Digest',status:'completed',conclusion:'success',html_url:'https://github.com/owner/repo/actions/runs/1'}]})):new Response('checked page');
 return {root,run,directory,report,state,calls,gitCommand,fetcher,ready:async()=>readJSON(path.join(directory,'report.json'))};
}

test('no publication authorization means no git or network actions',async t=>{
 const f=await releaseFixture(t);await assert.rejects(publish(f.root,{...f,authorized:false}),/current user instruction/);assert.equal(f.calls.length,0);
});

test('publication dry run neither stages nor commits nor pushes',async t=>{
 const f=await releaseFixture(t),result=await publish(f.root,{...f,authorized:true,dryRun:true});assert.equal(result.dryRun,true);assert.ok(result.files.includes('src/data/comics.json'));assert.ok(!f.calls.some(args=>['add','commit','push'].includes(args[0])));
});

test('publication resumes after a failed push without duplicating the content commit',async t=>{
 const f=await releaseFixture(t);f.state.failPush=true;await assert.rejects(publish(f.root,{...f,authorized:true}),/connection failure/);assert.equal(f.state.commits,1);
 const result=await publish(f.root,{...f,authorized:true});assert.equal(result.status,'published');assert.equal(f.state.commits,2);assert.equal((await readJSON(path.join(f.directory,'public-checks.json'))).passed,1);
 await publish(f.root,{...f,authorized:true,dryRun:true});assert.equal(f.state.commits,2);
});

test('public content mismatches fail and leave a failed verification record',async t=>{
 const f=await releaseFixture(t);await assert.rejects(verifyPublic(f.root,{run:f.run,fetcher:async()=>new Response('stale page')}),/verification failed/);const proof=await readJSON(path.join(f.directory,'public-checks.json'));assert.equal(proof.passed,0);
});
