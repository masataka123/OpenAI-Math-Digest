# 作業記録 — カタログ039 曲面篇

- カタログ／paper ID／担当：039 / maximal-seshadri-surfaces / surfaces（記事担当サブエージェント）
- 制作セット版：1.4および2026-10-12の3段階補足。
- 初稿開始（JST）：2026-10-15 15:07:45（原典PDFの本文抽出・読解開始）。
- 初稿締切：2026-10-15 16:07:45。
- 初稿終了（JST）：2026-10-15 15:27:18／経過19分33秒。下限を設けず、必要な内容と担当確認が揃ったため終了。
- 状態：第1段階の初稿引渡し。主要内容の他担当照合あり。サイト組込み・日英冊子PDF・公開準備完了ではない。
- 作業ブランチ：main。ブランチ切替・commit・pushなし。
- 編集範囲：drafts/catalog-039/maximal-seshadri-surfaces/ のみ。共通部品、サイト登録、他カタログ、PDF管理ファイルは未変更。

## 成果物

- 日英原稿：article.ja.md / article.en.md。
- 参照版・原典読解・入力記録：sources.json。著者OpenAI、正式題名、2026-09-23版、19ページ、公式固定commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a、PDF SHA-256を記録。
- 共通引用台帳：citations.json。citationStyle=author-key、mainResults、statements、conclusionCoverage、readingList付き。
- 証明図：diagrams/main、nef、field の日英 .tex / .svg、原本 .tikz、preamble.tex、render.py、生成引用マクロとSHA-256 manifest。
- 確認出力：qa/ の6枚の図PNG、原典pp.2,16,18のPNG、diagram-checks.json、static-checks.json。
- 外部原典：sources/ に引用したStacks Projectの10章PDFと抽出テキスト。版ed88ff78、compiled July 14, 2026。ページ対応は章PDFで照合。冊子PDFの生成物ではない。

## 内容点検

1. Theorem 1.1、p.2：滑らかな整射影複素曲面、ample L、偏極依存r0、各r>=r0、真の閉集合の可算和と非空補集合、境界nef、最大値の全結論を採録。
2. 正規化：等しい例外係数を持つ多点定数、分母は曲線の点重複度の総和。曲線の重複度は不均等を許す。一般と非常に一般を区別。
3. 上界：Lemma 5.4、p.17のjet条件数と切断数の比較を独立に説明。下界：Prop.5.3、pp.16–17のnef性から得る。D0^2=0だけで最大性を主張しない。
4. 均等jet検査→不均等曲線の排除：Prop.5.3の完全主張を図前に置き、負の曲線を引く→有理摂動→RR有効化→曲線を足し戻す→同じ重複度の切断、を説明。
5. 特殊配置からの移行：Prop.2.2とProp.3.4の非零小行列式の持続、Cor.3.5、Lemma5.1のZariski開条件とBaire性を説明。r0、t/G、k/mの量化順序を確認。
6. 範囲：定性的Nagata–Biran。平面r>=10の厳密不均等不等式は別結果で、本稿の主定理証明への直接入力ではない。Cor.5.5は非可算代数閉標数0を保持。

担当は本文§§2–5（pp.4–18）を読解し、10章のStacks入力の記述と本稿の使用箇所を照合した。外部証明とその先の文献を再帰的に検証していない。

他担当照合：higher担当がTheorem1.1、Cor.5.5、§§2–5の主要帰着と日英の主結果・§3–4を原典に照合し、修正必須の内容不一致は未発見と報告（2026-10-15）。Stacks原典自体の再照合はこの他担当レビューの範囲外。詳細は本部が受領するhigher配下review-surfaces.mdを参照。担当による自己点検と他担当の内容照合は別記録であり、専門家査読や全証明の独立検証とは呼ばない。

## 形式・図・引用の検査

