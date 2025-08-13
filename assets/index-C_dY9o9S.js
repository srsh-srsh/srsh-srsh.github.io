const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeCard-DcS4Nscn.js","assets/HomeCard-CRsiuhex.css","assets/AboutView-3DCj7oSh.js","assets/AboutView-JMstyZCw.css","assets/ContactView-0Gdvt5rP.js","assets/ContactView-Co82s6eN.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},ms=[],Rn=()=>{},Ud=()=>!1,Po=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ql=n=>n.startsWith("onUpdate:"),Nt=Object.assign,Kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Nd=Object.prototype.hasOwnProperty,nt=(n,e)=>Nd.call(n,e),Ge=Array.isArray,gs=n=>Do(n)==="[object Map]",Df=n=>Do(n)==="[object Set]",Xe=n=>typeof n=="function",yt=n=>typeof n=="string",Ei=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Lf=n=>(_t(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),If=Object.prototype.toString,Do=n=>If.call(n),Fd=n=>Do(n).slice(8,-1),Uf=n=>Do(n)==="[object Object]",jl=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Js=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Od=/-(\w)/g,_i=Lo(n=>n.replace(Od,(e,t)=>t?t.toUpperCase():"")),Bd=/\B([A-Z])/g,Vi=Lo(n=>n.replace(Bd,"-$1").toLowerCase()),Nf=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zo=Lo(n=>n?`on${Nf(n)}`:""),hi=(n,e)=>!Object.is(n,e),Jo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ff=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},zd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Nc;const Io=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uo(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=yt(i)?Vd(i):Uo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(yt(n)||_t(n))return n}const Hd=/;(?![^(]*\))/g,kd=/:([^]+)/,Gd=/\/\*[^]*?\*\//g;function Vd(n){const e={};return n.replace(Gd,"").split(Hd).forEach(t=>{if(t){const i=t.split(kd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function No(n){let e="";if(yt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=No(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xd=Yl(Wd);function Of(n){return!!n||n===""}const Bf=n=>!!(n&&n.__v_isRef===!0),_s=n=>yt(n)?n:n==null?"":Ge(n)||_t(n)&&(n.toString===If||!Xe(n.toString))?Bf(n)?_s(n.value):JSON.stringify(n,zf,2):String(n),zf=(n,e)=>Bf(e)?zf(n,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Qo(i,r)+" =>"]=s,t),{})}:Df(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qo(t))}:Ei(e)?Qo(e):_t(e)&&!Ge(e)&&!Uf(e)?String(e):e,Qo=(n,e="")=>{var t;return Ei(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class Yd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){++this._on===1&&(this.prevScope=Xt,Xt=this)}off(){this._on>0&&--this._on===0&&(Xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qd(){return Xt}let dt;const $o=new WeakSet;class Hf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$o.has(this)&&($o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fc(this),Vf(this);const e=dt,t=_n;dt=this,_n=!0;try{return this.fn()}finally{Wf(this),dt=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ql(e);this.deps=this.depsTail=void 0,Fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Va(this)&&this.run()}get dirty(){return Va(this)}}let kf=0,Qs,$s;function Gf(n,e=!1){if(n.flags|=8,e){n.next=$s,$s=n;return}n.next=Qs,Qs=n}function Zl(){kf++}function Jl(){if(--kf>0)return;if($s){let e=$s;for($s=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Qs;){let e=Qs;for(Qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Vf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ql(i),Kd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Va(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===rr)||(n.globalVersion=rr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Va(n))))return;n.flags|=2;const e=n.dep,t=dt,i=_n;dt=n,_n=!0;try{Vf(n);const s=n.fn(n._value);(e.version===0||hi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{dt=t,_n=i,Wf(n),n.flags&=-3}}function Ql(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ql(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Kd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const Yf=[];function Kn(){Yf.push(_n),_n=!1}function jn(){const n=Yf.pop();_n=n===void 0?!0:n}function Fc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=dt;dt=void 0;try{e()}finally{dt=t}}}let rr=0;class jd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!dt||!_n||dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==dt)t=this.activeLink=new jd(dt,this),dt.deps?(t.prevDep=dt.depsTail,dt.depsTail.nextDep=t,dt.depsTail=t):dt.deps=dt.depsTail=t,qf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=dt.depsTail,t.nextDep=void 0,dt.depsTail.nextDep=t,dt.depsTail=t,dt.deps===t&&(dt.deps=i)}return t}trigger(e){this.version++,rr++,this.notify(e)}notify(e){Zl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jl()}}}function qf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Wa=new WeakMap,zi=Symbol(""),Xa=Symbol(""),or=Symbol("");function Lt(n,e,t){if(_n&&dt){let i=Wa.get(n);i||Wa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new $l),s.map=i,s.key=t),s.track()}}function kn(n,e,t,i,s,r){const o=Wa.get(n);if(!o){rr++;return}const a=l=>{l&&l.trigger()};if(Zl(),e==="clear")o.forEach(a);else{const l=Ge(n),c=l&&jl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===or||!Ei(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zi)),gs(n)&&a(o.get(Xa)));break;case"delete":l||(a(o.get(zi)),gs(n)&&a(o.get(Xa)));break;case"set":gs(n)&&a(o.get(zi));break}}Jl()}function Yi(n){const e=tt(n);return e===n?e:(Lt(e,"iterate",or),un(n)?e:e.map(Ct))}function Fo(n){return Lt(n=tt(n),"iterate",or),n}const Zd={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,Ct)},concat(...n){return Yi(this).concat(...n.map(e=>Ge(e)?Yi(e):e))},entries(){return ea(this,"entries",n=>(n[1]=Ct(n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(Ct),arguments)},find(n,e){return Ln(this,"find",n,e,Ct,arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,Ct,arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return ta(this,"includes",n)},indexOf(...n){return ta(this,"indexOf",n)},join(n){return Yi(this).join(n)},lastIndexOf(...n){return ta(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...n){return Os(this,"push",n)},reduce(n,...e){return Oc(this,"reduce",n,e)},reduceRight(n,...e){return Oc(this,"reduceRight",n,e)},shift(){return Os(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return Os(this,"splice",n)},toReversed(){return Yi(this).toReversed()},toSorted(n){return Yi(this).toSorted(n)},toSpliced(...n){return Yi(this).toSpliced(...n)},unshift(...n){return Os(this,"unshift",n)},values(){return ea(this,"values",Ct)}};function ea(n,e,t){const i=Fo(n),s=i[e]();return i!==n&&!un(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Jd=Array.prototype;function Ln(n,e,t,i,s,r){const o=Fo(n),a=o!==n&&!un(n),l=o[e];if(l!==Jd[e]){const f=l.apply(n,r);return a?Ct(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ct(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Oc(n,e,t,i){const s=Fo(n);let r=t;return s!==n&&(un(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Ct(a),l,n)}),s[e](r,...i)}function ta(n,e,t){const i=tt(n);Lt(i,"iterate",or);const s=i[e](...t);return(s===-1||s===!1)&&nc(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function Os(n,e,t=[]){Kn(),Zl();const i=tt(n)[e].apply(n,t);return Jl(),jn(),i}const Qd=Yl("__proto__,__v_isRef,__isVue"),Kf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ei));function $d(n){Ei(n)||(n=String(n));const e=tt(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class jf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?cp:$f:r?Qf:Jf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let l;if(o&&(l=Zd[t]))return l;if(t==="hasOwnProperty")return $d}const a=Reflect.get(e,t,Ut(e)?e:i);return(Ei(t)?Kf.has(t):Qd(t))||(s||Lt(e,"get",t),r)?a:Ut(a)?o&&jl(t)?a:a.value:_t(a)?s?th(a):Oo(a):a}}class Zf extends jf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=vi(r);if(!un(i)&&!vi(i)&&(r=tt(r),i=tt(i)),!Ge(e)&&Ut(r)&&!Ut(i))return l?!1:(r.value=i,!0)}const o=Ge(e)&&jl(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Ut(e)?e:s);return e===tt(s)&&(o?hi(i,r)&&kn(e,"set",t,i):kn(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&kn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ei(t)||!Kf.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Ge(e)?"length":zi),Reflect.ownKeys(e)}}class ep extends jf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const tp=new Zf,np=new ep,ip=new Zf(!0);const Ya=n=>n,br=n=>Reflect.getPrototypeOf(n);function sp(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=gs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ya:e?_o:Ct;return!e&&Lt(r,"iterate",l?Xa:zi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Tr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function rp(n,e){const t={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);n||(hi(s,a)&&Lt(o,"get",s),Lt(o,"get",a));const{has:l}=br(o),c=e?Ya:n?_o:Ct;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Lt(tt(s),"iterate",zi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return n||(hi(s,a)&&Lt(o,"has",s),Lt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?Ya:n?_o:Ct;return!n&&Lt(l,"iterate",zi),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Nt(t,n?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){!e&&!un(s)&&!vi(s)&&(s=tt(s));const r=tt(this);return br(r).has.call(r,s)||(r.add(s),kn(r,"add",s,s)),this},set(s,r){!e&&!un(r)&&!vi(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=br(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?hi(r,u)&&kn(o,"set",s,r):kn(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=br(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&kn(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=sp(s,n,e)}),t}function ec(n,e){const t=rp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const op={get:ec(!1,!1)},ap={get:ec(!1,!0)},lp={get:ec(!0,!1)};const Jf=new WeakMap,Qf=new WeakMap,$f=new WeakMap,cp=new WeakMap;function up(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fp(n){return n.__v_skip||!Object.isExtensible(n)?0:up(Fd(n))}function Oo(n){return vi(n)?n:tc(n,!1,tp,op,Jf)}function eh(n){return tc(n,!1,ip,ap,Qf)}function th(n){return tc(n,!0,np,lp,$f)}function tc(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=fp(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function vs(n){return vi(n)?vs(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function nc(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function hp(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Ff(n,"__v_skip",!0),n}const Ct=n=>_t(n)?Oo(n):n,_o=n=>_t(n)?th(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function en(n){return nh(n,!1)}function dp(n){return nh(n,!0)}function nh(n,e){return Ut(n)?n:new pp(n,e)}class pp{constructor(e,t){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Ct(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||un(e)||vi(e);e=i?e:tt(e),hi(e,t)&&(this._rawValue=e,this._value=i?e:Ct(e),this.dep.trigger())}}function cn(n){return Ut(n)?n.value:n}const mp={get:(n,e,t)=>e==="__v_raw"?n:cn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ut(s)&&!Ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ih(n){return vs(n)?n:new Proxy(n,mp)}class gp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return Gf(this,!0),!0}get value(){const e=this.dep.track();return Xf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _p(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new gp(i,s,t)}const wr={},vo=new WeakMap;let Ii;function vp(n,e=!1,t=Ii){if(t){let i=vo.get(t);i||vo.set(t,i=[]),i.push(n)}}function xp(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:un(M)||s===!1||s===0?ui(M,1):ui(M);let u,f,h,d,_=!1,v=!1;if(Ut(n)?(f=()=>n.value,_=un(n)):vs(n)?(f=()=>c(n),_=!0):Ge(n)?(v=!0,_=n.some(M=>vs(M)||un(M)),f=()=>n.map(M=>{if(Ut(M))return M.value;if(vs(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Kn();try{h()}finally{jn()}}const M=Ii;Ii=u;try{return l?l(n,3,[d]):n(d)}finally{Ii=M}}:f=Rn,e&&s){const M=f,U=s===!0?1/0:s;f=()=>ui(M(),U)}const m=qd(),p=()=>{u.stop(),m&&m.active&&Kl(m.effects,u)};if(r&&e){const M=e;e=(...U)=>{M(...U),p()}}let T=v?new Array(n.length).fill(wr):wr;const A=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const U=u.run();if(s||_||(v?U.some((P,C)=>hi(P,T[C])):hi(U,T))){h&&h();const P=Ii;Ii=u;try{const C=[U,T===wr?void 0:v&&T[0]===wr?[]:T,d];T=U,l?l(e,3,C):e(...C)}finally{Ii=P}}}else u.run()};return a&&a(A),u=new Hf(f),u.scheduler=o?()=>o(A,!1):A,d=M=>vp(M,!1,u),h=u.onStop=()=>{const M=vo.get(u);if(M){if(l)l(M,4);else for(const U of M)U();vo.delete(u)}},e?i?A(!0):T=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ui(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ut(n))ui(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(Df(n)||gs(n))n.forEach(i=>{ui(i,e,t)});else if(Uf(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(n,e,t,i){try{return i?n(...i):n()}catch(s){vr(s,e,t)}}function Cn(n,e,t,i){if(Xe(n)){const s=_r(n,e,t,i);return s&&Lf(s)&&s.catch(r=>{vr(r,e,t)}),s}if(Ge(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],e,t,i));return s}}function vr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Kn(),_r(r,null,10,[n,l,c]),jn();return}}Sp(n,t,s,i,o)}function Sp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Ht=[];let En=-1;const xs=[];let oi=null,fs=0;const sh=Promise.resolve();let xo=null;function rh(n){const e=xo||sh;return n?e.then(this?n.bind(this):n):e}function Mp(n){let e=En+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,s=Ht[i],r=ar(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ic(n){if(!(n.flags&1)){const e=ar(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=ar(t)?Ht.push(n):Ht.splice(Mp(e),0,n),n.flags|=1,oh()}}function oh(){xo||(xo=sh.then(lh))}function Ep(n){Ge(n)?xs.push(...n):oi&&n.id===-1?oi.splice(fs+1,0,n):n.flags&1||(xs.push(n),n.flags|=1),oh()}function Bc(n,e,t=En+1){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ah(n){if(xs.length){const e=[...new Set(xs)].sort((t,i)=>ar(t)-ar(i));if(xs.length=0,oi){oi.push(...e);return}for(oi=e,fs=0;fs<oi.length;fs++){const t=oi[fs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}oi=null,fs=0}}const ar=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lh(n){try{for(En=0;En<Ht.length;En++){const e=Ht[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ht.length;En++){const e=Ht[En];e&&(e.flags&=-2)}En=-1,Ht.length=0,ah(),xo=null,(Ht.length||xs.length)&&lh()}}let Tn=null,ch=null;function So(n){const e=Tn;return Tn=n,ch=n&&n.type.__scopeId||null,e}function to(n,e=Tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Kc(-1);const r=So(e);let o;try{o=n(...s)}finally{So(r),i._d&&Kc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function bi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Kn(),Cn(l,t,8,[n.el,a,n,e]),jn())}}const yp=Symbol("_vte"),Ap=n=>n.__isTeleport;function sc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,sc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function rc(n,e){return Xe(n)?Nt({name:n.name},e,{setup:n}):n}function oc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mo(n,e,t,i,s=!1){if(Ge(n)){n.forEach((_,v)=>Mo(_,e&&(Ge(e)?e[v]:e),t,i,s));return}if(er(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?hc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,f=a.setupState,h=tt(f),d=f===pt?()=>!1:_=>nt(h,_);if(c!=null&&c!==l&&(yt(c)?(u[c]=null,d(c)&&(f[c]=null)):Ut(c)&&(c.value=null)),Xe(l))_r(l,a,12,[o,u]);else{const _=yt(l),v=Ut(l);if(_||v){const m=()=>{if(n.f){const p=_?d(l)?f[l]:u[l]:l.value;s?Ge(p)&&Kl(p,r):Ge(p)?p.includes(r)||p.push(r):_?(u[l]=[r],d(l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Qt(m,t)):m()}}}const zc=n=>n.nodeType===8;Io().requestIdleCallback;Io().cancelIdleCallback;function bp(n,e){if(zc(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(zc(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const er=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Tp(n){Xe(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let _;return c||(_=c=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((m,p)=>{l(v,()=>m(h()),()=>p(v),f+1)});throw v}).then(v=>_!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),u=v,v)))};return rc({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(_,v,m){const p=r?()=>{const A=r(()=>{m()},M=>bp(_,M));A&&(v.bum||(v.bum=[])).push(A),(v.u||(v.u=[])).push(()=>!0)}:m;u?p():d().then(()=>!v.isUnmounted&&p())},get __asyncResolved(){return u},setup(){const _=It;if(oc(_),u)return()=>na(u,_);const v=A=>{c=null,vr(A,_,13,!i)};if(a&&_.suspense||Ts)return d().then(A=>()=>na(A,_)).catch(A=>(v(A),()=>i?lt(i,{error:A}):null));const m=en(!1),p=en(),T=en(!!s);return s&&setTimeout(()=>{T.value=!1},s),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const A=new Error(`Async component timed out after ${o}ms.`);v(A),p.value=A}},o),d().then(()=>{m.value=!0,_.parent&&ac(_.parent.vnode)&&_.parent.update()}).catch(A=>{v(A),p.value=A}),()=>{if(m.value&&u)return na(u,_);if(p.value&&i)return lt(i,{error:p.value});if(t&&!T.value)return lt(t)}}})}function na(n,e){const{ref:t,props:i,children:s,ce:r}=e.vnode,o=lt(n,i,s);return o.ref=t,o.ce=r,delete e.vnode.ce,o}const ac=n=>n.type.__isKeepAlive;function wp(n,e){uh(n,"a",e)}function Rp(n,e){uh(n,"da",e)}function uh(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Bo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ac(s.parent.vnode)&&Cp(i,e,t,s),s=s.parent}}function Cp(n,e,t,i){const s=Bo(e,n,i,!0);fh(()=>{Kl(i[e],s)},t)}function Bo(n,e,t=It,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Kn();const a=xr(t),l=Cn(e,t,n,o);return a(),jn(),l});return i?s.unshift(r):s.push(r),r}}const Qn=n=>(e,t=It)=>{(!Ts||n==="sp")&&Bo(n,(...i)=>e(...i),t)},Pp=Qn("bm"),lc=Qn("m"),Dp=Qn("bu"),Lp=Qn("u"),Ip=Qn("bum"),fh=Qn("um"),Up=Qn("sp"),Np=Qn("rtg"),Fp=Qn("rtc");function Op(n,e=It){Bo("ec",n,e)}const Bp=Symbol.for("v-ndc");function lr(n,e,t,i){let s;const r=t,o=Ge(n);if(o||yt(n)){const a=o&&vs(n);let l=!1,c=!1;a&&(l=!un(n),c=vi(n),n=Fo(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?_o(Ct(n[u])):Ct(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(_t(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const qa=n=>n?Lh(n)?hc(n):qa(n.parent):null,tr=Nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qa(n.parent),$root:n=>qa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dh(n),$forceUpdate:n=>n.f||(n.f=()=>{ic(n.update)}),$nextTick:n=>n.n||(n.n=rh.bind(n.proxy)),$watch:n=>rm.bind(n)}),ia=(n,e)=>n!==pt&&!n.__isScriptSetup&&nt(n,e),zp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ia(i,e))return o[e]=1,i[e];if(s!==pt&&nt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,r[e];if(t!==pt&&nt(t,e))return o[e]=4,t[e];Ka&&(o[e]=0)}}const u=tr[e];let f,h;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==pt&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ia(s,e)?(s[e]=t,!0):i!==pt&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==pt&&nt(n,o)||ia(e,o)||(a=r[0])&&nt(a,o)||nt(i,o)||nt(tr,o)||nt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hc(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ka=!0;function Hp(n){const e=dh(n),t=n.proxy,i=n.ctx;Ka=!1,e.beforeCreate&&kc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:A,unmounted:M,render:U,renderTracked:P,renderTriggered:C,errorCaptured:B,serverPrefetch:b,expose:y,inheritAttrs:L,components:z,directives:G,filters:te}=e;if(c&&kp(c,i,null),o)for(const se in o){const H=o[se];Xe(H)&&(i[se]=H.bind(t))}if(s){const se=s.call(t,t);_t(se)&&(n.data=Oo(se))}if(Ka=!0,r)for(const se in r){const H=r[se],me=Xe(H)?H.bind(t,t):Xe(H.get)?H.get.bind(t,t):Rn,xe=!Xe(H)&&Xe(H.set)?H.set.bind(t):Rn,Ce=an({get:me,set:xe});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Fe=>Ce.value=Fe})}if(a)for(const se in a)hh(a[se],i,t,se);if(l){const se=Xe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(H=>{no(H,se[H])})}u&&kc(u,n,"c");function Y(se,H){Ge(H)?H.forEach(me=>se(me.bind(t))):H&&se(H.bind(t))}if(Y(Pp,f),Y(lc,h),Y(Dp,d),Y(Lp,_),Y(wp,v),Y(Rp,m),Y(Op,B),Y(Fp,P),Y(Np,C),Y(Ip,T),Y(fh,M),Y(Up,b),Ge(y))if(y.length){const se=n.exposed||(n.exposed={});y.forEach(H=>{Object.defineProperty(se,H,{get:()=>t[H],set:me=>t[H]=me})})}else n.exposed||(n.exposed={});U&&n.render===Rn&&(n.render=U),L!=null&&(n.inheritAttrs=L),z&&(n.components=z),G&&(n.directives=G),b&&oc(n)}function kp(n,e,t=Rn){Ge(n)&&(n=ja(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=Yn(s.from||i,s.default,!0):r=Yn(s.from||i):r=Yn(s),Ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function kc(n,e,t){Cn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function hh(n,e,t,i){let s=i.includes(".")?Th(t,i):()=>t[i];if(yt(n)){const r=e[n];Xe(r)&&io(s,r)}else if(Xe(n))io(s,n.bind(t));else if(_t(n))if(Ge(n))n.forEach(r=>hh(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&io(s,r,n)}}function dh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Eo(l,c,o,!0)),Eo(l,e,o)),_t(e)&&r.set(e,l),l}function Eo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Eo(n,r,t,!0),s&&s.forEach(o=>Eo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Gp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Gp={data:Gc,props:Vc,emits:Vc,methods:Ks,computed:Ks,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Ks,directives:Ks,watch:Wp,provide:Gc,inject:Vp};function Gc(n,e){return e?n?function(){return Nt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Vp(n,e){return Ks(ja(n),ja(e))}function ja(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ks(n,e){return n?Nt(Object.create(null),n,e):e}function Vc(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Nt(Object.create(null),Hc(n),Hc(e??{})):e}function Wp(n,e){if(!n)return e;if(!e)return n;const t=Nt(Object.create(null),n);for(const i in e)t[i]=Bt(n[i],e[i]);return t}function ph(){return{app:null,config:{isNativeTag:Ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xp=0;function Yp(n,e){return function(i,s=null){Xe(i)||(i=Nt({},i)),s!=null&&!_t(s)&&(s=null);const r=ph(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Xp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Tm,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||lt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,hc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ss;Ss=c;try{return u()}finally{Ss=f}}};return c}}let Ss=null;function no(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function Yn(n,e,t=!1){const i=It||Tn;if(i||Ss){let s=Ss?Ss._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const mh={},gh=()=>Object.create(mh),_h=n=>Object.getPrototypeOf(n)===mh;function qp(n,e,t,i=!1){const s={},r=gh();n.propsDefaults=Object.create(null),vh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:eh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Kp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(zo(n.emitsOptions,h))continue;const d=e[h];if(l)if(nt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=_i(h);s[_]=Za(l,a,_,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{vh(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=Vi(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Za(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!nt(e,f))&&(delete r[f],c=!0)}c&&kn(n.attrs,"set","")}function vh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Js(l))continue;const c=e[l];let u;s&&nt(s,u=_i(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:zo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||pt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Za(s,l,f,c[f],n,!nt(c,f))}}return o}function Za(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=xr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Vi(t))&&(i=!0))}return i}const jp=new WeakMap;function xh(n,e,t=!1){const i=t?jp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,d]=xh(f,e,!0);Nt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,ms),ms;if(Ge(r))for(let u=0;u<r.length;u++){const f=_i(r[u]);Wc(f)&&(o[f]=pt)}else if(r)for(const u in r){const f=_i(u);if(Wc(f)){const h=r[u],d=o[f]=Ge(h)||Xe(h)?{type:h}:Nt({},h),_=d.type;let v=!1,m=!0;if(Ge(_))for(let p=0;p<_.length;++p){const T=_[p],A=Xe(T)&&T.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Xe(_)&&_.name==="Boolean";d[0]=v,d[1]=m,(v||nt(d,"default"))&&a.push(f)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function Wc(n){return n[0]!=="$"&&!Js(n)}const cc=n=>n[0]==="_"||n==="$stable",uc=n=>Ge(n)?n.map(yn):[yn(n)],Zp=(n,e,t)=>{if(e._n)return e;const i=to((...s)=>uc(e(...s)),t);return i._c=!1,i},Sh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(cc(s))continue;const r=n[s];if(Xe(r))e[s]=Zp(s,r,i);else if(r!=null){const o=uc(r);e[s]=()=>o}}},Mh=(n,e)=>{const t=uc(e);n.slots.default=()=>t},Eh=(n,e,t)=>{for(const i in e)(t||!cc(i))&&(n[i]=e[i])},Jp=(n,e,t)=>{const i=n.slots=gh();if(n.vnode.shapeFlag&32){const s=e._;s?(Eh(i,e,t),t&&Ff(i,"_",s,!0)):Sh(e,i)}else e&&Mh(n,e)},Qp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Eh(s,e,t):(r=!e.$stable,Sh(e,s)),o=e}else e&&(Mh(n,e),o={default:1});if(r)for(const a in s)!cc(a)&&o[a]==null&&delete s[a]},Qt=hm;function $p(n){return em(n)}function em(n,e){const t=Io();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Rn,insertStaticContent:_}=n,v=(w,R,x,ee=null,K=null,j=null,Q=void 0,re=null,J=!!R.dynamicChildren)=>{if(w===R)return;w&&!Bs(w,R)&&(ee=N(w),Fe(w,K,j,!0),w=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:Z,ref:Se,shapeFlag:E}=R;switch(Z){case Ho:m(w,R,x,ee);break;case xi:p(w,R,x,ee);break;case so:w==null&&T(R,x,ee,Q);break;case Yt:z(w,R,x,ee,K,j,Q,re,J);break;default:E&1?U(w,R,x,ee,K,j,Q,re,J):E&6?G(w,R,x,ee,K,j,Q,re,J):(E&64||E&128)&&Z.process(w,R,x,ee,K,j,Q,re,J,le)}Se!=null&&K&&Mo(Se,w&&w.ref,j,R||w,!R)},m=(w,R,x,ee)=>{if(w==null)i(R.el=a(R.children),x,ee);else{const K=R.el=w.el;R.children!==w.children&&c(K,R.children)}},p=(w,R,x,ee)=>{w==null?i(R.el=l(R.children||""),x,ee):R.el=w.el},T=(w,R,x,ee)=>{[w.el,w.anchor]=_(w.children,R,x,ee,w.el,w.anchor)},A=({el:w,anchor:R},x,ee)=>{let K;for(;w&&w!==R;)K=h(w),i(w,x,ee),w=K;i(R,x,ee)},M=({el:w,anchor:R})=>{let x;for(;w&&w!==R;)x=h(w),s(w),w=x;s(R)},U=(w,R,x,ee,K,j,Q,re,J)=>{R.type==="svg"?Q="svg":R.type==="math"&&(Q="mathml"),w==null?P(R,x,ee,K,j,Q,re,J):b(w,R,K,j,Q,re,J)},P=(w,R,x,ee,K,j,Q,re)=>{let J,Z;const{props:Se,shapeFlag:E,transition:g,dirs:D}=w;if(J=w.el=o(w.type,j,Se&&Se.is,Se),E&8?u(J,w.children):E&16&&B(w.children,J,null,ee,K,sa(w,j),Q,re),D&&bi(w,null,ee,"created"),C(J,w,w.scopeId,Q,ee),Se){for(const $ in Se)$!=="value"&&!Js($)&&r(J,$,null,Se[$],j,ee);"value"in Se&&r(J,"value",null,Se.value,j),(Z=Se.onVnodeBeforeMount)&&Mn(Z,ee,w)}D&&bi(w,null,ee,"beforeMount");const W=tm(K,g);W&&g.beforeEnter(J),i(J,R,x),((Z=Se&&Se.onVnodeMounted)||W||D)&&Qt(()=>{Z&&Mn(Z,ee,w),W&&g.enter(J),D&&bi(w,null,ee,"mounted")},K)},C=(w,R,x,ee,K)=>{if(x&&d(w,x),ee)for(let j=0;j<ee.length;j++)d(w,ee[j]);if(K){let j=K.subTree;if(R===j||Rh(j.type)&&(j.ssContent===R||j.ssFallback===R)){const Q=K.vnode;C(w,Q,Q.scopeId,Q.slotScopeIds,K.parent)}}},B=(w,R,x,ee,K,j,Q,re,J=0)=>{for(let Z=J;Z<w.length;Z++){const Se=w[Z]=re?ai(w[Z]):yn(w[Z]);v(null,Se,R,x,ee,K,j,Q,re)}},b=(w,R,x,ee,K,j,Q)=>{const re=R.el=w.el;let{patchFlag:J,dynamicChildren:Z,dirs:Se}=R;J|=w.patchFlag&16;const E=w.props||pt,g=R.props||pt;let D;if(x&&Ti(x,!1),(D=g.onVnodeBeforeUpdate)&&Mn(D,x,R,w),Se&&bi(R,w,x,"beforeUpdate"),x&&Ti(x,!0),(E.innerHTML&&g.innerHTML==null||E.textContent&&g.textContent==null)&&u(re,""),Z?y(w.dynamicChildren,Z,re,x,ee,sa(R,K),j):Q||H(w,R,re,null,x,ee,sa(R,K),j,!1),J>0){if(J&16)L(re,E,g,x,K);else if(J&2&&E.class!==g.class&&r(re,"class",null,g.class,K),J&4&&r(re,"style",E.style,g.style,K),J&8){const W=R.dynamicProps;for(let $=0;$<W.length;$++){const V=W[$],ye=E[V],pe=g[V];(pe!==ye||V==="value")&&r(re,V,ye,pe,K,x)}}J&1&&w.children!==R.children&&u(re,R.children)}else!Q&&Z==null&&L(re,E,g,x,K);((D=g.onVnodeUpdated)||Se)&&Qt(()=>{D&&Mn(D,x,R,w),Se&&bi(R,w,x,"updated")},ee)},y=(w,R,x,ee,K,j,Q)=>{for(let re=0;re<R.length;re++){const J=w[re],Z=R[re],Se=J.el&&(J.type===Yt||!Bs(J,Z)||J.shapeFlag&198)?f(J.el):x;v(J,Z,Se,null,ee,K,j,Q,!0)}},L=(w,R,x,ee,K)=>{if(R!==x){if(R!==pt)for(const j in R)!Js(j)&&!(j in x)&&r(w,j,R[j],null,K,ee);for(const j in x){if(Js(j))continue;const Q=x[j],re=R[j];Q!==re&&j!=="value"&&r(w,j,re,Q,K,ee)}"value"in x&&r(w,"value",R.value,x.value,K)}},z=(w,R,x,ee,K,j,Q,re,J)=>{const Z=R.el=w?w.el:a(""),Se=R.anchor=w?w.anchor:a("");let{patchFlag:E,dynamicChildren:g,slotScopeIds:D}=R;D&&(re=re?re.concat(D):D),w==null?(i(Z,x,ee),i(Se,x,ee),B(R.children||[],x,Se,K,j,Q,re,J)):E>0&&E&64&&g&&w.dynamicChildren?(y(w.dynamicChildren,g,x,K,j,Q,re),(R.key!=null||K&&R===K.subTree)&&yh(w,R,!0)):H(w,R,x,Se,K,j,Q,re,J)},G=(w,R,x,ee,K,j,Q,re,J)=>{R.slotScopeIds=re,w==null?R.shapeFlag&512?K.ctx.activate(R,x,ee,Q,J):te(R,x,ee,K,j,Q,J):ae(w,R,J)},te=(w,R,x,ee,K,j,Q)=>{const re=w.component=Sm(w,ee,K);if(ac(w)&&(re.ctx.renderer=le),Mm(re,!1,Q),re.asyncDep){if(K&&K.registerDep(re,Y,Q),!w.el){const J=re.subTree=lt(xi);p(null,J,R,x)}}else Y(re,w,R,x,K,j,Q)},ae=(w,R,x)=>{const ee=R.component=w.component;if(um(w,R,x))if(ee.asyncDep&&!ee.asyncResolved){se(ee,R,x);return}else ee.next=R,ee.update();else R.el=w.el,ee.vnode=R},Y=(w,R,x,ee,K,j,Q)=>{const re=()=>{if(w.isMounted){let{next:E,bu:g,u:D,parent:W,vnode:$}=w;{const we=Ah(w);if(we){E&&(E.el=$.el,se(w,E,Q)),we.asyncDep.then(()=>{w.isUnmounted||re()});return}}let V=E,ye;Ti(w,!1),E?(E.el=$.el,se(w,E,Q)):E=$,g&&Jo(g),(ye=E.props&&E.props.onVnodeBeforeUpdate)&&Mn(ye,W,E,$),Ti(w,!0);const pe=Yc(w),Ae=w.subTree;w.subTree=pe,v(Ae,pe,f(Ae.el),N(Ae),w,K,j),E.el=pe.el,V===null&&fm(w,pe.el),D&&Qt(D,K),(ye=E.props&&E.props.onVnodeUpdated)&&Qt(()=>Mn(ye,W,E,$),K)}else{let E;const{el:g,props:D}=R,{bm:W,m:$,parent:V,root:ye,type:pe}=w,Ae=er(R);Ti(w,!1),W&&Jo(W),!Ae&&(E=D&&D.onVnodeBeforeMount)&&Mn(E,V,R),Ti(w,!0);{ye.ce&&ye.ce._injectChildStyle(pe);const we=w.subTree=Yc(w);v(null,we,x,ee,w,K,j),R.el=we.el}if($&&Qt($,K),!Ae&&(E=D&&D.onVnodeMounted)){const we=R;Qt(()=>Mn(E,V,we),K)}(R.shapeFlag&256||V&&er(V.vnode)&&V.vnode.shapeFlag&256)&&w.a&&Qt(w.a,K),w.isMounted=!0,R=x=ee=null}};w.scope.on();const J=w.effect=new Hf(re);w.scope.off();const Z=w.update=J.run.bind(J),Se=w.job=J.runIfDirty.bind(J);Se.i=w,Se.id=w.uid,J.scheduler=()=>ic(Se),Ti(w,!0),Z()},se=(w,R,x)=>{R.component=w;const ee=w.vnode.props;w.vnode=R,w.next=null,Kp(w,R.props,ee,x),Qp(w,R.children,x),Kn(),Bc(w),jn()},H=(w,R,x,ee,K,j,Q,re,J=!1)=>{const Z=w&&w.children,Se=w?w.shapeFlag:0,E=R.children,{patchFlag:g,shapeFlag:D}=R;if(g>0){if(g&128){xe(Z,E,x,ee,K,j,Q,re,J);return}else if(g&256){me(Z,E,x,ee,K,j,Q,re,J);return}}D&8?(Se&16&&be(Z,K,j),E!==Z&&u(x,E)):Se&16?D&16?xe(Z,E,x,ee,K,j,Q,re,J):be(Z,K,j,!0):(Se&8&&u(x,""),D&16&&B(E,x,ee,K,j,Q,re,J))},me=(w,R,x,ee,K,j,Q,re,J)=>{w=w||ms,R=R||ms;const Z=w.length,Se=R.length,E=Math.min(Z,Se);let g;for(g=0;g<E;g++){const D=R[g]=J?ai(R[g]):yn(R[g]);v(w[g],D,x,null,K,j,Q,re,J)}Z>Se?be(w,K,j,!0,!1,E):B(R,x,ee,K,j,Q,re,J,E)},xe=(w,R,x,ee,K,j,Q,re,J)=>{let Z=0;const Se=R.length;let E=w.length-1,g=Se-1;for(;Z<=E&&Z<=g;){const D=w[Z],W=R[Z]=J?ai(R[Z]):yn(R[Z]);if(Bs(D,W))v(D,W,x,null,K,j,Q,re,J);else break;Z++}for(;Z<=E&&Z<=g;){const D=w[E],W=R[g]=J?ai(R[g]):yn(R[g]);if(Bs(D,W))v(D,W,x,null,K,j,Q,re,J);else break;E--,g--}if(Z>E){if(Z<=g){const D=g+1,W=D<Se?R[D].el:ee;for(;Z<=g;)v(null,R[Z]=J?ai(R[Z]):yn(R[Z]),x,W,K,j,Q,re,J),Z++}}else if(Z>g)for(;Z<=E;)Fe(w[Z],K,j,!0),Z++;else{const D=Z,W=Z,$=new Map;for(Z=W;Z<=g;Z++){const De=R[Z]=J?ai(R[Z]):yn(R[Z]);De.key!=null&&$.set(De.key,Z)}let V,ye=0;const pe=g-W+1;let Ae=!1,we=0;const ue=new Array(pe);for(Z=0;Z<pe;Z++)ue[Z]=0;for(Z=D;Z<=E;Z++){const De=w[Z];if(ye>=pe){Fe(De,K,j,!0);continue}let Le;if(De.key!=null)Le=$.get(De.key);else for(V=W;V<=g;V++)if(ue[V-W]===0&&Bs(De,R[V])){Le=V;break}Le===void 0?Fe(De,K,j,!0):(ue[Le-W]=Z+1,Le>=we?we=Le:Ae=!0,v(De,R[Le],x,null,K,j,Q,re,J),ye++)}const Te=Ae?nm(ue):ms;for(V=Te.length-1,Z=pe-1;Z>=0;Z--){const De=W+Z,Le=R[De],_e=De+1<Se?R[De+1].el:ee;ue[Z]===0?v(null,Le,x,_e,K,j,Q,re,J):Ae&&(V<0||Z!==Te[V]?Ce(Le,x,_e,2):V--)}}},Ce=(w,R,x,ee,K=null)=>{const{el:j,type:Q,transition:re,children:J,shapeFlag:Z}=w;if(Z&6){Ce(w.component.subTree,R,x,ee);return}if(Z&128){w.suspense.move(R,x,ee);return}if(Z&64){Q.move(w,R,x,le);return}if(Q===Yt){i(j,R,x);for(let E=0;E<J.length;E++)Ce(J[E],R,x,ee);i(w.anchor,R,x);return}if(Q===so){A(w,R,x);return}if(ee!==2&&Z&1&&re)if(ee===0)re.beforeEnter(j),i(j,R,x),Qt(()=>re.enter(j),K);else{const{leave:E,delayLeave:g,afterLeave:D}=re,W=()=>{w.ctx.isUnmounted?s(j):i(j,R,x)},$=()=>{E(j,()=>{W(),D&&D()})};g?g(j,W,$):$()}else i(j,R,x)},Fe=(w,R,x,ee=!1,K=!1)=>{const{type:j,props:Q,ref:re,children:J,dynamicChildren:Z,shapeFlag:Se,patchFlag:E,dirs:g,cacheIndex:D}=w;if(E===-2&&(K=!1),re!=null&&(Kn(),Mo(re,null,x,w,!0),jn()),D!=null&&(R.renderCache[D]=void 0),Se&256){R.ctx.deactivate(w);return}const W=Se&1&&g,$=!er(w);let V;if($&&(V=Q&&Q.onVnodeBeforeUnmount)&&Mn(V,R,w),Se&6)ge(w.component,x,ee);else{if(Se&128){w.suspense.unmount(x,ee);return}W&&bi(w,null,R,"beforeUnmount"),Se&64?w.type.remove(w,R,x,le,ee):Z&&!Z.hasOnce&&(j!==Yt||E>0&&E&64)?be(Z,R,x,!1,!0):(j===Yt&&E&384||!K&&Se&16)&&be(J,R,x),ee&&Je(w)}($&&(V=Q&&Q.onVnodeUnmounted)||W)&&Qt(()=>{V&&Mn(V,R,w),W&&bi(w,null,R,"unmounted")},x)},Je=w=>{const{type:R,el:x,anchor:ee,transition:K}=w;if(R===Yt){ie(x,ee);return}if(R===so){M(w);return}const j=()=>{s(x),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:Q,delayLeave:re}=K,J=()=>Q(x,j);re?re(w.el,j,J):J()}else j()},ie=(w,R)=>{let x;for(;w!==R;)x=h(w),s(w),w=x;s(R)},ge=(w,R,x)=>{const{bum:ee,scope:K,job:j,subTree:Q,um:re,m:J,a:Z,parent:Se,slots:{__:E}}=w;Xc(J),Xc(Z),ee&&Jo(ee),Se&&Ge(E)&&E.forEach(g=>{Se.renderCache[g]=void 0}),K.stop(),j&&(j.flags|=8,Fe(Q,w,R,x)),re&&Qt(re,R),Qt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},be=(w,R,x,ee=!1,K=!1,j=0)=>{for(let Q=j;Q<w.length;Q++)Fe(w[Q],R,x,ee,K)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),x=R&&R[yp];return x?h(x):R};let ne=!1;const ce=(w,R,x)=>{w==null?R._vnode&&Fe(R._vnode,null,null,!0):v(R._vnode||null,w,R,null,null,null,x),R._vnode=w,ne||(ne=!0,Bc(),ah(),ne=!1)},le={p:v,um:Fe,m:Ce,r:Je,mt:te,mc:B,pc:H,pbc:y,n:N,o:n};return{render:ce,hydrate:void 0,createApp:Yp(ce)}}function sa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function tm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function yh(n,e,t=!1){const i=n.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ai(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&yh(o,a)),a.type===Ho&&(a.el=o.el),a.type===xi&&!a.el&&(a.el=o.el)}}function nm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ah(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ah(e)}function Xc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const im=Symbol.for("v-scx"),sm=()=>Yn(im);function io(n,e,t){return bh(n,e,t)}function bh(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Nt({},t),l=e&&i||!e&&r!=="post";let c;if(Ts){if(r==="sync"){const d=sm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Rn,d.resume=Rn,d.pause=Rn,d}}const u=It;a.call=(d,_,v)=>Cn(d,u,_,v);let f=!1;r==="post"?a.scheduler=d=>{Qt(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():ic(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=xp(n,e,a);return Ts&&(c?c.push(h):l&&h()),h}function rm(n,e,t){const i=this.proxy,s=yt(n)?n.includes(".")?Th(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=xr(this),a=bh(s,r.bind(i),t);return o(),a}function Th(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const om=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_i(e)}Modifiers`]||n[`${Vi(e)}Modifiers`];function am(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),o=r&&om(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>yt(u)?u.trim():u)),o.number&&(s=t.map(zd)));let a,l=i[a=Zo(e)]||i[a=Zo(_i(e))];!l&&r&&(l=i[a=Zo(Vi(e))]),l&&Cn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(c,n,6,s)}}function wh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=wh(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(_t(n)&&i.set(n,null),null):(Ge(r)?r.forEach(l=>o[l]=null):Nt(o,r),_t(n)&&i.set(n,o),o)}function zo(n,e){return!n||!Po(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Vi(e))||nt(n,e))}function Yc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:v}=n,m=So(n);let p,T;try{if(t.shapeFlag&4){const M=s||i,U=M;p=yn(c.call(U,M,u,f,d,h,_)),T=a}else{const M=e;p=yn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),T=e.props?a:lm(a)}}catch(M){nr.length=0,vr(M,n,1),p=lt(xi)}let A=p;if(T&&v!==!1){const M=Object.keys(T),{shapeFlag:U}=A;M.length&&U&7&&(r&&M.some(ql)&&(T=cm(T,r)),A=bs(A,T,!1,!0))}return t.dirs&&(A=bs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&sc(A,t.transition),p=A,So(m),p}const lm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Po(t))&&((e||(e={}))[t]=n[t]);return e},cm=(n,e)=>{const t={};for(const i in n)(!ql(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function um(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!zo(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qc(i,o,c):!0:!!o;return!1}function qc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!zo(t,r))return!0}return!1}function fm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Rh=n=>n.__isSuspense;function hm(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):Ep(n)}const Yt=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),xi=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),nr=[];let $t=null;function at(n=!1){nr.push($t=n?null:[])}function dm(){nr.pop(),$t=nr[nr.length-1]||null}let cr=1;function Kc(n,e=!1){cr+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function Ch(n){return n.dynamicChildren=cr>0?$t||ms:null,dm(),cr>0&&$t&&$t.push(n),n}function ht(n,e,t,i,s,r){return Ch(qe(n,e,t,i,s,r,!0))}function Ph(n,e,t,i,s){return Ch(lt(n,e,t,i,s,!0))}function yo(n){return n?n.__v_isVNode===!0:!1}function Bs(n,e){return n.type===e.type&&n.key===e.key}const Dh=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||Ut(n)||Xe(n)?{i:Tn,r:n,k:e,f:!!t}:n:null);function qe(n,e=null,t=null,i=0,s=null,r=n===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Dh(e),ref:e&&ro(e),scopeId:ch,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return a?(fc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),cr>0&&!o&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const lt=pm;function pm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bp)&&(n=xi),yo(n)){const a=bs(n,e,!0);return t&&fc(a,t),cr>0&&!r&&$t&&(a.shapeFlag&6?$t[$t.indexOf(n)]=a:$t.push(a)),a.patchFlag=-2,a}if(bm(n)&&(n=n.__vccOpts),e){e=mm(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=No(a)),_t(l)&&(nc(l)&&!Ge(l)&&(l=Nt({},l)),e.style=Uo(l))}const o=yt(n)?1:Rh(n)?128:Ap(n)?64:_t(n)?4:Xe(n)?2:0;return qe(n,e,t,i,s,o,r,!0)}function mm(n){return n?nc(n)||_h(n)?Nt({},n):n:null}function bs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?_m(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Dh(c),ref:e&&e.ref?t&&r?Ge(r)?r.concat(ro(e)):[r,ro(e)]:ro(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Yt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bs(n.ssContent),ssFallback:n.ssFallback&&bs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&sc(u,l.clone(u)),u}function oo(n=" ",e=0){return lt(Ho,null,n,e)}function gm(n,e){const t=lt(so,null,n);return t.staticCount=e,t}function ko(n="",e=!1){return e?(at(),Ph(xi,null,n)):lt(xi,null,n)}function yn(n){return n==null||typeof n=="boolean"?lt(xi):Ge(n)?lt(Yt,null,n.slice()):yo(n)?ai(n):lt(Ho,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bs(n)}function fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_h(e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Tn},t=32):(e=String(e),i&64?(t=16,e=[oo(e)]):t=8);n.children=e,n.shapeFlag|=t}function _m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=No([e.class,i.class]));else if(s==="style")e.style=Uo([e.style,i.style]);else if(Po(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Mn(n,e,t,i=null){Cn(n,e,7,[t,i])}const vm=ph();let xm=0;function Sm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||vm,r={uid:xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(i,s),emitsOptions:wh(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=am.bind(null,r),n.ce&&n.ce(r),r}let It=null,Ao,Ja;{const n=Io(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ao=e("__VUE_INSTANCE_SETTERS__",t=>It=t),Ja=e("__VUE_SSR_SETTERS__",t=>Ts=t)}const xr=n=>{const e=It;return Ao(n),n.scope.on(),()=>{n.scope.off(),Ao(e)}},jc=()=>{It&&It.scope.off(),Ao(null)};function Lh(n){return n.vnode.shapeFlag&4}let Ts=!1;function Mm(n,e=!1,t=!1){e&&Ja(e);const{props:i,children:s}=n.vnode,r=Lh(n);qp(n,i,r,e),Jp(n,s,t||e);const o=r?Em(n,e):void 0;return e&&Ja(!1),o}function Em(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zp);const{setup:i}=t;if(i){Kn();const s=n.setupContext=i.length>1?Am(n):null,r=xr(n),o=_r(i,n,0,[n.props,s]),a=Lf(o);if(jn(),r(),(a||n.sp)&&!er(n)&&oc(n),a){if(o.then(jc,jc),e)return o.then(l=>{Zc(n,l)}).catch(l=>{vr(l,n,0)});n.asyncDep=o}else Zc(n,o)}else Ih(n)}function Zc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=ih(e)),Ih(n)}function Ih(n,e,t){const i=n.type;n.render||(n.render=i.render||Rn);{const s=xr(n);Kn();try{Hp(n)}finally{jn(),s()}}}const ym={get(n,e){return Lt(n,"get",""),n[e]}};function Am(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ym),slots:n.slots,emit:n.emit,expose:e}}function hc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ih(hp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in tr)return tr[t](n)},has(e,t){return t in e||t in tr}})):n.proxy}function bm(n){return Xe(n)&&"__vccOpts"in n}const an=(n,e)=>_p(n,e,Ts);function Uh(n,e,t){const i=arguments.length;return i===2?_t(e)&&!Ge(e)?yo(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&yo(t)&&(t=[t]),lt(n,e,t))}const Tm="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qa;const Jc=typeof window<"u"&&window.trustedTypes;if(Jc)try{Qa=Jc.createPolicy("vue",{createHTML:n=>n})}catch{}const Nh=Qa?n=>Qa.createHTML(n):n=>n,wm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,Qc=Hn&&Hn.createElement("template"),Cm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Hn.createElementNS(wm,n):e==="mathml"?Hn.createElementNS(Rm,n):t?Hn.createElement(n,{is:t}):Hn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Hn.createTextNode(n),createComment:n=>Hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qc.innerHTML=Nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pm=Symbol("_vtc");function Dm(n,e,t){const i=n[Pm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $c=Symbol("_vod"),Lm=Symbol("_vsh"),Im=Symbol(""),Um=/(^|;)\s*display\s*:/;function Nm(n,e,t){const i=n.style,s=yt(t);let r=!1;if(t&&!s){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ao(i,a,"")}else for(const o in e)t[o]==null&&ao(i,o,"");for(const o in t)o==="display"&&(r=!0),ao(i,o,t[o])}else if(s){if(e!==t){const o=i[Im];o&&(t+=";"+o),i.cssText=t,r=Um.test(t)}}else e&&n.removeAttribute("style");$c in n&&(n[$c]=r?i.display:"",n[Lm]&&(i.display="none"))}const eu=/\s*!important$/;function ao(n,e,t){if(Ge(t))t.forEach(i=>ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fm(n,e);eu.test(t)?n.setProperty(Vi(i),t.replace(eu,""),"important"):n[i]=t}}const tu=["Webkit","Moz","ms"],ra={};function Fm(n,e){const t=ra[e];if(t)return t;let i=_i(e);if(i!=="filter"&&i in n)return ra[e]=i;i=Nf(i);for(let s=0;s<tu.length;s++){const r=tu[s]+i;if(r in n)return ra[e]=r}return e}const nu="http://www.w3.org/1999/xlink";function iu(n,e,t,i,s,r=Xd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(nu,e.slice(6,e.length)):n.setAttributeNS(nu,e,t):t==null||r&&!Of(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ei(t)?String(t):t)}function su(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Nh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Of(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Om(n,e,t,i){n.addEventListener(e,t,i)}function Bm(n,e,t,i){n.removeEventListener(e,t,i)}const ru=Symbol("_vei");function zm(n,e,t,i,s=null){const r=n[ru]||(n[ru]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Hm(e);if(i){const c=r[e]=Vm(i,s);Om(n,a,c,l)}else o&&(Bm(n,a,o,l),r[e]=void 0)}}const ou=/(?:Once|Passive|Capture)$/;function Hm(n){let e;if(ou.test(n)){e={};let i;for(;i=n.match(ou);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Vi(n.slice(2)),e]}let oa=0;const km=Promise.resolve(),Gm=()=>oa||(km.then(()=>oa=0),oa=Date.now());function Vm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Cn(Wm(i,t.value),e,5,[i])};return t.value=n,t.attached=Gm(),t}function Wm(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const au=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xm=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Dm(n,i,o):e==="style"?Nm(n,t,i):Po(e)?ql(e)||zm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ym(n,e,i,o))?(su(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&iu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!yt(i))?su(n,_i(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),iu(n,e,i,o))};function Ym(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&au(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return au(e)&&yt(t)?!1:e in n}const qm=["ctrl","shift","alt","meta"],Km={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>qm.some(t=>n[`${t}Key`]&&!e.includes(t))},jm=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Km[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Zm=Nt({patchProp:Xm},Cm);let lu;function Jm(){return lu||(lu=$p(Zm))}const Qm=(...n)=>{const e=Jm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=eg(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,$m(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $m(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function eg(n){return yt(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function tg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ot=Object.assign;function aa(n,e){const t={};for(const i in e){const s=e[i];t[i]=Sn(s)?s.map(n):n(s)}return t}const ir=()=>{},Sn=Array.isArray,Fh=/#/g,ng=/&/g,ig=/\//g,sg=/=/g,rg=/\?/g,Oh=/\+/g,og=/%5B/g,ag=/%5D/g,Bh=/%5E/g,lg=/%60/g,zh=/%7B/g,cg=/%7C/g,Hh=/%7D/g,ug=/%20/g;function dc(n){return encodeURI(""+n).replace(cg,"|").replace(og,"[").replace(ag,"]")}function fg(n){return dc(n).replace(zh,"{").replace(Hh,"}").replace(Bh,"^")}function $a(n){return dc(n).replace(Oh,"%2B").replace(ug,"+").replace(Fh,"%23").replace(ng,"%26").replace(lg,"`").replace(zh,"{").replace(Hh,"}").replace(Bh,"^")}function hg(n){return $a(n).replace(sg,"%3D")}function dg(n){return dc(n).replace(Fh,"%23").replace(rg,"%3F")}function pg(n){return n==null?"":dg(n).replace(ig,"%2F")}function ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const mg=/\/$/,gg=n=>n.replace(mg,"");function la(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Sg(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:ur(o)}}function _g(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function cu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function vg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ws(e.matched[i],t.matched[s])&&kh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ws(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function kh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!xg(n[t],e[t]))return!1;return!0}function xg(n,e){return Sn(n)?uu(n,e):Sn(e)?uu(e,n):n===e}function uu(n,e){return Sn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Sg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fr;(function(n){n.pop="pop",n.push="push"})(fr||(fr={}));var sr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(sr||(sr={}));function Mg(n){if(!n)if(hs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),gg(n)}const Eg=/^[^#]+#/;function yg(n,e){return n.replace(Eg,"#")+e}function Ag(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Go=()=>({left:window.scrollX,top:window.scrollY});function bg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Ag(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fu(n,e){return(history.state?history.state.position-e:-1)+n}const el=new Map;function Tg(n,e){el.set(n,e)}function wg(n){const e=el.get(n);return el.delete(n),e}let Rg=()=>location.protocol+"//"+location.host;function Gh(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),cu(l,"")}return cu(t,n)+i+s}function Cg(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=Gh(n,location),_=t.value,v=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,_,{delta:m,type:fr.pop,direction:m?m>0?sr.forward:sr.back:sr.unknown})})};function l(){o=t.value}function c(h){s.push(h);const d=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:Go()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function hu(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Go():null}}function Pg(n){const{history:e,location:t}=window,i={value:Gh(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Rg()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,hu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ot({},s.value,e.state,{forward:l,scroll:Go()});r(u.current,u,!0);const f=ot({},hu(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Dg(n){n=Mg(n);const e=Pg(n),t=Cg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=ot({location:"",base:n,go:i,createHref:yg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Lg(n){return typeof n=="string"||n&&typeof n=="object"}function Vh(n){return typeof n=="string"||typeof n=="symbol"}const Wh=Symbol("");var du;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(du||(du={}));function Rs(n,e){return ot(new Error,{type:n,[Wh]:!0},e)}function In(n,e){return n instanceof Error&&Wh in n&&(e==null||!!(n.type&e))}const pu="[^/]+?",Ig={sensitive:!1,strict:!1,start:!0,end:!0},Ug=/[.+*?^${}()[\]/\\]/g;function Ng(n,e){const t=ot({},Ig,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Ug,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:p}=h;r.push({name:_,repeatable:v,optional:m});const T=p||pu;if(T!==pu){d+=10;try{new RegExp(`(${T})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${T}): `+M.message)}}let A=v?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,d+=20,m&&(d+=-8),v&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=r[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:v,optional:m}=d,p=_ in c?c[_]:"";if(Sn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const T=Sn(p)?p.join("/"):p;if(!T)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Fg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Xh(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Fg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(mu(i))return 1;if(mu(s))return-1}return s.length-i.length}function mu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Og={type:0,value:""},Bg=/[a-zA-Z0-9_]/;function zg(n){if(!n)return[[]];if(n==="/")return[[Og]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Bg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Hg(n,e,t){const i=Ng(zg(n.path),t),s=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kg(n,e){const t=[],i=new Map;e=vu({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,h,d){const _=!d,v=Gg(f);v.aliasOf=d&&d.record;const m=vu(e,f),p=[v];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of M)p.push(ot({},v,{components:d?d.record.components:v.components,path:U,aliasOf:d?d.record:v}))}let T,A;for(const M of p){const{path:U}=M;if(h&&U[0]!=="/"){const P=h.record.path,C=P[P.length-1]==="/"?"":"/";M.path=h.record.path+(U&&C+U)}if(T=Hg(M,h,m),d?d.alias.push(T):(A=A||T,A!==T&&A.alias.push(T),_&&f.name&&!_u(T)&&o(f.name)),Yh(T)&&l(T),v.children){const P=v.children;for(let C=0;C<P.length;C++)r(P[C],T,d&&d.children[C])}d=d||T}return A?()=>{o(A)}:ir}function o(f){if(Vh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=Xg(f,t);t.splice(h,0,f),f.record.name&&!_u(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},v,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Rs(1,{location:f});m=d.record.name,_=ot(gu(h.params,d.keys.filter(A=>!A.optional).concat(d.parent?d.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&gu(f.params,d.keys.map(A=>A.name))),v=d.stringify(_)}else if(f.path!=null)v=f.path,d=t.find(A=>A.re.test(v)),d&&(_=d.parse(v),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(A=>A.re.test(h.path)),!d)throw Rs(1,{location:f,currentLocation:h});m=d.record.name,_=ot({},h.params,f.params),v=d.stringify(_)}const p=[];let T=d;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:v,params:_,matched:p,meta:Wg(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function gu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Gg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Vg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Vg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function _u(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Wg(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function vu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Xg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Xh(n,e[r])<0?i=r:t=r+1}const s=Yg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Yg(n){let e=n;for(;e=e.parent;)if(Yh(e)&&Xh(n,e)===0)return e}function Yh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function qg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Oh," "),o=r.indexOf("="),a=ur(o<0?r:r.slice(0,o)),l=o<0?null:ur(r.slice(o+1));if(a in e){let c=e[a];Sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xu(n){let e="";for(let t in n){const i=n[t];if(t=hg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Sn(i)?i.map(r=>r&&$a(r)):[i&&$a(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Kg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Sn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const jg=Symbol(""),Su=Symbol(""),pc=Symbol(""),qh=Symbol(""),tl=Symbol("");function zs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function li(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Rs(4,{from:t,to:e})):h instanceof Error?l(h):Lg(h)?l(Rs(2,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function ca(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Zg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(li(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=tg(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&li(d,t,i,o,a,s)()}))}}return r}function Zg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Mu(n){const e=Yn(pc),t=Yn(qh),i=an(()=>{const l=cn(n.to);return e.resolve(l)}),s=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ws.bind(null,u));if(h>-1)return h;const d=Eu(l[c-2]);return c>1&&Eu(u)===d&&f[f.length-1].path!==d?f.findIndex(ws.bind(null,l[c-2])):h}),r=an(()=>s.value>-1&&$g(t.params,i.value.params)),o=an(()=>s.value>-1&&s.value===t.matched.length-1&&kh(t.params,i.value.params));function a(l={}){return Qg(l)?e[cn(n.replace)?"replace":"push"](cn(n.to)).catch(ir):Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Jg=rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mu,setup(n,{slots:e}){const t=Oo(Mu(n)),{options:i}=Yn(pc),s=an(()=>({[yu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[yu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Uh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),lo=Jg;function Qg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function $g(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Sn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Eu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yu=(n,e,t)=>n??e??t,e_=rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Yn(tl),s=an(()=>n.route||i.value),r=Yn(Su,0),o=an(()=>{let c=cn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=an(()=>s.value.matched[o.value]);no(Su,an(()=>o.value+1)),no(jg,a),no(tl,s);const l=en();return io(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ws(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Au(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Uh(h,ot({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Au(t.default,{Component:m,route:c})||m}}});function Au(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Kh=e_;function t_(n){const e=kg(n.routes,n),t=n.parseQuery||qg,i=n.stringifyQuery||xu,s=n.history,r=zs(),o=zs(),a=zs(),l=dp($n);let c=$n;hs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=aa.bind(null,N=>""+N),f=aa.bind(null,pg),h=aa.bind(null,ur);function d(N,ne){let ce,le;return Vh(N)?(ce=e.getRecordMatcher(N),le=ne):le=N,e.addRoute(le,ce)}function _(N){const ne=e.getRecordMatcher(N);ne&&e.removeRoute(ne)}function v(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,ne){if(ne=ot({},ne||l.value),typeof N=="string"){const x=la(t,N,ne.path),ee=e.resolve({path:x.path},ne),K=s.createHref(x.fullPath);return ot(x,ee,{params:h(ee.params),hash:ur(x.hash),redirectedFrom:void 0,href:K})}let ce;if(N.path!=null)ce=ot({},N,{path:la(t,N.path,ne.path).path});else{const x=ot({},N.params);for(const ee in x)x[ee]==null&&delete x[ee];ce=ot({},N,{params:f(x)}),ne.params=f(ne.params)}const le=e.resolve(ce,ne),Oe=N.hash||"";le.params=u(h(le.params));const w=_g(i,ot({},N,{hash:fg(Oe),path:le.path})),R=s.createHref(w);return ot({fullPath:w,hash:Oe,query:i===xu?Kg(N.query):N.query||{}},le,{redirectedFrom:void 0,href:R})}function T(N){return typeof N=="string"?la(t,N,l.value.path):ot({},N)}function A(N,ne){if(c!==N)return Rs(8,{from:ne,to:N})}function M(N){return C(N)}function U(N){return M(ot(T(N),{replace:!0}))}function P(N){const ne=N.matched[N.matched.length-1];if(ne&&ne.redirect){const{redirect:ce}=ne;let le=typeof ce=="function"?ce(N):ce;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=T(le):{path:le},le.params={}),ot({query:N.query,hash:N.hash,params:le.path!=null?{}:N.params},le)}}function C(N,ne){const ce=c=p(N),le=l.value,Oe=N.state,w=N.force,R=N.replace===!0,x=P(ce);if(x)return C(ot(T(x),{state:typeof x=="object"?ot({},Oe,x.state):Oe,force:w,replace:R}),ne||ce);const ee=ce;ee.redirectedFrom=ne;let K;return!w&&vg(i,le,ce)&&(K=Rs(16,{to:ee,from:le}),Ce(le,le,!0,!1)),(K?Promise.resolve(K):y(ee,le)).catch(j=>In(j)?In(j,2)?j:xe(j):H(j,ee,le)).then(j=>{if(j){if(In(j,2))return C(ot({replace:R},T(j.to),{state:typeof j.to=="object"?ot({},Oe,j.to.state):Oe,force:w}),ne||ee)}else j=z(ee,le,!0,R,Oe);return L(ee,le,j),j})}function B(N,ne){const ce=A(N,ne);return ce?Promise.reject(ce):Promise.resolve()}function b(N){const ne=ie.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(N):N()}function y(N,ne){let ce;const[le,Oe,w]=n_(N,ne);ce=ca(le.reverse(),"beforeRouteLeave",N,ne);for(const x of le)x.leaveGuards.forEach(ee=>{ce.push(li(ee,N,ne))});const R=B.bind(null,N,ne);return ce.push(R),be(ce).then(()=>{ce=[];for(const x of r.list())ce.push(li(x,N,ne));return ce.push(R),be(ce)}).then(()=>{ce=ca(Oe,"beforeRouteUpdate",N,ne);for(const x of Oe)x.updateGuards.forEach(ee=>{ce.push(li(ee,N,ne))});return ce.push(R),be(ce)}).then(()=>{ce=[];for(const x of w)if(x.beforeEnter)if(Sn(x.beforeEnter))for(const ee of x.beforeEnter)ce.push(li(ee,N,ne));else ce.push(li(x.beforeEnter,N,ne));return ce.push(R),be(ce)}).then(()=>(N.matched.forEach(x=>x.enterCallbacks={}),ce=ca(w,"beforeRouteEnter",N,ne,b),ce.push(R),be(ce))).then(()=>{ce=[];for(const x of o.list())ce.push(li(x,N,ne));return ce.push(R),be(ce)}).catch(x=>In(x,8)?x:Promise.reject(x))}function L(N,ne,ce){a.list().forEach(le=>b(()=>le(N,ne,ce)))}function z(N,ne,ce,le,Oe){const w=A(N,ne);if(w)return w;const R=ne===$n,x=hs?history.state:{};ce&&(le||R?s.replace(N.fullPath,ot({scroll:R&&x&&x.scroll},Oe)):s.push(N.fullPath,Oe)),l.value=N,Ce(N,ne,ce,R),xe()}let G;function te(){G||(G=s.listen((N,ne,ce)=>{if(!ge.listening)return;const le=p(N),Oe=P(le);if(Oe){C(ot(Oe,{replace:!0}),le).catch(ir);return}c=le;const w=l.value;hs&&Tg(fu(w.fullPath,ce.delta),Go()),y(le,w).catch(R=>In(R,12)?R:In(R,2)?(C(R.to,le).then(x=>{In(x,20)&&!ce.delta&&ce.type===fr.pop&&s.go(-1,!1)}).catch(ir),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),H(R,le,w))).then(R=>{R=R||z(le,w,!1),R&&(ce.delta&&!In(R,8)?s.go(-ce.delta,!1):ce.type===fr.pop&&In(R,20)&&s.go(-1,!1)),L(le,w,R)}).catch(ir)}))}let ae=zs(),Y=zs(),se;function H(N,ne,ce){xe(N);const le=Y.list();return le.length?le.forEach(Oe=>Oe(N,ne,ce)):console.error(N),Promise.reject(N)}function me(){return se&&l.value!==$n?Promise.resolve():new Promise((N,ne)=>{ae.add([N,ne])})}function xe(N){return se||(se=!N,te(),ae.list().forEach(([ne,ce])=>N?ce(N):ne()),ae.reset()),N}function Ce(N,ne,ce,le){const{scrollBehavior:Oe}=n;if(!hs||!Oe)return Promise.resolve();const w=!ce&&wg(fu(N.fullPath,0))||(le||!ce)&&history.state&&history.state.scroll||null;return rh().then(()=>Oe(N,ne,w)).then(R=>R&&bg(R)).catch(R=>H(R,N,ne))}const Fe=N=>s.go(N);let Je;const ie=new Set,ge={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:M,replace:U,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:me,install(N){const ne=this;N.component("RouterLink",lo),N.component("RouterView",Kh),N.config.globalProperties.$router=ne,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(l)}),hs&&!Je&&l.value===$n&&(Je=!0,M(s.location).catch(Oe=>{}));const ce={};for(const Oe in $n)Object.defineProperty(ce,Oe,{get:()=>l.value[Oe],enumerable:!0});N.provide(pc,ne),N.provide(qh,eh(ce)),N.provide(tl,l);const le=N.unmount;ie.add(N),N.unmount=function(){ie.delete(N),ie.size<1&&(c=$n,G&&G(),G=null,l.value=$n,Je=!1,se=!1),le()}}};function be(N){return N.reduce((ne,ce)=>ne.then(()=>b(ce)),Promise.resolve())}return ge}function n_(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>ws(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ws(c,l))||s.push(l))}return[t,i,s]}const i_="/assets/indeed_logo-B-kKN5vA.webp",s_="/assets/github_logo-CQOl0T3p.webp",Kt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},r_={},o_={class:"footer-content"};function a_(n,e){return at(),ht("div",o_,e[0]||(e[0]=[gm('<a href="https://www.linkedin.com/in/sreesh-poudyal-15977117b/" target="_blank" data-v-9ec8171f><img src="'+i_+'" alt="Linkedin" data-v-9ec8171f></a><a href="https://github.com/sreesh101" target="_blank" data-v-9ec8171f><img src="'+s_+'" alt="Github" data-v-9ec8171f></a><p class="whitewhite" data-v-9ec8171f>© 2025. Sreesh Poudyal</p>',3)]))}const l_=Kt(r_,[["render",a_],["__scopeId","data-v-9ec8171f"]]),c_={class:"blur-background"},u_={class:"layout"},f_={class:"wrapper"},h_={class:"main-content"},d_={style:{"z-index":"4"}},p_={__name:"App",setup(n){return(e,t)=>(at(),ht("div",c_,[t[3]||(t[3]=qe("div",{class:"blur-shape pink"},null,-1)),t[4]||(t[4]=qe("div",{class:"blur-shape purple"},null,-1)),t[5]||(t[5]=qe("div",{class:"blur-shape blue"},null,-1)),qe("div",u_,[qe("header",null,[qe("div",f_,[qe("nav",null,[lt(cn(lo),{to:"/"},{default:to(()=>t[0]||(t[0]=[oo("Home")])),_:1,__:[0]}),lt(cn(lo),{to:"/about"},{default:to(()=>t[1]||(t[1]=[oo("About")])),_:1,__:[1]}),lt(cn(lo),{to:"/contact"},{default:to(()=>t[2]||(t[2]=[oo("Contact")])),_:1,__:[2]})])])]),qe("main",h_,[lt(cn(Kh))]),qe("div",d_,[lt(l_)])])]))}},m_=Kt(p_,[["__scopeId","data-v-e994b82c"]]),g_="modulepreload",__=function(n){return"/"+n},bu={},nl=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=__(l),l in bu)return;bu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":g_,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="177",Ms={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v_=0,Tu=1,x_=2,jh=1,S_=2,zn=3,Si=0,qt=1,Gn=2,di=0,Es=1,wu=2,Ru=3,Cu=4,M_=5,Ni=100,E_=101,y_=102,A_=103,b_=104,T_=200,w_=201,R_=202,C_=203,il=204,sl=205,P_=206,D_=207,L_=208,I_=209,U_=210,N_=211,F_=212,O_=213,B_=214,rl=0,ol=1,al=2,Cs=3,ll=4,cl=5,ul=6,fl=7,Zh=0,z_=1,H_=2,pi=0,k_=1,G_=2,V_=3,W_=4,X_=5,Y_=6,q_=7,Jh=300,Ps=301,Ds=302,hl=303,dl=304,Vo=306,pl=1e3,Oi=1001,ml=1002,vn=1003,K_=1004,Rr=1005,wn=1006,ua=1007,Bi=1008,Zn=1009,Qh=1010,$h=1011,hr=1012,gc=1013,Hi=1014,Vn=1015,Sr=1016,_c=1017,vc=1018,dr=1020,ed=35902,td=1021,nd=1022,gn=1023,pr=1026,mr=1027,id=1028,xc=1029,sd=1030,Sc=1031,Mc=1033,co=33776,uo=33777,fo=33778,ho=33779,gl=35840,_l=35841,vl=35842,xl=35843,Sl=36196,Ml=37492,El=37496,yl=37808,Al=37809,bl=37810,Tl=37811,wl=37812,Rl=37813,Cl=37814,Pl=37815,Dl=37816,Ll=37817,Il=37818,Ul=37819,Nl=37820,Fl=37821,po=36492,Ol=36494,Bl=36495,rd=36283,zl=36284,Hl=36285,kl=36286,j_=3200,Z_=3201,J_=0,Q_=1,fi="",rn="srgb",Ls="srgb-linear",bo="linear",ct="srgb",qi=7680,Pu=519,$_=512,ev=513,tv=514,od=515,nv=516,iv=517,sv=518,rv=519,Gl=35044,Du="300 es",Wn=2e3,To=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,Vl=180/Math.PI;function mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function ov(n,e){return(n%e+e)%e}function fa(n,e,t){return(1-t)*n+t*e}function bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const av={DEG2RAD:mo};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*v,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const U=Math.sqrt(A),P=Math.atan2(U,p*T);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const M=a*T;if(l=l*m+h*M,c=c*m+d*M,u=u*m+_*M,f=f*m+v*M,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new k,Lu=new ki;class Ye{constructor(e,t,i,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],v=s[0],m=s[3],p=s[6],T=s[1],A=s[4],M=s[7],U=s[2],P=s[5],C=s[8];return r[0]=o*v+a*T+l*U,r[3]=o*m+a*A+l*P,r[6]=o*p+a*M+l*C,r[1]=c*v+u*T+f*U,r[4]=c*m+u*A+f*P,r[7]=c*p+u*M+f*C,r[2]=h*v+d*T+_*U,r[5]=h*m+d*A+_*P,r[8]=h*p+d*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,_=t*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ye;function ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lv(){const n=gr("canvas");return n.style.display="block",n}const Iu={};function ys(n){n in Iu||(Iu[n]=!0,console.warn(n))}function cv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function uv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Uu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hv(){const n={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?bo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ls]:{primaries:e,whitePoint:i,transfer:bo,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const $e=hv();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class dv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=gr("canvas")),Ki.width=e.width,Ki.height=e.height;const s=Ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pv=0;class Ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mv=0;const ma=new k;class kt extends Wi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Oi,s=Oi,r=wn,o=Bi,a=gn,l=Zn,c=kt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=mi(),this.name="",this.source=new Ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ma).x}get height(){return this.source.getSize(ma).y}get depth(){return this.source.getSize(ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Jh;kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(d+1)/2,U=(p+1)/2,P=(u+h)/4,C=(f+v)/4,B=(_+m)/4;return A>M&&A>U?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=P/i,r=C/i):M>U?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=P/s,r=B/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=C/r,s=B/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gv extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new kt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ec(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends gv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ld extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _v extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Pr.subVectors(this.max,Hs),ji.subVectors(e.a,Hs),Zi.subVectors(e.b,Hs),Ji.subVectors(e.c,Hs),ei.subVectors(Zi,ji),ti.subVectors(Ji,Zi),wi.subVectors(ji,Ji);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-wi.z,wi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,wi.z,0,-wi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-wi.y,wi.x,0];return!ga(t,ji,Zi,Ji,Pr)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,ji,Zi,Ji,Pr))?!1:(Dr.crossVectors(ei,ti),t=[Dr.x,Dr.y,Dr.z],ga(t,ji,Zi,Ji,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new k,new k,new k,new k,new k,new k,new k,new k],dn=new k,Cr=new Mr,ji=new k,Zi=new k,Ji=new k,ei=new k,ti=new k,wi=new k,Hs=new k,Pr=new k,Dr=new k,Ri=new k;function ga(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);const a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const vv=new Mr,ks=new k,_a=new k;class Wo{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(_a)),this.expandByPoint(ks.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nn=new k,va=new k,Lr=new k,ni=new k,xa=new k,Ir=new k,Sa=new k;class Xo{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){va.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=ni.dot(this.direction),l=-ni.dot(Lr),c=ni.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(va).addScaledVector(Lr,h),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){xa.subVectors(t,e),Ir.subVectors(i,e),Sa.crossVectors(xa,Ir);let o=this.direction.dot(Sa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ir.crossVectors(ni,Ir));if(l<0)return null;const c=a*this.direction.dot(xa.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(Sa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,_,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,_,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xv,e,Sv)}lookAt(e,t,i){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ii.crossVectors(i,Zt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ii.crossVectors(i,Zt)),ii.normalize(),Ur.crossVectors(Zt,ii),s[0]=ii.x,s[4]=Ur.x,s[8]=Zt.x,s[1]=ii.y,s[5]=Ur.y,s[9]=Zt.y,s[2]=ii.z,s[6]=Ur.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],T=i[3],A=i[7],M=i[11],U=i[15],P=s[0],C=s[4],B=s[8],b=s[12],y=s[1],L=s[5],z=s[9],G=s[13],te=s[2],ae=s[6],Y=s[10],se=s[14],H=s[3],me=s[7],xe=s[11],Ce=s[15];return r[0]=o*P+a*y+l*te+c*H,r[4]=o*C+a*L+l*ae+c*me,r[8]=o*B+a*z+l*Y+c*xe,r[12]=o*b+a*G+l*se+c*Ce,r[1]=u*P+f*y+h*te+d*H,r[5]=u*C+f*L+h*ae+d*me,r[9]=u*B+f*z+h*Y+d*xe,r[13]=u*b+f*G+h*se+d*Ce,r[2]=_*P+v*y+m*te+p*H,r[6]=_*C+v*L+m*ae+p*me,r[10]=_*B+v*z+m*Y+p*xe,r[14]=_*b+v*G+m*se+p*Ce,r[3]=T*P+A*y+M*te+U*H,r[7]=T*C+A*L+M*ae+U*me,r[11]=T*B+A*z+M*Y+U*xe,r[15]=T*b+A*G+M*se+U*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+v*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],v=e[13],m=e[14],p=e[15],T=f*m*c-v*h*c+v*l*d-a*m*d-f*l*p+a*h*p,A=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,M=u*v*c-_*f*c+_*a*d-o*v*d-u*a*p+o*f*p,U=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,P=t*T+i*A+s*M+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=T*C,e[1]=(v*h*r-f*m*r-v*s*d+i*m*d+f*s*p-i*h*p)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*C,e[4]=A*C,e[5]=(u*m*r-_*h*r+_*s*d-t*m*d-u*s*p+t*h*p)*C,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*p-t*l*p)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*C,e[8]=M*C,e[9]=(_*f*r-u*v*r-_*i*d+t*v*d+u*i*p-t*f*p)*C,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*p+t*a*p)*C,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=U*C,e[13]=(u*v*s-_*f*s+_*i*h-t*v*h-u*i*m+t*f*m)*C,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,_=r*f,v=o*u,m=o*f,p=a*f,T=l*c,A=l*u,M=l*f,U=i.x,P=i.y,C=i.z;return s[0]=(1-(v+p))*U,s[1]=(d+M)*U,s[2]=(_-A)*U,s[3]=0,s[4]=(d-M)*P,s[5]=(1-(h+p))*P,s[6]=(m+T)*P,s[7]=0,s[8]=(_+A)*C,s[9]=(m-T)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);const c=1/r,u=1/o,f=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Wn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let d,_;if(a===Wn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===To)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,d=(i+s)*u;let _,v;if(a===Wn)_=(o+r)*f,v=-2*f;else if(a===To)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new k,pn=new xt,xv=new k(0,0,0),Sv=new k(1,1,1),ii=new k,Ur=new k,Zt=new k,Fu=new xt,Ou=new ki;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mv=0;const Bu=new k,$i=new ki,Fn=new xt,Nr=new k,Gs=new k,Ev=new k,yv=new ki,zu=new k(1,0,0),Hu=new k(0,1,0),ku=new k(0,0,1),Gu={type:"added"},Av={type:"removed"},es={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Gt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new k,t=new Jn,i=new ki,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nr.copy(e):Nr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Gs,Nr,this.up):Fn.lookAt(Nr,Gs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Fn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Av),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new k(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new k,On=new k,Ea=new k,Bn=new k,ts=new k,ns=new k,Vu=new k,ya=new k,Aa=new k,ba=new k,Ta=new Mt,wa=new Mt,Ra=new Mt;class ln{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),On.subVectors(i,t),Ea.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(On),l=mn.dot(Ea),c=On.dot(On),u=On.dot(Ea),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ta.setScalar(0),wa.setScalar(0),Ra.setScalar(0),Ta.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,i),Ra.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),On.subVectors(e,t),mn.cross(On).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,i),ns.subVectors(r,i),ya.subVectors(e,i);const l=ts.dot(ya),c=ns.dot(ya);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,s);const u=ts.dot(Aa),f=ns.dot(Aa);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ts,o);ba.subVectors(e,r);const d=ts.dot(ba),_=ns.dot(ba);if(_>=0&&d<=_)return t.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ns,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Vu.subVectors(r,s),a=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(Vu,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=ov(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ca(o,r,e+1/3),this.g=Ca(o,r,e),this.b=Ca(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return $e.workingToColorSpace(Dt.copy(this),e),Math.round(je(Dt.r*255,0,255))*65536+Math.round(je(Dt.g*255,0,255))*256+Math.round(je(Dt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=rn){$e.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Fr);const i=fa(si.h,Fr.h,t),s=fa(si.s,Fr.s,t),r=fa(si.l,Fr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new it;it.NAMES=cd;let bv=0;class Us extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Es,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ud extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new k,Or=new ke;let Tv=0;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class fd extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hd extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gi extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wv=0;const sn=new xt,Pa=new Gt,is=new k,Jt=new Mr,Vs=new Mr,wt=new k;class Pn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?hd:fd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Jt.min,Vs.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,Vs.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(Vs.min),Jt.expandByPoint(Vs.max))}Jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),wt.add(is)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new k,l[B]=new k;const c=new k,u=new k,f=new k,h=new ke,d=new ke,_=new ke,v=new k,m=new k;function p(B,b,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,B),d.fromBufferAttribute(r,b),_.fromBufferAttribute(r,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[B].add(v),a[b].add(v),a[y].add(v),l[B].add(m),l[b].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,b=T.length;B<b;++B){const y=T[B],L=y.start,z=y.count;for(let G=L,te=L+z;G<te;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new k,M=new k,U=new k,P=new k;function C(B){U.fromBufferAttribute(s,B),P.copy(U);const b=a[B];A.copy(b),A.sub(U.multiplyScalar(U.dot(b))).normalize(),M.crossVectors(P,b);const L=M.dot(l[B])<0?-1:1;o.setXYZW(B,A.x,A.y,A.z,L)}for(let B=0,b=T.length;B<b;++B){const y=T[B],L=y.start,z=y.count;for(let G=L,te=L+z;G<te;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new xn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new xt,Ci=new Xo,Br=new Wo,Xu=new k,zr=new k,Hr=new k,kr=new k,Da=new k,Gr=new k,Yu=new k,Vr=new k;class Xn extends Gt{constructor(e=new Pn,t=new ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Da.fromBufferAttribute(f,e),o?Gr.addScaledVector(Da,u):Gr.addScaledVector(Da.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Br.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Br,Xu)===null||Ci.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=T,U=A;M<U;M+=3){const P=a.getX(M),C=a.getX(M+1),B=a.getX(M+2);s=Wr(this,p,e,i,c,u,f,P,C,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const T=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Wr(this,o,e,i,c,u,f,T,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=T,U=A;M<U;M+=3){const P=M,C=M+1,B=M+2;s=Wr(this,p,e,i,c,u,f,P,C,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const T=m,A=m+1,M=m+2;s=Wr(this,o,e,i,c,u,f,T,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Rv(n,e,t,i,s,r,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Si,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:n}}function Wr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,zr),n.getVertexPosition(l,Hr),n.getVertexPosition(c,kr);const u=Rv(n,e,t,i,zr,Hr,kr,Yu);if(u){const f=new k;ln.getBarycoord(Yu,zr,Hr,kr,f),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,f,new ke)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,f,new ke)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};ln.getNormal(zr,Hr,kr,h.normal),u.face=h,u.barycoord=f}return u}class Er extends Pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(f,2));function _(v,m,p,T,A,M,U,P,C,B,b){const y=M/C,L=U/B,z=M/2,G=U/2,te=P/2,ae=C+1,Y=B+1;let se=0,H=0;const me=new k;for(let xe=0;xe<Y;xe++){const Ce=xe*L-G;for(let Fe=0;Fe<ae;Fe++){const Je=Fe*y-z;me[v]=Je*T,me[m]=Ce*A,me[p]=te,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[p]=P>0?1:-1,u.push(me.x,me.y,me.z),f.push(Fe/C),f.push(1-xe/B),se+=1}}for(let xe=0;xe<B;xe++)for(let Ce=0;Ce<C;Ce++){const Fe=h+Ce+ae*xe,Je=h+Ce+ae*(xe+1),ie=h+(Ce+1)+ae*(xe+1),ge=h+(Ce+1)+ae*xe;l.push(Fe,Je,ge),l.push(Je,ie,ge),H+=6}a.addGroup(d,H,b),d+=H,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Is(n[t]);for(const s in i)e[s]=i[s]}return e}function Cv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Pv={clone:Is,merge:zt};var Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new k,qu=new ke,Ku=new ke;class on extends pd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Ku),t.subVectors(Ku,qu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Iv extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new on(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new on(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new on(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new on(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new on(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class md extends kt{constructor(e=[],t=Ps,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new md(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Er(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:di});r.uniforms.tEquirect.value=t;const o=new Xn(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=wn),new Iv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class js extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nv={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fv extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ov{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new k;class wo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gd extends Us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const Ws=new k,as=new k,ls=new k,cs=new ke,Xs=new ke,_d=new xt,Xr=new k,Ys=new k,Yr=new k,ju=new ke,Ia=new ke,Zu=new ke;class Bv extends Gt{constructor(e=new gd){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ov(t,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new wo(i,3,0,!1)),os.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=os,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),_d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;qr(Xr.set(-.5,-.5,0),ls,o,as,s,r),qr(Ys.set(.5,-.5,0),ls,o,as,s,r),qr(Yr.set(.5,.5,0),ls,o,as,s,r),ju.set(0,0),Ia.set(1,0),Zu.set(1,1);let a=e.ray.intersectTriangle(Xr,Ys,Yr,!1,Ws);if(a===null&&(qr(Ys.set(-.5,.5,0),ls,o,as,s,r),Ia.set(0,1),a=e.ray.intersectTriangle(Xr,Yr,Ys,!1,Ws),a===null))return;const l=e.ray.origin.distanceTo(Ws);l<e.near||l>e.far||t.push({distance:l,point:Ws.clone(),uv:ln.getInterpolation(Ws,Xr,Ys,Yr,ju,Ia,Zu,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(n,e,t,i,s,r){cs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Xs.x=r*cs.x-s*cs.y,Xs.y=s*cs.x+r*cs.y):Xs.copy(cs),n.copy(e),n.x+=Xs.x,n.y+=Xs.y,n.applyMatrix4(_d)}const Ua=new k,zv=new k,Hv=new Ye;class ci{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ua.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ua),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),s=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Wo,Kr=new k;class vd{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],_=s[9],v=s[10],m=s[11],p=s[12],T=s[13],A=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,m-d,M-p).normalize(),i[1].setComponents(l+r,h+c,m+d,M+p).normalize(),i[2].setComponents(l+o,h+u,m+_,M+T).normalize(),i[3].setComponents(l-o,h-u,m-_,M-T).normalize(),i[4].setComponents(l-a,h-f,m-v,M-A).normalize(),t===Wn)i[5].setComponents(l+a,h+f,m+v,M+A).normalize();else if(t===To)i[5].setComponents(a,f,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xd extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new k,Co=new k,Ju=new xt,qs=new Xo,jr=new Wo,Na=new k,Qu=new k;class kv extends Gt{constructor(e=new Pn,t=new xd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ro.fromBufferAttribute(t,s-1),Co.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new gi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;Ju.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=d,m=_-1;v<m;v+=c){const p=u.getX(v),T=u.getX(v+1),A=Zr(this,e,qs,l,p,T,v);A&&t.push(A)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(d),p=Zr(this,e,qs,l,v,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=d,m=_-1;v<m;v+=c){const p=Zr(this,e,qs,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Zr(this,e,qs,l,_-1,d,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ro.fromBufferAttribute(a,s),Co.fromBufferAttribute(a,r),t.distanceSqToSegment(Ro,Co,Na,Qu)>i)return;Na.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Na);if(!(c<e.near||c>e.far))return{distance:c,point:Qu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Sd extends kt{constructor(e,t,i=Hi,s,r,o,a=vn,l=vn,c,u=pr,f=1){if(u!==pr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yo extends Pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*h-o;for(let A=0;A<c;A++){const M=A*f-r;_.push(M,-T,0),v.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const A=T+c*p,M=T+c*(p+1),U=T+1+c*(p+1),P=T+1+c*p;d.push(A,M,P),d.push(M,U,P)}this.setIndex(d),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(v,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gv extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vv extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $u={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Wv{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Xv=new Wv;class Ac{constructor(e){this.manager=e!==void 0?e:Xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";class Yv extends Ac{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$u.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=gr("img");function l(){u(),$u.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class qv extends Ac{constructor(e){super(e)}load(e,t,i,s){const r=new kt,o=new Yv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Kv extends pd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jv extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ef=new xt;class Zv{constructor(e,t,i=0,s=1/0){this.ray=new Xo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,i=[]){return Wl(e,this,i,t),i.sort(tf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wl(e[s],this,i,t);return i.sort(tf),i}}function tf(n,e){return n.distance-e.distance}function Wl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Wl(r[o],e,t,!0)}}class nf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jv extends Wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sf(n,e,t,i){const s=Qv(i);switch(t){case td:return n*e;case id:return n*e/s.components*s.byteLength;case xc:return n*e/s.components*s.byteLength;case sd:return n*e*2/s.components*s.byteLength;case Sc:return n*e*2/s.components*s.byteLength;case nd:return n*e*3/s.components*s.byteLength;case gn:return n*e*4/s.components*s.byteLength;case Mc:return n*e*4/s.components*s.byteLength;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:case xl:return Math.max(n,16)*Math.max(e,8)/4;case gl:case vl:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case po:case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rd:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hl:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qv(n){switch(n){case Zn:case Qh:return{byteLength:1,components:1};case hr:case $h:case Sr:return{byteLength:2,components:1};case _c:case vc:return{byteLength:2,components:4};case Hi:case gc:case Vn:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Md(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $v(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],v=f[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
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
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,p0=`#ifdef USE_BUMPMAP
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,Q0=`struct PhysicalMaterial {
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
}`,$0=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
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
}`,oS=`#if DEPTH_PACKING == 3200
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
}`,aS=`#define DISTANCE
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
}`,lS=`#define DISTANCE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
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
}`,hS=`uniform vec3 diffuse;
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
}`,dS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,xS=`#define NORMAL
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
}`,SS=`#define NORMAL
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
}`,MS=`#define PHONG
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
}`,ES=`#define PHONG
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
}`,yS=`#define STANDARD
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
}`,AS=`#define STANDARD
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
}`,bS=`#define TOON
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
}`,TS=`#define TOON
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
}`,wS=`uniform float size;
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
}`,RS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,PS=`uniform vec3 color;
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
}`,DS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:u0,beginnormal_vertex:f0,bsdfs:h0,iridescence_fragment:d0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:x0,color_pars_fragment:S0,color_pars_vertex:M0,color_vertex:E0,common:y0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:b0,displacementmap_pars_vertex:T0,displacementmap_vertex:w0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:D0,envmap_fragment:L0,envmap_common_pars_fragment:I0,envmap_pars_fragment:U0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:Y0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:G0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:q0,lights_toon_pars_fragment:K0,lights_phong_fragment:j0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:Q0,lights_fragment_begin:$0,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:ux,metalnessmap_pars_fragment:fx,morphinstance_vertex:hx,morphcolor_vertex:dx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:_x,normal_fragment_maps:vx,normal_pars_fragment:xx,normal_pars_vertex:Sx,normal_vertex:Mx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Tx,opaque_fragment:wx,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Px,dithering_fragment:Dx,dithering_pars_fragment:Lx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Fx,shadowmap_vertex:Ox,shadowmask_pars_fragment:Bx,skinbase_vertex:zx,skinning_pars_vertex:Hx,skinning_vertex:kx,skinnormal_vertex:Gx,specularmap_fragment:Vx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:Yx,transmission_fragment:qx,transmission_pars_fragment:Kx,uv_pars_fragment:jx,uv_pars_vertex:Zx,uv_vertex:Jx,worldpos_vertex:Qx,background_vert:$x,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:sS,depth_vert:rS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:hS,meshbasic_vert:dS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:SS,meshphong_vert:MS,meshphong_frag:ES,meshphysical_vert:yS,meshphysical_frag:AS,meshtoon_vert:bS,meshtoon_frag:TS,points_vert:wS,points_frag:RS,shadow_vert:CS,shadow_frag:PS,sprite_vert:DS,sprite_frag:LS},ve={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},An={basic:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:zt([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:zt([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:zt([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:zt([ve.common,ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:zt([ve.lights,ve.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};An.physical={uniforms:zt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Jr={r:0,b:0,g:0},Di=new Jn,IS=new xt;function US(n,e,t,i,s,r,o){const a=new it(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function v(A){let M=!1;const U=_(A);U===null?p(a,l):U&&U.isColor&&(p(U,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,M){const U=_(M);U&&(U.isCubeTexture||U.mapping===Vo)?(u===void 0&&(u=new Xn(new Er(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Is(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(M.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(Di)),u.material.toneMapped=$e.getTransfer(U.colorSpace)!==ct,(f!==U||h!==U.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Xn(new Yo(2,2),new Mi({name:"BackgroundMaterial",uniforms:Is(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$e.getTransfer(U.colorSpace)!==ct,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,h=U.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,M){A.getRGB(Jr,dd(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,M,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,M=1){a.set(A),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:v,addToRenderList:m,dispose:T}}function NS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(y,L,z,G,te){let ae=!1;const Y=f(G,z,L);r!==Y&&(r=Y,c(r.object)),ae=d(y,G,z,te),ae&&_(y,G,z,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,M(y,L,z,G),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,L,z){const G=z.wireframe===!0;let te=i[y.id];te===void 0&&(te={},i[y.id]=te);let ae=te[L.id];ae===void 0&&(ae={},te[L.id]=ae);let Y=ae[G];return Y===void 0&&(Y=h(l()),ae[G]=Y),Y}function h(y){const L=[],z=[],G=[];for(let te=0;te<t;te++)L[te]=0,z[te]=0,G[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:G,object:y,attributes:{},index:null}}function d(y,L,z,G){const te=r.attributes,ae=L.attributes;let Y=0;const se=z.getAttributes();for(const H in se)if(se[H].location>=0){const xe=te[H];let Ce=ae[H];if(Ce===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function _(y,L,z,G){const te={},ae=L.attributes;let Y=0;const se=z.getAttributes();for(const H in se)if(se[H].location>=0){let xe=ae[H];xe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),te[H]=Ce,Y++}r.attributes=te,r.attributesNum=Y,r.index=G}function v(){const y=r.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const z=r.newAttributes,G=r.enabledAttributes,te=r.attributeDivisors;z[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),te[y]!==L&&(n.vertexAttribDivisor(y,L),te[y]=L)}function T(){const y=r.newAttributes,L=r.enabledAttributes;for(let z=0,G=L.length;z<G;z++)L[z]!==y[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function A(y,L,z,G,te,ae,Y){Y===!0?n.vertexAttribIPointer(y,L,z,te,ae):n.vertexAttribPointer(y,L,z,G,te,ae)}function M(y,L,z,G){v();const te=G.attributes,ae=z.getAttributes(),Y=L.defaultAttributeValues;for(const se in ae){const H=ae[se];if(H.location>=0){let me=te[se];if(me===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const xe=me.normalized,Ce=me.itemSize,Fe=e.get(me);if(Fe===void 0)continue;const Je=Fe.buffer,ie=Fe.type,ge=Fe.bytesPerElement,be=ie===n.INT||ie===n.UNSIGNED_INT||me.gpuType===gc;if(me.isInterleavedBufferAttribute){const N=me.data,ne=N.stride,ce=me.offset;if(N.isInstancedInterleavedBuffer){for(let le=0;le<H.locationSize;le++)p(H.location+le,N.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let le=0;le<H.locationSize;le++)m(H.location+le);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let le=0;le<H.locationSize;le++)A(H.location+le,Ce/H.locationSize,ie,xe,ne*ge,(ce+Ce/H.locationSize*le)*ge,be)}else{if(me.isInstancedBufferAttribute){for(let N=0;N<H.locationSize;N++)p(H.location+N,me.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let N=0;N<H.locationSize;N++)m(H.location+N);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let N=0;N<H.locationSize;N++)A(H.location+N,Ce/H.locationSize,ie,xe,Ce*ge,Ce/H.locationSize*N*ge,be)}}else if(Y!==void 0){const xe=Y[se];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(H.location,xe);break;case 3:n.vertexAttrib3fv(H.location,xe);break;case 4:n.vertexAttrib4fv(H.location,xe);break;default:n.vertexAttrib1fv(H.location,xe)}}}}T()}function U(){B();for(const y in i){const L=i[y];for(const z in L){const G=L[z];for(const te in G)u(G[te].object),delete G[te];delete L[z]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const z in L){const G=L[z];for(const te in G)u(G[te].object),delete G[te];delete L[z]}delete i[y.id]}function C(y){for(const L in i){const z=i[L];if(z[y.id]===void 0)continue;const G=z[y.id];for(const te in G)u(G[te].object),delete G[te];delete z[y.id]}}function B(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function FS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const B=C===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!B)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:U,maxSamples:P}}function BS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ci,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let M=p.clippingState||null;l.value=M,M=u(_,h,A,d);for(let U=0;U!==A;++U)M[U]=t[U];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=d+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==v;++A,M+=4)o.copy(f[A]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function zS(n){let e=new WeakMap;function t(o,a){return a===hl?o.mapping=Ps:a===dl&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hl||a===dl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Uv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ps=4,rf=[.125,.215,.35,.446,.526,.582],Fi=20,Fa=new Kv,of=new it;let Oa=null,Ba=0,za=0,Ha=!1;const Ui=(1+Math.sqrt(5))/2,us=1/Ui,af=[new k(-Ui,us,0),new k(Ui,us,0),new k(-us,0,Ui),new k(us,0,Ui),new k(0,Ui,-us),new k(0,Ui,us),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],HS=new k;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=HS}=r;Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,za),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Sr,format:gn,colorSpace:Ls,depthBuffer:!1},s=cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(r)),this._blurMaterial=GS(r,e,t)}return s}_compileMaterial(e){const t=new Xn(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,s,r){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(of),f.toneMapping=pi,f.autoClear=!1;const _=new ud({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),v=new Xn(new Er,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(of),m=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):A===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const M=this._cubeSize;Qr(s,A*M,T>2?M:0,M,M),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ps||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=af[(s-r-1)%af.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xn(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let T=0;for(let C=0;C<Fi;++C){const B=C/v,b=Math.exp(-B*B/2);p.push(b),C===0?T+=b:C<m&&(T+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const M=this._sizeLods[s],U=3*M*(s>A-ps?s-A+ps:0),P=4*(this._cubeSize-M);Qr(t,U,P,3*M,2*M),l.setRenderTarget(t),l.render(f,Fa)}}function kS(n){const e=[],t=[],i=[];let s=n;const r=n-ps+1+rf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ps?l=rf[o-n+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,v=3,m=2,p=1,T=new Float32Array(v*_*d),A=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,B=P>2?0:-1,b=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];T.set(b,v*_*P),A.set(h,m*_*P);const y=[P,P,P,P,P,P];M.set(y,p*_*P)}const U=new Pn;U.setAttribute("position",new xn(T,v)),U.setAttribute("uv",new xn(A,m)),U.setAttribute("faceIndex",new xn(M,p)),e.push(U),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cf(n,e,t){const i=new Gi(n,e,t);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function GS(n,e,t){const i=new Float32Array(Fi),s=new k(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function uf(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ff(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function VS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hl||l===dl,u=l===Ps||l===Ds;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new lf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new lf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function XS(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let A=0,M=T.length;A<M;A+=3){const U=T[A+0],P=T[A+1],C=T[A+2];h.push(U,P,P,C,C,U)}}else if(_!==void 0){const T=_.array;v=_.version;for(let A=0,M=T.length/3-1;A<M;A+=3){const U=A+0,P=A+1,C=A+2;h.push(U,P,P,C,C,U)}}else return;const m=new(ad(h)?hd:fd)(h,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function YS(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,_);let p=0;for(let T=0;T<_;T++)p+=d[T]*v[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function qS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function KS(n,e,t){const i=new WeakMap,s=new Mt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let A=0;d===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let M=a.attributes.position.count*A,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*U*4*f),C=new ld(P,M,U,f);C.type=Vn,C.needsUpdate=!0;const B=A*4;for(let y=0;y<f;y++){const L=m[y],z=p[y],G=T[y],te=M*U*4*y;for(let ae=0;ae<L.count;ae++){const Y=ae*B;d===!0&&(s.fromBufferAttribute(L,ae),P[te+Y+0]=s.x,P[te+Y+1]=s.y,P[te+Y+2]=s.z,P[te+Y+3]=0),_===!0&&(s.fromBufferAttribute(z,ae),P[te+Y+4]=s.x,P[te+Y+5]=s.y,P[te+Y+6]=s.z,P[te+Y+7]=0),v===!0&&(s.fromBufferAttribute(G,ae),P[te+Y+8]=s.x,P[te+Y+9]=s.y,P[te+Y+10]=s.z,P[te+Y+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new ke(M,U)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function jS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ed=new kt,hf=new Sd(1,1),yd=new ld,Ad=new _v,bd=new md,df=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=df[s];if(r===void 0&&(r=new Float32Array(s),df[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;_f.set(i),n.uniformMatrix2fv(this.addr,!1,_f),Tt(t,i)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),Tt(t,i)}}function nM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),Tt(t,i)}}function iM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function aM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function fM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hf.compareFunction=od,r=hf):r=Ed,t.setTexture2D(e||r,s)}function hM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ad,s)}function dM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bd,s)}function pM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yd,s)}function mM(n){switch(n){case 5126:return ZS;case 35664:return JS;case 35665:return QS;case 35666:return $S;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(n,e){n.uniform1fv(this.addr,e)}function _M(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function vM(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function xM(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function SM(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MM(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function EM(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yM(n,e){n.uniform1iv(this.addr,e)}function AM(n,e){n.uniform2iv(this.addr,e)}function bM(n,e){n.uniform3iv(this.addr,e)}function TM(n,e){n.uniform4iv(this.addr,e)}function wM(n,e){n.uniform1uiv(this.addr,e)}function RM(n,e){n.uniform2uiv(this.addr,e)}function CM(n,e){n.uniform3uiv(this.addr,e)}function PM(n,e){n.uniform4uiv(this.addr,e)}function DM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ed,r[o])}function LM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ad,r[o])}function IM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bd,r[o])}function UM(n,e,t){const i=this.cache,s=e.length,r=qo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function NM(n){switch(n){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return SM;case 35675:return MM;case 35676:return EM;case 5124:case 35670:return yM;case 35667:case 35671:return AM;case 35668:case 35672:return bM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return UM}}class FM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}}class OM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NM(t.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function vf(n,e){n.seq.push(e),n.map[e.id]=e}function zM(n,e,t){const i=n.name,s=i.length;for(ka.lastIndex=0;;){const r=ka.exec(i),o=ka.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vf(t,c===void 0?new FM(a,n,e):new OM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new BM(a),vf(t,f)),t=f}}}class go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function xf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const HM=37297;let kM=0;function GM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Sf=new Ye;function VM(n){$e._getMatrix(Sf,$e.workingColorSpace,n);const e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case bo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+GM(n.getShaderSource(e),o)}else return s}function WM(n,e){const t=VM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XM(n,e){let t;switch(e){case k_:t="Linear";break;case G_:t="Reinhard";break;case V_:t="Cineon";break;case W_:t="ACESFilmic";break;case Y_:t="AgX";break;case q_:t="Neutral";break;case X_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new k;function YM(){$e.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function KM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zs(n){return n!==""}function Ef(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(ZM,QM)}const JM=new Map;function QM(n,e){let t=Ke[e];if(t===void 0){const i=JM.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(n){return n.replace($M,eE)}function eE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===S_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ps:case Ds:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function sE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case z_:e="ENVMAP_BLENDING_MIX";break;case H_:e="ENVMAP_BLENDING_ADD";break}return e}function rE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tE(t),c=nE(t),u=iE(t),f=sE(t),h=rE(t),d=qM(t),_=KM(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==pi?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,WM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Xl(o),o=Ef(o,t),o=yf(o,t),a=Xl(a),a=Ef(a,t),a=yf(a,t),o=Af(o),a=Af(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+o,M=T+p+a,U=xf(s,s.VERTEX_SHADER,A),P=xf(s,s.FRAGMENT_SHADER,M);s.attachShader(v,U),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(U).trim(),te=s.getShaderInfoLog(P).trim();let ae=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,U,P);else{const se=Mf(s,U,"vertex"),H=Mf(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+se+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||te==="")&&(Y=!1);Y&&(L.diagnostics={runnable:ae,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(U),s.deleteShader(P),B=new go(s,v),b=jM(s,v)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,HM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=P,this}let aE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cE(e),t.set(e,i)),i}}class cE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function uE(n,e,t,i,s,r,o){const a=new yc,l=new lE,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,z,G){const te=z.fog,ae=G.geometry,Y=b.isMeshStandardMaterial?z.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),H=se&&se.mapping===Vo?se.image.height:null,me=_[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const xe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ce=xe!==void 0?xe.length:0;let Fe=0;ae.morphAttributes.position!==void 0&&(Fe=1),ae.morphAttributes.normal!==void 0&&(Fe=2),ae.morphAttributes.color!==void 0&&(Fe=3);let Je,ie,ge,be;if(me){const st=An[me];Je=st.vertexShader,ie=st.fragmentShader}else Je=b.vertexShader,ie=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const N=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),ce=G.isInstancedMesh===!0,le=G.isBatchedMesh===!0,Oe=!!b.map,w=!!b.matcap,R=!!se,x=!!b.aoMap,ee=!!b.lightMap,K=!!b.bumpMap,j=!!b.normalMap,Q=!!b.displacementMap,re=!!b.emissiveMap,J=!!b.metalnessMap,Z=!!b.roughnessMap,Se=b.anisotropy>0,E=b.clearcoat>0,g=b.dispersion>0,D=b.iridescence>0,W=b.sheen>0,$=b.transmission>0,V=Se&&!!b.anisotropyMap,ye=E&&!!b.clearcoatMap,pe=E&&!!b.clearcoatNormalMap,Ae=E&&!!b.clearcoatRoughnessMap,we=D&&!!b.iridescenceMap,ue=D&&!!b.iridescenceThicknessMap,Te=W&&!!b.sheenColorMap,De=W&&!!b.sheenRoughnessMap,Le=!!b.specularMap,_e=!!b.specularColorMap,Ve=!!b.specularIntensityMap,I=$&&!!b.transmissionMap,Me=$&&!!b.thicknessMap,fe=!!b.gradientMap,Pe=!!b.alphaMap,he=b.alphaTest>0,oe=!!b.alphaHash,Ie=!!b.extensions;let We=pi;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(We=n.toneMapping);const mt={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:ie,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:le,batchingColor:le&&G._colorsTexture!==null,instancing:ce,instancingColor:ce&&G.instanceColor!==null,instancingMorph:ce&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ls,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:w,envMap:R,envMapMode:R&&se.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:ee,bumpMap:K,normalMap:j,displacementMap:h&&Q,emissiveMap:re,normalMapObjectSpace:j&&b.normalMapType===Q_,normalMapTangentSpace:j&&b.normalMapType===J_,metalnessMap:J,roughnessMap:Z,anisotropy:Se,anisotropyMap:V,clearcoat:E,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ae,dispersion:g,iridescence:D,iridescenceMap:we,iridescenceThicknessMap:ue,sheen:W,sheenColorMap:Te,sheenRoughnessMap:De,specularMap:Le,specularColorMap:_e,specularIntensityMap:Ve,transmission:$,transmissionMap:I,thicknessMap:Me,gradientMap:fe,opaque:b.transparent===!1&&b.blending===Es&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:he,alphaHash:oe,combine:b.combine,mapUv:Oe&&v(b.map.channel),aoMapUv:x&&v(b.aoMap.channel),lightMapUv:ee&&v(b.lightMap.channel),bumpMapUv:K&&v(b.bumpMap.channel),normalMapUv:j&&v(b.normalMap.channel),displacementMapUv:Q&&v(b.displacementMap.channel),emissiveMapUv:re&&v(b.emissiveMap.channel),metalnessMapUv:J&&v(b.metalnessMap.channel),roughnessMapUv:Z&&v(b.roughnessMap.channel),anisotropyMapUv:V&&v(b.anisotropyMap.channel),clearcoatMapUv:ye&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(b.sheenRoughnessMap.channel),specularMapUv:Le&&v(b.specularMap.channel),specularColorMapUv:_e&&v(b.specularColorMap.channel),specularIntensityMapUv:Ve&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:Me&&v(b.thicknessMap.channel),alphaMapUv:Pe&&v(b.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(j||Se),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ae.attributes.uv&&(Oe||Pe),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ne,skinning:G.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gn,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(y,b),A(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function T(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function A(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const y=_[b.type];let L;if(y){const z=An[y];L=Pv.clone(z.uniforms)}else L=b.uniforms;return L}function U(b,y){let L;for(let z=0,G=u.length;z<G;z++){const te=u[z];if(te.cacheKey===y){L=te,++L.usedTimes;break}}return L===void 0&&(L=new oE(n,y,b,r),u.push(L)),L}function P(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:B}}function fE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,_,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,_,v,m){const p=o(f,h,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,_,v,m){const p=o(f,h,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||hE),i.length>1&&i.sort(h||Tf),s.length>1&&s.sort(h||Tf)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function dE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new wf,n.set(i,[o])):s>=r.length?(o=new wf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function mE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gE=0;function _E(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vE(n){const e=new pE,t=mE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new xt,o=new xt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,T=0,A=0,M=0,U=0,P=0,C=0;c.sort(_E);for(let b=0,y=c.length;b<y;b++){const L=c[b],z=L.color,G=L.intensity,te=L.distance,ae=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*G,f+=z.g*G,h+=z.b*G;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],G);C++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const se=L.shadow,H=t.get(L);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=L.shadow.matrix,T++}i.directional[d]=Y,d++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(G),Y.distance=te,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[v]=Y;const se=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,se.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=se.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=ae,M++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(z).multiplyScalar(G),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Y,m++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const se=L.shadow,H=t.get(L);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,H.shadowCameraNear=se.camera.near,H.shadowCameraFar=se.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=L.shadow.matrix,A++}i.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(G),Y.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==_||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==T||B.numPointShadows!==A||B.numSpotShadows!==M||B.numSpotMaps!==U||B.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,B.directionalLength=d,B.pointLength=_,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=T,B.numPointShadows=A,B.numSpotShadows=M,B.numSpotMaps=U,B.numLightProbes=C,i.version=gE++)}function l(c,u){let f=0,h=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const A=c[p];if(A.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(A.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Rf(n){const e=new vE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xE(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Rf(n),e.set(s,[a])):r>=o.length?(a=new Rf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
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
}`;function EE(n,e,t){let i=new vd;const s=new ke,r=new ke,o=new Mt,a=new Gv({depthPacking:Z_}),l=new Vv,c={},u=t.maxTextureSize,f={[Si]:qt,[qt]:Si,[Gn]:Gn},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pn;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(P,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==zn&&this.type===zn,te=p===zn&&this.type!==zn;for(let ae=0,Y=P.length;ae<Y;ae++){const se=P[ae],H=se.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const me=H.getFrameExtents();if(s.multiply(me),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,H.mapSize.y=r.y)),H.map===null||G===!0||te===!0){const Ce=this.type!==zn?{minFilter:vn,magFilter:vn}:{};H.map!==null&&H.map.dispose(),H.map=new Gi(s.x,s.y,Ce),H.map.texture.name=se.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const xe=H.getViewportCount();for(let Ce=0;Ce<xe;Ce++){const Fe=H.getViewport(Ce);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),z.viewport(o),H.updateMatrices(se,Ce),i=H.getFrustum(),M(C,B,H.camera,se,this.type)}H.isPointLightShadow!==!0&&this.type===zn&&T(H,B),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,L)};function T(P,C){const B=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gi(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,B,h,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,B,d,v,null)}function A(P,C,B,b){let y=null;const L=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)y=L;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=y.uuid,G=C.uuid;let te=c[z];te===void 0&&(te={},c[z]=te);let ae=te[G];ae===void 0&&(ae=y.clone(),te[G]=ae,C.addEventListener("dispose",U)),y=ae}if(y.visible=C.visible,y.wireframe=C.wireframe,b===zn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=B}return y}function M(P,C,B,b,y){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===zn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const G=e.update(P),te=P.material;if(Array.isArray(te)){const ae=G.groups;for(let Y=0,se=ae.length;Y<se;Y++){const H=ae[Y],me=te[H.materialIndex];if(me&&me.visible){const xe=A(P,me,b,y);P.onBeforeShadow(n,P,C,B,G,xe,H),n.renderBufferDirect(B,null,G,xe,P,H),P.onAfterShadow(n,P,C,B,G,xe,H)}}}else if(te.visible){const ae=A(P,te,b,y);P.onBeforeShadow(n,P,C,B,G,ae,null),n.renderBufferDirect(B,null,G,ae,P,null),P.onAfterShadow(n,P,C,B,G,ae,null)}}const z=P.children;for(let G=0,te=z.length;G<te;G++)M(z[G],C,B,b,y)}function U(P){P.target.removeEventListener("dispose",U);for(const B in c){const b=c[B],y=P.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const yE={[rl]:ol,[al]:ul,[ll]:fl,[Cs]:cl,[ol]:rl,[ul]:al,[fl]:ll,[cl]:Cs};function AE(n,e){function t(){let I=!1;const Me=new Mt;let fe=null;const Pe=new Mt(0,0,0,0);return{setMask:function(he){fe!==he&&!I&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){I=he},setClear:function(he,oe,Ie,We,mt){mt===!0&&(he*=We,oe*=We,Ie*=We),Me.set(he,oe,Ie,We),Pe.equals(Me)===!1&&(n.clearColor(he,oe,Ie,We),Pe.copy(Me))},reset:function(){I=!1,fe=null,Pe.set(-1,0,0,0)}}}function i(){let I=!1,Me=!1,fe=null,Pe=null,he=null;return{setReversed:function(oe){if(Me!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;const We=he;he=null,this.setClear(We)}},getReversed:function(){return Me},setTest:function(oe){oe?N(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!I&&(n.depthMask(oe),fe=oe)},setFunc:function(oe){if(Me&&(oe=yE[oe]),Pe!==oe){switch(oe){case rl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){I=oe},setClear:function(oe){he!==oe&&(Me&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){I=!1,fe=null,Pe=null,he=null,Me=!1}}}function s(){let I=!1,Me=null,fe=null,Pe=null,he=null,oe=null,Ie=null,We=null,mt=null;return{setTest:function(st){I||(st?N(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(st){Me!==st&&!I&&(n.stencilMask(st),Me=st)},setFunc:function(st,fn,Dn){(fe!==st||Pe!==fn||he!==Dn)&&(n.stencilFunc(st,fn,Dn),fe=st,Pe=fn,he=Dn)},setOp:function(st,fn,Dn){(oe!==st||Ie!==fn||We!==Dn)&&(n.stencilOp(st,fn,Dn),oe=st,Ie=fn,We=Dn)},setLocked:function(st){I=st},setClear:function(st){mt!==st&&(n.clearStencil(st),mt=st)},reset:function(){I=!1,Me=null,fe=null,Pe=null,he=null,oe=null,Ie=null,We=null,mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,v=!1,m=null,p=null,T=null,A=null,M=null,U=null,P=null,C=new it(0,0,0),B=0,b=!1,y=null,L=null,z=null,G=null,te=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,se=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=se>=1):H.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=se>=2);let me=null,xe={};const Ce=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Je=new Mt().fromArray(Ce),ie=new Mt().fromArray(Fe);function ge(I,Me,fe,Pe){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(I,oe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<fe;Ie++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Me+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const be={};be[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(Cs),K(!1),j(Tu),N(n.CULL_FACE),x(di);function N(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ne(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function ce(I,Me){return f[I]!==Me?(n.bindFramebuffer(I,Me),f[I]=Me,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function le(I,Me){let fe=d,Pe=!1;if(I){fe=h.get(Me),fe===void 0&&(fe=[],h.set(Me,fe));const he=I.textures;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ie=he.length;oe<Ie;oe++)fe[oe]=n.COLOR_ATTACHMENT0+oe;fe.length=he.length,Pe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(fe)}function Oe(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const w={[Ni]:n.FUNC_ADD,[E_]:n.FUNC_SUBTRACT,[y_]:n.FUNC_REVERSE_SUBTRACT};w[A_]=n.MIN,w[b_]=n.MAX;const R={[T_]:n.ZERO,[w_]:n.ONE,[R_]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[U_]:n.SRC_ALPHA_SATURATE,[L_]:n.DST_COLOR,[P_]:n.DST_ALPHA,[C_]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[I_]:n.ONE_MINUS_DST_COLOR,[D_]:n.ONE_MINUS_DST_ALPHA,[N_]:n.CONSTANT_COLOR,[F_]:n.ONE_MINUS_CONSTANT_COLOR,[O_]:n.CONSTANT_ALPHA,[B_]:n.ONE_MINUS_CONSTANT_ALPHA};function x(I,Me,fe,Pe,he,oe,Ie,We,mt,st){if(I===di){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(N(n.BLEND),v=!0),I!==M_){if(I!==m||st!==b){if((p!==Ni||M!==Ni)&&(n.blendEquation(n.FUNC_ADD),p=Ni,M=Ni),st)switch(I){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,A=null,U=null,P=null,C.set(0,0,0),B=0,m=I,b=st}return}he=he||Me,oe=oe||fe,Ie=Ie||Pe,(Me!==p||he!==M)&&(n.blendEquationSeparate(w[Me],w[he]),p=Me,M=he),(fe!==T||Pe!==A||oe!==U||Ie!==P)&&(n.blendFuncSeparate(R[fe],R[Pe],R[oe],R[Ie]),T=fe,A=Pe,U=oe,P=Ie),(We.equals(C)===!1||mt!==B)&&(n.blendColor(We.r,We.g,We.b,mt),C.copy(We),B=mt),m=I,b=!1}function ee(I,Me){I.side===Gn?ne(n.CULL_FACE):N(n.CULL_FACE);let fe=I.side===qt;Me&&(fe=!fe),K(fe),I.blending===Es&&I.transparent===!1?x(di):x(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Pe=I.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function j(I){I!==v_?(N(n.CULL_FACE),I!==L&&(I===Tu?n.cullFace(n.BACK):I===x_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),L=I}function Q(I){I!==z&&(Y&&n.lineWidth(I),z=I)}function re(I,Me,fe){I?(N(n.POLYGON_OFFSET_FILL),(G!==Me||te!==fe)&&(n.polygonOffset(Me,fe),G=Me,te=fe)):ne(n.POLYGON_OFFSET_FILL)}function J(I){I?N(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function Z(I){I===void 0&&(I=n.TEXTURE0+ae-1),me!==I&&(n.activeTexture(I),me=I)}function Se(I,Me,fe){fe===void 0&&(me===null?fe=n.TEXTURE0+ae-1:fe=me);let Pe=xe[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[fe]=Pe),(Pe.type!==I||Pe.texture!==Me)&&(me!==fe&&(n.activeTexture(fe),me=fe),n.bindTexture(I,Me||be[I]),Pe.type=I,Pe.texture=Me)}function E(){const I=xe[me];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(I){Je.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function De(I){ie.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function Le(I,Me){let fe=c.get(Me);fe===void 0&&(fe=new WeakMap,c.set(Me,fe));let Pe=fe.get(I);Pe===void 0&&(Pe=n.getUniformBlockIndex(Me,I.name),fe.set(I,Pe))}function _e(I,Me){const Pe=c.get(Me).get(I);l.get(Me)!==Pe&&(n.uniformBlockBinding(Me,Pe,I.__bindingPointIndex),l.set(Me,Pe))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,xe={},f={},h=new WeakMap,d=[],_=null,v=!1,m=null,p=null,T=null,A=null,M=null,U=null,P=null,C=new it(0,0,0),B=0,b=!1,y=null,L=null,z=null,G=null,te=null,Je.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:ne,bindFramebuffer:ce,drawBuffers:le,useProgram:Oe,setBlending:x,setMaterial:ee,setFlipSided:K,setCullFace:j,setLineWidth:Q,setPolygonOffset:re,setScissorTest:J,activeTexture:Z,bindTexture:Se,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:we,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:ye,scissor:Te,viewport:De,reset:Ve}}function bE(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return d?new OffscreenCanvas(E,g):gr("canvas")}function v(E,g,D){let W=1;const $=Se(E);if(($.width>D||$.height>D)&&(W=D/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(W*$.width),ye=Math.floor(W*$.height);f===void 0&&(f=_(V,ye));const pe=g?_(V,ye):f;return pe.width=V,pe.height=ye,pe.getContext("2d").drawImage(E,0,0,V,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+ye+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,g,D,W,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=g;if(g===n.RED&&(D===n.FLOAT&&(V=n.R32F),D===n.HALF_FLOAT&&(V=n.R16F),D===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.R8UI),D===n.UNSIGNED_SHORT&&(V=n.R16UI),D===n.UNSIGNED_INT&&(V=n.R32UI),D===n.BYTE&&(V=n.R8I),D===n.SHORT&&(V=n.R16I),D===n.INT&&(V=n.R32I)),g===n.RG&&(D===n.FLOAT&&(V=n.RG32F),D===n.HALF_FLOAT&&(V=n.RG16F),D===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RG8UI),D===n.UNSIGNED_SHORT&&(V=n.RG16UI),D===n.UNSIGNED_INT&&(V=n.RG32UI),D===n.BYTE&&(V=n.RG8I),D===n.SHORT&&(V=n.RG16I),D===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGB8UI),D===n.UNSIGNED_SHORT&&(V=n.RGB16UI),D===n.UNSIGNED_INT&&(V=n.RGB32UI),D===n.BYTE&&(V=n.RGB8I),D===n.SHORT&&(V=n.RGB16I),D===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),D===n.UNSIGNED_INT&&(V=n.RGBA32UI),D===n.BYTE&&(V=n.RGBA8I),D===n.SHORT&&(V=n.RGBA16I),D===n.INT&&(V=n.RGBA32I)),g===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),g===n.RGBA){const ye=$?bo:$e.getTransfer(W);D===n.FLOAT&&(V=n.RGBA32F),D===n.HALF_FLOAT&&(V=n.RGBA16F),D===n.UNSIGNED_BYTE&&(V=ye===ct?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(E,g){let D;return E?g===null||g===Hi||g===dr?D=n.DEPTH24_STENCIL8:g===Vn?D=n.DEPTH32F_STENCIL8:g===hr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hi||g===dr?D=n.DEPTH_COMPONENT24:g===Vn?D=n.DEPTH_COMPONENT32F:g===hr&&(D=n.DEPTH_COMPONENT16),D}function U(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==vn&&E.minFilter!==wn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){const g=E.target;g.removeEventListener("dispose",P),B(g),g.isVideoTexture&&u.delete(g)}function C(E){const g=E.target;g.removeEventListener("dispose",C),y(g)}function B(E){const g=i.get(E);if(g.__webglInit===void 0)return;const D=E.source,W=h.get(D);if(W){const $=W[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(E),Object.keys(W).length===0&&h.delete(D)}i.remove(E)}function b(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const D=E.source,W=h.get(D);delete W[g.__cacheKey],o.memory.textures--}function y(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let $=0;$<g.__webglFramebuffer[W].length;$++)n.deleteFramebuffer(g.__webglFramebuffer[W][$]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=E.textures;for(let W=0,$=D.length;W<$;W++){const V=i.get(D[W]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(D[W])}i.remove(E)}let L=0;function z(){L=0}function G(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function te(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ae(E,g){const D=i.get(E);if(E.isVideoTexture&&J(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(D,E,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function Y(E,g){const D=i.get(E);if(E.version>0&&D.__version!==E.version){be(D,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function se(E,g){const D=i.get(E);if(E.version>0&&D.__version!==E.version){be(D,E,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function H(E,g){const D=i.get(E);if(E.version>0&&D.__version!==E.version){N(D,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const me={[pl]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},xe={[vn]:n.NEAREST,[K_]:n.NEAREST_MIPMAP_NEAREST,[Rr]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},Ce={[$_]:n.NEVER,[rv]:n.ALWAYS,[ev]:n.LESS,[od]:n.LEQUAL,[tv]:n.EQUAL,[sv]:n.GEQUAL,[nv]:n.GREATER,[iv]:n.NOTEQUAL};function Fe(E,g){if(g.type===Vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wn||g.magFilter===ua||g.magFilter===Rr||g.magFilter===Bi||g.minFilter===wn||g.minFilter===ua||g.minFilter===Rr||g.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,me[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===vn||g.minFilter!==Rr&&g.minFilter!==Bi||g.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Je(E,g){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));const W=g.source;let $=h.get(W);$===void 0&&($={},h.set(W,$));const V=te(g);if(V!==E.__cacheKey){$[V]===void 0&&($[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[V].usedTimes++;const ye=$[E.__cacheKey];ye!==void 0&&($[E.__cacheKey].usedTimes--,ye.usedTimes===0&&b(g)),E.__cacheKey=V,E.__webglTexture=$[V].texture}return D}function ie(E,g,D){return Math.floor(Math.floor(E/D)/g)}function ge(E,g,D,W){const V=E.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,W,g.data);else{V.sort((ue,Te)=>ue.start-Te.start);let ye=0;for(let ue=1;ue<V.length;ue++){const Te=V[ye],De=V[ue],Le=Te.start+Te.count,_e=ie(De.start,g.width,4),Ve=ie(Te.start,g.width,4);De.start<=Le+1&&_e===Ve&&ie(De.start+De.count-1,g.width,4)===_e?Te.count=Math.max(Te.count,De.start+De.count-Te.start):(++ye,V[ye]=De)}V.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ue=0,Te=V.length;ue<Te;ue++){const De=V[ue],Le=Math.floor(De.start/4),_e=Math.ceil(De.count/4),Ve=Le%g.width,I=Math.floor(Le/g.width),Me=_e,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ve,I,Me,fe,D,W,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function be(E,g,D){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const $=Je(E,g),V=g.source;t.bindTexture(W,E.__webglTexture,n.TEXTURE0+D);const ye=i.get(V);if(V.version!==ye.__version||$===!0){t.activeTexture(n.TEXTURE0+D);const pe=$e.getPrimaries($e.workingColorSpace),Ae=g.colorSpace===fi?null:$e.getPrimaries(g.colorSpace),we=g.colorSpace===fi||pe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ue=v(g.image,!1,s.maxTextureSize);ue=Z(g,ue);const Te=r.convert(g.format,g.colorSpace),De=r.convert(g.type);let Le=A(g.internalFormat,Te,De,g.colorSpace,g.isVideoTexture);Fe(W,g);let _e;const Ve=g.mipmaps,I=g.isVideoTexture!==!0,Me=ye.__version===void 0||$===!0,fe=V.dataReady,Pe=U(g,ue);if(g.isDepthTexture)Le=M(g.format===mr,g.type),Me&&(I?t.texStorage2D(n.TEXTURE_2D,1,Le,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Le,ue.width,ue.height,0,Te,De,null));else if(g.isDataTexture)if(Ve.length>0){I&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,Ve[0].width,Ve[0].height);for(let he=0,oe=Ve.length;he<oe;he++)_e=Ve[he],I?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Te,De,_e.data):t.texImage2D(n.TEXTURE_2D,he,Le,_e.width,_e.height,0,Te,De,_e.data);g.generateMipmaps=!1}else I?(Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,ue.width,ue.height),fe&&ge(g,ue,Te,De)):t.texImage2D(n.TEXTURE_2D,0,Le,ue.width,ue.height,0,Te,De,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,Ve[0].width,Ve[0].height,ue.depth);for(let he=0,oe=Ve.length;he<oe;he++)if(_e=Ve[he],g.format!==gn)if(Te!==null)if(I){if(fe)if(g.layerUpdates.size>0){const Ie=sf(_e.width,_e.height,g.format,g.type);for(const We of g.layerUpdates){const mt=_e.data.subarray(We*Ie/_e.data.BYTES_PER_ELEMENT,(We+1)*Ie/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,We,_e.width,_e.height,1,Te,mt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ue.depth,Te,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Le,_e.width,_e.height,ue.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ue.depth,Te,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Le,_e.width,_e.height,ue.depth,0,Te,De,_e.data)}else{I&&Me&&t.texStorage2D(n.TEXTURE_2D,Pe,Le,Ve[0].width,Ve[0].height);for(let he=0,oe=Ve.length;he<oe;he++)_e=Ve[he],g.format!==gn?Te!==null?I?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,Te,De,_e.data):t.texImage2D(n.TEXTURE_2D,he,Le,_e.width,_e.height,0,Te,De,_e.data)}else if(g.isDataArrayTexture)if(I){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Le,ue.width,ue.height,ue.depth),fe)if(g.layerUpdates.size>0){const he=sf(ue.width,ue.height,g.format,g.type);for(const oe of g.layerUpdates){const Ie=ue.data.subarray(oe*he/ue.data.BYTES_PER_ELEMENT,(oe+1)*he/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,Te,De,Ie)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,De,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,Te,De,ue.data);else if(g.isData3DTexture)I?(Me&&t.texStorage3D(n.TEXTURE_3D,Pe,Le,ue.width,ue.height,ue.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,De,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,Te,De,ue.data);else if(g.isFramebufferTexture){if(Me)if(I)t.texStorage2D(n.TEXTURE_2D,Pe,Le,ue.width,ue.height);else{let he=ue.width,oe=ue.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Le,he,oe,0,Te,De,null),he>>=1,oe>>=1}}else if(Ve.length>0){if(I&&Me){const he=Se(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Le,he.width,he.height)}for(let he=0,oe=Ve.length;he<oe;he++)_e=Ve[he],I?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Te,De,_e):t.texImage2D(n.TEXTURE_2D,he,Le,Te,De,_e);g.generateMipmaps=!1}else if(I){if(Me){const he=Se(ue);t.texStorage2D(n.TEXTURE_2D,Pe,Le,he.width,he.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,De,ue)}else t.texImage2D(n.TEXTURE_2D,0,Le,Te,De,ue);m(g)&&p(W),ye.__version=V.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function N(E,g,D){if(g.image.length!==6)return;const W=Je(E,g),$=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+D);const V=i.get($);if($.version!==V.__version||W===!0){t.activeTexture(n.TEXTURE0+D);const ye=$e.getPrimaries($e.workingColorSpace),pe=g.colorSpace===fi?null:$e.getPrimaries(g.colorSpace),Ae=g.colorSpace===fi||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!we&&!ue?Te[oe]=v(g.image[oe],!0,s.maxCubemapSize):Te[oe]=ue?g.image[oe].image:g.image[oe],Te[oe]=Z(g,Te[oe]);const De=Te[0],Le=r.convert(g.format,g.colorSpace),_e=r.convert(g.type),Ve=A(g.internalFormat,Le,_e,g.colorSpace),I=g.isVideoTexture!==!0,Me=V.__version===void 0||W===!0,fe=$.dataReady;let Pe=U(g,De);Fe(n.TEXTURE_CUBE_MAP,g);let he;if(we){I&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ve,De.width,De.height);for(let oe=0;oe<6;oe++){he=Te[oe].mipmaps;for(let Ie=0;Ie<he.length;Ie++){const We=he[Ie];g.format!==gn?Le!==null?I?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,We.width,We.height,Le,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Ve,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,We.width,We.height,Le,_e,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Ve,We.width,We.height,0,Le,_e,We.data)}}}else{if(he=g.mipmaps,I&&Me){he.length>0&&Pe++;const oe=Se(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ue){I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Le,_e,Te[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Te[oe].width,Te[oe].height,0,Le,_e,Te[oe].data);for(let Ie=0;Ie<he.length;Ie++){const mt=he[Ie].image[oe].image;I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,mt.width,mt.height,Le,_e,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Ve,mt.width,mt.height,0,Le,_e,mt.data)}}else{I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,_e,Te[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Le,_e,Te[oe]);for(let Ie=0;Ie<he.length;Ie++){const We=he[Ie];I?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Le,_e,We.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Ve,Le,_e,We.image[oe])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),V.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ne(E,g,D,W,$,V){const ye=r.convert(D.format,D.colorSpace),pe=r.convert(D.type),Ae=A(D.internalFormat,ye,pe,D.colorSpace),we=i.get(g),ue=i.get(D);if(ue.__renderTarget=g,!we.__hasExternalTextures){const Te=Math.max(1,g.width>>V),De=Math.max(1,g.height>>V);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,V,Ae,Te,De,g.depth,0,ye,pe,null):t.texImage2D($,V,Ae,Te,De,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),re(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,$,ue.__webglTexture,0,Q(g)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,$,ue.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(E,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const W=g.depthTexture,$=W&&W.isDepthTexture?W.type:null,V=M(g.stencilBuffer,$),ye=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Q(g);re(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,V,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,E)}else{const W=g.textures;for(let $=0;$<W.length;$++){const V=W[$],ye=r.convert(V.format,V.colorSpace),pe=r.convert(V.type),Ae=A(V.internalFormat,ye,pe,V.colorSpace),we=Q(g);D&&re(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Ae,g.width,g.height):re(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const $=W.__webglTexture,V=Q(g);if(g.depthTexture.format===pr)re(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(g.depthTexture.format===mr)re(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Oe(E){const g=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const W=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=W}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const W=E.texture.mipmaps;W&&W.length>0?le(g.__webglFramebuffer[0],E):le(g.__webglFramebuffer,E)}else if(D){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),ce(g.__webglDepthbuffer[W],E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,V)}}else{const W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ce(g.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(E,g,D){const W=i.get(E);g!==void 0&&ne(W.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Oe(E)}function R(E){const g=E.texture,D=i.get(E),W=i.get(g);E.addEventListener("dispose",C);const $=E.textures,V=E.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,o.memory.textures++),V){D.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[pe]=[];for(let Ae=0;Ae<g.mipmaps.length;Ae++)D.__webglFramebuffer[pe][Ae]=n.createFramebuffer()}else D.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)D.__webglFramebuffer[pe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Ae=$.length;pe<Ae;pe++){const we=i.get($[pe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&re(E)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let pe=0;pe<$.length;pe++){const Ae=$[pe];D.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[pe]);const we=r.convert(Ae.format,Ae.colorSpace),ue=r.convert(Ae.type),Te=A(Ae.internalFormat,we,ue,Ae.colorSpace,E.isXRRenderTarget===!0),De=Q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Te,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,D.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)ne(D.__webglFramebuffer[pe][Ae],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae);else ne(D.__webglFramebuffer[pe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Ae=$.length;pe<Ae;pe++){const we=$[pe],ue=i.get(we);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Fe(n.TEXTURE_2D,we),ne(D.__webglFramebuffer,E,we,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,W.__webglTexture),Fe(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)ne(D.__webglFramebuffer[Ae],E,g,n.COLOR_ATTACHMENT0,pe,Ae);else ne(D.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&p(pe),t.unbindTexture()}E.depthBuffer&&Oe(E)}function x(E){const g=E.textures;for(let D=0,W=g.length;D<W;D++){const $=g[D];if(m($)){const V=T(E),ye=i.get($).__webglTexture;t.bindTexture(V,ye),p(V),t.unbindTexture()}}}const ee=[],K=[];function j(E){if(E.samples>0){if(re(E)===!1){const g=E.textures,D=E.width,W=E.height;let $=n.COLOR_BUFFER_BIT;const V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),pe=g.length>1;if(pe)for(let we=0;we<g.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ae=E.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<g.length;we++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ue=i.get(g[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,D,W,0,0,D,W,$,n.NEAREST),l===!0&&(ee.length=0,K.length=0,ee.push(n.COLOR_ATTACHMENT0+we),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ee.push(V),K.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<g.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const ue=i.get(g[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Q(E){return Math.min(s.maxSamples,E.samples)}function re(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Z(E,g){const D=E.colorSpace,W=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Ls&&D!==fi&&($e.getTransfer(D)===ct?(W!==gn||$!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=ae,this.setTexture2DArray=Y,this.setTexture3D=se,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=R,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=re}function TE(n,e){function t(i,s=fi){let r;const o=$e.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===_c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return n.BYTE;if(i===$h)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Sr)return n.HALF_FLOAT;if(i===td)return n.ALPHA;if(i===nd)return n.RGB;if(i===gn)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===id)return n.RED;if(i===xc)return n.RED_INTEGER;if(i===sd)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===Mc)return n.RGBA_INTEGER;if(i===co||i===uo||i===fo||i===ho)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===vl||i===xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===Ml||i===El)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===Ml)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===El)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===Al||i===bl||i===Tl||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===Ol||i===Bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===po)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rd||i===zl||i===Hl||i===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===po)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
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

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mi({vertexShader:wE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends Wi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const v=new CE,m=t.getContextAttributes();let p=null,T=null;const A=[],M=[],U=new ke;let P=null;const C=new on;C.viewport=new Mt;const B=new on;B.viewport=new Mt;const b=[C,B],y=new jv;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ge=A[ie];return ge===void 0&&(ge=new La,A[ie]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ie){let ge=A[ie];return ge===void 0&&(ge=new La,A[ie]=ge),ge.getGripSpace()},this.getHand=function(ie){let ge=A[ie];return ge===void 0&&(ge=new La,A[ie]=ge),ge.getHandSpace()};function G(ie){const ge=M.indexOf(ie.inputSource);if(ge===-1)return;const be=A[ge];be!==void 0&&(be.update(ie.inputSource,ie.frame,c||o),be.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ae);for(let ie=0;ie<A.length;ie++){const ge=M[ie];ge!==null&&(M[ie]=null,A[ie].disconnect(ge))}L=null,z=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,T=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,N=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?mr:pr,N=m.stencil?dr:Hi);const ce={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Gi(h.textureWidth,h.textureHeight,{format:gn,type:Zn,depthTexture:new Sd(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Gi(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(ie){for(let ge=0;ge<ie.removed.length;ge++){const be=ie.removed[ge],N=M.indexOf(be);N>=0&&(M[N]=null,A[N].disconnect(be))}for(let ge=0;ge<ie.added.length;ge++){const be=ie.added[ge];let N=M.indexOf(be);if(N===-1){for(let ce=0;ce<A.length;ce++)if(ce>=M.length){M.push(be),N=ce;break}else if(M[ce]===null){M[ce]=be,N=ce;break}if(N===-1)break}const ne=A[N];ne&&ne.connect(be)}}const Y=new k,se=new k;function H(ie,ge,be){Y.setFromMatrixPosition(ge.matrixWorld),se.setFromMatrixPosition(be.matrixWorld);const N=Y.distanceTo(se),ne=ge.projectionMatrix.elements,ce=be.projectionMatrix.elements,le=ne[14]/(ne[10]-1),Oe=ne[14]/(ne[10]+1),w=(ne[9]+1)/ne[5],R=(ne[9]-1)/ne[5],x=(ne[8]-1)/ne[0],ee=(ce[8]+1)/ce[0],K=le*x,j=le*ee,Q=N/(-x+ee),re=Q*-x;if(ge.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(re),ie.translateZ(Q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ne[10]===-1)ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const J=le+Q,Z=Oe+Q,Se=K-re,E=j+(N-re),g=w*Oe/Z*J,D=R*Oe/Z*J;ie.projectionMatrix.makePerspective(Se,E,g,D,J,Z),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function me(ie,ge){ge===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ge.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ge=ie.near,be=ie.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(be=v.depthFar)),y.near=B.near=C.near=ge,y.far=B.far=C.far=be,(L!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,z=y.far),C.layers.mask=ie.layers.mask|2,B.layers.mask=ie.layers.mask|4,y.layers.mask=C.layers.mask|B.layers.mask;const N=ie.parent,ne=y.cameras;me(y,N);for(let ce=0;ce<ne.length;ce++)me(ne[ce],N);ne.length===2?H(y,C,B):y.projectionMatrix.copy(C.projectionMatrix),xe(ie,y,N)};function xe(ie,ge,be){be===null?ie.matrix.copy(ge.matrixWorld):(ie.matrix.copy(be.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ge.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Vl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Ce=null;function Fe(ie,ge){if(u=ge.getViewerPose(c||o),_=ge,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let N=!1;be.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let le=0;le<be.length;le++){const Oe=be[le];let w=null;if(d!==null)w=d.getViewport(Oe);else{const x=f.getViewSubImage(h,Oe);w=x.viewport,le===0&&(e.setRenderTargetTextures(T,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(T))}let R=b[le];R===void 0&&(R=new on,R.layers.enable(le),R.viewport=new Mt,b[le]=R),R.matrix.fromArray(Oe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Oe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),le===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(R)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(be[0]);le&&le.isValid&&le.texture&&v.init(e,le,s.renderState)}}for(let be=0;be<A.length;be++){const N=M[be],ne=A[be];N!==null&&ne!==void 0&&ne.update(N,ge,c||o)}Ce&&Ce(ie,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Je=new Md;Je.setAnimationLoop(Fe),this.setAnimationLoop=function(ie){Ce=ie},this.dispose=function(){}}}const Li=new Jn,DE=new xt;function LE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),A=T.envMap,M=T.envMapRotation;A&&(m.envMap.value=A,Li.copy(M),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(Li)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function IE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const M=A.program;i.uniformBlockBinding(T,M)}function c(T,A){let M=s[T.id];M===void 0&&(_(T),M=u(T),s[T.id]=M,T.addEventListener("dispose",m));const U=A.program;i.updateUBOMapping(T,U);const P=e.render.frame;r[T.id]!==P&&(h(T),r[T.id]=P)}function u(T){const A=f();T.__bindingPointIndex=A;const M=n.createBuffer(),U=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=s[T.id],M=T.uniforms,U=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let P=0,C=M.length;P<C;P++){const B=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,y=B.length;b<y;b++){const L=B[b];if(d(L,P,b,U)===!0){const z=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let ae=0;ae<G.length;ae++){const Y=G[ae],se=v(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,z+te,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,te),te+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,A,M,U){const P=T.value,C=A+"_"+M;if(U[C]===void 0)return typeof P=="number"||typeof P=="boolean"?U[C]=P:U[C]=P.clone(),!0;{const B=U[C];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return U[C]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function _(T){const A=T.uniforms;let M=0;const U=16;for(let C=0,B=A.length;C<B;C++){const b=Array.isArray(A[C])?A[C]:[A[C]];for(let y=0,L=b.length;y<L;y++){const z=b[y],G=Array.isArray(z.value)?z.value:[z.value];for(let te=0,ae=G.length;te<ae;te++){const Y=G[te],se=v(Y),H=M%U,me=H%se.boundary,xe=H+me;M+=me,xe!==0&&U-xe<se.storage&&(M+=U-xe),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=se.storage}}}const P=M%U;return P>0&&(M+=U-P),T.__size=M,T.__cache={},this}function v(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class UE{constructor(e={}){const{canvas:t=lv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=rn;let P=0,C=0,B=null,b=-1,y=null;const L=new Mt,z=new Mt;let G=null;const te=new it(0);let ae=0,Y=t.width,se=t.height,H=1,me=null,xe=null;const Ce=new Mt(0,0,Y,se),Fe=new Mt(0,0,Y,se);let Je=!1;const ie=new vd;let ge=!1,be=!1;const N=new xt,ne=new xt,ce=new k,le=new Mt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return B===null?H:1}let x=i;function ee(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),x===null){const F="webgl2";if(x=ee(F,S),x===null)throw ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let K,j,Q,re,J,Z,Se,E,g,D,W,$,V,ye,pe,Ae,we,ue,Te,De,Le,_e,Ve,I;function Me(){K=new WS(x),K.init(),_e=new TE(x,K),j=new OS(x,K,e,_e),Q=new AE(x,K),j.reverseDepthBuffer&&h&&Q.buffers.depth.setReversed(!0),re=new qS(x),J=new fE,Z=new bE(x,K,Q,J,j,_e,re),Se=new zS(M),E=new VS(M),g=new $v(x),Ve=new NS(x,g),D=new XS(x,g,re,Ve),W=new jS(x,D,g,re),Te=new KS(x,j,Z),Ae=new BS(J),$=new uE(M,Se,E,K,j,Ve,Ae),V=new LE(M,J),ye=new dE,pe=new xE(K),ue=new US(M,Se,E,Q,W,d,l),we=new EE(M,W,j),I=new IE(x,re,j,Q),De=new FS(x,K,re),Le=new YS(x,K,re),re.programs=$.programs,M.capabilities=j,M.extensions=K,M.properties=J,M.renderLists=ye,M.shadowMap=we,M.state=Q,M.info=re}Me();const fe=new PE(M,x);this.xr=fe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const S=K.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=K.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(Y,se,!1))},this.getSize=function(S){return S.set(Y,se)},this.setSize=function(S,F,X=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,se=F,t.width=Math.floor(S*H),t.height=Math.floor(F*H),X===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Y*H,se*H).floor()},this.setDrawingBufferSize=function(S,F,X){Y=S,se=F,H=X,t.width=Math.floor(S*X),t.height=Math.floor(F*X),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,F,X,q){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,F,X,q),Q.viewport(L.copy(Ce).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Fe)},this.setScissor=function(S,F,X,q){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,F,X,q),Q.scissor(z.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){Q.setScissorTest(Je=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,X=!0){let q=0;if(S){let O=!1;if(B!==null){const de=B.texture.format;O=de===Mc||de===Sc||de===xc}if(O){const de=B.texture.type,Ee=de===Zn||de===Hi||de===hr||de===dr||de===_c||de===vc,Ue=ue.getClearColor(),Re=ue.getClearAlpha(),ze=Ue.r,He=Ue.g,Ne=Ue.b;Ee?(_[0]=ze,_[1]=He,_[2]=Ne,_[3]=Re,x.clearBufferuiv(x.COLOR,0,_)):(v[0]=ze,v[1]=He,v[2]=Ne,v[3]=Re,x.clearBufferiv(x.COLOR,0,v))}else q|=x.COLOR_BUFFER_BIT}F&&(q|=x.DEPTH_BUFFER_BIT),X&&(q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),ye.dispose(),pe.dispose(),J.dispose(),Se.dispose(),E.dispose(),W.dispose(),Ve.dispose(),I.dispose(),$.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Rc),fe.removeEventListener("sessionend",Cc),yi.stop()};function Pe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=re.autoReset,F=we.enabled,X=we.autoUpdate,q=we.needsUpdate,O=we.type;Me(),re.autoReset=S,we.enabled=F,we.autoUpdate=X,we.needsUpdate=q,we.type=O}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ie(S){const F=S.target;F.removeEventListener("dispose",Ie),We(F)}function We(S){mt(S),J.remove(S)}function mt(S){const F=J.get(S).programs;F!==void 0&&(F.forEach(function(X){$.releaseProgram(X)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,X,q,O,de){F===null&&(F=Oe);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ue=Rd(S,F,X,q,O);Q.setMaterial(q,Ee);let Re=X.index,ze=1;if(q.wireframe===!0){if(Re=D.getWireframeAttribute(X),Re===void 0)return;ze=2}const He=X.drawRange,Ne=X.attributes.position;let Ze=He.start*ze,rt=(He.start+He.count)*ze;de!==null&&(Ze=Math.max(Ze,de.start*ze),rt=Math.min(rt,(de.start+de.count)*ze)),Re!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,Re.count)):Ne!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Ne.count));const vt=rt-Ze;if(vt<0||vt===1/0)return;Ve.setup(O,q,Ue,X,Re);let St,Qe=De;if(Re!==null&&(St=g.get(Re),Qe=Le,Qe.setIndex(St)),O.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*R()),Qe.setMode(x.LINES)):Qe.setMode(x.TRIANGLES);else if(O.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),Q.setLineWidth(Be*R()),O.isLineSegments?Qe.setMode(x.LINES):O.isLineLoop?Qe.setMode(x.LINE_LOOP):Qe.setMode(x.LINE_STRIP)}else O.isPoints?Qe.setMode(x.POINTS):O.isSprite&&Qe.setMode(x.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Be=O._multiDrawStarts,Rt=O._multiDrawCounts,et=O._multiDrawCount,hn=Re?g.get(Re).bytesPerElement:1,Xi=J.get(q).currentProgram.getUniforms();for(let jt=0;jt<et;jt++)Xi.setValue(x,"_gl_DrawID",jt),Qe.render(Be[jt]/hn,Rt[jt])}else if(O.isInstancedMesh)Qe.renderInstances(Ze,vt,O.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,Be);Qe.renderInstances(Ze,vt,Rt)}else Qe.render(Ze,vt)};function st(S,F,X){S.transparent===!0&&S.side===Gn&&S.forceSinglePass===!1?(S.side=qt,S.needsUpdate=!0,Ar(S,F,X),S.side=Si,S.needsUpdate=!0,Ar(S,F,X),S.side=Gn):Ar(S,F,X)}this.compile=function(S,F,X=null){X===null&&(X=S),p=pe.get(X),p.init(F),A.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==X&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const de=O.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ue=de[Ee];st(Ue,X,O),q.add(Ue)}else st(de,X,O),q.add(de)}),p=A.pop(),q},this.compileAsync=function(S,F,X=null){const q=this.compile(S,F,X);return new Promise(O=>{function de(){if(q.forEach(function(Ee){J.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){O(S);return}setTimeout(de,10)}K.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let fn=null;function Dn(S){fn&&fn(S)}function Rc(){yi.stop()}function Cc(){yi.start()}const yi=new Md;yi.setAnimationLoop(Dn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(S){fn=S,fe.setAnimationLoop(S),S===null?yi.stop():yi.start()},fe.addEventListener("sessionstart",Rc),fe.addEventListener("sessionend",Cc),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,F,B),p=pe.get(S,A.length),p.init(F),A.push(p),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ie.setFromProjectionMatrix(ne),be=this.localClippingEnabled,ge=Ae.init(this.clippingPlanes,be),m=ye.get(S,T.length),m.init(),T.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&Ko(de,F,-1/0,M.sortObjects)}Ko(S,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(me,xe),w=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,w&&ue.addToRenderList(m,S),this.info.render.frame++,ge===!0&&Ae.beginShadows();const X=p.state.shadowsArray;we.render(X,S,F),ge===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const de=F.cameras;if(O.length>0)for(let Ee=0,Ue=de.length;Ee<Ue;Ee++){const Re=de[Ee];Dc(q,O,S,Re)}w&&ue.render(S);for(let Ee=0,Ue=de.length;Ee<Ue;Ee++){const Re=de[Ee];Pc(m,S,Re,Re.viewport)}}else O.length>0&&Dc(q,O,S,F),w&&ue.render(S),Pc(m,S,F);B!==null&&C===0&&(Z.updateMultisampleRenderTarget(B),Z.updateRenderTargetMipmap(B)),S.isScene===!0&&S.onAfterRender(M,S,F),Ve.resetDefaultState(),b=-1,y=null,A.pop(),A.length>0?(p=A[A.length-1],ge===!0&&Ae.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ko(S,F,X,q){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ie.intersectsSprite(S)){q&&le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ne);const Ee=W.update(S),Ue=S.material;Ue.visible&&m.push(S,Ee,Ue,X,le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ie.intersectsObject(S))){const Ee=W.update(S),Ue=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),le.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),le.copy(Ee.boundingSphere.center)),le.applyMatrix4(S.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Re=Ee.groups;for(let ze=0,He=Re.length;ze<He;ze++){const Ne=Re[ze],Ze=Ue[Ne.materialIndex];Ze&&Ze.visible&&m.push(S,Ee,Ze,X,le.z,Ne)}}else Ue.visible&&m.push(S,Ee,Ue,X,le.z,null)}}const de=S.children;for(let Ee=0,Ue=de.length;Ee<Ue;Ee++)Ko(de[Ee],F,X,q)}function Pc(S,F,X,q){const O=S.opaque,de=S.transmissive,Ee=S.transparent;p.setupLightsView(X),ge===!0&&Ae.setGlobalState(M.clippingPlanes,X),q&&Q.viewport(L.copy(q)),O.length>0&&yr(O,F,X),de.length>0&&yr(de,F,X),Ee.length>0&&yr(Ee,F,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Dc(S,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Gi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Sr:Zn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const de=p.state.transmissionRenderTarget[q.id],Ee=q.viewport||L;de.setSize(Ee.z*M.transmissionResolutionScale,Ee.w*M.transmissionResolutionScale);const Ue=M.getRenderTarget();M.setRenderTarget(de),M.getClearColor(te),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),w&&ue.render(X);const Re=M.toneMapping;M.toneMapping=pi;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ge===!0&&Ae.setGlobalState(M.clippingPlanes,q),yr(S,X,q),Z.updateMultisampleRenderTarget(de),Z.updateRenderTargetMipmap(de),K.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ne=0,Ze=F.length;Ne<Ze;Ne++){const rt=F[Ne],vt=rt.object,St=rt.geometry,Qe=rt.material,Be=rt.group;if(Qe.side===Gn&&vt.layers.test(q.layers)){const Rt=Qe.side;Qe.side=qt,Qe.needsUpdate=!0,Lc(vt,X,q,St,Qe,Be),Qe.side=Rt,Qe.needsUpdate=!0,He=!0}}He===!0&&(Z.updateMultisampleRenderTarget(de),Z.updateRenderTargetMipmap(de))}M.setRenderTarget(Ue),M.setClearColor(te,ae),ze!==void 0&&(q.viewport=ze),M.toneMapping=Re}function yr(S,F,X){const q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,de=S.length;O<de;O++){const Ee=S[O],Ue=Ee.object,Re=Ee.geometry,ze=Ee.group;let He=Ee.material;He.allowOverride===!0&&q!==null&&(He=q),Ue.layers.test(X.layers)&&Lc(Ue,F,X,Re,He,ze)}}function Lc(S,F,X,q,O,de){S.onBeforeRender(M,F,X,q,O,de),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(M,F,X,q,S,de),O.transparent===!0&&O.side===Gn&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,M.renderBufferDirect(X,F,q,O,S,de),O.side=Si,O.needsUpdate=!0,M.renderBufferDirect(X,F,q,O,S,de),O.side=Gn):M.renderBufferDirect(X,F,q,O,S,de),S.onAfterRender(M,F,X,q,O,de)}function Ar(S,F,X){F.isScene!==!0&&(F=Oe);const q=J.get(S),O=p.state.lights,de=p.state.shadowsArray,Ee=O.state.version,Ue=$.getParameters(S,O.state,de,F,X),Re=$.getProgramCacheKey(Ue);let ze=q.programs;q.environment=S.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(S.isMeshStandardMaterial?E:Se).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Ie),ze=new Map,q.programs=ze);let He=ze.get(Re);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===Ee)return Uc(S,Ue),He}else Ue.uniforms=$.getUniforms(S),S.onBeforeCompile(Ue,M),He=$.acquireProgram(Ue,Re),ze.set(Re,He),q.uniforms=Ue.uniforms;const Ne=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Ae.uniform),Uc(S,Ue),q.needsLights=Pd(S),q.lightsStateVersion=Ee,q.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function Ic(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=go.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Uc(S,F){const X=J.get(S);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Rd(S,F,X,q,O){F.isScene!==!0&&(F=Oe),Z.resetTextureUnits();const de=F.fog,Ee=q.isMeshStandardMaterial?F.environment:null,Ue=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ls,Re=(q.isMeshStandardMaterial?E:Se).get(q.envMap||Ee),ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let vt=pi;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(vt=M.toneMapping);const St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qe=St!==void 0?St.length:0,Be=J.get(q),Rt=p.state.lights;if(ge===!0&&(be===!0||S!==y)){const Ft=S===y&&q.id===b;Ae.setState(q,S,Ft)}let et=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Rt.state.version||Be.outputColorSpace!==Ue||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==Re||q.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ae.numPlanes||Be.numIntersection!==Ae.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==He||Be.morphTargets!==Ne||Be.morphNormals!==Ze||Be.morphColors!==rt||Be.toneMapping!==vt||Be.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Be.__version=q.version);let hn=Be.currentProgram;et===!0&&(hn=Ar(q,F,O));let Xi=!1,jt=!1,Fs=!1;const gt=hn.getUniforms(),tn=Be.uniforms;if(Q.useProgram(hn.program)&&(Xi=!0,jt=!0,Fs=!0),q.id!==b&&(b=q.id,jt=!0),Xi||y!==S){Q.buffers.depth.getReversed()?(N.copy(S.projectionMatrix),uv(N),fv(N),gt.setValue(x,"projectionMatrix",N)):gt.setValue(x,"projectionMatrix",S.projectionMatrix),gt.setValue(x,"viewMatrix",S.matrixWorldInverse);const Vt=gt.map.cameraPosition;Vt!==void 0&&Vt.setValue(x,ce.setFromMatrixPosition(S.matrixWorld)),j.logarithmicDepthBuffer&&gt.setValue(x,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(x,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,jt=!0,Fs=!0)}if(O.isSkinnedMesh){gt.setOptional(x,O,"bindMatrix"),gt.setOptional(x,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),gt.setValue(x,"boneTexture",Ft.boneTexture,Z))}O.isBatchedMesh&&(gt.setOptional(x,O,"batchingTexture"),gt.setValue(x,"batchingTexture",O._matricesTexture,Z),gt.setOptional(x,O,"batchingIdTexture"),gt.setValue(x,"batchingIdTexture",O._indirectTexture,Z),gt.setOptional(x,O,"batchingColorTexture"),O._colorsTexture!==null&&gt.setValue(x,"batchingColorTexture",O._colorsTexture,Z));const nn=X.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Te.update(O,X,hn),(jt||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,gt.setValue(x,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(tn.envMap.value=Re,tn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),jt&&(gt.setValue(x,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&Cd(tn,Fs),de&&q.fog===!0&&V.refreshFogUniforms(tn,de),V.refreshMaterialUniforms(tn,q,H,se,p.state.transmissionRenderTarget[S.id]),go.upload(x,Ic(Be),tn,Z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(go.upload(x,Ic(Be),tn,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(x,"center",O.center),gt.setValue(x,"modelViewMatrix",O.modelViewMatrix),gt.setValue(x,"normalMatrix",O.normalMatrix),gt.setValue(x,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ft=q.uniformsGroups;for(let Vt=0,jo=Ft.length;Vt<jo;Vt++){const Ai=Ft[Vt];I.update(Ai,hn),I.bind(Ai,hn)}}return hn}function Cd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Pd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,F,X){const q=J.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),J.get(S.texture).__webglTexture=F,J.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const X=J.get(S);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const Dd=x.createFramebuffer();this.setRenderTarget=function(S,F=0,X=0){B=S,P=F,C=X;let q=!0,O=null,de=!1,Ee=!1;if(S){const Re=J.get(S);if(Re.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(x.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(Re.__hasExternalTextures)Z.rebindTextures(S,J.get(S.texture).__webglTexture,J.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&J.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const He=J.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[F])?O=He[F][X]:O=He[F],de=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?O=J.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[X]:O=He,L.copy(S.viewport),z.copy(S.scissor),G=S.scissorTest}else L.copy(Ce).multiplyScalar(H).floor(),z.copy(Fe).multiplyScalar(H).floor(),G=Je;if(X!==0&&(O=Dd),Q.bindFramebuffer(x.FRAMEBUFFER,O)&&q&&Q.drawBuffers(S,O),Q.viewport(L),Q.scissor(z),Q.setScissorTest(G),de){const Re=J.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,X)}else if(Ee){const Re=J.get(S.texture),ze=F;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,X,ze)}else if(S!==null&&X!==0){const Re=J.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Re.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(S,F,X,q,O,de,Ee,Ue=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Q.bindFramebuffer(x.FRAMEBUFFER,Re);try{const ze=S.textures[Ue],He=ze.format,Ne=ze.type;if(!j.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-q&&X>=0&&X<=S.height-O&&(S.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ue),x.readPixels(F,X,q,O,_e.convert(He),_e.convert(Ne),de))}finally{const ze=B!==null?J.get(B).__webglFramebuffer:null;Q.bindFramebuffer(x.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,F,X,q,O,de,Ee,Ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if(F>=0&&F<=S.width-q&&X>=0&&X<=S.height-O){Q.bindFramebuffer(x.FRAMEBUFFER,Re);const ze=S.textures[Ue],He=ze.format,Ne=ze.type;if(!j.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ze),x.bufferData(x.PIXEL_PACK_BUFFER,de.byteLength,x.STREAM_READ),S.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ue),x.readPixels(F,X,q,O,_e.convert(He),_e.convert(Ne),0);const rt=B!==null?J.get(B).__webglFramebuffer:null;Q.bindFramebuffer(x.FRAMEBUFFER,rt);const vt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await cv(x,vt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ze),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,de),x.deleteBuffer(Ze),x.deleteSync(vt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,X=0){const q=Math.pow(2,-X),O=Math.floor(S.image.width*q),de=Math.floor(S.image.height*q),Ee=F!==null?F.x:0,Ue=F!==null?F.y:0;Z.setTexture2D(S,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,Ee,Ue,O,de),Q.unbindTexture()};const Ld=x.createFramebuffer(),Id=x.createFramebuffer();this.copyTextureToTexture=function(S,F,X=null,q=null,O=0,de=null){de===null&&(O!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=O,O=0):de=0);let Ee,Ue,Re,ze,He,Ne,Ze,rt,vt;const St=S.isCompressedTexture?S.mipmaps[de]:S.image;if(X!==null)Ee=X.max.x-X.min.x,Ue=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,He=X.min.y,Ne=X.isBox3?X.min.z:0;else{const nn=Math.pow(2,-O);Ee=Math.floor(St.width*nn),Ue=Math.floor(St.height*nn),S.isDataArrayTexture?Re=St.depth:S.isData3DTexture?Re=Math.floor(St.depth*nn):Re=1,ze=0,He=0,Ne=0}q!==null?(Ze=q.x,rt=q.y,vt=q.z):(Ze=0,rt=0,vt=0);const Qe=_e.convert(F.format),Be=_e.convert(F.type);let Rt;F.isData3DTexture?(Z.setTexture3D(F,0),Rt=x.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Rt=x.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Rt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const et=x.getParameter(x.UNPACK_ROW_LENGTH),hn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Xi=x.getParameter(x.UNPACK_SKIP_PIXELS),jt=x.getParameter(x.UNPACK_SKIP_ROWS),Fs=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ze),x.pixelStorei(x.UNPACK_SKIP_ROWS,He),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ne);const gt=S.isDataArrayTexture||S.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const nn=J.get(S),Ft=J.get(F),Vt=J.get(nn.__renderTarget),jo=J.get(Ft.__renderTarget);Q.bindFramebuffer(x.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Ai=0;Ai<Re;Ai++)gt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,J.get(S).__webglTexture,O,Ne+Ai),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,J.get(F).__webglTexture,de,vt+Ai)),x.blitFramebuffer(ze,He,Ee,Ue,Ze,rt,Ee,Ue,x.DEPTH_BUFFER_BIT,x.NEAREST);Q.bindFramebuffer(x.READ_FRAMEBUFFER,null),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||J.has(S)){const nn=J.get(S),Ft=J.get(F);Q.bindFramebuffer(x.READ_FRAMEBUFFER,Ld),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,Id);for(let Vt=0;Vt<Re;Vt++)gt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,nn.__webglTexture,O,Ne+Vt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,nn.__webglTexture,O),tn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ft.__webglTexture,de,vt+Vt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ft.__webglTexture,de),O!==0?x.blitFramebuffer(ze,He,Ee,Ue,Ze,rt,Ee,Ue,x.COLOR_BUFFER_BIT,x.NEAREST):tn?x.copyTexSubImage3D(Rt,de,Ze,rt,vt+Vt,ze,He,Ee,Ue):x.copyTexSubImage2D(Rt,de,Ze,rt,ze,He,Ee,Ue);Q.bindFramebuffer(x.READ_FRAMEBUFFER,null),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else tn?S.isDataTexture||S.isData3DTexture?x.texSubImage3D(Rt,de,Ze,rt,vt,Ee,Ue,Re,Qe,Be,St.data):F.isCompressedArrayTexture?x.compressedTexSubImage3D(Rt,de,Ze,rt,vt,Ee,Ue,Re,Qe,St.data):x.texSubImage3D(Rt,de,Ze,rt,vt,Ee,Ue,Re,Qe,Be,St):S.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,de,Ze,rt,Ee,Ue,Qe,Be,St.data):S.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,de,Ze,rt,St.width,St.height,Qe,St.data):x.texSubImage2D(x.TEXTURE_2D,de,Ze,rt,Ee,Ue,Qe,Be,St);x.pixelStorei(x.UNPACK_ROW_LENGTH,et),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,hn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Xi),x.pixelStorei(x.UNPACK_SKIP_ROWS,jt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Fs),de===0&&F.generateMipmaps&&x.generateMipmap(Rt),Q.unbindTexture()},this.copyTextureToTexture3D=function(S,F,X=null,q=null,O=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,X,q,O)},this.initRenderTarget=function(S){J.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),Q.unbindTexture()},this.resetState=function(){P=0,C=0,B=null,Q.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Cf={type:"change"},Tc={type:"start"},Td={type:"end"},eo=new Xo,Pf=new ci,NE=Math.cos(70*av.DEG2RAD),At=new k,Wt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class FE extends Jv{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new ki,this._lastTargetPosition=new k,this._quat=new ki().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nf,this._sphericalDelta=new nf,this._scale=1,this._panOffset=new k,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new k,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=BE.bind(this),this._onPointerDown=OE.bind(this),this._onPointerUp=zE.bind(this),this._onContextMenu=YE.bind(this),this._onMouseWheel=GE.bind(this),this._onKeyDown=VE.bind(this),this._onTouchStart=WE.bind(this),this._onTouchMove=XE.bind(this),this._onMouseDown=HE.bind(this),this._onMouseMove=kE.bind(this),this._interceptControlDown=qE.bind(this),this._interceptControlUp=KE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cf),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wt:i>Math.PI&&(i-=Wt),s<-Math.PI?s+=Wt:s>Math.PI&&(s-=Wt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=At.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<NE?this.object.lookAt(this.target):(Pf.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(Pf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(Cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wt/60*this.autoRotateSpeed*e:Wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function OE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function BE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Td),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function HE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case Ms.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case Ms.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Tc)}function kE(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function GE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(Tc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Td))}function VE(n){this.enabled!==!1&&this._handleKeyDown(n)}function WE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Tc)}function XE(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function YE(n){this.enabled!==!1&&n.preventDefault()}function qE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const jE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHN0lEQVR4nO2de8yWYxjAn1IoyjGlA4XCYuVcKId9KGM5rCRG5jCGNFMtUywip1VCDhsmamKzlTM101gIRU4fKqeklCiS+H527b2++fbtOVzv+z7v8x7u+7e9/7338Xqe+77u67ru6wkCj8fj8Xg8Ho/H4/F44gB2A24AlgAbgV+B94DRQPvYwp7CAVoCFwE/E80vwHXAdn6uUwQ4CViGnQ+BgV4IxU98N+BJCmc+0MMLIv+J3wm4BdhC8fwJTAHaeUEkT3wL4GJgtWFiZfMdD0wAfjP8/zvgfGnDCyJ88o8E3jZM5L+6LHVsUnYPYDrwj6G8aEz9vRD+n7zOwMM6sUm8CfSNeYMOB94y1NOgQuzkrCCA7VVl/N0wYd+rCmpaPoAzgZWGejfrXrNj4BI6QSsME/SHTlCbAtpoA4wDNhna+QoYGtQ6wMHAK8YlYi6wbwptdtHlRupMYgFwaFBrALvnsUkuAY4rQR+OBt4xtL9N96QOQbUDtNZ1XlTGJFYDV4jJocRqruwlPxn6s0H73iqoRoA6YLlhoFv17WhfoQe9L4DBQbUA9FITgIX5wH5l7OsButdY+7p/UKkAu+qR/y/DYD4DBgUVAnCy0dj3d9Zvaz5m4jWGAayvVHMx0Er3oLV57FflHQdwArA0D81iz6A6HD5TdG9K4gPg+HI9LVOMuvUbwCFBlQEcCLxoGF+DLkuts+zcA4aO1dfC6ZKcNid7VhJTs1x24hA/7fVi6wlqBGAHYGyC3UrehAFZdCZKbZNT7iPAXkGNAnQCHoux3M7JohPfhjS8NM5MXKO+i+Uh87Ayi8bD7DlVv9bnC3Bh2CqQRcNhDCmyzllqe2n8iS4+LI/yHfQscq9qXfVq79msv3XAN2rom6WuzLpiNBfgvLCJKLS+cgtgTUidMwzlTlXztpwzCmG9ruk9C+izuwIg58Z8ifQQE8M00Xby6LObAiDn1FlFaVgI7GLss3sCIGdGFvdhKXnV4nt2VQD3JRyEJORkqhrKhgKn6WZ7rsYbTQSe140+jpGGPrslAHJPf9RJVEJRDsqjvbZqlZWouTDqk94CFwVwTkTbywsNKxFLZozVM9bK6aIAxkS0PbrItidH1HtzQjnnBHBPRNvDi2y7Y8Tp/tmEcs4J4KaItienMKZFIfUuTijjnAAuiTlEjbXq7xHtdwcuV+2p8RfrRHJRAF0TAni36kHqNlVB+xQS0phHn90SgGB0ETY/G4j5/HX14l2r9qPuQZG4KoB99CJeGqxTgcre0qeAPrsngCbOkDCnULF8rW+IadlyVgBNbsRMU1t/2shdhH5BAk4LoBGJM1KNZZ7xoocVie6rC2LwAgiPfO4pnjT1eD0EvAx8aryk0ZwfJUgrpj3/BhQQ8XYMcJm8XcAnhsCya2Lq8wIoFrnErX7kKJfmgpiy7ggAGAx8ro71xt+sVAaUq1+WrTBWxZRxSgB3RLTbOaUxtYi4xbMlpoxTAhgT0e6IVAaVayPMS7Yu5v9OCWBQRLuL0kg9IDdfIur/KKaMUwLYOcZzdWMKy09UvOvMmHLuCEAAHiWaORLPH+SJhrjE3WeLzCnhogB6xDjRG5FD10zdM4ar9lTX5CfREaP0HCBJnQoOT3FOAIJOoCWpR7GIxbVLEIOTAhCAK4uIBbUgltbeQQLlFEDY4IdlbA3tZ7wcmA9ilpgN7G3ss0RjN2dbUGoi0sB8WUySPAqwhur12LOAF4p8I+QA9oTkGsqjvwM1eKs5K4JSAzwdM5iCMpxQoDm6Sfl2wBkSyyPhJBopt0yDeDdqSoK1asJ4V+8IjFP3pPkum4wNeCZm/KmZR+I60T/BiiiayiQJJcxDD98SUs/dQYWgYZGTErSwBosjJ60O3YnNs3SBIcZyQET58ZkMJvnhGKFjSWJKlh1rqZHGFpVQEvEdFVFPeznuR5QramPPOInghLJkY9QkeYuMnXxNQ8QPk6xU6hipjymTiqWzBFdRmyJjP6Ic/Sw0B5yVhWVMLmXJQfpDPkkEM0GT5E3URHvF0JDkEC9B34cYb940JhFsG1R4vufZxkQe5cu5kOtrb42aS6JBDX7dgmoBOFYNWlZBNGgGlpYZJRGcYTzALSlLSpqUn7L7dd0MYxPwXBabmabZuVrvBychh8NLs3ggstSpe6mJWKKXT9EI5kyyEqo5WkJRkhDHz10VlZasXJDCJKi7UW5GWphXyK35moPcsjU3LFN6CVNTnh64DLmkSEM1ZLwhxGI5yrJc6Sl9pPEbBBus9dY82I79HwMnJhgK5bJ2EnIp70GJss52lBUMuUjnx41qq+jkXZtdX3rK6QTdaUHO2yW6dxJyN+BW4HbjPQHxBZxd7vHV0jfDrLj5kYYUQ8qnG9PeR32DYJ9yj6PqAfoazd6NvC+mkHL3u+YgZ/aWz1HF3Wop6TcInIecA15uMy7W88F6VWGvsvqhPR6Px+PxeDwej8cTuMt/tw/1Kg2dfYsAAAAASUVORK5CYII=",ZE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTElEQVR4nO2dC9QVVRXHBwGRfKBFpKGVKIloKWaBClpppaUWCsGyQsmgXPYgfJQmWlku0MRHPvEtlaYWPUFDTFdKhKFiD6SijHDxKAk1E8SPX2t3/99qGuZxZu7cO3funf9ady0+vu/cOefsc87eZ+//3uN5bQ5gSNF9qOADsCfwIf//VSgYwMPANkX3o4IArACO7/65QsEA/g58v+h+VPD+K4y9qOFFYNtqUgoGMIn/4e1F96ejAfQAlvoEMq7oPnU0gNH8PyYV3aeOBfAaYFVAIKcU3a9OPqrmsDWOKrpvHQngkhBhbAFeW3TfOg7AGYTj0aL71nEAvkA0Jhfdv07TGRfHCON5YIei+9kRAPoA3yYe5xXdz44AsBuwMEEYfwS2K7qvbQ9gBPBMgjDMsnpfxu/fAdgfOMSOxPxH0EYATgU2koyLHL9vR+AY4Hzgx8BqCfM2oH/jR1RSAL2Bq3HDA0DPhONuMjA3RLirsu6sjgHwauDnjsJ4ylwnEQIdAywAuiLa3mnPKmaU5YppLHMUxjpg70D7bYCxUvBR2FDdVdyEcTjwD0dhPAscEGh/MPBEQrv5wO55L6S2A/ARYJOjMNYDBwUui9OAV2LamOK+ME7XVBCAiTHnfBD/BN4WuCze6dDmuO42FZJ3RpejMDb4Q7O22oG7E9qYFbVfJQQHAMOBlxyF8Zz9faD9pQ4W2BsrYbgJo19IlC8K/wJGBtofkrCzzMqqYiKuAK5wFIZd5N4d0n5JgtLfp9oZ7sLYI8Ei8ltGJ4W0t90Rh6MrYaQAcKbj7rggov2smDZzK2GkBHCvgzAejCJNA0/GtPtUJZD0AvmtgxIPtY6MIppwgdzqiKtQv0CuTPDcxuErlQBSApiXoMj3imm7U4JAflMJJL1ApsVM6J8S2vbUkRaHEZVQ0gnkwJjJXOjQPoyp6MfPKoGkBPBIxGQ+7dD2JJLxnkoo6QTygZjJ3M/h2FqeIBAzHHpVQslHuV/t0PaDDrukYsBnCNe+EDKRprR3cWj/3QSBWAJotUtSCmVcxGSe7dC2P7AmQSiVXysnz+9fXVZ3SOZUELem7lCngxpTJCzyd7Jj+9kxAnmq8SNoQwDbAQ8FJvMPLqQEC0QpFToM65ozgjYEsDOwODChH3Nse1WEQJY3vudtDGrc2wWBXdLbod3xEQKZ3Zyet//xNcc3qVMc2gyJEEiV/JmTUHqZG97HUozl4AKHhQhjfi6dqbBVOoIFpK7yYgB8KSAME+Kb49p04grfGxily9/ngK8BlwM3im1osfUDkupbidTwZ+AdMVFE+73/pn94HX0fAHxUhsJdwA+Ab4rE/SqvJJNvR8YXgTtUcyQszLoZ+IlW/a4ZLLBzwy6LgYzcFUESdopn7Kv+x4WIV7dsmBgYDFzjwFg3bu1Xgdfl8MxtAz+PFHfLPjOyZuDKr3amFtWVgUI2mVw7zb5ZX+jIrbK4x+sb1I+3WJEA4Mtpd5wvt3BwzO8PBX4dMS5jTY7ySsarQn/bkERKEnacsqh2V9KouetPlw67zwJhiqns62CC2zEbhgVeKwB4jHRYI57VTcA5yvcbBxxrNFFLL3D4HGl3CuAEKddTgM8qefNSfff3dKlc6kvmjIK57vs5jteIFWsjdslW6XRNh6yOsuLFLOls0k+t6d6XMy9J6bUiHs1KwjafWsR3OnmkGw6dz58Gfkdr74YlwHd0vPWuY7yfjHjGBK9FaT1TgR9KWTYT60VoMEV9g0o2Ha0q17kZEz43TusdWY4e24OltCfKtp8J3C5iw3x9Fsqs9H8W6Xf36O+vA6aLXDdFxsBI3Rv6Nmk8PWJYLuXL0LKJs2oJdplq1J2kkQDe2RaxFls9wLXKDzRc4ZUQ1Ez2MJzrlQVS+MGw6llN7kOvHL7j4xHCeNb1HtPKZOqN0if9GvTcAdJbM1TRYYOsq54588YM470ywHSEvLpx2AjcD3xdK/AI5R32SDCzrSjNIN3cx8jLO0vVgIw2FIXHginVjn6uKD/WTK8skAe4Xjwvc3atCsy45rLHoUv6zIUR2TuG5npZ6YqcaeW3KpbGOSUlDIuJBGFBr1O9sgJ4b8yWbzbWKEp5ZEKhs76qMheEXXj39NqofMYlDukDeWKdqsedpRBx4hFj8ZRAzsomeYQP89oVGvRoxdbvtnxA6YusOsFW/i91oz8PODHLzdli9cBKBdwekSDrjm6WBorB79pNGJBFM0TulqMktLG+zxj9v7lM3qq2udS9UjXSaXpm55T7kz/IBv1T2fbPANs36Fk7N+J72wa6sPnpoYi2k0vRY1lGxnr5hlgnL4mnldnd3rawY0m6IgzLgM8AQx1Z7mYF7aOw7yR5ghfH3FPsuVWKdGASzWXugpelpJdJsT4os/lxrXrX4phhyt9iGTs2cuGVBlrFrYCVwPu9doICT8fKQXiLvcBRwaR5Mj1nKoDUI3BBdK2p2ChsUpXsgRnH3bPVrKNjNOmuZVztXD/U9x0TxF5sNp5UaLmuUn9ypRT/0mORpYNpZmHokkf1GhHjJktZDw9YWuekqFqdBatFUTo9T1eHL4fx8ry+MytxIUmRblYG7ZtSfvceotVcLBfH7xW7cMELEuoDIsedLVZiw2Lb8gYU935E2fUuK/nDOT+3r3LPByk4NEj1sXYpKg0gJJ5+XxGdOMhBGJvb/QXA1AJhwcIE9xTRkah8vfIG+dOfEBaN/HfImCd6BaUbJJXh64ZZIIO8NgC1EPGUmHDwosLcMXp1hMurhpDb2l7AclrZ3NbUXDGnKes3brzmMRjQCjWt0t4furS7bhIfdlirvDkNGGiFzbQLZju8aKx7PLNcjAqFERq7IGXp/Ij6sEV13h/SDf983VVGK8YxRNZVrzrqyA/Uarck0/GadPP+fku+sSwX03ujEk0jSIFPNK3EuQY6p0lukA1inayI+axKcXdJg/VipwxLMTfHiSGzsumMFKWITZWCK9pHlRf+pmPJ/HR9UsxF/8CbR6c2dvbdXiw/Trf1X8Sw/FoJLwO/Uq6hHW1vyDDu7eVgNTqp33/XWgExFaccqqT7GWJtLHKo+tYIrJXuuFk+tBMVj+9Tx/j66XQIjmdF6Vj9cosMFTdqrCJ+5oe6SE7JO1Q14S5xo+YHPnP1O3PzXy9X/3Ql6EyQR3qYlHuuHgQJ8rqIAs62M3bL83kVoq1LKwfycMzRN71l3Uei9gyWYjyibCFTag7MExTISiL1zUvKb28piHh2mW7vpkcu0DG1fyusKGrEi+GKm9ysQNYrDs5Us6gO9MoK7ZpRKsOxWGayDewvuiTerhoon9DOGqGg2E45rHbTV+/Sa/nO0N3ift0V4goK+LFFRsnUtnw7qOz28bL5H9c5HIVNuqQ9LStmSUiCaPdnudwg3alz9WC9yNWfTxt4Kz2o1REZofS3W7Qas9J9suA5RQNvUB8Sa3d1JKjVxrLgkF06LS5htUxulTlsqdS2I+zosdXc/TFPrekB+7ftFttVFue3Ce8uQGaE7JPFhCk8nfk/PLmHxPZGlc8AAAAASUVORK5CYII=",JE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVR4nO3dzW7TQBQF4JMX4a+sC23Z8c8LFAg/b1NSeK62UhSKeIC0oU8AtBtIF4XNQSMNUuQx4ATPnXun91uy6LFnZDl4fDyAc845ZxDJTZK7JA9IHpM854pa/vaqzuOx7Mdj20TNSA5IviA5Y4+Q5vQpTNAwHDtqQvI6yUNmgDQrh/ckr6EGJO+S/JJpoNiSl8sZycewjOQDkj8yDhJbMnMK53IfFoVLPOeV8VtLbm7hSrkBgzfwLPeMppZsCRNYQvKl0MCwJVvKcxi6Onr9afs3LflSjmAByS3BQWFLvqTb0I7kW8kRQZovaQTt4uMQMUjzJe1BO5InkiOCNF/SDNqRnEuOCNJ8SXNoR/K75IggzZf0DdqR/CQ5IkjzJR1Du7ieIAZpviQTN/WR5IggzZe0A+1IbkiOCNJ8Sesw8ugkrLSJQJovZQor4rKnCKTZUrZhRbxKwrJndkizJYxhDcmrvkClTFjurGwJ94LkPVTwksPnXCOENC+XU5KPUIO4vj7JMUpIs3IYk7yC2oRlz7DS1udIIc3o05TkU9QurLSRfBMePcT/s8xXHbGWv72qeTyWvXhs+lcDnXPOuZr7IR0f62zFt2MO4jtk5wv9kPBv3g9Z1ZIT8WrJFc1Z7LR4P6SrjpOxRvIjV/chdFxQA+l+SFN49tRTfnjr/QksK9EPWRQKNiR/9hgXzuUhLCrVD2nU6L5miAxXyk1YUrIfspD/P/eMfzk0daMv2Q8JSL4WiB7CAgX9kIHQy3r6X5JT0g+5Ixi/Ae0U9EPeCcZ7P6TDhEj2U0y8Slq6H3IiGO/9kA4TItlP8X5IhwmR7Kd4P6TDhEj2U/T/9FXQD9kXjDdxUy/dD9kVjPd+SIcJCauRUm5BOwX9kIHQoxsbn9Yo3Q8J4rJrbs9gRcl+yEJ+WHbNZWLq8XvJfkhjgSzXAtUaLCrRD1kUllt7zrf7ib9S/ZCML1nY/whmiX5Ips/UTqr5TKx0P+RP4o1+uORP8iMzn/LT2g9Z4uMGo0a+90Occ845S/0QJ7x/iFO2f4hT3g9xivohTlE/xCnqhzhl/RCnqB/ilPVDnLJ+iFO2f4hT1g9xyvYPcQ3ez1DG+xnKeD/jcvdDdkqfr3rC+4eslz5f9QT7IdPS52qGUD9ku/R5miHQDxmXPkdzMvZDzsxtMF9xP+TC/P4dFfVDTqvZv6OCfsi4yv07DPZDppdi/w6l/ZC579/hnHPOYWm/AK86/NY339oXAAAAAElFTkSuQmCC",QE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExklEQVR4nO2dS2xVRRiAfwIspFyIwELUhVFXaoREg25gYXzFVCOluPK1sfhgAUXZQMKamLgxxMTHSgE16hZ0ozFqonGhtVorgUAaI5q0lQpEqfCZSf/GGyW3c+8587j3ny9pcpvmZGb+r3fmnDPzz4gUCoVCodCjANcCDwP7gIPAp8AxYAqYZo5L+vvPwBfAIeAFYBOwNHUbuh5gHfAi8D3VOaOC7gUWpW5bVwH0A18SjhFgc+p2Zg9wA/Ax8TgCXJ263Vmi48MfxOc3YGPq9mcF8CRwkXScB+5JHYcsAO4D/iY9M8CtYhlgNfAr+fADcIVYBXiZ/NgjFgHWaN+dG1PAMrEG8IRHcCaAQaChP5uB8QhSHhNrAIc9ZKy6zHWr9G8hOSzW8PhPH2xx7dbAQsbFGsDvCwSl0eLaFYGFnBVreASl0eLalYGFINbwiMlAi2u3FCHxhYy3GNR/KkLiC0HvprbqmLFCvxnBZTjEGmSOWIPMEWuQOWINMkesQeaINcgcKeQlWApFSF1TsG6BwgfAKDBJjyD/trFdJjUW7+ucz//eNtQOcA3wBnCBHkU6F/JfXIxeD7b+C3ikaS1tzyL1CZlnutUcT6cyduuC5p5H6heCxu75umRswxASRsg8Q1Vl3An8hSEkrBAXyw2dylgCfIsxJKwQx3cd5awAz2EQCS/E8XS7MpYCpzCIxBFywvVA7Qh5CKNIHCGOB9oR8g5GkXhCDvnKWKzrXE0i8YS4GC/2EXIHhpF4Qhy3+wgxeXeVSMg2HyGvYJcZjYFbcR+DAz5CPsIuX2kMbolU3lEfIe6dvlWGNQa7IpU34iPEpQtbZMzlGeorI/c5Bqd9hKTIGU/NGHC9tn9n7DFrISGz2OCsbuMxPJ+Bq/uhxJwNnc1ZyCiwA7gZ6JOIaDe1M8HU9GyOXZabI9ju9dRaI8ByvZvapXnqKZjJbVB3Mu7Wcvt0qvhr7U4scDq3297tWuaNsfI/MsPrtvfDSJUZ1ReZfZFy0HPkSE6vTnZoea6bssoBHyHPRKrMTVqeGzOsMuQjZEOkyjQMP4jOc1s2E1RN5VllyvtWH3g7dG2KEPymcFXIg0VIcO5v91XCyZC1Mf4NOd72mwng2ZA1Mi5kqC0ZTd+Sb0LVyLCQkY63P9db4CCLrY0K+dNrpckCUoZC1MyokKcqyWgK2nDdCTvGhFxy8y21yGgK3JY6HxgNCZkMdgAAsBZ4rY6ZNQNCLgCvAlcFkXGZzcRc6u97naZF96CQSY2Fi8njUdKiQ1B3VKRQhPQUZI5Yg8wRa5A5Yg0yR6xB5og1yByxRqS4TnR6HolYI7wLKp1HItaIIGSwynkkYo0IQhpVziMRawDnEgpZucC102INPYo7JAMVziMZE2sA7wYWMl7hPJK3xBq63WxoJjo8j8TkMXp9me52eq5rJ5mqAuwlP14Sq7gjTyMm6/vwC3ClWAZYn0muiEsLvyt1PHI6Y/18QhkXgUdTxyErgE2J9ls5A/Snbn+WMLfp/9GIMtyWVNelbnf2AAOBN3P+zHWTqdvZVQCL3G4PbhdP7Vaq4gTvd3uqpG5b18PcBs8b3UkDwEHgc30Kn9IBGf3sVhH+CHwCvKnPOf1RlnUWCoVCoSBp+AfhdryswC6soQAAAABJRU5ErkJggg==",$E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFrklEQVR4nO2dSYwVRRzGS1lkMKJicI0RlJigqNFExYgXvTjjeOEioN40MCMXogkMavQkDOJBTGDQRG+C6MF4cQkuMQpi4kWNYuI6GhdEwA1F0Z+poYkT6Pp393vV1f/q7l/ykkmmq/qrZd5UfV/1e8a0tLS0tLS0tDQSYDKwFvgePRwE3gDmeGjfHOD1pE4tfAusBiZZgevQy9fAyV10/jRgFL0MW5E/oZt1XQzAMLrZbUXuQzcHgQs76PzZwJ/oZo8VuhH9vNDBADyPfjZYoWcAP6OfGwt0/vXo51fgrCOC7xcuXGICAZwD/ObQ8dHYqiG7jgnA+446DgDnhWnNmJalQr/eO/7CHuArx4U/dLMS6UD0A4LoZTnKLxPKPximFWM6TgK+E1Z3U48ucLsg/KGAwnuALx069gKnCWVPBX50lP0GODFgO+w638WtaQWOA951FPgDmBlQ/EJB/Hqh3Hqh3OKA+s8FfnfoeA843lXwGuBfR8GnQzXAArzp0HEIuMSk73j/cpTZbieYCQSwWZgI12UVfs5R0A7MtQEbcTnwj0PLtpTrX3Rca+u4KqDuq4VJvDVPBecLG5gdgWfSk8JM6h933c3CdU8F1Gvfxt8SNpSz81Yk+UO3lN6ShIw9yqfACYmZ+Imw1j7b6PjftbZIRacIq4kvgCmltmQcwEqhUXcD9wi/HzKBSCaCnRRpWL9tetEKpfX0itJachTJLP/MoWN/8krj88ATZUU3+5e0CicCHzoq/AU4s5SWpAAsoDgLTCCAGcJE+DjPDt5Vcb/QwA3eWyIAvFKg818zAckwNG/qtvKXhfX4XG+tyAC4GPg7R+dbXZeZQCT7D5euV33c4NKkUbnW42UCjOQYgI2BNUn7jyt83eQJHzaxBx3TMxI8Gy7NCKjnBkHL4z5vdLqwHrc28URvN8sAWC40erkJRIbt/b/X7/GG9ynJDCYBu1I07Op4tdGZjiW5vH7PNvGokBlM835TB9bbSazpI9ifrzSBSE5buI7x2D7qKevGtwmjvrqUm8pvi3cCd9ifTUAKe/2ezaadgtl0gak5yF7/ztLNyozMYLOpOXTj9XsU8axDgB2Y+aamIHv9z4QUMkvIDN4JmRlE5/V7FPSw8Ke40NQMZK9/uApBUmYwesyxi4hB9vp3hzy2UyQzWGlqAnIoNFilMDWZQXRev0eB/VqcyQoc2D6jgYzM4JgzPLFA2V6/LzRlBj4BXopmYmnJDHwB9Art2WS0oSkz8OT1fxDM6w+UGSw1kQAMCO1YZbSScbS8ug1Lmef6taEpM+gEYI2GI+7dmlZvx5gZADOTZyGq8fqbnhkAW4TZH5fNHltmAMxT4fU3MTNAm9fvi+RDQNRnBsAiVV6/5yWddHxjqgKNU5JnHqJdOosAd2nODIAhlV6/5229ysyAw/aJXq/fF/aMvMbMgBi8/rpmBsTi9fsCuEho8LYK9MTj9fvCnplX8pxBr6BjxNQVDZkBstdfi4MEIvbsfJWZAbLXH+y54qo3PpVkBsTu9fvCnqGvIjNA9voXmaZQRWaA7PWrMgdrmRlQJ6/fF8DWEJlBhte/xTQVAmQGObx+tRFpLTIDZK9/jWk6yJlBV0vD2nv9gTKDoZK8/gG/rYgYSsgMMrz+qI5KasgMRjqob5NQX285rYgcPGUGGdZ3/bx+X+Cp4xrp9QfKDHpzlO9rpNevITOg6V5/oMxgQCg32Givv8rMgBI3dI0EWFzEQsj4xqTmeP2+oICJlph6rddfwiDMy2Mj2+PjMR2FjwrcnWuZnzFIah8GqUtmsCN5pWHfkmZVrb8W0NlXEqp/IDAakJeYabRefwmDMFhgAKJ5KDwakG2G8bRef4mD0JdjAKL7YJCowG01R/3ROHXIDA61Xn+4QXgsZQAeDXX/xsPhb1Z6xH4jdfKy33s2ufEd09LS0tJiYuI/kF9z+/6oGZ0AAAAASUVORK5CYII=",ey="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAMj0lEQVR4nO1dC7CWRRleIEQuaiKIEAEpwsg1g8S0YlQE0ijNFCoTQaUSMi+FBliUEWhYpoINlgkWhVpoYpqSlIgYErc4kliICJmCBYge4Bx4mu08Z2Z9efe77gffmfmfGWb0/P++++5+3+6+l2ff35gKKqigggoqqKCCCgoAgKYAPgfgPgDPAHgZQBWAhQDuAnABgPce7MkH0A3AeADzAfwTwE4A1QBeBPAogCsAHG4aMgCcCWAD4lHDQQ8B0KhAfZoBGA1gBZLhFQADTUMEgOGc2LT4O4CLQz4IrsKxAF7LoM8eAJ8wDQkAegDYhXz4C4DTAuhiV9VLOXXZBuD9piHAvrkAlosB7AcwB8BgAL0B9ARwPoAfxkyObfdTAEdk0KM1+4yCPZOuAdAfQFsARwMYAOBe5buPmYYAvnESo2Ie2McAPAhgn2ei7CF5egodrLxNHlm7AcwG0C9GxkSl7QdN2WHfFKH0r1O07UnrSEMtgBujzgY+zG/yuxp+k3QrAdAYwFLR/l5TZgBowTfMRd8Mci4E8LpnEh8A0NJj4dg327eCzsmgx6eFnDftgzENaPtZlUNWawD3eCZ0hfsmAzhGeVvrMQNA8xzW01Yh70OmrADwHaHsnQFkjqSDJLGZW1ZHOnYS7wC4JED/Dwu5V5uyQrE6Lg0ktx+dIs081P5unb+TA/Vtzx0Xt5uyAsBioeyZAWW3BbAI8Xjabl8B+x0h5D9kygrFpu8ZWH5TxpR8+F3W/T6iz7NEH8tNWQFgo1C2YwF9tGXgTAsZHF9Af31FPy+YsoIHo4ug7juAw+m9+lAVOrIKoI/oY50pKwBsEcp2Dii7MYB5iMfjAN4TsN+ThfwXTVmhmIO9Asq+WZnshQxhSNwVsN9ThOy1pqwA8OcirCAAlyuTvNZuN9yWliifXxeo73OF3KdMWQHgt0LZEQFkflzJK2x2D3gAbRQLzAb2hgTo/zIhd54pKwDcIZS9Iae8Y5VzZZcWXwJwIoD/iO/aeFKHnDpMEjLvMGUFgHFC2dk5D90nlPzA8Ig25ygh7T8BaJJDj58Led8wZQWAQULZZTlkfQsHYlqCdpOVdjfl0ON5ISt1VPWgAcD7lO0i9dsH4Awlpr+S20xXxob6MXs1wPn/rvwnJ82uirMzrkKZWu1iygomRN4QCnuDYgBaMn9st44vA5gKYC6DbKHxJmVPZV9DAZwUFbrgw3TxVpGsjSAA8IhQ+ko+mK5MtEwhBWULyoNNjCNNZhKmkxMKd7HElB0AJgilt3piN2XHNiW0Mt2UfP+/knSS0NhHE3MD04tVZF64/6r42QZ+15fgz4OlJHa1MWUAaRyW8PQcTcS02M+EykIl67WbB2yrHPq1ogwbKXVRzT43ZdS7lu0vDh3+TmOlzPWkCqMOwScZ0xnOKGNzyjtP+f6kgPp+T5H/KYdI0Jf81en0G3akGNd2AD/JQj7IYpKdn3GLWRMht4WSR7AmZ9OAutt40XrRhyUJt4gY67Mpx2hX0u8L4ZLSTNQS3xLLSWgapOzBXT2yp4jv1YTK5yqZLbndTPF8t53ih3yGpIPVCebBpmY/HIrCbU3GKLxM8+0DMZHRCYr87sr+/KPcivvHM1s5Z7or37Pnmou/is+t/zAtxpTeR4pj+6zKjo3Y4+uX2yAfUYnOTiRHCHXJExeWvXxUJoWTjamNwvN5PAG54OseeU14flkigA/WIrswrWUzP2Li7eHbJ+Fg94r2vZ3PByvyv5hQR3tofo2H5nT+d6JDUHGu4Iat7UoW2+e+JLltJm6kE+riHt+ZI/c+3x5nKSH9kwzSkfeoxqnhIbdSfPZMnJvPs2hNxCBXx3H56ZXL7XFNfcxKOZMWZchf+AyVxd6cNR0pez1HM7MyEazsG60sx+aWsaasrFMj5DQhlT0pbo0KApKOLo2E0aS9/Ev8fUyGcdsX7KueOxKrDnDk2PESj+fXMacjZB+giysUNtu8GDlpJj9R2EDhF21RXpi38rAsLE1GWemgP9QkLuH9qxCX1ADcJuRWp+HzoG7byYqhEXI7kT/qQv7/zADjb6mkai0m13+hg2IKPpwniyQUODHG3b89pn0Su9uHSHY2gFsi2lqdewSag6a0GuXDPtbQnnXxSuxpnf/ShrsaOqQgRWVBrxhLzRepfTLwHNjt+FXRx032gxeSXifK0fknPYP8cUy7qwI8gHExfXzX025YAfNgD3oXa4yyJ3cqoOPGDBXLJdg+pp12NqVFZB6Z3CLJpthQxE0YnjvvmgPDk95FnwI6bqSYuNXW9I1pJ7fHLJga00d7AG+LNm8UEWZm+tXFTqNcKR1fQMc2/6rhtph21pbOi7Exfcz0tLusgHm4XvSxzP7xBvHHzaFrJABY4BlkddQqsAdogAfgtWQAnKCES1zvOORt/fZKnuHG+j1QfnBzwI5PiEkPzohprzkySbEiRvYvY9oPCjQHRyg7jd36j6v/gq0aIm3gIEuQwTIX8hrrHl+uIOLid1KcHRPQky+GpMMsCDD+YzzR0mvlIaltE9PyZKaY7ZIWxleUW+wP5nCYslo/crybWN3FhX1A3XKMv7di/f1/vAdsb7yXq3mdy7N6hAC+IGRt50MZqay402PM2DQPYVqUGQngo0qbkfzMBssSW1ERnu9ETz5lmbf2BR+CZThIVJOrmYqhoLxlM5wJXaUE/uLC0YNjav2siKMgcrXLhMvq+gemJJI2pfEJmPqUY3ODcK2SuMwPeQT8m9yfpgn3vr2+Yhdpi3q44AXtcXzTpzF71zPjqnxX0I4HpgxPnJFAbn+FzS0TMs2S6Fj/loyLSElu5hJrGyFjTBwzAsAfFAfoaFMQABypxPufUL4ny9X8zCOvMamMi2LoOJ/Nc4hE3UqsZlx9qLwYpyg1KWFSfmYmZZONR+YVbN8nKd8bopxdzUXa0m7J/4iYG3uu3R/n7SddDZ9XInlQbqPMYKK+s2LiqdYEDkwBWjrIKbmU9pudNUkOWPsycbt1cTU986cTsOmeS1PfKE1i4ZoEDwLK3r8yQm4LUlvkBbxmAXVvQuvDxcaosDsrOqbFErIkiqOwAziMYdUkRK167KAFcAtXU0/3IAcwLOStFkXn6xT55zn7eGduoxNoo8sXIgo1LASVu75dloF9BMDdGenntRyoJbnO4mElV9FpeVYCCQC9lOT4Llp6VYpnnhSruCO0Czur2benEbzJXtRdgGp61a/Tu1wv6OnrBT09S8nMOLxKFmDwkH0wAPi2UDoL/bsM2K/EhhaaskOx7ccw8T+M8fA5XPq1KA9qqNMc6jiM+WLLAXWxMxRZoRDwQPuvULpPhPXTgzb3KK6cWWTTyQBeCLzDl+NuVsGy5LCB5O4clmI8QZgShYCOVe43BnXBshrFNO3OCeun/OvFz473hFJGZxyTLKN5gSkrlDKPi3PIGp82hcl2djVJzA3oPU80ZYUyabNyeuDzlcm8NIZHJBPsNlxwZA495AO9z5QVNmgVsmQM6sLj8vrS29oNGn73JSXWk4rRnSB38KwpKwD8UfM2c8ocoATstrj8JXrni4qoGaSca6WumCUTEUHcc9TdYJT+RBUvkzTyVDu/P0RMhn242GbKCmW76F5gVV7wrdeohUtDUWsYyHNRW9r60Qq95biAshvF1Aytx8aQ8RmGpiVUv+GQQ4kDBQ1UoS7Z7StvD/YfNE7DquwS5ayYosRO2hfQR2tlqyuS0WzTmC72mrJCybd2K6CPL0Uw7R4ImchxLpi42G7KCuUG48DAZ8CkBNHVRSHvGvPnUBKVXTjkUDzXSwLWeviFMtn7PNW1qkKtPprADaZ6+vQCfsChi4cstpfpzS6e67U2inluAZVWfmDKCgAXCWX/llPeKE/pmJ1u9ULWF33es0JuzeMTKLSc3A+1MNBCkYmWfhmLhCyAjvVaTJ6MPuv9wrMlpaa6kDzgYk+eAlIHBcobMz9F2za2WkrEpYnHophzPKiv92Tb6quXJKqkS1lPhaarFw7+Omraa0JdSeqSoeR67GaoO1FyxxJ0I0rJ2D7utBdHYmR8X2kbyxE95GAar8pz8/4iLutOJLNeTkJr1A2a5Vl+CoVBtKjQRS2LdlxLek07/jrHqUq54nKHoSXsb22lrCenYSvL0OQqXWZrwwX4Mc8dUbd4SgkmvbNwc3axuu1RgWNI45SqvkmwN0Re45CAtXOSVshdx5vxRVbMakFapeSJRhGxzjINGRz0GBYAWUsb/jWGLeZzm+l1sCOMpMRcRR3WkRq5h2buI2T6BY0rVVBBBRVUUEEFFVRgiP8Bs6AMgVPZwA4AAAAASUVORK5CYII=",ty="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD90lEQVR4nO2dT4hNURzH7wyTKQwKZWYWMv7WpJSxmAULakgWEpKkNJKNhZBQZkFmKDGL2YzFWJBpmgUlxRSLiZKGokQhE/Jv5F8ixleXo978nPve/XPOe+fo+6lZvHvP/Z3f+X3efffPO/dNEBBCCCGEEEKIgwCoBdAD4CNIUsKa9QKYZVLGUOI0iCSsYY0JIeGeQczQbUIIP6bM8d6EEGIQCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEMCnEM34Vcjcipw1D8fgANAMYCWBj2B8v4LuRwRE6bDcR+DmCCiDsOwCAs4ruQlRE5zTEQuzMidics4rOQnwAmR+RUZmAmzMmI2CdgEZ+FPBB5jBGvL2WMfxtAuUb0ACzis5AukUezeH3QQB+tAEareBXqtVV8FrJN5NEnXi831M9rANeLNRnQZyH1OTmMAvAFQHXOsokAhuEZvgr5EErIyWG2Wt4kcrsPz/BVyGWRw2q1fLdY3gXP8FVIi8ihRS0/LZZvz9JJKcbrq5AmkcMFtXxALF+QpRMKiX9BOEkU/pla9/XvaWrOwf4ThdjlnpAxVayfJ9ZfoxC7nCpwvbFOrG+jELtsEQXfL9YfiTgDSwyPIfGYKwoePp+XyxWxfhqF2OOd5obfE02bMtHmaZrOuIcU5qIo9CR11iWZIdp1U4gdDohCL4toJw/sOynEDktFofdEtGsT7RopxDw/AFSJQp+LaCtvxVcC+Ja0Qx5D8nNHFgjAw4i2ugP7TQoxS4cocFWB7zvqRPt2CjHLJlHgJQXarxftN1KIWWYmPHM6KtrXUYg53shjQhoAvEzSaUQMq6QaWDETVJzPnGgw4nuTWJRivCYGWQz2Zk400N6IzEspxmtikMVgceZEg7xX9lpKMV4Tg7TN93D2eeZEg9+5jlcXmLEoxXhNDNI2tzR9NgN4FONvhWbbu3E7phA97ZqidsesaWuW2esUomeDpqiDaR/oUXsXhWRguihodYJtP+fOQlHb11NIel5o3uFrEsaYL7YvV1NRC8KPrH/p1Qg5llDIVk2MPgpJxy5NMfuzTBtSMQ5RSDoaRSEr1GMHqSfWqTirKCQ54bTQSlHIhhRxhjVP006hkOTc0Lyzd8DAd/EqVnjhmBce1EdyXFPEsymF7NPEOkMhyVirKeJjU7fv4+xt3ENGUltglnsSXmmELCq0EYUQBFlhDc1CIY5BIY5BIY5BIY5BIY5BIY5BIY5BIY5BIY5BIY5BIY5BIY5BIY5BIf+hkFiTzkjx/jmx/PEXkp4eE0LCXwR9myEJ8och+WBrFik16hEBfnwlJ6xZjzEZhBBCCCGEEBKY5RfDyklcVUO84wAAAABJRU5ErkJggg==",ny="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBklEQVR4nO3dTchUVRzH8SkTX1LJl+RBjTKs0DSUXkywRYQLkYhQQ8jEcN3CCGyrUYIohOWihWHkRh+erHDjwgqUFhUFCi2UBAlfsJTU3sz0KwePWNdz751x7pn533N/n/U5M/c+32funfsyM62WiIiIiIiIQcA0YBC4gHTK/c2GgIeqjHG248WQLPc3nFpFEPfKkGrsqiKINlPV+a2KIFIhBTFGQYxREGMUxBgFMUZBjFEQYxTEGAUxRkGMURBjFMQYBTFGQYxREGMsB/kC2AK8AjwFPAwMAKOB4cC97jo0sBhYD+wHrlBzZoPc5rLMAN4F/qamkgpyAzAT+JEaanWrlwsGvAp8DHzmb67YCiwH7g6MnQgco2bqFuS7nOGngWWB8fOAv6iRVII4V4FVgTnvUyMpBXEuAlMyc6YDl6mJ1II4GwPzDlITKQY5Epj3NjWRYpCrwLjMvBeoiRSDOI9m5j1NTaQaZEFmnjvFUgupBpkTeKfVDnd0/ybwBDAZGObPmT0JrAW+IbJUg0wJHCCWvV1eDdzZxvo+G/NgM8UgZ4A7MvOeKxj/S3afU7K+jxFRikGGAvNeyxn7L7CwYN3GB+JuIqIUgywOzNuZM3Z7YOwkYAfwux9z2R9YrgFGAD8TUWpBDgT+o93FrFM542dlxo4EDhU8/nEiSynISeCBwJyXcsb/FBj7Mn2WSpCvgfsD4+8CfsiZszcw3l0y7qu6BRkCTvjrH27Tsh1Ykt1M/Wf8GwVPsSMwfjN9VqsgnXDvnkqurQ92sHnrmVYFK25uwYBngHMlT3E0MG9YBwefUXQVw6+EmQXj+j5jXQd3ncwNPIY7ZXKYPkkiCDDWHycc6fBp9uQ83hjgQ/qgNkH8QdlyvxN/HlgJvAXsA/7s4qluuQ6f2aeUbfoaG2RSpKdym7dFBet3H/AVPaIgN6OsLIjidvbb6AEF+b+P3P6oIEz0W4oU5FZH3QWqglfKl0SkIGGXgNdDZwD8Dd3/EImCFHsn55WSdzq/awpSbmkgyItEoiDlvs35nskoFKQ9owMHqVEoSHsezASZQCQK0t6tqfdkgswiEgUpdyCwD3H3cEXR9CCfl9z09gfweGBZPiGSJgc55Y+8B/xZ4+/9AeGNEJ8CswPLMcffzxVFk4O8l7M+4wvWdYS/1SiaJgdZ2OF6uhi7iazJQTYAo9pcx/klN9BVpslB8FcDPwBWAI+4T175Ox0H/Nd5rO315xPNBmmqloLYoiDGKIgxCmKMghijIMYoiDEKYoyCGKMgxiiIMQpijIIYoyDGKEiCQc73eyUSUsmPE7sP80s1BqsI4n614NeKFqjpP3A/o+sgPspU9+Ps2nzdlvP+e+yriSEiIiIiItKq1jU0h8yeclb5XQAAAABJRU5ErkJggg==",iy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO3dT4hNUQDH8ed/SZKGIrGShX+JFRsLshKiwaSsLFBkpSysLSTKSpbYW9OUNVkrK5s3ShEJszBf3brldLx597x7z/V+d+b3qbuaM++ec7/d++6b6XV7PTMzMzMzM1HAHuAZ8BFLNQM8BXbljjEFzCZPw2K/gHM5zwzHaG42y5lSXqYsjyc5gvg9I5+ZHEHmMk5osfudI4hl5CBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBixh3kcMVrrwC2AGeBF6kLAS4l7v9y1VoS1r8a2AFcAd7VOgoj7K9Sm0Hm+R7KT6Ug0e8vB+41OSCj7G++Sfy3IAXggmqQ4HUe1z0gdfYX7zxLEGDvgC+wFJeA+8DaaJ/T4wgCXI9+/A14C1wDlgTj1gGfk49CR4KEpgdcuhSChG5HYx8lzqGTQQr7g7HbBIN8AZYFYy8mzqGzQaaCsasEgxQ2B2OPJc6hs0GOB2PXCwaZC9/rgFOJc+hkkK/FG2Xv79iDwxYCTBSXuIRtQ8Ygr6KxtxZqkOJO5kS0z7vZF9IsyHtgezT2dZ0D0soiagbZCNwMthvAyeLyFO1vK/B9TEEORHO8ChwFVkbjTtc9IK0sosVP6hPlff/QhZQh3yRsZ6rWUuN47CvvuGoZdX+DJtB6EGApMAl8SFnIOD6pA2vKs+ZH7aOhFATYBNyJtofAc+DTKAuhvbusQwPmWPyZ5GXTEF287VUIUvU5pDEHCTiIz5B/9JqiGV+yIg4SqDpAfg8ZzZFgS/2v3YPo9xZ9EBtyRtYSv6A14yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAdZgEH8YEmxB0v60av59HMEKZ4HbkIPJ97tx3dne6b6zsZByijnHaVxjMksMaIzpbh89ZvNbVHpF5epbGeGmZmZmZlZL78/O0mb7eHXx6IAAAAASUVORK5CYII=",sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAK40lEQVR4nO2dCawdVRmAp9IWamuxgoLQIiioCAi1BpcKUhYXQIzSQlzAuJGghoILKiBBQBbFYgVkaSn0iZTUGIgKGosSrQLVGmtDtWUpUkCFUop2o699/czv+18zd94s5z/nzH333t4vecnLezPznzkzc86/npMkXbp06dKlS4cC7AIcCpwCXAD8CHgAWAo8BjwPbNaf5/Vv8r/7gdv0nGl6jZ2H+n7aDmA4MAn4KrAA2EQ8tgCLgSuAY7sPqPghvAQ4BpgL/JfmIbJuBY6WNiQ7OsAE4DJgFUPPKuBbwPhkRwPYD5gZeTiKRS/QA7wh2UEehEzKW2l9tqhSsG/SaQAjgOnAOtqPjcBFHaMAqDazgvZnuUz+SZurr/Jm9dE5bNO5b2TShtrTH+hc/ijzYdIOAO9Tizm25rNUJ9lzgRPUeNwfeJWM7/pFjhO1FTgE+CBwDnAjsKQGRWIN8J6klQE+rp0Xg2eA2dqxL43QtjH6slwPPB2pjXKvH01aEX0bZYwNVTXnA0fWaTmrZ+Ao4A71gYUgc+T0pJUALg68qReAbwOvGYK2y5B3ObA+8B4uSlroywh5u26STmmB+3glMCNwyJ3eCnOG7zD1O2Bi0mLQrxD8PuAFG5o5RSfIXs95Qlzrw5IWBRgGnO05v2xuuvYlY72navsEMDlpE4C3Ais9VeJ9mumXetBziNotaSPoj5P42lRiGI9oRiO/69G4u2PYEs0EOFAdiyFc2QxHoXUSn9eUNyUykVw/0ldT6mrgzh5e2zvbMTRKf0JELP5eizNSszcsSDLB6KQNIcy2yuNrdUT6Nhrj06/Wc0cBe0pIFHgncBLwKeAtJfLG6lsqjsJRkfxY+7qmAgFXR34gG6J6IYDbjQ0QzeTZCj2+L++hAPuo2phmvarMy/XL+40qCuL3mqXZKvL7r1Sbk2MeAZ7Kidsvq3ooarHHpifWw9i/xhj4KTnyTqd+Dqy458/XIFMM4tfGeCDiAo/JGp3o5Lq7FAS3HqYe5Ku8q0rRAN5Yk/wbQx/GhAjuabTz97Kov8Bo4ADgXZoKKkEmK2IzHa/BrPGWRAVgEfF5MSjvS5PYYrDMuxEK8FkPuTMTT1TxqINLQ4I4MTMKD/btnJTmZbWc/+lrBwE7AX8jPv/wapPm2sbkYp+OSaNWv5UjEk+Ak6kHu/WuqmRMlvt2zAA6H1j5fhKAqtexudnaiJE1ZaG/ObBzhgP/Msp8OsR9o2p/7Bzk/5j8e/KZ00oTWgrgKg+5RyYBaFZ8bN5hacCF1MPDIR0jyFfmIfeaJFyhkLQkVw+FC+dbGnCfwUdjJTiODvylWdpWSqaEnauQUrtbHNv0a0tNnxgwLrg0MsvlIR0T4I19dxIAsLtDv8jD+LBjezY5GaqGWMAW/ZTFkWfh0ZCOEYA9VL6Fa5P6naxnajqraxDvEBehUu3qwmI9/izsTIrQOT83yhTtbKdAmZ9wGY7VV+fCVBeh37Do0pr519vsWDPuL06aowJlSmigzGn6/wdumEeqJ3bNMHfhrNQ5P8XGytC8LPrnurVGuT8Ikalynyy49u2pY74cLUZiCO5/IHWOeGOtHB6hc24wyvx3hGFLakPy+JiHy2Whi0Cpw3DhsMC39aqQjhE0JGxlSg2uFNGYdk0dM9GxLX91Efi448X2zJwnhTFWr+ewCCmfjxjlXh8oM8/HNz9zjMReXFjpIvA5x4uNzZwngSQrbw/pHAG4xyjzmZBhq0D1PSlzjKi+Lqx2EegaIRye87Y+io0Zvh0jAC83GLFpjkk8AX6Z4y4ZmeOcdeHF2h6InitVtxZWhQxb+CdE3BAg88+Za83OOUbm1GgPJJuCU8SYgvwta6rp5CYahwOsznuhHKOIG6q+NslJI+KQ5TWpp863Frt8z9oxgcPVAMcmfgnYlWq0IWtlZUy199CC888wdsxTPp5YGoerJzWRrtaUHLE1XNz6oqzEVHtd3/D3F5w/ziPCZo57Az9LnT/DI4j0rHXYynGJ5A63YjTHNAxdXSfnllzjx3XGvRk8XB0OvB47xxlkDsvUtxcqJMB5jvLnxnQuziu5husb4hVAonG42u4X80huu8kgMxuW+E7JsVL/Hs256OpFXVGRjCATXi2eWBq1q+0BL+ALRpnPuQ5bwDcz55Zl77vW0ZwcM2YtebIvK7mOrJpj4TrHjtk1M1xtDwlLDaNH6qtTxWzGRbOiovShL1ryoBo1rpPy8RUVrNE9sTQOV4M6Rqu2LMxykClzlFPSn67N4sJG51xjrb9wYU7FdaQWw8LRRu1qUMcAH/IYtkYYC3jeFCHB8N6qe/WZ2NeW1c8BX4/piWWwdnVQzjEj1RK38N4Kuela9SUVJeOuno7zymQmAZ7bwpsB9jYW+6wum2QzMe2lJcddh43Zhjm1sF5Q5qNaPN36pF1TSX9Yca17ieTSoHG4uqDkuLcZZa4pGrYyNsW2spXkDOruC2ZfmiFQ31u2lKpDpoaTbcDg4eqAiva7Zn5UeR7Sts0DJfL2M6QmFX6RVctKBKdqaiXUutBJlsYHu9ih/edjY05B/lefy/JLkvdVa9KeFuw8YVDh9ii5lqwUTci8RONwVei2yaTsWFZEzQs0fTr1f7nWXgWydjMsgPa4dwzI6LC7uuQ6xxFQP0GjMbjNdbVpg/qea1dpgegA90VSIi5x6/18QeMNlu/WooxE/dqK8pkq31YajcH7De3/JDZuSZ07KhOMOqPEAHbVJOWl2tv+JBoFSmG+K0tKtJUrfSdZGocr52X01I1hmb+221UZB2lv3tJS+qItamaingh9nTGx+SsF1zkIj7eVxuGqz/qGGcIJA5yQk9Z0T8G1v2i4bm+0xZfF1jAI3lgydGUTBCqHLeC01N9+69F2i7GGbvCSjX2cnnPdycac5lt9+79IY1lvjG8MepN1HUMLJ2aGqzM92m6dv9ZmPBUNWYkpdVhCz65siL7thYdf6sHs0hkedR13pYarrb7LyeqawBb+lPr9J5lryVe70Hi9SjXd56ZGeli/87Iu9YDUnQUBbT8Yf6ZlXEpW9/6y2lbUU+vdmnc1P6PC+tR1CJ8JbLtl/hpg3cBakZ4Poy+0lM7lxqzqK/pVjEoFwMS5ZqEXeEVgu2WHHyu3pUYH68MQLovV72U3NsJzgUip7N1dryHLi1u4O0K7fSq9TtRVjHzud6FPdmSIBW8NAqHazhG6+4GF0yK1O62xuajdU1RjxMOd39yNBdQ/5bOW1hZdUFPqQ1zYlFU7A9o8zRjj911q3Du7PvQGPxKwx5Sr/+fOiO31qfSyIH1xaqz2+t7k56iXUyO311rpZeHspBXwqAuxWLijI7dVXB51cGHSSmjWYOwt8u6oqa0x91UUu+xLSSuic0qMRTMH+IXuyDYmQtvG6joksyLuIrd5yOcMR+3LtXDUlV61tGergSexisN0xexx6kBMb5s3URPmztFkjYdq+HpXD5k2ZUU7xeqAaycWtd2mxR2+9eqIpF3R/QLrWG612TxUu6NwCLbvrmNhzbrZoF96e21IbIg8zvVYfGwo6FWFYELS6egubzNrWH41lirbU5Wq2pGoNnapR0lzHYiz85LgvKlOILVZ8BxdZLhZSKDsZpms23GvrKZA//IVk3TF0wURtq5Ls0UX7bxCd5zrvIm6bugPn0rRzFTNaO/RxQ0kS/IxDQZt1p81+rclekyP1ndM1T1uuw+gS5cuXbokncr/AGvc1Km+GyHuAAAAAElFTkSuQmCC",ry={style:{"background-color":"white",background:"rgba(255, 255, 255, 0.05)","backdrop-filter":"blur(50px)","padding-top":"25px",width:"100%"}},oy={class:"tabs",style:{"margin-bottom":"0"},id:"home-display-component"},ay=["onClick"],ly={class:"container"},cy={__name:"HomeDisplayComponent",setup(n){const e=Tp(()=>nl(()=>import("./HomeCard-DcS4Nscn.js"),__vite__mapDeps([0,1]))),t=["Web Development","Graphic Design","UI/UX"],i=en("Web Development"),s=[{title:"Logo Design",image:new URL("/assets/logo_final-CwVBTyZz.webp",import.meta.url).href,link:"/logos",description:"A small collection of logos done for certain organizations I have had the pleasure of working with."},{title:"Spice Trail Tea House",image:new URL("/assets/logo_teashop_red_background-CvSPH06a.png",import.meta.url).href,link:"/spicetrail",description:"A conceptualization of a tea shop and company specializing in spiced tea, including loose leaf, tea bags, cups, and other products."},{title:"Miscellaneous Designs",image:new URL("/assets/cool_leaf-02-02-D6mHwyWO.webp",import.meta.url).href,link:"/misc",description:"Little tidbits, diagrams, and illustrations that were made for fun."},{title:"Map",image:new URL("/assets/mappostermin-D3odMWe_.png",import.meta.url).href,link:"/map",description:"A large poster style map of my home nation, Nepal."}],r=[{title:"Joshua Kendall Website",image:new URL("/assets/JoshuaKendallphoto-Df50U5iI.png",import.meta.url).href,link:"https://joshuackendall.com//",description:"A series of websites for renowed author and biographer Joshua C. Kendall and his four books."},{title:"Cardinal Talent AI",image:new URL("data:image/svg+xml,%3csvg%20id='Layer_2'%20data-name='Layer%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20760.61%20594.76'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%239a303a;}.cls-2{fill:%23dd953e;}.cls-3{fill:%232c302f;}.cls-4{fill:%23bf3b47;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M727.89,586s-68.64-165.88,124.8-301.31c0,0-35-18.12-88.76,6-10.92,4.91,14.36-45.27,14.36-45.27a276.26,276.26,0,0,0-70.84,40.06c-10,7.88,4.15-39.64,4.15-39.64S674.93,258.49,649,284.23c-1,1-17.7-31.81-17.7-31.81s-37,21.26-39.89,66.93c0,0-1.38-6.54-14.83-27.26-63,49.45-71.84,96-51.27,231.81Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-2'%20d='M827.65,586l50.18-7s-29.53-48.31-61.68-59.14S827.65,586,827.65,586Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-3'%20d='M827.65,586,756,633.27s48.64-104.5,64.68-111.72Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-4'%20d='M117.21,741.26s10.7,36.35,39.56,46.77S411.26,769.43,446.24,752c3.2-1.61,132.84,6.41,209.81-18.18,18-5.75,84.46-41.43,106.92-85s40.17-112.62,57.73-127.23c3.59-3-39-62-77-53.46-6.28,30.61-44.1,71.37-44.1,71.37s-190-77.78-144.33-344c0,0-42.87,13.82-66.55,77-4.82,12.82-25.23-48.12-25.23-48.12s-19,40.17-24.49,89.81c-1.6,14.43-28.87-35.28-28.87-35.28s-19.24,40-19.24,81.79c0,1.6-40.09-11.23-40.09-11.23s-13.1,43,21.65,82.19c0,0-.8,4.54-28.47-1.2-10.56,91,15.17,131.1,142.06,223.71C415.71,734.69,117.21,741.26,117.21,741.26Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-1'%20d='M344.08,430.41c-10.56,91,15.16,131.1,142.06,223.71l101-50.25C486.24,578,385.33,528.59,344.08,430.41Z'%20transform='translate(-117.21%20-195.47)'/%3e%3cpath%20class='cls-1'%20d='M134,771.58c5.83,6.81,13.34,13,22.82,16.45,28.87,10.42,254.49-18.6,289.47-36.08,3.2-1.61,132.84,6.41,209.81-18.18,12.83-4.1,50.27-23.39,78.85-49.91-97,42.43-180.95,55.34-288.4,43.5C354.79,768.2,248.69,780.14,134,771.58Z'%20transform='translate(-117.21%20-195.47)'/%3e%3c/svg%3e",import.meta.url).href,link:"https://www.cardinaltalent.ai/",description:"A website and frontend for an AI recruiter product."},{title:"Sitesaga",image:new URL("/assets/sitesaga-BVq7Ka-J.jpg",import.meta.url).href,link:"https://www.sitesaga.com/",description:"A website all about WordPress and web hosting that I designed and created pages for."}],o=[{title:"Gymbel",image:new URL("/assets/gymbel-DJNprGre.webp",import.meta.url).href,link:"https://devpost.com/software/gymble",description:"A Tinder-like application to find gym parters, made for HackHer 2024."}],a=an(()=>i.value==="Graphic Design"?s:i.value==="Web Development"?r:i.value==="UI/UX"?o:[]);return(l,c)=>(at(),ht("div",ry,[qe("div",oy,[(at(),ht(Yt,null,lr(t,u=>qe("button",{key:u,onClick:f=>i.value=u,class:No({active:i.value===u})},_s(u),11,ay)),64))]),qe("div",ly,[(at(!0),ht(Yt,null,lr(a.value,(u,f)=>(at(),Ph(cn(e),{key:f,title:u.title,image:u.image,link:u.link,description:u.description},null,8,["title","image","link","description"]))),128))])]))}},uy=Kt(cy,[["__scopeId","data-v-7de9e7c8"]]),fy={class:"blur-background"},hy={class:"layout-wrapper"},dy={class:"layout"},py={key:0,class:"clicked-label"},my={__name:"HomeComponent",setup(n){const e=en(null),t=en(null);var i=en(0);const s=[{name:"NodeJS",url:jE,link:"https://github.com"},{name:"Java",url:ZE,link:"https://github.com"},{name:"Figma",url:JE,link:"https://github.com"},{name:"Python",url:QE,link:"https://github.com"},{name:"VueJS",url:$E,link:"https://github.com"},{name:"ReactJS",url:ey,link:"https://github.com"},{name:"Adobe Illustrator",url:ty,link:"https://github.com"},{name:"Php",url:iy,link:"https://github.com"},{name:"Adobe Photoshop",url:ny,link:"https://github.com"},{name:"Wordpress",url:sy,link:"https://github.com"}];return lc(()=>{const r=e.value,o=r.clientWidth,a=r.clientHeight;requestAnimationFrame(()=>{const z=r.clientWidth,G=r.clientHeight;c.aspect=z/G,c.updateProjectionMatrix(),u.setSize(z,G)});const l=new Fv,c=new on(75,o/a,.1,1e3);c.position.z=10;const u=new UE({antialias:!0,alpha:!0});u.setSize(o,a),r.appendChild(u.domElement),r.setAttribute("draggable","false"),u.domElement.setAttribute("draggable","false");const f=new FE(c,u.domElement);f.enableDamping=!0,f.dampingFactor=.1,f.enableZoom=!1,f.rotateSpeed=.5,f.autoRotate=!0,f.autoRotateSpeed=1,f.enablePan=!1;let h=!1,d=0,_=.99,v=0;const m=new Zv,p=new ke,T=[],A=4.5,M=new js,U=[],P=new qv;s.forEach((z,G)=>{const te=Math.acos(-1+2*G/s.length),ae=Math.sqrt(s.length*Math.PI)*te,Y=P.load(z.url),se=new gd({map:Y}),H=new Bv(se);H.scale.set(1.2,1.2,1.2);const me=new k().setFromSphericalCoords(A,te,ae);H.position.copy(me),H.userData={link:z.link},M.add(H),T.push(H),U.push(me)}),l.add(M);const C=new xd({color:16777215,opacity:1,transparent:!0});for(let z=0;z<U.length;z++)for(let G=z+1;G<U.length;G++){const te=[U[z],U[G]],ae=new Pn().setFromPoints(te),Y=new kv(ae,C);l.add(Y)}let B=0;u.domElement.addEventListener("mousedown",z=>{z.preventDefault(),h=!0,B=z.clientX,d=0}),u.domElement.addEventListener("mousemove",z=>{h&&(d=(z.clientX-B)*.002,B=z.clientX)}),u.domElement.addEventListener("mouseup",()=>{h=!1,v=d});const b=.03,y={left:!1,right:!1};window.addEventListener("keydown",z=>{(z.key==="ArrowLeft"||z.key==="a"||z.key==="A")&&(y.left=!0),(z.key==="ArrowRight"||z.key==="d"||z.key==="D")&&(y.right=!0)}),window.addEventListener("keyup",z=>{(z.key==="ArrowLeft"||z.key==="a"||z.key==="A")&&(y.left=!1),(z.key==="ArrowRight"||z.key==="d"||z.key==="D")&&(y.right=!1)});const L=()=>{requestAnimationFrame(L),!h&&Math.abs(v)>1e-4&&(M.rotation.y+=v,l.children.forEach(z=>{z.type==="Line"&&(z.rotation.y+=v)}),v*=_),y.left&&(M.rotation.y-=b,l.children.forEach(z=>{z.type==="Line"&&(z.rotation.y-=b)})),y.right&&(M.rotation.y+=b,l.children.forEach(z=>{z.type==="Line"&&(z.rotation.y+=b)})),f.update(),u.render(l,c)};L(),window.addEventListener("resize",()=>{const z=r.clientWidth,G=r.clientHeight;c.aspect=z/G,c.updateProjectionMatrix(),u.setSize(z,G)}),u.domElement.addEventListener("click",z=>{if(h)return;const G=u.domElement.getBoundingClientRect();p.x=(z.clientX-G.left)/G.width*2-1,p.y=-((z.clientY-G.top)/G.height)*2+1,m.setFromCamera(p,c);const te=m.intersectObjects(T);if(te.length>0){const ae=te[0].object;i.value=T.indexOf(ae);const Y=s[i.value];Y&&(t.value=Y.name,setTimeout(()=>{t.value=null},1e3))}})}),(r,o)=>(at(),ht("div",fy,[o[1]||(o[1]=qe("div",{class:"blur-shape pink"},null,-1)),o[2]||(o[2]=qe("div",{class:"blur-shape purple"},null,-1)),o[3]||(o[3]=qe("div",{class:"blur-shape blue"},null,-1)),qe("div",hy,[qe("div",dy,[o[0]||(o[0]=qe("div",{class:"content"},[qe("h1",{class:"title"},"Sreesh Poudyal"),qe("h2",{class:"subtitle"},"Web Development, UI/UX, and Graphic Design")],-1)),qe("div",{ref_key:"globeContainer",ref:e,class:"globe"},null,512)]),t.value?(at(),ht("div",py,_s(t.value),1)):ko("",!0)])]))}},gy=Kt(my,[["__scopeId","data-v-88b89cee"]]),_y={class:"page-wrapper"},vy={class:"home-component"},xy={class:"home-display"},Sy={__name:"HomeView",setup(n){return(e,t)=>(at(),ht("div",_y,[qe("div",vy,[lt(gy)]),qe("div",xy,[lt(uy)])]))}},My=Kt(Sy,[["__scopeId","data-v-2fefaad0"]]),Ey={class:"font-section"},yy={class:"font-grid"},Ay={class:"font-name"},by={class:"font-description neonWhite"},Ty=["href"],wy={__name:"Fonts",setup(n){const e=en([{name:"Midheim",description:"A modern, sans-serif typeface known for its clean lines and versatility.",cssFamily:"'Midheim', sans-serif",downloadLink:"/font/Midheim.ttf"},{name:"Open Sans",description:"A humanist sans-serif typeface designed for legibility across print, web, and mobile interfaces.",cssFamily:"'Open Sans', sans-serif",downloadLink:"https://fonts.google.com/specimen/Open+Sans"},{name:"Lora",description:"A well-balanced serif typeface with roots in calligraphy, perfect for body text.",cssFamily:"'Lora', serif",downloadLink:"https://fonts.google.com/specimen/Lora"},{name:"Montserrat",description:"A geometric sans-serif typeface inspired by urban typography from the early 20th century.",cssFamily:"'Montserrat', sans-serif",downloadLink:"https://fonts.google.com/specimen/Montserrat"},{name:"Merriweather",description:"A serif typeface designed for readability on screens, with a classic yet contemporary feel.",cssFamily:"'Merriweather', serif",downloadLink:"https://fonts.google.com/specimen/Merriweather"},{name:"Poppins",description:"A geometric sans-serif typeface with a clean and modern aesthetic, suitable for headlines and display text.",cssFamily:"'Poppins', sans-serif",downloadLink:"https://fonts.google.com/specimen/Poppins"}]);return(t,i)=>(at(),ht("section",Ey,[qe("div",yy,[(at(!0),ht(Yt,null,lr(e.value,s=>(at(),ht("div",{key:s.name,class:"font-card"},[qe("h2",Ay,_s(s.name),1),qe("p",by,_s(s.description),1),qe("p",{class:"font-preview",style:Uo({fontFamily:s.cssFamily})}," The quick brown fox jumps over the lazy dog. ",4),qe("a",{href:s.downloadLink,target:"_blank",rel:"noopener",class:"download-link"}," Download "+_s(s.name),9,Ty)]))),128))])]))}},Ry=Kt(wy,[["__scopeId","data-v-2cb9f982"]]),Cy={class:"image-grid"},Py=["onClick"],Dy=["src","alt"],Ly=["src"],Iy={__name:"ItemGrid",props:{images:{type:Array,required:!0}},setup(n){const e=en(null),t=i=>{e.value=i};return(i,s)=>(at(),ht("div",null,[qe("div",Cy,[(at(!0),ht(Yt,null,lr(n.images,(r,o)=>(at(),ht("div",{key:o,class:"image-item",onClick:a=>t(r)},[qe("img",{src:r,alt:"Image "+(o+1)},null,8,Dy)],8,Py))),128))]),e.value?(at(),ht("div",{key:0,class:"modal",onClick:s[1]||(s[1]=jm(r=>e.value=null,["self"]))},[qe("span",{class:"close",onClick:s[0]||(s[0]=r=>e.value=null)},"×"),qe("img",{class:"modal-content",src:e.value},null,8,Ly)])):ko("",!0)]))}},wc=Kt(Iy,[["__scopeId","data-v-be7d3618"]]),Uy={style:{"margin-top":"4rem"}},Ny={__name:"BazarBlend",setup(n){const e=[new URL("/assets/product-arabian-CSAPWqL2.webp",import.meta.url).href,new URL("/assets/product-assam-CJLCfvB3.webp",import.meta.url).href,new URL("/assets/product-darjeeling-C5VmlkOj.webp",import.meta.url).href,new URL("/assets/product-darjeeling-back-DNXdwwi-.webp",import.meta.url).href,new URL("/assets/product-lineup-2-CqIAkEYF.webp",import.meta.url).href,new URL("/assets/product-lineup-B-_Gyn8J.webp",import.meta.url).href,new URL("/assets/logo_tea-BoAWxn71.png",import.meta.url).href];return(t,i)=>(at(),ht("div",Uy,[lt(wc,{images:e})]))}},Fy=Kt(Ny,[["__scopeId","data-v-42e6e605"]]),Oy={style:{"margin-top":"4rem"}},By={__name:"Logos",setup(n){const e=[new URL("/assets/Untitled-3_Logo%201_back-CcTA_kLq.webp",import.meta.url).href,new URL("/assets/logo_teashop_red_background-CRlWQYrl.webp",import.meta.url).href,new URL("/assets/logo_final-CwVBTyZz.webp",import.meta.url).href,new URL("/assets/logo%20design%20final-CmGqr30q.webp",import.meta.url).href,new URL("/assets/126903761_843966036406371_2873100655496944690_n-CUeDXbbT.jpg",import.meta.url).href,new URL("/assets/logo_1-q8ycEwR7.webp",import.meta.url).href,new URL("/assets/logo_sugarloaf-BFhjPT4H.webp",import.meta.url).href,new URL("/assets/WesternMassNepaliLogo-01-D0d3aRDj.png",import.meta.url).href];return(t,i)=>(at(),ht("div",Oy,[lt(wc,{images:e})]))}},zy=Kt(By,[["__scopeId","data-v-b5de4186"]]),Hy={class:"map-poster-page"},ky={class:"map-container"},Gy=["src"],Vy={__name:"Map",setup(n){const e=new URL("/assets/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered-raZyXrFQ.webp",import.meta.url).href;return(t,i)=>(at(),ht("div",Hy,[qe("div",ky,[qe("img",{src:cn(e),class:"map-image",alt:"Map Poster"},null,8,Gy)])]))}},Wy=Kt(Vy,[["__scopeId","data-v-8d5d90b6"]]),Xy={style:{"margin-top":"4rem"}},Yy={__name:"Misc",setup(n){const e=[new URL("/assets/cool_leaf-02-02-D6mHwyWO.webp",import.meta.url).href,new URL("/assets/Copy%20of%20JOIN%20US%20AT-Cbzc6_sT.gif",import.meta.url).href,new URL("/assets/story-bJD6Shtf.webp",import.meta.url).href,new URL("/assets/Untitled-1-01-CnYBj5aE.webp",import.meta.url).href,new URL("/assets/127458884_696022131349534_8381611335992114089_n-C4K5k0Xe.webp",import.meta.url).href,new URL("/assets/Vintage%20Floral%20Funeral%20Invitation-DnuJhfch.webp",import.meta.url).href,new URL("/assets/sciquel-01-C3yz8x6G.webp",import.meta.url).href,new URL("/assets/layer_image-Uj2mk0HO.webp",import.meta.url).href];return(t,i)=>(at(),ht("div",Xy,[lt(wc,{images:e})]))}},qy=Kt(Yy,[["__scopeId","data-v-f9cbe6a1"]]),Ky={class:"presentation-grid"},jy=["onClick"],Zy=["src","alt"],Jy=["src"],Qy={__name:"PresentationGrid",props:{images:{type:Array,required:!0}},setup(n){const e=en(null),t=i=>{e.value=i};return(i,s)=>(at(),ht("div",Ky,[(at(!0),ht(Yt,null,lr(n.images,(r,o)=>(at(),ht("div",{key:o,class:"presentation-item",onClick:a=>t(r)},[r.type==="image"?(at(),ht("img",{key:0,src:r.src,alt:"Image "+(o+1)},null,8,Zy)):r.type==="video"?(at(),ht("video",{key:1,controls:!1,loops:"",autoplay:"",muted:"",src:r.src,preload:"metadata",style:{"max-width":"100%","max-height":"100%"}},null,8,Jy)):ko("",!0)],8,jy))),128))]))}},$y=Kt(Qy,[["__scopeId","data-v-63ac2bc3"]]),eA={style:{"margin-top":"4rem"}},tA={__name:"SpiceTrail",setup(n){const e=[{type:"video",src:new URL("/assets/SpiceTrail-Tea-House-bRJcnHUG.mp4",import.meta.url).href},{type:"image",src:new URL("/assets/Concept-BAd06M_E.png",import.meta.url).href},{type:"image",src:new URL("/assets/Logo-Slogan-CAaogrps.png",import.meta.url).href},{type:"image",src:new URL("/assets/Decor0-cTF-GCia.png",import.meta.url).href},{type:"image",src:new URL("/assets/Decor1-DYyKL3Lb.png",import.meta.url).href},{type:"image",src:new URL("/assets/Floor12-Du5DrSh6.png",import.meta.url).href},{type:"image",src:new URL("/assets/Floor3-1N46dgcn.png",import.meta.url).href},{type:"image",src:new URL("/assets/Tea-selection-BdS3oLr7.png",import.meta.url).href},{type:"image",src:new URL("/assets/Spice-add-Di-JaraC.png",import.meta.url).href},{type:"image",src:new URL("/assets/Sig-Menu-DXiYpnLr.png",import.meta.url).href},{type:"image",src:new URL("/assets/Desserts_Snacks-CAVl0aTW.png",import.meta.url).href},{type:"image",src:new URL("/assets/Activities-Bx9FrU6F.png",import.meta.url).href},{type:"image",src:new URL("/assets/Packaging3-B46yWPRu.png",import.meta.url).href},{type:"image",src:new URL("/assets/Packaging-CXKrcVGP.png",import.meta.url).href},{type:"image",src:new URL("/assets/25-C4eiFNaE.png",import.meta.url).href},{type:"image",src:new URL("/assets/18-DbAnRtAv.png",import.meta.url).href},{type:"image",src:new URL("/assets/Packaging2-rSrnuEqI.png",import.meta.url).href},{type:"image",src:new URL("/assets/16-BYJnGg7_.png",import.meta.url).href},{type:"image",src:new URL("/assets/17-Dz1zAe63.png",import.meta.url).href},{type:"image",src:new URL("/assets/Merchaindise-CMhZoXZd.png",import.meta.url).href},{type:"image",src:new URL("/assets/26-C1ULBZ7a.png",import.meta.url).href},{type:"image",src:new URL("/assets/21-CZ-aV95q.png",import.meta.url).href}];return(t,i)=>(at(),ht("div",eA,[lt($y,{images:e})]))}},nA=Kt(tA,[["__scopeId","data-v-a0685f72"]]),iA="/assets/download-jx-J_nEh.png",sA="/assets/Sreesh_Poudyal_Resume-Bgzejsur.pdf",rA={class:"resume-grid"},oA={key:0,class:"resume-item"},aA=["src"],lA={class:"resume-container",style:{width:"150px",border:"3px solid black","border-radius":"15px","margin-bottom":"0rem","justify-self":"center"}},cA=["href"],uA={__name:"Resume",setup(n){const e=en(sA),t=en(!1);return lc(()=>{t.value=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}),(i,s)=>(at(),ht("div",rA,[t.value?ko("",!0):(at(),ht("div",oA,[qe("iframe",{src:e.value,type:"application/pdf",frameborder:"0",allowfullscreen:""},null,8,aA)])),qe("div",lA,[qe("a",{href:e.value,target:"_blank",rel:"noopener",download:"",style:{"text-decoration":"none",color:"black",display:"flex","flex-direction":"row","align-items":"center",padding:"0.5rem","justify-content":"center"}},s[0]||(s[0]=[qe("img",{src:iA,alt:"Resume",style:{width:"30px",height:"30px","border-radius":"50%",border:"2px solid black","object-fit":"cover","margin-right":"0.5rem"}},null,-1),qe("h2",{style:{margin:"0","font-size":"1.2rem"}},"Download",-1)]),8,cA)])]))}},fA=Kt(uA,[["__scopeId","data-v-5bf74ec2"]]),hA=t_({history:Dg("/"),routes:[{path:"/",name:"home",component:My},{path:"/about",name:"about",component:()=>nl(()=>import("./AboutView-3DCj7oSh.js"),__vite__mapDeps([2,3]))},{path:"/contact",name:"contact",component:()=>nl(()=>import("./ContactView-0Gdvt5rP.js"),__vite__mapDeps([4,5]))},{path:"/fonts",name:"Fonts",component:Ry},{path:"/bazar",name:"Bazar",component:Fy},{path:"/logos",name:"Logos",component:zy},{path:"/map",name:"Map",component:Wy},{path:"/misc",name:"Misc",component:qy},{path:"/spicetrail",name:"SpiceTrail",component:nA},{path:"/resume",name:"Resume",component:fA}]}),wd=Qm(m_);wd.use(hA);wd.mount("#app");export{Yt as F,ty as I,ZE as J,jE as N,QE as P,ey as R,$E as V,sy as W,Kt as _,gm as a,qe as b,ht as c,iA as d,JE as e,iy as f,ny as g,lc as h,at as o,lr as r,_s as t};
