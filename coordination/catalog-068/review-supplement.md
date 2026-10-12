# カタログ068：04・07の追加結果点検

- 点検担当：papers_01_02（対象記事の執筆者とは別担当）
- 開始：2026-10-12 09:40 JST。初稿外の追加内容点検。
- 固定原稿版：September 26, 2026、commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。
- 対象：04 Theorem7.2、07 Proposition10.1/Theorem11.1/Proposition12.1。
- 範囲：原典の主張・全結論・核心帰着、直接入力の記述と適用箇所。外部proofの再帰検証や全証明の独立再証明ではない。
- 状態：4結果とも原典と追補成果物の比較完了。追加指摘1件を担当が修正済み。
- 点検終了：2026-10-12 09:48:06 JST（約8分）。

## 04 Theorem7.2（主張p.17、証明pp.18–19）

仮定はsmooth connected projective V,Y、surjective f、smooth semipositive line D_V with curvature θ、base line Q with positive continuous Hermitian metric and psh weights、submersion locus内のnonempty ordinary openでker θ⊆ker df。結論は全整数k>=0,q>=0,p>0に対する H^p(Y,R^q f_*(K_V+D_V)⊗Q^k)=0。θのkernel仮定をnef性から推定せず、連続性をD_Vへ移してはいけない。

核心は固定kでuniform smoothingしたproduct metricsからharmonic representativesのweak L2 limitを取り、Bochner–Kodairaによりholomorphic star-limit vとcurvature annihilationを得ること。uniform metric convergenceは∂(h_j v_j)=0を分布的∂(hv)=0へ渡すのに用い、metric derivative convergenceは仮定しない。kernel包含がbase canonical covectorsをvのwedge factorsにし、vertical derivativeではcontinuous base factorが定数となる。restrictionはcanonical base factorを外したcoefficient-valued cohomologyであって、top-degree formの通常pullbackではない。fiber-harmonic restrictionの非零性がLeray edge injectionを与え、smooth D_Vだけへのderived decompositionを得てからQ^kをtensorする。dimension sumをp=0 summandで上から抑え、全p>0を消去する（k=0含む）。

直接入力：Fujisawa『A remark on the decomposition theorem for direct images of canonical sheaves tensorized with semipositive vector bundles』arXiv:1512.03887v1、Theorem1 p.1を確認。proper surjective Kähler、pure-dimensional sourceの各成分surjective、Nakano semipositive vector bundleという仮定でderived decomposition。smooth semipositive line D_Vはこの係数仮定を満たす。Richberg/regularized maximumは04 Lem7.1 p.17の構成を読み、基礎原典の独立検証はしていない。

## 07 Proposition10.1（主張p.25、証明pp.25–27）

仮定はsmooth connected projective W、q(W)=0、χ(O_W)≠0、A=-K_W smooth semipositive、faithful algebraic torus action、equivariantly linearized very ample lineが存在すること。結論は自然線形化でsome integer r>0のH0(W,rA)^T≠0。全高次H^i(O)=0は要求しない。

sourceのanticanonical weightはpolytopeのsupport値であり、faithfulnessと自然接束weightにより0がpolytope interior。localizationのsource coefficient Q(m)=χ(S+,mA|S+)はQ(0)=χ(O_W)≠0を保持する。Hard Lefschetzの係数(m+1)Aとcohomology weight mμ+の差をwedge rank sまで計算して、determinant sectionのweightを(m_i-s)μ+とする。cotangent tensor theoremは-M pseudoeffectiveを与え、generic orbit arcでv(N_i)=μ_M+sμ+が非正規化のまま有界。Th9.1のapproximate transferでv/r→0とし、各exposed vertexを実切断のnormalized charactersで近似する。有限個の近似点のconvex hullに0を残し、rational convex coefficientsの分母消去・切断積で不変切断を作る。exact source weight attainmentを仮定しない。trivial torus、point、p=0も原典で処理されている。

