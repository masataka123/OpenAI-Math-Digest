from pathlib import Path
import json,datetime,subprocess
p=Path('coordination/catalog-036');out=p/'stage3'
sha=(out/'publication-commit.txt').read_text().strip();jobs=json.loads((out/'actions-jobs.json').read_text())['jobs'];assert len(jobs)==2 and all(j['conclusion']=='success' for j in jobs)
live=json.loads((out/'live-resources.json').read_text());assert len(live['resources'])==80 and all(r['matchesRelease'] and r['status']==200 for r in live['resources'])
browser=json.loads((out/'live-browser.json').read_text());assert len(browser['pages'])==28 and len(browser['interactions'])==8 and browser['errors']==[]
now=datetime.datetime.now().astimezone().isoformat();runs=json.loads((out/'actions-runs.json').read_text());run=next(x for x in runs['workflow_runs'] if x['head_sha']==sha);assert run['conclusion']=='success'
(out/'completion.json').write_text(json.dumps({'checkedAt':now,'status':'publication-verified','publicationCommit':sha,'branch':'main','actions':run['html_url'],'resourcesVerified':len(live['resources']),'browserViewports':len(browser['pages']),'interactionPaths':len(browser['interactions']),'paperVersionsUnchangedSinceStage2':True,'mathematicalOpenItems':'../UNRESOLVED.md'},indent=2)+'\n')
(p/'PUBLICATION.md').write_text(f'''# カタログ036 公開確認

**公開確認済み。** 確認日時：{now}。ユーザーの「第3段階お願いします」に基づき、本チャットがサイト本部を兼任して第3段階を実施した。

- 公開commit：`{sha}`、ブランチ`main`。
- [GitHub Actions]({run['html_url']})：build / deployとも成功。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/036/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/036/)
- [日本語PDF・56頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-036-ja.pdf) ／ [English PDF・62頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-036-en.pdf)

日英4記事、公式順の案内、日英32SVG・32TeXを公開。冊子は各5章・16図。数学的本文・図・冊子は第2段階で点検した版と同じで、再執筆・PDF再生成は行っていない。

## 検査

公開前の固定候補で39テスト、引用132ファイル、115ページbuild、126792内部リンク/asset、全24PDFの内容・ファイル整合性が成功。リンク検査は元のcheck-links.mjsを、固定候補に限ってファイル読込みキャッシュ付きで実行。CIでは通常の検査コマンドも全て成功した。

公開後は日英トップ・分野・案内・4記事の14HTML、32SVG、32TeX、2PDFの計80リソースでHTTP 200かつ検査済み候補とのSHA-256一致を確認した。実ブラウザーでは日英1280/375pxの28画面でMathJaxの実CDNを使い、ページ横はみ出し・数式エラー・破損画像・JavaScriptエラーなし。8操作経路で分野→案内→記事、日英切替と証明アンカー保持、TeX取得、図拡大/縮小/全体表示、図中の原典popup URL、案内の該当行へ戻る操作を確認。外部引用先の証明の再検証とは区別する。

証拠はstage3/tests.log、citations.log、build.log、links.log、pdf-check.log、actions-runs.json、actions-jobs.json、live-resources.json、live-browser.json、VISUAL_REVIEW.md。公開画面はstage3/screens/にローカル保存。紙面の全118頁の目視点検は第2段階のstage2/pdf-review/とVISUAL_REVIEW.mdに記録し、公開版PDFが同じハッシュであることを今回確認した。

## 変更範囲・保持

052の公開済みcommit 3887034を起点に、036の269ファイルをcommitした。共有4ファイル（site、PDF版情報、分野一覧を検査する2テスト）は036追加分だけ。制作ルール類の未コミット変更・034停止記録・052のローカル作業資料を保持。ブランチ切替・他担当の変更取消しはしていない。stage3/commit-scope.json、preservation.json参照。

原典PDF/抽出全文、作業HTML、大きな紙面・画面画像はローカル検証資料として保持し、公開commitに含めない。Web公開に必要な全原稿・生成元・引用・SVG/TeX・日英冊子はcommit済み。確認結果の追記は記録専用commitとして保存する。

## 数学的な確認限界

[UNRESOLVED.md](UNRESOLVED.md)の範囲を日英本文とPDFにも維持。Kähler中間全計算/period互換性、射影Frobenius全計算、generalized局所§§4–13の深い一様評価、一部教科書の原記述全照合は未確認。034 Kähler入力の記事10/4版と引用10/6版を区別した。公開確認は全証明の独立検証・専門家査読ではない。
''')
for name in ['README.md','HANDOFF.md','STAGE2_HANDOFF.md']:
 f=p/name;s=f.read_text();i=s.index('\n');s=s[:i+1]+'\n> 第3段階更新（2026-10-13）：日英サイト・図・PDFの公開確認まで完了。最新状態は [PUBLICATION.md](PUBLICATION.md)。以下は各段階終了時の履歴。\n'+s[i+1:];f.write_text(s)
f=p/'RELEASE_CHECKLIST.md';s=f.read_text().replace('現在の依頼：第2段階まで。**公開準備完了**。公開確認済みではない。','現在の依頼：第3段階。**公開確認済み**。PUBLICATION.md参照。').replace('- [ ] 第3段階：依頼範囲外。commit/push/deploy/公開反映確認は実施していない。','- [x] 第3段階：commit/push、Actions build/deploy成功、公開80リソース一致・28画面・8操作経路を確認。stage3/参照。').replace('現在は依頼範囲外。commit・push・GitHub Actions・公開URLでの日英記事/図/PDF反映確認はいずれも未実施。','ユーザーの第3段階指示で実施済み。PUBLICATION.mdとstage3/に公開commit・Actions・URLと照合結果を保存。').replace('| 公開・反映 | 公開指示を受けたサイト本部 | 未依頼 | 第3段階で実施 |','| 公開・反映 | 本チャットのサイト本部 | 公開確認済み | PUBLICATION.md、stage3/ |');f.write_text(s)
f=p/'UNRESOLVED.md';s=f.read_text()+'\n第3段階更新（2026-10-13）：日英公開サイト・図・PDFへの反映を確認済み。上記数学的未確認範囲は変更せず維持する。PUBLICATION.md参照。\n';f.write_text(s)
print(json.dumps({'status':'publication-verified','checkedAt':now,'resources':80,'viewports':28,'interactionPaths':8}))
