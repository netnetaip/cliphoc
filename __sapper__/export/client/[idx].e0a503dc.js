import{S as t,i,s as e,e as a,t as s,a as n,l,b as o,f as r,g as u,d as c,c as m,h as p,j as d,k as f,m as h,o as v,n as g,r as q,p as x,x as E,u as k,q as $,v as b,w,y,z as L,A as C,B as I,C as N,D as S,E as A}from"./client.6d85ea5e.js";import{I as _,f as j}from"./Image.12978ffc.js";function P(t){let i,e,x,E,k,$,b,w,y,L,C,I;return{c(){i=a("div"),e=a("a"),x=s("Open map"),E=n(),k=a("label"),$=a("input"),w=n(),y=l("svg"),L=l("path"),this.h()},l(t){i=o(t,"DIV",{class:!0});var a=r(i);e=o(a,"A",{href:!0,class:!0});var s=r(e);x=u(s,"Open map"),s.forEach(c),E=m(a),k=o(a,"LABEL",{class:!0});var n=r(k);$=o(n,"INPUT",{type:!0,value:!0,name:!0,"aria-pressed":!0,class:!0}),w=m(n),y=o(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var l=r(y);L=o(l,"path",{d:!0},1),r(L).forEach(c),l.forEach(c),n.forEach(c),a.forEach(c),this.h()},h(){p(e,"href",t[2]),p(e,"class","svelte-1nryng2"),p($,"type","checkbox"),$.__value=b=t[1].id,$.value=$.__value,p($,"name","save"),p($,"aria-pressed","false"),p($,"class","svelte-1nryng2"),p(L,"d","M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"),p(y,"xmlns","http://www.w3.org/2000/svg"),p(y,"width","24"),p(y,"height","24"),p(y,"viewBox","0 0 24 24"),p(y,"fill","none"),p(y,"stroke","#000000"),p(y,"stroke-width","2"),p(y,"stroke-linecap","round"),p(y,"stroke-linejoin","round"),p(y,"class","svelte-1nryng2"),p(k,"class","svelte-1nryng2"),p(i,"class","svelte-1nryng2")},m(a,s){d(a,i,s),f(i,e),f(e,x),f(i,E),f(i,k),f(k,$),$.checked=t[0],f(k,w),f(k,y),f(y,L),C||(I=[h($,"input",t[4]),h($,"click",(function(){v(t[3])&&t[3].apply(this,arguments)})),h($,"change",t[5])],C=!0)},p(i,[a]){t=i,4&a&&p(e,"href",t[2]),2&a&&b!==(b=t[1].id)&&($.__value=b,$.value=$.__value),1&a&&($.checked=t[0])},i:g,o:g,d(t){t&&c(i),C=!1,q(I)}}}function V(t,i,e){let{location:a}=i,{link:s}=i,{state:n=!1}=i;let l;return t.$$set=t=>{"location"in t&&e(1,a=t.location),"link"in t&&e(2,s=t.link),"state"in t&&e(0,n=t.state)},t.$$.update=()=>{2&t.$$.dirty&&(async()=>{if("undefined"!=typeof window)localStorage.getItem(a.id,"Saved")?e(0,n=!0):e(0,n=!1)})(),2&t.$$.dirty&&e(3,l=async()=>localStorage.getItem(a.id)?localStorage.removeItem(a.id,"Saved"):localStorage.setItem(a.id,"Saved"))},[n,a,s,l,()=>navigator.vibrate(10),function(){n=this.checked,e(0,n),e(1,a)}]}class M extends t{constructor(t){super(),i(this,t,V,P,e,{location:1,link:2,state:0})}}function B(t,i,e){const a=t.slice();return a[5]=i[e],a}function D(t){let i;return{c(){i=s("Toilet")},l(t){i=u(t,"Toilet")},m(t,e){d(t,i,e)},d(t){t&&c(i)}}}function H(t){let i;return{c(){i=s("Pets allowed")},l(t){i=u(t,"Pets allowed")},m(t,e){d(t,i,e)},d(t){t&&c(i)}}}function T(t){let i;return{c(){i=s("Paid services")},l(t){i=u(t,"Paid services")},m(t,e){d(t,i,e)},d(t){t&&c(i)}}}function O(t){let i;return{c(){i=s("Water source")},l(t){i=u(t,"Water source")},m(t,e){d(t,i,e)},d(t){t&&c(i)}}}function R(t){let i,e,s,u,h,v;function g(t,i){return"water"===t[5]?O:"fee"===t[5]?T:"pets"===t[5]?H:"wc"===t[5]?D:void 0}let q=g(t),x=q&&q(t);return{c(){i=a("li"),e=l("svg"),s=l("use"),h=n(),x&&x.c(),v=n(),this.h()},l(t){i=o(t,"LI",{class:!0});var a=r(i);e=o(a,"svg",{class:!0},1);var n=r(e);s=o(n,"use",{"xlink:href":!0},1),r(s).forEach(c),n.forEach(c),h=m(a),x&&x.l(a),v=m(a),a.forEach(c),this.h()},h(){E(s,"xlink:href",u="/sprite.svg#"+t[5]),p(e,"class","svelte-15ph354"),p(i,"class","svelte-15ph354")},m(t,a){d(t,i,a),f(i,e),f(e,s),f(i,h),x&&x.m(i,null),f(i,v)},p(t,e){1&e&&u!==(u="/sprite.svg#"+t[5])&&E(s,"xlink:href",u),q!==(q=g(t))&&(x&&x.d(1),x=q&&q(t),x&&(x.c(),x.m(i,v)))},d(t){t&&c(i),x&&x.d()}}}function z(t){let i,e,l,h,v,g,q,x,E,P,V,D,H,T,O,z,U,W,F,G,J,K,Q,X,Y,Z,tt=t[0].title+"",it=t[0].city+"";document.title=i=t[0].title,v=new _({props:{src:t[1],alt:t[2]}});let et=t[0].tags,at=[];for(let i=0;i<et.length;i+=1)at[i]=R(B(t,et,i));return X=new M({props:{location:t[0],link:t[3]}}),{c(){e=n(),l=a("aside"),h=a("div"),k(v.$$.fragment),g=n(),q=a("section"),x=a("header"),E=a("h1"),P=s(tt),V=n(),D=a("em"),H=s(it),T=n(),O=a("hr"),z=n(),U=a("ul");for(let t=0;t<at.length;t+=1)at[t].c();W=n(),F=a("hr"),G=n(),J=a("p"),K=s("Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\t\tvelit exercitation ea veniam minim mollit duis. Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\t\tvelit exercitation ea veniam minim mollit duis."),Q=n(),k(X.$$.fragment),this.h()},l(t){$('[data-svelte="svelte-12vbflh"]',document.head).forEach(c),e=m(t),l=o(t,"ASIDE",{class:!0});var i=r(l);h=o(i,"DIV",{class:!0});var a=r(h);b(v.$$.fragment,a),g=m(a),q=o(a,"SECTION",{});var s=r(q);x=o(s,"HEADER",{class:!0});var n=r(x);E=o(n,"H1",{});var p=r(E);P=u(p,tt),p.forEach(c),V=m(n),D=o(n,"EM",{});var d=r(D);H=u(d,it),d.forEach(c),n.forEach(c),T=m(s),O=o(s,"HR",{}),z=m(s),U=o(s,"UL",{class:!0});var f=r(U);for(let t=0;t<at.length;t+=1)at[t].l(f);f.forEach(c),W=m(s),F=o(s,"HR",{}),G=m(s),J=o(s,"P",{class:!0});var k=r(J);K=u(k,"Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\t\tvelit exercitation ea veniam minim mollit duis. Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.\n\t\t\t\tNulla ullamco ut nostrud Lorem quis officia dolore adipisicing.\n\t\t\t\tEx Lorem officia reprehenderit velit aute voluptate aliquip\n\t\t\t\texercitation in. Nulla anim ex amet do aliqua sunt laborum anim\n\t\t\t\tad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip\n\t\t\t\texcepteur. Elit irure sunt eu proident sit. Consectetur in\n\t\t\t\tconsectetur ex sint exercitation enim amet laboris nisi. Cillum\n\t\t\t\tesse non ut id quis aliquip duis amet officia eu irure aliquip\n\t\t\t\tsint quis. Magna voluptate dolor in esse aliqua esse adipisicing\n\t\t\t\tcommodo. Amet laboris id sit pariatur labore nostrud laborum\n\t\t\t\tvelit exercitation ea veniam minim mollit duis."),k.forEach(c),s.forEach(c),Q=m(a),b(X.$$.fragment,a),a.forEach(c),i.forEach(c),this.h()},h(){p(x,"class","svelte-15ph354"),p(U,"class","svelte-15ph354"),p(J,"class","svelte-15ph354"),p(h,"class","svelte-15ph354"),p(l,"class","svelte-15ph354")},m(t,i){d(t,e,i),d(t,l,i),f(l,h),w(v,h,null),f(h,g),f(h,q),f(q,x),f(x,E),f(E,P),f(x,V),f(x,D),f(D,H),f(q,T),f(q,O),f(q,z),f(q,U);for(let t=0;t<at.length;t+=1)at[t].m(U,null);f(q,W),f(q,F),f(q,G),f(q,J),f(J,K),f(h,Q),w(X,h,null),Z=!0},p(t,[e]){(!Z||1&e)&&i!==(i=t[0].title)&&(document.title=i);const a={};if(2&e&&(a.src=t[1]),4&e&&(a.alt=t[2]),v.$set(a),(!Z||1&e)&&tt!==(tt=t[0].title+"")&&y(P,tt),(!Z||1&e)&&it!==(it=t[0].city+"")&&y(H,it),1&e){let i;for(et=t[0].tags,i=0;i<et.length;i+=1){const a=B(t,et,i);at[i]?at[i].p(a,e):(at[i]=R(a),at[i].c(),at[i].m(U,null))}for(;i<at.length;i+=1)at[i].d(1);at.length=et.length}const s={};1&e&&(s.location=t[0]),8&e&&(s.link=t[3]),X.$set(s)},i(t){Z||(L(v.$$.fragment,t),L(X.$$.fragment,t),Y||S(()=>{Y=A(l,j,{duration:320,y:40,opacity:1}),Y.start()}),Z=!0)},o(t){C(v.$$.fragment,t),C(X.$$.fragment,t),Z=!1},d(t){t&&c(e),t&&c(l),I(v),N(at,t),I(X)}}}async function U(t,i){const{idx:e}=t.params,a="https://5fdd171448321c00170126f7.mockapi.io/locations/"+e,s=await this.fetch(a);if(200===s.status){return{location:await s.json()}}this.error(500,"Problems with server. Be right back soon ;)")}function W(t,i,e){let{location:a}=i,{src:s=a.img}=i,{alt:n=a.title}=i,{link:l="javascript:;"}=i;return t.$$set=t=>{"location"in t&&e(0,a=t.location),"src"in t&&e(1,s=t.src),"alt"in t&&e(2,n=t.alt),"link"in t&&e(3,l=t.link)},[a,s,n,l]}export default class extends t{constructor(t){super(),i(this,t,W,z,x,{location:0,src:1,alt:2,link:3})}}export{U as preload};
