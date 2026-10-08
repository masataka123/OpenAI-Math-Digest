# Arithmetic Stein degrees of log Calabi–Yau pairs

**Source**: OpenAI, *Arithmetic Stein-degree bounds for log Calabi–Yau pairs*, September 25, 2026 version, 15 pages. Position 12 within Catalog 034; internal ID `arithmetic-stein-degree`. Source commit: `adc7f1241b42e322a6451854ab7e4b4c146bf78a`.

> AI-generated exposition. This article presents the manuscript's claims and proof strategy; it does not certify the entire proof. Check important statements and arguments in the [original manuscript][SD].

The manuscript bounds the degree of the constant field of a boundary component using only the ambient dimension and a positive lower bound for its coefficient. Its proof combines induction through Mori fibre spaces with two additional arguments: converting geometric Fano boundedness into arithmetic bounds on valuation orbits, and making a vertical component accessible to divisorial adjunction.

## Main results

### Theorem 1.1 ([SD], p. 1)

Fix an integer $d\ge1$ and a real number $t>0$. Let $(X,B)$ be a projective lc $\mathbb Q$-pair over any characteristic-zero field $k$, with $X$ normal and integral, $B\ge0$, and

$$
\dim X=d,\qquad H^0(X,\mathcal O_X)=k,\qquad K_X+B\sim_{\mathbb Q}0.
$$

If $S$ is a prime component with $\operatorname{coeff}_S B\ge t$, and $k_S$ is the relative algebraic closure of $k$ in $k(S)$, there is an integer $N(d,t)$ depending only on $d,t$ such that

$$
c(S/k):=[k_S:k]\le N(d,t).
$$

For the normalization $S^\nu$, this implies

$$
\operatorname{sdeg}(S/\operatorname{Spec}k)
=\dim_kH^0(S,\mathcal O_S)
\le\dim_kH^0(S^\nu,\mathcal O_{S^\nu})=c(S/k)\le N(d,t).
$$

This is the contraction-to-a-point statement for ordinary pairs. It is not a statement for generalized pairs or arbitrary relative Stein degrees. The case $t>1$ is vacuous; no fixed coefficient set is assumed.

### Proposition 3.5 (arithmetic input to the proof; [SD], pp. 6–7)

Fix $q\ge1$, $\epsilon>0$, and $n\ge1$. Let $Q/k$ be a normal geometrically integral projective $\epsilon$-lc Fano variety of dimension $q$, and assume $(Q,\Lambda)$ is lc, $\Lambda\ge0$, and $n(K_Q+\Lambda)\sim0$. Every divisorial valuation with $a(v,Q,\Lambda)<1$ has constant-field degree bounded by $A(q,\epsilon,n)$. The valuation need not survive as a divisor on $Q$.

## Theorem 1.1: two MMPs and the resulting cases

![Induction for the main theorem](diagrams/induction.en.svg)

Lemma 2.1 (pp. 2–3) identifies $c(S/k)$ with the number of geometric components and makes it birationally invariant. Over a geometrically integral base, a horizontal component satisfies $c(S/k)\le c(S_\eta/k(Z))$. The condition $H^0(\mathcal O_X)=k$ supplies the required control of constants on the base and generic fibre of a contraction.

For $d=1$, $\deg B=2$ gives $tc(S/k)\le2$. In higher dimension, Lemma 4.1 produces a $\mathbb Q$-factorial klt model with effective crepant boundary. Fix a rational number $0<b=b(t)<t$. The $S$-positive MMP in Lemma 4.2 makes $S_1$ relatively ample. If the base has positive dimension, $S_1$ is horizontal and induction on the generic fibre applies immediately.

Otherwise $X_1$ is Fano. Lemma 3.1 descends a geometric bounded complement by selecting a general member of a linear system defined over $k$. It gives $C_1\ge bS_1$ and $n(K_{X_1}+C_1)\sim0$, where $n=n(d,b)$. Discrepancies lie in $\frac1n\mathbb Z$, so every valuation with $a(v,X_1,0)<1/n$ is an lc place of $(X_1,C_1)$. Extracting these valuations and running a $K$-MMP yields an $\epsilon=1/n$-lc Mori fibre space $X_3\to Z$. A zero-dimensional base is handled by Proposition 3.5. Over a positive-dimensional base, recover the original valuation as a prime $P$; if it is horizontal, use generic-fibre induction. The vertical case is treated in the third diagram (§§5.2–5.4, pp. 11–12).

## Proposition 3.5: from geometric boundedness to arithmetic orbits

![Bounding Galois orbits of valuations](diagrams/orbits.en.svg)

BAB gives a bounded very ample line bundle $L$ over $\bar k$, rather than an embedding over $k$. The manuscript embeds the Picard group into a lattice of bounded rank, bounds its finite Galois image, and chooses a bounded extension $F/k$ fixing the class of $L$. With $r=h^0(L)$, the scalar descent obstruction cancels in

$$
L^{\otimes r}\otimes\bigl(\det H^0(L)\bigr)^{-1}.
$$

This descends a bounded very ample bundle to $Q_F$. Since $n\Lambda$ is integral, the degree of $\operatorname{Supp}\Lambda$ is bounded as well, so Lemma 3.4 supplies a bounded resolution.

Let $H$ be the reduced SNC divisor containing the boundary on this resolution. If $a(v,Q,\Lambda)<1$, then $a(v,W_{\bar k},H)$ is a nonnegative integer smaller than one, hence zero. Lemma 3.2 determines the valuation uniquely from its centre stratum and positive integral weights. The Galois subgroup fixing all components and strata therefore fixes every such valuation. If there are at most $M$ components and strata, each orbit has size at most $[F:k]M!$. The argument bounds individual orbits, not the total number of these valuations (pp. 6–7).

