(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3282],{57982:function(o,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r="magnifying-glass",e=[128269,"search"],n="f002",c="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z";a.definition={prefix:"fas",iconName:r,icon:[512,512,e,n,c]},a.faMagnifyingGlass=a.definition,a.prefix="fas",a.iconName=r,a.width=512,a.height=512,a.ligatures=e,a.unicode=n,a.svgPathData=c,a.aliases=e},95337:function(o,a,r){"use strict";var e=r(57982);a.DF={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},a.wn=a.DF,e.prefix,e.iconName,e.width,e.height,e.aliases,e.unicode,e.svgPathData,e.aliases},59545:function(o,a,r){"use strict";var e=r(87709);a.DF={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},a.NB=a.DF,e.prefix,e.iconName,e.width,e.height,e.aliases,e.unicode,e.svgPathData,e.aliases},87709:function(o,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r="xmark",e=[128473,10005,10006,10060,215,"close","multiply","remove","times"],n="f00d",c="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z";a.definition={prefix:"fas",iconName:r,icon:[320,512,e,n,c]},a.faXmark=a.definition,a.prefix="fas",a.iconName=r,a.width=320,a.height=512,a.ligatures=e,a.unicode=n,a.svgPathData=c,a.aliases=e},83282:function(o,a,r){"use strict";r.r(a),r.d(a,{default:function(){return U}});var e=r(85893),n=r(51857),c=r.n(n),s=r(67294),i=r(45697),l=r.n(i),t=r(5152),d=r.n(t),u=r(41664),y=r.n(u),f=r(61557),b=r(27856),g=r(99603),p=r(59545),h=r(95337),m=r(41145),C=r(37763),k=r.n(C),x=r(81341),v=r(90875),j=r(97170),_=r(54621),N=r(39995),w=r(60227);let I=async function(o){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=await fetch(o,a);return r.json()},E={small:{size:"15px",borderSize:"3px"},medium:{size:"25px",borderSize:"4px"},large:{size:"35px",borderSize:"5px"}},z=o=>{let{size:a}=o,r=(0,s.useContext)(j.Z);return(0,e.jsx)("div",{style:{borderRadius:"50%",width:E[a].size,height:E[a].size,maxWidth:E[a].size,maxHeight:E[a].size,border:"".concat(E[a].borderSize," solid rgba(189,189,189,0.25)"),borderLeftColor:r.backgroundColor.flashy(),borderTopColor:r.backgroundColor.flashy()},className:"spinner-animation"})};z.propTypes={size:l().oneOf(["small","medium","large"])},z.defaultProps={size:"medium"};let P=d()(()=>r.e(2419).then(r.bind(r,92419)),{loadableGenerated:{webpack:()=>[92419]}}),A=o=>x.hXT(x.wEe(x.OH4("bookId",x.YMb(o)),x.jCC((0,N.YY)(o),"title"))),T=o=>{let{fisrtWebbooksInfo:a,webbookCount:r,productConfig:n,webbookRootFolder:i,showScrollToTop:l,showPageSocialShare:t,isCovidReport:d,isUkraineHub:u}=o,C=(0,s.useContext)(j.Z),[E,T]=(0,s.useState)(""),U=(0,s.useRef)(null),S=(0,b.D)(300,T),R=x.Vl2(" ",E),[M,O]=(0,s.useState)(25),D=()=>{O(x.IHx(25))},{allWebbooksInfoByProduct:L,setAllWebbooksInfoForProduct:q}=(0,s.useContext)(v.Z),[X,G]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(!x.e$l(n.id,L)&&r>25){G(!0);let o=async()=>{let o=await I("/api/getAllMinimalBooksByProduct?product=".concat(n.id));q(n.id,o),G(!1)};o()}},[L,n.id,q,r]);let H=x.Uth(a,n.id,L),B=A(R)(H);return(0,e.jsxs)("div",{style:{justifyContent:"center"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" flex",children:[(0,e.jsx)(P,{product:n.id}),(0,e.jsxs)("div",{style:{width:"1024px",maxWidth:"1024px",padding:"20px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" flex",children:[(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" flex1",children:[(0,e.jsx)("h1",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" wb-font-primary wb-color-flashy",children:"Webbook summary"}),(0,e.jsxs)("div",{style:{paddingTop:"25px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsx)(y(),{href:"/",style:{color:C.color.primary()},children:"Products"})," / ",(0,e.jsx)("span",{style:{color:"#908e8e"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:"Webbook summary"})]})]}),(0,e.jsx)(f.$3,{flipId:"cover-".concat(n.id),spring:"stiff",children:(0,e.jsx)("div",{style:{marginTop:"10px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:(0,e.jsx)("img",{src:x.vgT(n.id,_.Z),width:133,height:86,alt:n.label,className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])})})})]}),(0,e.jsx)("div",{style:{justifyContent:"center",marginTop:"25px",padding:"20px",backgroundColor:C.backgroundColor.flashy(),color:C.inversedColor.flashy(),fontSize:"30px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" flex",children:(0,e.jsx)(f.$3,{flipId:"product-label-".concat(n.id),spring:"stiff",children:(0,e.jsx)("div",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" wb-font-primary",children:n.label})})}),(0,e.jsx)(f.$3,{flipId:"book-list",onAppear(o){o.classList.add("fadeIn"),setTimeout(()=>{o.style.opacity=1,o.classList.remove("fadeIn")},500)},children:(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("div",{style:{marginTop:"25px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsx)("span",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" font-bold",children:"Environment variables:"}),(0,e.jsxs)("ul",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:["Webbook root folder:"," ","".concat(i,"\\").concat(n.id)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:["Show scroll to top button: ","".concat(l)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:["Show page social share buttons: ","".concat(t)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:["Is covid report: ","".concat(d)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:["Is Ukraine Hub: ","".concat(u)]})]})]}),(0,e.jsxs)("div",{style:{marginTop:"25px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("div",{style:{alignItems:"center"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" font-bold flex",children:[M," first webbooks of ",r,X&&(0,e.jsxs)(e.Fragment,{children:["\xa0(loading them all\xa0",(0,e.jsx)(z,{size:"small"}),")"]}),":"]}),(0,e.jsx)("div",{style:{marginTop:"10px",paddingTop:"20px",justifyContent:"center",backgroundColor:C.backgroundColor.secondary()},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" flex",children:(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" search-input-wrapper",children:[(0,e.jsx)("input",{type:"text",ref:U,onChange(o){let{target:{value:a}}=o;return S(a)},placeholder:"Search (id, title)",className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" search-input"}),!x.xbD(E)&&(0,e.jsx)("div",{onClick(){U.current.value="",T("")},role:"button",tabIndex:0,className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" search-input-clear-icon",children:(0,e.jsx)(g.G,{icon:p.NB})}),(0,e.jsx)("div",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" search-input-icon",children:(0,e.jsx)(g.G,{icon:h.wn})})]})}),(0,e.jsx)("ul",{style:{marginTop:"0px"},className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:x.UID(o=>{let{bookId:a,title:r,titleUrl:s,lang:i}=o;return(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]]),children:[(0,e.jsx)(y(),{href:(0,w.Pm)({product:n.id,bookId:a,bookTitle:s}),style:{color:C.inversedColor.secondary()},children:(0,N.KN)(r)?"no title":(0,e.jsx)(k(),{textToHighlight:r,highlightClassName:"text-highlight-flashy mark-no-style",searchWords:R,autoEscape:!0})})," ","(","id: ",(0,e.jsx)(k(),{textToHighlight:a,highlightClassName:"text-highlight-flashy mark-no-style",searchWords:R,autoEscape:!0})," - lang: ".concat(i),")"]},a)},x.qnb(M,B))}),x.kE(B)>M&&(0,e.jsxs)("div",{onClick:D,style:{fontSize:"15px",justifyContent:"center",alignItems:"center",padding:"20px"},role:"button",tabIndex:0,className:c().dynamic([["3273a45395bc5930",[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()]]])+" flex font-bold cursor-pointer",children:["Show more\xa0",(0,e.jsx)(g.G,{icon:m.pt})]})]})]})})]}),(0,e.jsx)(c(),{id:"3273a45395bc5930",dynamic:[C.inversedColor.secondary(),C.backgroundColor.secondary(),C.font.primary,C.backgroundColor.flashy(),C.backgroundColor.flashy(),C.backgroundColor.flashy()],children:"ul.__jsx-style-dynamic-selector{margin-top:10px;padding:20px 40px;color:".concat(C.inversedColor.secondary(),";background-color:").concat(C.backgroundColor.secondary(),"}h1.__jsx-style-dynamic-selector{font-family:").concat(C.font.primary,"}.search-input-wrapper.__jsx-style-dynamic-selector{position:relative;width:50%}.search-input.__jsx-style-dynamic-selector{width:100%;border:1px solid#ccc;outline:none;padding:8px 60px 8px 8px;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.search-input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector:-moz-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector::-moz-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector::-ms-input-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector::placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector:focus{border:1px solid ").concat(C.backgroundColor.flashy(),"}.search-input.__jsx-style-dynamic-selector:focus~.search-input-icon.__jsx-style-dynamic-selector{color:").concat(C.backgroundColor.flashy(),"}.search-input-icon.__jsx-style-dynamic-selector{position:absolute;right:0;top:0px;padding:9px 8px;color:#ccc;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.search-input-clear-icon.__jsx-style-dynamic-selector{position:absolute;right:32px;top:0px;padding:9px 8px;color:#ccc;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;cursor:pointer}.search-input-clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(C.backgroundColor.flashy(),"}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fadeIn.__jsx-style-dynamic-selector{-webkit-animation:fadeIn.5s forwards;-moz-animation:fadeIn.5s forwards;-o-animation:fadeIn.5s forwards;animation:fadeIn.5s forwards;-webkit-animation-timing-function:cubic-bezier(.39,.575,.565,1);-moz-animation-timing-function:cubic-bezier(.39,.575,.565,1);-o-animation-timing-function:cubic-bezier(.39,.575,.565,1);animation-timing-function:cubic-bezier(.39,.575,.565,1)}")})]})};T.propTypes={fisrtWebbooksInfo:l().array.isRequired,webbookCount:l().number.isRequired,productConfig:l().object.isRequired,webbookRootFolder:l().string.isRequired,showScrollToTop:l().bool.isRequired,showPageSocialShare:l().bool.isRequired,isCovidReport:l().bool.isRequired,isUkraineHub:l().bool.isRequired};var U=T},54621:function(o,a,r){"use strict";var e=r(35580),n=r(61750),c=r.n(n),s=r(70906),i=r.n(s),l=r(54038),t=r.n(l),d=r(82172),u=r.n(d),y=r(73474),f=r.n(y),b=r(95063),g=r.n(b),p=r(23274),h=r.n(p),m=r(93783),C=r.n(m),k=r(72657),x=r.n(k),v=r(95643),j=r.n(v),_=r(19927),N=r.n(_),w=r(10111),I=r.n(w);let E={[e.M.covidPolicyResponses]:c(),[e.M.ukrainePolicyResponses]:i(),[e.M.publication]:t(),[e.M.dcdBestPractices]:u(),[e.M.eduOdicyCaseStudies]:f(),[e.M.focusArea]:g(),[e.M.ipacCaseStudies]:h(),[e.M.ipacReport]:x(),[e.M.envAtGlance]:j(),[e.M.cfeSmesPractices]:C(),[e.M.oceanPolicies]:N(),[e.M.genderPractices]:I()};a.Z=E},7727:function(o,a,r){"use strict";r.d(a,{Z:function(){return n},i:function(){return e}});let e={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},n=["’","'",'"',"\xab","\xbb","“","”",",","\\:",";","\\.","\\!","\xa1","\\?","\xbf","@","_","-","\\(","\\)","\\[","\\]","\\*"]},60227:function(o,a,r){"use strict";r.d(a,{Hc:function(){return b},I5:function(){return d},Pm:function(){return h},a4:function(){return u},ji:function(){return g}});var e=r(81341),n=r(39995),c=r(7727),s=r(83454);let i=e.t$q("ssg"),l=s.env.NEXT_PUBLIC_ASSET_PREFIX||"",t=(0,n.KN)(s.env.NEXT_PUBLIC_URL_PREFIX_PER_LANG)?{}:JSON.parse(s.env.NEXT_PUBLIC_URL_PREFIX_PER_LANG),d="ssg"===i?"".concat(l,"/dynamic"):"http://pac-app-int.oecd.org/webbook-dynamic-assets",u=(o,a,r)=>e.kKJ(r)?"".concat(o,"/").concat(a):"".concat(o,"/").concat(a,"-").concat(r),y=RegExp(e.v_p("|",e.XPQ(c.i)),"g"),f=o=>c.i[o],b=o=>e.q9t(o,["covid-policy-responses"]),g=o=>e.q9t(o,["ukraine-policy-responses"]),p=(o,a)=>{let r=e.qCK(e.gxs(/-+/g,"-"),e.gxs(/[\s./]+/g,"-"),e.gxs(/[^a-z0-9\s-./]+/g,"-"),e.gxs(y,f),e.t$q)(a);return"".concat(r,"-").concat(o)},h=o=>{let{product:a,bookId:r,pageId:n="",bookTitle:c,refId:s,lang:l}=o,d=n?"/".concat(n):"",u=s?"#".concat(s):"",y=p(r,c);if("ssr"===i)return"/".concat(a,"/").concat(y).concat(d).concat(u);let f=e.Uth("",l,t);return"".concat(f,"/").concat(y).concat(d).concat(u)};e.qCK(e.Z$Q,e.Vl2("-"))},93783:function(o){o.exports="/_next/static/images/cfe-smes-practices-3443d175e5c428a19c6f344ff89d801e.png"},61750:function(o){o.exports="/_next/static/images/covid-policy-responses-product-aef51a98fe5efe3a5bd8a03a3bd587b4.png"},82172:function(o){o.exports="/_next/static/images/dcd-best-practices-product-c1470d2f43ed4ab7279aaa7978f7e221.png"},73474:function(o){o.exports="/_next/static/images/edu-odicy-case-studies-product-89a50c6f982bce4f72e9236a06b673fd.png"},95643:function(o){o.exports="/_next/static/images/env-at-a-glance-product-ff7a825530924651c38087266fd706f8.png"},95063:function(o){o.exports="/_next/static/images/focus-area-product-43c49a98b41eba6a5f712c2cb200461a.png"},10111:function(o){o.exports="/_next/static/images/gender-practices-a76bea0dcfe64beda7ae8295d4d7e1ea.png"},23274:function(o){o.exports="/_next/static/images/ipac-case-studies-a76bea0dcfe64beda7ae8295d4d7e1ea.png"},72657:function(o){o.exports="/_next/static/images/ipac-report-product-69b3d7be525fedc14a665e6ac0397414.png"},19927:function(o){o.exports="/_next/static/images/ocean-policies-product-a76bea0dcfe64beda7ae8295d4d7e1ea.png"},54038:function(o){o.exports="/_next/static/images/publication-product-0a07631cba75c55b41152f6abd02cd7d.png"},70906:function(o){o.exports="/_next/static/images/ukraine-policy-responses-product-6e6b2acf6f252d6c37c744a15bed4b70.png"},27856:function(o,a,r){"use strict";function e(o,a,r){var e,n=r||{},c=n.noTrailing,s=void 0!==c&&c,i=n.noLeading,l=void 0!==i&&i,t=n.debounceMode,d=void 0===t?void 0:t,u=!1,y=0;function f(){e&&clearTimeout(e)}function b(){for(var r=arguments.length,n=Array(r),c=0;c<r;c++)n[c]=arguments[c];var i=this,t=Date.now()-y;function b(){y=Date.now(),a.apply(i,n)}function g(){e=void 0}!u&&(l||!d||e||b(),f(),void 0===d&&t>o?l?(y=Date.now(),s||(e=setTimeout(d?g:b,o))):b():!0!==s&&(e=setTimeout(d?g:b,void 0===d?o-t:o)))}return b.cancel=function(o){var a=(o||{}).upcomingOnly;f(),u=!(void 0!==a&&a)},b}function n(o,a,r){var n=(r||{}).atBegin;return e(o,a,{debounceMode:!1!==(void 0!==n&&n)})}r.d(a,{D:function(){return n},P:function(){return e}})}}]);