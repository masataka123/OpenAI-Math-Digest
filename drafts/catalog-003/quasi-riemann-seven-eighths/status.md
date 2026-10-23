# 作業記録
- カタログ／paper ID／担当：003 / quasi-riemann-seven-eighths / astra_author_long
- 制作セット版：1.4、2026-10-20モデル運用
- モデル・思考量の指定根拠：coordination/catalog-003/MODEL_PROVENANCE.jsonを参照。指定 gpt-6-astra / high。
- 初稿開始（JST）：2026-10-23 19:41:38
- 初稿締切（開始＋60分）：2026-10-23 20:41:38
- 初稿終了／経過分：2026-10-23 19:55:01 JST／13分23秒
- 状態：初稿引渡し（独立内容点検の最終確認待ち）
- 変更範囲：このディレクトリのみ。public・共有ファイルを変更しない。

- 成果物：article.ja.md / article.en.md、sources.json、citations.json、catalog-changes.md、diagrams/の3種×日英TeX/SVG・生成記録、external/の直接入力PDF/抽出、validation/の図画像・自己確認・構造検査。
- 再生成：リポジトリルートで `PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH node scripts/sync-citations.mjs --registry drafts/catalog-003/quasi-riemann-seven-eighths/citations.json`、次に同PATHで `python3 drafts/catalog-003/quasi-riemann-seven-eighths/diagrams/render.py`。XeLaTeX、xeCJK/Harano Aji、TikZ、dvisvgmを使用。publicへコピーしない。
- 読解範囲：sources.jsonのproofPassages参照。Prop2.1、低評価、主行正規化、モーメント条件と帰納入口/終結、行数・最終指数・選択順、全族移行、Cor1.2全結論を照合。外部DR24/GL13/TZ19/BIMS17/Gal18の入力記述と使用箇所を確認。
- 形式・表示確認：担当registryの引用生成と`--check --text-only`成功。6枚コンパイル成功（overfull/missing glyphなし）。citation-build全ファイルのハッシュ一致。日英6枚の1100px画像を目視し、文字/矢印/引用の重なりなし。共通renderDraftで主要結果・中間命題・全結論のアンカー実在を確認。証拠はvalidation/author-check.jsonとstructure.json。
- 未確認：§§17–18全再帰/局所mask/一様性、Prop5.1全計算、§§8–10全検出器/積分路/尾部の独立検証。全199ページの引用関係の網羅確認。本文末尾にも同じ範囲を明記。
- 未実施：サイトPC/375px/033・034比較は本部へ引継ぎ。冊子日英PDF、publicコピー、サイト登録、commit/push/公開は第2段階以降。
- 本部への申し送り：catalog-changes.md参照。主要結果はTheorem1.1/Corollary1.2、独立説明対象はProp2.1。内部Theorem3.1の11/12結果を別原稿からの依存としない。
- 環境：外部原典取得はsandbox DNS制限とPython CA不足のため、承認済み`require_escalated`の/usr/bin/curlでTLS検証を保持して取得。図スクリーンショットはChrome起動のsandbox制限のため同承認経路を使用。閲覧/ローカル生成のみ。

## 後続の編集
- 初稿中の予備点検により、長さ記号の定義と主図の正規化引用を追加済み。独立点検の最終記録はcoordination/catalog-003/reviews/を参照。以後の修正は初稿とは分けて追記する。
