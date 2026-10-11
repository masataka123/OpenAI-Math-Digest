# 057 準備の照合範囲

担当：カタログ本部。日付：2026-10-11 JST。Git状態と既存差分のハッシュ記録時刻は22:20:36 JST。これは準備中の記録時刻で、記事初稿の開始時刻ではない。初稿開始・締切・終了は全3本とも未設定／未着手。

## 確認した資料と方法

- AGENTS.md、PROJECT_PLAN.md、production/README.md、START_CATALOG、RECORDS、FORMAT_CONTRACT、CITATIONS、ARTICLE_TEMPLATE、CATALOG_TEMPLATE、WORKER_TEMPLATE、RELEASE_CHECKLIST、scripts/pdf/README.mdを参照した。共有作業場の未コミット版を採用し、採用文書のSHA-256をPREPARATION_BASELINE.jsonに保存した。
- 見本の実装：src/data/schnell.mjs、drafts/catalog-033/orbifold-logarithmic-iitaka/article.ja.md、src/data/catalog-034.mjs。今回は構成・情報配置の参照。新記事の実画面比較は未実施で、形式統一済みとはしていない。
- `git ls-remote` で公式mainを読み、固定commitのCONTENTS.md、overview.tex、overview.pdf、3原稿PDFを取得。原典はGit対象外のtmp/catalog-057-preparationに保管。PythonのSSL証明書エラーのためPDF取得は証明書検証を維持したcurlへ切替えた。
- CONTENTS lines 1481–1508、overview.tex line 190のリンク先3本と順序が一致。概要PDF p. 7を画像で確認。概要PDF全41頁、表紙記載日2026-10-06。カタログ番号は057、内部paper IDと区別した。
- `pdfinfo`で50／19／14ページを取得し、全ファイルをSHA-256で同定。表題・著者・日付は各PDF p. 1をpdftotextとPNG画像で照合。第3原稿のPDFメタデータ作成日時（2000年）は原稿版とせず、誌面のOctober 5, 2026を採用した。
- タイトルページ画像：tmp/catalog-057-preparation/title-1.png、title-2.png、title-3.png。概要画像：overview-7.png。原典キャッシュを失っても固定URLとハッシュから再取得できる。

## 数学的内容の予備閲読

全文を抽出したことと、全文を読んだことは区別する。主に次の箇所の主張・段落を読んで構成を策定した。外部原典PDFは今回取得・検証していない。

| 原稿 | 予備閲読した箇所 | 今回していないこと |
|---|---|---|
| 1 | 表紙・目次、pp. 2–4のTheorem 1.1／Corollaries 1.2–1.5、p. 5冒頭の続き、§1.6 pp. 6–7、p. 23のTheorem 4.1、p. 37のTheorem 5.8と証明冒頭、pp. 40–41の選択箇所、p. 44のProposition 6.3、pp. 46–48の二分岐と結論、参考文献pp. 48–50。その他は見出し・番号の抽出による所在確認 | §§3–6の全証明読解、解析評価の照合、外部入力の原典照合、各系の入力の完全な照合 |
| 2 | pp. 1–3の主要結果、§2 pp. 4–7のcanonical quotient・MHS・weight argument、§3 pp. 7–8の入力一覧と帰着、p. 8のCorollary 3.1、p. 18のordinary groupの問題と比較の末尾、参考文献pp. 18–19。曲面の詳細は主張と節位置の確認 | §§4–7の曲面・全upper modelの証明読解、CDY等の外部原典と指定反例対象版の照合 |
| 3 | pp. 1–2の定義・Assumption 1.2・Theorem 1.3、pp. 5–6のProposition 3.1の条件・二つの結論と証明、p. 6のProposition 4.1、p. 9のLemma 4.4とPropositions／Theoremの結論、p. 10の付録冒頭、参考文献p. 14 | パラメータ選択・射影性・全submersion条件の通し照合、外部原典照合、付録全体の証明読解 |

抽出上、root orbifoldの記号がcoarse space Xと同じ文字に見える場合がある。制作時の主張欄ではPDF画像または原典TeXで書体・記号を再照合し、specialnessがroot orbifoldに課されることを保つ。誌面/PDF位置の一致は確認したページ単位で記録し、引用レジストリで全ページへ無条件に一般化しない。

## 関係の予備台帳（公開用connections.jsonではない）

| 供給元・比較元 | 利用先・箇所 | 種別・今回確認したこと | 次回の確認／保留 |
|---|---|---|---|
| 第1原稿Theorem 1.1, p. 2 | 第3原稿Assumption 1.2／Theorem 1.3, p. 2、Proposition 3.1, pp. 5–6、主定理証明p. 9 | 主定理への直接入力。利用先では明示的前提として分離。special compact Kählerの群のvirtual abelianityを構成したspecial projective八次元Yへ適用する、という記述と使用箇所を確認 | Yの構成・specialness移送・全射の通し照合は未完了。入力定理自体の証明独立検証ではない。connectionsにはdirectとして登録し、明示的Assumptionであることを併記する案 |
| 第1原稿Theorem 1.1 | 第2原稿Introduction p. 1、reference [16] p. 19 | compactの場合の背景として引用。閲読した§§2–3の証明経路では主定理の入力に使われていない | 論文全体の非依存を証明したとはしない。現在はbackground、直接矢印なし |
| 第2原稿と第3原稿 | 両方向 | ordinary群／線形像／orbifold群という対象の違いを比較する候補 | 直接関係は未調査。矢印を作らず「依存なし」とも断定しない |
| 033 Orbifold and logarithmic Iitaka subadditivity | 第1原稿Corollary 1.2の後、p. 2、reference [32] p. 50 | κ=0→specialという既知結果が別の原稿にも記録されている、という紹介を確認。第1原稿はCampanaの既知結果を直接引用 | 033からの直接証明依存としない。既存033記事を複製・変更しない |
| Cao–Deng–Hacon–Păun arXiv:2603.14539v2 | 第2原稿Theorems 1.1／1.3、§7 | 先行結論／独立な別証明／指定版のfibre-specialnessとの比較を原稿が主張していることを確認 | 元の指定版未読。著者の比較主張と編集側の確認を分離。結果の包含や反例の成立を今回認定しない |

その他の外部入力・カタログ間関係は未調査。記事制作後にfrom／toの結果・ページ・版、role、hypotheses、kind、checking、articleLinks、unresolvedを持つconnections.jsonへ照合済み部分を移す。調査状態と図省略理由も記録する。

## 準備の検査と後続作業

今回の対象は文書・JSONのみ。JSON構文、必須台帳項目、3本の公式順とハッシュ・ページ数、ローカル文書リンク、既存変更の保持を確認する。記事・レジストリ・サイト登録は未作成なので、check:citations、ビルド、Web／PDF表示の検査は制作後のサイト本部へ引き継ぐ。準備段階で公開チェックを先取りしない。

本部の第3記事に対する将来の編集範囲・成果物・時間制限はREADMEとARTICLE_PLANに記録済み。日英PDFは必須でサイト本部担当、未生成。公開状態は未公開・依頼範囲外。初稿引渡しやカタログ完成とは報告しない。
