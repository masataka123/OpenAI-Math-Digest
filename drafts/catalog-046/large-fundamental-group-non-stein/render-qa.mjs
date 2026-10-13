import sharp from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
const root=path.dirname(new URL(import.meta.url).pathname);fs.mkdirSync(root+'/qa',{recursive:true});
for(const f of fs.readdirSync(root+'/diagrams').filter(f=>f.endsWith('.svg'))){await sharp(root+'/diagrams/'+f,{density:160}).resize({width:1100}).flatten({background:"#ffffff"}).png().toFile(root+'/qa/'+f.replace('.svg','.png'));}
