import test from 'node:test';
import assert from 'node:assert/strict';
import {fields,catalogs,papers,languages,catalogsForField,fieldsForCatalog,catalogsForPaper} from '../src/data/site.mjs';
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
