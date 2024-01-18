var Ke=Object.defineProperty;var Qe=(t,e,n)=>e in t?Ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var z=(t,e,n)=>(Qe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function O(){}const He=t=>t;function Ue(t){return t()}function $e(){return Object.create(null)}function Q(t){t.forEach(Ue)}function be(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ie;function ke(t,e){return t===e?!0:(ie||(ie=document.createElement("a")),ie.href=e,t===ie.href)}function Ge(t){return Object.keys(t).length===0}function ve(t){return t??""}const Be=typeof window<"u";let Ve=Be?()=>window.performance.now():()=>Date.now(),ye=Be?t=>requestAnimationFrame(t):O;const Y=new Set;function Re(t){Y.forEach(e=>{e.c(t)||(Y.delete(e),e.f())}),Y.size!==0&&ye(Re)}function Je(t){let e;return Y.size===0&&ye(Re),{promise:new Promise(n=>{Y.add(e={c:t,f:n})}),abort(){Y.delete(e)}}}function d(t,e){t.appendChild(e)}function je(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ye(t){const e=v("style");return e.textContent="/* empty */",Ze(je(t),e),e.sheet}function Ze(t,e){return d(t.head||t,e),e.sheet}function I(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function Xe(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function S(){return T(" ")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}function ge(t,e){t.value=e??""}function J(t,e,n){t.classList.toggle(e,!!n)}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class nt{constructor(e=!1){z(this,"is_svg",!1);z(this,"e");z(this,"n");z(this,"t");z(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Xe(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)I(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}const oe=new Map;let ae=0;function it(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function lt(t,e){const n={stylesheet:Ye(e),rules:{}};return oe.set(t,n),n}function qe(t,e,n,i,l,r,s,c=0){const a=16.666/i;let o=`{
`;for(let p=0;p<=1;p+=a){const $=e+(n-e)*r(p);o+=p*100+`%{${s($,1-$)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,g=`__svelte_${it(f)}_${c}`,y=je(t),{stylesheet:b,rules:u}=oe.get(y)||lt(y,t);u[g]||(u[g]=!0,b.insertRule(`@keyframes ${g} ${f}`,b.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${g} ${i}ms linear ${l}ms 1 both`,ae+=1,g}function st(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),l=n.length-i.length;l&&(t.style.animation=i.join(", "),ae-=l,ae||rt())}function rt(){ye(()=>{ae||(oe.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),oe.clear())})}let we;function ne(t){we=t}const V=[],Ce=[];let Z=[];const Se=[],ot=Promise.resolve();let _e=!1;function at(){_e||(_e=!0,ot.then(We))}function K(t){Z.push(t)}const he=new Set;let G=0;function We(){if(G!==0)return;const t=we;do{try{for(;G<V.length;){const e=V[G];G++,ne(e),ct(e.$$)}}catch(e){throw V.length=0,G=0,e}for(ne(null),V.length=0,G=0;Ce.length;)Ce.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];he.has(n)||(he.add(n),n())}Z.length=0}while(V.length);for(;Se.length;)Se.pop()();_e=!1,he.clear(),ne(t)}function ct(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function ut(t){const e=[],n=[];Z.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),Z=e}let te;function ft(){return te||(te=Promise.resolve(),te.then(()=>{te=null})),te}function pe(t,e,n){t.dispatchEvent(tt(`${e?"intro":"outro"}${n}`))}const le=new Set;let F;function fe(){F={r:0,c:[],p:F}}function de(){F.r||Q(F.c),F=F.p}function N(t,e){t&&t.i&&(le.delete(t),t.i(e))}function x(t,e,n,i){if(t&&t.o){if(le.has(t))return;le.add(t),F.c.push(()=>{le.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function X(t,e,n,i){let r=e(t,n,{direction:"both"}),s=i?0:1,c=null,a=null,o=null,f;function g(){o&&st(t,o)}function y(u,m){const p=u.b-s;return m*=Math.abs(p),{a:s,b:u.b,d:p,duration:m,start:u.start,end:u.start+m,group:u.group}}function b(u){const{delay:m=0,duration:p=300,easing:$=He,tick:L=O,css:k}=r||dt,q={start:Ve()+m,b:u};u||(q.group=F,F.r+=1),"inert"in t&&(u?f!==void 0&&(t.inert=f):(f=t.inert,t.inert=!0)),c||a?a=q:(k&&(g(),o=qe(t,s,u,p,m,$,k)),u&&L(0,1),c=y(q,p),K(()=>pe(t,u,"start")),Je(C=>{if(a&&C>a.start&&(c=y(a,p),a=null,pe(t,c.b,"start"),k&&(g(),o=qe(t,s,c.b,c.duration,0,$,r.css))),c){if(C>=c.end)L(s=c.b,1-s),pe(t,c.b,"end"),a||(c.b?g():--c.group.r||Q(c.group.c)),c=null;else if(C>=c.start){const w=C-c.start;s=c.a+c.d*$(w/c.duration),L(s,1-s)}}return!!(c||a)}))}return{run(u){be(r)?ft().then(()=>{r=r({direction:u?"in":"out"}),b(u)}):b(u)},end(){g(),c=a=null}}}function H(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function B(t){t&&t.c()}function P(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),K(()=>{const r=t.$$.on_mount.map(Ue).filter(be);t.$$.on_destroy?t.$$.on_destroy.push(...r):Q(r),t.$$.on_mount=[]}),l.forEach(K)}function D(t,e){const n=t.$$;n.fragment!==null&&(ut(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(V.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,e,n,i,l,r,s=null,c=[-1]){const a=we;ne(t);const o=t.$$={fragment:null,ctx:[],props:r,update:O,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:$e(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(g,y,...b)=>{const u=b.length?b[0]:y;return o.ctx&&l(o.ctx[g],o.ctx[g]=u)&&(!o.skip_bound&&o.bound[g]&&o.bound[g](u),f&&mt(t,g)),y}):[],o.update(),f=!0,Q(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){const g=et(e.target);o.fragment&&o.fragment.l(g),g.forEach(A)}else o.fragment&&o.fragment.c();e.intro&&N(t.$$.fragment),P(t,e.target,e.anchor),We()}ne(a)}class W{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){D(this,1),this.$destroy=O}$on(e,n){if(!be(n))return O;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Ge(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);const pt=""+new URL("../medito-logo.svg",import.meta.url).href;function Oe(t,e,n){const i=t.slice();return i[7]=e[n],i}function Ae(t){let e,n=t[7].label+"",i,l,r;return{c(){e=v("a"),i=T(n),h(e,"href",t[7].href),h(e,"class",ve(t[7].class)+" svelte-10aiwt")},m(s,c){I(s,e,c),d(e,i),l||(r=U(e,"click",t[6]),l=!0)},p:O,d(s){s&&A(e),l=!1,r()}}}function vt(t){let e,n,i,l,r,s,c,a,o,f,g,y=H(t[4]),b=[];for(let u=0;u<y.length;u+=1)b[u]=Ae(Oe(t,y,u));return{c(){e=v("nav"),n=v("div"),i=v("a"),l=v("img"),s=S(),c=v("div");for(let u=0;u<b.length;u+=1)b[u].c();a=S(),o=v("button"),o.innerHTML='<span class="bar svelte-10aiwt"></span> <span class="bar svelte-10aiwt"></span> <span class="bar svelte-10aiwt"></span>',ke(l.src,r=t[0])||h(l,"src",r),h(l,"class","logo svelte-10aiwt"),h(l,"alt","company logo"),h(i,"href",t[1]),h(i,"class","logo-container svelte-10aiwt"),h(n,"class","nav-branding svelte-10aiwt"),h(c,"class","nav-menu svelte-10aiwt"),J(c,"active",t[3]),h(o,"class","hamburger svelte-10aiwt"),h(o,"aria-hidden","true"),J(o,"active",t[2]),h(e,"class","nav-bar svelte-10aiwt")},m(u,m){I(u,e,m),d(e,n),d(n,i),d(i,l),d(e,s),d(e,c);for(let p=0;p<b.length;p+=1)b[p]&&b[p].m(c,null);d(e,a),d(e,o),f||(g=U(o,"click",t[5]),f=!0)},p(u,[m]){if(m&1&&!ke(l.src,r=u[0])&&h(l,"src",r),m&2&&h(i,"href",u[1]),m&80){y=H(u[4]);let p;for(p=0;p<y.length;p+=1){const $=Oe(u,y,p);b[p]?b[p].p($,m):(b[p]=Ae($),b[p].c(),b[p].m(c,null))}for(;p<b.length;p+=1)b[p].d(1);b.length=y.length}m&8&&J(c,"active",u[3]),m&4&&J(o,"active",u[2])},i:O,o:O,d(u){u&&A(e),se(b,u),f=!1,g()}}}function gt(t,e,n){let{logo_src:i}=e,{logo_url:l}=e;const r=[{label:"Home",href:"#",class:"nav-link"},{label:"About",href:"#",class:"nav-link"},{label:"Contact",href:"#",class:"nav-link"},{label:"Donate",href:"#",class:"nav-link donate-button"}];let s=!1,c=!1;function a(){n(2,s=!s),n(3,c=!c)}function o(){n(2,s=!1),n(3,c=!1)}return t.$$set=f=>{"logo_src"in f&&n(0,i=f.logo_src),"logo_url"in f&&n(1,l=f.logo_url)},[i,l,s,c,r,a,o]}class _t extends W{constructor(e){super(),j(this,e,gt,vt,R,{logo_src:0,logo_url:1})}}function bt(t){const e=t-1;return e*e*e+1}function ce(t){return--t*t*t*t*t+1}function Le(t,{delay:e=0,duration:n=400,easing:i=He}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:r=>`opacity: ${r*l}`}}function ue(t,{delay:e=0,duration:n=400,easing:i=bt,axis:l="y"}={}){const r=getComputedStyle(t),s=+r.opacity,c=l==="y"?"height":"width",a=parseFloat(r[c]),o=l==="y"?["top","bottom"]:["left","right"],f=o.map($=>`${$[0].toUpperCase()}${$.slice(1)}`),g=parseFloat(r[`padding${f[0]}`]),y=parseFloat(r[`padding${f[1]}`]),b=parseFloat(r[`margin${f[0]}`]),u=parseFloat(r[`margin${f[1]}`]),m=parseFloat(r[`border${f[0]}Width`]),p=parseFloat(r[`border${f[1]}Width`]);return{delay:e,duration:n,easing:i,css:$=>`overflow: hidden;opacity: ${Math.min($*20,1)*s};${c}: ${$*a}px;padding-${o[0]}: ${$*g}px;padding-${o[1]}: ${$*y}px;margin-${o[0]}: ${$*b}px;margin-${o[1]}: ${$*u}px;border-${o[0]}-width: ${$*m}px;border-${o[1]}-width: ${$*p}px;`}}function Ee(t,e,n){const i=t.slice();return i[12]=e[n],i}function Me(t,e,n){const i=t.slice();return i[15]=e[n],i[17]=n,i}function Ie(t){let e,n,i,l,r,s,c=t[15].name+"",a,o,f,g,y,b=t[15].minimum.toString()+"",u,m,p,$;function L(){return t[7](t[17])}return{c(){e=v("button"),n=v("i"),l=S(),r=v("div"),s=v("span"),a=T(c),o=S(),f=v("p"),g=T("The minimum for this tier is "),y=new nt(!1),u=T(b),m=S(),h(n,"class",i=ve(t[15].icon)+" svelte-126v7f4"),h(s,"class","svelte-126v7f4"),y.a=u,h(f,"class","svelte-126v7f4"),h(r,"class","reward-desc svelte-126v7f4"),h(e,"class","reward svelte-126v7f4"),J(e,"active",t[15].isSelected)},m(k,q){I(k,e,q),d(e,n),d(e,l),d(e,r),d(r,s),d(s,a),d(r,o),d(r,f),d(f,g),y.m(t[2],f),d(f,u),d(e,m),p||($=U(e,"click",L),p=!0)},p(k,q){t=k,q&1&&i!==(i=ve(t[15].icon)+" svelte-126v7f4")&&h(n,"class",i),q&1&&c!==(c=t[15].name+"")&&re(a,c),q&4&&y.p(t[2]),q&1&&b!==(b=t[15].minimum.toString()+"")&&re(u,b),q&1&&J(e,"active",t[15].isSelected)},d(k){k&&A(e),p=!1,$()}}}function Ne(t){let e,n=t[12].name+"",i;return{c(){e=v("option"),i=T(n),e.__value=t[12].name,ge(e,e.__value)},m(l,r){I(l,e,r),d(e,i)},p:O,d(l){l&&A(e)}}}function yt(t){let e,n,i,l,r,s,c,a,o,f,g,y,b,u,m,p,$,L=H(t[0]),k=[];for(let w=0;w<L.length;w+=1)k[w]=Ie(Me(t,L,w));let q=H(t[3]),C=[];for(let w=0;w<q.length;w+=1)C[w]=Ne(Ee(t,q,w));return{c(){e=v("div"),n=v("h4"),n.textContent="Rewards",i=S(),l=v("div");for(let w=0;w<k.length;w+=1)k[w].c();r=S(),s=v("h4"),s.textContent="Donation amount",c=S(),a=v("div"),o=v("div"),f=v("label"),g=S(),y=v("select");for(let w=0;w<C.length;w+=1)C[w].c();b=S(),u=v("div"),m=v("input"),h(n,"class","svelte-126v7f4"),h(l,"class","rewards-container svelte-126v7f4"),h(s,"class","svelte-126v7f4"),h(f,"for","currency-dropdown"),h(f,"class","currency-label svelte-126v7f4"),h(y,"class","currency-dropdown svelte-126v7f4"),h(y,"name","currency"),h(o,"class","currency-container svelte-126v7f4"),h(m,"type","text"),h(m,"class","input-amount svelte-126v7f4"),h(m,"placeholder","0"),h(u,"class","input-container svelte-126v7f4"),h(a,"class","donation-container svelte-126v7f4"),h(e,"class","panel-container")},m(w,E){I(w,e,E),d(e,n),d(e,i),d(e,l);for(let _=0;_<k.length;_+=1)k[_]&&k[_].m(l,null);d(e,r),d(e,s),d(e,c),d(e,a),d(a,o),d(o,f),f.innerHTML=t[2],d(o,g),d(o,y);for(let _=0;_<C.length;_+=1)C[_]&&C[_].m(y,null);d(a,b),d(a,u),d(u,m),ge(m,t[1]),p||($=[U(y,"change",t[5]),U(m,"input",t[8]),U(m,"input",t[6])],p=!0)},p(w,[E]){if(E&21){L=H(w[0]);let _;for(_=0;_<L.length;_+=1){const M=Me(w,L,_);k[_]?k[_].p(M,E):(k[_]=Ie(M),k[_].c(),k[_].m(l,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=L.length}if(E&4&&(f.innerHTML=w[2]),E&8){q=H(w[3]);let _;for(_=0;_<q.length;_+=1){const M=Ee(w,q,_);C[_]?C[_].p(M,E):(C[_]=Ne(M),C[_].c(),C[_].m(y,null))}for(;_<C.length;_+=1)C[_].d(1);C.length=q.length}E&2&&m.value!==w[1]&&ge(m,w[1])},i:O,o:O,d(w){w&&A(e),se(k,w),se(C,w),p=!1,Q($)}}}function wt(t,e,n){let i=[{name:"Diamond",minimum:100,icon:"fa-solid fa-gem",isSelected:!1},{name:"Gold",minimum:50,icon:"fa-solid fa-sack-dollar",isSelected:!1},{name:"Iron",minimum:1,icon:"fa-solid fa-coins",isSelected:!1}],l=[{name:"USD",icon:"&#36;"},{name:"EUR",icon:"&#8364;"},{name:"CAD",icon:"&#36;"},{name:"GBP",icon:"&#163;"},{name:"AUD",icon:"&#36;"}],r;function s(u){n(0,i[u].isSelected=!0,i),n(1,r=i[u].minimum),i[u].minimum;for(let m=0;m<i.length;m++)m!==u&&n(0,i[m].isSelected=!1,i)}let c=l[0].name,a=l[0].icon;function o(u){c=u.target.value,n(2,a=f())}function f(){if(c){const u=l.find(m=>m.name===c);return u?u.icon:l[0].icon}else return l[0].icon}function g(u){let m=u.target.value;m=m.replace(/[^\d.]/g,""),m.split(".").length-1>1&&(m=m.slice(0,m.lastIndexOf("."))),n(1,r=m)}const y=u=>s(u);function b(){r=this.value,n(1,r)}return[i,r,a,l,s,o,g,y,b]}class $t extends W{constructor(e){super(),j(this,e,wt,yt,R,{})}}function kt(t){let e,n,i,l,r;return{c(){e=v("button"),e.textContent="Donate",h(e,"class","donate-button")},m(s,c){I(s,e,c),i=!0,l||(r=U(e,"click",t[5]),l=!0)},p:O,i(s){i||(s&&K(()=>{i&&(n||(n=X(e,Le,{delay:0,duration:20},!0)),n.run(1))}),i=!0)},o(s){s&&(n||(n=X(e,Le,{delay:0,duration:20},!1)),n.run(0)),i=!1},d(s){s&&A(e),s&&n&&n.end(),l=!1,r()}}}function qt(t){let e,n,i,l,r,s,c;return n=new $t({}),{c(){e=v("div"),B(n.$$.fragment),i=S(),l=v("a"),r=T("Continue"),h(l,"class","donate-button"),h(l,"href",St),h(e,"class","donation-panel svelte-1smivvf")},m(a,o){I(a,e,o),P(n,e,null),d(e,i),d(e,l),d(l,r),c=!0},p:O,i(a){c||(N(n.$$.fragment,a),a&&K(()=>{c&&(s||(s=X(e,ue,{delay:0,duration:700,easing:ce,axis:"y"},!0)),s.run(1))}),c=!0)},o(a){x(n.$$.fragment,a),a&&(s||(s=X(e,ue,{delay:0,duration:700,easing:ce,axis:"y"},!1)),s.run(0)),c=!1},d(a){a&&A(e),D(n),a&&s&&s.end()}}}function Ct(t){let e,n,i,l,r,s,c,a,o,f,g,y,b,u,m,p,$,L,k,q,C;const w=[qt,kt],E=[];function _(M,ee){return M[0]?0:1}return k=_(t),q=E[k]=w[k](t),{c(){e=v("div"),n=v("div"),i=v("div"),l=v("h2"),r=T(t[1]),s=S(),c=v("span"),c.textContent=`raised of ${t[2]} goal!`,a=S(),o=v("div"),o.innerHTML='<div class="progress-bar svelte-1smivvf"></div>',f=S(),g=v("div"),y=v("h3"),y.textContent=`${t[4].toString()}% Complete`,b=S(),u=v("h3"),u.textContent=`${t[3]} donations`,m=S(),p=v("div"),$=v("div"),$.textContent="Share",L=S(),q.c(),h(c,"class","subtext svelte-1smivvf"),h(l,"class","small-title"),h(i,"class","goal-numbers svelte-1smivvf"),h(o,"class","progress-bar-container svelte-1smivvf"),h(y,"class","progress-percent svelte-1smivvf"),h(u,"class","subtext svelte-1smivvf"),h(g,"class","donation-numbers svelte-1smivvf"),h($,"class","share-button"),h(p,"class","button-container"),h(n,"class","goal-content svelte-1smivvf"),h(e,"class","goal-progress-container svelte-1smivvf")},m(M,ee){I(M,e,ee),d(e,n),d(n,i),d(i,l),d(l,r),d(l,s),d(l,c),d(n,a),d(n,o),d(n,f),d(n,g),d(g,y),d(g,b),d(g,u),d(n,m),d(n,p),d(p,$),d(p,L),E[k].m(p,null),C=!0},p(M,[ee]){let me=k;k=_(M),k===me?E[k].p(M,ee):(fe(),x(E[me],1,1,()=>{E[me]=null}),de(),q=E[k],q?q.p(M,ee):(q=E[k]=w[k](M),q.c()),N(q,1),q.m(p,null))},i(M){C||(N(q),C=!0)},o(M){x(q),C=!1},d(M){M&&A(e),E[k].d()}}}let St="https://buy.stripe.com/9AQ5lY0eP7tE4x24gg";const xe=34e3,Te=55e3,Ot=1420;function At(t,e,n){let i=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),l=i.format(xe),r=i.format(Te),s=Ot;const c=Math.floor(xe/Te*100);function a(){document.querySelectorAll(".progress-bar").forEach(function(y){y.style.width=`${c}%`})}let o=!1;function f(){n(0,o=!0)}return document.addEventListener("DOMContentLoaded",()=>{a()}),[o,l,r,s,c,f]}class Fe extends W{constructor(e){super(),j(this,e,At,Ct,R,{})}}function Lt(t){let e;return{c(){e=v("form"),e.innerHTML='<div class="input-container svelte-149axsi"><label for="name">Name</label> <input type="text" id="name" name="name" placeholder="John Smith" required="" class="svelte-149axsi"/></div> <div class="input-container svelte-149axsi"><label for="mail">Email Address<sup>*</sup></label> <input type="email" id="mail" name="mail" placeholder="johnsmith@email.com" required="" class="svelte-149axsi"/> <span class="svelte-149axsi"><sup>*</sup>Your email address is required to prevent spam and allow follow up queries</span></div> <div class="input-container svelte-149axsi"><label for="new-faq-question">Question</label> <textarea id="new-faq-question" name="new-faq-question" placeholder="Write your question..." class="svelte-149axsi"></textarea></div> <input type="submit" class="submit-button svelte-149axsi" value="Submit"/>',h(e,"class","svelte-149axsi")},m(n,i){I(n,e,i)},p:O,i:O,o:O,d(n){n&&A(e)}}}class Et extends W{constructor(e){super(),j(this,e,null,Lt,R,{})}}function Pe(t,e,n){const i=t.slice();return i[3]=e[n],i[5]=n,i}function Mt(t){let e;return{c(){e=v("i"),h(e,"class","fa-solid fa-chevron-down svelte-1mu2nh4")},m(n,i){I(n,e,i)},d(n){n&&A(e)}}}function It(t){let e;return{c(){e=v("i"),h(e,"class","fa-solid fa-chevron-up svelte-1mu2nh4")},m(n,i){I(n,e,i)},d(n){n&&A(e)}}}function De(t){let e,n,i,l,r;const s=[xt,Nt],c=[];function a(o,f){return o[3].answer=="FORM"?0:1}return n=a(t),i=c[n]=s[n](t),{c(){e=v("div"),i.c(),h(e,"class","answer svelte-1mu2nh4")},m(o,f){I(o,e,f),c[n].m(e,null),r=!0},p(o,f){let g=n;n=a(o),n===g?c[n].p(o,f):(fe(),x(c[g],1,1,()=>{c[g]=null}),de(),i=c[n],i?i.p(o,f):(i=c[n]=s[n](o),i.c()),N(i,1),i.m(e,null))},i(o){r||(N(i),o&&K(()=>{r&&(l||(l=X(e,ue,{delay:0,duration:500,easing:ce,axis:"y"},!0)),l.run(1))}),r=!0)},o(o){x(i),o&&(l||(l=X(e,ue,{delay:0,duration:500,easing:ce,axis:"y"},!1)),l.run(0)),r=!1},d(o){o&&A(e),c[n].d(),o&&l&&l.end()}}}function Nt(t){let e=t[3].answer+"",n;return{c(){n=T(e)},m(i,l){I(i,n,l)},p(i,l){l&1&&e!==(e=i[3].answer+"")&&re(n,e)},i:O,o:O,d(i){i&&A(n)}}}function xt(t){let e,n;return e=new Et({}),{c(){B(e.$$.fragment)},m(i,l){P(e,i,l),n=!0},p:O,i(i){n||(N(e.$$.fragment,i),n=!0)},o(i){x(e.$$.fragment,i),n=!1},d(i){D(e,i)}}}function ze(t){let e,n,i=t[3].question+"",l,r,s,c,a,o,f;function g(p,$){return p[3].isOpen?It:Mt}let y=g(t),b=y(t);function u(){return t[2](t[5])}let m=t[3].isOpen&&De(t);return{c(){e=v("div"),n=v("button"),l=T(i),r=S(),b.c(),s=S(),m&&m.c(),c=S(),h(n,"class","question svelte-1mu2nh4"),h(e,"class","faq-item svelte-1mu2nh4")},m(p,$){I(p,e,$),d(e,n),d(n,l),d(n,r),b.m(n,null),d(e,s),m&&m.m(e,null),d(e,c),a=!0,o||(f=U(n,"click",u),o=!0)},p(p,$){t=p,(!a||$&1)&&i!==(i=t[3].question+"")&&re(l,i),y!==(y=g(t))&&(b.d(1),b=y(t),b&&(b.c(),b.m(n,null))),t[3].isOpen?m?(m.p(t,$),$&1&&N(m,1)):(m=De(t),m.c(),N(m,1),m.m(e,c)):m&&(fe(),x(m,1,1,()=>{m=null}),de())},i(p){a||(N(m),a=!0)},o(p){x(m),a=!1},d(p){p&&A(e),b.d(),m&&m.d(),o=!1,f()}}}function Tt(t){let e,n,i,l,r=H(t[0]),s=[];for(let a=0;a<r.length;a+=1)s[a]=ze(Pe(t,r,a));const c=a=>x(s[a],1,1,()=>{s[a]=null});return{c(){e=v("div"),n=v("h3"),n.textContent="Frequently Asked Questions:",i=S();for(let a=0;a<s.length;a+=1)s[a].c();h(n,"class","small-title"),h(e,"class","faq-container svelte-1mu2nh4")},m(a,o){I(a,e,o),d(e,n),d(e,i);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(e,null);l=!0},p(a,[o]){if(o&3){r=H(a[0]);let f;for(f=0;f<r.length;f+=1){const g=Pe(a,r,f);s[f]?(s[f].p(g,o),N(s[f],1)):(s[f]=ze(g),s[f].c(),N(s[f],1),s[f].m(e,null))}for(fe(),f=r.length;f<s.length;f+=1)c(f);de()}},i(a){if(!l){for(let o=0;o<r.length;o+=1)N(s[o]);l=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)x(s[o]);l=!1},d(a){a&&A(e),se(s,a)}}}function Ft(t,e,n){let i=[{isOpen:!1,question:"How are ebooks delivered?",answer:"I've partnered with Sendowl for ebook delivery; after the campaign closes, you'll get a survey asking you for an email address to send your download code to. Note: If you use Apple's Private Relay service for email, you must provide an alternative email address for delivery when you fill in your survey. By design, these email addresses only work with one service. The address you provide to Kickstarter won't work with Sendowl or Libro.fm!"},{isOpen:!1,question:"How are audiobooks delivered?",answer:"I've partnered with the great Libro.fm to make it easier for people who don't want to wrangle sideloading their own media. If you choose Libro.fm for audiobook delivery, you'll get a download code by email. Just install the Libro app (for iOS or Android), enter the code, and the book will show up in your account (Libro also lets you download all the books in your library as MP3s)."},{isOpen:!1,question:"Where do signed books ship from?",answer:"Signed books get fulfilled by LA's Book Soup/Vroman's, a superb, independent bookseller. I drop by to sign books there once per week, and they ship all over the world for me. Non-US buyers may have the pay customs charges when these books arrive."},{isOpen:!1,question:"Will I get the US or UK covers on my print books?",answer:"Backers in Canada and the USA will get the US cover. from Tor Books. All other backers will get the UK cover, from Head of Zeus."},{isOpen:!1,question:"Have another question?",answer:"FORM"}];function l(s){n(0,i[s].isOpen=!i[s].isOpen,i)}return[i,l,s=>l(s)]}class Pt extends W{constructor(e){super(),j(this,e,Ft,Tt,R,{})}}const Dt=""+new URL("fundraiser-photo-cgbyRSa3.jpg",import.meta.url).href;function zt(t){let e,n,i,l,r,s,c,a,o,f,g,y,b,u,m,p,$,L,k,q,C,w,E;return o=new Fe({}),L=new Pt({}),w=new Fe({}),{c(){e=v("div"),n=v("h1"),n.textContent=`${Ht}`,i=S(),l=v("div"),r=v("div"),s=v("div"),s.innerHTML=`<img src="${Dt}" alt="fundraiser" class="svelte-1awzinq"/>`,c=S(),a=v("div"),B(o.$$.fragment),f=S(),g=v("div"),y=v("h3"),y.textContent="Purpose:",b=S(),u=v("p"),u.textContent=`${t[0]}`,m=S(),p=v("div"),p.innerHTML='<input class="expand-button svelte-1awzinq" type="checkbox"/>',$=S(),B(L.$$.fragment),k=S(),q=v("div"),C=v("div"),B(w.$$.fragment),h(n,"class","title svelte-1awzinq"),h(e,"class","container svelte-1awzinq"),h(s,"class","img-container svelte-1awzinq"),h(a,"id","goal-container-mobile"),h(a,"class","svelte-1awzinq"),h(y,"class","small-title"),h(u,"class","truncated-text svelte-1awzinq"),h(p,"class","expand-container svelte-1awzinq"),h(g,"id","description"),h(g,"class","svelte-1awzinq"),h(r,"id","left-content"),h(r,"class","svelte-1awzinq"),h(C,"id","goal-container"),h(C,"class","svelte-1awzinq"),h(q,"id","right-content"),h(q,"class","svelte-1awzinq"),h(l,"class","container svelte-1awzinq")},m(_,M){I(_,e,M),d(e,n),I(_,i,M),I(_,l,M),d(l,r),d(r,s),d(r,c),d(r,a),P(o,a,null),d(r,f),d(r,g),d(g,y),d(g,b),d(g,u),d(g,m),d(g,p),d(r,$),P(L,r,null),d(l,k),d(l,q),d(q,C),P(w,C,null),E=!0},p:O,i(_){E||(N(o.$$.fragment,_),N(L.$$.fragment,_),N(w.$$.fragment,_),E=!0)},o(_){x(o.$$.fragment,_),x(L.$$.fragment,_),x(w.$$.fragment,_),E=!1},d(_){_&&(A(e),A(i),A(l)),D(o),D(L),D(w)}}}let Ht="Community Service Campaign";function Ut(t){return[`For the past 20 years I have been a licensed
barber/cosmetologist in my hometown of
Cincinnati, Ohio. As of 2019 I took a step
toward entrepreneurship in the personal care
industry and became owner of Noble Barber &
Beauty. During my role of both owner and
barber, I have been given the opportunity to
build strong relationships with those who enter
the barbershop. As my shop provides a
supportive environment; clients feel
comfortable in sharing stories of struggle and
triumph, good days and bad. On any given day,
barbershop talk might range from a recap of
the latest sports game to updates on births of
children and grandchildren. Clients may tell of
challenges experienced at work, while youth
are always excited to tell me about school and
the activities they are involved in. I am grateful
for these relationships and the space I have
available to listen, encourage and support as
best I can.
 
One relationship that has really been humbling
for me, is a young man whose mother drives
over an hour to receive a haircut for her son.
Due to the additional time required and
accommodations needed, this mother could
not find a barber in her hometown who was
willing to provide a haircut for her son who has
special needs.`]}class Bt extends W{constructor(e){super(),j(this,e,Ut,zt,R,{})}}function Rt(t){let e;return{c(){e=v("footer"),e.innerHTML="<div><p>Copyright © 2023 Medito Foundation. All rights reserved.</p></div>",h(e,"class","svelte-ku4wcj")},m(n,i){I(n,e,i)},p:O,i:O,o:O,d(n){n&&A(e)}}}class jt extends W{constructor(e){super(),j(this,e,null,Rt,R,{})}}function Wt(t){let e,n,i,l,r,s,c;return n=new _t({props:{logo_src:pt,logo_url:"https://www.meditofoundation.org"}}),l=new Bt({}),s=new jt({}),{c(){e=v("main"),B(n.$$.fragment),i=S(),B(l.$$.fragment),r=S(),B(s.$$.fragment)},m(a,o){I(a,e,o),P(n,e,null),d(e,i),P(l,e,null),d(e,r),P(s,e,null),c=!0},p:O,i(a){c||(N(n.$$.fragment,a),N(l.$$.fragment,a),N(s.$$.fragment,a),c=!0)},o(a){x(n.$$.fragment,a),x(l.$$.fragment,a),x(s.$$.fragment,a),c=!1},d(a){a&&A(e),D(n),D(l),D(s)}}}class Kt extends W{constructor(e){super(),j(this,e,null,Wt,R,{})}}new Kt({target:document.getElementById("app")});
