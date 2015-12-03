'use strict';

import qsh_page_urls from "../asset/urls.js";

export default function goRegister(){
    location.replace(qsh_page_urls.register + '?url=' + encodeURIComponent(location.href));
}