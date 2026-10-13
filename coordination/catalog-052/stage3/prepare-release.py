from pathlib import Path
import subprocess,json,tarfile,io,shutil,re,hashlib,datetime
repo=Path.cwd();out=Path('/private/tmp/catalog052-publication');out.mkdir(exist_ok=True)
base=subprocess.check_output(['git','rev-parse','HEAD']).decode().strip()
assert subprocess.check_output(['git','diff','--cached','--name-only']).strip()==b''
archive=subprocess.check_output(['git','archive',base]);tarfile.open(fileobj=io.BytesIO(archive)).extractall(out,filter='data')
paths=[]
for root in ['drafts/catalog-052','public/diagrams/catalog-052']:
 for p in Path(root).rglob('*'):
  if p.is_file():paths.append(str(p))
paths += ['public/pdf/catalog-052-ja.pdf','public/pdf/catalog-052-en.pdf']
for p in Path('coordination/catalog-052').glob('*'):
 if p.is_file() and p.suffix in ['.md','.json','.tsv','.py','.mjs','.log','.txt']:paths.append(str(p))
for p in Path('coordination/catalog-052/stage2').glob('*'):
 if p.is_file() and p.suffix in ['.json','.tsv','.py','.mjs','.log','.txt']:paths.append(str(p))
for p in paths:
 target=out/p;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,target)
# Compose only the 052 additions on HEAD. Leave the shared checkout unchanged.
current=Path('src/data/site.mjs').read_text();p=out/'src/data/site.mjs';s=p.read_text()
assert 'inventory052' not in s
s=s.replace('import inventory057',"import inventory052 from '../../coordination/catalog-052/inventory.json' with { type: 'json' };\nimport inventory057",1)
s=s.replace('"051", "057"','"051", "052", "057"',1)
block=re.search(r'\}\)\), \.\.\.inventory052\.manuscripts\.map\(entry => \(\{.*?(?=\}\)\), \.\.\.inventory057)',current,re.S).group(0)
s=s.replace('})), ...inventory057',block+'})), ...inventory057',1)
block=re.search(r"  id: '052',.*?(?=\}, \{\n  id: '057')",current,re.S).group(0)
s=s.replace("  id: '057'",block+"}, {\n  id: '057'",1);p.write_text(s)
for name in ['scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs']:
 p=out/name;p.write_text(p.read_text().replace("'051','057'","'051','052','057'",1))
p=out/'src/data/pdf-editions.json';data=json.loads(p.read_text());data['052']=json.loads(Path('src/data/pdf-editions.json').read_text())['052'];p.write_text(json.dumps(data,indent=2)+'\n')
shared=['src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs']
paths+=shared
if not (out/'node_modules').exists():(out/'node_modules').symlink_to(repo/'node_modules',target_is_directory=True)
context={'base':base,'candidateDirectory':str(out),'createdAt':datetime.datetime.now().astimezone().isoformat(),'paths':sorted(paths),'sharedPaths':shared,'candidateSha256':{p:hashlib.sha256((out/p).read_bytes()).hexdigest() for p in paths},'note':'052-only candidate. Other staged changes absent when prepared; shared working files unchanged. Local source PDFs/screenshots under coordination retained outside the publication commit.'}
Path('coordination/catalog-052/stage3/candidate.json').write_text(json.dumps(context,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'base':base,'candidate':str(out),'files':len(paths),'bytes':sum((out/p).stat().st_size for p in paths)}))
