from pathlib import Path
import re,json,subprocess,xml.etree.ElementTree as ET
P=Path(__file__).resolve().parent
report={}
mathsets=[]
def normalize(x):
    x=re.sub(r'\\text\{[^{}]*\}',r'TEXT',x)
    x=re.sub(r'\s+|\\,','',x)
    return x.replace('.$$','$$')
for lang in ['ja','en']:
    text=(P/f'article.{lang}.md').read_text()
    refs=dict(re.findall(r'^\[([^]]+)\]: (\S+)',text,re.M))
    uses=re.findall(r'(?<!!)\[[^\]]+\]\[([^]]+)\]',text)
    assert all(x in refs for x in uses)
    for path in re.findall(r'!\[[^\]]*\]\(([^)]+)\)',text):assert (P/path).is_file(),path
    math=re.findall(r'\$\$[\s\S]*?\$\$|\$(?:\\.|[^$])*?\$',text)
    mathsets.append([normalize(x) for x in re.findall(r'\$\$[\s\S]*?\$\$',text)])
    tex=r'\documentclass{article}\usepackage{amsmath,amssymb}\begin{document}'+'\n\n'.join(math)+r'\end{document}'
    q=P/f'math-check-{lang}.tex';q.write_text(tex)
    proc=subprocess.run(['xelatex','-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+str(P),str(q)],capture_output=True,text=True)
    if proc.returncode:print(proc.stdout[-3000:]);raise SystemExit(1)
    for ext in ['tex','aux','log','xdv']:(P/f'math-check-{lang}.{ext}').unlink(missing_ok=True)
    report[lang]={'mathExpressionsCompiled':len(math),'displayEquations':len(mathsets[-1]),'referenceDefinitions':len(refs)}
assert mathsets[0]==mathsets[1], 'display formulas differ'
for f in (P/'diagrams').glob('*.svg'):
    root=ET.parse(f).getroot()
    for a in root.iter('{http://www.w3.org/2000/svg}a'):
        assert a.get('{http://www.w3.org/1999/xlink}href','').startswith('https://')
report['displayMathParity']=True
report['svgXmlAndCitationUrls']=True
report['scope']='Local asset/reference resolution, TeX math compilation, display-math parity; not website integration or a proof correctness test.'
(P/'checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False))
