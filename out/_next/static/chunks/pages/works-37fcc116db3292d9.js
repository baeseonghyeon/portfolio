(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{1894:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works",function(){return e(7994)}])},1566:function(n,t,e){"use strict";var r=e(5893),o=e(9992),i=e.n(o),u=e(7166),c=e.n(u),a=e(7294),s=e(1193),l=e.n(s),f=e(3756),d=e(3147),p=e(4480),_=e(1649),h=e(3472),v=e(9849);function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function k(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],u=!0,c=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==e.return||e.return()}finally{if(c)throw o}}return i}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=c().bind(i());t.Z=function(n){var t=n.title,e=void 0===t?"title":t,o=n.index,i=n.isActive,u=void 0!==i&&i,c=n.isDraggable,s=void 0===c||c,m=n.isRandomPositon,b=void 0===m||m,w=n.buttons,x=void 0===w?null:w,g=n.bodyClassName,j=n.onClickClose,S=n.popupRef,N=void 0===S?(0,a.useRef)(null):S,A=(0,f.Z)().isPcScreenSize,P=(0,a.useState)(100+-1*o),C=P[0],E=P[1],D=k((0,p.FV)(d.Ud),2),R=D[0],T=D[1],Z=(0,a.useState)(!0),I=Z[0],M=Z[1],L=k((0,p.FV)(d.x7),2),B=L[0],z=L[1];(0,a.useLayoutEffect)((function(){null!==N.current&&(b&&(0,h.n)(N.current),u&&z(N.current))}),[]),(0,a.useLayoutEffect)((function(){null!==N.current&&(0,h.n)(N.current)}),[b]),(0,a.useLayoutEffect)((function(){N.current===B&&(O(),(0,v.A)(B))}),[B]);var O=function(){E(R+1),T(R+1),z(N.current)},W=function(n){M(!1),null!==n&&F(n)},F=function(n){setTimeout((function(){n.remove()}),250)};return(0,r.jsx)(l(),{disabled:!A,grid:[50,50],bounds:"div",onDrag:function(){return s&&O()},onMouseDown:function(){return s&&O()},nodeRef:N,children:(0,r.jsxs)("div",{id:n.id,className:y("container",!I&&"hide",n.className),style:(n.style,{zIndex:C,order:o}),onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,ref:N,children:[(0,r.jsxs)("div",{className:y("header",B===N.current&&"header--active"),children:[(0,r.jsx)("h1",{children:e}),(0,r.jsxs)("div",{className:y("button__wrapper"),children:[x&&x.map((function(n,t){return(0,r.jsx)(a.Fragment,{children:n},t)})),(0,r.jsx)("div",{className:y("close__button"),onClick:j||function(){return W(N.current)},onTouchStart:j||function(){return A&&W(N.current)},children:(0,r.jsx)(_.QAE,{size:17.5})})]})]}),(0,r.jsx)("div",{className:y("body",g),children:n.children})]})})}},3693:function(n,t,e){"use strict";e.d(t,{v:function(){return k}});var r=e(5893),o=e(7424),i=e.n(o),u=e(7166),c=e.n(u),a=e(4480),s=e(3147),l=e(1566),f=e(1664),d=e.n(f),p=e(1163),_=e(2926),h=e(3756),v=e(9160),m=c().bind(i()),k=function(n,t){return"".concat((0,v.gX)(n),"-").concat((0,v.gX)(t))};t.Z=function(n){var t,e,o=n.workPopupData,i=n.className,u=n.onClickClose,c=(0,p.useRouter)(),f=(0,a.sJ)(s.b6),v=(0,h.Z)().isPcScreenSize,y=v?120:80,b=o.workData,w=k(b.title.en,b.info.category[0]),x=o.index,g=b&&(null===(t=b.description[f])||void 0===t?void 0:t.length),j=void 0!==g&&g>y,S="/works/".concat(w);return b?(0,r.jsxs)(l.Z,{title:"".concat(b.info.category," - ").concat(b.info.role.join(", ")),index:x+1,className:m("container",i),isActive:!1,isDraggable:!1,onClickClose:u,children:[(0,r.jsxs)("p",{children:[null===(e=b.description[f])||void 0===e?void 0:e.substring(0,y).trimEnd(),j&&(0,r.jsxs)(r.Fragment,{children:["...",(0,r.jsx)(d(),{href:S,children:(0,r.jsx)("span",{className:m("link"),onTouchStart:function(){return v&&c.push(S)},children:"read more"})})]})]}),v&&b.link&&b.link.map((function(n,t){return(0,r.jsxs)("a",{href:n.url,target:"_blank",className:m("link","link--block"),onTouchStart:function(){return v&&(0,_.h)(n.url)},children:["Visit the ",n.type," \u2192"]},"".concat(n.url,"-").concat(t))})),!v&&b.link&&(0,r.jsxs)("a",{href:b.link[0].url,target:"_blank",className:m("link","link--block"),onTouchStart:function(){return v&&b.link&&(0,_.h)(b.link[0].url)},children:["Visit the ",b.link[0].type," \u2192"]}),!j&&(0,r.jsx)(d(),{href:S,children:(0,r.jsx)("span",{className:m("link","link--block"),onTouchStart:function(){return v&&c.push(S)},children:"Read More \u2192"})})]}):null}},9849:function(n,t,e){"use strict";e.d(t,{A:function(){return b}});var r=e(5893),o=e(2422),i=e.n(o),u=e(7166),c=e.n(u),a=e(4480),s=e(3147),l=e(1664),f=e.n(l),d=e(1163),p=e(6261),_=e(7294),h=e(3756),v=e(3693);function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function k(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],u=!0,c=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==e.return||e.return()}finally{if(c)throw o}}return i}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=c().bind(i()),b=function(n){var t=document.documentElement.clientHeight;null!==n&&p.NY.scrollTo(n.offsetTop-(t/2-n.offsetHeight/2))};t.Z=function(n){var t=n.workPopupData,e=(0,a.sJ)(s.b6),o=k((0,a.FV)(s.x7),2),i=(o[0],o[1]),u=(0,h.Z)().isPcScreenSize,c=(0,d.useRouter)(),l=t.workData,p=(0,v.v)(l.title.en,l.info.category[0]),m=t.index,w="/works/".concat(p);(0,_.useLayoutEffect)((function(){c.isReady&&p===c.query.target&&x(c.query.target)}),[c.isReady]);var x=function(n){var t=document.getElementById(n);t?(i(t),b(t),c.push("?target=".concat(n))):c.push(w)};return l?(0,r.jsxs)("span",{className:y("wrapper","mr-2"),children:[(0,r.jsxs)("span",{className:y("footnote"),onClick:function(){return x(p)},onTouchStart:function(){return u&&x(p)},children:["[",m,"]"]}),(0,r.jsx)(f(),{href:w,children:(0,r.jsx)("span",{className:y("link"),onTouchStart:function(){return u&&c.push(w)},children:"".concat(l.title[e]," (").concat(l.info.date,") [").concat(l.info.category.join(", "),"]")})})]},m):null}},2331:function(n,t,e){"use strict";var r=e(5893),o=e(7166),i=e.n(o),u=e(6388),c=e.n(u),a=e(7294),s=e(1193),l=e.n(s),f=e(1649),d=e(3472),p=i().bind(c());t.Z=function(n){var t=n.onClick,e=(0,a.useState)(!0),o=e[0],i=e[1],u=(0,a.useRef)(null);(0,a.useLayoutEffect)((function(){null!==u.current&&(0,d.n)(u.current)}),[]);var c=function(){i(!o)};return(0,r.jsx)(l(),{grid:[50,50],bounds:"div",nodeRef:u,children:(0,r.jsxs)("div",{className:p("container",!o&&"hide"),ref:u,children:[(0,r.jsx)("div",{className:p("close__button"),onClick:function(){return c()},onTouchStart:function(){return c()},children:(0,r.jsx)(f.QAE,{size:17.5})}),(0,r.jsx)("div",{className:p("wrapper"),onClick:function(){return o&&t()},onTouchStart:function(){return o&&t()}})]})})}},3756:function(n,t,e){"use strict";var r=e(7294);t.Z=function(){var n=(0,r.useState)([0,0]),t=n[0],e=n[1],o=t[0]>768;return(0,r.useLayoutEffect)((function(){var n=function(){e([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),{screenSize:t,isPcScreenSize:o}}},3472:function(n,t,e){"use strict";e.d(t,{n:function(){return r}});var r=function(n){n.style.left="".concat(Math.floor(Math.random()*(window.innerWidth-n.offsetWidth)),"px"),n.style.top="".concat(Math.floor(Math.random()*(window.innerHeight-1.2*n.offsetHeight)),"px")}},2926:function(n,t,e){"use strict";e.d(t,{h:function(){return r}});var r=function(n,t){window.open(n,"_blank")}},7994:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return I}});var r,o,i=e(5893),u=e(3977),c=e(7294),a=e(7166),s=e.n(a),l=e(2596),f=e.n(l),d=e(4697),p=e(1566),_=e(4480),h=e(3147),v=e(2331),m=e(9956),k=e.n(m),y=e(1649);!function(n){n.Website="Website",n.Application="Application"}(r||(r={})),function(n){n.Development="Development",n.Planning="Planning",n.Design="Design"}(o||(o={}));var b=s().bind(k()),w=function(n){var t=n.onChange,e=(0,_.sJ)(h._v),u=(0,c.useRef)(null);return(0,i.jsxs)("div",{className:b("button"),onTouchStart:function(){var n;return null===(n=u.current)||void 0===n?void 0:n.focus()},children:[(0,i.jsx)(y.Bq0,{}),(0,i.jsxs)("select",{defaultValue:e,className:b("select"),onChange:t,ref:u,children:[(0,i.jsx)("option",{value:"All",children:"All"}),Object.keys(r).map((function(n,t){return(0,i.jsx)("option",{value:n,children:n},"".concat(n,"-").concat(t))})),Object.keys(o).map((function(n,t){return(0,i.jsx)("option",{value:n,children:n},"".concat(n,"-").concat(t))}))]})]})},x=e(9849),g=e(4733),j=e.n(g),S=e(3756),N=e(2121),A=e(3693),P=e(9160),C=e(4490),E=s().bind(j()),D=function(n){var t=n.workPopupData,e=(0,_.sJ)(h.b6),r=(0,_.sJ)(h.x7),o=(0,c.useRef)(null),u=(0,S.Z)().isPcScreenSize,a=(0,c.useState)(!1),s=a[0],l=a[1],f=t.workData,d=t.index,v=t.isRandomPositon,m=(0,A.v)(f.title.en,f.info.category[0]);return(0,c.useEffect)((function(){r===o.current?l(!0):l(!1)}),[r]),f?(0,i.jsxs)(p.Z,{id:m,title:f.title[e],isRandomPositon:v,index:d+1,onMouseEnter:function(){return u&&l(!0)},onMouseLeave:function(){return u&&!(r===o.current)&&l(!1)},className:E("container"),bodyClassName:E("body"),popupRef:o,children:[f.video?(0,i.jsx)(N.Z,{link:f.video[0].url,className:E("video__container"),skeletonClassName:E("video__container","skeleton")}):f.thumbUrl&&(0,i.jsx)(C.Z,{src:(0,P.v7)(f.thumbUrl),className:E("image__container"),skeletonClassName:E("video__container"),isBackgroundImage:!0}),(0,i.jsx)(A.Z,{className:E("description-popup".concat(!s&&"--hide")),workPopupData:t,onClickClose:function(){return l(!1)}})]}):null};function R(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function T(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],u=!0,c=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==e.return||e.return()}finally{if(c)throw o}}return i}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return R(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return R(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=s().bind(f()),I=function(){var n=T((0,_.FV)(h._v),2),t=n[0],e=n[1],r=d,o=(0,c.useState)(!0),a=o[0],s=o[1],l=r.data.slice(0).reverse().filter((function(n){return"All"===t?n:"Website"===t||"Application"===t?n.info.category.includes(t):n.info.role.includes(t)}));return(0,i.jsxs)(u.Z,{title:"Works",children:[(0,i.jsx)(p.Z,{title:"".concat((0,P.QW)(t)," Works"),index:0,isActive:!0,isRandomPositon:!1,className:Z("popup__all-work"),buttons:[(0,i.jsx)(w,{onChange:function(n){return e(n.target.value)}})],children:l.map((function(n,t){return(0,i.jsx)(x.Z,{workPopupData:{workData:n,index:l.length-t,isRandomPositon:a}},l.length-t)}))}),l.map((function(n,t){return(0,i.jsx)(D,{workPopupData:{workData:n,index:t,isRandomPositon:a}},t)})),(0,i.jsx)(v.Z,{onClick:function(){return s(!a)}})]})}},9956:function(n){n.exports={button:"filterButton_button__e_bfy",select:"filterButton_select__kACH0"}},9992:function(n){n.exports={container:"popup_container__i_NTy",header:"popup_header__EBPD_",button__wrapper:"popup_button__wrapper__poJSJ",close__button:"popup_close__button__B17h1","header--active":"popup_header--active__kGFGj",body:"popup_body__cpqJN",hide:"popup_hide__04Z7K"}},7424:function(n){n.exports={container:"workDescriptionPopup_container__Ge0sY",link:"workDescriptionPopup_link__xeHrW","link--block":"workDescriptionPopup_link--block__kjdYS"}},2422:function(n){n.exports={wrapper:"workListItem_wrapper__fjjvk",footnote:"workListItem_footnote__DTHmH",link:"workListItem_link__aoFeW"}},4733:function(n){n.exports={container:"workPopup_container__YCneR",body:"workPopup_body__c14CP",image__container:"workPopup_image__container__uINrY",video__container:"workPopup_video__container___lo9_",skeleton:"workPopup_skeleton__GAA2L","description-popup":"workPopup_description-popup__RKG83","description-popup--hide":"workPopup_description-popup--hide__06Iog"}},6388:function(n){n.exports={container:"shuffleButton_container__yUtY0",close__button:"shuffleButton_close__button__PNV8t",wrapper:"shuffleButton_wrapper__sgprt",bounce:"shuffleButton_bounce__M_tSF",hide:"shuffleButton_hide__aiOh5"}},2596:function(n){n.exports={"popup__all-work":"works_popup__all-work__eD5R5"}}},function(n){n.O(0,[885,866,43,193,977,599,774,888,179],(function(){return t=1894,n(n.s=t);var t}));var t=n.O();_N_E=t}]);