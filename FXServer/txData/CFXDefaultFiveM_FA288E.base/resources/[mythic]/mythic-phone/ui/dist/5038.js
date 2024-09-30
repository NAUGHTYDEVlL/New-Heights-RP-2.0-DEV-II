"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5038,9440],{29440:(e,t,n)=>{n.r(t),n.d(t,{getActualRemainingAmount:()=>r,getLoanIdentifierType:()=>o,getLoanTypeName:()=>a,getNextPaymentAmount:()=>s});var a=function(e){switch(e){case"vehicle":return"Vehicle";case"property":return"Property";default:return"Asset"}},o=function(e){switch(e){case"vehicle":return"Vehicle VIN";case"property":return"Property ID";default:return"Asset ID"}},r=function(e){if(e.Remaining>0){var t=(100+e.InterestRate)/100;return Math.ceil(e.Remaining*t)}return 0},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.Remaining>0){var n=(100+e.InterestRate)/100,a=e.TotalPayments-e.PaidPayments;e.MissedPayments>1&&1===t&&(t=e.MissedPayments),t>a&&(t=a);var o=e.Remaining/a*t*n;return Math.ceil(o)}return 0}},15038:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(55429),o=(n(15647),n(45942)),r=n(28744),s=n(87275),c=n(59530),l=n(51698),i=n.n(l),m=n(29440),u=(0,o.A)((function(e){return{link:{textDecoration:"none"},account:{width:"100%",padding:"10px 15px",marginBottom:"5%",position:"relative",background:e.palette.secondary.dark,willChange:"background",transition:"background 400ms",borderRadius:5,boxShadow:"0px 0px 12px -2px rgba(0,0,0,0.3)","&:hover":{cursor:"pointer",background:"rgba(255, 255, 255, 0.01)"}},defaultedAccount:{border:"3px solid ".concat(e.palette.error.main)},missedLastPayment:{border:"3px solid ".concat(e.palette.warning.dark)},accountDetails:{borderBottom:"1px solid ".concat(e.palette.border.divider),"& h3":{fontWeight:400,fontSize:19,marginBottom:0,"& small":{fontSize:12,color:e.palette.text.alt,"&::before":{content:'" - "'}}}},accountBalance:{marginLeft:"5%","& h2":{fontWeight:400,color:e.palette.text.alt,marginTop:24},"& span":{fontWeight:400,color:e.palette.success.main,marginTop:24}},backIcon:{color:"#30518c29",position:"absolute",top:"6%",right:"4%",fontSize:80},cancelButton:{position:"absolute",marginLeft:"5%",bottom:"5%",color:e.palette.error.main}}}));const d=function(e){var t=e.loan,n=u(),o=(0,m.getActualRemainingAmount)(t),l=t.TotalPayments-t.PaidPayments,d=function(){return t.Defaulted?"This loan has been defaulted because you missed too many payments.":t.MissedPayments>0&&(t.MissedPayments>1?"You missed the last ".concat(t.MissedPayments," payments for this loan."):"You missed the last payment for this loan.")};return a.createElement(s.N_,{to:"/apps/loans/view/".concat(t._id),className:n.link},a.createElement(r.A,{className:"".concat(n.account," ").concat(t.Defaulted||t.MissablePayments>1&&t.MissedPayments>=t.MissablePayments-1?n.defaultedAccount:t.MissedPayments>0&&n.missedLastPayment)},a.createElement("div",{className:n.accountDetails},a.createElement("h3",null,(0,m.getLoanTypeName)(t.Type)," Loan"),a.createElement("p",null,"Interest Rate: ",t.InterestRate,"%",a.createElement("br",null),"Remaining Payments: ",l,a.createElement("br",null),"Next Payment Due: ",t.NextPayment?a.createElement(i(),{unix:!0,date:t.NextPayment,calendar:!0}):"No Due Payments",a.createElement("br",null),t.Remaining>0&&t.NextPayment&&a.createElement("span",null,"Next Payment Amount:"," ",a.createElement("span",{className:n.currency},"$",(0,m.getNextPaymentAmount)(t).toLocaleString("en-US")))),d()&&a.createElement("p",null,a.createElement("b",null,d()))),a.createElement("div",{className:n.accountBalance},a.createElement("h2",null,"Remaining:"," ",a.createElement("span",null,"$",o.toLocaleString("en-US")))),a.createElement(c.g,{className:n.backIcon,icon:["fas","hand-holding-dollar"]})))}}}]);