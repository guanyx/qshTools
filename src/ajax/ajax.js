'use strict';

export default function ajax(url, data, format){
    var dtd = $.Deferred();
    $.ajax({
        url: url,
        method: 'post',
        data: data,
        success: function(data){
            if(data){
                if(data.error){
                    if(data.error == '201'){
                        if(typeof data.data !== 'undefined'){
                            dtd.resolve(data.data)
                        }
                        else {
                            dtd.resolve(data);
                        }
                    }
                    else {
                        dtd.reject(data);
                    }
                }
                else {
                    dtd.resolve(data);
                }
            }
            else {
                dtd.resolve(data);
            }
        },
        error: function(err){
            var back_data = {
                error: err.status,
                msg: err.statusText
            };
            if(back_data.error == 200){
                back_data.msg = '服务异常';
            }
            dtd.reject(back_data);
        }
    });
    return dtd;
}