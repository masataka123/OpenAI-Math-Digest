# カタログ340 — 第1段階の形式受領

2026-11-04、Sol本部 `/root`。制作セット1.4。**第1段階の内容編集済み成果物を受領。** 数学の独立点検は `CONTENT_REVIEW.md` と `review/final-reviewed-files.json` を参照する。本部による数学執筆・数学的な日英修正は行っていない。

## 対象版と検査の根拠

- 書誌と原典取得：`inventory.json`、`sources/downloads.json`、`validation/inventory-check.json`。
- 内容点検版：`review/final-reviewed-files.json`。現ファイルと点検版の一致は `validation/stage1.json`。
- 図生成：記事 `diagrams/citation-build.json`。原本・共通引用・TeX/SVGの同一性と、図中リンク先の一致を `validation/stage1.json` で確認。
- 引用：対象340の共通検査 `validation/citations-text.log`。第1段階なので `--check --text-only --catalog 340`。公開コピーを含む検査は第2段階。
- 共通回帰検査：`validation/common-tests.log`。`node --test scripts/*.test.mjs` はnpm testと同じ対象。登録済みサイトを含む共通処理の検査であり、340の数学的内容の点検を代替しない。
- 共通描画・実表示：`validation/structure.json`、`validation/browser.json`。Markdown・SVGから生成HTML、撮影したHTMLまでの同一性を記録。画像一覧は `screens/index.html`、画像の原記録は `validation/screen-manifest.json`。

## 必須4項目の受領

| 項目 | 入力元・表示先 | 検査と目視判断 | 次段階へ残すもの |
|---|---|---|---|
| 公式順の共通4列表 | inventory、overview/presentation.json → 共通renderCatalogInventory | 日英の1行4列、正式タイトル・版・原稿ページ・原典リンク・記事入口を確認。034の同じ表と書体・列・余白・出典導線を比較。375pxで表の右端まで横スクロールでき、ページ全体は横にはみ出さない | サイト登録後の導線・PDF導線の実検査 |
| 図前の文献一覧と引用区別 | 記事sources/citationsのarticleGuides → 共通生成文献一覧・本文・TeX/SVG | 033 Orbifold Iitakaの文献案内と比較。本稿内は無略号、外部は著者由来キー。著者・正式タイトル・用途・取得版・リンクを図前に表示。WJRの取得版の限定も表示。長い文献一覧の末尾は補足画像reference-guide-bottom日英でも読み取れることを確認 | PDF紙面と公開コピーを含む引用検査 |
| 主張・証明対象・図と直後の説明 | mainResults/proofTargets/statements/conclusionCoverage → 共通定理欄・証明節 | Schnellの主張欄・証明表示と比較。主要結果と中間命題の主張が図より前にあり、図直後から説明が続く。全結論の説明先アンカーは生成・実表示とも存在し、充足性はAstraが原典と照合 | 登録後の図拡大UI、日英PDFへの反映 |
| 原典読書案内と確認範囲 | readingList、記事末尾、overview → 共通の結果・ページ・読む目的 | 日英で読書案内と確認範囲を揃え、独立点検済みの範囲と全証明・全技術の未検証を区別。Schnellと同じ出典行・証明段階の形式を確認 | 冊子PDF内の読書案内・リンク |

比較に使った既存ページの原ファイルとハッシュは `validation/reference-manifest.json`。これらは表示見本であり、340の数学的な制作根拠として使っていない。

## 図と画面の目視

最終版の `screens/nearby-lagrangian-counterexample.figure.{ja,en}.{1,2,3,4}.png` をすべて確認した。箱の数式と操作見出し、左側の矢印、その脇の役割説明と下線付き引用を読める。文字・数式・矢印・引用の重なりや欠けは認めなかった。日本語図には日本語の役割説明がある。訂正したmain冒頭の引用とtransportの限定も表示に反映されている。数学的な内容・対応の最終判定は別Astraの記録を参照する。

日英の記事・案内を1280pxと375pxで表示した。共通の定理カード、命題の主張→図→説明の順序、原典リンクの独立段落、共通4列表、右上の言語切替のスクロール末尾での可視性を確認した。機械検査でも数式エラー、欠落アンカー、重複ID、画像失敗、ページ全体の横はみ出しは検出されなかった。狭い表の内部横スクロールは正常な表示として扱う。

最初のカタログ描画はPDF準備中段落が一覧節に混在したため共通置換で失敗した。段落を導入へ移し、一覧節をCATALOGINVENTORYTOKEN単独にして解消した。履歴は `validation/preview-build-before-token-fix.log`、最終成功は `validation/preview-build.log`。共通部品や共有CSSは変更していない。

## 今回の検査の境界

これは未登録原稿を共通レンダラー・共通CSSで表示したローカル確認である。公開サイトのビルド、全サイトのリンク、実ルートでの言語アンカー保持、共通図拡大UI、publicへのコピー、冊子PDF・紙面・PDF内リンク、公開反映の確認は第2・第3段階へ残す。数値・ハッシュ・ログの詳細は原記録を参照する。

第1段階に未解消の修正指摘・未生成の必須原稿資産はない。数学的な確認範囲の限界はCONTENT_REVIEWと日英本文に維持した。PDF未生成を含め、カタログ全体の公開準備完了とは報告しない。
