# カタログ公開チェックリスト

制作セット1.3。`coordination/catalog-042/RELEASE_CHECKLIST.md` へコピーして使う。
各項目に担当・確認日・結果やログの場所を記録する。チェックを付けるだけで済ませない。

- 対象番号／仕様版：042／1.3
- カタログ本部／サイト本部：042本部（記事担当兼任）／本チャットがサイト本部を兼任（2026-10-10の公開指示）
- 構成：single（1本）
- 現在のユーザー依頼範囲：日英サイト・PDF・公開確認（追加指示「じゃあ記事を公開してください.」）
- 状態：公開前検査完了、commit・push・配信確認待ち。内容・形式の照合範囲はCONTENT_REVIEW.md／FORMAT_REVIEW.md。公開工程はPUBLICATION.md。

## 内容と成果物（記事担当・カタログ本部）

- [x] 公式一覧の収録本数・順序・正式タイトル・分野・英語表記が台帳と一致。担当：042本部、2026-10-10。inventory.jsonとofficial-entry.txt。overview p.6、CONTENTSの別見出しを併記。
- [x] 収録原典の版・URL・ページ数・ハッシュを確認。担当：042本部、2026-10-10。inventory.json。56ページ、2026-09-23、同一記事なし。外部入力の未取得分はPREPARATION_NOTES.mdに残す。
- [x] 全記事の日英本文、必要な図のTeX/SVG、出典・状態記録が揃った。初稿の時間上限による未完成を完成扱いしていない。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 主要結果の仮定・量化・番号・結論・ページ、証明の道筋、図直後の説明、引用段落が共通形に合う。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 直接入力について、供給結果・利用箇所・用途・適用仮定・照合範囲が記録されている。未確認は断定せず本文にも反映。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 日英の定理・仮定・数式・節・図・出典・未確認範囲が対応。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] カタログ冒頭にPDF導線と公式順の記事入口がある。タイトルは記事へ、原典は別リンク。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] カタログの流れの数が内容に合い、担当人数や034の3分類をコピーしていない。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 表示名が台帳と一致。本文・図・接続UIでOI/WV/LA等の内部キーだけを論文名にしていない。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 総括の図・文章・接続記録・記事の結果／証明段階が対応。図が不要なら理由を記録。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 1本の場合：短い入口＋記事1本とし、重複する証明説明・空の依存表・論文選択UIを省いた。複数本では本項を対象外と記録。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。

## 組込み（サイト本部）

- [x] `src/data/site.mjs` の分野・カタログ・論文登録、両言語ルート・案内・掲載数を確認。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] カタログ表示が対象データを参照し、033の固定データ・固定3分類を誤って表示しない。単論文／関係図なしの省略条件も確認。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 共通本文16px相当、補足14px相当を使用。ヘッダー・図拡大・AI注意書き・言語切替を維持。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 新規・既存アンカー、図中引用、記事間リンク、別カタログの固定版を保持。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] Git競合マーカーがなく、他担当の変更を保持。共通ファイルとPDF版情報は順番に統合。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。

## 実行と画面確認（サイト本部）

以下の `NNN` はサイトへ登録済みの番号へ置換する。PDFのPython環境はリポジトリ内の `scripts/pdf/README.md` を参照する。

```sh
npm run check:citations
npm test
npm run build
npm run check:links
npm run pdf:catalog -- --catalog 042
npm run build
npm run check:pdf
npm run check:links
```

図を変更した場合は、その図だけの生成手順をビルド前に実行する。既存の一括図コマンドが新カタログを処理するとは仮定しない。共有PDF組版や共通本文表示を変えた場合は、`check:pdf`で古いと判定された既存カタログも必要に応じて再生成する。

- [x] テスト・ビルド・内部リンク確認が成功し、実行結果を記録。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 日英のカタログと新規／改訂した全記事を375px幅で確認。横はみ出し、図の欠け、MathJaxエラーなし。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] PC幅でも長いタイトル・図内ラベル・引用の重なりを確認。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 図の拡大／全体表示／引用、接続UI（ある場合）、日英切替とアンカー維持を確認。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 新しいMarkdownの定理カード、出典行、証明段階が実際に共通表示になっている。ファイルの見出し確認だけで代用しない。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。

- [x] CITATIONS.mdの書式、誌面/PDFページの併記、同一記録からの本文・図生成を確認。check:citationsで古い図・公開コピー漏れなし。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 033・034の実画面と比較し、出典行・定理・証明段階の表示が共通。番号や略号の旧形式をコピーしていない。比較したページと結果を記録。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。

