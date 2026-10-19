import http from 'node:http';
import {readFile,stat,realpath} from 'node:fs/promises';
import path from 'node:path';

const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.pdf':'application/pdf','.woff':'font/woff','.woff2':'font/woff2','.json':'application/json','.tex':'text/plain; charset=utf-8'};
export async function serveBuiltSite(directory,base){
 const root=await realpath(directory);
 const server=http.createServer(async(req,res)=>{
  try{
   const url=new URL(req.url,'http://localhost');
   if(!url.pathname.startsWith(base)){res.writeHead(404);return res.end();}
   const file=path.resolve(root,decodeURIComponent(url.pathname.slice(base.length))||'.');
   if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
   let target=await realpath(file);
   if((await stat(target)).isDirectory())target=await realpath(path.join(target,'index.html'));
   if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
   const data=await readFile(target);
   res.writeHead(200,{'Content-Type':mime[path.extname(target)]??'application/octet-stream','Cache-Control':'no-store'});
   res.end(req.method==='HEAD'?undefined:data);
  }catch(error){res.writeHead(error.code==='ENOENT'||error.code==='ENOTDIR'?404:500);res.end();}
 });
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
 return {origin:`http://127.0.0.1:${server.address().port}`,close:()=>new Promise((resolve,reject)=>{
  server.close(error=>error?reject(error):resolve());server.closeAllConnections();
 })};
}
