# 総括用提案

## 共通表行
- paperId: exact-orders-anticanonical
- displayName: Exact orders
- result: Theorem 1.1 · p. 3; Theorem 1.2 · p. 4
- claim.ja: Smoothly semipositiveなL=−K_Xで、任意の固定Mを伴う有効因子列N_j∼m_jL+Mが曲率null面にあり、中心付き離散valuation（零も可）の正規化次数が零へ近づけば、N∼_Q L、N≥0、v(N)=0を厳密に達成する。高次H^i(O_X)消滅の下でトーラス不変切断も得る。
- claim.en: For smoothly semipositive L=−K_X, effective N_j∼m_jL+M on the curvature-null face, with any fixed M and normalized centered discrete (or zero) valuation tending to zero, yield an effective N∼_Q L with v(N)=0 exactly. Vanishing higher H^i(O_X) also yields torus-invariant sections.
- role.ja: nullな極の体、toroidal volume、有限生成環を合流させ、境界rayの実際の生成元で漸近次数を厳密達成へ変える。軌道次数とsource指標を結び、不変積を作る。
- role.en: Combines the null-polar field, toroidal volume and finite-generation ring to turn asymptotic order into exact attainment by an actual boundary-ray generator; orbit orders then give source characters and an invariant product.

## カタログ内接続
1. OpenAI26e (metric-descent-contractions), Theorem2.1 p.7 → 本稿§3.2 pp.10–11、Theorem1.1証明§4 pp.11–12。kind=direct。full generic adjoint rank at zero（Lemma3.2 p.9）とhorizontal strict patch (3.5) p.10、normal equidimensional toroidalモデルが前提。unweighted integrable metricとp_*f^*A0=0を得る。入力記述と使用先を照合、toroidal化外部定理の全照合は未完。
2. OpenAI26f (integrable-metrics-controlled-boundary), Theorem4.3 pp.9–10 → 本稿§§3.2–4 pp.11–12。kind=direct。上記計量を受け、P(t0),P(t*)の二方向で共通ε,k0を使うactual bigraded ringを得る。数値的有限生成や別々のεに置換不可。両原典statementと使用・06proofを照合済み。
3. OpenAI26a (anticanonical-smooth-semipositivity), Theorem2.1/Lemma2.2 → 本稿§13 pp.37–38のcompact-monodromy descent。kind=consequence候補、利用記述は導入p.4で確認したが§13の本体は今回詳細未点検。総括に載せる場合は別担当の照合が必要。本稿Theorem1.1/1.2の直接入力ではない。
4. OpenAI26b invariant index Theorem1.1は本稿main exact/source-weight経路の入力ではない。extremal cohomological weightは§7.1で本文内局所化計算される。引用リストに存在するだけでdirect矢印にしない。

図の合流案：05 volume → 06 correction ring →07 endpoint attainment。ただし05から07へも直接入力し、06 weighted support theoremとunweighted ring theoremを同一ノードの同一出力としない。


## 追補の独立出力と追加接続（2026-10-12）

共通表補足 JA：さらに、q=0・非零Euler数の不変非消滅（Proposition10.1 p25）、固定した擬有効同変誤差からの不変変換（Theorem11.1 p27）、制御された全不変素因子を含む有効有理多面錐（Proposition12.1 p31）を、原典の独立出力として詳説。

EN: The supplementary account also covers invariant nonvanishing with q=0 and nonzero Euler number (Proposition10.1 p25), invariant conversion of one fixed pseudoeffective equivariant error (Theorem11.1 p27), and an effective rational polyhedral cone containing all controlled invariant prime classes (Proposition12.1 p31).

新しい直接辺：06 Theorem2.2 pp6–7 → 07 §12.2 p34 → Proposition12.1。使用条件は−K_Y+Jのglobal strict curvatureとI(phi) containing O(−J)。加重近似から係数<1のsigned divisorを作り、negative part D0をσ*Jと例外台に支持させる。07はp⋄[D0]^T=0をdivisor linearization込みで示し、同変Picard空間の近傍でadjoint finite generationへ進む。これはTheorem1.1のunweighted環入力06Th4.3とは別の有限錐経路。06入力の記述・証明と07適用箇所を照合済み、外部点延長等の再帰的証明確認はしない。

02のindex → 07Remark11.3 p30はTheorem11.1＋Corollary11.2を経た帰結の利用として原典が述べる。追補のTheorem11.1そのものの証明入力ではなく、今回その帰結の詳細証明を独立節に追加していないので主経路へ矢印を追加する必要はない。
