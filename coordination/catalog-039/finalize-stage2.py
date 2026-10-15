from pathlib import Path
import json,hashlib,datetime,subprocess,re
r=Path.cwd();c=r/'coordination/catalog-039';s=c/'stage2'
links=(s/'logs/links-final.txt').read_text().strip();assert links.startswith('Checked '),links
assert 'pass 39' in (s/'logs/tests-final.txt').read_text()
assert '135 page(s)' in (s/'logs/build-final.txt').read_text()
assert len((s/'logs/pdf-check.txt').read_text().splitlines())==30
browser=json.loads((s/'browser.json').read_text());assert len(browser['pages'])==28 and len(browser['interactions'])==8 and not browser['pageErrors']
old=json.loads((s/'pdf-editions-before.json').read_text());manifest=json.loads(Path('src/data/pdf-editions.json').read_text());assert all(manifest[k]==v for k,v in old.items())
base=json.loads((s/'baseline.json').read_text());changed=[p for p,h in base['trackedHashes'].items() if Path(p).is_file() and hashlib.sha256(Path(p).read_bytes()).hexdigest()!=h]
assert set(changed)=={'src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs'},changed
before=json.loads((s/'pdf-review/before-link-fix-hashes.json').read_text());different=[p for p,h in before.items() if hashlib.sha256((s/'pdf-review'/p).read_bytes()).hexdigest()!=h]
assert not different,different
pdf=json.loads((s/'pdf-review/structure.json').read_text());assert all(pdf[l]['internalLinks']==33 for l in ['ja','en'])
for lang in ['ja','en']:
 assert Path(f'public/pdf/catalog-039-{lang}.pdf').read_bytes()==Path(f'dist/pdf/catalog-039-{lang}.pdf').read_bytes()
now=datetime.datetime.now().astimezone().isoformat()
summary={'finishedAt':now,'stage':2,'state':'publication-ready; stopped before commit/push','branch':'main','tests':39,'builtPages':135,'links':links,'browserViewports':28,'browserInteractionPaths':8,'pdfs':manifest['039'],'finalRasterPagesEqualToVisuallyReviewedPages':len(before),'existingCatalogPdfRecordsUnchanged':len(old),'trackedFilesChangedSinceStage2':changed,'mathematicalLimitation':'Chow49 original theorem statement/location; see CONTENT_REVIEW.md','commit':False,'push':False,'published':False}
(s/'completion.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
(s/'preservation.json').write_text(json.dumps({'existingEditionRecordsUnchanged':True,'existingCatalogCount':len(old),'pdfCopiesMatch':{'ja':True,'en':True},'diagramAndTexCopies':52,'trackedFilesChangedSinceStage2':changed,'finalPdfRasterPagesIdentical':len(before)},indent=2)+'\n')
with (c/'STAGE2_REPORT.md').open('a') as f:f.write(f'\n## 最終判定\n\n{now}：第2段階完了、公開準備完了として停止。最終check:links成功：{links}。再生成後の全109ページPNGは目視済み版とSHA-256がすべて一致し、紙面の変化はない。PDF内部リンクは日英各33件で、修正した案内5リンクを含め全destinationが解決。全30冊のcheck:pdf、修正後28画面・8操作経路、39テストも成功。commit・push・公開未実施。\n')
p=c/'RELEASE_CHECKLIST.md';t=p.read_text();t=t.replace('現在のユーザー依頼範囲：第1段階のみ。組込み・冊子PDF・commit・push・公開禁止。','現在のユーザー依頼範囲：第2段階（サイト組込み・日英PDF・公開前検査）。commit・push・公開は範囲外。')
t=t.replace('状態：内容編集済み（数学的保留を記録）。公開準備未着手。','状態：公開準備完了（第2段階、数学的保留を保持）。公開未実施。').replace('現在の段階：第1完了・停止。第2、第3は未実施。','現在の段階：第2完了・停止。第3は未実施。').replace('運用：今回の明示依頼により第1段階で停止。','運用：第1段階後の再開指示により第2段階を実施し停止。')
lines=[];publication=False
for line in t.splitlines():
 if line.startswith('## '):publication=line.startswith('## 公開（')
 if line.startswith('- [ ]') and not publication and '第3段階' not in line and '1本の場合：' not in line:
  line=line.replace('- [ ]','- [x]',1)+'〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕'
 if line.startswith('- [ ] 1本の場合：'):line+='〔対象外：4本構成〕'
 lines.append(line)
t='\n'.join(lines)+'\n';t=t.replace('| | | | |','| 公開・反映確認 | 次段階本部 | 未依頼・未実施 | STAGE3_HANDOFF.md |')
t+='\n## 第2段階での更新\n\n第1段階の履歴記述は当時の状態。現在はサイト組込み・日英PDF・全必須検査を完了して停止。数学的未照合は保持。リンク修正と再生成、全109ページ画像一致、28画面・8操作の証拠はSTAGE2_REPORT.md。公開節の4項目と第3段階は未実施のまま。\n'
p.write_text(t)
for file,text in {
'README.md':'\n## 第2段階完了\n\n2026-10-15：サイト登録、日英冊子、日本語52ページ／英語57ページ（各5章13図）、公開前検査を完了して停止。mainのままcommit・pushなし。[検査報告](STAGE2_REPORT.md)、[最終結果](stage2/completion.json)、[第3段階の再開手順](STAGE3_HANDOFF.md)。\n',
'SITE_HQ_HANDOFF.md':'\n## 追記：第2段階完了\n\n2026-10-15、上記の第2段階を実施。現在の状態と証拠はSTAGE2_REPORT.md、次の再開手順はSTAGE3_HANDOFF.md。公開準備完了、commit・push・公開未実施。\n',
'FORMAT_REVIEW.md':'\n## 第2段階の本番構成・PDF確認\n\n2026-10-15：組込み後の新buildで日英PC/375px、共通表・主張欄・文献案内・図・言語切替・拡大操作を確認。日英PDF109ページ・26図を点検。034/Schnell/033の比較画像はstage2/screenshots、紙面はstage2/pdf-review、結果はSTAGE2_REPORT.md。案内のbase外リンク10か所を修正し、再生成後も全ページ画像は目視済み版と一致。第1段階の「未実施」は当時の状態であり、第2段階の結果で更新した。\n'}.items():
 with (c/file).open('a') as f:f.write(text)
(s/'git-status-end.txt').write_text(subprocess.check_output(['git','status','--short'],text=True))
files=changed+[str(p.relative_to(r)) for root in [r/'public/diagrams/catalog-039',s] for p in root.rglob('*') if p.is_file()]+['public/pdf/catalog-039-ja.pdf','public/pdf/catalog-039-en.pdf','drafts/catalog-039/overview/article.ja.md','drafts/catalog-039/overview/article.en.md','drafts/catalog-039/overview/status.md']+[str(p.relative_to(r)) for p in c.glob('*') if p.is_file() and p.name in ['STAGE2_REPORT.md','STAGE3_HANDOFF.md','RELEASE_CHECKLIST.md','README.md','FORMAT_REVIEW.md','SITE_HQ_HANDOFF.md','stage2-browser.mjs','stage2-pdf-qa.py','check-links-cached.mjs','finalize-stage2.py']]
(s/'changed-files.txt').write_text('\n'.join(sorted(set(files)))+'\n')
print(json.dumps(summary,ensure_ascii=False,indent=2))
