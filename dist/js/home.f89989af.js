(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"2a6a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"footer-menu-col"},[a("router-link",{attrs:{to:{name:"home"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-home"})])],1)],1),a("b-col",[a("router-link",{attrs:{to:{name:"productcreate"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-plus-square"})])],1)],1),a("b-col",[a("router-link",{attrs:{to:{name:"products"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-list"})])],1)],1),a("b-col",[a("router-link",{attrs:{to:{name:"sales"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},o=[],n={},c=n,i=a("2877"),r=Object(i["a"])(c,e,o,!1,null,null,null);s["a"]=r.exports},"4c13":function(t,s,a){t.exports=a.p+"img/bottom-border.268586f1.jpeg"},bb51:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",{staticClass:"home"},[a("News"),a("FooterMenu")],1)},o=[],n=a("2a6a"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"news"},[e("h2",[t._v("Top News")]),e("b-row",{staticClass:"news-row"},[e("b-col",{staticClass:"news-box"},[e("div",{staticClass:"news-body"},[e("h3",[t._v("News 1")]),e("p",[t._v("The latest update of tikify brings us feature such as ...")])])]),e("b-col",{staticClass:"news-box"},[e("div",{staticClass:"news-body"},[e("h3",[t._v("News 2")]),e("p",[t._v("The latest update of tikify brings us feature such as ...")])])])],1),e("img",{staticClass:"divider-img",attrs:{src:a("4c13")}}),e("h2",[t._v("Sales and statistics")]),e("b-row",[e("b-col",{staticClass:"col-6 stat-col"},[e("h3",[t._v("Total Posts")]),e("div",{staticClass:"stats"})]),e("b-col",{staticClass:"col-6 stat-col"},[e("h3",[t._v("New Posts")]),e("div",{staticClass:"stats"})]),e("b-col",{staticClass:"col-6 stat-col"},[e("h3",[t._v("Active Posts")]),e("div",{staticClass:"stats"})])],1)],1)},i=[],r={components:{}},l=r,u=a("2877"),b=Object(u["a"])(l,c,i,!1,null,null,null),f=b.exports,d={name:"home",mounted:function(){var t=this,s=this;s.$store.dispatch("getProductsAction"),s.$store.dispatch("getSalesAction"),this.$store.watch(function(t){return t.products},function(s){t.products=s}),this.$store.watch(function(t){return t.sales},function(s){t.sales=s})},components:{FooterMenu:n["a"],News:f},data:function(){return{products:{},sales:{}}},methods:{}},h=d,m=Object(u["a"])(h,e,o,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=home.f89989af.js.map