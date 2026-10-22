// Stage 1 only: shared rendering and styles, without site registration or public assets.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../src/lib/catalog-inventory.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';

const dir='coordination/catalog-109',out=dir+'/validation/preview';
fs.mkdirSync(out,{recursive:true});
const inventory=JSON.parse(fs.readFileSync(dir+'/inventory.json'));
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(x=>fs.readFileSync(`src/styles/${x}.css`,'utf8')).join('\n');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
function typeset(source){
 const doc=mathjax.document(source,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$'],['\\(','\\)']],displayMath:[['$$','$$'],['\\[','\\]']],processEscapes:true}),OutputJax:new SVG({fontCache:'none'})});
 doc.render();return '<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
}
const reports=[];
for(const entry of [...inventory.manuscripts,{paperId:'overview',title:inventory.overviewTitle,draftDirectory:'drafts/catalog-109/overview'}])for(const lang of ['ja','en']){
 const id=entry.paperId,folder=entry.draftDirectory,md=fs.readFileSync(`${folder}/article.${lang}.md`,'utf8');
 const headings=[...md.matchAll(/^## (.+)$/gm)].map(m=>m[1]);
 const sectionIds=id==='overview'?headings.map((h,i)=>i===0?'papers':/原典|確認範囲|sources|checking/i.test(h)?'sources':'connections'):undefined;
 const rendered=await renderDraft(md,{lang,paperId:id,base:'/',catalogId:'109',sectionIds,diagramSource:stem=>fs.readFileSync(`${folder}/diagrams/${stem}.svg`,'utf8')});
 let body=rendered.introHtml+rendered.html;
 if(id==='overview'){
  const papers=inventory.manuscripts.map(p=>({id:p.paperId,title:p.title,version:p.version,pages:p.pdfPages,featured:true,sourceCommit:p.sourceCommit,path:p.sourceUrl.split('/preprints/')[1]}));
  const table=renderCatalogInventory({id:'109',paperIds:papers.map(p=>p.id)},papers,JSON.parse(fs.readFileSync(folder+'/presentation.json')),lang,'/');
  body=body.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,table).replace(/<p>CATALOGINVENTORYTOKEN<\/p>/,table);
 }
 body=body.replace(/href="\/(ja|en)\/papers\/([^/]+)\/(#[^"]*)?"/g,(_,l,p,h='')=>`href="${p}.${l}.html${h}"`).replace(/href="\/(ja|en)\/catalog\/109\/(#[^"]*)?"/g,(_,l,h='')=>`href="overview.${l}.html${h}"`).replace(/href="\/diagrams\/catalog-109\/([^/]+)\/([^"]+)"/g,(_,p,n)=>`href="../../../../drafts/catalog-109/${p}/diagrams/${n}"`);
 const html=typeset(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(entry.title)}</title><style>${css}</style></head><body><div class="site-chrome"><header class="masthead"><a class="brand" href="overview.${lang}.html">OpenAI <em>Math Digest</em></a><nav class="language-switch"><a href="${id}.ja.html">日本語</a><a href="${id}.en.html">English</a></nav></header></div><main><article class="paper-article${id==='overview'?' catalog-page catalog-markdown-overview':''}"><header class="family-header"><p class="eyebrow">CATALOGUE 109 · ${lang==='ja'?'第1段階・未公開プレビュー':'STAGE 1 · UNPUBLISHED PREVIEW'}</p><h1>${esc(entry.title)}</h1><p class="ai-notice">${lang==='ja'?'AI生成の解説です。誤りや不正確な説明が含まれる可能性があります。重要な主張・証明は原論文で確認してください。':'AI-generated guide. It may contain errors or inaccuracies. Check important statements and proofs against the original paper.'}</p><p class="paper-subtitle">${rendered.subtitleHtml}</p><p class="lede">${rendered.ledeHtml}</p></header><nav class="contents">${rendered.headings.map(h=>`<a href="#${h.slug}">${esc(h.text)}</a>`).join('')}</nav><div class="draft-body">${body}</div></article><footer>Design adapted from Geometry Paper Digest (MIT).</footer></main></body></html>`);
 fs.writeFileSync(`${out}/${id}.${lang}.html`,html);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 const registry=JSON.parse(fs.readFileSync(folder+'/citations.json'));
 const guide=registry.articleGuides?.['.'];
 const required=[...Object.values(guide?.statements??{}),...(guide?.conclusionCoverage??[]).map(c=>c.anchor)];
 const missing=required.filter(a=>!ids.has(a));
 const sourceHashes=Object.fromEntries(['article.'+lang+'.md','citations.json',...(fs.existsSync(folder+'/sources.json')?['sources.json']:[])].map(f=>[folder+'/'+f,createHash('sha256').update(fs.readFileSync(folder+'/'+f)).digest('hex')]));
 reports.push({paperId:id,lang,figures:(html.match(/class="proof-figure"/g)||[]).length,sections:rendered.headings.map(h=>h.slug),mathErrors:[...html.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]),missingAnchors:missing,inventoryTokenRemaining:html.includes('CATALOGINVENTORYTOKEN'),sourceHashes,htmlSha256:createHash('sha256').update(html).digest('hex'),sharedStylesSha256:createHash('sha256').update(css).digest('hex')});
}
for(const lang of ['ja','en'])for(const [name,route] of [['034','catalog/034'],['schnell','papers/schnell-fiber-spaces'],['orbifold','papers/orbifold-logarithmic-iitaka']]){
 const source=fs.readFileSync(`dist/${lang}/${route}/index.html`,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g,'').replace('</head>',`<style>${css}</style></head>`);
 fs.writeFileSync(`${out}/reference-${name}.${lang}.html`,typeset(source));
}
fs.writeFileSync(dir+'/validation/preview-report.json',JSON.stringify(reports,null,2)+'\n');
console.log(reports);
if(reports.some(r=>r.mathErrors.length||r.missingAnchors.length||r.inventoryTokenRemaining))process.exitCode=1;
