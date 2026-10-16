# カタログ074 第2段階への引継ぎ

- 作業場所：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、作業ブランチ`main`。開始HEADは`git-head-start.txt`、他担当を含む開始差分は`git-status-start.txt`。
- 制作セット：1.4＋現行補足。今回の依頼は第1段階まで。commit・push・公開の許可は含まれない。
- 公式番号・名称：074 **Kakeya in three and four dimensions**、分野 **Real and complex analysis**（071–086）。固定commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、overview PDF p.9。
- 構成：multi、公式順2本。共通4列表と総括図1組で共有入力の分岐を示す。分類カード・選択UIは重複するため省略。
- 台帳：`inventory.json`。原典：`sources/`。各ファイルの頁数・ハッシュ・URL・原稿版を台帳に記録。
- 原稿：`drafts/catalog-074/kakeya-maximal-three/`、`drafts/catalog-074/kakeya-hausdorff-four/`。案内：`drafts/catalog-074/overview/`。各日英Markdown、sources.json、citations.json、diagrams、status.md。
- 担当設定：`model-provenance.json`。執筆・独立内容点検の全サブエージェントを`gpt-6-astra`かつ`high`で明示起動。時刻は各status。
- 新規記事のため公開済み旧アンカーなし。生成HTMLにあるstatements・conclusionCoverageとproof節のアンカーを維持する。
- 未確認の数学：原稿全体・外部入力の全証明は未検証。各記事末尾とsources.unresolved、`reviews/SOURCE_REVIEW.md`を確認。4Dの[24,Lemma2.3]と現3D版Lemma3.3の引用番号不整合は、条件・結論の対応を照合した上で明記し、番号変更の版履歴は未確認。

## 第2段階の再開手順

1. この文書、`RELEASE_CHECKLIST.md`、`reviews/CONTENT_REVIEW.md`、`FORMAT_REVIEW.md`、各記事status、最新Git状態を読む。読解・執筆を最初から繰り返さず、未確認事項と最新差分を確認する。他担当の差分を取り消さず、共有ブランチを切り替えない。
2. 台帳の公式順とpaper IDsで`src/data/site.mjs`等へ登録し、日英カタログ・記事・分野からの導線を共通部品で組み込む。overviewのsection IDsは`papers, diagram-sources, connections, sources`。記事はrenderDraftによる共通アンカーを使用する。
3. 各diagramsの対応SVG/TeXを`public/diagrams/catalog-074/<paper-id>/`へコピーする。引用を修正する場合は該当registryのみ同期して図を再生成する。
4. AI注意書き・原典確認案内・右上の言語切替・既存の白緑案内役を共通部品で保持する。第1段階の`preview/`は検査用で、サイト登録の代用ではない。
5. **日英冊子PDFは必須・未生成。** サイト本部が案内1章＋記事2章の全3章で生成し、PDF管理情報を更新する。実ファイルとともにカタログ冒頭へ対応言語のPDFリンクを置く。対象は本サイトの解説で、原論文合本ではない。
6. 完全な`npm run check:citations`、`npm test`、サイトビルド、内部リンク、日英PC/375px、図拡大・原典リンク・言語切替・anchorを検査する。034/Schnell/033 Orbifold Iitakaとの比較を実サイトで更新する。
7. 日英PDFの全図・主張・文献案内・目次・内部外部リンク・改ページを点検し、`check:pdf`と整合を確認する。第2段階の結果と再開情報を報告して停止する。公開は別途第3段階の依頼後。

## コマンドと環境

この実行環境ではnpmが標準PATHになかった。Node実体は`/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`、TeXは`/Library/TeX/texbin`。通常のnpm環境でも同じscriptsを利用可能。

```sh
node scripts/sync-citations.mjs --check --text-only --catalog 074
python3 drafts/catalog-074/overview/diagrams/render.py
python3 drafts/catalog-074/kakeya-maximal-three/diagrams/render.py
python3 drafts/catalog-074/kakeya-hausdorff-four/diagrams/render.py
node coordination/catalog-074/validate-stage1.mjs
node coordination/catalog-074/build-preview.mjs
```

第1段階では各registryの本文・TeX同期と図ハッシュを確認し、publicコピーを必要とする完全な公開検査は行わない。

## 公開状態

日英PDF：未生成、担当は第2段階のサイト本部。サイト登録・publicコピー・公開commit・push・Actions・公開URL反映：未実施。第1段階の成果物を「公開準備完了」と扱わない。

## 第1段階の最終状態

日英2記事＋日英案内を内容編集済みとして受領。独立点検7指摘は反映済み。図は3D4組、4D2組、案内1組、計14言語別TeX/SVG。原稿と引用・原典情報は各記事フォルダ、表示証拠と点検ログは本coordinationフォルダ。第2段階でこの構成を維持する。

本文／TeX同期、図と原典のhash、日英表示数式17＋11組、既存共通テスト19件、6ページの必要アンカー、12画面条件、全14図の目視を実施。詳細と限界はFORMAT_REVIEW.md。日英冊子PDF未生成のため、公開準備完了とは判定していない。
