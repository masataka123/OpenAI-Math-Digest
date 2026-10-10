# カタログ042 公開工程

2026-10-10。ユーザーの「じゃあ記事を公開してください.」を受け、本チャットがサイト本部を兼任する。初稿28分12秒とは別工程。公開作業開始16:10 JST。日英サイト・PDF・公開確認を実施中。

数学的確認の限界は記事末尾・CONTENT_REVIEW.mdに保持する。既存記事・既存PDFの保持をvalidation/preservation-baseline.jsonで照合する。

## 公開前の検査

- `node --test scripts/*.test.mjs`：35件合格。release-tests.log。
- `node scripts/sync-citations.mjs --check`：7カタログ・24ファイル合格。release-citations.log。
- Astro build：63ページ。内部リンク・資産・アンカー29,862件確認。release-build.log／release-links.log。
- PDF：日英24ページ、2章、6図。MathJax数式165／163（インラインの分割差）。全12冊のcontentHash／SHA-256検査成功。release-pdf.log／release-pdfcheck.log。
- PDF全48ページを画像化し12枚のコンタクトシートで確認。表紙、目次、主張、全図、数式、引用、原典案内に欠け・重なり・欠字なし。日本語Corollary 1.2の本文と出典の分離を発見し、042の日英に改ページ指定を追加。修正後も24ページ。共通PDF生成系は変更なし。
- 日英×1440/375px×記事・案内の8条件を正式ルートで検査。全6図の拡大・全体表示・引用href、言語切替のproof-2アンカー保持、言語別PDFリンクを確認。MathJaxエラー・ページ横はみ出し・欠損画像・JS例外なし。integrated/checks.jsonとPNG。
- 034の共通表、Schnellの主張欄、033 Orbifold Iitakaの図前文献案内と日英PC/375pxで比較。FORMAT_CONTRACTを優先し、旧見本で省略された仮定・出典等は042に保持。051を形式見本にしない。
- 既存033・034の原稿・図と既存10冊PDFのSHA-256を制作前と照合し、変更なし。preservation.json。共有テスト2件のカタログ順期待値には042を追加した。

npmがPATHにないため、package.jsonと同じNodeエントリーポイントを直接実行。PDF環境はWeasyPrint 68.1、`PDF_PYTHON=/tmp/math-digest-pdf-runtime/bin/python`。共有PDF組版は変更しない。画像・検査ログはvalidation/。

## 数学的確認の限界

著者の主張と、選択した証明箇所・直接入力の記述と適用条件の編集側照合を区別する。全解析評価、§§7–8のatlasとrecentring、Lemma 8.2の格子構成、追加のRatner・Borel等の原典照合、外部定理の全証明の独立検証は未実施。原稿の全証明の正しさを保証しない。詳細は記事末尾・sources.json・CONTENT_REVIEW.md。
