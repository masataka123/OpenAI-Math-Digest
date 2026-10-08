from pathlib import Path
import json
D=Path(__file__).resolve().parent
root=D.parents[2]
inv=json.loads((root/'research/catalog-034-inventory.json').read_text())
commit=inv['sourceCommit']; base='https://github.com/openai/math/blob/'+commit+'/'
ms={m['order']:m for m in inv['manuscripts']}
urls={k:base+ms[n]['path'] for k,n in [('U',10),('LA',4),('SD',12),('Ufour',13),('R',11),('Log',9),('SLC',2)]}
urls['BZ']='https://arxiv.org/pdf/1410.0938v2'
refs='\n'.join('['+k+']: '+v for k,v in urls.items())
ja=r'''# Uniform Pluricanonical Iitaka Fibrations

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
'''
en=r'''# Uniform Pluricanonical Iitaka Fibrations

**Simultaneous induction on Iitaka degrees and normal lc indices**

OpenAI, October 3, 2026 version, 44 pages; item 10 within official catalog 034. Source commit: `adc7f1241b42e322a6451854ab7e4b4c146bf78a`. This AI-generated first exposition reports the [manuscript's claims][U]; it does not certify the full proof. Check important claims against the source.

The manuscript claims that one pluricanonical degree depending only on dimension defines every Iitaka fibration of a smooth projective variety of nonnegative Kodaira dimension. The induction also proves a common exponent killing the **actual linear divisor class** of a normal lc log Calabi–Yau pair. Its central mechanisms are bounds on volume-form characters rather than on semistable ramification itself, and a contradiction between positivity on high-index canonical covers and jet estimates on diagonal products.

## Main results (in source order)

### Theorem 1.1 — Uniform pluricanonical degree (p. 2)

For every integer $d\ge1$ there is an integer $m(d)>0$ such that, over every algebraically closed field of characteristic zero, the complete system $|m(d)K_X|$ defines the Iitaka fibration of every smooth integral projective $d$-fold $X$ with $\kappa(X)\ge0$.

The system is nonempty and its section-ratio field **equals** the full Iitaka field $K(K_X)\subset k(X)$ generated over all pluricanonical degrees. Having an image of dimension $\kappa(X)$ alone is weaker. The statement includes nonvanishing in a common degree when $\kappa=0$, and birationality when $\kappa=d$. Every positive multiple works; no practical numerical value of $m(d)$ is supplied. [Theorem 1.1 and §9, pp. 2, 40–42][U]

### Theorem 1.2 — Uniform log canonical index (p. 2)

Fix $d\ge0$ and a rational DCC set $\Phi\subset[0,1]\cap\mathbb Q$. There is an integer $a(d,\Phi)>0$ such that every normal integral projective lc pair $(X,B)$ over an algebraically closed field of characteristic zero, with $\dim X=d$, effective boundary having coefficients in $\Phi$, and $\mathbb Q$-Cartier adjoint $K_X+B\sim_{\mathbb Q}0$, satisfies
$$a(d,\Phi)(K_X+B)\sim0.$$
This multiple is an integral principal divisor. The statement controls more than numerical triviality or the Cartier index, and does not cover nonnormal slc pairs. [Theorem 1.2 and §§2, 9.1, pp. 2, 4–5, 41–42][U]

## Proof diagram 1 — From lower-dimensional indices to moduli denominators

![Lower-dimensional normal lc indices bound degeneration characters and moduli denominators](diagrams/denominator.en.svg)

Write $L_j$ for Theorem 1.2 in dimension $j$. This step uses only $j<n$. Consider a contraction $f:X\to Z$ from a boundary-free klt $n$-fold, with $\dim Z>0$ and $K_X$ rationally linearly pulled back from the base. A common $p_0$ kills the canonical class of the geometric generic fibre. Descending that trivialization yields an equality of **actual rational divisors**
$$K_X+\frac1{p_0}\operatorname{div}(\psi)=f^*D_Z,\qquad D_Z=K_Z+B_Z+M_Z.$$
Qualitative canonical bundle formula theory supplies DCC coefficients for $B_Z$ and b-nefness of $\mathbf M$. The remaining issue is a uniform Cartier denominator. [Proposition 4.1, pp. 11–12][U]

Slice transversely to a prime divisor on the base and take semistable degenerations of the Beauville–Bogomolov factors of the generic fibre. Normalize the weights of their volume forms to zero. Equation (4.7) relates the ramification degree $\ell$ to central characters $\lambda_i$. A common exponent $N$ killing these characters makes $p=p_0n!N$ clear the moduli coefficients: no bound on $\ell$ itself is needed. [Lemma 4.2 and (4.5)–(4.7), pp. 13–14][U]

Lemma 4.3 uses LA to obtain a relatively semiample dlt degeneration, and applies $L_j$ to residues on normal components of its special fibre. Structure-sheaf cohomology traces and a Lefschetz argument produce a bounded power preserving a component. Neither $L_n$ nor an slc index theorem enters this step. Equivariant semistable reduction and coherent Lefschetz details have not been independently verified here. [Lemma 4.3 and §4.4, pp. 14–17][U]

## Proof diagram 2 — Exclude high indices and return to normal lc pairs

![Canonical-cover positivity and diagonal products exclude a high-index sequence](diagrams/index.en.svg)

Let $K_n$ denote the zero-boundary klt index assertion. If indices were unbounded, Proposition 5.1 produces terminal varieties $V$, canonical covers $\pi:Y\to V$ of degrees $r\to\infty$, and countable groups $\operatorname{Bir}(V)$. Every intermediate equivariant rational fibration of $Y$ has general-type smooth geometric generic fibre. Lower-dimensional Iitaka assertions $I_j$, the small-volume Lemma 6.4, and the chain and tracking lemmas from [U4] yield, after $1\le L^n\le2$,
$$\gamma(L;V)\le C_n,\qquad \varepsilon(L)\ge c_n,\qquad \varepsilon(\pi^*L)\ge c_nr^{1/n}.$$
Here $\gamma$ is the supremum of normalized vanishing orders of all sections in sufficiently divisible degrees, including the full section spaces on resolutions of members, rather than only restrictions of ambient sections. [Propositions 5.1, 6.1 and Lemmas 6.2–6.4, pp. 20, 24–30][U]

In contrast, $Z_t=Y^t/\mu_{r,\mathrm{diag}}$ with $P_t=\theta_t^*(L^{\boxplus t})$ satisfies $\varepsilon(P_t)\le Ct^2$. Section 7 specializes to positive characteristic and compares two orders of a determinant: Frobenius-diagonal rank loss gives a lower bound, while scalar order estimates on $V$ give an upper bound. Section 8 generates projection-compatible leaves $H_t$ from low-cost curves. Increasing $r$ forces every single-coordinate projection to be generically finite. Polynomial bounds on leaf degrees force a degree-one forgetting map on a long stretch of constant dimensions. Rational recovery of the missing coordinate makes local flows birational, contradicting countability of $\operatorname{Bir}(V)$. [Propositions 7.1, 8.1, pp. 31–40][U]

After proving $K_n$, Proposition 3.2 recovers $L_n$. In the non-klt case an MMP with a slightly reduced boundary produces a Mori fibre space and a horizontal coefficient-one component $S$. Adjunction to $S^\nu$ and lower-dimensional indices trivialize its residue. For the Stein factorization $S^\nu\to Y\xrightarrow{h}Z$, the norm gives
$$h^*D=\operatorname{div}(a)\quad\Longrightarrow\quad(\deg h)D=\operatorname{div}\operatorname{Nm}(a).$$
Apply [SD] Theorem 1.1 over $k(Z)$ with coefficient threshold $t=1$ to bound $\deg h$. This is not a gluing-index argument on the entire reduced boundary. Global ACC reduces the DCC coefficient statement to finite coefficient sets. [Proposition 3.2, pp. 6–8; §9, p. 40][U]

## Proof diagram 3 — Recover the full Iitaka field in a uniform degree

![Good models and effective birationality prove Theorem 1.1](diagrams/iitaka.en.svg)

[LA] supplies a terminal good minimal model $V$ of the smooth variety $X$. Lemma 9.1 identifies pluricanonical section spaces in every integer degree $m\ge0$, interpreting the spaces on $V$ divisorially even when $mK_V$ is not Cartier. If the Iitaka base is a point, the already established $L_n$ supplies a common nonvanishing degree. [Lemma 9.1, p. 41][U]

For a positive-dimensional base, apply [BZ] Theorem 1.3 to the big base adjoint with the fixed DCC coefficients and fixed nef denominator from diagram 1. On a smooth determination it is an ordinary lc pair with a nef Cartier multiple, which verifies the effective theorem's hypotheses. For $p_0\mid m$, equation (4.10) gives
$$H^0(X,mK_X)=\psi^{m/p_0}f^*H^0(Z,\lfloor mD_Z\rfloor).$$
The birational system downstairs therefore recovers its full function field. Passing to a common multiple preserves ratios because $s/s_0=(s s_0^{q-1})/s_0^q$. Descent to a field of definition and faithful flatness extend the conclusions to all algebraically closed fields of characteristic zero. [Corollary 4.4, p. 17; §9, pp. 41–42][U]

## External inputs and catalog connections

| Input or relation | Content and use | Check made here |
|---|---|---|
| [LA] Theorem 11.1, p. 73 | Good models for complex projective lc pairs with pseudo-effective adjoint; used in Theorem 2.1, Lemma 4.3, Lemma 9.1 | Input statement and application compared; LA's full proof is outside scope |
| [SD] Theorem 1.1, p. 1 | Constant-field degree of a coefficient-one component of a normal integral lc log CY pair over any characteristic-zero field; Proposition 3.2, pp. 7–8 | Checked $H^0(X_\eta,\mathcal O)=k(Z)$, $t=1$, and the norm step |
| [Ufour] Lemmas 5.1, 5.4, Corollary 5.2 (pp. 18, 20–21), Lemmas 6.3–6.4 (pp. 25, 27) | Chain quotients, degree bounds, tracking and covering; Lemmas 6.2–6.3 and §8 | These statements have arbitrary dimension; the fourfold main theorem is not used in arbitrary dimension |
| [BZ] Theorem 1.3, arXiv v2 p. 3 | Effective birationality for big polarized lc adjoints with fixed dimension, DCC coefficients and nef Cartier denominator; Corollary 4.4, p. 17 | Original statement and use on the smooth determination compared; proof not reviewed |
| [R] §§3–7 | Earlier fourfold method for denominators and RC torsion, developed in §§4–5 here | Methodological predecessor; no edge asserting that a fourfold conclusion holds in every dimension |
| This paper → [Log] Theorem 2.1 (p. 5), [SLC] Theorem 2.2 (p. 5) | They restate and use the normal lc index Theorem 1.2 | Recipient input statements checked; recipient full proofs not investigated |

Other inputs include Xu's klt index induction, Birkar's complements and RC boundedness, Ambro's canonical bundle formula, global ACC, and weak positivity. Their original statements have not all been cross-checked in this draft. They remain unresolved entries in `sources.json`, rather than being treated as absent dependencies.

## Source guide and verification scope

Start with [§3 (pp. 6–8), §4 (pp. 11–19), §6 (pp. 24–30), and §§7–9 (pp. 31–42)][U]. We read the main statements, the normal-lc norm reduction, the weight/residue/component-fixing parts of the denominator argument, scalar and diagonal statements and their main connections, the leaf/degree-one/flow argument in §8, and the section comparison and closing induction in §9. We did not independently verify the entire structural reduction in §5, all weak-positivity and flattening calculations in §6, all positive-characteristic estimates in §7, or the proofs of external inputs.

The Japanese and English drafts match in statements, formulas, organization, and verification scope. Diagram originals are in `diagrams/*.tikz`, with language-specific TeX and SVG files. Citation labels give PDF pages and link to GitHub previews at the fixed commit; they do not rely on PDF page fragments in GitHub.
'''
for lang,body in [('ja',ja),('en',en)]: D.joinpath('article.'+lang+'.md').write_text(body+'\n'+refs+'\n')
def N(ja,en,math): return dict(ja=ja,en=en,math=math)
def E(ja,en,*refs): return dict(ja=ja,en=en,refs=[dict(key=k,label=l) for k,l in refs])
spec={'sources':urls,'diagrams':[
{'id':'denominator','nodes':[
N('低次元の指数を固定する','Fix lower-dimensional indices',r'$L_j\ (j<n),\quad f:X\to Z,\quad X\ \mathrm{klt},\ B_X=0,\ \dim Z>0.$\\ $K_X\sim_{\mathbb Q}f^*D_0.$'),
N('実際の因子の標準束公式を作る','Construct the exact canonical bundle formula',r'$K_X+p_0^{-1}\operatorname{div}(\psi)=f^*(K_Z+B_Z+M_Z).$'),
N('退化指標を成分上の留数で抑える','Bound degeneration characters using residues',r'$w_u(\eta_i)=0,\quad \lambda_i^N=1,\quad j=\dim S<n.$'),
N('moduli の Cartier 分母を固定する','Fix the Cartier denominator of the moduli part',r'$p=p_0 n!N,\qquad p\mathbf M\ \text{b-Cartier}.\quad\textbf{Proposition 4.1}$')],
'edges':[
E('生成ファイバーの指数と定性的な標準束公式を使う。','Use the generic-fibre index and qualitative bundle formula.',('U','Prop. 4.1, pp. 11--12')),
E('半安定化後の dlt 成分へ留数を取り、$L_j$ を適用する。','Take residues on dlt components after semistable reduction; apply $L_j$.',('U','Lemmas 3.3, 4.3, pp. 8, 14--17'),('LA','[LA] Thm. 11.1, p. 73')),
E('分岐次数ではなく体積形式の指標を殺し、係数の分母を消す。','Kill volume-form characters to clear coefficients; ramification need not be bounded.',('U','(4.6)--(4.7), p. 14; Sec. 4.4, p. 17'))]},
{'id':'index','nodes':[
N('高指数列に帰着する','Reduce to a high-index sequence',r'$r\to\infty,\quad\pi:Y\to V,\quad K_Y\sim0,\quad\operatorname{Bir}(V)\ \text{countable}.$'),
N('被覆と対角積に反対向きの評価を得る','Compare cover and diagonal-product positivity',r'$\varepsilon(\pi^*L)\ge c_nr^{1/n},\quad Z_t=Y^t/G_{\rm diag},\quad\varepsilon(P_t)\le Ct^2.$'),
N('葉の座標を有理的に回収する','Recover a missing leaf coordinate rationally',r'$P_t^{h_t}H_t\le(h_tB)^{h_t},\quad W_k\dashrightarrow W_{k-1}\ \text{birational}.$'),
N('可算性との矛盾から零境界指数へ','Contradict countability and bound the klt index',r'$\{\text{local flows}\}\subset\operatorname{Bir}(V)\quad\Longrightarrow\quad K_n.$'),
N('境界の Stein 次数と norm で lc 指数へ','Use boundary Stein degree and norm for the lc index',r'$K_n+L_{<n}\Longrightarrow L_n:\quad a(n,\Phi)(K_X+B)\sim0.$')],
'edges':[
E('低次元 $I_j$ の scalar 評価と Frobenius 対角の行列式を使う。','Use lower-dimensional $I_j$, scalar bounds and the Frobenius-diagonal determinant.',('U','Props. 5.1, 6.1, 7.1, pp. 20, 24, 31')),
E('鎖の葉の次数を抑え、座標忘却の次数1を強制する。','Bound chain-leaf degrees and force a degree-one forgetting map.',('U','Prop. 8.1, pp. 37--39'),('Ufour','[U4] Lemmas 5.1, 5.4; pp. 18, 21')),
E('有理的な座標回収で局所 flow を双有理写像にする。','Rational recovery turns local flows into birational self-maps.',('U','(8.7)--(8.8), pp. 39--40')),
E('水平な係数1成分の留数と有界な Stein 次数を使う。','Use residues on a horizontal coefficient-one component and a bounded Stein degree.',('U','Prop. 3.2, pp. 6--8'),('SD','[SD] Thm. 1.1, p. 1'))]},
{'id':'iitaka','nodes':[
N('良いモデルで飯高写像を表す','Represent the Iitaka fibration on a good model',r'$X\dashrightarrow V\xrightarrow{f}Z,\quad K_V\ \text{semiample},\quad H^0(X,mK_X)=H^0(V,mK_V).$'),
N('底の次元に応じて一様次数を選ぶ','Choose a degree according to the base dimension',r'$\dim Z=0:\ L_n;\qquad\dim Z>0:\ D_Z\ \text{big},\quad p\mathbf M\ \text{b-Cartier}.$'),
N('完全系の切断比で底の全関数体を得る','Recover the full base field from complete-system ratios',r'$H^0(V,mK_V)=\psi^{m/p_0}f^*H^0(Z,\lfloor mD_Z\rfloor),\quad p_0\mid m.$'),
N('共通倍数と基礎体の降下で閉じる','Take a common multiple and descend the field',r'$k(\text{ratios of }|m(n)K_X|)=K(K_X).\quad\textbf{Theorem 1.1}$')],
'edges':[
E('[LA] から得た良いモデル上で、点の場合と big な底を分ける。','Use the good model from [LA] and split the point and big-base cases.',('LA','[LA] Thm. 11.1, p. 73'),('U','Lemma 9.1; proof of Thm. 1.1, p. 41')),
E('固定係数・nef 分母の有効双有理性を底に適用する。','Apply effective birationality with fixed coefficients and nef denominator.',('BZ','[BZ] Thm. 1.3, p. 3'),('U','Cor. 4.4, (4.10), p. 17')),
E('切断比は正の整数倍で保たれ、忠実平坦性で降下する。','Positive multiples preserve section ratios; faithful flatness gives descent.',('U','Sec. 9, pp. 41--42'))]}
]}
D.joinpath('diagrams/spec.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2)+'\n')
sources={'paperId':'uniform-pluricanonical-iitaka','sourceCommit':commit,'sourceUrl':urls['U'],'sha256':ms[10]['sha256'],'checkedOn':'2026-10-08','manuscriptDate':'2026-10-03','pdfPages':44,'statements':[{'result':'Theorem 1.1','pages':[2],'content':'Uniform full Iitaka section field for smooth integral projective d-folds, kappa>=0, all algebraically closed characteristic-zero fields.'},{'result':'Theorem 1.2','pages':[2],'content':'Common integral principal multiple for normal integral projective lc rational log CY pairs with a fixed rational DCC set.'}],'proofPassages':[{'result':'Proposition 3.2','pages':[6,7,8],'scope':'Read norm and Stein-factor argument.'},{'result':'Proposition 4.1, Lemmas 4.2–4.3, Corollary 4.4, Proposition 4.5','pages':[11,12,13,14,16,17,18,19],'scope':'Read displayed passages on exact equality, weights, residues, component fixing, denominator completion, base birationality and torsion; equivariant construction not independently checked.'},{'result':'Proposition 5.1','pages':[20],'scope':'Statement and initial reduction, not full proof.'},{'result':'Proposition 6.1; Lemmas 6.2–6.4','pages':[24,25,26,30],'scope':'Statements, initial small-volume calculation and lower curve-bound argument; intervening flattening estimates not fully read.'},{'result':'Proposition 7.1','pages':[31,37],'scope':'Statement, determinant strategy and final contradictory estimates; full intermediate calculation unverified.'},{'result':'Proposition 8.1; Section 9','pages':[37,38,39,40,41,42],'scope':'Read high-index contradiction, induction closure, all-degree comparison and field descent.'}],'dependencies':[],'unresolved':['Full equivariant semistable construction and coherent Lefschetz application in Lemma 4.3 not independently verified.','Full structural reductions in Section 5, weak positivity/flattening in Section 6, and positive-characteristic calculations in Section 7 not independently verified.','Xu index induction, Birkar complements/RC boundedness, Ambro formula, global ACC, and weak positivity original statements not all cross-checked.','No recursive verification of external proofs; outgoing uses beyond recipient input statements remain uninvestigated.']}
for key,result,pages,use,scope in [('LA','Theorem 11.1',[73],'Theorem 2.1; Lemmas 4.3, 9.1','Statement and use compared; proof not verified.'),('SD','Theorem 1.1',[1],'Proposition 3.2, pp. 7–8','Checked arbitrary base field, constants, coefficient threshold 1 and norm degree.'),('Ufour','Lemmas 5.1, 5.4; Corollary 5.2; Lemmas 6.3–6.4',[18,20,21,25,27],'Lemmas 6.2–6.3; Section 8','Statements compared; arbitrary-dimensional scopes confirmed.'),('BZ','Theorem 1.3',[3],'Corollary 4.4, p. 17','arXiv:1410.0938v2 statement read; full proof excluded.')]: sources['dependencies'].append({'sourceUrl':urls[key],'abbreviation':key,'result':result,'pages':pages,'usedAt':use,'verification':scope})
D.joinpath('sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2)+'\n')
D.joinpath('catalog-changes.md').write_text('# 本部への追加候補\n\n- 10→09 Theorem 2.1（p. 5）、10→02 Theorem 2.2（p. 5）は Theorem 1.2 の normal lc 指数の入力として区別する。受け手の全証明の確認は意味しない。\n- 13→10 は任意次元で記述された Lemmas 5.1, 5.4 / Corollary 5.2 / Lemmas 6.3–6.4 → Lemmas 6.2–6.3・§8。13の四次元主定理を全次元で用いる依存ではない。\n- 11→10 は §§4–5 の方法の先行関係と、具体的な結果の直接入力を区別する。\n- 10 Theorem 1.1 の結論には「切断比が飯高体全体を生成」を付記する。像の次元のみでは弱い。\n\n根拠と固定版URLは article.ja.md と sources.json に記載。\n')
