"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3776],{16379:function(e,t,r){r.d(t,{$B:function(){return c},Dq:function(){return o},Ke:function(){return i},mv:function(){return s}});var n=(e,t)=>({var:e,varRef:t?"var(".concat(e,", ").concat(t,")"):"var(".concat(e,")")}),o={arrowShadowColor:n("--popper-arrow-shadow-color"),arrowSize:n("--popper-arrow-size","8px"),arrowSizeHalf:n("--popper-arrow-size-half"),arrowBg:n("--popper-arrow-bg"),transformOrigin:n("--popper-transform-origin"),arrowOffset:n("--popper-arrow-offset")};function i(e){return e.includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0}var a={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},s=e=>a[e],l={scroll:!0,resize:!0};function c(e){return"object"==typeof e?{enabled:!0,options:{...l,...e}}:{enabled:e,options:l}}},65794:function(e,t,r){r.d(t,{D:function(){return ej}});var n,o,i,a,s,l=r(16379),c={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{let{state:t}=e;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:e=>{let{state:t}=e;return()=>{let e=t.elements.reference;t.elements.popper.style.width="".concat(e.offsetWidth,"px")}}},f={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{let{state:t}=e;u(t)},effect:e=>{let{state:t}=e;return()=>{u(t)}}},u=e=>{e.elements.popper.style.setProperty(l.Dq.transformOrigin.var,(0,l.mv)(e.placement))},p={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;d(t)}},d=e=>{var t;if(!e.placement)return;let r=m(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:l.Dq.arrowSize.varRef,height:l.Dq.arrowSize.varRef,zIndex:-1});let t={[l.Dq.arrowSizeHalf.var]:"calc(".concat(l.Dq.arrowSize.varRef," / 2 - 1px)"),[l.Dq.arrowOffset.var]:"calc(".concat(l.Dq.arrowSizeHalf.varRef," * -1)")};for(let r in t)e.elements.arrow.style.setProperty(r,t[r])}},m=e=>e.startsWith("top")?{property:"bottom",value:l.Dq.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:l.Dq.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:l.Dq.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:l.Dq.arrowOffset.varRef}:void 0,h={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{let{state:t}=e;v(t)},effect:e=>{let{state:t}=e;return()=>{v(t)}}},v=e=>{if(!e.elements.arrow)return;let t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;let r=(0,l.Ke)(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:l.Dq.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},g={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},b={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"},y=r(14697);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=w(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=w(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function j(e){if("undefined"==typeof ShadowRoot)return!1;var t=w(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var E=Math.max,D=Math.min,k=Math.round;function C(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function P(){return!/^((?!chrome|android).)*safari/i.test(C())}function q(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&O(e)&&(o=e.offsetWidth>0&&k(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&k(n.height)/e.offsetHeight||1);var a=(x(e)?w(e):window).visualViewport,s=!P()&&r,l=(n.left+(s&&a?a.offsetLeft:0))/o,c=(n.top+(s&&a?a.offsetTop:0))/i,f=n.width/o,u=n.height/i;return{width:f,height:u,top:c,right:l+f,bottom:c+u,left:l,x:l,y:c}}function R(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function S(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return q(W(e)).left+R(e).scrollLeft}function L(e){return w(e).getComputedStyle(e)}function T(e){var t=L(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function B(e){var t=q(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function z(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||W(e)}function N(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(S(t))>=0?t.ownerDocument.body:O(t)&&T(t)?t:e(z(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=w(n),a=o?[i].concat(i.visualViewport||[],T(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(N(z(a)))}function H(e){return O(e)&&"fixed"!==L(e).position?e.offsetParent:null}function M(e){for(var t=w(e),r=H(e);r&&["table","td","th"].indexOf(S(r))>=0&&"static"===L(r).position;)r=H(r);return r&&("html"===S(r)||"body"===S(r)&&"static"===L(r).position)?t:r||function(e){var t=/firefox/i.test(C());if(/Trident/i.test(C())&&O(e)&&"fixed"===L(e).position)return null;var r=z(e);for(j(r)&&(r=r.host);O(r)&&0>["html","body"].indexOf(S(r));){var n=L(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var _="bottom",I="right",V="left",F="auto",U=["top",_,I,V],K="start",X="viewport",Y="popper",$=U.reduce(function(e,t){return e.concat([t+"-"+K,t+"-end"])},[]),G=[].concat(U,[F]).reduce(function(e,t){return e.concat([t,t+"-"+K,t+"-end"])},[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],Q={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ee={passive:!0};function et(e){return e.split("-")[0]}function er(e){return e.split("-")[1]}function en(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function eo(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?et(o):null,a=o?er(o):null,s=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2;switch(i){case"top":t={x:s,y:r.y-n.height};break;case _:t={x:s,y:r.y+r.height};break;case I:t={x:r.x+r.width,y:l};break;case V:t={x:r.x-n.width,y:l};break;default:t={x:r.x,y:r.y}}var c=i?en(i):null;if(null!=c){var f="y"===c?"height":"width";switch(a){case K:t[c]=t[c]-(r[f]/2-n[f]/2);break;case"end":t[c]=t[c]+(r[f]/2-n[f]/2)}}return t}var ei={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ea(e){var t,r,n,o,i,a,s,l=e.popper,c=e.popperRect,f=e.placement,u=e.variation,p=e.offsets,d=e.position,m=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,g=e.isFixed,b=p.x,y=void 0===b?0:b,x=p.y,O=void 0===x?0:x,j="function"==typeof v?v({x:y,y:O}):{x:y,y:O};y=j.x,O=j.y;var E=p.hasOwnProperty("x"),D=p.hasOwnProperty("y"),C=V,P="top",q=window;if(h){var R=M(l),S="clientHeight",A="clientWidth";R===w(l)&&"static"!==L(R=W(l)).position&&"absolute"===d&&(S="scrollHeight",A="scrollWidth"),("top"===f||(f===V||f===I)&&"end"===u)&&(P=_,O-=(g&&R===q&&q.visualViewport?q.visualViewport.height:R[S])-c.height,O*=m?1:-1),(f===V||("top"===f||f===_)&&"end"===u)&&(C=I,y-=(g&&R===q&&q.visualViewport?q.visualViewport.width:R[A])-c.width,y*=m?1:-1)}var T=Object.assign({position:d},h&&ei),B=!0===v?(t={x:y,y:O},r=w(l),n=t.x,o=t.y,{x:k(n*(i=r.devicePixelRatio||1))/i||0,y:k(o*i)/i||0}):{x:y,y:O};return(y=B.x,O=B.y,m)?Object.assign({},T,((s={})[P]=D?"0":"",s[C]=E?"0":"",s.transform=1>=(q.devicePixelRatio||1)?"translate("+y+"px, "+O+"px)":"translate3d("+y+"px, "+O+"px, 0)",s)):Object.assign({},T,((a={})[P]=D?O+"px":"",a[C]=E?y+"px":"",a.transform="",a))}var es={left:"right",right:"left",bottom:"top",top:"bottom"};function el(e){return e.replace(/left|right|bottom|top/g,function(e){return es[e]})}var ec={start:"end",end:"start"};function ef(e){return e.replace(/start|end/g,function(e){return ec[e]})}function eu(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&j(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ep(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ed(e,t,r){var n,o,i,a,s,l,c,f,u,p;return t===X?ep(function(e,t){var r=w(e),n=W(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var c=P();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+A(e),y:l}}(e,r)):x(t)?((n=q(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):ep((o=W(e),a=W(o),s=R(o),l=null==(i=o.ownerDocument)?void 0:i.body,c=E(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),f=E(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),u=-s.scrollLeft+A(o),p=-s.scrollTop,"rtl"===L(l||a).direction&&(u+=E(a.clientWidth,l?l.clientWidth:0)-c),{width:c,height:f,x:u,y:p}))}function em(){return{top:0,right:0,bottom:0,left:0}}function eh(e){return Object.assign({},em(),e)}function ev(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function eg(e,t){void 0===t&&(t={});var r,n,o,i,a,s,l,c,f=t,u=f.placement,p=void 0===u?e.placement:u,d=f.strategy,m=void 0===d?e.strategy:d,h=f.boundary,v=f.rootBoundary,g=f.elementContext,b=void 0===g?Y:g,y=f.altBoundary,w=f.padding,j=void 0===w?0:w,k=eh("number"!=typeof j?j:ev(j,U)),C=e.rects.popper,P=e.elements[void 0!==y&&y?b===Y?"reference":Y:b],R=(r=x(P)?P:P.contextElement||W(e.elements.popper),n=void 0===h?"clippingParents":h,o=void 0===v?X:v,l=(s=[].concat("clippingParents"===n?(i=N(z(r)),x(a=["absolute","fixed"].indexOf(L(r).position)>=0&&O(r)?M(r):r)?i.filter(function(e){return x(e)&&eu(e,a)&&"body"!==S(e)}):[]):[].concat(n),[o]))[0],(c=s.reduce(function(e,t){var n=ed(r,t,m);return e.top=E(n.top,e.top),e.right=D(n.right,e.right),e.bottom=D(n.bottom,e.bottom),e.left=E(n.left,e.left),e},ed(r,l,m))).width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c),A=q(e.elements.reference),T=eo({reference:A,element:C,strategy:"absolute",placement:p}),B=ep(Object.assign({},C,T)),H=b===Y?B:A,V={top:R.top-H.top+k.top,bottom:H.bottom-R.bottom+k.bottom,left:R.left-H.left+k.left,right:H.right-R.right+k.right},F=e.modifiersData.offset;if(b===Y&&F){var K=F[p];Object.keys(V).forEach(function(e){var t=[I,_].indexOf(e)>=0?1:-1,r=["top",_].indexOf(e)>=0?"y":"x";V[e]+=K[r]*t})}return V}function eb(e,t,r){return E(e,D(t,r))}function ey(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ew(e){return["top",I,_,V].some(function(t){return e[t]>=0})}var ex=(i=void 0===(o=(n={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,l=w(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",r.update,ee)}),s&&l.addEventListener("resize",r.update,ee),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",r.update,ee)}),s&&l.removeEventListener("resize",r.update,ee)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=eo({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=r.adaptive,i=r.roundOffsets,a=void 0===i||i,s={placement:et(t.placement),variation:er(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ea(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ea(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];O(o)&&S(o)&&(Object.assign(o.style,r),Object.keys(n).forEach(function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});O(n)&&S(n)&&(Object.assign(n.style,i),Object.keys(o).forEach(function(e){n.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=G.reduce(function(e,r){var n,o,a,s,l,c;return e[r]=(n=t.rects,a=[V,"top"].indexOf(o=et(r))>=0?-1:1,l=(s="function"==typeof i?i(Object.assign({},n,{placement:r})):i)[0],c=s[1],l=l||0,c=(c||0)*a,[V,I].indexOf(o)>=0?{x:c,y:l}:{x:l,y:c}),e},{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,l=r.fallbackPlacements,c=r.padding,f=r.boundary,u=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,v=t.options.placement,g=et(v)===v,b=l||(g||!m?[el(v)]:function(e){if(et(e)===F)return[];var t=el(e);return[ef(e),t,ef(t)]}(v)),y=[v].concat(b).reduce(function(e,r){var n,o,i,a,s,l,p,d,v,g,b,y;return e.concat(et(r)===F?(o=(n={placement:r,boundary:f,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}).placement,i=n.boundary,a=n.rootBoundary,s=n.padding,l=n.flipVariations,d=void 0===(p=n.allowedAutoPlacements)?G:p,0===(b=(g=(v=er(o))?l?$:$.filter(function(e){return er(e)===v}):U).filter(function(e){return d.indexOf(e)>=0})).length&&(b=g),Object.keys(y=b.reduce(function(e,r){return e[r]=eg(t,{placement:r,boundary:i,rootBoundary:a,padding:s})[et(r)],e},{})).sort(function(e,t){return y[e]-y[t]})):r)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=y[0],D=0;D<y.length;D++){var k=y[D],C=et(k),P=er(k)===K,q=["top",_].indexOf(C)>=0,R=q?"width":"height",S=eg(t,{placement:k,boundary:f,rootBoundary:u,altBoundary:p,padding:c}),W=q?P?I:V:P?_:"top";w[R]>x[R]&&(W=el(W));var A=el(W),L=[];if(i&&L.push(S[C]<=0),s&&L.push(S[W]<=0,S[A]<=0),L.every(function(e){return e})){E=k,j=!1;break}O.set(k,L)}if(j)for(var T=m?3:1,B=function(e){var t=y.find(function(t){var r=O.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},z=T;z>0&&"break"!==B(z);z--);t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=r.altAxis,a=r.boundary,s=r.rootBoundary,l=r.altBoundary,c=r.padding,f=r.tether,u=void 0===f||f,p=r.tetherOffset,d=void 0===p?0:p,m=eg(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:l}),h=et(t.placement),v=er(t.placement),g=!v,b=en(h),y="x"===b?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,j="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,k="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(w){if(void 0===o||o){var q,R="y"===b?"top":V,S="y"===b?_:I,W="y"===b?"height":"width",A=w[b],L=A+m[R],T=A-m[S],z=u?-O[W]/2:0,N=v===K?x[W]:O[W],H=v===K?-O[W]:-x[W],F=t.elements.arrow,U=u&&F?B(F):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:em(),Y=X[R],$=X[S],G=eb(0,x[W],U[W]),J=g?x[W]/2-z-G-Y-k.mainAxis:N-G-Y-k.mainAxis,Q=g?-x[W]/2+z+G+$+k.mainAxis:H+G+$+k.mainAxis,Z=t.elements.arrow&&M(t.elements.arrow),ee=Z?"y"===b?Z.clientTop||0:Z.clientLeft||0:0,eo=null!=(q=null==C?void 0:C[b])?q:0,ei=eb(u?D(L,A+J-eo-ee):L,A,u?E(T,A+Q-eo):T);w[b]=ei,P[b]=ei-A}if(void 0!==i&&i){var ea,es,el="x"===b?"top":V,ec="x"===b?_:I,ef=w[y],eu="y"===y?"height":"width",ep=ef+m[el],ed=ef-m[ec],eh=-1!==["top",V].indexOf(h),ev=null!=(es=null==C?void 0:C[y])?es:0,ey=eh?ep:ef-x[eu]-O[eu]-ev+k.altAxis,ew=eh?ef+x[eu]+O[eu]-ev-k.altAxis:ed,ex=u&&eh?(ea=eb(ey,ef,ew))>ew?ew:ea:eb(u?ey:ep,ef,u?ew:ed);w[y]=ex,P[y]=ex-ef}t.modifiersData[n]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,o=e.name,i=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,l=et(n.placement),c=en(l),f=[V,I].indexOf(l)>=0?"height":"width";if(a&&s){var u=eh("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:ev(t,U)),p=B(a),d="y"===c?"top":V,m="y"===c?_:I,h=n.rects.reference[f]+n.rects.reference[c]-s[c]-n.rects.popper[f],v=s[c]-n.rects.reference[c],g=M(a),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=u[d],w=b-p[f]-u[m],x=b/2-p[f]/2+(h/2-v/2),O=eb(y,x,w);n.modifiersData[o]=((r={})[c]=O,r.centerOffset=O-x,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&eu(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eg(t,{elementContext:"reference"}),s=eg(t,{altBoundary:!0}),l=ey(a,n),c=ey(s,o,i),f=ew(l),u=ew(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}}]}).defaultModifiers)?[]:o,s=void 0===(a=n.defaultOptions)?Q:a,function(e,t,r){void 0===r&&(r=s);var n,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,f={state:a,setOptions:function(r){var n,o,c,p,d,m="function"==typeof r?r(a.options):r;u(),a.options=Object.assign({},s,a.options,m),a.scrollParents={reference:x(e)?N(e):e.contextElement?N(e.contextElement):[],popper:N(t)};var h=(o=Object.keys(n=[].concat(i,a.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),c=new Map,p=new Set,d=[],o.forEach(function(e){c.set(e.name,e)}),o.forEach(function(e){p.has(e.name)||function e(t){p.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!p.has(t)){var r=c.get(t);r&&e(r)}}),d.push(t)}(e)}),J.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=h.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var o=n({state:a,name:t,instance:f,options:void 0===r?{}:r});l.push(o||function(){})}}),f.update()},forceUpdate:function(){if(!c){var e,t,r,n,o,i,s,l,u,p,d,m,h=a.elements,v=h.reference,g=h.popper;if(Z(v,g)){a.rects={reference:(t=M(g),r="fixed"===a.options.strategy,n=O(t),l=O(t)&&(i=k((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=k(o.height)/t.offsetHeight||1,1!==i||1!==s),u=W(t),p=q(v,l,r),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(n||!n&&!r)&&(("body"!==S(t)||T(u))&&(d=(e=t)!==w(e)&&O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:R(e)),O(t)?(m=q(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):u&&(m.x=A(u))),{x:p.left+d.scrollLeft-m.x,y:p.top+d.scrollTop-m.y,width:p.width,height:p.height}),popper:B(g)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var b=0;b<a.orderedModifiers.length;b++){if(!0===a.reset){a.reset=!1,b=-1;continue}var y=a.orderedModifiers[b],x=y.fn,j=y.options,E=void 0===j?{}:j,D=y.name;"function"==typeof x&&(a=x({state:a,options:E,name:D,instance:f})||a)}}}},update:(n=function(){return new Promise(function(e){f.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(n())})})),o}),destroy:function(){u(),c=!0}};if(!Z(e,t))return f;function u(){l.forEach(function(e){return e()}),l=[]}return f.setOptions(r).then(function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)}),f}),eO=r(2265);function ej(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:o="absolute",arrowPadding:i=8,eventListeners:a=!0,offset:s,gutter:u=8,flip:d=!0,boundary:m="clippingParents",preventOverflow:v=!0,matchWidth:w,direction:x="ltr"}=e,O=(0,eO.useRef)(null),j=(0,eO.useRef)(null),E=(0,eO.useRef)(null),D=function(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr",o=(null==(t=g[e])?void 0:t[n])||e;return"ltr"===n?o:null!=(r=b[e])?r:o}(n,x),k=(0,eO.useRef)(()=>{}),C=(0,eO.useCallback)(()=>{var e;t&&O.current&&j.current&&(null==(e=k.current)||e.call(k),E.current=ex(O.current,j.current,{placement:D,modifiers:[h,p,f,{...c,enabled:!!w},{name:"eventListeners",...(0,l.$B)(a)},{name:"arrow",options:{padding:i}},{name:"offset",options:{offset:null!=s?s:[0,u]}},{name:"flip",enabled:!!d,options:{padding:8}},{name:"preventOverflow",enabled:!!v,options:{boundary:m}},...null!=r?r:[]],strategy:o}),E.current.forceUpdate(),k.current=E.current.destroy)},[D,t,r,w,a,i,s,u,d,v,m,o]);(0,eO.useEffect)(()=>()=>{var e;O.current||j.current||(null==(e=E.current)||e.destroy(),E.current=null)},[]);let P=(0,eO.useCallback)(e=>{O.current=e,C()},[C]),q=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,y.lq)(P,t)}},[P]),R=(0,eO.useCallback)(e=>{j.current=e,C()},[C]),S=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,y.lq)(R,t),style:{...e.style,position:o,minWidth:w?void 0:"max-content",inset:"0 auto auto 0"}}},[o,R,w]),W=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{size:r,shadowColor:n,bg:o,style:i,...a}=e;return{...a,ref:t,"data-popper-arrow":"",style:function(e){let{size:t,shadowColor:r,bg:n,style:o}=e,i={...o,position:"absolute"};return t&&(i["--popper-arrow-size"]=t),r&&(i["--popper-arrow-shadow-color"]=r),n&&(i["--popper-arrow-bg"]=n),i}(e)}},[]),A=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-popper-arrow-inner":""}},[]);return{update(){var e;null==(e=E.current)||e.update()},forceUpdate(){var e;null==(e=E.current)||e.forceUpdate()},transformOrigin:l.Dq.transformOrigin.varRef,referenceRef:P,popperRef:R,getPopperProps:S,getArrowProps:W,getArrowInnerProps:A,getReferenceProps:q}}},59445:function(e,t,r){r.d(t,{q:function(){return i}});var n=r(37132),o=r(2265);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onClose:t,onOpen:r,isOpen:i,id:a}=e,s=(0,n.W)(r),l=(0,n.W)(t),[c,f]=(0,o.useState)(e.defaultIsOpen||!1),u=void 0!==i?i:c,p=void 0!==i,d=(0,o.useId)(),m=null!=a?a:"disclosure-".concat(d),h=(0,o.useCallback)(()=>{p||f(!1),null==l||l()},[p,l]),v=(0,o.useCallback)(()=>{p||f(!0),null==s||s()},[p,s]),g=(0,o.useCallback)(()=>{u?h():v()},[u,v,h]);return{isOpen:u,onOpen:v,onClose:h,onToggle:g,isControlled:p,getButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":u,"aria-controls":m,onClick(t){var r;null==(r=e.onClick)||r.call(e,t),g()}}},getDisclosureProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,hidden:!u,id:m}}}}},77365:function(e,t,r){r.d(t,{O:function(){return i}});var n=r(2265),o=r(37132);function i(e,t,r,i){let a=(0,o.W)(r);return(0,n.useEffect)(()=>{let n="function"==typeof e?e():null!=e?e:document;if(r&&n)return n.addEventListener(t,a,i),()=>{n.removeEventListener(t,a,i)}},[t,e,i,a,r]),()=>{let r="function"==typeof e?e():null!=e?e:document;null==r||r.removeEventListener(t,a,i)}}},99087:function(e,t,r){r.d(t,{u:function(){return D}});var n={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},o=r(4360),i=r(65794),a=r(16379),s=r(59445),l=r(77365),c=r(14697),f=r(99372),u=r(2265),p=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},d=e=>{var t,r;return(null==(r=null==(t=e.current)?void 0:t.ownerDocument)?void 0:r.defaultView)||window},m="chakra-ui:close-tooltip",h=r(24402),v=r(69636),g=r(15151),b=r(18713),y=r(29506),w=r(43983),x=r(39790),O=r(34446),j=r(57437),E=(0,v.m)(x.E.div),D=(0,g.G)((e,t)=>{var r,g;let x;let D=(0,b.mq)("Tooltip",e),k=(0,y.Lr)(e),C=(0,w.F)(),{children:P,label:q,shouldWrapChildren:R,"aria-label":S,hasArrow:W,bg:A,portalProps:L,background:T,backgroundColor:B,bgColor:z,motionProps:N,...H}=k,M=null!=(g=null!=(r=null!=T?T:B)?r:A)?g:z;if(M){D.bg=M;let e=(0,y.K1)(C,"colors",M);D[a.Dq.arrowBg.var]=e}let _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openDelay:t=0,closeDelay:r=0,closeOnClick:n=!0,closeOnMouseDown:h,closeOnScroll:v,closeOnPointerDown:g=h,closeOnEsc:b=!0,onOpen:y,onClose:w,placement:x,id:O,isOpen:j,defaultIsOpen:E,arrowSize:D=10,arrowShadowColor:k,arrowPadding:C,modifiers:P,isDisabled:q,gutter:R,offset:S,direction:W,...A}=e,{isOpen:L,onOpen:T,onClose:B}=(0,s.q)({isOpen:j,defaultIsOpen:E,onOpen:y,onClose:w}),{referenceRef:z,getPopperProps:N,getArrowInnerProps:H,getArrowProps:M}=(0,i.D)({enabled:L,placement:x,arrowPadding:C,modifiers:P,gutter:R,offset:S,direction:W}),_=(0,u.useId)(),I="tooltip-".concat(null!=O?O:_),V=(0,u.useRef)(null),F=(0,u.useRef)(),U=(0,u.useCallback)(()=>{F.current&&(clearTimeout(F.current),F.current=void 0)},[]),K=(0,u.useRef)(),X=(0,u.useCallback)(()=>{K.current&&(clearTimeout(K.current),K.current=void 0)},[]),Y=(0,u.useCallback)(()=>{X(),B()},[B,X]),$=((0,u.useEffect)(()=>{let e=p(V);return e.addEventListener(m,Y),()=>e.removeEventListener(m,Y)},[Y,V]),()=>{let e=p(V),t=d(V);e.dispatchEvent(new t.CustomEvent(m))}),G=(0,u.useCallback)(()=>{if(!q&&!F.current){L&&$();let e=d(V);F.current=e.setTimeout(T,t)}},[$,q,L,T,t]),J=(0,u.useCallback)(()=>{U();let e=d(V);K.current=e.setTimeout(Y,r)},[r,Y,U]),Q=(0,u.useCallback)(()=>{L&&n&&J()},[n,J,L]),Z=(0,u.useCallback)(()=>{L&&g&&J()},[g,J,L]),ee=(0,u.useCallback)(e=>{L&&"Escape"===e.key&&J()},[L,J]);(0,l.O)(()=>p(V),"keydown",b?ee:void 0),(0,l.O)(()=>{if(!v)return null;let e=V.current;if(!e)return null;let t=function e(t){return["html","body","#document"].includes(t.localName)?t.ownerDocument.body:(0,o.Re)(t)&&function(e){let{overflow:t,overflowX:r,overflowY:n}=(e.ownerDocument.defaultView||window).getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(t+n+r)}(t)?t:e("html"===t.localName?t:t.assignedSlot||t.parentElement||t.ownerDocument.documentElement)}(e);return"body"===t.localName?d(V):t},"scroll",()=>{L&&v&&Y()},{passive:!0,capture:!0}),(0,u.useEffect)(()=>{q&&(U(),L&&B())},[q,L,B,U]),(0,u.useEffect)(()=>()=>{U(),X()},[U,X]),(0,l.O)(()=>V.current,"pointerleave",J);let et=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,c.lq)(V,t,z),onPointerEnter:(0,f.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&G()}),onClick:(0,f.v0)(e.onClick,Q),onPointerDown:(0,f.v0)(e.onPointerDown,Z),onFocus:(0,f.v0)(e.onFocus,G),onBlur:(0,f.v0)(e.onBlur,J),"aria-describedby":L?I:void 0}},[G,J,Z,L,I,Q,z]),er=(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return N({...e,style:{...e.style,[a.Dq.arrowSize.var]:D?"".concat(D,"px"):void 0,[a.Dq.arrowShadowColor.var]:k}},t)},[N,D,k]);return{isOpen:L,show:G,hide:J,getTriggerProps:et,getTooltipProps:(0,u.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r={...e.style,position:"relative",transformOrigin:a.Dq.transformOrigin.varRef};return{ref:t,...A,...e,id:I,role:"tooltip",style:r}},[A,I]),getTooltipPositionerProps:er,getArrowProps:M,getArrowInnerProps:H}}({...H,direction:C.direction});if("string"==typeof P||R)x=(0,j.jsx)(v.m.span,{display:"inline-block",tabIndex:0,..._.getTriggerProps(),children:P});else{let e=u.Children.only(P);x=(0,u.cloneElement)(e,_.getTriggerProps(e.props,e.ref))}let I=!!S,V=_.getTooltipProps({},t),F=I?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(V,["role","id"]):V,U=function(e,t){let r={};for(let n of t)n in e&&(r[n]=e[n]);return r}(V,["role","id"]);return q?(0,j.jsxs)(j.Fragment,{children:[x,(0,j.jsx)(O.M,{children:_.isOpen&&(0,j.jsx)(h.h,{...L,children:(0,j.jsx)(v.m.div,{..._.getTooltipPositionerProps(),__css:{zIndex:D.zIndex,pointerEvents:"none"},children:(0,j.jsxs)(E,{variants:n,initial:"exit",animate:"enter",exit:"exit",...N,...F,__css:D,children:[q,I&&(0,j.jsx)(v.m.span,{srOnly:!0,...U,children:S}),W&&(0,j.jsx)(v.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,j.jsx)(v.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:D.bg}})})]})})})})]}):(0,j.jsx)(j.Fragment,{children:P})});D.displayName="Tooltip"},91810:function(e,t,r){r.d(t,{w_:function(){return f}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return t=>n.createElement(u,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:o,size:i,title:l}=e,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);