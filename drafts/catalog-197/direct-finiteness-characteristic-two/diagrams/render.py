from pathlib import Path
import subprocess, tempfile, hashlib, json, os
import xml.etree.ElementTree as ET
ET.register_namespace("", "http://www.w3.org/2000/svg")
ET.register_namespace("xlink", "http://www.w3.org/1999/xlink")
D=Path(__file__).resolve().parent
ROOT=D.parents[3]
node='/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
subprocess.run([node,'scripts/sync-citations.mjs','--check','--text-only','--registry',str(D.parent/'citations.json')],cwd=ROOT,check=True)
env=os.environ.copy();env['PATH']='/Library/TeX/texbin:'+env.get('PATH','')
for source in sorted(D.glob('*.tikz')):
 for lang in ['ja','en']:
  tex=(D/'preamble.tex').read_text()+'\n'+('\\Japanesetrue\n' if lang=='ja' else '\\Japanesefalse\n')+(D/f'citations.{lang}.tex').read_text()+'\n\\begin{document}\n'+source.read_text()+'\n\\end{document}\n'
  target=D/f'{source.stem}.{lang}.tex'; target.write_text(tex)
  with tempfile.TemporaryDirectory() as tmp:
   log=subprocess.run(['/Library/TeX/texbin/xelatex','-no-pdf','-halt-on-error','-interaction=nonstopmode','-output-directory',tmp,str(target)],cwd=D,env=env,capture_output=True,text=True)
   if log.returncode: raise RuntimeError(log.stdout[-5000:])
   if 'Overfull' in log.stdout: print(source.stem,lang,'Overfull warning')
   subprocess.run(['/Library/TeX/texbin/dvisvgm','--no-fonts','--exact','--bbox=min','-o',str(D/f'{source.stem}.{lang}.svg'),str(Path(tmp)/f'{source.stem}.{lang}.xdv')],cwd=D,env=env,check=True,capture_output=True)
   svg=D/f'{source.stem}.{lang}.svg'
   svg.write_text(ET.tostring(ET.fromstring(svg.read_text()),encoding='unicode'))
files=['render.py','preamble.tex','citations.ja.tex','citations.en.tex']
for s in D.glob('*.tikz'):files += [s.name]+[f'{s.stem}.{l}.{ext}' for l in ['ja','en'] for ext in ['tex','svg']]
(D/'citation-build.json').write_text(json.dumps({n:hashlib.sha256((D/n).read_bytes()).hexdigest() for n in sorted(files)},indent=2)+'\n')
print('Rendered',len(list(D.glob('*.svg'))),'SVGs; manifest recorded.')
