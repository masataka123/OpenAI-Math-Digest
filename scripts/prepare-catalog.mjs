import {readFile,writeFile,mkdir,readdir,rename} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {createWriteStream} from 'node:fs';
import {finished} from 'node:stream/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {pdfRuntime} from './pdf/runtime.mjs';
import {gitSnapshot,ensureReviewNotes,collectPreparationArtifacts,renderHandoff,renderReviewEntry} from './preparation-handoff.mjs';

export function parsePreparationArgs(args){
 let catalog,forcePdf=false;
 for(let i=0;i<args.length;i++){
  if(args[i]==='--catalog'&&!catalog&&/^\d{3}$/.test(args[i+1]??''))catalog=args[++i];
  else if(args[i]==='--regenerate-pdf'&&!forcePdf)forcePdf=true;
  else throw Error(`Unknown or incomplete argument: ${args[i]}. Use --catalog NNN [--regenerate-pdf].`);
 }
 if(!catalog)throw Error('Use --catalog NNN. One catalogue is required.');
 return {catalog,forcePdf};
}

export function needsPdfGeneration(result,catalog){
 if(result.code===0)return false;
 const diagnostic=result.output;
 if(new RegExp(`PDF ${catalog}/(?:ja|en) (?:is stale:|does not match its recorded hash\\.)`).test(diagnostic))return true;
 // Only a missing selected output PDF is repairable by generation. Import/build errors are not.
 if(/ENOENT/.test(diagnostic)&&new RegExp(`public/pdf/catalog-${catalog}-(?:ja|en)\\.pdf`).test(diagnostic))return true;
 throw Error(`PDF inspection failed; generation was not attempted.\n${diagnostic}`);
}

export async function runPreparation({catalog,forcePdf=false,browserOutput='tmp/browser-checks/preparation',context={},run,record}){
 const steps=[],started=performance.now();
 const state={...context,catalog,status:'running',startedAt:new Date().toISOString(),pdf:'not-checked',steps,
  visualReview:'required',browserReport:path.join(browserOutput,'index.html'),resumeCommand:context.resumeCommand??`npm run catalog:prepare -- --catalog ${catalog}`};
 let active;
 const step=async(name,args,{allowFailure=false}={})=>{
  active=name;state.activeStep=name;await record(state);
  const start=performance.now();
  let result,executionError;
  try {result=await run(name,args);}catch(error){executionError=error.message;result={code:1,output:executionError};}
  steps.push({name,seconds:Number(((performance.now()-start)/1000).toFixed(2)),exitCode:result.code,...(executionError?{error:executionError}:{})});
  await record(state);
  if(result.code!==0&&!allowFailure)throw Error(`${name} failed. ${executionError??`See the ${name}.log file.`}`);
  return result;
 };
 try {
  await step('citations',['scripts/sync-citations.mjs','--check']);
  await step('tests',['--test',...((await readdir('scripts')).filter(f=>f.endsWith('.test.mjs')).map(f=>'scripts/'+f))]);
  await step('build',['node_modules/astro/astro.js','build']);
  const current=await step('pdf-status',['scripts/build-catalog-pdf.mjs','--check','--catalog',catalog],{allowFailure:true});
  // Validate unexpected failures even when explicit regeneration is requested.
  const stale=needsPdfGeneration(current,catalog);
  if(forcePdf||stale){
   state.pdf='regeneration-required';
   await step('pdf-environment',['scripts/pdf/runtime.mjs']);
   await step('pdf-generation',['scripts/build-catalog-pdf.mjs','--catalog',catalog]);
   state.pdf='generated';
   await step('build-pdf',['node_modules/astro/astro.js','build']);
   await step('pdf-final',['scripts/build-catalog-pdf.mjs','--check','--catalog',catalog]);
  } else state.pdf='reused';
  await step('links',['scripts/check-links.mjs']);
  await step('browser',['scripts/check-browser.mjs','--catalog',catalog,'--references','--output',browserOutput]);
  state.status='automated-checks-passed';state.activeStep=null;
 } catch(error){
  state.status='failed';state.failedStep=active;state.error=error.message;
  throw error;
 } finally {
  state.finishedAt=new Date().toISOString();state.totalSeconds=Number(((performance.now()-started)/1000).toFixed(2));await record(state);
 }
 return state;
}

