# 独立内容点検 — Uniform exclusion of Landau–Siegel zeros

- 担当・モデル指定: `../MODEL_PROVENANCE.json` の `astra_review`。日付2026-10-23。
- 原典: `../inventory.json` 公式順3の固定PDF。本文pp.1–8、日英本文・citations・sources・diagrams/*.tikz、外部D80の出版社previewを照合。
- 判定: 下記RLS-1/2の修正後、日英本文と両TikZの影響範囲を原典に再照合済み。記載範囲と明示的保留を維持する条件で内容編集済みとして受領可能。

## 指摘と対応

| ID | 指摘 | 根拠 | 状態 |
|---|---|---|---|
| RLS-1 | 補間節/図の n∉G と Q(An)=1_(n=u) (n∈G) は全点を対象にすると誤り。有限支持S0={n∈E_N:v_n≠0}を定義し、S0\GとS0∩Gに限定する。日本語の『4P∩Z^4上でRが消える』もR(Am)=0とする。 | Lemma 3の証明 pp.3–5。Gは連続な面、Rは3変数多項式 | 日英本文・interpolation.tikzにS0と適切な範囲を追加、A像の記述を訂正済み。影響範囲を再確認。解消 |
| RLS-2 | 主証明step2のCor4/Lem6の評価には整数1≤H≤N、H固定でN十分大（Hのみ依存）を付記する。 | Corollary 4 p.5 / Lemma 6 p.6 | 日英本文・main.tikzに整数範囲と固定H/十分大Nを追加済み。影響範囲を再確認。解消 |

## 主張・証明接続・日英対応

- Theorem 1 (p.1)のexists absolute c>0 / every primitive nonprincipal real chi / every q>=3 / every real zero beta∈(0,1)を日英で照合。固定幅の複素半平面へ強めず、数値的なcや有効性を原典にない結論として追加していない。
- Lemma 3の独立節に、A全射、核の4座標のQ線形独立、N,t_jの整数条件と積条件、座標別次数の評価写像全射性が図前に提示されている。
- Lemma 2はD80 §14 (2)の上界から一つの実零点を残し、非負Euler係数、Mertens評価、除外素数を経て負の指標値の素数のlogarithmic massを得る。D80出版社previewの誌面p.89/PDF p.2を直接読解し、原始性・real s>1・非負零点和の記述と本稿p.3を比較した。D80本文の第2版と11/12稿の第3版を混同していない。
- d≠2、d≠1、biquadratic degree4、R=Z[a,b]、kernel coordinatesのQ独立性、補間からgreedy row selectionへの接続を照合。補間用の係数が評価行列式に入らないため、係数のfield dependenceをArchimedean評価に持ち込まない点を保持。
- Lemma 7のp>Hによるstrict weight decrease、K線形行操作と置換成分p^kRの区別、normが非零整数であること、異なる素数の可除性を合わせる手順を照合。
- Hadamardの8N sqrt(q)、normを4で割った両評価、log N=(3/4)log U、S2/S1の抑制、H→fixed gamma→q→∞の順と最後の1≤7/8の矛盾を照合。
- 定理の否定からdelta→0、L(1,chi)≠0と有限導手の有限性からq→∞、d=2固定例外の除去を対応させている。
- mainResults、proofTargets、statements、conclusionCoverage、readingListは主張と本文の説明先に対応。日英の全主要式と2図の論理は同じ。
- Bost/Fischler/Laurent/Philipponを背景とし、それらの一般定理の直接適用や他2稿からの直接入力としていない。原典の本文・参考文献と対応。

## 確認限界

全証明本文pp.2–8の論証を読んだが、すべての補助数値評価を独立再計算したものではない。D80のHadamard積証明全体、標準的なMertens/Chebyshev評価やL(1,chi)≠0の外部証明全体は再帰検証していない。原稿全体の数学的正しさの認定ではない。

## 確認版

修正・生成物確定後のhash manifestを機械保存済み。表示・図の重なりは本部のvalidation記録を参照する。

確認版のファイル同一性は `article-content-manifest.json` の当該paper IDを参照する。後続変更はこの版への点検を自動承継しない。
