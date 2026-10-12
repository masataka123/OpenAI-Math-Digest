# カタログ068：03・04の執筆者外内容点検

- 点検担当：papers_01_02（03・04の執筆者 papers_03_04 とは別担当）
- 点検日時：2026-10-12 09:31–09:36 JST
- 対象版：公式原稿 September 26, 2026、commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。
- 対象成果物：`drafts/catalog-068/bounded-anticanonical-metrics/` と `drafts/catalog-068/cohomological-transfer/` の日英本文、引用記録、主要TeX図。
- 性格：主要主張・核心帰着・直接入力の記述と使用箇所の原典照合。外部定理の証明を再帰検証したもの、全証明の独立再証明、専門家査読・形式検証ではない。

## 03 Bounded anticanonical metrics on klt pairs and torus quotients

判定：掲載した主要結果3件とその全結論について、原典との重要な不一致は発見していない。

| 照合箇所 | 原典 | 結果 |
|---|---|---|
| Th1.1の仮定・量化 | p.2 | projective Q-factorial klt、effective rational boundary、nef、解消上のlocally bounded semipositive metric、非零Euler値、ある正のCartier multipleを一致確認。boundedをcontinuousやsmoothに強めていない。 |
| Eulerから行列式、最大支配底 | Lem2.1–2.3 pp.5–8 | 非有界捻り、飽和cotangent tensor determinant、逆の擬有効性、最大性でpencil排除、水平次数のaffine性、縦成分最小比を照合。 |
| zero twistとessential supremum | Lem2.4/Prop2.5 pp.9–11 | 全a>=0のrank one、SNC discrepancyのrounding、共通full-measure集合とL1 compactness、境界で欠けた成分を使う両側有界性を確認。countable intersectionをZariski openと呼んでいない。 |
| 非消滅への帰還 | Lem2.6/Th1.1 proof pp.11–12 | 小量混合、境界係数<1、固定混合のtrivial ideal、追加aHの正確なideal O(-aH)、a=0を含む消滅、Q(0)>0、例外因子pushforwardを確認。 |
| Th1.2と自然線形化 | p.2、§3 pp.12–18 | RCとsmooth semipositive、各代数的torusに対する存在量化。補助GITのcharacterをLへ移していない。 |
| quotient / orbit bound | Prop3.2–3.5 pp.13–17 | stable=semistableの完備商、有限slice境界、自然反標準identity、arc orders→graph compactification→局所一様orbit bound→Kiselmanの順を一致確認。 |
| 全complementへの延長 | §3.5 pp.17–18 | 商の有界ノルムからupstairsで有界係数、unstable divisorsも含む全境界の除去、自然不変性維持を確認。 |
| Cor4.1と01 | p.18、01 Th2.1 p.5/Lem2.2 p.8 | finite coverは直積とせず、残留torus monodromyと自然不変sectionを保持。01の構造とnormのみを帰結で使い、01非消滅結論を入力にしていない。 |

日英の主要仮定、量化、metric regularity、自然線形化、確認範囲は一致。各主定理の全体図は詳細説明より前にある。中間命題を独立した証明節にしていないため、主張欄は主定理の既掲参照で整合する。

直接入力を再照合：DPS01 Th2.1.1（arXiv math/0006205v2 p.8）、LMPTX23 Th4.1（出版社PDF p.17／誌面1409）、PT14 Th3.3.4–3.3.5（arXiv1409.5504v1 p.24）、Fuj16 Th1.3（arXiv1607.04684v1 p.2）、DWZZ19 Th1.1（arXiv1810.12733v1 p.1）、01の構造とnorm。PTのgeneric multiplier-ideal inclusion、Fujinoのample base curvature domination、Kiselmanのconnected tube fibers・imaginary-coordinate independenceと、それぞれ原稿で使う条件を対応させた。

## 04 Cohomological transfer and equivariant anticanonical sections

判定：掲載したTh1.1/Cor1.2の最短証明経路、独立節Prop2.2/Cor4.3は原典と整合。原稿の別経路・追加独立出力を含む全内容の制作完了とは扱わない（下記範囲留保）。

