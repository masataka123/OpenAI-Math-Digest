import {access,readFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {chromium} from 'playwright-core';

export async function pdfRuntime(root=process.cwd(), inherited=process.env) {
 let settings={};
 try {settings=JSON.parse(await readFile(path.join(root,'tmp/pdf-runtime.json'),'utf8'));}
 catch(error){if(error.code!=='ENOENT')throw Error(`Invalid tmp/pdf-runtime.json: ${error.message}`);}
 const env={...inherited};
 for(const name of ['PDF_PYTHON','PDF_BROWSER_PATH','DYLD_FALLBACK_LIBRARY_PATH','XDG_CACHE_HOME']) {
  if(settings[name]!==undefined&&typeof settings[name]!=='string')throw Error(`${name} must be a string`);
  if(!env[name]&&settings[name])env[name]=settings[name];
 }
 if(!env.PDF_PYTHON){
  const local=path.join(root,'tmp/pdf-venv',process.platform==='win32'?'Scripts/python.exe':'bin/python');
  try {await access(local);env.PDF_PYTHON=local;}catch{env.PDF_PYTHON='python3';}
 }
 env.XDG_CACHE_HOME??=path.join(root,'tmp/font-cache');
 return env;
}

export async function checkPdfRuntime(root=process.cwd(), env=process.env) {
 await mkdir(env.XDG_CACHE_HOME??path.join(root,'tmp/font-cache'),{recursive:true});
 const python=env.PDF_PYTHON??'python3';
 const result=spawnSync(python,['-c',`import sys,json
from pathlib import Path
from importlib.metadata import version
if sys.version_info < (3,12): raise RuntimeError('Python 3.12 or newer is required')
versions={}
for line in Path('scripts/pdf/requirements.txt').read_text().splitlines():
 package,expected=line.split('=='); actual=version(package)
 if actual != expected: raise RuntimeError(f'{package}: expected {expected}, found {actual}')
 versions[package]=actual
from weasyprint import HTML
from pypdf import PdfReader
# Load Pango and fonts and exercise layout without creating a PDF.
doc=HTML(string='<html lang="ja"><body>数学 / Mathematics</body></html>').render()
if not doc.pages: raise RuntimeError('WeasyPrint produced no layout')
print(json.dumps({'python':sys.executable,'pythonVersion':sys.version.split()[0],'packages':versions}))
`],{cwd:root,env,encoding:'utf8',timeout:30000});
 if(result.status!==0)throw Error(`PDF environment check failed. See scripts/pdf/README.md.\n${result.error?.message??result.stderr??result.stdout}`);
 let browser;
 try {browser=await chromium.launch(env.PDF_BROWSER_PATH?{executablePath:env.PDF_BROWSER_PATH,headless:true}:{channel:'chrome',headless:true});}
 catch(error){throw Error(`Chrome could not start. Install Chrome or set PDF_BROWSER_PATH.\n${error.message}`);}
 try {return {...JSON.parse(result.stdout),browser:browser.version()};}
 finally {await browser.close();}
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try {console.log(JSON.stringify(await checkPdfRuntime(process.cwd(),await pdfRuntime()),null,2));}
 catch(error){console.error(error.message);process.exitCode=1;}
}
