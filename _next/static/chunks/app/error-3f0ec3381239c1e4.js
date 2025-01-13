(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7601],{7543:function(e,t,n){Promise.resolve().then(n.bind(n,47071))},33145:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(48461),a=n.n(r)},48461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(47043),a=n(55346),i=n(65878),o=r._(n(5084));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=i.Image},47071:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(57437);n(2265);var a=n(78796),i=n(68973),o=n(9889),l=n(83707),s=n(41531),c=n(14096),u=(0,i.G)(function(e,t){let n=(0,o.mq)("Code",e),{className:a,...i}=(0,l.Lr)(e);return(0,r.jsx)(s.m.code,{ref:t,className:(0,c.cx)("chakra-code",e.className),...i,__css:{display:"inline-block",...n}})});u.displayName="Code";var d=n(25810),f=n(27648),m=n(33145);function p(e){var t,n;let{error:i}=e,o=(0,a.p)(),l=async()=>{try{var e,t;await navigator.clipboard.writeText((null===(t=window)||void 0===t?void 0:null===(e=t.location)||void 0===e?void 0:e.href)||""),o({title:"URL Copied!",description:"The URL has been copied to your clipboard.",status:"success",position:"top",duration:3e3,isClosable:!0})}catch(e){o({title:"Copy Failed",description:"Failed to copy URL to clipboard.",status:"error",position:"top",duration:3e3,isClosable:!0})}};return(0,r.jsxs)("div",{className:"max-w-3xl px-5 mx-auto",children:[(0,r.jsx)(m.default,{src:"/images/error-image.png",alt:"Error Uzone",width:400,height:300,className:"mx-auto rounded-lg"}),(0,r.jsx)("p",{className:"text-2xl font-bold text-gray-800",children:"Oops! Something Went Wrong"}),(0,r.jsx)("p",{className:"my-4 text-sm text-gray-500",children:"We apologize for the inconvenience. Please note the details below and consider contacting development team uzone for assistance."}),(0,r.jsx)(u,{colorScheme:"red",p:4,mb:7,borderRadius:"md",whiteSpace:"pre-wrap",overflowX:"auto",children:"URL: ".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"\n\nError: ").concat(null==i?void 0:i.message)}),(0,r.jsxs)("div",{className:"flex justify-between space-x-4",children:[(0,r.jsx)(d.z,{colorScheme:"blue",as:f.default,href:"/dashboard",width:"full",children:"Back to Home"}),(0,r.jsx)(d.z,{onClick:l,colorScheme:"teal",width:"full",children:"Copy URL"})]})]})}},25810:function(e,t,n){"use strict";n.d(t,{z:function(){return x}});var r=n(2265),[a,i]=(0,n(37371).k)({strict:!1,name:"ButtonGroupContext"}),o=n(41531),l=n(14096),s=n(57437);function c(e){let{children:t,className:n,...a}=e,i=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,l.cx)("chakra-button__icon",n);return(0,s.jsx)(o.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:c,children:i})}c.displayName="ButtonIcon";var u=n(72760);function d(e){let{label:t,placement:n,spacing:a="0.5rem",children:i=(0,s.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:d,...f}=e,m=(0,l.cx)("chakra-button__spinner",c),p="start"===n?"marginEnd":"marginStart",h=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...d}),[d,t,p,a]);return(0,s.jsx)(o.m.div,{className:m,...f,__css:h,children:i})}d.displayName="ButtonSpinner";var f=n(20975),m=n(68973),p=n(9889),h=n(83707),x=(0,m.G)((e,t)=>{let n=i(),a=(0,p.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:u,isActive:m,children:x,leftIcon:g,rightIcon:b,loadingText:y,iconSpacing:j="0.5rem",type:_,spinner:w,spinnerPlacement:N="start",className:C,as:S,...k}=(0,h.Lr)(e),z=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:E,type:B}=function(e){let[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]),type:t?"button":void 0}}(S),P={rightIcon:b,leftIcon:g,iconSpacing:j,children:x};return(0,s.jsxs)(o.m.button,{ref:(0,f.qq)(t,E),as:S,type:null!=_?_:B,"data-active":(0,l.PB)(m),"data-loading":(0,l.PB)(u),__css:z,className:(0,l.cx)("chakra-button",C),...k,disabled:c||u,children:[u&&"start"===N&&(0,s.jsx)(d,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:j,children:w}),u?y||(0,s.jsx)(o.m.span,{opacity:0,children:(0,s.jsx)(v,{...P})}):(0,s.jsx)(v,{...P}),u&&"end"===N&&(0,s.jsx)(d,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:j,children:w})]})});function v(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(c,{marginEnd:a,children:t}),r,n&&(0,s.jsx)(c,{marginStart:a,children:n})]})}x.displayName="Button"},20975:function(e,t,n){"use strict";n.d(t,{lq:function(){return a},qq:function(){return i}});var r=n(2265);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}}}(t,e)})}}function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useMemo)(()=>a(...t),t)}},78796:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(81760),a=n(26964),i=n(68494),o=n(2265);function l(e){let{theme:t}=(0,i.uP)(),n=(0,r.OX)();return(0,o.useMemo)(()=>(0,a.Cj)(t.direction,{...n,...e}),[e,t.direction,n])}}},function(e){e.O(0,[9701,5878,3015,1760,7648,2971,2117,1744],function(){return e(e.s=7543)}),_N_E=e.O()}]);