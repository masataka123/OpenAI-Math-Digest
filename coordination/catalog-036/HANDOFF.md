# カタログ036 — 第1段階の引継ぎ

> 第3段階更新（2026-10-13）：日英サイト・図・PDFの公開確認まで完了。最新状態は [PUBLICATION.md](PUBLICATION.md)。以下は各段階終了時の履歴。

> 2026-10-13 第2段階更新：日英サイト組込み・日英PDF・公開前検査を完了し、公開準備完了で停止。最新状況と第3段階の再開手順は [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md)。以下の第1段階記録は履歴として保持する。

2026-10-13。**第1段階「記事制作・内容点検・カタログ案内」まで完了し、ここで停止する。** 状態は内容編集済み／引渡し済み。サイト組込み・日英冊子PDF生成・commit・push・公開は未実施。PDF待ちをカタログ全体の完成とはしない。

作業先は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチは **main** のまま。開始HEADは `8c7b6d95600ef6b977039452d344eb2a55db3123`。052の並行制作、既存のAGENTS/PROJECT_PLAN/production変更、034保留記録を保持し、ブランチ切替・既存変更の取消しをしていない。今回の書込みは `drafts/catalog-036/` と `coordination/catalog-036/` のみ。

## 公式対象と成果物

公式タイトルは **Numerical semiampleness and generalized minimal models**。公式分野は第2分野 **Algebraic and complex geometry**。overview.pdfの036項目はp5。固定commitは `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。公式overview/CONTENTS、出典URL、ファイルハッシュ、分野の番号所属は [inventory.json](inventory.json)。既存記事の重複は正式タイトル検索で見つからなかった。

| 公式順 | 正式タイトル・版・PDF頁数 | 原稿フォルダ | 図設計数 |
|---|---|---|---|
| 01 | Numerical semiampleness of nef adjoint classes on compact Kähler manifolds — 2026-10-06、52頁 | [kahler-numerical-semiampleness](../../drafts/catalog-036/kahler-numerical-semiampleness/) | 5 |
| 02 | Numerical Semiampleness of Nef Adjoint Divisors — 2026-10-03、37頁 | [projective-numerical-semiampleness](../../drafts/catalog-036/projective-numerical-semiampleness/) | 5 |
| 03 | Minimal models and Mori fibre spaces for generalized log canonical Q-pairs — 2026-09-24、79頁 | [generalized-lc-minimal-models](../../drafts/catalog-036/generalized-lc-minimal-models/) | 3 |
| 04 | Minimal models in numerical dimension one — 2026-09-24、14頁 | [minimal-models-numerical-dimension-one](../../drafts/catalog-036/minimal-models-numerical-dimension-one/) | 2 |

各フォルダに `article.ja.md` / `article.en.md`、`citations.json`、`sources.json`、`status.md`、日英TeX/SVGと再生成スクリプト・manifestを保存。共通記録から引用を生成した。原典PDF/抽出本文は照合資料であり、今回生成した解説PDFではない。

[overview](../../drafts/catalog-036/overview/) に日英案内、公式順4列表の `presentation.json`、結果単位9件の `connections.json`、引用記録、日英総括図1設計を保存。**記事15設計＋総括1設計＝日英32SVG、対応する32自己完結TeX**。確認用PNG/HTMLは本部validationと各担当qa/reviewにある。分類数は固定せず、図の採否理由をconnections.jsonへ記録した。

## 点検結果と未確認事項

[CONTENT_REVIEW.md](CONTENT_REVIEW.md) と [REVIEW_ND1_BY_KAHLER.md](REVIEW_ND1_BY_KAHLER.md) に原典ページ、主張と全結論の説明先、点検担当を記録。3本は本部、執筆を兼ねた数値次元1は別担当が照合した。全初稿を60分以内で終了し、後続編集を分離して記録。

第1段階の引用テキスト照合、100件の図生成ハッシュ、4原稿ハッシュ、日英引用順・主張/結論/本文アンカーを確認。日英10ページ×PC/375pxの計20画面でページ横はみ出し・MathJaxエラー0。034の表、Schnellの証明節、033 Orbifold Iitakaの文献案内と共通表示を比較した。機械検査だけで形式統一を判定していない。

[UNRESOLVED.md](UNRESOLVED.md) に未確認を集約。Kählerのmeromorphic nonvanishing中間計算・period互換性、射影のFrobenius全計算、generalizedの局所§§4–13の深い一様評価、各記事の一部教科書・補助原記述は未確認。原典の主要主張と核心入力・用途の対照を、全証明の独立検証と呼ばない。

## 第2段階の再開手順

1. AGENTS/PROJECT_PLANと現行productionを再読し、`git status --short` と本引継ぎを確認。052と共通ファイルの編集順序を調整する。別カタログの成果物を一括stageしない。
2. `inventory.json` の公式順4本を `src/data/site.mjs` のpapers/catalogs/分野へ登録する。036の `mode` はmulti、`overviewSectionIds` は `['papers','connections','sources']`。既存の `CatalogMarkdownOverview` / `renderDraft` / 共通catalog-inventory・CSSを使用し、033専用データや固定3分類を引き継がない。
3. 各036ディレクトリの引用を同期し、必要なら当該 `diagrams/render.py` で図を再生成する。日英SVG・自己完結TeXを `public/diagrams/catalog-036/<paper-id>/` と `.../overview/` へ反映する。`citation-build.json` に合わせ公開コピー検査を通す。一括図コマンドが036を対象にすると仮定しない。
4. 実ルート `/ja/catalog/036/`、`/en/catalog/036/`、各言語の4 paper IDを確認。共通公式表の導線、図引用・図拡大・全体表示、TeXリンク、言語切替の位置とアンカー保持、AI注意書きと原典確認案内、PC/375pxを検査する。第1段階のHTMLは外枠を借りた隔離表示で、公開ルート動作の代替ではない。
5. 引用検査、テスト、Astro build、リンク検査を実施する。第1段階では公開コピーとサイト登録がないため、限定text-only検査までとしている。
6. `scripts/pdf/README.md` に従い、**036だけの日英PDF**を生成する。対象は案内＋公式順4記事の**5章**、各言語の図は**16点**。必要出力は `public/pdf/catalog-036-ja.pdf` / `catalog-036-en.pdf`。実際の生成命名を確認し、`src/data/pdf-editions.json` の036キーだけを更新、再ビルドして案内冒頭に対応言語PDFリンクを出す。
7. 日英PDFの表紙・目次・全図・長い数式・改ページ・出典表示と内部/原典リンクを画像で確認。`check:pdf` とリンク検査を行い、RELEASE_CHECKLISTに担当・ログ・状態を記録する。第2段階のみの依頼なら公開前に停止する。

通常の検査列（第2段階で実行。今回は未実行）：

```sh
npm run check:citations
npm test
npm run build
npm run check:links
npm run pdf:catalog -- --catalog 036
npm run build
npm run check:pdf
npm run check:links
```

この環境は通常のPATHにnode/npmがなく、bundled Nodeを使用した。npmが見つからない場合も憶測で検査成功とせず、必要な実行環境を整える。node本体は `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。TeXは `/Library/TeX/texbin`。図スクリプトはXeLaTeXの`-no-pdf`とdvisvgmを使う。

