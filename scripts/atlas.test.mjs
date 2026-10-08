import test from 'node:test';
import assert from 'node:assert/strict';
import {ancestors,steps,references,families} from '../prototype/atlas.mjs';
test('nef route does not incorrectly require the separate volume branch',()=>{
 assert.deepEqual(ancestors('nef'),['disc','frame','hessian','nef']);
 assert.equal(ancestors('nef').includes('volume'),false);
});
test('the final claim requires both branches in prerequisite order',()=>{
 const order=ancestors('ample'); assert.equal(order.length,7);
 for(const node of steps)for(const parent of node.parents)assert.ok(order.indexOf(parent)<order.indexOf(node.id));
});
test('unknown inputs and cyclic logical dependencies fail visibly',()=>{
 assert.throws(()=>ancestors('missing'),/Unknown dependency/);
 assert.throws(()=>ancestors('a',[{id:'a',parents:['b']},{id:'b',parents:['a']}]),/Dependency cycle/);
});
test('bilingual entries and cited references stay connected',()=>{
 const ids=new Set(references.map(r=>r.id));
 for(const s of steps){for(const r of s.refs)assert.ok(ids.has(r));for(const key of ['label','result','input','why'])for(const lang of ['ja','en'])assert.ok(s[key][lang]);}
 assert.equal(new Set(families.map(f=>f.id)).size,families.length);
 for(const f of families)for(const key of ['title','claim','caveat','state'])for(const lang of ['ja','en'])assert.ok(f[key][lang]);
});
