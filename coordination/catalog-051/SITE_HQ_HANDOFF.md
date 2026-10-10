# カタログ051のサイト組込み引継ぎ

> 公開工程の更新（2026-10-10）：ユーザーの「じゃあ公開しましょう」により、本チャットがサイト本部を兼任して組込み・PDF・公開を担当。以下は原稿引渡し時点の履歴。後続結果は[PUBLICATION.md](PUBLICATION.md)を参照。

制作セット1.3。2026-10-10。本部兼記事担当が日英の原稿・図・案内と内容点検を作成。**サイト組込み・日英PDF・公開確認は未実施。カタログ全体の完成／公開準備完了ではない。**

## 依頼範囲とGit

ユーザーの「じゃあ制作を開始してください」により、準備後の内容制作を開始した。当初の指定どおりサイト組込みと日英PDFはサイト本部へ引き継ぐ。別チャットへの送信、commit・push・公開の依頼は受けていない。この文書はユーザーが引継ぎに使う成果物であり自動送信しない。

作業開始のmain HEADは`fca657aca8eb55c84032082f1165a901accced88`。追加はcoordination/catalog-051/とdrafts/catalog-051/。既存033・034、他カタログ、共通表示・公開資産は未変更。初期状態はinventory.initialGit、最終確認はvalidation/git-status.txt。ブランチ切替・commit・pushなし。

## 書誌と構成

- 051、**Kobayashi's canonical-ampleness conjecture**。日本語：小林の標準束豊富性予想。
- 公式分野：Algebraic and complex geometry、分野順2。公式一覧2026-10-06版、051はoverview p.7、固定commit`fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。
- single、公式順1本。OpenAI、**Canonical ampleness of compact hyperbolic Kähler manifolds**、2026-09-23版、31ページ。
- paper ID `canonical-ampleness`、表示名 Canonical ampleness／標準束の豊富性。正式タイトル・URL・版・ハッシュはinventory.jsonから取得。
- 完成記事の重複なし。prototype/atlas.mjsの旧メモのPDFは同一だが、記事・確認実績として再利用していない。
- 案内は短い入口＋公式順共通表1行。空の内部依存表、総括図、論文選択UIは省略。証明図は記事に7図（日英14SVG／14TeX）。

## 成果物

| 内容 | 保存先 |
|---|---|
| 書誌台帳 | coordination/catalog-051/inventory.json |
| 日英記事 | drafts/catalog-051/canonical-ampleness/article.{ja,en}.md |
| 原典読解・外部文献・接続 | 同フォルダ sources.json |
| 共通引用・形式対応 | 同フォルダ citations.json |
| 初稿の時間・確認記録 | 同フォルダ status.md |
| 図 | 同フォルダ diagrams/（7 TikZ、14 TeX、14 SVG、引用TeX、preamble、render.py、citation-build.json） |
| 日英案内と共通表 | drafts/catalog-051/overview/article.{ja,en}.md、presentation.json |
| カタログ外部接続 | overview/connections.json（直接8、比較参照1、帰結3） |
| 案内引用・状態 | overview/citations.json、status.md |
| 内容受領・画面証拠 | coordination/catalog-051/CONTENT_REVIEW.md、validation/ |
| 公開ゲート | coordination/catalog-051/RELEASE_CHECKLIST.md |

## 維持する対応とアンカー

記事：results、diagram-sources、proof-overview、proof-1〜proof-6、dependencies、sources。主要結果はTheorem1.1、Corollaries10.1–10.2。4中間命題はPropositions5.2、6.4、7.1、8.2。全体節4段階、各詳細節3/3/2/2/2/3段階、合計19段階。主張・全結論の対応はcitations.jsonに記録。

案内のsectionIdsは`['papers','connections','sources']`。038への既存記事リンクは`/ja/papers/fujita-freeness/#proof-3`と英語対応を維持。058は未登録なので原典へ案内し、未公開記事URLを作らない。

## 組込みで行うこと

1. inventory051を既存台帳形式へ対応させ、src/data/site.mjsで公式分野の収録番号に051を登録。paper/catのsourceCommitは051の固定版を使い、グローバル旧commitを流用しない。modeはsingle、paperIdsは1本、overviewSectionIdsを設定。
2. 既存CatalogMarkdownOverviewとCatalogDraftArticleを利用。公式順の4列、図前の12文献案内、証明対象・主張欄、原典読書案内をそのまま共通表示する。専用CSSや固定3分類は不要。
3. diagramsのSVG/TeXをpublic/diagrams/catalog-051/canonical-ampleness/へ配置し、公開コピーを含むcheck:citationsを実行。再生成は対象render.pyだけを使う。既存一括生成が051を自動認識するか確認する。
4. npm test、build、check:linksと、日英・PC/375pxで正式ルートを確認。図拡大、図内原典リンク、言語切替のアンカー維持、AI注意書き・キャラクター案内を確認。033・034の記事は変更しない。
5. **日英PDFを各2章（案内＋記事）で生成**。担当はサイト本部。scripts/pdf/README.mdの環境を使い、pdf-editions.jsonをPDFと同時に更新して再ビルド。カタログ冒頭の共通PDF導線を有効化。
6. 全14図、4中間命題、3主要結果、文献案内、長い数式・表・改ページ・リンクを日英PDFの画像で確認。check:pdfとリンク検査。RELEASE_CHECKLISTの未完了を埋める。

公開操作は別途ユーザーが依頼した範囲で行う。現在、公開URL・公開commit・Actions・公開版確認はいずれも未実施。

## 済ませた点検と残る数学的範囲

詳細はCONTENT_REVIEW.md。本文71引用マーカー、表示数式13組、7証明対象・全結論の説明先、39生成関連ファイルのハッシュと図内リンクを確認。日英・PC／375pxの共通表示プレビューと見本を比較した。これは本番登録後と冊子PDFの確認の代わりにはならない。

本稿の主要な証明接続と12外部文献の指定結果・使用条件を照合。境界正則性・関数解析・平滑化の全評価、外部証明全体を独立再証明していない。Kollárの解消定理原典と代替のDemailly正則化は未照合。038・058の全証明、網羅的依存関係は対象外。未確認を本文から削って「全証明検証済み」としない。
