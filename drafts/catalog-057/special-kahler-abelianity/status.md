# 作業記録

- カタログ／paper ID／担当：057 / special-kahler-abelianity / 担当A
- 制作セット：1.4 + 2026-10-11補足・補足追記
- 初稿開始（JST）：2026-10-11 23:09
- 初稿締切：2026-10-12 00:09 JST
- 初稿終了：2026-10-11 23:27:37 JST（約19分、60分以内）
- 状態：本部受領・内容編集済み（第1段階完了）。
- 依頼範囲：第1段階。サイト組込み・冊子PDF生成・公開は未実施。

## 成果物

- article.ja.md / article.en.md
- citations.json：citationStyle author-key、自己引用＋外部10件、mainResults 5件、proofTargets 7節、全結論10件の説明先。
- sources.json：固定PDF hash、全50頁の誌面/PDF対応、実読解、外部原典の各hash・指定記述・用途、未確認。
- diagrams：7原本、日英各7のTeX/SVG、共通preamble、生成引用、render.py、citation-build.json（39ファイルのSHA-256）。publicコピーなし。

## 読解・照合

- 原典SHA-256：dfbf9ad2335b9d20dedd8a2ae527ebb45b74155a976acc6d284dd851144e22b8。台帳と一致。
- Theorem 1.1、Corollaries 1.2–1.5の全結論を原典と対応。Theorem4.1の(M)は有限指数部分群ごとに先に一つの被覆、その後の全無限商という量化を保持。Theorem5.8は固定商のactual inertiaとcofinalな準備モデルの仮定を保持。
- §§4–6の証明接続を読解。§3は定理記述と後半pp.17–23のdiagonal pairingへの接続を選択読解。
- 外部Cam04、Cam23、BW16、CCE14、Sha06、Bou02、CP19、JW21、Cam11、CH13の指定結果を実PDFで照合。版とページoffsetをsources.jsonへ記録。
- 原典画像：tmp/catalog-057-a/source-p2.png、source-p23.png、source-p37.png。

## 検査

- 担当registryを指定する引用生成・text-only検査成功（4管理ファイル）。
- XeLaTeX + dvisvgmで14図成功。Overfull box / Missing characterなし。
- citation-build.jsonの39ハッシュ一致。完全なcheck:citationsはpublicコピーまで要求するため第2段階でサイト本部が行う。
- 共通renderDraftで日英11節と全10 conclusionCoverage anchor、記事内fragment参照を確認。
- MathJaxを含むローカルpreviewで日英数式エラー0。本文・図・375px冒頭のスクリーンショットを作成。
- 日英14図のコンタクトシートと主な図の拡大を目視。主定理図のhalf-card上書き・分岐ラベル交差を修正し再生成。英語Kählerアクセント表記も修正。
- 画面証拠：tmp/catalog-057-a/preview/、最新SVGラスタ：tmp/catalog-057-a/*.svg.png。主定理図の最終修正は後者で点検。
- 指定見本との横並び比較、公開用図リンク、日英冊子PDFはサイト本部へ引継ぎ。ここでは形式統一済み／公開準備完了とはしない。

## 再生成

Node binをPATHに追加する：`/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin`。TeXは`/Library/TeX/texbin`。Python3、XeLaTeX、Harano Aji、dvisvgmを使用。

```sh
node scripts/sync-citations.mjs --registry drafts/catalog-057/special-kahler-abelianity/citations.json
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-057/special-kahler-abelianity/citations.json
python3 drafts/catalog-057/special-kahler-abelianity/diagrams/render.py
```

任意でrender.pyの後にstem（例main）を指定すると当該図だけを再生成できる。引用定義またはpreambleを変更した場合は全図を再生成する。

## 未確認・引継ぎ

- Theorem3.1のpotential構成・全楕円評価・定数・極限操作、Proposition4.6の全解析的細部、Theorem5.8の全モデル比較を独立再証明していない。
- 外部結果の証明とその先の依存は再帰検証していない。Oka–Grauert原理は原稿の適用を追ったが別原典の記述照合は未実施。本文にも明記。
- 主要結果に対応する本文・図の未作成箇所はない。これは原稿が提示する論証の解説であり、主定理の完全な独立検証や専門家査読ではない。
- 第3論文へ供給するのはTheorem1.1の任意次元での主張。次元8のsmooth projective special Yへ適用可。Theorem4.1/5.8を第3論文の追加入力にしない。
- 本部の受領点検済み。担当Bの独立原典レビュー実施済み（coordination/catalog-057/REVIEW_A_BY_B.md）、指摘対応は下記。日英PDF担当はサイト本部、両言語とも未生成。

## 後続の編集

初稿後の独立レビューへの対応はここへ別記する。

- 2026-10-11 23:30–23:33 JST（初稿後の追加編集、約3分）：担当Bの独立レビュー指摘に対応。main.tikz最終箱の有限不分岐正則被覆に「基本群がアーベル」を日英で追記。main日英TeX/SVG再生成、引用text-only成功、39生成hash一致、共通renderer日英11節・10結論anchor成功。最新main日英PNGを目視し、条件表示・折返し・箱/矢印の衝突なしを確認。Bへ反映確認を依頼。

- 2026-10-11、本部受領：独立点検の指摘反映、日英・原典・結論アンカー・引用同期・生成ハッシュ・ローカル表示を確認。最終結果は coordination/catalog-057/STAGE1_VALIDATION.json と FORMAT_REVIEW.md。本文・図の追加変更とは区別。サイト組込み・冊子PDF・公開は後段。

- 2026-10-12、第2段階のサイト本部編集（初稿と別枠、作業全体の開始・終了はSTAGE2_REPORT参照）：日英のTheorem 4.1の条件(M)について、PDFで `\tag{M}` が異常に拡大することを紙面画像で検出。ラベルを通常の段落「条件(M)／Condition (M)」へ移し、数式をgatheredの2行にした。仮定・量化・結論は変更していない。日英PDF再生成後、日本語p.13／英語p.16の条件表示・数式・次の図を画像点検。引用・図の変更なし。サイト組込み・日英PDFは第2段階で完了、公開は未実施。検査記録はcoordination/catalog-057/STAGE2_REPORT.md。

## 第3段階の公開確認（2026-10-12）

本チャットがサイト本部としてcommit `0cc452a` をmainへpush。Actions 38151381273のbuild／deploy成功、公開78リソースのhash一致、日英24表示条件・6操作経路を確認。記事本文・図・PDF・数学的な確認範囲は第2段階から変更していない。公開URLと証拠はcoordination/catalog-057/PUBLICATION.md。
