# カタログ033 担当Dの指示書

担当は04、05の2篇で、この順番に進める。各篇に独立した最大60分の初稿枠を設ける。これは制作開始前に準備した指示書であり、記事は未着手。ユーザーから開始指示を受けた後、[共通要領](README.md)に沿って進める。

2篇はHodge lineに関係するが、組み合わせは担当負荷の配分による。両者の直接依存を確認したための分担ではない。原典上の関係が未調査ならそのまま記録する。

## 1本目の対象と保存先

**Projective Hodge lines and ordinary Iitaka subadditivity**

- 033内の掲載順：04。内部ID：`projective-hodge-lines`。共通略号：`[PH]`。
- 原稿：2026-09-27、40ページ。
- [固定原典PH](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Projective-Hodge-lines-and-ordinary-Iitaka-subadditivity-September-27-2026/paper.pdf)
- SHA-256：`564a98c625b94ef479a6690bed65451fee18c47c69c23e5d9e1f4fd181deca9a`。
- PDFキャッシュ：`/tmp/math-digest-033-preparation/4-current.pdf`。抽出本文：同じ場所の `4-current.txt`。
- 成果物の保存先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-033/projective-hodge-lines/`。

### PHの記事の重点

Theorem 1.1の通常の劣加法性と、その入力となるTheorem 1.2のHodge lineの随伴正値性を原典順に記す。標数0の代数閉体、幾何学的一般ファイバー、全最高Hodge空間がrank oneであるという範囲を維持する。OIで扱うcomplex summandの定理と同一視しない。

full period imageの次元とhighest-line mapのrankは異なり得る。period quotient上で境界と有限商の分岐を除く段階、相対飯高への適用、基礎体の変更を分けて説明する。semiamplenessを仮定して証明を短縮しない。

### PHで読む順序の候補

| 優先 | 箇所 | 確認する接続 |
|---|---|---|
| 1 | Theorems 1.1–1.2 p.2、§7 pp.22–27 | 主定理へ届く入力と、標数0への変更 |
| 2 | §6 pp.16–22 | canonical bundle data、least-index root cover、whole top lineと切断比較 |
| 3 | §§2–5 pp.5–16 | rational minimality、境界でのrank loss、実際のperiod像上の有限商、随伴のbigness |
| 別枠 | §8 pp.27–34、§9 pp.34–39 | integral tensor replacementと境界評価の追加の証明。主経路と全て混ぜない |

これは読解候補であり、準備段階で全証明を確認した範囲ではない。WV p.25は本稿Lemma 8.4 / Theorem 8.1を別のadjoint comparisonとして引用する。担当Bへ渡せるよう、読んだ場合は正確な仮定・利用の範囲をsourcesへ記録する。

04の日英本文・図・sources・statusを一区切りにしたら、自分のチャットへ報告して05へ進む。033本部の確認待ちで止めない。

## 2本目の対象と保存先

**B-semiampleness for compact log-smooth Kähler fibrations**

- 033内の掲載順：05。内部ID：`kahler-b-semiampleness`。共通略号：`[BS]`。
- 原稿：2026-09-10、38ページ。
- [固定原典BS](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/B-semiampleness-for-compact-log-smooth-Kahler-fibrations-September-10-2026/paper.pdf)
- SHA-256：`afad4b593eede2ddf61795187a33ccddbf38dd470c67580982682623ae351d19`。
- PDFキャッシュ：`/tmp/math-digest-033-preparation/5-current.pdf`。抽出本文：同じ場所の `5-current.txt`。
- 成果物の保存先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-033/kahler-b-semiampleness/`。

キャッシュ消失時は両篇とも [inventory.json](inventory.json) のURLから取得し、ハッシュを照合する。

### BSの記事の重点

Theorem 1.1の二つの結論、すなわち高いモデルでのmoduli b-lineの引き戻しによる安定化と、実際の正則直線束の大域生成を分ける。滑らかなコンパクトKählerの全空間と底、有効有理SNC境界、係数1、随伴線束の正確な有理引き戻し表示を維持する。射影性を補わない。

thresholdで定まるdiscriminantは、orbifold基底のinf-multiplicity divisorと別物である。Hodge lineをmoduli lineに同定する局所計算と、積分解を族として作り大域生成を降ろす段階を追う。点ごとの積分解だけで族の存在・大域生成が得られるように記述しない。

### BSで読む順序の候補

| 優先 | 箇所 | 確認する接続 |
|---|---|---|
| 1 | 設定pp.2–3、Theorem 1.1 p.3、§9 pp.36–37 | 安定化と大域生成の二つの結論へ至る合流点 |
| 2 | §§3–4 pp.6–18 | root eigenline、deepest residue、threshold ordersと高いモデルへの降下 |
| 3 | §5 pp.18–25 | compact auxiliary base上の族としての積分解 |
| 4 | §§6–7 pp.25–34 | 射影的比較因子とtorus / symplectic因子、それぞれの直接入力 |
| 5 | §8 pp.34–36 | 指定した同型の境界への延長、flat twistの排除、切断の降下 |

入力を選ぶ際は、本稿が引用するBakker–Filipazzi–Mauri–Tsimerman、Fujino–Fujisawa、Matsumura–Wang–Wu–Zhang等の原文の記述と適用箇所を確認する。列挙した文献の全証明を調べる必要はない。これらの外部原典の版・適用照合は担当の作業であり、準備メモにより完了したとは扱わない。

本稿p.3はCampana orbifold Iitaka theoremを使わないと明記する。この一点から全外部依存がないと結論しない。また034のmoduli分母評価やnef性の結果とb-semiamplenessを同一視せず、直接引用を確認するまで034との辺を作らない。

## 引き渡し

2篇それぞれに日英本文、図、sources.json、status.mdを作り、開始・締切・終了時刻を別々に記録する。全最高Hodge lineとcharacter eigenline、nef・随伴正値性・semiampleness、数値類と実際の線束の同型を区別しているか確認する。

初稿の60分で未確認・未完成が残れば、その結果・接続・作業段階を各statusに明記する。2篇を1記事へ統合せず、完成報告でも2篇の確認範囲を分ける。

## 制作開始後に使うプロンプト

```text
OpenAI Math Digestのカタログ033を担当する窓口Dとして、04、05の初稿制作をこの順番で開始してください。
作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest です。
最初に PROJECT_PLAN.md、AGENTS.md、coordination/catalog-033/README.md、SOURCE_NOTES.md、WORKER_D.mdを読んでください。後ろ3件は同じcatalog-033フォルダ内です。
Projective Hodge lines and ordinary Iitaka subadditivity、続いてB-semiampleness for compact log-smooth Kähler fibrationsの2篇について、固定原典の証明本文と直接入力を確認し、Schnell形式の日英本文、引用付きTeX図、出典記録を作成してください。
原典確認・執筆・図・確認を含め各篇最大60分、下限なし。各篇の開始・締切・終了時刻をJSTで記録してください。04を区切って報告したら確認待ちで止めず05へ進み、05に別の60分枠を設けてください。
リポジトリ内の変更先は drafts/catalog-033/projective-hodge-lines/ と drafts/catalog-033/kahler-b-semiampleness/ のみ。PDF取得や図の中間生成には担当専用の一時領域を使えます。共通コード、034、他担当、Git、公開には変更を加えず、別チャットやサブエージェントの作成・別チャットへの送信も行わないでください。
共通表示の改修や他担当の完成を待たず原典で進め、1篇ごとに成果物・時間・確認範囲・未完成箇所をstatus.mdとこのチャットへ報告してください。
```
