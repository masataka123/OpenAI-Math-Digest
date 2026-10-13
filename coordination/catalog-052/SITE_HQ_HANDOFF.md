# カタログ052 第1段階の引継ぎ

> 2026-10-13 第2段階を実施。現在の状態・成果物・検査・公開再開手順は [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md) を参照。以下は第1段階の記録。

## 現在の状態と作業場所

- **第1段階「記事制作・内容点検・カタログ案内」終了。内容編集済み。** 公開準備完了ではない。
- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、既存ブランチ **main**。開始時HEADは `git-head-start.txt`。ブランチ切替、commit、pushはしていない。
- 採用：制作セット1.4、2026-10-12までの現行補足。ユーザー指定は第1段階まで。サイト組込み・PDF・公開は禁止された後続段階として未実施。
- 今回の変更は `coordination/catalog-052/` と `drafts/catalog-052/` の新規成果物のみ。共通ルール類の既存変更・034停止記録を保持。036の並行制作へ触れていない。全ファイルは `CHANGE_MANIFEST.tsv`、保持検査は `preservation-check.json`。

## 公式対象と成果物

公式commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。概要表紙はOctober 6, 2026、052はPDF p.7。分野は公式2番目 **Algebraic and complex geometry**（032–069）。正式見出しは **Tangent-bundle splittings and universal covers**、CONTENTSの別表記は **Tangent splittings and product decompositions**。日本語案内は「接束の分裂と普遍被覆」。台帳は `inventory.json`。

| 公式順・paper ID | 正式タイトル・版・ページ | 保存先・担当 |
|---|---|---|
| 1 `universal-cover-splitting` | Universal-cover splitting for compact Kähler manifolds; September 23, 2026; 33pp | `drafts/catalog-052/universal-cover-splitting/`、本部執筆 |
| 2 `split-tangent-integrability` | Integrability of split tangent bundles on rationally connected manifolds; September 23, 2026; 16pp | `drafts/catalog-052/split-tangent-integrability/`、integrability担当 |

- 両フォルダ：`article.ja.md`, `article.en.md`, `sources.json`, `citations.json`, `status.md`, `diagrams/`。図は原本TikZ、preamble、render.py、共通生成引用、自己完結TeX、SVG、citation-build.json。
- 図は記事1が3種×日英、記事2が4種×日英、案内が1種×日英。合計8種・16SVG/16TeX。**冊子PDFは生成していない**（保存されたPDFは取得した原典のみ）。
- `drafts/catalog-052/overview/`：日英案内、`presentation.json`（公式順共通表）、`connections.json`、`sources.json`, `citations.json`、対照図、`status.md`。
- 重複記事なし。`prototype/atlas.mjs`には1本だけの旧試作があるが完成記事として再利用しない。既存公開アンカーの改名は不要。
- 閲覧用の未公開プレビュー：`coordination/catalog-052/preview/overview.ja.html` / `.en.html`、各paper IDの `.ja.html` / `.en.html`。

## 内容点検と未確認

別担当 `source_review` が両記事の日英と主要証明・全主結論・直接入力・図を照合した。記録は `REVIEW_SOURCE.md`。専門家査読や全証明の独立検証とは区別する。本部の形式・画面比較は `FORMAT_REVIEW.md`。

- Universal：Theorem 1.1、Corollaries 1.2–1.3の全結論。§§2–7、Ivashkovich Theorem2.2、Hor07 Theorem1.3、Song (4.28)/Lemma4.1を照合。
- Integrability：Theorem1.1、Corollaries1.2/5.1、独立証明節Proposition2.1。本文とAppendices A–Bを読み、Hor07/08の入力・ページ対応を照合。
- 本部の初稿時間：20:03:07–20:19:47 JST（16分40秒）。第2記事：20:04:04–20:17:12（13分08秒）。初稿上限60分内。案内・本部表示確認・受領後の句読点/導線調整は別工程として記録。
- **保留**：KM98 Theorem3.3の外部原典本文・個別ページ（出版社公開範囲は章概要のみ）。本稿Proposition7.1のD=KX、整数a>1の代入は読んだが、外部定理を確認済みにしない。
- **範囲外**：Universal Appendices A–Dの別証明、全技術の独立再構成、外部定理の証明全体・再帰的な全依存検証。IntegrabilityでCampanaの射影性はHor08の記述で確認し、その原証明は読んでいない。
- 2本の主証明間に直接依存を確認していない。Universalのcompanion引用は背景、RCの本体積はHor07の帰結。未調査の全関係の不存在を意味しない。カタログ対照図を直接依存鎖へ改変しない。

