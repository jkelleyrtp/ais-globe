(this.webpackJsonpglobear=this.webpackJsonpglobear||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(6),c=n(12),i=n(23),u=n.n(i),p=(n(39),n(27)),s=n(14),l=[];function h(){return(h=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("aispoints.json").then((function(e){return e.json()})).then((function(e){l=e})),e.next=3,t;case 3:u.a.render(Object(s.jsx)(g,{}),document.getElementById("root"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var t=l.length,n=Object(a.a)(Array(t).keys()).map((function(e,t){return{lat:l[t][0],lng:l[t][1],size:Math.random()/3,color:["red","white","blue","green"][Math.round(3*Math.random())]}}));return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(p.a,{globeImageUrl:"//unpkg.com/three-globe/example/img/earth-dark.jpg",bumpImageUrl:"//unpkg.com/three-globe/example/img/earth-topology.png",pointsData:n,pointAltitude:function(){return.01},pointColor:"color"})})}!function(){h.apply(this,arguments)}()},39:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.372e797d.chunk.js.map