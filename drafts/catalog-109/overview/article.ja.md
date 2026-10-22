# Integer multiplication below n log n

**カタログ109 — n log n未満の整数乗算**

固定有限アルファベット・固定有限本数の一次元テープをもつ一台の決定性Turing機械で、二つの$n$-bit整数を最悪時 $O(n(\lg n)^{1-\kappa})$、$\kappa=2^{-182}$ で厳密に掛けるとする原稿を収録する。線形ネットワークによるアドレス交換と同時バタフライの節約を、近似変換からの正確な整数回収へ接続する。

## 収録論文

CATALOGINVENTORYTOKEN

## 証明の入口

個別記事では、入力の基数桁からCRT・Gaussian resampling・合成多項式変換へ至る構成、体積で正規化した二つの再帰、精度と全費用の評価を順に説明する。Harvey–van der Hoevenの既存の整数乗算器とresamplingの解析を直接入力として使う。構成中の高速乗算器を多項式積へ再帰的に呼び出すわけではない。

すべての入力長に対する漸近評価であり、原稿は定数と閾値が極めて大きいことを明記する。実用的な実装の性能評価は含まれない。

<!-- cite:main-result -->[Theorem 1 · p. 3](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf)<!-- /cite -->

## 原典・確認範囲

公式の分野は *Theoretical computer science*。公式一覧のカタログ109、2026年9月23日原稿を使用する。記事は主定理の入力・出力、有限テープでの再帰、誤差からの厳密復元、$\kappa$の導出を原典の証明本文と照合した概説である。全証明の独立検証、実装による検証、除算・平方根・行列転置への帰結は対象外。外部原典の版と未確認範囲は個別記事に記載する。

<!-- cite:official-catalog -->[OpenAI Research Catalog · Theoretical computer science; catalogue 109 · p. 13](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf)<!-- /cite -->

<!-- cite:proof-scope -->[Sections 3–9 · pp. 11–67](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf)<!-- /cite -->
