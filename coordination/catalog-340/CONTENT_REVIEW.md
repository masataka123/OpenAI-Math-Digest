# カタログ340：独立数学内容点検

- 担当：`/root/astra_review`、執筆者 `/root/astra_author` とは別担当。
- 指定：`gpt-6-astra` / `high`。起動時の明示指定は `MODEL_PROVENANCE.json` を参照。追加の内部実行情報は推測しない。
- 点検日：2026-11-04。開始時の実測時刻記録なし。最初の時計取得は15:06:29 JST（原典読解後、原稿受領前）。制作セット1.4およびMODEL_ROLES（2026-10-20）を適用。
- 原典：OpenAI, *A counterexample to the nearby Lagrangian conjecture*, September 23, 2026、公式commit `4eaee87548250b2682affda7d05d947c05554bae`。28ページ。版とハッシュは `inventory.json` を唯一の台帳とする。
- 状態：第1段階の独立数学内容点検完了。指定範囲内の修正指摘は解消し、最終日英本文・図・案内を固定した。以下は経過を含む記録であり、最終判定と未検証範囲は末尾を参照。

## 原典から準備した照合項目

本文pp.1–26を読解。原典の式(29)–(33)および図2を含むpp.19–20はPDF画像でも確認した。

| 原典箇所 | 点検内容 |
|---|---|
| Theorem 1.1、p.1 | 「ある十分大きい偶数N」の存在量化、底Q=S9×S^(N−1)、閉・exact・smooth embedding、L≅Q、零切断との非Hamiltonian同位。Hamiltonianは全時間で共通のコンパクトな台を持つ。 |
| Theorem 2.1／Proposition 2.2、pp.5–6 | tube fibration、非零a∈π9Tかつγ_*a=0。π9BO→π9BGの単射性は別の役割。境界像の位数≤4とWhitehead群2-primary部分の位数32を区別。 |
| Lemma 2.3、pp.6–7 | m≥20で十分に安定化した代表、height関数の両臨界点近傍で固定二次形式、勾配下界と混合微分評価。 |
| Proposition 3.1／Lemma 3.2、pp.7–9 | B=S9、p≥20、固定半径外の斉次性、唯一の非退化臨界点と滑らかなsection、spherical class=0。負固有空間のsphere bundle→infinity negative domain→BJ単射→局所モデルの固定化。 |
| Lemma 3.3、pp.10–11 | C1直和の平滑化とregular homogeneous homotopy、新臨界点なし。正変数追加でl>k+9、後に負変数を追加して対角安定系へ戻す。 |
| §§4.1–4.4、pp.11–17 | 個別fiberがproductであることと、族全体のincoming-relative productを区別。1回のinterval stabilization＋固定Y-cylinderへのextension、product complement、安定化・extensionのπ9検出、core embeddingsの直線化。 |
| Proposition 5.2、pp.18–20 | K→Λ→Tの順、F=G−Rβ⟨v,w⟩、全臨界点で∇g=Rv、Crit(F)≅Q。v方向とradial w方向でfull vertical-gradient mapが正則となる。fiber Hessianの可逆性はここでは不要。 |
| Proposition 5.2、pp.19–20 | sphere momentum一致⇒w−w′=tv。base momentum差≥R|t|(Kδ0−C1/c)>0（b∉U0）。b∈U0は二次形式で一意。コンパクトな単射immersion⇒閉embedded L≅Q、Γ*λ=d(F|Crit)、primitive=−g。 |
| Lemmas 6.1–6.2、pp.21–22 | 仮定した同位の逆向き、Euclidean cylinder、radial位置固定とcentral zero graph。compact mixed generating functionと一様な空間buffer。 |
| Proposition 6.3、pp.23–25 | 実際のcutoff式、余分な臨界点の排除、critical lociの微分同相、split signature(d,d)追加とstable tube class保存。一般のLの不変量として未証明の一意性を付加しない。 |
| §6.4、p.26 | Crit→zero graph→baseが微分同相なので一意臨界点かつHessian非退化。固定S9 slice、p=m+ds≥20、[g∞]free=[a]free≠0とγg∞≃*をProp3.1へ接続。自由ホモトピーで0のorbitは0。 |

