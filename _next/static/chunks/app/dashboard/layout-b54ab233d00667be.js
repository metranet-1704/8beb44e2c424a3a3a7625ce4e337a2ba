(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7663],{37741:function(e,s,a){Promise.resolve().then(a.bind(a,48311)),Promise.resolve().then(a.bind(a,50589))},48311:function(e,s,a){"use strict";a.d(s,{default:function(){return p}});var r=a(57437),l=a(2265),t=a(37996),i=a(25922),d=a(14123),n=a(60187),o=a(722);function c(){let{theme:e,setTheme:s}=(0,i.F)(),[a,c]=l.useState(!1),x=(0,o.ac)({maxWidth:767}),{setColorMode:h}=(0,d.If)();return(l.useEffect(()=>{c(!0)},[]),a)?(0,r.jsx)(r.Fragment,{children:"dark"==e?(0,r.jsx)(n.u,{hasArrow:!0,label:!x&&"Light Mode",children:(0,r.jsx)("span",{children:(0,r.jsx)(t.kXG,{onClick:()=>{s("light"),h("light")},className:"w-5 h-5 -mt-2 lg:mt-0 hover:text-red-500 hover:cursor-pointer"})})}):(0,r.jsx)(n.u,{hasArrow:!0,label:!x&&"Dark Mode",children:(0,r.jsx)("span",{children:(0,r.jsx)(t.wOW,{onClick:()=>{s("dark"),h("dark")},className:"w-5 h-5 hover:text-red-500 hover:cursor-pointer"})})})}):(0,r.jsx)("div",{className:"w-5 h-5 bg-gray-200 rounded-full"})}var x=a(27648),h=a(33145);function u(){let{theme:e}=(0,i.F)(),[s,a]=l.useState(!1);return(l.useEffect(()=>{a(!0)},[]),s)?(0,r.jsx)(h.default,{src:"dark"==e?"/images/uzonewhite.png":"/images/uzone_lightmode.webp",className:"w-24 lg:w-[100px] h-[22px] dark:h-[30px]",alt:"logo",width:160,height:40}):(0,r.jsx)("div",{className:"w-40 h-10 bg-gray-200 rounded-md"})}var g=a(61978),f=a(1326),b=a(83930),m=a(22744),j=a(99376);function p(){let{onOpen:e}=(0,g.A)(),{statusSave:s}=(0,b.k)(),a=(0,j.usePathname)();return(0,r.jsx)("nav",{className:"fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:(0,r.jsx)("div",{className:"px-3 py-4 lg:px-5 lg:pl-3",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center justify-start",children:[(0,r.jsx)("button",{onClick:e,className:"p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:(0,r.jsx)(f.Bbf,{className:"size-6"})}),(0,r.jsx)(x.default,{href:"#",className:"flex ml-2",children:(0,r.jsx)(u,{})}),(0,r.jsx)("p",{className:"ml-2 font-extrabold text-gray-700 dark:text-white md:text-2xl",children:"CMS"})]}),(0,r.jsx)("div",{className:"flex text-center",children:["/dashboard/post/new","/dashboard/post/edit"].includes(a)&&(0,r.jsx)(r.Fragment,{children:"saving"===s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.la_,{className:"w-6 h-6 mr-2 animate-spin"}),(0,r.jsx)("p",{className:"text-base",children:"Saving..."})]}):(0,r.jsx)(r.Fragment,{children:"saved"===s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.I3C,{className:"w-6 h-6 mr-2"}),(0,r.jsx)("p",{className:"text-base",children:"Saved"})]})})})}),(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(c,{})})]})})})}},50589:function(e,s,a){"use strict";a.d(s,{default:function(){return I}});var r=a(57437),l=a(2265),t=a(27648),i=a(722),d=a(61978),n=a(99376),o=a(70996),c=a(26262),x=a(13856),h=a(41214),u=a(48860),g=a(36165),f=a(27924),b=a(49270),m=a(16152),j=a(58055),p=a(4231),y=a(37996),v=a(80605),N=e=>{let{icon:s,label:a,children:h,isExpandable:u=!1,url:g}=e,f=(0,i.ac)({query:"(max-width: 768px)"}),[b,m]=l.useState(!1),N=(0,n.usePathname)(),{onClose:w}=(0,d.A)();return(0,l.useEffect)(()=>{u&&(l.Children.toArray(h).some(e=>e.props.href===N)?m(!0):m(!1))},[N,h,u]),(0,r.jsxs)(o.xu,{w:"full",children:["Logout"===a?(0,r.jsx)(o.xu,{className:"flex p-3 justify-between cursor-pointer hover:bg-gray-700 ".concat(N===g?"bg-gray-500":""),onClick:()=>(0,v.signOut)(),children:(0,r.jsxs)(j.U,{spacing:3,children:[(0,r.jsx)(x.J,{as:s,boxSize:4}),(0,r.jsx)(o.xu,{children:a})]})}):(0,r.jsxs)(t.default,{href:g,className:"flex p-3 justify-between cursor-pointer hover:bg-gray-700 ".concat(N===g?"bg-gray-500":""),onClick:()=>{u?m(!b):f&&w()},children:[(0,r.jsxs)(j.U,{spacing:3,children:[(0,r.jsx)(x.J,{as:s,boxSize:4}),(0,r.jsx)(o.xu,{children:a})]}),u&&(0,r.jsx)(x.J,{as:b?y.rH8:y.bTu})]}),u&&(0,r.jsx)(p.U,{in:b,children:(0,r.jsx)(c.g,{alignItems:"start",children:h})})]})},w=a(49089),k=a(22744),S=a(32909);function I(){var e;let{sidebarOpen:s,onClose:a}=(0,d.A)(),l=(0,i.ac)({query:"(max-width: 768px)"}),j=(0,n.usePathname)(),{data:p}=(0,v.useSession)(),y=(0,r.jsx)("div",{className:"relative flex flex-col flex-1 min-h-0 pt-0 bg-gray-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700",children:(0,r.jsx)("div",{className:"flex flex-col flex-1 pb-4 mt-0 overflow-y-auto lg:mt-5",children:(0,r.jsx)("div",{className:"flex-1 pt-0 text-sm divide-y divide-gray-200 lg:pt-6 dark:divide-gray-700",children:(0,r.jsx)(o.xu,{bg:"gray-800",w:"64",h:"full",color:"white",children:(0,r.jsxs)(c.g,{alignItems:"start",spacing:1,children:[(0,r.jsx)(N,{icon:w.xng,label:"Dashboard",url:"/dashboard"}),(0,r.jsxs)(N,{icon:w.fmQ,label:"Post",isExpandable:!0,url:"#",children:[(0,r.jsxs)(t.default,{href:"/dashboard/post/new",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/new"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.wEH,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Add New"})]}),(0,r.jsxs)(t.default,{href:"/dashboard/post/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/list"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.hON,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"All Posts"})]}),(0,r.jsxs)(t.default,{href:"/dashboard/post/draft",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/draft"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.bz6,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Draft"})]}),(0,r.jsxs)(t.default,{href:"/dashboard/post/trash",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/trash"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.Xm5,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Trash"})]})]}),(0,r.jsx)(N,{icon:k.cST,label:"Analytics",url:"/dashboard/analytics"}),(0,r.jsx)(N,{icon:w.Jh6,label:"Media",url:"/dashboard/media"}),(0,r.jsx)(N,{icon:w.QJe,label:"Trending Topic",url:"/dashboard/trending-topic"}),(null==p?void 0:null===(e=p.user)||void 0===e?void 0:e.privilege_id)===1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{icon:S.Ot5,label:"Ads",isExpandable:!0,url:"#",children:(0,r.jsxs)(t.default,{href:"/dashboard/ads/ads-txt",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/ads/ads-txt"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.ldW,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Ads.txt"})]})}),(0,r.jsxs)(N,{icon:w.I$,label:"Users",isExpandable:!0,url:"#",children:[(0,r.jsxs)(t.default,{href:"/dashboard/users/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/list"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.wN,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Users"})]}),(0,r.jsxs)(t.default,{href:"/dashboard/users/privileges/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/privileges/list"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.$F9,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Privileges"})]}),(0,r.jsxs)(t.default,{href:"/dashboard/users/module/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/module/list"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.Cb3,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Module"})]}),(0,r.jsxs)(t.default,{href:"/dashboard/users/role/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/role/list"===j?"bg-gray-500":""),children:[(0,r.jsx)(x.J,{as:w.KE5,boxSize:4,className:"mr-2"}),(0,r.jsx)(o.xu,{children:"Role"})]})]})]}),(0,r.jsx)(N,{icon:w.fHX,label:"Logout",url:"#"})]})})})})});return(0,r.jsx)("aside",{id:"sidebar",className:"fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-0 h-full font-normal duration-75 md:w-64 pt-11 lg:flex transition-width","aria-label":"Sidebar",children:l?(0,r.jsxs)(h.d,{isOpen:s,placement:"left",onClose:a,children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)(g.s,{className:"!bg-gray-900 !dark:bg-gray-900",children:[(0,r.jsx)(f.o,{className:"text-white"}),(0,r.jsx)(b.x,{className:"text-white",children:"Menu"}),(0,r.jsx)(m.f,{children:y})]})]}):(0,r.jsx)(r.Fragment,{children:y})})}},83930:function(e,s,a){"use strict";a.d(s,{k:function(){return r}});let r=(0,a(59625).Ue)()(e=>({dataPost:"",statusSave:"",isInsertImage:!1,isOpenImage:!1,imageTextEditor:"",setDataPost:s=>e({dataPost:s}),setStatusSave:s=>e({statusSave:s}),setIsInsertImage:s=>e({isInsertImage:s}),onOpenImage:()=>e({isOpenImage:!0}),onCloseImage:()=>e({isOpenImage:!1}),setImageTextEditor:s=>e({imageTextEditor:s})}))},61978:function(e,s,a){"use strict";a.d(s,{A:function(){return r}});let r=(0,a(59625).Ue)()(e=>({sidebarOpen:!1,onClose:()=>e({sidebarOpen:!1}),onOpen:()=>e({sidebarOpen:!0})}))}},function(e){e.O(0,[7699,6051,9956,5957,4574,9701,5878,605,3015,1612,7648,6937,2971,2117,1744],function(){return e(e.s=37741)}),_N_E=e.O()}]);