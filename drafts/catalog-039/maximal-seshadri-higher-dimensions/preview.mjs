// Local Stage 1 preview only; does not modify site routes or public assets.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const here=path.dirname(fileURLToPath(import.meta.url)),repo=path.resolve(here,'../../..');
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const css=['atlas','typography','digest','paper','draft-article'].map(x=>fs.readFileSync(path.join(repo,`src/styles/${x}.css`),'utf8')).join('\n');
for(const lang of ['ja','en']){
 const rendered=await renderDraft(fs.readFileSync(path.join(here,`article.${lang}.md`),'utf8'),{lang,paperId:'maximal-seshadri-higher-dimensions',catalogId:'039',base:'./',diagramSource:stem=>fs.readFileSync(path.join(here,`diagrams/${stem}.svg`),'utf8')});
 const input=new TeX({packages:AllPackages,inlineMath:[['$','$'],['\\(','\\)']],displayMath:[['$$','$$'],['\\[','\\]']]});
 const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}\nbody{padding:24px}main{max-width:1080px;margin:auto}h1{font-size:30px;overflow-wrap:anywhere}.draft-body{min-width:0}</style></head><body><main><p>Stage 1 local preview — AI-generated overview; check original sources.</p><h1>Maximal Multipoint Seshadri Constants in Higher Dimensions</h1><h2>${rendered.subtitleHtml}</h2><p>${rendered.ledeHtml}</p><div class="draft-body">${rendered.html.replaceAll('./diagrams/catalog-039/maximal-seshadri-higher-dimensions/','diagrams/')}</div></main></body></html>`;
 const doc=mathjax.document(html,{InputJax:input,OutputJax:new SVG({fontCache:'none'})});doc.render();
 const out='<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document));
 fs.writeFileSync(path.join(here,`preview.${lang}.html`),out);
 const ids=new Set([...out.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));const missing=[...out.matchAll(/href="#([^"]+)"/g)].map(x=>x[1]).filter(x=>!ids.has(x));
 if(missing.length)throw Error('Missing anchors '+missing.join(','));
 if(!out.includes('<mjx-container')||out.includes('data-mjx-error'))throw Error('Math rendering error');
 console.log(lang,'rendered; local anchors and MathJax OK');
}
