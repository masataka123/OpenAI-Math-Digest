import test from 'node:test';
import assert from 'node:assert/strict';
import {browserOptions,browserTargets} from './check-browser.mjs';
test('browser inspection requires an explicit three-digit catalogue',()=>{
 assert.deepEqual(browserOptions(['--catalog','357','--references']),{catalog:'357',references:true});
 for(const args of [[],['--catalog','35'],['--catalog','357','--output'],['--catalog','357','--catalog','356']])assert.throws(()=>browserOptions(args));
});
test('registered papers determine bilingual desktop/mobile coverage without fixed paper counts',()=>{
 const targets=browserTargets({id:'999',paperIds:['first','second']},true);
 assert.equal(targets.length,18);
 assert.equal(targets.filter(t=>t.kind==='reference').length,6);
 for(const route of ['catalog/999/','papers/first/','papers/second/'])
  assert.deepEqual(targets.filter(t=>t.route===route).map(t=>[t.lang,t.width]),[['ja',1280],['ja',375],['en',1280],['en',375]]);
 assert.equal(browserTargets({id:'034',paperIds:['schnell-fiber-spaces','orbifold-logarithmic-iitaka']},true).length,12);
});
