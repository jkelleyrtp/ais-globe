(this.webpackJsonpglobear=this.webpackJsonpglobear||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(6),c=n(12),i=n(23),s=n.n(i),u=(n(39),n(27)),p=n(14),l=[];function g(){return(g=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("ais-globe/aispoints.json").then((function(e){return e.json()})).then((function(e){l=e})),e.next=3,t;case 3:s.a.render(Object(p.jsx)(h,{}),document.getElementById("root"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=l.length,n=Object(a.a)(Array(t).keys()).map((function(e,t){return{lat:l[t][0],lng:l[t][1],size:Math.random()/3,color:["red","white","blue","green"][Math.round(3*Math.random())]}}));return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(u.a,{globeImageUrl:"//unpkg.com/three-globe/example/img/earth-dark.jpg",bumpImageUrl:"//unpkg.com/three-globe/example/img/earth-topology.png",pointsData:n,pointAltitude:function(){return.01},pointColor:"color"})})}!function(){g.apply(this,arguments)}()},39:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.abf87328.chunk.js.map