直接内部入力：Th9.1 p.21（q=0、-M pseudo-effective、generic fraction pointを持つformal arc、v(N_i)=O(1)→全δ>0でv(N)<δr）の全主張、Lem6.1–6.2のweight/orderと有限積を確認。外部DPS01 p.8とLMPTX23 Th4.1は既存点検の記述照合を再利用。localization/BB decompositionは原稿の使用箇所を確認、全外部証明は対象外。

## 07 Theorem11.1（主張p.27、証明pp.27–30）

仮定はsmooth connected projective X、q(X)=0、smooth semipositive A=-K_X、algebraic torus Tの作用とAの自然線形化、pseudoeffective T-linearized G、unbounded positive Iに対するnonzero invariant δ_j∈H0(jA-G)。結論はsome m>0のH0(mA)^T≠0。χ仮定・faithfulness・very ample linearizationはこの定理の追加仮定ではない。

controlled invariant rational functionsのfield Fはpole inequalityによりrelative algebraic closureとfinite generationを持ち、base actionは自明。horizontal affine orderからno horizontal poles、vertical minimaからτを正則化する。all l>=1のinvariant adjoint rank one（ordinary rank oneを仮定しない）とLemma8.2のorthogonal averaging projectionによりbounded semipositive base metricを得る。q(Y)=0を使うLemma8.3のnef descentでpositive-degree-on-very-general-curvesのbase Lに移り、Lemma8.4のpole concentrationを使う。正確なI(h_J)=O(-kPτ)、curvature Θ(h_J)+(1+s)ddc Ψ>=0 (0<=s<=1)、whole fiber近傍のinvariant sectionのquotient classを構成する。unit coefficientとtransverse pole exponent 3b/2>=bが非零性を保証。extensionでliftしcompact averagingしてinvarianceを保持、exceptional Jacobian factorを除いてXへpushする。jet-generationやpolytope経路へすり替えない。

直接入力：CDM17『A general extension theorem for cohomology classes on non reduced analytic subspaces』arXiv:1703.00292v2、Th1.1 p.2。holomorphically convex Kähler、possibly singular metric、neat analytic Ψ、positive continuous δに対する全α∈[0,1]の曲率条件の下でI(h)/I(he^-Ψ)への全q>=0のsurjectivityを確認。ここではprojective S、δ=1、q=0として使用。Lemma8.2–8.4の主張と本文使用箇所を確認し、nef reduction/Seshadri foundational proofsは再帰検証していない。

## 07 Proposition12.1（主張p.31、証明pp.31–35）

仮定はsmooth connected rationally connected projective V、smooth semipositive L=-K_V、algebraic torus T。結論はPic^T(V)_R内に、invariant effective rational divisor classesで生成され、あるinteger a>0でaL-Dがpseudoeffectiveになる全invariant prime Dのdivisor-linearized class [D]^Tを含むrational polyhedral coneが存在すること。生成元自身がcontrolledであることや、全effective coneがpolyhedralであることは主張しない。

controlled polesのfieldからbaseを作り、Pic^0=0で有限個を除くcontrolled primesをbase divisorsのrational pullbacksへ帰着。flattening modelは元Vのprimeがbase codim>=2へ落ちないようにし、p⋄がbase exceptional divisorsのdivisor linearizationsごと消す。rank-one adjointのreflexive hull O(J)はJ>=0 invariantかつp⋄[J]^T=0。strict singular metricとfiber integrationが与えるのはweighted |s_J|²e^-φ integrability。06 Th2.2でΨ coeff<1、D0=Ψ^-のsupportをJとexceptional primesへ閉じ込め、p⋄[D0]^T=0をcharacterも保持して得る。Pic^T_RのD0近傍にadjoint verticesを取りmultigraded adjoint ringを有限生成、torus weight-zero projectionとGordan lemmaでinvariant ringを有限生成する。D0+tRのcanonical invariant sectionのmultidegreeをgenerator degreesの非負和に表しp⋄を適用する。selected monomialと元sectionのdivisorが等しい必要はなく、degree equalityのみを使う。有限個の例外controlled primesを最後に加える。

