const C='lb-blueprint-v4-0-github';
const CORE=['./','./index.html','./styles.css?v=4.0','./data.js?v=4.0','./app.js?v=4.0','./manifest.webmanifest?v=4.0','./icon.svg'];
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