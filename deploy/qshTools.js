!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),r=a(o),c=n(2),s=a(c),u=n(3),l=i(u),d=n(4),f=a(d),h=n(5),p=a(h),v=n(6),m=a(v),g=n(7),_=a(g),y=n(12),w=a(y),x=n(13),k=a(x),b=n(8),C=a(b),M=n(14),E=a(M),T=n(15),j=a(T),S=n(16),O=a(S),I=n(17),P=a(I),A=n(18),q=a(A),L=n(20),N=a(L),D=n(21),R=a(D),B=n(22),F=a(B),X=n(23),z=a(X),U=n(24),Y=a(U),H=n(25),W=a(H),J=n(27),Q=a(J),V=n(28),Z=a(V),G=n(31),K=a(G),ee=n(19),te=a(ee),ne=n(32),ie=a(ne),ae=n(33),oe=a(ae),re=n(34),ce=n(37),se=a(ce),ue=n(39),le=a(ue),de=n(40),fe=a(de),he=n(49),pe=a(he),ve={};ve=$.extend(ve,l),ve.APP=f["default"],ve.sourceLoad=p["default"],ve.wechat=m["default"],ve.toast=_["default"],ve.ajax=k["default"],ve.queryString=ve.getQueryStringByName=w["default"],ve.compileTpl=C["default"],ve.validEmail=E["default"],ve.validCard=j["default"],ve.validTel=O["default"],ve.validMobile=P["default"],ve.goRegister=q["default"],ve.goLogin=N["default"],ve.back=R["default"],ve.uncertainImage=F["default"],ve.sessionStorage=z["default"],ve.localStorage=Y["default"],ve.absoluteImg=W["default"],ve.resizeImg=Q["default"],ve.alert=Z["default"],ve.footer=K["default"],window.loadingCheck=window.checkLogin=ve.checkLogin=ie["default"],window.loadingCheckStatu=ve.loadingCheckStatu=oe["default"],ve.spinner=re.spinner,ve.spinnerFill=re.spinnerFill,ve.module=se["default"],ve.ajaxLoader=le["default"],ve.header=fe["default"],ve.preHeader=pe["default"],ve.Cookies=r["default"],("boolean"!=typeof qsh_no_fastclick||qsh_no_fastclick!==!0)&&s["default"].attach(document.body),$.fn.lasyload=function(e){this.lazyload($.extend({placeholder:"/images/pro_pic.jpg"},e))},window.qshUtil=window.qshObject=ve,window.qsh_page_urls=te["default"],window.weixin_openid_promise=function(){var e=$.Deferred();if("wechat"===l.shell&&"m.8673h.com"===location.hostname){var t=sessionStorage.getItem("openid");if(t)r["default"].set("openid",t),e.resolve(t);else{var n=w["default"]("code");if(n)+function(){k["default"]("/Action/WxOpenIdServlet.do",{code:n}).then(function(t){var n=t[0].openid;sessionStorage.setItem("openid",n),r["default"].set("openid",n),e.resolve(n)},function(t){e.reject(t)})}();else{var i="wx970b18d04868b6c3",a=location.href,o="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+i+"&redirect_uri="+encodeURIComponent(a)+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect";location.replace(o)}}}else e.resolve(null);return e}(),function(){function e(e,n){var i=parseFloat(n/o)*a;return t(e,i)}function t(e,t){var n=["100x100","150x150","200x200","250x250","300x300","350x350","400x400","450x450","500x500","550x550","600x600","650x650","700x700","800x800"],i=9999,a=0;$.each(n,function(e,n){var o=n.split("x"),r=Math.abs(parseFloat(o[0])-parseFloat(t));i>r&&(i=r,a=e)});var o=e.lastIndexOf("."),r=e.substring(o,e.length);return e.replace(r,"_"+n[parseInt(a)]+r)}function n(e){for(var t=e.split(","),n="",i=1,o=0,r=0;r<t.length;r++){var c=t[r].split("-");n=c[0],i=c[1],768>a&&"xs"==n&&(o=i),a>768&&"sm"==n&&(o=i),a>992&&"md"==n&&(o=i),a>1200&&"lg"==n&&(o=i)}return o}function i(){var t,i,a=new Image;$("img[data-img]").each(function(o,r){t=$(r).attr("data-img");var c=$(r).attr("data-grid");"undefined"!=typeof c&&(0==/^\d+$/.test(c)&&(c=n(c),$(r).attr("data-grid",c)),t=e(t,c)),i=t,""!=t&&(a.complete?$(r).attr("src",i):(a.onload=function(){$(r).attr("src",i),a.onload=null},a.src=i))})}var a=$(document.body).outerWidth(!0),o=12;window.displayImage=i}()},function(e,t,n){var i,a;!function(o){i=o,a="function"==typeof i?i.call(t,n,t,e):i,!(void 0!==a&&(e.exports=a))}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(n){function i(t,a,o){var r;if(arguments.length>1){if(o=e({path:"/"},i.defaults,o),"number"==typeof o.expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*o.expires),o.expires=c}try{r=JSON.stringify(a),/^[\{\[]/.test(r)&&(a=r)}catch(s){}return a=encodeURIComponent(String(a)),a=a.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",a,o.expires&&"; expires="+o.expires.toUTCString(),o.path&&"; path="+o.path,o.domain&&"; domain="+o.domain,o.secure?"; secure":""].join("")}t||(r={});for(var u=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<u.length;d++){var f=u[d].split("="),h=f[0].replace(l,decodeURIComponent),p=f.slice(1).join("=");'"'===p.charAt(0)&&(p=p.slice(1,-1));try{if(p=n&&n(p,h)||p.replace(l,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(s){}if(t===h){r=p;break}t||(r[h]=p)}catch(s){}}return r}return i.get=i.set=i,i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(t,n){i(t,"",e(n,{expires:-1}))},i.withConverter=t,i}return t()})},function(e,t,n){var i;!function(){"use strict";function a(e,t){function n(e,t){return function(){return e.apply(t,arguments)}}var i;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!a.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=o.length;u>s;s++)c[o[s]]=n(c[o[s]],c);r&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var a=Node.prototype.removeEventListener;"click"===t?a.call(e,t,n.hijacked||n,i):a.call(e,t,n,i)},e.addEventListener=function(t,n,i){var a=Node.prototype.addEventListener;"click"===t?a.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):a.call(e,t,n,i)}),"function"==typeof e.onclick&&(i=e.onclick,e.addEventListener("click",function(e){i(e)},!1),e.onclick=null)}}var o=navigator.userAgent.indexOf("Windows Phone")>=0,r=navigator.userAgent.indexOf("Android")>0&&!o,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!o,s=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),l=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(c&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},a.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!r;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},a.prototype.sendClick=function(e,t){var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},a.prototype.determineEventType=function(e){return r&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(e){var t;c&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},a.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},a.prototype.onTouchStart=function(e){var t,n,i;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],c){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!s){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},a.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},a.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(e){var t,n,i,a,o,l=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(o=e.changedTouches[0],l=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=l.tagName.toLowerCase(),"label"===i){if(t=this.findControl(l)){if(this.focus(l),r)return!1;l=t}}else if(this.needsFocus(l))return e.timeStamp-n>100||c&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,e),c&&"select"===i||(this.targetElement=null,e.preventDefault()),!1);return c&&!s&&(a=l.fastClickScrollParent,a&&a.fastClickLastScrollTop!==a.scrollTop)?!0:(this.needsClick(l)||(e.preventDefault(),this.sendClick(l,e)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},a.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},a.prototype.destroy=function(){var e=this.layer;r&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(e){var t,n,i,a;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!r)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(l&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction?!0:!1)},a.attach=function(e,t){return new a(e,t)},i=function(){return a}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=navigator.userAgent,i="common";n.match(/APP8673h/i)?i="qsh":n.match(/MicroMessenger/i)&&(i="wechat");var a=i;t.shell=a;var o=/(iPhone|iPad|iPod|iOS)/i.test(n);t.isIOS=o;var r=!o;t.isAndroid=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=null,o=0;"qsh"===i.shell&&i.isAndroid&&(a={queue:{},callback:function(){var e=Array.prototype.slice.call(arguments,0),t=e.shift(),n=e.shift();this.queue[t].apply(this,e),n||delete this.queue(t)}},a.apply=function(e){var t=Array.prototype.slice.call(arguments,0);if(t.length<1)throw"APP call error, message:miss method name";t.map(function(n,i){var r=typeof n,c=e+o;return"function"===r&&(a.queue[c]=n,t[i]=c),r});o++;var n=JSON.parse(prompt(JSON.stringify({method:t.shift(),args:t})));if(200!=n.code)throw"APP call error, code:"+n.code+", message:"+n.result;return n.result},a.back=function(e){a.apply("History.back",e)},a.toast=function(e){a.apply("Message.toast",e)}),"qsh"===i.shell&&i.isIOS&&(a={},a.back=function(){history.back()},a.alipayOrder=function(e,t){var n=$("<iframe></iframe>");n.attr("src","qsh://alipayOrder:?"+JSON.stringify(e)),n.hide(),n.appendTo(document.body),window.alipayResult=t},a.wxpayOrder=function(e,t){var n=$("<iframe></iframe>");n.attr("src","qsh://wxpayOrder:?"+JSON.stringify(e)),n.hide(),n.appendTo(document.body),window.wxpayResult=t}),t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e){"string"==typeof e&&(e=[e]);var t=e.map(function(e){var t=e.substr(-2,2).toLowerCase();return"js"===t?i(e):a(e)});return $.when.apply($,t)}function i(e){var t=document,n=t.head||t.getElementsByTagName("head")[0]||t.documentElement,i=document.createElement("script");return i.src=e,i.type="text/javascript",i.charset="utf-8",i.async=!0,n.appendChild(i),o(i)}function a(e){var t=document,n=t.head||t.getElementsByTagName("head")[0]||t.documentElement,i=document.createElement("link");return i.rel="stylesheet",i.href=e,n.appendChild(i),o(i)}function o(e){function t(e){e===!0?n.reject():n.resolve()}var n=$.Deferred(),i="onload"in e;return i?(e.onload=t,e.onerror=function(){t(!0)}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&t()},n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(){return"wechat"!==u.shell?+function(){var e=$.Deferred();return e.reject(),e}():c["default"]("http://res.wx.qq.com/open/js/jweixin-1.0.0.js")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(5),c=a(r),s=n(3),u=i(s);e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){0===arguments.length?e="success":1===arguments.length&&-1===h.indexOf(e)&&(t=e,e="warn"),t||(t=p[e]);var n=v[e];if(n)return n.find(".weui_toast_content").text(t),o(e);var i=f[e];return v[e]=$(s["default"](i,{content:t})).appendTo(document.body),o(e)}function o(e){return v[e].show(),"loading"===e?{hide:function(){v[e].hide()}}:(clearTimeout(r),void(r=setTimeout(function(){v[e].hide()},2e3)))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r,c=n(8),s=i(c),u=n(9),l=n(10),d=n(11),f={loading:u,warn:d,success:l},h=["loading","success","warn"],p={loading:"正在加载中...",warn:"提示信息",success:"已完成"},v={};e.exports=t["default"]},function(e,t){"use strict";function n(e,t){for(var n,i=/{{(.*?)}}/g;n=i.exec(e);){var a="undefined"==typeof t[n[1]]?"":t[n[1]];e=e.replace(n[0],a),i.lastIndex-=n[0].length}return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){e.exports='<div class=weui_loading_toast><div class=weui_mask_transparent></div><div class=weui_toast><div class=weui_loading><div class="weui_loading_leaf weui_loading_leaf_0"></div><div class="weui_loading_leaf weui_loading_leaf_1"></div><div class="weui_loading_leaf weui_loading_leaf_2"></div><div class="weui_loading_leaf weui_loading_leaf_3"></div><div class="weui_loading_leaf weui_loading_leaf_4"></div><div class="weui_loading_leaf weui_loading_leaf_5"></div><div class="weui_loading_leaf weui_loading_leaf_6"></div><div class="weui_loading_leaf weui_loading_leaf_7"></div><div class="weui_loading_leaf weui_loading_leaf_8"></div><div class="weui_loading_leaf weui_loading_leaf_9"></div><div class="weui_loading_leaf weui_loading_leaf_10"></div><div class="weui_loading_leaf weui_loading_leaf_11"></div></div><p class=weui_toast_content>{{content}}</p></div></div>'},function(e,t){e.exports="<div><div class=weui_mask_transparent></div><div class=weui_toast><i class=weui_icon_toast></i><p class=weui_toast_content>{{content}}</p></div></div>"},function(e,t){e.exports="<div><div class=weui_mask_transparent></div><div class=weui_toast><i class=qsh_icon_warn></i><p class=weui_toast_content>{{content}}</p></div></div>"},function(e,t){"use strict";function n(e){var t=location.search.match(new RegExp("[?&]"+e+"=([^&]+)","i"));return null==t||t.length<1?"":t[1]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t,n){var i=$.Deferred();return $.ajax({url:e,method:"post",data:t,success:function(e){e&&e.error?"201"==e.error?"undefined"!=typeof e.data?i.resolve(e.data):i.resolve(e):i.reject(e):i.resolve(e)},error:function(e){var t={error:e.status,msg:e.statusText};200==t.error&&(t.msg="服务异常"),i.reject(t)}}),i}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;return t.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){if(""==e)return!1;if(15!=e.length&&18!=e.length)return!1;var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};if(null==t[parseInt(e.substr(0,2))])return!1;if(15==e.length){var n=/^\d{15}$/;if(null==n.exec(e))return!1;var a=parseInt("19"+e.substr(6,2)),o=e.substr(8,2),r=parseInt(e.substr(10,2));switch(o){case"01":case"03":case"05":case"07":case"08":case"10":case"12":if(r>31)return!1;break;case"04":case"06":case"09":case"11":if(r>30)return!1;break;case"02":if(a%4==0&&a%100!=0||a%400==0){if(r>29)return!1}else if(r>28)return!1;break;default:return!1}var c=(new Date).getYear();return c-parseInt(a)<15||c-parseInt(a)>100?!1:!0}var s=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1),u=0,l=0;for(i=0;i<17;++i){if(e.charAt(i)<"0"||e.charAt(i)>"9")return!1;l=e.charAt(i)-"0",u+=l*s[i]}if("X"==e.charAt(17)||"x"==e.charAt(17))u+=10*s[17];else{if(e.charAt(17)<"0"||e.charAt(17)>"9")return!1;u+=(e.charAt(17)-"0")*s[17]}return u%11==1?!0:!1}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=/^((\+?[0-9]{2,4}\-[0-9]{3,4}\-)|([0-9]{3,4}\-))?([0-9]{7,8})(\-[0-9]+)?$/;return t.exec(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=/^1[3,4,5,7,8]\d{9}$/;return t.exec(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){location.replace(r["default"].register+"?url="+encodeURIComponent(location.href))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(19),r=i(o);e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={account:"/m-center/control_info.html",address:"/m-center/address/index.html",bill:"/shopping/confirm_order.jsp",collection:"/m-center/collection.html",category:"/brand/index.html",contact:"/ad/contact-us.html",cart:"/shopping-cart/index.html",confirm_order:"/shopping/order/index.html",detail:"/detail/index.html",error:"/error/abnormal.html",editInfo:"/m-center/userinfo/index.html",home:"/",kefu:"/massage/communicate.jsp",login:"/Login/login/login.html",logistics:"/m-center/logistics/index.html",maintenance:"/maintenance/index.html",message:"/massage/massage.jsp",order_success:"/m-center/order_suc/index.html",pay:"/wx/index.html",register:"/Login/login_pre.html",review:"/shopping/review/index.html",refund:"/m-center/refund/index.html",search:"/search/index.html",safe:"/m-center/save_info.html",uCenter:"/m-center/my_index/index.html",zhuanti:"/list/index.html"},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){location.replace(r["default"].login+"?url="+encodeURIComponent(location.href))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(19),r=i(o);e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){e=e||-1,"qsh"===o.shell&&o.isAndroid?c["default"].back(e):history.back()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(3),r=n(4),c=i(r);e.exports=t["default"]},function(e,t){"use strict";function n(e,t,n){var i=new Image;i.onload=function(){e.src=t},i.onerror=function(){e.src=n},i.src=t,i.complete&&(e.src=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){try{if(!t)return sessionStorage.getItem(e);sessionStorage.setItem(e,t)}catch(n){}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){try{if(!t)return localStorage.getItem(e);localStorage.setItem(e,t)}catch(n){}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){return e.toString(),0===e.indexOf("http")?e:("/"===e[0]&&(e=e.substring(1)),e="images"===e.substr(0,6)?"http://m.8673h.com/"+e:r["default"](e))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(26),r=i(o);e.exports=t["default"]},function(e,t){"use strict";function n(e){return e?"http://img.8673h.com/"+e:"http://m.8673h.com/images/pro_pic.png"}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){t=c["default"](t);var n=/^.*(\..*?)$/g,i=n.exec(t);return t=t.replace(i[1],o(e)+i[1])}function o(e){var t=e*s,n=t%100,i=t-n;return n=n>50?100:50,t=i+n,100>t?t=100:t>700&&(t=800),"_"+t+"x"+t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=n(26),c=i(r),s=window.devicePixelRatio||1;e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){function t(e){return function(){a.remove(),e()}}var n=s;"tip"===e.type&&(n=c);var i=e.title||u[e.type];n=r["default"](n,{title:i,content:e.msg});var a=$(n).appendTo(document.body),o=a.find(".weui_btn_dialog.primary"),d=a.find(".weui_btn_dialog.default"),f=e.ok||function(){$(document.body).trigger($.Event(l.ok))},h=e.cancel||function(){$(document.body).trigger($.Event(l.cancel))};o.click(t(f)),d.click(t(h))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(8),r=i(o),c=n(29),s=n(30),u={warn:"警告",success:"成功",fail:"失败",tip:"提示"},l={ok:"qsh.alert.ok",cancel:"qsh.alert.cancel"};e.exports=t["default"]},function(e,t){e.exports='<div class=weui_dialog_confirm><div class=weui_mask></div><div class=weui_dialog><div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div><div class=weui_dialog_bd>{{content}}</div><div class=weui_dialog_ft><a href=javascript:; class="weui_btn_dialog default">取消</a> <a href=javascript:; class="weui_btn_dialog primary">确定</a></div></div></div>'},function(e,t){e.exports='<div class=weui_dialog_alert><div class=weui_mask></div><div class=weui_dialog><div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div><div class=weui_dialog_bd>{{content}}</div><div class=weui_dialog_ft><a href=javascript:; class="weui_btn_dialog primary">确定</a></div></div></div>'},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){e=e||{};var t=e.items||l,n=t.map(function(t){var n=u[t];return n.classes=e.current===t?"current-foot":"",s["default"](d,n)});n=n.join("");var i,a={content:n};e.fixed===!1?(a.position="relative",i=$(e.mount)):(a.position="fixed",i=$(document.body)),i.append(s["default"](f,a));var o=$(".qsh-footer").find(".qsh-footer-item");o.click(function(){var e=$(this);e.hasClass("current-foot")||(location.href=e.data("href"))})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(19),r=i(o),c=n(8),s=i(c),u={index:{text:"首页",href:r["default"].home,icon:"baojifuben2"},uCenter:{text:"我的企商",href:r["default"].uCenter,icon:"yonghu"},baoyang:{text:"我要保养",href:r["default"].maintenance,icon:"woyaobaoyang2"},contact:{text:"联系我们",href:r["default"].contact,icon:"lianxi"}},l=["index","baoyang","contact","uCenter"],d='<div class="qsh-footer-item {{classes}}" data-href="{{href}}"><i class="iconfont icon-{{icon}}"></i> <div>{{text}}</div></div>',f='<div class="qsh-footer" style="position: {{position}}">{{content}}</div>';t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=window.location.href;e=encodeURIComponent(e),$.ajax({type:"post",url:"/Action/LoginDetectionAction.do",dataType:"json",async:!1,success:function(t){var n=t.statu,i={type:"warn"};switch(parseInt(n)){case 0:return;case 1:i.msg="请先登录",i.ok=function(){location.replace(r["default"].login+"?url="+e)};break;case 2:i.msg="请务非法修改系统cookie操作",i.ok=function(){location.replace(r["default"].login+"?url="+e)};break;case 3:i.msg="请确认是否本人登录",i.ok=function(){location.replace(r["default"].login+"?url="+e)};break;case 4:i.msg="系统繁忙，请刷新重试",i.ok=function(){location.replace(r["default"].login+"?url="+e)};break;case 5:location.replace(r["default"].error);break;case 99:i.msg="请确认您的用户名是否已注册或通过审核",i.ok=function(){location.replace(r["default"].register)}}i.msg&&("qsh"===c.shell?u["default"].toast(i.msg):d["default"](i.msg),i.ok())},error:function(){location.replace(r["default"].login+"?url="+e)}})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(19),r=i(o),c=n(3),s=n(4),u=i(s),l=n(7),d=i(l);t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=location.href;t=encodeURIComponent(t),$.ajax({type:"post",url:"/Action/LoginDetectionAction.do",dataType:"json",success:function(t){var n=t.statu;e(0==n?!0:!1)},error:function(){e(!1)}})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e){var t=$(s).appendTo(e);return t}}function o(e){if(e){var t=$(c["default"](u,{spinner:s})).appendTo(e);return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.spinner=a,t.spinnerFill=o;var r=n(8),c=i(r),s=n(35),u=n(36)},function(e,t){e.exports='<div class="weui_loading qsh_loading"><div class="weui_loading_leaf weui_loading_leaf_0"></div><div class="weui_loading_leaf weui_loading_leaf_1"></div><div class="weui_loading_leaf weui_loading_leaf_2"></div><div class="weui_loading_leaf weui_loading_leaf_3"></div><div class="weui_loading_leaf weui_loading_leaf_4"></div><div class="weui_loading_leaf weui_loading_leaf_5"></div><div class="weui_loading_leaf weui_loading_leaf_6"></div><div class="weui_loading_leaf weui_loading_leaf_7"></div><div class="weui_loading_leaf weui_loading_leaf_8"></div><div class="weui_loading_leaf weui_loading_leaf_9"></div><div class="weui_loading_leaf weui_loading_leaf_10"></div><div class="weui_loading_leaf weui_loading_leaf_11"></div></div>'},function(e,t){e.exports="<div class=qsh_spinner_wrapper>{{spinner}}</div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){e.mount=$(e.mount);var t=o.spinnerFill(e.mount);c["default"](e.url,e.data,e.format).then(function(n){t.remove(),e.success&&e.success(n)},function(n){t.remove(),e.mount.append(u["default"](l,n))})}Object.defineProperty(t,"__esModule",{value:!0});var o=n(34),r=n(13),c=i(r),s=n(8),u=i(s),l=n(38);t["default"]=a,e.exports=t["default"]},function(e,t){e.exports="<div class=qsh_module_error>{{msg}}</div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,i){var a=$.Deferred();return r["default"]({url:e,data:t,mount:n,method:"post",format:i,success:function(e){a.resolve(e)}}),a}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(37),r=i(o);e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return h["default"](),!1}function r(e){return new b(e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(19),u=i(s),l=n(8),d=i(l),f=n(21),h=i(f),p=n(41),v=n(42),m=n(43),g=n(44),_=n(45),y=n(46),w=n(47),x=n(48),k={xiaoxi:{name:"消息",icon:"xiaoxiHead",handler:function(){location.href=u["default"].message}},zhuye:{name:"主页",icon:"baojifuben2",handler:function(){location.href=u["default"].home}},huiyuan:{name:"我的企商",icon:"huiyuan",handler:function(){location.href=u["default"].uCenter}},lianxi:{name:"联系我们",icon:"lianxi",handler:function(){location.href=u["default"].contact}},gouwuche:{name:"购物车",icon:"gouwuche2",handler:function(){location.href=u["default"].cart}},back:{name:"返回",icon:"",handler:function(){return o()}},address:{name:"收货地址",icon:"shouhuodizhi",handler:function(){location.href=u["default"].address}},account:{name:"账户管理",icon:"sfsiconyidongduanwodezhanghu",handler:function(){location.href=u["default"].account}},info:{name:"修改资料",icon:"ziliao",handler:function(){location.href=u["default"].editInfo}},safe:{name:"账户安全",icon:"anquanbaozhang",handler:function(){location.href=u["default"].safe}},manager:{icon:"shezhi",items:["address","info","safe"]}},b=function(){function e(t){if(a(this,e),this.options=t,2===t.type){if(!t.mount)return void alert("头部参数缺失mount");var n=$(t.mount);this.container=$(d["default"](p,t)).appendTo(n),n.css("height","45px")}else this.container=$(d["default"](p,t)).appendTo($(t.mount)||document.body);
t.fixed===!1&&this.container.css({position:"relative"}),this.left_dom=this.container.find(".head_left"),this.right_dom=this.container.find(".head_right"),this.dom_map={},this.initLeft(),this.initRight()}return c(e,[{key:"append",value:function(e){this.addItem(this.right_dom,e)}},{key:"prepend",value:function(e){this.addItem(this.right_dom,e,!0)}},{key:"remove",value:function(e){var t=this.dom_map[e];t&&(t.data("menu")&&t.data("menu").remove(),t.remove())}},{key:"active",value:function(e,t){var n=this.dom_map[e];n&&(t?n.hasClass("qsh-head-menu-item")?this.addMenuActive(n):this.addIconActive(n):n.hasClass("qsh-head-menu-item")?this.rmMenuActive(n):this.rmIconActive(n))}},{key:"addIconActive",value:function(e){0===e.find(".icon_active").length&&e.append(x)}},{key:"rmIconActive",value:function(e){e.find(".icon_active").remove()}},{key:"addMenuActive",value:function(e){0===e.find(".icon-active-wrapper").length&&(e.append(w),e.trigger("head-menu-active-change"))}},{key:"rmMenuActive",value:function(e){e.find(".icon-active-wrapper").remove(),e.trigger("head-menu-active-change")}},{key:"initLeft",value:function(){var e=this,t=this.options.leftItems||["back"],n=!1;t.forEach(function(t){"string"==typeof t?"back"===t?(e.appendBack(k.back),n=!0):k[t]&&e.addItem(e.left_dom,k[t]):"back"===t.icon?(e.appendBack(t),n=!0):e.addItem(e.left_dom,t)}),n||this.options.noBack||this.appendBack(k.back)}},{key:"initRight",value:function(){var e=this,t=this.options.rightItems;t&&t.forEach(function(t){"string"==typeof t&&k[t]?(e.addItem(e.right_dom,k[t]),"xiaoxi"===t&&e.loadXiaoxi()):e.addItem(e.right_dom,t)})}},{key:"addItem",value:function(e,t,n){var i,a="appendTo";n&&(a="prependTo");var o=t.id||t.text||t.icon;t.text?i=$(d["default"](g,t))[a](e):t.icon&&(i=$(d["default"](m,t))[a](e)),t.items?this.appendMenu(i,t.items):i.on("click",function(e){t.handler(e)}),this.dom_map[o]=i}},{key:"appendMenu",value:function(e,t){var n=this,i=$(_).appendTo(this.container);e.data("menu",i);var a=i.find(".tkuang");this.container.on("head-menu-active-change",function(t){0===a.find(".icon-active-wrapper").length?n.rmIconActive(e):n.addIconActive(e)}),e.click(function(e){i.show(),setTimeout(function(){i.find(".qsh-head-menu").css({opacity:1})},10)}),i.on("click",function(){setTimeout(function(){i.find(".qsh-head-menu").css({opacity:0}),i.hide()},10)}),t.forEach(function(e){var t,i=e;"string"==typeof e&&k[e]?(i=k[e],t=$(d["default"](y,i)).appendTo(a),"xiaoxi"===e&&n.loadXiaoxi()):t=$(d["default"](y,e)).appendTo(a),t.on("click",function(e){i.handler(e)});var o=i.id||i.text||i.icon;n.dom_map[o]=t})}},{key:"appendBack",value:function(e){var t=$(v).prependTo(this.left_dom);t.on("click",function(t){e.handler(t)!==!1&&o()}),this.dom_map.back=t}},{key:"loadXiaoxi",value:function(){var e=this;setInterval(function(t){var n=e.dom_map.xiaoxiHead;if(n){var i="menu";n.hasClass("head-icon")&&(i="icon"),$.ajax({url:"/Action/readMsgAction.do",data:{type:2},method:"post"}).then(function(t){parseInt(t.count)>0?"menu"===i?e.addMenuActive(n):e.addIconActive(n):"menu"===i?e.rmMenuActive(n):e.rmIconActive(n)},function(e){})}},5e3)}}]),e}();t["default"]=r,e.exports=t["default"]},function(e,t){e.exports='<div class="head custom"><div class=head-name>{{name}}</div><div class=head-table><div class=head_left></div><div class=head_title>{{html}}</div><div class=head_right></div></div></div>'},function(e,t){e.exports='<span class="head_icon head_back"><i class="iconfont icon-lighter-zuo"></i></span>'},function(e,t){e.exports='<span class=head_icon><i class="iconfont icon-{{icon}}"></i></span>'},function(e,t){e.exports="<span class=head_icon>{{text}}</span>"},function(e,t){e.exports="<div class=head-menu-wrapper><div class=qsh-head-menu><span class=qsh-head-arrow></span><ul class=tkuang></ul></div></div>"},function(e,t){e.exports='<li class=qsh-head-menu-item><i class="iconfont icon-{{icon}} shi_18"></i>{{name}}</li>'},function(e,t){e.exports="<div class=icon-active-wrapper><div class=icon_active></div></div>"},function(e,t){e.exports="<div class=icon_active></div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(19),o=i(a),r=n(40),c=i(r),s='<div class="head-search"><div class="head-search-input-wrapper"><i class="iconfont icon-headsousuo"></i><input placeholder="输入您要搜索的商品" name="search_key"> </div> <div class="head-search-bottom"></div> </div>',u={list:function(e){c["default"]({mount:e,html:s,style:"custom",rightItems:[{icon:"gengduodiandian",hasActive:!0,items:["xiaoxi","zhuye"]}]}),$(e).delegate(".head-search","click",function(){location.href=o["default"].search}),$(e).delegate("input","focus",function(e){e.preventDefault(),$(this).blur()})},index:function(e){c["default"]({mount:e,html:s,style:"custom",leftItems:["noback",{name:"消息",icon:"xiaoxiHead",handler:function(){}}],rightItems:[{icon:"gengduodiandian",hasActive:!0,items:["xiaoxi","zhuye"]}]})}};t["default"]=function(e,t){u[e](t)},e.exports=t["default"]}]);