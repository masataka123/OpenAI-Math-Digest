# 第1記事の独立内容点検（担当B）

2026-10-11 23:26–23:31 JST。執筆担当Aと別に担当Bが実施。対象は `drafts/catalog-057/special-kahler-abelianity/` の日英本文、引用レジストリ、7組の図原本。固定2026-09-23原稿50頁、SHA-256 `dfbf9ad2335b9d20dedd8a2ae527ebb45b74155a976acc6d284dd851144e22b8` を再計算し一致。対象記事を直接編集していない。

原典pp.2–5の全主要結果・帰結の証明、pp.10–11の群論入力、p.11の解析的入力の主張、pp.23–32のTheorem 4.1の核心、pp.37–48の降下・主定理の組立てを本文・図と対照した。Proposition 4.6の全解析的細部やTheorem 3.1の全評価を独立に再証明した点検ではない。

| 対象 | 原典と記事での接続 | 判定 |
|---|---|---|
| Theorem 1.1、同値な被覆表示 | p.2、pp.40–48。通常の全基本群、任意次元、有限指数アーベル群。有限核と格子からLemma 2.6で結論し元の群へ戻す | 本文と主張欄は一致。図の被覆側に条件の省略あり（下記1） |
| Corollary 1.2 | p.2。κ=0→零境界対のspecialness→Theorem 1.1 | κ=0をc₁=0に置換せず、本文・図双方が結論に接続 |
| Corollary 1.3(i) | p.3。有限被覆のtorsion-free abelian群→Albanese lattice同型→最大通常Γ次元→一般ファイバー一点 | specialness、最大Γ次元、連結性を保持。全結論に対応 |
| Corollary 1.3(ii) | p.3。Conjecture SからCⁿ普遍被覆へのAppendixの含意 | (i)との論理関係を別段階として説明し、双有理結論を同型に強めない |
| Corollary 1.4 | pp.3–4。有限指数アーベル群の忠実表現を誘導→CCE14 Corollary 5.9 | 通常の普遍被覆の正則凸性。Stein性とはしていない |
| Corollary 1.5(i) | pp.4–5。最小次元反例→CH13 Proposition 1.4→smooth special→deck群への商 | 基底はnormal compact Kähler、コンパクト化はnormal compact complex。非普遍deck群を全基本群と混同しない |
| Corollary 1.5(ii) | pp.4–5。π₁の有限・無限を処理→Kählerコンパクト化下のCH13 Theorem 1.5→Albanese束→Oka–Grauertと単連結FでU≅F×C^q | 有限étale被覆、局所自明束、単連結compact Kähler fibre、普遍被覆の積の全結論を説明。X′そのものの積とはしない |
| Theorem 4.1の主張欄と証明節 | p.23、pp.24–32。有限指数Q₀ごとに先に1つのS′を選び、後の全無限商に(M)。非amenable/amenable→Hilbert tensor→最小rank・離散monodromy→full rank→ordinary big line→射影性→CP19 | 独立節の前に仮定・全結論・番号・頁があり、量化と正値性適用の順序を保持 |
| Theorem 5.8の主張欄と証明節 | pp.37–40。固定actual quotient、cofinal prepared models、最小logκ、補助境界、torus bundle、真のinertia回収、neatモデルの極相殺 | 補助境界と真の境界を区別。任意モデルでのlogκ不変性は仮定しない |
| 主定理への全体接続 | pp.40–48。exactness→FAb→相対最小底→2つの表現の場合→各モデルでfresh very general fibre→Theorem 5.8→N有限 | 全体図を詳細節より前に置き、二分岐と合流を説明。単一モデルのbignessで降下仮定を代用しない |

## 外部原典の再照合

各PDFはAのキャッシュを読み、`sources.json`の10件のSHA-256とすべて一致した。結果の記述と対象原稿での適用を再照合した箇所は次のとおり。外部結果の証明全体は再検証していない。

