"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{6379:function(e,t,r){r.d(t,{$B:function(){return f},Dq:function(){return o},Ke:function(){return i},mv:function(){return s}});var n=(e,t)=>({var:e,varRef:t?"var(".concat(e,", ").concat(t,")"):"var(".concat(e,")")}),o={arrowShadowColor:n("--popper-arrow-shadow-color"),arrowSize:n("--popper-arrow-size","8px"),arrowSizeHalf:n("--popper-arrow-size-half"),arrowBg:n("--popper-arrow-bg"),transformOrigin:n("--popper-transform-origin"),arrowOffset:n("--popper-arrow-offset")};function i(e){return e.includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0}var a={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},s=e=>a[e],l={scroll:!0,resize:!0};function f(e){return"object"==typeof e?{enabled:!0,options:{...l,...e}}:{enabled:e,options:l}}},5794:function(e,t,r){r.d(t,{D:function(){return ej}});var n,o,i,a,s,l=r(6379),f={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{let{state:t}=e;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:e=>{let{state:t}=e;return()=>{let e=t.elements.reference;t.elements.popper.style.width="".concat(e.offsetWidth,"px")}}},c={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{let{state:t}=e;p(t)},effect:e=>{let{state:t}=e;return()=>{p(t)}}},p=e=>{e.elements.popper.style.setProperty(l.Dq.transformOrigin.var,(0,l.mv)(e.placement))},u={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;d(t)}},d=e=>{var t;if(!e.placement)return;let r=h(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:l.Dq.arrowSize.varRef,height:l.Dq.arrowSize.varRef,zIndex:-1});let t={[l.Dq.arrowSizeHalf.var]:"calc(".concat(l.Dq.arrowSize.varRef," / 2 - 1px)"),[l.Dq.arrowOffset.var]:"calc(".concat(l.Dq.arrowSizeHalf.varRef," * -1)")};for(let r in t)e.elements.arrow.style.setProperty(r,t[r])}},h=e=>e.startsWith("top")?{property:"bottom",value:l.Dq.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:l.Dq.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:l.Dq.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:l.Dq.arrowOffset.varRef}:void 0,m={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{let{state:t}=e;v(t)},effect:e=>{let{state:t}=e;return()=>{v(t)}}},v=e=>{if(!e.elements.arrow)return;let t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;let r=(0,l.Ke)(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:l.Dq.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},g={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},b={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"},y=r(4697);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=w(e).Element;return e instanceof t||e instanceof Element}function O(e){var t=w(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function j(e){if("undefined"==typeof ShadowRoot)return!1;var t=w(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var D=Math.max,E=Math.min,k=Math.round;function P(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function W(){return!/^((?!chrome|android).)*safari/i.test(P())}function C(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&O(e)&&(o=e.offsetWidth>0&&k(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&k(n.height)/e.offsetHeight||1);var a=(x(e)?w(e):window).visualViewport,s=!W()&&r,l=(n.left+(s&&a?a.offsetLeft:0))/o,f=(n.top+(s&&a?a.offsetTop:0))/i,c=n.width/o,p=n.height/i;return{width:c,height:p,top:f,right:l+c,bottom:f+p,left:l,x:l,y:f}}function q(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function A(e){return e?(e.nodeName||"").toLowerCase():null}function R(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function S(e){return C(R(e)).left+q(e).scrollLeft}function L(e){return w(e).getComputedStyle(e)}function B(e){var t=L(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function H(e){var t=C(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function z(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||R(e)}function M(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:O(t)&&B(t)?t:e(z(t))}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=w(n),a=o?[i].concat(i.visualViewport||[],B(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(M(z(a)))}function N(e){return O(e)&&"fixed"!==L(e).position?e.offsetParent:null}function T(e){for(var t=w(e),r=N(e);r&&["table","td","th"].indexOf(A(r))>=0&&"static"===L(r).position;)r=N(r);return r&&("html"===A(r)||"body"===A(r)&&"static"===L(r).position)?t:r||function(e){var t=/firefox/i.test(P());if(/Trident/i.test(P())&&O(e)&&"fixed"===L(e).position)return null;var r=z(e);for(j(r)&&(r=r.host);O(r)&&0>["html","body"].indexOf(A(r));){var n=L(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var V="bottom",I="right",_="left",U="auto",F=["top",V,I,_],K="start",X="viewport",Y="popper",$=F.reduce(function(e,t){return e.concat([t+"-"+K,t+"-end"])},[]),G=[].concat(F,[U]).reduce(function(e,t){return e.concat([t,t+"-"+K,t+"-end"])},[]),J=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],Q={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ee={passive:!0};function et(e){return e.split("-")[0]}function er(e){return e.split("-")[1]}function en(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function eo(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?et(o):null,a=o?er(o):null,s=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2;switch(i){case"top":t={x:s,y:r.y-n.height};break;case V:t={x:s,y:r.y+r.height};break;case I:t={x:r.x+r.width,y:l};break;case _:t={x:r.x-n.width,y:l};break;default:t={x:r.x,y:r.y}}var f=i?en(i):null;if(null!=f){var c="y"===f?"height":"width";switch(a){case K:t[f]=t[f]-(r[c]/2-n[c]/2);break;case"end":t[f]=t[f]+(r[c]/2-n[c]/2)}}return t}var ei={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ea(e){var t,r,n,o,i,a,s,l=e.popper,f=e.popperRect,c=e.placement,p=e.variation,u=e.offsets,d=e.position,h=e.gpuAcceleration,m=e.adaptive,v=e.roundOffsets,g=e.isFixed,b=u.x,y=void 0===b?0:b,x=u.y,O=void 0===x?0:x,j="function"==typeof v?v({x:y,y:O}):{x:y,y:O};y=j.x,O=j.y;var D=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),P=_,W="top",C=window;if(m){var q=T(l),A="clientHeight",S="clientWidth";q===w(l)&&"static"!==L(q=R(l)).position&&"absolute"===d&&(A="scrollHeight",S="scrollWidth"),("top"===c||(c===_||c===I)&&"end"===p)&&(W=V,O-=(g&&q===C&&C.visualViewport?C.visualViewport.height:q[A])-f.height,O*=h?1:-1),(c===_||("top"===c||c===V)&&"end"===p)&&(P=I,y-=(g&&q===C&&C.visualViewport?C.visualViewport.width:q[S])-f.width,y*=h?1:-1)}var B=Object.assign({position:d},m&&ei),H=!0===v?(t={x:y,y:O},r=w(l),n=t.x,o=t.y,{x:k(n*(i=r.devicePixelRatio||1))/i||0,y:k(o*i)/i||0}):{x:y,y:O};return(y=H.x,O=H.y,h)?Object.assign({},B,((s={})[W]=E?"0":"",s[P]=D?"0":"",s.transform=1>=(C.devicePixelRatio||1)?"translate("+y+"px, "+O+"px)":"translate3d("+y+"px, "+O+"px, 0)",s)):Object.assign({},B,((a={})[W]=E?O+"px":"",a[P]=D?y+"px":"",a.transform="",a))}var es={left:"right",right:"left",bottom:"top",top:"bottom"};function el(e){return e.replace(/left|right|bottom|top/g,function(e){return es[e]})}var ef={start:"end",end:"start"};function ec(e){return e.replace(/start|end/g,function(e){return ef[e]})}function ep(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&j(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function eu(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ed(e,t,r){var n,o,i,a,s,l,f,c,p,u;return t===X?eu(function(e,t){var r=w(e),n=R(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var f=W();(f||!f&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+S(e),y:l}}(e,r)):x(t)?((n=C(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):eu((o=R(e),a=R(o),s=q(o),l=null==(i=o.ownerDocument)?void 0:i.body,f=D(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),c=D(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),p=-s.scrollLeft+S(o),u=-s.scrollTop,"rtl"===L(l||a).direction&&(p+=D(a.clientWidth,l?l.clientWidth:0)-f),{width:f,height:c,x:p,y:u}))}function eh(){return{top:0,right:0,bottom:0,left:0}}function em(e){return Object.assign({},eh(),e)}function ev(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function eg(e,t){void 0===t&&(t={});var r,n,o,i,a,s,l,f,c=t,p=c.placement,u=void 0===p?e.placement:p,d=c.strategy,h=void 0===d?e.strategy:d,m=c.boundary,v=c.rootBoundary,g=c.elementContext,b=void 0===g?Y:g,y=c.altBoundary,w=c.padding,j=void 0===w?0:w,k=em("number"!=typeof j?j:ev(j,F)),P=e.rects.popper,W=e.elements[void 0!==y&&y?b===Y?"reference":Y:b],q=(r=x(W)?W:W.contextElement||R(e.elements.popper),n=void 0===m?"clippingParents":m,o=void 0===v?X:v,l=(s=[].concat("clippingParents"===n?(i=M(z(r)),x(a=["absolute","fixed"].indexOf(L(r).position)>=0&&O(r)?T(r):r)?i.filter(function(e){return x(e)&&ep(e,a)&&"body"!==A(e)}):[]):[].concat(n),[o]))[0],(f=s.reduce(function(e,t){var n=ed(r,t,h);return e.top=D(n.top,e.top),e.right=E(n.right,e.right),e.bottom=E(n.bottom,e.bottom),e.left=D(n.left,e.left),e},ed(r,l,h))).width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f),S=C(e.elements.reference),B=eo({reference:S,element:P,strategy:"absolute",placement:u}),H=eu(Object.assign({},P,B)),N=b===Y?H:S,_={top:q.top-N.top+k.top,bottom:N.bottom-q.bottom+k.bottom,left:q.left-N.left+k.left,right:N.right-q.right+k.right},U=e.modifiersData.offset;if(b===Y&&U){var K=U[u];Object.keys(_).forEach(function(e){var t=[I,V].indexOf(e)>=0?1:-1,r=["top",V].indexOf(e)>=0?"y":"x";_[e]+=K[r]*t})}return _}function eb(e,t,r){return D(e,E(t,r))}function ey(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ew(e){return["top",I,V,_].some(function(t){return e[t]>=0})}var ex=(i=void 0===(o=(n={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,l=w(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(e){e.addEventListener("scroll",r.update,ee)}),s&&l.addEventListener("resize",r.update,ee),function(){i&&f.forEach(function(e){e.removeEventListener("scroll",r.update,ee)}),s&&l.removeEventListener("resize",r.update,ee)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=eo({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=r.adaptive,i=r.roundOffsets,a=void 0===i||i,s={placement:et(t.placement),variation:er(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ea(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ea(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];O(o)&&A(o)&&(Object.assign(o.style,r),Object.keys(n).forEach(function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});O(n)&&A(n)&&(Object.assign(n.style,i),Object.keys(o).forEach(function(e){n.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=G.reduce(function(e,r){var n,o,a,s,l,f;return e[r]=(n=t.rects,a=[_,"top"].indexOf(o=et(r))>=0?-1:1,l=(s="function"==typeof i?i(Object.assign({},n,{placement:r})):i)[0],f=s[1],l=l||0,f=(f||0)*a,[_,I].indexOf(o)>=0?{x:f,y:l}:{x:l,y:f}),e},{}),s=a[t.placement],l=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,l=r.fallbackPlacements,f=r.padding,c=r.boundary,p=r.rootBoundary,u=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,v=t.options.placement,g=et(v)===v,b=l||(g||!h?[el(v)]:function(e){if(et(e)===U)return[];var t=el(e);return[ec(e),t,ec(t)]}(v)),y=[v].concat(b).reduce(function(e,r){var n,o,i,a,s,l,u,d,v,g,b,y;return e.concat(et(r)===U?(o=(n={placement:r,boundary:c,rootBoundary:p,padding:f,flipVariations:h,allowedAutoPlacements:m}).placement,i=n.boundary,a=n.rootBoundary,s=n.padding,l=n.flipVariations,d=void 0===(u=n.allowedAutoPlacements)?G:u,0===(b=(g=(v=er(o))?l?$:$.filter(function(e){return er(e)===v}):F).filter(function(e){return d.indexOf(e)>=0})).length&&(b=g),Object.keys(y=b.reduce(function(e,r){return e[r]=eg(t,{placement:r,boundary:i,rootBoundary:a,padding:s})[et(r)],e},{})).sort(function(e,t){return y[e]-y[t]})):r)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,D=y[0],E=0;E<y.length;E++){var k=y[E],P=et(k),W=er(k)===K,C=["top",V].indexOf(P)>=0,q=C?"width":"height",A=eg(t,{placement:k,boundary:c,rootBoundary:p,altBoundary:u,padding:f}),R=C?W?I:_:W?V:"top";w[q]>x[q]&&(R=el(R));var S=el(R),L=[];if(i&&L.push(A[P]<=0),s&&L.push(A[R]<=0,A[S]<=0),L.every(function(e){return e})){D=k,j=!1;break}O.set(k,L)}if(j)for(var B=h?3:1,H=function(e){var t=y.find(function(t){var r=O.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return D=t,"break"},z=B;z>0&&"break"!==H(z);z--);t.placement!==D&&(t.modifiersData[n]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=r.altAxis,a=r.boundary,s=r.rootBoundary,l=r.altBoundary,f=r.padding,c=r.tether,p=void 0===c||c,u=r.tetherOffset,d=void 0===u?0:u,h=eg(t,{boundary:a,rootBoundary:s,padding:f,altBoundary:l}),m=et(t.placement),v=er(t.placement),g=!v,b=en(m),y="x"===b?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,j="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,k="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(w){if(void 0===o||o){var C,q="y"===b?"top":_,A="y"===b?V:I,R="y"===b?"height":"width",S=w[b],L=S+h[q],B=S-h[A],z=p?-O[R]/2:0,M=v===K?x[R]:O[R],N=v===K?-O[R]:-x[R],U=t.elements.arrow,F=p&&U?H(U):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eh(),Y=X[q],$=X[A],G=eb(0,x[R],F[R]),J=g?x[R]/2-z-G-Y-k.mainAxis:M-G-Y-k.mainAxis,Q=g?-x[R]/2+z+G+$+k.mainAxis:N+G+$+k.mainAxis,Z=t.elements.arrow&&T(t.elements.arrow),ee=Z?"y"===b?Z.clientTop||0:Z.clientLeft||0:0,eo=null!=(C=null==P?void 0:P[b])?C:0,ei=eb(p?E(L,S+J-eo-ee):L,S,p?D(B,S+Q-eo):B);w[b]=ei,W[b]=ei-S}if(void 0!==i&&i){var ea,es,el="x"===b?"top":_,ef="x"===b?V:I,ec=w[y],ep="y"===y?"height":"width",eu=ec+h[el],ed=ec-h[ef],em=-1!==["top",_].indexOf(m),ev=null!=(es=null==P?void 0:P[y])?es:0,ey=em?eu:ec-x[ep]-O[ep]-ev+k.altAxis,ew=em?ec+x[ep]+O[ep]-ev-k.altAxis:ed,ex=p&&em?(ea=eb(ey,ec,ew))>ew?ew:ea:eb(p?ey:eu,ec,p?ew:ed);w[y]=ex,W[y]=ex-ec}t.modifiersData[n]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,o=e.name,i=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,l=et(n.placement),f=en(l),c=[_,I].indexOf(l)>=0?"height":"width";if(a&&s){var p=em("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:ev(t,F)),u=H(a),d="y"===f?"top":_,h="y"===f?V:I,m=n.rects.reference[c]+n.rects.reference[f]-s[f]-n.rects.popper[c],v=s[f]-n.rects.reference[f],g=T(a),b=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,y=p[d],w=b-u[c]-p[h],x=b/2-u[c]/2+(m/2-v/2),O=eb(y,x,w);n.modifiersData[o]=((r={})[f]=O,r.centerOffset=O-x,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&ep(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eg(t,{elementContext:"reference"}),s=eg(t,{altBoundary:!0}),l=ey(a,n),f=ey(s,o,i),c=ew(l),p=ew(f);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}).defaultModifiers)?[]:o,s=void 0===(a=n.defaultOptions)?Q:a,function(e,t,r){void 0===r&&(r=s);var n,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],f=!1,c={state:a,setOptions:function(r){var n,o,f,u,d,h="function"==typeof r?r(a.options):r;p(),a.options=Object.assign({},s,a.options,h),a.scrollParents={reference:x(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var m=(o=Object.keys(n=[].concat(i,a.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),f=new Map,u=new Set,d=[],o.forEach(function(e){f.set(e.name,e)}),o.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var r=f.get(t);r&&e(r)}}),d.push(t)}(e)}),J.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=m.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var o=n({state:a,name:t,instance:c,options:void 0===r?{}:r});l.push(o||function(){})}}),c.update()},forceUpdate:function(){if(!f){var e,t,r,n,o,i,s,l,p,u,d,h,m=a.elements,v=m.reference,g=m.popper;if(Z(v,g)){a.rects={reference:(t=T(g),r="fixed"===a.options.strategy,n=O(t),l=O(t)&&(i=k((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=k(o.height)/t.offsetHeight||1,1!==i||1!==s),p=R(t),u=C(v,l,r),d={scrollLeft:0,scrollTop:0},h={x:0,y:0},(n||!n&&!r)&&(("body"!==A(t)||B(p))&&(d=(e=t)!==w(e)&&O(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:q(e)),O(t)?(h=C(t,!0),h.x+=t.clientLeft,h.y+=t.clientTop):p&&(h.x=S(p))),{x:u.left+d.scrollLeft-h.x,y:u.top+d.scrollTop-h.y,width:u.width,height:u.height}),popper:H(g)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var b=0;b<a.orderedModifiers.length;b++){if(!0===a.reset){a.reset=!1,b=-1;continue}var y=a.orderedModifiers[b],x=y.fn,j=y.options,D=void 0===j?{}:j,E=y.name;"function"==typeof x&&(a=x({state:a,options:D,name:E,instance:c})||a)}}}},update:(n=function(){return new Promise(function(e){c.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(n())})})),o}),destroy:function(){p(),f=!0}};if(!Z(e,t))return c;function p(){l.forEach(function(e){return e()}),l=[]}return c.setOptions(r).then(function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)}),c}),eO=r(2265);function ej(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:o="absolute",arrowPadding:i=8,eventListeners:a=!0,offset:s,gutter:p=8,flip:d=!0,boundary:h="clippingParents",preventOverflow:v=!0,matchWidth:w,direction:x="ltr"}=e,O=(0,eO.useRef)(null),j=(0,eO.useRef)(null),D=(0,eO.useRef)(null),E=function(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr",o=(null==(t=g[e])?void 0:t[n])||e;return"ltr"===n?o:null!=(r=b[e])?r:o}(n,x),k=(0,eO.useRef)(()=>{}),P=(0,eO.useCallback)(()=>{var e;t&&O.current&&j.current&&(null==(e=k.current)||e.call(k),D.current=ex(O.current,j.current,{placement:E,modifiers:[m,u,c,{...f,enabled:!!w},{name:"eventListeners",...(0,l.$B)(a)},{name:"arrow",options:{padding:i}},{name:"offset",options:{offset:null!=s?s:[0,p]}},{name:"flip",enabled:!!d,options:{padding:8}},{name:"preventOverflow",enabled:!!v,options:{boundary:h}},...null!=r?r:[]],strategy:o}),D.current.forceUpdate(),k.current=D.current.destroy)},[E,t,r,w,a,i,s,p,d,v,h,o]);(0,eO.useEffect)(()=>()=>{var e;O.current||j.current||(null==(e=D.current)||e.destroy(),D.current=null)},[]);let W=(0,eO.useCallback)(e=>{O.current=e,P()},[P]),C=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,y.lq)(W,t)}},[W]),q=(0,eO.useCallback)(e=>{j.current=e,P()},[P]),A=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,y.lq)(q,t),style:{...e.style,position:o,minWidth:w?void 0:"max-content",inset:"0 auto auto 0"}}},[o,q,w]),R=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{size:r,shadowColor:n,bg:o,style:i,...a}=e;return{...a,ref:t,"data-popper-arrow":"",style:function(e){let{size:t,shadowColor:r,bg:n,style:o}=e,i={...o,position:"absolute"};return t&&(i["--popper-arrow-size"]=t),r&&(i["--popper-arrow-shadow-color"]=r),n&&(i["--popper-arrow-bg"]=n),i}(e)}},[]),S=(0,eO.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-popper-arrow-inner":""}},[]);return{update(){var e;null==(e=D.current)||e.update()},forceUpdate(){var e;null==(e=D.current)||e.forceUpdate()},transformOrigin:l.Dq.transformOrigin.varRef,referenceRef:W,popperRef:q,getPopperProps:A,getArrowProps:R,getArrowInnerProps:S,getReferenceProps:C}}},9445:function(e,t,r){r.d(t,{q:function(){return i}});var n=r(7132),o=r(2265);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onClose:t,onOpen:r,isOpen:i,id:a}=e,s=(0,n.W)(r),l=(0,n.W)(t),[f,c]=(0,o.useState)(e.defaultIsOpen||!1),p=void 0!==i?i:f,u=void 0!==i,d=(0,o.useId)(),h=null!=a?a:"disclosure-".concat(d),m=(0,o.useCallback)(()=>{u||c(!1),null==l||l()},[u,l]),v=(0,o.useCallback)(()=>{u||c(!0),null==s||s()},[u,s]),g=(0,o.useCallback)(()=>{p?m():v()},[p,v,m]);return{isOpen:p,onOpen:v,onClose:m,onToggle:g,isControlled:u,getButtonProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":p,"aria-controls":h,onClick(t){var r;null==(r=e.onClick)||r.call(e,t),g()}}},getDisclosureProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,hidden:!p,id:h}}}}},7365:function(e,t,r){r.d(t,{O:function(){return i}});var n=r(2265),o=r(7132);function i(e,t,r,i){let a=(0,o.W)(r);return(0,n.useEffect)(()=>{let n="function"==typeof e?e():null!=e?e:document;if(r&&n)return n.addEventListener(t,a,i),()=>{n.removeEventListener(t,a,i)}},[t,e,i,a,r]),()=>{let r="function"==typeof e?e():null!=e?e:document;null==r||r.removeEventListener(t,a,i)}}},1810:function(e,t,r){r.d(t,{w_:function(){return c}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(p,s({attr:f({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,f({key:r},t.attr),e(t.child)))}(e.child))}function p(e){var t=t=>{var r,{attr:o,size:i,title:l}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),p=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:f(f({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);