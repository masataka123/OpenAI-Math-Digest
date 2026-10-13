from pathlib import Path
import json,hashlib,subprocess,datetime
r=Path('coordination/catalog-052/stage2');base=json.loads((r/'baseline.json').read_text())
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
changed=[p for p,h in base['files'].items() if not Path(p).is_file() or sha(p)!=h]
shared=['scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs','src/data/site.mjs','src/data/pdf-editions.json']
ours=[p for p in changed if p.startswith('drafts/catalog-052/')]
parallel=[p for p in changed if p.startswith(('drafts/catalog-036/','coordination/catalog-036/'))]
unexpected=[p for p in changed if p not in shared+ours+parallel]
prior=json.loads((r/'pdf-editions-before.json').read_text());current=json.loads(Path('src/data/pdf-editions.json').read_text())
report={'checkedAt':datetime.datetime.now().astimezone().isoformat(),'branch':subprocess.check_output(['git','branch','--show-current']).decode().strip(),'baselineFiles':len(base['files']),'sharedChangedFiles':shared,'sharedAttribution':'052 additions by this chat; concurrent 036 additions preserved in these same four files. Select hunks at publication.','draft052Changes':ours,'parallel036ChangesObserved':parallel,'unexpectedChanges':unexpected,'preexistingPdfEditionsUnchanged':all(current[k]==v for k,v in prior.items()),'preexistingPdfFilesUnchanged':all(sha('public/pdf/'+v['file'])==v['sha256'] for ed in prior.values() for v in ed.values()),'oldRulesUnchanged':all(sha(p)==h for p,h in base['files'].items() if p in ['AGENTS.md','PROJECT_PLAN.md'] or p.startswith('production/')),'all052ArticleBodiesUnchanged':all(sha(p)==h for p,h in base['files'].items() if p.startswith('drafts/catalog-052/') and '/overview/' not in p and p.endswith(('.ja.md','.en.md'))),'all052DiagramSourcesUnchanged':all(sha(p)==h for p,h in base['files'].items() if p.startswith('drafts/catalog-052/') and '/diagrams/' in p)}
assert not unexpected,unexpected
assert all(report[k] for k in ['preexistingPdfEditionsUnchanged','preexistingPdfFilesUnchanged','oldRulesUnchanged','all052ArticleBodiesUnchanged','all052DiagramSourcesUnchanged'])
(r/'preservation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
(r/'git-status-end.txt').write_bytes(subprocess.check_output(['git','status','--short']))
paths=set(shared+ours)
for name in ['README.md','SITE_HQ_HANDOFF.md','STAGE2_HANDOFF.md','RELEASE_CHECKLIST.md','inventory.json']:
 paths.add(str(r.parent/name))
for folder in [r,Path('public/diagrams/catalog-052')]:paths.update(str(p) for p in folder.rglob('*') if p.is_file() and p.name!='changes.tsv')
paths.update(['public/pdf/catalog-052-ja.pdf','public/pdf/catalog-052-en.pdf'])
lines=['path\tbytes\tsha256\tattribution']
for p in sorted(paths):
 kind='shared: 052 + concurrent 036; select hunks' if p in shared else '052 stage2'
 lines.append(f'{p}\t{Path(p).stat().st_size}\t{sha(p)}\t{kind}')
(r/'changes.tsv').write_text('\n'.join(lines)+'\n')
print(json.dumps({k:v for k,v in report.items() if k not in ['parallel036ChangesObserved']},ensure_ascii=False,indent=2))
