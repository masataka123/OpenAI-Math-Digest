from pathlib import Path
import json, datetime

p = Path('coordination/catalog-067')
out = p / 'stage3'
sha = (out / 'publication-commit.txt').read_text().strip()
jobs = json.loads((out / 'actions-jobs.json').read_text())['jobs']
assert len(jobs) == 2 and all(j['conclusion'] == 'success' for j in jobs)
run = next(r for r in json.loads((out / 'actions-runs.json').read_text())['workflow_runs'] if r['head_sha'] == sha)
assert run['conclusion'] == 'success'
live = json.loads((out / 'live-resources.json').read_text())['resources']
assert len(live) == 34 and all(r['matchesRelease'] and r['status'] == 200 for r in live)
browser = json.loads((out / 'live-browser.json').read_text())
assert len(browser['pages']) == 16 and len(browser['interactions']) == 2
assert browser['errors'] == []
assert (out / 'VISUAL_REVIEW.md').exists()
now = datetime.datetime.now().astimezone().isoformat()
result = {'checkedAt': now, 'status': 'publication-verified', 'publicationCommit': sha,
          'branch': 'main', 'actions': run['html_url'], 'resourcesVerified': 34,
          'browserViewports': 16, 'interactionPaths': 2,
          'paperVersionsUnchangedSinceStage2': True,
          'mathematicalOpenItems': '../CONTENT_REVIEW.md'}
