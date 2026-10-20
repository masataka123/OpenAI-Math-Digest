# カタログ322のサイト組込み引継ぎ

> 現在の状態（2026-10-20）：第3段階・公開反映確認まで完了。サイト内容commit 206b46a、Actions 39411551999成功。日英ページ・図・PDFの公開版を照合済み。詳細は PUBLICATION_REPORT.md。下記の停止・未依頼の記述は過去の段階の記録。

**現在の状態（2026-10-20追記）：第2段階完了・公開前で停止。** 今回の実行ID・対象版・目視・時間・残作業は [PREPARATION_REVIEW.md](PREPARATION_REVIEW.md)。以下の第1段階引継ぎは履歴として保持する。

第1段階の成果物と別担当による内容照合を受領し、ここで停止する。第2・第3段階は未実施。公開準備完了とは扱わない。

## 作業場所・依頼範囲・版

- 作業場所：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。ブランチ `main`、開始commit `b284533abcd0fad49f279bfd64482e91d185e80d`。
- 制作セット1.4、2026-10-19共通処理・引継ぎ補足。
- 現在の依頼は第1段階「記事制作・内容点検・カタログ案内」のみ。報告して停止する。サイト登録・冊子PDF生成・commit/push・公開へ進まない。
- 公式322 *Tingley's sphere-isometry problem*。Functional analysis（関数解析、公式322–332、15番目、overview PDF p.35）。公式参照commitは `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。
- 収録1本：OpenAI, *A positive solution to Tingley’s problem*, September 23, 2026、12ページ。書誌・原典URL・SHA-256は `inventory.json`。
- 既存記事なし。新paper ID `tingley-positive-solution`。既存Solの原稿・図・解釈・点検を根拠にせず公式原典から制作。

## 担当と保全

内容本部兼記事担当 `astra322_hq_writer`、内容照合 `astra322_content_review`。両者とも `gpt-6-astra`, `reasoning_effort=high` を明示指定して起動。指定・範囲は `MODEL_PROVENANCE.json`。親本部は台帳・取得・機械検査・進行・引継ぎを担当。別担当による内容照合であり、専門家の独立査読・全証明の独立検証と表示しない。

共有作業場の `src/data/pdf-editions.json` に開始前から変更があり、多数の他カタログ成果物もあった。開始状態は `validation/git-status-start.txt`、追跡済み変更のハッシュは `validation/preserved-tracked.json`。今回の書込みは `drafts/catalog-322/` と `coordination/catalog-322/` に限定する。共有ブランチ切替、他の変更の消去・取り込み・公開は行っていない。

## 成果物の場所

- 本部台帳：`coordination/catalog-322/inventory.json`。
- 原典：`coordination/catalog-322/sources/`、取得ファイルの同一性は `SOURCE_MANIFEST.json`。
- 日英記事・引用・出典・図・状態：`drafts/catalog-322/tingley-positive-solution/`。
- 日英案内・共通4列表・接続：`drafts/catalog-322/overview/`。
- 内容照合：`coordination/catalog-322/CONTENT_REVIEW.md`、執筆記録：`AUTHORING_REPORT.md`。
- 共通処理の導入確認：`COMMON_PIPELINE_CHECK.md`。公開残作業：`RELEASE_CHECKLIST.md`。

## 第1段階の受領結果と確認範囲

