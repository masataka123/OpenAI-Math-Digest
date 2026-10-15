# 現在の状態：第3段階・公開確認済み

2026-10-15に287を公開し、Actionsと日英ページ・図・PDFの反映を確認。詳細は[stage3/PUBLICATION.md](stage3/PUBLICATION.md)。以下は第1・第2段階の履歴を保持したもの。

# カタログ287 — 第2段階完了・第3段階への引継ぎ

ユーザーの「では第二段階をお願いします」に基づき、2026-10-15に日英サイト組込み・日英冊子PDF・公開前検査まで実施。commit/push/公開は未実施。作業場所は/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、ブランチmain（切替なし）、HEADは5042e9f0dcf62a6c2e23a8660644038de377a287。

旧第1段階引継ぎはstage2/stage1-SITE_HQ_HANDOFF.mdに保存した。数学根拠・担当gpt-6-astra・初稿時刻・原典範囲はCONTENT_REVIEW.md、model-provenance.json、inventory.jsonを継承。数学本文・引用・図原本は第2段階で変更していない。単独自己点検であり独立レビューではない。

## 成果物と変更

- drafts/catalog-287/free-group-factor-isomorphism/：採用済み日英原稿、図原本、引用・原典記録。
- drafts/catalog-287/overview/：採用済み日英案内、presentation/citations/connections。
- src/data/site.mjs：287の単論文・カタログ・Operator algebras所属登録。official order13を維持。
- public/diagrams/catalog-287/free-group-factor-isomorphism/：4図×日英×SVG/TeX、計16ファイル。
- public/pdf/catalog-287-ja.pdf：16ページ、2章、4図。
- public/pdf/catalog-287-en.pdf：18ページ、2章、4図。
- src/data/pdf-editions.json：287の両版のみ追加。
- stage2/REVIEW.md、screen-checks.json、pdf-audit.json、preservation.json、logs/、screens/、pdf-pages/：検査証拠。

案内はoverviewSectionIds=['inventory','connections','sources']。短い入口＋公式順共通4列表1行で、総括図・分類・選択UIは置かない。採否理由はoverview/connections.json。PDFリンクは冒頭で実ファイルに接続済み。

## 検査済み

39テスト、58引用catalogue(s)/206対象、165ページの通常build、全40版PDF内容/ファイルハッシュ照合。最終内部リンクは並行ビルド後の固定写し183ページ・222,883件。stage2/logs/links-immutable-cached.logを参照（判定規則は標準と同じ、readFileキャッシュのみ追加。標準版の重複実行はこの成功後に中断）。snapshot-check.jsonで287の4 HTMLと2PDFが現在の成果物と一致。日英PC/375pxの8対象条件と12見本条件、全34ページ画像・全8図の個別目視、言語切替/アンカー維持、図拡大/幅調整、PDF HTTP200。詳細と初回リンク検査の再実行理由はstage2/REVIEW.md。

共通部品・CSS・PDF生成器には変更なし。開始時5996ファイルのうち差分は2共有登録ファイルのみ、原稿・既存PDFは保持。他カタログのPDF版情報も同一。stage2/before-*は開始時の共有ファイルの証拠であり、後の共有変更を上書きする復元用には使わない。

## 残る数学的未確認

Rădulescu原典Corollary4.7の直接読解（∞を含む二分法はGP25の明示再掲で確認）、BEHY23の誌面ページ対応（著者preprint v2 §5で入力を確認）、外部結果の全証明・再帰的依存先、専門家査読・形式検証は未実施。これらは日英記事・冊子に明記している。サイト組込み・検査を正しさの保証として扱わない。

## 第3段階の再開手順

1. 新しい公開指示を確認する。現時点では停止し、commit/pushしない。
2. 最新Git状態を読む。共有ブランチを切り替えず、他担当の未コミット作業を保持。stage2/changed-files.txtとstage2/site-registration.diff、stage2/pdf-edition-287.jsonを使い、287だけの候補差分を整理する。共有ファイル全体の無条件stageは避ける。
3. 公開候補には採用原稿・必要な引用/台帳/生成記録・16図資材・2冊子・287登録を含める。ダウンロード原典、外部PDF、画面画像、隔離プレビュー、一時組版物、開始時の共有ファイル写しはローカル検査証拠として保持し、無条件に公開commitへ混ぜない。
4. 公開候補と一致する状態でcheck:citations、test、build、check:pdf、check:linksを実行。内容変更がなければ図/PDFの再生成は不要。ビルドとリンク検査を同時実行しない。
5. 承認された287差分を通常のcommit/pushで反映し、Actionsのbuild/deploy成功を確認する。
6. 公開URLの日英catalog/287/、papers/free-group-factor-isomorphism/、fields/operator-algebras/、16図資材、2PDFを確認し、PDF/図のハッシュ・版情報・アンカーを照合して報告する。

公開予定の基底URLはhttps://masataka123.github.io/OpenAI-Math-Digest/。今回、公開反映確認はしていない。

## 再生成環境（必要なときのみ）

Nodeは/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node。通常のnpmスクリプトに相当する各.mjsまたはnode_modules/astro/astro.jsを実行できる。

```sh
PDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/python PDF_EDITION_DATE=2026-10-15 node scripts/build-catalog-pdf.mjs --catalog 287
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check
node scripts/check-links.mjs
```

PDF_PYTHONの環境が消えていればscripts/pdf/requirements.txtと同じバージョンを用意する。図再生成手順は採用記事status.md。再生成後は実際の変更対象を再検査する。
