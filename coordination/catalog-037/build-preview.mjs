// Isolated stage-1 review: reads shared renderers/styles, writes only this directory.
import fs from 'node:fs';import path from 'node:path';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../src/lib/catalog-inventory.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';import {TeX} from 'mathjax-full/js/input/tex.js';import {SVG} from 'mathjax-full/js/output/svg.js';import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const dir='coordination/catalog-037',out=dir+'/preview';fs.mkdirSync(out,{recursive:true});
const inv=JSON.parse(fs.readFileSync(dir+'/inventory.json'));const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(x=>fs.readFileSync(`src/styles/${x}.css`,'utf8')).join('\n');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');const reports=[];
for(const entry of [...inv.manuscripts,{paperId:'overview',title:inv.overviewTitle,draftDirectory:'drafts/catalog-037/overview'}]){
 const paperId=entry.paperId,folder=entry.draftDirectory;if(!fs.existsSync(folder+'/article.ja.md'))continue;
 for(const lang of ['ja','en']){
  if(!fs.existsSync(folder+`/article.${lang}.md`))continue;
  const md=fs.readFileSync(folder+`/article.${lang}.md`,'utf8');let rendered;
  try{rendered=await renderDraft(md,{lang,paperId,base:'/',catalogId:'037',sectionIds:paperId==='overview'?['papers','connections','sources']:undefined,diagramSource:stem=>fs.readFileSync(`${folder}/diagrams/${stem}.svg`,'utf8')});}catch(e){console.log('NOT READY',paperId,lang,e.message);continue;}
  let body=rendered.html;
  if(paperId==='overview'){
   const presentation=JSON.parse(fs.readFileSync(folder+'/presentation.json'));
   const papers=inv.manuscripts.map(p=>({id:p.paperId,title:p.title,version:p.version,pages:p.pdfPages,featured:true,sourceCommit:p.sourceCommit,path:p.sourceUrl.split('/preprints/')[1]}));
   body=body.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,renderCatalogInventory({id:'037',paperIds:papers.map(p=>p.id)},papers,presentation,lang,'/'));
  }
  body=rendered.introHtml+body;
  body=body.replaceAll(/href="\/(ja|en)\/papers\/([^/]+)\/(#[^"]*)?"/g,(_,l,id,hash='')=>`href="${id}.${l}.html${hash}"`).replaceAll(/href="\/(ja|en)\/catalog\/037\/(#[^"]*)?"/g,(_,l,hash='')=>`href="overview.${l}.html${hash}"`);
  body=body.replace(/href="\/diagrams\/catalog-037\/([^/]+)\/([^"]+)"/g,(_,id,name)=>`href="../../../drafts/catalog-037/${id}/diagrams/${name}"`);
  const en=lang==='en';const doc=mathjax.document(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(entry.title)}</title><style>${css}</style></head><body><div class="site-chrome"><header class="masthead"><a class="brand" href="overview.${lang}.html">OpenAI <em>Math Digest</em></a><nav class="language-switch" aria-label="日本語 / English"><a href="${paperId}.ja.html">日本語</a><a href="${paperId}.en.html">English</a></nav></header></div><main><article class="paper-article"><header class="family-header"><p class="eyebrow">CATALOGUE 037 · ${en?'UNPUBLISHED CONTENT PREVIEW':'未公開・内容点検用'}</p><h1>${esc(entry.title)}</h1><p>${en?'AI-generated reading guide. Check important statements and proofs against the original.':'AI生成の解説です。重要な主張・証明は原論文で確認してください。'}</p><p class="paper-subtitle">${rendered.subtitleHtml}</p><p class="lede">${rendered.ledeHtml}</p></header><nav class="contents">${rendered.headings.map(h=>`<a href="#${h.slug}">${esc(h.text)}</a>`).join('')}</nav><div class="draft-body">${body}</div></article><footer>Design adapted from Geometry Paper Digest (MIT).</footer></main></body></html>`,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true}),OutputJax:new SVG({fontCache:'none'})});doc.render();let html='<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
  const errors=[...html.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]);
  const anchors=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));const reg=folder+'/citations.json';let missing=[];
  if(fs.existsSync(reg)) {const g=JSON.parse(fs.readFileSync(reg)).articleGuides?.['.'];missing=[...Object.values(g?.statements??{}),...(g?.conclusionCoverage??[]).map(x=>x.anchor)].filter(x=>!anchors.has(x));}
  fs.writeFileSync(`${out}/${paperId}.${lang}.html`,html);reports.push({paperId,lang,mathErrors:errors,missingAnchors:missing,figures:(body.match(/class="proof-figure"/g)||[]).length,sections:rendered.headings.map(x=>x.slug)});
 }
}
fs.writeFileSync(dir+'/preview-checks.json',JSON.stringify(reports,null,2)+'\n');console.log(JSON.stringify(reports.map(x=>({paper:x.paperId,lang:x.lang,figures:x.figures,errors:x.mathErrors,missing:x.missingAnchors})),null,2));
