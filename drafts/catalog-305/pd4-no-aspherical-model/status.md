# 作業記録

- カタログ／paper ID／担当：305 / pd4-no-aspherical-model / author-pd4
- 制作セット：1.4、MODEL_ROLES 2026-10-20。
- 指定モデル・思考量：gpt-6-astra / high。起動時に本部が明示指定した旨の担当依頼を受領。実行内部情報は推測していない。coordination/catalog-305/MODEL_PROVENANCE.jsonを参照。
- 初稿開始：2026-10-21 20:23:08 JST。
- 初稿締切：2026-10-21 21:23:08 JST。
- 初稿終了：2026-10-21 20:34 JST（約11分、読解・執筆・図生成・自己確認、別担当初回指摘の修正を含む）。
- 状態：初稿引渡し。別Astra内容点検を受け、2点の明記を追加済み。最終受領判断は本部・点検担当の記録を参照。
- 成果物：日英article、sources.json、citations.json、3種類×日英のTikZ由来TeX/SVG、citation-build.json、review/の6画像。

## 読解と確認

Theorem 1.1とPropositions 2.1・3.2・4.3・4.5・4.6・5.5、これらの接続に使われる§§2–5の本文を読んだ。全結論（有限BG、有限表示、向き、整係数PD4、自明右作用、有限自由分解、閉aspherical模型非存在）を本文とconclusionCoverageへ対応付けた。

marked論文のLemmas 2.3–2.4、Proposition 4.5、Theorem 5.1、Propositions 5.2・6.1、Theorem 3.1の入力記述を照合。外部KL-v3のnormal invariant／s-cobordism、PRT25のgoodness後のtower構成、FQ2013の二段階分離も原典を読んだ。原典URL、ページ、版、ハッシュはsources.jsonに保持。

Quinn83原文は未取得で相対安定積の引用先記述は未照合。CAT(0)・Farrell–Jones・穿孔平滑化は本稿の使用箇所のみ読解し、外部原典の結果記述自体は未照合。全入力証明や全幾何操作の独立検証も行っていない。記事末尾・sourcesで区別している。

## 検査

- 担当registryを指定したsync-citationsの生成および `--check --text-only` 成功。
- XeLaTeX/dvisvgmによる6図生成成功。Overfull/Missing characterを生成処理で検査。
- review/main・chamber・removalの日英PNG6枚を表示し、箱・矢印・引用の重なり、切れ、数式の欠落がないことを確認。
- SVG/TeXと原本のSHA-256はdiagrams/citation-build.jsonに記録。
- 共通の引用付き図スタイル（MIT帰属保持）を使用。033・034とのWeb画面比較、共通ページ表示、冊子PDFは第2段階の本部作業。

## 再生成

Nodeは本部README記載のbundled nodeを使用。

```sh
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --registry drafts/catalog-305/pd4-no-aspherical-model/citations.json
python3 drafts/catalog-305/pd4-no-aspherical-model/diagrams/render.py
```

第1段階ではpublicへの配置を行っていないため、publicコピーを要求する完全なcheck:citationsは第2段階で実施。原本と生成物が同じなら再コンパイル不要。

## 初回別担当点検への対応

content-reviewからの2点を反映：Vertex dataでm≥5、p≥9、標数0、辺ごとの別座標blockを日英に明記。外部原典の記述未照合と全証明未検証を区別。図の論理変更はなく、既生成図は同一版を保持。

## 本部の共通プレビュー確認（追加記録）

本部より、日英3図ずつの共通プレビューについてMathJax/アンカー欠落なし、PC/375pxのページ横はみ出しなし、Chromeによる6図の箱・矢印・引用の重なりなしとの確認を受領した。本部のscreens/pd4-no-aspherical-model.*と共通プレビュー記録を参照する。図原本はその確認版から変更していない。

別Astra content-reviewは初回修正2点を再確認し、主定理全結論・図前主張・標識保持・goodness後の接続について内容範囲で受領可と連絡。独立点検の詳細・最終範囲はcoordination/catalog-305の内容点検記録を正本とする。
