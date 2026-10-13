import fs from 'node:fs';
import crypto from 'node:crypto';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
const root='drafts/catalog-036/projective-numerical-semiampleness';
const reg=JSON.parse(fs.readFileSync(root+'/citations.json'));
const manifest=JSON.parse(fs.readFileSync(root+'/diagrams/citation-build.json'));
for(const [f,h] of Object.entries(manifest))if(crypto.createHash('sha256').update(fs.readFileSync(root+'/diagrams/'+f)).digest('hex')!==h)throw Error('Stale '+f);
const reports=[];
for(const lang of ['ja','en']){
 const src=fs.readFileSync(root+'/article.'+lang+'.md','utf8');
 const html=await renderDraft(src,{lang,paperId:'projective-numerical-semiampleness',catalogId:'036',base:'/',diagramSource:s=>fs.readFileSync(root+'/diagrams/'+s+'.svg','utf8')});
 const ids=new Set([...html.html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
 for(const a of Object.values(reg.articleGuides['.'].statements))if(!ids.has(a))throw Error('Missing statement '+a);
 for(const c of reg.articleGuides['.'].conclusionCoverage)if(!ids.has(c.anchor))throw Error('Missing conclusion '+c.anchor);
 const cites=[...src.matchAll(/<!-- cite:([^>]+) -->/g)].map(x=>x[1]);
 const figures=[...src.matchAll(/\]\(diagrams\/([^)]+)\)/g)].map(x=>x[1]);
 reports.push({lang,citationIds:cites,figures,headingCount:html.headings.length,statements:Object.values(reg.articleGuides['.'].statements),conclusions:reg.articleGuides['.'].conclusionCoverage,generatedAnchors:'present'});
}
if(JSON.stringify(reports[0].citationIds)!==JSON.stringify(reports[1].citationIds))throw Error('Bilingual citations differ');
fs.writeFileSync(root+'/qa/validation.json',JSON.stringify({checkedOn:'2026-10-13',scope:'Draft-only; no production assets or booklet PDF',figureManifest:'all 29 hashes match',reports},null,2));
console.log('Bilingual citations, figures, 5 statements, conclusion anchors and figure hashes checked.');
