#!/usr/bin/env python3
"""Regenerate only this article's bilingual SVGs. Requires XeLaTeX and dvisvgm."""
from pathlib import Path
import re, subprocess, tempfile, json, html, xml.etree.ElementTree as ET
root = Path(__file__).resolve().parent
preamble = (root/'preamble.tex').read_text()
names = {
 'main': ('主定理：相対飯高底上の切断比較と二つの射', 'Main theorem: exact sections and two maps from the Iitaka base'),
 'cancellation': ('随伴加法性：固定切断によるample捻りの相殺', 'Adjoint addition: cancel the ample twist with a fixed section'),
 'logarithmic': ('対数劣加法性：不変なorbifold基底との比較', 'Logarithmic subadditivity: comparison with the invariant orbifold base'),
 'characteristic-zero': ('標数0：幾何学的一般ファイバーと体拡大', 'Characteristic zero: geometric generic fibers and field extensions'),
}
records=[]
work_root=Path(tempfile.gettempdir())/'math-digest-033-worker-a'
work_root.mkdir(parents=True,exist_ok=True)
with tempfile.TemporaryDirectory(prefix='tikz-',dir=work_root) as work:
 for name,titles in names.items():
  body=(root/(name+'.tikz')).read_text()
  labels=re.findall(r'\\(?:OI|Fuj|Cam)\{([^{}]*)\}',body)
  labels=[s.replace('\\S','§').replace('--','–') for s in labels]
  for i,lang in enumerate(('ja','en')):
   stem=name+'.'+lang
   tex=preamble+'\n\\Japanese'+('true' if lang=='ja' else 'false')+'\n\\begin{document}\n'+body+'\n\\end{document}\n'
   (root/(stem+'.tex')).write_text(tex)
   proc=subprocess.run(['xelatex','-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+work,str(root/(stem+'.tex'))],cwd=root,text=True,stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
   Path(work,stem+'.stdout').write_text(proc.stdout)
   if proc.returncode or re.search(r'Overfull \\[hv]box|Missing character:',proc.stdout):
    raise RuntimeError(stem+'\n'+proc.stdout[-7000:])
   subprocess.run(['dvisvgm','--no-fonts','--bbox=papersize','-o',str(Path(work,stem+'.svg')),str(Path(work,stem+'.xdv'))],check=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
   svg=Path(work,stem+'.svg').read_text()
   prefix='oi-'+stem.replace('.','-')
   svg=re.sub(r"id='([^']+)'",lambda m:"id='"+prefix+'-'+m[1]+"'",svg)
   svg=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+prefix+'-'+m[1]+"'",svg)
   count=[0]
   def link(m):
    label=labels[count[0]];count[0]+=1
    return '<a tabindex="0" role="link" aria-label="'+html.escape(label,quote=True)+'" '+m[1]+'>'
   svg=re.sub(r'<a ([^>]+)>',link,svg)
   assert count[0]==len(labels),(stem,count,len(labels))
   svg=re.sub(r'<\?xml[^>]*>\s*','',svg)
   svg=re.sub(r'<!--[\s\S]*?-->','',svg)
   svg=svg.replace('<svg ','<svg role="group" aria-labelledby="'+prefix+'-title" ',1)
   svg=re.sub(r'(<svg[^>]*>)',r'\1\n<title id="'+prefix+'-title">'+html.escape(titles[i])+'</title>',svg,count=1)
   vb=re.search(r'viewBox=[\"\']([^\"\']+)',svg)[1].split()
   bg='<rect x=\"'+vb[0]+'\" y=\"'+vb[1]+'\" width=\"'+vb[2]+'\" height=\"'+vb[3]+'\" fill=\"white\"/>'
   svg=svg.replace('</title>','</title>'+bg,1)
   ET.fromstring(svg)
   (root/(stem+'.svg')).write_text(svg)
   records.append({'file':stem+'.svg','title':titles[i],'links':len(labels),'source':stem+'.tex','body':name+'.tikz'})
   print(stem+': '+str(len(labels))+' links, no overfull/missing-glyph diagnostics')
(root/'diagrams.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
