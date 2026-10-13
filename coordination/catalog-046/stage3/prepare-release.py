from pathlib import Path
import subprocess,json,tarfile,io,shutil,re,hashlib,datetime
repo=Path.cwd();out=Path('/private/tmp/catalog046-publication');out.mkdir(exist_ok=True)
base=subprocess.check_output(['git','rev-parse','HEAD']).decode().strip()
assert subprocess.check_output(['git','diff','--cached','--name-only']).strip()==b''
archive=subprocess.check_output(['git','archive',base]);tarfile.open(fileobj=io.BytesIO(archive)).extractall(out,filter='data')
paths=[]
for root in ['drafts/catalog-046','public/diagrams/catalog-046']:
 for p in Path(root).rglob('*'):
  if p.is_file() and not set(p.parts)&{'external','qa','preview','references','source'} and p.suffix not in {'.png','.pdf','.html'}:paths.append(str(p))
paths += ['public/pdf/catalog-046-ja.pdf','public/pdf/catalog-046-en.pdf']
for p in Path('coordination/catalog-046').glob('*'):
 if p.is_file() and p.suffix in ['.md','.json','.tsv','.py','.mjs','.log','.txt']:paths.append(str(p))
for p in Path('coordination/catalog-046/stage2').glob('*'):
 if p.is_file() and p.suffix in ['.json','.tsv','.py','.mjs','.log','.txt']:paths.append(str(p))
for p in paths:
 target=out/p;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,target)
# Compose only the 046 additions on HEAD. Leave the shared checkout unchanged.
current=Path('src/data/site.mjs').read_text();p=out/'src/data/site.mjs';s=p.read_text()
assert 'inventory046' not in s
s=s.replace('import inventory051',"import inventory046 from '../../coordination/catalog-046/inventory.json' with { type: 'json' };\nimport inventory051",1)
s=s.replace('"042", "051"','"042", "046", "051"',1)
block=re.search(r'\}\)\), \.\.\.inventory046\.manuscripts\.map\(entry => \(\{.*?(?=\}\)\), \.\.\.inventory051)',current,re.S).group(0)
s=s.replace('})), ...inventory051',block+'})), ...inventory051',1)
block=re.search(r"  id: '046',.*?(?=\}, \{\n  id: '051')",current,re.S).group(0)
s=s.replace("  id: '051'",block+"}, {\n  id: '051'",1);p.write_text(s)
for name in ['scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs']:
 p=out/name;p.write_text(p.read_text().replace("'042','051'","'042','046','051'",1))
p=out/'src/data/pdf-editions.json';data=json.loads(p.read_text());data['046']=json.loads(Path('src/data/pdf-editions.json').read_text())['046'];p.write_text(json.dumps(data,indent=2)+'\n')
shared=['src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs']
paths+=shared
if not (out/'node_modules').exists():(out/'node_modules').symlink_to(repo/'node_modules',target_is_directory=True)
context={'base':base,'candidateDirectory':str(out),'createdAt':datetime.datetime.now().astimezone().isoformat(),'paths':sorted(paths),'sharedPaths':shared,'candidateSha256':{p:hashlib.sha256((out/p).read_bytes()).hexdigest() for p in paths},'note':'046-only candidate. Other staged changes absent when prepared; shared working files unchanged. Local source PDFs/screenshots under coordination retained outside the publication commit.'}
Path('coordination/catalog-046/stage3/candidate.json').write_text(json.dumps(context,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'base':base,'candidate':str(out),'files':len(paths),'bytes':sum((out/p).stat().st_size for p in paths)}))
