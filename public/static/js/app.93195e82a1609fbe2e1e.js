webpackJsonp([16],{0:function(t,e){},"2SwY":function(t,e){},ApRR:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},a,!1,function(t){s("uyBt")},null,null).exports,n=s("/ocq"),i=s("mtWM"),l=s.n(i),c=l.a.create(),u={name:"Login",data:function(){return{msg:"Login Page",lore:!0,wronglogin:!1,nouser:!1,loginVisible:!0,registerVisible:!1,path:this.$router.currentRoute.path,loginForm:{username:"",password:""},registerForm:{username:"",email:"",password:""},pwcomfirm:""}},methods:{goTopPage:function(){this.$router.push({path:"/"})},showregister:function(){this.loginVisible=!this.loginVisible,this.registerVisible=!this.registerVisible,this.lore=!this.lore,this.wronglogin=!1,this.nouser=!1},register:function(){var t=this,e=this.registerForm;c.put("/api/user/addUser",e).then(function(e){console.log(e),"用户名存在"==e.data?t.$message({message:"用户名存在",type:"warning"}):(console.log("ユーザー登録しました。"),t.showregister(),t.$message({message:"注册成功",type:"success"}),t.refresh())}).catch(function(t){t.response?console.log("/addUser :",t.response.status,t.response.statusText):console.log("error /addUser")})},login:function(){var t=this;this.wronglogin=!1,this.nouser=!1;var e=this.loginForm;c.post("/api/user/getUser",e).then(function(s){"用户不存在"==s.data?(t.nouser=!0,t.refresh()):"登陆成功"==s.data?(console.log("登陆成功"),localStorage.setItem("ms_username",t.loginForm.username),"admin"==e.username?t.$router.push("/dashboard"):t.$router.push("/main")):"密码错误"==s.data&&(t.wronglogin=!0,t.refresh())}).catch(function(t){t.response?console.log("/getUser :",t.response.status,t.response.statusText):console.log("error /getUser")})},refresh:function(){this.loginForm.password="",this.loginForm.username="",this.registerForm.username="",this.registerForm.email="",this.registerForm.password="",this.pwcomfirm=""}},watch:{$route:function(t,e){this.path=this.$router.currentRoute.path}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Login"}},[r("header",{staticClass:"login-nav"},[r("div",{staticClass:"logincontainer"},[r("div",{staticClass:"nav-left"},[r("img",{attrs:{src:s("ZURh"),alt:""}}),t._v(" "),r("a",{on:{click:t.goTopPage}},[t._v("Fourdollar's World")])]),t._v(" "),r("div",{staticClass:"nav-right"},[r("ul",{staticClass:"nav-list"},[r("li",{on:{click:t.showregister}},[r("a",{directives:[{name:"show",rawName:"v-show",value:t.lore,expression:"lore"}]},[t._v("Register")]),r("a",{directives:[{name:"show",rawName:"v-show",value:!t.lore,expression:"!lore"}]},[t._v("Login")])]),t._v(" "),r("li",{on:{click:t.goTopPage}},[r("a",[t._v("HomePage")])])])])])]),t._v(" "),r("div",{staticClass:"login-fullpage"},[r("div",{staticClass:"login-content"},[r("div",{staticClass:"logincontainer"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3"},[t.loginVisible?r("form",{staticClass:"login-form",attrs:{action:"",method:""}},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Email address/UserID")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.username,expression:"loginForm.username"}],staticClass:"form-control input-no-border",attrs:{type:"text",placeholder:"Enter email/ID"},domProps:{value:t.loginForm.username},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"username",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control input-no-border",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),t._v(" "),t.wronglogin?r("p",{staticStyle:{color:"red"}},[t._v("账号或密码错误")]):t._e(),t._v(" "),t.nouser?r("p",{staticStyle:{color:"red"}},[t._v("用户不存在")]):t._e()])]),t._v(" "),r("div",{staticClass:"card-footer text-center"},[r("button",{staticClass:"btn btn-fill btn-wd ",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Let's go")]),t._v(" "),t._m(1)])])]):t._e(),t._v(" "),t.registerVisible?r("form",{staticClass:"register-form",attrs:{action:"",method:""}},[r("div",{staticClass:"card"},[t._m(2),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"form-group"},[r("label",[t._v("ID")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerForm.username,expression:"registerForm.username"}],staticClass:"form-control input-no-border",attrs:{type:"text",placeholder:"Nick name"},domProps:{value:t.registerForm.username},on:{input:function(e){e.target.composing||t.$set(t.registerForm,"username",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Email address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerForm.email,expression:"registerForm.email"}],staticClass:"form-control input-no-border",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.registerForm.email},on:{input:function(e){e.target.composing||t.$set(t.registerForm,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerForm.password,expression:"registerForm.password"}],staticClass:"form-control input-no-border",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.registerForm.password},on:{input:function(e){e.target.composing||t.$set(t.registerForm,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Password-Comfirm")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pwcomfirm,expression:"pwcomfirm"}],staticClass:"form-control input-no-border",attrs:{type:"password",placeholder:"Password Confirmation"},domProps:{value:t.pwcomfirm},on:{input:function(e){e.target.composing||(t.pwcomfirm=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"card-footer text-center"},[r("button",{staticClass:"btn btn-fill btn-wd ",attrs:{type:"submit"},on:{click:t.register}},[t._v("注册")])])])]):t._e()])])])]),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"forgot"},[e("a",{staticStyle:{color:"#68B3C8"},attrs:{href:"#"}},[this._v("Forgot your password?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[this._v("Register")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer footer-transparent"},[e("div",{staticClass:"logincontainer"},[e("div",{staticClass:"copyright"},[this._v("\n                © 2018, made with "),e("i",{staticClass:"fa fa-heart heart"}),this._v(" by "),e("a",{attrs:{href:"https://github.com/fourdollar"}},[this._v("SIYUAN FENG")])])])])}]};var d=s("VU/8")(u,p,!1,function(t){s("ApRR")},null,null).exports,m=s("vwbq"),h=s("eiri"),v={mounted:function(){var t=this,e=m.select(this.$el),s=(e.attr("width"),e.attr("height"),m.geoAlbersUsa()),r=m.geoPath().projection(s);m.json("static/data/us.json",function(s,a){var o=e.append("g");o.selectAll(".state").data(h.feature(a,a.objects.usStates).features).enter().append("path").attr("class","state").attr("d",r).on("mouseover",function(e){t.$emit("stateSelected",e.properties.STATE_ABBR)}).on("mouseout",function(e){t.$emit("stateDeselected",e.properties.STATE_ABBR)}),o.attr("transform","scale(0.57)")})}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("svg",{attrs:{width:"500",height:"300"}})},staticRenderFns:[]};var g=s("VU/8")(v,f,!1,function(t){s("2SwY")},null,null).exports,_=s("YO8j"),w=s("2IsC"),b=(s("M4fF"),{components:{usMap:g,tooltip:_.default},created:function(){var t=this;this.$http.get("static/data/states-data.csv").then(function(e){this.statesData={},w.e(";").parse(e.data,function(e){var s=e["2017 Population"].split(",").join("");return e.value=+s,t.statesData[e.STATE_ABBR]=e,delete e["2017 Population"],delete e.STATE_ABBR,e})})},data:function(){return{statesData:void 0,currentState:void 0}},computed:{currentStateDescription:function(){return"Population: "+this.currentState.value}},methods:{onStateSelected:function(t){this.currentState=this.statesData[t]},onStateDeselected:function(t){this.currentState=void 0}}}),C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"map"}},[t._m(0),t._v(" "),s("div",{attrs:{id:"holder"}},[s("div",{staticClass:"mapHolder"},[s("us-map",{on:{stateSelected:t.onStateSelected,stateDeselected:t.onStateDeselected}})],1),t._v(" "),t.currentState?s("tooltip",{attrs:{title:t.currentState.Name,description:t.currentStateDescription}}):t._e()],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header-main"},[r("div",{staticClass:"header-logo"},[r("img",{attrs:{src:s("ZURh"),alt:""}}),t._v(" "),r("a",{attrs:{href:"#/"}},[t._v("Fourdollar's World")])]),t._v(" "),r("div",{staticClass:"header-nav"},[r("ul",[r("li",[r("a",{attrs:{href:"#/blogcreate"}},[t._v("Create")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#/map"}},[t._v("Map")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#blog"}},[t._v("Blog")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#smallapp"}},[t._v("Apps")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#about"}},[t._v("About")])])])])])}]};var F=s("VU/8")(b,C,!1,function(t){s("U4dr")},"data-v-6b67ae58",null).exports;r.default.use(n.a);var y=new n.a({routes:[{path:"/",redirect:"/login"},{path:"/",component:function(t){return s.e(1).then(function(){var e=[s("MpTN")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(t){return s.e(10).then(function(){var e=[s("a52u")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"系统首页"}},{path:"/table",component:function(t){return s.e(11).then(function(){var e=[s("8C4o")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"基础表格"}},{path:"/tabs",component:function(t){return s.e(13).then(function(){var e=[s("kgBe")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"tab选项卡"}},{path:"/form",component:function(t){return s.e(14).then(function(){var e=[s("uuQS")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"基本表单"}},{path:"/editor",component:function(t){return s.e(0).then(function(){var e=[s("ENMl")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"富文本编辑器"}},{path:"/markdown",component:function(t){return s.e(4).then(function(){var e=[s("Uhiw")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"markdown编辑器"}},{path:"/upload",component:function(t){return s.e(2).then(function(){var e=[s("9fPc")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"文件上传"}},{path:"/charts",component:function(t){return s.e(5).then(function(){var e=[s("Z1dZ")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"schart图表"}},{path:"/drag",component:function(t){return s.e(3).then(function(){var e=[s("2KuU")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"拖拽列表"}},{path:"/permission",component:function(t){return s.e(8).then(function(){var e=[s("5jj7")];t.apply(null,e)}.bind(this)).catch(s.oe)},meta:{title:"权限测试",permission:!0}}]},{path:"/404",component:function(t){return s.e(9).then(function(){var e=[s("3bH0")];t.apply(null,e)}.bind(this)).catch(s.oe)}},{path:"/403",component:function(t){return s.e(7).then(function(){var e=[s("KfZE")];t.apply(null,e)}.bind(this)).catch(s.oe)}},{path:"*",redirect:"/404"},{path:"/main",component:function(t){return s.e(6).then(function(){var e=[s("s6+2")];t.apply(null,e)}.bind(this)).catch(s.oe)}},{path:"/login",component:d},{path:"/blog",component:function(t){return s.e(12).then(function(){var e=[s("SGec")];t.apply(null,e)}.bind(this)).catch(s.oe)}},{name:"Basic map: html tooltip & events",path:"/map",folder:!0,component:F}]}),S=s("zL8q"),$=s.n(S),P=(s("tvR6"),s("Jmt5"),s("8+8L"));r.default.config.productionTip=!1,r.default.prototype.$axios=l.a,r.default.use(P.a),r.default.use($.a),new r.default({el:"#app",router:y,components:{App:o},template:"<App/>"})},QiZ3:function(t,e){t.exports={name:"tooltip",props:["title","description"]}},Sch1:function(t,e){},U4dr:function(t,e){},YO8j:function(t,e,s){"use strict";var r=s("QiZ3"),a=s.n(r),o=s("qKdz");var n=function(t){s("Sch1")},i=s("VU/8")(a.a,o.a,!1,n,"data-v-7eb3df11",null);e.default=i.exports},ZURh:function(t,e,s){t.exports=s.p+"static/img/favicon.64198f7.png"},qKdz:function(t,e,s){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tooltipPositioner"}},[e("div",{attrs:{id:"tooltip"}},[e("div",{attrs:{id:"tooltipContainer"}},[e("div",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"description"},[this._v(this._s(this.description))])])])])},staticRenderFns:[]};e.a=r},tvR6:function(t,e){},uyBt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.93195e82a1609fbe2e1e.js.map