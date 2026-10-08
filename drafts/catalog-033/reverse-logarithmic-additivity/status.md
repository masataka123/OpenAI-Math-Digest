# 033 担当C — reverse-logarithmic-additivity

- 状態：**初稿引渡し（サイト未組込み・未公開）**。
- 担当：33担当C。
- 論文：The reverse logarithmic Kodaira inequality and additivity。
- 公式カタログ番号：033。カタログ内掲載順：03。内部ID：`reverse-logarithmic-additivity`。
- 開始：2026-10-08 21:48:14 JST。
- 締切：2026-10-08 22:48:14 JST（最大60分）。
- 終了：2026-10-08 22:15:51 JST。
- 経過：27分37秒。60分上限以内で初稿を区切った。自動延長なし。
- 変更範囲：この担当フォルダのみ。PDF・抽出本文・組版中間物・QA用HTML/PNGは担当専用一時領域 `/tmp/math-digest-033-worker-c/`。
- Git操作、公開、別チャット／サブエージェント作成、別チャット送信は行っていない。共通コード・034・他担当・ルート計画文書・共通台帳も変更していない。

## 成果物

- [article.ja.md](article.ja.md)：日本語本文。
- [article.en.md](article.en.md)：英語本文。
- [sources.json](sources.json)：版・URL・SHA-256、主張と読解箇所、外部入力の記述・適用照合、未確認点。
- [catalog-changes.md](catalog-changes.md)：OI Corollary 6.2 → RA Corollary 1.2 / Theorem 7.8 を `consequence` として登録する提案。
- [validation.json](validation.json)：日英数式・引用順・節数・図数の照合結果。
- `diagrams/`：下記4図の共通TikZ原本、自己完結した日英TeX各4本、日英SVG各4枚。`preamble.tex`、`render.mjs`、`manifest.json`を同梱。

| stem | 内容 | 引用数／言語 |
|---|---|---:|
| `upper` | Theorem 1.1：二つの−∞、κY=0の単射性、正のκYの飯高帰着 | 6 |
| `section-construction` | Proposition 1.3：元の係数格子、指定点のzero test、点商／正次元商 | 12 |
| `period-removal` | 相対飯高の完全切断空間、lc-trivial階数条件、Higgs tails、数値的除去 | 11 |
| `additivity` | 本稿の独立した上界とOIの下界を同じ対・同じファイバーで合流 | 6 |

計4組・8枚、各言語35件・計70件のクリック可能な原典引用。図中に結果名・PDFページを明記し、GitHub blob URLにページ移動可能との表示を付けていない。

## 核心の整理

1. Theorem 1.1 / Corollary 1.2 / Proposition 1.3を原典順で独立に記載。全境界strataの滑らかさ、support inclusion、複素射影的対、連結ファイバー、−∞の全正次数消滅を維持。
2. κY=0では、底の全次数の零因子を避けた同一の非常に一般の点を選ぶ。元のVの任意の該当点に使えるzero testが、全次数での制限写像の単射性を与える。
3. 巡回被覆の追加判別式を元の対数的余接格子へ加えないこと、blowup後も元のsource lineの枠で零点を測ることを説明。
4. 正次元period商では、相対飯高のvaluation最小値から完全切断空間を一致させ、lc-trivial補助subpairの階数1を確認してb-nef性を用いる。Higgs tailsの数値次元等式と境界摂動に一様な閾値評価でperiod twistを除く。
5. OIの下界は加法性の帰結にのみ使用。−∞での消滅は上界の内容として区別。

## 実際に読んだ箇所

- RA主結果pp. 2–3を本文・PDF画像で照合。§2 pp. 5–7、§3 pp. 7–14の係数とzero testを読解。
- §4はProposition 4.1 pp. 14–15、Lemma 4.7 pp. 19–20、初期随伴bignessの選択した証明段落を読解。
- §5はLemma 5.1 pp. 26–28、boundary dropの記述・証明冒頭／終段、Lemma 5.4・Proposition 5.5、Higgs tailsの記述と曲率／kernel inclusionの段落を確認。全退化・表現論計算を読了したとは扱わない。
- §6 pp. 37–43の相対飯高、source valuation抽出、pole testの両方向、補助subpairと階数条件、§7 pp. 43–50の指定点・数値的除去・orbifold transfer・閾値・相対擬有効性・元の底への復帰を読解。
- OI Corollary 6.2 pp. 40–41の記述・短い帰結証明を読み、RA p. 50の仮定と使用を再照合。
- FF14 §4.9 / Lemma 4.10, Step 1とFF17補足、BBT Theorem 1.1、FG Definition 3.2 / Theorem 3.6、CP Theorems 1.3 / 3.4とRemarks 3.3 / 3.6、BDPP Theorem 2.2の記述・使用箇所を照合。AS Theorem Aは本稿の自己完結した半単純connection-form議論の方法上の出典として区別。

