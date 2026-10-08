import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ids=new Set(['uniform-pluricanonical-iitaka','lifting-adjoint-sections','effective-log-iitaka-fourfolds','abundance-after-nonvanishing']);
const server=http.createServer(async(req,res)=>{
 const pathname=new URL(req.url,'http://localhost').pathname;
 if(pathname==='/'){res.writeHead(302,{Location:'/uniform-pluricanonical-iitaka/preview.ja.html'});res.end();return;}
 const match=pathname.match(/^\/([a-z-]+)\/(preview\.(ja|en)\.html)$/);
 if(!match||!ids.has(match[1])){res.writeHead(404);res.end('Not found');return;}
 try{const data=await fs.readFile(path.join(root,match[1],match[2]));res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}
});
server.listen(0,'127.0.0.1',()=>console.log('PREVIEW_URL=http://127.0.0.1:'+server.address().port+'/'));
