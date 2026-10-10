# 042 記事構成案（制作セット1.3、準備時点の記録）

原典：OpenAI, *Every complex K3 surface is Oka*, September 23, 2026、56ページ。固定版・URL・SHA-256は [inventory.json](inventory.json)。以下の本稿ページは誌面番号とPDF位置が一致する。引用生成用の個別ページ対応は制作時にsources.jsonへ登録する。

本書は準備時の構成・対応案として保持する。制作後の採用内容・照合結果はCONTENT_REVIEW.md、記事のcitations.json／status.mdを参照。本書自体は日英記事ではない。著者の主張と、準備で読んだ範囲は [PREPARATION_NOTES.md](PREPARATION_NOTES.md) で分ける。

## 1. 冒頭の主要結果（原典順）

| 掲載する結果 | 保持する仮定・量化・結論 | 主張／証明の原典箇所 |
|---|---|---|
| Theorem 1.1 | 任意の複素K3曲面X、任意の滑らかなHermitian距離。任意のm≥1、非空コンパクト凸集合K⊂C^m、その任意の開近傍U、正則f:U→X、ε>0に対し、正則F:C^m→Xでsup_K d_X(F,f)<ε。射影性・Picard数・楕円束の存在を仮定しない | p.2／§9 p.52、入力§§2–8 |
| Corollary 1.2 | 任意のK3曲面S、x∈S、0≠v∈T_xSに対し、f:C→Sが正則immersion、f(0)=x、f′(0)=v、通常位相で像が稠密。Sが射影的ならZariski稠密。接線の直線だけでなくベクトル自体を指定 | p.2／§10.1 p.53 |
| Corollary 10.2 | EnriquesはすべてOka。連結・極小・コンパクト複素曲面でκ=0ならOka。連結・極小のclass VIIではOka ⇔ HopfまたはEnoki | p.54（主張と証明） |
| Corollary 10.3 | 射影的な複素K3曲面とすべての複素Enriques曲面はGromovの意味でelliptic（大域的dominating holomorphic sprayを持つ）。非射影的K3の大域sprayは主張しない | p.54（主張と証明） |

Corollary 10.1はCorollary 1.2の入力として必要な近似・jet補間・immersionの内容を記す。独立した証明節に昇格させる場合には、R、Runge K、閉離散A、個別のjet次数、hの連続性とK∪A近傍の正則性、homotopy、非零一次jet条件、有限・空のAも許すことを含む主張欄を追加する（p.53）。p.54の無番号のstrong dominabilityは補足候補であり、採用するなら番号を創作せず、jet補間からの短い説明を対応させる。

## 2. 図より前の文献案内

Orbifold Iitakaを参考に、`reference-guide`から次を生成する。本稿内の結果番号は無略号。外部は表示名・定義済み略号・著者・使う内容・参照版・リンクを必須とする。

- **主定理への直接入力候補**：Chen–Gounelasのgenus-one曲線族、Grauertの基底変換、K3のperiod／Torelli／格子／pencilの入力、Ratner・Borel・Borel–Harish-Chandra、局所Stein・解析的貼合せの入力。適用箇所の一覧は準備メモへ。
- **帰結への入力**：CAPによるOka判定、jet補間とOka-1、EnriquesのK3被覆、Surface flexibility、Global Spherical Shells（060）、Projective Oka ellipticity。
- **背景・比較**：Xie–Zhaoの稠密なOka周期、既知のdominability・Kobayashi擬距離消滅。引用されているだけで主定理へ直接矢印を引かない。Oka locusの稠密性だけから任意のK3を結論しない。

確認済み外部記録2件以外は、版・番号・ページを追加照合してから生成用引用記録を確定する。

## 3. 証明節の構成案

暫定6単位。図数を先に固定せず、説明する接続と可読性から決める。以下のアンカーは予定名であり、サイト本部が生成HTMLの実在を確認するまで公開リンクとして使わない。

