# 作業記録

- カタログ／paper ID／担当：051／canonical-ampleness／本部兼任
- 制作セット版：1.3
- 初稿開始（JST）：2026-10-10 14:28:08
- 初稿締切（開始＋60分）：2026-10-10 15:28:08
- 初稿終了（JST）：2026-10-10 14:55:19
- 経過：27分11秒（1,631秒）。原典照合・執筆・図生成・確認を含む。下限待機や自動延長なし。
- 状態：日英初稿引渡し／内容編集・点検済み。サイト登録・日英冊子PDF・公開は未実施。
- 成果物：article.ja.md、article.en.md、sources.json、citations.json、7 TikZ／14 TeX／14 SVG、共通引用TeX、生成手順と39ファイルのハッシュ記録。
- 読解：原稿の主要な帰着、§§3–10と付録Aの使用箇所。12外部文献の指定結果と使用条件。sources.json参照。
- 形式：7証明対象、3主要結果、4中間命題の図前主張、19説明段階、全結論の対応7件、図前文献12件、原典読書案内11件。
- 日英：本文71引用マーカーと表示数式13組を照合。仮定・量化・主張・図・確認範囲は内容受領表で点検。
- 表示：共通表示のローカルプレビュー、日英1280/375px、033・034との比較。14図を画像で確認。TeXのOverfull／Missing characterなし。正式ルートの検査ではない。
- 未確認：境界枠・Sobolev置換・弱い境界極限・平滑化の全評価の独立再証明。Kollár解消定理の原典、代替Demailly正則化、全外部証明・網羅的依存関係。
- 本部申し送り：../../../coordination/catalog-051/SITE_HQ_HANDOFF.md。サイト登録、public図コピー、全体検査、必須日英PDF各2章をサイト本部へ。公開許可は引き継がない。

## 再生成

Node.js、Python 3、XeLaTeX、xeCJK（Harano Aji）、TikZ、dvisvgmを使用。リポジトリルートで実行する。

```sh
node scripts/sync-citations.mjs --registry drafts/catalog-051/canonical-ampleness/citations.json
python3 drafts/catalog-051/canonical-ampleness/diagrams/render.py
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-051/canonical-ampleness/citations.json
```

render.pyはこのフォルダ内だけを生成し、冊子PDFとpublicのコピーは作らない。出典変更時は本文同期→図再生成→表示確認の順。サイト本部は配置後に全体check:citationsを行う。

## 初稿後の変更

現時点ではなし。後続の内容変更・追加照合・検査は、初稿時間と区別してここへ追記する。

## 公開工程（2026-10-10）

ユーザーの公開指示後、本チャットがサイト本部を兼任して正式ルートと日英PDFを生成・点検。本文の数学的内容と初稿時間は変更していない。公開結果はcoordination/catalog-051/PUBLICATION.md参照。
