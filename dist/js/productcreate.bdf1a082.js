(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productcreate"],{"2a6a":function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"footer-menu-col"},[s("router-link",{attrs:{to:{name:"home"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-home"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"productcreate"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-plus-square"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"products"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-list"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"sales"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},r=[],n={},e=n,c=(s("97b3"),s("2877")),i=Object(c["a"])(e,o,r,!1,null,"16087058",null);a["a"]=i.exports},"420c":function(t,a,s){},"86c7":function(t,a,s){"use strict";var o=s("420c"),r=s.n(o);r.a},"97b3":function(t,a,s){"use strict";var o=s("bb1d"),r=s.n(o);r.a},bb1d:function(t,a,s){},c6bb:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",{staticClass:"product"},[s("div",{attrs:{id:"frame"}},[s("router-link",{attrs:{to:{name:"home"}}},[s("button",{attrs:{id:"floating-btn"}},[s("i",{staticClass:"fa fa-trash"})])]),s("button",{staticClass:"editBtn",on:{click:function(a){return t.save()}}},[s("i",{staticClass:"fa fa-save"})]),s("div",{attrs:{id:"shape"}}),s("b-form-textarea",{attrs:{id:"textarea",placeholder:"Product Information...",rows:"4","max-rows":"10"},model:{value:t.product.info,callback:function(a){t.$set(t.product,"info",a)},expression:"product.info"}})],1),s("br"),s("div",{staticClass:"col-12"},[s("span",{staticClass:"row"},[s("h4",[t._v("Advertisement Type")]),s("span",{staticClass:"ml-auto"},[s("b-form-input",{model:{value:t.product.type,callback:function(a){t.$set(t.product,"type",a)},expression:"product.type"}})],1)]),s("hr",{staticClass:"product-line"}),s("span",{staticClass:"row"},[s("h4",[t._v("Ad Price")]),s("span",{staticClass:"ml-auto"},[s("b-form-input",{model:{value:t.product.price,callback:function(a){t.$set(t.product,"price",a)},expression:"product.price"}})],1)]),s("hr",{staticClass:"product-line"}),s("span",{staticClass:"row"},[s("h4",[t._v("Ad Duration")]),s("span",{staticClass:"ml-auto"},[s("b-form-input",{model:{value:t.product.duration,callback:function(a){t.$set(t.product,"duration",a)},expression:"product.duration"}})],1)]),s("hr",{staticClass:"product-line"})]),s("FooterMenu")],1)},r=[],n=s("8aa5"),e=s.n(n),c=s("2a6a"),i={components:{FooterMenu:c["a"]},data:function(){return{product:{}}},mounted:function(){},methods:{save:function(){var t=this;t.product.uid=e.a.auth().currentUser.uid,e.a.firestore().collection("products").add(t.product),t.$router.push({path:"/"})}}},u=i,l=(s("86c7"),s("2877")),d=Object(l["a"])(u,o,r,!1,null,"6130bee4",null);a["default"]=d.exports}}]);
//# sourceMappingURL=productcreate.bdf1a082.js.map