## 確認範囲の境界

原典の主張・証明経路・直接入力の記述と利用条件を点検する。原典の全証明の正しさを認定せず、外部文献の全証明やその先の依存を再帰的に検証しない。記事・図・案内の照合結果、修正と再確認、最終版ハッシュは原稿受領後に追記する。

## 外部直接入力の独立照合（原稿受領前）

取得PDF・版URL・ハッシュは本部の `sources/external-downloads.json`、ローカル原典は記事 `sources/` を参照。入力定理の記述と本稿での使い方を確認したもので、引用先の証明全体の検証ではない。

- **AIS26**：arXiv:2603.28007v2、§3.6、Theorem 3.30（p.25）とRemark 3.34（p.26）。stable tube fibrationとrigid mapのJ-mapとの可換図を確認。本稿Theorem 2.1（p.5）での利用に対応。function/domainおよびnegative-domain frameモデルの全比較は別の未確認範囲として残す。
- **Rog14**：arXiv:1403.5998v1、Theorem 3.3（p.8）。次数10の表の値と「irregular primesのp-power torsionを除く」の留保を確認。本稿Proposition 2.2は2-primary部分のみを使うため、この留保を全素数での完全な群計算へ拡大しない。
- **CP25**：arXiv:2506.06110v1、Proposition 2.11（p.7）、Remark 2.13／Definition 2.15（p.8）、Theorems 2.16–2.17（p.9）。compact base上のh-cobordism族の分類、WJRのlower stabilization convention、codimension-zero extension、安定化およびstable extensionの連結度を確認。本稿Proposition 4.5で、r=10に対する閾値35に対してdimΣ≥38、extensionの連結度からπ9で同型を得る適用に対応。個別fiberの積化だけで族の積化を結論していない。
- **BPT25**：arXiv:2503.04348v1、Theorem 2.3.4（p.16）とCorollary 2.3.5(iii)（p.17）。PDF画像 `review/BPT25-016.png`、`review/BPT25-017.png` でも確認。parameter次元10に対しdouble-point条件10+2(k−1)<k+l−1、rank-defect条件l+1>10+(k−1)を本稿p.17で使用し、l>k+9が両者を満たす。compact parameterとendpoint-relative版への局所cutoffによる拡張は本稿の説明であり、BPTの定理の文言そのものとは区別した。
- **Hatcher**：著者公開PDF [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)、Corollary 4.33（誌面p.367／PDF p.376）。単連結CW複体間の全整数homology同型がhomotopy equivalenceとなる記述を確認。本稿Lemma 3.2・4.2で対象の単連結性およびCW typeを確認した。
- **IWX23**：2023出版版 *Stable homotopy groups of spheres: from dimension 0 to 90*、Table 1（誌面p.113／PDF p.7）。Webと `sources/stable-stems-2023.pdf` の画像 `review/IWX23-007.png` で次数9の行を確認し、2-primary v1-torsionがZ/2、odd primaryが0、v1-periodicが(Z/2)^2で合計(Z/2)^3。本稿Proposition 2.2のπ10BGの位数8に対応。
- **Adams, On the groups J(X)—IV, Theorem 9.5**：機関掲載PDFの直接取得がtimeout、Web直接openも失敗。検索断片は読めるが対象定理の完全な記述・ページを確認したことにしない。J8・J9単射の本稿内での使用箇所は確認、引用先Theorem 9.5の直接照合は未了。

### Adams入力の保留解消

本部が同じ大学の移行先 `https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-JX4.pdf` から取得した51ページのPDFを照合した。Theorem 9.5は誌面p.51／PDF p.31（画像 `review/Adams66-31.png`）。r≡0,1(mod8)、r>1のときe_R∘J:π_r(SO)→Z/2が同型という記述により、r=8,9でJが単射となる。正次数でSOとOのhomotopy groupsを同一視し、本稿Proposition 2.2のJ9の像の位数2およびJ8単射の両使用に対応する。対象定理の記述の直接照合は完了、証明自体は未検証。旧URLの失敗を履歴として残し、未解消事項としては扱わない。

