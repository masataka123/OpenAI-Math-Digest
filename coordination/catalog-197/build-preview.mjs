// Stage 1: isolated rendering; no site registration or public assets are changed.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
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

const hq='coordination/catalog-197', out=`${hq}/preview`;
fs.mkdirSync(out,{recursive:true});
const inventory=JSON.parse(fs.readFileSync(`${hq}/inventory.json`));
const adaptor=liteAdaptor(); RegisterHTMLHandler(adaptor);
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const styles=['digest','atlas','home','typography','paper','draft-article','catalog'];
const css=styles.map(s=>fs.readFileSync(`src/styles/${s}.css`,'utf8')).join('\n');
function typeset(html){
 const doc=mathjax.document(html,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true}),OutputJax:new SVG({fontCache:'none'})});
 doc.render();return '<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
}
const report=[];
const entries=[...inventory.manuscripts,{paperId:'overview',title:inventory.overviewTitle,draftDirectory:'drafts/catalog-197/overview'}];
for(const entry of entries)for(const lang of ['ja','en']){
 const folder=entry.draftDirectory, file=`${folder}/article.${lang}.md`;
 if(!fs.existsSync(file)){report.push({paperId:entry.paperId,lang,pending:'article'});continue;}
 const source=fs.readFileSync(file,'utf8');
 const overview=entry.paperId==='overview';
 let rendered;
 const registration=overview&&fs.existsSync(`${folder}/site-registration.json`)?JSON.parse(fs.readFileSync(`${folder}/site-registration.json`)):{};
 try{rendered=await renderDraft(source,{lang,paperId:entry.paperId,catalogId:'197',base:'/',sectionIds:registration.overviewSectionIds??[],diagramSource:stem=>fs.readFileSync(`${folder}/diagrams/${stem}.svg`,'utf8')});}
 catch(e){report.push({paperId:entry.paperId,lang,pending:e.message});continue;}
 let body=rendered.introHtml+rendered.html;
 if(overview){
  const presentation=JSON.parse(fs.readFileSync(`${folder}/presentation.json`));
  const papers=inventory.manuscripts.map(p=>({id:p.paperId,title:p.title,version:p.version,pages:p.pdfPages,featured:true,sourceCommit:p.sourceCommit,path:p.path.replace(/^preprints\//,'')}));
  body=body.replace('<p>CATALOGINVENTORYTOKEN</p>',renderCatalogInventory({id:'197',paperIds:papers.map(p=>p.id)},papers,presentation,lang,'/'));
 }
 body=body.replace(/href="\/(ja|en)\/papers\/([^/]+)\/(#[^"]*)?"/g,(_,l,p,a='')=>`href="${p}.${l}.html${a}"`)
  .replace(/href="\/(ja|en)\/catalog\/197\/(#[^"]*)?"/g,(_,l,a='')=>`href="overview.${l}.html${a}"`)
  .replace(/href="\/diagrams\/catalog-197\/([^/]+)\/([^"]+)"/g,(_,p,f)=>`href="/drafts/catalog-197/${p}/diagrams/${f}"`);
 const en=lang==='en';
 const html=typeset(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(entry.title)}</title><style>${css}</style></head><body><div class="site-chrome"><header class="masthead"><a class="brand" href="overview.${lang}.html">OpenAI <em>Math Digest</em></a><nav class="language-switch" aria-label="日本語 / English"><a href="${entry.paperId}.ja.html">日本語</a><a href="${entry.paperId}.en.html">English</a></nav></header></div><main><article class="paper-article"><header class="family-header"><p class="eyebrow">CATALOGUE 197 · ${en?'UNPUBLISHED CONTENT PREVIEW':'未公開・内容点検用'}</p><h1 lang="en">${esc(entry.title)}</h1><p>${en?'AI-generated reading guide. Verify important statements and proofs in the originals.':'AI生成の解説です。重要な主張・証明は原論文で確認してください。'}</p><p class="paper-subtitle">${rendered.subtitleHtml}</p><p class="lede">${rendered.ledeHtml}</p></header><nav class="contents">${rendered.headings.map(h=>`<a href="#${h.slug}">${esc(h.text)}</a>`).join('')}</nav><div class="draft-body">${body}</div></article><footer>Design adapted from Geometry Paper Digest (MIT).</footer></main></body></html>`);
 const idList=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 const anchors=new Set(idList),seen=new Set();
 const duplicateIds=[...new Set(idList.filter(id=>{if(seen.has(id))return true;seen.add(id);return false;}))];
 let guideErrors=[], missingAnchors=[];
 const registryFile=`${folder}/citations.json`;
 if(fs.existsSync(registryFile)){
  const r=loadCitations(registryFile), g=r.articleGuides?.['.'];
  if(g){try{validateGuide(r,g,source);}catch(e){guideErrors.push(e.message);}
   missingAnchors=[...Object.values(g.statements??{}),...(g.conclusionCoverage??[]).map(c=>c.anchor)].filter(id=>!anchors.has(id));}
 }
 const mathErrors=[...html.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]);
 fs.writeFileSync(`${out}/${entry.paperId}.${lang}.html`,html);
 report.push({paperId:entry.paperId,lang,figures:(body.match(/class="proof-figure"/g)||[]).length,guideErrors,missingAnchors,mathErrors,duplicateIds,sections:rendered.headings.map(h=>h.slug),fileSha256:createHash('sha256').update(html).digest('hex')});
}
// The designated 033/034 references are existing built pages. Render their math
// locally, preserve their own CSS and markup, and record the exact snapshots.
const refs=[['schnell','papers/schnell-fiber-spaces'],['orbifold','papers/orbifold-logarithmic-iitaka'],['catalog034','catalog/034']];
const referenceSnapshots=[];
for(const [label,route] of refs)for(const lang of ['ja','en']){
 const file=`dist/${lang}/${route}/index.html`;
 const original=fs.readFileSync(file,'utf8');
 const cleaned=original.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 fs.writeFileSync(`${out}/reference-${label}.${lang}.html`,typeset(cleaned));
 referenceSnapshots.push({label,lang,source:file,sha256:createHash('sha256').update(original).digest('hex'),purpose:'designated format reference; no mathematical content reused'});
}
fs.writeFileSync(`${hq}/preview-checks.json`,JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(`${hq}/reference-snapshots.json`,JSON.stringify(referenceSnapshots,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
