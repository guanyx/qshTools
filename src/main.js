'use strict';


import Cookies from 'js-cookie';
import fastclick from 'fastclick';

import * as device from "./support/device.js";
import sourceLoad from "./util/sourceLoad.js";
import wechat from './wechat/wechat.js';
import toast from './toast/toast.js';
import getQueryStringByName from './util/queryString.js';
import ajax from './ajax/ajax.js';
import compileTpl from './util/compileTpl.js';
import validEmail from './util/validEmail.js';
import validCard from './util/validCard.js';
import validTel from './util/validTel.js';
import validMobile from './util/validMobile.js';
import goRegister from './util/goRegister.js';
import goLogin from './util/goLogin.js';
import back from './util/back.js';
import uncertainImage from './util/uncertainImage.js';
import _sessionStorage from './util/sessionStorage.js';
import _localStorage from './util/localStorage.js';
import absoluteImg from './util/absoluteImg.js';
import resizeImg from './util/resizeImg.js';
import alert from './alert/alert.js';
import footer from './footer/js/footer.js';
import urls from './asset/urls.js';
import checkLogin from './util/checkLogin.js';
import loadingCheckStatu from './util/loginStatus.js';
import {spinner, spinnerFill} from './spinner/spinner.js';
import module from "./module/module.js";
import ajaxLoader from "./util/ajaxLoader.js";
import header from "./header/wjs/head.js";
import preHeader from "./header/js/preHead.js";


var qshObject = {};

qshObject = $.extend(qshObject, device);
qshObject.sourceLoad = sourceLoad;
qshObject.wechat = wechat;
qshObject.toast = toast;
qshObject.ajax = ajax;
qshObject.queryString = qshObject.getQueryStringByName = getQueryStringByName;
qshObject.compileTpl = compileTpl;
qshObject.validEmail = validEmail;
qshObject.validCard = validCard;
qshObject.validTel = validTel;
qshObject.validMobile = validMobile;
qshObject.goRegister = goRegister;
qshObject.goLogin = goLogin;
qshObject.back = back;
qshObject.uncertainImage = uncertainImage;
qshObject.sessionStorage = _sessionStorage;
qshObject.localStorage = _localStorage;
qshObject.absoluteImg = absoluteImg;
qshObject.resizeImg = resizeImg;
qshObject.alert = alert;
qshObject.footer = footer;
window.loadingCheck = window.checkLogin = qshObject.checkLogin = checkLogin;
window.loadingCheckStatu = qshObject.loadingCheckStatu = loadingCheckStatu;
qshObject.spinner = spinner;
qshObject.spinnerFill = spinnerFill;
qshObject.module = module;
qshObject.ajaxLoader = ajaxLoader;
qshObject.header = header;
qshObject.preHeader = preHeader;
qshObject.Cookies = Cookies;

if (!(typeof qsh_no_fastclick === 'boolean' && qsh_no_fastclick === true)) {
    fastclick.attach(document.body);
}

$.fn.lasyload = function (option) {
    this.lazyload($.extend({
        placeholder: '/images/pro_pic.jpg'
    }, option))
};

window.qshUtil = window.qshObject = qshObject;

window.qsh_page_urls = urls;

window.weixin_openid_promise = function () {
    var dtd = $.Deferred();

    if (device.shell === 'wechat' && location.hostname === 'm.8673h.com') {
        var openid = sessionStorage.getItem('openid');
        if (openid) {
            Cookies.set('openid', openid);
            dtd.resolve(openid);
        }
        else {
            var code = getQueryStringByName('code');
            if (!code) {
                var wechat_appid = 'wx970b18d04868b6c3';
                var url = location.href;

                var wechat_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + wechat_appid + '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=snsapi_base&state=123#wechat_redirect';

                location.replace(wechat_url);
            }
            else {
                +function () {
                    ajax('/Action/WxOpenIdServlet.do', {
                        code: code
                    }).then(function (data) {
                        var openid = data[0].openid;
                        sessionStorage.setItem('openid', openid);
                        Cookies.set('openid', openid);
                        dtd.resolve(openid);
                    }, function (err) {
                        dtd.reject(err);
                    })
                }()
            }
        }
    }
    else {
        dtd.resolve(null);
    }

    return dtd;
}();


(function(){
    //项目域名
    var MOBILE_DOMIAN = "http://m.8673h.com/";
//默认产品图
    var GOOD_DEFAULT="/images/pro_pic.png";
//默认用户图
    var USER_DEFAULT="/images/tuzi.png";
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
    function getNewName(oldName,scale){
        var newWidth = parseFloat(scale/grids)*screenWidth;

        return patchSize (oldName,newWidth);
    }

    function patchSize (oldName,newWidth){
        var size = ["100x100","150x150","200x200","250x250","300x300","350x350","400x400","450x450","500x500","550x550","600x600","650x650","700x700","800x800"];
        var differ = 9999;
        var index = 0;
        $.each(size, function(n, value) {
            var newArr = value.split("x");
            var val = Math.abs(parseFloat(newArr[0])-parseFloat(newWidth));
            if(val<differ){
                differ = val;
                index = n;
            }
        });
        var pos = oldName.lastIndexOf(".");
        var ext = oldName.substring(pos,oldName.length);
        return oldName.replace(ext,"_"+size[parseInt(index)]+ext);
    }

    function setgrid(para){
        var arr = para.split(",");
        var str = "";
        var num = 1;
        var grid = 0;
        for(var i=0;i<arr.length;i++){
            var paras = arr[i].split("-");
            str = paras[0];
            num = paras[1];
            if(screenWidth<768 && str=="xs"){
                grid = num;
            }
            if(screenWidth>768 && str=="sm"){
                grid = num;
            }
            if(screenWidth>992 && str=="md"){
                grid = num;
            }
            if(screenWidth>1200 && str=="lg"){
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
            if(typeof scale!="undefined"){
                if(/^\d+$/.test(scale)==false){//可变参数则先去计算grid
                    scale = setgrid(scale);
                    $(elem).attr("data-grid",scale);
                }
                group = getNewName(group,scale)
            }
            imgUrl =  group;
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