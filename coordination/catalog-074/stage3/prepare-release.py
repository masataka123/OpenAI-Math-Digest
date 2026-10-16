from pathlib import Path
import subprocess,tarfile,io,json,shutil,re,difflib,hashlib,datetime
root=Path.cwd();out=root/'coordination/catalog-074/stage3';release=Path('/private/tmp/catalog-074-release')
assert not release.exists(), 'Release directory already exists'
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip(), 'Existing staged work'
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
release.mkdir();tarfile.open(fileobj=io.BytesIO(subprocess.check_output(['git','archive',head]))).extractall(release,filter='data')
paths=[]
for base in ['drafts/catalog-074','public/diagrams/catalog-074']:
 for p in Path(base).rglob('*'):
  if p.is_file() and 'external' not in p.parts and p.suffix in ['.md','.json','.tex','.tikz','.svg','.py','.mjs']:paths.append(str(p))
paths+=['public/pdf/catalog-074-ja.pdf','public/pdf/catalog-074-en.pdf']
for p in Path('coordination/catalog-074').rglob('*'):
 if p.is_file() and 'stage3' not in p.parts and 'external' not in p.parts and p.suffix in ['.md','.json','.py','.mjs','.log'] and p.name not in ['tracked-baseline.json','baseline.json','dist-html-hashes-final.json','checksums.json']:
  paths.append(str(p))

for f in paths:
 dst=release/f;dst.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(root/f,dst)
base=subprocess.check_output(['git','show',head+':src/data/site.mjs'],text=True);current=Path('src/data/site.mjs').read_text();s=current
assert 'inventory074' not in base
# The inspected site diff contains only catalogue 074 registration.
(release/'src/data/site.mjs').write_text(s)
b=json.loads(subprocess.check_output(['git','show',head+':src/data/pdf-editions.json'],text=True));b['074']=json.loads(Path('src/data/pdf-editions.json').read_text())['074'];(release/'src/data/pdf-editions.json').write_text(json.dumps(b,ensure_ascii=False,indent=2)+'\n')
patch=''
for f in ['src/data/site.mjs','src/data/pdf-editions.json']:
 original=subprocess.check_output(['git','show',head+':'+f],text=True);updated=(release/f).read_text();patch+=''.join(difflib.unified_diff(original.splitlines(True),updated.splitlines(True),fromfile='a/'+f,tofile='b/'+f))
(out/'shared-074.patch').write_text(patch);(out/'release-files.json').write_text(json.dumps(paths+['src/data/site.mjs','src/data/pdf-editions.json'],indent=2)+'\n');(out/'release-base.txt').write_text(head+'\n')
(out/'candidate.json').write_text(json.dumps({'base':head,'preparedAt':datetime.datetime.now().astimezone().isoformat(),'files':{f:hashlib.sha256((release/f).read_bytes()).hexdigest() for f in paths+['src/data/site.mjs','src/data/pdf-editions.json']}},indent=2))
(out/'git-status-start.txt').write_bytes(subprocess.check_output(['git','status','--short']))
(out/'baseline.json').write_text(json.dumps({f:hashlib.sha256(Path(f).read_bytes()).hexdigest() for f in subprocess.check_output(['git','ls-files'],text=True).splitlines() if Path(f).is_file()},indent=2))
(release/'node_modules').symlink_to(root/'node_modules',target_is_directory=True)
print('Prepared',len(paths)+2,'files at',release,'base',head)
