# カタログ159 第1段階の形式・表示点検

2026-10-15。本部による技術点検。制作セット1.4。内容の照合は `reviews/CONTENT_REVIEW.md` に分離する。

## 判定

第1段階の必要な形式・生成物を確認した。サイト登録前の隔離プレビューであり、公開準備完了ではない。日英冊子PDF、登録後の全サイト検査、図拡大UIと日英切替の統合動作は第2段階。

| 要件 | 入力・表示先 | 検査・目視証拠 | 結果 |
|---|---|---|---|
| 公式順4列表 | inventory.json → overview/presentation.json → renderCatalogInventory | validation.json、screens/overview.*、reference-catalog034.* | 1行・4列、題名/版/198頁/原典/主結果/役割/記事導線を確認。034と同じ共通表。375pxでは表の内部を横スクロール |
| 図前文献一覧 | sources.json + citations.json articleGuides → reference-guide | article-citations-check.log、screens/*section2.png、reference-orbifold.*section2.png | 自論文とLSS24/SS14を区別し著者・正式タイトル・版・用途を表示。長い英文タイトルと数式が375pxで折り返す |
| 主張→証明図→直後の説明 | mainResults/statements/proofTargets/conclusionCoverage | validation.json、screens/*section1/3.png、figure-*.png、reference-schnell.* | Theorem1.1/Corollary1.2の全結論を対応。独立節Theorem2.1の主張が図前。図は3組6枚、すべて目視確認 |
| 原典読書案内・確認範囲 | readingList + 記事末尾 | validation.json、screens/*section5.png | 結果・ページ・読む目的、未照合の範囲を日英で保持 |
| 引用生成 | 本文マーカーとTeXのCiteを同じcitations.jsonから生成 | 各text-onlyログ、citation-build.json、validation.json | 記事4生成対象/案内2本文の照合成功、図原本と出力のハッシュ一致 |

## 実際の表示比較

`build-preview.mjs` は既存の共通renderDraft/renderCatalogInventoryを読み、指定見本の既存distを読み取り専用の外枠・比較対象として使用する。出力先は `coordination/catalog-159/preview/` のみ。src/public/dist/サイト登録を変更していない。MathJaxをローカルでSVG化した。

- 日本語/英語、1280px/375px：159記事・159案内の8表示条件、指定見本3ページの12表示条件を撮影。`screen-checks.json`。
- 034の表、Schnellの主張・証明図、033 Orbifold Iitakaの文献一覧と比較。共通の色、文字階層、定理カード、出典行、表、図直後の説明を確認。051は使用しない。
- 対象8表示条件でページ横はみ出し0、MathJaxエラー0、内部アンカー欠落0、ブラウザー実行エラー0。数値だけでなく、日本語PCの主張/表、日本語375px文献一覧、英語375px主張/表、英語PC証明節と全6図を目視した。
- 図は箱内の見出し・式、矢印の用途・引用、箱間余白を確認。日英とも欠字・重なり・切れなし。横長の引用は図キャンバス内の専用余白に収まる。
- モバイル表の右端、案内→記事、全12件のSVG/TeXリンクは `preview-link-checks.json` と `screens/overview.*-375-table-right.png`。

## 制作中に修正した点

1. 全体証明節がproof-overviewとなる共通仕様に合わせ、coverageアンカーを修正（通常proof番号へ数えない）。外部入力節の見出しをdependenciesとして認識できる日英表記へ統一。
2. カタログのinventory節を共通表専用の独立ブロックにし、記事リンクを共通rendererが変換する相対Markdownへ変更。
3. 案内表の数式とLSS文献タイトルの数式をMathJax表示へ変更。
4. 内容点検によるTheorem8.2の引用p62追加と記号定義補足を反映後、TeX/SVGを再生成し再撮影。

## 未実施／第2段階

- 登録済みサイトでのnpm test/build/check:links、サイト全体のcheck:citations。
- 記事担当が試行した通常の対象check:citationsはpublic配置がないためENOENTで止まる。第1段階では意図した範囲制限であり、成功扱いしない。代わりにtext-onlyとdrafts内の生成物ハッシュを確認。第2段階でpublic配置後に通常検査を必ず通す。
- 実サイトの言語切替/アンカー保持、図拡大UI、すべての公開導線。
- 日英冊子PDFの生成・紙面・リンク検査。第1段階では原典PDFの取得・読解のみで、冊子PDFは生成していない。
