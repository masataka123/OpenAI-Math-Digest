# 台帳・照合・引継ぎの記録

制作セット1.4。ここに示す新規の編集用データは、現在のサイトがそのまま読み込むAPIではない。サイト本部が既存データ形式へ対応させる。033・034の既存キーや公開アンカーを改名する移行作業は不要。

モデル分担と再利用は [MODEL_ROLES.md](MODEL_ROLES.md)（2026-10-20）を適用する。機械的な数値・ハッシュ・工程表は自動記録を参照し、人の判断を記す文書に重複転記しない。

## MODEL_PROVENANCE.json：担当とモデル指定

保存先：`coordination/catalog-NNN/MODEL_PROVENANCE.json`。各担当の情報を一度だけ記録し、他の報告書から参照する。例の `null` は実際の起動・設定を確認してから埋める。指定モデル名を記すだけで実行済み・内容確認済みにはしない。

```json
{
  "catalogId": "NNN",
  "operatingPolicy": "2026-10-20",
  "assignments": [
    {"role": "hq", "agent": null, "requestedModel": "gpt-6.1-sol", "requestedReasoningEffort": "xhigh", "actualModel": null, "actualReasoningEffort": null, "selectionEvidence": null},
    {"role": "author", "agent": null, "requestedModel": "gpt-6-astra", "requestedReasoningEffort": "high", "actualModel": null, "actualReasoningEffort": null, "selectionEvidence": null},
    {"role": "content-review", "agent": null, "requestedModel": "gpt-6-astra", "requestedReasoningEffort": "high", "actualModel": null, "actualReasoningEffort": null, "selectionEvidence": null}
  ]
}
```

担当・変更範囲・選択根拠（起動時の明示引数、確認可能なチャット設定等）を記す。実モデルの追加情報を取得できなければ `actualModel` 等はnullのままにし、明示指定を受け付けた根拠と取得限界を `selectionEvidence` に残す。希望値を実測値としてコピーしない。Astraを明示指定できない場合は数学制作を代替せず報告する。Sol本部による数学的内容の修正は行わない。

## 環境の引継ぎ

第2段階のHANDOFF/reportの実行環境を参照する。初回のNode起動方法と `tmp/pdf-runtime.json` の場所、必要な図生成環境だけを記録し、秘密を含む環境変数一覧は保存しない。再開時はパスの存在を確認し、環境が変わらなければ探索を繰り返さない。

## inventory.json：カタログ本部が管理する唯一の書誌・表示名台帳

保存先：`coordination/catalog-NNN/inventory.json`。公式一覧に沿って次を埋める。公開前に不明値を確認し、推測で埋めない。

| 項目 | 内容 |
|---|---|
| `catalogId`, `productionVersion` | 3桁番号、採用する制作セット版 |
| `preparedOn`, `sourceCommit` | 準備日、公式カタログの固定commit |
| `overviewTitle`, `contentsTitle`, `titleJa` | 公式英語見出し、CONTENTSで異なる場合の名称、日本語訳 |
| `subject`, `overviewPdfPage`, `contentsUrl`, `overviewUrl` | 公式の分野・参照箇所・固定版URL |
| `mode` | `single` または `multi`。独立した複数論文でもmulti |
| `manuscripts` | 以下の論文記録を公式順で格納 |

各論文記録：

| 項目 | 内容 |
|---|---|
| `order`, `paperId` | 公式掲載順、サイト共通ID。カタログごとに同一論文を別IDへ複製しない |
| `title`, `displayName` | 正式タイトル、読者に見せる短い名称。例：Log Abundance、Orbifold Iitaka |
| `citationKey` | 著者由来の引用キー（FL13、Ver等）。文献一覧で定義し引用に使用する。記事一覧の論文名とは区別する |
| `version`, `sourceCommit`, `pdfPages`, `sha256` | 論文自体の参照版とファイル同一性。公式一覧と別版を使うなら理由を記録 |
| `sourceUrl`, `downloadUrl` | 読者向け閲覧URL、取得用URLを分ける |
| `existingArticle`, `draftDirectory`, `worker`, `articleStatus` | 再利用記事、保存先、担当、現状。既存記事の参照版との違いも記録 |

本文・図・接続表示・PDFの表示名をこの台帳と照合する。新規の引用表示は共通記録から生成する。変更後は本文を同期し、影響する図・PDFを更新・確認する。同一版なら共通検査を根拠に再利用する。033・034の旧形式は自動移行の対象外。

