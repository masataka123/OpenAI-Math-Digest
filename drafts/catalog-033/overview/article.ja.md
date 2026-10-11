# Catalogue 033 — Campana's orbifold Iitaka conjecture and logarithmic subadditivity

**結果・使用箇所・証明記事への入口**

小平次元の劣加法性とvariation、対数的加法性、moduli lineの半豊富性を扱う5篇を案内する。公式順の一覧から主張と方法を選び、結果単位の接続から各記事の証明段階へ進める。

## 公式順の記事一覧

CATALOGINVENTORYTOKEN

## 033内で結果を使う箇所

<span class="legacy-anchor" id="図の矢印に付した引用" aria-hidden="true"></span>
<span class="legacy-anchor" id="diagram-sources" aria-hidden="true"></span>
<span class="legacy-anchor" id="2-下界からvariationへ進み独立した上界と合わせる" aria-hidden="true"></span>
<span class="legacy-anchor" id="main-routes" aria-hidden="true"></span>
<span class="legacy-anchor" id="main-routes-step-1" aria-hidden="true"></span>
<span class="legacy-anchor" id="1-対数劣加法性でparameter-fieldの次元を測る" aria-hidden="true"></span>
<span class="legacy-anchor" id="main-routes-step-2" aria-hidden="true"></span>
<span class="legacy-anchor" id="2-制限したhodge-lineから最初のconstancyへ進む" aria-hidden="true"></span>
<span class="legacy-anchor" id="main-routes-step-3" aria-hidden="true"></span>
<span class="legacy-anchor" id="3-raの上界に同じ対の下界を加える" aria-hidden="true"></span>
<span class="legacy-anchor" id="3-追加の相対飯高構成へ渡す三つの入力" aria-hidden="true"></span>
<span class="legacy-anchor" id="additional-routes" aria-hidden="true"></span>
<span class="legacy-anchor" id="additional-routes-step-1" aria-hidden="true"></span>
<span class="legacy-anchor" id="1-固定参照空間へ切断と比を戻す" aria-hidden="true"></span>
<span class="legacy-anchor" id="additional-routes-step-2" aria-hidden="true"></span>
<span class="legacy-anchor" id="2-被約境界で全最高部分をlineにする" aria-hidden="true"></span>
<span class="legacy-anchor" id="additional-routes-step-3" aria-hidden="true"></span>
<span class="legacy-anchor" id="3-二種類の最小値を区別して境界を正規化する" aria-hidden="true"></span>
<span class="legacy-anchor" id="7-確認した直接依存の一覧" aria-hidden="true"></span>
<span class="legacy-anchor" id="section-8" aria-hidden="true"></span>
<span class="legacy-anchor" id="overview" aria-hidden="true"></span>
<span class="legacy-anchor" id="connection-explorer" aria-hidden="true"></span>

Orbifold IitakaはWhole-fiber variationの主証明に異なる二つの入力を渡す。Reverse log additivityはまず独立した上界を示し、下界を加えるのは加法性の帰結である。以下の論文名は記事の該当節、結果番号は固定版の原典へリンクする。

