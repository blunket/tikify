(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productedit"],{5974:function(t,o,r){"use strict";var a=r("e944"),s=r.n(a);s.a},d388:function(t,o,r){"use strict";r.r(o);var a=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",{staticClass:"product"},[r("div",{attrs:{id:"frame"}},[r("router-link",{attrs:{to:{name:"product",params:{product:t.product}}}},[r("button",{attrs:{id:"floating-btn"}},[t._v("‹")])]),r("button",{staticClass:"editBtn",on:{click:function(o){return t.update()}}},[t._v("💾")]),r("div",{attrs:{id:"shape"}}),r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"4","max-rows":"10"},model:{value:t.product.info,callback:function(o){t.$set(t.product,"info",o)},expression:"product.info"}}),r("span",{attrs:{id:"sub-text"}},[t._v(t._s(t.product.duration))])],1),r("br"),r("div",{staticClass:"col-12"},[r("span",{staticClass:"row"},[r("h4",[t._v("Advertisement Type")]),r("span",{staticClass:"ml-auto"},[r("b-form-input",{model:{value:t.product.type,callback:function(o){t.$set(t.product,"type",o)},expression:"product.type"}})],1)]),r("hr",{staticClass:"product-line"}),r("span",{staticClass:"row"},[r("h4",[t._v("Ad Price")]),r("span",{staticClass:"ml-auto"},[r("b-form-input",{model:{value:t.product.price,callback:function(o){t.$set(t.product,"price",o)},expression:"product.price"}})],1)]),r("hr",{staticClass:"product-line"})])])},s=[],e=r("8aa5"),c=r.n(e),n={components:{},props:{product:{}},mounted:function(){var t=this;t.product=t.$route.params.product},methods:{update:function(){var t=this;c.a.firestore().collection("products").doc(t.product.id).update(t.product),t.$router.push({path:"/"})}}},i=n,u=(r("5974"),r("2877")),p=Object(u["a"])(i,a,s,!1,null,"0be6e26a",null);o["default"]=p.exports},e944:function(t,o,r){}}]);
//# sourceMappingURL=productedit.005484ca.js.map