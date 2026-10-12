from pathlib import Path
import json,datetime
root=Path('coordination/catalog-037');out=root/'stage3'
commit=(out/'publication-commit.txt').read_text().strip()
a=json.loads((out/'github-actions.json').read_text());r=json.loads((out/'live-resources.json').read_text());b=json.loads((out/'live-browser.json').read_text())
assert a['run']['head_sha']==commit and a['run']['conclusion']=='success'
assert all(x['conclusion']=='success' for x in a['jobs']['jobs'])
assert r['commit']==commit and len(r['resources'])==44 and all(x['matches'] for x in r['resources'])
assert len(b['pages'])==20 and len(b['interactions'])==4 and not b['errors'] and not b['failedRequests']
assert (out/'VISUAL_REVIEW.md').exists()
now=datetime.datetime.now().astimezone().isoformat();url=a['run']['html_url']
(root/'PUBLICATION.md').write_text(f'''# カタログ037 公開記録

第3段階（公開・反映確認）完了。ユーザーの「では第3段階に進んでください.」により実施。

- 公開commit：`{commit}`。
- GitHub Actions：[{a['run']['id']}]({url})、build / deploy とも成功。
- 確認完了：{now}。
- 日本語：https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/037/
- English：https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/037/
- 案内冒頭のPDFカード：日本語35頁・英語41頁、各3章8図。第2段階で画像点検した版と同じSHA-256。

## 公開前検査と反映確認

最新mainに037のみを加えた隔離スナップショットで、テスト39/39（失敗・skipなし）、引用29レジストリ／100ファイル、Astro 99ページ、内部リンク96,869件、全20冊のPDF版・ハッシュ照合が成功。実行ログはstage3/。公開commitの原稿・公開資産・組込みコード188ファイルは検査済みスナップショットと一致（tested-commit.json）。

配信された日英トップ・分野・037案内・2記事の10 HTML、16 SVG＋16 TeX、日英PDF2冊、合計44資産がHTTP 200で検査済み版とSHA-256一致（live-resources.json）。

実公開URLを実CDNのMathJaxで開き、日英・PC1280px／スマートフォン375pxの20画面条件、4操作経路を確認。横はみ出し、数式エラー、画像欠落、JavaScript例外、リクエスト失敗なし。分野→案内→記事→証明、アンカーを保持した言語切替、図拡大／縮小／全体表示、引用先への遷移、TeX取得、カタログへの復帰を確認。証拠はlive-browser.json、screens/、VISUAL_REVIEW.md。

第2段階の全76 PDFページ・全16図・034/Schnell/033 Orbifold Iitakaとの画面比較はSTAGE2_HANDOFF.mdを参照。公開PDFはその検査済み版と一致し、再生成していない。

## 変更範囲と保全

037の原稿・引用・図・日英PDF・点検記録、037のサイト登録／PDF版情報、4つの検査コード差分をcommitした。他カタログの本文・図・PDFを037担当から変更していない。開始時の11文書変更と034休止記録は未commitのまま保持。

作業中に別担当の338公開commit `6ff1d4b61e2b473a0946457d157fb1234080cf9c` がmainへ入ったため、Git状態のガードで旧baseへのstageを止め、新しいmainへ037だけを加えて再検査した。338の共通表示変更はその担当の先行commitに属する。最終公開commitの差分に338のファイルや共通表示部品は含まれない。base-update.json、commit-scope.json、preservation.jsonを参照。

再生成可能なpreview/reference-preview HTMLとPDF個別ページPNGはローカル保持してGit対象外。点検記録・コンタクトシート・比較画面・原典記録・公開資産はGitへ保存。完了記録は別の `[skip ci]` commitで保存し、配信対象は上記公開commit。

## 確認範囲・残作業・再開

主要結果、核心の証明本文、直接入力の記述と適用を照合した読解ガイドであり、全証明の独立再検証や専門家査読ではない。第1段階の留保を維持した。

- 全次元原稿：§§3–6の全局所解析、exponential inequalityの全計算、adjoint vanishing/liftingの全構成、全環論移行は独立再証明していない。
- 四次元原稿：slice charts・character-sensitive jet計数の全構成、Fourier testの全積分計算と数値strictnessは再計算していない。
- 外部入力の証明自体と、その先の依存の再帰的検証は対象外。正確な範囲はSOURCE_REVIEW.md、各sources.json、記事末尾に記録。

公開工程に残作業なし。追加改訂は新しい依頼範囲を定め、AGENTS/PROJECT_PLAN/production、SITE_HQ_HANDOFF.md、最新Git状態を確認して再開する。原稿・図の変更時は必要な引用生成・日英PDF生成・公開前検査を行う。
''')
p=root/'inventory.json';j=json.loads(p.read_text());j.update(stage='stage-3-published',stage2='complete',stage3='complete-published',publication={'commit':commit,'actionsRun':url,'verifiedAt':now,'jaUrl':'https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/037/','enUrl':'https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/037/'})
for m in j['manuscripts']:m['articleStatus']='published-content-reviewed'
p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
p=root/'SITE_HQ_HANDOFF.md';s=p.read_text();start=s.index('> **現在：');end=s.index('\n\n',start)
s=s[:start]+f'''> **現在：第3段階まで完了、公開・反映確認済み。** 公開commit `{commit}`。日英2記事・案内・16 SVG＋16 TeX・日英PDF（35/41頁）を公開し、Actions成功・配信44資産の一致・20画面条件・4操作経路を確認。最新の記録は [PUBLICATION.md](PUBLICATION.md)。作業場所は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。第2段階の詳細は [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md)。他担当の変更を保持し、公開工程の残作業はない。数学的未確認範囲はSOURCE_REVIEW.mdと記事末尾に維持。追加改訂時は最新Git状態・本記録・制作セットを読み、依頼された範囲で再開する。以下は第1段階停止時点の履歴。'''+s[end:];p.write_text(s)
p=root/'RELEASE_CHECKLIST.md';s=p.read_text().replace('現在：**第3段階・公開作業中**。第2段階の証拠はSTAGE2_HANDOFF.md。','現在：**第3段階まで完了・公開反映確認済み**。最新証拠はPUBLICATION.md。').replace('## 第3段階：明示的な公開指示により進行中','## 第3段階：完了').replace('- [ ] 最新Git状態','- [x] 最新Git状態').replace('- [ ] GitHub Actions','- [x] GitHub Actions').replace('- [ ] 公開URL・commit・未確認の数学的範囲を報告。','- [x] 公開URL・commit・未確認の数学的範囲をPUBLICATION.mdと引継ぎに記録。').replace('| 進行中 | 公開反映確認 |','| 完了・PUBLICATION.md | 追加改訂の依頼時に再開 |').replace('| 第3段階は公開指示後 |','| 公開済み |').replace('| 公開後に配信版を確認 |','| 公開配信版の一致を確認済み |');p.write_text(s)
p=root/'README.md';p.write_text(p.read_text()+f'\n## 第3段階の完了（2026-10-12）\n\n公開commit `{commit}`。日英2記事・案内・図・PDFを公開し、Actionsと実公開版の一致・画面操作を確認。詳細・未確認範囲・追加改訂手順はPUBLICATION.mdとSITE_HQ_HANDOFF.md。\n')
for p in Path('drafts/catalog-037').glob('*/status.md'):p.write_text(p.read_text()+f'\n## 第3段階・公開反映確認（2026-10-12）\n\n公開commit `{commit}`。日英ページ・図・PDFの配信版と表示操作を本部が確認。本文・数学的確認範囲は変更していない。公開記録：coordination/catalog-037/PUBLICATION.md。\n')
(out/'completion.json').write_text(json.dumps({'stage':3,'status':'complete-published','verifiedAt':now,'publicationCommit':commit,'actionsRun':url,'resources':44,'screenConditions':20,'interactionPaths':4,'jaPdfPages':35,'enPdfPages':41,'remainingPublicationWork':[]},indent=2)+'\n')
print('Stage 3 completion records written.')
