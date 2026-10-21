import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory,validateInventory} from '../../src/lib/catalog-inventory.mjs';
import {loadCitations} from '../../scripts/lib/citations.mjs';
import {validateGuide} from '../../scripts/lib/article-guides.mjs';
import {syncCitations,findCitationRegistries} from '../../scripts/sync-citations.mjs';
const out='coordination/catalog-305';
const results=[];
const record=async(name,fn)=>{try{results.push({name,status:'pass',details:await fn()});}catch(e){results.push({name,status:'fail',error:String(e)});}};
const read=p=>fs.readFileSync(p,'utf8');
await record('official inventory and four-column table',async()=>{
 const inventory=JSON.parse(read('coordination/catalog-305/inventory.json'));
 const catalog={id:'305',paperIds:inventory.manuscripts.map(p=>p.paperId)};
 const papers=inventory.manuscripts.map(p=>({...p,id:p.paperId,pages:p.pdfPages,featured:true}));
 const presentation=JSON.parse(read('drafts/catalog-305/overview/presentation.json'));
 validateInventory(catalog,papers,presentation);
 for(const lang of ['ja','en']){
  const overview=read(`drafts/catalog-305/overview/article.${lang}.md`);
  assert.equal(overview.split('CATALOGINVENTORYTOKEN').length,2);
  const table=renderCatalogInventory(catalog,papers,presentation,lang,'./');
  assert.equal((table.match(/<tr id="paper-/g)||[]).length,catalog.paperIds.length);
  assert.equal((table.match(/scope="col"/g)||[]).length,4);
  const rendered=await renderDraft(overview,{lang,paperId:'overview',catalogId:'305',base:'./',diagramSource:()=>'<svg/>'});
  const integrated=rendered.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,()=>table);
  assert.ok(!integrated.includes('CATALOGINVENTORYTOKEN'),'Inventory token must be a standalone section block, matching CatalogMarkdownOverview.astro');
 }
 return {rows:catalog.paperIds.length,columns:4,languages:['ja','en']};
});
await record('connection record bilingual article anchors',async()=>{
 const connections=JSON.parse(read('drafts/catalog-305/overview/connections.json')).connections;
 const rendered={};let count=0;
 for(const connection of connections)for(const [lang,links] of Object.entries(connection.articleLinks??{}))for(const url of typeof links==='string'?[links]:Object.values(links)){
  const match=url.match(/^\/(ja|en)\/papers\/([^/]+)\/(?:#(.+))?$/);assert.ok(match,`Invalid article link: ${url}`);
  const [,language,paperId,anchor]=match;assert.equal(language,lang);
  const key=`${paperId}.${lang}`;
  if(!rendered[key])rendered[key]=(await renderDraft(read(`drafts/catalog-305/${paperId}/article.${lang}.md`),{lang,paperId,catalogId:'305',base:'./',diagramSource:()=>'<svg/>'})).html;
  if(anchor)assert.ok(rendered[key].includes(`id="${anchor}"`),`Missing connection anchor ${connection.id}: ${url}`);count++;
 }
 return {connections:connections.length,bilingualAnchorsChecked:count};
});
const registries=findCitationRegistries('305');
if(!registries.length)results.push({name:'citation registries',status:'fail',error:'No 357 citation registries'});
for(const file of registries){
 await record(`${file}: shared text-only citation check`,()=>syncCitations({check:true,textOnly:true,registryFile:file}));
 const registry=loadCitations(file),dir=path.dirname(file);
 for(const [relative,guide] of Object.entries(registry.articleGuides??{}))for(const lang of ['ja','en'])await record(`${file}: shared guide / rendered anchors / ${relative} / ${lang}`,async()=>{
  const folder=path.join(dir,relative),source=read(`${folder}/article.${lang}.md`);
  const figures=fs.readdirSync(`${folder}/diagrams`).filter(n=>n.endsWith('.tikz')).map(n=>read(`${folder}/diagrams/${n}`)).join('\n');
  validateGuide(registry,guide,source,figures);
  const {html}=await renderDraft(source,{lang,paperId:path.basename(folder),catalogId:'305',base:'./',diagramSource:stem=>read(`${folder}/diagrams/${stem}.svg`)});
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
await record('bilingual previews and local links',()=>{
 const reports=JSON.parse(read(`${out}/preview-checks.json`));assert.equal(reports.length,8,'Expected three articles plus overview in both languages');
 const anchors=new Map();let links=0;
 const idsFor=file=>{if(!anchors.has(file))anchors.set(file,new Set([...read(file).matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])));return anchors.get(file);};
 for(const report of reports){
  assert.deepEqual(report.mathErrors,[]);assert.deepEqual(report.missingAnchors,[]);
  const file=path.resolve(out,'preview',`${report.paperId}.${report.lang}.html`),html=read(file);
  assert.equal(createHash('sha256').update(html).digest('hex'),report.htmlSha256,'Preview changed after generation');
  const source=read(`drafts/catalog-305/${report.paperId}/article.${report.lang}.md`);
  assert.equal(createHash('sha256').update(source).digest('hex'),report.sourceMarkdownSha256,'Preview is stale');
  for(const [,href] of html.matchAll(/\bhref="([^"]+)"/g)){
   if(/^(https?:|mailto:|data:)/.test(href))continue;
   const [pathname,fragment]=href.split('#'),target=pathname?path.resolve(path.dirname(file),pathname):file;links++;
   assert.ok(fs.existsSync(target),`Missing local target: ${href}`);
   if(fragment&&target.endsWith('.html'))assert.ok(idsFor(target).has(decodeURIComponent(fragment)),`Missing local anchor: ${href}`);
  }
 }
 return {pages:reports.length,localLinksChecked:links,mathErrors:0,missingAnchors:0};
});
await record('shared source/public/scripts unchanged',()=>{
 const baseline=JSON.parse(read(`${out}/SHARED_FILES_BASELINE.json`));let count=0;
 for(const [file,sha] of Object.entries(baseline.files)){assert.equal(createHash('sha256').update(fs.readFileSync(file)).digest('hex'),sha,`Shared file changed: ${file}`);count++;}
 return {sharedFilesUnchanged:count,baseline:'SHARED_FILES_BASELINE.json'};
});
fs.writeFileSync(`${out}/stage1-checks.json`,JSON.stringify({createdAt:new Date().toISOString(),scope:'shared validation on unregistered 305 data; no writes to source or public; mathematical adequacy not certified',results},null,2)+'\n');
console.log(JSON.stringify(results,null,2));
if(results.some(r=>r.status==='fail'))process.exitCode=1;
