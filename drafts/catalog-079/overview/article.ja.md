# ユークリッド波動方程式の局所平滑化

公式カタログ079 *Local smoothing for the Euclidean wave equation* は、全次元の行列式エネルギーによる原稿と、三次元の波束・エントロピーによる原稿の2本を収録する。同じ三次元局所平滑化の結論へ異なる方法で到達し、第1論文は定量的な対数評価と多くの解析的・幾何学的帰結も主張する。


## 1. 公式順の記事一覧

CATALOGINVENTORYTOKEN

## 2. 二つの結果範囲と証明方法

$J=(1-\Delta)^{1/2}$、時間区間 $[1,2]$ とする。半波動の符号は複素共役で移せるため、比較上の差ではない。

| 比較項目 | Local smoothing for the Euclidean wave equation | Critical local smoothing for the three-dimensional wave equation |
|---|---|---|
| 対象次元・主結果 | 全 $n\ge2$、$2\le p<\infty$、Sobolev次数 $\max\{0,(n-1)/2-n/p\}+\varepsilon$。$p=2$ は無損失 | $n=3$、$p=3$、任意の $\varepsilon>0$。Corollary 10.6で全 $2<p<\infty$、次数 $\alpha>\max\{0,1-3/p\}$ |
| 臨界周波数環 | $p_c=2n/(n-1)$ で $[\log(2+N)]^{2/p_c}$。一般データの最適な対数冪は確定していない | 任意の正の冪損失。$\varepsilon=0$ を扱わず、対数冪の精密化は主張しない |
| 主要な帰着 | 波の干渉を保存した正の流→rank 1背景のDirichlet行列式→境界flux→二つの円環比較 | 薄いround配置→円筒模型、極値配置→位相記録のエントロピー矛盾→物理初期面の正則性 |
| 解析的な帰結 | 全次元BR・BR最大・Stein平方関数、球面/切断円錐/コンパクト放物面extension、Schrödinger混合ノルム | 三次元半波動最大関数、BR最大・収束と固定半径BRの全strict範囲 |

第1論文の $n=3$ 特殊化は第2論文のTheorem 1.1とCorollary 10.6の局所平滑化の結論を包含する。これは**結果範囲の包含**である。本文・参考文献を調べた範囲で、第1論文が第2論文を証明入力として使う引用・適用は確認しなかった。第2論文の円筒模型の定量的入力はGuth–Wang–Zhangのwave-envelope定理とRen–Wangの平面Furstenberg定理であり、行列式エネルギー法の中間結果と混ぜない。

