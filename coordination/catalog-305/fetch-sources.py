from pathlib import Path
import concurrent.futures, subprocess, re

ROOT=Path(__file__).resolve().parent
COMMIT='1581d4cbdd69a0faf34b2089614fe2a814316a6a'
text=(ROOT/'sources/CONTENTS.md').read_text()
block=text.split('**305.')[1].split('**306.')[0]
links=re.findall(r'\[([^\]]+)\]\((preprints/[^)]+\.pdf)\)',block)
ids=['boundary-only-disk-embedding','marked-tensor-disk-embedding','pd4-no-aspherical-model']
items=[('overview.tex','overview.tex'),('overview.pdf','overview.pdf')]+[(path,pid+'.pdf') for (_,path),pid in zip(links,ids)]
def fetch(item):
    path,name=item
    url=f'https://raw.githubusercontent.com/openai/math/{COMMIT}/{path}'
    target=ROOT/'sources'/name
    subprocess.run(['curl','--fail','--location','--silent','--show-error','--max-time','60',url,'--output',str(target)],check=True)
    return (name,target.stat().st_size)
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    for item in pool.map(fetch,items): print(item)
