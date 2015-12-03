'use strict';

import {spinnerFill} from "../spinner/spinner.js";
import ajax from "../ajax/ajax.js";
import compileTpl from '../util/compileTpl.js';

var error_template = require('html!./error.html');

function module(options){
    options.mount = $(options.mount);
    var $spinner = spinnerFill(options.mount);

    ajax(options.url, options.data, options.format).then(function(data){
        $spinner.remove();
        options.success && options.success(data);
    }, function(err){
        $spinner.remove();
        options.mount.append(compileTpl(error_template, err));
    })
}

export default module;