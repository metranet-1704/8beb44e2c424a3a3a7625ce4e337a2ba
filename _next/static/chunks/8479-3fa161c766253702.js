"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8479],{76725:function(e,s,l){l.d(s,{Z:function(){return R}});var t=l(57437),a=l(2265),r=l(95171),i=l(40748),n=l(10883),o=l(32191),d=l(70996),c=l(34394),u=l(4964),h=l(25810),p=l(8938),m=l(26262),g=l(90316),x=l(22811),j=l(42709),v=l(58055),f=l(24687),b=l(69340),_=l(72760),y=l(95944),k=l.n(y),C=l(19383),w=l(48860),I=l(34096),N=l(49270),S=l(27924),z=l(16152),X=l(20517),P=l(82230),V=l(80605),E=l(89427),T=e=>{let{onSelectArticle:s,theme:l,isOpen:r,onClose:i}=e,[n,o]=a.useState([]),[d,c]=a.useState(!1),[u,p]=a.useState(""),[m,g]=a.useState(null),{data:x}=(0,V.useSession)(),j=async e=>{var s,l,t;c(!0);let a=await (0,E.Z)("GET","".concat("http://180.250.66.130:3037/","api/v1/articles/"),{page:1,limit:100,status:"publish",search:e},{accept:"application/json",Authorization:"Bearer ".concat(null==x?void 0:null===(s=x.user)||void 0===s?void 0:s.access_token)});(null==a?void 0:a.status)==200&&o(null==a?void 0:null===(t=a.data)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:l.articles.map(e=>({label:e.post_title,value:e.post_title,post_slug:e.post_slug,featured_image:e.feature_img}))),c(!1)};return a.useEffect(()=>{let e=setTimeout(()=>{u&&j(u)},500);return()=>{clearTimeout(e)}},[u]),(0,t.jsxs)(C.u_,{size:"xl",isOpen:r,onClose:i,children:[(0,t.jsx)(w.Z,{}),(0,t.jsxs)(I.h,{children:[(0,t.jsx)(N.x,{children:"Baca Juga"}),(0,t.jsx)(S.o,{}),(0,t.jsx)(z.f,{children:(0,t.jsx)(P.ZP,{styles:{control:e=>({...e,backgroundColor:"dark"===l?"#2D3748":"#fff",color:"dark"===l?"#fff":"#000"}),menu:e=>({...e,backgroundColor:"dark"===l?"#2D3748":"#fff"}),singleValue:e=>({...e,color:"dark"===l?"#fff":"#000"}),multiValue:e=>({...e,backgroundColor:"dark"===l?"#4A5568":"#E2E8F0",color:"dark"===l?"#fff":"#000"}),multiValueLabel:e=>({...e,color:"dark"===l?"#fff":"#000"})},options:n,isLoading:d,placeholder:"Search title...",onChange:e=>g(e),onInputChange:e=>{p(e)}})}),(0,t.jsx)(X.m,{children:(0,t.jsx)(h.z,{colorScheme:"blue",onClick:()=>{s(m),i()},children:"Select"})})]})]})},F=l(83930);function L(e){let{theme:s,setValue:l,trigger:r}=e,[i,n]=a.useState(""),[o,d]=a.useState(!1),[c,u]=a.useState(null),{isOpen:h,onOpen:p,onClose:m}=(0,b.q)(),g=a.useRef(null),{dataPost:x}=(0,F.k)(),j=a.useMemo(()=>({events:{afterInit:e=>{g.current=e}},toolbarSticky:!0,toolbarStickyOffset:350,readonly:!1,height:800,theme:"dark"==s?"jodit_dark":"default",hidePoweredByJodit:!0,showCharsCounter:!0,showWordsCounter:!0,placeholder:"Start writing here...",aiAssistant:!1,buttons:["undo","redo","|","bold","italic","underline","strikethrough","|","left","center","right","justify","|","ul","ol","fontsize","indent","outdent","|","table","link","image","video","|","brush","source","preview","|"],extraButtons:[{name:"Baca Juga",exec:()=>{u(g.current.selection.save()),p()},tooltip:"Insert related article"}],disablePlugins:["about","add-new-line","ai-assistant","backspace","class-span","clipboard","copyformat","delete-command","dtd","enter","focus","font","format-block","hotkeys","hr","inline-popup","key-arrow-outside","limit","mobile","paste","paste-storage","powered-by-jodit","redo-undo","select","speech-recognize","spellcheck","symbols","xpath","wrap-nodes"],image:{tabs:["browse","url"]},uploader:{url:"http://118.97.48.172:8048/?action=fileUpload"},filebrowser:{ajax:{url:"http://118.97.48.172:8048/"},height:580}}),[s,p]);return a.useEffect(()=>{d(!0),x?n(x.post_content):n("")},[x]),(0,t.jsx)(t.Fragment,{children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T,{theme:s,isOpen:h,onClose:m,onSelectArticle:e=>{let s=g.current;if(s&&s.selection){let l='\n                <div class="p-0 px-5 pb-4 border-l-4 border-red-600 mb-4 bg-transparent clear-both">\n                    <h4 class="font-bold text-lg mb-4 text-red-600">Baca Juga :</h4>\n                    <div class="float-left">\n                        <a href="https://uzone.id/'.concat(e.post_slug,'" target="_blank">\n                            <img src="').concat(e.featured_image,'" alt="Images" title="').concat(e.label,'" class="w-28 h-20  object-cover rounded-lg">\n                        </a>\n                    </div>\n                    <div class="relative ml-32">\n                        <h5 class="font-bold text-base mt-5 underline">\n                            <a href="https://uzone.id/').concat(e.post_slug,'" target="_blank">').concat(e.label,'</a>\n                        </h5>\n                    </div>\n                    <div class="clear-both h-0"></div>\n                </div>\n                ');s.selection.restore(c),s.selection.insertHTML(l)}}}),(0,t.jsx)(k(),{value:i,config:j,onBlur:e=>{n(e),r("post_content"),l("post_content",e,{shouldValidate:!0})}})]}):(0,t.jsx)(_.$,{size:"lg",colorScheme:"red"})})}function D(e){var s;let{errors:l,control:n,theme:o,Controller:d,setValue:c,session:u,trigger:h}=e,{dataPost:p}=(0,F.k)(),[m,g]=a.useState([]),[x,j]=a.useState([]),[v,f]=a.useState(""),b={control:e=>({...e,backgroundColor:"dark"===o?"#2D3748":"#fff",color:"dark"===o?"#fff":"#000"}),menu:e=>({...e,backgroundColor:"dark"===o?"#2D3748":"#fff"}),singleValue:e=>({...e,color:"dark"===o?"#fff":"#000"}),multiValue:e=>({...e,backgroundColor:"dark"===o?"#4A5568":"#E2E8F0",color:"dark"===o?"#fff":"#000"}),multiValueLabel:e=>({...e,color:"dark"===o?"#fff":"#000"})},_=e=>({label:e,value:e.toLowerCase().replace(/\W/g,"-")}),y=async e=>{var s;let l=await (0,E.Z)("GET","".concat("http://180.250.66.130:3037/","api/v1/tags/"),{page:1,limit:100,search:e},{accept:"application/json",Authorization:"Bearer ".concat(null==u?void 0:null===(s=u.user)||void 0===s?void 0:s.access_token)});(null==l?void 0:l.status)===200&&g(l.data.data.tags.map(e=>({label:e.name,value:e.name})))},k=e=>{if(v&&(","===e.key||"Enter"===e.key)){if(e.preventDefault(),!x.find(e=>e.label.toLowerCase()===v.toLowerCase())){let e=[...x,_(v)];j(e),c("post_tag",e,{shouldValidate:!0}),h("post_tag")}f("")}};return a.useEffect(()=>{if(p){var e;let s=null===(e=p.post_tag)||void 0===e?void 0:e.map(e=>({label:e,value:e}));g(s||[]),j(s||[]),c("post_tag",s)}else g([]),j([])},[p]),(0,t.jsxs)(r.NI,{isInvalid:!!l.post_tag,mb:4,children:[(0,t.jsx)(i.l,{children:"Tag"}),(0,t.jsx)(d,{name:"post_tag",control:n,render:e=>{let{field:{onChange:s,value:l,...a}}=e;return(0,t.jsx)(P.ZP,{...a,isMulti:!0,styles:b,options:m,placeholder:"Select or type tags...",onChange:e=>{let l=e||[];j(l),s(l),h("post_tag")},onInputChange:(e,s)=>{let{action:l}=s;"input-change"===l&&(f(e),e&&y(e))},onKeyDown:k,inputValue:v,value:x,isClearable:!0,menuPlacement:"auto"})}}),(0,t.jsx)("p",{className:"text-sm text-red-500",children:(null===(s=l.post_tag)||void 0===s?void 0:s.message)&&"Tag is required and must be at least 1 tag."})]})}var G=l(33145),A=l(25922),B=l(61273),O=l(25957);function R(e){var s,l,b,_,y;let{register:k,errors:C,session:w,control:I,setValue:N,Controller:S,trigger:z,isLoading:X,setIsModalMedia:P,seletectedImage:V,openFeatureImage:E,watch:T,useFieldArray:F}=e,{theme:R}=(0,A.F)(),U=T("post_type"),J=T("post_gallery"),{openMedia:Z,onOpenGallery:q,gallery:M,setGallery:W}=(0,O.G)(),{fields:Y,remove:K}=F({control:I,name:"post_gallery"});return a.useEffect(()=>{Array.isArray(M)&&M.length>0&&N("post_gallery",M.map((e,s)=>{var l;return{img:e.img,caption:(null==J?void 0:null===(l=J[s])||void 0===l?void 0:l.caption)||""}}),{shouldValidate:!0})},[M]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"col-span-2 p-4 bg-white border border-gray-200 rounded-lg shadow-sm lg:mr-3 dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,t.jsxs)(r.NI,{isInvalid:!!C.post_title,mb:4,children:[(0,t.jsx)(i.l,{children:"Title"}),(0,t.jsx)(n.I,{placeholder:"Original Title",...k("post_title",{required:"Please input the title!"})})]}),(0,t.jsxs)(r.NI,{isInvalid:!!C.post_excerp,mb:4,children:[(0,t.jsx)(i.l,{children:"Article Description"}),(0,t.jsx)(o.g,{placeholder:"Summary Article",rows:4,maxLength:160,...k("post_excerp",{required:"Please input summary!"})}),(0,t.jsx)(d.xu,{fontSize:"xs",fontStyle:"italic",children:"* Max 160 characters"})]}),(0,t.jsxs)(r.NI,{isInvalid:!!C.post_content,mb:4,children:[(0,t.jsx)(i.l,{children:"Content"}),(0,t.jsx)(L,{trigger:z,theme:R,setValue:N}),(0,t.jsx)(c.J1,{children:(null===(s=C.post_content)||void 0===s?void 0:s.message)&&"string"==typeof C.post_content.message&&C.post_content.message})]})]}),(0,t.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,t.jsxs)(r.NI,{isInvalid:!!C.post_slug,mb:4,children:[(0,t.jsx)(i.l,{children:"Slug"}),(0,t.jsx)(n.I,{readOnly:!0,placeholder:"Slug",...k("post_slug",{required:"Please input slug!"})})]}),(0,t.jsxs)(r.NI,{isInvalid:!!C.post_type,mb:4,children:[(0,t.jsx)(i.l,{children:"Type"}),(0,t.jsxs)(u.P,{...k("post_type",{required:"Please input the type!"}),children:[(0,t.jsx)("option",{value:"1",children:"Default"}),(0,t.jsx)("option",{value:"2",children:"Video"}),(0,t.jsx)("option",{value:"3",children:"Gallery"})]})]}),"2"===U&&(0,t.jsxs)(r.NI,{isInvalid:!!C.post_video_url,mb:4,children:[(0,t.jsx)(i.l,{children:"Video URL"}),(0,t.jsx)(n.I,{type:"url",placeholder:"Video URL",...k("post_video_url",{required:"Please input video URL!"})})]}),"3"===U&&(0,t.jsx)(h.z,{leftIcon:(0,t.jsx)(B.K7z,{}),colorScheme:"teal",variant:"outline",onClick:()=>{Z(),q()},className:"my-3",children:"From Gallery"}),Y.map((e,s)=>(0,t.jsxs)("div",{className:"p-3 my-1 border rounded-lg shadow-sm",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,t.jsx)("div",{className:"relative aspect-video",children:(0,t.jsx)(G.default,{src:e.img,width:100,height:60,alt:"Gallery image ".concat(s+1),className:"object-cover w-full h-full rounded-sm"})}),(0,t.jsx)("div",{className:"space-y-4",children:(0,t.jsx)(o.g,{...k("post_gallery.".concat(s,".caption")),rows:3,placeholder:"Enter caption...",size:"sm",resize:"none"})})]}),(0,t.jsx)(h.z,{type:"button",onClick:()=>{K(s),W(J.filter((e,l)=>l!==s).map(e=>({img:e.img,caption:e.caption})))},colorScheme:"red",size:"sm",className:"w-full my-2",children:"Remove Image"})]},e.id)),(0,t.jsxs)(r.NI,{isInvalid:!!C.post_category,mb:4,children:[(0,t.jsx)(i.l,{children:"Category"}),(0,t.jsx)("div",{className:"border border-gray-200 p-2 h-[250px] overflow-y-auto",children:(0,t.jsx)(S,{name:"post_category_id",control:I,render:e=>{let{field:s}=e;return(0,t.jsx)(p.c,{...s,colorScheme:"red",onChange:e=>{N("post_category",e,{shouldValidate:!0}),s.onChange(e)},children:(0,t.jsxs)(m.g,{align:"start",children:[(0,t.jsx)(g.X,{value:"4",children:"Games"}),(0,t.jsx)(g.X,{value:"9",children:"Automotive"}),(0,t.jsx)(g.X,{value:"24",children:"Ramadan"}),(0,t.jsx)(g.X,{value:"27",children:"Startup"}),(0,t.jsx)(g.X,{value:"28",defaultChecked:!0,children:"Telco"}),(0,t.jsx)(g.X,{value:"29",children:"Gadget"}),(0,t.jsx)(g.X,{value:"30",children:"Digilife"}),(0,t.jsx)(g.X,{value:"32",children:"Talks"}),(0,t.jsx)(g.X,{value:"38",children:"Tips & Reco's"}),(0,t.jsx)(g.X,{value:"43",children:"Review"}),(0,t.jsx)(g.X,{value:"44",children:"Timeless"}),(0,t.jsx)(g.X,{value:"46",children:"Bremm Journey"}),(0,t.jsx)(g.X,{value:"47",children:"Govtech"}),(0,t.jsx)(x.i,{marginY:"5px"}),(0,t.jsx)(g.X,{value:"15",defaultChecked:!0,children:"Berita Pilihan"}),(0,t.jsx)(g.X,{value:"16",children:"Headline"})]})})}})}),(0,t.jsx)(c.J1,{children:(null===(l=C.post_category)||void 0===l?void 0:l.message)&&"string"==typeof C.post_category.message&&C.post_category.message})]}),(0,t.jsxs)(r.NI,{isInvalid:!!C.post_publisher,mb:4,children:[(0,t.jsx)(i.l,{children:"Publish On"}),(0,t.jsx)("div",{className:"border border-gray-200 p-2 h-[270px] overflow-y-auto",children:(0,t.jsx)(S,{name:"post_publisher",control:I,render:e=>{let{field:s}=e;return(0,t.jsx)(p.c,{...s,colorScheme:"red",onChange:e=>{N("post_category",e,{shouldValidate:!0}),s.onChange(e)},children:(0,t.jsxs)(m.g,{align:"start",children:[(0,t.jsx)(g.X,{value:"1",children:"Uzone"}),(0,t.jsx)(g.X,{value:"6",children:"Internet Positif"}),(0,t.jsx)(g.X,{value:"7",children:"Mercusuar"}),(0,t.jsx)(g.X,{value:"9",children:"Wifi ID"}),(0,t.jsx)(g.X,{value:"10",children:"Internet Filtering"}),(0,t.jsx)(g.X,{value:"22",children:"RCTI+"}),(0,t.jsx)(g.X,{value:"23",children:"Diarium"}),(0,t.jsx)(g.X,{value:"24",children:"Cazbond"})]})})}})}),(0,t.jsx)(c.J1,{children:(null===(b=C.post_publisher)||void 0===b?void 0:b.message)&&"string"==typeof C.post_publisher.message&&C.post_publisher.message})]}),(0,t.jsx)(D,{session:w,control:I,errors:C,theme:R,Controller:S,setValue:N,trigger:z}),(0,t.jsxs)(r.NI,{isInvalid:!!C.post_status,mb:4,children:[(0,t.jsx)(i.l,{children:"Status"}),(0,t.jsx)(S,{name:"post_status",control:I,rules:{required:"Please select the status!"},render:e=>{let{field:s}=e;return(0,t.jsx)(j.E,{...s,colorScheme:"red",onChange:e=>{s.onChange(e),N("post_status",e)},children:(0,t.jsxs)(v.U,{spacing:"24px",children:[(0,t.jsx)(f.Y,{value:"draft",children:"Draft"}),(0,t.jsx)(f.Y,{value:"schedule",children:"Schedule"}),(0,t.jsx)(f.Y,{value:"publish",children:"Publish"})]})})}}),(0,t.jsx)(c.J1,{children:(null===(_=C.post_status)||void 0===_?void 0:_.message)&&"string"==typeof C.post_status.message&&C.post_status.message})]}),(0,t.jsxs)("div",{className:"mb-4 space-y-4",children:[(0,t.jsx)(h.z,{className:"w-full",onClick:()=>{P(),E()},children:"Set Feature Image"}),(0,t.jsx)("p",{className:"text-sm italic text-red-500",children:(null===(y=C.feature_img)||void 0===y?void 0:y.message)&&"string"==typeof C.feature_img.message&&C.feature_img.message}),V&&(0,t.jsx)(G.default,{src:V,className:"w-full rounded-md",alt:"featured image",width:200,height:120}),(0,t.jsx)(h.z,{colorScheme:"red",type:"submit",className:"w-full",isLoading:X,children:"Publish"})]})]})]})}},71134:function(e,s,l){l.d(s,{Z:function(){return _}});var t=l(57437),a=l(2265),r=l(19383),i=l(48860),n=l(34096),o=l(49270),d=l(27924),c=l(16152),u=l(25810),h=l(10883),p=l(20517),m=l(61273),g=l(85330),x=l(61721),j=l(25957);function v(e){let{isOpen:s,onClose:l}=e,{setIsModalMedia:a}=(0,j.G)();return(0,t.jsx)(g.h,{children:(0,t.jsxs)(r.u_,{isOpen:s,onClose:()=>{l(),a()},scrollBehavior:"inside",children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)(n.h,{width:{base:"full",md:"80%"},height:{base:"full",md:"80%"},maxWidth:"none",children:[(0,t.jsx)(o.x,{children:"Media Gallery"}),(0,t.jsx)(d.o,{}),(0,t.jsx)(c.f,{className:"",children:(0,t.jsx)(x.default,{})})]})]})})}var f=l(33145);l(98983);var b=l(33289);function _(e){let{isOpen:s,register:l,onClose:g,setValue:x}=e,{isOpenMedia:_,openMedia:y,closeMedia:k,focalPoint:C,seletectedImage:w,setSeletectedImage:I,setFocalPoint:N}=(0,j.G)();return a.useEffect(()=>{w&&x("feature_img",w,{shouldValidate:!0})},[w,x]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.u_,{size:"xl",isOpen:s,onClose:g,scrollBehavior:"inside",children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)(n.h,{width:{base:"full",md:"70%"},height:{base:"full",md:"80%"},maxWidth:"none",children:[(0,t.jsx)(o.x,{children:"Set Feature Image"}),(0,t.jsx)(d.o,{}),(0,t.jsx)(c.f,{children:(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)("div",{className:"grid grid-rows-1 lg:grid-cols-10",children:[(0,t.jsx)(u.z,{leftIcon:(0,t.jsx)(m.K7z,{}),colorScheme:"blue",variant:"outline",onClick:()=>{y(),g()},className:"col-span-2",children:"From Gallery"}),(0,t.jsx)("p",{className:"col-span-2 text-xl font-semibold text-center",children:"or From URL"}),(0,t.jsx)(h.I,{placeholder:"Input External Image URL",className:"col-span-6",value:w,...l("feature_img"),onChange:e=>I(e.target.value)})]}),(0,t.jsx)("div",{className:"grid grid-rows-1 gap-4 my-5 lg:grid-cols-5",children:w&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"col-span-4",children:[(0,t.jsx)(b.U,{src:w,className:"!w-2/3 !h-full mx-auto",onChange:e=>{N(e)},classes:{image:"rounded-md"}}),(0,t.jsx)("p",{className:"mt-1 text-xs italic text-center",children:"drag point to adjust thumbnail"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(f.default,{src:w,className:"object-none rounded-md mx-auto w-[200px] h-[120px]",alt:"Selected",width:200,height:120,style:{objectPosition:"".concat(null==C?void 0:C.x,"% ").concat(null==C?void 0:C.y,"%")}}),(0,t.jsx)("p",{className:"mt-2 text-sm font-semibold",children:"Thumbnail"})]})]})}),(0,t.jsx)(h.I,{placeholder:"Caption Foto",...l("post_images_title"),my:5})]})}),(0,t.jsx)(p.m,{textAlign:"center",children:(0,t.jsx)(u.z,{mx:"auto",colorScheme:"red",onClick:g,children:"Submit"})})]})]}),(0,t.jsx)(v,{isOpen:_,onClose:k})]})}},83930:function(e,s,l){l.d(s,{k:function(){return t}});let t=(0,l(59625).Ue)()(e=>({dataPost:"",setDataPost:s=>e({dataPost:s})}))}}]);