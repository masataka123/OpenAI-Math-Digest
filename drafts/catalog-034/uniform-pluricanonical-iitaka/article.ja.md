# Uniform Pluricanonical Iitaka Fibrations

**多重標準飯高写像と normal lc 指数の同時帰納法**

OpenAI、2026年10月3日版、44ページ。公式カタログ034内の掲載順10。参照commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`。[原典][U]の主張を紹介するAI生成の一次概説であり、証明全体の正しさを認定するものではない。重要な主張は原典で確認されたい。

本稿は、次元だけで決まる一つの多重標準次数が、非負の小平次元を持つすべての滑らかな射影多様体の飯高写像を定めると主張する。証明は飯高写像の有効性を直接帰納するだけでは閉じず、normal lc log Calabi–Yau 対の**実際の線形同値類を殺す共通指数**も同時に示す。核心は、退化の分岐次数そのものを抑える代わりに体積形式への指標を抑えることと、高指数の標準被覆上の局所正値性を対角積のジェット評価と衝突させることにある。

## 主要結果（原典順）

### Theorem 1.1 — Uniform pluricanonical degree（p. 2）

各整数 $d\ge1$ に対し整数 $m(d)>0$ が存在し、任意の標数0の代数閉体上の、滑らか・整・射影的な $d$ 次元多様体 $X$ で $\kappa(X)\ge0$ を満たすものについて、完全線形系 $|m(d)K_X|$ が飯高写像を定める。

ここで結論は、系が非空で、その切断比の体が、全次数の多重標準切断比で定義される飯高体 $K(K_X)\subset k(X)$ に**等しい**という意味である。像の次元が $\kappa(X)$ に等しいだけでは足りない。$\kappa=0$ では同次数の非消滅、$\kappa=d$ では双有理性を含む。正の整数倍の次数も使えるが、実用的な $m(d)$ の数値は与えていない。[Theorem 1.1、§9、pp. 2, 40–42][U]

### Theorem 1.2 — Uniform log canonical index（p. 2）

$d\ge0$、有理 DCC 集合 $\Phi\subset[0,1]\cap\mathbb Q$ を固定する。標数0の代数閉体上の normal integral projective lc 対 $(X,B)$ で、$\dim X=d$、$B\ge0$、係数が $\Phi$ に属し、$K_X+B$ が $\mathbb Q$-Cartier かつ $K_X+B\sim_{\mathbb Q}0$ であるものすべてに対し、共通整数 $a(d,\Phi)>0$ が存在して
$$a(d,\Phi)(K_X+B)\sim0$$
となる。この倍数は整係数の主因子である。数値的自明性や Cartier 指数だけの主張ではなく、nonnormal slc 対は対象に含まない。[Theorem 1.2、§§2, 9.1、pp. 2, 4–5, 41–42][U]

## 証明図1 — 低次元の指数から moduli 分母へ

![低次元のnormal lc指数と退化指標によるmoduli分母の制御](diagrams/denominator.ja.svg)

図の出発点 $L_j$ は Theorem 1.2 の次元 $j$ の主張であり、ここでは $j<n$ だけを使う。境界を持たない klt $n$-fold の contraction $f:X\to Z$（$\dim Z>0$、$K_X$ は底から $\mathbb Q$-線形に引き戻される）に対し、幾何学的生成ファイバーの指数を $p_0$ で殺す。この自明化を元の生成体へ降ろし、
$$K_X+\frac1{p_0}\operatorname{div}(\psi)=f^*D_Z,\qquad D_Z=K_Z+B_Z+M_Z$$
という**実際の有理因子の等式**を作る。$B_Z$ の係数の DCC 性と $\mathbf M$ の b-nef 性は定性的な標準束公式から得られる。残る課題は Cartier 分母の一様化である。[Proposition 4.1、pp. 11–12][U]

底の素因子を横断する曲線へ切り、生成ファイバーの Beauville–Bogomolov 因子を半安定退化させる。体積形式の weight を0に規格化すると、分岐次数 $\ell$ と退化指標 $\lambda_i$ は式(4.7)で結ばれる。各 $\lambda_i$ を殺す共通 $N$ があれば $p=p_0 n!N$ が moduli 係数の分母を消す。$\ell$ 自体を一様に抑える必要はない。[Lemma 4.2、式(4.5)–(4.7)、pp. 13–14][U]

Lemma 4.3 は、LA を用いて退化を相対的に半豊富な dlt モデルへ運び、特殊ファイバーの正規成分への留数に $L_j$ を適用する。成分を保存する有界な冪は構造層コホモロジーの trace と Lefschetz の議論で選ぶ。したがって、この段階で同次元 $L_n$ や slc 指数定理を入力してはいない。等変半安定化・coherent Lefschetz の細部は今回独立検証していない。[Lemma 4.3、§4.4、pp. 14–17][U]

## 証明図2 — 高指数列を排除し、normal lc へ戻す

![標準被覆の局所正値性と対角積から高指数列を排除する](diagrams/index.ja.svg)

$K_n$ を零境界 klt の指数命題とする。指数が非有界なら、Proposition 5.1 は terminal $V$ と指数被覆 $\pi:Y\to V$、指数 $r\to\infty$ に帰着する。$\operatorname{Bir}(V)$ は可算で、$Y$ の中間的な有限群同変有理ファイブレーションの滑らかな幾何学的生成ファイバーは一般型となる。低次元の飯高写像命題 $I_j$、小体積の Lemma 6.4、[U4] の鎖・追跡補題から、$1\le L^n\le2$ に規格化した偏極に対して
$$\gamma(L;V)\le C_n,\qquad \varepsilon(L)\ge c_n,\qquad \varepsilon(\pi^*L)\ge c_nr^{1/n}$$
を得る。$\gamma$ は十分可除な次数の全切断についての正規化消滅次数の上限であり、周囲から制限された切断だけを扱う量ではない。[Propositions 5.1, 6.1、Lemmas 6.2–6.4、pp. 20, 24–30][U]

一方 $Z_t=Y^t/\mu_{r,\mathrm{diag}}$、$P_t=\theta_t^*(L^{\boxplus t})$ では $\varepsilon(P_t)\le C t^2$。§7 は正標数へ移した Frobenius 対角の評価写像の行列式について、対角での階数低下による消滅次数の下界と、$V$ 上の scalar order に由来する上界を比較する。§8 では低次数曲線から座標射影と両立する鎖の葉 $H_t$ を作り、$r$ の増大を使って各一座標射影を generically finite にする。葉の次数は $t$ の多項式で抑えられるため、次元一定の長い区間に次数1の座標忘却写像が現れる。失った座標の有理的回収により局所 flow が双有理自己写像へ延長し、$\operatorname{Bir}(V)$ の可算性に反する。[Propositions 7.1, 8.1、pp. 31–40][U]

$K_n$ が得られると Proposition 3.2 で $L_n$ へ戻す。non-klt の場合、境界を少し下げた MMP の Mori ファイバー空間上で水平な係数1成分 $S$ を選び、$S^\nu$ への adjunction と低次元指数で留数を自明化する。$S^\nu\to Y\xrightarrow{h}Z$ を Stein 分解すると、norm は
$$h^*D=\operatorname{div}(a)\quad\Longrightarrow\quad(\deg h)D=\operatorname{div}\operatorname{Nm}(a)$$
を与える。[SD] Theorem 1.1 を生成ファイバーの基礎体 $k(Z)$、係数閾値 $t=1$ で使い、$\deg h$ を抑える。被約境界全体の gluing 指数をここへ混入させない。DCC 係数への拡張は global ACC による有限部分集合への帰着である。[Proposition 3.2、pp. 6–8；§9、p. 40][U]

## 証明図3 — 一様次数で飯高体全体を回収する

![良いモデルと有効双有理性によるTheorem 1.1](diagrams/iitaka.ja.svg)

[LA] の良いモデル存在を使い、滑らかな $X$ を terminal good minimal model $V$ に移す。Lemma 9.1 は、$mK_V$ が Cartier でない次数も含む全整数 $m\ge0$ で、多重標準切断空間を reflexive divisorial section として同定する。底が点なら、既に得た $L_n$ が共通の非消滅次数を与える。[Lemma 9.1、p. 41][U]

正次元の底では、図1による固定分母と固定 DCC 係数を持つ big な底の随伴因子に [BZ] Theorem 1.3 を適用する。滑らかな determination 上で通常の lc 対と nef Cartier 倍を作ることが適用の要点である。$p_0\mid m$ では
$$H^0(X,mK_X)=\psi^{m/p_0}f^*H^0(Z,\lfloor mD_Z\rfloor)$$
という式(4.10)が成立し、底の双有理系の全関数体を回収する。共通倍数への移行でも、$s/s_0=(s s_0^{q-1})/s_0^q$ により切断比を失わない。最後に定義体への降下・忠実平坦性で任意の標数0の代数閉体へ移す。[Corollary 4.4、p. 17；§9、pp. 41–42][U]

## 外部入力とカタログ内の接続

| 入力・関係 | 供給内容と使用箇所 | 今回の確認 |
|---|---|---|
| [LA] Theorem 11.1、p. 73 | 複素射影 lc 対の擬有効随伴因子に良いモデル。本稿 Theorem 2.1、Lemma 4.3、Lemma 9.1 | 入力の記述と本稿での適用を照合。LA の全証明は対象外 |
| [SD] Theorem 1.1、p. 1 | 任意の標数0体上、normal integral lc log CY 対の係数1成分の定数体次数。本稿 Proposition 3.2、pp. 7–8 | $H^0(X_\eta,\mathcal O)=k(Z)$、$t=1$、norm の使用を照合 |
| [Ufour] Lemmas 5.1, 5.4、Corollary 5.2（pp. 18, 20–21）；Lemmas 6.3–6.4（pp. 25, 27） | 鎖の商・次数評価・追跡・被覆族。本稿 Lemmas 6.2–6.3、§8 | 記述は任意次元。四次元の主定理を全次元で使うわけではない |
| [BZ] Theorem 1.3、arXiv v2 p. 3 | 次元・DCC 係数・nef 部分の Cartier 分母を固定した big polarized lc adjoint の有効双有理性。Corollary 4.4、p. 17 | 原記述と smooth determination 上の適用を照合。証明は対象外 |
| [R] §§3–7 | 分母と RC torsion の先行する四次元の方法。本稿 §§4–5 が全次元へ展開 | 方法上の先行関係。四次元の結論を全次元への入力とする矢印は作らない |
| 本稿 → [Log] Theorem 2.1（p. 5）、[SLC] Theorem 2.2（p. 5） | 本稿 Theorem 1.2 の normal lc 指数を再掲して利用 | 受け手の入力記述を確認。受け手の全証明は未調査 |

原稿はさらに Xu の klt 指数帰納法、Birkar の complements・RC boundedness、Ambro の標準束公式、global ACC、弱正値性等を使う。今回はその全入力の原記述を網羅照合していない。これらを「依存なし」と扱わず、`sources.json` の未確認項目に残す。

## 原典への入口と確認範囲

主要入口は [§3（pp. 6–8）、§4（pp. 11–19）、§6（pp. 24–30）、§§7–9（pp. 31–42）][U]。今回読んだのは、主定理、normal lc への norm 帰着、分母証明の weight・留数・成分固定の箇所、scalar／diagonal 命題の記述と主要接続、§8 の葉・次数1・flow の論証、§9 の切断比較と帰納法の閉じ方である。§5 の構造帰着全体、§6 の弱正値性・flattening 計算全体、§7 の正標数評価全体、外部入力の全証明は独立検証していない。

日英で主張・式・節・確認範囲を対応させた。図の原本は `diagrams/*.tikz`、言語別 TeX と SVG を併記する。図の引用は固定commitの GitHub 閲覧ページにリンクし、ページ番号は引用ラベルに明記した（GitHub のページ断片には依存しない）。

[U]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-Pluricanonical-Iitaka-Fibrations-October-3-2026/paper.pdf
[LA]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf
[SD]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf
[Ufour]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-effective-log-Iitaka-fibrations-for-fourfolds-September-26-2026/paper.pdf
[R]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Relative-denominators-and-effective-systems-for-log-Calabi-Yau-fibrations-September-27-2026/paper.pdf
[Log]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-log-Iitaka-fibrations-and-bounded-moduli-denominators-October-4-2026/uniform-log-iitaka.pdf
[SLC]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-indices-for-semi-log-canonical-log-Calabi-Yau-pairs-October-5-2026/uniform-slc-index.pdf
[BZ]: https://arxiv.org/pdf/1410.0938v2
