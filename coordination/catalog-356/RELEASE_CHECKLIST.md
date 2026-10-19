# カタログ356 公開チェックリスト

制作セット1.4。担当＝本部。2026-10-19。状態＝第3段階完了、公開反映確認済み。

## 第1段階（受領済み）

- [x] 公式本数・順・題名・分野・原稿版・固定commit・URL・頁数・SHAを記録（inventory.json、sources/）。
- [x] gpt-6-astra/high指定、日英記事・TeX/SVG・共通引用・全結論対応を制作（model-provenance.json、drafts/catalog-356/）。
- [x] 執筆者以外のRが主張・核心・直接入力を原典と照合し、修正を受領（reviews/）。初稿A13分37秒、B約9分。
- [x] 公式順4列表・図前文献・主張欄・証明対象・読書案内・必要な全体図を確認。総括図は両方向とcompanion合流を示す1点（STRUCTURE.md、FORMAT_COMPARISON.md）。
- [x] 残る数学的未確認を日英本文に保持。第1段階の詳細チェックリストをRELEASE_CHECKLIST.stage1.mdに履歴保存。

## 組込み（完了）

- [x] 分野→356→公式順2記事の日英導線をsite.mjsへ登録。共通CatalogMarkdownOverviewを使用。
- [x] 9図の日英SVG/TeXをpublicへ配置。全36ファイル原本一致（stage2/final-audit.json）。
- [x] 共通表示・AI注意書き・原典案内・案内役・右上言語切替を維持。共有CSS/rendererは変更なし。
- [x] 356のアンカー・図引用・既存固定原典を維持。他担当357と従来の差分を保持。

## 検査・画面比較（完了）

- [x] 全39テスト成功（stage2/tests-final.log）。
- [x] check:citations相当の完全検査成功、本文・TeX/SVG・公開コピーの一致（stage2/citations-final.log）。
- [x] 専用outDirで215ページbuild成功（stage2/build-isolated.log）。共有dist競合の初回失敗も記録して保持。
- [x] 215ページ・267,933内部参照を同じ共有検査ロジックで確認（stage2/links-cached.log）。
- [x] 日英1440px/375pxの32画面状態で横はみ出し・MathJaxエラー・ブラウザー例外0（stage2/browser.json）。
- [x] 個別全図のopen/zoom/fit/close、引用リンク、言語切替のスクロール時可視性とアンカー保持を確認。
- [x] 034公式順4列表・Schnell主張欄と証明順・033 Orbifold図前文献を実ビルド画面で比較（stage2/screens/、REPORT.md）。数値検査だけの判定ではない。

## 日英PDF（必須・完了）

- [x] サイト本部が日英生成。日本語34ページ／英語36ページ、各3章・9図（public/pdf/catalog-356-{ja,en}.pdf）。
- [x] 版情報・ファイルSHA・内容hash一致。全登録PDFのcheck:pdf相当成功（stage2/pdf-check-isolated.log）。
- [x] カタログ冒頭に対応言語のPDFリンクを表示。
- [x] 全70ページの画像一覧、表紙・目次・一覧・文献・主張欄・長い数式・全18図・確認範囲を視認（stage2/pdf-pages/）。
- [x] PDF内部リンクと原典リンク、3章の目次bookmarkを確認（stage2/final-audit.json）。

## 段階境界

- [x] 第2段階結果・成果物・残作業・再開手順をSITE_HQ_HANDOFF.mdへ記録して停止。
- [x] 第3段階の公開指示を受領（2026-10-19）。
- [x] 356対象差分だけをcommit/push。公開commit 1b9166a26ed02cd6d66c91f95d67d32beb55bdb6。
- [x] GitHub Actions build/deploy成功、公開10ページ・38配信ファイルと日英6画面の反映を確認（stage3/）。

公開・反映確認の残作業なし。数学的未確認は別軸として第1段階の留保を保持し、全証明認証とは表現しない。
