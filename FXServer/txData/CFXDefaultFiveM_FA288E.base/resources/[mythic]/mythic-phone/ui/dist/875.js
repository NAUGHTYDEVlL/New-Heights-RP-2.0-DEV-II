"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[875,7119,9106,3517,142],{43517:(t,e,r)=>{r.r(e),r.d(e,{getAccountName:()=>n,getAccountType:()=>o});var n=function(t){switch(t.Type){case"personal":return"Current Account";case"personal_savings":return"Savings Account";default:return t.Name}},o=function(t){switch(t.Type){case"personal":return"Current Account";case"personal_savings":return"Savings Account";case"organization":return"Organization Account";default:return"Bank Account"}}},27119:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var n=r(55429),o=r(15647),a=r(45942),i=r(59530),c=r(29106),l=(0,a.A)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},accountList:{},emptyLogo:{width:"100%",fontSize:170,textAlign:"center",marginTop:"25%",color:"#30518c29"},emptyMsg:{color:t.palette.text.alt,width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold"}}}));const u=(0,o.Ng)()((function(t){var e,r=l(),a=null===(e=(0,o.d4)((function(t){return t.data.data.bankAccounts})))||void 0===e?void 0:e.accounts,u=a&&a.filter((function(t){return"personal"==t.Type}))[0],s=a&&a.filter((function(t){return"personal_savings"==t.Type})),f=a&&a.filter((function(t){return"organization"==t.Type}));return a&&s&&f?n.createElement("div",{className:r.wrapper},n.createElement("div",{className:r.accountList},u&&n.createElement(c.default,{key:u.Account,acc:u}),(null==s?void 0:s.length)>0&&s.map((function(t){return n.createElement(c.default,{key:t.Account,acc:t})})),f.length>0&&f.map((function(t){return n.createElement(c.default,{key:t.Account,acc:t})})))):n.createElement("div",{className:r.wrapper},n.createElement("div",{className:r.emptyLogo},n.createElement(i.g,{icon:["fas","face-disappointed"]})),n.createElement("div",{className:r.emptyMsg},"No Accounts?"))}))},29106:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var n=r(55429),o=r(45942),a=r(28744),i=r(87275),c=r(59530),l=r(43517),u=(0,o.A)((function(t){return{link:{textDecoration:"none"},account:{width:"100%",padding:"10px 15px",marginBottom:"5%",position:"relative",background:t.palette.secondary.dark,willChange:"background",transition:"background 400ms",borderRadius:5,boxShadow:"0px 0px 12px -2px rgba(0,0,0,0.3)","&:hover":{cursor:"pointer",background:"rgba(255, 255, 255, 0.01)"}},accountDetails:{borderBottom:"1px solid ".concat(t.palette.border.divider),"& h3":{color:t.palette.primary.main,fontWeight:400,fontSize:19,marginBottom:0,"& small":{fontSize:12,color:t.palette.text.alt,"&::before":{content:'" - "'}}}},accountBalance:{marginLeft:"5%","& h2":{fontWeight:400,color:t.palette.text.alt,marginTop:24},"& span":{fontWeight:400,color:t.palette.success.main,marginTop:24}},backIcon:{color:"".concat(t.palette.primary.main,"12"),position:"absolute",top:"6%",right:"4%",fontSize:80}}}));const s=function(t){var e,r=t.acc,o=u(),s=(0,l.getAccountName)(r),f=(0,l.getAccountType)(r);return n.createElement(i.N_,{to:"/apps/bank/view/".concat(r.Account),className:o.link},n.createElement(a.A,{className:o.account},n.createElement("div",{className:o.accountDetails},n.createElement("h3",null,s),n.createElement("p",null,"Account Number: ",r.Account,n.createElement("br",null),"Account Type: ",f)),n.createElement("div",{className:o.accountBalance},n.createElement("h2",null,"Balance:"," ",n.createElement("span",null,null!==(e=r.Permissions)&&void 0!==e&&e.BALANCE?"$".concat(r.Balance.toLocaleString("en-US")):"???"))),"personal_savings"===r.Type?n.createElement(c.g,{className:o.backIcon,icon:["fas","piggy-bank"]}):n.createElement(c.g,{className:o.backIcon,icon:["fas","bank"]})))}},50875:(t,e,r)=>{r.r(e),r.d(e,{default:()=>N});var n=r(55429),o=r(15647),a=r(84529),i=r(142),c=r(79111),l=r(26573),u=r(55834),s=r(59757),f=r(45942),p=r(59530),h=r(36140),d=r(61541),m=r(27119),y=r(64709);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function v(){v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:T(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",m="completed",y={};function b(){}function w(){}function A(){}var x={};u(x,i,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(C([])));k&&k!==r&&n.call(k,i)&&(x=k);var N=A.prototype=b.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==g(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function T(e,r,n){var o=p;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=B(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?m:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function B(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,B(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(g(e)+" is not iterable")}return w.prototype=A,o(N,"constructor",{value:A,configurable:!0}),o(A,"constructor",{value:w,configurable:!0}),w.displayName=u(A,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,u(t,l,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},S(L.prototype),u(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(N),u(N,l,"Generator"),u(N,i,(function(){return this})),u(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function b(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,c,"next",t)}function c(t){b(a,n,o,i,c,"throw",t)}i(void 0)}))}}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=g(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==g(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var k=(0,f.A)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},titleBar:{padding:"10px 8px",textAlign:"center"},accountTitle:{fontSize:20,fontWeight:"bold",margin:"auto",width:"100%",whiteSpace:"nowrap"},content:E(E(E(E(E({height:"86%",padding:15,overflowY:"auto",overflowX:"hidden"},"padding",10),"&::-webkit-scrollbar",{width:6}),"&::-webkit-scrollbar-thumb",{background:"#ffffff52"}),"&::-webkit-scrollbar-thumb:hover",{background:t.palette.primary.main}),"&::-webkit-scrollbar-track",{background:"transparent"}),tabPanel:{},phoneTab:{minWidth:"25%"}}}));const N=function(t){var e=k(),r=(0,o.wA)(),f=(0,o.d4)((function(t){return t.bank.tab})),g=A((0,n.useState)(!1),2),b=g[0],x=g[1],E=(0,n.useMemo)((function(){return(0,a.throttle)(w(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!b){t.next=2;break}return t.abrupt("return");case 2:return x("Loading Accounts"),t.prev=3,t.next=6,d.A.send("Banking:GetData");case 6:return t.next=8,t.sent.json();case 8:if(!(e=t.sent)){t.next=13;break}r({type:"SET_DATA",payload:{type:"bankAccounts",data:e}}),t.next=14;break;case 13:throw e;case 14:t.next=18;break;case 16:t.prev=16,t.t0=t.catch(3);case 18:x(!1);case 19:case"end":return t.stop()}}),t,null,[[3,16]])}))),2e3)}),[]);(0,n.useEffect)((function(){E()}),[]);return n.createElement("div",{className:e.wrapper},n.createElement(i.A,{position:"static"},n.createElement(c.Ay,{container:!0,className:e.titleBar},n.createElement(c.Ay,{item:!0,xs:2,style:{textAlign:"left"}},n.createElement(l.A,{disabled:!0},n.createElement(p.g,{icon:["fas","bank"]}))),n.createElement(c.Ay,{item:!0,xs:8,className:e.accountTitle},function(){switch(f){case 0:return"Bank Accounts";case 1:return"Pending Bills";default:return"Banking"}}()),n.createElement(c.Ay,{item:!0,xs:2,style:{textAlign:"right"}},n.createElement(l.A,{onClick:function(){return E()},disabled:Boolean(b)},n.createElement(p.g,{icon:["fas","arrows-rotate"]}))))),b?n.createElement(h.aH,{static:!0,text:b}):n.createElement(n.Fragment,null,n.createElement("div",{className:e.content},n.createElement("div",{className:e.tabPanel,role:"tabpanel",hidden:0!==f,id:"accounts"},0===f&&n.createElement(m.default,null)),n.createElement("div",{className:e.tabPanel,role:"tabpanel",hidden:1!==f,id:"bills"},1===f&&n.createElement(y.default,{setLoading:function(t){return x(t)},refreshAccounts:function(){return E()}}))),n.createElement("div",{className:e.tabs},n.createElement(u.A,{value:f,onChange:function(t,e){r({type:"SET_BANK_TAB",payload:{tab:e}})},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",scrollButtons:!1},n.createElement(s.A,{className:e.phoneTab,label:"Accounts"}),n.createElement(s.A,{className:e.phoneTab,label:"Bills"})))))}},142:(t,e,r)=>{r.d(e,{A:()=>g});var n=r(86887),o=r(64180),a=r(55429),i=r(1551),c=r(50035),l=r(94526),u=r(88594),s=r(69921),f=r(28744),p=r(35457);function h(t){return(0,p.A)("MuiAppBar",t)}(0,r(40725).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var d=r(64922);const m=["className","color","enableColorOnDark","position"],y=(0,l.Ay)(f.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${(0,s.A)(r.position)}`],e[`color${(0,s.A)(r.color)}`]]}})((({theme:t,ownerState:e})=>{const r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,o.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===e.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===e.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===e.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===e.position&&{position:"static"},"relative"===e.position&&{position:"relative"},"default"===e.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&"default"!==e.color&&"inherit"!==e.color&&"transparent"!==e.color&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},"inherit"===e.color&&{color:"inherit"},"dark"===t.palette.mode&&!e.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===e.color&&(0,o.A)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"}))})),g=a.forwardRef((function(t,e){const r=(0,u.A)({props:t,name:"MuiAppBar"}),{className:a,color:l="primary",enableColorOnDark:f=!1,position:p="fixed"}=r,g=(0,n.A)(r,m),v=(0,o.A)({},r,{color:l,position:p,enableColorOnDark:f}),b=(t=>{const{color:e,position:r,classes:n}=t,o={root:["root",`color${(0,s.A)(e)}`,`position${(0,s.A)(r)}`]};return(0,c.A)(o,h,n)})(v);return(0,d.jsx)(y,(0,o.A)({square:!0,component:"header",ownerState:v,elevation:4,className:(0,i.A)(b.root,a,"fixed"===p&&"mui-fixed"),ref:e},g))}))}}]);