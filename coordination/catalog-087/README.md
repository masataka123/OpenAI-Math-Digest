# カタログ087 第1段階制作記録

- 依頼範囲：記事制作・内容点検・カタログ案内。サイト登録・日英冊子PDF・commit・push・公開は実施しない。
- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。開始HEADは `5042e9f0dcf62a6c2e23a8660644038de377a287`。
- 適用：制作セット1.4と2026-10-12の段階運用補足、2026-10-15のAstra指定。
- 公式固定commit：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。正式見出し `The Mahler conjectures and symplectic width`、CONTENTSの長い別見出しはinventoryに保持。
- 分野：公式掲載順4（内部ID subject8）`Convex and metric geometry`、範囲087–101。overview.pdf誌面/PDF p.10を画像でも確認。
- 公式順3論文：symmetric-mahler（26頁）、general-mahler（72頁）、symplectic-polar-products（19頁）。原稿は全てOpenAI、September 22, 2026。
- 既存記事：src/drafts内の正式タイトル・識別語検索で対象の記事なし。原典ファイルと共通表示基盤・指定見本のみ利用し、既存Sol成果物は制作根拠にしない。

## 担当・境界

| 担当 | 明示指定モデル | 担当範囲 |
|---|---|---|
| 本部 | 実行中ルート（モデル名を推定しない） | 台帳、工程管理、機械検査、表示準備、引継ぎ。数学記事の執筆・内容点検を代行しない |
| symmetric | gpt-6-astra | 対称版の日英記事・図・引用・自己点検 |
| general | gpt-6-astra | 一般凸体版の日英記事・図・引用・自己点検 |
| symplectic | gpt-6-astra | 幅論文の日英記事・図・引用・自己点検 |

執筆後は別のAstra担当が原典に照らして交差点検する。割当・実施範囲・結果はCONTENT_REVIEWに記録する。別エージェントの照合も専門家査読・全証明の独立検証とは呼ばない。カタログ本文と数学的総括もAstraに割り当てる。

変更先は `drafts/catalog-087/` と `coordination/catalog-087/` のみ。他担当の変更・共通部品・サイト台帳・PDF管理を触らない。開始Git状態をgit-status-start.txtに保存。ブランチ切替なし。

## 構成

公式順の共通4列表を3行で作る。記事内部は主張→引用付きTeX図→説明、外部入力と原典読書案内。カタログ分類・総括図は結果単位の接続確認後に決定し、採否を記録する。3担当を3分類の理由にしない。

冒頭PDF導線は第2段階で日英の実ファイルとともに設置する。今回は架空のPDFリンクを置かない。日英PDF担当は次段階のサイト本部。

## 指定見本

記事骨格：src/components/SchnellArticle.astro／src/data/schnell.mjs。
文献・入力案内：drafts/catalog-033/orbifold-logarithmic-iitaka/。
カタログ：src/components/Catalog034Overview.astro。
051は新しい標準見本にしない。見本の不足よりFORMAT_CONTRACTを優先する。

## 第1段階の終了

2026-10-15：日英3記事・16種の日英図（記事15種＋総括1種＝32 SVG/TeX）、日英案内、引用・原典記録、4件の別Astra内容点検、指摘反映、隔離プレビューでの指定見本比較を完了。詳しくはCONTENT_REVIEW.md / FORMAT_REVIEW.md / SITE_HQ_HANDOFF.md。サイト組込み・冊子PDF・公開は未実施。

**分野順の訂正**：公式目次ではConvex and metric geometryは4番目。subject8は内部IDであり表示順ではない。台帳・日英案内を訂正し、点検担当も原典目次を再確認した。

**並行作業の検出**：最後の保護ファイルhash比較でsrc/data/site.mjsとsrc/data/pdf-editions.jsonに他作業の変化を検出。site.mjsの差分は159登録であり、087の登録はない。本制作の担当は両ファイルを書き換えておらず、差分を保持した。検査ログのprotectedFilesChangedDuringSessionは「本制作の変更一覧」ではない。Git HEADとブランチは開始時と同じ。
