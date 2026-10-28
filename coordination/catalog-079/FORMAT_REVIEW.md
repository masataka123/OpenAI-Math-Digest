# 第1段階の形式点検

**最終状態：2026-10-28、日英2記事・案内を共通表示で確認済み。** GT追加照合の反映後にEW/overviewのみ再表示・再撮影し、数式/導線/画面と点検ハッシュの一致を確認。現版の根拠はvalidation/stage1-verification.json。以下の「待ち」「再確認する」は途中経過として保持。

担当はMODEL_PROVENANCE.jsonの本部。数学の内容点検はreviews/を参照。

対象は未公開原稿。既存共通renderer/CSS/数式表示で隔離プレビューを生成する。サイト登録やpublic変更は行わない。第2段階のcatalog:prepareに代える公開前検査ではない。

| 必須項目 | 入力元 | 表示先 | 検査・目視 | 状態 |
|---|---|---|---|---|
| 公式順4列表 | inventory.json / overview/presentation.json | 日英案内 | 共通renderCatalogInventory、034見本比較 | 原稿受領待ち |
| 図前文献一覧 | 各citations.json / sources.json | 日英図前 | 引用生成、033 Orbifold Iitaka比較 | 原稿受領待ち |
| 本稿内と外部引用 | 各citations.json | 本文・TeX/SVG | 同期検査・画面 | 原稿受領待ち |
| 証明対象と原典案内 | articleGuides | 日英本文 | アンカー・Schnell比較 | 原稿受領待ち |
| 全結論と証明の対応 | conclusionCoverage / Astra点検 | 主張・証明節・図 | 内容はAstra、形式は本部 | 原稿受領待ち |

既存基盤の事前テスト：validation/baseline-tests.log。対象079未登録のため、この成功は079の内容検査ではない。
日英冊子PDF、正式サイトの導線/図拡大/言語切替、公開コピー照合は第2段階。

## 見本の確認

034一覧の4列、版・ページ・原典と記事の別リンク、375pxの横スクロールを確認。033 Orbifold Iitakaの文献一覧では本稿内番号の説明、キー・著者・正式タイトル・用途・版を参照。Schnellの主張欄の共通書体・余白・背景を確認。画像はvalidation/screens/のreference-preview-*、数値はvalidation/screen-report-catalog-034-schnell-orbifold.jsonを参照。初回034英語PCの画像load競合は読み込み待ちを追加して再検査し、validation/screen-report-catalog-034-schnell.jsonで解消確認。これは見本の確認であり079の合格ではない。

## 3次元稿の初回受領

担当の初稿引渡しを受領。日英本文と7組の図があり、引用text-only検査はvalidation/critical-citations.log。PC/375px検査はvalidation/screen-report-critical-wave-three.json。全図の担当目視は記事status.md参照。本部は日本語main図・英語round図の矢印/引用/箱の余白、375px主張欄を目視し、欠け・重なりを認めなかった。

引渡し直前に本文Theorem3.6の条件追記があるため、本文プレビューを最終版へ更新してから最終形式受領とする。数学的条件の承認はreviewer担当。

## 両記事・案内の表示確認

共通rendererで日英2記事と案内を生成。数式エラー・statement/conclusionCoverageアンカー欠落なし（preview-checks.json）。引用の3レジストリはvalidation/citations-final.log。図原本/生成物の同一性はvalidation/diagram-manifests.json。

全次元稿のdisplay math前後の空行不足で共通表示HTMLが不整合となった箇所を著者が修正し、再生成で解消。共有rendererは変更していない。図単体スクリーンショットにstickyヘッダーが重なる撮影上の問題も修正し、最新画像では先頭箱を含め目視した。

validation/screen-report.jsonは両記事・案内・033/034見本の日英PC/375pxの記録。ページ全体のはみ出し、数式エラー、画像失敗を検出せず。日英の言語選択はスクロール後も表示。図拡大のモーダルや正式サイトの言語アンカー遷移は第2段階の共通検査対象。

本部目視：079日英の公式順4列表は034と同じ列・順序・リンク・版/ページ表示を保持。375pxの表横スクロールは見本と同じ。033と比較し、EW/CWの図前文献一覧が本稿内番号と外部キーを区別し、著者・題名・用途・版を示す。Schnellと比較し、主要主張欄と図の箱/矢印/引用/説明の余白を確認。EW critical日本語図・Schrödinger英語図、CW main日本語図・round英語図に文字/引用の重なりを認めなかった。全図の著者目視は各status.md。

GT入力の追加照合で本文・引用案内が更新された場合は、その対象だけプレビューと画面を更新して再確認する。

## 最終受領

GT反映後のEW文献案内・末尾、overview確認範囲を日英PC/375pxで再確認。validation/screen-report-euclidean-wave-overview.jsonを最新の根拠とし、変更のないCWと見本はvalidation/screen-report.jsonの同一HTML版を照合して再利用。最新の図単体画像は固定ヘッダーを非表示で撮影し、EW critical日本語図の先頭箱まで欠けなく表示されることを目視。更新後の局所リンク検査にも欠落なし。

本段階の形式受領は完了。サイト登録、公開コピーのcheck:citations、正式サイトの操作検査、日英冊子PDF、公開確認は第2・第3段階へ引継ぎ。
