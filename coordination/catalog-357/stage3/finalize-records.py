from pathlib import Path
import json,datetime,hashlib,subprocess
b=Path('coordination/catalog-357');s=b/'stage3';pub=json.loads((s/'publication-commit.json').read_text())['commit'];runs=json.loads((s/'actions-runs.json').read_text())['workflow_runs'];run=next(x for x in runs if x['head_sha']==pub)
assert run['status']=='completed' and run['conclusion']=='success'
jobs=json.loads((s/'actions-jobs.json').read_text())['jobs'];assert {j['name']:j['conclusion'] for j in jobs}=={'build':'success','deploy':'success'}
assets=json.loads((s/'live-assets.json').read_text())['checks'];assert len(assets)==30 and all(x['matches'] for x in assets)
browser=json.loads((s/'browser-checks.json').read_text());assert len(browser['results'])==8 and all(x['status']=='pass' for x in browser['results'])
now=datetime.datetime.now().astimezone().isoformat();pdf=json.load(open('src/data/pdf-editions.json'))['357'];base='https://masataka123.github.io/OpenAI-Math-Digest/'
assert pdf==json.loads((b/'stage2/FINAL_STATUS.json').read_text())['pdf']
completion={'catalogId':'357','stage':3,'status':'published-and-verified','completedAt':now,'publicationCommit':pub,'actionsRun':run['html_url'],'actionsConclusion':'success','build':'success','deploy':'success','liveExactMatches':30,'liveBrowserViews':8,'pdf':pdf,'publicationUrls':{l:base+l+'/catalog/357/' for l in ['ja','en']},'remainingProductionWork':[],'mathematicalScope':'Unchanged from stages 1 and 2; local Poisson/Hessian/Bochner/Laplacian external hypotheses not exhaustively checked, full independent proofs/expert review/formal verification not performed'}
(b/'STAGE3_COMPLETION.json').write_text(json.dumps(completion,ensure_ascii=False,indent=2)+'\n')
report=f'''# カタログ357 公開・反映確認

- 完了：{now}。本部root、技術ブラウザーQA presentation357。数学内容の新規執筆・再点検なし。
- 公開指示：ユーザーの「第3段階をお願いします.」。
- 公開commit：`{pub}`。通常commit・push。先行356の`1b9166a26ed02cd6d66c91f95d67d32beb55bdb6`を親として保持。
- [Actions]({run['html_url']})：build/deployともsuccess。

## 公開成果物

- [日本語カタログ]({base}ja/catalog/357/) / [English catalogue]({base}en/catalog/357/)
- [日本語記事]({base}ja/papers/regular-rcd-coordinates/) / [English article]({base}en/papers/regular-rcd-coordinates/)
- [日本語PDF]({base}pdf/catalog-357-ja.pdf) / [English PDF]({base}pdf/catalog-357-en.pdf)
- 日英PDFは各20頁、2章、証明図5点。図中の引用リンク各18件を保持した第2段階受領版のまま公開。
- PDF SHA-256：JA `{pdf['ja']['sha256']}`、EN `{pdf['en']['sha256']}`。

## 確認結果

公開候補の限定snapshotでテスト39/39、引用79レジストリ286ファイル、215頁build、267,933内部参照、全52冊PDF一致を確認。全リンクの検査条件は共通scriptと同一で、繰り返し読込だけをcache化。GitHub Actionsでは通常の共通scriptも成功した。

公開8HTML（トップ/分野/カタログ/記事の日英）、10SVG、10TeX、2PDFの計30件をHTTP取得し、公開候補/受領assetsとのSHA完全一致を確認。公開ブラウザーでは日英カタログ/記事×1280/375pxの8条件、言語切替・アンカー・図拡大/全体表示/引用・PDF導線を確認。詳細はlive-assets.json、browser-checks.json、LIVE_BROWSER_REVIEW.md。

当初検査中に並行356が公開されたため、indexに書く前のHEADガードが停止。候補を新しいmainへ更新して再検査した。他担当の作業場ファイルは保持。共有site.mjs/pdf-editionsは357追加だけをcommit。原典PDF・抽出文・全画面画像はローカル証跡として保持し、URL/版/SHA/点検記録/再現scriptをcommitした。

生成ログとPDF内部の末尾空白を変更せず、空白検査は編集ソースで成功。PDFはバイト列一致を確認。記録だけの後続commitは[skip ci]で公開内容を変更しない。

## 数学的確認範囲と残作業

制作・公開の残作業なし。局所Poisson正則性、Hessian calculus、Bochner、距離Laplacian比較の外部各結果の全仮定の網羅照合、長い内部計算の独立再証明、外部証明の再帰検証、専門家査読・形式検証は未実施という留保をWeb/PDFに保持。機械的検査・公開成功を全証明の正しさの認定とはしない。

次の改訂時はこの公開commitとstage2/REPRODUCE.mdを起点に、変更箇所に応じて再点検する。
'''
(s/'PUBLICATION_REPORT.md').write_text(report)
p=b/'SITE_HQ_HANDOFF.md';old=p.read_text();p.write_text(f'# 最新状態：第3段階完了・公開確認済み\n\n{now}、公開commit `{pub}`。Actions build/deploy成功、公開30ファイル完全一致、日英PC/375pxの8条件確認済み。必須の日英PDFを含め公開残作業なし。[公開報告](stage3/PUBLICATION_REPORT.md)・[完了記録](STAGE3_COMPLETION.json)を参照。以下は過去段階の引継ぎ履歴。数学的確認範囲は不変。\n\n---\n\n'+old)
p=b/'RELEASE_CHECKLIST.md';old=p.read_text();(s/'RELEASE_CHECKLIST.stage2.md').write_text(old);old=old.replace('今回の指示は第2段階。commit・push・公開は未依頼。','ユーザーの第3段階指示により、commit・push・公開反映確認まで完了。').replace('- [ ] 第3段階：公開指示後、対象差分の選別commit・push・Actions・公開日英ページ/図/PDFの反映確認。',f'- [x] 第3段階：357のみをcommit/push、Actions build/deploy成功、公開30件SHA一致と8画面条件を確認。公開commit {pub[:7]}。').replace('公開は現在の依頼範囲外。第3段階の具体的手順はSITE_HQ_HANDOFF.md。','第3段階完了。結果はstage3/PUBLICATION_REPORT.md。');p.write_text(old)
p=b/'README.md';old=p.read_text();p.write_text('# 最新状態：カタログ357公開確認済み\n\n第3段階まで完了。STAGE3_COMPLETION.jsonとstage3/PUBLICATION_REPORT.mdを参照。以下は制作履歴。\n\n'+old)
p=b/'inventory.json';j=json.loads(p.read_text());j['manuscripts'][0]['articleStatus']='第3段階完了：日英サイト・図・日英PDF公開反映確認済み。数学的確認範囲は記事末尾の留保を維持。';p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
for part in ['overview','regular-rcd-coordinates']:
 p=Path('drafts/catalog-357')/part/'status.md'
 with p.open('a') as f:f.write(f'\n## 第3段階公開（{now}）\n\n本部が受領本文・図・PDFを変更せずcommit `{pub}` で公開。Actions成功、日英公開ページ・図・PDFの一致と実ブラウザー操作を確認。coordination/catalog-357/stage3/PUBLICATION_REPORT.md参照。数学的未確認範囲は不変。\n')
print('Publication records finalized:',now)