- Cam04：Theorems 2.26, 5.12、指定v9 pp.27,56。Bogomolov層の特徴づけ、有限étale被覆でのspecialness。
- Cam23：Theorem 1.2(1)–(2)、誌面1904/PDF3。Albaneseの全射・連結性として使用し、(3)のprojective-target条件を一般トーラスへ拡張していない。
- BW16：Definition 1.1 p.1、Theorem 1.3 p.2。arithmetic translateから孤立点のtorsion性。
- CCE14：Theorem 1 p.2、Corollary 5.9 p.26、Theorem 6.3 p.29。torsion-free semisimple像と一般型底、忠実線形性と正則凸性は別入力。
- Sha06：Theorem 4.2、誌面1300/PDF1310。OCRで不等号が欠けるため画像も確認（`tmp/catalog-057-b/review-a/shalom-p1310.png`）。有限生成非(T)群の非零reduced H¹であり、記事の使用と一致。
- Bou02：Theorem 1.2 p.2。ordinary lineの正currentと正のvolume。
- CP19：Theorem 7.11 p.42。ordinary big lineからorbifold adjoint big。本文は射影性の確立後に適用。
- JW21：Main Theorem A(II) 誌面815/PDF4、Theorem C 誌面818/PDF7。klt劣加法性の底は任意の複素トーラス、κ=0対のAlbaneseはfibre space。
- Cam11：Theorem 6.7 指定v8 p.92。零境界の場合へ適用。
- CH13：Proposition 1.4 誌面357/PDF4、Theorem 1.5 誌面358/PDF5、Appendix A Remarks A.4(2)–(3) 誌面371/PDF18。2種類のcompactification仮定と被覆結論を照合。

## 日英・形式・図

日英本文を節ごとに比較し、数学的仮定・結論・順序・確認範囲に不一致を見つけなかった。各言語の引用管理箇所51件、証明対象7件、中間主張欄2件が対応。conclusionCoverageの10結論は本文の説明先と対応する。7図原本の矢印の説明・引用を読み、日英14図のコンタクトシートと主定理日本語図・Hilbert英語図の拡大を点検した。原稿の主張紹介と編集側の確認範囲は分離され、主要結果以外を独立節で扱うTheorems 4.1/5.8には図前の主張欄がある。

## 初回指摘

1. **要修正（図の条件省略）**：`diagrams/main.tikz`最終箱の「有限指数アーベル部分群 ↔ 有限不分岐正則被覆」および英語側の右辺は、「基本群がアーベル / with abelian fundamental group」を省略している。通常の有限被覆だけとの同値にはならないため、日英図に条件を追記する。本文と冒頭のTheorem 1.1はすでに正確。Aへ修正を依頼済み。

上記以外に、照合範囲内で数学的な食い違い、主要結果の脱落、説明先の欠落を見つけなかった。修正後の再確認は以下へ追記する。

## 限界と引継ぎ

Theorem 3.1の全解析的評価、Proposition 4.6のimage-germ・direct integralの全細部、Theorem 5.8の全モデル比較の独立再証明はしていない。Oka–Grauertの別原典照合が未実施である旨は日英本文に明記されている。独立点検済みとは、この記録の原典照合を意味し、論文の完全な証明検証・専門家査読を意味しない。公開URL・冊子PDF・033/034との本番画面比較はサイト本部の第2段階へ引き継ぐ。

## 修正後の再確認

2026-10-11 23:33 JST、Aの追加編集を受領。main.tikzの右辺に「基本群がアーベルな有限不分岐正則被覆 / finite unramified holomorphic cover with abelian fundamental group」が追記され、日英の最新画像で条件・改行・矢印余白を再確認した。生成ハッシュ39件も独立に再計算し不一致0。初回指摘1は解消。担当Bの独立原典点検として未解消の要修正事項はない（上記の確認範囲外は残る）。
