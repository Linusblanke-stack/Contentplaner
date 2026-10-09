const C='lb-blueprint-v3-7-github';
const CORE=['./','./index.html','./styles.css?v=3.5','./data.js?v=3.5','./app.js?v=3.5','./manifest.webmanifest?v=3.5','./icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  const appAsset=u.origin===location.origin && (u.pathname.endsWith('/')||/\/(index\.html|app\.js|data\.js|styles\.css|manifest\.webmanifest)$/.test(u.pathname));
  if(appAsset){
    e.respondWith((async()=>{try{const n=await fetch(e.request,{cache:'no-store'});const c=await caches.open(C);c.put(e.request,n.clone());return n}catch(err){return (await caches.match(e.request))||caches.match('./index.html')}})());
  }else{
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});