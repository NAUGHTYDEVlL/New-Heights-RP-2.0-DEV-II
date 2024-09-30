"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[8835],{78835:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(55429),l=n(22785),a=n(90863),o=n(75937),i=n(72857),u=n(81074),c=n(72839);n(15647);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=(0,i.A)((function(e){return{editorField:{marginBottom:10}}})),b=[{value:"full",label:"Cash"},{value:"loan",label:"Loan"}];const h=function(e){var t,n,i,m,p,d,h=e.open,g=e.vehicle,w=e.onSubmit,E=e.interest,S=void 0===E?15:E,O=e.dealerData,j=e.onClose,k=v(),C={type:"loan",SID:"",weeks:8,downpayment:50},D=y((0,r.useState)(f({},C)),2),A=D[0],P=D[1],I=function(e){P(f(f({},A),{},s({},e.target.name,e.target.value)))},L=1+(null==O?void 0:O.profitPercentage)/100,F=(null==g||null===(t=g.data)||void 0===t?void 0:t.price)*L,M=(F-(null==g||null===(n=g.data)||void 0===n?void 0:n.price))*((null==O?void 0:O.commission)/100),W=F*(A.downpayment/100),x=(F-W)*(1+S/100),N=x/A.weeks;return r.createElement(c.aF,{open:h,maxWidth:"md",title:"Sell ".concat(null==g||null===(i=g.data)||void 0===i?void 0:i.make," ").concat(null==g||null===(m=g.data)||void 0===m?void 0:m.model),submitLang:"Confirm Sale",onSubmit:function(e){e.preventDefault(),w(A),P(f({},C))},onClose:j},r.createElement("p",null,"Vehicle: ","".concat(null==g||null===(p=g.data)||void 0===p?void 0:p.make," ").concat(null==g||null===(d=g.data)||void 0===d?void 0:d.model)),"loan"==A.type?r.createElement(r.Fragment,null,r.createElement("p",null,"Loan Interest Rate: ",S,"%"),r.createElement("p",null,"Downpayment: ",u.v3.format(Math.ceil(W))," (",A.downpayment,"%)"),r.createElement("p",null,"Remaining Cost (Interest Applied): ",u.v3.format(Math.ceil(x))),r.createElement("p",null,"Loan Length in Weeks: ",A.weeks),r.createElement("p",null,"Weekly Payment: ",u.v3.format(Math.ceil(N))),r.createElement("p",null,"Your Earned Commission: ",u.v3.format(Math.ceil(M)))):r.createElement(r.Fragment,null,r.createElement("p",null,"Cost: ",u.v3.format(Math.ceil(F)))),r.createElement("br",null),r.createElement(l.A,{required:!0,select:!0,fullWidth:!0,name:"type",label:"Type",className:k.editorField,value:A.type,onChange:I},b.map((function(e){return r.createElement(a.A,{key:e.value,value:e.value},e.label)}))),"loan"==A.type&&r.createElement(r.Fragment,null,r.createElement("p",null,"Downpayment ",A.downpayment,"% (",u.v3.format(Math.ceil(W)),")"),r.createElement(o.Ay,{size:"small",value:A.downpayment,name:"downpayment",min:25,max:80,step:5,valueLabelDisplay:"auto",onChange:I}),r.createElement("p",null,"Loan Length (",A.weeks," Weeks)"),r.createElement(o.Ay,{size:"small",value:A.weeks,name:"weeks",min:6,max:16,step:1,valueLabelDisplay:"auto",onChange:I})),r.createElement(l.A,{required:!0,fullWidth:!0,name:"SID",label:"Customer State ID",className:k.editorField,value:A.SID,onChange:I}))}}}]);