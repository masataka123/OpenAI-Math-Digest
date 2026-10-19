import {readFile, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {chromium} from 'playwright-core';

// Stable IDs connect Chromium's SVG coordinates to the same WeasyPrint layout.
export function identifySVGs(html) {
 let index=0;
 return html.replace(/<svg\b/g,()=>`<svg data-pdf-figure="svg-${index++}"`);
}

export async function collectFigureLinks(htmlPath, outputPath) {
 const html=await readFile(htmlPath,'utf8');
 const browser=await chromium.launch(process.env.PDF_BROWSER_PATH
  ? {executablePath:process.env.PDF_BROWSER_PATH,headless:true}
  : {channel:'chrome',headless:true});
 try {
  const page=await browser.newPage({viewport:{width:1200,height:1500}});
  // The prepared document embeds its diagrams; source hyperlinks are never fetched.
  await page.route('**/*',route=>route.abort());
  await page.setContent(html,{waitUntil:'load'});
  await page.evaluate(()=>document.fonts.ready);
  const figures=await page.evaluate(()=>{
   const svgs=[...document.querySelectorAll('.proof-diagram > svg')];
   for(const a of document.querySelectorAll('svg a')) {
    if(!svgs.some(svg=>svg.contains(a)))throw Error('Linked SVG outside a proof-diagram');
   }
   return svgs.map(svg=>{
    const vb=svg.viewBox.baseVal;
    if(!(vb.width>0&&vb.height>0))throw Error('Proof SVG needs a positive viewBox');
    // Measure at its natural aspect ratio, independent of screen/print constraints.
    svg.style.cssText=`display:block;width:${vb.width}px;height:${vb.height}px;max-width:none;max-height:none`;
    const bounds=svg.getBoundingClientRect();
    const links=[...svg.querySelectorAll('a')].map(a=>{
     const url=a.getAttribute('href')||a.getAttribute('xlink:href');
     const r=a.getBoundingClientRect();
     if(!url||!(r.width>0&&r.height>0))throw Error('Empty SVG link or link area');
     if(!/^(https?:|mailto:|#)/.test(url))throw Error('Unsupported SVG link: '+url);
     const link={url,x:(r.x-bounds.x)/bounds.width,y:(r.y-bounds.y)/bounds.height,
      width:r.width/bounds.width,height:r.height/bounds.height};
     if(link.x < -0.001||link.y < -0.001||link.x+link.width>1.001||link.y+link.height>1.001)
      throw Error('SVG link outside the viewBox: '+url);
     return link;
    });
    return {id:svg.dataset.pdfFigure,label:svg.getAttribute('aria-label'),
     viewBox:[vb.x,vb.y,vb.width,vb.height],preserveAspectRatio:svg.getAttribute('preserveAspectRatio')||'xMidYMid meet',links};
   });
  });
  const result={htmlSha256:createHash('sha256').update(html).digest('hex'),figures};
  await writeFile(outputPath,JSON.stringify(result,null,2)+'\n');
  return result;
 } finally {await browser.close();}
}
