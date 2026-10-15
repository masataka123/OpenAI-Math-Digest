# Catalogue 187 — 段階別確認表（Astra新稿）

対象187／制作セット1.4＋補足。single。本部・執筆・照合：gpt-6-astra high、単独自己点検。サイト本部：本部兼任。今回の許可は第2段階まで、commit・push・公開は不可。

状態：**第2段階の公開前検査完了。公開・反映確認は未実施。** 旧Solのチェックを移植せず、新しい証拠に基づいて記録。

| 段階1の項目 | 結果 | 証拠 |
|---|---|---|
| 公式番号・表記・順序・分野 | 確認。187、1本、Combinatorics、順7 | inventory.json、sourcesのoverview/CONTENTS |
| 原典版・URL・84ページ・ハッシュ | 新規取得して記録 | 記事sources.json、sources/manifest.json |
| 重複とモデル | 同一IDを保持。旧稿は退避。Astra新規執筆 | MODEL_PROVENANCE.json、superseded-drafts/ |
| 日英本文・全結論・中間主張 | 本部自己点検済み | CONTENT_REVIEW.md |
| 全体図・各証明図と直後の説明 | 4図×日英、TeX/SVG・画像確認 | diagrams/、screens/standalone-* |
| 直接入力・計算の区別 | 原稿内部の3結果、二プログラム新規実行。未実施を明記 | COMPUTATIONAL_REVIEW.md、reconstruction/ |
| 日英の数式・節・表・引用 | 表示数式3、数値表6行、8節ID一致。引用生成と対象検査PASS | validation/local-checks.json、structure.json |
| 公式順4列の共通表 | 1行でも同じ共通レンダラを利用 | overview/presentation.json、preview/overview.* |
| 文献案内・著者／正式題／版・読書案内 | 図より前の定義、末尾6つの目的付きリンク | 記事citations.jsonと両言語本文 |
| 分類・総括図の採否 | カタログは短い入口。証明の分岐・合流は記事図へ | overview/connections.json、FORMAT_REVIEW.md |
| Schnell・Orbifold・034との表示比較 | 日英PC／375pxローカル比較。051未使用 | screens/compare-*、browser.json |
| 時間・引継ぎ・変更範囲 | 60分以内の初稿。終了時刻と範囲は本部README | README.md、SITE_HQ_HANDOFF.md、scope.json |

## 第2段階の実施済み項目

- [x] 新稿のサイト組込み、187案内の節ID登録、旧図との差分整合（担当：サイト本部）。
- [x] 公開フォルダへ新図を配置し、非text-onlyのcheck:citations、npm test、build、check:links（担当：サイト本部）。
- [x] 日英PDF2章を新稿から生成、全図・表・数式・リンク・改ページを画像点検（担当：サイト本部）。
- [x] PDF台帳・カタログ冒頭の実ファイル導線をそろえ、check:pdf・再ビルド・リンク検査（担当：サイト本部）。
- [x] 実サイトの図拡大、日英切替とアンカー保持、固定ヘッダー、375pxとPCの確認（担当：サイト本部）。
- [x] 公開準備の結果と残る数学的未確認を報告して停止。

## 第3段階

依頼範囲外。commit・push・Actions・公開URLの反映確認は今回実施しない。既存の187公開図・PDFが作業開始時に存在したことと、今回の新稿の公開準備を区別する。

最終証拠：astra-stage2-20261015/REVIEW.mdとlogs/。日英21／22ページ、各2章・4図。39テスト、引用、全PDF、内部リンク183,482件が合格。途中の187案内リンクと有限盤斜線は修正済み。共有246のリンク残件も担当側の更新後に解消し、最終全体検査を通過。
