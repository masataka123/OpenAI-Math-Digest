# Local smoothing for the Euclidean wave equation

Official catalogue 079 contains two manuscripts: an all-dimensional determinant-energy argument and a three-dimensional wave-packet and entropy argument. They reach a common three-dimensional local-smoothing conclusion by different methods. The first also claims a quantitative logarithmic estimate and a broad family of analytic and geometric consequences.


## 1. Papers in official catalogue order

CATALOGINVENTORYTOKEN

## 2. Comparing the ranges and proof methods

Write $J=(1-\Delta)^{1/2}$ and use the time interval $[1,2]$. Complex conjugation changes the sign of the half wave, so the sign convention is not a difference in the conclusions.

| Comparison | Local smoothing for the Euclidean wave equation | Critical local smoothing for the three-dimensional wave equation |
|---|---|---|
| Dimensions and main range | All $n\ge2$, $2\le p<\infty$, at Sobolev order $\max\{0,(n-1)/2-n/p\}+\varepsilon$; no loss at $p=2$ | $n=3$, $p=3$, every $\varepsilon>0$; Corollary 10.6 gives all $2<p<\infty$, $\alpha>\max\{0,1-3/p\}$ |
| Critical frequency annulus | $[\log(2+N)]^{2/p_c}$ at $p_c=2n/(n-1)$; the optimal logarithmic power for unrestricted data remains undetermined | Every positive power loss; $\varepsilon=0$ is not treated and no precise logarithmic refinement is claimed |
| Main reduction | A positive current retaining interference → rank-one-background determinant problem → boundary flux → two annular comparisons | Thin round configurations → the cylinder model; extremizers → contradiction for phase-record entropy → regularity on the physical initial slice |
| Analytic consequences | All-dimensional BR and maximal BR, Stein square functions, sphere/truncated-cone/compact-paraboloid extension, Schrödinger mixed norms | Three-dimensional maximal half waves, maximal BR and convergence, and the full strict fixed-radius BR range |

Specializing the first manuscript to $n=3$ includes the local-smoothing conclusions of Theorem 1.1 and Corollary 10.6 of the second. This is **inclusion of result ranges**. In the text and references checked, no citation or application taking the second manuscript as a proof input to the first was found. The second manuscript's quantitative inputs to its cylinder analysis are the Guth–Wang–Zhang wave-envelope theorem and the Ren–Wang planar Furstenberg theorem; these should not be mixed with the intermediate results of the determinant-energy method.

