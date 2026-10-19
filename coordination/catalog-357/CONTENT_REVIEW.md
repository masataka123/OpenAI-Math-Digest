# カタログ357 受領・内容編集記録

## 担当の分離

- 執筆：writer357、明示指定gpt-6-astra / high。公式原典から新規に読解・日英執筆。
- 独立内容点検：reviewer357、明示指定gpt-6-astra / high。執筆者とは別の担当が主原典本文と外部原典PDFを直接読み、主要結果・核心帰着・直接入力を照合。詳細はreviews/independent-review.md。
- 本部：点検指摘の集約、原典p.1とpp.37–41の主張/全点対/定数選択の受領照合、日英・台帳・接続・引継ぎの統一。独立点検実績を本部の新たな全証明検証と表示しない。
- 表示QA：presentation357。共有rendererのプレビュー・形式/引用/ハッシュ・画面比較。数学点検とは分離。

## 主要な確認

| 対象 | 原典 | 受領基準・確認範囲 |
|---|---|---|
| Theorem 1.1 | p.1, proof p.41 | 整数n≥2、任意K、厳密なH^n、full unreduced RCD、全pointed GH tangent=Rn。開domain/open image、全点対ambient距離、次元のみLnと点依存半径を区別 |
| Corollary 1.2 | pp.1–2 | 全正則点を含む開領域、null complement、可算atlas、open domain/image、LnとLn² transitionを全て対応。正則集合自体の開性を主張しない |
| Proposition 4.10 | pp.30–31; (4.18),(4.26) | 非負E_i、尺度ごとの正floor、全中心/尺度、方向別二乗形式、総和の一様小ささ。全行列ノルムの総和小とはしない |
| Proposition 5.4 | pp.37–39; (5.20),(5.22)–(5.23) | 共通開値域上の反復、有限各段階の滑らかさとJacobian可逆性、metric boundsと全jet bounds。Hi有限極限やhiの大域単射性は仮定しない |
| Proposition 5.6 | pp.39–41 | 一様極限、全点対Dt≤ri<2Dt、内側ellipsoidの線分上Taylor、二つのtail、下側評価による単射性、uを介した領域不変性 |
| 外部入力 | reviews/external-source-checks.jsonおよび記事sources.json | DPG体積/密度/全測度、AH内側調和近似、JLZ熱核/勾配、Hatcher領域不変性をstatement/use-siteで独立照合。MN整流性は背景比較 |

主結果の11結論と説明先は記事conclusion-coverage.json、主張欄とproofTargetsはcitations.json/articleGuidesへ対応。自動検査は存在・形式を検査し、数学的内容は上記原典照合による。

## 修正指摘と反映

| 指摘元 | 指摘 | 修正方針 |
|---|---|---|
| 本部 | 「距離を保った」は等長とも読める | bi-Lipschitzに比較するという意味へ修正 |
| 本部 | Prop4.10主張欄のPi未定義 | 原典固有のPoisson/体積欠損量を主張欄で定義 |
| 独立点検 | 未確認範囲の§§4.4–4.6は存在しない節番号 | Lemmas4.4–4.6へ修正 |
| 独立点検 | proof-overview特例により詳細節へのアンカー番号がずれる | Prop5.4→proof-2、Prop5.6→proof-3へ修正 |
| 独立点検 | 英語入力見出しが共通dependencies判定と不一致 | External inputsを含む共通見出しへ |
| 独立点検 | directional図の単位系が曖昧 | unit scaleとv=(fz−fx)/ri²を明記 |
| 独立点検 | iteration図の高階微分ノルムが省略 | Hi→Rnノルムを明記 |
| 技術QA | AH18タイトルのRCD*がMarkdown斜体と干渉 | 正式titleは保持しdisplayNameだけRCD∗へ。共通コード変更なし |
| 技術QA・独立点検 | MN背景リンクが存在しないmain-resultsへ | 実際の比較節dependenciesへ修正 |
| 独立点検 | 本部台帳と案内の分野番号範囲333–360が1件不足 | 固定overview.texの361と次分野362開始を再照合し333–361へ修正 |
| 技術QA | 本文の平均積分マクロがMathJaxで未変換 | 日英の同じ式を通常積分/球の測度へ同値置換。図・数学的内容は保持 |
| 本部 | 読者向け略称が台帳と不一致 | Bi-Lipschitz Coordinates at Regular RCD Pointsへ統一 |

## 限界

局所Poisson正則性・Hessian calculus・次元付きBochner・距離Laplacian比較の外部全定理記述を網羅照合していない。長い内部計算、外部証明の再帰検証、専門家査読・形式検証は未実施。記事と案内は、著者が提示する論証の概説と編集側の確認範囲を区別する。未確認の356他カタログへの辺を追加しない。

## 最終受領

2026-10-19 09:01 JST：独立点検の最終記録を受領。具体的な未反映指摘0。日英display式は12本ずつで同内容（inline DOM数の差は文章中の数式囲みの違い）。記事初稿は08:45:54–08:57:16（11分22秒）で終了。案内制作は別枠08:57:59–08:58:44、09:00に形式編集。

案内の表token置換失敗は記事導線を導入へ移動して解消。独立点検者が移動を逆転した旧hash一致を確認し、数学内容・引用値の変更なしと記録。最終レビューhashはreviews/content-review-result.json。

技術QAは未登録原稿へ共通rendererを適用し、日英記事/案内の4ページ×1280/375px、指定見本との比較、形式7項目、引用2レジストリ6ファイル、図manifest29ファイル、接続14アンカーを確認。詳細validation/REPORT.md。第2段階の実登録・通常full検査・日英PDFは未実施。

09:04 JST最終補足：平均積分の同値表示修正を独立Astraが原典§1.3 p4・式(2.8) p7と確認し記事対象hash更新。技術QAも未変換TeX検査を追加し、日英・PC/375pxで解消確認。追加指摘なし。
