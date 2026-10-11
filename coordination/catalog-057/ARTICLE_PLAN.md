# 057 記事構成案（制作未着手）

固定版と識別情報は[inventory.json](inventory.json)。以下は原典の主張・目次・選択した証明箇所の**予備閲読による編集案**であり、記事原稿や全証明の照合結果ではない。ページは今回取得したPDF位置。外部原典の記述・適用条件は制作時に確認する。本文と図の数は読解・可読性に応じて調整する。

## 共通構成

1. 主要結果を原典順に主張欄で提示する。原典のspecialnessの約束、量化、群の種類、条件付き入力を保つ。
2. 図前に、自己引用の読み方と、著者キー・著者・正式タイトル・用途・参照版・原典リンクの文献案内。
3. 中間命題が複数ある記事では、詳細節より先に主定理全体のTeX図と直後の説明。引用だけでなく入力の内容・役割を矢印へ記す。
4. 独立して証明を説明する中間命題は原典の仮定・全結論・番号・ページを図前へ置く。冒頭の既出主張は参照する。以下の節候補の統合・省略時も結論の対応を失わない。
5. 直接入力と使用箇所、原典を読む入口、原稿の主張／編集側の確認／保留事項を区別する。標準用語の長い定義やQ&A形式は入れない。

## 1. Special Kähler abelianity（A、50頁）

### 主要結果と結論の対応案

| 原典順・主張箇所 | 保持する対象・結論 | 証明説明の対応先案 |
|---|---|---|
| Theorem 1.1, p. 2 | 連結滑らかなspecial compact Kähler多様体、任意次元。通常の基本群全体に有限指数アーベル部分群。等価な連結有限不分岐正則被覆の存在も説明する | 全体節、§6の二分岐、有限核からの群論、被覆への翻訳 |
| Corollary 1.2, p. 2 | κ(X)=0の滑らかなcompact connected Kähler多様体の通常の基本群がvirtually abelian | κ=0→specialの外部入力とTheorem 1.1 |
| Corollary 1.3, p. 3 | (i) specialかつordinary Γ-dimension最大、または(ii)通常の普遍被覆がCⁿなら、有限étale被覆が複素トーラスと双有理 | (i)有限被覆・Albanese・一般ファイバー次元0、(ii)Campanaの別の含意を明示 |
| Corollary 1.4, pp. 3–4 | specialな滑らかなcompact connected Kähler多様体の通常の普遍被覆がholomorphically convex | 有限生成virtually abelian群の忠実線形表現→linear Shafarevich。Steinとは書かない |
| Corollary 1.5(i), p. 4 | normal compact Kähler基底の無限étale Galois被覆。被覆がnormal compact complex空間にZariski開埋込みを持つとdeck群がvirtually abelian | 最小次元反例→smooth special基底→Theorem 1.1→商群 |
| Corollary 1.5(ii), p. 4（証明pp. 4–5） | 普遍被覆がnormal compact **Kähler**空間にZariski開埋込みを持つ場合。有限étale被覆のAlbaneseが単連結compact KählerファイバーFの局所自明束となり、U≃F×C^q | (i)と有限群の場合→Claudon–Höring→束の引戻し・自明化。束・単連結性・積分解の各結論へ対応 |

Corollary 1.5の二つのcompactification仮定を混同しない。全主要結果を説明対象として計画するが、60分で埋まらない接続は対応表から消さず「未確認・未完成」と記す。

### 証明節の候補

