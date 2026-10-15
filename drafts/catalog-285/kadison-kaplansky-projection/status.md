> 最終受領（2026-10-15、本部）：第1段階完了。日英原稿・図・引用の受領、別担当Astra原典照合と修正確認、共通表示でのPC/375px・指定見本比較を完了。以下は時系列の制作記録で、初稿時の「点検待ち」は当時の状態。最終状態は coordination/catalog-285/CONTENT_REVIEW.md、FORMAT_CHECKS.md、review-*.md を参照。サイト組込み・日英冊子PDF・公開は未実施。

# 制作記録

- 担当：projection、指定モデル gpt-6-astra。
- 初稿開始：2026-10-15 12:24:19 UTC（21:24:19 JST）。
- 初稿締切：2026-10-15 13:24:19 UTC（22:24:19 JST）。
- 根拠：公式固定commitの原典のみ。既存Sol記事の内容・図・解釈・点検結果は未使用。
- 段階：第1段階、原典読解中。自己点検は独立レビューではない。
- 日英冊子PDF・サイト組込み・公開：本担当の範囲外、未実施。

## 初稿引渡し（2026-10-15）

- 初稿終了：2026-10-15 12:39:30 UTC（21:39:30 JST）。約15分11秒。60分上限内で終了。時間を埋める追加調査は行わない。
- 状態：日英記事・図・出典を揃えた初稿引渡し。別担当Astraによる内容点検、本部の指定見本との画面比較は別工程であり、未了。
- 成果物：article.ja.md / article.en.md、sources.json、citations.json、diagrams/{overview,matrix,compression}.tikz、日英各.tex/.svg、preamble.tex、render.py、citation-build.json。
- 3種の図：Theorem1.1の全体接続、Theorem3.1の行列構成、Proposition2.2の自由積圧縮。各中間命題の仮定・結論を図前に提示。
- 検査：担当registryの引用生成と`--check --text-only`成功。全19項目の図原本・生成物SHA-256一致。日英の引用ID順・display数式（終端句読点を除く）一致。共通renderDraftで日英3図、source-line各16、主張・結論リンク先アンカーの存在を確認（qa/structure-check.json）。
- 画像確認：SVGをsharpで白背景PNGへ変換し、6枚の配置・引用・矢印・文字・数式の欠け/重なりなしを目視。qa/*.pngに保存。XeLaTeX→通常PDFの直接出力はdvisvgm専用driverに適合せず表示比較に不使用。正規生成はXDV→dvisvgm→SVG。
- 原典画像：Theorem1.1 p.2、MT10 Theorem1.1 PDF/誌面p.1、BGW16 Proposition10.3 PDF/誌面p.36を確認。BGWは著者版40頁を固定し、出版版のページを混用しない。
- 核心：非正規化trace、被約正則表現のgap、functional calculusによるC*所属、非同変domainのスペクトル比較と同変all-copy trace比較の区別、隅での可逆性、e≠0,1、有限生成・torsion-freeの保存を記載。
- 外部直接入力：MT10の非対称局所補題を展開ブロック選択に使用。BGW16のtrace整数性は構成後の非全射性という帰結。ともに記述・適用を照合した範囲で、外部証明の独立検証ではない。
- カタログ内関係：他2論文の主定理・導入と本稿の構成/参考文献を比較。本稿からの直接入力としては確認できない。injectivityは核の無限位数、irrational-traceはtorsion-freeの主張を伴わない非有理traceであり、同じ主張/同じ群とは扱わない。
- 未確認：§§4–6の全bit-level表・確率計数、§7.2–7.4の全diagram変形と一球overlap、Lemma8.5の核同定、§§9.4–9.6の全template/rounding誤差、全定数条件の独立検算。本文にも明記。群環idempotent不存在の別稿[32]は未照合で依存辺にしない。
- 日英冊子PDF・公開用コピー・サイト登録・commit/push：未実施。第2段階サイト本部が担当。

## 再生成

```sh
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --registry drafts/catalog-285/kadison-kaplansky-projection/citations.json
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 drafts/catalog-285/kadison-kaplansky-projection/diagrams/render.py
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-285/kadison-kaplansky-projection/citations.json
```

publicを含む完全なcheck:citationsは第2段階に行う。今回publicへコピーしていないため、text-only成功を公開検査成功と読み替えない。

## 本部の表示指摘への修正（初稿後）

- 2026-10-15 12:40 UTC：本部から日英PC/375pxのoverflow・MathJax・アンカー0エラー、図6枚に欠け/重なりなしと報告を受領。
- 同時に指摘されたguideRole末尾の句点重複をcitations.jsonで除去し、本文引用案内を再生成。数学内容・図は不変。担当text-only再検査成功。

- 2026-10-15 12:45 UTC：別担当Astra内容レビューの指摘を受け、§3 step1の定数保存・gapがpruning前の $Y^0$ に関する性質であると日英に明記。原典Proposition 6.3 p. 24を再照合し、pruning後の $Y$ は後続の $\Pi O\Pi$ 圧縮評価で扱う旨を補足。図の式は変更不要。本文引用再生成・text-only検査成功。

## 第2段階（2026-10-15）

本部がサイト組込み・日英冊子PDF・公開前検査を完了。数学文・引用・図は変更せず、記事のproof-targetを次の主張へ連結する改ページラッパーを追加（無理数traceの主結果引用は前段落へ連結）。案内のPDF注記は共通コンポーネントによる実導線へ更新。日英全紙面を別Astraが点検。詳細はcoordination/catalog-285/stage2/。commit/push/公開は未実施。
