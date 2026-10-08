from pathlib import Path
import re,json,subprocess,xml.etree.ElementTree as ET
from PIL import Image
D=Path(__file__).resolve().parent; A=D.parent
texts=[(A/('article.'+l+'.md')).read_text() for l in ['ja','en']]
norm=lambda s:re.sub(r'\s+','',s).rstrip('.,')
displays=[[norm(x) for x in re.findall(r'\$\$([\s\S]*?)\$\$',s)] for s in texts]
assert displays[0]==displays[1], 'Display formula mismatch'
math=[x or y for s in texts for x,y in re.findall(r'\$\$([\s\S]*?)\$\$|\$([^\n$]+)\$',s)]
(D/'math-check.tex').write_text('\\documentclass{article}\n\\usepackage{amsmath,amssymb,mathrsfs}\n\\begin{document}\n'+'\n\n'.join('$'+x+'$' for x in math)+'\n\\end{document}')
subprocess.run(['xelatex','-no-pdf','-interaction=batchmode','-halt-on-error','-no-shell-escape','-output-directory='+str(D),str(D/'math-check.tex')],check=True,capture_output=True)
for s in texts:
 for p in re.findall(r'!\[[^\]]*\]\(([^)]+)\)',s):assert (A/p).exists()
 for key in re.findall(r'\]\[([^\]]+)\]',s):assert re.search(r'^\['+re.escape(key)+r'\]: https://',s,re.M)
count=0
for d in json.loads((D/'spec.json').read_text())['diagrams']:
 name=d['id'];ims=[]
 for lang in ['ja','en']:
  svg=(D/(name+'.'+lang+'.svg')).read_text();ET.fromstring(svg);count+=svg.count('<a ')
  ims.append(Image.open(D/(name+'.'+lang+'.png')).convert('RGB'))
 out=Image.new('RGB',(2200,max(im.height for im in ims)),'white')
 for i,im in enumerate(ims):out.paste(im,(1100*i,0))
 out.save(D/(name+'.qa.png'))
report={'displayFormulaPairs':len(displays[0]),'mathExpressionsCompiled':len(math),'svgCitationLinks':count,'localImagesExist':True,'referenceLabelsResolve':True,'svgXML':True,'visualReview':'See status.md; not automated.'}
(A/'checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
for ext in ['aux','log','xdv']:(D/('math-check.'+ext)).unlink(missing_ok=True)
print(report)