| 供給元の結果 | 利用先・使用箇所 | 使う内容 |
|---|---|---|
| <span id="connection-c01"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-3) · [Corollary 6.2 · pp. 40–41][OI] | [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-2) · [Theorem 2.1; Lemmas 2.8–2.9 · pp. 6, 10–12][WV] | **直接入力**。通常の対数下界を与え、飯高ファイバー上で二つの非負な項を0にする。parameter fieldの構成に使う。 |
| <span id="connection-c02"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-1-step-4) · [Theorem 3.1 · pp. 17–18][OI] | [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-3) · [Theorem 3.8 / Proposition 3.9; Proposition 3.12 · pp. 21, 23][WV] | **直接入力**。制限した変動のHodge lineに随伴正値性を与える。切断次元の上界と合わせて随伴比較の底を点にし、Mの有理自明性を得る。 |
| <span id="connection-c03"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-3) · [Corollary 6.2 · pp. 40–41][OI] | [Reverse log additivity](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/reverse-logarithmic-additivity/#proof-4) · [Corollary 1.2; Theorem 7.8 / §7.6 · pp. 2, 50][RA] | **帰結への入力**。同じ対と非常に一般のファイバーに下界を与え、RAの上界と合わせて加法性にする。 |

最初の二つの入力はparameter fieldと制限Hodge lineの段階を支える。それだけで全ファイバーのconstancyが得られるわけではなく、[Whole-fiber variationの全体図](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-1)でconstancy・marking・降下までを追う。[Reverse log additivityの上界の証明](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/reverse-logarithmic-additivity/#proof-1)は、小平次元の全符号を処理してから下界へ進む。

Whole-fiber variation §9の追加の相対飯高構成には、さらに次の三つを使う。§7.4で完結する主証明とは別の経路である。

| 供給元の結果 | 利用先・使用箇所 | 使う内容 |
|---|---|---|
| <span id="connection-c04"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-1-step-3) · [Proposition 2.7 · pp. 10, 16–17][OI] | [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-7) · [Proposition 9.1(i), (iii) · pp. 69–70][WV] | **追加結果内の入力**。元のXを参照空間に固定し、相対・絶対の切断と比を保持する。追加の通常相対飯高構成で相対bignessを得る。 |
| <span id="connection-c05"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-5) · [Lemma 7.1 / Corollary 7.2 · pp. 43–46][OI] | [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-7) · [Proposition 9.1(iv), (v) · pp. 69–70][WV] | **追加結果内の入力**。被約境界と最小指数のroot coverから全最高部分をrank oneにし、正規化済みMを純粋整変動のlineとして実現する。 |
| <span id="connection-c06"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-5) · [Lemma 7.4 · pp. 46–47][OI] | [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-7) · [Proposition 9.1: initial normalized boundary · pp. 69–70][WV] | **追加結果内の入力**。実際のsource成分での最小値と全付値のlctを区別してBを正規化する。切断比較とHodge lineを同じモデル上で使う。 |

切断の保存、**被約境界での全最高line**、同じモデル上の境界の正規化を分担する。記述と使用箇所の照合であり、全付値比較や§§8–9全体の証明確認ではない。

## カタログ034との接続

<span class="legacy-anchor" id="4-034のモデル存在と033の帰結をつなぐ" aria-hidden="true"></span>
<span class="legacy-anchor" id="models" aria-hidden="true"></span>
<span class="legacy-anchor" id="models-step-1" aria-hidden="true"></span>
<span class="legacy-anchor" id="1-laではalbanese帰着に限って使う" aria-hidden="true"></span>
<span class="legacy-anchor" id="models-step-2" aria-hidden="true"></span>
<span class="legacy-anchor" id="2-wvのsmooth-familyの帰結ではgood-modelを入力する" aria-hidden="true"></span>
<span class="legacy-anchor" id="models-step-3" aria-hidden="true"></span>
<span class="legacy-anchor" id="3-ckの条件付き前提の範囲を保持する" aria-hidden="true"></span>
<span class="legacy-anchor" id="5-kähler稿の具体的な補助結果へ渡す" aria-hidden="true"></span>
<span class="legacy-anchor" id="section-6" aria-hidden="true"></span>
<span class="legacy-anchor" id="kahler" aria-hidden="true"></span>
<span class="legacy-anchor" id="kahler-step-1" aria-hidden="true"></span>
<span class="legacy-anchor" id="1-相対飯高帰着で小平次元0のファイバーへ移る" aria-hidden="true"></span>
<span class="legacy-anchor" id="kahler-step-2" aria-hidden="true"></span>
<span class="legacy-anchor" id="2-bigな場合をstable-familyとの比較で排除する" aria-hidden="true"></span>
<span class="legacy-anchor" id="kahler-step-3" aria-hidden="true"></span>
<span class="legacy-anchor" id="3-実際のlineと切断空間を同時に比較する" aria-hidden="true"></span>
<span class="legacy-anchor" id="kahler-step-4" aria-hidden="true"></span>
<span class="legacy-anchor" id="4-bigな底の捻りから補間用の切断を得る" aria-hidden="true"></span>

両方向に異なる結果が渡る。Log Abundanceから戻る良いモデルはWhole-fiber variationのsmooth族の帰結で使い、variation主定理の入力にはしない。

