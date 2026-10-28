# カタログ079案内への申し送り

担当：author_critical_wave_three / gpt-6-astra / high。2026-10-28。
原典版・固定commit・ハッシュは sources.json および coordination/catalog-079/inventory.json。

## 公式順第2論文の一覧文案

- 原典結果欄：Theorem 1.1 · p. 1; Corollary 10.6 · p. 158
- ja主張：三次元半波動の臨界 \(L^3\) 時空間評価を任意の正のSobolev損失で示す。補間と周波数総和で \(2<p<\infty\)、\(\alpha>\max(0,1-3/p)\) を得る。
- en claim：Critical spacetime \(L^3\) smoothing for the three-dimensional half-wave with every positive Sobolev loss; interpolation and frequency summation give \(2<p<\infty\), \(\alpha>\max(0,1-3/p)\).
- ja役割：円筒模型の極値配置と位相記録のエントロピーを用いる三次元の経路。薄いround配置の円筒への移送と、物理初期面上の正則性が接続点。
- en role：A three-dimensional route through extremal cylinder configurations and phase-record entropy. Its connections are the transfer of thin round configurations to cylinders and regularity on the physical initial slice.

## 第1論文との関係

両原稿のTheorem 1.1（ともにp.1）を直接比較した。第1論文（2026-10-25）は全n≥2、2≤p<∞、s_+(p)+ε、p=2ではε=0も可。第2論文（2026-09-24）はn=3、p=3、ε>0が主定理で、Corollary 10.6（p.158）が2<p<∞のstrict範囲を供給する。第1論文のn=3の主張は第2論文の番号付き局所平滑化の結論を包含するが、これだけで証明依存を意味しない。

第2論文は損失ゼロε=0を明示的に扱わない（p.1）。対数損失の精密化も本記事の主張に含めない。正負の半波動の違いは複素共役で移せる（第2論文pp.151–152, 158）。

本記事では第1論文の証明への直接入力を確認していない。案内担当が第1論文の本文・参考文献を確認した結果と合わせ、比較／結果包含として記録する。第2論文から将来版である第1論文への引用はない。

## 直接入力

- GWZ20：Guth–Wang–Zhang, Annals 192 (2020), Theorem 1.3, print p.554 / PDF p.4 → 本稿Theorem 4.1, p.36でHilbert値・重み付きへ拡張 → kinetic/角度記憶 → hybrid零コスト排除(Proposition 4.6, p.43)。外部主張と接続を照合、外部の全証明は未検証。
- RW25：Ren–Wang arXiv2308.08819v3, Theorem 4.1, p.9 → 本稿Theorem 4.7, pp.50–51で点直線双対・確率版 → classical零コスト排除、条件付き入射/射影、Proposition 9.15, pp.148–150。外部主張と主要適用箇所を照合、内部の全条件付き情報量補題は未検証。
- BHS19：Beltran–Hickman–Sogge arXiv1812.11616v2, §3.5 (3.24), p.34 / Props3.2–3.3 pp.27–28 → 本稿Cor10.7 p.160 / Thm11.1 pp.160–161 / Cor11.2 pp.161–162。1/p− smoothing、n=3、p≥3の仮定とsmooth-factor transferを照合。
- 直接入力の版・URL・ファイルはsources.json。著者キーはcitations.json。

## 074・077・078の番号と引用の区別

固定CONTENTSを直接照合：
- 074 = Kakeya in three and four dimensions（行1847以下）。2篇の正式題名はThe Kakeya maximal conjecture in three dimensions / Every four-dimensional Kakeya set has full Hausdorff dimension。
- 077 = Fourier restriction for positively curved surfaces（行1922以下）。Elliptic capacity propagation and Fourier restriction to the sphereを収録。
- 078 = The three-dimensional Bochner–Riesz conjecture（行1947以下）。Bochner–Riesz multipliers in three dimensionsを収録。

第2論文p.162の[20, Theorem 1.1 and Corollary 12.4]は**078**を指し、本文は別の証明であって本導出の入力ではないと明記。参考文献[20]はp.164。078→079の直接依存矢印を作らない。

第2論文の参考文献pp.163–165と関連本文を照合した範囲では、074の上記2篇および077のElliptic capacity原稿への直接引用を確認しない。074の結果と重なるKakeya最大の結論は§11.1 p.162の外部連鎖（Tao [29] → Wolff [31]）で導く。重複結論を直接入力に読み替えない。

第1論文p.27の074原稿への比較引用、p.29の077比較引用の詳しい照合は第1担当・reviewerの記録を使用する。

## 追加帰結の確認状態

第2論文§11.1 p.162の球面対角restriction r>3、Kakeya最大ε損失、compact Kakeya集合のHausdorff次元の記述と本文内の導出を読んだ。ただしTao [29] / Wolff [31]の外部原典の記述照合は本担当の概説対象外として本文に明記。これらを番号付き主要結果と同じ照合済み状態へ自動昇格しない。

## 図の構成

個別記事は主要5結果と中間模型2結果に7図。カタログ側は二つの証明の論理を混ぜない。結果範囲の包含・比較と外部入力の共有/相違を示す図を採る場合、直接依存の線と区別する。案内に個別7図を重複掲載する必要はない。
