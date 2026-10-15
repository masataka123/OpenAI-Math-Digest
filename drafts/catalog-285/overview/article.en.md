# Counterexamples to Baum–Connes and Kadison–Kaplansky

Official catalogue 285. These three manuscripts claim counterexamples to injectivity and surjectivity of coefficient-free reduced Baum–Connes assembly, and to the projection conjecture for reduced group C*-algebras of torsion-free groups. Each article distinguishes the manuscript's claims from the reductions and external inputs checked editorially.

<!-- CatalogMarkdownOverview.astro renders the opening PDF link from the language-specific 285 entry in pdf-editions.json. -->

## Papers in official catalogue order

CATALOGINVENTORYTOKEN

## Separate the kernel from the image of assembly

The [injectivity article](../baum-connes-injectivity/article.en.md) concerns the kernel of

$$
\mu_r:K_0(BG_{\mathrm{inj}})\longrightarrow K_0(C_r^*(G_{\mathrm{inj}}))
$$

for a torsion-free group $G_{\mathrm{inj}}$. Degree-two cohomology detects the Dirac class $h$ of an embedded torus and keeps it of infinite order, while a separate construction kills its Bott image in the reduced group C*-algebra. Here $K_0(BG)$ is compactly supported K-homology, defined by the direct limit over finite subcomplexes. The manuscript explains that maximal assembly detects the same $h$ rationally, distinguishing its conclusion from counterexamples to maximal assembly or the classical Novikov conjecture.<!-- cite:inj -->[&#91;OpenAI26a, Theorem 1.1, p. 1&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:max -->[&#91;OpenAI26a, Section 1.2, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite -->

The [projection article](../kadison-kaplansky-projection/article.en.md) first constructs a matrix projection of small positive trace for a torsion-free group $\Gamma_{\mathrm{proj}}$, then compresses it to a scalar projection in the free product $G_{\mathrm{proj}}=\Gamma_{\mathrm{proj}}*F_N$. Its conclusion is $p\in C_r^*(G_{\mathrm{proj}})$ with $0<\tau(p)<1/2$, extending beyond the existence of a matrix projection.<!-- cite:proj -->[&#91;OpenAI26b, Theorem 1.1, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-the-Kadison-Kaplansky-Projection-Conjecture-September-23-2026/paper.pdf)<!-- /cite -->

The [irrational-trace article](../baum-connes-irrational-trace/article.en.md) concerns the image of

$$
\mu_0^{G_{\mathrm{sur}}}:K_0^{G_{\mathrm{sur}}}(\underline EG_{\mathrm{sur}})
\longrightarrow K_0(C_r^*(G_{\mathrm{sur}}))
$$

for a finitely generated group $G_{\mathrm{sur}}$, with no torsion-free assumption. The domain is equivariant K-homology with $G$-compact supports on the classifying space for proper actions. Exact local distributions from codes and a global spectral gap produce an actual projection $b_0\in C_r^*(G_{\mathrm{sur}})$. Its irrational trace is compared with the rational trace of the assembly image. The manuscript also deduces failure of rationalized surjectivity.<!-- cite:sur -->[&#91;OpenAI26c, Theorems 1.1–1.2, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-Irrational-Trace-Counterexample-to-Reduced-Baum-Connes-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:trace -->[&#91;OpenAI26c, Proposition 6.1 and proof of Theorem 1.1, pp. 21–22&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-Irrational-Trace-Counterexample-to-Reduced-Baum-Connes-September-23-2026/paper.pdf)<!-- /cite -->

## Compare the two trace obstructions and their construction methods

Section 11 of the projection manuscript also records failure of trivial-coefficient reduced assembly surjectivity for $\Gamma_{\mathrm{proj}}$, using the matrix projection and the integer-valued trace of assembly for torsion-free groups. This does not depend on the separate irrational-trace construction. A noninteger trace alone does not exclude membership in the rationalized image. The irrational-trace manuscript instead uses rational-valued traces on assembly for arbitrary countable groups, so both the group hypotheses and the strength of the obstruction differ.<!-- cite:proj-assembly -->[&#91;OpenAI26b, Section 11, p. 73&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-the-Kadison-Kaplansky-Projection-Conjecture-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:trace -->[&#91;OpenAI26c, Proposition 6.1 and proof of Theorem 1.1, pp. 21–22&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-Irrational-Trace-Counterexample-to-Reduced-Baum-Connes-September-23-2026/paper.pdf)<!-- /cite -->

There is an **explicit methodological reference from the projection manuscript to the injectivity manuscript**. Section 2 (p.7) of the latter adapts the padded-stream construction and recovery scheme from Sections 4 and 6 of the former, establishing the exponents, cutoffs and gated corrections needed for its own interfaces. Section 7.4 (p.64) also follows the cone-chain and prime-order obstruction method of Section 7.6 of the projection manuscript, reproving the exact-chain interfaces for its current sheets. The projection theorem is not used as an existence input; extension of the integral detector and Bott realization are separate arguments in the injectivity manuscript.<!-- cite:recovery-method -->[&#91;OpenAI26a, Section 2, p. 7&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:cone-method -->[&#91;OpenAI26a, Section 7.4, p. 64&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:cone-source -->[&#91;OpenAI26b, Section 7.6, pp. 36–38&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-the-Kadison-Kaplansky-Projection-Conjecture-September-23-2026/paper.pdf)<!-- /cite -->

This directed relation is recorded as adaptation and reproof of a method, distinguished from direct application of a main theorem. General similarities involving expanders or graphical constructions do not by themselves justify further dependency arrows. The individual articles give the external inputs, their applications and the diagrams of the proof reductions.

## Sources and checking scope

All citation keys refer to manuscripts by OpenAI dated September 23, 2026. OpenAI26a denotes *A torsion-free counterexample to reduced Baum–Connes injectivity* (85 pages); OpenAI26b denotes *A torsion-free counterexample to the Kadison–Kaplansky projection conjecture* (76 pages); OpenAI26c denotes *An irrational-trace counterexample to reduced Baum–Connes* (23 pages).

The order follows the [official contents](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/CONTENTS.md) and page 31 of the [official overview](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf), under Operator algebras (285–303), at fixed commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`. This guide checks the objects, hypotheses and conclusions of the claims and searches for direct inter-manuscript citations. It does not independently verify all three proofs. Detailed reading locations and unresolved points are recorded at the end of each article.
