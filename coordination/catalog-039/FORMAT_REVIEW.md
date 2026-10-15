# 039 形式・表示点検

2026-10-15、本部。制作セット1.4。第1段階の未登録原稿を共通renderDraft / renderCatalogInventoryと既存CSSで描画した。既存distの034・Schnell・033 Orbifold Iitakaを読み取り専用でローカル表示し比較した。新たなサイトbuildや公開画面の確認ではない。051は標準見本に使わない。

## 4つの必須形式

| 項目 | 入力／共通出力 | 自動検査 | 手動比較と結果 |
|---|---|---|---|
| 公式順4列共通表 | inventory.json＋overview/presentation.json→renderCatalogInventory | 4原稿を公式順に供給、プレビューリンク検査 | 034の日英PC/375px表と比較。順番／論文・概説／主結果／議論の役割と記事入口の4列、原典別リンク・版・ページ数。スマホは表内横スクロールでページはみ出しなし。 |
| 図前の文献案内 | 各citations.json articleGuides / sources→本文reference-guide | registry毎のtext-only同期検査 | 033 Orbifold Iitakaの著者・正式タイトル・版・用途・リンクと比較。4記事とも最初の図前に表示。内部結果と外部入力を区別、Chow保留も表示。 |
| 内部／外部引用 | 共通記録→日英source-line＋TeX macros | 同期・日英引用順・19×4＋9ファイルの図hash | Schnell/033の出典行と比較。内部は無略号、外部は定義済み著者キー。Stacks HTML無ページ版とPDF章のページを区別。旧記事のキー形式はコピーしない。 |
| 証明対象・読書案内 | mainResults/statements/conclusionCoverage/readingList | 全対象・結論アンカーが存在 | Schnellの主張欄→図→直後の文章と比較。主要結果は全結論を掲示。独立命題も図前に完全な主張。末尾は結果／ページ／読む目的を含む。 |

## 画面証拠

- preview/：4記事＋案内の日英10 HTML。公開用ファイルではない。
- preview-checks.json：10ページ、MathJaxエラー0、主張・結論の欠落アンカー0。
- screen-checks.json：10ページ×1280/375px＝20条件、全条件でページ横はみ出し0、数式エラー0、言語リンクが画面内。
- screenshots/：各ページの主張、文献案内、証明節、図、比較見本。reference-*.inventory.pngが034の表。ローカル見本の出典distを再buildしていないことに注意。
- 本部は案内図日英、正標数全6図、日英の主張／案内／証明節、034表・Schnell主張欄・033文献案内を画像で比較。残る記事の全6図ずつは各担当の目視記録も受領した。図には箱の数式と操作見出し、矢印に供給内容・引用、専用余白がある。小画面の縮小図は拡大を使う設計。
- 図は各記事3種＋総括1種＝13種、日英で26 SVG。図直後に文章説明。図の余白修正は担当statusに記録、最終生成hashと照合。
- 初期プレビューの案内節ID配列を3節（papers/connections/sources）へ修正して再描画。実装時にもこの3節対応を維持する。

## 実行済み

bundled Nodeでbuild-preview.mjs、check-preview.mjs、validate-stage1.mjsを実行。validate-stage1はcheck:citationsと同じsyncCitationsのcheck=true,textOnly=trueを5registryに限定実行し、日英引用順・図順・生成hash・ローカル記事間アンカー・TeX/SVGリンクを検査。結果はvalidation/stage1.json。環境にnpmがないためnodeで直接実行した。公開コピーを含む完全なcheck:citations成功とは呼ばない。

## 第2段階に残す確認

未登録のためnpm test/build、公開ルートcheck:links、public SVG/TeXコピーを含む完全check:citations、日英PDF/check:pdfは未実施。共通本番ヘッダー・キャラクター・図拡大モーダルの実動作、言語切替時のアンカー維持、実サイトのスクロール操作・外部PDF遷移は組込み後に確認する。簡略プレビューの静的リンク・可視性を本番UI試験と扱わない。冊子PDFの画面比較は未実施。

日英最終数式照合：高次元12、曲面11、正標数6、平面8の表示数式が対応。平面ではtext内の翻訳とC^{I}/C^Iの記法差を目視照合し、数学的差異なし。全記事H2は日英7節、案内は3節。validation/bilingual.json。

## 第2段階の本番構成・PDF確認

2026-10-15：組込み後の新buildで日英PC/375px、共通表・主張欄・文献案内・図・言語切替・拡大操作を確認。日英PDF109ページ・26図を点検。034/Schnell/033の比較画像はstage2/screenshots、紙面はstage2/pdf-review、結果はSTAGE2_REPORT.md。案内のbase外リンク10か所を修正し、再生成後も全ページ画像は目視済み版と一致。第1段階の「未実施」は当時の状態であり、第2段階の結果で更新した。
