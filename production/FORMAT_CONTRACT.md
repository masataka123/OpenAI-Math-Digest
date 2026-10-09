# 表示形式の必須仕様 — 制作セット1.3

## 見本と適用範囲

- カタログの一覧：034の「全14篇の要点」。列は「#／論文・概説／主に何を主張するか／議論の役割・概説」。1本でも1行の同じ表を使う。
- 記事の骨格：034 Schnell。主要結果、引用案内、証明対象ごとの図と直後の説明、入力結果、原典・確認範囲。
- 文献案内：033 Orbifold Iitakaの「図の矢印に付した引用」。本稿の番号の読み方に続き、各外部文献の略号・著者／論文名・使う内容・参照版・リンクを一覧にする。
- 新規カタログと今回の063に適用する。033・034を一括改稿しない。論文数、証明節数、経路数、関係図の有無は可変。単論文の入口は短く保ち、論文間の空の関係図を作らない。

## 1. 公式順一覧：カタログ本部が記入

`drafts/catalog-NNN/overview/presentation.json` に保存する。

```json
{
  "schemaVersion": 1,
  "checkedOn": "2026-10-09",
  "rows": [{
    "paperId": "paper-id",
    "displayName": "Readable paper name",
    "result": "Theorem 1.1 · p. 2",
    "claim": {"ja": "主要な仮定と結論", "en": "Principal hypotheses and conclusion"},
    "role": {"ja": "証明の方法・議論の役割", "en": "Proof method and role"}
  }]
}
```

rowsは公式paperIdsと同じ順序にする。正式タイトル、原稿版、ページ数、原論文URLはサイトの論文台帳から供給し、重複入力しない。日英の案内の最初の内容節に `CATALOGINVENTORYTOKEN` を1回置く。`CatalogMarkdownOverview.astro` が共通の `renderCatalogInventory` を使って表にする。新規独自表・独自CSSに置き換えない。各行は公開対象の概説記事を必要とする。

## 2–4. 文献一覧・引用区別・証明対象・原典案内：記事担当が記入

[CITATIONS.md](CITATIONS.md)の各記事のcitations.jsonに以下を加える。

```json
{
  "sources": {
    "P": {"recordFile": "sources.json", "recordId": "self", "displayName": "Paper name", "pagination": "same"},
    "EXT": {"recordFile": "sources.json", "recordId": "external-id", "guideRole": {"ja": "具体的に使う結果・内容", "en": "Specific input and use"}}
  },
  "articleGuides": {
    ".": {
      "selfSource": "P",
      "externalSources": ["EXT"],
      "proofTargets": ["main-result"],
      "mainResults": ["main-result"],
      "statements": {"main-result": "theorem-1-1"},
      "conclusionCoverage": [{"result": "main-result", "conclusion": "主結論", "anchor": "proof-1-step-2"}],
      "readingList": [{"citation": "main-result", "purpose": {"ja": "ここで読む内容と目的", "en": "What to read here and why"}}]
    }
  }
}
```

これは既存レジストリへの追加項目の例であり、citations・markdownFiles・diagramDirectoriesは[CITATIONS.md](CITATIONS.md)の通り必要。articleGuidesのキーはレジストリから記事ディレクトリへの相対パス。記事内にレジストリを置く通常の分担では `.`。063はカタログ直下に置いたため `generalized-mukai`。sources.jsonの外部記録にはauthors・versionを必須とする。版を推測しない。長い書誌情報を短くする場合はsources参照にguideVersionの日英表示を記入してよいが、原記録の版・日付を変えない。

- 日英記事の「図の矢印に付した引用／References on the arrows」に `<!-- reference-guide -->…<!-- /reference-guide -->` を置く。図より前に置き、一般的な引用ルールの説明だけで代用しない。記述は共通処理で生成される。外部入力がなければexternalSourcesを空配列にし、その旨を生成する。
- 自論文の結果は無略号、外部は定義済みの略号付きとする。図には読みやすい論文表示名も併記する。本文・TeXを共通の引用記録から生成し、キーだけの案内にしない。
- 各証明節のH2に原典のTheorem／Proposition等の種別・番号を入れる。節頭に `<!-- proof-target:1 -->…<!-- /proof-target -->` を順に置き、proofTargetsの引用IDから原典リンクを生成する。中間命題を証明する節ではその命題を対象とし、主定理との接続は直後の本文で説明する。番号のない結果は原典の節・記述を対象名に用い、番号を創作しない。
- 最後の「原典を読む入口と確認範囲／Return to the sources」に `<!-- reading-list -->…<!-- /reading-list -->` を置く。readingListから「結果・ページのリンク — 読む目的」の箇条書きを生成する。確認済み／未確認の説明は続く本文に残す。
- 図の矢印に使う外部文献はすべて文献一覧へ含める。本文で使う直接入力も同じ一覧で定義する。別構成・背景を直接依存と誤認させないよう用途を記入する。

