(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4589],{28431:function(e,r,t){Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.bind(t,81523)),Promise.resolve().then(t.bind(t,70049)),Promise.resolve().then(t.bind(t,53845))},99376:function(e,r,t){"use strict";var s=t(35475);t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}}),t.o(s,"useServerInsertedHTML")&&t.d(r,{useServerInsertedHTML:function(){return s.useServerInsertedHTML}})},47063:function(e,r,t){"use strict";var s=t(57437);t(2265);var a=t(26262),n=t(95171),i=t(40748),o=t(10883),l=t(34394),c=t(25810);r.Z=e=>{let{register:r,errors:t,loading:d}=e;return(0,s.jsxs)(a.g,{spacing:4,align:"stretch",children:[(0,s.jsxs)(n.NI,{isInvalid:!!t.text,children:[(0,s.jsx)(i.l,{htmlFor:"text",children:"Text"}),(0,s.jsx)(o.I,{id:"text",placeholder:"text",...r("text",{required:"text is required"})}),(0,s.jsx)(l.J1,{children:t.text&&t.text.message})]}),(0,s.jsx)(c.z,{isLoading:d,type:"submit",colorScheme:"blue",children:"Submit"})]})}},53845:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var s=t(57437),a=t(2265),n=t(47063),i=t(29501),o=t(89427),l=t(80605),c=t(78796),d=t(99376);function u(){let{register:e,handleSubmit:r,formState:{errors:t}}=(0,i.cI)(),[u,m]=a.useState(!1),{data:x}=(0,l.useSession)(),h=(0,c.p)(),f=(0,d.useRouter)(),v=async e=>{var r;m(!0);let t=await (0,o.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/adstxt/create"),e,{accept:"application/json",Authorization:"Bearer ".concat(null==x?void 0:null===(r=x.user)||void 0===r?void 0:r.access_token)});201===t.status?(h({title:"Success",description:t.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),f.push("/dashboard/ads/ads-txt")):(h({title:"Failed to create data",description:t.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}),m(!1))};return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Ads.txt"})})}),(0,s.jsxs)("div",{className:"max-w-3xl p-4 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,s.jsx)("form",{onSubmit:r(v),children:(0,s.jsx)(n.Z,{register:e,errors:t,loading:u})})]})]})}},89427:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var s=t(83464);async function a(e,r,t,a){try{let n;return n="GET"==e?{validateStatus:()=>!1,method:e,headers:a,url:r,params:t}:{validateStatus:()=>!1,method:e,headers:a,url:r,data:t},await (0,s.Z)(n).catch(e=>e.response)}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},40748:function(e,r,t){"use strict";t.d(r,{l:function(){return d}});var s=t(95171),a=t(68973),n=t(9889),i=t(83707),o=t(41531),l=t(14096),c=t(57437),d=(0,a.G)(function(e,r){var t;let a=(0,n.mq)("FormLabel",e),d=(0,i.Lr)(e),{className:m,children:x,requiredIndicator:h=(0,c.jsx)(u,{}),optionalIndicator:f=null,...v}=d,p=(0,s.NJ)(),b=null!=(t=null==p?void 0:p.getLabelProps(v,r))?t:{ref:r,...v};return(0,c.jsxs)(o.m.label,{...b,className:(0,l.cx)("chakra-form__label",d.className),__css:{display:"block",textAlign:"start",...a},children:[x,(null==p?void 0:p.isRequired)?h:f]})});d.displayName="FormLabel";var u=(0,a.G)(function(e,r){let t=(0,s.NJ)(),a=(0,s.e)();if(!(null==t?void 0:t.isRequired))return null;let n=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,{...null==t?void 0:t.getRequiredIndicatorProps(e,r),__css:a.requiredIndicator,className:n})});u.displayName="RequiredIndicator"},34394:function(e,r,t){"use strict";t.d(r,{J1:function(){return h}});var s=t(95171),a=t(13856),n=t(37371),i=t(68973),o=t(9889),l=t(83707),c=t(41531),d=t(14096),u=t(57437),[m,x]=(0,n.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),h=(0,i.G)((e,r)=>{let t=(0,o.jC)("FormError",e),a=(0,l.Lr)(e),n=(0,s.NJ)();return(null==n?void 0:n.isInvalid)?(0,u.jsx)(m,{value:t,children:(0,u.jsx)(c.m.div,{...null==n?void 0:n.getErrorMessageProps(a,r),className:(0,d.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})}):null});h.displayName="FormErrorMessage",(0,i.G)((e,r)=>{let t=x(),n=(0,s.NJ)();if(!(null==n?void 0:n.isInvalid))return null;let i=(0,d.cx)("chakra-form__error-icon",e.className);return(0,u.jsx)(a.J,{ref:r,"aria-hidden":!0,...e,__css:t.icon,className:i,children:(0,u.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},26262:function(e,r,t){"use strict";t.d(r,{g:function(){return i}});var s=t(93088),a=t(68973),n=t(57437),i=(0,a.G)((e,r)=>(0,n.jsx)(s.K,{align:"center",...e,direction:"column",ref:r}));i.displayName="VStack"},93088:function(e,r,t){"use strict";t.d(r,{K:function(){return d}});var s=t(41531),a=t(57437),n=e=>(0,a.jsx)(s.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});n.displayName="StackItem";var i=t(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var o=t(1219),l=t(68973),c=t(2265),d=(0,l.G)((e,r)=>{let{isInline:t,direction:l,align:d,justify:u,spacing:m="0.5rem",wrap:x,children:h,divider:f,className:v,shouldWrapChildren:p,...b}=e,g=t?"row":null!=l?l:"column",j=(0,c.useMemo)(()=>(function(e){var r;let{spacing:t,direction:s}=e,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=e=>a[e],Array.isArray(s)?s.map(e=>null===e?null:r(e)):(0,i.Kn)(s)?Object.keys(s).reduce((e,t)=>(e[t]=r(s[t]),e),{}):null!=s?r(s):null)}})({spacing:m,direction:g}),[m,g]),y=!!f,N=!p&&!y,_=(0,c.useMemo)(()=>{let e=(0,o.W)(h);return N?e:e.map((r,t)=>{let s=void 0!==r.key?r.key:t,i=t+1===e.length,o=(0,a.jsx)(n,{children:r},s),l=p?o:r;if(!y)return l;let d=(0,c.cloneElement)(f,{__css:j});return(0,a.jsxs)(c.Fragment,{children:[l,i?null:d]},s)})},[f,j,y,N,p,h]),k=(0,i.cx)("chakra-stack",v);return(0,a.jsx)(s.m.div,{ref:r,display:"flex",alignItems:d,justifyContent:u,flexDirection:g,flexWrap:x,gap:y?void 0:m,className:k,...b,children:_})});d.displayName="Stack"}},function(e){e.O(0,[9439,5878,9293,605,1760,9799,3464,9501,2971,2117,1744],function(){return e(e.s=28431)}),_N_E=e.O()}]);