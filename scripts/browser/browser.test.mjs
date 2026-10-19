import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,symlink,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {chromium} from 'playwright-core';
import {inspectPage,checkLanguage,checkViewers} from './inspect-page.mjs';
import {serveBuiltSite} from './site-server.mjs';
import {runBrowserChecks} from '../check-browser.mjs';

// No network or MathJax dependency: intentional failures exercise diagnostics themselves.
const shell=body=>`<!doctype html><html lang="ja"><style>body{margin:0}.language-switch{position:fixed;top:0;right:0}</style><div class="ai-notice">AI</div><main id="content">${body}</main><script>window.MathJax={startup:{promise:Promise.resolve()}}</script>`;
test('real browser distinguishes accessible scrolling from clipped content and detects broken math/images',async()=>{
 const browser=await chromium.launch(process.env.PDF_BROWSER_PATH?{executablePath:process.env.PDF_BROWSER_PATH}:{channel:'chrome'});
 try{
  const page=await browser.newPage({viewport:{width:375,height:900}});
  await page.setContent(shell('<div class="math-display" style="overflow-x:auto"><div style="width:900px">wide formula</div></div>'));
  assert.deepEqual((await page.evaluate(inspectPage)).issues,[]);
  await page.locator('.math-display').evaluate(e=>e.style.overflowX='hidden');
  assert.ok((await page.evaluate(inspectPage)).issues.some(s=>s.startsWith('Clipped content')));
  await page.setContent(shell('<div style="width:900px">overflow</div><mjx-merror>bad math</mjx-merror><img src="data:image/png;base64,broken">'));
  const issues=(await page.evaluate(inspectPage)).issues;
  for(const message of ['Document overflows','MathJax errors','Broken images'])assert.ok(issues.some(s=>s.startsWith(message)),issues.join('\n'));
  await page.setContent(shell('<figure class="proof-figure"></figure>'));
  await assert.rejects(checkViewers(page),/missing enlargement link/);
  await page.setContent(shell('<nav class="language-switch" style="display:none"></nav>'));
  await assert.rejects(checkLanguage(page,{lang:'ja',route:'papers/test/'},'http://localhost','/base/'),/not visible/);
 }finally{await browser.close();}
});
test('temporary server confines files; failed browser run retains actionable report and screenshot',async()=>{
 const root=await mkdtemp(path.join(tmpdir(),'digest-browser-'));
 let server;
 try{
  const dist=path.join(root,'dist');
  for(const lang of ['ja','en']){
   await mkdir(path.join(dist,lang,'papers/test'),{recursive:true});
   await writeFile(path.join(dist,lang,'papers/test/index.html'),shell('<div style="width:900px">overflow</div>').replace('lang="ja"',`lang="${lang}"`));
  }
  await writeFile(path.join(root,'secret.txt'),'not public');await symlink(path.join(root,'secret.txt'),path.join(dist,'escape.txt'));
  server=await serveBuiltSite(dist,'/base/');
  assert.equal((await fetch(server.origin+'/base/ja/papers/test/')).status,200);
  assert.equal((await fetch(server.origin+'/base/missing')).status,404);
  assert.equal((await fetch(server.origin+'/base/escape.txt')).status,403);
  assert.equal((await fetch(server.origin+'/outside')).status,404);
  const output=path.join(root,'report');
  const report=await runBrowserChecks({catalog:'999',dist,output,base:'/base/',browserPath:process.env.PDF_BROWSER_PATH,
   targets:[{route:'papers/test/',kind:'reference',lang:'ja',width:375}]});
  assert.equal(report.status,'failed');
  assert.ok(report.results[0].issues.some(s=>s.startsWith('Document overflows')));
  assert.equal(report.manualReview,'required');
  assert.ok((await readFile(path.join(output,report.results[0].screenshots[0]))).length>0);
  assert.match(await readFile(path.join(output,'index.html'),'utf8'),/Document overflows/);
  assert.equal(JSON.parse(await readFile(path.join(output,'report.json'))).status,'failed');
 }finally{await server?.close();await rm(root,{recursive:true,force:true});}
});
