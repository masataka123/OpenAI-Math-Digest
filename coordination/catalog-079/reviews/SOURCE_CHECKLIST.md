# 079 独立内容点検：原典からの抽出

- 担当：reviewer、gpt-6-astra / high（本部MODEL_PROVENANCEを参照）。執筆担当とは別。
- 原典独立抽出の記録：2026-10-28 15:42 JST（執筆初稿の時計とは別の点検作業）。
- 基準：inventory.json の固定commit・SHA-256。既存の記事・Sol解釈を根拠にしていない。
- この文書は原稿の承認ではない。原稿ハッシュを伴う照合は別記録へ追記する。

## 全次元稿 EW

| 結果・頁 | 独立抽出した条件・結論 | 説明で必要な接続 |
|---|---|---|
| Thm 1.1, p.1 | n≥2, 2≤p<∞, ε>0, I=[1,2], s+=(max{0,(n−1)/2−n/p}); Lp時空≤Cn,p,ε||J^(s++ε)f||p。p=2のみε=0可 | Thm1.2→p=2・∞補間→dyadic和。無損失臨界端点を主張しない |
| Thm 1.2, p.4 | pc=2n/(n−1), 任意の固定smooth annular φ, N≥2, log(2+N)^(2/pc) | cap上の保存正テンソル→周期Dirichlet→補正energy→2回の円環比較→周期除去 |
| Prop 4.2, pp.16–17; Prop5.1, p.18 | 正のfull Hessianを要求せずspatial blockのみ正。full determinantの符号は不定だがenergy補正で相殺。wave fluxのみ正寄与。F≈∫(−u)μ | rank-one Bfib, det(Bfib+αI)=(β+α)α^(n−1), μ≈|wave|² がpcの由来。A.1のg>det background, μ>0, strict fiber defining Hessianを照合 |
| Lemma6.1, pp.21–23 | E≥0, ΔE≤V(s)E, potential積分条件; H(0,r)≥c log(r/b)/log(3/b)^2 ∫_1^2 H(T,b)dT | b=2Kh, r=2bで2個のlog。Prop5.1のinner/initial circlesを逆にしない |
| Cor9.1, p.27 | local sphere Lpc(B(z,R))≤log(2+R)^(2/pc)||g||pc; Kδ:Ln(Rn)→Ln(Sn−1)≤log(2/δ)^(4/pc); 任意Kakeya集合dimH=n | modulation+focusによるsphere、random caps→weighted overlap duality→最大、異なる半径のcoverによるHausdorff。体積neighborhoodだけでHausdorffを言わない |
| Cor9.3, pp.28–29 | 1<a≤∞, b<∞, b>pc, b>(n+1)a'/(n−1); sphere in Rn と truncated cone in Rn+1。b=∞は全1≤a≤∞自明 | sphere局所log→ε除去→L1→L∞補間。coneはslicing/Hausdorff–Young+Minkowski |
| §9.4 (9.7), pp.31–32 | Nδ:Ln(Rn)→Ln(Rn) 同log^(4/pc)。positive measure pointsからのsegmentsに一定長で交わるBorel set dimH=n | projective chartとdyadic分割。Kδの方向出力とNδの空間出力を区別 |
| Thm10.1, p.32 | 1≤p≤∞, α>max{0,n|1/p−1/2|−1/2}: uniform BR。p<∞でLp収束。2≤p<∞, α>s+(p): strong maximal BRとAE収束 | wave long time scaling→thin shell δ^(−σ)→BR dyadic sum。2≤p<pcの最大をBHSのp≥pcだけから直接引用しない |
| Thm11.1, p.34 | 2≤p<∞, α>max{1/2,n(1/2−1/p)}: Gα=(∫|r∂rBrα|²dr/r)^1/2 bounded | shell derivative δ^(α−1), radius L² gain δ^1/2, wave δ^(−s+−ε)、dilatesをsquare内で合成 |
| Cor12.1, p.37 (12.1) | d≥1, pc=2(d+1)/d, 1<a≤∞, pc<b<∞, b>(d+2)a'/d: compact paraboloid La→Lb | spherical cap rescaling→local pc log→ε-removal→interpolation |
| Cor12.1, p.37 (12.2) | compact I, N≥2, supp fhat⊂B(0,N): Schrödinger Lpc(Rd×I)≤log(2+N)^(2/pc)||f||pc | Fresnel change, near/far cubes, dyadic time toward0 |
| Cor12.1, p.37 (12.3) | pc<p<∞, p≤r≤∞: Lp_x Lr_t ≤ Besov B^s_(p,p) ≤ Sobolev J^s, s=d(1−2/p)−2/r。r=p exact spacetime; r=∞ maximal | [LRS13] Cor1.2でa∈(pc,p)のdiagonal extension入力。criticalのpositive lossと混同しない |

追加のCor7.1のlog Sobolev、§8のobstructions、Appendices B–Eは記事で主張した範囲のみ点検対象。全補助定理の証明全体を再検証しない。

## 3次元稿 CW

