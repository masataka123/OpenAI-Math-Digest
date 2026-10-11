import test from 'node:test';
import assert from 'node:assert/strict';
import {fields,catalogs,papers,languages,catalogsForField,fieldsForCatalog,catalogsForPaper} from '../src/data/site.mjs';
import {articleNavigationLabel} from '../src/data/article-navigation.mjs';
test('proof-overview navigation retains the result number from the heading',()=>{
 for(const lang of languages){
  const heading={slug:'proof-overview',text:'2. Theorem 1.3 — Proof overview of the main theorem'};
  const label=articleNavigationLabel('half-weight-fourfold-abelianity',heading,lang);
  assert.ok(label.includes('Theorem 1.3'));
  assert.ok(!label.includes('Theorem 1.1'));
  assert.equal(articleNavigationLabel('generalized-mukai',{...heading,text:'2. Theorem 1.1 — 主定理の証明概略'},lang),lang==='en'?'Theorem 1.1: proof overview':'Theorem 1.1の証明概略');
 }
});
test('field, catalogue and manuscript references resolve without duplicate records',()=>{
 for(const collection of [fields,catalogs,papers])assert.equal(new Set(collection.map(x=>x.id)).size,collection.length);
 for(const field of fields)for(const id of field.catalogIds)assert.ok(catalogs.some(c=>c.id===id),id);
 for(const catalog of catalogs){assert.match(catalog.id,/^\d{3}$/);for(const id of catalog.paperIds)assert.ok(papers.some(p=>p.id===id),id);}
 for(const item of [...fields,...catalogs])for(const key of ['title','description'])for(const lang of languages)assert.ok(item[key][lang]);
});
test('the first reading route connects both ways and supports shared catalogues',()=>{
 assert.ok(catalogsForField('algebraic-complex-geometry').some(c=>c.id==='034'));
 assert.ok(catalogsForPaper('schnell-fiber-spaces').some(c=>c.id==='034'));
 const extra={id:'temporary-field',catalogIds:['034']};fields.push(extra);
 try{assert.equal(fieldsForCatalog('034').length,2);assert.strictEqual(catalogsForField(extra.id)[0],catalogs.find(c=>c.id==='034'));}finally{fields.pop();}
});
