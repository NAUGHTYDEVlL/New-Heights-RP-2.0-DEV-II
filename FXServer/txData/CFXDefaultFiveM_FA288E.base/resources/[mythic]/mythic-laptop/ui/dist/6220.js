"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[6220,2262,9881,7024,4643,2738],{26220:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(55429),o=r(15647),a=r(72857),i=r(1310),c=r(29506),l=r(42262),u=r(74268),s=r(40279),f=r(44752),d=r(20500),m=r(22785),p=r(59530),h=r(72839),v=(r(84529),r(69796)),y=(r(6901),r(61541)),g=r(29893);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==b(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(){A=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),c=new k(n||[]);return o(i,"_invoke",{value:O(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var d="suspendedStart",m="suspendedYield",p="executing",h="completed",v={};function y(){}function g(){}function w(){}var E={};u(E,i,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(C([])));x&&x!==r&&n.call(x,i)&&(E=x);var L=w.prototype=y.prototype=Object.create(E);function j(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function r(o,a,i,c){var l=f(e[o],e,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==b(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var o=d;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=D(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?h:m,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=h,n.method="throw",n.arg=u.arg)}}}function D(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,D(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(b(t)+" is not iterable")}return g.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},j(I.prototype),u(I.prototype,c,(function(){return this})),t.AsyncIterator=I,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new I(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(L),u(L,l,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function x(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){x(a,n,o,i,c,"next",e)}function c(e){x(a,n,o,i,c,"throw",e)}i(void 0)}))}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var O=(0,a.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},heading:{padding:10,borderBottom:"1px solid ".concat(e.palette.border.divider)},actionBtn:{fontSize:18},editorField:{marginBottom:15},bold:{"& span":{fontWeight:700}}}}));const D=function(e){var t,r=O(),a=((0,o.wA)(),(0,g.MW)()),b=(0,o.d4)((function(e){return e.data.data.player})),w=(0,o.d4)((function(e){return e.data.data.myGroup})),S=null==w||null===(t=w.Members)||void 0===t?void 0:t.find((function(e){return e.Leader})),x=j((0,n.useState)(null),2),I=x[0],D=x[1],N=function(){var e=L(A().mark((function e(t){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.A.send("CreateTeam",I);case 4:return e.next=6,e.sent.json();case 6:null!=(r=e.sent)&&r.success?a("Team Created"):null!=r&&r.message?a("Team Name Already Taken"):a("Failed to Create Team"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:D(null);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),T=j((0,n.useState)(null),2),k=T[0],C=T[1],P=function(){var e=L(A().mark((function e(t){var r,n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.A.send("InviteTeamMember",{SID:null!==(r=parseInt(null==k?void 0:k.SID))&&void 0!==r?r:0});case 4:return e.next=6,e.sent.json();case 6:null!=(n=e.sent)&&n.success?a("Member Invited"):a("Member Invite Failed"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:C(null);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),M=j((0,n.useState)(null),2),F=M[0],_=M[1],B=function(){var e=L(A().mark((function e(t){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.A.send("RemoveTeamMember",F);case 4:return e.next=6,e.sent.json();case 6:r=e.sent,a(r?"Member Removed":"Member Removal Failed"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:_(null);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),G=j((0,n.useState)(!1),2),R=G[0],W=G[1],q=function(){var e=L(A().mark((function e(t){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.A.send("DeleteTeam");case 4:return e.next=6,e.sent.json();case 6:r=e.sent,a(r?"Team Deleted":"Failed to Delete Team"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:W(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return n.createElement(i.Ay,{item:!0,xs:4,style:{padding:10}},n.createElement(i.Ay,{container:!0},n.createElement(i.Ay,{item:!0,xs:12},n.createElement("h3",{className:r.heading},"My Team")),n.createElement(i.Ay,{item:!0,xs:12},Boolean(w)&&Boolean(S)?n.createElement(l.A,null,n.createElement(u.Ay,{divider:!0},n.createElement(s.A,{primary:"Name",secondary:w.Name}),n.createElement(f.A,null,S.SID==b.SID&&n.createElement(d.A,{edge:"end",className:r.actionBtn,onClick:function(){W(!0)},disabled:0!==w.State},n.createElement(p.g,{icon:["fas","trash"]})))),n.createElement(u.Ay,{divider:!0},n.createElement(s.A,{primary:"State",secondary:w.StateName})),n.createElement(u.Ay,{divider:!0},n.createElement(s.A,{primary:"Team Leader",secondary:"".concat(null==S?void 0:S.First," ").concat(null==S?void 0:S.Last," (").concat(null==S?void 0:S.SID,")")})),n.createElement(u.Ay,{divider:!0},n.createElement(s.A,{primary:"Team Members (".concat(w.Members.length,")")}),n.createElement(f.A,null,S.SID==b.SID&&w.Members.length<5&&n.createElement(d.A,{edge:"end",color:"success",className:r.actionBtn,onClick:function(){C({SID:""})},disabled:0!==w.State},n.createElement(p.g,{icon:["fas","plus"]})))),n.createElement(u.Ay,{dense:!0},n.createElement(l.A,{dense:!0,style:{width:"100%"}},w.Members.filter((function(e){return!e.Leader})).length>0?w.Members.filter((function(e){return!e.Leader})).map((function(e){return n.createElement(u.Ay,{key:"member-".concat(null==e?void 0:e.SID),divider:!0},n.createElement(s.A,{className:b.SID==(null==e?void 0:e.SID)&&r.bold,primary:"".concat(null==e?void 0:e.First," ").concat(null==e?void 0:e.Last," (").concat(null==e?void 0:e.SID,")")}),(S.SID==b.SID||b.SID==e.SID)&&n.createElement(f.A,null,n.createElement(d.A,{edge:"end",color:"error",className:r.actionBtn,onClick:function(){return function(e){_(e)}(e)},disabled:0!==w.State},n.createElement(p.g,{icon:["fas","minus"]}))))})):n.createElement(u.Ay,null,n.createElement(s.A,{primary:"No Other Members In Team"}))))):n.createElement(c.A,{color:"success",variant:"outlined",onClick:function(){D({Name:""})}},"Create Team"))),n.createElement(h.aF,{open:Boolean(I),title:"Create Team",closeLang:"Close",maxWidth:"md",submitLang:"Create Team",onSubmit:N,submitColor:"success",onClose:function(){return D(null)}},Boolean(I)&&n.createElement(n.Fragment,null,n.createElement(m.A,{fullWidth:!0,required:!0,label:"Team Name",name:"Name",className:r.editorField,value:I.Name,onChange:function(e){return D(E(E({},I),{},{Name:e.target.value.replace(/[^a-zA-Z0-9_. -]+/g,"").replace(/\s\s+/g," ")}))}}))),n.createElement(h.aF,{open:Boolean(k),title:"Invite Member",closeLang:"Close",maxWidth:"md",submitLang:"Invite",onSubmit:P,submitColor:"success",onClose:function(){return C(null)}},Boolean(k)&&n.createElement(n.Fragment,null,n.createElement(v.A,{fullWidth:!0,required:!0,label:"State ID",name:"SID",className:r.editorField,value:k.SID,onChange:function(e){return C(E(E({},k),{},{SID:e.target.value}))},type:"tel",isNumericString:!0,customInput:m.A}))),n.createElement(h.aF,{open:Boolean(F),title:"Remove Member",closeLang:"Close",maxWidth:"md",submitLang:"Remove",onSubmit:B,submitColor:"error",onClose:function(){return _(null)}},(null==F?void 0:F.SID)!=b.SID?n.createElement("p",null,"Are you sure you want to remove ",null==F?void 0:F.First," ",null==F?void 0:F.Last,"?"):n.createElement("p",null,"Are you sure you want to leave the group?")),n.createElement(h.aF,{open:R,title:"Delete Team",closeLang:"Close",maxWidth:"md",submitLang:"Delete",onSubmit:q,submitColor:"error",onClose:function(){return W(!1)}},n.createElement("p",null,"Are you sure you want to delete your team?")))}},42262:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(86887),o=r(64180),a=r(55429),i=r(34164),c=r(7413),l=r(23805),u=r(29115),s=r(74024),f=r(52679),d=r(95478);function m(e){return(0,d.Ay)("MuiList",e)}(0,f.A)("MuiList",["root","padding","dense","subheader"]);var p=r(64922);const h=["children","className","component","dense","disablePadding","subheader"],v=(0,l.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})((({ownerState:e})=>(0,o.A)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),y=a.forwardRef((function(e,t){const r=(0,u.b)({props:e,name:"MuiList"}),{children:l,className:f,component:d="ul",dense:y=!1,disablePadding:g=!1,subheader:b}=r,w=(0,n.A)(r,h),E=a.useMemo((()=>({dense:y})),[y]),S=(0,o.A)({},r,{component:d,dense:y,disablePadding:g}),A=(e=>{const{classes:t,disablePadding:r,dense:n,subheader:o}=e,a={root:["root",!r&&"padding",n&&"dense",o&&"subheader"]};return(0,c.A)(a,m,t)})(S);return(0,p.jsx)(s.A.Provider,{value:E,children:(0,p.jsxs)(v,(0,o.A)({as:d,className:(0,i.A)(A.root,f),ref:t,ownerState:S},w,{children:[b,l]}))})}))}}]);