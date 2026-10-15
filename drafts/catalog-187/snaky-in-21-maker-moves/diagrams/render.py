"""Stage-1 renderer: self-contained TeX and SVG only; no public copies or PDFs."""
from pathlib import Path
import subprocess,tempfile,re,html,hashlib,json,os
root=Path(__file__).resolve().parent;repo=root.parents[3]
node=os.environ.get('DIGEST_NODE','/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node')
subprocess.run([node,str(repo/'scripts/sync-citations.mjs'),'--check','--text-only','--registry',str(root.parent/'citations.json')],cwd=repo,check=True)
with tempfile.TemporaryDirectory(prefix='astra187-') as tmp:
 for body in sorted(root.glob('*.tikz')):
  for lang in ['ja','en']:
   name=body.stem+'.'+lang
   text='% Generated from current Astra diagram sources.\n'+(root/'preamble.tex').read_text()+'\n'+(root/f'citations.{lang}.tex').read_text()+'\n'+('\\Japanesetrue' if lang=='ja' else '\\Japanesefalse')+'\n\\begin{document}\n\\begin{tikzpicture}\n'+body.read_text()+'\n\\end{tikzpicture}\n\\end{document}\n'
   tex=root/(name+'.tex');tex.write_text(text)
   p=subprocess.run(['/Library/TeX/texbin/xelatex','-no-pdf','-no-shell-escape','-interaction=nonstopmode','-halt-on-error','-output-directory='+tmp,str(tex)],cwd=root,capture_output=True,text=True)
   if p.returncode or re.search(r'Overfull \\[hv]box|Missing character:',p.stdout):raise RuntimeError(name+'\n'+p.stdout[-6000:])
   svg=root/(name+'.svg')
   subprocess.run(['/Library/TeX/texbin/dvisvgm','--no-fonts','--exact','--output='+str(svg),str(Path(tmp)/(name+'.xdv'))],check=True,capture_output=True)
   text=svg.read_text();text=re.sub(r"(\s[\w:-]+)='([^']*)'",lambda m:m[1]+'="'+html.escape(html.unescape(m[2]),quote=True)+'"',text)
   prefix='astra187-'+name+'-';text=re.sub(r'\bid="([^"]+)"',lambda m:'id="'+prefix+m[1]+'"',text);text=re.sub(r'(xlink:href|href)="#([^"]+)"',lambda m:m[1]+'="#'+prefix+m[2]+'"',text)
   text=re.sub(r'url\(#([^)]+)\)',lambda m:'url(#'+prefix+m[1]+')',text)
   svg.write_text(text);print(name,'OK',flush=True)
files=[root/n for n in ['render.py','preamble.tex','citations.ja.tex','citations.en.tex']]
for b in sorted(root.glob('*.tikz')):files.extend([b]+[root/(b.stem+'.'+l+'.'+e) for l in ['ja','en'] for e in ['tex','svg']])
(root/'citation-build.json').write_text(json.dumps({p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in files},indent=2)+'\n')
