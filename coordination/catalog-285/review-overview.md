# カタログ285 全体案内の別担当照合

- 担当：gpt-6-astra（injectivity執筆担当、overview作者とは別担当）。
- 開始：2026-10-15 21:52 JST頃。一次照合終了：21:54 JST頃。記事初稿とは別工程。
- 対象：drafts/catalog-285/overviewの日英本文、presentation、connections、sources、citations、status。
- 根拠：固定commit 1581d4cbdd69a0faf34b2089614fe2a814316a6aの公式CONTENTS.md、overview.txt、および3原稿本文。既存Solの内容を根拠にしていない。
- 状態：照合完了。R1・R2は更新を再確認し解消。

## 確認結果

1. 公式順・分野：CONTENTS.mdの285（7100–7127付近）とoverviewのOperator algebras冒頭を直接読み、injectivity→projection→irrational traceの順、分野Operator algebras、カタログ名を確認。presentationの3行・引用キーa/b/c・原稿85/76/23頁がinventoryと一致。
2. injectivity：Theorem 1.1 p.1、Section 1.2 p.2、Section 9.2 pp.82–83と比較。有限生成torsion-free群、compact support付きK-homology、無限位数の核、有理単射性の失敗を正しく紹介する。Bott像の被約消滅とmaximal側の同じ類の非消滅を区別し、古典的Novikov反例とはしていない。
3. projection：Theorem 1.1 p.2、Section 11 p.73を直接読んだ。行列射影p0を持つΓ_projと自由積G_projを区別し、scalar射影の0<τ<1/2を保持。Section 11のtrivial-coefficient assembly像外はΓ_projの行列射影の結論として正しい。overviewはここから有理化後の像外を誤って導いていない。
4. irrational trace：Theorems 1.1–1.2 p.2、Proposition 6.1 pp.21–22、最終証明p.22と比較。proper-action domain、有限生成、torsion-free非仮定、実際の射影、無理trace、integralおよびrationalized非全射性を正しく区別する。
5. 日英：同じ2つのassembly写像、群の仮定、trace比較、全体の節構成を保持。公式表のclaim/roleも対応。
6. 全結論：overviewは個別記事の定理を全文再掲せず、読む対象・主結論・役割を要約している。公式カタログが掲げる有理単射失敗、射影予想反例、全射失敗の3結論は欠落していない。細部のトーラス検出やscalar圧縮は個別記事への入口で説明する。
7. 未確認の扱い：全証明独立検証ではないことと各記事末尾の未確認範囲への案内があり、未検証を検証済みとはしない。ただし既知の方法関係の脱落R1は修正が必要。
8. 第1段階：日英冊子PDFは未生成コメントに留め、存在しないリンクを作らず、実画面比較・組込み・公開の完了を主張していない。第2段階のPDF導線挿入は引継ぎ事項。

## R1 — 確認済み方法参照の脱落

初版はconnections=[]で、本文も別原稿の直接入力なしとだけ説明している。injectivity原典p.7はprojection[32] Sections 4 and 6のpadded-stream/recovery schemeをadapt、p.64は同Section 7.6のcone-chain/prime-order obstruction methodをfollowsと明記し、今回のexact-chain interfaceを再証明する。主定理の直接適用ではないが、確認済みの背景・方法関係である。projection→injectivityの方法参照を日英本文と接続記録へ追加し、直接定理依存と区別するよう作者・本部へ通知した。

## R2 — 引用根拠のcheckedLocations

初版sources.jsonのexternalSources3件にcheckedLocationsがない。引用レジストリには頁があるが、CITATIONSに従い実際に照合した誌面/PDF一致を出典根拠へ記録するよう作者へ通知した。

## 総括図・分類省略の判断

初版のstatus/connectionsは、単射・全射分岐と2つのtrace経路の合流図を検討し、異なる群・trace入力を同一経路と誤認させるおそれ、表との重複から省略とする。固定分類数や一対一の辺の多さだけを理由にしておらず、FORMAT_CONTRACT第6節に沿う。ただしR1の既知の方法関係を入れて再評価する必要がある。方法の有向辺1本と異なる群のtrace比較を短い本文で十分明確に説明できるなら、総括図を省く選択自体は妥当。個別記事の証明図の要件とは別である。

## 限界

本点検は案内の対象・条件・結論・接続と直接原典の照合であり、3論文全証明の独立検証ではない。projectionの解析的構成全体、injectivityの全確率・Fourier評価、irrational traceの全disk surgeryはここで再監査していない。画面上の表やリンク配置は本部の共通レンダラ検査に委ねる。

## 更新後の再確認・終了（2026-10-15 21:55 JST）

- R1解消：日英本文にprojection §§4,6のstream/recovery適応と§7.6のcone-chain/prime-order obstruction参照を追加し、injectivity側の再証明・独自interfaceを明示。connectionsのprojection→injectivityはmethod-adaptationで、主定理の存在入力とは区別された。原典injectivity p.7/p.64の実際のadapt/follows/reproveの記述と一致する。
- R2解消：sourcesにinjectivity1,2,7,64頁、projection2,36,37,38,73頁、irrational2,21,22頁のcheckedLocationsを確認。共通引用で本文へ方法参照が生成されている。
- 図省略理由は既知の方法辺を含めて再検討され、異種の関係を図へ重ねる説明負荷、本文と公式表の役割分担を記録した。単に辺が1本であることだけに依拠せず、関係の詳細も消していないため、今回の省略判断を受領する。
- 相対リンクは各言語の個別articleへ更新済み。最終画面・解決先検査は本部が実施中。
- 今回の内容照合で要請した修正はすべて解消。全証明の独立検証、冊子生成、公開検査の完了を意味しない。

### 再確認時点のSHA-256

```json
{
  "article.ja.md": "88ab2905f9a916407b6df310225c141821bb93c254f52c5348c3f75d5f118199",
  "article.en.md": "94254826767a9523b4456cb462a038a31f12b52a0ac8f5aa43d090270c104926",
  "presentation.json": "75eef852248103a50c82213946fbc1ccec3df4fa90bc58a6a1c2f1f531e909c1",
  "connections.json": "53be2f3ccbcc41f890cebc3a1e651237735d64ca1ffd5fa9326e38304be342c6",
  "sources.json": "dad8130393fff23e0bce13d51c5268f10a6bd97c26f093e343382c86d7671af8",
  "citations.json": "f1c93d21baf1e54675698bd69d671206b48b62570776ad89ff4d84510bac91da"
}
```
