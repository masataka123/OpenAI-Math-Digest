import entries from './comics.json' with {type:'json'};
import official from './comic-catalogs.json' with {type:'json'};
import {catalogs, fields, papers} from './site.mjs';

// Official bibliography is independent of the usual editions' publication state.
export function resolveComics(records, normalCatalogs=catalogs, normalPapers=papers) {
const result = records.map(entry => {
  const catalog = official.catalogs.find(item => item.id === entry.catalogId);
  if (!catalog) throw new Error(`Missing official catalogue metadata for comic ${entry.catalogId}`);
  const normalCatalog = normalCatalogs.find(item => item.id === entry.catalogId) ?? null;
  const manuscripts = catalog.manuscripts.map(manuscript => {
    const normalPaper = normalPapers.find(paper => `preprints/${paper.path}` === manuscript.path && normalCatalog?.paperIds.includes(paper.id));
    return {...manuscript,
      sourceUrl:`https://github.com/openai/math/blob/${official.sourceCommit}/${manuscript.path}`,
      normalPaperId:normalPaper?.id ?? null};
  });
  const targetPaths = [...(entry.targetSourcePaths ?? [])];
  for (const id of entry.targetPaperIds ?? []) {
    const paper = normalPapers.find(item => item.id === id);
    if (!paper || !normalCatalog?.paperIds.includes(id)) throw new Error(`Unknown target paper ${id} in comic ${entry.catalogId}`);
    targetPaths.push(`preprints/${paper.path}`);
  }
  const targetPapers = [...new Set(targetPaths)].map(path => {
    const manuscript = manuscripts.find(item => item.path === path);
    if (!manuscript) throw new Error(`Unknown target source ${path} in comic ${entry.catalogId}`);
    return manuscript;
  });
  if (!['prototype','ready','published'].includes(entry.status)) throw new Error(`Invalid comic status: ${entry.catalogId}`);
  if (!entry.pages.length) throw new Error(`Comic ${entry.catalogId} has no images`);
  for (const page of entry.pages) {
    if (!(page.width>0 && page.height>0) || !page.alt ||
      ![page.png,...(page.webp===undefined?[]:[page.webp])].every(path => /^images\/comics\/[a-zA-Z0-9_./-]+$/.test(path) && !path.split('/').includes('..'))) {
      throw new Error(`Invalid comic image: ${entry.catalogId}`);
    }
  }
  if (entry.supplement.status !== 'approved' && entry.supplement.text !== null) {
    throw new Error(`Unapproved author supplement in comic ${entry.catalogId}`);
  }
  return {...entry, title:catalog.title, normalCatalog, targetPapers, manuscripts,
    relatedManuscripts:manuscripts.filter(item=>!targetPapers.some(target=>target.path===item.path)),
    officialCatalogUrl:`https://github.com/openai/math/blob/${official.sourceCommit}/CONTENTS.md`,
    fields:fields.filter(field => field.officialIds.includes(entry.catalogId))};
});

if (new Set(result.map(item => item.catalogId)).size !== result.length) {
  throw new Error('Duplicate comic catalogue numbers');
}
return result;
}

export const comics = resolveComics(entries);

// A prototype is built only by an explicit local opt-in; ordinary builds omit it.
export const visibleComics = (items,preview=false) => items.filter(item => item.status === 'published' ||
  (preview && ['prototype','ready'].includes(item.status)));
export const comicsForBuild = visibleComics(comics,process.env.COMICS_PREVIEW === '1');

// Official membership and order come from the shared catalogue, while the
// visible comics come only from this edition's registry and preview state.
export const comicFields = fields.map(field => ({...field,
  comics:field.officialIds.flatMap(id => comicsForBuild.filter(comic => comic.catalogId === id)),
}));
export const activeComicFields = comicFields.filter(field => field.comics.length > 0);
