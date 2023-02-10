(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1129],{31129:function(e,r,s){var n,i;void 0!==(n="function"==typeof(i=function(){return function(e){var r,s,n;if(void 0===e)throw Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");e.pt=function(){this.pipeline.reset(),this.pipeline.add(e.pt.trimmer,e.pt.stopWordFilter,e.pt.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.pt.stemmer))},e.pt.wordCharacters="A-Za-z\xaa\xba\xc0-\xd6\xd8-\xf6\xf8-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.pt.trimmer=e.trimmerSupport.generateTrimmer(e.pt.wordCharacters),e.Pipeline.registerFunction(e.pt.trimmer,"trimmer-pt"),e.pt.stemmer=(r=e.stemmerSupport.Among,s=e.stemmerSupport.SnowballProgram,n=new function(){var e,n,i,o=[new r("",-1,3),new r("\xe3",0,1),new r("\xf5",0,2)],a=[new r("",-1,3),new r("a~",0,1),new r("o~",0,2)],t=[new r("ic",-1,-1),new r("ad",-1,-1),new r("os",-1,-1),new r("iv",-1,1)],u=[new r("ante",-1,1),new r("avel",-1,1),new r("\xedvel",-1,1)],w=[new r("ic",-1,1),new r("abil",-1,1),new r("iv",-1,1)],m=[new r("ica",-1,1),new r("\xe2ncia",-1,1),new r("\xeancia",-1,4),new r("ira",-1,9),new r("adora",-1,1),new r("osa",-1,1),new r("ista",-1,1),new r("iva",-1,8),new r("eza",-1,1),new r("log\xeda",-1,2),new r("idade",-1,7),new r("ante",-1,1),new r("mente",-1,6),new r("amente",12,5),new r("\xe1vel",-1,1),new r("\xedvel",-1,1),new r("uci\xf3n",-1,3),new r("ico",-1,1),new r("ismo",-1,1),new r("oso",-1,1),new r("amento",-1,1),new r("imento",-1,1),new r("ivo",-1,8),new r("a\xe7a~o",-1,1),new r("ador",-1,1),new r("icas",-1,1),new r("\xeancias",-1,4),new r("iras",-1,9),new r("adoras",-1,1),new r("osas",-1,1),new r("istas",-1,1),new r("ivas",-1,8),new r("ezas",-1,1),new r("log\xedas",-1,2),new r("idades",-1,7),new r("uciones",-1,3),new r("adores",-1,1),new r("antes",-1,1),new r("a\xe7o~es",-1,1),new r("icos",-1,1),new r("ismos",-1,1),new r("osos",-1,1),new r("amentos",-1,1),new r("imentos",-1,1),new r("ivos",-1,8)],c=[new r("ada",-1,1),new r("ida",-1,1),new r("ia",-1,1),new r("aria",2,1),new r("eria",2,1),new r("iria",2,1),new r("ara",-1,1),new r("era",-1,1),new r("ira",-1,1),new r("ava",-1,1),new r("asse",-1,1),new r("esse",-1,1),new r("isse",-1,1),new r("aste",-1,1),new r("este",-1,1),new r("iste",-1,1),new r("ei",-1,1),new r("arei",16,1),new r("erei",16,1),new r("irei",16,1),new r("am",-1,1),new r("iam",20,1),new r("ariam",21,1),new r("eriam",21,1),new r("iriam",21,1),new r("aram",20,1),new r("eram",20,1),new r("iram",20,1),new r("avam",20,1),new r("em",-1,1),new r("arem",29,1),new r("erem",29,1),new r("irem",29,1),new r("assem",29,1),new r("essem",29,1),new r("issem",29,1),new r("ado",-1,1),new r("ido",-1,1),new r("ando",-1,1),new r("endo",-1,1),new r("indo",-1,1),new r("ara~o",-1,1),new r("era~o",-1,1),new r("ira~o",-1,1),new r("ar",-1,1),new r("er",-1,1),new r("ir",-1,1),new r("as",-1,1),new r("adas",47,1),new r("idas",47,1),new r("ias",47,1),new r("arias",50,1),new r("erias",50,1),new r("irias",50,1),new r("aras",47,1),new r("eras",47,1),new r("iras",47,1),new r("avas",47,1),new r("es",-1,1),new r("ardes",58,1),new r("erdes",58,1),new r("irdes",58,1),new r("ares",58,1),new r("eres",58,1),new r("ires",58,1),new r("asses",58,1),new r("esses",58,1),new r("isses",58,1),new r("astes",58,1),new r("estes",58,1),new r("istes",58,1),new r("is",-1,1),new r("ais",71,1),new r("eis",71,1),new r("areis",73,1),new r("ereis",73,1),new r("ireis",73,1),new r("\xe1reis",73,1),new r("\xe9reis",73,1),new r("\xedreis",73,1),new r("\xe1sseis",73,1),new r("\xe9sseis",73,1),new r("\xedsseis",73,1),new r("\xe1veis",73,1),new r("\xedeis",73,1),new r("ar\xedeis",84,1),new r("er\xedeis",84,1),new r("ir\xedeis",84,1),new r("ados",-1,1),new r("idos",-1,1),new r("amos",-1,1),new r("\xe1ramos",90,1),new r("\xe9ramos",90,1),new r("\xedramos",90,1),new r("\xe1vamos",90,1),new r("\xedamos",90,1),new r("ar\xedamos",95,1),new r("er\xedamos",95,1),new r("ir\xedamos",95,1),new r("emos",-1,1),new r("aremos",99,1),new r("eremos",99,1),new r("iremos",99,1),new r("\xe1ssemos",99,1),new r("\xeassemos",99,1),new r("\xedssemos",99,1),new r("imos",-1,1),new r("armos",-1,1),new r("ermos",-1,1),new r("irmos",-1,1),new r("\xe1mos",-1,1),new r("ar\xe1s",-1,1),new r("er\xe1s",-1,1),new r("ir\xe1s",-1,1),new r("eu",-1,1),new r("iu",-1,1),new r("ou",-1,1),new r("ar\xe1",-1,1),new r("er\xe1",-1,1),new r("ir\xe1",-1,1)],l=[new r("a",-1,1),new r("i",-1,1),new r("o",-1,1),new r("os",-1,1),new r("\xe1",-1,1),new r("\xed",-1,1),new r("\xf3",-1,1)],f=[new r("e",-1,1),new r("\xe7",-1,2),new r("\xe9",-1,1),new r("\xea",-1,1)],d=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,3,19,12,2],x=new s;function v(){if(x.out_grouping(d,97,250)){for(;!x.in_grouping(d,97,250);){if(x.cursor>=x.limit)return!0;x.cursor++}return!1}return!0}function _(){for(;!x.in_grouping(d,97,250);){if(x.cursor>=x.limit)return!1;x.cursor++}for(;!x.out_grouping(d,97,250);){if(x.cursor>=x.limit)return!1;x.cursor++}return!0}function p(){return i<=x.cursor}function h(){return e<=x.cursor}function b(e,r){if(x.eq_s_b(1,e)){x.bra=x.cursor;var s=x.limit-x.cursor;if(x.eq_s_b(1,r))return x.cursor=x.limit-s,p()&&x.slice_del(),!1}return!0}this.setCurrent=function(e){x.setCurrent(e)},this.getCurrent=function(){return x.getCurrent()},this.stem=function(){var r,s=x.cursor;return function(){for(var e;;){if(x.bra=x.cursor,e=x.find_among(o,3))switch(x.ket=x.cursor,e){case 1:x.slice_from("a~");continue;case 2:x.slice_from("o~");continue;case 3:if(x.cursor>=x.limit)break;x.cursor++;continue}break}}(),x.cursor=s,r=x.cursor,n=i=x.limit,e=i,function(){var e,r,s=x.cursor;if(x.in_grouping(d,97,250)){if(e=x.cursor,v()){if(x.cursor=e,function(){if(x.in_grouping(d,97,250))for(;!x.out_grouping(d,97,250);){if(x.cursor>=x.limit)return!1;x.cursor++}return i=x.cursor,!0}())return}else i=x.cursor}if(x.cursor=s,x.out_grouping(d,97,250)){if(r=x.cursor,v()){if(x.cursor=r,!x.in_grouping(d,97,250)||x.cursor>=x.limit)return;x.cursor++}i=x.cursor}}(),x.cursor=r,_()&&(n=x.cursor,_()&&(e=x.cursor)),x.limit_backward=s,x.cursor=x.limit,function(){if(!function(){var e;if(x.ket=x.cursor,!(e=x.find_among_b(m,45)))return!1;switch(x.bra=x.cursor,e){case 1:if(!h())return!1;x.slice_del();break;case 2:if(!h())return!1;x.slice_from("log");break;case 3:if(!h())return!1;x.slice_from("u");break;case 4:if(!h())return!1;x.slice_from("ente");break;case 5:if(!(n<=x.cursor))return!1;x.slice_del(),x.ket=x.cursor,(e=x.find_among_b(t,4))&&(x.bra=x.cursor,h()&&(x.slice_del(),1==e&&(x.ket=x.cursor,x.eq_s_b(2,"at")&&(x.bra=x.cursor,h()&&x.slice_del()))));break;case 6:if(!h())return!1;x.slice_del(),x.ket=x.cursor,(e=x.find_among_b(u,3))&&(x.bra=x.cursor,1==e&&h()&&x.slice_del());break;case 7:if(!h())return!1;x.slice_del(),x.ket=x.cursor,(e=x.find_among_b(w,3))&&(x.bra=x.cursor,1==e&&h()&&x.slice_del());break;case 8:if(!h())return!1;x.slice_del(),x.ket=x.cursor,x.eq_s_b(2,"at")&&(x.bra=x.cursor,h()&&x.slice_del());break;case 9:if(!p()||!x.eq_s_b(1,"e"))return!1;x.slice_from("ir")}return!0}()&&(x.cursor=x.limit,!function(){var e,r;if(x.cursor>=i){if(r=x.limit_backward,x.limit_backward=i,x.ket=x.cursor,e=x.find_among_b(c,120))return x.bra=x.cursor,1==e&&x.slice_del(),x.limit_backward=r,!0;x.limit_backward=r}return!1}())){var e;x.cursor=x.limit,x.ket=x.cursor,(e=x.find_among_b(l,7))&&(x.bra=x.cursor,1==e&&p()&&x.slice_del());return}x.cursor=x.limit,x.ket=x.cursor,x.eq_s_b(1,"i")&&(x.bra=x.cursor,x.eq_s_b(1,"c")&&(x.cursor=x.limit,p()&&x.slice_del()))}(),x.cursor=x.limit,function(){var e;if(x.ket=x.cursor,e=x.find_among_b(f,4))switch(x.bra=x.cursor,e){case 1:p()&&(x.slice_del(),x.ket=x.cursor,x.limit,x.cursor,b("u","g")&&b("i","c"));break;case 2:x.slice_from("c")}}(),x.cursor=x.limit_backward,function(){for(var e;;){if(x.bra=x.cursor,e=x.find_among(a,3))switch(x.ket=x.cursor,e){case 1:x.slice_from("\xe3");continue;case 2:x.slice_from("\xf5");continue;case 3:if(x.cursor>=x.limit)break;x.cursor++;continue}break}}(),!0}},function(e){return"function"==typeof e.update?e.update(function(e){return n.setCurrent(e),n.stem(),n.getCurrent()}):(n.setCurrent(e),n.stem(),n.getCurrent())}),e.Pipeline.registerFunction(e.pt.stemmer,"stemmer-pt"),e.pt.stopWordFilter=e.generateStopWordFilter("a ao aos aquela aquelas aquele aqueles aquilo as at\xe9 com como da das de dela delas dele deles depois do dos e ela elas ele eles em entre era eram essa essas esse esses esta estamos estas estava estavam este esteja estejam estejamos estes esteve estive estivemos estiver estivera estiveram estiverem estivermos estivesse estivessem estiv\xe9ramos estiv\xe9ssemos estou est\xe1 est\xe1vamos est\xe3o eu foi fomos for fora foram forem formos fosse fossem fui f\xf4ramos f\xf4ssemos haja hajam hajamos havemos hei houve houvemos houver houvera houveram houverei houverem houveremos houveria houveriam houvermos houver\xe1 houver\xe3o houver\xedamos houvesse houvessem houv\xe9ramos houv\xe9ssemos h\xe1 h\xe3o isso isto j\xe1 lhe lhes mais mas me mesmo meu meus minha minhas muito na nas nem no nos nossa nossas nosso nossos num numa n\xe3o n\xf3s o os ou para pela pelas pelo pelos por qual quando que quem se seja sejam sejamos sem serei seremos seria seriam ser\xe1 ser\xe3o ser\xedamos seu seus somos sou sua suas s\xe3o s\xf3 tamb\xe9m te tem temos tenha tenham tenhamos tenho terei teremos teria teriam ter\xe1 ter\xe3o ter\xedamos teu teus teve tinha tinham tive tivemos tiver tivera tiveram tiverem tivermos tivesse tivessem tiv\xe9ramos tiv\xe9ssemos tu tua tuas t\xe9m t\xednhamos um uma voc\xea voc\xeas vos \xe0 \xe0s \xe9ramos".split(" ")),e.Pipeline.registerFunction(e.pt.stopWordFilter,"stopWordFilter-pt")}})?i.call(r,s,r,e):i)&&(e.exports=n)}}]);