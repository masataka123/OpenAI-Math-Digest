# 作業記録

- カタログ／paper ID：287／free-group-factor-isomorphism
- 担当：astra_hq（数学制作本部・執筆・自己点検兼任）、明示指定モデル `gpt-6-astra`。
- 制作セット：1.4。
- 初稿開始：2026-10-15 21:24:48 JST。
- 初稿締切：2026-10-15 22:24:48 JST（最大60分、下限なし）。
- 初稿終了：2026-10-15T21:43:25+09:00／経過18.63分（60分以内）。
- 状態：第1段階の初稿引渡し。日英本文・引用・4図×日英TeX/SVG・出典・内容自己点検・案内を完了。
- 数学根拠：公式23ページ原稿§§2–7から新規制作。旧Sol原稿・図・解釈・点検は根拠に使用しない。
- 再利用：共通引用処理、Schnell由来のMIT表示様式と図プリアンブル。render.pyは制作指定の共通技術見本から対象パス・registryを変更し、publicコピーを削除。
- 成果物：article.ja.md、article.en.md、sources.json、citations.json、diagrams/*.tikz、*.ja/en.tex、*.ja/en.svg、citation-build.json、external/の照合原典と抽出テキスト。
- 内容点検：coordination/catalog-287/CONTENT_REVIEW.md。独立査読ではなく自己点検。

## 再生成

```sh
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --registry drafts/catalog-287/free-group-factor-isomorphism/citations.json
python3 drafts/catalog-287/free-group-factor-isomorphism/diagrams/render.py
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-citations.mjs --check --text-only --catalog 287
```

XeLaTeX、xeCJK/HaranoAji、TikZ、dvisvgmを使用。render.pyは生成された共通引用を自己完結TeXに組み込み、XDVからSVGを生成。コンパイルエラー・Overfull・Missing characterを失敗扱いにし、全原本と生成物のSHA-256をcitation-build.jsonに保存。publicコピーと冊子PDF生成はしない。

## 照合範囲と保留

- 主結果4件・全結論7項目の対応をcitations.jsonへ記録。
- §§2–5では形式trace恒等式→実解解析性→関係式降下→normal全単射、prefixとCatalan極限→切断逆作用素、旧completionの近似→適応予算→分布と生成性の別々の極限を照合。
- §6では増幅正規化・√2・3→5から2→3、∞を含む二分法、基本群。§7では半円n組と群環2n組を分離し、代数的生成の仮定を移送前に照合。
- 外部7入力：Dyk94、GP25、V90、V01、BEHY23、MS05、CS03の結果記述・使用箇所を読解。各版・URL・ハッシュ・誌面/PDF対応はsources.json。
- 保留：Rădulescu原典Corollary 4.7の直接読解（GP25による明示再掲で全範囲は確認済み）、BEHY23誌面版のページ対応（著者preprint v2 §5で入力は確認済み）、外部結果の証明全体・その依存先の再帰的検証。専門家査読・形式検証なし。

## 検査と編集

- 共通引用text-only検査：記事とoverviewの2 registry、6生成ファイルが成功。
- 日英4主結果、4図、8 H2、引用IDの対応を窓口が検査。主要数式・仮定・未確認範囲の内容対応は執筆者が自己点検。
- 表示指摘を反映：英語入力節をExternal inputsへ変更してdependencies anchorを日本語と一致、BEHY文献題のC∗でMarkdown強調との衝突を回避。
- entropy図：二種類の生成組を直列依存に見せないよう、θ_nから分岐して結論へ合流する矢印に修正。
- 原典画像：Dykema誌面128/PDF7の増幅式、Voiculescu誌面49/PDF3のRemarks 1.10–1.11を目視。
- 機械検査の成功は数学的正しさの認定ではない。公開コピー、通常check:citationsのpublic照合、日英冊子PDFと実サイト検査は次段階。

## 最終表示・日英照合

- 執筆者が窓口の最終スクリーンショット figure-1..4.{ja,en}.1280.png 全8枚を目視。箱・矢印・説明・引用の重なりと欠けなし。entropy図の独立分岐と合流を確認。証拠：coordination/catalog-287/screens/。
- 窓口の第1段階検査：日英PC/375pxでviewport幅一致、MathJaxエラー0、missing anchor0。引用22マーカーは同一順、主張4件・結論7項目のアンカー存在、図24配布ファイルmanifest一致。
- display式17個は末尾句読点を除き日英一致。inline数の差はn/r/∞やA_g^(∞)、n=2,3、n→∞を英文で語にした表記差であり、仮定・結論の欠落でないと自己点検した。
- 第2段階で実ルート・public図コピー・日英冊子PDF・全サイト検査を実施する。今回はcommit/push・公開なし。