## 日英本文の初回照合と修正依頼

生成引用・図が完成する前の日英article.mdを全文照合した。主定理の存在量化、QとT*Qの次元、Proposition 5.2の全結論、Proposition 3.1の仮定、Morse family正則性とfiber Hessian非退化の区別、二種類のmomentumによる単射性、同じ生成族の自由stable tube classを保つ輸送、固定slice上の最終矛盾は原典と一致する。

執筆担当へ次の修正を返し、本部へ共有した。原稿ファイルは点検担当が変更していない。

1. **輸送のcutoffの範囲**：§5第2段階の日英で「臨界点でcutoffが定数になる」と全cutoffを一括しているが、原典p.24ではβ1とχは1となる一方、空間cutoffζ1はU\Dで変動し得る。Vでは全cutoffが1、U\Dではσ=0→z=0によってζ1の微分項が消える、という二領域処理を明示するよう依頼。大域で正しい生成写像を得るために必要な区別。
2. **Dβの定義**：§3第1段階のTの下界で使うDβが未定義。原典p.19のsup(|β(s)|+s|β′(s)|)を日英に補うよう依頼。
3. **全結論の説明先**：citations.jsonのconclusionCoverageでembeddingとL≅Qがproof-1-step-2（Crit(F)≅Qとimmersionまで）へ対応していた。embeddingを得て像Lとの微分同相を結論するproof-1-step-3へ対応先を変更するよう依頼。本文の論理変更ではなく、結論への説明先の修正。

外部入力の追加確認（Adams／IWX／BPT／Hatcher）については作者が引用・確認範囲へ反映中。最終判定は修正、図、引用、案内の完成後に行う。

## 本文修正の再確認

作者が修正した日英本文を再読し、上記1–3を解消した。β1・χとζ1の役割を分け、VとU\Dで生成写像・正則性を得る記述は原典p.24に対応する。Dβは原典p.19の定義に一致する。embeddingとL≅Qの結論先はproof-1-step-3へ修正された。日英の外部入力表にはAdams／IWX／BPT／Hatcherの確認が入り、Bott／WJR／Milnorの原典記述未照合と区別された。

| Theorem 1.1の結論 | 記事の説明先 | 照合した接続 |
|---|---|---|
| ある十分大きい偶数N、Q=S9×S^(N−1) | proof-overview-step-2 | Lemma 2.3でm≥20の有限段階へ安定化し、N=2mとする。任意Nの主張へ拡大しない。 |
| 滑らかなLagrangian embedding | proof-1-step-2、proof-1-step-3 | full gradient正則性→Lemma 5.1のexact Lagrangian immersion→二momentum分離→compact injective immersion。coverageの到達先はstep-3。 |
| 閉性 | proof-1-step-3 | Crit(F)≅Qがコンパクト・境界なし、embeddingの像としてLも同様。 |
| exact性 | proof-1-step-2、proof-1-step-3 | pullback λ=d(F|Crit)、生成写像のembeddingにより大域primitive、Eulerの公式による−gの表示。 |
| L≅Q | proof-1-step-3 | 明示的パラメータ化でCrit(F)≅Q、Γ_Fはその像への微分同相。 |
| 非Hamiltonian同位性 | proof-3-step-3 | 逆同位の延長、split安定化による同一自由tube類保持、zero-graph射影の微分同相→唯一非退化臨界点、固定S9 sliceでProp3.1と矛盾。 |

4枚のTikZ原本の日英数学部分を照合し、輸送図の「臨界点近傍では」の限定とmain図の最初のkernel入力の出典補完を依頼した。原本では対応済み。最初の図PNGはmain／transportの補完前なので、その2枚の日英は更新後画像で再確認する。realization／vanishingの日英PNGは数式・操作・引用・矢印に原典との不一致や読み取りを妨げる重なりは認めなかった。

