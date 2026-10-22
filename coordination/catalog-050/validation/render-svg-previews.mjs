import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=process.cwd(),dir='drafts/catalog-050/ample-quadric/diagrams',out='coordination/catalog-050/validation/figures';
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const files=[];
for(const name of fs.readdirSync(dir).filter(n=>n.endsWith('.svg')).sort()){
 const page=await browser.newPage({viewport:{width:1600,height:1400},deviceScaleFactor:1});
 await page.goto('file://'+path.join(root,dir,name));
 await page.locator('svg').screenshot({path:path.join(out,name+'.png')});
 files.push({source:path.join(dir,name),image:path.join(out,name+'.png')});await page.close();
}
await browser.close();
fs.writeFileSync(out+'/images.json',JSON.stringify({sourceIdentity:'../../../../drafts/catalog-050/ample-quadric/diagrams/citation-build.json',files},null,2)+'\n');
console.log('Standalone SVG screenshots saved: '+files.length);