| 順 | 証明対象・予定アンカー | 図と直後の文章で示す内容 |
|---|---|---|
| 1 | Theorem 1.1 — 主定理の証明概略／`proof-overview` | 有理方向0・1・2の場合をすべて全体図に載せ、各々から全点でのLへ到達し、Theorem 3.1でCAPへ合流。Proposition 5.1、Proposition 7.1、Theorem 8.1、Lemma 9.1の具体的な供給内容、Torelliによる移送を文章で説明する。詳細解析節に入る前に全体を示す |
| 2 | Theorem 3.1 — Lから任意次元のCAP／`proof-1` | Definition 2.1のLとTheorem 3.1の仮定・結論（p.12）を図前に明記。二つのcomplete directions→L、パラメータ付き平面拡張→polydisc近似→実凸面の除去→任意凸集合。単なるpolydisc近似で終わらせず、実面上のHölder誤差から貼合せる役割を説明 |
| 3 | Theorem 6.1 — 環状鎖のexact symplectic sewing／`proof-2` | 主張pp.31–32を図前に置く。円筒、非消滅2形式、L_j≥1、共通幅、近似shearと導関数一様上界、exactness、小誤差を仮定。鎖の長さ・本数に依存しない正の横幅のstrip immersionと局所近似を結論として保持。零Fourier成分除去→一様分解→二次収束→全鎖を貼合せ。Lemma 6.4のrecentringが幾何構成で仮定を作る |
| 4 | Corollary 1.2 — 稠密なentire immersion／`proof-3` | Oka→Corollary 10.1→閉離散点で稠密列と非零一次jetを同時補間。指定点・指定ベクトル・immersion・通常稠密・射影的ならZariski稠密を個別に説明 |
| 5 | Corollary 10.2 — 曲面分類／`proof-4` | κ=0の全種類とclass VIIのb₂=0／b₂>0を区別。K3被覆からEnriquesへの降下、既知のκ=0例、060による正b₂の網羅性、Surface flexibilityによる正例・負例を図に表示。逆向きの排除も文章で説明 |
| 6 | Corollary 10.3 — 大域的spray／`proof-5` | K3では射影性が仮定、Enriquesでは射影性の外部結果を確認。Oka＋projective→外部Theorem 1.1→elliptic。非射影的K3へ拡張しない |

Proposition 5.1・7.1・Theorem 8.1はまず全体節の供給結果として扱い、具体的な構成と主定理への接続を説明する。内容量により独立節へ分ける場合は、それぞれ原典p.28、p.37、p.44の**仮定・全結論・番号・ページ**を図前に掲載する。番号だけのproof-targetで代用しない。分割により初稿時間を延長しない。

### K3主定理の全分岐と接続

Pをmarked periodの向き付けられた正定値実2平面、r=dim_Q(P∩Λ_Q)とする。

| 場合 | 供給結果と仮定 | 原典の経路 | 説明予定先 |
|---|---|---|---|
| r=0 | Proposition 7.1：全period domain Dの非空開集合でLが全点成立。Lemma 9.1(1)：有理方向なしの軌道はDに稠密 | §§6–7 pp.31–44で開集合を構成→§9 pp.51–52で軌道が交わる→re-markingとTorelliでXへLを移す | `proof-overview-step-1` |
| r=1 | primitive positive integral vを固定。Theorem 8.1：D_v内の相対非空開集合O_vでLが全点成立。Lemma 9.1(2)：vの固定群の軌道がD_vに稠密 | §8 pp.44–50のisotrivial中心、[Im σ]=v、safe action、二つのcycle、(σ,e)≠0→§9 p.52でTorelli移送 | `proof-overview-step-2` |
| r=2 | Pが有理平面。その直交補のsignatureは(1,19) | 正の有理ベクトルを整数倍して正の整(1,1)類→射影性判定→Proposition 5.1 pp.28–31→L | `proof-overview-step-3` |
| 全場合の合流 | 全点L、コンパクトK3上の距離の完備性 | Theorem 3.1 pp.12–28→任意m・任意KでCAP。コンパクト標的上の距離の一様同値性もp.52で確認 | `proof-overview-step-4`、`proof-1` |

§5では異なるample次数を持つgenus-one曲線族を取り、その正規化上のcomplete flowsを使う。異なる次数から一般点で二つの方向が異なることを示し、例外集合をCorollary 2.10で越える。§7では二つのquadricの退化から有限raw atlasを準備し、sewingと被覆の評価を非偏極の局所変形へ持ち上げる。§8では固定vの作用量がrecentring後の中心を特異ファイバーから遠ざけ、二つのcycleが同じ葉ならclass meの正則曲線となって(σ,e)≠0に矛盾する。これらは単に中間定理名を列挙する代わりに全体節の図直後で説明する。

