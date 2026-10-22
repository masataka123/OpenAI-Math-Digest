# Integer multiplication below n log n

**Catalogue 109 — Integer multiplication below n log n**

This catalogue contains a manuscript claiming exact multiplication of two $n$-bit integers in worst-case time $O(n(\lg n)^{1-\kappa})$, with $\kappa=2^{-182}$, on one deterministic Turing machine with a fixed finite alphabet and a fixed finite number of one-dimensional tapes. Savings in address interchange and simultaneous butterflies from linear networks are connected to exact integer recovery from approximate transforms.

## Paper in this catalogue

CATALOGINVENTORYTOKEN

## Entry to the proof

The article follows the construction from radix digits through CRT, Gaussian resampling and synthetic polynomial transforms, then explains two volume-normalized recurrences and the precision and complete cost bounds. Established integer multiplication and resampling analysis of Harvey and van der Hoeven are direct inputs. The polynomial products do not recursively invoke the improved multiplier under construction.

The bound is asymptotic through all input lengths; the manuscript explicitly describes its constants and thresholds as extremely large. No practical implementation benchmark is included.

<!-- cite:main-result -->[Theorem 1 · p. 3](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf)<!-- /cite -->

## Sources and checking scope

The official subject is *Theoretical computer science*. We use official catalogue 109 and the manuscript dated 23 September 2026. The article checks the main theorem's input/output contract, recursion on fixed tapes, exact recovery from error bounds, and the derivation of $\kappa$ against the proof text. It is not an independent verification of the complete proof or an implementation test. Consequences for division, square roots and matrix transposition are outside scope. The article records the external source edition and remaining limits.

<!-- cite:official-catalog -->[OpenAI Research Catalog · Theoretical computer science; catalogue 109 · p. 13](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf)<!-- /cite -->

<!-- cite:proof-scope -->[Sections 3–9 · pp. 11–67](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf)<!-- /cite -->
