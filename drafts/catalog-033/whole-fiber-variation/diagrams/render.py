#!/usr/bin/env python3
"""Render only this article's bilingual diagrams (XeLaTeX + dvisvgm)."""
from pathlib import Path
import re, subprocess, tempfile, html, json
root=Path(__file__).resolve().parent
refs=dict(re.findall(r'^\[([^]]+)\]: (https?://\S+)$',(root.parent/'article.ja.md').read_text(),re.M))
preamble=(root/'preamble.tex').read_text()
urls='\n'.join('\\expandafter\\def\\csname source'+k+'\\endcsname{'+v+'}' for k,v in refs.items())
titles={
'parameter-field':('対数的飯高系からparameter fieldを構成する','Construct the parameter field from logarithmic Iitaka systems'),
'root-constancy':('root coverの最高Hodge成分から双有理的constancyへ','From the entire top Hodge line to birational constancy'),
'whole-fiber-descent':('飯高底の座標を保持した全ファイバーの降下','Descend the whole fiber retaining Iitaka-base coordinates'),
'projective-case':('空の境界によるCorollary 1.2への特殊化','Specialize to Corollary 1.2 with empty boundaries'),
'smooth-rigidity':('LAとTajiによるCorollary 1.3','Corollary 1.3 via LA and Taji')}
report=[]
with tempfile.TemporaryDirectory(prefix='math-digest-033-worker-b-tex-') as work:
 for stem,title in titles.items():
  body=(root/(stem+'.tikz')).read_text()
  labels=[m.group(1) for m in re.finditer(r'\\R\{[^}]+\}\{([^}]+)\}',body)]
  for i,lang in enumerate(('ja','en')):
   name=stem+'.'+lang
   tex=preamble+'\n\\Japanese'+('true' if lang=='ja' else 'false')+'\n'+urls+'\n\\begin{document}\n'+body+'\n\\end{document}\n'
   target=root/(name+'.tex');target.write_text(tex)
   args=['xelatex','-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+work,str(target)]
   run=subprocess.run(args,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,text=True)
   if run.returncode or re.search(r'Overfull \\[hv]box|Missing character:',run.stdout):
    print(run.stdout[-8000:]);raise SystemExit('TeX failed or overflow: '+name)
   svgpath=Path(work)/(name+'.svg')
   subprocess.run(['dvisvgm','--no-fonts','--bbox=papersize','-o',str(svgpath),str(Path(work)/(name+'.xdv'))],check=True,capture_output=True)
   svg=svgpath.read_text();n=[0]
   def link(m):
    label=labels[n[0]];n[0]+=1
    attrs=re.sub(r"xlink:href='([^']+)'",r'''xlink:href='\1' href="\1"''',m.group(1))
    return '<a '+attrs+' role="link" tabindex="0" aria-label="'+html.escape(label,quote=True)+'">'
   svg=re.sub(r'<a ([^>]+)>',link,svg)
   assert n[0]==len(labels),(name,n[0],len(labels))
   prefix='wv-'+name.replace('.','-')+'-'
   svg=re.sub(r"id='([^']+)'",lambda m:"id='"+prefix+m.group(1)+"'",svg)
   svg=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+prefix+m.group(1)+"'",svg)
   svg=re.sub(r'<\?xml[^>]*>\s*','',svg);svg=re.sub(r'<!--[\s\S]*?-->','',svg)
   svg=svg.replace('<svg ','<svg role="group" aria-labelledby="'+prefix+'title" ',1)
   svg=re.sub(r'(<svg[^>]*>)',lambda m:m.group(1)+'\n<title id="'+prefix+'title">'+html.escape(title[i])+'</title>',svg,count=1)
   (root/(name+'.svg')).write_text(svg)
   report.append({'file':name+'.svg','links':n[0],'overflow':False,'missingGlyphs':False})
   print('Rendered',name,'links',n[0],flush=True)
(root/'render-report.json').write_text(json.dumps(report,indent=2)+'\n')
