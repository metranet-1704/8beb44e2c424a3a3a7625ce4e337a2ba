(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626,1931],{36594:function(e,r,s){Promise.resolve().then(s.bind(s,81523)),Promise.resolve().then(s.bind(s,70049)),Promise.resolve().then(s.bind(s,72827))},33145:function(e,r,s){"use strict";s.d(r,{default:function(){return n.a}});var t=s(48461),n=s.n(t)},99376:function(e,r,s){"use strict";var t=s(35475);s.o(t,"usePathname")&&s.d(r,{usePathname:function(){return t.usePathname}}),s.o(t,"useRouter")&&s.d(r,{useRouter:function(){return t.useRouter}}),s.o(t,"useSearchParams")&&s.d(r,{useSearchParams:function(){return t.useSearchParams}}),s.o(t,"useServerInsertedHTML")&&s.d(r,{useServerInsertedHTML:function(){return t.useServerInsertedHTML}})},48461:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{default:function(){return l},getImageProps:function(){return i}});let t=s(47043),n=s(55346),a=s(65878),o=t._(s(5084));function i(e){let{props:r}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(r))void 0===s&&delete r[e];return{props:r}}let l=a.Image},72827:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return p}});var t=s(57437),n=s(2265),a=s(33145),o=s(78796),i=s(26262),l=s(95171),d=s(40748),u=s(10883),c=s(34394),m=s(25810),h=s(29501),f=s(80605),g=s(99376);function p(){var e,r;let[s,p]=n.useState(!1),x=(0,o.p)(),{handleSubmit:v,register:b,formState:{errors:j}}=(0,h.cI)(),y=(0,g.useSearchParams)(),w=async e=>{p(!0);let r=await (0,f.signIn)("uzone-cms",{username:e.username,password:e.password,redirect:!0});(null==r?void 0:r.error)?(x({title:"Login error",description:r.error,status:"error",duration:6e3,position:"top",isClosable:!0}),p(!1)):window.location.href=y.get("callbackUrl")?y.get("callbackUrl"):"/dashboard"};return(0,t.jsx)("div",{className:"flex justify-center h-screen pt-40 bg-slate-300 dark:bg-gray-800",children:(0,t.jsxs)("div",{className:"w-full max-w-sm",children:[(0,t.jsx)("div",{className:"flex justify-center mb-4",children:(0,t.jsx)(a.default,{src:"/images/logo_z.png",className:"h-12",alt:"Uzone Logo",width:53,height:53})}),(0,t.jsxs)("div",{className:"bg-white rounded-md shadow-md dark:bg-gray-600",children:[(0,t.jsx)("div",{className:"p-5 text-lg font-bold text-center",children:(0,t.jsx)("p",{className:"font-bold dark:text-white",children:"Login CMS"})}),(0,t.jsx)("div",{className:"px-5 pb-5",children:(0,t.jsx)("form",{onSubmit:v(w),children:(0,t.jsxs)(i.g,{spacing:4,children:[(0,t.jsxs)(l.NI,{isInvalid:!!j.username,children:[(0,t.jsx)(d.l,{htmlFor:"username",children:"Username"}),(0,t.jsx)(u.I,{id:"username",placeholder:"Enter your username",...b("username",{required:"Username is required",minLength:{value:4,message:"Username must be at least 4 characters"}})}),(0,t.jsx)(c.J1,{children:(null===(e=j.username)||void 0===e?void 0:e.message)&&"string"==typeof j.username.message?j.username.message:null})]}),(0,t.jsxs)(l.NI,{isInvalid:!!j.password,children:[(0,t.jsx)(d.l,{htmlFor:"password",children:"Password"}),(0,t.jsx)(u.I,{id:"password",type:"password",placeholder:"Enter your password",...b("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}})}),(0,t.jsx)(c.J1,{children:(null===(r=j.password)||void 0===r?void 0:r.message)&&"string"==typeof j.password.message?j.password.message:null})]}),(0,t.jsx)(m.z,{mt:4,colorScheme:"red",isLoading:s,type:"submit",width:"full",children:"Login"})]})})})]})]})})}},34394:function(e,r,s){"use strict";s.d(r,{J1:function(){return f}});var t=s(95171),n=s(13856),a=s(37371),o=s(68973),i=s(9889),l=s(83707),d=s(41531),u=s(14096),c=s(57437),[m,h]=(0,a.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),f=(0,o.G)((e,r)=>{let s=(0,i.jC)("FormError",e),n=(0,l.Lr)(e),a=(0,t.NJ)();return(null==a?void 0:a.isInvalid)?(0,c.jsx)(m,{value:s,children:(0,c.jsx)(d.m.div,{...null==a?void 0:a.getErrorMessageProps(n,r),className:(0,u.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...s.text}})}):null});f.displayName="FormErrorMessage",(0,o.G)((e,r)=>{let s=h(),a=(0,t.NJ)();if(!(null==a?void 0:a.isInvalid))return null;let o=(0,u.cx)("chakra-form__error-icon",e.className);return(0,c.jsx)(n.J,{ref:r,"aria-hidden":!0,...e,__css:s.icon,className:o,children:(0,c.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},26262:function(e,r,s){"use strict";s.d(r,{g:function(){return o}});var t=s(93088),n=s(68973),a=s(57437),o=(0,n.G)((e,r)=>(0,a.jsx)(t.K,{align:"center",...e,direction:"column",ref:r}));o.displayName="VStack"},93088:function(e,r,s){"use strict";s.d(r,{K:function(){return u}});var t=s(41531),n=s(57437),a=e=>(0,n.jsx)(t.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});a.displayName="StackItem";var o=s(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var i=s(1219),l=s(68973),d=s(2265),u=(0,l.G)((e,r)=>{let{isInline:s,direction:l,align:u,justify:c,spacing:m="0.5rem",wrap:h,children:f,divider:g,className:p,shouldWrapChildren:x,...v}=e,b=s?"row":null!=l?l:"column",j=(0,d.useMemo)(()=>(function(e){var r;let{spacing:s,direction:t}=e,n={column:{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(r=e=>n[e],Array.isArray(t)?t.map(e=>null===e?null:r(e)):(0,o.Kn)(t)?Object.keys(t).reduce((e,s)=>(e[s]=r(t[s]),e),{}):null!=t?r(t):null)}})({spacing:m,direction:b}),[m,b]),y=!!g,w=!x&&!y,_=(0,d.useMemo)(()=>{let e=(0,i.W)(f);return w?e:e.map((r,s)=>{let t=void 0!==r.key?r.key:s,o=s+1===e.length,i=(0,n.jsx)(a,{children:r},t),l=x?i:r;if(!y)return l;let u=(0,d.cloneElement)(g,{__css:j});return(0,n.jsxs)(d.Fragment,{children:[l,o?null:u]},t)})},[g,j,y,w,x,f]),N=(0,o.cx)("chakra-stack",p);return(0,n.jsx)(t.m.div,{ref:r,display:"flex",alignItems:u,justifyContent:c,flexDirection:b,flexWrap:h,gap:y?void 0:m,className:N,...v,children:_})});u.displayName="Stack"}},function(e){e.O(0,[9701,5878,605,3015,1760,9799,9355,2971,2117,1744],function(){return e(e.s=36594)}),_N_E=e.O()}]);