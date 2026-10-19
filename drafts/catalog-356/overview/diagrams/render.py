"""Render only the catalogue 356 overview diagrams; never copy to public."""
from pathlib import Path
import subprocess,tempfile,re,html,hashlib,json
root=Path(__file__).resolve().parent
repo=next(p for p in root.parents if (p/'scripts/sync-citations.mjs').exists())
subprocess.run(['node',str(repo/'scripts/sync-citations.mjs'),'--check','--text-only','--registry',str(root.parent/'citations.json')],cwd=repo,check=True)
preamble=(root/'preamble.tex').read_text()
with tempfile.TemporaryDirectory(prefix='catalog356-overview-') as tmp:
 for body in sorted(root.glob('*.tikz')):
  for lang in ('ja','en'):
   name=body.stem+'.'+lang
   tex=root/(name+'.tex')
   tex.write_text('% Generated from shared citation records and '+body.name+'\n'+preamble+'\n'+(root/f'citations.{lang}.tex').read_text()+'\n'+('\\Japanesetrue' if lang=='ja' else '\\Japanesefalse')+'\n\\begin{document}\n\\begin{tikzpicture}\n'+body.read_text()+'\n\\end{tikzpicture}\n\\end{document}\n')
   p=subprocess.run(['xelatex','-no-pdf','-no-shell-escape','-interaction=nonstopmode','-halt-on-error','-output-directory='+tmp,tex.name],cwd=root,capture_output=True,text=True)
   if p.returncode or re.search(r'Overfull \\[hv]box|Missing character:',p.stdout):raise RuntimeError(name+'\n'+p.stdout[-7000:])
   svgfile=root/(name+'.svg')
   subprocess.run(['dvisvgm','--no-fonts','--exact','--output='+str(svgfile),str(Path(tmp)/(name+'.xdv'))],check=True,capture_output=True)
   svg=svgfile.read_text()
   svg=re.sub(r"(\s[\w:-]+)='([^']*)'",lambda m:m[1]+'="'+html.escape(html.unescape(m[2]),quote=True)+'"',svg)
   prefix='catalog356-overview-'+name+'-'
   svg=re.sub(r'\bid="([^"]+)"',lambda m:'id="'+prefix+m[1]+'"',svg)
   svg=re.sub(r'(xlink:href|href)="#([^"]+)"',lambda m:m[1]+'="#'+prefix+m[2]+'"',svg)
   svg=svg.replace('<svg ','<svg role="group" aria-label="'+name+' catalogue overview" ',1)
   svgfile.write_text(svg)
   print(name,'OK')
files=[root/'render.py',root/'preamble.tex',root/'citations.ja.tex',root/'citations.en.tex']
for body in root.glob('*.tikz'):
 files.append(body)
 files.extend(root/(body.stem+'.'+lang+'.'+ext) for lang in ('ja','en') for ext in ('tex','svg'))
(root/'citation-build.json').write_text(json.dumps({p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(files)},indent=2)+'\n')
