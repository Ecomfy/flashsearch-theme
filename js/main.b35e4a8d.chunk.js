(this["webpackJsonpflashsearch-theme"]=this["webpackJsonpflashsearch-theme"]||[]).push([[0],{52:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(42),r=n(0),c=n.n(r),o=n(23),i=n.n(o),l=n(7),u=n(15),s=n(11),p=["576px","768px","992px","1200px"];p.sm=p[0],p.md=p[1],p.lg=p[2],p.xl=p[3];var f=["0","4px","8px","16px","32px","64px","128px","256px","512px"];f.mobileInstantSearchPt="50px";var h=["12px","14px","16px","20px","24px","32px","48px","64px","96px","128px"];h.body=h[2],h.label=h[1];var d={name:"Default",breakpoints:p,colors:{background:"hsl(0, 0%, 100%)",white:"hsl(0, 0%, 100%)",black:"hsl(0, 0%, 0%)",grey:["hsl(0, 0%, 93%)","hsl(0, 0%, 60%)"],bodyText:"hsl(207, 7%, 26%)",mobileInstantSearchBg:"hsla(0, 0%, 100%, 0.6)"},space:f,fontSizes:h,lineHeights:[1,1.125,1.25,1.5],fontWeights:{light:300,normal:400,bold:600},letterSpacings:{normal:"normal",caps:"0.25em",labels:"0.05em"},radii:["0","2px","4px","8px","16px"],sizes:["40px","48px","500px"],borders:[0,"1px solid #e2e2e2"],shadows:{instantSearch:"0 2px 10px 0 rgba(74, 73, 74, 0.2)"},zIndices:["0","2147483645","2147483646","2147483647"],instantSearchWidgetProps:{width:500}},m=n(41),g=s.d,b=s.c,v=s.b,O=s.a,E=g,x=n(5);function j(){var e=Object(x.a)(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return j=function(){return e},e}var y=b(j()),w=function(){var e=[];return document.querySelectorAll('form[action="/search"]').forEach((function(t){e.push(t.querySelector('input[name="q"]'))})),e},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"${{amount}}";"string"===typeof e&&(e=e.replace(".",""));var n="",a=/\{\{\s*(\w+)\s*\}\}/,r=t;function c(e,t,n,a){if(n=n||",",a=a||".",isNaN(e)||null===e)return 0;var r=(e=(e/100).toFixed(t)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n)+(r[1]?a+r[1]:"")}switch(r.match(a)[1]){case"amount":n=c(e,2);break;case"amount_no_decimals":n=c(e,0);break;case"amount_with_comma_separator":n=c(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=c(e,0,".",",");break;case"amount_no_decimals_with_space_separator":n=c(e,0," ");break;case"amount_with_apostrophe_separator":n=c(e,2,"'");break;default:n=c(e,2)}return r.replace(a,n)};function k(){var e=Object(x.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return k=function(){return e},e}var I=E.div(k(),m.h,m.c,m.e,m.b,m.a,m.f);function C(){var e=Object(x.a)(["\n  ","\n"]);return C=function(){return e},e}var T=E(I)(C(),m.d);T.defaultProps={display:"flex"};var L=T;function F(){var e=Object(x.a)(["\n  ","\n"]);return F=function(){return e},e}var W=E(I)(F(),m.g);function P(){var e=Object(x.a)(["\n  /* text-decoration: none; */\n  outline: none;\n  ","\n  ","\n"]);return P=function(){return e},e}var q=Object(m.i)({textDecoration:{property:"textDecoration"}}),z=E(I)(P(),m.j,q),D=Object(r.forwardRef)((function(e,t){return c.a.createElement(z,Object.assign({ref:t,as:"a",textDecoration:"none"},e))})),A=n(26);function R(){var e=Object(x.a)(["\n  cursor: pointer;\n"]);return R=function(){return e},e}var _=Object(s.d)(L)(R()),H=function(e){var t=e.className,n=e.children,a=e.url,o=Object(A.a)(e,["className","children","url"]),i=Object(r.useState)(!1),u=Object(l.a)(i,2),s=u[0],p=u[1],f=Object(r.useCallback)((function(){p(!0)}),[]),h=Object(r.useCallback)((function(){p(!1)}),[]),d=Object(r.useCallback)((function(e){e.preventDefault(),1===e.nativeEvent.which&&(window.location.href=a)}),[a]);return c.a.createElement(_,Object.assign({alignItems:"center",py:2,bg:s?"grey.0":null,className:t,onMouseDown:d,onMouseOver:f,onMouseLeave:h,onKeyDown:function(){console.log("Key down")},onkeyup:function(){console.log("Key up")}},o),n)};function B(){var e=Object(x.a)(["\n  ","\n  ","\n  ","\n"]);return B=function(){return e},e}var M=E(I)(B(),m.j,Object(m.i)({wordWrap:!0}),Object(m.i)({textDecoration:!0})),N=Object(r.forwardRef)((function(e,t){return c.a.createElement(M,Object.assign({ref:t,fontSize:"body",fontWeight:"normal",color:"bodyText",wordWrap:"break-word"},e))}));function K(){var e=Object(x.a)([""]);return K=function(){return e},e}var U=s.d.div(K()),G=function(e){var t=e.title,n=e.featuredImage,a=e.priceMin,o=e.compareAtPriceMin,i=Object(r.useState)("USD"),u=Object(l.a)(i,2),s=u[0],p=u[1],f=Object(r.useState)(""),h=Object(l.a)(f,2),d=h[0],m=h[1];Object(r.useEffect)((function(){p(Shopify.currency.active);try{m(theme.moneyFormat)}catch(e){}}),[]);var g=Object(r.useState)(0),b=Object(l.a)(g,2),v=b[0],O=b[1],E=Object(r.useState)(0),x=Object(l.a)(E,2),j=x[0],y=x[1];Object(r.useEffect)((function(){if(d)O(S(parseFloat(a).toFixed(2),d)),y(S(parseFloat(o).toFixed(2),d));else{var e=new Intl.NumberFormat(void 0,{style:"currency",currency:s});O(e.format(a)),y(e.format(o))}}),[o,s,d,a]);var w=a?c.a.createElement(N,{as:"span",fontWeight:"bold"},v):null,k=o?c.a.createElement(N,{as:"span",textDecoration:"line-through",color:"grey.1",mr:1},j):null;return c.a.createElement(H,{url:e.url},c.a.createElement(D,{href:e.url,title:t,minWidth:1,minHeight:1,marginRight:3},c.a.createElement(I,{as:"img",maxWidth:1,maxHeight:1,src:n.originalSrc,alt:""})),c.a.createElement(U,null,c.a.createElement(N,{mb:1},t),c.a.createElement(I,null,k,w)))},$=Object(r.forwardRef)((function(e,t){return c.a.createElement(N,Object.assign({ref:t,textAlign:"right",color:"grey.1",fontSize:"label",mb:2},e))})),J=function(e){var t=e.products;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"PRODUCTS"),c.a.createElement(I,null,t.map((function(e){return c.a.createElement(G,Object.assign({},e,{key:e.id}))}))))},Y=n(46),V=n.n(Y);function Q(){var e=Object(x.a)(["\n  & .flashsearch-unhighlight-text {\n    font-weight: ","\n  }\n"]);return Q=function(){return e},e}var X=function(e){var t=e.children;e.highlightIndex;return c.a.createElement("span",null,t)},Z=E(N)(Q(),(function(e){return e.unhighlightFontWeight})),ee=function(e){var t=e.searchWord,n=e.textToHighlight,a=e.className,o=Object(r.useContext)(O);return c.a.createElement(Z,{className:a,unhighlightFontWeight:o.fontWeights.bold},c.a.createElement(V.a,{searchWords:[t],autoEscape:!0,textToHighlight:n,highlightStyle:{color:"inherit"},unhighlightClassName:"flashsearch-unhighlight-text",highlightTag:X}))},te=function(e){var t=e.suggestions,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,null,"POPULAR SUGGESTIONS"),c.a.createElement(I,null,t.map((function(e,t){return c.a.createElement(H,{url:"/search?q=".concat(e),key:t.toString()},c.a.createElement(D,{href:"/search?q=".concat(e)},c.a.createElement(ee,{searchWord:n,textToHighlight:e})))}))))},ne=function(e){var t=e.query;return c.a.createElement(H,{url:"/search?q=".concat(t),justifyContent:"center"},c.a.createElement(N,{textAlign:"center"},c.a.createElement(N,{as:"span",color:"grey.1"},"View all results for ")," ",c.a.createElement(N,{as:"span",fontWeight:"bold"},t)))},ae=function(e){var t=e.collections,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"COLLECTIONS"),c.a.createElement(I,null,t.map((function(e,t){return c.a.createElement(H,{url:"/collections/".concat(e.handle),key:t.toString()},c.a.createElement(D,{href:"/collections/".concat(e.handle)},c.a.createElement(ee,{searchWord:n,textToHighlight:e.title})))}))))},re=function(e){var t=e.pages,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"PAGES"),c.a.createElement(I,null,t.map((function(e,t){return c.a.createElement(H,{url:"/pages/".concat(e.handle),key:t.toString()},c.a.createElement(D,{href:"/pages/".concat(e.handle)},c.a.createElement(ee,{searchWord:n,textToHighlight:e.title})))}))))};function ce(){var e=Object(x.a)(["\ncursor: pointer;\n"]);return ce=function(){return e},e}function oe(){var e=Object(x.a)(["\n  overscroll-behavior-y: contain;\n"]);return oe=function(){return e},e}var ie=E(W)(oe()),le=function(e){var t=e.suggestions,n=e.collections,a=e.pages,r=e.products,o=e.didYouMean,i=e.productPerPage,l=e.query,u=e.enable,s=e.top,p=e.left,f=e.maxHeight,h=e.input,d=e.redirect,m=E(I)(ce()),g=t&&t.length>0?c.a.createElement(te,{suggestions:t,query:l}):null,b=n&&n.length>0?c.a.createElement(ae,{collections:n,query:l}):null,v=a&&a.length>0?c.a.createElement(re,{pages:a,query:l}):null,O=o?c.a.createElement(N,{textAlign:"center",py:2},"Sorry, nothing found for ",c.a.createElement(N,{as:"span",fontWeight:"bold"},l),".\xa0 Did you mean: ",c.a.createElement(m,{as:"span",cursor:"pointer",bg:"grey.0",px:2,py:1,borderRadius:4,onClick:function(e){e.stopPropagation(),e.preventDefault();var t=new Event("input",{bubbles:!0,cancelable:!0});h.value=o,h.dispatchEvent(t)},onMouseDown:function(e){return e.preventDefault()}},c.a.createElement(N,{as:"span"},o))," ?"):null,x=r&&r.length>0?c.a.createElement(J,{products:r}):null,j=u&&null===g&&null===b&&null===v&&null===O&&null===x?c.a.createElement(N,null,"Sorry, nothing found for ",c.a.createElement(N,{as:"span",fontWeight:"bold"},'"',l,'"')):null,y=r.length===i&&l?c.a.createElement(ne,{query:l}):null,w=u&&(null===j||!(l in d));return c.a.createElement(ie,{bg:"background",position:"fixed",overflow:"auto",boxShadow:"instantSearch",border:["none","none",1,1],borderRadius:[0,0,1,1],zIndex:2,display:w?"block":"none",top:["6px","6px","".concat(s,"px"),"".concat(s,"px")],left:[0,0,"".concat(p,"px"),"".concat(p,"px")],pt:["mobileInstantSearchPt","mobileInstantSearchPt",0,0],width:["100%","100%",2,2],maxHeight:["calc(100% - 6px)","calc(100% - 6px)","".concat(f,"px"),"".concat(f,"px")],onTouchMove:function(){return document.activeElement.blur()}},c.a.createElement(I,{m:[3,3,4,4],mb:[3,3],mt:[2,2]},g,b,v,O,x,j,y))};function ue(){var e=Object(x.a)(["\n  ","\n  ","\n  box-sizing: border-box;\n  touch-action: manipulation;\n  background-repeat: none;\n  ::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n      border: 1px solid var(--colorHighlightBg) !important;\n      border-radius: var(--radius);\n      font-size: 16px;\n      display: block;\n      height:  16px;\n      width:  16px;\n      background-repeat: no-repeat;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'/%3E%3C/svg%3E\");\n      background-size: contain;\n      color: red;\n  }\n"]);return ue=function(){return e},e}var se=E(I)(ue(),m.j,Object(m.i)({outline:!0})),pe=Object(r.forwardRef)((function(e,t){return c.a.createElement(se,Object.assign({as:"input",ref:t,outline:"none",border:"none",fontSize:"body"},e))})),fe=n(47),he=n(48);function de(){var e=Object(x.a)(["\n  ","\n"]);return de=function(){return e},e}function me(){var e=Object(x.a)(["\n  ","\n"]);return me=function(){return e},e}var ge=E(I)(me(),Object(m.i)({backdropFilter:!0})),be=E(L)(de(),Object(m.i)({backdropFilter:!0})),ve=function(e){var t=e.placeholder,n=e.enable,a=e.handleOnClickBack,o=e.inputRef,i=Object(A.a)(e,["placeholder","enable","handleOnClickBack","inputRef"]);return Object(r.useEffect)((function(){o&&o.current&&o.current.focus()})),c.a.createElement(I,{display:[n?"block":"none",n?"block":"none","none","none"]},c.a.createElement(ge,{top:0,left:0,width:"100%",height:"100vh",bg:"mobileInstantSearchBg",backdropFilter:"blur(10px)",zIndex:1,position:"fixed"}),c.a.createElement(be,{top:0,left:0,width:"100%",zIndex:3,position:"fixed",alignItems:"center",justifyContent:"flex-end",bg:"mobileInstantSearchBg",backdropFilter:"blur(10px)"},c.a.createElement(L,{height:0,alignContent:"center",flexWrap:"wrap",cursor:"pointer",ml:3,onClick:a},c.a.createElement(fe.a,{icon:he.a})),c.a.createElement(L,{display:"block",flexGrow:"1",position:"relative",ml:3,mr:2,my:2},c.a.createElement(I,{as:"form"},c.a.createElement(pe,Object.assign({ref:o,type:"search",autoComplete:"off",placeholder:t,bg:"grey.0",px:3,py:2,width:"100%",height:0},i))))))};ve.defaultProps={placeholder:"Search"};var Oe=ve,Ee=n(20),xe=n(25),je=Object(xe.a)({name:"suggest",initialState:{collections:[],didYouMean:"",pages:[],productPerPage:0,products:[],query:"",suggestions:[]},reducers:{suggest:function(e){return e},suggestSuccess:function(e,t){return Object(Ee.a)({},e,{},t.payload)}}}),ye=je.actions,we=ye.suggest,Se=ye.suggestSuccess,ke=je.reducer,Ie=n(16),Ce=function(e,t){var n=e.pinnedProducts,a=e.merchandisingRules,r=e.synonyms,c=e.defaultSearchFields,o=e.metafieldSearchFields,i=e.variantMetafieldSearchFields,l={q:t};e&&n&&(t in n.applyToAll?l.pinnedProducts=n.applyToAll[t]:t in n.applyToInstantSearch&&(l.pinnedProducts=n.applyToInstantSearch[t]));var u=[];return e&&a&&(a.applyToAll&&(a.applyToAll.all&&a.applyToAll.all.length>0&&(u=[].concat(Object(Ie.a)(u),Object(Ie.a)(a.applyToAll.all))),t in a.applyToAll.specific&&(u=[].concat(Object(Ie.a)(u),Object(Ie.a)(a.applyToAll.specific[t])))),a.applyToInstantSearch&&(a.applyToInstantSearch.all&&a.applyToInstantSearch.all.length>0&&(u=[].concat(Object(Ie.a)(u),Object(Ie.a)(a.applyToInstantSearch.all))),t in a.applyToInstantSearch.specific&&(u=[].concat(Object(Ie.a)(u),Object(Ie.a)(a.applyToInstantSearch.specific[t]))))),u.length>0&&(l.merchandisingRules=u),r&&""!==r.analyzer&&(l.synonymsAnalyzer=r.analyzer),c&&(l.defaultSearchFields=c.map((function(e){return{name:e.name,weight:e.weight}}))),o&&(l.metafieldSearchFields=o),i&&(l.variantMetafieldSearchFields=i),l},Te=function(e){var t=Object(u.b)();return{handleOnInput:Object(r.useCallback)((function(n){var a=e.usageStatus,r=a.allFeatures,c=a.instantSearch;if(r&&c){var o=n.target.value.trim();if(o){var i=Ce(e,o);t(we(i))}}}),[t,e]),handleOnKeyDown:Object(r.useCallback)((function(t){var n=e.usageStatus,a=e.redirect,r=n.allFeatures,c=n.instantSearch;if(r&&c&&"Enter"===t.key){t.preventDefault();var o=t.target.value.trim();window.location=o in a?a[o]:"/search?q="+o}}),[e])}},Le=function(e){var t=e.input,n=e.settings,a=Object(r.useState)({top:0,left:0,maxHeight:0}),o=Object(l.a)(a,2),i=o[0],p=o[1],f=Object(r.useState)(!1),h=Object(l.a)(f,2),d=h[0],m=h[1],g=Object(r.useContext)(s.a),b=Object(r.useState)(0),v=Object(l.a)(b,2),O=v[0],E=v[1],x=Object(u.c)((function(e){return e.suggest})),j=x.query,y=Te(n),w=y.handleOnInput,S=y.handleOnKeyDown;Object(r.useEffect)((function(){E(g.instantSearchWidgetProps.width)}),[g.instantSearchWidgetProps]);var k=Object(r.useCallback)((function(){var e=function(e,t){var n=e.getBoundingClientRect(),a=n.top+n.height;return{top:a,left:window.innerWidth-n.left<t?n.left-(t-n.width):n.left,maxHeight:window.innerHeight-a-8}}(t,O),n=e.top,a=e.left,r=e.maxHeight;p({top:n,left:a,maxHeight:r})}),[t,O]);Object(r.useEffect)((function(){return window.addEventListener("resize",k),t.addEventListener("input",k),function(){window.removeEventListener("resize",k),t.removeEventListener("focus",k)}}),[k,t]);var I=Object(r.useCallback)((function(e){return function(){"blur"===e?m(!1):"focus"===e&&m(!0)}}),[]);Object(r.useEffect)((function(){t.addEventListener("input",w),t.addEventListener("keydown",S);var e=["focus","blur"];return e.forEach((function(e){t.addEventListener(e,I(e))})),function(){document.removeEventListener("input",w),document.removeEventListener("keydown",S),e.forEach((function(e){document.removeEventListener(e,I(e))}))}}),[w,S,I,t]);var C=d&&j;return c.a.createElement(le,Object.assign({},x,{redirect:n.redirect,enable:C},i,{input:t}))},Fe=function(e){var t=e.settings,n=Object(r.useState)(!1),a=Object(l.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(!1),p=Object(l.a)(s,2),f=p[0],h=p[1],d=Object(u.c)((function(e){return e.suggest})),m=d.query,g=Te(t),b=g.handleOnInput,v=g.handleOnKeyDown,O=Object(r.useCallback)((function(){i(!1),h(!1)}),[]);Object(r.useEffect)((function(){var e=function(e){h(!0),i(!0)},t=w();return t.forEach((function(t){t.addEventListener("focus",e)})),function(){t.forEach((function(t){t.removeEventListener("focus",e)}))}}),[]);var E=Object(r.useRef)(),x=o&&m;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Oe,{inputRef:E,onInput:b,onKeyDown:v,enable:f,handleOnClickBack:O}),c.a.createElement(le,Object.assign({},d,{redirect:t.redirect,enable:x,input:E.current})))},We=n(49),Pe=n(6),qe=n(13),ze=n.n(qe),De=n(12),Ae=Object(xe.a)({name:"common",initialState:{error:"",loading:!1,partialLoading:!1,itemLoading:!1,item2Loading:!1,message:"",itemLoader:{}},reducers:{fetchStart:function(e){return Object(Ee.a)({},e,{error:"",message:"",loading:!0})},fetchSuccess:function(e){return Object(Ee.a)({},e,{error:"",message:"",loading:!1})},fetchError:function(e,t){return Object(Ee.a)({},e,{loading:!1,error:(n=t.payload,n||"An Error occurred, please refresh and try again."),message:""});var n}}}),Re=Ae.actions,_e=Re.fetchStart,He=Re.fetchSuccess,Be=Re.fetchError,Me=Ae.reducer,Ne=n(19),Ke=n.n(Ne),Ue={apiEnpoint:"https://api.flashsearch.ecomfy.io/api/v1.0",scriptIdentifier:"/Ecomfy/flashsearch-theme"},Ge=Ue.apiEnpoint,$e={suggest:function(e){var t="".concat(Ge,"/guest/shopify/suggest");return Ke()({url:t,method:"post",headers:{"Content-Type":"application/json"},data:e})}},Je=ze.a.mark(Qe),Ye=ze.a.mark(Xe),Ve=ze.a.mark(Ze);function Qe(e){var t,n,a;return ze.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(De.d)(_e());case 4:return r.next=6,Object(De.b)($e.suggest,t);case 6:return n=r.sent,a=n.data,r.next=10,Object(De.d)(Se(a));case 10:return r.next=12,Object(De.d)(He());case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(De.d)(Be());case 18:case"end":return r.stop()}}),Je,null,[[1,14]])}function Xe(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.e)(we,Qe);case 2:case"end":return e.stop()}}),Ye)}function Ze(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.c)(Xe)]);case 2:case"end":return e.stop()}}),Ve)}var et=ze.a.mark(tt);function tt(e){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Ze()]);case 2:case"end":return e.stop()}}),et)}var nt=function(){return Object(Pe.c)({common:Me,suggest:ke})};function at(e){var t=Object(We.a)(),n=Object(Pe.e)(nt(),e,Object(Pe.d)(Object(Pe.a)(t)));return t.run(tt),n}var rt=at(),ct=function(e){var t=e.settings,n=Object(r.useState)([]),a=Object(l.a)(n,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(null!=t){var e=w();i(e.map((function(e,n){var a=at();return c.a.createElement(u.a,{store:a,key:n},c.a.createElement(Le,{key:n,input:e,settings:t}))})))}}),[t]),c.a.createElement(v,{theme:d},c.a.createElement(y,null),c.a.createElement(I,{id:"flashsearch-instant-search"},o),c.a.createElement(I,{id:"flashsearch-instant-search-mb"},c.a.createElement(u.a,{store:rt},null!==t?c.a.createElement(Fe,{settings:t}):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ot,it=Ue.apiEnpoint,lt={getSettings:function(){var e="".concat(it,"/guest/shopify/settings");return Ke()({url:e,method:"get"})}},ut=document.getElementsByTagName("script"),st=Object(a.a)(ut);try{for(st.s();!(ot=st.n()).done;){var pt=ot.value;if(pt.src&&pt.src.indexOf(Ue.scriptIdentifier)>-1){var ft=new URL(pt.src),ht=new URLSearchParams(ft.search);Ke.a.defaults.headers.common.authorization="Bearer "+ht.get("tk");break}}}catch(dt){st.e(dt)}finally{st.f()}lt.getSettings().then((function(e){var t=e.data,n=document.createElement("div");n.setAttribute("id","flashsearch-instant-search-container"),document.body.appendChild(n),i.a.render(c.a.createElement(ct,{settings:t}),n),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))})).catch((function(e){return console.log("Can't get settings: ".concat(e))}))}},[[52,1,2]]]);
//# sourceMappingURL=main.b35e4a8d.chunk.js.map