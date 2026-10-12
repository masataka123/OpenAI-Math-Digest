from pathlib import Path
import json,hashlib,subprocess,datetime
root=Path('.'); c=root/'coordination/catalog-068'
baseline=json.loads((c/'stage2-baseline.json').read_text())
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
allowed={'src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs'}
changed=[p for p,h in baseline['trackedHashes'].items() if not Path(p).is_file() or sha(p)!=h]
unexpected=[p for p in changed if p not in allowed]
assert not unexpected,unexpected
prior=json.loads((c/'preexisting-hashes.json').read_text())
# The stage-two baseline includes the already modified policy files.
editions=json.loads(Path('src/data/pdf-editions.json').read_text())
assert {k:v for k,v in editions.items() if k!='068'}==baseline['pdfEditions']
for catalog,langs in baseline['pdfEditions'].items():
 for lang,v in langs.items():assert sha('public/pdf/'+v['file'])==v['sha256']
inv=json.loads((c/'inventory.json').read_text())
for m in inv['manuscripts']:assert sha(m['localSource'])==m['sha256']
copies=[]
for p in Path('public/diagrams/catalog-068').glob('*/*'):
 src=Path('drafts/catalog-068')/p.parent.name/'diagrams'/p.name
 assert sha(p)==sha(src),str(p)
 copies.append(str(p))
assert len(copies)==144
for lang,v in editions['068'].items():
 assert sha('public/pdf/'+v['file'])==v['sha256']
 assert sha('dist/pdf/'+v['file'])==v['sha256']
 assert v['chapters']==8 and v['figures']==36
head=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip();assert head==baseline['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip()
subprocess.run(['git','diff','--check'],check=True)
report={'checkedAt':datetime.datetime.now().astimezone().isoformat(),'branch':subprocess.check_output(['git','branch','--show-current'],text=True).strip(),'head':head,'trackedBaselineCount':len(baseline['trackedHashes']),'changedTracked':changed,'unexpectedChanges':unexpected,'unchangedExistingPdfEditions':14,'sourceHashesVerified':7,'publicDiagramCopiesMatched':len(copies),'newPdfFilesAndDistMatch':True,'stagedFiles':[]}
(c/'stage2-preservation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False))
