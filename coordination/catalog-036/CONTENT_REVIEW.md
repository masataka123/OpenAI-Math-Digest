# カタログ036 — 内容点検と形式確認

2026-10-13。本部による受領点検。制作セット1.4と2026-10-11/12補足を適用。原典の固定版はinventory.json。以下は執筆者以外による主要主張・適用接続の対照であり、専門家査読や全証明の独立検証ではない。

## 担当と時間

| 公式順 | paper ID | 執筆者 | 初稿開始–終了（JST） | 原典との対照担当 |
|---|---|---|---|---|
| 01 | kahler-numerical-semiampleness | Kähler担当 | 20:03:30–20:17:06（13.6分） | 本部 |
| 02 | projective-numerical-semiampleness | 射影担当 | 20:03:40–20:25:20（21分40秒） | 本部 |
| 03 | generalized-lc-minimal-models | generalized担当 | 20:03–20:23（保守的に20分） | 本部 |
| 04 | minimal-models-numerical-dimension-one | 本部 | 20:03:59–20:13:49（9.8分） | Kähler担当 |

各60分以内で区切った。Kähler初稿後の句点・版表示整備、ND1初稿後のEの有理性追記は各status.mdに別記録。カタログ案内・本部点検・画面検査は初稿時間を埋める追加調査ではなく、第1段階の統合作業として実施した。全論文を単独点検済みと呼んでいない。

## 01 — Kähler数値的半豊富性

| 原典の主張・結論 | 原典位置 | 記事の説明先 | 点検結果 |
|---|---|---|---|
| Thm1.1：smooth connected compact Kähler、B有理SNCかつ0≤係数<1、K+B pseudo-effective、MとD=K+B+M nef。元のX上のsemiample有理lineと同じ実BC類 | p2、§7.4 p49 | theorem-1-1、proof-5 | 全仮定・数値結論一致。flat差を変更可能。D自身のsemiamplenessへ強めていない |
| Thm1.2：D nefを仮定せずmodification上でsemiample Pと有効有理R、Rが負部分全体。さらにa(T)=0ならc1(M)=0 | p3、§7.3 pp48–49 | theorem-1-2、proof-1、proof-2 | 二つの結論の同時帰納、射影入力、負部分の全体同定を対応させた |
| Prop5.1：低次元の代数次元0結論を仮定した消滅 | p18、§5 pp18–39 | proposition-5-1、proof-2 | 独立節の前に完全主張。BBY→単純モデル→有理型切断→二つの通常随伴と負部分単調性の用途を記載。中間全計算は保留 |
| Prop6.4：低次元Thm1.2と正則代数還元、一般smooth fibre上でMの実Chern類0 | pp44–45 | proposition-6-4、proof-3 | 全体上の可算個のflat代表を先に固定する順序、positive-dimensional semiample baseとの矛盾を原文と対照 |
| Prop4.1：正規compact Kähler ordinary effective rational klt対、正規射影底、正相対次元、K+D~Qf*H⇒有効klt境界でH~QKZ+DZ | p11、§4 pp11–17 | proposition-4-1、proof-4 | 数値等価でなく実際のQ-line同値。実偏極とintegral lattice、period rank、big moduli lineから境界の構成を対応 |

本部は原典pp2–3,6–8,11,18,44–49と記事の主要帰着を対照した。外部原記述の詳細照合は担当sources.json（OpenAI26b Prop8.1/Thm2.3、OpenAI26K Thm2.13/Prop3.8、OpenAI26O、MWWZ、HX）を受領。既存034記事が参照するKähler log abundanceは10月4日版、今回の入力は10月6日版。旧記事を同じ版として流用しない。

## 02 — 射影数値的半豊富性

| 原典の主張・結論 | 原典位置 | 記事の説明先 | 点検結果 |
|---|---|---|---|
| Thm1.1：任意の標数0代数閉体、ordinary projective klt rational pair、K+B pseudo-effective、M nef on X、D nef⇒同じX上のsemiample rational divisorと数値同値 | pp1–2、§8.6–8.7 pp35–36 | theorem-1-1、proof-1 | 元のDの線形系を結論にしない。Pic0の双有理降下とglobally-generated locusのconstructibilityを区別 |
| Cor1.2：K+B≡0なら任意のnef有理Mの数値的半豊富性 | p2 | corollary-1-2、proof-5 | T≡0から主定理の全仮定を確認。M自体のsemiamplenessを主張しない |
| Thm5.1：terminal Q-factorial、K~0、full nef dimensionのnef Cartier L⇒big | p13、§5–6 pp13–28 | theorem-5-1、proof-2 | 単なるK≡0でなくK~0が必要。小さいscalar jetsと大きい二変数jets、固定した複素データでThm6.1を適用 |
| Prop7.1：低次元PjとThm2.2/2.3、very general pointの各曲線で(T+aM)正⇒すべての正有理cでT+cM big | pp28–30 | proposition-7-1、proof-3 | ゼロ境界のindex-one cover＋crepant terminalization、境界摂動によるordinary abundanceの適用を対照 |
| Prop8.1：K+B pseudo-effective、M nef⇒高いsmooth modelのpositive partが有理かつ数値的semiample | p30、pp30–35 | proposition-8-1、proof-4 | 同時帰納のP/Zを混同せず、nef reduction、baseのordinary adjointとnef divisor、positive part比較へ接続 |

本部はpp1–8,13,20–21,27–36を主要対照範囲とした。BCHM10 Cor1.4.3 p10の原記述・canonical index-one coverへの適用を追加確認し、本文・文献案内・図へ補充。BDPP13、Fuj09bのキーを統一。担当が確認したLP18、BZ15、Amb03、HX11、CP15ほかの記述・適用はsources.jsonへ記録。Thm6.1のFrobenius全計算は未検証として残す。

