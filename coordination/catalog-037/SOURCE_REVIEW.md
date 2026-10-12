# カタログ037 原典・記事内容照合

- 担当: source_review（本部から分担した、記事執筆者とは別の照合担当）。数学論文2本の著者はいずれも OpenAI。
- 採用仕様: 制作セット1.4＋2026-10-11/12補足。第1段階のみ。
- 対象: 台帳の固定版に対応する `source/01.pdf`（57頁）・`source/02.pdf`（20頁）、その本文抽出テキスト。以下の原稿ページは誌面番号＝PDFページ。
- 照合日: 2026-10-12 JST。開始時刻は未記録。原典照合の一区切りはclock実測20:15:19 JST。記事の受領後点検は末尾に追記する。
- 性質: 主要な主張・帰着・直接入力の記述と適用箇所の照合。専門家による査読、全証明の独立検証、形式検証を意味しない。

## 1. 全次元原稿の主張と結論の対応

**The ordinary-double-point gap in every dimension**、Theorem 1.1（p.3）は、n≥2、normal complex algebraic n-fold の singular closed point、K_X Q-Cartier、near x で klt、境界0が仮定。孤立性・lci・商特異点・smoothabilityは仮定されない。結論は上界 `volhat(x,X) ≤ 2(n−1)^n`、等号は解析的ODPと同値。`vol(v)=lim n! length(R/a_t(v))/t^n`、`volhat=inf A_X(v)^n vol(v)`、log discrepancy採用。density `d=volhat/n^n` と `p_n=2((n−1)/n)^n` は同じ正規化ではないので区別する。

- 上界: §2の n=2,3,4 の基底 → Proposition 2.5（pp.10–11）の体積保持・埋込次元比較を伴うGorenstein K-polystable cone帰着 → small stabilizer（Theorem 3.1, p.13）または large stabilizer → Theorem 7.7（p.48）のsupremum bootstrap。
- large stabilizer経路の核心入力: Theorem 4.8（p.29）`c_0∈int K` → Lemma 5.2のadjoint lifting → Theorem 5.3（pp.34–36）の rational polyhedrality、facet height 1、`Γ=K∩Λ`, `int K∩Λ=c_0+Γ` → Proposition 6.4（pp.41–42）の `gr_W S=D[v]` とHilbert series `(1−z)^(−n)` → Corollary 6.6（p.43）の第二stabilizer `h≥2`。
- §7.1（pp.44–46）では切片Yの次元は**n**。Lemma 7.2のkltとLemma 7.3のsingularを別々に証明してからM_nを適用する。ここへ未証明の同次元ODP定理を入力しない。
- Proposition 7.5（p.47）では商の**一つのcharacter**だけを数えて `σ/h` を得る。Lemma 7.6（p.48）で `d(C) ≤ (N/n)^n + d(Y)/h ≤ p_n/2 + M_n/2`。上限M_nに近づく列を取り `M_n≤p_n` を導く。supremum達成や異なるcone全体で一様なgrading近似は不要であることを原典も明示。
- 等号cone: Lemma 7.8（p.49）で `h=2`, `A'=Nℓ`、ℓ=1なら`σ=2`, `A_C(w)=2N`, `vol(w)=2^(−N)`、最小付値の一意性。Lemma 7.9（pp.49–50）のstrict leading countから`w(v)≤2`、Lemma 7.10（p.50）の有限character集合と整数丸めから`Nm_max≤r`、Theorem 3.1を再適用してTheorem 7.11（p.50）のODP cone。
- **元のgermへの復元**: cone=ODPだけではanalytic equalityの証明を終えない。§8.2（p.52）で`edim(X,x)≤edim(C,o)=n+1`、singularゆえn+1、regular local ringのheight-one primeをprincipalとしてhypersurface化。Lemma 8.1（p.51）のweighted hypersurface boundとProposition 8.2（p.52）で、multiplicity>2ならstrict、quadratic part退化なら欠けた方向に重み1−εを与えてstrict、非退化ならholomorphic Morse lemma。
- sharpness/逆向き: Lemma 2.3（pp.8–9）のODP normalized-volume計算を§8.2末尾が使用する。一般のtest valuationは上界しか与えないため、blowupで値を計算しただけでinfimumの達成と断言しない。

