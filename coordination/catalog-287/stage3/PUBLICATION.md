# カタログ287 公開確認

完了：2026-10-15T22:33:31.589565+09:00。作業ブランチmain。ユーザーの「では第3段階をお願いします」に基づき、287だけの74ファイルをcommit・pushし、公開反映を確認した。

- 公開commit：cfe584ddcfc1263040613cade4b9892b24808a63
- Actions：https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38741535601。build/deploy成功。
- 日本語案内：https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/287/
- English guide：https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/287/
- 日英記事：同基底URLのja/papers/free-group-factor-isomorphism/およびen/papers/free-group-factor-isomorphism/。
- PDF：同基底URLのpdf/catalog-287-ja.pdf（16ページ）、pdf/catalog-287-en.pdf（18ページ）。各2章・4図。

## 検査

公開候補と同じ隔離コピーで39テスト、58引用catalogue(s)/206生成対象、165ページbuild、191845内部リンク/資材、全40 PDF版の内容・実ファイルハッシュを確認。ローカルのリンク確認は標準スクリプトにreadFileキャッシュだけを加えたもの。Actionsでは無変更の標準スクリプトを含む全必須工程が成功した。

公開後に日英案内・記事・作用素環の6ページと16 SVG/TeX・2 PDFの計24 URLを取得し、すべてHTTP200。18資材は公開commitのローカル成果物とSHA-256一致。各記事は4図・4主張、主要アンカー、固定原典版、案内から記事/PDFへの導線を確認。live/http-verification.json参照。

公開実画面の日英×PC1280px/375px×案内/記事の8条件をChromeで確認。実CDNのMathJaxが動作し、数式エラー・ページ横はみ出し・JavaScriptエラーなし。図拡大・幅調整、スクロール後の言語切替とアンカー保持、AI注意書きを確認。live/screen-verification.jsonとローカルPNGを証拠とする。

## 保持した範囲

第1段階の明示指定gpt-6-astraによる数学本文・図・引用と第2段階の冊子はそのまま公開。今回は数学内容の新規執筆・再審査をしていない。内容点検は執筆者の自己点検であり、独立査読ではない。

Rădulescu原典Corollary4.7の直接読解（GP25の明示再掲で∞を含む範囲は確認）、BEHY23誌面ページ対応（著者preprint v2 §5で直接入力確認）、外部結果の全証明/再帰的依存、専門家査読・形式検証は未実施。この記述を日英記事・PDFに維持。公開確認を数学的正しさの保証としない。

共有ブランチを切り替えず、他担当の087/285・制作方針などの未コミット変更を保持した。公開前後で開始時のtracked working filesはすべて同一内容（preservation.json）。共有site.mjs/pdf-editions.jsonは287分だけをindexに載せた。無関係な原稿、原典保存物、画面画像、PDFは公開commitに混入させていない。

## 再開

依頼された第3段階は完了。今後の記事改訂はAstra指定・確認範囲を引き継ぎ、変更に応じて日英PDFと必要な検査を更新する。検査用のローカルコピーは/private/tmp/catalog-287-release、証拠はcoordination/catalog-287/stage3/に保存。
