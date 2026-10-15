# irrational-trace 記事の原典照合レビュー

- レビュアー：gpt-6-astra（明示指定、執筆者とは別担当injectivity）。
- 開始：2026-10-15 21:40:24 JST。一次照合終了：21:44:30 JST。injectivity初稿作業とは別工程。
- 状態：照合完了。R1–R3はすべて修正・再確認済み。
- 対象：drafts/catalog-285/baum-connes-irrational-trace/の日英記事・引用・図と公式固定原典。
- 固定原典：commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a、2026-09-23版23頁。
- 範囲：主要主張、各結論への接続、直接外部入力、日英対応。全証明の独立検証ではない。既存Sol内容は根拠として使用していない。

## 原典照合の結果

| 対象 | 読んだ原典 | 照合結果 |
| --- | --- | --- |
| Theorem 1.1の全結論・定義域値域 | pp.1–4, 21–22 | 有限生成の離散群、通常の被約群C*代数内の実際の射影、無理数canonical trace、proper-actionの係数なしassembly像外が一致。torsion-freeは仮定しない。係数Cの自明作用とG-compact支持の極限を明記している。 |
| 同時交差制御と入力選択 | Proposition 2.3, Lemma 2.4 pp.7–9; Proposition 3.1 pp.9–10 | 一様双曲性定数を得てからlambdaを選ぶ順序、有限ラベル・等長埋込み・tree ballの役割が一致。R1修正済み、R3の条件補記を要請。 |
| codeと正確な局所分布 | Lemmas 4.1–4.4 pp.12–15 | primal/dual distanceを区別。W0の局所交わりの等式を最遠コピー除去で証明し、双対の一様Haar周辺分布からp^{-ki}を得る接続が一致。有限生成の根拠も提示。 |
| 大域cycle-rank estimate | Lemma 3.2 p.11, Lemmas 5.2–5.3 pp.16–19 | cycle座標は辺の制限ではない点、tree ball外の互いに素な頂点へrankを割り当てる点、局所deficitをそのまま加算できない点が記事で保持される。 |
| Proposition 5.5の全結論 | Lemma 5.4 pp.20–21, Proposition 5.5 p.21, Section 5.1 pp.15–16 | 残余成分のpotential込み下界c²/(8d)、全評価表現に一様なgap、faithful direct sum、連続functional calculus、valid copyの定数核と対角1/niまで対応。von Neumann射影だけで止めていない。 |
| trace計算と無理性 | Proposition 6.1 pp.21–22 | 単位元を含むコピー数niと対角1/niが相殺し、局所確率を加算する。独立性は不要。p>2、kiの無限個の1と発散するgapから非周期性を得る。 |
| integral/rational surjectivity failure | Theorem 1.2 p.2, proof of Theorem 1.1 p.22 | 局所化trace像ΛG⊂Qからintegral像の有理traceを得る。全射性や局所化単射性を仮定しない。有限Q線形和でもtraceは有理で、rationalized assemblyにも像外となる。 |
| 日英の対応 | 全文とmain/spectral TikZ | 主張、定義域値域、主要式、2証明節、入力4本、未確認範囲が対応する。inline数式の分割・語の置き方の差はあるが内容差は認めなかった。 |

## 直接外部入力の確認

- LU02：author-hosted 1–30頁版、Theorem 0.3 p.2、Section 4 p.23、Section 5 p.25。局所化assemblyをtraceで測った像の記述と、proper equivariant K-homologyの定義域を直接読んだ。最終誌面123–152と混同していない。
- Osa20：仮定の誌面pp.163–164（PDF5–6）、Theorem 2.7誌面p.173（PDF15）、Lemma 3.1/Theorem 3.2誌面p.176（PDF18）。有界次数、girth増大、diameter/girth有界の条件と、有限ラベル・等長埋込みへの適用を照合。
- BH99：III.H.2.1誌面p.414（PDF437）、III.H.2.9誌面p.419（PDF442）。coarse fillingの定義と一様線形評価から双曲性への入力を照合。本文独自のdisk-filling変換そのものは全証明未監査。
- LPS88：著者ホストscanのPDF7/9を画像で読み、Theorem 3.4のgirth/位数とTheorem 4.1のRamanujan性を確認。誌面267/269の対応にはR2が残る。
- 外部入力の証明自体、再帰的引用、Davis–Lück比較の全証明は今回の範囲外。

