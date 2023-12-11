import{g as m}from"./_commonjsHelpers-4gQjN7DL.js";import{r as l}from"./index-4g5l5LRQ.js";var _={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,a=Symbol.for("react.element"),x=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,c=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(t,r,p){var e,o={},s=null,f=null;p!==void 0&&(s=""+p),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)y.call(r,e)&&!v.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:a,type:t,key:s,ref:f,props:o,_owner:c.current}}n.Fragment=x;n.jsx=i;n.jsxs=i;_.exports=n;var E=_.exports;const R=m(E);export{R as a,E as j};
