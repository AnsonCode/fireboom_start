(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5453],{28721:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(43674),r=a(79685),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},l=a(86174),c=function(e,t){return r.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:o}))};c.displayName="ExclamationCircleOutlined";var u=r.forwardRef(c)},85145:function(e,t,a){"use strict";var n=a(48802).default,r=a(76985).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(49796)),l=r(a(63516)),c=r(a(68591)),u=n(a(79685)),s=a(59024),i=a(70741),f=function(e){var t,a=e.className,n=e.prefixCls,r=e.style,f=e.color,d=e.children,m=e.text,p=e.placement,v=void 0===p?"end":p,y=u.useContext(s.ConfigContext),b=y.getPrefixCls,C=y.direction,N=b("ribbon",n),x=(0,i.isPresetColor)(f),h=(0,c.default)(N,"".concat(N,"-placement-").concat(v),(t={},(0,l.default)(t,"".concat(N,"-rtl"),"rtl"===C),(0,l.default)(t,"".concat(N,"-color-").concat(f),x),t),a),g={},E={};return f&&!x&&(g.background=f,E.color=f),u.createElement("div",{className:"".concat(N,"-wrapper")},d,u.createElement("div",{className:h,style:(0,o.default)((0,o.default)({},g),r)},u.createElement("span",{className:"".concat(N,"-text")},m),u.createElement("div",{className:"".concat(N,"-corner"),style:E})))};t.default=f},42602:function(e,t,a){"use strict";var n=a(48802).default,r=a(76985).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(49796)),l=r(a(68591)),c=n(a(79685)),u=a(59024),s=a(83431),i=r(a(75867)),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},d=function(e){var t=e.prefixCls,a=e.count,n=e.className,r=e.motionClassName,d=e.style,m=e.title,p=e.show,v=e.component,y=void 0===v?"sup":v,b=e.children,C=f(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),N=(0,c.useContext(u.ConfigContext).getPrefixCls)("scroll-number",t),x=(0,o.default)((0,o.default)({},C),{"data-show":p,style:d,className:(0,l.default)(N,n,r),title:m}),h=a;if(a&&Number(a)%1===0){var g=String(a).split("");h=g.map((function(e,t){return c.createElement(i.default,{prefixCls:N,count:Number(a),value:e,key:g.length-t})}))}return d&&d.borderColor&&(x.style=(0,o.default)((0,o.default)({},d),{boxShadow:"0 0 0 1px ".concat(d.borderColor," inset")})),b?(0,s.cloneElement)(b,(function(e){return{className:(0,l.default)("".concat(N,"-custom-component"),null===e||void 0===e?void 0:e.className,r)}})):c.createElement(y,x,h)};t.default=d},75867:function(e,t,a){"use strict";var n=a(48802).default,r=a(76985).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,a,n=e.prefixCls,r=e.count,c=e.value,f=Number(c),d=Math.abs(r),m=u.useState(f),p=(0,l.default)(m,2),v=p[0],y=p[1],b=u.useState(d),C=(0,l.default)(b,2),N=C[0],x=C[1],h=function(){y(f),x(d)};if(u.useEffect((function(){var e=setTimeout((function(){h()}),1e3);return function(){clearTimeout(e)}}),[f]),v===f||Number.isNaN(f)||Number.isNaN(v))t=[u.createElement(s,(0,o.default)({},e,{key:f,current:!0}))],a={transition:"none"};else{t=[];for(var g=f+10,E=[],O=f;O<=g;O+=1)E.push(O);var w=E.findIndex((function(e){return e%10===v}));t=E.map((function(t,a){var n=t%10;return u.createElement(s,(0,o.default)({},e,{key:t,value:n,offset:a-w,current:a===w}))})),a={transform:"translateY(".concat(-i(v,f,N<d?1:-1),"00%)")}}return u.createElement("span",{className:"".concat(n,"-only"),style:a,onTransitionEnd:h},t)};var o=r(a(49796)),l=r(a(44017)),c=r(a(68591)),u=n(a(79685));function s(e){var t,a=e.prefixCls,n=e.value,r=e.current,o=e.offset,l=void 0===o?0:o;return l&&(t={position:"absolute",top:"".concat(l,"00%"),left:0}),u.createElement("span",{style:t,className:(0,c.default)("".concat(a,"-only-unit"),{current:r})},n)}function i(e,t,a){for(var n=e,r=0;(n+10)%10!==t;)n+=a,r+=a;return r}},27250:function(e,t,a){"use strict";var n=a(48802).default,r=a(76985).default;t.Z=void 0;var o=r(a(63516)),l=r(a(58814)),c=r(a(49796)),u=r(a(68591)),s=r(a(53998)),i=n(a(79685)),f=a(59024),d=a(83431),m=r(a(85145)),p=r(a(42602)),v=a(70741),y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},b=function(e){var t,a,n=e.prefixCls,r=e.scrollNumberPrefixCls,m=e.children,b=e.status,C=e.text,N=e.color,x=e.count,h=void 0===x?null:x,g=e.overflowCount,E=void 0===g?99:g,O=e.dot,w=void 0!==O&&O,P=e.size,j=void 0===P?"default":P,_=e.title,k=e.offset,S=e.style,M=e.className,Z=e.showZero,z=void 0!==Z&&Z,I=y(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),R=i.useContext(f.ConfigContext),T=R.getPrefixCls,A=R.direction,B=T("badge",n),D=h>E?"".concat(E,"+"):h,V=null!==b&&void 0!==b||null!==N&&void 0!==N,Y="0"===D||0===D,q=w&&!Y,F=q?"":D,G=(0,i.useMemo)((function(){return(null===F||void 0===F||""===F||Y&&!z)&&!q}),[F,Y,z,q]),H=(0,i.useRef)(h);G||(H.current=h);var J=H.current,K=(0,i.useRef)(F);G||(K.current=F);var L=K.current,Q=(0,i.useRef)(q);G||(Q.current=q);var U=(0,i.useMemo)((function(){if(!k)return(0,c.default)({},S);var e={marginTop:k[1]};return"rtl"===A?e.left=parseInt(k[0],10):e.right=-parseInt(k[0],10),(0,c.default)((0,c.default)({},e),S)}),[A,k,S]),W=null!==_&&void 0!==_?_:"string"===typeof J||"number"===typeof J?J:void 0,X=G||!C?null:i.createElement("span",{className:"".concat(B,"-status-text")},C),$=J&&"object"===(0,l.default)(J)?(0,d.cloneElement)(J,(function(e){return{style:(0,c.default)((0,c.default)({},U),e.style)}})):void 0,ee=(0,u.default)((t={},(0,o.default)(t,"".concat(B,"-status-dot"),V),(0,o.default)(t,"".concat(B,"-status-").concat(b),!!b),(0,o.default)(t,"".concat(B,"-status-").concat(N),(0,v.isPresetColor)(N)),t)),te={};N&&!(0,v.isPresetColor)(N)&&(te.background=N);var ae=(0,u.default)(B,(a={},(0,o.default)(a,"".concat(B,"-status"),V),(0,o.default)(a,"".concat(B,"-not-a-wrapper"),!m),(0,o.default)(a,"".concat(B,"-rtl"),"rtl"===A),a),M);if(!m&&V){var ne=U.color;return i.createElement("span",(0,c.default)({},I,{className:ae,style:U}),i.createElement("span",{className:ee,style:te}),i.createElement("span",{style:{color:ne},className:"".concat(B,"-status-text")},C))}return i.createElement("span",(0,c.default)({},I,{className:ae}),m,i.createElement(s.default,{visible:!G,motionName:"".concat(B,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,a=e.className,n=T("scroll-number",r),l=Q.current,s=(0,u.default)((t={},(0,o.default)(t,"".concat(B,"-dot"),l),(0,o.default)(t,"".concat(B,"-count"),!l),(0,o.default)(t,"".concat(B,"-count-sm"),"small"===j),(0,o.default)(t,"".concat(B,"-multiple-words"),!l&&L&&L.toString().length>1),(0,o.default)(t,"".concat(B,"-status-").concat(b),!!b),(0,o.default)(t,"".concat(B,"-status-").concat(N),(0,v.isPresetColor)(N)),t)),f=(0,c.default)({},U);return N&&!(0,v.isPresetColor)(N)&&((f=f||{}).background=N),i.createElement(p.default,{prefixCls:n,show:!G,motionClassName:a,className:s,count:L,title:W,style:f,key:"scrollNumber"},$)})),X)};b.Ribbon=m.default;var C=b;t.Z=C},39150:function(e,t,a){"use strict";a(44658),a(84922)},70741:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPresetColor=function(e){return-1!==n.PresetColorTypes.indexOf(e)};var n=a(32427)},84922:function(){}}]);