## 修正事項

### R1 — 同距離のコピーを含む条件（修正済み）

原典Lemma 2.4 p.8はd(c_Q,R)≤d(c_P,R)。初回の日本語本文とmain図のcloserだけでは等距離を落とす。Lemma 5.3の消去ではtiesを任意順に処理するので重要。21:44時点の日本語・英語本文とmain.tikzで同距離を含む表現に更新されたことを確認した。図の再生成・実画面は執筆担当と本部で確認する。

### R2 — LPS誌面ページ対応（対応待ち）

sources.json checkedLocationsと引用表示は誌面267/269・PDF7/9。末尾には、scanのfolioが裁ち落とされ、全17ページと先頭誌面261から対応した旨がある。制作CITATIONS.mdは「未確認の対応をオフセットの推測だけで埋めない」とする。本文に推定方法を開示したことは確認したが、確認済み対応の根拠としては不足する。folio付き別原本または別の直接証拠で確認するか、未確認状態を表示・記録に反映すること。

### R3 — Lemma 2.4の根の条件（補記要請）

原典はA=c_P≠Rを仮定する。記事の「任意の根R」「For a root R」はこの条件を省略している。c_P≠Rを日英に補えば原典の量化に一致する。実際の適用では最遠の別コピーQ、またはgroup-vertexの根を使うのでこの条件は満たされ、主要結論への障害は見つけていない。

## カタログ間接続

原典の導入、構成、最終証明、参考文献を読んだ範囲では他2本を直接の入力として使用する記述は見つからない。expanderや射影を共有するだけで依存矢印を作らない記事の説明に同意する。これは全域の論理的独立性の証明ではない。

## 確認の限界

本文が示す帰着・計算・入力の対応を点検した。Lemma 2.2の全singular plane-diagram surgery、Proposition 2.3の全disk-filling conversion、外部入力の全証明、反例全体の独立証明検証は行っていない。記事はその限界を日英で明記している。今回の範囲で、上記以外の主要主張や証明接続の重大な不一致は見つけていない。サイト登録・冊子PDF・公開検査は本レビューの対象外。

## 一次照合終了時点のファイルSHA-256

```json
{
  "drafts/catalog-285/baum-connes-irrational-trace/article.ja.md": "3ba58a97e673fd2a17de814bcfe855e44ed3b2717f6b1ab51ef8ab7897f271a4",
  "drafts/catalog-285/baum-connes-irrational-trace/article.en.md": "a98334f8723dcb73c799bd2ea57db480c5978613dc921376ecc102adf783efa6",
  "drafts/catalog-285/baum-connes-irrational-trace/citations.json": "6b4fb6012f10b87c1402389514f68a33dd0bd0b6dac2c39da92dac0f600f112c",
  "drafts/catalog-285/baum-connes-irrational-trace/sources.json": "e25f9e196b0a51f18f90996c71bbe7bdacd56b3b026a0f926a74294c397d39e5",
  "drafts/catalog-285/baum-connes-irrational-trace/diagrams/main.tikz": "d2f398160c6f222f05137c8fda1c5bc395835aa7bef7c9d401e53b4ddf275212",
  "drafts/catalog-285/baum-connes-irrational-trace/diagrams/spectral.tikz": "c9dcb8382cde3fdfb2a504ee8a3f324a078e593a7ec9874af7bfcf56b52b64bf"
}
```

## 修正後の再確認・終了

- 2026-10-15 21:48 JST頃、同じ別担当gpt-6-astraが再確認。
- R2解消：Illinois-hosted刊行版 `https://courses.grainger.illinois.edu/cs598sgt/sp2015/LPS.pdf`、保存名 `lps-1988-full.pdf` のSHA-256は `073b84bd275370a55aff11c71a16aea203f8637e39776c5ac3f8f33aabdbd384`。sources.jsonとの一致を検査。レビュアー自身がPDF7・9を新規レンダリングし、Theorem 3.4と誌面267、Theorem 4.1と誌面269を各々同一画像で目視した。sources/citations/日英のURL・誌面/PDF対応・読解範囲の差替えを確認した。
- R3解消：日英本文で `c_P\ne R` と同距離を含む不等式の条件を確認。
- R1は前節の通り修正確認済み。図の生成完了・表示検査は執筆担当／本部で管理する。
- 本レビューの修正要請はすべて解消。確認範囲を超えた全証明の正しさを認定するものではない。
