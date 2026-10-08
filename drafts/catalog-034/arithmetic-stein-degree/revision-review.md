# 改訂時の照合記録

本原稿は2026-09-25版、commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`、SHA-256はsources.json。原典: [SD](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf)。今回の記録は記述と適用の比較であり独立証明検証ではない。

| 対象 | 原典箇所（SD） | 適用する対象・仮定 | 今回の照合 |
|---|---|---|---|
| 主定理 | [Theorem 1.1, p.1](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | d>=1,t>0,char0,H0(OX)=k,effective lc Q-pair,K+B~Q0 | 定数体次数の上界。一般化対や任意相対定理へ拡張しない。 |
| 第1のMMP | [Lemmas 4.1–4.2; §5.2, pp.7–8,11](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | Q-factorial klt, effective crepant boundary; 0<b(t)<t | S正なMMPで保存。正次元の底は閾値tの帰納で終了。点の場合のみn(d,b)補完。 |
| 第2のMMP | [Corollary 3.3; §§5.3–5.4, pp.5,11–12](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | n-complement; discrepancies in 1/n Z | 低discrepancyを有限抽出。点はProp.3.5、正次元ではPを回復。水平Pは閾値bの帰納、垂直Pのみ次へ。 |
| 算術的軌道 | [Proposition 3.5; Lemmas 3.2,3.4, pp.4–7](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | epsilon-lc Fano; effective lc index-n complement | 幾何学的偏極→有界拡大→行列式降下→有界SNC strata→付値の軌道。外部BABの全証明は今回対象外。 |
| bigから水平成分 | [§5.5, p.13](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | S1 ample; X2→X3 extracts no divisors; original valuation vertical | pi*S1のpushforwardのbigness。水平成分は抽出因子なので係数1。c(E/k)<=M_<d(1)。 |
| 交差を作る | [Lemma 4.3; §5.6, pp.8–9,13](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | relative Fano type; vertical P; horizontal E | -PのMMPとbasepoint-freeness。mP=f*Tは実際の因子等式、Eの全射で交差非零。LM26 Thm11.1は再照合していない。 |
| 同じ指数とdifferent | [Lemma 4.4, pp.9–10](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | effective lc, coeffE=1, n(K+C) principal; P Q-Cartier | rational n-residueをk上で構成。十分可除な冪の因子等式を戻す。betaPを除いた対もeffective lcでQ-Cartier adjoint。 |
| 定数体の積 | [Lemma 2.1; (5.11), pp.2–3,14](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | E normalized over its own constant field; J coeff>=1/n | dimE=d−1、H0=kEで帰納。kE⊂k(J)の塔で次数を掛ける。 |
| 元の成分数 | [Lemma 4.5; (5.12)–(5.13), pp.10,14](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf) | Q-Gorenstein klt U; lc boundary; codimension-two image | 各中心は<=2/b成分。Jの共役数で中心数を抑え4上界の最大。KM98外部本文未照合。 |

## Kol10の追加照合

[著者公開PDF](https://web.math.princeton.edu/~kollar/book/chap2.pdf#page=61)の表紙日付はJune 1, 2010。PDF頁と印刷頁61–64が一致。Definition 122のperfect field、generic smoothness、適切な反射的層の局所自由性、有限双有理正規化を、標数0の正規lc対・Q-Cartier adjointに対応させた。(122.7)–(122.9)の留数構成、Proposition 123の有効性、Lemma 125のdiscrepancy比較を読んだ。

(122.10)はK+E自体がQ-Cartierという追加仮定を持つ。本稿はそれを無条件に引用せず、CとC−betaPの共通Cartier倍の留数を比較して一成分の加法性を証明している。同じ指数nへの復帰とk上での有理形式は本稿側の追加議論として区別した。Kol13出版版の対応番号や外部証明全体は検証していない。

## 表現・検査

Schnellの実物の構成を参照。最初のMMPと第2のMMPを別図にし、解決済みの枝を終端にした。各証明は導入→引用付き図→番号付き段階→出典行。日英の仮定・7表示数式・節順・確認範囲を対応させた。図はSchnellと同じpreambleで生成し、目視で下段の枝と終端の余白を調整。

残る未確認はsources.jsonと記事末尾に保持。全MMP入力、解消の有界族、KM98商特異点の外部定理本文、他のカタログへの全接続は独立検証していない。
