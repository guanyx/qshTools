'use strict';

import compileTpl from '../util/compileTpl.js';

var dialog_template = require('html!./dialog.html');
var alert_template = require('html!./alert.html');

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

export default function a(options){
    var template = alert_template;
    if(options.type === 'tip'){
        template = dialog_template;
    }

    var title = options.title || names[options.type];

    template = compileTpl(template, {
        title: title,
        content: options.msg
    });

    var $alert = $(template).appendTo(document.body);

    var $ok = $alert.find('.weui_btn_dialog.primary');
    var $cancel = $alert.find('.weui_btn_dialog.default');

    var cb_ok = options.ok || function(){
            $(document.body).trigger($.Event(events['ok']))
        };

    var cb_cancel = options.cancel || function(){
            $(document.body).trigger($.Event(events['cancel']))
        };

    $ok.click(wrapper(cb_ok));
    $cancel.click(wrapper(cb_cancel));

    function wrapper(cb){
        return function(){
            $alert.remove();
            cb();
        }
    }
}