## 第2段階の具体的な再開手順

1. 本書、`RELEASE_CHECKLIST.md`、`inventory.json`、最新Git状態を読む。036が触る共通部品・PDF管理との変更順を調整し、既存差分を消さない。原稿の読解を最初からやり直す必要はない。未確認の数学的範囲は本文に維持。
2. `src/data/site.mjs`へ052のinventoryを参照するmultiカタログと2論文を登録。各論文の `sourceCommit` は052の固定commit、順序とPDF pathはinventoryから取る。公式分野の該当カタログ列と掲載数も確認。汎用 `CatalogMarkdownOverview.astro` / `CatalogDraftArticle.astro` を使い、033専用表示や051の形式へ置換しない。
3. `overviewSectionIds: ['papers','diagram-sources','connections','sources']` を指定。共通4列表はpresentation.jsonから。分類UI・選択UIは追加不要。図1枚あり。本文中の `../<paper-id>/article.<lang>.md#...` は共通renderDraftがbase URL込みの公開ルートへ変換するため維持する。
4. 記事・案内の各日英 `.svg` / `.tex` を `public/diagrams/catalog-052/<paper-id>/` と `public/diagrams/catalog-052/overview/` へ配置。今のrender.pyはpublicコピーを行わない。TikZを変更した時だけ各専用render.pyで再生成。
5. 案内冒頭の「日英PDFは第2段階で生成予定」の段落を削除。既存の冊子生成系で **案内1章＋公式順2記事＝3章** の日英PDFを生成し、`public/pdf/catalog-052-ja.pdf` と `catalog-052-en.pdf`、`src/data/pdf-editions.json`へ反映。図は言語ごと8種。共通PDFリンクはmetadataから表示される。既存PDF管理への同時書込を避ける。
6. `npm run check:citations`、`npm test`、`npm run build`、`npm run check:links`、`npm run pdf:catalog -- --catalog 052`、再build、`npm run check:pdf`、再check:links。今回の環境ではnpmがPATHになく、本文引用は `node scripts/sync-citations.mjs` で実行した。Node実体は `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。PDF環境は `scripts/pdf/README.md` の既存系を使う。
7. 公開版として日英PC/375px、長い正式タイトル、表、数式、全図、図ポップアップ・原典引用、AI注意書き・案内キャラクター、右上言語切替とスクロール/アンカー、GitHub Pages base path、冊子PDFの全図とリンクを確認。034/Schnell/033との比較を実際の組込み後にも記録する。第1段階の静的previewはこの最終検査の代替ではない。
8. 第2段階の成果物と未確認事項・検査結果を記録して停止。**commit・push・公開は第3段階の指示まで行わない。**

## 再生成・第1段階の再検査

リポジトリルートから、NodeとTeXをPATHへ入れて実行する。

```sh
node scripts/sync-citations.mjs --check --text-only --catalog 052
python3 drafts/catalog-052/universal-cover-splitting/diagrams/render.py
python3 drafts/catalog-052/split-tangent-integrability/diagrams/render.py
python3 drafts/catalog-052/overview/diagrams/render.py
node coordination/catalog-052/build-preview.mjs
node coordination/catalog-052/check-preview.mjs
python3 coordination/catalog-052/check-local.py
```

本文/引用を変更したときは先に担当registryだけを `node scripts/sync-citations.mjs --registry .../citations.json` で同期する。公開用コピーを含む全体検査は、コピーを禁じた第1段階では実施していない。

## 公開状態

052のサイト登録・日英冊子PDF・commit・push・Actions確認・実サイト確認はすべて未実施。新しい公開URLを完成物として報告しない。
