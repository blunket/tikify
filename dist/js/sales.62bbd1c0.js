(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sales"],{"2a6a":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"footer-menu-col"},[s("router-link",{attrs:{to:{name:"home"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-home"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"productcreate"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-plus-square"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"products"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-list"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"sales"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},n=[],r={},o=r,c=s("2877"),l=Object(c["a"])(o,e,n,!1,null,null,null);a["a"]=l.exports},af7c:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",[s("h3",{staticClass:"sales-title"},[t._v("Sales >")]),s("b-row",{staticClass:"b-row col-12"},t._l(t.sales,function(a){return s("b-col",{staticClass:"col-4"},[s("router-link",{attrs:{to:{name:"sale",params:{ID:a.ID}}}},[s("b-card",{staticClass:"product-card"},[s("b-card-title",{staticClass:"card-title"},[t._v(t._s(a.type))]),s("b-card-text",{staticClass:"card-text"},[t._v(t._s(a.email))]),s("b-button",{staticClass:"details-button",attrs:{variant:"secondary"}},[t._v("Details")])],1)],1)],1)}),1),s("FooterMenu")],1)},n=[],r=s("2a6a"),o={components:{FooterMenu:r["a"]},mounted:function(){var t=this,a=this;a.$store.dispatch("getSalesAction"),this.$store.watch(function(t){return t.products},function(a){t.products=a}),this.$store.watch(function(t){return t.sales},function(a){t.sales=a})},data:function(){return{sales:{}}}},c=o,l=s("2877"),i=Object(l["a"])(c,e,n,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=sales.62bbd1c0.js.map