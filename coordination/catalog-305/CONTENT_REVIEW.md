# カタログ305 独立数学内容点検

- 担当：`/root/content_review`（執筆者とは別担当）
- 指定：`gpt-6-astra` / `high`。起動引数による指定は本部の MODEL_PROVENANCE.json を参照。取得できない実モデル詳細は推測しない。
- 点検開始：2026-10-21 20:22 JST。記事初稿とは別の独立点検時間。
- 対象原典版：inventory.json の commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、3論文とも September 24, 2026。
- 状態：第1段階の3記事・日英案内について、独立内容点検と指摘後の再照合を完了。対象版は末尾と4件のmanifestに記録。全証明の正しさの認定や第2段階の完了を意味しない。
- 作業範囲：本記録と `review/`。執筆者ファイルを直接変更しない。

## 原典の照合軸

### A boundary-only obstruction to four-dimensional disk embedding

- Theorem 1.1, p. 3：compact connected oriented smooth M、nonempty boundary、有限のproper generically immersed discs。入力の球面はframedで各々smooth embeddedに選べるが、異なる球面の交差は許される。λ(fi,gj)=δij1、λ(gi,gj)=0（対角込み）、reduced μ(gi)=0。境界円の像を張る互いに素なproper locally flat discs自体が存在しない。出力のframing・相対ホモトピー類・dual spheresは要求しない。
- Corollary 1.2, p. 4：F2とF2を部分群として含む任意の群はgoodでない。構成したMのπ1をF2と同定する主張ではない。有限生成π1(M)へのFrの全射とFr⊂F2、good群の部分群・商閉性を使う。
- Corollary 1.3, p. 5：無制限topological surgeryと5次元s-cobordismの両立を否定する。どちら単独が偽かを決めない。
- Proposition 2.8, p. 16：境界像からsmooth cutsを得る。Xは非連結でもよく、wallには唯一のtorus境界成分のほかclosed componentsがあってよい。全capped baseをembedded discへ圧縮したとは主張しない。
- Corollary 4.11, pp. 30–31／Definition 5.1, pp. 31–32：勾配idealそのものとrの一致、valueのr²包含、反復添字を含む両側三重積、相補接空間。
- Theorem 5.8, pp. 36–38／Corollary 5.10, p. 38：separated potentials、共通係数環、graph補正後のexact value 0と両三重積witness、可逆接空間行列を保つ。元の複素CS級数を直接正標数化しない。
- Theorem 6.1, pp. 39–46／§7, p. 47：d≥5、char ℓ>2で上記formal dataが存在しない。主定理ではd=5を選ぶ。

### A marked tensor obstruction to four-dimensional disk embedding

- Theorem 1.1, p. 2／Remark 7.1, p. 48：compact connected oriented smooth M、有限のproper generically immersed discsとframed immersed spheres。λの対角を含む条件。置換円板はsame boundary mapsと入力fiに由来するnormal framingsを保つ。相対ホモトピー類は指定しない。proof markingsは構成した曲線・経路の指定であり、出力に余分な条件を課さない。
- §7, pp. 47–48：Lemma 2.4で固定した入力→仮想置換→Proposition 2.2のcut→Proposition 4.5、Theorem 5.1のalgebraic potentialsとholonomy→Proposition 6.1→Theorem 3.1。
- Remark 7.1：ordinary/simple surgeryや5次元s-cobordismを各々否定する追加結論は本稿では主張しない。
- finite tensor obstructionは個別square-zeroで全mixed square-free monomialsを保つT、実際のgradient ideals、m≥5が要点。radicalやt_i t_j=0への置換は不可。

### A PD4 group without an aspherical manifold model

