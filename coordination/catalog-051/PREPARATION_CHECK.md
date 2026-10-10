# カタログ051 準備確認記録

確認日：2026-10-10（JST）。担当：カタログ051本部。

## Gitと保存範囲

- 作業場：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。
- 開始時branch：`main`。HEAD：`fca657aca8eb55c84032082f1165a901accced88`。
- `git status --short --branch`は`## main...origin/main`のみ。未コミット変更なし。ローカル追跡refとの比較であり、サイト側originへのfetchは行っていない。
- リモート：`https://github.com/masataka123/OpenAI-Math-Digest.git`。
- 今回の追加先は`coordination/catalog-051/`のみ。原典PDF・全文抽出・確認画像は`/tmp/catalog-051-preparation/`の一時キャッシュ。記事・TeX/SVG・公開資産は未作成。
- ブランチ切替、既存ファイル編集、commit・push、他チャット送信、公開なし。

## 書誌の証拠

公式openai/mathのHEADを読み取り、`fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`を固定。固定版のCONTENTS.md、overview.tex、overview.pdf、051原稿PDFを取得した。取得用・閲覧用URLとSHA-256はinventory.jsonへ保存。

| 確認対象 | 位置・方法 | 結果 |
|---|---|---|
| 051の本数・順序 | CONTENTS 1331–1342行のPDFリンクとoverview.tex 178行 | 同じ1本のみ |
| 公式名称・分野 | overview.tex 140行以降、051は178行、overview PDF p. 7を画像確認 | Algebraic and complex geometry、Kobayashi’s canonical-ampleness conjecture |
| 分野の順序・番号範囲 | overviewの目次・分野見出しと所属resultentryを抽出 | 2番目、032–069の所属番号を全件台帳化。分野p. 5からp. 9 |
| 原稿の表題・著者・日付 | PDF p. 1を画像と抽出テキストで確認 | Canonical ampleness of compact hyperbolic Kähler manifolds／OpenAI／September 23, 2026 |
| 原稿ページ数 | PDFメタデータとページ別テキスト | 31ページ、参考文献pp. 30–31を含む |
| 原稿同一性 | SHA-256 | `146466e3aa616985072493a7d0beb88514c122fccee9be5b7287cd6c75d36415` |
| 主結果の配置 | 主張p. 1、二つの系p. 26を画像確認 | Theorem 1.1、Corollaries 10.1–10.2。10.2の証明はp. 27 |
| その他の中間命題・節 | PDFのページ別テキストから所在を確認 | ARTICLE_PLAN.mdへ記録。数学的な証明検証ではない |

画像キャッシュ：`paper-page-1.png`、`paper-page-26.png`、`overview-page-7.png`。キャッシュ消失時は台帳の固定URLから再取得し、ハッシュを照合して再描画できる。`pagination: same`を原稿全体に付ける前に、制作で使う各ページの誌面対応を確認する。

## 重複の証拠

`src/data/site.mjs`から実登録033・034・038・063の21記事を読み取り、各台帳の正式タイトル・原典パス・PDFハッシュと比較。正式記事の一致なし、新規paper ID `canonical-ampleness`の衝突なし。公式CONTENTS内の同一原稿パスの出現は1回。

`src/`、`drafts/`、`research/`、`coordination/`、`prototype/`をKobayashi／canonical-ampleness／catalog-051相当で検索。同一原稿の既存記載は`prototype/atlas.mjs`。`prototype/README.md`は非公開試作・未照合初稿と明記している。

試作が指す`adc7f1241b42e322a6451854ab7e4b4c146bf78a`版PDFも取得し、今回とSHA-256一致を確認。版の違いによる記事再利用ではなく、**同じ原稿についてIntroduction中心の旧試作がある**という状態。試作を完成記事や今回の読解実績にはしない。

## 確認範囲と保留

- 今回：書誌・ファイル同一性・掲載順・重複、記事構成用の主張・節・引用使用箇所の所在確認。
- 主要結果と中間命題の主張、pp. 19–27の接続、参考文献を拾い読み。§§3–5・付録Aの精読、引用先原典の記述と適用仮定の照合は未実施。
- 038→Corollary 10.1、058→Corollary 10.2は引用と利用先の所在を確認しただけ。`consequence`候補として計画し、主定理への直接入力としない。
- 全証明の独立検証、外部証明の再帰的検証、専門家査読、形式検証は実施していない。
- 記事初稿未着手。開始・締切・終了はnull。今回の準備に記事執筆や時間枠の消化を含めない。
- Web実画面・日英PDFの見本比較は、制作・組込み後のサイト本部の工程。準備時の原典画像確認とは区別する。

## 準備成果物の検査

最終確認結果は以下へ記録する。記事未作成なのでサイトビルド・引用生成・PDF生成を準備の合格条件にしない。

- inventory.jsonのJSON構文、必須項目、1本・31ページ、固定URL・ハッシュを確認。
- 台帳の重複比較、旧試作PDF同一性、予定保存先と役割の一致を確認。
- このフォルダ内Markdownのローカルリンクが実在することを確認。
- RELEASE_CHECKLISTは公式テンプレートの全確認項目を保持し、今回済ませた書誌2項目だけ完了。制作・画面・PDF・公開は未完了。
- 最終Git差分に既存追跡ファイルの変更がなく、未追跡追加がこのフォルダの5ファイルのみであることを確認。既存033・034の記事は未変更。

検査結果：PASS。ローカルリンク9件、チェックリスト41項目（書誌2項目のみ完了）、追跡ファイル変更0件、新規ファイル5件。`git diff --check`も成功。
