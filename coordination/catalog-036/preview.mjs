import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {fromHtml} from '../../node_modules/hast-util-from-html/index.js';
import {toHtml} from '../../node_modules/hast-util-to-html/index.js';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../src/lib/catalog-inventory.mjs';
const root=process.cwd(),folder=path.join(root,'drafts/catalog-036'),out=path.join(root,'coordination/catalog-036/validation/preview');fs.mkdirSync(out,{recursive:true});
const inventory=JSON.parse(fs.readFileSync('coordination/catalog-036/inventory.json'));
const checks=[];
for(const lang of ['ja','en'])for(const id of [...inventory.manuscripts.map(p=>p.paperId),'overview']){
 const f=`${folder}/${id}/article.${lang}.md`;if(!fs.existsSync(f))continue;
 const source=fs.readFileSync(f,'utf8');if(/生成<!--|generated<!--/.test(source))continue;
 if([...source.matchAll(/\]\((diagrams\/[^)]+\.svg)\)/g)].some(m=>!fs.existsSync(`${folder}/${id}/${m[1]}`)))continue;
 const result=await renderDraft(source,{lang,paperId:id,catalogId:'036',base:'/OpenAI-Math-Digest/',sectionIds:id==='overview'?['papers','connections','sources']:[],diagramSource:stem=>fs.readFileSync(`${folder}/${id}/diagrams/${stem}.svg`,'utf8')});
 if(id==='overview'){
 const fake=inventory.manuscripts.map(p=>({id:p.paperId,title:p.title,version:p.version,pages:p.pdfPages,path:p.sourceUrl.split('/preprints/')[1],sourceCommit:p.sourceCommit,featured:true}));
 result.html=result.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,renderCatalogInventory({id:'036',paperIds:fake.map(p=>p.id)},fake,JSON.parse(fs.readFileSync(`${folder}/overview/presentation.json`)),lang,'/OpenAI-Math-Digest/'));
 }
 const title=inventory.manuscripts.find(p=>p.paperId===id)?.title??inventory.overviewTitle;
 const body=`<header class="family-header"><p class="eyebrow">CATALOGUE 036 · STAGE 1 PREVIEW</p><h1>${title}</h1><p class="paper-subtitle">${result.subtitleHtml}</p><p class="lede">${result.ledeHtml}</p></header><nav class="contents">${result.headings.map(h=>`<a href="#${h.slug}">${h.text}</a>`).join('')}</nav><div class="draft-body">${result.html}</div>`;
 const tree=fromHtml(fs.readFileSync(`${root}/dist/${lang}/papers/generalized-mukai/index.html`,'utf8'));
 function walk(n){if(n.tagName==='title')n.children=[{type:'text',value:title+' · STAGE 1'}];if(n.type==='element'&&n.properties?.className?.includes('paper-article')){n.children=fromHtml(body,{fragment:true}).children;return;}if(n.tagName==='script'&&String(n.properties?.src).includes('mathjax'))n.properties.src='/preview/tex-svg.js';if(n.children)for(const c of n.children)walk(c);}
 walk(tree);let html=toHtml(tree);if(id==='overview')html=html.replace('class="paper-article"','class="paper-article catalog-page catalog-markdown-overview"').replace('</head>','<style>'+fs.readFileSync(root+'/src/styles/catalog.css','utf8')+'</style></head>');fs.writeFileSync(`${out}/${id}.${lang}.html`,html);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 const regfile=`${folder}/${id}/citations.json`;if(fs.existsSync(regfile)){const reg=JSON.parse(fs.readFileSync(regfile));for(const g of Object.values(reg.articleGuides??{})){for(const a of Object.values(g.statements))if(!ids.has(a))throw Error('Missing statement '+id+' '+a);for(const c of g.conclusionCoverage)if(!ids.has(c.anchor))throw Error('Missing coverage '+id+' '+c.anchor);}}
 checks.push({lang,id,headings:result.headings.map(h=>h.slug),figures:(html.match(/class="proof-figure"/g)||[]).length,steps:(html.match(/class="proof-step"/g)||[]).length});
}
fs.writeFileSync(out+'/structure.json',JSON.stringify(checks,null,2));
if(process.argv.includes('--render-only')){console.log(checks);process.exit(0);}
http.createServer((req,res)=>{let file;const u=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(u.includes('..')){res.writeHead(400);res.end();return;}if(u==='/preview/tex-svg.js')file=root+'/node_modules/mathjax-full/es5/tex-svg.js';else if(u.startsWith('/preview/'))file=out+'/'+u.slice(9);else if(u.startsWith('/OpenAI-Math-Digest/diagrams/catalog-036/')){const s=u.slice('/OpenAI-Math-Digest/diagrams/catalog-036/'.length).split('/');file=folder+'/'+s.shift()+'/diagrams/'+s.join('/');}else file=root+'/dist/'+u.replace(/^\/OpenAI-Math-Digest\//,'').replace(/^\//,'');try{if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.tex':'text/plain'}[path.extname(file)]||'application/octet-stream';let buf=fs.readFileSync(file);if(path.extname(file)==='.html')buf=Buffer.from(buf.toString().replace('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js','/preview/tex-svg.js'));res.writeHead(200,{'Content-Type':mime});res.end(buf);}catch{res.writeHead(404);res.end('Not found');}}).listen(43836,'127.0.0.1',()=>console.log('036 isolated preview port 43836',checks));
