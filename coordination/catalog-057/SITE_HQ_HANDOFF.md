# カタログ057のサイト組込み引継ぎ

2026-10-12更新。**第3段階の公開・反映確認まで本チャットが実施し完了。** [PUBLICATION.md](PUBLICATION.md)が最新報告。公開commit `0cc452a`、Actions・公開リソース・実画面の照合が成功。他チャットへの送信も未実施。以下の原稿・組込み手順・第1段階検査説明は2026-10-11の引継ぎ履歴として保持する。

## Git・原典・依頼範囲

- 採用仕様：制作セット1.4、主要結果の全結論対応と総括図採否の補足を含む。
- 作業基点：main、HEAD `6c2b85685c11ada504b1d71f84721d7857a0a8fe`。今回の成果は未コミットの `drafts/catalog-057/` と `coordination/catalog-057/`。Git対象外tmpに原典と検査用キャッシュ。
- 既存変更：AGENTS、PROJECT_PLAN、productionの9文書、scripts/citations.test.mjs、scripts/lib/citations.mjs、および034中断記録2件を保持。全2048追跡ファイルのハッシュ不変。引継ぎ後の最新Git状態を再確認し、他担当変更を一括stage／破棄しない。
- 現在の依頼：第1段階（記事制作・内容点検・カタログ案内）まで。公開の実行依頼は本段階にはない。commit／push／Actions／公開URL確認は未実施。
- 正式名、公式分野、固定commit・3原稿の版・SHA-256・URLは[唯一の台帳](inventory.json)。公式順3本／83原典頁、既存記事の再利用なし。カタログのPDFは原典を連結するものでなく、日英解説を各4章に組む。

## 渡す成果物

`drafts/catalog-057/` 下の以下4フォルダを使用する。

| 順 | フォルダ | 本文／図 |
|---|---|---|
| 案内 | overview | 日英article、presentation、connections、sources、citations、sync-guide.mjs、総括図1組 |
| 1 | special-kahler-abelianity | 日英article、sources、citations、status、証明図7組 |
| 2 | two-step-monodromy | 同上、証明図5組 |
| 3 | half-weight-fourfold-abelianity | 同上、証明図3組 |

16論理図、日英32 SVG＋32自己完結TeX。各diagramsにtikz原本、preamble、引用定義、render.py、citation-build.jsonを含む。現状のファイル名と本文・結論アンカーを保持する。公式一覧の論文タイトルは台帳から、短い表示名と説明はoverview/presentation.jsonから供給する。articleLinksの現行アンカーはローカル検査済み。既存記事のアンカーは変更しない。

## 組込み手順（次段階）

1. `src/data/site.mjs` 等の既存カタログ登録方式に057、公式分野、3論文を登録する。公式順を守り、各言語の案内と3記事へ到達できるようにする。台帳は制作記録であり、そのままサイトAPIとして読ませない。
2. 共通rendererで本文を表示し、`CATALOGINVENTORYTOKEN` を既存 `renderCatalogInventory` の4列表で展開する。034固有の分類・固定データは使わない。総括図と接続表は案内本文にあり、追加の分類カード／選択UIは不要。章見出し重複がないか確認する。
3. SVG／TeXを既存規約の `public/diagrams/catalog-057/{paperId}/`（overviewも同様）へコピーする。各rendererの公開パスと一致させる。原稿やSVG内のリンクを手作業で別表記にしない。図拡大・TeXダウンロード・引用リンク・言語切替のアンカー保持を確認する。
4. ヘッダー、白緑キャラクター、AI生成注意書き、原典確認の案内、共通本文16px・補足14pxを既存共通表示で供給する。今回の一時プレビューは完全なサイト外枠や操作確認を含まないため、統合後に日英PC／375pxで再点検する。
5. `scripts/pdf/README.md`に従い、日英とも **案内1章＋記事3章＝4章** の冊子を生成する。論理図16／各言語16図。overview冒頭の「第2段階で生成予定」の編集注記を削除し、共通コンポーネントから実在する対応言語PDFリンクを供給する。
6. `public/pdf/catalog-057-{ja,en}.pdf` と `src/data/pdf-editions.json` を同時更新し、再ビルドする。全図・長い数式・主張・引用・改ページ・目次と原典リンクを日英紙面画像で点検する。両言語PDFは必須で、未生成のまま公開準備完了としない。

## 引用と再生成

レジストリは4つとも `citationStyle: "author-key"`。自己引用は無略号、外部引用は著者キー、図前に正式書誌・用途・版を定義済み。生成コードは共通の `scripts/sync-citations.mjs` を使う。overviewの文献案内のみ、定理在庫を持たない案内用として同じレジストリから `sync-guide.mjs` で生成する。

環境：Node、Python3、XeLaTeX、Harano Aji、dvisvgm。ローカルNodeは `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin`、TeXは `/Library/TeX/texbin` をPATHへ追加する。各記事のstatus.mdに再生成コマンドがある。本文引用を同期後、必要なdiagrams/render.pyを実行する。引用やpreambleを変えたら当該記事の全図を再生成。公開コピーも更新する。

```sh
node drafts/catalog-057/overview/sync-guide.mjs --check
node scripts/sync-citations.mjs --check --text-only --catalog 057
```

第1段階では上記相当の各registry検査と96生成hashを確認した。公開コピーを要求する完全な `npm run check:citations` は次段階。続いてRELEASE_CHECKLISTにある `npm test`、build、check:links、pdf:catalog、再build、check:pdf、check:linksを実行する。今回それらが通過済みとは扱わない。

## 内容受領と残る数学的未確認

[STAGE1_REPORT](STAGE1_REPORT.md)とREVIEW4件を参照。主張の仮定・量化・全結論と説明先、直接入力の記述・適用は点検済みで、指摘は反映した。総括図は第1論文の任意次元の群全体の定理を、第3論文で構成した特殊射影8次元多様体へ適用する合流を示す。第2論文への第1論文の引用は背景で、直接入力の矢印はない。

第1論文の全解析評価・全モデル比較・Oka–Grauert別原典、第2論文の外部全証明・Hain構成全体、第3論文Appendix A・Hironaka原典などは未確認。本文とsourcesに明記してあり、組込み時に削らない。外部定理の全証明や依存文献の再帰検証は今回の標準範囲外。全証明の独立検証・査読済みという表示はしない。

## 状態と担当

| 区切り | 担当 | 状態 |
|---|---|---|
| 原稿引渡し・内容編集・日英案内 | 記事A／B／カタログ本部 | 第1段階完了 |
| 登録・共通表示・統合検査 | 本チャットがサイト本部を兼任 | 第2段階完了、2026-10-12 |
| 日英PDF・版情報・紙面点検 | 本チャットがサイト本部を兼任 | 日本語47頁・英語52頁、各4章16図。検査完了 |
| commit／push・Actions・公開URL照合 | 本チャット（サイト本部） | 第3段階完了、PUBLICATION.md参照 |

最終ゲートは[RELEASE_CHECKLIST](RELEASE_CHECKLIST.md)。ここで区切り、後続段階の依頼に沿って進める。

## 第2段階時点の次操作（第3段階で実施済み）

057成果物と共通変更を選択して差分確認する。他担当の開始時変更を一括stageしない。共通ファイルの変更範囲はSTAGE2_REPORT参照。公開実行の依頼後にcommit／push、Actions build/deploy、公開URLの8ページ・32SVG／32TeX・日英PDFの版を確認する。ローカル検査を公開確認の代わりにしない。数学的な未確認範囲は第1段階から変更していない。
