(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5313],{42480:function(){},24826:function(e,t,a){Promise.resolve().then(a.t.bind(a,65878,23)),Promise.resolve().then(a.bind(a,81523)),Promise.resolve().then(a.bind(a,70049)),Promise.resolve().then(a.bind(a,10336))},10336:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var n=a(57437),r=a(2265),s=a(71594),i=a(24525),l=a(69340),d=a(58055),o=a(60187),c=a(25730),u=a(25810),m=a(8181),h=a(10883),p=a(68193),g=a(307),x=a(49089),f=a(67776),v=a(89427),b=a(71096),y=a.n(b),j=a(80605),N=a(99376),k=a(25103),w=a.n(k),C=a(78796),_=a(26553),S=a(48860),E=a(49270),I=a(16152),D=a(20517);function z(e){let{isOpen:t,setIsUpdate:a,session:s,idDelete:i,onClose:l}=e,d=r.useRef(null),o=(0,C.p)(),[c,m]=r.useState(!1),h=async()=>{var e,t,n;m(!0);let r=await (0,v.Z)("DELETE","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/destroy?module_id=").concat(i),{},{accept:"application/json",Authorization:"Bearer ".concat(null==s?void 0:null===(e=s.user)||void 0===e?void 0:e.access_token)});m(!1),200==r.status?(a(Math.random()),l(),o({title:"Success",description:r.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):o({title:"Error",description:null==r?void 0:null===(n=r.data)||void 0===n?void 0:null===(t=n.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,n.jsx)(_.a,{isOpen:t,leastDestructiveRef:d,onClose:l,children:(0,n.jsx)(S.Z,{children:(0,n.jsxs)(_._,{children:[(0,n.jsx)(E.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,n.jsx)(I.f,{children:"Apakah anda yakin ingin menghapus data ini?"}),(0,n.jsxs)(D.m,{children:[(0,n.jsx)(u.z,{ref:d,onClick:l,children:"Cancel"}),(0,n.jsx)(u.z,{colorScheme:"red",onClick:()=>h(),isLoading:c,ml:3,children:"Delete"})]})]})})})}var M=a(27648),L=a(43118);function R(){let e=(0,N.useRouter)(),[t,a]=r.useState(0),[b,k]=r.useState(""),[C,_]=r.useState([]),[S,E]=r.useState(!0),[I,D]=r.useState(0),[R,P]=r.useState(0),[G,A]=r.useState(0),{data:Y}=(0,j.useSession)(),{isOpen:O,onOpen:H,onClose:U}=(0,l.q)(),Z=(0,s.b7)({data:C,columns:[{header:"Module Name",accessorKey:"display_name"},{header:"Create",accessorKey:"is_create",cell:e=>{let{row:t}=e;return y()(t.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Updated At",accessorKey:"updated_at",cell:e=>{let{row:t}=e;return y()(t.original.updated_at).isValid()?y()(t.original.updated_at).format("DD MMM YYYY, HH:mm"):"-"}},{header:"Created At",accessorKey:"created_at",cell:e=>{let{row:t}=e;return y()(t.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:t=>{let{row:a}=t,{id:r}=a.original;return(0,n.jsxs)(d.U,{spacing:"4",children:[(0,n.jsx)(o.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,n.jsx)(c.h,{size:"sm",icon:(0,n.jsx)(f.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>e.push("/dashboard/users/module/edit?aa=".concat((0,L.P)(r)))})}),(0,n.jsx)(o.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,n.jsx)(c.h,{size:"sm",icon:(0,n.jsx)(f.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{A(r),H()}})})]})}}],getCoreRowModel:(0,i.sC)(),manualPagination:!0,pageCount:Math.ceil(I/10)});return r.useEffect(()=>{let e=async()=>{var e;E(!0);let t=await (0,v.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/modules/"),{page:R+1,limit:10,search:b},{accept:"application/json",Authorization:"Bearer ".concat(null==Y?void 0:null===(e=Y.user)||void 0===e?void 0:e.access_token)});E(!1),200===t.status&&(_(t.data.data.modules),D(t.data.data.total_modules))};Y&&e()},[t,Y,b,R]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{setIsUpdate:a,session:Y,isOpen:O,idDelete:G,onClose:U}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,n.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,n.jsx)(M.default,{href:"/dashboard/users/module/new",children:(0,n.jsx)(u.z,{colorScheme:"teal",children:"Add New"})})}),(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)("div",{className:"m-2",children:(0,n.jsx)("div",{className:"max-w-md mx-auto",children:(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)(m.B,{size:"md",children:[(0,n.jsx)(h.I,{pr:"4rem",type:"text",bg:"white",placeholder:"search modules",onKeyDown:e=>"Enter"===e.key&&k(e.target.value)}),(0,n.jsx)(p.x,{children:(0,n.jsx)(u.z,{size:"sm",className:"dark:bg-gray-200",children:(0,n.jsx)(x.U41,{className:"text-black dark:text-gray-700"})})})]})})})})})]}),(0,n.jsxs)("table",{className:"min-w-full mt-5 overflow-hidden text-sm bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md dark:bg-gray-700",children:[(0,n.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:Z.getHeaderGroups().map(e=>(0,n.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,a;return(0,n.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(a=e.column.columnDef).header)||void 0===t?void 0:t.call(a,e.getContext())},e.id)})},e.id))}),(0,n.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:S?(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:5,className:"px-6 py-2 text-center text-gray-500",children:(0,n.jsx)(g.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):Z.getRowModel().rows.map(e=>(0,n.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,n.jsx)("td",{className:"px-6 py-2",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})]}),(0,n.jsx)(w(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(I/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{P(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}function P(){return(0,n.jsxs)("div",{className:"px-4 pt-6",children:[(0,n.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,n.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,n.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Modules"})})}),(0,n.jsxs)("div",{className:"p-4 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,n.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,n.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,n.jsx)(R,{})]})]})}},43118:function(e,t,a){"use strict";a.d(t,{A:function(){return i},P:function(){return s}});var n=a(80928),r=a.n(n);function s(e){return encodeURIComponent(r().AES.encrypt(e.toString(),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString())}function i(e){return r().AES.decrypt(decodeURIComponent(e),"c2c9cfa669c5a7fd065c694e3c112f1aec09401e895ad77f72255158b9847d58").toString(r().enc.Utf8)}},89427:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(83464),r=a(80605);async function s(e,t,a,s){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:s,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:s,url:t,data:a};let l=await (0,n.Z)(i).catch(e=>e.response);return 401==l.status&&await (0,r.signOut)(),l}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},68193:function(e,t,a){"use strict";a.d(t,{x:function(){return u}});var n=a(8181),r=a(41531),s=a(68973),i=a(14096),l=a(57437),d=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),o=(0,s.G)(function(e,t){var a,r;let{placement:s="left",...i}=e,o=(0,n.m)(),c=o.field,u={["left"===s?"insetStart":"insetEnd"]:"0",width:null!=(a=null==c?void 0:c.height)?a:null==c?void 0:c.h,height:null!=(r=null==c?void 0:c.height)?r:null==c?void 0:c.h,fontSize:null==c?void 0:c.fontSize,...o.element};return(0,l.jsx)(d,{ref:t,__css:u,...i})});o.id="InputElement",o.displayName="InputElement";var c=(0,s.G)(function(e,t){let{className:a,...n}=e,r=(0,i.cx)("chakra-input__left-element",a);return(0,l.jsx)(o,{ref:t,placement:"left",className:r,...n})});c.id="InputLeftElement",c.displayName="InputLeftElement";var u=(0,s.G)(function(e,t){let{className:a,...n}=e,r=(0,i.cx)("chakra-input__right-element",a);return(0,l.jsx)(o,{ref:t,placement:"right",className:r,...n})});u.id="InputRightElement",u.displayName="InputRightElement"},8181:function(e,t,a){"use strict";a.d(t,{B:function(){return p},m:function(){return h}});var n=a(37371),r=a(1219),s=a(68973),i=a(9889),l=a(83707),d=a(41531),o=a(14096),c=a(2265),u=a(57437),[m,h]=(0,n.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),p=(0,s.G)(function(e,t){let a=(0,i.jC)("Input",e),{children:n,className:s,...h}=(0,l.Lr)(e),p=(0,o.cx)("chakra-input__group",s),g={},x=(0,r.W)(n),f=a.field;x.forEach(e=>{var t,n;a&&(f&&"InputLeftElement"===e.type.id&&(g.paddingStart=null!=(t=f.height)?t:f.h),f&&"InputRightElement"===e.type.id&&(g.paddingEnd=null!=(n=f.height)?n:f.h),"InputRightAddon"===e.type.id&&(g.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(g.borderStartRadius=0))});let v=x.map(t=>{var a,n;let r=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({size:(null==(a=t.props)?void 0:a.size)||e.size,variant:(null==(n=t.props)?void 0:n.variant)||e.variant});return"Input"!==t.type.id?(0,c.cloneElement)(t,r):(0,c.cloneElement)(t,Object.assign(r,g,t.props))});return(0,u.jsx)(d.m.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...a.group},"data-group":!0,...h,children:(0,u.jsx)(m,{value:a,children:v})})});p.displayName="InputGroup"},26553:function(e,t,a){"use strict";a.d(t,{_:function(){return d},a:function(){return l}});var n=a(34096),r=a(19383),s=a(68973),i=a(57437);function l(e){let{leastDestructiveRef:t,...a}=e;return(0,i.jsx)(r.u_,{...a,initialFocusRef:t})}var d=(0,s.G)((e,t)=>(0,i.jsx)(n.h,{ref:t,role:"alertdialog",...e}))},20517:function(e,t,a){"use strict";a.d(t,{m:function(){return d}});var n=a(19383),r=a(14096),s=a(68973),i=a(41531),l=a(57437),d=(0,s.G)((e,t)=>{let{className:a,...s}=e,d=(0,r.cx)("chakra-modal__footer",a),o={display:"flex",alignItems:"center",justifyContent:"flex-end",...(0,n.I_)().footer};return(0,l.jsx)(i.m.footer,{ref:t,...s,__css:o,className:d})});d.displayName="ModalFooter"}},function(e){e.O(0,[7699,1994,9701,5878,1445,1760,9799,3464,1612,9611,8191,8108,7648,2971,2117,1744],function(){return e(e.s=24826)}),_N_E=e.O()}]);