引用の表示・ページ対応・生成手順は [CITATIONS.md](CITATIONS.md) に従う。出典記録を参照するcitations.jsonは記事担当ごとに持つ。

## sources.json：記事担当の読解記録

保存先：各記事のフォルダ。

- `catalogId`, `paperId`, `title`, `version`, `sourceCommit`, `sourceUrl`, `sha256`, `checkedOn`。
- `statements`：結果番号・ページ・仮定・結論をどこまで照合したか。
- `proofPassages`：実際に読んだ節・式・ページと範囲。Abstractのみならそう記す。
- `dependencies`：下記の接続項目で、直接使う外部結果と役割を記録。
- `unresolved`：未読・未確認・適用の疑問点。初稿後に解消したら、その確認を追記し初稿時点の記録を保持する。
- 引き継いだ既存メモは出典と再確認の有無を記録し、今回新たに検証したものと混ぜない。

## connections.json：結果単位の接続

保存先：`drafts/catalog-NNN/overview/connections.json`。Astraが記事の記録と原典の接続を照合してまとめ、Sol本部が受領する。

外枠に `catalogId`, `productionVersion`, `checkingScope`, `omittedSections`, `connections` を置く。`connections` の各項目は次を持つ。

| 項目 | 内容 |
|---|---|
| `id` | 安定した接続ID。公開済みIDを表示名変更で変えない |
| `from` | 供給論文のpaper IDまたは外部書誌ID、結果番号、ページ、版、原典URL |
| `to` | 利用論文のID、実際の使用箇所・結果番号・ページ、版、原典URL |
| `role` | 何を得るために、その結果のどの内容を使うか |
| `hypotheses` | 適用に必要な仮定と、それを満たす根拠 |
| `kind` | 下記の関係種別 |
| `checking` | 記述と適用をどこまで照合したか。担当・日付・記録の出典も添える |
| `articleLinks` | 日英の入力結果・利用段階の概説リンク。記事がなければ原典で案内 |
| `unresolved` | 保留の条件や未照合箇所 |

関係種別：`direct`（証明への直接入力）、`consequence`（主定理後の帰結への入力）、`premise`（利用先の明示的前提）、`alternative`（別経路）、`background`（背景）、`generalization`（主張の一般化）。主定理か独立な補題かは `to` に必ず記す。一般化というだけで直接依存と認定しない。

引用の存在だけの確認と、入力定理の記述・適用箇所の照合を分ける。1本のカタログでも外部接続はこの形式で扱う。接続が空なら `checkingScope` に未調査か照合範囲内で該当なしなのかを記し、`omittedSections` に関係図等を省いた理由を残す。

## status.md：記事ごとの記録

```markdown
# 作業記録
- カタログ／paper ID／担当：
- 制作セット版：
- モデル・思考量の指定根拠：MODEL_PROVENANCE.jsonの当該担当を参照
- 初稿開始（JST）：
- 初稿締切（開始＋60分）：
- 初稿終了／経過分：
- 状態：調査中／執筆中／初稿引渡し／時間上限で区切り／編集済み
- 成果物：
- 図の再生成コマンド・必要な環境：
- 実際の読解・照合範囲：
- 実施した形式・表示・リンク確認と結果：
- 未確認／未完成：
- 本部への申し送り：

## 後続の編集
日付・担当・変更・追加照合・検査・残作業を追記。初稿の時間とは別に記録。
```

## SITE_HQ_HANDOFF.md：カタログ本部からサイト本部へ

保存先：`coordination/catalog-NNN/SITE_HQ_HANDOFF.md`。ユーザーがサイト本部へ渡す。別チャットへの自動送信はこの文書の作成だけでは依頼されていない。

```markdown
# カタログNNNのサイト組込み引継ぎ
- 採用仕様版／対象Git commitと未コミット差分：
- 公式名称・分野・番号・原稿版：
- 構成：single / multi、必要な経路数、省略した節と理由
- 現在のユーザー依頼範囲：準備／制作／組込み／公開
- 担当・実際のモデル指定：MODEL_PROVENANCE.jsonを参照（本部Sol / xhigh、数学執筆・別担当点検Astra / high）
- 公開依頼がある場合の根拠：ユーザーの具体的な指示
- inventory・日英記事・総括・図・出典・接続記録のパス：
- 記事再利用と原稿版の違い：
- 記事の旧アンカー／維持すべきリンク：
- Astraの内容点検・日英照合の記録先と確認した原稿版、Sol本部の形式確認：
- 再利用可能な生成物：図のcitation-build.jsonと検査記録／PDFの対象版（数値は原記録を参照）
- 残る数学的未確認：
- サイト組込みで必要な共通処理・省略条件：
- PDF：担当＝サイト本部、日英とも未生成／生成済み、対象版
- RELEASE_CHECKLISTの未完了項目・担当・次の操作：
- 公開URL／公開commit／Actions／実サイト確認：未実施なら未実施
```

