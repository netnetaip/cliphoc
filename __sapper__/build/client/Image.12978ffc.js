import{S as t,i as s,s as a,e as n,b as r,h as e,F as c,j as i,n as o,d as l,G as u,H as d}from"./client.6d85ea5e.js";function h(t){const s=t-1;return s*s*s+1}function f(t,{delay:s=0,duration:a=400,easing:n=h,x:r=0,y:e=0,opacity:c=0}){const i=getComputedStyle(t),o=+i.opacity,l="none"===i.transform?"":i.transform,u=o*(1-c);return{delay:s,duration:a,easing:n,css:(t,s)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*e}px);\n\t\t\topacity: ${o-u*s}`}}function p(t){let s,a;return{c(){s=n("img"),this.h()},l(t){s=r(t,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),this.h()},h(){s.src!==(a=t[0])&&e(s,"src",a),e(s,"alt",t[1]),e(s,"height","144"),e(s,"width","144"),e(s,"class","svelte-1ke4t62"),c(s,"loaded",t[2])},m(a,n){i(a,s,n),t[4](s)},p(t,[n]){1&n&&s.src!==(a=t[0])&&e(s,"src",a),2&n&&e(s,"alt",t[1]),4&n&&c(s,"loaded",t[2])},i:o,o:o,d(a){a&&l(s),t[4](null)}}}function m(t,s,a){let n,{src:r}=s,{alt:e}=s,c=!1;return u(()=>{a(3,n.onload=()=>{a(2,c=!0)},n)}),t.$$set=t=>{"src"in t&&a(0,r=t.src),"alt"in t&&a(1,e=t.alt)},[r,e,c,n,function(t){d[t?"unshift":"push"](()=>{n=t,a(3,n)})}]}class y extends t{constructor(t){super(),s(this,t,m,p,a,{src:0,alt:1})}}export{y as I,f};