## 03 — generalized lcモデル

| 原典の主張・結論 | 原典位置 | 記事の説明先 | 点検結果 |
|---|---|---|---|
| Thm1.1：fixed rational nef b-data、generalized lc、標数0代数閉体 | p2 | theorem-1-1、proof-overview | ordinary対と区別。X/YのQ-factorial性は要求しない |
| 非抽出、全log discrepancy非減少、X上の縮約素因子でstrict | §3.3 pp14–16 | proof-overview-step-3 | 同じnef dataが差で相殺。strictnessを元のX上の素因子に対応させた |
| pseudo-effectiveならnef終点、それ以外はconnected fibre/次元減少/ρ1/relative antiample | p2、§3.3 pp14–16 | proof-overview-step-2/3 | ρ1は非factorialの場合の追加検討を説明。auxiliary semiample adjointを元のDへ転用しない |
| 任意の標数0代数閉体へ | Prop3.4 pp16–17 | proof-overview-step-4 | finite MMP、divisorial sheaf、finite generation、relative Projの降下を記載 |
| Prop3.2：Thm3.1を仮定しsmooth canonical scalingが停止、rational nef＋effective分解 | pp8–13 | proposition-3-2、proof-1 | idealをDCCでなく固定有限次元section spaceで安定化。countability→uniform index→有限個のmのvanishing→negative curve矛盾 |
| Cor1.2：M=0のordinary lc対の同じモデル結論 | p2 | corollary-1-2、proof-2 | LAからのsemiamplenessは追加帰結だけ。逆向きの利用もLA Cor12.1(i)に限定 |

本部はp2と§3 pp8–17を対照した。Thm3.1の局所内容は全rational semi-invariantに同一ellが働くことを記載。局所§§4–13全証明は未検証。TX24/DEL00/Fuj09a/BDPP13/BCHM10の記述・適用を担当sources.jsonで受領。BCHM/DELの依存表リンクを実際のproof-1-step-1へ修正した。

## 04 — 数値次元1

別担当の原典対照結果はREVIEW_ND1_BY_KAHLER.md。Thm1.1 p2、Prop2.1 p4、Lem2.2–2.3 pp4–7、Lem3.1 pp8–10、Lem3.2–3.3とProp3.4 pp10–13、§4 pp13–14を比較し、有限canonical prefix・余次元2固定・固定twist増大・負曲線を通る別の曲面・例外因子strictness・同じ終点のgood model性を点検した。主要不一致なし。レビュー指摘によりEが有理因子であることを日英で明記した。

## 全記事の日英と引用・形式

- 主結果、仮定、結論、節順、図数、引用順、proofTargets、statements、conclusionCoverage、readingListが対応。共通registryから本文とTeXを生成。
- 本稿内の引用は無略号、外部は著者由来キー。OpenAI26a/b/c/dを036の公式順に固定。略号の定義は図前、未照合の教科書入力には捏造したページを付けない。
- 独立して証明を説明する主張の前置きを全15節で点検。既出主結果は同じ主張欄へ参照し、独立中間命題には図前に主張欄を設置。
- 総括図は1設計（日英）。generalized→projective→Kählerの実入力を示し、ordinary abundanceの合流を矢印に明記。ND1を直接入力の矢印に混ぜない。結果単位9件をconnections.jsonに記録。未掲載の関係は未調査。

## 表示・機械検査と見本比較

証拠はvalidation/。第1段階の隔離HTMLを共通renderDraft・catalog-inventory・既存CSS・MathJaxで生成し、共有ソースやサイト登録は変更しなかった。HTMLの外枠は既存ページを借りた確認専用で、036の公開ルートや言語切替の統合動作を確認したものではない。

- citation checkのtext-only/036限定：5 registry・20生成テキストの一致。図manifest100項目、4原典PDFハッシュ一致。本文内アンカー、結論anchor、相互draftリンク、日英marker順が一致（stage1-checks.json）。公開コピー検査は未組込みなので第2段階。
- 4記事＋案内の日英、1280px/375px計20画面：document幅超過0、MathJax merror0、pageerror0（visual-checks.json）。長い数式と表には既存の局所横スクロールを使う。案内の長いcommit表記による21px超過を版表記整理で解消した。固定commitは原典URLと台帳へ保持。
- 034の実画面と036共通4列表を比較。公式順・正式タイトル・版・頁数・原典リンク・主張・役割・記事導線と基本文字サイズを確認。catalog.cssも既存のまま読み込む。
- Schnellのargument（日本語375px/英語PCを含む）と、036の定理カード→引用→図→説明を比較。本文16px/引用14pxの共通形式。数値検査だけで形式統一としない。
- 033 Orbifold Iitakaの図前文献案内と036（射影英語ほか）を画像比較。キー・著者・正式名・用途・版・原典URLの同じ表示を確認。旧記事の不足を移植しない。051は不使用。
- 全図は担当が日英TeX/SVGからのPNGで目視。本部は全体図・各記事代表図・ND1全4図も確認。Kähler主図の最初の要素スクリーンショットは下端が画面範囲で欠けて見えたため、縦長viewportの追加画像で完全表示を確認（kahler-…figure-1-expanded-viewport.png）。SVG自体の欠けではない。

Stage1で完了する範囲は内容編集と引渡し。サイト本体の全テスト、実ルートのリンク・図拡大・言語切替、日英PDFと公開先は第2・第3段階で確認する。
