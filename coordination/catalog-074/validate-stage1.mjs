// Stage-1 validation; no public asset or site registration is required or written.
import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import {syncCitations} from '../../scripts/sync-citations.mjs';
const root='coordination/catalog-074', inv=JSON.parse(fs.readFileSync(root+'/inventory.json')), reports=[];
const hash=f=>createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const math=s=>[...s.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1].replace(/\s+/g,' ').trim().replace(/[.,;]$/,''));
for(const p of [...inv.manuscripts,{paperId:'overview',draftDirectory:'drafts/catalog-074/overview'}]){
 const folder=p.draftDirectory, registry=folder+'/citations.json', data=JSON.parse(fs.readFileSync(registry));
 const sync=syncCitations({check:true,textOnly:true,registryFile:registry});
 const texts=['ja','en'].map(l=>fs.readFileSync(`${folder}/article.${l}.md`,'utf8'));
 const m=texts.map(math), mismatches=[];for(let i=0;i<Math.max(m[0].length,m[1].length);i++)if(m[0][i]!==m[1][i])mismatches.push({i,ja:m[0][i],en:m[1][i]});
 const placeholders=texts.map(s=>/生成前|\{\{|\bTODO\b|\bTBD\b/.test(s));
 const dirs=data.diagramDirectories.map(x=>path.join(folder,x)),figures=[];
 for(const d of dirs){const manifest=JSON.parse(fs.readFileSync(d+'/citation-build.json'));const bad=Object.entries(manifest).filter(([f,h])=>hash(path.join(d,f))!==h).map(([f])=>f);if(bad.length)throw Error('Stale manifest: '+bad.join(','));
  for(const stem of fs.readdirSync(d).filter(f=>f.endsWith('.tikz')).map(f=>f.slice(0,-5))){for(const lang of ['ja','en']){const svg=fs.readFileSync(`${d}/${stem}.${lang}.svg`,'utf8');if(!svg.includes('<svg')||!svg.includes('https://'))throw Error('Missing SVG or source links');}figures.push(stem);}}
 const report={paperId:p.paperId,citationFilesChecked:sync.files,displayMathCounts:m.map(x=>x.length),mathMismatches:mismatches,placeholders,diagramPairs:figures,sourceHashVerified:p.localPdf?hash(p.localPdf)===p.sha256:null};reports.push(report);
}
const presentation=JSON.parse(fs.readFileSync('drafts/catalog-074/overview/presentation.json'));
if(JSON.stringify(presentation.rows.map(r=>r.paperId))!==JSON.stringify(inv.manuscripts.map(r=>r.paperId)))throw Error('Official order mismatch');
for(const l of ['ja','en'])if((fs.readFileSync(`drafts/catalog-074/overview/article.${l}.md`,'utf8').match(/CATALOGINVENTORYTOKEN/g)||[]).length!==1)throw Error('Inventory token mismatch');
const passed=reports.every(r=>!r.mathMismatches.length&&!r.placeholders.some(Boolean)&&r.sourceHashVerified!==false);
fs.writeFileSync(root+'/validation.json',JSON.stringify({checkedOn:new Date().toISOString(),scope:'074 only; citation text, figure hashes, display-formula parity (terminal punctuation ignored; inline mathematical prose checked in the independent content review), source hashes, official table order; not a mathematical proof check or full site release gate',passed,reports},null,2)+'\n');console.log(JSON.stringify({passed,reports},null,2));if(!passed)process.exitCode=1;
