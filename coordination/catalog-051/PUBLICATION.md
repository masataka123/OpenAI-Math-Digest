# カタログ051 公開記録

2026-10-10。本チャットが記事担当・カタログ本部・サイト本部を兼任。ユーザーの「じゃあ公開しましょう」を受け、051の日英サイト組込み・冊子・公開を実施する。内容制作の27分11秒とは別の公開工程。過去の公開許可は流用していない。

## 配信状態

公開準備完了。GitHub Pagesへの配信と公開URLの確認はこの後に記録する。

## 差分

- 日英のカタログ入口と記事1本、7図×2言語のTeX/SVG、12文献の引用・接続記録、制作セット1.3の台帳を追加。
- 共有の分野・カタログ・論文登録に051を追加。共有テスト2本の期待するカタログ番号を更新。
- 日英PDFを既存の生成系で作成し、版情報を同時更新。日本語23ページ／英語24ページ、各2章・7図。数式配置193／192箇所（インラインの分割差）。
- 033・034の記事・図と既存8冊のPDFは公開作業前のSHA-256と一致。validation/preservation.jsonを参照。

## 検査

本環境ではnpmがPATHにないためpackage.jsonと同じNodeエントリーポイントを直接実行した。CIではnpm scriptsを実行する。

| 検査 | 結果・証拠 |
|---|---|
| node --test scripts/*.test.mjs | 35件合格、validation/release-tests.log |
| node scripts/sync-citations.mjs --check | 5カタログ・18ファイル、release-citations.log |
| node node_modules/astro/astro.js build | 59ページ、release-build.log |
| node scripts/check-links.mjs | 21,803内部リンク・資産・アンカー、release-links.log |
| node scripts/build-catalog-pdf.mjs --catalog 051 | 日英2冊生成、release-pdf.log |
| node scripts/build-catalog-pdf.mjs --check | 全10冊current、release-pdfcheck.log |
| 正式ルートの画面 | 日英×1280/375px×記事・案内・034表・Schnell・Orbifoldの20条件、integrated/checks.json |
| 図操作・言語切替 | 全7図の拡大・全体表示・引用・閉じる、proof-2アンカー保持、PDF導線・分野導線を確認 |
| 紙面 | 全47ページを画像化し全12コンタクトシートを閲覧。表紙・目次・本文・全14図・数式・改ページ・原典案内に欠け／重なり／欠字なし。pdf-pages/ |

生成系による2章のしおり・内部宛先・リンク検査が成功。操作ボタンは冊子から除外され、原典・図・確認範囲への案内を保持。日本語最終ページには未確認範囲が続く。本文の表示数式13組・71引用の日英一致は内容受領記録参照。

## 数学的確認の限界

原稿の主要な証明箇所・直接入力の記述と適用条件の照合であり、全証明の独立検証や専門家査読ではない。解析的評価・Sobolev置換・弱い境界極限・平滑化評価の独立再証明、Kollár解消原典、別経路のDemailly正則化、外部定理の全証明、全依存の監査は対象外。日英本文とCONTENT_REVIEW.mdに保持。
