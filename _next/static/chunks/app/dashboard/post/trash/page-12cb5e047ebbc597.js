(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4411],{42480:function(){},44725:function(e,a,t){Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.bind(t,81523)),Promise.resolve().then(t.bind(t,70049)),Promise.resolve().then(t.bind(t,11093))},11093:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return M}});var l=t(57437),s=t(2265),i=t(71594),r=t(24525),n=t(69340),o=t(28082),d=t(58055),c=t(60187),u=t(25730),h=t(307),m=t(67776),x=t(89427),p=t(16098),v=t(80605),j=t(99376),g=t(25103),f=t.n(g),b=t(78796),y=t(26553),w=t(48860),N=t(49270),k=t(16152),S=t(20517),C=t(25810);function D(e){let{isOpen:a,setIsUpdate:t,session:i,idDelete:r,onClose:n}=e,o=s.useRef(null),d=(0,b.p)(),[c,u]=s.useState(!1),h=async()=>{var e;u(!0);let a=await (0,x.Z)("DELETE","".concat("https://mercury.uzone.id/","api/v1/articles/destroy?article_id=").concat(r),{},{accept:"application/json",Authorization:"Bearer ".concat(null==i?void 0:null===(e=i.user)||void 0===e?void 0:e.access_token)});u(!1),200==a.status?(t(Math.random()),n(),d({title:"Success",description:a.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):d({title:"Error",description:a.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,l.jsx)(y.a,{isOpen:a,leastDestructiveRef:o,onClose:n,children:(0,l.jsx)(w.Z,{children:(0,l.jsxs)(y._,{children:[(0,l.jsx)(N.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,l.jsx)(k.f,{children:"Apakah anda yakin ingin menghapus artikel ini? Jika ya maka data tidak dapat dikembalikan lagi."}),(0,l.jsxs)(S.m,{children:[(0,l.jsx)(C.z,{ref:o,onClick:n,children:"Cancel"}),(0,l.jsx)(C.z,{colorScheme:"red",onClick:()=>h(),isLoading:c,ml:3,children:"Delete"})]})]})})})}var P=t(43118);function z(e){let{search:a}=e,t=(0,j.useRouter)(),[g,b]=s.useState(0),[y,w]=s.useState([]),[N,k]=s.useState(!0),[S,C]=s.useState(0),[z,E]=s.useState(0),[R,_]=s.useState(0),{data:A}=(0,v.useSession)(),{isOpen:T,onOpen:L,onClose:M}=(0,n.q)(),F=[{header:"Title",accessorKey:"post_title"},{header:"Status",accessorKey:"post_status",cell:e=>{let{row:a}=e,{post_status:t}=a.original,s="blue";return"publish"===t?s="green":"draft"===t?s="cyan":"trash"===t&&(s="red"),(0,l.jsx)(o.Vp,{size:"sm",colorScheme:s,children:t})}},{header:"Author",accessorKey:"post_author"},{header:"Post Date",accessorKey:"post_date",cell:e=>{let{row:a}=e;return(0,p.Z)(a.original.post_date).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:e=>{let{row:a}=e,{post_id:s}=a.original;return(0,l.jsxs)(d.U,{spacing:"4",children:[(0,l.jsx)(c.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,l.jsx)(u.h,{size:"sm",icon:(0,l.jsx)(m.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>t.push("/dashboard/post/edit?aa=".concat((0,P.P)(s)))})}),(0,l.jsx)(c.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,l.jsx)(u.h,{size:"sm",icon:(0,l.jsx)(m.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{_(s),L()}})})]})}}],H=(0,i.b7)({data:y,columns:F,getCoreRowModel:(0,r.sC)(),manualPagination:!0,pageCount:Math.ceil(S/10)});return s.useEffect(()=>{let e=async()=>{var e;k(!0);let t=await (0,x.Z)("GET","".concat("https://mercury.uzone.id/","api/v1/articles/"),{page:z+1,limit:10,status:"trash",search:a},{accept:"application/json",Authorization:"Bearer ".concat(null==A?void 0:null===(e=A.user)||void 0===e?void 0:e.access_token)});k(!1),200===t.status&&(w(t.data.data.articles),C(t.data.data.total_articles))};A&&e()},[g,A,a,z]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{setIsUpdate:b,session:A,isOpen:T,idDelete:R,onClose:M}),(0,l.jsx)("div",{className:"overflow-hidden border border-gray-200 rounded-lg shadow-md",children:(0,l.jsxs)("table",{className:"min-w-full text-xs bg-white border border-gray-200 divide-y divide-gray-200 dark:bg-gray-700",children:[(0,l.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:H.getHeaderGroups().map(e=>(0,l.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var a,t;return(0,l.jsx)("th",{className:"max-w-lg px-6 py-3",children:(0,l.jsx)("div",{className:"truncate",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(a=(t=e.column.columnDef).header)||void 0===a?void 0:a.call(t,e.getContext())})},e.id)})},e.id))}),(0,l.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:N?(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:5,className:"px-6 py-4 text-center text-gray-500",children:(0,l.jsx)(h.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):H.getRowModel().rows.map(e=>(0,l.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,l.jsx)("td",{className:"max-w-sm px-6 py-4",children:(0,l.jsx)("div",{className:"overflow-hidden",children:(0,l.jsx)("div",{className:"line-clamp-2 hover:line-clamp-none",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()})})},e.id))},e.id))})]})}),(0,l.jsx)(f(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(S/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{E(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}var E=t(25922),R=t(8181),_=t(10883),A=t(68193),T=t(4964),L=t(49089);function M(){let{theme:e}=(0,E.F)(),[a,t]=s.useState("");return(0,l.jsxs)("div",{className:"px-4 pt-6",children:[(0,l.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,l.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,l.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Trash List"})}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)("div",{className:"m-2",children:(0,l.jsx)("div",{className:"max-w-md mx-auto",children:(0,l.jsx)("div",{className:"relative",children:(0,l.jsxs)(R.B,{size:"md",children:[(0,l.jsx)(_.I,{pr:"4.5rem",type:"text",className:"bg-white dark:bg-gray-700",placeholder:"search article",onKeyDown:e=>"Enter"===e.key&&t(e.target.value)}),(0,l.jsx)(A.x,{children:(0,l.jsx)(C.z,{size:"sm",children:(0,l.jsx)(L.U41,{})})})]})})})})})]}),(0,l.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,l.jsxs)("div",{className:"items-center justify-between lg:flex",children:[(0,l.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"}),(0,l.jsx)("div",{className:"items-center sm:flex",children:(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsxs)("div",{className:"flex flex-wrap items-center mb-3 space-x-0 space-y-2 md:space-x-2 md:space-y-0",children:[(0,l.jsx)("div",{className:"w-full md:w-auto",children:(0,l.jsxs)(T.P,{defaultValue:"All Categories",className:"w-full",size:"sm",children:[(0,l.jsx)("option",{value:"allCategories",children:"All Categories"}),(0,l.jsx)("option",{value:"1",children:"Advertorial"}),(0,l.jsx)("option",{value:"2",children:"Automotive"}),(0,l.jsx)("option",{value:"3",children:"Berita Pilihan"}),(0,l.jsx)("option",{value:"4",children:"Bremm Journey"}),(0,l.jsx)("option",{value:"5",children:"Commmunity"}),(0,l.jsx)("option",{value:"6",children:"Digilife"}),(0,l.jsx)("option",{value:"7",children:"Entertaintment"}),(0,l.jsx)("option",{value:"8",children:"Feature"}),(0,l.jsx)("option",{value:"9",children:"Feed"}),(0,l.jsx)("option",{value:"10",children:"Film"}),(0,l.jsx)("option",{value:"11",children:"Food"}),(0,l.jsx)("option",{value:"12",children:"Gadget"}),(0,l.jsx)("option",{value:"13",children:"Games"}),(0,l.jsx)("option",{value:"14",children:"Govtech"}),(0,l.jsx)("option",{value:"15",children:"Hangout"}),(0,l.jsx)("option",{value:"16",children:"Headline"}),(0,l.jsx)("option",{value:"17",children:"Health"}),(0,l.jsx)("option",{value:"18",children:"Islam dan Teknologi"}),(0,l.jsx)("option",{value:"19",children:"Lifestyle"}),(0,l.jsx)("option",{value:"20",children:"Male"}),(0,l.jsx)("option",{value:"21",children:"Music"}),(0,l.jsx)("option",{value:"22",children:"Ngabuburide"}),(0,l.jsx)("option",{value:"23",children:"Ngabubutips"}),(0,l.jsx)("option",{value:"24",children:"One Day One Review"}),(0,l.jsx)("option",{value:"25",children:"Plus"}),(0,l.jsx)("option",{value:"26",children:"Ramadan"}),(0,l.jsx)("option",{value:"27",children:"Ramadan Life"}),(0,l.jsx)("option",{value:"28",children:"Redzone"}),(0,l.jsx)("option",{value:"29",children:"Rekomendasi Ramadan"}),(0,l.jsx)("option",{value:"30",children:"Review"}),(0,l.jsx)("option",{value:"31",children:"Reviews"}),(0,l.jsx)("option",{value:"32",children:"Serba Lima"}),(0,l.jsx)("option",{value:"33",children:"Si Paling Mudik"}),(0,l.jsx)("option",{value:"34",children:"Si Paling Sahur"}),(0,l.jsx)("option",{value:"35",children:"Sport"}),(0,l.jsx)("option",{value:"36",children:"Startup"}),(0,l.jsx)("option",{value:"37",children:"Talks"}),(0,l.jsx)("option",{value:"38",children:"Technology"}),(0,l.jsx)("option",{value:"39",children:"Telco"}),(0,l.jsx)("option",{value:"40",children:"Timeless"}),(0,l.jsx)("option",{value:"41",children:"Tips & Reco's"}),(0,l.jsx)("option",{value:"42",children:"Travel"})]})}),(0,l.jsx)("div",{className:"w-full md:w-auto",children:(0,l.jsxs)(T.P,{defaultValue:"All Status",className:"w-full",size:"sm",children:[(0,l.jsx)("option",{value:"allStatus",children:"All Status"}),(0,l.jsx)("option",{value:"public",children:"Public"}),(0,l.jsx)("option",{value:"schedule",children:"Schedule"}),(0,l.jsx)("option",{value:"draft",children:"Draft"})]})}),(0,l.jsx)("div",{className:"w-full md:w-auto",children:(0,l.jsxs)(T.P,{defaultValue:"All Type",className:"w-full",size:"sm",children:[(0,l.jsx)("option",{value:"allType",children:"All Type"}),(0,l.jsx)("option",{value:"news",children:"News"}),(0,l.jsx)("option",{value:"video",children:"Video"}),(0,l.jsx)("option",{value:"gallery",children:"Gallery"})]})}),(0,l.jsx)("div",{className:"w-full md:w-auto",children:(0,l.jsx)(C.z,{colorScheme:"red",size:"sm",className:"w-full md:w-auto",children:"Filter"})})]})})})]}),(0,l.jsx)(z,{search:a})]})]})}},16098:function(e,a,t){"use strict";var l=t(71096),s=t.n(l);s()().format("HH:mm"),a.Z=s()},43118:function(e,a,t){"use strict";t.d(a,{A:function(){return r},P:function(){return i}});var l=t(80928),s=t.n(l);function i(e){return encodeURIComponent(s().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function r(e){return s().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(s().enc.Utf8)}},89427:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var l=t(83464),s=t(80605);async function i(e,a,t,i){try{let r;r="GET"==e?{validateStatus:()=>!1,method:e,headers:i,url:a,params:t}:{validateStatus:()=>!1,method:e,headers:i,url:a,data:t};let n=await (0,l.Z)(r).catch(e=>e.response);return 401==n.status&&await (0,s.signOut)(),n}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(e){e.O(0,[7699,1994,9701,5878,605,3015,1760,9799,3464,9611,1612,5506,9089,2727,2971,2117,1744],function(){return e(e.s=44725)}),_N_E=e.O()}]);