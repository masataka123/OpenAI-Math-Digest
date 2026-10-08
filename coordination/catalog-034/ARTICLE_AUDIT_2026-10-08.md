# カタログ034 14記事の修正一覧

14記事にはすでに「主要結果、引用付きの図、直後の番号付き説明、依存関係、確認範囲」がある。全面的に書き直す必要はない。まず明確な誤記を直し、長い記事の全体像と各証明節の対応、記事間の結果単位のリンクを整える。

以下は点検時の修正提案。承認後の実施内容と確認結果は末尾に記録した。点検基準は2026年10月8日の `main`、commit `e4cde91cb06387d8ab41d798db47b6fb2cb5fb13`。進行中の033の作業ファイルは対象外。

## 点検範囲

日本語14記事の本文と構成、英語14記事の主要結果・節構成・数式・出典対応、カタログ034の接続記録とリンク先を点検した。英語本文は主要な接続を中心に比較しており、全段落の逐語的な翻訳査読ではない。12記事のMarkdownでは日英のH2数・図数・参照定義の一致を確認した。

原典は、今回見つかった引用頁と分岐条件について固定版の該当箇所を再確認した。14論文の全証明や外部入力の全証明を独立に検証した結果ではない。既存記事に明示されている未確認事項を、それだけで誤りと判定しない。

ローカル画面ではLAの全体図とKähler abundanceの該当節を確認した。全49図の日英レイアウトを今回すべて再点検したという意味ではない。既存ビルドの35ページ・1,325内部リンク／アセットは検査を通過し、Markdown内の86件の図参照も実ファイルが存在した。

## 先に直す誤記

| 対象 | 現状と根拠 | 修正 |
|---|---|---|
| 01 Kähler abundance 日英 | §6導入の `\nu` が改行と `u` に崩れている。画面でも `0 < u(L) < n` と表示され、日本語には `u=0` もある。直後の図と本文は正しくνを用いている。 | 日本語2箇所・英語1箇所を `\nu` に戻す。日英の数式表示とPDFへの反映を確認する。 |
| 09 Log Iitaka 日本語 | §2の第3段階の見出しは「水平成分がなければ」。本文・図・英語版は「係数1の水平成分がなければ」。原典Proposition 4.5末尾・§4.3、pp.10–11も後者。 | 見出しを「係数1の水平成分がなければklt評価を使い、二つの整数を合わせる」にする。水平成分そのものが存在しないという条件に強めない。 |
| 13 Fourfold Iitaka 日英 | 依存関係欄のLA Theorem 1.1の頁が `p.1`。固定版LAではp.1は表題・目次、定理文はp.2。LA記事自身もp.2としている。 | 日英とも `p.2` に訂正する。 |

該当ファイルは [01 日本語](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/kahler-log-abundance/article.ja.md:227)、[01 英語](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/kahler-log-abundance/article.en.md:227)、[09 日本語](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/uniform-log-iitaka/article.ja.md:76)、[13 日本語](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/effective-log-iitaka-fourfolds/article.ja.md:138)、[13 英語](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/effective-log-iitaka-fourfolds/article.en.md:138)。

## 14記事の編集方針

番号は公式カタログ内の順序。「構成」は読みやすさのための提案であり、数学的な誤りの認定ではない。

