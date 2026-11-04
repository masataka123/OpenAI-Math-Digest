"""Verify the scoped publication tree using the repository's common commands."""
from pathlib import Path
import subprocess, json, datetime, time, hashlib

root = Path(__file__).resolve().parents[3]
records = root/'coordination/catalog-340/stage3'
candidate = Path(json.loads((records/'release-candidate.json').read_text())['directory'])
node = json.loads((root/'coordination/catalog-340/validation/environment.json').read_text())['node']
steps = [
    ('tests', ['--test', *sorted(str(p.relative_to(candidate)) for p in (candidate/'scripts').glob('*.test.mjs'))]),
    ('citations', ['scripts/sync-citations.mjs', '--check']),
    ('build', ['node_modules/astro/astro.js', 'build']),
    ('links', ['scripts/check-links.mjs']),
    ('pdf', ['scripts/build-catalog-pdf.mjs', '--check']),
]
results = []
for name, args in steps:
    started = time.monotonic()
    with (records/('release-'+name+'.log')).open('w') as log:
        outcome = subprocess.run([node, *args], cwd=candidate, stdout=log, stderr=subprocess.STDOUT)
    results.append({'step':name, 'seconds':round(time.monotonic()-started, 2), 'exitCode':outcome.returncode})
    (records/'release-checks.json').write_text(json.dumps(results, indent=2)+'\n')
    print(name, outcome.returncode, flush=True)
    if outcome.returncode: raise SystemExit(outcome.returncode)

browser = json.loads((root/'coordination/catalog-340/stage2/runs/2026-11-04T06-40-20.460Z-41751/browser/report.json').read_text())
compared = []
for rel, expected in browser['htmlHashes'].items():
    digest = hashlib.sha256((candidate/'dist'/rel).read_bytes()).hexdigest()
    compared.append({'route':rel, 'sha256':digest, 'matchesStage2':digest==expected})
(records/'release-html.json').write_text(json.dumps(compared, indent=2)+'\n')
if not all(x['matchesStage2'] for x in compared):
    raise SystemExit('Published candidate differs from the Stage 2 inspected HTML')
print('All common checks and Stage 2 HTML identity passed.', flush=True)