## 制作セット1.4の必須形式

[FORMAT_CONTRACT.md](FORMAT_CONTRACT.md)を適用する。共通の公式順表、図前の文献一覧、本稿内／外部の引用区別、証明対象・原典読書案内の4項目を埋める。各記事の受領時に見本と比較し、全記事完成まで待たない。`npm test`と`npm run check:citations`に加え、034の表・Schnell・033 Orbifold Iitakaと実画面を比較し、日英PC／375pxと日英PDFの証拠を記録する。

## 主張と証明の対応（1.3必須）

- 主要結果の全結論に証明概略と説明先を対応させる。必要な全体図を詳細節より前へ置く。
- 独立して証明を解説する命題は、図より前に原典の仮定・結論・番号・ページを記す。番号だけの「証明対象」で代用しない。
- 主張欄、mainResults、statements、conclusionCoverageをFORMAT_CONTRACT.mdに従い用意し、日英を揃える。
- Astraが原典の仮定・量化と主定理への接続を照合し、Sol本部がその記録を受領する。各主張の原典ページ、各結論の説明先、確認済み／未確認を残す。
- 自動検査に加え、Schnell・Orbifold Iitakaとの主張欄→図→直後の説明の画面比較、日英PDFへの反映を確認する。

## 段階ごとの引継ぎ（2026-10-12）

標準はREADMEの3段階、第1・第2段階末尾で停止する。SITE_HQ_HANDOFF.mdまたは既存の引継ぎ記録に、段階・依頼範囲、作業場所とブランチ、成果物、完了事項と検査証拠、執筆者と照合者・範囲、未確認事項、残作業、具体的な再開手順を残す。単独の自己点検を独立査読と記録しない。日英PDF未生成と公開未実施を区別する。一括進行を依頼された場合も記録は省略しない。

## 第2段階の自動記録（2026-10-19）

`catalog:prepare` は実行ごとに `tmp/catalog-preparation/NNN/<実行日時-PID>/` を作り、
`HANDOFF.md`（読むための要約）、`report.json`（工程別時間・成否・Git状態・実行環境）、`REVIEW_ENTRY.md`（担当者が追記するひな形）、各工程ログ、`browser/` の画面記録を保存する。
Git情報は開始・終了時の状態であり、未コミット成果物の同一性の証明ではない。HTMLハッシュは画面記録、PDFハッシュは版情報を参照する。
失敗時も終了できた範囲の記録を残す。強制終了時の「実行中」は完了扱いにせず、ログを見て再実行する。

`coordination/catalog-NNN/PREPARATION_REVIEW.md` は初回のみ作成する担当者記入欄。
実行ごとの `REVIEW_ENTRY.md` をコピーして、確認日時・実担当・内容点検の参照先・画面と見本の比較・PDF紙面・未確認事項・次の作業・判定だけを埋めて追記する。実行IDと自動記録へのリンクは生成済みで、数値やハッシュの手入力は不要。生成された欄は未確認であり、自動承認はしない。
再実行はこの欄も以前の実行フォルダも上書きしない。過去のチェックは新版への承認ではない。
第1段階のSITE_HQ_HANDOFF.mdとRELEASE_CHECKLISTを維持し、機械的な自動記録で数学的確認を代用しない。
長期保存や別チェックアウトへの引継ぎでは実行フォルダと必要な証拠を保存し、保存先を本部の記録に記載する。

原稿・sources・内容点検は第1段階の各記録、機械結果はHANDOFF/report、目視と公開準備の判断はPREPARATION_REVIEW、公開URL・commit・Actionsは公開記録を参照先とする。同じ内容をAUTHORING_REPORT・SITE_HQ_HANDOFF・公開報告等へ全文転記しない。時間は初稿の実測、自動工程の実測、その他の本部作業の概数、Actions待ちを区別し、概数は一行でよい。
