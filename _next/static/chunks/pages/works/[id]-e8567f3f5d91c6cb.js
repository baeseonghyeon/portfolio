(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{235:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/[id]",function(){return t(8985)}])},680:function(n,e,t){"use strict";t.r(e);var i=t(5893),r=t(7166),l=t.n(r),o=t(3977),a=t(334),c=t(1664),s=t.n(c),_=t(1163),u=t.n(_),d=t(7294),f=t(4480),h=t(3147),m=t(3404),v=t.n(m),p=l().bind(v());e.default=function(){var n=(0,f.sJ)(h.b6),e=(0,d.useState)(5),t=e[0],r=e[1];return(0,d.useEffect)((function(){var n=setInterval((function(){t>0&&r(t-1),0===t&&clearInterval(n)}),1e3);return function(){return clearInterval(n)}}),[t]),(0,d.useEffect)((function(){var n=setTimeout((function(){u().push("/")}),5e3);return function(){return clearTimeout(n)}}),[]),(0,i.jsx)(o.Z,{title:"Oops 404!",children:(0,i.jsxs)("div",{className:p("container"),children:[(0,i.jsx)("h2",{className:p("num__label"),children:"404 :-("}),(0,i.jsx)("h3",{className:p("label"),children:n===a.S.en?"Page Not Found":"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4!"}),n===a.S.en?(0,i.jsxs)("p",{children:["After ",(0,i.jsx)("strong",{children:t})," seconds, move to"," ",(0,i.jsx)(s(),{href:"/",className:p("link__label"),children:"home"}),"."]}):(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:t}),"\ucd08 \ud6c4"," ",(0,i.jsx)(s(),{href:"/",className:p("link__label"),children:"\uba54\uc778"}),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."]})]})})}},8985:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return Z},default:function(){return C}});var i=t(5893),r=t(3977),l=t(1163),o=t(7294),a=t(4697),c=t(9160),s=t(4480),_=t(3147),u=t(5782),d=t.n(u),f=t(7166),h=t.n(f),m=t(2121),v=t(8318),p=t.n(v),x=t(1566),k=t(2926),j=t(3756),w=h().bind(p()),N=function(n){var e,t,r=n.workData,l=(0,s.sJ)(_.b6),o=(0,j.Z)().isPcScreenSize;return r?(0,i.jsxs)(x.Z,{title:r.title[l],idx:1,className:w("container"),children:[(0,i.jsxs)("p",{children:[r.description[l]," ",null===(e=r.description.link)||void 0===e?void 0:e.map((function(n,e,t){var r=t.length;return(0,i.jsxs)("a",{href:n.url,target:"_blank",onTouchStart:function(){return!o&&(0,k.h)(n.url)},children:[0===e&&"(",n.common?n.common:n[l],e!==r-1?", ":")"]})}))]}),null===(t=r.link)||void 0===t?void 0:t.map((function(n){return(0,i.jsxs)("a",{href:n.url,target:"_blank",className:w("link"),onTouchStart:function(){return!o&&(0,k.h)(n.url)},children:["Visit the ",n.type," \u2192"]})}))]}):null},b=t(2407),g=t.n(b),D=h().bind(g()),S=function(n){var e=n.workData,t=(0,s.sJ)(_.b6);return e?(0,i.jsx)(x.Z,{title:e.title[t],isActive:!0,idx:0,className:D("container"),children:Object.entries(e.info).map((function(n){return(0,i.jsx)("li",{className:D("list"),children:(0,i.jsxs)("p",{children:[(0,i.jsxs)("strong",{children:[n[1]&&(0,c.QW)(n[0]),n[1]&&" : "]}),n[1]?"string"===typeof n[1]?n[1]:Array.isArray(n[1])?n[1].map((function(n,e,t){var i=e===t.length-1;return"".concat(n).concat(i?"":", ")})):n[1][t]:null]})})}))}):null},y=t(680),E=t(4490),P=h().bind(d()),Z=!0,C=function(n){var e,t,u,d=n.work,f=(0,l.useRouter)(),h=(0,s.sJ)(_.b6),v=a,p=(0,o.useState)(),x=p[0],k=p[1],j=(0,o.useState)(),w=j[0],b=j[1],g=(0,o.useState)(null),D=g[0],Z=g[1];return(0,o.useEffect)((function(){if(f.isReady){var n=f.query.id;n&&k(n)}}),[f.isReady]),(0,o.useEffect)((function(){if(x){var n=x.split("-"),e=n[n.length-1],t=x.replace("-".concat(e),""),i=v.data.filter((function(n){var i;return(0,c.gX)(n.title.en)===t&&(null===(i=n.info.category[0])||void 0===i?void 0:i.toLowerCase())===e})).map((function(n){return b(n)}));Z(i.length)}}),[x]),0===D?(0,i.jsx)(y.default,{}):w?(0,i.jsxs)(r.Z,{title:w.title[h],description:(null===(e=w.description[h])||void 0===e?void 0:e.substring(0,80).trimEnd())+"...",children:[(0,i.jsx)(S,{workData:w}),(0,i.jsx)(N,{workData:w}),(0,i.jsxs)("div",{className:P("container"),children:[(0,i.jsx)("div",{className:P("content__container"),children:null===(t=w.video)||void 0===t?void 0:t.map((function(n){return(0,i.jsx)("div",{className:P(n.fullSize?"col-md-12":"col-md-6"),children:(0,i.jsx)("div",{className:P("video__wrapper"),children:(0,i.jsx)(m.Z,{iframeClassName:P("video__content"),skeletonClassName:P(P("video__content")),link:n.url})})},n.url)}))}),(0,i.jsx)("div",{className:P("content__container"),children:null===(u=w.image)||void 0===u?void 0:u.map((function(n){return(0,i.jsx)("div",{className:P(n.fullSize?"col-md-12":"col-md-6"),children:(0,i.jsx)(E.Z,{src:(0,c.v7)(n.url),className:P("image__content"),skeletonClassName:P("skeleton")})},n.url)}))})]})]}):(0,i.jsx)(r.Z,{title:d.title,description:d.content,image:d.image,children:(0,i.jsxs)("div",{className:P("loading"),children:[(0,i.jsx)("h1",{children:d.title}),(0,i.jsx)("p",{children:d.content}),(0,i.jsx)("p",{style:{textAlign:"center"},children:"Loading..."})]})})}},8318:function(n){n.exports={container:"workDetailDescriptionPopup_container__zCnfb",link:"workDetailDescriptionPopup_link__W6U2M"}},2407:function(n){n.exports={container:"workDetailInfoPopup_container__jcXtD",list:"workDetailInfoPopup_list__k8OW4"}},3404:function(n){n.exports={container:"__404_container__tHrP_",num__label:"__404_num__label__30h8e",label:"__404_label___88CL",link__label:"__404_link__label__Yq2yS"}},5782:function(n){n.exports={container:"workDetail_container__LfRHv",content__container:"workDetail_content__container__NKpOw",video__wrapper:"workDetail_video__wrapper__kIwPi",video__content:"workDetail_video__content___cGB4",image__content:"workDetail_image__content__BN9x0",skeleton:"workDetail_skeleton__klCZ4",loading:"workDetail_loading__szLZI"}}},function(n){n.O(0,[885,866,43,193,181,599,774,888,179],(function(){return e=235,n(n.s=e);var e}));var e=n.O();_N_E=e}]);