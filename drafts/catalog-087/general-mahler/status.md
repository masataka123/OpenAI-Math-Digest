# 作業記録 — General Mahler

- カタログ／paper ID／担当：087／general-mahler／明示指定 `gpt-6-astra`（記事担当）
- 制作セット版：1.4
- 初稿開始（JST）：2026-10-15 21:21:42
- 初稿締切（開始＋60分）：2026-10-15 22:21:42
- 初稿終了（JST）：2026-10-15 21:37:43
- 経過：16分01秒。下限なし、上限60分以内で区切った。
- 状態：第1段階・初稿引渡し。独立交差点検は後続、本部内容受領待ち。
- 成果物：article.ja.md / article.en.md、sources.json、citations.json（articleGuides含む）、catalog-changes.md、4種×日英のTikZ/自己完結TeX/SVG、SHA-256生成manifest、visual-check内の8 PNGとchecks.json。
- 原稿：OpenAI, *The Mahler Conjecture for General Convex Bodies*, September 22, 2026、72ページ。固定commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、PDFハッシュはsources.jsonで照合済み。
- モデル／既存成果物：公式原典から新規読解・執筆。既存Sol稿・解釈・図・点検結果を根拠に使用していない。共通生成コードと表示基盤のみ利用。

## 再生成

```sh
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --registry drafts/catalog-087/general-mahler/citations.json
python3 drafts/catalog-087/general-mahler/diagrams/render.py
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-087/general-mahler/citations.json
```

XeLaTeX、xeCJK、Harano Aji、TikZ、dvisvgmを使用。render.pyは担当フォルダのみへ出力しpublicへコピーしない。組版はXDV経由で、冊子PDFは生成していない。make-records.pyは今回の台帳初期生成用で、後続の手修正を上書きするため通常の図再生成では実行しない。

## 読解・照合

- Theorem1.1（全次元・全凸体・Santaló中心・等号iff単体）、Corollary1.2（一般凸関数・無中心条件・e^n・無限積分許容）、Corollary8.1（essential continuity・entropy/transport規約）を原典照合。
- §§2–3の中心・正双対符号・階乗・bias・同時正規化、§4 entropyの主要接続、§5 covariance/Hermite・threshold欠損・分解、§6の次数評価・終端評価、§7のspectral平均・行列相殺・等号剛性、§8の二系を読解。
- Appendix A.2の有理証明書構成、PropositionB.1と区間分割の方針を読解。全証明書の再実行や全補間・尾部評価は未確認として明記。
- 外部7原典を取得し、記述と本文使用箇所を照合。FM08 print1434–1435/PDF6–7、Remark2 print1437/PDF9。Nof17 Theorem2.11 print6/PDF7。各版・著者・ハッシュ・ページ対応をsources.jsonへ記録。
- 外部結果の証明全体とその先の再帰的調査は行っていない。

## 自己点検・表示

- 担当registryのcitation生成・`--check --text-only`：合格。
- articleGuidesの文献一覧・3主要結果・3証明対象・全結論への説明先・読書案内：実装済み。
- 日英の引用順、証明対象、display mathの完全一致：合格。図8枚SVG XML、生成manifest全SHA一致：合格。
- TeX初回で日本語を数式モード内に直接入れた欠落を検出し、原本を修正して全再生成。最終はMissing character/Overfull boxなし。
- 全8図PNGを目視：矢印の専用余白、箱・引用・数式の欠落／重なりなし。証拠 `visual-check/`。
- 本部の隔離共通rendererプレビュー：2026-10-15 21:37頃報告で日英1280/375pxの横はみ出し0、mathError0、hashリンク切れ0、全conclusion anchors実在、共通見本比較済み。詳細証拠は本部 `coordination/catalog-087/`。
- 一つの主定理証明節に2枚の図があり、共通rendererの自動stepアンカーに頼らず `general-bound` / `general-equality` を日英共通で明示。
- 本部全体テスト・独立交差点検は記事担当の自己点検と区別する。

## 未確認／次段階

- Appendix A/Bの全有理証明書再実行、全解析補間・尾部評価、§§4–6の全可積分性・非可換核評価の独立再計算は未完了。定数と等号の核心入力を未検証のまま「証明済み」と認定していない。
- 関数版は鋭い達成例まで。全等号例の分類は主張しない。
- 独立交差点検と本部内容受領を待つ。現稿の数学的正しさの認定・専門家査読・形式検証は行っていない。
- 第2段階の公開資産コピー、サイト組込み、日英冊子PDF、全公開前検査は未実施。第3段階のcommit/push・公開も未実施。
- `check:citations`の通常公開資産比較はStage2対象。Stage1では対象限定text-only＋manifest別照合を実施した。

## 後続編集

初稿終了後の交差点検への対応はここへ時刻・担当・範囲を別途追記する。

- 2026-10-15 21:44–21:45 JST、gpt-6-astra：本部指摘のguideRole末尾句点と生成側句点の重複をregistryで除去。本文・引用TeXを同期し、8図とmanifestを再生成。対象限定text-only検査合格、数学内容の変更なし。

- 2026-10-15 21:47–21:49 JST、gpt-6-astra：交差点検指摘によりCEK15 Lemma4とProp7証明(14)–(15)の原本を読んで、Cor8.1の有限一次モーメント・有限entropyの説明を日英§4へ補足。原稿§8.2の明示引用でない編集補足と区別。sources/registry/guide外部文献/transport図を更新し全図・manifest再生成、text-only検査合格。coverageのproof-3-step-1で有限性も説明。全外部証明の独立検証は未実施。修正後の別担当再照合を依頼。

- 2026-10-15 21:50 JST：別担当symmetric（gpt-6-astra）が修正本文日英・transport原本を再照合しG1解決を確認。§5入力表にも編集補足行を追加。変更したtransport日英PNGを目視し欠落・重なりなし。対象限定citation再検査合格。

## 本部最終受領（2026-10-15）
別Astraの交差点検と修正後確認を受領し、第1段階の内容編集を終了。CONTENT_REVIEW.md・対応reviews記録参照。指定見本と日英PC/375pxの隔離原稿表示を比較済み、数式エラー・ページ横はみ出し・ページ内リンク切れなし。初稿引渡し時の待ち事項は上記時点の履歴であり、現時点の残作業はサイト組込み・publicコピー・日英冊子PDF・統合検査・公開。全証明検証に関する留保は保持。
