"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[6295,9782,142],{49782:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(55429),o=r(15647),a=r(64965),i=r(28744),l=r(79111),c=r(44686),u=r(45942),s=r(51698),p=r.n(s),f=(0,u.A)((function(t){return{convo:{"&::before":{background:"transparent !important"},background:t.palette.secondary.dark,padding:"20px 12px",border:"1px solid rgba(0, 0, 0, .25)","&:not(:last-child)":{borderBottom:"none"},"&:hover":{background:t.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:t.palette.text.dark,height:55,width:55,background:"#1de9b6",position:"relative",top:0},name:{fontSize:18,color:"#1de9b6"},time:{fontSize:12,color:t.palette.text.main,lineHeight:"25px"},subject:{fontSize:16,color:t.palette.text.light,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:5,maxWidth:"90%"},body:{fontSize:14,color:t.palette.text.main,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:5,maxWidth:"90%"},specialIcon:{position:"absolute",right:0,bottom:0,fontSize:20}}}));const h=(0,o.Ng)()((function(t){var e=f(),r=(0,a.W6)();return n.createElement(i.A,{className:e.convo,onClick:function(){r.push("/apps/irc/view/".concat(t.channel.slug))}},n.createElement(l.Ay,{container:!0},n.createElement(l.Ay,{item:!0,xs:2,style:{position:"relative"}},n.createElement(c.A,{className:e.avatar},"#")),n.createElement(l.Ay,{item:!0,xs:10,style:{position:"relative"}},n.createElement("div",null,n.createElement("span",{className:e.name},t.channel.slug),n.createElement("div",{className:e.time},"Joined:"," ",n.createElement(p(),{interval:6e4,fromNow:!0},+t.channel.joined))))))}))},86295:(t,e,r)=>{r.r(e),r.d(e,{default:()=>E});var n=r(55429),o=r(15647),a=r(64965),i=r(142),l=r(79111),c=r(26573),u=r(33268),s=r(45942),p=r(59530),f=r(61541),h=r(26324),d=r(36140),m=r(49782),y=r(23470);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(){g=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),l=new T(n||[]);return o(i,"_invoke",{value:N(t,r,l)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",m="completed",y={};function b(){}function w(){}function x(){}var A={};u(A,i,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(_([])));E&&E!==r&&n.call(E,i)&&(A=E);var S=x.prototype=b.prototype=Object.create(A);function C(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,l){var c=p(t[o],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==v(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function N(e,r,n){var o=f;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=j(l,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?m:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function _(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(v(e)+" is not iterable")}return w.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},C(L.prototype),u(L.prototype,l,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(S),u(S,c,"Generator"),u(S,i,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function b(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,l,"next",t)}function l(t){b(a,n,o,i,l,"throw",t)}i(void 0)}))}}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var k=(0,s.A)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main,overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},header:{background:"#1de9b6",fontSize:20,padding:15,lineHeight:"45px"},headerAction:{textAlign:"center",color:t.palette.text.main,"&:hover":{color:t.palette.text.alt,transition:"color ease-in 0.15s"}},buttons:{width:"100%",display:"flex",margin:"auto"},button:{width:"-webkit-fill-available",padding:20,color:t.palette.warning.main,"&:hover":{backgroundColor:"".concat(t.palette.warning.main,"14")}},buttonNegative:{width:"-webkit-fill-available",padding:20,color:t.palette.error.main,"&:hover":{backgroundColor:"".concat(t.palette.error.main,"14")}},buttonPositive:{width:"-webkit-fill-available",padding:20,color:t.palette.success.main,"&:hover":{backgroundColor:"".concat(t.palette.success.main,"14")}},error:{padding:10,width:"fit-content",height:"fit-content",margin:"auto",border:"1px solid #1de9b6",position:"absolute",top:0,bottom:0,right:0,left:0}}}));const E=(0,o.Ng)(null)((function(t){(0,y.hN)();var e,r,s,v=(0,y.MW)(),b=k(),A=(0,o.wA)(),E=(0,a.W6)(),S=(0,o.d4)((function(t){return t.data.data.ircChannels})),C=(0,o.d4)((function(t){return t.data.data.player})),L=x((0,n.useState)(!1),2),N=L[0],j=L[1],I=x((0,n.useState)(null!==(e=C.Alias)&&void 0!==e&&e.irc?null===(r=C.Alias)||void 0===r?void 0:r.irc:""),2),O=I[0],T=I[1],_=function(){var t=w(g().mark((function t(e){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,f.A.send("UpdateAlias",{app:"irc",alias:O,unique:!0});case 4:return t.next=6,t.sent.json();case 6:t.sent?(A({type:"UPDATE_DATA",payload:{type:"player",id:"Alias",key:"irc",data:O}}),v("Alias Updated")):v("Unable To Update Alias"),j(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),v("Unable To Update Alias");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),P=x((0,n.useState)(""),2),z=P[0],D=P[1],F=x((0,n.useState)(S.filter((function(t){return t.slug.includes(z)}))),2),U=F[0],G=F[1];(0,n.useEffect)((function(){G(S.filter((function(t){return t.slug.includes(z)})))}),[z]);var B=x((0,n.useState)(""),2),J=B[0],W=B[1],M=x((0,n.useState)(!1),2),R=M[0],Y=M[1],$=function(){var t=w(g().mark((function t(e){var r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!(J&&J.length>0)){t.next=18;break}return t.prev=2,r={slug:J,joined:Date.now()},t.next=6,f.A.send("JoinIRCChannel",r);case 6:return t.next=8,t.sent.json();case 8:t.sent?(A({type:"ADD_DATA",payload:{type:"ircChannels",data:r}}),v("Joined Channel"),E.push("/apps/irc/view/".concat(J))):v("Unable To Join Channel"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0),v("Unable To Join Channel");case 16:t.next=19;break;case 18:v("Unable To Join Channel");case 19:Y(!1);case 20:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return n.createElement("div",{className:b.wrapper},n.createElement(i.A,{position:"static",className:b.header},n.createElement(l.Ay,{container:!0},n.createElement(l.Ay,{item:!0,xs:9},"IRC"),n.createElement(l.Ay,{item:!0,xs:3},n.createElement(l.Ay,{container:!0,spacing:2},n.createElement(l.Ay,{item:!0,xs:6},n.createElement(c.A,{color:"secondary",onClick:function(){return Y(!0)}},n.createElement(p.g,{icon:"plus"}))),n.createElement(l.Ay,{item:!0,xs:6},n.createElement(c.A,{color:"secondary",onClick:function(){return j(!0)}},n.createElement(p.g,{icon:"gear"}))))))),n.createElement(u.A,{fullWidth:!0,variant:"standard",label:"Search For Channel",value:z,onChange:function(t){D((0,h.aG)(t.target.value))},InputProps:{style:{padding:10}},InputLabelProps:{style:{padding:10}}}),U.length>0?n.createElement(n.Fragment,null,U.sort((function(t,e){return e.joined-t.joined})).map((function(t,e){return n.createElement(m.default,{key:"channel-".concat(e),channel:t})}))):n.createElement("div",{className:b.error},""==z?"You're Not In Any Channels":"No Channels Match Your Search"),n.createElement(d.aF,{form:!0,open:N||!(null!==(s=C.Alias)&&void 0!==s&&s.irc),title:"IRC Settings",onClose:function(){return j(!1)},onAccept:_,submitLang:"Save",closeLang:"Cancel"},n.createElement(u.A,{className:b.editField,label:"Username",name:"username",type:"text",fullWidth:!0,onChange:function(t){T(t.target.value)},value:O,InputLabelProps:{style:{fontSize:20}}})),n.createElement(d.aF,{form:!0,open:R,title:"Join Channel",onClose:function(){return Y(!1)},onAccept:$,submitLang:"Join",closeLang:"Cancel"},n.createElement(u.A,{className:b.editField,label:"Channel Name",name:"channel",type:"text",fullWidth:!0,onChange:function(t){W((0,h.aG)(t.target.value))},value:J,InputLabelProps:{style:{fontSize:20}}})))}))},142:(t,e,r)=>{r.d(e,{A:()=>v});var n=r(86887),o=r(64180),a=r(55429),i=r(1551),l=r(50035),c=r(94526),u=r(88594),s=r(69921),p=r(28744),f=r(35457);function h(t){return(0,f.A)("MuiAppBar",t)}(0,r(40725).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var d=r(64922);const m=["className","color","enableColorOnDark","position"],y=(0,c.Ay)(p.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${(0,s.A)(r.position)}`],e[`color${(0,s.A)(r.color)}`]]}})((({theme:t,ownerState:e})=>{const r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,o.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===e.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===e.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===e.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===e.position&&{position:"static"},"relative"===e.position&&{position:"relative"},"default"===e.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&"default"!==e.color&&"inherit"!==e.color&&"transparent"!==e.color&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},"inherit"===e.color&&{color:"inherit"},"dark"===t.palette.mode&&!e.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===e.color&&(0,o.A)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"}))})),v=a.forwardRef((function(t,e){const r=(0,u.A)({props:t,name:"MuiAppBar"}),{className:a,color:c="primary",enableColorOnDark:p=!1,position:f="fixed"}=r,v=(0,n.A)(r,m),g=(0,o.A)({},r,{color:c,position:f,enableColorOnDark:p}),b=(t=>{const{color:e,position:r,classes:n}=t,o={root:["root",`color${(0,s.A)(e)}`,`position${(0,s.A)(r)}`]};return(0,l.A)(o,h,n)})(g);return(0,d.jsx)(y,(0,o.A)({square:!0,component:"header",ownerState:g,elevation:4,className:(0,i.A)(b.root,a,"fixed"===f&&"mui-fixed"),ref:e},v))}))}}]);