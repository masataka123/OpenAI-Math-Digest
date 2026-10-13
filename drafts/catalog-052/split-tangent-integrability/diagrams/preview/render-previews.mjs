import sharp from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.cjs';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const out=path.dirname(fileURLToPath(import.meta.url)),dir=path.dirname(out);
for(const name of fs.readdirSync(dir).filter(x=>x.endsWith('.svg'))){await sharp(dir+'/'+name,{density:130}).resize({width:1100}).flatten({background:'#ffffff'}).png().toFile(out+'/'+name.replace('.svg','.png'));}
