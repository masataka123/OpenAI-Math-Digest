// Stage 1 validation only: no site registration, public copies or PDF generation.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {syncCitations} from '../../scripts/sync-citations.mjs';
import {validateInventory} from '../../src/lib/catalog-inventory.mjs';
const root='coordination/catalog-046';
const inv=JSON.parse(fs.readFileSync(root+'/inventory.json'));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const report={catalogue:'046',scope:'Unpublished Stage 1 sources; public copies and booklets are excluded',checks:[],failures:[]};
function check(name,fn){try{const value=fn();report.checks.push({name,status:'pass',detail:value??null});}catch(e){report.failures.push({name,error:e.message});}}
check('Official manuscript hashes',()=>{for(const m of inv.manuscripts)if(sha(m.localFile)!==m.sha256)throw Error(m.paperId);return inv.manuscripts.length;});
check('Official order and four-column inventory',()=>validateInventory({id:'046',paperIds:inv.manuscripts.map(x=>x.paperId)},inv.manuscripts.map(m=>({id:m.paperId,title:m.title,version:m.version,pages:m.pdfPages,featured:true})),JSON.parse(fs.readFileSync('drafts/catalog-046/overview/presentation.json'))));
for(const folder of [...inv.manuscripts.map(m=>m.draftDirectory),'drafts/catalog-046/overview']){
 check(folder+' citations and required guide blocks',()=>syncCitations({check:true,textOnly:true,registryFile:folder+'/citations.json'}));
 check(folder+' generated figure hashes',()=>{
  const d=folder+'/diagrams',manifest=JSON.parse(fs.readFileSync(d+'/citation-build.json'));
  const stems=fs.readdirSync(d).filter(f=>f.endsWith('.tikz')).map(f=>f.slice(0,-5));
  const expected=['render.py','preamble.tex','citations.ja.tex','citations.en.tex',...stems.flatMap(s=>[s+'.tikz',...['ja','en'].flatMap(l=>[s+'.'+l+'.tex',s+'.'+l+'.svg'])])].sort();
  if(JSON.stringify(expected)!==JSON.stringify(Object.keys(manifest).sort()))throw Error('Incomplete manifest');
  for(const [name,hash] of Object.entries(manifest))if(sha(path.join(d,name))!==hash)throw Error('Stale '+name);
  return {bilingualFigures:stems.length};
 });
 check(folder+' bilingual structural parity',()=>{
  const md=['ja','en'].map(l=>fs.readFileSync(folder+'/article.'+l+'.md','utf8'));
  const extract=s=>({citations:[...s.matchAll(/<!-- cite:([^>]+) -->/g)].map(x=>x[1]),targets:[...s.matchAll(/<!-- proof-target:(\d+) -->/g)].map(x=>x[1]),figures:[...s.matchAll(/\]\(diagrams\/([^/]+)\.(?:ja|en)\.svg\)/g)].map(x=>x[1]),h2:s.split(/^## /m).length-1});
  const display=md.map(s=>[...s.matchAll(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g)].map(m=>(m[1]??m[2]).replace(/\s+/g,'').replace(/[.,;]$/,'')));
  if(JSON.stringify(display[0])!==JSON.stringify(display[1]))throw Error('Display equations differ between languages');
  const a=md.map(extract);if(JSON.stringify(a[0])!==JSON.stringify(a[1]))throw Error('Different citations, proof targets, diagrams or section count');
  if(md.some(s=>/<!-- cite:[^>]+ -->(?:pending|generated|Generated|生成)<!--/.test(s)))throw Error('Unexpanded placeholder');
  return a[0];
 });
}
check('Rendered anchors and MathJax',()=>{
 const data=JSON.parse(fs.readFileSync(root+'/preview-checks.json'));
 if(data.length!==6)throw Error('Expected six bilingual article/catalogue previews');
 for(const p of data)if(p.mathErrors.length||p.missingAnchors.length)throw Error(JSON.stringify(p));
 const files=fs.readdirSync(root+'/preview').filter(f=>f.endsWith('.html'));let checkedLinks=0;
 for(const file of files){
  const html=fs.readFileSync(root+'/preview/'+file,'utf8');
  for(const [,target] of html.matchAll(/href="([^"\s]+)"/g)){
   if(!target.startsWith('#')&&!/^[a-z0-9-]+\.(ja|en)\.html(?:#|$)/.test(target))continue;
   const [other,fragment]=target.split('#');const p=other||file;
   if(!files.includes(p))throw Error('Missing local page '+p+' from '+file);
   if(fragment&&!fs.readFileSync(root+'/preview/'+p,'utf8').includes('id="'+fragment+'"'))throw Error('Missing anchor '+target+' from '+file);
   checkedLinks++;
  }
 }
 return {pages:data.length,localFragmentAndPageReferences:checkedLinks};
});
fs.writeFileSync(root+'/stage1-checks.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(report.failures.length)process.exitCode=1;
