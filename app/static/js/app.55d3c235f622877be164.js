webpackJsonp([11],{112:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},16:function(e,t,n){"use strict";function a(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new r.a(function(n,a){var i=new XMLHttpRequest;i.open("GET",e,!0),i.onreadystatechange=function(){200===i.status&&4===i.readyState&&(console.log(i.responseText),1===JSON.parse(i.responseText).status?n(i.responseText):a(i.responseText))},i.send(t)})}function i(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new r.a(function(n,a){var i=new XMLHttpRequest;i.open("POST",e,!0),i.onreadystatechange=function(){200===i.status&&4===i.readyState&&(1===JSON.parse(i.responseText).status?n(i.responseText):a(i.responseText))},i.send(t)})}t.a=a,t.b=i;var o=n(76),r=n.n(o),u=n(28);n.n(u),n(27)},17:function(e,t,n){"use strict";var a={uploadFile:"/stushare/index.php?/api/material/upload",register:"/stushare/index.php?/api/user/register",login:"/stushare/index.php?/api/user/login",getUser:"/stushare/index.php?/api/user/get_user",getFileList:"/stushare/index.php?/api/material/show",getCurrentFile:"/stushare/index.php?/api/material/get_detail_by_id",downloadFile:"/stushare/index.php?/api/material/download"};for(var i in a)a[i]="http://120.77.86.119"+a[i];t.a=a},27:function(e,t,n){"use strict";var a=n(15),i=n(29),o=n(74);n(16),n(17);a.default.use(i.a);var r=new i.a({mode:"history",routes:o.a,linkActiveClass:"active",scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});r.beforeEach(function(e,t,n){"/"===t.fullPath&&"/"!==e.fullPath&&"/register"!==e.fullPath&&-1===document.cookie.indexOf("user_name")?(n("/"),alert("请登录")):n()}),t.a=r},50:function(e,t){},51:function(e,t,n){var a=n(53)(n(75),n(112),null,null,null);e.exports=a.exports},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){n.d(t,"store",function(){return v});var a=n(15),i=n(51),o=n.n(i),r=n(27),u=n(29),l=n(16),s=n(17),p=n(49),c=n.n(p),h=n(52),d=n(28),f=n.n(d),m=n(50);n.n(m);a.default.prototype.$http=c.a,e.requestApi=s.a,e.doGetGeneral=l.a,e.doPostWithObjectParams=l.b,a.default.use(u.a),a.default.use(h.a),a.default.config.debug=!0,a.default.use(f.a),new a.default({el:"#app",router:r.a,template:"<App/>",render:function(e){return e(o.a)},store:v});var v=new h.a.Store({state:{fileId:""},mutations:{changeCurrentFileId:function(e,t){e.fileId=t.fileId}}})}.call(t,n(18))},74:function(e,t,n){"use strict";var a=[{path:"/",component:function(e){return n.e(0).then(function(){var t=[n(56)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/login",name:"login",title:"系统登录",component:function(e){return n.e(0).then(function(){var t=[n(56)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/register",name:"register",title:"系统注册",component:function(e){return n.e(5).then(function(){var t=[n(122)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/shell",name:"shell",title:"汕大学习资料分享系统",component:function(e){return n.e(2).then(function(){var t=[n(123)];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"main",name:"main",title:"首页",component:function(e){return n.e(1).then(function(){var t=[n(120)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"personalData",name:"personalData",title:"个人资料",component:function(e){return n.e(3).then(function(){var t=[n(121)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"IWantLearning",name:"IWantLearning",title:"我要学习",component:function(e){return n.e(4).then(function(){var t=[n(116)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"upload",name:"upload",title:"上传页面",component:function(e){return n.e(6).then(function(){var t=[n(124)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"download",name:"download",title:"下载页面",component:function(e){return n.e(9).then(function(){var t=[n(117)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"fileDetail",name:"fileDetail",title:"文件页面",component:function(e){return n.e(7).then(function(){var t=[n(119)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"403",name:"403",meta:{title:"无权限访问",nav:!1},component:function(e){return n.e(8).then(function(){var t=[n(118)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}];t.a=a},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",mounted:function(){}}}},[54]);
//# sourceMappingURL=app.55d3c235f622877be164.js.map