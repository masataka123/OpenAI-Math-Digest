# Historical one-shot authoring aid. Do not rerun on reviewed text. See HANDOFF.md for safe regeneration.
from pathlib import Path
import json, datetime
root=Path('drafts/catalog-036');coord=Path('coordination/catalog-036');inv=json.loads((coord/'inventory.json').read_text());papers={p['paperId']:p for p in inv['manuscripts']}
K,P,G,N=[p['paperId'] for p in inv['manuscripts']]
commit=inv['sourceCommit'];base=f'https://github.com/openai/math/blob/{commit}/preprints/'
externals={
 'OpenAI26LA':('Log abundance in characteristic zero','September 24, 2026','Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf'),
 'OpenAI26K':('Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity','October 6, 2026','Log-abundance-for-compact-Kahler-spaces-under-logarithmic-Iitaka-subadditivity-October-6-2026/main.pdf'),
 'OpenAI26O':('Orbifold and logarithmic Iitaka subadditivity','September 26, 2026','Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf')}
def loc(id,result,page):
 if id in papers:
  p=papers[id];return dict(paperId=id,result=result,printedPages=page,pdfPages=page,version=p['version'],sourceUrl=p['sourceUrl'])
 title,ver,path=externals[id];return dict(sourceId=id,displayName=title,result=result,printedPages=page,pdfPages=page,version=ver,sourceUrl=base+path)
def links(id,anchor):return {l:f'../{id}/article.{l}.md#{anchor}' for l in ['ja','en']} if id in papers else {'source':loc(id,'','')['sourceUrl']}
cs=[]
def edge(id,fr,frres,frpage,to,tores,topage,role,hyp,kind,anchor,unresolved=None):
 cs.append(dict(id=id,**{'from':loc(fr,frres,frpage),'to':loc(to,tores,topage)},role=role,hypotheses=hyp,kind=kind,checking={'status':'statement-and-application-checked','by':'catalog-036 headquarters plus article authors','date':'2026-10-13','evidence':'coordination/catalog-036/CONTENT_REVIEW.md; each article sources.json','scope':'Input statement and target application checked; external proof not recursively verified.'},articleLinks={'from':links(fr,'results'),'to':links(to,anchor)},unresolved=unresolved or ['Input theorem itself is not independently proved here.']))
