"use strict";(self.webpackChunkmythic_laptop=self.webpackChunkmythic_laptop||[]).push([[258,7877,201],{20201:(e,l,a)=>{a.r(l),a.d(l,{vehicleCategories:()=>t});var t=[{value:"all",label:"All"},{value:"import",label:"Imports"},{value:"compact",label:"Compacts"},{value:"suv",label:"SUVs"},{value:"sedans",label:"Sedan"},{value:"muscle",label:"Muscle"},{value:"sport",label:"Sports"},{value:"sportclassic",label:"Sports Classic"},{value:"super",label:"Super"},{value:"motorcycles",label:"Motorcycles"},{value:"offroad",label:"Off-road"},{value:"rally",label:"Rally"},{value:"van",label:"Vans"},{value:"utility",label:"Utility"},{value:"misc",label:"Miscellaneous"}]},37877:(e,l,a)=>{a.r(l),a.d(l,{default:()=>b});var t=a(55429),n=a(74268),o=a(1310),r=a(40279),c=a(44752),i=a(20500),u=a(72857),s=a(81074),v=a(59530),d=a(51698),m=a.n(d),p=a(20201),y=(0,u.A)((function(e){return{wrapper:{padding:"20px 10px 20px 20px",borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-of-type":{borderTop:"1px solid ".concat(e.palette.border.divider)}}}}));const b=function(e){var l,a,u,d,b,f,A,E,h,x,g,C=e.vehicle,S=e.onClick,k=e.onSecondary,w=y();return t.createElement(n.Ay,{className:w.wrapper,button:!0,onClick:function(){S()}},t.createElement(o.Ay,{container:!0,spacing:1},t.createElement(o.Ay,{item:!0,xs:1},t.createElement(r.A,{primary:"Type",secondary:"loan"==(null==C?void 0:C.type)?"Loan":"Cash"})),t.createElement(o.Ay,{item:!0,xs:2},t.createElement(r.A,{primary:"Vehicle",secondary:"".concat(null==C||null===(l=C.vehicle)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.make," ").concat(null==C||null===(a=C.vehicle)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.model," (").concat(null==C||null===(u=C.vehicle)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.class,")")})),t.createElement(o.Ay,{item:!0,xs:1},t.createElement(r.A,{primary:"Category",secondary:"".concat(null!==(d=null===(b=p.vehicleCategories.find((function(e){var l;return e.value==(null==C||null===(l=C.vehicle)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.category)})))||void 0===b?void 0:b.label)&&void 0!==d?d:"Unknown")})),t.createElement(o.Ay,{item:!0,xs:2},t.createElement(r.A,{primary:"Sale Price",secondary:"".concat(s.v3.format(null==C?void 0:C.salePrice)," (").concat(s.v3.format(null==C?void 0:C.commission),")")})),t.createElement(o.Ay,{item:!0,xs:2},t.createElement(r.A,{primary:"Seller",secondary:"".concat(null==C||null===(f=C.seller)||void 0===f?void 0:f.First," ").concat(null==C||null===(A=C.seller)||void 0===A?void 0:A.Last," (").concat(null==C||null===(E=C.seller)||void 0===E?void 0:E.SID,")")})),t.createElement(o.Ay,{item:!0,xs:2},t.createElement(r.A,{primary:"Buyer",secondary:"".concat(null==C||null===(h=C.buyer)||void 0===h?void 0:h.First," ").concat(null==C||null===(x=C.buyer)||void 0===x?void 0:x.Last," (").concat(null==C||null===(g=C.buyer)||void 0===g?void 0:g.SID,")")})),t.createElement(o.Ay,{item:!0,xs:2},t.createElement(r.A,{primary:"Time",secondary:t.createElement(m(),{unix:!0,date:null==C?void 0:C.time,fromNow:!0})}),t.createElement(c.A,{onClick:function(e){var l;e.stopPropagation(),k(null==C||null===(l=C.vehicle)||void 0===l?void 0:l.VIN)}},t.createElement(i.A,null,t.createElement(v.g,{icon:["fas","magnifying-glass"]}))))))}}}]);