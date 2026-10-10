# 042 公開検査証拠

2026-10-10、サイト本部（本チャット）。初稿時の証拠は../review/、公開前の正式サイト検査は本フォルダ。

- release-tests.log：35件のテスト。
- release-citations.log：登録引用・本文・TeX/SVG公開コピーの一致。
- release-build.log／release-links.log：63ページと29,862内部参照。ビルドログの行末空白のみ除去して保存。
- release-pdf.log／release-pdfcheck.log：042の日英生成と全12冊の版一致。
- integrated/：日英1440/375pxの記事・案内、全6図の拡大操作、言語切替、PDF導線。比較対象は034の共通表、Schnellの主張欄、033 Orbifold Iitakaの引用案内。
- pdf-pages/：日英各24ページの全ページ画像を4ページずつ並べた12枚。初回目視後、日本語Corollary 1.2の引用の分離を修正し、日英再生成・再画像化。修正後の該当箇所・周辺を再点検。
- preservation-baseline.json／preservation.json：既存033・034の原稿・図、既存10冊PDFのSHA-256保持。
- actions-release*.json、published-resources.json、published/：配信成功、公開36リソースの一致、公開8画面条件の確認。

未確認の数学的接続は記事末尾・sources.jsonに保持。これらの検査は全証明の独立検証ではない。
