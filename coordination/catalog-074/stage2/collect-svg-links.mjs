import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {chromium} from '/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const root='public/diagrams/catalog-074',out=[];
const b=await chromium.launch({channel:'chrome',headless:true});
try {for(const dir of fs.readdirSync(root))for(const f of fs.readdirSync(root+'/'+dir).filter(f=>f.endsWith('.svg'))){
 const page=await b.newPage({viewport:{width:1200,height:1500}});const file=root+'/'+dir+'/'+f;
 await page.setContent('<html><body style="margin:0">'+fs.readFileSync(file,'utf8').replace(/<\?xml[^>]*>/,'')+'</body></html>');
 const info=await page.evaluate(()=>{const svg=document.querySelector('svg'),r=svg.getBoundingClientRect();return {label:svg.getAttribute('aria-label'),viewBox:svg.getAttribute('viewBox'),width:r.width,height:r.height,links:[...svg.querySelectorAll('a')].map(a=>{const q=a.getBoundingClientRect();return {url:a.getAttribute('href')||a.getAttribute('xlink:href'),x:(q.x-r.x)/r.width,y:(q.y-r.y)/r.height,width:q.width/r.width,height:q.height/r.height};})};});
 out.push({file,sha256:createHash('sha256').update(fs.readFileSync(file)).digest('hex'),lang:f.includes('.ja.')?'ja':'en',...info});await page.close();
}} finally {await b.close();}
fs.writeFileSync('coordination/catalog-074/stage2/svg-link-geometry.json',JSON.stringify(out,null,2)+'\n');
console.log(out.map(x=>({file:x.file,links:x.links.length})));
