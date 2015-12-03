'use strict';

import compileTpl from "../util/compileTpl.js";

var loading_tpl = require('html!./toast.loading.html');
var common_tpl = require('html!./toast.common.html');
var warn_tpl = require('html!./toast.warn.html');

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

export default function toast(type, content){
    if(arguments.length === 0){
        type = 'success';
    }
    else if(arguments.length === 1){
        if(types.indexOf(type) === -1){
            content = type;
            type = 'warn';
        }
    }

    if(!content){
        content = defaultContent[type];
    }

    var toast_mount = toast_mount_map[type];

    if(toast_mount){
        toast_mount.find('.weui_toast_content').text(content);
        return autoHideToast(type);
    }
    else {
        var tpl = tpl_map[type];
        toast_mount_map[type] = $(compileTpl(tpl, {
            content: content
        })).appendTo(document.body);
        return autoHideToast(type);
    }
}

function autoHideToast(type){
    toast_mount_map[type].show();
    if(type === 'loading'){
        return {
            hide: function(){
                toast_mount_map[type].hide();
            }
        }
    }
    else {
        clearTimeout(timer);
        timer = setTimeout(function(){
            toast_mount_map[type].hide();
        }, 2000);
    }
}