## 生成・受領・公開ゲート

1. 記事担当：出典記録、上記の項目、日英本文、TeX原本を用意。担当レジストリを指定して `npm run citations -- --registry …`。`--text-only` 検査、図の生成まで行い、未完了を引継ぎへ記載する。
2. カタログ本部：最初の記事から4項目を点検。表のデータと日英案内を作り、見本との相違を一覧にする。全記事完成まで不統一を放置しない。
3. サイト本部：共通表示へ組込み。`npm test` が全新規カタログの公式順・必須項目・文献一覧と図の前後関係・証明対象・原典案内を検査する。`npm run check:citations` は生成内容・TeX/SVGの更新を検査する。どちらかが失敗すれば公開しない。
4. 実画面比較：034の4列、Schnellの証明対象、033の文献案内と並べ、項目・配置を確認。日英・PC・375pxで長い著者名、図中の略号、一覧の横スクロール、原典リンクを点検する。
5. 日英PDFを再生成し、表の情報保持、文献一覧、全改訂図、証明対象と原典案内を画像で点検。PDFの内容照合後に公開し、公開版を確認する。

受領記録は4項目それぞれについて「入力元・表示先・自動検査・目視証拠・未完了」を記す。テスト成功だけで「形式統一済み」と報告しない。数学的な適用の妥当性と説明の読みやすさは、原典との照合と編集で確認する。

## 5. 主張と主定理の証明を対応させる（1.3）

Schnell・Orbifold Iitakaと同じ「主張 → 引用付きTeX図 → 図直後の文章」を使う。定理番号と原典リンクだけで主張の代わりにしない。

- 主要結果に掲げた各結果には、その全結論を導く証明概略を用意する。不等式／等号分類／逆向き／場合分けなど、原典にある結論と条件を分けて追う。
- 主定理を複数の中間命題へ分解する場合は、詳細に入る前に全体の図と文章を置く。中間結果以外に必要な入力も矢印へ示す。単純な一節の証明なら、その節が主定理の証明概略を兼ねてよい。
- 独立した証明節を設けるProposition等には、図より前に仮定・記号・量化・結論・原典番号・ページをまとめた主張欄を置く。基本用語の定義を増やす意味ではない。途中で引用するだけの補題は、使う内容を明示すればよく、全補題の再掲は不要。
- 中間命題の主張は `<!-- statement:proposition-3-1 -->` と `<!-- /statement -->` で囲み、中に `### Proposition 3.1 — …`、主張の本文・数式、管理された引用を置く。共通の定理欄として描画される。主定理の主張は既存の「主要結果」のH3形式を使う。
- articleGuidesのmainResultsへ主要結果の引用IDを原典順に列挙し、proofTargetsへ全証明節の対象を順に列挙する。statementsは各対象IDから主張欄のアンカーへの対応。conclusionCoverageは主定理の各結論と、説明段階のアンカーへの対応。結論名と項目数は論文ごとに決める。
- 複数命題をつなぐ全体節には日英で `Theorem … — 主定理の証明概略`／`Theorem … — Proof overview of the main theorem` を使える。この節の共通IDはproof-overviewで、既存詳細節proof-1等を変更しない。追加の全体節が不要なら通常の証明節を用いる。

自動検査は主要結果の登録漏れ、対応する証明節・主張欄・図前配置・結論の説明先の欠落を検出する。文章の数学的な充足性は認定しない。本部は原典と照合し、仮定と量化、各入力の使用条件、各結論への接続を記録してから受領する。「リンクがある」「テストが通る」だけで完了にしない。
