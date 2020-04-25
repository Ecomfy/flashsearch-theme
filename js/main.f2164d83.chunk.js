(this["webpackJsonpflashsearch-theme"]=this["webpackJsonpflashsearch-theme"]||[]).push([[0],{49:function(e,t,n){e.exports=n(77)},77:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(0),c=n.n(r),o=n(20),i=n.n(o),u=n(7),l=n(16),s=n(12),f=["576px","768px","992px","1200px"];f.sm=f[0],f.md=f[1],f.lg=f[2],f.xl=f[3];var p=["0","4px","8px","16px","32px","64px","128px","256px","512px"];p.mobileInstantSearchPt="50px";var d=["12px","14px","16px","20px","24px","32px","48px","64px","96px","128px"];d.body=d[2],d.label=d[1];var m={name:"Default",breakpoints:f,colors:{background:"hsl(0, 0%, 100%)",white:"hsl(0, 0%, 100%)",black:"hsl(0, 0%, 0%)",grey:["hsl(0, 0%, 93%)","hsl(0, 0%, 60%)"],bodyText:"hsl(207, 7%, 26%)",mobileInstantSearchBg:"hsla(0, 0%, 100%, 0.6)"},space:p,fontSizes:d,lineHeights:[1,1.125,1.25,1.5],fontWeights:{light:300,normal:400,bold:600},letterSpacings:{normal:"normal",caps:"0.25em",labels:"0.05em"},radii:["0","2px","4px","8px","16px"],sizes:["40px","48px","500px"],borders:[0,"1px solid #e2e2e2"],shadows:{instantSearch:"0 2px 10px 0 rgba(74, 73, 74, 0.2)"},zIndices:["0","2147483645","2147483646","2147483647"]},g=n(38),h=s.d,b=s.c,E=s.b,v=s.a,O=h,x=n(5);function j(){var e=Object(x.a)(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return j=function(){return e},e}var y=b(j()),S=function(){var e=[];return document.querySelectorAll('form[action="/search"]').forEach((function(t){e.push(t.querySelector('input[name="q"]'))})),e},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"${{amount}}";"string"===typeof e&&(e=e.replace(".",""));var n="",a=/\{\{\s*(\w+)\s*\}\}/,r=t;function c(e,t,n,a){if(n=n||",",a=a||".",isNaN(e)||null===e)return 0;var r=(e=(e/100).toFixed(t)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n)+(r[1]?a+r[1]:"")}switch(r.match(a)[1]){case"amount":n=c(e,2);break;case"amount_no_decimals":n=c(e,0);break;case"amount_with_comma_separator":n=c(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=c(e,0,".",",");break;case"amount_no_decimals_with_space_separator":n=c(e,0," ");break;case"amount_with_apostrophe_separator":n=c(e,2,"'");break;default:n=c(e,2)}return r.replace(a,n)};function k(){var e=Object(x.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return k=function(){return e},e}var C=O.div(k(),g.h,g.c,g.e,g.b,g.a,g.f);function T(){var e=Object(x.a)(["\n  ","\n"]);return T=function(){return e},e}var _=O(C)(T(),g.d);_.defaultProps={display:"flex"};var R=_;function L(){var e=Object(x.a)(["\n  ","\n"]);return L=function(){return e},e}var H=O(C)(L(),g.g);function F(){var e=Object(x.a)(["\n  /* text-decoration: none; */\n  outline: none;\n  ","\n  ","\n"]);return F=function(){return e},e}var I=Object(g.i)({textDecoration:{property:"textDecoration"}}),W=O(C)(F(),g.j,I),A=Object(r.forwardRef)((function(e,t){return c.a.createElement(W,Object.assign({ref:t,as:"a",textDecoration:"none"},e))})),P=n(23);function q(){var e=Object(x.a)(["\n  cursor: pointer;\n"]);return q=function(){return e},e}var z=Object(s.d)(R)(q()),M=function(e){var t=e.className,n=e.children,a=e.url,o=Object(P.a)(e,["className","children","url"]),i=Object(r.useState)(!1),l=Object(u.a)(i,2),s=l[0],f=l[1],p=Object(r.useCallback)((function(){f(!0)}),[]),d=Object(r.useCallback)((function(){f(!1)}),[]),m=Object(r.useCallback)((function(e){e.preventDefault(),1===e.nativeEvent.which&&(window.location.href=a)}),[a]);return c.a.createElement(z,Object.assign({alignItems:"center",py:2,bg:s?"grey.0":null,className:t,onMouseDown:m,onMouseOver:p,onMouseLeave:d,onKeyDown:function(){console.log("Key down")},onkeyup:function(){console.log("Key up")}},o),n)};function U(){var e=Object(x.a)(["\n  ","\n  ","\n  ","\n"]);return U=function(){return e},e}var D=O(C)(U(),g.j,Object(g.i)({wordWrap:!0}),Object(g.i)({textDecoration:!0})),G=Object(r.forwardRef)((function(e,t){return c.a.createElement(D,Object.assign({ref:t,fontSize:"body",fontWeight:"normal",color:"bodyText",wordWrap:"break-word"},e))}));function B(){var e=Object(x.a)([""]);return B=function(){return e},e}var N=s.d.div(B()),K=function(e){var t=e.title,n=e.featuredImage,a=e.priceMin,o=e.compareAtPriceMin,i=Object(r.useState)("USD"),l=Object(u.a)(i,2),s=l[0],f=l[1],p=Object(r.useState)(""),d=Object(u.a)(p,2),m=d[0],g=d[1];Object(r.useEffect)((function(){f(Shopify.currency.active);try{g(theme.moneyFormat)}catch(e){}}),[]);var h=Object(r.useState)(0),b=Object(u.a)(h,2),E=b[0],v=b[1],O=Object(r.useState)(0),x=Object(u.a)(O,2),j=x[0],y=x[1];Object(r.useEffect)((function(){if(m)v(w(parseFloat(a).toFixed(2),m)),y(w(parseFloat(o).toFixed(2),m));else{var e=new Intl.NumberFormat(void 0,{style:"currency",currency:s});v(e.format(a)),y(e.format(o))}}),[o,s,m,a]);var S=a?c.a.createElement(G,{as:"span",fontWeight:"bold"},E):null,k=o?c.a.createElement(G,{as:"span",textDecoration:"line-through",color:"grey.1",mr:1},j):null;return c.a.createElement(M,{url:e.url},c.a.createElement(A,{href:e.url,title:t,minWidth:1,minHeight:1,marginRight:3},c.a.createElement(C,{as:"img",maxWidth:1,maxHeight:1,src:n.originalSrc,alt:""})),c.a.createElement(N,null,c.a.createElement(G,{mb:1},t),c.a.createElement(C,null,k,S)))},$=Object(r.forwardRef)((function(e,t){return c.a.createElement(G,Object.assign({ref:t,textAlign:"right",color:"grey.1",fontSize:"label",mb:2},e))})),J=function(e){var t=e.products;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"PRODUCTS"),c.a.createElement(C,null,t.map((function(e){return c.a.createElement(K,Object.assign({},e,{key:e.id}))}))))},Y=n(43),V=n.n(Y);function Q(){var e=Object(x.a)(["\n  & .flashsearch-unhighlight-text {\n    font-weight: ","\n  }\n"]);return Q=function(){return e},e}var X=function(e){var t=e.children;e.highlightIndex;return c.a.createElement("span",null,t)},Z=O(G)(Q(),(function(e){return e.unhighlightFontWeight})),ee=function(e){var t=e.searchWord,n=e.textToHighlight,a=e.className,o=Object(r.useContext)(v);return c.a.createElement(Z,{className:a,unhighlightFontWeight:o.fontWeights.bold},c.a.createElement(V.a,{searchWords:[t],autoEscape:!0,textToHighlight:n,highlightStyle:{color:"inherit"},unhighlightClassName:"flashsearch-unhighlight-text",highlightTag:X}))},te=function(e){var t=e.suggestions,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,null,"POPULAR SUGGESTIONS"),c.a.createElement(C,null,t.map((function(e,t){return c.a.createElement(M,{url:"/search?q=".concat(e),key:t.toString()},c.a.createElement(A,{href:"/search?q=".concat(e)},c.a.createElement(ee,{searchWord:n,textToHighlight:e})))}))))},ne=function(e){var t=e.query;return c.a.createElement(M,{url:"/search?q=".concat(t),justifyContent:"center"},c.a.createElement(G,{textAlign:"center"},c.a.createElement(G,{as:"span",color:"grey.1"},"View all results for ")," ",c.a.createElement(G,{as:"span",fontWeight:"bold"},t)))},ae=function(e){var t=e.collections,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"COLLECTIONS"),c.a.createElement(C,null,t.map((function(e,t){return c.a.createElement(M,{url:"/collections/".concat(e.handle),key:t.toString()},c.a.createElement(A,{href:"/collections/".concat(e.handle)},c.a.createElement(ee,{searchWord:n,textToHighlight:e.title})))}))))},re=function(e){var t=e.pages,n=e.query;return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{mt:2},"PAGES"),c.a.createElement(C,null,t.map((function(e,t){return c.a.createElement(M,{url:"/pages/".concat(e.handle),key:t.toString()},c.a.createElement(A,{href:"/pages/".concat(e.handle)},c.a.createElement(ee,{searchWord:n,textToHighlight:e.title})))}))))};function ce(){var e=Object(x.a)(["\ncursor: pointer;\n"]);return ce=function(){return e},e}function oe(){var e=Object(x.a)(["\n  overscroll-behavior-y: contain;\n"]);return oe=function(){return e},e}var ie=O(H)(oe()),ue=function(e){var t=e.suggestions,n=e.collections,a=e.pages,r=e.products,o=e.didYouMean,i=e.productPerPage,u=e.query,l=e.enable,s=e.top,f=e.left,p=e.maxHeight,d=e.input,m=O(C)(ce()),g=t&&t.length>0?c.a.createElement(te,{suggestions:t,query:u}):null,h=n&&n.length>0?c.a.createElement(ae,{collections:n,query:u}):null,b=a&&a.length>0?c.a.createElement(re,{pages:a,query:u}):null,E=o?c.a.createElement(G,{textAlign:"center",py:2},"Sorry, nothing found for ",c.a.createElement(G,{as:"span",fontWeight:"bold"},u),".\xa0 Did you mean: ",c.a.createElement(m,{as:"span",cursor:"pointer",bg:"grey.0",px:2,py:1,borderRadius:4,onClick:function(e){e.stopPropagation(),e.preventDefault();var t=new Event("input",{bubbles:!0,cancelable:!0});d.value=o,d.dispatchEvent(t)},onMouseDown:function(e){return e.preventDefault()}},c.a.createElement(G,{as:"span"},o))," ?"):null,v=r&&r.length>0?c.a.createElement(J,{products:r}):null,x=l&&null===g&&null===h&&null===b&&null===E&&null===v?c.a.createElement(G,null,"Sorry, nothing found for ",c.a.createElement(G,{as:"span",fontWeight:"bold"},'"',u,'"')):null,j=r.length===i&&u?c.a.createElement(ne,{query:u}):null;return c.a.createElement(ie,{bg:"background",position:"fixed",overflow:"auto",boxShadow:"instantSearch",border:["none","none",1,1],borderRadius:[0,0,1,1],zIndex:2,display:l?"block":"none",top:["6px","6px","".concat(s,"px"),"".concat(s,"px")],left:[0,0,"".concat(f,"px"),"".concat(f,"px")],pt:["mobileInstantSearchPt","mobileInstantSearchPt",0,0],width:["100%","100%",2,2],maxHeight:["calc(100% - 6px)","calc(100% - 6px)","".concat(p,"px"),"".concat(p,"px")],onTouchMove:function(){return document.activeElement.blur()}},c.a.createElement(C,{m:[3,3,4,4],mb:[3,3],mt:[2,2]},g,h,b,E,v,x,j))};function le(){var e=Object(x.a)(["\n  ","\n  ","\n  box-sizing: border-box;\n  touch-action: manipulation;\n  background-repeat: none;\n  ::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n      border: 1px solid var(--colorHighlightBg) !important;\n      border-radius: var(--radius);\n      font-size: 16px;\n      display: block;\n      height:  16px;\n      width:  16px;\n      background-repeat: no-repeat;\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3E%3Cpath d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'/%3E%3C/svg%3E\");\n      background-size: contain;\n      color: red;\n  }\n"]);return le=function(){return e},e}var se=O(C)(le(),g.j,Object(g.i)({outline:!0})),fe=Object(r.forwardRef)((function(e,t){return c.a.createElement(se,Object.assign({as:"input",ref:t,outline:"none",border:"none",fontSize:"body"},e))})),pe=n(44),de=n(45);function me(){var e=Object(x.a)(["\n  ","\n"]);return me=function(){return e},e}function ge(){var e=Object(x.a)(["\n  ","\n"]);return ge=function(){return e},e}var he=O(C)(ge(),Object(g.i)({backdropFilter:!0})),be=O(R)(me(),Object(g.i)({backdropFilter:!0})),Ee=function(e){var t=e.placeholder,n=e.enable,a=e.handleOnClickBack,o=e.inputRef,i=Object(P.a)(e,["placeholder","enable","handleOnClickBack","inputRef"]);return Object(r.useEffect)((function(){o&&o.current&&o.current.focus()})),c.a.createElement(C,{display:[n?"block":"none",n?"block":"none","none","none"]},c.a.createElement(he,{top:0,left:0,width:"100%",height:"100vh",bg:"mobileInstantSearchBg",backdropFilter:"blur(10px)",zIndex:1,position:"fixed"}),c.a.createElement(be,{top:0,left:0,width:"100%",zIndex:3,position:"fixed",alignItems:"center",justifyContent:"flex-end",bg:"mobileInstantSearchBg",backdropFilter:"blur(10px)"},c.a.createElement(R,{height:0,alignContent:"center",flexWrap:"wrap",cursor:"pointer",ml:3,onClick:a},c.a.createElement(pe.a,{icon:de.a})),c.a.createElement(R,{display:"block",flexGrow:"1",position:"relative",ml:3,mr:2,my:2},c.a.createElement(C,{as:"form"},c.a.createElement(fe,Object.assign({ref:o,type:"search",autoComplete:"off",placeholder:t,bg:"grey.0",px:3,py:2,width:"100%",height:0},i))))))};Ee.defaultProps={placeholder:"Search"};var ve=Ee,Oe=function(e,t){return{type:"SUGGEST",payload:{query:e,metadata:t}}},xe=function(e,t){return{type:"SUGGEST_SUCCESS",payload:{data:e,metadata:t}}},je=function(e){var t=Object(l.b)();return Object(r.useCallback)((function(n){var a=n.target.value.trim();a&&(e&&e.pinnedProducts&&a in e.pinnedProducts?t(Oe(a,{pinnedProducts:e.pinnedProducts[a]})):t(Oe(a)))}),[t,e])},ye=function(e){var t=e.input,n=e.settings,a=Object(r.useState)({top:0,left:0,maxHeight:0}),o=Object(u.a)(a,2),i=o[0],f=o[1],p=Object(r.useState)(!1),d=Object(u.a)(p,2),m=d[0],g=d[1],h=Object(r.useContext)(s.a),b=Object(r.useState)(0),E=Object(u.a)(b,2),v=E[0],O=E[1],x=Object(l.c)((function(e){return e.suggest})),j=x.query,y=je(n);Object(r.useEffect)((function(){var e=parseInt(/(\d+)/gm.exec(h.sizes[1])[1]);O(e)}),[h.sizes]);var S=Object(r.useCallback)((function(){var e=function(e,t){var n=e.getBoundingClientRect(),a=n.top+n.height;return{top:a,left:window.innerWidth-n.left<t?n.left-(t-n.width):n.left,maxHeight:window.innerHeight-a-8}}(t,v),n=e.top,a=e.left,r=e.maxHeight;f({top:n,left:a,maxHeight:r})}),[t,v]);Object(r.useEffect)((function(){return window.addEventListener("resize",S),t.addEventListener("input",S),function(){window.removeEventListener("resize",S),t.removeEventListener("focus",S)}}),[S,t]);var w=Object(r.useCallback)((function(e){return function(){("focusout"===e||"focus"===e)&&g(!0)}}),[]);Object(r.useEffect)((function(){t.addEventListener("input",y);var e=["focus","focusout"];return e.forEach((function(e){t.addEventListener(e,w(e))})),function(){document.removeEventListener("input",y),e.forEach((function(e){document.removeEventListener(e,w(e))}))}}),[y,w,t]);var k=m&&j;return c.a.createElement(ue,Object.assign({},x,{enable:k},i,{input:t}))},Se=function(e){var t=e.settings,n=Object(r.useState)(!1),a=Object(u.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(!1),f=Object(u.a)(s,2),p=f[0],d=f[1],m=Object(l.c)((function(e){return e.suggest})),g=m.query,h=je(t),b=Object(r.useCallback)((function(){i(!1),d(!1)}),[]);Object(r.useEffect)((function(){var e=function(e){d(!0),i(!0)},t=S();return t.forEach((function(t){t.addEventListener("focus",e)})),function(){t.forEach((function(t){t.removeEventListener("focus",e)}))}}),[]);var E=Object(r.useRef)(),v=o&&g;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ve,{inputRef:E,onInput:h,enable:p,handleOnClickBack:b}),c.a.createElement(ue,Object.assign({},m,{enable:v,input:E.current})))},we=n(46),ke=n(13),Ce=n(14),Te=n.n(Ce),_e=n(11),Re=n(18),Le=n.n(Re),He={apiEnpoint:"https://api.flashsearch.ecomfy.io/api/v1.0",scriptIdentifier:"/Ecomfy/flashsearch-theme"},Fe=He.apiEnpoint,Ie={suggest:function(e,t){var n="".concat(Fe,"/guest/shopify/suggest?q=").concat(e);return t&&(n="".concat(Fe,"/guest/shopify/suggest?q=").concat(e,"&").concat(function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}(t))),Le()({url:n,method:"get"})}},We=Te.a.mark(qe),Ae=Te.a.mark(ze),Pe=Te.a.mark(Me);function qe(e){var t,n,a,r,c,o,i;return Te.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.query,(a=t.metadata)&&(r=a),u.prev=3,u.next=6,Object(_e.d)({type:"FETCH_START"});case 6:if(!r){u.next=13;break}return u.next=9,Object(_e.b)(Ie.suggest,n,r);case 9:o=u.sent,c=o.data,u.next=17;break;case 13:return u.next=15,Object(_e.b)(Ie.suggest,n);case 15:i=u.sent,c=i.data;case 17:return u.next=19,Object(_e.d)(xe(c,a));case 19:return u.next=21,Object(_e.d)({type:"FETCH_SUCCESS"});case 21:u.next=27;break;case 23:return u.prev=23,u.t0=u.catch(3),u.next=27,Object(_e.d)({type:"FETCH_ERROR",payload:void 0});case 27:case"end":return u.stop()}}),We,null,[[3,23]])}function ze(){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.e)("SUGGEST",qe);case 2:case"end":return e.stop()}}),Ae)}function Me(){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.a)([Object(_e.c)(ze)]);case 2:case"end":return e.stop()}}),Pe)}var Ue=Te.a.mark(De);function De(e){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_e.a)([Me()]);case 2:case"end":return e.stop()}}),Ue)}var Ge=n(6),Be={error:"",loading:!1,partialLoading:!1,itemLoading:!1,item2Loading:!1,message:""},Ne=function(e){return e||"An Error occurred, please refresh and try again."},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return Object(Ge.a)({},e,{error:"",message:"",loading:!0});case"FETCH_SUCCESS":return Object(Ge.a)({},e,{error:"",message:"",loading:!1});case"FETCH_ERROR":return Object(Ge.a)({},e,{loading:!1,error:Ne(t.payload),message:""});case"FETCH_PARTIAL_START":return Object(Ge.a)({},e,{error:"",message:"",partialLoading:!0});case"FETCH_PARTIAL_SUCCESS":return Object(Ge.a)({},e,{error:"",message:"",partialLoading:!1});case"FETCH_PARTIAL_ERROR":return Object(Ge.a)({},e,{partialLoading:!1,error:Ne(t.payload),message:""});case"FETCH_ITEM_START":return Object(Ge.a)({},e,{error:"",message:"",itemLoading:!0});case"FETCH_ITEM_SUCCESS":return Object(Ge.a)({},e,{error:"",message:"",itemLoading:!1});case"FETCH_ITEM_ERROR":return Object(Ge.a)({},e,{itemLoading:!1,error:Ne(t.payload),message:""});case"FETCH_ITEM_2_START":return Object(Ge.a)({},e,{error:"",message:"",item2Loading:!0});case"FETCH_ITEM_2_SUCCESS":return Object(Ge.a)({},e,{error:"",message:"",item2Loading:!1});case"FETCH_ITEM_2_ERROR":return Object(Ge.a)({},e,{item2Loading:!1,error:Ne(t.payload),message:""});case"SHOW_MESSAGE":return Object(Ge.a)({},e,{error:"",message:t.payload,loading:!1});case"SHOW_ERROR_MESSAGE":return Object(Ge.a)({},e,{loading:!1,error:t.payload,message:""});case"HIDE_MESSAGE":return Object(Ge.a)({},e,{loading:!1,error:"",message:""});default:return e}},$e={collections:[],didYouMean:"",pages:[],productPerPage:0,products:[],query:"",suggestions:[]},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUGGEST_SUCCESS":var n=t.payload.data;return Object(Ge.a)({},e,{},n);default:return e}},Ye=function(){return Object(ke.c)({common:Ke,suggest:Je})};function Ve(e){var t=Object(we.a)(),n=Object(ke.e)(Ye(),e,Object(ke.d)(Object(ke.a)(t)));return t.run(De),n}var Qe=Ve(),Xe=function(e){var t=e.settings,n=Object(r.useState)([]),a=Object(u.a)(n,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(null!=t){var e=S();i(e.map((function(e,n){var a=Ve();return c.a.createElement(l.a,{store:a,key:n},c.a.createElement(ye,{key:n,input:e,settings:t}))})))}}),[t]),c.a.createElement(E,{theme:m},c.a.createElement(y,null),c.a.createElement(C,{id:"flashsearch-instant-search"},o),c.a.createElement(C,{id:"flashsearch-instant-search-mb"},c.a.createElement(l.a,{store:Qe},null!==t?c.a.createElement(Se,{settings:t}):null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ze,et=He.apiEnpoint,tt={getSettings:function(){var e="".concat(et,"/guest/shopify/settings");return Le()({url:e,method:"get"})}},nt=document.getElementsByTagName("script"),at=Object(a.a)(nt);try{for(at.s();!(Ze=at.n()).done;){var rt=Ze.value;if(rt.src&&rt.src.indexOf(He.scriptIdentifier)>-1){var ct=new URL(rt.src),ot="Bearer "+new URLSearchParams(ct.search).get("tk");Le.a.defaults.headers.common.authorization=ot;break}}}catch(it){at.e(it)}finally{at.f()}tt.getSettings().then((function(e){var t=e.data,n=document.createElement("div");n.setAttribute("id","flashsearch-instant-search-container"),document.body.appendChild(n),i.a.render(c.a.createElement(Xe,{settings:t}),n),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))})).catch((function(e){return console.log("Can't get settings: ".concat(e))}))}},[[49,1,2]]]);
//# sourceMappingURL=main.f2164d83.chunk.js.map