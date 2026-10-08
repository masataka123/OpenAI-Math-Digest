# カタログ033の準備調査と出典

2026年10月8日の準備調査を担当へ引き継ぐ。書誌、主結果の記述、選んだ入力と使用箇所を確認した記録であり、5篇の証明全体の検証や全依存関係の調査ではない。以下の執筆上の着眼点は、担当が本文で照合してから記事に使う。

## 公式分類と参照版

- 分野：**Algebraic and complex geometry**。概要PDF p.5。分野目次の番号範囲は032–069だが、他分野に属する番号の欠番があるため連続所属と解釈しない。
- 033の正式見出し：**Campana's orbifold Iitaka conjecture and logarithmic subadditivity**（overview.tex / overview.pdf p.5）。
- CONTENTS.mdの見出し：**Iitaka subadditivity, variation, and logarithmic additivity.** 別表記として記録し、サイトの正式名は概要に合わせる。
- 参照commit：`fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。これは準備調査で固定した版であり、担当開始時の最新版を意味しない。
- [公式一覧](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/CONTENTS.md)、[概要TeX](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/overview.tex)、[概要PDF](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/overview.pdf)。

| 033内の順 | 正式タイトル | 原稿日付 | 参考文献込みページ数 | 主結果の記述 |
|---|---|---|---:|---|
| 01 | [Orbifold and logarithmic Iitaka subadditivity][OI] | 2026-09-26 | 55 | Theorem 1.1 p.3、Corollaries 6.2–6.3 pp.40–41 |
| 02 | [Logarithmic Kodaira dimension and whole-fiber variation][WV] | 2026-09-26 | 75 | Theorem 1.1 / Corollary 1.2 p.2、Corollary 1.3 p.5 |
| 03 | [The reverse logarithmic Kodaira inequality and additivity][RA] | 2026-09-26 | 51 | Theorem 1.1 / Corollary 1.2 p.2、Proposition 1.3 p.3 |
| 04 | [Projective Hodge lines and ordinary Iitaka subadditivity][PH] | 2026-09-27 | 40 | Theorems 1.1–1.2 p.2 |
| 05 | [B-semiampleness for compact log-smooth Kähler fibrations][BS] | 2026-09-10 | 38 | 設定p.2、Theorem 1.1 p.3 |

全5PDFを取得してページ数とタイトル・日付を確認し、公開034の基準commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a` の同じ5PDFと比較した。5篇ともSHA-256が一致する。値と取得URLは [inventory.json](inventory.json) に保存。

## 既存記事と調査の所在

準備調査時、作業先の `src/`、`research/`、`coordination/`、`drafts/` には033の独立記事・専用台帳はなかった。今回作成した指示書・inventoryが033専用の準備資料となる。記事はまだ作っていない。

01については034の外部入力として次の記録がある。02〜05の専用記事・調査記録は見つかっていない。

- [research/la-reading-notes.json](../../research/la-reading-notes.json)
- [research/catalog-034-reading-notes.json](../../research/catalog-034-reading-notes.json)
- [Conditional Kähler modelsのsources](../../drafts/catalog-034/conditional-kahler-fourfolds/sources.json) と [日本語記事](../../drafts/catalog-034/conditional-kahler-fourfolds/article.ja.md)
- [Kähler abundanceのsources](../../drafts/catalog-034/kahler-log-abundance/sources.json) と [日本語記事](../../drafts/catalog-034/kahler-log-abundance/article.ja.md)
- [LAの記事データ](../../src/data/la.mjs) と [Schnellの記事データ](../../src/data/schnell.mjs)

古いカタログ調査の「受け手のみ確認」という記録と、後の個別記事の「入力記述と適用を照合」という記録には時点差がある。広い確認済み表示へ一括変更せず、結果ごとに後者の出典と確認範囲を引き継ぐ。

## 034と接続する結果

表の034側は公開記事と同じ旧commitの原稿。準備調査ではLA、Kähler abundance、Conditional Kähler models、SchnellのローカルPDFを既存034 inventoryのハッシュと照合した。

