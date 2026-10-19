# 独立内容点検の原典先行記録

- 担当: R、gpt-6-astra / reasoning_effort high。
- 開始: 2026-10-19 08:44:53 JST（UTC 2026-10-18 23:44:53、clock実測）。
- 原典先行記録: 2026-10-19 08:46 JST。記事初稿をまだ読まず公式固定版から作成。
- 基準: 制作セット1.4。公式commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a、両稿2026-09-24版。
- 既存Sol原稿・解釈・点検結果は使用していない。外部原典ファイルはA/B取得分も直接読む。
- 状態: 原典との内容照合。全証明の独立検証・査読・正しさの認定ではない。

## 主論文の主張と量化

1. Theorem 1.1、p.2（PDF2）: 完備可分距離空間、整数 n≥2、任意κ∈R。n次元CBB(κ)と、正確なm=H_d^n・full support・unreduced RCD((n−1)κ,n)・すべてのglobal TestVのX,Yおよび非負global Testのfに対する R(X,Y,Y,X)(f)≥κ∫f(|X|²|Y|²−〈X,Y〉²)dm が同値。上曲率境界/CATとの混同不可。
2. TestはD(Δ)に属する有界大域Lipschitz代表をもちΔf∈W^{1,2}。Δf∈L∞を主定理に追加しない。TestVは有限和a_j∇b_jで双方Test。m(M)=∞で定数1がTestとは限らない（Remark 2.2、p.6）。
3. 非正Laplacianと R=∇X∇Y−∇Y∇X−∇[X,Y] の符号。κの符号や(n−1)を変更しない。
4. Theorem 3.1、p.9、証明pp.9–23: CBBからRCD/full supportを得る外部入力と分布曲率不等式の新しい導出を区別。短いflow、endpoint correction、平均化、square errorの局所除去、係数拡張、局所強近似、最後のexhaustion。Prop.3.7 p.19、Prop.3.10 p.21、Lemma3.12/証明p.23、Remark3.13の順次極限を確認。
5. Theorem 4.1、p.24: 仮定(B)、uは有界大域Lipschitzでcompactの外で定数、Φ_t=Q_tu。terminal point xに対する共通Borel calibrated pathの選択Sはf,Z,trialに依存しない。圧縮有界は[δ,1]、δ>0。Yδ=0、Y1=Zは大域恒等式。分布Hessianに対するindex上界。
6. 核心帰着（pp.30–37）: viscous index estimateの後、加速度誤差を片側で評価し、action equalityから速度の密度重み付き強収束を得て二次energyを極限へ。弱収束だけで通す説明は不可。common terminal pathとcountabilityが次段のpointwise infimumに必要。
7. Theorem 5.10、pp.46–47: 任意p、κ>0でRκ√κ<π/2、q=r²/2。各compact test gradient ZのHess q(Z,Z)がsigned Radon measure、singular part≤0。上界は |Z_parallel|²+r sκ′(r)/sκ(r)|Z_perp|²。|∇q|=r a.e.、r=0は|Z|²。これをa.e. tensorだけに縮めない。
8. Frames（pp.38,41–47）: full-support noncollapsed RCD(K,n)、m=H^n。a.e. spatial regularityからevery timeは直ちには出ない。polar/rank-defect全経路回避＋Deng接錐連続性＋finite-dimensional Sobolev ODE＋countable global trials。その量化は適切なtest planのalmost every pathであり、すべての測地線にframeを主張しない。
9. Lemma6.2、pp.48–49: 有界大域Lipschitz F_p=χ(r²/2)と有界連続G_pを構成し、内側でF_p=mκ(r)、G_p=1−κF_p。χ′≥0、cutoff θ′≤0でsingular partとradial誤差の符号を保つ。距離二乗そのものへcompanionを大域適用しない。
10. Theorem6.3、pp.49–50: companion→全測地線上 y″+κℓ²y≤ℓ²→短い任意三角形のpoint-on-side比較→local four-point→complete length spaceのglobalization。最後は正の有限H^nをもつ各bounded ballからdim_H=n。局所比較だけで大域CBB・次元を省略しない。

## Weak Hessianの主張と核心

