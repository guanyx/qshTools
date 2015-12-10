'use strict';

import {shell, isAndroid, isIOS} from "./device.js";

var app = null;
var increase = 0;

if(shell === 'qsh' && isAndroid){
    app = {
        queue: {},  //方法与回调映射
        callback: function(){
            var data = Array.prototype.slice.call(arguments, 0);
            var method = data.shift();   //回调方法名
            var times = data.shift();    //是否会回调多次，长任务可能需要回调多次返回状态
            this.queue[method].apply(this, data);
            if(!times){
                delete this.queue(method);
            }
        }
    };

    //调用通用方法，第一个参数会方法名
    app.apply = function(method){
        var data = Array.prototype.slice.call(arguments, 0);
        if(data.length < 1){
            throw"APP call error, message:miss method name";    //需要方法名
        }

        var types = data.map(function(param, index){
            var type = typeof param;
            var fake_name = method + increase;  //回调的假名

            if('function' === type){
                app.queue[fake_name] = param;
                data[index] = fake_name;
            }

            return type;
        });

        increase++;

        var result = JSON.parse(prompt(JSON.stringify({method: data.shift(), args: data})));
        if (result.code != 200) {
            throw"APP call error, code:" + result.code + ", message:" + result.result
        }
        return result.result
    };

//返回的示例
    app.back = function(num){
        app.apply('History.back', num)
    };

    app.toast = function(msg){
        app.apply('Message.toast', msg);
    };
}

if(shell === 'qsh' && isIOS){
    app = {};
    app.back = function(){
        history.back();
    };

    /**
    * order_id: Date.now() + '123',
    * goods_name: '测试商品',
    * goods_description: '测试商品描述',
    * amounts: '0.01'
    **/
    app.alipayOrder = function(obj, cb){
        var iframe = $('<iframe></iframe>');
        iframe.attr('src', 'qsh://alipayOrder:?' + JSON.stringify(obj));
        iframe.hide();
        iframe.appendTo(document.body);

        window.alipayResult = cb;
    }

    app.wxpayOrder = function(obj, cb){
        var iframe = $('<iframe></iframe>');
        iframe.attr('src', 'qsh://wxpayOrder:?' + JSON.stringify(obj));
        iframe.hide();
        iframe.appendTo(document.body);

        window.wxpayResult = cb;
    }
}

export default app;