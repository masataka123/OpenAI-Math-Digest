# カタログ003 独立内容点検・準備

- 担当: `/root/astra_review`。指定モデル・思考量の根拠は `../MODEL_PROVENANCE.json`。
- 日付: 2026-10-23。第1段階。数学の執筆は担当せず、必要な変更は執筆担当へ返す。
- 参照原典: `../inventory.json` の固定commit・PDF・抽出テキスト。既存Sol制作物を数学的根拠に使用しない。
- 判定対象: 主張・論証概略・引用入力の適用・日英対応・案内の関係種別。原稿全体の数学的正しさの認定や全外部証明の再帰検証ではない。

## 原典から準備した照合事項

### 公式順1: 7/8稿

- Theorem 1.1 (p.4): F=Q(sqrt(-3)) 上の全finite-order Hecke、全Dirichlet（zetaを含む）、strict Re s>7/8、主指標のs=1の極を許す。境界上の非消滅は主張しない。全導手・全虚部の共通境界。
- Corollary 1.2 (p.7): 絶対A,Cによる全奇素数pのpolylog最小非剰余、各delta>0のp^delta評価、二進入力p,aについて決定的poly(log p)平方根抽出/非存在判定。functional equationによる閉strip [1/8,7/8]を開strip (1/16,15/16)へ入れ、BIMS weak-GRHのepsilon=7/16を適用する。Euler criterion、非剰余探索、Tonelli–Shanksへの接続を照合する。
- Proposition 2.1 (pp.8–9): beta_*のsupremumが達成されると仮定しない。指数omega,sigmaはtargetから独立、定数・下限・有限除外素数・H_etaはtarget依存可。
- Theorem 3.1からPart IIへは同一原稿内部の直接入力。別の49ページ11/12稿への直接依存と取り違えない。
- Proposition 11.3 (pp.84–85): norm characterのEuler因子比較、削除因子のRe s>0非消滅、s=1でのpole-zero cancellation排除を分ける。
- Proposition 20.3 (pp.194–197): pretargetの正の余裕と、target依存height/tail/thresholdの選択順を照合する。§§17–18の全再帰・全係数評価の独立検証は今回の標準範囲に含めない。

### 公式順2: 独立11/12稿

- Theorem 1.1 (p.2): K=Q(sqrt(-3)) 上の全finite-order Hecke、全Dirichlet。strict Re s>11/12、全虚部。主指標の極は零点除外と区別する。
- Corollary 1.2 (p.2): x>=2、1<=q<=xと(a,q)=1のsup、Li(x)/phi(q)、O(x^(11/12) log x)、絶対かつeffective定数。明示公式からの引用接続とその確認範囲を区別する。
- Proposition 3.1 (p.11): 任意固定0<theta<=1/10、epsilon>0、k=k(theta,epsilon)、任意compact Iとsupport Iのsmooth W、D>=2。定数はnu,S,I,theta,epsilon依存可。
- pp.11–12: prime idealのsixth-power rowsからA_1の評価を得る指数、theta→小、Mellin test W(y)=y^(-rho)phi(y)でW-hat(rho)>0を使う接続。
- Proposition 5.1、Lemma 5.3、Proposition 5.4と§5.5: completed estimate→cube inversion→transferでH' < H(H/Sigma)^2を得る有限反復。H/Sigma<=D^(-kappa)と導関数次数/支持区間の管理。
- §3のDirichlet transferとs=1の例外処理。49ページ稿の導入は7/8稿の結果を位置づけるが、この引用だけを証明直接依存としない。

### 公式順3: Landau–Siegel稿

- Theorem 1 (p.1): exists absolute c>0; every primitive nonprincipal real chi; every q>=3; every real zero beta in (0,1); (1-beta) log q>=c。固定幅の全複素零点排除へ強めない。
- Lemma 2 (pp.2–3): real-zero logarithmic derivative→chi(p)=1の不足→admissible chi(p)=-1のlogarithmic mass。C絶対、C_HはHのみ。
- Lemma 3/Corollary 4 (pp.3–5): surjective A:C^4→C^3、kernel座標のQ線形独立、矩形次数条件、定数32はA,Hから独立。
- Lemma 6 (p.6): H固定、N十分大（Hのみ）でS_2/S_1<<1/H、fieldに一様。補間多項式の係数が行列式に入らない点。
- Lemma 7/§5 (pp.7–8): p>Hのstrict weight decrease、行変形行列はK上で足りる、置換後の成分からp進可除性を得る。
- §6 (p.8): 否定からq→∞、delta→0。有限導手でL(1,chi)非零によりq→∞を確保。H→固定gamma→qの選択順で1<=7/8の矛盾。d=2の固定例外は列の末尾で消える。

## 書誌修正

LS p.1脚注に日付がある点を本部へ連絡し、inventoryは修正済み。原稿の表示日付はOctober 1, 2026。

## 受領後

記事ごとの日英本文、citations、sources、TeXと生成物、overview/presentation/connectionsを照合する。指摘→執筆者修正→影響範囲再確認を記録し、最後に確認版のhash manifestを機械保存する。現時点では原稿未受領であり、内容編集済みと判定していない。
