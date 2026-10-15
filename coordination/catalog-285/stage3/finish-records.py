from pathlib import Path
import json,datetime
root=Path.cwd();d=root/'coordination/catalog-285';s=d/'stage3'
a=json.loads((s/'actions-285.json').read_text());p=json.loads((s/'public-verification.json').read_text());b=json.loads((s/'site-browser.json').read_text())
jobs=json.loads((s/'actions-verified-jobs.json').read_text())['jobs']
assert {j['name'] for j in jobs}=={'build','deploy'} and all(j['status']=='completed' and j['conclusion']=='success' for j in jobs)
assert p['passed'] and p['releaseCommit']==a['head_sha']
rows=b['report'];display=[r for r in rows if r['name']!='navigation'];assert len(display)==16
for r in display:
 assert r['documentWidth']==r['width'] and not any([r['mathErrors'],r['missingAnchors'],r['duplicates'],r['emptyImages'],r['errors'],r['badResources']])
 assert r['languageVisibleAfterScroll'] and r['languageSwitch']['hash']=='#sources' and r['languageSwitch']['lang']!=r['lang']
 assert all(v['zoom'] and v['fit'] and v['allUrls'] and not v['duplicateIds'] and v['closesOnCitation'] for v in r['viewer'])
assert all(r['success'] for r in rows if r['name']=='navigation')
now=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9))).isoformat(timespec='seconds')
text=f'''# カタログ285 公開・反映確認

第3段階完了。確認日時：{now}。現在のユーザーの「第3段階」依頼により、公開対象のcommit・push・GitHub Pages反映確認を行った。

- 作業ブランチ：`main`。
- 公開commit：`{a['head_sha']}`。
- [GitHub Actions]({a['html_url']})：build・deploy成功（`actions-verified-jobs.json`、GitHub connectorで最終状態を照合）。
- 公開対象：公式順3論文の日英記事、日英カタログ案内、8種16枚のTeX/SVG、日英PDF、引用・内容点検・形式点検記録。変更一覧は `selected-files.json` と公開commit。
- 285だけを既存登録へ追加し、並行担当の087・159・287とその他の未コミット変更を保持した。共有表示部品・ワークフロー・検査スクリプトは変更していない。

## 公開先

| 言語 | カタログ | PDF |
|---|---|---|
| 日本語 | [案内](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/285/) | [37頁・4章8図](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-285-ja.pdf) |
| English | [Overview](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/285/) | [43 pages, 4 chapters, 8 figures](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-285-en.pdf) |

## 検査の証拠

- 公開候補：39テスト、66引用レジストリ／236生成対象、183ページのbuild、222,885内部リンク・画像参照、44冊のPDF版整合性が成功。`PRE_RELEASE.md`、`logs/`。
- 公開URL：日英12ページ（トップ・Operator algebras・285案内・3記事）の本文と見出しを公開候補に照合。全て一致。
- 16枚のSVG・16本の自己完結TeX・日英PDFをHTTP取得し、ローカル確定版とバイト単位で一致。`public-verification.json`。
- 公開サイトで実際のMathJaxを実行。285の日英8ページ×1280px／375pxの16条件で、横はみ出し・数式エラー・欠落アンカー・画像不読込・JavaScript例外・HTTPエラーなし。
- 言語切替のスクロール中の表示・アンカー維持、全図の拡大／全体表示／引用、PDFリンク、日英トップ→分野→285→記事の操作を確認。`site-browser.json`、`screens/`。
- 第2段階から数学本文・図・PDFを変更していない。指定見本との比較とPDF全紙面点検は `../stage2/FORMAT_AND_QA.md`、`PDF_REVIEW_JA.md`、`PDF_REVIEW_EN.md`。

PDF SHA-256：

- ja：`7ac34ce2c3aa4b760cb8001d061706308e954896b61b09ffa1a79aaa9685d2ad`
- en：`1a462002b439c3fb4593bdc11c70ee2c3b18a252f48a8ff398d7b95ffe0ca539`

## 確認範囲と残る事項

執筆・内容点検は明示指定したAstra担当が原典から実施し、今回の公開工程はその確定成果物を公開した。全証明の独立検証や専門家査読を意味しない。残る逐次確率・Fourier計算、全diagram変形・核同定・rounding誤差、外部入力の全証明などは [CONTENT_REVIEW.md](../CONTENT_REVIEW.md) と日英記事末尾に記録。未調査の関係を「依存なし」と扱わない。

第1～第3段階の依頼範囲を完了し停止する。追加の数学点検・改訂は別依頼で、この記録、原典固定版台帳、CONTENT_REVIEW.mdを起点にし、Astra担当を明示指定する。原典PDF・確認画像・ローカルHTMLプレビューは作業先に保存し、公開リポジトリへは含めていない。
'''
(s/'RELEASE.md').write_text(text)
f=d/'RELEASE_CHECKLIST.md';x=f.read_text();x=x.replace('第2段階まで（2026-10-15再開指示）','第3段階まで（2026-10-15公開指示）').replace('第2段階完了・公開前検査済み。第3段階は未実施・未依頼。','第3段階完了・公開反映確認済み。').replace('現在の段階：第2（組込み・日英PDF・公開前検査）完了。第3段階で再開。','現在の段階：第3（公開・反映確認）完了。').replace('運用：第1段階停止後のユーザー再開指示で第2段階を実施。第2段階報告後に停止。','運用：各段階のユーザー再開指示を受けて実施。第3段階の公開結果を報告して停止。')
x=x.replace('- [ ] 第3段階：','- [x] 第3段階：')
for item in ['公開する差分・最新Git状態','GitHub Actionsのbuild/deploy成功','公開URLで日英カタログ','公開URL・commit・確認結果']:
 x=x.replace('- [ ] '+item,'- [x] '+item)
x=x.replace('| commit・push・公開反映確認 | 第3段階サイト本部 | 依頼範囲外 | 第2段階完了後、別指示で再開 |','| commit・push・公開反映確認 | 本部 | 第3段階完了 | stage3/RELEASE.md、public-verification.json、site-browser.json |')
x+='\n## 第3段階の最終受領（2026-10-15）\n\n上記の第1・第2段階末尾は当時の履歴。現在は公開commit・push、Actionsのbuild/deploy成功、公開URL上の日英本文・全図・TeX・PDF一致と画面操作を確認済み。証拠は [stage3/RELEASE.md](stage3/RELEASE.md)。数学的未確認範囲は維持し、公開結果を報告して停止する。\n';f.write_text(x)
for name in ['DELIVERABLES.md','SITE_HQ_HANDOFF.md']:
 f=d/name;x=f.read_text();f.write_text('> 最新状態：第3段階の公開・反映確認を完了。[公開先・commit・検査結果](stage3/RELEASE.md)。以下は各段階の履歴。\n\n'+x)
print('Publication records finalized at',now)
