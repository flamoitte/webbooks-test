(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2323],{52323:function(e,r,i){var n,o;void 0!==(n="function"==typeof(o=function(){return function(e){var r,i,n;if(void 0===e)throw Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");console.warn('[Lunr Languages] Please use the "nl" instead of the "du". The "nl" code is the standard code for Dutch language, and "du" will be removed in the next major versions.'),e.du=function(){this.pipeline.reset(),this.pipeline.add(e.du.trimmer,e.du.stopWordFilter,e.du.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.du.stemmer))},e.du.wordCharacters="A-Za-z\xaa\xba\xc0-\xd6\xd8-\xf6\xf8-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.du.trimmer=e.trimmerSupport.generateTrimmer(e.du.wordCharacters),e.Pipeline.registerFunction(e.du.trimmer,"trimmer-du"),e.du.stemmer=(r=e.stemmerSupport.Among,i=e.stemmerSupport.SnowballProgram,n=new function(){var e,n,o,t=[new r("",-1,6),new r("\xe1",0,1),new r("\xe4",0,1),new r("\xe9",0,2),new r("\xeb",0,2),new r("\xed",0,3),new r("\xef",0,3),new r("\xf3",0,4),new r("\xf6",0,4),new r("\xfa",0,5),new r("\xfc",0,5)],s=[new r("",-1,3),new r("I",0,2),new r("Y",0,1)],u=[new r("dd",-1,-1),new r("kk",-1,-1),new r("tt",-1,-1)],c=[new r("ene",-1,2),new r("se",-1,3),new r("en",-1,2),new r("heden",2,1),new r("s",-1,3)],a=[new r("end",-1,1),new r("ig",-1,2),new r("ing",-1,1),new r("lijk",-1,3),new r("baar",-1,4),new r("bar",-1,5)],l=[new r("aa",-1,-1),new r("ee",-1,-1),new r("oo",-1,-1),new r("uu",-1,-1)],m=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],d=[1,0,0,17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],f=[17,67,16,1,0,0,0,0,0,0,0,0,0,0,0,0,128],_=new i;function w(e){return _.cursor=e,e>=_.limit||(_.cursor++,!1)}function b(){for(;!_.in_grouping(m,97,232);){if(_.cursor>=_.limit)return!0;_.cursor++}for(;!_.out_grouping(m,97,232);){if(_.cursor>=_.limit)return!0;_.cursor++}return!1}function p(){return n<=_.cursor}function g(){return e<=_.cursor}function h(){var e=_.limit-_.cursor;_.find_among_b(u,3)&&(_.cursor=_.limit-e,_.ket=_.cursor,_.cursor>_.limit_backward&&(_.cursor--,_.bra=_.cursor,_.slice_del()))}function k(){var e;o=!1,_.ket=_.cursor,_.eq_s_b(1,"e")&&(_.bra=_.cursor,p()&&(e=_.limit-_.cursor,_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-e,_.slice_del(),o=!0,h())))}function v(){var e;p()&&(e=_.limit-_.cursor,_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-e,_.eq_s_b(3,"gem")||(_.cursor=_.limit-e,_.slice_del(),h())))}this.setCurrent=function(e){_.setCurrent(e)},this.getCurrent=function(){return _.getCurrent()},this.stem=function(){var r=_.cursor;return function(){for(var e,r,i,n=_.cursor;;){if(_.bra=_.cursor,e=_.find_among(t,11))switch(_.ket=_.cursor,e){case 1:_.slice_from("a");continue;case 2:_.slice_from("e");continue;case 3:_.slice_from("i");continue;case 4:_.slice_from("o");continue;case 5:_.slice_from("u");continue;case 6:if(_.cursor>=_.limit)break;_.cursor++;continue}break}for(_.cursor=n,_.bra=n,_.eq_s(1,"y")?(_.ket=_.cursor,_.slice_from("Y")):_.cursor=n;;)if(r=_.cursor,_.in_grouping(m,97,232)){if(i=_.cursor,_.bra=i,_.eq_s(1,"i"))_.ket=_.cursor,_.in_grouping(m,97,232)&&(_.slice_from("I"),_.cursor=r);else if(_.cursor=i,_.eq_s(1,"y"))_.ket=_.cursor,_.slice_from("Y"),_.cursor=r;else if(w(r))break}else if(w(r))break}(),_.cursor=r,e=n=_.limit,b()||((n=_.cursor)<3&&(n=3),b()||(e=_.cursor)),_.limit_backward=r,_.cursor=_.limit,function(){var e,r,i,n,t,s,u=_.limit-_.cursor;if(_.ket=_.cursor,e=_.find_among_b(c,5))switch(_.bra=_.cursor,e){case 1:p()&&_.slice_from("heid");break;case 2:v();break;case 3:p()&&_.out_grouping_b(f,97,232)&&_.slice_del()}if(_.cursor=_.limit-u,k(),_.cursor=_.limit-u,_.ket=_.cursor,_.eq_s_b(4,"heid")&&(_.bra=_.cursor,g()&&(r=_.limit-_.cursor,!_.eq_s_b(1,"c")&&(_.cursor=_.limit-r,_.slice_del(),_.ket=_.cursor,_.eq_s_b(2,"en")&&(_.bra=_.cursor,v())))),_.cursor=_.limit-u,_.ket=_.cursor,e=_.find_among_b(a,6))switch(_.bra=_.cursor,e){case 1:if(g()){if(_.slice_del(),i=_.limit-_.cursor,_.ket=_.cursor,_.eq_s_b(2,"ig")&&(_.bra=_.cursor,g()&&(n=_.limit-_.cursor,!_.eq_s_b(1,"e")))){_.cursor=_.limit-n,_.slice_del();break}_.cursor=_.limit-i,h()}break;case 2:g()&&(t=_.limit-_.cursor,_.eq_s_b(1,"e")||(_.cursor=_.limit-t,_.slice_del()));break;case 3:g()&&(_.slice_del(),k());break;case 4:g()&&_.slice_del();break;case 5:g()&&o&&_.slice_del()}_.cursor=_.limit-u,_.out_grouping_b(d,73,232)&&(s=_.limit-_.cursor,_.find_among_b(l,4)&&_.out_grouping_b(m,97,232)&&(_.cursor=_.limit-s,_.ket=_.cursor,_.cursor>_.limit_backward&&(_.cursor--,_.bra=_.cursor,_.slice_del())))}(),_.cursor=_.limit_backward,function(){for(var e;;)if(_.bra=_.cursor,e=_.find_among(s,3))switch(_.ket=_.cursor,e){case 1:_.slice_from("y");break;case 2:_.slice_from("i");break;case 3:if(_.cursor>=_.limit)return;_.cursor++}}(),!0}},function(e){return"function"==typeof e.update?e.update(function(e){return n.setCurrent(e),n.stem(),n.getCurrent()}):(n.setCurrent(e),n.stem(),n.getCurrent())}),e.Pipeline.registerFunction(e.du.stemmer,"stemmer-du"),e.du.stopWordFilter=e.generateStopWordFilter(" aan al alles als altijd andere ben bij daar dan dat de der deze die dit doch doen door dus een eens en er ge geen geweest haar had heb hebben heeft hem het hier hij hoe hun iemand iets ik in is ja je kan kon kunnen maar me meer men met mij mijn moet na naar niet niets nog nu of om omdat onder ons ook op over reeds te tegen toch toen tot u uit uw van veel voor want waren was wat werd wezen wie wil worden wordt zal ze zelf zich zij zijn zo zonder zou".split(" ")),e.Pipeline.registerFunction(e.du.stopWordFilter,"stopWordFilter-du")}})?o.call(r,i,r,e):o)&&(e.exports=n)}}]);