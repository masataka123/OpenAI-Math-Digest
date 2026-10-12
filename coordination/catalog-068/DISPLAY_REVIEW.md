# 第1段階の画面比較

- 日付：2026-10-12。本部。ローカル未公開HTMLをChrome一時プロファイルで確認。サイト登録・公開コピー・冊子PDFは変更していない。
- 068：共通renderDraft、articleStructure、renderCatalogInventoryと現行CSSを読取り使用。数式はMathJaxのSVGへオフライン変換。16ページ×1280px/375px＝32条件。
- 見本：既存distの034、Schnell fiber spaces、033 Orbifold Iitakaを読取り用HTMLへ複製し、既存生成CSSをインライン化。既存ファイルは変更しない。日英×2幅＝12条件。
- 証拠：screenshots/、reference-screenshots/、screen-checks.json、reference-checks.json。確認スクリプトはbuild-preview.mjs / check-preview.mjs / make-reference-preview.mjs / check-references.mjs。

## 比較結果

1. 034の共通表：公式順4列、正式論文名→記事、原稿版・ページ数、原典別リンク、主張、結果番号、役割、証明概説リンクが対応。068も同じrenderCatalogInventoryを使用。トークンは単独の段落・単独の証明説明ブロックにし、CatalogMarkdownOverviewの置換条件も満たすよう修正した。375pxでは共通仕様の横スクロール表となる。
2. Schnell：主要結果の原典順、緑の主張欄、数式、出典行、証明節・対象参照・図・直後の説明が同じ構造で出ることを目視。見本の不足は引き継がず、068には結論coverage・中間命題の主張欄を持たせた。
3. Orbifold Iitaka：図前文献案内の位置、著者・正式名・用途・参照版・リンク、内部結果と外部キーの区別を目視。新記事はauthor-keyと結果番号・ページを使用し、033の既存略号を改名しない。
4. 068全記事の日英でMathJaxエラーなし、ページ全体の横はみ出しなし。長い数式と表は共通仕様の局所横スクロール。07の主定理の三条件は日英とも改行し可読性を改善した。
5. 全図のTeXコンパイル・missing character/overfullチェックとSVGの個別目視は各担当statusに記録。本部は総括4SVG・05の10SVGと各記事の表示を確認。図の矢印・ラベル・引用に専用余白を確保。図の元SVG・TeXへのリンクも確認。

## 第2段階へ残す確認

このプレビューは共有本文表示の比較であり、サイト統合画面ではない。実際のLayout、ReadingGuideのキャラクター、AI注意書き、トップ→分野→068→記事、図拡大viewer、言語切替時のアンカー、公開base pathは組込み後に確認する。プレビューの簡略ヘッダーでは右上言語リンク・スクロール中の表示を確認したが、共通UIの統合試験を完了したとは扱わない。

日英冊子PDFの表示・ページ・図・リンクは未生成のため未確認。第2段階で必須。

最終追補：04 Th7.2、07 Prop10.1/Th11.1/Prop12.1の新主張欄とproof-5〜7を日英PC/375pxで追加確認。最終16HTML・72図表示、32画面条件で数式エラー・ページ全体overflowなし。02の指数二条件と07の三条件の改行も反映。

## 第2段階で解消した留保

ローカル最終buildの日英全16ページとトップ／分野を40画面条件で確認し、図viewer・言語切替・原稿導線を14経路で検査した。034・Schnell・033との日英PC/375px比較を再実施。日英全230ページ・72収録図を画像点検。証拠はstage2-browser.json、stage2-screenshots/、stage2-pdf-review/、STAGE2_REPORT.md。公開URLでの確認は第3段階へ残す。
