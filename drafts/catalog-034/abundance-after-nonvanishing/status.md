# abundance-after-nonvanishing
- 担当: A
- 開始: 2026-10-08 13:59:59 JST
- 終了: 2026-10-08 14:09:13 JST
- 状態: 本部確認待ち（初稿完了）
- 上限: 開始から60分

## 成果物
- article.ja.md / article.en.md：主定理2本、3図の直後の説明、入力と背景の区別、確認範囲。
- diagrams/：abundance, floor, lifting の共通TikZ、日英TeX/SVG/PNG、生成記録、目視用ペア画像。
- sources.json / catalog-changes.md / checks.json：原典固定版・読解範囲・依存反映案・確認結果。

## 実施した確認
- PDFのSHA-256が指定値と一致。主定理のp.3とp.5を画像でも確認。
- actual-line規約、supported modelの準備と台の生存、strataのadjunctionと降下、二markingのresidue link、共通Kähler類・固定次数有限像・norm積、split insertion、filtered直像とvanishingの接続、障害消滅・不変層の成長・最終証明を選択して読解。
- HLL Thm.4.1、DHP Thm.6.1/7.2、DO Cor.1.3と実際のadjoint規約、FT Thm.2.9/Prop.2.11、Sai Thm.1、SS Thm.16.3.10、FG Thm.1.1の原典記述と適用箇所を照合。
- 日英6図を全て目視し、箱・引用・矢印・文字の重なりなし。TeX overfull/missing-characterなし。
- 表示数式4組が日英一致、169数式をXeLaTeXで構文確認、32個のSVG引用リンク、XML、ローカル画像・参照ラベルを確認。

## 未確認・申し送り
- §§3–4の解析的収縮とClaim 5.4の全構成、全relative MMP/有理特異点/current降下の外部入力、root近傍の全gluing・functorial principalization、§11のfiltered比較の独立な再構成、Lemma 12.2の全Čech計算、外部証明は未確認。
- Sai v5 Thm.1のweight j-nとK4N p.78の符号訂正の説明の差を本文とsourcesに記録。SSは参照日のVersion 2章PDFでありimmutable版でない。
- Thm.6.1の特別な解消仮定を落とさない。Thm.1.2にはそれを追加しない。元のXにprojectivity/Q-factorialityを追加しない。
- SLとLAはp.6の背景引用であり解析的境界定理への直接入力にしない。
- サイト組込み・ブラウザ・スマートフォン表示の確認は本部に残る。
- 共通コード・公開ページ・他担当原稿を変更せず、commit・push・公開なし。

## GitHub保存用の受け渡し（2026-10-08）
- ユーザーの追加指示: 4本をGitHubに原稿として保存し、サイトへの統合・公開は本部が担当する。
- 保存先ブランチ: `codex/catalog-034-worker-a-drafts`。担当4フォルダのみを対象とする。
- 追加成果物: `preview.ja.html` / `preview.en.html`（数式と図を表示する閲覧版）。4本の切替と日英切替に対応。
- 保存前確認: 日英本文の画像参照、出典JSON、8つの閲覧HTMLと各3枚の埋込み図の存在を確認。原典の画像抜粋と目視用の合成画像はアップロード対象外。
- サイトへの組込み・公開前の本部確認と、上記の数学的な未確認範囲は引き続き必要。
