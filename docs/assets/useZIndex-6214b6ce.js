import{R as U,r as s,a as J}from"./index-76fb7be0.js";import{f as ee,e as te,d as ne,h as ae,u as A,s as re,i as oe,j as ie}from"./reactNode-72481acd.js";import{q as R,t as S,u as d,v as se,w,_ as ce}from"./AntdIcon-e8601c81.js";import{r as ue}from"./index-da03a860.js";function $(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return U.Children.forEach(t,function(r){r==null&&!e.keepEmpty||(Array.isArray(r)?n=n.concat($(r)):ee.isFragment(r)&&r.props?n=n.concat($(r.props.children,e)):n.push(r))}),n}var u=function(){function t(e,n){ne(this,t),R(this,"name",void 0),R(this,"style",void 0),R(this,"_keyframe",!0),this.name=e,this.style=n}return te(t,[{key:"getName",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n?"".concat(n,"-").concat(this.name):this.name}}]),t}(),a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=a.F1&&n<=a.F12)return!1;switch(n){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE||e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY||e>=a.A&&e<=a.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const C=()=>({height:0,opacity:0}),D=t=>{const{scrollHeight:e}=t;return{height:e,opacity:1}},fe=t=>({height:t?t.offsetHeight:0}),M=(t,e)=>(e==null?void 0:e.deadline)===!0||e.propertyName==="height",xe=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant"}-motion-collapse`,onAppearStart:C,onEnterStart:C,onAppearActive:D,onEnterActive:D,onLeaveStart:fe,onLeaveActive:C,onAppearEnd:M,onEnterEnd:M,onLeaveEnd:M,motionDeadline:500}},Ze=(t,e,n)=>n!==void 0?n:`${t}-${e}`;var G=s.createContext(null),F=[];function me(t,e){var n=s.useState(function(){if(!S())return null;var c=document.createElement("div");return c}),r=d(n,1),i=r[0],o=s.useRef(!1),f=s.useContext(G),m=s.useState(F),p=d(m,2),E=p[0],g=p[1],I=f||(o.current?void 0:function(c){g(function(l){var h=[c].concat(ae(l));return h})});function v(){i.parentElement||document.body.appendChild(i),o.current=!0}function O(){var c;(c=i.parentElement)===null||c===void 0||c.removeChild(i),o.current=!1}return A(function(){return t?f?f(v):v():O(),O},[t]),A(function(){E.length&&(E.forEach(function(c){return c()}),g(F))},[E]),[i,I]}var T;function le(t){if(typeof document>"u")return 0;if(t||T===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var n=document.createElement("div"),r=n.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(e),document.body.appendChild(n);var i=e.offsetWidth;n.style.overflow="scroll";var o=e.offsetWidth;i===o&&(o=n.clientWidth),document.body.removeChild(n),T=i-o}return T}function b(t){var e=t.match(/^(.*)px$/),n=Number(e==null?void 0:e[1]);return Number.isNaN(n)?le():n}function de(t){if(typeof document>"u"||!t||!(t instanceof Element))return{width:0,height:0};var e=getComputedStyle(t,"::-webkit-scrollbar"),n=e.width,r=e.height;return{width:b(n),height:b(r)}}function Ee(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var ve="rc-util-locker-".concat(Date.now()),z=0;function pe(t){var e=!!t,n=s.useState(function(){return z+=1,"".concat(ve,"_").concat(z)}),r=d(n,1),i=r[0];A(function(){if(e){var o=de(document.body).width,f=Ee();se(`
html body {
  overflow-y: hidden;
  `.concat(f?"width: calc(100% - ".concat(o,"px);"):"",`
}`),i)}else w(i);return function(){w(i)}},[e,i])}var H=!1;function ge(t){return typeof t=="boolean"&&(H=t),H}var x=function(e){return e===!1?!1:!S()||!e?null:typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e},Be=s.forwardRef(function(t,e){var n=t.open,r=t.autoLock,i=t.getContainer;t.debug;var o=t.autoDestroy,f=o===void 0?!0:o,m=t.children,p=s.useState(n),E=d(p,2),g=E[0],I=E[1],v=g||n;s.useEffect(function(){(f||n)&&I(n)},[n,f]);var O=s.useState(function(){return x(i)}),c=d(O,2),l=c[0],h=c[1];s.useEffect(function(){var y=x(i);h(y??null)});var Y=me(v&&!l),P=d(Y,2),L=P[0],V=P[1],_=l??L;pe(r&&n&&S()&&(_===L||_===document.body));var K=null;if(m&&re(m)&&e){var j=m;K=j.ref}var q=oe(K,e);if(!v||!S()||l===void 0)return null;var X=_===!1||ge(),N=m;return e&&(N=s.cloneElement(m,{ref:q})),s.createElement(G.Provider,{value:V},X?N:ue.createPortal(N,_))});function Oe(){var t=ce({},J);return t.useId}var Z=0,B=Oe();const We=B?function(e){var n=B();return e||n}:function(e){var n=s.useState("ssr-id"),r=d(n,2),i=r[0],o=r[1];return s.useEffect(function(){var f=Z;Z+=1,o("rc_unique_".concat(f))},[]),e||i},_e=U.createContext(void 0),Se=_e,Ie=t=>({animationDuration:t,animationFillMode:"both"}),he=t=>({animationDuration:t,animationFillMode:"both"}),Ne=function(t,e,n,r){const o=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${o}${t}-enter,
      ${o}${t}-appear
    `]:Object.assign(Object.assign({},Ie(r)),{animationPlayState:"paused"}),[`${o}${t}-leave`]:Object.assign(Object.assign({},he(r)),{animationPlayState:"paused"}),[`
      ${o}${t}-enter${t}-enter-active,
      ${o}${t}-appear${t}-appear-active
    `]:{animationName:e,animationPlayState:"running"},[`${o}${t}-leave${t}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}},ye=new u("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Re=new u("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),W=new u("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Q=new u("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Ce=new u("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),Me=new u("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),Te=new u("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),Ae=new u("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),Ue=new u("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),Pe=new u("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),Le=new u("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),Ke=new u("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),we={zoom:{inKeyframes:ye,outKeyframes:Re},"zoom-big":{inKeyframes:W,outKeyframes:Q},"zoom-big-fast":{inKeyframes:W,outKeyframes:Q},"zoom-left":{inKeyframes:Te,outKeyframes:Ae},"zoom-right":{inKeyframes:Ue,outKeyframes:Pe},"zoom-up":{inKeyframes:Ce,outKeyframes:Me},"zoom-down":{inKeyframes:Le,outKeyframes:Ke}},Qe=(t,e)=>{const{antCls:n}=t,r=`${n}-${e}`,{inKeyframes:i,outKeyframes:o}=we[e];return[Ne(r,i,o,e==="zoom-big-fast"?t.motionDurationFast:t.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${r}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]},k={Modal:0,Drawer:0,Popover:70,Popconfirm:70,Tooltip:70,Tour:70},$e={SelectLike:50,Dropdown:50,ColorPicker:30,DatePicker:50,Menu:50};function De(t){return t in k}function Ge(t,e){const[,n]=ie(),r=U.useContext(Se),i=De(t);let o=r??0;return i?o+=n.zIndexPopupBase+k[t]:o+=$e[t],[r===void 0?e:o,o]}export{a as K,Be as P,u as a,Qe as b,Ge as c,xe as d,Ze as g,Ne as i,$ as t,We as u,Se as z};
//# sourceMappingURL=useZIndex-6214b6ce.js.map
