const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const STORAGE='loewenblut-blueprint-state-v1';
let state = loadState();
let currentProjectId = state.lastProjectId || state.projects[0]?.id;
let currentTab='locations';
let currentFilter='open';
let searchTerm='';

function uid(prefix='id'){return prefix+'-'+Math.random().toString(36).slice(2,9)}
function clone(x){return JSON.parse(JSON.stringify(x))}
function loadState(){
  try{
    const saved=localStorage.getItem(STORAGE);
    if(saved){const x=JSON.parse(saved);if(x?.projects&&x?.master)return x;}
  }catch(e){}
  const seed=clone(window.BLUEPRINT_SEED);
  seed.projects.forEach(p=>p.locations.forEach(l=>l.tasks=l.tasks.map(t=>({...t,id:uid('task'),done:false}))));
  seed.lastProjectId=seed.projects[0]?.id;
  return seed;
}
function save(){state.lastProjectId=currentProjectId;localStorage.setItem(STORAGE,JSON.stringify(state));render()}
function project(){return state.projects.find(p=>p.id===currentProjectId) || state.projects[0]}
function allTasks(p=project()){return p.locations.flatMap(l=>l.tasks.map(t=>({...t,location:l}))) }
function stats(p=project()){
  const ts=allTasks(p), done=ts.filter(x=>x.done).length, p1=ts.filter(x=>x.priority==='P1'), p1done=p1.filter(x=>x.done).length;
  return {total:ts.length,done,pct:ts.length?Math.round(done/ts.length*100):0,p1:p1.length,p1done,open:ts.length-done}
}
function mapUrl(address){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address)}
function esc(s=''){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function badgePriority(p){return `<span class="badge ${p==='P1'?'p1':p==='P2'?'p2':'bonus'}">${esc(p)}</span>`}
function badgeMic(m){return m?`<span class="badge mic">${esc(m)}</span>`:''}

function render(){
  renderProjects(); renderHero(); renderTabs(); renderMain();
}
function renderProjects(){
  $('#projectList').innerHTML=state.projects.map(p=>{const s=stats(p);return `<div class="project-item ${p.id===currentProjectId?'active':''}" data-project="${p.id}"><strong>${esc(p.name)}</strong><small>${esc(p.city||'')} · ${s.done}/${s.total}</small><div class="progressbar"><i style="width:${s.pct}%"></i></div></div>`}).join('');
  $$('[data-project]').forEach(el=>el.onclick=()=>{currentProjectId=el.dataset.project;currentTab='locations';save()});
}
function renderHero(){const p=project(),s=stats(p); $('#hero').innerHTML=`
  <div class="hero-top"><div><h2>${esc(p.name)}</h2><p>${esc(p.dates||'')} ${p.city?'· '+esc(p.city):''}</p><p style="margin-top:5px">${esc(p.subtitle||'')}</p></div><div class="top-actions"><button class="btn small" onclick="editProject()">Projekt bearbeiten</button><button class="btn small" onclick="duplicateProject()">Duplizieren</button></div></div>
  <div class="stat-row"><div class="stat"><b>${s.pct}%</b><span>fertig</span></div><div class="stat"><b>${s.done}/${s.total}</b><span>Shots</span></div><div class="stat"><b>${s.p1done}/${s.p1}</b><span>P1</span></div><div class="stat"><b>${s.open}</b><span>offen</span></div></div>`}
function renderTabs(){
  const tabs=[['locations','Locations'],['route','Route'],['missing','Offen'],['master','Master'],['files','PDF / Daten']];
  $('#tabs').innerHTML=tabs.map(([id,label])=>`<button class="btn tab ${currentTab===id?'active':''}" data-tab="${id}">${label}</button>`).join('');
  $$('[data-tab]').forEach(b=>b.onclick=()=>{currentTab=b.dataset.tab;renderMain()});
}
function renderMain(){
  if(currentTab==='locations')renderLocations();
  if(currentTab==='route')renderRoute();
  if(currentTab==='missing')renderMissing();
  if(currentTab==='master')renderMaster();
  if(currentTab==='files')renderFiles();
}
function renderLocations(){const p=project();
  $('#main').innerHTML=`<div class="toolbar"><input id="search" placeholder="Shots / Location suchen..." value="${esc(searchTerm)}"><select id="filter"><option value="open" ${currentFilter==='open'?'selected':''}>Offen</option><option value="all" ${currentFilter==='all'?'selected':''}>Alle</option><option value="done" ${currentFilter==='done'?'selected':''}>Erledigt</option><option value="p1" ${currentFilter==='p1'?'selected':''}>Nur P1</option></select><button class="btn" onclick="addLocation()">+ Location</button></div><div id="locationsWrap"></div>`;
  $('#search').oninput=e=>{searchTerm=e.target.value.toLowerCase();renderLocationCards()}; $('#filter').onchange=e=>{currentFilter=e.target.value;renderLocationCards()}; renderLocationCards();
}
function renderLocationCards(){const p=project();
  const html=p.locations.map(l=>{
    const visible=l.tasks.filter(t=>{
      const hay=(l.name+' '+l.address+' '+t.text+' '+(t.mic||'')).toLowerCase(); if(searchTerm&&!hay.includes(searchTerm))return false;
      if(currentFilter==='open'&&t.done)return false;if(currentFilter==='done'&&!t.done)return false;if(currentFilter==='p1'&&t.priority!=='P1')return false;return true;
    });
    if(searchTerm && !visible.length && !(l.name+' '+l.address).toLowerCase().includes(searchTerm))return '';
    const done=l.tasks.filter(t=>t.done).length,pct=l.tasks.length?Math.round(done/l.tasks.length*100):0;
    return `<section class="card location-card"><div class="loc-head"><div><h3>${esc(l.name)}</h3><div class="meta">${esc(l.date||'')} · ${esc(l.time||'')} · ${esc(l.address||'')}</div><div class="pillrow"><span class="badge">${esc(l.type||'Location')}</span><span class="badge">${done}/${l.tasks.length} · ${pct}%</span></div></div><div class="loc-actions"><a class="btn small gold" target="_blank" href="${mapUrl(l.address)}">Maps</a><button class="btn small" onclick="editLocation('${l.id}')">Bearbeiten</button><button class="btn small" onclick="addTask('${l.id}')">+ Shot</button></div></div>${l.notes?`<div class="notes">${esc(l.notes)}</div>`:''}<div class="progressbar"><i style="width:${pct}%"></i></div><div class="tasks">${visible.length?visible.map(t=>taskHtml(l,t)).join(''):`<div class="empty">Keine Shots in diesem Filter.</div>`}</div></section>`
  }).join('');
  $('#locationsWrap').innerHTML=html||'<div class="card empty">Keine Treffer.</div>';
}
function taskHtml(l,t){return `<div class="task ${t.done?'done':''}"><input type="checkbox" ${t.done?'checked':''} onchange="toggleTask('${l.id}','${t.id}',this.checked)"><div><div class="task-text">${esc(t.text)}</div><div class="task-meta">${badgePriority(t.priority||'P2')}${badgeMic(t.mic)}</div></div><div class="task-controls"><button class="btn small ghost" onclick="editTask('${l.id}','${t.id}')">✎</button></div></div>`}
function toggleTask(lid,tid,val){const l=project().locations.find(x=>x.id===lid),t=l.tasks.find(x=>x.id===tid);t.done=val;save()}
function renderRoute(){const p=project(); const firstOpen=p.locations.find(l=>l.tasks.some(t=>!t.done&&t.priority==='P1')) || p.locations.find(l=>l.tasks.some(t=>!t.done));
  $('#main').innerHTML=`${firstOpen?`<div class="quick-next"><div class="section-title">Naechster sinnvoller Block</div><div class="big">${esc(firstOpen.name)}</div><div class="meta">${esc(firstOpen.date)} · ${esc(firstOpen.time)} · ${esc(firstOpen.address)}</div><div class="pillrow"><a class="btn small gold" target="_blank" href="${mapUrl(firstOpen.address)}">In Maps oeffnen</a><button class="btn small" onclick="jumpLocation('${firstOpen.id}')">Shotliste</button></div></div>`:''}<div class="card">${p.locations.map(l=>{const open=l.tasks.filter(t=>!t.done).length;return `<div class="route-card"><div class="route-time">${esc(l.date)}<br><small>${esc(l.time)}</small></div><div><b>${esc(l.name)}</b><br><small>${esc(l.address)}</small><br><small>${open} offen · ${esc(l.type||'')}</small></div><a class="btn small gold" target="_blank" href="${mapUrl(l.address)}">Maps</a></div>`}).join('')}</div>`}
function jumpLocation(id){currentTab='locations';currentFilter='open';searchTerm='';renderMain();setTimeout(()=>{const heads=[...document.querySelectorAll('.loc-head h3')]; const l=project().locations.find(x=>x.id===id); const h=heads.find(x=>x.textContent===l.name); if(h)h.closest('.location-card').scrollIntoView({behavior:'smooth'});},60)}
function renderMissing(){const p=project(); const open=allTasks(p).filter(x=>!x.done).sort((a,b)=>((a.priority==='P1'?0:a.priority==='P2'?1:2)-(b.priority==='P1'?0:b.priority==='P2'?1:2)));
  $('#main').innerHTML=`<div class="card"><div style="padding:14px"><h3 style="margin:0">Offene Shots (${open.length})</h3><div class="meta">P1 zuerst. Bonus erst, wenn Kernmaterial sitzt.</div></div>${open.map(x=>`<div class="missing-item"><b>${badgePriority(x.priority)} ${esc(x.text)}</b><span class="meta">${esc(x.location.name)} · ${esc(x.location.date)} ${esc(x.location.time)} ${x.mic?'· '+esc(x.mic):''}</span></div>`).join('')||'<div class="empty">Alles abgehakt.</div>'}</div>`}
function renderMaster(){const m=state.master;
  $('#main').innerHTML=`<div class="toolbar"><button class="btn primary" onclick="newFromMaster()">+ Neues Projekt aus Master</button><button class="btn" onclick="editMaster()">Master-Notiz bearbeiten</button></div><div class="master-grid"><div class="card master-box"><h3>Grundregeln</h3><ul>${m.locationCriteria.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="card master-box"><h3>Mic-Legende</h3>${Object.entries(m.micLegend).map(([k,v])=>`<div class="notes"><b>${esc(k)}</b><br>${esc(v)}</div>`).join('')}</div><div class="card master-box"><h3>Standard-Shotlist</h3><div class="tasks">${m.standardTasks.map(t=>`<div class="task"><span></span><div><div class="task-text">${esc(t.text)}</div><div class="task-meta">${badgePriority(t.priority)}${badgeMic(t.mic)}</div></div><span></span></div>`).join('')}</div></div><div class="card master-box"><h3>Field Recording</h3><ul>${m.soundIdeas.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div>`}
function renderFiles(){const p=project();
  $('#main').innerHTML=`<div class="card" style="padding:16px"><h3 style="margin-top:0">PDF & Datenaustausch</h3><p class="meta">Die App speichert deine Haken und Bearbeitungen lokal im Browser. Exportiere regelmaessig JSON als Backup.</p><div class="top-actions" style="justify-content:flex-start;margin:14px 0">${p.pdf?`<button class="btn primary" onclick="openPdf('${p.pdf}')">PDF in App oeffnen</button>`:''}<button class="btn" onclick="window.print()">Ansicht als PDF drucken</button><button class="btn" onclick="exportProject()">Projekt JSON exportieren</button><button class="btn" onclick="exportAll()">Alle Daten exportieren</button><label class="btn">JSON importieren<input id="jsonImport" type="file" accept="application/json" hidden></label><label class="btn">PDF anhaengen<input id="pdfUpload" type="file" accept="application/pdf" hidden></label></div><div id="attachmentInfo" class="notes">Zusaetzliche PDFs werden lokal im Browser (IndexedDB) am Projekt gespeichert.</div></div>`;
  $('#jsonImport').onchange=importJson; $('#pdfUpload').onchange=uploadPdf; renderAttachmentInfo();
}
async function renderAttachmentInfo(){const p=project(); const list=await attachmentList(p.id); const el=$('#attachmentInfo'); if(!el)return; el.innerHTML=`<b>Projekt-PDFs</b><br>${p.pdf?`• Gebuendelt: ${esc(p.pdf)}<br>`:''}${list.length?list.map(x=>`• ${esc(x.name)} <button class="btn small" onclick="openAttachment('${x.key}')">oeffnen</button>`).join('<br>'):'Keine hochgeladenen PDFs.'}`}
function openPdf(file){$('#pdfFrame').src=file;$('#pdfDialog').showModal()}
function editProject(){const p=project(); openForm('Projekt bearbeiten',[['Name','name',p.name],['Stadt','city',p.city],['Datum','dates',p.dates],['Untertitel','subtitle',p.subtitle],['Notizen','notes',p.notes,'textarea']],vals=>{Object.assign(p,vals);save()})}
function duplicateProject(){const p=clone(project());p.id=uid('project');p.name=p.name+' - Kopie';p.locations.forEach(l=>{l.id=uid('loc');l.tasks.forEach(t=>{t.id=uid('task');t.done=false})});state.projects.push(p);currentProjectId=p.id;save()}
function newFromMaster(){openForm('Neues Projekt aus Master',[['Projektname','name','Neuer Content-Trip'],['Stadt','city',''],['Datum','dates',''],['Untertitel','subtitle','']],v=>{const p={id:uid('project'),name:v.name,city:v.city,dates:v.dates,subtitle:v.subtitle,pdf:'',notes:'Aus Universal Master erzeugt.',locations:[{id:uid('loc'),date:'',time:'',name:'Location 1',address:v.city,type:'Hauptlocation',notes:'Adresse, Zeit und lokale Besonderheiten ergaenzen.',tasks:state.master.standardTasks.map(t=>({...clone(t),id:uid('task'),done:false}))}]};state.projects.push(p);currentProjectId=p.id;save()})}
function addLocation(){const p=project();openForm('Location hinzufuegen',[['Name','name',''],['Adresse','address',''],['Datum','date',''],['Uhrzeit','time',''],['Typ','type','Hauptlocation'],['Notizen','notes','', 'textarea']],v=>{p.locations.push({id:uid('loc'),...v,tasks:state.master.standardTasks.map(t=>({...clone(t),id:uid('task'),done:false}))});save()})}
function editLocation(id){const l=project().locations.find(x=>x.id===id);openForm('Location bearbeiten',[['Name','name',l.name],['Adresse','address',l.address],['Datum','date',l.date],['Uhrzeit','time',l.time],['Typ','type',l.type],['Notizen','notes',l.notes,'textarea']],v=>{Object.assign(l,v);save()},()=>{if(confirm('Location inklusive Shots loeschen?')){project().locations=project().locations.filter(x=>x.id!==id);save()}})}
function addTask(lid){const l=project().locations.find(x=>x.id===lid);openForm('Shot hinzufuegen',[['Shot','text',''],['Prioritaet','priority','P2','select',['P1','P2','BONUS']],['Mic','mic','MIC 0']],v=>{l.tasks.push({id:uid('task'),done:false,...v});save()})}
function editTask(lid,tid){const l=project().locations.find(x=>x.id===lid),t=l.tasks.find(x=>x.id===tid);openForm('Shot bearbeiten',[['Shot','text',t.text],['Prioritaet','priority',t.priority,'select',['P1','P2','BONUS']],['Mic','mic',t.mic]],v=>{Object.assign(t,v);save()},()=>{if(confirm('Shot loeschen?')){l.tasks=l.tasks.filter(x=>x.id!==tid);save()}})}
function editMaster(){openForm('Master bearbeiten',[['Beschreibung','description',state.master.description,'textarea']],v=>{state.master.description=v.description;save()})}
function openForm(title,fields,onSave,onDelete){const form=$('#editForm');$('#editTitle').textContent=title; form.innerHTML=''; fields.forEach(f=>{const [label,key,val,type='input',opts=[]]=f;const wrap=document.createElement('div');wrap.className='field '+(type==='textarea'?'full':'');wrap.innerHTML=`<label>${esc(label)}</label>`;let el;if(type==='textarea'){el=document.createElement('textarea');el.value=val||''}else if(type==='select'){el=document.createElement('select');opts.forEach(o=>{const op=document.createElement('option');op.value=o;op.textContent=o;if(o===val)op.selected=true;el.appendChild(op)})}else{el=document.createElement('input');el.value=val||''}el.dataset.key=key;wrap.appendChild(el);form.appendChild(wrap)});$('#deleteBtn').style.display=onDelete?'inline-flex':'none';$('#deleteBtn').onclick=()=>{onDelete?.();$('#editDialog').close()};$('#saveBtn').onclick=()=>{const vals={};form.querySelectorAll('[data-key]').forEach(el=>vals[el.dataset.key]=el.value);onSave(vals);$('#editDialog').close()};$('#editDialog').showModal()}
function exportBlob(obj,name){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function exportProject(){exportBlob(project(),(project().name||'blueprint').replace(/[^a-z0-9]+/gi,'_')+'.json')}
function exportAll(){exportBlob(state,'loewenblut_blueprint_backup.json')}
function importJson(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(x.projects&&x.master){state=x;currentProjectId=state.projects[0]?.id}else if(x.locations){x.id=x.id||uid('project');state.projects.push(x);currentProjectId=x.id}else throw new Error('Unbekanntes Format');save()}catch(err){alert('Import fehlgeschlagen: '+err.message)}};r.readAsText(f)}

