(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7663],{37741:function(e,s,r){Promise.resolve().then(r.bind(r,86538)),Promise.resolve().then(r.bind(r,55532))},86538:function(e,s,r){"use strict";r.d(s,{default:function(){return b}});var a=r(57437),l=r(2265),t=r(7476),i=r(79512),d=r(43378),n=r(99087),c=r(22916);function o(){let{theme:e,setTheme:s}=(0,i.F)(),[r,o]=l.useState(!1),x=(0,c.ac)({maxWidth:767}),{setColorMode:h}=(0,d.If)();return(l.useEffect(()=>{o(!0)},[]),r)?(0,a.jsx)(a.Fragment,{children:"dark"==e?(0,a.jsx)(n.u,{hasArrow:!0,label:!x&&"Light Mode",children:(0,a.jsx)("span",{children:(0,a.jsx)(t.kXG,{onClick:()=>{s("light"),h("light")},className:"w-5 h-5 -mt-2 lg:mt-0 hover:text-red-500 hover:cursor-pointer"})})}):(0,a.jsx)(n.u,{hasArrow:!0,label:!x&&"Dark Mode",children:(0,a.jsx)("span",{children:(0,a.jsx)(t.wOW,{onClick:()=>{s("dark"),h("dark")},className:"w-5 h-5 hover:text-red-500 hover:cursor-pointer"})})})}):(0,a.jsx)("div",{className:"w-5 h-5 bg-gray-200 rounded-full"})}var x=r(87138),h=r(66648);function u(){let{theme:e}=(0,i.F)(),[s,r]=l.useState(!1);return(l.useEffect(()=>{r(!0)},[]),s)?(0,a.jsx)(h.default,{src:"dark"==e?"/images/uzonewhite.png":"/images/uzone_lightmode.webp",className:"w-24 lg:w-[100px] h-[22px] dark:h-[30px]",alt:"logo",width:160,height:40}):(0,a.jsx)("div",{className:"w-40 h-10 bg-gray-200 rounded-md"})}var g=r(65261),f=r(7432);function b(){let{setSidebarOpen:e}=(0,g.A)();return(0,a.jsx)("nav",{className:"fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:(0,a.jsx)("div",{className:"px-3 py-4 lg:px-5 lg:pl-3",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center justify-start",children:[(0,a.jsx)("button",{onClick:e,className:"p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:(0,a.jsx)(f.Bbf,{className:"size-6"})}),(0,a.jsx)(x.default,{href:"#",className:"flex ml-2",children:(0,a.jsx)(u,{})}),(0,a.jsx)("p",{className:"ml-2 font-extrabold text-gray-700 dark:text-white md:text-2xl",children:"CMS"})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(o,{})})]})})})}},55532:function(e,s,r){"use strict";r.d(s,{default:function(){return S}});var a=r(57437),l=r(2265),t=r(87138),i=r(22916),d=r(65261),n=r(16463),c=r(74340),o=r(14937),x=r(6353),h=r(56206),u=r(98978),g=r(2409),f=r(86493),b=r(85222),m=r(20408),j=r(89386),p=r(7158),y=r(7476),N=r(30998),w=e=>{let{icon:s,label:r,children:i,isExpandable:d=!1,url:h}=e,[u,g]=l.useState(!1),f=(0,n.usePathname)();return(0,l.useEffect)(()=>{d&&(l.Children.toArray(i).some(e=>e.props.href===f)?g(!0):g(!1))},[f,i,d]),(0,a.jsxs)(c.xu,{w:"full",children:[(0,a.jsxs)(t.default,{href:h,className:"flex p-3 justify-between cursor-pointer hover:bg-gray-700 ".concat(f===h?"bg-gray-500":""),onClick:()=>d&&g(!u),children:[(0,a.jsxs)(j.U,{spacing:3,children:[(0,a.jsx)(x.J,{as:s,boxSize:4}),"Logout"===r?(0,a.jsx)(c.xu,{onClick:()=>(0,N.signOut)(),children:r}):(0,a.jsx)(c.xu,{children:r})]}),d&&(0,a.jsx)(x.J,{as:u?y.rH8:y.bTu})]}),d&&(0,a.jsx)(p.U,{in:u,children:(0,a.jsx)(o.g,{alignItems:"start",children:i})})]})},v=r(41942),k=r(16356);function S(){let{sidebarOpen:e,setSidebarOpen:s}=(0,d.A)(),r=(0,i.ac)({query:"(max-width: 768px)"}),l=(0,n.usePathname)(),j=(0,a.jsx)("div",{className:"relative flex flex-col flex-1 min-h-0 pt-0 bg-gray-800 border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:(0,a.jsx)("div",{className:"flex flex-col flex-1 pb-4 mt-0 overflow-y-auto bg-gray-900 lg:mt-5",children:(0,a.jsx)("div",{className:"flex-1 pt-0 text-sm bg-gray-900 divide-y divide-gray-200 lg:pt-6 dark:bg-gray-800 dark:divide-gray-700",children:(0,a.jsx)(c.xu,{bg:"gray-800",w:"64",h:"full",color:"white",children:(0,a.jsxs)(o.g,{alignItems:"start",spacing:1,children:[(0,a.jsx)(w,{icon:v.xng,label:"Dashboard",url:"/dashboard"}),(0,a.jsxs)(w,{icon:v.fmQ,label:"Post",isExpandable:!0,url:"#",children:[(0,a.jsxs)(t.default,{href:"/dashboard/post/new",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/new"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.wEH,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"Add New"})]}),(0,a.jsxs)(t.default,{href:"/dashboard/post/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/list"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.hON,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"All Post"})]}),(0,a.jsxs)(t.default,{href:"/dashboard/post/draft",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/draft"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.bz6,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"Draft"})]}),(0,a.jsxs)(t.default,{href:"/dashboard/post/trash",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/post/trash"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.Xm5,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"Trash"})]})]}),(0,a.jsx)(w,{icon:k.cST,label:"Analytics",url:"/dashboard/analytics"}),(0,a.jsx)(w,{icon:v.Jh6,label:"Media",url:"/dashboard/media"}),(0,a.jsx)(w,{icon:v.QJe,label:"Trending Topic",url:"/dashboard/trending-topic"}),(0,a.jsxs)(w,{icon:v.I$,label:"Users",isExpandable:!0,url:"#",children:[(0,a.jsxs)(t.default,{href:"/dashboard/users/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/list"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.wN,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"Users"})]}),(0,a.jsxs)(t.default,{href:"/dashboard/users/privileges/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/privileges/list"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.$F9,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"Privileges"})]}),(0,a.jsxs)(t.default,{href:"/dashboard/users/role/list",className:"flex w-full py-2 pl-8 cursor-pointer hover:bg-gray-600 ".concat("/dashboard/users/role/list"===l?"bg-gray-500":""),children:[(0,a.jsx)(x.J,{as:v.KE5,boxSize:4,className:"mr-2"}),(0,a.jsx)(c.xu,{children:"Role"})]})]}),(0,a.jsx)(w,{icon:v.fHX,label:"Logout",url:"#"})]})})})})});return(0,a.jsx)("aside",{id:"sidebar",className:"fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full font-normal duration-75 pt-11 lg:flex transition-width","aria-label":"Sidebar",children:r?(0,a.jsxs)(h.d,{isOpen:e,placement:"left",onClose:s,children:[(0,a.jsx)(u.Z,{}),(0,a.jsxs)(g.s,{className:"bg-gray-900",children:[(0,a.jsx)(f.o,{className:"text-white"}),(0,a.jsx)(b.x,{className:"text-white",children:"Menu"}),(0,a.jsx)(m.f,{children:j})]})]}):(0,a.jsx)(a.Fragment,{children:j})})}},65261:function(e,s,r){"use strict";r.d(s,{A:function(){return a}});let a=(0,r(39099).Ue)()(e=>({sidebarOpen:!1,setSidebarOpen:()=>e(e=>({sidebarOpen:!e.sidebarOpen}))}))}},function(e){e.O(0,[7699,9956,4574,6051,8173,434,6849,3867,248,7138,4414,2971,7023,1744],function(){return e(e.s=37741)}),_N_E=e.O()}]);