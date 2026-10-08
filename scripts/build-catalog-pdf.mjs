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
import {catalogs, papers, sourceCommit} from '../src/data/site.mjs';
import config from '../astro.config.mjs';

const root=process.cwd(), scratch=path.join(root,'tmp/pdfs');
const c=catalogs.find(c=>c.id==='034'), base=config.base.replace(/\/$/,'')+'/';
const site=config.site.replace(/\/$/,'');
const check=process.argv.includes('--check');
const css=await readFile('scripts/pdf/booklet.css','utf8');
const generator=(await Promise.all([import.meta.filename,'scripts/pdf/render.py','scripts/pdf/requirements.txt'].map(file=>readFile(file,'utf8')))).join('');
const cls=(n,c)=>n.properties?.className?.includes(c);
const el=(tag,children=[],properties={})=>({type:'element',tagName:tag,properties,children});
const txt=value=>({type:'text',value});
const first=(n,predicate)=>predicate(n)?n:n.children?.map(c=>first(c,predicate)).find(Boolean);
const textOf=n=>n.type==='text'?n.value:(n.children??[]).map(textOf).join('');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const hash=s=>createHash('sha256').update(s).digest('hex');

// Remove controls, not exposition. The detailed connection records replace
// their duplicate audit table; all 23 connections remain visible in print.
const omit=new Set(['reading-guide','breadcrumbs','catalog-pdf','catalog-nav','contents',
 'dependency-controls','connection-empty','table-hint','catalog-audit','screen-only']);
