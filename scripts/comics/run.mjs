#!/usr/bin/env node
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {readJSON} from './common.mjs';
import {plan,prepare,runDirectory,assertReady,saveReport} from './pipeline.mjs';
import {approveVisualReview} from './browser-review.mjs';
import {publish,verifyPublic} from './release.mjs';
import {serveBuiltSite} from '../browser/site-server.mjs';

export function parseArgs(argv){
 const [command,...args]=argv,options={inputs:[],catalogs:[]};
 if(!['plan','prepare','serve','review','publish','verify','status'].includes(command))throw Error('Use plan | prepare | serve | review | publish | verify | status');
 for(let i=0;i<args.length;i++){
  const key=args[i];if(['--authorized','--dry-run','--prepend'].includes(key)){options[key.slice(2).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=true;continue;}
  if(!['--run','--input','--catalogs','--edition','--reviewer','--notes','--base','--source'].includes(key)||!args[i+1]||args[i+1].startsWith('--'))throw Error('Unknown/incomplete argument: '+key);
  const value=args[++i];if(key==='--input')options.inputs.push(value);else if(key==='--catalogs'){options.catalogs=value.split(',');if(options.catalogs.some(n=>!/^\d{3}$/.test(n)))throw Error('Use three-digit catalogue numbers');}else options[key.slice(2)]=value;
 }
 if(!options.run)throw Error('Specify --run NAME');
 if(command!=='publish'&&(options.authorized||options.dryRun))throw Error('Publication flags belong only to publish');
 if(options.prepend&&command!=='plan')throw Error('--prepend belongs only to plan');return {command,options};
}
export async function main(argv=process.argv.slice(2)){
 const {command,options}=parseArgs(argv),root=process.cwd(),directory=runDirectory(root,options.run);let result;
 if(command==='plan')result=await plan(root,options);
 if(command==='prepare')result=await prepare(root,options);
 if(command==='review'){await approveVisualReview(directory,options);result=await assertReady(root,directory);result.status='ready';result.next='公開指示があれば publish --authorized。既存版の確認だけなら verify。';await saveReport(directory,result);}
 if(command==='publish')result=await publish(root,options);
 if(command==='verify'){await assertReady(root,directory);result=await verifyPublic(root,options);}
 if(command==='status')result=await readJSON(path.join(directory,'report.json'));
 if(command==='serve'){
  const report=await readJSON(path.join(directory,'report.json'));const server=await serveBuiltSite(path.join(root,report.dist),'/OpenAI-Math-Digest/');console.log(server.origin+'/OpenAI-Math-Digest/comics/');console.log('Run directory: '+directory);await new Promise(()=>{});return;
 }
 if(command==='plan')console.log(JSON.stringify({directory:result.directory,catalogs:result.manifest.catalogs.map(e=>e.catalogId),next:'Confirm manifest.json, then prepare.'},null,2));
 else console.log(JSON.stringify(result.status?{status:result.status,run:result.run,steps:result.steps&&Object.fromEntries(Object.entries(result.steps).map(([n,s])=>[n,{status:s.status,durationMs:s.durationMs,reused:s.reused}])),lastInvocation:result.lastInvocation,next:result.next}:result,null,2));
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))main().catch(error=>{console.error(error.message);process.exitCode=1;});
