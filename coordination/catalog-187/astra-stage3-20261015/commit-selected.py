from pathlib import Path
import subprocess,json,hashlib
root=Path.cwd();run=root/'coordination/catalog-187/astra-stage3-20261015';m=json.loads((run/'selection.json').read_text());out=Path(m['releaseDirectory'])
assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==m['baseHead'],'HEAD changed; review before staging'
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip(),'Existing staged changes'
shared=['src/data/site.mjs','src/data/pdf-editions.json']
for p,h in m['hashes'].items():
 target=out/p if p in shared else root/p
 assert hashlib.sha256(target.read_bytes()).hexdigest()==h,p
files=[p for p in m['files'] if p not in shared]
files.extend(str(p.relative_to(root)) for p in run.rglob('*') if p.is_file())
subprocess.run(['git','add','--',*files],check=True)
for name in ['site.mjs','pdf-editions.json']:subprocess.run(['git','apply','--cached',str(run/(name+'.patch'))],check=True)
staged=subprocess.check_output(['git','diff','--cached','--name-only'],text=True).splitlines()
assert set(staged)==set(files+shared),'Unexpected staged paths'
for p in shared:assert subprocess.check_output(['git','show',':'+p])==(out/p).read_bytes(),p
subprocess.run(['git','diff','--cached','--check'],check=True)
print('Verified staged paths:',len(staged),'Only187 plus two scoped registrations.')
subprocess.run(['git','commit','-m','Publish Astra catalogue 187 Snaky guide and bilingual PDFs'],check=True)
print('COMMIT',subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip())
for p,h in m['sharedWorkingHashes'].items():print('Shared working file retained:',p,hashlib.sha256((root/p).read_bytes()).hexdigest()==h)
