'use strict';

import qsh_page_urls from '../asset/urls.js';

export default function goLogin(){
    location.replace(qsh_page_urls.login + '?url=' + encodeURIComponent(location.href));
}