(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"5c9c":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"sign-up"},[a("Navbar"),a("p",[s._v("Create a new account")]),a("b-alert",{attrs:{dismissible:"",show:s.dismissCountDown,variant:s.msgVariant},on:{dismissed:function(t){s.dismissCountDown=0},"dismiss-count-down":s.countDownChanged}},[s._v(s._s(s.errorMsg))]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),a("br"),a("b-button",{staticClass:"signup-btn",attrs:{pill:"",variant:"primary"},on:{click:s.signUp}},[s._v("Sign Up")])],1)},e=[],i=a("a37d"),r={name:"signUp",components:{Navbar:i["a"]},mounted:function(){var s=this;this.$store.watch(function(s){return s.status},function(t){s.status=t,"failure"==s.status?(s.msgVariant="danger",s.errorMsg=s.$store.getters.error,s.showAlert()):"success"==s.status&&(s.msgVariant="success",s.errorMsg="Account created, please return to log in.",s.showAlert())})},data:function(){return{email:"",password:"",dismissSecs:5,dismissCountDown:0,errorMsg:"",msgVariant:"",status:""}},methods:{countDownChanged:function(s){var t=this;t.dismissCountDown=s},showAlert:function(){var s=this;s.dismissCountDown=s.dismissSecs},signUp:function(){var s=this,t={email:s.email,password:s.password};s.$store.dispatch("signUpAction",t)}}},o=r,c=a("2877"),u=Object(c["a"])(o,n,e,!1,null,"31a0a3d4",null);t["default"]=u.exports},9844:function(s,t,a){},a37d:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"navbar"},[n("b-navbar",{attrs:{type:"light",variant:"light"}},[n("b-button",{staticClass:"back-btn",attrs:{pill:"",variant:"info"},on:{click:s.goBack}},[s._v("‹")]),n("b-nav-item",{staticClass:"ml-auto ",attrs:{href:"#"}},[n("img",{staticClass:"nav-logo",attrs:{src:a("cf05")}})])],1)],1)},e=[],i=a("8c4f"),r=a("2b0e");r["default"].use(i["a"]);var o={name:"navbar",methods:{goBack:function(){var s=this;s.$router.go(-1)}},props:{}},c=o,u=(a("f60f"),a("2877")),l=Object(u["a"])(c,n,e,!1,null,"e82508aa",null);t["a"]=l.exports},cf05:function(s,t,a){s.exports=a.p+"img/logo.ba3bf456.png"},f60f:function(s,t,a){"use strict";var n=a("9844"),e=a.n(n);e.a}}]);
//# sourceMappingURL=signup.7c101a3a.js.map