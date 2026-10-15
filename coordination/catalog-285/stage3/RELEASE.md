# カタログ285 公開・反映確認

第3段階完了。確認日時：2026-10-15T22:50:03+09:00。現在のユーザーの「第3段階」依頼により、公開対象のcommit・push・GitHub Pages反映確認を行った。

- 作業ブランチ：`main`。
- Pages配信成功：2026-10-15 22:48:01 JST（deploy job 116458473389）。
- 公開commit：`6aa567296d095899d398f96fce58337e5688e910`。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38742533184)：build・deploy成功（`actions-verified-jobs.json`、GitHub connectorで最終状態を照合）。
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
- 公開画面の代表例（日本語PC案内・英語375px案内・日本語375px主張欄・英語PC拡大図）を画像でも確認し、欠け・重なりなし。
- 第2段階から数学本文・図・PDFを変更していない。指定見本との比較とPDF全紙面点検は `../stage2/FORMAT_AND_QA.md`、`PDF_REVIEW_JA.md`、`PDF_REVIEW_EN.md`。

PDF SHA-256：

- ja：`7ac34ce2c3aa4b760cb8001d061706308e954896b61b09ffa1a79aaa9685d2ad`
- en：`1a462002b439c3fb4593bdc11c70ee2c3b18a252f48a8ff398d7b95ffe0ca539`

## 確認範囲と残る事項

執筆・内容点検は明示指定したAstra担当が原典から実施し、今回の公開工程はその確定成果物を公開した。全証明の独立検証や専門家査読を意味しない。残る逐次確率・Fourier計算、全diagram変形・核同定・rounding誤差、外部入力の全証明などは [CONTENT_REVIEW.md](../CONTENT_REVIEW.md) と日英記事末尾に記録。未調査の関係を「依存なし」と扱わない。

第1～第3段階の依頼範囲を完了し停止する。追加の数学点検・改訂は別依頼で、この記録、原典固定版台帳、CONTENT_REVIEW.mdを起点にし、Astra担当を明示指定する。原典PDF・確認画像・ローカルHTMLプレビューは作業先に保存し、公開リポジトリへは含めていない。
