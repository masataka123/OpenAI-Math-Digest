import fs from 'node:fs';import path from 'node:path';
import {mathjax} from 'mathjax-full/js/mathjax.js';import {TeX} from 'mathjax-full/js/input/tex.js';import {SVG} from 'mathjax-full/js/output/svg.js';import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);const out='coordination/catalog-068/reference-preview';fs.mkdirSync(out,{recursive:true});
for(const lang of ['ja','en'])for(const route of ['catalog/034','papers/schnell-fiber-spaces','papers/orbifold-logarithmic-iitaka']){
 let html=fs.readFileSync(`dist/${lang}/${route}/index.html`,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 html=html.replace(/<link rel="stylesheet" href="\/OpenAI-Math-Digest\/([^"?]+)">/g,(_,p)=>`<style>${fs.readFileSync('dist/'+p,'utf8')}</style>`).replaceAll('src="/OpenAI-Math-Digest/',`src="file://${path.resolve('dist')}/`);
 const doc=mathjax.document(html,{InputJax:new TeX({packages:AllPackages,inlineMath:[['$','$'],['\\(','\\)']],displayMath:[['$$','$$'],['\\[','\\]']],processEscapes:true}),OutputJax:new SVG({fontCache:'none'})});doc.render();fs.writeFileSync(`${out}/${route.replaceAll('/','-')}.${lang}.html`,'<!doctype html>'+adaptor.outerHTML(adaptor.root(doc.document)));
}
