# カタログ003 — 制作・公開記録

制作セット1.4および2026-10-20モデル運用を適用する。公式記録はinventory.json、取得記録はsources/acquisition.json、担当指定はMODEL_PROVENANCE.jsonを参照する。

現在は第3段階まで完了し、公開確認済み。最新の入口は[公開記録](PUBLICATION.md)と[第3段階受領](STAGE3_RECEIPT.json)。以下の第1・第2段階の停止記録は履歴として保持する。

## 第1段階の依頼範囲と保護

日英記事・TeX/SVG・引用記録・独立内容点検・日英カタログ案内まで制作して停止する。サイト登録、public資産、PDF版台帳、冊子PDF、commit/pushは今回扱わない。main上の既存作業を保持する。開始時Git情報はgit-baseline.json。数値やハッシュを報告書へ再転記しない。

## 担当

- Sol本部 /root：進行・取得・台帳・形式/図の表示検査・受領・引継ぎ。数学の新規執筆・修正・内容点検を兼任しない。
- Astra執筆A：公式順1（199ページ原稿）。drafts/catalog-003/quasi-riemann-seven-eighths/のみ編集する。
- Astra執筆B：公式順2・3、日英案内・比較・接続と構成判断。drafts/catalog-003/quasi-riemann-eleven-twelfths/、uniform-landau-siegel/、overview/のみ編集する。
- 独立Astra点検：全3記事と案内を原典に照合。coordination/catalog-003/reviews/へ記録し、修正は執筆者へ返す。執筆を担当しない。

記事は各1本最大60分（原典確認・執筆・図・自己確認を含む）。開始時刻と締切を各status.mdへ記録し、未確認を残して初稿を区切る。編集・修正は別記録。記事数と分類・図数を連動させない。

## 原典と制作指示

各担当はPROJECT_PLAN.md、AGENTS.md、production/README.md、MODEL_ROLES.md、ARTICLE_TEMPLATE.md、CATALOG_TEMPLATE.md、FORMAT_CONTRACT.md、CITATIONS.md、RECORDS.mdと担当指示を読む。既存Solの数学的成果物は根拠として再利用せず、今回の固定公式原典から制作する。外部原典の証明全体の再帰検証は不要。原稿の主張と編集照合を区別する。

## 環境

Nodeはload_workspace_dependenciesで確認した /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node。Python、pdftotext、pdfinfo、xelatex、dvisvgmはPATHで利用可能。Nodeを要する担当処理では必要に応じてNodeディレクトリをPATHへ追加する。共通スクリプトは変更せず、citationsを--registryで担当記事に限定する。

## 第1段階終了時

内容点検の指摘を執筆担当へ返し、影響範囲の再確認を受領する。形式・日英図の表示検査はvalidation/へ保存する。SITE_HQ_HANDOFF.mdへ成果物、確認範囲、保留、PDF未生成、再開手順を記録する。第2段階以降は次のユーザー指示で進める。

## 現在の受領状態

第1段階は2026-10-23に内容編集・独立点検・形式受領を完了して停止。最終入口は[SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md)。内容の確認限界は[独立点検総括](reviews/CONTENT_REVIEW.md)、形式・見本比較は[本部確認](validation/FORMAL_REVIEW.md)、次段階は[チェックリスト](RELEASE_CHECKLIST.md)。日英冊子PDF・サイト組込み・公開は未実施。

## 第2段階の現在位置

第2段階はサイト組込み・日英冊子PDF・公開前検査を完了し、公開準備完了として停止。[担当者確認](PREPARATION_REVIEW.md)と[第3段階への引継ぎ](STAGE2_HANDOFF.md)を参照する。数学本文と図は第1段階の確認版を再利用し、公開は未実施。

## 第3段階の現在位置

第3段階のcommit/push、Actions成功、公開ページ・図・日英PDFの反映確認を完了。[公開記録](PUBLICATION.md)を参照する。第2段階と同一版の本文・図・PDFを使用し、数学的な内容変更・PDF再生成は行っていない。未追跡の外部文献・画像キャッシュおよび無関係な作業は保持した。
