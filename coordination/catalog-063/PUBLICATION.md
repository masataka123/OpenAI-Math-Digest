# カタログ063 GitHub Pages公開記録

**公開確認済み**。担当：サイト本部（このチャット）。確認日時：2026-10-09T09:54:09+09:00。ユーザーの「GitHub Pagesへの公開しましょう！」に基づき、通常のcommit・pushで公開した。

- コンテンツ公開commit：[`1888d77`](https://github.com/masataka123/OpenAI-Math-Digest/commit/1888d7706297db793c5d58eb0a38ed69735ba768)。
- [GitHub Actions 37866735889](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/37866735889)：build・deployともsuccess。24テスト、51ページのbuild、7,242内部リンク、全6冊のPDF照合を含む。
- 8ページ・PDF2冊・図／TeX16ファイル・案内画像2点、計28リソースを公開URLから取得。全件HTTP 200、ローカルの確認済み成果物とSHA-256一致。
- 公開サイトを実際のCDN読み込みでChrome確認。日英のトップ・分野・063案内・記事×PC／375pxの16条件で、数式エラー・ページ横はみ出し・欠落画像・ページエラーなし。記事は各130数式・4図・定理カード1。
- 分野→案内→記事→案内、節位置を保持する言語切替、図の拡大／全体表示／引用先を開く操作を確認。公開サイトのページと図を画像でも確認。
- 日英PDFは各16ページ・2章・4図。ローカルで紙面全32ページ・全8図を確認したファイルと公開配信が一致。版は2026-10-09。
- 共有の制作セットと関連ルート文書の既存変更は内容を保持して公開commitに含めた。既存033・034の本文42ページ・PDF4冊も保持。

## 公開URL

| 言語 | カタログ案内 | 個別記事 | 解説PDF |
|---|---|---|---|
| 日本語 | [一般化向井予想](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/063/) | [証明概説](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/generalized-mukai/) | [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-063-ja.pdf) |
| English | [The generalized Mukai conjecture](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/063/) | [Proof overview](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/generalized-mukai/) | [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-063-en.pdf) |

計測値・ファイルハッシュ・Actionsの各検査段階は [publication.json](publication.json)。公開チェックリストは30項目完了。初稿・組込み時点の記録は [VALIDATION.md](VALIDATION.md)・[SITE_INTEGRATION.md](SITE_INTEGRATION.md) に分離して保持する。

本記録を含む後続の文書commitは公開成功の記録であり、記事・図・PDF・表示実装を変更しない。数学的確認範囲も変えない。仮想基本類・結合律の基礎、族の縮約と降下の全技術的整合性、Lemma 5.1の交換子全項の独立検算、外部結果の全証明、他カタログとの全依存関係は、記事末尾および [sources.json](../../drafts/catalog-063/generalized-mukai/sources.json) に記載したままとする。
