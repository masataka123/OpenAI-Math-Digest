// Validation-only preload for an immutable build snapshot. Do not use during writes.
// The shared checker and every check remain unchanged; repeated UTF-8 reads return
// the same string rather than rereading the same multi-megabyte HTML for each glyph.
import fsPromises from 'node:fs/promises';
import {syncBuiltinESMExports} from 'node:module';
const read=fsPromises.readFile.bind(fsPromises),cache=new Map();let hits=0;
fsPromises.readFile=(file,options)=>{
 if(options!=='utf8')return read(file,options);
 const key=String(file);if(cache.has(key)){hits++;return cache.get(key);}
 const result=read(file,options);cache.set(key,result);return result;
};
syncBuiltinESMExports();
process.on('exit',()=>console.log(`Frozen-snapshot read cache: ${cache.size} files; ${hits} repeated reads.`));
