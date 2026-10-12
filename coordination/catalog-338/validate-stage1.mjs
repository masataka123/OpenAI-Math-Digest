// Read-only shared-renderer validation; outputs stay in catalogue-338 evidence.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../src/lib/catalog-inventory.mjs';
import {loadCitations} from '../../scripts/lib/citations.mjs';
import {validateGuide} from '../../scripts/lib/article-guides.mjs';
import {syncCitations} from '../../scripts/sync-citations.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const root=process.cwd(),d='drafts/catalog-338/yau-uniformization',out='coordination/catalog-338/evidence/preview';
fs.mkdirSync(out,{recursive:true});
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const inv=json('coordination/catalog-338/inventory.json'),p=inv.manuscripts[0];
const registry=loadCitations(d+'/citations.json'),guide=registry.articleGuides['.'];
const results={scope:'Stage 1 only; shared renderer and CSS, no site registration/public assets/PDF generation.',citationChecks:[],articles:[],catalogues:[],diagramHashes:0,mathErrors:[]};
for(const file of [d+'/citations.json','drafts/catalog-338/overview/citations.json']) results.citationChecks.push(syncCitations({check:true,textOnly:true,registryFile:file}));
const manifest=json(d+'/diagrams/citation-build.json');
for(const [name,hash] of Object.entries(manifest)){assert.equal(createHash('sha256').update(fs.readFileSync(d+'/diagrams/'+name)).digest('hex'),hash);results.diagramHashes++;}
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(n=>read('src/styles/'+n+'.css')).join('\n');
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
function typeset(html){const doc=mathjax.document(html,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true}),OutputJax:new SVG({fontCache:'none'})});doc.render();const text='<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));if(/<g[^>]*data-mml-node="merror"/.test(text)){fs.writeFileSync(out+'/math-error.html',text);console.log([...text.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]));}assert.ok(!/<g[^>]*data-mml-node="merror"/.test(text),'MathJax error');return text;}
function page(body,lang,title){return typeset(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${css}</style></head><body><main><article class="paper-article"><header class="family-header"><p class="eyebrow">CATALOGUE 338 · STAGE 1 PREVIEW</p><h1>${title}</h1></header><div class="draft-body">${body}</div></article></main></body></html>`);}
const mathLists=[],citeLists=[];
for(const lang of ['ja','en']){
 const source=read(d+`/article.${lang}.md`),figs=fs.readdirSync(d+'/diagrams').filter(x=>x.endsWith('.tikz')).map(n=>read(d+'/diagrams/'+n)).join('\n');
 validateGuide(registry,guide,source,figs);
 const r=await renderDraft(source,{lang,paperId:p.paperId,catalogId:'338',base:'/stage1/',diagramSource:stem=>read(d+'/diagrams/'+stem+'.svg')});
 const ids=[...r.html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'Duplicate HTML ids');
 const broken=[...r.html.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]).filter(id=>!ids.includes(id));assert.deepEqual(broken,[]);
 for(const a of [...Object.values(guide.statements),...guide.conclusionCoverage.map(c=>c.anchor)])assert.ok(ids.includes(a),'Missing '+a);
 const html=page(`<p class="paper-subtitle">${r.subtitleHtml}</p><p class="lede">${r.ledeHtml}</p>${r.html}`,lang,p.title);fs.writeFileSync(`${out}/article.${lang}.html`,html);
 mathLists.push([...source.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\\)\$([^$\n]+?)\$/g)].map(m=>(m[1]??m[2]).replace(/\s+/g,'').replace(/[.,]$/,'')));
 citeLists.push([...source.matchAll(/<!-- cite:([^>]+) -->/g)].map(m=>m[1]));
 results.articles.push({lang,headings:r.headings.map(h=>h.slug),statements:Object.values(guide.statements),proofTargets:guide.proofTargets.length,proofFigures:(r.html.match(/<figure /g)||[]).length,sourceLines:(r.html.match(/class="source-line"/g)||[]).length,mathExpressions:mathLists.at(-1).length,brokenAnchors:broken});
 const overview=read(`drafts/catalog-338/overview/article.${lang}.md`);assert.equal(overview.split('CATALOGINVENTORYTOKEN').length,2);
 const catalog={id:'338',paperIds:[p.paperId]},papers=[{id:p.paperId,title:p.title,version:p.version,pages:p.pdfPages,featured:true,sourceCommit:p.sourceCommit,path:p.sourceUrl.split('/preprints/')[1]}];
 const table=renderCatalogInventory(catalog,papers,json('drafts/catalog-338/overview/presentation.json'),lang,'/stage1/');
 assert.equal((table.match(/scope="col"/g)||[]).length,4);assert.equal((table.match(/<tr id="paper-/g)||[]).length,1);
 const or=await renderDraft(overview,{lang,paperId:'overview',catalogId:'338',base:'/stage1/',diagramSource:()=>null,sectionIds:['papers','guide','sources']});
 const body=or.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,table);assert.ok(!body.includes('CATALOGINVENTORYTOKEN'));
 fs.writeFileSync(`${out}/overview.${lang}.html`,page(`<p class="lede">${or.ledeHtml}</p>${body}`,lang,lang==='ja'?inv.titleJa:inv.overviewTitle));results.catalogues.push({lang,columns:4,rows:1});
}
results.bilingualCitationOrderEqual=JSON.stringify(citeLists[0])===JSON.stringify(citeLists[1]);assert.ok(results.bilingualCitationOrderEqual);
mathLists.forEach(list=>list.sort());
results.bilingualMathComparison='Normalized multiset equality; grammatical order may differ.';
results.bilingualMathEqual=JSON.stringify(mathLists[0])===JSON.stringify(mathLists[1]);
if(!results.bilingualMathEqual){results.mathDifferences=[];for(let i=0;i<Math.max(...mathLists.map(a=>a.length));i++)if(mathLists[0][i]!==mathLists[1][i])results.mathDifferences.push({i,ja:mathLists[0][i],en:mathLists[1][i]});}
// Reuse built reference pages only for comparison; do not build or edit them.
for(const lang of ['ja','en'])for(const [name,route] of [['034','catalog/034'],['schnell','papers/schnell-fiber-spaces'],['orbifold','papers/orbifold-logarithmic-iitaka']]){
 const file=`dist/${lang}/${route}/index.html`;if(!fs.existsSync(file))continue;
 let html=read(file).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 html=html.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g,'').replace('</head>',`<style>${css}</style></head>`);
 fs.writeFileSync(`${out}/reference-${name}.${lang}.html`,typeset(html));
}
fs.writeFileSync('coordination/catalog-338/evidence/stage1-validation.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify(results,null,2));assert.ok(results.bilingualMathEqual,'Review bilingual math differences');
