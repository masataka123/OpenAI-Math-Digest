# 作業記録

- カタログ／paper ID／担当：039／maximal-seshadri-higher-dimensions／高次元記事担当（subagent higher）
- 制作セット版：1.4
- 作業ブランチ：main（切替なし）
- 初稿開始（JST）：2026-10-15 15:05（時刻記録の分単位）
- 初稿締切：2026-10-15 16:05 JST
- 初稿終了：2026-10-15 15:23 JST／約18分
- 状態：初稿引渡し。サイト組込み・冊子PDF・公開準備完了ではない。
- 成果物：article.ja.md、article.en.md、sources.json、citations.json、diagrams/（3原図×日英TeX/SVG）、preview.ja.html、preview.en.html、checks/（表示記録）、preview.mjs、check-preview.mjs。

## 原典確認

固定commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a の OpenAI, *Maximal Multipoint Seshadri Constants in Higher Dimensions*, October 5, 2026、全20頁。表紙とp.19を画像でも照合。SHA-256と全引用ページ対応はsources.json。

読んだ範囲は主張pp.1–2、有限jet移送pp.4–7、旗pp.8–9、二切片変形pp.9–14、内部充填と補間pp.14–16、主定理の組立pp.16–19。単なるAbstract/Introductionの要約ではない。曲面稿のProposition 3.2 p.8、Proposition 3.4 pp.9–10、Lemma 4.3 p.14を読み、本稿pp.2,9の参照と照合した。曲面最大性定理は直接入力でない。

### 結論別の照合

| 主張・条件 | 原典 | 記事の説明先 | 自己点検 |
|---|---|---|---|
| smooth integral complex projective、n≥3、ample L | pp.1–2 | Theorem 1.1欄 | 日英一致 |
| 普通の曲線定義・等重み・分母は重複度の和 | (1.1), p.1 | Theorem 1.1欄 | higher-cycleやweightedと区別 |
| r0(X,L)以降の全整数r | (6.1)–(6.2), pp.16–17 | proof-1-step-2 | 反復中A,B≥ellの条件を明記 |
| 可算閉集合和の補集合・非空 | (6.4), p.17 | proof-3-step-1 | Zariski開性と複素Baire性を区別 |
| ε≥w | Lemma 6.1, p.18 | proof-3-step-2 | 全jet・通常の曲線重複度・二段の極限 |
| ε≤w | (6.7)–(6.8), p.19 | proof-3-step-3 | 全配置の独立な体積上界 |
| Dw nef、Dw^n=0と同値 | p.2; §6.4 p.19 | proof-3-step-3 | 曲線ごとの交点を介し、数値だけで同値にしない |
| 独立証明節Prop4.1の全主張 | pp.9–10 | proposition-4-1 | 正実数切片、dw<1/16、個数・加法性・逆jet移送を図前に掲示 |

これは担当による自己点検。本部の他担当による照合は本部記録へ追記する。専門家査読・独立した完全証明検証とは呼ばない。

## 形式・表示確認

- `node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-039/maximal-seshadri-higher-dimensions/citations.json` 成功（1 registry、4 files）。通常の `npm run check:citations -- --registry … --text-only` と同じスクリプト。環境にnpmがないためbundled Nodeで直接実行。
- 図前の文献案内、内部/外部引用区別、3証明対象、原典読書案内、mainResults/statements/conclusionCoverageを共通生成器で検査。
- 日英の独立数式12本は空白と文末句読点を除いて完全一致。引用マーカーの順序、H2節数（7）、図数（3）、対象の順序は一致。インライン記号の語順は翻訳により異なり、数式出現数だけを一致条件にしていない。
- 6枚のTeX/SVGをXeLaTeX→XDV→dvisvgmで生成。Overfull/Missing characterなし。citation-build.jsonの19ファイルのSHA-256を照合。
- 共通renderDraftと既存CSSで日英ローカルプレビューを生成し、MathJaxで数式を描画。内部アンカー欠落なし。
- Chrome一時プロファイルでPC1280px／375pxを確認。全4条件でページ横はみ出し0、MathJax error 0、証明3節・3図。数式・表は既存の横スクロール、図は拡大リンクを使う。生のTeXが表示された最初のプレビューはHTMLラッパーを修正して再生成し、最終記録に置換済み。
- 全6図を画像で目視。箱・矢印・引用に重なりなし。英語全体図の最終矢印余白を広げて再生成・再確認。
- 証拠：checks/preview.json、article-{ja,en}-{1280,375}.png、statement-*、references-*、diagram-{ja,en}-{1,2,3}.png。
- SchnellArticle.astroの主要結果→文献案内→図→直後の説明→入力→読書範囲、および033 Orbifold Iitakaの文献案内を構造上比較。051は標準に使用していない。
- 指定見本との横並び実画面比較：担当内では未実施。本部による039全体の受領確認に引継ぎ。ローカルプレビュー単独の確認を公開サイトの表示比較と呼ばない。
- check:citations（公開コピーを含む完全版）、全体npm test/build、公開ルート・言語切替・冊子PDFの検査は第2段階。

## 再生成

```sh
export PATH="/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
node scripts/sync-citations.mjs --registry drafts/catalog-039/maximal-seshadri-higher-dimensions/citations.json
python3 drafts/catalog-039/maximal-seshadri-higher-dimensions/diagrams/render.py
node drafts/catalog-039/maximal-seshadri-higher-dimensions/preview.mjs
node drafts/catalog-039/maximal-seshadri-higher-dimensions/check-preview.mjs
```

図はXeLaTeX、xeCJK、HaranoAji、TikZ、dvisvgmを使用する。確認用Chromeは一時プロファイルを使用し、OS sandbox外実行が必要だった。PDF冊子は生成していない。render.pyにpublicへのコピーはない。

## 本部・第2段階への申し送り

- 台帳の本稿キーはOpenAI26c、記事内の自己引用は無略号。曲面稿はOpenAI26b。
- カタログの関係は `surfaces → higher-dimensions` の方法上の一般化。surface maximalityへの直接依存矢印は作らない。
- 主定理はn≥3・複素数体のみ。点数全体のしきい値以降、正確な等式、普通の曲線定義。平面Nagataの全r≥10を本稿だけで解いたとしない。
- 新規記事のサイト登録、publicへの6 SVG/6 TeXコピー、共通ヘッダー、AI注意書き、言語切替、案内からのリンク、日英PDFはサイト本部が行う。ローカルプレビューの簡略ヘッダーは公開用ではない。
- 図拡大リンクはプレビュー内ではローカルファイルへ変換している。公開組込みは共通renderDraftの生成先を使う。
- 未確認：歴史的外部結果全体、再帰的外部証明検証、専門家査読、形式検証、未掲載の他カタログ接続。本文にも範囲を明記。具体的な核心接続の保留は今回の読解範囲では新たに記録されなかったが、これを完全な正しさの認定とはしない。
- commit・push・公開、共通部品・他カタログ・PDF管理ファイルの変更はなし。

## 後続の編集

初稿終了後の内容修正・追加照合は日時・担当・範囲をここに追記し、初稿作業と区別する。

- 2026-10-15 15:24 JST：確認用スクリーンショットのsmooth scrollを無効にし、主張欄・文献案内の撮影位置を修正。本文・図の数学的内容は変更なし。

- 2026-10-15 15:26 JST：Proposition 4.1の主張ページ9–10と証明ページ10–14を別の引用IDへ分離。日英の文献案内後の指示語を修正し、引用・TeX/SVG・プレビューを再生成。数学的主張の変更なし。
