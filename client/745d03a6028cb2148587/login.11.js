(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(e,t,c){"use strict";c.r(t);var n=c(0),a=(c(56),c(55)),s=c(44),b=c(95);function o(e){let t,c;return{c(){t=Object(n.z)("p"),c=Object(n.cb)(e[0]),this.h()},l(a){t=Object(n.n)(a,"P",{class:!0});var s=Object(n.l)(t);c=Object(n.p)(s,e[0]),s.forEach(n.y),this.h()},h(){Object(n.h)(t,"class","help is-danger")},m(e,a){Object(n.J)(e,t,a),Object(n.f)(t,c)},p(e,t){1&t&&Object(n.X)(c,e[0])},d(e){e&&Object(n.y)(t)}}}function l(e){let t;return{c(){t=Object(n.cb)("Log in")},l(e){t=Object(n.p)(e,"Log in")},m(e,c){Object(n.J)(e,t,c)},d(e){e&&Object(n.y)(t)}}}function i(e){let t,c,i,r,O,j,u,d,f,h,p,m,w,$,g,v,y,_,E,L;function x(t){e[4].call(null,t)}c=new a.a({props:{dark:!0}});let D={name:"Username",icon:"user",id:"username"};function z(t){e[5].call(null,t)}void 0!==e[1]&&(D.value=e[1]),h=new b.a({props:D}),n.j.push(()=>Object(n.i)(h,"value",x));let J={name:"Password",icon:"lock",id:"password",type:"password"};void 0!==e[2]&&(J.value=e[2]),w=new b.a({props:J}),n.j.push(()=>Object(n.i)(w,"value",z));let I=null!==e[0]&&o(e);return y=new s.a({props:{submit:!0,$$slots:{default:[l]},$$scope:{ctx:e}}}),y.$on("click",e[3]),{c(){t=Object(n.ab)(),Object(n.s)(c.$$.fragment),i=Object(n.ab)(),r=Object(n.z)("section"),O=Object(n.z)("div"),j=Object(n.z)("form"),u=Object(n.z)("h2"),d=Object(n.cb)("Log in"),f=Object(n.ab)(),Object(n.s)(h.$$.fragment),m=Object(n.ab)(),Object(n.s)(w.$$.fragment),g=Object(n.ab)(),I&&I.c(),v=Object(n.ab)(),Object(n.s)(y.$$.fragment),this.h()},l(e){Object(n.T)('[data-svelte="svelte-nuxzs8"]',document.head).forEach(n.y),t=Object(n.o)(e),Object(n.m)(c.$$.fragment,e),i=Object(n.o)(e),r=Object(n.n)(e,"SECTION",{class:!0});var a=Object(n.l)(r);O=Object(n.n)(a,"DIV",{class:!0});var s=Object(n.l)(O);j=Object(n.n)(s,"FORM",{});var b=Object(n.l)(j);u=Object(n.n)(b,"H2",{class:!0});var o=Object(n.l)(u);d=Object(n.p)(o,"Log in"),o.forEach(n.y),f=Object(n.o)(b),Object(n.m)(h.$$.fragment,b),m=Object(n.o)(b),Object(n.m)(w.$$.fragment,b),g=Object(n.o)(b),I&&I.l(b),v=Object(n.o)(b),Object(n.m)(y.$$.fragment,b),b.forEach(n.y),s.forEach(n.y),a.forEach(n.y),this.h()},h(){document.title="Log in - LibreLingo",Object(n.h)(u,"class","is-size-2"),Object(n.h)(O,"class","container"),Object(n.h)(r,"class","section")},m(a,s){Object(n.J)(a,t,s),Object(n.N)(c,a,s),Object(n.J)(a,i,s),Object(n.J)(a,r,s),Object(n.f)(r,O),Object(n.f)(O,j),Object(n.f)(j,u),Object(n.f)(u,d),Object(n.f)(j,f),Object(n.N)(h,j,null),Object(n.f)(j,m),Object(n.N)(w,j,null),Object(n.f)(j,g),I&&I.m(j,null),Object(n.f)(j,v),Object(n.N)(y,j,null),_=!0,E||(L=Object(n.L)(j,"submit",Object(n.S)(e[3])),E=!0)},p(e,[t]){const c={};!p&&2&t&&(p=!0,c.value=e[1],Object(n.c)(()=>p=!1)),h.$set(c);const a={};!$&&4&t&&($=!0,a.value=e[2],Object(n.c)(()=>$=!1)),w.$set(a),null!==e[0]?I?I.p(e,t):(I=o(e),I.c(),I.m(j,v)):I&&(I.d(1),I=null);const s={};64&t&&(s.$$scope={dirty:t,ctx:e}),y.$set(s)},i(e){_||(Object(n.eb)(c.$$.fragment,e),Object(n.eb)(h.$$.fragment,e),Object(n.eb)(w.$$.fragment,e),Object(n.eb)(y.$$.fragment,e),_=!0)},o(e){Object(n.fb)(c.$$.fragment,e),Object(n.fb)(h.$$.fragment,e),Object(n.fb)(w.$$.fragment,e),Object(n.fb)(y.$$.fragment,e),_=!1},d(e){e&&Object(n.y)(t),Object(n.w)(c,e),e&&Object(n.y)(i),e&&Object(n.y)(r),Object(n.w)(h),Object(n.w)(w),I&&I.d(),Object(n.w)(y),E=!1,L()}}}function r(e,t,c){let n=null,a="",s="";return[n,a,s,async()=>{try{await window._Login(a,s)}catch(e){c(0,n=e)}},function(e){a=e,c(1,a)},function(e){s=e,c(2,s)}]}class O extends n.a{constructor(e){super(),Object(n.I)(this,e,r,i,n.V,{})}}t.default=O},56:function(e,t,c){"use strict";(function(e){var n=c(33),a=c(57),s=c(8),b=c.n(s);let o,l,i;const r=t=>{const a=new(void 0!==e.env.JEST_WORKER_ID?c(46):c(46).default)(t).setMaxListeners(n.a.database.maxNumberOfListeners);return a.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;c(31).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),a};{const e=c(31).default,t=c(46).default;l=new t(`${n.a.database.remote}/${b.a.get("loginDb")}`,{skip_setup:!0,live:!0}),o=r(n.a.database.local),window._DB=o,b.a.get("loginDb")===Object(a.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),b.a.get("loginDb")&&n.a.features.authEnabled?fetch(`${n.a.database.remote}/_session`,{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),s())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{b.a.set("loginDb",Object(a.a)("---fakeUser"),{expires:n.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,c)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const s=await(await fetch(`${n.a.database.remote}/_session`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c})})).json();if(s.error){if("unauthorized"===s.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),b.a.set("loginDb",Object(a.a)(t),{expires:n.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{i&&(await i.cancel(),await fetch(`${n.a.database.remote}/_session`,{method:"delete"}))}finally{b.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await o.destroy(),window.location.reload(!1)}};const s=()=>{i=o.sync(l).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(o=r(n.a.database.local),o.__reset=async()=>{const e=await o.allDocs();await Promise.all(e.rows.map((function(e){return o.remove(e.id,e.value.rev)})))}),t.a=o}).call(this,c(32))},57:function(e,t,c){"use strict";t.a=e=>`userdb-${(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)}`},70:function(e,t){},95:function(e,t,c){"use strict";var n=c(0),a=c(58);function s(e){let t,c,a;return{c(){t=Object(n.z)("input"),this.h()},l(e){t=Object(n.n)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(n.h)(t,"class","input"),Object(n.h)(t,"type","text"),Object(n.h)(t,"name",e[2]),Object(n.h)(t,"id",e[2]),Object(n.db)(t,"is-danger",null!=e[5])},m(s,b){Object(n.J)(s,t,b),Object(n.Y)(t,e[0]),c||(a=Object(n.L)(t,"input",e[7]),c=!0)},p(e,c){4&c&&Object(n.h)(t,"name",e[2]),4&c&&Object(n.h)(t,"id",e[2]),1&c&&t.value!==e[0]&&Object(n.Y)(t,e[0]),32&c&&Object(n.db)(t,"is-danger",null!=e[5])},d(e){e&&Object(n.y)(t),c=!1,a()}}}function b(e){let t,c,a;return{c(){t=Object(n.z)("input"),this.h()},l(e){t=Object(n.n)(e,"INPUT",{class:!0,type:!0,name:!0,id:!0}),this.h()},h(){Object(n.h)(t,"class","input"),Object(n.h)(t,"type","password"),Object(n.h)(t,"name",e[2]),Object(n.h)(t,"id",e[2]),Object(n.db)(t,"is-danger",null!=e[5])},m(s,b){Object(n.J)(s,t,b),Object(n.Y)(t,e[0]),c||(a=Object(n.L)(t,"input",e[8]),c=!0)},p(e,c){4&c&&Object(n.h)(t,"name",e[2]),4&c&&Object(n.h)(t,"id",e[2]),1&c&&t.value!==e[0]&&Object(n.Y)(t,e[0]),32&c&&Object(n.db)(t,"is-danger",null!=e[5])},d(e){e&&Object(n.y)(t),c=!1,a()}}}function o(e){let t,c;return{c(){t=Object(n.z)("p"),c=Object(n.cb)(e[5]),this.h()},l(a){t=Object(n.n)(a,"P",{class:!0});var s=Object(n.l)(t);c=Object(n.p)(s,e[5]),s.forEach(n.y),this.h()},h(){Object(n.h)(t,"class","help is-danger")},m(e,a){Object(n.J)(e,t,a),Object(n.f)(t,c)},p(e,t){32&t&&Object(n.X)(c,e[5])},d(e){e&&Object(n.y)(t)}}}function l(e){let t,c,l,i,r,O,j,u,d,f,h="text"===e[4]&&s(e),p="password"===e[4]&&b(e);u=new a.a({props:{size:"small",icon:e[3],left:!0}});let m=null!=e[5]&&o(e);return{c(){t=Object(n.z)("div"),c=Object(n.z)("label"),l=Object(n.cb)(e[1]),i=Object(n.ab)(),r=Object(n.z)("div"),h&&h.c(),O=Object(n.ab)(),p&&p.c(),j=Object(n.ab)(),Object(n.s)(u.$$.fragment),d=Object(n.ab)(),m&&m.c(),this.h()},l(a){t=Object(n.n)(a,"DIV",{class:!0});var s=Object(n.l)(t);c=Object(n.n)(s,"LABEL",{class:!0,for:!0});var b=Object(n.l)(c);l=Object(n.p)(b,e[1]),b.forEach(n.y),i=Object(n.o)(s),r=Object(n.n)(s,"DIV",{class:!0});var o=Object(n.l)(r);h&&h.l(o),O=Object(n.o)(o),p&&p.l(o),j=Object(n.o)(o),Object(n.m)(u.$$.fragment,o),o.forEach(n.y),d=Object(n.o)(s),m&&m.l(s),s.forEach(n.y),this.h()},h(){Object(n.h)(c,"class","label"),Object(n.h)(c,"for",e[2]),Object(n.h)(r,"class","control has-icons-left"),Object(n.h)(t,"class","field")},m(e,a){Object(n.J)(e,t,a),Object(n.f)(t,c),Object(n.f)(c,l),Object(n.f)(t,i),Object(n.f)(t,r),h&&h.m(r,null),Object(n.f)(r,O),p&&p.m(r,null),Object(n.f)(r,j),Object(n.N)(u,r,null),Object(n.f)(t,d),m&&m.m(t,null),f=!0},p(e,[a]){(!f||2&a)&&Object(n.X)(l,e[1]),(!f||4&a)&&Object(n.h)(c,"for",e[2]),"text"===e[4]?h?h.p(e,a):(h=s(e),h.c(),h.m(r,O)):h&&(h.d(1),h=null),"password"===e[4]?p?p.p(e,a):(p=b(e),p.c(),p.m(r,j)):p&&(p.d(1),p=null);const i={};8&a&&(i.icon=e[3]),u.$set(i),null!=e[5]?m?m.p(e,a):(m=o(e),m.c(),m.m(t,null)):m&&(m.d(1),m=null)},i(e){f||(Object(n.eb)(u.$$.fragment,e),f=!0)},o(e){Object(n.fb)(u.$$.fragment,e),f=!1},d(e){e&&Object(n.y)(t),h&&h.d(),p&&p.d(),Object(n.w)(u),m&&m.d()}}}function i(e,t,c){let{name:n}=t,{id:a}=t,{icon:s}=t,{type:b="text"}=t,{value:o}=t,{formStatus:l={}}=t,i=null;return e.$$set=e=>{"name"in e&&c(1,n=e.name),"id"in e&&c(2,a=e.id),"icon"in e&&c(3,s=e.icon),"type"in e&&c(4,b=e.type),"value"in e&&c(0,o=e.value),"formStatus"in e&&c(6,l=e.formStatus)},e.$$.update=()=>{68&e.$$.dirty&&c(5,i=l[a])},[o,n,a,s,b,i,l,function(){o=this.value,c(0,o)},function(){o=this.value,c(0,o)}]}class r extends n.a{constructor(e){super(),Object(n.I)(this,e,i,l,n.V,{name:1,id:2,icon:3,type:4,value:0,formStatus:6})}}t.a=r}}]);