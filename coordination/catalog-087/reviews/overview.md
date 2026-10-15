# カタログ087案内の独立内容点検

- 担当：general担当、明示指定 `gpt-6-astra`。案内執筆者とは別担当。
- 開始：2026-10-15 21:42:04 JST。初回点検終了：21:47 JST。general初稿の終了後に行った後続内容点検であり、初稿の60分枠とは別記録。
- 対象：`drafts/catalog-087/overview/` の日英本文、presentation.json、connections.json、relations.tikz、日英図PNG、sources/citations。公式inventory、CATALOG_STRUCTURE.md、各記事の説明先も照合。
- 版：公式commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。3論文ともSeptember 22, 2026。

## 判定

主要な数学的接続・公式順・日英に重大な不一致は認めなかった。図の一般定数比較に次元限定を加える小修正を執筆者へ依頼した。修正反映は下記追記で確認済み。全証明の独立検証を意味しない。

## 実際に照合した原典と接続

- Symmetric原典pp.1–5（Theorem 1.1、§1.1、Corollaries 1.2–1.3と証明案内）。原点対称・n≥1、下界4^n/n!、線形Hanner体の必要十分な等号分類。正則質量→実単体→欠損消失→witness→metric medianの役割は案内と一致。全次元幾何から偶関数型4^n、essential continuityを持つ対称全次元log-concave確率測度のentropy–transportへの分岐も一致。
- General原典p.1、p.4、§§3–7の主要証明接続（先行記事執筆時の原典読解）、§8 pp.40–41。Santaló中心、一般定数(n+1)^(n+1)/(n!)²、単体等号分類、正双対錐→Gaussian正規化→非可換欠損→厳密区間評価、全次元から非偶関数型e^nへの帰結に整合。一般定数と対称定数の厳密な差はn≥2。
- Symplectic原典p.1、Background p.2、§3 p.7以降、Corollary 5.3 pp.16–17、Corollary 5.5 p.17。先行交差点検では主証明pp.4–17も読了。実2n次元、n≥2の幅4と各0<c<4の埋込み、体積保存による下界4^n/n!、n=1直接計算、Hanner分類の非包含が整合。共有レンズは背景であり、companionの体積・等号定理を幅の入力としないとの原典の明示に一致。
- 外部343：公式CONTENTS/overview.texの収録と、ダウンロード済み原典 *Symplectic Ball Packings in Higher Dimensions*, September 23, 2026、Theorem 1.1 p.2、§1.4 p.4（先行幅点検時に読了）。n≥3、閉球近傍から開球、正容量、厳密な総体積・異なる二容量の和条件。幅論文Corollary 5.5でのみ使用する帰結入力であり、主幅・Mahler証明の入力とはしていない。極体積への十分条件を必要条件と誤記していない。

## 公式順・役割・関係・導線

1. presentation.rowsは公式順Symmetric→General→Symplectic。正式題名・Theorem番号・ページがinventory/原典と一致。claimとroleを分け、等号分類の有無を混同しない。
2. connectionsの共有レンズはbackground、同じ対称下界への到達はalternative、一般と対称の定数差は比較、外部343は充填帰結への入力として記録。3原稿を逐次の証明依存鎖にしていない。未記録の関係を依存なしと認定しない。
3. 1枚の総括図は二経路が同じ下界へ合流することと、Hanner分類の追加性を示すため有用。一般体の箱に上から矢印を置かない判断が適切。関数型・輸送・充填の詳細は短表と記事導線へ分離。固定数の分類カードや空の依存表は不要との理由が具体的。
4. 本文の日英で数式・条件・結論・確認留保が対応。本文の幅リンクproof-1、体積proof-4、充填proof-5、対称proof-overview/4/5、一般general-bound/general-equality/proof-2/3は各節の数学的内容と一致。generalの明示spanも実在。共通rendererでの全リンク実在検査は本部の検証記録と分ける。
5. 日英relations PNGを目視し、引用・矢印・箱の重なりや文字欠落なし。原稿画面の共通見本比較・スマートフォン実表示は本部担当。

## 指摘

- 軽微・修正要：relations.tikz最下段の「対称体へ制限しても鋭い対称定数は出ない」および英語にn≥2がない。一般原典p.1、対称原典p.3に沿い、本文と同じ限定を入れる。n=1では両定数は4で一致する。
- 明確化：packingのR_i+R_j<4にはi≠jを日英で明記。原典343 Theorem 1.1 p.2に一致させる。
- 表記明確化：表・図の容量c<4を0<c<4にすると正性が明示される。capacityの文脈で意味は読めるため主要誤りとは扱わない。

## 未確認の境界

一般版の全有理証明書・解析補間・尾部評価の再計算、各外部定理の全証明、参考文献の再帰的検証、3論文間の全関係の網羅調査はしていない。案内が述べる具体的な主要接続とその原典記述の照合であり、専門家査読・形式的証明検証ではない。第2段階の公開組込み・日英冊子PDFは本レビューの対象外。

## 修正後確認（2026-10-15 21:49 JST）

n≥2の図原本、packing i<jの日英本文、presentationの0<c<4を確認。担当が図の再生成・画像確認を報告した。本部が見つけた分野順のmetadata誤りも、公式overview.tex56–59を独立に読み、Convex and metric geometryは目次第4位、subject8はIDであることを確認した。inventoryのofficialOrder4/subjectId8と日英本文の第4分野への修正は整合。以上で内容点検指摘は解消、主要接続について受領可能。最終ページ画面・数値検査は本部で別記録する。
