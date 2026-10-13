# カタログ052 第2段階引継ぎ

> 現在は第3段階まで完了し、公開確認済み。公開URL・commit・検査結果は [PUBLICATION.md](PUBLICATION.md)。

## 状態と依頼範囲

- 2026-10-13、ユーザーの「第二段階お願いします」に基づき、当チャットがサイト本部を兼任。
- 状態：**第2段階完了・公開準備完了・停止**。組込み・日英PDF・引用／数式／リンク／画面／紙面の必要検査を完了。
- 作業先 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、既存ブランチ `main`。ブランチ切替・commit・push・公開は実施していない。
- 第1段階の原典照合・初稿時間は `SITE_HQ_HANDOFF.md` / `REVIEW_SOURCE.md`。第2段階は組込み工程であり、初稿の延長ではない。記事の数学的本文・主張・引用・図原本は変更していない。

## 組込みと成果物

- `src/data/site.mjs` に052・公式順2論文・分野の掲載順を登録。公式タイトル、固定commit、版・ページ数・URLは台帳から参照。
- 汎用 `CatalogMarkdownOverview` / `CatalogDraftArticle` を使用。4列共通表、案内図1種、記事図3種＋4種。共通表示コンポーネント・CSS・PDF組版系の修正なし。
- `public/diagrams/catalog-052/{overview,universal-cover-splitting,split-tangent-integrability}/` に日英16 SVGと16 TeXを配置。
- 案内の日英Markdownから「PDFは第2段階で生成予定」を削除。生成済みPDFへのリンクを共通metadataから表示。
- `public/pdf/catalog-052-ja.pdf`：28ページ、3章、247数式、8図。
- `public/pdf/catalog-052-en.pdf`：32ページ、3章、247数式、8図。
- `src/data/pdf-editions.json` に052の両言語の版・ページ数・content/file hashを追加。既存20冊のPDF本体・metadataは保持。
- `scripts/catalog-033.test.mjs` / `catalog-063.test.mjs` の既存分野一覧の期待値へ052だけを追加。記事や他カタログの登録内容は変更していない。

## 検査結果・証拠

本フォルダの `stage2/` に再現スクリプト、ログ、画面・紙面画像を保存。

| 検査 | 結果／証拠 |
|---|---|
| 全体引用検査 | 成功。`citations.log`は32レジストリ群・112管理ファイル。036追加後も37群・132ファイル成功（`citations-final.log`）。公開用コピーを含む。 |
| 既存テスト | 39件すべて成功。`tests.log`。036追加後も39件成功（`tests-final.log`）。初回2失敗は分野カタログ一覧の期待値の追加漏れで修正済み。 |
| サイトビルド | 105ページ成功。`build-first.log` / `build-final.log`。 |
| 最初の内部参照検査 | 105ページ・106,305参照成功。`links-first.log`。 |
| PDF反映後の内部参照 | 共有distの再生成と重なり初回はENOENT。固定snapshotの115ページ・126,792参照で成功。`links-final.log` / `links-snapshot.log`。 |
| 全PDF整合検査 | 052組込み時の11カタログ・22冊がcurrent（`pdf-check.log`）。036追加後も12カタログ・24冊がcurrent（`pdf-check-snapshot.log`）。既存20冊は再生成していない。 |
| 実ブラウザー | 日英×1280/375px×トップ・分野・案内・2記事＝20表示条件、ページ幅超過・MathJaxエラー・破損画像・JSエラー0。`browser.json` / `browser.log`。 |
| 操作導線 | 日英各2記事で分野→案内→記事、図拡大・拡縮・全体表示・原典引用popup、TeX取得、スクロール中の右上言語切替／アンカー、一覧へ戻る、PDFリンクとファイル一致を確認。 |
| PDF内部リンク | 各冊3章、内部24リンク。原典等の外部リンクは日本語118・英語120件。名前付き内部宛先の欠落0。`pdf-review/structure.json`。 |
| 紙面 | 全60ページを画像化し、全体一覧と密な図の拡大で目視。表紙・目次・主張・数式・全16図・長い引用・章と改ページを確認。欠け・重なりなし。`pdf-review/`。 |

外部引用popupは原典URLへの遷移を応答差替えで検査したもので、全外部URLのライブHTTP検査ではない。原典本文の確認は第1段階の範囲を引き継ぐ。ローカル画面のMathJaxは配布版と同じパッケージのローカル資産を使い、CDN障害に左右されない検査とした。

## 指定見本との画面比較

`stage2/screenshots/` の `*-model-034-*`、`*-model-schnell-*`、`*-model-orbifold-*` と052を比較。日英・PC/375pxの比較画像を保存し、共通4列表・定理欄→図→直後の説明・図前の文献案内・出典行を目視した。051を標準見本には用いていない。

