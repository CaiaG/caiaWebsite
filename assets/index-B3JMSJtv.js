(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ld={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function ry(){if(z0)return Oo;z0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var H0;function sy(){return H0||(H0=1,ld.exports=ry()),ld.exports}var q=sy(),cd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function oy(){if(G0)return ct;G0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function S(D,J,fe){this.props=D,this.context=J,this.refs=C,this.updater=fe||M}S.prototype.isReactComponent={},S.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function x(){}x.prototype=S.prototype;function O(D,J,fe){this.props=D,this.context=J,this.refs=C,this.updater=fe||M}var I=O.prototype=new x;I.constructor=O,b(I,S.prototype),I.isPureReactComponent=!0;var w=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function z(D,J,fe,be,Fe,Ge){return fe=Ge.ref,{$$typeof:s,type:D,key:J,ref:fe!==void 0?fe:null,props:Ge}}function T(D,J){return z(D.type,J,void 0,void 0,void 0,D.props)}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function K(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(fe){return J[fe]})}var G=/\/+/g;function Z(D,J){return typeof D=="object"&&D!==null&&D.key!=null?K(""+D.key):J.toString(36)}function pe(){}function xe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(pe,pe):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function X(D,J,fe,be,Fe){var Ge=typeof D;(Ge==="undefined"||Ge==="boolean")&&(D=null);var ie=!1;if(D===null)ie=!0;else switch(Ge){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(D.$$typeof){case s:case e:ie=!0;break;case g:return ie=D._init,X(ie(D._payload),J,fe,be,Fe)}}if(ie)return Fe=Fe(D),ie=be===""?"."+Z(D,0):be,w(Fe)?(fe="",ie!=null&&(fe=ie.replace(G,"$&/")+"/"),X(Fe,J,fe,"",function(je){return je})):Fe!=null&&(P(Fe)&&(Fe=T(Fe,fe+(Fe.key==null||D&&D.key===Fe.key?"":(""+Fe.key).replace(G,"$&/")+"/")+ie)),J.push(Fe)),1;ie=0;var Te=be===""?".":be+":";if(w(D))for(var ye=0;ye<D.length;ye++)be=D[ye],Ge=Te+Z(be,ye),ie+=X(be,J,fe,Ge,Fe);else if(ye=_(D),typeof ye=="function")for(D=ye.call(D),ye=0;!(be=D.next()).done;)be=be.value,Ge=Te+Z(be,ye++),ie+=X(be,J,fe,Ge,Fe);else if(Ge==="object"){if(typeof D.then=="function")return X(xe(D),J,fe,be,Fe);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ie}function F(D,J,fe){if(D==null)return D;var be=[],Fe=0;return X(D,be,"","",function(Ge){return J.call(fe,Ge,Fe++)}),be}function H(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(fe){(D._status===0||D._status===-1)&&(D._status=1,D._result=fe)},function(fe){(D._status===0||D._status===-1)&&(D._status=2,D._result=fe)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var te=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function me(){}return ct.Children={map:F,forEach:function(D,J,fe){F(D,function(){J.apply(this,arguments)},fe)},count:function(D){var J=0;return F(D,function(){J++}),J},toArray:function(D){return F(D,function(J){return J})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ct.Component=S,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=O,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ct.__COMPILER_RUNTIME={__proto__:null,c:function(D){return L.H.useMemoCache(D)}},ct.cache=function(D){return function(){return D.apply(null,arguments)}},ct.cloneElement=function(D,J,fe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var be=b({},D.props),Fe=D.key,Ge=void 0;if(J!=null)for(ie in J.ref!==void 0&&(Ge=void 0),J.key!==void 0&&(Fe=""+J.key),J)!N.call(J,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&J.ref===void 0||(be[ie]=J[ie]);var ie=arguments.length-2;if(ie===1)be.children=fe;else if(1<ie){for(var Te=Array(ie),ye=0;ye<ie;ye++)Te[ye]=arguments[ye+2];be.children=Te}return z(D.type,Fe,void 0,void 0,Ge,be)},ct.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ct.createElement=function(D,J,fe){var be,Fe={},Ge=null;if(J!=null)for(be in J.key!==void 0&&(Ge=""+J.key),J)N.call(J,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Fe[be]=J[be]);var ie=arguments.length-2;if(ie===1)Fe.children=fe;else if(1<ie){for(var Te=Array(ie),ye=0;ye<ie;ye++)Te[ye]=arguments[ye+2];Fe.children=Te}if(D&&D.defaultProps)for(be in ie=D.defaultProps,ie)Fe[be]===void 0&&(Fe[be]=ie[be]);return z(D,Ge,void 0,void 0,null,Fe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(D){return{$$typeof:p,render:D}},ct.isValidElement=P,ct.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:H}},ct.memo=function(D,J){return{$$typeof:h,type:D,compare:J===void 0?null:J}},ct.startTransition=function(D){var J=L.T,fe={};L.T=fe;try{var be=D(),Fe=L.S;Fe!==null&&Fe(fe,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(me,te)}catch(Ge){te(Ge)}finally{L.T=J}},ct.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ct.use=function(D){return L.H.use(D)},ct.useActionState=function(D,J,fe){return L.H.useActionState(D,J,fe)},ct.useCallback=function(D,J){return L.H.useCallback(D,J)},ct.useContext=function(D){return L.H.useContext(D)},ct.useDebugValue=function(){},ct.useDeferredValue=function(D,J){return L.H.useDeferredValue(D,J)},ct.useEffect=function(D,J,fe){var be=L.H;if(typeof fe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(D,J)},ct.useId=function(){return L.H.useId()},ct.useImperativeHandle=function(D,J,fe){return L.H.useImperativeHandle(D,J,fe)},ct.useInsertionEffect=function(D,J){return L.H.useInsertionEffect(D,J)},ct.useLayoutEffect=function(D,J){return L.H.useLayoutEffect(D,J)},ct.useMemo=function(D,J){return L.H.useMemo(D,J)},ct.useOptimistic=function(D,J){return L.H.useOptimistic(D,J)},ct.useReducer=function(D,J,fe){return L.H.useReducer(D,J,fe)},ct.useRef=function(D){return L.H.useRef(D)},ct.useState=function(D){return L.H.useState(D)},ct.useSyncExternalStore=function(D,J,fe){return L.H.useSyncExternalStore(D,J,fe)},ct.useTransition=function(){return L.H.useTransition()},ct.version="19.1.0",ct}var V0;function kh(){return V0||(V0=1,cd.exports=oy()),cd.exports}var he=kh(),ud={exports:{}},Io={},fd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function ly(){return k0||(k0=1,function(s){function e(F,H){var te=F.length;F.push(H);e:for(;0<te;){var me=te-1>>>1,D=F[me];if(0<l(D,H))F[me]=H,F[te]=D,te=me;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],te=F.pop();if(te!==H){F[0]=te;e:for(var me=0,D=F.length,J=D>>>1;me<J;){var fe=2*(me+1)-1,be=F[fe],Fe=fe+1,Ge=F[Fe];if(0>l(be,te))Fe<D&&0>l(Ge,be)?(F[me]=Ge,F[Fe]=te,me=Fe):(F[me]=be,F[fe]=te,me=fe);else if(Fe<D&&0>l(Ge,te))F[me]=Ge,F[Fe]=te,me=Fe;else break e}}return H}function l(F,H){var te=F.sortIndex-H.sortIndex;return te!==0?te:F.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,v=null,_=3,M=!1,b=!1,C=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function L(F){if(C=!1,w(F),!b)if(i(m)!==null)b=!0,N||(N=!0,Z());else{var H=i(h);H!==null&&X(L,H.startTime-F)}}var N=!1,z=-1,T=5,P=-1;function K(){return S?!0:!(s.unstable_now()-P<T)}function G(){if(S=!1,N){var F=s.unstable_now();P=F;var H=!0;try{e:{b=!1,C&&(C=!1,O(z),z=-1),M=!0;var te=_;try{t:{for(w(F),v=i(m);v!==null&&!(v.expirationTime>F&&K());){var me=v.callback;if(typeof me=="function"){v.callback=null,_=v.priorityLevel;var D=me(v.expirationTime<=F);if(F=s.unstable_now(),typeof D=="function"){v.callback=D,w(F),H=!0;break t}v===i(m)&&r(m),w(F)}else r(m);v=i(m)}if(v!==null)H=!0;else{var J=i(h);J!==null&&X(L,J.startTime-F),H=!1}}break e}finally{v=null,_=te,M=!1}H=void 0}}finally{H?Z():N=!1}}}var Z;if(typeof I=="function")Z=function(){I(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,xe=pe.port2;pe.port1.onmessage=G,Z=function(){xe.postMessage(null)}}else Z=function(){x(G,0)};function X(F,H){z=x(function(){F(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var te=_;_=H;try{return F()}finally{_=te}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=_;_=F;try{return H()}finally{_=te}},s.unstable_scheduleCallback=function(F,H,te){var me=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?me+te:me):te=me,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=te+D,F={id:g++,callback:H,priorityLevel:F,startTime:te,expirationTime:D,sortIndex:-1},te>me?(F.sortIndex=te,e(h,F),i(m)===null&&F===i(h)&&(C?(O(z),z=-1):C=!0,X(L,te-me))):(F.sortIndex=D,e(m,F),b||M||(b=!0,N||(N=!0,Z()))),F},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(F){var H=_;return function(){var te=_;_=H;try{return F.apply(this,arguments)}finally{_=te}}}}(dd)),dd}var X0;function cy(){return X0||(X0=1,fd.exports=ly()),fd.exports}var hd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function uy(){if(W0)return Dn;W0=1;var s=kh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Dn.flushSync=function(m){var h=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=g,r.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var q0;function fy(){if(q0)return hd.exports;q0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hd.exports=uy(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function dy(){if(Y0)return Io;Y0=1;var s=cy(),e=kh(),i=fy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case I:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var X=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},me=[],D=-1;function J(t){return{current:t}}function fe(t){0>D||(t.current=me[D],me[D]=null,D--)}function be(t,n){D++,me[D]=t.current,t.current=n}var Fe=J(null),Ge=J(null),ie=J(null),Te=J(null);function ye(t,n){switch(be(ie,n),be(Ge,t),be(Fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?h0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=h0(n),t=p0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}fe(Fe),be(Fe,t)}function je(){fe(Fe),fe(Ge),fe(ie)}function it(t){t.memoizedState!==null&&be(Te,t);var n=Fe.current,a=p0(n,t.type);n!==a&&(be(Ge,t),be(Fe,a))}function Qe(t){Ge.current===t&&(fe(Fe),fe(Ge)),Te.current===t&&(fe(Te),Do._currentValue=te)}var Wt=Object.prototype.hasOwnProperty,ut=s.unstable_scheduleCallback,At=s.unstable_cancelCallback,Mt=s.unstable_shouldYield,vt=s.unstable_requestPaint,Rt=s.unstable_now,nn=s.unstable_getCurrentPriorityLevel,an=s.unstable_ImmediatePriority,ln=s.unstable_UserBlockingPriority,Gt=s.unstable_NormalPriority,Jt=s.unstable_LowPriority,Y=s.unstable_IdlePriority,Cn=s.log,Ct=s.unstable_setDisableYieldValue,U=null,E=null;function j(t){if(typeof Cn=="function"&&Ct(t),E&&typeof E.setStrictMode=="function")try{E.setStrictMode(U,t)}catch{}}var $=Math.clz32?Math.clz32:De,de=Math.log,Ae=Math.LN2;function De(t){return t>>>=0,t===0?32:31-(de(t)/Ae|0)|0}var ue=256,ge=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Re(o):(y&=R,y!==0?u=Re(y):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~d,R!==0?u=Re(R):y!==0?u=Re(y):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var t=ue;return ue<<=1,(ue&4194048)===0&&(ue=256),t}function Je(){var t=ge;return ge<<=1,(ge&62914560)===0&&(ge=4194304),t}function at(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function k(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,ae=t.hiddenUpdates;for(a=y&~a;0<a;){var _e=31-$(a),Me=1<<_e;R[_e]=0,B[_e]=-1;var se=ae[_e];if(se!==null)for(ae[_e]=null,_e=0;_e<se.length;_e++){var ce=se[_e];ce!==null&&(ce.lane&=-536870913)}a&=~Me}o!==0&&ve(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function ve(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-$(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ue(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-$(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Pe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ee(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qe(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:N0(t.type))}function ke(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var wt=Math.random().toString(36).slice(2),ot="__reactFiber$"+wt,qt="__reactProps$"+wt,Mn="__reactContainer$"+wt,Hs="__reactEvents$"+wt,su="__reactListeners$"+wt,il="__reactHandles$"+wt,Pr="__reactResources$"+wt,ir="__reactMarker$"+wt;function Or(t){delete t[ot],delete t[qt],delete t[Hs],delete t[su],delete t[il]}function Wi(t){var n=t[ot];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mn]||a[ot]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=v0(t);t!==null;){if(a=t[ot])return a;t=v0(t)}return n}t=a,a=t.parentNode}return null}function zn(t){if(t=t[ot]||t[Mn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function qi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Yi(t){var n=t[Pr];return n||(n=t[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(t){t[ir]=!0}var ar=new Set,Gs={};function ii(t,n){Zi(t,n),Zi(t+"Capture",n)}function Zi(t,n){for(Gs[t]=n,t=0;t<n.length;t++)ar.add(n[t])}var al=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rl={},sl={};function ou(t){return Wt.call(sl,t)?!0:Wt.call(rl,t)?!1:al.test(t)?sl[t]=!0:(rl[t]=!0,!1)}function Ir(t,n,a){if(ou(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function A(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function W(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var le,re;function ne(t){if(le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);le=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+le+t+re}var Ne=!1;function Be(t,n){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ce){var se=ce}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ce){se=ce}t.call(Me.prototype)}}else{try{throw Error()}catch(ce){se=ce}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var B=y.split(`
`),ae=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ae.length)for(o=B.length-1,u=ae.length-1;1<=o&&0<=u&&B[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ae[u]){var _e=`
`+B[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ne(a):""}function Oe(t){switch(t.tag){case 26:case 27:case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return Be(t.type,!1);case 11:return Be(t.type.render,!1);case 1:return Be(t.type,!0);case 31:return ne("Activity");default:return""}}function Xe(t){try{var n="";do n+=Oe(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lt(t){var n=rt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=lt(t))}function Dt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yt=/[\n"\\]/g;function ft(t){return t.replace(Yt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cn(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?En(t,y,ze(n)):a!=null?En(t,y,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ze(R):t.removeAttribute("name")}function He(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function En(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dt(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function qn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(X(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ta=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ta.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Zt(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Lt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Lt(t,d,n[d])}function ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ft=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ci=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(t){return Ci.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Fr=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,zr=null;function mp(t){var n=zn(t);if(n&&(t=n.stateNode)){var a=t[qt]||null;e:switch(t=n.stateNode,n.type){case"input":if(cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[qt]||null;if(!u)throw Error(r(90));cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Dt(o)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&dt(t,!!a.multiple,n,!1)}}}var cu=!1;function gp(t,n,a){if(cu)return t(n,a);cu=!0;try{var o=t(n);return o}finally{if(cu=!1,(Br!==null||zr!==null)&&(Wl(),Br&&(n=Br,t=zr,zr=Br=null,mp(n),t)))for(n=0;n<t.length;n++)mp(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[qt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Ki)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){uu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{uu=!1}var Aa=null,fu=null,ol=null;function _p(){if(ol)return ol;var t,n=fu,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function vp(){return!1}function Hn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?cl:vp,this.isPropagationStopped=vp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Hn(rr),Xs=g({},rr,{view:0,detail:0}),rx=Hn(Xs),du,hu,Ws,fl=g({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(du=t.screenX-Ws.screenX,hu=t.screenY-Ws.screenY):hu=du=0,Ws=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),xp=Hn(fl),sx=g({},fl,{dataTransfer:0}),ox=Hn(sx),lx=g({},Xs,{relatedTarget:0}),pu=Hn(lx),cx=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=Hn(cx),fx=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Hn(fx),hx=g({},rr,{data:0}),Sp=Hn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gx[t])?!!n[t]:!1}function mu(){return _x}var vx=g({},Xs,{key:function(t){if(t.key){var n=px[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xx=Hn(vx),Sx=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Hn(Sx),yx=g({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),Mx=Hn(yx),Ex=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=Hn(Ex),Tx=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Hn(Tx),Rx=g({},rr,{newState:0,oldState:0}),Cx=Hn(Rx),wx=[9,13,27,32],gu=Ki&&"CompositionEvent"in window,qs=null;Ki&&"documentMode"in document&&(qs=document.documentMode);var Dx=Ki&&"TextEvent"in window&&!qs,Mp=Ki&&(!gu||qs&&8<qs&&11>=qs),Ep=" ",bp=!1;function Tp(t,n){switch(t){case"keyup":return wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Ux(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(bp=!0,Ep);case"textInput":return t=n.data,t===Ep&&bp?null:t;default:return null}}function Lx(t,n){if(Hr)return t==="compositionend"||!gu&&Tp(t,n)?(t=_p(),ol=fu=Aa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mp&&n.locale!=="ko"?null:n.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Nx[t.type]:n==="textarea"}function Cp(t,n,a,o){Br?zr?zr.push(o):zr=[o]:Br=o,n=Ql(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ys=null,Zs=null;function Px(t){l0(t,0)}function dl(t){var n=qi(t);if(Dt(n))return t}function wp(t,n){if(t==="change")return n}var Dp=!1;if(Ki){var _u;if(Ki){var vu="oninput"in document;if(!vu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),vu=typeof Up.oninput=="function"}_u=vu}else _u=!1;Dp=_u&&(!document.documentMode||9<document.documentMode)}function Lp(){Ys&&(Ys.detachEvent("onpropertychange",Np),Zs=Ys=null)}function Np(t){if(t.propertyName==="value"&&dl(Zs)){var n=[];Cp(n,Zs,t,lu(t)),gp(Px,n)}}function Ox(t,n,a){t==="focusin"?(Lp(),Ys=n,Zs=a,Ys.attachEvent("onpropertychange",Np)):t==="focusout"&&Lp()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Zs)}function Fx(t,n){if(t==="click")return dl(n)}function Bx(t,n){if(t==="input"||t==="change")return dl(n)}function zx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:zx;function Ks(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Wt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,n){var a=Pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Ip(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ip(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Hx=Ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,Su=null,js=null,yu=!1;function Bp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Gr==null||Gr!==kt(o)||(o=Gr,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ks(js,o)||(js=o,o=Ql(Su,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Mu={},zp={};Ki&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(Mu[t])return Mu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Mu[t]=n[a];return t}var Hp=or("animationend"),Gp=or("animationiteration"),Vp=or("animationstart"),Gx=or("transitionrun"),Vx=or("transitionstart"),kx=or("transitioncancel"),kp=or("transitionend"),Xp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function _i(t,n){Xp.set(t,n),ii(n,[t])}var Wp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Wp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Wp.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var si=[],kr=0,bu=0;function hl(){for(var t=kr,n=bu=kr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&qp(a,u,d)}}function pl(t,n,a,o){si[kr++]=t,si[kr++]=n,si[kr++]=a,si[kr++]=o,bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tu(t,n,a,o){return pl(t,n,a,o),ml(t)}function Xr(t,n){return pl(t,null,null,n),ml(t)}function qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-$(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function ml(t){if(50<Mo)throw Mo=0,Lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function Xx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new Xx(t,n,a,o)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Au(t)&&(y=1);else if(typeof t=="string")y=qS(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=Zn(31,a,n,u),t.elementType=P,t.lanes=d,t;case b:return lr(a.children,u,d,n);case C:y=8,u|=24;break;case S:return t=Zn(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case L:return t=Zn(13,a,n,u),t.elementType=L,t.lanes=d,t;case N:return t=Zn(19,a,n,u),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case I:y=10;break e;case O:y=9;break e;case w:y=11;break e;case z:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function lr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Ru(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Cu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qr=[],Yr=0,_l=null,vl=0,oi=[],li=0,cr=null,Qi=1,Ji="";function ur(t,n){qr[Yr++]=vl,qr[Yr++]=_l,_l=t,vl=n}function Zp(t,n,a){oi[li++]=Qi,oi[li++]=Ji,oi[li++]=cr,cr=t;var o=Qi;t=Ji;var u=32-$(o)-1;o&=~(1<<u),a+=1;var d=32-$(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Qi=1<<32-$(n)+u|a<<u|o,Ji=d+t}else Qi=1<<d|a<<u|o,Ji=t}function wu(t){t.return!==null&&(ur(t,1),Zp(t,1,0))}function Du(t){for(;t===_l;)_l=qr[--Yr],qr[Yr]=null,vl=qr[--Yr],qr[Yr]=null;for(;t===cr;)cr=oi[--li],oi[li]=null,Ji=oi[--li],oi[li]=null,Qi=oi[--li],oi[li]=null}var In=null,$t=null,Ut=!1,fr=null,wi=!1,Uu=Error(r(519));function dr(t){var n=Error(r(418,""));throw $s(ri(n,t)),Uu}function Kp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ot]=t,n[qt]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)_t(bo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ye(n);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),qn(n,o.value,o.defaultValue,o.children),Ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||d0(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||dr(t)}function jp(t){for(In=t.return;In;)switch(In.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function Qs(t){if(t!==In)return!1;if(!Ut)return jp(t),Ut=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zf(t.type,t.memoizedProps)),a=!a),a&&$t&&dr(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Va(t.type)?(t=Jf,Jf=null,$t=t):$t=n):$t=In?xi(t.stateNode.nextSibling):null;return!0}function Js(){$t=In=null,Ut=!1}function Qp(){var t=fr;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),fr=null),t}function $s(t){fr===null?fr=[t]:fr.push(t)}var Lu=J(null),hr=null,$i=null;function Ra(t,n,a){be(Lu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Lu.current,fe(Lu)}function Nu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Pu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Nu(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Nu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function eo(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;Yn(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===Te.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Pu(n,t,a,o),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Jp(hr,t)}function Sl(t,n){return hr===null&&pr(t),Jp(t,n)}function Jp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(r(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var Wx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},qx=s.unstable_scheduleCallback,Yx=s.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Wx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&qx(Yx,function(){t.controller.abort()})}var no=null,Iu=0,Zr=0,Kr=null;function Zx(t,n){if(no===null){var a=no=[];Iu=0,Zr=zf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then($p,$p),n}function $p(){if(--Iu===0&&no!==null){Kr!==null&&(Kr.status="fulfilled");var t=no;no=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Kx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=F.S;F.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zx(t,n),em!==null&&em(t,n)};var mr=J(null);function Fu(){var t=mr.current;return t!==null?t:Xt.pooledCache}function yl(t,n){n===null?be(mr,mr.current):be(mr,n.pool)}function tm(){var t=Fu();return t===null?null:{parent:pn._currentValue,pool:t}}var io=Error(r(460)),nm=Error(r(474)),Ml=Error(r(542)),Bu={then:function(){}};function im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function El(){}function am(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t;default:if(typeof n.status=="string")n.then(El,El);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t}throw ao=n,io}}var ao=null;function rm(){if(ao===null)throw Error(r(459));var t=ao;return ao=null,t}function sm(t){if(t===io||t===Ml)throw Error(r(483))}var Ca=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(t),qp(t,null,a),n}return pl(t,o,n,a),ml(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ue(t,a)}}function Gu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vu=!1;function so(){if(Vu){var t=Kr;if(t!==null)throw t}}function oo(t,n,a,o){Vu=!1;var u=t.updateQueue;Ca=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,ae=B.next;B.next=null,y===null?d=ae:y.next=ae,y=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==y&&(R===null?_e.firstBaseUpdate=ae:R.next=ae,_e.lastBaseUpdate=B))}if(d!==null){var Me=u.baseState;y=0,_e=ae=B=null,R=d;do{var se=R.lane&-536870913,ce=se!==R.lane;if(ce?(yt&se)===se:(o&se)===se){se!==0&&se===Zr&&(Vu=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var tt=t,$e=R;se=n;var Ht=a;switch($e.tag){case 1:if(tt=$e.payload,typeof tt=="function"){Me=tt.call(Ht,Me,se);break e}Me=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=$e.payload,se=typeof tt=="function"?tt.call(Ht,Me,se):tt,se==null)break e;Me=g({},Me,se);break e;case 2:Ca=!0}}se=R.callback,se!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ae=_e=ce,B=Me):_e=_e.next=ce,y|=se;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);_e===null&&(B=Me),u.baseState=B,u.firstBaseUpdate=ae,u.lastBaseUpdate=_e,d===null&&(u.shared.lanes=0),Ba|=y,t.lanes=y,t.memoizedState=Me}}function om(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}var jr=J(null),bl=J(0);function cm(t,n){t=oa,be(bl,t),be(jr,n),oa=t|n.baseLanes}function ku(){be(bl,oa),be(jr,jr.current)}function Xu(){oa=bl.current,fe(jr),fe(bl)}var Ua=0,pt=null,Bt=null,un=null,Tl=!1,Qr=!1,gr=!1,Al=0,lo=0,Jr=null,jx=0;function sn(){throw Error(r(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function qu(t,n,a,o,u,d){return Ua=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?qm:Ym,gr=!1,d=a(o,u),gr=!1,Qr&&(d=fm(n,a,o,u)),um(t),d}function um(t){F.H=Ll;var n=Bt!==null&&Bt.next!==null;if(Ua=0,un=Bt=pt=null,Tl=!1,lo=0,Jr=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&xl(t)&&(vn=!0))}function fm(t,n,a,o){pt=t;var u=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,un=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=iS,d=n(a,o)}while(Qr);return d}function Qx(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(pt.flags|=1024),n}function Yu(){var t=Al!==0;return Al=0,t}function Zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ku(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}Ua=0,un=Bt=pt=null,Qr=!1,lo=Al=0,Jr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pt.memoizedState=un=t:un=un.next=t,un}function fn(){if(Bt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=un===null?pt.memoizedState:un.next;if(n!==null)un=n,Bt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},un===null?pt.memoizedState=un=t:un=un.next=t}return un}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Jr===null&&(Jr=[]),t=am(Jr,t,n),n=pt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?qm:Ym),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===I)return wn(t)}throw Error(r(438,String(t)))}function Qu(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ju(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=K;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=fn();return Ju(n,Bt,t)}function Ju(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,B=null,ae=n,_e=!1;do{var Me=ae.lane&-536870913;if(Me!==ae.lane?(yt&Me)===Me:(Ua&Me)===Me){var se=ae.revertLane;if(se===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Me===Zr&&(_e=!0);else if((Ua&se)===se){ae=ae.next,se===Zr&&(_e=!0);continue}else Me={lane:0,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},B===null?(R=B=Me,y=d):B=B.next=Me,pt.lanes|=se,Ba|=se;Me=ae.action,gr&&a(d,Me),d=ae.hasEagerState?ae.eagerState:a(d,Me)}else se={lane:Me,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},B===null?(R=B=se,y=d):B=B.next=se,pt.lanes|=Me,Ba|=Me;ae=ae.next}while(ae!==null&&ae!==n);if(B===null?y=d:B.next=R,!Yn(d,t.memoizedState)&&(vn=!0,_e&&(a=Kr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function $u(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Yn(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function dm(t,n,a){var o=pt,u=fn(),d=Ut;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Yn((Bt||u).memoizedState,a);y&&(u.memoizedState=a,vn=!0),u=u.queue;var R=mm.bind(null,o,u,t);if(uo(2048,8,R,[t]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,$r(9,wl(),pm.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));d||(Ua&124)!==0||hm(o,n,a)}return a}function hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=ju(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function pm(t,n,a,o){n.value=a,n.getSnapshot=o,gm(n)&&_m(t)}function mm(t,n,a){return a(function(){gm(n)&&_m(t)})}function gm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function _m(t){var n=Xr(t,2);n!==null&&$n(n,t,2)}function ef(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),gr){j(!0);try{a()}finally{j(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function vm(t,n,a,o){return t.baseState=a,Ju(t,Bt,typeof o=="function"?o:ta)}function Jx(t,n,a,o,u){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,xm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function xm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,y={};F.T=y;try{var R=a(u,o),B=F.S;B!==null&&B(y,R),Sm(t,n,R)}catch(ae){tf(t,n,ae)}finally{F.T=d}}else try{d=a(u,o),Sm(t,n,d)}catch(ae){tf(t,n,ae)}}function Sm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ym(t,n,o)},function(o){return tf(t,n,o)}):ym(t,n,a)}function ym(t,n,a){n.status="fulfilled",n.value=a,Mm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,xm(t,a)))}function tf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Mm(n),n=n.next;while(n!==o)}t.action=null}function Mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Em(t,n){return n}function bm(t,n){if(Ut){var a=Xt.formState;if(a!==null){e:{var o=pt;if(Ut){if($t){t:{for(var u=$t,d=wi;u.nodeType!==8;){if(!d){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=xi(u.nextSibling),o=u.data==="F!";break e}}dr(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},a.queue=o,a=km.bind(null,pt,o),o.dispatch=a,o=ef(!1),d=of.bind(null,pt,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Jx.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Tm(t){var n=fn();return Am(n,Bt,t)}function Am(t,n,a){if(n=Ju(t,n,Em)[0],t=Cl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(y){throw y===io?Ml:y}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,$r(9,wl(),$x.bind(null,u,a),null)),[o,d,t]}function $x(t,n){t.action=n}function Rm(t){var n=fn(),a=Bt;if(a!==null)return Am(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function $r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=ju(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function wl(){return{destroy:void 0,resource:void 0}}function Cm(){return fn().memoizedState}function Dl(t,n,a,o){var u=Gn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=$r(1|n,wl(),a,o)}function uo(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&Wu(o,Bt.memoizedState.deps)?u.memoizedState=$r(n,d,a,o):(pt.flags|=t,u.memoizedState=$r(1|n,d,a,o))}function wm(t,n){Dl(8390656,8,t,n)}function Dm(t,n){uo(2048,8,t,n)}function Um(t,n){return uo(4,2,t,n)}function Lm(t,n){return uo(4,4,t,n)}function Nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pm(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,Nm.bind(null,n,t),a)}function nf(){}function Om(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Im(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=t(),gr){j(!0);try{t()}finally{j(!1)}}return a.memoizedState=[o,n],o}function af(t,n,a){return a===void 0||(Ua&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=zg(),pt.lanes|=t,Ba|=t,a)}function Fm(t,n,a,o){return Yn(a,n)?a:jr.current!==null?(t=af(t,a,o),Yn(t,n)||(vn=!0),t):(Ua&42)===0?(vn=!0,t.memoizedState=a):(t=zg(),pt.lanes|=t,Ba|=t,n)}function Bm(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var y=F.T,R={};F.T=R,of(t,!1,n,a);try{var B=u(),ae=F.S;if(ae!==null&&ae(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var _e=Kx(B,o);fo(t,n,_e,Jn(t))}else fo(t,n,o,Jn(t))}catch(Me){fo(t,n,{then:function(){},status:"rejected",reason:Me},Jn())}finally{H.p=d,F.T=y}}function eS(){}function rf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=zm(t).queue;Bm(t,u,n,te,a===null?eS:function(){return Hm(t),a(o)})}function zm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hm(t){var n=zm(t).next.queue;fo(t,n,{},Jn())}function sf(){return wn(Do)}function Gm(){return fn().memoizedState}function Vm(){return fn().memoizedState}function tS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=wa(a);var o=Da(n,t,a);o!==null&&($n(o,n,a),ro(o,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function nS(t,n,a){var o=Jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Xm(n,a):(a=Tu(t,n,a,o),a!==null&&($n(a,t,o),Wm(a,n,o)))}function km(t,n,a){var o=Jn();fo(t,n,a,o)}function fo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Xm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,y))return pl(t,n,u,0),Xt===null&&hl(),!1}catch{}finally{}if(a=Tu(t,n,u,o),a!==null)return $n(a,t,o),Wm(a,n,o),!0}return!1}function of(t,n,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=Tu(t,a,o,2),n!==null&&$n(n,t,2)}function Ul(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Xm(t,n){Qr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ue(t,a)}}var Ll={readContext:wn,use:Rl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},qm={readContext:wn,use:Rl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:wm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(gr){j(!0);try{t()}finally{j(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(gr){j(!0);try{a(n)}finally{j(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=nS.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=km.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=Gn();return af(a,t,n)},useTransition:function(){var t=ef(!1);return t=Bm.bind(null,pt,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Gn();if(Ut){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(yt&124)!==0||hm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,wm(mm.bind(null,o,d,t),[t]),o.flags|=2048,$r(9,wl(),pm.bind(null,o,d,a,n),null),a},useId:function(){var t=Gn(),n=Xt.identifierPrefix;if(Ut){var a=Ji,o=Qi;a=(o&~(1<<32-$(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=jx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:bm,useActionState:bm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qu,useCacheRefresh:function(){return Gn().memoizedState=tS.bind(null,pt)}},Ym={readContext:wn,use:Rl,useCallback:Om,useContext:wn,useEffect:Dm,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:Im,useReducer:Cl,useRef:Cm,useState:function(){return Cl(ta)},useDebugValue:nf,useDeferredValue:function(t,n){var a=fn();return Fm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Cl(ta)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:dm,useId:Gm,useHostTransitionStatus:sf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=fn();return vm(a,Bt,t,n)},useMemoCache:Qu,useCacheRefresh:Vm},iS={readContext:wn,use:Rl,useCallback:Om,useContext:wn,useEffect:Dm,useImperativeHandle:Pm,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:Im,useReducer:$u,useRef:Cm,useState:function(){return $u(ta)},useDebugValue:nf,useDeferredValue:function(t,n){var a=fn();return Bt===null?af(a,t,n):Fm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=$u(ta)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:dm,useId:Gm,useHostTransitionStatus:sf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=fn();return Bt!==null?vm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Vm},es=null,ho=0;function Nl(t){var n=ho;return ho+=1,es===null&&(es=[]),am(es,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zm(t){var n=t._init;return n(t._payload)}function Km(t){function n(Q,V){if(t){var ee=Q.deletions;ee===null?(Q.deletions=[V],Q.flags|=16):ee.push(V)}}function a(Q,V){if(!t)return null;for(;V!==null;)n(Q,V),V=V.sibling;return null}function o(Q){for(var V=new Map;Q!==null;)Q.key!==null?V.set(Q.key,Q):V.set(Q.index,Q),Q=Q.sibling;return V}function u(Q,V){return Q=ji(Q,V),Q.index=0,Q.sibling=null,Q}function d(Q,V,ee){return Q.index=ee,t?(ee=Q.alternate,ee!==null?(ee=ee.index,ee<V?(Q.flags|=67108866,V):ee):(Q.flags|=67108866,V)):(Q.flags|=1048576,V)}function y(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,V,ee,Se){return V===null||V.tag!==6?(V=Ru(ee,Q.mode,Se),V.return=Q,V):(V=u(V,ee),V.return=Q,V)}function B(Q,V,ee,Se){var Ve=ee.type;return Ve===b?_e(Q,V,ee.props.children,Se,ee.key):V!==null&&(V.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===T&&Zm(Ve)===V.type)?(V=u(V,ee.props),po(V,ee),V.return=Q,V):(V=gl(ee.type,ee.key,ee.props,null,Q.mode,Se),po(V,ee),V.return=Q,V)}function ae(Q,V,ee,Se){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Cu(ee,Q.mode,Se),V.return=Q,V):(V=u(V,ee.children||[]),V.return=Q,V)}function _e(Q,V,ee,Se,Ve){return V===null||V.tag!==7?(V=lr(ee,Q.mode,Se,Ve),V.return=Q,V):(V=u(V,ee),V.return=Q,V)}function Me(Q,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ru(""+V,Q.mode,ee),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return ee=gl(V.type,V.key,V.props,null,Q.mode,ee),po(ee,V),ee.return=Q,ee;case M:return V=Cu(V,Q.mode,ee),V.return=Q,V;case T:var Se=V._init;return V=Se(V._payload),Me(Q,V,ee)}if(X(V)||Z(V))return V=lr(V,Q.mode,ee,null),V.return=Q,V;if(typeof V.then=="function")return Me(Q,Nl(V),ee);if(V.$$typeof===I)return Me(Q,Sl(Q,V),ee);Pl(Q,V)}return null}function se(Q,V,ee,Se){var Ve=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Ve!==null?null:R(Q,V,""+ee,Se);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case _:return ee.key===Ve?B(Q,V,ee,Se):null;case M:return ee.key===Ve?ae(Q,V,ee,Se):null;case T:return Ve=ee._init,ee=Ve(ee._payload),se(Q,V,ee,Se)}if(X(ee)||Z(ee))return Ve!==null?null:_e(Q,V,ee,Se,null);if(typeof ee.then=="function")return se(Q,V,Nl(ee),Se);if(ee.$$typeof===I)return se(Q,V,Sl(Q,ee),Se);Pl(Q,ee)}return null}function ce(Q,V,ee,Se,Ve){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ee)||null,R(V,Q,""+Se,Ve);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case _:return Q=Q.get(Se.key===null?ee:Se.key)||null,B(V,Q,Se,Ve);case M:return Q=Q.get(Se.key===null?ee:Se.key)||null,ae(V,Q,Se,Ve);case T:var mt=Se._init;return Se=mt(Se._payload),ce(Q,V,ee,Se,Ve)}if(X(Se)||Z(Se))return Q=Q.get(ee)||null,_e(V,Q,Se,Ve,null);if(typeof Se.then=="function")return ce(Q,V,ee,Nl(Se),Ve);if(Se.$$typeof===I)return ce(Q,V,ee,Sl(V,Se),Ve);Pl(V,Se)}return null}function tt(Q,V,ee,Se){for(var Ve=null,mt=null,Ke=V,et=V=0,Sn=null;Ke!==null&&et<ee.length;et++){Ke.index>et?(Sn=Ke,Ke=null):Sn=Ke.sibling;var bt=se(Q,Ke,ee[et],Se);if(bt===null){Ke===null&&(Ke=Sn);break}t&&Ke&&bt.alternate===null&&n(Q,Ke),V=d(bt,V,et),mt===null?Ve=bt:mt.sibling=bt,mt=bt,Ke=Sn}if(et===ee.length)return a(Q,Ke),Ut&&ur(Q,et),Ve;if(Ke===null){for(;et<ee.length;et++)Ke=Me(Q,ee[et],Se),Ke!==null&&(V=d(Ke,V,et),mt===null?Ve=Ke:mt.sibling=Ke,mt=Ke);return Ut&&ur(Q,et),Ve}for(Ke=o(Ke);et<ee.length;et++)Sn=ce(Ke,Q,et,ee[et],Se),Sn!==null&&(t&&Sn.alternate!==null&&Ke.delete(Sn.key===null?et:Sn.key),V=d(Sn,V,et),mt===null?Ve=Sn:mt.sibling=Sn,mt=Sn);return t&&Ke.forEach(function(Ya){return n(Q,Ya)}),Ut&&ur(Q,et),Ve}function $e(Q,V,ee,Se){if(ee==null)throw Error(r(151));for(var Ve=null,mt=null,Ke=V,et=V=0,Sn=null,bt=ee.next();Ke!==null&&!bt.done;et++,bt=ee.next()){Ke.index>et?(Sn=Ke,Ke=null):Sn=Ke.sibling;var Ya=se(Q,Ke,bt.value,Se);if(Ya===null){Ke===null&&(Ke=Sn);break}t&&Ke&&Ya.alternate===null&&n(Q,Ke),V=d(Ya,V,et),mt===null?Ve=Ya:mt.sibling=Ya,mt=Ya,Ke=Sn}if(bt.done)return a(Q,Ke),Ut&&ur(Q,et),Ve;if(Ke===null){for(;!bt.done;et++,bt=ee.next())bt=Me(Q,bt.value,Se),bt!==null&&(V=d(bt,V,et),mt===null?Ve=bt:mt.sibling=bt,mt=bt);return Ut&&ur(Q,et),Ve}for(Ke=o(Ke);!bt.done;et++,bt=ee.next())bt=ce(Ke,Q,et,bt.value,Se),bt!==null&&(t&&bt.alternate!==null&&Ke.delete(bt.key===null?et:bt.key),V=d(bt,V,et),mt===null?Ve=bt:mt.sibling=bt,mt=bt);return t&&Ke.forEach(function(ay){return n(Q,ay)}),Ut&&ur(Q,et),Ve}function Ht(Q,V,ee,Se){if(typeof ee=="object"&&ee!==null&&ee.type===b&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case _:e:{for(var Ve=ee.key;V!==null;){if(V.key===Ve){if(Ve=ee.type,Ve===b){if(V.tag===7){a(Q,V.sibling),Se=u(V,ee.props.children),Se.return=Q,Q=Se;break e}}else if(V.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===T&&Zm(Ve)===V.type){a(Q,V.sibling),Se=u(V,ee.props),po(Se,ee),Se.return=Q,Q=Se;break e}a(Q,V);break}else n(Q,V);V=V.sibling}ee.type===b?(Se=lr(ee.props.children,Q.mode,Se,ee.key),Se.return=Q,Q=Se):(Se=gl(ee.type,ee.key,ee.props,null,Q.mode,Se),po(Se,ee),Se.return=Q,Q=Se)}return y(Q);case M:e:{for(Ve=ee.key;V!==null;){if(V.key===Ve)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(Q,V.sibling),Se=u(V,ee.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,V);break}else n(Q,V);V=V.sibling}Se=Cu(ee,Q.mode,Se),Se.return=Q,Q=Se}return y(Q);case T:return Ve=ee._init,ee=Ve(ee._payload),Ht(Q,V,ee,Se)}if(X(ee))return tt(Q,V,ee,Se);if(Z(ee)){if(Ve=Z(ee),typeof Ve!="function")throw Error(r(150));return ee=Ve.call(ee),$e(Q,V,ee,Se)}if(typeof ee.then=="function")return Ht(Q,V,Nl(ee),Se);if(ee.$$typeof===I)return Ht(Q,V,Sl(Q,ee),Se);Pl(Q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(a(Q,V.sibling),Se=u(V,ee),Se.return=Q,Q=Se):(a(Q,V),Se=Ru(ee,Q.mode,Se),Se.return=Q,Q=Se),y(Q)):a(Q,V)}return function(Q,V,ee,Se){try{ho=0;var Ve=Ht(Q,V,ee,Se);return es=null,Ve}catch(Ke){if(Ke===io||Ke===Ml)throw Ke;var mt=Zn(29,Ke,null,Q.mode);return mt.lanes=Se,mt.return=Q,mt}finally{}}}var ts=Km(!0),jm=Km(!1),ci=J(null),Di=null;function La(t){var n=t.alternate;be(mn,mn.current&1),be(ci,t),Di===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(Di=t)}function Qm(t){if(t.tag===22){if(be(mn,mn.current),be(ci,t),Di===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Di=t)}}else Na()}function Na(){be(mn,mn.current),be(ci,ci.current)}function na(t){fe(ci),Di===t&&(Di=null),fe(mn)}var mn=J(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=wa(o);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&($n(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&($n(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=wa(a);o.tag=2,n!=null&&(o.callback=n),n=Da(t,o,a),n!==null&&($n(n,t,a),ro(n,t,a))}};function Jm(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,o)||!Ks(u,d):!0}function $m(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function eg(t){Il(t)}function tg(t){console.error(t)}function ng(t){Il(t)}function Fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ig(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(t,n)},a}function ag(t){return t=wa(t),t.tag=3,t}function rg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){ig(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){ig(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function aS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 13:return Di===null?Pf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(t,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(t,o,u)),!1}throw Error(r(435,a.tag))}return If(t,o,u),Pf(),!1}if(Ut)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(t=Error(r(422),{cause:o}),$s(ri(t,a)))):(o!==Uu&&(n=Error(r(423),{cause:o}),$s(ri(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ri(o,a),u=uf(t.stateNode,o,u),Gu(t,u),en!==4&&(en=2)),!1;var d=Error(r(520),{cause:o});if(d=ri(d,a),yo===null?yo=[d]:yo.push(d),en!==4&&(en=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,o,t),Gu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(za===null||!za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ag(u),rg(u,t,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var sg=Error(r(461)),vn=!1;function bn(t,n,a,o){n.child=t===null?jm(n,null,a,o):ts(n,t.child,a,o)}function og(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return pr(n),o=qu(t,n,a,y,d,u),R=Yu(),t!==null&&!vn?(Zu(t,n,u),ia(t,n,u)):(Ut&&R&&wu(n),n.flags|=1,bn(t,n,o,u),n.child)}function lg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Au(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,cg(t,n,d,o,u)):(t=gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!vf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(y,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=ji(d,o),t.ref=n.ref,t.return=n,n.child=t}function cg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Ks(d,o)&&t.ref===n.ref)if(vn=!1,n.pendingProps=o=d,vf(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return ff(t,n,a,o,u)}function ug(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return fg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,d!==null?d.cachePool:null),d!==null?cm(n,d):ku(),Qm(n);else return n.lanes=n.childLanes=536870912,fg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(yl(n,d.cachePool),cm(n,d),Na(),n.memoizedState=null):(t!==null&&yl(n,null),ku(),Na());return bn(t,n,u,a),n.child}function fg(t,n,a,o){var u=Fu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&yl(n,null),ku(),Qm(n),t!==null&&eo(t,n,o,!0),null}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,u){return pr(n),a=qu(t,n,a,o,void 0,u),o=Yu(),t!==null&&!vn?(Zu(t,n,u),ia(t,n,u)):(Ut&&o&&wu(n),n.flags|=1,bn(t,n,a,u),n.child)}function dg(t,n,a,o,u,d){return pr(n),n.updateQueue=null,a=fm(n,o,a,u),um(t),o=Yu(),t!==null&&!vn?(Zu(t,n,d),ia(t,n,d)):(Ut&&o&&wu(n),n.flags|=1,bn(t,n,a,d),n.child)}function hg(t,n,a,o,u){if(pr(n),n.stateNode===null){var d=Wr,y=a.contextType;typeof y=="object"&&y!==null&&(d=wn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},zu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?wn(y):Wr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(lf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&cf.enqueueReplaceState(d,d.state,null),oo(n,o,d,u),so(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,B=_r(a,R);d.props=B;var ae=d.context,_e=a.contextType;y=Wr,typeof _e=="object"&&_e!==null&&(y=wn(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==y)&&$m(n,d,o,y),Ca=!1;var se=n.memoizedState;d.state=se,oo(n,o,d,u),so(),ae=n.memoizedState,R||se!==ae||Ca?(typeof Me=="function"&&(lf(n,a,Me,o),ae=n.memoizedState),(B=Ca||Jm(n,a,B,o,se,ae,y))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=y,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Hu(t,n),y=n.memoizedProps,_e=_r(a,y),d.props=_e,Me=n.pendingProps,se=d.context,ae=a.contextType,B=Wr,typeof ae=="object"&&ae!==null&&(B=wn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Me||se!==B)&&$m(n,d,o,B),Ca=!1,se=n.memoizedState,d.state=se,oo(n,o,d,u),so();var ce=n.memoizedState;y!==Me||se!==ce||Ca||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof R=="function"&&(lf(n,a,R,o),ce=n.memoizedState),(_e=Ca||Jm(n,a,_e,o,se,ce,B)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=B,o=_e):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ts(n,t.child,null,u),n.child=ts(n,null,a,u)):bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ia(t,n,u),t}function pg(t,n,a,o){return Js(),n.flags|=256,bn(t,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:tm()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function mg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(u?La(n):Na(),Ut){var R=$t,B;if(B=R){e:{for(B=R,R=wi;B.nodeType!==8;){if(!R){R=null;break e}if(B=xi(B.nextSibling),B===null){R=null;break e}}R=B}R!==null?(n.memoizedState={dehydrated:R,treeContext:cr!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},B=Zn(18,null,null,0),B.stateNode=R,B.return=n,n.child=B,In=n,$t=null,B=!0):B=!1}B||dr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Qf(R)?n.lanes=32:n.lanes=536870912,null;na(n)}return R=o.children,o=o.fallback,u?(Na(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=lr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=hf(a),u.childLanes=pf(t,y,a),n.memoizedState=df,o):(La(n),mf(n,R))}if(B=t.memoizedState,B!==null&&(R=B.dehydrated,R!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),u=o.fallback,R=n.mode,o=zl({mode:"visible",children:o.children},R),u=lr(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ts(n,t.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,y,a),n.memoizedState=df,n=u);else if(La(n),Qf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ae=y.dgst;y=ae,o=Error(r(419)),o.stack="",o.digest=y,$s({value:o,source:null,stack:null}),n=gf(t,n,a)}else if(vn||eo(t,n,a,!1),y=(a&t.childLanes)!==0,vn||y){if(y=Xt,y!==null&&(o=a&-a,o=(o&42)!==0?1:Pe(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Xr(t,o),$n(y,t,o),sg;R.data==="$?"||Pf(),n=gf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,$t=xi(R.nextSibling),In=n,Ut=!0,fr=null,wi=!1,t!==null&&(oi[li++]=Qi,oi[li++]=Ji,oi[li++]=cr,Qi=t.id,Ji=t.overflow,cr=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Na(),u=o.fallback,R=n.mode,B=t.child,ae=B.sibling,o=ji(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ae!==null?u=ji(ae,u):(u=lr(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=hf(a):(B=R.cachePool,B!==null?(ae=pn._currentValue,B=B.parent!==ae?{parent:ae,pool:ae}:B):B=tm(),R={baseLanes:R.baseLanes|a,cachePool:B}),u.memoizedState=R,u.childLanes=pf(t,y,a),n.memoizedState=df,o):(La(n),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gf(t,n,a){return ts(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Nu(t.return,n,a)}function _f(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function _g(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(bn(t,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,a,n);else if(t.tag===19)gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function rS(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ra(n,pn,t.memoizedState.cache),Js();break;case 27:case 5:it(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mg(t,n,a):(La(n),t=ia(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return _g(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,ug(t,n,a);case 24:Ra(n,pn,t.memoizedState.cache)}return ia(t,n,a)}function vg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return vn=!1,rS(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Ut&&(n.flags&1048576)!==0&&Zp(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(t=_r(o,t),n.tag=1,n=hg(null,n,o,t,a)):(n.tag=0,n=ff(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=og(null,n,o,t,a);break e}else if(u===z){n.tag=14,n=lg(null,n,o,t,a);break e}}throw n=xe(o)||o,Error(r(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),hg(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Hu(t,n),oo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ra(n,pn,o),o!==d.cache&&Pu(n,[pn],a,!0),so(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=pg(t,n,o,a);break e}else if(o!==u){u=ri(Error(r(424)),n),$s(u),n=pg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=xi(t.firstChild),In=n,Ut=!0,fr=null,wi=!0,a=jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Js(),o===u){n=ia(t,n,a);break e}bn(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=M0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ut||(a=n.type,t=n.pendingProps,o=$l(ie.current).createElement(a),o[ot]=n,o[qt]=t,An(o,a,t),rn(o),n.stateNode=o):n.memoizedState=M0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Ut&&(o=n.stateNode=x0(n.type,n.pendingProps,ie.current),In=n,wi=!0,u=$t,Va(n.type)?(Jf=u,$t=xi(o.firstChild)):$t=u),bn(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((u=o=$t)&&(o=NS(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,In=n,$t=xi(o.firstChild),wi=!1,u=!0):u=!1),u||dr(n)),it(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,Zf(u,d)?o=null:y!==null&&Zf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,Qx,null,null,a),Do._currentValue=u),Bl(t,n),bn(t,n,o,a),n.child;case 6:return t===null&&Ut&&((t=a=$t)&&(a=PS(a,n.pendingProps,wi),a!==null?(n.stateNode=a,In=n,$t=null,t=!0):t=!1),t||dr(n)),null;case 13:return mg(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ts(n,null,o,a):bn(t,n,o,a),n.child;case 11:return og(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ra(n,n.type,o.value),bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=wn(u),o=o(u),n.flags|=1,bn(t,n,o,a),n.child;case 14:return lg(t,n,n.type,n.pendingProps,a);case 15:return cg(t,n,n.type,n.pendingProps,a);case 19:return _g(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ji(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ug(t,n,a);case 24:return pr(n),o=wn(pn),t===null?(u=Fu(),u===null&&(u=Xt,d=Ou(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},zu(n),Ra(n,pn,u)):((t.lanes&a)!==0&&(Hu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,pn,o)):(o=d.cache,Ra(n,pn,o),o!==u.cache&&Pu(n,[pn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(t){t.flags|=4}function xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R0(n)){if(n=ci.current,n!==null&&((yt&4194048)===yt?Di!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==Di))throw ao=Bu,nm;t.flags|=8192}}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Je():536870912,t.lanes|=n,rs|=n)}function mo(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function sS(t,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(pn),je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qp())),jt(n),null;case 26:return a=n.memoizedState,t===null?(aa(n),a!==null?(jt(n),xg(n,a)):(jt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(aa(n),jt(n),xg(n,a)):(jt(n),n.flags&=-16777217):(t.memoizedProps!==o&&aa(n),jt(n),n.flags&=-16777217),null;case 27:Qe(n),a=ie.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=Fe.current,Qs(n)?Kp(n):(t=x0(u,o,a),n.stateNode=t,aa(n))}return jt(n),null;case 5:if(Qe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(t=Fe.current,Qs(n))Kp(n);else{switch(u=$l(ie.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[ot]=n,t[qt]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(An(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&aa(n)}}return jt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ot]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||d0(t.nodeValue,a)),t||dr(n)}else t=$l(t).createTextNode(o),t[ot]=n,n.stateNode=t}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ot]=n}else Js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Qp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),jt(n),null;case 4:return je(),t===null&&kf(n.stateNode.containerInfo),jt(n),null;case 10:return ea(n.type),jt(n),null;case 19:if(fe(mn),u=n.memoizedState,u===null)return jt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)mo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ol(t),d!==null){for(n.flags|=128,mo(u,!1),t=d.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Yp(a,t),a=a.sibling;return be(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Rt()>kl&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Ol(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ut)return jt(n),null}else 2*Rt()-u.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Rt(),n.sibling=null,t=mn.current,be(mn,o?t&1|2:t&1),n):(jt(n),null);case 22:case 23:return na(n),Xu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&fe(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(pn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function oS(t,n){switch(Du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(pn),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 13:if(na(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Js()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return fe(mn),null;case 4:return je(),null;case 10:return ea(n.type),null;case 22:case 23:return na(n),Xu(),t!==null&&fe(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(pn),null;case 25:return null;default:return null}}function Sg(t,n){switch(Du(n),n.tag){case 3:ea(pn),je();break;case 26:case 27:case 5:Qe(n);break;case 4:je();break;case 13:na(n);break;case 19:fe(mn);break;case 10:ea(n.type);break;case 22:case 23:na(n),Xu(),t!==null&&fe(mr);break;case 24:ea(pn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Vt(n,n.return,R)}}function Pa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var B=a,ae=R;try{ae()}catch(_e){Vt(u,B,_e)}}}o=o.next}while(o!==d)}}catch(_e){Vt(n,n.return,_e)}}function yg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(o){Vt(t,t.return,o)}}}function Mg(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function _o(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function Eg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function xf(t,n,a){try{var o=t.stateNode;CS(o,t.type,a,n),o[qt]=n}catch(u){Vt(t,t.return,u)}}function bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function Sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function Tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[ot]=t,n[qt]=a}catch(d){Vt(t,t.return,d)}}var ra=!1,on=!1,Mf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,xn=null;function lS(t,n){if(t=t.containerInfo,qf=rc,t=Fp(t),xu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,B=-1,ae=0,_e=0,Me=t,se=null;t:for(;;){for(var ce;Me!==a||u!==0&&Me.nodeType!==3||(R=y+u),Me!==d||o!==0&&Me.nodeType!==3||(B=y+o),Me.nodeType===3&&(y+=Me.nodeValue.length),(ce=Me.firstChild)!==null;)se=Me,Me=ce;for(;;){if(Me===t)break t;if(se===a&&++ae===u&&(R=y),se===d&&++_e===o&&(B=y),(ce=Me.nextSibling)!==null)break;Me=se,se=Me.parentNode}Me=ce}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},rc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var tt=_r(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Vt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Rg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(t,a),o&4&&go(5,a);break;case 1:if(Oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Vt(a,a.return,y)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Vt(a,a.return,y)}}o&64&&yg(a),o&512&&_o(a,a.return);break;case 3:if(Oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(t,n)}catch(y){Vt(a,a.return,y)}}break;case 27:n===null&&o&4&&Tg(a);case 26:case 5:Oa(t,a),n===null&&o&4&&Eg(a),o&512&&_o(a,a.return);break;case 12:Oa(t,a);break;case 13:Oa(t,a),o&4&&Dg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_S.bind(null,a),OS(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||on,u=ra;var d=on;ra=o,(on=n)&&!d?Ia(t,a,(a.subtreeFlags&8772)!==0):Oa(t,a),ra=u,on=d}break;case 30:break;default:Oa(t,a)}}function Cg(t){var n=t.alternate;n!==null&&(t.alternate=null,Cg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Or(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Vn=!1;function sa(t,n,a){for(a=a.child;a!==null;)wg(t,n,a),a=a.sibling}function wg(t,n,a){if(E&&typeof E.onCommitFiberUnmount=="function")try{E.onCommitFiberUnmount(U,a)}catch{}switch(a.tag){case 26:on||Ui(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ui(a,n);var o=Kt,u=Vn;Va(a.type)&&(Kt=a.stateNode,Vn=!1),sa(t,n,a),Ao(a.stateNode),Kt=o,Vn=u;break;case 5:on||Ui(a,n);case 6:if(o=Kt,u=Vn,Kt=null,sa(t,n,a),Kt=o,Vn=u,Kt!==null)if(Vn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{Kt.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:Kt!==null&&(Vn?(t=Kt,_0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Po(t)):_0(Kt,a.stateNode));break;case 4:o=Kt,u=Vn,Kt=a.stateNode.containerInfo,Vn=!0,sa(t,n,a),Kt=o,Vn=u;break;case 0:case 11:case 14:case 15:on||Pa(2,a,n),on||Pa(4,a,n),sa(t,n,a);break;case 1:on||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mg(a,n,o)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,sa(t,n,a),on=o;break;default:sa(t,n,a)}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(a){Vt(n,n.return,a)}}function cS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ag),n;default:throw Error(r(435,t.tag))}}function Ef(t,n){var a=cS(t);n.forEach(function(o){var u=vS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(Va(R.type)){Kt=R.stateNode,Vn=!1;break e}break;case 5:Kt=R.stateNode,Vn=!1;break e;case 3:case 4:Kt=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(Kt===null)throw Error(r(160));wg(d,y,u),Kt=null,Vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ug(n,t),n=n.sibling}var vi=null;function Ug(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),jn(t),o&4&&(Pa(3,t,t.return),go(3,t),Pa(5,t,t.return));break;case 1:Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ir]||d[ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,o,a),d[ot]=t,rn(d),o=d;break e;case"link":var y=T0("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;case"meta":if(y=T0("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[ot]=t,rn(d),o=d}t.stateNode=o}else A0(u,t.type,t.stateNode);else t.stateNode=b0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?A0(u,t.type,t.stateNode):b0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),a!==null&&o&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{On(u,"")}catch(ce){Vt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,xf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(Kn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){Vt(t,t.return,ce)}}break;case 3:if(nc=null,u=vi,vi=ec(n.containerInfo),Kn(n,t),vi=u,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(ce){Vt(t,t.return,ce)}Mf&&(Mf=!1,Lg(t));break;case 4:o=vi,vi=ec(t.stateNode.containerInfo),Kn(n,t),jn(t),vi=o;break;case 12:Kn(n,t),jn(t);break;case 13:Kn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=Rt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ef(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ae=ra,_e=on;if(ra=ae||u,on=_e||B,Kn(n,t),on=_e,ra=ae,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ra||on||vr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=B.stateNode;var Me=B.memoizedProps.style,se=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(ce){Vt(B,B.return,ce)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ce){Vt(B,B.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(t,a))));break;case 19:Kn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ef(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(bg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Sf(t);Gl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(On(y,""),a.flags&=-33);var R=Sf(t);Gl(t,R,y);break;case 3:case 4:var B=a.stateNode.containerInfo,ae=Sf(t);yf(t,ae,B);break;default:throw Error(r(161))}}catch(_e){Vt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Lg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rg(t,n.alternate,n),n=n.sibling}function vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),vr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mg(n,n.return,a),vr(n);break;case 27:Ao(n.stateNode);case 26:case 5:Ui(n,n.return),vr(n);break;case 22:n.memoizedState===null&&vr(n);break;case 30:vr(n);break;default:vr(n)}t=t.sibling}}function Ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ia(u,d,a),go(4,d);break;case 1:if(Ia(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(o,o.return,ae)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)om(B[u],R)}catch(ae){Vt(o,o.return,ae)}}a&&y&64&&yg(d),_o(d,d.return);break;case 27:Tg(d);case 26:case 5:Ia(u,d,a),a&&o===null&&y&4&&Eg(d),_o(d,d.return);break;case 12:Ia(u,d,a);break;case 13:Ia(u,d,a),a&&y&4&&Dg(u,d);break;case 22:d.memoizedState===null&&Ia(u,d,a),_o(d,d.return);break;case 30:break;default:Ia(u,d,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Li(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ng(t,n,a,o),n=n.sibling}function Ng(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,a,o),u&2048&&go(9,n);break;case 1:Li(t,n,a,o);break;case 3:Li(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Li(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Vt(n,n.return,B)}}else Li(t,n,a,o);break;case 13:Li(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Li(t,n,a,o):vo(t,n):d._visibility&2?Li(t,n,a,o):(d._visibility|=2,ns(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&bf(y,n);break;case 24:Li(t,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Li(t,n,a,o)}}function ns(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,y=n,R=a,B=o,ae=y.flags;switch(y.tag){case 0:case 11:case 15:ns(d,y,R,B,u),go(8,y);break;case 23:break;case 22:var _e=y.stateNode;y.memoizedState!==null?_e._visibility&2?ns(d,y,R,B,u):vo(d,y):(_e._visibility|=2,ns(d,y,R,B,u)),u&&ae&2048&&bf(y.alternate,y);break;case 24:ns(d,y,R,B,u),u&&ae&2048&&Tf(y.alternate,y);break;default:ns(d,y,R,B,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&bf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Tf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var xo=8192;function is(t){if(t.subtreeFlags&xo)for(t=t.child;t!==null;)Pg(t),t=t.sibling}function Pg(t){switch(t.tag){case 26:is(t),t.flags&xo&&t.memoizedState!==null&&ZS(vi,t.memoizedState,t.memoizedProps);break;case 5:is(t);break;case 3:case 4:var n=vi;vi=ec(t.stateNode.containerInfo),is(t),vi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,is(t),xo=n):is(t));break;default:is(t)}}function Og(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Fg(o,t)}Og(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):So(t);break;default:So(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Fg(o,t)}Og(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Fg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(Cg(o),o===a){xn=null;break e}if(u!==null){u.return=d,xn=u;break e}xn=d}}}var uS={getCacheForType:function(t){var n=wn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},fS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Xt=null,gt=null,yt=0,Ot=0,Qn=null,Fa=!1,as=!1,Af=!1,oa=0,en=0,Ba=0,xr=0,Rf=0,ui=0,rs=0,yo=null,kn=null,Cf=!1,wf=0,kl=1/0,Xl=null,za=null,Tn=0,Ha=null,ss=null,os=0,Df=0,Uf=null,Bg=null,Mo=0,Lf=null;function Jn(){if((Pt&2)!==0&&yt!==0)return yt&-yt;if(F.T!==null){var t=Zr;return t!==0?t:zf()}return qe()}function zg(){ui===0&&(ui=(yt&536870912)===0||Ut?Ze():536870912);var t=ci.current;return t!==null&&(t.flags|=32),ui}function $n(t,n,a){(t===Xt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ga(t,yt,ui,!1)),k(t,a),((Pt&2)===0||t!==Xt)&&(t===Xt&&((Pt&2)===0&&(xr|=a),en===4&&Ga(t,yt,ui,!1)),Ni(t))}function Hg(t,n,a){if((Pt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?pS(t,n):Of(t,n,!0),d=o;do{if(u===0){as&&!o&&Ga(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!dS(a)){u=Of(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=yo;var B=R.current.memoizedState.isDehydrated;if(B&&(ls(R,y).flags|=256),y=Of(R,y,!1),y!==2){if(Af&&!B){R.errorRecoveryDisabledLanes|=d,xr|=d,u=4;break e}d=kn,kn=u,d!==null&&(kn===null?kn=d:kn.push.apply(kn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){ls(t,0),Ga(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,ui,!Fa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=wf+300-Rt(),10<u)){if(Ga(o,n,ui,!Fa),We(o,0,!0)!==0)break e;o.timeoutHandle=m0(Gg.bind(null,o,a,kn,Xl,Cf,n,ui,xr,rs,Fa,d,2,-0,0),u);break e}Gg(o,a,kn,Xl,Cf,n,ui,xr,rs,Fa,d,0,-0,0)}}break}while(!0);Ni(t)}function Gg(t,n,a,o,u,d,y,R,B,ae,_e,Me,se,ce){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:YS},Pg(n),Me=KS(),Me!==null)){t.cancelPendingCommit=Me(Zg.bind(null,t,n,d,a,o,u,y,R,B,_e,1,se,ce)),Ga(t,d,y,!ae);return}Zg(t,n,d,a,o,u,y,R,B)}function dS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,a,o){n&=~Rf,n&=~xr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-$(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&ve(t,a,n)}function Wl(){return(Pt&6)===0?(Eo(0),!1):!0}function Nf(){if(gt!==null){if(Ot===0)var t=gt.return;else t=gt,$i=hr=null,Ku(t),es=null,ho=0,t=gt;for(;t!==null;)Sg(t.alternate,t),t=t.return;gt=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,DS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Nf(),Xt=t,gt=a=ji(t.current,null),yt=n,Ot=0,Qn=null,Fa=!1,as=Ce(t,n),Af=!1,rs=ui=Rf=xr=Ba=en=0,kn=yo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-$(o),d=1<<u;n|=t[u],o&=~d}return oa=n,hl(),a}function Vg(t,n){pt=null,F.H=Ll,n===io||n===Ml?(n=rm(),Ot=3):n===nm?(n=rm(),Ot=4):Ot=n===sg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&(en=1,Fl(t,ri(n,t.current)))}function kg(){var t=F.H;return F.H=Ll,t===null?Ll:t}function Xg(){var t=F.A;return F.A=uS,t}function Pf(){en=4,Fa||(yt&4194048)!==yt&&ci.current!==null||(as=!0),(Ba&134217727)===0&&(xr&134217727)===0||Xt===null||Ga(Xt,yt,ui,!1)}function Of(t,n,a){var o=Pt;Pt|=2;var u=kg(),d=Xg();(Xt!==t||yt!==n)&&(Xl=null,ls(t,n)),n=!1;var y=en;e:do try{if(Ot!==0&&gt!==null){var R=gt,B=Qn;switch(Ot){case 8:Nf(),y=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ae=Ot;if(Ot=0,Qn=null,cs(t,R,B,ae),a&&as){y=0;break e}break;default:ae=Ot,Ot=0,Qn=null,cs(t,R,B,ae)}}hS(),y=en;break}catch(_e){Vg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,$i=hr=null,Pt=o,F.H=u,F.A=d,gt===null&&(Xt=null,yt=0,hl()),y}function hS(){for(;gt!==null;)Wg(gt)}function pS(t,n){var a=Pt;Pt|=2;var o=kg(),u=Xg();Xt!==t||yt!==n?(Xl=null,kl=Rt()+500,ls(t,n)):as=Ce(t,n);e:do try{if(Ot!==0&&gt!==null){n=gt;var d=Qn;t:switch(Ot){case 1:Ot=0,Qn=null,cs(t,n,d,1);break;case 2:case 9:if(im(d)){Ot=0,Qn=null,qg(n);break}n=function(){Ot!==2&&Ot!==9||Xt!==t||(Ot=7),Ni(t)},d.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:im(d)?(Ot=0,Qn=null,qg(n)):(Ot=0,Qn=null,cs(t,n,d,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var R=gt;if(!y||R0(y)){Ot=0,Qn=null;var B=R.sibling;if(B!==null)gt=B;else{var ae=R.return;ae!==null?(gt=ae,ql(ae)):gt=null}break t}}Ot=0,Qn=null,cs(t,n,d,5);break;case 6:Ot=0,Qn=null,cs(t,n,d,6);break;case 8:Nf(),en=6;break e;default:throw Error(r(462))}}mS();break}catch(_e){Vg(t,_e)}while(!0);return $i=hr=null,F.H=o,F.A=u,Pt=a,gt!==null?0:(Xt=null,yt=0,hl(),en)}function mS(){for(;gt!==null&&!Mt();)Wg(gt)}function Wg(t){var n=vg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?ql(t):gt=n}function qg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Ku(n);default:Sg(a,n),n=gt=Yp(n,oa),n=vg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?ql(t):gt=n}function cs(t,n,a,o){$i=hr=null,Ku(n),es=null,ho=0;var u=n.return;try{if(aS(t,u,n,a,yt)){en=1,Fl(t,ri(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;en=1,Fl(t,ri(a,t.current)),gt=null;return}n.flags&32768?(Ut||o===1?t=!0:as||(yt&536870912)!==0?t=!1:(Fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Yg(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Yg(n,Fa);return}t=n.return;var a=sS(n.alternate,n,oa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);en===0&&(en=5)}function Yg(t,n){do{var a=oS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);en=6,gt=null}function Zg(t,n,a,o,u,d,y,R,B){t.cancelPendingCommit=null;do Yl();while(Tn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=bu,we(t,a,d,y,R,B),t===Xt&&(gt=Xt=null,yt=0),ss=n,Ha=t,os=a,Df=d,Uf=u,Bg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xS(Gt,function(){return $g(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=H.p,H.p=2,y=Pt,Pt|=4;try{lS(t,n,a)}finally{Pt=y,H.p=u,F.T=o}}Tn=1,Kg(),jg(),Qg()}}function Kg(){if(Tn===1){Tn=0;var t=Ha,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{Ug(n,t);var d=Yf,y=Fp(t.containerInfo),R=d.focusedElem,B=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&Ip(R.ownerDocument.documentElement,R)){if(B!==null&&xu(R)){var ae=B.start,_e=B.end;if(_e===void 0&&(_e=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(_e,R.value.length);else{var Me=R.ownerDocument||document,se=Me&&Me.defaultView||window;if(se.getSelection){var ce=se.getSelection(),tt=R.textContent.length,$e=Math.min(B.start,tt),Ht=B.end===void 0?$e:Math.min(B.end,tt);!ce.extend&&$e>Ht&&(y=Ht,Ht=$e,$e=y);var Q=Op(R,$e),V=Op(R,Ht);if(Q&&V&&(ce.rangeCount!==1||ce.anchorNode!==Q.node||ce.anchorOffset!==Q.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var ee=Me.createRange();ee.setStart(Q.node,Q.offset),ce.removeAllRanges(),$e>Ht?(ce.addRange(ee),ce.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),ce.addRange(ee))}}}}for(Me=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}rc=!!qf,Yf=qf=null}finally{Pt=u,H.p=o,F.T=a}}t.current=n,Tn=2}}function jg(){if(Tn===2){Tn=0;var t=Ha,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{Rg(t,n.alternate,n)}finally{Pt=u,H.p=o,F.T=a}}Tn=3}}function Qg(){if(Tn===4||Tn===3){Tn=0,vt();var t=Ha,n=ss,a=os,o=Bg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,ss=Ha=null,Jg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(za=null),Ee(a),n=n.stateNode,E&&typeof E.onCommitFiberRoot=="function")try{E.onCommitFiberRoot(U,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=u}}(os&3)!==0&&Yl(),Ni(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Lf?Mo++:(Mo=0,Lf=t):Mo=0,Eo(0)}}function Jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Yl(t){return Kg(),jg(),Qg(),$g()}function $g(){if(Tn!==5)return!1;var t=Ha,n=Df;Df=0;var a=Ee(os),o=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=Uf,Uf=null;var d=Ha,y=os;if(Tn=0,ss=Ha=null,os=0,(Pt&6)!==0)throw Error(r(331));var R=Pt;if(Pt|=4,Ig(d.current),Ng(d,d.current,y,a),Pt=R,Eo(0,!1),E&&typeof E.onPostCommitFiberRoot=="function")try{E.onPostCommitFiberRoot(U,d)}catch{}return!0}finally{H.p=u,F.T=o,Jg(t,n)}}function e0(t,n,a){n=ri(a,n),n=uf(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(k(t,2),Ni(t))}function Vt(t,n,a){if(t.tag===3)e0(t,t,a);else for(;n!==null;){if(n.tag===3){e0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){t=ri(a,t),a=ag(2),o=Da(n,a,2),o!==null&&(rg(a,o,n,t),k(o,2),Ni(o));break}}n=n.return}}function If(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new fS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),t=gS.bind(null,t,n,a),n.then(t,t))}function gS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(yt&a)===a&&(en===4||en===3&&(yt&62914560)===yt&&300>Rt()-wf?(Pt&2)===0&&ls(t,0):Rf|=a,rs===yt&&(rs=0)),Ni(t)}function t0(t,n){n===0&&(n=Je()),t=Xr(t,n),t!==null&&(k(t,n),Ni(t))}function _S(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),t0(t,a)}function vS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),t0(t,a)}function xS(t,n){return ut(t,n)}var Zl=null,us=null,Ff=!1,Kl=!1,Bf=!1,Sr=0;function Ni(t){t!==us&&t.next===null&&(us===null?Zl=us=t:us=us.next=t),Kl=!0,Ff||(Ff=!0,yS())}function Eo(t,n){if(!Bf&&Kl){Bf=!0;do for(var a=!1,o=Zl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-$(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,r0(o,d))}else d=yt,d=We(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ce(o,d)||(a=!0,r0(o,d));o=o.next}while(a);Bf=!1}}function SS(){n0()}function n0(){Kl=Ff=!1;var t=0;Sr!==0&&(wS()&&(t=Sr),Sr=0);for(var n=Rt(),a=null,o=Zl;o!==null;){var u=o.next,d=i0(o,n);d===0?(o.next=null,a===null?Zl=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(d&3)!==0)&&(Kl=!0)),o=u}Eo(t)}function i0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-$(d),R=1<<y,B=u[y];B===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Le(R,n)):B<=n&&(t.expiredLanes|=R),d&=~R}if(n=Xt,a=yt,a=We(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&At(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&At(o),Ee(a)){case 2:case 8:a=ln;break;case 32:a=Gt;break;case 268435456:a=Y;break;default:a=Gt}return o=a0.bind(null,t),a=ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&At(o),t.callbackPriority=2,t.callbackNode=null,2}function a0(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var o=yt;return o=We(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Hg(t,o,n),i0(t,Rt()),t.callbackNode!=null&&t.callbackNode===a?a0.bind(null,t):null)}function r0(t,n){if(Yl())return null;Hg(t,n,!0)}function yS(){US(function(){(Pt&6)!==0?ut(an,SS):n0()})}function zf(){return Sr===0&&(Sr=Ze()),Sr}function s0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gi(""+t)}function o0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function MS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=s0((u[qt]||null).action),y=o.submitter;y&&(n=(n=y[qt]||null)?s0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Sr!==0){var B=y?o0(u,y):new FormData(u);rf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(R.preventDefault(),B=y?o0(u,y):new FormData(u),rf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Hf=0;Hf<Eu.length;Hf++){var Gf=Eu[Hf],ES=Gf.toLowerCase(),bS=Gf[0].toUpperCase()+Gf.slice(1);_i(ES,"on"+bS)}_i(Hp,"onAnimationEnd"),_i(Gp,"onAnimationIteration"),_i(Vp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Gx,"onTransitionRun"),_i(Vx,"onTransitionStart"),_i(kx,"onTransitionCancel"),_i(kp,"onTransitionEnd"),Zi("onMouseEnter",["mouseout","mouseover"]),Zi("onMouseLeave",["mouseout","mouseover"]),Zi("onPointerEnter",["pointerout","pointerover"]),Zi("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function l0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],B=R.instance,ae=R.currentTarget;if(R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(_e){Il(_e)}u.currentTarget=null,d=B}else for(y=0;y<o.length;y++){if(R=o[y],B=R.instance,ae=R.currentTarget,R=R.listener,B!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(_e){Il(_e)}u.currentTarget=null,d=B}}}}function _t(t,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var o=t+"__bubble";a.has(o)||(c0(n,t,2,!1),a.add(o))}function Vf(t,n,a){var o=0;n&&(o|=4),c0(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[jl]){t[jl]=!0,ar.forEach(function(a){a!=="selectionchange"&&(TS.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Vf("selectionchange",!1,n))}}function c0(t,n,a,o){switch(N0(n)){case 2:var u=JS;break;case 8:u=$S;break;default:u=id}a=u.bind(null,n,a,t),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Wi(R),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=d=y;continue e}R=R.parentNode}}o=o.return}gp(function(){var ae=d,_e=lu(a),Me=[];e:{var se=Xp.get(t);if(se!==void 0){var ce=ul,tt=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":ce=xx;break;case"focusin":tt="focus",ce=pu;break;case"focusout":tt="blur",ce=pu;break;case"beforeblur":case"afterblur":ce=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Mx;break;case Hp:case Gp:case Vp:ce=ux;break;case kp:ce=bx;break;case"scroll":case"scrollend":ce=rx;break;case"wheel":ce=Ax;break;case"copy":case"cut":case"paste":ce=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=yp;break;case"toggle":case"beforetoggle":ce=Cx}var $e=(n&4)!==0,Ht=!$e&&(t==="scroll"||t==="scrollend"),Q=$e?se!==null?se+"Capture":null:se;$e=[];for(var V=ae,ee;V!==null;){var Se=V;if(ee=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ee===null||Q===null||(Se=Vs(V,Q),Se!=null&&$e.push(To(V,Se,ee))),Ht)break;V=V.return}0<$e.length&&(se=new ce(se,tt,null,a,_e),Me.push({event:se,listeners:$e}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",se&&a!==Fr&&(tt=a.relatedTarget||a.fromElement)&&(Wi(tt)||tt[Mn]))break e;if((ce||se)&&(se=_e.window===_e?_e:(se=_e.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(tt=a.relatedTarget||a.toElement,ce=ae,tt=tt?Wi(tt):null,tt!==null&&(Ht=c(tt),$e=tt.tag,tt!==Ht||$e!==5&&$e!==27&&$e!==6)&&(tt=null)):(ce=null,tt=ae),ce!==tt)){if($e=xp,Se="onMouseLeave",Q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($e=yp,Se="onPointerLeave",Q="onPointerEnter",V="pointer"),Ht=ce==null?se:qi(ce),ee=tt==null?se:qi(tt),se=new $e(Se,V+"leave",ce,a,_e),se.target=Ht,se.relatedTarget=ee,Se=null,Wi(_e)===ae&&($e=new $e(Q,V+"enter",tt,a,_e),$e.target=ee,$e.relatedTarget=Ht,Se=$e),Ht=Se,ce&&tt)t:{for($e=ce,Q=tt,V=0,ee=$e;ee;ee=fs(ee))V++;for(ee=0,Se=Q;Se;Se=fs(Se))ee++;for(;0<V-ee;)$e=fs($e),V--;for(;0<ee-V;)Q=fs(Q),ee--;for(;V--;){if($e===Q||Q!==null&&$e===Q.alternate)break t;$e=fs($e),Q=fs(Q)}$e=null}else $e=null;ce!==null&&u0(Me,se,ce,$e,!1),tt!==null&&Ht!==null&&u0(Me,Ht,tt,$e,!0)}}e:{if(se=ae?qi(ae):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var Ve=wp;else if(Rp(se))if(Dp)Ve=Bx;else{Ve=Ix;var mt=Ox}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ae&&ai(ae.elementType)&&(Ve=wp):Ve=Fx;if(Ve&&(Ve=Ve(t,ae))){Cp(Me,Ve,a,_e);break e}mt&&mt(t,se,ae),t==="focusout"&&ae&&se.type==="number"&&ae.memoizedProps.value!=null&&En(se,"number",se.value)}switch(mt=ae?qi(ae):window,t){case"focusin":(Rp(mt)||mt.contentEditable==="true")&&(Gr=mt,Su=ae,js=null);break;case"focusout":js=Su=Gr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Bp(Me,a,_e);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Bp(Me,a,_e)}var Ke;if(gu)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Hr?Tp(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(Mp&&a.locale!=="ko"&&(Hr||et!=="onCompositionStart"?et==="onCompositionEnd"&&Hr&&(Ke=_p()):(Aa=_e,fu="value"in Aa?Aa.value:Aa.textContent,Hr=!0)),mt=Ql(ae,et),0<mt.length&&(et=new Sp(et,t,null,a,_e),Me.push({event:et,listeners:mt}),Ke?et.data=Ke:(Ke=Ap(a),Ke!==null&&(et.data=Ke)))),(Ke=Dx?Ux(t,a):Lx(t,a))&&(et=Ql(ae,"onBeforeInput"),0<et.length&&(mt=new Sp("onBeforeInput","beforeinput",null,a,_e),Me.push({event:mt,listeners:et}),mt.data=Ke)),MS(Me,t,ae,a,_e)}l0(Me,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Vs(t,a),u!=null&&o.unshift(To(t,u,d)),u=Vs(t,n),u!=null&&o.push(To(t,u,d))),t.tag===3)return o;t=t.return}return[]}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,B=R.alternate,ae=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||ae===null||(B=ae,u?(ae=Vs(a,d),ae!=null&&y.unshift(To(a,ae,B))):u||(ae=Vs(a,d),ae!=null&&y.push(To(a,ae,B)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var AS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(AS,`
`).replace(RS,"")}function d0(t,n){return n=f0(n),f0(t)===n}function Jl(){}function zt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":A(t,"class",o);break;case"tabIndex":A(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":A(t,a,o);break;case"style":Zt(t,o,d);break;case"data":if(n!=="object"){A(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gi(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gi(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Ir(t,"popover",o);break;case"xlinkActuate":W(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":W(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":W(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":W(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":W(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":W(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":W(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":W(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":W(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ir(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ft.get(a)||a,Ir(t,a,o))}}function Wf(t,n,a,o,u,d){switch(a){case"style":Zt(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[qt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ir(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,d,y,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=d=y=u=null,B=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":y=_e;break;case"checked":B=_e;break;case"defaultChecked":ae=_e;break;case"value":d=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:zt(t,n,o,_e,a,null)}}He(t,d,R,B,ae,y,u,!1),Ye(t);return;case"select":_t("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:zt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?dt(t,!!o,n,!1):a!=null&&dt(t,!!o,a,!0);return;case"textarea":_t("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:zt(t,n,y,R,a,null)}qn(t,o,u,d),Ye(t);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,B,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)_t(bo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,ae,o,a,null)}return;default:if(ai(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&Wf(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&zt(t,n,R,o,a,null))}function CS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,B=null,ae=null,_e=null;for(ce in a){var Me=a[ce];if(a.hasOwnProperty(ce)&&Me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":B=Me;default:o.hasOwnProperty(ce)||zt(t,n,ce,null,o,Me)}}for(var se in o){var ce=o[se];if(Me=a[se],o.hasOwnProperty(se)&&(ce!=null||Me!=null))switch(se){case"type":d=ce;break;case"name":u=ce;break;case"checked":ae=ce;break;case"defaultChecked":_e=ce;break;case"value":y=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==Me&&zt(t,n,se,ce,o,Me)}}cn(t,y,R,B,ae,_e,d,u);return;case"select":ce=y=R=se=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ce=B;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":se=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==B&&zt(t,n,u,d,o,B)}n=R,a=y,o=ce,se!=null?dt(t,!!a,se,!1):!!o!=!!a&&(n!=null?dt(t,!!a,n,!0):dt(t,!!a,a?[]:"",!1));return;case"textarea":ce=se=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:zt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":se=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&zt(t,n,y,u,o,d)}Pn(t,se,ce);return;case"option":for(var tt in a)if(se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:zt(t,n,tt,null,o,se)}for(B in o)if(se=o[B],ce=a[B],o.hasOwnProperty(B)&&se!==ce&&(se!=null||ce!=null))switch(B){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:zt(t,n,B,se,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)se=a[$e],a.hasOwnProperty($e)&&se!=null&&!o.hasOwnProperty($e)&&zt(t,n,$e,null,o,se);for(ae in o)if(se=o[ae],ce=a[ae],o.hasOwnProperty(ae)&&se!==ce&&(se!=null||ce!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:zt(t,n,ae,se,o,ce)}return;default:if(ai(n)){for(var Ht in a)se=a[Ht],a.hasOwnProperty(Ht)&&se!==void 0&&!o.hasOwnProperty(Ht)&&Wf(t,n,Ht,void 0,o,se);for(_e in o)se=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||se===ce||se===void 0&&ce===void 0||Wf(t,n,_e,se,o,ce);return}}for(var Q in a)se=a[Q],a.hasOwnProperty(Q)&&se!=null&&!o.hasOwnProperty(Q)&&zt(t,n,Q,null,o,se);for(Me in o)se=o[Me],ce=a[Me],!o.hasOwnProperty(Me)||se===ce||se==null&&ce==null||zt(t,n,Me,se,o,ce)}var qf=null,Yf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function h0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function wS(){var t=window.event;return t&&t.type==="popstate"?t===Kf?!1:(Kf=t,!0):(Kf=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(t){return g0.resolve(null).then(t).catch(LS)}:m0;function LS(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function _0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var y=t.ownerDocument;if(a&1&&Ao(y.documentElement),a&2&&Ao(y.body),a&4)for(a=y.head,Ao(a),y=a.firstChild;y;){var R=y.nextSibling,B=y.nodeName;y[ir]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=R}}if(u===0){t.removeChild(d),Po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Po(n)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function NS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function PS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function OS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Jf=null;function v0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function x0(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Or(t)}var fi=new Map,S0=new Set;function ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=H.d;H.d={f:IS,r:FS,D:BS,C:zS,L:HS,m:GS,X:kS,S:VS,M:XS};function IS(){var t=la.f(),n=Wl();return t||n}function FS(t){var n=zn(t);n!==null&&n.tag===5&&n.type==="form"?Hm(n):la.r(t)}var ds=typeof document>"u"?null:document;function y0(t,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),S0.has(u)||(S0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),rn(n),o.head.appendChild(n)))}}function BS(t){la.D(t),y0("dns-prefetch",t,null)}function zS(t,n){la.C(t,n),y0("preconnect",t,n)}function HS(t,n,a){la.L(t,n,a);var o=ds;if(o&&t&&n){var u='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ft(a.imageSizes)+'"]')):u+='[href="'+ft(t)+'"]';var d=u;switch(n){case"style":d=hs(t);break;case"script":d=ps(t)}fi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(d))||n==="script"&&o.querySelector(Co(d))||(n=o.createElement("link"),An(n,"link",t),rn(n),o.head.appendChild(n)))}}function GS(t,n){la.m(t,n);var a=ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ps(t)}if(!fi.has(d)&&(t=g({rel:"modulepreload",href:t},n),fi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(d)))return}o=a.createElement("link"),An(o,"link",t),rn(o),a.head.appendChild(o)}}}function VS(t,n,a){la.S(t,n,a);var o=ds;if(o&&t){var u=Yi(o).hoistableStyles,d=hs(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Ro(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(d))&&$f(t,a);var B=y=o.createElement("link");rn(B),An(B,"link",t),B._p=new Promise(function(ae,_e){B.onload=ae,B.onerror=_e}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function kS(t,n){la.X(t,n);var a=ds;if(a&&t){var o=Yi(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=g({src:t,async:!0},n),(n=fi.get(u))&&ed(t,n),d=a.createElement("script"),rn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function XS(t,n){la.M(t,n);var a=ds;if(a&&t){var o=Yi(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(u))&&ed(t,n),d=a.createElement("script"),rn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function M0(t,n,a,o){var u=(u=ie.current)?ec(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=Yi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var d=Yi(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Ro(t)))&&!d._p&&(y.instance=d,y.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),d||WS(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=Yi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+ft(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function E0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function WS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),rn(n),t.head.appendChild(n))}function ps(t){return'[src="'+ft(t)+'"]'}function Co(t){return"script[async]"+t}function b0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ft(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),rn(o),An(o,"style",u),tc(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var d=t.querySelector(Ro(u));if(d)return n.state.loading|=4,n.instance=d,rn(d),d;o=E0(a),(u=fi.get(u))&&$f(o,u),d=(t.ownerDocument||t).createElement("link"),rn(d);var y=d;return y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),An(d,"link",o),n.state.loading|=4,tc(d,a.precedence,t),n.instance=d;case"script":return d=ps(a.src),(u=t.querySelector(Co(d)))?(n.instance=u,rn(u),u):(o=a,(u=fi.get(d))&&(o=g({},a),ed(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),rn(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tc(o,a.precedence,t));return n.instance}function tc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function T0(t,n,a){if(nc===null){var o=new Map,u=nc=new Map;u.set(a,o)}else u=nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ir]||d[ot]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function A0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function YS(){}function ZS(t,n,a){if(wo===null)throw Error(r(475));var o=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(a.href),d=t.querySelector(Ro(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=ic.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,rn(d);return}d=t.ownerDocument||t,a=E0(a),(u=fi.get(u))&&$f(a,u),d=d.createElement("link"),rn(d);var y=d;y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),An(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ic.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function KS(){if(wo===null)throw Error(r(475));var t=wo;return t.stylesheets&&t.count===0&&td(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&td(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ic(){if(this.count--,this.count===0){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function td(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(jS,t),ac=null,ic.call(t))}function jS(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var o=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=ic.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function QS(t,n,a,o,u,d,y,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function C0(t,n,a,o,u,d,y,R,B,ae,_e,Me){return t=new QS(t,n,a,y,R,B,ae,Me),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},zu(d),t}function w0(t){return t?(t=Wr,t):Wr}function D0(t,n,a,o,u,d){u=w0(u),o.context===null?o.context=u:o.pendingContext=u,o=wa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Da(t,o,n),a!==null&&($n(a,t,n),ro(a,t,n))}function U0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){U0(t,n),(t=t.alternate)&&U0(t,n)}function L0(t){if(t.tag===13){var n=Xr(t,67108864);n!==null&&$n(n,t,67108864),nd(t,67108864)}}var rc=!0;function JS(t,n,a,o){var u=F.T;F.T=null;var d=H.p;try{H.p=2,id(t,n,a,o)}finally{H.p=d,F.T=u}}function $S(t,n,a,o){var u=F.T;F.T=null;var d=H.p;try{H.p=8,id(t,n,a,o)}finally{H.p=d,F.T=u}}function id(t,n,a,o){if(rc){var u=ad(o);if(u===null)Xf(t,n,o,sc,a),P0(t,o);else if(ty(u,t,n,a,o))o.stopPropagation();else if(P0(t,o),n&4&&-1<ey.indexOf(t)){for(;u!==null;){var d=zn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Re(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var B=1<<31-$(y);R.entanglements[1]|=B,y&=~B}Ni(d),(Pt&6)===0&&(kl=Rt()+500,Eo(0))}}break;case 13:R=Xr(d,2),R!==null&&$n(R,d,2),Wl(),nd(d,2)}if(d=ad(o),d===null&&Xf(t,n,o,sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Xf(t,n,o,null,a)}}function ad(t){return t=lu(t),rd(t)}var sc=null;function rd(t){if(sc=null,t=Wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function N0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nn()){case an:return 2;case ln:return 8;case Gt:case Jt:return 32;case Y:return 268435456;default:return 32}default:return 32}}var sd=!1,ka=null,Xa=null,Wa=null,Uo=new Map,Lo=new Map,qa=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=zn(n),n!==null&&L0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ty(t,n,a,o,u){switch(n){case"focusin":return ka=No(ka,t,n,a,o,u),!0;case"dragenter":return Xa=No(Xa,t,n,a,o,u),!0;case"mouseover":return Wa=No(Wa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Uo.set(d,No(Uo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Lo.set(d,No(Lo.get(d)||null,t,n,a,o,u)),!0}return!1}function O0(t){var n=Wi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ke(t.priority,function(){if(a.tag===13){var o=Jn();o=Pe(o);var u=Xr(a,o);u!==null&&$n(u,a,o),nd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Fr=o,a.target.dispatchEvent(o),Fr=null}else return n=zn(a),n!==null&&L0(n),t.blockedOn=a,!1;n.shift()}return!0}function I0(t,n,a){oc(t)&&a.delete(n)}function ny(){sd=!1,ka!==null&&oc(ka)&&(ka=null),Xa!==null&&oc(Xa)&&(Xa=null),Wa!==null&&oc(Wa)&&(Wa=null),Uo.forEach(I0),Lo.forEach(I0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,sd||(sd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ny)))}var cc=null;function F0(t){cc!==t&&(cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rd(o||a)===null)continue;break}var d=zn(a);d!==null&&(t.splice(n,3),n-=3,rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Po(t){function n(B){return lc(B,t)}ka!==null&&lc(ka,t),Xa!==null&&lc(Xa,t),Wa!==null&&lc(Wa,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)O0(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[qt]||null;if(typeof d=="function")y||F0(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[qt]||null)R=y.formAction;else if(rd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),F0(a)}}}function od(t){this._internalRoot=t}uc.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();D0(a,o,t,n,null,null)},uc.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;D0(t.current,2,null,t,null,null),Wl(),n[Mn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&O0(t)}};var B0=e.version;if(B0!=="19.1.0")throw Error(r(527,B0,"19.1.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var iy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{U=fc.inject(iy),E=fc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=eg,d=tg,y=ng,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=C0(t,1,!1,null,null,a,o,u,d,y,R,null),t[Mn]=n.current,kf(t),new od(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=eg,y=tg,R=ng,B=null,ae=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(ae=a.formState)),n=C0(t,1,!0,n,a??null,o,u,d,y,R,B,ae),n.context=w0(null),a=n.current,o=Jn(),o=Pe(o),u=wa(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,k(n,a),Ni(n),t[Mn]=n.current,kf(t),new uc(n)},Io.version="19.1.0",Io}var Z0;function hy(){if(Z0)return ud.exports;Z0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=dy(),ud.exports}var py=hy();/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,tv=/^[\\/]{2}/;function my(s,e){return e+s.replace(/\\/g,"/")}var K0="popstate";function j0(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function gy(s={}){function e(r,l){var h;let c=(h=l.state)==null?void 0:h.masked,{pathname:f,search:p,hash:m}=c||r.location;return jd("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:Yo(l)}return vy(e,i,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Vi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _y(){return Math.random().toString(36).substring(2,10)}function Q0(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function jd(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Is(e):e,state:i,key:e&&e.key||r||_y(),mask:l}}function Yo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Is(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function vy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function v(){p="POP";let S=g(),x=S==null?null:S-h;h=S,m&&m({action:p,location:C.location,delta:x})}function _(S,x){p="PUSH";let O=j0(S)?S:jd(C.location,S,x);h=g()+1;let I=Q0(O,h),w=C.createHref(O.mask||O);try{f.pushState(I,"",w)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;l.location.assign(w)}c&&m&&m({action:p,location:C.location,delta:1})}function M(S,x){p="REPLACE";let O=j0(S)?S:jd(C.location,S,x);h=g();let I=Q0(O,h),w=C.createHref(O.mask||O);f.replaceState(I,"",w),c&&m&&m({action:p,location:C.location,delta:0})}function b(S){return xy(l,S)}let C={get action(){return p},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(K0,v),m=S,()=>{l.removeEventListener(K0,v),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let x=b(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:M,go(S){return f.go(S)}};return C}function xy(s,e,i=!1){let r="http://localhost";s&&(r=s.location.origin!=="null"?s.location.origin:s.location.href),Qt(r,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:Yo(e);return l=l.replace(/ $/,"%20"),!i&&tv.test(l)&&(l=r+l),new URL(l,r)}function nv(s,e,i="/"){return Sy(s,e,i,!1)}function Sy(s,e,i,r,l){let c=typeof e=="string"?Is(e):e,f=xa(c.pathname||"/",i);if(f==null)return null;let p=yy(s),m=null,h=Ly(f);for(let g=0;m==null&&g<p.length;++g)m=Uy(p[g],h,r);return m}function yy(s){let e=iv(s);return My(e),e}function iv(s,e=[],i=[],r="",l=!1){let c=(f,p,m=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Qt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=Ai([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),iv(f.children,e,_,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:wy(v,f.index),routesMeta:_.map((M,b)=>{let[C,S]=sv(M.relativePath,M.caseSensitive,b===_.length-1);return{...M,matcher:C,compiledParams:S}})})};return s.forEach((f,p)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))c(f,p);else for(let h of av(f.path))c(f,p,!0,h)}),e}function av(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=av(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function My(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Dy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Ey=/^:[\w-]+$/,by=3,Ty=2,Ay=1,Ry=10,Cy=-2,J0=s=>s==="*";function wy(s,e){let i=s.split("/"),r=i.length;return i.some(J0)&&(r+=Cy),e&&(r+=Ty),i.filter(l=>!J0(l)).reduce((l,c)=>l+(Ey.test(c)?by:c===""?Ay:Ry),r)}function Dy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Uy(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_=m.matcher&&m.compiledParams?rv(v,g,m.matcher,m.compiledParams):Xc(v,g),M=m.route;if(!_&&h&&i&&!r[r.length-1].route.index&&(_=Xc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Ai([c,_.pathname]),pathnameBase:Oy(Ai([c,_.pathnameBase])),route:M}),_.pathnameBase!=="/"&&(c=Ai([c,_.pathnameBase]))}return f}function Xc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=sv(s.path,s.caseSensitive,s.end);return rv(s,e,i,r)}function rv(s,e,i,r){let l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:v},_)=>{if(g==="*"){let b=p[_]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=p[_];return v&&!M?h[g]=void 0:h[g]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:s}}function sv(s,e=!1,i=!0){Vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,g)=>{if(r.push({paramName:p,isOptional:m!=null}),m){let v=g.charAt(h+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Ly(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function xa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Ny(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Is(s):s,c;return i?(i=lv(i),i.startsWith("/")?c=$0(i.substring(1),"/"):c=$0(i,e)):c=e,{pathname:c,search:Iy(r),hash:Fy(l)}}function $0(s,e){let i=Wc(e).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function pd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Py(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function ov(s){let e=Py(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Wh(s,e,i,r=!1){let l;typeof s=="string"?l=Is(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),pd("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),pd("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),pd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}p=v>=0?e[v]:"/"}let m=Ny(l,p),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var lv=s=>s.replace(/[\\/]{2,}/g,"/"),Ai=s=>lv(s.join("/")),Wc=s=>s.replace(/\/+$/,""),Oy=s=>Wc(s).replace(/^\/*/,"/"),Iy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Fy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,By=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function zy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Hy(s){let e=s.map(i=>i.route.path).filter(Boolean);return Ai(e)||"/"}var cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function uv(s,e){let i=s;if(typeof i!="string"||!Xh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(cv)try{let c=new URL(window.location.href),f=tv.test(i)?new URL(my(i,c.protocol)):new URL(i),p=xa(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Vi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fv=["POST","PUT","PATCH","DELETE"];new Set(fv);var Gy=["GET",...fv];new Set(Gy);var Vy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ky(s){try{return Vy.includes(new URL(s).protocol)}catch{return!1}}var Fs=he.createContext(null);Fs.displayName="DataRouter";var $c=he.createContext(null);$c.displayName="DataRouterState";var dv=he.createContext(!1);function Xy(){return he.useContext(dv)}var hv=he.createContext({isTransitioning:!1});hv.displayName="ViewTransition";var Wy=he.createContext(new Map);Wy.displayName="Fetchers";var qy=he.createContext(null);qy.displayName="Await";var mi=he.createContext(null);mi.displayName="Navigation";var jo=he.createContext(null);jo.displayName="Location";var Ma=he.createContext({outlet:null,matches:[],isDataRoute:!1});Ma.displayName="Route";var qh=he.createContext(null);qh.displayName="RouteError";var pv="REACT_ROUTER_ERROR",Yy="REDIRECT",Zy="ROUTE_ERROR_RESPONSE";function Ky(s){if(s.startsWith(`${pv}:${Yy}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function jy(s){if(s.startsWith(`${pv}:${Zy}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new By(e.status,e.statusText,e.data)}catch{}}function Qy(s,{relative:e}={}){Qt(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(mi),{hash:l,pathname:c,search:f}=Jo(s,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Ai([i,c])),r.createHref({pathname:p,search:f,hash:l})}function Qo(){return he.useContext(jo)!=null}function Ea(){return Qt(Qo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(jo).location}var mv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gv(s){he.useContext(mi).static||he.useLayoutEffect(s)}function Jy(){let{isDataRoute:s}=he.useContext(Ma);return s?fM():$y()}function $y(){Qt(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Fs),{basename:e,navigator:i}=he.useContext(mi),{matches:r}=he.useContext(Ma),{pathname:l}=Ea(),c=JSON.stringify(ov(r)),f=he.useRef(!1);return gv(()=>{f.current=!0}),he.useCallback((m,h={})=>{if(Vi(f.current,mv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Wh(m,JSON.parse(c),l,h.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ai([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,c,l,s])}he.createContext(null);function Jo(s,{relative:e}={}){let{matches:i}=he.useContext(Ma),{pathname:r}=Ea(),l=JSON.stringify(ov(i));return he.useMemo(()=>Wh(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function eM(s,e){return _v(s,e)}function _v(s,e,i){var S;Qt(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=he.useContext(mi),{matches:l}=he.useContext(Ma),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let x=h&&h.path||"";xv(p,!h||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let g=Ea(),v;if(e){let x=typeof e=="string"?Is(e):e;Qt(m==="/"||((S=x.pathname)==null?void 0:S.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=g;let _=v.pathname||"/",M=_;if(m!=="/"){let x=m.replace(/^\//,"").split("/");M="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=i&&i.state.matches.length?i.state.matches.map(x=>Object.assign(x,{route:i.manifest[x.route.id]||x.route})):nv(s,{pathname:M});Vi(h||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Vi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=rM(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Ai([m,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:Ai([m,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),l,i);return e&&C?he.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},C):C}function tM(){let s=uM(),e=zy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,f)}var nM=he.createElement(tM,null),vv=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=jy(s.digest);i&&(s=i)}let e=s!==void 0?he.createElement(Ma.Provider,{value:this.props.routeContext},he.createElement(qh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?he.createElement(iM,{error:s},e):e}};vv.contextType=dv;var md=new WeakMap;function iM({children:s,error:e}){let{basename:i}=he.useContext(mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=Ky(e.digest);if(r){let l=md.get(e);if(l)throw l;let c=uv(r.location,i),f=c.absoluteURL||c.to;if(ky(f))throw new Error("Invalid redirect location");if(cv&&!md.get(e))if(c.isExternal||r.reloadDocument)window.location.href=f;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw md.set(e,p),p}return he.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return s}function aM({routeContext:s,match:e,children:i}){let r=he.useContext(Fs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Ma.Provider,{value:s},i)}function rM(s,e=[],i){let r=i==null?void 0:i.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,c=r==null?void 0:r.errors;if(c!=null){let g=l.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);Qt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(i&&r){f=r.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:_,errors:M}=r,b=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||b){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i==null?void 0:i.onError,h=r&&m?(g,v)=>{var _,M;m(g,{location:r.location,params:((M=(_=r.matches)==null?void 0:_[0])==null?void 0:M.params)??{},pattern:Hy(r.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,_)=>{let M,b=!1,C=null,S=null;r&&(M=c&&v.route.id?c[v.route.id]:void 0,C=v.route.errorElement||nM,f&&(p<0&&_===0?(xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):p===_&&(b=!0,S=v.route.hydrateFallbackElement||null)));let x=e.concat(l.slice(0,_+1)),O=()=>{let I;return M?I=C:b?I=S:v.route.Component?I=he.createElement(v.route.Component,null):v.route.element?I=v.route.element:I=g,he.createElement(aM,{match:v,routeContext:{outlet:g,matches:x,isDataRoute:r!=null},children:I})};return r&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?he.createElement(vv,{location:r.location,revalidation:r.revalidation,component:C,error:M,children:O(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):O()},null)}function Yh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sM(s){let e=he.useContext(Fs);return Qt(e,Yh(s)),e}function oM(s){let e=he.useContext($c);return Qt(e,Yh(s)),e}function lM(s){let e=he.useContext(Ma);return Qt(e,Yh(s)),e}function Zh(s){let e=lM(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function cM(){return Zh("useRouteId")}function uM(){var r;let s=he.useContext(qh),e=oM("useRouteError"),i=Zh("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function fM(){let{router:s}=sM("useNavigate"),e=Zh("useNavigate"),i=he.useRef(!1);return gv(()=>{i.current=!0}),he.useCallback(async(l,c={})=>{Vi(i.current,mv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var e_={};function xv(s,e,i){!e&&!e_[s]&&(e_[s]=!0,Vi(!1,i))}he.memo(dM);function dM({routes:s,manifest:e,future:i,state:r,isStatic:l,onError:c}){return _v(s,void 0,{manifest:e,state:r,isStatic:l,onError:c})}function Qd(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,useTransitions:f}){Qt(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=he.useMemo(()=>({basename:p,navigator:l,static:c,useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Is(i));let{pathname:h="/",search:g="",hash:v="",state:_=null,key:M="default",mask:b}=i,C=he.useMemo(()=>{let S=xa(h,p);return S==null?null:{location:{pathname:S,search:g,hash:v,state:_,key:M,mask:b},navigationType:r}},[p,h,g,v,_,M,r,b]);return Vi(C!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:he.createElement(mi.Provider,{value:m},he.createElement(jo.Provider,{children:e,value:C}))}function pM({children:s,location:e}){return eM(Jd(s),e)}function Jd(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let c=[...e,l];if(r.type===he.Fragment){i.push.apply(i,Jd(r.props.children,c));return}Qt(r.type===Qd,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Jd(r.props.children,c)),i.push(f)}),i}var Ic="get",Fc="application/x-www-form-urlencoded";function eu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function mM(s){return eu(s)&&s.tagName.toLowerCase()==="button"}function gM(s){return eu(s)&&s.tagName.toLowerCase()==="form"}function _M(s){return eu(s)&&s.tagName.toLowerCase()==="input"}function vM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function xM(s,e){return s.button===0&&(!e||e==="_self")&&!vM(s)}var dc=null;function SM(){if(dc===null)try{new FormData(document.createElement("form"),0),dc=!1}catch{dc=!0}return dc}var yM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gd(s){return s!=null&&!yM.has(s)?(Vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fc}"`),null):s}function MM(s,e){let i,r,l,c,f;if(gM(s)){let p=s.getAttribute("action");r=p?xa(p,e):null,i=s.getAttribute("method")||Ic,l=gd(s.getAttribute("enctype"))||Fc,c=new FormData(s)}else if(mM(s)||_M(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?xa(m,e):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||Ic,l=gd(s.getAttribute("formenctype"))||gd(p.getAttribute("enctype"))||Fc,c=new FormData(p,s),!SM()){let{name:h,type:g,value:v}=s;if(g==="image"){let _=h?`${h}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else h&&c.append(h,v)}}else{if(eu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ic,r=null,l=Fc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Sv(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&xa(l.pathname,e)==="/"?l.pathname=`${Wc(e)}/_root.${r}`:l.pathname=`${Wc(l.pathname)}.${r}`,l}async function EM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function TM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await EM(c,i);return f.links?f.links():[]}return[]}));return wM(r.flat(1).filter(bM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function t_(s,e,i,r,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>{var g;return i[h].pathname!==m.pathname||((g=i[h].route.path)==null?void 0:g.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var v;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function AM(s,e,{includeHydrateFallback:i}={}){return RM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function RM(s){return[...new Set(s)]}function CM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function wM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(CM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function jh(){let s=he.useContext(Fs);return Kh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function DM(){let s=he.useContext($c);return Kh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Qh=he.createContext(void 0);Qh.displayName="FrameworkContext";function tu(){let s=he.useContext(Qh);return Kh(s,"You must render this element inside a <HydratedRouter> element"),s}function UM(s,e){let i=he.useContext(Qh),[r,l]=he.useState(!1),[c,f]=he.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,_=he.useRef(null);he.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let C=x=>{x.forEach(O=>{f(O.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),he.useEffect(()=>{if(r){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Fo(p,M),onBlur:Fo(m,b),onMouseEnter:Fo(h,M),onMouseLeave:Fo(g,b),onTouchStart:Fo(v,M)}]:[!1,_,{}]}function Fo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function LM({page:s,...e}){let i=Xy(),{nonce:r}=tu(),{router:l}=jh(),c=he.useMemo(()=>nv(l.routes,s,l.basename),[l.routes,s,l.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),i?he.createElement(PM,{page:s,matches:c,...e}):he.createElement(OM,{page:s,matches:c,...e})):null}function NM(s){let{manifest:e,routeModules:i}=tu(),[r,l]=he.useState([]);return he.useEffect(()=>{let c=!1;return TM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function PM({page:s,matches:e,...i}){let r=Ea(),{future:l}=tu(),{basename:c}=jh(),f=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let p=Sv(s,c,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:h.push(g.route.id);return m&&h.length>0&&p.searchParams.set("_routes",h.join(",")),[p.pathname+p.search]},[c,l.v8_trailingSlashAwareDataRequests,s,r,e]);return he.createElement(he.Fragment,null,f.map(p=>he.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...i})))}function OM({page:s,matches:e,...i}){let r=Ea(),{future:l,manifest:c,routeModules:f}=tu(),{basename:p}=jh(),{loaderData:m,matches:h}=DM(),g=he.useMemo(()=>t_(s,e,h,c,r,"data"),[s,e,h,c,r]),v=he.useMemo(()=>t_(s,e,h,c,r,"assets"),[s,e,h,c,r]),_=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let C=new Set,S=!1;if(e.forEach(O=>{var w;let I=c.routes[O.route.id];!I||!I.hasLoader||(!g.some(L=>L.route.id===O.route.id)&&O.route.id in m&&((w=f[O.route.id])!=null&&w.shouldRevalidate)||I.hasClientLoader?S=!0:C.add(O.route.id))}),C.size===0)return[];let x=Sv(s,p,l.v8_trailingSlashAwareDataRequests,"data");return S&&C.size>0&&x.searchParams.set("_routes",e.filter(O=>C.has(O.route.id)).map(O=>O.route.id).join(",")),[x.pathname+x.search]},[p,l.v8_trailingSlashAwareDataRequests,m,r,c,g,e,s,f]),M=he.useMemo(()=>AM(v,c),[v,c]),b=NM(v);return he.createElement(he.Fragment,null,_.map(C=>he.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>he.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),b.map(({key:C,link:S})=>he.createElement("link",{key:C,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function IM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var FM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{FM&&(window.__reactRouterVersion="7.18.2")}catch{}function BM({basename:s,children:e,useTransitions:i,window:r}){let l=he.useRef();l.current==null&&(l.current=gy({window:r,v5Compat:!0}));let c=l.current,[f,p]=he.useState({action:c.action,location:c.location}),m=he.useCallback(h=>{i===!1?p(h):he.startTransition(()=>p(h))},[i]);return he.useLayoutEffect(()=>c.listen(m),[c,m]),he.createElement(hM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var yv=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,mask:p,state:m,target:h,to:g,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:M,...b},C){let{basename:S,navigator:x,useTransitions:O}=he.useContext(mi),I=typeof g=="string"&&Xh.test(g),w=uv(g,S);g=w.to;let L=Qy(g,{relative:l}),N=Ea(),z=null;if(p){let X=Wh(p,[],N.mask?N.mask.pathname:"/",!0);S!=="/"&&(X.pathname=X.pathname==="/"?S:Ai([S,X.pathname])),z=x.createHref(X)}let[T,P,K]=UM(r,b),G=VM(g,{replace:f,mask:p,state:m,target:h,preventScrollReset:v,relative:l,viewTransition:_,defaultShouldRevalidate:M,useTransitions:O});function Z(X){e&&e(X),X.defaultPrevented||G(X)}let pe=!(w.isExternal||c),xe=he.createElement("a",{...b,...K,href:(pe?z:void 0)||w.absoluteURL||L,onClick:pe?Z:e,ref:IM(C,P),target:h,"data-discover":!I&&i==="render"?"true":void 0});return T&&!I?he.createElement(he.Fragment,null,xe,he.createElement(LM,{page:L})):xe});yv.displayName="Link";var zM=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},g){let v=Jo(f,{relative:h.relative}),_=Ea(),M=he.useContext($c),{navigator:b,basename:C}=he.useContext(mi),S=M!=null&&YM(v)&&p===!0,x=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,O=_.pathname,I=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(O=O.toLowerCase(),I=I?I.toLowerCase():null,x=x.toLowerCase()),I&&C&&(I=xa(I,C)||I);const w=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let L=O===x||!l&&O.startsWith(x)&&O.charAt(w)==="/",N=I!=null&&(I===x||!l&&I.startsWith(x)&&I.charAt(x.length)==="/"),z={isActive:L,isPending:N,isTransitioning:S},T=L?e:void 0,P;typeof r=="function"?P=r(z):P=[r,L?"active":null,N?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let K=typeof c=="function"?c(z):c;return he.createElement(yv,{...h,"aria-current":T,className:P,ref:g,style:K,to:f,viewTransition:p},typeof m=="function"?m(z):m)});zM.displayName="NavLink";var HM=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Ic,action:p,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_,...M},b)=>{let{useTransitions:C}=he.useContext(mi),S=WM(),x=qM(p,{relative:h}),O=f.toLowerCase()==="get"?"get":"post",I=typeof p=="string"&&Xh.test(p),w=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let N=L.nativeEvent.submitter,z=(N==null?void 0:N.getAttribute("formmethod"))||f,T=()=>S(N||L.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_});C&&i!==!1?he.startTransition(()=>T()):T()};return he.createElement("form",{ref:b,method:O,action:x,onSubmit:r?m:w,...M,"data-discover":!I&&s==="render"?"true":void 0})});HM.displayName="Form";function GM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mv(s){let e=he.useContext(Fs);return Qt(e,GM(s)),e}function VM(s,{target:e,replace:i,mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m,useTransitions:h}={}){let g=Jy(),v=Ea(),_=Jo(s,{relative:f});return he.useCallback(M=>{if(xM(M,e)){M.preventDefault();let b=i!==void 0?i:Yo(v)===Yo(_),C=()=>g(s,{replace:b,mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m});h?he.startTransition(()=>C()):C()}},[v,g,_,i,r,l,e,s,c,f,p,m,h])}var kM=0,XM=()=>`__${String(++kM)}__`;function WM(){let{router:s}=Mv("useSubmit"),{basename:e}=he.useContext(mi),i=cM(),r=s.fetch,l=s.navigate;return he.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:g,body:v}=MM(c,e);if(f.navigate===!1){let _=f.fetcherKey||XM();await r(_,i,f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function qM(s,{relative:e}={}){let{basename:i}=he.useContext(mi),r=he.useContext(Ma);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Jo(s||".",{relative:e})},f=Ea();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ai([i,c.pathname])),Yo(c)}function YM(s,{relative:e}={}){let i=he.useContext(hv);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mv("useViewTransitionState"),l=Jo(s,{relative:e});if(!i.isTransitioning)return!1;let c=xa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=xa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Xc(l.pathname,f)!=null||Xc(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="185",ZM=0,n_=1,KM=2,Bc=1,jM=2,Wo=3,nr=0,Wn=1,pa=2,ga=0,ws=1,i_=2,a_=3,r_=4,QM=5,Ar=100,JM=101,$M=102,eE=103,tE=104,nE=200,iE=201,aE=202,rE=203,$d=204,eh=205,sE=206,oE=207,lE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,th=0,nh=1,ih=2,Ls=3,ah=4,rh=5,sh=6,oh=7,Ev=0,mE=1,gE=2,zi=0,bv=1,Tv=2,Av=3,Rv=4,Cv=5,wv=6,Dv=7,Uv=300,Dr=301,Ns=302,_d=303,vd=304,nu=306,lh=1e3,ma=1001,ch=1002,Rn=1003,_E=1004,hc=1005,Nn=1006,xd=1007,Cr=1008,pi=1009,Lv=1010,Nv=1011,Zo=1012,$h=1013,ki=1014,Fi=1015,Sa=1016,ep=1017,tp=1018,Ko=1020,Pv=35902,Ov=35899,Iv=1021,Fv=1022,Ti=1023,ya=1026,wr=1027,Bv=1028,np=1029,Ur=1030,ip=1031,ap=1033,zc=33776,Hc=33777,Gc=33778,Vc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,gh=37496,_h=37488,vh=37489,qc=37490,xh=37491,Sh=37808,yh=37809,Mh=37810,Eh=37811,bh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,wh=37817,Dh=37818,Uh=37819,Lh=37820,Nh=37821,Ph=36492,Oh=36494,Ih=36495,Fh=36283,Bh=36284,Yc=36285,zh=36286,vE=3200,s_=0,xE=1,er="",hi="srgb",Zc="srgb-linear",Kc="linear",It="srgb",ms=7680,o_=519,SE=512,yE=513,ME=514,rp=515,EE=516,bE=517,sp=518,TE=519,l_=35044,c_="300 es",Bi=2e3,jc=2001;function AE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function RE(){const s=Qc("canvas");return s.style.display="block",s}const u_={};function f_(...s){const e="THREE."+s.shift();console.log(e,...s)}function zv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=zv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Et(...s){s=zv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ds(...s){const e=s.join(" ");e in u_||(u_[e]=!0,nt(...s))}function CE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const wE={[th]:nh,[ih]:sh,[ah]:oh,[Ls]:rh,[nh]:th,[sh]:ih,[oh]:ah,[rh]:Ls};class Nr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=Math.PI/180,Hh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function DE(s,e){return(s%e+e)%e}function yd(s,e,i){return(1-i)*s+i*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const up=class up{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let Tt=up;class Bs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,p){let m=r[l+0],h=r[l+1],g=r[l+2],v=r[l+3],_=c[f+0],M=c[f+1],b=c[f+2],C=c[f+3];if(v!==C||m!==_||h!==M||g!==b){let S=m*_+h*M+g*b+v*C;S<0&&(_=-_,M=-M,b=-b,C=-C,S=-S);let x=1-p;if(S<.9995){const O=Math.acos(S),I=Math.sin(O);x=Math.sin(x*O)/I,p=Math.sin(p*O)/I,m=m*x+_*p,h=h*x+M*p,g=g*x+b*p,v=v*x+C*p}else{m=m*x+_*p,h=h*x+M*p,g=g*x+b*p,v=v*x+C*p;const O=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=O,h*=O,g*=O,v*=O}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const p=r[l],m=r[l+1],h=r[l+2],g=r[l+3],v=c[f],_=c[f+1],M=c[f+2],b=c[f+3];return e[i]=p*b+g*v+m*M-h*_,e[i+1]=m*b+g*_+h*v-p*M,e[i+2]=h*b+g*M+p*_-m*v,e[i+3]=g*b-p*v-m*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),g=p(l/2),v=p(c/2),_=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=_*g*v+h*M*b,this._y=h*M*v-_*g*b,this._z=h*g*b+_*M*v,this._w=h*g*v-_*M*b;break;case"YXZ":this._x=_*g*v+h*M*b,this._y=h*M*v-_*g*b,this._z=h*g*b-_*M*v,this._w=h*g*v+_*M*b;break;case"ZXY":this._x=_*g*v-h*M*b,this._y=h*M*v+_*g*b,this._z=h*g*b+_*M*v,this._w=h*g*v-_*M*b;break;case"ZYX":this._x=_*g*v-h*M*b,this._y=h*M*v+_*g*b,this._z=h*g*b-_*M*v,this._w=h*g*v+_*M*b;break;case"YZX":this._x=_*g*v+h*M*b,this._y=h*M*v+_*g*b,this._z=h*g*b-_*M*v,this._w=h*g*v-_*M*b;break;case"XZY":this._x=_*g*v-h*M*b,this._y=h*M*v-_*g*b,this._z=h*g*b+_*M*v,this._w=h*g*v+_*M*b;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],v=i[10],_=r+p+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-r*h,this._z=c*g+f*h+r*m-l*p,this._w=f*g-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fp=class fp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(d_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*r),g=2*(p*i-c*l),v=2*(c*r-f*i);return this.x=i+m*h+f*v-p*g,this.y=r+m*g+p*h-c*v,this.z=l+m*v+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;let oe=fp;const Md=new oe,d_=new Bs,dp=class dp{constructor(e,i,r,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h)}set(e,i,r,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],g=r[4],v=r[7],_=r[2],M=r[5],b=r[8],C=l[0],S=l[3],x=l[6],O=l[1],I=l[4],w=l[7],L=l[2],N=l[5],z=l[8];return c[0]=f*C+p*O+m*L,c[3]=f*S+p*I+m*N,c[6]=f*x+p*w+m*z,c[1]=h*C+g*O+v*L,c[4]=h*S+g*I+v*N,c[7]=h*x+g*w+v*z,c[2]=_*C+M*O+b*L,c[5]=_*S+M*I+b*N,c[8]=_*x+M*w+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-r*c*g+r*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],v=g*f-p*h,_=p*m-g*c,M=h*c-f*m,b=i*v+r*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*h-g*r)*C,e[2]=(p*r-l*f)*C,e[3]=_*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(f*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ed.makeScale(e,i)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ed.makeRotation(-e)),this}translate(e,i){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let st=dp;const Ed=new st,h_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const s={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===It&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zc]:{primaries:e,whitePoint:r,transfer:Kc,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const xt=UE();function _a(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class LE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=Qc("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(bd(l[f].image)):c.push(bd(l[f]))}else c=bd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?LE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let PE=0;const Td=new oe;class Bn extends Nr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=ma,l=ma,c=Nn,f=Cr,p=Ti,m=pi,h=Bn.DEFAULT_ANISOTROPY,g=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=$o(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Uv;Bn.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],g=m[4],v=m[8],_=m[1],M=m[5],b=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+S)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,w=(M+1)/2,L=(x+1)/2,N=(g+_)/4,z=(v+C)/4,T=(b+S)/4;return I>w&&I>L?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=N/r,c=z/r):w>L?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=N/l,c=T/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=z/c,l=T/c),this.set(r,l,c,i),this}let O=Math.sqrt((S-b)*(S-b)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(S-b)/O,this.y=(v-C)/O,this.z=(_-g)/O,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let tn=hp;class OE extends Nr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends OE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Hv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IE extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,i,r,l,c,f,p,m,h,g,v,_,M,b,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h,g,v,_,M,b,C,S)}set(e,i,r,l,c,f,p,m,h,g,v,_,M,b,C,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=b,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=f*g,M=f*v,b=p*g,C=p*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=M+b*h,i[5]=_-C*h,i[9]=-p*m,i[2]=C-_*h,i[6]=b+M*h,i[10]=f*m}else if(e.order==="YXZ"){const _=m*g,M=m*v,b=h*g,C=h*v;i[0]=_+C*p,i[4]=b*p-M,i[8]=f*h,i[1]=f*v,i[5]=f*g,i[9]=-p,i[2]=M*p-b,i[6]=C+_*p,i[10]=f*m}else if(e.order==="ZXY"){const _=m*g,M=m*v,b=h*g,C=h*v;i[0]=_-C*p,i[4]=-f*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*g,i[9]=C-_*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const _=f*g,M=f*v,b=p*g,C=p*v;i[0]=m*g,i[4]=b*h-M,i[8]=_*h+C,i[1]=m*v,i[5]=C*h+_,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,M=f*h,b=p*m,C=p*h;i[0]=m*g,i[4]=C-_*v,i[8]=b*v+M,i[1]=v,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=M*v+b,i[10]=_-C*v}else if(e.order==="XZY"){const _=f*m,M=f*h,b=p*m,C=p*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=_*v+C,i[5]=f*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*g,i[10]=C*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,BE)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(r,ei),Za.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(r,ei)),Za.normalize(),pc.crossVectors(ei,Za),l[0]=Za.x,l[4]=pc.x,l[8]=ei.x,l[1]=Za.y,l[5]=pc.y,l[9]=ei.y,l[2]=Za.z,l[6]=pc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],g=r[1],v=r[5],_=r[9],M=r[13],b=r[2],C=r[6],S=r[10],x=r[14],O=r[3],I=r[7],w=r[11],L=r[15],N=l[0],z=l[4],T=l[8],P=l[12],K=l[1],G=l[5],Z=l[9],pe=l[13],xe=l[2],X=l[6],F=l[10],H=l[14],te=l[3],me=l[7],D=l[11],J=l[15];return c[0]=f*N+p*K+m*xe+h*te,c[4]=f*z+p*G+m*X+h*me,c[8]=f*T+p*Z+m*F+h*D,c[12]=f*P+p*pe+m*H+h*J,c[1]=g*N+v*K+_*xe+M*te,c[5]=g*z+v*G+_*X+M*me,c[9]=g*T+v*Z+_*F+M*D,c[13]=g*P+v*pe+_*H+M*J,c[2]=b*N+C*K+S*xe+x*te,c[6]=b*z+C*G+S*X+x*me,c[10]=b*T+C*Z+S*F+x*D,c[14]=b*P+C*pe+S*H+x*J,c[3]=O*N+I*K+w*xe+L*te,c[7]=O*z+I*G+w*X+L*me,c[11]=O*T+I*Z+w*F+L*D,c[15]=O*P+I*pe+w*H+L*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],v=e[6],_=e[10],M=e[14],b=e[3],C=e[7],S=e[11],x=e[15],O=m*M-h*_,I=p*M-h*v,w=p*_-m*v,L=f*M-h*g,N=f*_-m*g,z=f*v-p*g;return i*(C*O-S*I+x*w)-r*(b*O-S*L+x*N)+l*(b*I-C*L+x*z)-c*(b*w-C*N+S*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],g=e[10];return i*(f*g-p*h)-r*(c*g-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],v=e[9],_=e[10],M=e[11],b=e[12],C=e[13],S=e[14],x=e[15],O=i*p-r*f,I=i*m-l*f,w=i*h-c*f,L=r*m-l*p,N=r*h-c*p,z=l*h-c*m,T=g*C-v*b,P=g*S-_*b,K=g*x-M*b,G=v*S-_*C,Z=v*x-M*C,pe=_*x-M*S,xe=O*pe-I*Z+w*G+L*K-N*P+z*T;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/xe;return e[0]=(p*pe-m*Z+h*G)*X,e[1]=(l*Z-r*pe-c*G)*X,e[2]=(C*z-S*N+x*L)*X,e[3]=(_*N-v*z-M*L)*X,e[4]=(m*K-f*pe-h*P)*X,e[5]=(i*pe-l*K+c*P)*X,e[6]=(S*w-b*z-x*I)*X,e[7]=(g*z-_*w+M*I)*X,e[8]=(f*Z-p*K+h*T)*X,e[9]=(r*K-i*Z-c*T)*X,e[10]=(b*N-C*w+x*O)*X,e[11]=(v*w-g*N-M*O)*X,e[12]=(p*P-f*G-m*T)*X,e[13]=(i*G-r*P+l*T)*X,e[14]=(C*I-b*L-S*O)*X,e[15]=(g*L-v*I+_*O)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+r,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,v=p+p,_=c*h,M=c*g,b=c*v,C=f*g,S=f*v,x=p*v,O=m*h,I=m*g,w=m*v,L=r.x,N=r.y,z=r.z;return l[0]=(1-(C+x))*L,l[1]=(M+w)*L,l[2]=(b-I)*L,l[3]=0,l[4]=(M-w)*N,l[5]=(1-(_+x))*N,l[6]=(S+O)*N,l[7]=0,l[8]=(b+I)*z,l[9]=(S-O)*z,l[10]=(1-(_+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let f=_s.set(l[0],l[1],l[2]).length();const p=_s.set(l[4],l[5],l[6]).length(),m=_s.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Si.copy(this);const h=1/f,g=1/p,v=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,i.setFromRotationMatrix(Si),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,f,p=Bi,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let b,C;if(m)b=c/(f-c),C=f*c/(f-c);else if(p===Bi)b=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===jc)b=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,p=Bi,m=!1){const h=this.elements,g=2/(i-e),v=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,C;if(m)b=1/(f-c),C=f/(f-c);else if(p===Bi)b=-2/(f-c),C=-(f+c)/(f-c);else if(p===jc)b=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Jc.prototype.isMatrix4=!0;let hn=Jc;const _s=new oe,Si=new hn,FE=new oe(0,0,0),BE=new oe(1,1,1),Za=new oe,pc=new oe,ei=new oe,m_=new hn,g_=new Bs;class Lr{constructor(e=0,i=0,r=0,l=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const __=new oe,vs=new Bs,ca=new hn,mc=new oe,zo=new oe,HE=new oe,GE=new Bs,v_=new oe(1,0,0),x_=new oe(0,1,0),S_=new oe(0,0,1),y_={type:"added"},VE={type:"removed"},xs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class ni extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new oe,i=new Lr,r=new Bs,l=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new st}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(S_,e)}translateOnAxis(e,i){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(S_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(zo,mc,this.up):ca.lookAt(mc,zo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ca),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y_),xs.child=e,this.dispatchEvent(xs),xs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VE),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y_),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),v=f(e.shapes),_=f(e.skeletons),M=f(e.animations),b=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new oe(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),x=this._getHandJoint(h,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&_>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Cd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=xt.workingColorSpace){return this.r=e,this.g=i,this.b=r,xt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=xt.workingColorSpace){if(e=DE(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Cd(f,c,e+1/3),this.g=Cd(f,c,e),this.b=Cd(f,c,e-1/3)}return xt.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=Vv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return xt.workingToColorSpace(Ln.copy(this),e),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=xt.workingColorSpace){xt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=g<=.5?v/(f+p):v/(2-f-p),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=xt.workingColorSpace){return xt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){xt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(_c);const r=yd(Ka.h,_c.h,i),l=yd(Ka.s,_c.s,i),c=yd(Ka.l,_c.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Nt;Nt.NAMES=Vv;class XE extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new oe,ua=new oe,wd=new oe,fa=new oe,Ss=new oe,ys=new oe,M_=new oe,Dd=new oe,Ud=new oe,Ld=new oe,Nd=new tn,Pd=new tn,Od=new tn;class bi{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){yi.subVectors(l,i),ua.subVectors(r,i),wd.subVectors(e,i);const f=yi.dot(yi),p=yi.dot(ua),m=yi.dot(wd),h=ua.dot(ua),g=ua.dot(wd),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const _=1/v,M=(h*m-p*g)*_,b=(f*g-p*m)*_;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,r,l,c,f,p,m){return this.getBarycoord(e,i,r,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(p,fa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Nd.setScalar(0),Pd.setScalar(0),Od.setScalar(0),Nd.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Nd,c.x),f.addScaledVector(Pd,c.y),f.addScaledVector(Od,c.z),f}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),ua.subVectors(e,i),yi.cross(ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),yi.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,p;Ss.subVectors(l,r),ys.subVectors(c,r),Dd.subVectors(e,r);const m=Ss.dot(Dd),h=ys.dot(Dd);if(m<=0&&h<=0)return i.copy(r);Ud.subVectors(e,l);const g=Ss.dot(Ud),v=ys.dot(Ud);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*h;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Ss,f);Ld.subVectors(e,c);const M=Ss.dot(Ld),b=ys.dot(Ld);if(b>=0&&M<=b)return i.copy(c);const C=M*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(ys,p);const S=g*b-M*v;if(S<=0&&v-g>=0&&M-b>=0)return M_.subVectors(c,l),p=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(M_,p);const x=1/(S+C+_);return f=C*x,p=_*x,i.copy(r).addScaledVector(Ss,f).addScaledVector(ys,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class el{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),xc.subVectors(this.max,Ho),Ms.subVectors(e.a,Ho),Es.subVectors(e.b,Ho),bs.subVectors(e.c,Ho),ja.subVectors(Es,Ms),Qa.subVectors(bs,Es),yr.subVectors(Ms,bs);let i=[0,-ja.z,ja.y,0,-Qa.z,Qa.y,0,-yr.z,yr.y,ja.z,0,-ja.x,Qa.z,0,-Qa.x,yr.z,0,-yr.x,-ja.y,ja.x,0,-Qa.y,Qa.x,0,-yr.y,yr.x,0];return!Id(i,Ms,Es,bs,xc)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,Ms,Es,bs,xc))?!1:(Sc.crossVectors(ja,Qa),i=[Sc.x,Sc.y,Sc.z],Id(i,Ms,Es,bs,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Mi=new oe,vc=new el,Ms=new oe,Es=new oe,bs=new oe,ja=new oe,Qa=new oe,yr=new oe,Ho=new oe,xc=new oe,Sc=new oe,Mr=new oe;function Id(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Mr.fromArray(s,c);const p=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),h=i.dot(Mr),g=r.dot(Mr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const dn=new oe,yc=new Tt;let WE=0;class Gi extends Nr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=l_,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kv extends Gi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Xv extends Gi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class va extends Gi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const qE=new el,Go=new oe,Fd=new oe;class lp{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Fd)),this.expandByPoint(Go.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const di=new hn,Bd=new ni,Ts=new oe,ti=new el,Vo=new el,yn=new oe;class ba extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AE(e)?Xv:kv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new va(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(yn.addVectors(ti.min,Vo.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Vo.max),ti.expandByPoint(yn)):(ti.expandByPoint(Vo.min),ti.expandByPoint(Vo.max))}ti.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)yn.fromBufferAttribute(p,h),m&&(Ts.fromBufferAttribute(e,h),yn.add(Ts)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new oe,m[T]=new oe;const h=new oe,g=new oe,v=new oe,_=new Tt,M=new Tt,b=new Tt,C=new oe,S=new oe;function x(T,P,K){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,K),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,P),b.fromBufferAttribute(c,K),g.sub(h),v.sub(h),M.sub(_),b.sub(_);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),p[T].add(C),p[P].add(C),p[K].add(C),m[T].add(S),m[P].add(S),m[K].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,P=O.length;T<P;++T){const K=O[T],G=K.start,Z=K.count;for(let pe=G,xe=G+Z;pe<xe;pe+=3)x(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const I=new oe,w=new oe,L=new oe,N=new oe;function z(T){L.fromBufferAttribute(l,T),N.copy(L);const P=p[T];I.copy(P),I.sub(L.multiplyScalar(L.dot(P))).normalize(),w.crossVectors(N,P);const G=w.dot(m[T])<0?-1:1;f.setXYZW(T,I.x,I.y,I.z,G)}for(let T=0,P=O.length;T<P;++T){const K=O[T],G=K.start,Z=K.count;for(let pe=G,xe=G+Z;pe<xe;pe+=3)z(e.getX(pe+0)),z(e.getX(pe+1)),z(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,g=new oe,v=new oe;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),C=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(g),m.add(g),h.add(g),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,v=p.normalized,_=new h.constructor(m.length*g);let M=0,b=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*g;for(let x=0;x<g;x++)_[b++]=h[M++]}return new Gi(_,g,v)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ba,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,v=h.length;g<v;g++){const _=h[g],M=e(_,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,_=h.length;v<_;v++){const M=h[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZE=0;class iu extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=ws,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=eh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$d&&(r.blendSrc=this.blendSrc),this.blendDst!==eh&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Tt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ha=new oe,zd=new oe,Mc=new oe,Ja=new oe,Hd=new oe,Ec=new oe,Gd=new oe;class KE{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){zd.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(zd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Mc),p=Ja.dot(this.direction),m=-Ja.dot(Mc),h=Ja.lengthSq(),g=Math.abs(1-f*f);let v,_,M,b;if(g>0)if(v=f*m-p,_=f*p-m,b=c*g,v>=0)if(_>=-b)if(_<=b){const C=1/g;v*=C,_*=C,M=v*(v+f*_+2*p)+_*(f*v+_+2*m)+h}else _=c,v=Math.max(0,-(f*_+p)),M=-v*v+_*(_+2*m)+h;else _=-c,v=Math.max(0,-(f*_+p)),M=-v*v+_*(_+2*m)+h;else _<=-b?(v=Math.max(0,-(-f*c+p)),_=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+h):_<=b?(v=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+h):(v=Math.max(0,-(f*c+p)),_=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+h);else _=f>0?-c:c,v=Math.max(0,-(f*_+p)),M=-v*v+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(zd).addScaledVector(Mc,_),M}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const r=ha.dot(this.direction),l=ha.dot(ha)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,r,l,c){Hd.subVectors(i,e),Ec.subVectors(r,e),Gd.crossVectors(Hd,Ec);let f=this.direction.dot(Gd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;Ja.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(Ja,Ec));if(m<0)return null;const h=p*this.direction.dot(Hd.cross(Ja));if(h<0||m+h>f)return null;const g=-p*Ja.dot(Gd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wv extends iu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const E_=new hn,Er=new KE,bc=new lp,b_=new oe,Tc=new oe,Ac=new oe,Rc=new oe,Vd=new oe,Cc=new oe,T_=new oe,wc=new oe;class Xi extends ni{constructor(e=new ba,i=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Cc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],v=c[m];g!==0&&(Vd.fromBufferAttribute(v,e),f?Cc.addScaledVector(Vd,g):Cc.addScaledVector(Vd.sub(i),g))}i.add(Cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(bc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(bc,b_)===null||Er.origin.distanceToSquared(b_)>(e.far-e.near)**2))&&(E_.copy(c).invert(),Er.copy(e.ray).applyMatrix4(E_),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,C=_.length;b<C;b++){const S=_[b],x=f[S.materialIndex],O=Math.max(S.start,M.start),I=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,L=I;w<L;w+=3){const N=p.getX(w),z=p.getX(w+1),T=p.getX(w+2);l=Dc(this,x,e,r,h,g,v,N,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=b,x=C;S<x;S+=3){const O=p.getX(S),I=p.getX(S+1),w=p.getX(S+2);l=Dc(this,f,e,r,h,g,v,O,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,C=_.length;b<C;b++){const S=_[b],x=f[S.materialIndex],O=Math.max(S.start,M.start),I=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,L=I;w<L;w+=3){const N=w,z=w+1,T=w+2;l=Dc(this,x,e,r,h,g,v,N,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=b,x=C;S<x;S+=3){const O=S,I=S+1,w=S+2;l=Dc(this,f,e,r,h,g,v,O,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function jE(s,e,i,r,l,c,f,p){let m;if(e.side===Wn?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,e.side===nr,p),m===null)return null;wc.copy(p),wc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(wc);return h<i.near||h>i.far?null:{distance:h,point:wc.clone(),object:s}}function Dc(s,e,i,r,l,c,f,p,m,h){s.getVertexPosition(p,Tc),s.getVertexPosition(m,Ac),s.getVertexPosition(h,Rc);const g=jE(s,e,i,r,Tc,Ac,Rc,T_);if(g){const v=new oe;bi.getBarycoord(T_,Tc,Ac,Rc,v),l&&(g.uv=bi.getInterpolatedAttribute(l,p,m,h,v,new Tt)),c&&(g.uv1=bi.getInterpolatedAttribute(c,p,m,h,v,new Tt)),f&&(g.normal=bi.getInterpolatedAttribute(f,p,m,h,v,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new oe,materialIndex:0};bi.getNormal(Tc,Ac,Rc,_.normal),g.face=_,g.barycoord=v}return g}class QE extends Bn{constructor(e=null,i=1,r=1,l,c,f,p,m,h=Rn,g=Rn,v,_){super(null,f,p,m,h,g,l,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new oe,JE=new oe,$E=new st;class Tr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=kd.subVectors(r,i).cross(JE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(kd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$E.getNormalMatrix(e),l=this.coplanarPoint(kd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new lp,eb=new Tt(.5,.5),Uc=new oe;class qv{constructor(e=new Tr,i=new Tr,r=new Tr,l=new Tr,c=new Tr,f=new Tr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Bi,r=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],v=c[5],_=c[6],M=c[7],b=c[8],C=c[9],S=c[10],x=c[11],O=c[12],I=c[13],w=c[14],L=c[15];if(l[0].setComponents(h-f,M-g,x-b,L-O).normalize(),l[1].setComponents(h+f,M+g,x+b,L+O).normalize(),l[2].setComponents(h+p,M+v,x+C,L+I).normalize(),l[3].setComponents(h-p,M-v,x-C,L-I).normalize(),r)l[4].setComponents(m,_,S,w).normalize(),l[5].setComponents(h-m,M-_,x-S,L-w).normalize();else if(l[4].setComponents(h-m,M-_,x-S,L-w).normalize(),i===Bi)l[5].setComponents(h+m,M+_,x+S,L+w).normalize();else if(i===jc)l[5].setComponents(m,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const i=eb.distanceTo(e.center);return br.radius=.7071067811865476+i,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yv extends Bn{constructor(e=[],i=Dr,r,l,c,f,p,m,h,g){super(e,i,r,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ps extends Bn{constructor(e,i,r=ki,l,c,f,p=Rn,m=Rn,h,g=ya,v=1){if(g!==ya&&g!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,c,f,p,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tb extends Ps{constructor(e,i=ki,r=Dr,l,c,f=Rn,p=Rn,m,h=ya){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tl extends ba{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new va(h,3)),this.setAttribute("normal",new va(g,3)),this.setAttribute("uv",new va(v,2));function b(C,S,x,O,I,w,L,N,z,T,P){const K=w/z,G=L/T,Z=w/2,pe=L/2,xe=N/2,X=z+1,F=T+1;let H=0,te=0;const me=new oe;for(let D=0;D<F;D++){const J=D*G-pe;for(let fe=0;fe<X;fe++){const be=fe*K-Z;me[C]=be*O,me[S]=J*I,me[x]=xe,h.push(me.x,me.y,me.z),me[C]=0,me[S]=0,me[x]=N>0?1:-1,g.push(me.x,me.y,me.z),v.push(fe/z),v.push(1-D/T),H+=1}}for(let D=0;D<T;D++)for(let J=0;J<z;J++){const fe=_+J+X*D,be=_+J+X*(D+1),Fe=_+(J+1)+X*(D+1),Ge=_+(J+1)+X*D;m.push(fe,be,Ge),m.push(be,Fe,Ge),te+=6}p.addGroup(M,te,P),M+=te,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nl extends ba{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,g=m+1,v=e/p,_=i/m,M=[],b=[],C=[],S=[];for(let x=0;x<g;x++){const O=x*_-f;for(let I=0;I<h;I++){const w=I*v-c;b.push(w,-O,0),C.push(0,0,1),S.push(I/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<p;O++){const I=O+h*x,w=O+h*(x+1),L=O+1+h*(x+1),N=O+1+h*x;M.push(I,w,N),M.push(w,L,N)}this.setIndex(M),this.setAttribute("position",new va(b,3)),this.setAttribute("normal",new va(C,3)),this.setAttribute("uv",new va(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(A_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(A_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function A_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Kv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const ib={clone:Os,merge:Fn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends iu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Tt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sb extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ob extends iu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends iu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lc=new oe,Nc=new Bs,Pi=new oe;class jv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Nc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Nc,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Lc,Nc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Nc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new oe,R_=new Tt,C_=new Tt;class Ei extends jv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,R_,C_),i.subVectors(C_,R_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Sd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cp extends jv{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const As=-90,Rs=1;class cb extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new Ei(As,Rs,e,i);c.layers=this.layers,this.add(c);const f=new Ei(As,Rs,e,i);f.layers=this.layers,this.add(f);const p=new Ei(As,Rs,e,i);p.layers=this.layers,this.add(p);const m=new Ei(As,Rs,e,i);m.layers=this.layers,this.add(m);const h=new Ei(As,Rs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class ub extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const pp=class pp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};pp.prototype.isMatrix2=!0;let w_=pp;function D_(s,e,i,r){const l=db(r);switch(i){case Iv:return s*e;case Bv:return s*e/l.components*l.byteLength;case np:return s*e/l.components*l.byteLength;case Ur:return s*e*2/l.components*l.byteLength;case ip:return s*e*2/l.components*l.byteLength;case Fv:return s*e*3/l.components*l.byteLength;case Ti:return s*e*4/l.components*l.byteLength;case ap:return s*e*4/l.components*l.byteLength;case zc:case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:case hh:return Math.max(s,16)*Math.max(e,8)/4;case uh:case dh:return Math.max(s,8)*Math.max(e,8)/2;case ph:case mh:case _h:case vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gh:case qc:case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Oh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yc:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function db(s){switch(s){case pi:case Lv:return{byteLength:1,components:1};case Zo:case Nv:case Sa:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case ki:case $h:case Fi:return{byteLength:4,components:1};case Pv:case Ov:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function hb(s){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,v=h.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,h,g),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const g=m.array,v=m.updateRanges;if(s.bindBuffer(h,p),v.length===0)s.bufferSubData(h,0,g);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];s.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
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
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sb=`#ifdef USE_AOMAP
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
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zb=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tT=`#ifdef USE_GRADIENTMAP
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
}`,nT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,sT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,dT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ET=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bT=`#if defined( USE_POINTS_UV )
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
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
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
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
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
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,$T=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,y1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M1=`#define DISTANCE
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
}`,E1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,D1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,L1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I1=`#define PHONG
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
}`,F1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,B1=`#define STANDARD
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
}`,z1=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,H1=`#define TOON
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
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,V1=`uniform float size;
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
}`,k1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,W1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,q1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:_b,alphatest_fragment:vb,alphatest_pars_fragment:xb,aomap_fragment:Sb,aomap_pars_fragment:yb,batching_pars_vertex:Mb,batching_vertex:Eb,begin_vertex:bb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Pb,color_pars_vertex:Ob,color_vertex:Ib,common:Fb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:zb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:Zb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:sT,envmap_vertex:jb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:eT,gradientmap_pars_fragment:tT,lightmap_pars_fragment:nT,lights_lambert_fragment:iT,lights_lambert_pars_fragment:aT,lights_pars_begin:rT,lights_toon_fragment:oT,lights_toon_pars_fragment:lT,lights_phong_fragment:cT,lights_phong_pars_fragment:uT,lights_physical_fragment:fT,lights_physical_pars_fragment:dT,lights_fragment_begin:hT,lights_fragment_maps:pT,lights_fragment_end:mT,lightprobes_pars_fragment:gT,logdepthbuf_fragment:_T,logdepthbuf_pars_fragment:vT,logdepthbuf_pars_vertex:xT,logdepthbuf_vertex:ST,map_fragment:yT,map_pars_fragment:MT,map_particle_fragment:ET,map_particle_pars_fragment:bT,metalnessmap_fragment:TT,metalnessmap_pars_fragment:AT,morphinstance_vertex:RT,morphcolor_vertex:CT,morphnormal_vertex:wT,morphtarget_pars_vertex:DT,morphtarget_vertex:UT,normal_fragment_begin:LT,normal_fragment_maps:NT,normal_pars_fragment:PT,normal_pars_vertex:OT,normal_vertex:IT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:zT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:VT,packing:kT,premultiplied_alpha_fragment:XT,project_vertex:WT,dithering_fragment:qT,dithering_pars_fragment:YT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:KT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:a1,specularmap_pars_fragment:r1,tonemapping_fragment:s1,tonemapping_pars_fragment:o1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:h1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:_1,cube_vert:v1,cube_frag:x1,depth_vert:S1,depth_frag:y1,distance_vert:M1,distance_frag:E1,equirect_vert:b1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:R1,meshbasic_vert:C1,meshbasic_frag:w1,meshlambert_vert:D1,meshlambert_frag:U1,meshmatcap_vert:L1,meshmatcap_frag:N1,meshnormal_vert:P1,meshnormal_frag:O1,meshphong_vert:I1,meshphong_frag:F1,meshphysical_vert:B1,meshphysical_frag:z1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:k1,shadow_vert:X1,shadow_frag:W1,sprite_vert:q1,sprite_frag:Y1},Ie={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Fn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Fn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Fn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Fn([Ie.lights,Ie.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pc={r:0,b:0,g:0},Z1=new hn,Jv=new st;Jv.set(-1,0,0,0,1,0,0,0,1);function K1(s,e,i,r,l,c){const f=new Nt(0);let p=l===!0?0:1,m,h,g=null,v=0,_=null;function M(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const w=O.backgroundBlurriness>0;I=e.get(I,w)}return I}function b(O){let I=!1;const w=M(O);w===null?S(f,p):w&&w.isColor&&(S(w,1),I=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,I){const w=M(I);w&&(w.isCubeTexture||w.mapping===nu)?(h===void 0&&(h=new Xi(new tl(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Os(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Jv),h.material.toneMapped=xt.getTransfer(w.colorSpace)!==It,(g!==w||v!==w.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,g=w,v=w.version,_=s.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Xi(new nl(2,2),new Ri({name:"BackgroundMaterial",uniforms:Os(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=xt.getTransfer(w.colorSpace)!==It,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,_=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function S(O,I){O.getRGB(Pc,Kv(s)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(O,I=1){f.set(O),p=I,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,S(f,p)},render:b,addToRenderList:C,dispose:x}}function j1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function p(G,Z,pe,xe,X){let F=!1;const H=v(G,xe,pe,Z);c!==H&&(c=H,h(c.object)),F=M(G,xe,pe,X),F&&b(G,xe,pe,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,w(G,Z,pe,xe),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function v(G,Z,pe,xe){const X=xe.wireframe===!0;let F=r[Z.id];F===void 0&&(F={},r[Z.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let te=F[H];te===void 0&&(te={},F[H]=te);let me=te[pe.id];me===void 0&&(me={},te[pe.id]=me);let D=me[X];return D===void 0&&(D=_(m()),me[X]=D),D}function _(G){const Z=[],pe=[],xe=[];for(let X=0;X<i;X++)Z[X]=0,pe[X]=0,xe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:pe,attributeDivisors:xe,object:G,attributes:{},index:null}}function M(G,Z,pe,xe){const X=c.attributes,F=Z.attributes;let H=0;const te=pe.getAttributes();for(const me in te)if(te[me].location>=0){const J=X[me];let fe=F[me];if(fe===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(fe=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(fe=G.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;H++}return c.attributesNum!==H||c.index!==xe}function b(G,Z,pe,xe){const X={},F=Z.attributes;let H=0;const te=pe.getAttributes();for(const me in te)if(te[me].location>=0){let J=F[me];J===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(J=G.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),X[me]=fe,H++}c.attributes=X,c.attributesNum=H,c.index=xe}function C(){const G=c.newAttributes;for(let Z=0,pe=G.length;Z<pe;Z++)G[Z]=0}function S(G){x(G,0)}function x(G,Z){const pe=c.newAttributes,xe=c.enabledAttributes,X=c.attributeDivisors;pe[G]=1,xe[G]===0&&(s.enableVertexAttribArray(G),xe[G]=1),X[G]!==Z&&(s.vertexAttribDivisor(G,Z),X[G]=Z)}function O(){const G=c.newAttributes,Z=c.enabledAttributes;for(let pe=0,xe=Z.length;pe<xe;pe++)Z[pe]!==G[pe]&&(s.disableVertexAttribArray(pe),Z[pe]=0)}function I(G,Z,pe,xe,X,F,H){H===!0?s.vertexAttribIPointer(G,Z,pe,X,F):s.vertexAttribPointer(G,Z,pe,xe,X,F)}function w(G,Z,pe,xe){C();const X=xe.attributes,F=pe.getAttributes(),H=Z.defaultAttributeValues;for(const te in F){const me=F[te];if(me.location>=0){let D=X[te];if(D===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(D=G.instanceColor)),D!==void 0){const J=D.normalized,fe=D.itemSize,be=e.get(D);if(be===void 0)continue;const Fe=be.buffer,Ge=be.type,ie=be.bytesPerElement,Te=Ge===s.INT||Ge===s.UNSIGNED_INT||D.gpuType===$h;if(D.isInterleavedBufferAttribute){const ye=D.data,je=ye.stride,it=D.offset;if(ye.isInstancedInterleavedBuffer){for(let Qe=0;Qe<me.locationSize;Qe++)x(me.location+Qe,ye.meshPerAttribute);G.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)S(me.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Qe=0;Qe<me.locationSize;Qe++)I(me.location+Qe,fe/me.locationSize,Ge,J,je*ie,(it+fe/me.locationSize*Qe)*ie,Te)}else{if(D.isInstancedBufferAttribute){for(let ye=0;ye<me.locationSize;ye++)x(me.location+ye,D.meshPerAttribute);G.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ye=0;ye<me.locationSize;ye++)S(me.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let ye=0;ye<me.locationSize;ye++)I(me.location+ye,fe/me.locationSize,Ge,J,fe*ie,fe/me.locationSize*ye*ie,Te)}}else if(H!==void 0){const J=H[te];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(me.location,J);break;case 3:s.vertexAttrib3fv(me.location,J);break;case 4:s.vertexAttrib4fv(me.location,J);break;default:s.vertexAttrib1fv(me.location,J)}}}}O()}function L(){P();for(const G in r){const Z=r[G];for(const pe in Z){const xe=Z[pe];for(const X in xe){const F=xe[X];for(const H in F)g(F[H].object),delete F[H];delete xe[X]}}delete r[G]}}function N(G){if(r[G.id]===void 0)return;const Z=r[G.id];for(const pe in Z){const xe=Z[pe];for(const X in xe){const F=xe[X];for(const H in F)g(F[H].object),delete F[H];delete xe[X]}}delete r[G.id]}function z(G){for(const Z in r){const pe=r[Z];for(const xe in pe){const X=pe[xe];if(X[G.id]===void 0)continue;const F=X[G.id];for(const H in F)g(F[H].object),delete F[H];delete X[G.id]}}}function T(G){for(const Z in r){const pe=r[Z],xe=G.isInstancedMesh===!0?G.id:0,X=pe[xe];if(X!==void 0){for(const F in X){const H=X[F];for(const te in H)g(H[te].object),delete H[te];delete X[F]}delete pe[xe],Object.keys(pe).length===0&&delete r[Z]}}}function P(){K(),f=!0,c!==l&&(c=l,h(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:K,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function Q1(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function f(m,h,g){g!==0&&(s.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let _=0;for(let M=0;M<g;M++)_+=h[M];i.update(_,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function J1(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ti&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==pi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Fi&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(nt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:w,maxSamples:L,samples:N}}function $1(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Tr,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,x=s.get(v);if(!l||b===null||b.length===0||c&&!S)c?g(null):h();else{const O=c?0:r,I=O*4;let w=x.clippingState||null;m.value=w,w=g(b,_,I,M);for(let L=0;L!==I;++L)w[L]=i[L];x.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,M,b){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=m.value,b!==!0||S===null){const x=M+C*4,O=_.matrixWorldInverse;p.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,w=M;I!==C;++I,w+=4)f.copy(v[I]).applyMatrix4(O,p),f.normal.toArray(S,w),S[w+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const tr=4,U_=[.125,.215,.35,.446,.526,.582],Rr=20,eA=256,ko=new cp,L_=new Nt;let Xd=null,Wd=0,qd=0,Yd=!1;const tA=new oe;class N_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=tA}=c;Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Wd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Sa,format:Ti,colorSpace:Zc,depthBuffer:!1},l=P_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nA(c)),this._blurMaterial=aA(c,e,i),this._ggxMaterial=iA(c,e,i)}return l}_compileMaterial(e){const i=new Xi(new ba,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,r,l,c){const m=new Ei(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(L_),v.toneMapping=zi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new tl,new Wv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,x=!0):(S.color.copy(L_),x=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):w===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const L=this._cubeSize;Cs(l,w*L,I>2?L:0,L,L),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=_,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Dr||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,ko)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=0+h*1.25,M=v*_,{_lodMax:b}=this,C=this._sizeLods[r],S=3*C*(r>b-tr?r-b+tr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Cs(c,S,x,3*C,2*C),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Cs(e,S,x,3*C,2*C),l.setRenderTarget(e),l.render(p,ko)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=h;const _=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),C=c/b,S=isFinite(c)?1+Math.floor(g*C):Rr;S>Rr&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rr}`);const x=[];let O=0;for(let z=0;z<Rr;++z){const T=z/C,P=Math.exp(-T*T/2);x.push(P),z===0?O+=P:z<S&&(O+=2*P)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:I}=this;_.dTheta.value=b,_.mipInt.value=I-r;const w=this._sizeLods[l],L=3*w*(l>I-tr?l-I+tr:0),N=4*(this._cubeSize-w);Cs(i,L,N,3*w,2*w),m.setRenderTarget(i),m.render(v,ko)}}function nA(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+U_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>s-tr?m=U_[f-s+tr-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,C=3,S=2,x=1,O=new Float32Array(C*b*M),I=new Float32Array(S*b*M),w=new Float32Array(x*b*M);for(let N=0;N<M;N++){const z=N%3*2/3-1,T=N>2?0:-1,P=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];O.set(P,C*b*N),I.set(_,S*b*N);const K=[N,N,N,N,N,N];w.set(K,x*b*N)}const L=new ba;L.setAttribute("position",new Gi(O,C)),L.setAttribute("uv",new Gi(I,S)),L.setAttribute("faceIndex",new Gi(w,x)),r.push(new Xi(L,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function P_(s,e,i){const r=new Hi(s,e,i);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function iA(s,e,i){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function aA(s,e,i){const r=new Float32Array(Rr),l=new oe(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:au(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function O_(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function I_(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}class $v extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),c=new Ri({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ga});c.uniforms.tEquirect.value=i;const f=new Xi(l,c),p=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Nn),new cb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function rA(s){let e=new WeakMap,i=new WeakMap,r=null;function l(_,M=!1){return _==null?null:M?f(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===_d||M===vd)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new $v(b.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const M=_.mapping,b=M===_d||M===vd,C=M===Dr||M===Ns;if(b||C){let S=i.get(_);const x=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new N_(s)),S=b?r.fromEquirectangular(_,S):r.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),S.texture;if(S!==void 0)return S.texture;{const O=_.image;return b&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new N_(s)),S=b?r.fromEquirectangular(_):r.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function p(_,M){return M===_d?_.mapping=Dr:M===vd&&(_.mapping=Ns),_}function m(_){let M=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&M++;return M===b}function h(_){const M=_.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function sA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ds("WebGLRenderer: "+r+" extension not supported."),l}}}function oA(s,e,i,r){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER)}function h(v){const _=[],M=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const O=M.array;C=M.version;for(let I=0,w=O.length;I<w;I+=3){const L=O[I+0],N=O[I+1],z=O[I+2];_.push(L,N,N,z,z,L)}}else{const O=b.array;C=b.version;for(let I=0,w=O.length/3-1;I<w;I+=3){const L=I+0,N=I+1,z=I+2;_.push(L,N,N,z,z,L)}}const S=new(b.count>=65535?Xv:kv)(_,1);S.version=C;const x=c.get(v);x&&e.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:g}}function lA(s,e,i){let r;function l(v){r=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,_){s.drawElements(r,_,c,v*f),i.update(_,r,1)}function h(v,_,M){M!==0&&(s.drawElementsInstanced(r,_,c,v*f,M),i.update(_,r,M))}function g(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,M);let C=0;for(let S=0;S<M;S++)C+=_[S];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function cA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Et("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function uA(s,e,i){const r=new WeakMap,l=new tn;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let K=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",K)};var M=K;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let L=p.attributes.position.count*w,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const z=new Float32Array(L*N*4*v),T=new Hv(z,L,N,v);T.type=Fi,T.needsUpdate=!0;const P=w*4;for(let G=0;G<v;G++){const Z=x[G],pe=O[G],xe=I[G],X=L*N*4*G;for(let F=0;F<Z.count;F++){const H=F*P;b===!0&&(l.fromBufferAttribute(Z,F),z[X+H+0]=l.x,z[X+H+1]=l.y,z[X+H+2]=l.z,z[X+H+3]=0),C===!0&&(l.fromBufferAttribute(pe,F),z[X+H+4]=l.x,z[X+H+5]=l.y,z[X+H+6]=l.z,z[X+H+7]=0),S===!0&&(l.fromBufferAttribute(xe,F),z[X+H+8]=l.x,z[X+H+9]=l.y,z[X+H+10]=l.z,z[X+H+11]=xe.itemSize===4?l.w:1)}}_={count:v,texture:T,size:new Tt(L,N)},r.set(p,_),p.addEventListener("dispose",K)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function fA(s,e,i,r,l){let c=new WeakMap;function f(h){const g=l.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return _}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const dA={[bv]:"LINEAR_TONE_MAPPING",[Tv]:"REINHARD_TONE_MAPPING",[Av]:"CINEON_TONE_MAPPING",[Rv]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Dv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function hA(s,e,i,r,l,c){const f=new Hi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Ps(e,i):void 0}),p=new Hi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),m=new ba;m.setAttribute("position",new va([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new va([0,2,0,0,2,0],2));const h=new sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Xi(m,h),v=new cp(-1,1,1,-1,0,1);let _=null,M=null,b=!1,C,S=null,x=[],O=!1;this.setSize=function(I,w){f.setSize(I,w),p.setSize(I,w);for(let L=0;L<x.length;L++){const N=x[L];N.setSize&&N.setSize(I,w)}},this.setEffects=function(I){x=I,O=x.length>0&&x[0].isRenderPass===!0;const w=f.width,L=f.height;for(let N=0;N<x.length;N++){const z=x[N];z.setSize&&z.setSize(w,L)}},this.begin=function(I,w){if(b||I.toneMapping===zi&&x.length===0)return!1;if(S=w,w!==null){const L=w.width,N=w.height;(f.width!==L||f.height!==N)&&this.setSize(L,N)}return O===!1&&I.setRenderTarget(f),C=I.toneMapping,I.toneMapping=zi,!0},this.hasRenderPass=function(){return O},this.end=function(I,w){I.toneMapping=C,b=!0;let L=f,N=p;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(I,N,L,w),T.needsSwap!==!1)){const P=L;L=N,N=P}}if(_!==I.outputColorSpace||M!==I.toneMapping){_=I.outputColorSpace,M=I.toneMapping,h.defines={},xt.getTransfer(_)===It&&(h.defines.SRGB_TRANSFER="");const z=dA[M];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,I.setRenderTarget(S),I.render(g,v),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const ex=new Bn,Gh=new Ps(1,1),tx=new Hv,nx=new IE,ix=new Yv,F_=[],B_=[],z_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function zs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=F_[l];if(c===void 0&&(c=new Float32Array(l),F_[l]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,s[f].toArray(c,p)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function ru(s,e){let i=B_[e];i===void 0&&(i=new Int32Array(e),B_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function pA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function mA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function gA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function _A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function vA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;G_.set(r),s.uniformMatrix2fv(this.addr,!1,G_),_n(i,r)}}function xA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;H_.set(r),s.uniformMatrix3fv(this.addr,!1,H_),_n(i,r)}}function SA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;z_.set(r),s.uniformMatrix4fv(this.addr,!1,z_),_n(i,r)}}function yA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function MA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function EA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function bA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function TA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function wA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Gh.compareFunction=i.isReversedDepthBuffer()?sp:rp,c=Gh):c=ex,i.setTexture2D(e||c,l)}function DA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||nx,l)}function UA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ix,l)}function LA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||tx,l)}function NA(s){switch(s){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return xA;case 35676:return SA;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return LA}}function PA(s,e){s.uniform1fv(this.addr,e)}function OA(s,e){const i=zs(e,this.size,2);s.uniform2fv(this.addr,i)}function IA(s,e){const i=zs(e,this.size,3);s.uniform3fv(this.addr,i)}function FA(s,e){const i=zs(e,this.size,4);s.uniform4fv(this.addr,i)}function BA(s,e){const i=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function zA(s,e){const i=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function HA(s,e){const i=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function GA(s,e){s.uniform1iv(this.addr,e)}function VA(s,e){s.uniform2iv(this.addr,e)}function kA(s,e){s.uniform3iv(this.addr,e)}function XA(s,e){s.uniform4iv(this.addr,e)}function WA(s,e){s.uniform1uiv(this.addr,e)}function qA(s,e){s.uniform2uiv(this.addr,e)}function YA(s,e){s.uniform3uiv(this.addr,e)}function ZA(s,e){s.uniform4uiv(this.addr,e)}function KA(s,e,i){const r=this.cache,l=e.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Gh:f=ex;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function jA(s,e,i){const r=this.cache,l=e.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||nx,c[f])}function QA(s,e,i){const r=this.cache,l=e.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ix,c[f])}function JA(s,e,i){const r=this.cache,l=e.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||tx,c[f])}function $A(s){switch(s){case 5126:return PA;case 35664:return OA;case 35665:return IA;case 35666:return FA;case 35674:return BA;case 35675:return zA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return kA;case 35669:case 35673:return XA;case 5125:return WA;case 36294:return qA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}class eR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=NA(i.type)}}class tR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$A(i.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function V_(s,e){s.seq.push(e),s.map[e.id]=e}function iR(s,e,i){const r=s.name,l=r.length;for(Zd.lastIndex=0;;){const c=Zd.exec(r),f=Zd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){V_(i,h===void 0?new eR(p,s,e):new tR(p,s,e));break}else{let v=i.map[p];v===void 0&&(v=new nR(p),V_(i,v)),i=v}}}class kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);iR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function k_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const aR=37297;let rR=0;function sR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const X_=new st;function oR(s){xt._getMatrix(X_,xt.workingColorSpace,s);const e=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(xt.getTransfer(s)){case Kc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function W_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+sR(s.getShaderSource(e),p)}else return c}function lR(s,e){const i=oR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const cR={[bv]:"Linear",[Tv]:"Reinhard",[Av]:"Cineon",[Rv]:"ACESFilmic",[wv]:"AgX",[Dv]:"Neutral",[Cv]:"Custom"};function uR(s,e){const i=cR[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new oe;function fR(){xt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function hR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function pR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:p}}return i}function qo(s){return s!==""}function q_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(s){return s.replace(mR,_R)}const gR=new Map;function _R(s,e){let i=ht[e];if(i===void 0){const r=gR.get(e);if(r!==void 0)i=ht[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vh(i)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(s){return s.replace(vR,xR)}function xR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SR={[Bc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function yR(s){return SR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MR={[Dr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function ER(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":MR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const bR={[Ns]:"ENVMAP_MODE_REFRACTION"};function TR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AR={[Ev]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function RR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":AR[s.combine]||"ENVMAP_BLENDING_NONE"}function CR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function wR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=yR(i),h=ER(i),g=TR(i),v=RR(i),_=CR(i),M=dR(i),b=hR(c),C=l.createProgram();let S,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),x.length>0&&(x+=`
`)):(S=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),x=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zi?"#define TONE_MAPPING":"",i.toneMapping!==zi?ht.tonemapping_pars_fragment:"",i.toneMapping!==zi?uR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,lR("linearToOutputTexel",i.outputColorSpace),fR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=Vh(f),f=q_(f,i),f=Y_(f,i),p=Vh(p),p=q_(p,i),p=Y_(p,i),f=Z_(f),p=Z_(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=O+S+f,w=O+x+p,L=k_(l,l.VERTEX_SHADER,I),N=k_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,L),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",pe=l.getShaderInfoLog(L)||"",xe=l.getShaderInfoLog(N)||"",X=Z.trim(),F=pe.trim(),H=xe.trim();let te=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,L,N);else{const D=W_(l,L,"vertex"),J=W_(l,N,"fragment");Et("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+D+`
`+J)}else X!==""?nt("WebGLProgram: Program Info Log:",X):(F===""||H==="")&&(me=!1);me&&(G.diagnostics={runnable:te,programLog:X,vertexShader:{log:F,prefix:S},fragmentShader:{log:H,prefix:x}})}l.deleteShader(L),l.deleteShader(N),T=new kc(l,C),P=pR(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(C,aR)),K},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=N,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new LR(e),i.set(e,r)),r}}class LR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function NR(s){return s===Ur||s===qc||s===Yc}function PR(s,e,i,r,l,c){const f=new Gv,p=new UR,m=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,P,K,G,Z,pe){const xe=G.fog,X=Z.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||F,H),me=te&&te.mapping===nu?te.image.height:null,D=M[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=J!==void 0?J.length:0;let be=0;X.morphAttributes.position!==void 0&&(be=1),X.morphAttributes.normal!==void 0&&(be=2),X.morphAttributes.color!==void 0&&(be=3);let Fe,Ge,ie,Te;if(D){const ke=Ii[D];Fe=ke.vertexShader,Ge=ke.fragmentShader}else{Fe=T.vertexShader,Ge=T.fragmentShader;const ke=p.getVertexShaderStage(T),wt=p.getFragmentShaderStage(T);p.update(T,ke,wt),ie=ke.id,Te=wt.id}const ye=s.getRenderTarget(),je=s.state.buffers.depth.getReversed(),it=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,Wt=!!T.map,ut=!!T.matcap,At=!!te,Mt=!!T.aoMap,vt=!!T.lightMap,Rt=!!T.bumpMap&&T.wireframe===!1,nn=!!T.normalMap,an=!!T.displacementMap,ln=!!T.emissiveMap,Gt=!!T.metalnessMap,Jt=!!T.roughnessMap,Y=T.anisotropy>0,Cn=T.clearcoat>0,Ct=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,j=T.transmission>0,$=Y&&!!T.anisotropyMap,de=Cn&&!!T.clearcoatMap,Ae=Cn&&!!T.clearcoatNormalMap,De=Cn&&!!T.clearcoatRoughnessMap,ue=U&&!!T.iridescenceMap,ge=U&&!!T.iridescenceThicknessMap,Re=E&&!!T.sheenColorMap,We=E&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,Le=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Je=j&&!!T.transmissionMap,at=j&&!!T.thicknessMap,k=!!T.gradientMap,we=!!T.alphaMap,ve=T.alphaTest>0,Ue=!!T.alphaHash,Pe=!!T.extensions;let Ee=zi;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const qe={shaderID:D,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:Ge,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:it,instancingColor:it&&Z.instanceColor!==null,instancingMorph:it&&Z.morphTexture!==null,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:ut,envMap:At,envMapMode:At&&te.mapping,envMapCubeUVHeight:me,aoMap:Mt,lightMap:vt,bumpMap:Rt,normalMap:nn,displacementMap:an,emissiveMap:ln,normalMapObjectSpace:nn&&T.normalMapType===xE,normalMapTangentSpace:nn&&T.normalMapType===s_,packedNormalMap:nn&&T.normalMapType===s_&&NR(T.normalMap.format),metalnessMap:Gt,roughnessMap:Jt,anisotropy:Y,anisotropyMap:$,clearcoat:Cn,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,dispersion:Ct,iridescence:U,iridescenceMap:ue,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Re,sheenRoughnessMap:We,specularMap:Ce,specularColorMap:Le,specularIntensityMap:Ze,transmission:j,transmissionMap:Je,thicknessMap:at,gradientMap:k,opaque:T.transparent===!1&&T.blending===ws&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:ve,alphaHash:Ue,combine:T.combine,mapUv:Wt&&b(T.map.channel),aoMapUv:Mt&&b(T.aoMap.channel),lightMapUv:vt&&b(T.lightMap.channel),bumpMapUv:Rt&&b(T.bumpMap.channel),normalMapUv:nn&&b(T.normalMap.channel),displacementMapUv:an&&b(T.displacementMap.channel),emissiveMapUv:ln&&b(T.emissiveMap.channel),metalnessMapUv:Gt&&b(T.metalnessMap.channel),roughnessMapUv:Jt&&b(T.roughnessMap.channel),anisotropyMapUv:$&&b(T.anisotropyMap.channel),clearcoatMapUv:de&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&b(T.sheenRoughnessMap.channel),specularMapUv:Ce&&b(T.specularMap.channel),specularColorMapUv:Le&&b(T.specularColorMap.channel),specularIntensityMapUv:Ze&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:at&&b(T.thicknessMap.channel),alphaMapUv:we&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(nn||Y),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!X.attributes.uv&&(Wt||we),fog:!!xe,useFog:T.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&nn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:je,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:be,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&xt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&xt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pa,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const K in T.defines)P.push(K),P.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(x(P,T),O(P,T),P.push(s.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function x(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function O(T,P){f.disableAll(),P.instancing&&f.enable(0),P.instancingColor&&f.enable(1),P.instancingMorph&&f.enable(2),P.matcap&&f.enable(3),P.envMap&&f.enable(4),P.normalMapObjectSpace&&f.enable(5),P.normalMapTangentSpace&&f.enable(6),P.clearcoat&&f.enable(7),P.iridescence&&f.enable(8),P.alphaTest&&f.enable(9),P.vertexColors&&f.enable(10),P.vertexAlphas&&f.enable(11),P.vertexUv1s&&f.enable(12),P.vertexUv2s&&f.enable(13),P.vertexUv3s&&f.enable(14),P.vertexTangents&&f.enable(15),P.anisotropy&&f.enable(16),P.alphaHash&&f.enable(17),P.batching&&f.enable(18),P.dispersion&&f.enable(19),P.batchingColor&&f.enable(20),P.gradientMap&&f.enable(21),P.packedNormalMap&&f.enable(22),P.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reversedDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.decodeVideoTextureEmissive&&f.enable(20),P.alphaToCoverage&&f.enable(21),P.numLightProbeGrids>0&&f.enable(22),P.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function I(T){const P=M[T.type];let K;if(P){const G=Ii[P];K=ib.clone(G.uniforms)}else K=T.uniforms;return K}function w(T,P){let K=g.get(P);return K!==void 0?++K.usedTimes:(K=new wR(s,P,T,l),h.push(K),g.set(P,K)),K}function L(T){if(--T.usedTimes===0){const P=h.indexOf(T);h[P]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:w,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:z}}function OR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function IR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function j_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Q_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function p(_,M,b,C,S,x){let O=s[e];return O===void 0?(O={id:_.id,object:_,geometry:M,material:b,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:S,group:x},s[e]=O):(O.id=_.id,O.object=_,O.geometry=M,O.material=b,O.materialVariant=f(_),O.groupOrder=C,O.renderOrder=_.renderOrder,O.z=S,O.group=x),e++,O}function m(_,M,b,C,S,x){const O=p(_,M,b,C,S,x);b.transmission>0?r.push(O):b.transparent===!0?l.push(O):i.push(O)}function h(_,M,b,C,S,x){const O=p(_,M,b,C,S,x);b.transmission>0?r.unshift(O):b.transparent===!0?l.unshift(O):i.unshift(O)}function g(_,M,b){i.length>1&&i.sort(_||IR),r.length>1&&r.sort(M||j_),l.length>1&&l.sort(M||j_),b&&(i.reverse(),r.reverse(),l.reverse())}function v(){for(let _=e,M=s.length;_<M;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:v,sort:g}}function FR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Q_,s.set(r,[f])):l>=c.length?(f=new Q_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function BR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Nt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function zR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let HR=0;function GR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VR(s){const e=new BR,i=zR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const l=new oe,c=new hn,f=new hn;function p(h){let g=0,v=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,b=0,C=0,S=0,x=0,O=0,I=0,w=0,L=0,N=0,z=0;h.sort(GR);for(let P=0,K=h.length;P<K;P++){const G=h[P],Z=G.color,pe=G.intensity,xe=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ur?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Z.r*pe,v+=Z.g*pe,_+=Z.b*pe;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],pe);z++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[M]=te,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=G.shadow.matrix,O++}r.directional[M]=F,M++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(Z).multiplyScalar(pe),F.distance=xe,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[C]=F;const H=G.shadow;if(G.map&&(r.spotLightMap[L]=G.map,L++,H.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[C]=H.matrix,G.castShadow){const te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[C]=te,r.spotShadowMap[C]=X,w++}C++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy(Z).multiplyScalar(pe),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=F,S++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[b]=te,r.pointShadowMap[b]=X,r.pointShadowMatrix[b]=G.shadow.matrix,I++}r.point[b]=F,b++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(pe),F.groundColor.copy(G.groundColor).multiplyScalar(pe),r.hemi[x]=F,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==O||T.numPointShadows!==I||T.numSpotShadows!==w||T.numSpotMaps!==L||T.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=z,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=O,T.numPointShadows=I,T.numSpotShadows=w,T.numSpotMaps=L,T.numLightProbes=z,r.version=HR++)}function m(h,g){let v=0,_=0,M=0,b=0,C=0;const S=g.matrixWorldInverse;for(let x=0,O=h.length;x<O;x++){const I=h[x];if(I.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),v++}else if(I.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),f.identity(),c.copy(I.matrixWorld),c.premultiply(S),f.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),b++}else if(I.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),_++}else if(I.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function J_(s){const e=new VR(s),i=[],r=[],l=[];function c(_){v.camera=_,i.length=0,r.length=0,l.length=0}function f(_){i.push(_)}function p(_){r.push(_)}function m(_){l.push(_)}function h(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function kR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new J_(s),e.set(l,[p])):c>=f.length?(p=new J_(s),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qR=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],YR=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],$_=new hn,Xo=new oe,Kd=new oe;function ZR(s,e,i){let r=new qv;const l=new Tt,c=new Tt,f=new tn,p=new ob,m=new lb,h={},g=i.maxTextureSize,v={[nr]:Wn,[Wn]:nr,[pa]:pa},_=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:XR,fragmentShader:WR}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new ba;b.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Xi(b,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let x=this.type;this.render=function(N,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===jM&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const P=s.getRenderTarget(),K=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ga),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const pe=x!==this.type;pe&&z.traverse(function(xe){xe.material&&(Array.isArray(xe.material)?xe.material.forEach(X=>X.needsUpdate=!0):xe.material.needsUpdate=!0)});for(let xe=0,X=N.length;xe<X;xe++){const F=N[xe],H=F.shadow;if(H===void 0){nt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const te=H.getFrameExtents();l.multiply(te),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/te.x),l.x=c.x*te.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/te.y),l.y=c.y*te.y,H.mapSize.y=c.y));const me=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wo){if(F.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Hi(l.x,l.y,{format:Ur,type:Sa,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Ps(l.x,l.y,Fi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else F.isPointLight?(H.map=new $v(l.x),H.map.depthTexture=new tb(l.x,ki)):(H.map=new Hi(l.x,l.y),H.map.depthTexture=new Ps(l.x,l.y,ki)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=ya,this.type===Bc?(H.map.depthTexture.compareFunction=me?sp:rp,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn);H.camera.updateProjectionMatrix()}const D=H.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<D;J++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,J),s.clear();else{J===0&&(s.setRenderTarget(H.map),s.clear());const fe=H.getViewport(J);f.set(c.x*fe.x,c.y*fe.y,c.x*fe.z,c.y*fe.w),Z.viewport(f)}if(F.isPointLight){const fe=H.camera,be=H.matrix,Fe=F.distance||fe.far;Fe!==fe.far&&(fe.far=Fe,fe.updateProjectionMatrix()),Xo.setFromMatrixPosition(F.matrixWorld),fe.position.copy(Xo),Kd.copy(fe.position),Kd.add(qR[J]),fe.up.copy(YR[J]),fe.lookAt(Kd),fe.updateMatrixWorld(),be.makeTranslation(-Xo.x,-Xo.y,-Xo.z),$_.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),H._frustum.setFromProjectionMatrix($_,fe.coordinateSystem,fe.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),w(z,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Wo&&O(H,T),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(P,K,G)};function O(N,z){const T=e.update(C);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Hi(l.x,l.y,{format:Ur,type:Sa})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(z,null,T,_,C,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(z,null,T,M,C,null)}function I(N,z,T,P){let K=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)K=G;else if(K=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=K.uuid,pe=z.uuid;let xe=h[Z];xe===void 0&&(xe={},h[Z]=xe);let X=xe[pe];X===void 0&&(X=K.clone(),xe[pe]=X,z.addEventListener("dispose",L)),K=X}if(K.visible=z.visible,K.wireframe=z.wireframe,P===Wo?K.side=z.shadowSide!==null?z.shadowSide:z.side:K.side=z.shadowSide!==null?z.shadowSide:v[z.side],K.alphaMap=z.alphaMap,K.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,K.map=z.map,K.clipShadows=z.clipShadows,K.clippingPlanes=z.clippingPlanes,K.clipIntersection=z.clipIntersection,K.displacementMap=z.displacementMap,K.displacementScale=z.displacementScale,K.displacementBias=z.displacementBias,K.wireframeLinewidth=z.wireframeLinewidth,K.linewidth=z.linewidth,T.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const Z=s.properties.get(K);Z.light=T}return K}function w(N,z,T,P,K){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&K===Wo)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const pe=e.update(N),xe=N.material;if(Array.isArray(xe)){const X=pe.groups;for(let F=0,H=X.length;F<H;F++){const te=X[F],me=xe[te.materialIndex];if(me&&me.visible){const D=I(N,me,P,K);N.onBeforeShadow(s,N,z,T,pe,D,te),s.renderBufferDirect(T,null,pe,D,N,te),N.onAfterShadow(s,N,z,T,pe,D,te)}}}else if(xe.visible){const X=I(N,xe,P,K);N.onBeforeShadow(s,N,z,T,pe,X,null),s.renderBufferDirect(T,null,pe,X,N,null),N.onAfterShadow(s,N,z,T,pe,X,null)}}const Z=N.children;for(let pe=0,xe=Z.length;pe<xe;pe++)w(Z[pe],z,T,P,K)}function L(N){N.target.removeEventListener("dispose",L);for(const T in h){const P=h[T],K=N.target.uuid;K in P&&(P[K].dispose(),delete P[K])}}}function KR(s,e){function i(){let k=!1;const we=new tn;let ve=null;const Ue=new tn(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!k&&(s.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){k=Pe},setClear:function(Pe,Ee,qe,ke,wt){wt===!0&&(Pe*=ke,Ee*=ke,qe*=ke),we.set(Pe,Ee,qe,ke),Ue.equals(we)===!1&&(s.clearColor(Pe,Ee,qe,ke),Ue.copy(we))},reset:function(){k=!1,ve=null,Ue.set(-1,0,0,0)}}}function r(){let k=!1,we=!1,ve=null,Ue=null,Pe=null;return{setReversed:function(Ee){if(we!==Ee){const qe=e.get("EXT_clip_control");Ee?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=Ee;const ke=Pe;Pe=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Ee){Ee?ye(s.DEPTH_TEST):je(s.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!k&&(s.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(we&&(Ee=wE[Ee]),Ue!==Ee){switch(Ee){case th:s.depthFunc(s.NEVER);break;case nh:s.depthFunc(s.ALWAYS);break;case ih:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ah:s.depthFunc(s.EQUAL);break;case rh:s.depthFunc(s.GEQUAL);break;case sh:s.depthFunc(s.GREATER);break;case oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Ee}},setLocked:function(Ee){k=Ee},setClear:function(Ee){Pe!==Ee&&(Pe=Ee,we&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){k=!1,ve=null,Ue=null,Pe=null,we=!1}}}function l(){let k=!1,we=null,ve=null,Ue=null,Pe=null,Ee=null,qe=null,ke=null,wt=null;return{setTest:function(ot){k||(ot?ye(s.STENCIL_TEST):je(s.STENCIL_TEST))},setMask:function(ot){we!==ot&&!k&&(s.stencilMask(ot),we=ot)},setFunc:function(ot,qt,Mn){(ve!==ot||Ue!==qt||Pe!==Mn)&&(s.stencilFunc(ot,qt,Mn),ve=ot,Ue=qt,Pe=Mn)},setOp:function(ot,qt,Mn){(Ee!==ot||qe!==qt||ke!==Mn)&&(s.stencilOp(ot,qt,Mn),Ee=ot,qe=qt,ke=Mn)},setLocked:function(ot){k=ot},setClear:function(ot){wt!==ot&&(s.clearStencil(ot),wt=ot)},reset:function(){k=!1,we=null,ve=null,Ue=null,Pe=null,Ee=null,qe=null,ke=null,wt=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let g={},v={},_={},M=new WeakMap,b=[],C=null,S=!1,x=null,O=null,I=null,w=null,L=null,N=null,z=null,T=new Nt(0,0,0),P=0,K=!1,G=null,Z=null,pe=null,xe=null,X=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=te>=1):me.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=te>=2);let D=null,J={};const fe=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Fe=new tn().fromArray(fe),Ge=new tn().fromArray(be);function ie(k,we,ve,Ue){const Pe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(k,Ee),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ve;qe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(we+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ee}const Te={};Te[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ye(s.DEPTH_TEST),f.setFunc(Ls),Rt(!1),nn(n_),ye(s.CULL_FACE),Mt(ga);function ye(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function je(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function it(k,we){return _[k]!==we?(s.bindFramebuffer(k,we),_[k]=we,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(k,we){let ve=b,Ue=!1;if(k){ve=M.get(we),ve===void 0&&(ve=[],M.set(we,ve));const Pe=k.textures;if(ve.length!==Pe.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,qe=Pe.length;Ee<qe;Ee++)ve[Ee]=s.COLOR_ATTACHMENT0+Ee;ve.length=Pe.length,Ue=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ve)}function Wt(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const ut={[Ar]:s.FUNC_ADD,[JM]:s.FUNC_SUBTRACT,[$M]:s.FUNC_REVERSE_SUBTRACT};ut[eE]=s.MIN,ut[tE]=s.MAX;const At={[nE]:s.ZERO,[iE]:s.ONE,[aE]:s.SRC_COLOR,[$d]:s.SRC_ALPHA,[uE]:s.SRC_ALPHA_SATURATE,[lE]:s.DST_COLOR,[sE]:s.DST_ALPHA,[rE]:s.ONE_MINUS_SRC_COLOR,[eh]:s.ONE_MINUS_SRC_ALPHA,[cE]:s.ONE_MINUS_DST_COLOR,[oE]:s.ONE_MINUS_DST_ALPHA,[fE]:s.CONSTANT_COLOR,[dE]:s.ONE_MINUS_CONSTANT_COLOR,[hE]:s.CONSTANT_ALPHA,[pE]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(k,we,ve,Ue,Pe,Ee,qe,ke,wt,ot){if(k===ga){S===!0&&(je(s.BLEND),S=!1);return}if(S===!1&&(ye(s.BLEND),S=!0),k!==QM){if(k!==x||ot!==K){if((O!==Ar||L!==Ar)&&(s.blendEquation(s.FUNC_ADD),O=Ar,L=Ar),ot)switch(k){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i_:s.blendFunc(s.ONE,s.ONE);break;case a_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case r_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",k);break}else switch(k){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case a_:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",k);break}I=null,w=null,N=null,z=null,T.set(0,0,0),P=0,x=k,K=ot}return}Pe=Pe||we,Ee=Ee||ve,qe=qe||Ue,(we!==O||Pe!==L)&&(s.blendEquationSeparate(ut[we],ut[Pe]),O=we,L=Pe),(ve!==I||Ue!==w||Ee!==N||qe!==z)&&(s.blendFuncSeparate(At[ve],At[Ue],At[Ee],At[qe]),I=ve,w=Ue,N=Ee,z=qe),(ke.equals(T)===!1||wt!==P)&&(s.blendColor(ke.r,ke.g,ke.b,wt),T.copy(ke),P=wt),x=k,K=!1}function vt(k,we){k.side===pa?je(s.CULL_FACE):ye(s.CULL_FACE);let ve=k.side===Wn;we&&(ve=!ve),Rt(ve),k.blending===ws&&k.transparent===!1?Mt(ga):Mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ue=k.stencilWrite;p.setTest(Ue),Ue&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ln(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):je(s.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function nn(k){k!==ZM?(ye(s.CULL_FACE),k!==Z&&(k===n_?s.cullFace(s.BACK):k===KM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):je(s.CULL_FACE),Z=k}function an(k){k!==pe&&(H&&s.lineWidth(k),pe=k)}function ln(k,we,ve){k?(ye(s.POLYGON_OFFSET_FILL),(xe!==we||X!==ve)&&(xe=we,X=ve,f.getReversed()&&(we=-we),s.polygonOffset(we,ve))):je(s.POLYGON_OFFSET_FILL)}function Gt(k){k?ye(s.SCISSOR_TEST):je(s.SCISSOR_TEST)}function Jt(k){k===void 0&&(k=s.TEXTURE0+F-1),D!==k&&(s.activeTexture(k),D=k)}function Y(k,we,ve){ve===void 0&&(D===null?ve=s.TEXTURE0+F-1:ve=D);let Ue=J[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},J[ve]=Ue),(Ue.type!==k||Ue.texture!==we)&&(D!==ve&&(s.activeTexture(ve),D=ve),s.bindTexture(k,we||Te[k]),Ue.type=k,Ue.texture=we)}function Cn(){const k=J[D];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function E(){try{s.texSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function j(){try{s.texSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Ae(){try{s.texStorage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function De(){try{s.texStorage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function ue(){try{s.texImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function ge(){try{s.texImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Re(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function We(k,we){v[k]!==we&&(s.pixelStorei(k,we),v[k]=we)}function Ce(k){Fe.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Fe.copy(k))}function Le(k){Ge.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ge.copy(k))}function Ze(k,we){let ve=h.get(we);ve===void 0&&(ve=new WeakMap,h.set(we,ve));let Ue=ve.get(k);Ue===void 0&&(Ue=s.getUniformBlockIndex(we,k.name),ve.set(k,Ue))}function Je(k,we){const Ue=h.get(we).get(k);m.get(we)!==Ue&&(s.uniformBlockBinding(we,Ue,k.__bindingPointIndex),m.set(we,Ue))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},D=null,J={},_={},M=new WeakMap,b=[],C=null,S=!1,x=null,O=null,I=null,w=null,L=null,N=null,z=null,T=new Nt(0,0,0),P=0,K=!1,G=null,Z=null,pe=null,xe=null,X=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ye,disable:je,bindFramebuffer:it,drawBuffers:Qe,useProgram:Wt,setBlending:Mt,setMaterial:vt,setFlipSided:Rt,setCullFace:nn,setLineWidth:an,setPolygonOffset:ln,setScissorTest:Gt,activeTexture:Jt,bindTexture:Y,unbindTexture:Cn,compressedTexImage2D:Ct,compressedTexImage3D:U,texImage2D:ue,texImage3D:ge,pixelStorei:We,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:De,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:de,scissor:Ce,viewport:Le,reset:at}}function jR(s,e,i,r,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,g=new WeakMap,v=new Set;let _;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,E){return b?new OffscreenCanvas(U,E):Qc("canvas")}function S(U,E,j){let $=1;const de=Ct(U);if((de.width>j||de.height>j)&&($=j/Math.max(de.width,de.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ae=Math.floor($*de.width),De=Math.floor($*de.height);_===void 0&&(_=C(Ae,De));const ue=E?C(Ae,De):_;return ue.width=Ae,ue.height=De,ue.getContext("2d").drawImage(U,0,0,Ae,De),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ae+"x"+De+")."),ue}else return"data"in U&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function x(U){return U.generateMipmaps}function O(U){s.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,E,j,$,de,Ae=!1){if(U!==null){if(s[U]!==void 0)return s[U];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let De;$&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===s.RED&&(j===s.FLOAT&&(ue=s.R32F),j===s.HALF_FLOAT&&(ue=s.R16F),j===s.UNSIGNED_BYTE&&(ue=s.R8),j===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),j===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.R8UI),j===s.UNSIGNED_SHORT&&(ue=s.R16UI),j===s.UNSIGNED_INT&&(ue=s.R32UI),j===s.BYTE&&(ue=s.R8I),j===s.SHORT&&(ue=s.R16I),j===s.INT&&(ue=s.R32I)),E===s.RG&&(j===s.FLOAT&&(ue=s.RG32F),j===s.HALF_FLOAT&&(ue=s.RG16F),j===s.UNSIGNED_BYTE&&(ue=s.RG8),j===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),j===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RG8UI),j===s.UNSIGNED_SHORT&&(ue=s.RG16UI),j===s.UNSIGNED_INT&&(ue=s.RG32UI),j===s.BYTE&&(ue=s.RG8I),j===s.SHORT&&(ue=s.RG16I),j===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),j===s.UNSIGNED_INT&&(ue=s.RGB32UI),j===s.BYTE&&(ue=s.RGB8I),j===s.SHORT&&(ue=s.RGB16I),j===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),j===s.UNSIGNED_INT&&(ue=s.RGBA32UI),j===s.BYTE&&(ue=s.RGBA8I),j===s.SHORT&&(ue=s.RGBA16I),j===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(j===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),j===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const ge=Ae?Kc:xt.getTransfer(de);j===s.FLOAT&&(ue=s.RGBA32F),j===s.HALF_FLOAT&&(ue=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ue=ge===It?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),j===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(U,E){let j;return U?E===null||E===ki||E===Ko?j=s.DEPTH24_STENCIL8:E===Fi?j=s.DEPTH32F_STENCIL8:E===Zo&&(j=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===Ko?j=s.DEPTH_COMPONENT24:E===Fi?j=s.DEPTH_COMPONENT32F:E===Zo&&(j=s.DEPTH_COMPONENT16),j}function N(U,E){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Rn&&U.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function z(U){const E=U.target;E.removeEventListener("dispose",z),P(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),G(E)}function P(U){const E=r.get(U);if(E.__webglInit===void 0)return;const j=U.source,$=M.get(j);if($){const de=$[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&K(U),Object.keys($).length===0&&M.delete(j)}r.remove(U)}function K(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const j=U.source,$=M.get(j);delete $[E.__cacheKey],f.memory.textures--}function G(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let de=0;de<E.__webglFramebuffer[$].length;de++)s.deleteFramebuffer(E.__webglFramebuffer[$][de]);else s.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)s.deleteFramebuffer(E.__webglFramebuffer[$]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=U.textures;for(let $=0,de=j.length;$<de;$++){const Ae=r.get(j[$]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),f.memory.textures--),r.remove(j[$])}r.remove(U)}let Z=0;function pe(){Z=0}function xe(){return Z}function X(U){Z=U}function F(){const U=Z;return U>=l.maxTextures&&nt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Z+=1,U}function H(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function te(U,E){const j=r.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const $=U.image;if($===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{je(j,U,E);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function me(U,E){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){je(j,U,E);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function D(U,E){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){je(j,U,E);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function J(U,E){const j=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){it(j,U,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const fe={[lh]:s.REPEAT,[ma]:s.CLAMP_TO_EDGE,[ch]:s.MIRRORED_REPEAT},be={[Rn]:s.NEAREST,[_E]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[xd]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},Fe={[SE]:s.NEVER,[TE]:s.ALWAYS,[yE]:s.LESS,[rp]:s.LEQUAL,[ME]:s.EQUAL,[sp]:s.GEQUAL,[EE]:s.GREATER,[bE]:s.NOTEQUAL};function Ge(U,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===xd||E.magFilter===hc||E.magFilter===Cr||E.minFilter===Nn||E.minFilter===xd||E.minFilter===hc||E.minFilter===Cr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,fe[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,fe[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,fe[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,be[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,be[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==hc&&E.minFilter!==Cr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(U,E){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",z));const $=E.source;let de=M.get($);de===void 0&&(de={},M.set($,de));const Ae=H(E);if(Ae!==U.__cacheKey){de[Ae]===void 0&&(de[Ae]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,j=!0),de[Ae].usedTimes++;const De=de[U.__cacheKey];De!==void 0&&(de[U.__cacheKey].usedTimes--,De.usedTimes===0&&K(E)),U.__cacheKey=Ae,U.__webglTexture=de[Ae].texture}return j}function Te(U,E,j){return Math.floor(Math.floor(U/j)/E)}function ye(U,E,j,$){const Ae=U.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,$,E.data);else{Ae.sort((We,Ce)=>We.start-Ce.start);let De=0;for(let We=1;We<Ae.length;We++){const Ce=Ae[De],Le=Ae[We],Ze=Ce.start+Ce.count,Je=Te(Le.start,E.width,4),at=Te(Ce.start,E.width,4);Le.start<=Ze+1&&Je===at&&Te(Le.start+Le.count-1,E.width,4)===Je?Ce.count=Math.max(Ce.count,Le.start+Le.count-Ce.start):(++De,Ae[De]=Le)}Ae.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),ge=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let We=0,Ce=Ae.length;We<Ce;We++){const Le=Ae[We],Ze=Math.floor(Le.start/4),Je=Math.ceil(Le.count/4),at=Ze%E.width,k=Math.floor(Ze/E.width),we=Je,ve=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,at,k,we,ve,j,$,E.data)}U.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function je(U,E,j){let $=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=s.TEXTURE_3D);const de=ie(U,E),Ae=E.source;i.bindTexture($,U.__webglTexture,s.TEXTURE0+j);const De=r.get(Ae);if(Ae.version!==De.__version||de===!0){if(i.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=xt.getPrimaries(xt.workingColorSpace),Ue=E.colorSpace===er?null:xt.getPrimaries(E.colorSpace),Pe=E.colorSpace===er||ve===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=S(E.image,!1,l.maxTextureSize);ge=Cn(E,ge);const Re=c.convert(E.format,E.colorSpace),We=c.convert(E.type);let Ce=w(E.internalFormat,Re,We,E.normalized,E.colorSpace,E.isVideoTexture);Ge($,E);let Le;const Ze=E.mipmaps,Je=E.isVideoTexture!==!0,at=De.__version===void 0||de===!0,k=Ae.dataReady,we=N(E,ge);if(E.isDepthTexture)Ce=L(E.format===wr,E.type),at&&(Je?i.texStorage2D(s.TEXTURE_2D,1,Ce,ge.width,ge.height):i.texImage2D(s.TEXTURE_2D,0,Ce,ge.width,ge.height,0,Re,We,null));else if(E.isDataTexture)if(Ze.length>0){Je&&at&&i.texStorage2D(s.TEXTURE_2D,we,Ce,Ze[0].width,Ze[0].height);for(let ve=0,Ue=Ze.length;ve<Ue;ve++)Le=Ze[ve],Je?k&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Le.width,Le.height,Re,We,Le.data):i.texImage2D(s.TEXTURE_2D,ve,Ce,Le.width,Le.height,0,Re,We,Le.data);E.generateMipmaps=!1}else Je?(at&&i.texStorage2D(s.TEXTURE_2D,we,Ce,ge.width,ge.height),k&&ye(E,ge,Re,We)):i.texImage2D(s.TEXTURE_2D,0,Ce,ge.width,ge.height,0,Re,We,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ce,Ze[0].width,Ze[0].height,ge.depth);for(let ve=0,Ue=Ze.length;ve<Ue;ve++)if(Le=Ze[ve],E.format!==Ti)if(Re!==null)if(Je){if(k)if(E.layerUpdates.size>0){const Pe=D_(Le.width,Le.height,E.format,E.type);for(const Ee of E.layerUpdates){const qe=Le.data.subarray(Ee*Pe/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Ee,Le.width,Le.height,1,Re,qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,ge.depth,Re,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ce,Le.width,Le.height,ge.depth,0,Le.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,ge.depth,Re,We,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ce,Le.width,Le.height,ge.depth,0,Re,We,Le.data)}else{Je&&at&&i.texStorage2D(s.TEXTURE_2D,we,Ce,Ze[0].width,Ze[0].height);for(let ve=0,Ue=Ze.length;ve<Ue;ve++)Le=Ze[ve],E.format!==Ti?Re!==null?Je?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,ve,Ce,Le.width,Le.height,0,Le.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?k&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Le.width,Le.height,Re,We,Le.data):i.texImage2D(s.TEXTURE_2D,ve,Ce,Le.width,Le.height,0,Re,We,Le.data)}else if(E.isDataArrayTexture)if(Je){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ce,ge.width,ge.height,ge.depth),k)if(E.layerUpdates.size>0){const ve=D_(ge.width,ge.height,E.format,E.type);for(const Ue of E.layerUpdates){const Pe=ge.data.subarray(Ue*ve/ge.data.BYTES_PER_ELEMENT,(Ue+1)*ve/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,ge.width,ge.height,1,Re,We,Pe)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,We,ge.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ge.width,ge.height,ge.depth,0,Re,We,ge.data);else if(E.isData3DTexture)Je?(at&&i.texStorage3D(s.TEXTURE_3D,we,Ce,ge.width,ge.height,ge.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,We,ge.data)):i.texImage3D(s.TEXTURE_3D,0,Ce,ge.width,ge.height,ge.depth,0,Re,We,ge.data);else if(E.isFramebufferTexture){if(at)if(Je)i.texStorage2D(s.TEXTURE_2D,we,Ce,ge.width,ge.height);else{let ve=ge.width,Ue=ge.height;for(let Pe=0;Pe<we;Pe++)i.texImage2D(s.TEXTURE_2D,Pe,Ce,ve,Ue,0,Re,We,null),ve>>=1,Ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ge.parentNode!==ve){ve.appendChild(ge),v.add(E),ve.onpaint=Ue=>{const Pe=Ue.changedElements;for(const Ee of v)Pe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Pe=s.RGBA,Ee=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pe,Ee,qe,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Je&&at){const ve=Ct(Ze[0]);i.texStorage2D(s.TEXTURE_2D,we,Ce,ve.width,ve.height)}for(let ve=0,Ue=Ze.length;ve<Ue;ve++)Le=Ze[ve],Je?k&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Re,We,Le):i.texImage2D(s.TEXTURE_2D,ve,Ce,Re,We,Le);E.generateMipmaps=!1}else if(Je){if(at){const ve=Ct(ge);i.texStorage2D(s.TEXTURE_2D,we,Ce,ve.width,ve.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,We,ge)}else i.texImage2D(s.TEXTURE_2D,0,Ce,Re,We,ge);x(E)&&O($),De.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function it(U,E,j){if(E.image.length!==6)return;const $=ie(U,E),de=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);const Ae=r.get(de);if(de.version!==Ae.__version||$===!0){i.activeTexture(s.TEXTURE0+j);const De=xt.getPrimaries(xt.workingColorSpace),ue=E.colorSpace===er?null:xt.getPrimaries(E.colorSpace),ge=E.colorSpace===er||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,We=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let Ee=0;Ee<6;Ee++)!Re&&!We?Ce[Ee]=S(E.image[Ee],!0,l.maxCubemapSize):Ce[Ee]=We?E.image[Ee].image:E.image[Ee],Ce[Ee]=Cn(E,Ce[Ee]);const Le=Ce[0],Ze=c.convert(E.format,E.colorSpace),Je=c.convert(E.type),at=w(E.internalFormat,Ze,Je,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,we=Ae.__version===void 0||$===!0,ve=de.dataReady;let Ue=N(E,Le);Ge(s.TEXTURE_CUBE_MAP,E);let Pe;if(Re){k&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,at,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){Pe=Ce[Ee].mipmaps;for(let qe=0;qe<Pe.length;qe++){const ke=Pe[qe];E.format!==Ti?Ze!==null?k?ve&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,Ze,ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,at,ke.width,ke.height,0,ke.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,Ze,Je,ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,at,ke.width,ke.height,0,Ze,Je,ke.data)}}}else{if(Pe=E.mipmaps,k&&we){Pe.length>0&&Ue++;const Ee=Ct(Ce[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(We){k?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ce[Ee].width,Ce[Ee].height,Ze,Je,Ce[Ee].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Ce[Ee].width,Ce[Ee].height,0,Ze,Je,Ce[Ee].data);for(let qe=0;qe<Pe.length;qe++){const wt=Pe[qe].image[Ee].image;k?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,wt.width,wt.height,Ze,Je,wt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,at,wt.width,wt.height,0,Ze,Je,wt.data)}}else{k?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ze,Je,Ce[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Ze,Je,Ce[Ee]);for(let qe=0;qe<Pe.length;qe++){const ke=Pe[qe];k?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,Ze,Je,ke.image[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,at,Ze,Je,ke.image[Ee])}}}x(E)&&O(s.TEXTURE_CUBE_MAP),Ae.__version=de.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Qe(U,E,j,$,de,Ae){const De=c.convert(j.format,j.colorSpace),ue=c.convert(j.type),ge=w(j.internalFormat,De,ue,j.normalized,j.colorSpace),Re=r.get(E),We=r.get(j);if(We.__renderTarget=E,!Re.__hasExternalTextures){const Ce=Math.max(1,E.width>>Ae),Le=Math.max(1,E.height>>Ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?i.texImage3D(de,Ae,ge,Ce,Le,E.depth,0,De,ue,null):i.texImage2D(de,Ae,ge,Ce,Le,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Jt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,de,We.__webglTexture,0,Gt(E)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,de,We.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(U,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const $=E.depthTexture,de=$&&$.isDepthTexture?$.type:null,Ae=L(E.stencilBuffer,de),De=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Jt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(E),Ae,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(E),Ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,U)}else{const $=E.textures;for(let de=0;de<$.length;de++){const Ae=$[de],De=c.convert(Ae.format,Ae.colorSpace),ue=c.convert(Ae.type),ge=w(Ae.internalFormat,De,ue,Ae.normalized,Ae.colorSpace);Jt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(E),ge,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(E),ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(U,E,j){const $=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,E.depthTexture);const Re=c.convert(E.depthTexture.format),We=c.convert(E.depthTexture.type);let Ce;E.depthTexture.format===ya?Ce=s.DEPTH_COMPONENT24:E.depthTexture.format===wr&&(Ce=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,E.width,E.height,0,Re,We,null)}}else te(E.depthTexture,0);const Ae=de.__webglTexture,De=Gt(E),ue=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,ge=E.depthTexture.format===wr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Jt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,ge,ue,Ae,0);else if(E.depthTexture.format===wr)Jt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,ge,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(U){const E=r.get(U),j=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",de)};$.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=$}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let $=0;$<6;$++)ut(E.__webglFramebuffer[$],U,$);else{const $=U.texture.mipmaps;$&&$.length>0?ut(E.__webglFramebuffer[0],U,0):ut(E.__webglFramebuffer,U,0)}else if(j){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=s.createRenderbuffer(),Wt(E.__webglDepthbuffer[$],U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ae)}}else{const $=U.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Wt(E.__webglDepthbuffer,U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(U,E,j){const $=r.get(U);E!==void 0&&Qe($.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&At(U)}function vt(U){const E=U.texture,j=r.get(U),$=r.get(E);U.addEventListener("dispose",T);const de=U.textures,Ae=U.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,f.memory.textures++),Ae){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let ge=0;ge<E.mipmaps.length;ge++)j.__webglFramebuffer[ue][ge]=s.createFramebuffer()}else j.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)j.__webglFramebuffer[ue]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,ge=de.length;ue<ge;ue++){const Re=r.get(de[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&Jt(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ue=0;ue<de.length;ue++){const ge=de[ue];j.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ue]);const Re=c.convert(ge.format,ge.colorSpace),We=c.convert(ge.type),Ce=w(ge.internalFormat,Re,We,ge.normalized,ge.colorSpace,U.isXRRenderTarget===!0),Le=Gt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ce,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,j.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Qe(j.__webglFramebuffer[ue][ge],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else Qe(j.__webglFramebuffer[ue],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(E)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,ge=de.length;ue<ge;ue++){const Re=de[ue],We=r.get(Re);let Ce=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,We.__webglTexture),Ge(Ce,Re),Qe(j.__webglFramebuffer,U,Re,s.COLOR_ATTACHMENT0+ue,Ce,0),x(Re)&&O(Ce)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,$.__webglTexture),Ge(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Qe(j.__webglFramebuffer[ge],U,E,s.COLOR_ATTACHMENT0,ue,ge);else Qe(j.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,ue,0);x(E)&&O(ue),i.unbindTexture()}U.depthBuffer&&At(U)}function Rt(U){const E=U.textures;for(let j=0,$=E.length;j<$;j++){const de=E[j];if(x(de)){const Ae=I(U),De=r.get(de).__webglTexture;i.bindTexture(Ae,De),O(Ae),i.unbindTexture()}}}const nn=[],an=[];function ln(U){if(U.samples>0){if(Jt(U)===!1){const E=U.textures,j=U.width,$=U.height;let de=s.COLOR_BUFFER_BIT;const Ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(U),ue=E.length>1;if(ue)for(let Re=0;Re<E.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const ge=U.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const We=r.get(E[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,j,$,0,0,j,$,de,s.NEAREST),m===!0&&(nn.length=0,an.length=0,nn.push(s.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(nn.push(Ae),an.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,an)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<E.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const We=r.get(E[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,We,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Gt(U){return Math.min(l.maxSamples,U.samples)}function Jt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(U){const E=f.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Cn(U,E){const j=U.colorSpace,$=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Zc&&j!==er&&(xt.getTransfer(j)===It?($!==Ti||de!==pi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",j)),E}function Ct(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=pe,this.getTextureUnits=xe,this.setTextureUnits=X,this.setTexture2D=te,this.setTexture2DArray=me,this.setTexture3D=D,this.setTextureCube=J,this.rebindTextures=Mt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function QR(s,e){function i(r,l=er){let c;const f=xt.getTransfer(l);if(r===pi)return s.UNSIGNED_BYTE;if(r===ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ov)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lv)return s.BYTE;if(r===Nv)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===$h)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Sa)return s.HALF_FLOAT;if(r===Iv)return s.ALPHA;if(r===Fv)return s.RGB;if(r===Ti)return s.RGBA;if(r===ya)return s.DEPTH_COMPONENT;if(r===wr)return s.DEPTH_STENCIL;if(r===Bv)return s.RED;if(r===np)return s.RED_INTEGER;if(r===Ur)return s.RG;if(r===ip)return s.RG_INTEGER;if(r===ap)return s.RGBA_INTEGER;if(r===zc||r===Hc||r===Gc||r===Vc)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===fh||r===dh||r===hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ph||r===mh||r===gh||r===_h||r===vh||r===qc||r===xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ph||r===mh)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===gh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===_h)return c.COMPRESSED_R11_EAC;if(r===vh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return c.COMPRESSED_RG11_EAC;if(r===xh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sh||r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Sh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ph||r===Oh||r===Ih)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ph)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fh||r===Bh||r===Yc||r===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$R=`
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

}`;class e3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Zv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ri({vertexShader:JR,fragmentShader:$R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xi(new nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t3 extends Nr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,v=null,_=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new e3,x={},O=i.getContextAttributes();let I=null,w=null;const L=[],N=[],z=new Tt;let T=null;const P=new Ei;P.viewport=new tn;const K=new Ei;K.viewport=new tn;const G=[P,K],Z=new ub;let pe=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Te=L[ie];return Te===void 0&&(Te=new Rd,L[ie]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ie){let Te=L[ie];return Te===void 0&&(Te=new Rd,L[ie]=Te),Te.getGripSpace()},this.getHand=function(ie){let Te=L[ie];return Te===void 0&&(Te=new Rd,L[ie]=Te),Te.getHandSpace()};function X(ie){const Te=N.indexOf(ie.inputSource);if(Te===-1)return;const ye=L[Te];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,h||f),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let ie=0;ie<L.length;ie++){const Te=N[ie];Te!==null&&(N[ie]=null,L[ie].disconnect(Te))}pe=null,xe=null,S.reset();for(const ie in x)delete x[ie];e.setRenderTarget(I),M=null,_=null,v=null,l=null,w=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,je=null,it=null;O.depth&&(it=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=O.stencil?wr:ya,je=O.stencil?Ko:ki);const Qe={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Qe),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new Hi(_.textureWidth,_.textureHeight,{format:Ti,type:pi,depthTexture:new Ps(_.textureWidth,_.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Hi(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ge.setContext(l),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(ie){for(let Te=0;Te<ie.removed.length;Te++){const ye=ie.removed[Te],je=N.indexOf(ye);je>=0&&(N[je]=null,L[je].disconnect(ye))}for(let Te=0;Te<ie.added.length;Te++){const ye=ie.added[Te];let je=N.indexOf(ye);if(je===-1){for(let Qe=0;Qe<L.length;Qe++)if(Qe>=N.length){N.push(ye),je=Qe;break}else if(N[Qe]===null){N[Qe]=ye,je=Qe;break}if(je===-1)break}const it=L[je];it&&it.connect(ye)}}const te=new oe,me=new oe;function D(ie,Te,ye){te.setFromMatrixPosition(Te.matrixWorld),me.setFromMatrixPosition(ye.matrixWorld);const je=te.distanceTo(me),it=Te.projectionMatrix.elements,Qe=ye.projectionMatrix.elements,Wt=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),At=(it[9]+1)/it[5],Mt=(it[9]-1)/it[5],vt=(it[8]-1)/it[0],Rt=(Qe[8]+1)/Qe[0],nn=Wt*vt,an=Wt*Rt,ln=je/(-vt+Rt),Gt=ln*-vt;if(Te.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Gt),ie.translateZ(ln),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),it[10]===-1)ie.projectionMatrix.copy(Te.projectionMatrix),ie.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const Jt=Wt+ln,Y=ut+ln,Cn=nn-Gt,Ct=an+(je-Gt),U=At*ut/Y*Jt,E=Mt*ut/Y*Jt;ie.projectionMatrix.makePerspective(Cn,Ct,U,E,Jt,Y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function J(ie,Te){Te===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Te.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Te=ie.near,ye=ie.far;S.texture!==null&&(S.depthNear>0&&(Te=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),Z.near=K.near=P.near=Te,Z.far=K.far=P.far=ye,(pe!==Z.near||xe!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),pe=Z.near,xe=Z.far),Z.layers.mask=ie.layers.mask|6,P.layers.mask=Z.layers.mask&-5,K.layers.mask=Z.layers.mask&-3;const je=ie.parent,it=Z.cameras;J(Z,je);for(let Qe=0;Qe<it.length;Qe++)J(it[Qe],je);it.length===2?D(Z,P,K):Z.projectionMatrix.copy(P.projectionMatrix),fe(ie,Z,je)};function fe(ie,Te,ye){ye===null?ie.matrix.copy(Te.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Te.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Te.projectionMatrix),ie.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Hh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(ie){return x[ie]};let be=null;function Fe(ie,Te){if(g=Te.getViewerPose(h||f),b=Te,g!==null){const ye=g.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let je=!1;ye.length!==Z.cameras.length&&(Z.cameras.length=0,je=!0);for(let ut=0;ut<ye.length;ut++){const At=ye[ut];let Mt=null;if(M!==null)Mt=M.getViewport(At);else{const Rt=v.getViewSubImage(_,At);Mt=Rt.viewport,ut===0&&(e.setRenderTargetTextures(w,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(w))}let vt=G[ut];vt===void 0&&(vt=new Ei,vt.layers.enable(ut),vt.viewport=new tn,G[ut]=vt),vt.matrix.fromArray(At.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(At.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ut===0&&(Z.matrix.copy(vt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),je===!0&&Z.cameras.push(vt)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ut=v.getDepthInformation(ye[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,l.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ut=0;ut<ye.length;ut++){const At=ye[ut].camera;if(At){let Mt=x[At];Mt||(Mt=new Zv,x[At]=Mt);const vt=v.getCameraImage(At);Mt.sourceTexture=vt}}}}for(let ye=0;ye<L.length;ye++){const je=N[ye],it=L[ye];je!==null&&it!==void 0&&it.update(je,Te,h||f)}be&&be(ie,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),b=null}const Ge=new Qv;Ge.setAnimationLoop(Fe),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}}const n3=new hn,ax=new st;ax.set(-1,0,0,0,1,0,0,0,1);function i3(s,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Kv(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,O,I,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&M(S,x,w)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),C(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,O,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=e.get(x),I=O.envMap,w=O.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(n3.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(ax),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,O,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=I*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const O=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function a3(s,e,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const N=L.program;r.uniformBlockBinding(w,N)}function h(w,L){let N=l[w.id];N===void 0&&(S(w),N=g(w),l[w.id]=N,w.addEventListener("dispose",O));const z=L.program;r.updateUBOMapping(w,z);const T=e.render.frame;c[w.id]!==T&&(_(w),c[w.id]=T)}function g(w){const L=v();w.__bindingPointIndex=L;const N=s.createBuffer(),z=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,N),N}function v(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const L=l[w.id],N=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let T=0,P=N.length;T<P;T++){const K=N[T];if(Array.isArray(K))for(let G=0,Z=K.length;G<Z;G++)M(K[G],T,G,z);else M(K,T,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,L,N,z){if(C(w,L,N,z)===!0){const T=w.__offset,P=w.value;if(Array.isArray(P)){let K=0;for(let G=0;G<P.length;G++){const Z=P[G],pe=x(Z);b(Z,w.__data,K),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(K+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(P,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function b(w,L,N){typeof w=="number"||typeof w=="boolean"?L[0]=w:w.isMatrix3?(L[0]=w.elements[0],L[1]=w.elements[1],L[2]=w.elements[2],L[3]=0,L[4]=w.elements[3],L[5]=w.elements[4],L[6]=w.elements[5],L[7]=0,L[8]=w.elements[6],L[9]=w.elements[7],L[10]=w.elements[8],L[11]=0):ArrayBuffer.isView(w)?L.set(new w.constructor(w.buffer,w.byteOffset,L.length)):w.toArray(L,N)}function C(w,L,N,z){const T=w.value,P=L+"_"+N;if(z[P]===void 0)return typeof T=="number"||typeof T=="boolean"?z[P]=T:ArrayBuffer.isView(T)?z[P]=T.slice():z[P]=T.clone(),!0;{const K=z[P];if(typeof T=="number"||typeof T=="boolean"){if(K!==T)return z[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(K.equals(T)===!1)return K.copy(T),!0}}return!1}function S(w){const L=w.uniforms;let N=0;const z=16;for(let P=0,K=L.length;P<K;P++){const G=Array.isArray(L[P])?L[P]:[L[P]];for(let Z=0,pe=G.length;Z<pe;Z++){const xe=G[Z],X=Array.isArray(xe.value)?xe.value:[xe.value];for(let F=0,H=X.length;F<H;F++){const te=X[F],me=x(te),D=N%z,J=D%me.boundary,fe=D+J;N+=J,fe!==0&&z-fe<me.storage&&(N+=z-fe),xe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),xe.__offset=N,N+=me.storage}}}const T=N%z;return T>0&&(N+=z-T),w.__size=N,w.__cache={},this}function x(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),L}function O(w){const L=w.target;L.removeEventListener("dispose",O);const N=f.indexOf(L.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function I(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:h,dispose:I}}const r3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function s3(){return Oi===null&&(Oi=new QE(r3,16,16,Ur,Sa),Oi.name="DFG_LUT",Oi.minFilter=Nn,Oi.magFilter=Nn,Oi.wrapS=ma,Oi.wrapT=ma,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class o3{constructor(e={}){const{canvas:i=RE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=pi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const C=M,S=new Set([ap,ip,np]),x=new Set([pi,ki,Zo,Ko,ep,tp]),O=new Uint32Array(4),I=new Int32Array(4),w=new oe;let L=null,N=null;const z=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let G=!1,Z=null,pe=null,xe=null,X=null;this._outputColorSpace=hi;let F=0,H=0,te=null,me=-1,D=null;const J=new tn,fe=new tn;let be=null;const Fe=new Nt(0);let Ge=0,ie=i.width,Te=i.height,ye=1,je=null,it=null;const Qe=new tn(0,0,ie,Te),Wt=new tn(0,0,ie,Te);let ut=!1;const At=new qv;let Mt=!1,vt=!1;const Rt=new hn,nn=new oe,an=new tn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Jt(){return te===null?ye:1}let Y=r;function Cn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jh}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",ot,!1),i.addEventListener("webglcontextcreationerror",qt,!1),Y===null){const W="webgl2";if(Y=Cn(W,A),Y===null)throw Cn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let Ct,U,E,j,$,de,Ae,De,ue,ge,Re,We,Ce,Le,Ze,Je,at,k,we,ve,Ue,Pe,Ee;function qe(){Ct=new sA(Y),Ct.init(),Ue=new QR(Y,Ct),U=new J1(Y,Ct,e,Ue),E=new KR(Y,Ct),U.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),pe=Y.createFramebuffer(),xe=Y.createFramebuffer(),X=Y.createFramebuffer(),j=new cA(Y),$=new OR,de=new jR(Y,Ct,E,$,U,Ue,j),Ae=new rA(K),De=new hb(Y),Pe=new j1(Y,De),ue=new oA(Y,De,j,Pe),ge=new fA(Y,ue,De,Pe,j),k=new uA(Y,U,de),Ze=new $1($),Re=new PR(K,Ae,Ct,U,Pe,Ze),We=new i3(K,$),Ce=new FR,Le=new kR(Ct),at=new K1(K,Ae,E,ge,b,m),Je=new ZR(K,ge,U),Ee=new a3(Y,j,U,E),we=new Q1(Y,Ct,j),ve=new lA(Y,Ct,j),j.programs=Re.programs,K.capabilities=U,K.extensions=Ct,K.properties=$,K.renderLists=Ce,K.shadowMap=Je,K.state=E,K.info=j}qe(),C!==pi&&(P=new hA(C,i.width,i.height,p,l,c));const ke=new t3(K,Y);this.xr=ke,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(ie,Te,!1))},this.getSize=function(A){return A.set(ie,Te)},this.setSize=function(A,W,le=!0){if(ke.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Te=W,i.width=Math.floor(A*ye),i.height=Math.floor(W*ye),le===!0&&(i.style.width=A+"px",i.style.height=W+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ie*ye,Te*ye).floor()},this.setDrawingBufferSize=function(A,W,le){ie=A,Te=W,ye=le,i.width=Math.floor(A*le),i.height=Math.floor(W*le),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===pi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,W,le,re){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,W,le,re),E.viewport(J.copy(Qe).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(Wt)},this.setScissor=function(A,W,le,re){A.isVector4?Wt.set(A.x,A.y,A.z,A.w):Wt.set(A,W,le,re),E.scissor(fe.copy(Wt).multiplyScalar(ye).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){E.setScissorTest(ut=A)},this.setOpaqueSort=function(A){je=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,le=!0){let re=0;if(A){let ne=!1;if(te!==null){const Ne=te.texture.format;ne=S.has(Ne)}if(ne){const Ne=te.texture.type,Be=x.has(Ne),Oe=at.getClearColor(),Xe=at.getClearAlpha(),ze=Oe.r,rt=Oe.g,lt=Oe.b;Be?(O[0]=ze,O[1]=rt,O[2]=lt,O[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,O)):(I[0]=ze,I[1]=rt,I[2]=lt,I[3]=Xe,Y.clearBufferiv(Y.COLOR,0,I))}else re|=Y.COLOR_BUFFER_BIT}W&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",ot,!1),i.removeEventListener("webglcontextcreationerror",qt,!1),at.dispose(),Ce.dispose(),Le.dispose(),$.dispose(),Ae.dispose(),ge.dispose(),Pe.dispose(),Ee.dispose(),Re.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Or),ke.removeEventListener("sessionend",Wi),zn.stop()};function wt(A){A.preventDefault(),f_("WebGLRenderer: Context Lost."),G=!0}function ot(){f_("WebGLRenderer: Context Restored."),G=!1;const A=j.autoReset,W=Je.enabled,le=Je.autoUpdate,re=Je.needsUpdate,ne=Je.type;qe(),j.autoReset=A,Je.enabled=W,Je.autoUpdate=le,Je.needsUpdate=re,Je.type=ne}function qt(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mn(A){const W=A.target;W.removeEventListener("dispose",Mn),Hs(W)}function Hs(A){su(A),$.remove(A)}function su(A){const W=$.get(A).programs;W!==void 0&&(W.forEach(function(le){Re.releaseProgram(le)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,le,re,ne,Ne){W===null&&(W=ln);const Be=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Oe=sl(A,W,le,re,ne);E.setMaterial(re,Be);let Xe=le.index,ze=1;if(re.wireframe===!0){if(Xe=ue.getWireframeAttribute(le),Xe===void 0)return;ze=2}const rt=le.drawRange,lt=le.attributes.position;let Ye=rt.start*ze,Dt=(rt.start+rt.count)*ze;Ne!==null&&(Ye=Math.max(Ye,Ne.start*ze),Dt=Math.min(Dt,(Ne.start+Ne.count)*ze)),Xe!==null?(Ye=Math.max(Ye,0),Dt=Math.min(Dt,Xe.count)):lt!=null&&(Ye=Math.max(Ye,0),Dt=Math.min(Dt,lt.count));const kt=Dt-Ye;if(kt<0||kt===1/0)return;Pe.setup(ne,re,Oe,le,Xe);let Yt,ft=we;if(Xe!==null&&(Yt=De.get(Xe),ft=ve,ft.setIndex(Yt)),ne.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*Jt()),ft.setMode(Y.LINES)):ft.setMode(Y.TRIANGLES);else if(ne.isLine){let cn=re.linewidth;cn===void 0&&(cn=1),E.setLineWidth(cn*Jt()),ne.isLineSegments?ft.setMode(Y.LINES):ne.isLineLoop?ft.setMode(Y.LINE_LOOP):ft.setMode(Y.LINE_STRIP)}else ne.isPoints?ft.setMode(Y.POINTS):ne.isSprite&&ft.setMode(Y.TRIANGLES);if(ne.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))ft.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const cn=ne._multiDrawStarts,He=ne._multiDrawCounts,En=ne._multiDrawCount,dt=Xe?De.get(Xe).bytesPerElement:1,Pn=$.get(re).currentProgram.getUniforms();for(let qn=0;qn<En;qn++)Pn.setValue(Y,"_gl_DrawID",qn),ft.render(cn[qn]/dt,He[qn])}else if(ne.isInstancedMesh)ft.renderInstances(Ye,kt,ne.count);else if(le.isInstancedBufferGeometry){const cn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,He=Math.min(le.instanceCount,cn);ft.renderInstances(Ye,kt,He)}else ft.render(Ye,kt)};function il(A,W,le){A.transparent===!0&&A.side===pa&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,ii(A,W,le),A.side=nr,A.needsUpdate=!0,ii(A,W,le),A.side=pa):ii(A,W,le)}this.compile=function(A,W,le=null){le===null&&(le=A),N=Le.get(le),N.init(W),T.push(N),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),A!==le&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),N.setupLights();const re=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){const Oe=Ne[Be];il(Oe,le,ne),re.add(Oe)}else il(Ne,le,ne),re.add(Ne)}),N=T.pop(),re},this.compileAsync=function(A,W,le=null){const re=this.compile(A,W,le);return new Promise(ne=>{function Ne(){if(re.forEach(function(Be){$.get(Be).currentProgram.isReady()&&re.delete(Be)}),re.size===0){ne(A);return}setTimeout(Ne,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Pr=null;function ir(A){Pr&&Pr(A)}function Or(){zn.stop()}function Wi(){zn.start()}const zn=new Qv;zn.setAnimationLoop(ir),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Pr=A,ke.setAnimationLoop(A),A===null?zn.stop():zn.start()},ke.addEventListener("sessionstart",Or),ke.addEventListener("sessionend",Wi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(A,W);const le=ke.enabled===!0&&ke.isPresenting===!0,re=P!==null&&(te===null||le)&&P.begin(K,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,W,te),N=Le.get(A,T.length),N.init(W),N.state.textureUnits=de.getTextureUnits(),T.push(N),Rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),At.setFromProjectionMatrix(Rt,Bi,W.reversedDepth),vt=this.localClippingEnabled,Mt=Ze.init(this.clippingPlanes,vt),L=Ce.get(A,z.length),L.init(),z.push(L),ke.enabled===!0&&ke.isPresenting===!0){const Be=K.xr.getDepthSensingMesh();Be!==null&&qi(Be,W,-1/0,K.sortObjects)}qi(A,W,0,K.sortObjects),L.finish(),K.sortObjects===!0&&L.sort(je,it,W.reversedDepth),Gt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Gt&&at.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Ze.beginShadows();const ne=N.state.shadowsArray;if(Je.render(ne,A,W),Mt===!0&&Ze.endShadows(),(re&&P.hasRenderPass())===!1){const Be=L.opaque,Oe=L.transmissive;if(N.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Oe.length>0)for(let ze=0,rt=Xe.length;ze<rt;ze++){const lt=Xe[ze];rn(Be,Oe,A,lt)}Gt&&at.render(A);for(let ze=0,rt=Xe.length;ze<rt;ze++){const lt=Xe[ze];Yi(L,A,lt,lt.viewport)}}else Oe.length>0&&rn(Be,Oe,A,W),Gt&&at.render(A),Yi(L,A,W)}te!==null&&H===0&&(de.updateMultisampleRenderTarget(te),de.updateRenderTargetMipmap(te)),re&&P.end(K),A.isScene===!0&&A.onAfterRender(K,A,W),Pe.resetDefaultState(),me=-1,D=null,T.pop(),T.length>0?(N=T[T.length-1],de.setTextureUnits(N.state.textureUnits),Mt===!0&&Ze.setGlobalState(K.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?L=z[z.length-1]:L=null,Z!==null&&Z.renderEnd()};function qi(A,W,le,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){re&&an.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const Be=ge.update(A),Oe=A.material;Oe.visible&&L.push(A,Be,Oe,le,an.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Be=ge.update(A),Oe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),an.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),an.copy(Be.boundingSphere.center)),an.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Oe)){const Xe=Be.groups;for(let ze=0,rt=Xe.length;ze<rt;ze++){const lt=Xe[ze],Ye=Oe[lt.materialIndex];Ye&&Ye.visible&&L.push(A,Be,Ye,le,an.z,lt)}}else Oe.visible&&L.push(A,Be,Oe,le,an.z,null)}}const Ne=A.children;for(let Be=0,Oe=Ne.length;Be<Oe;Be++)qi(Ne[Be],W,le,re)}function Yi(A,W,le,re){const{opaque:ne,transmissive:Ne,transparent:Be}=A;N.setupLightsView(le),Mt===!0&&Ze.setGlobalState(K.clippingPlanes,le),re&&E.viewport(J.copy(re)),ne.length>0&&ar(ne,W,le),Ne.length>0&&ar(Ne,W,le),Be.length>0&&ar(Be,W,le),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rn(A,W,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[re.id]===void 0){const Ye=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[re.id]=new Hi(1,1,{generateMipmaps:!0,type:Ye?Sa:pi,minFilter:Cr,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Ne=N.state.transmissionRenderTarget[re.id],Be=re.viewport||J;Ne.setSize(Be.z*K.transmissionResolutionScale,Be.w*K.transmissionResolutionScale);const Oe=K.getRenderTarget(),Xe=K.getActiveCubeFace(),ze=K.getActiveMipmapLevel();K.setRenderTarget(Ne),K.getClearColor(Fe),Ge=K.getClearAlpha(),Ge<1&&K.setClearColor(16777215,.5),K.clear(),Gt&&at.render(le);const rt=K.toneMapping;K.toneMapping=zi;const lt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),N.setupLightsView(re),Mt===!0&&Ze.setGlobalState(K.clippingPlanes,re),ar(A,le,re),de.updateMultisampleRenderTarget(Ne),de.updateRenderTargetMipmap(Ne),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Dt=0,kt=W.length;Dt<kt;Dt++){const Yt=W[Dt],{object:ft,geometry:cn,material:He,group:En}=Yt;if(He.side===pa&&ft.layers.test(re.layers)){const dt=He.side;He.side=Wn,He.needsUpdate=!0,Gs(ft,le,re,cn,He,En),He.side=dt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(de.updateMultisampleRenderTarget(Ne),de.updateRenderTargetMipmap(Ne))}K.setRenderTarget(Oe,Xe,ze),K.setClearColor(Fe,Ge),lt!==void 0&&(re.viewport=lt),K.toneMapping=rt}function ar(A,W,le){const re=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,Ne=A.length;ne<Ne;ne++){const Be=A[ne],{object:Oe,geometry:Xe,group:ze}=Be;let rt=Be.material;rt.allowOverride===!0&&re!==null&&(rt=re),Oe.layers.test(le.layers)&&Gs(Oe,W,le,Xe,rt,ze)}}function Gs(A,W,le,re,ne,Ne){A.onBeforeRender(K,W,le,re,ne,Ne),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(K,W,le,re,A,Ne),ne.transparent===!0&&ne.side===pa&&ne.forceSinglePass===!1?(ne.side=Wn,ne.needsUpdate=!0,K.renderBufferDirect(le,W,re,ne,A,Ne),ne.side=nr,ne.needsUpdate=!0,K.renderBufferDirect(le,W,re,ne,A,Ne),ne.side=pa):K.renderBufferDirect(le,W,re,ne,A,Ne),A.onAfterRender(K,W,le,re,ne,Ne)}function ii(A,W,le){W.isScene!==!0&&(W=ln);const re=$.get(A),ne=N.state.lights,Ne=N.state.shadowsArray,Be=ne.state.version,Oe=Re.getParameters(A,ne.state,Ne,W,le,N.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Oe);let ze=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,re.fog=W.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Ae.get(A.envMap||re.environment,rt),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Mn),ze=new Map,re.programs=ze);let lt=ze.get(Xe);if(lt!==void 0){if(re.currentProgram===lt&&re.lightsStateVersion===Be)return al(A,Oe),lt}else Oe.uniforms=Re.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,le,Oe),A.onBeforeCompile(Oe,K),lt=Re.acquireProgram(Oe,Xe),ze.set(Xe,lt),re.uniforms=Oe.uniforms;const Ye=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),al(A,Oe),re.needsLights=Ir(A),re.lightsStateVersion=Be,re.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.lightProbeGrid=N.state.lightProbeGridArray.length>0,re.currentProgram=lt,re.uniformsList=null,lt}function Zi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function al(A,W){const le=$.get(A);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}function rl(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(W.matrixWorld);for(let le=0,re=A.length;le<re;le++){const ne=A[le];if(ne.texture!==null&&ne.boundingBox.containsPoint(w))return ne}return null}function sl(A,W,le,re,ne){W.isScene!==!0&&(W=ln),de.resetTextureUnits();const Ne=W.fog,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?W.environment:null,Oe=te===null?K.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xt.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,ze=Ae.get(re.envMap||Be,Xe),rt=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,lt=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,kt=!!le.morphAttributes.color;let Yt=zi;re.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Yt=K.toneMapping);const ft=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,cn=ft!==void 0?ft.length:0,He=$.get(re),En=N.state.lights;if(Mt===!0&&(vt===!0||A!==D)){const Ft=A===D&&re.id===me;Ze.setState(re,A,Ft)}let dt=!1;re.version===He.__version?(He.needsLights&&He.lightsStateVersion!==En.state.version||He.outputColorSpace!==Oe||ne.isBatchedMesh&&He.batching===!1||!ne.isBatchedMesh&&He.batching===!0||ne.isBatchedMesh&&He.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&He.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&He.instancing===!1||!ne.isInstancedMesh&&He.instancing===!0||ne.isSkinnedMesh&&He.skinning===!1||!ne.isSkinnedMesh&&He.skinning===!0||ne.isInstancedMesh&&He.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&He.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&He.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&He.instancingMorph===!1&&ne.morphTexture!==null||He.envMap!==ze||re.fog===!0&&He.fog!==Ne||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ze.numPlanes||He.numIntersection!==Ze.numIntersection)||He.vertexAlphas!==rt||He.vertexTangents!==lt||He.morphTargets!==Ye||He.morphNormals!==Dt||He.morphColors!==kt||He.toneMapping!==Yt||He.morphTargetsCount!==cn||!!He.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,He.__version=re.version);let Pn=He.currentProgram;dt===!0&&(Pn=ii(re,W,ne),Z&&re.isNodeMaterial&&Z.onUpdateProgram(re,Pn,He));let qn=!1,On=!1,Ta=!1;const Lt=Pn.getUniforms(),Zt=He.uniforms;if(E.useProgram(Pn.program)&&(qn=!0,On=!0,Ta=!0),re.id!==me&&(me=re.id,On=!0),He.needsLights){const Ft=rl(N.state.lightProbeGridArray,ne);He.lightProbeGrid!==Ft&&(He.lightProbeGrid=Ft,On=!0)}if(qn||D!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(Y,"projectionMatrix",A.projectionMatrix),Lt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Ci=Lt.map.cameraPosition;Ci!==void 0&&Ci.setValue(Y,nn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Lt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,On=!0,Ta=!0)}if(He.needsLights&&(En.state.directionalShadowMap.length>0&&Lt.setValue(Y,"directionalShadowMap",En.state.directionalShadowMap,de),En.state.spotShadowMap.length>0&&Lt.setValue(Y,"spotShadowMap",En.state.spotShadowMap,de),En.state.pointShadowMap.length>0&&Lt.setValue(Y,"pointShadowMap",En.state.pointShadowMap,de)),ne.isSkinnedMesh){Lt.setOptional(Y,ne,"bindMatrix"),Lt.setOptional(Y,ne,"bindMatrixInverse");const Ft=ne.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Lt.setValue(Y,"boneTexture",Ft.boneTexture,de))}ne.isBatchedMesh&&(Lt.setOptional(Y,ne,"batchingTexture"),Lt.setValue(Y,"batchingTexture",ne._matricesTexture,de),Lt.setOptional(Y,ne,"batchingIdTexture"),Lt.setValue(Y,"batchingIdTexture",ne._indirectTexture,de),Lt.setOptional(Y,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Lt.setValue(Y,"batchingColorTexture",ne._colorsTexture,de));const ai=le.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&k.update(ne,le,Pn),(On||He.receiveShadow!==ne.receiveShadow)&&(He.receiveShadow=ne.receiveShadow,Lt.setValue(Y,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&W.environment!==null&&(Zt.envMapIntensity.value=W.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=s3()),On){if(Lt.setValue(Y,"toneMappingExposure",K.toneMappingExposure),He.needsLights&&ou(Zt,Ta),Ne&&re.fog===!0&&We.refreshFogUniforms(Zt,Ne),We.refreshMaterialUniforms(Zt,re,ye,Te,N.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Ft=He.lightProbeGrid;Zt.probesSH.value=Ft.texture,Zt.probesMin.value.copy(Ft.boundingBox.min),Zt.probesMax.value.copy(Ft.boundingBox.max),Zt.probesResolution.value.copy(Ft.resolution)}kc.upload(Y,Zi(He),Zt,de)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(kc.upload(Y,Zi(He),Zt,de),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(Y,"center",ne.center),Lt.setValue(Y,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue(Y,"normalMatrix",ne.normalMatrix),Lt.setValue(Y,"modelMatrix",ne.matrixWorld),re.uniformsGroups!==void 0){const Ft=re.uniformsGroups;for(let Ci=0,gi=Ft.length;Ci<gi;Ci++){const Fr=Ft[Ci];Ee.update(Fr,Pn),Ee.bind(Fr,Pn)}}return Pn}function ou(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ir(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,W,le){const re=$.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=W,$.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const le=$.get(A);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,le=0){te=A,F=W,H=le;let re=null,ne=!1,Ne=!1;if(A){const Oe=$.get(A);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),J.copy(A.viewport),fe.copy(A.scissor),be=A.scissorTest,E.viewport(J),E.scissor(fe),E.setScissorTest(be),me=-1;return}else if(Oe.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Oe.__hasExternalTextures)de.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&$.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const ze=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?re=ze[W][le]:re=ze[W],ne=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?re=$.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?re=ze[le]:re=ze,J.copy(A.viewport),fe.copy(A.scissor),be=A.scissorTest}else J.copy(Qe).multiplyScalar(ye).floor(),fe.copy(Wt).multiplyScalar(ye).floor(),be=ut;if(le!==0&&(re=pe),E.bindFramebuffer(Y.FRAMEBUFFER,re)&&E.drawBuffers(A,re),E.viewport(J),E.scissor(fe),E.setScissorTest(be),ne){const Oe=$.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,le)}else if(Ne){const Oe=W;for(let Xe=0;Xe<A.textures.length;Xe++){const ze=$.get(A.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,ze.__webglTexture,le,Oe)}}else if(A!==null&&le!==0){const Oe=$.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,le)}me=-1},this.readRenderTargetPixels=function(A,W,le,re,ne,Ne,Be,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const ze=A.textures[Oe],rt=ze.format,lt=ze.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable(rt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&le>=0&&le<=A.height-ne&&Y.readPixels(W,le,re,ne,Ue.convert(rt),Ue.convert(lt),Ne)}finally{const ze=te!==null?$.get(te).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,le,re,ne,Ne,Be,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(W>=0&&W<=A.width-re&&le>=0&&le<=A.height-ne){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);const ze=A.textures[Oe],rt=ze.format,lt=ze.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ye),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ne.byteLength,Y.STREAM_READ),Y.readPixels(W,le,re,ne,Ue.convert(rt),Ue.convert(lt),0);const Dt=te!==null?$.get(te).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Dt);const kt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await CE(Y,kt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ye),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ne),Y.deleteBuffer(Ye),Y.deleteSync(kt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,le=0){const re=Math.pow(2,-le),ne=Math.floor(A.image.width*re),Ne=Math.floor(A.image.height*re),Be=W!==null?W.x:0,Oe=W!==null?W.y:0;de.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,le,0,0,Be,Oe,ne,Ne),E.unbindTexture()},this.copyTextureToTexture=function(A,W,le=null,re=null,ne=0,Ne=0){let Be,Oe,Xe,ze,rt,lt,Ye,Dt,kt;const Yt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(le!==null)Be=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,ze=le.min.x,rt=le.min.y,lt=le.isBox3?le.min.z:0;else{const Zt=Math.pow(2,-ne);Be=Math.floor(Yt.width*Zt),Oe=Math.floor(Yt.height*Zt),A.isDataArrayTexture?Xe=Yt.depth:A.isData3DTexture?Xe=Math.floor(Yt.depth*Zt):Xe=1,ze=0,rt=0,lt=0}re!==null?(Ye=re.x,Dt=re.y,kt=re.z):(Ye=0,Dt=0,kt=0);const ft=Ue.convert(W.format),cn=Ue.convert(W.type);let He;W.isData3DTexture?(de.setTexture3D(W,0),He=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(de.setTexture2DArray(W,0),He=Y.TEXTURE_2D_ARRAY):(de.setTexture2D(W,0),He=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);const En=E.getParameter(Y.UNPACK_ROW_LENGTH),dt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Pn=E.getParameter(Y.UNPACK_SKIP_PIXELS),qn=E.getParameter(Y.UNPACK_SKIP_ROWS),On=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Yt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Yt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,ze),E.pixelStorei(Y.UNPACK_SKIP_ROWS,rt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt);const Ta=A.isDataArrayTexture||A.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Zt=$.get(A),ai=$.get(W),Ft=$.get(Zt.__renderTarget),Ci=$.get(ai.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Ft.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let gi=0;gi<Xe;gi++)Ta&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$.get(A).__webglTexture,ne,lt+gi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$.get(W).__webglTexture,Ne,kt+gi)),Y.blitFramebuffer(ze,rt,Be,Oe,Ye,Dt,Be,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||$.has(A)){const Zt=$.get(A),ai=$.get(W);E.bindFramebuffer(Y.READ_FRAMEBUFFER,xe),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,X);for(let Ft=0;Ft<Xe;Ft++)Ta?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Zt.__webglTexture,ne,lt+Ft):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Zt.__webglTexture,ne),Lt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ai.__webglTexture,Ne,kt+Ft):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ai.__webglTexture,Ne),ne!==0?Y.blitFramebuffer(ze,rt,Be,Oe,Ye,Dt,Be,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Lt?Y.copyTexSubImage3D(He,Ne,Ye,Dt,kt+Ft,ze,rt,Be,Oe):Y.copyTexSubImage2D(He,Ne,Ye,Dt,ze,rt,Be,Oe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(He,Ne,Ye,Dt,kt,Be,Oe,Xe,ft,cn,Yt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(He,Ne,Ye,Dt,kt,Be,Oe,Xe,ft,Yt.data):Y.texSubImage3D(He,Ne,Ye,Dt,kt,Be,Oe,Xe,ft,cn,Yt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ne,Ye,Dt,Be,Oe,ft,cn,Yt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ne,Ye,Dt,Yt.width,Yt.height,ft,Yt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ne,Ye,Dt,Be,Oe,ft,cn,Yt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,En),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,dt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Pn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,qn),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,On),Ne===0&&W.generateMipmaps&&Y.generateMipmap(He),E.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,te=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),i.unpackColorSpace=xt._getUnpackColorSpace()}}const l3=()=>{const s=he.useRef(null);return he.useEffect(()=>{const e=s.current;if(!e)return;const i=new XE,r=new cp(-1,1,1,-1,0,1),l=new o3({antialias:!0,alpha:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(e.clientWidth,e.clientHeight),e.appendChild(l.domElement);const c=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,f=`
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      // Simple 2D Simplex Noise generator
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.x *= uResolution.x / uResolution.y;

        // Flowing noise domain warping
        vec2 q = vec2(0.0);
        q.x = snoise(st + 0.05 * uTime);
        q.y = snoise(st + vec2(1.0));

        vec2 r = vec2(0.0);
        r.x = snoise(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
        r.y = snoise(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

        float f = snoise(st + r);

        vec3 colBase = vec3(0.176, 0.447, 0.561); // #2d728f
        vec3 colDark = vec3(0.118, 0.302, 0.380); // #1e4d61
        vec3 colLight = vec3(0.231, 0.557, 0.647); // #3b8ea5

        vec3 color = mix(colBase, colDark, clamp(length(q), 0.0, 1.0));
        color = mix(color, colLight, clamp(length(r.x), 0.0, 1.0));

        // grid accent overlay
        vec2 grid = abs(fract(st * 15.0 - 0.5) - 0.5) / fwidth(st * 15.0);
        float line = min(grid.x, grid.y);
        float gridAlpha = (1.0 - min(line, 1.0)) * 0.05;

        color += vec3(gridAlpha);

        gl_FragColor = vec4(color, 0.95);
      }
    `,p={uTime:{value:0},uResolution:{value:new Tt(e.clientWidth,e.clientHeight)}},m=new nl(2,2),h=new Ri({vertexShader:c,fragmentShader:f,uniforms:p,transparent:!0}),g=new Xi(m,h);i.add(g);let v;const _=new fb,M=()=>{p.uTime.value=_.getElapsedTime(),l.render(i,r),v=requestAnimationFrame(M)};M();const b=()=>{if(!e)return;const S=e.clientWidth,x=e.clientHeight;l.setSize(S,x),p.uResolution.value.set(S,x)},C=new ResizeObserver(()=>b());return C.observe(e),()=>{cancelAnimationFrame(v),C.disconnect(),m.dispose(),h.dispose(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),q.jsx("div",{ref:s,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:0}})};function c3(){const s=he.useRef(null),[e,i]=he.useState(!1),r=he.useRef({startX:0,scrollLeft:0,velocity:0,lastX:0,rafId:null}),l=X=>{X.target.tagName!=="A"&&(X.preventDefault(),i(!0),cancelAnimationFrame(r.current.rafId),r.current.startX=X.pageX-s.current.offsetLeft,r.current.scrollLeft=s.current.scrollLeft,r.current.lastX=X.pageX,r.current.velocity=0)},c=X=>{if(!e)return;X.preventDefault();const H=(X.pageX-s.current.offsetLeft-r.current.startX)*1.5;r.current.velocity=X.pageX-r.current.lastX,r.current.lastX=X.pageX,s.current.scrollLeft=r.current.scrollLeft-H},f=()=>{Math.abs(r.current.velocity)>.01&&(s.current.scrollLeft-=r.current.velocity*15,r.current.velocity*=.95,r.current.rafId=requestAnimationFrame(f))},p=()=>{i(!1),f()},m=()=>{i(!1),f()};he.useEffect(()=>{const X={threshold:.1,rootMargin:"0px 0px -50px 0px"},F=new IntersectionObserver(te=>{te.forEach(me=>{me.isIntersecting&&me.target.classList.add("reveal-visible")})},X);return document.querySelectorAll(".reveal").forEach(te=>F.observe(te)),()=>F.disconnect()},[]),he.useEffect(()=>()=>cancelAnimationFrame(r.current.rafId),[]);const h={maxWidth:"1100px",margin:"0 auto",padding:"0 1.5rem"},g={padding:"4rem 0 3rem 0",textAlign:"left",color:"#fdf9d2"},v={fontSize:"3.5rem",fontWeight:"800",margin:"0 0 1rem 0",lineHeight:"1.1",letterSpacing:"-0.02em"},_={fontSize:"1.35rem",fontWeight:"600",margin:"1rem 0 0.5rem 0"},M={color:"#1e4d61",fontSize:"1.85rem",fontWeight:"700",margin:"2.5rem 0 1.5rem 0",textAlign:"left"},b={minWidth:"340px",maxWidth:"360px",flexShrink:0,padding:"1.25rem",borderRadius:"14px",backgroundColor:"#3B8EA5",display:"flex",flexDirection:"column",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"default",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.15)",overflow:"hidden",border:"1px solid #2d728f",textAlign:"left"},C={display:"flex",overflowX:"auto",gap:"1.5rem",padding:"1.5rem 0.5rem 1.5rem 0.5rem",cursor:e?"grabbing":"grab",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none"},S={backgroundColor:"#1e3158",color:"#fdf9d2",fontSize:"0.75rem",fontWeight:"700",padding:"0.25rem 0.6rem",borderRadius:"4px",letterSpacing:"0.05em",fontFamily:"monospace"},x={width:"100%",aspectRatio:"16/10",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:"600",letterSpacing:"0.15em",textTransform:"uppercase",border:"1px solid #334155",position:"relative",overflow:"hidden"},O={position:"absolute",inset:0,backgroundImage:"linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",backgroundSize:"20px 20px",pointerEvents:"none"},I={position:"absolute",inset:0,backgroundImage:"linear-gradient(#0000000a 1px, transparent 1px), linear-gradient(90deg, #0000000a 1px, transparent 1px)",backgroundSize:"20px 20px",pointerEvents:"none"},w={margin:"2.5rem 0",border:"none",height:"0",borderTop:"2px solid #2D728F33"},L={marginBottom:"2rem",paddingLeft:"1.25rem",borderLeft:"4px solid #2D728F",textAlign:"left"},N={display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"0.5rem"},z={fontSize:"1.15rem",fontWeight:"600",margin:"0",color:"#1F2937"},T={color:"#6B7280",fontSize:"0.85rem",fontWeight:"500"},P={color:"#4B5563",fontSize:"0.95rem",fontStyle:"italic",margin:"0.25rem 0 0.75rem 0"},K={listStyleType:"disc",marginLeft:"1.25rem",paddingLeft:"0",lineHeight:"1.5",fontSize:"0.95rem",color:"#1f2734"},G={textAlign:"left",fontSize:"1.05rem",fontWeight:"600",color:"#1E4D61",margin:"1.25rem 0 0.5rem 0"},Z={color:"#1e3158ff",fontWeight:"bold",textDecoration:"none"},xe=`url("data:image/svg+xml;utf8,${`
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
    <rect fill='%23ffffff' width='24' height='24'/>
    <defs>
        <linearGradient id='a' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='0' stop-color='%232d728f'/>
        <stop offset='1' stop-color='%23244F67'/>
        </linearGradient>
    </defs>
    <pattern id='b' width='18' height='15' patternUnits='userSpaceOnUse'>
        <circle fill='%23ffffff' cx='9' cy='9' r='9'/>
    </pattern>
    <rect width='100%' height='100%' fill='url(%23a)'/>
    <rect width='100%' height='100%' fill='url(%23b)' fill-opacity='0.04'/>
    </svg>
  `.replace(/\n/g,"").replace(/\s+/g," ")}")`;return q.jsxs("div",{children:[q.jsx("style",{children:`
        body, html { 
          margin: 0; 
          background-image: ${xe};
          background-attachment: fixed;
          background-size: cover;
          background-color: #2d728f; 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }

        .project-card {
          border-radius: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .project-card:hover { 
          transform: translateY(-6px) scale(1.02) !important;
          box-shadow: 0 0 25px rgba(41, 135, 160, 0.6) !important;
          background-color: #51a4bb !important;
          border-radius: 25px !important;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),q.jsxs("div",{style:{maxWidth:"1100px",margin:"2rem auto",borderRadius:"10px",overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)",position:"relative",isolation:"isolate"},children:[q.jsxs("div",{style:{backgroundColor:"#2d728f",boxShadow:"0 0px 30px rgba(0, 0, 0, 0.15)",position:"relative",overflow:"hidden",isolation:"isolate"},children:[q.jsx(l3,{}),q.jsx("div",{style:{...h,zIndex:10,position:"relative"},children:q.jsxs("div",{style:g,children:[q.jsx("h1",{style:v,children:"Caia Gelli"}),q.jsxs("div",{style:{fontSize:"0.95rem",marginBottom:"1.5rem",display:"flex",gap:"1rem"},children:[q.jsx("a",{href:"https://www.linkedin.com/in/caia-gelli-14b6a3225/",style:{...Z,color:" #0c1a1c"},children:"LinkedIn"}),q.jsx("span",{style:{color:"#0c1a1c"},children:"|"}),q.jsx("a",{href:"https://github.com/CaiaG",style:{...Z,color:" #0c1a1c"},children:"GitHub"})]}),q.jsx("h2",{style:_,children:"Software Engineering | Computer Graphics"}),q.jsx("p",{style:{fontSize:"1.05rem",lineHeight:"1.6",maxWidth:"750px",margin:"0.5rem 0 0 0"},children:"Penn DMD graduate bridging C++ software development with 3D production pipelines. Specializing in real-time rendering, custom shaders, and procedural texturing—open to Graphics Software Engineering, Technical Art, and Shading/LookDev roles."})]})})]}),q.jsx("div",{style:{backgroundColor:"#fdf9d2ff",minHeight:"100vh",padding:"2rem 0 4rem 0"},children:q.jsxs("div",{style:h,children:[q.jsx("h2",{style:M,children:"Featured Projects"}),q.jsxs("div",{style:C,className:"no-scrollbar",ref:s,onMouseDown:l,onMouseLeave:p,onMouseUp:m,onMouseMove:c,children:[q.jsxs("div",{className:"project-card",style:b,children:[q.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg",alt:"SPH Implementation",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Smoothed Particle Hydrodynamics Implementation in Houdini"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"A custom SPH solver with pressure, viscosity, and surface tension. It applies XSPH smoothing, hybrid pressure solvers, and dynamic time stepping for stability. Supports 3K+ particles at 30 FPS."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"HOUDINI"}),q.jsx("span",{style:S,children:"VEX"}),q.jsx("span",{style:S,children:"C++"})]}),q.jsxs("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:[q.jsx("a",{href:"https://github.com/CaiaG/SPHFluidSimulation-in-Houdini",style:Z,children:"Code"}),q.jsx("span",{style:{color:"#1e3158ff"},children:"|"}),q.jsx("a",{href:"https://docs.google.com/presentation/d/16x6bA4EYJor1JWqmlA5Iz0BD-3cVK-eLnIrsPnyrGdA/edit?usp=sharing",style:Z,children:"Presentation"}),q.jsx("span",{style:{color:"#1e3158ff"},children:"|"}),q.jsx("a",{href:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/ProjectSpecificationGuideFinalDraft.pdf",style:Z,children:"Writeup"})]})]}),q.jsxs("div",{className:"project-card",style:b,children:[q.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg",alt:"Interactive Computer Graphics",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Interactive Computer Graphics"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Portfolio including: Mini Minecraft using C++ and OpenGL (procedural terrain, texturing and L-system implementations), Rasterizer in OpenGL & Ray/Path tracer using Monte Carlo approximation, 3D Modeling, etc."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"C++"}),q.jsx("span",{style:S,children:"GLSL"})]}),q.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:q.jsx("a",{href:"https://www.artstation.com/caiagelli9",style:Z,children:"Portfolio"})})]}),q.jsxs("div",{className:"project-card",style:b,children:[q.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/treerev1.png",alt:"Dragon's Blood Tree Kit",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Dragon's Blood Tree Kit (In Progress)"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Procedural modular foliage kit for a dragon's blood tree, synthesized in Unreal Engine and experimenting with different techniques to optimize performance. Uses an L-system branching algorithm to replicate the unique branching pattern and umbrella shape canopy."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"Unreal Engine"}),q.jsx("span",{style:S,children:"Blender"}),q.jsx("span",{style:S,children:"L-Systems"})]}),q.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:q.jsx("a",{href:"https://app.milanote.com/1W3ZZU1Qvua02H/dragon-tree?p=m441fkw92yV",style:Z,children:"Progress Board"})})]}),q.jsxs("div",{className:"project-card",style:b,children:[q.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/IMG_9258.JPEG",alt:"Virtual Assistant",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Virtual Assistant for OR Planner"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Prototype for the assistant of an Operation Room planning application made in Unreal Engine. Integrates Convai and Kokoro (via FastAPI) for real-time voice interaction and character animation. Demoed on virtual production stage."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"Unreal Engine"}),q.jsx("span",{style:S,children:"FastAPI"}),q.jsx("span",{style:S,children:"Docker"}),q.jsx("span",{style:S,children:"Python"})]}),q.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:q.jsx("a",{href:"https://github.com/CaiaG/TTSandASRforVirtualAssistantProject",style:Z,children:"Code & Demo"})})]}),q.jsxs("div",{className:"project-card",style:b,children:[q.jsxs("div",{style:{...x,background:"#243252",color:"#38bdf8"},children:[q.jsx("div",{style:O}),q.jsxs("div",{style:{zIndex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[q.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 512 512",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginBottom:"8px"},children:[q.jsx("path",{opacity:"0.4",d:"M64 64h64v16H80v48H64V64zm320 0h64v64h-16V80h-48V64zM64 384h16v48h48v16H64v-64zm384 0v64h-64v-16h48v-48h16z"}),q.jsx("path",{opacity:"0.25",d:"M128 128h256v16H128zm0 240h256v16H128zm0-240v256h-16V128zm256 0v256h16V128z"}),q.jsx("circle",{cx:"128",cy:"128",r:"8"}),q.jsx("circle",{cx:"384",cy:"128",r:"8"}),q.jsx("circle",{cx:"128",cy:"384",r:"8"}),q.jsx("circle",{cx:"384",cy:"384",r:"8"}),q.jsx("circle",{cx:"256",cy:"176",r:"14"}),q.jsx("path",{d:"M248 188h16v24h-16z"}),q.jsx("path",{d:"M256 200c-66.3 0-120 53.7-120 120h240c0-66.3-53.7-120-120-120z"}),q.jsx("path",{d:"M112 332h288v16c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-16z"}),q.jsx("path",{d:"M360 190l6 18 18 6-18 6-6 18-6-18-18-6 18-6z"}),q.jsx("path",{opacity:"0.7",d:"M160 210l4 12 12 4-12 4-4 12-4-12-12-4 12-4z"})]}),q.jsx("div",{style:{fontFamily:"monospace",opacity:.8},children:"OPTAIMEAL Prototype"})]})]}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"OPTAIMEAL Prototype"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"OPTAIMEAL is a full-stack meal planning and logistics web application built with React, TypeScript, FastAPI, and SQLite that streamlines custom menu curation and scheduling."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"SQL"}),q.jsx("span",{style:S,children:"Python"}),q.jsx("span",{style:S,children:"TypeScript"}),q.jsx("span",{style:S,children:"FastAPI"}),q.jsx("span",{style:S,children:"React"})]}),q.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:q.jsx("a",{href:"https://github.com/CaiaG/Optaimeal-Prototype/tree/dev",style:Z,children:"Github"})})]}),q.jsxs("div",{className:"project-card",style:b,children:[q.jsxs("div",{style:{...x,background:"#0f172a",color:"#38bdf8"},children:[q.jsx("div",{style:O}),q.jsxs("div",{style:{zIndex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[q.jsx("svg",{width:"50",height:"50",viewBox:"0 0 640 640",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginBottom:"8px"},children:q.jsx("path",{d:"M310.6 194.3L243.4 222.5L243.4 107.2L188.7 297.5L243.4 273.3L243.4 403.6L310.6 194.3zM227.4 97.6L226.1 102.3L210.9 155.2C170.6 170.7 142 209.8 142 255.5C142 307.8 176.3 351.4 225.4 361L225.4 414.6C147.5 404.1 90 336.4 90 255.6C90 175.1 149.8 108.4 227.4 97.6zM538.8 544.8C527.6 556 515.7 557.1 510.2 555.3C504.8 553.5 483.1 535.4 449.8 510.9C416.5 486.3 416.2 475.2 406.8 454.2C397.4 433.3 376.4 411.6 349.3 401.8L339.6 387.1C314.9 404 286.6 414 258.3 415.8L260.4 409.2L276.3 359.7C322.8 347.8 357.2 305.7 357.2 255.5C357.2 201 318.8 153.4 261.2 148.4L261.2 96.3C344.4 101.4 410 170.8 410 255.6C410 289.2 398.8 320.3 381 346L395.6 355.6C405.4 382.7 427.1 403.6 448 413C468.9 422.4 480.2 422.7 504.8 456C529.4 489.2 547.5 510.9 549.3 516.3C551.1 521.7 550 533.6 538.8 544.8zM528.9 526.9C528.9 522.5 525.3 518.9 520.9 518.9C516.5 518.9 512.9 522.5 512.9 526.9C512.9 531.3 516.5 534.9 520.9 534.9C525.3 534.9 528.9 531.3 528.9 526.9z"})}),q.jsx("div",{style:{fontFamily:"monospace",opacity:.8},children:"DISTRIBUTED SEARCH"})]})]}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Distributed Search Engine"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"A full-stack search engine with distributed crawling, indexing, and ranking across 50k+ pages. Includes scalable inverted index with hash-based partitioning that ranks 5k+ terms with TF-IDF and PageRank."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"Distributed Systems"}),q.jsx("span",{style:S,children:"Java"}),q.jsx("span",{style:S,children:"PageRank"}),q.jsx("span",{style:S,children:"Indexing"})]}),q.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:q.jsx("a",{href:"https://github.com/CaiaG/DistributedSearchEngine",style:Z,children:"Sample Code"})})]}),q.jsxs("div",{className:"project-card",style:b,children:[q.jsxs("div",{style:{...x,background:"#abf0e8ff",color:"#22524dff"},children:[q.jsx("div",{style:I}),q.jsxs("div",{style:{zIndex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginBottom:"8px"},children:[q.jsx("path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}),q.jsx("path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}),q.jsx("path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}),q.jsx("path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}),q.jsx("path",{d:"M6 18a4 4 0 0 1-1.967-.516"}),q.jsx("path",{d:"M12 13h4"}),q.jsx("path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}),q.jsx("path",{d:"M12 8h8"}),q.jsx("path",{d:"M16 8V5a2 2 0 0 1 2-2"}),q.jsx("circle",{cx:"16",cy:"13",r:".5"}),q.jsx("circle",{cx:"18",cy:"3",r:".5"}),q.jsx("circle",{cx:"20",cy:"21",r:".5"}),q.jsx("circle",{cx:"20",cy:"8",r:".5"})]}),q.jsx("div",{style:{fontFamily:"monospace",opacity:.8,fontSize:"0.75rem"},children:"MRI FEATURE ANALYSIS"})]})]}),q.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"3D MRI Feature Analysis"}),q.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Built a 3D MRI preprocessing and classification pipeline using SimpleITK and MONAI. Trained the MRI data on a DenseNet3D and evaluated with accuracy & confusion matrix for features such as age and gender."}),q.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[q.jsx("span",{style:S,children:"Python"}),q.jsx("span",{style:S,children:"DenseNet3D"}),q.jsx("span",{style:S,children:"Monai"})]}),q.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:q.jsx("a",{href:"https://github.com/CaiaG/MRIclassificationpipeline",style:Z,children:"Sample Code"})})]})]}),q.jsx("div",{style:w}),q.jsx("h2",{style:M,children:"Experience"}),q.jsxs("div",{children:[q.jsxs("div",{style:L,children:[q.jsxs("div",{style:N,children:[q.jsx("h3",{style:z,children:"Realtime Software Engineering Intern"}),q.jsx("span",{style:T,children:"June 2025 – August 2025"})]}),q.jsx("p",{style:P,children:"Arthrex | Naples, FL"}),q.jsxs("ul",{style:K,children:[q.jsx("li",{children:"Prototyped a virtual assistant in Unreal Engine with custom C++ TTS/ASR pipelines containerized in Docker; demoed to AR/VR team lead on Arthrex’s Holodeck virtual production stage using Pixera for 3D projection."}),q.jsx("li",{children:"Integrated and tested real-time AI speech tools: Convai, NVIDIA ACE, Kokoro (via FastAPI), and NVIDIA Parakeet."}),q.jsx("li",{children:"Prototyped 5 interactive AR ads for Arthrex Vet team using the ImagineWebAR plugin for Unity."})]})]}),q.jsxs("div",{style:L,children:[q.jsxs("div",{style:N,children:[q.jsx("h3",{style:z,children:"Research Assistant for Department of Radiology"}),q.jsx("span",{style:T,children:"June 2024 – September 2024"})]}),q.jsx("p",{style:P,children:"Penn Medicine | Remote"}),q.jsxs("ul",{style:K,children:[q.jsx("li",{children:"Used MONAI framework on ~500 MRI images to identify features that predict the development of Alzheimer's."}),q.jsx("li",{children:"Implemented models with DenseNet architecture to improve predictive accuracy from 50% to 85%."})]})]}),q.jsxs("div",{style:L,children:[q.jsxs("div",{style:N,children:[q.jsx("h3",{style:z,children:"CS Intern"}),q.jsx("span",{style:T,children:"June 2023 – July 2023"})]}),q.jsx("p",{style:P,children:"University of Ghana Noguchi Memorial Institute for Medical Research | Ghana, Accra"}),q.jsxs("ul",{style:K,children:[q.jsx("li",{children:"Optimized food recognition AI (FRANI) to support nutrition programs in Global South schools."}),q.jsx("li",{children:"Consolidated 100+ class labels and boosted model performance by using Fastai, WandB, and Optuna."})]})]})]}),q.jsx("div",{style:w}),q.jsx("h2",{style:M,children:"Skills"}),q.jsx("p",{style:G,children:"Programming Languages"}),q.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1.5rem"},children:["C/C++","Java","Python","Vite/React","SQL","R","GLSL"].map(X=>q.jsx("span",{style:{backgroundColor:"#2d728f",color:"#fdf9d2",padding:"0.35rem 0.75rem",borderRadius:"16px",fontSize:"0.85rem",fontWeight:"600"},children:X},X))}),q.jsx("p",{style:G,children:"3D Graphics & Tools"}),q.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1.5rem"},children:["Maya","Blender","ZBrush","Houdini","Unity","Unreal Engine"].map(X=>q.jsx("span",{style:{backgroundColor:"#2d728f",color:"#fdf9d2",padding:"0.35rem 0.75rem",borderRadius:"16px",fontSize:"0.85rem",fontWeight:"600"},children:X},X))}),q.jsx("div",{style:w}),q.jsx("h2",{style:M,children:"Contact"}),q.jsxs("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"flex-start"},children:[q.jsx("a",{href:"mailto:caiaygelli@gmail.com",style:{...Z,fontSize:"1rem"},children:"caiaygelli@gmail.com"}),q.jsxs("div",{style:{display:"flex",gap:"1rem",fontSize:"0.95rem"},children:[q.jsx("a",{href:"https://www.linkedin.com/in/caia-gelli-14b6a3225/",style:Z,children:"LinkedIn"}),q.jsx("span",{style:{color:"#1e3158ff"},children:"|"}),q.jsx("a",{href:"https://github.com/CaiaG",style:Z,children:"GitHub"})]})]}),q.jsx("div",{style:{marginTop:"4rem",textAlign:"left"},children:q.jsx("a",{href:"https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/",style:{color:"#6B7280",fontWeight:"400",textDecoration:"none",fontSize:"0.75rem"},children:"Free SVG Backgrounds and Patterns by SVGBackgrounds.com"})})]})})]})]})}function u3(){return q.jsx("div",{children:q.jsx("main",{children:q.jsxs(pM,{children:[q.jsx(Qd,{path:"/",element:q.jsx(c3,{})}),q.jsx(Qd,{path:"*",element:q.jsx("div",{children:"Custom 404 Page Content"})})]})})})}const ev=document.getElementById("root");ev?py.createRoot(ev).render(q.jsx(he.StrictMode,{children:q.jsx(BM,{children:q.jsx(u3,{})})})):console.error("Could not find root element to mount the application.");
