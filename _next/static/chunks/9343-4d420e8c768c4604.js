"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9343],{39343:function(e,t,r){r.d(t,{Qr:function(){return B},cI:function(){return eV},qo:function(){return j}});var s=r(2265),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,g=(e,t,r)=>{if(!t||!n(e))return r;let s=h(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return v(s)||s===e?v(e[t])?r:e[t]:s},_=e=>"boolean"==typeof e,p=e=>/^\w*$/.test(e),b=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,t,r)=>{let s=-1,a=p(t)?[t]:b(t),i=a.length,l=i-1;for(;++s<i;){let t=a[s],i=r;if(s!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};let F={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},A={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},w={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},x=s.createContext(null),S=()=>s.useContext(x);var k=(e,t,r,s=!0)=>{let a={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(a,i,{get:()=>(t._proxyFormState[i]!==A.all&&(t._proxyFormState[i]=!s||A.all),r&&(r[i]=!0),e[i])});return a},D=e=>n(e)&&!Object.keys(e).length,C=(e,t,r,s)=>{r(e);let{name:a,...i}=e;return D(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!s||A.all))},E=e=>Array.isArray(e)?e:[e],O=(e,t,r)=>!e||!t||e===t||E(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));function L(e){let t=s.useRef(e);t.current=e,s.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var T=e=>"string"==typeof e,U=(e,t,r,s,a)=>T(e)?(s&&t.watch.add(e),g(r,e,a)):Array.isArray(e)?e.map(e=>(s&&t.watch.add(e),g(r,e))):(s&&(t.watchAll=!0),r);function j(e){let t=S(),{control:r=t.control,name:a,defaultValue:i,disabled:l,exact:u}=e||{},n=s.useRef(a);n.current=a,L({disabled:l,subject:r._subjects.values,next:e=>{O(n.current,e.name,u)&&d(m(U(n.current,r._names,e.values||r._formValues,!1,i)))}});let[o,d]=s.useState(r._getWatch(a,i));return s.useEffect(()=>r._removeUnmounted()),o}let B=e=>e.render(function(e){let t=S(),{name:r,disabled:a,control:i=t.control,shouldUnregister:l}=e,u=f(i._names.array,r),n=j({control:i,name:r,defaultValue:g(i._formValues,r,g(i._defaultValues,r,e.defaultValue)),exact:!0}),d=function(e){let t=S(),{control:r=t.control,disabled:a,name:i,exact:l}=e||{},[u,n]=s.useState(r._formState),o=s.useRef(!0),d=s.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=s.useRef(i);return f.current=i,L({disabled:a,next:e=>o.current&&O(f.current,e.name,l)&&C(e,d.current,r._updateFormState)&&n({...r._formState,...e}),subject:r._subjects.state}),s.useEffect(()=>(o.current=!0,d.current.isValid&&r._updateValid(!0),()=>{o.current=!1}),[r]),k(u,r,d.current,!1)}({control:i,name:r,exact:!0}),c=s.useRef(i.register(r,{...e.rules,value:n,..._(e.disabled)?{disabled:e.disabled}:{}}));return s.useEffect(()=>{let e=i._options.shouldUnregister||l,t=(e,t)=>{let r=g(i._fields,e);r&&r._f&&(r._f.mount=t)};if(t(r,!0),e){let e=m(g(i._options.defaultValues,r));V(i._defaultValues,r,e),v(g(i._formValues,r))&&V(i._formValues,r,e)}return()=>{(u?e&&!i._state.action:e)?i.unregister(r):t(r,!1)}},[r,i,u,l]),s.useEffect(()=>{g(i._fields,r)&&i._updateDisabledField({disabled:a,fields:i._fields,name:r,value:g(i._fields,r)._f.value})},[a,r,i]),{field:{name:r,value:n,..._(a)||d.disabled?{disabled:d.disabled||a}:{},onChange:s.useCallback(e=>c.current.onChange({target:{value:o(e),name:r},type:F.CHANGE}),[r]),onBlur:s.useCallback(()=>c.current.onBlur({target:{value:g(i._formValues,r),name:r},type:F.BLUR}),[r,i]),ref:s.useCallback(e=>{let t=g(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})},[i._fields,r])},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!g(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!g(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!g(d.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!g(d.validatingFields,r)},error:{enumerable:!0,get:()=>g(d.errors,r)}})}}(e));var N=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},M=e=>({isOnSubmit:!e||e===A.onSubmit,isOnBlur:e===A.onBlur,isOnChange:e===A.onChange,isOnAll:e===A.all,isOnTouch:e===A.onTouched}),R=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let q=(e,t,r,s)=>{for(let a of r||Object.keys(e)){let r=g(e,a);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s||e.ref&&t(e.ref,e.name)&&!s)break;q(i,t)}else n(i)&&q(i,t)}}};var P=(e,t,r)=>{let s=E(g(e,r));return V(s,"root",t[r]),V(e,r,s),e},I=e=>"file"===e.type,H=e=>"function"==typeof e,W=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},$=e=>T(e),G=e=>"radio"===e.type,Q=e=>e instanceof RegExp;let z={value:!1,isValid:!1},J={value:!0,isValid:!0};var K=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?J:{value:e[0].value,isValid:!0}:J:z}return z};let X={isValid:!1,value:null};var Y=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,X):X;function Z(e,t,r="validate"){if($(e)||Array.isArray(e)&&e.every($)||_(e)&&!e)return{type:r,message:$(e)?e:"",ref:t}}var ee=e=>n(e)&&!Q(e)?e:{value:e,message:""},et=async(e,t,r,s,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:h,validate:p,name:b,valueAsNumber:V,mount:F,disabled:A}=e._f,x=g(t,b);if(!F||A)return{};let S=o?o[0]:u,k=e=>{s&&S.reportValidity&&(S.setCustomValidity(_(e)?"":e||""),S.reportValidity())},C={},E=G(u),O=a(u),L=(V||I(u))&&v(u.value)&&v(x)||W(u)&&""===u.value||""===x||Array.isArray(x)&&!x.length,U=N.bind(null,b,r,C),j=(e,t,r,s=w.maxLength,a=w.minLength)=>{let i=e?t:r;C[b]={type:e?s:a,message:i,ref:u,...U(e?s:a,i)}};if(i?!Array.isArray(x)||!x.length:d&&(!(E||O)&&(L||l(x))||_(x)&&!x||O&&!K(o).isValid||E&&!Y(o).isValid)){let{value:e,message:t}=$(d)?{value:!!d,message:d}:ee(d);if(e&&(C[b]={type:w.required,message:t,ref:S,...U(w.required,t)},!r))return k(t),C}if(!L&&(!l(y)||!l(m))){let e,t;let s=ee(m),a=ee(y);if(l(x)||isNaN(x)){let r=u.valueAsDate||new Date(x),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;T(s.value)&&x&&(e=l?i(x)>i(s.value):n?x>s.value:r>new Date(s.value)),T(a.value)&&x&&(t=l?i(x)<i(a.value):n?x<a.value:r<new Date(a.value))}else{let r=u.valueAsNumber||(x?+x:x);l(s.value)||(e=r>s.value),l(a.value)||(t=r<a.value)}if((e||t)&&(j(!!e,s.message,a.message,w.max,w.min),!r))return k(C[b].message),C}if((f||c)&&!L&&(T(x)||i&&Array.isArray(x))){let e=ee(f),t=ee(c),s=!l(e.value)&&x.length>+e.value,a=!l(t.value)&&x.length<+t.value;if((s||a)&&(j(s,e.message,t.message),!r))return k(C[b].message),C}if(h&&!L&&T(x)){let{value:e,message:t}=ee(h);if(Q(e)&&!x.match(e)&&(C[b]={type:w.pattern,message:t,ref:u,...U(w.pattern,t)},!r))return k(t),C}if(p){if(H(p)){let e=Z(await p(x,t),S);if(e&&(C[b]={...e,...U(w.validate,e.message)},!r))return k(e.message),C}else if(n(p)){let e={};for(let s in p){if(!D(e)&&!r)break;let a=Z(await p[s](x,t),S,s);a&&(e={...a,...U(s,a.message)},k(a.message),r&&(C[b]=e))}if(!D(e)&&(C[b]={ref:S,...e},!r))return C}}return k(!0),C};function er(e,t){let r=Array.isArray(t)?t:p(t)?[t]:b(t),s=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,s=0;for(;s<r;)e=v(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(n(s)&&D(s)||Array.isArray(s)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(s))&&er(e,r.slice(0,-1)),e}var es=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},ea=e=>l(e)||!u(e);function ei(e,t){if(ea(e)||ea(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(let a of r){let r=e[a];if(!s.includes(a))return!1;if("ref"!==a){let e=t[a];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!ei(r,e):r!==e)return!1}}return!0}var el=e=>"select-multiple"===e.type,eu=e=>G(e)||a(e),en=e=>W(e)&&e.isConnected,eo=e=>{for(let t in e)if(H(e[t]))return!0;return!1};function ed(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!eo(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ed(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ef=(e,t)=>(function e(t,r,s){let a=Array.isArray(t);if(n(t)||a)for(let a in t)Array.isArray(t[a])||n(t[a])&&!eo(t[a])?v(r)||ea(s[a])?s[a]=Array.isArray(t[a])?ed(t[a],[]):{...ed(t[a])}:e(t[a],l(r)?{}:r[a],s[a]):s[a]=!ei(t[a],r[a]);return s})(e,t,ed(t)),ec=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&T(e)?new Date(e):s?s(e):e;function ey(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:I(t)?t.files:G(t)?Y(e.refs).value:el(t)?[...t.selectedOptions].map(({value:e})=>e):a(t)?K(e.refs).value:ec(v(t.value)?e.ref.value:t.value,e)}var em=(e,t,r,s)=>{let a={};for(let r of e){let e=g(t,r);e&&V(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},eh=e=>v(e)?e:Q(e)?e.source:n(e)?Q(e.value)?e.value.source:e.value:e,ev=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eg(e,t,r){let s=g(e,r);if(s||p(r))return{error:s,name:r};let a=r.split(".");for(;a.length;){let s=a.join("."),i=g(t,s),l=g(e,s);if(i&&!Array.isArray(i)&&r!==s)break;if(l&&l.type)return{name:s,error:l};a.pop()}return{name:r}}var e_=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:(r?!s.isOnChange:!a.isOnChange)||e),ep=(e,t)=>!h(g(e,t)).length&&er(e,t);let eb={mode:A.onSubmit,reValidateMode:A.onChange,shouldFocusError:!0};function eV(e={}){let t=s.useRef(),r=s.useRef(),[u,d]=s.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...eb,...e},s={submitCount:0,isDirty:!1,isLoading:H(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},d=(n(r.defaultValues)||n(r.values))&&m(r.defaultValues||r.values)||{},c=r.shouldUnregister?{}:m(d),p={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0,x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},S={values:es(),array:es(),state:es()},k=M(r.mode),C=M(r.reValidateMode),O=r.criteriaMode===A.all,L=e=>t=>{clearTimeout(w),w=setTimeout(e,t)},j=async e=>{if(x.isValid||e){let e=r.resolver?D((await z()).errors):await K(u,!0);e!==s.isValid&&S.state.next({isValid:e})}},B=(e,t)=>{(x.isValidating||x.validatingFields)&&((e||Array.from(b.mount)).forEach(e=>{e&&(t?V(s.validatingFields,e,t):er(s.validatingFields,e))}),S.state.next({validatingFields:s.validatingFields,isValidating:!D(s.validatingFields)}))},N=(e,t)=>{V(s.errors,e,t),S.state.next({errors:s.errors})},$=(e,t,r,s)=>{let a=g(u,e);if(a){let i=g(c,e,v(r)?g(d,e):r);v(i)||s&&s.defaultChecked||t?V(c,e,t?i:ey(a._f)):Z(e,i),p.mount&&j()}},G=(e,t,r,a,i)=>{let l=!1,n=!1,o={name:e},f=!!(g(u,e)&&g(u,e)._f&&g(u,e)._f.disabled);if(!r||a){x.isDirty&&(n=s.isDirty,s.isDirty=o.isDirty=X(),l=n!==o.isDirty);let r=f||ei(g(d,e),t);n=!!(!f&&g(s.dirtyFields,e)),r||f?er(s.dirtyFields,e):V(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,l=l||x.dirtyFields&&!r!==n}if(r){let t=g(s.touchedFields,e);t||(V(s.touchedFields,e,r),o.touchedFields=s.touchedFields,l=l||x.touchedFields&&t!==r)}return l&&i&&S.state.next(o),l?o:{}},Q=(r,a,i,l)=>{let u=g(s.errors,r),n=x.isValid&&_(a)&&s.isValid!==a;if(e.delayError&&i?(t=L(()=>N(r,i)))(e.delayError):(clearTimeout(w),t=null,i?V(s.errors,r,i):er(s.errors,r)),(i?!ei(u,i):u)||!D(l)||n){let e={...l,...n&&_(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},S.state.next(e)}},z=async e=>{B(e,!0);let t=await r.resolver(c,r.context,em(e||b.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return B(e),t},J=async e=>{let{errors:t}=await z(e);if(e)for(let r of e){let e=g(t,r);e?V(s.errors,r,e):er(s.errors,r)}else s.errors=t;return t},K=async(e,t,a={valid:!0})=>{for(let i in e){let l=e[i];if(l){let{_f:e,...u}=l;if(e){let u=b.array.has(e.name);B([i],!0);let n=await et(l,c,O,r.shouldUseNativeValidation&&!t,u);if(B([i]),n[e.name]&&(a.valid=!1,t))break;t||(g(n,e.name)?u?P(s.errors,n,e.name):V(s.errors,e.name,n[e.name]):er(s.errors,e.name))}D(u)||await K(u,t,a)}}return a.valid},X=(e,t)=>(e&&t&&V(c,e,t),!ei(eA(),d)),Y=(e,t,r)=>U(e,b,{...p.mount?c:v(t)?d:T(e)?{[e]:t}:t},r,t),Z=(e,t,r={})=>{let s=g(u,e),i=t;if(s){let r=s._f;r&&(r.disabled||V(c,e,ec(t,r)),i=W(r.ref)&&l(t)?"":t,el(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):I(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||S.values.next({name:e,values:{...c}})))}(r.shouldDirty||r.shouldTouch)&&G(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eF(e)},ee=(e,t,r)=>{for(let s in t){let a=t[s],l=`${e}.${s}`,n=g(u,l);!b.array.has(e)&&ea(a)&&(!n||n._f)||i(a)?Z(l,a,r):ee(l,a,r)}},eo=(e,t,r={})=>{let a=g(u,e),i=b.array.has(e),n=m(t);V(c,e,n),i?(S.array.next({name:e,values:{...c}}),(x.isDirty||x.dirtyFields)&&r.shouldDirty&&S.state.next({name:e,dirtyFields:ef(d,c),isDirty:X(e,n)})):!a||a._f||l(n)?Z(e,n,r):ee(e,n,r),R(e,b)&&S.state.next({...s}),S.values.next({name:p.mount?e:void 0,values:{...c}})},ed=async e=>{p.mount=!0;let a=e.target,i=a.name,l=!0,n=g(u,i),d=e=>{l=Number.isNaN(e)||e===g(c,i,e)};if(n){let f,y;let m=a.type?ey(n._f):o(e),h=e.type===F.BLUR||e.type===F.FOCUS_OUT,v=!ev(n._f)&&!r.resolver&&!g(s.errors,i)&&!n._f.deps||e_(h,g(s.touchedFields,i),s.isSubmitted,C,k),_=R(i,b,h);V(c,i,m),h?(n._f.onBlur&&n._f.onBlur(e),t&&t(0)):n._f.onChange&&n._f.onChange(e);let p=G(i,m,h,!1),A=!D(p)||_;if(h||S.values.next({name:i,type:e.type,values:{...c}}),v)return x.isValid&&j(),A&&S.state.next({name:i,..._?{}:p});if(!h&&_&&S.state.next({...s}),r.resolver){let{errors:e}=await z([i]);if(d(m),l){let t=eg(s.errors,u,i),r=eg(e,u,t.name||i);f=r.error,i=r.name,y=D(e)}}else B([i],!0),f=(await et(n,c,O,r.shouldUseNativeValidation))[i],B([i]),d(m),l&&(f?y=!1:x.isValid&&(y=await K(u,!0)));l&&(n._f.deps&&eF(n._f.deps),Q(i,y,f,p))}},eV=(e,t)=>{if(g(s.errors,t)&&e.focus)return e.focus(),1},eF=async(e,t={})=>{let a,i;let l=E(e);if(r.resolver){let t=await J(v(e)?e:l);a=D(t),i=e?!l.some(e=>g(t,e)):a}else e?((i=(await Promise.all(l.map(async e=>{let t=g(u,e);return await K(t&&t._f?{[e]:t}:t)}))).every(Boolean))||s.isValid)&&j():i=a=await K(u);return S.state.next({...!T(e)||x.isValid&&a!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:s.errors}),t.shouldFocus&&!i&&q(u,eV,e?l:b.mount),i},eA=e=>{let t={...p.mount?c:d};return v(e)?t:T(e)?g(t,e):e.map(e=>g(t,e))},ew=(e,t)=>({invalid:!!g((t||s).errors,e),isDirty:!!g((t||s).dirtyFields,e),error:g((t||s).errors,e),isValidating:!!g(s.validatingFields,e),isTouched:!!g((t||s).touchedFields,e)}),ex=(e,t,r)=>{let a=(g(u,e,{_f:{}})._f||{}).ref,{ref:i,message:l,type:n,...o}=g(s.errors,e)||{};V(s.errors,e,{...o,...t,ref:a}),S.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},eS=(e,t={})=>{for(let a of e?E(e):b.mount)b.mount.delete(a),b.array.delete(a),t.keepValue||(er(u,a),er(c,a)),t.keepError||er(s.errors,a),t.keepDirty||er(s.dirtyFields,a),t.keepTouched||er(s.touchedFields,a),t.keepIsValidating||er(s.validatingFields,a),r.shouldUnregister||t.keepDefaultValue||er(d,a);S.values.next({values:{...c}}),S.state.next({...s,...t.keepDirty?{isDirty:X()}:{}}),t.keepIsValid||j()},ek=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(_(e)&&p.mount||e){let i=e?void 0:v(a)?ey(r?r._f:g(s,t)._f):a;V(c,t,i),G(t,i,!1,!1,!0)}},eD=(e,t={})=>{let s=g(u,e),a=_(t.disabled);return V(u,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),b.mount.add(e),s?ek({field:s,disabled:t.disabled,name:e,value:t.value}):$(e,!0,t.value),{...a?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:eh(t.min),max:eh(t.max),minLength:eh(t.minLength),maxLength:eh(t.maxLength),pattern:eh(t.pattern)}:{},name:e,onChange:ed,onBlur:ed,ref:a=>{if(a){eD(e,t),s=g(u,e);let r=v(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=eu(r),l=s._f.refs||[];(i?l.find(e=>e===r):r===s._f.ref)||(V(u,e,{_f:{...s._f,...i?{refs:[...l.filter(en),r,...Array.isArray(g(d,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),$(e,!1,void 0,r))}else(s=g(u,e,{}))._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(f(b.array,e)&&p.action)&&b.unMount.add(e)}}},eC=()=>r.shouldFocusError&&q(u,eV,b.mount),eE=(e,t)=>async a=>{let i;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let l=m(c);if(S.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await z();s.errors=e,l=t}else await K(u);if(er(s.errors,"root"),D(s.errors)){S.state.next({errors:{}});try{await e(l,a)}catch(e){i=e}}else t&&await t({...s.errors},a),eC(),setTimeout(eC);if(S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:D(s.errors)&&!i,submitCount:s.submitCount+1,errors:s.errors}),i)throw i},eO=(t,r={})=>{let a=t?m(t):d,i=m(a),l=D(t),n=l?d:i;if(r.keepDefaultValues||(d=a),!r.keepValues){if(r.keepDirtyValues)for(let e of b.mount)g(s.dirtyFields,e)?V(n,e,g(c,e)):eo(e,g(n,e));else{if(y&&v(t))for(let e of b.mount){let t=g(u,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(W(e)){let t=e.closest("form");if(t){t.reset();break}}}}u={}}c=e.shouldUnregister?r.keepDefaultValues?m(d):{}:m(n),S.array.next({values:{...n}}),S.values.next({values:{...n}})}b={mount:r.keepDirtyValues?b.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!x.isValid||!!r.keepIsValid||!!r.keepDirtyValues,p.watch=!!e.shouldUnregister,S.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:!l&&(r.keepDirty?s.isDirty:!!(r.keepDefaultValues&&!ei(t,d))),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:l?{}:r.keepDirtyValues?r.keepDefaultValues&&c?ef(d,c):s.dirtyFields:r.keepDefaultValues&&t?ef(d,t):r.keepDirty?s.dirtyFields:{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&s.isSubmitSuccessful,isSubmitting:!1})},eL=(e,t)=>eO(H(e)?e(c):e,t);return{control:{register:eD,unregister:eS,getFieldState:ew,handleSubmit:eE,setError:ex,_executeSchema:z,_getWatch:Y,_getDirty:X,_updateValid:j,_removeUnmounted:()=>{for(let e of b.unMount){let t=g(u,e);t&&(t._f.refs?t._f.refs.every(e=>!en(e)):!en(t._f.ref))&&eS(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,a,i=!0,l=!0)=>{if(a&&r){if(p.action=!0,l&&Array.isArray(g(u,e))){let t=r(g(u,e),a.argA,a.argB);i&&V(u,e,t)}if(l&&Array.isArray(g(s.errors,e))){let t=r(g(s.errors,e),a.argA,a.argB);i&&V(s.errors,e,t),ep(s.errors,e)}if(x.touchedFields&&l&&Array.isArray(g(s.touchedFields,e))){let t=r(g(s.touchedFields,e),a.argA,a.argB);i&&V(s.touchedFields,e,t)}x.dirtyFields&&(s.dirtyFields=ef(d,c)),S.state.next({name:e,isDirty:X(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else V(c,e,t)},_updateDisabledField:ek,_getFieldArray:t=>h(g(p.mount?c:d,t,e.shouldUnregister?g(d,t,[]):[])),_reset:eO,_resetDefaultValues:()=>H(r.defaultValues)&&r.defaultValues().then(e=>{eL(e,r.resetOptions),S.state.next({isLoading:!1})}),_updateFormState:e=>{s={...s,...e}},_disableForm:e=>{_(e)&&(S.state.next({disabled:e}),q(u,(t,r)=>{let s=g(u,r);s&&(t.disabled=s._f.disabled||e,Array.isArray(s._f.refs)&&s._f.refs.forEach(t=>{t.disabled=s._f.disabled||e}))},0,!1))},_subjects:S,_proxyFormState:x,_setErrors:e=>{s.errors=e,S.state.next({errors:s.errors,isValid:!1})},get _fields(){return u},get _formValues(){return c},get _state(){return p},set _state(value){p=value},get _defaultValues(){return d},get _names(){return b},set _names(value){b=value},get _formState(){return s},set _formState(value){s=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:eF,register:eD,handleSubmit:eE,watch:(e,t)=>H(e)?S.values.subscribe({next:r=>e(Y(void 0,t),r)}):Y(e,t,!0),setValue:eo,getValues:eA,reset:eL,resetField:(e,t={})=>{g(u,e)&&(v(t.defaultValue)?eo(e,m(g(d,e))):(eo(e,t.defaultValue),V(d,e,m(t.defaultValue))),t.keepTouched||er(s.touchedFields,e),t.keepDirty||(er(s.dirtyFields,e),s.isDirty=t.defaultValue?X(e,m(g(d,e))):X()),!t.keepError&&(er(s.errors,e),x.isValid&&j()),S.state.next({...s}))},clearErrors:e=>{e&&E(e).forEach(e=>er(s.errors,e)),S.state.next({errors:e?s.errors:{}})},unregister:eS,setError:ex,setFocus:(e,t={})=>{let r=g(u,e),s=r&&r._f;if(s){let e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ew}}(e),formState:u});let c=t.current.control;return c._options=e,L({subject:c._subjects.state,next:e=>{C(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),s.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),s.useEffect(()=>{if(c._proxyFormState.isDirty){let e=c._getDirty();e!==u.isDirty&&c._subjects.state.next({isDirty:e})}},[c,u.isDirty]),s.useEffect(()=>{e.values&&!ei(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values,d(e=>({...e}))):c._resetDefaultValues()},[e.values,c]),s.useEffect(()=>{e.errors&&c._setErrors(e.errors)},[e.errors,c]),s.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),s.useEffect(()=>{e.shouldUnregister&&c._subjects.values.next({values:c._getWatch()})},[e.shouldUnregister,c]),t.current.formState=k(u,c),t.current}}}]);