# カタログ087 公開前検査

2026-10-15、ユーザーの「では第3段階をお願いします」によりcommit・push・公開反映確認を実行する。

公開基点：main / origin/main `6a4ce9d98f2815b220ef144a7ddd5100ba1007be`。
公開予定の状態：既公開HEADに087の原稿・32図とTeX・日英PDF・根拠記録・087登録だけを追加。共有作業先の285/287等と制作仕様の未コミット変更は含めない。

- 第1段階のAstra原稿・別担当点検を維持し、数学的内容は変更しない。
- 39 tests、60 citation registries / 216 files、169ページのbuild、206,881内部参照を確認。
- 全40冊のPDF内容・ファイルhash一致。087は53/56ページ、各4章16図。
- 087の案内と3記事の日英全8ページのmain HTMLは第2段階で画像確認済みの出力と完全一致。
- 作業用公開予定ツリー `/private/tmp/math-digest-087-release`。他カタログを削除して検査を通したものではなく、既公開のGitツリーを出発点として087だけを追加したもの。
- `release-files.json`と`registration.patch`に公開差分を限定し、shared worktreeやbranchは切り替えない。根拠用原典PDF・全スクリーンショットはローカルcoordinationに保持。公開に必要な本文・引用記録・図原本・生成物・チェック結果をcommitする。

この段階ではActions・公開URL確認はまだ実行前。結果はPUBLICATION.mdに記録する。数学的な未確認範囲は各記事とCONTENT_REVIEW.mdに保持する。

commit直前に並行公開287（cfe584d）がmainへ追加されたため、公開予定ツリーへその確定差分を取り込んで全検査を更新した。287は既公開基点として保持し、今回の087 commit差分に再収録しない。

更新後の公開前ゲート：39 tests、62 citation registries / 222 files、175ページ、211,472内部参照、全42冊のPDF照合成功。087原稿・図・PDFの変更なし。
