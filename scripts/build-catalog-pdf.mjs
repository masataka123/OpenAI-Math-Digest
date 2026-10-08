import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fromHtml} from 'hast-util-from-html';
import {toHtml} from 'hast-util-to-html';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
import {catalogs, papers} from '../src/data/site.mjs';
import config from '../astro.config.mjs';
import {first,prepare,rewrite} from './pdf/prepare.mjs';

const root=process.cwd(), scratch=path.join(root,'tmp/pdfs');
const base=config.base.replace(/\/$/,'')+'/';
const args=process.argv.slice(2);
function option(name,allowed){
 const i=args.indexOf(name);if(i<0)return undefined;
 const value=args[i+1];if(!allowed.includes(value))throw Error(`${name} must be one of: ${allowed.join(', ')}`);
 return value;
}
const selectedCatalog=option('--catalog',catalogs.map(c=>c.id));
const selectedLang=option('--lang',['ja','en']);
const selected=catalogs.filter(c=>!selectedCatalog||c.id===selectedCatalog);
const languages=selectedLang?[selectedLang]:['ja','en'];
const site=config.site.replace(/\/$/,'');
const check=process.argv.includes('--check');
const css=await readFile('scripts/pdf/booklet.css','utf8');
const generator=(await Promise.all([import.meta.filename,'scripts/pdf/render.py','scripts/pdf/requirements.txt','scripts/pdf/prepare.mjs'].map(file=>readFile(file,'utf8')))).join('');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const hash=s=>createHash('sha256').update(s).digest('hex');
const adaptor=liteAdaptor(); RegisterHTMLHandler(adaptor);
await mkdir(scratch,{recursive:true}); await mkdir('public/pdf',{recursive:true});
let previous={};try{previous=JSON.parse(await readFile('src/data/pdf-editions.json','utf8'));}catch{}
// Accept the pre-multicatalog manifest once, preserving editions outside a selected run.
if(previous.ja||previous.en)previous={'034':previous};
const manifest=structuredClone(previous);
for(const c of selected) {
 manifest[c.id]??={};
for(const lang of languages) {
 const en=lang==='en';
 const items=[{id:`catalog-${c.id}`,route:`${lang}/catalog/${c.id}/`,title:en?'Catalogue synthesis':`カタログ${c.id} 総括`,label:en?`Catalogue ${c.id} · Synthesis`:`カタログ${c.id} · 総括`},
  ...c.paperIds.map((id,i)=>({id,route:`${lang}/papers/${id}/`,title:papers.find(p=>p.id===id).title,label:`${c.id} / ${String(i+1).padStart(2,'0')}`}))];
 const chunks=[];
 for(const item of items){
  const tree=fromHtml(await readFile(`dist/${item.route}index.html`,'utf8'));
  const main=first(tree,n=>n.tagName==='main');
  if(!main)throw Error('Missing main: '+item.route);
  const body=prepare(main,c.id);
  body.tagName='div';body.properties={className:['chapter-body']};
  rewrite(body,item.id,lang,{catalog:c,site,base});
  chunks.push(`<article class="chapter" id="${item.id}"><p class="chapter-label">${item.label}</p><p class="web-link"><a href="${site+base+item.route}">${en?'Read on the website':'Web版を読む'} ↗</a></p>${toHtml(body)}</article>`);
 }
 const editionCss=css.replaceAll('__CATALOG_ID__',c.id);
 const digest=hash(chunks.join('')+editionCss+generator+JSON.stringify({id:c.id,title:c.title,titlePhrases:c.titlePhrases,sourceCommit:c.sourceCommit,paperIds:c.paperIds}));
 const prior=previous[c.id]?.[lang];
 const filename=`catalog-${c.id}-${lang}.pdf`;
 if(check){
  if(prior?.contentHash!==digest)throw Error(`PDF ${c.id}/${lang} is stale: run npm run pdf:catalog after building, then rebuild the website.`);
  const data=await readFile('public/pdf/'+filename);
  if(hash(data)!==prior.sha256)throw Error(`PDF ${c.id}/${lang} does not match its recorded hash.`);
  console.log(`PDF ${c.id}/${lang}: current (${prior.pages} pages, ${items.length} chapters).`);continue;
 }
 const date=process.env.PDF_EDITION_DATE??new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Tokyo'});
 const coverTitle=c.titlePhrases?.[lang]?.map(part=>`<span class="title-phrase">${esc(part)}</span>`).join('')??esc(c.title[lang]);
 const toc=items.map(item=>`<li><a href="#${item.id}">${item.id===`catalog-${c.id}`?'00':String(c.paperIds.indexOf(item.id)+1).padStart(2,'0')} · ${esc(item.title)}</a></li>`).join('');
 const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>OpenAI Math Digest · Catalogue ${c.id} · ${lang.toUpperCase()}</title><meta name="author" content="Masataka Iwai"><style>${editionCss}</style></head><body>
 <section class="cover"><p class="brand">OpenAI <i>Math Digest</i></p><p class="eyebrow">CATALOGUE ${c.id}</p><h1>${coverTitle}</h1><p class="cover-subtitle">${en?`Catalogue synthesis & ${c.paperIds.length} proof overviews`:`総括・論文間のつながりと${c.paperIds.length}篇の証明概説`}</p><p>${en?'Independent reading guide · English edition':'独立した非公式の読解ガイド · 日本語版'}</p><p class="edition">${en?'Edition':'収録版'}: ${date}<br>${en?'Created by':'制作'}: Masataka Iwai · ${en?'Osaka University':'大阪大学'}</p><div class="notice">${en?'AI-generated explanations may contain errors. Check important claims and proofs against the original manuscripts. This booklet collects the website’s explanations, not the original papers. Expert review and formal verification have not been performed.':'AI生成の解説には誤りや不正確な説明が含まれる可能性があります。重要な主張・証明は原論文でご確認ください。本冊子はWebサイトの解説をまとめたもので、原論文そのものではありません。専門家査読・形式検証は未実施です。'}</div></section>
 <section class="toc"><h1>${en?'Contents':'目次'}</h1><p>${en?`The synthesis comes first, followed by all ${c.paperIds.length} overviews in official catalogue order. The contents and citations are clickable. Wide tables are arranged as entries for print; the claims and source references are retained.`:`総括に続き、公式カタログ順で全${c.paperIds.length}篇の解説を収録しています。目次・引用はクリックできます。横長の表は紙面向けの項目一覧に組み直し、主張と参照先を保持しています。`}</p><ol>${toc}</ol><p class="small">${en?'Original-manuscript snapshot':'原論文の参照版'}: <code>${c.sourceCommit}</code></p></section>${chunks.join('\n')}</body></html>`;
 const input=new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true});
 const doc=mathjax.document(html,{InputJax:input,OutputJax:new SVG({fontCache:'none'})});
 doc.render();
 const rendered='<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
 if(/<g[^>]*data-mml-node="merror"/.test(rendered)) {
  await writeFile(path.join(scratch, `math-errors-${c.id}-${lang}.html`), rendered);
  throw Error(`MathJax errors in ${c.id}/${lang}: ${[...rendered.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]).join('; ')}`);
 }
 const htmlPath=path.join(scratch,`catalog-${c.id}-${lang}.html`);
 await writeFile(htmlPath,rendered);
 const output=path.join(root,'public/pdf',filename);
 const result=spawnSync(process.env.PDF_PYTHON??'python3',['scripts/pdf/render.py',htmlPath,output,String(items.length)],{encoding:'utf8',maxBuffer:10*1024*1024});
 if(result.status!==0)throw Error(result.stderr||result.stdout||'PDF render failed');
 const info=JSON.parse(result.stdout);
 const pdf=await readFile(output);
 manifest[c.id][lang]={file:filename,date,pages:info.pages,bytes:pdf.length,sha256:hash(pdf),contentHash:digest,chapters:items.length,mathExpressions:(rendered.match(/<mjx-container/g)||[]).length,figures:(rendered.match(/class="proof-figure"/g)||[]).length};
 console.log(`${c.id}/${lang}: ${info.pages} pages · ${manifest[c.id][lang].mathExpressions} formulas · ${manifest[c.id][lang].figures} figures · ${(pdf.length/1048576).toFixed(1)} MB`);
}
}
if(!check)await writeFile('src/data/pdf-editions.json',JSON.stringify(manifest,null,2)+'\n');
