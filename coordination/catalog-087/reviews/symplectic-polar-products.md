# 交差点検 — Symplectic Balls in Symmetric Polar Products

- 点検担当：general-mahler執筆担当、明示指定 `gpt-6-astra`。対象の執筆者とは別担当。
- 第1段階の原典・接続照合。全証明の独立検証、専門家査読、公開判定ではない。
- 開始：2026-10-15 21:38:56 JST。
- 終了：2026-10-15 21:39:49 JST。
- 自分のGeneral初稿終了：21:37:43 JST。今回の点検はその後の別作業。
- 対象：drafts/catalog-087/symplectic-polar-products の日英本文、sources.json、5種TikZ。原典は固定commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a` の19ページPDFからのlayout text。

## 判定

確認した主要結果と接続に、修正必須の数学的不一致は見つからなかった。以下の範囲で第1段階の概説として受領可能。外部球充填定理とnonsqueezingの全証明まで確認したという意味ではない。

## 原典と照合した内容

1. **Theorem 1.1、原典p.1、本文「主要結果」と証明§2。** $n\ge2$、原点対称・全次元凸体、$U_K=\operatorname{int}K\times\operatorname{int}K^\circ$、$\omega_0=\sum dq\wedge dp$、球容量 $c=\pi r^2$ を保持。任意の $0<c<4$ の滑らかな埋込みと幅の上限4を区別し、容量4の埋込みを主張していない。非対称体や任意位相空間凸領域へ結論を拡張していない。
2. **Theorem 2.1、原典pp.4–7、本文§3。** 孤立共通零点・消滅次数・全閉sublevelのコンパクト性を、図前に主張として提示。$a<\mu<bk$、固定した内側半径の後での$\delta$選択、固定コンパクト台による非コンパクト領域上のMoser流、$\phi_1^{-1}$の向き、放射状モデルの容量を原典と照合。Moserの元のコンパクト多様体定理をそのまま非コンパクト領域へ適用した記述ではない。
3. **Proposition 3.2、原典pp.8–12、本文§4。** レンズ写像の級数、signed primitiveの滑らかさ・奇性・非負微分・全領域で一様な誤差を図前に記載。$1/A$の主要項$\pi/2$から積分後の$\pi/4$、動く端点の誤差積分$1+\pi/e$、先に$r_*$を1へ近づけてから$k\to\infty$の選択順を照合。固定高さだけの境界極限で一様性を代用していない。
4. **Proposition 4.1、原典pp.12–14、本文§2段階1–2。** $q=x$、$p=-u-\sum J_kb_j$の符号、pullback形式、大域単射性の単調性比較を照合。$S=(1+\eta)\pi k/4$、$Sc<\pi k$、源の$\sqrt S$拡大と運動量の$1/S$縮小の共形係数相殺は正しい。支持関数評価は$m,C_K$を固定してから$k$を増やす。
5. **Lemma 5.1／主定理証明、原典pp.15–16、本文§2段階3–4。** $K\subset K'\subset\lambda K$と$(K')^\circ\subset K^\circ$の向き、再度の源拡大と位置縮小、$c,\alpha,K',\eta,k$の順を照合。各$c$に一つの有限構成を作り、埋込み列の極限を取らない。下界の実埋込みと上界の支持正方形円柱＋nonsqueezingは別の論証として明示される。
6. **Corollary 5.3／Remark 5.4、原典pp.16–17、本文§5。** $2n$次元球体積$c^n/n!$、内部と閉体の体積同一、$c\uparrow4$、$n=1$の区間積4、cube–crosspolytopeの達成例を照合。等号分類を追加していない。
7. **Corollary 5.5、原典p.17、本文§6。** $n\ge3$、有限$k\ge1$、正の容量、二種類の厳密不等式から一つの$c<4$を取ること、閉球の開近傍規約、compactな像からの近傍縮小、主定理への合成を照合。外部定理の球目標の必要十分性を$U_K$での必要性へ移していない。
8. **カタログ関係、原典p.2。** 対称Mahler原稿のレンズは背景として紹介し、その体積定理・等号分類を入力としていないことが原典に明示される。記事も同じ区別を保持。一般凸体原稿との直接依存を創作していない。

## 外部原典の記述と適用

- **Artstein-Avidan–Karasev–Ostrover**, arXiv:1303.4197v2, Remark4.2 pp.14–15：支持slabの円柱が積を含み、共役pairing=1により面積4の標準円柱へ移る記述を読んだ。本稿p.16は正方形から円板への面積保存写像も直接計算している。Hofer–Zehnder容量の値から埋込み下界を推論していない。
- **Gromov**, *Pseudo holomorphic curves in symplectic manifolds*, §0.3.A Corollary、誌面310/PDF4：球半径と円柱半径の障害を読んだ。容量規約へ換算すると上界4になる。擬正則曲線の証明全体は未検証。
- **Moser**, §4 Theorem2および変形方程式、誌面292–293/PDF7–8：closed nondegenerate 2-formの変形とvector fieldによるpullbackの記述を読んだ。本稿pp.5–6で独自に示すcompact supportが非コンパクト領域上の適用を支える。
- **Gross**, arXiv:1905.00852v1 §3.2 p.9：$\psi(z)=-(8/\pi^2)\sum z^{2k-1}/(2k-1)^2$を照合。$F(w)=i\psi(iw)$は記事の交代級数と一致し、拡大縮小を含まない。確率論の証明全体は未検証。
- **OpenAI, Symplectic Ball Packings in Higher Dimensions**, September23,2026、固定版Theorem1.1 p.2、§1.4 p.4：$n\ge3$、容量$\pi r^2$、閉球近傍上の埋込み、開目標、$\sum R_i^n<R^n$と$R_i+R_j<R$の記述を読んだ。本稿Corollary5.5は十分性だけを使用。43ページの入力定理の全証明は未検証。

## 日英・図・形式

- 日英のcitation marker順、proof-target順、statement block順は一致。
- Display mathは文末句読点を除いて一致。主要な仮定・結論・留保に日英差を認めない。
- 5種TikZの箱・矢印の数式と役割を本文・原典に照合。容量下界／上界、尺度相殺、極限、閉球近傍の区別を保持。
- Theorem2.1、Proposition3.2の独立節は、番号だけでなく原典の仮定と全結論を図前に置く。
- 画像の全viewport表示検査は本部／執筆担当の検査記録に委ね、今回の数学的接続点検とは区別する。

## 軽微な編集指摘（非blocking）

- 重大度：低／表示のみ。英語の生成文献案内5件で `..` が出ている。`citations.json` の `guideRole.en` の末尾句点と生成器の句点が重複するため、担当に末尾句点を削除して再生成するよう連絡した。原典・数式・引用ページの変更は不要。

## 残る確認範囲

全非コンパクト解析・全レンズ評価を独立に最初から証明したわけではない。外部nonsqueezing、球充填定理、確率論、外部文献の再帰的証明検証は対象外。今回の結論は選んだ原典記述・適用条件・論証の接続・日英説明の一致に関するもの。
