from pathlib import Path
import json,datetime,subprocess
r=Path('coordination/catalog-046');stage=r/'stage3'
runs=json.loads((stage/'actions-runs.json').read_text())['workflow_runs'];commit=(stage/'publication-commit.txt').read_text().strip()
run=next(x for x in runs if x['head_sha']==commit and x['conclusion']=='success')
jobs=json.loads((stage/'actions-jobs.json').read_text())['jobs'];assert all(j['conclusion']=='success' for j in jobs)
live=json.loads((stage/'live-resources.json').read_text());assert all(x['matchesRelease'] and x['status']==200 for x in live['resources'])
browser=json.loads((stage/'live-browser.json').read_text());assert len(browser['pages'])==20 and len(browser['interactions'])==4 and not browser['errors']
now=datetime.datetime.now().astimezone().isoformat()
p=r/'PUBLICATION.md';s=p.read_text().replace('状態：公開処理中。第3段階の依頼に基づきcommit・push済み、Actionsと公開反映を確認中。',f'状態：**公開確認済み**。確認日時：{now}。第3段階の依頼に基づきcommit・push・Actions・公開反映確認を完了。')
s=s.replace(f"- [GitHub Actions]({run['html_url']})",f"- [GitHub Actions]({run['html_url']}) のbuild/deploy成功。")
s+='''
## 公開後の反映確認

6 HTML（案内2・記事4）＋20 SVG＋20 TeX＋2 PDFの計48リソースがHTTP 200で、検査済み候補とSHA-256が全件一致。日本語36ページ・英語37ページのPDFも一致した。公開サイトの実ブラウザーで日英×1280/375pxのトップ・分野・案内・2記事の20条件と4操作経路を検査。実際のMathJax CDNを使用し、ページ横はみ出し・数式エラー・画像欠落・JavaScriptエラーなし。分野→案内→記事、言語切替時のアンカー維持、TeX取得、図の拡縮・全体表示、原典popup、一覧への復帰を確認した。

公開画面の代表画像を目視し、PDF導線、長い正式タイトル、AI注意書き、右上言語切替を確認。数学的な主張・図・PDFは第2段階の確認版と同じであり、公開操作に伴う内容改訂はない。証拠はstage3/actions-runs.json・actions-jobs.json・live-resources.json・live-browser.json・VISUAL_REVIEW.md、ローカル画像はstage3/screens/。
'''
p.write_text(s)
p=r/'RELEASE_CHECKLIST.md';s=p.read_text();s=s.replace('現在のユーザー依頼範囲：第2段階まで（追加依頼）','現在のユーザー依頼範囲：第3段階まで（追加依頼）').replace('状態：第2段階完了・ここで停止。公開は未実施。詳細と確認の限定はSTAGE2_HANDOFF.md。','状態：第3段階完了・公開確認済み。PUBLICATION.md参照。数学的確認の限定は維持。').replace('現在の段階：第2（組込み・日英PDF・公開前検査）','現在の段階：第3（公開・反映確認）').replace('今回は第2段階の成果物を報告して停止。','第3段階の追加指示により公開・反映確認を完了。');s=s.replace('- [ ]','- [x]');s=s.replace('| 公開・反映 | 次段階サイト本部 | 未実施・第3段階 | 公開指示後のみ |','| 公開・反映 | 本部 | 完了・第3段階 | PUBLICATION.md・stage3/ |');s+='\n## 第3段階の確認証拠\n\n'+now+'、本部。PUBLICATION.md記載の公開commit・Actions成功、48リソースのHTTP/ハッシュ一致、20表示条件と4操作経路を確認。上記の第1・第2段階の未実施記述は当時の履歴であり、現在は公開確認済み。数学的な未確認範囲は変更していない。\n';p.write_text(s)
p=r/'README.md';s=p.read_text().replace('現在は第2段階まで完了。日英サイト・冊子PDF・公開前検査を完了し、公開操作前に停止。現在の引継ぎは [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md)。','現在は第3段階まで完了・公開確認済み。公開URL・commit・Actions・反映検査は [PUBLICATION.md](PUBLICATION.md)。第2段階の履歴は [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md)。');p.write_text(s)
p=r/'STAGE2_HANDOFF.md';s=p.read_text();s=s.replace('\n## 状態と依頼範囲','\n追加の第3段階指示により公開・反映確認まで完了。現在の状態は [PUBLICATION.md](PUBLICATION.md)。以下は第2段階終了時点の履歴。\n\n## 状態と依頼範囲',1);p.write_text(s)
(stage/'completion.json').write_text(json.dumps({'checkedAt':now,'publicationCommit':commit,'actions':run['html_url'],'actionsSuccess':True,'liveResources':len(live['resources']),'browserViews':len(browser['pages']),'browserInteractions':len(browser['interactions']),'mathematicalScope':'unchanged from Stage1/Stage2','otherWorkPreserved':True},indent=2)+'\n')
paths=[str(p) for p in stage.glob('*') if p.is_file() and p.suffix in {'.json','.txt','.md','.log','.mjs','.py','.patch'}]
paths += [str(r/n) for n in ['PUBLICATION.md','RELEASE_CHECKLIST.md','README.md','STAGE2_HANDOFF.md']]
(stage/'record-paths.json').write_text(json.dumps(sorted(set(paths+[str(stage/'record-paths.json')])),indent=2)+'\n')
print(json.dumps({'status':'verified','resources':len(live['resources']),'checkedAt':now}))
