# 作業記録

- カタログ／paper ID／担当：356 / gigli-characterization / A
- 指定モデル：gpt-6-astra、reasoning_effort high
- 制作セット版：1.4
- 初稿開始（JST）：2026-10-19 08:44:32
- 初稿締切（開始＋60分）：2026-10-19 09:44:32
- 初稿終了（JST）：2026-10-19 08:58:09
- 経過：13分37秒。下限を設けず、必要な初稿作業を終えて引渡し。
- 状態：初稿引渡し。サイト組込み・日英冊子PDF・公開は未実施。
- 制作根拠：固定commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a の公式原典を新規読解。既存Sol制作の数学原稿・図・解釈・点検結果を制作根拠にしていない。

## 成果物

- `article.ja.md` / `article.en.md`：主定理の両方向、元のglobal Test/TestV、exact H^n、unreduced RCD、κ、局所大域、次元の結論。
- `diagrams/`：全体図、Theorem 3.1、4.1、5.10、6.3の5図。日英TeX/SVG各5枚、TikZ原本、共通引用マクロ、生成スクリプト、29ファイルのhash台帳。
- `sources.json`：主張、読解箇所、外部原典の版・hash、使用箇所・適用仮定、未確認。
- `citations.json`：著者キー、結果番号・誌面/PDFページ、本文/TeXを一元生成。Deng25 / GT21は担当Bと統一。
- `conclusion-coverage.json`：主定理4結論および独立証明節4件の全結論と説明先。
- `external/`：外部原典の公開指定版PDFと抽出テキスト。AKPは取得したオンライン版のhashで固定。
- `qa/`：共有renderer・共通CSSを利用した日英プレビュー、1280px/375pxの画像、10図のPNG、検査記録。`qa.mjs`は再描画用。

## 図・引用の再生成

NodeのPATHがない環境では次を使用する。TeXは `/Library/TeX/texbin`。

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH
node scripts/sync-citations.mjs --registry drafts/catalog-356/gigli-characterization/citations.json
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-356/gigli-characterization/citations.json
python3 drafts/catalog-356/gigli-characterization/diagrams/render.py
```

これは `npm run citations` / `npm run check:citations -- --text-only` と同じ共有スクリプトを担当レジストリに限定して実行する。`render.py`は担当フォルダのみに生成し、publicへのコピーは行わない。公開コピーを要求する全検査は第2段階のサイト本部担当。

## 読解・照合範囲

- 主定理1.1（p.2）、定理3.1（p.9）、4.1（p.24）、5.10（pp.46–47）、6.3（pp.49–50）の仮定・量化・全結論を日英と照合。
- §3の短時間流・密度変分・4次輸送展開・平方誤差の局所除去・係数測度・局所強近似・大域cutoff。
- §4の終端密度を固定した熱因子、逆粘性項相殺、特異Bochner測度の一方向評価、作用等号、速度の重み付き強収束、終端重みに依存しない経路指定。
- §5の調和枠・容量/余次元1の例外集合回避、接錐連続性、経路の全時刻の枠、有限次元ODE、可算大域試験場、終端勾配、Jacobi評価。
- §6–7の有界距離変形、companion theoremの全仮定、全測地線の分布ODE、局所四点比較、大域化、Hausdorff次元。
- 直接外部入力の記述・適用：KKS23、Gig19、GRS16、GH15、JLZ16、DPG18、BPS21、Deng25、GT21、AKP24、OpenAI26b。各版・ページ・用途はsources/citationsに記録。

## 形式・表示・数式検査

- 指定registryのcitation syncとtext-only check成功。
- XeLaTeX + xeCJK + Harano Aji + dvisvgmで日英10図生成。Overfull box / Missing characterなし。
- 29ファイルmanifest hash一致、10 SVGのXML parse成功。
- 日英のMathJax描画エラー0。主張欄5、図5、共通アンカーの対応を確認。
- 最新 `qa/report.json`：1280pxでscrollWidth=1280、375pxでscrollWidth=375、日英ともページ横はみ出し0。
- 10図を日英で画像確認。矢印専用余白、引用・説明・箱の非重なりを確認。
- 034 Schnellの主要結果→引用案内→図→直後の説明→外部入力→原典案内の共通構造を参照し、共有renderer/CSSを使用。033 Orbifold Iitakaとの実画面並列比較は本部が担当。単独検査を独立点検とは呼ばない。
- 独立内容点検Rから、原典との主張・核心・図の一致、および局所修正指示を本部経由で受領。測度前のTeX空白、companionの分布区間、長い式のdisplay化、overviewのfull support、AKP版の未確認記述を反映。

## 未確認・残作業

- 全4次展開項、熱核定数の全導出、容量とSobolev代表同一視を含む全解析補題の独立再証明は未実施。基礎RCD引用先までの再帰的証明検証は対象外。本文にも限界を明記。
- AKPは2026-10-19取得版の結果番号・記述を照合したが、原稿が引用する2026-09-24スナップショットとのファイル同一性は未確認。本文・sourcesの両方に明記。
- サイト登録、公開用assetコピー、日英冊子PDF、公開リンク、全サイト検査、commit/pushは未実施。本部の第1段階内容編集・案内の後、再開指示によりサイト本部が第2段階で対応する。

## 本部への申し送り

- 主要カタログ内直接依存は `weak-hessian-geodesics` Theorem 1.1 p.2 → 本稿Theorem 6.1 / Lemma 6.2 / Theorem 6.3 pp.48–50。一般有限次元RCDの結果であり、本稿の非崩壊枠構成に依存しない。
- 読解順は特徴付けの全体像→弱Hessianの一般機構が有用。公式掲載順は変更しない。
- 主定理と証明節の公開アンカーは `theorem-1-1`, `theorem-3-1`, `theorem-4-1`, `theorem-5-10`, `theorem-6-3`, `proof-overview`, `proof-1`〜`proof-4`。
- 本部の最新共通CSSプレビューでも日英1280/375でoverflow=false、MathJaxエラー0、欠落アンカー0との連絡を受領。全6ページのlocal href/glyph参照12106件成功は本部側の記録を参照。
