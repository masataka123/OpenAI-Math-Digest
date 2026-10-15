# Snaky in 21 Maker moves

公式カタログ187はCombinatorics（組合せ論）に属する単論文カタログである。空盤面からのMakerの勝利を、相手の全応手に耐える条件の合成と、有限証明書の高さで示す。「21」はMaker自身の実着手数の上界であり、最適性の主張ではない。

## 1. 公式順の収録論文

CATALOGINVENTORYTOKEN

## 2. 読む入口

まず[主定理の証明概略](../snaky-in-21-maker-moves/article.ja.md#proof-overview)で「条件の合成→空要求→一つの方策」の接続を読む。[合成補題](../snaky-in-21-maker-moves/article.ja.md#proof-1)は全応手を覆う理由、[有限証明書](../snaky-in-21-maker-moves/article.ja.md#proof-2)は21という数値の由来を説明する。盤面・先後・目標形は記事の主要結果にまとめた。

単論文のため、論文間の分類や関係図は置かない。証明内部の分岐と合流は記事の全体図・合成図にまとめ、細部の交差計算は表で示す。他カタログとの直接依存・帰結・別証明・一般化は未調査であり、「関係なし」とは扱わない。

## 3. 原典と確認範囲

<!-- cite:catalog -->[OpenAI Research Catalog · Catalogue 187; Combinatorics · p. 20](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf)<!-- /cite -->

分野の正式英語表記と順序は公式overviewに従う。Combinatoricsは第7の分野見出し（subject ID 13）、番号範囲155–192、PDF pp. 17–21。本件はp. 20。参照版は2026年10月6日付overviewを含む公式固定コミット1581d4cbdd69a0faf34b2089614fe2a814316a6aである。

新稿はAstraが原典から執筆し、ゲームの量化、合成の両手番の結論、最終交差、方策化、実着手数、有限盤への制限を自己点検した。著者提供の二つの再構成器を新たに実行したが、専用局所応手検査やLeanコンパイルは未実施。全確認範囲と未確認事項は[記事末尾](../snaky-in-21-maker-moves/article.ja.md#sources)に示す。

本案内と記事はAI生成の解説である。原典の代替や数学的正しさの保証とはせず、研究で用いる際はリンク先の原稿・証明・データを確認されたい。
