(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171,4482],{28699:function(e,t,n){Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,10912)),Promise.resolve().then(n.bind(n,61481)),Promise.resolve().then(n.bind(n,49044))},10912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let c=n(55592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new c.BailoutToCSRError(t);return n}},61481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let c=n(57437),r=n(58512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,c.jsx)(c.Fragment,{children:a.map(e=>(0,c.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},49044:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var c=n(57437),r=n(2265),a=n(79512);function o(){let{theme:e}=(0,a.F)(),[t,n]=r.useState("");return(0,c.jsxs)("div",{className:"px-4 pt-6",children:[(0,c.jsx)("div",{className:"grid items-center justify-between grid-cols-2",children:(0,c.jsx)("div",{className:"flex items-center mb-4 lg:mb-0",children:(0,c.jsx)("h3",{className:"mb-2 text-xl font-bold text-gray-900 dark:text-white",children:"Analytics"})})}),(0,c.jsxs)("div",{className:"p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800",children:[(0,c.jsxs)("div",{className:"items-center justify-between lg:flex",children:[(0,c.jsx)("div",{className:"flex items-center mb-4 lg:mb-0"}),(0,c.jsx)("div",{className:"items-center sm:flex"})]}),(0,c.jsx)("iframe",{width:"100%",src:"https://lookerstudio.google.com/embed/reporting/70fa9a7b-28ca-4148-aae4-ad437db8a6db/page/ZpKVD",className:"border-0 min-h-[700px]"})]})]})}},79512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return d}});var c=n(2265),r=["light","dark"],a="(prefers-color-scheme: dark)",o="undefined"==typeof window,s=c.createContext(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=c.useContext(s))?e:l},d=e=>c.useContext(s)?e.children:c.createElement(u,{...e}),m=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:d=m,defaultTheme:u=o?"system":"light",attribute:g="data-theme",value:v,children:p,nonce:x}=e,[w,S]=c.useState(()=>f(i,u)),[k,C]=c.useState(()=>f(i)),j=v?Object.values(v):d,E=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=y());let c=v?v[t]:t,a=n?b():null,s=document.documentElement;if("class"===g?(s.classList.remove(...j),c&&s.classList.add(c)):c?s.setAttribute(g,c):s.removeAttribute(g),l){let e=r.includes(u)?u:null,n=r.includes(t)?t:e;s.style.colorScheme=n}null==a||a()},[]),T=c.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),N=c.useCallback(e=>{C(y(e)),"system"===w&&o&&!t&&E("system")},[w,t]);c.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),c.useEffect(()=>{let e=e=>{e.key===i&&T(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),c.useEffect(()=>{E(null!=t?t:w)},[t,w]);let _=c.useMemo(()=>({theme:w,setTheme:T,forcedTheme:t,resolvedTheme:"system"===w?k:w,themes:o?[...d,"system"]:d,systemTheme:o?k:void 0}),[w,T,t,k,o,d]);return c.createElement(s.Provider,{value:_},c.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:o,enableColorScheme:l,storageKey:i,themes:d,defaultTheme:u,attribute:g,value:v,children:p,attrs:j,nonce:x}),p)},h=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:d,attrs:m,nonce:u}=e,h="system"===i,f="class"===o?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),b=l?(r.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=d?d[e]:e,a=t?e+"|| ''":"'".concat(c,"'"),s="";return l&&n&&!t&&r.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===o?t||c?s+="c.add(".concat(a,")"):s+="null":c&&(s+="d[s](n,".concat(a,")")),s},g=t?"!function(){".concat(f).concat(y(t),"}()"):s?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(y(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(b,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(y(d?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(b,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})}),f=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},b=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[8173,2971,7023,1744],function(){return e(e.s=28699)}),_N_E=e.O()}]);