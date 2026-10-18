# 作業記録

- カタログ／paper ID／担当：197／group-ring-determinant／記事担当B
- 指定モデル・実行指定：gpt-6-astra / reasoning_effort high
- 制作セット版：1.4
- 初稿開始（JST）：2026-10-18 13:10:29
- 初稿締切：2026-10-18 14:10:29
- 初稿終了（JST）：2026-10-18 13:16:20（約6分、60分以内）
- 状態：初稿引渡し・独立内容点検済み。記事図の本部目視済み、共通画面比較は本部の最終記録を参照。
- 成果物：日英記事、日英3図（main / projection / determinant）の自己完結TeX/SVG、sources.json、citations.json、citation-build.json。
- 原典版：September 23, 2026、9頁、公式commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a。PDF冒頭とdownload-list.jsonを照合。ハッシュはsources.json。
- 既存Sol原稿・図・解釈・点検は制作根拠に未使用。公式PDFを新規読解。指定Schnell/033の配置と共通render基盤のみ参照。図render.py/preamble.texは制作セットが指定する共通手順を転用しpublicコピーを除去。
- 読解：本稿全9頁、特に§§2–5全証明。char2 Theorem1.1（p.1）と本稿Theorem1.2/§5使用を照合。ES05 arXiv:math/0408400v2 (2014-10-07) p.5定義とTheorem5 p.18をWeb PDFで直接確認、reviewerも独立確認。
- 実施確認：担当レジストリの引用生成と--text-only成功。6 SVG生成成功、XeLaTeX Overfull/Missing character検査成功。自己完結TeX/SVGと原本のSHA-256記録。日英の3証明節と主要結論2群を対応。日英H2は共に通常proof-1/2/3となるよう編集。
- 未確認：図の最終画像目視、日英PC/375pxの実画面・033/034比較は本部へ引継ぎ。外部全証明と有限手順の実行は未実施。専門家査読・形式検証未実施。
- 日英冊子PDF：第2段階のサイト本部担当、未生成。サイト/src/public/scripts変更、commit/push/公開は未実施。

## 再生成

```sh
PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH node scripts/sync-citations.mjs --registry drafts/catalog-197/group-ring-determinant/citations.json
PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH python3 drafts/catalog-197/group-ring-determinant/diagrams/render.py
```

render.pyは担当レジストリの--text-only検査→XeLaTeX/XDV→dvisvgm→SHA記録を実行。build_draft.pyはsources/citationsの初期生成補助であり、後編集後に無条件再実行しない。

## 本部への申し送り

- char2キーは台帳に合わせOpenAI26two。ES05は2014 v2/20pp（刊行ページを混ぜない）。
- 主結果は有限生成のみ。G_Dの有限表示・torsion-freeを主張しない。整数行列と有理逆元を区別。
- 非soficはES05による構成後の帰結で、主証明の入力ではない。
- 本文の相対記事リンクは共通レンダラで正式導線へ変換すること。

## 後続の編集

初稿後の修正はここに別枠記録する。

- 2026-10-18 13:18 JST、担当B：本部の共通renderer検査により第5節見出しを日英ともdependencies分類へ変更。本文内容・図は変更なし。初稿後の表示調整として別枠。

- 2026-10-18 13:29:02 JST、独立点検反映：reviewer（gpt-6-astra指定）が日英本文・全主張・直接入力/帰結・TikZ・citationsを原典から照合し、追加数学修正要求なしと報告。本部が記事図の日英目視を完了と報告。全証明の独立検証/専門家査読を意味しない。

- 本部リンク検査を反映：日英の標数2記事リンクを共通renderer対象のarticle.lang.md形式へ変更。本文数学・図の変更なし。