(out / 'completion.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
(p / 'PUBLICATION.md').write_text(f'''# カタログ067 公開確認

**公開確認済み。** 確認日時：{now}。ユーザーの「第3段階をお願いします」に基づき、本部がサイト公開と反映確認を実施した。

- 公開commit：`{sha}`、ブランチ`main`。
- [GitHub Actions]({run['html_url']})：build / deployとも成功。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/067/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/067/)
- [日本語PDF・20頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-067-ja.pdf) ／ [English PDF・23頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-067-en.pdf)

正式名称は The Campana–Peternell conjecture in dimension six。公式順の案内と単論文の記事を日英で公開し、各言語6図のSVGとTeXを配置した。冊子は各2章6図。数学的本文・図・冊子は第2段階で点検した版と同じで、追加の内容編集・PDF再生成は行っていない。

## 検査

公開前の固定候補で39テスト、引用42記録・150ファイル、125ページbuild、143927内部参照、全28PDFの整合性検査が成功。内部リンク検査は固定候補に限りファイル読込みをキャッシュして、既存check-links.mjsを実行した。CIの通常コマンドも成功した。

公開後は日英トップ・分野・案内・記事の8HTML、12SVG、12TeX、2PDFの計34リソースでHTTP 200と検査済み候補とのSHA-256一致を確認した。日英1280/375pxの16画面では実CDNのMathJaxを使い、ページ横はみ出し・数式エラー・破損画像・JavaScriptエラーなし。2操作経路で分野→案内→記事、日英切替と証明アンカー保持、TeX取得、図の拡大・縮小・全体表示、図中引用の原典popup URL、案内の該当行へ戻る操作を確認した。

証拠：stage3/tests.log、citations.log、build.log、links.log、pdf-check.log、actions-runs.json、actions-jobs.json、live-resources.json、live-browser.json、VISUAL_REVIEW.md。公開画面はstage3/screens/にローカル保存。全43頁・全12図の紙面点検は第2段階のstage2/pdf-review/とstage2/VISUAL_REVIEW.mdに記録し、今回は公開PDFが同じハッシュであることを確認した。

## 変更範囲と保持

046の公開commit e885fddを起点に067の141ファイルをcommitした。共有4ファイル（site、PDF版情報、分野一覧を検査する2テスト）は067追加分だけ。制作ルール類11ファイルの未コミット変更と、他カタログの作業資料を保持した。ブランチの切替や他担当の変更取消しは行っていない。stage3/commit-scope.json、preservation.json参照。

原典PDF・抽出全文・作業HTML・大きな画面／紙面画像はローカル検証資料として保持し、公開commitに含めていない。公開用の原稿・生成元・引用・SVG/TeX・日英冊子はcommit済み。公開確認の追記は記録専用commitとして保存する。

## 数学的な確認限界

[CONTENT_REVIEW.md](CONTENT_REVIEW.md)の確認範囲を維持。Griffithsの相対Hodge–de Rham同定の原典、GAGA等の標準入力の原証明、Alekseevskii–Perelomovの1986年原典は未照合。Fischer–Grauertと正KE計量は再掲で確認した。036・052等との追加の包含・一般化関係は未調査。内容点検は単独の自己点検であり、全証明の独立検証・専門家査読ではない。
''')
for name in ['README.md', 'SITE_HQ_HANDOFF.md', 'STAGE2_HANDOFF.md']:
    f = p / name
    s = f.read_text()
    marker = '> 第3段階更新（2026-10-14）'
    if marker not in s:
        i = s.index('\n')
        s = s[:i+1] + '\n' + marker + '：日英サイト・図・PDFの公開確認まで完了。最新状態は [PUBLICATION.md](PUBLICATION.md)。以下は各段階終了時の履歴。\n' + s[i+1:]
        f.write_text(s)
f = p / 'RELEASE_CHECKLIST.md'
s = f.read_text().replace('本部兼任・第2段階完了', '本部兼任・第3段階完了')
s = s.replace('現在のユーザー依頼範囲：第2段階まで。組込み・日英PDF・公開前検査を実施し停止。commit・push・公開は禁止。', '現在のユーザー依頼範囲：第3段階。公開と反映確認を完了。')
s = s.replace('状態：公開準備完了・未公開。詳細はSTAGE2_HANDOFF.md。', '状態：公開確認済み。詳細はPUBLICATION.md。')
s = s.replace('現在の段階：第2（組込み・日英PDF・公開前検査）完了', '現在の段階：第3（公開・反映確認）完了')
s = s.replace('運用：第2段階の成果物と点検結果を報告して停止', '運用：公開結果と確認範囲を記録して報告')
for text in ['第3段階：現在の公開指示を確認し、対象変更の公開と反映確認を記録した。', '公開する差分・最新Git状態を確認し、通常のcommit・pushで反映。他担当の成果物を消していない。', 'GitHub Actionsのbuild/deploy成功を確認。', '公開URLで日英カタログ・記事・画像・PDFが今回の版に更新されたことを確認。', '公開URL・commit・確認結果・残る数学的未確認を報告。']:
    s = s.replace('- [ ] ' + text, '- [x] ' + text)
s = s.replace('| 公開 | 現ユーザー指示では担当なし | 依頼範囲外 | commit/push/deployを行わない |', '| 公開 | 本部兼サイト担当 | 公開確認済み | PUBLICATION.md、stage3/ |')
s += f'\n## 第3段階の確認記録\n\n担当：本部、確認日時{now}。公開commit `{sha}`。Actions build/deploy成功、公開34リソースの同一版確認、16画面と2操作経路の検査を完了。PUBLICATION.md、stage3/の結果を参照。上記の第1・第2段階時点の未公開記述は履歴である。数学的未確認の範囲は変更なし。\n'
f.write_text(s)
f = p / 'inventory.json'
d = json.loads(f.read_text()); d['stage3'] = result
d['manuscripts'][0]['articleStatus'] = 'published-self-reviewed'
f.write_text(json.dumps(d, ensure_ascii=False, indent=2) + '\n')
f = Path('drafts/catalog-067/campana-peternell-six/status.md')
f.write_text(f.read_text() + f'\n## 第3段階（公開記録）\n\n{now}、日英サイト・図・PDFの公開と反映確認を完了。公開commit `{sha}`、main。本文・図・PDFの追加編集なし。上記第1・第2段階の未公開記述は履歴。coordination/catalog-067/PUBLICATION.md参照。\n')
print(json.dumps(result, ensure_ascii=False))
