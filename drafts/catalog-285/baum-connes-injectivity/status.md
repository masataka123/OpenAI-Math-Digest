> 最終受領（2026-10-15、本部）：第1段階完了。日英原稿・図・引用の受領、別担当Astra原典照合と修正確認、共通表示でのPC/375px・指定見本比較を完了。以下は時系列の制作記録で、初稿時の「点検待ち」は当時の状態。最終状態は coordination/catalog-285/CONTENT_REVIEW.md、FORMAT_CHECKS.md、review-*.md を参照。サイト組込み・日英冊子PDF・公開は未実施。

# 作業記録

- カタログ285／paper ID：baum-connes-injectivity
- 担当：執筆 gpt-6-astra（明示指定）。本記録の点検は執筆者の自己点検であり独立レビューではない。
- 制作セット：1.4
- 作業場所：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、共有main。branch切替・commit・pushなし。
- 初稿開始：2026-10-15 21:24:10 JST
- 初稿締切：2026-10-15 22:24:10 JST
- 初稿終了：2026-10-15 21:39:00 JST、約15分。60分上限内で終了。
- 状態：初稿引渡し。別Astraによる内容点検と本部の統一編集を待つ。
- 根拠：公式固定commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a、2026-09-23版85頁。既存Solの原稿・解釈・図・点検結果は不使用。指定見本（034 Schnellと033 Orbifold Iitaka）、共通表示・引用処理、063の図レンダラ構造のみ利用。

## 成果物

- article.ja.md / article.en.md：主定理、図前文献一覧、主定理全体・Proposition 7.11・Proposition 8.8の3証明節、直接入力、原典案内・確認範囲。
- sources.json / citations.json：固定版・ハッシュ、入力・確認範囲、主張・結論対応、author-key引用。
- diagrams：main / detector / bott の日英TeX・SVG、TikZ原本、共通引用定義、render.py、preamble.tex、citation-build.json。
- qa：原典の主要ページ8画像、全6図のPNG、renderDraft生成HTML、structure-check.json、再検査スクリプト。
- build_records.py：今回のsources/citations記録生成元。編集後に無条件で再実行すると記録への追記を上書きするため注意。
- 外部固定版PDF/txt：coordination/catalog-285/sources/baum-connes-injectivity/（EH20・KP20・BvE16・HS07）。

## 原典の読解・照合

- 主定理p.1、主張と結論§9.2 pp.82–83。
- Proposition 5.2 pp.41–42と同時選択の証明§5.8 pp.49–50、parameter順序§9.1 pp.81–82。
- Lemma 6.3・Proposition 6.4 pp.55–57、有限peeling・cycle座標・同時domain pp.61–64、cone鎖・ねじれ排除・明示cocycle・制限全射 pp.65–69。
- §8 pp.70–81：局所化profile、trimmingとsynthesis、定数抽出、有限Cayley式、商代数への所属、二つの道・有限加法性、supported transport、座標回収・有限生成部分群。
- 外部入力：EH20 Theorem 1.3 p.2、KP20 Corollary 1.4/(1.6) pp.5–7と主束の仮定p.3、BvE16 Theorem 1 p.2。記述・適用条件を照合し、全証明の再検証はしない。
- 比較：HS07 Theorem 1.2 pp.1–2。最大assembly非消滅は本稿の主証明への入力と分離。
- カタログ関係：projection原稿§7.6 pp.36–38と、本稿の方法参照p.7・p.64を照合。cone-chainと素数位数排除は本稿で再証明する。stream/recoveryの適応元表示を確認したが、同じ定理を無変更で入力しているとは扱わない。irrational-traceへの直接の定理依存は確認範囲でなし（全域の独立性の認定ではない）。

## 実施した検査

1. 担当レジストリのみの共通引用生成、`--check --text-only`成功。
2. XeLaTeX→dvisvgmで全6図生成。Overfull / Missing characterなし。citation-build.jsonへ原本と生成物のSHA-256記録。
3. sharpで全6SVGをPNG化し、執筆者が6枚すべて目視。文字・数式・引用の欠落や重なりなし。矢印専用余白を確認。
4. 原典p.1,69,80,83と外部主要定理ページをPDFからPNG化して目視し、番号・ページ・主張を照合。
5. renderDraftで日英HTMLを生成。内部参照先・conclusionCoverageの全アンカーが存在。日英各95数式のmultiset一致、display数式の順序・内容一致。
6. 指定見本の構造は確認済み。共通CSSのPC/375px実画面比較は本部担当で後続実施。現時点で実画面比較済みとはしない。

## 再生成・再検査

リポジトリルートで、nodeとTeXをPATHに加える。

```sh
export PATH=/Library/TeX/texbin:/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node scripts/sync-citations.mjs --registry drafts/catalog-285/baum-connes-injectivity/citations.json
python3 drafts/catalog-285/baum-connes-injectivity/diagrams/render.py
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-285/baum-connes-injectivity/citations.json
node drafts/catalog-285/baum-connes-injectivity/qa/check.mjs
```

図レンダラはpublicへコピーしない。通常の全check:citationsは公開コピーを要求するため、第1段階ではtext-onlyと図manifestで検査する。

## 未確認・引継ぎ

- §§2–4の逐次確率・回復・pruningの全評価、§§5.4–5.7のFourier envelope・有限regular-norm test・centered momentの全計算は独立に検証していない。後続の解析的実現に重要な未確認範囲として日英本文に明記。
- 本稿85頁全体・外部入力の全証明・専門家査読・形式検証は未実施。
- 別Astra内容点検、本部統一編集、指定見本との実画面比較が必要。
- サイト登録、publicコピー、日英冊子PDF、公開前全検査、commit/push、公開は未実施。PDF担当は第2段階のサイト本部。
- 有限生成と有限表示、係数なしと一般係数、被約と最大、核元とスカラー射影を区別して保持する。

## 初稿後の本部表示点検への対応（2026-10-15）

- 21:40 JST頃、gpt-6-astra執筆者：本部が共通表示のPC/375pxを点検し、長いinline Heisenberg積による375px横はみ出し17pxを指摘。日英で同じalignedの独立数式へ分離。
- guideRoleの末尾句点が共通生成と重複していたため記録側の句点を除去し、共通引用を再生成。build_records.pyにも同じ処理を反映。
- 数式数は日英95のまま、multiset一致、共通内部アンカー確認成功。図内容・TeX/SVGは変更なし。

- 21:45 JST頃、別Astra（projection担当）の原典照合レビュー `coordination/catalog-285/review-injectivity.md` を受け、日本語「積分Heisenberg群」を「整数Heisenberg群」へ修正。意味・数式・図の変更なし。主要結論を変える指摘なしとの報告。

## 第2段階（2026-10-15）

本部がサイト組込み・日英冊子PDF・公開前検査を完了。数学文・引用・図は変更せず、記事のproof-targetを次の主張へ連結する改ページラッパーを追加（無理数traceの主結果引用は前段落へ連結）。案内のPDF注記は共通コンポーネントによる実導線へ更新。日英全紙面を別Astraが点検。詳細はcoordination/catalog-285/stage2/。commit/push/公開は未実施。