| 結果・頁 | 独立抽出した条件・結論 | 説明で必要な接続 |
|---|---|---|
| Thm1.1, p.1 | ∀ε>0 ∃Cε: L³(R³×[1,2])≤Cε||Jεf||3; complex Schwartz、正符号half-wave | annular H^(−δ) Prop10.1、Sobolev和、conjugation。ε=0未扱い |
| Thm3.6, p.18 | 固定polynomial setup、0<η<1のclassical/hybrid cylinder: Γ≤η/2 | compatible shearsのextremal extraction→RW/GWZ zero-cost exclusions→canonical entropy nonnegative/boundary0→admissible path contradiction |
| Prop8.8, pp.123–124 | 正のterminal thickness exponent（∞含む）のsaturated round→classical cyl、wave→max(classical,hybrid cyl) | flatten conformal charts、quantum normal evolutionを保持、regularity/assignment transfer |
| Thm9.1, p.133 | 0<η<1, round classical/wave Γ≤100η、fixed finite contractions・Hilbert multiplicity条件付き | thin shapesだけで全roundを終えない。remaining round entropy contradictionが別に必要 |
| Prop10.4, p.156; Lem10.5, p.156; (10.22–23), p.157 | physical original slice regularity κ=C H^(−γ)B²; terminal mass synthesis H^(−1/2)Σm^(3/2); e√κとの結合 | finite fixed setups、time copiesをorthogonal energyと誤認しない。η,ζ,γ,σ→β任意小、amplitude piecesを合成 |
| Cor10.6, pp.158–159 | 2<p<∞, α>max{0,1−3/p}; energy2・annular∞λで補間。u0/u1ならJαu0+J^(α−1)u1 | 低周波sin(t|ξ|)/|ξ|を一体で扱う。正の余裕でdyadic和 |
| Cor10.7, p.160 | 3≤p<∞, s>1−2/p, 0<t<1 maximal half-wave; W^(s,p)へのextensionとAE初期値 | BHS §3.5 (3.24)のconditional implication、時間Sobolev cost>1/p、密度 |
| Thm11.1, pp.160–161 | 3≤p<∞, δ>1−3/p: maximal BR strong、Lp extension、AE R→∞ | BHS Prop3.3、linear-radiusとsquared-radiusのsmooth-factor transfer、密度 |
| Cor11.2, pp.161–162 | 1≤p≤∞, δ>max{3|1/p−1/2|−1/2,0}: uniform nonmaximal; p<∞でLp収束 | BHS Prop3.2→[2,3] interpolation→duality→1/∞integrable kernel。最大までdualityしない |
| §11.1, p.162 | sphere diagonal Lr→Lr, r>3; K_h:L3(R3)→L3(S2)≤Cεh^(−ε), compact Kakeya set dimH=3 | Tao BR→restriction・Wolff restriction→Kakeya。原典入力未照合ならその状態を本文に残す |

## 独立に確認した直接入力

- GWZ Annals192(2020), Thm1.3, 誌面554/PDF4：scalar cone wave-envelope inequality。CW Thm4.1 pp.36–37がHilbert-valued/weighted extensionを自稿で証明。外部原典がそのままHilbert-valuedと書かない。
- RW arXiv2308.08819v3 Thm4.1：nice configurations, s∈(0,1], t∈(0,2], δ^-η slack、min{t,(s+t)/2,1}。CW Thm4.7 pp.50–51はpoint-line dualとprobability samplingによってF(a,b)=a+min{1,b,(a+b)/2}へ変換。定理番号を混同しない。
- BHS arXiv1812.11616v2 Prop3.2/3.3：p≥2n/(n−1)の1/p− smoothingを入力とする非最大/最大BR。§3.5 Eq3.24：conditional maximal half-wave。固定範囲Theorem3.9自体をp=3へ拡張引用しない。

## 論文間と他カタログ

- EW n=3 Thm1.1 は CW Thm1.1/Cor10.6の結論を含む（half-wave符号はconjugation）。EW Thm1.2はannular log^(2/3)でCW Prop10.1の任意power損失より強い。ただしEWの参考文献にCWを確認できず、直接依存は認定しない。
- EW p.27 [62],[63] は074の4次元Kakeya集合と3次元Kakeya最大の比較引用。関連原典Thm1.1はそれぞれdimH=4（任意集合）とCεδ^-εのL3→L3。EW Cor9.1はn=4集合結論を含み、n=3最大結論をlog損失へ強めるが、074を直接入力とする証拠はこの箇所にない。
- EW p.29 [64] は077『Elliptic capacity propagation and Fourier restriction to the sphere』との比較。074の2稿と取り違えない。
- CW p.162 [20] は078『Bochner–Riesz multipliers in three dimensions』との別証明比較。CWは明示的にnot an inputと述べる。CWに074の2論文の引用は確認できない。

## 留保

これは主要主張と帰着・入力の読解照合であり、165頁/59頁の全証明の独立検証・査読・形式検証ではない。外部原典の全証明、CWの全entropy不等式、EW周期Dirichletの全境界解析は未検証。執筆後、公開する各主張の強さとこの確認範囲の一致を点検する。
