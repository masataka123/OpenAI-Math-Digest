import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import path from 'node:path';

const exec=promisify(execFile);
export async function gitSnapshot(root){
 try{
  const git=async(...args)=>(await exec('git',args,{cwd:root,maxBuffer:4*1024*1024})).stdout.trim();
  const [commit,branch,status]=await Promise.all([git('rev-parse','HEAD'),git('rev-parse','--abbrev-ref','HEAD'),git('status','--porcelain=v1','--untracked-files=normal')]);
  return {commit,branch,dirty:status.length>0,status};
 }catch(error){return {unavailable:error.message};}
}
export async function ensureReviewNotes(root,catalog){
 const file=path.join(root,'coordination',`catalog-${catalog}`,'PREPARATION_REVIEW.md');
 await mkdir(path.dirname(file),{recursive:true});
 try{
  await writeFile(file,`# カタログ${catalog}：担当者の確認記録\n\n共通処理はこのファイルを初回だけ作成し、追記・上書きしません。\n新しい実行では過去の確認を自動で引き継がず、今回の成果物に対応する範囲を記録してください。\n\n## 確認回（担当者が追記）\n\n- 対象実行ID・HANDOFF.mdの場所：\n- 確認日時・担当者：\n- 対象版（commit・未コミット差分、画面HTMLハッシュ／PDFハッシュ）：\n- 数学的内容・日英照合：未記入（第1段階の記録と確認範囲を参照）\n- 画面と指定見本の比較：未記入（対象ページ・幅・確認結果）\n- 日英PDFの紙面：未記入（対象版・ページ・確認結果）\n- 残る未確認事項・担当・次の作業：\n- 第2段階の判定と根拠：未記入\n- 公開依頼・公開結果：この自動処理では取得しない\n`,{flag:'wx'});
 }catch(error){if(error.code!=='EEXIST')throw error;}
 return file;
}
export async function collectPreparationArtifacts(root,directory,catalog){
 const result={pdfs:[],browser:null,warnings:[]};
 try{
  const editions=JSON.parse(await readFile(path.join(root,'src/data/pdf-editions.json'),'utf8'));
  for(const lang of ['ja','en']){
   const edition=editions[catalog]?.[lang];
   if(edition)result.pdfs.push({lang,file:path.join(root,'public/pdf',`catalog-${catalog}-${lang}.pdf`),pages:edition.pages,sha256:edition.sha256});
  }
 }catch(error){result.warnings.push('PDF版情報を取得できません: '+error.message);}
 try{
  const browser=JSON.parse(await readFile(path.join(directory,'browser/report.json'),'utf8'));
  result.browser={status:browser.status,total:browser.results.length,passed:browser.results.filter(r=>r.status==='pass').length};
 }catch(error){if(error.code!=='ENOENT')result.warnings.push('画面記録を取得できません: '+error.message);}
 return result;
}
const cell=value=>String(value??'未取得').replaceAll('|','\\|').replaceAll('\n',' ');
const link=(label,file)=>`[${label}](<${file}>)`;
const names={citations:'引用',tests:'テスト',build:'ビルド','pdf-status':'PDF照合','pdf-environment':'PDF環境','pdf-generation':'PDF生成','build-pdf':'PDF生成後のビルド','pdf-final':'PDF再照合',links:'内部リンク',browser:'画面検査'};
export function renderHandoff(state,directory){
 const status={running:'実行中／中断した可能性あり（完了ではありません）',failed:'機械処理失敗', 'automated-checks-passed':'機械検査成功（目視・内容確認と公開判定は別）'}[state.status]??state.status;
 const git=g=>g?.unavailable?'取得できません':g?`${cell(g.branch)} / ${cell(g.commit)} / 未コミット変更：${g.dirty?'あり':'なし'}`:'未取得';
 const stepRows=state.steps.map(s=>`| ${names[s.name]??s.name} | ${s.exitCode===0?'成功':s.name==='pdf-status'&&state.pdf==='generated'?'更新が必要 → 再生成済み':'失敗'} | ${s.seconds} | ${link('ログ',s.name+'.log')} |`).join('\n');
 const pdfChecked=state.steps.some(s=>['pdf-status','pdf-final'].includes(s.name)&&s.exitCode===0)&&['generated','reused'].includes(state.pdf);
 const pdfs=state.artifacts?.pdfs??[];
 const browser=state.artifacts?.browser;
 return `# カタログ${state.catalog}：第2段階の機械処理引継ぎ\n\n`+
 `- 状態：${status}\n- 実行ID：${path.basename(directory)}\n- 作業場所：${state.workspace??'未取得'}\n- 開始：${state.startedAt}\n- 終了：${state.finishedAt??'未終了'}\n- 総所要時間：${state.totalSeconds??'未確定'} 秒（このコマンドの実行時間。読解・執筆時間は含まない）\n- 開始時Git：${git(state.gitStart)}\n- 終了時Git：${git(state.gitEnd)}\n\n`+
 `Git情報だけでは未コミット成果物の同一性を保証しません。画面記録のHTMLハッシュとPDFハッシュを参照し、検査後に変更した対象は再検査してください。\n\n`+
 `## 工程結果\n\n| 工程 | 結果 | 秒 | 証拠 |\n|---|---|---:|---|\n${stepRows}\n\n`+
 `未掲載の工程は未実施です。${state.activeStep?`実行中または停止工程：${state.activeStep}。`:''}${state.failedStep?`失敗工程：${state.failedStep}。`:''}\n${state.error?'\nエラー：'+cell(state.error)+'\n':''}\n`+
 `## 成果物と検査記録\n\n- ${link('全体記録（JSON）','report.json')}\n- PDF処理：${({generated:'再生成',reused:'再利用','not-checked':'未照合','regeneration-required':'再生成が必要'})[state.pdf]??state.pdf}\n- 以下は版情報の値です。今回のPDF照合：${pdfChecked?'成功':'未完了'}。紙面の目視確認は含みません。\n`+
 (pdfs.length?pdfs.map(p=>`- ${link(p.lang+' PDF',p.file)}：${p.pages??'未取得'}ページ / SHA-256：${p.sha256??'未取得'}`).join('\n'):'- PDF版情報：未取得')+'\n'+
 (browser?`- 画面検査：${browser.status}、${browser.passed}/${browser.total}条件成功。${link('画像一覧','browser/index.html')} / ${link('詳細・HTMLハッシュ','browser/report.json')}\n`:'- 画面検査記録：未取得（実行中または未実施）\n')+
 (state.artifacts?.warnings??[]).map(w=>'- 記録上の注意：'+cell(w)+'\n').join('')+
 `\n## 担当者の確認・残作業\n\n- ${link('担当者の確認記録',state.reviewNotes??'PREPARATION_REVIEW.md')}へ、今回の実行ID・版・確認範囲を追記してください。過去のチェックを今回の確認済みとして自動承継しません。\n- 数学的内容と日英照合：第1段階の記録を確認。ここでは判定しません。\n- 画面・指定見本の目視比較、日英PDF紙面：担当者が対象版と結果を記録。\n- 公開・反映確認：このコマンドでは実施しません。現在のユーザー指示とRELEASE_CHECKLISTに従ってください。\n\n`+
 `## 次の操作\n\n${state.status==='failed'?'失敗工程のログを確認して原因を修正し、下記コマンドを再実行してください。':state.status==='running'?'実行中なら完了を待ち、中断している場合はログを確認して再実行してください。':'画像一覧とPDFを確認し、担当者の記録を追記して第2段階の結果・未確認事項を報告してください。標準運用では報告して停止します。'}\n\n再検査コマンド：\n\n\`\`\`sh\n${state.resumeCommand}\n\`\`\`\n\n再実行は新しい記録フォルダを作成します。このHANDOFF.mdと担当者の追記は上書きしません。\n長期保存や別チェックアウトへの引継ぎでは、この実行フォルダを必要な証拠と一緒に保存し、移動後のパスを担当者記録へ追記してください。\n`;
}
