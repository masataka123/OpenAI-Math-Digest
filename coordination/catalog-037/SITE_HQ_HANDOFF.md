# カタログ037 サイト本部引継ぎ

> **現在：第3段階まで完了、公開・反映確認済み。** 公開commit `1b06837b5f2ac47de91ff3a59b580984f0840cf4`。日英2記事・案内・16 SVG＋16 TeX・日英PDF（35/41頁）を公開し、Actions成功・配信44資産の一致・20画面条件・4操作経路を確認。最新の記録は [PUBLICATION.md](PUBLICATION.md)。作業場所は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。第2段階の詳細は [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md)。他担当の変更を保持し、公開工程の残作業はない。数学的未確認範囲はSOURCE_REVIEW.mdと記事末尾に維持。追加改訂時は最新Git状態・本記録・制作セットを読み、依頼された範囲で再開する。以下は第1段階停止時点の履歴。

## 現在地と停止条件

**第1段階（記事制作・内容点検・カタログ案内）を内容編集済みとして引き渡す。ここで停止する。** 第2段階のサイト組込み・公開用資産・日英PDFは未着手であり、公開準備完了ではない。再開指示後に第2段階を実施して再び停止し、第3段階は公開指示後のみ進める。

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`
- ブランチ：`main`。開始HEAD `68a2b0bf8537d45ce45d0675630331348f35d534`。ブランチ切替・commit・pushなし。
- 仕様：制作セット1.4＋2026-10-11/12補足。AGENTS、PROJECT_PLAN、production一式を読んで適用。
- 既存のAGENTS/PROJECT_PLAN/production変更11ファイルと034休止記録2ファイルを保持。開始時の既存3485ファイルはハッシュ比較で変更なし。途中から別担当の `coordination/catalog-338/`、`drafts/catalog-338/` が現れたが、読解・編集・整理の対象にしていない。
- 本部の作成・編集範囲は `coordination/catalog-037/` と `drafts/catalog-037/`。src/public/dist・他カタログ・共通表示へ書込みなし。

## 公式台帳と成果物

公式スナップショット `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb` は調査時のmainと一致。公式overview版October 6, 2026のp.5、Algebraic and complex geometry（表示順2、TeX subject anchor3）。overview題名は **The sharp ordinary-double-point volume gap**、CONTENTS見出しは **The ordinary-double-point volume gap**。差を台帳に残した。

| 公式順 | 記事・保存先 | 原稿版/頁 | SHA-256 |
|---|---|---|---|
| 01 | `drafts/catalog-037/ordinary-double-point-gap/` — The ordinary-double-point gap in every dimension | September 24, 2026 / 57頁 | `5e2cdac4857afef7065967c49c6f4f9a1aec01b0b776ce324220707545e8e114` |
| 02 | `drafts/catalog-037/normalized-volume-gap-four/` — The normalized-volume gap in dimension four | September 24, 2026 / 20頁 | `6d58101115e4bf4f963ea2bc4e301f041eaff601e3b325ec475200e43e3031a4` |

既存記事との重複なし。同じ論文を再制作せず、この2IDを登録する。正式URL/分野membership/取得記録は `inventory.json`、原典PDFと抽出本文は `source/01.pdf/.txt`、`source/02.pdf/.txt`。

- 各記事：`article.ja.md`、`article.en.md`、`sources.json`、`citations.json`、`status.md`、`catalog-changes.md`、`diagrams/`。外部入力の保存は01の `external/`、02の `research/`。
- 案内：`drafts/catalog-037/overview/article.{ja,en}.md`、`presentation.json`（公式順共通4列表2行）、`connections.json`、`sources.json`、`citations.json`、`status.md`。
- 図：全次元4種、四次元3種、案内1種。それぞれ日英TeX/SVG、計16SVG＋16自立TeX。各TikZ原本・共通引用マクロ・render.py・生成ハッシュも保存。
- 本部：`README.md`（計画/構成判断）、`SOURCE_REVIEW.md`（内容照合）、`FORMAT_REVIEW.md`（形式/画面）、`RELEASE_CHECKLIST.md`、本引継ぎ。
- 未公開レビュー用画面：`preview/overview.ja.html` / `.en.html`と2記事の日英HTML。共通レンダラー/CSSを利用した隔離プレビューで、サイト登録ではない。

## 内容・分担・時間

01担当 `article_all_dimensions`、02担当 `article_fourfold`、別担当 `source_review` と本部が内容照合。主結果・正規化・次元・定数・評価方向、上界/等号必要条件/最適性の各論証と直接入力を照合。四次元記事はnormal Gorenstein sectionの根拠、Hilbert変数s=0の明記を初稿中に補った。全次元図のprimitive facet supportへの表現限定は初稿後の追加編集として別記録。

| 論文 | 初稿開始 | 初稿終了 | 所要時間 |
|---|---|---|---|
| 01 | 2026-10-12 20:09:49 JST | 20:31:28 JST | 21分39秒 |
| 02 | 2026-10-12 20:09:00 JST（分単位の保守的記録） | 20:29:07 JST | 約20分 |

両者とも原典確認・執筆・図・検査を含む初稿60分上限内。下限を設けず、追加編集はstatusに別枠で記録。本部の案内編集・照合・画面点検は記事初稿と区別する。

確認した論文間の直接辺は02 Theorem1.1→01 Theorem2.4/§8.2の四次元基底。01が02の結論を含むことを逆向きの証明依存にしない。案内はこの直接辺と01内の大域系への帰結利用を連続した1図で示す。分類カード/選択UIは不要と判断した。

## 検査結果と証拠

- 引用本文/TeX：`sync-citations --check --text-only --catalog 037`成功、3レジストリ/12ファイル。新規は全てauthor-key。
- SVG：16枚の全140引用リンクがレジストリと一致。`local-citation-checks.json`。
- 日英：表示数式20式/言語（空白/文末句読点を正規化）一致、引用ID順・図順一致。インライン表記の差は個数でなく全文の意味対応を点検。
- 構造：日英6ページのMathJaxエラー0、主張/結論/読書案内アンカー欠落0、内部記事リンク/アンカー正常。`preview-checks.json`、`validation-stage1.json`。
- 画面：1280px/375pxの全12画面で横はみ出し0、MathJaxエラー0、言語切替表示。全16図のPC画像を点検。`screen-checks.json`、`screenshots/`。
- 見本：034の共通表、Schnellの主張・証明節、033 Orbifold Iitakaの図前文献案内との隔離画面比較。`reference-screenshots/`と`FORMAT_REVIEW.md`。ライブ公開画面/PDF比較は未実施。
- 既存テスト37件成功：`tests-stage1.log`。公開コピーを要求する1統合テストを明示除外。**完全なnpm test / check:citations / build / check:links / check:pdfは未実施**。第2段階で実行する。
- 原典ハッシュ・図manifest・既存3485ファイル保持：`validation-stage1.json`。

## 未確認・未実施

数学的な留保は両言語本文、各sources/status、SOURCE_REVIEW第5節に記載。01のorbifold局所解析・moment不等式の全計算・adjoint lifting全構成・環論的細部、02のcharacter-sensitive jet全構成・Fourier積分の全再計算・lc中心のsheaf移行の全独立検証は行っていない。外部結果は記述と適用を確認する範囲で、その証明を再帰検証していない。執筆者以外の内容照合を行ったが、専門家査読済み/数学的正しさの認定とは呼ばない。

サイト登録、公開用図コピー、実サイトの図拡大/切替操作、日英冊子PDF、PDF版情報、公開前総合検査、commit/push/公開は全て今回の範囲外として未実施。PDF待ちの状態をカタログ全体完成と報告しない。

## 第2段階の再開手順

1. 現在のAGENTS/productionとこの引継ぎ、Git状態を読む。037以外の進行中変更を保持する。既存原稿・固定原典をそのまま再利用し、初稿を作り直さない。
2. 既存の登録方法に沿って2記事・案内・分野をサイトへ組込む。公式番号037と内部IDを区別。overview/presentation.jsonの共通表を使い、別カタログの固定表示を混ぜない。
3. 必要な図だけ再生成しpublicへコピー。再生成手順は各status。新しい書誌/引用を変更する場合は共通レジストリから本文/TeXを同期する。初期生成スクリプトで編集済み本文を上書きしない。
4. `npm run check:citations`、`npm test`、`npm run build`、`npm run check:links`を実行し、日英全実ページを確認。
5. `scripts/pdf/README.md`を読み、`npm run pdf:catalog -- --catalog 037`。日英とも案内＋2記事＝3章、各8図。PDF版情報も更新、再build、check:pdf、check:links。冒頭に対応言語PDFリンクを入れる。
6. 日英PDFと実サイトのPC/375px画面・図拡大・引用・言語切替・アンカーを点検。今回の隔離プレビューで代用しない。033/034との最終表示比較を記録する。
7. 第2段階の結果と残作業を報告して停止。公開指示を受けてから第3段階へ。

## 第1段階の局所検査を再実行する場合

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node scripts/sync-citations.mjs --check --text-only --catalog 037
node coordination/catalog-037/build-preview.mjs
node coordination/catalog-037/check-local-citations.mjs
python3 coordination/catalog-037/validate-stage1.py
node coordination/catalog-037/check-preview.mjs
```

最後のChrome起動にはこの環境でサンドボックス昇格が必要だった。参照画面はmake-reference-preview/check-referencesで再生成できるが、既存distの版に依存する。図単独スクリーンショットは固定ヘッダーの写込みを避けるためヘッダーを隠し、ページ画面の撮影では隠していない。

最終受領：2026-10-12 20:35 JST。初稿後のfacet表現修正と再生成を含む最終版を受領。段階1の局所検査は全て成功し、第2段階は未着手のまま停止。
