# カタログ案内の作業記録

- 担当：カタログ本部。制作セット1.4＋補足。2026-10-11。
- 状態：日英案内を作成し、担当Bの独立内容点検と本部の図面・引用・表示点検を反映。第1段階引渡し。
- 全3記事の初稿受領後に主要接続を整理。分類カードは省略し、公式順の共通4列表、総括図1組、接続表を採用。理由はconnections.json。
- 成果物：日英article、presentation、connections、sources、author-keyのcitations、sync-guide.mjs、日英TeX/SVGと原本・生成記録。
- 内容編集：Bレビューの有限指数条件、canonical unipotent Lie段階の同定、rational completionの有限次元性を反映。図にも滑らかな連結特殊準射影多様体と有限次元複素線形表現を明示。
- 図面編集：引用ラベルと矢印の間に専用余白を確保し、両入力から下の結論への矢印を日英画像で再確認。
- 再生成：node drafts/catalog-057/overview/sync-guide.mjs → node scripts/sync-citations.mjs --registry drafts/catalog-057/overview/citations.json → python3 drafts/catalog-057/overview/diagrams/render.py。Python・Node・XeLaTeX・dvisvgmが必要。公開コピーは行わない。
- 検査：共通記録の文献案内・引用同期、9生成ファイルhash、日英1280px／375pxでMathJax描画数>0、数式エラー0、ページ横はみ出し0。FORMAT_REVIEW.md・STAGE1_VALIDATION.json参照。
- 限界：接続はA→Cの明示的前提／直接入力とA→Bの背景を照合。未調査の全包含関係を「依存なし」と確定していない。各論文の未確認は個別記事とsourcesを参照。
- 次段階：共通表の本番登録、日英PDF各4章、公開用図コピー、実サイトの操作点検。冒頭PDF予定注記を生成後の実リンクに置換。

## 第2段階のサイト本部受領（2026-10-12）

本チャットがサイト組込み・日英PDF・公開前検査を完了。日本語47頁／英語52頁、各4章・16図。公開用SVG／TeXは生成物とSHA-256一致。本文・図の数学的内容と原典の確認範囲は維持。案内ではPDF待ち注記と重複する制作・AI注記を整理し、共通PDF導線と共通AI注意書きを使用した。テスト・引用・build・リンク・紙面点検・見本比較の記録はcoordination/catalog-057/STAGE2_REPORT.md。初稿とは別の組込み・表示編集・検査として、開始・終了は同報告へ記録。commit・push・公開確認は未実施。

## 第3段階の公開確認（2026-10-12）

本チャットがサイト本部としてcommit `0cc452a` をmainへpush。Actions 38151381273のbuild／deploy成功、公開78リソースのhash一致、日英24表示条件・6操作経路を確認。記事本文・図・PDF・数学的な確認範囲は第2段階から変更していない。公開URLと証拠はcoordination/catalog-057/PUBLICATION.md。