- Theorem 1.1, pp. 1–2：有限表示G、有限・向き付けられた4次元aspherical Poincaré complex Q、H^i(G;ZG)=0 (i≠4)、H^4=Zと自明right action、閉aspherical topological 4-manifoldによる実現不能、有限生成free modulesによる自明left module Zの有限resolution。全n≥3での普遍命題を否定するが全次元に反例があるとは主張しない。
- Proposition 2.1, p. 4：specified hyperbolic basisを持つD、3-cellsを全basis spheresへ付けたP≃BHと4次元Poincaré pair、境界markingを延長するtopological graph-type filling不存在。
- §2.1, pp. 4–5：marked論文のmain nonembedding theoremだけではなく、marked構成Lemma 2.3/2.4とedge/algebraicity/vertex/finite tensor packageを直接使う。hypothetical disk cutsの命題と幾何構成入力は区別。
- §§2.2–2.4, pp. 6–10：tube-side mapsを保つexterior model、全middle basis、marked arbitrary topological fillingからcuts。punctured smoothing後のformsはfilled cohomologyを計算する。
- Proposition 3.2, pp. 13–14：QとGの肯定的結論。Lemma 3.3, pp. 14–15の別CAT(0) modelはassembly用。4次元rigidityやgoodnessを直接帰結させない。
- §§4.1–4.3, pp. 16–20：指定π1/π2 markingを持つequivalence、Kasprowski–Landによるs-cobordism、Quinnのstable productによる全original＋added sphere pairsの幾何実現。unmarked stable homeomorphismだけでは足りない。
- Proposition 5.5, pp. 29–30：surgeriesはπ1とcentral boundary markingを保ち、regular homologyを消し、simply connected acyclic coverをcontractibleにしてProp2.1に矛盾。

## カタログの接続

- marked → PD4：直接入力。結果単位を上記のpackageとして記録する。
- boundary-only と marked：境界条件の相違を持つ別構成として比較する。共通の著者・問題だけから証明依存や結果の包含辺を作らない。
- boundary-only → PD4：直接引用・入力は今回確認した範囲にない。

## 画像確認

PDFスキルを用い、主定理の原典ページをPopplerで画像化して確認：`review/boundary-thm.png`（p.3）、`review/marked-thm.png`（p.2）、`review/pd4-thm.png`（p.1）。PD4の主張はp.2へ続くため抽出テキストと合わせて読む。これらは原典読解証拠であり、記事図の表示確認を代替しない。

## 確認範囲の限界

上記は記述・核心の証明接続の照合準備。外部定理の証明そのもの、全補題の独立再証明、formal verificationや専門家査読は実施しない。記事受領時に実際の照合箇所・指摘・修正対象版を追記する。

## 直接使う外部結果の追加照合（20:25–20:29 JST）

取得URL・版のファイル同一性は `sources/external/acquisition.json` を唯一の台帳とする。

- PRT25 Theorem A, pp. 3–4：good群、境界locally flat embedding、λ(gi,gj)=0とreduced μ(gi)=0のもとで境界を保つ円板と幾何的dual spheres。generically immersed入力の場合は誘導boundary framingを保てる。§1.1, p.4のgood群の部分群・商閉性を確認。boundary Cor1.2、markedの比較対象に対応。主張ページ画像は `review/prt-theorem.png`。
- KPT21（9頁の著者版）Conjectures 1.5–1.7, pp. 2–3と§3, pp.7–8：surgeryとs-cobordismの同時成立からdisk embeddingへの含意、framed boundaryを保持するgrope/link帰着を確認。boundary Cor1.3の引用・適用に対応。独立した片方の偽性までは帰結しない。
- DSGJ-v3 Lemma 2.3, p.3／Theorem 3.6, p.7：formally smooth環で自由な微分基底を持つ場合の微分作用素基底、essentially smoothな体上代数・剰余体のseparabilityのもとでdifferential powersとsymbolic powersの一致を確認。boundary Lemma5.3, p.34はétaleなC局所環で各primary componentのradicalへ適用しており、smoothnessとseparabilityを満たす。主張ページ画像は `review/dsgj-input.png`。
- KL-v3 Theorem1.1, p.1／Lemma2.3・Theorem3.1, p.5／Lemma3.3, pp.6–7／主証明p.7：aspherical PD4のBπ、FJ、degree-one classifying maps、almost-spinの場合のs-cobordism、normal invariantを消すpinchを照合。PD4 Lemma4.4, pp.18–19がこの証明を指定marking付きで利用することを確認。goodnessはs-cobordismの生成には不要。主張ページ画像は `review/kl-input.png`。
- FQ2013 Lemma2.10.1, pp.39–40／§2.10.2, p.40：height≥3、small component imagesからnew capsによる異成分の分離。有限cover collectionsを先に分離し、そのdisjoint neighborhoods内で個々の成分を分離する二段階を確認。PD4 Lemma5.4, pp.27–28が同じ二段階を用い、後半の一様gallery boundを要求せずdirection patch全体の保持を使うことに対応。
- PRT25 Lemma4.1, pp.15–17／Lemma4.2と証明, pp.17–18：full dual-cap pairing、boundary-collar保護、冒頭のgoodnessによるnull-loop cap生成、続くtowerとgeometric dual生成を照合。PD4 §5.5, pp.28–29はLemma4.2全体をgoodnessなしに適用せず、独自のnull-loop構成後の証明部分を使う説明になっている。
- 未取得のQuinn原論文、FJ・reflectionの外部証明全体などへ上記の確認を拡張しない。記事の確認範囲は各担当のsources.jsonと照合する。

