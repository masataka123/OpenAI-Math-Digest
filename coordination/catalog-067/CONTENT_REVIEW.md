# 内容点検 — カタログ067

2026-10-13、本部兼執筆者による自己点検。独立レビューではない。固定原典は `source/main.pdf`（2026-09-25、27ページ、公式commitはinventory.json）。本文の該当証明と直接入力の記述・適用箇所を照合した。外部証明の再帰的検証・全証明の形式検証は行っていない。

## 主張・全結論と接続

| 原典 | 仮定・全結論の点検 | 記事の説明先と結果 |
|---|---|---|
| Theorem 1.1, p.2; 証明p.20 | 滑らかな連結複素射影Fano、次元6、nef接束。Picard数制限なし。有理等質G/Pという分類。一般の任意次元予想とは区別 | `#theorem-1-1` → `#proof-1`、全体図main。全Picard数・擬指数の枝を下記照合 |
| Proposition 3.1, pp.8–10 | Fano6、nef接束、rho=1、擬指数4 → 有理等質 | `#proposition-3-1` → `#proof-2`。独立主張を図前に提示。分解の枝の全候補を排除 |
| Lemma 5.1, p.15; §§5.1–5.3 pp.16–18 | 原典§4のA,C1,N、xi∈Q^11、eta∈Q^18、xi0=eta0=1、積座標がNの核 → 32−20eta1+3eta1²=0 | `#lemma-5-1` → `#proof-3`。数値制約の抽象的仮定と幾何学的uの同定を分離 |
| Proposition 6.2, pp.19–20 | Fano6、nef接束、rho=1、擬指数5 → Gr(2,5) | `#proposition-6-2` → `#proof-4`。非退化性、種数、次数、正規性、Mok認識へ接続 |
| Corollary 1.2, p.4; §7.2 pp.21–22 | 連結コンパクトKähler、解析的nef接束、d=dim−qtilde≤6。有限連結étale被覆、滑らかな固有Albanese全射、連結有理等質ファイバー、トーラス次元qtilde、固定Fの正則局所自明束 | `#corollary-1-2` → `#proof-5` 第1・2段階。d=0,1..5,6を別々に処理 |
| 同系の残りの結論 | 通常の普遍被覆F×C^q、準射影性、正則凸性、射影がRemmert還元、dimX≤6の場合 | `#proof-5` 第2・3段階。Fの単連結性、Stein可縮底、固有射・構造層直像を明示。有限被覆X'自体の直積性やトーラスの射影性を主張しない |
| Corollary 7.1, p.21 | Fano、nef接束、次元1..6。rho(omega)=omega、[omega]=2πc1(−KX) | `#corollary-7-1` → `#proof-6`。等質計量→定数倍→コホモロジー類を説明 |

機械可読の `mainResults`, `statements`, `conclusionCoverage` は記事のcitations.jsonに保存。共通rendererで全アンカーの実在を検査した。

## Theorem 1.1への枝の照合

1. rho≥2：Kan16 Theorem 0.2のrho>n−5がn=6で成立。ここは既知の分類への直接帰着で、本原稿の新しい収縮分類と混同しない。
2. rho=1：Proposition 2.1の極小族・滑らかな評価写像・全P1ファイバー上の負の分裂を読み、後続の降下が一般曲線だけの主張に依存していないことを確認。
3. 擬指数2：評価写像が同型となる場合のP1-fibrationとrho=1が矛盾。擬指数3：有限接写像と1次元VMRT分類の候補次元2,3,5に6がない。擬指数≥6：全有理曲線の反標準次数条件をDH17へ入力しP6/Q6。
4. 擬指数4：Kan17の評価写像分解におけるP2-fibrationの既知等質枝と、二つのP1-fibrationの枝を分けた。後者でa=b=−1、q-fibre=P2/Q3/K(G2)。P2はBetti数とHard Lefschetz、K(G2)は対合のモーメントからdimY=4、Q3は直交束の消滅とlambda∈Z対lambda=9/4の矛盾で消える。既知の等質枝は六次元ならLG(3,6)。Watanabeの結果は別証明として記録し、本文の直接入力の矢印にはしない。
5. 擬指数5：二つの滑らかな射の降下・次元・GRR関係から行列A、射影公式から積座標を構成。有限体の核次元は有理数上の上界として使い、有理数上の6列と非零小行列式を併用して二次関係を得る。
6. u=4,8/3から非退化性と切断種数によりu=8/3,L³=3,deg(tau)=1。最小次数分類には錐も含まれるため、正規性→有限双有理同型→滑らかさ→scroll(1,1,1)の順を維持。Picard数1とSegre VMRTをMokの認識定理に渡しGr(2,5)。全枝が主定理へ合流する。

## 直接入力と確認範囲

15外部資料の使用結果・版・誌面/PDFページ・URL・SHA256は記事sources.jsonとsource/manifest.json、引用表示はcitations.jsonに記録。各入力の利用箇所・必要仮定・確認範囲はoverview/connections.jsonにも保存した。Kan16/Kan17/DH17/Mok08s/Keb02/HM99/Mok08r/EGHP06/Del71/BS58/DPS94/BB96/Poc25/CHK13/Dem18の該当記述を照合した。

- Fischer–GrauertはPoc25 Theorem 1.1での解析的定理の再掲を照合。Poczobutの新しい代数的変種を適用したのではない。
- 正KE計量はDem18 §1によるAlekseevskii–Perelomov構成の再掲を照合。1986年原典は未照合。
- Lemma 4.3のDeligne固定部分と相対GRRの入力を照合したが、相対Hodge–de Rham同定のGriffiths原典は未照合。GAGAの原典、Fanoの有理連結性等の標準入力の原証明も今回の範囲外。
- 本稿の本文・参考文献に他のOpenAI原稿への直接引用は見つからなかった。036・052等との追加の包含・一般化関係は未調査。SchnellのCampana–Peternell不等式は別の問題。

以上の未確認は記事両言語の末尾にも明記した。未確認を「依存なし」や「全証明確認済み」に置き換えていない。

## 付属計算証明書

公式固定commitのverify.pyを改変せず、assertion有効で実行し、終了コード0、`N done`と`pass`を確認した。ログはvalidation/certificate.log。Python 3.13.6、SymPy 1.14.0、NumPy 2.3.5。原典README指定Python 3.12.13とはPython版が異なる（依存ライブラリは一致）。コードハッシュはsources.json。これは有限算術部分の再実行で、幾何学的入力全体の独立認定ではない。

## 日英の照合

主結果3件、中間主張3件、証明節6、証明段階16、図6/言語を対応させた。引用マーカー55件は順序も一致。表示数式10件は翻訳文と句読点を除いて一致。インライン数式は翻訳による順序・分割・変数反復の差を人手で確認し、仮定・結論・式の相違は認めなかった。検査ログはvalidation/stage1-checks.json。
