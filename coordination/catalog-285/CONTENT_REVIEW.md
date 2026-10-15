# 内容点検の受領記録

2026-10-15。執筆と別担当による原典照合は全て明示指定の `gpt-6-astra`。本部は成果物・照合結果・日英対応と表示を受領する。これは全証明の独立検証や専門家査読ではない。

## 論文別の受領

| 公式順・paper ID | 初稿時間（JST） | 執筆／別担当照合 | 点検と修正 |
|---|---|---|---|
| 1 baum-connes-injectivity | 21:24:10–21:39:00、14分50秒 | injectivity／projection | Theorem 1.1の全結論、Propositions 7.11・8.8、有限生成への回収、整数ペアリングとassembly消滅を原典照合。日本語「整数Heisenberg群」を修正。レビュー内の存在しない§9.3/§9.4は§9.2へ原典再照合後訂正。記事の引用は元から正しかった。 |
| 2 kadison-kaplansky-projection | 21:24:19–21:39:30、15分11秒 | projection／irrational | Theorem 1.1、行列射影構成、自由積圧縮によるscalar射影の所属・非零非単位、有限生成・torsion-free性を原典照合。定数保存の対象をpruning前のY^0へ限定し、後続の圧縮評価と区別。 |
| 3 baum-connes-irrational-trace | 21:24:40–21:40:00、15分20秒 | irrational／injectivity | Theorem 1.1、連続functional calculusによる射影の所属、無理数trace、整数・有理化後のassembly非全射を原典照合。Lemma 2.4の同距離と根の条件を補記。LPS刊行頁はfolio付き原本で直接再確認。 |

初稿はいずれも60分以内に終了。以後の修正・別担当照合・案内制作・本部表示検査は初稿とは分け、記事statusとreview記録へ追記した。

詳細な主張の仮定・量化・各結論の説明先は、各 `citations.json` の `articleGuides`（mainResults / statements / conclusionCoverage / proofTargets）と `review-*.md` を参照する。照合では係数Cの自明作用、被約と最大、torsion-freeの有無、proper-actionの定義域、scalarと行列、射影とK理論類を区別した。

## ユーザー指定の重点点検

1. 単射性稿は係数なしの被約assemblyの核を構成し、有理化後も非単射。無理数trace稿はproper-actionの定義域からの被約assemblyの像外を示し、有理化後も非全射。定義域・値域は各記事の主張欄に記載。
2. Kadison–Kaplansky稿の最終射影はtorsion-free群のscalar被約群C*代数内。行列射影は中間段階であり、群環・最大群代数・行列代数の別主張に読み替えない。
3. 射影稿と無理数trace稿は実際の射影の代数所属を証明する段階を明示。単射性稿のBott K理論類の消滅とは区別。
4. 群・作用の構成、torsion-free性、有限生成への回収・自由積による保存、スペクトル計算を分けて原典照合。
5. 射影稿の方法を単射性稿が参照してその設定で再証明する関係は、主定理からの直接含意と扱わない。無理数trace稿へタイトルから依存辺を補わない。
6. 射影稿内の整数traceを用いる非全射性と、無理数trace稿の別群・有理化後非全射を区別。既知の係数付き反例や最大側比較と混同しない。

## 残る数学的未確認

- 単射性稿：§§2–4の逐次確率・recovery・pruningの全推定、§§5.4–5.7のFourier envelope・正則ノルム試験・centered momentの全計算。
- 射影稿：§§4–6のbit-level表・確率計数、§7.2–7.4の全diagram変形と一球overlap、Lemma 8.5の核同定、§§9.4–9.6の全template/rounding誤差、全定数の独立検算。
- 無理数trace稿：Lemma 2.2の全singular plane-diagram surgery、Proposition 2.3の全disk-filling変換の独立再構成、Davis–Lück比較文献の全照合。
- 共通：外部入力の証明そのもの・再帰的引用先・各論文の全証明を独立検証していない。未調査の他カタログ接続は依存なしと扱わない。

これらの範囲は日英記事末尾にも開示している。主要な接続の原典照合済みという表示を、反例全体の正しさを保証する表示へ拡大しない。

## 案内・表示

カタログ案内は別枠でAstraが執筆し、別のAstraが原典照合する。最終記録は `review-overview.md` とoverviewの `status.md`。表示検査は `FORMAT_CHECKS.md` と `validation/stage1.json`。サイト登録・冊子PDF・公開検査は次段階である。