- **Theorem 1.1 — 全体概略**：有限被覆でb₁最大化→Albaneseファイバー群の像N→exactness・FAb→Nが無限と仮定して最小相対底→線形像の有無で分岐→両方で一般ファイバーの正値性→トーラス上の降下とspecialnessに矛盾→N有限→virtually abelian。§1.6 pp. 6–7と§6 pp. 40–48を対応させる。原典Figure 1は骨格の参考で、引用・説明は確認に基づき新規TeX化する。
- **Theorem 3.1 — スペクトルの入力**（p. 11、証明pp. 12–23）：compact Kähler orbifoldの無限正規被覆についてscalar Dolbeault spectrumの0を扱う。独立節にする場合、正確な次数・被覆・作用素条件を主張欄で再取得する。重み付き逆作用素・有限伝播・対角類の接続を核心として選び、全評価を再現しない。
- **Theorem 4.1 — Hilbert係数から正値性**（p. 23、証明pp. 23–33）：全有限次元線形像が有限という条件と、有限指数部分群ごとに先に一つの被覆を選び、その像の**すべての無限商**に対してgdim≥ℓとなる条件(M)を保持。Theorem 3.1、amenable側のShalom、minimal rank、discrete monodromy、コンパクトファイバー、big lineの降下を結ぶ。
- **Theorem 5.8 — トーラスへの降下**（p. 37、証明pp. 37–40）：準備モデルのcofinal collectionでのbignessを扱う。固定した群商の実際のmeridian orderを保持し、log Kodaira次元の双有理不変性を無断で仮定しない。
- **Proposition 6.2／6.3 — 主定理へ戻す接続**（p. 41／p. 44、証明pp. 41–47）：必要なら独立節。Lemma 6.1、有限指数条件の実現、最小底・(M)、二つの表現の場合を説明する。独立節にしない入力は全体節の使用内容として明示する。
- **Corollaries 1.2–1.5 — 幾何学的帰結**：原典順に分岐・再合流を示す。主定理の全体図と重複させず、別の外部入力の使用箇所を記す。図を分割するかは引用の可読性で決める。

### 制作で優先する外部照合

Campanaのspecialness・Albanese（訂正の射影ターゲット条件）、Botong Wangの孤立指標のtorsion、Juanyong Wangのトーラス上の劣加法性、Campana–Claudon–Eyssidieuxのgeneral-type criterionとlinear Shafarevich、Shalom、Claudon–Höring。原稿の文献番号だけでなく各固定原典の主張と使用ページを取得する。033 Orbifold Iitakaへのp. 2の引用はκ=0の既知specialnessの別記録であり、直ちに主定理の直接入力にしない。

## 2. Two-step monodromy（B、19頁）

### 主要結果と結論の対応案

| 原典順・主張箇所 | 保持する対象・結論 | 証明説明の対応先案 |
|---|---|---|
| Theorem 1.1, p. 1 | 連結smooth special complex quasi-projective Vの任意の有限次元複素線形表現像がvirtually nilpotent、class≤2 | §3 pp. 7–8。有限étale被覆でL⁰=U×T、同じ被覆にexactnessを適用、Theorem 1.2へ帰着 |
| Theorem 1.2, p. 2 | dominantな**代数的**quasi-Albanese写像、smooth connected一般ファイバー、通常のπ₁列のexactness。canonical rational unipotent各商がclass≤2、full completionが有限次元かつclass≤2、複素unipotent表現像もclass≤2 | §2 pp. 4–7。canonical商のMHS→ファイバー像=commutator→weight −2→γ₃=γ₄=0→極限の安定化→基礎体拡大と普遍性。3結論を別々に対応 |
| Theorem 1.3(i), p. 3 | E×P¹の指定n≥3点のblowup、水平成分の狭義変換のみ除去。(Y,D)が**全upper modelを含む**原典の規約でspecial | §§4–5 pp. 8–13。残した例外曲線・orbifold multiplicity・楕円曲線slice・Riemann–Hurwitz |
| Theorem 1.3(ii), p. 3 | X→Eが原点選択後に代数的quasi-Albanese、全ファイバー連結、一般F≃P¹\{q₁,…,qₙ} | §6 pp. 13–15。切断とunits、semiabelian普遍性、ファイバー形状をそれぞれ説明 |
| Theorem 1.3(iii), p. 3 | a*:π₁(X)≃π₁(E)≃Z²、π₁(F)→π₁(X)は0 | §6の例外曲線を通る局所円板とmeridian、切断による逆。ファイバー自身の非special性と像の自明性を分離 |
| Corollary 3.1, p. 8 | log κ=0の場合の線形像、有限次元のfull rational completion、複素unipotent像の3結論 | Campanaの対のspecialness→open conventionへの比較→Theorems 1.1／1.2の両方 |

### 証明節の候補

先にTheorem 1.1の全体図を置き、その入力Theorem 1.2を詳細に展開する。主要結果欄は1.1→1.2→1.3→Corollary 3.1の原典順を維持する。Theorem 1.2の全体極限と任意表現への移行を省かない。Theorem 1.3はspecialnessとquasi-Albanese／π₁計算に分ける案とし、双方で冒頭主張を参照する。Corollary 3.1は3結論を短く結ぶ。

