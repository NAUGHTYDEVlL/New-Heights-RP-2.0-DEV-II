"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[7183,2262,9881,5760,3379,7024,4643,2738,5922],{45922:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(55429),o=r(15647),a=r(43447),i=r(1310),u=r(30975),c=r(29506),s=r(22785),l=r(90863),d=r(72857),p=(r(84529),r(41655),r(61541)),f=r(72839),m=r(29893),h=r(96730);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==y(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(){w=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),u=new C(n||[]);return o(i,"_invoke",{value:L(e,r,u)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var p="suspendedStart",f="suspendedYield",m="executing",h="completed",v={};function b(){}function g(){}function x(){}var A={};s(A,i,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(R([])));j&&j!==r&&n.call(j,i)&&(A=j);var k=x.prototype=b.prototype=Object.create(A);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,a,i,u){var c=d(e[o],e,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==y(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,u)}))}u(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function L(t,r,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=O(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=d(t,r,n);if("normal"===s.type){if(o=n.done?h:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=h,n.method="throw",n.arg=s.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function R(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(y(t)+" is not iterable")}return g.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},N(P.prototype),s(P.prototype,u,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new P(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=R,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function x(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){x(a,n,o,i,u,"next",e)}function u(e){x(a,n,o,i,u,"throw",e)}i(void 0)}))}}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var k=(0,d.A)((function(e){return{wrapper:{padding:"20px 10px 20px 20px",height:"95%"},editorField:{marginBottom:10},title:{fontSize:22,color:e.palette.text.main,textAlign:"center"},col:{height:"100%",padding:5},formActions:{paddingBottom:10,marginBottom:5,borderBottom:"1px inset ".concat(e.palette.border.divider)},positiveButton:{borderColor:"".concat(e.palette.success.main,"80"),color:e.palette.success.main,"&:hover":{borderColor:e.palette.success.main,background:"".concat(e.palette.success.main,"14")}}}})),N=[{value:"General",jobs:!1},{value:"Regular Repair",jobs:["redline","hayes","autoexotics","ottos","bennys","paleto_tuners","dreamworks"]},{value:"Full Repair",jobs:["redline","hayes","autoexotics","ottos","bennys","paleto_tuners","dreamworks"]},{value:"Lockpick",jobs:["redline","hayes","autoexotics","ottos","bennys","paleto_tuners","dreamworks"]},{value:"Performance Upgrades",jobs:["redline","hayes","autoexotics","ottos","bennys","paleto_tuners","dreamworks"]},{value:"Discounted Repair",jobs:["redline","hayes","autoexotics","ottos","bennys","paleto_tuners","dreamworks"]},{value:"Repair Kits",jobs:["redline","hayes","autoexotics","ottos","bennys","paleto_tuners","dreamworks"]}];const P=function(e){var t,r=e.onNav,d=e.data,y=k(),v=((0,o.wA)(),(0,m.MW)()),g=(0,o.d4)((function(e){return e.data.data.onDuty})),x={notes:"",type:null===(t=N.filter((function(e){return!e.jobs||e.jobs.includes(g)}))[0])||void 0===t?void 0:t.value,customerName:"",customerNumber:"",paymentAmount:"",paymentPaid:"",workers:Array(),workersInput:""},j=E((0,n.useState)(!1),2),P=j[0],L=j[1],O=E((0,n.useState)(x),2),S=O[0],_=O[1],C=E((0,n.useState)(Array()),2),R=C[0],I=C[1];(0,n.useEffect)((function(){var e=function(){var e=A(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,p.A.send("BusinessReceiptView",{id:t});case 4:return e.next=6,e.sent.json();case 6:(r=e.sent)&&_(r),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),v("Unable to Load Receipt");case 14:L(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();null!=d&&d.id&&e(d.id)}),[]);var B=function(){var e=A(w().mark((function e(t){var n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!=S.customerName){e.next=5;break}v("Must Add Customer Name"),e.next=27;break;case 5:if(e.prev=5,!Boolean(null==S?void 0:S._id)){e.next=15;break}return e.next=9,p.A.send("BusinessReceiptUpdate",{id:S._id,Report:{type:S.type,customerName:S.customerName,customerNumber:S.customerNumber,paymentAmount:S.paymentAmount,paymentPaid:S.paymentPaid,workers:S.workers,notes:S.notes,time:S.time,author:S.author}});case 9:return e.next=11,e.sent.json();case 11:e.sent?r("View/Receipt",{id:S._id}):v("Unable to Update"),e.next=21;break;case 15:return e.next=17,p.A.send("BusinessReceiptCreate",{doc:{type:S.type,customerName:S.customerName,customerNumber:S.customerNumber,paymentAmount:S.paymentAmount,paymentPaid:S.paymentPaid,workers:S.workers,notes:S.notes,time:Date.now()}});case 17:return e.next=19,e.sent.json();case 19:(n=e.sent)?r("View/Receipt",{id:n._id}):v("Unable to Create");case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(5),console.log(e.t0),v("Unable to Create");case 27:case"end":return e.stop()}}),e,null,[[5,23]])})));return function(t){return e.apply(this,arguments)}}();return n.createElement("div",{className:y.wrapper},n.createElement(a.A,{open:P,style:{zIndex:100}},n.createElement(f.aH,{text:"Loading"})),n.createElement(i.Ay,{container:!0,style:{height:"100%",paddingBottom:10},spacing:2},n.createElement(i.Ay,{item:!0,xs:12},n.createElement(i.Ay,{container:!0,className:y.formActions},n.createElement(i.Ay,{item:!0,xs:10},n.createElement("div",{className:y.title},Boolean(null==S?void 0:S._id)?"Edit Receipt":"New Receipt")),n.createElement(i.Ay,{item:!0,xs:2,style:{textAlign:"right"}},n.createElement(u.A,{fullWidth:!0,color:"inherit"},n.createElement(c.A,{className:y.positiveButton,onClick:B},"".concat(Boolean(null==S?void 0:S._id)?"Edit":"Create"," Receipt")))))),n.createElement(i.Ay,{item:!0,xs:6,className:y.col},n.createElement(s.A,{select:!0,fullWidth:!0,label:"Receipt Type",disabled:Boolean(null==S?void 0:S._id),name:"type",className:y.editorField,value:S.type,onChange:function(e){return _(b(b({},S),{},{type:e.target.value}))}},N.filter((function(e){return!e.jobs||e.jobs.includes(g)})).map((function(e){return n.createElement(l.A,{key:e.value,value:e.value},e.value)}))),n.createElement(s.A,{className:y.editorField,label:"Customer Name",fullWidth:!0,placeholder:"Customer Name",value:S.customerName,onChange:function(e){return _(b(b({},S),{},{customerName:e.target.value}))}}),n.createElement(s.A,{className:y.editorField,label:"Customer Phone Number",fullWidth:!0,placeholder:"Customer Phone Number",value:S.customerNumber,onChange:function(e){return _(b(b({},S),{},{customerNumber:e.target.value}))}}),n.createElement(s.A,{className:y.editorField,label:"Payment Charged",fullWidth:!0,placeholder:"Payment Charged",value:S.paymentAmount,onChange:function(e){return _(b(b({},S),{},{paymentAmount:e.target.value}))}}),n.createElement(s.A,{className:y.editorField,label:"Payment Paid",fullWidth:!0,placeholder:"Payment Paid",value:S.paymentPaid,onChange:function(e){return _(b(b({},S),{},{paymentPaid:e.target.value}))}})),n.createElement(i.Ay,{item:!0,xs:6,className:y.col},n.createElement(h.default,{disableSelf:!0,label:"Additional Employees",placeholder:"Bob, Tim, Dave",value:S.workers,inputValue:S.workersInput,options:R,setOptions:I,job:null!=g?g:"fuck",onChange:function(e,t){0==t.length?_(b(b({},S),{},{workers:[],workersInput:""})):_(b(b({},S),{},{workers:t,workersInput:""}))},onInputChange:function(e,t){return _(b(b({},S),{},{workersInput:t}))}}),!P&&n.createElement(f.KE,{allowMedia:!0,name:"notes",title:"Additional Notes",placeholder:"Enter Content",disabled:P,value:S.notes,onChange:function(e){_(b(b({},S),{},{notes:e.target.value}))}}))))}},89883:(e,t,r)=>{r.d(t,{A:()=>i,f:()=>a});var n=r(52679),o=r(95478);function a(e){return(0,o.Ay)("MuiListItemIcon",e)}const i=(0,n.A)("MuiListItemIcon",["root","alignItemsFlexStart"])},42262:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(86887),o=r(64180),a=r(55429),i=r(34164),u=r(7413),c=r(23805),s=r(29115),l=r(74024),d=r(52679),p=r(95478);function f(e){return(0,p.Ay)("MuiList",e)}(0,d.A)("MuiList",["root","padding","dense","subheader"]);var m=r(64922);const h=["children","className","component","dense","disablePadding","subheader"],y=(0,c.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})((({ownerState:e})=>(0,o.A)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),v=a.forwardRef((function(e,t){const r=(0,s.b)({props:e,name:"MuiList"}),{children:c,className:d,component:p="ul",dense:v=!1,disablePadding:b=!1,subheader:g}=r,w=(0,n.A)(r,h),x=a.useMemo((()=>({dense:v})),[v]),A=(0,o.A)({},r,{component:p,dense:v,disablePadding:b}),E=(e=>{const{classes:t,disablePadding:r,dense:n,subheader:o}=e,a={root:["root",!r&&"padding",n&&"dense",o&&"subheader"]};return(0,u.A)(a,f,t)})(A);return(0,m.jsx)(l.A.Provider,{value:x,children:(0,m.jsxs)(y,(0,o.A)({as:p,className:(0,i.A)(E.root,d),ref:t,ownerState:A},w,{children:[g,c]}))})}))}}]);