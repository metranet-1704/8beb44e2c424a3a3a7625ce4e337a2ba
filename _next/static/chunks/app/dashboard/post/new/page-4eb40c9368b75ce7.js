(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2096],{76086:function(e,t,s){Promise.resolve().then(s.t.bind(s,65878,23)),Promise.resolve().then(s.bind(s,81523)),Promise.resolve().then(s.bind(s,70049)),Promise.resolve().then(s.bind(s,98461))},99376:function(e,t,s){"use strict";var r=s(35475);s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}}),s.o(r,"useSearchParams")&&s.d(t,{useSearchParams:function(){return r.useSearchParams}}),s.o(r,"useServerInsertedHTML")&&s.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},98461:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(57437),o=s(2265),i=s(78796),a=s(29501),n=s(71096),l=s.n(n),u=s(80605),d=s(89427),c=s(71134),m=s(99376),p=s(25957),_=s(76725),h=s(83930);function f(){let{data:e}=(0,u.useSession)(),{setDataPost:t}=(0,h.k)(),[s,n]=o.useState(!1),{setIsModalMedia:f,isOpenFeatureImage:g,openFeatureImage:x,closeFeatureImage:b,setSeletectedImage:v,closeMedia:y,seletectedImage:k,focalPoint:j,setGallery:S,closeGallery:M}=(0,p.G)(),N=(0,m.useRouter)(),{register:q,handleSubmit:P,formState:{errors:Y},setValue:w,control:C,trigger:W,watch:D,reset:H}=(0,a.cI)(),I=(0,a.qo)({control:C,name:"post_title"}),L=(0,i.p)(),E=async t=>{var s;n(!0),t.post_date=l()().format("YYYY-MM-DD HH:mm:ss"),t.post_publish_date="1970-01-01 23:59:59",t.post_original_date=l()().format("YYYY-MM-DD HH:mm:ss"),t.post_status=[t.post_status],t.post_author=e.user.username,t.post_tag=t.post_tag.map(e=>e.label),t.is_premium=0,t.partner_id=1,t.post_video_url=t.post_video_url||"",t.post_gallery=t.post_gallery||[],t.post_modified=l()().format("YYYY-MM-DD HH:mm:ss"),t.feat_img_size={small:{x:null==j?void 0:j.x.toString(),y:null==j?void 0:j.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},t.post_editor=0,t.post_source=0,t.post_canonical_link="",t.is_ghost=0,t.post_enclosure_link="",t.post_title_masking="";let r=await (0,d.Z)("POST","".concat("http://180.250.66.130:3037/","api/v1/articles/"),t,{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(s=e.user)||void 0===s?void 0:s.access_token)});(null==r?void 0:r.status)==201?(n(!1),L({title:"Success",description:"Data has been saved",status:"success",duration:6e3,isClosable:!0,position:"top"}),"publish"==t.post_status?N.push("/dashboard/post/list"):N.push("/dashboard/post/draft")):(n(!1),L({title:"Failed to create data",description:r.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}))};return q("post_content",{required:"Content is required"}),q("post_tag",{required:"Tag is required"}),q("post_category",{required:"Category is required"}),q("post_publisher",{required:"publish on is required"}),q("feature_img",{required:"main image is required"}),o.useEffect(()=>{I&&w("post_slug",I.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""))},[I,w]),o.useEffect(()=>{b(),v(""),y(),H({}),t(""),S([]),M()},[]),(0,r.jsxs)("div",{className:"px-4 pt-6",children:[(0,r.jsx)(c.Z,{register:q,isOpen:g,onClose:b,setValue:w}),(0,r.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,r.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Post"})}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("form",{onSubmit:P(E),autoComplete:"off",className:"grid grid-cols-1 gap-2 lg:grid-cols-3",children:(0,r.jsx)(_.Z,{register:q,errors:Y,session:e,control:C,trigger:W,setValue:w,isLoading:s,setIsModalMedia:f,openFeatureImage:x,seletectedImage:k,Controller:a.Qr,watch:D,useFieldArray:a.Dq})})})]})}},93088:function(e,t,s){"use strict";s.d(t,{K:function(){return d}});var r=s(41531),o=s(57437),i=e=>(0,o.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});i.displayName="StackItem";var a=s(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var n=s(1219),l=s(68973),u=s(2265),d=(0,l.G)((e,t)=>{let{isInline:s,direction:l,align:d,justify:c,spacing:m="0.5rem",wrap:p,children:_,divider:h,className:f,shouldWrapChildren:g,...x}=e,b=s?"row":null!=l?l:"column",v=(0,u.useMemo)(()=>(function(e){var t;let{spacing:s,direction:r}=e,o={column:{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>o[e],Array.isArray(r)?r.map(e=>null===e?null:t(e)):(0,a.Kn)(r)?Object.keys(r).reduce((e,s)=>(e[s]=t(r[s]),e),{}):null!=r?t(r):null)}})({spacing:m,direction:b}),[m,b]),y=!!h,k=!g&&!y,j=(0,u.useMemo)(()=>{let e=(0,n.W)(_);return k?e:e.map((t,s)=>{let r=void 0!==t.key?t.key:s,a=s+1===e.length,n=(0,o.jsx)(i,{children:t},r),l=g?n:t;if(!y)return l;let d=(0,u.cloneElement)(h,{__css:v});return(0,o.jsxs)(u.Fragment,{children:[l,a?null:d]},r)})},[h,v,y,k,g,_]),S=(0,a.cx)("chakra-stack",f);return(0,o.jsx)(r.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:c,flexDirection:b,flexWrap:p,gap:y?void 0:m,className:S,...x,children:j})});d.displayName="Stack"}},function(e){e.O(0,[4565,7699,6051,9956,1779,7240,5706,296,9701,5878,1445,1760,9799,3464,1612,9355,8191,984,316,7987,1721,8479,2971,2117,1744],function(){return e(e.s=76086)}),_N_E=e.O()}]);