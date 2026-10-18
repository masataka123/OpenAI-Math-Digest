# カタログ197 第1段階本部

- 制作セット: 1.4（2026-10-11）、3段階補足を適用。
- 依頼範囲: 記事制作・別担当内容点検・カタログ案内・引継ぎまで。サイト組込み・日英冊子PDF生成・commit・push・公開へ進まない。
- 作業場所: `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`、開始HEAD `74b07ccc3d9f8cbe7605da7239de332d24e62739`。
- 開始時に他担当の変更多数あり。`git-status-start.txt` と `baseline-hashes.json` で記録。197以外を編集しない。
- 公式原典の固定commit: `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。4本、公式順は `inventory.json`。分野は Algebra（公式ID2、表示順8、193–210、概要PDF21–23頁）。197は21頁。
- 概要の名称は Nonsofic groups and group-ring counterexamples。CONTENTSの見出しは A torsion-free group algebra that is not directly finite。両者を混同しない。
- 記事・内容点検の指定モデルは全員 `gpt-6-astra`、推論強度 `high`。実際のspawn指定は `model-provenance.json`。原稿の再利用なし、公式原典から新規制作。
- 31・28・9・25頁の4本を2執筆担当に分配し、別の1担当が全4本を照合。担当数と分類・図数は独立に判断する。
- PDF担当は再開後のサイト本部。日英とも必須、今回は未生成。

| 担当 | 作業 | 編集範囲 |
|---|---|---|
| author_direct | 公式順1・2、各最大60分の初稿 | drafts/catalog-197/torsion-free-direct-finiteness、direct-finiteness-characteristic-two |
| author_det_odd | 公式順3・4、各最大60分の初稿、その後案内 | drafts/catalog-197/group-ring-determinant、direct-finiteness-odd-characteristic、overview |
| reviewer | 原典に基づく別担当点検と修正確認 | coordination/catalog-197/reviews |
| root | 台帳、受領、統一編集管理、技術点検、引継ぎ | coordination/catalog-197（並行執筆中の本文を直接編集しない） |

各記事の開始・締切・終了は担当のstatus.md、後続編集は別枠で記録する。最終状態・再開手順はSITE_HQ_HANDOFF.mdに集約する。
