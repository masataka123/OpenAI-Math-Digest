# 独立内容点検 — カタログ003案内

- 担当・モデル指定: `../MODEL_PROVENANCE.json` の `astra_review`。日付2026-10-23。
- 対象: 日英overview、presentation.json、connections.json、sources/citations、comparison.tikz。各記事と固定公式原典の主張・主要帰着に照合。
- 判定: 数学的内容と構成を確認範囲内で受領。ROV-1/2は日英・関係記録・図への反映を再確認済み。

## 指摘と対応

| ID | 指摘 | 根拠 | 状態 |
|---|---|---|---|
| ROV-1 | 比較図より前に、引用キー・著者・正式タイトル・版・使用結果の文献案内を置く。末尾のキーだけの案内から移す。 | FORMAT_CONTRACT/CITATIONSの図前文献一覧 | 解決。共通引用記録から生成する日英reference-guideを図前へ移動し、末尾重複を除去。 |
| ROV-2 | connections第2辺のkind=consequenceは規約上『帰結への入力』なので、実際の証明入力でない結果包含はgeneralization等で表し、editorial-result-implication/proofInput:falseを保持する。 | RECORDSの関係種別、3稿の原典 | 解決。第2辺もgeneralizationへ変更、関係の詳細とproofInput:falseを保持。 |

## 数学的照合

- 公式順は199ページ7/8稿→49ページ11/12稿→9ページLandau–Siegel稿。名称・結果番号/ページ・日付・F/K=Q(sqrt(-3))はinventoryと一致。日付の前後によるsupersessionを推定していない。
- 第1・2稿は同じ全finite-order Hecke/全Dirichlet族、全導手・全虚部。strict Re s>7/8の集合がstrict Re s>11/12を含むため前者の無零主張が強い。境界上を主張せず、principal s=1 poleを保持。
- 11/12主張をprimitive nonprincipal real characterのreal beta∈(0,1)、q>=3へ制限すると beta<=11/12、従って (1-beta)log q>=log(3)/12。これは主張を前提とする編集側の初等的含意であり、LS原稿が明示したcではないと明記している。
- LSの対数幅のreal gapから全高さのfixed complex half-planeは導かれない。逆方向の矢印を作っていない。
- 7/8稿内部のTheorem 3.1と独立49ページ稿のTheorem 1.1を区別。前者のPart I→IIは内部の直接入力、後者の7/8引用は強い結果としての位置づけでありProposition 3.1の入力ではない。
- 7/8稿の反射/Poisson同一和比較、49ページ稿のMöbius平均二乗・cube逆変換反復・prime sixth-power rows、LSのprime bias・interpolation・Frobenius divisibilityの方法差を記事と原典に照合。
- 3稿間の直接入力については『確認した主帰着/終結で記録なし』とし、199ページの全引用の網羅調査や完全独立性の認定にはしていない。
- presentationの3行は対応する全結果への短い主張と方法を持ち、11/12 Cor1.2の外部定数管理が保留であることも維持。番号1.2が同じでも2稿の系の内容が異なることを説明。
- 比較図の2辺は主張の包含/初等的含意として正しい。各矢印に両端の原典結果を引用し、破線と説明でproof inputではないことを示す。

## FORMAT_CONTRACT第6節の構成判断

- **伝えるもの:** 主張の強弱と対象範囲の違い、方法の違い、記事を読む入口。
- **図をまとめた検討:** 7/8→11/12→実零点log-gapの連続した弱化は、個々の一対一辺を列挙するだけより一つの比較図が有効。内部11/12と別稿を同一ノードに混同しない注記を本文で付す。
- **役割分担:** 公式4列表は公式順・主張・方法・記事状態、比較図は2つの包含関係と方法の要点、直後の文章は集合の包含・cの計算・proof inputとの区別、読む入口表は記事の該当節への導線。全部の論証詳細を案内で重複させない。
- **採否:** 比較図1枚を採用。固定の分類数・選択UIは不要。確認されたcross-paper proof inputがないため直接依存表は省略し、調査範囲と未記録の意味を保持。図の省略で3稿の強弱関係が一覧だけに埋もれるより、現在の図が有用と判断。

## 保留と確認版

各記事の独立点検記録に列挙した未確認範囲を案内も維持する。確認版の同一性はoverview-content-manifest.jsonへ機械保存した。第1段階のため冊子PDFは未生成とされ、図前/一覧の画面比較は本部validationを参照する。

最終再確認: comparison.tikzの両半平面の箱に主指標s=1の極が明示され、日英TeXへ反映されている。図前文献案内の正式タイトル・著者・版・用途・リンクと、STRUCTURE_DECISION.mdの構成判断も受領した。