## PDF（サイト本部・必須）

- [x] 日英両方を生成。カタログ冒頭から対応言語の `public/pdf/catalog-042-{ja,en}.pdf` を開ける。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 冊子の章数は案内1章＋公式一覧の論文数。1本なら2章。図数は実際の収録図に一致。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] `src/data/pdf-editions.json` とPDFを一緒に更新し、再ビルド後の `check:pdf` が成功。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 日英の表紙・目次・本文・長い数式・図・改ページを画像で点検。新規／修正した全図、長い表示名が入る箇所を確認。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] PDF内の目次・記事間リンク・原典リンクを確認。紙面では不要な操作UIが除かれ、必要な接続・確認範囲は残る。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。

生成コマンドが成功しても目視確認の代わりにはならない。PDF未生成・表示未確認なら、その項目の担当と次の操作を記録し「公開準備完了」にしない。

## 公開（現在のユーザー依頼の範囲でサイト本部が実施）

- [ ] 公開する差分・最新Git状態を確認し、通常のcommit・pushで反映。他担当の成果物を消していない。
- [ ] GitHub Actionsのbuild/deploy成功を確認。
- [ ] 公開URLで日英カタログ・記事・画像・PDFが今回の版に更新されたことを確認。
- [ ] 公開URL・commit・確認結果・残る数学的未確認を報告。

公開指示を受領し、日英サイト・PDF・検査を本チャットで実施。公開配信の確認は上の公開4項目で別管理する。機械的検査の成功を全証明の独立検証や専門家査読済みと表現しない。

## 残作業

| 項目 | 担当 | 状態・証拠 |
|---|---|---|
| 日英記事・図・案内・引用記録 | 042本部兼記事担当 | 初稿完了、CONTENT_REVIEW／FORMAT_REVIEW |
| サイト組込み・日英PDF・画面検査 | サイト本部（本チャット） | 完了、PUBLICATION.mdとvalidation/ |
| 公開配信・公開URL確認 | サイト本部（本チャット） | commit・push後にActions・実サイトを確認 |
| 数学的な残る照合 | 後続編集 | 記事末尾・sources.jsonのunresolved。独立検証未了を保持 |

## 制作セット1.3の必須形式

[FORMAT_CONTRACT.md](../../production/FORMAT_CONTRACT.md)を適用する。共通の公式順表、図前の文献一覧、本稿内／外部の引用区別、証明対象・原典読書案内の4項目を埋める。各記事の受領時に見本と比較し、全記事完成まで待たない。`npm test`と`npm run check:citations`に加え、034の表・Schnell・033 Orbifold Iitakaと実画面を比較し、日英PC／375pxと日英PDFの証拠を記録する。

- [x] 共通表の4列と必須情報を034と比較した（1本の場合も必須）。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 図より前に著者・用途・版・リンクの文献一覧があり、033の見本と比較した。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 本稿内は無略号、外部は定義済み略号であり、本文・図・PDFで一致する。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。
- [x] 全証明節の対象と、末尾の結果・ページ・読む目的をSchnellと比較した。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。

## 主張と証明の対応（1.3必須）

- [x] 主要結果の全結論に証明概略と説明先を対応させる。必要な全体図を詳細節より前へ置く。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 独立して証明を解説する命題は、図より前に原典の仮定・結論・番号・ページを記す。番号だけの「証明対象」で代用しない。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 主張欄、mainResults、statements、conclusionCoverageをFORMAT_CONTRACT.mdに従い用意し、日英を揃える。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 本部は原典の仮定・量化と主定理への接続を照合する。受領記録には各主張の原典ページ、各結論の説明先、確認済み／未確認を残す。 確認：042本部、2026-10-10。CONTENT_REVIEW.md／FORMAT_REVIEW.md／draft-validation.json。
- [x] 自動検査に加え、Schnell・Orbifold Iitakaとの主張欄→図→直後の説明の画面比較、日英PDFへの反映を確認する。 確認：サイト本部（本チャット）、2026-10-10。PUBLICATION.md、validation/release-*.log、integrated/checks.json、pdf-pages/。

## 履歴と今回の受領（2026-10-10、042本部）

準備段階では公式同定と原典同一性の2項目のみ完了した。その後の制作開始指示により、今回記事制作とローカル内容・形式確認を追加した。詳細は記事status、CONTENT_REVIEW、FORMAT_REVIEW。その後の公開工程で日英PDF・サイト統合の項目を完了した。初稿時点の未完了範囲はcompletion.json等の履歴に保持する。
