from pathlib import Path
import json,shutil
A=Path(__file__).resolve().parent;D=A/'diagrams';D.mkdir(exist_ok=True)
base='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/'
urls={'U4':base+'Uniform-effective-log-Iitaka-fibrations-for-fourfolds-September-26-2026/paper.pdf','RD':base+'Relative-denominators-and-effective-systems-for-log-Calabi-Yau-fibrations-September-27-2026/paper.pdf','SL':base+'Lifting-sections-from-the-reduced-support-of-an-adjoint-September-27-2026/paper.pdf','LA':base+'Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf','JL':'https://arxiv.org/pdf/2002.11928v1','Xu':'https://arxiv.org/pdf/1905.00297v2','CT':'https://arxiv.org/pdf/2011.02236v2'}
ja=r'''# 四次元の標準指数から有効 log Iitaka 系へ

Uniform effective log Iitaka fibrations for fourfolds — 2026年9月26日版、52頁。公式カタログ034内の掲載順13、記事ID `effective-log-iitaka-fourfolds`。

本稿は、境界なしklt四次元多様体の標準指数を一様化し、それを有限有理係数のlc対の有効log Iitaka系へ組み込む。指数の核心は被覆上の局所正値性と対角積のjet評価の矛盾であり、最終的な一様次数には定性的非消滅・半豊富モデル・相対分母の三つの入力を使う。

> AI生成の概説初稿。以下の定理は著者の主張であり、編集側が独立に証明を認定したものではない。証明本文の読解範囲と未確認点を末尾に記す。数学的な利用には原典を確認されたい。

## 主結果（原典順）

**Theorem 1.1（[U4, p. 1][U4]）.** 正規射影的klt複素四次元多様体 $X$ で $K_X\sim_{\mathbb Q}0$ を満たすものすべてに対し、共通の正整数 $N_4$ が存在して

$$N_4K_X\sim 0.$$

ここでは整数主Weil因子としての自明化をいう。境界を伴わない定理であり、$X$ の滑らかさは仮定しない。

**Theorem 1.2（[U4, p. 2][U4]）.** 有限集合 $\Phi\subset[0,1]\cap\mathbb Q$ を固定する。正規整射影的複素四次元多様体 $X$ と、有効有理Weil因子 $\Delta$ で非零係数が $\Phi$ に属し、$(X,\Delta)$ がlc、$D=K_X+\Delta$ が有理Cartierかつpseudo-effectiveであるものに対して、$\Phi$ のみに依存する正整数 $m$ が存在し、完全系 $|\lfloor mD\rfloor|$ は空でなく、その切断比が埋め込まれた飯高体 $K(D)\subset\mathbb C(X)$ の全体を生成する。同じ $m$ が標準因子のすべての代表に対して使える。

$\mathcal O_X(\lfloor mD\rfloor)$ は階数1反射的因子層であり、$mD$ がCartierになるという追加条件はない。$\kappa(D)=4$ では写像の双有理性を、$\kappa(D)=0$ では一様次数での非消滅を含む。係数条件は**有限有理集合**であり、任意のDCC集合や実係数への拡張はこの主張に含めない。

## Theorem 1.1：構造的帰着と、残る指数の排除

![標準指数の構造的帰着](diagrams/reduction.ja.svg)

図の最初の帰着は、有限準エタール被覆上の分解と体積形式の指標を用いる。積・アーベル部分から来るケースを分離すると、残る単一の非平坦四次元因子には「正の次元の真の有理像は有理連結」という制約が付く（[U4, Proposition 4.1–Lemma 4.2, pp. 10–14][U4]）。非canonicalの場合、解消上の標準因子がpseudo-effectiveでないことから単線織性を得て、MRC商と有理像の制約によって有理連結性へ帰着する。ここで使う非pseudo-effectiveから単線織性への接続は原典のCorollary 4.4（p. 15）に従う。

canonicalの場合は指数を変えないcrepant terminalizationを取る。もし有効Weil因子 $A$ に $1\leq\kappa(A)\leq3$ のものがあれば、小さい $\delta>0$ に対する $(V,\delta A)$ の半豊富モデルを使う。ただし、このMMPで**境界なし標準因子のcrepancyを別に確認する**。$rK_V=\operatorname{Div}(h)$ を各段階へ押し出すことで指数を保ち、相対分母定理は変動する係数 $\delta$ ではなく $(V',0)$ に適用する。得られる有理連結な底上で [RD, Proposition 7.1, p. 17][RD] が一般化adjointの整数主倍数を与える。したがって定数に $\delta$ の分母は入らない（[U4, Lemma 4.6, pp. 15–16][U4]）。

残るterminal四次元多様体とその標準巡回被覆では、関連する中間的同変有理ファイブレーションの滑らかな幾何学的生成ファイバーが一般型になる。Lemma 4.7（pp. 16–17）は、降下した底から引いた因子のbignessとterminal discrepancyを使い、ファイバー上の例外的部分から標準因子のbignessを導く。この条件が次の一様評価の仮定である。

![指数の増大と有理移送の矛盾](diagrams/transport.ja.svg)

$\gamma(P;V)$ を十分可除な次数で測った一般点の切断消滅次数／次数の上限とする。Theorem 6.1（p. 23）のscalar評価は、同変ファイブレーションについて上記の一般型条件を仮定する。正規化した偏極 $1\leq L^4\leq2$ と指数 $r$ の標準巡回被覆 $\pi:Y\to V$ に適用すると、$\varepsilon(L)\geq c$ と $\varepsilon(\pi^*L)\geq cr^{1/4}$ が得られる。

一方、$Z_t=Y^t/\mu_{r,\mathrm{diag}}$ 上の外積和偏極 $P_t$ について、Proposition 7.1（pp. 33–42）は $\varepsilon(P_t)\leq Ct^2$ を与える。証明では、標数 $p$ で通常jetの余剰から一般点で全階数の行列を作り、Frobenius対角上では階数が高々 $R/4$ と評価する。非零最大小行列式の対角上の消滅次数は少なくとも $3R/4$ となるが、各スロットのscalar評価とLemma 7.4によりそれ未満となり矛盾する。ここでLAの§9は方法の先行例であり、そのabundance結論をこのjet計算の入力にしているわけではない。

Proposition 8.1（pp. 42–46）は二つのSeshadri評価を鎖の葉に適用する。$2\leq t\leq T$ の有限個の積を先に固定し、被覆次数 $r$ を大きくすると、各葉から一つのスロットへの射影が生成有限になり、葉の次元は $1$ から $4$ に入る。葉の次数は $KT^8$ 以下だが、同じ次元の葉の間の忘却写像がすべて次数2以上なら次数が指数的に増える。従ってどこかの忘却写像は次数1となる。

次数1は必要な強さである。これは最後の座標の評価を有限対応から有理写像へ変え、接空間の移送と局所流を有理双自己写像へ変換する。正次元の流から非可算個の双自己写像が生じ、Lemma 8.2（pp. 46–47）の $\operatorname{Bir}(V)$ の可算性に矛盾する。後者は滑らかなモデルのirregularityゼロを用いる。§9（pp. 47–48）はこれで指数の非有界列を排除し、全ケースの指数の最小公倍数を取る。

鎖の商・射影整合性・次数評価（Lemmas 5.1, 5.4、Corollary 5.2）と追跡補題（Lemmas 6.3–6.4）は任意次元の道具として述べられる。これを、低次元ファイバーの体積評価を使う**四次元のTheorem 6.1や主定理**と同一視しない。

## Theorem 1.2：定性的なモデルから一様な完全系へ

![全次数の比較と一様Iitaka次数](diagrams/iitaka.ja.svg)

最初の非消滅は [LA, Theorems 11.1, 1.1][LA] による良いモデルと半豊富性から得る。この段階の非零切断の次数は入力に依存し、一様ではない（[U4, §10, p. 48][U4]）。続いてProposition 2.2（pp. 6–7）はcrepant dlt modification、四次元flip停止、そして [SL, Theorem 1.2, p. 2][SL] の非消滅後の半豊富性を用い、$\Phi'=\Phi\cup\{1\}$ を係数集合とするモデル $(X',\Delta')$ を作る。

全整数次数で成立する比較は

$$H^0\!\left(X,\mathcal O_X(\lfloor kD\rfloor)\right)=H^0\!\left(X',\mathcal O_{X'}(\lfloor kD'\rfloor)\right)\quad(k\geq0).$$

これは原典の式(2.1)であり、式(2.2)の極の不等式 $\operatorname{Div}(v)+kD\geq0$ と、共通解消上の有効例外差で確認する。特定のCartier倍数でだけ成り立つ比較では不十分である。半豊富収縮 $f:X'\to Z$ に対して $D'\sim_{\mathbb Q}f^*A$、$A$ はampleであり、収縮の相対代数閉性によってすべての切断比は $\mathbb C(Z)$ に入る。

$\dim Z>0$ では [RD, Theorem 1.1, p. 2][RD] が固定分母の正確な標準束公式を与え、[RD, Proposition 6.1, pp. 15–17][RD] が一様次数の**すべての正倍数**で完全な底の体を回復する。U4ではTheorem 3.1とProposition 3.2（p. 8）として使う。$\dim Z=4$ の双有理収縮も含む。

$Z$ が点なら $D'\sim_{\mathbb Q}0$ である。非kltは [JL, Corollary 1.7, p. 2][JL]、kltかつ $\Delta'\neq0$ は [Xu, Theorem 1.14, p. 3][Xu]、kltかつ $\Delta'=0$ は本稿のTheorem 1.1で指数を抑える。Xuのhyperstandard係数条件には $\{1-b:b\in\Phi'\}$ と分母1で有限係数集合を埋め込む。これらと正次元の次数の共通倍数を取れるのは、後者がすべての正倍数を許すためである。最後に式(2.1)で元の完全系へ戻す。

標準因子を $K_X+\operatorname{Div}(h)$ に替えると丸めた因子は $m\operatorname{Div}(h)$ だけ変わる。切断の $h^{-m}$ 倍が系を同定し、比を変えないので、一様次数は代表に依存しない（[U4, p. 49][U4]）。

## 直接入力と使用箇所

- **[LA]** Theorem 11.1（p. 73）、Theorem 1.1（p. 1）：U4 §10（p. 48）の定性的非消滅。§7のFrobenius法への参照は別の方法上の関係。
- **[SL]** Theorem 1.2（p. 2）：U4 Theorem 2.1・Proposition 2.2（pp. 6–7）のnefモデルの半豊富性。Fourfold nonvanishingの主定理をこの命題の入力として追加しない。
- **[RD]** Theorem 1.1、Propositions 6.1, 7.1（pp. 2, 15, 17）：U4 §3（pp. 8–9）。前二者は有効系、最後はLemma 4.6の有理連結な底上の指数制御。
- **[CT]** Theorem 1.1（arXiv v2, p. 2）：pseudo-effectiveなNQC lc一般化四次元対のflip停止。U4 Proposition 2.2ではnefデータゼロとして適用する。定理の記述と適用条件を照合した。
- **[JL] / [Xu]** 上記指数定理：U4 §10（p. 49）の底が点の二ケース。原典の記述を照合したが、それらの証明は検証対象外。

## 原典・確認範囲

出典は [U4の固定版PDF][U4]（commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`、SHA-256は `sources.json`）。頁はPDFの印刷頁。GitHubのPDF表示では頁位置が保持されないため、リンク先で記載頁・番号へ移動する。

編集側は主定理、§2の全次数比較、§3の入力、§4の中間ファイブレーションによる帰着、Theorem 6.1の記述、§7の設定と最終行列式比較、§8の葉の次数・次数1忘却・有理流の接続、§§9–10の組立てを読んだ。RD・SL・LAの直接使用定理と上記三つの既存指数／停止定理の記述を照合した。

**未確認**：§4の分解・holonomyの全補助結果の原典照合、§6のscalar評価の全局所計算、§7のspread・半連続性・Frobenius束の全構成、Matsumura等の外部定理の証明。これらの接続を独立に検証済みとはしない。図と数式の生成・日英整合性を確認した範囲は `status.md` に記録する。サイト組込み後の画面確認は本部作業として残る。
'''
en=r'''# From canonical indices to effective log Iitaka systems in dimension four

Uniform effective log Iitaka fibrations for fourfolds — manuscript dated September 26, 2026, 52 pages. Position 13 within official catalog 034; article ID `effective-log-iitaka-fourfolds`.

The manuscript bounds canonical indices of boundary-free klt fourfolds and incorporates that bound into effective log Iitaka systems for lc pairs with finite rational coefficients. The index argument contrasts local positivity on covers with jet estimates on diagonal products. The final uniform degree combines qualitative nonvanishing, semiample models and relative denominators.

> AI-generated exposition draft. The theorems below are the authors' claims, not independent certification by the editors. The passages read and unresolved checks are specified below. Consult the original manuscript before mathematical use.

## Main results, in source order

**Theorem 1.1 ([U4, p. 1][U4]).** There is a positive integer $N_4$ such that every normal projective klt complex fourfold $X$ with $K_X\sim_{\mathbb Q}0$ satisfies

$$N_4K_X\sim 0.$$

This is a trivialization as an integral principal Weil divisor. The theorem has no boundary and does not assume that $X$ is smooth.

**Theorem 1.2 ([U4, p. 2][U4]).** Fix a finite set $\Phi\subset[0,1]\cap\mathbb Q$. There is a positive integer $m$ depending only on $\Phi$ such that, for every normal integral projective complex fourfold $X$ and effective rational Weil divisor $\Delta$ with nonzero coefficients in $\Phi$, if $(X,\Delta)$ is lc and $D=K_X+\Delta$ is rational Cartier and pseudo-effective, the complete system $|\lfloor mD\rfloor|$ is nonempty and its section ratios generate the entire embedded Iitaka field $K(D)\subset\mathbb C(X)$. The same $m$ works for every canonical representative.

Here $\mathcal O_X(\lfloor mD\rfloor)$ is a rank-one reflexive divisorial sheaf; there is no additional requirement that $mD$ be Cartier. The conclusion includes birationality when $\kappa(D)=4$ and nonvanishing in a uniform degree when $\kappa(D)=0$. The coefficient hypothesis is a **finite rational set**, not an arbitrary DCC set or real coefficients.

## Theorem 1.1: structural reduction and the remaining index obstruction

![Structural reduction of the canonical index](diagrams/reduction.en.svg)

The first reduction uses a decomposition on a finite quasi-étale cover and characters on volume forms. After separating product and abelian cases, the remaining single nonflat four-dimensional factor has the property that its positive-dimensional proper rational images are rationally connected ([U4, Proposition 4.1–Lemma 4.2, pp. 10–14][U4]). In the noncanonical case the canonical divisor on a resolution is not pseudo-effective. Uniruledness, the MRC quotient, and the restriction on rational images then imply rational connectedness; the passage from non-pseudo-effectivity to uniruledness follows Corollary 4.4 (p. 15).

In the canonical case a crepant terminalization preserves the index. If an effective Weil divisor $A$ has $1\leq\kappa(A)\leq3$, use a semiample model for $(V,\delta A)$ with $\delta>0$ small. The proof checks **crepancy for the boundary-free canonical divisor separately** along this MMP. Pushing forward $rK_V=\operatorname{Div}(h)$ preserves the index, and the relative denominator theorem is applied to $(V',0)$, not to the varying coefficient $\delta$. On the rationally connected base, [RD, Proposition 7.1, p. 17][RD] gives an integral principal multiple of the generalized adjoint. The denominator of $\delta$ therefore does not enter the constant ([U4, Lemma 4.6, pp. 15–16][U4]).

For the remaining terminal fourfold and its canonical cyclic cover, the relevant intermediate equivariant rational fibrations have general-type smooth geometric generic fibres. Lemma 4.7 (pp. 16–17) uses bigness of a divisor pulled back from a descended base and positive terminal discrepancies to make the canonical divisor of the fibre big. This is the hypothesis needed for the next uniform estimates.

![Growing indices contradict rational transport](diagrams/transport.en.svg)

Let $\gamma(P;V)$ be the supremum of section order divided by degree at a general point, using sufficiently divisible degrees. The scalar bounds of Theorem 6.1 (p. 23) assume the preceding general-type condition on equivariant fibrations. Applied to a normalized polarization $1\leq L^4\leq2$ and the canonical cyclic cover $\pi:Y\to V$ of index $r$, they give $\varepsilon(L)\geq c$ and $\varepsilon(\pi^*L)\geq cr^{1/4}$.

In contrast, Proposition 7.1 (pp. 33–42) bounds $\varepsilon(P_t)\leq Ct^2$ for the external-sum polarization $P_t$ on $Z_t=Y^t/\mu_{r,\mathrm{diag}}$. In characteristic $p$, a surplus of ordinary jets produces a matrix of full rank at a general point, but of rank at most $R/4$ on the Frobenius diagonal. A nonzero maximal minor must vanish there to order at least $3R/4$; slotwise scalar bounds and Lemma 7.4 give a strictly smaller order. LA §9 is a methodological predecessor here; its abundance conclusion is not an input to this jet calculation.

Proposition 8.1 (pp. 42–46) applies the two Seshadri estimates to chain leaves. Fix finitely many products $2\leq t\leq T$ before increasing the covering order $r$. Each leaf then maps generically finitely to any single slot, so its dimension lies between $1$ and $4$. Leaf degrees are bounded by $KT^8$. If every forgetting map along a constant-dimensional stretch had degree at least two, the degrees would grow exponentially. Some forgetting map must consequently have degree one.

Degree one is essential: it converts evaluation of the missing coordinate from a finite correspondence into a rational map. Tangent transport and local flows then produce birational self-maps. A positive-dimensional flow gives uncountably many such maps, contradicting Lemma 8.2 (pp. 46–47), which proves countability of $\operatorname{Bir}(V)$ using irregularity zero on a smooth model. Section 9 (pp. 47–48) excludes unbounded index sequences and takes a common multiple of the bounded orders in all cases.

The chain quotient, projection compatibility and degree estimates (Lemmas 5.1, 5.4 and Corollary 5.2), and the tracking lemmas (Lemmas 6.3–6.4), are stated in arbitrary dimension. They must be distinguished from **the four-dimensional Theorem 6.1 and main theorems**, which use volume estimates on lower-dimensional fibres.

## Theorem 1.2: from qualitative models to uniform complete systems

![All-degree comparison and the uniform Iitaka degree](diagrams/iitaka.en.svg)

Initial nonvanishing comes from good models and semiampleness in [LA, Theorems 11.1, 1.1][LA]. The degree of the resulting nonzero section depends on the input and is not yet uniform ([U4, §10, p. 48][U4]). Proposition 2.2 (pp. 6–7) next uses a crepant dlt modification, termination of fourfold flips, and abundance after nonvanishing from [SL, Theorem 1.2, p. 2][SL] to obtain a model $(X',\Delta')$ with coefficient set $\Phi'=\Phi\cup\{1\}$.

The comparison in every integer degree is

$$H^0\!\left(X,\mathcal O_X(\lfloor kD\rfloor)\right)=H^0\!\left(X',\mathcal O_{X'}(\lfloor kD'\rfloor)\right)\quad(k\geq0).$$

This is equation (2.1), checked through the pole inequality $\operatorname{Div}(v)+kD\geq0$ in (2.2) and an effective exceptional difference on a common resolution. A comparison only in selected Cartier degrees would not suffice. For the semiample contraction $f:X'\to Z$, one has $D'\sim_{\mathbb Q}f^*A$ with $A$ ample. Relative algebraic closedness for the contraction places every section ratio in $\mathbb C(Z)$.

When $\dim Z>0$, [RD, Theorem 1.1, p. 2][RD] gives an exact canonical bundle formula with fixed denominators, and [RD, Proposition 6.1, pp. 15–17][RD] recovers the entire base field in **every positive multiple** of a uniform degree. These appear as U4 Theorem 3.1 and Proposition 3.2 (p. 8). The birational contraction case $\dim Z=4$ is included.

When $Z$ is a point, $D'\sim_{\mathbb Q}0$. The index is bounded by [JL, Corollary 1.7, p. 2][JL] in the non-klt case, by [Xu, Theorem 1.14, p. 3][Xu] when the pair is klt with $\Delta'\neq0$, and by the present Theorem 1.1 when it is klt with $\Delta'=0$. Xu's hyperstandard convention includes the given finite set by using $\{1-b:b\in\Phi'\}$ and denominator one. Take a common multiple of these degrees and the positive-base degree; the latter permits this because its conclusion holds for every positive multiple. Equation (2.1) returns to the original complete systems.

Replacing the canonical divisor by $K_X+\operatorname{Div}(h)$ changes the floor divisor by $m\operatorname{Div}(h)$. Multiplication of sections by $h^{-m}$ identifies the systems without changing their ratios, so the uniform degree is independent of the representative ([U4, p. 49][U4]).

## Direct inputs and their uses

- **[LA]** Theorem 11.1 (p. 73), Theorem 1.1 (p. 1): qualitative nonvanishing in U4 §10 (p. 48). The reference to its Frobenius method in §7 is a separate methodological relation.
- **[SL]** Theorem 1.2 (p. 2): semiampleness of the nef model in U4 Theorem 2.1 and Proposition 2.2 (pp. 6–7). The main Fourfold nonvanishing theorem is not added as an input to that proposition.
- **[RD]** Theorem 1.1, Propositions 6.1, 7.1 (pp. 2, 15, 17): U4 §3 (pp. 8–9). The first two supply effective systems; the last controls the generalized index over the rationally connected base in Lemma 4.6.
- **[CT]** Theorem 1.1 (arXiv v2, p. 2): flip termination for pseudo-effective NQC lc generalized fourfold pairs. Proposition 2.2 applies it with zero nef data. Its statement and applicability were compared.
- **[JL] / [Xu]** The index statements above: the two point-base cases in U4 §10 (p. 49). Their original statements were compared; their proofs are outside this check.

## Sources and verification scope

The source is the [fixed U4 PDF][U4], commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`; its SHA-256 is recorded in `sources.json`. Page references use printed PDF pages. GitHub's PDF viewer does not retain page positions, so use the displayed page and result numbers after following a link.

The editors read the main statements, all-degree comparison in §2, inputs in §3, the intermediate-fibration reductions in §4, the statement of Theorem 6.1, the setup and final determinant comparison in §7, the leaf-degree, degree-one forgetting and rational-flow connections in §8, and the assembly in §§9–10. The directly used RD, SL and LA statements and the three existing index/termination statements above were compared with their sources.

**Unresolved:** original-source checking of all decomposition and holonomy inputs in §4; all local calculations in the scalar estimates of §6; all spread, semicontinuity and Frobenius-bundle constructions in §7; proofs of external results including Matsumura's theorem. These connections are not claimed to be independently verified. Diagram generation and bilingual formula checks are recorded in `status.md`. Screen verification after site integration remains for the central editor.
'''
for l,t in [('ja',ja),('en',en)]:
 (A/f'article.{l}.md').write_text(t+'\n'+'\n'.join(f'[{k}]: {v}' for k,v in urls.items())+'\n')
