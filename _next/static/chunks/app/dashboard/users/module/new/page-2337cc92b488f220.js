(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5608],{38485:function(e,r,t){Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,61481)),Promise.resolve().then(t.bind(t,26866))},16463:function(e,r,t){"use strict";var s=t(71169);t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}}),t.o(s,"useServerInsertedHTML")&&t.d(r,{useServerInsertedHTML:function(){return s.useServerInsertedHTML}})},81917:function(e,r,t){"use strict";var s=t(57437);t(2265);var a=t(14937),n=t(19769),i=t(20864),o=t(44379),l=t(70671),d=t(65874);r.Z=e=>{let{register:r,errors:t,loading:c}=e;return(0,s.jsxs)(a.g,{spacing:4,align:"stretch",children:[(0,s.jsxs)(n.NI,{isInvalid:!!t.display_name,children:[(0,s.jsx)(i.l,{htmlFor:"display_name",children:"Module Name"}),(0,s.jsx)(o.I,{id:"display_name",placeholder:"module name",...r("display_name",{required:"display_name is required"})}),(0,s.jsx)(l.J1,{children:t.display_name&&t.display_name.message})]}),(0,s.jsx)(d.z,{isLoading:c,type:"submit",colorScheme:"blue",children:"Submit"})]})}},26866:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var s=t(57437),a=t(2265),n=t(81917),i=t(39343),o=t(98053),l=t(30998),d=t(20610),c=t(16463);function u(){let{register:e,handleSubmit:r,formState:{errors:t}}=(0,i.cI)(),[u,m]=a.useState(!1),{data:h}=(0,l.useSession)(),p=(0,d.p)(),x=(0,c.useRouter)(),v=async e=>{var r,t,s;e.module_name=e.display_name.toLowerCase().replace(/ /g,"_").replace(/[^\w-]+/g,""),m(!0);let a=await (0,o.Z)("POST","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/"),e,{accept:"application/json",Authorization:"Bearer ".concat(null==h?void 0:null===(r=h.user)||void 0===r?void 0:r.access_token)});201===a.status?(p({title:"Success",description:a.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),x.push("/dashboard/users/module/list")):(p({title:"Failed to create data",description:null==a?void 0:null===(s=a.data)||void 0===s?void 0:null===(t=s.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}),m(!1))};return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Module"})})}),(0,s.jsxs)("div",{className:"max-w-3xl p-4 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,s.jsx)("form",{onSubmit:r(v),children:(0,s.jsx)(n.Z,{register:e,errors:t,loading:u})})]})]})}},98053:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var s=t(38472),a=t(30998);async function n(e,r,t,n){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:n,url:r,params:t}:{validateStatus:()=>!1,method:e,headers:n,url:r,data:t};let o=await (0,s.Z)(i).catch(e=>e.response);return 401==o.status&&await (0,a.signOut)(),o}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},70671:function(e,r,t){"use strict";t.d(r,{J1:function(){return p}});var s=t(19769),a=t(6353),n=t(92730),i=t(15151),o=t(18713),l=t(29506),d=t(69636),c=t(99372),u=t(57437),[m,h]=(0,n.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),p=(0,i.G)((e,r)=>{let t=(0,o.jC)("FormError",e),a=(0,l.Lr)(e),n=(0,s.NJ)();return(null==n?void 0:n.isInvalid)?(0,u.jsx)(m,{value:t,children:(0,u.jsx)(d.m.div,{...null==n?void 0:n.getErrorMessageProps(a,r),className:(0,c.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})}):null});p.displayName="FormErrorMessage",(0,i.G)((e,r)=>{let t=h(),n=(0,s.NJ)();if(!(null==n?void 0:n.isInvalid))return null;let i=(0,c.cx)("chakra-form__error-icon",e.className);return(0,u.jsx)(a.J,{ref:r,"aria-hidden":!0,...e,__css:t.icon,className:i,children:(0,u.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},14937:function(e,r,t){"use strict";t.d(r,{g:function(){return i}});var s=t(46946),a=t(15151),n=t(57437),i=(0,a.G)((e,r)=>(0,n.jsx)(s.K,{align:"center",...e,direction:"column",ref:r}));i.displayName="VStack"},46946:function(e,r,t){"use strict";t.d(r,{K:function(){return c}});var s=t(69636),a=t(57437),n=e=>(0,a.jsx)(s.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});n.displayName="StackItem";var i=t(99372);Object.freeze(["base","sm","md","lg","xl","2xl"]);var o=t(60729),l=t(15151),d=t(2265),c=(0,l.G)((e,r)=>{let{isInline:t,direction:l,align:c,justify:u,spacing:m="0.5rem",wrap:h,children:p,divider:x,className:v,shouldWrapChildren:f,...g}=e,y=t?"row":null!=l?l:"column",b=(0,d.useMemo)(()=>(function(e){var r;let{spacing:t,direction:s}=e,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=e=>a[e],Array.isArray(s)?s.map(e=>null===e?null:r(e)):(0,i.Kn)(s)?Object.keys(s).reduce((e,t)=>(e[t]=r(s[t]),e),{}):null!=s?r(s):null)}})({spacing:m,direction:y}),[m,y]),j=!!x,_=!f&&!j,N=(0,d.useMemo)(()=>{let e=(0,o.W)(p);return _?e:e.map((r,t)=>{let s=void 0!==r.key?r.key:t,i=t+1===e.length,o=(0,a.jsx)(n,{children:r},s),l=f?o:r;if(!j)return l;let c=(0,d.cloneElement)(x,{__css:b});return(0,a.jsxs)(d.Fragment,{children:[l,i?null:c]},s)})},[x,b,j,_,f,p]),S=(0,i.cx)("chakra-stack",v);return(0,a.jsx)(s.m.div,{ref:r,display:"flex",alignItems:c,justifyContent:u,flexDirection:y,flexWrap:h,gap:j?void 0:m,className:S,...g,children:N})});c.displayName="Stack"}},function(e){e.O(0,[8173,346,2322,753,6300,8472,6619,2971,7023,1744],function(){return e(e.s=38485)}),_N_E=e.O()}]);