'use strict';

import compileTpl from '../util/compileTpl.js'
var template = require('html!./spinner.html');
var template_wrapper = require('html!./spinnerWrapper.html');

export function spinner(mount){
    if(!mount) return;
    var $spinner = $(template).appendTo(mount);

    return $spinner;
}

export function spinnerFill(mount){
    if(!mount) return;

    var $spinner = $(compileTpl(template_wrapper, {
        spinner: template
    })).appendTo(mount);

    return $spinner;
}