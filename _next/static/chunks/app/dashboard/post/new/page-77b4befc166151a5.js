(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2096],{76086:function(e,t,s){Promise.resolve().then(s.t.bind(s,65878,23)),Promise.resolve().then(s.bind(s,81523)),Promise.resolve().then(s.bind(s,70049)),Promise.resolve().then(s.bind(s,98461))},99376:function(e,t,s){"use strict";var r=s(35475);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}}),s.o(r,"useServerInsertedHTML")&&s.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},98461:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(57437),o=s(2265),i=s(78796),a=s(29501),n=s(71096),l=s.n(n),u=s(80605),d=s(89427),c=s(71134),m=s(99376),p=s(25957),_=s(76725),h=s(83930);function f(){let{data:e}=(0,u.useSession)(),{setDataPost:t}=(0,h.k)(),[s,n]=o.useState(!1),{setIsModalMedia:f,isOpenFeatureImage:g,openFeatureImage:x,closeFeatureImage:v,setSeletectedImage:b,closeMedia:y,seletectedImage:k,focalPoint:S}=(0,p.G)(),j=(0,m.useRouter)(),{register:N,handleSubmit:P,formState:{errors:C},setValue:M,control:W,trigger:w,reset:q}=(0,a.cI)(),I=(0,a.qo)({control:W,name:"post_title"}),L=(0,i.p)(),Y=async t=>{var s,r;n(!0),t.post_date=l()().format("YYYY-MM-DD HH:mm:ss"),t.post_publish_date="1970-01-01 23:59:59",t.post_original_date=l()().format("YYYY-MM-DD HH:mm:ss"),t.post_status=[t.post_status],t.post_author=e.user.username,t.post_tag=t.post_tag.map(e=>e.label),t.is_premium=0,t.partner_id=1,t.post_video_url="",t.post_gallery="",t.post_modified="",t.feat_img_size={small:{x:null==S?void 0:S.x.toString(),y:null==S?void 0:S.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},t.post_editor=0,t.post_source=0,t.post_canonical_link="",t.is_ghost=0,t.post_enclosure_link="",t.post_title_masking="";let o=await (0,d.Z)("POST","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/articles/"),t,{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(s=e.user)||void 0===s?void 0:s.access_token)});(null==o?void 0:o.status)==201?(n(!1),L({title:"Success",description:"Data has been saved",status:"success",duration:6e3,isClosable:!0,position:"top"}),"publish"==t.post_status?j.push("/dashboard/post/list"):j.push("/dashboard/post/draft")):(n(!1),L({title:"Error",description:null==o?void 0:null===(r=o.data)||void 0===r?void 0:r.message,status:"error",duration:6e3,position:"top",isClosable:!0}))};return N("post_content",{required:"Content is required"}),N("post_tag",{required:"Tag is required"}),N("post_category",{required:"Category is required"}),N("post_publisher",{required:"publish on is required"}),o.useEffect(()=>{I&&M("post_slug",I.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""))},[I,M]),o.useEffect(()=>{v(),b(""),y(),q({}),t("")},[]),(0,r.jsxs)("div",{className:"px-4 pt-6",children:[(0,r.jsx)(c.Z,{register:N,isOpen:g,onClose:v,setValue:M}),(0,r.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,r.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Post"})}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("form",{onSubmit:P(Y),autoComplete:"off",className:"grid grid-cols-1 gap-2 lg:grid-cols-3",children:(0,r.jsx)(_.Z,{register:N,errors:C,session:e,control:W,trigger:w,setValue:M,isLoading:s,setIsModalMedia:f,openFeatureImage:x,seletectedImage:k,Controller:a.Qr})})})]})}},93088:function(e,t,s){"use strict";s.d(t,{K:function(){return d}});var r=s(41531),o=s(57437),i=e=>(0,o.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});i.displayName="StackItem";var a=s(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var n=s(1219),l=s(68973),u=s(2265),d=(0,l.G)((e,t)=>{let{isInline:s,direction:l,align:d,justify:c,spacing:m="0.5rem",wrap:p,children:_,divider:h,className:f,shouldWrapChildren:g,...x}=e,v=s?"row":null!=l?l:"column",b=(0,u.useMemo)(()=>(function(e){var t;let{spacing:s,direction:r}=e,o={column:{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>o[e],Array.isArray(r)?r.map(e=>null===e?null:t(e)):(0,a.Kn)(r)?Object.keys(r).reduce((e,s)=>(e[s]=t(r[s]),e),{}):null!=r?t(r):null)}})({spacing:m,direction:v}),[m,v]),y=!!h,k=!g&&!y,S=(0,u.useMemo)(()=>{let e=(0,n.W)(_);return k?e:e.map((t,s)=>{let r=void 0!==t.key?t.key:s,a=s+1===e.length,n=(0,o.jsx)(i,{children:t},r),l=g?n:t;if(!y)return l;let d=(0,u.cloneElement)(h,{__css:b});return(0,o.jsxs)(u.Fragment,{children:[l,a?null:d]},r)})},[h,b,y,k,g,_]),j=(0,a.cx)("chakra-stack",f);return(0,o.jsx)(r.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:c,flexDirection:v,flexWrap:p,gap:y?void 0:m,className:j,...x,children:S})});d.displayName="Stack"}},function(e){e.O(0,[4565,7699,6051,5706,9956,1779,7240,296,5878,1445,1760,9799,6434,3464,9355,7730,7676,5691,629,316,7987,1721,8479,2971,2117,1744],function(){return e(e.s=76086)}),_N_E=e.O()}]);