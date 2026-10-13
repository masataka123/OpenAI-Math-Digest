# カタログ036 公開チェックリスト

production/RELEASE_CHECKLIST.md（制作セット1.4）の段階・担当・証拠要件を036に適用。確認日：2026-10-13。

- 対象：036 Numerical semiampleness and generalized minimal models。
- カタログ本部：本チャット。本部執筆1本＋3記事担当。構成multi、4篇。
- 現在の依頼：第3段階。**公開確認済み**。PUBLICATION.md参照。
- 第2段階（組込みと日英PDF）：本チャットのサイト本部が完了。第3段階：公開指示を受けたサイト本部。

## 段階と停止

- [x] 第1段階：日英記事・図・引用・案内・別担当の内容点検・未確認事項・再開手順を保存して停止。証拠：HANDOFF.md、CONTENT_REVIEW.md、UNRESOLVED.md。
- [x] 第2段階：日英サイト・必須PDF・公開前検査を完了して停止。担当：本チャット。証拠：STAGE2_HANDOFF.md、stage2/。
- [x] 第3段階：commit/push、Actions build/deploy成功、公開80リソース一致・28画面・8操作経路を確認。stage3/参照。

## 内容と成果物

- [x] 公式本数・順序・正式タイトル・分野・英語表記：inventory.jsonと固定overview/CONTENTS。036は4篇、overview p5、Algebraic and complex geometry。
- [x] 原典版・URL・頁数・SHA256：inventory.json、各sources.json。4原稿ハッシュを再検査。重複記事なし。
- [x] 全記事日英本文、必要TeX/SVG、引用・状態記録：drafts/catalog-036/各paper ID。各初稿60分以内、時間はstatusとCONTENT_REVIEWに記録。
- [x] 主結果の仮定・全結論・番号・頁・証明帰着：CONTENT_REVIEWの結果別対応表。4本とも執筆者以外の対照担当を記録。
- [x] 独立中間命題の主張を図前へ提示、既出主結果は参照。mainResults/proofTargets/statements/conclusionCoverageあり。
- [x] 直接入力の記述・適用条件・供給内容・使用先・照合範囲：各sources.json、本文依存表、UNRESOLVED。原記述未照合の入力を未確認と明示。
- [x] 日英の仮定・結論・数式・節・図・出典・未確認範囲を対応。本文marker順とanchorを機械確認し、数値/線形同値・ordinary/generalized・モデル種類を原典対照。
- [x] 公式順共通4列表と記事/原典別リンク：overview/presentation.json。PDF導線は第2段階で冒頭に配置し、実ファイルとの一致を確認。
- [x] 総括図1設計を採用。固定3分類なし。connections.jsonに採否理由、9件の結果単位接続、未掲載関係の未調査を記録。
- [x] 著者由来引用キー・図前文献案内・本稿内無略号・readingList：全記事。本文とTeXを各registryから生成。
- [x] 1本の短い入口要件：今回は4本なので対象外。

## 形式・表示（第1段階で可能な範囲）

- [x] 036限定citation text-only：5 registry、20生成テキスト一致。公開コピーは未作成のため完全なcheck:citationsは第2段階。
- [x] 図manifest100項目、本文アンカー・結論対応・日英marker・draft相互リンク：validation/stage1-checks.json。
- [x] 日英4記事＋案内のPC1280/スマホ375、計20画面でページ横はみ出し0、MathJax/pageerror0：validation/visual-checks.json。
- [x] 図の全日英PNGを担当が目視、本部が代表図・総括図・ND1全4図を目視。余白・引用・矢印・箱の重なりを点検。確認画像はvalidation/screensと各担当qa/review。
- [x] 034の公式順表・Schnellの証明節・033 Orbifold Iitakaの文献案内との実画面比較。CONTENT_REVIEWに対象と結果、validation/screens/reference-*に証拠。051は見本にしない。
- [x] 共通renderer/CSSの定理カード・出典行・証明段階を確認。長い数式と表は既存の局所スクロールを維持。数値検査だけの形式判定ではない。
- [x] 実サイトでの図拡大・引用クリック・全体表示・言語切替/アンカー保持：stage2/browser.jsonの8操作経路で確認。
- [x] 実サイト全テスト39成功、build115頁、126792リンク、公開コピー付き引用検査成功：stage2の各ログ。

## 組込み（第2段階）

- [x] site.mjsへ036の分野・4論文・multiカタログ・section IDsを登録。
- [x] 036の日英SVG/TeXをpublicへコピーし、日英routesを確認。
- [x] 共通文字・数式・言語切替・AI注意書き・キャラクターの案内を維持。
- [x] 036固有データを使用し、033専用データ/固定3分類を使わない。
- [x] 新規/既存アンカー、記事間リンク、固定版出典を確認。
- [x] 052と共有変更を順番に統合し、既存差分を保持。

## 必須の日英PDF（第2段階）

- [x] サイト本部が036だけを生成。public/pdf/catalog-036-ja.pdf、catalog-036-en.pdf（実生成名を照合）。
- [x] 各言語は案内1章＋4記事＝5章、図16点を確認。
- [x] pdf-editions.jsonの036のみ更新し、再buildして冒頭PDFリンクを確認。
- [x] 表紙・目次・全図・長い数式・出典行・改ページを画像で確認。
- [x] 目次/記事内/原典リンク、check:pdf、check:linksを確認。

担当は本チャットのサイト本部、確認日2026-10-13。日本語56頁・英語62頁、各5章16図。全紙面・全図をPNGで点検し代表8頁を拡大確認。stage2/VISUAL_REVIEW.mdとpdf-review/structure.json、browser.json、各検査ログ参照。既存22PDF・036以外の版情報を保持。

## 公開（第3段階）

ユーザーの第3段階指示で実施済み。PUBLICATION.mdとstage3/に公開commit・Actions・URLと照合結果を保存。

## 残作業

| 項目 | 担当 | 状態・理由 | 次の操作／証拠 |
|---|---|---|---|
| 数学的未確認 | 追加調査が必要になった担当 | 原稿に範囲表示済み | UNRESOLVED.md、各sources.json |
| 034 Kähler入力版差 | 次のサイト本部 | 旧記事10/4、036原典10/6 | 原典固定引用を維持。034の自動変更なし |
| サイト組込み・検査 | 本チャット | 完了 | STAGE2_HANDOFF.md、stage2/ |
| 日英PDF | 本チャット | 完了、56/62頁 | stage2/pdf-check.log、pdf-review/ |
| 公開・反映 | 本チャットのサイト本部 | 公開確認済み | PUBLICATION.md、stage3/ |