| 番号 | 記事 | 優先する修正 | 規模 |
|---|---|---|---|
| 01 | Kähler abundance | νの誤記、主結果と補助結果の区別、境界生成に入る他論文の接続 | 誤記＋構成 |
| 02 | slc indices | Hodge rank → 指標 → conductor降下の読み順を示す | 構成 |
| 03 | Conditional Kähler fourfolds | 三つの仮定と各分岐の役割、長い解析的接続を整理 | 構成 |
| 04 | LA | 全体図と二つの核心の対応、結果ごとの供給先を明示 | 構成 |
| 05 | Minimal metrics | 独立な二定理を維持し、通常のH1へ戻る接続と利用先を案内 | 軽微 |
| 06 | Fourfold nonvanishing | 主証明からProp.5.1への往復、異なる外部入力の役割を整理 | 部分編集 |
| 07 | Supported lifting | 現構成を維持し、Thm.1.3とCor.1.4の異なる入力へ直リンク | 軽微 |
| 08 | Schnell | 現構成を維持し、LAへの参照と確認範囲の案内を更新 | 軽微 |
| 09 | Log Iitaka | 分岐条件の見出し訂正、主定理への道筋を先に見せる | 誤記＋構成 |
| 10 | Uniform Iitaka | 同時帰納法の各段階を主定理に対応させ、高指数排除を整理 | 構成 |
| 11 | Relative denominators | 三つの出力を名付け、Fourfold Iitakaの用途別に案内 | 軽微 |
| 12 | Stein degree | 二度のMMPの終了・継続先をリンクし、指数のnorm降下先を補う | 軽微 |
| 13 | Fourfold Iitaka | LAの参照頁を訂正し、四次元主定理と任意次元の道具を接続 | 誤記＋軽微 |
| 14 | Kähler after nonvanishing | 境界生成と持ち上げが主定理のどこへ戻るかを明示 | 部分編集 |

## 01 Kähler abundance

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/kahler-log-abundance/article.ja.md) と同じディレクトリの英語本文・図。

- **必須**：上記のνの誤記を訂正する。
- **構成**：§1に仮定・主定理・帰納命題・四つの道具が並ぶ。原典の番号と順序を保ち、「最終目標」「帰納命題」「以下の証明で使う道具」の役割が見える表示にする。既存の全体図は残し、そこから§3の境界、§4のファイブレーション、§5–6のsimpleの場合へ直接進めるようにする。
- **接続**：§3と依存関係欄をカタログ総括と照合する。CGM Lemmas 7.16–7.17 → 本稿Theorem 3.13、ANV Lemma 7.1 → 本稿Lemma 4.3の具体的な橋を短く補う。既存のANV §§10–12 → 本稿§7の持ち上げという別の接続も残す。
- **維持する区別**：Assumption 1.1付きの結論、有理型非消滅と正則非消滅、四次元の主定理と任意次元の補助結果。5図を3図へ減らす必要はない。

## 02 slc indices

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/uniform-slc-indices/article.ja.md)。

- **構成**：結果はTheorems 1.1、5.1、6.1の順でよい。冒頭に「5.1のHodge rank → 6.1の指標指数 → 1.1のconductor降下」という短い案内を置く。各矢印には追加の入力があるため、この三定理だけで全証明が閉じるようには描かない。
- **説明**：§2第4段階から§4の指標評価へ、§4第3段階から§3のHodge rankへ直接リンクする。各節の終わりで、得た指数がどの降下条件を満たすかを一文で回収する。
- **維持**：normal lc指数だけではslc降下できない点、成分数・閉路長を一様指数へ入れない点は現稿の長所。3図と番号付き説明は活かす。

## 03 Conditional Kähler fourfolds

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/conditional-kahler-fourfolds/article.ja.md)。

- **構成**：Assumptions 2.2–2.4の正確な記述は保ち、既存の全体図と「指定MMP → 非消滅 → 非消滅後の豊富性」の段階を対応させる。非消滅の内部では正の代数次元と代数次元0の行先を案内する。
- **説明**：§4第1段階のモデル準備と計量構成、第4段階の延長障害の消去を、入力と到達点が分かる段落に分ける。新たな計算を増やす必要はない。
- **接続**：01へ供給するLemmas 7.16–7.17を、主定理とは別の短い補助結果欄に置く。カタログの供給元リンクが現在の「確認範囲」節だけで終わらないようにする。
- **維持**：§5にはframeの有無の両方の説明がすでにある。図がframeなしの場合に限ることも明記されているので、「片方の証明が欠落」とは扱わない。

## 04 LA

対象は [記事データ](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/src/data/la.mjs) と [表示部品](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/src/components/LogAbundanceArticle.astro)。

