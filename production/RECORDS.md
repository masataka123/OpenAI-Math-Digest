# 台帳・照合・引継ぎの記録

制作セット1.2。ここに示す新規の編集用データは、現在のサイトがそのまま読み込むAPIではない。サイト本部が既存データ形式へ対応させる。033・034の既存キーや公開アンカーを改名する移行作業は不要。

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
| `citationKey` | 必要な場合のみ内部の引用キー。OI等を画面上の唯一の論文名にしない |
| `version`, `sourceCommit`, `pdfPages`, `sha256` | 論文自体の参照版とファイル同一性。公式一覧と別版を使うなら理由を記録 |
| `sourceUrl`, `downloadUrl` | 読者向け閲覧URL、取得用URLを分ける |
| `existingArticle`, `draftDirectory`, `worker`, `articleStatus` | 再利用記事、保存先、担当、現状。既存記事の参照版との違いも記録 |

本文・図・接続表示・PDFの表示名をこの台帳と照合する。新規の引用表示は共通記録から生成する。変更後は本文の同期、図の再生成、WebとPDFの確認を行う。033・034の旧形式は自動移行の対象外。

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

保存先：`drafts/catalog-NNN/overview/connections.json`。カタログ本部が記事の記録を照合してまとめる。

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
- 公開依頼がある場合の根拠：ユーザーの具体的な指示
- inventory・日英記事・総括・図・出典・接続記録のパス：
- 記事再利用と原稿版の違い：
- 記事の旧アンカー／維持すべきリンク：
- 本部で済ませた内容点検・日英照合・表示確認：
- 残る数学的未確認：
- サイト組込みで必要な共通処理・省略条件：
- PDF：担当＝サイト本部、日英とも未生成／生成済み、対象版
- RELEASE_CHECKLISTの未完了項目・担当・次の操作：
- 公開URL／公開commit／Actions／実サイト確認：未実施なら未実施
```

## 制作セット1.2の必須形式

[FORMAT_CONTRACT.md](FORMAT_CONTRACT.md)を適用する。共通の公式順表、図前の文献一覧、本稿内／外部の引用区別、証明対象・原典読書案内の4項目を埋める。各記事の受領時に見本と比較し、全記事完成まで待たない。`npm test`と`npm run check:citations`に加え、034の表・Schnell・033 Orbifold Iitakaと実画面を比較し、日英PC／375pxと日英PDFの証拠を記録する。
