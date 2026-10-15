import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=path.resolve('drafts/catalog-039/maximal-seshadri-surfaces');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const checks=[];
for(const stem of ['main','nef','field'])for(const lang of ['ja','en']){
 const page=await browser.newPage({viewport:{width:1250,height:1600},deviceScaleFactor:1});
 await page.setContent('<html><body style="margin:0;padding:20px;background:white">'+fs.readFileSync(`${root}/diagrams/${stem}.${lang}.svg`,'utf8')+'</body></html>');
 const loc=page.locator('svg');await loc.screenshot({path:`${root}/qa/${stem}.${lang}.png`});
 checks.push({stem,lang,links:await page.locator('svg a').count(),bbox:await loc.boundingBox(),drawn:await loc.evaluate(e=>{const b=e.getBBox();return{x:b.x,y:b.y,width:b.width,height:b.height}})});await page.close();
}
await browser.close();fs.writeFileSync(root+'/qa/diagram-checks.json',JSON.stringify(checks,null,2));console.log(checks);