export async function prepareCatalogue(args=process.argv.slice(2)){
 const options=parsePreparationArgs(args);
 const {catalogs}=await import('../src/data/site.mjs');
 if(!catalogs.some(c=>c.id===options.catalog))throw Error(`Catalogue ${options.catalog} is not registered in src/data/site.mjs.`);
 // A damaged manifest must never turn into an empty manifest and erase other editions.
 const editions=JSON.parse(await readFile('src/data/pdf-editions.json','utf8'));
 if(!editions||Array.isArray(editions)||typeof editions!=='object')throw Error('Invalid PDF edition manifest; restore it before preparation.');
 const root=process.cwd(),env=await pdfRuntime(root);
 const directory=path.join(root,'tmp/catalog-preparation',options.catalog,new Date().toISOString().replaceAll(':','-')+'-'+process.pid);
 await mkdir(directory,{recursive:true});
 const reportPath=path.join(directory,'report.json');
 const quote=value=>"'"+value.replaceAll("'","'\\''")+"'";
 const context={workspace:root,gitStart:await gitSnapshot(root),reviewNotes:await ensureReviewNotes(root,options.catalog),
  runtime:{node:process.execPath,nodeVersion:process.version,python:env.PDF_PYTHON,browser:env.PDF_BROWSER_PATH??'installed Google Chrome (channel: chrome)',settingsFile:path.join(root,'tmp/pdf-runtime.json')},
  resumeCommand:`${quote(process.execPath)} scripts/prepare-catalog.mjs --catalog ${options.catalog}`};
 const record=async state=>{
  if(state.finishedAt){
   state.gitEnd=await gitSnapshot(root);
   state.artifacts=await collectPreparationArtifacts(root,directory,options.catalog);
  }
  await writeFile(reportPath+'.tmp',JSON.stringify(state,null,2)+'\n');
  await rename(reportPath+'.tmp',reportPath);
  // Each execution has its own folder; manual review notes live separately.
  await writeFile(path.join(directory,'HANDOFF.md'),renderHandoff(state,directory));
  if(state.finishedAt)await writeFile(path.join(directory,'REVIEW_ENTRY.md'),renderReviewEntry(state,directory));
 };
 const run=async(name,args)=>{
  console.log(`\n[${name}]`);
  const log=createWriteStream(path.join(directory,name+'.log'));
  let output='';
  const result=await new Promise(resolve=>{
   const child=spawn(process.execPath,args,{cwd:root,env,stdio:['ignore','pipe','pipe']});
   const capture=data=>{log.write(data);output=(output+data.toString()).slice(-65536);process.stdout.write(data);};
   child.stdout.on('data',capture);child.stderr.on('data',capture);
   child.on('error',error=>capture(Buffer.from(error.message+'\n')));
   child.on('close',(code,signal)=>resolve({code:code??1,signal,output}));
  });
  log.end();await finished(log);
  return result;
 };
 console.log(`Catalogue ${options.catalog}; logs: ${directory}`);
 try {
  const state=await runPreparation({...options,context,browserOutput:path.join(directory,'browser'),run,record});
  console.log(`\nAutomated checks passed; PDF ${state.pdf}. Visual/content review remains required.\n${reportPath}\nHandoff: ${path.join(directory,'HANDOFF.md')}`);
  return state;
 } catch(error){throw Error(`${error.message}\nReport: ${reportPath}\nHandoff: ${path.join(directory,'HANDOFF.md')}\nRetry: ${context.resumeCommand}`);}
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try {await prepareCatalogue();}catch(error){console.error(error.message);process.exitCode=1;}
}
