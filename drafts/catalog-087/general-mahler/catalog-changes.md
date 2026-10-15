# Catalog 087 — General Mahler article handoff

- Official order: 2. Paper ID: `general-mahler`. Author: OpenAI. Title: *The Mahler Conjecture for General Convex Bodies*. Version: September 22, 2026, 72 pages. Fixed commit and SHA-256 are in sources.json (verified against the original PDF).
- Writer: explicitly selected `gpt-6-astra`; new original-source reading. No prior Sol drafts, figures, interpretations or checks reused. Citation/diagram rendering code and shared styles only reused.
- Stage: 1 manuscript/figure delivery; no integration, book PDFs, commit or push.

## Official-order row proposal

JA 主張：全次元の一般凸体のSantaló中心で $P(K)\ge(n+1)^{n+1}/(n!)^2$、等号は単体に限る（Theorem 1.1, p.1）。全次元結果から一般凸関数の積下界 $e^n$（Corollary 1.2, p.4）、essential continuity付きentropy–transport（Corollary 8.1, p.41）を得る。

EN Claim: For general convex bodies in every positive dimension, the Santaló-centered product is at least $(n+1)^{n+1}/(n!)^2$, with equality exactly for simplices (Theorem 1.1, p.1). All-dimensional geometry yields the functional lower bound $e^n$ (Corollary 1.2, p.4), followed by entropy–transport under essential continuity (Corollary 8.1, p.41).

JA 役割：正双対錐のLaplace積へ持ち上げ、射影平均とGaussian共分散を同時正規化する。非可換層欠損と厳密な固有値区間評価が下界・単体剛性を担う。

EN Role: Lift to a positive-dual cone Laplace product and normalize projection means and Gaussian covariance together. Noncommutative layer defects and strict spectral interval estimates supply the lower bound and simplex rigidity.

## Catalog relations

- Symmetric Mahler → General Mahler: **not a direct input**. General p.1 distinguishes the stronger symmetric constant $4^n/n!$; p.41 compares the even functional bound $4^n$. Classification: comparison/background only, if needed. Do not present the general constant as proving the sharp symmetric result. In particular the general theorem's simplex equality classification does not give the symmetric Hanner classification.
- Symplectic Polar Products → General Mahler: no direct input located in this manuscript's proof passages or references. This is a scoped reading result, not a global absence claim about all possible relationships.
- General geometric → functional → entropy–transport is an **internal consequence chain**, not three separate catalog papers. The functional arrow uses all dimensions. Essential continuity belongs only to the entropy–transport branch.
- Functional sharpness example does not classify all extremizers. This distinction is explicit in §8.1 and FM08 Remark 2.

## Direct external connections for overview records

Use sources.json for complete metadata and hashes. Precise statement/application checks (external full proofs excluded):

| Source | To | Role |
|---|---|---|
| Kla18 Lemma 2.1 pp.6–7; Corollary4.1 p.15 (arXiv v2) | Lemma2.1 pp.6–7 | Cone/Laplace correspondence, rederived in positive-dual convention |
| Sol19 Theorem1.1 p.1 (arXiv v1) | Lemma3.1 pp.9–10 | Moreau decomposition, rederived with positive duality |
| Cha13 Theorem2.3 p.4 (arXiv v1) | Proposition3.4 p.13 | Matrix square-root monotonicity for covariance box |
| HP02 Proposition2.1 Eq.(2.4), author manuscript p.3 | Lemma5.1 pp.20–21 | Gaussian covariance identity, Hermite reproof in manuscript |
| Nof17 Theorem2.11, print6/PDF7 (accepted manuscript) | Lemma7.1 p.35 | Divided-difference matrix derivative, including repeated eigenvalues |
| FM08 Proposition2(a), print1434–1435/PDF6–7 | Corollary1.2 proof pp.40–41 | All-dimensional geometric-to-functional implication; consequence input |
| FGZ21 Definition1.1/Theorem1.3 pp.2–3 (arXiv v3) | Corollary8.1 p.41 | Gozlan equivalence with essential continuity; consequence input |

## Significant checking boundaries

The sharp scalar input Proposition2.3 depends on Appendices A/B. Read its statement, the rational-certificate construction and strict interval statement/case organization, but did not rerun all certificates or independently verify all interpolation/tail bounds. Sections4–6 are read for their principal interfaces, not every noncommutative kernel estimate independently recalculated. These limitations are prominent in both articles. No proof-validity certification or expert review is claimed.

## Integration notes

- 4 proof diagrams × 2 languages, TeX/TikZ and SVG, generated registry, manifest and visual PNGs included.
- Main proof contains two diagrams in one target section. Explicit bilingual anchors `general-bound` and `general-equality` locate conclusion coverage because the common renderer only numbers explanatory steps after the final figure.
- Printed/PDF offsets: FM08 has a cover sheet (1434→6); Nof17 accepted manuscript has a cover sheet (6→7). Do not replace these with journal-page offsets.
- Full SHA and commit remain in sources.json; article shows short commit to avoid mobile overflow.
- Shared article preview/034–033 visual comparisons: headquarters owns the isolated preview. Book PDFs and public asset copies intentionally pending Stage2.
