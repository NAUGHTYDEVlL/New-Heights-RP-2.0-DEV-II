"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2494],{42494:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(55429),a=n(15647),o=n(24187),c=n(6129),i=n(40178),l=n(24209),u=n(48147),s=n(44557),f=n(85220),p=n(49999),h=n(74910),y=n(2059),d=n(45942),m=n(59530),v=n(61541),g=n(23470),E=n(36140);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(){w=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,c=Object.create(o.prototype),i=new C(r||[]);return a(c,"_invoke",{value:R(e,n,i)}),c}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",m={};function v(){}function g(){}function E(){}var x={};u(x,c,(function(){return this}));var A=Object.getPrototypeOf,k=A&&A(A(N([])));k&&k!==n&&r.call(k,c)&&(x=k);var L=E.prototype=v.prototype=Object.create(x);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(a,o,c,i){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==b(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(s).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function R(t,n,r){var a=p;return function(o,c){if(a===y)throw Error("Generator is already running");if(a===d){if("throw"===o)throw c;return{value:e,done:!0}}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=y;var u=f(t,n,r);if("normal"===u.type){if(a=r.done?d:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=d,r.method="throw",r.arg=u.arg)}}}function j(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=f(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var c=o.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(b(t)+" is not iterable")}return g.prototype=E,a(L,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:g,configurable:!0}),g.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},_(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new S(s(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},_(L),u(L,l,"Generator"),u(L,c,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(l&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}function x(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){x(o,r,a,c,i,"next",e)}function i(e){x(o,r,a,c,i,"throw",e)}c(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=(0,d.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,"& span":{marginLeft:5,fontSize:12,color:e.palette.text.alt,"&::before":{content:'"("'},"&::after":{content:'")"'}}},track:{background:e.palette.secondary.dark},youindic:{color:"gold"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const S=function(e){var t=_(),n=(0,g.MW)(),d=(0,a.wA)(),b=(0,a.d4)((function(e){return e.data.data.player.ID})),x=(0,a.d4)((function(e){return e.data.data.player.Callsign})),L=(0,a.d4)((function(e){return e.pdRace.inRace})),S=(0,a.d4)((function(e){return e.data.data.tracks_pd})),R=(0,a.d4)((function(e){return e.pdRace.races})).filter((function(e){return-1!=e.state&&2!=e.state&&Boolean(S.filter((function(t){return t._id==e.track}))[0])})).sort((function(e,t){return t.time-e.time})),j=k((0,r.useState)(null),2),P=j[0],O=j[1],C=k((0,r.useState)(null),2),N=C[0],I=C[1],T=function(){var e=A(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.A.send("JoinRacePD",t);case 3:return e.next=5,e.sent.json();case 5:r=e.sent,n(r?"Joined Race":"Unable to Join Race"),r&&d({type:"PD_I_RACE",payload:{state:!0}}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),n("Unable to Join Race");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=A(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.A.send("LeaveRacePD",t);case 3:return e.next=5,e.sent.json();case 5:r=e.sent,n(r?"Left Race":"Unable to Leave Race"),r&&d({type:"PD_I_RACE",payload:{state:!1}}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),n("Unable to Leave Race");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=A(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.A.send("CancelRacePD",t);case 3:return e.next=5,e.sent.json();case 5:r=e.sent,n(r?"Cancelled Race":"Unable to Cancel Race"),r&&d({type:"PD_I_RACE",payload:{state:!1}}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),n("Unable to Cancel Race");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=A(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.A.send("StartRacePD",t);case 3:return e.next=5,e.sent.json();case 5:r=e.sent,n(null!=r&&r.failed?r.message:"Starting Race"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),n("Unable to Start Race");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=A(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.A.send("EndRacePD",t);case 3:return e.next=5,e.sent.json();case 5:r=e.sent,n(r?"Race Ended":"Unable to End Race"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),n("Unable to End Race");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.createElement("div",{className:t.wrapper},r.createElement("div",null,R.length>0?R.map((function(e,n){var a=S.filter((function(t){return t._id==e.track}))[0];return r.createElement(o.A,{key:"race-".concat(n),className:t.track,expanded:N===n,onChange:N===n?function(){return I(null)}:function(){return I(n)}},r.createElement(c.A,{expandIcon:r.createElement(m.g,{icon:["fas","chevron-down"]})},r.createElement(i.A,{className:t.heading},e.name,null!=e.racers[x]&&r.createElement("span",{className:t.youindic},"*")),r.createElement(i.A,{className:t.secondaryHeading},a.Name,r.createElement("span",null,0==e.state?"Setup":"In-Progress"))),r.createElement(l.A,null,r.createElement(u.A,null,r.createElement(s.Ay,null,r.createElement(f.A,{primary:"Name",secondary:e.name})),r.createElement(s.Ay,null,r.createElement(f.A,{primary:"Host",secondary:"".concat(e.host," (").concat(e.host_src,")")})),r.createElement(s.Ay,null,r.createElement(f.A,{primary:"Track",secondary:"".concat(a.Name," (").concat(a.Distance,")")})),r.createElement(s.Ay,null,r.createElement(f.A,{primary:"# of Laps",secondary:e.laps})),r.createElement(s.Ay,null,r.createElement(f.A,{primary:"Joined Participants",secondary:Object.keys(e.racers).length>0?"".concat(Object.keys(e.racers).length," Participants"):null})),r.createElement(s.Ay,null,r.createElement(u.A,null,Object.keys(e.racers).length>0?r.createElement(s.Ay,null,r.createElement(p.A,{variant:"contained",color:"primary",onClick:function(){return O(e)}},"View Participants")):r.createElement(s.Ay,null,r.createElement(f.A,{primary:"No Participants Have Joined"})))))),r.createElement(h.A,null),r.createElement(y.A,null,e.host_id==b?0==e.state?r.createElement(r.Fragment,null,r.createElement(p.A,{size:"small",color:"primary",onClick:function(){return U(e._id)}},"Cancel"),r.createElement(p.A,{size:"small",color:"primary",onClick:function(){return z(e._id)}},"Start")):r.createElement(p.A,{size:"small",color:"primary",onClick:function(){return F(e._id)}},"End"):r.createElement(r.Fragment,null,null!=e.racers[x]?r.createElement(p.A,{size:"small",disabled:e.host_id==b,onClick:function(){return D(e._id)}},"Leave"):r.createElement(p.A,{size:"small",disabled:L||0!=e.state,onClick:function(){return T(e._id)}},"Join"))))})):r.createElement("div",{className:t.emptyMsg},"No Pending Trials"),r.createElement(E.aF,{open:null!=P,title:"Joined Participants",onClose:function(){return O(null)}},null!=P&&r.createElement(u.A,null,Object.keys(P.racers).map((function(e){return r.createElement(s.Ay,null,r.createElement(f.A,{primary:e}))}))))))}}}]);