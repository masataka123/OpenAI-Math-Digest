# カタログ038のサイト組込み引継ぎ

> **公開確認済み（2026-10-10）**。本チャットがサイト本部を兼任し、日英ページ・冊子PDFの配信と操作を確認した。現在の状態・公開URL・commit・検査結果は[PUBLICATION.md](PUBLICATION.md)。以下に残る未実施・範囲外の記述は各段階の履歴。

> 公開工程の更新（2026-10-10）：ユーザーの「じゃあ公開をしてください」に基づき本チャットがサイト本部を兼任。サイト登録・日英PDF・検査を実施し、commit・pushと公開確認まで進める。以下の原稿引継ぎ時の「未実施」は履歴。最新状態は[PUBLICATION.md](PUBLICATION.md)。

制作セット1.3。日英初稿・図・短い案内と本部内容点検を引き渡せる状態。**サイト登録・日英冊子PDF・公開は未実施**。本書は保存のみで、別チャットへ送信していない。

## 対象と変更範囲

- Git：main、基準HEAD `609b31c187427d1c5669bf810d859f46f727b83a`。未コミットの `coordination/catalog-038/` と `drafts/catalog-038/`。既存の追跡済みファイルに変更なし。組込み前に最新のGit状態を読み直す。
- 公式038：Fujita’s freeness conjecture。分野Algebraic and complex geometry、公式順2。公式一覧固定commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。
- 原稿1本：OpenAI、2026-09-23、25ページ。paper ID `fujita-freeness`、表示名Fujita freeness。原典URL・hash・分野出典はinventory.json。
- single：共通4列表1行、短い入口。カタログ内の論文間関係図・空表・選択UI不要。外部4直接入力と方法上の参照1件を記事側へ集約。
- 今回は「じゃあ作業をお願いいたします」を受けた原稿制作。公開依頼なし。commit・push・新規チャット・別チャットへの送信なし。

## 引渡しファイル

- [inventory.json](inventory.json)：公式順・原稿版・表示名・既存20記事との重複確認。
- [日本語記事](../../drafts/catalog-038/fujita-freeness/article.ja.md) / [英語記事](../../drafts/catalog-038/fujita-freeness/article.en.md)。
- 記事の[sources.json](../../drafts/catalog-038/fujita-freeness/sources.json)、[citations.json](../../drafts/catalog-038/fujita-freeness/citations.json)、[status.md](../../drafts/catalog-038/fujita-freeness/status.md)。
- [図の原本・生成物](../../drafts/catalog-038/fujita-freeness/diagrams/)：main / centers / isolation / powersの4組×日英。自己完結TeX8本・SVG8本、共通preamble、TikZ4本、生成スクリプト・hash manifest。
- 案内の[日本語](../../drafts/catalog-038/overview/article.ja.md) / [英語](../../drafts/catalog-038/overview/article.en.md)、[presentation.json](../../drafts/catalog-038/overview/presentation.json)、[connections.json](../../drafts/catalog-038/overview/connections.json)、別所有の[citations.json](../../drafts/catalog-038/overview/citations.json)。
- [CONTENT_REVIEW.md](CONTENT_REVIEW.md)：主張と全結論、外部入力、形式、作業用表示比較。validation/に証拠。

記事の再利用なし、別版との差分なし。公開済みの旧アンカーなし。新規アンカーはresults / diagram-sources / proof-overview / proof-1 / proof-2 / proof-3 / dependencies / sources。主張はtheorem-1-1 / corollary-6-3 / proposition-5-1 / lemma-6-2。説明段階はproof-overview-step-1〜4、proof-1-step-1〜3、proof-2-step-1〜3、proof-3-step-1〜2。案内のsectionIdsはpapers / connections / sourcesを使用する。

## 組込み時の作業

1. 共通台帳へ038とfujita-freenessを登録し、両言語のMarkdownルートと共通CatalogMarkdownOverviewを接続。正式タイトル等はinventory.json、共通4列表はpresentation.jsonを供給元にする。既存063等の固定データを流用しない。
2. 8SVGと8TeXを `public/diagrams/catalog-038/fujita-freeness/` へ同一内容で複写。生成スクリプトは意図的にpublicへ書かない。必要な場合のみ当該記事のrender.pyを実行。
3. 日英のトップ・分野・カタログ・記事への導線と収録数を更新。単論文のため論文選択UI・内部関係図を省略。AI注意書きと右上の言語切替を共通表示で維持。
4. 全体のcheck:citations、npm test、build、check:linksを実行。現在text-onlyは成功しているが、publicがない現状では全体の図コピー検査は通らない。
5. 日英PDFを各2章（案内1＋記事1）、証明図各4枚で生成し、pdf-editionsと一緒に更新。冊子冒頭の公式順表、文献案内、長いLemma 6.2の主張、全図、出典、全指数への系、原典読書案内を画像で確認。カタログ冒頭のPDFリンクは生成後に実在ファイルへ接続。
6. 再ビルドし、check:pdf・check:links、日英1280px/375pxで本番ルート・図拡大・図内引用・言語切替とアンカー維持を確認。034 / Schnell / Orbifold Iitakaとの比較を統合後にも残す。

冊子PDF責任者＝サイト本部、現在日英とも未生成。公開準備完了・カタログ完成ではない。[RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)の残項目を引き継ぐ。公開URL・公開commit・Actions・実サイト確認はすべて未実施。

## 再生成・検査

```sh
npm run citations -- --registry drafts/catalog-038/fujita-freeness/citations.json
npm run citations -- --registry drafts/catalog-038/overview/citations.json
npm run check:citations -- --text-only --registry drafts/catalog-038/fujita-freeness/citations.json
npm run check:citations -- --text-only --registry drafts/catalog-038/overview/citations.json
python3 drafts/catalog-038/fujita-freeness/diagrams/render.py
```

node、XeLaTeX（xeCJK / Harano Aji / TikZ）、dvisvgmが必要。今回nodeはbundled runtime、TeXは/Library/TeX/texbinをPATHへ追加。原典PDFは一時キャッシュのみでGitへ含めない。sources.jsonの固定URL・版・SHA-256から再取得できる。

## 内容上の限界

原稿§§2–6、主張の全結論への接続、直接外部入力の記述と使用箇所は照合済み。原稿§3の格子近似・initial formsや§5の漸近評価を全て独立に再構成したわけではなく、全証明・外部定理の証明・その再帰的依存は未検証。他カタログの全依存関係は未調査。この区別は日英本文と出典記録に残している。