- **構成**：現稿にも全体図、二つの詳細図、番号付き説明がある。これを「主定理までの全体図」「Theorem 3.1の境界の道具」「Theorems 9.1・9.6の非消滅」の関係が見える見出しと相互リンクにする。主要結果の9.6は帰納ステップ、11.1は帰納を閉じた結果という既存の区別を各証明節でも維持する。
- **説明**：非消滅の節では、反例から固定するデータ、同じ行列式の下界、上界、矛盾の順を明確にする。段落を分けて到達点を示し、全体図の非消滅ステップへ戻す。
- **接続**：Corollary 11.2の説明はすでにある。専用の共通アンカーを付け、Schnellからそこへ進めるようにする。説明を重複執筆する必要はない。
- **接続**：供給先の案内をSchnellだけに偏らせず、Thm.9.1の道具、Thm.11.1の良いモデル、Cor.11.2の標準因子の比較を分けて034の各利用記事へ案内する。033の劣加法性が入る箇所と、その代替入力の説明は保持する。
- **維持**：Theorem 3.1の結論κ=νを、そのままsemiamplenessと書き換えない。帰納法の実係数・有理係数、基礎体の範囲を短縮のために落とさない。

## 05 Minimal metrics

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/minimal-metrics-injectivity/article.ja.md)。

- **軽微**：Theorems 1.1、1.2、Corollary 4.1に対応する3図はそのままでよい。二つの主定理が独立であることもすでに明確。
- **説明**：§3第2–4段階で「変動する重みでの評価 → 固定Hilbert空間 → 元の通常のH1類が0」という到達点を各段落末に揃える。計量構成や局所計算の再執筆は不要。
- **接続**：Fourfold nonvanishingへの用途説明はすでに具体的。ここへ結果単位のリンクを付け、カタログからThm.1.2だけが単独で全入力を供給するように見えないようにする。

## 06 Fourfold nonvanishing

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/fourfold-nonvanishing/article.ja.md)。

- **説明**：§2第3段階のslice・対応の排除から§3のProposition 5.1へ直接リンクし、Prop.5.1で得た結論が二因子jetの構成へ戻ることを示す。主証明と道具の往復を明確にする。
- **接続**：MMの二定理が与える制限全射と、三次元semi-dlt abundanceが与える境界上の非零切断を分ける。LAのLemmas 7.1–7.5とThm.9.1も、豊富性の主定理から区別した現在の説明を保つ。
- **接続**：Supported liftingへ渡すCor.1.2と、条件付きThm.1.3へ渡すLemma 8.1の二用途に別々のリンクを置く。
- **原典再確認**：引用欄にはFujino Cor.4.10の原記述を取得できず保留とある。境界切断の段階に直接入るため、信頼性を高める追加調査では優先する。今回これを誤引用と判定したわけではない。

## 07 Supported lifting

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/lifting-adjoint-sections/article.ja.md)。

- **軽微**：主定理、非消滅後の豊富性、条件付き全次元の帰結と四次元の帰結がすでに分かれている。本文の大幅改訂は不要。
- **接続**：§4のThm.1.3とCor.1.4に日英共通の個別アンカーを付ける。Fourfold nonvanishingのLemma 8.1とCor.1.2から正しい枝へ進めるようにする。
- **接続**：Fourfold IitakaがThm.1.2を使う案内に、その記事の利用節へのリンクを添える。
- **原典再確認**：既存の保留であるSaito 1990 Thm.2.14／Prop.2.15のstatementとstrictnessへの適用は、追加調査の候補として別管理する。今回の書式統一で確認済みに変更しない。

## 08 Schnell

対象は [記事データ](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/src/data/schnell.mjs) と [表示部品](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/src/components/SchnellArticle.astro)。

- **維持**：三つの結果と三つの証明図の対応は明確。証明本文は今回の統一のために書き直さない。
- **接続**：LAの概説トップへのリンクをCor.11.2の説明へ変更する。原典への引用リンクも併記する。
- **表記**：「034の他の関係は未調査」「034の残りの依存関係は未検証」は、このSchnell記事の確認範囲とカタログ全体の調査範囲が混ざらない書き方へ整える。全体の接続は総括ページへ案内する。LA全証明の独立検証をしていないという制限は残す。
- **共通表示**：原稿ボタンを他記事同様のGitHub閲覧に揃える案。現在はraw PDFを開く。

