# The quasi-Riemann hypothesis

Official catalogue 003 contains two manuscripts claiming zero-free half-planes of fixed width and one treating logarithmic gaps for real zeros through interpolation determinants. The guide distinguishes character families, the strength of the boundaries, and proof inputs.

Japanese and English explanatory booklet PDFs will be generated in Stage 2 and linked here in the respective languages. They have not yet been generated.

## 1. Papers in official catalogue order

CATALOGINVENTORYTOKEN

## 2. Inclusion of conclusions and proof routes

Dashed arrows indicate mathematical implications assuming the stated conclusions. They do not represent theorems actually imported into another manuscript's proof. The first two manuscripts concern every finite-order Hecke character over the same field $K=\mathbf Q(\sqrt{-3})$ and every Dirichlet character, without a height restriction.

<!-- reference-guide -->
**Manuscripts cited in the diagram**

- [OpenAI26QR78](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf) OpenAI — *The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane Re s > 7/8*. 30 September 2026 (PDF title page). Compare the 7/8 half-plane in Theorem 1.1 and its internal 11/12 stage.
- [OpenAI26QR1112](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf) OpenAI — *The Quasi-Riemann Hypothesis*. October 5, 2026 (PDF title page). Identify the 11/12 half-plane in Theorem 1.1 and the alternative mean-square method.
- [OpenAI26LS](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf) OpenAI — *Uniform exclusion of Landau–Siegel zeros*. October 1, 2026 (PDF p. 1 date footnote). Identify the logarithmic real-zero gap in Theorem 1 and its separate determinant route.
<!-- /reference-guide -->

![Strength of the three conclusions and their separate proof routes](diagrams/comparison.en.svg)

Since $7/8<11/12$, one has $\{\operatorname{Re}s>7/8\}\supset\{\operatorname{Re}s>11/12\}$. The 7/8 conclusion therefore includes the 11/12 zero-free region for the same families. Both exclude their boundary line and allow the principal pole at $s=1$. Restricting either fixed-width conclusion to real zeros of primitive nonprincipal real characters gives a logarithmic gap: for example, the 11/12 conclusion implies $(1-\beta)\log q\ge(\log3)/12$. This explicit value is an editorial consequence of comparing the conclusions, not a constant stated in Theorem 1 of the Landau–Siegel manuscript. A logarithmic gap for real zeros alone does not yield a fixed complex half-plane valid at every height.

<!-- cite:qr78-result -->[&#91;OpenAI26QR78, Theorem 1.1, p. 4&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf)<!-- /cite -->

<!-- cite:qr1112-result -->[&#91;OpenAI26QR1112, Theorem 1.1, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)<!-- /cite -->

<!-- cite:ls-result -->[&#91;OpenAI26LS, Theorem 1, p. 1&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf)<!-- /cite -->

Part I of the 7/8 manuscript already contains an internal 11/12 result, Theorem 3.1. This is not an input from the separately listed 49-page manuscript. The 199-page text compares reflected and Poisson representations of the same completed theta sum to obtain its internal 11/12 result, then adds prime compensation, asymmetric scales, and two moment estimates to reach 7/8. The 49-page text instead controls the mean square of sextically twisted Möbius sums by finite iteration after cube inversion, extracting 11/12 from prime sixth-power rows. Both use cubic theta functions and a quadratic large sieve, but their normalized sums and closing nonvanishing arguments differ.

<!-- cite:qr78-stages -->[&#91;OpenAI26QR78, Proof overview; Theorem 3.1, pp. 5–6, 10&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf)<!-- /cite -->

<!-- cite:qr1112-route -->[&#91;OpenAI26QR1112, §3; Proposition 5.1, pp. 11–12, 18&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)<!-- /cite -->

The Landau–Siegel manuscript combines prime bias from a logarithmic derivative with interpolation in a quartic field and determinant divisibility from Frobenius congruences. Its proof text does not invoke theorems from the other two manuscripts or pass through a fixed zero-free half-plane.

<!-- cite:ls-route -->[&#91;OpenAI26LS, §§4–6, pp. 5–8&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf)<!-- /cite -->

## 3. Reading entries and checked connections

| Reading purpose | Article and source entry | Type of relationship |
|---|---|---|
| The widest claimed half-plane and its two-stage proof | [7/8 main theorem and proof route](../quasi-riemann-seven-eighths/article.en.md#proof-1) | Strengthening from an internal 11/12 stage to 7/8 |
| Extracting a boundary from a Möbius mean square | [11/12 finite iteration and Mellin reduction](../quasi-riemann-eleven-twelfths/article.en.md#proof-1) | An alternative construction; the citation of 7/8 provides context |
| The algebraic route excluding real zeros on the logarithmic scale | [Landau–Siegel determinant comparison](../uniform-landau-siegel/article.en.md#proof-1) | The conclusion follows from the half-planes too, but the proof takes a separate interpolation route |

Page 2 of the 11/12 manuscript cites the 7/8 manuscript for the stronger result. No direct theorem input between the three texts has been recorded in the main reductions and closing arguments checked. This is not an exhaustive audit of every citation throughout the 199-page manuscript. An unrecorded connection should not be read as a proof of independence.

<!-- cite:qr1112-comparison -->[&#91;OpenAI26QR1112, §1, comparison with the 7/8 manuscript, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)<!-- /cite -->

## 4. Sources and checking scope

The official subject is Number theory, covering catalogues 001–031. The heading and number follow the 6 October 2026 edition of the OpenAI Research Catalog, printed/PDF p.2, and the fixed repository version. The manuscripts, in official order, are dated 30 September 2026 (199 pages), 5 October 2026 (49 pages), and 1 October 2026 (9 pages). Their dates do not by themselves establish supersession.

<!-- cite:official-overview -->[OpenAI Research Catalog · Catalogue 003; Number theory · p. 2](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf)<!-- /cite -->

Corollary 1.2 of the 7/8 text concerns polylogarithmic least nonresidues and square-root extraction. Corollary 1.2 of the 11/12 text concerns prime counting in progressions: identical numbering does not identify the results.

Each article records which proof passages and direct inputs were read. The full recursions, detector, and tail calculations in the 199-page text, and all cusp transformations, common-factor calculations, and external prime-counting constants in the 49-page text remain independently unverified. The full proof route of the Landau–Siegel text was read, without recursively checking the proofs of standard external theorems. These articles describe the authors' claims and do not certify their complete correctness.
