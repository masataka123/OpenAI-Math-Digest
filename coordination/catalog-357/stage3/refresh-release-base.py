from pathlib import Path
import json,subprocess,tarfile,io,shutil,datetime
r=Path.cwd();b=r/'coordination/catalog-357/stage3'
assert not subprocess.check_output(['git','diff','--cached','--name-only']).strip()
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()
s=Path('src/data/site.mjs').read_text()
t=s.replace("import inventory357 from '../../coordination/catalog-357/inventory.json' with { type: 'json' };\n",'').replace('"338", "356", "357"','"338", "356"')
a=t.index('})), ...inventory357.manuscripts.map(');z=t.index('}))];',a);t=t[:a]+t[z:]
a=t.index("}, {\n  id: '357'");z=t.index('}];',a);t=t[:a]+t[z:]
assert t==subprocess.check_output(['git','show','HEAD:src/data/site.mjs'],text=True)
(b/'site.for-commit.mjs').write_text(s)
j=json.loads(subprocess.check_output(['git','show','HEAD:src/data/pdf-editions.json'],text=True));assert '357' not in j
j['357']=json.load(open('src/data/pdf-editions.json'))['357'];(b/'pdf-editions.for-commit.json').write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
record={'head':head,'reason':'Concurrent catalogue 356 publication advanced main; initial staging guard stopped before any index writes','refreshedAt':datetime.datetime.now().astimezone().isoformat()};(b/'RELEASE_BASE.json').write_text(json.dumps(record,indent=2)+'\n')
snap=r/'tmp/catalog-357-publication';old=r/'tmp/catalog-357-publication-before-356';assert not old.exists();snap.rename(old);snap.mkdir()
with tarfile.open(fileobj=io.BytesIO(subprocess.check_output(['git','archive',head]))) as tar:tar.extractall(snap,filter='data')
paths=set(json.loads((b/'publication-files.json').read_text()));paths.update(str(b.relative_to(r)/f) for f in ['refresh-release-base.py','RELEASE_BASE.json','README.md'])
(b/'publication-files.json').write_text(json.dumps(sorted(paths),indent=2)+'\n')
for f in paths:
 dest=snap/f;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/f,dest)
(snap/'src/data/site.mjs').write_text(s);(snap/'src/data/pdf-editions.json').write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n');(snap/'node_modules').symlink_to(r/'node_modules',target_is_directory=True)
for p in (b/'logs').glob('snapshot-*.log'):p.rename(p.with_name(p.name.replace('snapshot-','before-356-')))
print(json.dumps(record,indent=2))
