(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5571],{79151:function(e,a,l){Promise.resolve().then(l.t.bind(l,65878,23)),Promise.resolve().then(l.bind(l,81523)),Promise.resolve().then(l.bind(l,70049)),Promise.resolve().then(l.bind(l,62110))},62110:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return _}});var s=l(57437),i=l(2265),t=l(71594),r=l(24525),n=l(69340),o=l(28082),d=l(58055),c=l(60187),u=l(25730),h=l(307),x=l(67776),m=l(89427),p=l(71096),v=l.n(p),j=l(80605),g=l(99376),b=l(25103),y=l.n(b),f=l(41966);function w(e){let{search:a}=e,l=(0,g.useRouter)(),[p,b]=i.useState(0),[w,N]=i.useState([]),[k,C]=i.useState(!0),[S,P]=i.useState(0),[D,z]=i.useState(0),[_,R]=i.useState(0),{data:L}=(0,j.useSession)(),{isOpen:T,onOpen:A,onClose:E}=(0,n.q)(),M=[{header:"Title",accessorKey:"post_title"},{header:"Status",accessorKey:"post_status",cell:e=>{let{row:a}=e,{post_status:l}=a.original,i="blue";return"publish"===l?i="green":"draft"===l?i="cyan":"trash"===l&&(i="red"),(0,s.jsx)(o.Vp,{size:"sm",colorScheme:i,children:l})}},{header:"Author",accessorKey:"post_author"},{header:"Post Date",accessorKey:"post_date",cell:e=>{let{row:a}=e;return v()(a.original.post_date).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:e=>{let{row:a}=e,{post_id:i}=a.original;return(0,s.jsxs)(d.U,{spacing:"4",children:[(0,s.jsx)(c.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,s.jsx)(u.h,{size:"sm",icon:(0,s.jsx)(x.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>l.push("/dashboard/post/edit?aa=".concat(i))})}),(0,s.jsx)(c.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,s.jsx)(u.h,{size:"sm",icon:(0,s.jsx)(x.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{R(i),A()}})})]})}}],F=(0,t.b7)({data:w,columns:M,getCoreRowModel:(0,r.sC)(),manualPagination:!0,pageCount:Math.ceil(S/10)});return i.useEffect(()=>{let e=async()=>{var e;C(!0);let l=await (0,m.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/articles/"),{page:D+1,limit:10,search:a,status:"publish"},{accept:"application/json",Authorization:"Bearer ".concat(null==L?void 0:null===(e=L.user)||void 0===e?void 0:e.access_token)});C(!1),200===l.status&&(N(l.data.data.articles),P(l.data.data.total_articles))};L&&e()},[p,L,a,D]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.Z,{setIsUpdate:b,session:L,isOpen:T,idDelete:_,onClose:E}),(0,s.jsx)("div",{className:"overflow-hidden border border-gray-200 rounded-lg shadow-md",children:(0,s.jsxs)("table",{className:"min-w-full text-xs bg-white border border-gray-200 divide-y divide-gray-200 dark:bg-gray-700",children:[(0,s.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:F.getHeaderGroups().map(e=>(0,s.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var a,l;return(0,s.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(a=(l=e.column.columnDef).header)||void 0===a?void 0:a.call(l,e.getContext())},e.id)})},e.id))}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:k?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:5,className:"px-6 py-4 text-center text-gray-500",children:(0,s.jsx)(h.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):F.getRowModel().rows.map(e=>(0,s.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})}),(0,s.jsx)(y(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(S/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{z(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}var N=l(25922),k=l(8181),C=l(10883),S=l(68193),P=l(25810),D=l(4964),z=l(49089);function _(){let{theme:e}=(0,N.F)(),[a,l]=i.useState("");return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Post List"})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"m-2",children:(0,s.jsx)("div",{className:"max-w-md mx-auto",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(k.B,{size:"md",children:[(0,s.jsx)(C.I,{pr:"4.5rem",type:"text",placeholder:"search article",className:"bg-white dark:bg-gray-700",onKeyDown:e=>"Enter"===e.key&&l(e.target.value)}),(0,s.jsx)(S.x,{children:(0,s.jsx)(P.z,{size:"sm",children:(0,s.jsx)(z.U41,{})})})]})})})})})]}),(0,s.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsxs)("div",{className:"items-center justify-between lg:flex",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"}),(0,s.jsx)("div",{className:"items-center sm:flex",children:(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-center mb-3 space-x-0 space-y-2 md:space-x-2 md:space-y-0",children:[(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsxs)(D.P,{defaultValue:"All Categories",className:"w-full",size:"sm",children:[(0,s.jsx)("option",{value:"allCategories",children:"All Categories"}),(0,s.jsx)("option",{value:"1",children:"Advertorial"}),(0,s.jsx)("option",{value:"2",children:"Automotive"}),(0,s.jsx)("option",{value:"3",children:"Berita Pilihan"}),(0,s.jsx)("option",{value:"4",children:"Bremm Journey"}),(0,s.jsx)("option",{value:"5",children:"Commmunity"}),(0,s.jsx)("option",{value:"6",children:"Digilife"}),(0,s.jsx)("option",{value:"7",children:"Entertaintment"}),(0,s.jsx)("option",{value:"8",children:"Feature"}),(0,s.jsx)("option",{value:"9",children:"Feed"}),(0,s.jsx)("option",{value:"10",children:"Film"}),(0,s.jsx)("option",{value:"11",children:"Food"}),(0,s.jsx)("option",{value:"12",children:"Gadget"}),(0,s.jsx)("option",{value:"13",children:"Games"}),(0,s.jsx)("option",{value:"14",children:"Govtech"}),(0,s.jsx)("option",{value:"15",children:"Hangout"}),(0,s.jsx)("option",{value:"16",children:"Headline"}),(0,s.jsx)("option",{value:"17",children:"Health"}),(0,s.jsx)("option",{value:"18",children:"Islam dan Teknologi"}),(0,s.jsx)("option",{value:"19",children:"Lifestyle"}),(0,s.jsx)("option",{value:"20",children:"Male"}),(0,s.jsx)("option",{value:"21",children:"Music"}),(0,s.jsx)("option",{value:"22",children:"Ngabuburide"}),(0,s.jsx)("option",{value:"23",children:"Ngabubutips"}),(0,s.jsx)("option",{value:"24",children:"One Day One Review"}),(0,s.jsx)("option",{value:"25",children:"Plus"}),(0,s.jsx)("option",{value:"26",children:"Ramadan"}),(0,s.jsx)("option",{value:"27",children:"Ramadan Life"}),(0,s.jsx)("option",{value:"28",children:"Redzone"}),(0,s.jsx)("option",{value:"29",children:"Rekomendasi Ramadan"}),(0,s.jsx)("option",{value:"30",children:"Review"}),(0,s.jsx)("option",{value:"31",children:"Reviews"}),(0,s.jsx)("option",{value:"32",children:"Serba Lima"}),(0,s.jsx)("option",{value:"33",children:"Si Paling Mudik"}),(0,s.jsx)("option",{value:"34",children:"Si Paling Sahur"}),(0,s.jsx)("option",{value:"35",children:"Sport"}),(0,s.jsx)("option",{value:"36",children:"Startup"}),(0,s.jsx)("option",{value:"37",children:"Talks"}),(0,s.jsx)("option",{value:"38",children:"Technology"}),(0,s.jsx)("option",{value:"39",children:"Telco"}),(0,s.jsx)("option",{value:"40",children:"Timeless"}),(0,s.jsx)("option",{value:"41",children:"Tips & Reco's"}),(0,s.jsx)("option",{value:"42",children:"Travel"})]})}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsxs)(D.P,{defaultValue:"All Status",className:"w-full",size:"sm",children:[(0,s.jsx)("option",{value:"allStatus",children:"All Status"}),(0,s.jsx)("option",{value:"public",children:"Public"}),(0,s.jsx)("option",{value:"schedule",children:"Schedule"}),(0,s.jsx)("option",{value:"draft",children:"Draft"})]})}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsxs)(D.P,{defaultValue:"All Type",className:"w-full",size:"sm",children:[(0,s.jsx)("option",{value:"allType",children:"All Type"}),(0,s.jsx)("option",{value:"news",children:"News"}),(0,s.jsx)("option",{value:"video",children:"Video"}),(0,s.jsx)("option",{value:"gallery",children:"Gallery"})]})}),(0,s.jsx)("div",{className:"w-full md:w-auto",children:(0,s.jsx)(P.z,{colorScheme:"red",size:"sm",className:"w-full md:w-auto",children:"Filter"})})]})})})]}),(0,s.jsx)(w,{search:a})]})]})}}},function(e){e.O(0,[7699,1994,5878,1445,1760,9799,6434,3464,7730,7676,5691,9864,906,2971,2117,1744],function(){return e(e.s=79151)}),_N_E=e.O()}]);