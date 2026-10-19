import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm,readFile,readdir,access} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {checkLinks} from './check-links.mjs';

// Pre-optimization scan, independent of the caches/index. Compare both success
// and failure cases so speedups cannot silently remove validation coverage.
async function legacy(root,base) {
 async function walk(dir){return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?walk(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
 const pages=(await walk(root)).filter(f=>f.endsWith('.html')),errors=[];
 let checked=0;
 for(const file of pages){
  const html=await readFile(file,'utf8');
  const current=`https://example.test${base}${path.relative(root,file).replace(/index\.html$/,'')}`;
  for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   const url=new URL(href.replaceAll('&amp;','&'),current);
   if(url.origin!=='https://example.test')continue;
   if(!url.pathname.startsWith(base)){errors.push(`${file}: outside Pages base: ${href}`);continue;}
   const relative=decodeURIComponent(url.pathname.slice(base.length));
   const target=path.join(root,relative.endsWith('/')?`${relative}index.html`:relative);
   try{await access(target);checked++;if(url.hash&&target.endsWith('.html')){const text=await readFile(target,'utf8');const id=decodeURIComponent(url.hash.slice(1));if(!text.includes(`id="${id}"`))errors.push(`${file}: missing fragment ${href}`);}}
   catch{errors.push(`${file}: missing target ${href}`);}
  }
  if(/geometry-proof-atlas|Geometry Proof Atlas|\/families\/05[12]\//.test(html))errors.push(`${file}: stale prototype content`);
 }
 return {checked,pages:pages.length,errors};
}
async function fixture(t,files) {
 const root=await mkdtemp(path.join(tmpdir(),'digest-links-'));
 t.after(()=>rm(root,{recursive:true,force:true}));
 for(const [name,text] of Object.entries(files)){
  const file=path.join(root,name);await mkdir(path.dirname(file),{recursive:true});await writeFile(file,text);
 }
 return root;
}
const base='/OpenAI-Math-Digest/';
const comparable=({checked,pages,errors})=>({checked,pages,errors});

test('cached scan matches legacy links, Unicode anchors, SVG glyphs, assets and language switches',async t=>{
 const glyphs=Array.from({length:120},(_,i)=>`<path id="g${i}"/><use xlink:href="#g${i}"/><use href="#g${i}"/>`).join('');
 const root=await fixture(t,{
  'ja/index.html':`<p id="日本語"></p><svg>${glyphs}</svg><a href="?x=1&amp;y=2#%E6%97%A5%E6%9C%AC%E8%AA%9E">Self</a><a href="../en/#english">English</a><a href="${base}en/?q=1#english">Absolute</a><a href="${base}pdf/book.pdf#page=2">PDF</a><img src="../images/a%20b.png"><a href="https://external.test/missing#x">External</a><a href="mailto:a@example.test">Mail</a>`,
  'en/index.html':`<p id="english"></p><a href="${base}ja/#日本語">Japanese</a>`,
  'pdf/book.pdf':'fixture','images/a b.png':'fixture',
 });
 const result=await checkLinks({root,base});
 assert.deepEqual(comparable(result),await legacy(root,base));
 assert.deepEqual(result.errors,[]);
 assert.equal(result.checked,246);
 assert.equal(result.stats.htmlReads,2);
 assert.equal(result.stats.existenceChecks,4);
});

test('failure diagnostics and duplicate broken references are preserved',async t=>{
 const root=await fixture(t,{
  'index.html':`<a href="${base}page/#absent">Missing ID</a><a href="${base}page/#absent">Again</a><a href="${base}gone/">Missing</a><img src="${base}gone.png"><a href="/wrong/">Base</a><a href="${base}page/#%22">Encoded quote</a>Geometry Proof Atlas`,
  'page/index.html':'<p id="present">OK</p>',
 });
 const result=await checkLinks({root,base});
 assert.deepEqual(comparable(result),await legacy(root,base));
 assert.equal(result.errors.length,7);
 assert.equal(result.errors.filter(s=>s.includes('missing fragment')).length,3);
 assert.equal(result.errors.filter(s=>s.includes('missing target')).length,2);
});

test('a second invocation detects removed anchors and deleted assets (no persistent cache)',async t=>{
 const root=await fixture(t,{'ja/index.html':`<a href="#ok">OK</a><i id="ok"></i><img src="a.png">`,'ja/a.png':'image'});
 assert.deepEqual((await checkLinks({root,base})).errors,[]);
 await writeFile(path.join(root,'ja/index.html'),'<a href="#ok">OK</a><img src="a.png">');
 await rm(path.join(root,'ja/a.png'));
 const result=await checkLinks({root,base});
 assert.deepEqual(comparable(result),await legacy(root,base));
 assert.equal(result.errors.length,2);
});

test('CLI used by GitHub Actions exits nonzero for a broken link',async t=>{
 const root=await fixture(t,{'dist/index.html':`<a href="${base}missing/">Broken</a>`});
 const cli=fileURLToPath(new URL('./check-links.mjs',import.meta.url));
 const failed=spawnSync(process.execPath,[cli],{cwd:root,encoding:'utf8'});
 assert.equal(failed.status,1);assert.match(failed.stderr,/missing target/);
 await writeFile(path.join(root,'dist/index.html'),'<p id="ok"><a href="#ok">OK</a></p>');
 const passed=spawnSync(process.execPath,[cli],{cwd:root,encoding:'utf8'});
 assert.equal(passed.status,0);assert.match(passed.stdout,/Checked 1 internal links\/assets across 1 HTML pages/);
});
