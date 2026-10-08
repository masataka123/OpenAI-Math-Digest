# 033担当D：B-semiampleness for compact log-smooth Kähler fibrations

- 内部ID：kahler-b-semiampleness（カタログ033、掲載順05）
- 状態：初稿引渡し。サイト組込み・公開前の段階。
- 開始：2026-10-08 22:02:16 JST
- 締切：2026-10-08 23:02:16 JST
- 終了：2026-10-08 22:22:05 JST
- 経過：19.82分（原典確認・執筆・図・確認を含む）。04から独立した60分以内の枠。

## 成果物

- [日本語本文](article.ja.md) / [English](article.en.md)
- [原典・読解範囲・直接入力](sources.json)
- [カタログ接続の候補と保留](catalog-changes.md)
- [閾値と安定化・日本語](diagrams/threshold.ja.svg) / [English](diagrams/threshold.en.svg)
- [積分解の族・日本語](diagrams/family.ja.svg) / [English](diagrams/family.en.svg)
- [各因子の半豊富性・日本語](diagrams/factors.ja.svg) / [English](diagrams/factors.en.svg)
- [線束同型と大域生成の降下・日本語](diagrams/descent.ja.svg) / [English](diagrams/descent.en.svg)
- diagrams/に4個の共有TikZ原本、8個の各言語TeX、preamble.tex、refs.json、生成用render.pyを保存。

## 核心と確認範囲

Theorem1.1(a)の安定化と(b)の大域生成を別々に記述。全最高Hodge lineとcharacter eigenlineを区別し、係数1の水平境界、deepest residue、閾値次数の必要十分な局所計算、すべての高いモデルへのPicQ同定を追った。点ごとの積分解からHilbert–Douady/Baireを介して一つの族へ進み、射影的比較因子とtorus/symplectic因子を分け、指定された正則同型とその逆の延長、Stein分解後のnormによる大域生成の降下を記述。

BS §§2–9の上記証明箇所を読解。FF v3 Theorem1.1、MWWZ v1 Corollary1.3、Toma v3 Corollary5.3、BFMT v2 Theorem1.5 / Definition6.18 / Theorem6.28 / Theorems5.2,5.5の記述とBS内の使用箇所を照合。これは入力の証明全体の検証ではない。結果番号・ページごとの記録はsources.json。

## 実施した確認

- 固定PDFのSHA-256と版・38ページを確認。Theorem1.1 p.3、weight2の平方・cup積 p.33はPDF画像でも照合。
- 日英の8個のH2・12個のH3、主要display数式7組が対応し、7組の数式内容が一致。
- 本文のMathJax入力200件（日本語102、英語98）を組版しエラーなし。inline件数差は言語ごとの文中記号の反復差。
- XeLaTeX→dvisvgmで全8枚を生成。Overfull box・Missing characterなし。
- 8枚すべてを画像化して表示確認。箱・矢印・説明・引用の重なり、欠落を確認。因子比較図は修正後の日英を再表示。
- 全SVGのXML妥当性、一意なglyph ID、図中36引用リンクがrefs.jsonの原典URLと一致することを確認。
- Markdown引用キーと図パス、sources.jsonの構文を確認。

## 未確認・未完成と申し送り

- 原稿全体の独立した数学的証明検証は行っていない。混合Hodge延長の構成、parameter space構成の全細部、実偏極変更後の全延長整合性は独立検証なしと本文にも明記。
- Baily–Borel Theorem10.11、Fujiki可算性、Villadsen Lemma2.21、純Hodge延長等の外部原典は利用先のみ確認。外部入力の全証明は対象外。
- 他の033論文・034との直接依存は未調査。PH→BS等の辺を推測していない。BFMTとの一般化関係と直接入力はcatalog-changes.mdで区別。
- 本文・図・記録の制作に未生成ファイルはない。初稿引渡しは数学的正当性の認証や公開完了ではない。
- 実サイトのビルド、導線、スマートフォン幅、言語切替、共通ヘッダーのAI注意書きは未実施。掲載工程で本部が確認する。
- 共通コード・034・他担当・Git・公開には変更を加えていない。別チャット・サブエージェント作成や送信も行っていない。

## 図の再生成

このフォルダ内の diagrams/render.py を Python 3 で実行する。XeLaTeX、xeCJK / Harano Aji、dvisvgmが必要。作業ディレクトリに依存せず、このdiagramsフォルダと担当名付き一時ディレクトリにだけ出力する。

図の配色・組版は既存Schnell図を参照した。既存プロジェクトのMIT帰属表示を維持し、共有ソースは変更していない。

## 033本部の総括編集 2026年10月8日

初稿の時間枠とは別の編集。日英の各証明節に目標と得られた結果の使い道を明示し、結果・利用先・役割を総括と照合した。既存の詳細図と確認範囲を保持。全体図を日英で追加。 共通CSS・共通部品は変更していない。検査結果は ../overview/validation.json と ../../../coordination/catalog-033/SYNTHESIS_HANDOFF.md を参照。
