const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-DNO_AifO.js","assets/AboutView-Cfkmdugn.css","assets/ContactView-Bz-8HFW3.js","assets/ContactView-tkcEXESB.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},ur=[],Tn=()=>{},hd=()=>!1,_o=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Cl=n=>n.startsWith("onUpdate:"),Dt=Object.assign,Pl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dd=Object.prototype.hasOwnProperty,nt=(n,e)=>dd.call(n,e),Ve=Array.isArray,fr=n=>vo(n)==="[object Map]",rf=n=>vo(n)==="[object Set]",Xe=n=>typeof n=="function",Et=n=>typeof n=="string",mi=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",sf=n=>(gt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),of=Object.prototype.toString,vo=n=>of.call(n),pd=n=>vo(n).slice(8,-1),af=n=>vo(n)==="[object Object]",Ll=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=Rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},md=/-(\w)/g,ui=xo(n=>n.replace(md,(e,t)=>t?t.toUpperCase():"")),gd=/\B([A-Z])/g,zi=xo(n=>n.replace(gd,"-$1").toLowerCase()),lf=xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),No=xo(n=>n?`on${lf(n)}`:""),oi=(n,e)=>!Object.is(n,e),Fo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},_d=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let dc;const So=()=>dc||(dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mo(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?Md(i):Mo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||gt(n))return n}const vd=/;(?![^(]*\))/g,xd=/:([^]+)/,Sd=/\/\*[^]*?\*\//g;function Md(n){const e={};return n.replace(Sd,"").split(vd).forEach(t=>{if(t){const i=t.split(xd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Eo(n){let e="";if(Et(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Eo(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yd=Rl(Ed);function uf(n){return!!n||n===""}const ff=n=>!!(n&&n.__v_isRef===!0),Ii=n=>Et(n)?n:n==null?"":Ve(n)||gt(n)&&(n.toString===of||!Xe(n.toString))?ff(n)?Ii(n.value):JSON.stringify(n,hf,2):String(n),hf=(n,e)=>ff(e)?hf(n,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Oo(i,s)+" =>"]=r,t),{})}:rf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Oo(t))}:mi(e)?Oo(e):gt(e)&&!Ve(e)&&!af(e)?String(e):e,Oo=(n,e="")=>{var t;return mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class Td{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function bd(){return kt}let ut;const Bo=new WeakSet;class df{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bo.has(this)&&(Bo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pc(this),gf(this);const e=ut,t=dn;ut=this,dn=!0;try{return this.fn()}finally{_f(this),ut=e,dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Il(e);this.deps=this.depsTail=void 0,pc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Aa(this)&&this.run()}get dirty(){return Aa(this)}}let pf=0,Gr,Wr;function mf(n,e=!1){if(n.flags|=8,e){n.next=Wr,Wr=n;return}n.next=Gr,Gr=n}function Dl(){pf++}function Ul(){if(--pf>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Gr;){let e=Gr;for(Gr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function gf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _f(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Il(i),Ad(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Aa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===jr)||(n.globalVersion=jr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Aa(n))))return;n.flags|=2;const e=n.dep,t=ut,i=dn;ut=n,dn=!0;try{gf(n);const r=n.fn(n._value);(e.version===0||oi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ut=t,dn=i,_f(n),n.flags&=-3}}function Il(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Il(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ad(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let dn=!0;const xf=[];function Gn(){xf.push(dn),dn=!1}function Wn(){const n=xf.pop();dn=n===void 0?!0:n}function pc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let jr=0;class wd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!dn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new wd(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,Sf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,jr++,this.notify(e)}notify(e){Dl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ul()}}}function Sf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Sf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wa=new WeakMap,Ni=Symbol(""),Ra=Symbol(""),Zr=Symbol("");function Pt(n,e,t){if(dn&&ut){let i=wa.get(n);i||wa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Nl),r.map=i,r.key=t),r.track()}}function Fn(n,e,t,i,r,s){const o=wa.get(n);if(!o){jr++;return}const a=l=>{l&&l.trigger()};if(Dl(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Ll(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Zr||!mi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Zr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ni)),fr(n)&&a(o.get(Ra)));break;case"delete":l||(a(o.get(Ni)),fr(n)&&a(o.get(Ra)));break;case"set":fr(n)&&a(o.get(Ni));break}}Ul()}function ki(n){const e=tt(n);return e===n?e:(Pt(e,"iterate",Zr),sn(n)?e:e.map(wt))}function yo(n){return Pt(n=tt(n),"iterate",Zr),n}const Rd={__proto__:null,[Symbol.iterator](){return zo(this,Symbol.iterator,wt)},concat(...n){return ki(this).concat(...n.map(e=>Ve(e)?ki(e):e))},entries(){return zo(this,"entries",n=>(n[1]=wt(n[1]),n))},every(n,e){return wn(this,"every",n,e,void 0,arguments)},filter(n,e){return wn(this,"filter",n,e,t=>t.map(wt),arguments)},find(n,e){return wn(this,"find",n,e,wt,arguments)},findIndex(n,e){return wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wn(this,"findLast",n,e,wt,arguments)},findLastIndex(n,e){return wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ho(this,"includes",n)},indexOf(...n){return Ho(this,"indexOf",n)},join(n){return ki(this).join(n)},lastIndexOf(...n){return Ho(this,"lastIndexOf",n)},map(n,e){return wn(this,"map",n,e,void 0,arguments)},pop(){return Cr(this,"pop")},push(...n){return Cr(this,"push",n)},reduce(n,...e){return mc(this,"reduce",n,e)},reduceRight(n,...e){return mc(this,"reduceRight",n,e)},shift(){return Cr(this,"shift")},some(n,e){return wn(this,"some",n,e,void 0,arguments)},splice(...n){return Cr(this,"splice",n)},toReversed(){return ki(this).toReversed()},toSorted(n){return ki(this).toSorted(n)},toSpliced(...n){return ki(this).toSpliced(...n)},unshift(...n){return Cr(this,"unshift",n)},values(){return zo(this,"values",wt)}};function zo(n,e,t){const i=yo(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Cd=Array.prototype;function wn(n,e,t,i,r,s){const o=yo(n),a=o!==n&&!sn(n),l=o[e];if(l!==Cd[e]){const f=l.apply(n,s);return a?wt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,wt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function mc(n,e,t,i){const r=yo(n);let s=t;return r!==n&&(sn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,wt(a),l,n)}),r[e](s,...i)}function Ho(n,e,t){const i=tt(n);Pt(i,"iterate",Zr);const r=i[e](...t);return(r===-1||r===!1)&&Bl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function Cr(n,e,t=[]){Gn(),Dl();const i=tt(n)[e].apply(n,t);return Ul(),Wn(),i}const Pd=Rl("__proto__,__v_isRef,__isVue"),Mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mi));function Ld(n){mi(n)||(n=String(n));const e=tt(this);return Pt(e,"has",n),e.hasOwnProperty(n)}class Ef{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Vd:Af:s?bf:Tf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=Rd[t]))return l;if(t==="hasOwnProperty")return Ld}const a=Reflect.get(e,t,Lt(e)?e:i);return(mi(t)?Mf.has(t):Pd(t))||(r||Pt(e,"get",t),s)?a:Lt(a)?o&&Ll(t)?a:a.value:gt(a)?r?Rf(a):To(a):a}}class yf extends Ef{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=fi(s);if(!sn(i)&&!fi(i)&&(s=tt(s),i=tt(i)),!Ve(e)&&Lt(s)&&!Lt(i))return l?!1:(s.value=i,!0)}const o=Ve(e)&&Ll(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Lt(e)?e:r);return e===tt(r)&&(o?oi(i,s)&&Fn(e,"set",t,i):Fn(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Fn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!mi(t)||!Mf.has(t))&&Pt(e,"has",t),i}ownKeys(e){return Pt(e,"iterate",Ve(e)?"length":Ni),Reflect.ownKeys(e)}}class Dd extends Ef{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ud=new yf,Id=new Dd,Nd=new yf(!0);const Ca=n=>n,vs=n=>Reflect.getPrototypeOf(n);function Fd(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=fr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ca:e?so:wt;return!e&&Pt(s,"iterate",l?Ra:Ni),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function xs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Od(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(oi(r,a)&&Pt(o,"get",r),Pt(o,"get",a));const{has:l}=vs(o),c=e?Ca:n?so:wt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Pt(tt(r),"iterate",Ni),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(oi(r,a)&&Pt(o,"has",r),Pt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?Ca:n?so:wt;return!n&&Pt(l,"iterate",Ni),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Dt(t,n?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(r){!e&&!sn(r)&&!fi(r)&&(r=tt(r));const s=tt(this);return vs(s).has.call(s,r)||(s.add(r),Fn(s,"add",r,r)),this},set(r,s){!e&&!sn(s)&&!fi(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=vs(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?oi(s,u)&&Fn(o,"set",r,s):Fn(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=vs(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Fn(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&Fn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Fd(r,n,e)}),t}function Fl(n,e){const t=Od(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Bd={get:Fl(!1,!1)},zd={get:Fl(!1,!0)},Hd={get:Fl(!0,!1)};const Tf=new WeakMap,bf=new WeakMap,Af=new WeakMap,Vd=new WeakMap;function kd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gd(n){return n.__v_skip||!Object.isExtensible(n)?0:kd(pd(n))}function To(n){return fi(n)?n:Ol(n,!1,Ud,Bd,Tf)}function wf(n){return Ol(n,!1,Nd,zd,bf)}function Rf(n){return Ol(n,!0,Id,Hd,Af)}function Ol(n,e,t,i,r){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Gd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function hr(n){return fi(n)?hr(n.__v_raw):!!(n&&n.__v_isReactive)}function fi(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Bl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Wd(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&cf(n,"__v_skip",!0),n}const wt=n=>gt(n)?To(n):n,so=n=>gt(n)?Rf(n):n;function Lt(n){return n?n.__v_isRef===!0:!1}function Hi(n){return Cf(n,!1)}function Xd(n){return Cf(n,!0)}function Cf(n,e){return Lt(n)?n:new qd(n,e)}class qd{constructor(e,t){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||fi(e);e=i?e:tt(e),oi(e,t)&&(this._rawValue=e,this._value=i?e:wt(e),this.dep.trigger())}}function fn(n){return Lt(n)?n.value:n}const Yd={get:(n,e,t)=>e==="__v_raw"?n:fn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Lt(r)&&!Lt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Pf(n){return hr(n)?n:new Proxy(n,Yd)}class $d{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return mf(this,!0),!0}get value(){const e=this.dep.track();return vf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kd(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new $d(i,r,t)}const Ss={},oo=new WeakMap;let wi;function jd(n,e=!1,t=wi){if(t){let i=oo.get(t);i||oo.set(t,i=[]),i.push(n)}}function Zd(n,e,t=ft){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:sn(E)||r===!1||r===0?ri(E,1):ri(E);let u,f,h,d,v=!1,x=!1;if(Lt(n)?(f=()=>n.value,v=sn(n)):hr(n)?(f=()=>c(n),v=!0):Ve(n)?(x=!0,v=n.some(E=>hr(E)||sn(E)),f=()=>n.map(E=>{if(Lt(E))return E.value;if(hr(E))return c(E);if(Xe(E))return l?l(E,2):E()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Gn();try{h()}finally{Wn()}}const E=wi;wi=u;try{return l?l(n,3,[d]):n(d)}finally{wi=E}}:f=Tn,e&&r){const E=f,I=r===!0?1/0:r;f=()=>ri(E(),I)}const m=bd(),p=()=>{u.stop(),m&&m.active&&Pl(m.effects,u)};if(s&&e){const E=e;e=(...I)=>{E(...I),p()}}let w=x?new Array(n.length).fill(Ss):Ss;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(r||v||(x?I.some((C,P)=>oi(C,w[P])):oi(I,w))){h&&h();const C=wi;wi=u;try{const P=[I,w===Ss?void 0:x&&w[0]===Ss?[]:w,d];w=I,l?l(e,3,P):e(...P)}finally{wi=C}}}else u.run()};return a&&a(T),u=new df(f),u.scheduler=o?()=>o(T,!1):T,d=E=>jd(E,!1,u),h=u.onStop=()=>{const E=oo.get(u);if(E){if(l)l(E,4);else for(const I of E)I();oo.delete(u)}},e?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ri(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Lt(n))ri(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)ri(n[i],e,t);else if(rf(n)||fr(n))n.forEach(i=>{ri(i,e,t)});else if(af(n)){for(const i in n)ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(n,e,t,i){try{return i?n(...i):n()}catch(r){bo(r,e,t)}}function bn(n,e,t,i){if(Xe(n)){const r=cs(n,e,t,i);return r&&sf(r)&&r.catch(s=>{bo(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(bn(n[s],e,t,i));return r}}function bo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Gn(),cs(s,null,10,[n,l,c]),Wn();return}}Jd(n,t,r,i,o)}function Jd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let vn=-1;const dr=[];let ti=null,ar=0;const Lf=Promise.resolve();let ao=null;function Df(n){const e=ao||Lf;return n?e.then(this?n.bind(this):n):e}function Qd(n){let e=vn+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=Jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function zl(n){if(!(n.flags&1)){const e=Jr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=Jr(t)?Ot.push(n):Ot.splice(Qd(e),0,n),n.flags|=1,Uf()}}function Uf(){ao||(ao=Lf.then(Nf))}function ep(n){Ve(n)?dr.push(...n):ti&&n.id===-1?ti.splice(ar+1,0,n):n.flags&1||(dr.push(n),n.flags|=1),Uf()}function gc(n,e,t=vn+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function If(n){if(dr.length){const e=[...new Set(dr)].sort((t,i)=>Jr(t)-Jr(i));if(dr.length=0,ti){ti.push(...e);return}for(ti=e,ar=0;ar<ti.length;ar++){const t=ti[ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ti=null,ar=0}}const Jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Nf(n){try{for(vn=0;vn<Ot.length;vn++){const e=Ot[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<Ot.length;vn++){const e=Ot[vn];e&&(e.flags&=-2)}vn=-1,Ot.length=0,If(),ao=null,(Ot.length||dr.length)&&Nf()}}let En=null,Ff=null;function lo(n){const e=En;return En=n,Ff=n&&n.type.__scopeId||null,e}function Xs(n,e=En,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bc(-1);const s=lo(e);let o;try{o=n(...r)}finally{lo(s),i._d&&bc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Gn(),bn(l,t,8,[n.el,a,n,e]),Wn())}}const tp=Symbol("_vte"),np=n=>n.__isTeleport;function Hl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Of(n,e){return Xe(n)?Dt({name:n.name},e,{setup:n}):n}function Bf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function co(n,e,t,i,r=!1){if(Ve(n)){n.forEach((v,x)=>co(v,e&&(Ve(e)?e[x]:e),t,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&co(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Wl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,h=tt(f),d=f===ft?()=>!1:v=>nt(h,v);if(c!=null&&c!==l&&(Et(c)?(u[c]=null,d(c)&&(f[c]=null)):Lt(c)&&(c.value=null)),Xe(l))cs(l,a,12,[o,u]);else{const v=Et(l),x=Lt(l);if(v||x){const m=()=>{if(n.f){const p=v?d(l)?f[l]:u[l]:l.value;r?Ve(p)&&Pl(p,s):Ve(p)?p.includes(s)||p.push(s):v?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,d(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Kt(m,t)):m()}}}So().requestIdleCallback;So().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,zf=n=>n.type.__isKeepAlive;function ip(n,e){Hf(n,"a",e)}function rp(n,e){Hf(n,"da",e)}function Hf(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ao(e,i,t),t){let r=t.parent;for(;r&&r.parent;)zf(r.parent.vnode)&&sp(i,e,t,r),r=r.parent}}function sp(n,e,t,i){const r=Ao(e,n,i,!0);kf(()=>{Pl(i[e],r)},t)}function Ao(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Gn();const a=us(t),l=bn(e,t,n,o);return a(),Wn(),l});return i?r.unshift(s):r.push(s),s}}const Yn=n=>(e,t=zt)=>{(!ts||n==="sp")&&Ao(n,(...i)=>e(...i),t)},op=Yn("bm"),Vf=Yn("m"),ap=Yn("bu"),lp=Yn("u"),cp=Yn("bum"),kf=Yn("um"),up=Yn("sp"),fp=Yn("rtg"),hp=Yn("rtc");function dp(n,e=zt){Ao("ec",n,e)}const pp=Symbol.for("v-ndc");function Qr(n,e,t,i){let r;const s=t,o=Ve(n);if(o||Et(n)){const a=o&&hr(n);let l=!1,c=!1;a&&(l=!sn(n),c=fi(n),n=yo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?so(wt(n[u])):wt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Pa=n=>n?fh(n)?Wl(n):Pa(n.parent):null,qr=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pa(n.parent),$root:n=>Pa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Wf(n),$forceUpdate:n=>n.f||(n.f=()=>{zl(n.update)}),$nextTick:n=>n.n||(n.n=Df.bind(n.proxy)),$watch:n=>Np.bind(n)}),Vo=(n,e)=>n!==ft&&!n.__isScriptSetup&&nt(n,e),mp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Vo(i,e))return o[e]=1,i[e];if(r!==ft&&nt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(t!==ft&&nt(t,e))return o[e]=4,t[e];La&&(o[e]=0)}}const u=qr[e];let f,h;if(u)return e==="$attrs"&&Pt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Vo(r,e)?(r[e]=t,!0):i!==ft&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ft&&nt(n,o)||Vo(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(qr,o)||nt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _c(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let La=!0;function gp(n){const e=Wf(n),t=n.proxy,i=n.ctx;La=!1,e.beforeCreate&&vc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:T,unmounted:E,render:I,renderTracked:C,renderTriggered:P,errorCaptured:B,serverPrefetch:b,expose:y,inheritAttrs:U,components:te,directives:W,filters:ie}=e;if(c&&_p(c,i,null),o)for(const re in o){const z=o[re];Xe(z)&&(i[re]=z.bind(t))}if(r){const re=r.call(t,t);gt(re)&&(n.data=To(re))}if(La=!0,s)for(const re in s){const z=s[re],ge=Xe(z)?z.bind(t,t):Xe(z.get)?z.get.bind(t,t):Tn,xe=!Xe(z)&&Xe(z.set)?z.set.bind(t):Tn,Ce=nn({get:ge,set:xe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Fe=>Ce.value=Fe})}if(a)for(const re in a)Gf(a[re],i,t,re);if(l){const re=Xe(l)?l.call(t):l;Reflect.ownKeys(re).forEach(z=>{qs(z,re[z])})}u&&vc(u,n,"c");function $(re,z){Ve(z)?z.forEach(ge=>re(ge.bind(t))):z&&re(z.bind(t))}if($(op,f),$(Vf,h),$(ap,d),$(lp,v),$(ip,x),$(rp,m),$(dp,B),$(hp,C),$(fp,P),$(cp,w),$(kf,E),$(up,b),Ve(y))if(y.length){const re=n.exposed||(n.exposed={});y.forEach(z=>{Object.defineProperty(re,z,{get:()=>t[z],set:ge=>t[z]=ge})})}else n.exposed||(n.exposed={});I&&n.render===Tn&&(n.render=I),U!=null&&(n.inheritAttrs=U),te&&(n.components=te),W&&(n.directives=W),b&&Bf(n)}function _p(n,e,t=Tn){Ve(n)&&(n=Da(n));for(const i in n){const r=n[i];let s;gt(r)?"default"in r?s=Vn(r.from||i,r.default,!0):s=Vn(r.from||i):s=Vn(r),Lt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function vc(n,e,t){bn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gf(n,e,t,i){let r=i.includes(".")?ih(t,i):()=>t[i];if(Et(n)){const s=e[n];Xe(s)&&Ys(r,s)}else if(Xe(n))Ys(r,n.bind(t));else if(gt(n))if(Ve(n))n.forEach(s=>Gf(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Ys(r,s,n)}}function Wf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>uo(l,c,o,!0)),uo(l,e,o)),gt(e)&&s.set(e,l),l}function uo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&uo(n,s,t,!0),r&&r.forEach(o=>uo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=vp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const vp={data:xc,props:Sc,emits:Sc,methods:zr,computed:zr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:zr,directives:zr,watch:Sp,provide:xc,inject:xp};function xc(n,e){return e?n?function(){return Dt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function xp(n,e){return zr(Da(n),Da(e))}function Da(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function zr(n,e){return n?Dt(Object.create(null),n,e):e}function Sc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Dt(Object.create(null),_c(n),_c(e??{})):e}function Sp(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Xf(){return{app:null,config:{isNativeTag:hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mp=0;function Ep(n,e){return function(i,r=null){Xe(i)||(i=Dt({},i)),r!=null&&!gt(r)&&(r=null);const s=Xf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Mp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:tm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||pt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Wl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=pr;pr=c;try{return u()}finally{pr=f}}};return c}}let pr=null;function qs(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Vn(n,e,t=!1){const i=zt||En;if(i||pr){let r=pr?pr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const qf={},Yf=()=>Object.create(qf),$f=n=>Object.getPrototypeOf(n)===qf;function yp(n,e,t,i=!1){const r={},s=Yf();n.propsDefaults=Object.create(null),Kf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:wf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Tp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(wo(n.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=ui(h);r[v]=Ua(l,a,v,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Kf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=zi(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ua(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&Fn(n.attrs,"set","")}function Kf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;r&&nt(r,u=ui(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ua(r,l,f,c[f],n,!nt(c,f))}}return o}function Ua(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=us(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zi(t))&&(i=!0))}return i}const bp=new WeakMap;function jf(n,e,t=!1){const i=t?bp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,d]=jf(f,e,!0);Dt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return gt(n)&&i.set(n,ur),ur;if(Ve(s))for(let u=0;u<s.length;u++){const f=ui(s[u]);Mc(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=ui(u);if(Mc(f)){const h=s[u],d=o[f]=Ve(h)||Xe(h)?{type:h}:Dt({},h),v=d.type;let x=!1,m=!0;if(Ve(v))for(let p=0;p<v.length;++p){const w=v[p],T=Xe(w)&&w.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Xe(v)&&v.name==="Boolean";d[0]=x,d[1]=m,(x||nt(d,"default"))&&a.push(f)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function Mc(n){return n[0]!=="$"&&!kr(n)}const Vl=n=>n[0]==="_"||n==="$stable",kl=n=>Ve(n)?n.map(xn):[xn(n)],Ap=(n,e,t)=>{if(e._n)return e;const i=Xs((...r)=>kl(e(...r)),t);return i._c=!1,i},Zf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Vl(r))continue;const s=n[r];if(Xe(s))e[r]=Ap(r,s,i);else if(s!=null){const o=kl(s);e[r]=()=>o}}},Jf=(n,e)=>{const t=kl(e);n.slots.default=()=>t},Qf=(n,e,t)=>{for(const i in e)(t||!Vl(i))&&(n[i]=e[i])},wp=(n,e,t)=>{const i=n.slots=Yf();if(n.vnode.shapeFlag&32){const r=e._;r?(Qf(i,e,t),t&&cf(i,"_",r,!0)):Zf(e,i)}else e&&Jf(n,e)},Rp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Qf(r,e,t):(s=!e.$stable,Zf(e,r)),o=e}else e&&(Jf(n,e),o={default:1});if(s)for(const a in r)!Vl(a)&&o[a]==null&&delete r[a]},Kt=kp;function Cp(n){return Pp(n)}function Pp(n,e){const t=So();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Tn,insertStaticContent:v}=n,x=(A,R,_,Q=null,q=null,Y=null,Z=void 0,se=null,j=!!R.dynamicChildren)=>{if(A===R)return;A&&!Pr(A,R)&&(Q=N(A),Fe(A,q,Y,!0),A=null),R.patchFlag===-2&&(j=!1,R.dynamicChildren=null);const{type:K,ref:Se,shapeFlag:M}=R;switch(K){case Ro:m(A,R,_,Q);break;case hi:p(A,R,_,Q);break;case $s:A==null&&w(R,_,Q,Z);break;case Bt:te(A,R,_,Q,q,Y,Z,se,j);break;default:M&1?I(A,R,_,Q,q,Y,Z,se,j):M&6?W(A,R,_,Q,q,Y,Z,se,j):(M&64||M&128)&&K.process(A,R,_,Q,q,Y,Z,se,j,ae)}Se!=null&&q&&co(Se,A&&A.ref,Y,R||A,!R)},m=(A,R,_,Q)=>{if(A==null)i(R.el=a(R.children),_,Q);else{const q=R.el=A.el;R.children!==A.children&&c(q,R.children)}},p=(A,R,_,Q)=>{A==null?i(R.el=l(R.children||""),_,Q):R.el=A.el},w=(A,R,_,Q)=>{[A.el,A.anchor]=v(A.children,R,_,Q,A.el,A.anchor)},T=({el:A,anchor:R},_,Q)=>{let q;for(;A&&A!==R;)q=h(A),i(A,_,Q),A=q;i(R,_,Q)},E=({el:A,anchor:R})=>{let _;for(;A&&A!==R;)_=h(A),r(A),A=_;r(R)},I=(A,R,_,Q,q,Y,Z,se,j)=>{R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),A==null?C(R,_,Q,q,Y,Z,se,j):b(A,R,q,Y,Z,se,j)},C=(A,R,_,Q,q,Y,Z,se)=>{let j,K;const{props:Se,shapeFlag:M,transition:g,dirs:L}=A;if(j=A.el=o(A.type,Y,Se&&Se.is,Se),M&8?u(j,A.children):M&16&&B(A.children,j,null,Q,q,ko(A,Y),Z,se),L&&xi(A,null,Q,"created"),P(j,A,A.scopeId,Z,Q),Se){for(const J in Se)J!=="value"&&!kr(J)&&s(j,J,null,Se[J],Y,Q);"value"in Se&&s(j,"value",null,Se.value,Y),(K=Se.onVnodeBeforeMount)&&_n(K,Q,A)}L&&xi(A,null,Q,"beforeMount");const V=Lp(q,g);V&&g.beforeEnter(j),i(j,R,_),((K=Se&&Se.onVnodeMounted)||V||L)&&Kt(()=>{K&&_n(K,Q,A),V&&g.enter(j),L&&xi(A,null,Q,"mounted")},q)},P=(A,R,_,Q,q)=>{if(_&&d(A,_),Q)for(let Y=0;Y<Q.length;Y++)d(A,Q[Y]);if(q){let Y=q.subTree;if(R===Y||sh(Y.type)&&(Y.ssContent===R||Y.ssFallback===R)){const Z=q.vnode;P(A,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},B=(A,R,_,Q,q,Y,Z,se,j=0)=>{for(let K=j;K<A.length;K++){const Se=A[K]=se?ni(A[K]):xn(A[K]);x(null,Se,R,_,Q,q,Y,Z,se)}},b=(A,R,_,Q,q,Y,Z)=>{const se=R.el=A.el;let{patchFlag:j,dynamicChildren:K,dirs:Se}=R;j|=A.patchFlag&16;const M=A.props||ft,g=R.props||ft;let L;if(_&&Si(_,!1),(L=g.onVnodeBeforeUpdate)&&_n(L,_,R,A),Se&&xi(R,A,_,"beforeUpdate"),_&&Si(_,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(se,""),K?y(A.dynamicChildren,K,se,_,Q,ko(R,q),Y):Z||z(A,R,se,null,_,Q,ko(R,q),Y,!1),j>0){if(j&16)U(se,M,g,_,q);else if(j&2&&M.class!==g.class&&s(se,"class",null,g.class,q),j&4&&s(se,"style",M.style,g.style,q),j&8){const V=R.dynamicProps;for(let J=0;J<V.length;J++){const H=V[J],ye=M[H],pe=g[H];(pe!==ye||H==="value")&&s(se,H,ye,pe,q,_)}}j&1&&A.children!==R.children&&u(se,R.children)}else!Z&&K==null&&U(se,M,g,_,q);((L=g.onVnodeUpdated)||Se)&&Kt(()=>{L&&_n(L,_,R,A),Se&&xi(R,A,_,"updated")},Q)},y=(A,R,_,Q,q,Y,Z)=>{for(let se=0;se<R.length;se++){const j=A[se],K=R[se],Se=j.el&&(j.type===Bt||!Pr(j,K)||j.shapeFlag&198)?f(j.el):_;x(j,K,Se,null,Q,q,Y,Z,!0)}},U=(A,R,_,Q,q)=>{if(R!==_){if(R!==ft)for(const Y in R)!kr(Y)&&!(Y in _)&&s(A,Y,R[Y],null,q,Q);for(const Y in _){if(kr(Y))continue;const Z=_[Y],se=R[Y];Z!==se&&Y!=="value"&&s(A,Y,se,Z,q,Q)}"value"in _&&s(A,"value",R.value,_.value,q)}},te=(A,R,_,Q,q,Y,Z,se,j)=>{const K=R.el=A?A.el:a(""),Se=R.anchor=A?A.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:L}=R;L&&(se=se?se.concat(L):L),A==null?(i(K,_,Q),i(Se,_,Q),B(R.children||[],_,Se,q,Y,Z,se,j)):M>0&&M&64&&g&&A.dynamicChildren?(y(A.dynamicChildren,g,_,q,Y,Z,se),(R.key!=null||q&&R===q.subTree)&&eh(A,R,!0)):z(A,R,_,Se,q,Y,Z,se,j)},W=(A,R,_,Q,q,Y,Z,se,j)=>{R.slotScopeIds=se,A==null?R.shapeFlag&512?q.ctx.activate(R,_,Q,Z,j):ie(R,_,Q,q,Y,Z,j):ue(A,R,j)},ie=(A,R,_,Q,q,Y,Z)=>{const se=A.component=Kp(A,Q,q);if(zf(A)&&(se.ctx.renderer=ae),jp(se,!1,Z),se.asyncDep){if(q&&q.registerDep(se,$,Z),!A.el){const j=se.subTree=pt(hi);p(null,j,R,_)}}else $(se,A,R,_,q,Y,Z)},ue=(A,R,_)=>{const Q=R.component=A.component;if(Hp(A,R,_))if(Q.asyncDep&&!Q.asyncResolved){re(Q,R,_);return}else Q.next=R,Q.update();else R.el=A.el,Q.vnode=R},$=(A,R,_,Q,q,Y,Z)=>{const se=()=>{if(A.isMounted){let{next:M,bu:g,u:L,parent:V,vnode:J}=A;{const we=th(A);if(we){M&&(M.el=J.el,re(A,M,Z)),we.asyncDep.then(()=>{A.isUnmounted||se()});return}}let H=M,ye;Si(A,!1),M?(M.el=J.el,re(A,M,Z)):M=J,g&&Fo(g),(ye=M.props&&M.props.onVnodeBeforeUpdate)&&_n(ye,V,M,J),Si(A,!0);const pe=yc(A),Te=A.subTree;A.subTree=pe,x(Te,pe,f(Te.el),N(Te),A,q,Y),M.el=pe.el,H===null&&Vp(A,pe.el),L&&Kt(L,q),(ye=M.props&&M.props.onVnodeUpdated)&&Kt(()=>_n(ye,V,M,J),q)}else{let M;const{el:g,props:L}=R,{bm:V,m:J,parent:H,root:ye,type:pe}=A,Te=Xr(R);Si(A,!1),V&&Fo(V),!Te&&(M=L&&L.onVnodeBeforeMount)&&_n(M,H,R),Si(A,!0);{ye.ce&&ye.ce._injectChildStyle(pe);const we=A.subTree=yc(A);x(null,we,_,Q,A,q,Y),R.el=we.el}if(J&&Kt(J,q),!Te&&(M=L&&L.onVnodeMounted)){const we=R;Kt(()=>_n(M,H,we),q)}(R.shapeFlag&256||H&&Xr(H.vnode)&&H.vnode.shapeFlag&256)&&A.a&&Kt(A.a,q),A.isMounted=!0,R=_=Q=null}};A.scope.on();const j=A.effect=new df(se);A.scope.off();const K=A.update=j.run.bind(j),Se=A.job=j.runIfDirty.bind(j);Se.i=A,Se.id=A.uid,j.scheduler=()=>zl(Se),Si(A,!0),K()},re=(A,R,_)=>{R.component=A;const Q=A.vnode.props;A.vnode=R,A.next=null,Tp(A,R.props,Q,_),Rp(A,R.children,_),Gn(),gc(A),Wn()},z=(A,R,_,Q,q,Y,Z,se,j=!1)=>{const K=A&&A.children,Se=A?A.shapeFlag:0,M=R.children,{patchFlag:g,shapeFlag:L}=R;if(g>0){if(g&128){xe(K,M,_,Q,q,Y,Z,se,j);return}else if(g&256){ge(K,M,_,Q,q,Y,Z,se,j);return}}L&8?(Se&16&&be(K,q,Y),M!==K&&u(_,M)):Se&16?L&16?xe(K,M,_,Q,q,Y,Z,se,j):be(K,q,Y,!0):(Se&8&&u(_,""),L&16&&B(M,_,Q,q,Y,Z,se,j))},ge=(A,R,_,Q,q,Y,Z,se,j)=>{A=A||ur,R=R||ur;const K=A.length,Se=R.length,M=Math.min(K,Se);let g;for(g=0;g<M;g++){const L=R[g]=j?ni(R[g]):xn(R[g]);x(A[g],L,_,null,q,Y,Z,se,j)}K>Se?be(A,q,Y,!0,!1,M):B(R,_,Q,q,Y,Z,se,j,M)},xe=(A,R,_,Q,q,Y,Z,se,j)=>{let K=0;const Se=R.length;let M=A.length-1,g=Se-1;for(;K<=M&&K<=g;){const L=A[K],V=R[K]=j?ni(R[K]):xn(R[K]);if(Pr(L,V))x(L,V,_,null,q,Y,Z,se,j);else break;K++}for(;K<=M&&K<=g;){const L=A[M],V=R[g]=j?ni(R[g]):xn(R[g]);if(Pr(L,V))x(L,V,_,null,q,Y,Z,se,j);else break;M--,g--}if(K>M){if(K<=g){const L=g+1,V=L<Se?R[L].el:Q;for(;K<=g;)x(null,R[K]=j?ni(R[K]):xn(R[K]),_,V,q,Y,Z,se,j),K++}}else if(K>g)for(;K<=M;)Fe(A[K],q,Y,!0),K++;else{const L=K,V=K,J=new Map;for(K=V;K<=g;K++){const Le=R[K]=j?ni(R[K]):xn(R[K]);Le.key!=null&&J.set(Le.key,K)}let H,ye=0;const pe=g-V+1;let Te=!1,we=0;const ce=new Array(pe);for(K=0;K<pe;K++)ce[K]=0;for(K=L;K<=M;K++){const Le=A[K];if(ye>=pe){Fe(Le,q,Y,!0);continue}let De;if(Le.key!=null)De=J.get(Le.key);else for(H=V;H<=g;H++)if(ce[H-V]===0&&Pr(Le,R[H])){De=H;break}De===void 0?Fe(Le,q,Y,!0):(ce[De-V]=K+1,De>=we?we=De:Te=!0,x(Le,R[De],_,null,q,Y,Z,se,j),ye++)}const Ae=Te?Dp(ce):ur;for(H=Ae.length-1,K=pe-1;K>=0;K--){const Le=V+K,De=R[Le],_e=Le+1<Se?R[Le+1].el:Q;ce[K]===0?x(null,De,_,_e,q,Y,Z,se,j):Te&&(H<0||K!==Ae[H]?Ce(De,_,_e,2):H--)}}},Ce=(A,R,_,Q,q=null)=>{const{el:Y,type:Z,transition:se,children:j,shapeFlag:K}=A;if(K&6){Ce(A.component.subTree,R,_,Q);return}if(K&128){A.suspense.move(R,_,Q);return}if(K&64){Z.move(A,R,_,ae);return}if(Z===Bt){i(Y,R,_);for(let M=0;M<j.length;M++)Ce(j[M],R,_,Q);i(A.anchor,R,_);return}if(Z===$s){T(A,R,_);return}if(Q!==2&&K&1&&se)if(Q===0)se.beforeEnter(Y),i(Y,R,_),Kt(()=>se.enter(Y),q);else{const{leave:M,delayLeave:g,afterLeave:L}=se,V=()=>{A.ctx.isUnmounted?r(Y):i(Y,R,_)},J=()=>{M(Y,()=>{V(),L&&L()})};g?g(Y,V,J):J()}else i(Y,R,_)},Fe=(A,R,_,Q=!1,q=!1)=>{const{type:Y,props:Z,ref:se,children:j,dynamicChildren:K,shapeFlag:Se,patchFlag:M,dirs:g,cacheIndex:L}=A;if(M===-2&&(q=!1),se!=null&&(Gn(),co(se,null,_,A,!0),Wn()),L!=null&&(R.renderCache[L]=void 0),Se&256){R.ctx.deactivate(A);return}const V=Se&1&&g,J=!Xr(A);let H;if(J&&(H=Z&&Z.onVnodeBeforeUnmount)&&_n(H,R,A),Se&6)me(A.component,_,Q);else{if(Se&128){A.suspense.unmount(_,Q);return}V&&xi(A,null,R,"beforeUnmount"),Se&64?A.type.remove(A,R,_,ae,Q):K&&!K.hasOnce&&(Y!==Bt||M>0&&M&64)?be(K,R,_,!1,!0):(Y===Bt&&M&384||!q&&Se&16)&&be(j,R,_),Q&&Ze(A)}(J&&(H=Z&&Z.onVnodeUnmounted)||V)&&Kt(()=>{H&&_n(H,R,A),V&&xi(A,null,R,"unmounted")},_)},Ze=A=>{const{type:R,el:_,anchor:Q,transition:q}=A;if(R===Bt){ne(_,Q);return}if(R===$s){E(A);return}const Y=()=>{r(_),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:se}=q,j=()=>Z(_,Y);se?se(A.el,Y,j):j()}else Y()},ne=(A,R)=>{let _;for(;A!==R;)_=h(A),r(A),A=_;r(R)},me=(A,R,_)=>{const{bum:Q,scope:q,job:Y,subTree:Z,um:se,m:j,a:K,parent:Se,slots:{__:M}}=A;Ec(j),Ec(K),Q&&Fo(Q),Se&&Ve(M)&&M.forEach(g=>{Se.renderCache[g]=void 0}),q.stop(),Y&&(Y.flags|=8,Fe(Z,A,R,_)),se&&Kt(se,R),Kt(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},be=(A,R,_,Q=!1,q=!1,Y=0)=>{for(let Z=Y;Z<A.length;Z++)Fe(A[Z],R,_,Q,q)},N=A=>{if(A.shapeFlag&6)return N(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=h(A.anchor||A.el),_=R&&R[tp];return _?h(_):R};let ee=!1;const le=(A,R,_)=>{A==null?R._vnode&&Fe(R._vnode,null,null,!0):x(R._vnode||null,A,R,null,null,null,_),R._vnode=A,ee||(ee=!0,gc(),If(),ee=!1)},ae={p:x,um:Fe,m:Ce,r:Ze,mt:ie,mc:B,pc:z,pbc:y,n:N,o:n};return{render:le,hydrate:void 0,createApp:Ep(le)}}function ko({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Si({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Lp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function eh(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ni(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&eh(o,a)),a.type===Ro&&(a.el=o.el),a.type===hi&&!a.el&&(a.el=o.el)}}function Dp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function th(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:th(e)}function Ec(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Up=Symbol.for("v-scx"),Ip=()=>Vn(Up);function Ys(n,e,t){return nh(n,e,t)}function nh(n,e,t=ft){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dt({},t),l=e&&i||!e&&s!=="post";let c;if(ts){if(s==="sync"){const d=Ip();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Tn,d.resume=Tn,d.pause=Tn,d}}const u=zt;a.call=(d,v,x)=>bn(d,u,v,x);let f=!1;s==="post"?a.scheduler=d=>{Kt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():zl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Zd(n,e,a);return ts&&(c?c.push(h):l&&h()),h}function Np(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?ih(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=us(this),a=nh(r,s.bind(i),t);return o(),a}function ih(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Fp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ui(e)}Modifiers`]||n[`${zi(e)}Modifiers`];function Op(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let r=t;const s=e.startsWith("update:"),o=s&&Fp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Et(u)?u.trim():u)),o.number&&(r=t.map(_d)));let a,l=i[a=No(e)]||i[a=No(ui(e))];!l&&s&&(l=i[a=No(zi(e))]),l&&bn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(c,n,6,r)}}function rh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=rh(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(gt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Dt(o,s),gt(n)&&i.set(n,o),o)}function wo(n,e){return!n||!_o(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,zi(e))||nt(n,e))}function yc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:x}=n,m=lo(n);let p,w;try{if(t.shapeFlag&4){const E=r||i,I=E;p=xn(c.call(I,E,u,f,d,h,v)),w=a}else{const E=e;p=xn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),w=e.props?a:Bp(a)}}catch(E){Yr.length=0,bo(E,n,1),p=pt(hi)}let T=p;if(w&&x!==!1){const E=Object.keys(w),{shapeFlag:I}=T;E.length&&I&7&&(s&&E.some(Cl)&&(w=zp(w,s)),T=vr(T,w,!1,!0))}return t.dirs&&(T=vr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Hl(T,t.transition),p=T,lo(m),p}const Bp=n=>{let e;for(const t in n)(t==="class"||t==="style"||_o(t))&&((e||(e={}))[t]=n[t]);return e},zp=(n,e)=>{const t={};for(const i in n)(!Cl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Hp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Tc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!wo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tc(i,o,c):!0:!!o;return!1}function Tc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!wo(t,s))return!0}return!1}function Vp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const sh=n=>n.__isSuspense;function kp(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):ep(n)}const Bt=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),hi=Symbol.for("v-cmt"),$s=Symbol.for("v-stc"),Yr=[];let jt=null;function ct(n=!1){Yr.push(jt=n?null:[])}function Gp(){Yr.pop(),jt=Yr[Yr.length-1]||null}let es=1;function bc(n,e=!1){es+=n,n<0&&jt&&e&&(jt.hasOnce=!0)}function oh(n){return n.dynamicChildren=es>0?jt||ur:null,Gp(),es>0&&jt&&jt.push(n),n}function ht(n,e,t,i,r,s){return oh(Ye(n,e,t,i,r,s,!0))}function ah(n,e,t,i,r){return oh(pt(n,e,t,i,r,!0))}function fo(n){return n?n.__v_isVNode===!0:!1}function Pr(n,e){return n.type===e.type&&n.key===e.key}const lh=({key:n})=>n??null,Ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Lt(n)||Xe(n)?{i:En,r:n,k:e,f:!!t}:n:null);function Ye(n,e=null,t=null,i=0,r=null,s=n===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&lh(e),ref:e&&Ks(e),scopeId:Ff,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:En};return a?(Gl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),es>0&&!o&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const pt=Wp;function Wp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===pp)&&(n=hi),fo(n)){const a=vr(n,e,!0);return t&&Gl(a,t),es>0&&!s&&jt&&(a.shapeFlag&6?jt[jt.indexOf(n)]=a:jt.push(a)),a.patchFlag=-2,a}if(em(n)&&(n=n.__vccOpts),e){e=Xp(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Eo(a)),gt(l)&&(Bl(l)&&!Ve(l)&&(l=Dt({},l)),e.style=Mo(l))}const o=Et(n)?1:sh(n)?128:np(n)?64:gt(n)?4:Xe(n)?2:0;return Ye(n,e,t,i,r,o,s,!0)}function Xp(n){return n?Bl(n)||$f(n)?Dt({},n):n:null}function vr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?qp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&lh(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(Ks(e)):[s,Ks(e)]:Ks(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vr(n.ssContent),ssFallback:n.ssFallback&&vr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hl(u,l.clone(u)),u}function js(n=" ",e=0){return pt(Ro,null,n,e)}function ch(n,e){const t=pt($s,null,n);return t.staticCount=e,t}function uh(n="",e=!1){return e?(ct(),ah(hi,null,n)):pt(hi,null,n)}function xn(n){return n==null||typeof n=="boolean"?pt(hi):Ve(n)?pt(Bt,null,n.slice()):fo(n)?ni(n):pt(Ro,null,String(n))}function ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vr(n)}function Gl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!$f(e)?e._ctx=En:r===3&&En&&(En.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:En},t=32):(e=String(e),i&64?(t=16,e=[js(e)]):t=8);n.children=e,n.shapeFlag|=t}function qp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Eo([e.class,i.class]));else if(r==="style")e.style=Mo([e.style,i.style]);else if(_o(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _n(n,e,t,i=null){bn(n,e,7,[t,i])}const Yp=Xf();let $p=0;function Kp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Yp,s={uid:$p++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jf(i,r),emitsOptions:rh(i,r),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Op.bind(null,s),n.ce&&n.ce(s),s}let zt=null,ho,Ia;{const n=So(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ho=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),Ia=e("__VUE_SSR_SETTERS__",t=>ts=t)}const us=n=>{const e=zt;return ho(n),n.scope.on(),()=>{n.scope.off(),ho(e)}},Ac=()=>{zt&&zt.scope.off(),ho(null)};function fh(n){return n.vnode.shapeFlag&4}let ts=!1;function jp(n,e=!1,t=!1){e&&Ia(e);const{props:i,children:r}=n.vnode,s=fh(n);yp(n,i,s,e),wp(n,r,t||e);const o=s?Zp(n,e):void 0;return e&&Ia(!1),o}function Zp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,mp);const{setup:i}=t;if(i){Gn();const r=n.setupContext=i.length>1?Qp(n):null,s=us(n),o=cs(i,n,0,[n.props,r]),a=sf(o);if(Wn(),s(),(a||n.sp)&&!Xr(n)&&Bf(n),a){if(o.then(Ac,Ac),e)return o.then(l=>{wc(n,l)}).catch(l=>{bo(l,n,0)});n.asyncDep=o}else wc(n,o)}else hh(n)}function wc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Pf(e)),hh(n)}function hh(n,e,t){const i=n.type;n.render||(n.render=i.render||Tn);{const r=us(n);Gn();try{gp(n)}finally{Wn(),r()}}}const Jp={get(n,e){return Pt(n,"get",""),n[e]}};function Qp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Jp),slots:n.slots,emit:n.emit,expose:e}}function Wl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Pf(Wd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function em(n){return Xe(n)&&"__vccOpts"in n}const nn=(n,e)=>Kd(n,e,ts);function dh(n,e,t){const i=arguments.length;return i===2?gt(e)&&!Ve(e)?fo(e)?pt(n,null,[e]):pt(n,e):pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&fo(t)&&(t=[t]),pt(n,e,t))}const tm="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Na;const Rc=typeof window<"u"&&window.trustedTypes;if(Rc)try{Na=Rc.createPolicy("vue",{createHTML:n=>n})}catch{}const ph=Na?n=>Na.createHTML(n):n=>n,nm="http://www.w3.org/2000/svg",im="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,Cc=Nn&&Nn.createElement("template"),rm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(nm,n):e==="mathml"?Nn.createElementNS(im,n):t?Nn.createElement(n,{is:t}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Cc.innerHTML=ph(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Cc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},sm=Symbol("_vtc");function om(n,e,t){const i=n[sm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Pc=Symbol("_vod"),am=Symbol("_vsh"),lm=Symbol(""),cm=/(^|;)\s*display\s*:/;function um(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Zs(i,a,"")}else for(const o in e)t[o]==null&&Zs(i,o,"");for(const o in t)o==="display"&&(s=!0),Zs(i,o,t[o])}else if(r){if(e!==t){const o=i[lm];o&&(t+=";"+o),i.cssText=t,s=cm.test(t)}}else e&&n.removeAttribute("style");Pc in n&&(n[Pc]=s?i.display:"",n[am]&&(i.display="none"))}const Lc=/\s*!important$/;function Zs(n,e,t){if(Ve(t))t.forEach(i=>Zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=fm(n,e);Lc.test(t)?n.setProperty(zi(i),t.replace(Lc,""),"important"):n[i]=t}}const Dc=["Webkit","Moz","ms"],Go={};function fm(n,e){const t=Go[e];if(t)return t;let i=ui(e);if(i!=="filter"&&i in n)return Go[e]=i;i=lf(i);for(let r=0;r<Dc.length;r++){const s=Dc[r]+i;if(s in n)return Go[e]=s}return e}const Uc="http://www.w3.org/1999/xlink";function Ic(n,e,t,i,r,s=yd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uc,e.slice(6,e.length)):n.setAttributeNS(Uc,e,t):t==null||s&&!uf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":mi(t)?String(t):t)}function Nc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ph(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=uf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function hm(n,e,t,i){n.addEventListener(e,t,i)}function dm(n,e,t,i){n.removeEventListener(e,t,i)}const Fc=Symbol("_vei");function pm(n,e,t,i,r=null){const s=n[Fc]||(n[Fc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=mm(e);if(i){const c=s[e]=vm(i,r);hm(n,a,c,l)}else o&&(dm(n,a,o,l),s[e]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function mm(n){let e;if(Oc.test(n)){e={};let i;for(;i=n.match(Oc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zi(n.slice(2)),e]}let Wo=0;const gm=Promise.resolve(),_m=()=>Wo||(gm.then(()=>Wo=0),Wo=Date.now());function vm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(xm(i,t.value),e,5,[i])};return t.value=n,t.attached=_m(),t}function xm(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?om(n,i,o):e==="style"?um(n,t,i):_o(e)?Cl(e)||pm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mm(n,e,i,o))?(Nc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ic(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?Nc(n,ui(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ic(n,e,i,o))};function Mm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bc(e)&&Et(t)?!1:e in n}const Em=["ctrl","shift","alt","meta"],ym={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Em.some(t=>n[`${t}Key`]&&!e.includes(t))},Tm=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=ym[e[o]];if(a&&a(r,e))return}return n(r,...s)})},bm=Dt({patchProp:Sm},rm);let zc;function Am(){return zc||(zc=Cp(bm))}const wm=(...n)=>{const e=Am().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Cm(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Rm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Rm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Cm(n){return Et(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const lr=typeof document<"u";function Pm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const st=Object.assign;function Xo(n,e){const t={};for(const i in e){const r=e[i];t[i]=gn(r)?r.map(n):n(r)}return t}const $r=()=>{},gn=Array.isArray,mh=/#/g,Lm=/&/g,Dm=/\//g,Um=/=/g,Im=/\?/g,gh=/\+/g,Nm=/%5B/g,Fm=/%5D/g,_h=/%5E/g,Om=/%60/g,vh=/%7B/g,Bm=/%7C/g,xh=/%7D/g,zm=/%20/g;function Xl(n){return encodeURI(""+n).replace(Bm,"|").replace(Nm,"[").replace(Fm,"]")}function Hm(n){return Xl(n).replace(vh,"{").replace(xh,"}").replace(_h,"^")}function Fa(n){return Xl(n).replace(gh,"%2B").replace(zm,"+").replace(mh,"%23").replace(Lm,"%26").replace(Om,"`").replace(vh,"{").replace(xh,"}").replace(_h,"^")}function Vm(n){return Fa(n).replace(Um,"%3D")}function km(n){return Xl(n).replace(mh,"%23").replace(Im,"%3F")}function Gm(n){return n==null?"":km(n).replace(Dm,"%2F")}function ns(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Wm=/\/$/,Xm=n=>n.replace(Wm,"");function qo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Km(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ns(o)}}function qm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Hc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ym(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&xr(e.matched[i],t.matched[r])&&Sh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function xr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Sh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!$m(n[t],e[t]))return!1;return!0}function $m(n,e){return gn(n)?Vc(n,e):gn(e)?Vc(e,n):n===e}function Vc(n,e){return gn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Km(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var is;(function(n){n.pop="pop",n.push="push"})(is||(is={}));var Kr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Kr||(Kr={}));function jm(n){if(!n)if(lr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Xm(n)}const Zm=/^[^#]+#/;function Jm(n,e){return n.replace(Zm,"#")+e}function Qm(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Co=()=>({left:window.scrollX,top:window.scrollY});function eg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Qm(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kc(n,e){return(history.state?history.state.position-e:-1)+n}const Oa=new Map;function tg(n,e){Oa.set(n,e)}function ng(n){const e=Oa.get(n);return Oa.delete(n),e}let ig=()=>location.protocol+"//"+location.host;function Mh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Hc(l,"")}return Hc(t,n)+i+r}function rg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Mh(n,location),v=t.value,x=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===v){o=null;return}m=x?h.position-x.position:0}else i(d);r.forEach(p=>{p(t.value,v,{delta:m,type:is.pop,direction:m?m>0?Kr.forward:Kr.back:Kr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(st({},h.state,{scroll:Co()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Gc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Co():null}}function sg(n){const{history:e,location:t}=window,i={value:Mh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ig()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=st({},e.state,Gc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:Co()});s(u.current,u,!0);const f=st({},Gc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function og(n){n=jm(n);const e=sg(n),t=rg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=st({location:"",base:n,go:i,createHref:Jm.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ag(n){return typeof n=="string"||n&&typeof n=="object"}function Eh(n){return typeof n=="string"||typeof n=="symbol"}const yh=Symbol("");var Wc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Wc||(Wc={}));function Sr(n,e){return st(new Error,{type:n,[yh]:!0},e)}function Rn(n,e){return n instanceof Error&&yh in n&&(e==null||!!(n.type&e))}const Xc="[^/]+?",lg={sensitive:!1,strict:!1,start:!0,end:!0},cg=/[.+*?^${}()[\]/\\]/g;function ug(n,e){const t=st({},lg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(cg,"\\$&"),d+=40;else if(h.type===1){const{value:v,repeatable:x,optional:m,regexp:p}=h;s.push({name:v,repeatable:x,optional:m});const w=p||Xc;if(w!==Xc){d+=10;try{new RegExp(`(${w})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+E.message)}}let T=x?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,d+=20,m&&(d+=-8),x&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",v=s[h-1];f[v.name]=d&&v.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:v,repeatable:x,optional:m}=d,p=v in c?c[v]:"";if(gn(p)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=gn(p)?p.join("/"):p;if(!w)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function fg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Th(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=fg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(qc(i))return 1;if(qc(r))return-1}return r.length-i.length}function qc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const hg={type:0,value:""},dg=/[a-zA-Z0-9_]/;function pg(n){if(!n)return[[]];if(n==="/")return[[hg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:dg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function mg(n,e,t){const i=ug(pg(n.path),t),r=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gg(n,e){const t=[],i=new Map;e=Kc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const v=!d,x=_g(f);x.aliasOf=d&&d.record;const m=Kc(e,f),p=[x];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of E)p.push(st({},x,{components:d?d.record.components:x.components,path:I,aliasOf:d?d.record:x}))}let w,T;for(const E of p){const{path:I}=E;if(h&&I[0]!=="/"){const C=h.record.path,P=C[C.length-1]==="/"?"":"/";E.path=h.record.path+(I&&P+I)}if(w=mg(E,h,m),d?d.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),v&&f.name&&!$c(w)&&o(f.name)),bh(w)&&l(w),x.children){const C=x.children;for(let P=0;P<C.length;P++)s(C[P],w,d&&d.children[P])}d=d||w}return T?()=>{o(T)}:$r}function o(f){if(Eh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=Sg(f,t);t.splice(h,0,f),f.record.name&&!$c(f)&&i.set(f.record.name,f)}function c(f,h){let d,v={},x,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Sr(1,{location:f});m=d.record.name,v=st(Yc(h.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Yc(f.params,d.keys.map(T=>T.name))),x=d.stringify(v)}else if(f.path!=null)x=f.path,d=t.find(T=>T.re.test(x)),d&&(v=d.parse(x),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!d)throw Sr(1,{location:f,currentLocation:h});m=d.record.name,v=st({},h.params,f.params),x=d.stringify(v)}const p=[];let w=d;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:x,params:v,matched:p,meta:xg(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Yc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function _g(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:vg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function vg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function $c(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function xg(n){return n.reduce((e,t)=>st(e,t.meta),{})}function Kc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Sg(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Th(n,e[s])<0?i=s:t=s+1}const r=Mg(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Mg(n){let e=n;for(;e=e.parent;)if(bh(e)&&Th(n,e)===0)return e}function bh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Eg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(gh," "),o=s.indexOf("="),a=ns(o<0?s:s.slice(0,o)),l=o<0?null:ns(s.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function jc(n){let e="";for(let t in n){const i=n[t];if(t=Vm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(gn(i)?i.map(s=>s&&Fa(s)):[i&&Fa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function yg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Tg=Symbol(""),Zc=Symbol(""),ql=Symbol(""),Ah=Symbol(""),Ba=Symbol("");function Lr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ii(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Sr(4,{from:t,to:e})):h instanceof Error?l(h):ag(h)?l(Sr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Yo(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(bg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ii(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Pm(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ii(d,t,i,o,a,r)()}))}}return s}function bg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Jc(n){const e=Vn(ql),t=Vn(Ah),i=nn(()=>{const l=fn(n.to);return e.resolve(l)}),r=nn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(xr.bind(null,u));if(h>-1)return h;const d=Qc(l[c-2]);return c>1&&Qc(u)===d&&f[f.length-1].path!==d?f.findIndex(xr.bind(null,l[c-2])):h}),s=nn(()=>r.value>-1&&Rg(t.params,i.value.params)),o=nn(()=>r.value>-1&&r.value===t.matched.length-1&&Sh(t.params,i.value.params));function a(l={}){return wg(l)?e[fn(n.replace)?"replace":"push"](fn(n.to)).catch($r):Promise.resolve()}return{route:i,href:nn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Ag=Of({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jc,setup(n,{slots:e}){const t=To(Jc(n)),{options:i}=Vn(ql),r=nn(()=>({[eu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[eu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:dh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Js=Ag;function wg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Rg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!gn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const eu=(n,e,t)=>n??e??t,Cg=Of({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Vn(Ba),r=nn(()=>n.route||i.value),s=Vn(Zc,0),o=nn(()=>{let c=fn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=nn(()=>r.value.matched[o.value]);qs(Zc,nn(()=>o.value+1)),qs(Tg,a),qs(Ba,r);const l=Hi();return Ys(()=>[l.value,a.value,n.name],([c,u,f],[h,d,v])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!xr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return tu(t.default,{Component:h,route:c});const d=f.props[u],v=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=dh(h,st({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return tu(t.default,{Component:m,route:c})||m}}});function tu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const wh=Cg;function Pg(n){const e=gg(n.routes,n),t=n.parseQuery||Eg,i=n.stringifyQuery||jc,r=n.history,s=Lr(),o=Lr(),a=Lr(),l=Xd($n);let c=$n;lr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xo.bind(null,N=>""+N),f=Xo.bind(null,Gm),h=Xo.bind(null,ns);function d(N,ee){let le,ae;return Eh(N)?(le=e.getRecordMatcher(N),ae=ee):ae=N,e.addRoute(ae,le)}function v(N){const ee=e.getRecordMatcher(N);ee&&e.removeRoute(ee)}function x(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,ee){if(ee=st({},ee||l.value),typeof N=="string"){const _=qo(t,N,ee.path),Q=e.resolve({path:_.path},ee),q=r.createHref(_.fullPath);return st(_,Q,{params:h(Q.params),hash:ns(_.hash),redirectedFrom:void 0,href:q})}let le;if(N.path!=null)le=st({},N,{path:qo(t,N.path,ee.path).path});else{const _=st({},N.params);for(const Q in _)_[Q]==null&&delete _[Q];le=st({},N,{params:f(_)}),ee.params=f(ee.params)}const ae=e.resolve(le,ee),Oe=N.hash||"";ae.params=u(h(ae.params));const A=qm(i,st({},N,{hash:Hm(Oe),path:ae.path})),R=r.createHref(A);return st({fullPath:A,hash:Oe,query:i===jc?yg(N.query):N.query||{}},ae,{redirectedFrom:void 0,href:R})}function w(N){return typeof N=="string"?qo(t,N,l.value.path):st({},N)}function T(N,ee){if(c!==N)return Sr(8,{from:ee,to:N})}function E(N){return P(N)}function I(N){return E(st(w(N),{replace:!0}))}function C(N){const ee=N.matched[N.matched.length-1];if(ee&&ee.redirect){const{redirect:le}=ee;let ae=typeof le=="function"?le(N):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=w(ae):{path:ae},ae.params={}),st({query:N.query,hash:N.hash,params:ae.path!=null?{}:N.params},ae)}}function P(N,ee){const le=c=p(N),ae=l.value,Oe=N.state,A=N.force,R=N.replace===!0,_=C(le);if(_)return P(st(w(_),{state:typeof _=="object"?st({},Oe,_.state):Oe,force:A,replace:R}),ee||le);const Q=le;Q.redirectedFrom=ee;let q;return!A&&Ym(i,ae,le)&&(q=Sr(16,{to:Q,from:ae}),Ce(ae,ae,!0,!1)),(q?Promise.resolve(q):y(Q,ae)).catch(Y=>Rn(Y)?Rn(Y,2)?Y:xe(Y):z(Y,Q,ae)).then(Y=>{if(Y){if(Rn(Y,2))return P(st({replace:R},w(Y.to),{state:typeof Y.to=="object"?st({},Oe,Y.to.state):Oe,force:A}),ee||Q)}else Y=te(Q,ae,!0,R,Oe);return U(Q,ae,Y),Y})}function B(N,ee){const le=T(N,ee);return le?Promise.reject(le):Promise.resolve()}function b(N){const ee=ne.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(N):N()}function y(N,ee){let le;const[ae,Oe,A]=Lg(N,ee);le=Yo(ae.reverse(),"beforeRouteLeave",N,ee);for(const _ of ae)_.leaveGuards.forEach(Q=>{le.push(ii(Q,N,ee))});const R=B.bind(null,N,ee);return le.push(R),be(le).then(()=>{le=[];for(const _ of s.list())le.push(ii(_,N,ee));return le.push(R),be(le)}).then(()=>{le=Yo(Oe,"beforeRouteUpdate",N,ee);for(const _ of Oe)_.updateGuards.forEach(Q=>{le.push(ii(Q,N,ee))});return le.push(R),be(le)}).then(()=>{le=[];for(const _ of A)if(_.beforeEnter)if(gn(_.beforeEnter))for(const Q of _.beforeEnter)le.push(ii(Q,N,ee));else le.push(ii(_.beforeEnter,N,ee));return le.push(R),be(le)}).then(()=>(N.matched.forEach(_=>_.enterCallbacks={}),le=Yo(A,"beforeRouteEnter",N,ee,b),le.push(R),be(le))).then(()=>{le=[];for(const _ of o.list())le.push(ii(_,N,ee));return le.push(R),be(le)}).catch(_=>Rn(_,8)?_:Promise.reject(_))}function U(N,ee,le){a.list().forEach(ae=>b(()=>ae(N,ee,le)))}function te(N,ee,le,ae,Oe){const A=T(N,ee);if(A)return A;const R=ee===$n,_=lr?history.state:{};le&&(ae||R?r.replace(N.fullPath,st({scroll:R&&_&&_.scroll},Oe)):r.push(N.fullPath,Oe)),l.value=N,Ce(N,ee,le,R),xe()}let W;function ie(){W||(W=r.listen((N,ee,le)=>{if(!me.listening)return;const ae=p(N),Oe=C(ae);if(Oe){P(st(Oe,{replace:!0}),ae).catch($r);return}c=ae;const A=l.value;lr&&tg(kc(A.fullPath,le.delta),Co()),y(ae,A).catch(R=>Rn(R,12)?R:Rn(R,2)?(P(R.to,ae).then(_=>{Rn(_,20)&&!le.delta&&le.type===is.pop&&r.go(-1,!1)}).catch($r),Promise.reject()):(le.delta&&r.go(-le.delta,!1),z(R,ae,A))).then(R=>{R=R||te(ae,A,!1),R&&(le.delta&&!Rn(R,8)?r.go(-le.delta,!1):le.type===is.pop&&Rn(R,20)&&r.go(-1,!1)),U(ae,A,R)}).catch($r)}))}let ue=Lr(),$=Lr(),re;function z(N,ee,le){xe(N);const ae=$.list();return ae.length?ae.forEach(Oe=>Oe(N,ee,le)):console.error(N),Promise.reject(N)}function ge(){return re&&l.value!==$n?Promise.resolve():new Promise((N,ee)=>{ue.add([N,ee])})}function xe(N){return re||(re=!N,ie(),ue.list().forEach(([ee,le])=>N?le(N):ee()),ue.reset()),N}function Ce(N,ee,le,ae){const{scrollBehavior:Oe}=n;if(!lr||!Oe)return Promise.resolve();const A=!le&&ng(kc(N.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return Df().then(()=>Oe(N,ee,A)).then(R=>R&&eg(R)).catch(R=>z(R,N,ee))}const Fe=N=>r.go(N);let Ze;const ne=new Set,me={currentRoute:l,listening:!0,addRoute:d,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:E,replace:I,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ge,install(N){const ee=this;N.component("RouterLink",Js),N.component("RouterView",wh),N.config.globalProperties.$router=ee,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>fn(l)}),lr&&!Ze&&l.value===$n&&(Ze=!0,E(r.location).catch(Oe=>{}));const le={};for(const Oe in $n)Object.defineProperty(le,Oe,{get:()=>l.value[Oe],enumerable:!0});N.provide(ql,ee),N.provide(Ah,wf(le)),N.provide(Ba,l);const ae=N.unmount;ne.add(N),N.unmount=function(){ne.delete(N),ne.size<1&&(c=$n,W&&W(),W=null,l.value=$n,Ze=!1,re=!1),ae()}}};function be(N){return N.reduce((ee,le)=>ee.then(()=>b(le)),Promise.resolve())}return me}function Lg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>xr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>xr(c,l))||r.push(l))}return[t,i,r]}const Dg="/assets/indeed_logo-B-kKN5vA.webp",Ug="/assets/github_logo-CQOl0T3p.webp",Xt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Ig={},Ng={class:"footer-content"};function Fg(n,e){return ct(),ht("div",Ng,e[0]||(e[0]=[ch('<a href="https://www.linkedin.com/in/sreesh-poudyal-15977117b/" target="_blank" data-v-9ec8171f><img src="'+Dg+'" alt="Linkedin" data-v-9ec8171f></a><a href="https://github.com/sreesh101" target="_blank" data-v-9ec8171f><img src="'+Ug+'" alt="Github" data-v-9ec8171f></a><p class="whitewhite" data-v-9ec8171f>© 2025. Sreesh Poudyal</p>',3)]))}const Og=Xt(Ig,[["render",Fg],["__scopeId","data-v-9ec8171f"]]),Bg={class:"layout"},zg={class:"wrapper"},Hg={class:"main-content"},Vg={__name:"App",setup(n){return(e,t)=>(ct(),ht("div",Bg,[Ye("header",null,[Ye("div",zg,[Ye("nav",null,[pt(fn(Js),{to:"/"},{default:Xs(()=>t[0]||(t[0]=[js("Home")])),_:1,__:[0]}),pt(fn(Js),{to:"/about"},{default:Xs(()=>t[1]||(t[1]=[js("About")])),_:1,__:[1]}),pt(fn(Js),{to:"/contact"},{default:Xs(()=>t[2]||(t[2]=[js("Contact")])),_:1,__:[2]})])])]),Ye("main",Hg,[pt(fn(wh))]),pt(Og)]))}},kg=Xt(Vg,[["__scopeId","data-v-73932655"]]),Gg="modulepreload",Wg=function(n){return"/"+n},nu={},iu=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Wg(l),l in nu)return;nu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Gg,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="177",Xg=0,ru=1,qg=2,Rh=1,Yg=2,In=3,di=0,Gt=1,On=2,ai=0,mr=1,su=2,ou=3,au=4,$g=5,Pi=100,Kg=101,jg=102,Zg=103,Jg=104,Qg=200,e_=201,t_=202,n_=203,za=204,Ha=205,i_=206,r_=207,s_=208,o_=209,a_=210,l_=211,c_=212,u_=213,f_=214,Va=0,ka=1,Ga=2,Mr=3,Wa=4,Xa=5,qa=6,Ya=7,Ch=0,h_=1,d_=2,li=0,p_=1,m_=2,g_=3,__=4,v_=5,x_=6,S_=7,Ph=300,Er=301,yr=302,$a=303,Ka=304,Po=306,ja=1e3,Di=1001,Za=1002,pn=1003,M_=1004,Ms=1005,yn=1006,$o=1007,Ui=1008,Xn=1009,Lh=1010,Dh=1011,rs=1012,$l=1013,Oi=1014,Bn=1015,fs=1016,Kl=1017,jl=1018,ss=1020,Uh=35902,Ih=1021,Nh=1022,hn=1023,os=1026,as=1027,Fh=1028,Zl=1029,Oh=1030,Jl=1031,Ql=1033,Qs=33776,eo=33777,to=33778,no=33779,Ja=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,rl=37496,sl=37808,ol=37809,al=37810,ll=37811,cl=37812,ul=37813,fl=37814,hl=37815,dl=37816,pl=37817,ml=37818,gl=37819,_l=37820,vl=37821,io=36492,xl=36494,Sl=36495,Bh=36283,Ml=36284,El=36285,yl=36286,E_=3200,y_=3201,T_=0,b_=1,si="",en="srgb",Tr="srgb-linear",po="linear",at="srgb",Gi=7680,lu=519,A_=512,w_=513,R_=514,zh=515,C_=516,P_=517,L_=518,D_=519,Tl=35044,cu="300 es",zn=2e3,mo=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,bl=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function U_(n,e){return(n%e+e)%e}function jo(n,e,t){return(1-t)*n+t*e}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==v){let m=1-a;const p=l*h+c*d+u*v+f*x,w=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const I=Math.sqrt(T),C=Math.atan2(I,p*w);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const E=a*w;if(l=l*m+h*E,c=c*m+d*E,u=u*m+v*E,f=f*m+x*E,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*d-c*h,e[t+1]=l*v+u*h+c*f-a*d,e[t+2]=c*v+u*d+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new k,uu=new hs;class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],v=i[8],x=r[0],m=r[3],p=r[6],w=r[1],T=r[4],E=r[7],I=r[2],C=r[5],P=r[8];return s[0]=o*x+a*w+l*I,s[3]=o*m+a*T+l*C,s[6]=o*p+a*E+l*P,s[1]=c*x+u*w+f*I,s[4]=c*m+u*T+f*C,s[7]=c*p+u*E+f*P,s[2]=h*x+d*w+v*I,s[5]=h*m+d*T+v*C,s[8]=h*p+d*E+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,v=t*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new We;function Hh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function I_(){const n=ls("canvas");return n.style.display="block",n}const fu={};function gr(n){n in fu||(fu[n]=!0,console.warn(n))}function N_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function F_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){const n={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?po:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Tr]:{primaries:e,whitePoint:i,transfer:po,toXYZ:hu,fromXYZ:du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:at,toXYZ:hu,fromXYZ:du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const Qe=B_();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class z_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=ls("canvas")),Wi.width=e.width,Wi.height=e.height;const r=Wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qo(r[o].image)):s.push(Qo(r[o]))}else s=Qo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?z_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;const ea=new k;class Ht extends Ar{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Di,r=Di,s=yn,o=Ui,a=hn,l=Xn,c=Ht.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ci(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Ph;Ht.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(d+1)/2,I=(p+1)/2,C=(u+h)/4,P=(f+x)/4,B=(v+m)/4;return T>E&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=P/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=B/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=B/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(f-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends Ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ht(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends k_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vh extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G_ extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),ys.subVectors(this.max,Dr),Xi.subVectors(e.a,Dr),qi.subVectors(e.b,Dr),Yi.subVectors(e.c,Dr),Kn.subVectors(qi,Xi),jn.subVectors(Yi,qi),Mi.subVectors(Xi,Yi);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-Mi.z,Mi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,Mi.z,0,-Mi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-Mi.y,Mi.x,0];return!ta(t,Xi,qi,Yi,ys)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Xi,qi,Yi,ys))?!1:(Ts.crossVectors(Kn,jn),t=[Ts.x,Ts.y,Ts.z],ta(t,Xi,qi,Yi,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new k,new k,new k,new k,new k,new k,new k,new k],ln=new k,Es=new ds,Xi=new k,qi=new k,Yi=new k,Kn=new k,jn=new k,Mi=new k,Dr=new k,ys=new k,Ts=new k,Ei=new k;function ta(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ei.fromArray(n,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const W_=new ds,Ur=new k,na=new k;class tc{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):W_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(na)),this.expandByPoint(Ur.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new k,ia=new k,bs=new k,Zn=new k,ra=new k,As=new k,sa=new k;class kh{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ia.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),a=Zn.dot(this.direction),l=-Zn.dot(bs),c=Zn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ia).addScaledVector(bs,h),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){ra.subVectors(t,e),As.subVectors(i,e),sa.crossVectors(ra,As);let o=this.direction.dot(sa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot(As.crossVectors(Zn,As));if(l<0)return null;const c=a*this.direction.dot(ra.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(sa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,v,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,v,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=v+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,x=c*f;t[0]=h+x*a,t[4]=v*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=v*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,q_)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Jn.crossVectors(i,Yt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Jn.crossVectors(i,Yt)),Jn.normalize(),ws.crossVectors(Yt,Jn),r[0]=Jn.x,r[4]=ws.x,r[8]=Yt.x,r[1]=Jn.y,r[5]=ws.y,r[9]=Yt.y,r[2]=Jn.z,r[6]=ws.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],v=i[2],x=i[6],m=i[10],p=i[14],w=i[3],T=i[7],E=i[11],I=i[15],C=r[0],P=r[4],B=r[8],b=r[12],y=r[1],U=r[5],te=r[9],W=r[13],ie=r[2],ue=r[6],$=r[10],re=r[14],z=r[3],ge=r[7],xe=r[11],Ce=r[15];return s[0]=o*C+a*y+l*ie+c*z,s[4]=o*P+a*U+l*ue+c*ge,s[8]=o*B+a*te+l*$+c*xe,s[12]=o*b+a*W+l*re+c*Ce,s[1]=u*C+f*y+h*ie+d*z,s[5]=u*P+f*U+h*ue+d*ge,s[9]=u*B+f*te+h*$+d*xe,s[13]=u*b+f*W+h*re+d*Ce,s[2]=v*C+x*y+m*ie+p*z,s[6]=v*P+x*U+m*ue+p*ge,s[10]=v*B+x*te+m*$+p*xe,s[14]=v*b+x*W+m*re+p*Ce,s[3]=w*C+T*y+E*ie+I*z,s[7]=w*P+T*U+E*ue+I*ge,s[11]=w*B+T*te+E*$+I*xe,s[15]=w*b+T*W+E*re+I*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],x=e[13],m=e[14],p=e[15],w=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,T=v*h*c-u*m*c-v*l*d+o*m*d+u*l*p-o*h*p,E=u*x*c-v*f*c+v*a*d-o*x*d-u*a*p+o*f*p,I=v*f*l-u*x*l-v*a*h+o*x*h+u*a*m-o*f*m,C=t*w+i*T+r*E+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=w*P,e[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*P,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*P,e[4]=T*P,e[5]=(u*m*s-v*h*s+v*r*d-t*m*d-u*r*p+t*h*p)*P,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*p-t*l*p)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*P,e[8]=E*P,e[9]=(v*f*s-u*x*s-v*i*d+t*x*d+u*i*p-t*f*p)*P,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*p+t*a*p)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*P,e[12]=I*P,e[13]=(u*x*r-v*f*r+v*i*h-t*x*h-u*i*m+t*f*m)*P,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,v=s*f,x=o*u,m=o*f,p=a*f,w=l*c,T=l*u,E=l*f,I=i.x,C=i.y,P=i.z;return r[0]=(1-(x+p))*I,r[1]=(d+E)*I,r[2]=(v-T)*I,r[3]=0,r[4]=(d-E)*C,r[5]=(1-(h+p))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(v+T)*P,r[9]=(m-w)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),a=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,u=1/o,f=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,v;if(a===zn)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===mo)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let v,x;if(a===zn)v=(o+s)*f,x=-2*f;else if(a===mo)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new k,cn=new xt,X_=new k(0,0,0),q_=new k(1,1,1),Jn=new k,ws=new k,Yt=new k,pu=new xt,mu=new hs;class qn{constructor(e=0,t=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const gu=new k,Ki=new hs,Ln=new xt,Rs=new k,Ir=new k,$_=new k,K_=new hs,_u=new k(1,0,0),vu=new k(0,1,0),xu=new k(0,0,1),Su={type:"added"},j_={type:"removed"},ji={type:"childadded",child:null},oa={type:"childremoved",child:null};class Wt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new k,t=new qn,i=new hs,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rs.copy(e):Rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ir,Rs,this.up):Ln.lookAt(Rs,Ir,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j_),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new k(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new k,Dn=new k,aa=new k,Un=new k,Zi=new k,Ji=new k,Mu=new k,la=new k,ca=new k,ua=new k,fa=new St,ha=new St,da=new St;class rn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),Dn.subVectors(i,t),aa.subVectors(e,t);const o=un.dot(un),a=un.dot(Dn),l=un.dot(aa),c=Dn.dot(Dn),u=Dn.dot(aa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return fa.setScalar(0),ha.setScalar(0),da.setScalar(0),fa.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,i),da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(fa,s.x),o.addScaledVector(ha,s.y),o.addScaledVector(da,s.z),o}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),Dn.subVectors(e,t),un.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),un.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zi.subVectors(r,i),Ji.subVectors(s,i),la.subVectors(e,i);const l=Zi.dot(la),c=Ji.dot(la);if(l<=0&&c<=0)return t.copy(i);ca.subVectors(e,r);const u=Zi.dot(ca),f=Ji.dot(ca);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Zi,o);ua.subVectors(e,s);const d=Zi.dot(ua),v=Ji.dot(ua);if(v>=0&&d<=v)return t.copy(s);const x=d*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Ji,a);const m=u*v-d*f;if(m<=0&&f-u>=0&&d-v>=0)return Mu.subVectors(s,r),a=(f-u)/(f-u+(d-v)),t.copy(r).addScaledVector(Mu,a);const p=1/(m+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=U_(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pa(o,s,e+1/3),this.g=pa(o,s,e),this.b=pa(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=Gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Qe.workingToColorSpace(Ct.copy(this),e),Math.round(Ke(Ct.r*255,0,255))*65536+Math.round(Ke(Ct.g*255,0,255))*256+Math.round(Ke(Ct.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=en){Qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Cs);const i=jo(Qn.h,Cs.h,t),r=jo(Qn.s,Cs.s,t),s=jo(Qn.l,Cs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new ot;ot.NAMES=Gh;let Z_=0;class ps extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=mr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ha&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wh extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new k,Ps=new je;let J_=0;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tl,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}}class Xh extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qh extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fi extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Q_=0;const Qt=new xt,ma=new Wt,Qi=new k,$t=new ds,Nr=new ds,bt=new k;class gi extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?qh:Xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors($t.min,Nr.min),$t.expandByPoint(bt),bt.addVectors($t.max,Nr.max),$t.expandByPoint(bt)):($t.expandByPoint(Nr.min),$t.expandByPoint(Nr.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),bt.add(Qi)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new k,l[B]=new k;const c=new k,u=new k,f=new k,h=new je,d=new je,v=new je,x=new k,m=new k;function p(B,b,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),v.sub(h);const U=1/(d.x*v.y-v.x*d.y);isFinite(U)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(U),a[B].add(x),a[b].add(x),a[y].add(x),l[B].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let B=0,b=w.length;B<b;++B){const y=w[B],U=y.start,te=y.count;for(let W=U,ie=U+te;W<ie;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new k,E=new k,I=new k,C=new k;function P(B){I.fromBufferAttribute(r,B),C.copy(I);const b=a[B];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(C,b);const U=E.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,U)}for(let B=0,b=w.length;B<b;++B){const y=w[B],U=y.start,te=y.count;for(let W=U,ie=U+te;W<ie;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[v++]=c[d++]}return new mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new xt,yi=new kh,Ls=new tc,yu=new k,Ds=new k,Us=new k,Is=new k,ga=new k,Ns=new k,Tu=new k,Fs=new k;class Hn extends Wt{constructor(e=new gi,t=new Wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ga.fromBufferAttribute(f,e),o?Ns.addScaledVector(ga,u):Ns.addScaledVector(ga.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(Ls.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ls,yu)===null||yi.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(Eu.copy(s).invert(),yi.copy(e.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],p=o[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,I=T;E<I;E+=3){const C=a.getX(E),P=a.getX(E+1),B=a.getX(E+2);r=Os(this,p,e,i,c,u,f,C,P,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const w=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=Os(this,o,e,i,c,u,f,w,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],p=o[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,I=T;E<I;E+=3){const C=E,P=E+1,B=E+2;r=Os(this,p,e,i,c,u,f,C,P,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const w=m,T=m+1,E=m+2;r=Os(this,o,e,i,c,u,f,w,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ev(n,e,t,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===di,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:n}}function Os(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ds),n.getVertexPosition(l,Us),n.getVertexPosition(c,Is);const u=ev(n,e,t,i,Ds,Us,Is,Tu);if(u){const f=new k;rn.getBarycoord(Tu,Ds,Us,Is,f),r&&(u.uv=rn.getInterpolatedAttribute(r,a,l,c,f,new je)),s&&(u.uv1=rn.getInterpolatedAttribute(s,a,l,c,f,new je)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};rn.getNormal(Ds,Us,Is,h.normal),u.face=h,u.barycoord=f}return u}class ms extends gi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(u,3)),this.setAttribute("uv",new Fi(f,2));function v(x,m,p,w,T,E,I,C,P,B,b){const y=E/P,U=I/B,te=E/2,W=I/2,ie=C/2,ue=P+1,$=B+1;let re=0,z=0;const ge=new k;for(let xe=0;xe<$;xe++){const Ce=xe*U-W;for(let Fe=0;Fe<ue;Fe++){const Ze=Fe*y-te;ge[x]=Ze*w,ge[m]=Ce*T,ge[p]=ie,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[p]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Fe/P),f.push(1-xe/B),re+=1}}for(let xe=0;xe<B;xe++)for(let Ce=0;Ce<P;Ce++){const Fe=h+Ce+ue*xe,Ze=h+Ce+ue*(xe+1),ne=h+(Ce+1)+ue*(xe+1),me=h+(Ce+1)+ue*xe;l.push(Fe,Ze,me),l.push(Ze,ne,me),z+=6}a.addGroup(d,z,b),d+=z,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=br(n[t]);for(const r in i)e[r]=i[r]}return e}function tv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const nv={clone:br,merge:Ft};var iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $h extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new k,bu=new je,Au=new je;class tn extends $h{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,bu,Au),t.subVectors(Au,bu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class sv extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(er,tr,e,t);r.layers=this.layers,this.add(r);const s=new tn(er,tr,e,t);s.layers=this.layers,this.add(s);const o=new tn(er,tr,e,t);o.layers=this.layers,this.add(o);const a=new tn(er,tr,e,t);a.layers=this.layers,this.add(a);const l=new tn(er,tr,e,t);l.layers=this.layers,this.add(l);const c=new tn(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Kh extends Ht{constructor(e=[],t=Er,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ov extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ms(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ai});s.uniforms.tEquirect.value=t;const o=new Hn(r,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=yn),new sv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Hr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const av={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(av)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lv extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new k;class go{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new go(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jh extends ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const Fr=new k,ir=new k,rr=new k,sr=new je,Or=new je,Zh=new xt,Bs=new k,Br=new k,zs=new k,wu=new je,va=new je,Ru=new je;class uv extends Wt{constructor(e=new jh){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new gi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cv(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new go(i,3,0,!1)),nr.setAttribute("uv",new go(i,2,3,!1))}this.geometry=nr,this.material=e,this.center=new je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-rr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Hs(Bs.set(-.5,-.5,0),rr,o,ir,r,s),Hs(Br.set(.5,-.5,0),rr,o,ir,r,s),Hs(zs.set(.5,.5,0),rr,o,ir,r,s),wu.set(0,0),va.set(1,0),Ru.set(1,1);let a=e.ray.intersectTriangle(Bs,Br,zs,!1,Fr);if(a===null&&(Hs(Br.set(-.5,.5,0),rr,o,ir,r,s),va.set(0,1),a=e.ray.intersectTriangle(Bs,zs,Br,!1,Fr),a===null))return;const l=e.ray.origin.distanceTo(Fr);l<e.near||l>e.far||t.push({distance:l,point:Fr.clone(),uv:rn.getInterpolation(Fr,Bs,Br,zs,wu,va,Ru,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hs(n,e,t,i,r,s){sr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Or.x=s*sr.x-r*sr.y,Or.y=r*sr.x+s*sr.y):Or.copy(sr),n.copy(e),n.x+=Or.x,n.y+=Or.y,n.applyMatrix4(Zh)}const xa=new k,fv=new k,hv=new We;class Ri{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xa.subVectors(i,t).cross(fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hv.getNormalMatrix(e),r=this.coplanarPoint(xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new tc,Vs=new k;class Jh{constructor(e=new Ri,t=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],v=r[9],x=r[10],m=r[11],p=r[12],w=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-d,E-p).normalize(),i[1].setComponents(l+s,h+c,m+d,E+p).normalize(),i[2].setComponents(l+o,h+u,m+v,E+w).normalize(),i[3].setComponents(l-o,h-u,m-v,E-w).normalize(),i[4].setComponents(l-a,h-f,m-x,E-T).normalize(),t===zn)i[5].setComponents(l+a,h+f,m+x,E+T).normalize();else if(t===mo)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qh extends Ht{constructor(e,t,i=Oi,r,s,o,a=pn,l=pn,c,u=os,f=1){if(u!==os&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lo extends gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],v=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*h-o;for(let T=0;T<c;T++){const E=T*f-s;v.push(E,-w,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const T=w+c*p,E=w+c*(p+1),I=w+1+c*(p+1),C=w+1+c*p;d.push(T,E,C),d.push(E,I,C)}this.setIndex(d),this.setAttribute("position",new Fi(v,3)),this.setAttribute("normal",new Fi(x,3)),this.setAttribute("uv",new Fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}class dv extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mv{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const gv=new mv;class ic{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ic.DEFAULT_MATERIAL_NAME="__DEFAULT";class _v extends ic{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ls("img");function l(){u(),Cu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vv extends ic{constructor(e){super(e)}load(e,t,i,r){const s=new Ht,o=new _v(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xv extends $h{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sv extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pu=new xt;class Mv{constructor(e,t,i=0,r=1/0){this.ray=new kh(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,i=[]){return Al(e,this,i,t),i.sort(Lu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Al(e[r],this,i,t);return i.sort(Lu),i}}function Lu(n,e){return n.distance-e.distance}function Al(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Al(s[o],e,t,!0)}}function Du(n,e,t,i){const r=Ev(i);switch(t){case Ih:return n*e;case Fh:return n*e/r.components*r.byteLength;case Zl:return n*e/r.components*r.byteLength;case Oh:return n*e*2/r.components*r.byteLength;case Jl:return n*e*2/r.components*r.byteLength;case Nh:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case Ql:return n*e*4/r.components*r.byteLength;case Qs:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(n,16)*Math.max(e,8)/4;case Ja:case el:return Math.max(n,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case io:case xl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bh:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case El:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ev(n){switch(n){case Xn:case Lh:return{byteLength:1,components:1};case rs:case Dh:case fs:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case Oi:case $l:case Bn:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ed(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<f.length;d++){const v=f[h],x=f[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,v=f.length;d<v;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Tv,alphahash_pars_fragment:bv,alphamap_fragment:Av,alphamap_pars_fragment:wv,alphatest_fragment:Rv,alphatest_pars_fragment:Cv,aomap_fragment:Pv,aomap_pars_fragment:Lv,batching_pars_vertex:Dv,batching_vertex:Uv,begin_vertex:Iv,beginnormal_vertex:Nv,bsdfs:Fv,iridescence_fragment:Ov,bumpmap_pars_fragment:Bv,clipping_planes_fragment:zv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:kv,color_fragment:Gv,color_pars_fragment:Wv,color_pars_vertex:Xv,color_vertex:qv,common:Yv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:Kv,displacementmap_pars_vertex:jv,displacementmap_vertex:Zv,emissivemap_fragment:Jv,emissivemap_pars_fragment:Qv,colorspace_fragment:e0,colorspace_pars_fragment:t0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:r0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:g0,envmap_vertex:o0,fog_vertex:a0,fog_pars_vertex:l0,fog_fragment:c0,fog_pars_fragment:u0,gradientmap_pars_fragment:f0,lightmap_pars_fragment:h0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:_0,lights_toon_pars_fragment:v0,lights_phong_fragment:x0,lights_phong_pars_fragment:S0,lights_physical_fragment:M0,lights_physical_pars_fragment:E0,lights_fragment_begin:y0,lights_fragment_maps:T0,lights_fragment_end:b0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:C0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:U0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:N0,morphinstance_vertex:F0,morphcolor_vertex:O0,morphnormal_vertex:B0,morphtarget_pars_vertex:z0,morphtarget_vertex:H0,normal_fragment_begin:V0,normal_fragment_maps:k0,normal_pars_fragment:G0,normal_pars_vertex:W0,normal_vertex:X0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:j0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:Q0,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:ux,skinning_vertex:fx,skinnormal_vertex:hx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:_x,transmission_pars_fragment:vx,uv_pars_fragment:xx,uv_pars_vertex:Sx,uv_vertex:Mx,worldpos_vertex:Ex,background_vert:yx,background_frag:Tx,backgroundCube_vert:bx,backgroundCube_frag:Ax,cube_vert:wx,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:Ix,linedashed_vert:Nx,linedashed_frag:Fx,meshbasic_vert:Ox,meshbasic_frag:Bx,meshlambert_vert:zx,meshlambert_frag:Hx,meshmatcap_vert:Vx,meshmatcap_frag:kx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:qx,meshphysical_vert:Yx,meshphysical_frag:$x,meshtoon_vert:Kx,meshtoon_frag:jx,points_vert:Zx,points_frag:Jx,shadow_vert:Qx,shadow_frag:eS,sprite_vert:tS,sprite_frag:nS},ve={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Sn={basic:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ft([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ft([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ft([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ft([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ft([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ft([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ft([ve.common,ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ft([ve.lights,ve.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Sn.physical={uniforms:Ft([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ks={r:0,b:0,g:0},bi=new qn,iS=new xt;function rS(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function v(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function x(T){let E=!1;const I=v(T);I===null?p(a,l):I&&I.isColor&&(p(I,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const I=v(E);I&&(I.isCubeTexture||I.mapping===Po)?(u===void 0&&(u=new Hn(new ms(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:br(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(E.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iS.makeRotationFromEuler(bi)),u.material.toneMapped=Qe.getTransfer(I.colorSpace)!==at,(f!==I||h!==I.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Hn(new Lo(2,2),new pi({name:"BackgroundMaterial",uniforms:br(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(I.colorSpace)!==at,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(ks,Yh(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m,dispose:w}}function sS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,U,te,W,ie){let ue=!1;const $=f(W,te,U);s!==$&&(s=$,c(s.object)),ue=d(y,W,te,ie),ue&&v(y,W,te,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,E(y,U,te,W),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,U,te){const W=te.wireframe===!0;let ie=i[y.id];ie===void 0&&(ie={},i[y.id]=ie);let ue=ie[U.id];ue===void 0&&(ue={},ie[U.id]=ue);let $=ue[W];return $===void 0&&($=h(l()),ue[W]=$),$}function h(y){const U=[],te=[],W=[];for(let ie=0;ie<t;ie++)U[ie]=0,te[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:te,attributeDivisors:W,object:y,attributes:{},index:null}}function d(y,U,te,W){const ie=s.attributes,ue=U.attributes;let $=0;const re=te.getAttributes();for(const z in re)if(re[z].location>=0){const xe=ie[z];let Ce=ue[z];if(Ce===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;$++}return s.attributesNum!==$||s.index!==W}function v(y,U,te,W){const ie={},ue=U.attributes;let $=0;const re=te.getAttributes();for(const z in re)if(re[z].location>=0){let xe=ue[z];xe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),ie[z]=Ce,$++}s.attributes=ie,s.attributesNum=$,s.index=W}function x(){const y=s.newAttributes;for(let U=0,te=y.length;U<te;U++)y[U]=0}function m(y){p(y,0)}function p(y,U){const te=s.newAttributes,W=s.enabledAttributes,ie=s.attributeDivisors;te[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),ie[y]!==U&&(n.vertexAttribDivisor(y,U),ie[y]=U)}function w(){const y=s.newAttributes,U=s.enabledAttributes;for(let te=0,W=U.length;te<W;te++)U[te]!==y[te]&&(n.disableVertexAttribArray(te),U[te]=0)}function T(y,U,te,W,ie,ue,$){$===!0?n.vertexAttribIPointer(y,U,te,ie,ue):n.vertexAttribPointer(y,U,te,W,ie,ue)}function E(y,U,te,W){x();const ie=W.attributes,ue=te.getAttributes(),$=U.defaultAttributeValues;for(const re in ue){const z=ue[re];if(z.location>=0){let ge=ie[re];if(ge===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const xe=ge.normalized,Ce=ge.itemSize,Fe=e.get(ge);if(Fe===void 0)continue;const Ze=Fe.buffer,ne=Fe.type,me=Fe.bytesPerElement,be=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===$l;if(ge.isInterleavedBufferAttribute){const N=ge.data,ee=N.stride,le=ge.offset;if(N.isInstancedInterleavedBuffer){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,N.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ae=0;ae<z.locationSize;ae++)m(z.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ae=0;ae<z.locationSize;ae++)T(z.location+ae,Ce/z.locationSize,ne,xe,ee*me,(le+Ce/z.locationSize*ae)*me,be)}else{if(ge.isInstancedBufferAttribute){for(let N=0;N<z.locationSize;N++)p(z.location+N,ge.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let N=0;N<z.locationSize;N++)m(z.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let N=0;N<z.locationSize;N++)T(z.location+N,Ce/z.locationSize,ne,xe,Ce*me,Ce/z.locationSize*N*me,be)}}else if($!==void 0){const xe=$[re];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(z.location,xe);break;case 3:n.vertexAttrib3fv(z.location,xe);break;case 4:n.vertexAttrib4fv(z.location,xe);break;default:n.vertexAttrib1fv(z.location,xe)}}}}w()}function I(){B();for(const y in i){const U=i[y];for(const te in U){const W=U[te];for(const ie in W)u(W[ie].object),delete W[ie];delete U[te]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const te in U){const W=U[te];for(const ie in W)u(W[ie].object),delete W[ie];delete U[te]}delete i[y.id]}function P(y){for(const U in i){const te=i[U];if(te[y.id]===void 0)continue;const W=te[y.id];for(const ie in W)u(W[ie].object),delete W[ie];delete te[y.id]}}function B(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function oS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let v=0;v<f;v++)d+=u[v];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x]*h[x];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==hn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Xn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bn&&!B)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:I,maxSamples:C}}function lS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ri,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,T=w*4;let E=p.clippingState||null;l.value=E,E=u(v,h,T,d);for(let I=0;I!==T;++I)E[I]=t[I];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=d+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=d;T!==x;++T,E+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cS(n){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=Er:a===Ka&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ov(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const cr=4,Uu=[.125,.215,.35,.446,.526,.582],Li=20,Sa=new xv,Iu=new ot;let Ma=null,Ea=0,ya=0,Ta=!1;const Ci=(1+Math.sqrt(5))/2,or=1/Ci,Nu=[new k(-Ci,or,0),new k(Ci,or,0),new k(-or,0,Ci),new k(or,0,Ci),new k(0,Ci,-or),new k(0,Ci,or),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],uS=new k;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=uS}=s;Ma=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Ea,ya),this._renderer.xr.enabled=Ta,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:fs,format:hn,colorSpace:Tr,depthBuffer:!1},r=Ou(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fS(s)),this._blurMaterial=hS(s,e,t)}return r}_compileMaterial(e){const t=new Hn(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,r,s){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Iu),f.toneMapping=li,f.autoClear=!1;const v=new Wh({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new Hn(new ms,v);let m=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,m=!0):(v.color.copy(Iu),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;Gs(r,T*E,w>2?E:0,E,E),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nu[(r-s-1)%Nu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Hn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Li-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let w=0;for(let P=0;P<Li;++P){const B=P/x,b=Math.exp(-B*B/2);p.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=v,h.mipInt.value=T-i;const E=this._sizeLods[r],I=3*E*(r>T-cr?r-T+cr:0),C=4*(this._cubeSize-E);Gs(t,I,C,3*E,2*E),l.setRenderTarget(t),l.render(f,Sa)}}function fS(n){const e=[],t=[],i=[];let r=n;const s=n-cr+1+Uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-cr?l=Uu[o-n+cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,x=3,m=2,p=1,w=new Float32Array(x*v*d),T=new Float32Array(m*v*d),E=new Float32Array(p*v*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,B=C>2?0:-1,b=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];w.set(b,x*v*C),T.set(h,m*v*C);const y=[C,C,C,C,C,C];E.set(y,p*v*C)}const I=new gi;I.setAttribute("position",new mn(w,x)),I.setAttribute("uv",new mn(T,m)),I.setAttribute("faceIndex",new mn(E,p)),e.push(I),r>cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ou(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hS(n,e,t){const i=new Float32Array(Li),r=new k(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Bu(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function zu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===Ka,u=l===Er||l===yr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Fu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,v=f.attributes.position;let x=0;if(d!==null){const w=d.array;x=d.version;for(let T=0,E=w.length;T<E;T+=3){const I=w[T+0],C=w[T+1],P=w[T+2];h.push(I,C,C,P,P,I)}}else if(v!==void 0){const w=v.array;x=v.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const I=T+0,C=T+1,P=T+2;h.push(I,C,C,P,P,I)}}else return;const m=new(Hh(h)?qh:Xh)(h,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,v){v!==0&&(n.drawElementsInstanced(i,d,s,h*o,v),t.update(d,i,v))}function u(h,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];t.update(m,i,1)}function f(h,d,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,v);let p=0;for(let w=0;w<v;w++)p+=d[w]*x[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _S(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vS(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),v===!0&&(T=2),x===!0&&(T=3);let E=a.attributes.position.count*T,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*I*4*f),P=new Vh(C,E,I,f);P.type=Bn,P.needsUpdate=!0;const B=T*4;for(let y=0;y<f;y++){const U=m[y],te=p[y],W=w[y],ie=E*I*4*y;for(let ue=0;ue<U.count;ue++){const $=ue*B;d===!0&&(r.fromBufferAttribute(U,ue),C[ie+$+0]=r.x,C[ie+$+1]=r.y,C[ie+$+2]=r.z,C[ie+$+3]=0),v===!0&&(r.fromBufferAttribute(te,ue),C[ie+$+4]=r.x,C[ie+$+5]=r.y,C[ie+$+6]=r.z,C[ie+$+7]=0),x===!0&&(r.fromBufferAttribute(W,ue),C[ie+$+8]=r.x,C[ie+$+9]=r.y,C[ie+$+10]=r.z,C[ie+$+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new je(E,I)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function xS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const td=new Ht,Hu=new Qh(1,1),nd=new Vh,id=new G_,rd=new Kh,Vu=[],ku=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vu[r];if(s===void 0&&(s=new Float32Array(r),Vu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function TS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),Tt(t,i)}}function bS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),Tt(t,i)}}function AS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),Tt(t,i)}}function wS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function LS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function NS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hu.compareFunction=zh,s=Hu):s=td,t.setTexture2D(e||s,r)}function FS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function OS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function BS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function zS(n){switch(n){case 5126:return SS;case 35664:return MS;case 35665:return ES;case 35666:return yS;case 35674:return TS;case 35675:return bS;case 35676:return AS;case 5124:case 35670:return wS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return DS;case 36295:return US;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return BS}}function HS(n,e){n.uniform1fv(this.addr,e)}function VS(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function kS(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function GS(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function WS(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XS(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qS(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YS(n,e){n.uniform1iv(this.addr,e)}function $S(n,e){n.uniform2iv(this.addr,e)}function KS(n,e){n.uniform3iv(this.addr,e)}function jS(n,e){n.uniform4iv(this.addr,e)}function ZS(n,e){n.uniform1uiv(this.addr,e)}function JS(n,e){n.uniform2uiv(this.addr,e)}function QS(n,e){n.uniform3uiv(this.addr,e)}function eM(n,e){n.uniform4uiv(this.addr,e)}function tM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||td,s[o])}function nM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||id,s[o])}function iM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rd,s[o])}function rM(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nd,s[o])}function sM(n){switch(n){case 5126:return HS;case 35664:return VS;case 35665:return kS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return $S;case 35668:case 35672:return KS;case 35669:case 35673:return jS;case 5125:return ZS;case 36294:return JS;case 36295:return QS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}class oM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zS(t.type)}}class aM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function qu(n,e){n.seq.push(e),n.map[e.id]=e}function cM(n,e,t){const i=n.name,r=i.length;for(ba.lastIndex=0;;){const s=ba.exec(i),o=ba.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qu(t,c===void 0?new oM(a,n,e):new aM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lM(a),qu(t,f)),t=f}}}class ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uM=37297;let fM=0;function hM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $u=new We;function dM(n){Qe._getMatrix($u,Qe.workingColorSpace,n);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case po:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ku(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hM(n.getShaderSource(e),o)}else return r}function pM(n,e){const t=dM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mM(n,e){let t;switch(e){case p_:t="Linear";break;case m_:t="Reinhard";break;case g_:t="Cineon";break;case __:t="ACESFilmic";break;case x_:t="AgX";break;case S_:t="Neutral";break;case v_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new k;function gM(){Qe.getLuminanceCoefficients(Ws);const n=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _M(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function vM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(SM,EM)}const MM=new Map;function EM(n,e){let t=qe[e];if(t===void 0){const i=MM.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(yM,TM)}function TM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function AM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case yr:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ch:e="ENVMAP_BLENDING_MULTIPLY";break;case h_:e="ENVMAP_BLENDING_MIX";break;case d_:e="ENVMAP_BLENDING_ADD";break}return e}function CM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function PM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bM(t),c=AM(t),u=wM(t),f=RM(t),h=CM(t),d=_M(t),v=vM(s),x=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?qe.tonemapping_pars_fragment:"",t.toneMapping!==li?mM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,pM("linearToOutputTexel",t.outputColorSpace),gM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=wl(o),o=ju(o,t),o=Zu(o,t),a=wl(a),a=ju(a,t),a=Zu(a,t),o=Ju(o),a=Ju(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=w+m+o,E=w+p+a,I=Yu(r,r.VERTEX_SHADER,T),C=Yu(r,r.FRAGMENT_SHADER,E);r.attachShader(x,I),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(I).trim(),ie=r.getShaderInfoLog(C).trim();let ue=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,C);else{const re=Ku(r,I,"vertex"),z=Ku(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+te+`
`+re+`
`+z)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(W===""||ie==="")&&($=!1);$&&(U.diagnostics={runnable:ue,programLog:te,vertexShader:{log:W,prefix:m},fragmentShader:{log:ie,prefix:p}})}r.deleteShader(I),r.deleteShader(C),B=new ro(r,x),b=xM(r,x)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,uM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let LM=0;class DM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UM(e),t.set(e,i)),i}}class UM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function IM(n,e,t,i,r,s,o){const a=new nc,l=new DM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,U,te,W){const ie=te.fog,ue=W.geometry,$=b.isMeshStandardMaterial?te.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),z=re&&re.mapping===Po?re.image.height:null,ge=v[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ce=xe!==void 0?xe.length:0;let Fe=0;ue.morphAttributes.position!==void 0&&(Fe=1),ue.morphAttributes.normal!==void 0&&(Fe=2),ue.morphAttributes.color!==void 0&&(Fe=3);let Ze,ne,me,be;if(ge){const it=Sn[ge];Ze=it.vertexShader,ne=it.fragmentShader}else Ze=b.vertexShader,ne=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const N=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),le=W.isInstancedMesh===!0,ae=W.isBatchedMesh===!0,Oe=!!b.map,A=!!b.matcap,R=!!re,_=!!b.aoMap,Q=!!b.lightMap,q=!!b.bumpMap,Y=!!b.normalMap,Z=!!b.displacementMap,se=!!b.emissiveMap,j=!!b.metalnessMap,K=!!b.roughnessMap,Se=b.anisotropy>0,M=b.clearcoat>0,g=b.dispersion>0,L=b.iridescence>0,V=b.sheen>0,J=b.transmission>0,H=Se&&!!b.anisotropyMap,ye=M&&!!b.clearcoatMap,pe=M&&!!b.clearcoatNormalMap,Te=M&&!!b.clearcoatRoughnessMap,we=L&&!!b.iridescenceMap,ce=L&&!!b.iridescenceThicknessMap,Ae=V&&!!b.sheenColorMap,Le=V&&!!b.sheenRoughnessMap,De=!!b.specularMap,_e=!!b.specularColorMap,ke=!!b.specularIntensityMap,D=J&&!!b.transmissionMap,Me=J&&!!b.thicknessMap,fe=!!b.gradientMap,Pe=!!b.alphaMap,he=b.alphaTest>0,oe=!!b.alphaHash,Ue=!!b.extensions;let Ge=li;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const dt={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:ne,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ae,batchingColor:ae&&W._colorsTexture!==null,instancing:le,instancingColor:le&&W.instanceColor!==null,instancingMorph:le&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Tr,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:A,envMap:R,envMapMode:R&&re.mapping,envMapCubeUVHeight:z,aoMap:_,lightMap:Q,bumpMap:q,normalMap:Y,displacementMap:h&&Z,emissiveMap:se,normalMapObjectSpace:Y&&b.normalMapType===b_,normalMapTangentSpace:Y&&b.normalMapType===T_,metalnessMap:j,roughnessMap:K,anisotropy:Se,anisotropyMap:H,clearcoat:M,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Te,dispersion:g,iridescence:L,iridescenceMap:we,iridescenceThicknessMap:ce,sheen:V,sheenColorMap:Ae,sheenRoughnessMap:Le,specularMap:De,specularColorMap:_e,specularIntensityMap:ke,transmission:J,transmissionMap:D,thicknessMap:Me,gradientMap:fe,opaque:b.transparent===!1&&b.blending===mr&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:he,alphaHash:oe,combine:b.combine,mapUv:Oe&&x(b.map.channel),aoMapUv:_&&x(b.aoMap.channel),lightMapUv:Q&&x(b.lightMap.channel),bumpMapUv:q&&x(b.bumpMap.channel),normalMapUv:Y&&x(b.normalMap.channel),displacementMapUv:Z&&x(b.displacementMap.channel),emissiveMapUv:se&&x(b.emissiveMap.channel),metalnessMapUv:j&&x(b.metalnessMap.channel),roughnessMapUv:K&&x(b.roughnessMap.channel),anisotropyMapUv:H&&x(b.anisotropyMap.channel),clearcoatMapUv:ye&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(b.sheenRoughnessMap.channel),specularMapUv:De&&x(b.specularMap.channel),specularColorMapUv:_e&&x(b.specularColorMap.channel),specularIntensityMapUv:ke&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:Me&&x(b.thicknessMap.channel),alphaMapUv:Pe&&x(b.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Y||Se),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ue.attributes.uv&&(Oe||Pe),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ee,skinning:W.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)y.push(U),y.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(w(y,b),T(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const y=v[b.type];let U;if(y){const te=Sn[y];U=nv.clone(te.uniforms)}else U=b.uniforms;return U}function I(b,y){let U;for(let te=0,W=u.length;te<W;te++){const ie=u[te];if(ie.cacheKey===y){U=ie,++U.usedTimes;break}}return U===void 0&&(U=new PM(n,y,b,s),u.push(U)),U}function C(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:B}}function NM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,v,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,h,d,v,x,m){const p=o(f,h,d,v,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,v,x,m){const p=o(f,h,d,v,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||FM),i.length>1&&i.sort(h||ef),r.length>1&&r.sort(h||ef)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function OM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new tf,n.set(i,[o])):r>=s.length?(o=new tf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function BM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ot};break;case"SpotLight":t={position:new k,direction:new k,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function zM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HM=0;function VM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kM(n){const e=new BM,t=zM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new xt,o=new xt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,v=0,x=0,m=0,p=0,w=0,T=0,E=0,I=0,C=0,P=0;c.sort(VM);for(let b=0,y=c.length;b<y;b++){const U=c[b],te=U.color,W=U.intensity,ie=U.distance,ue=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=te.r*W,f+=te.g*W,h+=te.b*W;else if(U.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(U.sh.coefficients[$],W);P++}else if(U.isDirectionalLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,z=t.get(U);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=ue,i.directionalShadowMatrix[d]=U.shadow.matrix,w++}i.directional[d]=$,d++}else if(U.isSpotLight){const $=e.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(te).multiplyScalar(W),$.distance=ie,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,i.spot[x]=$;const re=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,re.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[x]=re.matrix,U.castShadow){const z=t.get(U);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=ue,E++}x++}else if(U.isRectAreaLight){const $=e.get(U);$.color.copy(te).multiplyScalar(W),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=$,m++}else if(U.isPointLight){const $=e.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity),$.distance=U.distance,$.decay=U.decay,U.castShadow){const re=U.shadow,z=t.get(U);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,z.shadowCameraNear=re.camera.near,z.shadowCameraFar=re.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=ue,i.pointShadowMatrix[v]=U.shadow.matrix,T++}i.point[v]=$,v++}else if(U.isHemisphereLight){const $=e.get(U);$.skyColor.copy(U.color).multiplyScalar(W),$.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==v||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==w||B.numPointShadows!==T||B.numSpotShadows!==E||B.numSpotMaps!==I||B.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,B.directionalLength=d,B.pointLength=v,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=w,B.numPointShadows=T,B.numSpotShadows=E,B.numSpotMaps=I,B.numLightProbes=P,i.version=HM++)}function l(c,u){let f=0,h=0,d=0,v=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function nf(n){const e=new kM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nf(n),e.set(r,[a])):s>=o.length?(a=new nf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qM(n,e,t){let i=new Jh;const r=new je,s=new je,o=new St,a=new dv({depthPacking:y_}),l=new pv,c={},u=t.maxTextureSize,f={[di]:Gt,[Gt]:di,[On]:On},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new gi;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Hn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(C,P,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),te=n.state;te.setBlending(ai),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const W=p!==In&&this.type===In,ie=p===In&&this.type!==In;for(let ue=0,$=C.length;ue<$;ue++){const re=C[ue],z=re.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ge=z.getFrameExtents();if(r.multiply(ge),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,z.mapSize.y=s.y)),z.map===null||W===!0||ie===!0){const Ce=this.type!==In?{minFilter:pn,magFilter:pn}:{};z.map!==null&&z.map.dispose(),z.map=new Bi(r.x,r.y,Ce),z.map.texture.name=re.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const xe=z.getViewportCount();for(let Ce=0;Ce<xe;Ce++){const Fe=z.getViewport(Ce);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),te.viewport(o),z.updateMatrices(re,Ce),i=z.getFrustum(),E(P,B,z.camera,re,this.type)}z.isPointLightShadow!==!0&&this.type===In&&w(z,B),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,U)};function w(C,P){const B=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,B,h,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,B,d,x,null)}function T(C,P,B,b){let y=null;const U=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)y=U;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const te=y.uuid,W=P.uuid;let ie=c[te];ie===void 0&&(ie={},c[te]=ie);let ue=ie[W];ue===void 0&&(ue=y.clone(),ie[W]=ue,P.addEventListener("dispose",I)),y=ue}if(y.visible=P.visible,y.wireframe=P.wireframe,b===In?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const te=n.properties.get(y);te.light=B}return y}function E(C,P,B,b,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===In)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const W=e.update(C),ie=C.material;if(Array.isArray(ie)){const ue=W.groups;for(let $=0,re=ue.length;$<re;$++){const z=ue[$],ge=ie[z.materialIndex];if(ge&&ge.visible){const xe=T(C,ge,b,y);C.onBeforeShadow(n,C,P,B,W,xe,z),n.renderBufferDirect(B,null,W,xe,C,z),C.onAfterShadow(n,C,P,B,W,xe,z)}}}else if(ie.visible){const ue=T(C,ie,b,y);C.onBeforeShadow(n,C,P,B,W,ue,null),n.renderBufferDirect(B,null,W,ue,C,null),C.onAfterShadow(n,C,P,B,W,ue,null)}}const te=C.children;for(let W=0,ie=te.length;W<ie;W++)E(te[W],P,B,b,y)}function I(C){C.target.removeEventListener("dispose",I);for(const B in c){const b=c[B],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const YM={[Va]:ka,[Ga]:qa,[Wa]:Ya,[Mr]:Xa,[ka]:Va,[qa]:Ga,[Ya]:Wa,[Xa]:Mr};function $M(n,e){function t(){let D=!1;const Me=new St;let fe=null;const Pe=new St(0,0,0,0);return{setMask:function(he){fe!==he&&!D&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){D=he},setClear:function(he,oe,Ue,Ge,dt){dt===!0&&(he*=Ge,oe*=Ge,Ue*=Ge),Me.set(he,oe,Ue,Ge),Pe.equals(Me)===!1&&(n.clearColor(he,oe,Ue,Ge),Pe.copy(Me))},reset:function(){D=!1,fe=null,Pe.set(-1,0,0,0)}}}function i(){let D=!1,Me=!1,fe=null,Pe=null,he=null;return{setReversed:function(oe){if(Me!==oe){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;const Ge=he;he=null,this.setClear(Ge)}},getReversed:function(){return Me},setTest:function(oe){oe?N(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!D&&(n.depthMask(oe),fe=oe)},setFunc:function(oe){if(Me&&(oe=YM[oe]),Pe!==oe){switch(oe){case Va:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case Ga:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){D=oe},setClear:function(oe){he!==oe&&(Me&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){D=!1,fe=null,Pe=null,he=null,Me=!1}}}function r(){let D=!1,Me=null,fe=null,Pe=null,he=null,oe=null,Ue=null,Ge=null,dt=null;return{setTest:function(it){D||(it?N(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(it){Me!==it&&!D&&(n.stencilMask(it),Me=it)},setFunc:function(it,on,An){(fe!==it||Pe!==on||he!==An)&&(n.stencilFunc(it,on,An),fe=it,Pe=on,he=An)},setOp:function(it,on,An){(oe!==it||Ue!==on||Ge!==An)&&(n.stencilOp(it,on,An),oe=it,Ue=on,Ge=An)},setLocked:function(it){D=it},setClear:function(it){dt!==it&&(n.clearStencil(it),dt=it)},reset:function(){D=!1,Me=null,fe=null,Pe=null,he=null,oe=null,Ue=null,Ge=null,dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],v=null,x=!1,m=null,p=null,w=null,T=null,E=null,I=null,C=null,P=new ot(0,0,0),B=0,b=!1,y=null,U=null,te=null,W=null,ie=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=re>=1):z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=re>=2);let ge=null,xe={};const Ce=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ze=new St().fromArray(Ce),ne=new St().fromArray(Fe);function me(D,Me,fe,Pe){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(D,oe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<fe;Ue++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Me+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const be={};be[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(Mr),q(!1),Y(ru),N(n.CULL_FACE),_(ai);function N(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ee(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function le(D,Me){return f[D]!==Me?(n.bindFramebuffer(D,Me),f[D]=Me,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ae(D,Me){let fe=d,Pe=!1;if(D){fe=h.get(Me),fe===void 0&&(fe=[],h.set(Me,fe));const he=D.textures;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ue=he.length;oe<Ue;oe++)fe[oe]=n.COLOR_ATTACHMENT0+oe;fe.length=he.length,Pe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(fe)}function Oe(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const A={[Pi]:n.FUNC_ADD,[Kg]:n.FUNC_SUBTRACT,[jg]:n.FUNC_REVERSE_SUBTRACT};A[Zg]=n.MIN,A[Jg]=n.MAX;const R={[Qg]:n.ZERO,[e_]:n.ONE,[t_]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[a_]:n.SRC_ALPHA_SATURATE,[s_]:n.DST_COLOR,[i_]:n.DST_ALPHA,[n_]:n.ONE_MINUS_SRC_COLOR,[Ha]:n.ONE_MINUS_SRC_ALPHA,[o_]:n.ONE_MINUS_DST_COLOR,[r_]:n.ONE_MINUS_DST_ALPHA,[l_]:n.CONSTANT_COLOR,[c_]:n.ONE_MINUS_CONSTANT_COLOR,[u_]:n.CONSTANT_ALPHA,[f_]:n.ONE_MINUS_CONSTANT_ALPHA};function _(D,Me,fe,Pe,he,oe,Ue,Ge,dt,it){if(D===ai){x===!0&&(ee(n.BLEND),x=!1);return}if(x===!1&&(N(n.BLEND),x=!0),D!==$g){if(D!==m||it!==b){if((p!==Pi||E!==Pi)&&(n.blendEquation(n.FUNC_ADD),p=Pi,E=Pi),it)switch(D){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.ONE,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case su:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,T=null,I=null,C=null,P.set(0,0,0),B=0,m=D,b=it}return}he=he||Me,oe=oe||fe,Ue=Ue||Pe,(Me!==p||he!==E)&&(n.blendEquationSeparate(A[Me],A[he]),p=Me,E=he),(fe!==w||Pe!==T||oe!==I||Ue!==C)&&(n.blendFuncSeparate(R[fe],R[Pe],R[oe],R[Ue]),w=fe,T=Pe,I=oe,C=Ue),(Ge.equals(P)===!1||dt!==B)&&(n.blendColor(Ge.r,Ge.g,Ge.b,dt),P.copy(Ge),B=dt),m=D,b=!1}function Q(D,Me){D.side===On?ee(n.CULL_FACE):N(n.CULL_FACE);let fe=D.side===Gt;Me&&(fe=!fe),q(fe),D.blending===mr&&D.transparent===!1?_(ai):_(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Pe=D.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function Y(D){D!==Xg?(N(n.CULL_FACE),D!==U&&(D===ru?n.cullFace(n.BACK):D===qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),U=D}function Z(D){D!==te&&($&&n.lineWidth(D),te=D)}function se(D,Me,fe){D?(N(n.POLYGON_OFFSET_FILL),(W!==Me||ie!==fe)&&(n.polygonOffset(Me,fe),W=Me,ie=fe)):ee(n.POLYGON_OFFSET_FILL)}function j(D){D?N(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function K(D){D===void 0&&(D=n.TEXTURE0+ue-1),ge!==D&&(n.activeTexture(D),ge=D)}function Se(D,Me,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+ue-1:fe=ge);let Pe=xe[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[fe]=Pe),(Pe.type!==D||Pe.texture!==Me)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(D,Me||be[D]),Pe.type=D,Pe.texture=Me)}function M(){const D=xe[ge];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){Ze.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Le(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function De(D,Me){let fe=c.get(Me);fe===void 0&&(fe=new WeakMap,c.set(Me,fe));let Pe=fe.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(Me,D.name),fe.set(D,Pe))}function _e(D,Me){const Pe=c.get(Me).get(D);l.get(Me)!==Pe&&(n.uniformBlockBinding(Me,Pe,D.__bindingPointIndex),l.set(Me,Pe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,xe={},f={},h=new WeakMap,d=[],v=null,x=!1,m=null,p=null,w=null,T=null,E=null,I=null,C=null,P=new ot(0,0,0),B=0,b=!1,y=null,U=null,te=null,W=null,ie=null,Ze.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:ee,bindFramebuffer:le,drawBuffers:ae,useProgram:Oe,setBlending:_,setMaterial:Q,setFlipSided:q,setCullFace:Y,setLineWidth:Z,setPolygonOffset:se,setScissorTest:j,activeTexture:K,bindTexture:Se,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:we,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Te,texSubImage2D:V,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:ye,scissor:Ae,viewport:Le,reset:ke}}function KM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return d?new OffscreenCanvas(M,g):ls("canvas")}function x(M,g,L){let V=1;const J=Se(M);if((J.width>L||J.height>L)&&(V=L/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const H=Math.floor(V*J.width),ye=Math.floor(V*J.height);f===void 0&&(f=v(H,ye));const pe=g?v(H,ye):f;return pe.width=H,pe.height=ye,pe.getContext("2d").drawImage(M,0,0,H,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+ye+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(M,g,L,V,J=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H=g;if(g===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),g===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGB8UI),L===n.UNSIGNED_SHORT&&(H=n.RGB16UI),L===n.UNSIGNED_INT&&(H=n.RGB32UI),L===n.BYTE&&(H=n.RGB8I),L===n.SHORT&&(H=n.RGB16I),L===n.INT&&(H=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),L===n.UNSIGNED_INT&&(H=n.RGBA32UI),L===n.BYTE&&(H=n.RGBA8I),L===n.SHORT&&(H=n.RGBA16I),L===n.INT&&(H=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),g===n.RGBA){const ye=J?po:Qe.getTransfer(V);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=ye===at?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(M,g){let L;return M?g===null||g===Oi||g===ss?L=n.DEPTH24_STENCIL8:g===Bn?L=n.DEPTH32F_STENCIL8:g===rs&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Oi||g===ss?L=n.DEPTH_COMPONENT24:g===Bn?L=n.DEPTH_COMPONENT32F:g===rs&&(L=n.DEPTH_COMPONENT16),L}function I(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==pn&&M.minFilter!==yn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){const g=M.target;g.removeEventListener("dispose",C),B(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),y(g)}function B(M){const g=i.get(M);if(g.__webglInit===void 0)return;const L=M.source,V=h.get(L);if(V){const J=V[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(M),Object.keys(V).length===0&&h.delete(L)}i.remove(M)}function b(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const L=M.source,V=h.get(L);delete V[g.__cacheKey],o.memory.textures--}function y(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let J=0;J<g.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[V][J]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=M.textures;for(let V=0,J=L.length;V<J;V++){const H=i.get(L[V]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(M)}let U=0;function te(){U=0}function W(){const M=U;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),U+=1,M}function ie(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ue(M,g){const L=i.get(M);if(M.isVideoTexture&&j(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(L,M,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function $(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){be(L,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function re(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){be(L,M,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function z(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){N(L,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ge={[ja]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},xe={[pn]:n.NEAREST,[M_]:n.NEAREST_MIPMAP_NEAREST,[Ms]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Ce={[A_]:n.NEVER,[D_]:n.ALWAYS,[w_]:n.LESS,[zh]:n.LEQUAL,[R_]:n.EQUAL,[L_]:n.GEQUAL,[C_]:n.GREATER,[P_]:n.NOTEQUAL};function Fe(M,g){if(g.type===Bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===yn||g.magFilter===$o||g.magFilter===Ms||g.magFilter===Ui||g.minFilter===yn||g.minFilter===$o||g.minFilter===Ms||g.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ge[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===pn||g.minFilter!==Ms&&g.minFilter!==Ui||g.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",C));const V=g.source;let J=h.get(V);J===void 0&&(J={},h.set(V,J));const H=ie(g);if(H!==M.__cacheKey){J[H]===void 0&&(J[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[H].usedTimes++;const ye=J[M.__cacheKey];ye!==void 0&&(J[M.__cacheKey].usedTimes--,ye.usedTimes===0&&b(g)),M.__cacheKey=H,M.__webglTexture=J[H].texture}return L}function ne(M,g,L){return Math.floor(Math.floor(M/L)/g)}function me(M,g,L,V){const H=M.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,V,g.data);else{H.sort((ce,Ae)=>ce.start-Ae.start);let ye=0;for(let ce=1;ce<H.length;ce++){const Ae=H[ye],Le=H[ce],De=Ae.start+Ae.count,_e=ne(Le.start,g.width,4),ke=ne(Ae.start,g.width,4);Le.start<=De+1&&_e===ke&&ne(Le.start+Le.count-1,g.width,4)===_e?Ae.count=Math.max(Ae.count,Le.start+Le.count-Ae.start):(++ye,H[ye]=Le)}H.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,Ae=H.length;ce<Ae;ce++){const Le=H[ce],De=Math.floor(Le.start/4),_e=Math.ceil(Le.count/4),ke=De%g.width,D=Math.floor(De/g.width),Me=_e,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,ke,D,Me,fe,L,V,g.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function be(M,g,L){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const J=Ze(M,g),H=g.source;t.bindTexture(V,M.__webglTexture,n.TEXTURE0+L);const ye=i.get(H);if(H.version!==ye.__version||J===!0){t.activeTexture(n.TEXTURE0+L);const pe=Qe.getPrimaries(Qe.workingColorSpace),Te=g.colorSpace===si?null:Qe.getPrimaries(g.colorSpace),we=g.colorSpace===si||pe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ce=x(g.image,!1,r.maxTextureSize);ce=K(g,ce);const Ae=s.convert(g.format,g.colorSpace),Le=s.convert(g.type);let De=T(g.internalFormat,Ae,Le,g.colorSpace,g.isVideoTexture);Fe(V,g);let _e;const ke=g.mipmaps,D=g.isVideoTexture!==!0,Me=ye.__version===void 0||J===!0,fe=H.dataReady,Pe=I(g,ce);if(g.isDepthTexture)De=E(g.format===as,g.type),Me&&(D?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,Ae,Le,null));else if(g.isDataTexture)if(ke.length>0){D&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,De,ke[0].width,ke[0].height);for(let he=0,oe=ke.length;he<oe;he++)_e=ke[he],D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Ae,Le,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,Ae,Le,_e.data);g.generateMipmaps=!1}else D?(Me&&t.texStorage2D(n.TEXTURE_2D,Pe,De,ce.width,ce.height),fe&&me(g,ce,Ae,Le)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,Ae,Le,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,De,ke[0].width,ke[0].height,ce.depth);for(let he=0,oe=ke.length;he<oe;he++)if(_e=ke[he],g.format!==hn)if(Ae!==null)if(D){if(fe)if(g.layerUpdates.size>0){const Ue=Du(_e.width,_e.height,g.format,g.type);for(const Ge of g.layerUpdates){const dt=_e.data.subarray(Ge*Ue/_e.data.BYTES_PER_ELEMENT,(Ge+1)*Ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ge,_e.width,_e.height,1,Ae,dt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,Ae,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,Ae,Le,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ce.depth,0,Ae,Le,_e.data)}else{D&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,De,ke[0].width,ke[0].height);for(let he=0,oe=ke.length;he<oe;he++)_e=ke[he],g.format!==hn?Ae!==null?D?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Ae,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Ae,Le,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,Ae,Le,_e.data)}else if(g.isDataArrayTexture)if(D){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,De,ce.width,ce.height,ce.depth),fe)if(g.layerUpdates.size>0){const he=Du(ce.width,ce.height,g.format,g.type);for(const oe of g.layerUpdates){const Ue=ce.data.subarray(oe*he/ce.data.BYTES_PER_ELEMENT,(oe+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,Ae,Le,Ue)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Le,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,Ae,Le,ce.data);else if(g.isData3DTexture)D?(Me&&t.texStorage3D(n.TEXTURE_3D,Pe,De,ce.width,ce.height,ce.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Le,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,Ae,Le,ce.data);else if(g.isFramebufferTexture){if(Me)if(D)t.texStorage2D(n.TEXTURE_2D,Pe,De,ce.width,ce.height);else{let he=ce.width,oe=ce.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,De,he,oe,0,Ae,Le,null),he>>=1,oe>>=1}}else if(ke.length>0){if(D&&Me){const he=Se(ke[0]);t.texStorage2D(n.TEXTURE_2D,Pe,De,he.width,he.height)}for(let he=0,oe=ke.length;he<oe;he++)_e=ke[he],D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae,Le,_e):t.texImage2D(n.TEXTURE_2D,he,De,Ae,Le,_e);g.generateMipmaps=!1}else if(D){if(Me){const he=Se(ce);t.texStorage2D(n.TEXTURE_2D,Pe,De,he.width,he.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Le,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,Ae,Le,ce);m(g)&&p(V),ye.__version=H.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function N(M,g,L){if(g.image.length!==6)return;const V=Ze(M,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+L);const H=i.get(J);if(J.version!==H.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const ye=Qe.getPrimaries(Qe.workingColorSpace),pe=g.colorSpace===si?null:Qe.getPrimaries(g.colorSpace),Te=g.colorSpace===si||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let oe=0;oe<6;oe++)!we&&!ce?Ae[oe]=x(g.image[oe],!0,r.maxCubemapSize):Ae[oe]=ce?g.image[oe].image:g.image[oe],Ae[oe]=K(g,Ae[oe]);const Le=Ae[0],De=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),ke=T(g.internalFormat,De,_e,g.colorSpace),D=g.isVideoTexture!==!0,Me=H.__version===void 0||V===!0,fe=J.dataReady;let Pe=I(g,Le);Fe(n.TEXTURE_CUBE_MAP,g);let he;if(we){D&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ke,Le.width,Le.height);for(let oe=0;oe<6;oe++){he=Ae[oe].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const Ge=he[Ue];g.format!==hn?De!==null?D?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ge.width,Ge.height,De,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,ke,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ge.width,Ge.height,De,_e,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,ke,Ge.width,Ge.height,0,De,_e,Ge.data)}}}else{if(he=g.mipmaps,D&&Me){he.length>0&&Pe++;const oe=Se(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae[oe].width,Ae[oe].height,De,_e,Ae[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Ae[oe].width,Ae[oe].height,0,De,_e,Ae[oe].data);for(let Ue=0;Ue<he.length;Ue++){const dt=he[Ue].image[oe].image;D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,dt.width,dt.height,De,_e,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,ke,dt.width,dt.height,0,De,_e,dt.data)}}else{D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,_e,Ae[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,De,_e,Ae[oe]);for(let Ue=0;Ue<he.length;Ue++){const Ge=he[Ue];D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,De,_e,Ge.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,ke,De,_e,Ge.image[oe])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),H.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ee(M,g,L,V,J,H){const ye=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),Te=T(L.internalFormat,ye,pe,L.colorSpace),we=i.get(g),ce=i.get(L);if(ce.__renderTarget=g,!we.__hasExternalTextures){const Ae=Math.max(1,g.width>>H),Le=Math.max(1,g.height>>H);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,H,Te,Ae,Le,g.depth,0,ye,pe,null):t.texImage2D(J,H,Te,Ae,Le,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,ce.__webglTexture,0,Z(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,ce.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(M,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const V=g.depthTexture,J=V&&V.isDepthTexture?V.type:null,H=E(g.stencilBuffer,J),ye=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Z(g);se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,H,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,H,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,H,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,M)}else{const V=g.textures;for(let J=0;J<V.length;J++){const H=V[J],ye=s.convert(H.format,H.colorSpace),pe=s.convert(H.type),Te=T(H.internalFormat,ye,pe,H.colorSpace),we=Z(g);L&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Te,g.width,g.height):se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ue(g.depthTexture,0);const J=V.__webglTexture,H=Z(g);if(g.depthTexture.format===os)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(g.depthTexture.format===as)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(M){const g=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const V=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=V}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const V=M.texture.mipmaps;V&&V.length>0?ae(g.__webglFramebuffer[0],M):ae(g.__webglFramebuffer,M)}else if(L){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),le(g.__webglDepthbuffer[V],M,!1);else{const J=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,H)}}else{const V=M.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),le(g.__webglDepthbuffer,M,!1);else{const J=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(M,g,L){const V=i.get(M);g!==void 0&&ee(V.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Oe(M)}function R(M){const g=M.texture,L=i.get(M),V=i.get(g);M.addEventListener("dispose",P);const J=M.textures,H=M.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,o.memory.textures++),H){L.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[pe]=[];for(let Te=0;Te<g.mipmaps.length;Te++)L.__webglFramebuffer[pe][Te]=n.createFramebuffer()}else L.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)L.__webglFramebuffer[pe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Te=J.length;pe<Te;pe++){const we=i.get(J[pe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&se(M)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let pe=0;pe<J.length;pe++){const Te=J[pe];L.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[pe]);const we=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),Ae=T(Te.internalFormat,we,ce,Te.colorSpace,M.isXRRenderTarget===!0),Le=Z(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,L.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),le(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)ee(L.__webglFramebuffer[pe][Te],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Te);else ee(L.__webglFramebuffer[pe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Te=J.length;pe<Te;pe++){const we=J[pe],ce=i.get(we);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Fe(n.TEXTURE_2D,we),ee(L.__webglFramebuffer,M,we,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,V.__webglTexture),Fe(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)ee(L.__webglFramebuffer[Te],M,g,n.COLOR_ATTACHMENT0,pe,Te);else ee(L.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&p(pe),t.unbindTexture()}M.depthBuffer&&Oe(M)}function _(M){const g=M.textures;for(let L=0,V=g.length;L<V;L++){const J=g[L];if(m(J)){const H=w(M),ye=i.get(J).__webglTexture;t.bindTexture(H,ye),p(H),t.unbindTexture()}}}const Q=[],q=[];function Y(M){if(M.samples>0){if(se(M)===!1){const g=M.textures,L=M.width,V=M.height;let J=n.COLOR_BUFFER_BIT;const H=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(M),pe=g.length>1;if(pe)for(let we=0;we<g.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<g.length;we++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ce=i.get(g[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,J,n.NEAREST),l===!0&&(Q.length=0,q.length=0,Q.push(n.COLOR_ATTACHMENT0+we),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Q.push(H),q.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<g.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ce=i.get(g[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Z(M){return Math.min(r.maxSamples,M.samples)}function se(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function K(M,g){const L=M.colorSpace,V=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Tr&&L!==si&&(Qe.getTransfer(L)===at?(V!==hn||J!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=z,this.rebindTextures=A,this.setupRenderTarget=R,this.updateRenderTargetMipmap=_,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=se}function jM(n,e){function t(i,r=si){let s;const o=Qe.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===Kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.BYTE;if(i===Dh)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===fs)return n.HALF_FLOAT;if(i===Ih)return n.ALPHA;if(i===Nh)return n.RGB;if(i===hn)return n.RGBA;if(i===os)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===Fh)return n.RED;if(i===Zl)return n.RED_INTEGER;if(i===Oh)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===Qs||i===eo||i===to||i===no)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nl||i===il)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sl||i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===vl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===xl||i===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===io)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===Ml||i===El||i===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===io)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pi({vertexShader:ZM,fragmentShader:JM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new Lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends Ar{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const x=new QM,m=t.getContextAttributes();let p=null,w=null;const T=[],E=[],I=new je;let C=null;const P=new tn;P.viewport=new St;const B=new tn;B.viewport=new St;const b=[P,B],y=new Sv;let U=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=T[ne];return me===void 0&&(me=new _a,T[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=T[ne];return me===void 0&&(me=new _a,T[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=T[ne];return me===void 0&&(me=new _a,T[ne]=me),me.getHandSpace()};function W(ne){const me=E.indexOf(ne.inputSource);if(me===-1)return;const be=T[me];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||o),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ie(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ue);for(let ne=0;ne<T.length;ne++){const me=E[ne];me!==null&&(E[ne]=null,T[ne].disconnect(me))}U=null,te=null,x.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,w=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ue),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,N=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?as:os,N=m.stencil?ss:Oi);const le={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Bi(h.textureWidth,h.textureHeight,{format:hn,type:Xn,depthTexture:new Qh(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Bi(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ue(ne){for(let me=0;me<ne.removed.length;me++){const be=ne.removed[me],N=E.indexOf(be);N>=0&&(E[N]=null,T[N].disconnect(be))}for(let me=0;me<ne.added.length;me++){const be=ne.added[me];let N=E.indexOf(be);if(N===-1){for(let le=0;le<T.length;le++)if(le>=E.length){E.push(be),N=le;break}else if(E[le]===null){E[le]=be,N=le;break}if(N===-1)break}const ee=T[N];ee&&ee.connect(be)}}const $=new k,re=new k;function z(ne,me,be){$.setFromMatrixPosition(me.matrixWorld),re.setFromMatrixPosition(be.matrixWorld);const N=$.distanceTo(re),ee=me.projectionMatrix.elements,le=be.projectionMatrix.elements,ae=ee[14]/(ee[10]-1),Oe=ee[14]/(ee[10]+1),A=(ee[9]+1)/ee[5],R=(ee[9]-1)/ee[5],_=(ee[8]-1)/ee[0],Q=(le[8]+1)/le[0],q=ae*_,Y=ae*Q,Z=N/(-_+Q),se=Z*-_;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(Z),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ee[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const j=ae+Z,K=Oe+Z,Se=q-se,M=Y+(N-se),g=A*Oe/K*j,L=R*Oe/K*j;ne.projectionMatrix.makePerspective(Se,M,g,L,j,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,be=ne.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(be=x.depthFar)),y.near=B.near=P.near=me,y.far=B.far=P.far=be,(U!==y.near||te!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,te=y.far),P.layers.mask=ne.layers.mask|2,B.layers.mask=ne.layers.mask|4,y.layers.mask=P.layers.mask|B.layers.mask;const N=ne.parent,ee=y.cameras;ge(y,N);for(let le=0;le<ee.length;le++)ge(ee[le],N);ee.length===2?z(y,P,B):y.projectionMatrix.copy(P.projectionMatrix),xe(ne,y,N)};function xe(ne,me,be){be===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=bl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ce=null;function Fe(ne,me){if(u=me.getViewerPose(c||o),v=me,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let N=!1;be.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let ae=0;ae<be.length;ae++){const Oe=be[ae];let A=null;if(d!==null)A=d.getViewport(Oe);else{const _=f.getViewSubImage(h,Oe);A=_.viewport,ae===0&&(e.setRenderTargetTextures(w,_.colorTexture,_.depthStencilTexture),e.setRenderTarget(w))}let R=b[ae];R===void 0&&(R=new tn,R.layers.enable(ae),R.viewport=new St,b[ae]=R),R.matrix.fromArray(Oe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Oe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(A.x,A.y,A.width,A.height),ae===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(R)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(be[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,r.renderState)}}for(let be=0;be<T.length;be++){const N=E[be],ee=T[be];N!==null&&ee!==void 0&&ee.update(N,me,c||o)}Ce&&Ce(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const Ze=new ed;Ze.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){Ce=ne},this.dispose=function(){}}}const Ai=new qn,tE=new xt;function nE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,T,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),T=w.envMap,E=w.envMapRotation;T&&(m.envMap.value=T,Ai.copy(E),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(Ai)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const E=T.program;i.uniformBlockBinding(w,E)}function c(w,T){let E=r[w.id];E===void 0&&(v(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(w,I);const C=e.render.frame;s[w.id]!==C&&(h(w),s[w.id]=C)}function u(w){const T=f();w.__bindingPointIndex=T;const E=n.createBuffer(),I=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const T=r[w.id],E=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,P=E.length;C<P;C++){const B=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,y=B.length;b<y;b++){const U=B[b];if(d(U,C,b,I)===!0){const te=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let ie=0;for(let ue=0;ue<W.length;ue++){const $=W[ue],re=x($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,te+ie,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,ie),ie+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,T,E,I){const C=w.value,P=T+"_"+E;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const B=I[P];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return I[P]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function v(w){const T=w.uniforms;let E=0;const I=16;for(let P=0,B=T.length;P<B;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,U=b.length;y<U;y++){const te=b[y],W=Array.isArray(te.value)?te.value:[te.value];for(let ie=0,ue=W.length;ie<ue;ie++){const $=W[ie],re=x($),z=E%I,ge=z%re.boundary,xe=z+ge;E+=ge,xe!==0&&I-xe<re.storage&&(E+=I-xe),te.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=E,E+=re.storage}}}const C=E%I;return C>0&&(E+=I-C),w.__size=E,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class rE{constructor(e={}){const{canvas:t=I_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=en;let C=0,P=0,B=null,b=-1,y=null;const U=new St,te=new St;let W=null;const ie=new ot(0);let ue=0,$=t.width,re=t.height,z=1,ge=null,xe=null;const Ce=new St(0,0,$,re),Fe=new St(0,0,$,re);let Ze=!1;const ne=new Jh;let me=!1,be=!1;const N=new xt,ee=new xt,le=new k,ae=new St,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function R(){return B===null?z:1}let _=i;function Q(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),_===null){const F="webgl2";if(_=Q(F,S),_===null)throw Q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let q,Y,Z,se,j,K,Se,M,g,L,V,J,H,ye,pe,Te,we,ce,Ae,Le,De,_e,ke,D;function Me(){q=new pS(_),q.init(),_e=new jM(_,q),Y=new aS(_,q,e,_e),Z=new $M(_,q),Y.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),se=new _S(_),j=new NM,K=new KM(_,q,Z,j,Y,_e,se),Se=new cS(E),M=new dS(E),g=new yv(_),ke=new sS(_,g),L=new mS(_,g,se,ke),V=new xS(_,L,g,se),Ae=new vS(_,Y,K),Te=new lS(j),J=new IM(E,Se,M,q,Y,ke,Te),H=new nE(E,j),ye=new OM,pe=new GM(q),ce=new rS(E,Se,M,Z,V,d,l),we=new qM(E,V,Y),D=new iE(_,se,Y,Z),Le=new oS(_,q,se),De=new gS(_,q,se),se.programs=J.programs,E.capabilities=Y,E.extensions=q,E.properties=j,E.renderLists=ye,E.shadowMap=we,E.state=Z,E.info=se}Me();const fe=new eE(E,_);this.xr=fe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const S=q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize($,re,!1))},this.getSize=function(S){return S.set($,re)},this.setSize=function(S,F,G=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,re=F,t.width=Math.floor(S*z),t.height=Math.floor(F*z),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set($*z,re*z).floor()},this.setDrawingBufferSize=function(S,F,G){$=S,re=F,z=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(U)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,F,G,X){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,F,G,X),Z.viewport(U.copy(Ce).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Fe)},this.setScissor=function(S,F,G,X){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,F,G,X),Z.scissor(te.copy(Fe).multiplyScalar(z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){Z.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,G=!0){let X=0;if(S){let O=!1;if(B!==null){const de=B.texture.format;O=de===Ql||de===Jl||de===Zl}if(O){const de=B.texture.type,Ee=de===Xn||de===Oi||de===rs||de===ss||de===Kl||de===jl,Ie=ce.getClearColor(),Re=ce.getClearAlpha(),ze=Ie.r,He=Ie.g,Ne=Ie.b;Ee?(v[0]=ze,v[1]=He,v[2]=Ne,v[3]=Re,_.clearBufferuiv(_.COLOR,0,v)):(x[0]=ze,x[1]=He,x[2]=Ne,x[3]=Re,_.clearBufferiv(_.COLOR,0,x))}else X|=_.COLOR_BUFFER_BIT}F&&(X|=_.DEPTH_BUFFER_BIT),G&&(X|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ce.dispose(),ye.dispose(),pe.dispose(),j.dispose(),Se.dispose(),M.dispose(),V.dispose(),ke.dispose(),D.dispose(),J.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",oc),fe.removeEventListener("sessionend",ac),_i.stop()};function Pe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=se.autoReset,F=we.enabled,G=we.autoUpdate,X=we.needsUpdate,O=we.type;Me(),se.autoReset=S,we.enabled=F,we.autoUpdate=G,we.needsUpdate=X,we.type=O}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ue(S){const F=S.target;F.removeEventListener("dispose",Ue),Ge(F)}function Ge(S){dt(S),j.remove(S)}function dt(S){const F=j.get(S).programs;F!==void 0&&(F.forEach(function(G){J.releaseProgram(G)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,X,O,de){F===null&&(F=Oe);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ie=od(S,F,G,X,O);Z.setMaterial(X,Ee);let Re=G.index,ze=1;if(X.wireframe===!0){if(Re=L.getWireframeAttribute(G),Re===void 0)return;ze=2}const He=G.drawRange,Ne=G.attributes.position;let $e=He.start*ze,rt=(He.start+He.count)*ze;de!==null&&($e=Math.max($e,de.start*ze),rt=Math.min(rt,(de.start+de.count)*ze)),Re!==null?($e=Math.max($e,0),rt=Math.min(rt,Re.count)):Ne!=null&&($e=Math.max($e,0),rt=Math.min(rt,Ne.count));const _t=rt-$e;if(_t<0||_t===1/0)return;ke.setup(O,X,Ie,G,Re);let vt,Je=Le;if(Re!==null&&(vt=g.get(Re),Je=De,Je.setIndex(vt)),O.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*R()),Je.setMode(_.LINES)):Je.setMode(_.TRIANGLES);else if(O.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),Z.setLineWidth(Be*R()),O.isLineSegments?Je.setMode(_.LINES):O.isLineLoop?Je.setMode(_.LINE_LOOP):Je.setMode(_.LINE_STRIP)}else O.isPoints?Je.setMode(_.POINTS):O.isSprite&&Je.setMode(_.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Be=O._multiDrawStarts,At=O._multiDrawCounts,et=O._multiDrawCount,an=Re?g.get(Re).bytesPerElement:1,Vi=j.get(X).currentProgram.getUniforms();for(let qt=0;qt<et;qt++)Vi.setValue(_,"_gl_DrawID",qt),Je.render(Be[qt]/an,At[qt])}else if(O.isInstancedMesh)Je.renderInstances($e,_t,O.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,At=Math.min(G.instanceCount,Be);Je.renderInstances($e,_t,At)}else Je.render($e,_t)};function it(S,F,G){S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,_s(S,F,G),S.side=di,S.needsUpdate=!0,_s(S,F,G),S.side=On):_s(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),p=pe.get(G),p.init(F),T.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ie=de[Ee];it(Ie,G,O),X.add(Ie)}else it(de,G,O),X.add(de)}),p=T.pop(),X},this.compileAsync=function(S,F,G=null){const X=this.compile(S,F,G);return new Promise(O=>{function de(){if(X.forEach(function(Ee){j.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){O(S);return}setTimeout(de,10)}q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let on=null;function An(S){on&&on(S)}function oc(){_i.stop()}function ac(){_i.start()}const _i=new ed;_i.setAnimationLoop(An),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(S){on=S,fe.setAnimationLoop(S),S===null?_i.stop():_i.start()},fe.addEventListener("sessionstart",oc),fe.addEventListener("sessionend",ac),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,F,B),p=pe.get(S,T.length),p.init(F),T.push(p),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(ee),be=this.localClippingEnabled,me=Te.init(this.clippingPlanes,be),m=ye.get(S,w.length),m.init(),w.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&Uo(de,F,-1/0,E.sortObjects)}Uo(S,F,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ge,xe),A=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,A&&ce.addToRenderList(m,S),this.info.render.frame++,me===!0&&Te.beginShadows();const G=p.state.shadowsArray;we.render(G,S,F),me===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const de=F.cameras;if(O.length>0)for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){const Re=de[Ee];cc(X,O,S,Re)}A&&ce.render(S);for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){const Re=de[Ee];lc(m,S,Re,Re.viewport)}}else O.length>0&&cc(X,O,S,F),A&&ce.render(S),lc(m,S,F);B!==null&&P===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),S.isScene===!0&&S.onAfterRender(E,S,F),ke.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],me===!0&&Te.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Uo(S,F,G,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ne.intersectsSprite(S)){X&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const Ee=V.update(S),Ie=S.material;Ie.visible&&m.push(S,Ee,Ie,G,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ne.intersectsObject(S))){const Ee=V.update(S),Ie=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ae.copy(Ee.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(ee)),Array.isArray(Ie)){const Re=Ee.groups;for(let ze=0,He=Re.length;ze<He;ze++){const Ne=Re[ze],$e=Ie[Ne.materialIndex];$e&&$e.visible&&m.push(S,Ee,$e,G,ae.z,Ne)}}else Ie.visible&&m.push(S,Ee,Ie,G,ae.z,null)}}const de=S.children;for(let Ee=0,Ie=de.length;Ee<Ie;Ee++)Uo(de[Ee],F,G,X)}function lc(S,F,G,X){const O=S.opaque,de=S.transmissive,Ee=S.transparent;p.setupLightsView(G),me===!0&&Te.setGlobalState(E.clippingPlanes,G),X&&Z.viewport(U.copy(X)),O.length>0&&gs(O,F,G),de.length>0&&gs(de,F,G),Ee.length>0&&gs(Ee,F,G),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function cc(S,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Bi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?fs:Xn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const de=p.state.transmissionRenderTarget[X.id],Ee=X.viewport||U;de.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);const Ie=E.getRenderTarget();E.setRenderTarget(de),E.getClearColor(ie),ue=E.getClearAlpha(),ue<1&&E.setClearColor(16777215,.5),E.clear(),A&&ce.render(G);const Re=E.toneMapping;E.toneMapping=li;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),me===!0&&Te.setGlobalState(E.clippingPlanes,X),gs(S,G,X),K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de),q.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ne=0,$e=F.length;Ne<$e;Ne++){const rt=F[Ne],_t=rt.object,vt=rt.geometry,Je=rt.material,Be=rt.group;if(Je.side===On&&_t.layers.test(X.layers)){const At=Je.side;Je.side=Gt,Je.needsUpdate=!0,uc(_t,G,X,vt,Je,Be),Je.side=At,Je.needsUpdate=!0,He=!0}}He===!0&&(K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de))}E.setRenderTarget(Ie),E.setClearColor(ie,ue),ze!==void 0&&(X.viewport=ze),E.toneMapping=Re}function gs(S,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,de=S.length;O<de;O++){const Ee=S[O],Ie=Ee.object,Re=Ee.geometry,ze=Ee.group;let He=Ee.material;He.allowOverride===!0&&X!==null&&(He=X),Ie.layers.test(G.layers)&&uc(Ie,F,G,Re,He,ze)}}function uc(S,F,G,X,O,de){S.onBeforeRender(E,F,G,X,O,de),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(E,F,G,X,S,de),O.transparent===!0&&O.side===On&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,E.renderBufferDirect(G,F,X,O,S,de),O.side=di,O.needsUpdate=!0,E.renderBufferDirect(G,F,X,O,S,de),O.side=On):E.renderBufferDirect(G,F,X,O,S,de),S.onAfterRender(E,F,G,X,O,de)}function _s(S,F,G){F.isScene!==!0&&(F=Oe);const X=j.get(S),O=p.state.lights,de=p.state.shadowsArray,Ee=O.state.version,Ie=J.getParameters(S,O.state,de,F,G),Re=J.getProgramCacheKey(Ie);let ze=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?M:Se).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Ue),ze=new Map,X.programs=ze);let He=ze.get(Re);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===Ee)return hc(S,Ie),He}else Ie.uniforms=J.getUniforms(S),S.onBeforeCompile(Ie,E),He=J.acquireProgram(Ie,Re),ze.set(Re,He),X.uniforms=Ie.uniforms;const Ne=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Te.uniform),hc(S,Ie),X.needsLights=ld(S),X.lightsStateVersion=Ee,X.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function fc(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ro.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function hc(S,F){const G=j.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function od(S,F,G,X,O){F.isScene!==!0&&(F=Oe),K.resetTextureUnits();const de=F.fog,Ee=X.isMeshStandardMaterial?F.environment:null,Ie=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Tr,Re=(X.isMeshStandardMaterial?M:Se).get(X.envMap||Ee),ze=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color;let _t=li;X.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_t=E.toneMapping);const vt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Je=vt!==void 0?vt.length:0,Be=j.get(X),At=p.state.lights;if(me===!0&&(be===!0||S!==y)){const Ut=S===y&&X.id===b;Te.setState(X,S,Ut)}let et=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==At.state.version||Be.outputColorSpace!==Ie||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==Re||X.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Te.numPlanes||Be.numIntersection!==Te.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==He||Be.morphTargets!==Ne||Be.morphNormals!==$e||Be.morphColors!==rt||Be.toneMapping!==_t||Be.morphTargetsCount!==Je)&&(et=!0):(et=!0,Be.__version=X.version);let an=Be.currentProgram;et===!0&&(an=_s(X,F,O));let Vi=!1,qt=!1,Rr=!1;const mt=an.getUniforms(),Zt=Be.uniforms;if(Z.useProgram(an.program)&&(Vi=!0,qt=!0,Rr=!0),X.id!==b&&(b=X.id,qt=!0),Vi||y!==S){Z.buffers.depth.getReversed()?(N.copy(S.projectionMatrix),F_(N),O_(N),mt.setValue(_,"projectionMatrix",N)):mt.setValue(_,"projectionMatrix",S.projectionMatrix),mt.setValue(_,"viewMatrix",S.matrixWorldInverse);const Vt=mt.map.cameraPosition;Vt!==void 0&&Vt.setValue(_,le.setFromMatrixPosition(S.matrixWorld)),Y.logarithmicDepthBuffer&&mt.setValue(_,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(_,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,qt=!0,Rr=!0)}if(O.isSkinnedMesh){mt.setOptional(_,O,"bindMatrix"),mt.setOptional(_,O,"bindMatrixInverse");const Ut=O.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),mt.setValue(_,"boneTexture",Ut.boneTexture,K))}O.isBatchedMesh&&(mt.setOptional(_,O,"batchingTexture"),mt.setValue(_,"batchingTexture",O._matricesTexture,K),mt.setOptional(_,O,"batchingIdTexture"),mt.setValue(_,"batchingIdTexture",O._indirectTexture,K),mt.setOptional(_,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(_,"batchingColorTexture",O._colorsTexture,K));const Jt=G.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ae.update(O,G,an),(qt||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,mt.setValue(_,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Zt.envMap.value=Re,Zt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Zt.envMapIntensity.value=F.environmentIntensity),qt&&(mt.setValue(_,"toneMappingExposure",E.toneMappingExposure),Be.needsLights&&ad(Zt,Rr),de&&X.fog===!0&&H.refreshFogUniforms(Zt,de),H.refreshMaterialUniforms(Zt,X,z,re,p.state.transmissionRenderTarget[S.id]),ro.upload(_,fc(Be),Zt,K)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ro.upload(_,fc(Be),Zt,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(_,"center",O.center),mt.setValue(_,"modelViewMatrix",O.modelViewMatrix),mt.setValue(_,"normalMatrix",O.normalMatrix),mt.setValue(_,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ut=X.uniformsGroups;for(let Vt=0,Io=Ut.length;Vt<Io;Vt++){const vi=Ut[Vt];D.update(vi,an),D.bind(vi,an)}}return an}function ad(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,F,G){const X=j.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=F,j.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const G=j.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const cd=_.createFramebuffer();this.setRenderTarget=function(S,F=0,G=0){B=S,C=F,P=G;let X=!0,O=null,de=!1,Ee=!1;if(S){const Re=j.get(S);if(Re.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(_.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(Re.__hasExternalTextures)K.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&j.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const He=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[F])?O=He[F][G]:O=He[F],de=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?O=j.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[G]:O=He,U.copy(S.viewport),te.copy(S.scissor),W=S.scissorTest}else U.copy(Ce).multiplyScalar(z).floor(),te.copy(Fe).multiplyScalar(z).floor(),W=Ze;if(G!==0&&(O=cd),Z.bindFramebuffer(_.FRAMEBUFFER,O)&&X&&Z.drawBuffers(S,O),Z.viewport(U),Z.scissor(te),Z.setScissorTest(W),de){const Re=j.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,G)}else if(Ee){const Re=j.get(S.texture),ze=F;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Re.__webglTexture,G,ze)}else if(S!==null&&G!==0){const Re=j.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Re.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(S,F,G,X,O,de,Ee,Ie=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Z.bindFramebuffer(_.FRAMEBUFFER,Re);try{const ze=S.textures[Ie],He=ze.format,Ne=ze.type;if(!Y.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&G>=0&&G<=S.height-O&&(S.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(F,G,X,O,_e.convert(He),_e.convert(Ne),de))}finally{const ze=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(_.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,X,O,de,Ee,Ie=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if(F>=0&&F<=S.width-X&&G>=0&&G<=S.height-O){Z.bindFramebuffer(_.FRAMEBUFFER,Re);const ze=S.textures[Ie],He=ze.format,Ne=ze.type;if(!Y.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.bufferData(_.PIXEL_PACK_BUFFER,de.byteLength,_.STREAM_READ),S.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(F,G,X,O,_e.convert(He),_e.convert(Ne),0);const rt=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(_.FRAMEBUFFER,rt);const _t=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await N_(_,_t,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,de),_.deleteBuffer($e),_.deleteSync(_t),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,G=0){const X=Math.pow(2,-G),O=Math.floor(S.image.width*X),de=Math.floor(S.image.height*X),Ee=F!==null?F.x:0,Ie=F!==null?F.y:0;K.setTexture2D(S,0),_.copyTexSubImage2D(_.TEXTURE_2D,G,0,0,Ee,Ie,O,de),Z.unbindTexture()};const ud=_.createFramebuffer(),fd=_.createFramebuffer();this.copyTextureToTexture=function(S,F,G=null,X=null,O=0,de=null){de===null&&(O!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=O,O=0):de=0);let Ee,Ie,Re,ze,He,Ne,$e,rt,_t;const vt=S.isCompressedTexture?S.mipmaps[de]:S.image;if(G!==null)Ee=G.max.x-G.min.x,Ie=G.max.y-G.min.y,Re=G.isBox3?G.max.z-G.min.z:1,ze=G.min.x,He=G.min.y,Ne=G.isBox3?G.min.z:0;else{const Jt=Math.pow(2,-O);Ee=Math.floor(vt.width*Jt),Ie=Math.floor(vt.height*Jt),S.isDataArrayTexture?Re=vt.depth:S.isData3DTexture?Re=Math.floor(vt.depth*Jt):Re=1,ze=0,He=0,Ne=0}X!==null?($e=X.x,rt=X.y,_t=X.z):($e=0,rt=0,_t=0);const Je=_e.convert(F.format),Be=_e.convert(F.type);let At;F.isData3DTexture?(K.setTexture3D(F,0),At=_.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),At=_.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),At=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const et=_.getParameter(_.UNPACK_ROW_LENGTH),an=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Vi=_.getParameter(_.UNPACK_SKIP_PIXELS),qt=_.getParameter(_.UNPACK_SKIP_ROWS),Rr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,vt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,vt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(_.UNPACK_SKIP_ROWS,He),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ne);const mt=S.isDataArrayTexture||S.isData3DTexture,Zt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Jt=j.get(S),Ut=j.get(F),Vt=j.get(Jt.__renderTarget),Io=j.get(Ut.__renderTarget);Z.bindFramebuffer(_.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,Io.__webglFramebuffer);for(let vi=0;vi<Re;vi++)mt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,j.get(S).__webglTexture,O,Ne+vi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,j.get(F).__webglTexture,de,_t+vi)),_.blitFramebuffer(ze,He,Ee,Ie,$e,rt,Ee,Ie,_.DEPTH_BUFFER_BIT,_.NEAREST);Z.bindFramebuffer(_.READ_FRAMEBUFFER,null),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||j.has(S)){const Jt=j.get(S),Ut=j.get(F);Z.bindFramebuffer(_.READ_FRAMEBUFFER,ud),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,fd);for(let Vt=0;Vt<Re;Vt++)mt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Jt.__webglTexture,O,Ne+Vt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Jt.__webglTexture,O),Zt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ut.__webglTexture,de,_t+Vt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ut.__webglTexture,de),O!==0?_.blitFramebuffer(ze,He,Ee,Ie,$e,rt,Ee,Ie,_.COLOR_BUFFER_BIT,_.NEAREST):Zt?_.copyTexSubImage3D(At,de,$e,rt,_t+Vt,ze,He,Ee,Ie):_.copyTexSubImage2D(At,de,$e,rt,ze,He,Ee,Ie);Z.bindFramebuffer(_.READ_FRAMEBUFFER,null),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Zt?S.isDataTexture||S.isData3DTexture?_.texSubImage3D(At,de,$e,rt,_t,Ee,Ie,Re,Je,Be,vt.data):F.isCompressedArrayTexture?_.compressedTexSubImage3D(At,de,$e,rt,_t,Ee,Ie,Re,Je,vt.data):_.texSubImage3D(At,de,$e,rt,_t,Ee,Ie,Re,Je,Be,vt):S.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,de,$e,rt,Ee,Ie,Je,Be,vt.data):S.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,de,$e,rt,vt.width,vt.height,Je,vt.data):_.texSubImage2D(_.TEXTURE_2D,de,$e,rt,Ee,Ie,Je,Be,vt);_.pixelStorei(_.UNPACK_ROW_LENGTH,et),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,an),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Vi),_.pixelStorei(_.UNPACK_SKIP_ROWS,qt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Rr),de===0&&F.generateMipmaps&&_.generateMipmap(At),Z.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G=null,X=null,O=0){return gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,G,X,O)},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),Z.unbindTexture()},this.resetState=function(){C=0,P=0,B=null,Z.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const sE={class:"blur-background"},oE={style:{display:"flex","flex-direction":"column"}},aE={class:"layout"},lE={__name:"HomeComponent",setup(n){const e=Hi(null),t=[];return Vf(()=>{const i=e.value,r=i.clientWidth,s=i.clientHeight,o=new lv,a=new tn(75,r/s,.1,1e3);a.position.z=10;const l=new rE({antialias:!0,alpha:!0});l.setSize(r,s),i.appendChild(l.domElement);const c=new Mv,u=new je,f=[],h=4,d=new Hr;t.forEach((m,p)=>{const w=Math.acos(-1+2*p/t.length),T=Math.sqrt(t.length*Math.PI)*w,E=new vv().load(m.url),I=new jh({map:E}),C=new uv(I);C.scale.set(1.2,1.2,1.2),C.position.setFromSphericalCoords(h,w,T),C.userData={link:m.link},d.add(C),f.push(C)}),o.add(d);const v=()=>{requestAnimationFrame(v),d.rotation.y+=.002,d.rotation.x+=.001,l.render(o,a)},x=m=>{const p=l.domElement.getBoundingClientRect();u.x=(m.clientX-p.left)/p.width*2-1,u.y=-((m.clientY-p.top)/p.height)*2+1,c.setFromCamera(u,a);const w=c.intersectObjects(f);if(w.length>0){const T=w[0].object.userData.link;T&&window.open(T,"_blank")}};l.domElement.addEventListener("click",x),v(),window.addEventListener("resize",()=>{const m=i.clientWidth,p=i.clientHeight;a.aspect=m/p,a.updateProjectionMatrix(),l.setSize(m,p)})}),(i,r)=>(ct(),ht("div",sE,[r[1]||(r[1]=Ye("div",{class:"blur-shape pink"},null,-1)),r[2]||(r[2]=Ye("div",{class:"blur-shape purple"},null,-1)),r[3]||(r[3]=Ye("div",{class:"blur-shape blue"},null,-1)),Ye("div",oE,[Ye("div",aE,[r[0]||(r[0]=Ye("div",{class:"content"},[Ye("h1",{class:"title"},"Sreesh Poudyal"),Ye("h2",{class:"subtitle"},"Graphic Design, Software Engineering, and UI/UX Design")],-1)),Ye("div",{ref_key:"globeContainer",ref:e,class:"globe"},null,512)])])]))}},cE=Xt(lE,[["__scopeId","data-v-1c3b3835"]]),uE=["href"],fE=["src"],hE={style:{display:"flex","flex-direction":"column",width:"100%","margin-left":"2rem"}},dE={class:"neonHaluka"},pE={class:"neonWhite"},mE={__name:"HomeCard",props:{title:String,image:String,link:String,description:String},setup(n){return(e,t)=>(ct(),ht("a",{href:n.link,class:"box"},[Ye("img",{src:n.image,class:"imageL"},null,8,fE),Ye("div",hE,[Ye("h3",dE,Ii(n.title),1),Ye("p",pE,Ii(n.description),1)])],8,uE))}},gE=Xt(mE,[["__scopeId","data-v-7aed76ec"]]),_E={class:"tabs",style:{"margin-bottom":"0"}},vE=["onClick"],xE={class:"container"},SE={__name:"HomeDisplayComponent",setup(n){const e=["Graphic Design","Web Development","UI/UX"],t=Hi("Graphic Design"),i=[{title:"Logo Design",image:new URL("/assets/logo_final-CwVBTyZz.webp",import.meta.url).href,link:"/logos",description:"A small collection of logos done for certain organizations I have had the pleasure of working with."},{title:"Spice Trail Tea House",image:new URL("/assets/logo_teashop_red_background-CvSPH06a.png",import.meta.url).href,link:"/spicetrail",description:"A conceptualization of a tea shop and company specializing in spiced tea, including loose leaf, tea bags, cups, and other products."},{title:"Miscellaneous Designs",image:new URL("/assets/cool_leaf-02-02-D6mHwyWO.webp",import.meta.url).href,link:"/misc",description:"Little tidbits, diagrams, and illustrations that were made for fun."},{title:"Map",image:new URL("/assets/mappostermin-D3odMWe_.png",import.meta.url).href,link:"/map",description:"A large poster style map of my home nation, Nepal."}],r=[{title:"Joshua Kendall Website",image:new URL("/assets/JoshuaKendallphoto-Df50U5iI.png",import.meta.url).href,link:"https://joshuackendall.com//",description:"A series of websites for renowed author and biographer Joshua C. Kendall and his four books."},{title:"Cardinal Talent AI",image:new URL("data:image/svg+xml,%3csvg%20id='Layer_2'%20data-name='Layer%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20760.61%20594.76'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%239a303a;}.cls-2{fill:%23dd953e;}.cls-3{fill:%232c302f;}.cls-4{fill:%23bf3b47;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M727.89,586s-68.64-165.88,124.8-301.31c0,0-35-18.12-88.76,6-10.92,4.91,14.36-45.27,14.36-45.27a276.26,276.26,0,0,0-70.84,40.06c-10,7.88,4.15-39.64,4.15-39.64S674.93,258.49,649,284.23c-1,1-17.7-31.81-17.7-31.81s-37,21.26-39.89,66.93c0,0-1.38-6.54-14.83-27.26-63,49.45-71.84,96-51.27,231.81Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-2'%20d='M827.65,586l50.18-7s-29.53-48.31-61.68-59.14S827.65,586,827.65,586Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-3'%20d='M827.65,586,756,633.27s48.64-104.5,64.68-111.72Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-4'%20d='M117.21,741.26s10.7,36.35,39.56,46.77S411.26,769.43,446.24,752c3.2-1.61,132.84,6.41,209.81-18.18,18-5.75,84.46-41.43,106.92-85s40.17-112.62,57.73-127.23c3.59-3-39-62-77-53.46-6.28,30.61-44.1,71.37-44.1,71.37s-190-77.78-144.33-344c0,0-42.87,13.82-66.55,77-4.82,12.82-25.23-48.12-25.23-48.12s-19,40.17-24.49,89.81c-1.6,14.43-28.87-35.28-28.87-35.28s-19.24,40-19.24,81.79c0,1.6-40.09-11.23-40.09-11.23s-13.1,43,21.65,82.19c0,0-.8,4.54-28.47-1.2-10.56,91,15.17,131.1,142.06,223.71C415.71,734.69,117.21,741.26,117.21,741.26Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-1'%20d='M344.08,430.41c-10.56,91,15.16,131.1,142.06,223.71l101-50.25C486.24,578,385.33,528.59,344.08,430.41Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-1'%20d='M134,771.58c5.83,6.81,13.34,13,22.82,16.45,28.87,10.42,254.49-18.6,289.47-36.08,3.2-1.61,132.84,6.41,209.81-18.18,12.83-4.1,50.27-23.39,78.85-49.91-97,42.43-180.95,55.34-288.4,43.5C354.79,768.2,248.69,780.14,134,771.58Z'%20transform='translate(-117.21%20-195.47)'/%3e%3c/svg%3e",import.meta.url).href,link:"https://www.cardinaltalent.ai/",description:"A website and frontend for an AI recruiter product."},{title:"Sitesaga",image:new URL("/assets/sitesaga-BVq7Ka-J.jpg",import.meta.url).href,link:"https://www.sitesaga.com/",description:"A website all about WordPress and web hosting that I designed and created pages for."}],s=[{title:"Gymbel",image:new URL("/assets/gymbel-DJNprGre.webp",import.meta.url).href,link:"https://devpost.com/software/gymble",description:"A Tinder-like application to find gym parters, made for HackHer 2024."}],o=nn(()=>t.value==="Graphic Design"?i:t.value==="Web Development"?r:t.value==="UI/UX"?s:[]);return(a,l)=>(ct(),ht(Bt,null,[Ye("div",_E,[(ct(),ht(Bt,null,Qr(e,c=>Ye("button",{key:c,onClick:u=>t.value=c,class:Eo({active:t.value===c})},Ii(c),11,vE)),64))]),Ye("div",xE,[(ct(!0),ht(Bt,null,Qr(o.value,(c,u)=>(ct(),ah(gE,{key:u,title:c.title,image:c.image,link:c.link,description:c.description},null,8,["title","image","link","description"]))),128))])],64))}},ME=Xt(SE,[["__scopeId","data-v-2eba25c5"]]),EE={style:{width:"100%",margin:"0",padding:"0",left:"0",top:"0"}},yE={__name:"HomeView",setup(n){return(e,t)=>(ct(),ht("main",null,[t[0]||(t[0]=ch('<head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Newa&amp;display=swap" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tilt Neon"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href=".\\styles.css"><title>Sreesh Poudyal</title></head>',1)),Ye("body",null,[Ye("div",EE,[pt(cE),pt(ME)])])]))}},TE={class:"font-section"},bE={class:"font-grid"},AE={class:"font-name"},wE={class:"font-description neonWhite"},RE=["href"],CE={__name:"Fonts",setup(n){const e=Hi([{name:"Midheim",description:"A modern, sans-serif typeface known for its clean lines and versatility.",cssFamily:"'Midheim', sans-serif",downloadLink:"/font/Midheim.ttf"},{name:"Open Sans",description:"A humanist sans-serif typeface designed for legibility across print, web, and mobile interfaces.",cssFamily:"'Open Sans', sans-serif",downloadLink:"https://fonts.google.com/specimen/Open+Sans"},{name:"Lora",description:"A well-balanced serif typeface with roots in calligraphy, perfect for body text.",cssFamily:"'Lora', serif",downloadLink:"https://fonts.google.com/specimen/Lora"},{name:"Montserrat",description:"A geometric sans-serif typeface inspired by urban typography from the early 20th century.",cssFamily:"'Montserrat', sans-serif",downloadLink:"https://fonts.google.com/specimen/Montserrat"},{name:"Merriweather",description:"A serif typeface designed for readability on screens, with a classic yet contemporary feel.",cssFamily:"'Merriweather', serif",downloadLink:"https://fonts.google.com/specimen/Merriweather"},{name:"Poppins",description:"A geometric sans-serif typeface with a clean and modern aesthetic, suitable for headlines and display text.",cssFamily:"'Poppins', sans-serif",downloadLink:"https://fonts.google.com/specimen/Poppins"}]);return(t,i)=>(ct(),ht("section",TE,[Ye("div",bE,[(ct(!0),ht(Bt,null,Qr(e.value,r=>(ct(),ht("div",{key:r.name,class:"font-card"},[Ye("h2",AE,Ii(r.name),1),Ye("p",wE,Ii(r.description),1),Ye("p",{class:"font-preview",style:Mo({fontFamily:r.cssFamily})}," The quick brown fox jumps over the lazy dog. ",4),Ye("a",{href:r.downloadLink,target:"_blank",rel:"noopener",class:"download-link"}," Download "+Ii(r.name),9,RE)]))),128))])]))}},PE=Xt(CE,[["__scopeId","data-v-2cb9f982"]]),LE={class:"image-grid"},DE=["onClick"],UE=["src","alt"],IE=["src"],NE={__name:"ItemGrid",props:{images:{type:Array,required:!0}},setup(n){const e=Hi(null),t=i=>{e.value=i};return(i,r)=>(ct(),ht("div",null,[Ye("div",LE,[(ct(!0),ht(Bt,null,Qr(n.images,(s,o)=>(ct(),ht("div",{key:o,class:"image-item",onClick:a=>t(s)},[Ye("img",{src:s,alt:"Image "+(o+1)},null,8,UE)],8,DE))),128))]),e.value?(ct(),ht("div",{key:0,class:"modal",onClick:r[1]||(r[1]=Tm(s=>e.value=null,["self"]))},[Ye("span",{class:"close",onClick:r[0]||(r[0]=s=>e.value=null)},"×"),Ye("img",{class:"modal-content",src:e.value},null,8,IE)])):uh("",!0)]))}},sc=Xt(NE,[["__scopeId","data-v-be7d3618"]]),FE={style:{"margin-top":"4rem"}},OE={__name:"BazarBlend",setup(n){const e=[new URL("/assets/product-arabian-CSAPWqL2.webp",import.meta.url).href,new URL("/assets/product-assam-CJLCfvB3.webp",import.meta.url).href,new URL("/assets/product-darjeeling-C5VmlkOj.webp",import.meta.url).href,new URL("/assets/product-darjeeling-back-DNXdwwi-.webp",import.meta.url).href,new URL("/assets/product-lineup-2-CqIAkEYF.webp",import.meta.url).href,new URL("/assets/product-lineup-B-_Gyn8J.webp",import.meta.url).href,new URL("/assets/logo_tea-BoAWxn71.png",import.meta.url).href];return(t,i)=>(ct(),ht("div",FE,[pt(sc,{images:e})]))}},BE=Xt(OE,[["__scopeId","data-v-42e6e605"]]),zE={style:{"margin-top":"4rem"}},HE={__name:"Logos",setup(n){const e=[new URL("/assets/Untitled-3_Logo%201_back-CcTA_kLq.webp",import.meta.url).href,new URL("/assets/logo_teashop_red_background-CRlWQYrl.webp",import.meta.url).href,new URL("/assets/logo_final-CwVBTyZz.webp",import.meta.url).href,new URL("/assets/logo%20design%20final-CmGqr30q.webp",import.meta.url).href,new URL("/assets/126903761_843966036406371_2873100655496944690_n-CUeDXbbT.jpg",import.meta.url).href,new URL("/assets/logo_1-q8ycEwR7.webp",import.meta.url).href,new URL("/assets/logo_sugarloaf-BFhjPT4H.webp",import.meta.url).href,new URL("/assets/WesternMassNepaliLogo-01-D0d3aRDj.png",import.meta.url).href];return(t,i)=>(ct(),ht("div",zE,[pt(sc,{images:e})]))}},VE=Xt(HE,[["__scopeId","data-v-b5de4186"]]),kE={class:"map-poster-page"},GE={class:"map-container"},WE=["src"],XE={__name:"Map",setup(n){const e=new URL("/assets/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered-raZyXrFQ.webp",import.meta.url).href;return(t,i)=>(ct(),ht("div",kE,[Ye("div",GE,[Ye("img",{src:fn(e),class:"map-image",alt:"Map Poster"},null,8,WE)])]))}},qE=Xt(XE,[["__scopeId","data-v-8d5d90b6"]]),YE={style:{"margin-top":"4rem"}},$E={__name:"Misc",setup(n){const e=[new URL("/assets/cool_leaf-02-02-D6mHwyWO.webp",import.meta.url).href,new URL("/assets/Copy%20of%20JOIN%20US%20AT-Cbzc6_sT.gif",import.meta.url).href,new URL("/assets/story-bJD6Shtf.webp",import.meta.url).href,new URL("/assets/Untitled-1-01-CnYBj5aE.webp",import.meta.url).href,new URL("/assets/127458884_696022131349534_8381611335992114089_n-C4K5k0Xe.webp",import.meta.url).href,new URL("/assets/Vintage%20Floral%20Funeral%20Invitation-DnuJhfch.webp",import.meta.url).href,new URL("/assets/sciquel-01-C3yz8x6G.webp",import.meta.url).href,new URL("/assets/layer_image-Uj2mk0HO.webp",import.meta.url).href];return(t,i)=>(ct(),ht("div",YE,[pt(sc,{images:e})]))}},KE=Xt($E,[["__scopeId","data-v-f9cbe6a1"]]),jE={class:"presentation-grid"},ZE=["onClick"],JE=["src","alt"],QE=["src"],ey={__name:"PresentationGrid",props:{images:{type:Array,required:!0}},setup(n){const e=Hi(null),t=i=>{e.value=i};return(i,r)=>(ct(),ht("div",jE,[(ct(!0),ht(Bt,null,Qr(n.images,(s,o)=>(ct(),ht("div",{key:o,class:"presentation-item",onClick:a=>t(s)},[s.type==="image"?(ct(),ht("img",{key:0,src:s.src,alt:"Image "+(o+1)},null,8,JE)):s.type==="video"?(ct(),ht("video",{key:1,controls:!1,loops:"",autoplay:"",muted:"",src:s.src,preload:"metadata",style:{"max-width":"100%","max-height":"100%"}},null,8,QE)):uh("",!0)],8,ZE))),128))]))}},ty=Xt(ey,[["__scopeId","data-v-63ac2bc3"]]),ny={style:{"margin-top":"4rem"}},iy={__name:"SpiceTrail",setup(n){const e=[{type:"video",src:new URL("/assets/SpiceTrail-Tea-House-bRJcnHUG.mp4",import.meta.url).href},{type:"image",src:new URL("/assets/Concept-BAd06M_E.png",import.meta.url).href},{type:"image",src:new URL("/assets/Logo-Slogan-CAaogrps.png",import.meta.url).href},{type:"image",src:new URL("/assets/Decor0-cTF-GCia.png",import.meta.url).href},{type:"image",src:new URL("/assets/Decor1-DYyKL3Lb.png",import.meta.url).href},{type:"image",src:new URL("/assets/Floor12-Du5DrSh6.png",import.meta.url).href},{type:"image",src:new URL("/assets/Floor3-1N46dgcn.png",import.meta.url).href},{type:"image",src:new URL("/assets/Tea-selection-BdS3oLr7.png",import.meta.url).href},{type:"image",src:new URL("/assets/Spice-add-Di-JaraC.png",import.meta.url).href},{type:"image",src:new URL("/assets/Sig-Menu-DXiYpnLr.png",import.meta.url).href},{type:"image",src:new URL("/assets/Desserts_Snacks-CAVl0aTW.png",import.meta.url).href},{type:"image",src:new URL("/assets/Activities-Bx9FrU6F.png",import.meta.url).href},{type:"image",src:new URL("/assets/Packaging3-B46yWPRu.png",import.meta.url).href},{type:"image",src:new URL("/assets/Packaging-CXKrcVGP.png",import.meta.url).href},{type:"image",src:new URL("/assets/25-C4eiFNaE.png",import.meta.url).href},{type:"image",src:new URL("/assets/18-DbAnRtAv.png",import.meta.url).href},{type:"image",src:new URL("/assets/Packaging2-rSrnuEqI.png",import.meta.url).href},{type:"image",src:new URL("/assets/16-BYJnGg7_.png",import.meta.url).href},{type:"image",src:new URL("/assets/17-Dz1zAe63.png",import.meta.url).href},{type:"image",src:new URL("/assets/Merchaindise-CMhZoXZd.png",import.meta.url).href},{type:"image",src:new URL("/assets/26-C1ULBZ7a.png",import.meta.url).href},{type:"image",src:new URL("/assets/21-CZ-aV95q.png",import.meta.url).href}];return(t,i)=>(ct(),ht("div",ny,[pt(ty,{images:e})]))}},ry=Xt(iy,[["__scopeId","data-v-a0685f72"]]),sy="/assets/Sreesh_Poudyal_Resume-Bgzejsur.pdf",oy={class:"resume-grid"},ay={class:"resume-item"},ly=["src"],cy={__name:"Resume",setup(n){const e=Hi(sy);return(t,i)=>(ct(),ht("div",oy,[Ye("div",ay,[Ye("embed",{src:e.value,type:"application/pdf"},null,8,ly)])]))}},uy=Xt(cy,[["__scopeId","data-v-a4693a9d"]]),fy=Pg({history:og("/"),routes:[{path:"/",name:"home",component:yE},{path:"/about",name:"about",component:()=>iu(()=>import("./AboutView-DNO_AifO.js"),__vite__mapDeps([0,1]))},{path:"/contact",name:"contact",component:()=>iu(()=>import("./ContactView-Bz-8HFW3.js"),__vite__mapDeps([2,3]))},{path:"/fonts",name:"Fonts",component:PE},{path:"/bazar",name:"Bazar",component:BE},{path:"/logos",name:"Logos",component:VE},{path:"/map",name:"Map",component:qE},{path:"/misc",name:"Misc",component:KE},{path:"/spicetrail",name:"SpiceTrail",component:ry},{path:"/resume",name:"Resume",component:uy}]}),sd=wm(kg);sd.use(fy);sd.mount("#app");export{Bt as F,Xt as _,ht as a,Ye as b,ch as c,ct as d,Vf as o};
