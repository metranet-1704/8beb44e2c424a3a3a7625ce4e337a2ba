(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4411],{42480:function(){},44725:function(e,t,a){Promise.resolve().then(a.t.bind(a,65878,23)),Promise.resolve().then(a.bind(a,81523)),Promise.resolve().then(a.bind(a,70049)),Promise.resolve().then(a.bind(a,11093))},11093:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return V}});var s=a(57437),r=a(2265),l=a(71594),n=a(24525),i=a(69340),o=a(28082),c=a(58055),d=a(60187),u=a(25730),m=a(307),h=a(67776),x=a(49089),g=a(89427),p=a(16098),f=a(80605),j=a(25103),b=a.n(j),y=a(78796),v=a(26553),S=a(48860),N=a(49270),w=a(16152),k=a(20517),C=a(25810);function _(e){let{isOpen:t,setIsUpdate:a,session:l,idDelete:n,onClose:i}=e,o=r.useRef(null),c=(0,y.p)(),[d,u]=r.useState(!1),m=async()=>{var e;u(!0);let t=await (0,g.Z)("DELETE","".concat("https://mercury.uzone.id/","api/v1/articles/destroy?article_id=").concat(n),{},{accept:"application/json",Authorization:"Bearer ".concat(null==l?void 0:null===(e=l.user)||void 0===e?void 0:e.access_token)});u(!1),200==t.status?(a(Math.random()),i(),c({title:"Success",description:t.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):c({title:"Error",description:t.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,s.jsx)(v.a,{isOpen:t,leastDestructiveRef:o,onClose:i,children:(0,s.jsx)(S.Z,{children:(0,s.jsxs)(v._,{children:[(0,s.jsx)(N.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,s.jsx)(w.f,{children:"Apakah anda yakin ingin menghapus artikel ini? Jika ya maka data tidak dapat dikembalikan lagi."}),(0,s.jsxs)(k.m,{children:[(0,s.jsx)(C.z,{ref:o,onClick:i,children:"Cancel"}),(0,s.jsx)(C.z,{colorScheme:"red",onClick:()=>m(),isLoading:d,ml:3,children:"Delete"})]})]})})})}var D=a(43118),I=a(27648);function z(e){let{search:t,startDate:a,endDate:j,isUpdate:y,setIsUpdate:v,typePost:S,author:N,tag:w}=e,[k,C]=r.useState([]),[z,E]=r.useState(!0),[T,M]=r.useState(0),[P,L]=r.useState(0),[A,R]=r.useState(0),[Y,G]=r.useState([]),{data:V}=(0,f.useSession)(),{isOpen:U,onOpen:Z,onClose:O}=(0,i.q)(),B=["post_title","post_author","post_category","post_tag"],F=e=>{let{isSorted:t,isSortedDesc:a}=e;return t?a?(0,s.jsx)(x.sF,{className:"inline ml-1"}):(0,s.jsx)(x.h3_,{className:"inline ml-1"}):(0,s.jsx)(x.roE,{className:"inline ml-1"})},H=[{header:e=>{let{column:t}=e,a=B.includes(t.id);return(0,s.jsxs)("button",{className:"flex items-center ".concat(a?"cursor-pointer":"cursor-default"),onClick:()=>a&&t.toggleSorting(),children:["Title",a&&(0,s.jsx)(F,{isSorted:!1!==t.getIsSorted(),isSortedDesc:"desc"===t.getIsSorted()})]})},accessorKey:"post_title",cell:e=>{let{row:t}=e,{post_title:a,post_id:r}=t.original;return(0,s.jsx)(I.default,{title:"Edit ".concat(a),className:"w-full text-left text-blue-500 hover:text-blue-600 hover:underline hover:font-semibold",dangerouslySetInnerHTML:{__html:a},href:"/dashboard/post/edit?aa=".concat((0,D.P)(r),"&isDraft=1"),"aria-label":"Edit ".concat(a)})}},{header:e=>{let{column:t}=e;return(0,s.jsxs)("button",{className:"flex items-center",onClick:()=>t.toggleSorting(),children:["Author",(0,s.jsx)(F,{isSorted:!1!==t.getIsSorted(),isSortedDesc:"desc"===t.getIsSorted()})]})},accessorKey:"post_author",cell:e=>{let{row:t}=e,{post_author:a}=t.original;return(0,s.jsx)(I.default,{className:"w-full text-left text-blue-500 hover:text-blue-600 hover:underline hover:font-semibold",title:"Filter ".concat(a),href:"/dashboard/post/list?author=".concat(a),"aria-label":"Filter ".concat(a),children:a})}},{header:e=>{let{column:t}=e;return(0,s.jsxs)("button",{className:"flex items-center",onClick:()=>t.toggleSorting(),children:["Category",(0,s.jsx)(F,{isSorted:!1!==t.getIsSorted(),isSortedDesc:"desc"===t.getIsSorted()})]})},accessorKey:"post_category",cell:e=>{let{row:t}=e,{post_category:a}=t.original;return a.map(e=>(0,s.jsx)(o.Vp,{m:1,size:"sm",colorScheme:"purple",children:e},e))}},{header:"Status",accessorKey:"post_status",cell:e=>{let{row:t}=e,{post_status:a}=t.original,r="blue";return"publish"===a?r="green":"draft"===a?r="cyan":"trash"===a?r="red":"scheduled"===a&&(r="orange"),(0,s.jsx)(o.Vp,{size:"sm",colorScheme:r,children:a})}},{header:e=>{let{column:t}=e;return(0,s.jsxs)("button",{className:"flex items-center",onClick:()=>t.toggleSorting(),children:["Tags",(0,s.jsx)(F,{isSorted:!1!==t.getIsSorted(),isSortedDesc:"desc"===t.getIsSorted()})]})},accessorKey:"post_tag",cell:e=>{let{row:t}=e,{post_tag:a}=t.original;return a.map(e=>(0,s.jsx)(o.Vp,{href:"/dashboard/post/list?tag=".concat(e),as:I.default,m:1,size:"sm",colorScheme:"teal",children:e},e))}},{header:"Post Date",accessorKey:"post_date",cell:e=>{let{row:t}=e;return(0,p.Z)(t.original.post_date).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:e=>{let{row:t}=e,{post_id:a}=t.original;return(0,s.jsx)(c.U,{spacing:"1",children:(0,s.jsx)(d.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,s.jsx)(u.h,{size:"sm",icon:(0,s.jsx)(h.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{R(a),Z()}})})})}}],K=(0,l.b7)({data:k,columns:H,getCoreRowModel:(0,n.sC)(),manualPagination:!0,pageCount:Math.ceil(T/10),state:{sorting:Y},onSortingChange:G,manualSorting:!0});return r.useEffect(()=>{let e=async()=>{var e;E(!0);let s=Y[0],r=null==s?void 0:s.id,l=(null==s?void 0:s.desc)?"desc":"asc",n=await (0,g.Z)("GET","".concat("https://mercury.uzone.id/","api/v1/articles/"),{page:P+1,limit:10,search:t,startdate:(0,p.Z)(a).format("YYYY-MM-DD"),enddate:(0,p.Z)(j).format("YYYY-MM-DD"),status:"trash",type:S,author:N&&"null"!==N?N:"",tag:w&&"null"!==w?w:"",sort_by:r,sort_order:l},{accept:"application/json",Authorization:"Bearer ".concat(null==V?void 0:null===(e=V.user)||void 0===e?void 0:e.access_token)});E(!1),200===n.status&&(C(n.data.data.articles),M(n.data.data.total_articles))};V&&e()},[y,V,t,P,N,w,Y,a,j,S]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{setIsUpdate:v,session:V,isOpen:U,idDelete:A,onClose:O}),(0,s.jsx)("div",{className:"overflow-x-auto border border-gray-200 rounded-lg shadow-md",children:(0,s.jsxs)("table",{className:"min-w-full text-xs bg-white border border-gray-200 divide-y divide-gray-200 dark:bg-gray-700",children:[(0,s.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:K.getHeaderGroups().map(e=>(0,s.jsx)("tr",{className:"w-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,a;return(0,s.jsx)("th",{className:"max-w-lg p-2",children:(0,s.jsx)("div",{className:"".concat("Title"!==e.column.columnDef.header?"truncate":"w-48"),children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(a=e.column.columnDef).header)||void 0===t?void 0:t.call(a,e.getContext())})},e.id)})},e.id))}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:z?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:8,className:"px-6 py-4 text-center text-gray-500",children:(0,s.jsx)(m.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):K.getRowModel().rows.map(e=>(0,s.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,s.jsx)("td",{className:"max-w-sm p-3",children:(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsx)("div",{className:"line-clamp-2 hover:line-clamp-none",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()})})},e.id))},e.id))})]})}),(0,s.jsx)(b(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(T/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{L(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}var E=a(8181),T=a(10883),M=a(68193),P=a(4964),L=a(85994),A=a.n(L);a(21005);var R=a(71096),Y=a.n(R),G=a(99376);function V(){let[e,t]=r.useState(0),[a,l]=r.useState(""),[n,i]=r.useState(""),[c,d]=r.useState([Y()().subtract(30,"day").startOf("day").toDate(),Y()().toDate()]),[u,m]=c,h=(0,G.useRouter)(),g=(0,G.useSearchParams)(),p=decodeURI(g.get("author"))||"",f=decodeURI(g.get("tag"))||"";return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Trash List"})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"m-2",children:(0,s.jsx)("div",{className:"max-w-md mx-auto",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(E.B,{size:"md",children:[(0,s.jsx)(T.I,{pr:"4.5rem",type:"text",placeholder:"search article",className:"bg-white dark:bg-gray-700",onKeyDown:e=>"Enter"===e.key&&l(e.target.value)}),(0,s.jsx)(M.x,{children:(0,s.jsx)(C.z,{size:"sm",children:(0,s.jsx)(x.U41,{})})})]})})})})})]}),(0,s.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsxs)("div",{className:"items-center justify-between lg:flex",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"}),(0,s.jsx)("div",{className:"items-center sm:flex",children:(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-center mb-3 space-x-0 space-y-2 md:space-x-2 md:space-y-0",children:[p&&"null"!==p&&(0,s.jsxs)(o.Vp,{size:"md",borderRadius:"full",variant:"solid",colorScheme:"telegram",children:[(0,s.jsx)(o.Sn,{children:p}),(0,s.jsx)(o.SD,{onClick:()=>h.push("/dashboard/post/trash")})]}),f&&"null"!==f&&(0,s.jsxs)(o.Vp,{size:"md",borderRadius:"full",variant:"solid",colorScheme:"facebook",children:[(0,s.jsx)(o.Sn,{children:f}),(0,s.jsx)(o.SD,{onClick:()=>h.push("/dashboard/post/trash")})]}),(0,s.jsx)(A(),{className:"bg-white dark:bg-gray-800 !p-[.3rem] !text-sm !w-[200px]",selectsRange:!0,startDate:u,endDate:m,dateFormat:"dd-MM-yyyy",onChange:e=>{d(e)},isClearable:!0}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsxs)(P.P,{defaultValue:"All Type",className:"w-full",size:"sm",onChange:e=>i(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"All Type"}),(0,s.jsx)("option",{value:"1",children:"News"}),(0,s.jsx)("option",{value:"2",children:"Video"}),(0,s.jsx)("option",{value:"3",children:"Gallery"})]})}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsx)(C.z,{colorScheme:"red",size:"sm",className:"w-full md:w-auto",onClick:()=>t(Math.floor(1e4*Math.random())),children:"Filter"})})]})})})]}),(0,s.jsx)(z,{search:a,startDate:u,endDate:m,isUpdate:e,setIsUpdate:t,typePost:n,author:p,tag:f})]})]})}},16098:function(e,t,a){"use strict";var s=a(71096),r=a.n(s);r()().format("HH:mm"),t.Z=r()},43118:function(e,t,a){"use strict";a.d(t,{A:function(){return n},P:function(){return l}});var s=a(80928),r=a.n(s);function l(e){return encodeURIComponent(r().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function n(e){return r().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(r().enc.Utf8)}},89427:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(83464),r=a(80605);async function l(e,t,a,l){try{let n;n="GET"==e?{validateStatus:()=>!1,method:e,headers:l,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:l,url:t,data:a};let i=await (0,s.Z)(n).catch(e=>e.response);return 401==i.status&&await (0,r.signOut)(),i}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},4964:function(e,t,a){"use strict";a.d(t,{P:function(){return m}});var s=a(14096),r=a(68973),l=a(41531),n=a(57437),i=(0,r.G)(function(e,t){let{children:a,placeholder:r,className:i,...o}=e;return(0,n.jsxs)(l.m.select,{...o,ref:t,className:(0,s.cx)("chakra-select",i),children:[r&&(0,n.jsx)("option",{value:"",children:r}),a]})});i.displayName="SelectField";var o=a(43682),c=a(9889),d=a(83707),u=a(2265),m=(0,r.G)((e,t)=>{var a;let r=(0,c.jC)("Select",e),{rootProps:u,placeholder:m,icon:h,color:x,height:p,h:f,minH:j,minHeight:b,iconColor:y,iconSize:v,...S}=(0,d.Lr)(e),[N,w]=function(e,t){let a={},s={};for(let[r,l]of Object.entries(e))t.includes(r)?a[r]=l:s[r]=l;return[a,s]}(S,d.oE),k=(0,o.Y)(w),C={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...null==(a=r.field)?void 0:a._focus}};return(0,n.jsxs)(l.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:x},...N,...u,children:[(0,n.jsx)(i,{ref:t,height:null!=f?f:p,minH:null!=j?j:b,placeholder:m,...k,__css:C,children:e.children}),(0,n.jsx)(g,{"data-disabled":(0,s.PB)(k.disabled),...(y||x)&&{color:y||x},__css:r.icon,...v&&{fontSize:v},children:h})]})});m.displayName="Select";var h=e=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,n.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),x=(0,l.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),g=e=>{let{children:t=(0,n.jsx)(h,{}),...a}=e,s=(0,u.cloneElement)(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,n.jsx)(x,{...a,className:"chakra-select__icon-wrapper",children:(0,u.isValidElement)(t)?s:null})};g.displayName="SelectIcon"},28082:function(e,t,a){"use strict";a.d(t,{SD:function(){return g},Sn:function(){return h},Vp:function(){return m}});var s=a(13856),r=a(37371),l=a(68973),n=a(9889),i=a(83707),o=a(41531),c=a(57437),[d,u]=(0,r.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),m=(0,l.G)((e,t)=>{let a=(0,n.jC)("Tag",e),s=(0,i.Lr)(e),r={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...a.container};return(0,c.jsx)(d,{value:a,children:(0,c.jsx)(o.m.span,{ref:t,...s,__css:r})})});m.displayName="Tag";var h=(0,l.G)((e,t)=>{let a=u();return(0,c.jsx)(o.m.span,{ref:t,noOfLines:1,...e,__css:a.label})});h.displayName="TagLabel",(0,l.G)((e,t)=>(0,c.jsx)(s.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e})).displayName="TagLeftIcon",(0,l.G)((e,t)=>(0,c.jsx)(s.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e})).displayName="TagRightIcon";var x=e=>(0,c.jsx)(s.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});x.displayName="TagCloseIcon";var g=(0,l.G)((e,t)=>{let{isDisabled:a,children:s,...r}=e,l={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...u().closeButton};return(0,c.jsx)(o.m.button,{ref:t,"aria-label":"close",...r,type:"button",disabled:a,__css:l,children:s||(0,c.jsx)(x,{})})});g.displayName="TagCloseButton"}},function(e){e.O(0,[7360,7699,1994,1544,9701,5878,3015,605,1760,9799,3464,9611,1612,2298,7648,866,9614,2971,2117,1744],function(){return e(e.s=44725)}),_N_E=e.O()}]);