// Local previews only. This script never changes shared components or styles.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
const root=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(root,'../../..');
const output=path.resolve(process.argv[2]??'/tmp/math-digest-033-synthesis/preview');
fs.mkdirSync(output,{recursive:true});
const require=createRequire(repo+'/package.json');
const {renderDraft}=await import(repo+'/src/lib/render-draft.mjs');
const {mathjax}=require('mathjax-full/js/mathjax.js');
const {TeX}=require('mathjax-full/js/input/tex.js');
const {SVG}=require('mathjax-full/js/output/svg.js');
const {liteAdaptor}=require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler}=require('mathjax-full/js/handlers/html.js');
const {AllPackages}=require('mathjax-full/js/input/tex/AllPackages.js');
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const data=JSON.parse(fs.readFileSync(root+'/connections.json'));
const papers=[{paperId:'overview',title:data.title},...Object.values(data.papers).filter(p=>p.catalogId==='033')];
const css=['paper.css','draft-article.css','typography.css'].map(f=>fs.readFileSync(repo+'/src/styles/'+f,'utf8')).join('\n');
const report=[];
const overviewIds=['articles','diagram-sources','main-routes','additional-routes','models','kahler','comparisons','dependencies','sources'];
for(const paper of papers)for(const lang of ['ja','en']){
 const sourceRoot=path.resolve(root,'..',paper.paperId);
 const source=fs.readFileSync(sourceRoot+'/article.'+lang+'.md','utf8');
 const article=await renderDraft(source,{lang,paperId:paper.paperId,catalogId:'033',base:'/',sectionIds:paper.paperId==='overview'?overviewIds:[],diagramSource:stem=>fs.readFileSync(sourceRoot+'/diagrams/'+stem+'.svg','utf8')});
 let body=article.html;
 // Resolve production paths to the standalone preview files.
 body=body.replace(/href="\/diagrams\/catalog-033\/[^/]+\/([^"\s]+)"/g,(_,f)=>`href="${pathToFileURL(sourceRoot+'/diagrams/'+f)}"`);
 body=body.replace(/href="\/(ja|en)\/papers\/([^/]+)\/(#[^"]*)?"/g,(_,l,id,hash='')=>`href="${id}.${l}.html${hash}"`);
 const toc=article.headings.map(h=>`<li><a href="#${h.slug}">${h.html}</a></li>`).join('');
 const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${paper.title}</title><style>:root{--ink:#183b2c;--link:#315f42;--muted:#666f60;--line:#c9cec0}*{box-sizing:border-box}body{margin:0;background:#fafbf7;color:var(--ink);font:16px/1.8 Georgia,"Hiragino Mincho ProN",serif}main{max-width:1180px;margin:auto;padding:24px}a{color:var(--link)}nav{display:flex;flex-wrap:wrap;gap:18px}table{border-collapse:collapse}td,th{padding:10px;border-bottom:1px solid #ccc;text-align:left}.digest-table-wrap{max-width:100%;overflow:auto}${css}</style></head><body><main class="paper-article"><nav><a href="overview.${lang}.html">Catalogue 033</a><a href="${paper.paperId}.ja.html">日本語</a><a href="${paper.paperId}.en.html">English</a></nav><p class="source-note">${lang==='ja'?'ローカル確認用。AI生成の概説です。重要な主張・証明は原論文で確認してください。':'Local review preview. AI-generated exposition: check important claims and proofs in the original manuscripts.'}</p><h1>${paper.title}</h1><p><strong>${article.subtitleHtml}</strong></p><p>${article.ledeHtml}</p>${article.introHtml}<ul>${toc}</ul><div class="draft-body">${body}</div></main></body></html>`;
 const doc=mathjax.document(html,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true}),OutputJax:new SVG({fontCache:'none'})});doc.render();
 const rendered='<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
 const mathErrors=[...rendered.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]);
 report.push({paperId:paper.paperId,lang,mathExpressions:(rendered.match(/<mjx-container/g)||[]).length,mathErrors,figures:(rendered.match(/class="proof-figure"/g)||[]).length,sourceLines:(rendered.match(/class="source-line"/g)||[]).length,sectionIds:article.headings.map(h=>h.slug),goals:(source.match(/\*\*(?:目標。|Goal\.)\*\*/g)||[]).length,uses:(source.match(/\*\*(?:得られた結果の使い道。|Use of the output\.)\*\*/g)||[]).length});
 fs.writeFileSync(`${output}/${paper.paperId}.${lang}.html`,rendered);
 if(mathErrors.length)throw Error(paper.paperId+' '+lang+': '+mathErrors.join('; '));
}
fs.writeFileSync(root+'/validation.json',JSON.stringify({checkedOn:'2026-10-08',scope:'Local article and catalogue rendering, not production-site integration.',renderChecks:report},null,2)+'\n');
console.log(JSON.stringify(report.map(r=>({paperId:r.paperId,lang:r.lang,math:r.mathExpressions,errors:r.mathErrors.length,figures:r.figures,goals:r.goals,uses:r.uses})),null,2));
console.log('Preview directory: '+output);
