"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[6218,2262,9881,7024,4643,2738,3837],{36218:(t,e,r)=>{r.r(e),r.d(e,{default:()=>D});var n=r(55429),o=r(15647),i=r(1310),a=r(52094),l=r(30975),c=r(29506),s=r(74268),u=r(40279),d=r(70725),h=r(42262),f=r(72857),p=r(51698),m=r.n(p),v=r(72839),y=r(61541),g=r(29893);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function w(){w=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),l=new O(n||[]);return o(a,"_invoke",{value:k(t,r,l)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function y(){}function g(){}function x(){}var A={};s(A,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(P([])));L&&L!==r&&n.call(L,a)&&(A=L);var S=x.prototype=y.prototype=Object.create(A);function D(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,a,l){var c=d(t[o],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==b(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,l)}))}l(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var l=n.delegate;if(l){var c=T(l,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?m:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(b(e)+" is not iterable")}return g.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},D(N.prototype),s(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new N(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},D(S),s(S,c,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function x(t,e,r,n,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function A(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){x(i,n,o,a,l,"next",t)}function l(t){x(i,n,o,a,l,"throw",t)}a(void 0)}))}}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return L(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var S=(0,f.A)((function(t){return{wrapper:{padding:"20px 10px 20px 20px",height:"100%"},notes:{color:t.palette.text.alt,padding:"8px 16px",whiteSpace:"pre-line","& img":{width:"100%",maxWidth:300}},link:{color:t.palette.text.alt,transition:"color ease-in 0.15s","&:hover":{color:t.palette.primary.main}},officerLink:{color:t.palette.text.alt,transition:"color ease-in 0.15s","&:hover":{color:t.palette.primary.main},"&:not(:last-of-type)":{content:'", "',color:t.palette.text.main}},maxHeight:{maxHeight:"60vh",overflowY:"scroll"}}}));const D=function(t){var e,r,f=t.data,p=t.onNav,b=S(),x=((0,o.wA)(),(0,g.MW)()),L=(0,g.Bm)(),D=(0,o.d4)((function(t){return t.data.data.onDuty})),N=E((0,n.useState)(!1),2),k=N[0],T=N[1],_=E((0,n.useState)(!1),2),j=_[0],O=_[1],P=E((0,n.useState)(null),2),C=P[0],I=P[1],M=function(){var t=A(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!L("LAPTOP_DELETE_DOCUMENT",D)){t.next=14;break}return t.prev=1,t.next=4,y.A.send("BusinessDocumentDelete",{id:C._id});case 4:return t.next=6,t.sent.json();case 6:t.sent?(x("Document Deleted"),p("Dashboard")):x("Unable to Delete Document"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),x("Unable to Delete Document");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=A(w().mark((function t(){var e;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=f&&f.id){t.next=2;break}return t.abrupt("return");case 2:return O(!0),t.prev=3,t.next=6,y.A.send("BusinessDocumentView",{id:null==f?void 0:f.id});case 6:return t.next=8,t.sent.json();case 8:(e=t.sent)?I(e):x("Unable to Load Document"),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0),x("Unable to Load Document"),T(!0);case 17:O(!1);case 18:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){R()}),[]),n.createElement("div",null,j||!C&&!k?n.createElement("div",{className:b.wrapper,style:{position:"relative"}},n.createElement(v.aH,{static:!0,text:"Loading"})):k?n.createElement(i.Ay,{className:b.wrapper,container:!0},n.createElement(i.Ay,{item:!0,xs:12},n.createElement(a.A,{variant:"outlined",severity:"error"},"Invalid Document ID"))):n.createElement(n.Fragment,null,n.createElement(i.Ay,{className:b.wrapper,container:!0,spacing:2},n.createElement(i.Ay,{item:!0,xs:12},n.createElement(l.A,{fullWidth:!0},n.createElement(c.A,{onClick:R,disabled:j},"Refresh"),n.createElement(c.A,{disabled:!function(){return L("LAPTOP_PIN_DOCUMENT",D)},onClick:function(){p("Create/Document",{id:C._id})}},"Edit Document"),L("LAPTOP_DELETE_DOCUMENT",D)&&n.createElement(c.A,{onClick:M},"Delete Document"))),n.createElement(i.Ay,{item:!0,xs:12},n.createElement(i.Ay,{container:!0,spacing:2},n.createElement(i.Ay,{item:!0,xs:6},n.createElement(s.Ay,null,n.createElement(u.A,{primary:"Document Title",secondary:C.title}))),n.createElement(i.Ay,{item:!0,xs:3},n.createElement(u.A,{primary:n.createElement("span",null,"Created ",n.createElement(m(),{date:C.time,fromNow:!0})),secondary:n.createElement("span",null,"By ","".concat(C.author.First," ").concat(C.author.Last," (").concat(C.author.SID,")")," on ",n.createElement(m(),{date:C.time,format:"LLL"}))})),n.createElement(i.Ay,{item:!0,xs:3},C.lastUpdated&&n.createElement(u.A,{primary:n.createElement("span",null,"Last Updated ",n.createElement(m(),{date:null===(e=C.lastUpdated)||void 0===e?void 0:e.Time,fromNow:!0})),secondary:n.createElement("span",null,"By ","".concat(C.lastUpdated.First," ").concat(C.lastUpdated.Last," (").concat(C.lastUpdated.SID,")")," on ",n.createElement(m(),{date:null===(r=C.lastUpdated)||void 0===r?void 0:r.Time,format:"LLL"}))}))),n.createElement(d.A,{flexItem:!0})),n.createElement(i.Ay,{item:!0,xs:12,className:b.maxHeight},n.createElement(h.A,null,n.createElement(s.Ay,null,n.createElement(u.A,{primary:"Document"})),n.createElement("div",{className:b.notes},n.createElement(v.Rb,{wrapperClass:b.notes,content:C.notes})))))))}},70725:(t,e,r)=>{r.d(e,{A:()=>y});var n=r(86887),o=r(64180),i=r(55429),a=r(34164),l=r(7413),c=r(3377),s=r(23805),u=r(29115),d=r(72733),h=r(64922);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,s.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,o.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,c.X4)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,o.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,o.A)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}})),(({theme:t,ownerState:e})=>(0,o.A)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}})),(({ownerState:t})=>(0,o.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),m=(0,s.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,o.A)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),v=i.forwardRef((function(t,e){const r=(0,u.b)({props:t,name:"MuiDivider"}),{absolute:i=!1,children:c,className:s,component:v=(c?"div":"hr"),flexItem:y=!1,light:g=!1,orientation:b="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:x="center",variant:A="fullWidth"}=r,E=(0,n.A)(r,f),L=(0,o.A)({},r,{absolute:i,component:v,flexItem:y,light:g,orientation:b,role:w,textAlign:x,variant:A}),S=(t=>{const{absolute:e,children:r,classes:n,flexItem:o,light:i,orientation:a,textAlign:c,variant:s}=t,u={root:["root",e&&"absolute",s,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.A)(u,d.K,n)})(L);return(0,h.jsx)(p,(0,o.A)({as:v,className:(0,a.A)(S.root,s),role:w,ref:e,ownerState:L},E,{children:c?(0,h.jsx)(m,{className:S.wrapper,ownerState:L,children:c}):null}))}));v.muiSkipListHighlight=!0;const y=v},72733:(t,e,r)=>{r.d(e,{A:()=>a,K:()=>i});var n=r(52679),o=r(95478);function i(t){return(0,o.Ay)("MuiDivider",t)}const a=(0,n.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},42262:(t,e,r)=>{r.d(e,{A:()=>y});var n=r(86887),o=r(64180),i=r(55429),a=r(34164),l=r(7413),c=r(23805),s=r(29115),u=r(74024),d=r(52679),h=r(95478);function f(t){return(0,h.Ay)("MuiList",t)}(0,d.A)("MuiList",["root","padding","dense","subheader"]);var p=r(64922);const m=["children","className","component","dense","disablePadding","subheader"],v=(0,c.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disablePadding&&e.padding,r.dense&&e.dense,r.subheader&&e.subheader]}})((({ownerState:t})=>(0,o.A)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0}))),y=i.forwardRef((function(t,e){const r=(0,s.b)({props:t,name:"MuiList"}),{children:c,className:d,component:h="ul",dense:y=!1,disablePadding:g=!1,subheader:b}=r,w=(0,n.A)(r,m),x=i.useMemo((()=>({dense:y})),[y]),A=(0,o.A)({},r,{component:h,dense:y,disablePadding:g}),E=(t=>{const{classes:e,disablePadding:r,dense:n,subheader:o}=t,i={root:["root",!r&&"padding",n&&"dense",o&&"subheader"]};return(0,l.A)(i,f,e)})(A);return(0,p.jsx)(u.A.Provider,{value:x,children:(0,p.jsxs)(v,(0,o.A)({as:h,className:(0,a.A)(E.root,d),ref:e,ownerState:A},w,{children:[b,c]}))})}))}}]);