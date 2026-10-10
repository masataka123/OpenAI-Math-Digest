# カタログ038 公開記録

2026-10-10。制作セット1.3。本チャットが記事・カタログ本部・サイト本部を兼任。ユーザーの「じゃあ公開をしてください」によりサイト組込み、日英PDF、通常のcommit・push、公開後の確認まで実施する。

## 公開前の変更

- site.mjsへ公式順038と記事fujita-freenessを登録。共通のカタログ・記事表示、既存の分野導線と掲載数を使用。独自の表示部品を追加していない。
- 日英記事・短い案内・各4証明図、出典と接続記録を反映。8SVG / 8TeXは制作物と同一内容を公開用の保存先へ複写。
- 既存の冊子生成処理を使って日英PDF各2章・4図を作成。日本語の確認範囲の文章のみ整理し、末尾の引用だけのページを解消。内容上の確認範囲は維持。
- 033 / 063のテスト内にあったカタログ一覧の期待値へ038を追加。既存記事・原稿版・PDF6冊の内容は変更なし。
- Git開始時はmain、609b31c187427d1c5669bf810d859f46f727b83a。未追跡の038原稿と準備記録のみ。他作業の変更なし。リモートmainも同じ。

## 検査と証拠

- 全35テスト成功、全体check:citations成功（3レジストリ・12生成先）。55ページのビルド、14,452内部参照の検査成功。
- 全8冊のcheck:pdf成功。038は日本語18ページ・英語22ページ、各2章・4図。PDFのページ数・hashはsrc/data/pdf-editions.jsonとvalidation/pdf-checks.json。
- 本番ルートの日英1280px/375pxと034 / Schnell / Orbifold Iitakaの20表示条件を確認。横はみ出し・MathJaxエラー・JavaScript例外・欠損画像なし。
- 全4図の拡大・ズーム・全体表示・原典リンク・閉じる操作、日英切替後のproof-2アンカー保持を確認。カタログのPDF導線と分野ページから038への導線も確認。
- 全PDF紙面を画像化して確認。表紙・目次・公式順表の情報・文献案内・主張欄・8図・数式・末尾の確認範囲を確認。長いLemma 6.2の欄も欠けなし。証拠はvalidation/pdf/。
- 原稿段階の確認範囲はCONTENT_REVIEW.md。§3・§5の技術的評価の独立再構成、外部定理の証明全体・再帰的依存、他カタログの全依存関係は未検証／未調査。公開・機械検査の成功は数学的正しさの認定ではない。

## 公開結果

**公開確認済み**（2026-10-10T13:43:35+09:00）。

- 本文・図・PDFの公開commit：`606d5a70b1f11441d3b621a4ad8e8f3257482ea0`。mainへの通常push完了。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38024887150)：build / deployともsuccess。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/038/) / [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/038/)。
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/fujita-freeness/) / [English article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/fujita-freeness/)。
- 日英PDFはカタログ冒頭から開ける。日本語18ページ、英語22ページ、各2章・4図・90リンク。
- トップ・分野・カタログ・記事・8SVG・8TeX・日英PDFの26リソースがHTTP 200、手元の最終ビルド／成果物とSHA-256一致。validation/published-resources.json。
- 公開サイトの日英×1280px/375px×記事／カタログの8条件で表示・数式・画像・PDF導線・図の拡大／ズーム／全体表示／引用・言語切替のアンカー維持を確認。validation/published/checks.jsonと画像。
- 数学的な確認範囲は本文末尾のまま。公開工程としての残作業なし。今回の確認記録を後続の記録用commitへ保存する。

