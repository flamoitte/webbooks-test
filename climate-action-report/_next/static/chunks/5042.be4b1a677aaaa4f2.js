"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5042],{7462:function(e,n,t){t.d(n,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}},1413:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}},91:function(e,n,t){t.d(n,{Z:function(){return r}});function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},4902:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(907),a=t(9199),o=t(181);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5042:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(7294),a=t(2556),o=t(3126),u=t(1413),c=t(4942),i=t(4902),l=t(7685),s=t(1002),f=t(7462),d=t(91);t(3935),t(9681);var v,m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ v=m,function(){var e={}.hasOwnProperty;function n(){for(var t=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)){if(a.length){var u=n.apply(null,a);u&&t.push(u)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){t.push(a.toString());continue}for(var c in a)e.call(a,c)&&a[c]&&t.push(c)}}}return t.join(" ")}v.exports?(n.default=n,v.exports=n):window.classNames=n}();var E=(0,a.g)(m.exports);function b(e){var n=r.useRef();return n.current=e,r.useCallback(function(){for(var e,t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))},[])}var g="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,h=function(e,n){var t=r.useRef(!0);g(function(){if(!t.current)return e()},n),g(function(){return t.current=!1,function(){t.current=!0}},[])};function p(e){var n=r.useRef(!1),t=r.useState(e),a=(0,l.Z)(t,2),o=a[0],u=a[1];return r.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]),[o,function(e,t){t&&n.current||u(e)}]}function y(e){return void 0!==e}var C={},N=r.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),S={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=S.F1&&n<=S.F12)return!1;switch(n){case S.ALT:case S.CAPS_LOCK:case S.CONTEXT_MENU:case S.CTRL:case S.DOWN:case S.END:case S.ESC:case S.HOME:case S.INSERT:case S.LEFT:case S.MAC_FF_META:case S.META:case S.NUMLOCK:case S.NUM_CENTER:case S.PAGE_DOWN:case S.PAGE_UP:case S.PAUSE:case S.PRINT_SCREEN:case S.RIGHT:case S.SHIFT:case S.UP:case S.WIN_KEY:case S.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=S.ZERO&&e<=S.NINE||e>=S.NUM_ZERO&&e<=S.NUM_MULTIPLY||e>=S.A&&e<=S.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case S.SPACE:case S.QUESTION_MARK:case S.NUM_PLUS:case S.NUM_MINUS:case S.NUM_PERIOD:case S.NUM_DIVISION:case S.SEMICOLON:case S.DASH:case S.EQUALS:case S.COMMA:case S.PERIOD:case S.SLASH:case S.APOSTROPHE:case S.SINGLE_QUOTE:case S.OPEN_SQUARE_BRACKET:case S.BACKSLASH:case S.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};function x(e,n,t,r){var a=(n-t)/(r-t),o={};switch(e){case"rtl":o.right="".concat(100*a,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*a,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*a,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*a,"%"),o.transform="translateX(-50%)"}return o}function M(e,n){return Array.isArray(e)?e[n]:e}var O=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],R=r.forwardRef(function(e,n){var t,a,o=e.prefixCls,i=e.value,l=e.valueIndex,s=e.onStartMove,v=e.style,m=e.render,b=e.dragging,g=e.onOffsetChange,h=(0,d.Z)(e,O),p=r.useContext(N),y=p.min,C=p.max,R=p.direction,P=p.disabled,I=p.keyboard,k=p.range,T=p.tabIndex,Z=p.ariaLabelForHandle,A=p.ariaLabelledByForHandle,_=p.ariaValueTextFormatterForHandle,L=p.styles,F=p.classNames,U="".concat(o,"-handle"),w=function(e){P||s(e,l)},D=x(R,i,y,C),H=r.createElement("div",(0,f.Z)({ref:n,className:E(U,(t={},(0,c.Z)(t,"".concat(U,"-").concat(l+1),k),(0,c.Z)(t,"".concat(U,"-dragging"),b),t),F.handle),style:(0,u.Z)((0,u.Z)((0,u.Z)({},D),v),L.handle),onMouseDown:w,onTouchStart:w,onKeyDown:function(e){if(!P&&I){var n=null;switch(e.which||e.keyCode){case S.LEFT:n="ltr"===R||"btt"===R?-1:1;break;case S.RIGHT:n="ltr"===R||"btt"===R?1:-1;break;case S.UP:n="ttb"!==R?1:-1;break;case S.DOWN:n="ttb"!==R?-1:1;break;case S.HOME:n="min";break;case S.END:n="max";break;case S.PAGE_UP:n=2;break;case S.PAGE_DOWN:n=-2}null!==n&&(e.preventDefault(),g(n,l))}},tabIndex:P?null:M(T,l),role:"slider","aria-valuemin":y,"aria-valuemax":C,"aria-valuenow":i,"aria-disabled":P,"aria-label":M(Z,l),"aria-labelledby":M(A,l),"aria-valuetext":null===(a=M(_,l))||void 0===a?void 0:a(i),"aria-orientation":"ltr"===R||"rtl"===R?"horizontal":"vertical"},h));return m&&(H=m(H,{index:l,prefixCls:o,value:i,dragging:b})),H}),P=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],I=r.forwardRef(function(e,n){var t=e.prefixCls,a=e.style,o=e.onStartMove,u=e.onOffsetChange,c=e.values,i=e.handleRender,l=e.draggingIndex,s=(0,d.Z)(e,P),v=r.useRef({});return r.useImperativeHandle(n,function(){return{focus:function(e){var n;null===(n=v.current[e])||void 0===n||n.focus()}}}),r.createElement(r.Fragment,null,c.map(function(e,n){return r.createElement(R,(0,f.Z)({ref:function(e){e?v.current[n]=e:delete v.current[n]},dragging:l===n,prefixCls:t,style:M(a,n),key:n,value:e,valueIndex:n,onStartMove:o,onOffsetChange:u,render:i},s))}))});function k(e){var n="touches"in e?e.touches[0]:e;return{pageX:n.pageX,pageY:n.pageY}}function T(e){var n=e.prefixCls,t=e.style,a=e.children,o=e.value,i=e.onClick,l=r.useContext(N),s=l.min,f=l.max,d=l.direction,v=l.includedStart,m=l.includedEnd,b=l.included,g="".concat(n,"-text"),h=x(d,o,s,f);return r.createElement("span",{className:E(g,(0,c.Z)({},"".concat(g,"-active"),b&&v<=o&&o<=m)),style:(0,u.Z)((0,u.Z)({},h),t),onMouseDown:function(e){e.stopPropagation()},onClick:function(){i(o)}},a)}function Z(e){var n=e.prefixCls,t=e.marks,a=e.onClick,o="".concat(n,"-mark");return t.length?r.createElement("div",{className:o},t.map(function(e){var n=e.value,t=e.style,u=e.label;return r.createElement(T,{key:n,prefixCls:o,style:t,value:n,onClick:a},u)})):null}function A(e){var n=e.prefixCls,t=e.value,a=e.style,o=e.activeStyle,i=r.useContext(N),l=i.min,s=i.max,f=i.direction,d=i.included,v=i.includedStart,m=i.includedEnd,b="".concat(n,"-dot"),g=d&&v<=t&&t<=m,h=(0,u.Z)((0,u.Z)({},x(f,t,l,s)),"function"==typeof a?a(t):a);return g&&(h=(0,u.Z)((0,u.Z)({},h),"function"==typeof o?o(t):o)),r.createElement("span",{className:E(b,(0,c.Z)({},"".concat(b,"-active"),g)),style:h})}function _(e){var n=e.prefixCls,t=e.marks,a=e.dots,o=e.style,u=e.activeStyle,c=r.useContext(N),i=c.min,l=c.max,s=c.step,f=r.useMemo(function(){var e=new Set;if(t.forEach(function(n){e.add(n.value)}),a&&null!==s)for(var n=i;n<=l;)e.add(n),n+=s;return Array.from(e)},[i,l,s,a,t]);return r.createElement("div",{className:"".concat(n,"-step")},f.map(function(e){return r.createElement(A,{prefixCls:n,key:e,value:e,style:o,activeStyle:u})}))}function L(e){var n,t=e.prefixCls,a=e.style,o=e.start,i=e.end,l=e.index,s=e.onStartMove,f=e.replaceCls,d=r.useContext(N),v=d.direction,m=d.min,b=d.max,g=d.disabled,h=d.range,p=d.classNames,y="".concat(t,"-track"),C=(o-m)/(b-m),S=(i-m)/(b-m),x=function(e){!g&&s&&s(e,-1)},M={};switch(v){case"rtl":M.right="".concat(100*C,"%"),M.width="".concat(100*S-100*C,"%");break;case"btt":M.bottom="".concat(100*C,"%"),M.height="".concat(100*S-100*C,"%");break;case"ttb":M.top="".concat(100*C,"%"),M.height="".concat(100*S-100*C,"%");break;default:M.left="".concat(100*C,"%"),M.width="".concat(100*S-100*C,"%")}var O=f||E(y,((0,c.Z)(n={},"".concat(y,"-").concat(l+1),null!==l&&h),(0,c.Z)(n,"".concat(t,"-track-draggable"),s),n),p.track);return r.createElement("div",{className:O,style:(0,u.Z)((0,u.Z)({},M),a),onMouseDown:x,onTouchStart:x})}function F(e){var n=e.prefixCls,t=e.style,a=e.values,o=e.startPoint,c=e.onStartMove,i=r.useContext(N),l=i.included,s=i.range,f=i.min,d=i.styles,v=i.classNames,m=r.useMemo(function(){if(!s){if(0===a.length)return[];var e=null!=o?o:f,n=a[0];return[{start:Math.min(e,n),end:Math.max(e,n)}]}for(var t=[],r=0;r<a.length-1;r+=1)t.push({start:a[r],end:a[r+1]});return t},[a,s,o,f]),b=null;return(v.tracks||d.tracks)&&(b=r.createElement(L,{index:null,prefixCls:n,start:m[0].start,end:m[m.length-1].end,replaceCls:E(v.tracks,"".concat(n,"-tracks")),style:d.tracks})),l?r.createElement(r.Fragment,null,b,m.map(function(e,a){var o=e.start,i=e.end;return r.createElement(L,{index:a,prefixCls:n,style:(0,u.Z)((0,u.Z)({},M(t,a)),d.track),start:o,end:i,key:a,onStartMove:c})})):null}var U=r.forwardRef(function(e,n){var t,a,o,f,d,v,m,g,S,x,M,O,R,P,T,A,L,U,w,D,H,j,V,K,q,B,G,W,Y,X,Q,z,$,J,ee,en,et,er,ea,eo,eu,ec,ei,el,es,ef,ed=e.prefixCls,ev=void 0===ed?"rc-slider":ed,em=e.className,eE=e.style,eb=e.classNames,eg=e.styles,eh=e.disabled,ep=void 0!==eh&&eh,ey=e.keyboard,eC=void 0===ey||ey,eN=e.autoFocus,eS=e.onFocus,ex=e.onBlur,eM=e.min,eO=void 0===eM?0:eM,eR=e.max,eP=void 0===eR?100:eR,eI=e.step,ek=void 0===eI?1:eI,eT=e.value,eZ=e.defaultValue,eA=e.range,e_=e.count,eL=e.onChange,eF=e.onBeforeChange,eU=e.onAfterChange,ew=e.allowCross,eD=e.pushable,eH=void 0!==eD&&eD,ej=e.draggableTrack,eV=e.reverse,eK=e.vertical,eq=e.included,eB=void 0===eq||eq,eG=e.startPoint,eW=e.trackStyle,eY=e.handleStyle,eX=e.railStyle,eQ=e.dotStyle,ez=e.activeDotStyle,e$=e.marks,eJ=e.dots,e0=e.handleRender,e1=e.tabIndex,e2=void 0===e1?0:e1,e9=e.ariaLabelForHandle,e3=e.ariaLabelledByForHandle,e4=e.ariaValueTextFormatterForHandle,e5=r.useRef(),e8=r.useRef(),e6=r.useMemo(function(){return eK?eV?"ttb":"btt":eV?"rtl":"ltr"},[eV,eK]),e7=r.useMemo(function(){return isFinite(eO)?eO:0},[eO]),ne=r.useMemo(function(){return isFinite(eP)?eP:100},[eP]),nn=r.useMemo(function(){return null!==ek&&ek<=0?1:ek},[ek]),nt=r.useMemo(function(){return"boolean"==typeof eH?!!eH&&nn:eH>=0&&eH},[eH,nn]),nr=r.useMemo(function(){return Object.keys(e$||{}).map(function(e){var n=e$[e],t={value:Number(e)};return n&&"object"===(0,s.Z)(n)&&!r.isValidElement(n)&&("label"in n||"style"in n)?(t.style=n.style,t.label=n.label):t.label=n,t}).filter(function(e){var n=e.label;return n||"number"==typeof n}).sort(function(e,n){return e.value-n.value})},[e$]),na=(V=void 0===ew||ew,K=r.useCallback(function(e){return isFinite(e),Math.max(e7,Math.min(ne,e))},[e7,ne]),q=r.useCallback(function(e){if(null!==nn){var n=e7+Math.round((K(e)-e7)/nn)*nn,t=function(e){return(String(e).split(".")[1]||"").length},r=Math.max(t(nn),t(ne),t(e7)),a=Number(n.toFixed(r));return e7<=a&&a<=ne?a:null}return null},[nn,e7,ne,K]),B=r.useCallback(function(e){var n=K(e),t=nr.map(function(e){return e.value});null!==nn&&t.push(q(e)),t.push(e7,ne);var r=t[0],a=ne-e7;return t.forEach(function(e){var t=Math.abs(n-e);t<=a&&(r=e,a=t)}),r},[e7,ne,nr,nn,K,q]),G=function e(n,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof t){var o,u=n[r],c=u+t,l=[];nr.forEach(function(e){l.push(e.value)}),l.push(e7,ne),l.push(q(u));var s=t>0?1:-1;"unit"===a?l.push(q(u+s*nn)):l.push(q(c)),l=l.filter(function(e){return null!==e}).filter(function(e){return t<0?e<=u:e>=u}),"unit"===a&&(l=l.filter(function(e){return e!==u}));var f="unit"===a?u:c,d=Math.abs((o=l[0])-f);if(l.forEach(function(e){var n=Math.abs(e-f);n<d&&(o=e,d=n)}),void 0===o)return t<0?e7:ne;if("dist"===a)return o;if(Math.abs(t)>1){var v=(0,i.Z)(n);return v[r]=o,e(v,t-s,r,a)}return o}return"min"===t?e7:"max"===t?ne:void 0},W=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[t],o=G(e,n,t,r);return{value:o,changed:o!==a}},Y=function(e){return null===nt&&0===e||"number"==typeof nt&&e<nt},[B,function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e.map(B),o=a[t],u=G(a,n,t,r);if(a[t]=u,!1===V){var c=nt||0;t>0&&a[t-1]!==o&&(a[t]=Math.max(a[t],a[t-1]+c)),t<a.length-1&&a[t+1]!==o&&(a[t]=Math.min(a[t],a[t+1]-c))}else if("number"==typeof nt||null===nt){for(var i=t+1;i<a.length;i+=1)for(var l=!0;Y(a[i]-a[i-1])&&l;){var s=W(a,1,i);a[i]=s.value,l=s.changed}for(var f=t;f>0;f-=1)for(var d=!0;Y(a[f]-a[f-1])&&d;){var v=W(a,-1,f-1);a[f-1]=v.value,d=v.changed}for(var m=a.length-1;m>0;m-=1)for(var E=!0;Y(a[m]-a[m-1])&&E;){var b=W(a,-1,m-1);a[m-1]=b.value,E=b.changed}for(var g=0;g<a.length-1;g+=1)for(var h=!0;Y(a[g+1]-a[g])&&h;){var p=W(a,1,g+1);a[g+1]=p.value,h=p.changed}}return{value:a[t],values:a}}]),no=(0,l.Z)(na,2),nu=no[0],nc=no[1],ni=(Q=(X={value:eT}).defaultValue,z=X.value,$=X.onChange,J=X.postState,ee=p(function(){return y(z)?z:y(Q)?"function"==typeof Q?Q():Q:"function"==typeof eZ?eZ():eZ}),et=(en=(0,l.Z)(ee,2))[0],er=en[1],ea=void 0!==z?z:et,eo=J?J(ea):ea,eu=b($),ec=p([ea]),el=(ei=(0,l.Z)(ec,2))[0],es=ei[1],h(function(){var e=el[0];et!==e&&eu(et,e)},[el]),h(function(){y(z)||er(z)},[z]),[eo,b(function(e,n){er(e,n),es([ea],n)})]),nl=(0,l.Z)(ni,2),ns=nl[0],nf=nl[1],nd=r.useMemo(function(){var e=null==ns?[]:Array.isArray(ns)?ns:[ns],n=(0,l.Z)(e,1)[0],t=null===ns?[]:[void 0===n?e7:n];if(eA){if(t=(0,i.Z)(e),e_||void 0===ns){var r,a=e_>=0?e_+1:2;for(t=t.slice(0,a);t.length<a;)t.push(null!==(r=t[t.length-1])&&void 0!==r?r:e7)}t.sort(function(e,n){return e-n})}return t.forEach(function(e,n){t[n]=nu(e)}),t},[ns,eA,e7,e_,nu]),nv=r.useRef(nd);nv.current=nd;var nm=function(e){return eA?e:e[0]},nE=function(e){var n=(0,i.Z)(e).sort(function(e,n){return e-n});eL&&!function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Set;return function e(n,a){var o,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=r.has(n);if(o="Warning: There may be circular references",!c||C[o]||(C[o]=!0),c)return!1;if(n===a)return!0;if(t&&u>1)return!1;r.add(n);var i=u+1;if(Array.isArray(n)){if(!Array.isArray(a)||n.length!==a.length)return!1;for(var l=0;l<n.length;l++)if(!e(n[l],a[l],i))return!1;return!0}if(n&&a&&"object"===(0,s.Z)(n)&&"object"===(0,s.Z)(a)){var f=Object.keys(n);return f.length===Object.keys(a).length&&f.every(function(t){return e(n[t],a[t],i)})}return!1}(e,n)}(n,nv.current,!0)&&eL(nm(n)),nf(n)},nb=function(e){if(!ep){var n=0,t=ne-e7;nd.forEach(function(r,a){var o=Math.abs(e-r);o<=t&&(t=o,n=a)});var r=(0,i.Z)(nd);r[n]=e,eA&&!nd.length&&void 0===e_&&r.push(e),null==eF||eF(nm(r)),nE(r),null==eU||eU(nm(r))}},ng=r.useState(null),nh=(0,l.Z)(ng,2),np=nh[0],ny=nh[1];r.useEffect(function(){if(null!==np){var e=nd.indexOf(np);e>=0&&e5.current.focus(e)}ny(null)},[np]);var nC=r.useMemo(function(){return(!ej||null!==nn)&&ej},[ej,nn]),nN=(t=function(){null==eU||eU(nm(nv.current))},a=r.useState(null),f=(o=(0,l.Z)(a,2))[0],d=o[1],v=r.useState(-1),g=(m=(0,l.Z)(v,2))[0],S=m[1],x=r.useState(nd),O=(M=(0,l.Z)(x,2))[0],R=M[1],P=r.useState(nd),A=(T=(0,l.Z)(P,2))[0],L=T[1],U=r.useRef(null),w=r.useRef(null),r.useEffect(function(){-1===g&&R(nd)},[nd,g]),r.useEffect(function(){return function(){document.removeEventListener("mousemove",U.current),document.removeEventListener("mouseup",w.current),document.removeEventListener("touchmove",U.current),document.removeEventListener("touchend",w.current)}},[]),D=function(e,n){O.some(function(n,t){return n!==e[t]})&&(void 0!==n&&d(n),R(e),nE(e))},H=function(e,n){if(-1===e){var t=A[0],r=A[A.length-1],a=n*(ne-e7);a=Math.min(a=Math.max(a,e7-t),ne-r),a=nu(t+a)-t,D(A.map(function(e){return e+a}))}else{var o=(0,i.Z)(O);o[e]=A[e];var u=nc(o,(ne-e7)*n,e,"dist");D(u.values,u.value)}},(j=r.useRef(H)).current=H,[g,f,r.useMemo(function(){var e=(0,i.Z)(nd).sort(function(e,n){return e-n}),n=(0,i.Z)(O).sort(function(e,n){return e-n});return e.every(function(e,t){return e===n[t]})?O:nd},[nd,O]),function(e,n){e.stopPropagation();var r=nd[n];S(n),d(r),L(nd);var a=k(e),o=a.pageX,u=a.pageY,c=function(e){e.preventDefault();var t,r=k(e),a=r.pageX,c=r.pageY,i=a-o,l=c-u,s=e8.current.getBoundingClientRect(),f=s.width,d=s.height;switch(e6){case"btt":t=-l/d;break;case"ttb":t=l/d;break;case"rtl":t=-i/f;break;default:t=i/f}j.current(n,t)},i=function e(n){n.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",c),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",c),U.current=null,w.current=null,S(-1),t()};document.addEventListener("mouseup",i),document.addEventListener("mousemove",c),document.addEventListener("touchend",i),document.addEventListener("touchmove",c),U.current=c,w.current=i}]),nS=(0,l.Z)(nN,4),nx=nS[0],nM=nS[1],nO=nS[2],nR=nS[3],nP=function(e,n){nR(e,n),null==eF||eF(nm(nv.current))},nI=-1!==nx;r.useEffect(function(){if(!nI){var e=nd.lastIndexOf(nM);e5.current.focus(e)}},[nI]);var nk=r.useMemo(function(){return(0,i.Z)(nO).sort(function(e,n){return e-n})},[nO]),nT=r.useMemo(function(){return eA?[nk[0],nk[nk.length-1]]:[e7,nk[0]]},[nk,eA,e7]),nZ=(0,l.Z)(nT,2),nA=nZ[0],n_=nZ[1];r.useImperativeHandle(n,function(){return{focus:function(){e5.current.focus(0)},blur:function(){var e=document.activeElement;e8.current.contains(e)&&(null==e||e.blur())}}}),r.useEffect(function(){eN&&e5.current.focus(0)},[]);var nL=r.useMemo(function(){return{min:e7,max:ne,direction:e6,disabled:ep,keyboard:eC,step:nn,included:eB,includedStart:nA,includedEnd:n_,range:eA,tabIndex:e2,ariaLabelForHandle:e9,ariaLabelledByForHandle:e3,ariaValueTextFormatterForHandle:e4,styles:eg||{},classNames:eb||{}}},[e7,ne,e6,ep,eC,nn,eB,nA,n_,eA,e2,e9,e3,e4,eg,eb]);return r.createElement(N.Provider,{value:nL},r.createElement("div",{ref:e8,className:E(ev,em,(ef={},(0,c.Z)(ef,"".concat(ev,"-disabled"),ep),(0,c.Z)(ef,"".concat(ev,"-vertical"),eK),(0,c.Z)(ef,"".concat(ev,"-horizontal"),!eK),(0,c.Z)(ef,"".concat(ev,"-with-marks"),nr.length),ef)),style:eE,onMouseDown:function(e){e.preventDefault();var n,t=e8.current.getBoundingClientRect(),r=t.width,a=t.height,o=t.left,u=t.top,c=t.bottom,i=t.right,l=e.clientX,s=e.clientY;switch(e6){case"btt":n=(c-s)/a;break;case"ttb":n=(s-u)/a;break;case"rtl":n=(i-l)/r;break;default:n=(l-o)/r}nb(nu(e7+n*(ne-e7)))}},r.createElement("div",{className:E("".concat(ev,"-rail"),null==eb?void 0:eb.rail),style:(0,u.Z)((0,u.Z)({},eX),null==eg?void 0:eg.rail)}),r.createElement(F,{prefixCls:ev,style:eW,values:nk,startPoint:eG,onStartMove:nC?nP:null}),r.createElement(_,{prefixCls:ev,marks:nr,dots:eJ,style:eQ,activeStyle:ez}),r.createElement(I,{ref:e5,prefixCls:ev,style:eY,values:nO,draggingIndex:nx,onStartMove:nP,onOffsetChange:function(e,n){if(!ep){var t=nc(nd,e,n);null==eF||eF(nm(nd)),nE(t.values),null==eU||eU(nm(t.values)),ny(t.value)}},onFocus:eS,onBlur:ex,handleRender:e0}),r.createElement(Z,{prefixCls:ev,marks:nr,onClick:nb})))});let w=e=>{let{label:n=null,frequency:t,isRange:u,minVarName:c,maxVarName:i,vars:l,changeVar:s,lang:f,codeLabelMapping:d,hideTitle:v,isStandalone:m}=e,E=(0,r.useMemo)(()=>(0,a.a)(t||{},f),[t,f]),[b,g]=(0,r.useState)(()=>({minCode:l[c],minIndex:(0,a.f)((0,a.e)(l[c]),E.codes)||0,...u?{maxCode:l[i],maxIndex:(0,a.f)((0,a.e)(l[i]),E.codes)||(0,a.l)(E.codes)}:{}})),h=(0,r.useCallback)(e=>{if(u){let[n,t]=e;g({minCode:(0,a.n)(n,E.codes),minIndex:n,maxCode:(0,a.n)(t,E.codes),maxIndex:t})}else g({minCode:(0,a.n)(e,E.codes),minIndex:e})},[u,E.codes]);(0,r.useEffect)(()=>{if(u){let e=(0,a.f)((0,a.e)(l[c]),E.codes)||0,n=(0,a.f)((0,a.e)(l[i]),E.codes)||(0,a.l)(E.codes);g({minCode:(0,a.n)(e,E.codes),minIndex:e,maxCode:(0,a.n)(n,E.codes),maxIndex:n})}else{let t=(0,a.f)((0,a.e)(l[c]),E.codes)||0;g({minCode:(0,a.n)(t,E.codes),minIndex:t})}},[l,u,E.codes,c,i]);let p=(0,r.useCallback)(e=>{if(u){let[n,t]=e;s(c,(0,a.n)(n,E.codes)),s(i,(0,a.n)(t,E.codes))}else s(c,(0,a.n)(e,E.codes))},[u,E.codes,c,i,s]),y=e=>(0,a.p)((0,a.p)("",e,E.labelByCode),e,d);return r.createElement("div",{className:m?"cb-control-standalone":"cb-control"},!(0,a.i)(n)&&!v&&r.createElement("div",{className:"cb-control-label"},n),r.createElement(U,(0,o.Z)({onChange:h,onAfterChange:p,range:u,min:0,max:(0,a.b)(E.codes)?0:(0,a.l)(E.codes)-1,value:u?[b.minIndex,b.maxIndex]:b.minIndex},u?{}:{startPoint:b.minIndex},{draggableTrack:!0,pushable:1,allowCross:!1,disabled:(0,a.b)(E.codes),trackStyle:{backgroundColor:"#156DF9"},railStyle:{backgroundColor:"#DEE5ED"},handleStyle:{opacity:1,border:"1px solid #156DF9",backgroundColor:"#156DF9"},ariaLabelForHandle:u?[(n?`${n} - `:"")+"min",(n?`${n} - `:"")+"max"]:n||""})),r.createElement("div",{className:"cb-control-label",style:{marginTop:"5px",marginBottom:"0px",justifyContent:"space-between"}},!(0,a.b)(E.codes)&&r.createElement(r.Fragment,null,r.createElement("div",null,y(b.minCode)),u&&r.createElement("div",null,y(b.maxCode)))))};w.propTypes={label:a.P.string,frequency:a.P.object.isRequired,isRange:a.P.bool.isRequired,minVarName:a.P.string.isRequired,maxVarName:a.P.string.isRequired,vars:a.P.object.isRequired,changeVar:a.P.func.isRequired,lang:a.P.string.isRequired,codeLabelMapping:a.P.object.isRequired,hideTitle:a.P.bool.isRequired,isStandalone:a.P.bool.isRequired};let D=e=>{let{label:n=null,frequencies:t,isRange:o,minVarName:u,maxVarName:c="",vars:i,changeVar:l,codeLabelMapping:s=null,lang:f,hideTitle:d=!1,isStandalone:v=!1}=e,m=(0,r.useMemo)(()=>(0,a.i)(n)||(0,a.c)(s)?null:(0,a.p)(n,(0,a.t)(n),s),[n,s]),E=(0,r.useMemo)(()=>(0,a.h)(t||[{}])||{},[t]);return(0,a.c)(s)?r.createElement(a.C,{label:n,hideTitle:d,isStandalone:v}):r.createElement(w,{label:m,frequency:E,isRange:o,minVarName:u,maxVarName:c,vars:i,changeVar:l,lang:f,codeLabelMapping:s,hideTitle:d,isStandalone:v})};D.propTypes={label:a.P.string,frequencies:a.P.array.isRequired,isRange:a.P.bool.isRequired,minVarName:a.P.string.isRequired,maxVarName:a.P.string,vars:a.P.object.isRequired,changeVar:a.P.func.isRequired,codeLabelMapping:a.P.object,lang:a.P.string.isRequired,hideTitle:a.P.bool,isStandalone:a.P.bool}}}]);