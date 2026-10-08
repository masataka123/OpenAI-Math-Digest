import test from 'node:test';
import assert from 'node:assert/strict';
import {fromHtml} from 'hast-util-from-html';
import {toHtml} from 'hast-util-to-html';
import {prepare,rewrite} from './pdf/prepare.mjs';
import {catalogs} from '../src/data/site.mjs';
const site='https://masataka123.github.io',base='/OpenAI-Math-Digest/';

test('booklets internalize only the current catalogue and its papers, preserving cross-catalogue source links',()=>{
 const catalog=catalogs.find(c=>c.id==='033');
 const tree=fromHtml(`<main id="root"><a href="${base}ja/papers/orbifold-logarithmic-iitaka/#proof-3">Same book</a><a href="${site}${base}ja/papers/log-abundance/#corollary-11-2">Other book</a><a href="${base}ja/catalog/033/">Synthesis</a><a href="${base}en/papers/orbifold-logarithmic-iitaka/">Other language</a><a href="#local">Local</a><svg><defs><path id="glyph"/></defs><use href="#glyph"/></svg></main>`,{fragment:true});
 rewrite(tree,'whole-fiber-variation','ja',{catalog,site,base});
 const html=toHtml(tree);
 assert.ok(html.includes('href="#orbifold-logarithmic-iitaka--proof-3"'));
 assert.ok(html.includes(`href="${site}${base}ja/papers/log-abundance/#corollary-11-2"`));
 assert.ok(html.includes('href="#catalog-033"'));
 assert.ok(html.includes(`href="${site}${base}en/papers/orbifold-logarithmic-iitaka/"`));
 assert.ok(html.includes('href="#whole-fiber-variation--local"'));
 assert.ok(html.includes('id="whole-fiber-variation--glyph"'));
 assert.ok(html.includes('href="#whole-fiber-variation--glyph"'));
});

test('booklet print view retains every connection and removes controls and duplicate audit only',()=>{
 const records=Array.from({length:13},(_,i)=>`<li class="connection" id="connection-c${i}" hidden>Input ${i}</li>`).join('');
 const tree=fromHtml(`<main><nav class="contents">Menu</nav><div class="dependency-controls">Controls</div><section class="catalog-audit">Duplicate table</section><ol class="connection-list">${records}</ol><p class="source-note"><a href="${base}ja/catalog/033/#paper-example">Back</a></p><section id="sources">Unverified passages remain.</section></main>`,{fragment:true});
 const html=toHtml(prepare(tree,'033'));
 assert.equal((html.match(/class="connection"/g)||[]).length,13);
 assert.ok(!html.includes('hidden'));
 assert.ok(!html.includes('Duplicate table'));
 assert.ok(!html.includes('Controls'));
 assert.ok(!html.includes('>Back<'));
 assert.ok(html.includes('Unverified passages remain.'));
});

test('official-order table rows retain article anchors in print entries',()=>{
 const tree=fromHtml('<table><thead><tr><th>Paper</th><th>Role</th></tr></thead><tbody><tr id="paper-one"><td><a href="/OpenAI-Math-Digest/ja/papers/one/">Title</a></td><td>Specific result</td></tr></tbody></table>',{fragment:true});
 const html=toHtml(prepare(tree,'033'));
 assert.ok(html.includes('id="paper-one" class="print-row"'));
 assert.ok(html.includes('<h4>Paper</h4>'));
 assert.ok(html.includes('<h4>Role</h4>Specific result'));
 assert.ok(!html.includes('<table'));
});
