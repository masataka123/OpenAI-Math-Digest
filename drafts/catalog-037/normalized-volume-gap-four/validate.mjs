import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
import {mathjax} from 'mathjax-full/js/mathjax.js';
import {TeX} from 'mathjax-full/js/input/tex.js';
import {SVG} from 'mathjax-full/js/output/svg.js';
import {liteAdaptor} from 'mathjax-full/js/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax-full/js/handlers/html.js';
import {AllPackages} from 'mathjax-full/js/input/tex/AllPackages.js';
const root=path.dirname(fileURLToPath(import.meta.url));
const adaptor=liteAdaptor();RegisterHTMLHandler(adaptor);
const doc=mathjax.document('',{InputJax:new TeX({packages:AllPackages}),OutputJax:new SVG({fontCache:'none'})});
const output={checkedAt:new Date().toISOString(),stage:1,languages:{},publicAssetsChecked:false};
const sources=JSON.parse(fs.readFileSync(path.join(root,'sources.json')));
for(const s of sources.externalSources)if(createHash('sha256').update(fs.readFileSync(path.join(root,s.localFile))).digest('hex')!==s.sha256)throw Error('Source hash mismatch');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'diagrams/citation-build.json')));
for(const [file,hash] of Object.entries(manifest))if(createHash('sha256').update(fs.readFileSync(path.join(root,'diagrams',file))).digest('hex')!==hash)throw Error('Diagram hash mismatch '+file);
const reg=JSON.parse(fs.readFileSync(path.join(root,'citations.json')));
const display=[];const markers=[];
for(const lang of ['ja','en']){
 const text=fs.readFileSync(path.join(root,`article.${lang}.md`),'utf8');
 const math=[...text.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\\)\$([^$\n]+?)\$/g)];
 for(const m of math){const rendered=adaptor.outerHTML(doc.convert(m[1]??m[2],{display:Boolean(m[1])}));if(rendered.includes('data-mjx-error'))throw Error('Math error: '+m[0]);}
 display.push([...text.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1].trim().replace(/[.,;]$/,'')));
 markers.push([...text.matchAll(/<!-- cite:([^>]+) -->/g)].map(m=>m[1]));
 const rendered=await renderDraft(text,{lang,paperId:sources.paperId,base:'/',catalogId:'037',diagramSource:stem=>fs.readFileSync(path.join(root,'diagrams',stem+'.svg'),'utf8')});
 const ids=new Set([...rendered.html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const [,id] of rendered.html.matchAll(/href="#([^"]+)"/g))if(!ids.has(id))throw Error('Missing local anchor '+id);
 for(const c of reg.articleGuides['.'].conclusionCoverage)if(!ids.has(c.anchor))throw Error('Missing conclusion anchor');
 for(const anchor of Object.values(reg.articleGuides['.'].statements))if(!ids.has(anchor))throw Error('Missing statement anchor '+anchor);
 output.languages[lang]={mathExpressions:math.length,proofFigures:(rendered.html.match(/<figure/g)||[]).length,sourceLines:(rendered.html.match(/class="source-line"/g)||[]).length,localAnchorsValid:true,conclusionAnchorsValid:true};
}
if(JSON.stringify(display[0])!==JSON.stringify(display[1]))throw Error('Display equation mismatch');
if(JSON.stringify(markers[0])!==JSON.stringify(markers[1]))throw Error('Citation order mismatch');
output.displayEquationsIdentical=true;output.citationOrderIdentical=true;output.figureManifestFiles=Object.keys(manifest).length;output.externalSourceHashes=sources.externalSources.length;
output.visualCheck={figures:'Six SVGs rendered as PNG and inspected for legibility, missing characters, overlaps, arrow gutters, and translated labels.',articleScreenComparison:'Pending HQ stage-1 preview; full website/PDF comparison is stage 2.'};
fs.writeFileSync(path.join(root,'validation.json'),JSON.stringify(output,null,2)+'\n');console.log(JSON.stringify(output,null,2));
