(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8540],{60237:function(e,t,n){Promise.resolve().then(n.t.bind(n,65878,23)),Promise.resolve().then(n.bind(n,81523)),Promise.resolve().then(n.bind(n,70049)),Promise.resolve().then(n.bind(n,53773))},53773:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var a=n(57437),r=n(2265),i=n(71594),s=n(24525),l=n(69340),o=n(58055),c=n(60187),d=n(25730),u=n(307),m=n(67776),h=n(89427),x=n(80605),f=n(99376),v=n(25103),g=n.n(v),p=n(78796),y=n(26553),b=n(48860),j=n(49270),w=n(16152),k=n(20517),C=n(25810);function N(e){let{isOpen:t,setIsUpdate:n,session:i,idDelete:s,onClose:l}=e,o=r.useRef(null),c=(0,p.p)(),[d,u]=r.useState(!1),m=async()=>{var e;u(!0);let t=await (0,h.Z)("DELETE","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/articles/?article_id=").concat(s),{},{accept:"application/json",Authorization:"Bearer ".concat(null==i?void 0:null===(e=i.user)||void 0===e?void 0:e.access_token)});u(!1),200==t.status?(n(Math.random()),l(),c({title:"Success",description:t.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):c({title:"Error",description:t.data.detail.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,a.jsx)(y.a,{isOpen:t,leastDestructiveRef:o,onClose:l,children:(0,a.jsx)(b.Z,{children:(0,a.jsxs)(y._,{children:[(0,a.jsx)(j.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,a.jsx)(w.f,{children:"Apakah anda yakin ingin menghapus artikel ini?"}),(0,a.jsxs)(k.m,{children:[(0,a.jsx)(C.z,{ref:o,onClick:l,children:"Cancel"}),(0,a.jsx)(C.z,{colorScheme:"red",onClick:()=>m(),isLoading:d,ml:3,children:"Delete"})]})]})})})}function S(){let e=(0,f.useRouter)(),[t,n]=r.useState(0),[v,p]=r.useState([]),[y,b]=r.useState(!0),[j,w]=r.useState(0),[k,C]=r.useState(0),[S,E]=r.useState(0),{data:_}=(0,x.useSession)(),{isOpen:L,onOpen:T,onClose:I}=(0,l.q)(),D=(0,i.b7)({data:v,columns:[{header:"Email",accessorKey:"email"},{header:"First Name",accessorKey:"first_name"},{header:"Last Name",accessorKey:"last_name"},{header:"Action",id:"action",cell:t=>{let{row:n}=t,{id:r}=n.original;return(0,a.jsxs)(o.U,{spacing:"4",children:[(0,a.jsx)(c.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,a.jsx)(d.h,{size:"sm",icon:(0,a.jsx)(m.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>e.push("/dashboard/trending-topic/edit?aa=".concat(r))})}),(0,a.jsx)(c.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,a.jsx)(d.h,{size:"sm",icon:(0,a.jsx)(m.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{E(r),T()}})})]})}}],getCoreRowModel:(0,s.sC)(),manualPagination:!0,pageCount:Math.ceil(j/10)});return r.useEffect(()=>{let e=async()=>{var e;b(!0);let t=await (0,h.Z)("GET","".concat("http://10.177.2.133:3037/uzcms-odcdc/","api/v1/users/"),{page:k+1,limit:10},{accept:"application/json",Authorization:"Bearer ".concat(null==_?void 0:null===(e=_.user)||void 0===e?void 0:e.access_token)});b(!1),200===t.status&&(p(t.data.data.users),w(t.data.data.total_users))};_&&e()},[t,_,k]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{setIsUpdate:n,session:_,isOpen:L,idDelete:S,onClose:I}),(0,a.jsx)("div",{className:"overflow-hidden border border-gray-200 rounded-lg shadow-md",children:(0,a.jsxs)("table",{className:"min-w-full text-xs bg-white border border-gray-200 divide-y divide-gray-200 dark:bg-gray-700",children:[(0,a.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:D.getHeaderGroups().map(e=>(0,a.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,n;return(0,a.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(n=e.column.columnDef).header)||void 0===t?void 0:t.call(n,e.getContext())},e.id)})},e.id))}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:y?(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:5,className:"px-6 py-4 text-center text-gray-500",children:(0,a.jsx)(u.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):D.getRowModel().rows.map(e=>(0,a.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})}),(0,a.jsx)(g(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(j/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{C(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}var E=n(25922),_=n(8181),L=n(10883),T=n(68193),I=n(49089);function D(){let{theme:e}=(0,E.F)(),[t,n]=r.useState("");return(0,a.jsxs)("div",{className:"px-4 pt-6",children:[(0,a.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,a.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Users List"})}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("div",{className:"m-2",children:(0,a.jsx)("div",{className:"max-w-md mx-auto",children:(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)(_.B,{size:"md",children:[(0,a.jsx)(L.I,{pr:"4.5rem",type:"text",placeholder:"search article",onKeyDown:e=>"Enter"===e.key&&n(e.target.value)}),(0,a.jsx)(T.x,{children:(0,a.jsx)(C.z,{size:"sm",children:(0,a.jsx)(I.U41,{})})})]})})})})})]}),(0,a.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,a.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,a.jsx)(S,{})]})]})}},89427:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(83464),r=n(80605);async function i(e,t,n,i){try{let s;s="GET"==e?{validateStatus:()=>!1,method:e,headers:i,url:t,params:n}:{validateStatus:()=>!1,method:e,headers:i,url:t,data:n};let l=await (0,a.Z)(s).catch(e=>e.response);return 401==l.status&&await (0,r.signOut)(),l}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},25730:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var a=n(25810),r=n(68973),i=n(2265),s=n(57437),l=(0,r.G)((e,t)=>{let{icon:n,children:r,isRound:l,"aria-label":o,...c}=e,d=n||r,u=(0,i.isValidElement)(d)?(0,i.cloneElement)(d,{"aria-hidden":!0,focusable:!1}):null;return(0,s.jsx)(a.z,{padding:"0",borderRadius:l?"full":void 0,ref:t,"aria-label":o,...c,children:u})});l.displayName="IconButton"},69340:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var a=n(2265),r="undefined"!=typeof window&&window.document&&window.document.createElement?a.useLayoutEffect:a.useEffect;function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,a.useRef)(e);return r(()=>{n.current=e}),(0,a.useCallback)(function(){for(var e,t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];return null==(e=n.current)?void 0:e.call(n,...a)},t)}var s=n(99708);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onClose:t,onOpen:n,isOpen:r,id:l}=e,o=i(n),c=i(t),[d,u]=(0,a.useState)(e.defaultIsOpen||!1),[m,h]=function(e,t){let n=void 0!==e;return[n,n&&void 0!==e?e:t]}(r,d),x=function(e,t){let n=(0,a.useId)();return(0,a.useMemo)(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}(l,"disclosure"),f=(0,a.useCallback)(()=>{m||u(!1),null==c||c()},[m,c]),v=(0,a.useCallback)(()=>{m||u(!0),null==o||o()},[m,o]),g=(0,a.useCallback)(()=>{(h?f:v)()},[h,v,f]);return{isOpen:!!h,onOpen:v,onClose:f,onToggle:g,isControlled:m,getButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":h,"aria-controls":x,onClick:(0,s.v0)(e.onClick,g)}},getDisclosureProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,hidden:!h,id:x}}}}},34096:function(e,t,n){"use strict";n.d(t,{h:function(){return p}});var a=n(41531),r=n(8588),i=n(14096),s=n(48614),l=n(74669),o=n(2265),c=n(57437),d={initial:"initial",animate:"enter",exit:"exit",variants:{initial:e=>{var t;let{offsetX:n,offsetY:a,transition:i,transitionEnd:s,delay:l}=e;return{opacity:0,x:n,y:a,transition:null!=(t=null==i?void 0:i.exit)?t:r.p$.exit(r.Sh.exit,l),transitionEnd:null==s?void 0:s.exit}},enter:e=>{var t;let{transition:n,transitionEnd:a,delay:i}=e;return{opacity:1,x:0,y:0,transition:null!=(t=null==n?void 0:n.enter)?t:r.p$.enter(r.Sh.enter,i),transitionEnd:null==a?void 0:a.enter}},exit:e=>{var t;let{offsetY:n,offsetX:a,transition:i,transitionEnd:s,reverse:l,delay:o}=e,c={x:a,y:n};return{opacity:0,transition:null!=(t=null==i?void 0:i.exit)?t:r.p$.exit(r.Sh.exit,o),...l?{...c,transitionEnd:null==s?void 0:s.exit}:{transitionEnd:{...c,...null==s?void 0:s.exit}}}}}};(0,o.forwardRef)(function(e,t){let{unmountOnExit:n,in:a,reverse:r=!0,className:o,offsetX:u=0,offsetY:m=8,transition:h,transitionEnd:x,delay:f,...v}=e,g=!n||a&&n,p=a||n?"enter":"exit",y={offsetX:u,offsetY:m,reverse:r,transition:h,transitionEnd:x,delay:f};return(0,c.jsx)(s.M,{custom:y,children:g&&(0,c.jsx)(l.E.div,{ref:t,className:(0,i.cx)("chakra-offset-slide",o),custom:y,...d,animate:p,...v})})}).displayName="SlideFade";var u={initial:"exit",animate:"enter",exit:"exit",variants:{exit:e=>{var t;let{reverse:n,initialScale:a,transition:i,transitionEnd:s,delay:l}=e;return{opacity:0,...n?{scale:a,transitionEnd:null==s?void 0:s.exit}:{transitionEnd:{scale:a,...null==s?void 0:s.exit}},transition:null!=(t=null==i?void 0:i.exit)?t:r.p$.exit(r.Sh.exit,l)}},enter:e=>{var t;let{transitionEnd:n,transition:a,delay:i}=e;return{opacity:1,scale:1,transition:null!=(t=null==a?void 0:a.enter)?t:r.p$.enter(r.Sh.enter,i),transitionEnd:null==n?void 0:n.enter}}}};(0,o.forwardRef)(function(e,t){let{unmountOnExit:n,in:a,reverse:r=!0,initialScale:o=.95,className:d,transition:m,transitionEnd:h,delay:x,...f}=e,v=!n||a&&n,g=a||n?"enter":"exit",p={initialScale:o,reverse:r,transition:m,transitionEnd:h,delay:x};return(0,c.jsx)(s.M,{custom:p,children:v&&(0,c.jsx)(l.E.div,{ref:t,className:(0,i.cx)("chakra-offset-slide",d),...u,animate:g,custom:p,...f})})}).displayName="ScaleFade";var m={slideInBottom:{...d,custom:{offsetY:16,reverse:!0}},slideInRight:{...d,custom:{offsetX:16,reverse:!0}},slideInTop:{...d,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...d,custom:{offsetX:-16,reverse:!0}},scale:{...u,custom:{initialScale:.95,reverse:!0}},none:{}},h=(0,a.m)(l.E.section),x=e=>m[e||"none"],f=(0,o.forwardRef)((e,t)=>{let{preset:n,motionProps:a=x(n),...r}=e;return(0,c.jsx)(h,{ref:t,...a,...r})});f.displayName="ModalTransition";var v=n(39005),g=n(19383),p=(0,n(68973).G)((e,t)=>{let{className:n,children:r,containerProps:s,motionProps:l,...o}=e,{getDialogProps:d,getDialogContainerProps:u}=(0,g.vR)(),m=d(o,t),h=u(s),x=(0,i.cx)("chakra-modal__content",n),p=(0,g.I_)(),y={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...p.dialog},b={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...p.dialogContainer},{motionPreset:j}=(0,g.vR)();return(0,c.jsx)(v.M,{children:(0,c.jsx)(a.m.div,{...h,className:"chakra-modal__content-container",tabIndex:-1,__css:b,children:(0,c.jsx)(f,{preset:j,motionProps:l,className:x,...m,__css:y,children:r})})})});p.displayName="ModalContent"},26553:function(e,t,n){"use strict";n.d(t,{_:function(){return o},a:function(){return l}});var a=n(34096),r=n(19383),i=n(68973),s=n(57437);function l(e){let{leastDestructiveRef:t,...n}=e;return(0,s.jsx)(r.u_,{...n,initialFocusRef:t})}var o=(0,i.G)((e,t)=>(0,s.jsx)(a.h,{ref:t,role:"alertdialog",...e}))},20517:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var a=n(19383),r=n(14096),i=n(68973),s=n(41531),l=n(57437),o=(0,i.G)((e,t)=>{let{className:n,...i}=e,o=(0,r.cx)("chakra-modal__footer",n),c={display:"flex",alignItems:"center",justifyContent:"flex-end",...(0,a.I_)().footer};return(0,l.jsx)(s.m.footer,{ref:t,...i,__css:c,className:o})});o.displayName="ModalFooter"},25922:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var a=n(2265),r=["light","dark"],i="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=a.createContext(void 0),o={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=a.useContext(l))?e:o},d=e=>a.useContext(l)?e.children:a.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=s?"system":"light",attribute:g="data-theme",value:p,children:y,nonce:b}=e,[j,w]=a.useState(()=>x(c,m)),[k,C]=a.useState(()=>x(c)),N=p?Object.values(p):d,S=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=v());let a=p?p[t]:t,i=n?f():null,l=document.documentElement;if("class"===g?(l.classList.remove(...N),a&&l.classList.add(a)):a?l.setAttribute(g,a):l.removeAttribute(g),o){let e=r.includes(m)?m:null,n=r.includes(t)?t:e;l.style.colorScheme=n}null==i||i()},[]),E=a.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),_=a.useCallback(e=>{C(v(e)),"system"===j&&s&&!t&&S("system")},[j,t]);a.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),a.useEffect(()=>{let e=e=>{e.key===c&&E(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),a.useEffect(()=>{S(null!=t?t:j)},[t,j]);let L=a.useMemo(()=>({theme:j,setTheme:E,forcedTheme:t,resolvedTheme:"system"===j?k:j,themes:s?[...d,"system"]:d,systemTheme:s?k:void 0}),[j,E,t,k,s,d]);return a.createElement(l.Provider,{value:L},a.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:o,storageKey:c,themes:d,defaultTheme:m,attribute:g,value:p,children:y,attrs:N,nonce:b}),y)},h=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:l,enableColorScheme:o,defaultTheme:c,value:d,attrs:u,nonce:m}=e,h="system"===c,x="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),f=o?(r.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=d?d[e]:e,i=t?e+"|| ''":"'".concat(a,"'"),l="";return o&&n&&!t&&r.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||a?l+="c.add(".concat(i,")"):l+="null":a&&(l+="d[s](n,".concat(i,")")),l},g=t?"!function(){".concat(x).concat(v(t),"}()"):l?"!function(){try{".concat(x,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(c,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(x,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(v(d?"x[e]":"e",!0),"}else{").concat(v(c,!1,!1),";}").concat(f,"}catch(t){}}();");return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})}),x=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}},function(e){e.O(0,[7699,1994,5878,1445,1760,9799,6434,3464,7730,7676,5884,2971,2117,1744],function(){return e(e.s=60237)}),_N_E=e.O()}]);