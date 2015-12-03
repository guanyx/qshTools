'use strict';

import sourceLoad from "../util/sourceLoad.js";
import  * as device from '../support/device.js';

export default function wechat(){
    if(device.shell !== 'wechat'){
        return +function(){
            var dtd = $.Deferred();
            dtd.reject();
            return dtd;
        }();
    }
    else {
        return sourceLoad('http://res.wx.qq.com/open/js/jweixin-1.0.0.js');
    }
}