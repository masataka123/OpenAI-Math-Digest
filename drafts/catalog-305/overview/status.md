# カタログ305 日英案内の制作記録

- 担当：author-pd4。gpt-6-astra / highを本部が明示指定した担当依頼に基づく。実行内部情報は推測していない。MODEL_PROVENANCEはcoordination/catalog-305を参照。
- 制作セット：1.4、MODEL_ROLES 2026-10-20。
- 原典：inventory.jsonの固定commitと2026-09-24版3原稿。overview/CONTENTSの見出し差を保存し、正式表示はoverviewに合わせた。
- 日本語見出し：「円板埋め込みとWallの多様体予想に対する反例」。本部へAstraの確認を連絡済み。
- 状態：日英案内・接続記録・総括図の制作済み。両円板記事とcatalog-changesの最終受領版を照合し、別Astraが内容点検範囲で受領可と確認済み。
- 制作時間：PD4記事の初稿時間とは別枠、2026-10-21 20:34 JSTごろから案内を制作。

## FORMAT_CONTRACT第6節の判断

主要接続をまとめて検討した。3原稿を3分類する必要はない。boundary-onlyとmarkedは異なる出力条件を持つ別構成であり、markedからPD4へは構成・potential・tensor定理の三つのインターフェースを通る直接利用がある。二つの円板障害を直線状の「改善→応用」と描くと、同一例や依存を誤認させる。

総括図1枚を採用し、上段に二つの円板論文を並べ、破線を出力条件の比較に限定し、markedから下段のPD4への実線だけを直接入力とした。これにより、別構成の比較と後続の非実現性への帰着が一望できる。個別の一対一の辺だけを理由に図を省く判断はしていない。

図は論文レベルの全体像、詳細表は結果番号・利用箇所・適用条件を担当する。connections.jsonの3つのdirect記録は同じpaper-to-paper依存の異なる入力であり、3本の独立した論理経路ではない。比較1件はalternativeとして記録し、包含・一般化・同一構成の改訂とは認定しない。分類カードと選択UIは、1件の論文間依存と1件の比較には不要なので省略する。依存の全探索を終えたとはせず、調べた原典の範囲を記録した。

## 必須形式とPDF配置

- CATALOGINVENTORYTOKENを日英の最初の内容節に各1回配置。presentation.jsonはinventoryの公式順と同じ3行、論文名・結果・日英claim/roleを保持。
- 034共通4列表で表示する。独自の表HTMLやCSSは作らない。
- 図前にOpenAI26a/b/cの著者・正式タイトル・版・用途を定義。本文とTeXの結果番号・ページは担当citations.jsonから生成。
- 冒頭短い概要→対応言語PDF→公式順表の順を指定。PDFリンクは共通CatalogMarkdownOverviewが第2段階に挿入する。本文には配置コメントだけを置き、未生成PDFへの実リンクを登録していない。
- 冊子は案内＋3記事、日英必須。本担当は冊子を生成していない。reviewのPDFは図の検査用であり、カタログ冊子ではない。
- 第2段階で想定するoverviewSectionIds：inventory、connections、dependencies、sources（共通レンダラーへ実際のH2とともに設定）。
- 本文の記事リンクは ../{paperId}/article.{ja,en}.md を使い、共通レンダラーがbase path付きの /{lang}/papers/{paperId}/ へ変換する。connections.jsonのarticleLinksは公開ルートの記録。

## 検査と残作業

引用同期・担当registryのtext-only検査、日英TeX/SVG生成成功。diagrams/citation-build.jsonに原本・生成物ハッシュを記録。日英図をreview PNGで目視し、箱・引用・実線の重なりなし。英語の比較ラベルと破線の間隔を調整した。

第2段階の本部による034の4列表、033の文献案内との実画面比較、PC/375px、冊子、公開用コピー照合は未実施。数値検査だけで形式統一済みとは扱わない。

未確認範囲は各記事と揃えた。特にPD4のQuinn83原典本文未取得、外部CAT(0)/Farrell–Jones/穿孔平滑化の原典記述未照合、全証明の独立検証未実施を保持する。

## 再生成

```sh
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --registry drafts/catalog-305/overview/citations.json
python3 drafts/catalog-305/overview/diagrams/render.py
```

同一版の生成物はcitation-build.jsonで照合し、変更がなければ再コンパイルしない。public・src・冊子PDF・公開操作には進んでいない。

## 最終の担当間照合

2026-10-21 20:41 JST、boundary-onlyとmarked tensorの各catalog-changes.md、およびmarked日英記事と案内を照合。入力/出力framing、境界像/写像、相対類不指定、output dual不要、別構成であり直接依存ではない点が一致する。PD4への3つの直接入力は公式原稿§2.1・§2.4と各入力結果に基づく。総括図の実線は主nonembedding theoremの単独適用を意味しないことを図・本文・connectionsで明示。

日英本文の冒頭短い概要が共通コンポーネントのledeとして取り出せる太字副題形式にした。本文の相対記事リンクはbase path付きへ変換される。最終引用text-only検査とPD4/overviewの全図manifest照合は成功。

別Astra content-reviewは両円板稿の最終catalog-changesとoverviewの比較・3入力を突合し、日英記事・原典・図の整合を確認して受領可と連絡した。最終内容点検manifestと詳細記録は本部のcoordination/catalog-305を正本とする。
