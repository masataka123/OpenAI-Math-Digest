// Run through cua_repl with its documented tab/viewport handles. No second browser driver.
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {hash,readJSON,writeJSON} from './common.mjs';

export async function runBrowserReview({tab,viewport,runDirectory,origin,widths=[1280,375,320]}){
 const report=await readJSON(path.join(runDirectory,'report.json'));
 if(!report.dist||!report.routes)throw Error('Prepare this run before inspecting its pages.');
 const record={version:1,startedAt:new Date().toISOString(),siteFingerprint:report.siteFingerprint,manifestHash:report.manifestHash,status:'running',conditions:[],viewer:[],screenshots:[],manualReview:{approved:false},limitation:'Desktop browser viewport checks; no physical-device testing.'};
 const screenDirectory=path.join(runDirectory,'screens');await mkdir(screenDirectory,{recursive:true});
 const save=()=>writeJSON(path.join(runDirectory,'review.json'),record);
 try{
  for(const width of widths){
   await viewport.set({width,height:900});
   for(const target of report.routes){
    await tab.goto(origin.replace(/\/$/,'')+'/OpenAI-Math-Digest/'+target.route);
    await tab.playwright.waitForLoadState({state:'load',timeoutMs:30000});
    await tab.getAXState({emit:false});
    if(target.kind==='catalog'&&target.pages.some(page=>page.label)){
     for(const page of target.pages){await tab.playwright.getByRole('link',{name:page.label,exact:true}).click();await tab.getAXState({emit:false});await tab.playwright.waitForLoadState({state:'networkidle',timeoutMs:30000});}
     if(width===1280){
      await tab.playwright.getByRole('link',{name:'漫画2枚目を拡大して読む',exact:true}).click();await tab.getAXState({emit:false});await tab.playwright.waitForLoadState({state:'networkidle',timeoutMs:30000});
      await tab.pressKey(null,'Escape');await tab.getAXState({emit:false});
     }
     await tab.playwright.getByRole('link',{name:target.pages[0].label,exact:true}).click();await tab.getAXState({emit:false});
    }
    // The browser's load wait includes the displayed image requests. Evaluation only reads DOM state.
    const actual=await tab.playwright.evaluate(()=>{
     const images=[...document.querySelectorAll('.comic-page picture img')];
     return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,title:document.querySelector('h1')?.textContent,
      images:images.map(i=>({complete:i.complete,width:i.naturalWidth,height:i.naturalHeight,src:i.getAttribute('src')})),labels:[...document.querySelectorAll('.comic-page-number')].map(e=>e.textContent),
      ids:[...document.querySelectorAll('[data-comic-catalog]')].map(e=>e.getAttribute('data-comic-catalog')),
      pending:!!document.querySelector('.comic-pending'),author:[...document.querySelectorAll('.comic-author-note p')].map(p=>p.textContent).join('\n\n').trim(),
      summary:document.querySelector('#fields .section-head')?.textContent,
      links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href'))};
    });
    const issues=[];if(actual.scrollWidth>width)issues.push('Horizontal overflow');
    if(target.kind==='catalog'){
     if(actual.images.length!==target.pages.length||actual.images.some((i,n)=>!i.complete||i.width!==target.pages[n].width||i.height!==target.pages[n].height))issues.push('Image load/dimensions differ');
     if(actual.images.some((image,n)=>image.src!==`/OpenAI-Math-Digest/${target.pages[n].png}`))issues.push('Image order differs');
     if(target.pages.some((page,n)=>page.label&&(!actual.labels[n]?.includes(`${n+1}枚目：${page.label}`)||!actual.links.includes(`#comic-page-${n+1}`))))issues.push('Edition labels/navigation differ');
     if(target.supplement.status==='approved'){if(actual.author!==target.supplement.text.trim()||actual.pending)issues.push('Author supplement differs');}
     else if(!actual.pending||actual.author)issues.push('Author pending state differs');
    }
    if(target.kind==='field'&&JSON.stringify(actual.ids)!==JSON.stringify(target.ids))issues.push('Field list differs');
    if(target.kind==='home'&&!actual.summary?.includes(`${target.fields}分野・${target.count}カタログ`))issues.push('Home counts differ');
    record.conditions.push({route:target.route,kind:target.kind,width,actual,issues});
    if((width===1280&&target.kind!=='home')||(width===375&&(target.kind==='home'||target===report.routes.at(-1)))){
     const name=target.route.replaceAll('/','-')+width+'.jpg',bytes=await tab.screenshot({fullPage:true});
     await writeFile(path.join(screenDirectory,name),bytes);record.screenshots.push({file:'screens/'+name,sha256:hash(bytes)});
    }
   }
  }
  const first=report.routes.find(r=>r.kind==='catalog');await viewport.set({width:375,height:900});
  await tab.goto(origin.replace(/\/$/,'')+'/OpenAI-Math-Digest/'+first.route+'#comic');await tab.playwright.waitForLoadState({state:'load',timeoutMs:30000});await tab.getAXState({emit:false});
  await tab.playwright.getByRole('link',{name:'漫画1枚目を拡大して読む',exact:true}).click();await tab.getAXState({emit:false});
  await tab.playwright.waitForLoadState({state:'networkidle',timeoutMs:30000});
  record.viewer.push(await tab.playwright.evaluate(()=>{const i=document.querySelector('.comic-viewer-image');return {step:'fit',open:!!document.querySelector('dialog[open]'),loaded:i.complete&&i.naturalWidth>0,percent:document.querySelector('dialog output')?.textContent};}));
  const fit=await tab.screenshot({fullPage:false});await writeFile(path.join(screenDirectory,'viewer-fit-375.jpg'),fit);record.screenshots.push({file:'screens/viewer-fit-375.jpg',sha256:hash(fit)});
  await tab.playwright.getByRole('button',{name:'100%',exact:true}).click();await tab.getAXState({emit:false});record.viewer.push(await tab.playwright.evaluate(()=>({step:'actual',percent:document.querySelector('dialog output')?.textContent})));
  await tab.playwright.getByRole('button',{name:'拡大',exact:true}).click();await tab.getAXState({emit:false});record.viewer.push(await tab.playwright.evaluate(()=>({step:'zoom',percent:document.querySelector('dialog output')?.textContent})));
  await tab.playwright.getByRole('button',{name:'全体表示',exact:true}).click();await tab.getAXState({emit:false});
  await tab.pressKey(null,'Escape');await tab.getAXState({emit:false});record.viewer.push(await tab.playwright.evaluate(()=>({step:'closed',closed:!document.querySelector('dialog[open]'),focusRestored:document.activeElement?.getAttribute('data-comic-trigger')!==null})));
  if(first.pages.length>1){
   await tab.playwright.getByRole('link',{name:'漫画2枚目を拡大して読む',exact:true}).click();await tab.getAXState({emit:false});await tab.playwright.waitForLoadState({state:'networkidle',timeoutMs:30000});
   const second=await tab.playwright.evaluate(()=>{const image=document.querySelector('.comic-viewer-image');return {step:'second-page',loaded:image.complete&&image.naturalWidth>0,src:image.getAttribute('src')};});record.viewer.push(second);
   if(!second.loaded||![first.pages[1].png,first.pages[1].webp].filter(Boolean).some(file=>second.src.endsWith(file)))throw Error('Second image viewer differs');
   await tab.playwright.getByRole('button',{name:'100%',exact:true}).click();await tab.getAXState({emit:false});
   await tab.playwright.getByRole('button',{name:'拡大',exact:true}).click();await tab.getAXState({emit:false});
   const zoom=await tab.playwright.evaluate(()=>({step:'second-page-zoom',percent:document.querySelector('dialog output')?.textContent}));record.viewer.push(zoom);if(zoom.percent!=='130%')throw Error('Second image zoom failed');
   await tab.pressKey(null,'Escape');await tab.getAXState({emit:false});
  }
  if(record.conditions.some(r=>r.issues.length)||!record.viewer[0].loaded||record.viewer[1].percent!=='100%'||record.viewer[2].percent!=='130%'||!record.viewer[3].closed||!record.viewer[3].focusRestored)throw Error('Browser checks failed; inspect review.json.');
  record.status='passed';
 }catch(error){record.status='failed';record.error=error.message;throw error;}
 finally{record.finishedAt=new Date().toISOString();await viewport.reset();await save();}
 return {status:record.status,conditions:record.conditions.length,screenshots:record.screenshots.map(s=>path.join(runDirectory,s.file)),manualReview:'required'};
}

export async function approveVisualReview(directory,{reviewer,notes}){
 if(!reviewer?.trim()||!notes?.trim())throw Error('Record who inspected the screenshots and what they found.');
 const report=await readJSON(path.join(directory,'report.json')),review=await readJSON(path.join(directory,'review.json'));
 if(review.status!=='passed'||review.siteFingerprint!==report.siteFingerprint||review.manifestHash!==report.manifestHash)throw Error('No passing browser check for this prepared version.');
 for(const route of report.routes)for(const width of [1280,375,320])if(!review.conditions.some(c=>c.route===route.route&&c.width===width&&!c.issues.length))throw Error('Browser coverage is incomplete.');
 if(!review.screenshots.length)throw Error('No screenshots');
 for(const screen of review.screenshots)if(hash(await readFile(path.join(directory,screen.file)))!==screen.sha256)throw Error('Screenshot changed after inspection.');
 review.manualReview={approved:true,reviewer,notes,recordedAt:new Date().toISOString()};await writeJSON(path.join(directory,'review.json'),review);return review.manualReview;
}