1. Theorem1.1、p.2: full-support unreduced RCD(K,N)、K∈R、1<N<∞。Fは有界大域Lipschitz、Gは有界連続。全compact g∈Test、全非負h∈Lip_cに対するH_F(∇g,∇g)(h)≤∫hGΓ(g)dm。結論はevery constant-speed minimizing σ:[0,1]→M、長さℓに対する(F∘σ)″≤ℓ²G∘σ、(0,1)上の分布。
2. F∈L²(m)もL²-Hessianも仮定しない。m(M)=∞とcollapsed spacesを許す。定数G=cならF(σ_t)−cℓ²t²/2が凹。
3. Lemma3.1、p.6: m_V=e^V mはgenerator domain D(Δ_V)=D(Δ)、graph norm同値、Δ_V=Δ+Γ(V,·)。Testそのものの保存は主張しない。bounded ξ,Δ_Vξから元のresolvent contractionでLipschitz代表を得る。
4. Prop4.1、pp.7–8: m_λ=e^{λF}m、curvature K−λG。正の指数と曲率減算が対応。compact original test上の弱Hessian恒等式から共通generator graph domainで閉包し、実際のweighted BE domainを得る。まず定数下界でweighted RCD(K_V,∞)、次にvariable BE→CD(K−λG,∞)。
5. Theorem1.1証明、pp.9–10: Deng nonbranchingで指定測地線のstrict interior subsegmentを一意化。端点の小球normalized measures、λ_j≥j(1+|E0_j|+|E1_j|)、proper compact path familyでπ_j→δ_τ。中間entropyはJensenで下界、端点entropy/λ→0。Green kernel min(s,t)−st。任意内側部分区間への適用で分布不等式。
6. 定数曲率を有限次元RCD(K−λG,N)へ置換しない。weighted結論はCD(k,∞)。

## 原典の直接外部入力を独立照合

- Deng arXiv:2009.07956v2: Theorems1.1–1.3、p.2/PDF2を原記述で確認。主論文Lemma5.5 p.42で1.1–1.2、companion p.9で1.3を使う。前者はevery geodesic上の同一scale tangentsの連続性、後者はnonbranching。元証明は未検証。
- Braun–Habermann–Sturm arXiv:1906.09186v1: Theorem1.1/Definition1.2 p.3、Definition1.4 p.4を原記述で確認。予めRCD(K,∞)でk lower semicontinuous/lower boundedが前提。companion Prop4.1 p.8は定数RCDを先に得てk=K−λGのbounded continuous性を確認。式(4.7)のdomainがDefinition1.4のq=2を含む。証明全体未検証。
- Ambrosio–Gigli–Savaré arXiv:1209.5786v4: Theorems3.9 p.33、3.14 p.38、4.17 p.57を原記述で確認（いずれもPDF同頁、誌面339起算のjournal paginationでない）。companion p.8のED/MD、intrinsic distance、upper regularity、Gaussian growth/conservativityからweighted RCDへの適用を照合。証明全体未検証。
- Kapovitch–Ketterer–Sturm arXiv:2003.06242v1: Theorem2.9 p.7、Corollary2.10 p.8を直接確認。unreduced CD(k(n−1),n)/RCD(κ(n−1),n)、境界なしの仮定はない。主論文Thm3.1 p.9への入力と一致。原証明全体・引用の先の証明未検証。
- Alexander–Kapovitch–Petruninオンライン版: Theorem8.14 p.86のpoint-on-sideとconverse、8.30のlocal criterion、8.31 globalizationを直接参照。主論文pp.49–50は局所化を別途説明してからcomplete length条件で適用。取得版の固定日/ハッシュはA側資料と照合予定。全幾何証明未検証。

## カタログ内接続と図判断

直接依存は Weak Hessian Thm1.1 p.2 → Characterization Thm6.1 p.48 / Lemma6.2 pp.48–49 / Thm6.3 pp.49–50。供給するのはbounded global F,Gのweak-Hessian上界からevery geodesic上の分布ODEへの移行。参照測度H^nは変えず、K=(n−1)κ,N=nで適用。主論文のframeやsectional boundをcompanionの証明仮定へ逆流させない。逆向き依存は本文で確認できず、companion pp.3,6–10は独立な論証。

総括図を採用。理由: 同値の順向きと逆向きを分け、後者の解析・幾何の帰着にcompanion入力が一箇所で合流する全体像を伝えるため。公式掲載順は主論文→companionを維持。分類固定/選択UI不要。詳細な量化と外部入力は記事へ集約。

## 未確認・後続作業

- 主論文53頁の全評価・全補題・外部入力全件の独立検証は未実施。記載範囲以外は未確認であり依存なしではない。
- 実際のmain/weak記事・日英・TeXへの照合は原稿完成後。ここまで修正要求なし（原稿未読）。
- 記事点検後に確認範囲と指摘・修正受領を別記録へ追記する。
