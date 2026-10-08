# Minimal metrics — 改訂で照合した接続

参照原稿は2026年9月27日版、commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`、21 PDF頁。改訂開始14:52:49 JST。途中の最新指示に従い、担当4篇のSchnell形式統一・公開へ作業範囲を更新した。以下は原典の記述と適用箇所の対応であり、証明全体の独立検証ではない。

[P]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Minimal-metrics-and-interior-injectivity-for-nef-adjoints-September-27-2026/paper.pdf
[Dem]: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/analmeth_book.pdf
[Reg]: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/regularization.pdf
[Fuj]: https://ems.press/content/serial-article-files/41145
[LP]: https://arxiv.org/pdf/1809.02500v4
[GM]: https://www.numdam.org/item/10.24033/asens.2325.pdf

| 主張・矢印 | 入力・原典箇所 | 適用仮定と次への接続 | 実際の照合・残る範囲 |
|---|---|---|---|
| 主張の範囲 | [Theorems 1.1–1.2, pp. 1–2; Corollary 2.4, pp. 10–11; Corollary 4.1, pp. 18–19][P] | klt有効有理境界とnefな実際の随伴、両端点の実際の束、厳密な内部パラメータを保持。 | 定理文と本文の仮定・結論を対応。Theorem 1.2は1.1に独立、Corollary 4.1は1.2を使わない。 |
| 固定捻り→極値切断 | [§2.2, pp. 5–6][P]; [Fuj, Theorem 3.2, published p. 734 / PDF p. 8][Fuj] | 許されたmでCartier性を満たし、消滅の差はample。Bの係数は1未満、負の部分は例外的。 | 本文再読。Fuj記述・代入は初稿の照合を継承。正則性・包絡・コンパクト性の外部原典は追加照合していない。 |
| 極小性→小質量 | [Claim 2.2, (2.5), pp. 6–7][P] | 正規化した重みの上界と部分列極限、極小性で固定Rを選ぶ。可積分な固定密度で優収束。 | Rのm独立性と正規化を再読。外部compactnessの全証明は対象外。 |
| 小質量→局所補正 | [Lemma 2.1, p. 5; Lemma 2.3, pp. 8–9][P]; [Dem, Theorem 5.1, p. 33][Dem] | 完備Kähler、滑らかな束計量、(n,1)上で点ごとに正定値の曲率作用素、閉じたL2データ、有限な逆曲率積分。 | 著者公開July 2011版の原定理を新規取得・照合。PDF頁=印刷頁33、番号一致。特異重み・mによらない定数は本稿の固定凸重み、逆曲率密度、先行重みでの弱極限による追加論証。全極限の独立検証はしていない。 |
| 局所補正→大域切断と点の値 | [§2.4, (2.13)–(2.15), pp. 9–10][P] | B^-を除いてL2延長。基底のCartier束に降ろし、正規性と余次元2のHartogsを使用。 | B^-上で局所上界を仮定しない。非可積分性に使うcとカットオフは固定。O_m(1)は各mだけの局所比較と明記。 |
| 小質量の大域切断→極値矛盾 | [(2.16)–(2.17), pp. 10–11][P] | m>d+1。指数d/(m−1)と最後の(m−1)乗が相殺。 | C′,I,dのm独立性を再読。Skoda原典の確認は未実施。 |
| 零Lelong端点→平滑近似 | [Lemma 3.1, pp. 11–12][P]; [Reg, Main Theorem 1.1, p. 2][Reg] | 固定smooth referenceを引いたglobal potential、零LelongでE_cが空。連続λ_k↓0にDini、固定u≤Cω。 | 著者公開42頁版を新規取得。番号一致、PDF頁=印刷頁2。接束tautological curvatureに必要なuは固定Hermitian metricに対し十分大きいCωで確保する。単調性とSkodaで指数積分を抑えるが、Skodaの原典は未照合。 |
| 端点→縮小性・曲率比較 | [(3.1)–(3.6), pp. 12–13][P] | 同一束上のlog-sum、effective端点差、有限個のfractional係数<1、0<λ<1。 | Hölder指数の余裕とC_λ=(1−λ)^{-1}を本文対応。λ=1へ拡張しない。 |
| 局所原始形→通常の類写像 | [Lemma 3.2; Proposition 3.3(i), pp. 13–16][P] | 固定完備計量の有界局所potential、重みの上界、L2延長で全空間上のČech cocycle。 | 分割一致と通常H1への連続性を再読。局所Demの入力条件とtop-degreeの密度比較を対応。 |
| 核→一様な大域原始形 | [Proposition 3.3(ii), (3.8), pp. 15–16][P] | 固定Fréchet開写像へ、縮めた被覆の一つのsup seminormを指定。必要な有限個のcompact seminormの一様性を利用。 | 全seminormで同時有界なliftや線形global choiceを主張しない。全定数の独立検算は未完了。 |
| 調和代表→像の小ノルム | [(3.9)–(3.14), pp. 16–17][P] | 完全形式の閉包への直交射影、完備cutoff、曲率比較、随伴domain、一様な原始形。 | 各役割・式の対応を再読。作用素領域の全解析的検証は未完了。 |
| 小ノルム→元の通常類の消滅 | [(3.15), §3.5, pp. 17–18][P] | 次数0・1の両方を固定Hilbert空間へ入れる。局所強収束+固定空間の有界性、固定κ_*の弱連続性。 | 変動重みの小ノルムだけで済ませない。近似完全形式も固定空間へ移せることを説明。 |
| 零Lelong計量→χ≠0の非消滅→半豊富性 | [§4, pp. 18–19][P]; [LP, Corollary D, v4, p. 4][LP]; [GM, Corollary 5.3, 2017刊行版p. 499 / PDF p. 23][GM] | 同じ実際のCartier倍の計量。LPは因子部分0、補助nef因子N=0、t=0。非消滅を得てからGMへ。 | 本稿の適用再読。LP/GM原記述の照合は初稿を継承し、今回は全証明へ範囲を広げていない。 |

図はmetricの局所補正と延長を分離し、injectivityに通常の類写像と一様な原始形の準備を独立の箱として加えた。日英の図と説明は同じ数学的段階を追う。FN側のwhole-floor上の非零切断は解析定理の外にある追加論証として保持する。
