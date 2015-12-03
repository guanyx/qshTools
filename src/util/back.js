'use strict';

import {shell, isAndroid} from '../support/device.js';
import APP from '../support/APP.js';

export default function back(num){
    num = num || -1;
    if(shell === 'qsh' && isAndroid){
        //调用APP接口返回
        APP.back(num);
    }
    else {
        history.back();
    }
}