## 原稿受領前の先行指摘

- 20:27 JST、boundary JA初稿のCor1.3説明に、surgery assertionのdomain/target（コンパクト4次元多様体→4次元Poincaré pair）を明記するようauthor_disksへ返した。主証明の境界条件・二つの三次則・同一Frobenius商の記述に明白な取り違えは見つからなかった。生成前原稿の先行読解であり、最終受領・日英図照合は未了。

## Boundary-only 記事の受領点検（20:30–20:36 JST）

- 対象版：`review/boundary-reviewed-manifest.json` に日英本文、出典・引用台帳、TikZ・TeX・SVG・citation-build、採用した図画面のSHA-256を記録。
- 日英全本文を比較し、Theorem1.1の全存在条件・交点条件・個別embedded dual・境界像だけの非充填、Cor1.2のF2と全overgroups、Cor1.3の二主張の同時成立否定を確認。独立した証明節はこの3結果に対応し、図前の主要結果がそれぞれ全主張を提示する。
- 原典照合は前記に加えLemma2.7, pp14–15（境界相対のgraph map変更）、Lemmas3.1–3.2, pp17–18（二重被覆と相補性）、§6.3–6.4, pp42–44（tensor選択と全mixed項）を読んだ。式・条件・帰着の要約に明白な齟齬は見つからなかった。
- 先行指摘のCor1.3 domain/targetは日英で修正済み。KPT21の誌面pp7–8/PDFpp8–9の対応も原ファイルと照合。
- 6枚のcanonical SVGを表示した本部のChrome画像 `screens/boundary-only-disk-embedding.{ja,en}-1280-figure-{1,2,3}.png` を点検者も直接開いた。3種類すべてで日英の箱・式・矢印・役割・引用が一致し、重なりや欠けは見つからなかった。
- 途中の `drafts/.../review/*.png` はdvisvgm専用driverのTeXを別PDF経路で描いた不適切な中間プレビューで、全ノードが重なっていたため指摘した。担当から当該PDF/PNGの削除とcanonical SVG不変の報告を受け、上記の実表示画像で確認し直した。これはcanonical SVGの修正要求ではなく、採用する表示証拠の訂正である。
- 判定：**内容点検の範囲では受領可**。外部証明全体・全局所幾何構成の独立検証を意味しない。サイト組込み・冊子PDF・公開確認は本段階の対象外。

## Marked代数化の外部入力照合（20:31–20:33 JST）

- PTVV提供PDF Theorem2.5（PDF39）、Corollary2.6(4)（PDF44）、Theorem2.9（PDF45–46）を読み、O-compact/oriented source、mapping stackのderived Artin/finite presentation、Lagrangian intersectionによるshift -1を確認。提供PDFには目視できる誌面ページ番号がないため、推測せずPDF位置を使うよう執筆者へ連絡。
- Calaque-v2 Definition2.6/Claim2.7/Definition2.8（p11）、Theorem2.9（p12）を読み、relative orientationのnondegeneracyとboundary structureからrestriction mapのLagrangian structureを得る記述を確認。
- BBJ-v4 Example5.15（p34）、Theorem5.18(i)（p36）を読み、shift -1のderived schemeに対するminimalなZariski-local Darboux chartとcritical locus表示を確認。
- marked原稿§5.1, pp30–31では、SL2のtrace、sphereの次元2、有限CW、punctured fillingのrelative orientation、based derived schemeという適用条件が列挙される。これは代数的critical chartを得る入力であり、特定のCS potentialとの同一性は別のProposition5.2・§§5.4–5.5の仕事と区別する。
- 画像：`review/{ptvv-input,calaque-input,bbj-input}.png`。外部定理の全証明は検証していない。

