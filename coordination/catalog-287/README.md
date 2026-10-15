# 現在の状態：第3段階・公開確認済み

2026-10-15に287を公開し、Actionsと日英ページ・図・PDFの反映を確認。詳細は[stage3/PUBLICATION.md](stage3/PUBLICATION.md)。以下は第1・第2段階の履歴を保持したもの。

# カタログ287 — 第1段階制作記録

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、作業ブランチ：`main`（切替なし）。
- 依頼範囲：記事制作・内容点検・カタログ案内。サイト組込み、日英冊子PDF、commit、push、公開は行わない。
- 採用規約：制作セット1.4、2026-10-12の段階分離、2026-10-15のAstra指定。`AGENTS.md`、`PROJECT_PLAN.md`、制作README・FORMAT_CONTRACT・CITATIONS・START_CATALOG・各テンプレート・RECORDS・RELEASE_CHECKLISTを参照。
- 公式台帳：`inventory.json`。公式commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`を新規取得。公式概要の287はPDF p.31、分野は掲載順13番目の **Operator algebras**（285–303、pp.31–33）。TeXの分野識別引数16と掲載順13を区別する。
- 公式概要表記：All nonabelian free group factors are isomorphic。CONTENTS表記：Isomorphism of the free group factors。
- 収録1本：OpenAI, *An isomorphism of the free group factors*, September 23, 2026, 23ページ。
- 既存記事：制作前に`src/`、`drafts/`、`research/`を正式タイトル・paper IDで検索し該当なし。別カタログにある公式一覧の写しは記事とみなさない。

## 担当・保護範囲

単論文の数学的制作を本部兼執筆担当 `astra_hq` に集約し、`gpt-6-astra` を明示選択した。執筆・内容点検・日英案内はこの1名が公式原典から新規制作する。本窓口は資料固定・台帳・機械検査・表示検査・引継ぎを担当する。単独担当による内容点検を独立レビューとは呼ばない。既存Sol制作の数学本文・図・解釈・点検結果は制作根拠として再利用しない。

書込み範囲は `drafts/catalog-287/` と `coordination/catalog-287/` のみ。他担当の進行中変更を保持し、共通表示・サイト登録・PDF管理ファイルは変更しない。開始時のGit状態・HEAD・追跡ファイルのSHA-256は`validation/`に保存した。作業中に別担当が加えた変更は取り消さない。

## 構成

短い日英入口、公式順4列表1行、日英記事、結果単位の引用・接続記録とする。記事の図と説明は本文に集約する。カタログの分類・総括図の採否はAstraの接続整理を受けて`overview/connections.json`へ記録する。PDF導線は第2段階で実ファイルとともに冒頭へ配置し、現段階に偽のダウンロードリンクは設けない。

## 検査と停止

第1段階では対象レジストリの引用検査、日英とアンカーの機械照合、共通レンダラーによる隔離プレビュー、Schnell・Orbifold Iitaka・034との表示比較を行う。検査範囲と未実施を区別して`FORMAT_REVIEW.md`に残す。既存サイトのフルビルド・統合リンク・日英冊子PDF・実サイト確認は第2・3段階。

完了時に`SITE_HQ_HANDOFF.md`から再開できる状態にして報告し、停止する。

## 第1段階完了

2026-10-15：日英記事・4組8図のTeX/SVG・引用/原典記録・日英案内・内容自己点検・形式点検・指定見本比較を完了。数学的初稿は21:24:48–21:43:25 JST（18分37秒）。`gpt-6-astra`担当と時刻は`model-provenance.json`に記録。技術窓口の後続作業は隔離リンク検査と記録整理で、数学原稿の延長制作ではない。

公開準備未完了。具体的な数学的保留と第2段階の再開手順は`SITE_HQ_HANDOFF.md`、全変更ファイルは`changed-files.txt`、保全確認は`validation/preservation.json`を参照。

## 第2段階完了（2026-10-15）

続くユーザー依頼により、287のサイト登録、16公開図資材、日英冊子（16/18ページ、各2章4図）、公開前の自動検査と画面/紙面比較を完了。数学原稿を変更せず、他担当の変更と既存PDFを保持した。stage2/REVIEW.mdが検査記録、SITE_HQ_HANDOFF.mdが第3段階の再開手順。commit/push・公開は未実施で停止。