**Corollary 1.2（p.3）**はn≥2のK-semistable Q-Fano V。singularなら `(−K_V)^n ≤ 2((n²−1)/n)^n < 2n^n`。さらに`V≄P^n`なら`≤2n^n`、等号はsmooth quadricまたは`P^1×P^(n−1)`（n=2で同一）。§8.3（p.53）は、singular枝にlocal-to-global comparison＋Theorem 1.1、smooth枝にLi–Miao、逆向きに例のK-polystabilityと交点数計算を用いる。**小さいsingular boundの最適性・等号分類は主張されていない**。

## 2. 四次元原稿の主張と結論の対応

**The normalized-volume gap in dimension four**、Theorem 1.1（p.1）はnormal complex algebraic fourfoldのsingular closed point、K_X Q-Cartier、klt near x、境界0。結論は `volhat≤162=2·3^4`、等号iff解析的ODP（5変数非退化二次式）。孤立性などの追加構造仮定はない。体積とlog discrepancyの正規化はpp.1,3–5に確認。

- Proposition 2.2（pp.5–6）: `V≥162`からstable degenerationでcone、edim比較。非孤立上界`4096/27<162`でsmooth puncture。index-one cover degree dに`dV≤256`を適用してd=1、Gorenstein化。これはVを下から仮定して構造を得る工程であり、結論の上界と向きを混同しない。
- Proposition 3.4（p.9）: transverse-jet estimateを全centered valuationに対する最小性と比較して`m<r/(5/2)`。extracting divisorの局所指数とlcを用い`A_C(F)>5/2`、整数性から`A_C(F)≥3`。
- Lemma 4.1、Proposition 4.3（pp.10–14）: stabilizer boundがnonzero Fourier frequencyを(-1,1)の外へ出し、canonical-module duality＋Poisson summation＋符号付きテストでweight (0,5/3)の非零元。lower-dimensional versionにはcanonical reflexive powerから環への**正のweight lowering injection**が必要。
- Proposition 5.1（pp.15–17）: `lct_o(m_o)≤3/2`を仮定するとtotal boundary weight<5/2のlc pair、vertex自体はlc centerでない。positive-dimensional minimal lc center Z上で低weight函数は全滅する。affine subadjunctionからklt boundary、normal CM。dim Z=1は直接、2はQ-factorial/kltと正のcanonical weight、3はsmooth puncture上のCartier-divisor adjunctionとreflexive extensionでinjectionを作りnonvanishingと矛盾。dim3のZ全体にQ-Gorensteinを仮定する説明に置換してはいけない。
- Proposition 6.1（pp.17–18）: resolution上`b_i=ord_Ei(m_o)≥1`, `A_i≥3`、`A_i/b_i>3/2`。b_i≥2なら`A_i−b_i>b_i/2≥1`、b_i=1なら`A_i−b_i≥2`。よってhyperplane strict transformのordinary discrepancy `A_i−1−b_i>0`。Cartier sectionのCMとBertiniによりnormal Gorenstein、したがってterminal Gorenstein threefold section。**A_i≥3とlct>3/2は両方必要**。
- Reidのterminal Gorenstein threefold→isolated cDV→analytic hypersurfaceを使い`edim(H)≤4`、`edim(C)≤5`。最後に元のgermのedimへ戻り、regular local ring/UFDのheight-one primeからhypersurfaceを得る（p.18）。
- 上界と等号条件: Liu lci theorem適用をこのhypersurface化の後に行う。逆向きはODP値162とcompletion invariance。四次元原稿自体の新しい論証は構造帰着で、lci theoremの全証明の再現ではない。

## 3. 2本の関係（直接依存と一般化の区別）

確認した直接辺は **02 Theorem 1.1 → 01 Theorem 2.4（p.9）/§2.4（pp.9–10）/§8.2（p.52）**。供給するのはn=4の境界0・無制限klt gapとanalytic equality characterization。01 p.3が02をsole companion inputと明記し、参考文献[44]（p.56）に同じSeptember 24, 2026版の題名とTheorem 1.1を記載。低次元基底として直接用いてn≥5の帰納を進める。

01 Theorem 1.1は主張として02をn=4の場合に含むが、これを01→02の証明依存とはしない。02の本文・参考文献pp.19–20を調べた範囲で01の直接利用は確認されない（逆向きの依存辺は作らない）。両者は単なる別証明でもない。全次元証明が四次元証明に依存するためである。共通外部入力の存在は論文間の直接依存とは別。

## 4. 直接外部入力の独立照合

下記は入力定理の記述を読み、OpenAI原稿内の使用箇所と照合したもの。外部論文の証明全体は追っていない。

