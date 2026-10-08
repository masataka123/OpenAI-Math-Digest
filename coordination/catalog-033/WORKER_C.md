# カタログ033 担当Cの指示書

担当は03の1篇。これは制作開始前に準備した指示書であり、記事は未着手。ユーザーから開始指示を受けた後、[共通要領](README.md)に沿って進める。

## 対象と保存先

**The reverse logarithmic Kodaira inequality and additivity**

- 033内の掲載順：03。内部ID：`reverse-logarithmic-additivity`。共通略号：`[RA]`。
- 原稿：2026-09-26、51ページ。
- [固定原典](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf)
- SHA-256：`499df173e9f8ba2d88b644514c4ea3a797d5c00de4148bac246f7a4c857094f9`。
- PDFキャッシュ：`/tmp/math-digest-033-preparation/3-current.pdf`。抽出本文：同じ場所の `3-current.txt`。
- 成果物の保存先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-033/reverse-logarithmic-additivity/`。

キャッシュ消失時の取得URLは [inventory.json](inventory.json)。[SOURCE_NOTES.md](SOURCE_NOTES.md)に下界の入力と確認範囲がある。

## 記事の重点

Theorem 1.1の逆不等式とCorollary 1.2の加法性を独立して記す。滑らかな射影的reduced-SNC対、連結ファイバー、底の境界の引き戻しの台に関する条件、開いた底の上で全空間と**全ての境界stratum**が滑らかという仮定を省略しない。

Proposition 1.3の切断構成から、底の小平次元の各場合へ進む帰着を核にする。特に底またはファイバーの小平次元が負の無限大の場合を落とさない。入力を列挙するだけでなく、元の開いた底の指定点での消滅が底の切断へどう移るかを説明する。

## 読む順序の候補

| 優先 | 箇所 | 確認する接続 |
|---|---|---|
| 1 | Theorem 1.1 / Corollary 1.2 p.2、Proposition 1.3 p.3、§2 pp.5–7 | 切断構成から逆不等式への帰着と符号の場合分け |
| 2 | §7 pp.43–50、特に§7.5 pp.49–50 | period twistを除き、元の底の切断へ戻す終段 |
| 3 | §3 pp.7–14、§6 pp.37–43 | Hodge vector、coefficient lattice、相対飯高の切断比較 |
| 4 | §§4–5 pp.14–37の終段が使う結果 | period quotient、境界のrank loss、Higgs tailsが切断構成へ供給する内容 |
| 5 | §7.6 / Theorem 7.8 p.50 | OIの下界を加えて加法性にする箇所 |

以上は優先箇所の案であり、全範囲を精読した記録ではない。Proposition 1.3への参照が本文内でTheoremと呼ばれている箇所があるため、結果のラベルは記述箇所と照合し、表記差を出典記録に残す。

## 入力と担当間の接続

- OI Corollary 6.2 pp.40–41は、Theorem 7.8とCorollary 1.2の下界に使われる。上界Theorem 1.1の証明に必要な入力として描かない。
- OIの下界と本稿の上界で、ファイバー、境界、負の無限大の規約が一致する箇所をp.50で確認する。
- WV p.5が加法性を用いて示すsmooth familyの比較は、担当Bが扱う利用先。RAの主定理がWVを使うと逆向きに推測しない。
- 本稿のHodge理論の直接入力は実際の証明箇所から選び、その外部結果の記述と適用を確認する。OI・PHと用語が似ていることだけで矢印を増やさない。

## 引き渡し

日英本文、図、sources.json、status.mdを保存する。上界と加法性、各符号の場合、指定点での切断の扱いを日英で揃える。主要な移行を確認できなければ原典の節・結果・ページを挙げて保留にする。全外部証明の調査へ広げず60分で区切る。

## 制作開始後に使うプロンプト

```text
OpenAI Math Digestのカタログ033を担当する窓口Cとして、03の初稿制作を開始してください。
作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest です。
最初に PROJECT_PLAN.md、AGENTS.md、coordination/catalog-033/README.md、SOURCE_NOTES.md、WORKER_C.mdを読んでください。後ろ3件は同じcatalog-033フォルダ内です。
The reverse logarithmic Kodaira inequality and additivityについて、固定原典の証明本文と直接入力を確認し、Schnell形式の日英本文、引用付きTeX図、出典記録を作成してください。
逆不等式の主定理とOIの下界を加える加法性の帰結を分け、全境界strataの滑らかさと負の無限大の場合を維持してください。
原典確認・執筆・図・確認を含め最大60分、下限なし。開始・締切・終了時刻をJSTで記録し、未確認は明記して区切ってください。
リポジトリ内の変更先は drafts/catalog-033/reverse-logarithmic-additivity/ のみ。PDF取得や図の中間生成には担当専用の一時領域を使えます。共通コード、034、他担当、Git、公開には変更を加えず、別チャットやサブエージェントの作成・別チャットへの送信も行わないでください。
共通表示の改修や他担当の完成を待たず原典で進め、成果物・時間・確認範囲・未完成箇所をstatus.mdとこのチャットへ報告してください。
```
