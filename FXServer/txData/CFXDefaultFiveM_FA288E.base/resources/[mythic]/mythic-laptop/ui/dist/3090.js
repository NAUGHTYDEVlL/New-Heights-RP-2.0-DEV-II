"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[3090,2988,607],{43090:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(55429),o=(r(15647),r(1310)),a=r(22785),i=r(11084),c=r(20500),s=r(29506),l=r(42262),u=r(72701),f=r(72857),h=r(84529),p=r(59530),d=r(61541),y=r(72839),m=r(72988);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(){g=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new _(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",m={};function b(){}function E(){}function w(){}var x={};l(x,i,(function(){return this}));var A=Object.getPrototypeOf,S=A&&A(A(D([])));S&&S!==r&&n.call(S,i)&&(x=S);var L=w.prototype=b.prototype=Object.create(x);function I(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var s=f(t[o],t,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==v(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=h;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?y:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function D(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(v(e)+" is not iterable")}return E.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:E,configurable:!0}),E.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},I(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},I(L),l(L,s,"Generator"),l(L,i,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=D,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:D(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function b(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,c,"next",t)}function c(t){b(a,n,o,i,c,"throw",t)}i(void 0)}))}}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],s=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var A=(0,f.A)((function(t){return{wrapper:{padding:"20px 10px 20px 20px",height:"100%"},search:{},results:{},noResults:{margin:"15% 0",textAlign:"center",fontSize:22,color:t.palette.text.main},items:{maxHeight:"95%",height:"95%",overflowY:"auto",overflowX:"hidden"},searchButton:{height:"90%"}}}));const S=function(){var t=A(),e=w((0,n.useState)(1),2),r=e[0],f=e[1],v=w((0,n.useState)(1),2),b=v[0],x=v[1],S=w((0,n.useState)(!1),2),L=S[0],I=S[1],j=w((0,n.useState)(""),2),k=j[0],P=j[1],N=w((0,n.useState)(!1),2),O=N[0],_=N[1],D=w((0,n.useState)(Array()),2),R=D[0],T=D[1],F=w((0,n.useState)(Array()),2),C=F[0],G=F[1];(0,n.useEffect)((function(){var t=(null!=k?k:"").replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");G(R.filter((function(e){return new RegExp(t,"i").test("".concat(e.char.First," ").concat(e.char.Last))})))}),[R,k]),(0,n.useEffect)((function(){f(Math.ceil(C.length/6))}),[C]);var $=(0,n.useMemo)((function(){return(0,h.throttle)(E(g().mark((function t(){var e,r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I(!0),x(1),t.prev=2,t.next=5,d.A.send("BusinessReceiptSearch",{term:""});case 5:return t.next=7,t.sent.json();case 7:if(!(e=t.sent)){t.next=14;break}r={},e.sort((function(t,e){return t.time-e.time})).forEach((function(t){var e;null!=t&&null!==(e=t.author)&&void 0!==e&&e.SID&&(r[t.author.SID]||(r[t.author.SID]={created:0,assisted:0,char:t.author,latest:0,types:{}}),r[t.author.SID].created++,r[t.author.SID].latest=t.time,r[t.author.SID].types[t.type]?r[t.author.SID].types[t.type]++:r[t.author.SID].types[t.type]=1),null!=t&&t.workers&&t.workers.length>0&&t.workers.forEach((function(e){r[e.SID]||(r[e.SID]={created:0,assisted:0,char:e,latest:0,types:{}}),r[e.SID].assisted++,r[e.SID].latest=t.time,r[e.SID].types[t.type]?r[e.SID].types[t.type]++:r[e.SID].types[t.type]=1}))})),T(Object.values(r)),t.next=15;break;case 14:throw e;case 15:I(!1),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(2),console.log(t.t0),_(!0),I(!1);case 23:case"end":return t.stop()}}),t,null,[[2,18]])}))),3e3)}),[]);(0,n.useEffect)((function(){$()}),[]);return n.createElement("div",{className:t.wrapper},n.createElement("div",{className:t.search},n.createElement(o.Ay,{container:!0,spacing:1},n.createElement(o.Ay,{item:!0,xs:10},n.createElement(a.A,{fullWidth:!0,variant:"outlined",name:"search",value:k,onChange:function(t){P(t.target.value)},error:O,helperText:O?"Error Performing Search":null,label:"Search By Employee",InputProps:{endAdornment:n.createElement(i.A,{position:"end"},""!=k&&n.createElement(c.A,{type:"button",onClick:function(){return P("")}},n.createElement(p.g,{icon:["fas","xmark"]})),n.createElement(c.A,{type:"submit",disabled:L},n.createElement(p.g,{icon:["fas","magnifying-glass"]})))}})),n.createElement(o.Ay,{item:!0,xs:2},n.createElement(s.A,{variant:"outlined",fullWidth:!0,style:{height:"100%"},onClick:$},"Refresh")))),n.createElement("div",{className:t.results},L?n.createElement(y.aH,{text:"Loading"}):(null==C?void 0:C.length)>0?n.createElement(n.Fragment,null,n.createElement(l.A,{className:t.items},C.slice(6*(b-1),6*b).map((function(t){return n.createElement(m.default,{key:t._id,report:t})}))),r>1&&n.createElement(u.A,{variant:"outlined",shape:"rounded",color:"primary",page:b,count:r,onChange:function(t,e){x(e)}})):n.createElement("p",{className:t.noResults},"No Results Found")))}},72988:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var n=r(55429),o=r(74268),a=r(1310),i=r(40279),c=r(72857),s=(r(59530),r(51698)),l=r.n(s),u=(0,c.A)((function(t){return{wrapper:{padding:"20px 10px 20px 20px",borderBottom:"1px solid ".concat(t.palette.border.divider),"&:first-of-type":{borderTop:"1px solid ".concat(t.palette.border.divider)}}}}));const f=function(t){var e,r,c,s=t.report,f=u();return n.createElement(o.Ay,{className:f.wrapper},n.createElement(a.Ay,{container:!0,spacing:1},n.createElement(a.Ay,{item:!0,xs:2},n.createElement(i.A,{primary:"Employee",secondary:"".concat(null===(e=s.char)||void 0===e?void 0:e.First," ").concat(null===(r=s.char)||void 0===r?void 0:r.Last," (").concat(null===(c=s.char)||void 0===c?void 0:c.SID,")")})),n.createElement(a.Ay,{item:!0,xs:2},n.createElement(i.A,{primary:"Receipts Created",secondary:"".concat(s.created)})),n.createElement(a.Ay,{item:!0,xs:2},n.createElement(i.A,{primary:"Receipts Assisted",secondary:"".concat(s.assisted)})),n.createElement(a.Ay,{item:!0,xs:4},n.createElement(i.A,{primary:"Receipt Types",secondary:Object.keys(s.types).map((function(t){return"".concat(t,": ").concat(s.types[t],";  ")}))})),n.createElement(a.Ay,{item:!0,xs:2},n.createElement(i.A,{primary:"Latest Receipt",secondary:n.createElement(l(),{date:s.latest,fromNow:!0})}))))}},11084:(t,e,r)=>{r.d(e,{A:()=>x});var n=r(86887),o=r(64180),a=r(55429),i=r(34164),c=r(7413),s=r(10016),l=r(20111),u=r(74502),f=r(64186),h=r(23805),p=r(52679),d=r(95478);function y(t){return(0,d.Ay)("MuiInputAdornment",t)}const m=(0,p.A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var v,g=r(29115),b=r(64922);const E=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,h.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${(0,s.A)(r.position)}`],!0===r.disablePointerEvents&&e.disablePointerEvents,e[r.variant]]}})((({theme:t,ownerState:e})=>(0,o.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===e.variant&&{[`&.${m.positionStart}&:not(.${m.hiddenLabel})`]:{marginTop:16}},"start"===e.position&&{marginRight:8},"end"===e.position&&{marginLeft:8},!0===e.disablePointerEvents&&{pointerEvents:"none"}))),x=a.forwardRef((function(t,e){const r=(0,g.b)({props:t,name:"MuiInputAdornment"}),{children:h,className:p,component:d="div",disablePointerEvents:m=!1,disableTypography:x=!1,position:A,variant:S}=r,L=(0,n.A)(r,E),I=(0,f.A)()||{};let j=S;S&&I.variant,I&&!j&&(j=I.variant);const k=(0,o.A)({},r,{hiddenLabel:I.hiddenLabel,size:I.size,disablePointerEvents:m,position:A,variant:j}),P=(t=>{const{classes:e,disablePointerEvents:r,hiddenLabel:n,position:o,size:a,variant:i}=t,l={root:["root",r&&"disablePointerEvents",o&&`position${(0,s.A)(o)}`,i,n&&"hiddenLabel",a&&`size${(0,s.A)(a)}`]};return(0,c.A)(l,y,e)})(k);return(0,b.jsx)(u.A.Provider,{value:null,children:(0,b.jsx)(w,(0,o.A)({as:d,ownerState:k,className:(0,i.A)(P.root,p),ref:e},L,{children:"string"!=typeof h||x?(0,b.jsxs)(a.Fragment,{children:["start"===A?v||(v=(0,b.jsx)("span",{className:"notranslate",children:"​"})):null,h]}):(0,b.jsx)(l.A,{color:"text.secondary",children:h})}))})}))}}]);