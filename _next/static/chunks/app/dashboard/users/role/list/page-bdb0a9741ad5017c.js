(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3092],{34331:function(e,t,a){Promise.resolve().then(a.t.bind(a,65878,23)),Promise.resolve().then(a.bind(a,81523)),Promise.resolve().then(a.bind(a,70049)),Promise.resolve().then(a.bind(a,15104))},99376:function(e,t,a){"use strict";var r=a(35475);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}}),a.o(r,"useServerInsertedHTML")&&a.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},15104:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var r=a(57437),s=a(2265),n=a(71594),i=a(24525),l=a(69340),d=a(90316),o=a(58055),c=a(60187),u=a(25730),m=a(25810),h=a(8181),p=a(10883),x=a(68193),g=a(307),f=a(49089),v=a(67776),y=a(89427),b=a(71096),j=a.n(b),k=a(80605),N=a(99376),_=a(25103),w=a.n(_),S=a(78796),C=a(26553),E=a(48860),I=a(49270),z=a(16152),D=a(20517);function L(e){let{isOpen:t,setIsUpdate:a,session:n,idDelete:i,onClose:l}=e,d=s.useRef(null),o=(0,S.p)(),[c,u]=s.useState(!1),h=async()=>{var e,t,r;u(!0);let s=await (0,y.Z)("DELETE","".concat("http://180.250.66.130:3037/","api/v1/privileges/?privilege_id=").concat(i),{},{accept:"application/json",Authorization:"Bearer ".concat(null==n?void 0:null===(e=n.user)||void 0===e?void 0:e.access_token)});u(!1),200==s.status?(a(Math.random()),l(),o({title:"Success",description:s.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):o({title:"Error",description:null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(t=r.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,r.jsx)(C.a,{isOpen:t,leastDestructiveRef:d,onClose:l,children:(0,r.jsx)(E.Z,{children:(0,r.jsxs)(C._,{children:[(0,r.jsx)(I.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,r.jsx)(z.f,{children:"Apakah anda yakin ingin menghapus data ini?"}),(0,r.jsxs)(D.m,{children:[(0,r.jsx)(m.z,{ref:d,onClick:l,children:"Cancel"}),(0,r.jsx)(m.z,{colorScheme:"red",onClick:()=>h(),isLoading:c,ml:3,children:"Delete"})]})]})})})}var M=a(27648);function P(){let e=(0,N.useRouter)(),[t,a]=s.useState(0),[b,_]=s.useState(""),[S,C]=s.useState([]),[E,I]=s.useState(!0),[z,D]=s.useState(0),[P,R]=s.useState(0),[G,O]=s.useState(0),{data:W}=(0,k.useSession)(),{isOpen:A,onOpen:K,onClose:B}=(0,l.q)(),H=(0,n.b7)({data:S,columns:[{header:"Module Name",accessorKey:"display_name"},{header:"Create",accessorKey:"is_create",cell:e=>{let{row:t}=e;return(0,r.jsx)(d.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_create})}},{header:"Read",accessorKey:"is_read",cell:e=>{let{row:t}=e;return(0,r.jsx)(d.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_read})}},{header:"Update",accessorKey:"is_modify",cell:e=>{let{row:t}=e;return(0,r.jsx)(d.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_modify})}},{header:"Delete",accessorKey:"is_delete",cell:e=>{let{row:t}=e;return(0,r.jsx)(d.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_delete})}},{header:"Updated At",accessorKey:"updated_at",cell:e=>{let{row:t}=e;return j()(t.original.updated_at).isValid()?j()(t.original.updated_at).format("DD MMM YYYY, HH:mm"):"-"}},{header:"Created At",accessorKey:"created_at",cell:e=>{let{row:t}=e;return j()(t.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:t=>{let{row:a}=t,{id:s}=a.original;return(0,r.jsxs)(o.U,{spacing:"4",children:[(0,r.jsx)(c.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,r.jsx)(u.h,{size:"sm",icon:(0,r.jsx)(v.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>e.push("/dashboard/users/role/edit?aa=".concat(s))})}),(0,r.jsx)(c.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,r.jsx)(u.h,{size:"sm",icon:(0,r.jsx)(v.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{O(s),K()}})})]})}}],getCoreRowModel:(0,i.sC)(),manualPagination:!0,pageCount:Math.ceil(z/10)});return s.useEffect(()=>{let e=async()=>{var e;I(!0);let t=await (0,y.Z)("GET","".concat("http://180.250.66.130:3037/","api/v1/privileges-roles/"),{page:P+1,limit:10,search:b},{accept:"application/json",Authorization:"Bearer ".concat(null==W?void 0:null===(e=W.user)||void 0===e?void 0:e.access_token)});I(!1),200===t.status&&(C(t.data.data.privilege_role_data),D(t.data.data.total_data))};W&&e()},[t,W,b,P]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{setIsUpdate:a,session:W,isOpen:A,idDelete:G,onClose:B}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,r.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,r.jsx)(M.default,{href:"/dashboard/users/role/new",children:(0,r.jsx)(m.z,{colorScheme:"teal",children:"Add New"})})}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)("div",{className:"max-w-md mx-auto",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)(h.B,{size:"md",children:[(0,r.jsx)(p.I,{pr:"4rem",type:"text",bg:"white",placeholder:"search role",onKeyDown:e=>"Enter"===e.key&&_(e.target.value)}),(0,r.jsx)(x.x,{children:(0,r.jsx)(m.z,{size:"sm",children:(0,r.jsx)(f.U41,{className:"text-black dark:text-gray-700"})})})]})})})})})]}),(0,r.jsxs)("table",{className:"min-w-full mt-5 overflow-hidden text-sm bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md dark:bg-gray-700",children:[(0,r.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:H.getHeaderGroups().map(e=>(0,r.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,a;return(0,r.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(a=e.column.columnDef).header)||void 0===t?void 0:t.call(a,e.getContext())},e.id)})},e.id))}),(0,r.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:E?(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:9,className:"px-6 py-2 text-center text-gray-500",children:(0,r.jsx)(g.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):H.getRowModel().rows.map(e=>(0,r.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,r.jsx)("td",{className:"px-6 py-2 whitespace-nowrap",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})]}),(0,r.jsx)(w(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(z/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{R(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}function R(){return(0,r.jsxs)("div",{className:"px-4 pt-6",children:[(0,r.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,r.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,r.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Role"})})}),(0,r.jsxs)("div",{className:"p-4 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,r.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,r.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,r.jsx)(P,{})]})]})}},89427:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(83464),s=a(80605);async function n(e,t,a,n){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:n,url:t,params:a}:{validateStatus:()=>!1,method:e,headers:n,url:t,data:a};let l=await (0,r.Z)(i).catch(e=>e.response);return 401==l.status&&await (0,s.signOut)(),l}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},68193:function(e,t,a){"use strict";a.d(t,{x:function(){return u}});var r=a(8181),s=a(41531),n=a(68973),i=a(14096),l=a(57437),d=(0,s.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),o=(0,n.G)(function(e,t){var a,s;let{placement:n="left",...i}=e,o=(0,r.m)(),c=o.field,u={["left"===n?"insetStart":"insetEnd"]:"0",width:null!=(a=null==c?void 0:c.height)?a:null==c?void 0:c.h,height:null!=(s=null==c?void 0:c.height)?s:null==c?void 0:c.h,fontSize:null==c?void 0:c.fontSize,...o.element};return(0,l.jsx)(d,{ref:t,__css:u,...i})});o.id="InputElement",o.displayName="InputElement";var c=(0,n.G)(function(e,t){let{className:a,...r}=e,s=(0,i.cx)("chakra-input__left-element",a);return(0,l.jsx)(o,{ref:t,placement:"left",className:s,...r})});c.id="InputLeftElement",c.displayName="InputLeftElement";var u=(0,n.G)(function(e,t){let{className:a,...r}=e,s=(0,i.cx)("chakra-input__right-element",a);return(0,l.jsx)(o,{ref:t,placement:"right",className:s,...r})});u.id="InputRightElement",u.displayName="InputRightElement"},8181:function(e,t,a){"use strict";a.d(t,{B:function(){return p},m:function(){return h}});var r=a(37371),s=a(1219),n=a(68973),i=a(9889),l=a(83707),d=a(41531),o=a(14096),c=a(2265),u=a(57437),[m,h]=(0,r.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),p=(0,n.G)(function(e,t){let a=(0,i.jC)("Input",e),{children:r,className:n,...h}=(0,l.Lr)(e),p=(0,o.cx)("chakra-input__group",n),x={},g=(0,s.W)(r),f=a.field;g.forEach(e=>{var t,r;a&&(f&&"InputLeftElement"===e.type.id&&(x.paddingStart=null!=(t=f.height)?t:f.h),f&&"InputRightElement"===e.type.id&&(x.paddingEnd=null!=(r=f.height)?r:f.h),"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0))});let v=g.map(t=>{var a,r;let s=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({size:(null==(a=t.props)?void 0:a.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?(0,c.cloneElement)(t,s):(0,c.cloneElement)(t,Object.assign(s,x,t.props))});return(0,u.jsx)(d.m.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...a.group},"data-group":!0,...h,children:(0,u.jsx)(m,{value:a,children:v})})});p.displayName="InputGroup"},93088:function(e,t,a){"use strict";a.d(t,{K:function(){return c}});var r=a(41531),s=a(57437),n=e=>(0,s.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});n.displayName="StackItem";var i=a(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=a(1219),d=a(68973),o=a(2265),c=(0,d.G)((e,t)=>{let{isInline:a,direction:d,align:c,justify:u,spacing:m="0.5rem",wrap:h,children:p,divider:x,className:g,shouldWrapChildren:f,...v}=e,y=a?"row":null!=d?d:"column",b=(0,o.useMemo)(()=>(function(e){var t;let{spacing:a,direction:r}=e,s={column:{my:a,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:a,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:a,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:a,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>s[e],Array.isArray(r)?r.map(e=>null===e?null:t(e)):(0,i.Kn)(r)?Object.keys(r).reduce((e,a)=>(e[a]=t(r[a]),e),{}):null!=r?t(r):null)}})({spacing:m,direction:y}),[m,y]),j=!!x,k=!f&&!j,N=(0,o.useMemo)(()=>{let e=(0,l.W)(p);return k?e:e.map((t,a)=>{let r=void 0!==t.key?t.key:a,i=a+1===e.length,l=(0,s.jsx)(n,{children:t},r),d=f?l:t;if(!j)return d;let c=(0,o.cloneElement)(x,{__css:b});return(0,s.jsxs)(o.Fragment,{children:[d,i?null:c]},r)})},[x,b,j,k,f,p]),_=(0,i.cx)("chakra-stack",g);return(0,s.jsx)(r.m.div,{ref:t,display:"flex",alignItems:c,justifyContent:u,flexDirection:y,flexWrap:h,gap:j?void 0:m,className:_,...v,children:N})});c.displayName="Stack"},26553:function(e,t,a){"use strict";a.d(t,{_:function(){return d},a:function(){return l}});var r=a(34096),s=a(19383),n=a(68973),i=a(57437);function l(e){let{leastDestructiveRef:t,...a}=e;return(0,i.jsx)(s.u_,{...a,initialFocusRef:t})}var d=(0,n.G)((e,t)=>(0,i.jsx)(r.h,{ref:t,role:"alertdialog",...e}))},20517:function(e,t,a){"use strict";a.d(t,{m:function(){return d}});var r=a(19383),s=a(14096),n=a(68973),i=a(41531),l=a(57437),d=(0,n.G)((e,t)=>{let{className:a,...n}=e,d=(0,s.cx)("chakra-modal__footer",a),o={display:"flex",alignItems:"center",justifyContent:"flex-end",...(0,r.I_)().footer};return(0,l.jsx)(i.m.footer,{ref:t,...n,__css:o,className:d})});d.displayName="ModalFooter"}},function(e){e.O(0,[7699,1994,9701,5878,1445,1760,9799,3464,1612,8191,8108,7648,316,2971,2117,1744],function(){return e(e.s=34331)}),_N_E=e.O()}]);