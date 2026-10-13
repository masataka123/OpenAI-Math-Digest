# カタログ067 第2段階への引継ぎ

> 第3段階更新（2026-10-14）：日英サイト・図・PDFの公開確認まで完了。最新状態は [PUBLICATION.md](PUBLICATION.md)。以下は各段階終了時の履歴。

> 第1段階終了時の履歴。第2段階は完了しており、最新状態と公開への引継ぎはSTAGE2_HANDOFF.mdを参照。

第1段階「記事制作・内容点検・カタログ案内」まで完了。ユーザー指定によりここで停止する。サイト組込み・日英冊子PDF・commit・push・公開は未実施。単独制作なので点検は自己点検であり独立レビューではない。

## 保存場所と固定情報

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、作業ブランチ：`main`（切替なし）。開始時状態：git-status-before.txt、git-head-before.txt。並行制作の変更は保持。
- カタログ番号067、正式表記 **The Campana–Peternell conjecture in dimension six**。分野 **Algebraic and complex geometry**、公式第3分野、番号範囲032–069（欠番を補完しない）、overview PDF p.8。
- 公式固定commit：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。収録1本、公式順1、paper ID **campana-peternell-six**、2026-09-25版27ページ。inventory.jsonのURL・SHA256を使う。
- 既存記事の重複なし。034 SchnellのCampana–Peternell不等式とは区別する。
- 原稿：`drafts/catalog-067/campana-peternell-six/article.{ja,en}.md`。引用の正本：同所citations.json、sources.json。図：同所diagrams/（6種類×日英のTeX/SVG）。
- 案内：`drafts/catalog-067/overview/article.{ja,en}.md`、presentation.json、citations.json、connections.json。公式順表には `CATALOGINVENTORYTOKEN` を使い、共通rendererへ渡す。
- 点検：CONTENT_REVIEW.md、FORMAT_REVIEW.md、RELEASE_CHECKLIST.md、validation/。取得した原典PDFはsource/であり、公開用冊子ではない。

## 第2段階の再開手順

1. 現在のAGENTS.md、PROJECT_PLAN.md、production/README.mdと制作セットを再確認し、Git状態を確認する。036・052・046等の並行変更を取り消さず、mainを別ブランチへ切り替えない。必要な共通ファイルの統合はサイト本部が順番に行う。
2. inventory.jsonを使い、サイトの分野・067カタログ・paper ID・公式順・原典固定版を登録する。日英の案内・記事を接続し、単論文用の省略条件を適用する。既存記事の固定分類を流用しない。案内の共通表はrenderCatalogInventoryとpresentation.jsonを使う（preview.mjsに未登録状態での呼出し例）。
3. 図を `public/diagrams/catalog-067/campana-peternell-six/` へ組み込む。記事用リンクはこの構造を前提とする。本文・引用を変更したときは、先に引用同期、次に専用render.pyを実行し、公開コピーとcitation-buildの整合を確認する。一括図コマンドが067を含むと仮定しない。
4. 067の案内＋記事の2章、各言語6図として日英冊子PDFを生成する。`public/pdf/catalog-067-{ja,en}.pdf` の実ファイルとPDF版管理を同時に更新し、案内冒頭の予定コメントを実リンクへ置換する。
5. 下記の完全検査を実施し、日英PC/375px、図拡大・引用・アンカー・言語切替、AI注意書き、キャラクター、034共通表・Schnell・033 Orbifold Iitakaとの最終表示比較を記録する。日英PDFは表紙・目次・本文・全新規図・長い数式・改ページ・リンクを画像で点検する。
6. 未確認の数学的範囲を維持し、第2段階の完了範囲と残作業を報告して停止する。公開は新たなユーザー指示がある場合に第3段階として扱う。

```sh
node scripts/sync-citations.mjs --catalog 067
python3 drafts/catalog-067/campana-peternell-six/diagrams/render.py
npm run check:citations
npm test
npm run build
npm run check:links
npm run pdf:catalog -- --catalog 067
npm run build
npm run check:pdf
npm run check:links
```

この環境ではnodeは既定PATHにない。必要なら `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin` と `/Library/TeX/texbin` をPATHの先頭へ加える。PDF環境はscripts/pdf/README.mdに従う。

## 第1段階だけを再確認する場合

```sh
node scripts/sync-citations.mjs --check --catalog 067 --text-only
python3 coordination/catalog-067/check-stage1.py
node coordination/catalog-067/preview.mjs --render-only
# 隔離プレビューを必要とする時だけ起動（ポート43867）
node coordination/catalog-067/preview.mjs
# 別プロセスで
node coordination/catalog-067/visual-check.mjs
node coordination/catalog-067/check-interactions.mjs
```

プレビューは既存distの外枠・見本ページとローカルMathJaxを読む。distを更新しない。ブラウザー実行・ローカルサーバー起動は環境によって許可が必要。プレビューの既存外枠ナビゲーションを完成サイトの導線と扱わない。

付属計算証明書は `/tmp/catalog-067-cert` のPython環境で実行した。消えている場合は専用環境を作り、原典READMEのPython 3.12.13とSymPy 1.14.0・NumPy 2.3.5を用意できる。今回のPython 3.13.6での成功記録はvalidation/に保存済み。再実行の必要がなければ繰り返さない。

## 数学上の残る確認範囲

Griffithsの相対Hodge–de Rham同定の原典、GAGAの原典、Fanoの有理連結性等の標準入力の原証明は未照合。Fischer–GrauertはPoczobutでの再掲、Alekseevskii–Perelomovの正KE計量はDemaillyでの再掲を照合し、元の論文の証明までは確認していない。036・052等への追加の包含・一般化関係は未調査。これらは日英本文とconnections.jsonにも反映している。入力の記述・適用の照合と、その入力定理自体の証明検証を区別する。

## 変更ファイル

この作業による作成・変更は `drafts/catalog-067/` と `coordination/catalog-067/` のみ。全ファイル一覧とハッシュはFILES.tsv。共通部品・サイト登録・他カタログ・PDF管理ファイルを変更していない。共有ワークスペースの他担当の差分はこの一覧に含めない。
