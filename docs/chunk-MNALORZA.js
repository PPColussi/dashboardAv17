import{a as f}from"./chunk-XOY5HG2W.js";import{$ as c,M as o,d as a,e as p,f as n,fa as h,hb as d,nc as m,u}from"./chunk-M6YOWBKI.js";var j=(()=>{var e;let t=class t{constructor(){p(this,e);this.http=h(f),n(this,e,d({loading:!0,users:[]})),this.users=m(()=>a(this,e).call(this).users),this.http.get("https://reqres.in/api/users").pipe(o(2e3)).subscribe(s=>{a(this,e).set({loading:!0,users:s.data})})}getUserById(s){return this.http.get(`https://reqres.in/api/users/${s}`).pipe(o(2e3),u(i=>i.data))}};e=new WeakMap,t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{j as a};