## PD4記事の受領点検（2026-10-21、対象版時刻はmanifestに記録）

- 対象版：`review/pd4-reviewed-manifest.json`。日英本文・sources/citations・図原本/生成物・目視した6枚のPNGのSHA-256を記録。
- Theorem1.1の全結論（有限表示、有限有向aspherical PD4複体、群環係数双対性と自明right action、有限free resolution、閉aspherical位相4多様体の非実現性）を図と本文の帰着に照合。Propositions2.1・5.5も独立証明節の図前に全主張がある。
- §§2–5の核心を原典と照合。特にtube-side pushout、任意の位相充填の穿孔平滑化とfilled cohomology、別CAT(0)模型の用途、全original/added sphere pairsの標識、二段階分離と全loop system、正則係数手術を確認した。
- 指摘したtensor入力条件（m≥5、p≥9、標数0、辺ごとの別座標block）は日英本文へ修正済み。外部CAT(0)・Farrell–Jones・穿孔平滑化について、全証明未検証と原典結果記述未照合の違いも日英・sourcesに明記された。修正箇所と周囲の帰着を再照合。
- `drafts/catalog-305/pd4-no-aspherical-model/review/{main,chamber,removal}.{ja,en}.png` 全6枚を直接目視。本文/TikZの式・操作・引用と一致し、重なりや欠けなし。boundary記事の不適切なPDF中間プレビューとは異なり、これらは正常な別driver生成画像である。本部からcanonical SVGのChrome画面も正常との報告を受領。
- 判定：**内容点検の範囲では受領可**。Quinn83の原典未取得、CAT(0)/FJ/穿孔平滑化の外部原文記述未照合、局所操作・外部定理全証明の未検証は記事どおり残る。

## Marked追加読解と引用版の照合

- 番号付きPTVV-v4へ引用版を統一する変更を受領し、Theorem2.5 p33、Corollary2.6(4) p37、Theorem2.9 p39を原文と再照合。offprintと同内容の入力であるがページは転記せずこの版で確認した。`review/ptvv-v4-input.png`で誌面p33を目視。
- Artin69 Theorem1.10の誌面p26/PDF5を読解・画像確認。体上有限型局所環のhenselization、有限多項式系、任意有限jetの近似という条件がmarked Lemma3.2の左右別々の系に対応する。
- Getzler09 Theorem5.4（誌面295/PDF27）、Corollary5.11（299/PDF31）、Propositions4.7–4.9（292–293/PDF24–25）の記述を読解。nilpotent L∞/dg LieのsurjectionからMC fibration、通常のnilpotent係数、gauge subspaceとMCの同値の範囲を区別。marked Appendix A, pp49–51のderived-coefficient比較は論文側の追加論証であり、Getzlerの通常係数命題だけの結論ではない。画像は`review/getzler-input.png`。
- marked §§3.2–3.4, pp19–23のFrobenius商、actual boundary identity、kernel support、第二homologyのprojection、各tensorで異なる三因子を選ぶliftを原稿記事と照合。§§5.3–5.5, pp33–36ではfull Hamiltonian closed form、Jacobian二乗誤差、critical quotient上で恒等なflowの接続を確認。Appendix A, pp49–51のordinary/derived係数の分離とfull mixed cocycle比較を読んだ。全符号・transferの独立再証明ではない。

## Overview案内の受領前照合

- 日英全文、connections.jsonの3つの直接入力記録（幾何・代数化・tensor）と比較記録、presentation.json、connections.tikzを照合。直接入力は一つの論文間依存の別interfaceであり、3本の独立した論文間辺ではない。
- 二円板稿は別構成であり、同一例・同一ambient manifoldの包含関係を断定していない。boundary-only→PD4の直接辺を作らず、marked→PD4の構成・中間結果を具体化している。
- JAの「入力のdual spheresを保ちながら」を「入力に備え」へ、ENのretainsをhas in its inputへ変更する指摘は修正済み。出力へのsphere保持条件を連想させない表現となった。
- canonical SVGのChrome画像`screens/overview.{ja,en}-1280-figure-1.png`を直接目視。破線の比較と実線の入力が区別され、図前文献・引用番号・操作と日英本文が一致。重なり・欠けなし。最終manifestはmarked記事の受領後に確定する。