| 供給元の結果 | 利用先・使用箇所 | 使う内容 |
|---|---|---|
| <span id="connection-c07"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-3) · [Corollary 6.2 · pp. 40–41][OI] | [Log Abundance](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/log-abundance-characteristic-zero/#nonvanishing-explanation-1) · [Theorem 1.2 → Lemma 6.1 · pp. 6, 30–31][LA] | **直接入力**。境界0のAlbaneseファイブレーションに適用し、非消滅反例のirregularityを0にする。LAでの劣加法性の用途はここに限る。 |
| <span id="connection-c12"></span>[Log Abundance](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/log-abundance-characteristic-zero/#corollary-11-2) · [Corollary 11.2 · pp. 73–74][LA] | [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#proof-6) · [Corollary 1.3 proof · p. 5][WV] | **帰結への入力**。BDPPで擬有効となる各閉ファイバーにsemiampleなgood modelと有効例外差を与える。canonical性を確認してTajiを適用する。 |
| <span id="connection-c08"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-1-step-2) · [Lemma 2.6 · p. 9][OI] | [Kähler abundance](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-log-abundance/#proof-3) · [§5.1; reused in Lemma 5.7 · pp. 91, 98][KA] | **直接入力**。相対飯高底へ移して一般ファイバーを小平次元0にし、低次元への帰納法を続ける。 |
| <span id="connection-c09"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-2-step-1) · [Lemma 5.2 · p. 32][OI] | [Kähler abundance](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-log-abundance/#proof-3) · [§5.1 · p. 91][KA] | **直接入力**。水平境界を少し下げたbigなファイバーを射影的stable familyに比較し、代数次元0でbigな場合を排除する。 |
| <span id="connection-c10"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-1) · [Proposition 2.7 / Theorem 3.1 · pp. 10–17, 17–18][OI] | [Kähler abundance](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-log-abundance/#proof-3) · [Lemma 5.2 · pp. 91–94][KA] | **直接入力**。切断空間と実際の有理Hodge lineを比較し、M=p*Pと底の随伴bignessを得る。余次元2へ落ちる項の符号は別途扱う。 |
| <span id="connection-c11"></span>[Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-2) · [Lemma 3.3 · pp. 18–19][OI] | [Kähler abundance](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-log-abundance/#proof-3) · [Lemma 5.7, interpolation · pp. 98–99][KA] | **直接入力**。bigな底の捻りから非零切断を作り、別の有効因子と補間して正の小平次元を強制する。 |

Log AbundanceのAlbanese帰着は境界0の場合で、原稿にはこの用途をHacon–Popa–Schnellで賄う別経路もある。Kähler稿への各行は特定の補助結果の利用であり、利用先自身の仮定を残す。Log Abundanceを経由する推移的な経路を、Schnellへの直接入力とはしない。

<span id="connection-p01"></span>

**明示的な前提への対応。** [Orbifold Iitaka, Theorem 1.1 · pp. 2–3][OI]は[Conditional Kähler models, Assumption 2.2 · pp. 7–8][CK]に対応する。任意次元class C、係数1、不変な底項の規約まで含めた対応であり、他のKähler MMP・豊富性の前提は残る。[前提の記述](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/conditional-kahler-fourfolds/#results)へ進める。

## 別証明・結果の包含・背景

<span class="legacy-anchor" id="6-phとbsの役割と直接辺にしない比較" aria-hidden="true"></span>
<span class="legacy-anchor" id="section-7" aria-hidden="true"></span>
<span class="legacy-anchor" id="comparisons-step-1" aria-hidden="true"></span>
<span class="legacy-anchor" id="1-phは通常劣加法性への別経路を与える" aria-hidden="true"></span>
<span class="legacy-anchor" id="comparisons-step-2" aria-hidden="true"></span>
<span class="legacy-anchor" id="2-bsは半豊富性へ進むための異なる入力を使う" aria-hidden="true"></span>
<span class="legacy-anchor" id="comparisons-step-3" aria-hidden="true"></span>
<span class="legacy-anchor" id="3-類似手法と背景を分ける" aria-hidden="true"></span>

[Projective Hodge lines, Theorem 1.1 · p. 2][PH]と[Orbifold Iitaka, Corollary 6.3 · p. 41][OI]は、標数0での同じ通常劣加法性への別証明である。後者は対数的結論も含む。通常の主張はその境界0の特殊化という**結果の包含**であり、証明依存ではない。[二つの底の補間](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/projective-hodge-lines/#proof-3)と[標数0への移行](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#proof-4)を比較できる。

[Projective Hodge lines, Lemma 8.4 / Theorem 8.1 · pp. 28–29][PH]は[Whole-fiber variation, Remark 3.17 · p. 25][WV]が挙げる別の随伴比較である。制限上でtensor replacementを作り直す必要があり、受け手の本文は直接比較を採用する。別に、smooth族で底とファイバーの小平次元が非負なら、加法性とvariation下界の比較でも底の上界を得る（[比較段落 · p. 5][WV]）。負の底やすべてのspecial baseはこの経路で扱わない。

Orbifold IitakaとProjective Hodge linesの弱正値性・補間は類似手法だが、Hodge lineの仮定は異なる。Orbifold IitakaとKähler B-semiamplenessのroot line計算でも、orbifoldのinf-multiplicity境界とlct discriminantは別物である。[Kähler B-semiampleness · p. 3][BS]はorbifold Iitaka theoremを使わないと明記するが、全論文間関係の調査済みを意味しない。[全体図](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-b-semiampleness/#proof-1)で安定化と積分解の経路を追える。

Reverse log additivityのconnection-formによるAx–Schanuel論証の出典は方法の背景として記録する。必要な半単純の場合を本文内で論じており、[外部入力の説明](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/reverse-logarithmic-additivity/#dependencies)で外部定理の直接適用と区別する。

## 原典・確認範囲

<span class="legacy-anchor" id="8-原典の版と残る確認範囲" aria-hidden="true"></span>
<span class="legacy-anchor" id="section-9" aria-hidden="true"></span>

[公式一覧][CONTENTS]／[OpenAI Research Catalog · 033 · p. 5][OV]。公式分野はAlgebraic and complex geometryで、記事一覧は公式順を保つ。033原稿はcommit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`に固定する。034の接続先は公開記事の参照版 `adc7f1241b42e322a6451854ab7e4b4c146bf78a`（Log Abundance：2026-09-24、Kähler abundance：2026-10-04、conditional Kähler models：2026-10-05）を保持する。

2026年10月11日の改訂では、5篇の固定PDFと不足していた証明対象の主張・結論を照合し、ハッシュを再確認して、既存の接続と記事を突き合わせた。12入力と1前提対応の原典記述・使用箇所の照合は10月8日の記録を継承し、外部証明の全検証を新たに主張しない。適用条件と確認限界を含む[接続記録](https://github.com/masataka123/OpenAI-Math-Digest/blob/main/drafts/catalog-033/overview/connections.json)を保持している。

- [Orbifold Iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/#sources)：rank loss、安定族の全構成、付値・BFMT比較、coreの帰結。
- [Whole-fiber variation](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/#sources)：正則化・L²の全評価、Hanamura・SGA1の原典記述、§§8–9全体。
- [Reverse log additivity](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/reverse-logarithmic-additivity/#sources)：斉次置換、compact flag、境界・表現論の全計算。
- [Projective Hodge lines](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/projective-hodge-lines/#sources)：多変数延長、補助結果の全証明、§§8–9の別証明。
- [Kähler B-semiampleness](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-b-semiampleness/#sources)：parameter-space全構成、偏極変更、外部コンパクト化理論。

未記録の関係は未調査である。主張・使用箇所の照合、証明概略の説明、証明全体の独立検証を区別し、専門家査読・形式検証済みとはしない。

[OI]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf
[WV]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026/paper.pdf
[RA]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf
[PH]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Projective-Hodge-lines-and-ordinary-Iitaka-subadditivity-September-27-2026/paper.pdf
[BS]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/B-semiampleness-for-compact-log-smooth-Kahler-fibrations-September-10-2026/paper.pdf
[LA]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf
[KA]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-for-compact-Kahler-spaces-under-logarithmic-Iitaka-subadditivity-October-4-2026/main.pdf
[CK]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Conditional-good-minimal-models-for-compact-Kahler-fourfolds-October-5-2026/paper.pdf
[OV]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/overview.pdf
[CONTENTS]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/CONTENTS.md