- 本文：主要結果2件、証明節3件。Theorem1.1の全体図を詳細のProp.5.3より前に配置。全証明節で主張または既出主張への参照→引用付き図→直後の文章説明。
- 日英：表示数式11件が文字列レベルで一致。引用マーカー順序、証明対象、H2/H3数が一致。qa/static-checks.json。
- 引用：担当レジストリ指定のtext-only検査通過（1 registry / 4 files）。生成図manifestも全件SHA-256一致。新規著者キーは文献一覧に定義。Cohomology of Schemesは057の既存キーStacksCを再利用。
- TeX：XeLaTeX -no-pdf、dvisvgmで6枚生成。Overfull box / Missing characterを失敗扱いとし、最終6枚に該当なし。図PDFや冊子PDFは作っていない。
- 画像：6枚をheadless ChromeでPNG化し、全6枚の欠字・重なり・切れを目視。余分な右余白はdvisvgm --bbox=papersizeに変更して解消。各図の引用リンク6個、計36個。
- 指定見本：Schnellのsrc/data/schnell.mjs、033 Orbifold Iitakaの本文を読み、骨格・文献案内を比較。051は標準見本として使用していない。共通レンダラーの日英PC/375pxと033/034の実画面比較は本部が別途実施・記録する（この記事担当の完了検査には含めない）。
- サイト登録前のため公開コピー整合、全体npm test、日英PDF反映・画面・公開リンク検査は未実施。text-onlyの成功で公開準備完了と扱わない。

## 再生成手順

node/npmの標準PATHがない環境だったため、npm scriptと同じJSを直接実行した。以下をリポジトリルートで実行する。

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH
node scripts/sync-citations.mjs --registry drafts/catalog-039/maximal-seshadri-surfaces/citations.json
python3 drafts/catalog-039/maximal-seshadri-surfaces/diagrams/render.py
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-039/maximal-seshadri-surfaces/citations.json
python3 drafts/catalog-039/maximal-seshadri-surfaces/qa/check-static.py
node drafts/catalog-039/maximal-seshadri-surfaces/qa/render-diagrams.mjs
```

必要環境：Node、Python3、XeLaTeX、xeCJK/HaranoAji、TikZ、dvisvgm。QA PNGには同スクリプト指定のbundled PlaywrightとGoogle Chromeを使用。Chromeはサンドボックス外の許可済みheadless実行で確認した。

## 未確認・第2段階への引継ぎ

- 数学的な残範囲：外部入力の証明全体、再帰的な依存、他カタログとの未収録関係は未検証／未調査。最適r0、少数点の正確値、一般の重み付き設定、正標数は本記事の対象外であり、欠落した主結果としては扱わない。
- 原稿に記載した核心接続について、初稿終了時点で特定の未解消な適用不一致は発見していない。これは全証明の正しさの認定ではない。
- 本部は公式順2・paperId maximal-seshadri-surfaces・OpenAI26bとして受領し、全体案内で平面定理からの直接依存矢印を作らない。
- 第2段階で共通表示への組込み、publicへの図コピー、全体check:citations/npm test、日英PDF生成、図と引用の紙面確認、言語切替・PC/375px確認を行う。第3段階のcommit/push/公開は今回の範囲外。

## 後続の編集

初稿後の編集は時刻・変更・追加照合・検査・残作業をここへ追記する。初稿を自動延長しない。

### 2026-10-15 15:35:39–15:36:11 JST — 初稿後の引用キー統一

本部の最終照合指示に従い、平面篇と同一のStacks Project Divisors章のキーをSPDivからStacksNへ統一した。対象は担当フォルダ内のsources.json、citations.json、日英本文の生成文献案内・引用・依存表のみで、数学本文の内容は変更していない。引用を共通記録から同期し、TeX/SVG6枚・citation-build.json・確認PNG6枚を再生成した。担当text-only引用検査、図SHA-256一致、表示数式11件・引用順・証明対象の日英一致が再度成功。旧キーの残存は本変更履歴を除きなし。図内では当該引用を直接表示していないため、PNGの図内容・描画寸法・リンク数は変更前と同一。初稿時間とは別の後続編集として記録する。