## 09 Log Iitaka

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/uniform-log-iitaka/article.ja.md)。

- **必須**：§2の日本語見出しに「係数1の」を補う。図と英語本文の当該条件はすでに正しい。
- **構成**：現稿は曲線重み、klt指標、分母・有効系を説明してから、最後にThm.1.1へ戻る。冒頭に主定理までの経路を短く示し、既存の図4と各道具の図を対応させる。図4を先に見せる場合も、詳細図を重複させない。
- **接続**：一般ファイバーのnormal lc指数、Stein次数、moduli分母、底の有効系がそれぞれ何を固定するかを案内する。これらの内容はすでに本文にあるので、主に配置とリンクの修正。
- **維持**：主定理の有限有理係数とnormal lc指数の有理DCC係数、全飯高体と像の次元の違いを保つ。

## 10 Uniform Iitaka

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/uniform-pluricanonical-iitaka/article.ja.md)。

- **構成**：同時帰納法の全体図は適切。後続の「moduli分母」「高指数の排除」「normal lc指数」「飯高体」の各見出しに、対応する命題または帰納命題を添え、全体図のどの段階か分かるようにする。
- **説明**：§4の6段階を「scalar・Frobenius評価」「鎖の次数とdegree-one forgetting」「有理流による矛盾」のまとまりとして読みやすくする。個々の仮定と次数評価は保持する。
- **説明**：§5の図が詳しく扱う枝と、klt／底が点の場合の行先を短く案内する。省略枝をすべて同じ詳細度で展開する必要はない。
- **維持**：5図は必要な役割を持つ。Fourfold Iitakaからの入力は任意次元の鎖の道具であり、四次元主定理の一般次元への適用ではないという現在の区別を保つ。

## 11 Relative denominators

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/relative-denominators/article.ja.md)。

- **軽微**：結果カードの見出しが定理番号と頁中心なので、「正確な引き戻し表示と分母」「bigな底の完全線形系」「有理連結な底のtorsion」など役割名を添える。
- **構成**：Thm.1.1からProp.6.1とProp.7.1／Cor.7.2という異なる用途へ進むことを冒頭で示す。既存の3図と説明は保持する。
- **接続**：Fourfold Iitakaへの三つの再掲は記事にすでにある。Thm.1.1・Prop.6.1が最後の飯高系へ、Prop.7.1が中間ファイブレーションの指数制御へ入ることを、利用先の別々の節にリンクする。
- **原典再確認**：カタログの既存の辺は前二者を記録している。Prop.7.1の用途も辺として追加するなら、Fourfold Iitaka Lemma 4.6の適用と再照合する。総括は主要経路の選択なので、現状の省略を誤りとは扱わない。

## 12 Stein degree

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/arithmetic-stein-degree/article.ja.md)。

- **軽微**：二度のMMP、算術的軌道評価、垂直成分への随伴という4図は維持する。第1MMPで帰納により終了する枝、第2MMPへ進む枝、軌道評価と垂直成分の節へのリンクを付ける。
- **説明**：末尾の四つの上界をまとめる段階はすでにある。それぞれがどの図の出口かを対応させればよく、新たな再帰式の説明を重複させない。
- **接続**：現在の依存欄はLog Iitakaへの適用を具体的に示す一方、他のnorm降下は未調査としている。カタログとUniform Iitaka記事に記録されたnormal lc指数への入力を照合して追記し、その箇所だけ確認範囲を更新する。

## 13 Fourfold Iitaka

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/effective-log-iitaka-fourfolds/article.ja.md)。

- **必須**：依存欄のLA Theorem 1.1をp.2へ訂正する。英語版も同様。
- **軽微**：指数の構造帰着、高指数排除、有効飯高系という3図は維持する。§2第3段階から§3の最終的なcountabilityの矛盾へ案内を付ける。
- **接続**：任意次元の鎖・追跡の道具をUniform Iitakaが使う箇所へリンクする。この区別は現稿にすでにあるので、説明を増やすより結果単位の移動を整える。
- **接続**：RD Prop.7.1を使う指数の枝と、Thm.1.1／Prop.6.1を使う有効系の枝を、カタログでも区別する候補とする。

