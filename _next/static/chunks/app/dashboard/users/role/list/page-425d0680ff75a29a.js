(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3092],{34331:function(e,t,r){Promise.resolve().then(r.t.bind(r,65878,23)),Promise.resolve().then(r.bind(r,81523)),Promise.resolve().then(r.bind(r,70049)),Promise.resolve().then(r.bind(r,15104))},71096:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",a="hour",n="week",s="month",i="quarter",o="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(r)+e},m="en",f={};f[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var g="$isDayjsObject",x=function(e){return e instanceof b||!(!e||!e[g])},y=function e(t,r,a){var n;if(!t)return m;if("string"==typeof t){var s=t.toLowerCase();f[s]&&(n=s),r&&(f[s]=r,n=s);var i=t.split("-");if(!n&&i.length>1)return e(i[0])}else{var o=t.name;f[o]=t,n=o}return!a&&n&&(m=n),n||!a&&m},p=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new b(r)},v={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var a=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(a,s),i=r-n<0,o=t.clone().add(a+(i?-1:1),s);return+(-(a+(r-n)/(i?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:s,y:o,w:n,d:"day",D:l,h:a,m:r,s:t,ms:e,Q:i})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};v.l=y,v.i=x,v.w=function(e,t){return p(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var b=function(){function h(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var n=a[2]-1||0,s=(a[7]||"0").substring(0,3);return r?new Date(Date.UTC(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return v},m.isValid=function(){return this.$d.toString()!==c},m.isSame=function(e,t){var r=p(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return p(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<p(e)},m.$g=function(e,t,r){return v.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,i){var c=this,u=!!v.u(i)||i,d=v.p(e),h=function(e,t){var r=v.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?r:r.endOf("day")},m=function(e,t){return v.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},f=this.$W,g=this.$M,x=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case o:return u?h(1,0):h(31,11);case s:return u?h(1,g):h(0,g+1);case n:var p=this.$locale().weekStart||0,b=(f<p?f+7:f)-p;return h(u?x-b:x+(6-b),g);case"day":case l:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case r:return m(y+"Seconds",2);case t:return m(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(n,i){var c,u=v.p(n),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[s]=d+"Month",c[o]=d+"FullYear",c[a]=d+"Hours",c[r]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],m="day"===u?this.$D+(i-this.$W):i;if(u===s||u===o){var f=this.clone().set(l,1);f.$d[h](m),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[v.p(e)]()},m.add=function(e,i){var l,c=this;e=Number(e);var u=v.p(i),d=function(t){var r=p(c);return v.w(r.date(r.date()+Math.round(t*e)),c)};if(u===s)return this.set(s,this.$M+e);if(u===o)return this.set(o,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var h=((l={})[r]=6e4,l[a]=36e5,l[t]=1e3,l)[u]||1,m=this.$d.getTime()+e*h;return v.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var a=e||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),s=this.$H,i=this.$m,o=this.$M,l=r.weekdays,u=r.months,h=r.meridiem,m=function(e,r,n,s){return e&&(e[r]||e(t,a))||n[r].slice(0,s)},f=function(e){return v.s(s%12||12,e,"0")},g=h||function(e,t,r){var a=e<12?"AM":"PM";return r?a.toLowerCase():a};return a.replace(d,function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return v.s(t.$y,4,"0");case"M":return o+1;case"MM":return v.s(o+1,2,"0");case"MMM":return m(r.monthsShort,o,u,3);case"MMMM":return m(u,o);case"D":return t.$D;case"DD":return v.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(r.weekdaysMin,t.$W,l,2);case"ddd":return m(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return v.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(s,i,!0);case"A":return g(s,i,!1);case"m":return String(i);case"mm":return v.s(i,2,"0");case"s":return String(t.$s);case"ss":return v.s(t.$s,2,"0");case"SSS":return v.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,l,c){var u,d=this,h=v.p(l),m=p(e),f=(m.utcOffset()-this.utcOffset())*6e4,g=this-m,x=function(){return v.m(d,m)};switch(h){case o:u=x()/12;break;case s:u=x();break;case i:u=x()/3;break;case n:u=(g-f)/6048e5;break;case"day":u=(g-f)/864e5;break;case a:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:v.a(u)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),a=y(e,t,!0);return a&&(r.$L=a),r},m.clone=function(){return v.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),$=b.prototype;return p.prototype=$,[["$ms",e],["$s",t],["$m",r],["$H",a],["$W","day"],["$M",s],["$y",o],["$D",l]].forEach(function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),p.extend=function(e,t){return e.$i||(e(t,b,p),e.$i=!0),p},p.locale=y,p.isDayjs=x,p.unix=function(e){return p(1e3*e)},p.en=f[m],p.Ls=f,p.p={},p},e.exports=t()},99376:function(e,t,r){"use strict";var a=r(35475);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}}),r.o(a,"useServerInsertedHTML")&&r.d(t,{useServerInsertedHTML:function(){return a.useServerInsertedHTML}})},15104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var a=r(57437),n=r(2265),s=r(71594),i=r(24525),o=r(69340),l=r(90316),c=r(58055),u=r(60187),d=r(25730),h=r(25810),m=r(8181),f=r(10883),g=r(68193),x=r(307),y=r(49089),p=r(67776),v=r(89427),b=r(71096),$=r.n(b),j=r(80605),w=r(99376),S=r(25103),k=r.n(S),D=r(78796),M=r(26553),_=r(48860),N=r(49270),C=r(16152),O=r(20517);function L(e){let{isOpen:t,setIsUpdate:r,session:s,idDelete:i,onClose:o}=e,l=n.useRef(null),c=(0,D.p)(),[u,d]=n.useState(!1),m=async()=>{var e,t,a;d(!0);let n=await (0,v.Z)("DELETE","".concat("https://mercury.uzone.id/","api/v1/privileges/?privilege_id=").concat(i),{},{accept:"application/json",Authorization:"Bearer ".concat(null==s?void 0:null===(e=s.user)||void 0===e?void 0:e.access_token)});d(!1),200==n.status?(r(Math.random()),o(),c({title:"Success",description:n.data.message,status:"success",duration:7e3,position:"top",isClosable:!0})):c({title:"Error",description:null==n?void 0:null===(a=n.data)||void 0===a?void 0:null===(t=a.detail)||void 0===t?void 0:t.map(e=>"".concat(e.loc.join(" -> "),": ").concat(e.msg)).join(", "),status:"error",duration:7e3,position:"top",isClosable:!0})};return(0,a.jsx)(M.a,{isOpen:t,leastDestructiveRef:l,onClose:o,children:(0,a.jsx)(_.Z,{children:(0,a.jsxs)(M._,{children:[(0,a.jsx)(N.x,{fontSize:"lg",fontWeight:"bold",children:"Delete Data"}),(0,a.jsx)(C.f,{children:"Apakah anda yakin ingin menghapus data ini?"}),(0,a.jsxs)(O.m,{children:[(0,a.jsx)(h.z,{ref:l,onClick:o,children:"Cancel"}),(0,a.jsx)(h.z,{colorScheme:"red",onClick:()=>m(),isLoading:u,ml:3,children:"Delete"})]})]})})})}var z=r(27648);function W(){let e=(0,w.useRouter)(),[t,r]=n.useState(0),[b,S]=n.useState(""),[D,M]=n.useState([]),[_,N]=n.useState(!0),[C,O]=n.useState(0),[W,Y]=n.useState(0),[H,P]=n.useState(0),{data:T}=(0,j.useSession)(),{isOpen:E,onOpen:A,onClose:I}=(0,o.q)(),R=(0,s.b7)({data:D,columns:[{header:"Module Name",accessorKey:"display_name"},{header:"Create",accessorKey:"is_create",cell:e=>{let{row:t}=e;return(0,a.jsx)(l.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_create})}},{header:"Read",accessorKey:"is_read",cell:e=>{let{row:t}=e;return(0,a.jsx)(l.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_read})}},{header:"Update",accessorKey:"is_modify",cell:e=>{let{row:t}=e;return(0,a.jsx)(l.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_modify})}},{header:"Delete",accessorKey:"is_delete",cell:e=>{let{row:t}=e;return(0,a.jsx)(l.X,{size:"md",readOnly:!0,mx:"auto",colorScheme:"green",defaultChecked:1===t.original.is_delete})}},{header:"Updated At",accessorKey:"updated_at",cell:e=>{let{row:t}=e;return $()(t.original.updated_at).isValid()?$()(t.original.updated_at).format("DD MMM YYYY, HH:mm"):"-"}},{header:"Created At",accessorKey:"created_at",cell:e=>{let{row:t}=e;return $()(t.original.created_at).format("DD MMM YYYY, HH:mm")}},{header:"Action",id:"action",cell:t=>{let{row:r}=t,{id:n}=r.original;return(0,a.jsxs)(c.U,{spacing:"4",children:[(0,a.jsx)(u.u,{label:"Edit","aria-label":"Edit tooltip",children:(0,a.jsx)(d.h,{size:"sm",icon:(0,a.jsx)(p.FNg,{className:"w-5 h-5"}),"aria-label":"Edit Post",colorScheme:"blue",onClick:()=>e.push("/dashboard/users/role/edit?aa=".concat(n))})}),(0,a.jsx)(u.u,{label:"Delete","aria-label":"Delete tooltip",children:(0,a.jsx)(d.h,{size:"sm",icon:(0,a.jsx)(p.v_0,{className:"w-5 h-5"}),"aria-label":"Delete Post",colorScheme:"red",onClick:()=>{P(n),A()}})})]})}}],getCoreRowModel:(0,i.sC)(),manualPagination:!0,pageCount:Math.ceil(C/10)});return n.useEffect(()=>{let e=async()=>{var e;N(!0);let t=await (0,v.Z)("GET","".concat("https://mercury.uzone.id/","api/v1/privileges-roles/"),{page:W+1,limit:10,search:b},{accept:"application/json",Authorization:"Bearer ".concat(null==T?void 0:null===(e=T.user)||void 0===e?void 0:e.access_token)});N(!1),200===t.status&&(M(t.data.data.privilege_role_data),O(t.data.data.total_data))};T&&e()},[t,T,b,W]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(L,{setIsUpdate:r,session:T,isOpen:E,idDelete:H,onClose:I}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"grid items-center justify-between grid-cols-2",children:[(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,a.jsx)(z.default,{href:"/dashboard/users/role/new",children:(0,a.jsx)(h.z,{colorScheme:"teal",children:"Add New"})})}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("div",{className:"m-2",children:(0,a.jsx)("div",{className:"max-w-md mx-auto",children:(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)(m.B,{size:"md",children:[(0,a.jsx)(f.I,{pr:"4rem",type:"text",bg:"white",placeholder:"search role",onKeyDown:e=>"Enter"===e.key&&S(e.target.value)}),(0,a.jsx)(g.x,{children:(0,a.jsx)(h.z,{size:"sm",children:(0,a.jsx)(y.U41,{className:"text-black dark:text-gray-700"})})})]})})})})})]}),(0,a.jsxs)("table",{className:"min-w-full mt-5 overflow-hidden text-sm bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md dark:bg-gray-700",children:[(0,a.jsx)("thead",{className:"bg-white dark:bg-gray-800",children:R.getHeaderGroups().map(e=>(0,a.jsx)("tr",{className:"text-xs font-semibold tracking-wider text-left text-gray-500 uppercase dark:text-white",children:e.headers.map(e=>{var t,r;return(0,a.jsx)("th",{className:"px-6 py-3",children:e.isPlaceholder?null:"string"==typeof e.column.columnDef.header?e.column.columnDef.header:null===(t=(r=e.column.columnDef).header)||void 0===t?void 0:t.call(r,e.getContext())},e.id)})},e.id))}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 dark:bg-gray-700",children:_?(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:9,className:"px-6 py-2 text-center text-gray-500",children:(0,a.jsx)(x.E,{colorScheme:"red",size:"xs",isIndeterminate:!0})})}):R.getRowModel().rows.map(e=>(0,a.jsx)("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-600",children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{className:"px-6 py-2 whitespace-nowrap",children:"function"==typeof e.column.columnDef.cell?e.column.columnDef.cell(e.getContext()):e.renderValue()},e.id))},e.id))})]})]}),(0,a.jsx)(k(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(C/10),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{Y(e.selected)},containerClassName:"flex justify-end items-center mt-4",pageClassName:"mx-1",pageLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200",previousLinkClassName:"px-3 py-2 ml-0 leading-tight text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-l-md border border-gray-300 text-sm hover:bg-gray-200",nextLinkClassName:"px-3 py-2 leading-tight text-sm text-gray-700 bg-white dark:text-white dark:bg-gray-700 rounded-r-md border border-gray-300 hover:bg-gray-200",breakClassName:"mx-1",breakLinkClassName:"px-3 py-2 border rounded-md text-sm text-gray-700",activeLinkClassName:"bg-blue-500 text-white",disabledClassName:"opacity-50 cursor-not-allowed",renderOnZeroPageCount:null})]})}function Y(){return(0,a.jsxs)("div",{className:"px-4 pt-6",children:[(0,a.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,a.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Role"})})}),(0,a.jsxs)("div",{className:"p-4 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,a.jsx)("div",{className:"items-center justify-between lg:flex",children:(0,a.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"})}),(0,a.jsx)(W,{})]})]})}},89427:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(83464),n=r(80605);async function s(e,t,r,s){try{let i;i="GET"==e?{validateStatus:()=>!1,method:e,headers:s,url:t,params:r}:{validateStatus:()=>!1,method:e,headers:s,url:t,data:r};let o=await (0,a.Z)(i).catch(e=>e.response);return 401==o.status&&await (0,n.signOut)(),o}catch(e){return{data:e,status:500,statusText:"Internal Server Error",headers:{},config:{}}}}},93088:function(e,t,r){"use strict";r.d(t,{K:function(){return u}});var a=r(41531),n=r(57437),s=e=>(0,n.jsx)(a.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});s.displayName="StackItem";var i=r(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var o=r(1219),l=r(68973),c=r(2265),u=(0,l.G)((e,t)=>{let{isInline:r,direction:l,align:u,justify:d,spacing:h="0.5rem",wrap:m,children:f,divider:g,className:x,shouldWrapChildren:y,...p}=e,v=r?"row":null!=l?l:"column",b=(0,c.useMemo)(()=>(function(e){var t;let{spacing:r,direction:a}=e,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>n[e],Array.isArray(a)?a.map(e=>null===e?null:t(e)):(0,i.Kn)(a)?Object.keys(a).reduce((e,r)=>(e[r]=t(a[r]),e),{}):null!=a?t(a):null)}})({spacing:h,direction:v}),[h,v]),$=!!g,j=!y&&!$,w=(0,c.useMemo)(()=>{let e=(0,o.W)(f);return j?e:e.map((t,r)=>{let a=void 0!==t.key?t.key:r,i=r+1===e.length,o=(0,n.jsx)(s,{children:t},a),l=y?o:t;if(!$)return l;let u=(0,c.cloneElement)(g,{__css:b});return(0,n.jsxs)(c.Fragment,{children:[l,i?null:u]},a)})},[g,b,$,j,y,f]),S=(0,i.cx)("chakra-stack",x);return(0,n.jsx)(a.m.div,{ref:t,display:"flex",alignItems:u,justifyContent:d,flexDirection:v,flexWrap:m,gap:$?void 0:h,className:S,...p,children:w})});u.displayName="Stack"}},function(e){e.O(0,[7699,1994,9701,5878,605,3015,1760,9799,3464,1612,269,7648,316,2971,2117,1744],function(){return e(e.s=34331)}),_N_E=e.O()}]);