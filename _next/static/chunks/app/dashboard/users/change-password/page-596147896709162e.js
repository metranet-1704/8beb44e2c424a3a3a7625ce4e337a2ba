(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2244],{54410:function(e,t,r){Promise.resolve().then(r.t.bind(r,65878,23)),Promise.resolve().then(r.bind(r,81523)),Promise.resolve().then(r.bind(r,70049)),Promise.resolve().then(r.bind(r,8633))},99376:function(e,t,r){"use strict";var s=r(35475);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}}),r.o(s,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return s.useServerInsertedHTML}})},8633:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var s=r(57437),n=r(2265),i=r(29501),a=r(89427),o=r(80605),l=r(78796),d=r(95171),u=r(40748),c=r(12125),m=r(10883),p=r(68193),h=r(25810),f=r(34394),v=r(99376);function x(){var e,t;let{register:r,handleSubmit:x,formState:{errors:g}}=(0,i.cI)(),[j,w]=n.useState(!1),{data:y}=(0,o.useSession)(),_=(0,l.p)(),I=(0,v.useRouter)(),[b,N]=n.useState(!1),[S,E]=n.useState(!1),k=async e=>{var t,r,s;w(!0);let n=await (0,a.Z)("PATCH","".concat("https://mercury.uzone.id/","api/v1/users/password?password=").concat(e.password),e,{accept:"application/json",Authorization:"Bearer ".concat(null==y?void 0:null===(t=y.user)||void 0===t?void 0:t.access_token)});200===n.status?(_({title:"Success",description:n.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),I.push("/dashboard")):(_({title:"Failed to change password",description:null==n?void 0:null===(s=n.data)||void 0===s?void 0:null===(r=s.detail)||void 0===r?void 0:r.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}),w(!1))};return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Change Password"})})}),(0,s.jsx)("div",{className:"max-w-3xl p-4 mx-auto mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:(0,s.jsxs)("form",{onSubmit:x(k),children:[(0,s.jsxs)(d.NI,{isInvalid:!!g.password,children:[(0,s.jsx)(u.l,{htmlFor:"password",children:"Password"}),(0,s.jsxs)(c.B,{size:"md",children:[(0,s.jsx)(m.I,{type:b?"text":"password",id:"password",placeholder:"********",...r("password",{required:"password is required"})}),(0,s.jsx)(p.x,{width:"4.5rem",children:(0,s.jsx)(h.z,{h:"1.75rem",size:"sm",onClick:()=>N(!b),children:b?"Hide":"Show"})})]}),(0,s.jsx)(f.J1,{children:null===(e=g.password)||void 0===e?void 0:e.message})]}),(0,s.jsxs)(d.NI,{mt:5,isInvalid:!!g.password,children:[(0,s.jsx)(u.l,{htmlFor:"confirm_password",children:"Confirm Password"}),(0,s.jsxs)(c.B,{size:"md",children:[(0,s.jsx)(m.I,{type:S?"text":"password",id:"confirm_password",placeholder:"********",...r("confirm_password",{required:"confirm password is required"})}),(0,s.jsx)(p.x,{width:"4.5rem",children:(0,s.jsx)(h.z,{h:"1.75rem",size:"sm",onClick:()=>E(!S),children:S?"Hide":"Show"})})]}),(0,s.jsx)(f.J1,{children:null===(t=g.confirm_password)||void 0===t?void 0:t.message})]}),(0,s.jsx)(h.z,{isLoading:j,type:"submit",colorScheme:"blue",mt:5,children:"Submit"})]})})]})}},89427:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var s=r(83464),n=r(80605);async function i(e,t,r,i){try{let a;a="GET"==e?{validateStatus:()=>!1,method:e,headers:i,url:t,params:r}:{validateStatus:()=>!1,method:e,headers:i,url:t,data:r};let o=await (0,s.Z)(a).catch(e=>e.response);return 401==o.status&&await (0,n.signOut)(),o}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},40748:function(e,t,r){"use strict";r.d(t,{l:function(){return u}});var s=r(95171),n=r(68973),i=r(9889),a=r(83707),o=r(41531),l=r(14096),d=r(57437),u=(0,n.G)(function(e,t){var r;let n=(0,i.mq)("FormLabel",e),u=(0,a.Lr)(e),{className:m,children:p,requiredIndicator:h=(0,d.jsx)(c,{}),optionalIndicator:f=null,...v}=u,x=(0,s.NJ)(),g=null!=(r=null==x?void 0:x.getLabelProps(v,t))?r:{ref:t,...v};return(0,d.jsxs)(o.m.label,{...g,className:(0,l.cx)("chakra-form__label",u.className),__css:{display:"block",textAlign:"start",...n},children:[p,(null==x?void 0:x.isRequired)?h:f]})});u.displayName="FormLabel";var c=(0,n.G)(function(e,t){let r=(0,s.NJ)(),n=(0,s.e)();if(!(null==r?void 0:r.isRequired))return null;let i=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,d.jsx)(o.m.span,{...null==r?void 0:r.getRequiredIndicatorProps(e,t),__css:n.requiredIndicator,className:i})});c.displayName="RequiredIndicator"},34394:function(e,t,r){"use strict";r.d(t,{J1:function(){return h}});var s=r(95171),n=r(13856),i=r(37371),a=r(68973),o=r(9889),l=r(83707),d=r(41531),u=r(14096),c=r(57437),[m,p]=(0,i.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),h=(0,a.G)((e,t)=>{let r=(0,o.jC)("FormError",e),n=(0,l.Lr)(e),i=(0,s.NJ)();return(null==i?void 0:i.isInvalid)?(0,c.jsx)(m,{value:r,children:(0,c.jsx)(d.m.div,{...null==i?void 0:i.getErrorMessageProps(n,t),className:(0,u.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...r.text}})}):null});h.displayName="FormErrorMessage",(0,a.G)((e,t)=>{let r=p(),i=(0,s.NJ)();if(!(null==i?void 0:i.isInvalid))return null;let a=(0,u.cx)("chakra-form__error-icon",e.className);return(0,c.jsx)(n.J,{ref:t,"aria-hidden":!0,...e,__css:r.icon,className:a,children:(0,c.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}).displayName="FormErrorIcon"},68193:function(e,t,r){"use strict";r.d(t,{x:function(){return c}});var s=r(12125),n=r(41531),i=r(68973),a=r(14096),o=r(57437),l=(0,n.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),d=(0,i.G)(function(e,t){var r,n;let{placement:i="left",...a}=e,d=(0,s.m)(),u=d.field,c={["left"===i?"insetStart":"insetEnd"]:"0",width:null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h,height:null!=(n=null==u?void 0:u.height)?n:null==u?void 0:u.h,fontSize:null==u?void 0:u.fontSize,...d.element};return(0,o.jsx)(l,{ref:t,__css:c,...a})});d.id="InputElement",d.displayName="InputElement";var u=(0,i.G)(function(e,t){let{className:r,...s}=e,n=(0,a.cx)("chakra-input__left-element",r);return(0,o.jsx)(d,{ref:t,placement:"left",className:n,...s})});u.id="InputLeftElement",u.displayName="InputLeftElement";var c=(0,i.G)(function(e,t){let{className:r,...s}=e,n=(0,a.cx)("chakra-input__right-element",r);return(0,o.jsx)(d,{ref:t,placement:"right",className:n,...s})});c.id="InputRightElement",c.displayName="InputRightElement"},12125:function(e,t,r){"use strict";r.d(t,{B:function(){return f},m:function(){return h}});var s=r(37371),n=r(1219),i=r(68973),a=r(9889),o=r(83707),l=r(41531),d=r(14096),u=r(66835),c=r(2265),m=r(57437),[p,h]=(0,s.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,i.G)(function(e,t){let r=(0,a.jC)("Input",e),{children:s,className:i,...h}=(0,o.Lr)(e),f=(0,d.cx)("chakra-input__group",i),v={},x=(0,n.W)(s),g=r.field;x.forEach(e=>{var t,s;r&&(g&&"InputLeftElement"===e.type.id&&(v.paddingStart=null!=(t=g.height)?t:g.h),g&&"InputRightElement"===e.type.id&&(v.paddingEnd=null!=(s=g.height)?s:g.h),"InputRightAddon"===e.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(v.borderStartRadius=0))});let j=x.map(t=>{var r,s;let n=(0,u.o)({size:(null==(r=t.props)?void 0:r.size)||e.size,variant:(null==(s=t.props)?void 0:s.variant)||e.variant});return"Input"!==t.type.id?(0,c.cloneElement)(t,n):(0,c.cloneElement)(t,Object.assign(n,v,t.props))});return(0,m.jsx)(l.m.div,{className:f,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...r.group},"data-group":!0,...h,children:(0,m.jsx)(p,{value:r,children:j})})});f.displayName="InputGroup"},66835:function(e,t,r){"use strict";function s(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}r.d(t,{o:function(){return s}})}},function(e){e.O(0,[9439,5878,9293,605,1760,9799,3464,9501,2971,2117,1744],function(){return e(e.s=54410)}),_N_E=e.O()}]);