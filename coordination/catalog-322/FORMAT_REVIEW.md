# カタログ322 第1段階の形式受領記録

2026-10-20。内容：astra322_hq_writer / astra322_content_review（いずれもgpt-6-astra/high）。機械検査・成果物受領：root。制作セット1.4を適用。本文・TeXの内容照合はCONTENT_REVIEW.md、指定モデルと分担はMODEL_PROVENANCE.json。

| 必須項目 | 入力元・表示先 | 第1段階の検査・証拠 | 未完了 |
|---|---|---|---|
| 公式順共通表 | inventory.json、overview/presentation.json → 案内のCATALOGINVENTORYTOKEN | 共通validateInventory/renderCatalogInventoryを使用。日英1行4列、タイトルから記事、原典へ別リンク。validation/inventory-check.jsonと日英fragment.html | サイト台帳への登録、034とのPC/375px実画面比較、PDF表示 |
| 図前の文献案内 | sources.json、citations.json/articleGuides → reference-guide | 共通生成、日英にDarbo/Nicaの著者・正式題名・用途・版・リンク。図前配置、Darbo誌面/PDF対応とNica日付注記をAstra照合 | 033 Orbifold Iitakaとの実画面比較、PDF文献案内 |
| 本稿内／外部引用の区別 | 共通citations.json → 本文・citations.ja/en.tex・6図 | 本稿内は無略号、外部はDar55/Nic、案内のカタログ出典はOpenAI26Cat。text-only検査成功、図マニフェスト19ファイル一致。図PNGの出典表示を目視 | 公開フォルダへのコピーと完全check:citations、図中リンク補完・実画面/PDFリンク |
| 証明対象・主張・原典読書案内 | mainResults/proofTargets/statements/conclusionCoverage/readingList → 共通renderDraft | 日英各3図、主張3件と結論説明先のアンカー存在、各17出典行。qa/structure-check.json。独立した命題4.2・5.3は主張→図→直後の文章、主定理4結論の説明をAstra照合 | Schnellとの実画面比較、MathJax、PDF反映 |

## 見本との対応と相違

034の表は同じ4列の共通描画を使用するが、公式1論文なので1行のみ。034固有の3分類は採用しない。Schnellの「主要結果→引用案内→証明対象と図・直後の説明→直接入力→原典・確認範囲」を用い、命題の独立主張欄・全結論の対応は現行契約に従って追加した。033 Orbifold Iitakaの図前文献案内に対応する共通生成マーカーを使う。見本の旧略号・不足はコピーしない。

カタログに記事の証明を複製する総括図は設けない。記事自体は最大実現→整列→矛盾→全空間等長性・実線形性をまとめた全体図と、整列・矛盾の詳細図を持つ。省略理由と確認した2つの外部接続はoverview/connections.jsonに保存。固定分類数・空の論文間依存表・単論文選択UIはない。

## 目視証拠と限界

記事qa/のmain、alignment、contradictionのja/en PNG計6枚をAstra執筆担当と別担当が確認した。最終版の全6画像とTeX/SVG内容の対応・数式条件・引用・重なり/欠けについて別担当の最終確認は19:26 JST、対象ハッシュはsources/content-review-manifest.json。rootも生成図の文字・数式・引用と専用余白を目視し、最終alignmentの日英を確認した。確認対象の図PNGは各qa/に保存。

ここでのHTMLは共通renderDraftを呼び出した構造検査用fragmentであり、ブラウザ画面確認の代用ではない。サイト登録を行わない第1段階のため、034・Schnell・033との実画面比較、日英PC/375px、MathJax、言語切替、PDF紙面は未実施。「形式統一済み」「公開準備完了」とは判定しない。

第2段階は登録・対象図公開コピーの後に共通catalog:prepareを実行し、その実行別HANDOFF.mdと画像一覧を読み、今回の版についてPREPARATION_REVIEW.mdに目視結果を追記する。

## 第2段階追記（2026-10-20）

上記の第1段階未完了項目（実画面・指定見本比較・公開コピー・MathJax・日英冊子PDF）を今回の実行 `2026-10-20T10-33-46.620Z-72123` で確認した。詳細な対象版ハッシュ、画像、比較結果はPREPARATION_REVIEW.md。旧画像の確認を承継せず、今回生成した日英全紙面・日英PC/375px画面を点検。公開は未実施。
