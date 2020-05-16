(this["webpackJsonpflashsearch-theme"]=this["webpackJsonpflashsearch-theme"]||[]).push([[0],{49:function(e,t,n){e.exports=n(77)},77:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(0),c=n.n(r),o=n(20),i=n.n(o),l=n(7),u=n(16),s=n(12),p=["576px","768px","992px","1200px"];p.sm=p[0],p.md=p[1],p.lg=p[2],p.xl=p[3];var d=["0","4px","8px","16px","32px","64px","128px","256px","512px"];d.mobileInstantSearchPt="50px";var f=["12px","14px","16px","20px","24px","32px","48px","64px","96px","128px"];f.body=f[2],f.label=f[1];var m={name:"Default",breakpoints:p,colors:{background:"hsl(0, 0%, 100%)",white:"hsl(0, 0%, 100%)",black:"hsl(0, 0%, 0%)",grey:["hsl(0, 0%, 93%)","hsl(0, 0%, 60%)"],bodyText:"hsl(207, 7%, 26%)",mobileInstantSearchBg:"hsla(0, 0%, 100%, 0.6)"},space:d,fontSizes:f,lineHeights:[1,1.125,1.25,1.5],fontWeights:{light:300,normal:400,bold:600},letterSpacings:{normal:"normal",caps:"0.25em",labels:"0.05em"},radii:["0","2px","4px","8px","16px"],sizes:["40px","48px","500px"],borders:[0,"1px solid #e2e2e2"],shadows:{instantSearch:"0 2px 10px 0 rgba(74, 73, 74, 0.2)"},zIndices:["0","2147483645","2147483646","2147483647"]},h=n(38),g=s.d,b=s.c,E=s.b,v=s.a,O=g,y=n(5);function j(){var e=Object(y.a)(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return j=function(){return e},e}var x=b(j()),S=function(){var e=[];return document.querySelectorAll('form[action="/search"]').forEach((function(t){e.push(t.querySelector('input[name="q"]'))})),e},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"${{amount}}";"string"===typeof e&&(e=e.replace(".",""));var n="",a=/\{\{\s*(\w+)\s*\}\}/,r=t;function c(e,t,n,a){if(n=n||",",a=a||".",isNaN(e)||null===e)return 0;var r=(e=(e/100).toFixed(t)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n)+(r[1]?a+r[1]:"")}switch(r.match(a)[1]){case"amount":n=c(e,2);break;case"amount_no_decimals":n=c(e,0);break;case"amount_with_comma_separator":n=c(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=c(e,0,".",",");break;case"amount_no_decimals_with_space_separator":n=c(e,0," ");break;case"amount_with_apostrophe_separator":n=c(e,2,"'");break;default:n=c(e,2)}return r.replace(a,n)};function _(){var e=Object(y.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return _=function(){return e},e}var k=O.div(_(),h.h,h.c,h.e,h.b,h.a,h.f);function T(){var e=Object(y.a)(["\n  ","\n"]);return T=function(){return e},e}var C=O(k)(T(),h.d);C.defaultProps={display:"flex"};var R=C;function I(){var e=Object(y.a)(["\n  ","\n"]);return I=function(){return e},e}var L=O(k)(I(),h.g);function H(){var e=Object(y.a)(["\n  /* text-decoration: none; */\n  outline: none;\n  ","\n  ","\n"]);return H=function(){return e},e}var A=Object(h.i)({textDecoration:{property:"textDecoration"}}),F=O(k)(H(),h.j,A),D=Object(r.forwardRef)((function(e,t){return c.a.createElement(F,Object.assign({ref:t,as:"a",textDecoration:"none"},e))})),P=n(23);function W(){var e=Object(y.a)(["\n  cursor: pointer;\n"]);return W=function(){return e},e}var q=Object(s.d)(R)(W()),z=function(e){var t=e.className,n=e.children,a=e.url,o=Object(P.a)(e,["className","children","url"]),i=Object(r.useState)(!1),u=Object(l.a)(i,2),s=u[0],p=u[1],d=Object(r.useCallback)((function(){p(!0)}),[]),f=Object(r.useCallback)((function(){p(!1)}),[]),m=Object(r.useCallback)((function(e){e.preventDefault(),1===e.nativeEvent.which&&(window.location.href=a)}),[a]);return c.a.createElement(q,Object.assign({alignItems:"center",py:2,bg:s?"grey.0":null,className:t,onMouseDown:m,onMouseOver:d,onMouseLeave:f,onKeyDown:function(){console.log("Key down")},onkeyup:function(){console.log("Key up")}},o),n)};function M(){var e=Object(y.a)(["\n  ","\n  ","\n  ","\n"]);return M=function(){return e},e}var U=O(k)(M(),h.j,Object(h.i)({wordWrap:!0}),Object(h.i)({textDecoration:!0})),G=Object(r.forwardRef)((function(e,t){return c.a.createElement(U,Object.assign({ref:t,fontSize:"body",fontWeight:"normal",color:"bodyText",wordWrap:"break-word"},e))}));function B(){var e=Object(y.a)([""]);return B=function(){return e},e}var N=s.d.div(B()),K=function(e){var t=e.title,n=e.featuredImage,a=e.priceMin,o=e.compareAtPriceMin,i=Object(r.useState)("USD"),u=Object(l.a)(i,2),s=u[0],p=u[1],d=Object(r.useState)(""),f=Object(l.a)(d,2),m=f[0],h=f[1];Object(r.useEffect)((function(){p(Shopify.currency.active);try{h(theme.moneyFormat)}catch(e){}}),[]);var g=Object(r.useState)(0),b=Object(l.a)(g,2),E=b[0],v=b[1],O=Object(r.useState)(0),y=Object(l.a)(O,2),j=y[0],x=y[1];Object(r.useEffect)((function(){if(m)v(w(parseFloat(a).toFixed(2),m)),x(w(parseFloat(o).toFixed(2),m));else{var e=new Intl.NumberFormat(void 0,{style:"currency",currency:s});v(e.format(a)),x(e.format(o))}}),[o,s,m,a]);var S=a?c.a.createElement(G,{as:"span",fontWeight:"bold"},E):null,_=o?c.a.createElement(G,{as:"span",textDecoration:"line-through",color:"grey.1",mr:1},j):null;return c.a.createElement(z,{url:e.url},c.a.createElement(D,{href:e.url,title:t,minWidth:1,minHeight:1,marginRight:3},c.a.createElement(k,{as:"img",maxWidth:1,maxHeight:1,src:n.originalSrc,alt:""})),c.a.createElement(N,null,c.a.createElement(G,{mb:1},t),c.a.createElement(k,null,_,S)))},$=Object(r.forwardRef)((function(e,t){return c.a.createElement(G,Object.assign({ref:t,textAlign:"right",color:"grey.1",fontSize:"label",mb:2},e))})),J=function(e){var t=e.products;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"PRODUCTS"),c.a.createElement(k,null,t.map((function(e){return c.a.createElement(K,Object.assign({},e,{key:e.id}))}))))},Y=n(43),V=n.n(Y);function Q(){var e=Object(y.a)(["\n  & .flashsearch-unhighlight-text {\n    font-weight: ","\n  }\n"]);return Q=function(){return e},e}var X=function(e){var t=e.children;e.highlightIndex;return c.a.createElement("span",null,t)},Z=O(G)(Q(),(function(e){return e.unhighlightFontWeight})),ee=function(e){var t=e.searchWord,n=e.textToHighlight,a=e.className,o=Object(r.useContext)(v);return c.a.createElement(Z,{className:a,unhighlightFontWeight:o.fontWeights.bold},c.a.createElement(V.a,{searchWords:[t],autoEscape:!0,textToHighlight:n,highlightStyle:{color:"inherit"},unhighlightClassName:"flashsearch-unhighlight-text",highlightTag:X}))},te=function(e){var t=e.suggestions,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,null,"POPULAR SUGGESTIONS"),c.a.createElement(k,null,t.map((function(e,t){return c.a.createElement(z,{url:"/search?q=".concat(e),key:t.toString()},c.a.createElement(D,{href:"/search?q=".concat(e)},c.a.createElement(ee,{searchWord:n,textToHighlight:e})))}))))},ne=function(e){var t=e.query;return c.a.createElement(z,{url:"/search?q=".concat(t),justifyContent:"center"},c.a.createElement(G,{textAlign:"center"},c.a.createElement(G,{as:"span",color:"grey.1"},"View all results for ")," ",c.a.createElement(G,{as:"span",fontWeight:"bold"},t)))},ae=function(e){var t=e.collections,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"COLLECTIONS"),c.a.createElement(k,null,t.map((function(e,t){return c.a.createElement(z,{url:"/collections/".concat(e.handle),key:t.toString()},c.a.createElement(D,{href:"/collections/".concat(e.handle)},c.a.createElement(ee,{searchWord:n,textToHighlight:e.title})))}))))},re=function(e){var t=e.pages,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"PAGES"),c.a.createElement(k,null,t.map((function(e,t){return c.a.createElement(z,{url:"/pages/".concat(e.handle),key:t.toString()},c.a.createElement(D,{href:"/pages/".concat(e.handle)},c.a.createElement(ee,{searchWord:n,textToHighlight:e.title})))}))))};function ce(){var e=Object(y.a)(["\ncursor: pointer;\n"]);return ce=function(){return e},e}function oe(){var e=Object(y.a)(["\n  overscroll-behavior-y: contain;\n"]);return oe=function(){return e},e}var ie=O(L)(oe()),le=function(e){var t=e.suggestions,n=e.collections,a=e.pages,r=e.products,o=e.didYouMean,i=e.productPerPage,l=e.query,u=e.enable,s=e.top,p=e.left,d=e.maxHeight,f=e.input,m=O(k)(ce()),h=t&&t.length>0?c.a.createElement(te,{suggestions:t,query:l}):null,g=n&&n.length>0?c.a.createElement(ae,{collections:n,query:l}):null,b=a&&a.length>0?c.a.createElement(re,{pages:a,query:l}):null,E=o?c.a.createElement(G,{textAlign:"center",py:2},"Sorry, nothing found for ",c.a.createElement(G,{as:"span",fontWeight:"bold"},l),".\xa0 Did you mean: ",c.a.createElement(m,{as:"span",cursor:"pointer",bg:"grey.0",px:2,py:1,borderRadius:4,onClick:function(e){e.stopPropagation(),e.preventDefault();var t=new Event("input",{bubbles:!0,cancelable:!0});f.value=o,f.dispatchEvent(t)},onMouseDown:function(e){return e.preventDefault()}},c.a.createElement(G,{as:"span"},o))," ?"):null,v=r&&r.length>0?c.a.createElement(J,{products:r}):null,y=u&&null===h&&null===g&&null===b&&null===E&&null===v?c.a.createElement(G,null,"Sorry, nothing found for ",c.a.createElement(G,{as:"span",fontWeight:"bold"},'"',l,'"')):null,j=r.length===i&&l?c.a.createElement(ne,{query:l}):null;return c.a.createElement(ie,{bg:"background",position:"fixed",overflow:"auto",boxShadow:"instantSearch",border:["none","none",1,1],borderRadius:[0,0,1,1],zIndex:2,display:u?"block":"none",top:["6px","6px","".concat(s,"px"),"".concat(s,"px")],left:[0,0,"".concat(p,"px"),"".concat(p,"px")],pt:["mobileInstantSearchPt","mobileInstantSearchPt",0,0],width:["100%","100%",2,2],maxHeight:["calc(100% - 6px)","calc(100% - 6px)","".concat(d,"px"),"".concat(d,"px")],onTouchMove:function(){return document.activeElement.blur()}},c.a.createElement(k,{m:[3,3,4,4],mb:[3,3],mt:[2,2]},h,g,b,E,v,y,j))};function ue(){var e=Object(y.a)(["\n  ","\n  ","\n  box-sizing: border-box;\n  touch-action: manipulation;\n  background-repeat: none;\n  ::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n      border: 1px solid var(--colorHighlightBg) !important;\n      border-radius: var(--radius);\n      font-size: 16px;\n      display: block;\n      height:  16px;\n      width:  16px;\n      background-repeat: no-repeat;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'/%3E%3C/svg%3E\");\n      background-size: contain;\n      color: red;\n  }\n"]);return ue=function(){return e},e}var se=O(k)(ue(),h.j,Object(h.i)({outline:!0})),pe=Object(r.forwardRef)((function(e,t){return c.a.createElement(se,Object.assign({as:"input",ref:t,outline:"none",border:"none",fontSize:"body"},e))})),de=n(44),fe=n(45);function me(){var e=Object(y.a)(["\n  ","\n"]);return me=function(){return e},e}function he(){var e=Object(y.a)(["\n  ","\n"]);return he=function(){return e},e}var ge=O(k)(he(),Object(h.i)({backdropFilter:!0})),be=O(R)(me(),Object(h.i)({backdropFilter:!0})),Ee=function(e){var t=e.placeholder,n=e.enable,a=e.handleOnClickBack,o=e.inputRef,i=Object(P.a)(e,["placeholder","enable","handleOnClickBack","inputRef"]);return Object(r.useEffect)((function(){o&&o.current&&o.current.focus()})),c.a.createElement(k,{display:[n?"block":"none",n?"block":"none","none","none"]},c.a.createElement(ge,{top:0,left:0,width:"100%",height:"100vh",bg:"mobileInstantSearchBg",backdropFilter:"blur(10px)",zIndex:1,position:"fixed"}),c.a.createElement(be,{top:0,left:0,width:"100%",zIndex:3,position:"fixed",alignItems:"center",justifyContent:"flex-end",bg:"mobileInstantSearchBg",backdropFilter:"blur(10px)"},c.a.createElement(R,{height:0,alignContent:"center",flexWrap:"wrap",cursor:"pointer",ml:3,onClick:a},c.a.createElement(de.a,{icon:fe.a})),c.a.createElement(R,{display:"block",flexGrow:"1",position:"relative",ml:3,mr:2,my:2},c.a.createElement(k,{as:"form"},c.a.createElement(pe,Object.assign({ref:o,type:"search",autoComplete:"off",placeholder:t,bg:"grey.0",px:3,py:2,width:"100%",height:0},i))))))};Ee.defaultProps={placeholder:"Search"};var ve=Ee,Oe=function(e,t){return{type:"SUGGEST",payload:{query:e,metadata:t}}},ye=function(e,t){return{type:"SUGGEST_SUCCESS",payload:{data:e,metadata:t}}},je={"variants.price":1,percentSale:1,available:1,publishedAt:1},xe=function(e){return e.map((function(e){return(t=e.field)&&t in je?function(e){return"publishedAt"===e}(e.field)?e.action+"~__~"+e.field+"~__~"+e.valueDate.fromDate+"~_~"+e.valueDate.toDate:e.action+"~__~"+e.field+"~__~"+e.value.min+"~_~"+e.value.max:e.action+"~__~"+e.field+"~__~"+e.values.join("~_~");var t})).join("~___~")},Se=function(e){return e.join(",")},we=function(e){var t=Object(u.b)();return{handleOnInput:Object(r.useCallback)((function(n){var a=n.target.value.trim();if(a){var r="";e&&e.pinnedProducts&&(a in e.pinnedProducts.applyToAll?r=Se(e.pinnedProducts.applyToAll[a]):a in e.pinnedProducts.applyToInstantSearch&&(r=Se(e.pinnedProducts.applyToInstantSearch[a])));var c=[];e&&e.merchandisingRules&&(e.merchandisingRules.applyToAll.all&&e.merchandisingRules.applyToAll.all.length>0&&c.push(xe(e.merchandisingRules.applyToAll.all)),a in e.merchandisingRules.applyToAll.specific&&c.push(xe(e.merchandisingRules.applyToAll.specific[a])),e.merchandisingRules.applyToInstantSearch.all&&e.merchandisingRules.applyToInstantSearch.all.length>0&&c.push(xe(e.merchandisingRules.applyToInstantSearch.all)),a in e.merchandisingRules.applyToInstantSearch.specific&&c.push(xe(e.merchandisingRules.applyToInstantSearch.specific[a])));var o="";""!==e.synonyms.analyzer&&(o=e.synonyms.analyzer);var i={productLimit:100};""!==r&&(i.pinnedProducts=r),c.length>0&&(i.merchandisingRules=c.join("~___~")),""!==o&&(i.synonymsAnalyzer=o),0===Object.keys(i).length?t(Oe(a)):t(Oe(a,i))}}),[t,e]),handleOnKeyDown:Object(r.useCallback)((function(t){if("Enter"===t.key){t.preventDefault();var n=t.target.value.trim();n in e.redirect?window.location=e.redirect[n]:window.location="/search?q="+n}}),[e])}},_e=function(e){var t=e.input,n=e.settings,a=Object(r.useState)({top:0,left:0,maxHeight:0}),o=Object(l.a)(a,2),i=o[0],p=o[1],d=Object(r.useState)(!1),f=Object(l.a)(d,2),m=f[0],h=f[1],g=Object(r.useContext)(s.a),b=Object(r.useState)(0),E=Object(l.a)(b,2),v=E[0],O=E[1],y=Object(u.c)((function(e){return e.suggest})),j=y.query,x=we(n),S=x.handleOnInput,w=x.handleOnKeyDown;Object(r.useEffect)((function(){var e=parseInt(/(\d+)/gm.exec(g.sizes[1])[1]);O(e)}),[g.sizes]);var _=Object(r.useCallback)((function(){var e=function(e,t){var n=e.getBoundingClientRect(),a=n.top+n.height;return{top:a,left:window.innerWidth-n.left<t?n.left-(t-n.width):n.left,maxHeight:window.innerHeight-a-8}}(t,v),n=e.top,a=e.left,r=e.maxHeight;p({top:n,left:a,maxHeight:r})}),[t,v]);Object(r.useEffect)((function(){return window.addEventListener("resize",_),t.addEventListener("input",_),function(){window.removeEventListener("resize",_),t.removeEventListener("focus",_)}}),[_,t]);var k=Object(r.useCallback)((function(e){return function(){"blur"===e?h(!1):"focus"===e&&h(!0)}}),[]);Object(r.useEffect)((function(){t.addEventListener("input",S),t.addEventListener("keydown",w);var e=["focus","blur"];return e.forEach((function(e){t.addEventListener(e,k(e))})),function(){document.removeEventListener("input",S),document.removeEventListener("keydown",w),e.forEach((function(e){document.removeEventListener(e,k(e))}))}}),[S,w,k,t]);var T=m&&j;return c.a.createElement(le,Object.assign({},y,{enable:T},i,{input:t}))},ke=function(e){var t=e.settings,n=Object(r.useState)(!1),a=Object(l.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(!1),p=Object(l.a)(s,2),d=p[0],f=p[1],m=Object(u.c)((function(e){return e.suggest})),h=m.query,g=we(t),b=g.handleOnInput,E=g.handleOnKeyDown,v=Object(r.useCallback)((function(){i(!1),f(!1)}),[]);Object(r.useEffect)((function(){var e=function(e){f(!0),i(!0)},t=S();return t.forEach((function(t){t.addEventListener("focus",e)})),function(){t.forEach((function(t){t.removeEventListener("focus",e)}))}}),[]);var O=Object(r.useRef)(),y=o&&h;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ve,{inputRef:O,onInput:b,onKeyDown:E,enable:d,handleOnClickBack:v}),c.a.createElement(le,Object.assign({},m,{enable:y,input:O.current})))},Te=n(46),Ce=n(13),Re=n(14),Ie=n.n(Re),Le=n(11),He=n(18),Ae=n.n(He),Fe={apiEnpoint:"https://api.flashsearch.ecomfy.io/api/v1.0",scriptIdentifier:"/Ecomfy/flashsearch-theme"},De=Fe.apiEnpoint,Pe={suggest:function(e,t){var n="".concat(De,"/guest/shopify/suggest?q=").concat(e);return t&&(n="".concat(De,"/guest/shopify/suggest?q=").concat(e,"&").concat(function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}(t))),Ae()({url:n,method:"get"})}},We=Ie.a.mark(Me),qe=Ie.a.mark(Ue),ze=Ie.a.mark(Ge);function Me(e){var t,n,a,r,c,o,i;return Ie.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.query,(a=t.metadata)&&(r=a),l.prev=3,l.next=6,Object(Le.d)({type:"FETCH_START"});case 6:if(!r){l.next=13;break}return l.next=9,Object(Le.b)(Pe.suggest,n,r);case 9:o=l.sent,c=o.data,l.next=17;break;case 13:return l.next=15,Object(Le.b)(Pe.suggest,n);case 15:i=l.sent,c=i.data;case 17:return l.next=19,Object(Le.d)(ye(c,a));case 19:return l.next=21,Object(Le.d)({type:"FETCH_SUCCESS"});case 21:l.next=27;break;case 23:return l.prev=23,l.t0=l.catch(3),l.next=27,Object(Le.d)({type:"FETCH_ERROR",payload:void 0});case 27:case"end":return l.stop()}}),We,null,[[3,23]])}function Ue(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.e)("SUGGEST",Me);case 2:case"end":return e.stop()}}),qe)}function Ge(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Object(Le.c)(Ue)]);case 2:case"end":return e.stop()}}),ze)}var Be=Ie.a.mark(Ne);function Ne(e){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Ge()]);case 2:case"end":return e.stop()}}),Be)}var Ke=n(6),$e={error:"",loading:!1,partialLoading:!1,itemLoading:!1,item2Loading:!1,message:""},Je=function(e){return e||"An Error occurred, please refresh and try again."},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return Object(Ke.a)({},e,{error:"",message:"",loading:!0});case"FETCH_SUCCESS":return Object(Ke.a)({},e,{error:"",message:"",loading:!1});case"FETCH_ERROR":return Object(Ke.a)({},e,{loading:!1,error:Je(t.payload),message:""});case"FETCH_PARTIAL_START":return Object(Ke.a)({},e,{error:"",message:"",partialLoading:!0});case"FETCH_PARTIAL_SUCCESS":return Object(Ke.a)({},e,{error:"",message:"",partialLoading:!1});case"FETCH_PARTIAL_ERROR":return Object(Ke.a)({},e,{partialLoading:!1,error:Je(t.payload),message:""});case"FETCH_ITEM_START":return Object(Ke.a)({},e,{error:"",message:"",itemLoading:!0});case"FETCH_ITEM_SUCCESS":return Object(Ke.a)({},e,{error:"",message:"",itemLoading:!1});case"FETCH_ITEM_ERROR":return Object(Ke.a)({},e,{itemLoading:!1,error:Je(t.payload),message:""});case"FETCH_ITEM_2_START":return Object(Ke.a)({},e,{error:"",message:"",item2Loading:!0});case"FETCH_ITEM_2_SUCCESS":return Object(Ke.a)({},e,{error:"",message:"",item2Loading:!1});case"FETCH_ITEM_2_ERROR":return Object(Ke.a)({},e,{item2Loading:!1,error:Je(t.payload),message:""});case"SHOW_MESSAGE":return Object(Ke.a)({},e,{error:"",message:t.payload,loading:!1});case"SHOW_ERROR_MESSAGE":return Object(Ke.a)({},e,{loading:!1,error:t.payload,message:""});case"HIDE_MESSAGE":return Object(Ke.a)({},e,{loading:!1,error:"",message:""});default:return e}},Ve={collections:[],didYouMean:"",pages:[],productPerPage:0,products:[],query:"",suggestions:[]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUGGEST_SUCCESS":var n=t.payload.data;return Object(Ke.a)({},e,{},n);default:return e}},Xe=function(){return Object(Ce.c)({common:Ye,suggest:Qe})};function Ze(e){var t=Object(Te.a)(),n=Object(Ce.e)(Xe(),e,Object(Ce.d)(Object(Ce.a)(t)));return t.run(Ne),n}var et=Ze(),tt=function(e){var t=e.settings,n=Object(r.useState)([]),a=Object(l.a)(n,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(null!=t){var e=S();i(e.map((function(e,n){var a=Ze();return c.a.createElement(u.a,{store:a,key:n},c.a.createElement(_e,{key:n,input:e,settings:t}))})))}}),[t]),c.a.createElement(E,{theme:m},c.a.createElement(x,null),c.a.createElement(k,{id:"flashsearch-instant-search"},o),c.a.createElement(k,{id:"flashsearch-instant-search-mb"},c.a.createElement(u.a,{store:et},null!==t?c.a.createElement(ke,{settings:t}):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt,at=Fe.apiEnpoint,rt={getSettings:function(){var e="".concat(at,"/guest/shopify/settings");return Ae()({url:e,method:"get"})}},ct=document.getElementsByTagName("script"),ot=Object(a.a)(ct);try{for(ot.s();!(nt=ot.n()).done;){var it=nt.value;if(it.src&&it.src.indexOf(Fe.scriptIdentifier)>-1){var lt=new URL(it.src),ut="Bearer "+new URLSearchParams(lt.search).get("tk");Ae.a.defaults.headers.common.authorization=ut;break}}}catch(st){ot.e(st)}finally{ot.f()}rt.getSettings().then((function(e){var t=e.data,n=document.createElement("div");n.setAttribute("id","flashsearch-instant-search-container"),document.body.appendChild(n),i.a.render(c.a.createElement(tt,{settings:t}),n),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))})).catch((function(e){return console.log("Can't get settings: ".concat(e))}))}},[[49,1,2]]]);
//# sourceMappingURL=main.1fb9ffbe.chunk.js.map