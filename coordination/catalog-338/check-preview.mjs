import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import sharp from 'sharp';
const root=process.cwd(),out=path.join(root,'coordination/catalog-338/evidence/preview'),shots=path.join(root,'coordination/catalog-338/evidence/screenshots');fs.mkdirSync(shots,{recursive:true});
const browser=await chromium.launch({headless:true,channel:"chrome"});const results=[];
for(const lang of ['ja','en'])for(const width of [1440,375]){
 const page=await browser.newPage({viewport:{width,height:1000}});
 for(const name of ['article','overview','reference-034','reference-schnell','reference-orbifold']){
  const file=path.join(out,`${name}.${lang}.html`);if(!fs.existsSync(file))continue;
  await page.goto('file://'+file,{waitUntil:'load'});
  await page.addStyleTag({content:'* { scroll-behavior: auto !important; }'});
  results.push(await page.evaluate(({name,lang,width})=>({name,lang,width,documentWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('g[data-mml-node="merror"]').length,figures:document.querySelectorAll('.proof-figure').length}),{name,lang,width}));
  const targets=name==='article'?['#results','#diagram-sources','#proof-1','#theorem-6-3','#proposition-9-2','#proof-1-step-1','#proof-2-step-1']:name==='overview'?['#papers']:name==='reference-034'?['.catalog-inventory']:['#diagram-sources',name==='reference-schnell'?'#argument':'#proof-1'];
  for(const target of targets){const loc=page.locator(target).first();if(!await loc.count())continue;await loc.evaluate(el=>window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-100,behavior:'instant'}));await page.screenshot({path:path.join(shots,`${name}-${lang}-${width}-${target.replace(/[^a-z0-9]/g,'')}.png`)});}
 }
 await page.close();
}
await browser.close();
for(const lang of ['ja','en'])for(const stem of ['main','joint','coordinates'])await sharp(path.join(root,`drafts/catalog-338/yau-uniformization/diagrams/${stem}.${lang}.svg`),{density:150}).resize({width:1100}).png().toFile(path.join(shots,`figure-${stem}-${lang}.png`));
fs.writeFileSync(path.join(root,'coordination/catalog-338/evidence/screen-validation.json'),JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify(results,null,2));
