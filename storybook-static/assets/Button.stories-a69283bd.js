import{j as a}from"./jsx-runtime-bea2d141.js";import{s as u,n as o}from"./styled-components.browser.esm-c4e253b0.js";import{B as f}from"./button-4ab0f3a4.js";import"./_commonjsHelpers-de833af9.js";import"./index-76fb7be0.js";import"./index-da03a860.js";import"./isNativeReflectConstruct-26aa4442.js";const g=u(f)(({$hideContents:t,theme:{antd:{prefixClass:r}}})=>o`
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
  `),s=({hideContents:t,children:r,...h})=>a.jsx(g,{style:{boxShadow:"none"},...h,$hideContents:t,children:a.jsx(B,{$hidden:t,children:r})});try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{hideContents:{defaultValue:null,description:"If true, the button's contents will be hidden",name:"hideContents",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Byhiras/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},e={args:{hideContents:!1,children:"Button"}},n={args:{hideContents:!0,children:"Button"}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    hideContents: false,
    children: 'Button'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hideContents: true,
    children: 'Button'
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["ShowContent","HiddenContent"];export{n as HiddenContent,e as ShowContent,S as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-a69283bd.js.map
