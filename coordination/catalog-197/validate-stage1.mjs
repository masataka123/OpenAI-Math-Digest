import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {syncCitations} from '../../scripts/sync-citations.mjs';
const dir='coordination/catalog-197', inventory=JSON.parse(fs.readFileSync(`${dir}/inventory.json`));
const digest=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const errors=[],results=[];
for(const [name,s] of Object.entries(inventory.officialSources))if(digest(s.file)!==s.sha256)errors.push({officialSource:name,source:'sha256 mismatch'});
for(const p of [...inventory.manuscripts,{paperId:'overview',draftDirectory:'drafts/catalog-197/overview'}]){
 const folder=p.draftDirectory;
 const required=['article.ja.md','article.en.md','sources.json','citations.json','status.md','diagrams/citation-build.json'];
 const missing=required.filter(f=>!fs.existsSync(path.join(folder,f)));
 if(missing.length){errors.push({paper:p.paperId,missing});continue;}
 try{syncCitations({check:true,textOnly:true,registryFile:`${folder}/citations.json`});}catch(e){errors.push({paper:p.paperId,citations:e.message});}
 const manifest=JSON.parse(fs.readFileSync(`${folder}/diagrams/citation-build.json`));
 const stems=fs.readdirSync(`${folder}/diagrams`).filter(f=>f.endsWith('.tikz')).map(f=>f.slice(0,-5));
 const expected=['render.py','preamble.tex','citations.ja.tex','citations.en.tex',...stems.flatMap(s=>[`${s}.tikz`,...['ja','en'].flatMap(l=>[`${s}.${l}.tex`,`${s}.${l}.svg`])])].sort();
 if(JSON.stringify(expected)!==JSON.stringify(Object.keys(manifest).sort()))errors.push({paper:p.paperId,manifest:'incomplete'});
 for(const [f,sha] of Object.entries(manifest))if(digest(`${folder}/diagrams/${f}`)!==sha)errors.push({paper:p.paperId,stale:f});
 if(p.localSource&&digest(p.localSource)!==p.sha256)errors.push({paper:p.paperId,source:'sha256 mismatch'});
 const counts=['ja','en'].map(l=>({lang:l,citations:[...fs.readFileSync(`${folder}/article.${l}.md`,'utf8').matchAll(/<!-- cite:([^>]+) -->/g)].map(m=>m[1]),figures:[...fs.readFileSync(`${folder}/article.${l}.md`,'utf8').matchAll(/\]\(diagrams\/([^)]*)\.(ja|en)\.svg\)/g)].map(m=>m[1])}));
 if(JSON.stringify(counts[0].citations)!==JSON.stringify(counts[1].citations))errors.push({paper:p.paperId,bilingual:'citation order differs'});
 if(JSON.stringify(counts[0].figures)!==JSON.stringify(counts[1].figures))errors.push({paper:p.paperId,bilingual:'figures differ'});
 results.push({paperId:p.paperId,figuresPerLanguage:stems.length,manifestFiles:expected.length,citationsPerLanguage:counts[0].citations.length,sourceHash:p.localSource?true:'official inventory'});
}
const preview=fs.existsSync(`${dir}/preview-checks.json`)?JSON.parse(fs.readFileSync(`${dir}/preview-checks.json`)):[];
for(const r of preview)if(r.pending||r.guideErrors?.length||r.missingAnchors?.length||r.mathErrors?.length||r.duplicateIds?.length)errors.push({preview:r});
let localReferences=0;
for(const r of preview.filter(r=>!r.pending)){
 const file=`${dir}/preview/${r.paperId}.${r.lang}.html`,html=fs.readFileSync(file,'utf8');
 for(const [,href] of html.matchAll(/\bhref="([^"]+)"/g)){
  if(/^(https?:|mailto:|#|data:)/.test(href))continue;
  const [base,anchor]=href.split('#');
  const target=base.startsWith('/drafts/')?path.resolve(base.slice(1)):path.resolve(path.dirname(file),base);
  localReferences++;
  if(!fs.existsSync(target)){errors.push({paper:r.paperId,lang:r.lang,missingLocalReference:href});continue;}
  if(anchor&&target.endsWith('.html')&&!fs.readFileSync(target,'utf8').includes(`id="${decodeURIComponent(anchor)}"`))errors.push({paper:r.paperId,lang:r.lang,missingLinkedAnchor:href});
 }
}
if(fs.existsSync(`${dir}/screen-checks.json`))for(const r of JSON.parse(fs.readFileSync(`${dir}/screen-checks.json`)))if(!r.file.startsWith('reference-')&&(r.bodyWidth>r.viewport||r.mathErrors.length||r.missingLocalAnchors.length))errors.push({screen:r});
const connections=JSON.parse(fs.readFileSync('drafts/catalog-197/overview/connections.json'));
let connectionLinks=0;
for(const c of connections.connections)for(const end of ['from','to'])for(const lang of ['ja','en']){
 const link=c.articleLinks?.[end]?.[lang];if(!link)continue;
 const m=link.match(/^\/(ja|en)\/papers\/([^/]+)\/#(.+)$/);
 if(!m){errors.push({connection:c.id,invalidLink:link});continue;}
 connectionLinks++;const f=`${dir}/preview/${m[2]}.${m[1]}.html`;
 if(!fs.existsSync(f)||!fs.readFileSync(f,'utf8').includes(`id="${m[3]}"`))errors.push({connection:c.id,missingAnchor:link});
}
const baseline=JSON.parse(fs.readFileSync(`${dir}/baseline-hashes.json`));
const changed=Object.entries(baseline).filter(([f,sha])=>!fs.existsSync(f)||digest(f)!==sha).map(([f])=>f);
// Concurrent changes are reported, never reset or silently attributed to this task.
const report={checkedAt:new Date().toISOString(),results,errors,localReferences,connectionLinks,baselineFiles:Object.keys(baseline).length,changedOutside197:changed,scope:'Stage 1: text citations, draft figure manifests, isolated rendering. Public asset copies and bilingual booklet PDFs remain Stage 2.'};
fs.writeFileSync(`${dir}/validation.json`,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));process.exitCode=errors.length?1:0;
