import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {catalogs,papers,paperSource,catalogsForField} from '../src/data/site.mjs';
import {renderCatalogInventory} from '../src/lib/catalog-inventory.mjs';
import {renderDraft} from '../src/lib/render-draft.mjs';
import inventory from '../coordination/catalog-063/inventory.json' with {type:'json'};
import connections from '../drafts/catalog-063/overview/connections.json' with {type:'json'};

test('063 uses its pinned single manuscript and preserves official field order',()=>{
 const catalog=catalogs.find(c=>c.id==='063'),record=inventory.manuscripts[0];
 assert.equal(catalog.mode,'single');
 assert.deepEqual(catalog.paperIds,[record.paperId]);
 assert.equal(catalog.title.en,inventory.overviewTitle);
 assert.equal(paperSource(papers.find(p=>p.id===record.paperId)),record.sourceUrl);
 assert.deepEqual(catalogsForField('algebraic-complex-geometry').map(c=>c.id),['033','034','038','063']);
 assert.equal(catalogs.find(c=>c.id==='034').sourceCommit,'adc7f1241b42e322a6451854ab7e4b4c146bf78a');
});

test('063 overview, article and external-input records resolve to the same bilingual anchors and assets',async()=>{
 const root='drafts/catalog-063',id='generalized-mukai';
 const headings=[];
 for(const lang of ['ja','en']){
  const rendered=await renderDraft(fs.readFileSync(`${root}/${id}/article.${lang}.md`,'utf8'),{
   lang,paperId:id,catalogId:'063',base:'/OpenAI-Math-Digest/',diagramSource:stem=>{
    const source=`${root}/${id}/diagrams/${stem}`,asset=`public/diagrams/catalog-063/${id}/${stem}`;
    for(const ext of ['svg','tex'])assert.deepEqual(fs.readFileSync(`${source}.${ext}`),fs.readFileSync(`${asset}.${ext}`));
    return fs.readFileSync(`${asset}.svg`,'utf8');
   },
  });
  assert.equal((rendered.html.match(/class="proof-figure"/g)||[]).length,5);
  assert.ok(rendered.html.includes('id="theorem-1-1"'));
  assert.ok(!/diagrams\/catalog-03[34]\//.test(rendered.html));
  for(const edge of connections.connections){
   const anchor=edge.articleLinks[lang].split('#')[1];
   assert.ok(rendered.html.includes(`id="${anchor}"`),edge.id);
  }
  headings.push(rendered.headings.map(h=>h.slug));
  const overview=await renderDraft(fs.readFileSync(`${root}/overview/article.${lang}.md`,'utf8'),{lang,paperId:'overview',catalogId:'063',base:'/OpenAI-Math-Digest/',sectionIds:['papers','connections','sources'],diagramSource:()=>{throw Error('No duplicate overview figure expected');}});
  overview.html=overview.html.replace('<p>CATALOGINVENTORYTOKEN</p>',renderCatalogInventory(catalogs.find(c=>c.id==='063'),papers,JSON.parse(fs.readFileSync(`${root}/overview/presentation.json`)),lang,'/OpenAI-Math-Digest/'));
  assert.ok(overview.html.includes('id="paper-generalized-mukai"'));
  assert.ok(overview.html.includes(`/${lang}/papers/${id}/`));
  assert.ok(!/作成予定|awaiting production/.test(overview.introHtml));
 }
 assert.deepEqual(...headings);
});
