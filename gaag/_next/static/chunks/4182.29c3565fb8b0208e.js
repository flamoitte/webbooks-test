(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4182],{74182:function(e,i,t){var r,n;void 0!==(r="function"==typeof(n=function(){return function(e){e.multiLanguage=function(){for(var i=Array.prototype.slice.call(arguments),t=i.join("-"),r="",n=[],s=[],p=0;p<i.length;++p)"en"==i[p]?(r+="\\w",n.unshift(e.stopWordFilter),n.push(e.stemmer),s.push(e.stemmer)):(r+=e[i[p]].wordCharacters,e[i[p]].stopWordFilter&&n.unshift(e[i[p]].stopWordFilter),e[i[p]].stemmer&&(n.push(e[i[p]].stemmer),s.push(e[i[p]].stemmer)));var l=e.trimmerSupport.generateTrimmer(r);return e.Pipeline.registerFunction(l,"lunr-multi-trimmer-"+t),n.unshift(l),function(){this.pipeline.reset(),this.pipeline.add.apply(this.pipeline,n),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add.apply(this.searchPipeline,s))}}}})?n.call(i,t,i,e):n)&&(e.exports=r)}}]);