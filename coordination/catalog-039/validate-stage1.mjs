import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import {syncCitations} from '../../scripts/sync-citations.mjs';
const root='coordination/catalog-039',inv=JSON.parse(fs.readFileSync(root+'/inventory.json'));const report=[];
for(const p of [...inv.manuscripts,{paperId:'overview',draftDirectory:'drafts/catalog-039/overview'}]){
 const d=p.draftDirectory,reg=JSON.parse(fs.readFileSync(d+'/citations.json'));const result=syncCitations({check:true,textOnly:true,registryFile:d+'/citations.json'});
 const md=['ja','en'].map(l=>fs.readFileSync(`${d}/article.${l}.md`,'utf8'));
 const ids=md.map(s=>[...s.matchAll(/<!-- cite:([^>]+) -->/g)].map(m=>m[1]));if(JSON.stringify(ids[0])!==JSON.stringify(ids[1]))throw Error(p.paperId+' bilingual citation order differs');
 const diagrams=md.map(s=>[...s.matchAll(/\]\(diagrams\/([^.)]+)\.(?:ja|en)\.svg\)/g)].map(m=>m[1]));if(JSON.stringify(diagrams[0])!==JSON.stringify(diagrams[1]))throw Error(p.paperId+' bilingual diagram order differs');
 const manifest=JSON.parse(fs.readFileSync(d+'/diagrams/citation-build.json'));for(const [file,hash] of Object.entries(manifest))if(createHash('sha256').update(fs.readFileSync(d+'/diagrams/'+file)).digest('hex')!==hash)throw Error('Stale diagram '+file);
 report.push({paperId:p.paperId,textCitations:'pass',bilingualCitationOrder:ids[0].length,bilingualDiagramStems:diagrams[0],diagramHashes:Object.keys(manifest).length});
}
const preview=JSON.parse(fs.readFileSync(root+'/preview-checks.json'));if(preview.length!==10||preview.some(x=>x.mathErrors.length||x.missingAnchors.length))throw Error('Incomplete/error preview');
const linkResults=[];const fileCache=new Map();const fileAnchors=f=>{if(!fileCache.has(f))fileCache.set(f,new Set([...fs.readFileSync(f,'utf8').matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])));return fileCache.get(f);};for(const file of fs.readdirSync(root+'/preview').filter(f=>f.endsWith('.html'))){const text=fs.readFileSync(root+'/preview/'+file,'utf8');for(const [,url] of text.matchAll(/href="([^" ]+)"/g)){
 if(url.startsWith('https:')||url.startsWith('http:')||url.startsWith('/'))continue;
 const [target,hash]=url.split('#');const f=target?path.resolve(root+'/preview',target):path.resolve(root+'/preview',file);if(!fs.existsSync(f)){linkResults.push({file,url,error:'missing file'});continue;}
 if(hash&&f.endsWith('.html')&&!fileAnchors(f).has(hash))linkResults.push({file,url,error:'missing anchor'});
}}
fs.writeFileSync(root+'/validation/stage1.json',JSON.stringify({scope:'Unregistered Stage 1 content only; no public asset or booklet validation',articles:report,previewPages:preview.length,linkErrors:linkResults},null,2)+'\n');console.log(JSON.stringify({articles:report,linkErrors:linkResults},null,2));if(linkResults.length)process.exitCode=1;
