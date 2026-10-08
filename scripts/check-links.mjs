import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import config from '../astro.config.mjs';
const root=path.resolve('dist');
const base=`${config.base.replace(/\/$/,'')}/`;
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):path.join(dir,entry.name)))).flat();}
const pages=(await walk(root)).filter(file=>file.endsWith('.html'));
let checked=0;
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
  try{await access(target);checked++;if(url.hash&&target.endsWith('.html')){const text=await readFile(target,'utf8');const id=decodeURIComponent(url.hash.slice(1));if(!text.includes(`id="${id}"`))errors.push(`${file}: missing fragment ${href}`);}}
  catch{errors.push(`${file}: missing target ${href}`);}
 }
 if(/geometry-proof-atlas|Geometry Proof Atlas|\/families\/05[12]\//.test(html))errors.push(`${file}: stale prototype content`);
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Checked ${checked} internal links/assets across ${pages.length} HTML pages (including anchors and language switches).`);
