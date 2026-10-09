import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {catalogs,papers,paperSource,catalogsForField,sourceCommit} from '../src/data/site.mjs';
import {records,dependencyConfig,overviewSectionIds} from '../src/data/catalog-033.mjs';
import {renderDraft} from '../src/lib/render-draft.mjs';
const catalog=catalogs.find(c=>c.id==='033');
const root='drafts/catalog-033';

test('033 registers five papers in official order without moving the 034 source snapshot',()=>{
 assert.equal(catalog.paperIds.length,5);
 assert.equal(catalog.title.en,"Campana's orbifold Iitaka conjecture and logarithmic subadditivity");
 assert.deepEqual(catalogsForField('algebraic-complex-geometry').map(c=>c.id),['033','034','063']);
 for(const record of Object.values(records.papers)){
  const paper=papers.find(p=>p.id===record.paperId);
  assert.equal(paperSource(paper),record.sourceUrl);
  assert.equal(paper.version,record.version);
 }
 assert.equal(sourceCommit,'adc7f1241b42e322a6451854ab7e4b4c146bf78a');
 assert.equal(catalogs.find(c=>c.id==='034').paperIds.length,14);
});

test('dependency explorer distinguishes 12 inputs and one premise from alternatives',()=>{
 assert.equal(dependencyConfig.entries.filter(d=>d.kind!=='premise').length,12);
 assert.equal(dependencyConfig.entries.filter(d=>d.kind==='premise').length,1);
 assert.equal(records.connections.filter(d=>d.kind==='alternative').length,3);
 assert.deepEqual(records.comparisons.map(c=>c.kind),['similar-method','similar-method','background']);
 for(const d of dependencyConfig.entries){
  assert.ok(dependencyConfig.sections[d.id]?.every(Boolean));
  assert.equal(records.connections.find(c=>c.id===d.id).checking.fullInputProofVerified,false);
 }
 assert.equal(dependencyConfig.entries.find(c=>c.id==='c12').kind,'consequence');
 assert.ok(!dependencyConfig.entries.some(c=>c.toId==='schnell-fiber-spaces'));
});

test('033 bilingual sections, all 52 figure pairs and relative article links survive rendering',async()=>{
 let figures=0;
 for(const id of ['overview',...catalog.paperIds]){
  const headings=[];
  for(const lang of ['ja','en']){
   const source=fs.readFileSync(`${root}/${id}/article.${lang}.md`,'utf8');
   const result=await renderDraft(source,{lang,paperId:id,catalogId:'033',base:'/OpenAI-Math-Digest/',sectionIds:id==='overview'?overviewSectionIds:[],diagramSource:stem=>{
    const path=`${id}/diagrams/${stem}`;
    const svg=fs.readFileSync(`${root}/${path}.svg`,'utf8');
    assert.equal(svg,fs.readFileSync(`public/diagrams/catalog-033/${id}/${stem}.svg`,'utf8'));
    assert.deepEqual(fs.readFileSync(`${root}/${path}.tex`),fs.readFileSync(`public/diagrams/catalog-033/${id}/${stem}.tex`));
    figures++;return svg;
   }});
   headings.push(result.headings.map(h=>h.slug));
   assert.ok(!/href="[^"\n]*article\.(ja|en)\.md/.test(result.html));
   assert.ok(!result.html.includes('/diagrams/catalog-034/'));
   if(id==='overview')for(const paperId of catalog.paperIds)assert.ok(result.html.includes(`/${lang}/papers/${paperId}/`));
  }
  assert.deepEqual(...headings,`${id}: bilingual anchors`);
 }
 assert.equal(figures,52);
});
