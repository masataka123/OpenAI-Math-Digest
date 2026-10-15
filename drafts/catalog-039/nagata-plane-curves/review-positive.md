# 正標数記事の執筆者外内容点検

- 点検担当：plane（Nagata記事担当）。対象記事執筆者：本部。
- 点検日時：2026-10-15 15:18–15:20 JST。Nagata初稿の11分とは別枠。
- 対象：`drafts/catalog-039/maximal-seshadri-positive-characteristic/article.ja.md`、`article.en.md`、`sources.json`、`citations.json`。
- 原典：OpenAI, *Maximal multipoint Seshadri constants in positive characteristic*, October 5, 2026、固定commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、17pp。
- 範囲：原典の主結果および§§2–6の本文を読んで記事の主要接続を照合。p.1は画像でも確認してK_rの上線を読んだ。外部Stacks各原文の再照合は本部記録を参照し、今回の相互点検では再実施していない。専門家査読・形式検証・全証明の独立再検証を意味しない。

## 結果

重大な仮定・量化・結論の不一致は検出しなかった。次の対応を確認した。

| 項目 | 原典 | 記事側の対応・所見 |
|---|---|---|
| 幾何学的一般点 | p.1, (1.1) | K_r=overline{k(U_r)}。画像で代数閉包のバーを確認。基礎体kの非可算性を要求しないこと、任意閉点の結論ではないことが日英一致。 |
| Seshadri正規化 | p.1 | 整曲線でのL·C/Σmult、少なくとも一点を通る、通らない点の重複度0、等重み。高次元cycle版ではない。 |
| Theorem1.1 | pp.1–2 | smooth integral projective、ample、char p>0、n≥3、あるr0以後の全整数r。r0より小さい全rの解決とはしていない。 |
| n=2 | Remark6.3 p.16 | 旗・reshaping・jet・intersectionがn=2を許すこと、reshapingが一度で済むことまで説明。 |
| Proposition4.1 | pp.8–11 | 正切片、graded族、H=AB、d=max(3/A,2/B)、dw<1/16、全次数で個数とgradednessと後向き移送を保存。独立節の前に仮定・結論がある。 |
| nodeと圧縮 | Lemmas4.2–4.3 pp.9–11; Lemma2.6 p.6 | 標数2でも0,-1が相異なる。固定座標と順序、次数依存の補助重みを区別。圧縮が標数pで連続整数を埋めるとはしていない。 |
| formal transfer | Lemma2.4 pp.5–6 | 非零小行列式→非空開集合の流れは正しい。下記補強提案あり。 |
| Proposition5.3 | pp.13–14 | 各r≥r0、各0<theta<w、あるN0(r,theta)、全N≥N0。実際のk点組はN依存を許す一方、幾何学的一般点は固定。 |
| interior filling | Lemma5.1 p.12 | 密度だけではなく加法性を使い、cN^n個の分解とo(N^n)個の欠損を比較。 |
| CRT補間 | Lemma5.2 p.13 | |beta|+b/r<m+1、deg h_alpha<r(m-|alpha|+1)、階乗不要。内部への平行移動は単項式unitでjet分離を保存。 |
| generic tupleへの移行 | Proposition5.3 p.14 | 各有限次数の非空開条件に同じ一般点が属する。k閉点で可算交叉を選ぶとの誤記なし。 |
| 下界 | Lemma6.1 p.15, proof p.16 | 曲線上非零なjetを一点で指定するため切断は曲線を含まない。length>=m e、N→∞ then theta↑w。 |
| 上界 | Lemma6.2 pp.15–16 | blowupの例外曲線・狭義変換別のnef確認、D_s^n=V-rs^n≥0。上界と下界を混同しない。 |
| 境界のnef性と零交点数 | p.2; pp.15–16 | nef錐閉性から境界類のnef、数値計算からtop square zero。strict nefは主張しない。 |
| カタログ内関係 | §1.1 p.2, §4 p.8 | 曲面・高次元の方法を再証明し最大性定理を入力しない。backgroundの分類は妥当。 |

## 非必須の補強提案（本部へ送信済み）

本文「形式座標を用いるだけでは補間は移らない」段落は、最大階数から実際のjet分離へ移る最後の根拠を少し省略している。原典p.6に沿い、次の一文に相当する説明を足すとよい。

> δ=0で得るk((s))-点におけるjet代数を通じて代入が因子化し、標的と同次元なので全射性から同型となる。中心の重複も全射性に反するため、相異なる実際の点のjet分離が得られる。

これは現在の本文が誤っているとの指摘ではなく、ユーザーが重視する「formal transfer→一般点」の非自明な接続を読者が追えるようにする提案である。

## 形式・表示の限界

mainResults／statements／conclusionCoverageは主要結果・中間命題と対応している。日英の対象・式・節・限界は一致。本レビューでは対象記事のSVG画面・375px本文表示・PDFを検査していない。原稿完成と公開準備完了は区別する。
