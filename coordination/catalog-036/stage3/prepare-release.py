from pathlib import Path
import subprocess,json,hashlib,shutil,datetime
out=Path('coordination/catalog-036/stage3');candidate=Path('/private/tmp/catalog036-publication');candidate.mkdir(exist_ok=True)
assert not subprocess.check_output(['git','diff','--cached','--name-only'])
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
tracked=subprocess.check_output(['git','ls-files','-z']).decode().split('\0')
baseline={f:hashlib.sha256(Path(f).read_bytes()).hexdigest() for f in tracked if f and Path(f).is_file()}
(out/'precommit-working-hashes.json').write_text(json.dumps(baseline,indent=2)+'\n')
(out/'git-start.txt').write_text(subprocess.check_output(['git','status','--short'],text=True))
shared=['src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs']
files=shared+['public/pdf/catalog-036-ja.pdf','public/pdf/catalog-036-en.pdf']
for directory in ['drafts/catalog-036','coordination/catalog-036','public/diagrams/catalog-036']:
 for f in Path(directory).rglob('*'):
  if not f.is_file():continue
  if set(f.parts)&{'external','sources','screenshots','screens','preview','reference-preview','pdf-review'}:continue
  if f.suffix in ['.pdf','.png','.jpg','.html','.xdv','.aux']:continue
  files.append(str(f))
files=sorted(set(files))
(out/'candidate.json').write_text(json.dumps({'startedAt':datetime.datetime.now().astimezone().isoformat(),'head':head,'candidate':str(candidate),'files':files,'excluded':'Local source PDFs/extracted sources, screenshots, generated HTML and paper review rasters remain local.'},indent=2)+'\n')
archive=subprocess.Popen(['git','archive','HEAD'],stdout=subprocess.PIPE)
subprocess.run(['tar','-xf','-','-C',str(candidate)],stdin=archive.stdout,check=True);assert archive.wait()==0
for name in files:
 f=candidate/name;f.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(name,f)
if not (candidate/'node_modules').exists():(candidate/'node_modules').symlink_to(Path('node_modules').resolve(),target_is_directory=True)
print(json.dumps({'head':head,'candidate':str(candidate),'files':len(files)}))
