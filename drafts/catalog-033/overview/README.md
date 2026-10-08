# Catalogue 033 synthesis assets

033本部の総括。日英本文は `article.ja.md` / `article.en.md`、確認した関係は `connections.json`、図は `diagrams/`。引き継ぎの全体は [SYNTHESIS_HANDOFF.md](../../../coordination/catalog-033/SYNTHESIS_HANDOFF.md) を参照。

## 保存内容

- 総括4図×日英＝8 SVGと自己完結TeX。`main` は主経路と加法性、`additional` はWVの追加結果、`models` はLA・CKとWV、`kahler` はKAへの具体的入力。
- `connections.json` の `c01`–`c12` は入力記述・使用箇所・記事との照合。`kind: consequence` も指定された帰結／追加結果の内部では直接入力だが、主定理への依存に読み替えない。
- `p01` は前提対応、`a01`–`a03` は別経路。`comparisons` は類似手法2件・背景1件。矢印にしない。
- `checking` は入力記述、受け手、記事、全入力証明を別々に記録。PHの代替経路など担当の調査を引き継ぐものは出所を明記。
- `papers` は033の5篇と034の3篇について、正式タイトル・版・commit・ページ数・SHA-256を保持。LAのサイトIDは `log-abundance-characteristic-zero`。

## 図の再生成

リポジトリルートから次を実行する。XeLaTeX、dvisvgm、HaranoAji Gothicを使い、サイトの通常ビルドではコンパイルを要しない。

```sh
python3 drafts/catalog-033/overview/render-diagrams.py
```

このスクリプトは総括の図と、WV・BSの `diagrams/overview.*` だけを生成する。他の詳細図・共有コードを変更しない。総括の引用元・結果・使用箇所はconnectionsの各IDから読み、本文表の同じIDに対応する。矢印上の短い説明はスクリプト内の `LABELS` に日英で置く。本文表は編集成果物なので、接続変更時には本文も更新する。

## ローカル表示

Node環境とリポジトリの依存パッケージがある状態で実行する。

```sh
node drafts/catalog-033/overview/build-preview.mjs
```

既定の保存先は `/tmp/math-digest-033-synthesis/preview/`。総括と5記事の日英12HTMLを作る。第1引数で出力先を指定できる。数式はMathJaxで静的に処理する。

共通rendererにはcatalogId=033を渡し、生成した一時HTML内で図パスと記事リンクをローカル確認用に補正する。これは本番用HTMLではない。共有部品の修正、公開先へのコピー、サイト登録は行わない。共通レイアウトの挙動と図をタップする拡大機能は本番統合後に検査する。

`build-preview.mjs` は `validation.json` をその時点の描画結果で新規保存する。現在同梱する静的検査・ブラウザ検査の記録は本部の2026-10-08の確認結果であり、本文を変更したら再検査する。

## 掲載時の対応

- 総括の本文と接続データを033のカタログページへ組み込む。記事リンクは言語に応じた `/papers/<paper-id>/` に解決する。
- 総括の節IDは `articles`, `diagram-sources`, `main-routes`, `additional-routes`, `models`, `kahler`, `comparisons`, `dependencies`, `sources`。
- 図の配備先は全体本部で決める。各SVGと同名の `.tex` を同時に配備し、拡大／ダウンロードURLを一致させる。
- WV・BSには全体図の節を追加したため、従来の草稿から証明節番号が1つ増えている。ナビ・アンカーを最終本文から生成する。
- 共通CSSの追加は今回不要。正式な分野順、日英切替、AI注意書き、原典確認案内、MIT帰属は共通レイアウトで維持する。
