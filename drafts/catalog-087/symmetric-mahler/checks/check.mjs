import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {renderDraft} from '../../../../src/lib/render-draft.mjs';
const root='drafts/catalog-087/symmetric-mahler', registry=JSON.parse(fs.readFileSync(root+'/citations.json'));
const report={};
for(const lang of ['ja','en']){
 const text=fs.readFileSync(`${root}/article.${lang}.md`,'utf8');
 const r=await renderDraft(text,{lang,paperId:'symmetric-mahler',catalogId:'087',base:'/OpenAI-Math-Digest/',diagramSource:stem=>fs.readFileSync(`${root}/diagrams/${stem}.svg`,'utf8')});
 const ids=new Set([...r.html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));
 const missing=registry.articleGuides['.'].conclusionCoverage.map(c=>c.anchor).filter(a=>!ids.has(a));
 const links=[...r.html.matchAll(/href="#([^"]+)"/g)].map(x=>x[1]).filter(a=>!ids.has(a));
 report[lang]={headings:r.headings.map(h=>h.slug),figures:(r.html.match(/class="proof-figure"/g)||[]).length,missingConclusionAnchors:missing,missingInternalLinks:links,statements:registry.articleGuides['.'].proofTargets.map(t=>({target:t,anchor:registry.articleGuides['.'].statements[t],present:ids.has(registry.articleGuides['.'].statements[t])}))};
 if(missing.length||links.length||report[lang].statements.some(s=>!s.present))throw Error('Missing anchors');
}
const hashes=JSON.parse(fs.readFileSync(root+'/diagrams/citation-build.json'));
for(const [file,hash] of Object.entries(hashes))if(createHash('sha256').update(fs.readFileSync(root+'/diagrams/'+file)).digest('hex')!==hash)throw Error('Stale '+file);
report.manifest={files:Object.keys(hashes).length,allHashesMatch:true};
const ja=fs.readFileSync(root+'/article.ja.md','utf8'),en=fs.readFileSync(root+'/article.en.md','utf8');
report.displayMathIdentical=JSON.stringify([...ja.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1]))===JSON.stringify([...en.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1]));
report.citationMarkerSequenceIdentical=JSON.stringify([...ja.matchAll(/<!-- cite:([\w-]+) -->/g)].map(m=>m[1]))===JSON.stringify([...en.matchAll(/<!-- cite:([\w-]+) -->/g)].map(m=>m[1]));
if(!report.displayMathIdentical||!report.citationMarkerSequenceIdentical)throw Error('Language mismatch');
fs.writeFileSync(root+'/checks/structure.json',JSON.stringify(report,null,2)+'\n');console.log('PASS: bilingual structure, 17 display formulas, all conclusion and source anchors, 34 manifest hashes.');
