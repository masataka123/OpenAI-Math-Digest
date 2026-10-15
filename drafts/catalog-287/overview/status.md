# カタログ287 案内の作業記録

- 制作セット1.4、単論文。
- 担当：astra_hq、明示指定モデルgpt-6-astra。記事担当・数学的本部・内容自己点検を兼任。台帳・画面検査・引継ぎ窓口は親タスク。
- 収録順：1本、free-group-factor-isomorphism。
- 日英article、共通4列表1行presentation.json、author-key citations.json、7外部入力を記録したconnections.jsonを作成。
- 採否：分類・論文選択UI・カタログ内依存表・総括図を省略。構成→増幅→同型族／entropyの分岐は検討した上で、同一論文の証明図へ集約し、短い入口への重複を避ける。外部依存なしという意味ではない。
- 参照版：公式commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a、overview誌面/PDF p.31、Operator algebras。公式overviewとCONTENTSの題の差異を日英で記録。
- 組込み互換性：最初の収録一覧節はCATALOGINVENTORYTOKENのみ。article.{ja,en}.md#dependencies/#sourcesの安定相対リンクで共通rendererに渡す。
- PDF配置計画：第2段階で生成済み日英冊子PDFを導入と公式順表の間に挿入。第1段階では死んだdownloadリンクを作らず、HTMLコメントに位置を記録。担当はサイト本部、現在未生成。
- 数学的確認と保留：個別記事sources.jsonおよびcoordination/catalog-287/CONTENT_REVIEW.md参照。独立査読でなく自己点検。
- 引渡し後の工程：第2段階でサイト登録・public図コピー・日英PDF生成・公開前検査。第3段階のcommit/push・公開は未実施。
