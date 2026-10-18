# カタログ197：主要結果の全結論と概説の対応

別担当内容点検：`gpt-6-astra` / `high`。公式commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`の原典から照合。以下は著者が原典で主張する結果と記事中の説明の対応であり、全証明の独立検証・正しさ認定ではない。アンカーは日英共通の表示基盤でのID。実在の機械検査は本部記録を参照。

## 公式順1：torsion-free-direct-finiteness

原典Theorem1.1 p.1。記事：`drafts/catalog-197/torsion-free-direct-finiteness/article.{ja,en}.md`。主要結果は1件、証明対象は主結果とProposition2.1/Theorem5.2/Proposition6.1。

| 結論・条件 | 記事アンカー | 原典の接続と照合根拠 |
|---|---|---|
| 係数がF2であるscalar a,b、ab=1 | `proof-1-step-1` | Proposition2.1 pp.3–4：A′×A′の同期歩行成分で積一定、一つだけ偶数次数の例外。§7 p.30が必要な有限matchingを選ぶ。行列反例との混同なし。 |
| scalar cについてac=0かつc≠0 | `proof-1-step-2` | Proposition2.1 pp.3–4：A′×B′では全次数が奇数なので成分ごとに偶数個。Proposition6.1 pp.24–30のroot protectionがcの恒等元係数1を保証する。 |
| ba≠1 | `proof-overview-step-2` | §2 p.4：もしba=1ならc=b(ac)=0。非sofic性をこの存在の入力にしない。 |
| Gは有限表示かつtorsion-free | `proof-3-step-2` | Proposition6.1 pp.24–25、§6.3 pp.29–30：有限CW構造、可縮被覆の長さ2の自由分解、素数位数巡回部分群の周期コホモロジーとの矛盾。有限生成性だけから有限表示性を推論しない。 |
| 有限2次元classifying complex | `proof-3-step-2` | 配置排除Theorem5.2 p.19/証明pp.22–24からcone surgery §§6.1–6.3 pp.25–30へ接続。π2=0と次元≤2、Hurewicz/Whiteheadによる可縮被覆を説明。 |

量化：成功する十分大きい有限matchingの存在選択。具体的な辺表の計算済み出力ではない。Theorem5.2のn=vm、v=16513、L、独立一様matchingとgirth条件付けを補足済み。LT79は必要statementの出版社abstractまでの確認に留まる。

## 公式順2：direct-finiteness-characteristic-two

原典Theorem1.1 p.1、Corollary7.3 p.26。記事：`drafts/catalog-197/direct-finiteness-characteristic-two/article.{ja,en}.md`。主要結果は2件、証明対象はこれらとTheorem3.1/Theorem5.1。

| 結論・条件 | 記事アンカー | 原典の接続と照合根拠 |
|---|---|---|
| ある有限体K、char K=2；停止する有限処方 | `proof-overview-step-2` | §6 pp.22–24：hを順に探索し、有限体とprimitive ℓth root、有限incidence dataを列挙。Theorem5.1 p.15/証明pp.15–22が十分大きいhで成功を保証。K=F2は主張しない。Xyl11の外部statementとcoprime条件を確認。 |
| scalar a_out b_out=1、逆積は1でない | `proof-1-step-3` | §§3–4 pp.6–14：UT=I、packing後のsquare pair、埋込み部分群環のみで逆積欠損を特殊化、§4.5の単射なmatrix unitsと補単位でscalar化。特殊化の対象をK[L]全体へ拡張しない。 |
| Gは有限表示で奇素数位数元を含む | `proof-1-step-3` | Lemma3.2 pp.7–9とHNN embedding pp.10–11が局所有限群を保持。§4.6 p.14で有限長relators、有限stable letters、有限群因子から有限表示性を別途示す。 |
| T_bは単射CA | `proof-3-step-1` | Lemma7.1 p.25：有限supportの係数で全K^G上にT_cを定義し、T_cT_d=T_cd。T_aT_b=id。有限体/有限memoryを保持。 |
| T_bは非全射、像はFix(T_ba) | `proof-3-step-2` | Proposition7.2 p.26：y=T_bx iff T_bay=y。逆積欠損の非零係数hに対しδ_hが像にない。有限support configurationのみの反例ではない。 |
| Gは非surjunctive | `proof-3-step-2` | Corollary7.3 p.26：同じ有限alphabet上の単射非全射CAを適用。 |

Corollary7.4の別原典によるtype-F∞ embeddingは主要結果に含めず、記事の確認範囲外に明記する。非sofic性はES04の対偶による追加帰結で、群環反例構成の入力ではない。

## 公式順3：group-ring-determinant

原典Theorem1.1 p.2。記事：`drafts/catalog-197/group-ring-determinant/article.{ja,en}.md`。主要結果は1件、証明対象は主結果とPropositions2.2/4.3。

| 結論・条件 | 記事アンカー | 原典の接続と照合根拠 |
|---|---|---|
| 有限生成G_D、A∈M_n(Z[G_D])、Q[G_D]上可逆 | `proof-1-step-1` | char2 companionのscalar結論→Lemma2.1 p.3のbinary regular representation→Prop2.2 pp.3–4のwreath extension。Lemma3.2 p.6の分母条件/mod q合同が整数性と有理逆元、§5 p.8がn=2d+1と有限生成性を示す。scalar整数元、整数環上可逆、有限表示、torsion-freeへ強めない。 |
| 0<FK det(A)<1、正規化対数積分が有限かつ負 | `proof-1-step-2` | θ=(1/3)(2/3)^|S|>0、Prop4.3 p.7と§5 p.8よりdet=q^(-θ)、積分=-2θ logq/(2d+1)。有界逆元により正のスペクトルが0から離れ、有限性も別に保証。非正規化traceと確率測度の係数n/2を照合。 |

直接の原典入力はOpenAI26two Theorem1.1のみ。ES05は完成した整数A* Aへのsofic下界を使う帰結。非soficだからdet反例があるという逆含意ではない。

## 公式順4：direct-finiteness-odd-characteristic

原典Theorem1.1 p.1、Proposition8.1 p.23。記事：`drafts/catalog-197/direct-finiteness-odd-characteristic/article.{ja,en}.md`。主要結果は2件、証明対象はこれらとPropositions3.1/5.1。登録されたcoverageは4件だが、第2件に含まれる群条件・scalar積・有限指定をここでは分解して点検する。

| 結論・条件 | 記事アンカー | 原典の接続と照合根拠 |
|---|---|---|
| 一つの指定された奇素数p、|K|=p^4 | `proof-1-step-1` | Theorem1.1 p.1、Lemma2.1 p.3：pは(m!)²+1の最小の1超の約数で素数、p>m、−1は平方。二段の二次拡大でp⁴元。すべての奇素数やF_pへ強めない。 |
| Gは有限生成でtorsionを含む | `proof-1-step-4` | Proposition4.2 p.13、Proposition5.1 pp.14–18、§7 pp.20–23：有限群H_iを保持する各埋込み、有限個の有限群/同一視、有限Heisenberg因子。torsion groupやtorsion-freeとは異なる。有限表示は主結論として追加しない。 |
| scalar a,bでab=1、ba≠1 | `proof-1-step-4`（核証明は`proof-1-step-3`） | Lemmas6.1–6.2 pp.18–20：同じcorner環のsplit injectionと整数不等式wt<md、非零v_*による逆積欠損。Proposition7.1/Lemma7.2/Corollary7.3 pp.20–22：matrix unitsの線形独立性により単射に移送し、補単位を加える。係数体を変えない。 |
| 体・群・有限和は指定された有限式 | `proof-1-step-4` | §7の主定理組立とfinite prescriptions pp.22–23：順序付き有限集合、有限基底変換/逆元、有限群の公式。群のword problemを解くとは主張せず、実用計算の実行も未実施。 |
| ab=1ならT_bは全k^L上の単射CA | `proof-4-step-1` | Proposition8.1 p.23：有限体と有限support係数、T_cT_d=T_cd、T_aT_b=id。群のtorsionや標数追加条件は不要。 |
| 像はFix(T_ba)、各非零欠損係数hのδ_hが像外 | `proof-4-step-2` | Proposition8.1 p.23：像の両向き含意と(T_baδ_h−δ_h)(1)=(ba−1)_h。従ってba≠1の場合に非全射。一般命題の見出しと本文を条件に合わせる修正を依頼し、日英反映を確認。 |

Theorem1.1への適用ではba≠1が既にあるため非全射CAとなる。標数2論文は比較であってこの奇標数構成の入力ではない。nonsofic帰結だけにES04を使う。

