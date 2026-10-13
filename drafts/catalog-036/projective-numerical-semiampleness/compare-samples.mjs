import fs from 'node:fs';
import path from 'node:path';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=path.resolve('drafts/catalog-036/projective-numerical-semiampleness'),out=root+'/qa';
const repo=process.cwd();
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
for(const lang of ['ja','en'])for(const paper of ['schnell-fiber-spaces','orbifold-logarithmic-iitaka']){
 let html=fs.readFileSync(`dist/${lang}/papers/${paper}/index.html`,'utf8').replaceAll('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js','file://'+repo+'/node_modules/mathjax-full/es5/tex-svg.js').replaceAll('"/OpenAI-Math-Digest/','"file://'+repo+'/dist/');
 const file=out+`/sample-${paper}.${lang}.html`;fs.writeFileSync(file,html);
 for(const width of [1280,375]){
  const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});await page.goto('file://'+file);await page.evaluate(()=>MathJax.startup.promise);
  const selector=paper==='schnell-fiber-spaces'?'.theorem-statement':'.figure-key';
  const loc=page.locator(selector).first();await loc.screenshot({path:out+`/sample-${paper}.${lang}-${width}.png`});await page.close();
 }
}
await browser.close();console.log('Schnell statement and Orbifold Iitaka reference-guide screenshots recorded in both languages and widths.');
