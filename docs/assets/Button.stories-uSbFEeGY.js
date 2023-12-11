import{j as a}from"./jsx-runtime-6h_sYW8U.js";import{s as u,n as o}from"./styled-components.browser.esm-70aFL5iq.js";import{B as f}from"./button-LQuj3nHn.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4g5l5LRQ.js";import"./Serializer-oVgSGsb3.js";import"./AntdIcon-6SB6FRee.js";import"./extends-dGVwEr9R.js";import"./Compact-y2tUNxnl.js";import"./reactNode-MDuQh6SD.js";import"./index-im-bjvvC.js";import"./assertThisInitialized-6KvxGtnC.js";const g=u(f)(({$hideContents:t,theme:{antd:{prefixClass:r}}})=>o`
    align-items: center;
    display: inline-flex;
    justify-content: center;

    ${t&&o`
      .${r}-btn-icon {
        margin-inline-end: 0 !important;
      }
    `}
  `),B=u.span(({$hidden:t})=>o`
    ${t&&o`
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    `}
  `),s=({hideContents:t,children:r,...h})=>a.jsx(g,{style:{boxShadow:"none"},...h,$hideContents:t,children:a.jsx(B,{$hidden:t,children:r})});try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{hideContents:{defaultValue:null,description:"If true, the button's contents will be hidden",name:"hideContents",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Byhiras/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},e={args:{hideContents:!1,children:"Button"}},n={args:{hideContents:!0,children:"Button"}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    hideContents: false,
    children: 'Button'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    hideContents: true,
    children: 'Button'
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const q=["ShowContent","HiddenContent"];export{n as HiddenContent,e as ShowContent,q as __namedExportsOrder,N as default};
