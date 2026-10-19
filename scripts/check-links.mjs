import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';
// These caches live for one completed build's scan, never across invocations.
export async function checkLinks({root=path.resolve('dist'),base=config.base}={}) {
root=path.resolve(root);
base=`${base.replace(/\/$/,'')}/`;
const documents=new Map(),targets=new Map();
const stats={htmlReads:0,existenceChecks:0};
async function document(file){
 if(!documents.has(file))documents.set(file,(async()=>{
  stats.htmlReads++;
  const html=await readFile(file,'utf8');
  // Preserve the original literal, double-quoted id matching.
  const ids=new Set([...html.matchAll(/id="([^"]*)"/g)].map(match=>match[1]));
  return {html,ids};
 })());
 return documents.get(file);
}
async function exists(file){
 if(!targets.has(file))targets.set(file,(async()=>{
  stats.existenceChecks++;
  try{await access(file);return true;}catch{return false;}
 })());
 return targets.get(file);
}
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):path.join(dir,entry.name)))).flat();}
const pages=(await walk(root)).filter(file=>file.endsWith('.html'));
let checked=0;
const errors=[];
for(const file of pages){
 const {html}=await document(file);
 const current=`https://example.test${base}${path.relative(root,file).replace(/index\.html$/,'')}`;
 for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const url=new URL(href.replaceAll('&amp;','&'),current);
  if(url.origin!=='https://example.test')continue;
  if(!url.pathname.startsWith(base)){errors.push(`${file}: outside Pages base: ${href}`);continue;}
  const relative=decodeURIComponent(url.pathname.slice(base.length));
  const target=path.join(root,relative.endsWith('/')?`${relative}index.html`:relative);
  try{
   if(!await exists(target))throw Error('Missing target');
   checked++;
   if(url.hash&&target.endsWith('.html')){
    const {html:targetHtml,ids}=await document(target);
    const id=decodeURIComponent(url.hash.slice(1));
    // Encoded quotes retain the old literal substring semantics as well.
    const found=id.includes('"')?targetHtml.includes(`id="${id}"`):ids.has(id);
    if(!found)errors.push(`${file}: missing fragment ${href}`);
   }
  }
  catch{errors.push(`${file}: missing target ${href}`);}
 }
 if(/geometry-proof-atlas|Geometry Proof Atlas|\/families\/05[12]\//.test(html))errors.push(`${file}: stale prototype content`);
}
return {checked,pages:pages.length,errors,stats};
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const started=performance.now();
 const result=await checkLinks();
 if(result.errors.length){console.error(result.errors.join('\n'));process.exitCode=1;}
 else console.log(`Checked ${result.checked} internal links/assets across ${result.pages} HTML pages (including anchors and language switches).`);
 console.log(`Link check: ${((performance.now()-started)/1000).toFixed(2)}s; ${result.stats.htmlReads} HTML reads; ${result.stats.existenceChecks} distinct target checks.`);
}