<!-- cite:ew-main -->[&#91;OpenAI26EW, Theorem 1.1, p. 1&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:ew-annulus -->[&#91;OpenAI26EW, Theorem 1.2, p. 4&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:cw-main -->[&#91;OpenAI26CW, Theorem 1.1, p. 1&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->
<!-- cite:cw-full -->[&#91;OpenAI26CW, Corollary 10.6, p. 158&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->

[The all-dimensional critical logarithmic estimate](../euclidean-wave/article.en.md#proof-2) / [The three-dimensional manuscript and its model reductions](../critical-wave-three/article.en.md)

## 3. What follows from local smoothing

The first manuscript uses two kinds of connections. Local spherical extension and tube maximal estimates retain the annular logarithm; the latter carry power $4/p_c$. Global restriction in the interior range, BR at strict orders, and square functions absorb a small loss. For Schrödinger evolution in $d$ spatial dimensions, the critical $p_c=2(d+1)/d$ estimate retains a logarithm, whereas $p>p_c$, $p\le r\le\infty$ give the exact mixed-norm order $d(1-2/p)-2/r$.

<!-- cite:ew-applications -->[&#91;OpenAI26EW, Corollaries 9.1, 9.3, 12.1; Theorems 10.1, 11.1, pp. 27–29, 32, 34, 37&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->

The second manuscript's maximal half-wave estimate requires $3\le p<\infty$ and $s>1-2/p$: Sobolev embedding in time costs additional regularity compared with spacetime smoothing. Its maximal BR theorem has $3\le p<\infty$ and $\delta>1-3/p$. Interpolation and duality extending fixed-radius BR to all $1\le p\le\infty$ are not applied to the maximal operator. Section 11.1 records sphere restriction and Kakeya maximal estimates through an external standard chain; the second article does not present all external inputs in that chain as checked.

<!-- cite:cw-consequences -->[&#91;OpenAI26CW, Corollary 10.7, Theorem 11.1, Corollary 11.2, Section 11.1, pp. 160–162&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->

[Conditions and derivations of the first manuscript's consequences](../euclidean-wave/article.en.md#results) / [The second manuscript's maximal and BR consequences](../critical-wave-three/article.en.md#results)

## 4. Relation to catalogue 074's Kakeya manuscripts

On p. 27 the first manuscript cites, for comparison, Theorem 1.1 of *The Kakeya maximal conjecture in three dimensions* in catalogue 074 ($L^3(\mathbb R^3)\to L^3(S^2)$ with every $\delta^{-\varepsilon}$ loss), and Theorem 1.1 of *Every Four-Dimensional Kakeya Set Has Full Hausdorff Dimension*. At $n=3$, its tube maximal estimate gives the fixed power $[\log(2/\delta)]^{4/3}$; at $n=4$, it gives Hausdorff dimension four for arbitrary Kakeya sets. These compare conclusions for the same objects. The catalogue 074 results are not used as inputs to its all-dimensional wave theorem.

<!-- cite:ew-074 -->[&#91;OpenAI26EW, Section 9, comparison with references &#91;62&#93;–&#91;63&#93;, p. 27&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:k3-main -->[&#91;OpenAI26a, Theorem 1.1, p. 2&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf)<!-- /cite -->
<!-- cite:k4-main -->[&#91;OpenAI26b, Theorem 1.1, p. 3&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Every-four-dimensional-Kakeya-set-has-full-Hausdorff-dimension-September-24-2026/paper.pdf)<!-- /cite -->

The first manuscript passes from the tube maximal estimate to Hausdorff dimension through varying-radius covers. No reverse arrow extracts a four-dimensional Kakeya maximal estimate from the set-dimension theorem alone. No direct citation of the two catalogue 074 manuscripts was found in the second manuscript.

*Elliptic capacity propagation and Fourier restriction to the sphere* in catalogue 077 is a comparison on p. 29 of the first manuscript. *Bochner–Riesz multipliers in three dimensions* in catalogue 078 is mentioned as an alternative proof on p. 162 of the second, which explicitly says it is not an input. Both are distinct from catalogue 074.

<!-- cite:ew-077 -->[&#91;OpenAI26EW, Section 9.1, comparison with reference &#91;64&#93;, p. 29&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:cw-078 -->[&#91;OpenAI26CW, Proof of Corollary 11.2, comparison with reference &#91;20&#93;, p. 162&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->

## 5. Sources and checking scope

[OpenAI26EW] denotes the first manuscript (October 25, 2026), [OpenAI26CW] the second (September 24, 2026), [OpenAI26a] catalogue 074's three-dimensional maximal manuscript (September 23, 2026), and [OpenAI26b] its four-dimensional dimension manuscript (September 24, 2026). All are authored by OpenAI and refer to the sources at fixed commit `7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a`. The official subject is *Real and complex analysis*, on overview pp. 9–10; item 079 is on p. 9.

<!-- cite:catalog-source -->[OpenAI Research Catalog · Catalogue 079 · p. 9](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/overview.pdf)<!-- /cite -->

Each article records which main statements, central reductions, and bilingual conditions were compared with the sources. After the draft, an independent reviewer checked the printed statements and application hypotheses of the Gilbarg–Trudinger regularity theorems used directly in Theorem A.1 of the first manuscript, resolving the initial gap. This is not an independent reproof of the external theorems or all boundary calculations. The complete conditional-information and model-transfer lemmas in the second manuscript, and the full proofs of either manuscript, were not independently verified. Unchecked connections are distinguished both from absence of dependence and from checked comparisons of results.