結果ごとの正確なページと確認範囲は `sources.json` に記録。原稿の後方参照にある「Theorem」と、記述箇所のProposition / Lemma / Corollaryの差も同ファイルに残した。

## 実施した検査

- RA 51ページ、SHA-256 `499df173e9f8ba2d88b644514c4ea3a797d5c00de4148bac246f7a4c857094f9` がinventoryと一致。OIのハッシュも一致。取得した主要外部PDFのハッシュを記録。
- 日英の表示数式15件が一致（文末句読点・空白を正規化）。本文の引用先キー46件の順序が一致。H2は各8個（番号付き7節と引用キー）、図は各4枚。
- 既存のMarkdown描画関数を読み取り利用し、担当専用一時HTMLを生成。MathJaxで日本語163式・英語165式を描画し、数式エラー0。式数の差は英文中の個別変数や、日文で一つのinline数式にまとめた条件を英文で分けたことによる。差分を照合し、数学的内容の欠落は検出しなかった。
- 8本のTeXをXeLaTeX→XDV→dvisvgmで生成。Overfull box・Missing characterなし。
- 8枚のSVGをPNGへ描画し、両言語で全図の文字・式・箱・矢印・引用の配置を目視。半幅結果箱の幅、英語の下段箱と結論の間隔、引用の余白を修正して最終版を再確認。
- SVG XML、全glyph参照、ファイル内／ファイル間IDの一意性、70件のリンク・aria-label、引用URLが本文の原典定義と一致することを確認。
- 原典9件のHTTP到達性を確認。8件はHEADで200、HEAD非対応のFGはGETで200 application/pdf。Pythonの証明書ストアエラーはcurlの正常な証明書検証による確認へ切り替えた。
- JSON構文・必要な成果物の存在を確認。PDFや重い組版中間物は担当フォルダに含めていない。

## 図の再生成

作業先ルートから、Node.js、XeLaTeX、dvisvgm、xeCJK、Harano Ajiフォントがある環境で：

```sh
node drafts/catalog-033/reverse-logarithmic-additivity/diagrams/render.mjs /tmp/math-digest-033-worker-c-render
```

この環境ではNodeは `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node` を使用。`render.mjs` は `/Library/TeX/texbin/` のXeLaTeXとdvisvgmを呼ぶ。別環境ではその実行パスを調整する。共有スクリプトは実行していない。各 `.ja.tex` / `.en.tex` はプリアンブルとURLを含み、単独でXDV/SVGへ再生成できる。

## 未確認・未完成と本部への申し送り

- **数学的な確認範囲**：§4.1–4.2の斉次置換・compact flag・有限monodromy、§4.4の全計量評価、§5の全境界退化・degree-one rootsの表現論は独立検証未完了。外部定理の全証明、外部文献の再帰的検証、全依存関係の網羅、専門家査読・形式検証は未実施。これを日英本文・sourcesに同じ範囲で記載した。
- CPはarXiv v4で定理番号・記述を照合した。RA参考文献が挙げる2019年刊行版との全差分は未照合。
- **制作物**：依頼された日英本文・4組の日英SVGとTeX・sources・status・接続提案は保存済み。図の未生成等の制作上の残件はない。
- **掲載確認**：サイト全体のビルド、公開導線、共通ヘッダー／言語切替／スマートフォン表示、図の拡大UIへの組込みは未実施。本部による組込み後に確認する。今回の一時HTML検査をサイトの表示確認と混同しない。
- OI → RAは `consequence` とし、RA上界への入力へ移さない。RA→WV等は担当B側の確認範囲と合わせる。未調査の辺を「依存なし」にしない。
- 本部への自動送信は行っていない。保存したファイルを受領可能な状態にした。

## 033本部の総括編集 2026年10月8日

初稿の時間枠とは別の編集。日英の各証明節に目標と得られた結果の使い道を明示し、結果・利用先・役割を総括と照合した。既存の詳細図と確認範囲を保持。 共通CSS・共通部品は変更していない。検査結果は ../overview/validation.json と ../../../coordination/catalog-033/SYNTHESIS_HANDOFF.md を参照。
