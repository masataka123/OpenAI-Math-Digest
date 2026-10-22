import inventory004 from '../../coordination/catalog-004/inventory.json' with { type: 'json' };
import inventory033 from '../../coordination/catalog-033/inventory.json' with { type: 'json' };
import inventory034 from '../../research/catalog-034-inventory.json' with { type: 'json' };
import inventory036 from '../../coordination/catalog-036/inventory.json' with { type: 'json' };
import inventory037 from '../../coordination/catalog-037/inventory.json' with { type: 'json' };
import inventory038 from '../../coordination/catalog-038/inventory.json' with { type: 'json' };
import inventory039 from '../../coordination/catalog-039/inventory.json' with { type: 'json' };
import inventory042 from '../../coordination/catalog-042/inventory.json' with { type: 'json' };
import inventory046 from '../../coordination/catalog-046/inventory.json' with { type: 'json' };
import inventory050 from '../../coordination/catalog-050/inventory.json' with { type: 'json' };
import presentation050 from '../../drafts/catalog-050/overview/presentation.json' with { type: 'json' };
import inventory051 from '../../coordination/catalog-051/inventory.json' with { type: 'json' };
import inventory052 from '../../coordination/catalog-052/inventory.json' with { type: 'json' };
import inventory057 from '../../coordination/catalog-057/inventory.json' with { type: 'json' };
import inventory063 from '../../coordination/catalog-063/inventory.json' with { type: 'json' };
import inventory067 from '../../coordination/catalog-067/inventory.json' with { type: 'json' };
import inventory068 from '../../coordination/catalog-068/inventory.json' with { type: 'json' };
import inventory074 from '../../coordination/catalog-074/inventory.json' with { type: 'json' };
import inventory087 from '../../coordination/catalog-087/inventory.json' with { type: 'json' };
import inventory159 from '../../coordination/catalog-159/inventory.json' with { type: 'json' };
import inventory187 from '../../coordination/catalog-187/inventory.json' with { type: 'json' };
import inventory197 from '../../coordination/catalog-197/inventory.json' with { type: 'json' };
import inventory246 from '../../coordination/catalog-246/inventory.json' with { type: 'json' };
import inventory285 from '../../coordination/catalog-285/inventory.json' with { type: 'json' };
import inventory287 from '../../coordination/catalog-287/inventory.json' with { type: 'json' };
import inventory305 from '../../coordination/catalog-305/inventory.json' with { type: 'json' };
import inventory322 from '../../coordination/catalog-322/inventory.json' with { type: 'json' };
import inventory338 from '../../coordination/catalog-338/inventory.json' with { type: 'json' };
import inventory356 from '../../coordination/catalog-356/inventory.json' with { type: 'json' };
import inventory357 from '../../coordination/catalog-357/inventory.json' with { type: 'json' };
import subjectSource from './catalog-subjects.json' with { type: 'json' };
export const text = (ja, en) => ({ ja, en });
export const languages = ['ja', 'en'];
export const sourceCommit = 'adc7f1241b42e322a6451854ab7e4b4c146bf78a';
export const sourceRoot = `https://github.com/openai/math/blob/${sourceCommit}`;
export const officialCatalog = `${sourceRoot}/CONTENTS.md`;
// Subject names and order follow overview.tex / overview.pdf at sourceCommit.
export const officialOverview = `https://raw.githubusercontent.com/openai/math/${sourceCommit}/overview.pdf`;
export const overviewTitle = 'OpenAI Research Catalog';
const fieldTranslations = [
  {
    "id": "number-theory",
    "ja": "数論",
    "catalogIds": ["004"]
  },
  {
    "id": "algebraic-complex-geometry",
    "ja": "代数幾何学・複素幾何学",
    "catalogIds": [
      "033", "034", "036", "037", "038", "039", "042", "046", "050", "051", "052", "057", "063", "067", "068"
    ]
  },
  {
    "id": "real-complex-analysis",
    "ja": "実解析・複素解析",
    "catalogIds": ["074"]
  },
  {
    "id": "convex-metric-geometry",
    "ja": "凸幾何学・距離幾何学",
    "catalogIds": ["087"]
  },
  {
    "id": "theoretical-computer-science",
    "ja": "理論計算機科学",
    "catalogIds": []
  },
  {
    "id": "dynamical-systems-ergodic-theory",
    "ja": "力学系・エルゴード理論",
    "catalogIds": []
  },
  {
    "id": "combinatorics",
    "ja": "組合せ論",
    "catalogIds": ["159", "187"]
  },
  {
    "id": "algebra",
    "ja": "代数学",
    "catalogIds": ["197"]
  },
  {
    "id": "probability-statistical-mechanics",
    "ja": "確率論・統計力学",
    "catalogIds": []
  },
  {
    "id": "mathematical-logic",
    "ja": "数理論理学",
    "catalogIds": []
  },
  {
    "id": "group-theory",
    "ja": "群論",
    "catalogIds": ["246"]
  },
  {
    "id": "mathematical-physics",
    "ja": "数理物理学",
    "catalogIds": []
  },
  {
    "id": "operator-algebras",
    "ja": "作用素環",
    "catalogIds": ["285", "287"]
  },
  {
    "id": "topology",
    "ja": "トポロジー",
    "catalogIds": ["305"]
  },
  {
    "id": "functional-analysis",
    "ja": "関数解析",
    "catalogIds": ["322"]
  },
  {
    "id": "differential-geometry",
    "ja": "微分幾何学",
    "catalogIds": ["338", "356", "357"]
  },
  {
    "id": "partial-differential-equations",
    "ja": "偏微分方程式",
    "catalogIds": []
  }
];
export const fields = subjectSource.subjects.map((subject,index) => {
  const translation=fieldTranslations[index];
  const range=`${subject.ids[0]}–${subject.ids.at(-1)}`;
  return {
    ...translation,
    title: text(translation.ja,subject.name), subtitle: subject.name,
    description: text(`公式カタログ ${range}。`,`Official catalogue ${range}.`),
    officialIds: subject.ids, range, page: subject.page,
  };
});
// Official catalogue numbers and internal manuscript IDs are different identifiers.
const manuscriptIds034 = [
  'kahler-log-abundance', 'uniform-slc-indices', 'conditional-kahler-fourfolds',
  'log-abundance-characteristic-zero', 'minimal-metrics-injectivity', 'fourfold-nonvanishing',
  'lifting-adjoint-sections', 'schnell-fiber-spaces', 'uniform-log-iitaka',
  'uniform-pluricanonical-iitaka', 'relative-denominators', 'arithmetic-stein-degree',
  'effective-log-iitaka-fourfolds', 'abundance-after-nonvanishing',
];
const papers034 = inventory034.manuscripts.map((entry, index) => {
  const [, month, day, year] = entry.path.match(/(September|October)-(\d+)-(\d{4})/);
  return {
    id: manuscriptIds034[index], catalogId: '034', sourceCommit, title: entry.title, path: entry.path.replace(/^preprints\//, ''),
    version: `${year}-${month === 'September' ? '09' : '10'}-${day.padStart(2, '0')}`,
    pages: entry.pdfPages, order: entry.order, featured: ['schnell-fiber-spaces', 'log-abundance-characteristic-zero', 'arithmetic-stein-degree', 'relative-denominators', 'uniform-log-iitaka', 'kahler-log-abundance', 'minimal-metrics-injectivity', 'fourfold-nonvanishing', 'uniform-slc-indices', 'conditional-kahler-fourfolds', 'uniform-pluricanonical-iitaka', 'lifting-adjoint-sections', 'effective-log-iitaka-fourfolds', 'abundance-after-nonvanishing'].includes(manuscriptIds034[index]),
  };
});
export const papers = [...inventory004.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '004', sourceCommit: inventory004.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory033.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '033', sourceCommit: inventory033.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...papers034, ...inventory036.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '036', sourceCommit: inventory036.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory037.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '037', sourceCommit: inventory037.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory038.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '038', sourceCommit: inventory038.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory039.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '039', sourceCommit: inventory039.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory042.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '042', sourceCommit: inventory042.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory046.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '046', sourceCommit: inventory046.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory050.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '050', sourceCommit: inventory050.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory051.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '051', sourceCommit: inventory051.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory052.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '052', sourceCommit: inventory052.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory057.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '057', sourceCommit: inventory057.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory063.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '063', sourceCommit: inventory063.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory067.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '067', sourceCommit: inventory067.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory068.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '068', sourceCommit: inventory068.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory074.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '074', sourceCommit: inventory074.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory087.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '087', sourceCommit: inventory087.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: '2026-09-22',
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory159.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '159', sourceCommit: inventory159.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory187.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '187', sourceCommit: inventory187.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory197.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '197', sourceCommit: inventory197.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory246.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '246', sourceCommit: inventory246.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory285.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '285', sourceCommit: inventory285.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory287.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '287', sourceCommit: inventory287.sourceCommit,
 title: entry.title, path: entry.path, version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory305.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '305', sourceCommit: inventory305.sourceCommit,
 title: entry.title, path: entry.sourcePath.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory322.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '322', sourceCommit: inventory322.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory338.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '338', sourceCommit: inventory338.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory356.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '356', sourceCommit: inventory356.sourceCommit,
 title: entry.title, path: entry.sourceUrl.split('/preprints/')[1], version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory357.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '357', sourceCommit: inventory357.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
}))];
export const catalogs = [{
 id: '004', sourceCommit: inventory004.sourceCommit, mode: 'multi',
 title: text(inventory004.titleJa, inventory004.overviewTitle),
 titlePhrases: {ja: ['ℚ上のHilbertの', '第10問題']},
 contentsTitle: inventory004.contentsTitle,
 description: text("カタログ004は、有理零点の決定不能性を扱う原稿と、その局所条件の構成に使う楕円曲線の点別2-converseを収録する。", "Catalogue 004 contains a manuscript on undecidability of rational solvability and a pointwise 2-converse for elliptic curves used to construct its local conditions."),
 paperIds: inventory004.manuscripts.map(p => p.paperId),
 overviewSectionIds: ['papers', 'diagram-sources', 'route', 'connections', 'sources'],
}, {
 id: '033', sourceCommit: inventory033.sourceCommit,
 title: text('Campanaのorbifold飯高予想と対数的劣加法性', inventory033.overviewTitle),
 contentsTitle: inventory033.contentsTitle,
 description: text('劣加法性、全ファイバーの変動、加法性と半豊富性を、5篇の結果と証明の接続から読む。', 'Read the results and proof connections of five manuscripts on subadditivity, whole-fiber variation, additivity, and semiampleness.'),
 paperIds: inventory033.manuscripts.map(p => p.paperId),
}, {
  id: '034', sourceCommit, title: text('対数的豊富性と有効飯高ファイブレーション', 'Log abundance and effective Iitaka fibrations'),
  titlePhrases: {ja: ['対数的豊富性と', '有効飯高', 'ファイブレーション']},
  contentsTitle: 'Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity',
  description: text('豊富性と良い極小モデルに関する論文群を、仮定と結論、証明の関係から整理する。', 'A guide to manuscripts on abundance and good minimal models, organized by hypotheses, conclusions, and arguments.'),
  paperIds: manuscriptIds034,
}, {
  id: '036', sourceCommit: inventory036.sourceCommit, mode: 'multi',
  title: text(inventory036.titleJa, inventory036.overviewTitle),
  contentsTitle: inventory036.contentsTitle,
  description: text('固定nefデータのモデル存在、射影・Kählerの数値的半豊富性、数値次元1の極小モデルを4篇の証明から読む。', 'Follow four proofs of models with fixed nef data, projective and Kähler numerical semiampleness, and minimal models in numerical dimension one.'),
  paperIds: inventory036.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '037', sourceCommit: inventory037.sourceCommit, mode: 'multi',
  title: text(inventory037.titleJa, inventory037.overviewTitle),
  contentsTitle: inventory037.contentsTitle,
  description: text('四次元の超曲面帰着から全次元の体積ギャップ・等号分類へ至る2篇の証明と、大域的な帰結を読む。', 'Follow two proofs from the fourfold hypersurface reduction to the volume gap and equality classification in every dimension, with global consequences.'),
  paperIds: inventory037.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '038', sourceCommit: inventory038.sourceCommit, mode: 'single',
  title: text(inventory038.titleJa, inventory038.overviewTitle),
  contentsTitle: inventory038.contentsTitle,
  description: text('指数型最小化と局所的な持上げから、藤田の自由性予想の主張と証明の接続を読む。', 'Follow exponential minimization and local lifting through the claimed proof of Fujita’s freeness conjecture.'),
  paperIds: inventory038.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '039', sourceCommit: inventory039.sourceCommit, mode: 'multi',
  title: text(inventory039.titleJa, inventory039.overviewTitle),
  contentsTitle: inventory039.contentsTitle,
  description: text('平面の厳密Nagata不等式と、曲面・高次元・正標数での多点Seshadri定数の最大性を、4篇の証明から読む。', 'Follow four proofs of the strict plane Nagata inequality and maximal multipoint Seshadri constants on surfaces, in higher dimensions, and in positive characteristic.'),
  paperIds: inventory039.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '042', sourceCommit: inventory042.sourceCommit, mode: 'single',
  title: text(inventory042.titleJa, inventory042.overviewTitle),
  contentsTitle: inventory042.contentsTitle,
  description: text('K3曲面のOka性へ至る局所操作・周期の分類・凸近似と、その帰結を読む。', 'Follow local operations, period cases, and convex approximation to the Oka property of K3 surfaces and its consequences.'),
  paperIds: inventory042.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '046', sourceCommit: inventory046.sourceCommit, mode: 'multi',
  title: text(inventory046.titleJa, inventory046.overviewTitle),
  contentsTitle: inventory046.contentsTitle,
  description: text('largeな基本群をもつ射影四次元多様体と有理曲線の連鎖をもつ射影曲面を構成し、普遍被覆の非正則凸性を示す二つの証明を読む。', 'Follow two constructions of projective varieties whose universal covers fail holomorphic convexity: a fourfold with large fundamental group and a surface with chains of rational curves.'),
  paperIds: inventory046.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'diagram-sources', 'connections', 'sources'],
}, {
  id: '050', sourceCommit: inventory050.sourceCommit, mode: 'single',
  title: text(inventory050.titleJa, inventory050.overviewTitle),
  markdownTitlePhrases: {ja: ['Griffithsの', '正値性予想への', '反例']},
  contentsTitle: inventory050.contentsTitle,
  description: text(presentation050.rows[0].role.ja, presentation050.rows[0].role.en),
  paperIds: inventory050.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'guide', 'sources'],
}, {
  id: '051', sourceCommit: inventory051.sourceCommit, mode: 'single',
  title: text(inventory051.titleJa, inventory051.overviewTitle),
  contentsTitle: inventory051.contentsTitle,
  description: text('円板変分から標準束の豊富性へ至る証明と、大域生成・有限被覆の二つの系を読む。', 'Follow disc variations to canonical ampleness and its consequences for global generation and finite covers.'),
  paperIds: inventory051.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '052', sourceCommit: inventory052.sourceCommit, mode: 'multi',
  title: text(inventory052.titleJa, inventory052.overviewTitle),
  contentsTitle: inventory052.contentsTitle,
  description: text('指定された接束分裂の可積分性と、普遍被覆または多様体自身の積分解へ至る2篇の証明を読む。', 'Follow two proofs separating integrability of a prescribed tangent splitting from product decompositions of the universal cover or the manifold itself.'),
  paperIds: inventory052.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'diagram-sources', 'connections', 'sources'],
}, {
  id: '057', sourceCommit: inventory057.sourceCommit, mode: 'multi',
  title: text(inventory057.titleJa, inventory057.overviewTitle),
  contentsTitle: inventory057.contentsTitle,
  description: text('特殊多様体の通常基本群、開多様体の線形像、根オービフォールドへの移行を、3篇の証明と接続から読む。', 'Follow three proofs linking ordinary fundamental groups of special varieties, linear images for open varieties, and the passage to root orbifolds.'),
  paperIds: inventory057.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '063', sourceCommit: inventory063.sourceCommit, mode: 'single',
  title: text(inventory063.titleJa, inventory063.overviewTitle),
  contentsTitle: inventory063.contentsTitle,
  description: text('一般化向井不等式と等号の場合の分類を、point descendant・量子乗法・最小有理曲線族の接続から読む。', 'Follow point descendants, quantum multiplication, and minimal rational curves through the generalized Mukai inequality and its equality case.'),
  paperIds: inventory063.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '067', sourceCommit: inventory067.sourceCommit, mode: 'single',
  title: text(inventory067.titleJa, inventory067.overviewTitle),
  contentsTitle: inventory067.contentsTitle,
  description: text('nef接束を持つFano六次元多様体の分類を、極小有理曲線族の特性数制約とVMRT認識から読む。', 'Follow characteristic-number constraints on minimal rational curves and VMRT recognition through the classification of Fano sixfolds with nef tangent bundle.'),
  paperIds: inventory067.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '068', sourceCommit: inventory068.sourceCommit, mode: 'multi',
  title: text(inventory068.titleJa, inventory068.overviewTitle),
  contentsTitle: inventory068.contentsTitle,
  description: text('反標準束の非消滅を、不変指数・計量降下・不変切断の構成へ結ぶ7篇の証明から読む。', 'Follow seven proofs connecting anticanonical nonvanishing with invariant indices, metric descent, and invariant sections.'),
  paperIds: inventory068.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'diagram-sources', 'index-routes', 'exact-routes', 'connections', 'sources'],
}, {
  id: '074', sourceCommit: inventory074.sourceCommit, mode: 'multi',
  title: text(inventory074.titleJa, inventory074.overviewTitle),
  contentsTitle: inventory074.contentsTitle,
  description: text('三次元の最大関数評価と四次元のHausdorff次元を、共有するplank入力と異なる証明経路から読む。', 'Follow the shared plank input and distinct proof routes to the three-dimensional maximal estimate and four-dimensional Hausdorff dimension.'),
  paperIds: inventory074.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'diagram-sources', 'connections', 'sources'],
}, {
  id: '087', sourceCommit: inventory087.sourceCommit, mode: 'multi',
  title: text(inventory087.titleJa, inventory087.overviewTitle),
  contentsTitle: inventory087.contentsTitle,
  description: text('対称版・一般版の体積積と等号分類、極体積のGromov幅を、3篇の証明と評価の接続から読む。', 'Follow three proofs concerning symmetric and general volume products, equality cases, and the Gromov width of polar products.'),
  paperIds: inventory087.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'consequences', 'sources'],
}, {
  id: '159', sourceCommit: inventory159.sourceCommit, mode: 'single',
  title: text(inventory159.titleJa, inventory159.overviewTitle),
  contentsTitle: inventory159.contentsTitle,
  description: text('三角型の密度増分から、逆数和の発散が強制する等差数列へ。', 'From triangular density increments to progressions forced by a divergent reciprocal sum.'),
  paperIds: inventory159.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['inventory', 'sources'],
}, {
  id: '187', sourceCommit: inventory187.sourceCommit, mode: 'single',
  title: text(inventory187.titleJa, inventory187.overviewTitle),
  contentsTitle: inventory187.contentsTitle,
  description: text('条件付き勝利局面の合成と有限証明書から、Snakyを高々21回のMaker着手で達成する方策と有限盤への移行を読む。', 'Follow conditional-win composition and a finite certificate to one policy forcing Snaky within 21 Maker claims and its transfer to finite boards.'),
  paperIds: inventory187.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '197', sourceCommit: inventory197.sourceCommit, mode: 'multi',
  title: text(inventory197.titleJa, inventory197.overviewTitle),
  contentsTitle: inventory197.contentsTitle,
  description: text('非sofic群と群環の反例を扱う4篇の証明概説。', 'Four proof overviews on nonsofic groups and group-ring counterexamples.'),
  paperIds: inventory197.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'reading', 'sources'],
}, {
  id: '246', sourceCommit: inventory246.sourceCommit, mode: 'single',
  title: text(inventory246.titleJa, inventory246.overviewTitle),
  contentsTitle: inventory246.contentsTitle,
  description: text('球面境界を持つ双曲群について、モジュラスの二つの増大率を排除し、一様化から群全体の有限核を持つ等長作用へ進む論証を読む。', 'For a hyperbolic group with sphere boundary, follow the exclusion of two modulus-growth regimes and the passage from uniformization to an isometric action of the whole group with finite kernel.'),
  paperIds: inventory246.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['articles', 'argument', 'sources'],
}, {
  id: '285', sourceCommit: inventory285.sourceCommit, mode: 'multi',
  title: text(inventory285.titleJa, inventory285.overviewTitle),
  contentsTitle: inventory285.contentsTitle,
  description: text('係数なし被約assemblyの核と像、torsion-free群の被約群C*環内の射影を扱う3篇の証明概説。', 'Three proof overviews on the kernel and image of coefficient-free reduced assembly and projections in reduced group C*-algebras of torsion-free groups.'),
  paperIds: inventory285.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'assembly', 'connections', 'sources'],
}, {
  id: '287', sourceCommit: inventory287.sourceCommit, mode: 'single',
  title: text(inventory287.titleJa, inventory287.overviewTitle),
  contentsTitle: inventory287.contentsTitle,
  description: text('自由Haarユニタリの構成と生成性から階数低下を得て、増幅公式と二者択一定理による帰結へ進む論証を読む。', 'Follow the construction and generation of free Haar unitaries to rank reduction, then the consequences of amplification formulas and the dichotomy theorem.'),
  paperIds: inventory287.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['inventory', 'connections', 'sources'],
}, {
  id: '305', sourceCommit: inventory305.sourceCommit, mode: 'multi',
  title: text(inventory305.titleJa, inventory305.overviewTitle),
  contentsTitle: inventory305.contentsTitle,
  description: text("4次元の円板埋め込みについて、境界円周だけを固定する障害と、誘導normal framingも保持する障害を扱う。後者の標識付き幾何構成・代数的potential・有限tensor定理は、有限表示の整係数PD4群を閉aspherical位相4多様体で実現する問題へ直接使われる。以下は原稿が主張する結果とその証明の接続を案内する。", "The catalogue treats two four-dimensional disk obstructions: one fixing only the boundary circles, and another also retaining induced normal framings. The latter paper's marked geometry, algebraic potentials, and finite tensor theorem feed directly into the realization problem for finitely presented integral PD4 groups as groups of closed aspherical topological four-manifolds. This guide follows the manuscripts' claims and the connections between their proofs."),
  paperIds: inventory305.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['inventory', 'connections', 'dependencies', 'sources'],
}, {
  id: '322', sourceCommit: inventory322.sourceCommit, mode: 'single',
  title: text(inventory322.titleJa, inventory322.overviewTitle),
  contentsTitle: inventory322.contentsTitle,
  description: text("本カタログは、実Banach空間の単位球面間の全射等長写像について、空間全体への一意な実線形等長延長を主張する1本の原稿を収録する。概説は、異なる半径の距離欠損を極値化し、弦の整列と凸性の矛盾で消す証明を追う。", "This catalogue contains one manuscript claiming that a surjective isometry between unit spheres of real Banach spaces extends uniquely to a real-linear isometry of the spaces. The overview follows its proof by maximizing the distance defect between different radii, aligning chords, and eliminating the defect through convexity."),
  paperIds: inventory322.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['inventory', 'guide', 'sources'],
}, {
  id: '338', sourceCommit: inventory338.sourceCommit, mode: 'single',
  title: text(inventory338.titleJa, inventory338.overviewTitle),
  contentsTitle: inventory338.contentsTitle,
  description: text('正の正則二断面曲率から双正則一意化へ至る解析・縮小座標・全射性の接続を読む。', 'Follow the analytic estimates, shrinking coordinates, and surjectivity argument toward biholomorphic uniformization under positive bisectional curvature.'),
  paperIds: inventory338.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'guide', 'sources'],
}, {
  id: '356', sourceCommit: inventory356.sourceCommit, mode: 'multi',
  title: text(inventory356.titleJa, inventory356.overviewTitle),
  contentsTitle: inventory356.contentsTitle,
  description: text('Gigliの分布曲率下界とAlexandrovの曲率下界の同値、およびその逆向きで使う弱Hessianの全測地線定理を扱う。', 'The two papers establish the equivalence between Gigli’s distributional curvature lower bound and an Alexandrov lower curvature bound, together with the weak-Hessian theorem used in the converse.'),
  paperIds: inventory356.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'diagram-sources', 'connections', 'sources'],
}, {
  id: '357', sourceCommit: inventory357.sourceCommit, mode: 'single',
  title: text(inventory357.titleJa, inventory357.overviewTitle),
  contentsTitle: inventory357.contentsTitle,
  description: text('調和座標の尺度ごとの退化を座標値空間で補正し、全点対の距離評価と開像を得る論証を読む。', 'Follow the compensation for scale-dependent degeneration of harmonic coordinates in value space, leading to all-pairs metric bounds and an open image.'),
  paperIds: inventory357.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['inventory', 'sources'],
}];
export const paperSource = paper => `https://github.com/openai/math/blob/${paper.sourceCommit ?? sourceCommit}/preprints/${paper.path}`;
export const catalogsForField = id => fields.find(field => field.id === id).catalogIds.map(id => catalogs.find(catalog => catalog.id === id));
export const fieldsForCatalog = id => fields.filter(field => field.catalogIds.includes(id));
export const catalogsForPaper = id => catalogs.filter(catalog => catalog.paperIds.includes(id));
