(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productedit"],{"2a6a":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"footer-menu-col"},[s("router-link",{attrs:{to:{name:"home"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-home"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"productcreate"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-plus-square"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"products"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-list"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"sales"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},o=[],c={},r=c,i=(s("863a"),s("2877")),n=Object(i["a"])(r,e,o,!1,null,"a4c6841a",null);a["a"]=n.exports},"473a":function(t,a,s){},"754c":function(t,a,s){t.exports=s.p+"img/create-listing-block.cb4ef813.svg"},"7cd0":function(t,a,s){},"863a":function(t,a,s){"use strict";var e=s("473a"),o=s.n(e);o.a},a762:function(t,a,s){t.exports=s.p+"img/background.366bb87b.svg"},c4a7:function(t,a,s){"use strict";var e=s("7cd0"),o=s.n(e);o.a},d388:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product"},[e("b-container",[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{staticClass:"col-md-12 col-lg-4 align-self-center"},[e("img",{staticClass:"create-listing-block",attrs:{src:s("754c")}}),e("br")])],1),e("b-row",{staticClass:"justify-content-center"},[e("b-col",{staticClass:"col-md-12 col-lg-4 input-col justify-content-center"},[e("b-row",{staticClass:"justify-content-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"post-type",attrs:{placeholder:"Type",type:"text"},domProps:{value:t.product.price},on:{input:function(a){a.target.composing||t.$set(t.product,"price",a.target.value)}}}),e("i",{staticClass:"fa fa-question-circle"})]),e("b-row",{staticClass:"justify-content-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.product.type,expression:"product.type"}],staticClass:"post-price",attrs:{placeholder:"Price",type:"text"},domProps:{value:t.product.type},on:{input:function(a){a.target.composing||t.$set(t.product,"type",a.target.value)}}}),e("i",{staticClass:"fa fa-question-circle"})]),e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Describe the benefits of your post to an artist",rows:"4","max-rows":"10"},model:{value:t.product.info,callback:function(a){t.$set(t.product,"info",a)},expression:"product.info"}})],1)],1),e("b-row",{staticClass:"justify-content-end"},[e("div",{staticClass:"col-4"},[e("i",{staticClass:"fas fa-save-5x",on:{click:t.update}})])])],1),e("img",{staticClass:"divider-img-bottom",attrs:{src:s("a762")}}),e("b-row",{staticClass:"submit-btn-row"},[e("b-col",{staticClass:"submit-btn-col col-3"},[e("i",{staticClass:"submit-btn fa fa-check-circle",on:{click:t.update}})])],1),e("FooterMenu")],1)},o=[],c=s("8aa5"),r=s.n(c),i=s("2a6a"),n={components:{FooterMenu:i["a"]},props:{product:{}},mounted:function(){var t=this;t.product=t.$route.params.product},methods:{update:function(){var t=this;r.a.firestore().collection("products").doc(t.product.id).update(t.product),t.$router.push({path:"/"})}}},l=n,u=(s("c4a7"),s("2877")),p=Object(u["a"])(l,e,o,!1,null,"7d292e29",null);a["default"]=p.exports}}]);
//# sourceMappingURL=productedit.b66e04d1.js.map