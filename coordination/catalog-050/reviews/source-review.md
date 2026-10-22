# 原典の独立読解と直接入力照合

- 担当：astra_review。指定根拠・実行情報の限界は ../MODEL_PROVENANCE.json。
- 2026-10-22 11:37 JSTまでに公式本文§§2–6を通読。書誌・ファイル同一性は ../inventory.json を唯一の台帳とする。
- 記事照合前の独立読解記録。原典の正しさ全体の認定、外部結果の全証明検証ではない。

## 主張と接続

| 原典 | 独立照合した内容 |
|---|---|
| Theorem 1.1, p.2; §6, p.16 | 固定された代数的rank 2束G、全正整数mでE_m=f_m^*G⊗O(1,1)がample、あるm₀以降で滑らかな厳密Griffiths正値Hermitian計量が存在しない。m₀は非有効。半正値計量の不存在へ拡張しない。 |
| (2.1), Lemmas 2.1–2.2, pp.4–5 | A,Bの線形位数6、A⁻¹Bの位数8、射影位数3、ABは絶対値が異なる固有値、共通固有直線なし。3グラフの約化合併Dは(3,3)、6節点・三重点なし。PDF p.4を画像で照合しB左下は√2/3と確認。 |
| Proposition 2.3, p.6 | b=24が交点固有値を消す。節点で一致する繊維値からαを貼り合わせる。β=(α∨)⁻¹、Gの局所基底(1,h),(0,d)、2商完全列と双対関係ι₂α=ι₁。D上で双対2直線が一致する点を保持。 |
| Proposition 3.1, pp.7–8 | 各mを固定。K₁=(21m,−3m), K₂=(−3m,21m), K=(18m,18m)。交互の商列によりSymⁿVの濾過、追加の−D損失は1回。偶数n, n−1≥3mで全線因子が非負次数。H¹消滅を用いて切断を持ち上げ、W=SymⁿV⊗Pⁿ⁻¹を生成。Veronese→商射影束→基底のP埋込み→SegreでO_{P(E_m)}(n)がvery ample。 |
| Proposition 4.1, pp.9–12 | 任意の正rank正則Gに適用。無限個mの正値計量→双対のpsh二乗ノルム→重複度込みのm⁻² trace。P⁻¹の局所枠のm乗根を用い、遷移係数|g|²/ᵐが消失。全体最大値正規化と固定試験関数へのsubmeanで非消失。基底変数畳込みの減少極限と有限個の偏極値から全点でHermitian二次形式。a.e.極限をDへ制限していない。 |
| Lemma 5.1, p.13 | 2 ruling上の最大値原理、Γ_Iで2半ノルムを同定、Γ_A/Γ_Bで不変性。非消失はD外の2直線の生成と半正定値Cauchy–Schwarz、全体pshのsubmean。 |
| Lemma 5.2, pp.14–15 | uδ|w|²のLevi行列からlog uδがsubharmonic。零点を含むlog uのL¹を確認後にi∂∂̄を取る。標準計量との差は大域L¹関数で全質量2πb。零点の原子を除去しない。 |
| Lemma 5.3 / Proposition 5.4, p.16 | ABの半開環状領域の等質量から支持は最大2固定点。A,Bの位数3ゆえこの支持への置換は自明、共通固定点なしに矛盾。Prop4.1が供給する対象を正確に排除し、正値計量を許すmの集合が有限と帰結。 |

## 外部結果の記述と適用条件

- [Demailly, Complex Analytic and Differential Geometry](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)、2012-06-21版。Chapter I Theorem 5.4：誌面/PDF p.39。局所全空間上のpsh関数の減少列へ適用。有限性・非負性は対象原稿(4.7)が供給する。
- 同 Theorem 5.24：誌面/PDF p.45。閉pluripolar集合の外でpsh、集合近傍で局所有界上なら一意拡張。原稿p.10では有限冪写像の分岐集合の全空間逆像が解析集合で、traceの連続性が局所有界性を供給。
- [Stacks 01XD](https://stacks.math.columbia.edu/tag/01XD)：全有限交叉がアフィンの開被覆で準連接層のČechと層コホモロジーが一致。P¹の標準アフィン被覆によるH¹(O(c))計算の根拠であり、タグ自身が消滅式を述べるわけではない。
- [Stacks 0BED](https://stacks.math.columbia.edu/tag/0BED)：体上、準コンパクトかつアフィン対角の2スキームと準連接層にKünneth。P¹とO(c), O(t)は条件を満たし、c,t≥0で因子のH¹が消える。
- [Stacks 01OA](https://stacks.math.columbia.edu/tag/01OA)：射影束の商規約と普遍商。原稿のP(V)、P(W)、P(H)と整合。
- [Stacks 01N1](https://stacks.math.columbia.edu/tag/01N1)：次数1生成の次数付き環と高次数全射からProjの閉埋込みとO(n)引戻しの同型。原稿の大域生成評価商による射影束埋込み、および局所対称代数のVeronese構成に用いる。
- [Stacks 01WD](https://stacks.math.columbia.edu/tag/01WD)：Segre閉埋込みと引戻しO(1,1)。原稿p.8の最後のPの1因子を追加する箇所に対応。

Stacksは2026-10-22閲覧版。上記は原典の結果の記述・必要な仮定と使用箇所の照合であり、入力の証明の再帰検証ではない。Raufi等は原稿が必要な局所論証を再証明しており、今回の主要証明経路では背景とする執筆方針を確認した。

## 保存済みStacks章PDFの再照合

本部取得の `sources/stacks-{coherent,constructions,varieties}.pdf` と抽出テキストも照合。いずれもversion ed88ff78、compiled Jul 14, 2026の版として扱う。Tag 01XDはCohomology of Schemes p.3、0BEDはVarieties p.54、01N1はConstructions of Schemes p.22、01WDはp.29、01OAはpp.45–46。誌面とPDFのページは一致。01OAの商の記述はp.46へ続くため、著者へpp.45–46を案内した。オンライン結果との主張の相違は確認されなかった。
