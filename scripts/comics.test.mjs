import test from 'node:test';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import entries from '../src/data/comics.json' with {type:'json'};
import {resolveComics,visibleComics,comics,comicFields} from '../src/data/comics.mjs';

test('all supplied comics work without any normal catalogue or article',()=>{
 const independent=resolveComics(entries,[],[]);
 assert.equal(independent.length,36);
 assert.ok(independent.every(c=>c.normalCatalog===null&&c.targetPapers.length>0));
 assert.ok(independent.flatMap(c=>c.manuscripts).every(p=>p.normalPaperId===null&&p.sourceUrl.includes('/adc7f1241b42e322a6451854ab7e4b4c146bf78a/')));
});

test('official subject membership orders the 36 supplied comics without adding omitted numbers',()=>{
 const field=comicFields.find(f=>f.id==='algebraic-complex-geometry');
 assert.deepEqual(field.comics.map(c=>c.catalogId),field.officialIds);
 assert.ok(!field.comics.some(c=>['045','061'].includes(c.catalogId)));
});

test('only existing normal articles receive corresponding article links',()=>{
 const missing=comics.find(c=>c.catalogId==='032');
 const existing=comics.find(c=>c.catalogId==='034');
 assert.equal(missing.normalCatalog,null);
 assert.ok(missing.targetPapers.every(p=>p.normalPaperId===null));
 assert.equal(existing.normalCatalog.id,'034');
 assert.equal(existing.targetPapers[0].normalPaperId,'log-abundance-characteristic-zero');
});

test('unpublished comics are absent unless preview is explicitly enabled',()=>{
 const statuses=['prototype','ready','published'].map(status=>({status}));
 assert.deepEqual(visibleComics(statuses),[{status:'published'}]);
 assert.equal(visibleComics(statuses,true).length,3);
});

test('registration supports ordered image arrays and prevents false author attribution',()=>{
 const entry=structuredClone(entries[0]);
 entry.pages.push({...entry.pages[0],id:'page-002'});
 assert.deepEqual(resolveComics([entry])[0].pages.map(p=>p.id),['page-001','page-002']);
 entry.supplement.text='This was not provided by the author.';
 assert.throws(()=>resolveComics([entry]),/Unapproved author supplement/);
});

test('broken catalogue, target-source, image path and duplicate registrations fail early',()=>{
 const entry=structuredClone(entries[0]);
 assert.throws(()=>resolveComics([{...entry,catalogId:'999'}]),/Missing official catalogue/);
 assert.throws(()=>resolveComics([{...entry,targetSourcePaths:['preprints/missing.pdf']}]),/Unknown target source/);
 assert.throws(()=>resolveComics([{...entry,pages:[{...entry.pages[0],png:'images/comics/../missing.png'}]}]),/Invalid comic image/);
 assert.throws(()=>resolveComics([entry,entry]),/Duplicate comic catalogue/);
});

test('all registered source and optimized image files exist, and supplements remain pending',async()=>{
 for(const entry of entries){
  assert.equal(entry.supplement.status,'awaiting-author');
  assert.equal(entry.supplement.text,null);
  await access(entry.original.path);
  for(const page of entry.pages)await Promise.all([access(`public/${page.webp}`),access(`public/${page.png}`)]);
 }
});