## Marked記事の受領点検（2026-10-21）

- 日英全文・sources/citations・3種類のTikZを原典と照合。Theorem1.1の入力と非存在結論、Theorem5.1の代数化と全critical scheme上の全有限holonomy marking、Theorem3.1の全仮定と非存在結論が図前に提示され、各結論への証明概略が対応している。
- 指摘4点：出力円板もproperと明記、Fiは全n個/biはactiveのみと量化を分離、Theorem5.1のYのsmooth条件、Proposition6.1の記述p37を証明pp44–47から区別。日英および引用の修正後に影響範囲を再照合した。
- 原典Theorem1.1とRemark7.1に従い、同じ境界写像と誘導normal framingは保持するが、相対ホモトピー類は指定しない。proof markingsを置換円板への追加制約と読み替えていない。boundary-onlyとの比較・PD4への中間入力にもこの区別を維持。
- 核心の接続は、固定入力→framed圧縮とconnected cuts→full gradient ideals/残差補正→scheme-theoretic markingsを保つ代数化→全active triples→有限tensor障害。主定理の入力配置の存在条件も非存在結論とは別に説明される。
- canonical SVGのChrome画像`screens/marked-tensor-disk-embedding.{ja,en}-1280-figure-{1,2,3}.png`全6枚を直接目視。原本・本文の数式、矢印の役割、PTVV固定版とArtin等の引用ページに一致し、欠け・重なりなし。
- 判定：**内容点検の範囲では受領可**。Dupont原典や著者が未再照合としたGetzlerの他入力、全cochain transfer/導来比較の符号/局所plumbing操作、外部結果全証明の未検証は記事の確認範囲に従う。点検担当が追加で読んだGetzler4.7–4.9を執筆者本人の読解に自動算入しない。

## 第1段階の最終受領

- 3記事とoverviewを**内容点検の範囲で受領可**とする。markedのcatalog-changes最終比較表もoverviewのdirect/comparison判断と突合し、同一例の包含やboundary-only→PD4の未確認依存を加えていないことを確認した。
- 対象版は`review/{boundary,pd4,marked,overview}-reviewed-manifest.json`。日英本文・出典/引用記録・図の原本と生成物・直接目視した図画像をSHA-256で特定する。manifest以後の数学内容変更へこの判定を自動承継しない。
- 解消済み指摘は、boundary Cor1.3のdomain/target、PD4のtensor入力条件と未照合範囲、markedのproper/smooth/量化/引用ページ、overviewの入力dual表現。各修正後の主張と日英・周辺の帰着を再照合した。
- 未確認範囲は各記事末尾とsourcesを維持。とくにQuinn83原典本文未取得、PD4のCAT(0)/FJ/穿孔平滑化の原典記述未照合、数学原稿全証明の独立検証未実施を、確認済みの引用・適用関係と区別する。
- 第2段階のサイト組込み・日英冊子PDF・公開前総合検査、ならびに第3段階の公開は実施していない。本点検担当はCONTENT_REVIEW.mdとreview/以外を変更していない。
- 最終書誌修正：Getzlerの正式タイトルを`Lie theory for nilpotent L∞-algebras`へ変更したsourcesと日英文献案内を確認してmarked manifestを更新。数学本文・図原本・TeX/SVGは同一SHAを保持。独立点検は2026-10-21 20:22 JST開始、最終版固定時刻はmanifestのcheckedAtを参照（記事初稿時間とは別枠）。

## 初稿後の記録補完に対する限定点検

- 2026-10-21、author-disksが両円板記事のsourcesにunresolved/dependencies、boundaryに3主要結果のstatements、両statusに後続編集記録を追記した。これらだけを既存点検と突合し、初稿時点の未確認範囲、供給結果→使用箇所→役割、各結果の全結論の確認範囲が一致することを確認した。
- markedのGetzler適用先はProposition5.2 p32とAppendix A pp49–51を分けるよう返し、補正済みの1箇所を再確認。執筆者の初稿読解と点検者のGetzler追加読解も区別されている。
- 本文・引用表示・図原本/生成物のSHAは受領版から不変。全文再読・図再生成・新規原典読解は行わず、boundary/markedの2manifestのsources/statusだけを更新し、supplementalReviewsに範囲と日時を記録した。受領可判定と残る未確認範囲は維持する。
