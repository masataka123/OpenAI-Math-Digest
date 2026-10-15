// Catalogue 187 validation-only copy of scripts/check-links.mjs.
// Same URL/base/target/fragment/stale-content checks; cache file paths and IDs on the frozen snapshot.
import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import config from '../../../astro.config.mjs';
const root=path.resolve('dist');
const base=`${config.base.replace(/\/$/,'')}/`;
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):path.join(dir,entry.name)))).flat();}
const allPages=(await walk(root)).filter(file=>file.endsWith('.html'));
const scoped=process.argv.includes('--catalog-187');
const pages=scoped?allPages.filter(file=>/\/(catalog\/187|papers\/snaky-in-21-maker-moves)\/index\.html$/.test(file)):allPages;
let checked=0;
const contentCache=new Map();
async function idsFor(file){if(!contentCache.has(file))contentCache.set(file,new Set([...(await readFile(file,'utf8')).matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])));return contentCache.get(file);}
const knownFiles=new Set(await walk(root));
const errors=[];
for(const file of pages){
 const html=await readFile(file,'utf8');
 const current=`https://example.test${base}${path.relative(root,file).replace(/index\.html$/,'')}`;
 for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const url=new URL(href.replaceAll('&amp;','&'),current);
  if(url.origin!=='https://example.test')continue;
  if(!url.pathname.startsWith(base)){errors.push(`${file}: outside Pages base: ${href}`);continue;}
  const relative=decodeURIComponent(url.pathname.slice(base.length));
  const target=path.join(root,relative.endsWith('/')?`${relative}index.html`:relative);
  try{if(!knownFiles.has(target))throw Error('Missing file');checked++;if(url.hash&&target.endsWith('.html')){const ids=await idsFor(target);const id=decodeURIComponent(url.hash.slice(1));if(!ids.has(id))errors.push(`${file}: missing fragment ${href}`);}}
  catch{errors.push(`${file}: missing target ${href}`);}
 }
 if(/geometry-proof-atlas|Geometry Proof Atlas|\/families\/05[12]\//.test(html))errors.push(`${file}: stale prototype content`);
}
console.log(`Scope ${scoped?'catalogue 187':'all'}: ${checked} links/assets, ${pages.length} HTML pages, ${errors.length} errors.`);
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${checked} internal links/assets across ${pages.length} HTML pages (including anchors and language switches).`);
