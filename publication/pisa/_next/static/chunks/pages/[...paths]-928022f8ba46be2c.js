(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3948],{6144:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...paths]",function(){return o(7884)}])},7645:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let o=a.default,l=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:o,pastDelay:r}=e;return null}};if(e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=r({},l,e)),(l=r({},l,t)).suspense&&(delete l.ssr,delete l.loading),l.loadableGenerated&&delete(l=r({},l,l.loadableGenerated)).loadableGenerated,"boolean"==typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,n(o,l);delete l.ssr}return o(l)},t.noSSR=n;var r=o(6495).Z,l=o(2648).Z,a=(l(o(7294)),l(o(4588)));function n(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,o(2648).Z)(o(7294));let l=r.default.createContext(null);t.LoadableContext=l},4588:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(6495).Z,l=(0,o(1598).Z)(o(7294)),a=o(3644);let n=[],u=[],s=!1;function i(e){let t=e(),o={loading:!0,loaded:null,error:null};return o.promise=t.then(e=>(o.loading=!1,o.loaded=e,e)).catch(e=>{throw o.loading=!1,o.error=e,e}),o}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=l.default.lazy(o.loader));let n=null;function i(){if(!n){let t=new d(e,o);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!s){let c=o.webpack?o.webpack():o.modules;c&&u.push(e=>{for(let t of c)if(-1!==e.indexOf(t))return i()})}function f(){i();let e=l.default.useContext(a.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach(t=>{e(t)})}let p=o.suspense?function(e,t){return f(),l.default.createElement(o.lazy,r({},e,{ref:t}))}:function(e,t){f();let r=l.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),l.default.useMemo(()=>{var t;return r.loading||r.error?l.default.createElement(o.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:n.retry}):r.loaded?l.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])};return p.preload=()=>i(),p.displayName="LoadableComponent",l.default.forwardRef(p)}(i,e)}function f(e,t){let o=[];for(;e.length;){let r=e.pop();o.push(r(t))}return Promise.all(o).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(n).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let o=()=>(s=!0,t());f(u,e).then(o,o)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},7884:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return p},default:function(){return b}});var r=o(5893);o(7294);var l=o(5152),a=o.n(l),n=o(2918),u=o.n(n),s={home:"home",productSummary:"productSummary",book:"book",bookSubPage:"bookSubPage"};let i=a()(()=>Promise.all([o.e(1664),o.e(1114)]).then(o.bind(o,1114)),{loadableGenerated:{webpack:()=>[1114]}}),d=a()(()=>Promise.all([o.e(1664),o.e(7245),o.e(3282)]).then(o.bind(o,3282)),{loadableGenerated:{webpack:()=>[3282]}}),c=a()(()=>Promise.all([o.e(1664),o.e(7245),o.e(2945),o.e(9720)]).then(o.bind(o,9720)),{loadableGenerated:{webpack:()=>[9720]}}),f=e=>{let{pageType:t,product:o,ssrOnlyProps:l,pageMeta:a,book:n,errorCode:f}=e;if(f)return(0,r.jsx)(u(),{statusCode:f});if(t===s.home){let{productConfigs:p,webbookRootFolder:b}=l;return(0,r.jsx)(i,{productConfigs:p,webbookRootFolder:b})}if(t===s.productSummary){let{fisrtWebbooksInfo:_,webbookCount:h,productConfig:m,webbookRootFolder:y,showScrollToTop:g,showPageSocialShare:k,isUkraineHub:w}=l;return(0,r.jsx)(d,{fisrtWebbooksInfo:_,webbookCount:h,productConfig:m,webbookRootFolder:y,showScrollToTop:g,showPageSocialShare:k,isUkraineHub:w})}return t===s.book||t===s.bookSubPage?(0,r.jsx)(c,{product:o,pageMeta:a,book:n}):(0,r.jsx)(u(),{statusCode:404})};var p=!0,b=f},5152:function(e,t,o){e.exports=o(7645)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=6144)}),_N_E=e.O()}]);