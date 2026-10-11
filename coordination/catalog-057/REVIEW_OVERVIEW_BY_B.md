# カタログ057案内の独立内容点検（担当B）

2026-10-11 JST。対象：`drafts/catalog-057/overview/` の日英記事、presentation.json、connections.json、citations.json、diagrams/connections.tikz。変更は本報告書のみ。

公式固定commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb` のCONTENTS.md 1481–1508行、overview.tex 190行、3記事と固定論文を対照した。Aは直前に行った独立レビュー（REVIEW_A_BY_B.md）を継承し、Bは執筆時の原典照合に加えpp.1–5を再読、Cはpp.2,5–6,9と第3記事の主要結果・移行・構成節を再読した。本点検はカタログ要約と依存関係の点検であり、論文の全証明を独立再証明するものではない。

## 要修正

1. **冒頭要約の有限指数条件。** 日英article冒頭の「開多様体の線形像の二段冪零性 / class-two nilpotence of linear images in the open setting」にはvirtual/有限指数条件がない。B Theorem 1.1 p.1は像そのものの冪零性ではなく、有限指数部分群の冪零度高々2である。「線形像の有限指数部分群の冪零度高々2 / virtual nilpotence of linear images of class at most two」などに直す。公式順表ではすでに有限指数条件を保持している。

2. **ファイバー像と交換子を同定する段階。** presentation.jsonのB role「ファイバー群の像を交換子に同定 / Identifies the fibre image with the commutator」はcanonical unipotent Lie quotientでの同定と明記する。原典p.5 (2.4)は通常群で `[Γ,Γ] ⊆ N`、`N/[Γ,Γ] ≃ Tor H₁(V,Z)` とし、torsionがあれば等号を主張していない。修正例：「canonical unipotent Lie商でファイバーの像を交換子Lie代数に同定 / At each canonical unipotent Lie quotient, identifies the fibre image with the commutator Lie algebra」。この区別は第2記事本体にはある。

3. **B要約・図の対象の補足。** presentation.jsonのB claimでcompletionを「有理unipotent completion / rational unipotent completion」、結論を「冪零度高々2 / class at most two」とする。現在の英語“class two”は正確な冪零度2とも読める。connections.tikzのB箱にはVが「連結で滑らかな特殊準射影多様体」であること、ρが有限次元複素線形表現であることを短く示す。現状の「開多様体」の箱だけでは、表示された像の結論が任意の開多様体へ拡大して見える。図の群全体との区別、virtualの表示は適切。

上記を本部に連絡済み。いずれも第2論文の結論をカタログへ圧縮するときの条件省略であり、記事本体の証明説明への指摘ではない。

## 確認できた事項

| 点検対象 | 判定と根拠 |
|---|---|
| 公式順・正式タイトル・原稿版 | presentationの順序、引用ガイド3件が公式CONTENTS・overview.texと一致。2026-09-23/50頁、09-24/19頁、10-05/14頁の対応も台帳・固定PDFと一致 |
| カタログ名 | overviewのCampana's abelianity conjecture and special varietiesとCONTENTSのFundamental groups of special complex varieties and root orbifoldsを区別して記載 |
| A→Cの唯一のcompanion入力 | A Theorem 1.1 p.2＝C Assumption 1.2 p.2を正しく対応。通常の全基本群、任意次元のspecial compact Kählerを次元8で使う。A Theorems 4.1/5.8等を追加前提にしない |
| C構成から適用までの仮定 | C Proposition 4.1が連結・smooth・projectiveの8次元Yを構成しProp3.1全4条件を供給。偶数重複度、連結滑らかな一般ファイバーの余接自明性、通常因子/根因子上のsubmersion点が、特殊性の移行とπ₁(Y)→Gの全射を別々に確保。原典pp.5–6,9と第3記事に一致 |
| AとCの特殊性規約 | AのBogomolov-line基準とC Definition 1.1が通常多様体Y上で一致。粗空間Xの特殊性で根空間の特殊性を代用していない |
| A→Cの結論 | Yは射影ゆえcompact Kähler、specialnessの移行後にAを適用し、有限指数可換部分群の像をGへ送る。根空間の有限多様体被覆や残余有限性を追加しない |
| Cの条件付き表現 | 表・本文・図でAssumption 1.2に基づく条件付き結果と保持。Xの次元4、Dの非空・smooth・connected・reduced、根の位数2を表と第3記事で対応。全群の結論を線形像へ弱めない |
| A→Bの位置づけ | B §1 p.1はコンパクトの場合の背景引用。B Theorems 1.1–1.3の証明への直接矢印はない。connections.jsonもbackgroundに分類 |
| 図の採否 | Aの群全体の入力とCの幾何構成の合流を1図で示し、Bは別の対象として並置。未確認のB→CやA→B証明依存の矢印を作らず、分類カード省略の理由を記録 |
| Bの曲面例 | 非特殊な一般ファイバーと、全空間基本群への自明な像を区別。CDHPへの批判を指定v2のファイバー特殊性に限り、線形像主定理への反証としない |
| 引用 | citationStyle author-key。OpenAI26a/b/cを正式タイトル・版・URLに対応。本文とTeXは同じcitations.jsonを使用し、結果番号・頁は指定原典と一致 |
| 記事導線・共通表 | 日英で同じ各記事・節へリンク。公式順表はCATALOGINVENTORYTOKENにpresentation/inventoryを挿入する構成で、手書きの別順序を作らない。統合後の実URLはStage2担当 |
| 確認範囲・PDF状態 | 著者の主張と編集確認の説明を分け、A解析細部/B完成群環/C Appendix A・外部証明の未確認を列挙。PDFは両言語ともStage2生成予定と明記し、未生成PDFのURLを捏造していない |

## 日英同等性と限界

指摘1–2は日英双方にある共通の圧縮表現であり、内容の翻訳落ちではない。公式順・A→C入力・A→B背景・条件付き表現・未確認範囲・記事導線は日英で対応する。指摘3の“class two”は英語を特に明確化し、日本語も「高々2」にそろえる。

全論文間の一般化・包含関係を網羅的に分類したとは扱わない。CのAppendix Aの別構成、Aの全解析評価、外部定理の全証明は今回の独立点検外。公開サイト・PDF紙面・公開URLのリンク動作も対象外である。修正後の確認を以下へ追記する。

## 修正後の再確認

本部の修正後、日英article冒頭、presentation.jsonのB行、connections.tikzのB箱を再読した。有限指数/virtual条件、canonical unipotent Lie商という同定段階、rational completionと冪零度高々2、滑らかな特殊準射影Vの表示が反映されている。指摘1–3の要点は解消した。図のρは見出しのlinear imageと引用Theorems 1.1–1.2により解釈し、正確な表現の量化と基礎体は第2記事冒頭へ導く。

担当Bによるカタログ内容点検として、未解消の要修正事項はない。再生成後の図面・共通表の画面と生成hashは本部が点検中であり、本報告の原典・内容照合と区別する。