| 供給元 | 利用先 | 関係と役割 | 準備調査の確認範囲 |
|---|---|---|---|
| OI Corollary 6.2 pp.40–41 | LA Theorem 1.2 p.6 → Lemma 6.1 pp.30–31 | `direct`。境界0の射影的Albaneseファイブレーションに劣加法性を適用 | 既存記録あり。入力記述、受け手の定式化、使用箇所を再照合。LA p.6はHacon–Popa–Schnell Theorem 1.1による代替も明記。今回その外部論文全体を再検証していない |
| OI Theorem 1.1 p.3、基底定義pp.2–3 | Conditional Kähler models Assumption 2.2 pp.7–8 | `premise`。係数1を含む任意次元のclass C orbifold劣加法性 | 既存記録あり。定理文と前提を再照合。既存記録の使用先は§§3–4、Lemmas 6.2 / 8.3。neat-model理論と入力の全証明は未検証 |
| OI Lemma 2.6 p.9、Lemma 5.2 p.32 | Kähler abundance §5.1 p.91 | `direct`。相対飯高への帰着、stable familyとの比較 | 既存記録あり。入力の記述と受け手の適用箇所を照合 |
| OI Proposition 2.7 p.10、Theorem 3.1 pp.17–18 | Kähler abundance Lemma 5.2 pp.91–94 | `direct`。切断比較と実際の有理Hodge line、随伴正値性 | 既存記録あり。入力記述と受け手pp.91–93の比較を確認。全構成の独立検証ではない |
| OI Lemma 3.3 p.18 | Kähler abundance Lemma 5.7 pp.98–99、特にp.99 | `direct`。bigな底の捻りによるeffectivityと補間 | 既存記録あり。入力の仮定とp.99の適用を照合 |
| LA Corollary 11.2 pp.73–74 | WV Corollary 1.3 p.5 | `consequence`。非uniruledな滑らかな射影ファイバーにgood modelを与え、Tajiの結果を適用 | 今回追加で確認。入力定理文と帰結の証明を照合。Taji等の全証明は未検証。WV Theorem 1.1への入力ではない |

Kähler abundanceのAssumption 1.1は維持する。Proposition 2.10 p.12が引用するLAの帰納法は、劣加法性をLA Lemma 6.1の境界0の場合で使うと説明している。

Schnellへの既存の直接入力はLA Corollary 11.2 → Schnell Theorem 3.1 / §4.1である。OI → LA → Schnellという経路を、OI → Schnellの直接依存として登録しない。

公式の今回の固定版では034のKähler abundanceとConditional Kähler modelsのパスはともに10月6日版に進んでいる。公開記事が扱う10月4日・5日版の接続と混ぜない。新版の本文差分は今回の準備対象外。

## 033内で確認した接続と未調査の範囲

| 関係 | 原典箇所 | 確認と取り扱い |
|---|---|---|
| OI → WV の下界 | OI Corollary 6.2 pp.40–41、WV Theorem 2.1 p.6 | 入力記述と受け手の定式化・引用を照合 |
| OI → WV の随伴正値性 | OI Theorem 3.1 pp.17–18、WV Theorem 3.8 / Proposition 3.9 p.21 | 記述と使用を照合。complex summandとentire highest lineの範囲を区別 |
| OI → RA の加法性 | RA Corollary 1.2 p.2、Theorem 7.8 / §7.6 p.50 | OI Corollary 6.2を下界として使う箇所と仮定を照合。RAの上界Theorem 1.1の依存へ移さない |
| OI → WV §§8–9の追加結果 | WV Proposition 9.1 pp.69–70はOI Proposition 2.7、Lemma 7.1、Corollary 7.2、Lemma 7.4を引用 | 引用箇所を確認。これら追加結果の全接続の照合は未完了。主定理の必須経路としない |
| PHとOIの通常劣加法性 | OI p.5、PH §§1 / 6–7 | 別の証明経路として紹介されることを確認。題材の類似だけで直接依存の矢印を付けない |
| PH → WVの比較記述 | WV p.25はPH Lemma 8.4 / Theorem 8.1を別のadjoint comparisonとして引用 | 受け手の引用のみ確認。担当B/Dが具体的役割を確認するまで主定理の直接入力としない |
| BSとOI | BS p.3 | BSはCampana orbifold Iitaka theoremを使わないと明記。ただしこれを全論文間の「依存なし」の確認へ広げない |

この表は網羅的ではない。他の辺、外部文献の証明、各稿の細部は未調査。各WORKERの読解候補は本文の目次・主結果・上記の接続から選んだ作業案であり、既に証明確認が完了した範囲ではない。

[OI]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf
[WV]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026/paper.pdf
[RA]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf
[PH]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Projective-Hodge-lines-and-ordinary-Iitaka-subadditivity-September-27-2026/paper.pdf
[BS]: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/B-semiampleness-for-compact-log-smooth-Kahler-fibrations-September-10-2026/paper.pdf
