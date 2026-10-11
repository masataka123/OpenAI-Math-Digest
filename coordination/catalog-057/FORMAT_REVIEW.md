# 第1段階の形式・表示比較

本部、2026-10-11。制作セット1.4／FORMAT_CONTRACTを優先し、034の公式順表、Schnellの主張から図・説明への構成、033 Orbifold Iitakaの図前文献案内を参照した。051は見本にしていない。

対象は**サイトへ登録する前の一時描画**。共通 `renderDraft`、`renderCatalogInventory`、既存CSS、MathJaxを使い、8本文×1280px／375pxで検査した。見本は既存distの日英ページを読み、CSSを保持して表示した。比較スクリーンショットでは見本の固定ヘッダーのみ一時非表示にし、本文を覆わないようにした。既存ソースやdistは変更していない。

図の生成・字形・重なりは記事担当が全図を点検し、本部が総括図と変更図・代表証明節を再点検。各status・独立レビューを参照。数値検査だけで形式統一済みとはしていない。

## 必須形式の入力と表示先

| 必須形式 | 入力元 | 表示先／検査 | 見本比較と結果 | 後続の未実施 |
|---|---|---|---|---|
| 公式順の共通4列表 | inventory.json＋overview/presentation.json | overviewのCATALOGINVENTORYTOKENを共通関数で展開。公式3行と正式名・版・頁・要点・役割・記事／原典導線を確認 | 034の4列、出典リンクと記事入口、緑の文字・区切りを比較。057は3行で不要な分類カードなし | 登録後の実リンク、PDF導線、日英冊子 |
| 図前の文献一覧 | 各sources＋citationsのexternalSources／roles、overviewはcatalogGuide | reference-guide生成、最初の図より前。著者キー・著者・正式名・用途・版・リンクを表示 | 033 Orbifold Iitakaと、文献案内の位置・文字の大きさ・各要素・長文折返しを比較。実際の著者キーを使用 | 統合後の全出典クリックとPDF |
| 本稿内／外部の引用区別 | 各citations selfSource、locationsと共通TeX定義 | 自己引用は無略号、外部は[著者キー, 結果, 頁]。誌面／PDF異番号時は併記 | Schnellの矢印の役割＋引用を参照し、旧略号はコピーしない。日英・本文・図の元記録一致、text-onlyと生成hash成功 | 公開コピーを含む完全check:citations、PDF反映 |
| 証明対象・原典読書案内 | mainResults、proofTargets、statements、conclusionCoverage、readingList | 冒頭主張→参照、独立中間命題の主張欄→図→直後の文章、末尾の結果・頁・目的 | Schnellの順序・図直後の説明と比較。中間命題は見本の不足を補い、仮定と結論を図前に掲載。全結論anchorあり | 統合後の画面再比較、PDFへの全主張と説明の反映 |

## 画面の証拠

選択した24画像を [format-evidence/manifest.json](format-evidence/manifest.json) のSHA-256とともに保存した。ファイル名の1280／375がviewport幅。要素画像は内容全体を縦に撮影するため、画像自体の縦横寸法とは異なる。

- 共通表：[057日本語](format-evidence/overview.ja.1280.catalog-inventory.png)／[英語](format-evidence/overview.en.1280.catalog-inventory.png)、[034日本語](format-evidence/model-034.ja.1280.png)／[英語](format-evidence/model-034.en.1280.png)。4列と公式順・導線の対応を目視。375pxでは表の共通横スクロール内に収まる。
- 文献案内：[057日本語375px](format-evidence/half-weight-fourfold-abelianity.ja.375.diagram-sources.png)／[英語375px](format-evidence/half-weight-fourfold-abelianity.en.375.diagram-sources.png)、[033見本日本語](format-evidence/model-orbifold.ja.375.png)／[英語](format-evidence/model-orbifold.en.375.png)。長い正式タイトル・用途・版が折り返し、本文外へ漏れない。
- 証明構成：[第1記事英語](format-evidence/special-kahler-abelianity.en.1280.proof-section.png)、[第2記事日本語](format-evidence/two-step-monodromy.ja.1280.proof-section.png)、[第3記事日本語](format-evidence/half-weight-fourfold-abelianity.ja.1280.proof-section.png)、[Schnell日本語](format-evidence/model-schnell.ja.1280.png)／[英語](format-evidence/model-schnell.en.1280.png)。証明対象、図、引用段落、直後の文章の順序を確認。
- 中間命題：[Proposition 4.1英語](format-evidence/half-weight-fourfold-abelianity.en.1280.construction.png)／[日本語](format-evidence/half-weight-fourfold-abelianity.ja.1280.construction.png)。仮定・全結論・原典頁を図前に配置。図の余次元4は固定点でのパラメータ条件と明記。
- 主張欄と数式：[第2記事英語375px](format-evidence/two-step-monodromy.en.375.results.png)／[日本語](format-evidence/two-step-monodromy.ja.375.results.png)。長い表示数式は内部横スクロール、数式描画を目視。
- 総括図：[日本語](format-evidence/overview.ja.1280.figure.png)／[英語](format-evidence/overview.en.1280.figure.png)。矢印の余白を修正し、上2入力から下の群全体の結論への合流、線形像の比較枠を目視。引用・ラベルとの交差なし。

全画像を一律に完了証拠とするのではなく、上記の対象要素を比較した。全ケースの数式エラー・ページ横はみ出しは0で、実際のMathJax描画数も記録した。初回の一時HTMLではbodyの欠落により数式が未描画だったため、プレビューを修正して再検査した。0エラーだけを成功とは扱わず、更新した画像で数式を確認している。

## 明確に残す項目

公開用SVG／TeXコピー、実ルート・サイト外枠・図拡大と言語切替の操作、完全check:citations、サイトbuild・links・tests、日英PDF紙面・PDFリンクは第2段階。PDFはまだ両言語とも未生成。これらを含む最終形式統一・公開準備完了は宣言しない。