- 公式1論文。記事日英2本、カタログ案内日英2本、論理図3点（main / alignment / contradiction）を日英で各3点、計6 SVG・6自己完結TeXとして用意。出典・共通引用・接続記録と状態記録を添付。
- 原典の主要結果・帰着・直接入力は `CONTENT_REVIEW.md` の対応表を参照。執筆者とは別のAstra担当が主原典pp.1–11の必要箇所、Darboの主張と利用条件、Nicaの定理と反射議論を照合した。主定理の等長性・全射性は `proof-1-step-2`、実線形性・一意性は `proof-1-step-3`。命題4.2・5.3の全主張を各図前に配置。
- 内容指摘は反映済み。日英6図のPNGを最終目視し、欠け・重なり・内容の未解消不一致は発見されなかった。別担当照合の対象35ファイルは `sources/content-review-manifest.json` に固定。
- 共有引用のtext-only検査、共通renderDraftによる日英の主張・説明先アンカーと図3点ずつの構造検査、図生成マニフェスト19ファイルの同一性検査が成功。公式順共通表も両言語1行4列で検査成功。証拠は `FORMAT_REVIEW.md` と記事 `qa/`、本部 `validation/`。
- 全証明・Appendix Aの全細部や外部文献の再帰的証明検証は実施していない。Nica取得版の欄外2013年と本文Date 2024年の不一致は未解消として記載。詳細な確認範囲と原典への読書案内を日英本文にも残した。
- 033・034・Schnellとの実画面比較、PC/375px、サイト全体リンク、MathJax、日英冊子PDF紙面は第2段階へ残す。第1段階の図PNG目視・共通HTML構造検査と混同しない。

## 時間の記録と計測の境界

- 記事初稿：2026-10-20 19:11:15–19:26:46 JST、15分31秒。ユーザーの再送・親モデル切替による19:21頃–19:22:37の中断も含む壁時計時間で、最大60分以内。内容本部兼記事担当の開始・終了と未確認範囲はAUTHORING_REPORT.mdと記事status.md。
- 読解・執筆・自己点検は19:11:15–19:20頃。機械図生成は19:20頃に初回失敗（TeX数式区切り）、再開後に修正して成功し、19:25頃に条件追記版を再生成。機械処理自体の秒数は未計測。
- 図目視・修正は19:24頃–19:26:46。これらは履歴に基づく概数区間で、一部重複する。15分31秒を純粋な読解時間や機械時間へ割り当てない。
- 別担当照合：19:12頃–19:26:40 JST、約15分（開始は分単位、待機・中断込み）。記事担当との並行作業であり、両者の経過をカタログ全体経過として加算しない。
- 初稿後の作業は制作記録・引継ぎ整理。記事の数学的内容は追加変更していない。親の受領検査時点（19:30 JST）で内容照合マニフェスト35件と図生成マニフェスト19件の全ハッシュが一致。
- 第1段階の共通処理導入確認は既存ユニット検査11/11成功、約0.48秒。第2段階の機械時間に合算しない。第2段階の総時間・工程別時間・日英PDFページ数・生成/再利用・処理外手作業・失敗/再実行は未計測。未実施をゼロや再利用済みとは扱わない。
- 最終保全確認はvalidation/preservation-final.json。既存pdf-editions.jsonのSHA-256不変、322外のGit状態項目の追加・削除・変更なし。開始時の未追跡成果物全体のバイト単位バックアップ検査は行っていないが、本作業で322外への書込みは行っていない。

## サイト組込みの要点（次の指示後）

1. 322の固定版台帳を `src/data/site.mjs` へ登録し、関数解析分野（`functional-analysis`）のcatalogIdsへ322を追加する。公式順とpaper IDを保持する。概要のdescriptionは今回のAstra記事・案内から取得する。
2. カタログは `CatalogMarkdownOverview.astro`、記事は `CatalogDraftArticle.astro` の既存共通表示を使う。両言語ルートは既存ルート生成に従う。案内のH2順に `overviewSectionIds: ['inventory', 'guide', 'sources']` を指定する。
3. `overview/presentation.json` と `CATALOGINVENTORYTOKEN` を共通4列表へ表示する。単論文用の短い入口を維持し、分類・空の論文間関係図・選択UIを追加しない。外部接続の詳細は記事とconnections.jsonを参照する。
4. 記事担当の図生成手順をstatusで確認し、対象322のTeX/SVGだけ生成・公開フォルダへ配置する。本文・TeXの引用は同じcitations.jsonから生成する。新規記事なので維持すべき旧アンカーはないが、conclusionCoverageの説明アンカーが実在することを共通描画で確認する。
5. 日英PDFは未生成。担当はサイト本部。共通部品はpdf-editions登録後、カタログ冒頭に対応言語PDFリンクを表示する。成果物は `public/pdf/catalog-322-ja.pdf` と `catalog-322-en.pdf`。短い案内＋記事1本の各2章。PDF待ちをカタログ全体完成と扱わない。