def n(ja,en,math):return dict(ja=ja,en=en,math='$'+math+'$')
def e(ja,en,*refs):return dict(ja=ja,en=en,refs=[{'key':a,'label':b} for a,b in refs])
spec={'sources':urls,'diagrams':[
{'id':'reduction','nodes':[n('境界なし標準指数','Boundary-free canonical index',r'K_X\sim_{\mathbb Q}0,\qquad \dim X=4'),n('構造で分離した残余の場合','Residual structural case',r'V\text{ terminal},\quad q(\widetilde V)=0,\quad K_V\sim_{\mathbb Q}0'),n('中間因子があれば指数を制御','An intermediate divisor bounds the index',r'1\leq\kappa(A)\leq3\quad\Longrightarrow\quad N_{\mathrm{mov}}K_V\sim0'),n('残余の同変ファイバーは一般型','Residual equivariant fibres are of general type',r'\pi:Y\to V,\quad r=\operatorname{ord}(K_V)')], 'edges':[e('積・アーベルの場合と非canonicalの場合を処理。残りをcrepantにterminal化する。','Handle product, abelian and noncanonical cases; take a crepant terminalization in the remainder.',('U4','U4 Prop. 4.1--Lem. 4.5, pp. 10--15')),e('小さい境界のMMPで標準指数を保ち、境界ゼロで相対分母を適用。RCな底の指数を抑える。','Preserve the canonical index along the small-boundary MMP; apply denominators with zero boundary and bound the RC-base index.',('U4','U4 Lem. 4.6, pp. 15--16'),('RD','RD Thm. 1.1 / Prop. 7.1, pp. 2, 17')),e('中間因子のない場合に限定。例外因子のbignessとterminal discrepancyをファイバー上へ制限する。','Restrict to the case without an intermediate divisor; use big exceptional divisors and terminal discrepancies on fibres.',('U4','U4 Lem. 4.7, pp. 16--17'))]},
{'id':'transport','nodes':[n('指数が増大する残余列を仮定','Assume an unbounded residual index sequence',r'r\to\infty,\quad 1\leq L^4\leq2'),n('被覆上の下界と対角積上の上界','Lower bounds on covers; upper bounds on diagonal products',r'\varepsilon(L)\geq c,\quad\varepsilon(\pi^*L)\geq cr^{1/4},\quad\varepsilon(P_t)\leq Ct^2'),n('葉の次数と次数1の忘却','Leaf degrees force degree-one forgetting',r'1\leq h_t\leq4,\quad D_t\leq KT^8,\quad W_k\dashrightarrow W_{k-1}\text{ birational}'),n('有理評価と局所流による矛盾','Rational evaluation and local flows give a contradiction',r'\{E_z\}\subset\operatorname{Bir}(V)\quad\Longrightarrow\quad r\text{ bounded}')], 'edges':[e('一般型ファイバー条件からscalar評価。Frobenius対角の階数欠損で二次上界を得る。','The general-type fibre condition gives scalar estimates; rank deficit on the Frobenius diagonal gives the quadratic bound.',('U4','U4 Thm. 6.1, p. 23; Prop. 7.1, pp. 33--42')),e('先に積の個数を固定。鎖の次数を多項式で抑え、忘却次数の指数増大を排除する。','Fix the number of products first; polynomial degree bounds exclude exponential growth of forgetting degrees.',('U4','U4 Lem. 5.4, p. 21; Prop. 8.1, pp. 42--45')),e('次数1が有理評価を与える。非可算個の局所流と双自己写像群の可算性が衝突する。','Degree one gives rational evaluation; uncountably many local flows contradict countability of the birational group.',('U4','U4 Prop. 8.1 / Lem. 8.2, pp. 45--47'))]},
{'id':'iitaka','nodes':[n('固定有限係数のlc四次元対','An lc fourfold pair with fixed finite coefficients',r'D=K_X+\Delta\ \text{pseudo-effective},\quad\operatorname{coeff}^+(\Delta)\subset\Phi'),n('全次数の切断を保つ半豊富モデル','A semiample model preserving sections in every degree',r"D'\sim_{\mathbb Q}f^*A,\quad A\text{ ample},\quad\Phi'=\Phi\cup\{1\}"),n('底の次元で一様次数を選択','Choose uniform degrees by base dimension',r'\dim Z>0:\ m_+;\qquad\dim Z=0:\ m_{\mathrm{nklt}},m_{\Delta\ne0},N_4'),n('元の完全系で飯高体を回復','Recover the Iitaka field with the original complete system',r'\mathbb C\bigl(s_i/s_j:\ s_i,s_j\in H^0(X,\mathcal O_X(\lfloor mD\rfloor))\bigr)=K(D)')], 'edges':[e('LAで定性的非消滅。SLでnefモデルを半豊富にし、極の不等式で全整数次数を比較する。','LA supplies qualitative nonvanishing; SL makes the nef model semiample, and pole inequalities compare every integer degree.',('LA','LA Thm. 11.1, p. 73'),('SL','SL Thm. 1.2, p. 2'),('U4','U4 Prop. 2.2, pp. 6--7')),e('正次元はRDの有効系。点の場合は非klt、境界ありklt、境界なしkltを分離する。','Use RD for a positive-dimensional base; separate non-klt, klt with boundary, and boundary-free klt over a point.',('RD','RD Prop. 6.1, p. 15'),('JL','JL Cor. 1.7, p. 2'),('Xu','Xu Thm. 1.14, p. 3'),('U4','U4 Thm. 1.1, p. 1')),e('共通倍数を取り、すべての正倍数での結論と全次数比較を使う。標準代表の変更は比を保つ。','Take a common multiple and use the every-multiple conclusion and all-degree comparison; canonical representatives preserve ratios.',('U4','U4 eq. (2.1), p. 6; Sect. 10, pp. 48--49'))]}
]}
(D/'spec.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2)+'\n')
for f in ['preamble.tex','render.py','check.py']:shutil.copyfile(A.parent/'lifting-adjoint-sections'/'diagrams'/f,D/f)
sources={'paperId':A.name,'sourceCommit':'adc7f1241b42e322a6451854ab7e4b4c146bf78a','sourceUrl':urls['U4'],'sha256':'8036215575dbf6199927ae50571f50d8e89928b091dc07fa723fec2cbfe5a41e','checkedOn':'2026-10-08','manuscriptDate':'2026-09-26','pdfPages':52,'statements':[{'result':'Theorem 1.1: boundary-free klt complex fourfold index','pages':[1]},{'result':'Theorem 1.2: finite rational coefficients, pseudo-effective lc complex fourfold, full field in rounded degree','pages':[2]}],'proofPassages':[{'pages':[6,7,8,9],'scope':'All-degree divisorial comparison and three RD inputs.'},{'pages':[15,16,17],'scope':'Noncanonical RC reduction, terminalization, moving-divisor and general-type-fibre reductions; earlier decomposition only selected passages.'},{'pages':[18,20,21,23,25,27],'scope':'Statements of arbitrary-dimensional chain/tracking tools and four-dimensional scalar theorem; not all scalar proof calculations.'},{'pages':[33,34,41,42],'scope':'Frobenius setup and final determinant comparison; intervening technical construction not fully verified.'},{'pages':[42,43,44,45,46,47,48,49],'scope':'Many-factor leaf degrees, birational forgetting, rational flows, countability, main theorem assembly.'}],'dependencies':[{'abbreviation':k,'sourceUrl':urls[k],'result':r,'pages':p,'usedAt':u,'verification':'Statement and application compared; external proof not recursively verified.'} for k,r,p,u in [('LA','Theorems 1.1, 11.1; Proposition 2.5',[1,73],'Section 10 p.48 qualitative nonvanishing'),('SL','Theorem 1.2',[2],'Theorem 2.1 / Proposition 2.2 pp.6–7'),('RD','Theorem 1.1; Propositions 6.1,7.1',[2,15,17],'Section 3 pp.8–9; Lemma 4.6; Section 10'),('CT','Theorem 1.1',[2],'Proposition 2.2 p.6 with zero nef data'),('JL','Corollary 1.7',[2],'Section 10 p.49 non-klt point-base case'),('Xu','Conjecture 1.1; Theorem 1.14',[2,3],'Section 10 p.49 klt nonzero-boundary point-base case')]],'unresolved':['Original statements of all structural/holonomy inputs not cross-checked.','Full Section 6 scalar proof calculations and Section 7 spread/semicontinuity/Frobenius constructions not independently verified.','Original Matsumura and other external proof checks are outside scope.','Website integration/rendering remains for central editor.']}
(A/'sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2)+'\n')
(A/'catalog-changes.md').write_text('''# カタログ反映案（共通ファイルは未変更）
- 役割: 境界なしklt四次元標準指数の一様化と、有限有理係数lc四次元対の丸めた完全Iitaka系。
- LA Thm.11.1 + Thm.1.1 → U4 §10 p.48: 定性的非消滅。LA §9 → U4 §7は方法上の先行例として別分類。
- Supported lifting Thm.1.2 → U4 Thm.2.1 / Prop.2.2 pp.6–7: 非消滅後の半豊富モデル。
- Relative denominators Thm.1.1 / Prop.6.1 → U4 §3, §10: 固定分母と全底体を回復する有効系。
- Relative denominators Prop.7.1 → U4 Lem.4.6 pp.15–16: RCな底上の一般化adjointの主倍数。
- U4 Lem.5.1, Cor.5.2, Lem.5.4, Lem.6.3–6.4 → Uniform Pluricanonical Iitaka: 任意次元の鎖・追跡の直接入力。四次元主定理を任意次元へ流用する辺にしない。
- 辺の状態は引用・適用関係の確認。入力定理の証明全体の独立検証とは区別する。未調査の他の辺は依存なしと判定しない。
''')
