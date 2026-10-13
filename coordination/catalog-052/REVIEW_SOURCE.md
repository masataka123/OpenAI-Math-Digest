# カタログ052：原典・記事の内容照合

- 照合担当：`source_review`（両記事の執筆者とは別のサブエージェント）。
- 日付：2026-10-13 JST。
- 公式固定版：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。両論文とも September 23, 2026 版。
- 性質：主要な主張、証明概略に必要な本文、入力結果と適用の照合。専門家査読、形式検証、全証明の正しさの認定ではない。
- 本記録の前半は原典の先行点検。記事受領後の比較結果は末尾へ追記する。

## Universal-cover splitting：原典の主張と接続

原典：`source/universal-cover-splitting.pdf`（33ページ、誌面番号とPDF位置は一致）。本文 §§2–7（pp.5–19）を読み、以下を照合した。

| 結果 | 仮定・全結論 | 証明との対応 |
|---|---|---|
| Theorem 1.1, p.3 | コンパクト連結 Kähler 多様体、次元2以上、指定された正則分裂の両正階数部分束が可積分。通常の普遍被覆は連結単連結複素多様体の積となり、微分が指定された引戻し部分束を対応する因子の接束に一致させる。因子次元は各階数。 | §§2–6、特に pp.16–17。各固有位相の葉の普遍被覆を因子に採用する。双方向の芽の解析接続、基点を合わせた被覆への持上げ、恒等定理により互いに逆の双正則写像を得る。接束の包含は恒等定理で大域化し、同次元性から等号となる。 |
| Corollary 1.2, p.3 | 滑らかな連結非単線織射影複素多様体の指定正階数2分裂。両可積分性とTheorem 1.1と同じcompatible universal-cover product。 | Höring Theorem 1.3が可積分性を供給し、射影性からcompact KählerとしてTheorem 1.1を適用。 |
| Corollary 1.3, p.4 | 滑らかな連結射影複素多様体、次元2以上、nef and bigな標準束、指定正階数2分裂。両可積分性とcompatible ordinary universal-cover product。 | Proposition 7.1でcrepant canonical contraction、Lemma 7.2で近似計量、Proposition 7.3で正則canonical locus上の平行性、全空間上のFrobenius obstruction消滅、最後にTheorem 1.1（p.19）。 |

### 証明概略で省略できない接続

1. **局所積の前提**：Lemma 2.1（p.5）の同時積座標は両部分束の可積分性と相補性から得る。単なる正則直和からは得ない。
2. **meromorphicからholomorphicへ**：Proposition 3.1（pp.6–8）はIvashkovichのmeromorphic延長に加えて、相補的接方向を用いてグラフの正次元ファイバーを排除し、有限ファイバーが一点であることと局所有界除去を示す。外部定理だけが正則延長を与えると書かない。
3. **境界延長のKähler性**：Proposition 4.2（pp.9–11）は指定射影の有界性、閉Kähler形式へのStokes、縮小ディスクの面積上界、小面積annulus、Hartogs shellを連結する。固定Kähler計量で部分束の直交性や平行性は仮定しない。Lemma 4.1自体には形式の閉性は不要。
4. **全領域のパラメータ依存性**：Proposition 5.1（p.12）のdisk axesからProposition 5.3（p.13）のpolydisk axesへ進む際、点ごとの箱だけでは不十分。有限格子で正則パラメータ依存と接方向を得る。辺の全polydisk表現を保つことがProposition 6.1（pp.14–15）の有限格子を可能にする。
5. **大域化**：Proposition 6.1には「指定2軸」と「任意経路を対角線とする箱」の両結論がある。前者のみでは逆写像の解析接続が尽くされない。Proposition 6.3（pp.16–17）が双方向の逆の芽を接続し、主定理の証明がmonodromyと被覆持上げを使う。
6. **§7**：直交射影は指定相補分裂に沿う射影と別物。第一Chern類の和と階数和による相殺から式(7.1)の第二基本形式の積分がO(ε)となる。正則canonical locus上の平滑収束で平行性を得るが、この計量の全空間への平滑延長を主張しない。torsion-free性→可積分性→正則Frobenius obstructionの稠密開集合からの消滅を区別する。

### 外部原典との照合