- 034と同じ4列・書体・文字サイズ。052では2行を公式順で表示。小画面は表だけ横スクロール可能。
- Schnellと同じ主張欄・証明対象・図・段階説明。独立節Proposition 2.1の完整な主張を図前に保持。
- 033と同じ図前文献一覧で著者・正式タイトル・版・用途を定義。本稿内の結果は無略号、外部は1.4の著者キー。Hor08の誌面/PDFページ対応を維持。
- 共通本文16px、引用14px、AI注意書き、案内役、右上言語切替を保持。全図の拡大用SVGとTeX導線あり。
- PDFは表の各項目・論文順・原典・確認範囲を保持し、3章へ収録。図を割らないための余白は許容し、追加の微細な組版変更は行っていない。

## 数学的未確認事項

- KM98 Theorem 3.3の外部原典本文・正確な掲載ページは未確認。Universal Proposition 7.1での代入と利用は確認済みとして区別。
- Universal Appendices A–Dの別証明、外部定理の証明全体、技術全体の独立再構成は範囲外。
- Campanaの射影性はHor08の記述で確認し、その原証明は未読。
- 主要証明間に直接依存を確認しなかったことと、全参考文献・付録に依存がないことを混同しない。日英記事・案内・PDFに同じ限界を残した。

## 変更保持

`stage2/baseline.json` は開始時の追跡ファイル・036の既存ファイル・052原稿のhash。`preservation.json` に最終差分を記録する。制作ルール類の開始時変更と034停止資料は保持。036は別の並行作業によるファイル更新を観測したが、本チャットからは編集していない。作業途中に036側も第2段階へ進み、共通登録・PDF metadata・2箇所のテスト期待値へ036を追加した。052と036の両登録が共存し、互いのPDF情報を保持している。

## 第3段階の再開

1. 本書、`RELEASE_CHECKLIST.md`、`stage2/changes.tsv`、最新 `git status` を確認。036や制作ルールの未commit変更を052の公開対象に混入させない。
2. 現在の公開指示を受けてから実施する。公式版・記事内容は第1段階を引き継ぎ、再執筆は不要。
3. 本書の検査後に共通ファイルや原稿が変わっていれば、影響範囲の引用・test・build・links・PDF一致を再検査。冊子がstaleなら052だけ再生成。
4. レビューした052の原稿・inventory・必要なcoordination記録・公開用SVG/TeX・2冊PDF、登録とPDF metadata、2箇所のテスト期待値を選択してcommit。共有ファイルは036の差分も含むため、052だけの差分を選択するか、036の公開指示を確認した担当との作業順を人間ユーザーの認可に従って調整する。ファイル全体を無条件にstageしない。
5. mainへのpush、Actionsのbuild/deploy成功を確認。公開された日英6ページ・16SVG/16TeX・2PDFの反映とhash、言語切替・図・PDF導線を検査して公開確認済みとする。

公開予定ルートは `/OpenAI-Math-Digest/{ja,en}/catalog/052/` および `/OpenAI-Math-Digest/{ja,en}/papers/{universal-cover-splitting,split-tangent-integrability}/`。まだ公開済みとは報告しない。

## 再現環境

npmがPATHにないため、package.jsonと同じNodeスクリプトを直接実行した。Nodeは `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。
PDF用の以前の一時環境は失われていた。既存x86 Pangoに合わせ、`/private/tmp/catalog-052-pdf-x86` に `scripts/pdf/requirements.txt` の固定依存をインストールして復元。

```sh
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib PDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/python XDG_CACHE_HOME="$PWD/tmp/font-cache" node scripts/build-catalog-pdf.mjs --catalog 052
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check
node coordination/catalog-052/stage2/browser.mjs
/private/tmp/catalog-052-pdf-x86/bin/python coordination/catalog-052/stage2/pdf-qa.py
```

一時環境が消えている場合は同じrequirementsで再作成。共通PDF生成コード・requirementsには変更を加えていない。ブラウザー検査はローカルHTTPサーバーと一時Chromeを起動し、終了後に閉じる。紙面画像の生成には既存 `pdftoppm` を使用。

## 並行制作との干渉回避

052の画面検査終了後、036の第2段階が共通distを再生成した。最終リンク検査だけが途中のファイル欠落で停止したため、`/private/tmp/catalog052-stage2-validation`へ生成サイト・src・scripts・設定をコピーし、変更されないdistを検査した（snapshot.json）。036の原稿・登録・冊子を巻き戻さず保持。追加された036も含む115 HTMLを固定している。052の紙面／画面は先に検査した同じ本文・資産を用い、図・共通表示の追加変更はない。

第2段階終了：2026-10-13T20:47:28.939324+09:00。現在のshared distにある052の日英6ページは固定snapshotとすべてSHA-256一致（snapshot-052-match.json）。公開指示を受けるまで第3段階は未実施。
