// Stage 1 local preview: reuse common renderers and CSS without site registration.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../src/lib/catalog-inventory.mjs';
import {loadCitations} from '../../scripts/lib/citations.mjs';
import {validateGuide} from '../../scripts/lib/article-guides.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'../..'),out=path.join(here,'preview');
fs.mkdirSync(out,{recursive:true});fs.mkdirSync(path.join(here,'validation'),{recursive:true});
const read=f=>fs.readFileSync(path.join(root,f),'utf8'),url=f=>pathToFileURL(path.join(root,f)).href;
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const typeset=html=>{const d=mathjax.document(html,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true}),OutputJax:new SVG({fontCache:'local'})});d.render();return adaptor.outerHTML(adaptor.root(d.document));};
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(n=>read(`src/styles/${n}.css`)).join('\n');
const inventory=JSON.parse(read('coordination/catalog-340/inventory.json'));
const catalog={id:'340',paperIds:inventory.manuscripts.map(m=>m.paperId)};
const papers=inventory.manuscripts.map(m=>({id:m.paperId,title:m.title,version:m.version,pages:m.pdfPages,featured:true,path:m.sourceUrl.split('/preprints/')[1],sourceCommit:inventory.sourceCommit}));
const report={};
for(const lang of ['ja','en'])for(const id of (process.argv.includes('--references-only')?[]:process.argv.find(a=>a.startsWith('--paper='))?[process.argv.find(a=>a.startsWith('--paper=')).split('=')[1]]:[...catalog.paperIds,'overview'])){
 const overview=id==='overview',dir=`drafts/catalog-340/${id}`,source=read(`${dir}/article.${lang}.md`),en=lang==='en';
 let registry;
 if(!overview){registry=loadCitations(path.join(root,dir,'citations.json'));validateGuide(registry,registry.articleGuides['.'],source,fs.readdirSync(path.join(root,dir,'diagrams')).filter(n=>n.endsWith('.tikz')).map(n=>read(`${dir}/diagrams/${n}`)).join('\n'));}
 const article=await renderDraft(source,{lang,paperId:id,catalogId:'340',base:'/',sectionIds:overview?['papers','sources']:[],diagramSource:stem=>read(`${dir}/diagrams/${stem}.svg`)});
 if(overview){article.html=article.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,renderCatalogInventory(catalog,papers,JSON.parse(read(`${dir}/presentation.json`)),lang,'/'));if(article.html.includes('CATALOGINVENTORYTOKEN'))throw Error('Inventory token not replaced');}
 const m=inventory.manuscripts.find(m=>m.paperId===id),title=overview?(en?inventory.overviewTitle:inventory.titleJa):m.title;
 let html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${css}</style></head><body><div class="site-chrome"><header class="masthead"><a class="brand" href="overview.${lang}.html">OpenAI <em>Math Digest</em></a><nav class="main-nav">340 · Differential geometry</nav><nav class="language-switch"><a href="${id}.ja.html" class="${en?'':'active'}">日本語</a><a href="${id}.en.html" class="${en?'active':''}">English</a></nav></header></div><div class="ai-notice"><span class="ai-label">${en?'AI-GENERATED GUIDE':'AI生成の解説'}</span><p>${en?'Check important claims and proofs against the original papers. Stage 1 preview.':'重要な主張・証明は原論文でご確認ください。第1段階の確認用表示。'}</p></div><main id="content"><aside class="reading-guide"><img src="${url('public/images/guide-pixel.png')}" width="428" height="224" alt="${en?'Green and white reading guide':'白と緑の案内役'}"><div class="guide-speech"><p>${en?'Follow the proof diagrams and the recorded scope of source checks.':'証明図と説明から、原典と確認範囲をたどれます。'}</p></div></aside><article class="paper-article ${overview?'catalog-page catalog-markdown-overview':'draft-article'}"><header class="family-header"><p class="eyebrow">CATALOGUE 340${overview?'':` · PAPER ${String(m.order).padStart(2,'0')} / ${papers.length}`}</p><h1>${title}</h1>${article.subtitleHtml?`<p class="paper-subtitle">${article.subtitleHtml}</p>`:''}<p class="lede">${article.ledeHtml}</p>${overview?'':`<p class="paper-byline">OpenAI · ${m.version} · ${m.pdfPages} ${en?'pages':'ページ'}</p>`}</header><nav class="contents">${article.headings.map(h=>`<a href="#${h.slug}">${h.text}</a>`).join('')}</nav><div class="article-prose draft-intro">${article.introHtml}</div><div class="draft-body">${article.html}</div></article></main><footer class="footer">Design adapted from Geometry Paper Digest (MIT). Unpublished stage 1 preview.</footer></body></html>`;
 html=html.replace(/href="\/(ja|en)\/papers\/([^/]+)\/(#[^"]*)?"/g,(_,l,p,hash='')=>catalog.paperIds.includes(p)?`href="${p}.${l}.html${hash}"`:`href="/${l}/papers/${p}/${hash}"`).replace(/href="\/(ja|en)\/catalog\/340\/(#[^"]*)?"/g,(_,l,h='')=>`href="overview.${l}.html${h}"`).replace(/href="\/diagrams\/catalog-340\/([^/]+)\/([^"]+)"/g,(_,p,f)=>`href="${url(`drafts/catalog-340/${p}/diagrams/${f}`)}"`);
 html=typeset(html);fs.writeFileSync(path.join(out,`${id}.${lang}.html`),html);
 report[`${id}.${lang}`]={markdownSha256:createHash('sha256').update(source).digest('hex'),htmlSha256:createHash('sha256').update(html).digest('hex'),diagramSha256:Object.fromEntries(fs.existsSync(path.join(root,dir,'diagrams'))?fs.readdirSync(path.join(root,dir,'diagrams')).filter(f=>f.endsWith('.'+lang+'.svg')).map(f=>[f,createHash('sha256').update(fs.readFileSync(path.join(root,dir,'diagrams',f))).digest('hex')]):[]),headings:article.headings.map(h=>h.slug),figures:(html.match(/class="proof-figure"/g)||[]).length,mathErrors:(html.match(/data-mjx-error/g)||[]).length};
 if(!overview)for(const c of registry.articleGuides['.'].conclusionCoverage)if(!html.includes(`id="${c.anchor}"`))throw Error('Missing conclusion anchor '+c.anchor);
}
const referenceManifest=[];
for(const lang of ['ja','en'])for(const [name,route] of [['schnell','papers/schnell-fiber-spaces'],['orbifold','papers/orbifold-logarithmic-iitaka'],['catalog034','catalog/034']]){
 const referenceSource=`dist/${lang}/${route}/index.html`;
 const referenceOriginal=read(referenceSource);referenceManifest.push({name,lang,source:referenceSource,sha256:createHash('sha256').update(referenceOriginal).digest('hex'),use:'Presentation example only; not mathematical production evidence'});
 let html=referenceOriginal.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 html=html.replace(/<link rel="stylesheet" href="\/OpenAI-Math-Digest\/([^"]+)"[^>]*>/g,(_,f)=>`<style>${read('dist/'+f)}</style>`).replace(/(src|href)="\/OpenAI-Math-Digest\/(images|diagrams)\/([^"]+)"/g,(_,attr,folder,f)=>`${attr}="${url('dist/'+folder+'/'+f)}"`);
 fs.writeFileSync(path.join(out,`${name}.${lang}.html`),typeset(html));
}
fs.writeFileSync(path.join(here,'validation/reference-manifest.json'),JSON.stringify(referenceManifest,null,2)+'\n');
fs.writeFileSync(path.join(here,'validation/structure.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
