!function(){"use strict";const e=["/client/index.19619d2a.js","/client/Image.12978ffc.js","/client/browse.eec24149.js","/client/[idx].e0a503dc.js","/client/Figure.723e67aa.js","/client/saved.fc0413fe.js","/client/client.6d85ea5e.js"].concat(["/service-worker-index.html","/.DS_Store","/font/.DS_Store","/font/Gilroy-Medium.woff","/font/Gilroy-SemiBold.woff","/images/.DS_Store","/manifest.json","/sprite.svg","/view.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1609978151789").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609978151789"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1609978151789").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
