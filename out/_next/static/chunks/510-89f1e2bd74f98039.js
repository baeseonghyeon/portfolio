(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{1566:function(n,e,t){"use strict";var r=t(5893),o=t(9992),i=t.n(o),c=t(7166),u=t.n(c),a=t(7294),s=t(1193),l=t.n(s),f=t(3756),d=t(3147),p=t(4480),h=t(1649),v=t(3472),_=t(9849);function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=u().bind(i());e.Z=function(n){var e=n.title,t=void 0===e?"title":e,o=n.index,i=n.isActive,c=void 0!==i&&i,u=n.isDraggable,s=void 0===u||u,m=n.isRandomPositon,b=void 0===m||m,g=n.buttons,x=void 0===g?null:g,w=n.bodyClassName,j=n.onClickClose,S=n.popupRef,N=void 0===S?(0,a.useRef)(null):S,E=(0,f.Z)().isPcScreenSize,A=(0,a.useState)(100+-1*o),C=A[0],P=A[1],T=y((0,p.FV)(d.Ud),2),D=T[0],M=T[1],R=(0,a.useState)(!0),Z=R[0],I=R[1],z=y((0,p.FV)(d.x7),2),L=z[0],H=z[1];(0,a.useEffect)((function(){null!==N.current&&(b&&(0,v.n)(N.current),c&&H(N.current))}),[]),(0,a.useEffect)((function(){null!==N.current&&(0,v.n)(N.current)}),[b]),(0,a.useEffect)((function(){N.current===L&&(F(),(0,_.A)(L))}),[L]);var F=function(){P(D+1),M(D+1),H(N.current)},J=function(n){I(!1),null!==n&&W(n)},W=function(n){setTimeout((function(){n.remove()}),250)};return(0,r.jsx)(l(),{disabled:!E,grid:[50,50],bounds:"div",onDrag:function(){return s&&F()},onMouseDown:function(){return s&&F()},nodeRef:N,children:(0,r.jsxs)("div",{id:n.id,className:k("container",!Z&&"hide",n.className),style:(n.style,{zIndex:C,order:o}),onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,ref:N,children:[(0,r.jsxs)("div",{className:k("header",L===N.current&&"header--active"),children:[(0,r.jsx)("h1",{children:t}),(0,r.jsxs)("div",{className:k("button__wrapper"),children:[x&&x.map((function(n,e){return(0,r.jsx)(a.Fragment,{children:n},e)})),(0,r.jsx)("div",{className:k("close__button"),onClick:j||function(){return J(N.current)},onTouchStart:j||function(){return E&&J(N.current)},children:(0,r.jsx)(h.QAE,{size:17.5})})]})]}),(0,r.jsx)("div",{className:k("body",w),children:n.children})]})})}},3510:function(n,e,t){"use strict";var r=t(5893),o=t(9158),i=t.n(o),c=t(7166),u=t.n(c),a=t(4480),s=t(3147),l=t(1566),f=t(7294),d=t(3756),p=u().bind(i());e.Z=function(n){var e=n.title,t=void 0===e?"title":e,o=n.index,i=n.isActive,c=void 0!==i&&i,u=n.isRandomPositon,h=void 0===u||u,v=n.bodyClassName,_=n.onClickClose,m=(0,a.sJ)(s.x7),y=(0,f.useRef)(null),k=(0,d.Z)().isPcScreenSize,b=(0,f.useState)(!1),g=b[0],x=b[1];return(0,f.useLayoutEffect)((function(){m===y.current?x(!0):x(!1)}),[m]),(0,r.jsxs)(l.Z,{title:t,isActive:c,isRandomPositon:h,index:o+1,onMouseEnter:function(){return k&&x(!0)},onMouseLeave:function(){return k&&!(m===y.current)&&x(!1)},onClickClose:_,className:n.className,bodyClassName:v,popupRef:y,children:[n.children,(0,r.jsx)(l.Z,{title:"",className:p("target-popup","target-popup".concat(!g&&"--hide")),index:o})]})}},3693:function(n,e,t){"use strict";t.d(e,{v:function(){return y}});var r=t(5893),o=t(7424),i=t.n(o),c=t(7166),u=t.n(c),a=t(4480),s=t(3147),l=t(1566),f=t(1664),d=t.n(f),p=t(1163),h=t(2926),v=t(3756),_=t(9160),m=u().bind(i()),y=function(n,e){return"".concat((0,_.gX)(n),"-").concat((0,_.gX)(e))};e.Z=function(n){var e,t,o=n.workPopupData,i=n.className,c=n.onClickClose,u=(0,p.useRouter)(),f=(0,a.sJ)(s.b6),_=(0,v.Z)().isPcScreenSize,k=_?120:80,b=o.workData,g=y(b.title.en,b.info.category[0]),x=o.index,w=b&&(null===(e=b.description[f])||void 0===e?void 0:e.length),j=void 0!==w&&w>k,S="/works/".concat(g);return b?(0,r.jsxs)(l.Z,{title:"".concat(b.info.category," - ").concat(b.info.role.join(", ")),index:x+1,className:m("container",i),isActive:!1,isDraggable:!1,onClickClose:c,children:[(0,r.jsxs)("p",{children:[null===(t=b.description[f])||void 0===t?void 0:t.substring(0,k).trimEnd(),j&&(0,r.jsxs)(r.Fragment,{children:["...",(0,r.jsx)(d(),{href:S,children:(0,r.jsx)("span",{className:m("link"),onTouchStart:function(){return _&&u.push(S)},children:"read more"})})]})]}),_&&b.link&&b.link.map((function(n,e){return(0,r.jsxs)("a",{href:n.url,target:"_blank",className:m("link","link--block"),onTouchStart:function(){return _&&(0,h.h)(n.url)},children:["Visit the ",n.type," \u2192"]},"".concat(n.url,"-").concat(e))})),!_&&b.link&&(0,r.jsxs)("a",{href:b.link[0].url,target:"_blank",className:m("link","link--block"),onTouchStart:function(){return _&&b.link&&(0,h.h)(b.link[0].url)},children:["Visit the ",b.link[0].type," \u2192"]}),!j&&(0,r.jsx)(d(),{href:S,children:(0,r.jsx)("span",{className:m("link","link--block"),onTouchStart:function(){return _&&u.push(S)},children:"Read More \u2192"})})]}):null}},9849:function(n,e,t){"use strict";t.d(e,{A:function(){return b}});var r=t(5893),o=t(2422),i=t.n(o),c=t(7166),u=t.n(c),a=t(4480),s=t(3147),l=t(1664),f=t.n(l),d=t(1163),p=t(6261),h=t(7294),v=t(3756),_=t(3693);function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=u().bind(i()),b=function(n){var e=document.documentElement.clientHeight;null!==n&&p.NY.scrollTo(n.offsetTop-(e/2-n.offsetHeight/2))};e.Z=function(n){var e=n.workPopupData,t=(0,a.sJ)(s.b6),o=y((0,a.FV)(s.x7),2),i=(o[0],o[1]),c=(0,v.Z)().isPcScreenSize,u=(0,d.useRouter)(),l=e.workData,p=(0,_.v)(l.title.en,l.info.category[0]),m=e.index,g="/works/".concat(p);(0,h.useEffect)((function(){u.isReady&&p===u.query.target&&x(u.query.target)}),[u.isReady]);var x=function(n){var e=document.getElementById(n);e?(i(e),b(e),u.push("?target=".concat(n))):u.push(g)};return l?(0,r.jsxs)("span",{className:k("wrapper","mr-2"),children:[(0,r.jsxs)("span",{className:k("footnote"),onClick:function(){return x(p)},onTouchStart:function(){return c&&x(p)},children:["[",m,"]"]}),(0,r.jsx)(f(),{href:g,children:(0,r.jsx)("span",{className:k("link"),onTouchStart:function(){return c&&u.push(g)},children:"".concat(l.title[t]," (").concat(l.info.date,") [").concat(l.info.category.join(", "),"]")})})]},m):null}},3756:function(n,e,t){"use strict";var r=t(7294);e.Z=function(){var n=(0,r.useState)([0,0]),e=n[0],t=n[1],o=e[0]>768;return(0,r.useLayoutEffect)((function(){var n=function(){t([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),{screenSize:e,isPcScreenSize:o}}},3472:function(n,e,t){"use strict";t.d(e,{n:function(){return r}});var r=function(n){n.style.left="".concat(Math.floor(Math.random()*(window.innerWidth-n.offsetWidth)),"px"),n.style.top="".concat(Math.floor(Math.random()*(window.innerHeight-1.2*n.offsetHeight)),"px")}},2926:function(n,e,t){"use strict";t.d(e,{h:function(){return r}});var r=function(n,e){window.open(n,"_blank")}},9992:function(n){n.exports={container:"popup_container__i_NTy",header:"popup_header__EBPD_",button__wrapper:"popup_button__wrapper__poJSJ",close__button:"popup_close__button__B17h1","header--active":"popup_header--active__kGFGj",body:"popup_body__cpqJN",hide:"popup_hide__04Z7K"}},9158:function(n){n.exports={"target-popup":"scrollTargetPopup_target-popup__DY97P","target-popup--hide":"scrollTargetPopup_target-popup--hide__c_4WK"}},7424:function(n){n.exports={container:"workDescriptionPopup_container__Ge0sY",link:"workDescriptionPopup_link__xeHrW","link--block":"workDescriptionPopup_link--block__kjdYS"}},2422:function(n){n.exports={wrapper:"workListItem_wrapper__fjjvk",footnote:"workListItem_footnote__DTHmH",link:"workListItem_link__aoFeW"}}}]);