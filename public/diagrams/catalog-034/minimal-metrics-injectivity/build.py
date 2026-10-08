"""Build only this draft's bilingual TikZ/XDV/SVG diagrams; no site files touched."""
import json, pathlib, subprocess, tempfile, re, html
ROOT=pathlib.Path(__file__).resolve().parent
spec=json.loads((ROOT/'diagrams.json').read_text())
preamble=(ROOT/'preamble.tex').read_text()
for item in spec['diagrams']:
    body=[r'\begin{tikzpicture}']
    for i,n in enumerate(item['nodes']):
        placement='' if i==0 else f',below={item.get("gap",2.1)}cm of n{i-1}'
        style='result' if i==len(item['nodes'])-1 else 'card'
        body.append(r'\node['+style+placement+f'] (n{i}) '+r'{\heading{'+str(i+1).zfill(2)+'}{'+n['title']['ja']+'}{'+n['title']['en']+'}'+r'\Tx{'+n['body']['ja']+'}{'+n['body']['en']+'}};')
        if i:
            e=item['edges'][i-1]
            refs=r'\quad '.join(r'\Cite{'+key+'}{'+label+'}' for key,label in e['refs'])
            body.append(r'\flow{n'+str(i-1)+'}{n'+str(i)+'}{'+r'\Tx{'+e['ja']+'}{'+e['en']+r'}\\[4pt]'+refs+'}')
    body.append(r'\end{tikzpicture}')
    tikz='\n'.join(body)+'\n'
    (ROOT/(item['id']+'.tikz')).write_text(tikz)
    for lang in ['ja','en']:
        stem=item['id']+'.'+lang
        urls='\n'.join(r'\newcommand{\source'+key+'}{'+url+'}' for key,url in spec['sources'].items())
        tex=preamble+'\n'+r'\Japanese'+('true' if lang=='ja' else 'false')+'\n'+urls+'\n'+r'\begin{document}'+'\n'+tikz+r'\end{document}'+'\n'
        (ROOT/(stem+'.tex')).write_text(tex)
        with tempfile.TemporaryDirectory(prefix='worker-c-tikz-') as tmp:
            run=subprocess.run(['xelatex','-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+tmp,str(ROOT/(stem+'.tex'))],capture_output=True,text=True)
            if run.returncode or re.search(r'Overfull \\[hv]box|Missing character:',run.stdout):
                raise RuntimeError(stem+'\n'+run.stdout[-9000:])
            svgpath=pathlib.Path(tmp)/(stem+'.svg')
            subprocess.run(['dvisvgm','--no-fonts','--bbox=papersize','-o',str(svgpath),str(pathlib.Path(tmp)/(stem+'.xdv'))],capture_output=True,check=True)
            svg=svgpath.read_text()
        ident=item['id']+'-'+lang+'-'
        svg=re.sub(r"id='([^']+)'",lambda m:"id='"+ident+m[1]+"'",svg)
        svg=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+ident+m[1]+"'",svg)
        title=html.escape(item['title'][lang])
        svg=svg.replace('<svg ',f'<svg role="img" aria-label="{title}" ',1)
        (ROOT/(stem+'.svg')).write_text(svg)
        print(stem,'OK',svg.count('<a '),'links')
print('Completed; no PDF output.')
