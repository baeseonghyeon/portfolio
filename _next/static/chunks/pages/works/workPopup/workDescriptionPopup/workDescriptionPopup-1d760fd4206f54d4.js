(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1877:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/workPopup/workDescriptionPopup/workDescriptionPopup",function(){return t(9053)}])},1566:function(n,e,t){"use strict";var r=t(5893),i=t(9992),o=t.n(i),u=t(7166),c=t.n(u),a=t(7294),s=t(1193),l=t.n(s),d=t(3756),f=t(3147),p=t(4480),h=t(1649);function _(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return _(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=c().bind(o());e.Z=function(n){var e=n.title,t=void 0===e?"title":e,i=n.idx,o=n.isActive,u=void 0!==o&&o,c=n.isDraggable,s=void 0===c||c,_=n.isRandomPositon,w=void 0===_||_,b=n.buttons,y=void 0===b?null:b,m=n.bodyClassName,x=(0,d.Z)().isPcScreenSize,S=(0,a.useState)(100+-1*i),g=S[0],j=S[1],N=v((0,p.FV)(f.Ud),2),E=N[0],P=N[1],M=(0,a.useState)(!0),A=M[0],D=M[1],z=(0,a.useRef)(null),C=v((0,p.FV)(f.x7),2),T=C[0],F=C[1];(0,a.useEffect)((function(){null!==z.current&&(w&&J(z.current),u&&F(z.current))}),[]),(0,a.useEffect)((function(){z.current===T&&L()}),[T]),(0,a.useEffect)((function(){null!==z.current&&J(z.current)}),[w]);var J=function(n){n.style.left="".concat(Math.floor(Math.random()*(window.innerWidth-n.offsetWidth)),"px"),n.style.top="".concat(Math.floor(Math.random()*(window.innerHeight-n.offsetHeight)),"px")},L=function(){j(E+1),P(E+1),F(z.current)},O=function(n){D(!1),null!==n&&Z(n)},Z=function(n){setTimeout((function(){n.remove()}),250)};return(0,r.jsx)(l(),{disabled:!x,grid:[50,50],bounds:"div",onDrag:function(){return s&&L()},onMouseDown:function(){return s&&L()},children:(0,r.jsxs)("div",{id:n.id,className:k("container",!A&&"hide",n.className),style:(n.style,{zIndex:g,order:i}),onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,ref:z,children:[(0,r.jsxs)("div",{className:k("header",T===z.current&&"header--active"),children:[(0,r.jsx)("h1",{children:t}),(0,r.jsxs)("div",{className:k("button__wrapper"),children:[null!==y&&y.map((function(n){return n})),(0,r.jsx)("div",{className:k("close__button"),onClick:function(){return O(z.current)},onTouchStart:function(){return x&&O(z.current)},children:(0,r.jsx)(h.QAE,{size:17.5})})]})]}),(0,r.jsx)("div",{className:k("body",m),children:n.children})]})})}},3756:function(n,e,t){"use strict";var r=t(7294);e.Z=function(){var n=(0,r.useState)([0,0]),e=n[0],t=n[1],i=e[0]>768;return(0,r.useLayoutEffect)((function(){var n=function(){t([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),{screenSize:e,isPcScreenSize:i}}},334:function(n,e,t){"use strict";var r;t.d(e,{S:function(){return r}}),function(n){n.ko="ko",n.en="en"}(r||(r={}))},9053:function(n,e,t){"use strict";t.r(e);var r=t(5893),i=t(8633),o=t.n(i),u=t(7166),c=t.n(u),a=t(4480),s=t(3147),l=t(1566),d=t(1664),f=t.n(d),p=c().bind(o());e.default=function(n){var e,t,i=n.workData,o=n.idx,u=n.id,c=(0,a.sJ)(s.b6),d=i&&(null===(e=i.description[c])||void 0===e?void 0:e.length),h=void 0!==d&&d>100;return i?(0,r.jsx)("span",{children:(0,r.jsxs)(l.Z,{title:"".concat(i.info.category," - ").concat(i.info.role),idx:o+1,className:p("container"),isActive:!1,isDraggable:!1,children:[(0,r.jsxs)("p",{children:[null===(t=i.description[c])||void 0===t?void 0:t.substring(0,100).trimEnd(),h&&(0,r.jsxs)(r.Fragment,{children:["...",(0,r.jsx)(f(),{href:"/works/".concat(u),children:(0,r.jsx)("span",{className:p("link"),children:"read more"})})]})]}),i.link&&i.link.map((function(n){return(0,r.jsx)(f(),{href:n.url,target:"_blank",children:(0,r.jsxs)("span",{className:p("link","link--block"),children:["Visit the ",n.type," \u2192"]})})})),!h&&(0,r.jsx)(f(),{href:"/works/".concat(u),children:(0,r.jsx)("span",{className:p("link","link--block"),children:"Read More \u2192"})})]})}):null}},3147:function(n,e,t){"use strict";t.d(e,{Ud:function(){return a},W9:function(){return o},_v:function(){return c},b6:function(){return u},x7:function(){return s}});var r=t(334),i=t(4480),o=(0,i.cn)({key:"darkModeState",default:!1}),u=(0,i.cn)({key:"languageState",default:r.S.ko}),c=(0,i.cn)({key:"workFilterState",default:"All"}),a=(0,i.cn)({key:"popupOverlayState",default:999}),s=(0,i.cn)({key:"currentActivePopupState",default:null})},9992:function(n){n.exports={container:"popup_container__i_NTy",header:"popup_header__EBPD_",button__wrapper:"popup_button__wrapper__poJSJ",close__button:"popup_close__button__B17h1","header--active":"popup_header--active__kGFGj",body:"popup_body__cpqJN",hide:"popup_hide__04Z7K"}},8633:function(n){n.exports={container:"workDescriptionPopup_container__fxGkS",link:"workDescriptionPopup_link__Ch6CT","link--block":"workDescriptionPopup_link--block__hslJ3"}}},function(n){n.O(0,[866,874,664,774,888,179],(function(){return e=1877,n(n.s=e);var e}));var e=n.O();_N_E=e}]);