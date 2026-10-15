from pathlib import Path
import subprocess,json,hashlib,datetime,tarfile,io,shutil,re
root=Path.cwd();run=root/'coordination/catalog-187/astra-stage3-20261015';out=root/'tmp/catalog-187-release-final';out.mkdir(parents=True,exist_ok=True)
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip(),'Existing staged changes; do not overwrite index'
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
hashes=json.loads((root/'coordination/catalog-187/astra-stage2-20261015/delivery-hashes.json').read_text());assert all(hashlib.sha256((root/p).read_bytes()).hexdigest()==h for p,h in hashes.items()),'Stage2 outputs changed'
with tarfile.open(fileobj=io.BytesIO(subprocess.check_output(['git','archive',head]))) as archive:archive.extractall(out,filter='data')
files=[]
for base in ['drafts/catalog-187','public/diagrams/catalog-187']:
 files.extend(str(p.relative_to(root)) for p in (root/base).rglob('*') if p.is_file())
files.extend(['public/pdf/catalog-187-ja.pdf','public/pdf/catalog-187-en.pdf'])
files.extend(str(p.relative_to(root)) for p in (root/'coordination/catalog-187').iterdir() if p.is_file() and p.name in ['README.md','inventory.json','CONTENT_REVIEW.md','COMPUTATIONAL_REVIEW.md','FORMAT_REVIEW.md','RELEASE_CHECKLIST.md','SITE_HQ_HANDOFF.md','TIME_LOG.md','CHANGED_FILES.txt'])
for phase in ['astra-20261015','astra-stage2-20261015']:
 base=root/'coordination/catalog-187'/phase
 for p in base.rglob('*'):
  rel=p.relative_to(base)
  if not p.is_file() or any(x in ['superseded-drafts','superseded-records','before','before-hatching-fix','preview'] for x in rel.parts):continue
  if p.name.endswith('.tar.gz'):continue
  # Record current Astra evidence, including screenshots; retain downloaded primary PDFs locally.
  if rel.parts[0]=='sources' and p.name not in ['manifest.json','commit.json']:continue
  files.append(str(p.relative_to(root)))
for name in files:
 dest=out/name;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(root/name,dest)
s=subprocess.check_output(['git','show',head+':src/data/site.mjs'],text=True);w=(root/'src/data/site.mjs').read_text()
line="import inventory187 from '../../coordination/catalog-187/inventory.json' with { type: 'json' };\n";assert line in w and 'inventory187' not in s
nextId='246' if 'import inventory246' in s else '338'
s=s.replace('import inventory'+nextId,line+'import inventory'+nextId,1)
s,n=re.subn(r'("id": "combinatorics",\s*"ja": "組合せ論",\s*"catalogIds": )\[\]',r'\g<1>["187"]',s);assert n==1
mark='})), ...inventory187.manuscripts.map';a=w.index(mark);b=w.index('})), ...inventory246.manuscripts.map',a);s=s.replace('})), ...inventory'+nextId+'.manuscripts.map',w[a:b]+'})), ...inventory'+nextId+'.manuscripts.map',1)
mark="}, {\n  id: '187'";a=w.index(mark);b=w.index("}, {\n  id: '246'",a);s=s.replace("}, {\n  id: '"+nextId+"'",w[a:b]+"}, {\n  id: '"+nextId+"'",1)
assert s==w,'Unexpected differences outside the authorized 187 additions'
(out/'src/data/site.mjs').write_text(s)
p=json.loads(subprocess.check_output(['git','show',head+':src/data/pdf-editions.json'],text=True));p['187']=json.loads((root/'src/data/pdf-editions.json').read_text())['187'];(out/'src/data/pdf-editions.json').write_text(json.dumps(p,indent=2)+'\n')
files+=['src/data/site.mjs','src/data/pdf-editions.json']
(out/'node_modules').symlink_to(root/'node_modules',target_is_directory=True)
manifest={'started':datetime.datetime.now().astimezone().isoformat(),'baseHead':head,'verifiedStage2Files':len(hashes),'releaseDirectory':str(out),'files':sorted(files),'hashes':{f:hashlib.sha256((out/f).read_bytes()).hexdigest() for f in sorted(files)},'sharedWorkingHashes':{f:hashlib.sha256((root/f).read_bytes()).hexdigest() for f in ['src/data/site.mjs','src/data/pdf-editions.json']},'exclusions':'Other catalogues, shared policy edits, superseded Sol artifacts and downloaded primary PDFs are not included.'}
(run/'selection.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n');(run/'FILES.txt').write_text('\n'.join(sorted(files))+'\n');print('Prepared',len(files),'files; base',head,'stage2 hashes',len(hashes))
