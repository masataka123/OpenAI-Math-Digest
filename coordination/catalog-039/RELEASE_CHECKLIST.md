# カタログ公開チェックリスト

制作セット1.4。`coordination/catalog-NNN/RELEASE_CHECKLIST.md` へコピーして使う。
各項目に担当・確認日・結果やログの場所を記録する。チェックを付けるだけで済ませない。

- 対象番号／仕様版：039／制作セット1.4（2026-10-12補足まで）
- カタログ本部／サイト本部：本部root／サイト本部root
- 構成：multi（公式順4論文）
- 現在のユーザー依頼範囲：第3段階（公開・反映確認）。2026-10-15のユーザー再開指示でcommit・push・公開を実施。
- 状態：公開確認済み（第3段階完了、数学的保留を保持）。

## 段階と停止の記録

- 現在の段階：第1・第2・第3段階完了。
- 運用：第1段階後の再開指示により第2段階を実施し停止。
- 記事ごとの執筆担当／照合担当・確認範囲：CONTENT_REVIEW.mdと各記事status.md。
- [x] 第1段階：内容と成果物を確認し、未確認事項・作業場所・残作業・再開手順を記録して報告。標準運用では停止した。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 第2段階：日英サイト・PDFと必要な検査を完了。軽微な体裁調整を際限なく追加せず、公開準備の結果と再開手順を報告。標準運用では停止した。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 第3段階：現在の公開指示を確認し、対象変更の公開と反映確認を記録した。〔本部、2026-10-15。PUBLICATION.md／stage3/completion.json〕

## 内容と成果物（記事担当・カタログ本部）

- [x] 公式一覧の収録本数・順序・正式タイトル・分野・英語表記が台帳と一致。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 各原典の版・URL・ページ数・ハッシュを確認。既存記事との重複は同一IDを参照。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 全記事の日英本文、必要な図のTeX/SVG、出典・状態記録が揃った。初稿の時間上限による未完成を完成扱いしていない。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 主要結果の仮定・量化・番号・結論・ページ、証明の道筋、図直後の説明、引用段落が共通形に合う。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 直接入力について、供給結果・利用箇所・用途・適用仮定・照合範囲が記録されている。未確認は断定せず本文にも反映。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 日英の定理・仮定・数式・節・図・出典・未確認範囲が対応。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 公式順の記事入口があり、タイトルは記事へ、原典は別リンク。第1段階ではPDF導線の配置計画、第2段階では生成済みPDFリンクを確認。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] カタログの流れの数が内容に合い、担当人数や034の3分類をコピーしていない。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 記事一覧・接続UIの論文名が台帳と一致。新規引用はauthor-key形式で、キーを文献一覧に定義し、日英・本文・図・PDFで一致している。既存記事の旧表示は許容する。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 総括の図・文章・接続記録・記事の結果／証明段階が対応。図が不要なら理由を記録。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [ ] 1本の場合：短い入口＋記事1本とし、重複する証明説明・空の依存表・論文選択UIを省いた。複数本では本項を対象外と記録。〔対象外：4本構成〕

## 組込み（サイト本部）

- [x] `src/data/site.mjs` の分野・カタログ・論文登録、両言語ルート・案内・掲載数を確認。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] カタログ表示が対象データを参照し、033の固定データ・固定3分類を誤って表示しない。単論文／関係図なしの省略条件も確認。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 共通本文16px相当、補足14px相当を使用。ヘッダー・図拡大・AI注意書き・言語切替を維持。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 新規・既存アンカー、図中引用、記事間リンク、別カタログの固定版を保持。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] Git競合マーカーがなく、他担当の変更を保持。共通ファイルとPDF版情報は順番に統合。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕

## 実行と画面確認（サイト本部）

以下の `NNN` はサイトへ登録済みの番号へ置換する。PDFのPython環境はリポジトリ内の `scripts/pdf/README.md` を参照する。

```sh
npm run check:citations
npm test
npm run build
npm run check:links
npm run pdf:catalog -- --catalog NNN
npm run build
npm run check:pdf
npm run check:links
```

図を変更した場合は、その図だけの生成手順をビルド前に実行する。既存の一括図コマンドが新カタログを処理するとは仮定しない。共有PDF組版や共通本文表示を変えた場合は、`check:pdf`で古いと判定された既存カタログも必要に応じて再生成する。

- [x] テスト・ビルド・内部リンク確認が成功し、実行結果を記録。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 日英のカタログと新規／改訂した全記事を375px幅で確認。横はみ出し、図の欠け、MathJaxエラーなし。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] PC幅でも長いタイトル・図内ラベル・引用の重なりを確認。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 図の拡大／全体表示／引用、接続UI（ある場合）、日英切替とアンカー維持を確認。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 新しいMarkdownの定理カード、出典行、証明段階が実際に共通表示になっている。ファイルの見出し確認だけで代用しない。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕

- [x] CITATIONS.mdの書式、誌面/PDFページの併記、同一記録からの本文・図生成を確認。check:citationsで古い図・公開コピー漏れなし。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 033・034の実画面と比較し、出典行・定理・証明段階の表示が共通。番号や略号の旧形式をコピーしていない。比較したページと結果を記録。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕

## PDF（サイト本部・必須）

- [x] 日英両方を生成。カタログ冒頭から対応言語の `public/pdf/catalog-NNN-{ja,en}.pdf` を開ける。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 冊子の章数は案内1章＋公式一覧の論文数。1本なら2章。図数は実際の収録図に一致。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] `src/data/pdf-editions.json` とPDFを一緒に更新し、再ビルド後の `check:pdf` が成功。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 日英の表紙・目次・本文・長い数式・図・改ページを画像で点検。新規／修正した全図、長い表示名が入る箇所を確認。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] PDF内の目次・記事間リンク・原典リンクを確認。紙面では不要な操作UIが除かれ、必要な接続・確認範囲は残る。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕

生成コマンドが成功しても目視確認の代わりにはならない。PDF未生成・表示未確認なら、その項目の担当と次の操作を記録し「公開準備完了」にしない。

## 公開（現在のユーザー依頼の範囲でサイト本部が実施）

- [x] 公開する差分・最新Git状態を確認し、通常のcommit・pushで反映。他担当の成果物を消していない。〔本部、2026-10-15。PUBLICATION.md／stage3/completion.json〕
- [x] GitHub Actionsのbuild/deploy成功を確認。〔本部、2026-10-15。PUBLICATION.md／stage3/completion.json〕
- [x] 公開URLで日英カタログ・記事・画像・PDFが今回の版に更新されたことを確認。〔本部、2026-10-15。PUBLICATION.md／stage3/completion.json〕
- [x] 公開URL・commit・確認結果・残る数学的未確認を報告。〔本部、2026-10-15。PUBLICATION.md／stage3/completion.json〕

公開が未依頼ならこの節は「依頼範囲外」と明記し、公開前の作業まで完了させる。機械的検査の成功を全証明の独立検証や専門家査読済みと表現しない。

## 残作業

| 項目 | 担当 | 状態・理由 | 次の操作／証拠 |
|---|---|---|---|
| 公開・反映確認 | 本部root | 公開確認済み | PUBLICATION.md / stage3/completion.json |

## 制作セット1.4の必須形式

[FORMAT_CONTRACT.md](../../production/FORMAT_CONTRACT.md)を適用する。共通の公式順表、図前の文献一覧、本稿内／外部の引用区別、証明対象・原典読書案内の4項目を埋める。各記事の受領時に見本と比較し、全記事完成まで待たない。`npm test`と`npm run check:citations`に加え、034の表・Schnell・033 Orbifold Iitakaと実画面を比較し、日英PC／375pxと日英PDFの証拠を記録する。

- [x] 共通表の4列と必須情報を034と比較した（1本の場合も必須）。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 図より前に著者・用途・版・リンクの文献一覧があり、033の見本と比較した。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 本稿内は無略号、外部は定義済み略号であり、本文・図・PDFで一致する。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕
- [x] 全証明節の対象と、末尾の結果・ページ・読む目的をSchnellと比較した。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕

## 主張と証明の対応（1.3必須）

- [x] 主要結果の全結論に証明概略と説明先を対応させる。必要な全体図を詳細節より前へ置く。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 独立して証明を解説する命題は、図より前に原典の仮定・結論・番号・ページを記す。番号だけの「証明対象」で代用しない。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 主張欄、mainResults、statements、conclusionCoverageをFORMAT_CONTRACT.mdに従い用意し、日英を揃える。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 本部は原典の仮定・量化と主定理への接続を照合する。受領記録には各主張の原典ページ、各結論の説明先、確認済み／未確認を残す。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 自動検査に加え、Schnell・Orbifold Iitakaとの主張欄→図→直後の説明の画面比較、日英PDFへの反映を確認する。〔本部、2026-10-15、第2段階。STAGE2_REPORT.mdとstage2/logs・screenshots・pdf-review〕

## カタログ構成の必要性（1.4補足）

- [x] 分類数を先に固定せず、各分類の役割と違いを説明できる。不要な分類は省略した。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 主要な接続をまとめた図を検討し、一対一の辺が多いという理由だけで省略していない。全体像を示す図と細部を示す表の役割を分け、採用・再構成・省略の理由を記録した。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 一覧・分類カード・図・接続表・説明文の重複を整理し、詳細は記事の該当節へ案内した。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 「核心」「戦略」等の節も含め、独立して証明を説明する命題の主張が図前または参照先にある。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕
- [x] 図や分類を省いても、確認した関係・原典・未確認範囲の記録と必要な導線を保持している。〔本部、2026-10-15。CONTENT_REVIEW.md／FORMAT_REVIEW.md／inventory.json参照〕

## 今回の判定と未実施の扱い

本部、2026-10-15。第1段階成果物・内容点検・案内は完了。1本向け項目は対象外。サイト組込み／実行と画面確認の本番項目／PDF／公開は依頼範囲外で未着手。複合項目にPDFまたは公開コピーが含まれるチェックは、原稿側を確認済みでも未チェックのまま残した。

ローカル画面の20条件と指定見本比較、text-only引用、図生成hash、リンクはFORMAT_REVIEW.mdとvalidation/stage1.jsonに個別記録。Chow49原著箇所は保留。他担当の成果物は変更せず、全ファイルはchanged-files.txt。第2段階の担当はSITE_HQ_HANDOFF.mdの手順に従い、組込み・PDF生成・本番検査後に本表を更新する。

## 第2段階での更新

第1段階の履歴記述は当時の状態。現在はサイト組込み・日英PDF・全必須検査を完了して停止。数学的未照合は保持。リンク修正と再生成、全109ページ画像一致、28画面・8操作の証拠はSTAGE2_REPORT.md。公開節の4項目と第3段階は未実施のまま。

## 第3段階完了

2026-10-15T16:24:12.197599+09:00：通常のcommit・push、Actions成功、公開68リソースの同一性、28表示条件・8操作を確認。上の第1・第2段階の未実施記述は当時の履歴。現状はPUBLICATION.mdを参照。数学的保留は保持。
