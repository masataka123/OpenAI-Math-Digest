# 第3論文の独立原典点検（担当A）

- 対象：`drafts/catalog-057/half-weight-fourfold-abelianity/`、本部初稿（2026-10-11 23:23:52 JST終了）。
- 点検：2026-10-11 23:28–23:32 JST。執筆者とは別の担当Aが実施。記事は直接変更していない。
- 原典：2026-10-05版、14頁、SHA-256 `d017fae040e20002b012b8636d9a757cb4471728d3e06d6b80cca60970602c32`。
- 範囲：主張と主要証明接続、日英同等性、図3原本の矢印・数式、指定された直接外部入力の記述。全証明の独立再証明ではない。

## 指摘

1. **P2：係数の降下の説明を補う。** 日英`article.*.md`103行付近の「像は $g^*b_a(g^*\sigma)^m$ と書ける」は、直前の比 $u_a$ の降下だけからは出ない。原典p.5では、まず有理係数 $h_a\in\mathbf C(Y)$ を得たあと、$\sigma$ が正則非零となる滑らかな底の開集合に縮め、$g$ のsubmersion性から $h_a$ が全逆像で正則となることを使う。compact connected fibres上で定数なので $h_a=g^*b_a$ と降下する。この一段を1–2文追加すると、極の排除に入る論理が明確になる。主張の誤りではなく非自明な接続の省略。
2. **P2：図の余次元の母空間を明記する。** `diagrams/construction.tikz`2行の `codim(fixed-point incidence)=4` は固定した $x\in D$ でのパラメータ条件を指すと明示する。原典p.8の(4.2)は $\dim I_{\rm bad}\le\dim\mathcal A+\dim D-4=\dim\mathcal A-1$。例えば「固定 $x$ のbad parameter codimension $4>\dim D=3$」とすれば全incidenceの余次元との混同を避けられる。本文の各4行列の独立条件という説明は正確。

## 照合結果

- Theorem1.3：smooth connected projective fourfold、nonempty smooth connected reduced divisor、order-two rootのspecialness、Assumption1.2、全離散群 $G$ のvirtual abelianityを全て保持。全結論への説明は概略節末の有限指数部分群の像による議論に存在する。
- Prop3.1：even pullback、open上smooth connected fibreとtrivial cotangent、$P\ne D$上のordinary submersion、$D$上のroot-chart submersionという4条件を保持。specialness降下と、specialnessを仮定しない群全射の2結論を別々に説明している。
- Lemmas2.1/2.2/2.4：閉形式によるwedge方向、cotangent filtrationと比の降下、飽和のcodim1原始生成元／codim2延長を原典pp.3–6と照合。上記係数降下の補足以外に必要条件の脱落なし。
- 群全射：偶数meridian、補集合の基本群からの商、proper smooth connected fibresのEhresmann、底の開集合の包含からの全射を原典p.6と照合。
- Prop4.1：8次元、4個のgenus-one曲線の積、even pullbackとProp3.1全4条件を独立主張欄に記載。rootのspecialnessを構成の仮定に加えていない。
- Lemmas4.2–4.4：8式の独立evaluation、固定点回避の4条件、deleted-column rank-dropの余次元2、全座標非零kernel vector、$2C\operatorname{diag}(z)$のrank2、唯一のdominant componentをpp.7–9と照合。$M(-D)$の評価がDで自動的に零でない点も保持。
- 第1論文Theorem1.1原典p.2は任意次元のordinary smooth compact Kähler manifoldに関する全基本群の主張であり、ここでのspecial smooth projective eightfoldに適用できる。第1論文の付録や別結果を追加入力にしていない。
- 日英主張・証明節・3図の論理と引用は同等。本文の独立主張欄と全体図の配置も契約に沿う。
- 外部原典の指定記述を保存PDF/textで再照合：Ehresmann §1 proposition（p.154/PDF3）、Serre Thms2–3（pp.19–20/PDF20–21）、Demailly VI Prop8.9 p.312、Stacks Tag0B3I/Lemma45.16 p.108とTag01XT/Lemma8.1 p.16。原稿の引用section tagを具体lemma tagへ細分した対応は適切。

## 点検の限界

Appendix Aの別構成、Hironakaの原典、外部結果の証明そのもの、第1論文の完全独立検証は今回の範囲外。公開画面・サイト組込み・日英冊子PDFの点検は未実施。上記2点の修正後、主要主張・直接入力・主要接続について本レビューの未解決指摘は解消可能。

## 修正の確認（2026-10-11 23:33 JST）

本部の修正後に日英本文103行とconstruction.tikzを再読。係数 $h_a$ の正則性→compact connected fibres上の定数性→Lemma2.4による降下が両言語に追加され、固定点条件の余次元4も「固定した $x\in D$ でのパラメータ条件」と明示された。2指摘は解消。図の再生成・生成物の表示確認は本部の担当とする。本レビューの範囲で未解決の内容指摘はない。
