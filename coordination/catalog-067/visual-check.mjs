import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const out='coordination/catalog-067/validation';fs.mkdirSync(out+'/screens',{recursive:true});
const overviewOnly=process.argv.includes('--overview-only');
const specs=JSON.parse(fs.readFileSync(out+'/preview/structure.json')).filter(s=>!overviewOnly||s.id==='overview');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const page=await browser.newPage();const report=overviewOnly?JSON.parse(fs.readFileSync(out+'/visual-checks.json')).report.filter(s=>s.id!=='overview'):[];const issues=[];page.on('pageerror',e=>issues.push(String(e)));
for(const spec of specs)for(const width of [1280,375]){
 await page.setViewportSize({width,height:950});await page.goto(`http://127.0.0.1:43867/preview/${spec.id}.${spec.lang}.html`);await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await MathJax.startup.promise;await document.fonts.ready;});
 const m=await page.evaluate(()=>({pageWidth:document.documentElement.scrollWidth,viewport:innerWidth,mathErrors:document.querySelectorAll('[data-mml-node="merror"]').length,mathCount:document.querySelectorAll('mjx-container').length,figures:document.querySelectorAll('.proof-figure').length}));
 await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});
 for(const [sel,label] of spec.id==='overview'?[['.catalog-inventory','inventory'],['#connections','connections']]:[['#results','results'],['#diagram-sources','references'],['.proof-section','proof']])if(await page.locator(sel).count())await page.locator(sel).first().screenshot({path:`${out}/screens/${spec.id}.${spec.lang}.${width}.${label}.png`});
 if(width===1280)for(let i=0;i<m.figures;i++)await page.locator('.proof-diagram').nth(i).screenshot({path:`${out}/screens/${spec.id}.${spec.lang}.figure-${i+1}.png`});
 report.push({...spec,width,...m});
}
if(!overviewOnly)for(const lang of ['ja','en'])for(const [name,route,sel] of [['034','catalog/034/','.catalog-inventory'],['schnell','papers/schnell-fiber-spaces/','#argument'],['orbifold','papers/orbifold-logarithmic-iitaka/','#diagram-sources']])for(const width of [1280,375]){
 await page.setViewportSize({width,height:950});await page.goto(`http://127.0.0.1:43867/OpenAI-Math-Digest/${lang}/${route}`);await page.waitForFunction(()=>typeof window.MathJax?.typesetPromise==='function');await page.evaluate(async()=>{await MathJax.startup.promise;await document.fonts.ready;});await page.addStyleTag({content:'.site-chrome{visibility:hidden!important}'});await page.locator(sel).screenshot({path:`${out}/screens/reference-${name}.${lang}.${width}.png`});
}
for(const lang of ['ja','en'])for(const stem of ['main','four','numerical','recognition','albanese','ke']){
 await page.setViewportSize({width:1100,height:1500});
 await page.goto(`http://127.0.0.1:43867/OpenAI-Math-Digest/diagrams/catalog-067/campana-peternell-six/${stem}.${lang}.svg`);
 await page.locator('svg').screenshot({path:`${out}/screens/raw-${stem}.${lang}.png`});
}
fs.writeFileSync(out+'/visual-checks.json',JSON.stringify({report,issues},null,2)+'\n');await browser.close();console.log(JSON.stringify({pages:report.length,issues,failures:report.filter(x=>x.pageWidth!==x.width||x.mathErrors>0)},null,2));
