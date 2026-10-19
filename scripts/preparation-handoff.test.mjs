import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,readFile,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {ensureReviewNotes,collectPreparationArtifacts,renderHandoff,gitSnapshot} from './preparation-handoff.mjs';
import {runPreparation} from './prepare-catalog.mjs';

test('reruns preserve manual notes and old handoffs, while new failure is never marked approved',async()=>{
 const root=await mkdtemp(path.join(tmpdir(),'digest-handoff-'));
 try{
  const notes=await ensureReviewNotes(root,'357');
  const manual='\n確認者A：旧版だけの紙面確認済み。新版は未確認。\n';
  await writeFile(notes,(await readFile(notes,'utf8'))+manual);
  const snapshots=[];
  for(const [id,fail] of [['first',false],['second',true]]){
   const directory=path.join(root,id);await mkdir(directory);
   try{await runPreparation({catalog:'357',context:{workspace:root,reviewNotes:notes},
    run:async name=>({code:fail&&name==='links'?1:0,output:''}),
    record:async state=>{if(state.finishedAt){snapshots.push(structuredClone(state));await writeFile(path.join(directory,'HANDOFF.md'),renderHandoff(state,directory));}}
   });}catch(error){assert.equal(fail,true);assert.match(error.message,/links failed/);}
   await ensureReviewNotes(root,'357');
  }
  assert.ok((await readFile(notes,'utf8')).endsWith(manual));
  const first=await readFile(path.join(root,'first/HANDOFF.md'),'utf8');
  const second=await readFile(path.join(root,'second/HANDOFF.md'),'utf8');
  assert.match(first,/機械検査成功（目視・内容確認と公開判定は別）/);
  assert.match(second,/機械処理失敗/);assert.match(second,/失敗工程：links/);
  assert.doesNotMatch(second,/機械検査成功/);
  assert.match(second,/npm run catalog:prepare -- --catalog 357/);
  assert.match(second,/画面検査記録：未取得/);
  assert.ok(snapshots.every(s=>s.totalSeconds>=0));
 }finally{await rm(root,{recursive:true,force:true});}
});
test('artifact summaries use selected bilingual edition and actual browser outcomes; absent evidence stays absent',async()=>{
 const root=await mkdtemp(path.join(tmpdir(),'digest-artifacts-'));
 try{
  let result=await collectPreparationArtifacts(root,root,'357');assert.equal(result.browser,null);assert.equal(result.pdfs.length,0);
  await mkdir(path.join(root,'src/data'),{recursive:true});await mkdir(path.join(root,'browser'));
  await writeFile(path.join(root,'src/data/pdf-editions.json'),JSON.stringify({'357':{ja:{pages:20,sha256:'ja-hash'},en:{pages:21,sha256:'en-hash'}},'356':{ja:{pages:999}}}));
  await writeFile(path.join(root,'browser/report.json'),JSON.stringify({status:'failed',results:[{status:'pass'},{status:'fail'}]}));
  result=await collectPreparationArtifacts(root,root,'357');
  assert.deepEqual(result.pdfs.map(p=>p.pages),[20,21]);assert.equal(result.browser.passed,1);assert.equal(result.browser.total,2);
  const state={catalog:'357',status:'failed',pdf:'regeneration-required',steps:[{name:'pdf-status',exitCode:1,seconds:1}],artifacts:result};
  const md=renderHandoff(state,root);assert.match(md,/今回のPDF照合：未完了/);assert.match(md,/1\/2条件成功/);
  assert.ok((await gitSnapshot(root)).unavailable);
 }finally{await rm(root,{recursive:true,force:true});}
});
test('unexpected runner exception is timed and recorded as a failed step',async()=>{
 let final;
 await assert.rejects(runPreparation({catalog:'357',run:async()=>{throw Error('launch failed');},record:async state=>{final=structuredClone(state);}}),/citations failed/);
 assert.equal(final.status,'failed');assert.equal(final.steps[0].exitCode,1);assert.ok(final.steps[0].seconds>=0);
});
