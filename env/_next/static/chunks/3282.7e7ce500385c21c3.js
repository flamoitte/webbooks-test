"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3282],{57982:function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var r="magnifying-glass",e=[128269,"search"],n="f002",c="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z";a.definition={prefix:"fas",iconName:r,icon:[512,512,e,n,c]},a.faMagnifyingGlass=a.definition,a.prefix="fas",a.iconName=r,a.width=512,a.height=512,a.ligatures=e,a.unicode=n,a.svgPathData=c,a.aliases=e},95337:function(o,a,r){var e=r(57982);a.DF={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},a.wn=a.DF,e.prefix,e.iconName,e.width,e.height,e.aliases,e.unicode,e.svgPathData,e.aliases},59545:function(o,a,r){var e=r(87709);a.DF={prefix:e.prefix,iconName:e.iconName,icon:[e.width,e.height,e.aliases,e.unicode,e.svgPathData]},a.NB=a.DF,e.prefix,e.iconName,e.width,e.height,e.aliases,e.unicode,e.svgPathData,e.aliases},87709:function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var r="xmark",e=[128473,10005,10006,10060,215,"close","multiply","remove","times"],n="f00d",c="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z";a.definition={prefix:"fas",iconName:r,icon:[320,512,e,n,c]},a.faXmark=a.definition,a.prefix="fas",a.iconName=r,a.width=320,a.height=512,a.ligatures=e,a.unicode=n,a.svgPathData=c,a.aliases=e},83282:function(o,a,r){r.r(a),r.d(a,{default:function(){return S}});var e=r(85893),n=r(51857),c=r.n(n),s=r(67294),i=r(45697),l=r.n(i),t=r(5152),d=r.n(t),A=r(41664),u=r.n(A),g=r(61557),b=r(27856),y=r(99603),h=r(59545),f=r(95337),p=r(41145),m=r(37763),C=r.n(m),k=r(81341),x=r(90875),v=r(97170),w=r(58694),E=r(39995),U=r(60227);let B=async function(o){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=await fetch(o,a);return r.json()},j={small:{size:"15px",borderSize:"3px"},medium:{size:"25px",borderSize:"4px"},large:{size:"35px",borderSize:"5px"}},N=o=>{let{size:a}=o,r=(0,s.useContext)(v.Z);return(0,e.jsx)("div",{style:{borderRadius:"50%",width:j[a].size,height:j[a].size,maxWidth:j[a].size,maxHeight:j[a].size,border:"".concat(j[a].borderSize," solid rgba(189,189,189,0.25)"),borderLeftColor:r.backgroundColor.flashy(),borderTopColor:r.backgroundColor.flashy()},className:"spinner-animation"})};N.propTypes={size:l().oneOf(["small","medium","large"])},N.defaultProps={size:"medium"};let M=d()(()=>r.e(2419).then(r.bind(r,92419)),{loadableGenerated:{webpack:()=>[92419]}}),O=o=>k.hXT(k.wEe(k.OH4("bookId",k.YMb(o)),k.jCC((0,E.YY)(o),"title"))),R=o=>{let{fisrtWebbooksInfo:a,webbookCount:r,productConfig:n,webbookRootFolder:i,showScrollToTop:l,showPageSocialShare:t,isCovidReport:d,isUkraineHub:A}=o,m=(0,s.useContext)(v.Z),[j,R]=(0,s.useState)(""),S=(0,s.useRef)(null),I=(0,b.D)(300,R),T=k.Vl2(" ",j),[z,D]=(0,s.useState)(25),F=()=>{D(k.IHx(25))},{allWebbooksInfoByProduct:L,setAllWebbooksInfoForProduct:P}=(0,s.useContext)(x.Z),[J,X]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(!k.e$l(n.id,L)&&r>25){X(!0);let o=async()=>{let o=await B("/api/getAllMinimalBooksByProduct?product=".concat(n.id));P(n.id,o),X(!1)};o()}},[L,n.id,P,r]);let _=k.Uth(a,n.id,L),H=O(T)(_);return(0,e.jsxs)("div",{style:{justifyContent:"center"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" flex",children:[(0,e.jsx)(M,{product:n.id}),(0,e.jsxs)("div",{style:{width:"1024px",maxWidth:"1024px",padding:"20px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" flex",children:[(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" flex1",children:[(0,e.jsx)("h1",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" wb-font-primary wb-color-flashy",children:"Webbook summary"}),(0,e.jsxs)("div",{style:{paddingTop:"25px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsx)(u(),{href:"/",style:{color:m.color.primary()},children:"Products"})," / ",(0,e.jsx)("span",{style:{color:"#908e8e"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:"Webbook summary"})]})]}),(0,e.jsx)(g.$3,{flipId:"cover-".concat(n.id),spring:"stiff",children:(0,e.jsx)("div",{style:{marginTop:"10px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:(0,e.jsx)("img",{src:k.vgT(n.id,w.Z),width:133,height:86,alt:n.label,className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])})})})]}),(0,e.jsx)("div",{style:{justifyContent:"center",marginTop:"25px",padding:"20px",backgroundColor:m.backgroundColor.flashy(),color:m.inversedColor.flashy(),fontSize:"30px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" flex",children:(0,e.jsx)(g.$3,{flipId:"product-label-".concat(n.id),spring:"stiff",children:(0,e.jsx)("div",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" wb-font-primary",children:n.label})})}),(0,e.jsx)(g.$3,{flipId:"book-list",onAppear(o){o.classList.add("fadeIn"),setTimeout(()=>{o.style.opacity=1,o.classList.remove("fadeIn")},500)},children:(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("div",{style:{marginTop:"25px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsx)("span",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" font-bold",children:"Environment variables:"}),(0,e.jsxs)("ul",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:["Webbook root folder:"," ","".concat(i,"\\").concat(n.id)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:["Show scroll to top button: ","".concat(l)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:["Show page social share buttons: ","".concat(t)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:["Is covid report: ","".concat(d)]}),(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:["Is Ukraine Hub: ","".concat(A)]})]})]}),(0,e.jsxs)("div",{style:{marginTop:"25px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsxs)("div",{style:{alignItems:"center"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" font-bold flex",children:[z," first webbooks of ",r,J&&(0,e.jsxs)(e.Fragment,{children:["\xa0(loading them all\xa0",(0,e.jsx)(N,{size:"small"}),")"]}),":"]}),(0,e.jsx)("div",{style:{marginTop:"10px",paddingTop:"20px",justifyContent:"center",backgroundColor:m.backgroundColor.secondary()},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" flex",children:(0,e.jsxs)("div",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" search-input-wrapper",children:[(0,e.jsx)("input",{type:"text",ref:S,onChange(o){let{target:{value:a}}=o;return I(a)},placeholder:"Search (id, title)",className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" search-input"}),!k.xbD(j)&&(0,e.jsx)("div",{onClick(){S.current.value="",R("")},role:"button",tabIndex:0,className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" search-input-clear-icon",children:(0,e.jsx)(y.G,{icon:h.NB})}),(0,e.jsx)("div",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" search-input-icon",children:(0,e.jsx)(y.G,{icon:f.wn})})]})}),(0,e.jsx)("ul",{style:{marginTop:"0px"},className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:k.UID(o=>{let{bookId:a,title:r,titleUrl:s,lang:i}=o;return(0,e.jsxs)("li",{className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]]),children:[(0,e.jsx)(u(),{href:(0,U.Pm)({product:n.id,bookId:a,bookTitle:s}),style:{color:m.inversedColor.secondary()},children:(0,E.KN)(r)?"no title":(0,e.jsx)(C(),{textToHighlight:r,highlightClassName:"text-highlight-flashy mark-no-style",searchWords:T,autoEscape:!0})})," ","(","id: ",(0,e.jsx)(C(),{textToHighlight:a,highlightClassName:"text-highlight-flashy mark-no-style",searchWords:T,autoEscape:!0})," - lang: ".concat(i),")"]},a)},k.qnb(z,H))}),k.kE(H)>z&&(0,e.jsxs)("div",{onClick:F,style:{fontSize:"15px",justifyContent:"center",alignItems:"center",padding:"20px"},role:"button",tabIndex:0,className:c().dynamic([["3273a45395bc5930",[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()]]])+" flex font-bold cursor-pointer",children:["Show more\xa0",(0,e.jsx)(y.G,{icon:p.pt})]})]})]})})]}),(0,e.jsx)(c(),{id:"3273a45395bc5930",dynamic:[m.inversedColor.secondary(),m.backgroundColor.secondary(),m.font.primary,m.backgroundColor.flashy(),m.backgroundColor.flashy(),m.backgroundColor.flashy()],children:"ul.__jsx-style-dynamic-selector{margin-top:10px;padding:20px 40px;color:".concat(m.inversedColor.secondary(),";background-color:").concat(m.backgroundColor.secondary(),"}h1.__jsx-style-dynamic-selector{font-family:").concat(m.font.primary,"}.search-input-wrapper.__jsx-style-dynamic-selector{position:relative;width:50%}.search-input.__jsx-style-dynamic-selector{width:100%;border:1px solid#ccc;outline:none;padding:8px 60px 8px 8px;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.search-input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector:-moz-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector::-moz-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector::-ms-input-placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector::placeholder{color:#bababa}.search-input.__jsx-style-dynamic-selector:focus{border:1px solid ").concat(m.backgroundColor.flashy(),"}.search-input.__jsx-style-dynamic-selector:focus~.search-input-icon.__jsx-style-dynamic-selector{color:").concat(m.backgroundColor.flashy(),"}.search-input-icon.__jsx-style-dynamic-selector{position:absolute;right:0;top:0px;padding:9px 8px;color:#ccc;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s}.search-input-clear-icon.__jsx-style-dynamic-selector{position:absolute;right:32px;top:0px;padding:9px 8px;color:#ccc;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;cursor:pointer}.search-input-clear-icon.__jsx-style-dynamic-selector:hover{color:").concat(m.backgroundColor.flashy(),"}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fadeIn.__jsx-style-dynamic-selector{-webkit-animation:fadeIn.5s forwards;-moz-animation:fadeIn.5s forwards;-o-animation:fadeIn.5s forwards;animation:fadeIn.5s forwards;-webkit-animation-timing-function:cubic-bezier(.39,.575,.565,1);-moz-animation-timing-function:cubic-bezier(.39,.575,.565,1);-o-animation-timing-function:cubic-bezier(.39,.575,.565,1);animation-timing-function:cubic-bezier(.39,.575,.565,1)}")})]})};R.propTypes={fisrtWebbooksInfo:l().array.isRequired,webbookCount:l().number.isRequired,productConfig:l().object.isRequired,webbookRootFolder:l().string.isRequired,showScrollToTop:l().bool.isRequired,showPageSocialShare:l().bool.isRequired,isCovidReport:l().bool.isRequired,isUkraineHub:l().bool.isRequired};var S=R},58694:function(o,a,r){r.d(a,{Z:function(){return c}});var e=r(35580);let n={[e.M.covidPolicyResponses]:{src:".//_next/static/media/covid-policy-responses-product.d07dda2d.png",height:258,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEX29vbp5/GPlciaq9/19vrb3ubj4ul+fK/q6ur9/f2Uv5bG2N+SwI/x8vDJ2Oa/0eC/z96RPy/5AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAALElEQVR4nBXBhxEAIAgAsUcBwb7/tJ4J527T0SelfaXi5iKiSiyATMyJCPIBGJoA8ZWE7iMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},[e.M.ukrainePolicyResponses]:{src:".//_next/static/media/ukraine-policy-responses-product.dd6600cd.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEX7+/vw8PHr6+zx8/jZ2NfU1NGjtMTo5Nzc3d+ousfXz8KascPFx8S+vJuisqLDyLYCzydXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nCXBtwEAIAwDMDs91P+/ZUBCzO7YJ2DLrfwmbKRSqRDiK6eIUB8WzQDCXfaB7wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},[e.M.publication]:{src:".//_next/static/media/publication-product.f319938c.png",height:258,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEXG3ezbz+Hp6enk4ejv8O/K4/KonLBaVlzi2+T29vb+/v+bkqdMTUxLNFeFgpDL5fZXQGSUd4OMg5x1k603AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAALklEQVR4nAXBBwKAIAwAsSt2giz//1gTtoEZsIaPz/0yT4pIPkSUqlbnjWqZrf8YugEbqTxiPQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},[e.M.dcdBestPractices]:{src:".//_next/static/media/dcd-best-practices-product.dfe0375a.png",height:258,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEWWqL7a4OU+Vneatcuhsb+PobqrwdUjSnuUobBxcXeiu9G6z8+4qJuxs7eimpUaPGt2p4/NzscQNm0/YIrO0c9xp3yaqbVQW+e6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nBXBhxEAIAgEsFdBwF73X9UzQQwpujwuRFWJSOBLq/O4jW5mXmThY2Y8HmkBOhTyVDEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},[e.M.eduOdicyCaseStudies]:{src:".//_next/static/media/edu-odicy-case-studies-product.e0d6f704.png",height:258,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEXK1eCyxK7CxMSQpLbZw3EnVHp4qI+qwdTO2OG1yt95rX4/WF6ssqMDNmOZqrIwU2oALl6htcOPnJmXiE2FkouSknyHjWUAM2H2m03zAAAADnRSTlP9/v7+/v7+/v3+/v7+/ju/TasAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicFca3EQAgDASwJ9pEk9l/Uw5VAlEgrXyEnDlq7Q7J2mx+ZC9ptxUggBmMByV6AaDJxOEiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},[e.M.focusArea]:{src:".//_next/static/media/focus-area-product.682e4829.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEX//f8+lqQyd057mZEkjE75+v00jJm5ztuw0dbH2ub09vhts4yNvofO4NSQvZv29veYpbY3kJy4zcmdrLuSucWiu7ipxMbK29ZH6TOKAAAAEHRSTlP+6urq6u7q8f3x/erx8fH9wA2GkgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUeJwFwYcBgCAABLGTIkWBp4j7b0pCCiH5Ul+WpClNYswAjd73+MYP92WNc48/KJkBrJ5mQzUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},[e.M.ipacCaseStudies]:{src:".//_next/static/media/ipac-case-studies.5372f52f.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEWJn68cS3T///no5d2pwdOMo7fOy8kHN2J7la51p4XS3Oi4zcrCwreLnm4AKk2sq4o/ZoeXscOUqbJid5hAaCd8lKZWeWppj0eMnv2vAAAAEHRSTlP9/v7+/v3+/v3+/v7+/v7+TZ8EZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADBJREFUeJwFwYcBACAIA7A6cQu4/v/UBF7El5ozaK2jKgbUZ4vOMsbe7zITAqBIKXwqmAHKhp7QxAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},[e.M.ipacReport]:{src:".//_next/static/media/ipac-report-product.e5587b72.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEX8/v81THJHUlaov9GAf3HX4ubk28v/++D/+eH19vuVoZitr4mino6KuY93haHp6/Fnc4b58tqTu56xxtfp4c5VZYNoa2QaNV9YX1ugt8sBI1jcaxD0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nBXBhQ0AIAADsOHuzv+HElqww5oQNeAuQkaOFpTuybl3kLIXrZRGMgbfAyiuAY0QJ/JYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},[e.M.envAtGlance]:{src:".//_next/static/media/env-at-a-glance-product.ba8ad25a.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEUGGwUpPDKlrqabpJ+6ytQRKw2twMn//v+ttqwaLRvz8vLa1L1+rYWgwJ/y8POfqJ/M0Ms3ZuxRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nGNgYWNjYeHm5WFg5WRk5GQAAU5OVjDNL8DBzMTBwcHAx8UOBgAT5wDzDkw5xQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},[e.M.cfeSmesPractices]:{src:".//_next/static/media/cfe-smes-practices.a94fdaf6.png",height:258,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEWvwM+nuMkILFCyxKy0yNjBwsByp4UGNF+mv9JIOC+dlYvLzMrm6OQeTHU8XXtgY21UXGtrfo8PHzUeMEmZqbNrb3WNn6iTqLmHnwq+AAAADXRSTlP9/f7+/v7+/v7+/v7+7jm72AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwFwYkBgCAMALFDnrZiQQF1/01JUE2aYynIHM/6fucwO3O9GnL3t7kLQCIENiSoAXRBOrzCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},[e.M.oceanPolicies]:{src:".//_next/static/media/ocean-policies-product.5372f52f.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEWJn68cS3T///no5d2pwdOMo7fOy8kHN2J7la51p4XS3Oi4zcrCwreLnm4AKk2sq4o/ZoeXscOUqbJid5hAaCd8lKZWeWppj0eMnv2vAAAAEHRSTlP9/v7+/v3+/v3+/v7+/v7+TZ8EZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADBJREFUeJwFwYcBACAIA7A6cQu4/v/UBF7El5ozaK2jKgbUZ4vOMsbe7zITAqBIKXwqmAHKhp7QxAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},[e.M.genderPractices]:{src:".//_next/static/media/gender-practices.5372f52f.png",height:256,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEWJn68cS3T///no5d2pwdOMo7fOy8kHN2J7la51p4XS3Oi4zcrCwreLnm4AKk2sq4o/ZoeXscOUqbJid5hAaCd8lKZWeWppj0eMnv2vAAAAEHRSTlP9/v7+/v3+/v3+/v7+/v7+TZ8EZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADBJREFUeJwFwYcBACAIA7A6cQu4/v/UBF7El5ozaK2jKgbUZ4vOMsbe7zITAqBIKXwqmAHKhp7QxAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}};var c=n},7727:function(o,a,r){r.d(a,{Z:function(){return n},i:function(){return e}});let e={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},n=["’","'",'"',"\xab","\xbb","“","”",",","\\:",";","\\.","\\!","\xa1","\\?","\xbf","@","_","-","\\(","\\)","\\[","\\]","\\*"]},60227:function(o,a,r){r.d(a,{Hc:function(){return g},I5:function(){return t},Pm:function(){return h},a4:function(){return d},ji:function(){return b}});var e=r(81341),n=r(39995),c=r(7727),s=r(83454);let i=e.t$q("ssg"),l=(0,n.KN)(s.env.NEXT_PUBLIC_URL_PREFIX_PER_LANG)?{}:JSON.parse(s.env.NEXT_PUBLIC_URL_PREFIX_PER_LANG),t="ssg"===i?"".concat("/webbooks-test/eag","/dynamic"):"http://pac-app-int.oecd.org/webbook-dynamic-assets",d=(o,a,r)=>e.kKJ(r)?"".concat(o,"/").concat(a):"".concat(o,"/").concat(a,"-").concat(r),A=RegExp(e.v_p("|",e.XPQ(c.i)),"g"),u=o=>c.i[o],g=o=>e.q9t(o,["covid-policy-responses"]),b=o=>e.q9t(o,["ukraine-policy-responses"]),y=(o,a)=>{let r=e.qCK(e.gxs(/-+/g,"-"),e.gxs(/[\s./]+/g,"-"),e.gxs(/[^a-z0-9\s-./]+/g,"-"),e.gxs(A,u),e.t$q)(a);return"".concat(r,"-").concat(o)},h=o=>{let{product:a,bookId:r,pageId:n="",bookTitle:c,refId:s,lang:t}=o,d=n?"/".concat(n):"",A=s?"#".concat(s):"",u=y(r,c);if("ssr"===i)return"/".concat(a,"/").concat(u).concat(d).concat(A);let g=e.Uth("",t,l);return"".concat(g,"/").concat(u).concat(d).concat(A)};e.qCK(e.Z$Q,e.Vl2("-"))},27856:function(o,a,r){function e(o,a,r){var e,n=r||{},c=n.noTrailing,s=void 0!==c&&c,i=n.noLeading,l=void 0!==i&&i,t=n.debounceMode,d=void 0===t?void 0:t,A=!1,u=0;function g(){e&&clearTimeout(e)}function b(){for(var r=arguments.length,n=Array(r),c=0;c<r;c++)n[c]=arguments[c];var i=this,t=Date.now()-u;function b(){u=Date.now(),a.apply(i,n)}function y(){e=void 0}!A&&(l||!d||e||b(),g(),void 0===d&&t>o?l?(u=Date.now(),s||(e=setTimeout(d?y:b,o))):b():!0!==s&&(e=setTimeout(d?y:b,void 0===d?o-t:o)))}return b.cancel=function(o){var a=(o||{}).upcomingOnly;g(),A=!(void 0!==a&&a)},b}function n(o,a,r){var n=(r||{}).atBegin;return e(o,a,{debounceMode:!1!==(void 0!==n&&n)})}r.d(a,{D:function(){return n},P:function(){return e}})}}]);