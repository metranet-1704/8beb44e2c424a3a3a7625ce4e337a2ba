(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5571],{42480:function(){},79151:function(e,t,a){Promise.resolve().then(a.t.bind(a,65878,23)),Promise.resolve().then(a.bind(a,81523)),Promise.resolve().then(a.bind(a,70049)),Promise.resolve().then(a.bind(a,62110))},41966:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var s=a(57437),r=a(2265),l=a(78796),n=a(26553),i=a(48860),c=a(49270),o=a(16152),d=a(20517),u=a(25810),m=a(89427);function h(e){let{isOpen:t,setIsUpdate:a,session:h,idDelete:x,onClose:p}=e,g=r.useRef(null),f=(0,l.p)(),[b,y]=r.useState(!1),v=async()=>{var e;y(!0);let t=await (0,m.Z)("DELETE","".concat("https://mercury.uzone.id/","api/v1/articles/?article_id=").concat(x),{},{accept:"application/json",Authorization:"Bearer ".concat(null==h?void 0:null===(e=h.user)||void 0===e?void 0:e.access_token)});y(!1),200==t.status?(a(Math.random()),p(),f({title:"Success",description:t.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):f({title:"Error",description:t.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,s.jsx)(n.a,{isOpen:t,leastDestructiveRef:g,onClose:p,children:(0,s.jsx)(i.Z,{children:(0,s.jsxs)(n._,{children:[(0,s.jsx)(c.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,s.jsx)(o.f,{children:"Apakah anda yakin ingin menghapus artikel ini?"}),(0,s.jsxs)(d.m,{children:[(0,s.jsx)(u.z,{ref:g,onClick:p,children:"Cancel"}),(0,s.jsx)(u.z,{colorScheme:"red",onClick:()=>v(),isLoading:b,ml:3,children:"Delete"})]})]})})})}},62110:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var s=a(57437),r=a(2265),l=a(71594),n=a(24525),i=a(69340),c=a(28082),o=a(58055),d=a(60187),u=a(25730),m=a(307),h=a(67776),x=a(89427),p=a(71096),g=a.n(p),f=a(80605),b=a(99376),y=a(25103),v=a.n(y),j=a(41966),N=a(43118);function w(e){let{search:t,startDate:a,endDate:p,isUpdate:y,setIsUpdate:w,typePost:_}=e,C=(0,b.useRouter)(),[k,S]=r.useState([]),[D,E]=r.useState(!0),[z,P]=r.useState(0),[M,T]=r.useState(0),[L,I]=r.useState(0),{data:A}=(0,f.useSession)(),{isOpen:Y,onOpen:G,onClose:R}=(0,i.q)(),V=[{header:"Title",accessorKey:"post_title",cell:e=>{let{row:t}=e,{post_title:a,post_id:r}=t.original;return(0,s.jsx)("button",{className:"w-full text-left text-blue-500 hover:text-blue-600 hover:underline hover:font-semibold",dangerouslySetInnerHTML:{__html:a},onClick:()=>C.push("/dashboard/post/edit?aa=".concat((0,N.P)(r))),"aria-label":"Edit ".concat(a)})}},{header:"Status",accessorKey:"post_status",cell:e=>{let{row:t}=e,{post_status:a}=t.original,r="blue";return"publish"===a?r="green":"draft"===a?r="cyan":"trash"===a?r="red":"scheduled"===a&&(r="orange"),(0,s.jsx)(c.Vp,{size:"sm",colorScheme:r,children:a})}},{header:"Category",accessorKey:"post_category",cell:e=>{let{row:t}=e,{post_category:a}=t.original;return a.map(e=>(0,s.jsx)(c.Vp,{m:1,size:"sm",colorScheme:"purple",children:e},e))}},{header:"Tags",accessorKey:"post_tag",cell:e=>{let{row:t}=e,{post_tag:a}=t.original;return a.map(e=>(0,s.jsx)(c.Vp,{m:1,size:"sm",colorScheme:"teal",children:e},e))}},{header:"Author",accessorKey:"post_author"},{header:"View Count",accessorKey:"post_count_data",cell:e=>{var t,a;let{row:s}=e;return s.original.post_count_data&&s.original.post_count_data.article_count>0?null===(a=s.original.post_count_data)||void 0===a?void 0:null===(t=a.article_count)||void 0===t?void 0:t.toLocaleString():0}},{header:"Publish Date",accessorKey:"post_publish_date",cell:e=>{let{row:t}=e;return g()(t.original.post_publish_date).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:e=>{let{row:t}=e,{post_id:a}=t.original;return(0,s.jsxs)(o.U,{spacing:"1",children:[(0,s.jsx)(d.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,s.jsx)(u.h,{size:"sm",icon:(0,s.jsx)(h.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>C.push("/dashboard/post/edit?aa=".concat((0,N.P)(a)))})}),(0,s.jsx)(d.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,s.jsx)(u.h,{size:"sm",icon:(0,s.jsx)(h.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{I(a),G()}})})]})}}],O=(0,l.b7)({data:k,columns:V,getCoreRowModel:(0,n.sC)(),manualPagination:!0,pageCount:Math.ceil(z/10)});return r.useEffect(()=>{let e=async()=>{var e;E(!0);let s=await (0,x.Z)("GET","".concat("https://mercury.uzone.id/","api/v1/articles/"),{page:M+1,limit:10,search:t,startdate:g()(a).format("YYYY-MM-DD"),enddate:g()(p).format("YYYY-MM-DD"),status:"publish",type:_},{accept:"application/json",Authorization:"Bearer ".concat(null==A?void 0:null===(e=A.user)||void 0===e?void 0:e.access_token)});E(!1),200===s.status&&(S(s.data.data.articles),P(s.data.data.total_articles))};A&&e()},[y,A,t,M]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Z,{setIsUpdate:w,session:A,isOpen:Y,idDelete:L,onClose:R}),(0,s.jsx)("div",{className:"overflow-x-auto border border-gray-200 rounded-lg shadow-md",children:(0,s.jsxs)("table",{className:"min-w-full text-xs bg-white border border-gray-200 divide-y divide-gray-200 dark:bg-gray-700",children:[(0,s.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:O.getHeaderGroups().map(e=>(0,s.jsx)("tr",{className:"w-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,a;return(0,s.jsx)("th",{className:"max-w-lg p-2",children:(0,s.jsx)("div",{className:"".concat("Title"!==e.column.columnDef.header?"truncate":"w-48"),children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(a=e.column.columnDef).header)||void 0===t?void 0:t.call(a,e.getContext())})},e.id)})},e.id))}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:D?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:8,className:"px-6 py-4 text-center text-gray-500",children:(0,s.jsx)(m.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):O.getRowModel().rows.map(e=>(0,s.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,s.jsx)("td",{className:"max-w-sm p-3",children:(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsx)("div",{className:"line-clamp-2 hover:line-clamp-none",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()})})},e.id))},e.id))})]})}),(0,s.jsx)(v(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(z/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{T(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}var _=a(8181),C=a(10883),k=a(68193),S=a(25810),D=a(4964),E=a(49089),z=a(85994),P=a.n(z);function M(){let[e,t]=r.useState(0),[a,l]=r.useState(""),[n,i]=r.useState(""),[c,o]=r.useState([g()().subtract(30,"day").startOf("day").toDate(),g()().toDate()]),[d,u]=c;return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Post List"})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"m-2",children:(0,s.jsx)("div",{className:"max-w-md mx-auto",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(_.B,{size:"md",children:[(0,s.jsx)(C.I,{pr:"4.5rem",type:"text",placeholder:"search article",className:"bg-white dark:bg-gray-700",onKeyDown:e=>"Enter"===e.key&&l(e.target.value)}),(0,s.jsx)(k.x,{children:(0,s.jsx)(S.z,{size:"sm",children:(0,s.jsx)(E.U41,{})})})]})})})})})]}),(0,s.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsxs)("div",{className:"items-center justify-between lg:flex",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"}),(0,s.jsx)("div",{className:"items-center sm:flex",children:(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-center mb-3 space-x-0 space-y-2 md:space-x-2 md:space-y-0",children:[(0,s.jsx)(P(),{className:"bg-white dark:bg-gray-800 !p-[.3rem] !text-sm !w-[200px]",selectsRange:!0,startDate:d,endDate:u,dateFormat:"dd-MM-yyyy",onChange:e=>{o(e)},isClearable:!0}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsxs)(D.P,{defaultValue:"All Type",className:"w-full",size:"sm",onChange:e=>i(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"All Type"}),(0,s.jsx)("option",{value:"1",children:"News"}),(0,s.jsx)("option",{value:"2",children:"Video"}),(0,s.jsx)("option",{value:"3",children:"Gallery"})]})}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsx)(S.z,{colorScheme:"red",size:"sm",className:"w-full md:w-auto",onClick:()=>t(Math.floor(1e4*Math.random())),children:"Filter"})})]})})})]}),(0,s.jsx)(w,{search:a,startDate:d,endDate:u,isUpdate:e,setIsUpdate:t,typePost:n})]})]})}a(21005)},43118:function(e,t,a){"use strict";a.d(t,{A:function(){return n},P:function(){return l}});var s=a(80928),r=a.n(s);function l(e){return encodeURIComponent(r().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function n(e){return r().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(r().enc.Utf8)}},89427:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(83464),r=a(80605);async function l(e,t,a,l){try{let n;n="GET"==e?{validateStatus:()=>!1,method:e,headers:l,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:l,url:t,data:a};let i=await (0,s.Z)(n).catch(e=>e.response);return 401==i.status&&await (0,r.signOut)(),i}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},4964:function(e,t,a){"use strict";a.d(t,{P:function(){return m}});var s=a(14096),r=a(68973),l=a(41531),n=a(57437),i=(0,r.G)(function(e,t){let{children:a,placeholder:r,className:i,...c}=e;return(0,n.jsxs)(l.m.select,{...c,ref:t,className:(0,s.cx)("chakra-select",i),children:[r&&(0,n.jsx)("option",{value:"",children:r}),a]})});i.displayName="SelectField";var c=a(43682),o=a(9889),d=a(83707),u=a(2265),m=(0,r.G)((e,t)=>{var a;let r=(0,o.jC)("Select",e),{rootProps:u,placeholder:m,icon:h,color:x,height:g,h:f,minH:b,minHeight:y,iconColor:v,iconSize:j,...N}=(0,d.Lr)(e),[w,_]=function(e,t){let a={},s={};for(let[r,l]of Object.entries(e))t.includes(r)?a[r]=l:s[r]=l;return[a,s]}(N,d.oE),C=(0,c.Y)(_),k={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...null==(a=r.field)?void 0:a._focus}};return(0,n.jsxs)(l.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:x},...w,...u,children:[(0,n.jsx)(i,{ref:t,height:null!=f?f:g,minH:null!=b?b:y,placeholder:m,...C,__css:k,children:e.children}),(0,n.jsx)(p,{"data-disabled":(0,s.PB)(C.disabled),...(v||x)&&{color:v||x},__css:r.icon,...j&&{fontSize:j},children:h})]})});m.displayName="Select";var h=e=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),x=(0,l.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),p=e=>{let{children:t=(0,n.jsx)(h,{}),...a}=e,s=(0,u.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,n.jsx)(x,{...a,className:"chakra-select__icon-wrapper",children:(0,u.isValidElement)(t)?s:null})};p.displayName="SelectIcon"},28082:function(e,t,a){"use strict";a.d(t,{Vp:function(){return m}});var s=a(13856),r=a(37371),l=a(68973),n=a(9889),i=a(83707),c=a(41531),o=a(57437),[d,u]=(0,r.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),m=(0,l.G)((e,t)=>{let a=(0,n.jC)("Tag",e),s=(0,i.Lr)(e),r={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...a.container};return(0,o.jsx)(d,{value:a,children:(0,o.jsx)(c.m.span,{ref:t,...s,__css:r})})});m.displayName="Tag",(0,l.G)((e,t)=>{let a=u();return(0,o.jsx)(c.m.span,{ref:t,noOfLines:1,...e,__css:a.label})}).displayName="TagLabel",(0,l.G)((e,t)=>(0,o.jsx)(s.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e})).displayName="TagLeftIcon",(0,l.G)((e,t)=>(0,o.jsx)(s.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e})).displayName="TagRightIcon";var h=e=>(0,o.jsx)(s.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});h.displayName="TagCloseIcon",(0,l.G)((e,t)=>{let{isDisabled:a,children:s,...r}=e,l={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...u().closeButton};return(0,o.jsx)(c.m.button,{ref:t,"aria-label":"close",...r,type:"button",disabled:a,__css:l,children:s||(0,o.jsx)(h,{})})}).displayName="TagCloseButton"}},function(e){e.O(0,[7360,7699,1994,1544,9701,5878,605,3015,1760,9799,3464,9611,1612,2298,866,9614,2971,2117,1744],function(){return e(e.s=79151)}),_N_E=e.O()}]);