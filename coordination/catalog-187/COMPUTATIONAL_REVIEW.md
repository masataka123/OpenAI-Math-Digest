# Catalogue 187 — 今回の計算資料点検

担当：Astra本部。2026-10-15。旧Solの実行記録・結果は根拠にしない。

公式コミット `1581d4cbdd69a0faf34b2089614fe2a814316a6a` から、証明書・短い検査器・別実装を新規取得した。取得URL、サイズ、SHA-256は `astra-20261015/sources/manifest.json`。原稿の主定理は、有限集合の評価に加えてLemma3の意味論と§4の方策化を必要とする。

| 資料 | 役割 | 今回の実施と結果 |
|---|---|---|
| `verification/certificate.txt` | 21手構成の722行、六基底からの条件合成 | 新規取得。SHA-256 `3fa12d36a6d4dbb185e3f2808c8dfde13d85ee309afbca030d6ad17ae9fe3d04` |
| `verification/verify_certificate.py` | 後方参照・変換・集合演算・高さの短い再構成、最終条件と追加assert | コードを読んでPython通常モードで新規実行。PASS、728card、最終A空、|T|251、h21。全最大h、17×17包含、最終交差表等もassertを確認 |
| `verification/supporting/independent_evaluator.py` | 別の文字単位parserと明示行列による再構成 | コードを読んで新規実行。PASS。全1,620合成、898inline、4,089参照、8行列・64合成対の検査。全cardとpostorderの出力を保存 |
| 原稿§6.1、AppendixG.1の追加検査群 | 全中間結果の一致、局所応手クラス37,042、誤入力拒否など | 著者報告として読解。専用suiteの取得・実行は未実施 |
| `lean/docs/187.md` | 形式化の対象の公式説明 | 新規取得して読解。21手無限盤の合法方策と旧35手／条件付き補遺を区別。有限盤の制限を含めないという記述を確認 |
| Lean本体・探索 | 主定理の機械形式化、戦略探索など | ソース監査・コンパイル・探索は未実施。推測して補わない |

実行ログは `astra-20261015/validation/reconstruction/primary-run.json` と `second-run.json`。どちらもexit 0。実行時間はそれぞれログに記録（1秒未満）。大規模探索を追加していない。出力 `INDEPENDENT-RESULT.json`, `INDEPENDENT-CARDS.json`, `INDEPENDENT-POSTORDER.json` を保存。両実装が返す最終値とTable1を原稿に照合したが、全中間集合の相互比較を実施したとは記録しない。

再実行はsources内のプログラムを直接呼ぶ。短い検査器は既定で同じディレクトリのcertificate.txtを使う。別実装の正確な引数・作業先はsecond-run.jsonを参照する。`python -O` を使わない。再実行出力を今回の原記録に上書きせず新しいrun名で保存する。

図4の盤は今回出力の `final.T` を使う。`astra-20261015/make-board-source.py` が有限盤のTeX原本を再構成し、記事の `diagrams/render.py` が日英TeX/SVGを生成する。これは画像のための集合の描画であり、新しい数学的検証器ではない。
