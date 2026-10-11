// The overview has no theorem inventory: generate its bibliography from its shared registry.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
import {loadCitations} from '../../../scripts/lib/citations.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url));const r=loadCitations(path.join(dir,'citations.json'));
for(const lang of ['ja','en']){
 const lines=r.catalogGuide.sources.map((key,i)=>{const s=r.sources[key];return `- [${key}](${s.url}) ${s.authors} — *${s.title}*. ${s.version}; ${r.catalogGuide.roles[lang][i]}.`;});
 const file=path.join(dir,`article.${lang}.md`),old=fs.readFileSync(file,'utf8');
 const next=old.replace(/<!-- reference-guide -->[\s\S]*?<!-- \/reference-guide -->/,'<!-- reference-guide -->\n'+lines.join('\n')+'\n<!-- /reference-guide -->');
 if(process.argv.includes('--check')){if(next!==old)throw Error('Stale overview guide: '+lang);}else fs.writeFileSync(file,next);
}
