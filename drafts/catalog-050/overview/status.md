# カタログ050 案内制作記録

- 担当：astra_author。記事と同じ初稿枠。モデル指定根拠は coordination/catalog-050/MODEL_PROVENANCE.json。
- 制作セット1.4、モデル運用2026-10-20。
- 公式書誌の唯一の台帳：coordination/catalog-050/inventory.json。
- 成果物：日英article、presentation.json、connections.json、citations.json。
- 状態：初稿引渡し、別Astra内容点検・本部表示点検中。
- 公式順共通表：両言語の最初の内容節にCATALOGINVENTORYTOKENを1回、presentationは1行。
- 内容：明示的なG、全mのample性、十分大きいmのsmooth strictly Griffiths-positive Hermitian metric不存在。semi-positive排除やeffective m0へ拡張しない。
- 構成判断：connections.jsonのomittedSectionsを参照。分岐・合流は個別記事の主定理図で表示するため、短いカタログに複製しない。外部入力7接続を記事表にまとめ、カタログ内依存なしと外部未調査を区別。
- 確認：担当registry指定の引用同期・--text-only検査成功。共通rendererでの本部点検記録はcoordination/catalog-050/validationを参照予定。
- PDF：第2段階のサイト本部が日英それぞれ「短い案内＋記事」の2章で生成する。対応言語のPDFリンクをヘッダー直後・公式順一覧前へ追加する。第1段階では存在しないPDFへの有効リンクを置いていない。
- 第1段階の範囲外：サイト登録、publicコピー、冊子PDF生成、commit/push、公開。
- 再開：本部のSITE_HQ_HANDOFF.mdから第2段階へ。共通catalog:prepareを使用し、現行TeX/SVGはcitation-build.jsonの一致確認後に再利用する。

## 初稿後の編集

- 2026-10-22 11:51:36–11:52:14 JST：共通表claimの日英数式へMathJax区切りを追加。量化・結論は本文と再照合。記事statusの後続編集と本部の表示再検査記録を参照。
