from pathlib import Path
import json,datetime
root=Path('coordination/catalog-052');r=root/'stage3'
sha=(r/'publication-commit.txt').read_text().strip()
runs=json.loads((r/'actions-runs.json').read_text())['workflow_runs'];run=next(x for x in runs if x['head_sha']==sha and x['conclusion']=='success')
resources=json.loads((r/'live-resources.json').read_text())['resources'];assert len(resources)==46 and all(x['matchesRelease'] and x['status']==200 for x in resources)
browser=json.loads((r/'live-browser.json').read_text());assert len(browser['pages'])==20 and len(browser['interactions'])==4 and not browser['errors']
now=datetime.datetime.now().astimezone().isoformat()
text=f'''# カタログ052 公開確認

- 状態：**公開確認済み**。確認日時：{now}。
- ユーザーの「じゃあ公開してください」に基づき第3段階を実施。
- 公開commit：`{sha}`、ブランチmain。
- [GitHub Actions]({run['html_url']})のbuild/deploy成功。

## 公開成果物

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/052/)
- [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/052/)
- [日本語PDF・28ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-052-ja.pdf)
- [English PDF・32 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-052-en.pdf)
- 日英2記事、案内図1種＋記事図7種。両冊子とも案内＋公式順2記事の3章、8図、247数式。

## 公開前後の検査

052だけをHEADへ加えた固定候補を用意し、39テスト・引用・105ページbuild・106,307内部参照・22冊PDF照合を確認した。内部参照検査は同一check-links.mjsのファイル読取りをキャッシュして実行し、検査内容を変更していない。CIでも通常コマンドがすべて成功。

公開後、6 HTML・16 SVG・図の16 TeX＋共通引用定義6 TeX・2 PDFの計46リソースがHTTP 200かつ検査済み候補とSHA-256一致。実ブラウザーでは日英・1280/375px、トップ・分野・案内・2記事の20条件を確認。実際のMathJax CDNを使い、横はみ出し・数式エラー・破損画像・JSエラーなし。4操作経路で分野→案内→記事、日英切替とアンカー、図の拡縮・全体表示・原典popup、TeX取得、一覧へ戻るを確認。

証拠：stage3/tests.log、citations.log、build.log、links.log、pdf-check.log、actions-runs.json、actions-jobs.json、live-resources.json、live-browser.json、screens/。PDF紙面全60ページの点検はstage2/pdf-review/、数式・主張・図は同じ版を公開。

## 変更の範囲と保持

公開commitは052の原稿・引用・図・PDF・登録と必要な記録183ファイル。共通4ファイルは052の差分だけをindexへ取り込み、036の登録・PDF metadata・テスト期待値の差分は作業ツリーに保持した。制作ルール類の既存変更、034停止記録も公開対象外として保持。ブランチ切替や共有原稿の巻戻しはしていない。stage3/commit-scope.json参照。

原典PDF・作業用HTML・紙面／画面の大きな確認画像の一部はローカル検証資料として保持し、今回の公開commitには含めていない。Web公開に必要な全原稿・生成元・引用・SVG/TeX・2冊PDFはcommit済み。

## 数学的な確認限界

KM98 Theorem 3.3の外部原典本文・正確な掲載ページ、Universal Appendices A–Dの別証明、外部結果の全証明等は未確認として日英本文・案内・冊子に維持。Campanaの射影性はHor08の記述で確認し原証明は未読。今回の公開確認は全証明の正しさの認定ではない。
'''
(root/'PUBLICATION.md').write_text(text)
for name in ['README.md','SITE_HQ_HANDOFF.md','STAGE2_HANDOFF.md']:
 p=root/name;s=p.read_text();line='\n\n> 現在は第3段階まで完了し、公開確認済み。公開URL・commit・検査結果は [PUBLICATION.md](PUBLICATION.md)。\n';s=s.replace('\n',line,1);p.write_text(s)
p=root/'RELEASE_CHECKLIST.md';s=p.read_text().replace('状態：公開準備完了','状態：公開確認済み').replace('現在のユーザー依頼範囲：第2段階まで。組込み・日英PDF・公開前検査。commit/push・公開は対象外。','現在のユーザー依頼範囲：第3段階の公開まで。ユーザーの公開指示を受領。').replace('現在の段階：第2（組込み・PDF・公開前検査）完了・停止','現在の段階：第3（公開・反映確認）完了')
section='';lines=[]
for line in s.splitlines():
 if line.startswith('## '):section=line
 if line.startswith('- [ ] 第3段階：') or (section.startswith('## 公開（') and line.startswith('- [ ]')):line=line.replace('- [ ]','- [x]',1)
 lines.append(line)
s='\n'.join(lines)+'\n\n## 第3段階の証拠\n\n'+f'{now}、サイト本部。公開commit {sha}。Actions build/deploy成功、46公開リソースのhash一致、20画面条件・4操作導線を確認。詳細はPUBLICATION.md。上記の第2段階時点の「公開未実施」は履歴として保持。\n'
s=s.replace('| 第3段階の公開 | サイト本部 | 未依頼・未実施 | STAGE2_HANDOFF.mdの再開手順に従う |','| 第3段階の公開 | サイト本部 | 公開確認済み | PUBLICATION.md |')
p.write_text(s)
p=root/'inventory.json';d=json.loads(p.read_text())
for m in d['manuscripts']:m['articleStatus']='公開確認済み（日英サイト・PDF）'
p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
for p in Path('drafts/catalog-052').glob('*/status.md'):
 p.write_text(p.read_text()+'\n## 第3段階の公開確認\n\n'+f'{now}、本部。commit {sha}をmainへ公開し、Actions・公開ページ・図・PDFの反映を確認。数学的な未確認事項は保持。coordination/catalog-052/PUBLICATION.md参照。\n')
(r/'completion.json').write_text(json.dumps({'status':'published-and-verified','checkedAt':now,'publicationCommit':sha,'actionsUrl':run['html_url'],'publicResourceMatches':46,'browserViewports':20,'interactiveRoutes':4},indent=2)+'\n')
print('Publication records updated.')
