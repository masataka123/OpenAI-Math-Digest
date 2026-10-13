# カタログ案内の制作記録
- 036／制作セット1.4＋2026-10-11/12補足／本部／2026-10-13。
- 状態：第1段階の内容編集済み。サイト未組込み、冊子PDF未生成、未公開。
- 公式固定commit・ページ・分野・4本順はcoordination/catalog-036/inventory.json。
- 日英article、共通表presentation、結果単位connections、引用sources/citations、日英総括図を保存。
- 構成：共通公式順表→主要経路1図→ND1の別経路とordinary帰結→原典・確認範囲。分類数を固定しない。採否理由はconnections.json。
- 034を案内の粒度・表の見本、Schnellを証明節、033 Orbifold Iitakaを文献案内の見本とし、共通rendererによるPC/375px表示をvalidationに保存。051は見本に使用していない。
- PDF導線は冒頭へ第2段階で追加する。今回はリンク未生成のコメントを置き、存在しないPDFをリンクしない。
- 再生成：node scripts/sync-citations.mjs --registry drafts/catalog-036/overview/citations.json → python3 drafts/catalog-036/overview/diagrams/render.py。XeLaTeX -no-pdf→XDV→SVGで、冊子PDFは作らない。
- 未確認・再開手順はcoordination/catalog-036/HANDOFF.mdを参照。
