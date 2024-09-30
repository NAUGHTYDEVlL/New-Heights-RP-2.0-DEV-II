"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[8279],{28279:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(55429),l=n(22785),a=n(90863),o=n(75937),i=n(72857),u=n(81074),c=n(72839);n(15647);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=(0,i.A)((function(e){return{editorField:{marginBottom:10}}})),d=[{value:"full",label:"Cash"},{value:"loan",label:"Loan"}];const h=function(e){var t=e.open,n=e.property,i=e.onSubmit,m=e.interest,p=void 0===m?15:m,b=(e.dealerData,e.onClose),h=v(),g={type:"loan",SID:"",weeks:8,downpayment:50},w=y((0,r.useState)(f({},g)),2),E=w[0],S=w[1],O=function(e){S(f(f({},E),{},s({},e.target.name,e.target.value)))},j=null==n?void 0:n.price,k=.05*j,C=j*(E.downpayment/100),D=(j-C)*(1+p/100),A=D/E.weeks;return r.createElement(c.aF,{open:t,maxWidth:"md",title:"Sell ".concat(null==n?void 0:n.label),submitLang:"Confirm Sale",onSubmit:function(e){e.preventDefault(),i(E),S(f({},g))},onClose:b},r.createElement("p",null,"Property: ",null==n?void 0:n.label),"loan"==E.type?r.createElement(r.Fragment,null,r.createElement("p",null,"Loan Interest Rate: ",p,"%"),r.createElement("p",null,"Downpayment: ",u.v3.format(Math.ceil(C))," (",E.downpayment,"%)"),r.createElement("p",null,"Remaining Cost (Interest Applied): ",u.v3.format(Math.ceil(D))),r.createElement("p",null,"Loan Length in Weeks: ",E.weeks),r.createElement("p",null,"Weekly Payment: ",u.v3.format(Math.ceil(A))),r.createElement("p",null,"Your Earned Commission: ",u.v3.format(Math.ceil(k)))):r.createElement(r.Fragment,null,r.createElement("p",null,"Cost: ",u.v3.format(Math.ceil(j)))),r.createElement("br",null),r.createElement(l.A,{required:!0,select:!0,fullWidth:!0,name:"type",label:"Type",className:h.editorField,value:E.type,onChange:O},d.map((function(e){return r.createElement(a.A,{key:e.value,value:e.value},e.label)}))),"loan"==E.type&&r.createElement(r.Fragment,null,r.createElement("p",null,"Downpayment ",E.downpayment,"% (",u.v3.format(Math.ceil(C)),")"),r.createElement(o.Ay,{size:"small",value:E.downpayment,name:"downpayment",min:15,max:80,step:5,valueLabelDisplay:"auto",onChange:O}),r.createElement("p",null,"Loan Length (",E.weeks," Weeks)"),r.createElement(o.Ay,{size:"small",value:E.weeks,name:"weeks",min:8,max:24,step:1,valueLabelDisplay:"auto",onChange:O})),r.createElement(l.A,{required:!0,fullWidth:!0,name:"SID",label:"Customer State ID",className:h.editorField,value:E.SID,onChange:O}))}}}]);