"""Read-only structural/parity/hash checks for the unregistered stage-one draft."""
from pathlib import Path
import re,json,hashlib,subprocess,datetime
repo=Path(__file__).resolve().parents[2]
p=repo/'drafts/catalog-067/campana-peternell-six'
a,b=[(p/f'article.{lang}.md').read_text() for lang in ('ja','en')]
checks={}
for key,pattern in [('citationSequence',r'<!-- cite:([^ ]+) -->'),('proofTargetSequence',r'<!-- proof-target:([^ ]+) -->'),('statementSequence',r'<!-- statement:([^ ]+) -->')]:
 x,y=re.findall(pattern,a),re.findall(pattern,b)
 assert x==y,key
 checks[key]={'equal':True,'count':len(x)}
def normalize(s):
 s=re.sub(r'\\text\{[^}]*\}','TEXT',s)
 return re.sub(r'\s+','',s).rstrip('.,')
x,y=[[normalize(t) for t in re.findall(r'\$\$([\s\S]+?)\$\$',s)] for s in (a,b)]
assert x==y
checks['displayMath']={'equalAfterTextAndPunctuationNormalization':True,'count':len(x)}
checks['inlineMath']={'assessment':'Manually compared; order, separate inline spans and repeated variables differ with translation, mathematical conditions agree.'}
m=json.loads((p/'diagrams/citation-build.json').read_text())
assert all(hashlib.sha256((p/'diagrams'/n).read_bytes()).hexdigest()==h for n,h in m.items())
checks['diagramManifest']={'files':len(m),'hashesMatch':True}
inv=json.loads((repo/'coordination/catalog-067/inventory.json').read_text())
for name,h in inv['officialFiles'].items():
 assert hashlib.sha256((repo/'coordination/catalog-067/source'/name).read_bytes()).hexdigest()==h
assert hashlib.sha256((repo/'coordination/catalog-067/source/verify.py').read_bytes()).hexdigest()==json.loads((p/'sources.json').read_text())['computationalCertificate']['sha256']
checks['officialHashes']=True
for f in (repo/'drafts/catalog-067').rglob('*.json'): json.loads(f.read_text())
result=subprocess.run(['node','scripts/sync-citations.mjs','--check','--catalog','067','--text-only'],cwd=repo,text=True,capture_output=True,check=True)
checks['citations']={'command':'node scripts/sync-citations.mjs --check --catalog 067 --text-only','output':result.stdout.strip(),'scope':'Draft text and generated citation TeX only; public copies deferred to stage two.'}
visual=json.loads((repo/'coordination/catalog-067/validation/visual-checks.json').read_text())
assert not visual['issues']
assert len(visual['report'])==8
assert all(x['pageWidth']==x['width'] and x['mathErrors']==0 for x in visual['report'])
checks['isolatedPreview']={'pageViewportCases':8,'pageOverflow':0,'mathErrors':0,'browserErrors':0}
checks['deferred']=['Site registration and real routes','Full check:citations public-copy gate','Repository tests/build/check:links','Bilingual booklet PDF and check:pdf','Public deployment']
checks['checkedAt']=datetime.datetime.now(datetime.timezone.utc).isoformat()
out=repo/'coordination/catalog-067/validation/stage1-checks.json'
out.write_text(json.dumps(checks,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(checks,indent=2,ensure_ascii=False))