## 14 Kähler after nonvanishing

対象は [日本語本文](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-034/abundance-after-nonvanishing/article.ja.md)。

- **構成**：Theorems 1.1と1.2の記述は両方そろっている。§3の見出しにThm.6.1を添え、全体図で必要になった「境界全体の生成」を証明する節だと明示する。
- **説明**：§2第3段階のKähler性の確保、§4の有限次数の障害消去は、入力と得る結論を段落ごとに分ける。§3の境界生成と§4の持ち上げの結果を、§2第5段階へ戻すリンクを付ける。
- **接続**：Thm.1.1 → Conditional KählerのAssumption 2.4と、Lemma 7.1 → 01のLemma 4.3を区別して供給先として案内する。
- **維持**：主定理は非消滅を仮定する。任意次元のThm.1.2にはnefnessを追加しない。台の等号、境界全体、Thm.6.1の解消条件を落とさない。

## 共通表示と記事間リンク

共通CSSはすでに使われている。見た目の統一だけを目的に全記事を別の実装へ移す必要はない。

| 項目 | 現状 | 修正方法 |
|---|---|---|
| 目次 | Schnell・LAは短いラベル、他12篇は長いH2をそのまま表示 | 本文の見出しを保ったまま、目次用に短い名称を持てるようにする。 |
| 版表示 | LAは「初稿」、Schnellは「改訂稿」、他12篇は「概説」 | 表示規則を共通化する。原稿版、記事の編集日、原典確認日を混同せず、内容を確認せずに一括で「検証済み」としない。 |
| 論文の略称 | 同じ論文がFN／NV、SL／Lift、UI／Uなどで現れる | サイト共通の短名と記事内引用キーの対応を示す。原論文固有の略号や他の文献と衝突するキーを機械的に全置換しない。 |
| 記事への移動 | 引用キーの多くは原典PDFだけにリンク | 原典リンクを残し、必要な接続に「概説の該当結果」へのリンクを併記する。 |
| 結果アンカー | 12篇のH3は見出し由来で日英で異なる。証明節は順番による `proof-N` | 使用頻度の高い結果に日英共通IDを追加する。既存のH3・`proof-N`・旧アンカーは維持する。 |

カタログのリンク改善は [catalog-034-synthesis.mjs](/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/src/data/catalog-034-synthesis.mjs:21) の `connectionSections` を中心に行う。現在のリンクは解決するが、複数の入力を一つの広い節へ案内している箇所がある。

| 接続 | 現在の供給元 | 改善案 |
|---|---|---|
| LA Cor.11.2 → Schnell | LAの全体図 `induction` | 既存のCor.11.2の説明へ専用IDを付けて案内する。 |
| MM Thms.1.1–1.2 → Fourfold nonvanishing | MMのThm.1.2の証明 `proof-2` | 両定理を選べるリンク、または両者の用途をまとめた接続段落へ案内する。 |
| CGM Lems.7.16–7.17 → Kähler abundance | CGMの確認範囲 `sources` | 補助結果の役割を説明する短い欄を追加し、そこへ案内する。 |
| RD Thm.1.1／Prop.6.1 → Fourfold Iitaka | RDのProp.6.1の証明 `proof-2` | 分母の定理と有効系の命題をそれぞれ選べるようにする。 |

カタログの図を全面的に描き直す必要はない。結果の役割・辺の追加が変わる箇所だけ、文章、接続記録、図を一緒に更新する。

## 修正の進め方

1. 01・09・13の明確な誤記を日英で訂正する。
2. LAで「全体図と詳細節の対応」「結果単位の接続」を具体化し、長い記事にも使える統一仕様を確定する。
3. 01・02・03・09・10の構成、06・14の長い接続を編集する。残りは原則として現構成を保持し、見出し・リンク・参照を調整する。
4. 記事の結果IDが定まった後でカタログのリンクを更新する。追加する辺は原典の供給結果と受け側の適用箇所を再照合する。
5. 日英の式・条件・図・リンクを確認し、影響するPDFを再生成してから公開する。

