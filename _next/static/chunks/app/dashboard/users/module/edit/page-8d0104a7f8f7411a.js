(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2404],{42480:function(){},28129:function(e,r,t){Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,61481)),Promise.resolve().then(t.bind(t,37534))},16463:function(e,r,t){"use strict";var a=t(71169);t.o(a,"usePathname")&&t.d(r,{usePathname:function(){return a.usePathname}}),t.o(a,"useRouter")&&t.d(r,{useRouter:function(){return a.useRouter}}),t.o(a,"useSearchParams")&&t.d(r,{useSearchParams:function(){return a.useSearchParams}}),t.o(a,"useServerInsertedHTML")&&t.d(r,{useServerInsertedHTML:function(){return a.useServerInsertedHTML}})},37534:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var a=t(57437),s=t(2265),n=t(81917),o=t(39343),i=t(98053),c=t(30998),d=t(20610),u=t(16463),l=t(22114);function m(){let{register:e,handleSubmit:r,reset:t,formState:{errors:m}}=(0,o.cI)(),[h,f]=s.useState(!1),{data:p}=(0,c.useSession)(),v=(0,d.p)(),g=(0,u.useRouter)(),x=(0,u.useSearchParams)(),b=(0,l.A)(x.get("aa"))||"",j=async e=>{var r,t,a;e.module_name=e.module_name.toLowerCase().replace(/ /g,"_").replace(/[^\w-]+/g,""),f(!0);let s=await (0,i.Z)("PUT","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/?module_id=").concat(b),e,{accept:"application/json",Authorization:"Bearer ".concat(null==p?void 0:null===(r=p.user)||void 0===r?void 0:r.access_token)});200===s.status?(v({title:"Success",description:s.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),g.push("/dashboard/users/module/list")):(v({title:"Failed to create data",description:null==s?void 0:null===(a=s.data)||void 0===a?void 0:null===(t=a.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}),f(!1))};return s.useEffect(()=>{let e=async()=>{var e;let r=await (0,i.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/?id=").concat(b),{},{accept:"application/json",Authorization:"Bearer ".concat(null==p?void 0:null===(e=p.user)||void 0===e?void 0:e.access_token)});200==r.status&&t(r.data.data.module)};p&&e()},[p,b,t]),(0,a.jsxs)("div",{className:"px-4 pt-6",children:[(0,a.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,a.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Edit Modules"})})}),(0,a.jsxs)("div",{className:"max-w-3xl p-4 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,a.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,a.jsx)("form",{onSubmit:r(j),children:(0,a.jsx)(n.Z,{register:e,errors:m,loading:h})})]})]})}},81917:function(e,r,t){"use strict";var a=t(57437);t(2265);var s=t(14937),n=t(19769),o=t(20864),i=t(44379),c=t(70671),d=t(65874);r.Z=e=>{let{register:r,errors:t,loading:u}=e;return(0,a.jsxs)(s.g,{spacing:4,align:"stretch",children:[(0,a.jsxs)(n.NI,{isInvalid:!!t.display_name,children:[(0,a.jsx)(o.l,{htmlFor:"display_name",children:"Module Name"}),(0,a.jsx)(i.I,{id:"display_name",placeholder:"module name",...r("display_name",{required:"display_name is required"})}),(0,a.jsx)(c.J1,{children:t.display_name&&t.display_name.message})]}),(0,a.jsx)(d.z,{isLoading:u,type:"submit",colorScheme:"blue",children:"Submit"})]})}},22114:function(e,r,t){"use strict";t.d(r,{A:function(){return o},P:function(){return n}});var a=t(58110),s=t.n(a);function n(e){return encodeURIComponent(s().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function o(e){return s().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(s().enc.Utf8)}},98053:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var a=t(38472);async function s(e,r,t,s){try{let n;return n="GET"==e?{validateStatus:()=>!1,method:e,headers:s,url:r,params:t}:{validateStatus:()=>!1,method:e,headers:s,url:r,data:t},await (0,a.Z)(n).catch(e=>e.response)}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},70671:function(e,r,t){"use strict";t.d(r,{J1:function(){return f}});var a=t(19769),s=t(6353),n=t(92730),o=t(15151),i=t(18713),c=t(29506),d=t(69636),u=t(99372),l=t(57437),[m,h]=(0,n.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),f=(0,o.G)((e,r)=>{let t=(0,i.jC)("FormError",e),s=(0,c.Lr)(e),n=(0,a.NJ)();return(null==n?void 0:n.isInvalid)?(0,l.jsx)(m,{value:t,children:(0,l.jsx)(d.m.div,{...null==n?void 0:n.getErrorMessageProps(s,r),className:(0,u.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})}):null});f.displayName="FormErrorMessage",(0,o.G)((e,r)=>{let t=h(),n=(0,a.NJ)();if(!(null==n?void 0:n.isInvalid))return null;let o=(0,u.cx)("chakra-form__error-icon",e.className);return(0,l.jsx)(s.J,{ref:r,"aria-hidden":!0,...e,__css:t.icon,className:o,children:(0,l.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},14937:function(e,r,t){"use strict";t.d(r,{g:function(){return o}});var a=t(46946),s=t(15151),n=t(57437),o=(0,s.G)((e,r)=>(0,n.jsx)(a.K,{align:"center",...e,direction:"column",ref:r}));o.displayName="VStack"}},function(e){e.O(0,[8173,346,2322,5917,6300,8472,6619,8110,2971,7023,1744],function(){return e(e.s=28129)}),_N_E=e.O()}]);