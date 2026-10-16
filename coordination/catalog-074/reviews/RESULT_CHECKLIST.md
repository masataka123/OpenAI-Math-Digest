# 結果別照合表

担当：review_content（`gpt-6-astra` / `high`）。2026-10-16。数学的正しさの保証ではなく、主張と説明の対応を照合する。

| 論文・結果 | 原典の全結論・条件 | 本文で対応する説明 | 原典照合 |
|---|---|---|---|
| 3D Theorem 1.1 | 任意ε>0、全δ∈(0,1)、complex f∈L³、usual spherical measure、tube centerを全R³でsup、Cεの一様性 | §2 steps1–3：方向分離、density threshold以下も含むdistribution、cell averages、finite levels、εごとのp選択、measurability | pp.2,7–8,91–94。中間λ^(p+1)と最終λ³を区別 |
| 3D Proposition 10.1（独立証明対象） | p>2を2へ任意に近づけた値でh(p,0)=0 | §3：critical definition、weighted geometric inputs、canonical/stationary profile、same-index比較、traceを伴う五場合排除 | pp.8,15–16,23,27,32–36,44,46–47,68–69,74,86–90。全内部証明は未検証 |
| 3D Corollary 11.1 Euclidean | 1≤p≤3、q=2p′、p=1でq=∞、δ^(1−3/p−ε) | §4 step1：L³とL¹→L∞の補間→GLX25 Proposition2.3 | pp.94–95、GLX pp.13–14 |
| 3D Corollary 11.1 manifold | 固定U⊂⊂V・local straightening geometry・constant curvature・δ<δ0、geometry-dependent constants、L³端点 | §4 step2：compact chartのbi-Lipschitz/volume比較、loss吸収、p=q=3 | 同上。variable curvatureやglobal uniform constantsへ拡張していない |
| 3D Corollary 11.2 | 固定translation-invariant phase/chart、mixed rank・curvature・Bourgain、gradient tubes、同じp,q range、δcurv、L³端点 | §5 step1：GLX直線化、gradient差の項相殺、方向parameter比較、maximal transfer | pp.95–96、GLX pp.3–5,19 |
| 4D Theorem 1.1 | arbitrary K⊂R⁴、各方向のunit segment、可測性・compactness・stickinessなし、dimH K=4 | §2：positive horizon→optimized path→ℓ=0/finite positive/infinityの全排除→ambient upper bound | pp.3,20–25,47–50,168。全intermediate theoremの証明は未検証 |
| 4D Theorem 2.17（独立証明対象） | arbitrary nonmeasurable Kakeya counterexample→0<d<1,S,η>0、tempered homogeneous version2 E∈C(d)、H(E)>0 | §3：変動尺度被覆・外測度・finite witnesses、smoothingとplank、density optimization、slope-volumeとの比較 | pp.20–25。monic cubic Jacobian、q^-3、H≥σ/6を照合 |

4D §11のCorollaries11.1–11.4は記事の主要結果・独立証明対象に採用していない。記事末尾に対象外・外部transfer未調査と表示する。3D §1.3の別証明（Fourier extension）も直接入力として図示しない。