直接入力：06 Th2.2 pp.6–7のweighted approximationを読み、strict bound、I⊇O(-J)、small ample subtraction、full system、SNC/klt positive part、negative support、ordinary rational identityとequivariance条件を確認。CL12『New outlook on the Minimal Model Program, I』arXiv:1009.3188v2 ThA p.2はsmooth projective、共通ample A、SNC supportかつfloor B_i=0のrational boundariesに対するmultigraded adjoint-ring finite generationであり、07 pp.34–35の近傍構成と適用を照合。PT14 Th3.3.5 p.24のactual torsion-free imageへのpositive metric extensionは既存照合を再利用。

## 成果物比較の追記

2026-10-12 09:43 JST：04の冒頭Theorem7.2、§6の日英本文、kernel.tikzと生成kernel.ja.svgを確認。仮定・量化・全結論・核心の各接続は原典に一致し、追加修正要求なし。本文はmetric derivative convergenceを要求せず、Q^kをderived decomposition後にtensorする点を明示。既掲主張へのproof-target参照、図直後の3段階説明、direct inputのFujisawa15/ Dem12引用が揃う。図はrasterで確認し、箱・矢印・引用の重なりを認めない。Richbergの記述はDem12 I.5.21 pp.43–44（455頁版）も直接照合した。Fujisawa PDFのarXiv識別日付と本文内部日付の相違をsources記録している。


2026-10-12 09:47 JST：07の冒頭3主張と日英§6–8、euler-polytope / invariant-extension / controlled-coneの3TikZおよび生成日本語SVGを照合。全仮定・量化・結論に証明経路が対応し、原典と重要な不一致なし。3図を横並びrasterで目視し、箱・矢印・引用の重なり、欠落なし。原典順の主要結果、既掲主張へのproof-target参照、図直後の段階説明、直接入力の文献案内が揃っている。

追加指摘1件：Prop12.1 proof step2の見出し「消えるklt補正 / disappearing klt correction」は、D0=Ψ_-自体がklt境界であると誤読できる（kltはΨ_+、D0には係数<1の保証がない）。「加重近似から消える補正を作る / Weighted approximation gives a disappearing correction」へ変更を依頼し、日英の反映を確認した。本文の正負部分の区別はもともと正確だった。

追加外部記述照合：Leh15 arXiv1109.4382v3 Th1.2 p.1はnormal projective→Q-factorial normal、connected fibers、pseudoeffective R-Cartierで全収縮曲線に数値自明ならnumerical pullbackを与える。07 Lem8.3のflatteningが全曲線条件を確保し、q=0によるrational linear equivalenceへの昇格は別ステップである。EKL95 arXiv alg-geom/9408003v1 Th3.1 p.14は、nef Lと全r-dimensional subvariety（countable exceptional union外）への(L^r·Y)>=(rα)^rからvery-general Seshadri boundを与える。07 Lem8.4はmixed intersectionsの下界をこれへ入力している。両外部定理のproofは再検証しない。

## 最終判定と残る範囲

対象4結果について、追補後の日英の主張・図・文章が原典の全結論へ接続している。主張の取り違えやsmooth / bounded / continuousの混同、ordinary / invariantの結論の取り違えは認めない。担当別引用レジストリのtext-only同期検査も両記事で成功した。

04についてはTh7.2未詳説という前レビューの留保を解除する。ただしTh5.2/Th11.1/Prop14.1等の別出力・別経路の全詳説、07のTh12.4・§§13–14の全proofはこの追補対象外で、記事の範囲限定は残る。外部proofの独立再検証、基礎文献の再帰照合、サイト組込み・公開検査を行ったとはしない。