### Corollary 10.2の各場合

共通の分類対象は連結・極小・コンパクト複素曲面。すべてのコンパクト曲面の分類と表現しない。

| 条件・場合 | 著者が主張する結論 | 証明の入力・使用箇所 | 説明予定先 |
|---|---|---|---|
| κ=0：K3 | Oka | Theorem 1.1＋CAP判定、p.54 | `proof-4-step-1` |
| κ=0：Enriques（nodalも含む） | Oka | 不分岐K3二重被覆[18]、Theorem 1.1、被覆によるOka降下[16]、p.54 | `proof-4-step-1` |
| κ=0：complex tori、bielliptic、Kodaira surfaces | すべてOka | [16] Introductionの既知分類・Oka例、p.54 | `proof-4-step-2` |
| class VII、b₂=0：Hopf | Oka | [16] Theorem 4、p.54 | `proof-4-step-3` |
| class VII、b₂=0：Inoue | Okaでない | [16] Theorem 4：not strongly Liouville⇒not Oka、p.54 | `proof-4-step-3` |
| class VII、b₂>0：Enoki | Oka | 060 Theorem 1.1によるKatoへの網羅的帰着＋[16] Theorem 4、p.54 | `proof-4-step-4` |
| class VII、b₂>0：Inoue–Hirzebruch、intermediate | Okaでない | 同じKatoへの帰着＋[16] Theorem 4の負の結論、p.54 | `proof-4-step-4` |
| class VIIの必要十分条件 | Oka ⇔ HopfまたはEnoki | 正例と負例、b₂による場合分けの網羅性を合成。060は帰結用入力 | `proof-4-step-5` |

任意のblowupおよびproperly elliptic surfacesはこの分類主張の範囲外（原典p.54）。060の主定理の証明を検証したとは記さない。

## 4. articleGuides・全結論対応の実装計画

- `mainResults`：Theorem 1.1、Corollary 1.2、Corollary 10.2、Corollary 10.3を上の順で登録。
- `proofTargets`：実際に採用した全体節・中間定理・系の証明節を表示順で登録。
- `statements`：主要結果は冒頭のtheorem/corollaryアンカー、中間のTheorem 3.1・6.1は独立statementブロックへ対応。追加の独立証明節を作れば同時に追加。
- `conclusionCoverage`：K3の全3分岐と任意次元CAP、Corollary 1.2の指定値・指定接ベクトル・immersion・通常稠密・Zariski稠密、上記分類の全場合とiff、Corollary 10.3のK3・Enriquesそれぞれのsprayを説明段階へ対応。単に結果番号をリンクするだけで完了にしない。
- `readingList`：Theorem 1.1 p.2／§9 pp.51–52（全体）、Definition 2.1・Proposition 2.2 pp.5–9（L）、Theorem 3.1 p.12・§4.4 pp.26–28（CAP）、Proposition 5.1 pp.28–31（射影例）、Theorem 6.1 pp.31–36（一様幅）、Proposition 7.1 pp.37–44／Theorem 8.1 pp.44–50（周期領域）、§10 pp.53–54（帰結）を読む目的付きで生成。

## 5. 記事末尾とカタログ案内

記事末尾は「どの論文がどの段階を担うか」と「原典を読む入口と確認範囲」。直接入力・帰結用入力・背景・比較を区別する。外部結果の記述照合と外部証明の独立検証を別欄にする。

カタログは日英とも短い入口、冒頭の当該言語PDFリンク、公式順共通表1行、必要なら060等への短い接続案内、原典・確認範囲。主定理全文・記事図を重複させない。日英PDFは案内＋記事の2章でサイト本部が生成する。

## 6. 初稿の優先順位と保留の扱い

60分枠では、全体の経路と分類の全結論、直接入力の仮定照合、日英・引用・図の対応を優先する。§§3–4の全評価、§§7–8の幾何構成の全細部、格子・力学・全外部文献の証明までは再帰的に検証しない。未確認の重要接続は本文・sources・statusに明記する。図や日英対応が未完成なら初稿を未完成として引き渡し、追加編集を別に記録する。
