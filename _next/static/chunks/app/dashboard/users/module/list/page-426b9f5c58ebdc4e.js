(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5313],{42480:function(){},24826:function(e,t,a){Promise.resolve().then(a.t.bind(a,38173,23)),Promise.resolve().then(a.bind(a,10912)),Promise.resolve().then(a.bind(a,61481)),Promise.resolve().then(a.bind(a,55134))},55134:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var s=a(57437),r=a(2265),l=a(33514),i=a(54175),n=a(25443),d=a(89386),c=a(99087),o=a(61493),u=a(65874),m=a(34437),h=a(44379),g=a(90371),x=a(25045),p=a(41942),b=a(3003),f=a(98053),y=a(62737),v=a.n(y),j=a(30998),N=a(16463),k=a(48998),w=a.n(k),C=a(20610),S=a(41426),D=a(98978),_=a(85222),E=a(20408),M=a(1726);function z(e){let{isOpen:t,setIsUpdate:a,session:l,idDelete:i,onClose:n}=e,d=r.useRef(null),c=(0,C.p)(),[o,m]=r.useState(!1),h=async()=>{var e,t,s;m(!0);let r=await (0,f.Z)("DELETE","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/destroy?module_id=").concat(i),{},{accept:"application/json",Authorization:"Bearer ".concat(null==l?void 0:null===(e=l.user)||void 0===e?void 0:e.access_token)});m(!1),200==r.status?(a(Math.random()),n(),c({title:"Success",description:r.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):c({title:"Error",description:null==r?void 0:null===(s=r.data)||void 0===s?void 0:null===(t=s.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,s.jsx)(S.a,{isOpen:t,leastDestructiveRef:d,onClose:n,children:(0,s.jsx)(D.Z,{children:(0,s.jsxs)(S._,{children:[(0,s.jsx)(_.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,s.jsx)(E.f,{children:"Apakah anda yakin ingin menghapus data ini?"}),(0,s.jsxs)(M.m,{children:[(0,s.jsx)(u.z,{ref:d,onClick:n,children:"Cancel"}),(0,s.jsx)(u.z,{colorScheme:"red",onClick:()=>h(),isLoading:o,ml:3,children:"Delete"})]})]})})})}var P=a(87138),Y=a(22114);function A(){let e=(0,N.useRouter)(),[t,a]=r.useState(0),[y,k]=r.useState(""),[C,S]=r.useState([]),[D,_]=r.useState(!0),[E,M]=r.useState(0),[A,L]=r.useState(0),[R,H]=r.useState(0),{data:U}=(0,j.useSession)(),{isOpen:I,onOpen:O,onClose:Z}=(0,n.q)(),K=(0,l.b7)({data:C,columns:[{header:"Module Name",accessorKey:"display_name"},{header:"Create",accessorKey:"is_create",cell:e=>{let{row:t}=e;return v()(t.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Updated At",accessorKey:"updated_at",cell:e=>{let{row:t}=e;return v()(t.original.updated_at).isValid()?v()(t.original.updated_at).format("DD MMM YYYY, HH:mm"):"-"}},{header:"Created At",accessorKey:"created_at",cell:e=>{let{row:t}=e;return v()(t.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:t=>{let{row:a}=t,{id:r}=a.original;return(0,s.jsxs)(d.U,{spacing:"4",children:[(0,s.jsx)(c.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,s.jsx)(o.h,{size:"sm",icon:(0,s.jsx)(b.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>e.push("/dashboard/users/module/edit?aa=".concat((0,Y.P)(r)))})}),(0,s.jsx)(c.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,s.jsx)(o.h,{size:"sm",icon:(0,s.jsx)(b.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{H(r),O()}})})]})}}],getCoreRowModel:(0,i.sC)(),manualPagination:!0,pageCount:Math.ceil(E/10)});return r.useEffect(()=>{let e=async()=>{var e;_(!0);let t=await (0,f.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/"),{page:A+1,limit:10,search:y},{accept:"application/json",Authorization:"Bearer ".concat(null==U?void 0:null===(e=U.user)||void 0===e?void 0:e.access_token)});_(!1),200===t.status&&(S(t.data.data.modules),M(t.data.data.total_modules))};U&&e()},[t,U,y,A]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z,{setIsUpdate:a,session:U,isOpen:I,idDelete:R,onClose:Z}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)(P.default,{href:"/dashboard/users/module/new",children:(0,s.jsx)(u.z,{colorScheme:"teal",children:"Add New"})})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"m-2",children:(0,s.jsx)("div",{className:"max-w-md mx-auto",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(m.B,{size:"md",children:[(0,s.jsx)(h.I,{pr:"4rem",type:"text",bg:"white",placeholder:"search modules",onKeyDown:e=>"Enter"===e.key&&k(e.target.value)}),(0,s.jsx)(g.x,{children:(0,s.jsx)(u.z,{size:"sm",className:"dark:bg-gray-200",children:(0,s.jsx)(p.U41,{className:"text-black dark:text-gray-700"})})})]})})})})})]}),(0,s.jsxs)("table",{className:"min-w-full mt-5 overflow-hidden text-sm bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md dark:bg-gray-700",children:[(0,s.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:K.getHeaderGroups().map(e=>(0,s.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,a;return(0,s.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(a=e.column.columnDef).header)||void 0===t?void 0:t.call(a,e.getContext())},e.id)})},e.id))}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:D?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:5,className:"px-6 py-2 text-center text-gray-500",children:(0,s.jsx)(x.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):K.getRowModel().rows.map(e=>(0,s.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,s.jsx)("td",{className:"px-6 py-2",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})]}),(0,s.jsx)(w(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(E/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{L(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}function L(){return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Modules"})})}),(0,s.jsxs)("div",{className:"p-4 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,s.jsx)(A,{})]})]})}},22114:function(e,t,a){"use strict";a.d(t,{A:function(){return i},P:function(){return l}});var s=a(58110),r=a.n(s);function l(e){return encodeURIComponent(r().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function i(e){return r().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(r().enc.Utf8)}},98053:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(38472),r=a(30998);async function l(e,t,a,l){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:l,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:l,url:t,data:a};let n=await (0,s.Z)(i).catch(e=>e.response);return 401==n.status&&await (0,r.signOut)(),n}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(e){e.O(0,[7699,1994,8173,346,2322,753,6300,8472,5233,3776,1846,8528,8110,7138,2971,7023,1744],function(){return e(e.s=24826)}),_N_E=e.O()}]);