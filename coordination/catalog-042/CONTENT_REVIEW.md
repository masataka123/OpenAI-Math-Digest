# 042 初稿の内容受領記録

2026-10-10、042本部兼記事担当。制作セット1.3。著者の主張の紹介と編集側の原典照合であり、全証明の独立検証・専門家査読ではない。

## 主張と全結論の照合

| 対象・原典ページ | 仮定・量化・結論の確認点 | 記事の説明先（日英共通） | 状態 |
|---|---|---|---|
| Theorem 1.1 p.2、証明p.52 | 任意の複素K3、任意m≥1、非空コンパクト凸K、任意近傍と正則f、任意ε、指定Hermitian距離。射影性を追加しない | proof-overview、proof-1 | 主張と三分岐の接続を照合 |
| r=0、Proposition 7.1 pp.37–44、Lemma 9.1 pp.51–52 | 全period domainの非空開集合、軌道の交差、Torelli移送 | proof-overview-step-1、4 | 構成の主要接続を読解。全atlas評価は未検証 |
| r=1、Theorem 8.1 pp.44–50、Lemma 9.1 pp.51–52 | primitive positive v、D_vの相対開集合、固定vの軌道。[Im σ]=v、(σ,e)≠0 | proof-overview-step-2、4 | safe action、異なる二葉、例外除去を読解。全格子構成・一様評価は未検証 |
| r=2、p.52、Proposition 5.1 pp.28–31 | P⊥の符号(1,19)、正の整(1,1)類、射影性、異なる次数のgenus-one族 | proof-overview-step-3 | 主張・曲線族の記述・flowの適用経路を照合 |
| Theorem 3.1 p.12、Definition 2.1 p.5 | 完備compatible distance、全点L、special pair、全passive parameter、q=0、全次元CAP | 図前theorem-3-1、proof-1-step-1〜3 | 独立主張欄あり。実面貼合せまで記載。全定数の独立検算なし |
| Theorem 6.1 pp.31–32 | 円筒、零点なし2形式、全j∈Z、L_j≥1、共通h,r,A、degree-one exact transition、一様小誤差、余裕 | 図前theorem-6-1、proof-2-step-1〜3 | 原典主張を照合 |
| Theorem 6.1の全結論 | 正のb、周期1のsymplectic immersion、各blockの小座標変更、pure shear、有限階導関数、L_j上界・block数上界不要 | proof-2-step-2、3 | すべて文章に対応。反復・幾何的適用条件の全検証は未了 |
| Corollary 1.2 p.2、証明p.53 | 指定値・正確な非零接ベクトル・immersion・通常稠密・射影的ならZariski稠密 | proof-3-step-1〜3 | 全結論と外部次元条件を照合 |
| Corollary 10.2 p.54：κ=0 | K3、nodalを含む全Enriques、tori、bielliptic、Kodaira | proof-4-step-1、2 | 被覆と降下、既知の残りの例を区別 |
| 同：class VII、b₂=0 | HopfはOka、Inoueは非Oka | proof-4-step-3 | FL Theorem 4の正負を照合 |
| 同：class VII、b₂>0 | GSSの仮定b₁=1、b₂>0、κ=-∞、極小・連結・コンパクト。Katoの三種類からEnokiのみOka | proof-4-step-4 | 060の主張と適用のみ。060の証明は未検証 |
| 同：必要十分条件 | 正例で十分性、負例と網羅性で必要性。blowup/properly ellipticは範囲外 | proof-4-step-5 | 全場合とiffを記載 |
| Corollary 10.3 p.54 | projective K3と全Enriques、それぞれprojective＋Oka。大域dominating spray | proof-5-step-1、2 | 2対象の両仮定を照合。非射影的K3に広げない |

## 引用・読解の範囲

- 自論文と外部結果をcitations.jsonから本文・TeXへ生成。結果・ページ・URLの単独手入力はしない。
- 外部10原典の取得ファイル・ページ数・SHA-256・参照版・確認ページをsources.jsonに保存。Huybrechtsは著者公開copyright 2015のdraftであり、原稿が引用する2016年公刊版と区別した。
- 結果単位の接続は15件。14件は供給記述と使用条件、1件はVerbitsky erratumの訂正枠組み（background）。本文の入力一覧と照合。
- 原典の追加入力（Ratner、Borel、Borel–Harish-Chandra、Grauert、Siu、Hörmander、Chen–Li等）の外部原典照合は未了。その事実を日英本文・sources.jsonに残した。未調査を依存なしとしない。
- 準備段階の読解はPREPARATION_NOTES.md、初稿段階で追加した外部照合は記事sources.jsonとstatus.mdに区別。

## 日英対応

節の順、主要結果4件、中間主張2件、証明対象6件、全結論の説明アンカー14項目、6組の図、引用順、読書案内11項目を一致させた。表示数式は数式内の自然言語・句読点を除いて自動照合。inline数式は自然な語順による位置・出現数の差があり、機械的な全文同順とはせず仮定・数量・役割を文章として照合した。

## 形式受領と残作業

[FORMAT_REVIEW.md](FORMAT_REVIEW.md)を参照。公開ルート・公開コピー・サイトの図viewer・日英切替・日英PDFはサイト本部で再確認する。初稿受領を公開準備完了としない。