- S. Ivashkovich, *Extra extension properties of equidimensional holomorphic mappings: results and open questions*, [arXiv:0810.4588v2](https://arxiv.org/pdf/0810.4588v2), Theorem 2.2, p.3。Stein多様体内のdomainからcompact Kähler多様体へのmeromorphic mapは正則包までmeromorphic延長する。UniversalのHartogs figureはC²内domainで、正則包は本文で示すbidisk。等次元性・局所双正則性・有理曲線不存在はこの定理の仮定ではない。外部定理の証明は未検証。参照版はarXiv v2（2008-11-11）とし、PDF表紙のNovember 7, 2018との表記差を版の推測で埋めない。
- J. Song, *Riemannian geometry of Kähler–Einstein currents*, [arXiv:1404.0445v1](https://arxiv.org/pdf/1404.0445v1), Equation (4.28), Lemma 4.1, pp.27–28。滑らかなcrepant resolution上の近似計量と非例外部でのC∞収束を供給し、Universal Lemma 7.2のε=e⁻ᵗに対応する。Theorem 1.2（p.5）の完備化の同相は付録の別経路用であり、本文のCorollary 1.3の可積分性→Theorem 1.1には不要。Songの計量構成・完備化の証明は未検証。
- A. Höring, *Uniruled varieties with split tangent bundle*, [arXiv:math/0505327v3](https://arxiv.org/pdf/math/0505327v3), Theorem 1.3（p.1）とその証明（p.5）。非単線織射影多様体の接束の2分裂から両可積分性を得る。Universal Corollary 1.2との仮定・結論を照合した。Höringの証明で引用するCampana–PeternellとDemaillyの証明を再帰的に検証していない。

### 付録の位置付け

Appendices A–DはCorollary 1.3の別の大域継続経路。本文の主証明へ組み込む必須入力として扱わない。導入の説明、Appendix A冒頭、Proposition A.1の計量直交化を読んだ。A–D全体の安定写像・特異集合近傍・非拡大性・有限格子の証明は今回の点検範囲外。

## Integrability：原典の主張と接続

原典：`source/split-tangent-integrability.pdf`（16ページ、誌面番号とPDF位置は一致）。本文 §§1–5（pp.1–13）、Appendix Aの点吹上げの役割、Appendix Bの二点評価の論証を読んだ。

| 結果 | 仮定・全結論 | 証明との対応 |
|---|---|---|
| Theorem 1.1, p.1 | 滑らかな連結射影複素多様体、次元2以上、一般の2点がP¹像に載る、指定正階数2分裂。両部分束が可積分。追加の階数・正値性仮定なし。 | Proposition 2.1のtangent box、Proposition 3.1の束同型、Lemma 4.1の二点評価を§4（p.11）で合成して両bracket tensorsを消す。 |
| Corollary 1.2, p.2 | Theorem 1.1と同じ仮定。X自身が滑らかな射影多様体X₁,X₂のcompatible productとなる。 | HöringのTheorem 1.4（arXiv版）へ少なくとも一方の可積分性を渡す。因子は積の閉じたsliceとして射影性を得る。 |
| Corollary 5.1, pp.12–13 | 単線織連結compact Kähler X、正則分裂V₁⊕V₂、rationally connected quotientの一般ファイバーZとWᵢ=T_Z∩Vᵢ\|Z。各iのalmost-holomorphic fibration、RC一般ファイバー、T_Fᵢ=Wᵢ\|Fᵢ⊂Vᵢ\|Fᵢ。Wᵢ=0ではidentityを選べる。rank V₁=2ではrank W₁=2/1/0による(i) analytic fiber bundle, (ii) equidimensional holomorphic map with rational-curve general fiber, (iii) T_Z⊂V₂\|Zの排他的全3択。 | Zの滑らかさ・射影性、Höring Proposition 3.16によるTZの保存、Theorem 1.1またはrank0の自明例、Höring08 Theorems 1.3/1.4。 |

### 証明概略で省略できない接続

1. Proposition 2.1（p.3）のtangent boxは任意の滑らかな射影Xの正則分裂で構成され、ここでは可積分性を仮定しない。写像には臨界点があり得るので局所座標や局所積分解と呼ばない。
2. Lemma 2.2は解析的formal neighborhoodの係数漸化式。Lemma 2.3は正の対角normal bundleによるsection countで座標比を有理化し、共通のnormal factorを消去して対角の一部で正則化する。形式解の収束を最初から仮定しない。G3定理は背景であって直接入力ではない。
3. Lemma 2.5ではsource surfaceの解消上、2つの接方向のwedge恒等式から例外曲線上でP₁dF′=P₂dF′=0。連結ファイバー上一定として降下・除去する。
4. Proposition 3.1（p.10）のprojected-bracket partial connectionは相補方向について定義する段階で可積分性を不要とする。引戻し後の各P¹ファイバー上で曲率が2形式であることからflat、P¹の単連結性で経路独立。同型は対角上identityに正規化される。
5. §4（p.11）では片方のfactor curve上で入力束がg*Eᵢ、出力束がtrivialとなる。aで消えるglobal sectionsのbracket像は定数なのでbでも0。二点評価によりbで入力全体を張り、open setから正則性でX全体へ広げる。単にrational curveの存在だけをvanishingの理由にしない。
6. §5はambient X自体の可積分性やproductを結論しない。一般RCファイバーのWᵢにTheorem 1.1を適用し、外部構造定理の前提を供給する。

## 2論文の関係とカタログの表示

- UniversalのIntroduction p.3はcompanion IntegrabilityのTheorem 1.1を引用して、可積分性を強制する幾何学とその後の大域継続を区別している。Universal §§2–7の読解範囲ではcompanionを証明入力として使っていない。
- Integrability本文はUniversalを引用せず、Corollary 1.2のproductはHöring Theorem 1.4を直接使う。両原典が一方向に順次依存する図は不適切。
- Integrability Theorem 1.1の結論をUniversal Theorem 1.1の前提に渡すこと自体は仮定照合上可能。ただしこれは編集側が合成できる経路であり、収録原稿に記されたCorollary 1.2の証明依存ではない。しかもUniversalだけが直接与える結論は普通普遍被覆上の積であり、X本体の積と同一視しない。
- 明示した範囲で収録2論文間の直接証明依存を確認しなかった、と記録する。全参考文献・付録間の関係を網羅的に不在認定するものではない。
- 正則分裂→可積分性→局所積→普遍被覆上の大域積を、成立する仮定と供給する結果ごとに区別する。計量の平行性はnef-and-bigの§7に固有の追加内容。有限被覆の積はUniversal Theorem 1.1の結論にない。

## 原典先行点検時の残事項

- 記事受領後に日英の全主結論・証明対象・図直後の説明・文献案内との対応を追加点検する。
- Höring08公刊版の外部入力は先行点検時に取得待ちだった。下記追記により記述・適用照合を完了した。
- Kollár–Mori Theorem 3.3の外部原典による照合状況は本部の出典記録で確認する。Universal Proposition 7.1本文での代入D=KX、a>1を照合したが、本点検担当は書籍の定理本文を未読。
- 付録A–Dの別証明と、外部入力定理の証明全体は未検証。

## 記事受領後の比較

### Universalの日英本文：初回照合

`drafts/catalog-052/universal-cover-splitting/article.ja.md` / `article.en.md` と同フォルダの `citations.json` を原典と照合した。

| 主結果の結論 | 記事の説明先 | 照合結果 |
|---|---|---|
| Theorem 1.1：連結単連結因子、双正則写像 | `proof-1-step-5` | 葉の固有位相、monodromy、基点を合わせた被覆持上げ、互いに逆の合成を日英に記載。 |
| 同：指定部分束への適合、因子次元 | `proof-1-step-5` | 誤った因子成分の消滅と可逆微分・同次元による等号を日英に記載。 |
| Corollary 1.2：可積分性と普遍被覆積 | `proof-2-step-1`, `proof-2-step-2` | Höringの可積分性入力とcompact Kähler条件からの主定理適用を区分。 |
| Corollary 1.3：全Xでの可積分性と普遍被覆積 | `proof-3-step-2`, `proof-3-step-3` | 第二基本形式の消滅→正則canonical locus上で平行→torsion-free→Frobenius障害の大域消滅→主定理。 |

3主結果それぞれを証明対象とし、中間命題の独立した証明節は設けない構成である。各節は既出の主張へ参照し、TeX図の直後に段階説明を置く設計で、同じ命題の重複掲示は不要。日英の主張・仮定・数式・5/2/3段階の論証・未確認事項に差異を見つけなかった。

初回点検で本部へ返した修正事項：

1. 同じHöring07文献のキーが2記事間で `Hör07` / `Hor07` と不一致。`Hor07` への統一を依頼。
2. Universalの入力表のIva/Höring/Songを手書きの結果番号から管理引用マーカーへ置換し、ページとリンクを共通記録から生成するよう依頼。
3. Proposition 7.1の代入に整数 `a>1` を明記するよう依頼。

数学的な不整合はこの本文照合範囲では見つけなかった。図の最終生成物と編集反映は後続確認対象。

#### Universalの修正反映・6図の確認

上記3点について、`Hor07`への統一、入力表の管理引用化、日英の整数`a>1`追加を生成済み記事で再確認した。修正要求は解消済み。

本部が共通レンダラーで生成した以下の6画像を目視した：`screenshots/universal-cover-splitting.{ja,en}.html.figure-{1,2,3}.png`。対応する `main.tikz`, `non-uniruled.tikz`, `nef-big.tikz` と原典本文も比較した。

- 主定理図の2種類の長方形、双方向接続、ordinary universal cover、指定接束への適合・因子次元が本文と一致。
- 非単線織図はHor07の可積分性と主定理のglobal productを別矢印にする。
- nef-and-big図はX°での平行性、全Xの正則Frobenius障害の消滅、主定理による積化を分ける。式(7.1)のε係数と(n−1)!、次元指数を原典と照合した。
- 日英とも箱・数式・矢印・使用内容・引用の重なりや欠けは見つからない。日本語の図に日本語の役割説明があり、引用は外部著者キーと自論文無キーで区別される。
- これは確認用図画像の目視であり、公開サイト、スマートフォンでの操作、冊子PDFの検査は第2段階の別工程。

### Integrabilityの日英本文：初回照合

`drafts/catalog-052/split-tangent-integrability/article.ja.md` / `article.en.md` と同フォルダの `citations.json` を原典と比較した。

| 主結果の結論 | 記事の説明先 | 照合結果 |
|---|---|---|
| Theorem 1.1：両指定部分束の可積分性 | `proof-overview-step-3` | aで消える切断→trivial targetの定数性→bでbracketが0→二点評価のspanning→開集合から全Xへ、を日英に記載。 |
| Corollary 1.2：X本体のcompatible product、両因子の滑らかさ・射影性 | `proof-2-step-1` | Höring Theorem 1.4に可積分性を渡し、因子を閉じたsliceとして射影埋込みを制限。 |
| Corollary 5.1：2fibrations、接束等式、零rankのidentity | `proof-3-step-1`, `proof-3-step-2` | 一般RCファイバーの射影性・保存される接束、正階数と零階数の分岐、Höring公刊版規約を説明。 |
| 同：rank V₁=2の排他的全3択 | `proof-3-step-3` | rank W₁=2/1/0とHöring Theorem 1.4の全結論を対応。 |

独立の中間命題節Proposition 2.1に仮定・写像・接方向・対角上の値・可積分性を仮定しない点を図前で掲示している。主定理の全体像を先行させ、Proposition 3.1の相対接続は主定理の一段階として説明している。日英の主張、仮定、数式、3/3/1/3段階の論証、確認範囲に差異を見つけず、この本文照合範囲で数学的修正要求はなかった。図の生成物の比較は後続対象。

TeX原本4枚も点検。主定理図の第4箱の日本語が「{u(b)} は Eᵢ,g(b)」となっており「張る」の語が欠けるため、日英共通の`span{u(b)}=Eᵢ,g(b)`へ修正を担当に依頼した。その他の図の内容・入力の適用・引用・結論との対応に不整合は見つけなかった。

#### Integrabilityの修正反映・8図の確認

担当が再生成した `drafts/catalog-052/split-tangent-integrability/diagrams/preview/{main,box,product,quotient}.{ja,en}.png` の全8枚を目視した。

- 主定理図の`span{u(b)}=Eᵢ,g(b)`が日英とも表示され、修正要求は解消済み。相対輸送のbundle同型、定数切断、対角でのidentityからbracket消滅まで本文と対応する。
- Tangent box図は形式方程式、section count、例外曲線の微分消滅、降下の順序を保つ。写像を座標・積分解とみなす表示はない。
- Product図はHöring Theorem 1.4の追加入力を明示し、X本体の積と因子の射影性を描く。
- Quotient図は一般ファイバーでの主定理適用と零rankの別扱いを保ち、構造定理とidentityの引用が分離される。詳しい3択の全結論は図前の主張と図直後の文章で補完される。
- 数式・日本語/英語・矢印・引用の欠け、重なりを見つけなかった。Höring08の誌面/PDF位置は本文の共通記録と一致する。
- 確認用PNGの目視であり、公開サイト・冊子PDFの検査ではない。

## 内容点検の到達点

両記事の主要主張・全結論、主な証明接続、日英対応、直接外部入力の記述/適用、全14図の内容/表示を、執筆者とは別担当が照合した。上記の具体的修正要求4件は解消済み。本点検範囲で未解消の本文・図の修正要求はない。

残る確認限界はKM98 Theorem 3.3の原典本文・個別ページ、Universal Appendices A–Dの別経路、外部結果の証明全体と全技術事項の独立再構成である。KM98は記事自体にも保留表示がある。これは内容制作の限定的照合の終了であり、全論文の正しさの保証ではない。カタログ案内の最終編集、共有表示との比較、サイト登録・日英冊子PDF・公開は本部側の各工程に従う。

## カタログ案内の追加点検（記事初稿とは別の本部工程）

日英の `overview/article.{ja,en}.md`、`presentation.json`、`connections.json`、`citations.json`、`diagrams/routes.tikz` を読み、公式overview/CONTENTS、両原典・完成記事と内容を比較した。

- 公式名・CONTENTS別名・公式順2本・版・ページを台帳と照合した。共通表はUniversal→Integrabilityの公式順で、主結果と方法の役割を対応させる。
- 主題は「可積分性を前提として普通普遍被覆を積化」と「RCから可積分性を示してX自身を積化」の対照であり、原典の仮定・結論と整合する。正則分裂だけで一般に可積分性を結論していない。
- 図は2論文間の直接証明依存を描かず、2経路を並置する。左のglobal productはUniversal、右のglobal productはHor07という入力の相違が保たれる。
- `companion-background`は背景、Höring入力2件はそれぞれのCorollary 1.2への帰結入力であり、原典の引用・使用箇所と一致する。
- Corollary 5.1を一般RCファイバー上の適用として紹介し、ambient uniruled Kähler X全体の可積分性・積を主張しない。
- 分類カード・全件表を省略し、公式表・対照図・記事の詳細へ役割分担する理由が `diagramDecision` と `omittedSections` に記録されている。固定分類数を引き継がず、2列は2つの結論対象を対照するための構成である。
- 図前の3文献キーと誌面ページ付きの管理引用、日英の確認範囲、PDF第2段階予定の表示が対応する。共有表示・画面の最終確認は本部担当。

追加点検で本部へ返した修正事項：

1. 束輸送と二点評価まで案内するIntegrability記事導線が`#proof-1`（Proposition 2.1）なので、全体証明の`#proof-overview`へ向ける。
2. 対照図の`H_o:L₁×L₂⇄X:K_o`はこの段階では局所芽であることを箱内に明記し、解析接続の矢印は登録済み`continuation`引用（pp.13–17）から証明本文へ案内する。
3. `connections.json`のHor07の`from.version`の仮置き文字列を、確認済みarXiv v3の実際の版情報に置換する。

追加3点は反映を確認済み。日英導線が`#proof-overview`となり、図に「互いに逆な局所芽 / Mutually inverse local germs」と`continuation`引用が入り、Hor07の両接続記録にarXiv v3日付・PDF内部日付が登録された。この追加内容点検について未解消の修正要求はない。対照図の最終生成・画面の目視は本部が担当する。

### KM98の追加探索

[Cambridge公式Chapter 3](https://www.cambridge.org/core/books/abs/birational-geometry-of-algebraic-varieties/cone-theorems/709F6311379EA9A5E6EAF73AD4B7FB09)を確認した。公開範囲は章概要で、章全体がpp.74–110であることは確認できたが、Theorem 3.3本文・個別ページは取得できなかった。原典を確認済みへ変更せず、書籍入力の保留を日英本文・文献案内・出典記録に残す。推測した個別ページは登録しない。

## 外部入力の追加照合：Höring08

執筆担当が取得した `drafts/catalog-052/split-tangent-integrability/source/horing08.pdf/.txt` を点検担当も読んだ。表紙メタデータがあるため、誌面1067はPDF2に対応する。

- *The structure of uniruled manifolds with split tangent bundle*, Osaka J. Math. 45 (2008), 1067–1084。[公刊版取得元](https://ocu-omu.repo.nii.ac.jp/records/2010198)。
- Theorems 1.3/1.4（誌面1068 / PDF3）：一般RCファイバー上の片方の交差部分束の可積分性が前提。前者が2つのalmost-holomorphic fibrationsと接束等式、後者がrank V₁=2の3択を与える。Integrability Corollary 5.1は両部分束を可積分にしてこの前提を満たす。
- Definition 2.8後のRemark、Definition 2.9、Theorem 2.10（誌面1070 / PDF5）：RC compact Kähler manifoldの射影性、一般ファイバーの存在・コンパクト性、RC quotientを照合。これらの基礎定理の原証明までは追わない。
- Proposition 3.16と証明（誌面1073 / PDF8）：一般RCファイバーの接束が指定分裂で保存される。制限射影のidempotencyから像が部分束となるというIntegrability本文の補足と整合する。
- Proof of Theorem 1.3（誌面1074 / PDF9）：交差が0の場合にidentity mapを明示的に許す。2007 arXiv版の「dim X > dim Y」のfibration規約を2008公刊版へ持ち込まない。
- 以上によりCorollary 5.1の各直接入力の記述と使用箇所を点検担当も照合した。外部構造定理の証明全体は検証していない。
