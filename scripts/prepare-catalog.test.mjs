import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {parsePreparationArgs,needsPdfGeneration,runPreparation} from './prepare-catalog.mjs';
import {pdfRuntime} from './pdf/runtime.mjs';

async function simulate(failures={},forcePdf=false){
 const calls=[],records=[];
 let failure;
 try {
  await runPreparation({catalog:'357',forcePdf,
   run:async(name,args)=>{calls.push({name,args});return failures[name]??{code:0,output:''};},
   record:async state=>records.push(structuredClone(state))});
 } catch(error){failure=error;}
 return {names:calls.map(c=>c.name),calls,state:records.at(-1),failure};
}

test('requires one explicit registered-format catalogue and rejects mistyped options',()=>{
 assert.deepEqual(parsePreparationArgs(['--catalog','357']),{catalog:'357',forcePdf:false});
 for(const args of [[],['--catalog','35'],['--catlog','357'],['--catalog','357','--catalog','356'],['--catalog','357','--force']])
  assert.throws(()=>parsePreparationArgs(args));
});
test('current PDF is reused without PDF rendering or a second build; browser inspection still runs',async()=>{
 const r=await simulate();
 assert.equal(r.failure,undefined);
 assert.deepEqual(r.names,['citations','tests','build','pdf-status','links','browser']);
 assert.equal(r.state.pdf,'reused');
 assert.equal(r.state.status,'automated-checks-passed');
 assert.equal(r.state.visualReview,'required');
});
test('stale PDF generation, second build and final check always run sequentially',async()=>{
 const r=await simulate({'pdf-status':{code:1,output:'PDF 357/ja is stale: run generation'}});
 assert.deepEqual(r.names,['citations','tests','build','pdf-status','pdf-environment','pdf-generation','build-pdf','pdf-final','links','browser']);
 assert.equal(r.state.pdf,'generated');
 assert.equal(r.state.status,'automated-checks-passed');
});
test('build and environment failures stop dependent work and record a retry command',async()=>{
 const build=await simulate({build:{code:1,output:'build error'}});
 assert.deepEqual(build.names,['citations','tests','build']);
 assert.equal(build.state.failedStep,'build');
 const env=await simulate({'pdf-status':{code:1,output:'PDF 357/ja is stale: x'},'pdf-environment':{code:1,output:'no pango'}});
 assert.ok(!env.names.includes('pdf-generation'));
 assert.equal(env.state.status,'failed');
 assert.equal(env.state.resumeCommand,'npm run catalog:prepare -- --catalog 357');
});
test('unexpected PDF check failures never trigger destructive regeneration, even with force',async()=>{
 for(const output of ['SyntaxError: broken metadata','Unknown PDF pipeline: future','ENOENT dist/ja/catalog/357/index.html']){
  assert.throws(()=>needsPdfGeneration({code:1,output},'357'));
  const r=await simulate({'pdf-status':{code:1,output}},true);
  assert.ok(r.failure);assert.ok(!r.names.includes('pdf-generation'));
 }
 assert.equal(needsPdfGeneration({code:1,output:"ENOENT open 'public/pdf/catalog-357-en.pdf'"},'357'),true);
 assert.equal(needsPdfGeneration({code:1,output:'PDF 357/ja does not match its recorded hash.'},'357'),true);
});
test('explicit regeneration runs when current, while link failures leave a failed report',async()=>{
 const r=await simulate({links:{code:1,output:'broken link'}},true);
 assert.ok(r.names.includes('pdf-generation'));
 assert.equal(r.state.pdf,'generated');assert.equal(r.state.failedStep,'links');
});
test('PDF runtime uses project venv/settings and respects explicit environment overrides',async()=>{
 const root=await mkdtemp(path.join(tmpdir(),'digest-runtime-'));
 try {
  await mkdir(path.join(root,'tmp/pdf-venv/bin'),{recursive:true});
  await writeFile(path.join(root,'tmp/pdf-venv/bin/python'),'');
  await writeFile(path.join(root,'tmp/pdf-runtime.json'),JSON.stringify({DYLD_FALLBACK_LIBRARY_PATH:'/configured/lib',PDF_BROWSER_PATH:'/configured/chrome'}));
  const env=await pdfRuntime(root,{PDF_BROWSER_PATH:'/explicit/chrome'});
  assert.equal(env.PDF_PYTHON,path.join(root,'tmp/pdf-venv/bin/python'));
  assert.equal(env.PDF_BROWSER_PATH,'/explicit/chrome');
  assert.equal(env.DYLD_FALLBACK_LIBRARY_PATH,'/configured/lib');
  assert.equal(env.XDG_CACHE_HOME,path.join(root,'tmp/font-cache'));
  await writeFile(path.join(root,'tmp/pdf-runtime.json'),'{bad');
  await assert.rejects(pdfRuntime(root,{}),/Invalid tmp\/pdf-runtime/);
 } finally {await rm(root,{recursive:true,force:true});}
});

test('browser failure prevents approval and records the gallery location',async()=>{
 const r=await simulate({browser:{code:1,output:'Document overflows'}});
 assert.equal(r.state.failedStep,'browser');
 assert.equal(r.state.status,'failed');
 assert.match(r.state.browserReport,/index.html$/);
 assert.ok(r.calls.at(-1).args.includes('--references'));
});
