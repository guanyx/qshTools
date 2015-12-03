'use strict';

var ua = navigator.userAgent;

var s = 'common';
if(ua.match(/APP8673h/i)){
    s = 'qsh';
}
else if(ua.match(/MicroMessenger/i)){
    s = 'wechat';
}

export var shell = s;

export var isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua);

export var isAndroid = !isIOS;