function prepare(n) {
 if(n.type==='comment'||n.tagName==='script'||n.tagName==='style'||[...omit].some(c=>cls(n,c)))return null;
 // The booklet has its own contents; omit the website-only final back link.
 if(cls(n,'source-note')&&n.children?.filter(c=>c.type!=='text'||c.value.trim()).length===1
   &&n.children.some(c=>c.tagName==='a'&&c.properties?.href?.includes('/catalog/034/#paper-')))return null;
 if(n.children)n.children=n.children.map(prepare).filter(Boolean);
 if(n.properties){
  for(const k of Object.keys(n.properties))if(k.startsWith('dataAstro')||['tabIndex','target','download'].includes(k))delete n.properties[k];
  if(cls(n,'diagram-tools'))n.children=n.children.filter(c=>c.tagName!=='span');
 }
 if(n.tagName==='table') {
  const header=first(n,e=>e.tagName==='thead');
  const labels=first(header??{},e=>e.tagName==='tr')?.children.filter(e=>['th','td'].includes(e.tagName)).map(textOf)??[];
  const rows=first(n,e=>e.tagName==='tbody')?.children.filter(e=>e.tagName==='tr')??[];
  const caption=first(n,e=>e.tagName==='caption');
  return el('section',[
   ...(caption?[el('h3',caption.children)]:[]),
   ...rows.map(row=>el('section',row.children.filter(e=>['th','td'].includes(e.tagName)).map((cell,i)=>el('div',[
    ...(labels[i]?[el('h4',[txt(labels[i])])]:[]),...cell.children
   ],{className:['print-cell']})),{...row.properties,className:['print-row']}))
  ],{className:['print-table']});
 }
 return n;
}
function rewrite(n,chapter,lang) {
 if(n.properties){
  const p=n.properties;
  if(p.id)p.id=chapter+'--'+p.id;
  for(const key of ['href','xLinkHref'])if(typeof p[key]==='string'){
   const original=p[key];
   if(original.startsWith('#'))p[key]='#'+chapter+'--'+original.slice(1).replace(/^dependency-(?!canonical-good-model)/,'connection-');
   else {
    const url=new URL(original,site+base);
    const route=url.pathname.slice(base.length);
    const match=route.match(new RegExp('^'+lang+'/(catalog|papers)/([^/]+)/?$'));
    if(url.origin===new URL(site).origin&&url.pathname.startsWith(base)&&match){
     const target=match[1]==='catalog'?'catalog-'+match[2]:match[2];
     if(target==='catalog-034'||c.paperIds.includes(target))p[key]='#'+target+(url.hash?'--'+url.hash.slice(1).replace(/^dependency-(?!canonical-good-model)/,'connection-'):'');
     else p[key]=url.href;
    } else p[key]=url.href;
   }
  }
  for(const key of ['ariaLabelledBy','ariaDescribedBy'])if(p[key])p[key]=(Array.isArray(p[key])?p[key]:p[key].split(' ')).map(id=>chapter+'--'+id);
  for(const key of Object.keys(p))if(typeof p[key]==='string')p[key]=p[key].replace(/url\(#([^)]*)\)/g,(_,id)=>`url(#${chapter}--${id})`);
 }
 n.children?.forEach(child=>rewrite(child,chapter,lang));
}
const adaptor=liteAdaptor(); RegisterHTMLHandler(adaptor);
await mkdir(scratch,{recursive:true}); await mkdir('public/pdf',{recursive:true});
let previous={};try{previous=JSON.parse(await readFile('src/data/pdf-editions.json','utf8'));}catch{}
const manifest={};
for(const lang of ['ja','en']) {
 const en=lang==='en';
 const items=[{id:'catalog-034',route:`${lang}/catalog/034/`,title:en?'Catalogue synthesis':'カタログ034 総括',label:en?'Catalogue 034 · Synthesis':'カタログ034 · 総括'},
  ...c.paperIds.map((id,i)=>({id,route:`${lang}/papers/${id}/`,title:papers.find(p=>p.id===id).title,label:`034 / ${String(i+1).padStart(2,'0')}`}))];
 const chunks=[];
 for(const item of items){
  const tree=fromHtml(await readFile(`dist/${item.route}index.html`,'utf8'));
  const main=first(tree,n=>n.tagName==='main');
  if(!main)throw Error('Missing main: '+item.route);
  const body=prepare(main);
  body.tagName='div';body.properties={className:['chapter-body']};
  rewrite(body,item.id,lang);
  chunks.push(`<article class="chapter" id="${item.id}"><p class="chapter-label">${item.label}</p><p class="web-link"><a href="${site+base+item.route}">${en?'Read on the website':'Web版を読む'} ↗</a></p>${toHtml(body)}</article>`);
 }
 const digest=hash(chunks.join('')+css+generator);
 const filename=`catalog-034-${lang}.pdf`;
 if(check){
  if(previous[lang]?.contentHash!==digest)throw Error(`PDF ${lang} is stale: run npm run pdf:catalog after building, then rebuild the website.`);
  const data=await readFile('public/pdf/'+filename);
  if(hash(data)!==previous[lang].sha256)throw Error(`PDF ${lang} does not match its recorded hash.`);
  console.log(`PDF ${lang}: current (${previous[lang].pages} pages, ${items.length} chapters).`);continue;
 }
 const date=process.env.PDF_EDITION_DATE??new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Tokyo'});
 const coverTitle=c.titlePhrases?.[lang]?.map(part=>`<span class="title-phrase">${esc(part)}</span>`).join('')??esc(c.title[lang]);
 const toc=items.map(item=>`<li><a href="#${item.id}">${item.id==='catalog-034'?'00':String(c.paperIds.indexOf(item.id)+1).padStart(2,'0')} · ${esc(item.title)}</a></li>`).join('');
 const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>OpenAI Math Digest · Catalogue 034 · ${lang.toUpperCase()}</title><meta name="author" content="Masataka Iwai"><style>${css}</style></head><body>
 <section class="cover"><p class="brand">OpenAI <i>Math Digest</i></p><p class="eyebrow">CATALOGUE 034</p><h1>${coverTitle}</h1><p class="cover-subtitle">${en?'Catalogue synthesis & 14 proof overviews':'総括・論文間のつながりと14篇の証明概説'}</p><p>${en?'Independent reading guide · English edition':'独立した非公式の読解ガイド · 日本語版'}</p><p class="edition">${en?'Edition':'収録版'}: ${date}<br>${en?'Created by':'制作'}: Masataka Iwai · ${en?'Osaka University':'大阪大学'}</p><div class="notice">${en?'AI-generated explanations may contain errors. Check important claims and proofs against the original manuscripts. This booklet collects the website’s explanations, not the original papers. Expert review and formal verification have not been performed.':'AI生成の解説には誤りや不正確な説明が含まれる可能性があります。重要な主張・証明は原論文でご確認ください。本冊子はWebサイトの解説をまとめたもので、原論文そのものではありません。専門家査読・形式検証は未実施です。'}</div></section>
 <section class="toc"><h1>${en?'Contents':'目次'}</h1><p>${en?'The synthesis comes first, followed by all 14 overviews in official catalogue order. The contents and citations are clickable. Wide tables are arranged as entries for print; the claims and source references are retained.':'総括に続き、公式カタログ順で全14篇の解説を収録しています。目次・引用はクリックできます。横長の表は紙面向けの項目一覧に組み直し、主張と参照先を保持しています。'}</p><ol>${toc}</ol><p class="small">${en?'Original-manuscript snapshot':'原論文の参照版'}: <code>${sourceCommit}</code></p></section>${chunks.join('\n')}</body></html>`;
 const input=new TeX({packages:AllPackages,inlineMath:[['$','$']],displayMath:[['$$','$$']],processEscapes:true});
 const doc=mathjax.document(html,{InputJax:input,OutputJax:new SVG({fontCache:'none'})});
 doc.render();
 const rendered='<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
 if(/<g[^>]*data-mml-node="merror"/.test(rendered)) {
  await writeFile(path.join(scratch, `math-errors-${lang}.html`), rendered);
  throw Error(`MathJax errors in ${lang}: ${[...rendered.matchAll(/data-mjx-error="([^"]+)"/g)].map(m=>m[1]).join('; ')}`);
 }
 const htmlPath=path.join(scratch,`catalog-034-${lang}.html`);
 await writeFile(htmlPath,rendered);
 const output=path.join(root,'public/pdf',filename);
 const result=spawnSync(process.env.PDF_PYTHON??'python3',['scripts/pdf/render.py',htmlPath,output],{encoding:'utf8',maxBuffer:10*1024*1024});
 if(result.status!==0)throw Error(result.stderr||result.stdout||'PDF render failed');
 const info=JSON.parse(result.stdout);
 const pdf=await readFile(output);
 manifest[lang]={file:filename,date,pages:info.pages,bytes:pdf.length,sha256:hash(pdf),contentHash:digest,chapters:items.length,mathExpressions:(rendered.match(/<mjx-container/g)||[]).length,figures:(rendered.match(/class="proof-figure"/g)||[]).length};
 console.log(`${lang}: ${info.pages} pages · ${manifest[lang].mathExpressions} formulas · ${manifest[lang].figures} figures · ${(pdf.length/1048576).toFixed(1)} MB`);
}
if(!check)await writeFile('src/data/pdf-editions.json',JSON.stringify(manifest,null,2)+'\n');
