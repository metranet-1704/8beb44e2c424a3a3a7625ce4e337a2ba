(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3092],{34331:function(e,a,t){Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,61481)),Promise.resolve().then(t.bind(t,12749))},12749:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return K}});var s=t(57437),r=t(2265),l=t(33514),i=t(54175),d=t(25443),n=t(29565),o=t(89386),c=t(99087),m=t(61493),u=t(65874),h=t(34437),x=t(44379),g=t(90371),p=t(25045),b=t(41942),y=t(3003),j=t(98053),v=t(62737),f=t.n(v),N=t(30998),k=t(16463),w=t(48998),C=t.n(w),_=t(20610),S=t(41426),D=t(98978),z=t(85222),E=t(20408),M=t(1726);function P(e){let{isOpen:a,setIsUpdate:t,session:l,idDelete:i,onClose:d}=e,n=r.useRef(null),o=(0,_.p)(),[c,m]=r.useState(!1),h=async()=>{var e,a,s;m(!0);let r=await (0,j.Z)("DELETE","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/privileges/?privilege_id=").concat(i),{},{accept:"application/json",Authorization:"Bearer ".concat(null==l?void 0:null===(e=l.user)||void 0===e?void 0:e.access_token)});m(!1),200==r.status?(t(Math.random()),d(),o({title:"Success",description:r.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):o({title:"Error",description:null==r?void 0:null===(s=r.data)||void 0===s?void 0:null===(a=s.detail)||void 0===a?void 0:a.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,s.jsx)(S.a,{isOpen:a,leastDestructiveRef:n,onClose:d,children:(0,s.jsx)(D.Z,{children:(0,s.jsxs)(S._,{children:[(0,s.jsx)(z.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,s.jsx)(E.f,{children:"Apakah anda yakin ingin menghapus data ini?"}),(0,s.jsxs)(M.m,{children:[(0,s.jsx)(u.z,{ref:n,onClick:d,children:"Cancel"}),(0,s.jsx)(u.z,{colorScheme:"red",onClick:()=>h(),isLoading:c,ml:3,children:"Delete"})]})]})})})}var L=t(87138);function O(){let e=(0,k.useRouter)(),[a,t]=r.useState(0),[v,w]=r.useState(""),[_,S]=r.useState([]),[D,z]=r.useState(!0),[E,M]=r.useState(0),[O,K]=r.useState(0),[R,Y]=r.useState(0),{data:A}=(0,N.useSession)(),{isOpen:Z,onOpen:H,onClose:U}=(0,d.q)(),I=(0,l.b7)({data:_,columns:[{header:"Module Name",accessorKey:"display_name"},{header:"Create",accessorKey:"is_create",cell:e=>{let{row:a}=e;return(0,s.jsx)(n.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===a.original.is_create})}},{header:"Read",accessorKey:"is_read",cell:e=>{let{row:a}=e;return(0,s.jsx)(n.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===a.original.is_read})}},{header:"Update",accessorKey:"is_modify",cell:e=>{let{row:a}=e;return(0,s.jsx)(n.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===a.original.is_modify})}},{header:"Delete",accessorKey:"is_delete",cell:e=>{let{row:a}=e;return(0,s.jsx)(n.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===a.original.is_delete})}},{header:"Updated At",accessorKey:"updated_at",cell:e=>{let{row:a}=e;return f()(a.original.updated_at).isValid()?f()(a.original.updated_at).format("DD MMM YYYY, HH:mm"):"-"}},{header:"Created At",accessorKey:"created_at",cell:e=>{let{row:a}=e;return f()(a.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:a=>{let{row:t}=a,{id:r}=t.original;return(0,s.jsxs)(o.U,{spacing:"4",children:[(0,s.jsx)(c.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,s.jsx)(m.h,{size:"sm",icon:(0,s.jsx)(y.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>e.push("/dashboard/users/role/edit?aa=".concat(r))})}),(0,s.jsx)(c.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,s.jsx)(m.h,{size:"sm",icon:(0,s.jsx)(y.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{Y(r),H()}})})]})}}],getCoreRowModel:(0,i.sC)(),manualPagination:!0,pageCount:Math.ceil(E/10)});return r.useEffect(()=>{let e=async()=>{var e;z(!0);let a=await (0,j.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/privileges-roles/"),{page:O+1,limit:10,search:v},{accept:"application/json",Authorization:"Bearer ".concat(null==A?void 0:null===(e=A.user)||void 0===e?void 0:e.access_token)});z(!1),200===a.status&&(S(a.data.data.privilege_role_data),M(a.data.data.total_data))};A&&e()},[a,A,v,O]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P,{setIsUpdate:t,session:A,isOpen:Z,idDelete:R,onClose:U}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)(L.default,{href:"/dashboard/users/role/new",children:(0,s.jsx)(u.z,{colorScheme:"teal",children:"Add New"})})}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"m-2",children:(0,s.jsx)("div",{className:"max-w-md mx-auto",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(h.B,{size:"md",children:[(0,s.jsx)(x.I,{pr:"4rem",type:"text",bg:"white",placeholder:"search role",onKeyDown:e=>"Enter"===e.key&&w(e.target.value)}),(0,s.jsx)(g.x,{children:(0,s.jsx)(u.z,{size:"sm",children:(0,s.jsx)(b.U41,{className:"text-black dark:text-gray-700"})})})]})})})})})]}),(0,s.jsxs)("table",{className:"min-w-full mt-5 overflow-hidden text-sm bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md dark:bg-gray-700",children:[(0,s.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:I.getHeaderGroups().map(e=>(0,s.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var a,t;return(0,s.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(a=(t=e.column.columnDef).header)||void 0===a?void 0:a.call(t,e.getContext())},e.id)})},e.id))}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:D?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:9,className:"px-6 py-2 text-center text-gray-500",children:(0,s.jsx)(p.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):I.getRowModel().rows.map(e=>(0,s.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,s.jsx)("td",{className:"px-6 py-2 whitespace-nowrap",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})]}),(0,s.jsx)(C(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(E/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{K(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}function K(){return(0,s.jsxs)("div",{className:"px-4 pt-6",children:[(0,s.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,s.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Role"})})}),(0,s.jsxs)("div",{className:"p-4 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,s.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,s.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,s.jsx)(O,{})]})]})}},98053:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var s=t(38472),r=t(30998);async function l(e,a,t,l){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:l,url:a,params:t}:{validateStatus:()=>!1,method:e,headers:l,url:a,data:t};let d=await (0,s.Z)(i).catch(e=>e.response);return 401==d.status&&await (0,r.signOut)(),d}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}}},function(e){e.O(0,[7699,1994,8173,346,2322,5917,6300,8472,3867,3776,1846,1920,7138,9565,2971,7023,1744],function(){return e(e.s=34331)}),_N_E=e.O()}]);