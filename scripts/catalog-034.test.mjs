import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogs,papers,languages,paperSource} from '../src/data/site.mjs';
import {catalogueNotes,catalogueDependencies,themes,edgeKinds} from '../src/data/catalog-034.mjs';
import reading from '../research/catalog-034-reading-notes.json' with {type:'json'};

test('catalogue summaries cover the official inventory once, in order, in both languages',()=>{
 assert.deepEqual(catalogueNotes.map(n=>n.id),catalogs.find(c=>c.id==='034').paperIds);
 assert.deepEqual(reading.manuscripts.map(n=>n.id),catalogueNotes.map(n=>n.id));
 for(const n of catalogueNotes){
  assert.equal(themes.filter(t=>t.id===n.theme).length,1);
  for(const lang of languages)for(const field of ['claim','role'])assert.ok(n[field][lang]?.trim(),`${n.id}: ${field}.${lang}`);
  assert.ok(n.result&&n.short);
 }
});
test('every connection resolves to a source, application and reading record',()=>{
 assert.equal(new Set(catalogueDependencies.map(d=>d.id)).size,catalogueDependencies.length);
 for(const d of catalogueDependencies){
  const source=papers.find(p=>p.id===d.fromId),target=papers.find(p=>p.id===d.toId);
  assert.ok(source&&target);assert.notEqual(source.id,target.id);
  assert.equal(d.url,paperSource(source));assert.equal(d.to.url,paperSource(target));
  assert.match(d.result,/p[.]|pp[.]/);assert.match(d.use,/p[.]|pp[.]/);
  assert.ok(edgeKinds[d.kind]);
  for(const lang of languages)assert.ok(d.role[lang]&&d.check[lang]);
  const record=reading.connections.find(r=>r.id===d.id);
  assert.deepEqual([record.from,record.to,record.input,record.use,record.kind],[d.fromId,d.toId,d.result,d.use,d.kind]);
 }
});