## The vertical case: intersect a horizontal component and apply adjunction

![Adjunction and constants in the vertical case](diagrams/vertical.en.svg)

The earlier bigness of $S_1$ is essential here. The effective big divisor $\pi^*S_1$ on $X_2$ remains big after pushforward to $X_3$. An effective divisor supported entirely in vertical components cannot restrict to a big class on the positive-dimensional generic fibre. Since the original valuation has vertical centre, a surviving extracted divisor must be horizontal. It has coefficient one in the complement boundary; denote it by $E_3$ (§5.5, p. 13).

Lemma 4.3 runs a relative $-P$ MMP on a model of Fano type to obtain $mP'=f^*T$, with $T$ a nonzero effective Cartier divisor. The horizontal transform $E$ survives. Surjectivity of $E^\nu\to Z'$ forces $P'|_{E^\nu}\ne0$. For a prime component $J$ of that restriction, Lemma 4.4 gives coefficient at least $1/n$ in the different. The adjunction must preserve the principal-divisor identity in the **same** degree $n$; the manuscript checks this using a rational pluriresidue in that degree.

Write $M_{<d}(u)=\max_{1\le r<d}N(r,u)$. Induction for the horizontal component and for the adjunction pair over its own constant field $k_E$ gives

$$
c(J/k)=[k_E:k]c(J/k_E)
\le M_{<d}(1)N(d-1,1/n).
$$

Lemma 4.5 bounds by $2/b$ the number of geometric boundary components of coefficient at least $b$ through a codimension-two centre. Every geometric component of $P'$ contains the image of a conjugate of $J$, so

$$
c(S/k)=c(P'/k)\le\frac2b\,M_{<d}(1)N(d-1,1/n).
$$

An integer upper bound for the four cases is therefore sufficient:

$$
N(d,t)\ge\max\left\{M_{<d}(t),M_{<d}(b),A(d,1/n,n),
\frac2b M_{<d}(1)N(d-1,1/n)\right\}.
$$

The original coefficient denominators, the field, and the number of extracted divisors do not enter this recursion (§§5.6–5.7, pp. 13–14).

## External inputs and connections within the catalog

| Input | Use and hypotheses | Checks performed |
|---|---|---|
| [Bir19, Theorem 1.7, arXiv p. 4][Bir19] | Lemma 3.1 (p. 4): bounded complements for fixed rational $b$, Fano type, lc singularities, and nef $-(K+bS)$. The full original coefficient set need not be fixed. | Statement and application compared; proof not independently checked. |
| [Bir21, Theorem 1.1, arXiv p. 2][Bir21] | Proposition 3.5 (pp. 6–7): geometric boundedness of $\epsilon$-lc Fanos. Arithmetic descent is supplied inside this manuscript. | Statement and use compared. |
| [LM26, Corollaries 21.9–21.10, pp. 86–87; Theorem 22.1, p. 87][LM26] | Lemmas 4.1–4.3 and §§5.3–5.4: termination of klt MMPs and extraction of specified valuations. | Relevant statements compared. LM26 discrepancy $\le0$ corresponds to log discrepancy $\le1$ here. The basepoint-free input from Theorem 11.1 was located only through this manuscript's citation. |
| Kol10, Definition 122 and (122.7)–(122.10) / [Kol13][Kol13] | Lemma 4.4 (pp. 9–10): differents and pluriresidues. | Read the manuscript's index-preservation calculation; cited external passages not compared. |
| [BMT11][BMT11] and [KM98][KM98] | Lemma 3.4: resolution over the field of definition; Lemma 4.5: quotient description of klt surface singularities. | Use located in the manuscript; external theorem texts not checked. |

Within Catalog 034, [Uniform log Iitaka][ULI], Theorem 2.3 (p. 5), restates this theorem. Lemma 4.6 (pp. 10–11) applies it over $k=\mathbb C(C)$ with coefficient lower bound one. It bounds the degree of the Stein curve $C_S\to C$ of a horizontal coefficient-one component. After residue, weights change by $w\mapsto ew$; the resulting denominators are cleared using $\operatorname{lcm}(1,\ldots,N(s,1))$. This direct application was compared with the theorem. Other possible connections to norm descent of indices were not investigated; this does not mean that no such dependencies exist. The Birkar–Qu strategy is background, not an input theorem in a dependency arrow here.

## Source and scope of checks

Read Theorem 1.1, Lemmas 2.1–2.2, and the proof text of §§3–5 (pp. 2–14), with attention to Proposition 3.5, Lemmas 4.3–4.5, and §§5.5–5.7. Visually checked the constant-field product, the factor $2/b$, and the recursion on PDF p. 14. The Japanese and English versions retain the same hypotheses, formulas, diagrams, and verification scope.

These checks concern reductions and cited applications. They do not independently establish the construction of resolution families, the external adjunction and quotient-singularity theorems, or every MMP input. Some internal cross-references in the source call lemmas or propositions “Theorem”; this article uses the actual headings, such as Lemma 3.1 and Proposition 3.5. Catalog-source links use the fixed-commit GitHub viewer, with pages in their labels.

[SD]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf
[ULI]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-log-Iitaka-fibrations-and-bounded-moduli-denominators-October-4-2026/uniform-log-iitaka.pdf
[Bir19]: https://arxiv.org/pdf/1603.05765v4
[Bir21]: https://arxiv.org/pdf/1609.05543v2
[LM26]: https://arxiv.org/pdf/2209.08732v4
[Kol13]: https://doi.org/10.1017/CBO9781139547895
[BMT11]: https://doi.org/10.4310/AJM.2011.v15.n2.a5
[KM98]: https://doi.org/10.1017/CBO9780511662560
