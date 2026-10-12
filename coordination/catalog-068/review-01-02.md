# 01・02 別担当内容点検

- 点検者：papers_06_07（06/07執筆者、01/02の執筆者ではない）。2026-10-12 09:27–09:33 JST。
- 対象：01/02の`article.ja.md`本文・英語版の主要主張／核心説明、固定commit fd4aeeb2ee4fc729c18d98444fed42fd0529eeebの原典。点検中の同時制作を許容し、他担当のファイルは編集していない。
- 性格：著者が述べる主張・証明経路と記事の照合。全証明の独立再検証、外部入力の再帰的検証、専門家査読ではない。

## 01 Anticanonical nonvanishing from smooth semipositivity

照合箇所：Theorems 1.1/1.2（pp.2–3）、Theorem 2.1/Lemma 2.2（pp.5–8）、Proposition 5.1とその証明（pp.15–20）、Theorem 1.2への帰納とTheorem 7.2の不変帰還（pp.21–25）。

- 滑らかな連結射影多様体、滑らかな反標準半正値性、ある正整数mでの通常非消滅というTheorem 1.1の量化は原典と一致。
- Theorem 1.2では正次数形式の消滅、D有効整、−K+Dの有限な加重標準測度と、対象Lの局所有界半正値計量を区別している。a>0,b≥0の結論、Lを反標準に限定しない点を確認。
- Proposition 5.1ではnormal equidimensional中間モデル、水平極のない有理切断、零次を含む全指数のrank条件を記事が保持する。零次密度と高次momentが別の計量を供給し、許容境界と例外極を押下げで処理する接続を照合。
- 不変部分への正値性は任意部分束への制限ではなく、滑らかな係数計量とcompact平均の直交商として使う。最終段階で自然線形化・monodromy不変性・finite étale normの指数を保持する説明を確認。
- 外部入力について本点検者が記述を再読したもの：BP08 Theorem 0.1（PDF p.2）、Ber09 Theorem 1.2（PDF p.3）、CDP Structure theorem 1.4（PDF p.3）、DPS01 Theorem 2.1.1/Corollary 2.1.2（p.8）。著者の原典での使用箇所と記事の役割は一致する。これらの入力の証明は再検証していない。

結果：選択範囲に記事と原典の重大な不一致は認めなかった。外部入力BDPP/CP19/GKP等を本点検者が全件再照合したとはしない。筆者の確認記録と本記録の範囲は区別する。

## 02 Invariant anticanonical indices and conversion of twisted differentials

照合箇所：Theorems 1.1/1.2（pp.1–2）、Lemmas 2.1–2.2および§2.2（pp.4–8）、§§3.1–3.3（pp.9–14）、§4（p.15）、Proposition 5.1/Corollary 5.2（pp.16–17）。

- Theorem 1.1はcompact complexとcompact real torusのみで、projective/Kähler/正値性を追加していない。十分可除なすべての正指数、P(0)=実際の不変Euler indexという二結論を説明する。
- 固定成分の自然反標準指標w=Σν_i、偏極した格子数え上げ、低い可除指数を含む多項式性、deleted facesへのretractionによる定数項の相殺を原典本文と照合。非閉集合のEuler数との混同はない。
- Theorem 1.2は固定した擬有効Cartier誤差Dと非有界指数の通常切断を入力とする。最大dominated base→vertical minimum→全k≥0のrank 1→有界base metric→Fujino vanishing→Q(0)>0→正指数切断という順序と、零指数を落とさない点が一致。
- Proposition 5.1のr≥0、0≤p≤dimF、injectivityと固定pで非有界rという結論を確認。不変形式をSへ降ろした後に通常変換を使い、最後にnormを取る。equivariant conversionを不必要に仮定していない。
- 本点検者が外部記述を再読したもの：Ber09 Theorem 1.2、DPS01 Theorem 2.1.1、Fuj18 Theorem 1.3（PDF p.2）のKollár–Nadel型消滅。LMPTX23 Theorem 4.1（誌面1409/PDF17）は06制作時に固定原典を読み、その負の行列式の擬有効性が§4に入力されることを照合した。01の構造定理・normは本記録の01範囲でも確認した。

結果：選択範囲で重大な不一致は認めなかった。Atiyah–Segal/Atiyah–Singerの外部固定点公式や局所指数積分の証明を本点検者が再検証したとはしない。幾何的モデル構成・Hartogs延長・vanishingの全細部を独立に証明し直す点検ではない。

## 残る検査

画面比較、公開リンク、モバイル表示、日英冊子PDFはこの内容点検の対象外。引用同期後の機械検査は執筆者・本部の結果と合わせる。外部文献の証明を再帰的に追う作業へは拡張していない。
