(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1394,178],{178:function(e,r,t){var i,n;void 0!==(i="function"==typeof(n=function(){return function(e){if(void 0===e)throw Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var r="2"==e.version[0];e.ja=function(){this.pipeline.reset(),this.pipeline.add(e.ja.trimmer,e.ja.stopWordFilter,e.ja.stemmer),r?this.tokenizer=e.ja.tokenizer:(e.tokenizer&&(e.tokenizer=e.ja.tokenizer),this.tokenizerFn&&(this.tokenizerFn=e.ja.tokenizer))};var t=new e.TinySegmenter;e.ja.tokenizer=function(i){var n,o,s,a,p,u,m,l,c,j;if(!arguments.length||null==i||void 0==i)return[];if(Array.isArray(i))return i.map(function(t){return r?new e.Token(t.toLowerCase()):t.toLowerCase()});for(n=(o=i.toString().toLowerCase().replace(/^\s+/,"")).length-1;n>=0;n--)if(/\S/.test(o.charAt(n))){o=o.substring(0,n+1);break}for(c=0,p=[],s=o.length,l=0;c<=s;c++)if(u=o.charAt(c),m=c-l,u.match(/\s/)||c==s){if(m>0)for(n=0,a=t.segment(o.slice(l,c)).filter(function(e){return!!e}),j=l;n<a.length;n++)r?p.push(new e.Token(a[n],{position:[j,a[n].length],index:p.length})):p.push(a[n]),j+=a[n].length;l=c+1}return p},e.ja.stemmer=function(e){return e},e.Pipeline.registerFunction(e.ja.stemmer,"stemmer-ja"),e.ja.wordCharacters="一二三四五六七八九十百千万億兆一-龠々〆ヵヶぁ-んァ-ヴーｱ-ﾝﾞa-zA-Zａ-ｚＡ-Ｚ0-9０-９",e.ja.trimmer=e.trimmerSupport.generateTrimmer(e.ja.wordCharacters),e.Pipeline.registerFunction(e.ja.trimmer,"trimmer-ja"),e.ja.stopWordFilter=e.generateStopWordFilter("これ それ あれ この その あの ここ そこ あそこ こちら どこ だれ なに なん 何 私 貴方 貴方方 我々 私達 あの人 あのかた 彼女 彼 です あります おります います は が の に を で え から まで より も どの と し それで しかし".split(" ")),e.Pipeline.registerFunction(e.ja.stopWordFilter,"stopWordFilter-ja"),e.jp=e.ja,e.Pipeline.registerFunction(e.jp.stemmer,"stemmer-jp"),e.Pipeline.registerFunction(e.jp.trimmer,"trimmer-jp"),e.Pipeline.registerFunction(e.jp.stopWordFilter,"stopWordFilter-jp")}})?n.call(r,t,r,e):n)&&(e.exports=i)},1394:function(e,r,t){e.exports=t(178)}}]);