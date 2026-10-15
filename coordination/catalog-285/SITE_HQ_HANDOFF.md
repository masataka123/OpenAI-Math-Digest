> 最新状態：第3段階の公開・反映確認を完了。[公開先・commit・検査結果](stage3/RELEASE.md)。以下は各段階の履歴。

> 更新：第2段階を完了。最新の検査・成果物は [第2段階の記録](stage2/FORMAT_AND_QA.md)、次の再開先は [第3段階への引継ぎ](stage2/HANDOFF_STAGE3.md)。以下の第1段階記述は当時の履歴として保持。

# カタログ285 第2段階への引継ぎ

## 作業範囲と再開位置

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。
- 作業ブランチ：`main`。開始時HEADは `git-head-before.txt`。本作業はcommit・push・ブランチ切替を行わない。
- 採用仕様：制作セット1.4と現行補足。正式カタログ285、Operator algebras（分野順13、285–303）。
- 公式固定版：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。名称・公式順・原稿版・PDFページ数・SHA-256は `inventory.json`。
- 現在の依頼：第1段階のみ。第2段階の日英サイト組込み・冊子PDF・公開前検査、および第3段階の公開は未依頼。
- PDF担当：次のサイト本部。案内1章＋公式順3論文の計4章を日英各1冊にする。日英冊子PDFは未生成。図の確認用中間PDFとは異なる。
- 冒頭PDF導線：第2段階で `public/pdf/catalog-285-{ja,en}.pdf` を生成してから、対応言語の案内冒頭へ配置する。
- 共有作業場には開始前から多数の変更あり。`git-status-before.txt` を参照し、285以外の差分を取り消さない。

## 成果物と担当

- 入口：`DELIVERABLES.md`。
- 日英記事：`drafts/catalog-285/{baum-connes-injectivity,kadison-kaplansky-projection,baum-connes-irrational-trace}/article.{ja,en}.md`。
- 各記事の引用・出典：同じディレクトリの `citations.json`、`sources.json`。
- 図：各記事の `diagrams/`。TikZ、自己完結TeX、SVG、引用マクロ、`render.py`、`citation-build.json`。
- 日英案内：`drafts/catalog-285/overview/`。公式順の `presentation.json` と `connections.json` を使う。
- 原典：`sources/`。公式3原稿とoverviewは固定commitで取得。外部入力は記事担当ごとの下位フォルダ。
- 指定モデル：執筆・内容点検は明示指定した `gpt-6-astra`。詳細は `model-assignments.json` と各 `status.md`。
- 既存同一記事：検索範囲内で該当なし。新規paper IDは台帳に記録。既存Solの原稿・図・解釈・点検記録は制作根拠として使っていない。
- 公開アンカー：新規記事のため既存285アンカーはない。`validation/structure.json` の実在IDとarticleGuidesの対応を保持する。

## 第1段階の点検結果

第1段階を完了。日英3記事・日英案内、8種16枚の証明図、引用・原典記録、執筆者以外のAstraによる3記事＋案内の原典照合を受領した。全指摘は修正・再照合済み。`CONTENT_REVIEW.md` と `review-*.md` に内容、`FORMAT_CHECKS.md` に指定見本との表示比較を記録。

- 公式版：3原稿とも2026-09-23。85／76／23頁、公式順・タイトル・分野を照合。既存同一記事なし。
- 初稿は順に14分50秒、15分11秒、15分20秒。初稿後の修正・点検・案内は別記録。
- 共通引用text-only：4レジストリ／14生成対象ファイル成功。図manifest全16枚一致。公開コピー検査は未実施（full検査は未配置のためENOENT、成功としない）。
- ローカル共通表示：日英8ページ×PC/375pxの16条件、見本12条件。69項目の検査成功。横はみ出し・数式エラー・欠落アンカー・画像不読込・例外なし。
- 総括図：方法適応の有向関係と異なる群のtrace障害の比較を混在させる必要性を検討し、4列表＋引用付き比較本文を採用。図省略理由と確認済みの方法関係を保持。個別記事の証明図は全てあり。

数学的未確認は各記事末尾と `CONTENT_REVIEW.md` にある。特に単射性稿の確率・Fourier/正則ノルム評価全計算、射影稿の全diagram/核/丸め誤差、無理数trace稿の全disk surgery/充填変換、外部結果の全証明は独立検証していない。これらを解消したとせず引き継ぐ。

サイト登録・日英冊子PDF・公開前の統合検査は未実施。「原稿完成」を「公開準備完了」と扱わない。

## 次段階で行う操作

1. 最新Git状態と本書、`RELEASE_CHECKLIST.md`、記事別 `status.md`、`review-*.md` を読み、完了した初稿を再制作せず再開する。
2. 数学的な保留は各記事の `sources.json` / `unresolved` と本文末尾に従う。追加の内容編集が必要ならAstraを明示指定し、初稿とは別枠で記録する。
3. サイト本部が `src/data/site.mjs` のOperator algebras分野・285・3 paper IDs・日英ルートを共通形式で登録する。公式順を保つ。台帳の `path` は `preprints/` を含むため、site.mjsのpaper.pathへ移す際は先頭 `preprints/` を除く。
4. `CatalogMarkdownOverview.astro` と共通 `renderCatalogInventory` を使用する。案内の `CATALOGINVENTORYTOKEN`、`presentation.json`、接続記録を対応させる。033専用構成を番号だけ置換しない。
5. 対象図のTeX/SVGを `public/diagrams/catalog-285/<paper-id>/` へコピーする。図の原本から生成をやり直す場合は各 `status.md` のコマンドを使う。
6. 登録後に引用検査・テスト・ビルド・内部リンク検査を行う。第1段階のtext-only検査はpublicコピー一致を保証しない。
7. 既存の `scripts/build-catalog-pdf.mjs` を使って285の日英冊子を作成し、`src/data/pdf-editions.json` と共に登録。新しい冊子生成系は作らない。
8. 本文・図・冊子の一致、章数4、実際の図数、数式、原典リンク、日英PC/375px、図拡大と引用、言語切替とアンカー維持を確認する。Schnell、Orbifold Iitaka、034との実画面比較を登録後にも実施し、冊子の全ページを画像で点検。
9. 必須検査が揃ったら第2段階の結果と公開再開手順を報告して停止する。commit・pushは第3段階の指示後。

## 第1段階の再検査コマンド

Node実体：`/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。リポジトリルートで実行する。

```sh
node scripts/sync-citations.mjs --check --catalog 285 --text-only
node coordination/catalog-285/build-preview.mjs
node coordination/catalog-285/check-preview.mjs
node coordination/catalog-285/validate-stage1.mjs
```

`build-preview.mjs` は共通Markdownレンダラ・CSSを読み、285専用の未登録HTMLだけを出力する。指定見本は既存 `dist/` のHTMLを読み、比較用表示へ変換する。既存 `dist/` はこの工程で再ビルドしない。`check-preview.mjs` はローカルHTMLをheadless Chromeで表示するため、サンドボックス外でのブラウザー起動が必要な場合がある。

これは内容・表示確認用のプレビューであり、サイト登録、図拡大UIの統合確認、公開ルート、冊子PDF、公開サイトの反映確認の代替ではない。

## 未実施の公開作業

サイト登録、publicコピー、日英冊子PDF、PDF管理ファイル更新、登録後の全体テスト／ビルド／リンク／PDF検査、commit、push、GitHub Actions、実サイト反映確認：すべて未実施・依頼範囲外。
