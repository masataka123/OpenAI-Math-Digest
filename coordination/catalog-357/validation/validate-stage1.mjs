import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
import {renderCatalogInventory,validateInventory} from '../../../src/lib/catalog-inventory.mjs';
import {loadCitations} from '../../../scripts/lib/citations.mjs';
import {validateGuide} from '../../../scripts/lib/article-guides.mjs';
import {syncCitations,findCitationRegistries} from '../../../scripts/sync-citations.mjs';
const out='coordination/catalog-357/validation';
const results=[];
const record=async(name,fn)=>{try{results.push({name,status:'pass',details:await fn()});}catch(e){results.push({name,status:'fail',error:String(e)});}};
const read=p=>fs.readFileSync(p,'utf8');
await record('official inventory and four-column table',async()=>{
 const inventory=JSON.parse(read('coordination/catalog-357/inventory.json'));
 const catalog={id:'357',paperIds:inventory.manuscripts.map(p=>p.paperId)};
 const papers=inventory.manuscripts.map(p=>({...p,id:p.paperId,pages:p.pdfPages,featured:true}));
 const presentation=JSON.parse(read('drafts/catalog-357/overview/presentation.json'));
 validateInventory(catalog,papers,presentation);
 for(const lang of ['ja','en']){
  const overview=read(`drafts/catalog-357/overview/article.${lang}.md`);
  assert.equal(overview.split('CATALOGINVENTORYTOKEN').length,2);
  const table=renderCatalogInventory(catalog,papers,presentation,lang,'./');
  assert.equal((table.match(/<tr id="paper-/g)||[]).length,catalog.paperIds.length);
  assert.equal((table.match(/scope="col"/g)||[]).length,4);
  const rendered=await renderDraft(overview,{lang,paperId:'overview',catalogId:'357',base:'./',diagramSource:()=>'<svg/>'});
  const integrated=rendered.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,()=>table);
  assert.ok(!integrated.includes('CATALOGINVENTORYTOKEN'),'Inventory token must be a standalone section block, matching CatalogMarkdownOverview.astro');
 }
 return {rows:catalog.paperIds.length,columns:4,languages:['ja','en']};
});
await record('connection record bilingual article anchors',async()=>{
 const connections=JSON.parse(read('drafts/catalog-357/overview/connections.json')).connections;
 const rendered={};let count=0;
 for(const connection of connections)for(const [lang,url] of Object.entries(connection.articleLinks??{})){
  const match=url.match(/^\/(ja|en)\/papers\/([^/]+)\/#(.+)$/);assert.ok(match,`Invalid article link: ${url}`);
  const [,language,paperId,anchor]=match;assert.equal(language,lang);
  const key=`${paperId}.${lang}`;
  if(!rendered[key])rendered[key]=(await renderDraft(read(`drafts/catalog-357/${paperId}/article.${lang}.md`),{lang,paperId,catalogId:'357',base:'./',diagramSource:()=>'<svg/>'})).html;
  assert.ok(rendered[key].includes(`id="${anchor}"`),`Missing connection anchor ${connection.id}: ${url}`);count++;
 }
 return {connections:connections.length,bilingualAnchorsChecked:count};
});
const registries=findCitationRegistries('357');
if(!registries.length)results.push({name:'citation registries',status:'fail',error:'No 357 citation registries'});
for(const file of registries){
 await record(`${file}: shared text-only citation check`,()=>syncCitations({check:true,textOnly:true,registryFile:file}));
 const registry=loadCitations(file),dir=path.dirname(file);
 for(const [relative,guide] of Object.entries(registry.articleGuides??{}))for(const lang of ['ja','en'])await record(`${file}: shared guide / rendered anchors / ${relative} / ${lang}`,async()=>{
  const folder=path.join(dir,relative),source=read(`${folder}/article.${lang}.md`);
  const figures=fs.readdirSync(`${folder}/diagrams`).filter(n=>n.endsWith('.tikz')).map(n=>read(`${folder}/diagrams/${n}`)).join('\n');
  validateGuide(registry,guide,source,figures);
  const {html}=await renderDraft(source,{lang,paperId:path.basename(folder),catalogId:'357',base:'./',diagramSource:stem=>read(`${folder}/diagrams/${stem}.svg`)});
  const references=html.match(/<section id="diagram-sources"[\s\S]*?<\/section>/)?.[0];
  assert.ok(references,'Missing reference section');
  assert.equal((references.match(/<li>/g)||[]).length,guide.externalSources.length);
  assert.ok(html.indexOf('id="diagram-sources"')<html.indexOf('<figure'),'Reference guide must precede figure');
  assert.equal((html.match(/(?:証明対象|Proof target)：/g)||[]).length,guide.proofTargets.length);
  for(const anchor of Object.values(guide.statements))assert.ok(html.includes(`id="${anchor}"`),`Missing statement anchor: ${anchor}`);
  for(const item of guide.conclusionCoverage)assert.ok(html.includes(`id="${item.anchor}"`),`Missing conclusion explanation: ${item.anchor}`);
  const sources=html.slice(html.indexOf('<section id="sources"'));
  assert.ok(sources.includes('<ul>'));assert.ok((sources.match(/<li>/g)||[]).length>=guide.readingList.length);
  return {mainResults:guide.mainResults,proofTargets:guide.proofTargets,statements:guide.statements,conclusionAnchors:guide.conclusionCoverage.map(c=>c.anchor),externalSources:guide.externalSources,readingListCount:guide.readingList.length};
 });
 for(const relative of registry.diagramDirectories)await record(`${file}: local figure manifest / ${relative}`,()=>{
  const folder=path.join(dir,relative),manifest=JSON.parse(read(`${folder}/citation-build.json`));
  const stems=fs.readdirSync(folder).filter(n=>n.endsWith('.tikz')).map(n=>n.slice(0,-5));
  const expected=['render.py','preamble.tex','citations.ja.tex','citations.en.tex',...stems.flatMap(stem=>[stem+'.tikz',...['ja','en'].flatMap(lang=>[`${stem}.${lang}.tex`,`${stem}.${lang}.svg`])])].sort();
  assert.deepEqual(Object.keys(manifest).sort(),expected,'Incomplete figure manifest');
  for(const [name,hash] of Object.entries(manifest))assert.equal(createHash('sha256').update(fs.readFileSync(path.join(folder,name))).digest('hex'),hash,`Stale figure: ${name}`);
  return {inputAndOutputFilesChecked:expected.length,figureStems:stems,publicCopies:'deferred to stage 2'};
 });
}
fs.writeFileSync(`${out}/stage1-checks.json`,JSON.stringify({createdAt:new Date().toISOString(),scope:'shared validation on unregistered 357 data; no writes to source or public; mathematical adequacy not certified',results},null,2)+'\n');
console.log(JSON.stringify(results,null,2));
if(results.some(r=>r.status==='fail'))process.exitCode=1;
