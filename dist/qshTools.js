/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jsCookie = __webpack_require__(1);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var _fastclick = __webpack_require__(2);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _supportDeviceJs = __webpack_require__(3);

	var device = _interopRequireWildcard(_supportDeviceJs);

	var _supportAPPJs = __webpack_require__(4);

	var _supportAPPJs2 = _interopRequireDefault(_supportAPPJs);

	var _utilSourceLoadJs = __webpack_require__(5);

	var _utilSourceLoadJs2 = _interopRequireDefault(_utilSourceLoadJs);

	var _wechatWechatJs = __webpack_require__(6);

	var _wechatWechatJs2 = _interopRequireDefault(_wechatWechatJs);

	var _toastToastJs = __webpack_require__(7);

	var _toastToastJs2 = _interopRequireDefault(_toastToastJs);

	var _utilQueryStringJs = __webpack_require__(12);

	var _utilQueryStringJs2 = _interopRequireDefault(_utilQueryStringJs);

	var _ajaxAjaxJs = __webpack_require__(13);

	var _ajaxAjaxJs2 = _interopRequireDefault(_ajaxAjaxJs);

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var _utilValidEmailJs = __webpack_require__(14);

	var _utilValidEmailJs2 = _interopRequireDefault(_utilValidEmailJs);

	var _utilValidCardJs = __webpack_require__(15);

	var _utilValidCardJs2 = _interopRequireDefault(_utilValidCardJs);

	var _utilValidTelJs = __webpack_require__(16);

	var _utilValidTelJs2 = _interopRequireDefault(_utilValidTelJs);

	var _utilValidMobileJs = __webpack_require__(17);

	var _utilValidMobileJs2 = _interopRequireDefault(_utilValidMobileJs);

	var _utilGoRegisterJs = __webpack_require__(18);

	var _utilGoRegisterJs2 = _interopRequireDefault(_utilGoRegisterJs);

	var _utilGoLoginJs = __webpack_require__(20);

	var _utilGoLoginJs2 = _interopRequireDefault(_utilGoLoginJs);

	var _utilBackJs = __webpack_require__(21);

	var _utilBackJs2 = _interopRequireDefault(_utilBackJs);

	var _utilUncertainImageJs = __webpack_require__(22);

	var _utilUncertainImageJs2 = _interopRequireDefault(_utilUncertainImageJs);

	var _utilSessionStorageJs = __webpack_require__(23);

	var _utilSessionStorageJs2 = _interopRequireDefault(_utilSessionStorageJs);

	var _utilLocalStorageJs = __webpack_require__(24);

	var _utilLocalStorageJs2 = _interopRequireDefault(_utilLocalStorageJs);

	var _utilAbsoluteImgJs = __webpack_require__(25);

	var _utilAbsoluteImgJs2 = _interopRequireDefault(_utilAbsoluteImgJs);

	var _utilResizeImgJs = __webpack_require__(27);

	var _utilResizeImgJs2 = _interopRequireDefault(_utilResizeImgJs);

	var _alertAlertJs = __webpack_require__(28);

	var _alertAlertJs2 = _interopRequireDefault(_alertAlertJs);

	var _footerJsFooterJs = __webpack_require__(31);

	var _footerJsFooterJs2 = _interopRequireDefault(_footerJsFooterJs);

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	var _utilCheckLoginJs = __webpack_require__(32);

	var _utilCheckLoginJs2 = _interopRequireDefault(_utilCheckLoginJs);

	var _utilLoginStatusJs = __webpack_require__(33);

	var _utilLoginStatusJs2 = _interopRequireDefault(_utilLoginStatusJs);

	var _spinnerSpinnerJs = __webpack_require__(34);

	var _moduleModuleJs = __webpack_require__(37);

	var _moduleModuleJs2 = _interopRequireDefault(_moduleModuleJs);

	var _utilAjaxLoaderJs = __webpack_require__(39);

	var _utilAjaxLoaderJs2 = _interopRequireDefault(_utilAjaxLoaderJs);

	var _headerWjsHeadJs = __webpack_require__(40);

	var _headerWjsHeadJs2 = _interopRequireDefault(_headerWjsHeadJs);

	var _headerJsPreHeadJs = __webpack_require__(49);

	var _headerJsPreHeadJs2 = _interopRequireDefault(_headerJsPreHeadJs);

	var qshObject = {};

	qshObject = $.extend(qshObject, device);
	qshObject.APP = _supportAPPJs2['default'];
	qshObject.sourceLoad = _utilSourceLoadJs2['default'];
	qshObject.wechat = _wechatWechatJs2['default'];
	qshObject.toast = _toastToastJs2['default'];
	qshObject.ajax = _ajaxAjaxJs2['default'];
	qshObject.queryString = qshObject.getQueryStringByName = _utilQueryStringJs2['default'];
	qshObject.compileTpl = _utilCompileTplJs2['default'];
	qshObject.validEmail = _utilValidEmailJs2['default'];
	qshObject.validCard = _utilValidCardJs2['default'];
	qshObject.validTel = _utilValidTelJs2['default'];
	qshObject.validMobile = _utilValidMobileJs2['default'];
	qshObject.goRegister = _utilGoRegisterJs2['default'];
	qshObject.goLogin = _utilGoLoginJs2['default'];
	qshObject.back = _utilBackJs2['default'];
	qshObject.uncertainImage = _utilUncertainImageJs2['default'];
	qshObject.sessionStorage = _utilSessionStorageJs2['default'];
	qshObject.localStorage = _utilLocalStorageJs2['default'];
	qshObject.absoluteImg = _utilAbsoluteImgJs2['default'];
	qshObject.resizeImg = _utilResizeImgJs2['default'];
	qshObject.alert = _alertAlertJs2['default'];
	qshObject.footer = _footerJsFooterJs2['default'];
	window.loadingCheck = window.checkLogin = qshObject.checkLogin = _utilCheckLoginJs2['default'];
	window.loadingCheckStatu = qshObject.loadingCheckStatu = _utilLoginStatusJs2['default'];
	qshObject.spinner = _spinnerSpinnerJs.spinner;
	qshObject.spinnerFill = _spinnerSpinnerJs.spinnerFill;
	qshObject.module = _moduleModuleJs2['default'];
	qshObject.ajaxLoader = _utilAjaxLoaderJs2['default'];
	qshObject.header = _headerWjsHeadJs2['default'];
	qshObject.preHeader = _headerJsPreHeadJs2['default'];
	qshObject.Cookies = _jsCookie2['default'];

	if (!(typeof qsh_no_fastclick === 'boolean' && qsh_no_fastclick === true)) {
	    _fastclick2['default'].attach(document.body);
	}

	$.fn.lasyload = function (option) {
	    this.lazyload($.extend({
	        placeholder: '/images/pro_pic.jpg'
	    }, option));
	};

	window.qshUtil = window.qshObject = qshObject;

	window.qsh_page_urls = _assetUrlsJs2['default'];

	window.weixin_openid_promise = (function () {
	    var dtd = $.Deferred();

	    if (device.shell === 'wechat' && location.hostname === 'm.8673h.com') {
	        var openid = sessionStorage.getItem('openid');
	        if (openid) {
	            _jsCookie2['default'].set('openid', openid);
	            dtd.resolve(openid);
	        } else {
	            var code = (0, _utilQueryStringJs2['default'])('code');
	            if (!code) {
	                var wechat_appid = 'wx970b18d04868b6c3';
	                var url = location.href;

	                var wechat_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + wechat_appid + '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=snsapi_base&state=123#wechat_redirect';

	                location.replace(wechat_url);
	            } else {
	                +(function () {
	                    (0, _ajaxAjaxJs2['default'])('/Action/WxOpenIdServlet.do', {
	                        code: code
	                    }).then(function (data) {
	                        var openid = data[0].openid;
	                        sessionStorage.setItem('openid', openid);
	                        _jsCookie2['default'].set('openid', openid);
	                        dtd.resolve(openid);
	                    }, function (err) {
	                        dtd.reject(err);
	                    });
	                })();
	            }
	        }
	    } else {
	        dtd.resolve(null);
	    }

	    return dtd;
	})();

	(function () {
	    //项目域名
	    var MOBILE_DOMIAN = "http://m.8673h.com/";
	    //默认产品图
	    var GOOD_DEFAULT = "/images/pro_pic.png";
	    //默认用户图
	    var USER_DEFAULT = "/images/tuzi.png";
	    //图片服务器域名
	    var IMG_DOMIAN = "http://img.8673h.com/";

	    var screenWidth = $(document.body).outerWidth(true);
	    var grids = 12;
	    /*$(document).ready(function () {
	     displayImage();
	     var imgArr = $("img");
	     $.each(imgArr, function(n, value) {
	     var scale = $(value).attr("data-grid");
	     if(typeof scale!="undefined"){
	     var picName = $(value).attr("data-img");
	     value.src = getNewName(picName,scale)
	     }
	     });
	     });*/

	    /**
	     *
	     * @param oldName
	     * @param scale  所占的格数
	     * @returns {*}
	     */
	    function getNewName(oldName, scale) {
	        var newWidth = parseFloat(scale / grids) * screenWidth;

	        return patchSize(oldName, newWidth);
	    }

	    function patchSize(oldName, newWidth) {
	        var size = ["100x100", "150x150", "200x200", "250x250", "300x300", "350x350", "400x400", "450x450", "500x500", "550x550", "600x600", "650x650", "700x700", "800x800"];
	        var differ = 9999;
	        var index = 0;
	        $.each(size, function (n, value) {
	            var newArr = value.split("x");
	            var val = Math.abs(parseFloat(newArr[0]) - parseFloat(newWidth));
	            if (val < differ) {
	                differ = val;
	                index = n;
	            }
	        });
	        var pos = oldName.lastIndexOf(".");
	        var ext = oldName.substring(pos, oldName.length);
	        return oldName.replace(ext, "_" + size[parseInt(index)] + ext);
	    }

	    function setgrid(para) {
	        var arr = para.split(",");
	        var str = "";
	        var num = 1;
	        var grid = 0;
	        for (var i = 0; i < arr.length; i++) {
	            var paras = arr[i].split("-");
	            str = paras[0];
	            num = paras[1];
	            if (screenWidth < 768 && str == "xs") {
	                grid = num;
	            }
	            if (screenWidth > 768 && str == "sm") {
	                grid = num;
	            }
	            if (screenWidth > 992 && str == "md") {
	                grid = num;
	            }
	            if (screenWidth > 1200 && str == "lg") {
	                grid = num;
	            }
	        }
	        return grid;
	    }

	    function displayImage() {
	        var group;
	        var imgUrl;
	        var img = new Image();
	        $("img[data-img]").each(function (index, elem) {
	            group = $(elem).attr("data-img");
	            var scale = $(elem).attr("data-grid");
	            if (typeof scale != "undefined") {
	                if (/^\d+$/.test(scale) == false) {
	                    //可变参数则先去计算grid
	                    scale = setgrid(scale);
	                    $(elem).attr("data-grid", scale);
	                }
	                group = getNewName(group, scale);
	            }
	            imgUrl = group;
	            if (group != "") {
	                if (img.complete) {
	                    $(elem).attr("src", imgUrl);
	                } else {
	                    img.onload = function () {
	                        $(elem).attr("src", imgUrl);
	                        img.onload = null;
	                    };
	                    img.src = imgUrl;
	                }
	            }
	        });
	    }

	    window.displayImage = displayImage;
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.0.4
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	'use strict';

	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			var _OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = _OldCookies;
				return api;
			};
		}
	})(function () {
		function extend() {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[i];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init(converter) {
			function api(key, value, attributes) {
				var result;

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					value = encodeURIComponent(String(value));
					value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					return document.cookie = [key, '=', value, attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path && '; path=' + attributes.path, attributes.domain && '; domain=' + attributes.domain, attributes.secure ? '; secure' : ''].join('');
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var name = parts[0].replace(rdecode, decodeURIComponent);
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.get = api.set = api;
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init();
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	;(function () {
		'use strict';

		/**
	  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	  *
	  * @codingstandard ftlabs-jsv2
	  * @copyright The Financial Times Limited [All Rights Reserved]
	  * @license MIT License (see LICENSE.txt)
	  */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/

		/**
	  * Instantiate fast-clicking listeners on the specified layer.
	  *
	  * @constructor
	  * @param {Element} layer The layer to listen on
	  * @param {Object} [options={}] The options to override the defaults
	  */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
	   * Whether a click is currently being tracked.
	   *
	   * @type boolean
	   */
			this.trackingClick = false;

			/**
	   * Timestamp for when click tracking started.
	   *
	   * @type number
	   */
			this.trackingClickStart = 0;

			/**
	   * The element being tracked for a click.
	   *
	   * @type EventTarget
	   */
			this.targetElement = null;

			/**
	   * X-coordinate of touch start event.
	   *
	   * @type number
	   */
			this.touchStartX = 0;

			/**
	   * Y-coordinate of touch start event.
	   *
	   * @type number
	   */
			this.touchStartY = 0;

			/**
	   * ID of the last touch, retrieved from Touch.identifier.
	   *
	   * @type number
	   */
			this.lastTouchIdentifier = 0;

			/**
	   * Touchmove boundary, beyond which a click will be cancelled.
	   *
	   * @type number
	   */
			this.touchBoundary = options.touchBoundary || 10;

			/**
	   * The FastClick layer.
	   *
	   * @type Element
	   */
			this.layer = layer;

			/**
	   * The minimum time between tap(touchstart and touchend) events
	   *
	   * @type number
	   */
			this.tapDelay = options.tapDelay || 200;

			/**
	   * The maximum time for a tap
	   *
	   * @type number
	   */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function () {
					return method.apply(context, arguments);
				};
			}

			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function (type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function (type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function (event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
	 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	 *
	 * @type boolean
	 */
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
	  * Android requires exceptions.
	  *
	  * @type boolean
	  */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

		/**
	  * iOS requires exceptions.
	  *
	  * @type boolean
	  */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

		/**
	  * iOS 4 requires an exception for select elements.
	  *
	  * @type boolean
	  */
		var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

		/**
	  * iOS 6.0-7.* requires the target element to be manually derived
	  *
	  * @type boolean
	  */
		var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

		/**
	  * BlackBerry requires exceptions.
	  *
	  * @type boolean
	  */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
	  * Determine whether a given element requires a native click.
	  *
	  * @param {EventTarget|Element} target Target DOM element
	  * @returns {boolean} Returns true if the element needs a native click
	  */
		FastClick.prototype.needsClick = function (target) {
			switch (target.nodeName.toLowerCase()) {

				// Don't send a synthetic click to disabled inputs (issue #62)
				case 'button':
				case 'select':
				case 'textarea':
					if (target.disabled) {
						return true;
					}

					break;
				case 'input':

					// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
					if (deviceIsIOS && target.type === 'file' || target.disabled) {
						return true;
					}

					break;
				case 'label':
				case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
				case 'video':
					return true;
			}

			return (/\bneedsclick\b/.test(target.className)
			);
		};

		/**
	  * Determine whether a given element requires a call to focus to simulate click into element.
	  *
	  * @param {EventTarget|Element} target Target DOM element
	  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	  */
		FastClick.prototype.needsFocus = function (target) {
			switch (target.nodeName.toLowerCase()) {
				case 'textarea':
					return true;
				case 'select':
					return !deviceIsAndroid;
				case 'input':
					switch (target.type) {
						case 'button':
						case 'checkbox':
						case 'file':
						case 'image':
						case 'radio':
						case 'submit':
							return false;
					}

					// No point in attempting to focus disabled inputs
					return !target.disabled && !target.readOnly;
				default:
					return (/\bneedsfocus\b/.test(target.className)
					);
			}
		};

		/**
	  * Send a click event to the specified element.
	  *
	  * @param {EventTarget|Element} targetElement
	  * @param {Event} event
	  */
		FastClick.prototype.sendClick = function (targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function (targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};

		/**
	  * @param {EventTarget|Element} targetElement
	  */
		FastClick.prototype.focus = function (targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};

		/**
	  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	  *
	  * @param {EventTarget|Element} targetElement
	  */
		FastClick.prototype.updateScrollParent = function (targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};

		/**
	  * @param {EventTarget} targetElement
	  * @returns {Element|EventTarget}
	  */
		FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};

		/**
	  * On touch start, record the position and scroll offset.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onTouchStart = function (event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if (event.timeStamp - this.lastClickTime < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};

		/**
	  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.touchHasMoved = function (event) {
			var touch = event.changedTouches[0],
			    boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};

		/**
	  * Update the last position.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onTouchMove = function (event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};

		/**
	  * Attempt to find the labelled control for the given label element.
	  *
	  * @param {EventTarget|HTMLLabelElement} labelElement
	  * @returns {Element|null}
	  */
		FastClick.prototype.findControl = function (labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};

		/**
	  * On touch end, determine whether to send a click event at once.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onTouchEnd = function (event) {
			var forElement,
			    trackingClickStart,
			    targetTagName,
			    scrollParent,
			    touch,
			    targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if (event.timeStamp - this.lastClickTime < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};

		/**
	  * On touch cancel, stop tracking the click.
	  *
	  * @returns {void}
	  */
		FastClick.prototype.onTouchCancel = function () {
			this.trackingClick = false;
			this.targetElement = null;
		};

		/**
	  * Determine mouse events which should be permitted.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onMouse = function (event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};

		/**
	  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	  * an actual click which should be permitted.
	  *
	  * @param {Event} event
	  * @returns {boolean}
	  */
		FastClick.prototype.onClick = function (event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};

		/**
	  * Remove all FastClick's event listeners.
	  *
	  * @returns {void}
	  */
		FastClick.prototype.destroy = function () {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};

		/**
	  * Check whether FastClick is needed.
	  *
	  * @param {Element} layer The layer to listen on
	  */
		FastClick.notNeeded = function (layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

					// Chrome desktop doesn't need FastClick (issue #15)
				} else {
						return true;
					}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};

		/**
	  * Factory method for creating a FastClick object
	  *
	  * @param {Element} layer The layer to listen on
	  * @param {Object} [options={}] The options to override the defaults
	  */
		FastClick.attach = function (layer, options) {
			return new FastClick(layer, options);
		};

		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var ua = navigator.userAgent;

	var s = 'common';
	if (ua.match(/APP8673h/i)) {
	    s = 'qsh';
	} else if (ua.match(/MicroMessenger/i)) {
	    s = 'wechat';
	}

	var shell = s;

	exports.shell = shell;
	var isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua);

	exports.isIOS = isIOS;
	var isAndroid = !isIOS;
	exports.isAndroid = isAndroid;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _deviceJs = __webpack_require__(3);

	var app = null;
	var increase = 0;

	if (_deviceJs.shell === 'qsh' && _deviceJs.isAndroid) {
	    app = {
	        queue: {}, //方法与回调映射
	        callback: function callback() {
	            var data = Array.prototype.slice.call(arguments, 0);
	            var method = data.shift(); //回调方法名
	            var times = data.shift(); //是否会回调多次，长任务可能需要回调多次返回状态
	            this.queue[method].apply(this, data);
	            if (!times) {
	                delete this.queue(method);
	            }
	        }
	    };

	    //调用通用方法，第一个参数会方法名
	    app.apply = function (method) {
	        var data = Array.prototype.slice.call(arguments, 0);
	        if (data.length < 1) {
	            throw "APP call error, message:miss method name"; //需要方法名
	        }

	        var types = data.map(function (param, index) {
	            var type = typeof param;
	            var fake_name = method + increase; //回调的假名

	            if ('function' === type) {
	                app.queue[fake_name] = param;
	                data[index] = fake_name;
	            }

	            return type;
	        });

	        increase++;

	        var result = JSON.parse(prompt(JSON.stringify({ method: data.shift(), args: data })));
	        if (result.code != 200) {
	            throw "APP call error, code:" + result.code + ", message:" + result.result;
	        }
	        return result.result;
	    };

	    //返回的示例
	    app.back = function (num) {
	        app.apply('History.back', num);
	    };

	    app.toast = function (msg) {
	        app.apply('Message.toast', msg);
	    };
	}

	if (_deviceJs.shell === 'qsh' && _deviceJs.isIOS) {
	    app = {};
	    app.back = function () {
	        history.back();
	    };

	    /**
	    * order_id: Date.now() + '123',
	    * goods_name: '测试商品',
	    * goods_description: '测试商品描述',
	    * amounts: '0.01'
	    **/
	    app.alipayOrder = function (obj, cb) {
	        var iframe = $('<iframe></iframe>');
	        iframe.attr('src', 'qsh://alipayOrder:?' + JSON.stringify(obj));
	        iframe.hide();
	        iframe.appendTo(document.body);

	        window.alipayResult = cb;
	    };

	    app.wxpayOrder = function (obj, cb) {
	        var iframe = $('<iframe></iframe>');
	        iframe.attr('src', 'qsh://wxpayOrder:?' + JSON.stringify(obj));
	        iframe.hide();
	        iframe.appendTo(document.body);

	        window.wxpayResult = cb;
	    };
	}

	exports['default'] = app;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = load;

	function load(links) {
	    if (typeof links === 'string') {
	        links = [links];
	    }

	    var promises = links.map(function (link) {
	        var last = link.substr(-2, 2).toLowerCase();
	        return last === 'js' ? loadScript(link) : loadStyle(link);
	    });

	    return $.when.apply($, promises);
	}

	function loadScript(link) {
	    var doc = document;
	    var head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
	    var script = document.createElement('script');
	    script.src = link;
	    script.type = 'text/javascript';
	    script.charset = 'utf-8';
	    script.async = true;
	    head.appendChild(script);
	    return supportLoad(script);
	}

	function loadStyle(url) {
	    var doc = document;
	    var head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
	    var link = document.createElement("link");
	    link.rel = "stylesheet";
	    link.href = url;
	    head.appendChild(link);
	    return supportLoad(link);
	}

	function supportLoad(node) {
	    var dtd = $.Deferred();

	    function onload(status) {
	        status === true ? dtd.reject() : dtd.resolve();
	    }

	    var supportOnload = ("onload" in node);

	    if (supportOnload) {
	        node.onload = onload;
	        node.onerror = function () {
	            onload(true);
	        };
	    } else {
	        node.onreadystatechange = function () {
	            if (/loaded|complete/.test(node.readyState)) {
	                onload();
	            }
	        };
	    }

	    return dtd;
	}
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = wechat;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilSourceLoadJs = __webpack_require__(5);

	var _utilSourceLoadJs2 = _interopRequireDefault(_utilSourceLoadJs);

	var _supportDeviceJs = __webpack_require__(3);

	var device = _interopRequireWildcard(_supportDeviceJs);

	function wechat() {
	    if (device.shell !== 'wechat') {
	        return +(function () {
	            var dtd = $.Deferred();
	            dtd.reject();
	            return dtd;
	        })();
	    } else {
	        return (0, _utilSourceLoadJs2['default'])('http://res.wx.qq.com/open/js/jweixin-1.0.0.js');
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = toast;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var loading_tpl = __webpack_require__(9);
	var common_tpl = __webpack_require__(10);
	var warn_tpl = __webpack_require__(11);

	var tpl_map = {
	    loading: loading_tpl,
	    warn: warn_tpl,
	    success: common_tpl
	};

	var types = ['loading', 'success', 'warn'];
	var defaultContent = {
	    'loading': '正在加载中...',
	    'warn': '提示信息',
	    'success': '已完成'
	};

	var toast_mount_map = {};
	var timer;

	function toast(type, content) {
	    if (arguments.length === 0) {
	        type = 'success';
	    } else if (arguments.length === 1) {
	        if (types.indexOf(type) === -1) {
	            content = type;
	            type = 'warn';
	        }
	    }

	    if (!content) {
	        content = defaultContent[type];
	    }

	    var toast_mount = toast_mount_map[type];

	    if (toast_mount) {
	        toast_mount.find('.weui_toast_content').text(content);
	        return autoHideToast(type);
	    } else {
	        var tpl = tpl_map[type];
	        toast_mount_map[type] = $((0, _utilCompileTplJs2['default'])(tpl, {
	            content: content
	        })).appendTo(document.body);
	        return autoHideToast(type);
	    }
	}

	function autoHideToast(type) {
	    toast_mount_map[type].show();
	    if (type === 'loading') {
	        return {
	            hide: function hide() {
	                toast_mount_map[type].hide();
	            }
	        };
	    } else {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	            toast_mount_map[type].hide();
	        }, 2000);
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/*import {filterXSS} from "../../../bower_components/xss/lib/xss.js";*/

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = compileTpl;

	function compileTpl(str, obj) {
	    var reg = /{{(.*?)}}/g;
	    var result;
	    while (result = reg.exec(str)) {
	        var value = typeof obj[result[1]] === 'undefined' ? '' : obj[result[1]];
	        /*if(notrust){
	            value = filterXSS(value)
	        }*/
	        str = str.replace(result[0], value);
	        reg.lastIndex -= result[0].length;
	    }
	    return str;
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=weui_loading_toast><div class=weui_mask_transparent></div><div class=weui_toast><div class=weui_loading><div class=\"weui_loading_leaf weui_loading_leaf_0\"></div><div class=\"weui_loading_leaf weui_loading_leaf_1\"></div><div class=\"weui_loading_leaf weui_loading_leaf_2\"></div><div class=\"weui_loading_leaf weui_loading_leaf_3\"></div><div class=\"weui_loading_leaf weui_loading_leaf_4\"></div><div class=\"weui_loading_leaf weui_loading_leaf_5\"></div><div class=\"weui_loading_leaf weui_loading_leaf_6\"></div><div class=\"weui_loading_leaf weui_loading_leaf_7\"></div><div class=\"weui_loading_leaf weui_loading_leaf_8\"></div><div class=\"weui_loading_leaf weui_loading_leaf_9\"></div><div class=\"weui_loading_leaf weui_loading_leaf_10\"></div><div class=\"weui_loading_leaf weui_loading_leaf_11\"></div></div><p class=weui_toast_content>{{content}}</p></div></div>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div><div class=weui_mask_transparent></div><div class=weui_toast><i class=weui_icon_toast></i><p class=weui_toast_content>{{content}}</p></div></div>";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div><div class=weui_mask_transparent></div><div class=weui_toast><i class=qsh_icon_warn></i><p class=weui_toast_content>{{content}}</p></div></div>";

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getQueryStringByName;

	function getQueryStringByName(name) {
	    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	    if (result == null || result.length < 1) {
	        return "";
	    }
	    return result[1];
	}

	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ajax;

	function ajax(url, data, format) {
	    var dtd = $.Deferred();
	    $.ajax({
	        url: url,
	        method: 'post',
	        data: data,
	        success: function success(data) {
	            if (data) {
	                if (data.error) {
	                    if (data.error == '201') {
	                        if (typeof data.data !== 'undefined') {
	                            dtd.resolve(data.data);
	                        } else {
	                            dtd.resolve(data);
	                        }
	                    } else {
	                        dtd.reject(data);
	                    }
	                } else {
	                    dtd.resolve(data);
	                }
	            } else {
	                dtd.resolve(data);
	            }
	        },
	        error: function error(err) {
	            var back_data = {
	                error: err.status,
	                msg: err.statusText
	            };
	            if (back_data.error == 200) {
	                back_data.msg = '服务异常';
	            }
	            dtd.reject(back_data);
	        }
	    });
	    return dtd;
	}

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = validEmail;

	function validEmail(str) {
	    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	    return reg.test(str);
	}

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = validCard;

	function validCard(socialNo) {
	    if (socialNo == "") {
	        //alert("身份证号码不能为空!");
	        return false;
	    }
	    if (socialNo.length != 15 && socialNo.length != 18) {
	        //alert("输入身份证号码格式不正确!");
	        return false;
	    }
	    var area = {
	        11: "北京",
	        12: "天津",
	        13: "河北",
	        14: "山西",
	        15: "内蒙古",
	        21: "辽宁",
	        22: "吉林",
	        23: "黑龙江",
	        31: "上海",
	        32: "江苏",
	        33: "浙江",
	        34: "安徽",
	        35: "福建",
	        36: "江西",
	        37: "山东",
	        41: "河南",
	        42: "湖北",
	        43: "湖南",
	        44: "广东",
	        45: "广西",
	        46: "海南",
	        50: "重庆",
	        51: "四川",
	        52: "贵州",
	        53: "云南",
	        54: "西藏",
	        61: "陕西",
	        62: "甘肃",
	        63: "青海",
	        64: "宁夏",
	        65: "新疆",
	        71: "台湾",
	        81: "香港",
	        82: "澳门",
	        91: "国外"
	    };
	    if (area[parseInt(socialNo.substr(0, 2))] == null) {
	        //alert("身份证号码不正确(地区非法)!");
	        return false;
	    }
	    if (socialNo.length == 15) {
	        var pattern = /^\d{15}$/;
	        if (pattern.exec(socialNo) == null) {
	            //alert("15位身份证号码必须为数字！");
	            return false;
	        }
	        var birth = parseInt("19" + socialNo.substr(6, 2));
	        var month = socialNo.substr(8, 2);
	        var day = parseInt(socialNo.substr(10, 2));
	        switch (month) {
	            case '01':
	            case '03':
	            case '05':
	            case '07':
	            case '08':
	            case '10':
	            case '12':
	                if (day > 31) {
	                    //alert('输入身份证号码不格式正确!');
	                    return false;
	                }
	                break;
	            case '04':
	            case '06':
	            case '09':
	            case '11':
	                if (day > 30) {
	                    //alert('输入身份证号码不格式正确!');
	                    return false;
	                }
	                break;
	            case '02':
	                if (birth % 4 == 0 && birth % 100 != 0 || birth % 400 == 0) {
	                    if (day > 29) {
	                        //alert('输入身份证号码不格式正确!');
	                        return false;
	                    }
	                } else {
	                    if (day > 28) {
	                        //alert('输入身份证号码不格式正确!');
	                        return false;
	                    }
	                }
	                break;
	            default:
	                //alert('输入身份证号码不格式正确!');
	                return false;
	        }
	        var nowYear = new Date().getYear();
	        if (nowYear - parseInt(birth) < 15 || nowYear - parseInt(birth) > 100) {
	            //alert('输入身份证号码不格式正确!');
	            return false;
	        }
	        return true;
	    }
	    //以下验证18位身份证
	    var Wi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
	    var lSum = 0;
	    var nNum = 0;
	    var nCheckSum = 0;
	    for (i = 0; i < 17; ++i) {
	        if (socialNo.charAt(i) < '0' || socialNo.charAt(i) > '9') {
	            //alert("输入身份证号码格式不正确!");
	            return false;
	        } else {
	            nNum = socialNo.charAt(i) - '0';
	        }
	        lSum += nNum * Wi[i];
	    }
	    if (socialNo.charAt(17) == 'X' || socialNo.charAt(17) == 'x') {
	        lSum += 10 * Wi[17];
	    } else if (socialNo.charAt(17) < '0' || socialNo.charAt(17) > '9') {
	        //alert("输入身份证号码格式不正确!");
	        return false;
	    } else {
	        lSum += (socialNo.charAt(17) - '0') * Wi[17];
	    }
	    if (lSum % 11 == 1) {
	        return true;
	    } else {
	        //alert("输入身份证号码格式不正确!");
	        return false;
	    }
	}

	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = validTel;

	function validTel(str) {
	    var patrn = /^((\+?[0-9]{2,4}\-[0-9]{3,4}\-)|([0-9]{3,4}\-))?([0-9]{7,8})(\-[0-9]+)?$/;
	    return patrn.exec(str);
	}

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = validMobile;

	function validMobile(str) {
	    var patrn1 = /^1[3,4,5,7,8]\d{9}$/;
	    return patrn1.exec(str);
	}

	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = goRegister;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	function goRegister() {
	    location.replace(_assetUrlsJs2['default'].register + '?url=' + encodeURIComponent(location.href));
	}

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	    'account': '/m-center/control_info.html',
	    'address': '/m-center/address/index.html',
	    'bill': '/shopping/confirm_order.jsp',
	    'collection': '/m-center/collection.html',
	    'category': '/brand/index.html',
	    'contact': '/ad/contact-us.html',
	    'cart': '/shopping-cart/index.html',
	    'confirm_order': '/shopping/order/index.html',
	    'detail': '/detail/index.html',
	    'error': '/error/abnormal.html',
	    'editInfo': '/m-center/userinfo/index.html',
	    'home': '/',
	    'kefu': '/massage/communicate.jsp',
	    'login': '/Login/login/login.html',
	    'logistics': '/m-center/logistics/index.html',
	    'maintenance': '/maintenance/index.html',
	    'message': '/massage/massage.jsp',
	    'order_success': '/m-center/order_suc/index.html',
	    'pay': '/wx/index.html',
	    'register': '/Login/login_pre.html',
	    'review': '/shopping/review/index.html',
	    'refund': '/m-center/refund/index.html',
	    'search': '/search/index.html',
	    'safe': '/m-center/save_info.html',
	    'uCenter': '/m-center/my_index/index.html',
	    'zhuanti': '/list/index.html'
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = goLogin;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	function goLogin() {
	    location.replace(_assetUrlsJs2['default'].login + '?url=' + encodeURIComponent(location.href));
	}

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = back;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _supportDeviceJs = __webpack_require__(3);

	var _supportAPPJs = __webpack_require__(4);

	var _supportAPPJs2 = _interopRequireDefault(_supportAPPJs);

	function back(num) {
	    num = num || -1;
	    if (_supportDeviceJs.shell === 'qsh' && _supportDeviceJs.isAndroid) {
	        //调用APP接口返回
	        _supportAPPJs2['default'].back(num);
	    } else {
	        history.back();
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = uncertainImage;

	function uncertainImage(image, src, replace) {
	    var img = new Image();
	    img.onload = function () {
	        image.src = src;
	    };

	    img.onerror = function () {
	        image.src = replace;
	    };

	    img.src = src;
	    if (img.complete) {
	        image.src = src;
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ss;

	function ss(key, value) {
	    try {
	        if (value) {
	            sessionStorage.setItem(key, value);
	        } else {
	            return sessionStorage.getItem(key);
	        }
	    } catch (e) {
	        //提示勿禁用本地存储
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ls;

	function ls(key, value) {
	    try {
	        if (value) {
	            localStorage.setItem(key, value);
	        } else {
	            return localStorage.getItem(key);
	        }
	    } catch (e) {
	        //提示勿禁用本地存储
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = absoluteImg;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefixUrlJs = __webpack_require__(26);

	var _prefixUrlJs2 = _interopRequireDefault(_prefixUrlJs);

	function absoluteImg(url) {
	    url.toString();
	    if (url.indexOf('http') === 0) {
	        return url;
	    }
	    if (url[0] === '/') {
	        url = url.substring(1);
	    }

	    if (url.substr(0, 6) === 'images') {
	        url = 'http://m.8673h.com/' + url;
	    } else {
	        url = (0, _prefixUrlJs2['default'])(url);
	    }

	    return url;
	}

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = prefixUrl;

	function prefixUrl(img) {
	    return img ? 'http://img.8673h.com/' + img : "http://m.8673h.com/images/pro_pic.png";
	}

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = resizeImg;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefixUrlJs = __webpack_require__(26);

	var _prefixUrlJs2 = _interopRequireDefault(_prefixUrlJs);

	var ratio = window.devicePixelRatio || 1;

	function resizeImg(size, img) {
	    img = (0, _prefixUrlJs2['default'])(img);
	    var reg = /^.*(\..*?)$/g;
	    var arr = reg.exec(img);
	    img = img.replace(arr[1], sizeStr(size) + arr[1]);
	    return img;
	}

	function sizeStr(size) {
	    var pic_size = size * ratio;

	    var rest_size = pic_size % 100;
	    var main_size = pic_size - rest_size;
	    if (rest_size > 50) {
	        rest_size = 100;
	    } else {
	        rest_size = 50;
	    }
	    pic_size = main_size + rest_size;
	    if (pic_size < 100) {
	        pic_size = 100;
	    } else if (pic_size > 700) {
	        pic_size = 800;
	    }

	    return '_' + pic_size + 'x' + pic_size;
	}
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = a;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var dialog_template = __webpack_require__(29);
	var alert_template = __webpack_require__(30);

	var names = {
	    'warn': '警告',
	    'success': '成功',
	    'fail': '失败',
	    'tip': '提示'
	};

	var events = {
	    'ok': 'qsh.alert.ok',
	    'cancel': 'qsh.alert.cancel'
	};

	function a(options) {
	    var template = alert_template;
	    if (options.type === 'tip') {
	        template = dialog_template;
	    }

	    var title = options.title || names[options.type];

	    template = (0, _utilCompileTplJs2['default'])(template, {
	        title: title,
	        content: options.msg
	    });

	    var $alert = $(template).appendTo(document.body);

	    var $ok = $alert.find('.weui_btn_dialog.primary');
	    var $cancel = $alert.find('.weui_btn_dialog.default');

	    var cb_ok = options.ok || function () {
	        $(document.body).trigger($.Event(events['ok']));
	    };

	    var cb_cancel = options.cancel || function () {
	        $(document.body).trigger($.Event(events['cancel']));
	    };

	    $ok.click(wrapper(cb_ok));
	    $cancel.click(wrapper(cb_cancel));

	    function wrapper(cb) {
	        return function () {
	            $alert.remove();
	            cb();
	        };
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=weui_dialog_confirm><div class=weui_mask></div><div class=weui_dialog><div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div><div class=weui_dialog_bd>{{content}}</div><div class=weui_dialog_ft><a href=javascript:; class=\"weui_btn_dialog default\">取消</a> <a href=javascript:; class=\"weui_btn_dialog primary\">确定</a></div></div></div>";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=weui_dialog_alert><div class=weui_mask></div><div class=weui_dialog><div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div><div class=weui_dialog_bd>{{content}}</div><div class=weui_dialog_ft><a href=javascript:; class=\"weui_btn_dialog primary\">确定</a></div></div></div>";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var itemMap = {
	    'index': {
	        text: '首页',
	        href: _assetUrlsJs2["default"].home,
	        icon: 'baojifuben2'
	    },
	    'uCenter': {
	        text: '我的企商',
	        href: _assetUrlsJs2["default"].uCenter,
	        icon: 'yonghu'
	    },
	    'baoyang': {
	        text: '我要保养',
	        href: _assetUrlsJs2["default"].maintenance,
	        icon: 'woyaobaoyang2'
	    },
	    'contact': {
	        text: '联系我们',
	        href: _assetUrlsJs2["default"].contact,
	        icon: 'lianxi'
	    }
	};

	var default_item = ['index', 'baoyang', 'contact', 'uCenter'];
	var item_template = '<div class="qsh-footer-item {{classes}}" data-href="{{href}}"><i class="iconfont icon-{{icon}}"></i> <div>{{text}}</div></div>';
	var wrapper_template = '<div class="qsh-footer" style="position: {{position}}">{{content}}</div>';

	function footer(options) {
	    options = options || {};
	    var items = options.items || default_item;

	    var temps = items.map(function (item) {
	        var obj = itemMap[item];
	        obj.classes = options.current === item ? 'current-foot' : '';
	        return (0, _utilCompileTplJs2["default"])(item_template, obj);
	    });
	    temps = temps.join('');

	    var obj = {
	        content: temps
	    };

	    var $parent;
	    if (options.fixed === false) {
	        obj.position = 'relative';
	        $parent = $(options.mount);
	    } else {
	        obj.position = 'fixed';
	        $parent = $(document.body);
	    }

	    $parent.append((0, _utilCompileTplJs2["default"])(wrapper_template, obj));

	    var $items = $('.qsh-footer').find('.qsh-footer-item');
	    $items.click(function () {
	        var $this = $(this);
	        if (!$this.hasClass('current-foot')) {
	            location.href = $this.data('href');
	        }
	    });
	}

	exports["default"] = footer;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	var _supportDeviceJs = __webpack_require__(3);

	var _supportAPPJs = __webpack_require__(4);

	var _supportAPPJs2 = _interopRequireDefault(_supportAPPJs);

	var _toastToastJs = __webpack_require__(7);

	var _toastToastJs2 = _interopRequireDefault(_toastToastJs);

	function loadingCheck() {
	    var uri = window.location.href;
	    uri = encodeURIComponent(uri);
	    $.ajax({
	        type: 'post',
	        url: '/Action/LoginDetectionAction.do',
	        dataType: 'json',
	        async: false, //true是异步 false是同步
	        success: function success(data) {
	            var statu = data.statu;
	            var obj = {
	                type: 'warn'
	            };
	            switch (parseInt(statu)) {
	                case 0:
	                    return;
	                case 1:
	                    obj.msg = '请先登录';
	                    obj.ok = function () {
	                        location.replace(_assetUrlsJs2['default'].login + "?url=" + uri);
	                    };
	                    break;
	                case 2:
	                    obj.msg = '请务非法修改系统cookie操作';
	                    obj.ok = function () {
	                        location.replace(_assetUrlsJs2['default'].login + "?url=" + uri);
	                    };
	                    break;
	                case 3:
	                    obj.msg = '请确认是否本人登录';
	                    obj.ok = function () {
	                        location.replace(_assetUrlsJs2['default'].login + "?url=" + uri);
	                    };
	                    break;
	                case 4:
	                    obj.msg = '系统繁忙，请刷新重试';
	                    obj.ok = function () {
	                        location.replace(_assetUrlsJs2['default'].login + "?url=" + uri);
	                    };
	                    break;
	                case 5:
	                    location.replace(_assetUrlsJs2['default'].error);
	                    break;
	                case 99:
	                    obj.msg = '请确认您的用户名是否已注册或通过审核';
	                    obj.ok = function () {
	                        location.replace(_assetUrlsJs2['default'].register);
	                    };
	                    break;
	            }

	            if (obj.msg) {
	                if (_supportDeviceJs.shell === 'qsh') {
	                    _supportAPPJs2['default'].toast(obj.msg);
	                    //alert(obj.msg);
	                } else {
	                        (0, _toastToastJs2['default'])(obj.msg);
	                    }
	                obj.ok();
	            }
	        },
	        error: function error() {
	            location.replace(_assetUrlsJs2['default'].login + "?url=" + uri);
	        }
	    });
	}

	exports['default'] = loadingCheck;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function loadingCheckStatu(cb) {
	    var uri = location.href;
	    uri = encodeURIComponent(uri);
	    $.ajax({
	        type: 'post',
	        url: '/Action/LoginDetectionAction.do',
	        dataType: 'json',
	        success: function success(data) {
	            var statu = data.statu;
	            if (statu == 0) cb(true);else cb(false);
	        },
	        error: function error() {
	            cb(false);
	        }
	    });
	}

	exports['default'] = loadingCheckStatu;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.spinner = spinner;
	exports.spinnerFill = spinnerFill;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var template = __webpack_require__(35);
	var template_wrapper = __webpack_require__(36);

	function spinner(mount) {
	    if (!mount) return;
	    var $spinner = $(template).appendTo(mount);

	    return $spinner;
	}

	function spinnerFill(mount) {
	    if (!mount) return;

	    var $spinner = $((0, _utilCompileTplJs2['default'])(template_wrapper, {
	        spinner: template
	    })).appendTo(mount);

	    return $spinner;
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"weui_loading qsh_loading\"><div class=\"weui_loading_leaf weui_loading_leaf_0\"></div><div class=\"weui_loading_leaf weui_loading_leaf_1\"></div><div class=\"weui_loading_leaf weui_loading_leaf_2\"></div><div class=\"weui_loading_leaf weui_loading_leaf_3\"></div><div class=\"weui_loading_leaf weui_loading_leaf_4\"></div><div class=\"weui_loading_leaf weui_loading_leaf_5\"></div><div class=\"weui_loading_leaf weui_loading_leaf_6\"></div><div class=\"weui_loading_leaf weui_loading_leaf_7\"></div><div class=\"weui_loading_leaf weui_loading_leaf_8\"></div><div class=\"weui_loading_leaf weui_loading_leaf_9\"></div><div class=\"weui_loading_leaf weui_loading_leaf_10\"></div><div class=\"weui_loading_leaf weui_loading_leaf_11\"></div></div>";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=qsh_spinner_wrapper>{{spinner}}</div>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _spinnerSpinnerJs = __webpack_require__(34);

	var _ajaxAjaxJs = __webpack_require__(13);

	var _ajaxAjaxJs2 = _interopRequireDefault(_ajaxAjaxJs);

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var error_template = __webpack_require__(38);

	function _module(options) {
	    options.mount = $(options.mount);
	    var $spinner = (0, _spinnerSpinnerJs.spinnerFill)(options.mount);

	    (0, _ajaxAjaxJs2["default"])(options.url, options.data, options.format).then(function (data) {
	        $spinner.remove();
	        options.success && options.success(data);
	    }, function (err) {
	        $spinner.remove();
	        options.mount.append((0, _utilCompileTplJs2["default"])(error_template, err));
	    });
	}

	exports["default"] = _module;
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=qsh_module_error>{{msg}}</div>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ajaxLoader;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _moduleModuleJs = __webpack_require__(37);

	var _moduleModuleJs2 = _interopRequireDefault(_moduleModuleJs);

	function ajaxLoader(url, data, mount, format) {
	    var dtd = $.Deferred();
	    (0, _moduleModuleJs2['default'])({
	        url: url,
	        data: data,
	        mount: mount,
	        method: 'post',
	        format: format,
	        success: function success(data) {
	            dtd.resolve(data);
	        }
	    });
	    return dtd;
	}

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	var _utilCompileTplJs = __webpack_require__(8);

	var _utilCompileTplJs2 = _interopRequireDefault(_utilCompileTplJs);

	var _utilBackJs = __webpack_require__(21);

	var _utilBackJs2 = _interopRequireDefault(_utilBackJs);

	var template_structure = __webpack_require__(41);
	var template_back = __webpack_require__(42);
	var template_icon = __webpack_require__(43);
	var template_text = __webpack_require__(44);
	var template_menu = __webpack_require__(45);
	var template_menu_item = __webpack_require__(46);
	var template_menu_active = __webpack_require__(47);
	var template_active = __webpack_require__(48);

	//预定义头部信息
	var preMenu = {
	    'xiaoxi': {
	        name: '消息',
	        icon: 'xiaoxiHead',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].message;
	        }
	    },
	    'zhuye': {
	        name: '主页',
	        icon: 'baojifuben2',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].home;
	        }
	    },
	    'huiyuan': {
	        name: '我的企商',
	        icon: 'huiyuan',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].uCenter;
	        }
	    },
	    'lianxi': {
	        name: '联系我们',
	        icon: 'lianxi',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].contact;
	        }
	    },
	    'gouwuche': {
	        name: '购物车',
	        icon: 'gouwuche2',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].cart;
	        }
	    },
	    'back': {
	        name: '返回',
	        icon: '',
	        handler: function handler() {
	            return defaultBack();
	        }
	    },
	    'address': {
	        name: '收货地址',
	        icon: 'shouhuodizhi',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].address;
	        }
	    },
	    'account': {
	        name: '账户管理',
	        icon: 'sfsiconyidongduanwodezhanghu',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].account;
	        }
	    },
	    'info': {
	        name: '修改资料',
	        icon: 'ziliao',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].editInfo;
	        }
	    },
	    'safe': {
	        name: '账户安全',
	        icon: 'anquanbaozhang',
	        handler: function handler() {
	            location.href = _assetUrlsJs2['default'].safe;
	        }
	    },
	    'manager': {
	        icon: 'shezhi',
	        items: ['address', 'info', 'safe']
	    }
	};

	var Header = (function () {
	    function Header(options) {
	        _classCallCheck(this, Header);

	        this.options = options;

	        if (options.type === 2) {
	            if (!options.mount) {
	                alert('头部参数缺失mount');
	                return;
	            }

	            var $mount = $(options.mount);
	            this.container = $((0, _utilCompileTplJs2['default'])(template_structure, options)).appendTo($mount);
	            $mount.css('height', '45px');
	        } else {
	            this.container = $((0, _utilCompileTplJs2['default'])(template_structure, options)).appendTo($(options.mount) || document.body);
	        }

	        //不使用fixed定位头部
	        if (options.fixed === false) {
	            this.container.css({
	                position: 'relative'
	            });
	        }

	        this.left_dom = this.container.find('.head_left');
	        this.right_dom = this.container.find('.head_right');

	        this.dom_map = {};

	        this.initLeft();
	        this.initRight();
	    }

	    _createClass(Header, [{
	        key: 'append',
	        value: function append(item) {
	            this.addItem(this.right_dom, item);
	        }
	    }, {
	        key: 'prepend',
	        value: function prepend(item) {
	            this.addItem(this.right_dom, item, true);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(id) {
	            var dom = this.dom_map[id];
	            if (dom) {
	                if (dom.data('menu')) {
	                    dom.data('menu').remove();
	                }
	                dom.remove();
	            }
	        }
	    }, {
	        key: 'active',
	        value: function active(id, add) {
	            var dom = this.dom_map[id];
	            if (dom) {
	                if (add) {
	                    //增加
	                    if (dom.hasClass('qsh-head-menu-item')) {
	                        this.addMenuActive(dom);
	                    } else {
	                        this.addIconActive(dom);
	                    }
	                } else {
	                    //删除
	                    if (dom.hasClass('qsh-head-menu-item')) {
	                        this.rmMenuActive(dom);
	                    } else {
	                        this.rmIconActive(dom);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'addIconActive',
	        value: function addIconActive(dom) {
	            if (dom.find('.icon_active').length === 0) {
	                dom.append(template_active);
	            }
	        }
	    }, {
	        key: 'rmIconActive',
	        value: function rmIconActive(dom) {
	            dom.find('.icon_active').remove();
	        }
	    }, {
	        key: 'addMenuActive',
	        value: function addMenuActive(dom) {
	            if (dom.find('.icon-active-wrapper').length === 0) {
	                dom.append(template_menu_active);
	                dom.trigger('head-menu-active-change');
	            }
	        }
	    }, {
	        key: 'rmMenuActive',
	        value: function rmMenuActive(dom) {
	            dom.find('.icon-active-wrapper').remove();
	            dom.trigger('head-menu-active-change');
	        }
	    }, {
	        key: 'initLeft',
	        value: function initLeft() {
	            var _this2 = this;

	            var leftItems = this.options.leftItems || ['back'];
	            var hasBack = false;

	            leftItems.forEach(function (item) {
	                if (typeof item === 'string') {
	                    if (item === 'back') {
	                        _this2.appendBack(preMenu['back']);
	                        hasBack = true;
	                    } else if (preMenu[item]) {
	                        _this2.addItem(_this2.left_dom, preMenu[item]);
	                    }
	                } else {
	                    if (item.icon === 'back') {
	                        _this2.appendBack(item);
	                        hasBack = true;
	                    } else {
	                        _this2.addItem(_this2.left_dom, item);
	                    }
	                }
	            });

	            if (!hasBack && !this.options.noBack) {
	                this.appendBack(preMenu['back']);
	            }
	        }
	    }, {
	        key: 'initRight',
	        value: function initRight() {
	            var _this3 = this;

	            var rightItems = this.options.rightItems;
	            rightItems && rightItems.forEach(function (item) {
	                if (typeof item === 'string' && preMenu[item]) {
	                    _this3.addItem(_this3.right_dom, preMenu[item]);
	                    if (item === 'xiaoxi') {
	                        _this3.loadXiaoxi();
	                    }
	                } else {
	                    _this3.addItem(_this3.right_dom, item);
	                }
	            });
	        }
	    }, {
	        key: 'addItem',
	        value: function addItem(dom, item, pre) {
	            var $dom;
	            var method = 'appendTo';
	            if (pre) {
	                method = 'prependTo';
	            }
	            var id = item.id || item.text || item.icon;

	            if (item.text) {
	                $dom = $((0, _utilCompileTplJs2['default'])(template_text, item))[method](dom);
	            } else if (item.icon) {
	                $dom = $((0, _utilCompileTplJs2['default'])(template_icon, item))[method](dom);
	            }

	            //菜单
	            if (item.items) {
	                this.appendMenu($dom, item.items);
	            } else {
	                $dom.on('click', function (e) {
	                    item.handler(e);
	                });
	            }

	            this.dom_map[id] = $dom;
	        }
	    }, {
	        key: 'appendMenu',
	        value: function appendMenu(holder, list) {
	            var _this4 = this;

	            var $menu = $(template_menu).appendTo(this.container);
	            holder.data('menu', $menu);
	            var $ul = $menu.find('.tkuang');

	            this.container.on('head-menu-active-change', function (e) {
	                if ($ul.find('.icon-active-wrapper').length === 0) {
	                    _this4.rmIconActive(holder);
	                } else {
	                    _this4.addIconActive(holder);
	                }
	            });

	            holder.click(function (e) {
	                $menu.show();
	                setTimeout(function () {
	                    $menu.find('.qsh-head-menu').css({
	                        opacity: 1
	                    });
	                }, 10);
	            });

	            $menu.on('click', function () {
	                setTimeout(function () {
	                    $menu.find('.qsh-head-menu').css({
	                        opacity: 0
	                    });
	                    $menu.hide();
	                }, 10);
	            });

	            list.forEach(function (item) {
	                var $dom;
	                var realItem = item;
	                if (typeof item === 'string' && preMenu[item]) {
	                    realItem = preMenu[item];
	                    $dom = $((0, _utilCompileTplJs2['default'])(template_menu_item, realItem)).appendTo($ul);
	                    if (item === 'xiaoxi') {
	                        _this4.loadXiaoxi();
	                    }
	                } else {
	                    $dom = $((0, _utilCompileTplJs2['default'])(template_menu_item, item)).appendTo($ul);
	                }

	                $dom.on('click', function (e) {
	                    realItem.handler(e);
	                });

	                var id = realItem.id || realItem.text || realItem.icon;
	                _this4.dom_map[id] = $dom;
	            });
	        }
	    }, {
	        key: 'appendBack',
	        value: function appendBack(item) {
	            var back = $(template_back).prependTo(this.left_dom);
	            back.on('click', function (e) {
	                if (item.handler(e) === false) {
	                    return;
	                }
	                defaultBack();
	            });
	            this.dom_map['back'] = back;
	        }
	    }, {
	        key: 'loadXiaoxi',
	        value: function loadXiaoxi() {
	            var _this5 = this;

	            var _this = this;
	            setInterval(function (v) {
	                var $menu = _this5.dom_map['xiaoxiHead'];
	                if (!$menu) {
	                    return;
	                }
	                var type = 'menu';
	                if ($menu.hasClass('head-icon')) {
	                    type = 'icon';
	                }

	                $.ajax({
	                    url: '/Action/readMsgAction.do',
	                    data: {
	                        type: 2
	                    },
	                    method: 'post'
	                }).then(function (data) {
	                    if (parseInt(data.count) > 0) {
	                        type === 'menu' ? _this5.addMenuActive($menu) : _this5.addIconActive($menu);
	                    } else {
	                        type === 'menu' ? _this5.rmMenuActive($menu) : _this5.rmIconActive($menu);
	                    }
	                }, function (err) {});
	            }, 5000);
	        }
	    }]);

	    return Header;
	})();

	function defaultBack() {
	    (0, _utilBackJs2['default'])();
	    return false;
	}

	function init(options) {
	    return new Header(options);
	}

	exports['default'] = init;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"head custom\"><div class=head-name>{{name}}</div><div class=head-table><div class=head_left></div><div class=head_title>{{html}}</div><div class=head_right></div></div></div>";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<span class=\"head_icon head_back\"><i class=\"iconfont icon-lighter-zuo\"></i></span>";

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<span class=head_icon><i class=\"iconfont icon-{{icon}}\"></i></span>";

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<span class=head_icon>{{text}}</span>";

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=head-menu-wrapper><div class=qsh-head-menu><span class=qsh-head-arrow></span><ul class=tkuang></ul></div></div>";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<li class=qsh-head-menu-item><i class=\"iconfont icon-{{icon}} shi_18\"></i>{{name}}</li>";

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=icon-active-wrapper><div class=icon_active></div></div>";

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=icon_active></div>";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _assetUrlsJs = __webpack_require__(19);

	var _assetUrlsJs2 = _interopRequireDefault(_assetUrlsJs);

	var _wjsHeadJs = __webpack_require__(40);

	var _wjsHeadJs2 = _interopRequireDefault(_wjsHeadJs);

	var search_temp = '<div class="head-search">' + '<div class="head-search-input-wrapper">' + '<i class="iconfont icon-headsousuo"></i>' + '<input placeholder="输入您要搜索的商品" name="search_key"> ' + '</div> ' + '<div class="head-search-bottom"></div> ' + '</div>';

	var handler = {
	    list: function list(mount) {
	        (0, _wjsHeadJs2["default"])({
	            mount: mount,
	            html: search_temp,
	            style: 'custom',
	            rightItems: [{
	                icon: 'gengduodiandian',
	                hasActive: true,
	                items: ['xiaoxi', 'zhuye']
	            }]
	        });

	        $(mount).delegate('.head-search', 'click', function () {
	            location.href = _assetUrlsJs2["default"].search;
	        });

	        $(mount).delegate('input', 'focus', function (e) {
	            e.preventDefault();
	            $(this).blur();
	        });
	    },
	    index: function index(mount) {
	        (0, _wjsHeadJs2["default"])({
	            mount: mount,
	            html: search_temp,
	            style: 'custom',
	            leftItems: ['noback', {
	                name: '消息',
	                icon: 'xiaoxiHead',
	                handler: function handler() {}
	            }],
	            rightItems: [{
	                icon: 'gengduodiandian',
	                hasActive: true,
	                items: ['xiaoxi', 'zhuye']
	            }]
	        });
	    }
	};

	exports["default"] = function (type, mount) {
	    handler[type](mount);
	};

	module.exports = exports["default"];

/***/ }
/******/ ]);