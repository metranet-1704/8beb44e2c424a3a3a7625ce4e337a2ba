(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2096],{76086:function(e,t,s){Promise.resolve().then(s.t.bind(s,65878,23)),Promise.resolve().then(s.bind(s,81523)),Promise.resolve().then(s.bind(s,70049)),Promise.resolve().then(s.bind(s,98461))},99376:function(e,t,s){"use strict";var o=s(35475);s.o(o,"usePathname")&&s.d(t,{usePathname:function(){return o.usePathname}}),s.o(o,"useRouter")&&s.d(t,{useRouter:function(){return o.useRouter}}),s.o(o,"useSearchParams")&&s.d(t,{useSearchParams:function(){return o.useSearchParams}}),s.o(o,"useServerInsertedHTML")&&s.d(t,{useServerInsertedHTML:function(){return o.useServerInsertedHTML}})},98461:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var o=s(57437),r=s(2265),a=s(78796),i=s(29501),l=s(71096),n=s.n(l),u=s(80605),d=s(89427),c=s(82645),p=s(99376),m=s(25957),_=s(5401),g=s(83930);function v(){let{data:e}=(0,u.useSession)(),{setDataPost:t,setStatusSave:s}=(0,g.k)(),[l,v]=r.useState(""),[h,f]=r.useState(!1),{setIsModalMedia:y,isOpenFeatureImage:x,openFeatureImage:b,closeFeatureImage:k,setSeletectedImage:Y,closeMedia:S,seletectedImage:j,focalPoint:M,setGallery:D,closeGallery:H}=(0,m.G)(),w=(0,p.useRouter)(),{register:P,handleSubmit:N,formState:{errors:q},setValue:C,control:W,trigger:z,watch:I,reset:L,getValues:T}=(0,i.cI)(),A=(0,i.qo)({control:W,name:"post_title"}),B=(0,a.p)(),O=async t=>{var s;f(!0),t.post_date=n()().format("YYYY-MM-DD HH:mm:ss"),t.post_publish_date="1970-01-01 23:59:59",t.post_original_date=n()().format("YYYY-MM-DD HH:mm:ss"),t.post_status=[t.post_status],t.post_author=e.user.username,t.post_tag=t.post_tag.map(e=>e.label),t.is_premium=0,t.partner_id=1,t.post_video_url=t.post_video_url||"",t.post_gallery=t.post_gallery||[],t.post_modified=n()().format("YYYY-MM-DD HH:mm:ss"),t.feat_img_size={small:{x:null==M?void 0:M.x.toString(),y:null==M?void 0:M.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},t.post_editor=0,t.post_source=0,t.post_canonical_link="",t.is_ghost=0,t.post_enclosure_link="",t.post_title_masking="";let o=await (0,d.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/articles/"),t,{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(s=e.user)||void 0===s?void 0:s.access_token)});(null==o?void 0:o.status)==201?(f(!1),B({title:"Success",description:"Data has been saved",status:"success",duration:6e3,isClosable:!0,position:"top"}),"publish"==t.post_status?w.push("/dashboard/post/list"):w.push("/dashboard/post/draft")):(f(!1),B({title:"Failed to create data",description:o.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,isClosable:!0,position:"top"}))},E=async()=>{var t,o,r,a,i,u;let c=T();s("saving"),c.post_date=n()().format("YYYY-MM-DD HH:mm:ss"),c.post_publish_date="1970-01-01 23:59:59",c.post_original_date=n()().format("YYYY-MM-DD HH:mm:ss"),c.post_status=["draft"],c.post_author=e.user.username,c.post_tag=(null===(t=c.post_tag)||void 0===t?void 0:t.map(e=>e.label))||[],c.is_premium=0,c.partner_id=1,c.post_video_url=c.post_video_url||"",c.post_gallery=c.post_gallery||[],c.post_modified=n()().format("YYYY-MM-DD HH:mm:ss"),c.feat_img_size={small:{x:null==M?void 0:M.x.toString(),y:null==M?void 0:M.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},c.post_editor=0,c.post_source=0,c.post_canonical_link="",c.is_ghost=0,c.post_enclosure_link="",c.post_title_masking="",c.post_images_title=c.post_images_title||"",c.feature_img=c.feature_img||"",c.post_publisher=c.post_publisher||[],c.post_category=c.post_category||[],c.post_category_id=c.post_category_id||[],c.post_category=c.post_category||[];let p=await (0,d.Z)("POST","".concat("https://mercury.uzone.id/","api/v1/articles/"),c,{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(o=e.user)||void 0===o?void 0:o.access_token)});(null==p?void 0:p.status)==201?(s("saved"),v(null==p?void 0:null===(a=p.data)||void 0===a?void 0:null===(r=a.data)||void 0===r?void 0:r.id)):((null==p?void 0:null===(i=p.data)||void 0===i?void 0:i.message)=="Article with the same slug already exists"&&await (0,d.Z)("PUT","".concat("https://mercury.uzone.id/","api/v1/articles/?article_id=").concat(l),c,{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(u=e.user)||void 0===u?void 0:u.access_token)}),s("saved"))};return P("post_content",{required:"Content is required"}),P("post_tag",{required:"Tag is required"}),P("post_category",{required:"Category is required"}),P("post_publisher",{required:"publish on is required"}),P("feature_img",{required:"main image is required"}),r.useEffect(()=>{A&&C("post_slug",A.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""))},[A,C]),r.useEffect(()=>{k(),Y(""),S(),L({}),t(""),D([]),H()},[]),(0,o.jsxs)("div",{className:"px-4 pt-6",children:[(0,o.jsx)(c.Z,{register:P,isOpen:x,onClose:k,setValue:C}),(0,o.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,o.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Post"})}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)("form",{onSubmit:N(O),autoComplete:"off",className:"grid grid-cols-1 gap-2 lg:grid-cols-3",children:(0,o.jsx)(_.Z,{register:P,errors:q,session:e,control:W,trigger:z,setValue:C,isLoading:h,setIsModalMedia:y,openFeatureImage:b,seletectedImage:j,Controller:i.Qr,watch:I,useFieldArray:i.Dq,saveContentToDraft:E})})})]})}},93088:function(e,t,s){"use strict";s.d(t,{K:function(){return d}});var o=s(41531),r=s(57437),a=e=>(0,r.jsx)(o.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});a.displayName="StackItem";var i=s(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=s(1219),n=s(68973),u=s(2265),d=(0,n.G)((e,t)=>{let{isInline:s,direction:n,align:d,justify:c,spacing:p="0.5rem",wrap:m,children:_,divider:g,className:v,shouldWrapChildren:h,...f}=e,y=s?"row":null!=n?n:"column",x=(0,u.useMemo)(()=>(function(e){var t;let{spacing:s,direction:o}=e,r={column:{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>r[e],Array.isArray(o)?o.map(e=>null===e?null:t(e)):(0,i.Kn)(o)?Object.keys(o).reduce((e,s)=>(e[s]=t(o[s]),e),{}):null!=o?t(o):null)}})({spacing:p,direction:y}),[p,y]),b=!!g,k=!h&&!b,Y=(0,u.useMemo)(()=>{let e=(0,l.W)(_);return k?e:e.map((t,s)=>{let o=void 0!==t.key?t.key:s,i=s+1===e.length,l=(0,r.jsx)(a,{children:t},o),n=h?l:t;if(!b)return n;let d=(0,u.cloneElement)(g,{__css:x});return(0,r.jsxs)(u.Fragment,{children:[n,i?null:d]},o)})},[g,x,b,k,h,_]),S=(0,i.cx)("chakra-stack",v);return(0,r.jsx)(o.m.div,{ref:t,display:"flex",alignItems:d,justifyContent:c,flexDirection:y,flexWrap:m,gap:b?void 0:p,className:S,...f,children:Y})});d.displayName="Stack"}},function(e){e.O(0,[4565,7699,6051,9956,1779,7240,5706,296,9701,5878,605,3015,1760,9799,3464,9355,1612,5506,2868,316,3737,1721,197,2971,2117,1744],function(){return e(e.s=76086)}),_N_E=e.O()}]);