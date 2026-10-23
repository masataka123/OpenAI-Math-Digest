# 準リーマン予想

公式カタログ003は、固定幅の無零半平面を主張する二つの原稿と、実零点の対数尺度の間隔を補間行列式で扱う一つの原稿を収録する。対象となる指標族、境界の強さ、証明の入力を区別して案内する。

日英の解説冊子PDFは第2段階で生成し、この位置に各言語のリンクを配置する。現在は未生成である。

## 1. 公式順の記事一覧

CATALOGINVENTORYTOKEN

## 2. 結果の包含と証明経路

下図の破線は、記述された結論を前提とした数学的含意を表す。論文間で実際に引用・適用された証明入力の矢印ではない。上の二稿は同じ $K=\mathbf Q(\sqrt{-3})$ 上の全有限位数Hecke指標と全Dirichlet指標を対象とし、虚部を制限しない。

<!-- reference-guide -->
**図で参照する原稿**

- [OpenAI26QR78](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf) OpenAI — *The Quasi-Riemann Hypothesis: A Zero-Free Half-Plane Re s > 7/8*. 30 September 2026 (PDF title page). Theorem 1.1の7/8半平面と内部11/12段階を比較する。
- [OpenAI26QR1112](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf) OpenAI — *The Quasi-Riemann Hypothesis*. October 5, 2026 (PDF title page). Theorem 1.1の11/12半平面と別構成の平均二乗法を示す。
- [OpenAI26LS](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf) OpenAI — *Uniform exclusion of Landau–Siegel zeros*. October 1, 2026 (PDF p. 1 date footnote). Theorem 1の実零点の対数間隔と行列式による別経路を示す。
<!-- /reference-guide -->

![三つの結論の強さと独立した証明経路](diagrams/comparison.ja.svg)

$7/8<11/12$ なので $\{\operatorname{Re}s>7/8\}\supset\{\operatorname{Re}s>11/12\}$。したがって7/8版の結論は、同じ族に対する11/12版の無零領域を含む。どちらも境界線自体を含まず、主指標の $s=1$ の極を許す。これらの固定幅の結論を原始非主実指標の実零点へ制限すれば、例えば11/12版から $(1-\beta)\log q\ge(\log3)/12$ が従う。この明示値は結論を比較した編集上の帰結であり、Landau–Siegel原稿のTheorem 1が明示した定数ではない。逆に対数尺度の実零点間隔だけでは、全高さでの固定幅の複素無零半平面は得られない。

<!-- cite:qr78-result -->[&#91;OpenAI26QR78, Theorem 1.1, p. 4&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf)<!-- /cite -->

<!-- cite:qr1112-result -->[&#91;OpenAI26QR1112, Theorem 1.1, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)<!-- /cite -->

<!-- cite:ls-result -->[&#91;OpenAI26LS, Theorem 1, p. 1&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf)<!-- /cite -->

7/8版のPart Iにも内部のTheorem 3.1として11/12の結果がある。これは別に掲載された49ページの11/12版からの入力ではない。199ページ原稿は、同じ完成theta和の反射表示とPoisson表示を比較してまず内部の11/12を示し、素数補償・非対称尺度・二つのモーメント評価を加えて7/8へ進む。49ページ原稿は、Möbius和の六次捻りの平均二乗をcube逆変換の有限反復で評価し、素数の六乗行から11/12を取り出す。両者は三次thetaと二次large sieveを共有するが、正規化する和と無零領域への閉じ方が異なる。

<!-- cite:qr78-stages -->[&#91;OpenAI26QR78, Proof overview; Theorem 3.1, pp. 5–6, 10&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf)<!-- /cite -->

<!-- cite:qr1112-route -->[&#91;OpenAI26QR1112, §3; Proposition 5.1, pp. 11–12, 18&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)<!-- /cite -->

Landau–Siegel原稿は、対数微分による素数の偏り、四次体での補間、Frobenius合同式を用いた行列式の可除性を組み合わせる。本文の証明に上の二稿の定理は現れず、固定幅の無零半平面を経由する構成ではない。

<!-- cite:ls-route -->[&#91;OpenAI26LS, §§4–6, pp. 5–8&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf)<!-- /cite -->

## 3. 読む入口と確認した接続

| 読む目的 | 記事・原典への入口 | 関係の区別 |
|---|---|---|
| 最も広い半平面の主張と二段階の証明 | [7/8版の主定理と証明概略](../quasi-riemann-seven-eighths/article.ja.md#proof-1) | 内部の11/12段階から7/8への強化 |
| Möbius平均二乗から境界を取り出す仕組み | [11/12版の有限反復とMellin帰着](../quasi-riemann-eleven-twelfths/article.ja.md#proof-1) | 別構成の証明。7/8版の引用は結果の位置づけ |
| 実零点だけを対数尺度で排除する代数的経路 | [Landau–Siegel版の行列式比較](../uniform-landau-siegel/article.ja.md#proof-1) | 結論は上の半平面からも従うが、本文は補間による別経路 |

11/12版p.2は7/8版をより強い結果として引用する。確認した主証明の帰着・終結では、三稿間に外部定理として供給される直接入力は記録していない。この確認は全199ページの全引用関係の網羅調査ではない。未記録の関係を「依存なし」と読み替えない。

<!-- cite:qr1112-comparison -->[&#91;OpenAI26QR1112, §1, comparison with the 7/8 manuscript, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf)<!-- /cite -->

## 4. 原典と確認範囲

公式分野はNumber theory（整数論）、カタログ範囲001–031である。見出しと番号はOpenAI Research Catalogの2026年10月6日版、誌面／PDF p.2と固定リポジトリ版に従う。原稿の参照版は公式順に2026年9月30日（199ページ）、10月5日（49ページ）、10月1日（9ページ）。日付の前後から版の置換関係は推定しない。

<!-- cite:official-overview -->[OpenAI Research Catalog · Catalogue 003; Number theory · p. 2](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf)<!-- /cite -->

7/8版のCorollary 1.2は最小二次非剰余のpolylog上界と平方根抽出、11/12版のCorollary 1.2は等差数列の素数計数を扱い、同じ番号でも内容は異なる。

各記事は証明本文の主要な帰着と直接入力を読んだ範囲を明記する。199ページ原稿の全再帰・検出器・尾部計算、49ページ原稿の全cusp変換・共通因子計算・素数計数の外部定数管理は独立検証未完了である。Landau–Siegel原稿は全証明本文の接続を読んだが、外部の標準定理の証明まで再帰検証していない。これらは著者の主張を案内する記事であり、全主張の正しさを認定するものではない。
