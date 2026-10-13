# 052 第1段階：形式・画面の比較記録

2026-10-13、本部。制作セット1.4と現行補足を適用。051は標準見本に使っていない。

## 比較方法と範囲

- 052の下書きを共通の `renderDraft`、`renderCatalogInventory`、既存共通CSS、MathJaxで描画。生成先は本フォルダの `preview/` のみ。サイト登録・公開用資産配置はしていない。
- 見本は作業開始時から存在する `dist/` の034・Schnell・033 Orbifold Iitaka。既存ビルドを読み取り、スクリプトを外した比較用HTMLを `reference-preview/` へ保存した。既存ソース・distは変更していない。
- 052の日英3ページを1280px/375pxで確認（12条件）。比較見本も日英・両幅を撮影。ファイル一覧は `reference-comparison.json`。
- `screenshots/` に定理欄、文献一覧、証明節、共通表と図の画像を保存。本部は主要画面と対照図2枚を目視。別担当source_reviewは記事14図を原典と照合して目視（REVIEW_SOURCE.md）。

## 見本との対応

| 項目 | 比較見本・証拠 | 052の結果 |
|---|---|---|
| 公式順4列表 | reference-catalog-034.*.table.png と overview.*.papers.png | 同じ共通表レンダラー。正式タイトル・短い表示名・版・ページ・原典リンク・主張・役割・記事導線が2行で揃う。スマホでは表領域だけ横スクロール、文書全体の横はみ出しなし。 |
| 主要結果 | reference-papers-schnell-fiber-spaces.*.results.png と両記事*.results.png | 原典順の仮定・全結論・数式・原典引用。共通の緑の左辺を持つ主張欄。新しいMarkdown側では見出しと引用を共通rendererが表示し、Schnell専用コンポーネントの番号配置の細部は複製しない。 |
| 文献案内 | reference-papers-orbifold-logarithmic-iitaka.*.diagramsources.png と両記事*.diagram-sources.png | 最初の図より前に本稿番号の意味・外部キー・著者・正式タイトル・参照版・用途・原典リンク。著者由来キーの1.4形式を用いる。Hor08は誌面/PDFの対応を表示。 |
| 主張→図→文章 | Schnellのargument、Orbifoldのproof1と052のproof-*.png | 主結果を参照してから図、その直後に段階説明。独立したProposition 2.1には図前に完整な主張。主要結果の全結論には説明アンカーがある。 |
| 図の可読性 | 全16 SVG、記事14画像＋overview日英figure画像 | TeXコンパイルでoverfull/missing glyphを検査。箱・矢印・説明・リンクは別の余白に配置。日本語図は日本語説明。長い引用の多い図は拡大表示で読む設計。 |

## 実行結果

- `citation-check.log`：3レジストリ、本文/TeX引用12ファイルの `--check --text-only` 成功。
- `diagram-checks.json`：日英16SVG、生成元・出力のハッシュ照合に不一致なし。SVG内は管理されたHTTPS引用。
- `preview-checks.json`：日英6HTMLのMathJaxエラー0、主張・結論対応アンカーの欠落0。
- `screen-checks.json`：12条件でページ幅の超過0、数式エラー0、右上の言語導線表示。
- `link-checks.json`：ローカル記事・アンカー・図・TeXの124参照、エラー0。外部リンクをすべてHTTP検査したという意味ではない。
- `preservation-check.json`：開始時の追跡ファイルの内容を保持。036の並行制作ファイルは本部の変更対象外。

## 第2段階に残す表示検査

これは内容点検用の静的プレビューであり、公開版の最終画面検査ではない。共通Layoutのキャラクター・AI注意書き、正式ナビゲーション、図ポップアップ、言語切替のアンカー保持、GitHub Pagesのbase path、PDFへの導線は第2段階の実際の組込み後に再確認する。日英PDFの数式・図・リンク・改ページ・章数の検査も未実施。公開用コピーを要求する全体 `check:citations` と `npm test/build/check:links/check:pdf` は第2段階に実施する。
