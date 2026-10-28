"""Compare the deployed catalogue and its assets to the committed candidate."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import subprocess, hashlib, json, datetime

root = Path.cwd()
out = root / 'coordination/catalog-079/stage3'
candidate = Path(json.loads((out / 'candidate.json').read_text())['directory'])
origin = 'https://masataka123.github.io/OpenAI-Math-Digest/'
pairs = []
for lang in ['ja', 'en']:
    for route in ['', 'fields/real-complex-analysis/', 'catalog/079/',
                  'papers/euclidean-wave/', 'papers/critical-wave-three/']:
        pairs.append((lang + '/' + route, candidate / 'dist' / lang / route / 'index.html'))
for file in sorted((root / 'public/diagrams/catalog-079').rglob('*')):
    if file.is_file():
        pairs.append((str(file.relative_to(root / 'public')), file))
for lang in ['ja', 'en']:
    pairs.append((f'pdf/catalog-079-{lang}.pdf', root / f'public/pdf/catalog-079-{lang}.pdf'))

def check(pair):
    route, expected = pair
    content = subprocess.check_output(['curl', '--fail', '--silent', '--show-error',
                                      '--location', '--retry', '2', '--max-time', '60', origin + route])
    actual_hash = hashlib.sha256(content).hexdigest()
    expected_hash = hashlib.sha256(expected.read_bytes()).hexdigest()
    return {'url': origin + route, 'bytes': len(content), 'sha256': actual_hash,
            'expectedSha256': expected_hash, 'matches': actual_hash == expected_hash}

with ThreadPoolExecutor(max_workers=6) as pool:
    checks = list(pool.map(check, pairs))
record = {'checkedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
          'publicationCommit': (out / 'publication-commit.txt').read_text().strip(), 'checks': checks}
(out / 'live-assets.json').write_text(json.dumps(record, indent=2) + '\n')
bad = [c['url'] for c in checks if not c['matches']]
print(f'Live pages/assets: {len(checks)}; exact matches: {len(checks) - len(bad)}')
assert not bad, bad
