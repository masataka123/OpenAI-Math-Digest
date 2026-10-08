from pathlib import Path
import json
D=Path(__file__).resolve().parent;root=D.parents[2]
inv=json.loads((root/'research/catalog-034-inventory.json').read_text());commit=inv['sourceCommit'];ms={m['order']:m for m in inv['manuscripts']}
base='https://github.com/openai/math/blob/'+commit+'/'
u={'S':base+ms[7]['path'],'NV':base+ms[6]['path'],'FG':'https://www.math.kyoto-u.ac.jp/~fujino/fg-comp-final.pdf','KS':'https://people.math.harvard.edu/~mpopa/papers/oxford.pdf','Hash':'https://arxiv.org/html/1609.00121v4','Bir':'https://arxiv.org/pdf/0706.1792','Saito':'https://doi.org/10.2977/PRIMS/1195171082','Ufour':base+ms[13]['path']}
refs='\n'.join('['+k+']: '+v for k,v in u.items())
ja=r'''# Lifting sections from the reduced support of an adjoint

**全被約台の生成性から、有限近傍の障害消滅と切断増大へ**

OpenAI、2026年9月27日版、40ページ。公式カタログ034内の掲載順07。固定commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`。[原典][S]の主張を紹介するAI生成の概説であり、証明全体の正しさの認定ではない。重要な主張・証明は原典で確認されたい。

随伴因子の有効倍数の被約台で切断が生成されるとき、そこから周囲の切断を増やすのが本稿の主題である。全被約台の gluing を保持し、frame bundle 上の正の重みを用いて有限近傍の持ち上げ障害を消す。得られるのは全次元の supported lifting であり、四次元の非消滅はその定理の仮定や証明には入らない。

## 主要結果（原典順、すべてp. 2）

### Theorem 1.1 — Supported boundary lifting

$(V,C)$ を標数0の代数閉体上の normal projective $\mathbb Q$-factorial dlt 対とし、$C$ は有効有理境界、$A=K_V+C$ とする。十分可除な正整数 $q$ と非零有効 Cartier 因子 $G$ が
$$0\ne G\ge0,\qquad G\sim qA,\qquad\operatorname{Supp}G\subseteq\operatorname{Supp}\lfloor C\rfloor$$
を満たすとする。$\mathcal O_V(G)|_{G_{\mathrm{red}}}$ が**全被約スキーム**上で semiample なら $\kappa(V,A)>0$ である。[Theorem 1.1][S]

追加の nef 仮定はない。台の包含は真の包含でよく、$C=S+H+C_0$、$S=G_{\mathrm{red}}$ と書いたとき、余分な係数1成分 $H$ が $S$ やその strata と交わることも許される。各正規化成分上の半豊富性だけを仮定に置き換えてはいけない。

### Theorem 1.2 — Abundance after nonvanishing

$(X,\Delta)$ を複素射影 lc 対、$\dim X\le4$、$\Delta$ を有効有理境界とする。$D=K_X+\Delta$ が $\mathbb Q$-Cartier、nef、$\kappa(X,D)\ge0$ なら $D$ は semiample。さらに $\kappa(X,D)=0$ なら $D\sim_{\mathbb Q}0$。この結果は一様な指数を与えない。標数0の任意の代数閉体への移行は別掲の Corollary 7.2（p. 29）である。[Theorem 1.2、Corollary 7.2][S]

### Theorem 1.3 — Reduction to smooth canonical nonvanishing

**全次元**の滑らかな連結複素射影多様体 $W$ について、$K_W$ が擬有効ならある $m>0$ で $H^0(W,mK_W)\ne0$ と仮定する。この前提の下、標数0の任意の代数閉体上の normal projective lc 対 $(X,\Delta)$、有効有理境界 $\Delta$、nef $\mathbb Q$-Cartier 随伴因子 $D=K_X+\Delta$ に対し $D$ は semiample となる。前提は nef な標準因子だけに限定されない。[Theorem 1.3][S]

### Corollary 1.4 — Fourfold log abundance

標数0の代数閉体上の normal projective lc 対 $(X,\Delta)$、$\dim X\le4$、有効有理境界、$D=K_X+\Delta$ が nef $\mathbb Q$-Cartier なら $D$ は semiample。$\kappa(X,D)=0$ なら $D\sim_{\mathbb Q}0$。ここで初めて [NV] Corollary 1.2 の四次元 lc 非消滅を追加する。[Corollary 1.4、証明p. 29][S]

## 証明図1 — Supported lifting の障害を消す

![frameの正の重みと留数による有限近傍の障害消滅](diagrams/lifting.ja.svg)

$G$ を倍して $L=\mathcal O_V(G)$、$L|_S=f^*\mathcal O_{\mathbb P^\ell}(1)$ とする。非零 frame の束 $P=L^\times$ に移り、二段階の循環被覆を**分裂した場合も全成分を残して**構成する。解消上には正の frame 重み $a$ の対数的形式 $\sigma$ と留数 $\Omega$ がある。$H$ との交わりの上の極も $D_h$ に残す。Lemma 2.3 の留数挿入により障害群を
$$\iota:R^1g_*\mathcal O_E\hookrightarrow R^1h_*\omega_R(D_h)=F_0\mathcal N\hookrightarrow\mathcal N$$
へ単射で送る。ここで $g:E\to B$、$h:R\to B$、$B=\mathcal O_{\mathbb P^\ell}(1)^\times$。$F_0\mathcal N$ は境界写像の graph 上で作る混合 Hodge 加群の最下層であり、小さい台に集中するコホモロジーも捨てない。[§2、Lemma 2.3、Lemma 3.1、pp. 5–13][S]

$I=(y)$ とし、次数 $k$ までの持ち上げから $k+1$ への障害を $y^k$ で割ると、導分 $\delta_k:g_*\mathcal O_E\to R^1g_*\mathcal O_E$ となる。積の二つの誤差が $y^{k+1}$ を法として消えることが Leibniz 則の理由である。graph の留数計算は、**任意の**境界関数 $F$ に対し
$$\iota(\delta_k(F))+\sum_i\iota(F\delta_k(t_i))\partial_{t_i}=0$$
を与える（右 $\mathscr D$-加群の作用、式(5.5)）。$F=1$ として first symbol を取ると、重み $a+k>0$ の零-symbol tensor が得られる。横断的有限被覆と微分の adjugate により、その水平部分が非零なら ample line から最下 symbol の核への非零写像を作れる。Kodaira–Saito vanishing に由来する Lemma 3.2 がそれを排除する。[Proposition 4.1、Lemma 4.2、Proposition 5.1、pp. 13–20][S]

残る垂直方向では symbol の消滅だけでは足りない。実際の Euler 作用 $s\varepsilon=-(a+k)s$ と留数恒等式を使って垂直部分を消し、再び任意の $F$ の式へ戻って $\delta_k(F)=0$ を得る。この区別が lifting の核心である。[§4.3、式(5.11)–(5.12)、pp. 17, 20][S]

有限群不変部と frame の次数0部分を取り、$V$ 上の divisorial layer に降ろす。周期関係 $Q_{j-r}=Q_j\otimes\mathcal O(1)$ により正の twist が蓄積し、高次コホモロジーは有界、切断数は非有界となる。境界近傍から周囲へ移す際の損失は固定値 $h^1(V,\mathcal O_V)$ 以下なので
$$h^0(V,\mathcal O_V(NG))\ge h^0(V,\mathcal O_V(NG)/\mathcal O_V)-h^1(V,\mathcal O_V)\longrightarrow\infty.$$
$\ell=0$ の場合も層の個数が増える。収束する形式近傍や、境界写像が近傍全体に延長することは仮定しない。[Lemma 5.2、Proposition 1.5の証明、pp. 21–23][S]

## 証明図2 — 非消滅後の豊富性

![通常の極小モデルと全floorのgluingを使う豊富性への帰着](diagrams/abundance.ja.svg)

Proposition 6.3 は、次元 $d$ 以下の effective lc 対の**通常の**極小モデル存在と、$d$ 未満の full lc abundance を仮定して、次元 $d$ の abundance after nonvanishing を導く。良い極小モデルの存在を最初から仮定して結論を先取りしてはいない。[pp. 23–24][S]

$\kappa(D)=0$ で $0\ne M\ge0$、$M\sim_{\mathbb Q}D$ と仮定する。解消で台の係数を1へ上げ、通常の極小モデル $(V_*,C_*)$ に移しても、小平次元0と有効代表元 $M_*$ を保つ。元の $D$ の nef 性と negativity lemma により $M_*$ は消えない。低次元 abundance と [FG] の normalization gluing から**全 floor**上の半豊富性を得るので、$G=qM_*$ に図1を適用すると $\kappa>0$ の矛盾になる。従って $D\sim_{\mathbb Q}0$。[Lemmas 6.1–6.2、Proposition 6.3、pp. 23–25][S]

$\kappa(D)=k>0$ では、解消上 $L=K_W+\Gamma=\pi^*D+N$、$N\ge0$ exceptional と書く。飯高ファイバー上の $L|_F$ は非 nef でもよい。effective なファイバー対の通常の極小モデルを作り、低次元 abundance をそちらに適用する。比較式(6.6)と非負交点数から $\pi^*D|_F\equiv0$、さらに $\nu(D)=\kappa(D)$ を得る。全 floor の半豊富性は各 lc center の正規化にも降りるので log abundance の仮定が揃い、[FG] Theorem 4.2 が半豊富性を与える。[Proposition 6.3、pp. 25–27][S]

$d=4$ では低次元 abundance と Birkar の effective lc 四次元極小モデル定理を代入して Theorem 1.2 を得る。一般の標数0体へは、元の因子の指定 Cartier 倍と評価写像を降下・拡大する。$\mathbb Q$-factoriality 自体が体の降下で保存されるとは主張しない。[§§6.3, 7、pp. 27–29][S]

## 証明図3 — 条件付き全次元と四次元の帰結を分ける

![全次元の条件付き命題と四次元非消滅からの帰結](diagrams/consequences.ja.svg)

Theorem 1.3 では滑らかな標準非消滅を**全次元で仮定**し、[Hash] Theorem 1.4 が lc 非消滅と通常の極小モデルを供給する。実線形有効性を有理線形有効性にする箇所では [NV] Lemma 8.1 の有限次元有理線形代数だけを使う。これは [NV] の四次元非消滅定理への依存とは別である。これらを Proposition 6.3 の次元帰納法へ入れる。[§6.3、p. 27][S]

Corollary 1.4 では [NV] Corollary 1.2 が元の normal lc 対の指定 Cartier 倍に非零切断を与え、Theorem 1.2 と体の移行が結論を与える。[NV] の入力は Theorems 1.1–1.2 の証明へ逆流しない。付録Aの conormal–period 法は別手法であり、図1への入力ではない。[§7、p. 29；付録A、pp. 30–38][S]

## 外部入力と確認状況

| 入力 | 使用箇所・役割 | 確認範囲 |
|---|---|---|
| [KS] Kodaira–Saito vanishing | Lemma 3.2、p. 13。ample inverse twist の負次数 hypercohomology 消滅 | Popa 著者PDF Theorem 8.2、PDF pp. 14–15 の記述を照合。原稿は刊行版 Theorem 28 を引用しており番号体系が違う |
| [Saito] 混合 Hodge 加群の射影直像 strictness | Lemma 3.1、pp. 12–13 の全 coherent 最下層 | 使用箇所と本稿の計算を読解。Saito 1990 Theorem 2.14 / Proposition 2.15 の原記述の再照合は保留 |
| [FG] Theorems 4.3 / 4.2、著者最終PDF p. 18 | Lemma 6.2 の全floor gluing／Proposition 6.3 の nef log abundant adjoint | 両結果の記述・仮定・適用箇所を照合。外部証明は対象外 |
| [Bir] Corollary 1.6、参照arXiv PDF p. 3 | §6.3、p. 27。effective lc 四次元の通常の極小モデル | 原記述を照合。良いモデルの供給と区別 |
| [Hash] Theorem 1.4、arXiv v4 §1 | Theorem 1.3 のみ。滑らかな非消滅から lc 非消滅・通常の極小モデル | Conjectures 1.1–1.3と定理の含意を照合 |
| [NV] Corollary 1.2、p. 2；Lemma 8.1、p. 35 | 前者は Corollary 1.4、後者は Theorem 1.3 の有理化 | 記述と本稿 pp. 27, 29 の適用を照合。非消滅の全証明は未検証 |

本稿 Theorem 1.2 は [Ufour] の四次元 log Iitaka の最終組立てにも現れる（§10、pp. 48–49）。受け手の詳細は別記事の対象とする。古典的三次元 abundance とその訂正、留数挿入での消滅・split の全外部理論は、今回一括して検証済みとはしない。

## 原典への入口と確認範囲

[pp. 8–13][S] は余分な係数1境界の極、留数単射、全 coherent 最下層の扱い。[pp. 14–23][S] は横断的被覆、Euler作用、graph identity、全有限層の持ち上げと切断増大。[pp. 23–29][S] は通常の極小モデルとの比較、全floor、飯高ファイバー、基礎体の移行である。今回これらの核心箇所を読み、主要結果と上表の直接入力を照合した。

未確認は、§2の循環被覆・split 留数挿入の全詳細、混合 Hodge 加群の各フィルトレーション同定を外部理論から独立に再構成すること、古典的低次元 abundance の証明、付録A、外部入力の全証明である。図の矢印は原稿が述べる論証接続を示し、その接続の独立な証明認定を意味しない。日英本文・図・出典・保留点を対応させている。
'''
en=r'''# Lifting sections from the reduced support of an adjoint

**From generation on the whole reduced support to finite-order lifting and section growth**

OpenAI, September 27, 2026 version, 40 pages; item 07 within official catalog 034. Fixed commit: `adc7f1241b42e322a6451854ab7e4b4c146bf78a`. This AI-generated exposition reports the [manuscript's claims][S], without certifying the full proof. Consult the source for important claims and arguments.

The paper seeks ambient sections from generation on the reduced support of an effective adjoint multiple. It retains gluing across the entire support and uses positive frame weight to eliminate obstructions on finite neighborhoods. Supported lifting holds in every dimension; fourfold nonvanishing is neither a hypothesis nor an input to its proof.

## Main results (source order, all on p. 2)

### Theorem 1.1 — Supported boundary lifting

Let $(V,C)$ be a normal projective $\mathbb Q$-factorial dlt pair over an algebraically closed field of characteristic zero, with effective rational boundary $C$, and put $A=K_V+C$. For a sufficiently divisible positive integer $q$, suppose a nonzero effective Cartier divisor $G$ satisfies
$$0\ne G\ge0,\qquad G\sim qA,\qquad\operatorname{Supp}G\subseteq\operatorname{Supp}\lfloor C\rfloor.$$
If $\mathcal O_V(G)|_{G_{\mathrm{red}}}$ is semiample on the **whole reduced scheme**, then $\kappa(V,A)>0$. [Theorem 1.1][S]

No additional nefness is assumed. The support inclusion can be strict: writing $C=S+H+C_0$, with $S=G_{\mathrm{red}}$, the extra coefficient-one divisor $H$ may meet $S$ and its strata. Semiampleness separately on normalized components cannot replace the whole-support hypothesis.

### Theorem 1.2 — Abundance after nonvanishing

For a projective lc pair $(X,\Delta)$ over $\mathbb C$ of dimension at most four with effective rational boundary, suppose $D=K_X+\Delta$ is $\mathbb Q$-Cartier, nef, and $\kappa(X,D)\ge0$. Then $D$ is semiample; if $\kappa(X,D)=0$, then $D\sim_{\mathbb Q}0$. No uniform index is asserted. The extension to arbitrary algebraically closed characteristic-zero fields is separately stated as Corollary 7.2 (p. 29). [Theorem 1.2 and Corollary 7.2][S]

### Theorem 1.3 — Reduction to smooth canonical nonvanishing

Assume, **in every dimension**, that every smooth connected projective complex variety $W$ with pseudo-effective $K_W$ has $H^0(W,mK_W)\ne0$ for some $m>0$. Then every normal projective lc pair $(X,\Delta)$ over any algebraically closed characteristic-zero field, with effective rational boundary and nef $\mathbb Q$-Cartier adjoint $D=K_X+\Delta$, has semiample $D$. The premise is not restricted to nef canonical divisors. [Theorem 1.3][S]

### Corollary 1.4 — Fourfold log abundance

For a normal projective lc pair $(X,\Delta)$ over an algebraically closed characteristic-zero field, of dimension at most four with effective rational boundary and nef $\mathbb Q$-Cartier adjoint $D=K_X+\Delta$, the divisor $D$ is semiample. If $\kappa(X,D)=0$, then $D\sim_{\mathbb Q}0$. This is where [NV] Corollary 1.2 adds fourfold lc nonvanishing. [Corollary 1.4; proof on p. 29][S]

## Proof diagram 1 — Kill the supported lifting obstruction

![Positive frame weight and residues kill finite-neighborhood obstructions](diagrams/lifting.en.svg)

Replace $G$ by a multiple so that $L=\mathcal O_V(G)$ satisfies $L|_S=f^*\mathcal O_{\mathbb P^\ell}(1)$. Pass to the nonzero-frame bundle $P=L^\times$ and construct two cyclic covers, **retaining every component when the algebras split**. On a resolution there is a logarithmic form $\sigma$ of positive frame weight $a$, with residue $\Omega$. The polar divisor $D_h$ retains poles above intersections with $H$. Lemma 2.3 inserts the obstruction group into
$$\iota:R^1g_*\mathcal O_E\hookrightarrow R^1h_*\omega_R(D_h)=F_0\mathcal N\hookrightarrow\mathcal N.$$
Here $g:E\to B$, $h:R\to B$, and $B=\mathcal O_{\mathbb P^\ell}(1)^\times$. The lowest piece $F_0\mathcal N$ of a mixed Hodge module on the boundary graph retains cohomology concentrated on smaller supports. [§2, Lemmas 2.3, 3.1, pp. 5–13][S]

With $I=(y)$, divide the obstruction from order $k$ to $k+1$ by $y^k$. This gives a derivation $\delta_k:g_*\mathcal O_E\to R^1g_*\mathcal O_E$: the product of two lifting errors vanishes modulo $y^{k+1}$. The graph-residue computation gives, for **every** boundary function $F$,
$$\iota(\delta_k(F))+\sum_i\iota(F\delta_k(t_i))\partial_{t_i}=0,$$
using the right $\mathscr D$-module action, as in (5.5). Set $F=1$ and take the first symbol. The resulting zero-symbol tensor has weight $a+k>0$. A transverse finite cover and the adjugate of its differential turn a nonzero horizontal part into a nonzero map from an ample line into the lowest symbol kernel. Lemma 3.2, derived from Kodaira–Saito vanishing, excludes it. [Proposition 4.1, Lemma 4.2, Proposition 5.1, pp. 13–20][S]

For the vertical part, vanishing of the symbol alone is insufficient. The **actual** Euler action $s\varepsilon=-(a+k)s$ and the residue identity kill that part; returning to arbitrary $F$ then gives $\delta_k(F)=0$. This separation is the core of the lifting argument. [§4.3, (5.11)–(5.12), pp. 17, 20][S]

Finite-group invariants and frame degree zero descend the construction to divisorial layers on $V$. The periodicity $Q_{j-r}=Q_j\otimes\mathcal O(1)$ accumulates positive twists. Higher cohomology remains bounded while sections grow. Passing from finite neighborhoods to the ambient variety loses at most the fixed number $h^1(V,\mathcal O_V)$:
$$h^0(V,\mathcal O_V(NG))\ge h^0(V,\mathcal O_V(NG)/\mathcal O_V)-h^1(V,\mathcal O_V)\longrightarrow\infty.$$
When $\ell=0$, the number of layers still grows. No convergent formal neighborhood or extension of the boundary morphism to a whole neighborhood is assumed. [Lemma 5.2 and proof of Proposition 1.5, pp. 21–23][S]

## Proof diagram 2 — Abundance after nonvanishing

![Ordinary minimal models and whole-floor gluing give abundance](diagrams/abundance.en.svg)

Proposition 6.3 assumes **ordinary** minimal models for effective lc pairs through dimension $d$, and full lc abundance below $d$. It deduces abundance after nonvanishing in dimension $d$; good minimal models are not assumed at the outset. [pp. 23–24][S]

For $\kappa(D)=0$, suppose $0\ne M\ge0$ and $M\sim_{\mathbb Q}D$. Raise support coefficients to one on a resolution, then pass to an ordinary minimal model $(V_*,C_*)$. Kodaira dimension zero and an effective representative $M_*$ are retained. Nefness of the original $D$ and negativity ensure $M_*$ does not disappear. Lower-dimensional abundance and [FG] normalization gluing give semiampleness on the **whole floor**. Diagram 1 applied to $G=qM_*$ contradicts Kodaira dimension zero, so $D\sim_{\mathbb Q}0$. [Lemmas 6.1–6.2 and Proposition 6.3, pp. 23–25][S]

For $\kappa(D)=k>0$, on a resolution write $L=K_W+\Gamma=\pi^*D+N$, with effective exceptional $N$. The fibre adjoint $L|_F$ need not be nef. Take an ordinary minimal model of that effective fibre pair and apply lower-dimensional abundance there. Comparison (6.6) and nonnegative intersections yield $\pi^*D|_F\equiv0$, and then $\nu(D)=\kappa(D)$. Whole-floor semiampleness also gives abundance on normalized lc centers. [FG] Theorem 4.2 now applies. [Proposition 6.3, pp. 25–27][S]

For $d=4$, insert known lower-dimensional abundance and Birkar's ordinary minimal-model theorem for effective lc fourfolds to obtain Theorem 1.2. Transfer to other characteristic-zero fields descends and extends a specified Cartier multiple of the original divisor and its evaluation map; it does not assert preservation of $\mathbb Q$-factoriality under field descent. [§§6.3, 7, pp. 27–29][S]

## Proof diagram 3 — Separate the conditional and fourfold consequences

![Distinct inputs for the conditional all-dimensional theorem and the fourfold corollary](diagrams/consequences.en.svg)

For Theorem 1.3, assume smooth canonical nonvanishing **in all dimensions**. [Hash] Theorem 1.4 supplies lc nonvanishing and ordinary minimal models. The passage from real-linear to rational-linear effectivity uses only the finite rational linear algebra in [NV] Lemma 8.1, separately from that paper's fourfold nonvanishing theorem. Proposition 6.3 then closes dimension induction. [§6.3, p. 27][S]

For Corollary 1.4, [NV] Corollary 1.2 supplies a nonzero section in a multiple of a prescribed Cartier multiple on the original normal lc variety; Theorem 1.2 and field transfer finish the argument. That nonvanishing input does not enter the proofs of Theorems 1.1–1.2. Appendix A gives a separate conormal–period method, not an input to diagram 1. [§7, p. 29; Appendix A, pp. 30–38][S]

## External inputs and checks

| Input | Use | Scope checked |
|---|---|---|
| [KS] Kodaira–Saito vanishing | Lemma 3.2, p. 13: negative hypercohomology with an inverse ample twist | Compared Popa author's PDF Theorem 8.2, PDF pp. 14–15. The manuscript cites published Theorem 28, a different numbering scheme |
| [Saito] Projective direct-image strictness for mixed Hodge modules | Lemma 3.1, pp. 12–13: the entire coherent lowest piece | Read the application and local calculation; rechecking Saito 1990 Theorem 2.14 / Proposition 2.15 is pending |
| [FG] Theorems 4.3 / 4.2, final author PDF p. 18 | Whole-floor gluing in Lemma 6.2 and nef log abundance in Proposition 6.3 | Compared statements, hypotheses, and uses; proofs excluded |
| [Bir] Corollary 1.6, accessed arXiv PDF p. 3 | §6.3, p. 27: ordinary minimal models of effective lc fourfolds | Statement checked; distinguished from good models |
| [Hash] Theorem 1.4, arXiv v4 §1 | Theorem 1.3 only: smooth nonvanishing gives lc nonvanishing and ordinary models | Compared Conjectures 1.1–1.3 and the implication |
| [NV] Corollary 1.2, p. 2; Lemma 8.1, p. 35 | The former feeds Corollary 1.4; the latter rationalizes Theorem 1.3 | Statements and uses on pp. 27, 29 checked; full nonvanishing proof excluded |

Theorem 1.2 also occurs in the final assembly of fourfold log Iitaka in [Ufour], §10, pp. 48–49; its detailed use belongs to that article. Classical threefold abundance and its correction, and all external splitting/vanishing theory used for residue insertion, are not collectively certified here.

## Source guide and verification scope

[pp. 8–13][S] treat extra coefficient-one poles, residue injection, and the entire coherent lowest piece. [pp. 14–23][S] treat transverse covers, Euler action, the graph identity, finite-layer lifting, and growth. [pp. 23–29][S] treat ordinary model comparison, the whole floor, Iitaka fibres, and field transfer. These core passages were read and the main statements and listed direct inputs compared.

Pending work includes all details of the cyclic covers and split residue insertion in §2, independent reconstruction of each Hodge-filtration identification from external theory, proofs of classical lower-dimensional abundance, Appendix A, and full external proofs. Diagram arrows present the manuscript's logical connections; they do not certify those connections independently. Japanese and English text, diagrams, references, and limitations are aligned.
'''
for lang,s in [('ja',ja),('en',en)]:D.joinpath('article.'+lang+'.md').write_text(s+'\n'+refs+'\n')
def N(ja,en,math):return dict(ja=ja,en=en,math=math)
def E(ja,en,*refs):return dict(ja=ja,en=en,refs=[dict(key=k,label=l) for k,l in refs])
spec={'sources':u,'diagrams':[
{'id':'lifting','nodes':[
N('全被約台の生成性を frame 上へ移す','Move whole-support generation to the frame bundle',r'$0\ne G\sim q(K_V+C),\quad S=G_{\rm red},\quad L|_S=f^*\mathcal O(1).$'),
N('全障害群を留数で単射に入れる','Insert the full obstruction group by residues',r'$R^1g_*\mathcal O_E\hookrightarrow F_0\mathcal N=R^1h_*\omega_R(D_h),\quad\operatorname{wt}(\Omega)=a>0.$'),
N('水平 symbol と実際の Euler 作用を分ける','Separate horizontal symbol and actual Euler action',r'$\operatorname{symbol}(v_k)=0,\quad\operatorname{wt}(v_k)=a+k>0,\quad s\varepsilon=-(a+k)s.$'),
N('任意の境界関数の障害を消す','Kill the obstruction for every boundary function',r'$\delta_k(F)=0,\qquad g_*(\mathcal O_Z/I^{k+1})\twoheadrightarrow g_*(\mathcal O_Z/I^k).$'),
N('有限層を数えて周囲の切断を増やす','Count finite layers to obtain ambient section growth',r'$h^0(V,\mathcal O_V(NG))\to\infty\quad\Longrightarrow\quad\kappa(V,K_V+C)>0.$')],
'edges':[
E('循環被覆の全成分と、余分な境界上の極を残す。','Retain every cyclic-cover component and poles over the extra boundary.',('S','Lemmas 2.3, 3.1, pp. 9--13')),
E('正の重みが ample な始域を作り、水平部分を消す。','Positive weight gives an ample source, forcing the horizontal part to vanish.',('S','Lemma 3.2; Prop. 4.1, pp. 13--17'),('KS','[KS] Thm. 8.2, pp. 14--15')),
E('graph 恒等式に Euler 作用を代入し、任意の $F$ に戻る。','Use Euler action in the graph identity, then return to arbitrary $F$.',('S','(5.5), (5.11)--(5.12), pp. 18--20')),
E('有限群不変部・frame 次数0・正の twist の周期性を使う。','Use finite invariants, frame degree zero, and periodic positive twists.',('S','Lemma 5.2; Prop. 1.5, pp. 21--23'))]},
{'id':'abundance','nodes':[
N('非消滅と通常のモデルを用意する','Start from nonvanishing and ordinary minimal models',r'$D=K_X+\Delta\ \text{nef},\quad D\sim_{\mathbb Q}M\ge0,\quad\dim X\le4.$'),
N('小平次元0の非零代表元を排除する','Exclude a nonzero representative in Kodaira dimension zero',r'$\kappa(D)=0,\ M\ne0\ \Longrightarrow\ G=qM_*\ne0,\quad\operatorname{Supp}G\subset\lfloor C_*\rfloor.$'),
N('正の小平次元ではファイバーのモデルへ','For positive Kodaira dimension use fibre minimal models',r'$\kappa(D)>0:\quad L|_F\ \text{may be non-nef};\quad \pi^*D|_F\equiv0,\quad\nu(D)=\kappa(D).$'),
N('lc center 上の abundance も揃え半豊富性へ','Include abundance on lc centers and conclude semiampleness',r'$D\ \text{semiample};\qquad\kappa(D)=0\Longrightarrow D\sim_{\mathbb Q}0.\quad\textbf{Thm. 1.2}$')],
'edges':[
E('全 floor の gluing 後に図1を適用し、$\kappa=0$ の場合を終える。','Glue on the whole floor and apply diagram 1 to finish the zero case.',('S','Lemmas 6.1--6.2; Prop. 6.3, pp. 23--25'),('FG','[FG] Thm. 4.3, p. 18')),
E('次に正の場合を扱い、低次元モデルと交点数で帰着する。','Next treat the positive case using lower-dimensional models and intersections.',('S','(6.4)--(6.7), pp. 25--26')),
E('全 floor の半豊富性と nef log abundance を適用する。','Use whole-floor semiampleness and nef log abundance.',('FG','[FG] Thm. 4.2, p. 18'),('S','Prop. 6.3; Sec. 6.3, pp. 26--27'))]},
{'id':'consequences','nodes':[
N('二つの別の非消滅入力を区別する','Distinguish two separate nonvanishing inputs',r'\Tx{条件付き全次元：滑らかな標準非消滅を仮定。}{All dimensions: assume smooth canonical nonvanishing.}\\\Tx{四次元： [NV] Corollary 1.2 を入力する。}{Fourfolds: input [NV] Corollary 1.2.}'),
N('それぞれに必要な帰納法・半豊富性を適用する','Apply the respective induction or semiampleness result',r'\textbf{Thm. 1.3}: [Hash] + \Tx{有理化}{rational feasibility} + Prop. 6.3.\\ \textbf{Cor. 1.4}: [NV] Cor. 1.2 + Thm. 1.2.'),
N('元の Cartier 倍の生成性を体の間で移す','Transfer generation of the original Cartier multiple',r'$H^0(X_0,L_0)\otimes k\simeq H^0(X_k,L_k),\quad\operatorname{coker}(\mathrm{ev})=0.$')],
'edges':[
E('全次元では通常のモデルを供給。四次元では最初の切断を供給。','In all dimensions obtain ordinary models; in fourfolds obtain the first section.',('Hash','[Hash] Thm. 1.4'),('NV','[NV] Cor. 1.2, p. 2; Lemma 8.1, p. 35')),
E('忠実平坦性を使う。$\mathbb Q$-factoriality 自体の降下は不要。','Use faithful flatness; descent of global $\mathbb Q$-factoriality is unnecessary.',('S','Lemma 7.1; Cor. 7.2; proofs, pp. 28--29'))]}
]}
D.joinpath('diagrams/spec.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2)+'\n')
s={'paperId':'lifting-adjoint-sections','sourceCommit':commit,'sourceUrl':u['S'],'sha256':ms[7]['sha256'],'checkedOn':'2026-10-08','manuscriptDate':'2026-09-27','pdfPages':40,'statements':[{'result':r,'pages':[2]} for r in ['Theorem 1.1 (Q-factorial dlt, whole reduced support, no extra nef assumption)','Theorem 1.2 (complex, dimension <=4, nonvanishing assumed)','Theorem 1.3 (conditional on smooth canonical nonvanishing in every dimension)','Corollary 1.4 (adds companion nonvanishing)']]+[{'result':'Corollary 7.2','pages':[29]}],'proofPassages':[{'result':'Cover/residue construction; Lemmas 2.3, 3.1–3.2','pages':[5,6,8,9,11,12,13],'scope':'Selected construction and statements; lowest-piece local calculation read; all split/vanishing details not independently checked.'},{'result':'Proposition 4.1; Lemma 4.2; Proposition 5.1; Lemma 5.2','pages':[14,15,16,17,18,19,20,21,22,23],'scope':'Read transverse comparison, positive weight, actual Euler action, graph identity, obstruction induction and layer count.'},{'result':'Lemmas 6.1–6.2, Proposition 6.3, Section 6.3','pages':[23,24,25,26,27],'scope':'Read ordinary-model comparison, whole-floor gluing, kappa=0 and positive-kappa reductions, lc centers and applications.'},{'result':'Lemma 7.1, Corollary 7.2, completion of Theorems 1.1, 1.3 and Corollary 1.4','pages':[28,29],'scope':'Selected field descent statements and final applications read.'}],'dependencies':[],'unresolved':['Saito 1990 Theorem 2.14 / Proposition 2.15 original statements not cross-checked; graph-module filtration identifications not independently reconstructed.','All cyclic-cover/residue split details and supporting vanishing theory not independently verified.','Classical lower-dimensional abundance including corrections not rechecked in original sources.','Appendix A not investigated; external proofs not recursively verified.','Popa numbering differs: source cites published Theorem 28; accessed author PDF uses Theorem 8.2 (PDF pp.14–15).']}
for k,r,p,at,check in [('KS','Theorem 8.2 (author PDF; source cites published Theorem 28)',[14,15],'Lemma 3.2, p.13','Vanishing statement and two-term symbol-kernel consequence compared.'),('FG','Theorems 4.2, 4.3',[18],'Lemma 6.2 and Proposition 6.3, pp.24,27','Statements and exact hypotheses checked.'),('Bir','Corollary 1.6',[3],'Section 6.3, p.27','Original arXiv statement read; numbering p.3 differs from published pagination.'),('Hash','Theorem 1.4 and Conjectures 1.1–1.3',[],'Theorem 1.3 proof, p.27','arXiv v4 HTML statements read; conditional nonvanishing/models, not semiampleness.'),('NV','Corollary 1.2; Lemma 8.1',[2,35],'Corollary 1.4 proof p.29; Theorem 1.3 proof p.27','Main nonvanishing input and independent rational-feasibility input separated.')]:s['dependencies'].append(dict(abbreviation=k,sourceUrl=u[k],result=r,pages=p,usedAt=at,verification=check))
D.joinpath('sources.json').write_text(json.dumps(s,ensure_ascii=False,indent=2)+'\n')
D.joinpath('catalog-changes.md').write_text('# 本部への提案\n\n- 06→07 は二種類を区別：Cor.1.2→Cor.1.4 の四次元非消滅（07 p.29）と、独立な有理線形代数 Lemma8.1→条件付き Theorem1.3（07 p.27）。Theorems1.1–1.2へ非消滅入力の矢印を引かない。\n- Theorem1.1には全被約台の半豊富性、Q-factorial dlt、非零G、extra coefficient-one boundaryとの交わり許容を保持する。\n- 原典[28]のTheorem28に対し、今回取得したPopa著者PDFはTheorem8.2（PDF pp.14–15）。引用版の番号体系を統一編集で確認する。\n- 本文p.29の見出しは “Proof of Theorem 1.4” だが、主結果はCorollary1.4。本記事はCorollary表記を使う。\n')
