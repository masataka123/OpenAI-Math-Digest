from pathlib import Path
import json,re,hashlib,difflib
root=Path('coordination/catalog-067/stage2')
site=Path('src/data/site.mjs').read_text();before=(root/'baseline/site.mjs').read_text()
without=site.replace("import inventory067 from '../../coordination/catalog-067/inventory.json' with { type: 'json' };\n",'').replace(', "067"','')
without=re.sub(r"\}\)\), \.\.\.inventory067\.manuscripts\.map\(entry => \(\{[\s\S]+?(?=\}\)\), \.\.\.inventory068)",'',without)
without=re.sub(r"\}, \{\n  id: '067',[\s\S]+?(?=\}, \{\n  id: '068')",'',without)
assert without==before,'Shared site data changed beyond 067; inspect concurrent changes'
checks={'siteOtherCatalogsPreserved':True}
for name in ['catalog-033.test.mjs','catalog-063.test.mjs']:
 assert Path('scripts',name).read_text().replace("'063','067','068'","'063','068'")==(root/'baseline'/name).read_text()
checks['otherExpectedCatalogIdsPreserved']=True
a=json.loads((root/'baseline/pdf-editions.json').read_text());b=json.loads(Path('src/data/pdf-editions.json').read_text())
assert all(b.get(k)==v for k,v in a.items())
checks['preexistingPdfMetadataPreserved']=list(a)
checks['concurrentlyAddedPdfEditions']=[k for k in b if k not in a and k!='067']
checks['preexistingPdfHashesPreserved']=True
for k,v in a.items():
 for lang,entry in v.items():assert hashlib.sha256(Path('public/pdf',entry['file']).read_bytes()).hexdigest()==entry['sha256']
for lang,entry in b['067'].items():assert hashlib.sha256(Path('public/pdf',entry['file']).read_bytes()).hexdigest()==entry['sha256']
for ext in ['svg','tex']:
 for p in Path('public/diagrams/catalog-067/campana-peternell-six').glob('*.'+ext):assert p.read_bytes()==Path('drafts/catalog-067/campana-peternell-six/diagrams',p.name).read_bytes()
checks['diagramCopiesMatch']=24
(root/'preservation.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2)+'\n')
for name,source in [('site.mjs','src/data/site.mjs'),('catalog-033.test.mjs','scripts/catalog-033.test.mjs'),('catalog-063.test.mjs','scripts/catalog-063.test.mjs')]:
 old=(root/'baseline'/name).read_text().splitlines(True);new=Path(source).read_text().splitlines(True)
 (root/(name+'.067.patch')).write_text(''.join(difflib.unified_diff(old,new,fromfile='a/'+source,tofile='b/'+source)))
print(json.dumps(checks,ensure_ascii=False))
