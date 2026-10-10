# 042 形式受領・ローカル画面比較

2026-10-10、制作セット1.3、042本部。共通renderDraft・renderCatalogInventoryと既存CSSを用いて一時HTMLを生成した。新しい記事ルートや共有CSSは変更していない。比較対象は既存distの034カタログ、Schnell、033 Orbifold Iitaka。051は参照していない。

## 必須項目の受領

| 項目 | 入力元／表示先 | 自動検査 | 目視証拠 | 未完了 |
|---|---|---|---|---|
| 公式順の共通4列表 | inventory.json＋overview/presentation.json、日英案内のCATALOGINVENTORYTOKEN | 公式順1行、4列、正式タイトル・版・56ページ・原典URL・記事リンクを共通処理で生成 | review/overview-*-1440-top.png、review/reference-034-*.png、table比較追加画像 | 公開記事ルートとPDFの有効化 |
| 図前文献案内 | 記事sources/citations、reference-guide | 外部10件、内部番号と外部表示名・略号、図より前 | review/article-*-references.png と reference-orbifold-* | PDFへの保持 |
| 証明対象と主張欄 | articleGuides、主要結果4件、中間statement 2件 | proofTargets 6件、全結論14アンカー、図前の主張、重複IDなし | review/article-*-statement.png、main/classification、reference-schnell-* | 公開版とPDFでの配置 |
| 原典への読書案内 | readingList、reading-list | 結果・ページ・読む目的11件、日英引用順一致 | 生成HTMLと日英末尾の読解照合 | PDFのリンク・改ページ確認 |

## 見本から継承した点・補った点

- Schnellから主張→引用付きTeX図→直後の段階説明という骨格と共通本文・図CSSを継承。
- 中間Theorem 3.1・6.1の仮定・量化・全結論を図前に独立掲載し、主定理の全体図を先置き。既存見本に必ずあるとは仮定せずFORMAT_CONTRACTを優先。
- Orbifold Iitakaから図前の文献一覧の配置を参照。042では表示名・著者・用途・参照版・リンクを共通引用記録から生成し、キーだけの案内にしない。
- 034の4列表を単論文でも使用。記事へのタイトルリンクと原典リンクは分離。分類数・担当数・図数は継承せず、論理に必要な6証明単位を採用。
- 本稿内番号は無略号。外部は読みやすい名称と略号を併記。JIの誌面734–735／PDF3–4を確認。GitHub閲覧URLにpage fragmentを付けていない。

## ブラウザでの確認

headless Chrome、日英、幅1440px／375px。8ページ条件でMathJaxエラー0、documentWidth=viewport。記事の図6枚と表示数式を描画。図のラベル・箱・矢印の専用余白と長い外部文献の折返しを目視。12図を日英で確認し、図の直後に文章が続くことをSchnellと比較した。

375pxでは表を表自身の領域内で横スクロールする（記事850px、カタログ900pxの最小表幅）。長い表示数式も共通CSSの数式領域内でスクロールする。browser-metrics.jsonのoverviewのoverflowElementsは横スクロール表内のセルであり、ページ全体のはみ出しではない。図は縮小表示されるため原寸SVGを開く導線を保持。拡大viewerそのものと公開時の言語切替・hash維持はサイト本部の結合確認に残す。

**証拠**：review/のPNG、[browser-metrics.json](review/browser-metrics.json)、[draft-validation.json](draft-validation.json)。スクリーンショットは内容確認用であり、公開サイトの確認証拠ではない。

## 実行結果と範囲

- `node scripts/sync-citations.mjs --check --text-only --catalog 042`：2引用レジストリ、6生成テキストを検査して成功。
- `python3 drafts/catalog-042/every-complex-k3-oka/diagrams/render.py`：日英12SVG・12TeX。XeLaTeXのoverfull／missing characterなし。34原本・生成物のSHA-256をmanifestへ記録。
- `node coordination/catalog-042/check-draft.mjs`：日英の共通描画、引用順、表示数式、主張・証明対象・説明先、公式表、manifestを検査して成功。
- 本環境にnpm実行ファイルがないため同じpackage scriptのNode入口を直接実行。サイト登録後の`npm test`、全体`check:citations`、build、links、PDF検査はサイト本部が担当。
- 公開コピーをまだ作っていないため、full check:citationsの公開資産ゲートの合格は主張しない。日英PDFも未生成であり、形式統一の公開ゲートは未完了。
