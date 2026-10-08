# 033担当D：Projective Hodge lines and ordinary Iitaka subadditivity

- 状態：初稿引渡し（サイト組込み・公開は未実施）
- 内部ID：projective-hodge-lines、033内掲載順04
- 開始：2026-10-08 21:48:22 JST
- 締切：2026-10-08 22:48:22 JST
- 終了：2026-10-08 22:02:16 JST
- 経過：13.90分（60分以内、待機による時間調整なし）

## 成果物

- article.ja.md / article.en.md：Schnell形式、Theorems 1.1–1.2、3証明節、入力表、確認範囲。
- diagrams/：period、canonical、subadditivityの3種類、各日英SVG・TeX、共通TikZ原本・preamble.tex・refs.json・render.py。
- sources.json：固定版・SHA-256・主張・読解・直接入力・未確認。
- catalog-changes.md：PH → WVはalternativeとして提案。直接依存としない。

## 内容と確認

- 全最高lineとcharacter eigensheaf、full period rankとline rank、nef・adjoint bigness・semiamplenessを区別。
- §§2–7の核心の証明を読解。特にactual imageでのfinite inertia、境界とramificationの除去、root cover、残余因子の例外性、2つの底、補間、標数0へのscalar extension。
- BBT、BC、Fujino–Mori、Ambroの選定結果、Fujino弱正値性、Hashizume Theorem 2.11について入力記述と適用を照合。結果単位の範囲はsources.json参照。
- PDFキャッシュのSHA-256はinventoryと一致。p.2の定理とp.26の補間式は画像でも照合。
- 6枚の図をXeLaTeX→XDV→dvisvgmで生成。Overfull / Missing characterなし。日英6枚を画像で確認し、canonicalの余白を修正後に両言語を再確認。
- SVG XML、全36引用リンクのhttps URL、Markdown参照キー・図ファイル存在を確認。日英各9表示数式を比較（文言・文末句読点差のみ）。MathJaxの230数式入力にエラーなし。
- SVGのglyph IDは論文・図・言語でprefixを付け、同一ページ内の衝突を避けた。

## 未確認・未完成

- 境界のmixed Hodge同定、多変数延長、全モデル構成の独立検証、外部fixed-part/normality等の全記述照合は未完了。
- §§8–9はTheorem 8.1 / Lemma 8.4の記述とWVの比較箇所のみ。別証明自体は未検証。
- 全外部証明の再帰的検証、全カタログ接続の網羅、専門家査読・形式検証は未実施。
- 共通サイトへの組込み、全体ビルド、導線、スマートフォンのページ表示は担当範囲外として未実施。本部の掲載確認へ引き継ぐ。

## 再生成と引渡し

`python3 diagrams/render.py` をこのフォルダで実行すれば担当の6枚のみ再生成する。TeXは同じdiagrams内のpreamble.texと各tikzを参照。中間生成物は担当専用の一時領域に出力する。

共通コード、034、他担当、Git、公開、別チャット送信は操作していない。04の初稿をここで区切り、05へ別枠で進む。

## 033本部の総括編集 2026年10月8日

初稿の時間枠とは別の編集。日英の各証明節に目標と得られた結果の使い道を明示し、結果・利用先・役割を総括と照合した。既存の詳細図と確認範囲を保持。 共通CSS・共通部品は変更していない。検査結果は ../overview/validation.json と ../../../coordination/catalog-033/SYNTHESIS_HANDOFF.md を参照。
