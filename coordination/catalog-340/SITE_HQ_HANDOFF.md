# カタログ340の第1段階・サイト本部引継ぎ

現在の状態（2026-11-04追記）：**第2段階の公開準備を完了し、公開前で停止。** サイト登録・既存図の配置・日英PDF・共通検査・今回の画面と紙面の目視を完了。対象版と判定はPREPARATION_REVIEW.md、永続保存した機械記録はstage2/runs以下を参照する。下記の第1段階停止・未生成の記述は当時の引継ぎとして保持する。commit・push・公開反映確認は未実施。

第1段階の内容編集済み成果物を受領し、ここで停止する。第2・第3段階は未実施であり、公開準備完了とは扱わない。

## 依頼範囲・作業場所・版

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。開始ブランチ・commit・Git状態は `validation/start.json`、`validation/git-status-start.txt`。本作業の書込みは `drafts/catalog-340/` と `coordination/catalog-340/` に限定する。
- 採用仕様：制作セット1.4、モデル分担2026-10-20。今回のユーザー指示は第1段階のみ。サイト登録、公開用配置、冊子PDF生成、PDF版情報更新、commit/pushは次の指示を待つ。
- 公式番号・分野・掲載順・参照commit・原稿版・URL・ページ数・SHA-256は唯一の書誌台帳 `inventory.json`。取得原記録は `sources/downloads.json`、`sources/official-head.json`。外部取得の成功・失敗は `sources/external-downloads.json`。
- 単論文。既存の漫画登録はあるが、既存の概説記事登録はなかった。新paper IDは台帳のものを維持する。原稿版を後続工程で無断更新しない。

## 担当と成果物

- 本部は `/root`、数学執筆と短い日英案内は `/root/astra_author`、独立した内容点検は `/root/astra_review`。指定モデル・思考量と起動引数、取得できない内部実行情報は `MODEL_PROVENANCE.json`。数学の修正はAstraへ返す。
- 日英記事・出典・引用・状態・図：`../../drafts/catalog-340/nearby-lagrangian-counterexample/`。
- 日英案内・公式順共通4列表の入力・接続記録：`../../drafts/catalog-340/overview/`。
- 内容点検：`CONTENT_REVIEW.md`。最終内容版の同一性は `review/final-reviewed-files.json`（作成後）。初稿時間と後続編集は記事 `status.md`。
- 第1段階の形式確認：`FORMAT_REVIEW.md`（受領後）、`validation/`、`screens/`。原稿の閲覧用HTMLは `preview/`。既存の共通描画・CSSを使うローカルプレビューであり、サイトへの登録ではない。
- 図の原本と生成物の同一性は記事 `diagrams/citation-build.json`。同一版は再コンパイルせず再利用する。数値やハッシュは各原記録を参照し、別文書へ転記しない。

## 確認範囲と構成

数学的確認はAstraの内容点検記録を参照する。原典の主張・証明経路・直接入力の記述と適用条件の照合であり、全証明の独立検証、外部文献の証明の再帰検証、専門家査読、形式検証を意味しない。日英本文にも確認範囲を残す。

案内は公式順の共通表と記事への短い入口とする。単論文のため分類・空の論文間依存表・選択UI・論文間総括図は置かない。主要な分岐・帰着は記事の証明図で説明する判断をAstraへ委ね、案内へ図を複製しない。採否の数学的判断と外部接続の範囲はoverviewの記録を参照する。

## 第2段階の再開手順

