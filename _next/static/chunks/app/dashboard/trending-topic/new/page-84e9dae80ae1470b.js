(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6873],{65506:function(e,t,r){Promise.resolve().then(r.t.bind(r,65878,23)),Promise.resolve().then(r.bind(r,81523)),Promise.resolve().then(r.bind(r,70049)),Promise.resolve().then(r.bind(r,10598))},99376:function(e,t,r){"use strict";var s=r(35475);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}}),r.o(s,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return s.useServerInsertedHTML}})},38161:function(e,t,r){"use strict";var s=r(57437);r(2265);var n=r(26262),a=r(95171),i=r(40748),l=r(10883),o=r(34394),c=r(4964),d=r(25810);t.Z=e=>{let{register:t,errors:r,loading:u}=e;return(0,s.jsxs)(n.g,{spacing:4,align:"stretch",children:[(0,s.jsxs)(a.NI,{isInvalid:!!r.title,children:[(0,s.jsx)(i.l,{htmlFor:"name",children:"Title"}),(0,s.jsx)(l.I,{id:"title",placeholder:"title",...t("title",{required:"title is required"})}),(0,s.jsx)(o.J1,{children:r.title&&r.title.message})]}),(0,s.jsxs)(a.NI,{isInvalid:!!r.name,children:[(0,s.jsx)(i.l,{htmlFor:"keyword",children:"Keyword"}),(0,s.jsx)(l.I,{id:"name",placeholder:"name",...t("name",{required:"Name is required"})}),(0,s.jsx)(o.J1,{children:r.name&&r.name.message})]}),(0,s.jsxs)(a.NI,{isInvalid:!!r.slug,children:[(0,s.jsx)(i.l,{htmlFor:"slug",children:"Slug"}),(0,s.jsx)(l.I,{id:"slug",placeholder:"slug",...t("slug",{required:"Slug is required"})}),(0,s.jsx)(o.J1,{children:r.slug&&r.slug.message})]}),(0,s.jsxs)(a.NI,{isInvalid:!!r.status,children:[(0,s.jsx)(i.l,{htmlFor:"status",children:"Status"}),(0,s.jsxs)(c.P,{id:"status",placeholder:"Select status",...t("status",{required:"Status is required"}),children:[(0,s.jsx)("option",{value:"1",children:"Enable"}),(0,s.jsx)("option",{value:"0",children:"Disable"})]}),(0,s.jsx)(o.J1,{children:r.status&&r.status.message})]}),(0,s.jsx)(d.z,{isLoading:u,type:"submit",colorScheme:"blue",children:"Submit"})]})}},10598:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(57437),n=r(2265),a=r(38161),i=r(29501),l=r(89427),o=r(80605),c=r(78796),d=r(99376);function u(){let{register:e,handleSubmit:t,formState:{errors:r}}=(0,i.cI)(),[u,m]=n.useState(!1),{data:h}=(0,o.useSession)(),x=(0,c.p)(),p=(0,d.useRouter)(),f=async e=>{var t,r;if(e.user_id=0,e.date=new Date().toISOString(),e.name=e.name.toLowerCase(),m(!0),(await (0,l.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/trending/check-trending-on-articles"),{tags:[e.name]},{accept:"application/json",Authorization:"Bearer ".concat(null==h?void 0:null===(t=h.user)||void 0===t?void 0:t.access_token)})).data.data.length>0){let t=await (0,l.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/trending/"),e,{accept:"application/json",Authorization:"Bearer ".concat(null==h?void 0:null===(r=h.user)||void 0===r?void 0:r.access_token)});201===t.status?(x({title:"Success",description:t.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),p.push("/dashboard/trending-topic")):(x({title:"Failed to create data",description:t.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}),m(!1))}else x({title:"Failed to create data",description:"Tag not found on articles",status:"error",duration:7e3,isClosable:!0,position:"top"}),m(!1)};return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Trending"})})}),(0,s.jsxs)("div",{className:"max-w-3xl p-4 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,s.jsx)("form",{onSubmit:t(f),children:(0,s.jsx)(a.Z,{register:e,errors:r,loading:u})})]})]})}},89427:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(83464),n=r(80605);async function a(e,t,r,a){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:a,url:t,params:r}:{validateStatus:()=>!1,method:e,headers:a,url:t,data:r};let l=await (0,s.Z)(i).catch(e=>e.response);return 401==l.status&&await (0,n.signOut)(),l}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},34394:function(e,t,r){"use strict";r.d(t,{J1:function(){return x}});var s=r(95171),n=r(13856),a=r(37371),i=r(68973),l=r(9889),o=r(83707),c=r(41531),d=r(14096),u=r(57437),[m,h]=(0,a.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),x=(0,i.G)((e,t)=>{let r=(0,l.jC)("FormError",e),n=(0,o.Lr)(e),a=(0,s.NJ)();return(null==a?void 0:a.isInvalid)?(0,u.jsx)(m,{value:r,children:(0,u.jsx)(c.m.div,{...null==a?void 0:a.getErrorMessageProps(n,t),className:(0,d.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...r.text}})}):null});x.displayName="FormErrorMessage",(0,i.G)((e,t)=>{let r=h(),a=(0,s.NJ)();if(!(null==a?void 0:a.isInvalid))return null;let i=(0,d.cx)("chakra-form__error-icon",e.className);return(0,u.jsx)(n.J,{ref:t,"aria-hidden":!0,...e,__css:r.icon,className:i,children:(0,u.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},26262:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var s=r(93088),n=r(68973),a=r(57437),i=(0,n.G)((e,t)=>(0,a.jsx)(s.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},93088:function(e,t,r){"use strict";r.d(t,{K:function(){return d}});var s=r(41531),n=r(57437),a=e=>(0,n.jsx)(s.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});a.displayName="StackItem";var i=r(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=r(1219),o=r(68973),c=r(2265),d=(0,o.G)((e,t)=>{let{isInline:r,direction:o,align:d,justify:u,spacing:m="0.5rem",wrap:h,children:x,divider:p,className:f,shouldWrapChildren:v,...g}=e,j=r?"row":null!=o?o:"column",b=(0,c.useMemo)(()=>(function(e){var t;let{spacing:r,direction:s}=e,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>n[e],Array.isArray(s)?s.map(e=>null===e?null:t(e)):(0,i.Kn)(s)?Object.keys(s).reduce((e,r)=>(e[r]=t(s[r]),e),{}):null!=s?t(s):null)}})({spacing:m,direction:j}),[m,j]),y=!!p,_=!v&&!y,S=(0,c.useMemo)(()=>{let e=(0,l.W)(x);return _?e:e.map((t,r)=>{let s=void 0!==t.key?t.key:r,i=r+1===e.length,l=(0,n.jsx)(a,{children:t},s),o=v?l:t;if(!y)return o;let d=(0,c.cloneElement)(p,{__css:b});return(0,n.jsxs)(c.Fragment,{children:[o,i?null:d]},s)})},[p,b,y,_,v,x]),N=(0,i.cx)("chakra-stack",f);return(0,n.jsx)(s.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:u,flexDirection:j,flexWrap:h,gap:y?void 0:m,className:N,...g,children:S})});d.displayName="Stack"},4964:function(e,t,r){"use strict";r.d(t,{P:function(){return m}});var s=r(14096),n=r(68973),a=r(41531),i=r(57437),l=(0,n.G)(function(e,t){let{children:r,placeholder:n,className:l,...o}=e;return(0,i.jsxs)(a.m.select,{...o,ref:t,className:(0,s.cx)("chakra-select",l),children:[n&&(0,i.jsx)("option",{value:"",children:n}),r]})});l.displayName="SelectField";var o=r(43682),c=r(9889),d=r(83707),u=r(2265),m=(0,n.G)((e,t)=>{var r;let n=(0,c.jC)("Select",e),{rootProps:u,placeholder:m,icon:h,color:x,height:f,h:v,minH:g,minHeight:j,iconColor:b,iconSize:y,..._}=(0,d.Lr)(e),[S,N]=function(e,t){let r={},s={};for(let[n,a]of Object.entries(e))t.includes(n)?r[n]=a:s[n]=a;return[r,s]}(_,d.oE),k=(0,o.Y)(N),w={paddingEnd:"2rem",...n.field,_focus:{zIndex:"unset",...null==(r=n.field)?void 0:r._focus}};return(0,i.jsxs)(a.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:x},...S,...u,children:[(0,i.jsx)(l,{ref:t,height:null!=v?v:f,minH:null!=g?g:j,placeholder:m,...k,__css:w,children:e.children}),(0,i.jsx)(p,{"data-disabled":(0,s.PB)(k.disabled),...(b||x)&&{color:b||x},__css:n.icon,...y&&{fontSize:y},children:h})]})});m.displayName="Select";var h=e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),x=(0,a.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),p=e=>{let{children:t=(0,i.jsx)(h,{}),...r}=e,s=(0,u.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,i.jsx)(x,{...r,className:"chakra-select__icon-wrapper",children:(0,u.isValidElement)(t)?s:null})};p.displayName="SelectIcon"}},function(e){e.O(0,[9701,5878,605,3015,1760,9799,3464,9355,2971,2117,1744],function(){return e(e.s=65506)}),_N_E=e.O()}]);