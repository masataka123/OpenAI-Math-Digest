import {readFile,writeFile,mkdir,rename,rm,access,readdir} from 'node:fs/promises';
import path from 'node:path';
import {createHash,randomUUID} from 'node:crypto';
import {spawn,spawnSync} from 'node:child_process';

export const hash=data=>createHash('sha256').update(data).digest('hex');
export const readJSON=async file=>JSON.parse(await readFile(file,'utf8'));
export async function exists(file){try{await access(file);return true;}catch{return false;}}
export async function atomic(file,data){await mkdir(path.dirname(file),{recursive:true});const temp=file+'.'+randomUUID()+'.tmp';await writeFile(temp,data);await rename(temp,file);}
export const writeJSON=(file,value)=>atomic(file,JSON.stringify(value,null,2)+'\n');
export function inside(root,file){const result=path.resolve(root,file);if(result!==root&&!result.startsWith(root+path.sep))throw Error('Path outside workspace: '+file);return result;}
export const relative=(root,file)=>path.relative(root,file).split(path.sep).join('/');
export async function directoryHash(directory){
 const digest=createHash('sha256');async function walk(dir){for(const item of (await readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){const file=path.join(dir,item.name);if(item.isDirectory())await walk(file);else{digest.update(relative(directory,file)+'\0');digest.update(hash(await readFile(file)));}}}await walk(directory);return digest.digest('hex');
}

export async function runtime(root){
 let cached={},pdf={};try{cached=await readJSON(path.join(root,'tmp/comics-runtime.json'));}catch{}try{pdf=await readJSON(path.join(root,'tmp/pdf-runtime.json'));}catch{}
 const candidates=[process.env.COMICS_PYTHON,cached.python,pdf.PDF_PYTHON,process.env.PDF_PYTHON,path.resolve(path.dirname(process.execPath),'../../python/bin/python3'),'python3'].filter(Boolean);
 for(const python of [...new Set(candidates)]){
  const probe=spawnSync(python,['-c','import sys,json,shutil; from PIL import Image; print(json.dumps({"python":sys.executable,"cwebp":shutil.which("cwebp")}))'],{encoding:'utf8',timeout:15000});
  if(probe.status===0){const data={node:process.execPath,nodeVersion:process.version,...JSON.parse(probe.stdout)};if(!data.cwebp)throw Error('Install cwebp before preparing comic images.');await writeJSON(path.join(root,'tmp/comics-runtime.json'),data);return data;}
 }
 throw Error('No Python with Pillow found. Set COMICS_PYTHON once.');
}

export async function command(executable,args,{root,log,env={},timeout=300000}={}){
 const startedAt=new Date().toISOString(),start=performance.now();let output='';
 await new Promise((resolve,reject)=>{
  const child=spawn(executable,args,{cwd:root,env:{...process.env,...env},stdio:['ignore','pipe','pipe']});
  const timer=setTimeout(()=>{child.kill('SIGTERM');reject(Error('Command timed out: '+executable));},timeout);timer.unref();
  child.stdout.on('data',chunk=>{output+=chunk;});child.stderr.on('data',chunk=>{output+=chunk;});
  child.on('error',error=>{clearTimeout(timer);reject(error);});child.on('close',async code=>{clearTimeout(timer);try{if(log)await atomic(log,output.split(/\r?\n/).map(s=>s.trimEnd()).join('\n'));}catch(error){reject(error);return;}if(code===0)resolve();else reject(Error(`${executable} exited ${code}: ${output.slice(-1800)}`));});
 });
 return {startedAt,finishedAt:new Date().toISOString(),durationMs:Math.round(performance.now()-start),output};
}
export async function git(root,args){return (await command('git',args,{root})).output.trimEnd();}
export async function withLock(root,work){
 const folder=path.join(root,'tmp/comics-pipeline.lock');await mkdir(path.dirname(folder),{recursive:true});
 try{await mkdir(folder);}catch(error){
  if(error.code!=='EEXIST')throw error;
  let owner;try{owner=await readJSON(path.join(folder,'owner.json'));}catch{throw Error('Comic pipeline lock has no owner; inspect '+folder);}
  try{process.kill(owner.pid,0);throw Error('Another comic pipeline is running (pid '+owner.pid+').');}catch(check){if(check.code!=='ESRCH')throw check;}
  await rm(folder,{recursive:true});await mkdir(folder);
 }
 await writeJSON(path.join(folder,'owner.json'),{pid:process.pid,startedAt:new Date().toISOString()});
 try{return await work();}finally{await rm(folder,{recursive:true,force:true});}
}

export async function fingerprint(root,{exclude=()=>false}={}){
 // Content hashes, including untracked author drafts, invalidate every old check.
 const files=[];async function walk(dir){if(!await exists(dir))return;for(const item of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory()){if(!['node_modules','__pycache__'].includes(item.name))await walk(p);}else if(!item.isSymbolicLink()&&(/\.(?:astro|mjs|js|css|json|md|html|svg|png|webp|jpg|woff2?|pdf)$/.test(item.name)))files.push(p);}}
 for(const folder of ['src','public'])await walk(path.join(root,folder));
 // Article renderers consume Markdown/JSON from drafts; their source is protected too.
 const tracked=await git(root,['ls-files','--cached','--others','--exclude-standard','drafts','scripts','package.json','package-lock.json','astro.config.mjs']);
 for(const file of tracked.split('\n').filter(Boolean))if(/\.(?:md|json|mjs|js|py)$/.test(file)&&await exists(path.join(root,file)))files.push(path.join(root,file));
 const digest=createHash('sha256');for(const file of [...new Set(files)].sort()){if(exclude(relative(root,file)))continue;digest.update(relative(root,file)+'\0');digest.update(hash(await readFile(file)));}
 return digest.digest('hex');
}