## 案内・接続の照合とAACK25の追加確認

短い日英案内およびpresentation.jsonの単論文要約は、主定理の存在量化、底、閉exact埋込み、底との微分同相、非Hamiltonian同位を保持する。PDF準備中と原稿の主張の紹介を明記し、確認完了した証明であるかのように述べていない。外部接続はカタログ内の別論文間依存と区別されている。

初回のconnections.jsonは所要記述照合済み7文献と未照合3文献を記録していたが、本稿p.5がγの同定へ直接使うAACK25が未記録だったため、作者・本部へ追加を依頼した。本部取得後、その必要部分のみを追加読解し、記述と適用の照合を完了した。

- **AACK25**：Mohammed Abouzaid, Daniel Álvarez-Gavela, Sylvain Courte, Thomas Kragh, *Normal invariant of nearby Lagrangians via twisted derivative*、arXiv:2505.12515v2（arXivの版表示22 October 2025、PDF本文の日付23 October 2025）。42ページ。
- Definition 3.10（p.14）、Definition 3.36（p.23）：原点でC1、2次斉次、原点以外で勾配非零、二次形式へ接続可能という模型の記述。
- Definition 4.3／Proposition 4.4（p.26）：負領域へのhomotopy frameの空間とhomotopy principal G^u_k-bundle。Remark 4.5／Proposition 4.6（p.27）：安定frame空間の各成分の可縮性。Proposition 4.7（p.28、証明はp.29）：安定topological tube空間の成分をBGと同定する記述。
- `review/AACK25-26.png`〜`AACK25-28.png` の原典画像も確認。本稿p.5は対角安定系の指定成分で、γを負領域球面束の分類写像として使うため、この入力の役割は対応する。
- AACK25の上記結果の全証明、smooth・domain・partition模型の全比較技術、Remark 4.5が依拠する先の安定化定理の再帰検証は行っていない。

作者へ8件目の記述・適用照合済み入力として追加を依頼した。Bott／WJR／Milnorの所要記述未照合は維持する。

## 初稿後の追加内容点検：残る3入力

本部の明示依頼を受け、初稿終了後の追加内容点検として2026-11-04 15:22:04–15:26:05 JST（両端とも時計取得）に所要記述だけを確認した。初稿の執筆時間を自動延長したものではない。取得原典とURL・ハッシュは `sources/external-downloads.json` に本部が記録した。

- **Bott59**：機関掲載の出版版スキャン [The stable homotopy of the classical groups](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bott4.pdf)、26 PDFページ。Corollary to Theorem II、式(1.5)（誌面p.314／PDF p.3）と次ページの安定群の列（誌面p.315／PDF p.4）を確認。画像 `review/Bott59-03.png` と `Bott59-04.png` でも照合した。Oの8周期性と次数0・1のZ/2からπ8O=π9O=Z/2となり、本稿Proposition 2.2（p.6）の使用に対応する。
- **Mil65**：機関掲載の出版版スキャン [Lectures on the h-Cobordism Theorem](https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf)、121 PDFページ。Theorem 9.1（誌面p.107／PDF p.112、画像 `review/Mil65-112.png`）は、W、V、V′が単連結、H_*(W,V)=0、dimW≥6のsmooth triadに対しW≅V×[0,1]を述べる。本稿§4.2（p.13）はΣ単連結、dimΣ≥38であり、h-cobordismの境界包含がhomotopy equivalenceなので適用条件を満たす。incoming端を固定する補正a^−1×idは本稿自身の説明。これは個別fiberの積性とH(Σ)の連結性への入力であり、族全体の積化は別途Proposition 4.5と分類結果による。
- **WJR13**：機関掲載 [Spaces of PL Manifolds and Categories of Simple Maps](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/WJR.pdf) の166ページの出版前原稿を使用した。本文に日付表示はなく、PDF metadataの生成日は2012-02-29。2013年出版版と同一版と扱わず、出版版との逐語比較は行っていない。Theorem 0.1（p.2）、Theorem 0.3（p.4）、Definitions 1.1.1／1.1.3（pp.7–8）、Definition 1.3.4（p.18）を確認した。この版では誌面ページとPDFページが一致する。画像 `review/WJR13-007.png` と `WJR13-008.png` でもcollarと区間積の模型を照合した。compact DIFF manifoldに対する自然同値H^s(M)≃ΩWhdiff(M)、unitのcofiberによるWhdiff、outgoing面(N×J)∪(W×∂J)、collared codimension-zero embeddingによるextensionは、本稿pp.5,13–16の使用に対応する。

