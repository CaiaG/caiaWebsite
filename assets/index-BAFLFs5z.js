(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var cd={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function sy(){if(H0)return Oo;H0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var G0;function oy(){return G0||(G0=1,cd.exports=sy()),cd.exports}var G=oy(),ud={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function ly(){if(V0)return ct;V0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function S(D,Q,de){this.props=D,this.context=Q,this.refs=C,this.updater=de||E}S.prototype.isReactComponent={},S.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(D,Q,de){this.props=D,this.context=Q,this.refs=C,this.updater=de||E}var I=U.prototype=new x;I.constructor=U,b(I,S.prototype),I.isPureReactComponent=!0;var w=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function H(D,Q,de,be,Fe,Ge){return de=Ge.ref,{$$typeof:s,type:D,key:Q,ref:de!==void 0?de:null,props:Ge}}function T(D,Q){return H(D.type,Q,void 0,void 0,void 0,D.props)}function O(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function Y(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(de){return Q[de]})}var V=/\/+/g;function J(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):Q.toString(36)}function pe(){}function fe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(pe,pe):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Z(D,Q,de,be,Fe){var Ge=typeof D;(Ge==="undefined"||Ge==="boolean")&&(D=null);var ie=!1;if(D===null)ie=!0;else switch(Ge){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(D.$$typeof){case s:case e:ie=!0;break;case v:return ie=D._init,Z(ie(D._payload),Q,de,be,Fe)}}if(ie)return Fe=Fe(D),ie=be===""?"."+J(D,0):be,w(Fe)?(de="",ie!=null&&(de=ie.replace(V,"$&/")+"/"),Z(Fe,Q,de,"",function(je){return je})):Fe!=null&&(O(Fe)&&(Fe=T(Fe,de+(Fe.key==null||D&&D.key===Fe.key?"":(""+Fe.key).replace(V,"$&/")+"/")+ie)),Q.push(Fe)),1;ie=0;var Te=be===""?".":be+":";if(w(D))for(var ye=0;ye<D.length;ye++)be=D[ye],Ge=Te+J(be,ye),ie+=Z(be,Q,de,Ge,Fe);else if(ye=g(D),typeof ye=="function")for(D=ye.call(D),ye=0;!(be=D.next()).done;)be=be.value,Ge=Te+J(be,ye++),ie+=Z(be,Q,de,Ge,Fe);else if(Ge==="object"){if(typeof D.then=="function")return Z(fe(D),Q,de,be,Fe);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function F(D,Q,de){if(D==null)return D;var be=[],Fe=0;return Z(D,be,"","",function(Ge){return Q.call(de,Ge,Fe++)}),be}function B(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(de){(D._status===0||D._status===-1)&&(D._status=1,D._result=de)},function(de){(D._status===0||D._status===-1)&&(D._status=2,D._result=de)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var te=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ge(){}return ct.Children={map:F,forEach:function(D,Q,de){F(D,function(){Q.apply(this,arguments)},de)},count:function(D){var Q=0;return F(D,function(){Q++}),Q},toArray:function(D){return F(D,function(Q){return Q})||[]},only:function(D){if(!O(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ct.Component=S,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=U,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ct.__COMPILER_RUNTIME={__proto__:null,c:function(D){return N.H.useMemoCache(D)}},ct.cache=function(D){return function(){return D.apply(null,arguments)}},ct.cloneElement=function(D,Q,de){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var be=b({},D.props),Fe=D.key,Ge=void 0;if(Q!=null)for(ie in Q.ref!==void 0&&(Ge=void 0),Q.key!==void 0&&(Fe=""+Q.key),Q)!P.call(Q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Q.ref===void 0||(be[ie]=Q[ie]);var ie=arguments.length-2;if(ie===1)be.children=de;else if(1<ie){for(var Te=Array(ie),ye=0;ye<ie;ye++)Te[ye]=arguments[ye+2];be.children=Te}return H(D.type,Fe,void 0,void 0,Ge,be)},ct.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ct.createElement=function(D,Q,de){var be,Fe={},Ge=null;if(Q!=null)for(be in Q.key!==void 0&&(Ge=""+Q.key),Q)P.call(Q,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Fe[be]=Q[be]);var ie=arguments.length-2;if(ie===1)Fe.children=de;else if(1<ie){for(var Te=Array(ie),ye=0;ye<ie;ye++)Te[ye]=arguments[ye+2];Fe.children=Te}if(D&&D.defaultProps)for(be in ie=D.defaultProps,ie)Fe[be]===void 0&&(Fe[be]=ie[be]);return H(D,Ge,void 0,void 0,null,Fe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(D){return{$$typeof:p,render:D}},ct.isValidElement=O,ct.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:B}},ct.memo=function(D,Q){return{$$typeof:h,type:D,compare:Q===void 0?null:Q}},ct.startTransition=function(D){var Q=N.T,de={};N.T=de;try{var be=D(),Fe=N.S;Fe!==null&&Fe(de,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(ge,te)}catch(Ge){te(Ge)}finally{N.T=Q}},ct.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ct.use=function(D){return N.H.use(D)},ct.useActionState=function(D,Q,de){return N.H.useActionState(D,Q,de)},ct.useCallback=function(D,Q){return N.H.useCallback(D,Q)},ct.useContext=function(D){return N.H.useContext(D)},ct.useDebugValue=function(){},ct.useDeferredValue=function(D,Q){return N.H.useDeferredValue(D,Q)},ct.useEffect=function(D,Q,de){var be=N.H;if(typeof de=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(D,Q)},ct.useId=function(){return N.H.useId()},ct.useImperativeHandle=function(D,Q,de){return N.H.useImperativeHandle(D,Q,de)},ct.useInsertionEffect=function(D,Q){return N.H.useInsertionEffect(D,Q)},ct.useLayoutEffect=function(D,Q){return N.H.useLayoutEffect(D,Q)},ct.useMemo=function(D,Q){return N.H.useMemo(D,Q)},ct.useOptimistic=function(D,Q){return N.H.useOptimistic(D,Q)},ct.useReducer=function(D,Q,de){return N.H.useReducer(D,Q,de)},ct.useRef=function(D){return N.H.useRef(D)},ct.useState=function(D){return N.H.useState(D)},ct.useSyncExternalStore=function(D,Q,de){return N.H.useSyncExternalStore(D,Q,de)},ct.useTransition=function(){return N.H.useTransition()},ct.version="19.1.0",ct}var k0;function kh(){return k0||(k0=1,ud.exports=ly()),ud.exports}var me=kh(),fd={exports:{}},Io={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function cy(){return X0||(X0=1,function(s){function e(F,B){var te=F.length;F.push(B);e:for(;0<te;){var ge=te-1>>>1,D=F[ge];if(0<l(D,B))F[ge]=B,F[te]=D,te=ge;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],te=F.pop();if(te!==B){F[0]=te;e:for(var ge=0,D=F.length,Q=D>>>1;ge<Q;){var de=2*(ge+1)-1,be=F[de],Fe=de+1,Ge=F[Fe];if(0>l(be,te))Fe<D&&0>l(Ge,be)?(F[ge]=Ge,F[Fe]=te,ge=Fe):(F[ge]=be,F[de]=te,ge=de);else if(Fe<D&&0>l(Ge,te))F[ge]=Ge,F[Fe]=te,ge=Fe;else break e}}return B}function l(F,B){var te=F.sortIndex-B.sortIndex;return te!==0?te:F.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],v=1,_=null,g=3,E=!1,b=!1,C=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var B=i(h);B!==null;){if(B.callback===null)r(h);else if(B.startTime<=F)r(h),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(h)}}function N(F){if(C=!1,w(F),!b)if(i(m)!==null)b=!0,P||(P=!0,J());else{var B=i(h);B!==null&&Z(N,B.startTime-F)}}var P=!1,H=-1,T=5,O=-1;function Y(){return S?!0:!(s.unstable_now()-O<T)}function V(){if(S=!1,P){var F=s.unstable_now();O=F;var B=!0;try{e:{b=!1,C&&(C=!1,U(H),H=-1),E=!0;var te=g;try{t:{for(w(F),_=i(m);_!==null&&!(_.expirationTime>F&&Y());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,g=_.priorityLevel;var D=ge(_.expirationTime<=F);if(F=s.unstable_now(),typeof D=="function"){_.callback=D,w(F),B=!0;break t}_===i(m)&&r(m),w(F)}else r(m);_=i(m)}if(_!==null)B=!0;else{var Q=i(h);Q!==null&&Z(N,Q.startTime-F),B=!1}}break e}finally{_=null,g=te,E=!1}B=void 0}}finally{B?J():P=!1}}}var J;if(typeof I=="function")J=function(){I(V)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,fe=pe.port2;pe.port1.onmessage=V,J=function(){fe.postMessage(null)}}else J=function(){x(V,0)};function Z(F,B){H=x(function(){F(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(F){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var te=g;g=B;try{return F()}finally{g=te}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=g;g=F;try{return B()}finally{g=te}},s.unstable_scheduleCallback=function(F,B,te){var ge=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ge+te:ge):te=ge,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=te+D,F={id:v++,callback:B,priorityLevel:F,startTime:te,expirationTime:D,sortIndex:-1},te>ge?(F.sortIndex=te,e(h,F),i(m)===null&&F===i(h)&&(C?(U(H),H=-1):C=!0,Z(N,te-ge))):(F.sortIndex=D,e(m,F),b||E||(b=!0,P||(P=!0,J()))),F},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(F){var B=g;return function(){var te=g;g=B;try{return F.apply(this,arguments)}finally{g=te}}}}(hd)),hd}var W0;function uy(){return W0||(W0=1,dd.exports=cy()),dd.exports}var pd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function fy(){if(q0)return Dn;q0=1;var s=kh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},Dn.flushSync=function(m){var h=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=v,r.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,v){return f.H.useFormState(m,h,v)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var Y0;function dy(){if(Y0)return pd.exports;Y0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pd.exports=fy(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function hy(){if(Z0)return Io;Z0=1;var s=uy(),e=kh(),i=dy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var Z=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ge=[],D=-1;function Q(t){return{current:t}}function de(t){0>D||(t.current=ge[D],ge[D]=null,D--)}function be(t,n){D++,ge[D]=t.current,t.current=n}var Fe=Q(null),Ge=Q(null),ie=Q(null),Te=Q(null);function ye(t,n){switch(be(ie,n),be(Ge,t),be(Fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?p0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=p0(n),t=m0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}de(Fe),be(Fe,t)}function je(){de(Fe),de(Ge),de(ie)}function it(t){t.memoizedState!==null&&be(Te,t);var n=Fe.current,a=m0(n,t.type);n!==a&&(be(Ge,t),be(Fe,a))}function Qe(t){Ge.current===t&&(de(Fe),de(Ge)),Te.current===t&&(de(Te),Do._currentValue=te)}var Wt=Object.prototype.hasOwnProperty,ut=s.unstable_scheduleCallback,At=s.unstable_cancelCallback,Mt=s.unstable_shouldYield,_t=s.unstable_requestPaint,Rt=s.unstable_now,nn=s.unstable_getCurrentPriorityLevel,an=s.unstable_ImmediatePriority,ln=s.unstable_UserBlockingPriority,Gt=s.unstable_NormalPriority,Jt=s.unstable_LowPriority,q=s.unstable_IdlePriority,Cn=s.log,Ct=s.unstable_setDisableYieldValue,L=null,M=null;function K(t){if(typeof Cn=="function"&&Ct(t),M&&typeof M.setStrictMode=="function")try{M.setStrictMode(L,t)}catch{}}var $=Math.clz32?Math.clz32:De,he=Math.log,Ae=Math.LN2;function De(t){return t>>>=0,t===0?32:31-(he(t)/Ae|0)|0}var ue=256,ve=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Re(o):(y&=R,y!==0?u=Re(y):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~d,R!==0?u=Re(R):y!==0?u=Re(y):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var t=ue;return ue<<=1,(ue&4194048)===0&&(ue=256),t}function Je(){var t=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),t}function at(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function X(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,ae=t.hiddenUpdates;for(a=y&~a;0<a;){var _e=31-$(a),Me=1<<_e;R[_e]=0,z[_e]=-1;var se=ae[_e];if(se!==null)for(ae[_e]=null,_e=0;_e<se.length;_e++){var ce=se[_e];ce!==null&&(ce.lane&=-536870913)}a&=~Me}o!==0&&xe(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function xe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-$(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ue(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-$(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Pe(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ee(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qe(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:P0(t.type))}function ke(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var wt=Math.random().toString(36).slice(2),ot="__reactFiber$"+wt,qt="__reactProps$"+wt,Mn="__reactContainer$"+wt,Hs="__reactEvents$"+wt,ou="__reactListeners$"+wt,il="__reactHandles$"+wt,Pr="__reactResources$"+wt,ir="__reactMarker$"+wt;function Or(t){delete t[ot],delete t[qt],delete t[Hs],delete t[ou],delete t[il]}function Wi(t){var n=t[ot];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mn]||a[ot]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=x0(t);t!==null;){if(a=t[ot])return a;t=x0(t)}return n}t=a,a=t.parentNode}return null}function zn(t){if(t=t[ot]||t[Mn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function qi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Yi(t){var n=t[Pr];return n||(n=t[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(t){t[ir]=!0}var ar=new Set,Gs={};function ii(t,n){Zi(t,n),Zi(t+"Capture",n)}function Zi(t,n){for(Gs[t]=n,t=0;t<n.length;t++)ar.add(n[t])}var al=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rl={},sl={};function lu(t){return Wt.call(sl,t)?!0:Wt.call(rl,t)?!1:al.test(t)?sl[t]=!0:(rl[t]=!0,!1)}function Ir(t,n,a){if(lu(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function A(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function W(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var le,re;function ne(t){if(le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);le=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+le+t+re}var Ne=!1;function Be(t,n){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ce){var se=ce}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ce){se=ce}t.call(Me.prototype)}}else{try{throw Error()}catch(ce){se=ce}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var z=y.split(`
`),ae=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ae.length)for(o=z.length-1,u=ae.length-1;1<=o&&0<=u&&z[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ae[u]){var _e=`
`+z[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ne(a):""}function Oe(t){switch(t.tag){case 26:case 27:case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return Be(t.type,!1);case 11:return Be(t.type.render,!1);case 1:return Be(t.type,!0);case 31:return ne("Activity");default:return""}}function Xe(t){try{var n="";do n+=Oe(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lt(t){var n=rt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=lt(t))}function Dt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yt=/[\n"\\]/g;function ft(t){return t.replace(Yt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cn(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?En(t,y,ze(n)):a!=null?En(t,y,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ze(R):t.removeAttribute("name")}function He(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function En(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dt(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function qn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Z(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ta=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ta.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Zt(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Lt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Lt(t,d,n[d])}function ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ft=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ci=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(t){return Ci.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Fr=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,zr=null;function gp(t){var n=zn(t);if(n&&(t=n.stateNode)){var a=t[qt]||null;e:switch(t=n.stateNode,n.type){case"input":if(cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[qt]||null;if(!u)throw Error(r(90));cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Dt(o)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&dt(t,!!a.multiple,n,!1)}}}var uu=!1;function vp(t,n,a){if(uu)return t(n,a);uu=!0;try{var o=t(n);return o}finally{if(uu=!1,(Br!==null||zr!==null)&&(Wl(),Br&&(n=Br,t=zr,zr=Br=null,gp(n),t)))for(n=0;n<t.length;n++)gp(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[qt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Ki)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){fu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{fu=!1}var Aa=null,du=null,ol=null;function _p(){if(ol)return ol;var t,n=du,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function xp(){return!1}function Hn(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?cl:xp,this.isPropagationStopped=xp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Hn(rr),Xs=v({},rr,{view:0,detail:0}),sx=Hn(Xs),hu,pu,Ws,fl=v({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(hu=t.screenX-Ws.screenX,pu=t.screenY-Ws.screenY):pu=hu=0,Ws=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Sp=Hn(fl),ox=v({},fl,{dataTransfer:0}),lx=Hn(ox),cx=v({},Xs,{relatedTarget:0}),mu=Hn(cx),ux=v({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Hn(ux),dx=v({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hx=Hn(dx),px=v({},rr,{data:0}),yp=Hn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vx[t])?!!n[t]:!1}function gu(){return _x}var xx=v({},Xs,{key:function(t){if(t.key){var n=mx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sx=Hn(xx),yx=v({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Hn(yx),Mx=v({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Ex=Hn(Mx),bx=v({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Hn(bx),Ax=v({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=Hn(Ax),Cx=v({},rr,{newState:0,oldState:0}),wx=Hn(Cx),Dx=[9,13,27,32],vu=Ki&&"CompositionEvent"in window,qs=null;Ki&&"documentMode"in document&&(qs=document.documentMode);var Ux=Ki&&"TextEvent"in window&&!qs,Ep=Ki&&(!vu||qs&&8<qs&&11>=qs),bp=" ",Tp=!1;function Ap(t,n){switch(t){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Lx(t,n){switch(t){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,bp);case"textInput":return t=n.data,t===bp&&Tp?null:t;default:return null}}function Nx(t,n){if(Hr)return t==="compositionend"||!vu&&Ap(t,n)?(t=_p(),ol=du=Aa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ep&&n.locale!=="ko"?null:n.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Px[t.type]:n==="textarea"}function wp(t,n,a,o){Br?zr?zr.push(o):zr=[o]:Br=o,n=Ql(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ys=null,Zs=null;function Ox(t){c0(t,0)}function dl(t){var n=qi(t);if(Dt(n))return t}function Dp(t,n){if(t==="change")return n}var Up=!1;if(Ki){var _u;if(Ki){var xu="oninput"in document;if(!xu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),xu=typeof Lp.oninput=="function"}_u=xu}else _u=!1;Up=_u&&(!document.documentMode||9<document.documentMode)}function Np(){Ys&&(Ys.detachEvent("onpropertychange",Pp),Zs=Ys=null)}function Pp(t){if(t.propertyName==="value"&&dl(Zs)){var n=[];wp(n,Zs,t,cu(t)),vp(Ox,n)}}function Ix(t,n,a){t==="focusin"?(Np(),Ys=n,Zs=a,Ys.attachEvent("onpropertychange",Pp)):t==="focusout"&&Np()}function Fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Zs)}function Bx(t,n){if(t==="click")return dl(n)}function zx(t,n){if(t==="input"||t==="change")return dl(n)}function Hx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Hx;function Ks(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Wt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,n){var a=Op(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function Fp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Gx=Ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,yu=null,js=null,Mu=!1;function zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Gr==null||Gr!==kt(o)||(o=Gr,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),js&&Ks(js,o)||(js=o,o=Ql(yu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Eu={},Hp={};Ki&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(Eu[t])return Eu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Eu[t]=n[a];return t}var Gp=or("animationend"),Vp=or("animationiteration"),kp=or("animationstart"),Vx=or("transitionrun"),kx=or("transitionstart"),Xx=or("transitioncancel"),Xp=or("transitionend"),Wp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function vi(t,n){Wp.set(t,n),ii(n,[t])}var qp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},qp.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var si=[],kr=0,Tu=0;function hl(){for(var t=kr,n=Tu=kr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Yp(a,u,d)}}function pl(t,n,a,o){si[kr++]=t,si[kr++]=n,si[kr++]=a,si[kr++]=o,Tu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return pl(t,n,a,o),ml(t)}function Xr(t,n){return pl(t,null,null,n),ml(t)}function Yp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-$(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function ml(t){if(50<Mo)throw Mo=0,Nf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function Wx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new Wx(t,n,a,o)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Ru(t)&&(y=1);else if(typeof t=="string")y=YS(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=Zn(31,a,n,u),t.elementType=O,t.lanes=d,t;case b:return lr(a.children,u,d,n);case C:y=8,u|=24;break;case S:return t=Zn(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case N:return t=Zn(13,a,n,u),t.elementType=N,t.lanes=d,t;case P:return t=Zn(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case I:y=10;break e;case U:y=9;break e;case w:y=11;break e;case H:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function lr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Cu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function wu(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qr=[],Yr=0,vl=null,_l=0,oi=[],li=0,cr=null,Qi=1,Ji="";function ur(t,n){qr[Yr++]=_l,qr[Yr++]=vl,vl=t,_l=n}function Kp(t,n,a){oi[li++]=Qi,oi[li++]=Ji,oi[li++]=cr,cr=t;var o=Qi;t=Ji;var u=32-$(o)-1;o&=~(1<<u),a+=1;var d=32-$(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Qi=1<<32-$(n)+u|a<<u|o,Ji=d+t}else Qi=1<<d|a<<u|o,Ji=t}function Du(t){t.return!==null&&(ur(t,1),Kp(t,1,0))}function Uu(t){for(;t===vl;)vl=qr[--Yr],qr[Yr]=null,_l=qr[--Yr],qr[Yr]=null;for(;t===cr;)cr=oi[--li],oi[li]=null,Ji=oi[--li],oi[li]=null,Qi=oi[--li],oi[li]=null}var In=null,$t=null,Ut=!1,fr=null,wi=!1,Lu=Error(r(519));function dr(t){var n=Error(r(418,""));throw $s(ri(n,t)),Lu}function jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ot]=t,n[qt]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)vt(bo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ye(n);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),qn(n,o.value,o.defaultValue,o.children),Ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||h0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||dr(t)}function Qp(t){for(In=t.return;In;)switch(In.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function Qs(t){if(t!==In)return!1;if(!Ut)return Qp(t),Ut=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&$t&&dr(t),Qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Va(t.type)?(t=$f,$f=null,$t=t):$t=n):$t=In?xi(t.stateNode.nextSibling):null;return!0}function Js(){$t=In=null,Ut=!1}function Jp(){var t=fr;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),fr=null),t}function $s(t){fr===null?fr=[t]:fr.push(t)}var Nu=Q(null),hr=null,$i=null;function Ra(t,n,a){be(Nu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Nu.current,de(Nu)}function Pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Pu(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Pu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function eo(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;Yn(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===Te.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Ou(n,t,a,o),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return $p(hr,t)}function Sl(t,n){return hr===null&&pr(t),$p(t,n)}function $p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(r(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Yx=s.unstable_scheduleCallback,Zx=s.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new qx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Yx(Zx,function(){t.controller.abort()})}var no=null,Fu=0,Zr=0,Kr=null;function Kx(t,n){if(no===null){var a=no=[];Fu=0,Zr=Hf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(em,em),n}function em(){if(--Fu===0&&no!==null){Kr!==null&&(Kr.status="fulfilled");var t=no;no=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function jx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var tm=F.S;F.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kx(t,n),tm!==null&&tm(t,n)};var mr=Q(null);function Bu(){var t=mr.current;return t!==null?t:Xt.pooledCache}function yl(t,n){n===null?be(mr,mr.current):be(mr,n.pool)}function nm(){var t=Bu();return t===null?null:{parent:pn._currentValue,pool:t}}var io=Error(r(460)),im=Error(r(474)),Ml=Error(r(542)),zu={then:function(){}};function am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function El(){}function rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t;default:if(typeof n.status=="string")n.then(El,El);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t}throw ao=n,io}}var ao=null;function sm(){if(ao===null)throw Error(r(459));var t=ao;return ao=null,t}function om(t){if(t===io||t===Ml)throw Error(r(483))}var Ca=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(t),Yp(t,null,a),n}return pl(t,o,n,a),ml(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ue(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ku=!1;function so(){if(ku){var t=Kr;if(t!==null)throw t}}function oo(t,n,a,o){ku=!1;var u=t.updateQueue;Ca=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,ae=z.next;z.next=null,y===null?d=ae:y.next=ae,y=z;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==y&&(R===null?_e.firstBaseUpdate=ae:R.next=ae,_e.lastBaseUpdate=z))}if(d!==null){var Me=u.baseState;y=0,_e=ae=z=null,R=d;do{var se=R.lane&-536870913,ce=se!==R.lane;if(ce?(yt&se)===se:(o&se)===se){se!==0&&se===Zr&&(ku=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var tt=t,$e=R;se=n;var Ht=a;switch($e.tag){case 1:if(tt=$e.payload,typeof tt=="function"){Me=tt.call(Ht,Me,se);break e}Me=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=$e.payload,se=typeof tt=="function"?tt.call(Ht,Me,se):tt,se==null)break e;Me=v({},Me,se);break e;case 2:Ca=!0}}se=R.callback,se!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ae=_e=ce,z=Me):_e=_e.next=ce,y|=se;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);_e===null&&(z=Me),u.baseState=z,u.firstBaseUpdate=ae,u.lastBaseUpdate=_e,d===null&&(u.shared.lanes=0),Ba|=y,t.lanes=y,t.memoizedState=Me}}function lm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lm(a[t],n)}var jr=Q(null),bl=Q(0);function um(t,n){t=oa,be(bl,t),be(jr,n),oa=t|n.baseLanes}function Xu(){be(bl,oa),be(jr,jr.current)}function Wu(){oa=bl.current,de(jr),de(bl)}var Ua=0,pt=null,Bt=null,un=null,Tl=!1,Qr=!1,gr=!1,Al=0,lo=0,Jr=null,Qx=0;function sn(){throw Error(r(321))}function qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Yu(t,n,a,o,u,d){return Ua=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Ym:Zm,gr=!1,d=a(o,u),gr=!1,Qr&&(d=dm(n,a,o,u)),fm(t),d}function fm(t){F.H=Ll;var n=Bt!==null&&Bt.next!==null;if(Ua=0,un=Bt=pt=null,Tl=!1,lo=0,Jr=null,n)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&xl(t)&&(_n=!0))}function dm(t,n,a,o){pt=t;var u=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,un=Bt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=aS,d=n(a,o)}while(Qr);return d}function Jx(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(pt.flags|=1024),n}function Zu(){var t=Al!==0;return Al=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ju(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}Ua=0,un=Bt=pt=null,Qr=!1,lo=Al=0,Jr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pt.memoizedState=un=t:un=un.next=t,un}function fn(){if(Bt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=un===null?pt.memoizedState:un.next;if(n!==null)un=n,Bt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},un===null?pt.memoizedState=un=t:un=un.next=t}return un}function Qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Jr===null&&(Jr=[]),t=rm(Jr,t,n),n=pt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Ym:Zm),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===I)return wn(t)}throw Error(r(438,String(t)))}function Ju(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Qu(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=fn();return $u(n,Bt,t)}function $u(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,z=null,ae=n,_e=!1;do{var Me=ae.lane&-536870913;if(Me!==ae.lane?(yt&Me)===Me:(Ua&Me)===Me){var se=ae.revertLane;if(se===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Me===Zr&&(_e=!0);else if((Ua&se)===se){ae=ae.next,se===Zr&&(_e=!0);continue}else Me={lane:0,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},z===null?(R=z=Me,y=d):z=z.next=Me,pt.lanes|=se,Ba|=se;Me=ae.action,gr&&a(d,Me),d=ae.hasEagerState?ae.eagerState:a(d,Me)}else se={lane:Me,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},z===null?(R=z=se,y=d):z=z.next=se,pt.lanes|=Me,Ba|=Me;ae=ae.next}while(ae!==null&&ae!==n);if(z===null?y=d:z.next=R,!Yn(d,t.memoizedState)&&(_n=!0,_e&&(a=Kr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ef(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);Yn(d,n.memoizedState)||(_n=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function hm(t,n,a){var o=pt,u=fn(),d=Ut;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Yn((Bt||u).memoizedState,a);y&&(u.memoizedState=a,_n=!0),u=u.queue;var R=gm.bind(null,o,u,t);if(uo(2048,8,R,[t]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,$r(9,wl(),mm.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));d||(Ua&124)!==0||pm(o,n,a)}return a}function pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Qu(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mm(t,n,a,o){n.value=a,n.getSnapshot=o,vm(n)&&_m(t)}function gm(t,n,a){return a(function(){vm(n)&&_m(t)})}function vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function _m(t){var n=Xr(t,2);n!==null&&$n(n,t,2)}function tf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),gr){K(!0);try{a()}finally{K(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function xm(t,n,a,o){return t.baseState=a,$u(t,Bt,typeof o=="function"?o:ta)}function $x(t,n,a,o,u){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Sm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Sm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,y={};F.T=y;try{var R=a(u,o),z=F.S;z!==null&&z(y,R),ym(t,n,R)}catch(ae){nf(t,n,ae)}finally{F.T=d}}else try{d=a(u,o),ym(t,n,d)}catch(ae){nf(t,n,ae)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mm(t,n,o)},function(o){return nf(t,n,o)}):Mm(t,n,a)}function Mm(t,n,a){n.status="fulfilled",n.value=a,Em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sm(t,a)))}function nf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bm(t,n){return n}function Tm(t,n){if(Ut){var a=Xt.formState;if(a!==null){e:{var o=pt;if(Ut){if($t){t:{for(var u=$t,d=wi;u.nodeType!==8;){if(!d){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=xi(u.nextSibling),o=u.data==="F!";break e}}dr(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,pt,o),o.dispatch=a,o=tf(!1),d=lf.bind(null,pt,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=$x.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Am(t){var n=fn();return Rm(n,Bt,t)}function Rm(t,n,a){if(n=$u(t,n,bm)[0],t=Cl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(y){throw y===io?Ml:y}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,$r(9,wl(),eS.bind(null,u,a),null)),[o,d,t]}function eS(t,n){t.action=n}function Cm(t){var n=fn(),a=Bt;if(a!==null)return Rm(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function $r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Qu(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function wl(){return{destroy:void 0,resource:void 0}}function wm(){return fn().memoizedState}function Dl(t,n,a,o){var u=Gn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=$r(1|n,wl(),a,o)}function uo(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Bt!==null&&o!==null&&qu(o,Bt.memoizedState.deps)?u.memoizedState=$r(n,d,a,o):(pt.flags|=t,u.memoizedState=$r(1|n,d,a,o))}function Dm(t,n){Dl(8390656,8,t,n)}function Um(t,n){uo(2048,8,t,n)}function Lm(t,n){return uo(4,2,t,n)}function Nm(t,n){return uo(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Om(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,Pm.bind(null,n,t),a)}function af(){}function Im(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&qu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Fm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&qu(n,o[1]))return o[0];if(o=t(),gr){K(!0);try{t()}finally{K(!1)}}return a.memoizedState=[o,n],o}function rf(t,n,a){return a===void 0||(Ua&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Hg(),pt.lanes|=t,Ba|=t,a)}function Bm(t,n,a,o){return Yn(a,n)?a:jr.current!==null?(t=rf(t,a,o),Yn(t,n)||(_n=!0),t):(Ua&42)===0?(_n=!0,t.memoizedState=a):(t=Hg(),pt.lanes|=t,Ba|=t,n)}function zm(t,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var y=F.T,R={};F.T=R,lf(t,!1,n,a);try{var z=u(),ae=F.S;if(ae!==null&&ae(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var _e=jx(z,o);fo(t,n,_e,Jn(t))}else fo(t,n,o,Jn(t))}catch(Me){fo(t,n,{then:function(){},status:"rejected",reason:Me},Jn())}finally{B.p=d,F.T=y}}function tS(){}function sf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Hm(t).queue;zm(t,u,n,te,a===null?tS:function(){return Gm(t),a(o)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gm(t){var n=Hm(t).next.queue;fo(t,n,{},Jn())}function of(){return wn(Do)}function Vm(){return fn().memoizedState}function km(){return fn().memoizedState}function nS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=wa(a);var o=Da(n,t,a);o!==null&&($n(o,n,a),ro(o,n,a)),n={cache:Iu()},t.payload=n;return}n=n.return}}function iS(t,n,a){var o=Jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Wm(n,a):(a=Au(t,n,a,o),a!==null&&($n(a,t,o),qm(a,n,o)))}function Xm(t,n,a){var o=Jn();fo(t,n,a,o)}function fo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Wm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,Yn(R,y))return pl(t,n,u,0),Xt===null&&hl(),!1}catch{}finally{}if(a=Au(t,n,u,o),a!==null)return $n(a,t,o),qm(a,n,o),!0}return!1}function lf(t,n,a,o){if(o={lane:2,revertLane:Hf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=Au(t,a,o,2),n!==null&&$n(n,t,2)}function Ul(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Wm(t,n){Qr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ue(t,a)}}var Ll={readContext:wn,use:Rl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Ym={readContext:wn,use:Rl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(gr){K(!0);try{t()}finally{K(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(gr){K(!0);try{a(n)}finally{K(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=iS.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=tf(t);var n=t.queue,a=Xm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:af,useDeferredValue:function(t,n){var a=Gn();return rf(a,t,n)},useTransition:function(){var t=tf(!1);return t=zm.bind(null,pt,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Gn();if(Ut){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(yt&124)!==0||pm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Dm(gm.bind(null,o,d,t),[t]),o.flags|=2048,$r(9,wl(),mm.bind(null,o,d,a,n),null),a},useId:function(){var t=Gn(),n=Xt.identifierPrefix;if(Ut){var a=Ji,o=Qi;a=(o&~(1<<32-$(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Qx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:of,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return Gn().memoizedState=nS.bind(null,pt)}},Zm={readContext:wn,use:Rl,useCallback:Im,useContext:wn,useEffect:Um,useImperativeHandle:Om,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:Fm,useReducer:Cl,useRef:wm,useState:function(){return Cl(ta)},useDebugValue:af,useDeferredValue:function(t,n){var a=fn();return Bm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=Cl(ta)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:of,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=fn();return xm(a,Bt,t,n)},useMemoCache:Ju,useCacheRefresh:km},aS={readContext:wn,use:Rl,useCallback:Im,useContext:wn,useEffect:Um,useImperativeHandle:Om,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:Fm,useReducer:ef,useRef:wm,useState:function(){return ef(ta)},useDebugValue:af,useDeferredValue:function(t,n){var a=fn();return Bt===null?rf(a,t,n):Bm(a,Bt.memoizedState,t,n)},useTransition:function(){var t=ef(ta)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:hm,useId:Vm,useHostTransitionStatus:of,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=fn();return Bt!==null?xm(a,Bt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:km},es=null,ho=0;function Nl(t){var n=ho;return ho+=1,es===null&&(es=[]),rm(es,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){var n=t._init;return n(t._payload)}function jm(t){function n(j,k){if(t){var ee=j.deletions;ee===null?(j.deletions=[k],j.flags|=16):ee.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=ji(j,k),j.index=0,j.sibling=null,j}function d(j,k,ee){return j.index=ee,t?(ee=j.alternate,ee!==null?(ee=ee.index,ee<k?(j.flags|=67108866,k):ee):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function y(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,ee,Se){return k===null||k.tag!==6?(k=Cu(ee,j.mode,Se),k.return=j,k):(k=u(k,ee),k.return=j,k)}function z(j,k,ee,Se){var Ve=ee.type;return Ve===b?_e(j,k,ee.props.children,Se,ee.key):k!==null&&(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===T&&Km(Ve)===k.type)?(k=u(k,ee.props),po(k,ee),k.return=j,k):(k=gl(ee.type,ee.key,ee.props,null,j.mode,Se),po(k,ee),k.return=j,k)}function ae(j,k,ee,Se){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=wu(ee,j.mode,Se),k.return=j,k):(k=u(k,ee.children||[]),k.return=j,k)}function _e(j,k,ee,Se,Ve){return k===null||k.tag!==7?(k=lr(ee,j.mode,Se,Ve),k.return=j,k):(k=u(k,ee),k.return=j,k)}function Me(j,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Cu(""+k,j.mode,ee),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case g:return ee=gl(k.type,k.key,k.props,null,j.mode,ee),po(ee,k),ee.return=j,ee;case E:return k=wu(k,j.mode,ee),k.return=j,k;case T:var Se=k._init;return k=Se(k._payload),Me(j,k,ee)}if(Z(k)||J(k))return k=lr(k,j.mode,ee,null),k.return=j,k;if(typeof k.then=="function")return Me(j,Nl(k),ee);if(k.$$typeof===I)return Me(j,Sl(j,k),ee);Pl(j,k)}return null}function se(j,k,ee,Se){var Ve=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Ve!==null?null:R(j,k,""+ee,Se);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case g:return ee.key===Ve?z(j,k,ee,Se):null;case E:return ee.key===Ve?ae(j,k,ee,Se):null;case T:return Ve=ee._init,ee=Ve(ee._payload),se(j,k,ee,Se)}if(Z(ee)||J(ee))return Ve!==null?null:_e(j,k,ee,Se,null);if(typeof ee.then=="function")return se(j,k,Nl(ee),Se);if(ee.$$typeof===I)return se(j,k,Sl(j,ee),Se);Pl(j,ee)}return null}function ce(j,k,ee,Se,Ve){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return j=j.get(ee)||null,R(k,j,""+Se,Ve);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case g:return j=j.get(Se.key===null?ee:Se.key)||null,z(k,j,Se,Ve);case E:return j=j.get(Se.key===null?ee:Se.key)||null,ae(k,j,Se,Ve);case T:var mt=Se._init;return Se=mt(Se._payload),ce(j,k,ee,Se,Ve)}if(Z(Se)||J(Se))return j=j.get(ee)||null,_e(k,j,Se,Ve,null);if(typeof Se.then=="function")return ce(j,k,ee,Nl(Se),Ve);if(Se.$$typeof===I)return ce(j,k,ee,Sl(k,Se),Ve);Pl(k,Se)}return null}function tt(j,k,ee,Se){for(var Ve=null,mt=null,Ke=k,et=k=0,Sn=null;Ke!==null&&et<ee.length;et++){Ke.index>et?(Sn=Ke,Ke=null):Sn=Ke.sibling;var bt=se(j,Ke,ee[et],Se);if(bt===null){Ke===null&&(Ke=Sn);break}t&&Ke&&bt.alternate===null&&n(j,Ke),k=d(bt,k,et),mt===null?Ve=bt:mt.sibling=bt,mt=bt,Ke=Sn}if(et===ee.length)return a(j,Ke),Ut&&ur(j,et),Ve;if(Ke===null){for(;et<ee.length;et++)Ke=Me(j,ee[et],Se),Ke!==null&&(k=d(Ke,k,et),mt===null?Ve=Ke:mt.sibling=Ke,mt=Ke);return Ut&&ur(j,et),Ve}for(Ke=o(Ke);et<ee.length;et++)Sn=ce(Ke,j,et,ee[et],Se),Sn!==null&&(t&&Sn.alternate!==null&&Ke.delete(Sn.key===null?et:Sn.key),k=d(Sn,k,et),mt===null?Ve=Sn:mt.sibling=Sn,mt=Sn);return t&&Ke.forEach(function(Ya){return n(j,Ya)}),Ut&&ur(j,et),Ve}function $e(j,k,ee,Se){if(ee==null)throw Error(r(151));for(var Ve=null,mt=null,Ke=k,et=k=0,Sn=null,bt=ee.next();Ke!==null&&!bt.done;et++,bt=ee.next()){Ke.index>et?(Sn=Ke,Ke=null):Sn=Ke.sibling;var Ya=se(j,Ke,bt.value,Se);if(Ya===null){Ke===null&&(Ke=Sn);break}t&&Ke&&Ya.alternate===null&&n(j,Ke),k=d(Ya,k,et),mt===null?Ve=Ya:mt.sibling=Ya,mt=Ya,Ke=Sn}if(bt.done)return a(j,Ke),Ut&&ur(j,et),Ve;if(Ke===null){for(;!bt.done;et++,bt=ee.next())bt=Me(j,bt.value,Se),bt!==null&&(k=d(bt,k,et),mt===null?Ve=bt:mt.sibling=bt,mt=bt);return Ut&&ur(j,et),Ve}for(Ke=o(Ke);!bt.done;et++,bt=ee.next())bt=ce(Ke,j,et,bt.value,Se),bt!==null&&(t&&bt.alternate!==null&&Ke.delete(bt.key===null?et:bt.key),k=d(bt,k,et),mt===null?Ve=bt:mt.sibling=bt,mt=bt);return t&&Ke.forEach(function(ry){return n(j,ry)}),Ut&&ur(j,et),Ve}function Ht(j,k,ee,Se){if(typeof ee=="object"&&ee!==null&&ee.type===b&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case g:e:{for(var Ve=ee.key;k!==null;){if(k.key===Ve){if(Ve=ee.type,Ve===b){if(k.tag===7){a(j,k.sibling),Se=u(k,ee.props.children),Se.return=j,j=Se;break e}}else if(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===T&&Km(Ve)===k.type){a(j,k.sibling),Se=u(k,ee.props),po(Se,ee),Se.return=j,j=Se;break e}a(j,k);break}else n(j,k);k=k.sibling}ee.type===b?(Se=lr(ee.props.children,j.mode,Se,ee.key),Se.return=j,j=Se):(Se=gl(ee.type,ee.key,ee.props,null,j.mode,Se),po(Se,ee),Se.return=j,j=Se)}return y(j);case E:e:{for(Ve=ee.key;k!==null;){if(k.key===Ve)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(j,k.sibling),Se=u(k,ee.children||[]),Se.return=j,j=Se;break e}else{a(j,k);break}else n(j,k);k=k.sibling}Se=wu(ee,j.mode,Se),Se.return=j,j=Se}return y(j);case T:return Ve=ee._init,ee=Ve(ee._payload),Ht(j,k,ee,Se)}if(Z(ee))return tt(j,k,ee,Se);if(J(ee)){if(Ve=J(ee),typeof Ve!="function")throw Error(r(150));return ee=Ve.call(ee),$e(j,k,ee,Se)}if(typeof ee.then=="function")return Ht(j,k,Nl(ee),Se);if(ee.$$typeof===I)return Ht(j,k,Sl(j,ee),Se);Pl(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(j,k.sibling),Se=u(k,ee),Se.return=j,j=Se):(a(j,k),Se=Cu(ee,j.mode,Se),Se.return=j,j=Se),y(j)):a(j,k)}return function(j,k,ee,Se){try{ho=0;var Ve=Ht(j,k,ee,Se);return es=null,Ve}catch(Ke){if(Ke===io||Ke===Ml)throw Ke;var mt=Zn(29,Ke,null,j.mode);return mt.lanes=Se,mt.return=j,mt}finally{}}}var ts=jm(!0),Qm=jm(!1),ci=Q(null),Di=null;function La(t){var n=t.alternate;be(mn,mn.current&1),be(ci,t),Di===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(Di=t)}function Jm(t){if(t.tag===22){if(be(mn,mn.current),be(ci,t),Di===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Di=t)}}else Na()}function Na(){be(mn,mn.current),be(ci,ci.current)}function na(t){de(ci),Di===t&&(Di=null),de(mn)}var mn=Q(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function cf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=wa(o);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&($n(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),u=wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&($n(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=wa(a);o.tag=2,n!=null&&(o.callback=n),n=Da(t,o,a),n!==null&&($n(n,t,a),ro(n,t,a))}};function $m(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,o)||!Ks(u,d):!0}function eg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function tg(t){Il(t)}function ng(t){console.error(t)}function ig(t){Il(t)}function Fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ag(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(t,n)},a}function rg(t){return t=wa(t),t.tag=3,t}function sg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){ag(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){ag(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function rS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 13:return Di===null?Of():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(t,o,u)),!1;case 22:return a.flags|=65536,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(t,o,u)),!1}throw Error(r(435,a.tag))}return Ff(t,o,u),Of(),!1}if(Ut)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(t=Error(r(422),{cause:o}),$s(ri(t,a)))):(o!==Lu&&(n=Error(r(423),{cause:o}),$s(ri(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ri(o,a),u=ff(t.stateNode,o,u),Vu(t,u),en!==4&&(en=2)),!1;var d=Error(r(520),{cause:o});if(d=ri(d,a),yo===null?yo=[d]:yo.push(d),en!==4&&(en=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(za===null||!za.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=rg(u),sg(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var og=Error(r(461)),_n=!1;function bn(t,n,a,o){n.child=t===null?Qm(n,null,a,o):ts(n,t.child,a,o)}function lg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return pr(n),o=Yu(t,n,a,y,d,u),R=Zu(),t!==null&&!_n?(Ku(t,n,u),ia(t,n,u)):(Ut&&R&&Du(n),n.flags|=1,bn(t,n,o,u),n.child)}function cg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ru(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,ug(t,n,d,o,u)):(t=gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!xf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(y,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=ji(d,o),t.ref=n.ref,t.return=n,n.child=t}function ug(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Ks(d,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=d,xf(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,ia(t,n,u)}return df(t,n,a,o,u)}function fg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return dg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,d!==null?d.cachePool:null),d!==null?um(n,d):Xu(),Jm(n);else return n.lanes=n.childLanes=536870912,dg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(yl(n,d.cachePool),um(n,d),Na(),n.memoizedState=null):(t!==null&&yl(n,null),Xu(),Na());return bn(t,n,u,a),n.child}function dg(t,n,a,o){var u=Bu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&yl(n,null),Xu(),Jm(n),t!==null&&eo(t,n,o,!0),null}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,o,u){return pr(n),a=Yu(t,n,a,o,void 0,u),o=Zu(),t!==null&&!_n?(Ku(t,n,u),ia(t,n,u)):(Ut&&o&&Du(n),n.flags|=1,bn(t,n,a,u),n.child)}function hg(t,n,a,o,u,d){return pr(n),n.updateQueue=null,a=dm(n,o,a,u),fm(t),o=Zu(),t!==null&&!_n?(Ku(t,n,d),ia(t,n,d)):(Ut&&o&&Du(n),n.flags|=1,bn(t,n,a,d),n.child)}function pg(t,n,a,o,u){if(pr(n),n.stateNode===null){var d=Wr,y=a.contextType;typeof y=="object"&&y!==null&&(d=wn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=uf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Hu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?wn(y):Wr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(cf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&uf.enqueueReplaceState(d,d.state,null),oo(n,o,d,u),so(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=vr(a,R);d.props=z;var ae=d.context,_e=a.contextType;y=Wr,typeof _e=="object"&&_e!==null&&(y=wn(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==y)&&eg(n,d,o,y),Ca=!1;var se=n.memoizedState;d.state=se,oo(n,o,d,u),so(),ae=n.memoizedState,R||se!==ae||Ca?(typeof Me=="function"&&(cf(n,a,Me,o),ae=n.memoizedState),(z=Ca||$m(n,a,z,o,se,ae,y))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=y,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Gu(t,n),y=n.memoizedProps,_e=vr(a,y),d.props=_e,Me=n.pendingProps,se=d.context,ae=a.contextType,z=Wr,typeof ae=="object"&&ae!==null&&(z=wn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Me||se!==z)&&eg(n,d,o,z),Ca=!1,se=n.memoizedState,d.state=se,oo(n,o,d,u),so();var ce=n.memoizedState;y!==Me||se!==ce||Ca||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof R=="function"&&(cf(n,a,R,o),ce=n.memoizedState),(_e=Ca||$m(n,a,_e,o,se,ce,z)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=z,o=_e):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ts(n,t.child,null,u),n.child=ts(n,null,a,u)):bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ia(t,n,u),t}function mg(t,n,a,o){return Js(),n.flags|=256,bn(t,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:nm()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function gg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(u?La(n):Na(),Ut){var R=$t,z;if(z=R){e:{for(z=R,R=wi;z.nodeType!==8;){if(!R){R=null;break e}if(z=xi(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(n.memoizedState={dehydrated:R,treeContext:cr!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},z=Zn(18,null,null,0),z.stateNode=R,z.return=n,n.child=z,In=n,$t=null,z=!0):z=!1}z||dr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Jf(R)?n.lanes=32:n.lanes=536870912,null;na(n)}return R=o.children,o=o.fallback,u?(Na(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=lr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=pf(a),u.childLanes=mf(t,y,a),n.memoizedState=hf,o):(La(n),gf(n,R))}if(z=t.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(La(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),u=o.fallback,R=n.mode,o=zl({mode:"visible",children:o.children},R),u=lr(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ts(n,t.child,null,a),o=n.child,o.memoizedState=pf(a),o.childLanes=mf(t,y,a),n.memoizedState=hf,n=u);else if(La(n),Jf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ae=y.dgst;y=ae,o=Error(r(419)),o.stack="",o.digest=y,$s({value:o,source:null,stack:null}),n=vf(t,n,a)}else if(_n||eo(t,n,a,!1),y=(a&t.childLanes)!==0,_n||y){if(y=Xt,y!==null&&(o=a&-a,o=(o&42)!==0?1:Pe(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Xr(t,o),$n(y,t,o),og;R.data==="$?"||Of(),n=vf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,$t=xi(R.nextSibling),In=n,Ut=!0,fr=null,wi=!1,t!==null&&(oi[li++]=Qi,oi[li++]=Ji,oi[li++]=cr,Qi=t.id,Ji=t.overflow,cr=n),n=gf(n,o.children),n.flags|=4096);return n}return u?(Na(),u=o.fallback,R=n.mode,z=t.child,ae=z.sibling,o=ji(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ae!==null?u=ji(ae,u):(u=lr(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=pf(a):(z=R.cachePool,z!==null?(ae=pn._currentValue,z=z.parent!==ae?{parent:ae,pool:ae}:z):z=nm(),R={baseLanes:R.baseLanes|a,cachePool:z}),u.memoizedState=R,u.childLanes=mf(t,y,a),n.memoizedState=hf,o):(La(n),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function vf(t,n,a){return ts(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pu(t.return,n,a)}function _f(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function _g(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(bn(t,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,a,n);else if(t.tag===19)vg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function sS(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ra(n,pn,t.memoizedState.cache),Js();break;case 27:case 5:it(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gg(t,n,a):(La(n),t=ia(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return _g(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,fg(t,n,a);case 24:Ra(n,pn,t.memoizedState.cache)}return ia(t,n,a)}function xg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return _n=!1,sS(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,Ut&&(n.flags&1048576)!==0&&Kp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Ru(o)?(t=vr(o,t),n.tag=1,n=pg(null,n,o,t,a)):(n.tag=0,n=df(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===w){n.tag=11,n=lg(null,n,o,t,a);break e}else if(u===H){n.tag=14,n=cg(null,n,o,t,a);break e}}throw n=fe(o)||o,Error(r(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=vr(o,n.pendingProps),pg(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Gu(t,n),oo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ra(n,pn,o),o!==d.cache&&Ou(n,[pn],a,!0),so(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=mg(t,n,o,a);break e}else if(o!==u){u=ri(Error(r(424)),n),$s(u),n=mg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=xi(t.firstChild),In=n,Ut=!0,fr=null,wi=!0,a=Qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Js(),o===u){n=ia(t,n,a);break e}bn(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=E0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ut||(a=n.type,t=n.pendingProps,o=$l(ie.current).createElement(a),o[ot]=n,o[qt]=t,An(o,a,t),rn(o),n.stateNode=o):n.memoizedState=E0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Ut&&(o=n.stateNode=S0(n.type,n.pendingProps,ie.current),In=n,wi=!0,u=$t,Va(n.type)?($f=u,$t=xi(o.firstChild)):$t=u),bn(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((u=o=$t)&&(o=PS(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,In=n,$t=xi(o.firstChild),wi=!1,u=!0):u=!1),u||dr(n)),it(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,Kf(u,d)?o=null:y!==null&&Kf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(t,n,Jx,null,null,a),Do._currentValue=u),Bl(t,n),bn(t,n,o,a),n.child;case 6:return t===null&&Ut&&((t=a=$t)&&(a=OS(a,n.pendingProps,wi),a!==null?(n.stateNode=a,In=n,$t=null,t=!0):t=!1),t||dr(n)),null;case 13:return gg(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ts(n,null,o,a):bn(t,n,o,a),n.child;case 11:return lg(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ra(n,n.type,o.value),bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=wn(u),o=o(u),n.flags|=1,bn(t,n,o,a),n.child;case 14:return cg(t,n,n.type,n.pendingProps,a);case 15:return ug(t,n,n.type,n.pendingProps,a);case 19:return _g(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ji(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return fg(t,n,a);case 24:return pr(n),o=wn(pn),t===null?(u=Bu(),u===null&&(u=Xt,d=Iu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Hu(n),Ra(n,pn,u)):((t.lanes&a)!==0&&(Gu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,pn,o)):(o=d.cache,Ra(n,pn,o),o!==u.cache&&Ou(n,[pn],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(t){t.flags|=4}function Sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C0(n)){if(n=ci.current,n!==null&&((yt&4194048)===yt?Di!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==Di))throw ao=zu,im;t.flags|=8192}}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Je():536870912,t.lanes|=n,rs|=n)}function mo(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function oS(t,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(pn),je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jp())),jt(n),null;case 26:return a=n.memoizedState,t===null?(aa(n),a!==null?(jt(n),Sg(n,a)):(jt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(aa(n),jt(n),Sg(n,a)):(jt(n),n.flags&=-16777217):(t.memoizedProps!==o&&aa(n),jt(n),n.flags&=-16777217),null;case 27:Qe(n),a=ie.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=Fe.current,Qs(n)?jp(n):(t=S0(u,o,a),n.stateNode=t,aa(n))}return jt(n),null;case 5:if(Qe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(t=Fe.current,Qs(n))jp(n);else{switch(u=$l(ie.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[ot]=n,t[qt]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(An(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&aa(n)}}return jt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,Qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ot]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||h0(t.nodeValue,a)),t||dr(n)}else t=$l(t).createTextNode(o),t[ot]=n,n.stateNode=t}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ot]=n}else Js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Jp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),jt(n),null;case 4:return je(),t===null&&Xf(n.stateNode.containerInfo),jt(n),null;case 10:return ea(n.type),jt(n),null;case 19:if(de(mn),u=n.memoizedState,u===null)return jt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)mo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ol(t),d!==null){for(n.flags|=128,mo(u,!1),t=d.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Zp(a,t),a=a.sibling;return be(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Rt()>kl&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Ol(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ut)return jt(n),null}else 2*Rt()-u.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Rt(),n.sibling=null,t=mn.current,be(mn,o?t&1|2:t&1),n):(jt(n),null);case 22:case 23:return na(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&de(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(pn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function lS(t,n){switch(Uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(pn),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 13:if(na(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Js()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return de(mn),null;case 4:return je(),null;case 10:return ea(n.type),null;case 22:case 23:return na(n),Wu(),t!==null&&de(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(pn),null;case 25:return null;default:return null}}function yg(t,n){switch(Uu(n),n.tag){case 3:ea(pn),je();break;case 26:case 27:case 5:Qe(n);break;case 4:je();break;case 13:na(n);break;case 19:de(mn);break;case 10:ea(n.type);break;case 22:case 23:na(n),Wu(),t!==null&&de(mr);break;case 24:ea(pn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Vt(n,n.return,R)}}function Pa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var z=a,ae=R;try{ae()}catch(_e){Vt(u,z,_e)}}}o=o.next}while(o!==d)}}catch(_e){Vt(n,n.return,_e)}}function Mg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cm(n,a)}catch(o){Vt(t,t.return,o)}}}function Eg(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function bg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function Sf(t,n,a){try{var o=t.stateNode;wS(o,t.type,a,n),o[qt]=n}catch(u){Vt(t,t.return,u)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function Ag(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[ot]=t,n[qt]=a}catch(d){Vt(t,t.return,d)}}var ra=!1,on=!1,Ef=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function cS(t,n){if(t=t.containerInfo,Yf=rc,t=Bp(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,z=-1,ae=0,_e=0,Me=t,se=null;t:for(;;){for(var ce;Me!==a||u!==0&&Me.nodeType!==3||(R=y+u),Me!==d||o!==0&&Me.nodeType!==3||(z=y+o),Me.nodeType===3&&(y+=Me.nodeValue.length),(ce=Me.firstChild)!==null;)se=Me,Me=ce;for(;;){if(Me===t)break t;if(se===a&&++ae===u&&(R=y),se===d&&++_e===o&&(z=y),(ce=Me.nextSibling)!==null)break;Me=se,se=Me.parentNode}Me=ce}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},rc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var tt=vr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Vt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Cg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(t,a),o&4&&go(5,a);break;case 1:if(Oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Vt(a,a.return,y)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Vt(a,a.return,y)}}o&64&&Mg(a),o&512&&vo(a,a.return);break;case 3:if(Oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(t,n)}catch(y){Vt(a,a.return,y)}}break;case 27:n===null&&o&4&&Ag(a);case 26:case 5:Oa(t,a),n===null&&o&4&&bg(a),o&512&&vo(a,a.return);break;case 12:Oa(t,a);break;case 13:Oa(t,a),o&4&&Ug(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_S.bind(null,a),IS(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||on,u=ra;var d=on;ra=o,(on=n)&&!d?Ia(t,a,(a.subtreeFlags&8772)!==0):Oa(t,a),ra=u,on=d}break;case 30:break;default:Oa(t,a)}}function wg(t){var n=t.alternate;n!==null&&(t.alternate=null,wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Or(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Vn=!1;function sa(t,n,a){for(a=a.child;a!==null;)Dg(t,n,a),a=a.sibling}function Dg(t,n,a){if(M&&typeof M.onCommitFiberUnmount=="function")try{M.onCommitFiberUnmount(L,a)}catch{}switch(a.tag){case 26:on||Ui(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ui(a,n);var o=Kt,u=Vn;Va(a.type)&&(Kt=a.stateNode,Vn=!1),sa(t,n,a),Ao(a.stateNode),Kt=o,Vn=u;break;case 5:on||Ui(a,n);case 6:if(o=Kt,u=Vn,Kt=null,sa(t,n,a),Kt=o,Vn=u,Kt!==null)if(Vn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{Kt.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:Kt!==null&&(Vn?(t=Kt,_0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Po(t)):_0(Kt,a.stateNode));break;case 4:o=Kt,u=Vn,Kt=a.stateNode.containerInfo,Vn=!0,sa(t,n,a),Kt=o,Vn=u;break;case 0:case 11:case 14:case 15:on||Pa(2,a,n),on||Pa(4,a,n),sa(t,n,a);break;case 1:on||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Eg(a,n,o)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,sa(t,n,a),on=o;break;default:sa(t,n,a)}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(a){Vt(n,n.return,a)}}function uS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Rg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Rg),n;default:throw Error(r(435,t.tag))}}function bf(t,n){var a=uS(t);n.forEach(function(o){var u=xS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(Va(R.type)){Kt=R.stateNode,Vn=!1;break e}break;case 5:Kt=R.stateNode,Vn=!1;break e;case 3:case 4:Kt=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(Kt===null)throw Error(r(160));Dg(d,y,u),Kt=null,Vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling}var _i=null;function Lg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),jn(t),o&4&&(Pa(3,t,t.return),go(3,t),Pa(5,t,t.return));break;case 1:Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ir]||d[ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,o,a),d[ot]=t,rn(d),o=d;break e;case"link":var y=A0("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;case"meta":if(y=A0("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[ot]=t,rn(d),o=d}t.stateNode=o}else R0(u,t.type,t.stateNode);else t.stateNode=T0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?R0(u,t.type,t.stateNode):T0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),a!==null&&o&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),jn(t),o&512&&(on||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{On(u,"")}catch(ce){Vt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ef=!0);break;case 6:if(Kn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){Vt(t,t.return,ce)}}break;case 3:if(nc=null,u=_i,_i=ec(n.containerInfo),Kn(n,t),_i=u,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(ce){Vt(t,t.return,ce)}Ef&&(Ef=!1,Ng(t));break;case 4:o=_i,_i=ec(t.stateNode.containerInfo),Kn(n,t),jn(t),_i=o;break;case 12:Kn(n,t),jn(t);break;case 13:Kn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Df=Rt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ae=ra,_e=on;if(ra=ae||u,on=_e||z,Kn(n,t),on=_e,ra=ae,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ra||on||_r(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=z.stateNode;var Me=z.memoizedProps.style,se=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(ce){Vt(z,z.return,ce)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(ce){Vt(z,z.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bf(t,a))));break;case 19:Kn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Tg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=yf(t);Gl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(On(y,""),a.flags&=-33);var R=yf(t);Gl(t,R,y);break;case 3:case 4:var z=a.stateNode.containerInfo,ae=yf(t);Mf(t,ae,z);break;default:throw Error(r(161))}}catch(_e){Vt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function _r(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),_r(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Eg(n,n.return,a),_r(n);break;case 27:Ao(n.stateNode);case 26:case 5:Ui(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}t=t.sibling}}function Ia(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ia(u,d,a),go(4,d);break;case 1:if(Ia(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(o,o.return,ae)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)lm(z[u],R)}catch(ae){Vt(o,o.return,ae)}}a&&y&64&&Mg(d),vo(d,d.return);break;case 27:Ag(d);case 26:case 5:Ia(u,d,a),a&&o===null&&y&4&&bg(d),vo(d,d.return);break;case 12:Ia(u,d,a);break;case 13:Ia(u,d,a),a&&y&4&&Ug(u,d);break;case 22:d.memoizedState===null&&Ia(u,d,a),vo(d,d.return);break;case 30:break;default:Ia(u,d,a)}n=n.sibling}}function Tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Li(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(t,n,a,o),n=n.sibling}function Pg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,a,o),u&2048&&go(9,n);break;case 1:Li(t,n,a,o);break;case 3:Li(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Li(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Vt(n,n.return,z)}}else Li(t,n,a,o);break;case 13:Li(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Li(t,n,a,o):_o(t,n):d._visibility&2?Li(t,n,a,o):(d._visibility|=2,ns(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Tf(y,n);break;case 24:Li(t,n,a,o),u&2048&&Af(n.alternate,n);break;default:Li(t,n,a,o)}}function ns(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,y=n,R=a,z=o,ae=y.flags;switch(y.tag){case 0:case 11:case 15:ns(d,y,R,z,u),go(8,y);break;case 23:break;case 22:var _e=y.stateNode;y.memoizedState!==null?_e._visibility&2?ns(d,y,R,z,u):_o(d,y):(_e._visibility|=2,ns(d,y,R,z,u)),u&&ae&2048&&Tf(y.alternate,y);break;case 24:ns(d,y,R,z,u),u&&ae&2048&&Af(y.alternate,y);break;default:ns(d,y,R,z,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:_o(a,o),u&2048&&Tf(o.alternate,o);break;case 24:_o(a,o),u&2048&&Af(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var xo=8192;function is(t){if(t.subtreeFlags&xo)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 26:is(t),t.flags&xo&&t.memoizedState!==null&&KS(_i,t.memoizedState,t.memoizedProps);break;case 5:is(t);break;case 3:case 4:var n=_i;_i=ec(t.stateNode.containerInfo),is(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,is(t),xo=n):is(t));break;default:is(t)}}function Ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Bg(o,t)}Ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):So(t);break;default:So(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Bg(o,t)}Ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Bg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(wg(o),o===a){xn=null;break e}if(u!==null){u.return=d,xn=u;break e}xn=d}}}var fS={getCacheForType:function(t){var n=wn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},dS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Xt=null,gt=null,yt=0,Ot=0,Qn=null,Fa=!1,as=!1,Rf=!1,oa=0,en=0,Ba=0,xr=0,Cf=0,ui=0,rs=0,yo=null,kn=null,wf=!1,Df=0,kl=1/0,Xl=null,za=null,Tn=0,Ha=null,ss=null,os=0,Uf=0,Lf=null,zg=null,Mo=0,Nf=null;function Jn(){if((Pt&2)!==0&&yt!==0)return yt&-yt;if(F.T!==null){var t=Zr;return t!==0?t:Hf()}return qe()}function Hg(){ui===0&&(ui=(yt&536870912)===0||Ut?Ze():536870912);var t=ci.current;return t!==null&&(t.flags|=32),ui}function $n(t,n,a){(t===Xt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ga(t,yt,ui,!1)),X(t,a),((Pt&2)===0||t!==Xt)&&(t===Xt&&((Pt&2)===0&&(xr|=a),en===4&&Ga(t,yt,ui,!1)),Ni(t))}function Gg(t,n,a){if((Pt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?mS(t,n):If(t,n,!0),d=o;do{if(u===0){as&&!o&&Ga(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!hS(a)){u=If(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=yo;var z=R.current.memoizedState.isDehydrated;if(z&&(ls(R,y).flags|=256),y=If(R,y,!1),y!==2){if(Rf&&!z){R.errorRecoveryDisabledLanes|=d,xr|=d,u=4;break e}d=kn,kn=u,d!==null&&(kn===null?kn=d:kn.push.apply(kn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){ls(t,0),Ga(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,ui,!Fa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Df+300-Rt(),10<u)){if(Ga(o,n,ui,!Fa),We(o,0,!0)!==0)break e;o.timeoutHandle=g0(Vg.bind(null,o,a,kn,Xl,wf,n,ui,xr,rs,Fa,d,2,-0,0),u);break e}Vg(o,a,kn,Xl,wf,n,ui,xr,rs,Fa,d,0,-0,0)}}break}while(!0);Ni(t)}function Vg(t,n,a,o,u,d,y,R,z,ae,_e,Me,se,ce){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:ZS},Og(n),Me=jS(),Me!==null)){t.cancelPendingCommit=Me(Kg.bind(null,t,n,d,a,o,u,y,R,z,_e,1,se,ce)),Ga(t,d,y,!ae);return}Kg(t,n,d,a,o,u,y,R,z)}function hS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Yn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,a,o){n&=~Cf,n&=~xr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-$(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&xe(t,a,n)}function Wl(){return(Pt&6)===0?(Eo(0),!1):!0}function Pf(){if(gt!==null){if(Ot===0)var t=gt.return;else t=gt,$i=hr=null,ju(t),es=null,ho=0,t=gt;for(;t!==null;)yg(t.alternate,t),t=t.return;gt=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,US(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Pf(),Xt=t,gt=a=ji(t.current,null),yt=n,Ot=0,Qn=null,Fa=!1,as=Ce(t,n),Rf=!1,rs=ui=Cf=xr=Ba=en=0,kn=yo=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-$(o),d=1<<u;n|=t[u],o&=~d}return oa=n,hl(),a}function kg(t,n){pt=null,F.H=Ll,n===io||n===Ml?(n=sm(),Ot=3):n===im?(n=sm(),Ot=4):Ot=n===og?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&(en=1,Fl(t,ri(n,t.current)))}function Xg(){var t=F.H;return F.H=Ll,t===null?Ll:t}function Wg(){var t=F.A;return F.A=fS,t}function Of(){en=4,Fa||(yt&4194048)!==yt&&ci.current!==null||(as=!0),(Ba&134217727)===0&&(xr&134217727)===0||Xt===null||Ga(Xt,yt,ui,!1)}function If(t,n,a){var o=Pt;Pt|=2;var u=Xg(),d=Wg();(Xt!==t||yt!==n)&&(Xl=null,ls(t,n)),n=!1;var y=en;e:do try{if(Ot!==0&&gt!==null){var R=gt,z=Qn;switch(Ot){case 8:Pf(),y=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ae=Ot;if(Ot=0,Qn=null,cs(t,R,z,ae),a&&as){y=0;break e}break;default:ae=Ot,Ot=0,Qn=null,cs(t,R,z,ae)}}pS(),y=en;break}catch(_e){kg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,$i=hr=null,Pt=o,F.H=u,F.A=d,gt===null&&(Xt=null,yt=0,hl()),y}function pS(){for(;gt!==null;)qg(gt)}function mS(t,n){var a=Pt;Pt|=2;var o=Xg(),u=Wg();Xt!==t||yt!==n?(Xl=null,kl=Rt()+500,ls(t,n)):as=Ce(t,n);e:do try{if(Ot!==0&&gt!==null){n=gt;var d=Qn;t:switch(Ot){case 1:Ot=0,Qn=null,cs(t,n,d,1);break;case 2:case 9:if(am(d)){Ot=0,Qn=null,Yg(n);break}n=function(){Ot!==2&&Ot!==9||Xt!==t||(Ot=7),Ni(t)},d.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:am(d)?(Ot=0,Qn=null,Yg(n)):(Ot=0,Qn=null,cs(t,n,d,7));break;case 5:var y=null;switch(gt.tag){case 26:y=gt.memoizedState;case 5:case 27:var R=gt;if(!y||C0(y)){Ot=0,Qn=null;var z=R.sibling;if(z!==null)gt=z;else{var ae=R.return;ae!==null?(gt=ae,ql(ae)):gt=null}break t}}Ot=0,Qn=null,cs(t,n,d,5);break;case 6:Ot=0,Qn=null,cs(t,n,d,6);break;case 8:Pf(),en=6;break e;default:throw Error(r(462))}}gS();break}catch(_e){kg(t,_e)}while(!0);return $i=hr=null,F.H=o,F.A=u,Pt=a,gt!==null?0:(Xt=null,yt=0,hl(),en)}function gS(){for(;gt!==null&&!Mt();)qg(gt)}function qg(t){var n=xg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?ql(t):gt=n}function Yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=hg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=hg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:ju(n);default:yg(a,n),n=gt=Zp(n,oa),n=xg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?ql(t):gt=n}function cs(t,n,a,o){$i=hr=null,ju(n),es=null,ho=0;var u=n.return;try{if(rS(t,u,n,a,yt)){en=1,Fl(t,ri(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;en=1,Fl(t,ri(a,t.current)),gt=null;return}n.flags&32768?(Ut||o===1?t=!0:as||(yt&536870912)!==0?t=!1:(Fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zg(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Zg(n,Fa);return}t=n.return;var a=oS(n.alternate,n,oa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);en===0&&(en=5)}function Zg(t,n){do{var a=lS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);en=6,gt=null}function Kg(t,n,a,o,u,d,y,R,z){t.cancelPendingCommit=null;do Yl();while(Tn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Tu,we(t,a,d,y,R,z),t===Xt&&(gt=Xt=null,yt=0),ss=n,Ha=t,os=a,Uf=d,Lf=u,zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,SS(Gt,function(){return e0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=B.p,B.p=2,y=Pt,Pt|=4;try{cS(t,n,a)}finally{Pt=y,B.p=u,F.T=o}}Tn=1,jg(),Qg(),Jg()}}function jg(){if(Tn===1){Tn=0;var t=Ha,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=Pt;Pt|=4;try{Lg(n,t);var d=Zf,y=Bp(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&Fp(R.ownerDocument.documentElement,R)){if(z!==null&&Su(R)){var ae=z.start,_e=z.end;if(_e===void 0&&(_e=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(_e,R.value.length);else{var Me=R.ownerDocument||document,se=Me&&Me.defaultView||window;if(se.getSelection){var ce=se.getSelection(),tt=R.textContent.length,$e=Math.min(z.start,tt),Ht=z.end===void 0?$e:Math.min(z.end,tt);!ce.extend&&$e>Ht&&(y=Ht,Ht=$e,$e=y);var j=Ip(R,$e),k=Ip(R,Ht);if(j&&k&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ee=Me.createRange();ee.setStart(j.node,j.offset),ce.removeAllRanges(),$e>Ht?(ce.addRange(ee),ce.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ce.addRange(ee))}}}}for(Me=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}rc=!!Yf,Zf=Yf=null}finally{Pt=u,B.p=o,F.T=a}}t.current=n,Tn=2}}function Qg(){if(Tn===2){Tn=0;var t=Ha,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=B.p;B.p=2;var u=Pt;Pt|=4;try{Cg(t,n.alternate,n)}finally{Pt=u,B.p=o,F.T=a}}Tn=3}}function Jg(){if(Tn===4||Tn===3){Tn=0,_t();var t=Ha,n=ss,a=os,o=zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,ss=Ha=null,$g(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(za=null),Ee(a),n=n.stateNode,M&&typeof M.onCommitFiberRoot=="function")try{M.onCommitFiberRoot(L,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=B.p,B.p=2,F.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{F.T=n,B.p=u}}(os&3)!==0&&Yl(),Ni(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Nf?Mo++:(Mo=0,Nf=t):Mo=0,Eo(0)}}function $g(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Yl(t){return jg(),Qg(),Jg(),e0()}function e0(){if(Tn!==5)return!1;var t=Ha,n=Uf;Uf=0;var a=Ee(os),o=F.T,u=B.p;try{B.p=32>a?32:a,F.T=null,a=Lf,Lf=null;var d=Ha,y=os;if(Tn=0,ss=Ha=null,os=0,(Pt&6)!==0)throw Error(r(331));var R=Pt;if(Pt|=4,Fg(d.current),Pg(d,d.current,y,a),Pt=R,Eo(0,!1),M&&typeof M.onPostCommitFiberRoot=="function")try{M.onPostCommitFiberRoot(L,d)}catch{}return!0}finally{B.p=u,F.T=o,$g(t,n)}}function t0(t,n,a){n=ri(a,n),n=ff(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(X(t,2),Ni(t))}function Vt(t,n,a){if(t.tag===3)t0(t,t,a);else for(;n!==null;){if(n.tag===3){t0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){t=ri(a,t),a=rg(2),o=Da(n,a,2),o!==null&&(sg(a,o,n,t),X(o,2),Ni(o));break}}n=n.return}}function Ff(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new dS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=vS.bind(null,t,n,a),n.then(t,t))}function vS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(yt&a)===a&&(en===4||en===3&&(yt&62914560)===yt&&300>Rt()-Df?(Pt&2)===0&&ls(t,0):Cf|=a,rs===yt&&(rs=0)),Ni(t)}function n0(t,n){n===0&&(n=Je()),t=Xr(t,n),t!==null&&(X(t,n),Ni(t))}function _S(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),n0(t,a)}function xS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),n0(t,a)}function SS(t,n){return ut(t,n)}var Zl=null,us=null,Bf=!1,Kl=!1,zf=!1,Sr=0;function Ni(t){t!==us&&t.next===null&&(us===null?Zl=us=t:us=us.next=t),Kl=!0,Bf||(Bf=!0,MS())}function Eo(t,n){if(!zf&&Kl){zf=!0;do for(var a=!1,o=Zl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-$(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,s0(o,d))}else d=yt,d=We(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ce(o,d)||(a=!0,s0(o,d));o=o.next}while(a);zf=!1}}function yS(){i0()}function i0(){Kl=Bf=!1;var t=0;Sr!==0&&(DS()&&(t=Sr),Sr=0);for(var n=Rt(),a=null,o=Zl;o!==null;){var u=o.next,d=a0(o,n);d===0?(o.next=null,a===null?Zl=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(d&3)!==0)&&(Kl=!0)),o=u}Eo(t)}function a0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-$(d),R=1<<y,z=u[y];z===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Le(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Xt,a=yt,a=We(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&At(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&At(o),Ee(a)){case 2:case 8:a=ln;break;case 32:a=Gt;break;case 268435456:a=q;break;default:a=Gt}return o=r0.bind(null,t),a=ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&At(o),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var o=yt;return o=We(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Gg(t,o,n),a0(t,Rt()),t.callbackNode!=null&&t.callbackNode===a?r0.bind(null,t):null)}function s0(t,n){if(Yl())return null;Gg(t,n,!0)}function MS(){LS(function(){(Pt&6)!==0?ut(an,yS):i0()})}function Hf(){return Sr===0&&(Sr=Ze()),Sr}function o0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gi(""+t)}function l0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ES(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=o0((u[qt]||null).action),y=o.submitter;y&&(n=(n=y[qt]||null)?o0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Sr!==0){var z=y?l0(u,y):new FormData(u);sf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=y?l0(u,y):new FormData(u),sf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Gf=0;Gf<bu.length;Gf++){var Vf=bu[Gf],bS=Vf.toLowerCase(),TS=Vf[0].toUpperCase()+Vf.slice(1);vi(bS,"on"+TS)}vi(Gp,"onAnimationEnd"),vi(Vp,"onAnimationIteration"),vi(kp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(Vx,"onTransitionRun"),vi(kx,"onTransitionStart"),vi(Xx,"onTransitionCancel"),vi(Xp,"onTransitionEnd"),Zi("onMouseEnter",["mouseout","mouseover"]),Zi("onMouseLeave",["mouseout","mouseover"]),Zi("onPointerEnter",["pointerout","pointerover"]),Zi("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function c0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],z=R.instance,ae=R.currentTarget;if(R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(_e){Il(_e)}u.currentTarget=null,d=z}else for(y=0;y<o.length;y++){if(R=o[y],z=R.instance,ae=R.currentTarget,R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ae;try{d(u)}catch(_e){Il(_e)}u.currentTarget=null,d=z}}}}function vt(t,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var o=t+"__bubble";a.has(o)||(u0(n,t,2,!1),a.add(o))}function kf(t,n,a){var o=0;n&&(o|=4),u0(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Xf(t){if(!t[jl]){t[jl]=!0,ar.forEach(function(a){a!=="selectionchange"&&(AS.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,kf("selectionchange",!1,n))}}function u0(t,n,a,o){switch(P0(n)){case 2:var u=$S;break;case 8:u=ey;break;default:u=ad}a=u.bind(null,n,a,t),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var z=y.tag;if((z===3||z===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Wi(R),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){o=d=y;continue e}R=R.parentNode}}o=o.return}vp(function(){var ae=d,_e=cu(a),Me=[];e:{var se=Wp.get(t);if(se!==void 0){var ce=ul,tt=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":ce=Sx;break;case"focusin":tt="focus",ce=mu;break;case"focusout":tt="blur",ce=mu;break;case"beforeblur":case"afterblur":ce=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Ex;break;case Gp:case Vp:case kp:ce=fx;break;case Xp:ce=Tx;break;case"scroll":case"scrollend":ce=sx;break;case"wheel":ce=Rx;break;case"copy":case"cut":case"paste":ce=hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Mp;break;case"toggle":case"beforetoggle":ce=wx}var $e=(n&4)!==0,Ht=!$e&&(t==="scroll"||t==="scrollend"),j=$e?se!==null?se+"Capture":null:se;$e=[];for(var k=ae,ee;k!==null;){var Se=k;if(ee=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ee===null||j===null||(Se=Vs(k,j),Se!=null&&$e.push(To(k,Se,ee))),Ht)break;k=k.return}0<$e.length&&(se=new ce(se,tt,null,a,_e),Me.push({event:se,listeners:$e}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",se&&a!==Fr&&(tt=a.relatedTarget||a.fromElement)&&(Wi(tt)||tt[Mn]))break e;if((ce||se)&&(se=_e.window===_e?_e:(se=_e.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(tt=a.relatedTarget||a.toElement,ce=ae,tt=tt?Wi(tt):null,tt!==null&&(Ht=c(tt),$e=tt.tag,tt!==Ht||$e!==5&&$e!==27&&$e!==6)&&(tt=null)):(ce=null,tt=ae),ce!==tt)){if($e=Sp,Se="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&($e=Mp,Se="onPointerLeave",j="onPointerEnter",k="pointer"),Ht=ce==null?se:qi(ce),ee=tt==null?se:qi(tt),se=new $e(Se,k+"leave",ce,a,_e),se.target=Ht,se.relatedTarget=ee,Se=null,Wi(_e)===ae&&($e=new $e(j,k+"enter",tt,a,_e),$e.target=ee,$e.relatedTarget=Ht,Se=$e),Ht=Se,ce&&tt)t:{for($e=ce,j=tt,k=0,ee=$e;ee;ee=fs(ee))k++;for(ee=0,Se=j;Se;Se=fs(Se))ee++;for(;0<k-ee;)$e=fs($e),k--;for(;0<ee-k;)j=fs(j),ee--;for(;k--;){if($e===j||j!==null&&$e===j.alternate)break t;$e=fs($e),j=fs(j)}$e=null}else $e=null;ce!==null&&f0(Me,se,ce,$e,!1),tt!==null&&Ht!==null&&f0(Me,Ht,tt,$e,!0)}}e:{if(se=ae?qi(ae):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var Ve=Dp;else if(Cp(se))if(Up)Ve=zx;else{Ve=Fx;var mt=Ix}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ae&&ai(ae.elementType)&&(Ve=Dp):Ve=Bx;if(Ve&&(Ve=Ve(t,ae))){wp(Me,Ve,a,_e);break e}mt&&mt(t,se,ae),t==="focusout"&&ae&&se.type==="number"&&ae.memoizedProps.value!=null&&En(se,"number",se.value)}switch(mt=ae?qi(ae):window,t){case"focusin":(Cp(mt)||mt.contentEditable==="true")&&(Gr=mt,yu=ae,js=null);break;case"focusout":js=yu=Gr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,zp(Me,a,_e);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":zp(Me,a,_e)}var Ke;if(vu)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Hr?Ap(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(Ep&&a.locale!=="ko"&&(Hr||et!=="onCompositionStart"?et==="onCompositionEnd"&&Hr&&(Ke=_p()):(Aa=_e,du="value"in Aa?Aa.value:Aa.textContent,Hr=!0)),mt=Ql(ae,et),0<mt.length&&(et=new yp(et,t,null,a,_e),Me.push({event:et,listeners:mt}),Ke?et.data=Ke:(Ke=Rp(a),Ke!==null&&(et.data=Ke)))),(Ke=Ux?Lx(t,a):Nx(t,a))&&(et=Ql(ae,"onBeforeInput"),0<et.length&&(mt=new yp("onBeforeInput","beforeinput",null,a,_e),Me.push({event:mt,listeners:et}),mt.data=Ke)),ES(Me,t,ae,a,_e)}c0(Me,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Vs(t,a),u!=null&&o.unshift(To(t,u,d)),u=Vs(t,n),u!=null&&o.push(To(t,u,d))),t.tag===3)return o;t=t.return}return[]}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,z=R.alternate,ae=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||ae===null||(z=ae,u?(ae=Vs(a,d),ae!=null&&y.unshift(To(a,ae,z))):u||(ae=Vs(a,d),ae!=null&&y.push(To(a,ae,z)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var RS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function d0(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(CS,"")}function h0(t,n){return n=d0(n),d0(t)===n}function Jl(){}function zt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":A(t,"class",o);break;case"tabIndex":A(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":A(t,a,o);break;case"style":Zt(t,o,d);break;case"data":if(n!=="object"){A(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gi(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gi(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Ir(t,"popover",o);break;case"xlinkActuate":W(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":W(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":W(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":W(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":W(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":W(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":W(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":W(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":W(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ir(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ft.get(a)||a,Ir(t,a,o))}}function qf(t,n,a,o,u,d){switch(a){case"style":Zt(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[qt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ir(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,d,y,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=d=y=u=null,z=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":y=_e;break;case"checked":z=_e;break;case"defaultChecked":ae=_e;break;case"value":d=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:zt(t,n,o,_e,a,null)}}He(t,d,R,z,ae,y,u,!1),Ye(t);return;case"select":vt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:zt(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?dt(t,!!o,n,!1):a!=null&&dt(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:zt(t,n,y,R,a,null)}qn(t,o,u,d),Ye(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,z,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)vt(bo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,ae,o,a,null)}return;default:if(ai(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&qf(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&zt(t,n,R,o,a,null))}function wS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,z=null,ae=null,_e=null;for(ce in a){var Me=a[ce];if(a.hasOwnProperty(ce)&&Me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Me;default:o.hasOwnProperty(ce)||zt(t,n,ce,null,o,Me)}}for(var se in o){var ce=o[se];if(Me=a[se],o.hasOwnProperty(se)&&(ce!=null||Me!=null))switch(se){case"type":d=ce;break;case"name":u=ce;break;case"checked":ae=ce;break;case"defaultChecked":_e=ce;break;case"value":y=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==Me&&zt(t,n,se,ce,o,Me)}}cn(t,y,R,z,ae,_e,d,u);return;case"select":ce=y=R=se=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":se=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==z&&zt(t,n,u,d,o,z)}n=R,a=y,o=ce,se!=null?dt(t,!!a,se,!1):!!o!=!!a&&(n!=null?dt(t,!!a,n,!0):dt(t,!!a,a?[]:"",!1));return;case"textarea":ce=se=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:zt(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":se=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&zt(t,n,y,u,o,d)}Pn(t,se,ce);return;case"option":for(var tt in a)if(se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:zt(t,n,tt,null,o,se)}for(z in o)if(se=o[z],ce=a[z],o.hasOwnProperty(z)&&se!==ce&&(se!=null||ce!=null))switch(z){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:zt(t,n,z,se,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)se=a[$e],a.hasOwnProperty($e)&&se!=null&&!o.hasOwnProperty($e)&&zt(t,n,$e,null,o,se);for(ae in o)if(se=o[ae],ce=a[ae],o.hasOwnProperty(ae)&&se!==ce&&(se!=null||ce!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:zt(t,n,ae,se,o,ce)}return;default:if(ai(n)){for(var Ht in a)se=a[Ht],a.hasOwnProperty(Ht)&&se!==void 0&&!o.hasOwnProperty(Ht)&&qf(t,n,Ht,void 0,o,se);for(_e in o)se=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||se===ce||se===void 0&&ce===void 0||qf(t,n,_e,se,o,ce);return}}for(var j in a)se=a[j],a.hasOwnProperty(j)&&se!=null&&!o.hasOwnProperty(j)&&zt(t,n,j,null,o,se);for(Me in o)se=o[Me],ce=a[Me],!o.hasOwnProperty(Me)||se===ce||se==null&&ce==null||zt(t,n,Me,se,o,ce)}var Yf=null,Zf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function p0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function DS(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var g0=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,v0=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof v0<"u"?function(t){return v0.resolve(null).then(t).catch(NS)}:g0;function NS(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function _0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var y=t.ownerDocument;if(a&1&&Ao(y.documentElement),a&2&&Ao(y.body),a&4)for(a=y.head,Ao(a),y=a.firstChild;y;){var R=y.nextSibling,z=y.nodeName;y[ir]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=R}}if(u===0){t.removeChild(d),Po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Po(n)}function Qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function PS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function OS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function IS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var $f=null;function x0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function S0(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Or(t)}var fi=new Map,y0=new Set;function ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=B.d;B.d={f:FS,r:BS,D:zS,C:HS,L:GS,m:VS,X:XS,S:kS,M:WS};function FS(){var t=la.f(),n=Wl();return t||n}function BS(t){var n=zn(t);n!==null&&n.tag===5&&n.type==="form"?Gm(n):la.r(t)}var ds=typeof document>"u"?null:document;function M0(t,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=ft(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),y0.has(u)||(y0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),rn(n),o.head.appendChild(n)))}}function zS(t){la.D(t),M0("dns-prefetch",t,null)}function HS(t,n){la.C(t,n),M0("preconnect",t,n)}function GS(t,n,a){la.L(t,n,a);var o=ds;if(o&&t&&n){var u='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ft(a.imageSizes)+'"]')):u+='[href="'+ft(t)+'"]';var d=u;switch(n){case"style":d=hs(t);break;case"script":d=ps(t)}fi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(d))||n==="script"&&o.querySelector(Co(d))||(n=o.createElement("link"),An(n,"link",t),rn(n),o.head.appendChild(n)))}}function VS(t,n){la.m(t,n);var a=ds;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ps(t)}if(!fi.has(d)&&(t=v({rel:"modulepreload",href:t},n),fi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(d)))return}o=a.createElement("link"),An(o,"link",t),rn(o),a.head.appendChild(o)}}}function kS(t,n,a){la.S(t,n,a);var o=ds;if(o&&t){var u=Yi(o).hoistableStyles,d=hs(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Ro(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(d))&&ed(t,a);var z=y=o.createElement("link");rn(z),An(z,"link",t),z._p=new Promise(function(ae,_e){z.onload=ae,z.onerror=_e}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function XS(t,n){la.X(t,n);var a=ds;if(a&&t){var o=Yi(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=v({src:t,async:!0},n),(n=fi.get(u))&&td(t,n),d=a.createElement("script"),rn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function WS(t,n){la.M(t,n);var a=ds;if(a&&t){var o=Yi(a).hoistableScripts,u=ps(t),d=o.get(u);d||(d=a.querySelector(Co(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=fi.get(u))&&td(t,n),d=a.createElement("script"),rn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function E0(t,n,a,o){var u=(u=ie.current)?ec(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=Yi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var d=Yi(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Ro(t)))&&!d._p&&(y.instance=d,y.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),d||qS(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=Yi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+ft(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function b0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function qS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),rn(n),t.head.appendChild(n))}function ps(t){return'[src="'+ft(t)+'"]'}function Co(t){return"script[async]"+t}function T0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ft(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),rn(o),An(o,"style",u),tc(o,a.precedence,t),n.instance=o;case"stylesheet":u=hs(a.href);var d=t.querySelector(Ro(u));if(d)return n.state.loading|=4,n.instance=d,rn(d),d;o=b0(a),(u=fi.get(u))&&ed(o,u),d=(t.ownerDocument||t).createElement("link"),rn(d);var y=d;return y._p=new Promise(function(R,z){y.onload=R,y.onerror=z}),An(d,"link",o),n.state.loading|=4,tc(d,a.precedence,t),n.instance=d;case"script":return d=ps(a.src),(u=t.querySelector(Co(d)))?(n.instance=u,rn(u),u):(o=a,(u=fi.get(d))&&(o=v({},a),td(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),rn(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tc(o,a.precedence,t));return n.instance}function tc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function A0(t,n,a){if(nc===null){var o=new Map,u=nc=new Map;u.set(a,o)}else u=nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ir]||d[ot]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function R0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function YS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function C0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function ZS(){}function KS(t,n,a){if(wo===null)throw Error(r(475));var o=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(a.href),d=t.querySelector(Ro(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=ic.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,rn(d);return}d=t.ownerDocument||t,a=b0(a),(u=fi.get(u))&&ed(a,u),d=d.createElement("link"),rn(d);var y=d;y._p=new Promise(function(R,z){y.onload=R,y.onerror=z}),An(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ic.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function jS(){if(wo===null)throw Error(r(475));var t=wo;return t.stylesheets&&t.count===0&&nd(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&nd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ic(){if(this.count--,this.count===0){if(this.stylesheets)nd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function nd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(QS,t),ac=null,ic.call(t))}function QS(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var o=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=ic.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function JS(t,n,a,o,u,d,y,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function w0(t,n,a,o,u,d,y,R,z,ae,_e,Me){return t=new JS(t,n,a,y,R,z,ae,Me),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=Iu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Hu(d),t}function D0(t){return t?(t=Wr,t):Wr}function U0(t,n,a,o,u,d){u=D0(u),o.context===null?o.context=u:o.pendingContext=u,o=wa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Da(t,o,n),a!==null&&($n(a,t,n),ro(a,t,n))}function L0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function id(t,n){L0(t,n),(t=t.alternate)&&L0(t,n)}function N0(t){if(t.tag===13){var n=Xr(t,67108864);n!==null&&$n(n,t,67108864),id(t,67108864)}}var rc=!0;function $S(t,n,a,o){var u=F.T;F.T=null;var d=B.p;try{B.p=2,ad(t,n,a,o)}finally{B.p=d,F.T=u}}function ey(t,n,a,o){var u=F.T;F.T=null;var d=B.p;try{B.p=8,ad(t,n,a,o)}finally{B.p=d,F.T=u}}function ad(t,n,a,o){if(rc){var u=rd(o);if(u===null)Wf(t,n,o,sc,a),O0(t,o);else if(ny(u,t,n,a,o))o.stopPropagation();else if(O0(t,o),n&4&&-1<ty.indexOf(t)){for(;u!==null;){var d=zn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Re(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var z=1<<31-$(y);R.entanglements[1]|=z,y&=~z}Ni(d),(Pt&6)===0&&(kl=Rt()+500,Eo(0))}}break;case 13:R=Xr(d,2),R!==null&&$n(R,d,2),Wl(),id(d,2)}if(d=rd(o),d===null&&Wf(t,n,o,sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Wf(t,n,o,null,a)}}function rd(t){return t=cu(t),sd(t)}var sc=null;function sd(t){if(sc=null,t=Wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function P0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nn()){case an:return 2;case ln:return 8;case Gt:case Jt:return 32;case q:return 268435456;default:return 32}default:return 32}}var od=!1,ka=null,Xa=null,Wa=null,Uo=new Map,Lo=new Map,qa=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O0(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=zn(n),n!==null&&N0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ny(t,n,a,o,u){switch(n){case"focusin":return ka=No(ka,t,n,a,o,u),!0;case"dragenter":return Xa=No(Xa,t,n,a,o,u),!0;case"mouseover":return Wa=No(Wa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Uo.set(d,No(Uo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Lo.set(d,No(Lo.get(d)||null,t,n,a,o,u)),!0}return!1}function I0(t){var n=Wi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ke(t.priority,function(){if(a.tag===13){var o=Jn();o=Pe(o);var u=Xr(a,o);u!==null&&$n(u,a,o),id(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Fr=o,a.target.dispatchEvent(o),Fr=null}else return n=zn(a),n!==null&&N0(n),t.blockedOn=a,!1;n.shift()}return!0}function F0(t,n,a){oc(t)&&a.delete(n)}function iy(){od=!1,ka!==null&&oc(ka)&&(ka=null),Xa!==null&&oc(Xa)&&(Xa=null),Wa!==null&&oc(Wa)&&(Wa=null),Uo.forEach(F0),Lo.forEach(F0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,od||(od=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,iy)))}var cc=null;function B0(t){cc!==t&&(cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(sd(o||a)===null)continue;break}var d=zn(a);d!==null&&(t.splice(n,3),n-=3,sf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Po(t){function n(z){return lc(z,t)}ka!==null&&lc(ka,t),Xa!==null&&lc(Xa,t),Wa!==null&&lc(Wa,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)I0(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[qt]||null;if(typeof d=="function")y||B0(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[qt]||null)R=y.formAction;else if(sd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),B0(a)}}}function ld(t){this._internalRoot=t}uc.prototype.render=ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();U0(a,o,t,n,null,null)},uc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;U0(t.current,2,null,t,null,null),Wl(),n[Mn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&I0(t)}};var z0=e.version;if(z0!=="19.1.0")throw Error(r(527,z0,"19.1.0"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var ay={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{L=fc.inject(ay),M=fc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=tg,d=ng,y=ig,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=w0(t,1,!1,null,null,a,o,u,d,y,R,null),t[Mn]=n.current,Xf(t),new ld(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=tg,y=ng,R=ig,z=null,ae=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ae=a.formState)),n=w0(t,1,!0,n,a??null,o,u,d,y,R,z,ae),n.context=D0(null),a=n.current,o=Jn(),o=Pe(o),u=wa(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,X(n,a),Ni(n),t[Mn]=n.current,Xf(t),new uc(n)},Io.version="19.1.0",Io}var K0;function py(){if(K0)return fd.exports;K0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),fd.exports=hy(),fd.exports}var my=py();/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,n_=/^[\\/]{2}/;function gy(s,e){return e+s.replace(/\\/g,"/")}var j0="popstate";function Q0(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function vy(s={}){function e(r,l){var h;let c=(h=l.state)==null?void 0:h.masked,{pathname:f,search:p,hash:m}=c||r.location;return Qd("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:Yo(l)}return xy(e,i,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Vi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _y(){return Math.random().toString(36).substring(2,10)}function J0(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Qd(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Is(e):e,state:i,key:e&&e.key||r||_y(),mask:l}}function Yo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Is(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function xy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p="POP",m=null,h=v();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function v(){return(f.state||{idx:null}).idx}function _(){p="POP";let S=v(),x=S==null?null:S-h;h=S,m&&m({action:p,location:C.location,delta:x})}function g(S,x){p="PUSH";let U=Q0(S)?S:Qd(C.location,S,x);h=v()+1;let I=J0(U,h),w=C.createHref(U.mask||U);try{f.pushState(I,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(w)}c&&m&&m({action:p,location:C.location,delta:1})}function E(S,x){p="REPLACE";let U=Q0(S)?S:Qd(C.location,S,x);h=v();let I=J0(U,h),w=C.createHref(U.mask||U);f.replaceState(I,"",w),c&&m&&m({action:p,location:C.location,delta:0})}function b(S){return Sy(l,S)}let C={get action(){return p},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(j0,_),m=S,()=>{l.removeEventListener(j0,_),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let x=b(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:E,go(S){return f.go(S)}};return C}function Sy(s,e,i=!1){let r="http://localhost";s&&(r=s.location.origin!=="null"?s.location.origin:s.location.href),Qt(r,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:Yo(e);return l=l.replace(/ $/,"%20"),!i&&n_.test(l)&&(l=r+l),new URL(l,r)}function i_(s,e,i="/"){return yy(s,e,i,!1)}function yy(s,e,i,r,l){let c=typeof e=="string"?Is(e):e,f=xa(c.pathname||"/",i);if(f==null)return null;let p=My(s),m=null,h=Ny(f);for(let v=0;m==null&&v<p.length;++v)m=Ly(p[v],h,r);return m}function My(s){let e=a_(s);return Ey(e),e}function a_(s,e=[],i=[],r="",l=!1){let c=(f,p,m=l,h)=>{let v={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Qt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let _=Ai([r,v.relativePath]),g=i.concat(v);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),a_(f.children,e,g,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:Dy(_,f.index),routesMeta:g.map((E,b)=>{let[C,S]=o_(E.relativePath,E.caseSensitive,b===g.length-1);return{...E,matcher:C,compiledParams:S}})})};return s.forEach((f,p)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))c(f,p);else for(let h of r_(f.path))c(f,p,!0,h)}),e}function r_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=r_(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ey(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Uy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var by=/^:[\w-]+$/,Ty=3,Ay=2,Ry=1,Cy=10,wy=-2,$0=s=>s==="*";function Dy(s,e){let i=s.split("/"),r=i.length;return i.some($0)&&(r+=wy),e&&(r+=Ay),i.filter(l=>!$0(l)).reduce((l,c)=>l+(by.test(c)?Ty:c===""?Ry:Cy),r)}function Uy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Ly(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",_={path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g=m.matcher&&m.compiledParams?s_(_,v,m.matcher,m.compiledParams):Wc(_,v),E=m.route;if(!g&&h&&i&&!r[r.length-1].route.index&&(g=Wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Ai([c,g.pathname]),pathnameBase:Iy(Ai([c,g.pathnameBase])),route:E}),g.pathnameBase!=="/"&&(c=Ai([c,g.pathnameBase]))}return f}function Wc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=o_(s.path,s.caseSensitive,s.end);return s_(s,e,i,r)}function s_(s,e,i,r){let l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:v,isOptional:_},g)=>{if(v==="*"){let b=p[g]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=p[g];return _&&!E?h[v]=void 0:h[v]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:s}}function o_(s,e=!1,i=!0){Vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,v)=>{if(r.push({paramName:p,isOptional:m!=null}),m){let _=v.charAt(h+f.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Ny(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function xa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Py(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Is(s):s,c;return i?(i=c_(i),i.startsWith("/")?c=ev(i.substring(1),"/"):c=ev(i,e)):c=e,{pathname:c,search:Fy(r),hash:By(l)}}function ev(s,e){let i=qc(e).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function md(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function l_(s){let e=Oy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Wh(s,e,i,r=!1){let l;typeof s=="string"?l=Is(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),md("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),md("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),md("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),_-=1;l.pathname=g.join("/")}p=_>=0?e[_]:"/"}let m=Py(l,p),h=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}var c_=s=>s.replace(/[\\/]{2,}/g,"/"),Ai=s=>c_(s.join("/")),qc=s=>s.replace(/\/+$/,""),Iy=s=>qc(s).replace(/^\/*/,"/"),Fy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,By=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,zy=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Hy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Gy(s){let e=s.map(i=>i.route.path).filter(Boolean);return Ai(e)||"/"}var u_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function f_(s,e){let i=s;if(typeof i!="string"||!Xh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(u_)try{let c=new URL(window.location.href),f=n_.test(i)?new URL(gy(i,c.protocol)):new URL(i),p=xa(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Vi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var d_=["POST","PUT","PATCH","DELETE"];new Set(d_);var Vy=["GET",...d_];new Set(Vy);var ky=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Xy(s){try{return ky.includes(new URL(s).protocol)}catch{return!1}}var Fs=me.createContext(null);Fs.displayName="DataRouter";var eu=me.createContext(null);eu.displayName="DataRouterState";var h_=me.createContext(!1);function Wy(){return me.useContext(h_)}var p_=me.createContext({isTransitioning:!1});p_.displayName="ViewTransition";var qy=me.createContext(new Map);qy.displayName="Fetchers";var Yy=me.createContext(null);Yy.displayName="Await";var mi=me.createContext(null);mi.displayName="Navigation";var jo=me.createContext(null);jo.displayName="Location";var Ma=me.createContext({outlet:null,matches:[],isDataRoute:!1});Ma.displayName="Route";var qh=me.createContext(null);qh.displayName="RouteError";var m_="REACT_ROUTER_ERROR",Zy="REDIRECT",Ky="ROUTE_ERROR_RESPONSE";function jy(s){if(s.startsWith(`${m_}:${Zy}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Qy(s){if(s.startsWith(`${m_}:${Ky}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new zy(e.status,e.statusText,e.data)}catch{}}function Jy(s,{relative:e}={}){Qt(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=me.useContext(mi),{hash:l,pathname:c,search:f}=Jo(s,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Ai([i,c])),r.createHref({pathname:p,search:f,hash:l})}function Qo(){return me.useContext(jo)!=null}function Ea(){return Qt(Qo(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(jo).location}var g_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v_(s){me.useContext(mi).static||me.useLayoutEffect(s)}function Yh(){let{isDataRoute:s}=me.useContext(Ma);return s?fM():$y()}function $y(){Qt(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=me.useContext(Fs),{basename:e,navigator:i}=me.useContext(mi),{matches:r}=me.useContext(Ma),{pathname:l}=Ea(),c=JSON.stringify(l_(r)),f=me.useRef(!1);return v_(()=>{f.current=!0}),me.useCallback((m,h={})=>{if(Vi(f.current,g_),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Wh(m,JSON.parse(c),l,h.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ai([e,v.pathname])),(h.replace?i.replace:i.push)(v,h.state,h)},[e,i,c,l,s])}me.createContext(null);function Jo(s,{relative:e}={}){let{matches:i}=me.useContext(Ma),{pathname:r}=Ea(),l=JSON.stringify(l_(i));return me.useMemo(()=>Wh(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function eM(s,e){return __(s,e)}function __(s,e,i){var S;Qt(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=me.useContext(mi),{matches:l}=me.useContext(Ma),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let x=h&&h.path||"";S_(p,!h||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=Ea(),_;if(e){let x=typeof e=="string"?Is(e):e;Qt(m==="/"||((S=x.pathname)==null?void 0:S.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),_=x}else _=v;let g=_.pathname||"/",E=g;if(m!=="/"){let x=m.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=i&&i.state.matches.length?i.state.matches.map(x=>Object.assign(x,{route:i.manifest[x.route.id]||x.route})):i_(s,{pathname:E});Vi(h||b!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Vi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=rM(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Ai([m,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:Ai([m,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),l,i);return e&&C?me.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,..._},navigationType:"POP"}},C):C}function tM(){let s=uM(),e=Hy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:c},"ErrorBoundary")," or"," ",me.createElement("code",{style:c},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),i?me.createElement("pre",{style:l},i):null,f)}var nM=me.createElement(tM,null),x_=class extends me.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=Qy(s.digest);i&&(s=i)}let e=s!==void 0?me.createElement(Ma.Provider,{value:this.props.routeContext},me.createElement(qh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?me.createElement(iM,{error:s},e):e}};x_.contextType=h_;var gd=new WeakMap;function iM({children:s,error:e}){let{basename:i}=me.useContext(mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=jy(e.digest);if(r){let l=gd.get(e);if(l)throw l;let c=f_(r.location,i),f=c.absoluteURL||c.to;if(Xy(f))throw new Error("Invalid redirect location");if(u_&&!gd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=f;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw gd.set(e,p),p}return me.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return s}function aM({routeContext:s,match:e,children:i}){let r=me.useContext(Fs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(Ma.Provider,{value:s},i)}function rM(s,e=[],i){let r=i==null?void 0:i.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,c=r==null?void 0:r.errors;if(c!=null){let v=l.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,p=-1;if(i&&r){f=r.renderFallback;for(let v=0;v<l.length;v++){let _=l[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=v),_.route.id){let{loaderData:g,errors:E}=r,b=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!E||E[_.route.id]===void 0);if(_.route.lazy||b){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i==null?void 0:i.onError,h=r&&m?(v,_)=>{var g,E;m(v,{location:r.location,params:((E=(g=r.matches)==null?void 0:g[0])==null?void 0:E.params)??{},pattern:Gy(r.matches),errorInfo:_})}:void 0;return l.reduceRight((v,_,g)=>{let E,b=!1,C=null,S=null;r&&(E=c&&_.route.id?c[_.route.id]:void 0,C=_.route.errorElement||nM,f&&(p<0&&g===0?(S_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):p===g&&(b=!0,S=_.route.hydrateFallbackElement||null)));let x=e.concat(l.slice(0,g+1)),U=()=>{let I;return E?I=C:b?I=S:_.route.Component?I=me.createElement(_.route.Component,null):_.route.element?I=_.route.element:I=v,me.createElement(aM,{match:_,routeContext:{outlet:v,matches:x,isDataRoute:r!=null},children:I})};return r&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?me.createElement(x_,{location:r.location,revalidation:r.revalidation,component:C,error:E,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):U()},null)}function Zh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sM(s){let e=me.useContext(Fs);return Qt(e,Zh(s)),e}function oM(s){let e=me.useContext(eu);return Qt(e,Zh(s)),e}function lM(s){let e=me.useContext(Ma);return Qt(e,Zh(s)),e}function Kh(s){let e=lM(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function cM(){return Kh("useRouteId")}function uM(){var r;let s=me.useContext(qh),e=oM("useRouteError"),i=Kh("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function fM(){let{router:s}=sM("useNavigate"),e=Kh("useNavigate"),i=me.useRef(!1);return v_(()=>{i.current=!0}),me.useCallback(async(l,c={})=>{Vi(i.current,g_),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var tv={};function S_(s,e,i){!e&&!tv[s]&&(tv[s]=!0,Vi(!1,i))}me.memo(dM);function dM({routes:s,manifest:e,future:i,state:r,isStatic:l,onError:c}){return __(s,void 0,{manifest:e,state:r,isStatic:l,onError:c})}function Ic(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,useTransitions:f}){Qt(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=me.useMemo(()=>({basename:p,navigator:l,static:c,useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Is(i));let{pathname:h="/",search:v="",hash:_="",state:g=null,key:E="default",mask:b}=i,C=me.useMemo(()=>{let S=xa(h,p);return S==null?null:{location:{pathname:S,search:v,hash:_,state:g,key:E,mask:b},navigationType:r}},[p,h,v,_,g,E,r,b]);return Vi(C!=null,`<Router basename="${p}"> is not able to match the URL "${h}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:me.createElement(mi.Provider,{value:m},me.createElement(jo.Provider,{children:e,value:C}))}function pM({children:s,location:e}){return eM(Jd(s),e)}function Jd(s,e=[]){let i=[];return me.Children.forEach(s,(r,l)=>{if(!me.isValidElement(r))return;let c=[...e,l];if(r.type===me.Fragment){i.push.apply(i,Jd(r.props.children,c));return}Qt(r.type===Ic,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Jd(r.props.children,c)),i.push(f)}),i}var Fc="get",Bc="application/x-www-form-urlencoded";function tu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function mM(s){return tu(s)&&s.tagName.toLowerCase()==="button"}function gM(s){return tu(s)&&s.tagName.toLowerCase()==="form"}function vM(s){return tu(s)&&s.tagName.toLowerCase()==="input"}function _M(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function xM(s,e){return s.button===0&&(!e||e==="_self")&&!_M(s)}var dc=null;function SM(){if(dc===null)try{new FormData(document.createElement("form"),0),dc=!1}catch{dc=!0}return dc}var yM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vd(s){return s!=null&&!yM.has(s)?(Vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bc}"`),null):s}function MM(s,e){let i,r,l,c,f;if(gM(s)){let p=s.getAttribute("action");r=p?xa(p,e):null,i=s.getAttribute("method")||Fc,l=vd(s.getAttribute("enctype"))||Bc,c=new FormData(s)}else if(mM(s)||vM(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?xa(m,e):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||Fc,l=vd(s.getAttribute("formenctype"))||vd(p.getAttribute("enctype"))||Bc,c=new FormData(p,s),!SM()){let{name:h,type:v,value:_}=s;if(v==="image"){let g=h?`${h}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else h&&c.append(h,_)}}else{if(tu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Fc,r=null,l=Bc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function y_(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&xa(l.pathname,e)==="/"?l.pathname=`${qc(e)}/_root.${r}`:l.pathname=`${qc(l.pathname)}.${r}`,l}async function EM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function TM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await EM(c,i);return f.links?f.links():[]}return[]}));return wM(r.flat(1).filter(bM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function nv(s,e,i,r,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>{var v;return i[h].pathname!==m.pathname||((v=i[h].route.path)==null?void 0:v.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var _;let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function AM(s,e,{includeHydrateFallback:i}={}){return RM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function RM(s){return[...new Set(s)]}function CM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function wM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(CM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Qh(){let s=me.useContext(Fs);return jh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function DM(){let s=me.useContext(eu);return jh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Jh=me.createContext(void 0);Jh.displayName="FrameworkContext";function nu(){let s=me.useContext(Jh);return jh(s,"You must render this element inside a <HydratedRouter> element"),s}function UM(s,e){let i=me.useContext(Jh),[r,l]=me.useState(!1),[c,f]=me.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:v,onTouchStart:_}=e,g=me.useRef(null);me.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let C=x=>{x.forEach(U=>{f(U.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return g.current&&S.observe(g.current),()=>{S.disconnect()}}},[s]),me.useEffect(()=>{if(r){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[r]);let E=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Fo(p,E),onBlur:Fo(m,b),onMouseEnter:Fo(h,E),onMouseLeave:Fo(v,b),onTouchStart:Fo(_,E)}]:[!1,g,{}]}function Fo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function LM({page:s,...e}){let i=Wy(),{nonce:r}=nu(),{router:l}=Qh(),c=me.useMemo(()=>i_(l.routes,s,l.basename),[l.routes,s,l.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),i?me.createElement(PM,{page:s,matches:c,...e}):me.createElement(OM,{page:s,matches:c,...e})):null}function NM(s){let{manifest:e,routeModules:i}=nu(),[r,l]=me.useState([]);return me.useEffect(()=>{let c=!1;return TM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function PM({page:s,matches:e,...i}){let r=Ea(),{future:l}=nu(),{basename:c}=Qh(),f=me.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let p=y_(s,c,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let v of e)typeof v.route.shouldRevalidate=="function"?m=!0:h.push(v.route.id);return m&&h.length>0&&p.searchParams.set("_routes",h.join(",")),[p.pathname+p.search]},[c,l.v8_trailingSlashAwareDataRequests,s,r,e]);return me.createElement(me.Fragment,null,f.map(p=>me.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...i})))}function OM({page:s,matches:e,...i}){let r=Ea(),{future:l,manifest:c,routeModules:f}=nu(),{basename:p}=Qh(),{loaderData:m,matches:h}=DM(),v=me.useMemo(()=>nv(s,e,h,c,r,"data"),[s,e,h,c,r]),_=me.useMemo(()=>nv(s,e,h,c,r,"assets"),[s,e,h,c,r]),g=me.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let C=new Set,S=!1;if(e.forEach(U=>{var w;let I=c.routes[U.route.id];!I||!I.hasLoader||(!v.some(N=>N.route.id===U.route.id)&&U.route.id in m&&((w=f[U.route.id])!=null&&w.shouldRevalidate)||I.hasClientLoader?S=!0:C.add(U.route.id))}),C.size===0)return[];let x=y_(s,p,l.v8_trailingSlashAwareDataRequests,"data");return S&&C.size>0&&x.searchParams.set("_routes",e.filter(U=>C.has(U.route.id)).map(U=>U.route.id).join(",")),[x.pathname+x.search]},[p,l.v8_trailingSlashAwareDataRequests,m,r,c,v,e,s,f]),E=me.useMemo(()=>AM(_,c),[_,c]),b=NM(_);return me.createElement(me.Fragment,null,g.map(C=>me.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),E.map(C=>me.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),b.map(({key:C,link:S})=>me.createElement("link",{key:C,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function IM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var FM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{FM&&(window.__reactRouterVersion="7.18.2")}catch{}function BM({basename:s,children:e,useTransitions:i,window:r}){let l=me.useRef();l.current==null&&(l.current=vy({window:r,v5Compat:!0}));let c=l.current,[f,p]=me.useState({action:c.action,location:c.location}),m=me.useCallback(h=>{i===!1?p(h):me.startTransition(()=>p(h))},[i]);return me.useLayoutEffect(()=>c.listen(m),[c,m]),me.createElement(hM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var M_=me.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,mask:p,state:m,target:h,to:v,preventScrollReset:_,viewTransition:g,defaultShouldRevalidate:E,...b},C){let{basename:S,navigator:x,useTransitions:U}=me.useContext(mi),I=typeof v=="string"&&Xh.test(v),w=f_(v,S);v=w.to;let N=Jy(v,{relative:l}),P=Ea(),H=null;if(p){let Z=Wh(p,[],P.mask?P.mask.pathname:"/",!0);S!=="/"&&(Z.pathname=Z.pathname==="/"?S:Ai([S,Z.pathname])),H=x.createHref(Z)}let[T,O,Y]=UM(r,b),V=VM(v,{replace:f,mask:p,state:m,target:h,preventScrollReset:_,relative:l,viewTransition:g,defaultShouldRevalidate:E,useTransitions:U});function J(Z){e&&e(Z),Z.defaultPrevented||V(Z)}let pe=!(w.isExternal||c),fe=me.createElement("a",{...b,...Y,href:(pe?H:void 0)||w.absoluteURL||N,onClick:pe?J:e,ref:IM(C,O),target:h,"data-discover":!I&&i==="render"?"true":void 0});return T&&!I?me.createElement(me.Fragment,null,fe,me.createElement(LM,{page:N})):fe});M_.displayName="Link";var zM=me.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},v){let _=Jo(f,{relative:h.relative}),g=Ea(),E=me.useContext(eu),{navigator:b,basename:C}=me.useContext(mi),S=E!=null&&YM(_)&&p===!0,x=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,U=g.pathname,I=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(U=U.toLowerCase(),I=I?I.toLowerCase():null,x=x.toLowerCase()),I&&C&&(I=xa(I,C)||I);const w=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=U===x||!l&&U.startsWith(x)&&U.charAt(w)==="/",P=I!=null&&(I===x||!l&&I.startsWith(x)&&I.charAt(x.length)==="/"),H={isActive:N,isPending:P,isTransitioning:S},T=N?e:void 0,O;typeof r=="function"?O=r(H):O=[r,N?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(H):c;return me.createElement(M_,{...h,"aria-current":T,className:O,ref:v,style:Y,to:f,viewTransition:p},typeof m=="function"?m(H):m)});zM.displayName="NavLink";var HM=me.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Fc,action:p,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:g,...E},b)=>{let{useTransitions:C}=me.useContext(mi),S=WM(),x=qM(p,{relative:h}),U=f.toLowerCase()==="get"?"get":"post",I=typeof p=="string"&&Xh.test(p),w=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let P=N.nativeEvent.submitter,H=(P==null?void 0:P.getAttribute("formmethod"))||f,T=()=>S(P||N.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:c,relative:h,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:g});C&&i!==!1?me.startTransition(()=>T()):T()};return me.createElement("form",{ref:b,method:U,action:x,onSubmit:r?m:w,...E,"data-discover":!I&&s==="render"?"true":void 0})});HM.displayName="Form";function GM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E_(s){let e=me.useContext(Fs);return Qt(e,GM(s)),e}function VM(s,{target:e,replace:i,mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m,useTransitions:h}={}){let v=Yh(),_=Ea(),g=Jo(s,{relative:f});return me.useCallback(E=>{if(xM(E,e)){E.preventDefault();let b=i!==void 0?i:Yo(_)===Yo(g),C=()=>v(s,{replace:b,mask:r,state:l,preventScrollReset:c,relative:f,viewTransition:p,defaultShouldRevalidate:m});h?me.startTransition(()=>C()):C()}},[_,v,g,i,r,l,e,s,c,f,p,m,h])}var kM=0,XM=()=>`__${String(++kM)}__`;function WM(){let{router:s}=E_("useSubmit"),{basename:e}=me.useContext(mi),i=cM(),r=s.fetch,l=s.navigate;return me.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:v,body:_}=MM(c,e);if(f.navigate===!1){let g=f.fetcherKey||XM();await r(g,i,f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function qM(s,{relative:e}={}){let{basename:i}=me.useContext(mi),r=me.useContext(Ma);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Jo(s||".",{relative:e})},f=Ea();if(s==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let v=p.toString();c.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ai([i,c.pathname])),Yo(c)}function YM(s,{relative:e}={}){let i=me.useContext(p_);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=E_("useViewTransitionState"),l=Jo(s,{relative:e});if(!i.isTransitioning)return!1;let c=xa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=xa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Wc(l.pathname,f)!=null||Wc(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="185",ZM=0,iv=1,KM=2,zc=1,jM=2,Wo=3,nr=0,Wn=1,pa=2,ga=0,ws=1,av=2,rv=3,sv=4,QM=5,Ar=100,JM=101,$M=102,eE=103,tE=104,nE=200,iE=201,aE=202,rE=203,$d=204,eh=205,sE=206,oE=207,lE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,th=0,nh=1,ih=2,Ls=3,ah=4,rh=5,sh=6,oh=7,b_=0,mE=1,gE=2,zi=0,T_=1,A_=2,R_=3,C_=4,w_=5,D_=6,U_=7,L_=300,Dr=301,Ns=302,_d=303,xd=304,iu=306,lh=1e3,ma=1001,ch=1002,Rn=1003,vE=1004,hc=1005,Nn=1006,Sd=1007,Cr=1008,pi=1009,N_=1010,P_=1011,Zo=1012,ep=1013,ki=1014,Fi=1015,Sa=1016,tp=1017,np=1018,Ko=1020,O_=35902,I_=35899,F_=1021,B_=1022,Ti=1023,ya=1026,wr=1027,z_=1028,ip=1029,Ur=1030,ap=1031,rp=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,gh=37496,vh=37488,_h=37489,Yc=37490,xh=37491,Sh=37808,yh=37809,Mh=37810,Eh=37811,bh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,wh=37817,Dh=37818,Uh=37819,Lh=37820,Nh=37821,Ph=36492,Oh=36494,Ih=36495,Fh=36283,Bh=36284,Zc=36285,zh=36286,_E=3200,ov=0,xE=1,er="",hi="srgb",Kc="srgb-linear",jc="linear",It="srgb",ms=7680,lv=519,SE=512,yE=513,ME=514,sp=515,EE=516,bE=517,op=518,TE=519,cv=35044,uv="300 es",Bi=2e3,Qc=2001;function AE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function RE(){const s=Jc("canvas");return s.style.display="block",s}const fv={};function dv(...s){const e="THREE."+s.shift();console.log(e,...s)}function H_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=H_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Et(...s){s=H_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ds(...s){const e=s.join(" ");e in fv||(fv[e]=!0,nt(...s))}function CE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const wE={[th]:nh,[ih]:sh,[ah]:oh,[Ls]:rh,[nh]:th,[sh]:ih,[oh]:ah,[rh]:Ls};class Nr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Hh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function DE(s,e){return(s%e+e)%e}function Md(s,e,i){return(1-i)*s+i*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fp=class fp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fp.prototype.isVector2=!0;let Tt=fp;class Bs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,p){let m=r[l+0],h=r[l+1],v=r[l+2],_=r[l+3],g=c[f+0],E=c[f+1],b=c[f+2],C=c[f+3];if(_!==C||m!==g||h!==E||v!==b){let S=m*g+h*E+v*b+_*C;S<0&&(g=-g,E=-E,b=-b,C=-C,S=-S);let x=1-p;if(S<.9995){const U=Math.acos(S),I=Math.sin(U);x=Math.sin(x*U)/I,p=Math.sin(p*U)/I,m=m*x+g*p,h=h*x+E*p,v=v*x+b*p,_=_*x+C*p}else{m=m*x+g*p,h=h*x+E*p,v=v*x+b*p,_=_*x+C*p;const U=1/Math.sqrt(m*m+h*h+v*v+_*_);m*=U,h*=U,v*=U,_*=U}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],_=c[f],g=c[f+1],E=c[f+2],b=c[f+3];return e[i]=p*b+v*_+m*E-h*g,e[i+1]=m*b+v*g+h*_-p*E,e[i+2]=h*b+v*E+p*g-m*_,e[i+3]=v*b-p*_-m*g-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),_=p(c/2),g=m(r/2),E=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*v*_+h*E*b,this._y=h*E*_-g*v*b,this._z=h*v*b+g*E*_,this._w=h*v*_-g*E*b;break;case"YXZ":this._x=g*v*_+h*E*b,this._y=h*E*_-g*v*b,this._z=h*v*b-g*E*_,this._w=h*v*_+g*E*b;break;case"ZXY":this._x=g*v*_-h*E*b,this._y=h*E*_+g*v*b,this._z=h*v*b+g*E*_,this._w=h*v*_-g*E*b;break;case"ZYX":this._x=g*v*_-h*E*b,this._y=h*E*_+g*v*b,this._z=h*v*b-g*E*_,this._w=h*v*_+g*E*b;break;case"YZX":this._x=g*v*_+h*E*b,this._y=h*E*_+g*v*b,this._z=h*v*b-g*E*_,this._w=h*v*_-g*E*b;break;case"XZY":this._x=g*v*_-h*E*b,this._y=h*E*_-g*v*b,this._z=h*v*b+g*E*_,this._w=h*v*_+g*E*b;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],v=i[6],_=i[10],g=r+p+_;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-h)*E,this._z=(f-l)*E}else if(r>p&&r>_){const E=2*Math.sqrt(1+r-p-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+h)/E}else if(p>_){const E=2*Math.sqrt(1+p-r-_);this._w=(c-h)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-r-p);this._w=(f-l)/E,this._x=(c+h)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+f*p+l*h-c*m,this._y=l*v+f*m+c*p-r*h,this._z=c*v+f*h+r*m-l*p,this._w=f*v-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dp=class dp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(hv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(hv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*r),v=2*(p*i-c*l),_=2*(c*r-f*i);return this.x=i+m*h+f*_-p*v,this.y=r+m*v+p*h-c*_,this.z=l+m*_+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dp.prototype.isVector3=!0;let oe=dp;const Ed=new oe,hv=new Bs,hp=class hp{constructor(e,i,r,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h)}set(e,i,r,l,c,f,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],v=r[4],_=r[7],g=r[2],E=r[5],b=r[8],C=l[0],S=l[3],x=l[6],U=l[1],I=l[4],w=l[7],N=l[2],P=l[5],H=l[8];return c[0]=f*C+p*U+m*N,c[3]=f*S+p*I+m*P,c[6]=f*x+p*w+m*H,c[1]=h*C+v*U+_*N,c[4]=h*S+v*I+_*P,c[7]=h*x+v*w+_*H,c[2]=g*C+E*U+b*N,c[5]=g*S+E*I+b*P,c[8]=g*x+E*w+b*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*f*v-i*p*h-r*c*v+r*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],_=v*f-p*h,g=p*m-v*c,E=h*c-f*m,b=i*_+r*g+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(l*h-v*r)*C,e[2]=(p*r-l*f)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=E*C,e[7]=(r*m-h*i)*C,e[8]=(f*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,i)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,i){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hp.prototype.isMatrix3=!0;let st=hp;const bd=new st,pv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UE(){const s={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===It&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Kc]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const xt=UE();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class LE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=Jc("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Td(l[f].image)):c.push(Td(l[f]))}else c=Td(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?LE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let PE=0;const Ad=new oe;class Bn extends Nr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=ma,l=ma,c=Nn,f=Cr,p=Ti,m=pi,h=Bn.DEFAULT_ANISOTROPY,v=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=$o(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=L_;Bn.DEFAULT_ANISOTROPY=1;const pp=class pp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],v=m[4],_=m[8],g=m[1],E=m[5],b=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(b+S)<.1&&Math.abs(h+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,w=(E+1)/2,N=(x+1)/2,P=(v+g)/4,H=(_+C)/4,T=(b+S)/4;return I>w&&I>N?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=P/r,c=H/r):w>N?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=P/l,c=T/l):N<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),r=H/c,l=T/c),this.set(r,l,c,i),this}let U=Math.sqrt((S-b)*(S-b)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(U)<.001&&(U=1),this.x=(S-b)/U,this.y=(_-C)/U,this.z=(g-v)/U,this.w=Math.acos((h+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;let tn=pp;class OE extends Nr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new lp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends OE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class G_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IE extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(e,i,r,l,c,f,p,m,h,v,_,g,E,b,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h,v,_,g,E,b,C,S)}set(e,i,r,l,c,f,p,m,h,v,_,g,E,b,C,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=v,x[10]=_,x[14]=g,x[3]=E,x[7]=b,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),c=1/vs.setFromMatrixColumn(e,1).length(),f=1/vs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=f*v,E=f*_,b=p*v,C=p*_;i[0]=m*v,i[4]=-m*_,i[8]=h,i[1]=E+b*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=b+E*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,E=m*_,b=h*v,C=h*_;i[0]=g+C*p,i[4]=b*p-E,i[8]=f*h,i[1]=f*_,i[5]=f*v,i[9]=-p,i[2]=E*p-b,i[6]=C+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,E=m*_,b=h*v,C=h*_;i[0]=g-C*p,i[4]=-f*_,i[8]=b+E*p,i[1]=E+b*p,i[5]=f*v,i[9]=C-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,E=f*_,b=p*v,C=p*_;i[0]=m*v,i[4]=b*h-E,i[8]=g*h+C,i[1]=m*_,i[5]=C*h+g,i[9]=E*h-b,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,E=f*h,b=p*m,C=p*h;i[0]=m*v,i[4]=C-g*_,i[8]=b*_+E,i[1]=_,i[5]=f*v,i[9]=-p*v,i[2]=-h*v,i[6]=E*_+b,i[10]=g-C*_}else if(e.order==="XZY"){const g=f*m,E=f*h,b=p*m,C=p*h;i[0]=m*v,i[4]=-_,i[8]=h*v,i[1]=g*_+C,i[5]=f*v,i[9]=E*_-b,i[2]=b*_-E,i[6]=p*v,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,BE)}lookAt(e,i,r){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(r,ei),Za.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(r,ei)),Za.normalize(),pc.crossVectors(ei,Za),l[0]=Za.x,l[4]=pc.x,l[8]=ei.x,l[1]=Za.y,l[5]=pc.y,l[9]=ei.y,l[2]=Za.z,l[6]=pc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],v=r[1],_=r[5],g=r[9],E=r[13],b=r[2],C=r[6],S=r[10],x=r[14],U=r[3],I=r[7],w=r[11],N=r[15],P=l[0],H=l[4],T=l[8],O=l[12],Y=l[1],V=l[5],J=l[9],pe=l[13],fe=l[2],Z=l[6],F=l[10],B=l[14],te=l[3],ge=l[7],D=l[11],Q=l[15];return c[0]=f*P+p*Y+m*fe+h*te,c[4]=f*H+p*V+m*Z+h*ge,c[8]=f*T+p*J+m*F+h*D,c[12]=f*O+p*pe+m*B+h*Q,c[1]=v*P+_*Y+g*fe+E*te,c[5]=v*H+_*V+g*Z+E*ge,c[9]=v*T+_*J+g*F+E*D,c[13]=v*O+_*pe+g*B+E*Q,c[2]=b*P+C*Y+S*fe+x*te,c[6]=b*H+C*V+S*Z+x*ge,c[10]=b*T+C*J+S*F+x*D,c[14]=b*O+C*pe+S*B+x*Q,c[3]=U*P+I*Y+w*fe+N*te,c[7]=U*H+I*V+w*Z+N*ge,c[11]=U*T+I*J+w*F+N*D,c[15]=U*O+I*pe+w*B+N*Q,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],v=e[2],_=e[6],g=e[10],E=e[14],b=e[3],C=e[7],S=e[11],x=e[15],U=m*E-h*g,I=p*E-h*_,w=p*g-m*_,N=f*E-h*v,P=f*g-m*v,H=f*_-p*v;return i*(C*U-S*I+x*w)-r*(b*U-S*N+x*P)+l*(b*I-C*N+x*H)-c*(b*w-C*P+S*H)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(f*v-p*h)-r*(c*v-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],_=e[9],g=e[10],E=e[11],b=e[12],C=e[13],S=e[14],x=e[15],U=i*p-r*f,I=i*m-l*f,w=i*h-c*f,N=r*m-l*p,P=r*h-c*p,H=l*h-c*m,T=v*C-_*b,O=v*S-g*b,Y=v*x-E*b,V=_*S-g*C,J=_*x-E*C,pe=g*x-E*S,fe=U*pe-I*J+w*V+N*Y-P*O+H*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/fe;return e[0]=(p*pe-m*J+h*V)*Z,e[1]=(l*J-r*pe-c*V)*Z,e[2]=(C*H-S*P+x*N)*Z,e[3]=(g*P-_*H-E*N)*Z,e[4]=(m*Y-f*pe-h*O)*Z,e[5]=(i*pe-l*Y+c*O)*Z,e[6]=(S*w-b*H-x*I)*Z,e[7]=(v*H-g*w+E*I)*Z,e[8]=(f*J-p*Y+h*T)*Z,e[9]=(r*Y-i*J-c*T)*Z,e[10]=(b*P-C*w+x*U)*Z,e[11]=(_*w-v*P-E*U)*Z,e[12]=(p*O-f*V-m*T)*Z,e[13]=(i*V-r*O+l*T)*Z,e[14]=(C*I-b*N-S*U)*Z,e[15]=(v*N-_*I+g*U)*Z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,v=c*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*f,0,h*m-l*p,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,v=f+f,_=p+p,g=c*h,E=c*v,b=c*_,C=f*v,S=f*_,x=p*_,U=m*h,I=m*v,w=m*_,N=r.x,P=r.y,H=r.z;return l[0]=(1-(C+x))*N,l[1]=(E+w)*N,l[2]=(b-I)*N,l[3]=0,l[4]=(E-w)*P,l[5]=(1-(g+x))*P,l[6]=(S+U)*P,l[7]=0,l[8]=(b+I)*H,l[9]=(S-U)*H,l[10]=(1-(g+C))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let f=vs.set(l[0],l[1],l[2]).length();const p=vs.set(l[4],l[5],l[6]).length(),m=vs.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Si.copy(this);const h=1/f,v=1/p,_=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,f,p=Bi,m=!1){const h=this.elements,v=2*c/(i-e),_=2*c/(r-l),g=(i+e)/(i-e),E=(r+l)/(r-l);let b,C;if(m)b=c/(f-c),C=f*c/(f-c);else if(p===Bi)b=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===Qc)b=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,p=Bi,m=!1){const h=this.elements,v=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),E=-(r+l)/(r-l);let b,C;if(m)b=1/(f-c),C=f/(f-c);else if(p===Bi)b=-2/(f-c),C=-(f+c)/(f-c);else if(p===Qc)b=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};$c.prototype.isMatrix4=!0;let hn=$c;const vs=new oe,Si=new hn,FE=new oe(0,0,0),BE=new oe(1,1,1),Za=new oe,pc=new oe,ei=new oe,gv=new hn,vv=new Bs;class Lr{constructor(e=0,i=0,r=0,l=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],v=l[9],_=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class V_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const _v=new oe,_s=new Bs,ca=new hn,mc=new oe,zo=new oe,HE=new oe,GE=new Bs,xv=new oe(1,0,0),Sv=new oe(0,1,0),yv=new oe(0,0,1),Mv={type:"added"},VE={type:"removed"},xs={type:"childadded",child:null},Rd={type:"childremoved",child:null};class ni extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new oe,i=new Lr,r=new Bs,l=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new st}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,i){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(zo,mc,this.up):ca.lookAt(mc,zo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ca),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),xs.child=e,this.dispatchEvent(xs),xs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VE),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),_=f(e.shapes),g=f(e.skeletons),E=f(e.animations),b=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new oe(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),x=this._getHandJoint(h,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),E=.02,b=.005;h.inputState.pinching&&g>E+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=E-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},vc={h:0,s:0,l:0};function wd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=xt.workingColorSpace){return this.r=e,this.g=i,this.b=r,xt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=xt.workingColorSpace){if(e=DE(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=wd(f,c,e+1/3),this.g=wd(f,c,e),this.b=wd(f,c,e-1/3)}return xt.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=k_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return xt.workingToColorSpace(Ln.copy(this),e),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=xt.workingColorSpace){xt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const v=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=v<=.5?_/(f+p):_/(2-f-p),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=xt.workingColorSpace){return xt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){xt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(vc);const r=Md(Ka.h,vc.h,i),l=Md(Ka.s,vc.s,i),c=Md(Ka.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Nt;Nt.NAMES=k_;class XE extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new oe,ua=new oe,Dd=new oe,fa=new oe,Ss=new oe,ys=new oe,Ev=new oe,Ud=new oe,Ld=new oe,Nd=new oe,Pd=new tn,Od=new tn,Id=new tn;class bi{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){yi.subVectors(l,i),ua.subVectors(r,i),Dd.subVectors(e,i);const f=yi.dot(yi),p=yi.dot(ua),m=yi.dot(Dd),h=ua.dot(ua),v=ua.dot(Dd),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,E=(h*m-p*v)*g,b=(f*v-p*m)*g;return c.set(1-E-b,b,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,r,l,c,f,p,m){return this.getBarycoord(e,i,r,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(p,fa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Pd.setScalar(0),Od.setScalar(0),Id.setScalar(0),Pd.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,r),Id.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Pd,c.x),f.addScaledVector(Od,c.y),f.addScaledVector(Id,c.z),f}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),ua.subVectors(e,i),yi.cross(ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),yi.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,p;Ss.subVectors(l,r),ys.subVectors(c,r),Ud.subVectors(e,r);const m=Ss.dot(Ud),h=ys.dot(Ud);if(m<=0&&h<=0)return i.copy(r);Ld.subVectors(e,l);const v=Ss.dot(Ld),_=ys.dot(Ld);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*h;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ss,f);Nd.subVectors(e,c);const E=Ss.dot(Nd),b=ys.dot(Nd);if(b>=0&&E<=b)return i.copy(c);const C=E*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(ys,p);const S=v*b-E*_;if(S<=0&&_-v>=0&&E-b>=0)return Ev.subVectors(c,l),p=(_-v)/(_-v+(E-b)),i.copy(l).addScaledVector(Ev,p);const x=1/(S+C+g);return f=C*x,p=g*x,i.copy(r).addScaledVector(Ss,f).addScaledVector(ys,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class el{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),xc.subVectors(this.max,Ho),Ms.subVectors(e.a,Ho),Es.subVectors(e.b,Ho),bs.subVectors(e.c,Ho),ja.subVectors(Es,Ms),Qa.subVectors(bs,Es),yr.subVectors(Ms,bs);let i=[0,-ja.z,ja.y,0,-Qa.z,Qa.y,0,-yr.z,yr.y,ja.z,0,-ja.x,Qa.z,0,-Qa.x,yr.z,0,-yr.x,-ja.y,ja.x,0,-Qa.y,Qa.x,0,-yr.y,yr.x,0];return!Fd(i,Ms,Es,bs,xc)||(i=[1,0,0,0,1,0,0,0,1],!Fd(i,Ms,Es,bs,xc))?!1:(Sc.crossVectors(ja,Qa),i=[Sc.x,Sc.y,Sc.z],Fd(i,Ms,Es,bs,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Mi=new oe,_c=new el,Ms=new oe,Es=new oe,bs=new oe,ja=new oe,Qa=new oe,yr=new oe,Ho=new oe,xc=new oe,Sc=new oe,Mr=new oe;function Fd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Mr.fromArray(s,c);const p=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),h=i.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const dn=new oe,yc=new Tt;let WE=0;class Gi extends Nr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=cv,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class X_ extends Gi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class W_ extends Gi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _a extends Gi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const qE=new el,Go=new oe,Bd=new oe;class cp{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Bd)),this.expandByPoint(Go.copy(e.center).sub(Bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const di=new hn,zd=new ni,Ts=new oe,ti=new el,Vo=new el,yn=new oe;class ba extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AE(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new _a(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(yn.addVectors(ti.min,Vo.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Vo.max),ti.expandByPoint(yn)):(ti.expandByPoint(Vo.min),ti.expandByPoint(Vo.max))}ti.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)yn.fromBufferAttribute(p,h),m&&(Ts.fromBufferAttribute(e,h),yn.add(Ts)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new oe,m[T]=new oe;const h=new oe,v=new oe,_=new oe,g=new Tt,E=new Tt,b=new Tt,C=new oe,S=new oe;function x(T,O,Y){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,O),_.fromBufferAttribute(r,Y),g.fromBufferAttribute(c,T),E.fromBufferAttribute(c,O),b.fromBufferAttribute(c,Y),v.sub(h),_.sub(h),E.sub(g),b.sub(g);const V=1/(E.x*b.y-b.x*E.y);isFinite(V)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(_,-E.y).multiplyScalar(V),S.copy(_).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(V),p[T].add(C),p[O].add(C),p[Y].add(C),m[T].add(S),m[O].add(S),m[Y].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let T=0,O=U.length;T<O;++T){const Y=U[T],V=Y.start,J=Y.count;for(let pe=V,fe=V+J;pe<fe;pe+=3)x(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const I=new oe,w=new oe,N=new oe,P=new oe;function H(T){N.fromBufferAttribute(l,T),P.copy(N);const O=p[T];I.copy(O),I.sub(N.multiplyScalar(N.dot(O))).normalize(),w.crossVectors(P,O);const V=w.dot(m[T])<0?-1:1;f.setXYZW(T,I.x,I.y,I.z,V)}for(let T=0,O=U.length;T<O;++T){const Y=U[T],V=Y.start,J=Y.count;for(let pe=V,fe=V+J;pe<fe;pe+=3)H(e.getX(pe+0)),H(e.getX(pe+1)),H(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,v=new oe,_=new oe;if(e)for(let g=0,E=e.count;g<E;g+=3){const b=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(v),m.add(v),h.add(v),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,_=p.normalized,g=new h.constructor(m.length*v);let E=0,b=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*v;for(let x=0;x<v;x++)g[b++]=h[E++]}return new Gi(g,v,_)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ba,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,_=h.length;v<_;v++){const g=h[v],E=e(g,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let _=0,g=h.length;_<g;_++){const E=h[_];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],_=c[h];for(let g=0,E=_.length;g<E;g++)v.push(_[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZE=0;class au extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=ws,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=eh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$d&&(r.blendSrc=this.blendSrc),this.blendDst!==eh&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Tt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ha=new oe,Hd=new oe,Mc=new oe,Ja=new oe,Gd=new oe,Ec=new oe,Vd=new oe;class KE{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Hd.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(Hd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Mc),p=Ja.dot(this.direction),m=-Ja.dot(Mc),h=Ja.lengthSq(),v=Math.abs(1-f*f);let _,g,E,b;if(v>0)if(_=f*m-p,g=f*p-m,b=c*v,_>=0)if(g>=-b)if(g<=b){const C=1/v;_*=C,g*=C,E=_*(_+f*g+2*p)+g*(f*_+g+2*m)+h}else g=c,_=Math.max(0,-(f*g+p)),E=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(f*g+p)),E=-_*_+g*(g+2*m)+h;else g<=-b?(_=Math.max(0,-(-f*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+g*(g+2*m)+h):g<=b?(_=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+h):(_=Math.max(0,-(f*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+g*(g+2*m)+h);else g=f>0?-c:c,_=Math.max(0,-(f*g+p)),E=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Hd).addScaledVector(Mc,g),E}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const r=ha.dot(this.direction),l=ha.dot(ha)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,p,m;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,r,l,c){Gd.subVectors(i,e),Ec.subVectors(r,e),Vd.crossVectors(Gd,Ec);let f=this.direction.dot(Vd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;Ja.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(Ja,Ec));if(m<0)return null;const h=p*this.direction.dot(Gd.cross(Ja));if(h<0||m+h>f)return null;const v=-p*Ja.dot(Vd);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class q_ extends au{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=b_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bv=new hn,Er=new KE,bc=new cp,Tv=new oe,Tc=new oe,Ac=new oe,Rc=new oe,kd=new oe,Cc=new oe,Av=new oe,wc=new oe;class Xi extends ni{constructor(e=new ba,i=new q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Cc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],_=c[m];v!==0&&(kd.fromBufferAttribute(_,e),f?Cc.addScaledVector(kd,v):Cc.addScaledVector(kd.sub(i),v))}i.add(Cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(bc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(bc,Tv)===null||Er.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(bv.copy(c).invert(),Er.copy(e.ray).applyMatrix4(bv),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,C=g.length;b<C;b++){const S=g[b],x=f[S.materialIndex],U=Math.max(S.start,E.start),I=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let w=U,N=I;w<N;w+=3){const P=p.getX(w),H=p.getX(w+1),T=p.getX(w+2);l=Dc(this,x,e,r,h,v,_,P,H,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let S=b,x=C;S<x;S+=3){const U=p.getX(S),I=p.getX(S+1),w=p.getX(S+2);l=Dc(this,f,e,r,h,v,_,U,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,C=g.length;b<C;b++){const S=g[b],x=f[S.materialIndex],U=Math.max(S.start,E.start),I=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let w=U,N=I;w<N;w+=3){const P=w,H=w+1,T=w+2;l=Dc(this,x,e,r,h,v,_,P,H,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let S=b,x=C;S<x;S+=3){const U=S,I=S+1,w=S+2;l=Dc(this,f,e,r,h,v,_,U,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function jE(s,e,i,r,l,c,f,p){let m;if(e.side===Wn?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,e.side===nr,p),m===null)return null;wc.copy(p),wc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(wc);return h<i.near||h>i.far?null:{distance:h,point:wc.clone(),object:s}}function Dc(s,e,i,r,l,c,f,p,m,h){s.getVertexPosition(p,Tc),s.getVertexPosition(m,Ac),s.getVertexPosition(h,Rc);const v=jE(s,e,i,r,Tc,Ac,Rc,Av);if(v){const _=new oe;bi.getBarycoord(Av,Tc,Ac,Rc,_),l&&(v.uv=bi.getInterpolatedAttribute(l,p,m,h,_,new Tt)),c&&(v.uv1=bi.getInterpolatedAttribute(c,p,m,h,_,new Tt)),f&&(v.normal=bi.getInterpolatedAttribute(f,p,m,h,_,new oe),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new oe,materialIndex:0};bi.getNormal(Tc,Ac,Rc,g.normal),v.face=g,v.barycoord=_}return v}class QE extends Bn{constructor(e=null,i=1,r=1,l,c,f,p,m,h=Rn,v=Rn,_,g){super(null,f,p,m,h,v,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xd=new oe,JE=new oe,$E=new st;class Tr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Xd.subVectors(r,i).cross(JE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Xd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$E.getNormalMatrix(e),l=this.coplanarPoint(Xd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new cp,eb=new Tt(.5,.5),Uc=new oe;class Y_{constructor(e=new Tr,i=new Tr,r=new Tr,l=new Tr,c=new Tr,f=new Tr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Bi,r=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],v=c[4],_=c[5],g=c[6],E=c[7],b=c[8],C=c[9],S=c[10],x=c[11],U=c[12],I=c[13],w=c[14],N=c[15];if(l[0].setComponents(h-f,E-v,x-b,N-U).normalize(),l[1].setComponents(h+f,E+v,x+b,N+U).normalize(),l[2].setComponents(h+p,E+_,x+C,N+I).normalize(),l[3].setComponents(h-p,E-_,x-C,N-I).normalize(),r)l[4].setComponents(m,g,S,w).normalize(),l[5].setComponents(h-m,E-g,x-S,N-w).normalize();else if(l[4].setComponents(h-m,E-g,x-S,N-w).normalize(),i===Bi)l[5].setComponents(h+m,E+g,x+S,N+w).normalize();else if(i===Qc)l[5].setComponents(m,g,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const i=eb.distanceTo(e.center);return br.radius=.7071067811865476+i,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends Bn{constructor(e=[],i=Dr,r,l,c,f,p,m,h,v){super(e,i,r,l,c,f,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ps extends Bn{constructor(e,i,r=ki,l,c,f,p=Rn,m=Rn,h,v=ya,_=1){if(v!==ya&&v!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,f,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tb extends Ps{constructor(e,i=ki,r=Dr,l,c,f=Rn,p=Rn,m,h=ya){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class K_ extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tl extends ba{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],v=[],_=[];let g=0,E=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _a(h,3)),this.setAttribute("normal",new _a(v,3)),this.setAttribute("uv",new _a(_,2));function b(C,S,x,U,I,w,N,P,H,T,O){const Y=w/H,V=N/T,J=w/2,pe=N/2,fe=P/2,Z=H+1,F=T+1;let B=0,te=0;const ge=new oe;for(let D=0;D<F;D++){const Q=D*V-pe;for(let de=0;de<Z;de++){const be=de*Y-J;ge[C]=be*U,ge[S]=Q*I,ge[x]=fe,h.push(ge.x,ge.y,ge.z),ge[C]=0,ge[S]=0,ge[x]=P>0?1:-1,v.push(ge.x,ge.y,ge.z),_.push(de/H),_.push(1-D/T),B+=1}}for(let D=0;D<T;D++)for(let Q=0;Q<H;Q++){const de=g+Q+Z*D,be=g+Q+Z*(D+1),Fe=g+(Q+1)+Z*(D+1),Ge=g+(Q+1)+Z*D;m.push(de,be,Ge),m.push(be,Fe,Ge),te+=6}p.addGroup(E,te,O),E+=te,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nl extends ba{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,_=e/p,g=i/m,E=[],b=[],C=[],S=[];for(let x=0;x<v;x++){const U=x*g-f;for(let I=0;I<h;I++){const w=I*_-c;b.push(w,-U,0),C.push(0,0,1),S.push(I/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<p;U++){const I=U+h*x,w=U+h*(x+1),N=U+1+h*(x+1),P=U+1+h*x;E.push(I,w,P),E.push(w,N,P)}this.setIndex(E),this.setAttribute("position",new _a(b,3)),this.setAttribute("normal",new _a(C,3)),this.setAttribute("uv",new _a(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(Rv(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(Rv(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function Rv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function j_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const ib={clone:Os,merge:Fn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends au{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Tt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sb extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ob extends au{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends au{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lc=new oe,Nc=new Bs,Pi=new oe;class Q_ extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Nc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Nc,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Lc,Nc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Nc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new oe,Cv=new Tt,wv=new Tt;class Ei extends Q_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,Cv,wv),i.subVectors(wv,Cv)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class up extends Q_{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const As=-90,Rs=1;class cb extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new Ei(As,Rs,e,i);c.layers=this.layers,this.add(c);const f=new Ei(As,Rs,e,i);f.layers=this.layers,this.add(f);const p=new Ei(As,Rs,e,i);p.layers=this.layers,this.add(p);const m=new Ei(As,Rs,e,i);m.layers=this.layers,this.add(m);const h=new Ei(As,Rs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,g,E),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class ub extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const mp=class mp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};mp.prototype.isMatrix2=!0;let Dv=mp;function Uv(s,e,i,r){const l=db(r);switch(i){case F_:return s*e;case z_:return s*e/l.components*l.byteLength;case ip:return s*e/l.components*l.byteLength;case Ur:return s*e*2/l.components*l.byteLength;case ap:return s*e*2/l.components*l.byteLength;case B_:return s*e*3/l.components*l.byteLength;case Ti:return s*e*4/l.components*l.byteLength;case rp:return s*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:case hh:return Math.max(s,16)*Math.max(e,8)/4;case uh:case dh:return Math.max(s,8)*Math.max(e,8)/2;case ph:case mh:case vh:case _h:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gh:case Yc:case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Oh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zc:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function db(s){switch(s){case pi:case N_:return{byteLength:1,components:1};case Zo:case P_:case Sa:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case ki:case ep:case Fi:return{byteLength:4,components:1};case O_:case I_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function hb(s){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let E;if(h instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=s.SHORT;else if(h instanceof Uint32Array)E=s.UNSIGNED_INT;else if(h instanceof Int32Array)E=s.INT;else if(h instanceof Int8Array)E=s.BYTE;else if(h instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const v=m.array,_=m.updateRanges;if(s.bindBuffer(h,p),_.length===0)s.bufferSubData(h,0,v);else{_.sort((E,b)=>E.start-b.start);let g=0;for(let E=1;E<_.length;E++){const b=_[g],C=_[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,_[g]=C)}_.length=g+1;for(let E=0,b=_.length;E<b;E++){const C=_[E];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var pb=`#ifdef USE_ALPHAHASH
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
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
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
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,d1=`uniform sampler2D dfgLUT;
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
}`,h1=`
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
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
#endif`,B1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$1=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`#include <common>
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
}`,yT=`#if DEPTH_PACKING == 3200
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
}`,MT=`#define DISTANCE
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
}`,ET=`#define DISTANCE
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#define LAMBERT
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
}`,UT=`#define LAMBERT
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
}`,LT=`#define MATCAP
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
}`,NT=`#define MATCAP
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
}`,PT=`#define NORMAL
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
}`,OT=`#define NORMAL
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
}`,IT=`#define PHONG
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
}`,FT=`#define PHONG
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
}`,BT=`#define STANDARD
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
}`,zT=`#define STANDARD
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
}`,HT=`#define TOON
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
}`,GT=`#define TOON
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
}`,VT=`uniform float size;
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
}`,kT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,WT=`uniform vec3 color;
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
}`,qT=`uniform float rotation;
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
}`,YT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:vb,alphatest_fragment:_b,alphatest_pars_fragment:xb,aomap_fragment:Sb,aomap_pars_fragment:yb,batching_pars_vertex:Mb,batching_vertex:Eb,begin_vertex:bb,beginnormal_vertex:Tb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:Lb,color_fragment:Nb,color_pars_fragment:Pb,color_pars_vertex:Ob,color_vertex:Ib,common:Fb,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:zb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Gb,emissivemap_fragment:Vb,emissivemap_pars_fragment:kb,colorspace_fragment:Xb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:Yb,envmap_pars_fragment:Zb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:s1,envmap_vertex:jb,fog_vertex:Qb,fog_pars_vertex:Jb,fog_fragment:$b,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:r1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:f1,lights_physical_pars_fragment:d1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,lightprobes_pars_fragment:g1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:x1,logdepthbuf_vertex:S1,map_fragment:y1,map_pars_fragment:M1,map_particle_fragment:E1,map_particle_pars_fragment:b1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:A1,morphinstance_vertex:R1,morphcolor_vertex:C1,morphnormal_vertex:w1,morphtarget_pars_vertex:D1,morphtarget_vertex:U1,normal_fragment_begin:L1,normal_fragment_maps:N1,normal_pars_fragment:P1,normal_pars_vertex:O1,normal_vertex:I1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:z1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:V1,packing:k1,premultiplied_alpha_fragment:X1,project_vertex:W1,dithering_fragment:q1,dithering_pars_fragment:Y1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:Q1,shadowmap_vertex:J1,shadowmask_pars_fragment:$1,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:aT,specularmap_pars_fragment:rT,tonemapping_fragment:sT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:fT,uv_vertex:dT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:_T,cube_frag:xT,depth_vert:ST,depth_frag:yT,distance_vert:MT,distance_frag:ET,equirect_vert:bT,equirect_frag:TT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:CT,meshbasic_frag:wT,meshlambert_vert:DT,meshlambert_frag:UT,meshmatcap_vert:LT,meshmatcap_frag:NT,meshnormal_vert:PT,meshnormal_frag:OT,meshphong_vert:IT,meshphong_frag:FT,meshphysical_vert:BT,meshphysical_frag:zT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:VT,points_frag:kT,shadow_vert:XT,shadow_frag:WT,sprite_vert:qT,sprite_frag:YT},Ie={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Fn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Fn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Fn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Fn([Ie.lights,Ie.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pc={r:0,b:0,g:0},ZT=new hn,$_=new st;$_.set(-1,0,0,0,1,0,0,0,1);function KT(s,e,i,r,l,c){const f=new Nt(0);let p=l===!0?0:1,m,h,v=null,_=0,g=null;function E(U){let I=U.isScene===!0?U.background:null;if(I&&I.isTexture){const w=U.backgroundBlurriness>0;I=e.get(I,w)}return I}function b(U){let I=!1;const w=E(U);w===null?S(f,p):w&&w.isColor&&(S(w,1),I=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(U,I){const w=E(I);w&&(w.isCubeTexture||w.mapping===iu)?(h===void 0&&(h=new Xi(new tl(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Os(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply($_),h.material.toneMapped=xt.getTransfer(w.colorSpace)!==It,(v!==w||_!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=w,_=w.version,g=s.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Xi(new nl(2,2),new Ri({name:"BackgroundMaterial",uniforms:Os(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=xt.getTransfer(w.colorSpace)!==It,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=w,_=w.version,g=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function S(U,I){U.getRGB(Pc,j_(s)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,I=1){f.set(U),p=I,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,S(f,p)},render:b,addToRenderList:C,dispose:x}}function jT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function p(V,J,pe,fe,Z){let F=!1;const B=_(V,fe,pe,J);c!==B&&(c=B,h(c.object)),F=E(V,fe,pe,Z),F&&b(V,fe,pe,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(F||f)&&(f=!1,w(V,J,pe,fe),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function _(V,J,pe,fe){const Z=fe.wireframe===!0;let F=r[J.id];F===void 0&&(F={},r[J.id]=F);const B=V.isInstancedMesh===!0?V.id:0;let te=F[B];te===void 0&&(te={},F[B]=te);let ge=te[pe.id];ge===void 0&&(ge={},te[pe.id]=ge);let D=ge[Z];return D===void 0&&(D=g(m()),ge[Z]=D),D}function g(V){const J=[],pe=[],fe=[];for(let Z=0;Z<i;Z++)J[Z]=0,pe[Z]=0,fe[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:pe,attributeDivisors:fe,object:V,attributes:{},index:null}}function E(V,J,pe,fe){const Z=c.attributes,F=J.attributes;let B=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){const Q=Z[ge];let de=F[ge];if(de===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;B++}return c.attributesNum!==B||c.index!==fe}function b(V,J,pe,fe){const Z={},F=J.attributes;let B=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){let Q=F[ge];Q===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),Z[ge]=de,B++}c.attributes=Z,c.attributesNum=B,c.index=fe}function C(){const V=c.newAttributes;for(let J=0,pe=V.length;J<pe;J++)V[J]=0}function S(V){x(V,0)}function x(V,J){const pe=c.newAttributes,fe=c.enabledAttributes,Z=c.attributeDivisors;pe[V]=1,fe[V]===0&&(s.enableVertexAttribArray(V),fe[V]=1),Z[V]!==J&&(s.vertexAttribDivisor(V,J),Z[V]=J)}function U(){const V=c.newAttributes,J=c.enabledAttributes;for(let pe=0,fe=J.length;pe<fe;pe++)J[pe]!==V[pe]&&(s.disableVertexAttribArray(pe),J[pe]=0)}function I(V,J,pe,fe,Z,F,B){B===!0?s.vertexAttribIPointer(V,J,pe,Z,F):s.vertexAttribPointer(V,J,pe,fe,Z,F)}function w(V,J,pe,fe){C();const Z=fe.attributes,F=pe.getAttributes(),B=J.defaultAttributeValues;for(const te in F){const ge=F[te];if(ge.location>=0){let D=Z[te];if(D===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(D=V.instanceColor)),D!==void 0){const Q=D.normalized,de=D.itemSize,be=e.get(D);if(be===void 0)continue;const Fe=be.buffer,Ge=be.type,ie=be.bytesPerElement,Te=Ge===s.INT||Ge===s.UNSIGNED_INT||D.gpuType===ep;if(D.isInterleavedBufferAttribute){const ye=D.data,je=ye.stride,it=D.offset;if(ye.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ge.locationSize;Qe++)x(ge.location+Qe,ye.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<ge.locationSize;Qe++)S(ge.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Qe=0;Qe<ge.locationSize;Qe++)I(ge.location+Qe,de/ge.locationSize,Ge,Q,je*ie,(it+de/ge.locationSize*Qe)*ie,Te)}else{if(D.isInstancedBufferAttribute){for(let ye=0;ye<ge.locationSize;ye++)x(ge.location+ye,D.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ye=0;ye<ge.locationSize;ye++)S(ge.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let ye=0;ye<ge.locationSize;ye++)I(ge.location+ye,de/ge.locationSize,Ge,Q,de*ie,de/ge.locationSize*ye*ie,Te)}}else if(B!==void 0){const Q=B[te];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(ge.location,Q);break;case 3:s.vertexAttrib3fv(ge.location,Q);break;case 4:s.vertexAttrib4fv(ge.location,Q);break;default:s.vertexAttrib1fv(ge.location,Q)}}}}U()}function N(){O();for(const V in r){const J=r[V];for(const pe in J){const fe=J[pe];for(const Z in fe){const F=fe[Z];for(const B in F)v(F[B].object),delete F[B];delete fe[Z]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const J=r[V.id];for(const pe in J){const fe=J[pe];for(const Z in fe){const F=fe[Z];for(const B in F)v(F[B].object),delete F[B];delete fe[Z]}}delete r[V.id]}function H(V){for(const J in r){const pe=r[J];for(const fe in pe){const Z=pe[fe];if(Z[V.id]===void 0)continue;const F=Z[V.id];for(const B in F)v(F[B].object),delete F[B];delete Z[V.id]}}}function T(V){for(const J in r){const pe=r[J],fe=V.isInstancedMesh===!0?V.id:0,Z=pe[fe];if(Z!==void 0){for(const F in Z){const B=Z[F];for(const te in B)v(B[te].object),delete B[te];delete Z[F]}delete pe[fe],Object.keys(pe).length===0&&delete r[J]}}}function O(){Y(),f=!0,c!==l&&(c=l,h(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:H,initAttributes:C,enableAttribute:S,disableUnusedAttributes:U}}function QT(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function f(m,h,v){v!==0&&(s.drawArraysInstanced(r,m,h,v),i.update(h,r,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let g=0;for(let E=0;E<v;E++)g+=h[E];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function JT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ti&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const T=H===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==pi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Fi&&!T)}function m(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(nt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:w,maxSamples:N,samples:P}}function $T(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Tr,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const E=_.length!==0||g||r!==0||l;return l=g,r=_.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,E){const b=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!l||b===null||b.length===0||c&&!S)c?v(null):h();else{const U=c?0:r,I=U*4;let w=x.clippingState||null;m.value=w,w=v(b,g,I,E);for(let N=0;N!==I;++N)w[N]=i[N];x.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,E,b){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=m.value,b!==!0||S===null){const x=E+C*4,U=g.matrixWorldInverse;p.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,w=E;I!==C;++I,w+=4)f.copy(_[I]).applyMatrix4(U,p),f.normal.toArray(S,w),S[w+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const tr=4,Lv=[.125,.215,.35,.446,.526,.582],Rr=20,eA=256,ko=new up,Nv=new Nt;let Wd=null,qd=0,Yd=0,Zd=!1;const tA=new oe;class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=tA}=c;Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,qd,Yd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Sa,format:Ti,colorSpace:Kc,depthBuffer:!1},l=Ov(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ov(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nA(c)),this._blurMaterial=aA(c,e,i),this._ggxMaterial=iA(c,e,i)}return l}_compileMaterial(e){const i=new Xi(new ba,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,r,l,c){const m=new Ei(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,E=_.toneMapping;_.getClearColor(Nv),_.toneMapping=zi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new tl,new q_({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,x=!0):(S.color.copy(Nv),x=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[I],c.y,c.z)):w===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[I]));const N=this._cubeSize;Cs(l,w*N,I>2?N:0,N,N),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=E,_.autoClear=g,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Dr||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,ko)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,E=_*g,{_lodMax:b}=this,C=this._sizeLods[r],S=3*C*(r>b-tr?r-b+tr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=b-i,Cs(c,S,x,3*C,2*C),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Cs(e,S,x,3*C,2*C),l.setRenderTarget(e),l.render(p,ko)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,E=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Rr-1),C=c/b,S=isFinite(c)?1+Math.floor(v*C):Rr;S>Rr&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Rr}`);const x=[];let U=0;for(let H=0;H<Rr;++H){const T=H/C,O=Math.exp(-T*T/2);x.push(O),H===0?U+=O:H<S&&(U+=2*O)}for(let H=0;H<x.length;H++)x[H]=x[H]/U;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=b,g.mipInt.value=I-r;const w=this._sizeLods[l],N=3*w*(l>I-tr?l-I+tr:0),P=4*(this._cubeSize-w);Cs(i,N,P,3*w,2*w),m.setRenderTarget(i),m.render(_,ko)}}function nA(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+Lv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>s-tr?m=Lv[f-s+tr-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,b=6,C=3,S=2,x=1,U=new Float32Array(C*b*E),I=new Float32Array(S*b*E),w=new Float32Array(x*b*E);for(let P=0;P<E;P++){const H=P%3*2/3-1,T=P>2?0:-1,O=[H,T,0,H+2/3,T,0,H+2/3,T+1,0,H,T,0,H+2/3,T+1,0,H,T+1,0];U.set(O,C*b*P),I.set(g,S*b*P);const Y=[P,P,P,P,P,P];w.set(Y,x*b*P)}const N=new ba;N.setAttribute("position",new Gi(U,C)),N.setAttribute("uv",new Gi(I,S)),N.setAttribute("faceIndex",new Gi(w,x)),r.push(new Xi(N,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Ov(s,e,i){const r=new Hi(s,e,i);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function iA(s,e,i){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function aA(s,e,i){const r=new Float32Array(Rr),l=new oe(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ru(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Iv(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Fv(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}class ex extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Z_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),c=new Ri({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ga});c.uniforms.tEquirect.value=i;const f=new Xi(l,c),p=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Nn),new cb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function rA(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,E=!1){return g==null?null:E?f(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===_d||E===xd)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new ex(b.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const E=g.mapping,b=E===_d||E===xd,C=E===Dr||E===Ns;if(b||C){let S=i.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Pv(s)),S=b?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const U=g.image;return b&&U&&U.height>0||C&&U&&m(U)?(r===null&&(r=new Pv(s)),S=b?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,E){return E===_d?g.mapping=Dr:E===xd&&(g.mapping=Ns),g}function m(g){let E=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&E++;return E===b}function h(g){const E=g.target;E.removeEventListener("dispose",h);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function sA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ds("WebGLRenderer: "+r+" extension not supported."),l}}}function oA(s,e,i,r){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const E in g)e.update(g[E],s.ARRAY_BUFFER)}function h(_){const g=[],E=_.index,b=_.attributes.position;let C=0;if(b===void 0)return;if(E!==null){const U=E.array;C=E.version;for(let I=0,w=U.length;I<w;I+=3){const N=U[I+0],P=U[I+1],H=U[I+2];g.push(N,P,P,H,H,N)}}else{const U=b.array;C=b.version;for(let I=0,w=U.length/3-1;I<w;I+=3){const N=I+0,P=I+1,H=I+2;g.push(N,P,P,H,H,N)}}const S=new(b.count>=65535?W_:X_)(g,1);S.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function v(_){const g=c.get(_);if(g){const E=_.index;E!==null&&g.version<E.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:v}}function lA(s,e,i){let r;function l(_){r=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,g){s.drawElements(r,g,c,_*f),i.update(g,r,1)}function h(_,g,E){E!==0&&(s.drawElementsInstanced(r,g,c,_*f,E),i.update(g,r,E))}function v(_,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,_,0,E);let C=0;for(let S=0;S<E;S++)C+=g[S];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function cA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Et("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function uA(s,e,i){const r=new WeakMap,l=new tn;function c(f,p,m){const h=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let Y=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",Y)};var E=Y;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let N=p.attributes.position.count*w,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const H=new Float32Array(N*P*4*_),T=new G_(H,N,P,_);T.type=Fi,T.needsUpdate=!0;const O=w*4;for(let V=0;V<_;V++){const J=x[V],pe=U[V],fe=I[V],Z=N*P*4*V;for(let F=0;F<J.count;F++){const B=F*O;b===!0&&(l.fromBufferAttribute(J,F),H[Z+B+0]=l.x,H[Z+B+1]=l.y,H[Z+B+2]=l.z,H[Z+B+3]=0),C===!0&&(l.fromBufferAttribute(pe,F),H[Z+B+4]=l.x,H[Z+B+5]=l.y,H[Z+B+6]=l.z,H[Z+B+7]=0),S===!0&&(l.fromBufferAttribute(fe,F),H[Z+B+8]=l.x,H[Z+B+9]=l.y,H[Z+B+10]=l.z,H[Z+B+11]=fe.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Tt(N,P)},r.set(p,g),p.addEventListener("dispose",Y)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function fA(s,e,i,r,l){let c=new WeakMap;function f(h){const v=l.render.frame,_=h.geometry,g=e.get(h,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const dA={[T_]:"LINEAR_TONE_MAPPING",[A_]:"REINHARD_TONE_MAPPING",[R_]:"CINEON_TONE_MAPPING",[C_]:"ACES_FILMIC_TONE_MAPPING",[D_]:"AGX_TONE_MAPPING",[U_]:"NEUTRAL_TONE_MAPPING",[w_]:"CUSTOM_TONE_MAPPING"};function hA(s,e,i,r,l,c){const f=new Hi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Ps(e,i):void 0}),p=new Hi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),m=new ba;m.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new _a([0,2,0,0,2,0],2));const h=new sb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Xi(m,h),_=new up(-1,1,1,-1,0,1);let g=null,E=null,b=!1,C,S=null,x=[],U=!1;this.setSize=function(I,w){f.setSize(I,w),p.setSize(I,w);for(let N=0;N<x.length;N++){const P=x[N];P.setSize&&P.setSize(I,w)}},this.setEffects=function(I){x=I,U=x.length>0&&x[0].isRenderPass===!0;const w=f.width,N=f.height;for(let P=0;P<x.length;P++){const H=x[P];H.setSize&&H.setSize(w,N)}},this.begin=function(I,w){if(b||I.toneMapping===zi&&x.length===0)return!1;if(S=w,w!==null){const N=w.width,P=w.height;(f.width!==N||f.height!==P)&&this.setSize(N,P)}return U===!1&&I.setRenderTarget(f),C=I.toneMapping,I.toneMapping=zi,!0},this.hasRenderPass=function(){return U},this.end=function(I,w){I.toneMapping=C,b=!0;let N=f,P=p;for(let H=0;H<x.length;H++){const T=x[H];if(T.enabled!==!1&&(T.render(I,P,N,w),T.needsSwap!==!1)){const O=N;N=P,P=O}}if(g!==I.outputColorSpace||E!==I.toneMapping){g=I.outputColorSpace,E=I.toneMapping,h.defines={},xt.getTransfer(g)===It&&(h.defines.SRGB_TRANSFER="");const H=dA[E];H&&(h.defines[H]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,I.setRenderTarget(S),I.render(v,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const tx=new Bn,Gh=new Ps(1,1),nx=new G_,ix=new IE,ax=new Z_,Bv=[],zv=[],Hv=new Float32Array(16),Gv=new Float32Array(9),Vv=new Float32Array(4);function zs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Bv[l];if(c===void 0&&(c=new Float32Array(l),Bv[l]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,s[f].toArray(c,p)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function su(s,e){let i=zv[e];i===void 0&&(i=new Int32Array(e),zv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function pA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function mA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function gA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function vA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function _A(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Vv.set(r),s.uniformMatrix2fv(this.addr,!1,Vv),vn(i,r)}}function xA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Gv.set(r),s.uniformMatrix3fv(this.addr,!1,Gv),vn(i,r)}}function SA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Hv.set(r),s.uniformMatrix4fv(this.addr,!1,Hv),vn(i,r)}}function yA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function MA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function EA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function bA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function TA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function wA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Gh.compareFunction=i.isReversedDepthBuffer()?op:sp,c=Gh):c=tx,i.setTexture2D(e||c,l)}function DA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ix,l)}function UA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ax,l)}function LA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nx,l)}function NA(s){switch(s){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return _A;case 35675:return xA;case 35676:return SA;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return LA}}function PA(s,e){s.uniform1fv(this.addr,e)}function OA(s,e){const i=zs(e,this.size,2);s.uniform2fv(this.addr,i)}function IA(s,e){const i=zs(e,this.size,3);s.uniform3fv(this.addr,i)}function FA(s,e){const i=zs(e,this.size,4);s.uniform4fv(this.addr,i)}function BA(s,e){const i=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function zA(s,e){const i=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function HA(s,e){const i=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function GA(s,e){s.uniform1iv(this.addr,e)}function VA(s,e){s.uniform2iv(this.addr,e)}function kA(s,e){s.uniform3iv(this.addr,e)}function XA(s,e){s.uniform4iv(this.addr,e)}function WA(s,e){s.uniform1uiv(this.addr,e)}function qA(s,e){s.uniform2uiv(this.addr,e)}function YA(s,e){s.uniform3uiv(this.addr,e)}function ZA(s,e){s.uniform4uiv(this.addr,e)}function KA(s,e,i){const r=this.cache,l=e.length,c=su(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Gh:f=tx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function jA(s,e,i){const r=this.cache,l=e.length,c=su(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ix,c[f])}function QA(s,e,i){const r=this.cache,l=e.length,c=su(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||ax,c[f])}function JA(s,e,i){const r=this.cache,l=e.length,c=su(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||nx,c[f])}function $A(s){switch(s){case 5126:return PA;case 35664:return OA;case 35665:return IA;case 35666:return FA;case 35674:return BA;case 35675:return zA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return kA;case 35669:case 35673:return XA;case 5125:return WA;case 36294:return qA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}class eR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=NA(i.type)}}class tR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$A(i.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function kv(s,e){s.seq.push(e),s.map[e.id]=e}function iR(s,e,i){const r=s.name,l=r.length;for(Kd.lastIndex=0;;){const c=Kd.exec(r),f=Kd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){kv(i,h===void 0?new eR(p,s,e):new tR(p,s,e));break}else{let _=i.map[p];_===void 0&&(_=new nR(p),kv(i,_)),i=_}}}class Xc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);iR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Xv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const aR=37297;let rR=0;function sR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Wv=new st;function oR(s){xt._getMatrix(Wv,xt.workingColorSpace,s);const e=`mat3( ${Wv.elements.map(i=>i.toFixed(4))} )`;switch(xt.getTransfer(s)){case jc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+sR(s.getShaderSource(e),p)}else return c}function lR(s,e){const i=oR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const cR={[T_]:"Linear",[A_]:"Reinhard",[R_]:"Cineon",[C_]:"ACESFilmic",[D_]:"AgX",[U_]:"Neutral",[w_]:"Custom"};function uR(s,e){const i=cR[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new oe;function fR(){xt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function hR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function pR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:p}}return i}function qo(s){return s!==""}function Yv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(s){return s.replace(mR,vR)}const gR=new Map;function vR(s,e){let i=ht[e];if(i===void 0){const r=gR.get(e);if(r!==void 0)i=ht[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vh(i)}const _R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(s){return s.replace(_R,xR)}function xR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function jv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const SR={[zc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function yR(s){return SR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MR={[Dr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function ER(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":MR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const bR={[Ns]:"ENVMAP_MODE_REFRACTION"};function TR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AR={[b_]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function RR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":AR[s.combine]||"ENVMAP_BLENDING_NONE"}function CR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function wR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=yR(i),h=ER(i),v=TR(i),_=RR(i),g=CR(i),E=dR(i),b=hR(c),C=l.createProgram();let S,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),x.length>0&&(x+=`
`)):(S=[jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),x=[jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zi?"#define TONE_MAPPING":"",i.toneMapping!==zi?ht.tonemapping_pars_fragment:"",i.toneMapping!==zi?uR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,lR("linearToOutputTexel",i.outputColorSpace),fR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=Vh(f),f=Yv(f,i),f=Zv(f,i),p=Vh(p),p=Yv(p,i),p=Zv(p,i),f=Kv(f),p=Kv(p),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=U+S+f,w=U+x+p,N=Xv(l,l.VERTEX_SHADER,I),P=Xv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,N),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function H(V){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",pe=l.getShaderInfoLog(N)||"",fe=l.getShaderInfoLog(P)||"",Z=J.trim(),F=pe.trim(),B=fe.trim();let te=!0,ge=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,N,P);else{const D=qv(l,N,"vertex"),Q=qv(l,P,"fragment");Et("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+D+`
`+Q)}else Z!==""?nt("WebGLProgram: Program Info Log:",Z):(F===""||B==="")&&(ge=!1);ge&&(V.diagnostics={runnable:te,programLog:Z,vertexShader:{log:F,prefix:S},fragmentShader:{log:B,prefix:x}})}l.deleteShader(N),l.deleteShader(P),T=new Xc(l,C),O=pR(l,C)}let T;this.getUniforms=function(){return T===void 0&&H(this),T};let O;this.getAttributes=function(){return O===void 0&&H(this),O};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,aR)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=P,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new LR(e),i.set(e,r)),r}}class LR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function NR(s){return s===Ur||s===Yc||s===Zc}function PR(s,e,i,r,l,c){const f=new V_,p=new UR,m=new Set,h=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,O,Y,V,J,pe){const fe=V.fog,Z=J.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||F,B),ge=te&&te.mapping===iu?te.image.height:null,D=E[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,de=Q!==void 0?Q.length:0;let be=0;Z.morphAttributes.position!==void 0&&(be=1),Z.morphAttributes.normal!==void 0&&(be=2),Z.morphAttributes.color!==void 0&&(be=3);let Fe,Ge,ie,Te;if(D){const ke=Ii[D];Fe=ke.vertexShader,Ge=ke.fragmentShader}else{Fe=T.vertexShader,Ge=T.fragmentShader;const ke=p.getVertexShaderStage(T),wt=p.getFragmentShaderStage(T);p.update(T,ke,wt),ie=ke.id,Te=wt.id}const ye=s.getRenderTarget(),je=s.state.buffers.depth.getReversed(),it=J.isInstancedMesh===!0,Qe=J.isBatchedMesh===!0,Wt=!!T.map,ut=!!T.matcap,At=!!te,Mt=!!T.aoMap,_t=!!T.lightMap,Rt=!!T.bumpMap&&T.wireframe===!1,nn=!!T.normalMap,an=!!T.displacementMap,ln=!!T.emissiveMap,Gt=!!T.metalnessMap,Jt=!!T.roughnessMap,q=T.anisotropy>0,Cn=T.clearcoat>0,Ct=T.dispersion>0,L=T.iridescence>0,M=T.sheen>0,K=T.transmission>0,$=q&&!!T.anisotropyMap,he=Cn&&!!T.clearcoatMap,Ae=Cn&&!!T.clearcoatNormalMap,De=Cn&&!!T.clearcoatRoughnessMap,ue=L&&!!T.iridescenceMap,ve=L&&!!T.iridescenceThicknessMap,Re=M&&!!T.sheenColorMap,We=M&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,Le=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Je=K&&!!T.transmissionMap,at=K&&!!T.thicknessMap,X=!!T.gradientMap,we=!!T.alphaMap,xe=T.alphaTest>0,Ue=!!T.alphaHash,Pe=!!T.extensions;let Ee=zi;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const qe={shaderID:D,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:Ge,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&J._colorsTexture!==null,instancing:it,instancingColor:it&&J.instanceColor!==null,instancingMorph:it&&J.morphTexture!==null,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:ut,envMap:At,envMapMode:At&&te.mapping,envMapCubeUVHeight:ge,aoMap:Mt,lightMap:_t,bumpMap:Rt,normalMap:nn,displacementMap:an,emissiveMap:ln,normalMapObjectSpace:nn&&T.normalMapType===xE,normalMapTangentSpace:nn&&T.normalMapType===ov,packedNormalMap:nn&&T.normalMapType===ov&&NR(T.normalMap.format),metalnessMap:Gt,roughnessMap:Jt,anisotropy:q,anisotropyMap:$,clearcoat:Cn,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,dispersion:Ct,iridescence:L,iridescenceMap:ue,iridescenceThicknessMap:ve,sheen:M,sheenColorMap:Re,sheenRoughnessMap:We,specularMap:Ce,specularColorMap:Le,specularIntensityMap:Ze,transmission:K,transmissionMap:Je,thicknessMap:at,gradientMap:X,opaque:T.transparent===!1&&T.blending===ws&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:xe,alphaHash:Ue,combine:T.combine,mapUv:Wt&&b(T.map.channel),aoMapUv:Mt&&b(T.aoMap.channel),lightMapUv:_t&&b(T.lightMap.channel),bumpMapUv:Rt&&b(T.bumpMap.channel),normalMapUv:nn&&b(T.normalMap.channel),displacementMapUv:an&&b(T.displacementMap.channel),emissiveMapUv:ln&&b(T.emissiveMap.channel),metalnessMapUv:Gt&&b(T.metalnessMap.channel),roughnessMapUv:Jt&&b(T.roughnessMap.channel),anisotropyMapUv:$&&b(T.anisotropyMap.channel),clearcoatMapUv:he&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&b(T.sheenRoughnessMap.channel),specularMapUv:Ce&&b(T.specularMap.channel),specularColorMapUv:Le&&b(T.specularColorMap.channel),specularIntensityMapUv:Ze&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:at&&b(T.thicknessMap.channel),alphaMapUv:we&&b(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(nn||q),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(Wt||we),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&nn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:je,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:be,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&xt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&xt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pa,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)O.push(Y),O.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(x(O,T),U(O,T),O.push(s.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function U(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function I(T){const O=E[T.type];let Y;if(O){const V=Ii[O];Y=ib.clone(V.uniforms)}else Y=T.uniforms;return Y}function w(T,O){let Y=v.get(O);return Y!==void 0?++Y.usedTimes:(Y=new wR(s,O,T,l),h.push(Y),v.set(O,Y)),Y}function N(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){p.remove(T)}function H(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:w,releaseProgram:N,releaseShaderCache:P,programs:h,dispose:H}}function OR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function IR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Qv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,b,C,S,x){let U=s[e];return U===void 0?(U={id:g.id,object:g,geometry:E,material:b,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:x},s[e]=U):(U.id=g.id,U.object=g,U.geometry=E,U.material=b,U.materialVariant=f(g),U.groupOrder=C,U.renderOrder=g.renderOrder,U.z=S,U.group=x),e++,U}function m(g,E,b,C,S,x){const U=p(g,E,b,C,S,x);b.transmission>0?r.push(U):b.transparent===!0?l.push(U):i.push(U)}function h(g,E,b,C,S,x){const U=p(g,E,b,C,S,x);b.transmission>0?r.unshift(U):b.transparent===!0?l.unshift(U):i.unshift(U)}function v(g,E,b){i.length>1&&i.sort(g||IR),r.length>1&&r.sort(E||Qv),l.length>1&&l.sort(E||Qv),b&&(i.reverse(),r.reverse(),l.reverse())}function _(){for(let g=e,E=s.length;g<E;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:v}}function FR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Jv,s.set(r,[f])):l>=c.length?(f=new Jv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function BR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Nt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function zR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let HR=0;function GR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VR(s){const e=new BR,i=zR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const l=new oe,c=new hn,f=new hn;function p(h){let v=0,_=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let E=0,b=0,C=0,S=0,x=0,U=0,I=0,w=0,N=0,P=0,H=0;h.sort(GR);for(let O=0,Y=h.length;O<Y;O++){const V=h[O],J=V.color,pe=V.intensity,fe=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ur?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=J.r*pe,_+=J.g*pe,g+=J.b*pe;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],pe);H++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,te=i.get(V);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,r.directionalShadow[E]=te,r.directionalShadowMap[E]=Z,r.directionalShadowMatrix[E]=V.shadow.matrix,U++}r.directional[E]=F,E++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(J).multiplyScalar(pe),F.distance=fe,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[C]=F;const B=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,B.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[C]=B.matrix,V.castShadow){const te=i.get(V);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,r.spotShadow[C]=te,r.spotShadowMap[C]=Z,w++}C++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(J).multiplyScalar(pe),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=F,S++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const B=V.shadow,te=i.get(V);te.shadowIntensity=B.intensity,te.shadowBias=B.bias,te.shadowNormalBias=B.normalBias,te.shadowRadius=B.radius,te.shadowMapSize=B.mapSize,te.shadowCameraNear=B.camera.near,te.shadowCameraFar=B.camera.far,r.pointShadow[b]=te,r.pointShadowMap[b]=Z,r.pointShadowMatrix[b]=V.shadow.matrix,I++}r.point[b]=F,b++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(pe),F.groundColor.copy(V.groundColor).multiplyScalar(pe),r.hemi[x]=F,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==U||T.numPointShadows!==I||T.numSpotShadows!==w||T.numSpotMaps!==N||T.numLightProbes!==H)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=S,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+N-P,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=H,T.directionalLength=E,T.pointLength=b,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=U,T.numPointShadows=I,T.numSpotShadows=w,T.numSpotMaps=N,T.numLightProbes=H,r.version=HR++)}function m(h,v){let _=0,g=0,E=0,b=0,C=0;const S=v.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const I=h[x];if(I.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),_++}else if(I.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),E++}else if(I.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),f.identity(),c.copy(I.matrixWorld),c.premultiply(S),f.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),b++}else if(I.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function $v(s){const e=new VR(s),i=[],r=[],l=[];function c(g){_.camera=g,i.length=0,r.length=0,l.length=0}function f(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function kR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new $v(s),e.set(l,[p])):c>=f.length?(p=new $v(s),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const XR=`void main() {
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
}`,qR=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],YR=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],e_=new hn,Xo=new oe,jd=new oe;function ZR(s,e,i){let r=new Y_;const l=new Tt,c=new Tt,f=new tn,p=new ob,m=new lb,h={},v=i.maxTextureSize,_={[nr]:Wn,[Wn]:nr,[pa]:pa},g=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:XR,fragmentShader:WR}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const b=new ba;b.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Xi(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let x=this.type;this.render=function(P,H,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===jM&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const O=s.getRenderTarget(),Y=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ga),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const pe=x!==this.type;pe&&H.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(Z=>Z.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,Z=P.length;fe<Z;fe++){const F=P[fe],B=F.shadow;if(B===void 0){nt("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const te=B.getFrameExtents();l.multiply(te),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/te.x),l.x=c.x*te.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/te.y),l.y=c.y*te.y,B.mapSize.y=c.y));const ge=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ge,B.map===null||pe===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wo){if(F.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Hi(l.x,l.y,{format:Ur,type:Sa,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Ps(l.x,l.y,Fi),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=ya,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}else F.isPointLight?(B.map=new ex(l.x),B.map.depthTexture=new tb(l.x,ki)):(B.map=new Hi(l.x,l.y),B.map.depthTexture=new Ps(l.x,l.y,ki)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=ya,this.type===zc?(B.map.depthTexture.compareFunction=ge?op:sp,B.map.depthTexture.minFilter=Nn,B.map.depthTexture.magFilter=Nn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn);B.camera.updateProjectionMatrix()}const D=B.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<D;Q++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(B.map),s.clear());const de=B.getViewport(Q);f.set(c.x*de.x,c.y*de.y,c.x*de.z,c.y*de.w),J.viewport(f)}if(F.isPointLight){const de=B.camera,be=B.matrix,Fe=F.distance||de.far;Fe!==de.far&&(de.far=Fe,de.updateProjectionMatrix()),Xo.setFromMatrixPosition(F.matrixWorld),de.position.copy(Xo),jd.copy(de.position),jd.add(qR[Q]),de.up.copy(YR[Q]),de.lookAt(jd),de.updateMatrixWorld(),be.makeTranslation(-Xo.x,-Xo.y,-Xo.z),e_.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix(e_,de.coordinateSystem,de.reversedDepth)}else B.updateMatrices(F);r=B.getFrustum(),w(H,T,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===Wo&&U(B,T),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(O,Y,V)};function U(P,H){const T=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hi(l.x,l.y,{format:Ur,type:Sa})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(H,null,T,g,C,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(H,null,T,E,C,null)}function I(P,H,T,O){let Y=null;const V=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=T.isPointLight===!0?m:p,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const J=Y.uuid,pe=H.uuid;let fe=h[J];fe===void 0&&(fe={},h[J]=fe);let Z=fe[pe];Z===void 0&&(Z=Y.clone(),fe[pe]=Z,H.addEventListener("dispose",N)),Y=Z}if(Y.visible=H.visible,Y.wireframe=H.wireframe,O===Wo?Y.side=H.shadowSide!==null?H.shadowSide:H.side:Y.side=H.shadowSide!==null?H.shadowSide:_[H.side],Y.alphaMap=H.alphaMap,Y.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,Y.map=H.map,Y.clipShadows=H.clipShadows,Y.clippingPlanes=H.clippingPlanes,Y.clipIntersection=H.clipIntersection,Y.displacementMap=H.displacementMap,Y.displacementScale=H.displacementScale,Y.displacementBias=H.displacementBias,Y.wireframeLinewidth=H.wireframeLinewidth,Y.linewidth=H.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const J=s.properties.get(Y);J.light=T}return Y}function w(P,H,T,O,Y){if(P.visible===!1)return;if(P.layers.test(H.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===Wo)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const pe=e.update(P),fe=P.material;if(Array.isArray(fe)){const Z=pe.groups;for(let F=0,B=Z.length;F<B;F++){const te=Z[F],ge=fe[te.materialIndex];if(ge&&ge.visible){const D=I(P,ge,O,Y);P.onBeforeShadow(s,P,H,T,pe,D,te),s.renderBufferDirect(T,null,pe,D,P,te),P.onAfterShadow(s,P,H,T,pe,D,te)}}}else if(fe.visible){const Z=I(P,fe,O,Y);P.onBeforeShadow(s,P,H,T,pe,Z,null),s.renderBufferDirect(T,null,pe,Z,P,null),P.onAfterShadow(s,P,H,T,pe,Z,null)}}const J=P.children;for(let pe=0,fe=J.length;pe<fe;pe++)w(J[pe],H,T,O,Y)}function N(P){P.target.removeEventListener("dispose",N);for(const T in h){const O=h[T],Y=P.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function KR(s,e){function i(){let X=!1;const we=new tn;let xe=null;const Ue=new tn(0,0,0,0);return{setMask:function(Pe){xe!==Pe&&!X&&(s.colorMask(Pe,Pe,Pe,Pe),xe=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,Ee,qe,ke,wt){wt===!0&&(Pe*=ke,Ee*=ke,qe*=ke),we.set(Pe,Ee,qe,ke),Ue.equals(we)===!1&&(s.clearColor(Pe,Ee,qe,ke),Ue.copy(we))},reset:function(){X=!1,xe=null,Ue.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,xe=null,Ue=null,Pe=null;return{setReversed:function(Ee){if(we!==Ee){const qe=e.get("EXT_clip_control");Ee?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=Ee;const ke=Pe;Pe=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Ee){Ee?ye(s.DEPTH_TEST):je(s.DEPTH_TEST)},setMask:function(Ee){xe!==Ee&&!X&&(s.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if(we&&(Ee=wE[Ee]),Ue!==Ee){switch(Ee){case th:s.depthFunc(s.NEVER);break;case nh:s.depthFunc(s.ALWAYS);break;case ih:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ah:s.depthFunc(s.EQUAL);break;case rh:s.depthFunc(s.GEQUAL);break;case sh:s.depthFunc(s.GREATER);break;case oh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Pe!==Ee&&(Pe=Ee,we&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){X=!1,xe=null,Ue=null,Pe=null,we=!1}}}function l(){let X=!1,we=null,xe=null,Ue=null,Pe=null,Ee=null,qe=null,ke=null,wt=null;return{setTest:function(ot){X||(ot?ye(s.STENCIL_TEST):je(s.STENCIL_TEST))},setMask:function(ot){we!==ot&&!X&&(s.stencilMask(ot),we=ot)},setFunc:function(ot,qt,Mn){(xe!==ot||Ue!==qt||Pe!==Mn)&&(s.stencilFunc(ot,qt,Mn),xe=ot,Ue=qt,Pe=Mn)},setOp:function(ot,qt,Mn){(Ee!==ot||qe!==qt||ke!==Mn)&&(s.stencilOp(ot,qt,Mn),Ee=ot,qe=qt,ke=Mn)},setLocked:function(ot){X=ot},setClear:function(ot){wt!==ot&&(s.clearStencil(ot),wt=ot)},reset:function(){X=!1,we=null,xe=null,Ue=null,Pe=null,Ee=null,qe=null,ke=null,wt=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},_={},g={},E=new WeakMap,b=[],C=null,S=!1,x=null,U=null,I=null,w=null,N=null,P=null,H=null,T=new Nt(0,0,0),O=0,Y=!1,V=null,J=null,pe=null,fe=null,Z=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,te=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ge)[1]),B=te>=1):ge.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),B=te>=2);let D=null,Q={};const de=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Fe=new tn().fromArray(de),Ge=new tn().fromArray(be);function ie(X,we,xe,Ue){const Pe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(X,Ee),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<xe;qe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(we+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ee}const Te={};Te[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ye(s.DEPTH_TEST),f.setFunc(Ls),Rt(!1),nn(iv),ye(s.CULL_FACE),Mt(ga);function ye(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function je(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function it(X,we){return g[X]!==we?(s.bindFramebuffer(X,we),g[X]=we,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=we),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(X,we){let xe=b,Ue=!1;if(X){xe=E.get(we),xe===void 0&&(xe=[],E.set(we,xe));const Pe=X.textures;if(xe.length!==Pe.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,qe=Pe.length;Ee<qe;Ee++)xe[Ee]=s.COLOR_ATTACHMENT0+Ee;xe.length=Pe.length,Ue=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(xe)}function Wt(X){return C!==X?(s.useProgram(X),C=X,!0):!1}const ut={[Ar]:s.FUNC_ADD,[JM]:s.FUNC_SUBTRACT,[$M]:s.FUNC_REVERSE_SUBTRACT};ut[eE]=s.MIN,ut[tE]=s.MAX;const At={[nE]:s.ZERO,[iE]:s.ONE,[aE]:s.SRC_COLOR,[$d]:s.SRC_ALPHA,[uE]:s.SRC_ALPHA_SATURATE,[lE]:s.DST_COLOR,[sE]:s.DST_ALPHA,[rE]:s.ONE_MINUS_SRC_COLOR,[eh]:s.ONE_MINUS_SRC_ALPHA,[cE]:s.ONE_MINUS_DST_COLOR,[oE]:s.ONE_MINUS_DST_ALPHA,[fE]:s.CONSTANT_COLOR,[dE]:s.ONE_MINUS_CONSTANT_COLOR,[hE]:s.CONSTANT_ALPHA,[pE]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(X,we,xe,Ue,Pe,Ee,qe,ke,wt,ot){if(X===ga){S===!0&&(je(s.BLEND),S=!1);return}if(S===!1&&(ye(s.BLEND),S=!0),X!==QM){if(X!==x||ot!==Y){if((U!==Ar||N!==Ar)&&(s.blendEquation(s.FUNC_ADD),U=Ar,N=Ar),ot)switch(X){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case av:s.blendFunc(s.ONE,s.ONE);break;case rv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case av:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rv:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}I=null,w=null,P=null,H=null,T.set(0,0,0),O=0,x=X,Y=ot}return}Pe=Pe||we,Ee=Ee||xe,qe=qe||Ue,(we!==U||Pe!==N)&&(s.blendEquationSeparate(ut[we],ut[Pe]),U=we,N=Pe),(xe!==I||Ue!==w||Ee!==P||qe!==H)&&(s.blendFuncSeparate(At[xe],At[Ue],At[Ee],At[qe]),I=xe,w=Ue,P=Ee,H=qe),(ke.equals(T)===!1||wt!==O)&&(s.blendColor(ke.r,ke.g,ke.b,wt),T.copy(ke),O=wt),x=X,Y=!1}function _t(X,we){X.side===pa?je(s.CULL_FACE):ye(s.CULL_FACE);let xe=X.side===Wn;we&&(xe=!xe),Rt(xe),X.blending===ws&&X.transparent===!1?Mt(ga):Mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ue=X.stencilWrite;p.setTest(Ue),Ue&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ln(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):je(s.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(X){V!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),V=X)}function nn(X){X!==ZM?(ye(s.CULL_FACE),X!==J&&(X===iv?s.cullFace(s.BACK):X===KM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):je(s.CULL_FACE),J=X}function an(X){X!==pe&&(B&&s.lineWidth(X),pe=X)}function ln(X,we,xe){X?(ye(s.POLYGON_OFFSET_FILL),(fe!==we||Z!==xe)&&(fe=we,Z=xe,f.getReversed()&&(we=-we),s.polygonOffset(we,xe))):je(s.POLYGON_OFFSET_FILL)}function Gt(X){X?ye(s.SCISSOR_TEST):je(s.SCISSOR_TEST)}function Jt(X){X===void 0&&(X=s.TEXTURE0+F-1),D!==X&&(s.activeTexture(X),D=X)}function q(X,we,xe){xe===void 0&&(D===null?xe=s.TEXTURE0+F-1:xe=D);let Ue=Q[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},Q[xe]=Ue),(Ue.type!==X||Ue.texture!==we)&&(D!==xe&&(s.activeTexture(xe),D=xe),s.bindTexture(X,we||Te[X]),Ue.type=X,Ue.texture=we)}function Cn(){const X=Q[D];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function M(){try{s.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function K(){try{s.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ae(){try{s.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function De(){try{s.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function ue(){try{s.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function ve(){try{s.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Re(X){return _[X]!==void 0?_[X]:s.getParameter(X)}function We(X,we){_[X]!==we&&(s.pixelStorei(X,we),_[X]=we)}function Ce(X){Fe.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Fe.copy(X))}function Le(X){Ge.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ge.copy(X))}function Ze(X,we){let xe=h.get(we);xe===void 0&&(xe=new WeakMap,h.set(we,xe));let Ue=xe.get(X);Ue===void 0&&(Ue=s.getUniformBlockIndex(we,X.name),xe.set(X,Ue))}function Je(X,we){const Ue=h.get(we).get(X);m.get(we)!==Ue&&(s.uniformBlockBinding(we,Ue,X.__bindingPointIndex),m.set(we,Ue))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},D=null,Q={},g={},E=new WeakMap,b=[],C=null,S=!1,x=null,U=null,I=null,w=null,N=null,P=null,H=null,T=new Nt(0,0,0),O=0,Y=!1,V=null,J=null,pe=null,fe=null,Z=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ye,disable:je,bindFramebuffer:it,drawBuffers:Qe,useProgram:Wt,setBlending:Mt,setMaterial:_t,setFlipSided:Rt,setCullFace:nn,setLineWidth:an,setPolygonOffset:ln,setScissorTest:Gt,activeTexture:Jt,bindTexture:q,unbindTexture:Cn,compressedTexImage2D:Ct,compressedTexImage3D:L,texImage2D:ue,texImage3D:ve,pixelStorei:We,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:De,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:$,compressedTexSubImage3D:he,scissor:Ce,viewport:Le,reset:at}}function jR(s,e,i,r,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,v=new WeakMap,_=new Set;let g;const E=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,M){return b?new OffscreenCanvas(L,M):Jc("canvas")}function S(L,M,K){let $=1;const he=Ct(L);if((he.width>K||he.height>K)&&($=K/Math.max(he.width,he.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor($*he.width),De=Math.floor($*he.height);g===void 0&&(g=C(Ae,De));const ue=M?C(Ae,De):g;return ue.width=Ae,ue.height=De,ue.getContext("2d").drawImage(L,0,0,Ae,De),nt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+De+")."),ue}else return"data"in L&&nt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function x(L){return L.generateMipmaps}function U(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(L,M,K,$,he,Ae=!1){if(L!==null){if(s[L]!==void 0)return s[L];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De;$&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===s.RED&&(K===s.FLOAT&&(ue=s.R32F),K===s.HALF_FLOAT&&(ue=s.R16F),K===s.UNSIGNED_BYTE&&(ue=s.R8),K===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),K===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.R8UI),K===s.UNSIGNED_SHORT&&(ue=s.R16UI),K===s.UNSIGNED_INT&&(ue=s.R32UI),K===s.BYTE&&(ue=s.R8I),K===s.SHORT&&(ue=s.R16I),K===s.INT&&(ue=s.R32I)),M===s.RG&&(K===s.FLOAT&&(ue=s.RG32F),K===s.HALF_FLOAT&&(ue=s.RG16F),K===s.UNSIGNED_BYTE&&(ue=s.RG8),K===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),K===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RG8UI),K===s.UNSIGNED_SHORT&&(ue=s.RG16UI),K===s.UNSIGNED_INT&&(ue=s.RG32UI),K===s.BYTE&&(ue=s.RG8I),K===s.SHORT&&(ue=s.RG16I),K===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),K===s.UNSIGNED_INT&&(ue=s.RGB32UI),K===s.BYTE&&(ue=s.RGB8I),K===s.SHORT&&(ue=s.RGB16I),K===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),K===s.UNSIGNED_INT&&(ue=s.RGBA32UI),K===s.BYTE&&(ue=s.RGBA8I),K===s.SHORT&&(ue=s.RGBA16I),K===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),K===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const ve=Ae?jc:xt.getTransfer(he);K===s.FLOAT&&(ue=s.RGBA32F),K===s.HALF_FLOAT&&(ue=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ue=ve===It?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),K===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function N(L,M){let K;return L?M===null||M===ki||M===Ko?K=s.DEPTH24_STENCIL8:M===Fi?K=s.DEPTH32F_STENCIL8:M===Zo&&(K=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===Ko?K=s.DEPTH_COMPONENT24:M===Fi?K=s.DEPTH_COMPONENT32F:M===Zo&&(K=s.DEPTH_COMPONENT16),K}function P(L,M){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Rn&&L.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function H(L){const M=L.target;M.removeEventListener("dispose",H),O(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&_.delete(M)}function T(L){const M=L.target;M.removeEventListener("dispose",T),V(M)}function O(L){const M=r.get(L);if(M.__webglInit===void 0)return;const K=L.source,$=E.get(K);if($){const he=$[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&Y(L),Object.keys($).length===0&&E.delete(K)}r.remove(L)}function Y(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const K=L.source,$=E.get(K);delete $[M.__cacheKey],f.memory.textures--}function V(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let he=0;he<M.__webglFramebuffer[$].length;he++)s.deleteFramebuffer(M.__webglFramebuffer[$][he]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=L.textures;for(let $=0,he=K.length;$<he;$++){const Ae=r.get(K[$]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),f.memory.textures--),r.remove(K[$])}r.remove(L)}let J=0;function pe(){J=0}function fe(){return J}function Z(L){J=L}function F(){const L=J;return L>=l.maxTextures&&nt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),J+=1,L}function B(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function te(L,M){const K=r.get(L);if(L.isVideoTexture&&q(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const $=L.image;if($===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{je(K,L,M);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function ge(L,M){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){je(K,L,M);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function D(L,M){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){je(K,L,M);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function Q(L,M){const K=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&K.__version!==L.version){it(K,L,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const de={[lh]:s.REPEAT,[ma]:s.CLAMP_TO_EDGE,[ch]:s.MIRRORED_REPEAT},be={[Rn]:s.NEAREST,[vE]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Sd]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},Fe={[SE]:s.NEVER,[TE]:s.ALWAYS,[yE]:s.LESS,[sp]:s.LEQUAL,[ME]:s.EQUAL,[op]:s.GEQUAL,[EE]:s.GREATER,[bE]:s.NOTEQUAL};function Ge(L,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Sd||M.magFilter===hc||M.magFilter===Cr||M.minFilter===Nn||M.minFilter===Sd||M.minFilter===hc||M.minFilter===Cr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,de[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,de[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,de[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,be[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==hc&&M.minFilter!==Cr||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ie(L,M){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",H));const $=M.source;let he=E.get($);he===void 0&&(he={},E.set($,he));const Ae=B(M);if(Ae!==L.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),he[Ae].usedTimes++;const De=he[L.__cacheKey];De!==void 0&&(he[L.__cacheKey].usedTimes--,De.usedTimes===0&&Y(M)),L.__cacheKey=Ae,L.__webglTexture=he[Ae].texture}return K}function Te(L,M,K){return Math.floor(Math.floor(L/K)/M)}function ye(L,M,K,$){const Ae=L.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,$,M.data);else{Ae.sort((We,Ce)=>We.start-Ce.start);let De=0;for(let We=1;We<Ae.length;We++){const Ce=Ae[De],Le=Ae[We],Ze=Ce.start+Ce.count,Je=Te(Le.start,M.width,4),at=Te(Ce.start,M.width,4);Le.start<=Ze+1&&Je===at&&Te(Le.start+Le.count-1,M.width,4)===Je?Ce.count=Math.max(Ce.count,Le.start+Le.count-Ce.start):(++De,Ae[De]=Le)}Ae.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),ve=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let We=0,Ce=Ae.length;We<Ce;We++){const Le=Ae[We],Ze=Math.floor(Le.start/4),Je=Math.ceil(Le.count/4),at=Ze%M.width,X=Math.floor(Ze/M.width),we=Je,xe=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,at,X,we,xe,K,$,M.data)}L.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function je(L,M,K){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);const he=ie(L,M),Ae=M.source;i.bindTexture($,L.__webglTexture,s.TEXTURE0+K);const De=r.get(Ae);if(Ae.version!==De.__version||he===!0){if(i.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xe=xt.getPrimaries(xt.workingColorSpace),Ue=M.colorSpace===er?null:xt.getPrimaries(M.colorSpace),Pe=M.colorSpace===er||xe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=S(M.image,!1,l.maxTextureSize);ve=Cn(M,ve);const Re=c.convert(M.format,M.colorSpace),We=c.convert(M.type);let Ce=w(M.internalFormat,Re,We,M.normalized,M.colorSpace,M.isVideoTexture);Ge($,M);let Le;const Ze=M.mipmaps,Je=M.isVideoTexture!==!0,at=De.__version===void 0||he===!0,X=Ae.dataReady,we=P(M,ve);if(M.isDepthTexture)Ce=N(M.format===wr,M.type),at&&(Je?i.texStorage2D(s.TEXTURE_2D,1,Ce,ve.width,ve.height):i.texImage2D(s.TEXTURE_2D,0,Ce,ve.width,ve.height,0,Re,We,null));else if(M.isDataTexture)if(Ze.length>0){Je&&at&&i.texStorage2D(s.TEXTURE_2D,we,Ce,Ze[0].width,Ze[0].height);for(let xe=0,Ue=Ze.length;xe<Ue;xe++)Le=Ze[xe],Je?X&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,We,Le.data):i.texImage2D(s.TEXTURE_2D,xe,Ce,Le.width,Le.height,0,Re,We,Le.data);M.generateMipmaps=!1}else Je?(at&&i.texStorage2D(s.TEXTURE_2D,we,Ce,ve.width,ve.height),X&&ye(M,ve,Re,We)):i.texImage2D(s.TEXTURE_2D,0,Ce,ve.width,ve.height,0,Re,We,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ce,Ze[0].width,Ze[0].height,ve.depth);for(let xe=0,Ue=Ze.length;xe<Ue;xe++)if(Le=Ze[xe],M.format!==Ti)if(Re!==null)if(Je){if(X)if(M.layerUpdates.size>0){const Pe=Uv(Le.width,Le.height,M.format,M.type);for(const Ee of M.layerUpdates){const qe=Le.data.subarray(Ee*Pe/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Pe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Ee,Le.width,Le.height,1,Re,qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,ve.depth,Re,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Ce,Le.width,Le.height,ve.depth,0,Le.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,ve.depth,Re,We,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,xe,Ce,Le.width,Le.height,ve.depth,0,Re,We,Le.data)}else{Je&&at&&i.texStorage2D(s.TEXTURE_2D,we,Ce,Ze[0].width,Ze[0].height);for(let xe=0,Ue=Ze.length;xe<Ue;xe++)Le=Ze[xe],M.format!==Ti?Re!==null?Je?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,xe,Ce,Le.width,Le.height,0,Le.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?X&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,We,Le.data):i.texImage2D(s.TEXTURE_2D,xe,Ce,Le.width,Le.height,0,Re,We,Le.data)}else if(M.isDataArrayTexture)if(Je){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ce,ve.width,ve.height,ve.depth),X)if(M.layerUpdates.size>0){const xe=Uv(ve.width,ve.height,M.format,M.type);for(const Ue of M.layerUpdates){const Pe=ve.data.subarray(Ue*xe/ve.data.BYTES_PER_ELEMENT,(Ue+1)*xe/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,ve.width,ve.height,1,Re,We,Pe)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Re,We,ve.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ve.width,ve.height,ve.depth,0,Re,We,ve.data);else if(M.isData3DTexture)Je?(at&&i.texStorage3D(s.TEXTURE_3D,we,Ce,ve.width,ve.height,ve.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Re,We,ve.data)):i.texImage3D(s.TEXTURE_3D,0,Ce,ve.width,ve.height,ve.depth,0,Re,We,ve.data);else if(M.isFramebufferTexture){if(at)if(Je)i.texStorage2D(s.TEXTURE_2D,we,Ce,ve.width,ve.height);else{let xe=ve.width,Ue=ve.height;for(let Pe=0;Pe<we;Pe++)i.texImage2D(s.TEXTURE_2D,Pe,Ce,xe,Ue,0,Re,We,null),xe>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ve.parentNode!==xe){xe.appendChild(ve),_.add(M),xe.onpaint=Ue=>{const Pe=Ue.changedElements;for(const Ee of _)Pe.includes(Ee.image)&&(Ee.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const Pe=s.RGBA,Ee=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pe,Ee,qe,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Je&&at){const xe=Ct(Ze[0]);i.texStorage2D(s.TEXTURE_2D,we,Ce,xe.width,xe.height)}for(let xe=0,Ue=Ze.length;xe<Ue;xe++)Le=Ze[xe],Je?X&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re,We,Le):i.texImage2D(s.TEXTURE_2D,xe,Ce,Re,We,Le);M.generateMipmaps=!1}else if(Je){if(at){const xe=Ct(ve);i.texStorage2D(s.TEXTURE_2D,we,Ce,xe.width,xe.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,We,ve)}else i.texImage2D(s.TEXTURE_2D,0,Ce,Re,We,ve);x(M)&&U($),De.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function it(L,M,K){if(M.image.length!==6)return;const $=ie(L,M),he=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const Ae=r.get(he);if(he.version!==Ae.__version||$===!0){i.activeTexture(s.TEXTURE0+K);const De=xt.getPrimaries(xt.workingColorSpace),ue=M.colorSpace===er?null:xt.getPrimaries(M.colorSpace),ve=M.colorSpace===er||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,We=M.image[0]&&M.image[0].isDataTexture,Ce=[];for(let Ee=0;Ee<6;Ee++)!Re&&!We?Ce[Ee]=S(M.image[Ee],!0,l.maxCubemapSize):Ce[Ee]=We?M.image[Ee].image:M.image[Ee],Ce[Ee]=Cn(M,Ce[Ee]);const Le=Ce[0],Ze=c.convert(M.format,M.colorSpace),Je=c.convert(M.type),at=w(M.internalFormat,Ze,Je,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,we=Ae.__version===void 0||$===!0,xe=he.dataReady;let Ue=P(M,Le);Ge(s.TEXTURE_CUBE_MAP,M);let Pe;if(Re){X&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,at,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){Pe=Ce[Ee].mipmaps;for(let qe=0;qe<Pe.length;qe++){const ke=Pe[qe];M.format!==Ti?Ze!==null?X?xe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,Ze,ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,at,ke.width,ke.height,0,ke.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,Ze,Je,ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,at,ke.width,ke.height,0,Ze,Je,ke.data)}}}else{if(Pe=M.mipmaps,X&&we){Pe.length>0&&Ue++;const Ee=Ct(Ce[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(We){X?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ce[Ee].width,Ce[Ee].height,Ze,Je,Ce[Ee].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Ce[Ee].width,Ce[Ee].height,0,Ze,Je,Ce[Ee].data);for(let qe=0;qe<Pe.length;qe++){const wt=Pe[qe].image[Ee].image;X?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,wt.width,wt.height,Ze,Je,wt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,at,wt.width,wt.height,0,Ze,Je,wt.data)}}else{X?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ze,Je,Ce[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Ze,Je,Ce[Ee]);for(let qe=0;qe<Pe.length;qe++){const ke=Pe[qe];X?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,Ze,Je,ke.image[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,at,Ze,Je,ke.image[Ee])}}}x(M)&&U(s.TEXTURE_CUBE_MAP),Ae.__version=he.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Qe(L,M,K,$,he,Ae){const De=c.convert(K.format,K.colorSpace),ue=c.convert(K.type),ve=w(K.internalFormat,De,ue,K.normalized,K.colorSpace),Re=r.get(M),We=r.get(K);if(We.__renderTarget=M,!Re.__hasExternalTextures){const Ce=Math.max(1,M.width>>Ae),Le=Math.max(1,M.height>>Ae);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,ve,Ce,Le,M.depth,0,De,ue,null):i.texImage2D(he,Ae,ve,Ce,Le,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Jt(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,he,We.__webglTexture,0,Gt(M)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,he,We.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(L,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const $=M.depthTexture,he=$&&$.isDepthTexture?$.type:null,Ae=N(M.stencilBuffer,he),De=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Jt(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(M),Ae,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(M),Ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,L)}else{const $=M.textures;for(let he=0;he<$.length;he++){const Ae=$[he],De=c.convert(Ae.format,Ae.colorSpace),ue=c.convert(Ae.type),ve=w(Ae.internalFormat,De,ue,Ae.normalized,Ae.colorSpace);Jt(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(M),ve,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(M),ve,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ve,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(L,M,K){const $=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,M.depthTexture);const Re=c.convert(M.depthTexture.format),We=c.convert(M.depthTexture.type);let Ce;M.depthTexture.format===ya?Ce=s.DEPTH_COMPONENT24:M.depthTexture.format===wr&&(Ce=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ce,M.width,M.height,0,Re,We,null)}}else te(M.depthTexture,0);const Ae=he.__webglTexture,De=Gt(M),ue=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ve=M.depthTexture.format===wr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ya)Jt(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,ve,ue,Ae,0);else if(M.depthTexture.format===wr)Jt(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,ve,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(L){const M=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",he)};$.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=$}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let $=0;$<6;$++)ut(M.__webglFramebuffer[$],L,$);else{const $=L.texture.mipmaps;$&&$.length>0?ut(M.__webglFramebuffer[0],L,0):ut(M.__webglFramebuffer,L,0)}else if(K){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),Wt(M.__webglDepthbuffer[$],L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ae)}}else{const $=L.texture.mipmaps;if($&&$.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Wt(M.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(L,M,K){const $=r.get(L);M!==void 0&&Qe($.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&At(L)}function _t(L){const M=L.texture,K=r.get(L),$=r.get(M);L.addEventListener("dispose",T);const he=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,f.memory.textures++),Ae){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let ve=0;ve<M.mipmaps.length;ve++)K.__webglFramebuffer[ue][ve]=s.createFramebuffer()}else K.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)K.__webglFramebuffer[ue]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,ve=he.length;ue<ve;ue++){const Re=r.get(he[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Jt(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<he.length;ue++){const ve=he[ue];K.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const Re=c.convert(ve.format,ve.colorSpace),We=c.convert(ve.type),Ce=w(ve.internalFormat,Re,We,ve.normalized,ve.colorSpace,L.isXRRenderTarget===!0),Le=Gt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ce,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(K.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Qe(K.__webglFramebuffer[ue][ve],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else Qe(K.__webglFramebuffer[ue],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(M)&&U(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,ve=he.length;ue<ve;ue++){const Re=he[ue],We=r.get(Re);let Ce=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,We.__webglTexture),Ge(Ce,Re),Qe(K.__webglFramebuffer,L,Re,s.COLOR_ATTACHMENT0+ue,Ce,0),x(Re)&&U(Ce)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,$.__webglTexture),Ge(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Qe(K.__webglFramebuffer[ve],L,M,s.COLOR_ATTACHMENT0,ue,ve);else Qe(K.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,ue,0);x(M)&&U(ue),i.unbindTexture()}L.depthBuffer&&At(L)}function Rt(L){const M=L.textures;for(let K=0,$=M.length;K<$;K++){const he=M[K];if(x(he)){const Ae=I(L),De=r.get(he).__webglTexture;i.bindTexture(Ae,De),U(Ae),i.unbindTexture()}}}const nn=[],an=[];function ln(L){if(L.samples>0){if(Jt(L)===!1){const M=L.textures,K=L.width,$=L.height;let he=s.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(L),ue=M.length>1;if(ue)for(let Re=0;Re<M.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const ve=L.texture.mipmaps;ve&&ve.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const We=r.get(M[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,K,$,0,0,K,$,he,s.NEAREST),m===!0&&(nn.length=0,an.length=0,nn.push(s.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(nn.push(Ae),an.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,an)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<M.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const We=r.get(M[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,We,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Gt(L){return Math.min(l.maxSamples,L.samples)}function Jt(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(L){const M=f.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function Cn(L,M){const K=L.colorSpace,$=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Kc&&K!==er&&(xt.getTransfer(K)===It?($!==Ti||he!==pi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",K)),M}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=pe,this.getTextureUnits=fe,this.setTextureUnits=Z,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=D,this.setTextureCube=Q,this.rebindTextures=Mt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function QR(s,e){function i(r,l=er){let c;const f=xt.getTransfer(l);if(r===pi)return s.UNSIGNED_BYTE;if(r===tp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===np)return s.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===I_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===N_)return s.BYTE;if(r===P_)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===ep)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Sa)return s.HALF_FLOAT;if(r===F_)return s.ALPHA;if(r===B_)return s.RGB;if(r===Ti)return s.RGBA;if(r===ya)return s.DEPTH_COMPONENT;if(r===wr)return s.DEPTH_STENCIL;if(r===z_)return s.RED;if(r===ip)return s.RED_INTEGER;if(r===Ur)return s.RG;if(r===ap)return s.RG_INTEGER;if(r===rp)return s.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===kc)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===fh||r===dh||r===hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ph||r===mh||r===gh||r===vh||r===_h||r===Yc||r===xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ph||r===mh)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===gh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===vh)return c.COMPRESSED_R11_EAC;if(r===_h)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Yc)return c.COMPRESSED_RG11_EAC;if(r===xh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sh||r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Sh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ph||r===Oh||r===Ih)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ph)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fh||r===Bh||r===Zc||r===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const JR=`
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

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new K_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ri({vertexShader:JR,fragmentShader:$R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xi(new nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t2 extends Nr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,v=null,_=null,g=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",S=new e2,x={},U=i.getContextAttributes();let I=null,w=null;const N=[],P=[],H=new Tt;let T=null;const O=new Ei;O.viewport=new tn;const Y=new Ei;Y.viewport=new tn;const V=[O,Y],J=new ub;let pe=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Te=N[ie];return Te===void 0&&(Te=new Cd,N[ie]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ie){let Te=N[ie];return Te===void 0&&(Te=new Cd,N[ie]=Te),Te.getGripSpace()},this.getHand=function(ie){let Te=N[ie];return Te===void 0&&(Te=new Cd,N[ie]=Te),Te.getHandSpace()};function Z(ie){const Te=P.indexOf(ie.inputSource);if(Te===-1)return;const ye=N[Te];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,h||f),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function F(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",B);for(let ie=0;ie<N.length;ie++){const Te=P[ie];Te!==null&&(P[ie]=null,N[ie].disconnect(Te))}pe=null,fe=null,S.reset();for(const ie in x)delete x[ie];e.setRenderTarget(I),E=null,g=null,_=null,l=null,w=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",F),l.addEventListener("inputsourceschange",B),U.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(H),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,je=null,it=null;U.depth&&(it=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=U.stencil?wr:ya,je=U.stencil?Ko:ki);const Qe={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Hi(g.textureWidth,g.textureHeight,{format:Ti,type:pi,depthTexture:new Ps(g.textureWidth,g.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new Hi(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ge.setContext(l),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(ie){for(let Te=0;Te<ie.removed.length;Te++){const ye=ie.removed[Te],je=P.indexOf(ye);je>=0&&(P[je]=null,N[je].disconnect(ye))}for(let Te=0;Te<ie.added.length;Te++){const ye=ie.added[Te];let je=P.indexOf(ye);if(je===-1){for(let Qe=0;Qe<N.length;Qe++)if(Qe>=P.length){P.push(ye),je=Qe;break}else if(P[Qe]===null){P[Qe]=ye,je=Qe;break}if(je===-1)break}const it=N[je];it&&it.connect(ye)}}const te=new oe,ge=new oe;function D(ie,Te,ye){te.setFromMatrixPosition(Te.matrixWorld),ge.setFromMatrixPosition(ye.matrixWorld);const je=te.distanceTo(ge),it=Te.projectionMatrix.elements,Qe=ye.projectionMatrix.elements,Wt=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),At=(it[9]+1)/it[5],Mt=(it[9]-1)/it[5],_t=(it[8]-1)/it[0],Rt=(Qe[8]+1)/Qe[0],nn=Wt*_t,an=Wt*Rt,ln=je/(-_t+Rt),Gt=ln*-_t;if(Te.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Gt),ie.translateZ(ln),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),it[10]===-1)ie.projectionMatrix.copy(Te.projectionMatrix),ie.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const Jt=Wt+ln,q=ut+ln,Cn=nn-Gt,Ct=an+(je-Gt),L=At*ut/q*Jt,M=Mt*ut/q*Jt;ie.projectionMatrix.makePerspective(Cn,Ct,L,M,Jt,q),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Q(ie,Te){Te===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Te.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Te=ie.near,ye=ie.far;S.texture!==null&&(S.depthNear>0&&(Te=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),J.near=Y.near=O.near=Te,J.far=Y.far=O.far=ye,(pe!==J.near||fe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),pe=J.near,fe=J.far),J.layers.mask=ie.layers.mask|6,O.layers.mask=J.layers.mask&-5,Y.layers.mask=J.layers.mask&-3;const je=ie.parent,it=J.cameras;Q(J,je);for(let Qe=0;Qe<it.length;Qe++)Q(it[Qe],je);it.length===2?D(J,O,Y):J.projectionMatrix.copy(O.projectionMatrix),de(ie,J,je)};function de(ie,Te,ye){ye===null?ie.matrix.copy(Te.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Te.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Te.projectionMatrix),ie.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Hh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(ie){return x[ie]};let be=null;function Fe(ie,Te){if(v=Te.getViewerPose(h||f),b=Te,v!==null){const ye=v.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let je=!1;ye.length!==J.cameras.length&&(J.cameras.length=0,je=!0);for(let ut=0;ut<ye.length;ut++){const At=ye[ut];let Mt=null;if(E!==null)Mt=E.getViewport(At);else{const Rt=_.getViewSubImage(g,At);Mt=Rt.viewport,ut===0&&(e.setRenderTargetTextures(w,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(w))}let _t=V[ut];_t===void 0&&(_t=new Ei,_t.layers.enable(ut),_t.viewport=new tn,V[ut]=_t),_t.matrix.fromArray(At.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(At.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ut===0&&(J.matrix.copy(_t.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),je===!0&&J.cameras.push(_t)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ut=_.getDepthInformation(ye[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,l.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<ye.length;ut++){const At=ye[ut].camera;if(At){let Mt=x[At];Mt||(Mt=new K_,x[At]=Mt);const _t=_.getCameraImage(At);Mt.sourceTexture=_t}}}}for(let ye=0;ye<N.length;ye++){const je=P[ye],it=N[ye];je!==null&&it!==void 0&&it.update(je,Te,h||f)}be&&be(ie,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),b=null}const Ge=new J_;Ge.setAnimationLoop(Fe),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}}const n2=new hn,rx=new st;rx.set(-1,0,0,0,1,0,0,0,1);function i2(s,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,j_(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,U,I,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),g(S,x),x.isMeshPhysicalMaterial&&E(S,x,w)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),C(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,U,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),I=U.envMap,w=U.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(rx),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,U,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=I*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function E(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function a2(s,e,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const P=N.program;r.uniformBlockBinding(w,P)}function h(w,N){let P=l[w.id];P===void 0&&(S(w),P=v(w),l[w.id]=P,w.addEventListener("dispose",U));const H=N.program;r.updateUBOMapping(w,H);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function v(w){const N=_();w.__bindingPointIndex=N;const P=s.createBuffer(),H=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function _(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],P=w.uniforms,H=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let T=0,O=P.length;T<O;T++){const Y=P[T];if(Array.isArray(Y))for(let V=0,J=Y.length;V<J;V++)E(Y[V],T,V,H);else E(Y,T,0,H)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(w,N,P,H){if(C(w,N,P,H)===!0){const T=w.__offset,O=w.value;if(Array.isArray(O)){let Y=0;for(let V=0;V<O.length;V++){const J=O[V],pe=x(J);b(J,w.__data,Y),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(O,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function b(w,N,P){typeof w=="number"||typeof w=="boolean"?N[0]=w:w.isMatrix3?(N[0]=w.elements[0],N[1]=w.elements[1],N[2]=w.elements[2],N[3]=0,N[4]=w.elements[3],N[5]=w.elements[4],N[6]=w.elements[5],N[7]=0,N[8]=w.elements[6],N[9]=w.elements[7],N[10]=w.elements[8],N[11]=0):ArrayBuffer.isView(w)?N.set(new w.constructor(w.buffer,w.byteOffset,N.length)):w.toArray(N,P)}function C(w,N,P,H){const T=w.value,O=N+"_"+P;if(H[O]===void 0)return typeof T=="number"||typeof T=="boolean"?H[O]=T:ArrayBuffer.isView(T)?H[O]=T.slice():H[O]=T.clone(),!0;{const Y=H[O];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return H[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function S(w){const N=w.uniforms;let P=0;const H=16;for(let O=0,Y=N.length;O<Y;O++){const V=Array.isArray(N[O])?N[O]:[N[O]];for(let J=0,pe=V.length;J<pe;J++){const fe=V[J],Z=Array.isArray(fe.value)?fe.value:[fe.value];for(let F=0,B=Z.length;F<B;F++){const te=Z[F],ge=x(te),D=P%H,Q=D%ge.boundary,de=D+Q;P+=Q,de!==0&&H-de<ge.storage&&(P+=H-de),fe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=P,P+=ge.storage}}}const T=P%H;return T>0&&(P+=H-T),w.__size=P,w.__cache={},this}function x(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),N}function U(w){const N=w.target;N.removeEventListener("dispose",U);const P=f.indexOf(N.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function I(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:h,dispose:I}}const r2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function s2(){return Oi===null&&(Oi=new QE(r2,16,16,Ur,Sa),Oi.name="DFG_LUT",Oi.minFilter=Nn,Oi.magFilter=Nn,Oi.wrapS=ma,Oi.wrapT=ma,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class o2{constructor(e={}){const{canvas:i=RE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:E=pi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const C=E,S=new Set([rp,ap,ip]),x=new Set([pi,ki,Zo,Ko,tp,np]),U=new Uint32Array(4),I=new Int32Array(4),w=new oe;let N=null,P=null;const H=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,J=null,pe=null,fe=null,Z=null;this._outputColorSpace=hi;let F=0,B=0,te=null,ge=-1,D=null;const Q=new tn,de=new tn;let be=null;const Fe=new Nt(0);let Ge=0,ie=i.width,Te=i.height,ye=1,je=null,it=null;const Qe=new tn(0,0,ie,Te),Wt=new tn(0,0,ie,Te);let ut=!1;const At=new Y_;let Mt=!1,_t=!1;const Rt=new hn,nn=new oe,an=new tn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Jt(){return te===null?ye:1}let q=r;function Cn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$h}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",ot,!1),i.addEventListener("webglcontextcreationerror",qt,!1),q===null){const W="webgl2";if(q=Cn(W,A),q===null)throw Cn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let Ct,L,M,K,$,he,Ae,De,ue,ve,Re,We,Ce,Le,Ze,Je,at,X,we,xe,Ue,Pe,Ee;function qe(){Ct=new sA(q),Ct.init(),Ue=new QR(q,Ct),L=new JT(q,Ct,e,Ue),M=new KR(q,Ct),L.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),pe=q.createFramebuffer(),fe=q.createFramebuffer(),Z=q.createFramebuffer(),K=new cA(q),$=new OR,he=new jR(q,Ct,M,$,L,Ue,K),Ae=new rA(Y),De=new hb(q),Pe=new jT(q,De),ue=new oA(q,De,K,Pe),ve=new fA(q,ue,De,Pe,K),X=new uA(q,L,he),Ze=new $T($),Re=new PR(Y,Ae,Ct,L,Pe,Ze),We=new i2(Y,$),Ce=new FR,Le=new kR(Ct),at=new KT(Y,Ae,M,ve,b,m),Je=new ZR(Y,ve,L),Ee=new a2(q,K,L,M),we=new QT(q,Ct,K),xe=new lA(q,Ct,K),K.programs=Re.programs,Y.capabilities=L,Y.extensions=Ct,Y.properties=$,Y.renderLists=Ce,Y.shadowMap=Je,Y.state=M,Y.info=K}qe(),C!==pi&&(O=new hA(C,i.width,i.height,p,l,c));const ke=new t2(Y,q);this.xr=ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(ie,Te,!1))},this.getSize=function(A){return A.set(ie,Te)},this.setSize=function(A,W,le=!0){if(ke.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Te=W,i.width=Math.floor(A*ye),i.height=Math.floor(W*ye),le===!0&&(i.style.width=A+"px",i.style.height=W+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ie*ye,Te*ye).floor()},this.setDrawingBufferSize=function(A,W,le){ie=A,Te=W,ye=le,i.width=Math.floor(A*le),i.height=Math.floor(W*le),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===pi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,W,le,re){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,W,le,re),M.viewport(Q.copy(Qe).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(Wt)},this.setScissor=function(A,W,le,re){A.isVector4?Wt.set(A.x,A.y,A.z,A.w):Wt.set(A,W,le,re),M.scissor(de.copy(Wt).multiplyScalar(ye).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){M.setScissorTest(ut=A)},this.setOpaqueSort=function(A){je=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,le=!0){let re=0;if(A){let ne=!1;if(te!==null){const Ne=te.texture.format;ne=S.has(Ne)}if(ne){const Ne=te.texture.type,Be=x.has(Ne),Oe=at.getClearColor(),Xe=at.getClearAlpha(),ze=Oe.r,rt=Oe.g,lt=Oe.b;Be?(U[0]=ze,U[1]=rt,U[2]=lt,U[3]=Xe,q.clearBufferuiv(q.COLOR,0,U)):(I[0]=ze,I[1]=rt,I[2]=lt,I[3]=Xe,q.clearBufferiv(q.COLOR,0,I))}else re|=q.COLOR_BUFFER_BIT}W&&(re|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",ot,!1),i.removeEventListener("webglcontextcreationerror",qt,!1),at.dispose(),Ce.dispose(),Le.dispose(),$.dispose(),Ae.dispose(),ve.dispose(),Pe.dispose(),Ee.dispose(),Re.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Or),ke.removeEventListener("sessionend",Wi),zn.stop()};function wt(A){A.preventDefault(),dv("WebGLRenderer: Context Lost."),V=!0}function ot(){dv("WebGLRenderer: Context Restored."),V=!1;const A=K.autoReset,W=Je.enabled,le=Je.autoUpdate,re=Je.needsUpdate,ne=Je.type;qe(),K.autoReset=A,Je.enabled=W,Je.autoUpdate=le,Je.needsUpdate=re,Je.type=ne}function qt(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mn(A){const W=A.target;W.removeEventListener("dispose",Mn),Hs(W)}function Hs(A){ou(A),$.remove(A)}function ou(A){const W=$.get(A).programs;W!==void 0&&(W.forEach(function(le){Re.releaseProgram(le)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,le,re,ne,Ne){W===null&&(W=ln);const Be=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Oe=sl(A,W,le,re,ne);M.setMaterial(re,Be);let Xe=le.index,ze=1;if(re.wireframe===!0){if(Xe=ue.getWireframeAttribute(le),Xe===void 0)return;ze=2}const rt=le.drawRange,lt=le.attributes.position;let Ye=rt.start*ze,Dt=(rt.start+rt.count)*ze;Ne!==null&&(Ye=Math.max(Ye,Ne.start*ze),Dt=Math.min(Dt,(Ne.start+Ne.count)*ze)),Xe!==null?(Ye=Math.max(Ye,0),Dt=Math.min(Dt,Xe.count)):lt!=null&&(Ye=Math.max(Ye,0),Dt=Math.min(Dt,lt.count));const kt=Dt-Ye;if(kt<0||kt===1/0)return;Pe.setup(ne,re,Oe,le,Xe);let Yt,ft=we;if(Xe!==null&&(Yt=De.get(Xe),ft=xe,ft.setIndex(Yt)),ne.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*Jt()),ft.setMode(q.LINES)):ft.setMode(q.TRIANGLES);else if(ne.isLine){let cn=re.linewidth;cn===void 0&&(cn=1),M.setLineWidth(cn*Jt()),ne.isLineSegments?ft.setMode(q.LINES):ne.isLineLoop?ft.setMode(q.LINE_LOOP):ft.setMode(q.LINE_STRIP)}else ne.isPoints?ft.setMode(q.POINTS):ne.isSprite&&ft.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))ft.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const cn=ne._multiDrawStarts,He=ne._multiDrawCounts,En=ne._multiDrawCount,dt=Xe?De.get(Xe).bytesPerElement:1,Pn=$.get(re).currentProgram.getUniforms();for(let qn=0;qn<En;qn++)Pn.setValue(q,"_gl_DrawID",qn),ft.render(cn[qn]/dt,He[qn])}else if(ne.isInstancedMesh)ft.renderInstances(Ye,kt,ne.count);else if(le.isInstancedBufferGeometry){const cn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,He=Math.min(le.instanceCount,cn);ft.renderInstances(Ye,kt,He)}else ft.render(Ye,kt)};function il(A,W,le){A.transparent===!0&&A.side===pa&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,ii(A,W,le),A.side=nr,A.needsUpdate=!0,ii(A,W,le),A.side=pa):ii(A,W,le)}this.compile=function(A,W,le=null){le===null&&(le=A),P=Le.get(le),P.init(W),T.push(P),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),A!==le&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights();const re=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let Be=0;Be<Ne.length;Be++){const Oe=Ne[Be];il(Oe,le,ne),re.add(Oe)}else il(Ne,le,ne),re.add(Ne)}),P=T.pop(),re},this.compileAsync=function(A,W,le=null){const re=this.compile(A,W,le);return new Promise(ne=>{function Ne(){if(re.forEach(function(Be){$.get(Be).currentProgram.isReady()&&re.delete(Be)}),re.size===0){ne(A);return}setTimeout(Ne,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Pr=null;function ir(A){Pr&&Pr(A)}function Or(){zn.stop()}function Wi(){zn.start()}const zn=new J_;zn.setAnimationLoop(ir),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Pr=A,ke.setAnimationLoop(A),A===null?zn.stop():zn.start()},ke.addEventListener("sessionstart",Or),ke.addEventListener("sessionend",Wi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(A,W);const le=ke.enabled===!0&&ke.isPresenting===!0,re=O!==null&&(te===null||le)&&O.begin(Y,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,te),P=Le.get(A,T.length),P.init(W),P.state.textureUnits=he.getTextureUnits(),T.push(P),Rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),At.setFromProjectionMatrix(Rt,Bi,W.reversedDepth),_t=this.localClippingEnabled,Mt=Ze.init(this.clippingPlanes,_t),N=Ce.get(A,H.length),N.init(),H.push(N),ke.enabled===!0&&ke.isPresenting===!0){const Be=Y.xr.getDepthSensingMesh();Be!==null&&qi(Be,W,-1/0,Y.sortObjects)}qi(A,W,0,Y.sortObjects),N.finish(),Y.sortObjects===!0&&N.sort(je,it,W.reversedDepth),Gt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Gt&&at.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Ze.beginShadows();const ne=P.state.shadowsArray;if(Je.render(ne,A,W),Mt===!0&&Ze.endShadows(),(re&&O.hasRenderPass())===!1){const Be=N.opaque,Oe=N.transmissive;if(P.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Oe.length>0)for(let ze=0,rt=Xe.length;ze<rt;ze++){const lt=Xe[ze];rn(Be,Oe,A,lt)}Gt&&at.render(A);for(let ze=0,rt=Xe.length;ze<rt;ze++){const lt=Xe[ze];Yi(N,A,lt,lt.viewport)}}else Oe.length>0&&rn(Be,Oe,A,W),Gt&&at.render(A),Yi(N,A,W)}te!==null&&B===0&&(he.updateMultisampleRenderTarget(te),he.updateRenderTargetMipmap(te)),re&&O.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),Pe.resetDefaultState(),ge=-1,D=null,T.pop(),T.length>0?(P=T[T.length-1],he.setTextureUnits(P.state.textureUnits),Mt===!0&&Ze.setGlobalState(Y.clippingPlanes,P.state.camera)):P=null,H.pop(),H.length>0?N=H[H.length-1]:N=null,J!==null&&J.renderEnd()};function qi(A,W,le,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){re&&an.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const Be=ve.update(A),Oe=A.material;Oe.visible&&N.push(A,Be,Oe,le,an.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Be=ve.update(A),Oe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),an.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),an.copy(Be.boundingSphere.center)),an.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Oe)){const Xe=Be.groups;for(let ze=0,rt=Xe.length;ze<rt;ze++){const lt=Xe[ze],Ye=Oe[lt.materialIndex];Ye&&Ye.visible&&N.push(A,Be,Ye,le,an.z,lt)}}else Oe.visible&&N.push(A,Be,Oe,le,an.z,null)}}const Ne=A.children;for(let Be=0,Oe=Ne.length;Be<Oe;Be++)qi(Ne[Be],W,le,re)}function Yi(A,W,le,re){const{opaque:ne,transmissive:Ne,transparent:Be}=A;P.setupLightsView(le),Mt===!0&&Ze.setGlobalState(Y.clippingPlanes,le),re&&M.viewport(Q.copy(re)),ne.length>0&&ar(ne,W,le),Ne.length>0&&ar(Ne,W,le),Be.length>0&&ar(Be,W,le),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function rn(A,W,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const Ye=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new Hi(1,1,{generateMipmaps:!0,type:Ye?Sa:pi,minFilter:Cr,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[re.id],Be=re.viewport||Q;Ne.setSize(Be.z*Y.transmissionResolutionScale,Be.w*Y.transmissionResolutionScale);const Oe=Y.getRenderTarget(),Xe=Y.getActiveCubeFace(),ze=Y.getActiveMipmapLevel();Y.setRenderTarget(Ne),Y.getClearColor(Fe),Ge=Y.getClearAlpha(),Ge<1&&Y.setClearColor(16777215,.5),Y.clear(),Gt&&at.render(le);const rt=Y.toneMapping;Y.toneMapping=zi;const lt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),Mt===!0&&Ze.setGlobalState(Y.clippingPlanes,re),ar(A,le,re),he.updateMultisampleRenderTarget(Ne),he.updateRenderTargetMipmap(Ne),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Dt=0,kt=W.length;Dt<kt;Dt++){const Yt=W[Dt],{object:ft,geometry:cn,material:He,group:En}=Yt;if(He.side===pa&&ft.layers.test(re.layers)){const dt=He.side;He.side=Wn,He.needsUpdate=!0,Gs(ft,le,re,cn,He,En),He.side=dt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(he.updateMultisampleRenderTarget(Ne),he.updateRenderTargetMipmap(Ne))}Y.setRenderTarget(Oe,Xe,ze),Y.setClearColor(Fe,Ge),lt!==void 0&&(re.viewport=lt),Y.toneMapping=rt}function ar(A,W,le){const re=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,Ne=A.length;ne<Ne;ne++){const Be=A[ne],{object:Oe,geometry:Xe,group:ze}=Be;let rt=Be.material;rt.allowOverride===!0&&re!==null&&(rt=re),Oe.layers.test(le.layers)&&Gs(Oe,W,le,Xe,rt,ze)}}function Gs(A,W,le,re,ne,Ne){A.onBeforeRender(Y,W,le,re,ne,Ne),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(Y,W,le,re,A,Ne),ne.transparent===!0&&ne.side===pa&&ne.forceSinglePass===!1?(ne.side=Wn,ne.needsUpdate=!0,Y.renderBufferDirect(le,W,re,ne,A,Ne),ne.side=nr,ne.needsUpdate=!0,Y.renderBufferDirect(le,W,re,ne,A,Ne),ne.side=pa):Y.renderBufferDirect(le,W,re,ne,A,Ne),A.onAfterRender(Y,W,le,re,ne,Ne)}function ii(A,W,le){W.isScene!==!0&&(W=ln);const re=$.get(A),ne=P.state.lights,Ne=P.state.shadowsArray,Be=ne.state.version,Oe=Re.getParameters(A,ne.state,Ne,W,le,P.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Oe);let ze=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,re.fog=W.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Ae.get(A.envMap||re.environment,rt),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Mn),ze=new Map,re.programs=ze);let lt=ze.get(Xe);if(lt!==void 0){if(re.currentProgram===lt&&re.lightsStateVersion===Be)return al(A,Oe),lt}else Oe.uniforms=Re.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,le,Oe),A.onBeforeCompile(Oe,Y),lt=Re.acquireProgram(Oe,Xe),ze.set(Xe,lt),re.uniforms=Oe.uniforms;const Ye=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),al(A,Oe),re.needsLights=Ir(A),re.lightsStateVersion=Be,re.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=lt,re.uniformsList=null,lt}function Zi(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Xc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function al(A,W){const le=$.get(A);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}function rl(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(W.matrixWorld);for(let le=0,re=A.length;le<re;le++){const ne=A[le];if(ne.texture!==null&&ne.boundingBox.containsPoint(w))return ne}return null}function sl(A,W,le,re,ne){W.isScene!==!0&&(W=ln),he.resetTextureUnits();const Ne=W.fog,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?W.environment:null,Oe=te===null?Y.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xt.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,ze=Ae.get(re.envMap||Be,Xe),rt=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,lt=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,kt=!!le.morphAttributes.color;let Yt=zi;re.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Yt=Y.toneMapping);const ft=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,cn=ft!==void 0?ft.length:0,He=$.get(re),En=P.state.lights;if(Mt===!0&&(_t===!0||A!==D)){const Ft=A===D&&re.id===ge;Ze.setState(re,A,Ft)}let dt=!1;re.version===He.__version?(He.needsLights&&He.lightsStateVersion!==En.state.version||He.outputColorSpace!==Oe||ne.isBatchedMesh&&He.batching===!1||!ne.isBatchedMesh&&He.batching===!0||ne.isBatchedMesh&&He.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&He.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&He.instancing===!1||!ne.isInstancedMesh&&He.instancing===!0||ne.isSkinnedMesh&&He.skinning===!1||!ne.isSkinnedMesh&&He.skinning===!0||ne.isInstancedMesh&&He.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&He.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&He.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&He.instancingMorph===!1&&ne.morphTexture!==null||He.envMap!==ze||re.fog===!0&&He.fog!==Ne||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ze.numPlanes||He.numIntersection!==Ze.numIntersection)||He.vertexAlphas!==rt||He.vertexTangents!==lt||He.morphTargets!==Ye||He.morphNormals!==Dt||He.morphColors!==kt||He.toneMapping!==Yt||He.morphTargetsCount!==cn||!!He.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,He.__version=re.version);let Pn=He.currentProgram;dt===!0&&(Pn=ii(re,W,ne),J&&re.isNodeMaterial&&J.onUpdateProgram(re,Pn,He));let qn=!1,On=!1,Ta=!1;const Lt=Pn.getUniforms(),Zt=He.uniforms;if(M.useProgram(Pn.program)&&(qn=!0,On=!0,Ta=!0),re.id!==ge&&(ge=re.id,On=!0),He.needsLights){const Ft=rl(P.state.lightProbeGridArray,ne);He.lightProbeGrid!==Ft&&(He.lightProbeGrid=Ft,On=!0)}if(qn||D!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(q,"projectionMatrix",A.projectionMatrix),Lt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Ci=Lt.map.cameraPosition;Ci!==void 0&&Ci.setValue(q,nn.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,On=!0,Ta=!0)}if(He.needsLights&&(En.state.directionalShadowMap.length>0&&Lt.setValue(q,"directionalShadowMap",En.state.directionalShadowMap,he),En.state.spotShadowMap.length>0&&Lt.setValue(q,"spotShadowMap",En.state.spotShadowMap,he),En.state.pointShadowMap.length>0&&Lt.setValue(q,"pointShadowMap",En.state.pointShadowMap,he)),ne.isSkinnedMesh){Lt.setOptional(q,ne,"bindMatrix"),Lt.setOptional(q,ne,"bindMatrixInverse");const Ft=ne.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Lt.setValue(q,"boneTexture",Ft.boneTexture,he))}ne.isBatchedMesh&&(Lt.setOptional(q,ne,"batchingTexture"),Lt.setValue(q,"batchingTexture",ne._matricesTexture,he),Lt.setOptional(q,ne,"batchingIdTexture"),Lt.setValue(q,"batchingIdTexture",ne._indirectTexture,he),Lt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Lt.setValue(q,"batchingColorTexture",ne._colorsTexture,he));const ai=le.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&X.update(ne,le,Pn),(On||He.receiveShadow!==ne.receiveShadow)&&(He.receiveShadow=ne.receiveShadow,Lt.setValue(q,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&W.environment!==null&&(Zt.envMapIntensity.value=W.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=s2()),On){if(Lt.setValue(q,"toneMappingExposure",Y.toneMappingExposure),He.needsLights&&lu(Zt,Ta),Ne&&re.fog===!0&&We.refreshFogUniforms(Zt,Ne),We.refreshMaterialUniforms(Zt,re,ye,Te,P.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Ft=He.lightProbeGrid;Zt.probesSH.value=Ft.texture,Zt.probesMin.value.copy(Ft.boundingBox.min),Zt.probesMax.value.copy(Ft.boundingBox.max),Zt.probesResolution.value.copy(Ft.resolution)}Xc.upload(q,Zi(He),Zt,he)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xc.upload(q,Zi(He),Zt,he),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(q,"center",ne.center),Lt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue(q,"normalMatrix",ne.normalMatrix),Lt.setValue(q,"modelMatrix",ne.matrixWorld),re.uniformsGroups!==void 0){const Ft=re.uniformsGroups;for(let Ci=0,gi=Ft.length;Ci<gi;Ci++){const Fr=Ft[Ci];Ee.update(Fr,Pn),Ee.bind(Fr,Pn)}}return Pn}function lu(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ir(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,W,le){const re=$.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=W,$.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const le=$.get(A);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,le=0){te=A,F=W,B=le;let re=null,ne=!1,Ne=!1;if(A){const Oe=$.get(A);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(q.FRAMEBUFFER,Oe.__webglFramebuffer),Q.copy(A.viewport),de.copy(A.scissor),be=A.scissorTest,M.viewport(Q),M.scissor(de),M.setScissorTest(be),ge=-1;return}else if(Oe.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Oe.__hasExternalTextures)he.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&$.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const ze=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[W])?re=ze[W][le]:re=ze[W],ne=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?re=$.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?re=ze[le]:re=ze,Q.copy(A.viewport),de.copy(A.scissor),be=A.scissorTest}else Q.copy(Qe).multiplyScalar(ye).floor(),de.copy(Wt).multiplyScalar(ye).floor(),be=ut;if(le!==0&&(re=pe),M.bindFramebuffer(q.FRAMEBUFFER,re)&&M.drawBuffers(A,re),M.viewport(Q),M.scissor(de),M.setScissorTest(be),ne){const Oe=$.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,le)}else if(Ne){const Oe=W;for(let Xe=0;Xe<A.textures.length;Xe++){const ze=$.get(A.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,ze.__webglTexture,le,Oe)}}else if(A!==null&&le!==0){const Oe=$.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oe.__webglTexture,le)}ge=-1},this.readRenderTargetPixels=function(A,W,le,re,ne,Ne,Be,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){M.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const ze=A.textures[Oe],rt=ze.format,lt=ze.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(rt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&le>=0&&le<=A.height-ne&&q.readPixels(W,le,re,ne,Ue.convert(rt),Ue.convert(lt),Ne)}finally{const ze=te!==null?$.get(te).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,le,re,ne,Ne,Be,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(W>=0&&W<=A.width-re&&le>=0&&le<=A.height-ne){M.bindFramebuffer(q.FRAMEBUFFER,Xe);const ze=A.textures[Oe],rt=ze.format,lt=ze.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ye),q.bufferData(q.PIXEL_PACK_BUFFER,Ne.byteLength,q.STREAM_READ),q.readPixels(W,le,re,ne,Ue.convert(rt),Ue.convert(lt),0);const Dt=te!==null?$.get(te).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,Dt);const kt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await CE(q,kt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ye),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ne),q.deleteBuffer(Ye),q.deleteSync(kt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,le=0){const re=Math.pow(2,-le),ne=Math.floor(A.image.width*re),Ne=Math.floor(A.image.height*re),Be=W!==null?W.x:0,Oe=W!==null?W.y:0;he.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,le,0,0,Be,Oe,ne,Ne),M.unbindTexture()},this.copyTextureToTexture=function(A,W,le=null,re=null,ne=0,Ne=0){let Be,Oe,Xe,ze,rt,lt,Ye,Dt,kt;const Yt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(le!==null)Be=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,ze=le.min.x,rt=le.min.y,lt=le.isBox3?le.min.z:0;else{const Zt=Math.pow(2,-ne);Be=Math.floor(Yt.width*Zt),Oe=Math.floor(Yt.height*Zt),A.isDataArrayTexture?Xe=Yt.depth:A.isData3DTexture?Xe=Math.floor(Yt.depth*Zt):Xe=1,ze=0,rt=0,lt=0}re!==null?(Ye=re.x,Dt=re.y,kt=re.z):(Ye=0,Dt=0,kt=0);const ft=Ue.convert(W.format),cn=Ue.convert(W.type);let He;W.isData3DTexture?(he.setTexture3D(W,0),He=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(he.setTexture2DArray(W,0),He=q.TEXTURE_2D_ARRAY):(he.setTexture2D(W,0),He=q.TEXTURE_2D),M.activeTexture(q.TEXTURE0),M.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),M.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),M.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const En=M.getParameter(q.UNPACK_ROW_LENGTH),dt=M.getParameter(q.UNPACK_IMAGE_HEIGHT),Pn=M.getParameter(q.UNPACK_SKIP_PIXELS),qn=M.getParameter(q.UNPACK_SKIP_ROWS),On=M.getParameter(q.UNPACK_SKIP_IMAGES);M.pixelStorei(q.UNPACK_ROW_LENGTH,Yt.width),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Yt.height),M.pixelStorei(q.UNPACK_SKIP_PIXELS,ze),M.pixelStorei(q.UNPACK_SKIP_ROWS,rt),M.pixelStorei(q.UNPACK_SKIP_IMAGES,lt);const Ta=A.isDataArrayTexture||A.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Zt=$.get(A),ai=$.get(W),Ft=$.get(Zt.__renderTarget),Ci=$.get(ai.__renderTarget);M.bindFramebuffer(q.READ_FRAMEBUFFER,Ft.__webglFramebuffer),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let gi=0;gi<Xe;gi++)Ta&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$.get(A).__webglTexture,ne,lt+gi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$.get(W).__webglTexture,Ne,kt+gi)),q.blitFramebuffer(ze,rt,Be,Oe,Ye,Dt,Be,Oe,q.DEPTH_BUFFER_BIT,q.NEAREST);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||$.has(A)){const Zt=$.get(A),ai=$.get(W);M.bindFramebuffer(q.READ_FRAMEBUFFER,fe),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,Z);for(let Ft=0;Ft<Xe;Ft++)Ta?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Zt.__webglTexture,ne,lt+Ft):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Zt.__webglTexture,ne),Lt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ai.__webglTexture,Ne,kt+Ft):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ai.__webglTexture,Ne),ne!==0?q.blitFramebuffer(ze,rt,Be,Oe,Ye,Dt,Be,Oe,q.COLOR_BUFFER_BIT,q.NEAREST):Lt?q.copyTexSubImage3D(He,Ne,Ye,Dt,kt+Ft,ze,rt,Be,Oe):q.copyTexSubImage2D(He,Ne,Ye,Dt,ze,rt,Be,Oe);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(He,Ne,Ye,Dt,kt,Be,Oe,Xe,ft,cn,Yt.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(He,Ne,Ye,Dt,kt,Be,Oe,Xe,ft,Yt.data):q.texSubImage3D(He,Ne,Ye,Dt,kt,Be,Oe,Xe,ft,cn,Yt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ne,Ye,Dt,Be,Oe,ft,cn,Yt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ne,Ye,Dt,Yt.width,Yt.height,ft,Yt.data):q.texSubImage2D(q.TEXTURE_2D,Ne,Ye,Dt,Be,Oe,ft,cn,Yt);M.pixelStorei(q.UNPACK_ROW_LENGTH,En),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,dt),M.pixelStorei(q.UNPACK_SKIP_PIXELS,Pn),M.pixelStorei(q.UNPACK_SKIP_ROWS,qn),M.pixelStorei(q.UNPACK_SKIP_IMAGES,On),Ne===0&&W.generateMipmaps&&q.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){F=0,B=0,te=null,M.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),i.unpackColorSpace=xt._getUnpackColorSpace()}}const l2=()=>{const s=me.useRef(null);return me.useEffect(()=>{const e=s.current;if(!e)return;const i=new XE,r=new up(-1,1,1,-1,0,1),l=new o2({antialias:!0,alpha:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(e.clientWidth,e.clientHeight),e.appendChild(l.domElement);const c=`
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
    `,p={uTime:{value:0},uResolution:{value:new Tt(e.clientWidth,e.clientHeight)}},m=new nl(2,2),h=new Ri({vertexShader:c,fragmentShader:f,uniforms:p,transparent:!0}),v=new Xi(m,h);i.add(v);let _;const g=new fb,E=()=>{p.uTime.value=g.getElapsedTime(),l.render(i,r),_=requestAnimationFrame(E)};E();const b=()=>{if(!e)return;const S=e.clientWidth,x=e.clientHeight;l.setSize(S,x),p.uResolution.value.set(S,x)},C=new ResizeObserver(()=>b());return C.observe(e),()=>{cancelAnimationFrame(_),C.disconnect(),m.dispose(),h.dispose(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),G.jsx("div",{ref:s,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",zIndex:0}})};function c2(){const s=me.useRef(null),[e,i]=me.useState(!1),r=Yh(),l=me.useRef({startX:0,scrollLeft:0,velocity:0,lastX:0,dragDistance:0,rafId:null}),c=B=>{B.target.tagName!=="A"&&(B.preventDefault(),i(!0),cancelAnimationFrame(l.current.rafId),l.current.startX=B.pageX-s.current.offsetLeft,l.current.scrollLeft=s.current.scrollLeft,l.current.lastX=B.pageX,l.current.velocity=0,l.current.dragDistance=0)},f=B=>{if(!e)return;B.preventDefault();const ge=(B.pageX-s.current.offsetLeft-l.current.startX)*1.5,D=Math.abs(B.pageX-l.current.lastX);l.current.dragDistance+=D,l.current.velocity=B.pageX-l.current.lastX,l.current.lastX=B.pageX,s.current.scrollLeft=l.current.scrollLeft-ge},p=B=>{l.current.dragDistance<5&&r(B)},m=()=>{Math.abs(l.current.velocity)>.01&&(s.current.scrollLeft-=l.current.velocity*15,l.current.velocity*=.95,l.current.rafId=requestAnimationFrame(m))},h=()=>{i(!1),m()},v=()=>{i(!1),m()};me.useEffect(()=>{const B={threshold:.1,rootMargin:"0px 0px -50px 0px"},te=new IntersectionObserver(D=>{D.forEach(Q=>{Q.isIntersecting&&Q.target.classList.add("reveal-visible")})},B);return document.querySelectorAll(".reveal").forEach(D=>te.observe(D)),()=>te.disconnect()},[]),me.useEffect(()=>()=>cancelAnimationFrame(l.current.rafId),[]);const _={maxWidth:"1100px",margin:"0 auto",padding:"0 1.5rem"},g={padding:"4rem 0 3rem 0",textAlign:"left",color:"#fdf9d2"},E={fontSize:"3.5rem",fontWeight:"800",margin:"0 0 1rem 0",lineHeight:"1.1",letterSpacing:"-0.02em"},b={fontSize:"1.35rem",fontWeight:"600",margin:"1rem 0 0.5rem 0"},C={color:"#1e4d61",fontSize:"1.85rem",fontWeight:"700",margin:"2.5rem 0 1.5rem 0",textAlign:"left"},S={minWidth:"340px",maxWidth:"360px",flexShrink:0,padding:"1.25rem",borderRadius:"14px",backgroundColor:"#3B8EA5",display:"flex",flexDirection:"column",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"default",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.15)",overflow:"hidden",border:"1px solid #2d728f",textAlign:"left"},x={display:"flex",overflowX:"auto",gap:"1.5rem",padding:"1.5rem 0.5rem 1.5rem 0.5rem",cursor:e?"grabbing":"grab",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none"},U={backgroundColor:"#1e3158",color:"#fdf9d2",fontSize:"0.75rem",fontWeight:"700",padding:"0.25rem 0.6rem",borderRadius:"4px",letterSpacing:"0.05em",fontFamily:"monospace"},I={width:"100%",aspectRatio:"16/10",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:"600",letterSpacing:"0.15em",textTransform:"uppercase",border:"1px solid #334155",position:"relative",overflow:"hidden"},w={position:"absolute",inset:0,backgroundImage:"linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",backgroundSize:"20px 20px",pointerEvents:"none"},N={position:"absolute",inset:0,backgroundImage:"linear-gradient(#0000000a 1px, transparent 1px), linear-gradient(90deg, #0000000a 1px, transparent 1px)",backgroundSize:"20px 20px",pointerEvents:"none"},P={margin:"2.5rem 0",border:"none",height:"0",borderTop:"2px solid #2D728F33"},H={marginBottom:"2rem",paddingLeft:"1.25rem",borderLeft:"4px solid #2D728F",textAlign:"left"},T={display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"0.5rem"},O={fontSize:"1.15rem",fontWeight:"600",margin:"0",color:"#1F2937"},Y={color:"#6B7280",fontSize:"0.85rem",fontWeight:"500"},V={color:"#4B5563",fontSize:"0.95rem",fontStyle:"italic",margin:"0.25rem 0 0.75rem 0"},J={listStyleType:"disc",marginLeft:"1.25rem",paddingLeft:"0",lineHeight:"1.5",fontSize:"0.95rem",color:"#1f2734"},pe={textAlign:"left",fontSize:"1.05rem",fontWeight:"600",color:"#1E4D61",margin:"1.25rem 0 0.5rem 0"},fe={color:"#1e3158ff",fontWeight:"bold",textDecoration:"none"},F=`url("data:image/svg+xml;utf8,${`
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
  `.replace(/\n/g,"").replace(/\s+/g," ")}")`;return G.jsxs("div",{children:[G.jsx("style",{children:`
        body, html { 
          margin: 0; 
          background-image: ${F};
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
      `}),G.jsxs("div",{style:{maxWidth:"1100px",margin:"2rem auto",borderRadius:"10px",overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)",position:"relative",isolation:"isolate"},children:[G.jsxs("div",{style:{backgroundColor:"#2d728f",boxShadow:"0 0px 30px rgba(0, 0, 0, 0.15)",position:"relative",overflow:"hidden",isolation:"isolate"},children:[G.jsx(l2,{}),G.jsx("div",{style:{..._,zIndex:10,position:"relative"},children:G.jsxs("div",{style:g,children:[G.jsx("h1",{style:E,children:"Caia Gelli"}),G.jsxs("div",{style:{fontSize:"0.95rem",marginBottom:"1.5rem",display:"flex",gap:"1rem"},children:[G.jsx("a",{href:"https://www.linkedin.com/in/caia-gelli-14b6a3225/",style:{...fe,color:" #0c1a1c"},children:"LinkedIn"}),G.jsx("span",{style:{color:"#0c1a1c"},children:"|"}),G.jsx("a",{href:"https://github.com/CaiaG",style:{...fe,color:" #0c1a1c"},children:"GitHub"})]}),G.jsx("h2",{style:b,children:"Real-Time 3D Graphics Engineer & Technical Artist | C++, Unreal Engine, Gameplay Design | Prototyping & Pipeline"}),G.jsx("p",{style:{fontSize:"1.05rem",lineHeight:"1.6",maxWidth:"750px",margin:"0.5rem 0 0 0"},children:"Real-time 3D graphics engineer & technical artist with a passion for games and animation. Interests include rendering, tool prototyping, environmental storytelling, and interactive mechanics. I enjoy building artist-facing toolsets, PBR material graphs, custom shaders and procedural terrain systems in Unreal Engine and Houdini. My experience includes writing procedural generation algorithms in C++, building automated asset pipelines, and developing low-level C++ and GLSL graphics systems."})]})})]}),G.jsx("div",{style:{backgroundColor:"#fdf9d2ff",minHeight:"100vh",padding:"2rem 0 4rem 0"},children:G.jsxs("div",{style:_,children:[G.jsx("h2",{style:C,children:"Featured Projects"}),G.jsxs("div",{style:x,className:"no-scrollbar",ref:s,onMouseDown:c,onMouseLeave:h,onMouseUp:v,onMouseMove:f,children:[G.jsxs("div",{className:"project-card",style:{...S,cursor:"pointer"},onClick:()=>p("/CGProjects"),children:["                ",G.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg",alt:"Interactive Computer Graphics",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Interactive Computer Graphics"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Portfolio including: Mini Minecraft using C++ and OpenGL (procedural terrain, texturing and L-system implementations), Rasterizer in OpenGL & Ray/Path tracer using Monte Carlo approximation, 3D Modeling, etc."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"C++"}),G.jsx("span",{style:U,children:"GLSL"})]}),G.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:G.jsx("a",{href:"https://www.artstation.com/caiagelli9",style:fe,children:"Portfolio"})})]}),G.jsxs("div",{className:"project-card",style:S,children:[G.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg",alt:"SPH Implementation",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Smoothed Particle Hydrodynamics Implementation in Houdini"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"A custom SPH solver with pressure, viscosity, and surface tension. It applies XSPH smoothing, hybrid pressure solvers, and dynamic time stepping for stability. Supports 3K+ particles at 30 FPS."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"HOUDINI"}),G.jsx("span",{style:U,children:"VEX"}),G.jsx("span",{style:U,children:"C++"})]}),G.jsxs("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:[G.jsx("a",{href:"https://github.com/CaiaG/SPHFluidSimulation-in-Houdini",style:fe,children:"Code"}),G.jsx("span",{style:{color:"#1e3158ff"},children:"|"}),G.jsx("a",{href:"https://docs.google.com/presentation/d/16x6bA4EYJor1JWqmlA5Iz0BD-3cVK-eLnIrsPnyrGdA/edit?usp=sharing",style:fe,children:"Presentation"}),G.jsx("span",{style:{color:"#1e3158ff"},children:"|"}),G.jsx("a",{href:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/ProjectSpecificationGuideFinalDraft.pdf",style:fe,children:"Writeup"})]})]}),G.jsxs("div",{className:"project-card",style:S,children:[G.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/treerev1.png",alt:"Dragon's Blood Tree Kit",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Dragon's Blood Tree Kit (In Progress)"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Procedural modular foliage kit for a dragon's blood tree, synthesized in Unreal Engine and experimenting with different techniques to optimize performance. Uses an L-system branching algorithm to replicate the unique branching pattern and umbrella shape canopy."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"Unreal Engine"}),G.jsx("span",{style:U,children:"Blender"}),G.jsx("span",{style:U,children:"L-Systems"})]}),G.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:G.jsx("a",{href:"https://app.milanote.com/1W3ZZU1Qvua02H/dragon-tree?p=m441fkw92yV",style:fe,children:"Progress Board"})})]}),G.jsxs("div",{className:"project-card",style:S,children:[G.jsx("img",{src:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/IMG_9258.JPEG",alt:"Virtual Assistant",style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem"}}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Virtual Assistant for OR Planner"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Prototype for the assistant of an Operation Room planning application made in Unreal Engine. Integrates Convai and Kokoro (via FastAPI) for real-time voice interaction and character animation. Demoed on virtual production stage."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"Unreal Engine"}),G.jsx("span",{style:U,children:"FastAPI"}),G.jsx("span",{style:U,children:"Docker"}),G.jsx("span",{style:U,children:"Python"})]}),G.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:G.jsx("a",{href:"https://github.com/CaiaG/TTSandASRforVirtualAssistantProject",style:fe,children:"Code & Demo"})})]}),G.jsxs("div",{className:"project-card",style:S,children:[G.jsxs("div",{style:{...I,background:"#243252",color:"#38bdf8"},children:[G.jsx("div",{style:w}),G.jsxs("div",{style:{zIndex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[G.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 512 512",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginBottom:"8px"},children:[G.jsx("path",{opacity:"0.4",d:"M64 64h64v16H80v48H64V64zm320 0h64v64h-16V80h-48V64zM64 384h16v48h48v16H64v-64zm384 0v64h-64v-16h48v-48h16z"}),G.jsx("path",{opacity:"0.25",d:"M128 128h256v16H128zm0 240h256v16H128zm0-240v256h-16V128zm256 0v256h16V128z"}),G.jsx("circle",{cx:"128",cy:"128",r:"8"}),G.jsx("circle",{cx:"384",cy:"128",r:"8"}),G.jsx("circle",{cx:"128",cy:"384",r:"8"}),G.jsx("circle",{cx:"384",cy:"384",r:"8"}),G.jsx("circle",{cx:"256",cy:"176",r:"14"}),G.jsx("path",{d:"M248 188h16v24h-16z"}),G.jsx("path",{d:"M256 200c-66.3 0-120 53.7-120 120h240c0-66.3-53.7-120-120-120z"}),G.jsx("path",{d:"M112 332h288v16c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-16z"}),G.jsx("path",{d:"M360 190l6 18 18 6-18 6-6 18-6-18-18-6 18-6z"}),G.jsx("path",{opacity:"0.7",d:"M160 210l4 12 12 4-12 4-4 12-4-12-12-4 12-4z"})]}),G.jsx("div",{style:{fontFamily:"monospace",opacity:.8},children:"OPTAIMEAL Prototype"})]})]}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"OPTAIMEAL Prototype"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"OPTAIMEAL is a full-stack meal planning and logistics web application built with React, TypeScript, FastAPI, and SQLite that streamlines custom menu curation and scheduling."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"SQL"}),G.jsx("span",{style:U,children:"Python"}),G.jsx("span",{style:U,children:"TypeScript"}),G.jsx("span",{style:U,children:"FastAPI"}),G.jsx("span",{style:U,children:"React"})]}),G.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:G.jsx("a",{href:"https://github.com/CaiaG/Optaimeal-Prototype/tree/dev",style:fe,children:"Code"})})]}),G.jsxs("div",{className:"project-card",style:S,children:[G.jsxs("div",{style:{...I,background:"#0f172a",color:"#38bdf8"},children:[G.jsx("div",{style:w}),G.jsxs("div",{style:{zIndex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[G.jsx("svg",{width:"50",height:"50",viewBox:"0 0 640 640",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",style:{marginBottom:"8px"},children:G.jsx("path",{d:"M310.6 194.3L243.4 222.5L243.4 107.2L188.7 297.5L243.4 273.3L243.4 403.6L310.6 194.3zM227.4 97.6L226.1 102.3L210.9 155.2C170.6 170.7 142 209.8 142 255.5C142 307.8 176.3 351.4 225.4 361L225.4 414.6C147.5 404.1 90 336.4 90 255.6C90 175.1 149.8 108.4 227.4 97.6zM538.8 544.8C527.6 556 515.7 557.1 510.2 555.3C504.8 553.5 483.1 535.4 449.8 510.9C416.5 486.3 416.2 475.2 406.8 454.2C397.4 433.3 376.4 411.6 349.3 401.8L339.6 387.1C314.9 404 286.6 414 258.3 415.8L260.4 409.2L276.3 359.7C322.8 347.8 357.2 305.7 357.2 255.5C357.2 201 318.8 153.4 261.2 148.4L261.2 96.3C344.4 101.4 410 170.8 410 255.6C410 289.2 398.8 320.3 381 346L395.6 355.6C405.4 382.7 427.1 403.6 448 413C468.9 422.4 480.2 422.7 504.8 456C529.4 489.2 547.5 510.9 549.3 516.3C551.1 521.7 550 533.6 538.8 544.8zM528.9 526.9C528.9 522.5 525.3 518.9 520.9 518.9C516.5 518.9 512.9 522.5 512.9 526.9C512.9 531.3 516.5 534.9 520.9 534.9C525.3 534.9 528.9 531.3 528.9 526.9z"})}),G.jsx("div",{style:{fontFamily:"monospace",opacity:.8},children:"DISTRIBUTED SEARCH"})]})]}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"Distributed Search Engine"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"A full-stack search engine with distributed crawling, indexing, and ranking across 50k+ pages. Includes scalable inverted index with hash-based partitioning that ranks 5k+ terms with TF-IDF and PageRank."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"Distributed Systems"}),G.jsx("span",{style:U,children:"Java"}),G.jsx("span",{style:U,children:"PageRank"}),G.jsx("span",{style:U,children:"Indexing"})]}),G.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:G.jsx("a",{href:"https://github.com/CaiaG/DistributedSearchEngine",style:fe,children:"Sample Code"})})]}),G.jsxs("div",{className:"project-card",style:S,children:[G.jsxs("div",{style:{...I,background:"#abf0e8ff",color:"#22524dff"},children:[G.jsx("div",{style:N}),G.jsxs("div",{style:{zIndex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[G.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginBottom:"8px"},children:[G.jsx("path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}),G.jsx("path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}),G.jsx("path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}),G.jsx("path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}),G.jsx("path",{d:"M6 18a4 4 0 0 1-1.967-.516"}),G.jsx("path",{d:"M12 13h4"}),G.jsx("path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}),G.jsx("path",{d:"M12 8h8"}),G.jsx("path",{d:"M16 8V5a2 2 0 0 1 2-2"}),G.jsx("circle",{cx:"16",cy:"13",r:".5"}),G.jsx("circle",{cx:"18",cy:"3",r:".5"}),G.jsx("circle",{cx:"20",cy:"21",r:".5"}),G.jsx("circle",{cx:"20",cy:"8",r:".5"})]}),G.jsx("div",{style:{fontFamily:"monospace",opacity:.8,fontSize:"0.75rem"},children:"MRI FEATURE ANALYSIS"})]})]}),G.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"600",margin:"0 0 0.5rem 0",textAlign:"left",color:"#0F172A"},children:"3D MRI Feature Analysis"}),G.jsx("p",{style:{fontSize:"0.98 rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.4",textAlign:"left",margin:"0 0 1rem 0"},children:"Built a 3D MRI preprocessing and classification pipeline using SimpleITK and MONAI. Trained the MRI data on a DenseNet3D and evaluated with accuracy & confusion matrix for features such as age and gender."}),G.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"},children:[G.jsx("span",{style:U,children:"Python"}),G.jsx("span",{style:U,children:"DenseNet3D"}),G.jsx("span",{style:U,children:"Monai"})]}),G.jsx("div",{style:{display:"flex",gap:"0.75rem",fontSize:"0.85rem"},children:G.jsx("a",{href:"https://github.com/CaiaG/MRIclassificationpipeline",style:fe,children:"Sample Code"})})]})]}),G.jsx("div",{style:P}),G.jsx("h2",{style:C,children:"Experience"}),G.jsxs("div",{children:[G.jsxs("div",{style:H,children:[G.jsxs("div",{style:T,children:[G.jsx("h3",{style:O,children:"Realtime Software Engineering Intern"}),G.jsx("span",{style:Y,children:"June 2025 – August 2025"})]}),G.jsx("p",{style:V,children:"Arthrex | Naples, FL"}),G.jsxs("ul",{style:J,children:[G.jsx("li",{children:"Prototyped a virtual assistant in Unreal Engine with custom C++ TTS/ASR pipelines containerized in Docker; demoed to AR/VR team lead on Arthrex’s Holodeck virtual production stage using Pixera for 3D projection."}),G.jsx("li",{children:"Integrated and tested real-time AI speech tools: Convai, NVIDIA ACE, Kokoro (via FastAPI), and NVIDIA Parakeet."}),G.jsx("li",{children:"Prototyped 5 interactive AR ads for Arthrex Vet team using the ImagineWebAR plugin for Unity."})]})]}),G.jsxs("div",{style:H,children:[G.jsxs("div",{style:T,children:[G.jsx("h3",{style:O,children:"Research Assistant for Department of Radiology"}),G.jsx("span",{style:Y,children:"June 2024 – September 2024"})]}),G.jsx("p",{style:V,children:"Penn Medicine | Remote"}),G.jsxs("ul",{style:J,children:[G.jsx("li",{children:"Used MONAI framework on ~500 MRI images to identify features that predict the development of Alzheimer's."}),G.jsx("li",{children:"Implemented models with DenseNet architecture to improve predictive accuracy from 50% to 85%."})]})]}),G.jsxs("div",{style:H,children:[G.jsxs("div",{style:T,children:[G.jsx("h3",{style:O,children:"CS Intern"}),G.jsx("span",{style:Y,children:"June 2023 – July 2023"})]}),G.jsx("p",{style:V,children:"University of Ghana Noguchi Memorial Institute for Medical Research | Ghana, Accra"}),G.jsxs("ul",{style:J,children:[G.jsx("li",{children:"Optimized food recognition AI (FRANI) to support nutrition programs in Global South schools."}),G.jsx("li",{children:"Consolidated 100+ class labels and boosted model performance by using Fastai, WandB, and Optuna."})]})]})]}),G.jsx("div",{style:P}),G.jsx("h2",{style:C,children:"Skills"}),G.jsx("p",{style:pe,children:"Programming Languages"}),G.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1.5rem"},children:["C/C++","Java","Python","Vite/React","SQL","R","GLSL"].map(B=>G.jsx("span",{style:{backgroundColor:"#2d728f",color:"#fdf9d2",padding:"0.35rem 0.75rem",borderRadius:"16px",fontSize:"0.85rem",fontWeight:"600"},children:B},B))}),G.jsx("p",{style:pe,children:"3D Graphics & Tools"}),G.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1.5rem"},children:["Maya","Blender","ZBrush","Houdini","Unity","Unreal Engine"].map(B=>G.jsx("span",{style:{backgroundColor:"#2d728f",color:"#fdf9d2",padding:"0.35rem 0.75rem",borderRadius:"16px",fontSize:"0.85rem",fontWeight:"600"},children:B},B))}),G.jsx("div",{style:P}),G.jsx("h2",{style:C,children:"Contact"}),G.jsxs("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"flex-start"},children:[G.jsx("a",{href:"mailto:caiaygelli@gmail.com",style:{...fe,fontSize:"1rem"},children:"caiaygelli@gmail.com"}),G.jsxs("div",{style:{display:"flex",gap:"1rem",fontSize:"0.95rem"},children:[G.jsx("a",{href:"https://www.linkedin.com/in/caia-gelli-14b6a3225/",style:fe,children:"LinkedIn"}),G.jsx("span",{style:{color:"#1e3158ff"},children:"|"}),G.jsx("a",{href:"https://github.com/CaiaG",style:fe,children:"GitHub"})]})]}),G.jsx("div",{style:{marginTop:"4rem",textAlign:"left"},children:G.jsx("a",{href:"https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/",style:{color:"#6B7280",fontWeight:"400",textDecoration:"none",fontSize:"0.75rem"},children:"Free SVG Backgrounds and Patterns by SVGBackgrounds.com"})})]})})]})]})}function u2(){const s=Yh();me.useEffect(()=>{window.scrollTo(0,0)},[]);const e=_=>_.img?_.img:_.demoUrl?`https://s0.wp.com/mshots/v1/${encodeURIComponent(_.demoUrl)}?w=800&h=500`:null,r=`url("data:image/svg+xml;utf8,${`
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
  `.replace(/\n/g,"").replace(/\s+/g," ")}")`,l=[{id:3,title:"Monte Carlo Path Tracer",year:"'24",description:"Physically-based Monte Carlo Path Tracer built from scratch in C++ and GLSL. Solves the rendering equation with global illumination, specular reflection/transmission, Cook-Torrance BSDFs, and Multiple Importance Sampling (MIS).",tags:["C++","GLSL","RAY TRACING","MIS","PBR"],label:"PATH TRACER",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-full.jpg"},{id:1,title:"SPH Fluid Simulation & Procedural River",year:"'25",description:"Custom Smoothed Particle Hydrodynamics liquid simulator and river pipeline in Houdini using VEX wrangles. Implements pressure, viscosity, and surface tension models supporting 3K+ particles at 30 FPS via XSPH smoothing.",tags:["HOUDINI","VEX","SIMULATION","C++"],label:"SPH FLUID SIM",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/168e6f10184f02302ad51bb1399ba68bc9acca85/src/assets/redsequence.jpg"},{id:2,title:"Mini Minecraft Engine",year:"'24",description:"Voxel game engine built in C++ and GLSL focusing on real-time rendering performance. Features procedural terrain generation across 4 biomes, multithreaded chunking, custom block texturing pipelines, and L-systems.",tags:["C++","GLSL","OPENGL","PROCEDURAL"],label:"MINI MINECRAFT",videoSrc:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/Mini%20Minecraft%20-%20Made%20with%20Clipchamp.mp4"},{id:5,title:"GLSL Raymarcher & SDF Scene",year:"'24",description:"High-performance Signed Distance Field (SDF) ray-marching engine in GLSL and C++. Supports infinite domain repetition, dynamic CSG geometry, Cook-Torrance BSDF, and approximated subsurface scattering.",tags:["GLSL","C++","SDF","RAY MARCHING"],label:"GLSL RAYMARCHER",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sdfyoshi%20(1).jpg"},{id:6,title:"PBR Material Pipeline",year:"'24",description:"Physically-based material shading engine integrated into a custom path tracer. Implements complete texture attribute pipelines (albedo, roughness, metallic, normal mapping, AO) grounded in microfacet theory.",tags:["C++","PBR","SHADERS","RAY TRACING"],label:"PBR MATERIALS",videoSrc:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/pbrrec.mp4"},{id:7,title:"Analytical Water Shader",year:"'26",description:"Real-time water shader on Shadertoy using multi-layered wave equations with golden-ratio phase shifts, ray-marched heightfield intersection, Horizon AO, and multi-sample Subsurface Scattering.",tags:["GLSL","SHADERTOY","RAY MARCHING"],label:"WATER SHADER",videoSrc:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/wadasahder.mp4"},{id:14,title:"C++ Software Rasterizer",year:"'24",description:"Built-from-scratch CPU software rasterization pipeline in C++. Implements core graphics stages including vertex processing, triangle clipping, perspective-correct attribute interpolation, and z-buffering.",tags:["C++","RASTERIZATION","PIPELINE"],label:"SOFTWARE RASTERIZER",img:null},{id:4,title:"CPU/GPU Ray Tracer",year:"'24",description:"Custom ray tracing engine built from scratch in C++ and GLSL. Implements ray-object intersection mathematics, acceleration structures, and illumination models for high-fidelity image synthesis.",tags:["C++","GLSL","RAY TRACING"],label:"RAY TRACER",img:null},{id:11,title:"Dragon Blood Tree Kit & UE5 HISMs",year:"'26",description:"Procedural fractal tree generator in Blender integrated into Unreal Engine 5 using Hierarchical Instanced Static Meshes (HISMs) and multi-level LOD systems optimized for real-time rendering.",tags:["UE5","BLENDER","PROCEDURAL","HISMs"],label:"DRAGON TREE KIT",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/treerev1.png"},{id:9,title:"Houdini Procedural Landscape",year:"'26",description:"Large-scale forested terrain generation pipeline in Houdini. Uses heightfield operators for land shaping, intelligent point scattering for vegetation, and custom ambient lighting pipelines.",tags:["HOUDINI","PROCEDURAL","ENVIRONMENT"],label:"PROCEDURAL TERRAIN",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-hillytreespostprocessed-min.webp"},{id:13,title:"Mario Custom Shaders & Post-Processing",year:"'24",description:"Shader suite featuring Blinn-Phong, procedural chrome, and MatCap materials on a Mario model, alongside full post-processing pipelines including Gaussian blur, bloom, and color filtering.",tags:["GLSL","SHADERS","POST-PROCESSING"],label:"MARIO SHADERS",videoSrc:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/MarioShaders.mp4"},{id:10,title:"Damascus Sword Asset",year:"'26",description:"High-fidelity Damascus steel 3D asset featuring custom interpolated noise texture maps for folded-steel patterns, paired with custom PBR material networks for leather, gold, and rope.",tags:["BLENDER","PBR","3D MODELING"],label:"DAMASCUS SWORD",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-sword3.webp"},{id:8,title:"Residential Environment Study",year:"'26",description:"Architectural study of a multi-story residential building based on photographic reference. Built in Blender with parameterized material networks for precise spatial and texture definition.",tags:["BLENDER","3D MODELING","TEXTURING"],label:"RESIDENTIAL STUDY",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-shackwip-1.webp"},{id:12,title:"Pink Room Interior Environment",year:"'24",description:"Stylized architectural interior environment study. Focuses on color palette cohesion, dramatic lighting composition, and mood recreation based on photographic reference.",tags:["3D MODELING","LIGHTING","ENVIRONMENT"],label:"PINK ROOM STUDY",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia-gelli-caiagellienvfinal.jpg"},{id:15,title:"3D Subterranean Cave Scene",year:null,description:"Organic cave environment sculpted using noise-driven displacement maps and geometric deformation. Features material networks contrasting wet and dry stone surfaces.",tags:["3D MODELING","TEXTURING","ENVIRONMENT"],label:"3D CAVE SCENE",img:"https://raw.githubusercontent.com/CaiaG/caiaWebsite/main/src/assets/caia_gelli_EV_01.jpg"},{id:16,title:"Procedural Erosion in Houdini",year:"'26",isWip:!0,description:"In-progress Houdini system prototyping noise-based weathering and volume erosion to simulate dust accumulation and natural weathering on 3D assets.",tags:["HOUDINI","VEX","PROCEDURAL","WIP"],label:"PROCEDURAL EROSION",img:null}],c={maxWidth:"1200px",margin:"0 auto",padding:"0 1.5rem"},f={padding:"1.25rem",borderRadius:"14px",backgroundColor:"#3B8EA5",display:"flex",flexDirection:"column",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.15)",overflow:"hidden",border:"1px solid #2d728f",textAlign:"left"},p={backgroundColor:"#1e3158",color:"#fdf9d2",fontSize:"0.72rem",fontWeight:"700",padding:"0.2rem 0.55rem",borderRadius:"4px",letterSpacing:"0.04em",fontFamily:"monospace"},m={backgroundColor:"#8B263E",color:"#fdf9d2",fontSize:"0.72rem",fontWeight:"800",padding:"0.2rem 0.55rem",borderRadius:"4px",letterSpacing:"0.05em",fontFamily:"monospace"},h={width:"100%",aspectRatio:"16/10",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:"600",letterSpacing:"0.15em",textTransform:"uppercase",border:"1px solid #334155",position:"relative",overflow:"hidden",background:"#1e3158",color:"#38bdf8"},v={position:"absolute",inset:0,backgroundImage:"linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",backgroundSize:"20px 20px",pointerEvents:"none"};return G.jsxs("div",{children:[G.jsx("style",{children:`
        body, html { 
          margin: 0; 
          background-image: ${r};
          background-attachment: fixed;
          background-size: cover;
          background-color: #2d728f; 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .cg-card {
          border-radius: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .cg-card:hover { 
          transform: translateY(-6px) scale(1.02) !important;
          box-shadow: 0 0 25px rgba(41, 135, 160, 0.6) !important;
          background-color: #51a4bb !important;
          border-radius: 20px !important;
        }

        .back-btn {
          background-color: #1e3158;
          color: #fdf9d2;
          border: 1px solid #3B8EA5;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .back-btn:hover {
          background-color: #2d728f;
          transform: translateX(-3px);
        }
      `}),G.jsxs("div",{style:{maxWidth:"1200px",margin:"2rem auto",borderRadius:"10px",overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)",position:"relative",isolation:"isolate"},children:[G.jsx("div",{style:{backgroundColor:"#2d728f",padding:"2.5rem 0 2rem 0",position:"relative"},children:G.jsxs("div",{style:c,children:[G.jsx("button",{className:"back-btn",onClick:()=>s("/"),children:"← Back to Main Portfolio"}),G.jsx("h1",{style:{fontSize:"2.75rem",fontWeight:"800",margin:"1.25rem 0 0.5rem 0",color:"#fdf9d2",lineHeight:"1.1"},children:"Computer Graphics Projects"}),G.jsx("p",{style:{color:"#fdf9d2",fontSize:"1.05rem",margin:"1.0rem auto 0.5rem auto",opacity:.9,maxWidth:"800px",lineHeight:"1.5",textAlign:"center"},children:"Real-time rendering engines, physically-based ray tracers, procedural environment systems, VEX fluid solvers, and custom GLSL shader pipelines."})]})}),G.jsx("div",{style:{backgroundColor:"#fdf9d2ff",minHeight:"80vh",padding:"2.5rem 0 4rem 0"},children:G.jsx("div",{style:c,children:G.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"1.5rem"},children:l.map(_=>G.jsxs("div",{className:"cg-card",style:f,children:[_.videoSrc?G.jsx("video",{src:_.videoSrc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem",backgroundColor:"#1e3158"}}):e(_)?G.jsx("img",{src:e(_),alt:_.title,style:{width:"100%",aspectRatio:"16/10",objectFit:"cover",borderRadius:"8px",marginBottom:"1rem",backgroundColor:"#1e3158"}}):G.jsxs("div",{style:h,children:[G.jsx("div",{style:v}),G.jsx("div",{style:{zIndex:1,fontFamily:"monospace",opacity:.85},children:_.label})]}),G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"0.5rem",marginBottom:"0.4rem"},children:[G.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"700",margin:0,color:"#0F172A",lineHeight:"1.25"},children:_.title}),_.year&&G.jsx("span",{style:{fontSize:"0.8rem",fontWeight:"700",color:"#1e3158",fontFamily:"monospace"},children:_.year})]}),G.jsx("p",{style:{fontSize:"0.92rem",color:"#1f2734ff",flexGrow:1,lineHeight:"1.45",textAlign:"left",margin:"0 0 1rem 0"},children:_.description}),G.jsx("div",{style:{display:"flex",gap:"0.35rem",flexWrap:"wrap"},children:_.tags.map(g=>G.jsx("span",{style:g==="WIP"?m:p,children:g},g))})]},_.id))})})})]})]})}function f2(){return G.jsx("div",{children:G.jsx("main",{children:G.jsxs(pM,{children:[G.jsx(Ic,{path:"/",element:G.jsx(c2,{})}),G.jsx(Ic,{path:"/CGProjects",element:G.jsx(u2,{})}),G.jsx(Ic,{path:"*",element:G.jsx("div",{children:"Custom 404 Page Content"})})]})})})}const t_=document.getElementById("root");t_?my.createRoot(t_).render(G.jsx(me.StrictMode,{children:G.jsx(BM,{children:G.jsx(f2,{})})})):console.error("Could not find root element to mount the application.");
