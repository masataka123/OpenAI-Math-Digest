# 形式・表示点検 — 第1段階

制作セット1.4および補足を適用。2026-10-13、本部の自己点検。新しい標準見本として051を採用していない。

## 指定見本との比較

共通 `renderDraft` と `renderCatalogInventory` を読み込む067専用の隔離プレビューを用いた。既存distの共通外枠・スタイルを参照したが、src/public/distや共通部品は変更していない。プレビューの外枠には既存記事由来のナビゲーションがあるため、実サイトの掲載数・言語切替・ルートを検査済みとは扱わない。

| 見本 | 比較対象 | 結果・証拠 |
|---|---|---|
| 034 Schnell fiber spaces and good canonical models | 主張、証明図、図直後の段階説明、出典行 | 同じ共通本文・図枠・証明段階を使用。067は主結果3件と独立中間主張3件を図前または参照先へ明示。`screens/reference-schnell.{ja,en}.{1280,375}.png` と `campana-peternell-six.*.proof.png` |
| 033 Orbifold and logarithmic Iitaka subadditivity | 図より前の文献一覧、入力の用途・版・リンク、原典との引用区別 | 同じ文献案内の位置・表示。067は15件のauthor-keyを定義し、本稿内の番号は無略号。`reference-orbifold.*.png` と `campana-peternell-six.*.references.png` |
| カタログ034 | 公式順共通4列表、論文タイトル→記事、原典の別リンク、主結果と議論の役割 | 1本でも同じ共通表rendererを使用。分類数・図数はコピーしない。`reference-034.*.png` と `overview.*.inventory.png` |

比較画像はすべて `validation/screens/`。日英・1280px・375pxの各組合せを保存した。主要な見本と067原稿を目視比較し、単なる図数・見出し数の一致を形式統一の根拠にはしていない。

## 主張・図・本文

- 主結果：Theorem 1.1、Corollary 1.2、Corollary 7.1。全結論と説明先はCONTENT_REVIEW.mdおよびcitations.jsonのconclusionCoverage。
- 独立した中間証明節：Proposition 3.1、Lemma 5.1、Proposition 6.2。仮定・結論・番号・ページを図より前に記載。
- 証明節6、TeX図6種類×2言語、段階説明16。各節は「主張または既出主張への参照→TeX図→直後の説明」。main図は全分岐を詳細節より先に配置。
- 矢印には「使う内容・操作」と引用を併記。箱には操作見出しと数式を配置。日本語図には日本語の説明がある。TeX→XDV→SVGで生成し、冊子PDFは作成していない。
- 12図すべてについてXeLaTeXのOverfull/Missing characterを拒否する生成処理が成功。全図の独立SVG画像 `raw-*.png` を目視し、箱・矢印・引用の重なりや端の欠けを確認した。記事内長尺スクリーンショットの切り取りだけで図の欠けを判定していない。
- 原典読書案内は結果名・ページ・読む目的を記載。標準概念の長い定義、読者への問い、証明の代わりの表は置かない。

## カタログ構成の採否

単論文なので短い入口と共通記事表を採用。論文選択UI、空の内部依存表、固定数の分類は省略する。主要接続の分岐・合流を検討した結果、Picard数・擬指数の全体図は記事冒頭に必要と判断した。一方カタログ案内に同じ図を複製しても入口の理解を増やさないため、総括図は置かず記事全体図へ直接案内する。外部入力の詳細は本文・connections.jsonに保存。PDF導線は冒頭の予定コメントに記録し、第2段階で実ファイルと共に配置する。

## 実施済み検査

- `node scripts/sync-citations.mjs --check --catalog 067 --text-only`：成功。067の2レジストリ・生成対象6ファイル。本文・TeX引用は共通記録から生成。
- `check-stage1.py`：引用55件・証明対象6件・中間主張3件の日英順序、表示数式10件、図関連34ファイルのハッシュ、公式資料ハッシュ、JSON、8画面条件を確認。`validation/stage1-checks.json`。
- `preview.mjs --render-only`：日英記事・案内のレンダー成功、全主張・結論説明先アンカーの実在を検査。`validation/preview/structure.json`。
- `visual-check.mjs`：日英記事・案内×1280/375pxの8条件で、ページ全体の横はみ出し0、MathJax merror 0、ブラウザー例外0。`validation/visual-checks.json`。
- `check-interactions.mjs`：本文内アンカー切れ0、日英各12個の図・TeXリンクの取得成功、図内原典リンク各28、375pxで表と長い数式の横スクロールが機能。`validation/interactions.json`。右端へ動かした表の画像も保存。表の全幅は900px以上を保つ共通仕様であり、375pxの初期画像に右列が写らないのは横スクロール表示である。

## 未実施・第2段階へ

サイト登録、実ルートのリンク、右上言語切替・スクロール中の実動作、掲載数、図拡大モーダルの実操作、AI注意書き・キャラクターの実ページ配置、全体のnpm test/build/check:links、公開コピーを含む完全なcheck:citations、日英冊子PDF、PDFの全ページ画像点検、check:pdf、公開先の反映確認。原稿段階の図リンク取得を実サイトの拡大UI確認とは呼ばない。

検査済みなのは隔離原稿の表示・記録・算術証明書。公開準備完了ではない。
