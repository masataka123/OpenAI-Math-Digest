import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root='coordination/catalog-305', dir=`${root}/screens`;
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[];
const filters=process.argv.slice(2);
const files=fs.readdirSync(`${root}/preview`).filter(f=>f.endsWith('.html')&&(!filters.length||filters.some(prefix=>f.startsWith(prefix))));
for(const file of files)for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});
 await page.goto(`http://127.0.0.1:8305/coordination/catalog-305/preview/${file}`,{waitUntil:'networkidle'});
 const stem=file.replace('.html','')+`-${width}`;
 await page.screenshot({path:`${dir}/${stem}-top.png`});
 const sections=['results','diagram-sources','papers','inventory','manuscripts','proof-overview','proof-1','connections','dependencies'];
 for(const id of sections){const el=page.locator(`#${id}`);if(await el.count()){
  await el.evaluate(e=>window.scrollTo(0,e.getBoundingClientRect().top+window.scrollY-100));await page.screenshot({path:`${dir}/${stem}-${id}.png`});
 }}
 const details=await page.evaluate(()=>({
  viewport:innerWidth,bodyWidth:document.documentElement.scrollWidth,
  mathErrors:[...document.querySelectorAll('[data-mjx-error]')].map(x=>x.getAttribute('data-mjx-error')),
  figures:document.querySelectorAll('.proof-figure').length,
  sourceLines:document.querySelectorAll('.source-line').length,
  statements:document.querySelectorAll('.theorem-statement').length,
  referenceItems:document.querySelectorAll('#diagram-sources li').length,
  inventoryColumns:document.querySelectorAll('.catalog-inventory thead th').length,
  languageSwitch:!!document.querySelector('.language-switch'),
  missingLocalAnchors:[...document.querySelectorAll('a[href^="#"]')].map(x=>x.getAttribute('href').slice(1)).filter(id=>id&&!document.getElementById(decodeURIComponent(id))),
  overflow:[...document.querySelectorAll('.digest-table-wrap,.proof-diagram,.math-display')].filter(x=>x.scrollWidth>x.clientWidth+2).map(x=>({className:x.className,width:x.clientWidth,scrollWidth:x.scrollWidth}))
 }));
 if(!file.startsWith('reference-')){
  const fig=page.locator('.proof-figure');
  for(let i=0;i<await fig.count();i++){
   await fig.nth(i).scrollIntoViewIfNeeded();
   if(width===1280)await fig.nth(i).screenshot({path:`${dir}/${stem}-figure-${i+1}.png`,style:'.site-chrome { visibility: hidden !important; }'});
  }
  if(width===1280&&await page.locator('.catalog-inventory').count())await page.locator('.digest-table-wrap').first().screenshot({path:`${dir}/${stem}-inventory.png`,style:'.site-chrome { visibility: hidden !important; }'});
 }
 results.push({file,width,sourceHtmlSha256:createHash('sha256').update(fs.readFileSync(`${root}/preview/${file}`)).digest('hex'),...details});await page.close();
}
await browser.close();
const prior=filters.length&&fs.existsSync(`${root}/screen-checks.json`)?JSON.parse(fs.readFileSync(`${root}/screen-checks.json`)).filter(r=>!files.includes(r.file)):[];
fs.writeFileSync(`${root}/screen-checks.json`,JSON.stringify([...prior,...results],null,2)+'\n');
console.log(JSON.stringify(results.map(r=>({file:r.file,width:r.width,overflow:r.bodyWidth>r.viewport,mathErrors:r.mathErrors,missingAnchors:r.missingLocalAnchors})),null,2));
