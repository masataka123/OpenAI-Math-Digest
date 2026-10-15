import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../../src/lib/catalog-inventory.mjs';
import {loadCitations} from '../../../scripts/lib/citations.mjs';
import {validateGuide} from '../../../scripts/lib/article-guides.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'../../..'),out=path.join(here,'preview');fs.mkdirSync(out,{recursive:true});
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),url=f=>pathToFileURL(path.join(root,f)).href;
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const typeset=html=>{const d=mathjax.document(html,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true}),OutputJax:new SVG({fontCache:'local'})});d.render();return adaptor.outerHTML(adaptor.root(d.document));};
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(n=>read(`src/styles/${n}.css`)).join('\n');
const dir='drafts/catalog-187/snaky-in-21-maker-moves',o='drafts/catalog-187/overview',id='snaky-in-21-maker-moves';
const inventory=JSON.parse(read('coordination/catalog-187/inventory.json')),catalog={id:'187',paperIds:[id]},papers=inventory.manuscripts.map(m=>({id:m.paperId,title:m.title,version:m.version,pages:m.pdfPages,featured:true,path:m.sourceUrl.split('/preprints/')[1],sourceCommit:inventory.sourceCommit}));
const registry=loadCitations(path.join(root,dir,'citations.json')),report={};
for(const lang of ['ja','en'])for(const kind of ['article','overview']){
 const source=read(`${kind==='article'?dir:o}/article.${lang}.md`),en=lang==='en';
 if(kind==='article')validateGuide(registry,registry.articleGuides['.'],source,fs.readdirSync(path.join(root,dir,'diagrams')).filter(n=>n.endsWith('.tikz')).map(n=>read(`${dir}/diagrams/${n}`)).join('\n'));
 const article=await renderDraft(source,{lang,paperId:kind==='article'?id:'overview',catalogId:'187',base:'/',sectionIds:kind==='overview'?['papers','connections','sources']:[],diagramSource:stem=>read(`${dir}/diagrams/${stem}.svg`)});
 if(kind==='overview'){
  article.html=article.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,renderCatalogInventory(catalog,papers,JSON.parse(read(`${o}/presentation.json`)),lang,'/'));
  if(article.html.includes('CATALOGINVENTORYTOKEN'))throw Error('Inventory block not standalone');
 }
 const other=lang==='ja'?'en':'ja';
 let html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Astra new draft · ${kind} ${lang}</title><style>${css}</style></head><body><div class="site-chrome"><header class="masthead"><a class="brand" href="overview.${lang}.html">OpenAI <em>Math Digest</em></a><nav class="main-nav">187 · Combinatorics</nav><nav class="language-switch"><a href="${kind}.ja.html" class="${lang==='ja'?'active':''}">日本語</a><a href="${kind}.en.html" class="${en?'active':''}">English</a></nav></header></div><div class="ai-notice"><span class="ai-label">${en?'AI-GENERATED GUIDE':'AI生成の解説'}</span><p>${en?'Check important claims and proofs against the original papers. Stage 1 preview.':'重要な主張・証明は原論文でご確認ください。第1段階の確認用表示。'}</p></div><main id="content"><aside class="reading-guide"><img src="${url('public/images/guide-pixel.png')}" width="428" height="224" alt="${en?'Green and white reading guide':'白と緑の案内役'}"><div class="guide-speech"><p>${en?'Follow the proof diagrams, their explanations, and the source checks.':'証明図と直後の説明から、原典と確認範囲をたどれます。'}</p></div></aside><article class="paper-article ${kind==='overview'?'catalog-page catalog-markdown-overview':'draft-article'}"><header class="family-header"><p class="eyebrow">CATALOGUE 187${kind==='article'?' · PAPER 01 / 1':''}</p><h1 lang="en">Snaky in 21 Maker moves</h1>${article.subtitleHtml?`<p class="paper-subtitle">${article.subtitleHtml}</p>`:''}<p class="lede">${article.ledeHtml}</p>${kind==='article'?'<p class="paper-byline">OpenAI · September 25, 2026 · 84 pages</p>':''}</header><nav class="contents">${article.headings.map(h=>`<a href="#${h.slug}">${h.text}</a>`).join('')}</nav><div class="article-prose draft-intro">${article.introHtml}</div><div class="draft-body">${article.html}</div></article></main><footer class="footer">Design adapted from Geometry Paper Digest (MIT). Unpublished stage 1 draft.</footer></body></html>`;
 html=html.replace(/href="\/(ja|en)\/papers\/snaky-in-21-maker-moves\/(#[^"]*)?"/g,(_,l,hash='')=>`href="article.${l}.html${hash}"`).replace(/href="\/diagrams\/catalog-187\/snaky-in-21-maker-moves\/([^"]+)"/g,(_,f)=>`href="${url(`${dir}/diagrams/${f}`)}"`);
 html=typeset(html);fs.writeFileSync(path.join(out,`${kind}.${lang}.html`),html);
 report[`${kind}.${lang}`]={headings:article.headings.map(h=>h.slug),figures:(html.match(/class="proof-figure"/g)||[]).length,mathErrors:(html.match(/data-mjx-error/g)||[]).length,displayEquations:(source.match(/\$\$[\s\S]*?\$\$/g)||[]).length};
 if(kind==='article')for(const c of registry.articleGuides['.'].conclusionCoverage)if(!html.includes(`id="${c.anchor}"`))throw Error('Missing '+c.anchor);
}
// Fresh visual references from the existing standard pages, used for presentation only.
for(const lang of ['ja','en'])for(const [name,route] of [['schnell','papers/schnell-fiber-spaces'],['orbifold','papers/orbifold-logarithmic-iitaka'],['catalog034','catalog/034']]){
 let html=read(`dist/${lang}/${route}/index.html`).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 html=html.replace(/<link rel="stylesheet" href="\/OpenAI-Math-Digest\/([^"]+)"[^>]*>/g,(_,f)=>`<style>${read('dist/'+f)}</style>`).replace(/(src|href)="\/OpenAI-Math-Digest\/(images|diagrams)\/([^"]+)"/g,(_,attr,folder,f)=>`${attr}="${url('dist/'+folder+'/'+f)}"`);
 fs.writeFileSync(path.join(out,`${name}.${lang}.html`),typeset(html));
}
fs.writeFileSync(path.join(here,'validation/structure.json'),JSON.stringify(report,null,2)+'\n');console.log(report);
