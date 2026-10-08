# 033担当B — whole-fiber-variation

- 対象：公式カタログ033内の掲載順02。内部ID：`whole-fiber-variation`。略号：WV。
- 題名：Logarithmic Kodaira dimension and whole-fiber variation
- 状態：**初稿完成・未確認範囲明記**。公開前の独立検証を完了したという意味ではない。
- 開始：2026-10-08 21:48:07 JST
- 締切：2026-10-08 22:48:07 JST（最大60分）
- 終了：2026-10-08 22:17:11 JST
- 経過：29分04秒（原典確認・執筆・図・表示確認を含む）。下限なし、追加調査で自動延長しない。
- 変更範囲：この担当フォルダのみ。専用一時領域をPDF取得と表示確認に使用。

## 成果物

- `article.ja.md` / `article.en.md`：Schnell形式の日本語・英語記事。主張、定理ごとの図と直後の説明、直接入力表、原典・確認範囲。
- `diagrams/`：5種類×日英のSVG・自己完結TeX、共通の5本のTikZ、preamble、`render.py`、`render-report.json`。図内原典リンクは28件×2言語。
- `sources.json`：固定版・ハッシュ、主証明の読んだ箇所、18件の入力／別経路と各確認状態、残る未確認。
- `qa-report.json`：数式・節構成・図・参照整合・一時HTMLの表示確認。
- `catalog-changes.md`：カタログの役割欄・依存表への追記案と統合上の注意。

## 記事の中心と確認範囲

1. **Theorem 1.1**：§2のparameter field、§3の最小root coverと制限上のHodge line、§4の解析的constancyの主要論証、§§5–7のmarking・有限正規化・cocycle・慣性・有限étale降下を読む。Proposition 7.3で飯高底の座標を残したまま元の全幾何学的一般ファイバーの関数体に戻る点を図と式で示した。
2. **Corollary 1.2**：空の境界による特殊化として別図で示した。
3. **Corollary 1.3**：BDPP → LA Corollary 11.2 → canonicalなgood minimal model → Tajiを別経路として示した。LAは034と同じ2026-09-24固定版。RAとの比較はsmooth・非負底・κ(F)≥0の範囲の別経路とした。
4. **§§8–9**：Theorem 8.1の定理文と証明末尾、§9の相対飯高への接続を読む。中間証明・追加OI入力の照合は完了扱いにしない。

核心の直接入力のうちOI、Fujino、DHP、Păun–Takayama、BCHM、Kovács–Patakfalvi、Landesmanの指定定理文と使用箇所を照合した。Deligneの有限指標の該当記述、Corollary 1.3のBDPP・LA・Tajiも照合した。外部入力定理の全証明検証や論文全体の独立査読ではない。

## 残る未確認

- Hanamura Theorems 2.1–2.2の原定理文。利用先Lemma 7.1の論証は読んだが、原典本文の取得・照合はできていない。
- SGA1 Exposé X Théorème 3.1の原定理文。受け手のpurityの適用箇所・仮定提示まで。
- Deligneのglobal invariant cycles、境界Hodge extension・成長の外部入力、§4の正則化・L²解法の全見積り、BCHMのample-model補助番号。
- §8の中間volume・有限群次数評価の証明、および§9が追加で使うOIのProposition 2.7、Lemma 7.1、Corollary 7.2、Lemma 7.4。
- PHの代替比較の入力側の定理文。WV Remark 3.17は別経路と明記しているため、主定理の新たな必須辺として扱わない。
- 未記録の論文間関係は未調査。依存なしとは判定していない。

## 確認結果

- 固定原典WVのSHA-256を照合。033のOI、比較用034のLAも実ファイルで照合。
- 日英の独立表示数式16本は終止句読点を除いて一致。節ID・16件の出典URL定義は一致。
- 本文を既存 `renderDraft` / `articleStructure` で変換し、MathJaxで日本語184箇所・英語180箇所を処理、エラー0。差は代名詞・文順によるinline表記で、仮定・結論は対応。
- XeLaTeX / dvisvgmで10図生成。overfull box・欠字なし。10枚を画像で目視し、修正した日英4枚も再確認。引用・矢印・枠の重なりなし。
- SVGのXML・ID・参照先・aria labelを確認。各言語28件の原典リンク。
- 既存CSSによる一時HTMLをChromeで日英・1280px／390px幅で確認。MathJaxエラー0、各5図、ページ全体の横はみ出しなし。長い数式と図は既存の局所スクロール表示。
- Playwright同梱ブラウザは未導入だったため、インストール済みChromeの一時プロファイルで確認した。新規ブラウザのインストールはしていない。

## 統合担当へ

サイト組込み・全体ビルド・公開URL確認は未実施。現行共通rendererの図拡大・TeXリンクには `catalog-034` が固定されているので、033統合時にパス対応が必要。本文と図の個別変換は通過済み。AI注意書き、言語切替、MIT帰属は共通レイアウトで維持する。

共通コード、034、他担当の記事、Git、公開設定は変更していない。別チャット・サブエージェントの作成や別チャットへの送信も行っていない。

## 033本部の総括編集 2026年10月8日

初稿の時間枠とは別の編集。日英の各証明節に目標と得られた結果の使い道を明示し、結果・利用先・役割を総括と照合した。既存の詳細図と確認範囲を保持。全体図を日英で追加。a_0とC_*の導入、引用専用段落、OI追加入力の記述・使用照合を補った。 共通CSS・共通部品は変更していない。検査結果は ../overview/validation.json と ../../../coordination/catalog-033/SYNTHESIS_HANDOFF.md を参照。
