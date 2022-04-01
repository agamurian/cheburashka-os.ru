var et=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var D=(r,e,t)=>(et(r,e,"read from private field"),t?t.call(r):e.get(r)),te=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},ae=(r,e,t,a)=>(et(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t);var me=(r,e,t)=>(et(r,e,"access private method"),t);import{w as Lt,_ as $t}from"../chunks/preload-helper-1e779f76.js";import{S as we,i as Ee,s as $e,l as oe,g as y,E as ie,d as f,I as B,v as tt,e as d,c as m,a as _,b as l,J as u,K as At,t as L,h as C,j as ge,k as $,L as kt,m as k,M as St,w as _e,x as ve,N as Me,f as re,y as pe,q as X,o as J,B as be,O as Ct,P as Tt,Q as Nt,R as Rt,T as Vt}from"../chunks/index-f32d6e1d.js";import{t as Pe,l as Mt,a as jt}from"../chunks/index-84b110aa.js";import{p as Dt}from"../chunks/stores-5335a225.js";var Ft={colorScheme:Lt(0)};const Pt=Object.freeze({DARK:Symbol("dark"),LIGHT:Symbol("light")}),yt="colorScheme",je=Pt,{colorScheme:at}=Ft;var U,le,j,se,G,Fe;class qt{constructor(){te(this,G);te(this,U,void 0);te(this,le,void 0);te(this,j,void 0);te(this,se,void 0);ae(this,U,window.sessionStorage.getItem(yt)),ae(this,le,typeof window.matchMedia!="undefined"),ae(this,j,void 0),ae(this,se,window.matchMedia("(prefers-color-scheme: dark)")),D(this,le)&&(D(this,U)?me(this,G,Fe).call(this,D(this,U)===je.DARK.description):me(this,G,Fe).call(this,D(this,se).matches))}watch(){!D(this,le)||D(this,se).addEventListener("change",e=>{D(this,U)||me(this,G,Fe).call(this,e.matches)})}get(){return D(this,j)}switch(){me(this,G,Fe).call(this,D(this,j)!==je.DARK.description),window.sessionStorage.setItem(yt,D(this,j))}}U=new WeakMap,le=new WeakMap,j=new WeakMap,se=new WeakMap,G=new WeakSet,Fe=function(e){ae(this,j,(e?je.DARK:je.LIGHT).description),window.document.querySelector("html").dataset.colorScheme=D(this,j),at.set(D(this,j))};function Kt(r){let e,t,a,s,i;return{c(){e=d("span"),t=d("i"),this.h()},l(n){e=m(n,"SPAN",{class:!0,title:!0});var c=_(e);t=m(c,"I",{class:!0}),_(t).forEach(f),c.forEach(f),this.h()},h(){l(t,"class","fa-solid fa-circle-half-stroke"),l(e,"class",r[3].join(" ")),l(e,"title",a=r[2](r[4]))},m(n,c){y(n,e,c),u(e,t),s||(i=At(e,"click",r[5]),s=!0)},p(n,c){c&4&&a!==(a=n[2](n[4]))&&l(e,"title",a)},d(n){n&&f(e),s=!1,i()}}}function Ot(r){let e,t=r[2](`common.colorScheme.${r[1]}To`)+"",a,s,i,n;return{c(){e=d("a"),a=L(t),this.h()},l(c){e=m(c,"A",{class:!0,title:!0,href:!0});var v=_(e);a=C(v,t),v.forEach(f),this.h()},h(){l(e,"class",r[3].join(" ")),l(e,"title",s=r[2](r[4])),l(e,"href","javascript:void(0)")},m(c,v){y(c,e,v),u(e,a),i||(n=At(e,"click",r[5]),i=!0)},p(c,v){v&6&&t!==(t=c[2](`common.colorScheme.${c[1]}To`)+"")&&ge(a,t),v&4&&s!==(s=c[2](c[4]))&&l(e,"title",s)},d(c){c&&f(e),i=!1,n()}}}function Bt(r){let e;function t(i,n){return i[0]==="string"?Ot:Kt}let a=t(r),s=a(r);return{c(){s.c(),e=oe()},l(i){s.l(i),e=oe()},m(i,n){s.m(i,n),y(i,e,n)},p(i,[n]){a===(a=t(i))&&s?s.p(i,n):(s.d(1),s=a(i),s&&(s.c(),s.m(e.parentNode,e)))},i:ie,o:ie,d(i){s.d(i),i&&f(e)}}}function Yt(r,e,t){let a,s;B(r,at,h=>t(1,a=h)),B(r,Pe,h=>t(2,s=h));let i,n=["curPoi","notSel"];const c=`common.colorScheme.${a}`;let{mode:v,className:p}=e;p&&n.push(p);const b=()=>{i.switch()};return tt(async()=>{i=new qt}),r.$$set=h=>{"mode"in h&&t(0,v=h.mode),"className"in h&&t(6,p=h.className)},[v,a,s,n,c,b,p]}class It extends we{constructor(e){super();Ee(this,e,Yt,Bt,$e,{mode:0,className:6})}}function zt(r){let e,t=r[2](`lang.${r[0]}`)+"",a,s;return{c(){e=d("a"),a=L(t),this.h()},l(i){e=m(i,"A",{class:!0,href:!0});var n=_(e);a=C(n,t),n.forEach(f),this.h()},h(){l(e,"class","colinher"),l(e,"href",s=`/${r[0]}${r[1]}`)},m(i,n){y(i,e,n),u(e,a)},p(i,[n]){n&5&&t!==(t=i[2](`lang.${i[0]}`)+"")&&ge(a,t),n&3&&s!==(s=`/${i[0]}${i[1]}`)&&l(e,"href",s)},i:ie,o:ie,d(i){i&&f(e)}}}function Ht(r,e,t){let a,s,i,n,c,v;return B(r,Dt,p=>t(5,c=p)),B(r,Pe,p=>t(2,v=p)),r.$$.update=()=>{r.$$.dirty&32&&t(1,{route:a,lang:s}=c.stuff,a,(t(3,s),t(5,c))),r.$$.dirty&24&&t(0,n=i[s])},t(4,i={en:"ru",ru:"en"}),[n,a,v,s,i,c]}class Ut extends we{constructor(e){super();Ee(this,e,Ht,zt,$e,{})}}function Gt(r){let e,t=r[0]("common.copyright",{crYear:new Date().getFullYear()})+"",a,s,i,n,c,v,p;return{c(){e=d("footer"),a=L(t),s=$(),i=d("a"),n=d("i"),c=kt("svg"),v=kt("path"),p=L(`
                github`),this.h()},l(b){e=m(b,"FOOTER",{class:!0});var h=_(e);a=C(h,t),s=k(h),i=m(h,"A",{class:!0,href:!0});var w=_(i);n=m(w,"I",{class:!0});var o=_(n);c=St(o,"svg",{height:!0,"aria-hidden":!0,viewBox:!0,version:!0,width:!0,"data-view-component":!0,class:!0});var E=_(c);v=St(E,"path",{"fill-rule":!0,d:!0}),_(v).forEach(f),E.forEach(f),o.forEach(f),p=C(w,`
                github`),w.forEach(f),h.forEach(f),this.h()},h(){l(v,"fill-rule","evenodd"),l(v,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),l(c,"height","32"),l(c,"aria-hidden","true"),l(c,"viewBox","0 0 16 16"),l(c,"version","1.1"),l(c,"width","32"),l(c,"data-view-component","true"),l(c,"class","octicon octicon-mark-github v-align-middle"),l(n,"class","p-1"),l(i,"class","p-3"),l(i,"href","https://github.com/agamurian/cheburashka-os.ru"),l(e,"class","p-5 text-center h6 m-0 mt-10 svelte-g1ylyj")},m(b,h){y(b,e,h),u(e,a),u(e,s),u(e,i),u(i,n),u(n,c),u(c,v),u(i,p)},p(b,h){h&1&&t!==(t=b[0]("common.copyright",{crYear:new Date().getFullYear()})+"")&&ge(a,t)},d(b){b&&f(e)}}}function Xt(r){let e,t=Gt(r);return{c(){t&&t.c(),e=oe()},l(a){t&&t.l(a),e=oe()},m(a,s){t&&t.m(a,s),y(a,e,s)},p(a,[s]){t.p(a,s)},i:ie,o:ie,d(a){t&&t.d(a),a&&f(e)}}}function Jt(r,e,t){let a;return B(r,Pe,s=>t(0,a=s)),[a]}class Qt extends we{constructor(e){super();Ee(this,e,Jt,Xt,$e,{})}}function Wt(r){let e,t,a,s,i,n,c,v,p,b,h,w,o,E=r[3]("menu.home")+"",ke,Se,qe,Q,N,ne=r[3]("menu.about")+"",ye,Ie,Ke,F,T,Oe,Be,I,ce,P,Ye,Ae,ze,ue,q,He,De,Ue,fe,Le,Ge,he,K,Xe,Ce,Je,W,R,Qe,Te,We,Z,Y,Ze,V,de,z,xe,x,H,A;return Y=new It({props:{mode:"string",className:"colinher nav-link"}}),z=new It({}),H=new Ut({}),{c(){e=d("nav"),t=d("div"),a=d("div"),s=d("i"),i=$(),n=d("div"),c=d("a"),v=L("cheburashka os"),b=$(),h=d("ul"),w=d("li"),o=d("a"),ke=L(E),qe=$(),Q=d("li"),N=d("a"),ye=L(ne),Ke=$(),F=d("li"),T=d("a"),Oe=L("Download"),Be=$(),I=d("ul"),ce=d("li"),P=d("a"),Ye=L("XFCE Edition"),ze=$(),ue=d("li"),q=d("a"),He=L("MATE Edition"),Ue=$(),fe=d("li"),Le=d("hr"),Ge=$(),he=d("li"),K=d("a"),Xe=L("I3 edition"),Je=$(),W=d("li"),R=d("a"),Qe=L("\u0411\u043B\u043E\u0433"),We=$(),Z=d("li"),_e(Y.$$.fragment),Ze=$(),V=d("div"),de=d("div"),_e(z.$$.fragment),xe=$(),x=d("div"),_e(H.$$.fragment),this.h()},l(g){e=m(g,"NAV",{class:!0});var S=_(e);t=m(S,"DIV",{class:!0,style:!0});var Ne=_(t);a=m(Ne,"DIV",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var rt=_(a);s=m(rt,"I",{class:!0}),_(s).forEach(f),rt.forEach(f),i=k(Ne),n=m(Ne,"DIV",{class:!0,id:!0});var ee=_(n);c=m(ee,"A",{class:!0,href:!0});var lt=_(c);v=C(lt,"cheburashka os"),lt.forEach(f),b=k(ee),h=m(ee,"UL",{class:!0});var M=_(h);w=m(M,"LI",{class:!0});var st=_(w);o=m(st,"A",{class:!0,href:!0});var ot=_(o);ke=C(ot,E),ot.forEach(f),st.forEach(f),qe=k(M),Q=m(M,"LI",{class:!0});var it=_(Q);N=m(it,"A",{class:!0,href:!0});var nt=_(N);ye=C(nt,ne),nt.forEach(f),it.forEach(f),Ke=k(M),F=m(M,"LI",{class:!0});var Re=_(F);T=m(Re,"A",{class:!0,href:!0,id:!0,role:!0,"data-bs-toggle":!0,"aria-expanded":!0});var ct=_(T);Oe=C(ct,"Download"),ct.forEach(f),Be=k(Re),I=m(Re,"UL",{class:!0,"aria-labelledby":!0});var O=_(I);ce=m(O,"LI",{});var ut=_(ce);P=m(ut,"A",{class:!0,href:!0});var ft=_(P);Ye=C(ft,"XFCE Edition"),ft.forEach(f),ut.forEach(f),ze=k(O),ue=m(O,"LI",{});var ht=_(ue);q=m(ht,"A",{class:!0,href:!0});var dt=_(q);He=C(dt,"MATE Edition"),dt.forEach(f),ht.forEach(f),Ue=k(O),fe=m(O,"LI",{});var mt=_(fe);Le=m(mt,"HR",{class:!0}),mt.forEach(f),Ge=k(O),he=m(O,"LI",{});var _t=_(he);K=m(_t,"A",{class:!0,href:!0});var vt=_(K);Xe=C(vt,"I3 edition"),vt.forEach(f),_t.forEach(f),O.forEach(f),Re.forEach(f),Je=k(M),W=m(M,"LI",{class:!0});var pt=_(W);R=m(pt,"A",{class:!0,href:!0,tabindex:!0,"aria-disabled":!0});var bt=_(R);Qe=C(bt,"\u0411\u043B\u043E\u0433"),bt.forEach(f),pt.forEach(f),We=k(M),Z=m(M,"LI",{class:!0});var gt=_(Z);ve(Y.$$.fragment,gt),gt.forEach(f),M.forEach(f),Ze=k(ee),V=m(ee,"DIV",{class:!0,style:!0});var Ve=_(V);de=m(Ve,"DIV",{});var wt=_(de);ve(z.$$.fragment,wt),wt.forEach(f),xe=k(Ve),x=m(Ve,"DIV",{class:!0});var Et=_(x);ve(H.$$.fragment,Et),Et.forEach(f),Ve.forEach(f),ee.forEach(f),Ne.forEach(f),S.forEach(f),this.h()},h(){l(s,"class","fa-solid fa-bars"),l(a,"class","navbar-toggler svelte-q34l5x"),l(a,"type","button"),l(a,"data-bs-toggle","collapse"),l(a,"data-bs-target","#navbarSupportedContent"),l(a,"aria-controls","navbarSupportedContent"),l(a,"aria-expanded","false"),l(a,"aria-label","Toggle navigation"),l(c,"class","navbar-brand svelte-q34l5x"),l(c,"href",p="/"+r[2]+"/"),l(o,"class","nav-link"),l(o,"href",Se="/"+r[2]+"/"),Me(o,"active",r[1]===`/${r[2]}/`),l(w,"class","nav-item"),l(N,"class","nav-link"),l(N,"href",Ie="/"+r[2]+"/about/"),Me(N,"active",r[1]===`/${r[2]}/about/`),l(Q,"class","nav-item"),l(T,"class","nav-link dropdown-toggle disabled"),l(T,"href","#"),l(T,"id","navbarDropdown"),l(T,"role","button"),l(T,"data-bs-toggle","dropdown"),l(T,"aria-expanded","false"),l(P,"class","dropdown-item"),l(P,"href",Ae="/"+r[2]+"/action/"),l(q,"class","dropdown-item"),l(q,"href",De="/"+r[2]+"/action/another"),l(Le,"class","dropdown-divider"),l(K,"class","dropdown-item"),l(K,"href",Ce="/"+r[2]+"/sth/"),l(I,"class","dropdown-menu"),l(I,"aria-labelledby","navbarDropdown"),l(F,"class","nav-item dropdown disabled"),l(R,"class","nav-link disabled"),l(R,"href",Te="/"+r[2]+"/disabled/"),l(R,"tabindex","-1"),l(R,"aria-disabled","true"),l(W,"class","nav-item"),l(Z,"class","nav-item d-lg-none"),l(h,"class","navbar-nav me-auto mb-2 mb-lg-0"),l(x,"class","ms-2 text-white"),l(V,"class","flex-wrap flex-row btn nav pl-2 text-white m-2"),re(V,"color","inherit"),re(V,"padding-left","0.6em"),l(n,"class","collapse navbar-collapse"),l(n,"id","navbarSupportedContent"),l(t,"class","container-fluid d-flex flex-wrap flex-column flex-lg-row justify-content-start align-items-start inline inline-block"),re(t,"background-color","#83674566"),l(e,"class","black nav sticky-top navbar-expand-lg rounded-0 sm")},m(g,S){y(g,e,S),u(e,t),u(t,a),u(a,s),u(t,i),u(t,n),u(n,c),u(c,v),u(n,b),u(n,h),u(h,w),u(w,o),u(o,ke),u(h,qe),u(h,Q),u(Q,N),u(N,ye),u(h,Ke),u(h,F),u(F,T),u(T,Oe),u(F,Be),u(F,I),u(I,ce),u(ce,P),u(P,Ye),u(I,ze),u(I,ue),u(ue,q),u(q,He),u(I,Ue),u(I,fe),u(fe,Le),u(I,Ge),u(I,he),u(he,K),u(K,Xe),u(h,Je),u(h,W),u(W,R),u(R,Qe),u(h,We),u(h,Z),pe(Y,Z,null),u(n,Ze),u(n,V),u(V,de),pe(z,de,null),u(V,xe),u(V,x),pe(H,x,null),r[7](e),A=!0},p(g,[S]){(!A||S&4&&p!==(p="/"+g[2]+"/"))&&l(c,"href",p),(!A||S&8)&&E!==(E=g[3]("menu.home")+"")&&ge(ke,E),(!A||S&4&&Se!==(Se="/"+g[2]+"/"))&&l(o,"href",Se),S&6&&Me(o,"active",g[1]===`/${g[2]}/`),(!A||S&8)&&ne!==(ne=g[3]("menu.about")+"")&&ge(ye,ne),(!A||S&4&&Ie!==(Ie="/"+g[2]+"/about/"))&&l(N,"href",Ie),S&6&&Me(N,"active",g[1]===`/${g[2]}/about/`),(!A||S&4&&Ae!==(Ae="/"+g[2]+"/action/"))&&l(P,"href",Ae),(!A||S&4&&De!==(De="/"+g[2]+"/action/another"))&&l(q,"href",De),(!A||S&4&&Ce!==(Ce="/"+g[2]+"/sth/"))&&l(K,"href",Ce),(!A||S&4&&Te!==(Te="/"+g[2]+"/disabled/"))&&l(R,"href",Te)},i(g){A||(X(Y.$$.fragment,g),X(z.$$.fragment,g),X(H.$$.fragment,g),A=!0)},o(g){J(Y.$$.fragment,g),J(z.$$.fragment,g),J(H.$$.fragment,g),A=!1},d(g){g&&f(e),be(Y),be(z),be(H),r[7](null)}}}function Zt(r,e,t){let a,s,i,n,c,v;B(r,Dt,o=>t(6,n=o)),B(r,Mt,o=>t(2,c=o)),B(r,Pe,o=>t(3,v=o));const p={dark:["navbar-light","bg-light"],light:["navbar-dark","bg-dark"]};let b;const h=o=>{!b||(b.classList.remove("navbar-dark","bg-dark","navbar-light","bg-light"),b.classList.add(...p[o]))};tt(async()=>{h(window.document.querySelector("html").dataset.colorScheme),at.subscribe(o=>{h(o)})});function w(o){Ct[o?"unshift":"push"](()=>{b=o,t(0,b)})}return r.$$.update=()=>{r.$$.dirty&64&&t(4,{route:a,lang:s}=n.stuff,a,(t(5,s),t(6,n))),r.$$.dirty&48&&t(1,i=`/${s}${a}`)},[b,i,c,v,a,s,n,w]}class xt extends we{constructor(e){super();Ee(this,e,Zt,Wt,$e,{})}}function ea(r){let e,t,a,s,i,n,c,v,p,b;e=new xt({});const h=r[1].default,w=Vt(h,r,r[0],null);return p=new Qt({}),{c(){_e(e.$$.fragment),t=$(),a=d("div"),w&&w.c(),s=$(),i=d("br"),n=$(),c=d("div"),v=$(),_e(p.$$.fragment),this.h()},l(o){ve(e.$$.fragment,o),t=k(o),a=m(o,"DIV",{class:!0});var E=_(a);w&&w.l(E),E.forEach(f),s=k(o),i=m(o,"BR",{}),n=k(o),c=m(o,"DIV",{style:!0}),_(c).forEach(f),v=k(o),ve(p.$$.fragment,o),this.h()},h(){l(a,"class","colinher p-0 svelte-1ps839v"),re(c,"height","10em"),re(c,"z-index","-100"),re(c,"background","inherit")},m(o,E){pe(e,o,E),y(o,t,E),y(o,a,E),w&&w.m(a,null),y(o,s,E),y(o,i,E),y(o,n,E),y(o,c,E),y(o,v,E),pe(p,o,E),b=!0},p(o,E){w&&w.p&&(!b||E&1)&&Tt(w,h,o,o[0],b?Rt(h,o[0],E,null):Nt(o[0]),null)},i(o){b||(X(e.$$.fragment,o),X(w,o),X(p.$$.fragment,o),b=!0)},o(o){J(e.$$.fragment,o),J(w,o),J(p.$$.fragment,o),b=!1},d(o){be(e,o),o&&f(t),o&&f(a),w&&w.d(o),o&&f(s),o&&f(i),o&&f(n),o&&f(c),o&&f(v),be(p,o)}}}function ta(r){let e,t,a=ea(r);return{c(){a&&a.c(),e=oe()},l(s){a&&a.l(s),e=oe()},m(s,i){a&&a.m(s,i),y(s,e,i),t=!0},p(s,[i]){a.p(s,i)},i(s){t||(X(a),t=!0)},o(s){J(a),t=!1},d(s){a&&a.d(s),s&&f(e)}}}const na=async({url:r})=>{const{pathname:e}=r,t=`${e.match(/\w+?(?=\/|$)/)||""}`,a=e.replace(new RegExp(`^/${t}`),"");return await jt(t,a),{stuff:{route:a,lang:t}}};function aa(r,e,t){let{$$slots:a={},$$scope:s}=e;return tt(async()=>{await $t(()=>import("../chunks/bootstrap.bundle.min-3e95f5b0.js").then(function(i){return i.b}),[]),await $t(()=>import("../chunks/all.min-c9a74dcf.js"),[])}),r.$$set=i=>{"$$scope"in i&&t(0,s=i.$$scope)},[s,a]}class ca extends we{constructor(e){super();Ee(this,e,aa,ta,$e,{})}}export{ca as default,na as load};
