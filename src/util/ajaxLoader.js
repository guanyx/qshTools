'use strict';

import module from "../module/module.js";


export default function ajaxLoader(url, data, mount, format){
    var dtd = $.Deferred();
    module({
        url: url,
        data: data,
        mount: mount,
        method: 'post',
        format: format,
        success: function(data){
            dtd.resolve(data);
        }
    });
    return dtd;
}