// IndexedDB attachments
const DB='loewenblut-blueprint-files';
function dbOpen(){return new Promise((res,rej)=>{const q=indexedDB.open(DB,1);q.onupgradeneeded=()=>q.result.createObjectStore('files',{keyPath:'key'});q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})}
async function uploadPdf(e){const f=e.target.files[0];if(!f)return;const db=await dbOpen();const tx=db.transaction('files','readwrite');tx.objectStore('files').put({key:project().id+'::'+Date.now(),projectId:project().id,name:f.name,blob:f});await new Promise((r,j)=>{tx.oncomplete=r;tx.onerror=()=>j(tx.error)});renderAttachmentInfo()}
async function attachmentList(pid){try{const db=await dbOpen();const tx=db.transaction('files','readonly');const req=tx.objectStore('files').getAll();return await new Promise((res,rej)=>{req.onsuccess=()=>res(req.result.filter(x=>x.projectId===pid));req.onerror=()=>rej(req.error)})}catch(e){return []}}
async function openAttachment(key){const db=await dbOpen();const req=db.transaction('files','readonly').objectStore('files').get(key);req.onsuccess=()=>{if(req.result){const url=URL.createObjectURL(req.result.blob);$('#pdfFrame').src=url;$('#pdfDialog').showModal()}}}

$('#newProjectBtn').onclick=newFromMaster;
$('#exportBtn').onclick=exportAll;
$('#resetBtn').onclick=()=>{if(confirm('Alle lokalen Haken und Bearbeitungen auf Ausgangsstand zuruecksetzen?')){localStorage.removeItem(STORAGE);location.reload()}};
$('#closePdf').onclick=()=>{$('#pdfFrame').src='about:blank';$('#pdfDialog').close()};
$('#closeEdit').onclick=()=>$('#editDialog').close();
render();
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
