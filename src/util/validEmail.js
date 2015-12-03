'use strict';

export default function validEmail(str){
    var reg =/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    return reg.test(str);
}