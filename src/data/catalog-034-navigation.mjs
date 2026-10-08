// Compact labels for the existing proof sections; result numbering stays in the article.
const proofLabels={
 'kahler-log-abundance':[['全体図','Induction'],['境界の生成','Boundary generation'],['ファイブレーション','Fibrations'],['有理型非消滅','Meromorphic nonvanishing'],['符号付き剛性','Signed rigidity']],
 'uniform-slc-indices':[['Thm. 1.1 · 降下','Thm. 1.1 · Descent'],['Thm. 5.1 · Hodge rank','Thm. 5.1 · Hodge rank'],['Thm. 6.1 · 指標','Thm. 6.1 · Characters']],
 'conditional-kahler-fourfolds':[['全体図','Main route'],['正の代数次元','Positive algebraic dimension'],['境界からの延長','Boundary extension'],['代数次元零','Algebraic dimension zero']],
 'minimal-metrics-injectivity':[['Thm. 1.1 · 計量','Thm. 1.1 · Metrics'],['Thm. 1.2 · 単射性','Thm. 1.2 · Injectivity'],['Cor. 4.1','Cor. 4.1']],
 'fourfold-nonvanishing':[['Thm. 1.1 · 非消滅','Thm. 1.1 · Nonvanishing'],['Prop. 5.1 · 符号付き台','Prop. 5.1 · Signed support'],['Cor. 1.2 · lc対','Cor. 1.2 · lc pairs']],
 'lifting-adjoint-sections':[['Thm. 1.1 · 持ち上げ','Thm. 1.1 · Lifting'],['Thm. 1.2 · 非消滅後','Thm. 1.2 · After nonvanishing'],['Thm. 1.3 / Cor. 1.4','Thm. 1.3 / Cor. 1.4']],
 'uniform-log-iitaka':[['Thm. 4.2 · 曲線重み','Thm. 4.2 · Curve weights'],['Prop. 6.7 · 指標','Prop. 6.7 · Characters'],['分母と有効系','Denominators and systems'],['Thm. 1.1 · 飯高体','Thm. 1.1 · Iitaka field']],
 'uniform-pluricanonical-iitaka':[['同時帰納法','Simultaneous induction'],['moduli分母','Moduli denominators'],['高指数の排除','High-index exclusion'],['Thm. 1.2 · lc指数','Thm. 1.2 · lc indices'],['Thm. 1.1 · 飯高体','Thm. 1.1 · Iitaka field']],
 'relative-denominators':[['Thm. 1.1 · 分母','Thm. 1.1 · Denominators'],['Prop. 6.1 · 有効系','Prop. 6.1 · Effective systems'],['Prop. 7.1 · torsion','Prop. 7.1 · Torsion']],
 'arithmetic-stein-degree':[['第1のMMP','First MMP'],['第2のMMP','Second MMP'],['算術的軌道','Arithmetic orbits'],['垂直成分・帰納の結び','Vertical components and closure']],
 'effective-log-iitaka-fourfolds':[['構造帰着','Structural reduction'],['鎖と非消滅','Chains and nonvanishing'],['主定理の結び','Closing the main theorem']],
 'abundance-after-nonvanishing':[['Thm. 1.1 · 非消滅後','Thm. 1.1 · After nonvanishing'],['Thm. 6.1 · 境界の生成','Thm. 6.1 · Boundary generation'],['Thm. 1.2 · 持ち上げ','Thm. 1.2 · Lifting']],
};
const common={results:['主要結果','Results'],'diagram-sources':['図の引用','Diagram citations'],dependencies:['引用・依存関係','Dependencies'],sources:['原典・確認範囲','Sources and scope']};
export function articleNavigationLabel(paperId,heading,lang){
 const n=heading.slug.match(/^proof-(\d+)$/)?.[1];
 const label=n?proofLabels[paperId]?.[+n-1]:common[heading.slug];
 return label?.[lang==='en'?1:0]??heading.text;
}
