(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"about"},r=Object(o["f"])("h1",null,"Ruta Protegida",-1);function c(e,t,n,c,s,u){return Object(o["o"])(),Object(o["d"])("div",a,[r,Object(o["e"])(" "+Object(o["u"])(e.token),1)])}var s=n("1da1"),u=n("5530"),i=(n("96cf"),n("d3b7"),n("5502")),d={computed:Object(u["a"])({},Object(i["c"])(["token"])),methods:{datosProtegidos:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jwt-api-youtube.herokuapp.com/api/admin",{headers:{"Content-Type":"application/json","auth-token":e.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,console.log(o),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},created:function(){this.datosProtegidos()}};d.render=c;t["default"]=d}}]);
//# sourceMappingURL=about.7f75899e.js.map