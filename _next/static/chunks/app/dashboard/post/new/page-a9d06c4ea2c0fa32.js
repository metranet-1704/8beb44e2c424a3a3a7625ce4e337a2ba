(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2096],{76086:function(t,e,s){Promise.resolve().then(s.t.bind(s,65878,23)),Promise.resolve().then(s.bind(s,81523)),Promise.resolve().then(s.bind(s,70049)),Promise.resolve().then(s.bind(s,98461))},99376:function(t,e,s){"use strict";var o=s(35475);s.o(o,"usePathname")&&s.d(e,{usePathname:function(){return o.usePathname}}),s.o(o,"useRouter")&&s.d(e,{useRouter:function(){return o.useRouter}}),s.o(o,"useSearchParams")&&s.d(e,{useSearchParams:function(){return o.useSearchParams}}),s.o(o,"useServerInsertedHTML")&&s.d(e,{useServerInsertedHTML:function(){return o.useServerInsertedHTML}})},98461:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var o=s(57437),r=s(2265),i=s(78796),a=s(29501),n=s(71096),l=s.n(n),u=s(80605),d=s(89427),c=s(82645),m=s(99376),p=s(25957),_=s(65594),v=s(83930);function h(){let{data:t}=(0,u.useSession)(),{setDataPost:e,setStatusSave:s}=(0,v.k)(),[n,h]=r.useState(""),[g,f]=r.useState(!1),{setIsModalMedia:b,isOpenFeatureImage:y,openFeatureImage:x,closeFeatureImage:Y,setSeletectedImage:k,closeMedia:M,seletectedImage:D,focalPoint:S,setGallery:j,closeGallery:H}=(0,p.G)(),P=(0,m.useRouter)(),{register:N,handleSubmit:q,formState:{errors:w},setValue:C,control:W,trigger:z,watch:I,reset:L,getValues:T}=(0,a.cI)();(0,a.qo)({control:W,name:"post_title"});let A=(0,i.p)(),B=async e=>{var s,o;f(!0),e.post_date=l()().format("YYYY-MM-DD HH:mm:ss"),e.post_publish_date="scheduled"===e.post_status?l()(e.post_publish_date).format("YYYY-MM-DD HH:mm:ss"):null,e.post_original_date=l()().format("YYYY-MM-DD HH:mm:ss"),e.post_status=[e.post_status],e.post_author="".concat(t.user.first_name," ").concat(t.user.last_name),e.post_tag=e.post_tag.map(t=>t.label),e.is_premium=0,e.partner_id=1,e.post_video_url=e.post_video_url||"",e.post_gallery=e.post_gallery||[],e.post_modified=l()().format("YYYY-MM-DD HH:mm:ss"),e.feat_img_size={small:{x:null==S?void 0:S.x.toString(),y:null==S?void 0:S.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},e.post_editor=0,e.post_source=0,e.post_canonical_link="",e.is_ghost=0,e.post_enclosure_link="",e.post_title_masking="",e.contributor=e.contributor||"",e.contributor_id="",e.id=0;let r=await (0,d.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/articles/?article_id=0"),e,{accept:"application/json",Authorization:"Bearer ".concat(null==t?void 0:null===(s=t.user)||void 0===s?void 0:s.access_token)});(null==r?void 0:r.status)==201?(f(!1),A({title:"Success",description:"Data has been saved",status:"success",duration:6e3,isClosable:!0,position:"top"}),"publish"==e.post_status?P.push("/dashboard/post/list"):P.push("/dashboard/post/draft")):(null==r?void 0:r.status)==403?(f(!1),A({title:"Error",description:null==r?void 0:null===(o=r.data)||void 0===o?void 0:o.message,status:"error",duration:6e3,isClosable:!0,position:"top"})):(f(!1),A({title:"Failed to create data",description:r.data.detail.map(t=>"".concat(t.loc.join(" -> "),": ").concat(t.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}))},E=async()=>{var e,o,r,i,a,u;let c=T();s("saving"),c.post_date=l()().format("YYYY-MM-DD HH:mm:ss"),c.post_publish_date="scheduled"===c.post_status?l()(c.post_publish_date).format("YYYY-MM-DD HH:mm:ss"):null,c.post_original_date=l()().format("YYYY-MM-DD HH:mm:ss"),c.post_status=["draft"],c.post_author="".concat(t.user.first_name," ").concat(t.user.last_name),c.post_tag=(null===(e=c.post_tag)||void 0===e?void 0:e.map(t=>t.label))||[],c.is_premium=0,c.partner_id=1,c.post_video_url=c.post_video_url||"",c.post_gallery=c.post_gallery||[],c.post_modified=l()().format("YYYY-MM-DD HH:mm:ss"),c.feat_img_size={small:{x:null==S?void 0:S.x.toString(),y:null==S?void 0:S.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},c.post_editor=0,c.post_source=0,c.post_canonical_link="",c.is_ghost=0,c.post_enclosure_link="",c.post_title_masking="",c.post_images_title=c.post_images_title||"",c.feature_img=c.feature_img||"",c.post_publisher=c.post_publisher||[],c.post_category=c.post_category||[],c.post_category_id=c.post_category_id||[],c.post_category=c.post_category||[],c.contributor=c.contributor||"",c.contributor_id="",c.id=0;let m=await (0,d.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/articles/"),c,{accept:"application/json",Authorization:"Bearer ".concat(null==t?void 0:null===(o=t.user)||void 0===o?void 0:o.access_token)});(null==m?void 0:m.status)==201?(s("saved"),h(null==m?void 0:null===(i=m.data)||void 0===i?void 0:null===(r=i.data)||void 0===r?void 0:r.id)):((null==m?void 0:null===(a=m.data)||void 0===a?void 0:a.message)=="Article with the same slug already exists"&&(c.id=n,await (0,d.Z)("PUT","".concat("https://mercury.uzone.id/","api/v1/articles/?article_id=").concat(n),c,{accept:"application/json",Authorization:"Bearer ".concat(null==t?void 0:null===(u=t.user)||void 0===u?void 0:u.access_token)})),s("saved"))};return N("post_content",{required:"Content is required"}),N("post_tag",{required:"Tag is required"}),N("post_category",{required:"Category is required"}),N("post_publisher",{required:"publish on is required"}),N("feature_img",{required:"main image is required"}),r.useEffect(()=>{Y(),k(""),M(),L({}),e(""),j([]),H()},[]),(0,o.jsxs)("div",{className:"px-4 pt-6",children:[(0,o.jsx)(c.Z,{register:N,isOpen:y,onClose:Y,setValue:C}),(0,o.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,o.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Post"})}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)("form",{onSubmit:q(B),autoComplete:"off",className:"grid grid-cols-1 gap-2 lg:grid-cols-3",children:(0,o.jsx)(_.Z,{register:N,errors:w,session:t,control:W,trigger:z,setValue:C,isLoading:g,setIsModalMedia:b,openFeatureImage:x,seletectedImage:D,Controller:a.Qr,watch:I,useFieldArray:a.Dq,saveContentToDraft:E,isEdit:!1})})})]})}},93088:function(t,e,s){"use strict";s.d(e,{K:function(){return d}});var o=s(41531),r=s(57437),i=t=>(0,r.jsx)(o.m.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});i.displayName="StackItem";var a=s(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var n=s(1219),l=s(68973),u=s(2265),d=(0,l.G)((t,e)=>{let{isInline:s,direction:l,align:d,justify:c,spacing:m="0.5rem",wrap:p,children:_,divider:v,className:h,shouldWrapChildren:g,...f}=t,b=s?"row":null!=l?l:"column",y=(0,u.useMemo)(()=>(function(t){var e;let{spacing:s,direction:o}=t,r={column:{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(e=t=>r[t],Array.isArray(o)?o.map(t=>null===t?null:e(t)):(0,a.Kn)(o)?Object.keys(o).reduce((t,s)=>(t[s]=e(o[s]),t),{}):null!=o?e(o):null)}})({spacing:m,direction:b}),[m,b]),x=!!v,Y=!g&&!x,k=(0,u.useMemo)(()=>{let t=(0,n.W)(_);return Y?t:t.map((e,s)=>{let o=void 0!==e.key?e.key:s,a=s+1===t.length,n=(0,r.jsx)(i,{children:e},o),l=g?n:e;if(!x)return l;let d=(0,u.cloneElement)(v,{__css:y});return(0,r.jsxs)(u.Fragment,{children:[l,a?null:d]},o)})},[v,y,x,Y,g,_]),M=(0,a.cx)("chakra-stack",h);return(0,r.jsx)(o.m.div,{ref:e,display:"flex",alignItems:d,justifyContent:c,flexDirection:b,flexWrap:p,gap:x?void 0:m,className:M,...f,children:k})});d.displayName="Stack"}},function(t){t.O(0,[4565,7360,7699,1544,6051,5706,9956,1779,7240,2156,296,9439,5878,9293,605,1760,9799,3464,9501,7198,9395,9614,6530,674,1523,7417,1086,2971,2117,1744],function(){return t(t.s=76086)}),_N_E=t.O()}]);