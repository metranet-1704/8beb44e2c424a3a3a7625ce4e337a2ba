(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2096],{76086:function(e,s,t){Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.bind(t,81523)),Promise.resolve().then(t.bind(t,70049)),Promise.resolve().then(t.bind(t,77566))},77566:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Q}});var l=t(57437),a=t(2265),i=t(78796),r=t(29501),o=t(71096),n=t.n(o),d=t(80605),c=t(89427),u=t(19383),h=t(48860),p=t(34096),g=t(49270),m=t(27924),x=t(16152),f=t(25810),j=t(10883),v=t(20517),b=t(61273),_=t(85330),y=t(61721),k=t(25957);function S(e){let{isOpen:s,register:t,onClose:a}=e,{setIsModalMedia:i}=(0,k.G)();return(0,l.jsx)(_.h,{children:(0,l.jsxs)(u.u_,{isOpen:s,onClose:()=>{a(),i()},scrollBehavior:"inside",children:[(0,l.jsx)(h.Z,{}),(0,l.jsxs)(p.h,{width:{base:"full",md:"80%"},height:{base:"full",md:"80%"},maxWidth:"none",children:[(0,l.jsx)(g.x,{children:"Media Gallery"}),(0,l.jsx)(m.o,{}),(0,l.jsx)(x.f,{className:"",children:(0,l.jsx)(y.default,{})})]})]})})}var C=t(33145);t(98983);var I=t(33289);function w(e){let{isOpen:s,register:t,onClose:i,setValue:r}=e,{isOpenMedia:o,openMedia:n,closeMedia:d,focalPoint:c,seletectedImage:_,setSeletectedImage:y,setFocalPoint:w}=(0,k.G)();return a.useEffect(()=>{r("feature_img",_,{shouldValidate:!0})},[_,r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.u_,{size:"xl",isOpen:s,onClose:i,scrollBehavior:"inside",children:[(0,l.jsx)(h.Z,{}),(0,l.jsxs)(p.h,{width:{base:"full",md:"70%"},height:{base:"full",md:"80%"},maxWidth:"none",children:[(0,l.jsx)(g.x,{children:"Set Feature Image"}),(0,l.jsx)(m.o,{}),(0,l.jsx)(x.f,{children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"grid grid-rows-1 lg:grid-cols-10",children:[(0,l.jsx)(f.z,{leftIcon:(0,l.jsx)(b.K7z,{}),colorScheme:"blue",variant:"outline",onClick:()=>{n(),i()},className:"col-span-2",children:"From Gallery"}),(0,l.jsx)("p",{className:"col-span-2 text-xl font-semibold text-center",children:"or From URL"}),(0,l.jsx)(j.I,{placeholder:"Input External Image URL",className:"col-span-6",value:_,...t("feature_img"),onChange:e=>y(e.target.value)})]}),(0,l.jsx)("div",{className:"grid grid-rows-1 gap-4 my-5 lg:grid-cols-5",children:_&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"col-span-4",children:[(0,l.jsx)(I.U,{src:_,className:"!w-2/3 !h-full mx-auto",onChange:e=>{w(e)},classes:{image:"rounded-md"}}),(0,l.jsx)("p",{className:"mt-1 text-xs italic text-center",children:"drag point to adjust thumbnail"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(C.default,{src:_,className:"object-none rounded-md mx-auto w-[200px] h-[120px]",alt:"Selected",width:200,height:120,style:{objectPosition:"".concat(null==c?void 0:c.x,"% ").concat(null==c?void 0:c.y,"%")}}),(0,l.jsx)("p",{className:"mt-2 text-sm font-semibold",children:"Thumbnail"})]})]})}),(0,l.jsx)(j.I,{placeholder:"Caption Foto",...t("post_images_title",{required:!0}),my:5})]})}),(0,l.jsx)(v.m,{textAlign:"center",children:(0,l.jsx)(f.z,{mx:"auto",colorScheme:"red",onClick:i,children:"Submit"})})]})]}),(0,l.jsx)(S,{register:t,isOpen:o,onClose:d})]})}var N=t(99376),z=t(95171),O=t(40748),E=t(32191),P=t(70996),F=t(34394),V=t(4964),q=t(8938),D=t(26262),T=t(90316),B=t(97244),M=t(42709),A=t(58055),Y=t(24687),L=t(69340),G=t(72760),X=t(95944),Z=t.n(X),J=t(82230),U=e=>{let{onSelectArticle:s,theme:t,isOpen:i,onClose:r}=e,[o,n]=a.useState([]),[j,b]=a.useState(!1),[_,y]=a.useState(""),[k,S]=a.useState(null),{data:C}=(0,d.useSession)(),I=async e=>{var s,t,l;b(!0);let a=await (0,c.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/articles/"),{page:1,limit:100,status:"publish",search:e},{accept:"application/json",Authorization:"Bearer ".concat(null==C?void 0:null===(s=C.user)||void 0===s?void 0:s.access_token)});(null==a?void 0:a.status)==200&&n(null==a?void 0:null===(l=a.data)||void 0===l?void 0:null===(t=l.data)||void 0===t?void 0:t.articles.map(e=>({label:e.post_title,value:e.post_title,post_slug:e.post_slug,featured_image:e.feature_img}))),b(!1)};return a.useEffect(()=>{let e=setTimeout(()=>{_&&I(_)},500);return()=>{clearTimeout(e)}},[_]),(0,l.jsxs)(u.u_,{size:"xl",isOpen:i,onClose:r,children:[(0,l.jsx)(h.Z,{}),(0,l.jsxs)(p.h,{children:[(0,l.jsx)(g.x,{children:"Baca Juga"}),(0,l.jsx)(m.o,{}),(0,l.jsx)(x.f,{children:(0,l.jsx)(J.ZP,{styles:{control:e=>({...e,backgroundColor:"dark"===t?"#2D3748":"#fff",color:"dark"===t?"#fff":"#000"}),menu:e=>({...e,backgroundColor:"dark"===t?"#2D3748":"#fff"}),singleValue:e=>({...e,color:"dark"===t?"#fff":"#000"}),multiValue:e=>({...e,backgroundColor:"dark"===t?"#4A5568":"#E2E8F0",color:"dark"===t?"#fff":"#000"}),multiValueLabel:e=>({...e,color:"dark"===t?"#fff":"#000"})},options:o,isLoading:j,placeholder:"Search title...",onChange:e=>S(e),onInputChange:e=>{y(e)}})}),(0,l.jsx)(v.m,{children:(0,l.jsx)(f.z,{colorScheme:"blue",onClick:()=>{s(k),r()},children:"Select"})})]})]})};function H(e){let{theme:s,setValue:t,trigger:i}=e,[r,o]=a.useState(""),[n,d]=a.useState(!1),[c,u]=a.useState(null),{isOpen:h,onOpen:p,onClose:g}=(0,L.q)(),m=a.useRef(null),x=a.useMemo(()=>({events:{afterInit:e=>{m.current=e}},toolbarSticky:!0,toolbarStickyOffset:350,readonly:!1,height:800,theme:"dark"==s?"jodit_dark":"default",hidePoweredByJodit:!0,showCharsCounter:!0,showWordsCounter:!0,placeholder:"Start writing here...",aiAssistant:!1,buttons:["undo","redo","|","bold","italic","underline","strikethrough","|","left","center","right","justify","|","ul","ol","fontsize","indent","outdent","|","table","link","file","image","video","|","brush","source","preview","|"],extraButtons:[{name:"Baca Juga",exec:()=>{u(m.current.selection.save()),p()},tooltip:"Insert related article"}],disablePlugins:["about","add-new-line","ai-assistant","backspace","class-span","clipboard","copyformat","delete-command","dtd","enter","focus","font","format-block","hotkeys","hr","inline-popup","key-arrow-outside","limit","mobile","paste","paste-storage","powered-by-jodit","redo-undo","resize-cells","resize-handler","resizer","select","speech-recognize","spellcheck","symbols","xpath","wrap-nodes"],uploader:{url:"http://118.97.48.172:8048/?action=fileUpload",insertImageAsBase64URI:!0,imagesExtensions:[".jpg",".png",".gif"],data:{},format:"json",headers:{},prepareData:e=>e,isSuccess:e=>200===e.status,getMessage:e=>e.message,process:e=>e.files,defaultHandlerSuccess:(e,s,t,l)=>{t.getFiles().forEach(e=>{e.isImage()&&l(e)})}},filebrowser:{ajax:{url:"http://118.97.48.172:8048/"},height:580,pagination:{pageSize:20}}}),[s,p]);return a.useEffect(()=>{d(!0)},[]),(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(U,{theme:s,isOpen:h,onClose:g,onSelectArticle:e=>{let s=m.current;if(s&&s.selection){let t='\n                <div class="p-0 px-5 pb-4 border-l-4 border-red-600 mb-4 bg-transparent clear-both">\n                    <h4 class="font-bold text-lg mb-4 text-red-600">Baca Juga :</h4>\n                    <div class="float-left">\n                        <a href="https://uzone.id/'.concat(e.post_slug,'" target="_blank">\n                            <img src="').concat(e.featured_image,'" alt="Images" title="').concat(e.label,'" class="w-30 h-20 object-cover rounded-lg">\n                        </a>\n                    </div>\n                    <div class="relative ml-40">\n                        <h5 class="font-bold text-base mt-5 underline">\n                            <a href="https://uzone.id/').concat(e.post_slug,'" target="_blank">').concat(e.label,'</a>\n                        </h5>\n                    </div>\n                    <div class="clear-both h-0"></div>\n                </div>\n                ');s.selection.restore(c),s.selection.insertHTML(t)}}}),(0,l.jsx)(Z(),{value:r,config:x,onBlur:e=>{o(e),i("post_content"),t("post_content",e,{shouldValidate:!0})}})]}):(0,l.jsx)(G.$,{size:"lg",colorScheme:"red"})})}function R(e){var s;let{errors:t,control:i,theme:r,Controller:o,setValue:n,session:d,trigger:u}=e,[h,p]=a.useState([]),g={control:e=>({...e,backgroundColor:"dark"===r?"#2D3748":"#fff",color:"dark"===r?"#fff":"#000"}),menu:e=>({...e,backgroundColor:"dark"===r?"#2D3748":"#fff"}),singleValue:e=>({...e,color:"dark"===r?"#fff":"#000"}),multiValue:e=>({...e,backgroundColor:"dark"===r?"#4A5568":"#E2E8F0",color:"dark"===r?"#fff":"#000"}),multiValueLabel:e=>({...e,color:"dark"===r?"#fff":"#000"})},m=async e=>{var s,t,l;let a=await (0,c.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/tags/"),{page:1,limit:100,search:e},{accept:"application/json",Authorization:"Bearer ".concat(null==d?void 0:null===(s=d.user)||void 0===s?void 0:s.access_token)});(null==a?void 0:a.status)==200&&p(null==a?void 0:null===(l=a.data)||void 0===l?void 0:null===(t=l.data)||void 0===t?void 0:t.tags.map(e=>({label:e.name,value:e.id})))};return(0,l.jsxs)(z.NI,{isInvalid:!!t.post_tag,mb:4,children:[(0,l.jsx)(O.l,{children:"Tag"}),(0,l.jsx)(o,{name:"post_tag",control:i,defaultValue:[],render:e=>{let{field:s}=e;return(0,l.jsx)(J.ZP,{...s,isMulti:!0,styles:g,options:h,placeholder:"Select tags...",onChange:e=>{u("post_tag"),n("post_tag",e)},onInputChange:e=>{e&&m(e)},value:s.value})}}),(0,l.jsx)("p",{className:"text-sm text-red-500",children:(null===(s=t.post_tag)||void 0===s?void 0:s.message)&&"Tag is required and must be at least 1 tag."})]})}var W=t(25922);function K(e){var s,t,a,i;let{register:r,errors:o,session:n,dataCategory:d,control:c,setValue:u,Controller:h,trigger:p,isLoading:g,setIsModalMedia:m,seletectedImage:x,openFeatureImage:v}=e,{theme:b}=(0,W.F)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"col-span-2 p-4 bg-white border border-gray-200 rounded-lg shadow-sm lg:mr-3 dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,l.jsxs)(z.NI,{isInvalid:!!o.post_title,mb:4,children:[(0,l.jsx)(O.l,{children:"Title"}),(0,l.jsx)(j.I,{placeholder:"Original Title",...r("post_title",{required:"Please input the title!"})})]}),(0,l.jsxs)(z.NI,{isInvalid:!!o.post_excerp,mb:4,children:[(0,l.jsx)(O.l,{children:"Article Description"}),(0,l.jsx)(E.g,{placeholder:"Summary Article",rows:4,maxLength:160,...r("post_excerp",{required:"Please input summary!"})}),(0,l.jsx)(P.xu,{fontSize:"sm",children:"* Max 160 characters"})]}),(0,l.jsxs)(z.NI,{isInvalid:!!o.post_content,mb:4,children:[(0,l.jsx)(O.l,{children:"Content"}),(0,l.jsx)(H,{trigger:p,theme:b,setValue:u}),(0,l.jsx)(F.J1,{children:(null===(s=o.post_content)||void 0===s?void 0:s.message)&&"string"==typeof o.post_content.message&&o.post_content.message})]})]}),(0,l.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,l.jsxs)(z.NI,{isInvalid:!!o.post_slug,mb:4,children:[(0,l.jsx)(O.l,{children:"Slug"}),(0,l.jsx)(j.I,{readOnly:!0,placeholder:"Slug",...r("post_slug",{required:"Please input slug!"})})]}),(0,l.jsxs)(z.NI,{isInvalid:!!o.post_type,mb:4,children:[(0,l.jsx)(O.l,{children:"Type"}),(0,l.jsxs)(V.P,{...r("post_type",{required:"Please input the type!"}),children:[(0,l.jsx)("option",{value:"1",children:"Default"}),(0,l.jsx)("option",{value:"2",children:"Video"}),(0,l.jsx)("option",{value:"3",children:"Gallery"})]})]}),(0,l.jsxs)(z.NI,{isInvalid:!!o.post_category,mb:4,children:[(0,l.jsx)(O.l,{children:"Category"}),(0,l.jsx)("div",{className:"border border-gray-200 p-2 h-[250px] overflow-y-auto",children:d.length>0?(0,l.jsx)(q.c,{colorScheme:"red",onChange:e=>{let s=d.filter(s=>e.includes(s.id.toString())),t=s.map(e=>e.name),l=s.map(e=>e.id.toString());u("post_category",t,{shouldValidate:!0}),u("post_category_id",l,{shouldValidate:!0})},children:(0,l.jsx)(D.g,{align:"start",children:d.map(e=>(0,l.jsx)(T.X,{value:e.id.toString(),children:e.name},e.id))})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(B.O,{height:3}),(0,l.jsx)(B.O,{height:3,my:2}),(0,l.jsx)(B.O,{height:3,my:2}),(0,l.jsx)(B.O,{height:3,my:2}),(0,l.jsx)(B.O,{height:3,my:2}),(0,l.jsx)(B.O,{height:3,my:2}),(0,l.jsx)(B.O,{height:3})]})}),(0,l.jsx)(F.J1,{children:(null===(t=o.post_category)||void 0===t?void 0:t.message)&&"string"==typeof o.post_category.message&&o.post_category.message})]}),(0,l.jsxs)(z.NI,{isInvalid:!!o.publishOn,mb:4,children:[(0,l.jsx)(O.l,{children:"Publish On"}),(0,l.jsx)("div",{className:"border border-gray-200 p-2 h-[270px] overflow-y-auto",children:(0,l.jsx)(q.c,{colorScheme:"red",onChange:e=>u("publishOn",e,{shouldValidate:!0}),children:(0,l.jsxs)(D.g,{align:"start",children:[(0,l.jsx)(T.X,{value:"uzone",children:"Uzone"}),(0,l.jsx)(T.X,{value:"internetPositif",children:"Internet Positif"}),(0,l.jsx)(T.X,{value:"mercusuar",children:"Mercusuar"}),(0,l.jsx)(T.X,{value:"wifiID",children:"Wifi ID"}),(0,l.jsx)(T.X,{value:"internetFiltering",children:"Internet Filtering"}),(0,l.jsx)(T.X,{value:"rcti",children:"RCTI +"}),(0,l.jsx)(T.X,{value:"diarium",children:"Diarium"}),(0,l.jsx)(T.X,{value:"cazbond",children:"Cazbond"})]})})}),(0,l.jsx)(F.J1,{children:(null===(a=o.publishOn)||void 0===a?void 0:a.message)&&"string"==typeof o.publishOn.message&&o.publishOn.message})]}),(0,l.jsx)(R,{session:n,control:c,errors:o,theme:b,Controller:h,setValue:u,trigger:p}),(0,l.jsxs)(z.NI,{isInvalid:!!o.post_status,mb:4,children:[(0,l.jsx)(O.l,{children:"Status"}),(0,l.jsx)(M.E,{colorScheme:"red",...r("post_status"),onChange:e=>u("post_status",e),defaultValue:"draft",children:(0,l.jsxs)(A.U,{spacing:"24px",children:[(0,l.jsx)(Y.Y,{value:"draft",children:"Draft"}),(0,l.jsx)(Y.Y,{value:"schedule",children:"Schedule"}),(0,l.jsx)(Y.Y,{value:"publish",children:"Publish"})]})}),(0,l.jsx)(F.J1,{children:(null===(i=o.post_status)||void 0===i?void 0:i.message)&&"string"==typeof o.post_status.message&&o.post_status.message})]}),(0,l.jsxs)("div",{className:"mb-4 space-y-4",children:[(0,l.jsx)(f.z,{className:"w-full",onClick:()=>{m(),v()},children:"Set Feature Image"}),x&&(0,l.jsx)(C.default,{src:x,className:"w-full rounded-md",alt:"featured image",width:200,height:120}),(0,l.jsx)(f.z,{colorScheme:"red",type:"submit",className:"w-full",isLoading:g,children:"Publish"})]})]})]})}function Q(){let{data:e}=(0,d.useSession)(),[s,t]=a.useState([]),[o,u]=a.useState(!1),{setIsModalMedia:h,isOpenFeatureImage:p,openFeatureImage:g,closeFeatureImage:m,setSeletectedImage:x,closeMedia:f,seletectedImage:j,focalPoint:v}=(0,k.G)(),b=(0,N.useRouter)(),{register:_,handleSubmit:y,formState:{errors:S},setValue:C,control:I,trigger:z}=(0,r.cI)(),O=(0,r.qo)({control:I,name:"post_title"}),E=(0,i.p)(),P=async s=>{var t,l;u(!0),s.post_date=n()().format("YYYY-MM-DD HH:mm:ss"),s.post_publish_date="1970-01-01 23:59:59",s.post_original_date=n()().format("YYYY-MM-DD HH:mm:ss"),s.post_status=[s.post_status],s.post_author=e.user.username,s.post_tag=s.post_tag.map(e=>e.label),s.is_premium=0,s.partner_id=1,s.post_video_url="",s.post_gallery="",s.post_modified="",s.feat_img_size={small:{x:null==v?void 0:v.x.toString(),y:null==v?void 0:v.y.toString()},medium:{x:"",y:""},full:{x:"",y:""}},s.post_publisher=[""],s.post_editor=0,s.post_source=0,s.post_canonical_link="",s.is_ghost=0,s.post_enclosure_link="",s.post_title_masking="";let a=await (0,c.Z)("POST","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/articles/"),s,{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.access_token)});(null==a?void 0:a.status)==201?(u(!1),E({title:"Success",description:"Data has been saved",status:"success",duration:6e3,isClosable:!0,position:"top"}),"publish"==s.post_status?b.push("/dashboard/post/list"):b.push("/dashboard/post/draft")):(u(!1),E({title:"Error",description:null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.message,status:"error",duration:6e3,position:"top",isClosable:!0}))};return _("post_content",{required:"Content is required"}),_("post_tag",{required:"Tag is required"}),_("post_category",{required:"Category is required"}),_("publishOn",{required:"publish on is required"}),a.useEffect(()=>{O&&C("post_slug",O.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,""))},[O,C]),a.useEffect(()=>{let s=async()=>{var s,l;let a=await (0,c.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/article-categories/"),{page:1,limit:100},{accept:"application/json",Authorization:"Bearer ".concat(null==e?void 0:null===(s=e.user)||void 0===s?void 0:s.access_token)});(null==a?void 0:a.status)==200&&t(null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.data)};e&&s()},[e]),a.useEffect(()=>{m(),x(""),f()},[]),(0,l.jsxs)("div",{className:"px-4 pt-6",children:[(0,l.jsx)(w,{register:_,isOpen:p,onClose:m,setValue:C}),(0,l.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,l.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"New Post"})}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)("form",{onSubmit:y(P),autoComplete:"off",className:"grid grid-cols-1 gap-2 lg:grid-cols-3",children:(0,l.jsx)(K,{register:_,errors:S,session:e,dataCategory:s,control:I,trigger:z,setValue:C,isLoading:o,setIsModalMedia:h,openFeatureImage:g,seletectedImage:j,Controller:r.Qr})})})]})}}},function(e){e.O(0,[4565,7699,6051,5706,9956,1779,7240,296,5878,1445,1760,9799,6434,3464,9355,7730,7676,5691,629,316,3195,1721,2971,2117,1744],function(){return e(e.s=76086)}),_N_E=e.O()}]);