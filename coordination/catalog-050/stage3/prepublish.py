"""Bind publication to the accepted artifacts without rebuilding them."""
import hashlib
import json
import pathlib
import subprocess
from datetime import datetime, timezone

root = pathlib.Path(__file__).resolve().parents[3]
out = root / 'coordination/catalog-050/stage3'
def read(p):
    return json.loads((root / p).read_text())
def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()
def git(*args):
    return subprocess.check_output(['git', *args], cwd=root)
def owned(p):
    return p.startswith(('coordination/catalog-050/', 'drafts/catalog-050/', 'public/diagrams/catalog-050/')) or p in {
        'public/pdf/catalog-050-ja.pdf', 'public/pdf/catalog-050-en.pdf',
        'src/data/site.mjs', 'src/data/pdf-editions.json',
        'src/components/CatalogMarkdownOverview.astro',
        'scripts/catalog-033.test.mjs', 'scripts/catalog-063.test.mjs'}

assert not git('diff', '--cached', '--name-only').strip(), 'Unexpected staged work'
errors = []
snapshot = read('coordination/catalog-050/validation/draft-snapshot.json')
for row in snapshot['files']:
    if row['file'].endswith('/status.md'):
        continue
    if digest(root / row['file']) != row['sha256']:
        errors.append('Changed accepted artifact: ' + row['file'])
run = 'coordination/catalog-050/stage2/runs/2026-10-22T03-03-31.866Z-99581'
report = read(run + '/report.json')
browser = read(run + '/browser/report.json')
for p, h in browser['htmlHashes'].items():
    if digest(root / 'dist' / p) != h:
        errors.append('Changed inspected HTML: ' + p)
for row in report['artifacts']['pdfs']:
    if digest(pathlib.Path(row['file'])) != row['sha256']:
        errors.append('Changed inspected PDF: ' + row['file'])
for p in (root / 'public/diagrams/catalog-050/ample-quadric').iterdir():
    if digest(p) != digest(root / 'drafts/catalog-050/ample-quadric/diagrams' / p.name):
        errors.append('Changed public diagram: ' + p.name)

head = git('rev-parse', 'HEAD').decode().strip()
if head != report['gitStart']['commit']:
    errors.append('HEAD changed since preparation')
head_manifest = git('show', 'HEAD:src/data/pdf-editions.json').decode()
old = json.loads(head_manifest)
current = read('src/data/pdf-editions.json')
if {k:v for k,v in current.items() if k != '050'} != old:
    errors.append('Unrelated PDF edition values changed')
assert head_manifest.endswith('\n}\n')
entry = json.dumps({'050': current['050']}, ensure_ascii=False, indent=2)
staged_manifest = head_manifest[:-3] + ',\n' + entry[2:-2] + '\n}\n'
assert json.loads(staged_manifest) == {**old, '050': current['050']}
index_copy = root / 'tmp/catalog-050-stage3/pdf-editions-index.json'
index_copy.parent.mkdir(parents=True, exist_ok=True)
index_copy.write_text(staged_manifest)
paths = git('ls-files', '-z', '-c', '-o', '--exclude-standard').decode().split('\0')
preserve = {p:digest(root/p) for p in paths if p and not owned(p) and (root/p).is_file()}
(out / 'unrelated-baseline.json').write_text(json.dumps(preserve, ensure_ascii=False, indent=2) + '\n')
result = {
    'checkedAt': datetime.now(timezone.utc).isoformat(), 'head': head,
    'preparation': '../stage2/runs/2026-10-22T03-03-31.866Z-99581/report.json',
    'contentReview': '../CONTENT_REVIEW.md', 'manualReview': '../PREPARATION_REVIEW.md',
    'sameAcceptedMathematics': not errors,
    'pdfEditionStaging': 'HEAD bytes plus the 050 entry; worktree formatting retained',
    'unrelatedBaseline': 'unrelated-baseline.json', 'errors': errors,
}
(out / 'prepublication.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({'state': 'ready' if not errors else 'failed', 'errors':errors, 'unrelatedFiles':len(preserve)}))
assert not errors
