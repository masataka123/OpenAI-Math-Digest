# カタログ079 第3段階の公開記録

現在のユーザー指示「第3段階をお願いします.」を公開の根拠とし、サイト本部/rootが担当。第1・第2段階の確認済み数学本文・図・PDFを再利用し、再執筆・再生成しない。指定モデルと担当はMODEL_PROVENANCE.json。

## 公開前の状態

- 第2段階の最終runと同一な本文・図・PDF・ビルド済み画面を受領。stage3/receipt.jsonを参照。
- 最新のremote mainとローカルHEADは同一。第3段階開始時点のGit状態を保存。
- release-files.jsonの選択ファイルだけを公開対象とする。原典/外部文献の取得物、GT原書画像、大きな画面/紙面画像、証拠archiveはローカルに保持。
- 公開候補の再現検査、commit/push、Actions、実サイトの反映確認は進行中。未実施の項目を完了としない。

## 確認範囲

CONTENT_REVIEW.mdと各記事末尾の範囲を維持。CW末尾§11.1の外部Tao/Wolff連鎖などを新たな確認済みに変更せず、全証明の独立検証や外部証明の再帰検証を実施したと表示しない。

## 公開・反映確認の完了

2026-10-28 17:18 JSTに公開反映を確認。公開commitは`ec1d5e65a05f0767e2517804de86111f71bdbd4b`。GitHub Actionsのbuild・deployとも成功：https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/40654828637。Actionsの各検査結果はactions.json、公開treeと選択ファイルの一致はpublication-tree-check.jsonを参照。

公開日英の案内・2記事・トップ/分野、全SVG/TeX、日英冊子PDFが検査済み候補と完全一致した。live-assets.jsonを原記録とする。公開サイトを実際のMathJax CDNで開き、日英PC/375pxの全対象表示で数式・横はみ出し・画像・HTTP/JavaScript・欠落アンカーを確認。全図の拡大/fit/閉じる、アンカー付き日英切替、公式順一覧とPDF言語を確認した。live-browser.json参照。

公開画像のlive-contact.jpgで全表示条件を目視し、日本語モバイルの全次元稿図・英語PCの3次元稿図も個別確認。本文・図・引用・操作UIに欠けや重なりを認めなかった。個別PNGはローカルに保持する。日英PDFの紙面は第2段階で目視済みの同一ファイルであり、公開取得時のハッシュ一致により同一版を確認した。再生成や再執筆は行わない。

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/079/) / [English](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/079/)
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-079-ja.pdf) / [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-079-en.pdf)

第3段階を公開確認済みとして完了。残る数学的確認対象外の範囲は上記とCONTENT_REVIEW.md・記事末尾を維持する。ローカル読解資料・大きな検査画像・他カタログの未コミット成果物は削除・公開していない。
