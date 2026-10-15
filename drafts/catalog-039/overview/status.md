# カタログ案内・第1段階状態

2026-10-15、本部。日英案内・公式順4列共通表用presentation.json・sources/citations・方法関係図1種×日英TeX/SVGを作成。PDF導線は第2段階で実冊子とともに冒頭へ入れる計画のみ記録し、架空のPDFリンクは置いていない。

## 分類・総括図の採否

固定数の分類カードは採用しない。4稿は別々の定理適用範囲を持ち、公式順表で十分に識別できる。総括図は1枚採用する。平面Nagataの全r≥10という経路と、曲面→高次元→正標数の方法上の再構成を同時に見せることに意味がある。単なる一対一辺の本数で省略を判断しなかった。

破線は節点・圧縮・格子方向、jet単射性から全射性、解析的極限から形式代入という方法の継承・再構成。先行する最大性主定理をブラックボックスとして使う依存の矢印ではない。曲面から正標数への直接の方法上の参照は表と本文でも補足し、図に重複する長矢印を加えない。平面稿を一般多様体の前提につながない。関係種別・原典はconnections.json。

全体像は図、条件・供給内容は短い表、主張の完全な仮定と証明詳細は4記事に分けた。空の依存表や論文選択UIは設けない。一般的な予想紹介や記事内容の再掲を避けた。

## 表示・引用

本部の共通renderDraft＋renderCatalogInventoryで日英プレビューを作成。節IDはpapers, connections, sources（3節）。共通表は公式順4行・4列。TeX→XDV→SVG、2図を画像で確認。引用同期・入力出力hash・内部リンク・MathJaxを検査。日英1280/375px画面と034表の比較はcoordination/catalog-039/FORMAT_REVIEW.md。登録後の公開ルート、図拡大モーダル、PDFは未実施。

再生成：python3 coordination/catalog-039/sync-overview-guide.py → node scripts/sync-citations.mjs --registry drafts/catalog-039/overview/citations.json → python3 drafts/catalog-039/overview/diagrams/render.py。本部専用build-preview.mjsで表示。

## 第2段階の組込み修正（2026-10-15）
案内本文の5リンク×日英を共通renderDraftがPages baseへ変換できる相対Markdown形式へ修正。数学本文・図・引用記録は変更せず、日英PDFを再生成。サイト/PDFの最終確認はcoordination/catalog-039/STAGE2_REPORT.md。
