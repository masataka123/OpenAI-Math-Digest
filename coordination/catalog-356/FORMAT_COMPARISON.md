# カタログ356 形式・表示比較

2026-10-19、本部。制作セット1.4を適用。これは未公開の共通renderer/CSSプレビューの検査であり、サイト組込み後の操作・PDF・公開検査を代替しない。

## 指定見本との比較

参照版は `reference-manifest.json`、画面は `screens/`。既存distの指定見本を読み取り利用し、元のソース・生成物は変更していない。

|比較対象|356での確認結果|代表的な画像|
|---|---|---|
|034のカタログ一覧|公式順2本、4列、正式論文名から記事へ、原典は別リンク。分類を固定数にせず総括図1点と接続表で役割を分けた|`reference-034.ja-1280-manuscripts.png`、`overview.ja-1280-papers.png`、`overview.ja-375-papers.png`|
|034 Schnellの主要結果・主張欄|共通カード・出典行を使用。Aは5主張・5図、Bは3主張・3図。原典順の主結果、独立証明節の仮定・量化・結論を図より前に記載|`reference-schnell-fiber-spaces.ja-1280-results.png`、`gigli-characterization.ja-375-results.png`、`weak-hessian-geodesics.ja-1280-results.png`|
|033 Orbifold Iitakaの図前文献案内|著者・正式題名・用途・固定版を日英で提示。本稿内引用と著者由来キーによる外部引用を区別|`reference-orbifold-logarithmic-iitaka.en-1280-diagram-sources.png`、`weak-hessian-geodesics.en-375-diagram-sources.png`|
|Schnell / Orbifoldの証明段階|証明対象→図→直後の文章→出典の順序。全体図を詳細節より前に配置し、各結論の説明先を記録|各記事の `*-proof-overview.png`、`*-proof-1.png`|

図は全9図の日英18枚を画像で点検。箱・矢印・役割ラベル・引用の専用余白を確保し、重なりや切れを認めなかった。日本語図は日本語の説明。長い数式・図・一覧は共通の内部スクロール領域を利用するため、375pxで全内容を同時に縮小表示する仕様ではない。ページ全体の横はみ出しはない。

## 実行記録

- `preview-checks.json`：新規日英6ページ、MathJaxエラー0、欠落アンカー0。
- `screen-checks.json`：新規6ページ＋指定見本6ページを各1280px/375pxで確認。新規12条件のページ横はみ出し・数式エラー・欠落アンカー0。
- `validation.json`：原典2件SHA一致、記事ごとの3引用registryのtext-only検査、9図の日英生成manifest、ローカル参照、既存tracked変更の保持を確認。
- `reviews/REVIEW_SUMMARY.md`：執筆者以外のAstra担当Rによる内容点検。画面比較は本部の作業であり、Rによる独立視認とは記さない。

共通表示プレビューは言語切替リンクを含むが、サイトのsticky header、拡大操作、登録ルート、スマートフォンでのスクロール中の切替動作は組込み後に再検査する。日英冊子PDFは未生成。公開コピーを必要とする完全な `check:citations`、サイトテスト・build・check:links・check:pdfは第2段階に残す。
