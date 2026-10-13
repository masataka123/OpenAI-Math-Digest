from pathlib import Path
import re,json,subprocess,hashlib
p=Path('coordination/catalog-036'); s=json.loads((p/'sources/commit.json').read_text())['sha']
t=(p/'sources/CONTENTS.md').read_text();section=t[t.index('**036.'):t.index('**037.')]
ids=['kahler-numerical-semiampleness','projective-numerical-semiampleness','generalized-lc-minimal-models','minimal-models-numerical-dimension-one']
items=[]
for i,((title,path),pid) in enumerate(zip(re.findall(r'\[([^\]]+)\]\((preprints/[^)]+\.pdf)\)',section),ids),1):
 out=p/'sources'/f'{pid}.pdf';url=f'https://raw.githubusercontent.com/openai/math/{s}/{path}'
 subprocess.run(['curl','-L','--fail','-s',url,'-o',str(out)],check=True)
 subprocess.run(['pdftotext','-layout',str(out),str(out.with_suffix('.txt'))],check=True)
 info=subprocess.check_output(['pdfinfo',str(out)],text=True)
 items.append(dict(order=i,paperId=pid,title=title,displayName=title,citationKey=f'OpenAI26{chr(96+i)}',version=path.split('/')[-2],sourceCommit=s,pdfPages=int(re.search(r'Pages:\s+(\d+)',info)[1]),sha256=hashlib.sha256(out.read_bytes()).hexdigest(),sourceUrl=f'https://github.com/openai/math/blob/{s}/{path}',downloadUrl=url,existingArticle=None,draftDirectory=f'drafts/catalog-036/{pid}',worker=['agent-kahler','agent-projective','agent-generalized','HQ'][i-1],articleStatus='assigned'))
subprocess.run(['pdftotext','-layout',str(p/'sources/overview.pdf'),str(p/'sources/overview.txt')],check=True)
pages=(p/'sources/overview.txt').read_text().split('\f');page=next(i for i,t in enumerate(pages,1) if '036' in t and 'Numerical semiampleness' in t)
a=dict(catalogId='036',productionVersion='1.4 + 2026-10-12',preparedOn='2026-10-13',sourceCommit=s,overviewTitle='Numerical semiampleness and generalized minimal models',contentsTitle='Numerical semiampleness and generalized minimal models',titleJa='数値的半豊富性と一般化極小モデル',subject='Algebraic and complex geometry',overviewPdfPage=page,contentsUrl=f'https://github.com/openai/math/blob/{s}/CONTENTS.md',overviewUrl=f'https://github.com/openai/math/blob/{s}/overview.pdf',mode='multi',manuscripts=items)
(p/'inventory.json').write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(a,ensure_ascii=False,indent=2))
