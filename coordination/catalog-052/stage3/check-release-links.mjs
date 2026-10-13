// The release directory is immutable during this check. Cache reads to avoid
// reopening large SVG-containing pages once for every internal glyph reference.
import fs from 'node:fs/promises';
import {syncBuiltinESMExports} from 'node:module';
import {pathToFileURL} from 'node:url';
const original=fs.readFile,cache=new Map();
fs.readFile=(file,...args)=>{const key=String(file)+'\0'+JSON.stringify(args);if(!cache.has(key))cache.set(key,original(file,...args));return cache.get(key);};
syncBuiltinESMExports();
await import(pathToFileURL(process.cwd()+'/scripts/check-links.mjs'));
