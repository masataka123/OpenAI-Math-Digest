from pathlib import Path
import subprocess,re,json,html
P=Path(__file__).resolve().parent
preamble=(P/'preamble.tex').read_text()
for bodypath in sorted(P.glob('*.tikz')):
    body=bodypath.read_text()
    for lang in ['ja','en']:
        stem=bodypath.stem+'.'+lang
        tex=preamble+'\n\\Japanese'+('true' if lang=='ja' else 'false')+'\n\\begin{document}\n'+body+'\n\\end{document}\n'
        (P/(stem+'.tex')).write_text(tex)
        result=subprocess.run(['xelatex','-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+str(P),str(P/(stem+'.tex'))],capture_output=True,text=True)
        if result.returncode or re.search(r'Overfull \\[hv]box|Missing character:',result.stdout):
            print(result.stdout[-5000:]); raise SystemExit(stem+' failed')
        subprocess.run(['dvisvgm','--no-fonts','--bbox=papersize','-o',str(P/(stem+'.svg')),str(P/(stem+'.xdv'))],check=True,capture_output=True)
        svg=(P/(stem+'.svg')).read_text()
        svg=svg.replace('<svg ','<svg role="img" aria-label="'+stem+'" ',1)
        svg=re.sub(r"id='([^']+)'",lambda m:"id='"+stem+'-'+m[1]+"'",svg)
        svg=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+stem+'-'+m[1]+"'",svg)
        (P/(stem+'.svg')).write_text(svg)
        for ext in ['aux','log','xdv']:(P/(stem+'.'+ext)).unlink(missing_ok=True)
        print(stem, 'OK',svg.count('<a '),'citation links')
