# 記事制作記録

- カタログ／paper ID／担当：037／ordinary-double-point-gap／article_all_dimensions
- 制作セット：1.4＋2026-10-11/12補足
- 作業場所：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、共有main。ブランチ切替なし。
- 初稿開始：2026-10-12 20:09:49 JST
- 初稿上限：2026-10-12 21:09:49 JST
- 初稿終了：2026-10-12 20:31:28 JST
- 初稿経過：21.65分。原典確認・外部入力照合・日英本文・図生成・自己点検を含む。
- 状態：初稿引渡し。第1段階の記事制作分を完了。本部の受領・画面比較は別記録。
- 変更範囲：本ディレクトリのみ。public/src、共通設定、他カタログ、PDF冊子、commit/pushは未変更。

## 成果物

- article.ja.md / article.en.md：主結果Theorem 1.1、Corollary 1.2、全体図、Theorem 5.3と7.7の主張欄付き詳細、Corollary 1.2の全結論。
- diagrams：4原図（overview、saturation、bootstrap、global）、日英TeX/SVG各8ファイル、共通引用マクロ、生成スクリプト、24ファイルのSHA-256 manifest。
- sources.json：本稿固定版・頁・SHA、外部入力の定理記述・版・頁対応・hash・用途・確認範囲。
- citations.json：author-key、articleGuides、mainResults、statements、conclusionCoverage、readingList。
- external：核心外部入力の取得PDFとtext。取得した原典の証明全体を検証済みと扱わない。
- qa：日英全4図の画像点検用PNG。validation.json：実施検査。

## 内容照合と残る範囲

- 原典Theorem 1.1の零境界・複素代数的・非孤立許容・n≥2、normalized volumeのn!とlog discrepancy、上界方向・定数・両方向の等号を照合。
- 本稿の唯一のcompanion入力は四次元稿Theorem 1.1 p.1→本稿Theorem 2.4 pp.9–10。キーOpenAI26b。
- §§2–8の主要な証明本文を読んだ。特に同次元sliceでM_nの定義しか使わない点、stabilizer mとhの相違、等号のstrict count→丸め→ODP cone→元のhypersurface→非退化二次形式を区別。
- Corollary 1.2の小さいsingular上界にsharpnessや等号分類を追加していない。Li–Miaoのonly-ifと原稿の例計算によるifを区別。
- 外部入力の記述と本稿の適用を照合した。Fujinoは誌面31/PDF41、Stanleyは誌面81–82/PDF25–26、Collins–Székelyhidiは誌面1340/PDF2。その他の主要入力の頁対応も記録。
- Graham Example251/Thm257 pp.56–57を追加照合：ambient dimension n+1≥3でSO(n+1)の既約性を満たす。Berman Thm1.1 p.2とLiu22 Lemma2.15 p.7も定理記述確認済み。
- 未独立検証：§4.3期待値最適化全計算、§6のflatness/normality/canonical module持上げの全細部、§3twisted stable mapsの境界・障害理論の全細部、外部入力自体の全証明。未確認範囲は本文末尾にも記載。
- 自己点検を独立査読とは扱わない。執筆者以外のsource_review担当と本部が主要箇所を照合した記録はcoordination側へ引継ぐ。

## 検査と再生成

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node scripts/sync-citations.mjs --registry drafts/catalog-037/ordinary-double-point-gap/citations.json
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-037/ordinary-double-point-gap/citations.json
python3 drafts/catalog-037/ordinary-double-point-gap/diagrams/render.py
```

- 環境：XeLaTeX、xeCJK/Harano Aji、TikZ、dvisvgm、Node、repoのsharp。冊子PDFは生成しない。
- 引用検査1 registry/4 files成功。日英65引用マーカー・4証明対象・2中間主張ブロックが同じ順序で一致。
- TeX全8件でoverfull・missing characterなし。24ファイルのmanifest hash一致。
- 全8図を画像で点検。branch矢印を左gutterへ分離、合流部のTikZ投影を明示座標へ修正。SVGの過剰な右余白は生成時に可視描画の範囲を測定してviewBoxだけを調整。
- 全体check:citationsのpublicコピー検査は第2段階。今回publicへコピーしない。
- 本部が共通レンダラーで日英数式・アンカー・033/034比較・PC/375pxを検査。PDFと公開は未実施。

## 後続の編集

- 追加編集開始：2026-10-12 20:32:39 JST。終了：2026-10-12 20:34:21 JST。経過1.70分。初稿時間とは別記録。
- 本部・source_reviewの指摘を受け、saturation図のheight-one結論をprimitive facet supportsに限定し、support ray排除の説明へ「微分可能点で／At differentiability points」を補った（原典p.35）。本文はすでにこの範囲を明示しており変更不要。
- 日英TeX/SVGを再生成し、saturation図の日英PNGを再点検。文字の欠落・重なり・切れなし。引用同期検査および生成manifestを更新。
- 第1段階の担当分を再引渡し。

## 第2段階の本部引継ぎ（2026-10-12）

サイト組込み・公開図・日英PDF・公開前検査を本部が完了。本文と数学的確認範囲は維持。公開準備完了・未公開で停止。詳細は `coordination/catalog-037/STAGE2_HANDOFF.md`（リポジトリルートからのパス）。
