import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const here=path.dirname(fileURLToPath(import.meta.url));fs.mkdirSync(path.join(here,'checks'),{recursive:true});
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const results=[];
for(const lang of ['ja','en'])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:1000}});await page.goto('file://'+path.join(here,`preview.${lang}.html`));
 await page.addStyleTag({content:'html,*{scroll-behavior:auto!important}'});
 const check=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('[data-mjx-error], [data-mml-node="merror"]').length,proofSections:document.querySelectorAll('.proof-section').length,figures:document.querySelectorAll('.proof-figure').length}));
 await page.screenshot({path:path.join(here,`checks/article-${lang}-${width}.png`)});
 await page.locator('#proof-2').evaluate(el=>el.scrollIntoView({block:'start'}));await page.screenshot({path:path.join(here,`checks/statement-${lang}-${width}.png`)});
 await page.locator('#diagram-sources').evaluate(el=>el.scrollIntoView({block:'start'}));await page.screenshot({path:path.join(here,`checks/references-${lang}-${width}.png`)});
 if(width===1280){let i=0;for(const f of await page.locator('.proof-diagram').all())await f.screenshot({path:path.join(here,`checks/diagram-${lang}-${++i}.png`)});}
 results.push({lang,...check});await page.close();
}
fs.writeFileSync(path.join(here,'checks/preview.json'),JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify(results));await browser.close();
