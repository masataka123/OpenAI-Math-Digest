import fs from 'node:fs';
import path from 'node:path';
import {renderDraft} from '../../../src/lib/render-draft.mjs';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root=path.resolve('drafts/catalog-036/projective-numerical-semiampleness'),out=path.join(root,'qa');fs.mkdirSync(out,{recursive:true});
const record=[];
const sample=fs.readFileSync('dist/ja/papers/schnell-fiber-spaces/index.html','utf8');
const commonStyles=[...sample.matchAll(/<link rel="stylesheet" href="\/OpenAI-Math-Digest\/([^"]+)">/g)].map(m=>'<link rel="stylesheet" href="../../../../dist/'+m[1]+'">').join('');
for(const lang of ['ja','en']){
 const result=await renderDraft(fs.readFileSync(`${root}/article.${lang}.md`,'utf8'),{lang,paperId:'projective-numerical-semiampleness',catalogId:'036',base:'/',diagramSource:stem=>fs.readFileSync(`${root}/diagrams/${stem}.svg`,'utf8')});
 const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="../../../../src/styles/atlas.css"><link rel="stylesheet" href="../../../../src/styles/typography.css"><link rel="stylesheet" href="../../../../src/styles/paper.css"><link rel="stylesheet" href="../../../../src/styles/draft-article.css">${commonStyles}<script>window.MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]},svg:{fontCache:'local'}};</script><script src="../../../../node_modules/mathjax-full/es5/tex-svg.js"></script></head><body><main class="paper-article"><header class="family-header"><h1>Numerical Semiampleness of Nef Adjoint Divisors</h1><p class="paper-subtitle">${result.subtitleHtml}</p><p class="lede">${result.ledeHtml}</p></header><div class="draft-body">${result.introHtml}${result.html}</div></main></body></html>`;
 fs.writeFileSync(`${out}/preview.${lang}.html`,html);
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 const reg=JSON.parse(fs.readFileSync(root+'/citations.json'));
 for(const g of Object.values(reg.articleGuides)){for(const a of Object.values(g.statements))if(!ids.has(a))throw Error('Missing statement '+a);for(const c of g.conclusionCoverage)if(!ids.has(c.anchor))throw Error('Missing coverage '+c.anchor);}
 for(const a of [...html.matchAll(/href="#([^"]+)"/g)])if(!ids.has(a[1]))throw Error('Broken anchor '+a[1]);
 record.push({lang,headings:result.headings,anchors:'all statement, conclusion, and body fragment links present'});
}
const browser=await chromium.launch({headless:true,executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"});
for(const lang of ['ja','en'])for(const width of [1280,375]){
 const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});
 await page.goto('file://'+out+'/preview.'+lang+'.html');await page.evaluate(()=>MathJax.startup.promise);await page.screenshot({path:`${out}/${lang}-${width}-top.png`});
 for(const id of ['diagram-sources','proof-1','proof-2','proof-3','proof-4','proof-5']){const loc=page.locator('#'+id);await loc.scrollIntoViewIfNeeded();await loc.screenshot({path:`${out}/${lang}-${width}-${id}.png`});}
 const check=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,mathErrors:document.querySelectorAll('mjx-merror').length,figures:document.querySelectorAll('.proof-figure').length}));record.push({lang,width,...check});await page.close();
}
await browser.close();fs.writeFileSync(`${out}/checks.json`,JSON.stringify(record,null,2));console.log(record);