| 照合箇所 | 原典 | 結果 |
|---|---|---|
| Th1.1/Cor1.2の全結論 | p.2 | 任意のlinearization P、固定linearized M、-M pseudoeffective、unbounded Iで不変切断→some m>0の同じlinearizationの不変切断。Euler/H1を追加していない。帰結はordinary sectionのみ。 |
| common ratio field | §3 pp.8–9 | equal linearized degree、内側indexでの共通体、Stein field、底への自明torus作用、水平affine性と縦minimaを確認。 |
| 全不変adjoint rank | §3 eq.(6) p.9 | j=0を含むrank one、JacobianはPのshiftと別の自然作用、共通fieldへ比を戻す議論を確認。 |
| 固定idealの移送 | §3 pp.9–10 | smooth coefficientからcontinuous最大値metric、別のstrict singular zero-degree metric、正則不変直交商、integrable density、境界correction、f*D*全体のexceptionality、O(-D*)⊆J、全j>=0のNadel消滅を確認。J=Oとはしていない。 |
| Prop2.2主張と全結論 | pp.6–8 | 正規等次元Wと滑らかなVを区別。no horizontal poles、all k>=0のrank、ordinary/invariant両版、regular injection、positive continuous psh maximum metric、trivial base actionを掲載。properness/open mappingによる連続性、codim2零集合の排除まで説明あり。 |
| Cor4.3 | pp.10–12 | 自然指数のactual zero、m+1でのHard Lefschetz、飽和determinantの逆pseudoeffectivity→Th1.1。不変性が一般のshiftで自動的に成立するとはしていない。 |
| Cor1.2への降下 | §14.1 p.39 | compact factorのPic0=0、algebraic torus closure、canonical frames、deck invariant section、finite normを照合。01非消滅主定理を使っていない。 |

主要主張と核心説明の日英を照合。証明対象参照、Prop2.2/Cor4.3の図前主張欄、本文と図の全体経路を確認。

直接入力を再照合：02 Th1.1 p.1、01 Th2.1 p.5/Lem2.2 p.8、DPS01 Cor2.1.2 p.8、LMPTX23 Th4.1、Ber09 Th1.2（01/02採用arXiv math/0511225v2 p.3と04採用公刊版誌面533/PDF3を区別）、PT14 Th3.3.4–3.3.5 p.24。Nadelの記述はDem09『Analytic methods in algebraic geometry』December2009講義ノートTh5.11 p.38のPDF画像で、曲率>=epsilon omegaと全q>=1の消滅を確認（Web text抽出は不等号を誤認するため画像確認した）。Nadel原論文自体は未照合。

## 指摘と処理

1. 03/04の01 norm引用がpp.8–9になっていた。Lemma2.2はp.8内で完結しp.9は§3開始なのでp.8へ修正を依頼。担当が日英引用・図を修正し再生成したことを確認。
2. 04 transfer.tikzの矢印に「滑らかな最大値計量 / smooth maximum metric」とあり、入力係数のsmooth性と出力metricのcontinuous性を混同し得た。「連続な最大値計量 / continuous maximum metric」へ修正を依頼。担当が変更・図再生成中と報告。最終引用hash検査は本部でも確認すること。
3. 同一Fujino文献の02キーFuj18と03キーFuj16を発見。02側をFuj16に統一し、本文・TeX/SVGを再生成済み。

## 範囲留保・残る本部判断

03：GIT、Luna slice、finite-morphism discrepancy、Skoda、psh extensionの基礎原典は著者の使用箇所を読んだが再帰的な元文献照合までは未実施。記事に明示済み。

04：原稿§1.2（p.3）はTh7.2を独立したharmonic mechanismとして紹介している。現在の記事は原稿p.5の「最短経路」を採用し、Th5.2 p.13、Th7.2 p.17、Th11.1 p.27、Prop14.1 p.41の追加出力は末尾に役割・位置のみ載せ、証明詳説と直接入力照合を範囲外と明記している。これは正直な限定だが、ユーザーの「主要結果の全結論」に照らし、特にTh7.2を主要結果として追加制作するか、未完成範囲として引き継ぐか本部判断が必要。最短経路の照合成功をもって全独立結果まで内容制作済みとは報告しない。

04の§§5–13および§14.2–14.4の全証明と全接続、外部proof、flattening/同変解消等の基礎文献は本点検の対象外。出版・サイト組込み・PDF生成・公開許可の判定も本点検には含まない。
