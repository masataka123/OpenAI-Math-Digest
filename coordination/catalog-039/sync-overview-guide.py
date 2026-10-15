from pathlib import Path
import json,re
r=Path('drafts/catalog-039/overview');data=json.loads((r/'sources.json').read_text())
for lang in ['ja','en']:
 p=r/f'article.{lang}.md';s=p.read_text();lines=[]
 for x in data['externalSources']:
  lines.append(f"- [{x['citationKey']}]({x['sourceUrl']}) {x['authors']} — *{x['title']}* — {x['guideRole'][lang]}; {x['version']}.")
 block='<!-- reference-guide -->\n'+'\n'.join(lines)+'\n<!-- /reference-guide -->'
 if '<!-- reference-guide -->' in s:s=re.sub(r'<!-- reference-guide -->[\s\S]*?<!-- /reference-guide -->',lambda m:block,s)
 else:s=re.sub(r'- OpenAI26a:[\s\S]*?- OpenAI26d:[^\n]+|- OpenAI26a：[\s\S]*?- OpenAI26d：[^\n]+',lambda m:block,s)
 p.write_text(s)
