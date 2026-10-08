const fs=require('fs');const path=require('path');
const sharp=require('/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{for(const f of fs.readdirSync(__dirname).filter(x=>x.endsWith('.svg'))){await sharp(path.join(__dirname,f),{density:144}).resize({width:1300}).flatten({background:'#ffffff'}).png().toFile(path.join(__dirname,f.replace(/svg$/,'png')));console.log(f);}})();