<!-- cite:ew-main -->[&#91;OpenAI26EW, Theorem 1.1, p. 1&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:ew-annulus -->[&#91;OpenAI26EW, Theorem 1.2, p. 4&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:cw-main -->[&#91;OpenAI26CW, Theorem 1.1, p. 1&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->
<!-- cite:cw-full -->[&#91;OpenAI26CW, Corollary 10.6, p. 158&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->

[全次元の臨界対数評価の証明へ](../euclidean-wave/article.ja.md#proof-2) / [三次元の原稿と模型への帰着へ](../critical-wave-three/article.ja.md)

## 3. 局所平滑化から何が導かれるか

第1論文では二種類の接続を区別する。周波数環の対数を保つ接続は局所球面extensionと管の最大評価で、後者には対数冪 $4/p_c$ が残る。大域restrictionの内点範囲、BRの厳密な次数範囲、平方関数は微小損失を吸収する。Schrödingerでは $d$ 空間次元の臨界 $p_c=2(d+1)/d$ に対数を残す一方、$p>p_c$、$p\le r\le\infty$ では正確な混合ノルム次数 $d(1-2/p)-2/r$ に進む。

<!-- cite:ew-applications -->[&#91;OpenAI26EW, Corollaries 9.1, 9.3, 12.1; Theorems 10.1, 11.1, pp. 27–29, 32, 34, 37&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->

第2論文の半波動最大関数は $3\le p<\infty$、$s>1-2/p$ を要し、時空局所平滑化より時間Sobolev埋込みの費用が増える。BR最大評価の主張は $3\le p<\infty$、$\delta>1-3/p$。固定半径BRの全 $1\le p\le\infty$ への補間・双対性を、最大関数へ転用してはいない。球面restrictionとKakeya最大評価は§11.1で外部の標準的連鎖として記載されているが、今回の第2記事ではその外部連鎖の全入力照合を済ませた扱いにしない。

<!-- cite:cw-consequences -->[&#91;OpenAI26CW, Corollary 10.7, Theorem 11.1, Corollary 11.2, Section 11.1, pp. 160–162&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->

[第1論文の各帰結の条件と導出](../euclidean-wave/article.ja.md#results) / [第2論文の最大関数・BR帰結](../critical-wave-three/article.ja.md#results)

## 4. 074のKakeya原稿との関係

第1論文p. 27は、074の *The Kakeya maximal conjecture in three dimensions* のTheorem 1.1（$L^3(\mathbb R^3)\to L^3(S^2)$、任意の $\delta^{-\varepsilon}$ 損失）と、*Every Four-Dimensional Kakeya Set Has Full Hausdorff Dimension* のTheorem 1.1を比較として引用する。本稿の $n=3$ の管最大評価は固定対数冪 $[\log(2/\delta)]^{4/3}$ を与え、$n=4$ では任意のKakeya集合にHausdorff次元4を与える。これらは同じ対象の結論の比較であり、074の結果を入力として全次元の波動定理を証明しているわけではない。

<!-- cite:ew-074 -->[&#91;OpenAI26EW, Section 9, comparison with references &#91;62&#93;–&#91;63&#93;, p. 27&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:k3-main -->[&#91;OpenAI26a, Theorem 1.1, p. 2&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf)<!-- /cite -->
<!-- cite:k4-main -->[&#91;OpenAI26b, Theorem 1.1, p. 3&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Every-four-dimensional-Kakeya-set-has-full-Hausdorff-dimension-September-24-2026/paper.pdf)<!-- /cite -->

第1論文は管の最大評価から可変半径の被覆を経てHausdorff次元を導く。四次元の集合次元定理だけから四次元Kakeya最大関数評価を取り出す逆向きの接続は置かない。第2論文では074の2原稿への直接引用を確認していない。

077の *Elliptic capacity propagation and Fourier restriction to the sphere* は第1論文p. 29の比較、078の *Bochner–Riesz multipliers in three dimensions* は第2論文p. 162の別証明への言及である。後者は原稿自身が入力でないと明記しており、074とは別に扱う。

<!-- cite:ew-077 -->[&#91;OpenAI26EW, Section 9.1, comparison with reference &#91;64&#93;, p. 29&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)<!-- /cite -->
<!-- cite:cw-078 -->[&#91;OpenAI26CW, Proof of Corollary 11.2, comparison with reference &#91;20&#93;, p. 162&#93;](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)<!-- /cite -->

## 5. 原典・確認範囲

引用キーは[OpenAI26EW]が第1論文（October 25, 2026）、[OpenAI26CW]が第2論文（September 24, 2026）、[OpenAI26a]が074の三次元最大関数原稿（September 23, 2026）、[OpenAI26b]が074の四次元集合次元原稿（September 24, 2026）。いずれも著者OpenAI、固定commit `7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a` の原典を参照する。公式分野は *Real and complex analysis*、overviewではpp. 9–10、079はp. 9。

<!-- cite:catalog-source -->[OpenAI Research Catalog · Catalogue 079 · p. 9](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/overview.pdf)<!-- /cite -->

両記事の主要主張、証明の核心の帰着、日英の条件対応を原典と照合した範囲を各記事末尾に記録した。第1論文のTheorem A.1に直接使うGilbarg–Trudingerの正則性定理は、初稿後に別担当が原書誌面の記述・適用仮定を照合し、初稿時の未確認を解消した。これは外部定理の証明自体や全境界計算の独立再検証ではない。第2論文の長い条件付き情報量・模型変換の全補題、および各論文の全証明を独立に検証したものではない。未確認の接続を「依存なし」とせず、確認済みの結果比較とも分けている。
