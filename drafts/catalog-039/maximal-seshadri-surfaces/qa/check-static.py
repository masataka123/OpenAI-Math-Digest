from pathlib import Path
import re,json,hashlib
root=Path(__file__).resolve().parents[1]
a=(root/'article.ja.md').read_text();b=(root/'article.en.md').read_text()
fa=re.findall(r'\$\$([\s\S]*?)\$\$',a);fb=re.findall(r'\$\$([\s\S]*?)\$\$',b)
checks={'displayFormulaCount':{'ja':len(fa),'en':len(fb)},'displayFormulaExactParity':fa==fb,'citationMarkerSequenceParity':re.findall(r'<!-- cite:([^>]+) -->',a)==re.findall(r'<!-- cite:([^>]+) -->',b),'proofTargetParity':re.findall(r'<!-- proof-target:(\d+) -->',a)==re.findall(r'<!-- proof-target:(\d+) -->',b),'headingCounts':{l:{'h2':len(re.findall('^## ',x,re.M)),'h3':len(re.findall('^### ',x,re.M))} for l,x in [('ja',a),('en',b)]},'figureManifestVerified':all(hashlib.sha256((root/'diagrams'/name).read_bytes()).hexdigest()==value for name,value in json.loads((root/'diagrams/citation-build.json').read_text()).items())}
(root/'qa/static-checks.json').write_text(json.dumps(checks,indent=2)+'\n')
assert checks['displayFormulaExactParity'] and checks['citationMarkerSequenceParity'] and checks['proofTargetParity'] and checks['figureManifestVerified']
print(json.dumps(checks,indent=2))
