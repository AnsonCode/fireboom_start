(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4316],{88429:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ae}});t(98565);var r=t(62301),a=(t(11422),t(97334)),s=t(78818),l=t(95513),i=t(36757),c=t(76425),o=t.n(c),u=t(79685),d=t(3153),m=t(39986),f=(t(48387),t(40379)),x=t(5192),p=(0,u.createContext)([]),j=(0,u.createContext)({}),v=(0,u.createContext)({}),h=(t(85800),t(41503)),g=t(63342);function y(e){var n=e.data,t=e.className,r=(0,m.x)(!1),a=(0,l.Z)(r,2),s=a[0],i=a[1];function c(){i(!s)}return s?(0,g.jsx)(h.default,{className:"h-7 max-w-150px mr-3 pl-2px ".concat(null!==t&&void 0!==t?t:""),autoFocus:!0,size:"small",defaultValue:n,onBlur:c,onPressEnter:c,onKeyUp:function(e){"Escape"===e.key&&i(!1)}}):(0,g.jsx)("div",{className:"w-full max-w-150px ml-0 mr-3 hover:bg-[#F8F8F9] ".concat(null!==t&&void 0!==t?t:""),onClick:function(){return i(!s)},children:n})}function b(e){var n=e.enumEntity,t=(0,m.x)(n.enumerators.filter((function(e){return"enumerator"===e.type}))),r=(0,l.Z)(t,2),a=r[0],s=r[1];return(0,u.useEffect)((function(){return s(n.enumerators.filter((function(e){return"enumerator"===e.type})))}),[n]),(0,g.jsx)(g.Fragment,{children:null===a||void 0===a?void 0:a.map((function(e,n){var t,r;return(0,g.jsxs)("div",{className:"flex my-1.5 text-sm font-normal leading-7",children:[(0,g.jsx)(y,{data:e.name}),(0,g.jsx)(y,{className:"max-w-250px text-color-[#5F626999]",data:null!==(t=null===(r=e.comment)||void 0===r?void 0:r.replace(/^\/\/\s+/,""))&&void 0!==t?t:""})]},n)}))})}t(84971);var C=t(68109),k=t(48765);function N(e){var n=e.onClick,t=(0,m.x)(k.eR),r=(0,l.Z)(t,2),a=r[0],s=r[1],i=(0,u.useCallback)((function(e){s(a.filter((function(n){return n.toLowerCase().includes(e.target.value)})))}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.default,{autoFocus:!0,className:"",size:"small",placeholder:"Basic usage",onChange:i}),(0,g.jsx)("ul",{children:a.map((function(e,t){return(0,g.jsx)("li",{children:(0,g.jsx)("div",{className:"my-2 cursor-pointer hover:bg-[#F8F8F9]",onClick:function(){return n(e)},children:e})},t)}))})]})}function O(e){var n=e.attr;return n.args&&0!==n.args.length?(0,g.jsx)(g.Fragment,{children:n.args.map((function(e,t){var r=(0,g.jsx)(g.Fragment,{});return"string"===typeof e.value?r=(0,g.jsx)("span",{className:"text-[#ECA160]",children:e.value}):Object.prototype.hasOwnProperty.call(e.value,"type")&&"function"===e.value.type&&(r=(0,g.jsxs)("span",{className:"text-[#ECA160]",children:[e.value.name,"()"]})),(0,g.jsxs)("div",{className:"text-[#1B25C9]",children:["@",n.name,"(",r,")"]},t)}))}):(0,g.jsxs)(g.Fragment,{children:["@",n.name,"()"]})}function Z(e){var n=e.attr;if(!n.args||0===n.args.length)return(0,g.jsxs)(g.Fragment,{children:["@",n.name,"()"]});var t=n.args.find((function(e){return"fields"===e.value.key})).value.value.args.join(", "),r=n.args.find((function(e){return"references"===e.value.key})).value.value.args.join(", ");return(0,g.jsxs)("div",{className:"text-[#1B25C9]",children:["@relation(fields: [",(0,g.jsx)("span",{className:"text-[#ECA160]",children:t}),"], references: [",(0,g.jsx)("span",{className:"text-[#ECA160]",children:r}),"])"]})}function w(e){var n=e.attributes;return(0,g.jsx)(g.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e,n){var t=e.args.map((function(e){switch(e.value.key){case"fields":return{k:"fields",v:e.value.value.args.join(", ")};case"name":return{k:"name",v:e.value.value};default:return}})).map((function(e,n){return 0!==n?(0,g.jsxs)("span",{children:[",\xa0",e.k,": ","name"!==e.k?"[":"",(0,g.jsx)("span",{className:"text-[#ECA160]",children:e.v}),"name"!==e.k?"]":""]},n):(0,g.jsxs)("span",{children:[e.k,": ","name"!==e.k?"[":"",(0,g.jsx)("span",{className:"text-[#ECA160]",children:e.v}),"name"!==e.k?"]":""]},n)}));return(0,g.jsxs)("div",{className:"flex my-1.5 text-sm font-normal leading-7",children:["@@",e.name,"(",t,")"]},n)}))})}function _(e){var n,t=e.model,r=null!==(n=t.properties)&&void 0!==n?n:[],a=(0,m.x)(!1),s=(0,l.Z)(a,2),i=s[0],c=s[1],o=(0,m.x)({col:"",idx:-1}),d=(0,l.Z)(o,2),f=d[0],x=d[1],p=(0,m.x)(r.filter((function(e){return"field"===e.type}))),j=(0,l.Z)(p,2),v=j[0],h=j[1],b=(0,m.x)(r.filter((function(e){return"attribute"===e.type}))),_=(0,l.Z)(b,2),F=_[0];_[1];return(0,u.useEffect)((function(){return h(r.filter((function(e){return"field"===e.type})))}),[t]),(0,g.jsxs)(g.Fragment,{children:[null===v||void 0===v?void 0:v.map((function(e,n){var t;return(0,g.jsxs)("div",{className:"flex my-1.5 text-sm font-normal leading-7",children:[(0,g.jsx)(y,{data:e.name}),(0,g.jsx)("div",{className:"h-6 w-full max-w-150px hover:bg-[#F8F8F9] cursor-pointer",style:"type"===f.col&&f.idx===n?{backgroundColor:"#F8F8F9"}:{},onClick:function(){return function(e){c(!0),x({col:"type",idx:e})}(n)},children:(0,g.jsx)("span",{style:k.eR.includes(e.fieldType)?{color:"#1BB659"}:{color:"#99109B"},children:e.fieldType})}),(0,g.jsx)("div",{className:"h-6 w-full flex",children:null===(t=e.attributes)||void 0===t?void 0:t.map((function(e,n){return(0,g.jsxs)("div",{className:"mr-3 cursor-pointer hover:bg-[#F8F8F9]",children:["id"===e.name&&(0,g.jsx)("div",{className:"text-[#1B25C9]",children:"@id()"}),"default"===e.name&&(0,g.jsx)(O,{attr:e}),"unique"===e.name&&(0,g.jsx)("div",{className:"text-[#1B25C9]",children:"@unique()"}),"relation"===e.name&&(0,g.jsx)(Z,{attr:e})]},n)}))})]},n)})),(0,g.jsx)(w,{attributes:F}),(0,g.jsx)(C.Z,{className:"max-w-264px",mask:!1,closable:!1,footer:null,title:"\u5b57\u6bb5\u7c7b\u578b",open:i,destroyOnClose:!0,onCancel:function(){x({col:"",idx:-1}),c(!1)},children:(0,g.jsx)(N,{onClick:function(e){c(!1)}})})]})}function F(e){var n=e.showType,t=e.currEntityId,r=(0,u.useContext)(p),a=(0,u.useMemo)((function(){return r.find((function(e){return e.id===t}))}),[r,t]),s=function(){console.log("aaa")};return console.log(n,a),(0,g.jsxs)("div",{className:"p-6",children:[(0,g.jsxs)("div",{className:"flex justify-start items-center mb-6",children:[(0,g.jsxs)("span",{className:"flex-grow text-lg font-medium",children:["data"===n?"\u6d4f\u89c8":"\u7f16\u8f91"," / ",null===a||void 0===a?void 0:a.name]}),(0,g.jsx)(x.Z,{className:"text-base mr-3",onClick:s}),(0,g.jsx)(x.Z,{className:"text-base mr-3",onClick:s}),(0,g.jsx)(x.Z,{className:"text-base",onClick:s})]}),(0,g.jsxs)("div",{className:"flex justify-start items-center my-6",children:[(0,g.jsxs)(f.Z,{className:"text-base flex-grow",separator:" ",children:[(0,g.jsx)(f.Z.Item,{children:null===a||void 0===a?void 0:a.name}),(0,g.jsx)(f.Z.Item,{className:"text-[#118AD1]",children:n})]}),(0,g.jsx)(x.Z,{className:"text-base",onClick:s}),(0,g.jsx)(x.Z,{className:"text-base",onClick:s}),(0,g.jsx)(x.Z,{className:"text-base",onClick:s}),(0,g.jsx)(x.Z,{className:"text-base",onClick:s})]}),"model"===n?(0,g.jsx)(_,{model:a}):"enum"===n?(0,g.jsx)(b,{enumEntity:a}):"data"===n?(0,g.jsx)("h1",{children:null===a||void 0===a?void 0:a.name}):""]})}t(89013);var E=t(65541),P=(t(2245),t(48628)),D=t(44049),T=t(86669),B=t(60602),S=t.n(B),A=(t(17016),t(8607)),I=(t(68158),t(29094)),z=(t(68123),t(77423)),M=t(37216),R=t(58784),V=(t(517),t(37608)),J=t(1630),L=t(93546);function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e){var n=e.entity,t=e.onClick,r=e.onToggleDesigner,a=(0,u.useContext)(j),s=(0,m.x)(!1),i=(0,l.Z)(s,2),c=i[0],o=i[1],d=(0,m.x)(""===n.name),f=(0,l.Z)(d,2),p=f[0],y=f[1],b=(0,m.x)(!1),C=(0,l.Z)(b,2),k=C[0],N=C[1],O=(0,u.useContext)(v),Z=O.currEntityId;O.setCurrEntityId;function w(e){a(""===e?{type:"deleted",data:n}:{type:"changed",data:q(q({},n),{},{name:e})}),y(!1)}function _(e){0==e&&(o(!1),N(!1))}var F=(0,g.jsx)(z.default,{onClick:function(e){e.domEvent.stopPropagation(),"1"!==e.key&&"2"!==e.key||N(!1)},items:[{key:"1",label:(0,g.jsxs)("div",{onClick:function(){return y(!p)},children:[(0,g.jsx)(x.Z,{}),(0,g.jsx)("span",{className:"ml-1.5",children:"\u91cd\u547d\u540d"})]})},{key:"2",label:(0,g.jsxs)("div",{onClick:function(){return r(n)},children:[(0,g.jsx)(x.Z,{}),(0,g.jsx)("span",{className:"ml-1.5",children:"\u7f16\u8f91"})]})},{key:"3",label:(0,g.jsx)(V.Z,{placement:"right",title:"\u786e\u8ba4\u5220\u9664\u8be5\u5b9e\u4f53\u5417\uff1f",onConfirm:function(){a({type:"deleted",data:n})},okText:"\u5220\u9664",cancelText:"\u53d6\u6d88",onCancel:function(){return N(!1)},overlayClassName:S()["delete-label"],okType:"danger",children:(0,g.jsxs)("div",{children:[(0,g.jsx)(x.Z,{}),(0,g.jsx)("span",{className:"ml-1.5",children:"\u5220\u9664"})]})})}]}),E=p?(0,g.jsx)(h.default,{onBlur:function(e){return w(e.target.value)},onPressEnter:function(e){return w(e.target.value)},onKeyUp:function(e){"Escape"===e.key&&(y(!1),""===n.name&&a({type:"deleted",data:n}))},className:"text-sm font-normal leading-4 h-5 w-5/7 pl-1",defaultValue:n.name,autoFocus:!0,placeholder:"\u8bf7\u8f93\u5165\u5b9e\u4f53\u540d"}):(0,g.jsx)("div",{className:"text-sm font-normal leading-4",children:n.name});return(0,g.jsxs)("div",{className:"flex justify-start items-center py-3 cursor-pointer hover:bg-[#F8F8F9] ".concat(n.id===Z?"bg-[#F8F8F9]":""),onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return _(k)},onClick:t,onDoubleClick:function(){return y(!0)},children:[(0,g.jsx)(J.Z,{className:"mx-0.5"}),"model"===n.type?(0,g.jsx)(x.Z,{className:"ml-0.5 mr-2"}):(0,g.jsx)(L.Z,{className:"ml-0.5 mr-2"}),E,(0,g.jsx)(A.default,{overlay:F,trigger:["click"],placement:"bottomRight",visible:k,onVisibleChange:function(e){N(e),_(e)},children:(0,g.jsx)(J.Z,{onClick:function(e){return e.stopPropagation()},className:"m-auto mr-0 pr-2",style:{visibility:c?"visible":"hidden"}})})]},n.id)}var W=t(86600),X=t.n(W);function H(e){var n=e.onClickEntity,t=e.onToggleDesigner,r=(0,u.useContext)(p),a=(0,u.useContext)(j),s=r.filter((function(e){return["enum","model"].includes(e.type)})),l=function(){return Math.max.apply(Math,(0,M.Z)(r.map((function(e){return e.id}))))+1};var i=(0,g.jsx)(z.default,{items:[{key:"1",label:(0,g.jsx)("span",{onClick:function(){var e={id:l(),name:"",type:"model",properties:[]};a({type:"added",data:e})},children:"\u6a21\u578b"}),icon:(0,g.jsx)(x.Z,{})},{key:"2",label:(0,g.jsx)("span",{onClick:function(){var e={id:l(),name:"",type:"enum",enumerators:[]};a({type:"added",data:e})},children:"\u679a\u4e3e"}),icon:(0,g.jsx)(x.Z,{})}]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"flex justify-between items-center p-4 my-3 border-[#5f62691a] border-b-1 border-t-1",children:[(0,g.jsx)("span",{className:"text-sm font-medium leading-5",children:"\u6240\u6709\u5b9e\u4f53"}),(0,g.jsx)(A.default,{overlay:i,placement:"bottomRight",children:(0,g.jsx)(I.default,{className:X()["add-btn"],icon:(0,g.jsx)(R.Z,{}),shape:"circle",size:"small"})})]}),(0,g.jsx)("div",{className:"mt-3",children:s.map((function(e){return(0,g.jsx)(K,{entity:e,onClick:function(){return n(e)},onToggleDesigner:t},e.id)}))})]})}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e){var n=e.sourceOptions,t=e.onChangeSource,r=e.onClickEntity,a=e.onToggleDesigner,s=(0,u.useContext)(j);(0,u.useEffect)((function(){T.Z.get("/schemas/".concat(n[0].id)).then((function(e){return s({type:"fetched",data:(0,i.J)(e.body).list.map((function(e,n){return G(G({},e),{},{id:n})}))})})).catch((function(e){throw e}))}),[]);var l=n.map((function(e){return{label:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.Z,{})," ",e.name]}),value:"".concat(e.id)}}));return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:S().pannel,children:[(0,g.jsx)("div",{className:S().title,children:"\u6570\u636e\u5efa\u6a21"}),(0,g.jsxs)("div",{className:S()["select-contain"],children:[(0,g.jsx)(P.default,{className:S().select,onChange:t,defaultValue:l[0].value,optionLabelProp:"label",options:l}),(0,g.jsx)(E.default,{title:"prompt text",children:(0,g.jsx)(D.Z,{className:"ml-1.5 text-base hidden",style:{color:"#F79500"}})})]}),(0,g.jsxs)("div",{className:S().actions,children:[(0,g.jsx)(x.Z,{onClick:console.log}),(0,g.jsx)(x.Z,{onClick:console.log}),(0,g.jsx)(x.Z,{onClick:console.log}),(0,g.jsx)(x.Z,{onClick:console.log}),(0,g.jsx)(x.Z,{onClick:console.log}),(0,g.jsx)(x.Z,{onClick:console.log})]})]}),(0,g.jsx)(H,{onClickEntity:r,onToggleDesigner:a})]})}function $(e,n){switch(n.type){case"fetched":return n.data;case"selected":default:return e;case"added":return[].concat((0,M.Z)(e),[n.data]);case"changed":return e.map((function(e){return e.id===n.data.id?n.data:e}));case"deleted":return e.filter((function(e){return e.id!==n.data.id}))}}var ee=t(92151),ne=t.n(ee);function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ae(){var e=(0,u.useReducer)($,[]),n=e[0],t=e[1],s=(0,m.x)(null),c=(0,l.Z)(s,2),f=c[0],x=c[1],h=(0,m.x)("data"),y=(0,l.Z)(h,2),b=y[0],C=y[1];(0,u.useEffect)((function(){var e,t,r=n.filter((function(e){return["model","enum"].includes(e.type)}));x(null!==(e=null===(t=r.at(0))||void 0===t?void 0:t.id)&&void 0!==e?e:null)}),[n]);var k=(0,d.ZP)("/sources",T.p),N=k.data;if(k.error)return(0,g.jsx)("div",{children:"failed to load"});if(!N)return(0,g.jsx)("div",{children:"loading..."});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o(),{children:(0,g.jsx)("title",{children:"FireBoom - \u6570\u636e\u5efa\u6a21"})}),(0,g.jsx)(p.Provider,{value:n,children:(0,g.jsx)(j.Provider,{value:t,children:(0,g.jsx)(v.Provider,{value:{currEntityId:f,setCurrEntityId:x},children:(0,g.jsxs)(r.Z,{className:"h-screen",children:[(0,g.jsx)(a.Z,{span:5,className:ne()["col-left"],children:(0,g.jsx)(Y,{sourceOptions:N,onChangeSource:function(e){T.Z.get("/schemas/".concat(e)).then((function(e){return t({type:"fetched",data:(0,i.J)(e.body).list.map((function(e,n){return re(re({},e),{},{id:n})}))})})).catch((function(e){throw e}))},onClickEntity:function(e){C("data"),x(e.id)},onToggleDesigner:function(e){C(e.type),x(e.id)}})}),(0,g.jsx)(a.Z,{span:19,children:(0,g.jsx)(F,{showType:b,currEntityId:f})})]})})})})]})}},90955:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modeling",function(){return t(88429)}])},60602:function(e){e.exports={pannel:"model-pannel_pannel__jzDVW",title:"model-pannel_title__a0TQT",select:"model-pannel_select__x_fJx",actions:"model-pannel_actions__izWD9",manage:"model-pannel_manage__UFxlk","option-icon":"model-pannel_option-icon__HN93z","select-contain":"model-pannel_select-contain__zmxel","delete-label":"model-pannel_delete-label__1Sggt"}},86600:function(e){e.exports={"add-btn":"model-entity-list_add-btn__C5rgO"}},92151:function(e){e.exports={"col-left":"modeling_col-left__A4nnx"}}},function(e){e.O(0,[7521,1864,8616,8034,9013,9774,2888,179],(function(){return n=90955,e(e.s=n);var n}));var n=e.O();_N_E=n}]);