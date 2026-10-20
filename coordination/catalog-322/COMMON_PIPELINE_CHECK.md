# 共通処理の導入確認（2026-10-20）

- 現在commit：`b284533abcd0fad49f279bfd64482e91d185e80d`、ブランチmain。
- 直近履歴：b284533（引継ぎ標準化）、c4629d5（画面検査）、68199b6（順次実行・PDF再利用）。
- `package.json`：`catalog:prepare` は `node scripts/prepare-catalog.mjs`。
- `scripts/prepare-catalog.mjs`：引用→テスト→build→対象PDF照合→必要時PDF生成・再build・照合→内部リンク→日英PC/375pxと見本の画面検査。工程秒数、総秒数、失敗・再実行先、PDF生成/再利用を記録。
- `scripts/preparation-handoff.mjs`：実行別HANDOFF.md、report.json、Git前後、PDFページ/ハッシュ、画像一覧。PREPARATION_REVIEW.mdは初回のみ作成、上書きなし。
- `scripts/pdf/README.md`, `scripts/browser/README.md` の現行運用と一致。
- 今回は第1段階のためcatalog:prepare未実行。日英冊子PDFページ数、工程時間、生成/再利用、失敗・再実行は未計測でありゼロと扱わない。

## 第2段階で採取する値

1. 論文数、論理図数と日英資産数、日英PDFページ数。
2. 総実行時間・工程別時間（今回のreport.json）。
3. PDFを生成したか再利用したか。
4. 自動処理外のサイト登録・図配置・内容修正・目視等と各時間。
5. 失敗・再実行の有無と回ごとの実行ID。

読解・執筆、内容照合、機械処理、目視を分離する。内容量が異なるカタログとの単純比較から高速化を断定しない。第3段階の公開時にはActions所要時間と反映結果を追加する。

## 導入確認の検査結果

- 共通準備・引継ぎの既存ユニット検査：11/11成功（`validation/common-pipeline-tests.log`、約0.48秒）。実PDFや322の第2段階処理は実行していない。
- 通常シェルにnodeがないため初回の検査起動は失敗。アプリ同梱Nodeを直接指定して既存共通検査を再実行し成功した。引用検査も同じNodeで既存の `scripts/sync-citations.mjs --check --catalog 322 --text-only` を実行し成功。
- 現在の同梱runtimeのnode/binにはnodeのみがあり、npmは見つからなかった。PATH追加だけではnpmの不足は解決しない。第2段階担当は実際のnpm実行環境を用意・確認してから、指定どおり `npm run catalog:prepare -- --catalog 322` を実行する。代替専用処理やnpmの偽ラッパーは作成していない。
- この検査時間は記事読解・執筆・目視と分離し、第2段階の所要時間へ合算しない。
