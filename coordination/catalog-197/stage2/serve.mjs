import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist'),base='/OpenAI-Math-Digest/';
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.js':'application/javascript','.tex':'text/plain; charset=utf-8','.pdf':'application/pdf','.woff2':'font/woff2'};
http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost');if(!url.pathname.startsWith(base)){res.writeHead(404);return res.end();}let file=path.resolve(root,decodeURIComponent(url.pathname.slice(base.length)));if(!file.startsWith(root+'/')){res.writeHead(403);return res.end();}if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');if(!fs.existsSync(file)){res.writeHead(404);return res.end();}res.writeHead(200,{'Content-Type':mime[path.extname(file)]??'application/octet-stream'});fs.createReadStream(file).pipe(res);}).listen(8297,'127.0.0.1',()=>console.log('Stage 2 built site: http://127.0.0.1:8297/OpenAI-Math-Digest/ja/catalog/197/'));
