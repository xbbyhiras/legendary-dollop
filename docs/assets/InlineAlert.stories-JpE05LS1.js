import{j as c}from"./jsx-runtime-6h_sYW8U.js";import{s as E,n as S}from"./styled-components.browser.esm-70aFL5iq.js";import{_ as b}from"./extends-dGVwEr9R.js";import{r as W}from"./index-4g5l5LRQ.js";import{A as C}from"./AntdIcon-6SB6FRee.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Serializer-oVgSGsb3.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const $=O;var j=function(s,A){return W.createElement(C,b({},s,{ref:A,icon:$}))};const q=W.forwardRef(j),z=E.span(({theme:{colors:e},$type:s})=>S`
    -webkit-user-select: none;
    user-select: none;
    ${s==="error"&&`color: ${e.byhiras.red}`};
  `),i=({message:e,type:s="warning"})=>c.jsxs(z,{$type:s,children:[c.jsx(q,{})," ",e]});try{i.displayName="InlineAlert",i.__docgenInfo={description:"",displayName:"InlineAlert",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},type:{defaultValue:{value:"warning"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}}}}}catch{}const T={title:"Byhiras/Alerts/InlineAlert",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{description:"Content of Alert",control:{type:"text"}}}},r={args:{message:"Inline message"}},a={args:{message:"Inline message",type:"warning"}},t={args:{message:"Inline message",type:"error"}},n={args:{message:"Inline message with a long text that should be wrapped, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},o={args:{message:""}};var m,l,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: 'Inline message'
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: 'Inline message',
    type: 'warning'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,f,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: 'Inline message',
    type: 'error'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var I,w,x;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: 'Inline message with a long text that should be wrapped, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,_,v;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    message: ''
  }
}`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const F=["WithMessageDefault","WithMessageWarning","WithMessageError","WithLongMessage","EmptyMessage"];export{o as EmptyMessage,n as WithLongMessage,r as WithMessageDefault,t as WithMessageError,a as WithMessageWarning,F as __namedExportsOrder,T as default};
