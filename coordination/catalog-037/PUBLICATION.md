# カタログ037 公開記録

第3段階（公開・反映確認）完了。ユーザーの「では第3段階に進んでください.」により実施。

- 公開commit：`1b06837b5f2ac47de91ff3a59b580984f0840cf4`。
- GitHub Actions：[38247180185](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38247180185)、build / deploy とも成功。
- 確認完了：2026-10-12T21:16:07.009108+09:00。
- 日本語：https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/037/
- English：https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/037/
- 案内冒頭のPDFカード：日本語35頁・英語41頁、各3章8図。第2段階で画像点検した版と同じSHA-256。

## 公開前検査と反映確認

最新mainに037のみを加えた隔離スナップショットで、テスト39/39（失敗・skipなし）、引用29レジストリ／100ファイル、Astro 99ページ、内部リンク96,869件、全20冊のPDF版・ハッシュ照合が成功。実行ログはstage3/。公開commitの原稿・公開資産・組込みコード188ファイルは検査済みスナップショットと一致（tested-commit.json）。

配信された日英トップ・分野・037案内・2記事の10 HTML、16 SVG＋16 TeX、日英PDF2冊、合計44資産がHTTP 200で検査済み版とSHA-256一致（live-resources.json）。

実公開URLを実CDNのMathJaxで開き、日英・PC1280px／スマートフォン375pxの20画面条件、4操作経路を確認。横はみ出し、数式エラー、画像欠落、JavaScript例外、リクエスト失敗なし。分野→案内→記事→証明、アンカーを保持した言語切替、図拡大／縮小／全体表示、引用先への遷移、TeX取得、カタログへの復帰を確認。証拠はlive-browser.json、screens/、VISUAL_REVIEW.md。

第2段階の全76 PDFページ・全16図・034/Schnell/033 Orbifold Iitakaとの画面比較はSTAGE2_HANDOFF.mdを参照。公開PDFはその検査済み版と一致し、再生成していない。

## 変更範囲と保全

037の原稿・引用・図・日英PDF・点検記録、037のサイト登録／PDF版情報、4つの検査コード差分をcommitした。他カタログの本文・図・PDFを037担当から変更していない。開始時の11文書変更と034休止記録は未commitのまま保持。

作業中に別担当の338公開commit `6ff1d4b61e2b473a0946457d157fb1234080cf9c` がmainへ入ったため、Git状態のガードで旧baseへのstageを止め、新しいmainへ037だけを加えて再検査した。338の共通表示変更はその担当の先行commitに属する。最終公開commitの差分に338のファイルや共通表示部品は含まれない。base-update.json、commit-scope.json、preservation.jsonを参照。

再生成可能なpreview/reference-preview HTMLとPDF個別ページPNGはローカル保持してGit対象外。点検記録・コンタクトシート・比較画面・原典記録・公開資産はGitへ保存。完了記録は別の `[skip ci]` commitで保存し、配信対象は上記公開commit。

## 確認範囲・残作業・再開

主要結果、核心の証明本文、直接入力の記述と適用を照合した読解ガイドであり、全証明の独立再検証や専門家査読ではない。第1段階の留保を維持した。

- 全次元原稿：§§3–6の全局所解析、exponential inequalityの全計算、adjoint vanishing/liftingの全構成、全環論移行は独立再証明していない。
- 四次元原稿：slice charts・character-sensitive jet計数の全構成、Fourier testの全積分計算と数値strictnessは再計算していない。
- 外部入力の証明自体と、その先の依存の再帰的検証は対象外。正確な範囲はSOURCE_REVIEW.md、各sources.json、記事末尾に記録。

公開工程に残作業なし。追加改訂は新しい依頼範囲を定め、AGENTS/PROJECT_PLAN/production、SITE_HQ_HANDOFF.md、最新Git状態を確認して再開する。原稿・図の変更時は必要な引用生成・日英PDF生成・公開前検査を行う。
