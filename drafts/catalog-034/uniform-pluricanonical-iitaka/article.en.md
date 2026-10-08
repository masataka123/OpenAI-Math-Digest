# Uniform Pluricanonical Iitaka Fibrations

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

[U]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-Pluricanonical-Iitaka-Fibrations-October-3-2026/paper.pdf
[LA]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf
[SD]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf
[Ufour]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-effective-log-Iitaka-fibrations-for-fourfolds-September-26-2026/paper.pdf
[R]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Relative-denominators-and-effective-systems-for-log-Calabi-Yau-fibrations-September-27-2026/paper.pdf
[Log]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-log-Iitaka-fibrations-and-bounded-moduli-denominators-October-4-2026/uniform-log-iitaka.pdf
[SLC]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-indices-for-semi-log-canonical-log-Calabi-Yau-pairs-October-5-2026/uniform-slc-index.pdf
[BZ]: https://arxiv.org/pdf/1410.0938v2