これにより、記録した11の外部直接入力は、上記の取得版における所要記述と本稿の適用箇所を照合した。作者へ日英の確認範囲・入力表・引用台帳・connectionsを更新するよう依頼した。外部証明全体、WJR出版版との逐語比較、smooth/domain/partition模型の全比較、corner rounding、相対multijet、Hamiltonian輸送の全cutoff評価の独立再構成は未実施のままである。

### 追加入力の反映再確認

作者が更新した日英の文献案内・依存表・原典確認範囲、sources.json、citations.json、overviewの本文・connectionsを再確認した。11文献の所要記述・適用照合と全証明の検証が区別され、WJRの出版前原稿と引用される2013年出版版の違いが日英で明示された。Bottの周期性、Milnorの次元・単連結性・相対homology条件、WJRのcollared extensionの対応に不一致は認めなかった。overviewの案内も「3入力未照合」の旧状態から更新されている。

## 最終版の内容判定と同一性

**第1段階の独立数学内容点検を完了。今回の点検範囲内で未解消の修正指摘はない。** 最終の内容・画像確認終了は2026-11-04 15:30:08 JST（時計取得）。対象版のSHA256と記録時刻は `review/final-reviewed-files.json` に保存した。これは当該版への判定であり、以後の数学的改訂には影響箇所の再確認が必要である。

- 日英本文・独立した証明節の命題主張・全結論の説明先、4図の日英TeX/SVG、引用台帳、短い日英案内、presentation、connectionsを照合した。存在量化、閉性・exact性・埋込み・微分同相、非Hamiltonian同位の接続は上の全結論表の通りである。
- 本部が15:29に再描画した最終8図PNGを目視した。main冒頭のkernel引用、transportの「臨界点近傍では」の限定を含め、訂正が表示にも反映された。数式、操作の見出し、矢印の役割、引用、日英の対応に新たな不一致や読み取りを妨げる重なりは認めなかった。日英の最終案内表も目視し、「ある／some」の量化と主定理の各結論を保持していることを確認した。
- 現行4 Markdownと8 SVGのSHA256を本部の `validation/structure.json` と照合し、同記録のHTML SHA256を `validation/browser.json` の対象8表示条件（日英、PC/375px、個別記事/案内）と照合した。すべて一致した。15:17の旧PNGを最終判定の根拠としていない。全体の形式・リンク・画面検査や033/034比較は本部の記録を参照し、数学点検の代わりにはしていない。
- 記録した11の外部直接入力は所要記述と本稿の適用箇所を確認した。WJRは出版前原稿での照合であり、2013年出版版との逐語比較は未実施。外部定理の全証明およびその先の依存の再帰検証は行っていない。
- 未検証範囲は、smooth tubeの関数・領域・partition/frame模型の全比較、corner roundingと遷移写像の全整合性、相対multijet議論、Hamiltonian輸送の全cutoff評価の独立再構成、他カタログとの全関係である。原典の全証明の正しさ、専門家査読、形式検証を認定しない。この境界は最終日英記事・案内・台帳に明示されている。

本点検は第1段階の内容引渡しを対象とする。第2段階の冊子PDF・サイト組込み・公開前検査、第3段階の公開・反映確認は本記録の承認対象ではない。
