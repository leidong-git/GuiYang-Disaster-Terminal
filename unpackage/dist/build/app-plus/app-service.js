(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0788":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("scroll-view",{staticClass:t._$s(1,"sc","nav_cont"),attrs:{"scroll-into-view":t._$s(1,"a-scroll-into-view","top"+t.nav_index),_i:1}},t._l(t._$s(2,"f",{forItems:t.nav_list}),(function(e,n,r,s){return i("view",{key:t._$s(2,"f",{forIndex:r,key:n}),staticClass:t._$s("2-"+s,"sc","nav_item"),attrs:{id:t._$s("2-"+s,"a-id","top"+n),_i:"2-"+s},on:{click:function(e){return t.Nav_click(n)}}},[i("text",{class:t._$s("3-"+s,"c",t.nav_index==n?"f_active_color ":"f_color"),attrs:{_i:"3-"+s}},[t._v(t._$s("3-"+s,"t0-0",t._s(e.name)))])])})),0)])},r=[]},"08b0":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLaunch:function(){plus.screen.lockOrientation("landscape-primary"),plus.navigator.setFullscreen(!0)},onShow:function(){var t=uni.requireNativePlugin("lich-PowerOnAutoStart");t.isIgnoringBatteryOptimizations((function(e){e?t.canDrawOverlays((function(e){e||t.toastMakeText("\u8bf7\u5141\u60ac\u6d6e\u7a97\u5f39\u51fa"),t.setCanDrawOverlays()})):(t.toastMakeText("\u8bf7\u5ffd\u7565\u7535\u6e90\u7ba1\u7406\u9009\u9879"),t.setIgnoringBatteryOptimizations())}))},onHide:function(){t("log","App Hide"," at App.vue:29")}};e.default=i}).call(this,i("0de9")["default"])},"0de9":function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function s(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];console[t].apply(console,i)}function o(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,s)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),c="";if(o.length>1){var u=o.pop();c=o.join("---COMMA---"),0===u.indexOf(" at ")?c+=u:c+="---COMMA---"+u}else c=o[0];console[a](c)}i.r(e),i.d(e,"log",(function(){return a})),i.d(e,"default",(function(){return o}))},1609:function(t,e,i){"use strict";i.r(e);var n=i("e96b"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"172a":function(t,e,i){"use strict";i.r(e);var n=i("bd54"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"1f85":function(t,e,i){"use strict";i.r(e);var n=i("6694"),r=i("6a60");for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"68435cbf",null,!1,n["a"],void 0);e["default"]=o.exports},"345c":function(t,e,i){"use strict";i.r(e);var n=i("bd59"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},3654:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{staticClass:this._$s(0,"sc","swiper"),attrs:{_i:0}},[e("swiper-item",[e("view",{staticClass:this._$s(2,"sc","swiper-item"),attrs:{_i:2}},[e("image",{staticClass:this._$s(3,"sc","swiper_img"),attrs:{_i:3}})])]),e("swiper-item",[e("view",{staticClass:this._$s(5,"sc","swiper-item"),attrs:{_i:5}},[e("image",{staticClass:this._$s(6,"sc","swiper_img"),attrs:{_i:6}})])])])},r=[]},"38ff":function(t,e,i){"use strict";i.r(e);var n=i("faa7"),r=i("9ac7");for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"155d9894",null,!1,n["a"],void 0);e["default"]=o.exports},4e3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{nav_index:{type:Number},nav_list:{type:Array}},data:function(){return{}},methods:{Nav_click:function(t){this.$emit("change_navindex",t)}}};e.default=n},"4abf":function(t,e,i){"use strict";i.r(e);var n=i("0788"),r=i("681d");for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"0325daaf",null,!1,n["a"],void 0);e["default"]=o.exports},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},5673:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("7c35"),r={data:function(){return{loginForm:{LoginName:"",Password:"",VerifyCode:""},loginFormRules:{LoginName:[{required:!0,message:"\u8bf7\u8f93\u5165\u767b\u5f55\u540d\u79f0",trigger:"blur"},{min:6,max:25,message:"\u957f\u5ea6\u5728 6 \u5230 25 \u4e2a\u5b57\u7b26",trigger:"blur"}],Password:[{required:!0,message:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801",trigger:"blur"},{min:6,max:25,message:"\u957f\u5ea6\u5728 6 \u5230 25 \u4e2a\u5b57\u7b26",trigger:"blur"}]}}},onReady:function(){this.mcaptcha=new n.Mcaptcha({el:"canvas",width:80,height:35,createCodeImg:""})},methods:{UpdateImageCode:function(){this.mcaptcha.refresh()},Login:function(){var t=this;if(this.Verify("name")&&this.Verify("pwd")){if(!this.loginInfo.v_code)return uni.showToast({title:"\u8bf7\u8f93\u5165\u56fe\u5f62\u9a8c\u8bc1\u7801"});var e=this.mcaptcha.validate(this.loginInfo.v_code);if(!e)return uni.showToast({title:"\u56fe\u5f62\u9a8c\u8bc1\u7801\u9519\u8bef"});uni.showLoading({title:"\u767b\u5f55\u4e2d",icon:"success"}),setTimeout((function(){return"admin"!=t.loginInfo.name?uni.showToast({title:"\u767b\u5f55\u5931\u8d25\uff0c\u7528\u6237\u540d\u9519\u8bef\uff01"}):"123456"!=t.loginInfo.pwd?uni.showToast({title:"\u767b\u5f55\u5931\u8d25\uff0c\u5bc6\u7801\u9519\u8bef\u9519\u8bef\uff01"}):(t.loginInfo.token="token=savasjviahvhasvhaivhaisvhaisvhaisvhas",t.loginInfo.icon="1.jpg",t.$store.commit("Login",t.loginInfo),uni.showToast({title:"\u767b\u5f55\u6210\u529f\uff01"}),void uni.navigateBack({delta:1}))}),2e3)}},Verify:function(t){var e=!0;return this.rules[t].rule.test(this.loginInfo[t])?e:(uni.showToast({title:this.rules[t].msg}),e=!1,!1)}}};e.default=r},5775:function(t,e,i){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/login/login",(function(){return Vue.extend(i("1f85").default)})),__definePage("pages/index/index",(function(){return Vue.extend(i("b9f6").default)}))},"5bc3":function(t,e,i){var n=i("a395");function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,n(r.key),r)}}t.exports=function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports["default"]=t.exports},"5f09":function(t,e,i){"use strict";i.r(e);var n=i("08b0"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"62fe":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[i("NavigationIndex",{attrs:{nav_list:t.NavList,nav_index:t.NavIndex,_i:1},on:{change_navindex:t.Change_navindex}}),i("swiper",{style:t._$s(2,"s","height:"+t.swiper_height),attrs:{current:t._$s(2,"a-current",t.NavIndex),_i:2},on:{change:t.TabChange}},t._l(t._$s(3,"f",{forItems:t.NavList}),(function(e,n,r,s){return i("swiper-item",{key:t._$s(3,"f",{forIndex:r,key:n})},[t._$s("4-"+s,"i",0==n)?i("scroll-view",{style:t._$s("4-"+s,"s","height:"+t.swiper_height),attrs:{_i:"4-"+s}},[i("IndexSwiper",{attrs:{_i:"5-"+s}}),i("Recommended",{attrs:{_i:"6-"+s}}),i("view",{staticClass:t._$s("7-"+s,"sc","card_list"),attrs:{_i:"7-"+s}},[i("view",{staticClass:t._$s("8-"+s,"sc","card_title"),attrs:{_i:"8-"+s}}),i("CommodityList",{attrs:{commodity_data:t.commodity_data,_i:"9-"+s}})],1),i("view",{staticClass:t._$s("10-"+s,"sc","card_list"),attrs:{_i:"10-"+s}},[i("view",{staticClass:t._$s("11-"+s,"sc","card_title"),attrs:{_i:"11-"+s}}),i("CommodityList",{attrs:{commodity_data:t.commodity_data,_i:"12-"+s}})],1)],1):t._e(),t._$s("13-"+s,"i",0!=n)?i("scroll-view",{style:t._$s("13-"+s,"s","height:"+t.swiper_height),attrs:{_i:"13-"+s}},[i("view",{staticClass:t._$s("14-"+s,"sc","card_banner"),attrs:{_i:"14-"+s}},[i("image",{staticClass:t._$s("15-"+s,"sc","card_banner_img"),attrs:{_i:"15-"+s}})]),i("view",{staticClass:t._$s("16-"+s,"sc","card_list"),attrs:{_i:"16-"+s}},[i("view",{staticClass:t._$s("17-"+s,"sc","card_title"),attrs:{_i:"17-"+s}}),i("CommodityList",{attrs:{commodity_data:t.commodity_data,itemW:"250rpx",itemH:"250rpx",_i:"18-"+s}})],1),i("view",{staticClass:t._$s("19-"+s,"sc","card_list"),attrs:{_i:"19-"+s}},[i("view",{staticClass:t._$s("20-"+s,"sc","card_title"),attrs:{_i:"20-"+s}}),i("view",{staticClass:t._$s("21-"+s,"sc","card_banner"),attrs:{_i:"21-"+s}},[i("image",{staticClass:t._$s("22-"+s,"sc","card_banner_img"),attrs:{_i:"22-"+s}})]),i("scroll-view",{},[i("CommodityList",{attrs:{commodity_data:t.commodity_data,itemW:"250rpx",itemH:"250rpx",wrap:"no-wrap",_i:"24-"+s}})],1)]),i("view",{staticClass:t._$s("25-"+s,"sc","card_list"),attrs:{_i:"25-"+s}},[i("view",{staticClass:t._$s("26-"+s,"sc","card_title"),attrs:{_i:"26-"+s}}),i("view",{staticClass:t._$s("27-"+s,"sc","card_banner"),attrs:{_i:"27-"+s}},[i("image",{staticClass:t._$s("28-"+s,"sc","card_banner_img"),attrs:{_i:"28-"+s}})]),i("scroll-view",{},[i("CommodityList",{attrs:{commodity_data:t.commodity_data,itemW:"250rpx",itemH:"250rpx",wrap:"nowrap",_i:"30-"+s}})],1)])]):t._e()])})),0)],1)},r=[]},6694:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:t._$s(0,"sc","login_container"),style:t._$s(0,"s",t.bag),attrs:{_i:0}},[n("div",{staticClass:t._$s(1,"sc","logo_center"),attrs:{_i:1}},[n("div",{staticClass:t._$s(2,"sc","center_left"),attrs:{_i:2}},[n("img",{staticClass:t._$s(3,"sc","login_name"),attrs:{src:t._$s(3,"a-src",i(!function(){var t=new Error("Cannot find module '@/static/image/logo_bg1.jpg'");throw t.code="MODULE_NOT_FOUND",t}())),_i:3}})]),n("el-form",{ref:"loginFormRef",staticClass:t._$s(4,"sc","center_right"),attrs:{model:t.loginForm,rules:t.loginFormRules,_i:4}},[n("img",{staticClass:t._$s(5,"sc","right_title"),attrs:{src:t._$s(5,"a-src",i(!function(){var t=new Error("Cannot find module '@static/images/login/logo_name.png'");throw t.code="MODULE_NOT_FOUND",t}())),_i:5}}),n("el-form-item",{attrs:{prop:"LoginName",_i:6}},[n("el-input",{attrs:{"prefix-icon":"iconfont icon-zhanghao",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",_i:7},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginIn()}},model:{value:t._$s(7,"v-model",t.loginForm.LoginName),callback:function(e){t.$set(t.loginForm,"LoginName",e)},expression:"loginForm.LoginName"}})],1),n("el-form-item",{attrs:{prop:"Password",_i:8}},[n("el-input",{attrs:{type:"password","prefix-icon":"iconfont icon-ziyuanxhdpi",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",_i:9},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginIn()}},model:{value:t._$s(9,"v-model",t.loginForm.Password),callback:function(e){t.$set(t.loginForm,"Password",e)},expression:"loginForm.Password"}})],1),n("div",{staticClass:t._$s(10,"sc","Verification-code-box"),attrs:{_i:10}},[n("el-input",{attrs:{autofocus:!0,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801","prefix-icon":"iconfont icon-yanzhengma",_i:11},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginIn()}},model:{value:t._$s(11,"v-model",t.loginInfo.VerifyCode),callback:function(e){t.$set(t.loginInfo,"VerifyCode","string"===typeof e?e.trim():e)},expression:"loginInfo.VerifyCode"}}),n("view",{staticClass:t._$s(12,"sc","code-img-wrapper"),attrs:{_i:12},on:{click:t.UpdateImageCode}},[n("canvas",{})])],1),n("el-form-item",{staticClass:t._$s(14,"sc","right_jz"),attrs:{_i:14}},[n("el-button",{staticClass:t._$s(15,"sc","jz_an"),attrs:{_i:15},on:{click:function(e){return t.Login()}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Login()}}},[t._v("")])],1)],1)],1),n("div",{staticClass:t._$s(16,"sc","logo_bottom"),attrs:{_i:16}},[n("span")])])},r=[]},"681d":function(t,e,i){"use strict";i.r(e);var n=i("4000"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"6a60":function(t,e,i){"use strict";i.r(e);var n=i("5673"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},7037:function(t,e){function i(e){return t.exports=i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,i(e)}t.exports=i,t.exports.__esModule=!0,t.exports["default"]=t.exports},7319:function(t,e,i){"use strict";var n=i("4ea4"),r=n(i("9523")),s=n(i("7037"));i("5775");var a=n(i("f6ba")),o=n(i("8bbf"));function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}o.default.config.productionTip=!1,a.default.mpType="app";try{uni.addInterceptor({returnValue:function(t){return function(t){return!!t&&("object"===(0,s.default)(t)||"function"===typeof t)&&"function"===typeof t.then}(t)?new Promise((function(e,i){t.then((function(t){t[0]?i(t[0]):e(t[1])}))})):t}})}catch(l){}var u=new o.default(function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){(0,r.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},a.default));u.$mount()},"7c35":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.Mcaptcha=void 0;var r=n(i("970b")),s=n(i("5bc3")),a=function(){function e(t){(0,r.default)(this,e),this.options=t,this.fontSize=3*t.height/2,this.init(),this.refresh()}return(0,s.default)(e,[{key:"init",value:function(){this.ctx=uni.createCanvasContext(this.options.el),this.ctx.setTextBaseline("middle"),this.ctx.setFillStyle(this.randomColor(180,240))}},{key:"refresh",value:function(){for(var t=this,e="",i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9],n=0;n<4;n++)e+=i[this.randomNum(0,i.length)];this.options.createCodeImg=e;var r=(e+"").split("");0===r.length&&(r=["e","r","r","o","r"]);var s=.6*this.options.width/(r.length-1),a=.2*this.options.width;r.forEach((function(e,i){t.ctx.setFillStyle(t.randomColor(0,180));var n=t.randomNum(24,t.fontSize);t.ctx.setFontSize(n);var r=s*i+a-.3*n,o=t.randomNum(-30,30);t.ctx.translate(r,.5*t.options.height),t.ctx.rotate(o*Math.PI/180),t.ctx.fillText(e,0,0),t.ctx.rotate(-o*Math.PI/180),t.ctx.translate(-r,.5*-t.options.height)}));for(n=0;n<4;n++)this.ctx.strokeStyle=this.randomColor(40,180),this.ctx.beginPath(),this.ctx.moveTo(this.randomNum(0,this.options.width),this.randomNum(0,this.options.height)),this.ctx.lineTo(this.randomNum(0,this.options.width),this.randomNum(0,this.options.height)),this.ctx.stroke();for(n=0;n<this.options.width/4;n++)this.ctx.fillStyle=this.randomColor(0,255),this.ctx.beginPath(),this.ctx.arc(this.randomNum(0,this.options.width),this.randomNum(0,this.options.height),1,0,2*Math.PI),this.ctx.fill();this.ctx.draw()}},{key:"validate",value:function(e){e=e.toLowerCase();var i=this.options.createCodeImg.toLowerCase();return t("log",e," at static/javascript/mcaptcha.js:62"),t("log",i.substring(i.length-4)," at static/javascript/mcaptcha.js:63"),e==i.substring(i.length-4)}},{key:"randomNum",value:function(t,e){return Math.floor(Math.random()*(e-t)+t)}},{key:"randomColor",value:function(t,e){var i=this.randomNum(t,e),n=this.randomNum(t,e),r=this.randomNum(t,e);return"rgb("+i+","+n+","+r+")"}}]),e}();e.Mcaptcha=a}).call(this,i("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,i){var n=i("a395");t.exports=function(t,e,i){return e=n(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},"970b":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports["default"]=t.exports},"9ac7":function(t,e,i){"use strict";i.r(e);var n=i("aa96"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"9b78":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:t._$s(0,"sc","commodity_cont"),style:t._$s(0,"s","flex-wrap:"+t.wrap),attrs:{_i:0}},t._l(t._$s(1,"f",{forItems:t.commodity_data}),(function(e,n,r,s){return i("view",{key:t._$s(1,"f",{forIndex:r,key:n}),staticClass:t._$s("1-"+s,"sc","commodity_list"),style:t._$s("1-"+s,"s","width:"+t.itemW),attrs:{_i:"1-"+s}},[i("image",{staticClass:t._$s("2-"+s,"sc","commodity_img"),style:t._$s("2-"+s,"s","height:"+t.itemH),attrs:{src:t._$s("2-"+s,"a-src","../../static/image/"+e.img),_i:"2-"+s}}),i("view",{staticClass:t._$s("3-"+s,"sc","commodity_detail"),attrs:{_i:"3-"+s}},[i("view",{staticClass:t._$s("4-"+s,"sc","detail"),attrs:{_i:"4-"+s}},[t._v(t._$s("4-"+s,"t0-0",t._s(e.detail)))]),i("view",{staticClass:t._$s("5-"+s,"sc","price"),attrs:{_i:"5-"+s}},[i("view",[t._v(t._$s("6-"+s,"t0-0",t._s(e.price)))]),i("view",{staticClass:t._$s("7-"+s,"sc","old_price"),attrs:{_i:"7-"+s}},[t._v(t._$s("7-"+s,"t0-0",t._s(e.old_price)))])]),i("i",{staticClass:t._$s("8-"+s,"sc","discount"),attrs:{_i:"8-"+s}},[t._v(t._$s("8-"+s,"t0-0",t._s(e.discount)))])])])})),0)},r=[]},a395:function(t,e,i){var n=i("7037")["default"],r=i("e50d");t.exports=function(t){var e=r(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},aa96:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"Recommended",data:function(){return{}}}},b9f6:function(t,e,i){"use strict";i.r(e);var n=i("62fe"),r=i("1609");for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=o.exports},bd54:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{commodity_data:Array,itemW:{type:String,default:"375rpx"},itemH:{type:String,default:"375rpx"},wrap:{type:String,default:"wrap"}},data:function(){return{}},methods:{}};e.default=n},bd59:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}},methods:{}}},d248:function(t,e,i){"use strict";i.r(e);var n=i("3654"),r=i("345c");for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"99f85ecc",null,!1,n["a"],void 0);e["default"]=o.exports},df40:function(t,e,i){"use strict";i.r(e);var n=i("9b78"),r=i("172a");for(var s in r)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var a=i("f0c5"),o=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"5a831ef5",null,!1,n["a"],void 0);e["default"]=o.exports},e50d:function(t,e,i){var n=i("7037")["default"];t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},e96b:function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("4abf")),s=n(i("d248")),a=n(i("38ff")),o=n(i("df40")),c={data:function(){return{title:"\u9996\u9875",commodity_data:[{img:"1.jpg",detail:"\u65b0\u534e\u793e\u5317\u4eac2\u67089\u65e5\u7535 \u9898:\u65b0\u65f6\u4ee3\u5341\u5e74\u4f1f\u5927\u53d8\u9769\u5960\u5b9a\u575a\u5b9e\u57fa\u7840\u2014\u2014\u65b0\u5f81\u7a0b\u4e0a\u6ee1\u6000\u4fe1\u5fc3\u5f00\u65b0\u5c40\u5c55\u65b0\u8c8c\u7cfb\u5217\u8ff0\u8bc4\u4e4b\u56db \u65b0\u534e\u793e\u8bb0\u8005\u8c2d\u8c1f\u6653\u3001\u59da\u5747\u82b3\u3001\u5218\u7fbd\u4f73 \u5386\u7ecf\u65b0\u65f6\u4ee3\u5341\u5e74\u4f1f\u5927\u53d8\u9769\u7684\u4e2d\u56fd,\u7ad9...",price:"152.5",old_price:"254.3",discount:"5.5"},{img:"2.jpg",detail:"\u6ee1\u6000\u4fe1\u5fc3\u8e0f\u4e0a\u65b0\u5f81\u7a0b \u9614\u6b65\u5411\u524d\u7eed\u5199\u65b0\u7bc7\u7ae0 \u4e2d\u56fd\u5171\u4ea7\u515a\u7b2c\u4e8c\u5341\u6b21\u5168\u56fd\u4ee3\u8868\u5927\u4f1a\u5df2\u7ecf\u53ec\u5f00,\u5927\u4f1a\u62a5\u544a\u8ba9\u7ea2\u8c37\u6ee9\u533a\u5404\u754c\u5e72\u90e8\u7fa4\u4f17\u6ee1\u6000\u4fe1\u5fc3,\u81ea\u4fe1\u3001\u559c\u60a6\u548c\u8c6a\u8fc8\u4e4b\u60c5\u6ea2\u4e8e\u8a00\u8868\u3002\u5927\u5bb6\u7545\u6240\u6b32\u8a00,\u7eb7...",price:"352.5",old_price:"654.3",discount:"5.5"},{img:"3.jpg",detail:"\u515a\u7684\u4e8c\u5341\u5927\u4e3e\u65d7\u5b9a\u5411\u3001\u7ee7\u5f80\u5f00\u6765\u3001\u6307\u8def\u9886\u822a,\u63d0\u51fa\u4e86\u65b0\u5f81\u7a0b\u4e2d\u5fc3\u4efb\u52a1\u3002\u65b0\u7684\u8d76\u8003\u8def\u4e0a,\u6211\u4eec\u8981\u6ee1\u6000\u4fe1\u5fc3\u3001\u8e14\u5389\u594b\u53d1,\u575a\u5b9a\u4e0d\u79fb\u63a8\u8fdb\u9ad8\u8d28\u91cf\u8de8\u8d8a\u53d1\u5c55,\u4ee5\u5b9e\u5e72\u5b9e\u7ee9\u8c31\u5199\u73b0\u4ee3\u5316...",price:"152.5",old_price:"204.3",discount:"9.5"},{img:"1.jpg",detail:"\u524d\uff0c\u591a\u4f4d\u6d77\u5916\u4fa8\u80de\u5728\u63a5\u53d7\u4e2d\u592e\u5e7f\u64ad\u7535\u89c6\u603b\u53f0\u534e\u8bed\u73af\u7403\u5e7f\u64ad\u8bb0\u8005\u91c7\u8bbf\u65f6\u8868\u793a\uff0c\u5bf9\u4e2d\u56fd\u5f0f\u73b0\u4ee3\u5316\u65b0\u5f81\u7a0b\u5145\u6ee1\u4fe1\u5fc3\uff0c\u5c06\u7ee7\u7eed\u79c9\u6301\u60c5\u7cfb\u6851\u6893\u7684\u5bb6\u56fd\u60c5\u6000\u62e5\u62b1\u65b0\u673a\u9047\uff0c\u53d1\u6325\u878d\u901a...",price:"162.5",old_price:"354.3",discount:"6.5"},{img:"3.jpg",detail:"\u515a\u7684\u4e8c\u5341\u5927\u4e3e\u65d7\u5b9a\u5411\u3001\u7ee7\u5f80\u5f00\u6765\u3001\u6307\u8def\u9886\u822a,\u63d0\u51fa\u4e86\u65b0\u5f81\u7a0b\u4e2d\u5fc3\u4efb\u52a1\u3002\u65b0\u7684\u8d76\u8003\u8def\u4e0a,\u6211\u4eec\u8981\u6ee1\u6000\u4fe1\u5fc3\u3001\u8e14\u5389\u594b\u53d1,\u575a\u5b9a\u4e0d\u79fb\u63a8\u8fdb\u9ad8\u8d28\u91cf\u8de8\u8d8a\u53d1\u5c55,\u4ee5\u5b9e\u5e72\u5b9e\u7ee9\u8c31\u5199\u73b0\u4ee3\u5316...",price:"152.5",old_price:"204.3",discount:"9.5"},{img:"1.jpg",detail:"\u524d\uff0c\u591a\u4f4d\u6d77\u5916\u4fa8\u80de\u5728\u63a5\u53d7\u4e2d\u592e\u5e7f\u64ad\u7535\u89c6\u603b\u53f0\u534e\u8bed\u73af\u7403\u5e7f\u64ad\u8bb0\u8005\u91c7\u8bbf\u65f6\u8868\u793a\uff0c\u5bf9\u4e2d\u56fd\u5f0f\u73b0\u4ee3\u5316\u65b0\u5f81\u7a0b\u5145\u6ee1\u4fe1\u5fc3\uff0c\u5c06\u7ee7\u7eed\u79c9\u6301\u60c5\u7cfb\u6851\u6893\u7684\u5bb6\u56fd\u60c5\u6000\u62e5\u62b1\u65b0\u673a\u9047\uff0c\u53d1\u6325\u878d\u901a...",price:"162.5",old_price:"354.3",discount:"6.5"}],NavIndex:0,NavList:[{name:"\u63a8\u8350"},{name:"\u8fd0\u52a8\u6237\u5916"},{name:"\u670d\u9970\u5185\u8863"},{name:"\u978b\u9774\u7bb1\u5305"},{name:"\u7f8e\u5986\u4e2a\u62a4"},{name:"\u5bb6\u5c45\u6570\u7801"},{name:"\u98df\u54c1\u6bcd\u5a74"}],swiper_height:"800rpx"}},components:{IndexSwiper:s.default,Recommended:a.default,CommodityList:o.default,NavigationIndex:r.default},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.swiper_height=e.windowHeight-uni.upx2px(90)-t.Get_type_height()+"px"}})},onReady:function(){},methods:{Change_navindex:function(e){t("log",e," at pages/index/index.vue:172"),this.NavIndex=e},TabChange:function(t){this.NavIndex=t.detail.current},Get_type_height:function(){var t=0,e=uni.getSystemInfoSync().uniPlatform;return t="web"===e?uni.upx2px(190):"app"===e?uni.upx2px(90):"mp-weixin"===e?uni.upx2px(115):0,t},Search:function(){uni.navigateTo({url:"/pages/search/search"})}}};e.default=c}).call(this,i("0de9")["default"])},f0c5:function(t,e,i){"use strict";function n(t,e,i,n,r,s,a,o,c,u){var l,f="function"===typeof t?t.options:t;if(c){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var _ in c)d.call(c,_)&&!d.call(f.components,_)&&(f.components[_]=c[_])}if(u&&("function"===typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=i,f._compiled=!0),n&&(f.functional=!0),s&&(f._scopeId="data-v-"+s),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):r&&(l=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(f.functional){f._injectStyles=l;var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:f}}i.d(e,"a",(function(){return n}))},f6ba:function(t,e,i){"use strict";i.r(e);var n=i("5f09");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var s=i("f0c5"),a=Object(s["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=a.exports},faa7:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:t._$s(0,"sc","recommended bg_color"),attrs:{_i:0}},[i("view",{staticClass:t._$s(1,"sc","recommended-item"),attrs:{_i:1}},[i("image",{staticClass:t._$s(2,"sc","recommended_bigimg"),attrs:{_i:2}}),i("view",{staticClass:t._$s(3,"sc","recommended_list"),attrs:{_i:3}},[i("image",{staticClass:t._$s(4,"sc","list_img"),attrs:{_i:4}}),i("image",{staticClass:t._$s(5,"sc","list_img"),attrs:{_i:5}}),i("image",{staticClass:t._$s(6,"sc","list_img"),attrs:{_i:6}})])]),i("view",{staticClass:t._$s(7,"sc","recommended-item"),attrs:{_i:7}},[i("image",{staticClass:t._$s(8,"sc","recommended_bigimg"),attrs:{_i:8}}),i("view",{staticClass:t._$s(9,"sc","recommended_list"),attrs:{_i:9}},[i("image",{staticClass:t._$s(10,"sc","list_img"),attrs:{_i:10}}),i("image",{staticClass:t._$s(11,"sc","list_img"),attrs:{_i:11}}),i("image",{staticClass:t._$s(12,"sc","list_img"),attrs:{_i:12}})])])])},r=[]}},[["7319","app-config"]]]);