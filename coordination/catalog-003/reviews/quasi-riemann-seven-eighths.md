# 独立内容点検 — 7/8稿

- 担当・モデル指定: `../MODEL_PROVENANCE.json` の `astra_review`。日付2026-10-23。
- 原典: `../inventory.json` 公式順1の固定PDF。日英本文・citations・sources・diagrams/*.tikzを照合。
- 判定: 下記指摘の修正後に影響範囲を再確認済み。記載範囲と明示的保留を維持する条件で、内容編集済みとして受領可能。

## 指摘と対応

| ID | 指摘 | 根拠 | 状態 |
|---|---|---|---|
| R78-1 | §2 step3のモーメント長さ条件でr,m,z,n1,n2,M=m+qが未定義。inverse/plain列長、行長、slot総和、相殺前の移動素数台ノルムを短く定義する。 | Lemmas 17.1 / 18.1、pp.114–115 / 152–154 | 日英に追加された定義と零延長の説明を原典と再照合。解消 |
| R78-2 | main.tikzのb→c矢印は固定ray classの素数和による正規化を説明するが引用がEq12.5/Prop15.3のみ。既存normalization引用（Eq16.3/§20.1）を追加する。 | §20.1、pp.187–188 | main.tikzにnormalization引用の追加を確認。本文の説明・引用と対応。解消 |

## 主張と全結論への対応

- Theorem 1.1 (p.4): F=Q(sqrt(-3))、有限位数ray character、非原始指標を含む全法・全導手・全虚部、strict Re s>7/8、主指標のs=1の極を日英で保持。Heckeの基礎体を任意の数体へ拡大していない。
- Corollary 1.2 (p.7): 絶対A,C、全奇素数p、polylog最小二次非剰余、任意delta>0のp^delta、二進入力p,aの決定的poly(log p)平方根/非存在判定の全結論を専用図・直後の2段階説明へ対応させている。
- Proposition 2.1は独立の証明節を持つため図前主張を確認。sigma0,beta_*,C(s)、全targetへの量化、target共通omega,sigma、target依存可能なH,S,定数,下限、Mellin信号と二つの不等式を含む。番号だけで代用していない。
- mainResults、proofTargets、statements、conclusionCoverageは日英の主張欄・説明先と対応。原典順の主要結果を維持し、中間命題の独立証明はその主張欄を持つ。

## 主要帰着・直接入力の照合

- §2 (pp.8–9)を読解し、Zの両端評価→正則Mellin→Re s=2上のFourier反転→逆数の共通幅の継続→supremumへの矛盾を照合。beta_*の達成を仮定していない。principal poleは逆数の零点になる。
- Part Iの完成添字cn^3、zero-extension、balanced low bound、row detectorとsixth-order sieve、principal row、Theorem 3.1の終結を原典の主要記述・使用箇所と照合。内部の11/12を別の49ページ稿への直接依存にしていない。
- Part IIの0<Delta<=1/24、dynamic kappa=2beta_*-1、非対称尺度、同じ有限補償和のlow/high比較、Proposition 15.3、全正則補正Eq16.3、§20.1のA_Tとc_Sによる同一正規化を照合。
- Lemmas 17.1 / 18.1の長さ条件、prime supportsの分離、plain側のTheta除外とzero-slot側のprincipal除外、centered equal-product-scale差と未中心化積の区別を照合。これらの全再帰証明を認定していないことも確認。
- Proposition 19.2からLemma 20.1、Lemma 20.2と周波数範囲、E_actual(h)-Deltaの負性、delta=5/6端点とfloor/small/large rowsの別処理を照合。
- Proposition 20.3とLemma 11.1の選択順を読解。common positive real marginsを先に固定し、target依存のheight/tail/thresholdを後で選ぶ。J,f自体に分析用T1を含めない点を保持。
- Proposition 11.3 (pp.84–85)のquadratic Euler factorization、imprimitive factors、s=1のL(1,chi_-3)=pi/(3sqrt(3))>0を照合。
- GL13v2 Definition 1/Theorem 1.1と原稿§5.4 p.36の適用を比較。原始導手・固定ray classes・quadratic family条件を確認する本稿側の役割を保持。全局所計算は再実行していない。
- DR24v3 §5のtheta/cusp素材を比較。GRH条件付きprime asymptoticを入力にしないことを確認。
- TZ19v3 Theorem 1.1と原稿Lemma 13.1/§20.1を比較。fixed abelian ray extensionのidentity class、固定exceptional zero項の低次性、移動導手一様性を仮定しないことを確認。
- BIMS17 Conj.6.3/Theorem6.7の開strip条件と4/(1-2epsilon)、Galbraith v2.0 Algorithm3/Lemma2.9.5の唯一の乱択箇所を読解。閉[1/8,7/8]→開(1/16,15/16)、epsilon=7/16→A=32、Euler criterion→非剰余探索→Tonelli–Shanksを照合。

## 確認限界

§§17–18の全Poisson変換・mask・全帰納段階の一様性、Proposition 5.1の全変換計算、§§8–10の全detector/contour/tail評価を独立再計算していない。記事はこれらを核心の未確認として明示する。入力の記述・使用条件と概略の対応の照合であり、199ページの全証明の正しさの認定ではない。全引用関係の網羅調査も行っていない。

## 確認版

修正・生成物確定後のhash manifestを機械保存済み。図のレイアウトは本部のvalidation記録を参照する。

確認版のファイル同一性は `article-content-manifest.json` の当該paper IDを参照する。後続変更はこの版への点検を自動承継しない。
