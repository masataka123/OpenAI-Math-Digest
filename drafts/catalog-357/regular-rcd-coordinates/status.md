# 作業記録

- カタログ／paper ID／担当：357／regular-rcd-coordinates／writer357
- 指定モデル：`gpt-6-astra`、reasoning effort `high`。独立内容点検：reviewer357（同指定モデル、別担当）。
- 制作セット版：1.4
- 初稿開始（JST）：2026-10-19 08:45:54
- 初稿締切（開始＋60分）：2026-10-19 09:45:54
- 初稿終了（JST）：2026-10-19 08:57:16
- 経過：11分22秒。下限時間を設けず、必要な初稿成果物と確認がまとまった時点で終了。
- 状態：初稿引渡し。サイト組込み・冊子日英PDF・公開は未実施。
- 参照版：September 25, 2026、公式固定commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、43頁、SHA-256 `5500abd2391d238779793572caf1df5270a1ac488f6d88cc897d5cf51ac33093`。
- 制作方針：公式原典から新規読解。既存Sol原稿・図・解釈・点検結果を制作根拠として使用せず、共通描画基盤と共通TeX生成手順・配色のみ再利用。MIT帰属コメントを維持。

## 成果物

- `article.ja.md` / `article.en.md`：原典順のTheorem 1.1 / Corollary 1.2、主定理全体図、Propositions 4.10 / 5.4 / 5.6の主張→図→説明、系の図、外部入力、原典案内。
- `diagrams/`：5本のTikZ原本、日英10枚の自己完結TeX/SVG、共通引用定義、再生成script、SHA-256 manifest。
- `sources.json` / `citations.json` / `conclusion-coverage.json`：原典・外部原典・適用範囲、author-key引用、主要結果の11結論対応。
- `external/`：執筆担当が取得したAH18/JLZ16固定版PDFと抽出テキスト。他外部原典は独立担当の `coordination/catalog-357/reviews/sources/` に保存。
- `qa/`：日英10図のPNG目視証拠、共通renderer・MathJax・anchors・manifest検査の `verification.json`。
- `build-records.py`：引用・出典記録の再生成元（内容編集時は生成元も更新）。
- `verify.mjs` / `preview-diagrams.cjs`：今回の検査手順。

## 読解・照合範囲

主原典の主要主張、Lemmas 2.2–2.5、3.5–3.7、4.2、4.8–4.9、Propositions 4.10、5.4、5.6と主要接続を本文から読んだ。量化、全中心・全尺度、方向別二乗欠損、inverse-transpose更新、all-order jet帰納法、全点対、開像を追跡した。AH18 Corollary 4.12、JLZ16 Theorem 1.2 / Corollary 1.2は固定版原典で記述・適用を照合。DPG体積収束・rigidity・density・全測度性、Hatcher領域不変性、MN背景比較は独立担当の原典照合結果を記名して採用し、AH/JLZも独立担当が追加照合した。

`sources.json.checkedLocations`の全43項目は、原典抽出テキストの各PDF頁末の誌面番号1–43との一致確認を表す。全頁の証明検証を意味しない。外部文献は使用頁のみ対応を記録し、Hatcherは誌面172／PDF181の差を保持した。

## 実施した検査

1. 当該レジストリのみの引用同期と `--check --text-only`：成功。
2. XeLaTeX + xeCJK / Harano Aji + dvisvgm：全10図成功。Overfull box / missing character検査成功。
3. 共通 `renderDraft` による日英構造：双方 `results, diagram-sources, proof-overview, proof-1..4, dependencies, sources`。各5図、11結論アンカー、内部リンク切れ0。
4. 共通と同じMathJax TeX→SVG処理：日英merror 0。
5. 原本・引用定義・TeX/SVGのmanifest29ファイル：SHA-256一致。
6. 全10図をPNG描画して目視確認：箱・矢印・具体的使用内容・引用の重なりなし、日本語欠落なし。全体図の分岐と合流を確認。
7. 独立担当の指摘（section番号、anchors、英語dependencies見出し、図のunit-scale v、高階微分norm）を反映。本部指摘（距離表現、P_i定義、台帳表示名、AH18表示名中の星によるMarkdown破損）も修正。

