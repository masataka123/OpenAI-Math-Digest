// Run the unmodified shared checker on an immutable build; memoize identical reads.
import fs from 'node:fs/promises';
import {syncBuiltinESMExports} from 'node:module';
const read=fs.readFile.bind(fs),cache=new Map();
fs.readFile=(...args)=>{const key=JSON.stringify(args);if(!cache.has(key))cache.set(key,read(...args));return cache.get(key);};
syncBuiltinESMExports();
await import('../../scripts/check-links.mjs');
console.log(`Identical file reads cached: ${cache.size} distinct reads. Validation rules unchanged.`);