edge('glm-to-projective',G,'Theorem 1.1; Section 3.3','2, 14–16',P,'Theorem 2.3; Proposition 7.1; Section 8.2','4, 28–30, 31–32','固定rational nef b-dataのgeneralized klt MMPを供給し、ordinary adjointとnef summandを扱う帰納法を支える。','Q-factorial generalized kltを利用。元のX上でM nefを仮定しても後続モデルのtraceをnefとは仮定しない。','direct','proof-3')
edge('projective-to-kahler',P,'Proposition 8.1; Theorem 2.3','30, 4',K,'Proposition 2.5; Theorem 1.2 proof in Section 7.3','7–8, 48–49','射影底で数値的に半豊富なpositive partを作り、Kähler解消へ引き戻す。','底は正規射影的、ordinary klt boundary、ordinary adjoint pseudo-effective、底上の追加有理line nef。Kähler generalized MMPへの無条件移行ではない。','direct','proof-1-step-3')
edge('ordinary-la-to-projective','OpenAI26LA','Theorem 1.1','2',P,'Theorem 2.2; Propositions 7.1 and 8.1','4, 28–35','nefになったordinary adjointのsemiampleness、Calabi–Yau帰着、canonical bundle formulaの入力。','ordinary klt/lc rational boundary。Mをboundaryに読み替えない。','direct','proof-3')
edge('ordinary-kla-to-kahler','OpenAI26K','Theorem 2.13; Proposition 3.8','13, 23–24',K,'Theorem 2.3; Proposition 2.4; Proposition 7.2','6–7, 47–48','通常随伴の実際のQ-line分解と既知の負部分を収縮する有限プログラム。','smooth SNC starting model、必要なlogarithmic Iitaka仮定、ordinary klt case。','direct','proof-1-step-2',['既存034記事は10月4日版。036は10月6日版を直接参照。034改訂は別作業。','外部結果の証明全体は未検証。'])
edge('orbifold-to-kahler','OpenAI26O','Lemmas 4.1, 4.3; Proposition 4.5; Corollary 6.2','21–26, 40–41',K,'Theorem 2.3; Proposition 4.1','6–7, 11–17','対数Iitakaの仮定を充足し、実偏極を許すHodge lineとperiod商へのQ-line降下を与える。','logarithmic部分はsmooth projective・reduced SNC・support inclusion。period部分は最高Hodge lineとambient integral latticeを保持。','direct','proof-4',['root-cover延長・全モデル互換性の全細部は未検証。'])
edge('ordinary-la-to-nd1','OpenAI26LA','Theorem 1.1','2',N,'Corollary 1.2','2','構成済みの同じterminal nef終点でK_Y自体をsemiampleにする。','ordinary pair (Y,0)、effective zero rational boundary、K_Y nef Q-Cartier。','consequence','proof-2-step-1')
edge('ordinary-la-to-glc-consequence','OpenAI26LA','Theorem 1.1','2',G,'Remark following Corollary 1.2','2','M=0のordinaryなnef終点だけにsemiamplenessを追加する。generalized主定理の証明入力ではない。','ordinary lc pair、nef adjoint。nonzero nef b-dataへ外挿しない。','consequence','proof-2-step-2')
edge('glc-to-la-finite-generation',G,'Corollary 1.2','2','OpenAI26LA','Corollary 12.1(i), proof and (67)','76','非抽出モデルの有効例外差で全rounded degreeの切断を同一視し、lc log canonical ringの有限生成へ使う。','ordinary lc rational pair。LA主定理Theorem1.1の入力ではなく後続系の証明。','direct','')
cs.append(dict(id='nd1-separate-route',**{'from':loc(N,'Theorem 1.1','2'),'to':loc(G,'Corollary 1.2 (smooth ordinary pseudo-effective case)','2')},kind='alternative',role='数値次元1の場合の極小モデルを、余次元2安定化と二つの曲面で構成する別経路。直接依存の矢印にはしない。',hypotheses='ND1はsmooth connected projective over C、dim≥3、κσ(K)=1。GLC側はより広いordinary lc存在結論だが、proof mechanismは別。',checking={'status':'comparison-of-statements-and-proof-inputs','by':'HQ and Kähler reviewer','date':'2026-10-13','evidence':'REVIEW_ND1_BY_KAHLER.md'},articleLinks={'from':links(N,'proof-1'),'to':links(G,'proof-2')},unresolved=['異なる仮定を持つ全結果の同値性を主張しない。未記録の引用関係は未調査。']))
obj={'catalogId':'036','productionVersion':'1.4 + 2026-10-11/12 supplements','checkingScope':'記録した主要な結果単位の接続について原記述と適用を照合。全外部証明の再帰的点検ではない。未掲載関係は未調査。','omittedSections':[{'section':'固定数の分類カード','reason':'4篇の順序と役割は共通表で示せる。3分類を移植せず、主要連続帰着を1図、別経路を短い文章で示す。'},{'section':'接続選択UI・本文の詳細依存表','reason':'主要経路は図と説明で読め、細部は各記事の依存表へ渡す。全接続記録は本JSONへ保持。'}],'diagramDecision':{'adopted':['routes.ja.svg','routes.en.svg'],'reason':'generalized MMPへordinary abundanceとbig性が合流し、projective positive partがKählerの射影底へ入力される帰着が、一覧だけでは読みにくいため。ND1は別経路として説明し、直接依存に混ぜない。','arrows':['glm-to-projective','projective-to-kahler'],'additionalInputOnArrow':'ordinary-la-to-projective'},'connections':cs}
(root/'overview/connections.json').write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
for p in inv['manuscripts']:p['articleStatus']='stage-1-content-reviewed';p['reviewer']='agent-kahler' if p['paperId']==N else 'headquarters'
(coord/'inventory.json').write_text(json.dumps(inv,ensure_ascii=False,indent=2)+'\n')
(root/'overview/status.md').write_text('''# カタログ案内の制作記録
- 036／制作セット1.4＋2026-10-11/12補足／本部／2026-10-13。
- 状態：第1段階の内容編集済み。サイト未組込み、冊子PDF未生成、未公開。
- 公式固定commit・ページ・分野・4本順はcoordination/catalog-036/inventory.json。
- 日英article、共通表presentation、結果単位connections、引用sources/citations、日英総括図を保存。
- 構成：共通公式順表→主要経路1図→ND1の別経路とordinary帰結→原典・確認範囲。分類数を固定しない。採否理由はconnections.json。
- 034を案内の粒度・表の見本、Schnellを証明節、033 Orbifold Iitakaを文献案内の見本とし、共通rendererによるPC/375px表示をvalidationに保存。051は見本に使用していない。
- PDF導線は冒頭へ第2段階で追加する。今回はリンク未生成のコメントを置き、存在しないPDFをリンクしない。
- 再生成：node scripts/sync-citations.mjs --registry drafts/catalog-036/overview/citations.json → python3 drafts/catalog-036/overview/diagrams/render.py。XeLaTeX -no-pdf→XDV→SVGで、冊子PDFは作らない。
- 未確認・再開手順はcoordination/catalog-036/HANDOFF.mdを参照。
''')
