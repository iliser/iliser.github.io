import{S as t,i as s,s as a,a as e,e as o,t as n,v as i,h as r,f as l,b as c,d as u,g as h,x as f,j as p,k as d,o as m,D as v}from"./client.904e5c4e.js";function g(t){let s,a,g,x,j,y,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=o("h1"),x=n(E),j=e(),y=o("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),g=c(t,"H1",{});var s=u(g);x=h(s,E),s.forEach(r),j=l(t),y=c(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){f(y,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,g,s),d(g,x),p(t,j,s),p(t,y,s),y.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&m(x,E),1&a&&H!==(H=t[0].html+"")&&(y.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(j),t&&r(y)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,j,g,a,{post:0})}}export{x as preload};
