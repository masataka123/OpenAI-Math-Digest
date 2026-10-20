# カタログ322の案内・構成記録

- 制作セット1.4、2026-10-20。内容本部兼執筆：astra322_hq_writer、明示指定 `gpt-6-astra` / `high`。
- 第1段階の成果物：日英の短い案内、公式順共通表用presentation.json、外部直接入力2件を区別したconnections.json、案内のcitations.json。
- 公式題名：Tingley's sphere-isometry problem。分野：Functional analysis（公式第15分野、番号322–332）、overview p.35。書誌の唯一の台帳は `coordination/catalog-322/inventory.json`。
- 収録は1本。記事の主定理・証明図を案内へ複製せず、共通4列表1行と記事への入口を置く。日英ともCATALOGINVENTORYTOKENは1回。
- 分類なし：1本・1主定理であり、読者の記事選択に役立つ異なる分類がない。
- カタログ総括図なし：最大欠損達成→整列→矛盾→線形化という合流・連続帰着を検討し、記事の全体図が担うと判断した。カタログ側へ再掲すると同じ証明の重複になり、論文間関係を示さない。個別記事の3図は維持。
- カタログ内依存表・論文選択UIなし：1本のため異なる収録論文の対がない。これは外部依存なしの意味ではない。DarboとNicaの古典的入力を記事とconnections.jsonで記録。
- PDF計画：第2段階で日英の冒頭に共通導線を配置し、public/pdf/catalog-322-{ja,en}.pdfを生成・組込む。案内＋記事の2章。現時点では未生成であり、未生成ファイルへの有効リンクを装っていない。
- 案内の共通セクションID案：inventory / guide / sources。
- 引用キーOpenAI26Catは公式カタログの団体著者・文献・固定commitを本文で定義。自論文の番号は記事と同じく無略号。
- 確認：共通引用生成・text-only検査成功。主定理の条件・結論・方法の説明を日英記事と照合。記事リンクは共通renderDraftの `../paper-id/article.{ja,en}.md` 変換形式。
- 未実施：サイトへの登録、公用図コピー、日英冊子PDF、PC/375pxと033/034の実画面比較、公開。数値検査のみで形式統一済みとはしていない。
- 再開：SITE_HQ_HANDOFF.mdを読み、第2段階の明示依頼後に組込みと共通catalog:prepareを行う。

## 第2段階追記（2026-10-20）

サイト登録・図公開コピー・日英冊子PDF（16/17ページ）・共通検査・今回の版の目視を完了。担当root。数学的本文・引用記録・TikZ/TeXは変更なし。SVGは再生成でdefs順だけ変わり、正規化比較で同一。今回の実行と版・確認範囲は coordination/catalog-322/PREPARATION_REVIEW.md。第3段階の公開は未実施、公開前で停止。