公開用assetsの配置は担当外のため、publicコピーを要求する通常の `check:citations` 全検査は本部で実施する。033/034との実画面比較、日英PC/375pxのサイト表示、冊子日英PDFの画面確認は本部の受領・第2段階記録に分ける。上記の数値検査だけで公開形式統一済みとはしない。

## 再生成

この環境では通常PATHにnode/npmがないため、以下のnodeディレクトリをPATHへ追加する。

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
python3 drafts/catalog-357/regular-rcd-coordinates/build-records.py
node scripts/sync-citations.mjs --registry drafts/catalog-357/regular-rcd-coordinates/citations.json
python3 drafts/catalog-357/regular-rcd-coordinates/diagrams/render.py
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-357/regular-rcd-coordinates/citations.json
node drafts/catalog-357/regular-rcd-coordinates/verify.mjs
```

図画像の再撮影は `node drafts/catalog-357/regular-rcd-coordinates/preview-diagrams.cjs`。ブラウザー起動はsandbox外実行が必要だったが、自動承認後に完了。個人profileは使用せず、一時profileのheadless ChromeでSVGを描画した。

## 未確認と本部への申し送り

- 局所Poisson正則性、Hessian calculus、次元付きBochner、距離Laplacian比較について、使い方は本稿本文で読んだが、引用先の全個別結果・全仮定を外部原典と照合してはいない。
- §§3.1–3.2およびLemmas 4.4–4.6の全局所計算の独立再証明、外部証明の再帰的検証、専門家査読、形式検証は未実施。
- 異常がないことと全証明の正しさを認定することを区別する。本文は著者の論証紹介と確認範囲を明示した。
- サイト登録、公開assetコピー、冊子日英PDF、commit/pushは行っていない。PDF待ちと公開未実施を維持。
- 次の操作：本部の受領点検・overview/接続記録との照合→第1段階報告。サイト組込み・冊子PDFは現在の依頼範囲に従って別段階で扱う。

## 後続の編集

初稿終了後の変更はここへ別枠で追記し、初稿時間を延長しない。

- 2026-10-19 08:57:59–08:58:44 JST：記事初稿後の別枠で、同じwriter357 / gpt-6-astraが `../overview/` の短い日英案内・共通1行表・引用記録を新規制作。記事初稿は延長していない。詳細は `../overview/status.md`。

- 2026-10-19 09:03 JST、本部表示編集：MathJaxで未定義の平均積分マクロが本文に残っていたため、日英のR_i(y)定義を同値な「1/m(B) × 通常積分」で表示。原典の平均Gram行列の意味と図の定義は不変。初稿終了後の表示修正として記録。

## 第2段階（2026-10-19、本部）

サイト共通ルートへ登録し、20図assetを公開用へ同一コピー。日英冊子PDFを各20頁・案内と記事の2章・5図で生成。本文・図の内容は不変。overviewの未生成PDF予告を除き、表のLₙを同値のTeX表記へ変更した。独立差分点検は同じAstra/highのreviewer357。実サイト・紙面・リンクの結果、再生成手順と公開前停止状態は coordination/catalog-357/stage2/ と SITE_HQ_HANDOFF.md を参照。第1段階の記録は当時の履歴として保持する。

## 第3段階公開（2026-10-19T10:25:34.528491+09:00）

本部が受領本文・図・PDFを変更せずcommit `892cd7baed4cda2326fc67b0d372b2a4b8c499cc` で公開。Actions成功、日英公開ページ・図・PDFの一致と実ブラウザー操作を確認。coordination/catalog-357/stage3/PUBLICATION_REPORT.md参照。数学的未確認範囲は不変。
