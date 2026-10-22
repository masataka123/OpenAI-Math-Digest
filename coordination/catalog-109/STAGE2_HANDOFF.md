# カタログ109 第2段階の完了と公開への引継ぎ

現在は第3段階の公開・反映確認まで完了。[PUBLICATION.md](PUBLICATION.md) が最新の結果と再開案内。本書の段階終了時の記述は履歴として保持する。


状態は **公開準備完了・未公開**。ユーザーの「第二段階をお願いします」に従い、サイト組込み・日英冊子PDF・公開前検査を終えて停止する。commit・push・GitHub Actions・公開反映確認は未実施。

## 確認版と成果物

- 制作セット1.4と2026-10-20のモデル分担を継続。本部と機械処理はMODEL_PROVENANCE.jsonのstage2記録を参照。数学の本文・図・日英の意味に変更はなく、新たな数学執筆/点検担当の起動は不要だった。
- 第1段階のAstra執筆・独立内容点検はCONTENT_REVIEW.mdとreview/content-manifest.jsonを参照。同一版の継続利用をstage2/preservation.jsonで確認した。原典の版・URL・頁・SHA-256はinventory.jsonを正本とする。
- `src/data/site.mjs` に公式分野Theoretical computer science → 109 → paper ID `integer-multiplication-below-n-log-n` を登録。説明文はAstraのpresentation.jsonを参照し、数学の案内を本部で新規執筆していない。共通の日英ルート・4列表・記事表示を使用。
- 確認済みの日英TeX/SVGを `public/diagrams/catalog-109/integer-multiplication-below-n-log-n/` へ配置。再コンパイルはしていない。完全な共通引用検査で原本・生成物・公開コピーの一致を確認した。
- `public/pdf/catalog-109-ja.pdf` と `catalog-109-en.pdf`、`src/data/pdf-editions.json` の109を生成・登録し、案内冒頭の対応言語PDF導線を確認。構成は案内＋記事の2章、各言語3図。数値・ファイルハッシュ・版情報は下記の原機械記録を参照する。

## 検査の正本

共通 `catalog:prepare --catalog 109` の実行IDは **2026-10-22T04-32-56.674Z-15511**。実行フォルダを次へ同内容で保存した。

- [共通処理の引継ぎ](stage2/runs/2026-10-22T04-32-56.674Z-15511/HANDOFF.md)
- [工程・版・環境・時間](stage2/runs/2026-10-22T04-32-56.674Z-15511/report.json)
- [画面の画像一覧](stage2/runs/2026-10-22T04-32-56.674Z-15511/browser/index.html)
- [今回の担当者の目視と判定](PREPARATION_REVIEW.md)

全工程の機械検査が成功。担当者は日英PC/375px、034一覧・Schnell・033 Orbifold Iitakaとの比較、AI注意書き・案内役・PDF導線、全6図と日英冊子の全ページを目視した。欠け・重なり・内容の欠落を認めなかった。PDFの表紙/目次/主張/図/長い式/文献/未確認範囲を保持。紙面証拠はstage2/pdf-review/、表示用切り出しはstage2/screen-review/。元の共通画面記録を正本とし、切り出しを別検査と数えない。

公開前の検査後に数学内容・共通表示・PDFを変更していない。検査版の最終照合はstage2/final-state.jsonを参照する。他のPDF版情報・担当外ファイルの保持はstage2/preservation.json、共有登録差分はstage2/site-registration.diffを参照する。

## 第3段階の再開

1. 現行規約・本引継ぎ・PREPARATION_REVIEW.mdと最新Git状態を確認する。作業場は共有リポジトリのmain。第2段階開始時のHEAD/差分はstage2/base-commit.txt、git-status-start.txt。共有作業場には今回以外の差分が多数あるため、一括stageせず、109の成果物とその登録/版情報の変更だけを公開対象にする。
2. 第1段階原稿・引用・出典・inventory、図の公開コピー、日英PDF、必要な制作/確認記録を含める。`src/data/site.mjs` と `pdf-editions.json` は109以外の未コミット差分を混ぜない。開始時の共有ファイルはstage2/に保存済み。担当外をreset/復元しない。
3. 確認済み同一版なら原典読解・執筆・図コンパイル・PDF生成・記録転記を繰り返さない。最新差分と原記録のHTML/PDF/内容版を照合し、変更された対象だけ必要な再検査を行う。必要な全工程の再実行は、保存HANDOFFにある実際のNodeで共通 `scripts/prepare-catalog.mjs --catalog 109` を使う。
4. ユーザーから公開を指示されたら対象変更をcommit/pushし、Actionsのbuild/deployと日英ページ・図・PDFの反映を確認する。今回の第2段階では公開権限を推定して進めない。

公開後の予定経路は `/ja/catalog/109/`、`/en/catalog/109/` と日英の `/papers/integer-multiplication-below-n-log-n/`。未公開なので現在の公開サイトに反映済みとは報告しない。

数学の留保は第1段階から維持している。有限ネットワーク全辺/guard全ケースの独立再計算、低水準実装・実行可能乗算器、外部全証明、HAL版と取得不能の著者サイト版のバイト同一性は未検証。紙面/画面検査の合格はこれらの検証完了を意味しない。
