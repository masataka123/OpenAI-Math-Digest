# カタログ037 第1段階の形式・表示点検

2026-10-12、本部 `/root`。制作セット1.4と2026-10-11/12補足。数学的内容の照合担当・原典箇所・留保は `SOURCE_REVIEW.md`、記事別の入力は各 `sources.json` に記録する。

## 共通形式の確認

| 要件 | 入力・出力 | 自動確認 | 画面・内容確認 |
|---|---|---|---|
| 公式順の共通4列表 | inventory.json → overview/presentation.json → catalogInventory共通レンダラー | 2行、記事リンクと原典リンク、日英6ページの内部リンク | 034の日英表と比較。正式名・短名・版・頁数・主張・役割を備える。375pxは表内スクロール |
| 図前の文献案内 | 各sources/citations → reference-guide | 3レジストリのauthor-key・本文/TeX同期 | 033 Orbifold Iitakaの文献案内と比較。キー・著者・正式名・用途・参照版・リンクを全図より前に置く |
| 本稿内／外部の区別 | 共通引用記録 → 本文・citation-labels.tex → SVGリンク | 本文の引用順が日英一致、SVG全引用先をレジストリと照合 | 本稿内は結果番号、外部は定義済み著者キー。Fuj23/Reid83は誌面とPDFの頁差も表示・リンクに反映 |
| 証明対象・読書案内 | articleGuides/mainResults/statements/conclusionCoverage | 主張・結論・案内アンカーの存在 | Schnellの主張欄→図→説明と比較。独立解説する中間命題には主張欄、主定理は冒頭欄への参照。末尾に結果・頁・読む目的 |
| 全結論への説明 | 全次元Theorem1.1/Corollary1.2、四次元Theorem1.1 | 結論カバレッジの参照先 | 上界、等号必要条件、最適性を別々に照合。singular Fanoの小さい上界へ等号分類を付加しない |
| 全体像と細部 | 案内の関係図＋接続表、各記事の全体図と詳細 | 図数は日英それぞれ案内1・全次元4・四次元3 | 四次元基底→全次元→大域系の連続帰着を採用。分類カード・選択UIは不要と判断 |

## 画面の証拠と限界

- `build-preview.mjs` は現行の共通本文・共通表レンダラーとCSSを読み、6ページを `preview/` に隔離生成する。`src/`・`public/`・`dist/`へ書き込まない。
- `check-preview.mjs` が1280px/375pxの全12画面を検査し、`screenshots/` に冒頭・主張・文献案内・証明節および全16図の画像を保存する。集計は `screen-checks.json`。
- 見本は既存 `dist/` の034、Schnell、033 Orbifold Iitakaの日英を読み、`reference-preview/` と `reference-screenshots/` へ隔離した。`reference-checks.json` を参照。現行公開サイトのライブ比較ではない。
- 本部は見本の共通表・定理カード・文献案内と今回の同位置を比較し、PCで図内文字・矢印・引用、375pxで主張の折返し・表内スクロール・文献案内・右上言語切替を目視した。最終図は全次元担当で分岐のgutter・merge矢印・余白、四次元担当で図末尾を修正している。
- SVG図の詳細はPC/図単独で読める。スマートフォンの縮小図だけで全文字が読めることは要求せず、第2段階で実サイトの拡大・全体表示・図中リンク操作を確認する。
- 本文表示数式は20式/言語で、空白・文末句読点を除いて一致。インラインの数は日英の語順や数式／通常文字の表記で異なるため、個数一致を意味の一致とせず、別担当の全文照合と本部の差分確認を併用した。
- 数値検査だけで形式統一を宣言しない。日英PDFと実サイトの操作・表示比較は未実施で、第2段階に残る。

## 検査範囲

`sync-citations --check --text-only --catalog 037`、共通レンダラーの6ページ検査、SVG全引用リンク、出典/生成物ハッシュ、日英表示数式・引用順、既存3485ファイルの保持、隔離画面を点検する。具体的な最終結果は `validation-stage1.json`、`local-citation-checks.json`、`preview-checks.json`、`screen-checks.json` に保存。

既存テストは公開資産との統合テスト `every registered new catalogue uses checked citations and fresh diagram outputs` を明示的に除き37件成功（`tests-stage1.log`）。この1件は新規draftも探索してpublicコピーを要求するため、今回の禁止範囲に合わせて第2段階へ留保する。完全な `npm test`、公開コピーを含む `check:citations`、build、check:links、PDF検査を成功済みとは扱わない。

最終受領：2026-10-12 20:35 JST。初稿後のfacet表現修正と再生成を含む最終版を受領。段階1の局所検査は全て成功し、第2段階は未着手のまま停止。

## 第2段階の確定

組込み済み実ルートで20条件と4操作経路を確認。共通表・Schnell・Orbifold Iitakaとの画面比較を更新し、日英PDF76頁と全16図を画像で点検した。詳細・証拠はSTAGE2_HANDOFF.mdとstage2/。未実施だったサイト/PDF検査は完了し、公開準備完了・未公開で停止。
