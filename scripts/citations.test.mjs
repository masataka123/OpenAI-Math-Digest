import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadCitations,citationMarkdown,citationUrl,citationTex,pageNumbers} from './lib/citations.mjs';
import {syncCitations,findCitationRegistries} from './sync-citations.mjs';
import {renderDraft} from '../src/lib/render-draft.mjs';
import {catalogs,papers} from '../src/data/site.mjs';
const file='drafts/catalog-063/citations.json',registry=loadCitations(file);

test('printed page numbers are distinguished from PDF destinations',()=>{
 assert.match(citationMarkdown(registry,'chain-bound','ja'),/誌面 p\. 623 \/ PDF p\. 23/);
 assert.match(citationUrl(registry,'chain-bound'),/#page=23$/);
 assert.match(citationMarkdown(registry,'product','en'),/print p\. 271 \/ PDF p\. 2/);
 assert.ok(!citationUrl(registry,'product').includes('#'));
 assert.ok(!citationUrl(registry,'main-result').includes('#'));
 assert.match(citationUrl(registry,'one-cycles'),/#page=2$/);
});
test('ranges and unknown citations fail rather than silently produce plausible references',()=>{
 assert.deepEqual(pageNumbers('5–6, 17–18'),[5,6,17,18]);
 for(const bad of ['0','9–3','4-5','four','1,2'])assert.throws(()=>pageNumbers(bad));
 assert.throws(()=>citationMarkdown(registry,'missing','ja'),/Unknown citation/);
});
test('managed citation markers preserve shared source-line and article structure',async()=>{
 const source=fs.readFileSync('drafts/catalog-063/generalized-mukai/article.ja.md','utf8');
 const {html,headings}=await renderDraft(source,{lang:'ja',paperId:'generalized-mukai',catalogId:'063',base:'/',diagramSource:()=>'<svg/>'});
 assert.equal((html.match(/class="source-line"/g)||[]).length,23);
 assert.equal((html.match(/class="proof-step"/g)||[]).length,16);
 assert.ok(html.includes('id="theorem-1-1"'));
 assert.deepEqual(headings.map(h=>h.slug),['results','diagram-sources','proof-overview','proof-1','proof-2','proof-3','proof-4','dependencies','sources']);
 assert.ok(!html.includes('<!-- cite:'));
});
test('every registered new catalogue uses checked citations and fresh diagram outputs',()=>{
 // The two original catalogues retain their published citations until a separate migration.
 for(const catalog of catalogs.filter(c=>!['033','034'].includes(c.id))){
  const registries=findCitationRegistries(catalog.id);assert.ok(registries.length,`Missing citations for ${catalog.id}`);
  const managed=new Set();
  for(const file of registries){
   const data=JSON.parse(fs.readFileSync(file,'utf8'));
   for(const target of data.markdownFiles){
    const full=new URL(target,new URL('../'+file,import.meta.url)).pathname;
    assert.ok(!managed.has(full),`Overlapping registry ownership: ${full}`);managed.add(full);
   }
  }
  // A shared paper keeps its original owner and citation registry; do not force a duplicate draft.
  const ownedPaperIds=catalog.paperIds.filter(id=>papers.find(p=>p.id===id)?.catalogId===catalog.id);
  for(const paperId of ['overview',...ownedPaperIds])for(const lang of ['ja','en']){
   const expected=new URL(`../drafts/catalog-${catalog.id}/${paperId}/article.${lang}.md`,import.meta.url).pathname;
   assert.ok(managed.has(expected),`Missing managed article: ${expected}`);
  }
 }
 assert.ok(syncCitations({check:true}).catalogues>=1);
});
test('Japanese and English cite the same records and TeX shares their readable names',()=>{
 const markers=lang=>[...fs.readFileSync(`drafts/catalog-063/generalized-mukai/article.${lang}.md`,'utf8').matchAll(/<!-- cite:([a-z0-9-]+) -->/g)].map(m=>m[1]);
 assert.deepEqual(markers('ja'),markers('en'));
 for(const lang of ['ja','en']){
  const tex=citationTex(registry,lang);
  assert.ok(tex.includes('Mukai chain bound'));
  assert.ok(tex.includes('PDF p. 23'));
  assert.ok(tex.includes('\\string##page=23'));
 }
});
test('generated SVG links keep PDF page positions and the source sets declared on each diagram',()=>{
 const root='drafts/catalog-063/generalized-mukai/diagrams';
 for(const name of fs.readdirSync(root).filter(n=>n.endsWith('.tikz'))){
  const source=fs.readFileSync(`${root}/${name}`,'utf8');
  const expected=new Set([...source.matchAll(/\\Cite\{([^}]+)\}/g)].map(m=>citationUrl(registry,m[1])));
  for(const lang of ['ja','en']){
   const svg=fs.readFileSync(`${root}/${name.slice(0,-5)}.${lang}.svg`,'utf8');
   const actual=new Set([...svg.matchAll(/<a\b[^>]*(?:xlink:href|href)="([^"]+)"/g)].map(m=>m[1].replaceAll('&amp;','&')));
   assert.deepEqual(actual,expected,`${name}/${lang}`);
  }
 }
});
