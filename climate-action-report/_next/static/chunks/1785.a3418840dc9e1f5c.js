"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1785],{6421:function(e,t,a){var n,r=(n=a(6425))&&n.__esModule?n:{default:n};e.exports={tags:function(e){var t=e.id,a=e.events,n=e.dataLayer,i=e.dataLayerName,d=e.preview,o="&gtm_auth="+e.auth,s="&gtm_preview="+d;t||(0,r.default)("GTM Id is required");var c="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(a).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+o+s+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+i+"','"+t+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+o+s+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:c,dataLayerVar:this.dataLayer(n,i)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}}},8676:function(e,t,a){var n,r=(n=a(6421))&&n.__esModule?n:{default:n};e.exports={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=r.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,a=e.events,n=e.dataLayer,r=e.dataLayerName,i=e.auth,d=e.preview,o=this.gtm({id:t,events:void 0===a?{}:a,dataLayer:n||void 0,dataLayerName:void 0===r?"dataLayer":r,auth:void 0===i?"":i,preview:void 0===d?"":d});n&&document.head.appendChild(o.dataScript),document.head.insertBefore(o.script(),document.head.childNodes[0]),document.body.insertBefore(o.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,a=e.dataLayerName,n=void 0===a?"dataLayer":a;if(window[n])return window[n].push(t);var i=r.default.dataLayer(t,n),d=this.dataScript(i);document.head.insertBefore(d,document.head.childNodes[0])}}},1785:function(e,t,a){var n,r=(n=a(8676))&&n.__esModule?n:{default:n};e.exports=r.default},6425:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){console.warn("[react-gtm]",e)}}}]);