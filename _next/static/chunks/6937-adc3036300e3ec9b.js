(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6937],{41124:function(e,t){"use strict";t.E=function(e,t){return e.split(",").map(function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map(function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}}),c}).some(function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!(r||n))return!1;var i=e.expressions.every(function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=s(i),o=s(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}});return i&&!n||!i&&n})};var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},88079:function(e,t,n){"use strict";var r=n(41124).E,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o,a=this;function s(e){a.matches=e.matches,a.media=e.media}i&&!n&&(o=i.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(s)):(this.matches=r(e,t),this.media=e),this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,t,n){return new o(e,t,n)}},33145:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(48461),i=n.n(r)},99376:function(e,t,n){"use strict";var r=n(35475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}}),n.o(r,"useServerInsertedHTML")&&n.d(t,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},48461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return s}});let r=n(47043),i=n(55346),o=n(65878),a=r._(n(5084));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=o.Image},48049:function(e,t,n){"use strict";var r=n(14397);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},40718:function(e,t,n){e.exports=n(48049)()},14397:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},722:function(e,t,n){"use strict";n.d(t,{ac:function(){return I}});var r=n(2265),i=n(88079),o=n.n(i),a=/[A-Z]/g,s=/^ms-/,c={};function u(e){return"-"+e.toLowerCase()}var l=function(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(a,u);return c[e]=s.test(t)?"-"+t:t},d=n(40718),m=n.n(d);let f=m().oneOfType([m().string,m().number]),h={all:m().bool,grid:m().bool,aural:m().bool,braille:m().bool,handheld:m().bool,print:m().bool,projection:m().bool,screen:m().bool,tty:m().bool,tv:m().bool,embossed:m().bool},{type:p,...v}={orientation:m().oneOf(["portrait","landscape"]),scan:m().oneOf(["progressive","interlace"]),aspectRatio:m().string,deviceAspectRatio:m().string,height:f,deviceHeight:f,width:f,deviceWidth:f,color:m().bool,colorIndex:m().bool,monochrome:m().bool,resolution:f,type:Object.keys(h)},y={minAspectRatio:m().string,maxAspectRatio:m().string,minDeviceAspectRatio:m().string,maxDeviceAspectRatio:m().string,minHeight:f,maxHeight:f,minDeviceHeight:f,maxDeviceHeight:f,minWidth:f,maxWidth:f,minDeviceWidth:f,maxDeviceWidth:f,minColor:m().number,maxColor:m().number,minColorIndex:m().number,maxColorIndex:m().number,minMonochrome:m().number,maxMonochrome:m().number,minResolution:f,maxResolution:f,...v};var x={...h,...y};let g=e=>`not ${e}`,b=(e,t)=>{let n=l(e);return("number"==typeof t&&(t=`${t}px`),!0===t)?n:!1===t?g(n):`(${n}: ${t})`},S=e=>e.join(" and "),w=e=>{let t=[];return Object.keys(x).forEach(n=>{let r=e[n];null!=r&&t.push(b(n,r))}),S(t)},E=(0,r.createContext)(void 0),j=e=>e.query||w(e),k=e=>{if(e)return Object.keys(e).reduce((t,n)=>(t[l(n)]=e[n],t),{})},C=()=>{let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{e.current=!0},[]),e.current},_=e=>{let t=(0,r.useContext)(E),n=()=>k(e)||k(t),[i,o]=(0,r.useState)(n);return(0,r.useEffect)(()=>{let e=n();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let r=0;r<i;r++){let i=n[r];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}(i,e)&&o(e)},[e,t]),i},O=e=>{let t=()=>j(e),[n,i]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let e=t();n!==e&&i(e)},[e]),n},L=(e,t)=>{let n=()=>o()(e,t||{},!!t),[i,a]=(0,r.useState)(n),s=C();return(0,r.useEffect)(()=>{if(s){let e=n();return a(e),()=>{e&&e.dispose()}}},[e,t]),i},T=e=>{let[t,n]=(0,r.useState)(e.matches);return(0,r.useEffect)(()=>{let t=e=>{n(e.matches)};return e.addListener(t),n(e.matches),()=>{e.removeListener(t)}},[e]),t},I=(e,t,n)=>{let i=_(t),o=O(e);if(!o)throw Error("Invalid or missing MediaQuery!");let a=L(o,i),s=T(a),c=C();return(0,r.useEffect)(()=>{c&&n&&n(s)},[s]),(0,r.useEffect)(()=>()=>{a&&a.dispose()},[]),s}},10034:function(e,t,n){"use strict";var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,c=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),a(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},83044:function(e,t,n){"use strict";var r=n(2265),i=n(53941),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=r.useRef,c=r.useEffect,u=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(null===d.current){var m={hasValue:!1,value:null};d.current=m}else m=d.current;var f=a(e,(d=u(function(){function e(e){if(!c){if(c=!0,a=e,e=r(e),void 0!==i&&m.hasValue){var t=m.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(a=e,s=n)}var a,s,c=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,i]))[0],d[1]);return c(function(){m.hasValue=!0,m.value=f},[f]),l(f),f}},53941:function(e,t,n){"use strict";e.exports=n(10034)},35195:function(e,t,n){"use strict";e.exports=n(83044)},58055:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(93088),i=n(68973),o=n(57437),a=(0,i.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));a.displayName="HStack"},26262:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(93088),i=n(68973),o=n(57437),a=(0,i.G)((e,t)=>(0,o.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));a.displayName="VStack"},70996:function(e,t,n){"use strict";n.d(t,{xu:function(){return a}});var r=n(41531),i=n(68973),o=n(57437),a=(0,r.m)("div");a.displayName="Box";var s=(0,i.G)(function(e,t){let{size:n,centerContent:r=!0,...i}=e;return(0,o.jsx)(a,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});s.displayName="Square",(0,i.G)(function(e,t){let{size:n,...r}=e;return(0,o.jsx)(s,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},93088:function(e,t,n){"use strict";n.d(t,{K:function(){return l}});var r=n(41531),i=n(57437),o=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});o.displayName="StackItem";var a=n(14096);Object.freeze(["base","sm","md","lg","xl","2xl"]);var s=n(1219),c=n(68973),u=n(2265),l=(0,c.G)((e,t)=>{let{isInline:n,direction:c,align:l,justify:d,spacing:m="0.5rem",wrap:f,children:h,divider:p,className:v,shouldWrapChildren:y,...x}=e,g=n?"row":null!=c?c:"column",b=(0,u.useMemo)(()=>(function(e){var t;let{spacing:n,direction:r}=e,i={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>i[e],Array.isArray(r)?r.map(e=>null===e?null:t(e)):(0,a.Kn)(r)?Object.keys(r).reduce((e,n)=>(e[n]=t(r[n]),e),{}):null!=r?t(r):null)}})({spacing:m,direction:g}),[m,g]),S=!!p,w=!y&&!S,E=(0,u.useMemo)(()=>{let e=(0,s.W)(h);return w?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,a=n+1===e.length,s=(0,i.jsx)(o,{children:t},r),c=y?s:t;if(!S)return c;let l=(0,u.cloneElement)(p,{__css:b});return(0,i.jsxs)(u.Fragment,{children:[c,a?null:l]},r)})},[p,b,S,w,y,h]),j=(0,a.cx)("chakra-stack",v);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:l,justifyContent:d,flexDirection:g,flexWrap:f,gap:S?void 0:m,className:j,...x,children:E})});l.displayName="Stack"},27924:function(e,t,n){"use strict";n.d(t,{o:function(){return c}});var r=n(19383),i=n(70118),o=n(14096),a=n(68973),s=n(57437),c=(0,a.G)((e,t)=>{let{onClick:n,className:a,...c}=e,{onClose:u}=(0,r.vR)(),l=(0,o.cx)("chakra-modal__close-btn",a),d=(0,r.I_)();return(0,s.jsx)(i.P,{ref:t,__css:d.closeButton,className:l,onClick:(0,o.v0)(n,e=>{e.stopPropagation(),u()}),...c})});c.displayName="ModalCloseButton"},36165:function(e,t,n){"use strict";n.d(t,{s:function(){return x}});var r=n(41214),i=n(39005),o=n(19383),a=n(14096),s=n(41531),c=n(68973),u=n(8588),l=n(48614),d=n(74669),m=n(2265),f=n(57437),h={exit:{duration:.15,ease:u.Lj.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},p={exit:e=>{var t;let{direction:n,transition:r,transitionEnd:i,delay:o}=e,{exit:a}=(0,u.js)({direction:n});return{...a,transition:null!=(t=null==r?void 0:r.exit)?t:u.p$.exit(h.exit,o),transitionEnd:null==i?void 0:i.exit}},enter:e=>{var t;let{direction:n,transitionEnd:r,transition:i,delay:o}=e,{enter:a}=(0,u.js)({direction:n});return{...a,transition:null!=(t=null==i?void 0:i.enter)?t:u.p$.enter(h.enter,o),transitionEnd:null==r?void 0:r.enter}}},v=(0,m.forwardRef)(function(e,t){let{direction:n="right",style:r,unmountOnExit:i,in:o,className:s,transition:c,transitionEnd:m,delay:h,motionProps:v,...y}=e,x=Object.assign({position:"fixed"},(0,u.js)({direction:n}).position,r),g=!i||o&&i,b=o||i?"enter":"exit",S={transitionEnd:m,transition:c,direction:n,delay:h};return(0,f.jsx)(l.M,{custom:S,children:g&&(0,f.jsx)(d.E.div,{...y,ref:t,initial:"exit",className:(0,a.cx)("chakra-slide",s),animate:b,exit:"exit",custom:S,variants:p,style:x,...v})})});v.displayName="Slide";var y=(0,s.m)(v),x=(0,c.G)((e,t)=>{let{className:n,children:c,motionProps:u,containerProps:l,...d}=e,{getDialogProps:m,getDialogContainerProps:h,isOpen:p}=(0,o.vR)(),v=m(d,t),x=h(l),g=(0,a.cx)("chakra-modal__content",n),b=(0,o.I_)(),S={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...b.dialog},w={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...b.dialogContainer},{placement:E}=(0,r.M)();return(0,f.jsx)(i.M,{children:(0,f.jsx)(s.m.div,{...x,className:"chakra-modal__content-container",__css:w,children:(0,f.jsx)(y,{motionProps:u,direction:E,in:p,className:g,...v,__css:S,children:c})})})});x.displayName="DrawerContent"},41214:function(e,t,n){"use strict";n.d(t,{M:function(){return c},d:function(){return l}});var r=n(19383),i=n(37371),o=n(73311),a=n(57437),[s,c]=(0,i.k)(),u={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function l(e){var t;let{isOpen:n,onClose:i,placement:c="right",children:l,...d}=e,m=(0,o.F)(),f=null==(t=m.components)?void 0:t.Drawer,h=function(e,t){var n,r;if(e)return null!=(r=null==(n=u[e])?void 0:n[t])?r:e}(c,m.direction);return(0,a.jsx)(s,{value:{placement:h},children:(0,a.jsx)(r.u_,{isOpen:n,onClose:i,styleConfig:f,...d,children:l})})}},1219:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(2265);function i(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}},20975:function(e,t,n){"use strict";n.d(t,{lq:function(){return i},qq:function(){return o}});var r=n(2265);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}}(t,e)})}}function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useMemo)(()=>i(...t),t)}},4231:function(e,t,n){"use strict";n.d(t,{U:function(){return m}});var r=n(8588),i=n(14096),o=n(48614),a=n(74669),s=n(2265),c=n(57437),u=e=>null!=e&&parseInt(e.toString(),10)>0,l={exit:{height:{duration:.2,ease:r.Lj.ease},opacity:{duration:.3,ease:r.Lj.ease}},enter:{height:{duration:.3,ease:r.Lj.ease},opacity:{duration:.4,ease:r.Lj.ease}}},d={exit:e=>{var t;let{animateOpacity:n,startingHeight:i,transition:o,transitionEnd:a,delay:s}=e;return{...n&&{opacity:u(i)?1:0},height:i,transitionEnd:null==a?void 0:a.exit,transition:null!=(t=null==o?void 0:o.exit)?t:r.p$.exit(l.exit,s)}},enter:e=>{var t;let{animateOpacity:n,endingHeight:i,transition:o,transitionEnd:a,delay:s}=e;return{...n&&{opacity:1},height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(t=null==o?void 0:o.enter)?t:r.p$.enter(l.enter,s)}}},m=(0,s.forwardRef)((e,t)=>{let{in:n,unmountOnExit:r,animateOpacity:u=!0,startingHeight:l=0,endingHeight:m="auto",style:f,className:h,transition:p,transitionEnd:v,...y}=e,[x,g]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=setTimeout(()=>{g(!0)});return()=>clearTimeout(e)},[]),(0,i.ZK)({condition:Number(l)>0&&!!r,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let b=parseFloat(l.toString())>0,S={startingHeight:l,endingHeight:m,animateOpacity:u,transition:x?p:{enter:{duration:0}},transitionEnd:{enter:null==v?void 0:v.enter,exit:r?null==v?void 0:v.exit:{...null==v?void 0:v.exit,display:b?"block":"none"}}},w=!r||n,E=n||r?"enter":"exit";return(0,c.jsx)(o.M,{initial:!1,custom:S,children:w&&(0,c.jsx)(a.E.div,{ref:t,...y,className:(0,i.cx)("chakra-collapse",h),style:{overflow:"hidden",display:"block",...f},custom:S,variants:d,initial:!!r&&"exit",animate:E,exit:"exit"})})});m.displayName="Collapse"},25922:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return l}});var r=n(2265),i=["light","dark"],o="(prefers-color-scheme: dark)",a="undefined"==typeof window,s=r.createContext(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=r.useContext(s))?e:c},l=e=>r.useContext(s)?e.children:r.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:c=!0,storageKey:u="theme",themes:l=d,defaultTheme:m=a?"system":"light",attribute:y="data-theme",value:x,children:g,nonce:b}=e,[S,w]=r.useState(()=>h(u,m)),[E,j]=r.useState(()=>h(u)),k=x?Object.values(x):l,C=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=v());let r=x?x[t]:t,o=n?p():null,s=document.documentElement;if("class"===y?(s.classList.remove(...k),r&&s.classList.add(r)):r?s.setAttribute(y,r):s.removeAttribute(y),c){let e=i.includes(m)?m:null,n=i.includes(t)?t:e;s.style.colorScheme=n}null==o||o()},[]),_=r.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(u,t)}catch(e){}},[t]),O=r.useCallback(e=>{j(v(e)),"system"===S&&a&&!t&&C("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),r.useEffect(()=>{let e=e=>{e.key===u&&_(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),r.useEffect(()=>{C(null!=t?t:S)},[t,S]);let L=r.useMemo(()=>({theme:S,setTheme:_,forcedTheme:t,resolvedTheme:"system"===S?E:S,themes:a?[...l,"system"]:l,systemTheme:a?E:void 0}),[S,_,t,E,a,l]);return r.createElement(s.Provider,{value:L},r.createElement(f,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:c,storageKey:u,themes:l,defaultTheme:m,attribute:y,value:x,children:g,attrs:k,nonce:b}),g)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:s,enableColorScheme:c,defaultTheme:u,value:l,attrs:d,nonce:m}=e,f="system"===u,h="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),p=c?(i.includes(u)?u:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=l?l[e]:e,o=t?e+"|| ''":"'".concat(r,"'"),s="";return c&&n&&!t&&i.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||r?s+="c.add(".concat(o,")"):s+="null":r&&(s+="d[s](n,".concat(o,")")),s},y=t?"!function(){".concat(h).concat(v(t),"}()"):s?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(l?"var x=".concat(JSON.stringify(l),";"):"").concat(v(l?"x[e]":"e",!0),"}").concat(f?"":"else{"+v(u,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(l?"var x=".concat(JSON.stringify(l),";"):"").concat(v(l?"x[e]":"e",!0),"}else{").concat(v(u,!1,!1),";}").concat(p,"}catch(t){}}();");return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})}),h=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},59625:function(e,t,n){"use strict";n.d(t,{Ue:function(){return m}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},a=t=e(r,i,o);return o},i=e=>e?r(e):r;var o=n(2265),a=n(35195);let{useDebugValue:s}=o,{useSyncExternalStoreWithSelector:c}=a,u=!1,l=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?i(e):e,n=(e,n)=>(function(e,t=l,n){n&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let r=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return s(r),r})(t,e,n);return Object.assign(n,t),n},m=e=>e?d(e):d}}]);