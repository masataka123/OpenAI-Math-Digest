import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../../src/lib/catalog-inventory.mjs';

const root=process.cwd(), out=path.join(root,'coordination/catalog-060/validation/preview');
fs.mkdirSync(out,{recursive:true});
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const inventoryFile='coordination/catalog-060/inventory.json';
const inventory=fs.existsSync(path.join(root,inventoryFile))?JSON.parse(read(inventoryFile)):null;
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(n=>read(`src/styles/${n}.css`)).join('\n');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const references=[];
function localize(html){
 return html.replace(/((?:href|src)=")\/OpenAI-Math-Digest\//g,(_,attribute)=>`${attribute}file://${root}/dist/`)
  .replace('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',`file://${root}/node_modules/mathjax-full/es5/tex-svg.js`)
  .replace('</head>',`<style>${css}</style></head>`);
}
for(const lang of ['ja','en']){
 const shell=read(`dist/${lang}/papers/schnell-fiber-spaces/index.html`);
 for(const [name,route] of [['schnell',`papers/schnell-fiber-spaces`],['orbifold',`papers/orbifold-logarithmic-iitaka`],['catalog034','catalog/034']]){
  const source=`dist/${lang}/${route}/index.html`, html=read(source);
  fs.writeFileSync(path.join(out,`${name}.${lang}.html`),localize(html));
  references.push({name,lang,source,sha256:hash(html),comparisonOnly:true});
 }
 for(const paperId of ['global-spherical-shells','overview']){
  const dir=`drafts/catalog-060/${paperId}`, source=`${dir}/article.${lang}.md`;
  if(!fs.existsSync(path.join(root,source))||!inventory)continue;
  const render=await renderDraft(read(source),{lang,paperId,catalogId:'060',base:'./',sectionIds:paperId==='overview'?(inventory.overviewSectionIds??['papers','sources']):[],diagramSource:stem=>read(`${dir}/diagrams/${stem}.svg`)});
  let body=render.html;
  if(paperId==='overview'){
   const presentation=JSON.parse(read(`${dir}/presentation.json`));
   const table=renderCatalogInventory({id:'060',paperIds:inventory.manuscripts.map(p=>p.paperId)},inventory.manuscripts.map(p=>({...p,path:p.path??p.sourceUrl.split('/preprints/')[1],id:p.paperId,pages:p.pdfPages,featured:true})),presentation,lang,'./');
   body=body.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,()=>table);
   if(body.includes('CATALOGINVENTORYTOKEN'))throw Error('Inventory must be a standalone catalogue block, matching CatalogMarkdownOverview.astro');
  }
  const title=paperId==='overview'?(lang==='ja'?inventory.titleJa:inventory.overviewTitle):inventory.manuscripts[0].title;
  let main=`<main id="content"><article class="paper-article ${paperId==='overview'?'catalog-page catalog-markdown-overview':''}"><header class="family-header"><p class="eyebrow">CATALOGUE 060 · STAGE 1 PREVIEW</p><h1>${title}</h1><p class="paper-subtitle">${render.subtitleHtml}</p><div class="lede">${render.ledeHtml}</div></header><div class="draft-intro">${render.introHtml}</div><div class="draft-body">${body}</div></article></main>`;
  // Local-only mapping; production links remain unchanged in the source drafts.
  main=main.replaceAll(`./${lang}/papers/global-spherical-shells/`,`./global-spherical-shells.${lang}.html`)
   .replaceAll(`./${lang}/catalog/060/`,`./overview.${lang}.html`)
   .replace(/\.\/diagrams\/catalog-060\/([^/]+)\//g,(_,id)=>`file://${root}/drafts/catalog-060/${id}/diagrams/`);
  main=main.replace('</header>',`<nav class="catalog-nav">${render.headings.map(h=>`<a href="#${h.slug}">${h.text}</a>`).join('')}</nav></header>`);
  let html=localize(shell.replace(/<main\b[\s\S]*?<\/main>/,()=>main));
  html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${title} · stage 1 preview</title>`);
  html=html.replace(/(<a\b[^>]*id="language"[^>]*href=")[^"]+/,`$1./${paperId}.${lang==='ja'?'en':'ja'}.html`);
  fs.writeFileSync(path.join(out,`${paperId}.${lang}.html`),html);
 }
}
fs.writeFileSync(path.join(root,'coordination/catalog-060/validation/reference-manifest.json'),JSON.stringify({createdAt:new Date().toISOString(),scope:'Read-only existing dist references + current shared CSS; no Astro integration or production route registration',references,cssHash:hash(css)},null,2));
const draftSnapshot=[];
for(const name of ['global-spherical-shells','overview']){
 const folder=path.join(root,'drafts/catalog-060',name);if(!fs.existsSync(folder))continue;
 for(const entry of fs.readdirSync(folder))if(entry!=='status.md'&&/\.(md|json)$/.test(entry)){const file=path.join(folder,entry);draftSnapshot.push({file:path.relative(root,file),sha256:hash(fs.readFileSync(file))});}
 const figures=path.join(folder,'diagrams');if(fs.existsSync(figures))for(const entry of fs.readdirSync(figures))if(/\.(svg|tex|tikz|json|py)$/.test(entry)){const file=path.join(figures,entry);draftSnapshot.push({file:path.relative(root,file),sha256:hash(fs.readFileSync(file))});}
}
fs.writeFileSync(path.join(root,'coordination/catalog-060/validation/draft-snapshot.json'),JSON.stringify({createdAt:new Date().toISOString(),files:draftSnapshot},null,2));
console.log(`Isolated previews written to ${out}`);