1. 現在のユーザー指示と本書の最終受領追記、`CONTENT_REVIEW.md`、`FORMAT_REVIEW.md`、`RELEASE_CHECKLIST.md`を読む。最終点検版・図生成マニフェストと現ファイルを照合し、変更箇所だけAstraへ返す。完成済みの読解・執筆を繰り返さない。
2. `inventory.json`から `src/data/site.mjs` の対象分野・カタログ・論文を登録する。名称の数学的な要約と案内はAstra成果物を用いる。共通の `CatalogMarkdownOverview.astro` と `CatalogDraftArticle.astro` を使い、公式順とpaper IDを維持する。
3. overviewのH2順と生成したsection IDを `validation/structure.json` で確認して `overviewSectionIds` を設定する。`CATALOGINVENTORYTOKEN` は公式順共通4列表として表示する。単論文の省略条件を保つ。
4. 対象記事のTeX/SVGを対応する `public/diagrams/catalog-340/` へ配置する。原本・引用・生成条件が同一なら再コンパイルしない。公開コピーを含む引用照合は次項の共通処理で行う。
5. 日英冊子PDFは未生成。担当はサイト本部。案内1章＋記事1章の2章構成を共通生成系で作る。カタログ冒頭・公式順表の前に対応言語の共通PDF導線を設ける。`src/data/pdf-editions.json` とPDFを同時に扱う。
6. 登録・図配置後に `npm run catalog:prepare -- --catalog 340`。実行環境は `validation/environment.json`、PDF環境は `tmp/pdf-runtime.json` と `scripts/pdf/README.md`。npmがない場合のNode直起動はproduction/MODEL_ROLES.mdの共通手順に従う。専用のPDF・公開画面検査処理を作り直さない。
7. 今回の実行フォルダのHANDOFF・report・画像一覧・日英PDFを確認し、REVIEW_ENTRYから `PREPARATION_REVIEW.md`へ目視結果・担当・対象版・残作業を追記する。ローカル原稿プレビューの確認を、登録後の全サイト・図拡大UI・リンク・PDF検査へ自動承継しない。
8. 第2段階の成果物と検査結果を報告して停止する。第3段階は公開指示後に対象差分のみcommit/pushし、Actionsと公開本文・図・日英PDFへの反映を確認する。

公開URL・公開commit・Actions・公開反映確認は今回未実施。必要な残作業と担当はRELEASE_CHECKLISTを参照する。

## 最終受領（2026-11-04）

- 日英記事、4論理図の日英TeX/SVG、共通引用・出典・状態記録、短い日英案内、公式順共通4列表の入力、外部接続記録を受領した。成果物の確定版はAstraの `review/final-reviewed-files.json`。
- 別Astraの内容点検は完了、未解消の修正指摘なし。主定理の仮定・存在量化・全結論、構成から各性質への接続、非Hamiltonian同位の論証、外部直接入力の所要記述・適用、日英・図・案内を照合した。原典箇所と変更の再点検はCONTENT_REVIEWを参照。
- WJRは取得できた出版前原稿を参照版とし、2013年出版版との逐語比較は未実施。外部証明全体、tube模型比較・corner rounding等の全技術、輸送の全cutoff評価の独立再構成、他カタログの全関係は未検証。これを原稿の全証明の正しさの認定としない。
- 引用text-only検査、共通回帰検査、図の生成記録・引用リンク・最終点検版の照合、共通描画による日英PC/375px表示・ローカルリンクの検査は成功。証拠はFORMAT_REVIEWとvalidationの原記録。最終図・指定見本の目視を実施済み。
- 初稿の開始・締切・終了、初稿後の追加照合・編集は記事statusを参照。初稿を自動延長せず、後続編集を別記録とした。
- 既存追跡ファイル・Git状態の保全は `validation/preservation-final.json`。開始時から存在した未追跡ファイル全体のバイト検査はしていないが、当作業は340の2フォルダ以外へ書き込んでいない。
- 第1段階の未生成・未解消の必須修正はない。残作業は第2段階の登録・日英冊子PDF・公開前検査と、第3段階の公開・反映確認。日英PDFは未生成、サイトは未登録、公開は未実施。
- overviewSectionIdsは今回の共通プレビューと同じ `['papers', 'sources']` を使える。冊子完成後は導入の「PDF準備中」を除き、共通PDF導線を冒頭へ置く。図は同一版の生成物を照合して配置し、再コンパイルしない。

## 第2段階完了後の再開

第3段階の公開指示後、PREPARATION_REVIEW.md、stage2の確定版・保全記録と現在のGit状態を照合する。第2段階の検査済みPDFと同一版の図を再利用し、公開だけを理由に再生成しない。対象差分だけをcommit/pushして、Actionsと日英カタログ・記事・全図・PDFへの反映を確認する。数学的な変更があればAstraへ返し、影響箇所を再確認する。
