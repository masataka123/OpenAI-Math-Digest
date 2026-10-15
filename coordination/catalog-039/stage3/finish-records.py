from pathlib import Path
import json,datetime,subprocess
out=Path('coordination/catalog-039/stage3');sha=(out/'publication-commit.txt').read_text().strip()
runs=json.loads((out/'actions-runs.json').read_text())['workflow_runs'];run=next(r for r in runs if r['head_sha']==sha);assert run['conclusion']=='success'
jobs=json.loads((out/'actions-jobs.json').read_text())['jobs'];assert all(j['conclusion']=='success' for j in jobs)
resources=json.loads((out/'live-resources.json').read_text())['resources'];assert len(resources)==68 and all(r['matchesRelease'] and r['status']==200 for r in resources)
browser=json.loads((out/'live-browser.json').read_text());assert len(browser['pages'])==28 and len(browser['interactions'])==8 and not browser['errors'] and not browser['failedRequests']
now=datetime.datetime.now().astimezone().isoformat();pdfs=json.loads(Path('src/data/pdf-editions.json').read_text())['039']
result={'finishedAt':now,'stage':3,'state':'published and verified','branch':'main','publicationCommit':sha,'actionsRunUrl':run['html_url'],'actionsConclusion':run['conclusion'],'resources':len(resources),'allResourceHashesMatch':True,'browserViewports':28,'browserInteractionPaths':8,'pdfs':pdfs,'mathematicalLimitation':'Chow49 original theorem statement, number and exact page remain unchecked; see CONTENT_REVIEW.md.'}
(out/'completion.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
text=f'''# カタログ039 公開・反映確認

本部root。完了：{now}。ユーザーの第3段階依頼に基づき、mainでcommit・pushと公開反映確認を完了した。

- 公開commit：`{sha}`（252ファイル）。変更範囲は`stage3/commit-scope.json`。
- [GitHub Actions]({run['html_url']})：build・deployとも成功。
- [日本語案内](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/039/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/039/)。公式順4記事を日英で公開。
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-039-ja.pdf)：52ページ。[English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-039-en.pdf)：57ページ。2026-10-15版、各5章13図。

## 検査

公開するファイルだけをHEADへ重ねた隔離ツリーで39テスト、引用47群170ファイル、135ページbuild、159,867内部参照、全30PDFの整合性を確認した。リンク検査は既存検査のHTML読み込みをキャッシュした同じ判定を使用。元の検査は第2段階とActionsで実行済み。ログの保存時に行末空白だけを正規化した。

公開URLの68リソース（案内2＋記事8＋トップ・分野4＋SVG26＋TeX26＋PDF2）はすべてHTTP200、候補buildとSHA-256一致。日英の28表示条件（1280px／375px）と8導線操作を実ブラウザーで確認。実際のMathJax CDNを利用し、数式エラー・画像欠落・ページ横はみ出し・JavaScript例外・失敗リクエストはなし。言語切替のアンカー、図拡大、TeX取得、記事から一覧へ戻る操作を確認。図中引用はポップアップ先URLの検査であり、応答を置き換えて確認している。外部原稿の内容は第1段階の範囲を引き継ぐ。

PDF SHA-256：
- ja：`{pdfs['ja']['sha256']}`
- en：`{pdfs['en']['sha256']}`

第2段階で目視済みの全109ページと同一のPDFが公開された。画面・図の比較と確認範囲はFORMAT_REVIEW.md、STAGE2_REPORT.md、stage3/VISUAL_REVIEW.md。数値検査だけで紙面を目視済みと扱っていない。

## 保存・保留

作業先は`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチmain。039原稿／図／引用／台帳／確認記録／日英PDFと、共有4ファイルの039登録差分だけを公開した。他担当の未コミット変更は保持し、作業開始時の追跡済み4,911ファイルは内容不変（stage3/preservation.json）。原典ダウンロード・画面画像・中間生成物はローカルに保存している。

数学的保留：Chow49原著の定理記述・番号・正確な該当ページの照合。全証明の独立検証・専門家査読・形式証明の完了は主張しない。詳細はCONTENT_REVIEW.md。

第3段階は完了。追補する場合は本記録・CONTENT_REVIEW.mdを読み、039の該当原稿／引用記録を更新して必要な図・日英PDFと公開検査を再実行する。今回の公開確認記録のみの保存commitには`[skip ci]`を付け、公開内容は上記commitのままとする。
'''
Path('coordination/catalog-039/PUBLICATION.md').write_text(text)
p=Path('coordination/catalog-039/RELEASE_CHECKLIST.md');s=p.read_text().replace('第3段階の公開作業中（数学的保留を保持）。','公開確認済み（第3段階完了、数学的保留を保持）。').replace('第1・第2段階完了。第3段階を実施中。','第1・第2・第3段階完了。').replace('| 公開・反映確認 | 次段階本部 | 未依頼・未実施 | STAGE3_HANDOFF.md |','| 公開・反映確認 | 本部root | 公開確認済み | PUBLICATION.md / stage3/completion.json |')
lines=s.splitlines();active=False
for i,line in enumerate(lines):
 if line.startswith('## 公開（'):active=True
 elif line.startswith('## '):active=False
 if line.startswith('- [ ] 第3段階') or active and line.startswith('- [ ]'):
  lines[i]=line.replace('- [ ]','- [x]',1)+'〔本部、2026-10-15。PUBLICATION.md／stage3/completion.json〕'
s='\n'.join(lines)+'\n\n## 第3段階完了\n\n'+now+'：通常のcommit・push、Actions成功、公開68リソースの同一性、28表示条件・8操作を確認。上の第1・第2段階の未実施記述は当時の履歴。現状はPUBLICATION.mdを参照。数学的保留は保持。\n';p.write_text(s)
for name in ['README.md','STAGE3_HANDOFF.md','SITE_HQ_HANDOFF.md']:
 p=Path('coordination/catalog-039')/name;p.write_text(p.read_text()+'\n## 第3段階完了（2026-10-15）\n\n公開・反映確認を完了。上記の停止／公開待ちは当時の履歴。[公開記録](PUBLICATION.md)、[最終結果](stage3/completion.json)を参照。Chow49原著照合の保留を保持。\n')
print(json.dumps(result,ensure_ascii=False))
