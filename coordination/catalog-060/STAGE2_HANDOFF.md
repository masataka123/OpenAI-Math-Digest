# カタログ060 第2段階完了・公開引継ぎ

**公開準備完了。公開・反映確認は未実施。** 2026-10-22の「第二段階」の依頼に従い、ここで報告して停止する。

## 受領した内容版

第1段階の本文・案内・引用データを同一性照合して組み込んだ。元の数学的確認範囲は[第1段階の引継ぎ](SITE_HQ_HANDOFF.md)と[内容点検](reviews/CONTENT_REVIEW.md)を参照する。今回、縦長図がA4紙面で小さかったため、Astra執筆担当が2列の折返し配置に改訂し、別Astraが数式・引用・全矢印・全結論と本文の対応を確認した。本文や確認範囲は変更していない。

最新の図の内容点検は[STAGE2_FIGURE_REVIEW.md](reviews/STAGE2_FIGURE_REVIEW.md)、対象版は[STAGE2_FIGURE_REVIEWED_FILES.json](reviews/STAGE2_FIGURE_REVIEWED_FILES.json)。第1段階の対象版は履歴として保持し、旧図は`stage2/before/diagrams/`に保全した。担当・明示指定モデルと取得可能な情報の限界は[MODEL_PROVENANCE.json](MODEL_PROVENANCE.json)。

## 組込みと成果物

- `src/data/site.mjs`へ公式分野・060・paper ID `global-spherical-shells`を登録し、公式順の分野一覧から案内・記事・原典へ進める。案内の節IDは`papers/connections/sources`。
- 共通のCatalogMarkdownOverviewとCatalogDraftArticleを使用。共通4列表・AI注意書き・原典確認案内・日英切替・図の拡大を維持し、カタログ冒頭へ対応言語のPDF導線を配置した。
- `public/diagrams/catalog-060/global-spherical-shells/main.{ja,en}.{svg,tex}`を、最新Astra生成物と同じ版で配置した。図の原本・生成条件・生成物・公開コピーを共通引用検査で照合済み。
- 日英PDFは`public/pdf/catalog-060-{ja,en}.pdf`。収録内容はカタログ案内と記事。版情報は`src/data/pdf-editions.json`、ページ・ハッシュ・リンク検査値は下記の自動原記録を参照する。
- 既存の固定一覧テスト2箇所へ060を追加した。テストを無効化していない。共通表示・PDF生成・ブラウザ検査の実装や他カタログの数学本文は変更していない。

ローカルの組込み先は`dist/{ja,en}/catalog/060/`と`dist/{ja,en}/papers/global-spherical-shells/`。公開後に想定する経路であり、現時点で公開版が反映済みとは扱わない。042記事本体は今回も改訂していない。

## 検査と証拠

登録・配置後に共通`catalog:prepare -- --catalog 060`を実行した。最終受領した実行は次を参照する。

- [機械処理HANDOFF](stage2/runs/2026-10-22T07-16-37.833Z-27646/HANDOFF.md)
- [工程・対象版・実行環境の原記録](stage2/runs/2026-10-22T07-16-37.833Z-27646/report.json)
- [日英PC/375pxと指定見本の画面一覧](stage2/runs/2026-10-22T07-16-37.833Z-27646/browser/index.html)
- [担当者による目視・同一性・判定](PREPARATION_REVIEW.md)
- [形式比較](FORMAT_REVIEW.md)、`stage2/screen-review/`の部分画像と見本比較画像
- `stage2/pdf-review-final/`の日英全ページ画像・PAGE_INDEX・同一頁比較。初回の小さい図の紙面は`stage2/pdf-review/`に別保管し、最終承認の証拠にしていない。
- `stage2/pdf-evidence/`の組版HTML・図中リンク位置・PDFリンク検査記録

引用、テスト、ビルド、対象PDF、内部リンク、図の操作と引用保持、スクロール後の言語切替、日英画面を共通工程で確認。担当者が全紙面と指定見本との表示を確認し、欠け・重なり・読めない図を解消した。数値・ハッシュ・工程ログは自動HANDOFF/reportを唯一の参照先とし、本書へ複写しない。

実行の失敗・途中版も履歴として残した。初回の固定一覧テストの停止と、初回PDFの可読性による目視保留はPREPARATION_REVIEWに記録済み。各回の保存先と元の場所は[stage2/EVIDENCE_LOCATIONS.json](stage2/EVIDENCE_LOCATIONS.json)。保存した機械原記録内の元の絶対リンクは改変していない。別環境では保存フォルダ内の相対リンク・ログ・画像一覧を使う。

共通処理後にPDF版情報の既存の並び順だけを復元し、060のみ追加・既存値不変を確認した。PDF実体と表示入力は不変で、[対象PDFの追加照合](stage2/post-format-pdf-check.log)も成功した。最終同一性は`stage2/FINAL_IDENTITY.json`を参照する。

## 保留と完了の限界

Donaldson原典Theorem 1、Harvey–Shiffman Theorems 3.9–3.10の完全な記述、Trudingerの帯上定式化、および全解析評価・外部証明の独立検証は第1段階からの保留を維持する。概説の公開準備の完了を、原稿の完全な独立証明検証や専門家査読の認定に読み替えない。

公開準備について修正必須の残件はない。公開サイトでの反映、GitHub Actions、実機Safariは今回確認していない。

## 第3段階の再開

1. 現在のユーザーによる公開依頼を受けて開始する。本書、PREPARATION_REVIEW、RELEASE_CHECKLIST、最新Git状態と対象版を受領する。作業場はユーザー指定のcheckoutで、開始Git版・ブランチは`stage2/RECEIPT.json`。ブランチ切替・commit・pushは今回行っていない。
2. `stage2/FINAL_IDENTITY.json`とその参照原記録に対し、公開する本文・図・PDF・ビルド済みページが一致するか確認する。検査後の変更は影響範囲だけ再検査する。同じ内容・検査済みの図やPDFを公開のためだけに再生成しない。数式・論理・数学的日英の修正はAstraへ返す。
3. 今回の差分だけを通常のcommit・pushで反映する。既存の無関係な未追跡ファイルを一括追加しない。対象差分はサイト台帳、登録リストのテスト2箇所、060の日英記事・案内・出典と引用記録（第1段階から未追跡の成果物を含む）、図原本と生成物・公開コピー、日英PDFと060の版情報、060の制作・点検・引継ぎ記録である。差分と作業場保護の記録は`stage2/GIT_FINAL.txt`と`stage2/GIT_DELTA.json`。
4. Actionsの成功と、公開日英カタログ・記事・図・PDFの同一版の反映を確認して完了報告する。PDFは第2段階の検査済み版を使用する。

環境と再実行コマンドは自動HANDOFF/reportを参照。設定・環境が同じなら探索を繰り返さない。再検査が必要な場合は記録済みNodeで`scripts/prepare-catalog.mjs --catalog 060`を実行し、新しい実行別の記録と担当者判断を残す。
