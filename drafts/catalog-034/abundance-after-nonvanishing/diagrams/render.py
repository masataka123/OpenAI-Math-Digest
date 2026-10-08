"""Render local bilingual TikZ specifications; requires XeLaTeX, dvisvgm, and Node/sharp."""
from pathlib import Path
import json, subprocess, re, xml.etree.ElementTree as ET
D=Path(__file__).resolve().parent
preamble=D.joinpath('preamble.tex').read_text()
spec=json.loads(D.joinpath('spec.json').read_text())
for diagram in spec['diagrams']:
    lines=[r'\begin{tikzpicture}']
    for i,node in enumerate(diagram['nodes']):
        pos='' if i==0 else ',below=2.0cm of n'+str(i-1)
        style='result' if i==len(diagram['nodes'])-1 else 'card'
        lines.append(r'\node['+style+pos+'] (n'+str(i)+r') {\heading{'+str(i+1).zfill(2)+'}{'+node['ja']+'}{'+node['en']+'}'+node['math']+'};')
        if i:
            edge=diagram['edges'][i-1]
            refs='\\quad '.join(r'\CiteSource{'+r['key']+'}{'+r['label']+'}' for r in edge['refs'])
            lines.append(r'\flow{n'+str(i-1)+'}{n'+str(i)+r'}{\Tx{'+edge['ja']+'}{'+edge['en']+r'}\\[4pt]'+refs+'}')
    lines.append(r'\end{tikzpicture}')
    body='\n'.join(lines)
    D.joinpath(diagram['id']+'.tikz').write_text(body+'\n')
    for lang in ['ja','en']:
        stem=diagram['id']+'.'+lang
        tex=preamble+'\n'+''.join(r'\expandafter\def\csname source'+k+r'\endcsname{'+v+'}\n' for k,v in spec['sources'].items())+'\n\\Japanese'+('true' if lang=='ja' else 'false')+'\n\\begin{document}\n'+body+'\n\\end{document}\n'
        D.joinpath(stem+'.tex').write_text(tex)
        run=subprocess.run(['xelatex','-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+str(D),str(D/(stem+'.tex'))],capture_output=True,text=True)
        D.joinpath(stem+'.compile.txt').write_text(run.stdout)
        if run.returncode or re.search(r'Overfull \\[hv]box|Missing character:',run.stdout): raise RuntimeError(stem+' '+run.stdout[-4000:])
        subprocess.run(['dvisvgm','--no-fonts','--bbox=papersize','-o',str(D/(stem+'.svg')),str(D/(stem+'.xdv'))],check=True,capture_output=True)
        svg=D.joinpath(stem+'.svg').read_text()
        # Unique glyph IDs when several diagrams are embedded inline.
        svg=re.sub(r"id='([^']+)'",lambda m:"id='"+stem+'-'+m[1]+"'",svg)
        svg=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+stem+'-'+m[1]+"'",svg)
        svg=re.sub(r'(<svg[^>]*>)',r'\1<rect width="100%" height="100%" fill="white"/>',svg,count=1)
        D.joinpath(stem+'.svg').write_text(svg)
        ET.fromstring(svg)
        node='/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
        js="require(process.argv[1])(process.argv[2]).resize({width:1100}).flatten({background:'#ffffff'}).png().toFile(process.argv[3]).catch(e=>{console.error(e);process.exit(1)})"
        subprocess.run([node,'-e',js,str(D.parents[3]/'node_modules/sharp'),str(D/(stem+'.svg')),str(D/(stem+'.png'))],check=True)
        count=svg.count('<a ')
        print(stem, 'links',count)
        for ext in ['aux','log','xdv']:
            D.joinpath(stem+'.'+ext).unlink(missing_ok=True)
