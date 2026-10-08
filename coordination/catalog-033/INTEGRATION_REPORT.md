# Catalogue 033 — site integration

2026-10-08. Site HQ integrated the catalogue following the human publication instruction in catalogue 033 HQ. The publication result is reported in the site-HQ chat; this file records the pre-publication checks.

## Registered content

- Five bilingual articles, in official order, and the bilingual catalogue synthesis.
- 52 SVG figures and 52 corresponding TeX sources copied byte-for-byte from the drafts.
- Twelve selected inputs, including consequence/additional-result scopes, plus one explicitly labelled premise match in the dependency explorer. Alternatives (3), method comparisons (2), and background (1) stay separate in the synthesis and source records.
- The explorer points to source statements and receiving proof sections, with catalogue/paper numbers. It does not infer an OI → Schnell direct edge.
- 033 source snapshot fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb. The eight source records in connections.json resolve to site metadata with the exact recorded version and URL; 034 keeps adc7f1241b42e322a6451854ab7e4b4c146bf78a.

## Checks

- 19 automated tests; 47 built pages; 2,003 local links/assets, including fragments and language switches.
- All 12 new pages at 375 × 812 and 1280 × 900: no page/figure overflow; all 1,492 math expressions rendered with no MathJax errors at either width. Language destinations and the shared AI notice/MIT attribution are present.
- Mobile diagram open/fit/close and retained source links; dependency all-records view (13), incoming selection, direct connection fragment, and language switching with the fragment retained.
- Field page has closed article lists for 033 (5) and 034 (14). Tested field → catalogue → article → catalogue row. Catalogue article titles are 20px and their full wrapped block is clickable.
- Existing 034: all 30 main DOMs (catalogue plus 14 articles, both languages) match a clean build of commit 0d37a0b. Its explorer still has 23 connections and 3 figures; the Japanese page renders without math errors. Both PDF content and file hashes remain current (197/216 pages).
- Existing 034 URLs and all previous anchors remain available. No 033 booklet PDF was added.

## Scope

This is site-integration QA, not independent verification of all mathematical proofs. The per-paper and synthesis records retain unverified passages. In particular, full rank-loss/stable-family/valuation arguments (OI), regularization and auxiliary descent sources and later estimates (WV), representation and boundary calculations (RA), multivariable extensions and alternatives (PH), and full parameter-space/compactification constructions (BS) remain within their previously stated partial-check scopes.

The optional local preview script was adjusted to use the generic renderer's catalogue parameter. The historical pre-integration validation.json is retained; it is not presented as a new production QA run.
