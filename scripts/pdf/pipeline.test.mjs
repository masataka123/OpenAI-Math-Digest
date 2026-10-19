// Explicit integration suite: requires PDF_PYTHON and Chrome/PDF_BROWSER_PATH.
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {identifySVGs,collectFigureLinks} from './collect-links.mjs';
const python=process.env.PDF_PYTHON??'python3';
const render=(html,pdf,geometry)=>spawnSync(python,['scripts/pdf/render-linked.py',html,pdf,'1',geometry],{encoding:'utf8'});

test('SVG citations survive pagination, transforms, internal destinations and repeated diagrams',async()=>{
 const dir=await mkdtemp(path.join(tmpdir(),'digest-pdf-test-'));
 try {
  const svg=`<div class="proof-diagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="10 20 200 100" width="400" height="200"><g transform="translate(10 20)"><a href="https://example.org/paper.pdf#page=3"><rect x="10" y="10" width="60" height="20" fill="green"/></a><a xlink:href="#target" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="100" y="60" width="70" height="25" fill="blue"/></a></g></svg></div>`;
  const html=identifySVGs(`<!doctype html><html><head><style>@page{size:A4} h1{bookmark-level:1} .proof-diagram{break-inside:avoid}</style></head><body><h1>Diagram links</h1>${svg}<section style="break-before:page"><p id="target">Destination</p>${svg}</section></body></html>`);
  const source=path.join(dir,'book.html'), geometry=path.join(dir,'geometry.json'),pdf=path.join(dir,'book.pdf');
  await writeFile(source,html);
  const info=await collectFigureLinks(source,geometry);
  assert.equal(info.figures.length,2);
  assert.deepEqual(info.figures[0].links[0],{url:'https://example.org/paper.pdf#page=3',x:.05,y:.1,width:.3,height:.2});
  assert.equal(info.figures[0].links[1].url,'#target');
  const result=render(source,pdf,geometry);
  assert.equal(result.status,0,result.stderr);
  assert.equal(JSON.parse(result.stdout).svgLinks,4);
  const inspected=spawnSync(python,['-c',`import json,sys
from pypdf import PdfReader
r=PdfReader(sys.argv[1]); out=[]
for i,p in enumerate(r.pages):
 for a in p.get('/Annots',[]):
  a=a.get_object()
  if str(a.get('/NM','')).startswith('digest-svg-'):
   dest=a.get('/Dest')
   out.append({'page':i,'uri':a.get('/A',{}).get('/URI'),'destinationPage':r.get_page_number(dest[0].get_object()) if dest else None})
print(json.dumps(out))`,pdf],{encoding:'utf8'});
  assert.equal(inspected.status,0,inspected.stderr);
  const links=JSON.parse(inspected.stdout);
  assert.equal(links.filter(l=>l.uri==='https://example.org/paper.pdf#page=3').length,2);
  assert.deepEqual(links.filter(l=>!l.uri).map(l=>l.destinationPage),[1,1]);
  assert.deepEqual([...new Set(links.map(l=>l.page))],[0,1]);
  await writeFile(source,html+'<!-- changed -->');
  assert.match(render(source,pdf,geometry).stderr,/HTML changed/);
  await writeFile(source,html);
  const bad=structuredClone(info);bad.figures[0].links[1].url='#missing';
  await writeFile(geometry,JSON.stringify(bad));
  assert.match(render(source,pdf,geometry).stderr,/Missing SVG internal destination/);
  bad.figures[0].id='unplaced';await writeFile(geometry,JSON.stringify(bad));
  assert.match(render(source,pdf,geometry).stderr,/Unplaced proof figures/);
  await writeFile(source,html.replace('width="60"','width="0"'));
  await assert.rejects(collectFigureLinks(source,geometry),/Empty SVG link/);
 } finally {await rm(dir,{recursive:true,force:true});}
});

test('booklets without proof diagrams render without a browser measurement pass',async()=>{
 const dir=await mkdtemp(path.join(tmpdir(),'digest-pdf-empty-'));
 try {
  const html='<html><body><h1>One chapter</h1><p>Text only.</p></body></html>';
  const source=path.join(dir,'book.html'),pdf=path.join(dir,'book.pdf'),geometry=path.join(dir,'geometry.json');
  await writeFile(source,html);
  await writeFile(geometry,JSON.stringify({htmlSha256:createHash('sha256').update(html).digest('hex'),figures:[]}));
  const result=render(source,pdf,geometry);
  assert.equal(result.status,0,result.stderr);
  assert.equal(JSON.parse(result.stdout).svgLinks,0);
 } finally {await rm(dir,{recursive:true,force:true});}
});
