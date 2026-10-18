import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.js':'application/javascript','.tex':'text/plain; charset=utf-8','.woff2':'font/woff2'};
http.createServer((req,res)=>{
 let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 let file;
 if(name.startsWith('/OpenAI-Math-Digest/'))file=path.join(root,'dist',name.slice('/OpenAI-Math-Digest/'.length));
 else if(name.startsWith('/drafts/catalog-197/'))file=path.join(root,name);
 else file=path.join(root,'coordination/catalog-197/preview',name);
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 if(!fs.existsSync(file)){res.writeHead(404);res.end('Not found');return;}
 res.writeHead(200,{'Content-Type':mime[path.extname(file)]??'application/octet-stream'});fs.createReadStream(file).pipe(res);
}).listen(8197,'127.0.0.1',()=>console.log('Stage-1 preview: http://127.0.0.1:8197'));
