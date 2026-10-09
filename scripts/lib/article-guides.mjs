import {citationMarkdown} from './citations.mjs';

const languages=['ja','en'];
const bilingual=(value,name)=>{for(const lang of languages)if(!value?.[lang]?.trim())throw Error(`Missing ${name}/${lang}`);};
export function validateGuide(registry,guide,markdown,figures=''){
 if(!registry.sources[guide.selfSource]?.internal)throw Error('Missing internal manuscript source');
 if(!Array.isArray(guide.externalSources)||new Set(guide.externalSources).size!==guide.externalSources.length)throw Error('Duplicate or missing external source list');
 for(const key of guide.externalSources){
  const s=registry.sources[key];
  if(!s||s.internal||!s.authors?.trim()||!s.version?.trim())throw Error(`Incomplete external source: ${key}`);
  bilingual(s.guideRole,`source role ${key}`);
  if(s.guideVersion)bilingual(s.guideVersion,`source version ${key}`);
 }
 for(const tag of ['reference-guide','reading-list']){
  if(markdown.split(`<!-- ${tag} -->`).length!==2||markdown.split(`<!-- /${tag} -->`).length!==2)throw Error(`Missing or repeated ${tag}`);
 }
 const diagramAt=markdown.indexOf('](diagrams/');
 if(diagramAt<0||markdown.indexOf('<!-- /reference-guide -->')>diagramAt)throw Error('Reference guide must precede proof diagrams');
 if(markdown.indexOf('<!-- reading-list -->')<markdown.lastIndexOf('](diagrams/'))throw Error('Reading list must follow proofs');
 const used=[...markdown.matchAll(/<!-- cite:([a-z0-9-]+) -->/g),...figures.matchAll(/\\Cite\{([^}]+)\}/g)].map(m=>m[1]);
 for(const id of used){const cite=registry.citations[id];if(!cite)throw Error(`Unknown citation: ${id}`);
  if(cite.source!==guide.selfSource&&!guide.externalSources.includes(cite.source))throw Error(`Undefined external source: ${cite.source}`);
 }
 const sections=markdown.split(/(?=^## )/m).filter(s=>s.includes('](diagrams/'));
 if(!guide.proofTargets?.length||sections.length!==guide.proofTargets.length)throw Error('Every proof section needs a target');
 sections.forEach((s,i)=>{
  const cite=registry.citations[guide.proofTargets[i]];
  if(!cite||cite.source!==guide.selfSource||!s.includes(`<!-- proof-target:${i+1} -->`))throw Error(`Missing proof target ${i+1}`);
  const target=cite.locations[0].result.match(/^(?:Theorem|Corollary|Proposition|Lemma) \d+(?:\.\d+)*/)?.[0]??cite.locations[0].result;
  if(!s.split('\n')[0].includes(target))throw Error(`Proof heading must name ${target}`);
 });
 if(!guide.readingList?.length)throw Error('Missing source reading list');
 for(const item of guide.readingList){if(!registry.citations[item.citation])throw Error('Unknown reading citation');bilingual(item.purpose,'reading purpose');}
}
export function expandGuides(markdown,registry,guide,lang){
 const en=lang==='en',self=registry.sources[guide.selfSource];
 const intro=en?`Unprefixed theorem, lemma, section and equation numbers refer to [${self.displayName}](${self.url}). External inputs use the following keys.`:`略号のない定理・補題・節・式番号は本原稿 [${self.displayName}](${self.url}) を指します。外部入力には次の略号を使います。`;
 const list=guide.externalSources.map(key=>{const s=registry.sources[key];return `- [${key}](${s.url}) ${s.authors} — *${s.displayName}*${en?': ':'：'}${s.guideRole[lang]}${en?'. ':'。'}${s.guideVersion?.[lang]??s.version}${en?'.':'。'}`;}).join('\n');
 const note=en?'Each citation gives the result and pages. When printed pagination differs from the PDF position, both are shown. GitHub previews do not automatically jump to the cited page.':'各引用に結果番号とページを付します。誌面番号とPDF内の位置が異なる場合は両方を示します。GitHubの閲覧リンクではページ位置への自動移動を前提としません。';
 const references=intro+'\n\n'+(list||(en?'No external proof inputs are recorded.':'外部の証明入力は記録していません。'))+'\n\n'+note;
 markdown=markdown.replace(/<!-- reference-guide -->[\s\S]*?<!-- \/reference-guide -->/,`<!-- reference-guide -->\n${references}\n<!-- /reference-guide -->`);
 markdown=markdown.replace(/<!-- proof-target:(\d+) -->[\s\S]*?<!-- \/proof-target -->/g,(_,n)=>`<!-- proof-target:${n} -->${en?'Proof target':'証明対象'}：${citationMarkdown(registry,guide.proofTargets[Number(n)-1],lang)}<!-- /proof-target -->`);
 const reading=guide.readingList.map(item=>`- ${citationMarkdown(registry,item.citation,lang)} — ${item.purpose[lang]}`).join('\n');
 return markdown.replace(/<!-- reading-list -->[\s\S]*?<!-- \/reading-list -->/,`<!-- reading-list -->\n${reading}\n<!-- /reading-list -->`);
}