統一する単位は「目標 → 引用付き図 → 番号付き説明 → 得られた結果と次の使用箇所」。章数・図数・文章量をSchnellと同じにすることは完了条件にしない。


## 承認後の改訂実施（2026-10-08）

- 誤記3件を日英の対象箇所で訂正。01のν（日本語2箇所・英語1箇所）、09の「係数1の」条件、13のLA Theorem 1.1のp.2。
- 14記事の案内を統一。12本のMarkdown記事は短い目次と証明節への道案内を追加し、LA・Schnellと同じ「主要結果 → 引用付き図 → 段階別説明 → 接続 → 原典・確認範囲」を保った。図数や元の定理文は削減していない。
- 日英共通の結果アンカー（theorem-1-1等）と証明段階アンカー（proof-1-step-1等）を追加。既存28記事の全旧アンカーを保った。09の訂正前見出しのアンカーも互換用に残した。
- LA：帰納法、Theorem 3.1、Theorems 9.1/9.6の見出しを対応づけ、詳細節と全体図への往復リンクを追加。行列式の構成・対角上の評価・二因子の上界を段落分け。Corollary 11.2に直接リンクでき、道具・良いモデル・標準因子比較の供給先を分けた。
- Schnell：LAリンクをCorollary 11.2へ変更。記事内の確認範囲と034全体の調査範囲を分離し、原稿ボタンをGitHub閲覧へ統一。
- 01/03/14：strata随伴・厳密比較とtorsion-freenessの別の接続を明記し、専用アンカーを追加。03/14の長い解析的接続を段落分け。
- 02/05/06/07：Hodge rankと指標、変動重みと通常のH1、制限全射と非零境界切断、全次元の条件付き帰結と四次元の帰結を対応する節・段階で行き来できるようにした。
- 09/10/11/12/13：主定理への経路・各道具の役割を明記。10は高指数排除を三段階にまとめて案内し、kltと点底の枝を追記。11は三つの結果の用途を名付けた。12は二度のMMPの行先とUniform Iitakaへのnorm入力を補った。13は任意次元の鎖の道具を四次元主定理と区別。
- カタログは選択済み23接続を維持し、18件の供給元・利用先リンクを該当する定理・補題説明・証明段階へ更新。図の数学的構成は変更していない。

### 今回の追加照合

固定版のConditional Kähler pp.58–60（Lemmas 7.16–7.17）、Kähler after nonvanishing pp.51–52（Lemma 7.1）、Uniform Iitaka pp.6–8（Proposition 3.2の分岐・Stein次数・norm）、Fourfold Iitaka pp.15–16（Lemma 4.6）、Relative denominators p.17（Proposition 7.1）を再読し、追記した接続・場合分けと照合した。全証明の独立検証ではない。

### 検証

- 16テスト、35ページのビルド、1,487内部リンク・アセット参照が成功。
- 日英全14記事を375px幅で表示し、ページ全体と図の横はみ出しなし、MathJaxエラーなしを確認。LAはPC表示、内部移動、日英切替を確認。03→01のstrata説明への実際の遷移も確認。
- PDFを再生成：日本語197ページ、英語216ページ、各15章・52図。PDFとHTMLの内容ハッシュ一致、章のしおり、内部リンクを検証。日本語pp.41,76–77,83,85、英語pp.92,94–95を画像で紙面確認。

### 継続する確認範囲

Fujino Corollary 4.10（06）とSaito 1990 Theorem 2.14 / Proposition 2.15（07）の既存の保留は維持。今回の形式整理を根拠に確認済みへ変更していない。RD Proposition 7.1→Fourfold Iitaka Lemma 4.6は記事本文の用途案内に追記したが、選択済み23接続の図への新しい辺の追加は行っていない。033のファイル・記事には変更を加えていない。