## 第2段階の共通処理・確認・停止

サイト登録と対象図の配置後、次を使う。PDF生成・図中リンク補完・内部リンク・画面検査の専用スクリプトを作り直さない。

```sh
npm run catalog:prepare -- --catalog 322
```

現環境では同梱Nodeを直接指定して第1段階の共通検査を実行したが、npmは見つからなかった。同梱node/binのPATH追加だけでは解決しないため、第2段階担当はnpmが利用できる実行環境を確認・用意する（`COMMON_PIPELINE_CHECK.md`）。その後、上記の共通コマンドを使う。別チェックアウトでは共通コマンド導入commitを取り込んでから実行する。

実行ごとの `tmp/catalog-preparation/322/<実行ID>/HANDOFF.md`, `report.json`, `browser/index.html`（画像一覧）、`browser/report.json` と日英PDFを確認する。`coordination/catalog-322/PREPARATION_REVIEW.md` は初回のみ共通処理が作成する。今回の実行ID、対象版（HTML/PDFハッシュ）、担当、日英・PC/375px・指定見本との目視比較、PDF紙面、残作業を追記する。過去の確認を新版へ自動承継しない。

第1段階ではサイトを登録しないため、共通描画の実画面比較（034の表・Schnellの主張/証明対象・033 Orbifold Iitakaの文献案内）、画面上の内部リンク・MathJax・スマートフォン・言語切替、冊子PDF紙面は未実施。第2段階の必須項目として確認する。機械成功を数学的正しさ・目視の承認としない。

性能確認は、論文数・論理図数/日英資産数・日英PDFページ数、総実行時間・工程別時間、PDF生成/再利用、処理外手作業と所要時間、失敗/再実行の有無と実行IDを報告する。読解・執筆・内容照合、機械処理、目視は分ける。異なる内容量の別カタログとの単純時間比較で高速化を断定しない。第2段階も結果を報告して停止し、commit/pushは行わない。

## 第3段階（公開指示後）

第2段階の対象版と検査後の変更を確認し、322の差分だけ公開する。GitHub Actionsの開始/終了と所要時間、build/deploy結果、日英カタログ・記事・全図・TeX・PDFの反映を記録する。現時点で公開URL・公開commit・Actions・公開反映確認はすべて未実施。

## 第2段階完了後の再開

サイト登録と対象6 SVG/6 TeXの配置、共通catalog:prepare、日英PDF（16/17ページ）と画面検査・今回の目視を完了。成功実行69.72秒、Chrome起動制限による失敗18.82秒の後に1回再実行。第2段階の詳細と永続保存した証拠はPREPARATION_REVIEW.mdとstage2/。

現在、commit/push・公開は未実施。第3段階の指示後、stage2/final-integrity.jsonと今回の版を比較し、他カタログの既存変更を保ったまま322の差分だけ公開する。変更があれば必要な再検査を実施。Actions所要時間・成功と公開反映を記録する。

利用可能なnpmは `/private/tmp/geometry-digest-20261019/node-v20.20.2-darwin-arm64/bin/npm`、Node 20.20.2/npm 10.8.2。このbinをPATHへ追加して指定の共通コマンドを実行した。通常sandbox内ではChrome起動に失敗し、実行制限外で成功した。別環境では実際の依存環境を再確認する。

## 第3段階の完了（2026-10-20）

ユーザーの公開指示に基づき、322のみをcommit/push。Actions成功（開始から最終ジョブ完了126秒、成功状態更新まで127秒）。公開22件のHTTP/SHA-256照合、日英4表示条件の共通ブラウザー検査と画面目視を完了。PDFは第2段階の16/17ページ版を再利用。公開後記録はPUBLICATION_REPORT.mdとstage3/。既存作業を保持。公開に必要な残作業なし。数学的確認範囲はCONTENT_REVIEW.mdのとおり維持する。
