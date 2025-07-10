const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-DpD3l7ib.js","assets/AboutView-CIL7sCDZ.css","assets/ContactView-GGU_1OTW.js","assets/ContactView-tkcEXESB.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},nr=[],En=()=>{},Zh=()=>!1,so=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_l=n=>n.startsWith("onUpdate:"),Lt=Object.assign,vl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jh=Object.prototype.hasOwnProperty,it=(n,e)=>Jh.call(n,e),Ve=Array.isArray,ir=n=>oo(n)==="[object Map]",Wu=n=>oo(n)==="[object Set]",Xe=n=>typeof n=="function",Mt=n=>typeof n=="string",di=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",Xu=n=>(pt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),qu=Object.prototype.toString,oo=n=>qu.call(n),Qh=n=>oo(n).slice(8,-1),$u=n=>oo(n)==="[object Object]",xl=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ed=/-(\w)/g,li=ao(n=>n.replace(ed,(e,t)=>t?t.toUpperCase():"")),td=/\B([A-Z])/g,Fi=ao(n=>n.replace(td,"-$1").toLowerCase()),Yu=ao(n=>n.charAt(0).toUpperCase()+n.slice(1)),To=ao(n=>n?`on${Yu(n)}`:""),si=(n,e)=>!Object.is(n,e),bo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ku=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},nd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let tc;const lo=()=>tc||(tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function co(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?od(i):co(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(n)||pt(n))return n}const id=/;(?![^(]*\))/g,rd=/:([^]+)/,sd=/\/\*[^]*?\*\//g;function od(n){const e={};return n.replace(sd,"").split(id).forEach(t=>{if(t){const i=t.split(rd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function uo(n){let e="";if(Mt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=uo(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ld=gl(ad);function ju(n){return!!n||n===""}const Zu=n=>!!(n&&n.__v_isRef===!0),Di=n=>Mt(n)?n:n==null?"":Ve(n)||pt(n)&&(n.toString===qu||!Xe(n.toString))?Zu(n)?Di(n.value):JSON.stringify(n,Ju,2):String(n),Ju=(n,e)=>Zu(e)?Ju(n,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ao(i,s)+" =>"]=r,t),{})}:Wu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ao(t))}:di(e)?Ao(e):pt(e)&&!Ve(e)&&!$u(e)?String(e):e,Ao=(n,e="")=>{var t;return di(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class cd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=zt;try{return zt=this,e()}finally{zt=t}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){this._on>0&&--this._on===0&&(zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ud(){return zt}let ct;const wo=new WeakSet;class Qu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wo.has(this)&&(wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nc(this),nf(this);const e=ct,t=fn;ct=this,fn=!0;try{return this.fn()}finally{rf(this),ct=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)El(e);this.deps=this.depsTail=void 0,nc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let ef=0,Ur,Ir;function tf(n,e=!1){if(n.flags|=8,e){n.next=Ir,Ir=n;return}n.next=Ur,Ur=n}function Ml(){ef++}function Sl(){if(--ef>0)return;if(Ir){let e=Ir;for(Ir=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),El(i),fd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ga(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hr)||(n.globalVersion=Hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ga(n))))return;n.flags|=2;const e=n.dep,t=ct,i=fn;ct=n,fn=!0;try{nf(n);const r=n.fn(n._value);(e.version===0||si(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=t,fn=i,rf(n),n.flags&=-3}}function El(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)El(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function fd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const of=[];function Wn(){of.push(fn),fn=!1}function Xn(){const n=of.pop();fn=n===void 0?!0:n}function nc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let Hr=0;class hd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ct||!fn||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new hd(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=i)}return t}trigger(e){this.version++,Hr++,this.notify(e)}notify(e){Ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Sl()}}}function af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _a=new WeakMap,Ui=Symbol(""),va=Symbol(""),Vr=Symbol("");function Ct(n,e,t){if(fn&&ct){let i=_a.get(n);i||_a.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new yl),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const o=_a.get(n);if(!o){Hr++;return}const a=l=>{l&&l.trigger()};if(Ml(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&xl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Vr||!di(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Vr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ui)),ir(n)&&a(o.get(va)));break;case"delete":l||(a(o.get(Ui)),ir(n)&&a(o.get(va)));break;case"set":ir(n)&&a(o.get(Ui));break}}Sl()}function Bi(n){const e=nt(n);return e===n?e:(Ct(e,"iterate",Vr),tn(n)?e:e.map(At))}function fo(n){return Ct(n=nt(n),"iterate",Vr),n}const dd={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,At)},concat(...n){return Bi(this).concat(...n.map(e=>Ve(e)?Bi(e):e))},entries(){return Ro(this,"entries",n=>(n[1]=At(n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(At),arguments)},find(n,e){return Cn(this,"find",n,e,At,arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,At,arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Co(this,"includes",n)},indexOf(...n){return Co(this,"indexOf",n)},join(n){return Bi(this).join(n)},lastIndexOf(...n){return Co(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Sr(this,"pop")},push(...n){return Sr(this,"push",n)},reduce(n,...e){return ic(this,"reduce",n,e)},reduceRight(n,...e){return ic(this,"reduceRight",n,e)},shift(){return Sr(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Sr(this,"splice",n)},toReversed(){return Bi(this).toReversed()},toSorted(n){return Bi(this).toSorted(n)},toSpliced(...n){return Bi(this).toSpliced(...n)},unshift(...n){return Sr(this,"unshift",n)},values(){return Ro(this,"values",At)}};function Ro(n,e,t){const i=fo(n),r=i[e]();return i!==n&&!tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const pd=Array.prototype;function Cn(n,e,t,i,r,s){const o=fo(n),a=o!==n&&!tn(n),l=o[e];if(l!==pd[e]){const f=l.apply(n,s);return a?At(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,At(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function ic(n,e,t,i){const r=fo(n);let s=t;return r!==n&&(tn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,At(a),l,n)}),r[e](s,...i)}function Co(n,e,t){const i=nt(n);Ct(i,"iterate",Vr);const r=i[e](...t);return(r===-1||r===!1)&&Al(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function Sr(n,e,t=[]){Wn(),Ml();const i=nt(n)[e].apply(n,t);return Sl(),Xn(),i}const md=gl("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(di));function gd(n){di(n)||(n=String(n));const e=nt(this);return Ct(e,"has",n),e.hasOwnProperty(n)}class cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ad:df:s?hf:ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=dd[t]))return l;if(t==="hasOwnProperty")return gd}const a=Reflect.get(e,t,Pt(e)?e:i);return(di(t)?lf.has(t):md(t))||(r||Ct(e,"get",t),s)?a:Pt(a)?o&&xl(t)?a:a.value:pt(a)?r?mf(a):ho(a):a}}class uf extends cf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ci(s);if(!tn(i)&&!ci(i)&&(s=nt(s),i=nt(i)),!Ve(e)&&Pt(s)&&!Pt(i))return l?!1:(s.value=i,!0)}const o=Ve(e)&&xl(t)?Number(t)<e.length:it(e,t),a=Reflect.set(e,t,i,Pt(e)?e:r);return e===nt(r)&&(o?si(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),a}deleteProperty(e,t){const i=it(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!di(t)||!lf.has(t))&&Ct(e,"has",t),i}ownKeys(e){return Ct(e,"iterate",Ve(e)?"length":Ui),Reflect.ownKeys(e)}}class _d extends cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vd=new uf,xd=new _d,Md=new uf(!0);const xa=n=>n,ls=n=>Reflect.getPrototypeOf(n);function Sd(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=ir(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?xa:e?$s:At;return!e&&Ct(s,"iterate",l?va:Ui),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function cs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ed(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);n||(si(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:l}=ls(o),c=e?xa:n?$s:At;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ct(nt(r),"iterate",Ui),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return n||(si(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=nt(a),c=e?xa:n?$s:At;return!n&&Ct(l,"iterate",Ui),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(t,n?{add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear")}:{add(r){!e&&!tn(r)&&!ci(r)&&(r=nt(r));const s=nt(this);return ls(s).has.call(s,r)||(s.add(r),Bn(s,"add",r,r)),this},set(r,s){!e&&!tn(s)&&!ci(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=ls(o);let c=a.call(o,r);c||(r=nt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?si(s,u)&&Bn(o,"set",r,s):Bn(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=ls(s);let l=o.call(s,r);l||(r=nt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&Bn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sd(r,n,e)}),t}function Tl(n,e){const t=Ed(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(it(t,r)&&r in i?t:i,r,s)}const yd={get:Tl(!1,!1)},Td={get:Tl(!1,!0)},bd={get:Tl(!0,!1)};const ff=new WeakMap,hf=new WeakMap,df=new WeakMap,Ad=new WeakMap;function wd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rd(n){return n.__v_skip||!Object.isExtensible(n)?0:wd(Qh(n))}function ho(n){return ci(n)?n:bl(n,!1,vd,yd,ff)}function pf(n){return bl(n,!1,Md,Td,hf)}function mf(n){return bl(n,!0,xd,bd,df)}function bl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Rd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function rr(n){return ci(n)?rr(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function Al(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Cd(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Ku(n,"__v_skip",!0),n}const At=n=>pt(n)?ho(n):n,$s=n=>pt(n)?mf(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function Zr(n){return gf(n,!1)}function Pd(n){return gf(n,!0)}function gf(n,e){return Pt(n)?n:new Ld(n,e)}class Ld{constructor(e,t){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:At(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||tn(e)||ci(e);e=i?e:nt(e),si(e,t)&&(this._rawValue=e,this._value=i?e:At(e),this.dep.trigger())}}function cn(n){return Pt(n)?n.value:n}const Dd={get:(n,e,t)=>e==="__v_raw"?n:cn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _f(n){return rr(n)?n:new Proxy(n,Dd)}class Ud{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return tf(this,!0),!0}get value(){const e=this.dep.track();return sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Id(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new Ud(i,r,t)}const us={},Ys=new WeakMap;let bi;function Nd(n,e=!1,t=bi){if(t){let i=Ys.get(t);i||Ys.set(t,i=[]),i.push(n)}}function Fd(n,e,t=ut){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:tn(S)||r===!1||r===0?ii(S,1):ii(S);let u,f,h,p,v=!1,x=!1;if(Pt(n)?(f=()=>n.value,v=tn(n)):rr(n)?(f=()=>c(n),v=!0):Ve(n)?(x=!0,v=n.some(S=>rr(S)||tn(S)),f=()=>n.map(S=>{if(Pt(S))return S.value;if(rr(S))return c(S);if(Xe(S))return l?l(S,2):S()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Wn();try{h()}finally{Xn()}}const S=bi;bi=u;try{return l?l(n,3,[p]):n(p)}finally{bi=S}}:f=En,e&&r){const S=f,I=r===!0?1/0:r;f=()=>ii(S(),I)}const m=ud(),d=()=>{u.stop(),m&&m.active&&vl(m.effects,u)};if(s&&e){const S=e;e=(...I)=>{S(...I),d()}}let A=x?new Array(n.length).fill(us):us;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(r||v||(x?I.some((C,P)=>si(C,A[P])):si(I,A))){h&&h();const C=bi;bi=u;try{const P=[I,A===us?void 0:x&&A[0]===us?[]:A,p];A=I,l?l(e,3,P):e(...P)}finally{bi=C}}}else u.run()};return a&&a(T),u=new Qu(f),u.scheduler=o?()=>o(T,!1):T,p=S=>Nd(S,!1,u),h=u.onStop=()=>{const S=Ys.get(u);if(S){if(l)l(S,4);else for(const I of S)I();Ys.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ii(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Pt(n))ii(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)ii(n[i],e,t);else if(Wu(n)||ir(n))n.forEach(i=>{ii(i,e,t)});else if($u(n)){for(const i in n)ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jr(n,e,t,i){try{return i?n(...i):n()}catch(r){po(r,e,t)}}function bn(n,e,t,i){if(Xe(n)){const r=Jr(n,e,t,i);return r&&Xu(r)&&r.catch(s=>{po(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(bn(n[s],e,t,i));return r}}function po(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Wn(),Jr(s,null,10,[n,l,c]),Xn();return}}Od(n,t,r,i,o)}function Od(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Nt=[];let gn=-1;const sr=[];let ei=null,Qi=0;const vf=Promise.resolve();let Ks=null;function xf(n){const e=Ks||vf;return n?e.then(this?n.bind(this):n):e}function Bd(n){let e=gn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,r=Nt[i],s=Gr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function wl(n){if(!(n.flags&1)){const e=Gr(n),t=Nt[Nt.length-1];!t||!(n.flags&2)&&e>=Gr(t)?Nt.push(n):Nt.splice(Bd(e),0,n),n.flags|=1,Mf()}}function Mf(){Ks||(Ks=vf.then(Ef))}function zd(n){Ve(n)?sr.push(...n):ei&&n.id===-1?ei.splice(Qi+1,0,n):n.flags&1||(sr.push(n),n.flags|=1),Mf()}function rc(n,e,t=gn+1){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sf(n){if(sr.length){const e=[...new Set(sr)].sort((t,i)=>Gr(t)-Gr(i));if(sr.length=0,ei){ei.push(...e);return}for(ei=e,Qi=0;Qi<ei.length;Qi++){const t=ei[Qi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ei=null,Qi=0}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ef(n){try{for(gn=0;gn<Nt.length;gn++){const e=Nt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Nt.length;gn++){const e=Nt[gn];e&&(e.flags&=-2)}gn=-1,Nt.length=0,Sf(),Ks=null,(Nt.length||sr.length)&&Ef()}}let xn=null,yf=null;function js(n){const e=xn;return xn=n,yf=n&&n.type.__scopeId||null,e}function Us(n,e=xn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&dc(-1);const s=js(e);let o;try{o=n(...r)}finally{js(s),i._d&&dc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _i(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Wn(),bn(l,t,8,[n.el,a,n,e]),Xn())}}const Hd=Symbol("_vte"),Vd=n=>n.__isTeleport;function Rl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Rl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Tf(n,e){return Xe(n)?Lt({name:n.name},e,{setup:n}):n}function bf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Zs(n,e,t,i,r=!1){if(Ve(n)){n.forEach((v,x)=>Zs(v,e&&(Ve(e)?e[x]:e),t,i,r));return}if(Nr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Dl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState,h=nt(f),p=f===ut?()=>!1:v=>it(h,v);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,p(c)&&(f[c]=null)):Pt(c)&&(c.value=null)),Xe(l))Jr(l,a,12,[o,u]);else{const v=Mt(l),x=Pt(l);if(v||x){const m=()=>{if(n.f){const d=v?p(l)?f[l]:u[l]:l.value;r?Ve(d)&&vl(d,s):Ve(d)?d.includes(s)||d.push(s):v?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,$t(m,t)):m()}}}lo().requestIdleCallback;lo().cancelIdleCallback;const Nr=n=>!!n.type.__asyncLoader,Af=n=>n.type.__isKeepAlive;function Gd(n,e){wf(n,"a",e)}function kd(n,e){wf(n,"da",e)}function wf(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(mo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Af(r.parent.vnode)&&Wd(i,e,t,r),r=r.parent}}function Wd(n,e,t,i){const r=mo(e,n,i,!0);Cf(()=>{vl(i[e],r)},t)}function mo(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Wn();const a=Qr(t),l=bn(e,t,n,o);return a(),Xn(),l});return i?r.unshift(s):r.push(s),s}}const qn=n=>(e,t=Ft)=>{(!Wr||n==="sp")&&mo(n,(...i)=>e(...i),t)},Xd=qn("bm"),Rf=qn("m"),qd=qn("bu"),$d=qn("u"),Yd=qn("bum"),Cf=qn("um"),Kd=qn("sp"),jd=qn("rtg"),Zd=qn("rtc");function Jd(n,e=Ft){mo("ec",n,e)}const Qd=Symbol.for("v-ndc");function Js(n,e,t,i){let r;const s=t,o=Ve(n);if(o||Mt(n)){const a=o&&rr(n);let l=!1,c=!1;a&&(l=!tn(n),c=ci(n),n=fo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?$s(At(n[u])):At(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ma=n=>n?Zf(n)?Dl(n):Ma(n.parent):null,Fr=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ma(n.parent),$root:n=>Ma(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Lf(n),$forceUpdate:n=>n.f||(n.f=()=>{wl(n.update)}),$nextTick:n=>n.n||(n.n=xf.bind(n.proxy)),$watch:n=>Mp.bind(n)}),Po=(n,e)=>n!==ut&&!n.__isScriptSetup&&it(n,e),ep={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Po(i,e))return o[e]=1,i[e];if(r!==ut&&it(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&it(c,e))return o[e]=3,s[e];if(t!==ut&&it(t,e))return o[e]=4,t[e];Sa&&(o[e]=0)}}const u=Fr[e];let f,h;if(u)return e==="$attrs"&&Ct(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ut&&it(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,it(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Po(r,e)?(r[e]=t,!0):i!==ut&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ut&&it(n,o)||Po(e,o)||(a=s[0])&&it(a,o)||it(i,o)||it(Fr,o)||it(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function sc(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Sa=!0;function tp(n){const e=Lf(n),t=n.proxy,i=n.ctx;Sa=!1,e.beforeCreate&&oc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:T,unmounted:S,render:I,renderTracked:C,renderTriggered:P,errorCaptured:B,serverPrefetch:b,expose:y,inheritAttrs:U,components:te,directives:W,filters:ie}=e;if(c&&np(c,i,null),o)for(const re in o){const H=o[re];Xe(H)&&(i[re]=H.bind(t))}if(r){const re=r.call(t,t);pt(re)&&(n.data=ho(re))}if(Sa=!0,s)for(const re in s){const H=s[re],ge=Xe(H)?H.bind(t,t):Xe(H.get)?H.get.bind(t,t):En,xe=!Xe(H)&&Xe(H.set)?H.set.bind(t):En,Ce=en({get:ge,set:xe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Fe=>Ce.value=Fe})}if(a)for(const re in a)Pf(a[re],i,t,re);if(l){const re=Xe(l)?l.call(t):l;Reflect.ownKeys(re).forEach(H=>{Is(H,re[H])})}u&&oc(u,n,"c");function Y(re,H){Ve(H)?H.forEach(ge=>re(ge.bind(t))):H&&re(H.bind(t))}if(Y(Xd,f),Y(Rf,h),Y(qd,p),Y($d,v),Y(Gd,x),Y(kd,m),Y(Jd,B),Y(Zd,C),Y(jd,P),Y(Yd,A),Y(Cf,S),Y(Kd,b),Ve(y))if(y.length){const re=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(re,H,{get:()=>t[H],set:ge=>t[H]=ge})})}else n.exposed||(n.exposed={});I&&n.render===En&&(n.render=I),U!=null&&(n.inheritAttrs=U),te&&(n.components=te),W&&(n.directives=W),b&&bf(n)}function np(n,e,t=En){Ve(n)&&(n=Ea(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function oc(n,e,t){bn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Pf(n,e,t,i){let r=i.includes(".")?Wf(t,i):()=>t[i];if(Mt(n)){const s=e[n];Xe(s)&&Ns(r,s)}else if(Xe(n))Ns(r,n.bind(t));else if(pt(n))if(Ve(n))n.forEach(s=>Pf(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Ns(r,s,n)}}function Lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Qs(l,c,o,!0)),Qs(l,e,o)),pt(e)&&s.set(e,l),l}function Qs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Qs(n,s,t,!0),r&&r.forEach(o=>Qs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ip[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ip={data:ac,props:lc,emits:lc,methods:Pr,computed:Pr,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Pr,directives:Pr,watch:sp,provide:ac,inject:rp};function ac(n,e){return e?n?function(){return Lt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function rp(n,e){return Pr(Ea(n),Ea(e))}function Ea(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Pr(n,e){return n?Lt(Object.create(null),n,e):e}function lc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Lt(Object.create(null),sc(n),sc(e??{})):e}function sp(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function Df(){return{app:null,config:{isNativeTag:Zh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let op=0;function ap(n,e){return function(i,r=null){Xe(i)||(i=Lt({},i)),r!=null&&!pt(r)&&(r=null);const s=Df(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:op++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||dt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Dl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;function Is(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=Ft||xn;if(i||or){let r=or?or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Uf={},If=()=>Object.create(Uf),Nf=n=>Object.getPrototypeOf(n)===Uf;function lp(n,e,t,i=!1){const r={},s=If();n.propsDefaults=Object.create(null),Ff(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:pf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function cp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(go(n.emitsOptions,h))continue;const p=e[h];if(l)if(it(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=li(h);r[v]=ya(l,a,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Ff(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!it(e,f)&&((u=Fi(f))===f||!it(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ya(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!it(e,f))&&(delete s[f],c=!0)}c&&Bn(n.attrs,"set","")}function Ff(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Dr(l))continue;const c=e[l];let u;r&&it(r,u=li(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(t),c=a||ut;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ya(r,l,f,c[f],n,!it(c,f))}}return o}function ya(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Qr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Fi(t))&&(i=!0))}return i}const up=new WeakMap;function Of(n,e,t=!1){const i=t?up:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,p]=Of(f,e,!0);Lt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,nr),nr;if(Ve(s))for(let u=0;u<s.length;u++){const f=li(s[u]);cc(f)&&(o[f]=ut)}else if(s)for(const u in s){const f=li(u);if(cc(f)){const h=s[u],p=o[f]=Ve(h)||Xe(h)?{type:h}:Lt({},h),v=p.type;let x=!1,m=!0;if(Ve(v))for(let d=0;d<v.length;++d){const A=v[d],T=Xe(A)&&A.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Xe(v)&&v.name==="Boolean";p[0]=x,p[1]=m,(x||it(p,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function cc(n){return n[0]!=="$"&&!Dr(n)}const Cl=n=>n[0]==="_"||n==="$stable",Pl=n=>Ve(n)?n.map(_n):[_n(n)],fp=(n,e,t)=>{if(e._n)return e;const i=Us((...r)=>Pl(e(...r)),t);return i._c=!1,i},Bf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Cl(r))continue;const s=n[r];if(Xe(s))e[r]=fp(r,s,i);else if(s!=null){const o=Pl(s);e[r]=()=>o}}},zf=(n,e)=>{const t=Pl(e);n.slots.default=()=>t},Hf=(n,e,t)=>{for(const i in e)(t||!Cl(i))&&(n[i]=e[i])},hp=(n,e,t)=>{const i=n.slots=If();if(n.vnode.shapeFlag&32){const r=e._;r?(Hf(i,e,t),t&&Ku(i,"_",r,!0)):Bf(e,i)}else e&&zf(n,e)},dp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Hf(r,e,t):(s=!e.$stable,Bf(e,r)),o=e}else e&&(zf(n,e),o={default:1});if(s)for(const a in r)!Cl(a)&&o[a]==null&&delete r[a]},$t=wp;function pp(n){return mp(n)}function mp(n,e){const t=lo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=En,insertStaticContent:v}=n,x=(w,R,_,Q=null,q=null,$=null,Z=void 0,se=null,j=!!R.dynamicChildren)=>{if(w===R)return;w&&!Er(w,R)&&(Q=N(w),Fe(w,q,$,!0),w=null),R.patchFlag===-2&&(j=!1,R.dynamicChildren=null);const{type:K,ref:Me,shapeFlag:E}=R;switch(K){case _o:m(w,R,_,Q);break;case ui:d(w,R,_,Q);break;case Fs:w==null&&A(R,_,Q,Z);break;case Ht:te(w,R,_,Q,q,$,Z,se,j);break;default:E&1?I(w,R,_,Q,q,$,Z,se,j):E&6?W(w,R,_,Q,q,$,Z,se,j):(E&64||E&128)&&K.process(w,R,_,Q,q,$,Z,se,j,ae)}Me!=null&&q&&Zs(Me,w&&w.ref,$,R||w,!R)},m=(w,R,_,Q)=>{if(w==null)i(R.el=a(R.children),_,Q);else{const q=R.el=w.el;R.children!==w.children&&c(q,R.children)}},d=(w,R,_,Q)=>{w==null?i(R.el=l(R.children||""),_,Q):R.el=w.el},A=(w,R,_,Q)=>{[w.el,w.anchor]=v(w.children,R,_,Q,w.el,w.anchor)},T=({el:w,anchor:R},_,Q)=>{let q;for(;w&&w!==R;)q=h(w),i(w,_,Q),w=q;i(R,_,Q)},S=({el:w,anchor:R})=>{let _;for(;w&&w!==R;)_=h(w),r(w),w=_;r(R)},I=(w,R,_,Q,q,$,Z,se,j)=>{R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),w==null?C(R,_,Q,q,$,Z,se,j):b(w,R,q,$,Z,se,j)},C=(w,R,_,Q,q,$,Z,se)=>{let j,K;const{props:Me,shapeFlag:E,transition:g,dirs:L}=w;if(j=w.el=o(w.type,$,Me&&Me.is,Me),E&8?u(j,w.children):E&16&&B(w.children,j,null,Q,q,Lo(w,$),Z,se),L&&_i(w,null,Q,"created"),P(j,w,w.scopeId,Z,Q),Me){for(const J in Me)J!=="value"&&!Dr(J)&&s(j,J,null,Me[J],$,Q);"value"in Me&&s(j,"value",null,Me.value,$),(K=Me.onVnodeBeforeMount)&&mn(K,Q,w)}L&&_i(w,null,Q,"beforeMount");const G=gp(q,g);G&&g.beforeEnter(j),i(j,R,_),((K=Me&&Me.onVnodeMounted)||G||L)&&$t(()=>{K&&mn(K,Q,w),G&&g.enter(j),L&&_i(w,null,Q,"mounted")},q)},P=(w,R,_,Q,q)=>{if(_&&p(w,_),Q)for(let $=0;$<Q.length;$++)p(w,Q[$]);if(q){let $=q.subTree;if(R===$||qf($.type)&&($.ssContent===R||$.ssFallback===R)){const Z=q.vnode;P(w,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},B=(w,R,_,Q,q,$,Z,se,j=0)=>{for(let K=j;K<w.length;K++){const Me=w[K]=se?ti(w[K]):_n(w[K]);x(null,Me,R,_,Q,q,$,Z,se)}},b=(w,R,_,Q,q,$,Z)=>{const se=R.el=w.el;let{patchFlag:j,dynamicChildren:K,dirs:Me}=R;j|=w.patchFlag&16;const E=w.props||ut,g=R.props||ut;let L;if(_&&vi(_,!1),(L=g.onVnodeBeforeUpdate)&&mn(L,_,R,w),Me&&_i(R,w,_,"beforeUpdate"),_&&vi(_,!0),(E.innerHTML&&g.innerHTML==null||E.textContent&&g.textContent==null)&&u(se,""),K?y(w.dynamicChildren,K,se,_,Q,Lo(R,q),$):Z||H(w,R,se,null,_,Q,Lo(R,q),$,!1),j>0){if(j&16)U(se,E,g,_,q);else if(j&2&&E.class!==g.class&&s(se,"class",null,g.class,q),j&4&&s(se,"style",E.style,g.style,q),j&8){const G=R.dynamicProps;for(let J=0;J<G.length;J++){const V=G[J],ye=E[V],pe=g[V];(pe!==ye||V==="value")&&s(se,V,ye,pe,q,_)}}j&1&&w.children!==R.children&&u(se,R.children)}else!Z&&K==null&&U(se,E,g,_,q);((L=g.onVnodeUpdated)||Me)&&$t(()=>{L&&mn(L,_,R,w),Me&&_i(R,w,_,"updated")},Q)},y=(w,R,_,Q,q,$,Z)=>{for(let se=0;se<R.length;se++){const j=w[se],K=R[se],Me=j.el&&(j.type===Ht||!Er(j,K)||j.shapeFlag&198)?f(j.el):_;x(j,K,Me,null,Q,q,$,Z,!0)}},U=(w,R,_,Q,q)=>{if(R!==_){if(R!==ut)for(const $ in R)!Dr($)&&!($ in _)&&s(w,$,R[$],null,q,Q);for(const $ in _){if(Dr($))continue;const Z=_[$],se=R[$];Z!==se&&$!=="value"&&s(w,$,se,Z,q,Q)}"value"in _&&s(w,"value",R.value,_.value,q)}},te=(w,R,_,Q,q,$,Z,se,j)=>{const K=R.el=w?w.el:a(""),Me=R.anchor=w?w.anchor:a("");let{patchFlag:E,dynamicChildren:g,slotScopeIds:L}=R;L&&(se=se?se.concat(L):L),w==null?(i(K,_,Q),i(Me,_,Q),B(R.children||[],_,Me,q,$,Z,se,j)):E>0&&E&64&&g&&w.dynamicChildren?(y(w.dynamicChildren,g,_,q,$,Z,se),(R.key!=null||q&&R===q.subTree)&&Vf(w,R,!0)):H(w,R,_,Me,q,$,Z,se,j)},W=(w,R,_,Q,q,$,Z,se,j)=>{R.slotScopeIds=se,w==null?R.shapeFlag&512?q.ctx.activate(R,_,Q,Z,j):ie(R,_,Q,q,$,Z,j):ue(w,R,j)},ie=(w,R,_,Q,q,$,Z)=>{const se=w.component=Np(w,Q,q);if(Af(w)&&(se.ctx.renderer=ae),Fp(se,!1,Z),se.asyncDep){if(q&&q.registerDep(se,Y,Z),!w.el){const j=se.subTree=dt(ui);d(null,j,R,_)}}else Y(se,w,R,_,q,$,Z)},ue=(w,R,_)=>{const Q=R.component=w.component;if(bp(w,R,_))if(Q.asyncDep&&!Q.asyncResolved){re(Q,R,_);return}else Q.next=R,Q.update();else R.el=w.el,Q.vnode=R},Y=(w,R,_,Q,q,$,Z)=>{const se=()=>{if(w.isMounted){let{next:E,bu:g,u:L,parent:G,vnode:J}=w;{const we=Gf(w);if(we){E&&(E.el=J.el,re(w,E,Z)),we.asyncDep.then(()=>{w.isUnmounted||se()});return}}let V=E,ye;vi(w,!1),E?(E.el=J.el,re(w,E,Z)):E=J,g&&bo(g),(ye=E.props&&E.props.onVnodeBeforeUpdate)&&mn(ye,G,E,J),vi(w,!0);const pe=fc(w),Te=w.subTree;w.subTree=pe,x(Te,pe,f(Te.el),N(Te),w,q,$),E.el=pe.el,V===null&&Ap(w,pe.el),L&&$t(L,q),(ye=E.props&&E.props.onVnodeUpdated)&&$t(()=>mn(ye,G,E,J),q)}else{let E;const{el:g,props:L}=R,{bm:G,m:J,parent:V,root:ye,type:pe}=w,Te=Nr(R);vi(w,!1),G&&bo(G),!Te&&(E=L&&L.onVnodeBeforeMount)&&mn(E,V,R),vi(w,!0);{ye.ce&&ye.ce._injectChildStyle(pe);const we=w.subTree=fc(w);x(null,we,_,Q,w,q,$),R.el=we.el}if(J&&$t(J,q),!Te&&(E=L&&L.onVnodeMounted)){const we=R;$t(()=>mn(E,V,we),q)}(R.shapeFlag&256||V&&Nr(V.vnode)&&V.vnode.shapeFlag&256)&&w.a&&$t(w.a,q),w.isMounted=!0,R=_=Q=null}};w.scope.on();const j=w.effect=new Qu(se);w.scope.off();const K=w.update=j.run.bind(j),Me=w.job=j.runIfDirty.bind(j);Me.i=w,Me.id=w.uid,j.scheduler=()=>wl(Me),vi(w,!0),K()},re=(w,R,_)=>{R.component=w;const Q=w.vnode.props;w.vnode=R,w.next=null,cp(w,R.props,Q,_),dp(w,R.children,_),Wn(),rc(w),Xn()},H=(w,R,_,Q,q,$,Z,se,j=!1)=>{const K=w&&w.children,Me=w?w.shapeFlag:0,E=R.children,{patchFlag:g,shapeFlag:L}=R;if(g>0){if(g&128){xe(K,E,_,Q,q,$,Z,se,j);return}else if(g&256){ge(K,E,_,Q,q,$,Z,se,j);return}}L&8?(Me&16&&be(K,q,$),E!==K&&u(_,E)):Me&16?L&16?xe(K,E,_,Q,q,$,Z,se,j):be(K,q,$,!0):(Me&8&&u(_,""),L&16&&B(E,_,Q,q,$,Z,se,j))},ge=(w,R,_,Q,q,$,Z,se,j)=>{w=w||nr,R=R||nr;const K=w.length,Me=R.length,E=Math.min(K,Me);let g;for(g=0;g<E;g++){const L=R[g]=j?ti(R[g]):_n(R[g]);x(w[g],L,_,null,q,$,Z,se,j)}K>Me?be(w,q,$,!0,!1,E):B(R,_,Q,q,$,Z,se,j,E)},xe=(w,R,_,Q,q,$,Z,se,j)=>{let K=0;const Me=R.length;let E=w.length-1,g=Me-1;for(;K<=E&&K<=g;){const L=w[K],G=R[K]=j?ti(R[K]):_n(R[K]);if(Er(L,G))x(L,G,_,null,q,$,Z,se,j);else break;K++}for(;K<=E&&K<=g;){const L=w[E],G=R[g]=j?ti(R[g]):_n(R[g]);if(Er(L,G))x(L,G,_,null,q,$,Z,se,j);else break;E--,g--}if(K>E){if(K<=g){const L=g+1,G=L<Me?R[L].el:Q;for(;K<=g;)x(null,R[K]=j?ti(R[K]):_n(R[K]),_,G,q,$,Z,se,j),K++}}else if(K>g)for(;K<=E;)Fe(w[K],q,$,!0),K++;else{const L=K,G=K,J=new Map;for(K=G;K<=g;K++){const Le=R[K]=j?ti(R[K]):_n(R[K]);Le.key!=null&&J.set(Le.key,K)}let V,ye=0;const pe=g-G+1;let Te=!1,we=0;const ce=new Array(pe);for(K=0;K<pe;K++)ce[K]=0;for(K=L;K<=E;K++){const Le=w[K];if(ye>=pe){Fe(Le,q,$,!0);continue}let De;if(Le.key!=null)De=J.get(Le.key);else for(V=G;V<=g;V++)if(ce[V-G]===0&&Er(Le,R[V])){De=V;break}De===void 0?Fe(Le,q,$,!0):(ce[De-G]=K+1,De>=we?we=De:Te=!0,x(Le,R[De],_,null,q,$,Z,se,j),ye++)}const Ae=Te?_p(ce):nr;for(V=Ae.length-1,K=pe-1;K>=0;K--){const Le=G+K,De=R[Le],_e=Le+1<Me?R[Le+1].el:Q;ce[K]===0?x(null,De,_,_e,q,$,Z,se,j):Te&&(V<0||K!==Ae[V]?Ce(De,_,_e,2):V--)}}},Ce=(w,R,_,Q,q=null)=>{const{el:$,type:Z,transition:se,children:j,shapeFlag:K}=w;if(K&6){Ce(w.component.subTree,R,_,Q);return}if(K&128){w.suspense.move(R,_,Q);return}if(K&64){Z.move(w,R,_,ae);return}if(Z===Ht){i($,R,_);for(let E=0;E<j.length;E++)Ce(j[E],R,_,Q);i(w.anchor,R,_);return}if(Z===Fs){T(w,R,_);return}if(Q!==2&&K&1&&se)if(Q===0)se.beforeEnter($),i($,R,_),$t(()=>se.enter($),q);else{const{leave:E,delayLeave:g,afterLeave:L}=se,G=()=>{w.ctx.isUnmounted?r($):i($,R,_)},J=()=>{E($,()=>{G(),L&&L()})};g?g($,G,J):J()}else i($,R,_)},Fe=(w,R,_,Q=!1,q=!1)=>{const{type:$,props:Z,ref:se,children:j,dynamicChildren:K,shapeFlag:Me,patchFlag:E,dirs:g,cacheIndex:L}=w;if(E===-2&&(q=!1),se!=null&&(Wn(),Zs(se,null,_,w,!0),Xn()),L!=null&&(R.renderCache[L]=void 0),Me&256){R.ctx.deactivate(w);return}const G=Me&1&&g,J=!Nr(w);let V;if(J&&(V=Z&&Z.onVnodeBeforeUnmount)&&mn(V,R,w),Me&6)me(w.component,_,Q);else{if(Me&128){w.suspense.unmount(_,Q);return}G&&_i(w,null,R,"beforeUnmount"),Me&64?w.type.remove(w,R,_,ae,Q):K&&!K.hasOnce&&($!==Ht||E>0&&E&64)?be(K,R,_,!1,!0):($===Ht&&E&384||!q&&Me&16)&&be(j,R,_),Q&&je(w)}(J&&(V=Z&&Z.onVnodeUnmounted)||G)&&$t(()=>{V&&mn(V,R,w),G&&_i(w,null,R,"unmounted")},_)},je=w=>{const{type:R,el:_,anchor:Q,transition:q}=w;if(R===Ht){ne(_,Q);return}if(R===Fs){S(w);return}const $=()=>{r(_),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:se}=q,j=()=>Z(_,$);se?se(w.el,$,j):j()}else $()},ne=(w,R)=>{let _;for(;w!==R;)_=h(w),r(w),w=_;r(R)},me=(w,R,_)=>{const{bum:Q,scope:q,job:$,subTree:Z,um:se,m:j,a:K,parent:Me,slots:{__:E}}=w;uc(j),uc(K),Q&&bo(Q),Me&&Ve(E)&&E.forEach(g=>{Me.renderCache[g]=void 0}),q.stop(),$&&($.flags|=8,Fe(Z,w,R,_)),se&&$t(se,R),$t(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},be=(w,R,_,Q=!1,q=!1,$=0)=>{for(let Z=$;Z<w.length;Z++)Fe(w[Z],R,_,Q,q)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),_=R&&R[Hd];return _?h(_):R};let ee=!1;const le=(w,R,_)=>{w==null?R._vnode&&Fe(R._vnode,null,null,!0):x(R._vnode||null,w,R,null,null,null,_),R._vnode=w,ee||(ee=!0,rc(),Sf(),ee=!1)},ae={p:x,um:Fe,m:Ce,r:je,mt:ie,mc:B,pc:H,pbc:y,n:N,o:n};return{render:le,hydrate:void 0,createApp:ap(le)}}function Lo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function gp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Vf(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ti(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Vf(o,a)),a.type===_o&&(a.el=o.el),a.type===ui&&!a.el&&(a.el=o.el)}}function _p(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Gf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gf(e)}function uc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const vp=Symbol.for("v-scx"),xp=()=>Gn(vp);function Ns(n,e,t){return kf(n,e,t)}function kf(n,e,t=ut){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),l=e&&i||!e&&s!=="post";let c;if(Wr){if(s==="sync"){const p=xp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=En,p.resume=En,p.pause=En,p}}const u=Ft;a.call=(p,v,x)=>bn(p,u,v,x);let f=!1;s==="post"?a.scheduler=p=>{$t(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():wl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Fd(n,e,a);return Wr&&(c?c.push(h):l&&h()),h}function Mp(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?Wf(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=Qr(this),a=kf(r,s.bind(i),t);return o(),a}function Wf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Sp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${li(e)}Modifiers`]||n[`${Fi(e)}Modifiers`];function Ep(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let r=t;const s=e.startsWith("update:"),o=s&&Sp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Mt(u)?u.trim():u)),o.number&&(r=t.map(nd)));let a,l=i[a=To(e)]||i[a=To(li(e))];!l&&s&&(l=i[a=To(Fi(e))]),l&&bn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(c,n,6,r)}}function Xf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Xf(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Lt(o,s),pt(n)&&i.set(n,o),o)}function go(n,e){return!n||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,Fi(e))||it(n,e))}function fc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:x}=n,m=js(n);let d,A;try{if(t.shapeFlag&4){const S=r||i,I=S;d=_n(c.call(I,S,u,f,p,h,v)),A=a}else{const S=e;d=_n(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),A=e.props?a:yp(a)}}catch(S){Or.length=0,po(S,n,1),d=dt(ui)}let T=d;if(A&&x!==!1){const S=Object.keys(A),{shapeFlag:I}=T;S.length&&I&7&&(s&&S.some(_l)&&(A=Tp(A,s)),T=ur(T,A,!1,!0))}return t.dirs&&(T=ur(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Rl(T,t.transition),d=T,js(m),d}const yp=n=>{let e;for(const t in n)(t==="class"||t==="style"||so(t))&&((e||(e={}))[t]=n[t]);return e},Tp=(n,e)=>{const t={};for(const i in n)(!_l(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function bp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!go(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hc(i,o,c):!0:!!o;return!1}function hc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!go(t,s))return!0}return!1}function Ap({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const qf=n=>n.__isSuspense;function wp(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):zd(n)}const Ht=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),ui=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),Or=[];let Kt=null;function vt(n=!1){Or.push(Kt=n?null:[])}function Rp(){Or.pop(),Kt=Or[Or.length-1]||null}let kr=1;function dc(n,e=!1){kr+=n,n<0&&Kt&&e&&(Kt.hasOnce=!0)}function $f(n){return n.dynamicChildren=kr>0?Kt||nr:null,Rp(),kr>0&&Kt&&Kt.push(n),n}function St(n,e,t,i,r,s){return $f(Ye(n,e,t,i,r,s,!0))}function Yf(n,e,t,i,r){return $f(dt(n,e,t,i,r,!0))}function eo(n){return n?n.__v_isVNode===!0:!1}function Er(n,e){return n.type===e.type&&n.key===e.key}const Kf=({key:n})=>n??null,Os=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||Pt(n)||Xe(n)?{i:xn,r:n,k:e,f:!!t}:n:null);function Ye(n,e=null,t=null,i=0,r=null,s=n===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kf(e),ref:e&&Os(e),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:xn};return a?(Ll(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),kr>0&&!o&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const dt=Cp;function Cp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Qd)&&(n=ui),eo(n)){const a=ur(n,e,!0);return t&&Ll(a,t),kr>0&&!s&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(n)]=a:Kt.push(a)),a.patchFlag=-2,a}if(Hp(n)&&(n=n.__vccOpts),e){e=Pp(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=uo(a)),pt(l)&&(Al(l)&&!Ve(l)&&(l=Lt({},l)),e.style=co(l))}const o=Mt(n)?1:qf(n)?128:Vd(n)?64:pt(n)?4:Xe(n)?2:0;return Ye(n,e,t,i,r,o,s,!0)}function Pp(n){return n?Al(n)||Nf(n)?Lt({},n):n:null}function ur(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Dp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kf(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(Os(e)):[s,Os(e)]:Os(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ur(n.ssContent),ssFallback:n.ssFallback&&ur(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Rl(u,l.clone(u)),u}function Bs(n=" ",e=0){return dt(_o,null,n,e)}function jf(n,e){const t=dt(Fs,null,n);return t.staticCount=e,t}function Lp(n="",e=!1){return e?(vt(),Yf(ui,null,n)):dt(ui,null,n)}function _n(n){return n==null||typeof n=="boolean"?dt(ui):Ve(n)?dt(Ht,null,n.slice()):eo(n)?ti(n):dt(_o,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ur(n)}function Ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ll(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Nf(e)?e._ctx=xn:r===3&&xn&&(xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:xn},t=32):(e=String(e),i&64?(t=16,e=[Bs(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=uo([e.class,i.class]));else if(r==="style")e.style=co([e.style,i.style]);else if(so(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){bn(n,e,7,[t,i])}const Up=Df();let Ip=0;function Np(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Up,s={uid:Ip++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Of(i,r),emitsOptions:Xf(i,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ep.bind(null,s),n.ce&&n.ce(s),s}let Ft=null,to,Ta;{const n=lo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};to=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),Ta=e("__VUE_SSR_SETTERS__",t=>Wr=t)}const Qr=n=>{const e=Ft;return to(n),n.scope.on(),()=>{n.scope.off(),to(e)}},pc=()=>{Ft&&Ft.scope.off(),to(null)};function Zf(n){return n.vnode.shapeFlag&4}let Wr=!1;function Fp(n,e=!1,t=!1){e&&Ta(e);const{props:i,children:r}=n.vnode,s=Zf(n);lp(n,i,s,e),hp(n,r,t||e);const o=s?Op(n,e):void 0;return e&&Ta(!1),o}function Op(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ep);const{setup:i}=t;if(i){Wn();const r=n.setupContext=i.length>1?zp(n):null,s=Qr(n),o=Jr(i,n,0,[n.props,r]),a=Xu(o);if(Xn(),s(),(a||n.sp)&&!Nr(n)&&bf(n),a){if(o.then(pc,pc),e)return o.then(l=>{mc(n,l)}).catch(l=>{po(l,n,0)});n.asyncDep=o}else mc(n,o)}else Jf(n)}function mc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=_f(e)),Jf(n)}function Jf(n,e,t){const i=n.type;n.render||(n.render=i.render||En);{const r=Qr(n);Wn();try{tp(n)}finally{Xn(),r()}}}const Bp={get(n,e){return Ct(n,"get",""),n[e]}};function zp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bp),slots:n.slots,emit:n.emit,expose:e}}function Dl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_f(Cd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fr)return Fr[t](n)},has(e,t){return t in e||t in Fr}})):n.proxy}function Hp(n){return Xe(n)&&"__vccOpts"in n}const en=(n,e)=>Id(n,e,Wr);function Qf(n,e,t){const i=arguments.length;return i===2?pt(e)&&!Ve(e)?eo(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&eo(t)&&(t=[t]),dt(n,e,t))}const Vp="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const gc=typeof window<"u"&&window.trustedTypes;if(gc)try{ba=gc.createPolicy("vue",{createHTML:n=>n})}catch{}const eh=ba?n=>ba.createHTML(n):n=>n,Gp="http://www.w3.org/2000/svg",kp="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,_c=On&&On.createElement("template"),Wp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS(Gp,n):e==="mathml"?On.createElementNS(kp,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{_c.innerHTML=eh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=_c.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xp=Symbol("_vtc");function qp(n,e,t){const i=n[Xp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const vc=Symbol("_vod"),$p=Symbol("_vsh"),Yp=Symbol(""),Kp=/(^|;)\s*display\s*:/;function jp(n,e,t){const i=n.style,r=Mt(t);let s=!1;if(t&&!r){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zs(i,a,"")}else for(const o in e)t[o]==null&&zs(i,o,"");for(const o in t)o==="display"&&(s=!0),zs(i,o,t[o])}else if(r){if(e!==t){const o=i[Yp];o&&(t+=";"+o),i.cssText=t,s=Kp.test(t)}}else e&&n.removeAttribute("style");vc in n&&(n[vc]=s?i.display:"",n[$p]&&(i.display="none"))}const xc=/\s*!important$/;function zs(n,e,t){if(Ve(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zp(n,e);xc.test(t)?n.setProperty(Fi(i),t.replace(xc,""),"important"):n[i]=t}}const Mc=["Webkit","Moz","ms"],Do={};function Zp(n,e){const t=Do[e];if(t)return t;let i=li(e);if(i!=="filter"&&i in n)return Do[e]=i;i=Yu(i);for(let r=0;r<Mc.length;r++){const s=Mc[r]+i;if(s in n)return Do[e]=s}return e}const Sc="http://www.w3.org/1999/xlink";function Ec(n,e,t,i,r,s=ld(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Sc,e.slice(6,e.length)):n.setAttributeNS(Sc,e,t):t==null||s&&!ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":di(t)?String(t):t)}function yc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?eh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ju(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Jp(n,e,t,i){n.addEventListener(e,t,i)}function Qp(n,e,t,i){n.removeEventListener(e,t,i)}const Tc=Symbol("_vei");function em(n,e,t,i,r=null){const s=n[Tc]||(n[Tc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=tm(e);if(i){const c=s[e]=rm(i,r);Jp(n,a,c,l)}else o&&(Qp(n,a,o,l),s[e]=void 0)}}const bc=/(?:Once|Passive|Capture)$/;function tm(n){let e;if(bc.test(n)){e={};let i;for(;i=n.match(bc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fi(n.slice(2)),e]}let Uo=0;const nm=Promise.resolve(),im=()=>Uo||(nm.then(()=>Uo=0),Uo=Date.now());function rm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(sm(i,t.value),e,5,[i])};return t.value=n,t.attached=im(),t}function sm(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,om=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?qp(n,i,o):e==="style"?jp(n,t,i):so(e)?_l(e)||em(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):am(n,e,i,o))?(yc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ec(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?yc(n,li(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ec(n,e,i,o))};function am(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ac(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ac(e)&&Mt(t)?!1:e in n}const lm=["ctrl","shift","alt","meta"],cm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>lm.some(t=>n[`${t}Key`]&&!e.includes(t))},um=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=cm[e[o]];if(a&&a(r,e))return}return n(r,...s)})},fm=Lt({patchProp:om},Wp);let wc;function hm(){return wc||(wc=pp(fm))}const dm=(...n)=>{const e=hm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=mm(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,pm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function pm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mm(n){return Mt(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof document<"u";function gm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ot=Object.assign;function Io(n,e){const t={};for(const i in e){const r=e[i];t[i]=dn(r)?r.map(n):n(r)}return t}const Br=()=>{},dn=Array.isArray,th=/#/g,_m=/&/g,vm=/\//g,xm=/=/g,Mm=/\?/g,nh=/\+/g,Sm=/%5B/g,Em=/%5D/g,ih=/%5E/g,ym=/%60/g,rh=/%7B/g,Tm=/%7C/g,sh=/%7D/g,bm=/%20/g;function Ul(n){return encodeURI(""+n).replace(Tm,"|").replace(Sm,"[").replace(Em,"]")}function Am(n){return Ul(n).replace(rh,"{").replace(sh,"}").replace(ih,"^")}function Aa(n){return Ul(n).replace(nh,"%2B").replace(bm,"+").replace(th,"%23").replace(_m,"%26").replace(ym,"`").replace(rh,"{").replace(sh,"}").replace(ih,"^")}function wm(n){return Aa(n).replace(xm,"%3D")}function Rm(n){return Ul(n).replace(th,"%23").replace(Mm,"%3F")}function Cm(n){return n==null?"":Rm(n).replace(vm,"%2F")}function Xr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Pm=/\/$/,Lm=n=>n.replace(Pm,"");function No(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Nm(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Xr(o)}}function Dm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Rc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Um(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&fr(e.matched[i],t.matched[r])&&oh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function fr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function oh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Im(n[t],e[t]))return!1;return!0}function Im(n,e){return dn(n)?Cc(n,e):dn(e)?Cc(e,n):n===e}function Cc(n,e){return dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Nm(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qr;(function(n){n.pop="pop",n.push="push"})(qr||(qr={}));var zr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(zr||(zr={}));function Fm(n){if(!n)if(er){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Lm(n)}const Om=/^[^#]+#/;function Bm(n,e){return n.replace(Om,"#")+e}function zm(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const vo=()=>({left:window.scrollX,top:window.scrollY});function Hm(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=zm(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pc(n,e){return(history.state?history.state.position-e:-1)+n}const wa=new Map;function Vm(n,e){wa.set(n,e)}function Gm(n){const e=wa.get(n);return wa.delete(n),e}let km=()=>location.protocol+"//"+location.host;function ah(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Rc(l,"")}return Rc(t,n)+i+r}function Wm(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=ah(n,location),v=t.value,x=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===v){o=null;return}m=x?h.position-x.position:0}else i(p);r.forEach(d=>{d(t.value,v,{delta:m,type:qr.pop,direction:m?m>0?zr.forward:zr.back:zr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:vo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Lc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?vo():null}}function Xm(n){const{history:e,location:t}=window,i={value:ah(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:km()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,Lc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:vo()});s(u.current,u,!0);const f=ot({},Lc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function qm(n){n=Fm(n);const e=Xm(n),t=Wm(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:n,go:i,createHref:Bm.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $m(n){return typeof n=="string"||n&&typeof n=="object"}function lh(n){return typeof n=="string"||typeof n=="symbol"}const ch=Symbol("");var Dc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Dc||(Dc={}));function hr(n,e){return ot(new Error,{type:n,[ch]:!0},e)}function Pn(n,e){return n instanceof Error&&ch in n&&(e==null||!!(n.type&e))}const Uc="[^/]+?",Ym={sensitive:!1,strict:!1,start:!0,end:!0},Km=/[.+*?^${}()[\]/\\]/g;function jm(n,e){const t=ot({},Ym,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Km,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:x,optional:m,regexp:d}=h;s.push({name:v,repeatable:x,optional:m});const A=d||Uc;if(A!==Uc){p+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+S.message)}}let T=x?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,p+=20,m&&(p+=-8),x&&(p+=-20),A===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:x,optional:m}=p,d=v in c?c[v]:"";if(dn(d)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=dn(d)?d.join("/"):d;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Zm(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Zm(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Ic(i))return 1;if(Ic(r))return-1}return r.length-i.length}function Ic(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Jm={type:0,value:""},Qm=/[a-zA-Z0-9_]/;function eg(n){if(!n)return[[]];if(n==="/")return[[Jm]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Qm.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function tg(n,e,t){const i=jm(eg(n.path),t),r=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ng(n,e){const t=[],i=new Map;e=Oc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const v=!p,x=ig(f);x.aliasOf=p&&p.record;const m=Oc(e,f),d=[x];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of S)d.push(ot({},x,{components:p?p.record.components:x.components,path:I,aliasOf:p?p.record:x}))}let A,T;for(const S of d){const{path:I}=S;if(h&&I[0]!=="/"){const C=h.record.path,P=C[C.length-1]==="/"?"":"/";S.path=h.record.path+(I&&P+I)}if(A=tg(S,h,m),p?p.alias.push(A):(T=T||A,T!==A&&T.alias.push(A),v&&f.name&&!Fc(A)&&o(f.name)),fh(A)&&l(A),x.children){const C=x.children;for(let P=0;P<C.length;P++)s(C[P],A,p&&p.children[P])}p=p||A}return T?()=>{o(T)}:Br}function o(f){if(lh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=og(f,t);t.splice(h,0,f),f.record.name&&!Fc(f)&&i.set(f.record.name,f)}function c(f,h){let p,v={},x,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw hr(1,{location:f});m=p.record.name,v=ot(Nc(h.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Nc(f.params,p.keys.map(T=>T.name))),x=p.stringify(v)}else if(f.path!=null)x=f.path,p=t.find(T=>T.re.test(x)),p&&(v=p.parse(x),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!p)throw hr(1,{location:f,currentLocation:h});m=p.record.name,v=ot({},h.params,f.params),x=p.stringify(v)}const d=[];let A=p;for(;A;)d.unshift(A.record),A=A.parent;return{name:m,path:x,params:v,matched:d,meta:sg(d)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Nc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function ig(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:rg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function rg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Fc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function sg(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function Oc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function og(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;uh(n,e[s])<0?i=s:t=s+1}const r=ag(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function ag(n){let e=n;for(;e=e.parent;)if(fh(e)&&uh(n,e)===0)return e}function fh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function lg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(nh," "),o=s.indexOf("="),a=Xr(o<0?s:s.slice(0,o)),l=o<0?null:Xr(s.slice(o+1));if(a in e){let c=e[a];dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bc(n){let e="";for(let t in n){const i=n[t];if(t=wm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(dn(i)?i.map(s=>s&&Aa(s)):[i&&Aa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function cg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ug=Symbol(""),zc=Symbol(""),Il=Symbol(""),hh=Symbol(""),Ra=Symbol("");function yr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ni(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(hr(4,{from:t,to:e})):h instanceof Error?l(h):$m(h)?l(hr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Fo(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ni(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=gm(u)?u.default:u;o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&ni(p,t,i,o,a,r)()}))}}return s}function fg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Hc(n){const e=Gn(Il),t=Gn(hh),i=en(()=>{const l=cn(n.to);return e.resolve(l)}),r=en(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(fr.bind(null,u));if(h>-1)return h;const p=Vc(l[c-2]);return c>1&&Vc(u)===p&&f[f.length-1].path!==p?f.findIndex(fr.bind(null,l[c-2])):h}),s=en(()=>r.value>-1&&pg(t.params,i.value.params)),o=en(()=>r.value>-1&&r.value===t.matched.length-1&&oh(t.params,i.value.params));function a(l={}){return dg(l)?e[cn(n.replace)?"replace":"push"](cn(n.to)).catch(Br):Promise.resolve()}return{route:i,href:en(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const hg=Tf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hc,setup(n,{slots:e}){const t=ho(Hc(n)),{options:i}=Gn(Il),r=en(()=>({[Gc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Gc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Hs=hg;function dg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function pg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!dn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Vc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Gc=(n,e,t)=>n??e??t,mg=Tf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(Ra),r=en(()=>n.route||i.value),s=Gn(zc,0),o=en(()=>{let c=cn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=en(()=>r.value.matched[o.value]);Is(zc,en(()=>o.value+1)),Is(ug,a),Is(Ra,r);const l=Zr();return Ns(()=>[l.value,a.value,n.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!fr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return kc(t.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Qf(h,ot({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return kc(t.default,{Component:m,route:c})||m}}});function kc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const dh=mg;function gg(n){const e=ng(n.routes,n),t=n.parseQuery||lg,i=n.stringifyQuery||Bc,r=n.history,s=yr(),o=yr(),a=yr(),l=Pd($n);let c=$n;er&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Io.bind(null,N=>""+N),f=Io.bind(null,Cm),h=Io.bind(null,Xr);function p(N,ee){let le,ae;return lh(N)?(le=e.getRecordMatcher(N),ae=ee):ae=N,e.addRoute(ae,le)}function v(N){const ee=e.getRecordMatcher(N);ee&&e.removeRoute(ee)}function x(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function d(N,ee){if(ee=ot({},ee||l.value),typeof N=="string"){const _=No(t,N,ee.path),Q=e.resolve({path:_.path},ee),q=r.createHref(_.fullPath);return ot(_,Q,{params:h(Q.params),hash:Xr(_.hash),redirectedFrom:void 0,href:q})}let le;if(N.path!=null)le=ot({},N,{path:No(t,N.path,ee.path).path});else{const _=ot({},N.params);for(const Q in _)_[Q]==null&&delete _[Q];le=ot({},N,{params:f(_)}),ee.params=f(ee.params)}const ae=e.resolve(le,ee),Oe=N.hash||"";ae.params=u(h(ae.params));const w=Dm(i,ot({},N,{hash:Am(Oe),path:ae.path})),R=r.createHref(w);return ot({fullPath:w,hash:Oe,query:i===Bc?cg(N.query):N.query||{}},ae,{redirectedFrom:void 0,href:R})}function A(N){return typeof N=="string"?No(t,N,l.value.path):ot({},N)}function T(N,ee){if(c!==N)return hr(8,{from:ee,to:N})}function S(N){return P(N)}function I(N){return S(ot(A(N),{replace:!0}))}function C(N){const ee=N.matched[N.matched.length-1];if(ee&&ee.redirect){const{redirect:le}=ee;let ae=typeof le=="function"?le(N):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=A(ae):{path:ae},ae.params={}),ot({query:N.query,hash:N.hash,params:ae.path!=null?{}:N.params},ae)}}function P(N,ee){const le=c=d(N),ae=l.value,Oe=N.state,w=N.force,R=N.replace===!0,_=C(le);if(_)return P(ot(A(_),{state:typeof _=="object"?ot({},Oe,_.state):Oe,force:w,replace:R}),ee||le);const Q=le;Q.redirectedFrom=ee;let q;return!w&&Um(i,ae,le)&&(q=hr(16,{to:Q,from:ae}),Ce(ae,ae,!0,!1)),(q?Promise.resolve(q):y(Q,ae)).catch($=>Pn($)?Pn($,2)?$:xe($):H($,Q,ae)).then($=>{if($){if(Pn($,2))return P(ot({replace:R},A($.to),{state:typeof $.to=="object"?ot({},Oe,$.to.state):Oe,force:w}),ee||Q)}else $=te(Q,ae,!0,R,Oe);return U(Q,ae,$),$})}function B(N,ee){const le=T(N,ee);return le?Promise.reject(le):Promise.resolve()}function b(N){const ee=ne.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(N):N()}function y(N,ee){let le;const[ae,Oe,w]=_g(N,ee);le=Fo(ae.reverse(),"beforeRouteLeave",N,ee);for(const _ of ae)_.leaveGuards.forEach(Q=>{le.push(ni(Q,N,ee))});const R=B.bind(null,N,ee);return le.push(R),be(le).then(()=>{le=[];for(const _ of s.list())le.push(ni(_,N,ee));return le.push(R),be(le)}).then(()=>{le=Fo(Oe,"beforeRouteUpdate",N,ee);for(const _ of Oe)_.updateGuards.forEach(Q=>{le.push(ni(Q,N,ee))});return le.push(R),be(le)}).then(()=>{le=[];for(const _ of w)if(_.beforeEnter)if(dn(_.beforeEnter))for(const Q of _.beforeEnter)le.push(ni(Q,N,ee));else le.push(ni(_.beforeEnter,N,ee));return le.push(R),be(le)}).then(()=>(N.matched.forEach(_=>_.enterCallbacks={}),le=Fo(w,"beforeRouteEnter",N,ee,b),le.push(R),be(le))).then(()=>{le=[];for(const _ of o.list())le.push(ni(_,N,ee));return le.push(R),be(le)}).catch(_=>Pn(_,8)?_:Promise.reject(_))}function U(N,ee,le){a.list().forEach(ae=>b(()=>ae(N,ee,le)))}function te(N,ee,le,ae,Oe){const w=T(N,ee);if(w)return w;const R=ee===$n,_=er?history.state:{};le&&(ae||R?r.replace(N.fullPath,ot({scroll:R&&_&&_.scroll},Oe)):r.push(N.fullPath,Oe)),l.value=N,Ce(N,ee,le,R),xe()}let W;function ie(){W||(W=r.listen((N,ee,le)=>{if(!me.listening)return;const ae=d(N),Oe=C(ae);if(Oe){P(ot(Oe,{replace:!0}),ae).catch(Br);return}c=ae;const w=l.value;er&&Vm(Pc(w.fullPath,le.delta),vo()),y(ae,w).catch(R=>Pn(R,12)?R:Pn(R,2)?(P(R.to,ae).then(_=>{Pn(_,20)&&!le.delta&&le.type===qr.pop&&r.go(-1,!1)}).catch(Br),Promise.reject()):(le.delta&&r.go(-le.delta,!1),H(R,ae,w))).then(R=>{R=R||te(ae,w,!1),R&&(le.delta&&!Pn(R,8)?r.go(-le.delta,!1):le.type===qr.pop&&Pn(R,20)&&r.go(-1,!1)),U(ae,w,R)}).catch(Br)}))}let ue=yr(),Y=yr(),re;function H(N,ee,le){xe(N);const ae=Y.list();return ae.length?ae.forEach(Oe=>Oe(N,ee,le)):console.error(N),Promise.reject(N)}function ge(){return re&&l.value!==$n?Promise.resolve():new Promise((N,ee)=>{ue.add([N,ee])})}function xe(N){return re||(re=!N,ie(),ue.list().forEach(([ee,le])=>N?le(N):ee()),ue.reset()),N}function Ce(N,ee,le,ae){const{scrollBehavior:Oe}=n;if(!er||!Oe)return Promise.resolve();const w=!le&&Gm(Pc(N.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return xf().then(()=>Oe(N,ee,w)).then(R=>R&&Hm(R)).catch(R=>H(R,N,ee))}const Fe=N=>r.go(N);let je;const ne=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:d,options:n,push:S,replace:I,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:ge,install(N){const ee=this;N.component("RouterLink",Hs),N.component("RouterView",dh),N.config.globalProperties.$router=ee,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(l)}),er&&!je&&l.value===$n&&(je=!0,S(r.location).catch(Oe=>{}));const le={};for(const Oe in $n)Object.defineProperty(le,Oe,{get:()=>l.value[Oe],enumerable:!0});N.provide(Il,ee),N.provide(hh,pf(le)),N.provide(Ra,l);const ae=N.unmount;ne.add(N),N.unmount=function(){ne.delete(N),ne.size<1&&(c=$n,W&&W(),W=null,l.value=$n,je=!1,re=!1),ae()}}};function be(N){return N.reduce((ee,le)=>ee.then(()=>b(le)),Promise.resolve())}return me}function _g(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>fr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>fr(c,l))||r.push(l))}return[t,i,r]}const vg="/assets/indeed_logo-B-kKN5vA.webp",xg="/assets/github_logo-CQOl0T3p.webp",pn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Mg={},Sg={class:"footer-content"};function Eg(n,e){return vt(),St("div",Sg,e[0]||(e[0]=[jf('<a href="https://www.linkedin.com/in/sreesh-poudyal-15977117b/" target="_blank" data-v-9ec8171f><img src="'+vg+'" alt="Linkedin" data-v-9ec8171f></a><a href="https://github.com/sreesh101" target="_blank" data-v-9ec8171f><img src="'+xg+'" alt="Github" data-v-9ec8171f></a><p class="whitewhite" data-v-9ec8171f>© 2025. Sreesh Poudyal</p>',3)]))}const yg=pn(Mg,[["render",Eg],["__scopeId","data-v-9ec8171f"]]),Tg={class:"layout"},bg={class:"wrapper"},Ag={class:"main-content"},wg={__name:"App",setup(n){return(e,t)=>(vt(),St("div",Tg,[Ye("header",null,[Ye("div",bg,[Ye("nav",null,[dt(cn(Hs),{to:"/"},{default:Us(()=>t[0]||(t[0]=[Bs("Home")])),_:1,__:[0]}),dt(cn(Hs),{to:"/about"},{default:Us(()=>t[1]||(t[1]=[Bs("About")])),_:1,__:[1]}),dt(cn(Hs),{to:"/contact"},{default:Us(()=>t[2]||(t[2]=[Bs("Contact")])),_:1,__:[2]})])])]),Ye("main",Ag,[dt(cn(dh))]),dt(yg)]))}},Rg=pn(wg,[["__scopeId","data-v-90a559e3"]]),Cg="modulepreload",Pg=function(n){return"/"+n},Wc={},Xc=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Pg(l),l in Wc)return;Wc[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Cg,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="177",Lg=0,qc=1,Dg=2,ph=1,Ug=2,Fn=3,fi=0,Vt=1,zn=2,oi=0,ar=1,$c=2,Yc=3,Kc=4,Ig=5,Ri=100,Ng=101,Fg=102,Og=103,Bg=104,zg=200,Hg=201,Vg=202,Gg=203,Ca=204,Pa=205,kg=206,Wg=207,Xg=208,qg=209,$g=210,Yg=211,Kg=212,jg=213,Zg=214,La=0,Da=1,Ua=2,dr=3,Ia=4,Na=5,Fa=6,Oa=7,mh=0,Jg=1,Qg=2,ai=0,e_=1,t_=2,n_=3,i_=4,r_=5,s_=6,o_=7,gh=300,pr=301,mr=302,Ba=303,za=304,xo=306,Ha=1e3,Pi=1001,Va=1002,hn=1003,a_=1004,fs=1005,Mn=1006,Oo=1007,Li=1008,An=1009,_h=1010,vh=1011,$r=1012,Fl=1013,Ii=1014,Hn=1015,es=1016,Ol=1017,Bl=1018,Yr=1020,xh=35902,Mh=1021,Sh=1022,un=1023,Kr=1026,jr=1027,Eh=1028,zl=1029,yh=1030,Hl=1031,Vl=1033,Vs=33776,Gs=33777,ks=33778,Ws=33779,Ga=35840,ka=35841,Wa=35842,Xa=35843,qa=36196,$a=37492,Ya=37496,Ka=37808,ja=37809,Za=37810,Ja=37811,Qa=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,ol=37819,al=37820,ll=37821,Xs=36492,cl=36494,ul=36495,Th=36283,fl=36284,hl=36285,dl=36286,l_=3200,c_=3201,bh=0,u_=1,ri="",Qt="srgb",gr="srgb-linear",no="linear",at="srgb",zi=7680,jc=519,f_=512,h_=513,d_=514,Ah=515,p_=516,m_=517,g_=518,__=519,Zc=35044,Jc="300 es",Vn=2e3,io=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,pl=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function v_(n,e){return(n%e+e)%e}function zo(n,e,t){return(1-t)*n+t*e}function Tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ns{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==v){let m=1-a;const d=l*h+c*p+u*v+f*x,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const I=Math.sqrt(T),C=Math.atan2(I,d*A);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const S=a*A;if(l=l*m+h*S,c=c*m+p*S,u=u*m+v*S,f=f*m+x*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new z,Qc=new ns;class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],d=r[6],A=r[1],T=r[4],S=r[7],I=r[2],C=r[5],P=r[8];return s[0]=o*x+a*A+l*I,s[3]=o*m+a*T+l*C,s[6]=o*d+a*S+l*P,s[1]=c*x+u*A+f*I,s[4]=c*m+u*T+f*C,s[7]=c*d+u*S+f*P,s[2]=h*x+p*A+v*I,s[5]=h*m+p*T+v*C,s[8]=h*d+p*S+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new We;function wh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function x_(){const n=ro("canvas");return n.style.display="block",n}const eu={};function lr(n){n in eu||(eu[n]=!0,console.warn(n))}function M_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function S_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function E_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?no:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:e,whitePoint:i,transfer:no,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Je=y_();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class T_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=ro("canvas")),Hi.width=e.width,Hi.height=e.height;const r=Hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Go(r[o].image)):s.push(Go(r[o]))}else s=Go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A_=0;const ko=new z;class Gt extends vr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Pi,r=Pi,s=Mn,o=Li,a=un,l=An,c=Gt.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ts(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=gh;Gt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(p+1)/2,I=(d+1)/2,C=(u+h)/4,P=(f+x)/4,B=(v+m)/4;return T>S&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=P/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=B/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=B/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Gt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends w_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R_ extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ds.subVectors(this.max,br),Vi.subVectors(e.a,br),Gi.subVectors(e.b,br),ki.subVectors(e.c,br),Yn.subVectors(Gi,Vi),Kn.subVectors(ki,Gi),xi.subVectors(Vi,ki);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-xi.z,xi.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,xi.z,0,-xi.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-xi.y,xi.x,0];return!Wo(t,Vi,Gi,ki,ds)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,Vi,Gi,ki,ds))?!1:(ps.crossVectors(Yn,Kn),t=[ps.x,ps.y,ps.z],Wo(t,Vi,Gi,ki,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,hs=new is,Vi=new z,Gi=new z,ki=new z,Yn=new z,Kn=new z,xi=new z,br=new z,ds=new z,ps=new z,Mi=new z;function Wo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mi.fromArray(n,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const C_=new is,Ar=new z,Xo=new z;class kl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):C_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Xo)),this.expandByPoint(Ar.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new z,qo=new z,ms=new z,jn=new z,$o=new z,gs=new z,Yo=new z;class P_{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qo.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(qo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ms),a=jn.dot(this.direction),l=-jn.dot(ms),c=jn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qo).addScaledVector(ms,h),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){$o.subVectors(t,e),gs.subVectors(i,e),Yo.crossVectors($o,gs);let o=this.direction.dot(Yo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(gs.crossVectors(jn,gs));if(l<0)return null;const c=a*this.direction.dot($o.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(Yo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,v,x,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,v,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,x=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,D_)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Zn.crossVectors(i,Xt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Zn.crossVectors(i,Xt)),Zn.normalize(),_s.crossVectors(Xt,Zn),r[0]=Zn.x,r[4]=_s.x,r[8]=Xt.x,r[1]=Zn.y,r[5]=_s.y,r[9]=Xt.y,r[2]=Zn.z,r[6]=_s.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],d=i[14],A=i[3],T=i[7],S=i[11],I=i[15],C=r[0],P=r[4],B=r[8],b=r[12],y=r[1],U=r[5],te=r[9],W=r[13],ie=r[2],ue=r[6],Y=r[10],re=r[14],H=r[3],ge=r[7],xe=r[11],Ce=r[15];return s[0]=o*C+a*y+l*ie+c*H,s[4]=o*P+a*U+l*ue+c*ge,s[8]=o*B+a*te+l*Y+c*xe,s[12]=o*b+a*W+l*re+c*Ce,s[1]=u*C+f*y+h*ie+p*H,s[5]=u*P+f*U+h*ue+p*ge,s[9]=u*B+f*te+h*Y+p*xe,s[13]=u*b+f*W+h*re+p*Ce,s[2]=v*C+x*y+m*ie+d*H,s[6]=v*P+x*U+m*ue+d*ge,s[10]=v*B+x*te+m*Y+d*xe,s[14]=v*b+x*W+m*re+d*Ce,s[3]=A*C+T*y+S*ie+I*H,s[7]=A*P+T*U+S*ue+I*ge,s[11]=A*B+T*te+S*Y+I*xe,s[15]=A*b+T*W+S*re+I*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],d=e[15],A=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,T=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,S=u*x*c-v*f*c+v*a*p-o*x*p-u*a*d+o*f*d,I=v*f*l-u*x*l-v*a*h+o*x*h+u*a*m-o*f*m,C=t*A+i*T+r*S+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=A*P,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=T*P,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=S*P,e[9]=(v*f*s-u*x*s-v*i*p+t*x*p+u*i*d-t*f*d)*P,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=I*P,e[13]=(u*x*r-v*f*r+v*i*h-t*x*h-u*i*m+t*f*m)*P,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,v=s*f,x=o*u,m=o*f,d=a*f,A=l*c,T=l*u,S=l*f,I=i.x,C=i.y,P=i.z;return r[0]=(1-(x+d))*I,r[1]=(p+S)*I,r[2]=(v-T)*I,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+d))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(v+T)*P,r[9]=(m-A)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(a===Vn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===io)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let v,x;if(a===Vn)v=(o+s)*f,x=-2*f;else if(a===io)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wi=new z,on=new gt,L_=new z(0,0,0),D_=new z(1,1,1),Zn=new z,_s=new z,Xt=new z,iu=new gt,ru=new ns;class wn{constructor(e=0,t=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const su=new z,Xi=new ns,Un=new gt,vs=new z,wr=new z,I_=new z,N_=new ns,ou=new z(1,0,0),au=new z(0,1,0),lu=new z(0,0,1),cu={type:"added"},F_={type:"removed"},qi={type:"childadded",child:null},Ko={type:"childremoved",child:null};class kt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new z,t=new wn,i=new ns,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vs.copy(e):vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(wr,vs,this.up):Un.lookAt(vs,wr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Un),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new z(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new z,In=new z,jo=new z,Nn=new z,$i=new z,Yi=new z,uu=new z,Zo=new z,Jo=new z,Qo=new z,ea=new lt,ta=new lt,na=new lt;class ln{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),In.subVectors(i,t),jo.subVectors(e,t);const o=an.dot(an),a=an.dot(In),l=an.dot(jo),c=In.dot(In),u=In.dot(jo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,i),na.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ea,s.x),o.addScaledVector(ta,s.y),o.addScaledVector(na,s.z),o}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),In.subVectors(e,t),an.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),In.subVectors(this.a,this.b),an.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$i.subVectors(r,i),Yi.subVectors(s,i),Zo.subVectors(e,i);const l=$i.dot(Zo),c=Yi.dot(Zo);if(l<=0&&c<=0)return t.copy(i);Jo.subVectors(e,r);const u=$i.dot(Jo),f=Yi.dot(Jo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($i,o);Qo.subVectors(e,s);const p=$i.dot(Qo),v=Yi.dot(Qo);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Yi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return uu.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(uu,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector($i,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=v_(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ia(o,s,e+1/3),this.g=ia(o,s,e),this.b=ia(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(Ke(Rt.r*255,0,255))*65536+Math.round(Ke(Rt.g*255,0,255))*256+Math.round(Ke(Rt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Qt){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(xs);const i=zo(Jn.h,xs.h,t),r=zo(Jn.s,xs.s,t),s=zo(Jn.l,xs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Qe;Qe.NAMES=Ph;let O_=0;class rs extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=ar,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lh extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,Ms=new et;let B_=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Dh extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uh extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tn extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let z_=0;const Jt=new gt,ra=new kt,Ki=new z,qt=new is,Rr=new is,Tt=new z;class pi extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?Uh:Dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(qt.min,Rr.min),qt.expandByPoint(Tt),Tt.addVectors(qt.max,Rr.max),qt.expandByPoint(Tt)):(qt.expandByPoint(Rr.min),qt.expandByPoint(Rr.max))}qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Tt.add(Ki)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new z,l[B]=new z;const c=new z,u=new z,f=new z,h=new et,p=new et,v=new et,x=new z,m=new z;function d(B,b,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(U),a[B].add(x),a[b].add(x),a[y].add(x),l[B].add(m),l[b].add(m),l[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,b=A.length;B<b;++B){const y=A[B],U=y.start,te=y.count;for(let W=U,ie=U+te;W<ie;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new z,S=new z,I=new z,C=new z;function P(B){I.fromBufferAttribute(r,B),C.copy(I);const b=a[B];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),S.crossVectors(C,b);const U=S.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,U)}for(let B=0,b=A.length;B<b;++B){const y=A[B],U=y.start,te=y.count;for(let W=U,ie=U+te;W<ie;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new gt,Si=new P_,Ss=new kl,hu=new z,Es=new z,ys=new z,Ts=new z,sa=new z,bs=new z,du=new z,As=new z;class Sn extends kt{constructor(e=new pi,t=new Lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(sa.fromBufferAttribute(f,e),o?bs.addScaledVector(sa,u):bs.addScaledVector(sa.sub(t),u))}t.add(bs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(Ss.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Ss,hu)===null||Si.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(fu.copy(s).invert(),Si.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,I=T;S<I;S+=3){const C=a.getX(S),P=a.getX(S+1),B=a.getX(S+2);r=ws(this,d,e,i,c,u,f,C,P,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const A=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=ws(this,o,e,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,I=T;S<I;S+=3){const C=S,P=S+1,B=S+2;r=ws(this,d,e,i,c,u,f,C,P,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const A=m,T=m+1,S=m+2;r=ws(this,o,e,i,c,u,f,A,T,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function H_(n,e,t,i,r,s,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fi,a),l===null)return null;As.copy(a),As.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:n}}function ws(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Es),n.getVertexPosition(l,ys),n.getVertexPosition(c,Ts);const u=H_(n,e,t,i,Es,ys,Ts,du);if(u){const f=new z;ln.getBarycoord(du,Es,ys,Ts,f),r&&(u.uv=ln.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=ln.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};ln.getNormal(Es,ys,Ts,h.normal),u.face=h,u.barycoord=f}return u}class ss extends pi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(f,2));function v(x,m,d,A,T,S,I,C,P,B,b){const y=S/P,U=I/B,te=S/2,W=I/2,ie=C/2,ue=P+1,Y=B+1;let re=0,H=0;const ge=new z;for(let xe=0;xe<Y;xe++){const Ce=xe*U-W;for(let Fe=0;Fe<ue;Fe++){const je=Fe*y-te;ge[x]=je*A,ge[m]=Ce*T,ge[d]=ie,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[d]=C>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Fe/P),f.push(1-xe/B),re+=1}}for(let xe=0;xe<B;xe++)for(let Ce=0;Ce<P;Ce++){const Fe=h+Ce+ue*xe,je=h+Ce+ue*(xe+1),ne=h+(Ce+1)+ue*(xe+1),me=h+(Ce+1)+ue*xe;l.push(Fe,je,me),l.push(je,ne,me),H+=6}a.addGroup(p,H,b),p+=H,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}function V_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const G_={clone:_r,merge:It};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nh extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new z,pu=new et,mu=new et;class Yt extends Nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Zi=1;class X_ extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(ji,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Yt(ji,Zi,e,t);s.layers=this.layers,this.add(s);const o=new Yt(ji,Zi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ji,Zi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(ji,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ji,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Fh extends Gt{constructor(e=[],t=pr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q_ extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ss(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:oi});s.uniforms.tEquirect.value=t;const o=new Sn(r,s),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Mn),new X_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Rs extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Y_ extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const aa=new z,K_=new z,j_=new We;class Ai{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||j_.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new kl,Cs=new z;class Wl{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],d=r[12],A=r[13],T=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-d).normalize(),i[1].setComponents(l+s,h+c,m+p,S+d).normalize(),i[2].setComponents(l+o,h+u,m+v,S+A).normalize(),i[3].setComponents(l-o,h-u,m-v,S-A).normalize(),i[4].setComponents(l-a,h-f,m-x,S-T).normalize(),t===Vn)i[5].setComponents(l+a,h+f,m+x,S+T).normalize();else if(t===io)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oh extends Gt{constructor(e,t,i=Ii,r,s,o,a=hn,l=hn,c,u=Kr,f=1){if(u!==Kr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mo extends pi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*h-o;for(let T=0;T<c;T++){const S=T*f-s;v.push(S,-A,0),x.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const T=A+c*d,S=A+c*(d+1),I=A+1+c*(d+1),C=A+1+c*d;p.push(T,S,C),p.push(S,I,C)}this.setIndex(p),this.setAttribute("position",new Tn(v,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xl extends pi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,p=[],v=[],x=[],m=[];for(let d=0;d<=i;d++){const A=[],T=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){const C=I/t;f.x=-e*Math.cos(r+C*s)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+T*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+S,1-T),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){const T=u[d][A+1],S=u[d][A],I=u[d+1][A],C=u[d+1][A+1];(d!==0||o>0)&&p.push(T,S,C),(d!==i-1||l<Math.PI)&&p.push(S,I,C)}this.setIndex(p),this.setAttribute("position",new Tn(v,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Z_ extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J_ extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q_ extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bh extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const la=new gt,gu=new z,_u=new z;class ev{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vu=new gt,Cr=new z,ca=new z;class tv extends ev{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cr),ca.copy(i.position),ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ca),i.updateMatrixWorld(),r.makeTranslation(-Cr.x,-Cr.y,-Cr.z),vu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class nv extends Bh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iv extends Nh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rv extends Bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sv extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function xu(n,e,t,i){const r=ov(i);switch(t){case Mh:return n*e;case Eh:return n*e/r.components*r.byteLength;case zl:return n*e/r.components*r.byteLength;case yh:return n*e*2/r.components*r.byteLength;case Hl:return n*e*2/r.components*r.byteLength;case Sh:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case Vl:return n*e*4/r.components*r.byteLength;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ks:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:case Xa:return Math.max(n,16)*Math.max(e,8)/4;case Ga:case Wa:return Math.max(n,8)*Math.max(e,8)/2;case qa:case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xs:case cl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Th:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hl:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ov(n){switch(n){case An:case _h:return{byteLength:1,components:1};case $r:case vh:case es:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case Ii:case Fl:case Hn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function av(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cv=`#ifdef USE_ALPHAHASH
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
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
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
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gv=`#ifdef USE_BATCHING
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
#endif`,_v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ev=`#ifdef USE_BUMPMAP
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",zv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qv=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,a0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,bx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,wx=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:lv,alphahash_pars_fragment:cv,alphamap_fragment:uv,alphamap_pars_fragment:fv,alphatest_fragment:hv,alphatest_pars_fragment:dv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:gv,batching_vertex:_v,begin_vertex:vv,beginnormal_vertex:xv,bsdfs:Mv,iridescence_fragment:Sv,bumpmap_pars_fragment:Ev,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:bv,clipping_planes_vertex:Av,color_fragment:wv,color_pars_fragment:Rv,color_pars_vertex:Cv,color_vertex:Pv,common:Lv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Uv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Nv,emissivemap_fragment:Fv,emissivemap_pars_fragment:Ov,colorspace_fragment:Bv,colorspace_pars_fragment:zv,envmap_fragment:Hv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Gv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:e0,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:qv,fog_fragment:$v,fog_pars_fragment:Yv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:jv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Jv,lights_pars_begin:Qv,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:d0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:x0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:y0,morphtarget_vertex:T0,normal_fragment_begin:b0,normal_fragment_maps:A0,normal_pars_fragment:w0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:I0,opaque_fragment:N0,packing:F0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:H0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:$0,skinning_pars_vertex:Y0,skinning_vertex:K0,skinnormal_vertex:j0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:rx,uv_vertex:sx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:fx,cube_frag:hx,depth_vert:dx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:_x,equirect_frag:vx,linedashed_vert:xx,linedashed_frag:Mx,meshbasic_vert:Sx,meshbasic_frag:Ex,meshlambert_vert:yx,meshlambert_frag:Tx,meshmatcap_vert:bx,meshmatcap_frag:Ax,meshnormal_vert:wx,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Ux,meshtoon_frag:Ix,points_vert:Nx,points_frag:Fx,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:zx,sprite_frag:Hx},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vn={basic:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:It([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:It([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:It([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:It([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:It([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:It([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:It([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:It([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};vn.physical={uniforms:It([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ps={r:0,b:0,g:0},yi=new wn,Vx=new gt;function Gx(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const I=v(T);I===null?d(a,l):I&&I.isColor&&(d(I,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const I=v(S);I&&(I.isCubeTexture||I.mapping===xo)?(u===void 0&&(u=new Sn(new ss(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:_r(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(S.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(yi)),u.material.toneMapped=Je.getTransfer(I.colorSpace)!==at,(f!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Sn(new Mo(2,2),new hi({name:"BackgroundMaterial",uniforms:_r(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Je.getTransfer(I.colorSpace)!==at,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(Ps,Ih(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,S,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:x,addToRenderList:m,dispose:A}}function kx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,U,te,W,ie){let ue=!1;const Y=f(W,te,U);s!==Y&&(s=Y,c(s.object)),ue=p(y,W,te,ie),ue&&v(y,W,te,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,S(y,U,te,W),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,U,te){const W=te.wireframe===!0;let ie=i[y.id];ie===void 0&&(ie={},i[y.id]=ie);let ue=ie[U.id];ue===void 0&&(ue={},ie[U.id]=ue);let Y=ue[W];return Y===void 0&&(Y=h(l()),ue[W]=Y),Y}function h(y){const U=[],te=[],W=[];for(let ie=0;ie<t;ie++)U[ie]=0,te[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:te,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,U,te,W){const ie=s.attributes,ue=U.attributes;let Y=0;const re=te.getAttributes();for(const H in re)if(re[H].location>=0){const xe=ie[H];let Ce=ue[H];if(Ce===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;Y++}return s.attributesNum!==Y||s.index!==W}function v(y,U,te,W){const ie={},ue=U.attributes;let Y=0;const re=te.getAttributes();for(const H in re)if(re[H].location>=0){let xe=ue[H];xe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),ie[H]=Ce,Y++}s.attributes=ie,s.attributesNum=Y,s.index=W}function x(){const y=s.newAttributes;for(let U=0,te=y.length;U<te;U++)y[U]=0}function m(y){d(y,0)}function d(y,U){const te=s.newAttributes,W=s.enabledAttributes,ie=s.attributeDivisors;te[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),ie[y]!==U&&(n.vertexAttribDivisor(y,U),ie[y]=U)}function A(){const y=s.newAttributes,U=s.enabledAttributes;for(let te=0,W=U.length;te<W;te++)U[te]!==y[te]&&(n.disableVertexAttribArray(te),U[te]=0)}function T(y,U,te,W,ie,ue,Y){Y===!0?n.vertexAttribIPointer(y,U,te,ie,ue):n.vertexAttribPointer(y,U,te,W,ie,ue)}function S(y,U,te,W){x();const ie=W.attributes,ue=te.getAttributes(),Y=U.defaultAttributeValues;for(const re in ue){const H=ue[re];if(H.location>=0){let ge=ie[re];if(ge===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const xe=ge.normalized,Ce=ge.itemSize,Fe=e.get(ge);if(Fe===void 0)continue;const je=Fe.buffer,ne=Fe.type,me=Fe.bytesPerElement,be=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===Fl;if(ge.isInterleavedBufferAttribute){const N=ge.data,ee=N.stride,le=ge.offset;if(N.isInstancedInterleavedBuffer){for(let ae=0;ae<H.locationSize;ae++)d(H.location+ae,N.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ae=0;ae<H.locationSize;ae++)T(H.location+ae,Ce/H.locationSize,ne,xe,ee*me,(le+Ce/H.locationSize*ae)*me,be)}else{if(ge.isInstancedBufferAttribute){for(let N=0;N<H.locationSize;N++)d(H.location+N,ge.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let N=0;N<H.locationSize;N++)m(H.location+N);n.bindBuffer(n.ARRAY_BUFFER,je);for(let N=0;N<H.locationSize;N++)T(H.location+N,Ce/H.locationSize,ne,xe,Ce*me,Ce/H.locationSize*N*me,be)}}else if(Y!==void 0){const xe=Y[re];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(H.location,xe);break;case 3:n.vertexAttrib3fv(H.location,xe);break;case 4:n.vertexAttrib4fv(H.location,xe);break;default:n.vertexAttrib1fv(H.location,xe)}}}}A()}function I(){B();for(const y in i){const U=i[y];for(const te in U){const W=U[te];for(const ie in W)u(W[ie].object),delete W[ie];delete U[te]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const te in U){const W=U[te];for(const ie in W)u(W[ie].object),delete W[ie];delete U[te]}delete i[y.id]}function P(y){for(const U in i){const te=i[U];if(te[y.id]===void 0)continue;const W=te[y.id];for(const ie in W)u(W[ie].object),delete W[ie];delete te[y.id]}}function B(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Wx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x]*h[x];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Hn&&!B)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function qx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ai,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,T=A*4;let S=d.clippingState||null;l.value=S,S=u(v,h,T,p);for(let I=0;I!==T;++I)S[I]=t[I];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==x;++T,S+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function $x(n){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=pr:a===za&&(o.mapping=mr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new q_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tr=4,Mu=[.125,.215,.35,.446,.526,.582],Ci=20,ua=new iv,Su=new Qe;let fa=null,ha=0,da=0,pa=!1;const wi=(1+Math.sqrt(5))/2,Ji=1/wi,Eu=[new z(-wi,Ji,0),new z(wi,Ji,0),new z(-Ji,0,wi),new z(Ji,0,wi),new z(0,wi,-Ji),new z(0,wi,Ji),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Yx=new z;class yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Yx}=s;fa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,ha,da),this._renderer.xr.enabled=pa,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:es,format:un,colorSpace:gr,depthBuffer:!1},r=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kx(s)),this._blurMaterial=jx(s,e,t)}return r}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,i,r,s){const l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Su),f.toneMapping=ai,f.autoClear=!1;const v=new Lh({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),x=new Sn(new ss,v);let m=!1;const d=e.background;d?d.isColor&&(v.color.copy(d),e.background=null,m=!0):(v.color.copy(Su),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const S=this._cubeSize;Ls(r,T*S,A>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eu[(r-s-1)%Eu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Sn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const d=[];let A=0;for(let P=0;P<Ci;++P){const B=P/x,b=Math.exp(-B*B/2);d.push(b),P===0?A+=b:P<m&&(A+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=v,h.mipInt.value=T-i;const S=this._sizeLods[r],I=3*S*(r>T-tr?r-T+tr:0),C=4*(this._cubeSize-S);Ls(t,I,C,3*S,2*S),l.setRenderTarget(t),l.render(f,ua)}}function Kx(n){const e=[],t=[],i=[];let r=n;const s=n-tr+1+Mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-tr?l=Mu[o-n+tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,m=2,d=1,A=new Float32Array(x*v*p),T=new Float32Array(m*v*p),S=new Float32Array(d*v*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,B=C>2?0:-1,b=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];A.set(b,x*v*C),T.set(h,m*v*C);const y=[C,C,C,C,C,C];S.set(y,d*v*C)}const I=new pi;I.setAttribute("position",new yn(A,x)),I.setAttribute("uv",new yn(T,m)),I.setAttribute("faceIndex",new yn(S,d)),e.push(I),r>tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tu(n,e,t){const i=new Ni(n,e,t);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jx(n,e,t){const i=new Float32Array(Ci),r=new z(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ql(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function bu(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Au(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function Zx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===za,u=l===pr||l===mr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new yu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new yu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&lr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qx(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let T=0,S=A.length;T<S;T+=3){const I=A[T+0],C=A[T+1],P=A[T+2];h.push(I,C,C,P,P,I)}}else if(v!==void 0){const A=v.array;x=v.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const I=T+0,C=T+1,P=T+2;h.push(I,C,C,P,P,I)}}else return;const m=new(wh(h)?Uh:Dh)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function eM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function f(h,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let d=0;for(let A=0;A<v;A++)d+=p[A]*x[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function tM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nM(n,e,t){const i=new WeakMap,r=new lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),v===!0&&(T=2),x===!0&&(T=3);let S=a.attributes.position.count*T,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*I*4*f),P=new Rh(C,S,I,f);P.type=Hn,P.needsUpdate=!0;const B=T*4;for(let y=0;y<f;y++){const U=m[y],te=d[y],W=A[y],ie=S*I*4*y;for(let ue=0;ue<U.count;ue++){const Y=ue*B;p===!0&&(r.fromBufferAttribute(U,ue),C[ie+Y+0]=r.x,C[ie+Y+1]=r.y,C[ie+Y+2]=r.z,C[ie+Y+3]=0),v===!0&&(r.fromBufferAttribute(te,ue),C[ie+Y+4]=r.x,C[ie+Y+5]=r.y,C[ie+Y+6]=r.z,C[ie+Y+7]=0),x===!0&&(r.fromBufferAttribute(W,ue),C[ie+Y+8]=r.x,C[ie+Y+9]=r.y,C[ie+Y+10]=r.z,C[ie+Y+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new et(S,I)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function iM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Hh=new Gt,wu=new Oh(1,1),Vh=new Rh,Gh=new R_,kh=new Fh,Ru=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ru[r];if(s===void 0&&(s=new Float32Array(r),Ru[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function So(n,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function lM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),yt(t,i)}}function cM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),yt(t,i)}}function uM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),yt(t,i)}}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function xM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wu.compareFunction=Ah,s=wu):s=Hh,t.setTexture2D(e||s,r)}function MM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gh,r)}function SM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kh,r)}function EM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vh,r)}function yM(n){switch(n){case 5126:return rM;case 35664:return sM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return hM;case 35668:case 35672:return dM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return _M;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return EM}}function TM(n,e){n.uniform1fv(this.addr,e)}function bM(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function AM(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function wM(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function RM(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CM(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function PM(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function LM(n,e){n.uniform1iv(this.addr,e)}function DM(n,e){n.uniform2iv(this.addr,e)}function UM(n,e){n.uniform3iv(this.addr,e)}function IM(n,e){n.uniform4iv(this.addr,e)}function NM(n,e){n.uniform1uiv(this.addr,e)}function FM(n,e){n.uniform2uiv(this.addr,e)}function OM(n,e){n.uniform3uiv(this.addr,e)}function BM(n,e){n.uniform4uiv(this.addr,e)}function zM(n,e,t){const i=this.cache,r=e.length,s=So(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hh,s[o])}function HM(n,e,t){const i=this.cache,r=e.length,s=So(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gh,s[o])}function VM(n,e,t){const i=this.cache,r=e.length,s=So(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kh,s[o])}function GM(n,e,t){const i=this.cache,r=e.length,s=So(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vh,s[o])}function kM(n){switch(n){case 5126:return TM;case 35664:return bM;case 35665:return AM;case 35666:return wM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return IM;case 5125:return NM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}class WM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}}class XM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Uu(n,e){n.seq.push(e),n.map[e.id]=e}function $M(n,e,t){const i=n.name,r=i.length;for(ma.lastIndex=0;;){const s=ma.exec(i),o=ma.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Uu(t,c===void 0?new WM(a,n,e):new XM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new qM(a),Uu(t,f)),t=f}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);$M(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const YM=37297;let KM=0;function jM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Nu=new We;function ZM(n){Je._getMatrix(Nu,Je.workingColorSpace,n);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case no:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jM(n.getShaderSource(e),o)}else return r}function JM(n,e){const t=ZM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function QM(n,e){let t;switch(e){case e_:t="Linear";break;case t_:t="Reinhard";break;case n_:t="Cineon";break;case i_:t="ACESFilmic";break;case s_:t="AgX";break;case o_:t="Neutral";break;case r_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new z;function eS(){Je.getLuminanceCoefficients(Ds);const n=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function nS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Lr(n){return n!==""}function Ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(n){return n.replace(rS,oS)}const sS=new Map;function oS(n,e){let t=qe[e];if(t===void 0){const i=sS.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(aS,lS)}function lS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function cS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function uS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function hS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mh:e="ENVMAP_BLENDING_MULTIPLY";break;case Jg:e="ENVMAP_BLENDING_MIX";break;case Qg:e="ENVMAP_BLENDING_ADD";break}return e}function dS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cS(t),c=uS(t),u=fS(t),f=hS(t),h=dS(t),p=tS(t),v=nS(s),x=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Lr).join(`
`),d.length>0&&(d+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),d=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==ai?QM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,JM("linearToOutputTexel",t.outputColorSpace),eS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=ml(o),o=Ou(o,t),o=Bu(o,t),a=ml(a),a=Ou(a,t),a=Bu(a,t),o=zu(o),a=zu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+o,S=A+d+a,I=Iu(r,r.VERTEX_SHADER,T),C=Iu(r,r.FRAGMENT_SHADER,S);r.attachShader(x,I),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(U){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(I).trim(),ie=r.getShaderInfoLog(C).trim();let ue=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,C);else{const re=Fu(r,I,"vertex"),H=Fu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+te+`
`+re+`
`+H)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(W===""||ie==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ue,programLog:te,vertexShader:{log:W,prefix:m},fragmentShader:{log:ie,prefix:d}})}r.deleteShader(I),r.deleteShader(C),B=new qs(r,x),b=iS(r,x)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,YM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let mS=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _S(e),t.set(e,i)),i}}class _S{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}}function vS(n,e,t,i,r,s,o){const a=new Ch,l=new gS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,U,te,W){const ie=te.fog,ue=W.geometry,Y=b.isMeshStandardMaterial?te.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),H=re&&re.mapping===xo?re.image.height:null,ge=v[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ce=xe!==void 0?xe.length:0;let Fe=0;ue.morphAttributes.position!==void 0&&(Fe=1),ue.morphAttributes.normal!==void 0&&(Fe=2),ue.morphAttributes.color!==void 0&&(Fe=3);let je,ne,me,be;if(ge){const rt=vn[ge];je=rt.vertexShader,ne=rt.fragmentShader}else je=b.vertexShader,ne=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const N=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),le=W.isInstancedMesh===!0,ae=W.isBatchedMesh===!0,Oe=!!b.map,w=!!b.matcap,R=!!re,_=!!b.aoMap,Q=!!b.lightMap,q=!!b.bumpMap,$=!!b.normalMap,Z=!!b.displacementMap,se=!!b.emissiveMap,j=!!b.metalnessMap,K=!!b.roughnessMap,Me=b.anisotropy>0,E=b.clearcoat>0,g=b.dispersion>0,L=b.iridescence>0,G=b.sheen>0,J=b.transmission>0,V=Me&&!!b.anisotropyMap,ye=E&&!!b.clearcoatMap,pe=E&&!!b.clearcoatNormalMap,Te=E&&!!b.clearcoatRoughnessMap,we=L&&!!b.iridescenceMap,ce=L&&!!b.iridescenceThicknessMap,Ae=G&&!!b.sheenColorMap,Le=G&&!!b.sheenRoughnessMap,De=!!b.specularMap,_e=!!b.specularColorMap,Ge=!!b.specularIntensityMap,D=J&&!!b.transmissionMap,Se=J&&!!b.thicknessMap,fe=!!b.gradientMap,Pe=!!b.alphaMap,he=b.alphaTest>0,oe=!!b.alphaHash,Ue=!!b.extensions;let ke=ai;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ft={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:ne,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ae,batchingColor:ae&&W._colorsTexture!==null,instancing:le,instancingColor:le&&W.instanceColor!==null,instancingMorph:le&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gr,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:w,envMap:R,envMapMode:R&&re.mapping,envMapCubeUVHeight:H,aoMap:_,lightMap:Q,bumpMap:q,normalMap:$,displacementMap:h&&Z,emissiveMap:se,normalMapObjectSpace:$&&b.normalMapType===u_,normalMapTangentSpace:$&&b.normalMapType===bh,metalnessMap:j,roughnessMap:K,anisotropy:Me,anisotropyMap:V,clearcoat:E,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Te,dispersion:g,iridescence:L,iridescenceMap:we,iridescenceThicknessMap:ce,sheen:G,sheenColorMap:Ae,sheenRoughnessMap:Le,specularMap:De,specularColorMap:_e,specularIntensityMap:Ge,transmission:J,transmissionMap:D,thicknessMap:Se,gradientMap:fe,opaque:b.transparent===!1&&b.blending===ar&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:he,alphaHash:oe,combine:b.combine,mapUv:Oe&&x(b.map.channel),aoMapUv:_&&x(b.aoMap.channel),lightMapUv:Q&&x(b.lightMap.channel),bumpMapUv:q&&x(b.bumpMap.channel),normalMapUv:$&&x(b.normalMap.channel),displacementMapUv:Z&&x(b.displacementMap.channel),emissiveMapUv:se&&x(b.emissiveMap.channel),metalnessMapUv:j&&x(b.metalnessMap.channel),roughnessMapUv:K&&x(b.roughnessMap.channel),anisotropyMapUv:V&&x(b.anisotropyMap.channel),clearcoatMapUv:ye&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(b.sheenRoughnessMap.channel),specularMapUv:De&&x(b.specularMap.channel),specularColorMapUv:_e&&x(b.specularColorMap.channel),specularIntensityMapUv:Ge&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:Se&&x(b.thicknessMap.channel),alphaMapUv:Pe&&x(b.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&($||Me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ue.attributes.uv&&(Oe||Pe),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ee,skinning:W.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)y.push(U),y.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(A(y,b),T(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function A(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const y=v[b.type];let U;if(y){const te=vn[y];U=G_.clone(te.uniforms)}else U=b.uniforms;return U}function I(b,y){let U;for(let te=0,W=u.length;te<W;te++){const ie=u[te];if(ie.cacheKey===y){U=ie,++U.usedTimes;break}}return U===void 0&&(U=new pS(n,y,b,s),u.push(U)),U}function C(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:B}}function xS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function MS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,v,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,v,x,m){const d=o(f,h,p,v,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,x,m){const d=o(f,h,p,v,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||MS),i.length>1&&i.sort(h||Vu),r.length>1&&r.sort(h||Vu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function SS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Gu,n.set(i,[o])):r>=s.length?(o=new Gu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ES(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function yS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TS=0;function bS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AS(n){const e=new ES,t=yS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new gt,o=new gt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,A=0,T=0,S=0,I=0,C=0,P=0;c.sort(bS);for(let b=0,y=c.length;b<y;b++){const U=c[b],te=U.color,W=U.intensity,ie=U.distance,ue=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=te.r*W,f+=te.g*W,h+=te.b*W;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],W);P++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,H=t.get(U);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ue,i.directionalShadowMatrix[p]=U.shadow.matrix,A++}i.directional[p]=Y,p++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(te).multiplyScalar(W),Y.distance=ie,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[x]=Y;const re=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,re.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[x]=re.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=ue,S++}x++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(te).multiplyScalar(W),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Y,m++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const re=U.shadow,H=t.get(U);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=ue,i.pointShadowMatrix[v]=U.shadow.matrix,T++}i.point[v]=Y,v++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(W),Y.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[d]=Y,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==p||B.pointLength!==v||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==A||B.numPointShadows!==T||B.numSpotShadows!==S||B.numSpotMaps!==I||B.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,B.directionalLength=p,B.pointLength=v,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=A,B.numPointShadows=T,B.numSpotShadows=S,B.numSpotMaps=I,B.numLightProbes=P,i.version=TS++)}function l(c,u){let f=0,h=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function ku(n){const e=new AS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ku(n),e.set(r,[a])):s>=o.length?(a=new ku(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`;function PS(n,e,t){let i=new Wl;const r=new et,s=new et,o=new lt,a=new J_({depthPacking:c_}),l=new Q_,c={},u=t.maxTextureSize,f={[fi]:Vt,[Vt]:fi,[zn]:zn},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:RS,fragmentShader:CS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new pi;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Sn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ph;let d=this.type;this.render=function(C,P,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),te=n.state;te.setBlending(oi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const W=d!==Fn&&this.type===Fn,ie=d===Fn&&this.type!==Fn;for(let ue=0,Y=C.length;ue<Y;ue++){const re=C[ue],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ge=H.getFrameExtents();if(r.multiply(ge),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,H.mapSize.y=s.y)),H.map===null||W===!0||ie===!0){const Ce=this.type!==Fn?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new Ni(r.x,r.y,Ce),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const xe=H.getViewportCount();for(let Ce=0;Ce<xe;Ce++){const Fe=H.getViewport(Ce);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),te.viewport(o),H.updateMatrices(re,Ce),i=H.getFrustum(),S(P,B,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Fn&&A(H,B),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,U)};function A(C,P){const B=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ni(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,B,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,B,p,x,null)}function T(C,P,B,b){let y=null;const U=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)y=U;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const te=y.uuid,W=P.uuid;let ie=c[te];ie===void 0&&(ie={},c[te]=ie);let ue=ie[W];ue===void 0&&(ue=y.clone(),ie[W]=ue,P.addEventListener("dispose",I)),y=ue}if(y.visible=P.visible,y.wireframe=P.wireframe,b===Fn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const te=n.properties.get(y);te.light=B}return y}function S(C,P,B,b,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Fn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const W=e.update(C),ie=C.material;if(Array.isArray(ie)){const ue=W.groups;for(let Y=0,re=ue.length;Y<re;Y++){const H=ue[Y],ge=ie[H.materialIndex];if(ge&&ge.visible){const xe=T(C,ge,b,y);C.onBeforeShadow(n,C,P,B,W,xe,H),n.renderBufferDirect(B,null,W,xe,C,H),C.onAfterShadow(n,C,P,B,W,xe,H)}}}else if(ie.visible){const ue=T(C,ie,b,y);C.onBeforeShadow(n,C,P,B,W,ue,null),n.renderBufferDirect(B,null,W,ue,C,null),C.onAfterShadow(n,C,P,B,W,ue,null)}}const te=C.children;for(let W=0,ie=te.length;W<ie;W++)S(te[W],P,B,b,y)}function I(C){C.target.removeEventListener("dispose",I);for(const B in c){const b=c[B],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const LS={[La]:Da,[Ua]:Fa,[Ia]:Oa,[dr]:Na,[Da]:La,[Fa]:Ua,[Oa]:Ia,[Na]:dr};function DS(n,e){function t(){let D=!1;const Se=new lt;let fe=null;const Pe=new lt(0,0,0,0);return{setMask:function(he){fe!==he&&!D&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){D=he},setClear:function(he,oe,Ue,ke,ft){ft===!0&&(he*=ke,oe*=ke,Ue*=ke),Se.set(he,oe,Ue,ke),Pe.equals(Se)===!1&&(n.clearColor(he,oe,Ue,ke),Pe.copy(Se))},reset:function(){D=!1,fe=null,Pe.set(-1,0,0,0)}}}function i(){let D=!1,Se=!1,fe=null,Pe=null,he=null;return{setReversed:function(oe){if(Se!==oe){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Se=oe;const ke=he;he=null,this.setClear(ke)}},getReversed:function(){return Se},setTest:function(oe){oe?N(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!D&&(n.depthMask(oe),fe=oe)},setFunc:function(oe){if(Se&&(oe=LS[oe]),Pe!==oe){switch(oe){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){D=oe},setClear:function(oe){he!==oe&&(Se&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){D=!1,fe=null,Pe=null,he=null,Se=!1}}}function r(){let D=!1,Se=null,fe=null,Pe=null,he=null,oe=null,Ue=null,ke=null,ft=null;return{setTest:function(rt){D||(rt?N(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!D&&(n.stencilMask(rt),Se=rt)},setFunc:function(rt,nn,Rn){(fe!==rt||Pe!==nn||he!==Rn)&&(n.stencilFunc(rt,nn,Rn),fe=rt,Pe=nn,he=Rn)},setOp:function(rt,nn,Rn){(oe!==rt||Ue!==nn||ke!==Rn)&&(n.stencilOp(rt,nn,Rn),oe=rt,Ue=nn,ke=Rn)},setLocked:function(rt){D=rt},setClear:function(rt){ft!==rt&&(n.clearStencil(rt),ft=rt)},reset:function(){D=!1,Se=null,fe=null,Pe=null,he=null,oe=null,Ue=null,ke=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],v=null,x=!1,m=null,d=null,A=null,T=null,S=null,I=null,C=null,P=new Qe(0,0,0),B=0,b=!1,y=null,U=null,te=null,W=null,ie=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=re>=2);let ge=null,xe={};const Ce=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),je=new lt().fromArray(Ce),ne=new lt().fromArray(Fe);function me(D,Se,fe,Pe){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(D,oe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<fe;Ue++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Se+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const be={};be[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(dr),q(!1),$(qc),N(n.CULL_FACE),_(oi);function N(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ee(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function le(D,Se){return f[D]!==Se?(n.bindFramebuffer(D,Se),f[D]=Se,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function ae(D,Se){let fe=p,Pe=!1;if(D){fe=h.get(Se),fe===void 0&&(fe=[],h.set(Se,fe));const he=D.textures;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ue=he.length;oe<Ue;oe++)fe[oe]=n.COLOR_ATTACHMENT0+oe;fe.length=he.length,Pe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(fe)}function Oe(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const w={[Ri]:n.FUNC_ADD,[Ng]:n.FUNC_SUBTRACT,[Fg]:n.FUNC_REVERSE_SUBTRACT};w[Og]=n.MIN,w[Bg]=n.MAX;const R={[zg]:n.ZERO,[Hg]:n.ONE,[Vg]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[$g]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[kg]:n.DST_ALPHA,[Gg]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[qg]:n.ONE_MINUS_DST_COLOR,[Wg]:n.ONE_MINUS_DST_ALPHA,[Yg]:n.CONSTANT_COLOR,[Kg]:n.ONE_MINUS_CONSTANT_COLOR,[jg]:n.CONSTANT_ALPHA,[Zg]:n.ONE_MINUS_CONSTANT_ALPHA};function _(D,Se,fe,Pe,he,oe,Ue,ke,ft,rt){if(D===oi){x===!0&&(ee(n.BLEND),x=!1);return}if(x===!1&&(N(n.BLEND),x=!0),D!==Ig){if(D!==m||rt!==b){if((d!==Ri||S!==Ri)&&(n.blendEquation(n.FUNC_ADD),d=Ri,S=Ri),rt)switch(D){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,T=null,I=null,C=null,P.set(0,0,0),B=0,m=D,b=rt}return}he=he||Se,oe=oe||fe,Ue=Ue||Pe,(Se!==d||he!==S)&&(n.blendEquationSeparate(w[Se],w[he]),d=Se,S=he),(fe!==A||Pe!==T||oe!==I||Ue!==C)&&(n.blendFuncSeparate(R[fe],R[Pe],R[oe],R[Ue]),A=fe,T=Pe,I=oe,C=Ue),(ke.equals(P)===!1||ft!==B)&&(n.blendColor(ke.r,ke.g,ke.b,ft),P.copy(ke),B=ft),m=D,b=!1}function Q(D,Se){D.side===zn?ee(n.CULL_FACE):N(n.CULL_FACE);let fe=D.side===Vt;Se&&(fe=!fe),q(fe),D.blending===ar&&D.transparent===!1?_(oi):_(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Pe=D.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function $(D){D!==Lg?(N(n.CULL_FACE),D!==U&&(D===qc?n.cullFace(n.BACK):D===Dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),U=D}function Z(D){D!==te&&(Y&&n.lineWidth(D),te=D)}function se(D,Se,fe){D?(N(n.POLYGON_OFFSET_FILL),(W!==Se||ie!==fe)&&(n.polygonOffset(Se,fe),W=Se,ie=fe)):ee(n.POLYGON_OFFSET_FILL)}function j(D){D?N(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function K(D){D===void 0&&(D=n.TEXTURE0+ue-1),ge!==D&&(n.activeTexture(D),ge=D)}function Me(D,Se,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+ue-1:fe=ge);let Pe=xe[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[fe]=Pe),(Pe.type!==D||Pe.texture!==Se)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(D,Se||be[D]),Pe.type=D,Pe.texture=Se)}function E(){const D=xe[ge];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function Le(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function De(D,Se){let fe=c.get(Se);fe===void 0&&(fe=new WeakMap,c.set(Se,fe));let Pe=fe.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(Se,D.name),fe.set(D,Pe))}function _e(D,Se){const Pe=c.get(Se).get(D);l.get(Se)!==Pe&&(n.uniformBlockBinding(Se,Pe,D.__bindingPointIndex),l.set(Se,Pe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,xe={},f={},h=new WeakMap,p=[],v=null,x=!1,m=null,d=null,A=null,T=null,S=null,I=null,C=null,P=new Qe(0,0,0),B=0,b=!1,y=null,U=null,te=null,W=null,ie=null,je.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:ee,bindFramebuffer:le,drawBuffers:ae,useProgram:Oe,setBlending:_,setMaterial:Q,setFlipSided:q,setCullFace:$,setLineWidth:Z,setPolygonOffset:se,setScissorTest:j,activeTexture:K,bindTexture:Me,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:we,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Te,texSubImage2D:G,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:ye,scissor:Ae,viewport:Le,reset:Ge}}function US(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return p?new OffscreenCanvas(E,g):ro("canvas")}function x(E,g,L){let G=1;const J=Me(E);if((J.width>L||J.height>L)&&(G=L/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(G*J.width),ye=Math.floor(G*J.height);f===void 0&&(f=v(V,ye));const pe=g?v(V,ye):f;return pe.width=V,pe.height=ye,pe.getContext("2d").drawImage(E,0,0,V,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+ye+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,g,L,G,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=g;if(g===n.RED&&(L===n.FLOAT&&(V=n.R32F),L===n.HALF_FLOAT&&(V=n.R16F),L===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.R8UI),L===n.UNSIGNED_SHORT&&(V=n.R16UI),L===n.UNSIGNED_INT&&(V=n.R32UI),L===n.BYTE&&(V=n.R8I),L===n.SHORT&&(V=n.R16I),L===n.INT&&(V=n.R32I)),g===n.RG&&(L===n.FLOAT&&(V=n.RG32F),L===n.HALF_FLOAT&&(V=n.RG16F),L===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RG8UI),L===n.UNSIGNED_SHORT&&(V=n.RG16UI),L===n.UNSIGNED_INT&&(V=n.RG32UI),L===n.BYTE&&(V=n.RG8I),L===n.SHORT&&(V=n.RG16I),L===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGB8UI),L===n.UNSIGNED_SHORT&&(V=n.RGB16UI),L===n.UNSIGNED_INT&&(V=n.RGB32UI),L===n.BYTE&&(V=n.RGB8I),L===n.SHORT&&(V=n.RGB16I),L===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),L===n.UNSIGNED_INT&&(V=n.RGBA32UI),L===n.BYTE&&(V=n.RGBA8I),L===n.SHORT&&(V=n.RGBA16I),L===n.INT&&(V=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),g===n.RGBA){const ye=J?no:Je.getTransfer(G);L===n.FLOAT&&(V=n.RGBA32F),L===n.HALF_FLOAT&&(V=n.RGBA16F),L===n.UNSIGNED_BYTE&&(V=ye===at?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(E,g){let L;return E?g===null||g===Ii||g===Yr?L=n.DEPTH24_STENCIL8:g===Hn?L=n.DEPTH32F_STENCIL8:g===$r&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ii||g===Yr?L=n.DEPTH_COMPONENT24:g===Hn?L=n.DEPTH_COMPONENT32F:g===$r&&(L=n.DEPTH_COMPONENT16),L}function I(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==hn&&E.minFilter!==Mn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){const g=E.target;g.removeEventListener("dispose",C),B(g),g.isVideoTexture&&u.delete(g)}function P(E){const g=E.target;g.removeEventListener("dispose",P),y(g)}function B(E){const g=i.get(E);if(g.__webglInit===void 0)return;const L=E.source,G=h.get(L);if(G){const J=G[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(G).length===0&&h.delete(L)}i.remove(E)}function b(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const L=E.source,G=h.get(L);delete G[g.__cacheKey],o.memory.textures--}function y(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let J=0;J<g.__webglFramebuffer[G].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[G][J]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=E.textures;for(let G=0,J=L.length;G<J;G++){const V=i.get(L[G]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(L[G])}i.remove(E)}let U=0;function te(){U=0}function W(){const E=U;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),U+=1,E}function ie(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ue(E,g){const L=i.get(E);if(E.isVideoTexture&&j(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(L,E,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function Y(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){be(L,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function re(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){be(L,E,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function H(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){N(L,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ge={[Ha]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},xe={[hn]:n.NEAREST,[a_]:n.NEAREST_MIPMAP_NEAREST,[fs]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},Ce={[f_]:n.NEVER,[__]:n.ALWAYS,[h_]:n.LESS,[Ah]:n.LEQUAL,[d_]:n.EQUAL,[g_]:n.GEQUAL,[p_]:n.GREATER,[m_]:n.NOTEQUAL};function Fe(E,g){if(g.type===Hn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Mn||g.magFilter===Oo||g.magFilter===fs||g.magFilter===Li||g.minFilter===Mn||g.minFilter===Oo||g.minFilter===fs||g.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ge[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===hn||g.minFilter!==fs&&g.minFilter!==Li||g.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(E,g){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));const G=g.source;let J=h.get(G);J===void 0&&(J={},h.set(G,J));const V=ie(g);if(V!==E.__cacheKey){J[V]===void 0&&(J[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[V].usedTimes++;const ye=J[E.__cacheKey];ye!==void 0&&(J[E.__cacheKey].usedTimes--,ye.usedTimes===0&&b(g)),E.__cacheKey=V,E.__webglTexture=J[V].texture}return L}function ne(E,g,L){return Math.floor(Math.floor(E/L)/g)}function me(E,g,L,G){const V=E.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,G,g.data);else{V.sort((ce,Ae)=>ce.start-Ae.start);let ye=0;for(let ce=1;ce<V.length;ce++){const Ae=V[ye],Le=V[ce],De=Ae.start+Ae.count,_e=ne(Le.start,g.width,4),Ge=ne(Ae.start,g.width,4);Le.start<=De+1&&_e===Ge&&ne(Le.start+Le.count-1,g.width,4)===_e?Ae.count=Math.max(Ae.count,Le.start+Le.count-Ae.start):(++ye,V[ye]=Le)}V.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,Ae=V.length;ce<Ae;ce++){const Le=V[ce],De=Math.floor(Le.start/4),_e=Math.ceil(Le.count/4),Ge=De%g.width,D=Math.floor(De/g.width),Se=_e,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ge,D,Se,fe,L,G,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function be(E,g,L){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const J=je(E,g),V=g.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+L);const ye=i.get(V);if(V.version!==ye.__version||J===!0){t.activeTexture(n.TEXTURE0+L);const pe=Je.getPrimaries(Je.workingColorSpace),Te=g.colorSpace===ri?null:Je.getPrimaries(g.colorSpace),we=g.colorSpace===ri||pe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ce=x(g.image,!1,r.maxTextureSize);ce=K(g,ce);const Ae=s.convert(g.format,g.colorSpace),Le=s.convert(g.type);let De=T(g.internalFormat,Ae,Le,g.colorSpace,g.isVideoTexture);Fe(G,g);let _e;const Ge=g.mipmaps,D=g.isVideoTexture!==!0,Se=ye.__version===void 0||J===!0,fe=V.dataReady,Pe=I(g,ce);if(g.isDepthTexture)De=S(g.format===jr,g.type),Se&&(D?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,Ae,Le,null));else if(g.isDataTexture)if(Ge.length>0){D&&Se&&t.texStorage2D(n.TEXTURE_2D,Pe,De,Ge[0].width,Ge[0].height);for(let he=0,oe=Ge.length;he<oe;he++)_e=Ge[he],D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Ae,Le,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,Ae,Le,_e.data);g.generateMipmaps=!1}else D?(Se&&t.texStorage2D(n.TEXTURE_2D,Pe,De,ce.width,ce.height),fe&&me(g,ce,Ae,Le)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,Ae,Le,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,De,Ge[0].width,Ge[0].height,ce.depth);for(let he=0,oe=Ge.length;he<oe;he++)if(_e=Ge[he],g.format!==un)if(Ae!==null)if(D){if(fe)if(g.layerUpdates.size>0){const Ue=xu(_e.width,_e.height,g.format,g.type);for(const ke of g.layerUpdates){const ft=_e.data.subarray(ke*Ue/_e.data.BYTES_PER_ELEMENT,(ke+1)*Ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,ke,_e.width,_e.height,1,Ae,ft)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,Ae,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,Ae,Le,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ce.depth,0,Ae,Le,_e.data)}else{D&&Se&&t.texStorage2D(n.TEXTURE_2D,Pe,De,Ge[0].width,Ge[0].height);for(let he=0,oe=Ge.length;he<oe;he++)_e=Ge[he],g.format!==un?Ae!==null?D?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Ae,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Ae,Le,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,Ae,Le,_e.data)}else if(g.isDataArrayTexture)if(D){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,De,ce.width,ce.height,ce.depth),fe)if(g.layerUpdates.size>0){const he=xu(ce.width,ce.height,g.format,g.type);for(const oe of g.layerUpdates){const Ue=ce.data.subarray(oe*he/ce.data.BYTES_PER_ELEMENT,(oe+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,Ae,Le,Ue)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Le,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,Ae,Le,ce.data);else if(g.isData3DTexture)D?(Se&&t.texStorage3D(n.TEXTURE_3D,Pe,De,ce.width,ce.height,ce.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Le,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,Ae,Le,ce.data);else if(g.isFramebufferTexture){if(Se)if(D)t.texStorage2D(n.TEXTURE_2D,Pe,De,ce.width,ce.height);else{let he=ce.width,oe=ce.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,De,he,oe,0,Ae,Le,null),he>>=1,oe>>=1}}else if(Ge.length>0){if(D&&Se){const he=Me(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Pe,De,he.width,he.height)}for(let he=0,oe=Ge.length;he<oe;he++)_e=Ge[he],D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae,Le,_e):t.texImage2D(n.TEXTURE_2D,he,De,Ae,Le,_e);g.generateMipmaps=!1}else if(D){if(Se){const he=Me(ce);t.texStorage2D(n.TEXTURE_2D,Pe,De,he.width,he.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Le,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,Ae,Le,ce);m(g)&&d(G),ye.__version=V.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function N(E,g,L){if(g.image.length!==6)return;const G=je(E,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+L);const V=i.get(J);if(J.version!==V.__version||G===!0){t.activeTexture(n.TEXTURE0+L);const ye=Je.getPrimaries(Je.workingColorSpace),pe=g.colorSpace===ri?null:Je.getPrimaries(g.colorSpace),Te=g.colorSpace===ri||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let oe=0;oe<6;oe++)!we&&!ce?Ae[oe]=x(g.image[oe],!0,r.maxCubemapSize):Ae[oe]=ce?g.image[oe].image:g.image[oe],Ae[oe]=K(g,Ae[oe]);const Le=Ae[0],De=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),Ge=T(g.internalFormat,De,_e,g.colorSpace),D=g.isVideoTexture!==!0,Se=V.__version===void 0||G===!0,fe=J.dataReady;let Pe=I(g,Le);Fe(n.TEXTURE_CUBE_MAP,g);let he;if(we){D&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ge,Le.width,Le.height);for(let oe=0;oe<6;oe++){he=Ae[oe].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const ke=he[Ue];g.format!==un?De!==null?D?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,ke.width,ke.height,De,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,ke.width,ke.height,De,_e,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,Ge,ke.width,ke.height,0,De,_e,ke.data)}}}else{if(he=g.mipmaps,D&&Se){he.length>0&&Pe++;const oe=Me(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ge,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae[oe].width,Ae[oe].height,De,_e,Ae[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,Ae[oe].width,Ae[oe].height,0,De,_e,Ae[oe].data);for(let Ue=0;Ue<he.length;Ue++){const ft=he[Ue].image[oe].image;D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,ft.width,ft.height,De,_e,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,Ge,ft.width,ft.height,0,De,_e,ft.data)}}else{D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,_e,Ae[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,De,_e,Ae[oe]);for(let Ue=0;Ue<he.length;Ue++){const ke=he[Ue];D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,De,_e,ke.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,Ge,De,_e,ke.image[oe])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),V.__version=J.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ee(E,g,L,G,J,V){const ye=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),Te=T(L.internalFormat,ye,pe,L.colorSpace),we=i.get(g),ce=i.get(L);if(ce.__renderTarget=g,!we.__hasExternalTextures){const Ae=Math.max(1,g.width>>V),Le=Math.max(1,g.height>>V);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,V,Te,Ae,Le,g.depth,0,ye,pe,null):t.texImage2D(J,V,Te,Ae,Le,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,J,ce.__webglTexture,0,Z(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,J,ce.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(E,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const G=g.depthTexture,J=G&&G.isDepthTexture?G.type:null,V=S(g.stencilBuffer,J),ye=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Z(g);se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,V,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,E)}else{const G=g.textures;for(let J=0;J<G.length;J++){const V=G[J],ye=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),Te=T(V.internalFormat,ye,pe,V.colorSpace),we=Z(g);L&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Te,g.width,g.height):se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ue(g.depthTexture,0);const J=G.__webglTexture,V=Z(g);if(g.depthTexture.format===Kr)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(g.depthTexture.format===jr)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(E){const g=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const G=E.texture.mipmaps;G&&G.length>0?ae(g.__webglFramebuffer[0],E):ae(g.__webglFramebuffer,E)}else if(L){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),le(g.__webglDepthbuffer[G],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),le(g.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(E,g,L){const G=i.get(E);g!==void 0&&ee(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Oe(E)}function R(E){const g=E.texture,L=i.get(E),G=i.get(g);E.addEventListener("dispose",P);const J=E.textures,V=E.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,o.memory.textures++),V){L.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[pe]=[];for(let Te=0;Te<g.mipmaps.length;Te++)L.__webglFramebuffer[pe][Te]=n.createFramebuffer()}else L.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)L.__webglFramebuffer[pe]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Te=J.length;pe<Te;pe++){const we=i.get(J[pe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&se(E)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let pe=0;pe<J.length;pe++){const Te=J[pe];L.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[pe]);const we=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),Ae=T(Te.internalFormat,we,ce,Te.colorSpace,E.isXRRenderTarget===!0),Le=Z(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,L.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),le(L.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)ee(L.__webglFramebuffer[pe][Te],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Te);else ee(L.__webglFramebuffer[pe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Te=J.length;pe<Te;pe++){const we=J[pe],ce=i.get(we);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Fe(n.TEXTURE_2D,we),ee(L.__webglFramebuffer,E,we,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(we)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,G.__webglTexture),Fe(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)ee(L.__webglFramebuffer[Te],E,g,n.COLOR_ATTACHMENT0,pe,Te);else ee(L.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&d(pe),t.unbindTexture()}E.depthBuffer&&Oe(E)}function _(E){const g=E.textures;for(let L=0,G=g.length;L<G;L++){const J=g[L];if(m(J)){const V=A(E),ye=i.get(J).__webglTexture;t.bindTexture(V,ye),d(V),t.unbindTexture()}}}const Q=[],q=[];function $(E){if(E.samples>0){if(se(E)===!1){const g=E.textures,L=E.width,G=E.height;let J=n.COLOR_BUFFER_BIT;const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),pe=g.length>1;if(pe)for(let we=0;we<g.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<g.length;we++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ce=i.get(g[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,L,G,0,0,L,G,J,n.NEAREST),l===!0&&(Q.length=0,q.length=0,Q.push(n.COLOR_ATTACHMENT0+we),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(V),q.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<g.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ce=i.get(g[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Z(E){return Math.min(r.maxSamples,E.samples)}function se(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function K(E,g){const L=E.colorSpace,G=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||L!==gr&&L!==ri&&(Je.getTransfer(L)===at?(G!==un||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=R,this.updateRenderTargetMipmap=_,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=se}function IS(n,e){function t(i,r=ri){let s;const o=Je.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.BYTE;if(i===vh)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===Mh)return n.ALPHA;if(i===Sh)return n.RGB;if(i===un)return n.RGBA;if(i===Kr)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Eh)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===yh)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Vl)return n.RGBA_INTEGER;if(i===Vs||i===Gs||i===ks||i===Ws)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===ka||i===Wa||i===Xa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===$a||i===Ya)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qa||i===$a)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ya)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===ja||i===Za||i===Ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ka)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xs||i===cl||i===ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xs)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===fl||i===hl||i===dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
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

}`;class OS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Gt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hi({vertexShader:NS,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BS extends vr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const x=new OS,m=t.getContextAttributes();let d=null,A=null;const T=[],S=[],I=new et;let C=null;const P=new Yt;P.viewport=new lt;const B=new Yt;B.viewport=new lt;const b=[P,B],y=new sv;let U=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=T[ne];return me===void 0&&(me=new oa,T[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=T[ne];return me===void 0&&(me=new oa,T[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=T[ne];return me===void 0&&(me=new oa,T[ne]=me),me.getHandSpace()};function W(ne){const me=S.indexOf(ne.inputSource);if(me===-1)return;const be=T[me];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||o),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ie(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ue);for(let ne=0;ne<T.length;ne++){const me=S[ne];me!==null&&(S[ne]=null,T[ne].disconnect(me))}U=null,te=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,A=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ue),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,N=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?jr:Kr,N=m.stencil?Yr:Ii);const le={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Ni(h.textureWidth,h.textureHeight,{format:un,type:An,depthTexture:new Oh(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ni(p.framebufferWidth,p.framebufferHeight,{format:un,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ue(ne){for(let me=0;me<ne.removed.length;me++){const be=ne.removed[me],N=S.indexOf(be);N>=0&&(S[N]=null,T[N].disconnect(be))}for(let me=0;me<ne.added.length;me++){const be=ne.added[me];let N=S.indexOf(be);if(N===-1){for(let le=0;le<T.length;le++)if(le>=S.length){S.push(be),N=le;break}else if(S[le]===null){S[le]=be,N=le;break}if(N===-1)break}const ee=T[N];ee&&ee.connect(be)}}const Y=new z,re=new z;function H(ne,me,be){Y.setFromMatrixPosition(me.matrixWorld),re.setFromMatrixPosition(be.matrixWorld);const N=Y.distanceTo(re),ee=me.projectionMatrix.elements,le=be.projectionMatrix.elements,ae=ee[14]/(ee[10]-1),Oe=ee[14]/(ee[10]+1),w=(ee[9]+1)/ee[5],R=(ee[9]-1)/ee[5],_=(ee[8]-1)/ee[0],Q=(le[8]+1)/le[0],q=ae*_,$=ae*Q,Z=N/(-_+Q),se=Z*-_;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(Z),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ee[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const j=ae+Z,K=Oe+Z,Me=q-se,E=$+(N-se),g=w*Oe/K*j,L=R*Oe/K*j;ne.projectionMatrix.makePerspective(Me,E,g,L,j,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,be=ne.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(be=x.depthFar)),y.near=B.near=P.near=me,y.far=B.far=P.far=be,(U!==y.near||te!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,te=y.far),P.layers.mask=ne.layers.mask|2,B.layers.mask=ne.layers.mask|4,y.layers.mask=P.layers.mask|B.layers.mask;const N=ne.parent,ee=y.cameras;ge(y,N);for(let le=0;le<ee.length;le++)ge(ee[le],N);ee.length===2?H(y,P,B):y.projectionMatrix.copy(P.projectionMatrix),xe(ne,y,N)};function xe(ne,me,be){be===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=pl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ce=null;function Fe(ne,me){if(u=me.getViewerPose(c||o),v=me,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let N=!1;be.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let ae=0;ae<be.length;ae++){const Oe=be[ae];let w=null;if(p!==null)w=p.getViewport(Oe);else{const _=f.getViewSubImage(h,Oe);w=_.viewport,ae===0&&(e.setRenderTargetTextures(A,_.colorTexture,_.depthStencilTexture),e.setRenderTarget(A))}let R=b[ae];R===void 0&&(R=new Yt,R.layers.enable(ae),R.viewport=new lt,b[ae]=R),R.matrix.fromArray(Oe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Oe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ae===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(R)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(be[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,r.renderState)}}for(let be=0;be<T.length;be++){const N=S[be],ee=T[be];N!==null&&ee!==void 0&&ee.update(N,me,c||o)}Ce&&Ce(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const je=new zh;je.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){Ce=ne},this.dispose=function(){}}}const Ti=new wn,zS=new gt;function HS(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ih(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),T=A.envMap,S=A.envMapRotation;T&&(m.envMap.value=T,Ti.copy(S),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(zS.makeRotationFromEuler(Ti)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(v(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(A,I);const C=e.render.frame;s[A.id]!==C&&(h(A),s[A.id]=C)}function u(A){const T=f();A.__bindingPointIndex=T;const S=n.createBuffer(),I=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=r[A.id],S=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,P=S.length;C<P;C++){const B=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,y=B.length;b<y;b++){const U=B[b];if(p(U,C,b,I)===!0){const te=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let ie=0;for(let ue=0;ue<W.length;ue++){const Y=W[ue],re=x(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,te+ie,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,ie),ie+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,S,I){const C=A.value,P=T+"_"+S;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const B=I[P];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return I[P]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function v(A){const T=A.uniforms;let S=0;const I=16;for(let P=0,B=T.length;P<B;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,U=b.length;y<U;y++){const te=b[y],W=Array.isArray(te.value)?te.value:[te.value];for(let ie=0,ue=W.length;ie<ue;ie++){const Y=W[ie],re=x(Y),H=S%I,ge=H%re.boundary,xe=H+ge;S+=ge,xe!==0&&I-xe<re.storage&&(S+=I-xe),te.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=re.storage}}}const C=S%I;return C>0&&(S+=I-C),A.__size=S,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class GS{constructor(e={}){const{canvas:t=x_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=Qt;let C=0,P=0,B=null,b=-1,y=null;const U=new lt,te=new lt;let W=null;const ie=new Qe(0);let ue=0,Y=t.width,re=t.height,H=1,ge=null,xe=null;const Ce=new lt(0,0,Y,re),Fe=new lt(0,0,Y,re);let je=!1;const ne=new Wl;let me=!1,be=!1;const N=new gt,ee=new gt,le=new z,ae=new lt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return B===null?H:1}let _=i;function Q(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),_===null){const F="webgl2";if(_=Q(F,M),_===null)throw Q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let q,$,Z,se,j,K,Me,E,g,L,G,J,V,ye,pe,Te,we,ce,Ae,Le,De,_e,Ge,D;function Se(){q=new Jx(_),q.init(),_e=new IS(_,q),$=new Xx(_,q,e,_e),Z=new DS(_,q),$.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),se=new tM(_),j=new xS,K=new US(_,q,Z,j,$,_e,se),Me=new $x(S),E=new Zx(S),g=new av(_),Ge=new kx(_,g),L=new Qx(_,g,se,Ge),G=new iM(_,L,g,se),Ae=new nM(_,$,K),Te=new qx(j),J=new vS(S,Me,E,q,$,Ge,Te),V=new HS(S,j),ye=new SS,pe=new wS(q),ce=new Gx(S,Me,E,Z,G,p,l),we=new PS(S,G,$),D=new VS(_,se,$,Z),Le=new Wx(_,q,se),De=new eM(_,q,se),se.programs=J.programs,S.capabilities=$,S.extensions=q,S.properties=j,S.renderLists=ye,S.shadowMap=we,S.state=Z,S.info=se}Se();const fe=new BS(S,_);this.xr=fe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(Y,re,!1))},this.getSize=function(M){return M.set(Y,re)},this.setSize=function(M,F,k=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,re=F,t.width=Math.floor(M*H),t.height=Math.floor(F*H),k===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Y*H,re*H).floor()},this.setDrawingBufferSize=function(M,F,k){Y=M,re=F,H=k,t.width=Math.floor(M*k),t.height=Math.floor(F*k),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Ce)},this.setViewport=function(M,F,k,X){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,F,k,X),Z.viewport(U.copy(Ce).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,F,k,X){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,F,k,X),Z.scissor(te.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){Z.setScissorTest(je=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){xe=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,k=!0){let X=0;if(M){let O=!1;if(B!==null){const de=B.texture.format;O=de===Vl||de===Hl||de===zl}if(O){const de=B.texture.type,Ee=de===An||de===Ii||de===$r||de===Yr||de===Ol||de===Bl,Ie=ce.getClearColor(),Re=ce.getClearAlpha(),ze=Ie.r,He=Ie.g,Ne=Ie.b;Ee?(v[0]=ze,v[1]=He,v[2]=Ne,v[3]=Re,_.clearBufferuiv(_.COLOR,0,v)):(x[0]=ze,x[1]=He,x[2]=Ne,x[3]=Re,_.clearBufferiv(_.COLOR,0,x))}else X|=_.COLOR_BUFFER_BIT}F&&(X|=_.DEPTH_BUFFER_BIT),k&&(X|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ce.dispose(),ye.dispose(),pe.dispose(),j.dispose(),Me.dispose(),E.dispose(),G.dispose(),Ge.dispose(),D.dispose(),J.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Yl),fe.removeEventListener("sessionend",Kl),mi.stop()};function Pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=se.autoReset,F=we.enabled,k=we.autoUpdate,X=we.needsUpdate,O=we.type;Se(),se.autoReset=M,we.enabled=F,we.autoUpdate=k,we.needsUpdate=X,we.type=O}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const F=M.target;F.removeEventListener("dispose",Ue),ke(F)}function ke(M){ft(M),j.remove(M)}function ft(M){const F=j.get(M).programs;F!==void 0&&(F.forEach(function(k){J.releaseProgram(k)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,k,X,O,de){F===null&&(F=Oe);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ie=Xh(M,F,k,X,O);Z.setMaterial(X,Ee);let Re=k.index,ze=1;if(X.wireframe===!0){if(Re=L.getWireframeAttribute(k),Re===void 0)return;ze=2}const He=k.drawRange,Ne=k.attributes.position;let $e=He.start*ze,st=(He.start+He.count)*ze;de!==null&&($e=Math.max($e,de.start*ze),st=Math.min(st,(de.start+de.count)*ze)),Re!==null?($e=Math.max($e,0),st=Math.min(st,Re.count)):Ne!=null&&($e=Math.max($e,0),st=Math.min(st,Ne.count));const mt=st-$e;if(mt<0||mt===1/0)return;Ge.setup(O,X,Ie,k,Re);let _t,Ze=Le;if(Re!==null&&(_t=g.get(Re),Ze=De,Ze.setIndex(_t)),O.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*R()),Ze.setMode(_.LINES)):Ze.setMode(_.TRIANGLES);else if(O.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),Z.setLineWidth(Be*R()),O.isLineSegments?Ze.setMode(_.LINES):O.isLineLoop?Ze.setMode(_.LINE_LOOP):Ze.setMode(_.LINE_STRIP)}else O.isPoints?Ze.setMode(_.POINTS):O.isSprite&&Ze.setMode(_.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Be=O._multiDrawStarts,bt=O._multiDrawCounts,tt=O._multiDrawCount,rn=Re?g.get(Re).bytesPerElement:1,Oi=j.get(X).currentProgram.getUniforms();for(let Wt=0;Wt<tt;Wt++)Oi.setValue(_,"_gl_DrawID",Wt),Ze.render(Be[Wt]/rn,bt[Wt])}else if(O.isInstancedMesh)Ze.renderInstances($e,mt,O.count);else if(k.isInstancedBufferGeometry){const Be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bt=Math.min(k.instanceCount,Be);Ze.renderInstances($e,mt,bt)}else Ze.render($e,mt)};function rt(M,F,k){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,as(M,F,k),M.side=fi,M.needsUpdate=!0,as(M,F,k),M.side=zn):as(M,F,k)}this.compile=function(M,F,k=null){k===null&&(k=M),d=pe.get(k),d.init(F),T.push(d),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),M!==k&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const X=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ie=de[Ee];rt(Ie,k,O),X.add(Ie)}else rt(de,k,O),X.add(de)}),d=T.pop(),X},this.compileAsync=function(M,F,k=null){const X=this.compile(M,F,k);return new Promise(O=>{function de(){if(X.forEach(function(Ee){j.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){O(M);return}setTimeout(de,10)}q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let nn=null;function Rn(M){nn&&nn(M)}function Yl(){mi.stop()}function Kl(){mi.start()}const mi=new zh;mi.setAnimationLoop(Rn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){nn=M,fe.setAnimationLoop(M),M===null?mi.stop():mi.start()},fe.addEventListener("sessionstart",Yl),fe.addEventListener("sessionend",Kl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,F,B),d=pe.get(M,T.length),d.init(F),T.push(d),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(ee),be=this.localClippingEnabled,me=Te.init(this.clippingPlanes,be),m=ye.get(M,A.length),m.init(),A.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&Eo(de,F,-1/0,S.sortObjects)}Eo(M,F,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ge,xe),w=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,w&&ce.addToRenderList(m,M),this.info.render.frame++,me===!0&&Te.beginShadows();const k=d.state.shadowsArray;we.render(k,M,F),me===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){const de=F.cameras;if(O.length>0)for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){const Re=de[Ee];Zl(X,O,M,Re)}w&&ce.render(M);for(let Ee=0,Ie=de.length;Ee<Ie;Ee++){const Re=de[Ee];jl(m,M,Re,Re.viewport)}}else O.length>0&&Zl(X,O,M,F),w&&ce.render(M),jl(m,M,F);B!==null&&P===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),M.isScene===!0&&M.onAfterRender(S,M,F),Ge.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(d=T[T.length-1],me===!0&&Te.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Eo(M,F,k,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ne.intersectsSprite(M)){X&&ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);const Ee=G.update(M),Ie=M.material;Ie.visible&&m.push(M,Ee,Ie,k,ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ne.intersectsObject(M))){const Ee=G.update(M),Ie=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ae.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ae.copy(Ee.boundingSphere.center)),ae.applyMatrix4(M.matrixWorld).applyMatrix4(ee)),Array.isArray(Ie)){const Re=Ee.groups;for(let ze=0,He=Re.length;ze<He;ze++){const Ne=Re[ze],$e=Ie[Ne.materialIndex];$e&&$e.visible&&m.push(M,Ee,$e,k,ae.z,Ne)}}else Ie.visible&&m.push(M,Ee,Ie,k,ae.z,null)}}const de=M.children;for(let Ee=0,Ie=de.length;Ee<Ie;Ee++)Eo(de[Ee],F,k,X)}function jl(M,F,k,X){const O=M.opaque,de=M.transmissive,Ee=M.transparent;d.setupLightsView(k),me===!0&&Te.setGlobalState(S.clippingPlanes,k),X&&Z.viewport(U.copy(X)),O.length>0&&os(O,F,k),de.length>0&&os(de,F,k),Ee.length>0&&os(Ee,F,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Zl(M,F,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Ni(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?es:An,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const de=d.state.transmissionRenderTarget[X.id],Ee=X.viewport||U;de.setSize(Ee.z*S.transmissionResolutionScale,Ee.w*S.transmissionResolutionScale);const Ie=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(ie),ue=S.getClearAlpha(),ue<1&&S.setClearColor(16777215,.5),S.clear(),w&&ce.render(k);const Re=S.toneMapping;S.toneMapping=ai;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),me===!0&&Te.setGlobalState(S.clippingPlanes,X),os(M,k,X),K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de),q.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ne=0,$e=F.length;Ne<$e;Ne++){const st=F[Ne],mt=st.object,_t=st.geometry,Ze=st.material,Be=st.group;if(Ze.side===zn&&mt.layers.test(X.layers)){const bt=Ze.side;Ze.side=Vt,Ze.needsUpdate=!0,Jl(mt,k,X,_t,Ze,Be),Ze.side=bt,Ze.needsUpdate=!0,He=!0}}He===!0&&(K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de))}S.setRenderTarget(Ie),S.setClearColor(ie,ue),ze!==void 0&&(X.viewport=ze),S.toneMapping=Re}function os(M,F,k){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,de=M.length;O<de;O++){const Ee=M[O],Ie=Ee.object,Re=Ee.geometry,ze=Ee.group;let He=Ee.material;He.allowOverride===!0&&X!==null&&(He=X),Ie.layers.test(k.layers)&&Jl(Ie,F,k,Re,He,ze)}}function Jl(M,F,k,X,O,de){M.onBeforeRender(S,F,k,X,O,de),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(S,F,k,X,M,de),O.transparent===!0&&O.side===zn&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,S.renderBufferDirect(k,F,X,O,M,de),O.side=fi,O.needsUpdate=!0,S.renderBufferDirect(k,F,X,O,M,de),O.side=zn):S.renderBufferDirect(k,F,X,O,M,de),M.onAfterRender(S,F,k,X,O,de)}function as(M,F,k){F.isScene!==!0&&(F=Oe);const X=j.get(M),O=d.state.lights,de=d.state.shadowsArray,Ee=O.state.version,Ie=J.getParameters(M,O.state,de,F,k),Re=J.getProgramCacheKey(Ie);let ze=X.programs;X.environment=M.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(M.isMeshStandardMaterial?E:Me).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",Ue),ze=new Map,X.programs=ze);let He=ze.get(Re);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===Ee)return ec(M,Ie),He}else Ie.uniforms=J.getUniforms(M),M.onBeforeCompile(Ie,S),He=J.acquireProgram(Ie,Re),ze.set(Re,He),X.uniforms=Ie.uniforms;const Ne=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=Te.uniform),ec(M,Ie),X.needsLights=$h(M),X.lightsStateVersion=Ee,X.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function Ql(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=qs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ec(M,F){const k=j.get(M);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Xh(M,F,k,X,O){F.isScene!==!0&&(F=Oe),K.resetTextureUnits();const de=F.fog,Ee=X.isMeshStandardMaterial?F.environment:null,Ie=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:gr,Re=(X.isMeshStandardMaterial?E:Me).get(X.envMap||Ee),ze=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let mt=ai;X.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(mt=S.toneMapping);const _t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ze=_t!==void 0?_t.length:0,Be=j.get(X),bt=d.state.lights;if(me===!0&&(be===!0||M!==y)){const Dt=M===y&&X.id===b;Te.setState(X,M,Dt)}let tt=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==bt.state.version||Be.outputColorSpace!==Ie||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==Re||X.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Te.numPlanes||Be.numIntersection!==Te.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==He||Be.morphTargets!==Ne||Be.morphNormals!==$e||Be.morphColors!==st||Be.toneMapping!==mt||Be.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,Be.__version=X.version);let rn=Be.currentProgram;tt===!0&&(rn=as(X,F,O));let Oi=!1,Wt=!1,Mr=!1;const ht=rn.getUniforms(),jt=Be.uniforms;if(Z.useProgram(rn.program)&&(Oi=!0,Wt=!0,Mr=!0),X.id!==b&&(b=X.id,Wt=!0),Oi||y!==M){Z.buffers.depth.getReversed()?(N.copy(M.projectionMatrix),S_(N),E_(N),ht.setValue(_,"projectionMatrix",N)):ht.setValue(_,"projectionMatrix",M.projectionMatrix),ht.setValue(_,"viewMatrix",M.matrixWorldInverse);const Ot=ht.map.cameraPosition;Ot!==void 0&&Ot.setValue(_,le.setFromMatrixPosition(M.matrixWorld)),$.logarithmicDepthBuffer&&ht.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Wt=!0,Mr=!0)}if(O.isSkinnedMesh){ht.setOptional(_,O,"bindMatrix"),ht.setOptional(_,O,"bindMatrixInverse");const Dt=O.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ht.setValue(_,"boneTexture",Dt.boneTexture,K))}O.isBatchedMesh&&(ht.setOptional(_,O,"batchingTexture"),ht.setValue(_,"batchingTexture",O._matricesTexture,K),ht.setOptional(_,O,"batchingIdTexture"),ht.setValue(_,"batchingIdTexture",O._indirectTexture,K),ht.setOptional(_,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(_,"batchingColorTexture",O._colorsTexture,K));const Zt=k.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ae.update(O,k,rn),(Wt||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,ht.setValue(_,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(jt.envMap.value=Re,jt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(jt.envMapIntensity.value=F.environmentIntensity),Wt&&(ht.setValue(_,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&qh(jt,Mr),de&&X.fog===!0&&V.refreshFogUniforms(jt,de),V.refreshMaterialUniforms(jt,X,H,re,d.state.transmissionRenderTarget[M.id]),qs.upload(_,Ql(Be),jt,K)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qs.upload(_,Ql(Be),jt,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(_,"center",O.center),ht.setValue(_,"modelViewMatrix",O.modelViewMatrix),ht.setValue(_,"normalMatrix",O.normalMatrix),ht.setValue(_,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Dt=X.uniformsGroups;for(let Ot=0,yo=Dt.length;Ot<yo;Ot++){const gi=Dt[Ot];D.update(gi,rn),D.bind(gi,rn)}}return rn}function qh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function $h(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,F,k){const X=j.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),j.get(M.texture).__webglTexture=F,j.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:k,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const k=j.get(M);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const Yh=_.createFramebuffer();this.setRenderTarget=function(M,F=0,k=0){B=M,C=F,P=k;let X=!0,O=null,de=!1,Ee=!1;if(M){const Re=j.get(M);if(Re.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(_.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(Re.__hasExternalTextures)K.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&j.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const He=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[F])?O=He[F][k]:O=He[F],de=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?O=j.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[k]:O=He,U.copy(M.viewport),te.copy(M.scissor),W=M.scissorTest}else U.copy(Ce).multiplyScalar(H).floor(),te.copy(Fe).multiplyScalar(H).floor(),W=je;if(k!==0&&(O=Yh),Z.bindFramebuffer(_.FRAMEBUFFER,O)&&X&&Z.drawBuffers(M,O),Z.viewport(U),Z.scissor(te),Z.setScissorTest(W),de){const Re=j.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,k)}else if(Ee){const Re=j.get(M.texture),ze=F;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Re.__webglTexture,k,ze)}else if(M!==null&&k!==0){const Re=j.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Re.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(M,F,k,X,O,de,Ee,Ie=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Z.bindFramebuffer(_.FRAMEBUFFER,Re);try{const ze=M.textures[Ie],He=ze.format,Ne=ze.type;if(!$.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&k>=0&&k<=M.height-O&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(F,k,X,O,_e.convert(He),_e.convert(Ne),de))}finally{const ze=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(_.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,F,k,X,O,de,Ee,Ie=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if(F>=0&&F<=M.width-X&&k>=0&&k<=M.height-O){Z.bindFramebuffer(_.FRAMEBUFFER,Re);const ze=M.textures[Ie],He=ze.format,Ne=ze.type;if(!$.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.bufferData(_.PIXEL_PACK_BUFFER,de.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(F,k,X,O,_e.convert(He),_e.convert(Ne),0);const st=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(_.FRAMEBUFFER,st);const mt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await M_(_,mt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,de),_.deleteBuffer($e),_.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,k=0){const X=Math.pow(2,-k),O=Math.floor(M.image.width*X),de=Math.floor(M.image.height*X),Ee=F!==null?F.x:0,Ie=F!==null?F.y:0;K.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,k,0,0,Ee,Ie,O,de),Z.unbindTexture()};const Kh=_.createFramebuffer(),jh=_.createFramebuffer();this.copyTextureToTexture=function(M,F,k=null,X=null,O=0,de=null){de===null&&(O!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=O,O=0):de=0);let Ee,Ie,Re,ze,He,Ne,$e,st,mt;const _t=M.isCompressedTexture?M.mipmaps[de]:M.image;if(k!==null)Ee=k.max.x-k.min.x,Ie=k.max.y-k.min.y,Re=k.isBox3?k.max.z-k.min.z:1,ze=k.min.x,He=k.min.y,Ne=k.isBox3?k.min.z:0;else{const Zt=Math.pow(2,-O);Ee=Math.floor(_t.width*Zt),Ie=Math.floor(_t.height*Zt),M.isDataArrayTexture?Re=_t.depth:M.isData3DTexture?Re=Math.floor(_t.depth*Zt):Re=1,ze=0,He=0,Ne=0}X!==null?($e=X.x,st=X.y,mt=X.z):($e=0,st=0,mt=0);const Ze=_e.convert(F.format),Be=_e.convert(F.type);let bt;F.isData3DTexture?(K.setTexture3D(F,0),bt=_.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),bt=_.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),bt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=_.getParameter(_.UNPACK_ROW_LENGTH),rn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Oi=_.getParameter(_.UNPACK_SKIP_PIXELS),Wt=_.getParameter(_.UNPACK_SKIP_ROWS),Mr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(_.UNPACK_SKIP_ROWS,He),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ne);const ht=M.isDataArrayTexture||M.isData3DTexture,jt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Zt=j.get(M),Dt=j.get(F),Ot=j.get(Zt.__renderTarget),yo=j.get(Dt.__renderTarget);Z.bindFramebuffer(_.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let gi=0;gi<Re;gi++)ht&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,j.get(M).__webglTexture,O,Ne+gi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,j.get(F).__webglTexture,de,mt+gi)),_.blitFramebuffer(ze,He,Ee,Ie,$e,st,Ee,Ie,_.DEPTH_BUFFER_BIT,_.NEAREST);Z.bindFramebuffer(_.READ_FRAMEBUFFER,null),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||j.has(M)){const Zt=j.get(M),Dt=j.get(F);Z.bindFramebuffer(_.READ_FRAMEBUFFER,Kh),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,jh);for(let Ot=0;Ot<Re;Ot++)ht?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Zt.__webglTexture,O,Ne+Ot):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Zt.__webglTexture,O),jt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Dt.__webglTexture,de,mt+Ot):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Dt.__webglTexture,de),O!==0?_.blitFramebuffer(ze,He,Ee,Ie,$e,st,Ee,Ie,_.COLOR_BUFFER_BIT,_.NEAREST):jt?_.copyTexSubImage3D(bt,de,$e,st,mt+Ot,ze,He,Ee,Ie):_.copyTexSubImage2D(bt,de,$e,st,ze,He,Ee,Ie);Z.bindFramebuffer(_.READ_FRAMEBUFFER,null),Z.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else jt?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(bt,de,$e,st,mt,Ee,Ie,Re,Ze,Be,_t.data):F.isCompressedArrayTexture?_.compressedTexSubImage3D(bt,de,$e,st,mt,Ee,Ie,Re,Ze,_t.data):_.texSubImage3D(bt,de,$e,st,mt,Ee,Ie,Re,Ze,Be,_t):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,de,$e,st,Ee,Ie,Ze,Be,_t.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,de,$e,st,_t.width,_t.height,Ze,_t.data):_.texSubImage2D(_.TEXTURE_2D,de,$e,st,Ee,Ie,Ze,Be,_t);_.pixelStorei(_.UNPACK_ROW_LENGTH,tt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Oi),_.pixelStorei(_.UNPACK_SKIP_ROWS,Wt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Mr),de===0&&F.generateMipmaps&&_.generateMipmap(bt),Z.unbindTexture()},this.copyTextureToTexture3D=function(M,F,k=null,X=null,O=0){return lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,k,X,O)},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){C=0,P=0,B=null,Z.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const kS={class:"blur-background"},WS={style:{display:"flex","flex-direction":"column"}},XS={class:"layout"},qS={__name:"HomeComponent",setup(n){const e=Zr(null);return Rf(()=>{const t=new Y_,i=new Yt(75,e.value.clientWidth/e.value.clientHeight,.1,1e3),r=new GS({antialias:!0,alpha:!0});r.setSize(e.value.clientWidth,e.value.clientHeight),e.value.appendChild(r.domElement);const s=new Xl(2,12,12),o=new Z_({color:16777215,wireframe:!0,roughness:.5}),a=new Sn(s,o);t.add(a);const l=new nv(16777215,1);l.position.set(5,5,5),t.add(l),l.position.set(5,5,5),t.add(l);const c=new rv(16777215,.5);t.add(c),i.position.z=6;const u=()=>{requestAnimationFrame(u),a.rotation.y+=.005,r.render(t,i)};u()}),(t,i)=>(vt(),St("div",kS,[i[1]||(i[1]=Ye("div",{class:"blur-shape pink"},null,-1)),i[2]||(i[2]=Ye("div",{class:"blur-shape purple"},null,-1)),i[3]||(i[3]=Ye("div",{class:"blur-shape blue"},null,-1)),Ye("div",WS,[Ye("div",XS,[i[0]||(i[0]=Ye("div",{class:"content"},[Ye("h1",{class:"title"},"Sreesh Poudyal"),Ye("h2",{class:"subtitle"},"Graphic Design, Software Engineering, and UI/UX Design")],-1)),Ye("div",{ref_key:"globeContainer",ref:e,class:"globe"},null,512)])])]))}},$S=pn(qS,[["__scopeId","data-v-533e4066"]]),YS=["href"],KS=["src"],jS={style:{display:"flex","flex-direction":"column",width:"100%","margin-left":"2rem"}},ZS={class:"neonHaluka"},JS={class:"neonWhite"},QS={__name:"HomeCard",props:{title:String,image:String,link:String,description:String},setup(n){return(e,t)=>(vt(),St("a",{href:n.link,class:"box"},[Ye("img",{src:n.image,class:"imageL"},null,8,KS),Ye("div",jS,[Ye("h3",ZS,Di(n.title),1),Ye("p",JS,Di(n.description),1)])],8,YS))}},eE=pn(QS,[["__scopeId","data-v-7aed76ec"]]),tE={class:"tabs",style:{"margin-bottom":"0"}},nE=["onClick"],iE={class:"container"},rE={__name:"HomeDisplayComponent",setup(n){const e=["Graphic Design","Web Development","UI/UX"],t=Zr("Graphic Design"),i=[{title:"Logo Design",image:new URL("/assets/logo_final-CwVBTyZz.webp",import.meta.url).href,link:"/logos",description:"A small collection of logos done for certain organizations I have had the pleasure of working with."},{title:"Baazar Blend Product Line",image:new URL("/assets/logo_teashop_red_background-CvSPH06a.png",import.meta.url).href,link:"/bazar",description:"A conceptualization of a brand specializing in spiced tea, including loose leaf, tea bags, cups, and other products."},{title:"Miscellaneous Designs",image:new URL("/assets/cool_leaf-02-02-D6mHwyWO.webp",import.meta.url).href,link:"/misc",description:"Little tidbits, diagrams, and illustrations that were made for fun."},{title:"Map",image:new URL("/assets/mappostermin-D3odMWe_.png",import.meta.url).href,link:"/map",description:"A large poster style map of my home nation, Nepal."}],r=[{title:"Joshua Kendall Website",image:new URL("/assets/JoshuaKendallphoto-Df50U5iI.png",import.meta.url).href,link:"https://joshuackendall.com//",description:"A series of websites for renowed author and biographer Joshua C. Kendall and his four books."},{title:"Cardinal Talent AI",image:new URL("data:image/svg+xml,%3csvg%20id='Layer_2'%20data-name='Layer%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20760.61%20594.76'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%239a303a;}.cls-2{fill:%23dd953e;}.cls-3{fill:%232c302f;}.cls-4{fill:%23bf3b47;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M727.89,586s-68.64-165.88,124.8-301.31c0,0-35-18.12-88.76,6-10.92,4.91,14.36-45.27,14.36-45.27a276.26,276.26,0,0,0-70.84,40.06c-10,7.88,4.15-39.64,4.15-39.64S674.93,258.49,649,284.23c-1,1-17.7-31.81-17.7-31.81s-37,21.26-39.89,66.93c0,0-1.38-6.54-14.83-27.26-63,49.45-71.84,96-51.27,231.81Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-2'%20d='M827.65,586l50.18-7s-29.53-48.31-61.68-59.14S827.65,586,827.65,586Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-3'%20d='M827.65,586,756,633.27s48.64-104.5,64.68-111.72Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-4'%20d='M117.21,741.26s10.7,36.35,39.56,46.77S411.26,769.43,446.24,752c3.2-1.61,132.84,6.41,209.81-18.18,18-5.75,84.46-41.43,106.92-85s40.17-112.62,57.73-127.23c3.59-3-39-62-77-53.46-6.28,30.61-44.1,71.37-44.1,71.37s-190-77.78-144.33-344c0,0-42.87,13.82-66.55,77-4.82,12.82-25.23-48.12-25.23-48.12s-19,40.17-24.49,89.81c-1.6,14.43-28.87-35.28-28.87-35.28s-19.24,40-19.24,81.79c0,1.6-40.09-11.23-40.09-11.23s-13.1,43,21.65,82.19c0,0-.8,4.54-28.47-1.2-10.56,91,15.17,131.1,142.06,223.71C415.71,734.69,117.21,741.26,117.21,741.26Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-1'%20d='M344.08,430.41c-10.56,91,15.16,131.1,142.06,223.71l101-50.25C486.24,578,385.33,528.59,344.08,430.41Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-1'%20d='M134,771.58c5.83,6.81,13.34,13,22.82,16.45,28.87,10.42,254.49-18.6,289.47-36.08,3.2-1.61,132.84,6.41,209.81-18.18,12.83-4.1,50.27-23.39,78.85-49.91-97,42.43-180.95,55.34-288.4,43.5C354.79,768.2,248.69,780.14,134,771.58Z'%20transform='translate(-117.21%20-195.47)'/%3e%3c/svg%3e",import.meta.url).href,link:"https://www.cardinaltalent.ai/",description:"A website and frontend for an AI recruiter product."},{title:"Sitesaga",image:new URL("/assets/sitesaga-BVq7Ka-J.jpg",import.meta.url).href,link:"https://www.sitesaga.com/",description:"A website all about WordPress and web hosting that I designed and created pages for."}],s=[{title:"Gymbel",image:new URL("/assets/gymbel-DJNprGre.webp",import.meta.url).href,link:"https://devpost.com/software/gymble",description:"A Tinder-like application to find gym parters, made for HackHer 2024."}],o=en(()=>t.value==="Graphic Design"?i:t.value==="Web Development"?r:t.value==="UI/UX"?s:[]);return(a,l)=>(vt(),St(Ht,null,[Ye("div",tE,[(vt(),St(Ht,null,Js(e,c=>Ye("button",{key:c,onClick:u=>t.value=c,class:uo({active:t.value===c})},Di(c),11,nE)),64))]),Ye("div",iE,[(vt(!0),St(Ht,null,Js(o.value,(c,u)=>(vt(),Yf(eE,{key:u,title:c.title,image:c.image,link:c.link,description:c.description},null,8,["title","image","link","description"]))),128))])],64))}},sE=pn(rE,[["__scopeId","data-v-d65899b7"]]),oE={style:{width:"100%",margin:"0",padding:"0",left:"0",top:"0"}},aE={__name:"HomeView",setup(n){return(e,t)=>(vt(),St("main",null,[t[0]||(t[0]=jf('<head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Newa&amp;display=swap" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tilt Neon"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href=".\\styles.css"><title>Sreesh Poudyal</title></head>',1)),Ye("body",null,[Ye("div",oE,[dt($S),dt(sE)])])]))}},lE={class:"font-section"},cE={class:"font-grid"},uE={class:"font-name"},fE={class:"font-description neonWhite"},hE=["href"],dE={__name:"Fonts",setup(n){const e=Zr([{name:"Midheim",description:"A modern, sans-serif typeface known for its clean lines and versatility.",cssFamily:"'Midheim', sans-serif",downloadLink:"/font/Midheim.ttf"},{name:"Open Sans",description:"A humanist sans-serif typeface designed for legibility across print, web, and mobile interfaces.",cssFamily:"'Open Sans', sans-serif",downloadLink:"https://fonts.google.com/specimen/Open+Sans"},{name:"Lora",description:"A well-balanced serif typeface with roots in calligraphy, perfect for body text.",cssFamily:"'Lora', serif",downloadLink:"https://fonts.google.com/specimen/Lora"},{name:"Montserrat",description:"A geometric sans-serif typeface inspired by urban typography from the early 20th century.",cssFamily:"'Montserrat', sans-serif",downloadLink:"https://fonts.google.com/specimen/Montserrat"},{name:"Merriweather",description:"A serif typeface designed for readability on screens, with a classic yet contemporary feel.",cssFamily:"'Merriweather', serif",downloadLink:"https://fonts.google.com/specimen/Merriweather"},{name:"Poppins",description:"A geometric sans-serif typeface with a clean and modern aesthetic, suitable for headlines and display text.",cssFamily:"'Poppins', sans-serif",downloadLink:"https://fonts.google.com/specimen/Poppins"}]);return(t,i)=>(vt(),St("section",lE,[Ye("div",cE,[(vt(!0),St(Ht,null,Js(e.value,r=>(vt(),St("div",{key:r.name,class:"font-card"},[Ye("h2",uE,Di(r.name),1),Ye("p",fE,Di(r.description),1),Ye("p",{class:"font-preview",style:co({fontFamily:r.cssFamily})}," The quick brown fox jumps over the lazy dog. ",4),Ye("a",{href:r.downloadLink,target:"_blank",rel:"noopener",class:"download-link"}," Download "+Di(r.name),9,hE)]))),128))])]))}},pE=pn(dE,[["__scopeId","data-v-2cb9f982"]]),mE={class:"image-grid"},gE=["onClick"],_E=["src","alt"],vE=["src"],xE={__name:"ItemGrid",props:{images:{type:Array,required:!0}},setup(n){const e=Zr(null),t=i=>{e.value=i};return(i,r)=>(vt(),St("div",null,[Ye("div",mE,[(vt(!0),St(Ht,null,Js(n.images,(s,o)=>(vt(),St("div",{key:o,class:"image-item",onClick:a=>t(s)},[Ye("img",{src:s,alt:"Image "+(o+1)},null,8,_E)],8,gE))),128))]),e.value?(vt(),St("div",{key:0,class:"modal",onClick:r[1]||(r[1]=um(s=>e.value=null,["self"]))},[Ye("span",{class:"close",onClick:r[0]||(r[0]=s=>e.value=null)},"×"),Ye("img",{class:"modal-content",src:e.value},null,8,vE)])):Lp("",!0)]))}},$l=pn(xE,[["__scopeId","data-v-be7d3618"]]),ME={style:{"margin-top":"4rem"}},SE={__name:"BazarBlend",setup(n){const e=[new URL("/assets/product-arabian-CSAPWqL2.webp",import.meta.url).href,new URL("/assets/product-assam-CJLCfvB3.webp",import.meta.url).href,new URL("/assets/product-darjeeling-C5VmlkOj.webp",import.meta.url).href,new URL("/assets/product-darjeeling-back-DNXdwwi-.webp",import.meta.url).href,new URL("/assets/product-lineup-2-CqIAkEYF.webp",import.meta.url).href,new URL("/assets/product-lineup-B-_Gyn8J.webp",import.meta.url).href];return(t,i)=>(vt(),St("div",ME,[dt($l,{images:e})]))}},EE=pn(SE,[["__scopeId","data-v-8bb5e36c"]]),yE={style:{"margin-top":"4rem"}},TE={__name:"Logos",setup(n){const e=[new URL("/assets/Untitled-3_Logo%201_back-CcTA_kLq.webp",import.meta.url).href,new URL("/assets/logo_teashop_red_background-CRlWQYrl.webp",import.meta.url).href,new URL("/assets/logo_final-CwVBTyZz.webp",import.meta.url).href,new URL("/assets/logo%20design%20final-CmGqr30q.webp",import.meta.url).href,new URL("/assets/126903761_843966036406371_2873100655496944690_n-CUeDXbbT.jpg",import.meta.url).href,new URL("/assets/logo_1-q8ycEwR7.webp",import.meta.url).href,new URL("/assets/logo_sugarloaf-BFhjPT4H.webp",import.meta.url).href,new URL("/assets/WesternMassNepaliLogo-01-D0d3aRDj.png",import.meta.url).href];return(t,i)=>(vt(),St("div",yE,[dt($l,{images:e})]))}},bE=pn(TE,[["__scopeId","data-v-b5de4186"]]),AE={class:"map-poster-page"},wE={class:"map-container"},RE=["src"],CE={__name:"Map",setup(n){const e=new URL("/assets/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered-raZyXrFQ.webp",import.meta.url).href;return(t,i)=>(vt(),St("div",AE,[Ye("div",wE,[Ye("img",{src:cn(e),class:"map-image",alt:"Map Poster"},null,8,RE)])]))}},PE=pn(CE,[["__scopeId","data-v-8d5d90b6"]]),LE={style:{"margin-top":"4rem"}},DE={__name:"Misc",setup(n){const e=[new URL("/assets/cool_leaf-02-02-D6mHwyWO.webp",import.meta.url).href,new URL("/assets/Copy%20of%20JOIN%20US%20AT-Cbzc6_sT.gif",import.meta.url).href,new URL("/assets/story-bJD6Shtf.webp",import.meta.url).href,new URL("/assets/Untitled-1-01-CnYBj5aE.webp",import.meta.url).href,new URL("/assets/127458884_696022131349534_8381611335992114089_n-C4K5k0Xe.webp",import.meta.url).href,new URL("/assets/Vintage%20Floral%20Funeral%20Invitation-DnuJhfch.webp",import.meta.url).href,new URL("/assets/sciquel-01-C3yz8x6G.webp",import.meta.url).href,new URL("/assets/layer_image-Uj2mk0HO.webp",import.meta.url).href];return(t,i)=>(vt(),St("div",LE,[dt($l,{images:e})]))}},UE=pn(DE,[["__scopeId","data-v-f9cbe6a1"]]),IE=gg({history:qm("/"),routes:[{path:"/",name:"home",component:aE},{path:"/about",name:"about",component:()=>Xc(()=>import("./AboutView-DpD3l7ib.js"),__vite__mapDeps([0,1]))},{path:"/contact",name:"contact",component:()=>Xc(()=>import("./ContactView-GGU_1OTW.js"),__vite__mapDeps([2,3]))},{path:"/fonts",name:"Fonts",component:pE},{path:"/bazar",name:"Bazar",component:EE},{path:"/logos",name:"Logos",component:bE},{path:"/map",name:"Map",component:PE},{path:"/misc",name:"Misc",component:UE}]}),Wh=dm(Rg);Wh.use(IE);Wh.mount("#app");export{Ht as F,pn as _,jf as a,Rf as b,St as c,Ye as d,vt as o};
