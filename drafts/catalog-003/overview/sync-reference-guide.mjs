// Overview bibliography from the shared citation registry; no mathematical prose is generated.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadCitations} from '../../../scripts/lib/citations.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url));
const registry=loadCitations(path.join(dir,'citations.json'));
const keys=['OpenAI26QR78','OpenAI26QR1112','OpenAI26LS'];
for(const lang of ['ja','en']){
 const en=lang==='en';
 const lines=keys.map(key=>{const s=registry.sources[key];return `- [${key}](${s.url}) ${s.authors.join(', ')} — *${s.title}*. ${s.version}. ${s.guideRole[lang]}${en?'.':'。'}`;});
 const block='<!-- reference-guide -->\n'+(en?'**Manuscripts cited in the diagram**':'**図で参照する原稿**')+'\n\n'+lines.join('\n')+'\n<!-- /reference-guide -->';
 const f=path.join(dir,`article.${lang}.md`),old=fs.readFileSync(f,'utf8'),next=old.replace(/<!-- reference-guide -->[\s\S]*?<!-- \/reference-guide -->/,block);
 if(process.argv.includes('--check')){if(old!==next)throw Error(`Stale overview reference guide: ${f}`);}else fs.writeFileSync(f,next);
}
console.log('Overview reference guide '+(process.argv.includes('--check')?'checked':'updated')+'.');
