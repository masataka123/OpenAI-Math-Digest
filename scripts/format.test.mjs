import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {catalogs,papers} from '../src/data/site.mjs';
import {renderCatalogInventory,validateInventory} from '../src/lib/catalog-inventory.mjs';
import {renderDraft} from '../src/lib/render-draft.mjs';
import {findCitationRegistries} from './sync-citations.mjs';
import {loadCitations,citationMarkdown} from './lib/citations.mjs';
import {validateGuide} from './lib/article-guides.mjs';
const registry=loadCitations('drafts/catalog-063/citations.json'),guide=registry.articleGuides['generalized-mukai'];
const article=fs.readFileSync('drafts/catalog-063/generalized-mukai/article.ja.md','utf8');

test('new catalogues have official inventories and bilingual guides for every owned article',async()=>{
 for(const catalog of catalogs.filter(c=>!['033','034'].includes(c.id))){
  const data=JSON.parse(fs.readFileSync(`drafts/catalog-${catalog.id}/overview/presentation.json`));
  validateInventory(catalog,papers,data);
  for(const lang of ['ja','en']){
   const overview=fs.readFileSync(`drafts/catalog-${catalog.id}/overview/article.${lang}.md`,'utf8');
   assert.equal(overview.split('CATALOGINVENTORYTOKEN').length,2);
   const table=renderCatalogInventory(catalog,papers,data,lang,'/test/');
   assert.equal((table.match(/<tr id="paper-/g)||[]).length,catalog.paperIds.length);
   assert.equal((table.match(/scope="col"/g)||[]).length,4);
  }
  const registries=findCitationRegistries(catalog.id).map(file=>({file,registry:loadCitations(file)}));
  for(const p of papers.filter(p=>p.catalogId===catalog.id))for(const lang of ['ja','en']){
   const filename=path.resolve(`drafts/catalog-${catalog.id}/${p.id}/article.${lang}.md`);
   const owner=registries.find(({file,registry})=>registry.markdownFiles.some(f=>path.resolve(path.dirname(file),f)===filename));
   assert.ok(owner,`Missing registry: ${p.id}`);
   const relative=path.relative(path.dirname(owner.file),path.dirname(filename))||'.';
   const guide=owner.registry.articleGuides?.[relative];assert.ok(guide,`Missing article guide: ${p.id}`);
   const source=fs.readFileSync(filename,'utf8');validateGuide(owner.registry,guide,source);
   const {html}=await renderDraft(source,{lang,paperId:p.id,catalogId:catalog.id,base:'/',diagramSource:()=>'<svg/>'});
   const references=html.match(/<section id="diagram-sources"[\s\S]*?<\/section>/)?.[0];
   assert.ok(references);assert.ok(!/\$\$(?:KM|PA|MM|MMC|TZ|CA|DE|BCDD|ERR|OC)\$\$/.test(html),'Citation keys must not become display math');assert.equal((references.match(/<li>/g)||[]).length,guide.externalSources.length);
   assert.ok(html.indexOf('id="diagram-sources"')<html.indexOf('<figure'));
   assert.equal((html.match(/(?:証明対象|Proof target)：/g)||[]).length,guide.proofTargets.length);
   const sources=html.slice(html.indexOf('<section id="sources"'));
   assert.ok(sources.includes('<ul>'));assert.ok((sources.match(/<li>/g)||[]).length>=guide.readingList.length);
  }
 }
});
test('missing roles, reference lists, reading purposes and proof targets are rejected',()=>{
 const bad=structuredClone(registry);delete bad.sources.KM.guideRole.en;
 assert.throws(()=>validateGuide(bad,guide,article),/source role/);
 assert.throws(()=>validateGuide(registry,{...guide,externalSources:guide.externalSources.filter(s=>s!=='KM')},article),/Undefined external/);
 assert.throws(()=>validateGuide(registry,guide,article.replace('<!-- reference-guide -->','')),/reference-guide/);
 assert.throws(()=>validateGuide(registry,guide,article.replace('## 2. Proposition 3.1','## 2. A method')),/Proof heading/);
 const badGuide=structuredClone(guide);delete badGuide.readingList[0].purpose.ja;
 assert.throws(()=>validateGuide(registry,badGuide,article),/reading purpose/);
});
test('one-paper inventory retains all columns and rejects incomplete rows or wrong official order',()=>{
 const catalog=catalogs.find(c=>c.id==='063'),data=JSON.parse(fs.readFileSync('drafts/catalog-063/overview/presentation.json'));
 const missing=structuredClone(data);delete missing.rows[0].role.ja;
 assert.throws(()=>validateInventory(catalog,papers,missing),/role/);
 assert.throws(()=>validateInventory(catalog,papers,{...data,rows:[]}),/official paper order/);
 assert.match(renderCatalogInventory(catalog,papers,data,'ja','/'),/原論文（GitHub）/);
});
test('internal references are unprefixed; external references carry defined keys and readable names',()=>{
 assert.ok(!citationMarkdown(registry,'main-result','ja').includes('Generalized Mukai'));
 assert.match(citationMarkdown(registry,'chain-bound','ja'),/Mukai chain bound.*BCDD/);
});
