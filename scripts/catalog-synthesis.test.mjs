import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {synthesis,articleSections,connectionSections} from '../src/data/catalog-034-synthesis.mjs';
import {catalogueNotes,catalogueDependencies} from '../src/data/catalog-034.mjs';

test('synthesis explains every recorded connection and covers all 14 papers in linked diagrams',()=>{
 const explained=new Set(),drawnPapers=new Set();
 for(const strand of synthesis){
  for(const lang of ['ja','en'])for(const field of ['title','intro','caption','alt'])assert.ok(strand[field][lang]);
  const tikz=readFileSync(`src/diagrams/catalog-034/${strand.diagram}.tikz`,'utf8');
  for(const [,id] of tikz.matchAll(/\\Paper\{([^}]+)\}/g)){assert.ok(articleSections[id]);drawnPapers.add(id);}
  for(const [,id] of tikz.matchAll(/\\Input\{([^}]+)\}/g))assert.ok(catalogueDependencies.some(d=>d.id===id),id);
  for(const step of strand.steps){
   for(const lang of ['ja','en'])assert.ok(step.title[lang]&&step.body[lang]);
   for(const id of step.edges){assert.ok(catalogueDependencies.some(d=>d.id===id),id);explained.add(id);}
   for(const [id,anchor] of step.read)assert.ok(articleSections[id]&&anchor);
  }
 }
 assert.deepEqual([...drawnPapers].sort(),catalogueNotes.map(n=>n.id).sort());
 assert.deepEqual([...explained].sort(),catalogueDependencies.map(n=>n.id).sort());
 assert.deepEqual(Object.keys(connectionSections).sort(),[...explained].sort());
});

test('published overview diagrams have matching bilingual link targets with accessible labels',()=>{
 for(const strand of synthesis){
  const links=[];
  for(const lang of ['ja','en']){
   const stem=`catalog-034-${strand.diagram}${lang==='en'?'-en':''}`;
   const svg=readFileSync(`public/diagrams/${stem}.svg`,'utf8');
   assert.doesNotMatch(svg,/undefined|NaN/);
   const anchors=[...svg.matchAll(/<a\s[^>]*>/g)].map(m=>m[0]);
   assert.ok(anchors.length>0);
   for(const a of anchors){assert.match(a,/aria-label="[^"]+"/);assert.match(a,/tabindex="0"/);}
   links.push(anchors.map(a=>a.match(/ href="([^"]+)"/)[1].replace(`/${lang}/`,'/LANG/')));
  }
  assert.deepEqual(links[0],links[1]);
 }
});
