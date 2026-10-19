from pathlib import Path
import subprocess,json,hashlib,datetime,shutil,tarfile,io
r=Path.cwd();b=r/'coordination/catalog-357/stage3'
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
assert not subprocess.check_output(['git','diff','--cached','--name-only']).strip()
manifest=json.load(open('coordination/catalog-357/stage2/deliverables-manifest.json')); changed=[]
for row in manifest['files']:
 p=Path(row['path'])
 if hashlib.sha256(p.read_bytes()).hexdigest()!=row['sha256']:changed.append(row['path'])
assert not changed,changed
start={'startedAt':datetime.datetime.now().astimezone().isoformat(),'head':head,'branch':subprocess.check_output(['git','branch','--show-current'],text=True).strip(),'authorization':'User: 第3段階をお願いします.','stage2ManifestUnchanged':True}
(b/'START.json').write_text(json.dumps(start,ensure_ascii=False,indent=2)+'\n')
(b/'git-status-start.bin').write_bytes(subprocess.check_output(['git','status','--porcelain=v1','-z']))
tracked_dirty=subprocess.check_output(['git','diff','--name-only','-z']).decode().strip('\0').split('\0')
baseline={f:hashlib.sha256(Path(f).read_bytes()).hexdigest() for f in tracked_dirty if Path(f).is_file()}
(b/'working-files-baseline.json').write_text(json.dumps(baseline,indent=2)+'\n')
# Construct the release site data from the already checked worktree, removing only 356.
s=Path('src/data/site.mjs').read_text();s=s.replace("import inventory356 from '../../coordination/catalog-356/inventory.json' with { type: 'json' };\n",'').replace('"338", "356", "357"','"338", "357"')
a=s.index('})), ...inventory356.manuscripts.map(');z=s.index('})), ...inventory357.manuscripts.map(',a);s=s[:a]+s[z:]
a=s.index("}, {\n  id: '356'");z=s.index("}, {\n  id: '357'",a);s=s[:a]+s[z:]
assert '356' not in s
# Removing 357 as well must recover the HEAD file exactly.
t=s.replace("import inventory357 from '../../coordination/catalog-357/inventory.json' with { type: 'json' };\n",'').replace('"338", "357"','"338"')
a=t.index('})), ...inventory357.manuscripts.map(');z=t.index('}))];',a);t=t[:a]+t[z:]
a=t.index("}, {\n  id: '357'");z=t.index('}];',a);t=t[:a]+t[z:]
assert t==subprocess.check_output(['git','show','HEAD:src/data/site.mjs'],text=True)
(b/'site.for-commit.mjs').write_text(s)
j=json.loads(subprocess.check_output(['git','show','HEAD:src/data/pdf-editions.json'],text=True));assert '357' not in j
j['357']=json.load(open('src/data/pdf-editions.json'))['357'];(b/'pdf-editions.for-commit.json').write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
paths=[]
for root in ['drafts/catalog-357','coordination/catalog-357','public/diagrams/catalog-357']:
 for p in Path(root).rglob('*'):
  if not p.is_file() or p.suffix not in ['.md','.json','.mjs','.cjs','.py','.tex','.tikz','.svg','.log','.diff']:continue
  if any(x in p.parts for x in ['external','screens','pdf-pages','preview']):continue
  if 'sources' in p.parts and p.name not in ['manifest.json','commit.json']:continue
  if p.name.startswith('baseline-') or 'for-commit' in p.name or p.name=='working-files-baseline.json':continue
  paths.append(str(p))
paths += ['public/pdf/catalog-357-ja.pdf','public/pdf/catalog-357-en.pdf']
(b/'publication-files.json').write_text(json.dumps(sorted(paths),indent=2)+'\n')
snap=r/'tmp/catalog-357-publication';assert not snap.exists()
snap.mkdir(parents=True)
with tarfile.open(fileobj=io.BytesIO(subprocess.check_output(['git','archive',head]))) as tar:tar.extractall(snap,filter='data')
for f in paths:
 dest=snap/f;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/f,dest)
(snap/'src/data/site.mjs').write_text(s);(snap/'src/data/pdf-editions.json').write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
(snap/'node_modules').symlink_to(r/'node_modules',target_is_directory=True)
print(json.dumps({'files':len(paths),'snapshot':str(snap),'registeredCatalogues':len(j),'stage2ManifestUnchanged':True},indent=2))
