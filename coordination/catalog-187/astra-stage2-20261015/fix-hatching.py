from pathlib import Path
import re,json,shutil
run=Path(__file__).parent; root=run.parents[2]; d=root/'drafts/catalog-187/snaky-in-21-maker-moves/diagrams'; archive=run/'before-hatching-fix';archive.mkdir(exist_ok=True)
for p in d.glob('finite-board.*'):shutil.copy2(p,archive/p.name)
p=d/'finite-board.tikz';s=p.read_text();coords=[]
def replace(m):
 x,y=map(int,m.groups());coords.append((x,y));lines=[f'\\draw[fill=white,draw=soft] ({x},{y}) rectangle +(1,1);',f'% Explicit hatching outside T727: ({x},{y}); no SVG pattern dependency.']
 # Seven diagonal segments contained strictly in this cell, leaving the frame clear.
 for k in range(-3,4):
  offset=k*.22; lo=max(.05,.05-offset);hi=min(.95,.95-offset)
  lines.append(f'\\draw[soft,sharp corners,line width=.3pt] ({x+lo:.3f},{y+lo+offset:.3f}) -- ({x+hi:.3f},{y+hi+offset:.3f});')
 return '\n'.join(lines)
s,n=re.subn(r'\\draw\[pattern=north east lines,pattern color=soft,draw=soft\] \((\d+),(\d+)\) rectangle \+\(1,1\);',replace,s)
t=set(map(tuple,json.loads((root/'coordination/catalog-187/astra-20261015/validation/reconstruction/INDEPENDENT-RESULT.json').read_text())['final']['T']))
assert n==38 and set(coords)=={(x,y) for x in range(17) for y in range(17)}-t
p.write_text(s)
(run/'hatching-fix.json').write_text(json.dumps({'cells':n,'segmentsPerCell':7,'matchesComplementOf251CellEnvelope':True,'changedCoordinates':coords,'reason':'SVG pattern hatching was absent from WeasyPrint PDF; explicit line segments preserve board semantics in both renderers.'},indent=2)+'\n')
print('Replaced hatching in exactly 38 complement cells; envelope unchanged.')
