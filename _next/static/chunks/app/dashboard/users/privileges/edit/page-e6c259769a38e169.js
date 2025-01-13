(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8754],{42480:function(){},60817:function(e,r,t){Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.bind(t,81523)),Promise.resolve().then(t.bind(t,70049)),Promise.resolve().then(t.bind(t,58396))},58396:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var a=t(57437),i=t(2265),s=t(95648),n=t(29501),l=t(89427),o=t(80605),c=t(78796),d=t(43118),u=t(99376);function m(){let{register:e,handleSubmit:r,reset:t,formState:{errors:m}}=(0,n.cI)(),[p,v]=i.useState(!1),{data:f}=(0,o.useSession)(),g=(0,c.p)(),h=(0,u.useRouter)(),x=(0,u.useSearchParams)(),_=(0,d.A)(x.get("aa"))||"",y=async e=>{var r,t,a;e.privilege_name=e.privilege_name_display.toLowerCase().replace(/ /g,"_").replace(/[^\w-]+/g,""),v(!0);let i=await (0,l.Z)("PUT","".concat("https://mercury.uzone.id/","api/v1/privileges/?privilege_id=").concat(_),e,{accept:"application/json",Authorization:"Bearer ".concat(null==f?void 0:null===(r=f.user)||void 0===r?void 0:r.access_token)});200===i.status?(g({title:"Success",description:i.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),h.push("/dashboard/users/privileges/list")):(g({title:"Failed to create data",description:null==i?void 0:null===(a=i.data)||void 0===a?void 0:null===(t=a.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}),v(!1))};return i.useEffect(()=>{let e=async()=>{var e;let r=await (0,l.Z)("GET","".concat("https://mercury.uzone.id/","api/v1/privileges/?id=").concat(_),{},{accept:"application/json",Authorization:"Bearer ".concat(null==f?void 0:null===(e=f.user)||void 0===e?void 0:e.access_token)});200==r.status&&t(r.data.data)};f&&e()},[f,_,t]),(0,a.jsxs)("div",{className:"px-4 pt-6",children:[(0,a.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,a.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Edit Privileges"})})}),(0,a.jsxs)("div",{className:"max-w-3xl p-4 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,a.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,a.jsx)("form",{onSubmit:r(y),children:(0,a.jsx)(s.Z,{register:e,errors:m,loading:p})})]})]})}},95648:function(e,r,t){"use strict";var a=t(57437);t(2265);var i=t(26262),s=t(95171),n=t(40748),l=t(10883),o=t(34394),c=t(25810);r.Z=e=>{let{register:r,errors:t,loading:d}=e;return(0,a.jsxs)(i.g,{spacing:4,align:"stretch",children:[(0,a.jsxs)(s.NI,{isInvalid:!!t.privilege_name_display,children:[(0,a.jsx)(n.l,{htmlFor:"privilege_name_display",children:"Privilege Display Name"}),(0,a.jsx)(l.I,{id:"privilege_name_display",placeholder:"privilege display name",...r("privilege_name_display",{required:"privilege_name_display is required"})}),(0,a.jsx)(o.J1,{children:t.privilege_name_display&&t.privilege_name_display.message})]}),(0,a.jsx)(c.z,{isLoading:d,type:"submit",colorScheme:"blue",children:"Submit"})]})}},43118:function(e,r,t){"use strict";t.d(r,{A:function(){return n},P:function(){return s}});var a=t(80928),i=t.n(a);function s(e){return encodeURIComponent(i().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function n(e){return i().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(i().enc.Utf8)}},89427:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var a=t(83464),i=t(80605);async function s(e,r,t,s){try{let n;n="GET"==e?{validateStatus:()=>!1,method:e,headers:s,url:r,params:t}:{validateStatus:()=>!1,method:e,headers:s,url:r,data:t};let l=await (0,a.Z)(n).catch(e=>e.response);return 401==l.status&&await (0,i.signOut)(),l}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},40748:function(e,r,t){"use strict";t.d(r,{l:function(){return d}});var a=t(95171),i=t(68973),s=t(9889),n=t(83707),l=t(41531),o=t(14096),c=t(57437),d=(0,i.G)(function(e,r){var t;let i=(0,s.mq)("FormLabel",e),d=(0,n.Lr)(e),{className:m,children:p,requiredIndicator:v=(0,c.jsx)(u,{}),optionalIndicator:f=null,...g}=d,h=(0,a.NJ)(),x=null!=(t=null==h?void 0:h.getLabelProps(g,r))?t:{ref:r,...g};return(0,c.jsxs)(l.m.label,{...x,className:(0,o.cx)("chakra-form__label",d.className),__css:{display:"block",textAlign:"start",...i},children:[p,(null==h?void 0:h.isRequired)?v:f]})});d.displayName="FormLabel";var u=(0,i.G)(function(e,r){let t=(0,a.NJ)(),i=(0,a.e)();if(!(null==t?void 0:t.isRequired))return null;let s=(0,o.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(l.m.span,{...null==t?void 0:t.getRequiredIndicatorProps(e,r),__css:i.requiredIndicator,className:s})});u.displayName="RequiredIndicator"},34394:function(e,r,t){"use strict";t.d(r,{J1:function(){return v}});var a=t(95171),i=t(13856),s=t(37371),n=t(68973),l=t(9889),o=t(83707),c=t(41531),d=t(14096),u=t(57437),[m,p]=(0,s.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),v=(0,n.G)((e,r)=>{let t=(0,l.jC)("FormError",e),i=(0,o.Lr)(e),s=(0,a.NJ)();return(null==s?void 0:s.isInvalid)?(0,u.jsx)(m,{value:t,children:(0,u.jsx)(c.m.div,{...null==s?void 0:s.getErrorMessageProps(i,r),className:(0,d.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})}):null});v.displayName="FormErrorMessage",(0,n.G)((e,r)=>{let t=p(),s=(0,a.NJ)();if(!(null==s?void 0:s.isInvalid))return null;let n=(0,d.cx)("chakra-form__error-icon",e.className);return(0,u.jsx)(i.J,{ref:r,"aria-hidden":!0,...e,__css:t.icon,className:n,children:(0,u.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},26262:function(e,r,t){"use strict";t.d(r,{g:function(){return n}});var a=t(93088),i=t(68973),s=t(57437),n=(0,i.G)((e,r)=>(0,s.jsx)(a.K,{align:"center",...e,direction:"column",ref:r}));n.displayName="VStack"}},function(e){e.O(0,[9701,5878,3015,605,1760,9799,3464,9501,9611,2971,2117,1744],function(){return e(e.s=60817)}),_N_E=e.O()}]);