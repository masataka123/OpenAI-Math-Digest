# 051 内容制作の検査証拠

2026-10-10。サイト登録前のローカル共通表示プレビュー。公開版の検査ではない。

- content-checks.json：対象引用レジストリのtext-only照合、14SVGリンクとID、39生成関連ファイルのSHA-256、日英71引用マーカーと13表示数式、公式順1行。
- structure.json：renderDraftで日英の主張・説明先アンカー、7図・19段階・原典案内を確認。overviewはrenderCatalogInventoryで4列1行。
- visual-checks.json：日英×1280/375px×記事・案内・Schnell・Orbifold Iitaka・034の20条件。
- visual-recheck.json：比較参照の分類と主定理最終段階を編集した後の4記事条件。スクリーンショットは更新後のもの。
- inventory-visual.json：表の4列・行数・375pxでの表内横スクロール。
- screens：各画面、14図、日英図の組画像、見本比較画像。main図と記事の画像は最終編集後。

共通renderDraft/renderCatalogInventoryと既存distのHTMLレイアウト・CSSを再利用。MathJaxもnode_modulesの同ライブラリをローカル読込。プレビューは127.0.0.1:43851で生成した作業用HTML。対象の正式ルート、図拡大、言語切替、PDF導線と冊子PDFの確認はサイト本部が登録後に行う。

数値検査に加えて、図中の箱・矢印・説明・引用の余白、主張→図→文章、引用の書体と版表示を画像で確認した。画面比較を033・034への改稿理由にはしていない。
