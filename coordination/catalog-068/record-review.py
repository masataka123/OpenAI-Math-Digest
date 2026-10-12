from pathlib import Path
import json
out=Path('coordination/catalog-068');inv=json.loads((out/'inventory.json').read_text())
review={'papers_01_02':'review-01-02.md','papers_03_04':'review-03-04.md','HQ':'review-05.md','papers_06_07':'review-06-07.md'}
text=['# カタログ068 内容点検・受領記録','','- 担当：カタログ本部。制作セット1.4。執筆者以外の点検を統合し、固定原典・日英の主張・引用・結論説明先を照合。','- 範囲：主張と選択した核心証明の記述・適用。全証明の独立再検証、外部証明の再帰検証、専門家査読ではない。','- 別担当の具体的読解は review-01-02.md / review-03-04.md / review-05.md / review-06-07.md、追加編集はreview-supplement.md。','- 台帳の正式名・ページ数は原PDFと再照合。05タイトルのrank-preservingのハイフン、06/07の総ページ45/41、01 normのp.8を精密化した。','- 修正：04のcontinuous最大値計量とsmooth入力計量を区別。Fuj16/PT14の同一参照版のキーを統一。05文献案内の重複句点を除去。','','## 主張と全結論の説明先','']
for m in inv['manuscripts']:
 r=json.loads((Path(m['draftDirectory'])/'citations.json').read_text());g=r['articleGuides']['.'];text.extend([f"### {m['order']:02} {m['title']}",'',f"執筆：{m['worker']}。別担当点検：[{review[m['worker']]}]({review[m['worker']]}). 日英で同じレジストリを使用。",'', '| 原典の結果・ページ | 主張アンカー | 全結論の説明先 |','|---|---|---|'])
 for id in g['mainResults']:
  ci=r['citations'][id];loc='; '.join(x['result']+' · p. '+x['printed'] for x in ci['locations']);cov=[x for x in g['conclusionCoverage'] if x['result']==id];text.append(f"| {loc} | `{g['statements'][id]}` | "+'<br>'.join(f"{x['conclusion']} → `{x['anchor']}`" for x in cov)+' |')
 text.extend(['',f"直接入力・未確認の一次記録：`{m['draftDirectory']}/sources.json`。独立した中間命題の主張欄も引用検査と実レンダラーで検査。",''])
text.extend(['## 本部の範囲判断','','主要結果に対応する核心と、補助・別経路の全命題を区別する。04 Th7.2および07 Prop10.1/Th11.1/Prop12.1は独立出力として追加制作・追加点検した。未詳説の04 Th5.2/Th11.1/Prop14.1、07 Th9.1/Th12.4/§§13–14は本文末尾に番号・役割と未詳説理由を残す。05 §§8–12などの全補助機構も網羅的な証明制作済みとはしない。','','特に、01の構造定理・normを01の非消滅主定理への依存と混同しない。05→06は§5.3の別経路、05と06→07は主定理1.1の二つの直接入力。02の指数は一般の線形化ではなく自然反標準作用である。全rankと不変rank、zero exponentとrank zero、smooth/bounded/weighted/unweighted、通常開のstrict patchと大域Kähler下界を区別した。','','## 検査と限界','','- `citation-check.log`：対象8レジストリ、本文・引用TeX同期。','- `stage1-validation.json`：原稿SHA、生成manifest、16HTMLのリンク／アンカー、既存差分の保存。','- `preview-checks.json`：MathJax、主張・結論アンカー、図数。','- `screen-checks.json` / `DISPLAY_REVIEW.md`：未公開HTMLの実表示と指定見本比較。','- 全リポジトリのテストは37/38成功。1件は未設置public図の存在検査であり、第1段階の禁止範囲のため未解消（npm-test.log）。公開コピーを含む完全check:citationsは第2段階。'])
(out/'CONTENT_REVIEW.md').write_text('\n'.join(text)+'\n')
