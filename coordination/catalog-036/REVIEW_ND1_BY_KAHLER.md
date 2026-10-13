# Numerical dimension one — 執筆者以外による内容点検

- 点検担当：Kähler記事担当サブエージェント（ND1執筆者は本部）。
- 日付：2026-10-13。Kähler初稿終了20:17:06 JST後の別作業として実施。
- 対象：日英article、sources.json、citations.json、固定原典14頁、BCHM10 p10、Laz10 p11、Log abundance Theorem1.1 p2。
- 性格：主要主張・核心接続の原典対照。専門家査読／全証明の独立検証ではない。

## 結果

主要結果の仮定・全結論と証明への対応、および二つの曲面を区別した帰着は原典に合っている。重大な内容修正は見つからなかった。以下の軽微な明記を推奨する。

- Theorem1.1の主張欄で、日英ともEが「有理因子／a Q-divisor」であることを明記する。原典p2はeffective q-exceptional Q-divisorと記載する。表示式から有理性は従うが、主結果の全結論に準拠するため明記がよい。現在の「E≥0、q-exceptional」をそのまま残して一語補える。記事ファイルは点検担当から変更していない。

## 対応表

| 対象 | 原典 | 記事の説明先 | 点検結果 |
|---|---|---|---|
| n≥3、smooth connected projective complex、K pseff、κσ=1、固定ample捻りのlimsup | pp1–2 | 主要結果 | 一致。nef未確立のKに交点数の定義を使用せず、O(m)上界を推測しない |
| 有限K-negative因子的縮約とK-flip、projective Q-factorial terminal終点、非抽出 | Thm1.1 p2、Prop2.1 p4、pp7–8 | proof-1-step-1/4 | 一致。有限の正摂動列の連結が停止するとは述べない |
| 有効q-例外的標準因子差、縮約される全素因子の正の係数 | Lem2.2 pp4–5、Prop2.1末尾p8 | proof-1-step-4 | 一致。discrepancyの増加とtelescopingを明記。有理性を明文化する上記軽微提案のみ |
| 両側で余次元3以上の外の同型 | Lem2.3 pp5–7 | proof-1-step-1 | 一致。target側は有限原素因子集合とdiscrepancy、source側はalgebraic (n−2)-cycle空間の次元減少 |
| 各正摂動のMMP停止とsemiample終点 | p7、BCHM Cor1.4.2 p10と直前の停止文 | proof-1-step-1 | klt、big effective boundary、effective scaling、nefな大きい対を保持。Mori分岐排除も原典通り |
| 固定S、固定P、j=j(m)を先、d_jの倍数k>mを後で選択 | Lem3.1 pp8–10 | proof-1-step-2 | 一致。Nadel入力はsmooth projective、integral L、effective rational R_m、nef and big差（本稿ではample）に対応 |
| 正平方から二次切断増大をXの一つのample捻りへ戻す | §4 pp13–14 | proof-1-step-2 | 一致。可除次数列上の正limsupで十分。P_Xを一つのample A_Xで押さえる |
| 第一のSと負曲線上の点を通る第二のT | Lem3.2/3.3、Prop3.4 pp10–13 | proof-1-step-3 | 一致。Tは必ずしも正規ではない。平方の非負・重複度和・固定e上の線形消滅・一様Hodge負値を保持 |
| 特異集合にある負曲線の扱い | pp11–13 | proof-1-step-3 | 解消上の固定curveとambient jet評価を使うことで含まれる、という説明が原典に一致 |
| 同じYがgood minimal model | Cor1.2 p2、LA Thm1.1 p2 | proof-2-step-1 | ordinary lc pair (Y,0)、effective rational zero boundary、nef Q-Cartier K_Yに適用。同値な別因子ではなくK_Y自体のsemiampleness |

## 引用・日英・形式

- 日英で主結果、式、5つの主要接続、確認範囲は対応している。
- articleGuidesのconclusionCoverageはnef性、有限列とモデル、比較式とsupport、同じYのsemiamplenessを個別に参照する。
- 独立証明節は主定理と系の2節。途中で使うProp2.1/3.4は独立節として詳説した形ではなく、主定理の帰着内で内容を提示しているため、中間命題の独立主張欄を追加する必要は認めない。
- 外部入力の原記述点検はBCHM・Nadel・LAに限定され、KM98/Har77/Ful98の書誌本文確認は保留として読者に見える。正確な範囲表示である。
- AHK07は方法上の先行例、036 generalized lc原稿はこの主定理の直接入力として扱わない。原典にない依存を追加していない。
- 図の画像表示、共通CSSでの375px／PC表示、冊子PDFは本点検の対象外。

## 点検の限界

Lemma2.3を含む原稿の論証経路・仮定・局所計算の用途を原文に照合したが、全ての古典的MMP基礎結果・Borel–Moore局所化・Hodge index・Nadel・LAの外部証明を再帰的に検証していない。数学的正しさの認定や専門家査読と呼ばない。
