export async function ready(page){
 await page.waitForFunction(()=>window.MathJax?.startup?.promise,{timeout:30000});
 await page.evaluate(async()=>{
  await Promise.race([Promise.all([window.MathJax.startup.promise,document.fonts.ready]),
   new Promise((_,reject)=>setTimeout(()=>reject(Error('MathJax/fonts did not finish in 30 seconds')),30000))]);
 });
}

// Runs in the browser. Allow horizontal scrolling only when the content is reachable.
export function inspectPage(){
 const issues=[],scrollAreas=[];
 const viewport=innerWidth,width=document.documentElement.scrollWidth;
 if(width>viewport+1)issues.push(`Document overflows: ${width}px / ${viewport}px`);
 const mathErrors=document.querySelectorAll('mjx-merror,[data-mjx-error],[data-mml-node="merror"]').length;
 if(mathErrors)issues.push(`MathJax errors: ${mathErrors}`);
 if(!document.querySelector('.ai-notice'))issues.push('Missing AI notice');
 const brokenImages=[...document.images].filter(img=>!img.complete||img.naturalWidth===0).map(img=>img.getAttribute('src'));
 if(brokenImages.length)issues.push(`Broken images: ${brokenImages.join(', ')}`);
 for(const e of document.querySelectorAll('.proof-diagram,.digest-table-wrap,.math-display,mjx-container[display="true"]')){
  if(e.getClientRects().length===0||e.scrollWidth<=e.clientWidth+2)continue;
  let container=e,scrollable=false;
  while(container&&container!==document.body){
   const overflow=getComputedStyle(container).overflowX;
   if(['auto','scroll'].includes(overflow)&&container.scrollWidth>container.clientWidth+2){
    const before=container.scrollLeft;container.scrollLeft=container.scrollWidth;
    scrollable=Math.abs(container.scrollLeft)>0;container.scrollLeft=before;break;
   }
   if(['hidden','clip'].includes(overflow))break;
   container=container.parentElement;
  }
  const info={element:e.tagName,section:e.closest('section')?.id??null,width:e.clientWidth,scrollWidth:e.scrollWidth,scrollable};
  scrollAreas.push(info);if(!scrollable)issues.push(`Clipped content: ${JSON.stringify(info)}`);
 }
 const diagrams=[...document.querySelectorAll('.proof-diagram > svg')].map(svg=>{
  const r=svg.getBoundingClientRect(),vb=svg.viewBox.baseVal;
  return {width:r.width,height:r.height,viewBox:[vb.x,vb.y,vb.width,vb.height]};
 });
 if(diagrams.some(d=>!(d.width>0&&d.height>0&&d.viewBox[2]>0&&d.viewBox[3]>0)))issues.push('Empty proof diagram');
 return {issues,viewport,documentWidth:width,mathCount:document.querySelectorAll('mjx-container').length,mathErrors,
  brokenImages,scrollAreas,diagrams,statements:document.querySelectorAll('.theorem-statement').length};
}

export async function checkViewers(page){
 const figures=page.locator('.proof-figure'),results=[];
 for(let i=0;i<await figures.count();i++){
  const figure=figures.nth(i),link=figure.locator('.diagram-tools a[href$=".svg"]').first();
  if(!await link.count())throw Error(`Figure ${i+1}: missing enlargement link`);
  const original=await figure.locator('.proof-diagram svg a').evaluateAll(es=>es.map(e=>e.getAttribute('href')??e.getAttribute('xlink:href')));
  await link.click();
  const dialog=page.locator('dialog.diagram-viewer[open]');await dialog.waitFor({state:'visible'});
  const canvas=dialog.locator('.diagram-viewer-canvas');
  const copied=await canvas.locator('svg a').evaluateAll(es=>es.map(e=>e.getAttribute('href')??e.getAttribute('xlink:href')));
  // Fragment references within a cloned SVG have intentionally renamed IDs.
  const linksMatch=original.length===copied.length&&original.every((url,j)=>url===copied[j]||
   (url?.startsWith('#')&&new RegExp('^#viewer-\\d+-'+url.slice(1).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'$').test(copied[j])));
  if(!linksMatch)throw Error(`Figure ${i+1}: source links changed in viewer`);
  const before=await canvas.evaluate(e=>e.getBoundingClientRect().width);
  await dialog.locator('[data-zoom="in"]').click();
  const after=await canvas.evaluate(e=>e.getBoundingClientRect().width);
  if(after<=before)throw Error(`Figure ${i+1}: zoom did not enlarge`);
  await dialog.locator('[data-fit]').click();
  const fit=await dialog.locator('.diagram-viewer-scroll').evaluate(e=>({width:e.clientWidth,canvas:e.querySelector('.diagram-viewer-canvas').getBoundingClientRect().width}));
  if(fit.canvas>fit.width+1)throw Error(`Figure ${i+1}: fit did not fit`);
  await dialog.locator('[data-close]').click();await dialog.waitFor({state:'hidden'});
  results.push({figure:i+1,links:original.length,zoom:true,fit:true,close:true});
 }
 return results;
}

export async function checkLanguage(page,target,origin,base){
 const hash=await page.evaluate(()=>['sources','inventory','results','content'].find(id=>document.getElementById(id))??'content');
 await page.evaluate(id=>{location.hash=id;window.scrollTo(0,document.body.scrollHeight);},hash);
 const switcher=page.locator('.language-switch');
 const box=await switcher.boundingBox();
 if(!box||box.x<0||box.y<0||box.x+box.width>page.viewportSize().width+1||box.y+box.height>page.viewportSize().height)
  throw Error('Language switch is not visible after scrolling');
 const other=target.lang==='ja'?'en':'ja';
 const expected=origin+base+other+'/'+target.route+'#'+encodeURIComponent(hash);
 const link=page.locator('#language');
 await page.waitForFunction(({expected})=>document.getElementById('language')?.href===expected,{expected});
 await link.click();await page.waitForURL(expected);await ready(page);
 if(await page.locator('html').getAttribute('lang')!==other)throw Error('Language switch did not change language');
 if(!await page.evaluate(id=>Boolean(document.getElementById(id)),hash))throw Error(`Missing translated anchor: ${hash}`);
 return {to:other,hash,visibleAfterScroll:true};
}