外部入力はCadorel–Deng–Yamanoi（原稿指定arXiv:2512.20360v1）のTheorem A／4.1、Theorem 3.1、Lemma 4.4、Proposition 4.13、Hainのpointed MHS、Deligneのweightとstrictness、Fujinoのquasi-Albanese H₁、基礎体拡大・SGA1等を優先。Morganの訂正とpointed functorialityを区別する。

Cao–Deng–Hacon–Păunの先行するclass-two結論と本稿の独立証明を区別する。Theorem 1.3の比較対象は原稿が指定する **arXiv:2603.14539v2** のTheorem E／7.15、Claim 7.17。最新稿一般への批判に拡張せず、§7 pp. 15–18の比較を当該版で照合する。未照合なら著者の主張として限定する。

§8 p. 18のQuestion 8.1を結論と混同しない。線形像・completionのclass≤2から通常の離散群全体のvirtually class≤2は導いていない。quasi-Albanese一般ファイバーのspecialnessを帰納仮定にしない。

## 3. Half-weight fourfold abelianity（本部、14頁）

### 主張・証明の対応案

| 対象・原典箇所 | 主張欄に保持する内容 | 対応する説明 |
|---|---|---|
| Theorem 1.3, p. 2 | Assumption 1.2。連結smooth projective complex四次元X、非空smooth connected reduced因子D、order-two root orbifoldがDefinition 1.1の意味でspecial。G=π₁(X\D)/⟨⟨γ²⟩⟩全体がvirtually abelian | 全体図：Proposition 4.1の八次元Y→Proposition 3.1でspecial Yとπ₁(Y)↠G→第1論文Theorem 1.1を**次元8**で適用→商群。証明p. 9 |
| Proposition 3.1, pp. 5–6 | §3のX,D・root orbifoldの設定を保持。Y smooth connected projective、g全射、g*D=2E、一般ファイバー連結かつΩ¹_F自明、通常の各素因子上・Dのroot chart上で一般点の上にsubmersion点がある、という4仮定。specialness移送と群の全射の両結論 | 微分線の比の降下→divisorial submersionで極を検出→矛盾。一方、偶数meridianとproper smooth familyから群の全射。独立節なら全仮定・両結論の主張欄 |
| Proposition 4.1, p. 6（証明pp. 6–9） | X,Dの同じ仮定から、全4条件を満たす連結smooth projective八次元Yを構成。一般ファイバーはgenus-one曲線4本の積 | Lemmas 4.2–4.4のパラメータ・安定化群除去・射影性・rankとsubmersion→支配的連結成分→偶数重複度。各条件への対応を示す |

主要結果→図前の文献案内→Theorem 1.3全体図→原典順にProposition 3.1、Proposition 4.1の詳細→直接入力→原典・確認範囲。初稿は本文の八次元構成を主経路とし、Appendix A pp. 10–13の十四次元構成は別構成の読書案内に留める。独立した証明節を設けるならProposition A.3の主張・全結論と図を追加する必要がある。

第1論文から使うのはTheorem 1.1だけであることを原典p. 2が明記している。同論文のHilbert tensor・トーラス降下をこの証明の追加入力にしない。p. 2に言及される別証明 *Conditional orbifold abelianity by inertia and quotient minimality* は固定公式057の収録3本には含まれていないため、収録論文として追加しない。

引用案は第1論文を `[OpenAI26a, Theorem 1.1, p. 2]`。他の外部入力は必要な結果に絞り、Ehresmann、微分形式に用いるDemailly等、射影性のGAGA、Stacksの指定tagなどを実際の使用箇所と照合する。Appendixの文献を本文主経路の直接入力へ機械的に加えない。

## 制作時の受領条件

全結論の説明先をconclusionCoverageで管理する。外部結果を原典で照合できなかった場合は、文献番号を埋めただけで確認済みにせずsources／本文／statusへ残す。60分終了時は不足した主張欄・図・英文も未完成として列挙する。図数を減らすために別の結論を落とさず、必要なら初稿未完成のまま本部へ渡す。

> 2026-10-11 第1段階完了。本文書は準備時の計画・指示履歴。実施結果はSTAGE1_REPORT.mdと各記事status.mdを参照。