現在の第1段階検査を再現するコマンド：

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH
node scripts/sync-citations.mjs --check --text-only --catalog 036
node coordination/catalog-036/preview.mjs --render-only
python3 coordination/catalog-036/validate_stage1.py
```

画面確認用サーバーは `node coordination/catalog-036/preview.mjs`（127.0.0.1:43836）。別プロセスで `node coordination/catalog-036/visual-check.mjs`。ローカルbindとChrome起動に実行許可が必要な環境では通常の承認機構を使う。`create_*_records.py`、`create_overview.py`、`finalize_records.py` は初回執筆用の履歴スクリプトであり、レビュー後原稿に再実行しない。

## 共有箇所への申し送り

- 034の既存Kähler log abundance記事は10月4日版、036の直接入力は10月6日版（固定URLはsources.json）。今回034を変更していない。旧記事の結果番号へ機械的にリンクせず、036では原典へ案内する。
- GLC Cor1.2→LA Cor12.1(i) p76の辺と、LA Thm1.1→ordinaryなnef終点の追加帰結を区別する。LA主定理への循環依存の図を作らない。
- 新規外部キーはauthor-key。Fuj09aはeffective BPF、Fuj09bはBCHM notes。BDPP13を共通化。042/051その他旧記事の表記だけの変更をしない。
- 参照PDF・大きなQA画像は検証資料として保持。公開用コピーの対象は原稿を表示するサイトと図・日英解説PDFで、参照PDFを冊子成果物として数えない。

全変更ファイルの一覧は [CHANGED_FILES.txt](CHANGED_FILES.txt)。コミット・公開は現在の依頼範囲外である。
