"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{99376:function(e,t,n){var a=n(35475);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}}),n.o(a,"useSearchParams")&&n.d(t,{useSearchParams:function(){return a.useSearchParams}}),n.o(a,"useServerInsertedHTML")&&n.d(t,{useServerInsertedHTML:function(){return a.useServerInsertedHTML}})},41966:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(57437),r=n(2265),s=n(78796),l=n(26553),c=n(48860),o=n(49270),i=n(16152),d=n(20517),u=n(25810),m=n(89427);function h(e){let{isOpen:t,setIsUpdate:n,session:h,idDelete:f,onClose:p}=e,v=r.useRef(null),y=(0,s.p)(),[g,x]=r.useState(!1),b=async()=>{var e;x(!0);let t=await (0,m.Z)("DELETE","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/articles/?article_id=").concat(f),{},{accept:"application/json",Authorization:"Bearer ".concat(null==h?void 0:null===(e=h.user)||void 0===e?void 0:e.access_token)});x(!1),200==t.status?(n(Math.random()),p(),y({title:"Success",description:t.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):y({title:"Error",description:t.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,a.jsx)(l.a,{isOpen:t,leastDestructiveRef:v,onClose:p,children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)(l._,{children:[(0,a.jsx)(o.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,a.jsx)(i.f,{children:"Apakah anda yakin ingin menghapus artikel ini?"}),(0,a.jsxs)(d.m,{children:[(0,a.jsx)(u.z,{ref:v,onClick:p,children:"Cancel"}),(0,a.jsx)(u.z,{colorScheme:"red",onClick:()=>b(),isLoading:g,ml:3,children:"Delete"})]})]})})})}},89427:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(83464),r=n(80605);async function s(e,t,n,s){try{let l;l="GET"==e?{validateStatus:()=>!1,method:e,headers:s,url:t,params:n}:{validateStatus:()=>!1,method:e,headers:s,url:t,data:n};let c=await (0,a.Z)(l).catch(e=>e.response);return 401==c.status&&await (0,r.signOut)(),c}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},93088:function(e,t,n){n.d(t,{K:function(){return d}});var a=n(41531),r=n(57437),s=e=>(0,r.jsx)(a.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});s.displayName="StackItem";var l=n(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var c=n(1219),o=n(68973),i=n(2265),d=(0,o.G)((e,t)=>{let{isInline:n,direction:o,align:d,justify:u,spacing:m="0.5rem",wrap:h,children:f,divider:p,className:v,shouldWrapChildren:y,...g}=e,x=n?"row":null!=o?o:"column",b=(0,i.useMemo)(()=>(function(e){var t;let{spacing:n,direction:a}=e,r={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>r[e],Array.isArray(a)?a.map(e=>null===e?null:t(e)):(0,l.Kn)(a)?Object.keys(a).reduce((e,n)=>(e[n]=t(a[n]),e),{}):null!=a?t(a):null)}})({spacing:m,direction:x}),[m,x]),S=!!p,j=!y&&!S,k=(0,i.useMemo)(()=>{let e=(0,c.W)(f);return j?e:e.map((t,n)=>{let a=void 0!==t.key?t.key:n,l=n+1===e.length,c=(0,r.jsx)(s,{children:t},a),o=y?c:t;if(!S)return o;let d=(0,i.cloneElement)(p,{__css:b});return(0,r.jsxs)(i.Fragment,{children:[o,l?null:d]},a)})},[p,b,S,j,y,f]),_=(0,l.cx)("chakra-stack",v);return(0,r.jsx)(a.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:u,flexDirection:x,flexWrap:h,gap:S?void 0:m,className:_,...g,children:k})});d.displayName="Stack"},4964:function(e,t,n){n.d(t,{P:function(){return m}});var a=n(14096),r=n(68973),s=n(41531),l=n(57437),c=(0,r.G)(function(e,t){let{children:n,placeholder:r,className:c,...o}=e;return(0,l.jsxs)(s.m.select,{...o,ref:t,className:(0,a.cx)("chakra-select",c),children:[r&&(0,l.jsx)("option",{value:"",children:r}),n]})});c.displayName="SelectField";var o=n(43682),i=n(9889),d=n(83707),u=n(2265),m=(0,r.G)((e,t)=>{var n;let r=(0,i.jC)("Select",e),{rootProps:u,placeholder:m,icon:h,color:f,height:v,h:y,minH:g,minHeight:x,iconColor:b,iconSize:S,...j}=(0,d.Lr)(e),[k,_]=function(e,t){let n={},a={};for(let[r,s]of Object.entries(e))t.includes(r)?n[r]=s:a[r]=s;return[n,a]}(j,d.oE),C=(0,o.Y)(_),T={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...null==(n=r.field)?void 0:n._focus}};return(0,l.jsxs)(s.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:f},...k,...u,children:[(0,l.jsx)(c,{ref:t,height:null!=y?y:v,minH:null!=g?g:x,placeholder:m,...C,__css:T,children:e.children}),(0,l.jsx)(p,{"data-disabled":(0,a.PB)(C.disabled),...(b||f)&&{color:b||f},__css:r.icon,...S&&{fontSize:S},children:h})]})});m.displayName="Select";var h=e=>(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),f=(0,s.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),p=e=>{let{children:t=(0,l.jsx)(h,{}),...n}=e,a=(0,u.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,l.jsx)(f,{...n,className:"chakra-select__icon-wrapper",children:(0,u.isValidElement)(t)?a:null})};p.displayName="SelectIcon"},28082:function(e,t,n){n.d(t,{Vp:function(){return m}});var a=n(13856),r=n(37371),s=n(68973),l=n(9889),c=n(83707),o=n(41531),i=n(57437),[d,u]=(0,r.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),m=(0,s.G)((e,t)=>{let n=(0,l.jC)("Tag",e),a=(0,c.Lr)(e),r={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return(0,i.jsx)(d,{value:n,children:(0,i.jsx)(o.m.span,{ref:t,...a,__css:r})})});m.displayName="Tag",(0,s.G)((e,t)=>{let n=u();return(0,i.jsx)(o.m.span,{ref:t,noOfLines:1,...e,__css:n.label})}).displayName="TagLabel",(0,s.G)((e,t)=>(0,i.jsx)(a.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e})).displayName="TagLeftIcon",(0,s.G)((e,t)=>(0,i.jsx)(a.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e})).displayName="TagRightIcon";var h=e=>(0,i.jsx)(a.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});h.displayName="TagCloseIcon",(0,s.G)((e,t)=>{let{isDisabled:n,children:a,...r}=e,s={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...u().closeButton};return(0,i.jsx)(o.m.button,{ref:t,"aria-label":"close",...r,type:"button",disabled:n,__css:s,children:a||(0,i.jsx)(h,{})})}).displayName="TagCloseButton"},25922:function(e,t,n){n.d(t,{F:function(){return i},f:function(){return d}});var a=n(2265),r=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,c=a.createContext(void 0),o={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=a.useContext(c))?e:o},d=e=>a.useContext(c)?e.children:a.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:d=u,defaultTheme:m=l?"system":"light",attribute:y="data-theme",value:g,children:x,nonce:b}=e,[S,j]=a.useState(()=>f(i,m)),[k,_]=a.useState(()=>f(i)),C=g?Object.values(g):d,T=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=v());let a=g?g[t]:t,s=n?p():null,c=document.documentElement;if("class"===y?(c.classList.remove(...C),a&&c.classList.add(a)):a?c.setAttribute(y,a):c.removeAttribute(y),o){let e=r.includes(m)?m:null,n=r.includes(t)?t:e;c.style.colorScheme=n}null==s||s()},[]),w=a.useCallback(e=>{let t="function"==typeof e?e(e):e;j(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),E=a.useCallback(e=>{_(v(e)),"system"===S&&l&&!t&&T("system")},[S,t]);a.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),a.useEffect(()=>{let e=e=>{e.key===i&&w(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[w]),a.useEffect(()=>{T(null!=t?t:S)},[t,S]);let L=a.useMemo(()=>({theme:S,setTheme:w,forcedTheme:t,resolvedTheme:"system"===S?k:S,themes:l?[...d,"system"]:d,systemTheme:l?k:void 0}),[S,w,t,k,l,d]);return a.createElement(c.Provider,{value:L},a.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:l,enableColorScheme:o,storageKey:i,themes:d,defaultTheme:m,attribute:y,value:g,children:x,attrs:C,nonce:b}),x)},h=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:c,enableColorScheme:o,defaultTheme:i,value:d,attrs:u,nonce:m}=e,h="system"===i,f="class"===l?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),p=o?(r.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=d?d[e]:e,s=t?e+"|| ''":"'".concat(a,"'"),c="";return o&&n&&!t&&r.includes(e)&&(c+="d.style.colorScheme = '".concat(e,"';")),"class"===l?t||a?c+="c.add(".concat(s,")"):c+="null":a&&(c+="d[s](n,".concat(s,")")),c},y=t?"!function(){".concat(f).concat(v(t),"}()"):c?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(s,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(p,"}catch(t){}}();");return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})}),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}}]);