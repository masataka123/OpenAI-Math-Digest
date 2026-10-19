# カタログ356 第1段階

制作セット1.4。公式固定commit: 1581d4cbdd69a0faf34b2089614fe2a814316a6a。公式順はinventory.jsonの2本。分野はDifferential geometry（333–361）。既存原稿からの数学的内容再利用なし。

## 担当と変更範囲
- 本部: 台帳・構成・統一編集・案内・引継ぎ。coordination/catalog-356/ および drafts/catalog-356/overview/。
- A: gigli-characterization。gpt-6-astra / reasoning_effort high。該当記事フォルダのみ。
- B: weak-hessian-geodesics。gpt-6-astra / reasoning_effort high。該当記事フォルダのみ。
- R: 独立内容点検（両論文の主張・核心・直接入力）。gpt-6-astra / reasoning_effort high。reviews/のみ。

初稿は各担当の原典読解開始から60分以内。開始・締切・終了をstatus.mdへ記録。執筆者とは別のRが原典と照合し、本部が修正を統合。公式順は特徴付け→弱Hessian、読解上の依存順とは区別。

## 構成
日英記事2本、日英カタログ案内と共通4列表。総括図1点を採用。同値の両方向とcompanionの合流を表示し、不要な分類・選択UIは省略。必要な証明全体図は各記事に用意。

## 範囲と停止
今回は第1段階のみ。src/・public/・共有scriptsを変更しない。サイト組込み・日英冊子PDF生成・commit・push・公開は行わない。第2段階の日英PDFは必須、担当は再開後のサイト本部。mainブランチを切り替えず、他担当の変更を保持。

## 第1段階の受領
2026-10-19、両記事を独立内容点検後に受領。日英2記事・日英案内・9図の日英TeX/SVG。詳細・留保・次段階は[SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md)、画面比較は[FORMAT_COMPARISON.md](FORMAT_COMPARISON.md)。本段階で停止。

## 第2段階完了（2026-10-19）
サイト組込み・日英PDF・公開前検査を完了して停止。日本語34頁／英語36頁、各3章9図。詳細はstage2/REPORT.mdと現行SITE_HQ_HANDOFF.md。公開・commit/pushは未実施。

## 第3段階完了（2026-10-19）
公開commit 1b9166a26ed02cd6d66c91f95d67d32beb55bdb6、build/deploy成功、公開ページ・全図・日英PDFの一致を確認。最新状態はSITE_HQ_HANDOFF.mdとSTAGE3_RELEASE.md。数学的留保は維持。