| 外部文献・参照版 | 照合した記述 | 原稿側の適用 |
|---|---|---|
| Yuchen Liu, *K-stability of cubic fourfolds*, arXiv:2007.14320v2, [PDF](https://arxiv.org/pdf/2007.14320v2) | Theorem 2.12 p.6: nonsmooth lci kltのODP上界と等号iffODP。Theorem 2.11 p.6: smooth-value上界。Lemma 2.15 p.7: completion invariance。Corollary 2.18 p.9: dim Sing≥n−3ならdensity≤16/27。誌面/PDF対応を実読。 | 02 pp.5–6,18。四次元で16·4^4/27=4096/27。得られた元のhypersurfaceはlci、klt/境界0は元の仮定なので最終入力条件に合う。 |
| Chi Li–Minghao Miao, *On the volume of K-semistable Fano manifolds*, arXiv:2506.17420v3, [PDF](https://arxiv.org/pdf/2506.17420v3) | Theorem 1.1 p.2: smooth K-semistable Fano manifold≄P^nで≤2n^n、等号ならquadricまたはP1×P^(n−1)。PDF1頁のdate May22 2026、arXiv stamp20May2026。 | 01 §8.3 p.53のsmooth枝。singularへの一般化として適用していない。 |
| Chenyang Xu–Ziquan Zhuang, *Stable degenerations of singularities*, arXiv:2205.10915v2 | 担当取得PDF/textのTheorem 1.2 p.2: quasi-monomial unique minimizer、finite generated graded ring、K-semistable cone、K-polystable degeneration。 | 01 Proposition 2.5、02 Proposition 2.2。01はK-polystable refinement、02はK-semistable minimizing Reebまで。 |
| Chenyang Xu–Ziquan Zhuang, *Uniqueness of the minimizer of the normalized volume function*, arXiv:2005.08303v1 | 担当取得PDF/textのTheorem 1.1/Corollary 1.2/Theorem 1.3 p.1: minimizer一意性/群作用不変性/finite Galois crepantのdegree formula。 | 両原稿のindex cover、01 §7.2とLemma 7.8。finite-degree formulaの仮定にGalois/crepantが必要であり、任意の有限写像への誤拡張なし。 |

記事担当 `article_fourfold` の報告: Reid83 scan Theorem (1.1) 誌面p.138/PDF p.5、§(0.5) 誌面p.134/PDF p.3を画像実読し、terminal index1 iff isolated cDV、cDV analytic hypersurfaceを確認。Fujino–Gongyo arXiv:1009.3996v1（2010-09-12, version 1.17）Theorem7.2 p.11を確認し、normal affine X/effective Q又はR boundary/lc/minimal lc centerという入力とklt boundaryの出力を照合済み。source_review側はOpenAI原稿の適用条件・番号を照合したが、これら外部原典本文の独立読解は未実施。上表の独立照合済み外部文献と区別する。

## 5. 未確認・留保

- 01 §§3–6の全詳細、特にorbifold deformation/Schwarz比較の全局所解析、§4 exponential inequalityの全計算、Lemma5.2 adjoint vanishing/liftingの全構成、§6の全環論移行は独立再証明していない。原典の中間結果の記述とその使い方・主要帰着を照合した範囲に限る。
- 02 §3のslice charts・character-sensitive jet計数の全構成、§4.3 Fourier testの全積分計算と数値strictnessは再計算していない。主張と後続適用のつながりは読んだ。
- 外部入力の証明そのもの、その先の依存の再帰的検証は対象外。
- ここまでに主要な仮定、定数、評価方向、帰納の循環性、等号から元germへの復元に関して記事制作を止める矛盾は見つかっていない。ただし数学的正しさの認定ではない。

## 6. 記事受領後の照合

執筆者: `article_all_dimensions` / `article_fourfold`。照合者: `source_review`。本文出力後に日英の主張・説明と原典の対応、主要結論の被覆、図の記号を追記予定。

### カタログ案内の先行照合

20:15:19 JSTのclock実測までに、overviewの日英本文と `diagrams/connections.tikz` を読解。02→01の直接入力、同論文内Corollary1.2への帰結利用、M_nの非循環説明、singular global boundにsharpness/equality classificationを付さない留保、主張の包含を逆向き依存としない区別が原典と対応。総括図は四次元→全次元→大域的系という連続帰着を示し、個別証明図の複製にはなっていない。SVG画面/サイズ/リンクの表示点検は本部担当。

### 独立照合した外部資料の保存場所

- Liu22: `drafts/catalog-037/normalized-volume-gap-four/research/Liu22.pdf` / `.txt`。照合はwebの固定v2 PDF本文でも行い、Theorem2.12 PDF6（誌面6）、Lemma2.15 PDF7（誌面7）、Cor2.18 PDF9（誌面9）を確認。
- LM26: `drafts/catalog-037/ordinary-double-point-gap/external/LM26.pdf` / `.txt`。webの固定v3 PDF本文も読み、Theorem1.1 PDF2（誌面2）を確認。
- XZ25: `drafts/catalog-037/normalized-volume-gap-four/research/XZ25.pdf` / `.txt`。保存済み抽出本文でTheorem1.2 PDF2（誌面2）を確認。全次元担当側 `external/XZ25.pdf` もあるが、この独立照合で読んだのは四次元担当側。
- XZ21: `drafts/catalog-037/normalized-volume-gap-four/research/XZ21.pdf` / `.txt`。保存済み抽出本文でTheorem1.1/Corollary1.2/Theorem1.3 PDF1（誌面1）を確認。v1のTheorem1.3本文はPDF1に収まり、後続説明がPDF2に続く。
- 原稿自体のページ対応は `source/01.txt`/`02.txt` のform-feed区切りと頁末ノンブルで照合。SOURCE_REVIEWの主要原稿引用はその対応を用いる。

### 全次元記事・日本語本文の先行照合（20:17:31 JST clock実測時点）

`ordinary-double-point-gap/article.ja.md` を読解し、原典と比較した。Theorem1.1、Corollary1.2の仮定・全結論、density正規化、Theorem5.3主張欄、Theorem7.7主張欄を照合。small-stabilizer枝のrank-b symmetric tensor/weight下界、interiority→adjoint lifting→facet height1→飽和、同次元sliceのklt/特異性→character count→supremum、等号cone→元germのhypersurface化→二次部分非退化、ODPの全valuation infimumとsharpness、大域系のsingular/smooth/逆向きの3段階が原典と対応している。現時点で内容修正指摘なし。引用マーカーは生成前であり、英文・TeX図は未受領のため、この時点では最終受領ではない。

### 全次元記事の追加直接入力点検

記事執筆者の取得済み `ordinary-double-point-gap/external/` を読み、次を追加照合した（入力証明は未再検証）。

- `Liu18.pdf/.txt`（arXiv:1605.01034v5）: Theorem13(2) 誌面/PDF p.9にK-semistable iff Ding-semistable、Theorem21 誌面/PDF p.14に任意の閉点・real centered valuationでのlocal-to-global上界。全次元原稿§8.3でinfimumへ移る説明に対応。
- `ADK08.pdf/.txt`（arXiv:0707.4310v2）: Theorem1.1 誌面/PDF p.1 と Theorem1.3 誌面/PDF p.2。smooth projective Bとample actual line bundle Lという条件の下、`−K_B=NL` 又は `(N+1)L` に対して最上外積の非零sectionを使うとquadric/projective spaceのpolarized classificationを供給する。01 p.18がstabilizer消滅後にのみ適用する順序に合う。
- `Fuj23.pdf/.txt`: Theorem3.2.4 誌面p.31/PDF p.41。projective morphism of complex analytic spaces、lc pair、Q-Cartier integral Weil divisor L、nef and big と各lc center上のbigが仮定。01 Lemma5.1のcoarse側はklt boundaryであるためlc centers条件は空、nef and bigの確認が必要という記事説明に対応。刊行誌面とPDF位置が10頁ずれるので同じp.31としてPDFへ飛ばさない。

### 本部による追加照合（独立担当の区別）

本部 `/root` から受領した照合報告: `ordinary-double-point-gap/external/Liu18.txt` Theorem13(2) p.9とTheorem21 p.14を読み、Ding-semistable/任意centered real valuationの上界からinfimumへ移る接続を確認。LM26 Theorem1.1 p.2はonly-ifの記述であり、01 §8.3が例のK-polystabilityと交点数計算で逆向きを補うことを確認した。これは本部の照合であり、上記source_review自身の独立照合とは担当を区別する。

### 両日英記事本文の照合（20:21:12 JST clock実測時点）

- `ordinary-double-point-gap/article.ja.md` / `article.en.md`: 日英全文を読み比べ、主定理の範囲、2(n−1)^n、density正規化、Theorem5.3とTheorem7.7の独立主張欄、3種類の主定理結論（上界・等号必要条件・ODPによる逆向き/最適性）、Corollary1.2のsingular bound／非P^n bound／等号分類・例の計算にすべて説明があることを確認した。M_nは同次元上界を未仮定のsupremum、hとmは別stabilizerと明示。英語の仮定・数式・段階・留保は日本語と対応。本文上の修正指摘なし。
- `normalized-volume-gap-four/article.ja.md` / `article.en.md`: 日英全文を読み比べ、zero boundary・complex algebraic・n=4・normal/Q-Gorenstein/klt/singularの条件、volume定義、162、stabilizer boundの向き、Propositions3.4/5.1の独立主張、二つのdiscrepancy情報の合流、元germをhypersurfaceへ戻す説明、上界・等号必要条件・最適性がそれぞれあることを確認。dim3 lc center全体にQ-Gorensteinを要求しない点、dim2の条件との区別、全体積付値minimizationの条件も日英一致。
- 四次元担当へ軽微な内容明確化2件を依頼: (i) Hがnormal Gorensteinである根拠としてCartier sectionのCM/S2とBertini/R1を1文補う。(ii) Hilbert polar partの「零点／at zero」は通常変数z=0のpoleと混同し得るため、`H_T(s)=Σ dim(T_y)e^(−sy)` のs=0と定義する。修正待ち。
- この時点の引用マーカーは生成前であり、引用表示・TeX/SVGの数式/リンク/画面は未受領。本文の内容照合と生成物点検を区別する。後者は本部が担当する。

### 明確化2件の反映確認と本文受領

四次元記事の日英双方に、(i) Cartier sectionのGorenstein/CM/S2＋Bertini/R1からnormalityへの説明、(ii) `H_T(s)=Σ dim T_y e^(−sy)` のs=0のpolar partと、integer-graded `H_T(z)` / `z=e^(−λs)`の区別が反映されたことを再読確認した。上記の2件は解消。主要主張・全結論・核心帰着・直接入力について、両記事の**本文内容は受領可能**と判断する。引用生成・TeX/SVG表示・リンク・日英の最終形式検査は本部の後続点検として残り、この記録だけで第1段階全体の完了とはしない。

## 7. 最終稿の追加内容点検（20:31:10 JST clock実測以後）

全次元記事に追加された `external/Gra15.pdf/.txt` を読み、**Example251 誌面/PDF p.56、Theorem257 誌面/PDF p.57**を確認した。Example251は実変数上の複素係数斉次多項式とharmonic subspaceを定義し、Theorem257はharmonic decompositionと、ambient dimension d≥3でのSO(d)既約性を述べる。OpenAI原稿Lemma2.3（pp.8–9）のambient dimensionはd=n+1≥3であり、除外される2変数の場合は生じない。日英記事のminimizer一意性→群不変性→各次数の値が一定→degree valuation→infimumの値という適用、図前の書誌/用途とpp.56–57への引用は対応している。外部の既約性証明を全て再検証したわけではなく、末尾の未検証範囲は引き続き妥当。

最終の個別TeX原本7種（全次元overview/saturation/bootstrap/global、四次元overview/stabilizer/threshold）を読み、日英共通数式と主結論との対応を確認した。評価方向、2(n−1)^n、162、4!とn!、m/hの区別、character share 1/h、M_nの比較、等号からhypersurface、四次元A_i−b_i>1、lower-dimensional canonical injectionの符号が本文と対応している。図の画面・SVG生成・クリック先・最終表示は本部の検査と区別する。

1件、本部へ明確化を依頼: saturation.tikz の “Force every support to height one” は一般supportまで含むように読めるため、“Force primitive facet supports to height one” とする。irrational/support-heightの排除は微分可能な境界点でのsupport rayが対象であり、説明に “At differentiability points” を入れる。原典はこの後に有限facetへ移るので、本文そのもののTheorem5.3記述は正確。

### 最終明確化の反映と点検終了（20:33:52 JST clock実測）

saturation.tikzの見出しが日英でprimitive facet supportに限定され、排除するsupport rayの説明に微分可能点の条件が加わったことを再読した。生成済みsaturation.ja.tex/en.texにも同じ変更が反映されている。最後の内容明確化は解消し、今回の原典・本文・TeX内容点検を区切る。source_reviewから残る本文/図数式の修正指摘はなし。SVG画像・リンク・画面・共通表示の最終検査結果は本部の記録を参照し、ここに記した数学的未確認範囲を保持する。
