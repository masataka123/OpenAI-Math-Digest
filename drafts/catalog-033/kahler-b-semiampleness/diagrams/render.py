"""Run in any directory: python3 /path/to/diagrams/render.py.
Requires XeLaTeX, xeCJK/Harano Aji and dvisvgm. Writes only here and a temporary directory.
Styles adapted from this repository's Schnell diagrams; retain the repository MIT attribution.
"""
from pathlib import Path
import subprocess,tempfile,re,html
root=Path(__file__).resolve().parent
with tempfile.TemporaryDirectory(prefix='math-digest-033-D-') as tmp:
 for tex in sorted(root.glob('*.tex')):
  if tex.name=='preamble.tex': continue
  p=subprocess.run(['xelatex','-no-pdf','-no-shell-escape','-interaction=nonstopmode','-halt-on-error','-output-directory='+tmp,tex.name],cwd=root,capture_output=True,text=True)
  if p.returncode or re.search(r'Overfull \\[hv]box|Missing character:',p.stdout):
   raise RuntimeError(p.stdout[-6000:])
  svgfile=root/(tex.stem+'.svg')
  subprocess.run(['dvisvgm','--no-fonts','--exact','--output='+str(svgfile),str(Path(tmp)/(tex.stem+'.xdv'))],check=True,capture_output=True)
  svg=svgfile.read_text(); prefix=root.parent.name+'-'+tex.stem
  svg=re.sub(r"id='([^']+)'",lambda m:"id='"+prefix+'-'+m[1]+"'",svg)
  svg=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+prefix+'-'+m[1]+"'",svg)
  svg=svg.replace('<svg ',f'<svg role="group" aria-label="{html.escape(tex.stem)} proof diagram" ')
  svgfile.write_text(svg)
  print(tex.name,'OK')
