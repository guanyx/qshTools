#修车仔公用工具集

##组成部分
```
qshTools.js
qshTools.css
```

##功能分割

###qshTools.js
[ajax(http请求)](./src/ajax/)<br>
[alert(弹框提示)](./src/alert/)<br>
[asset(站内地址链接)](./src/asset/)<br>
[footer(通用底部)](./src/footer/)<br>
[header(通用头部)](./src/header/)<br>
[module(自带loading的加载)](./src/module/)<br>
[spinner(加载菊花)](./src/spinner/)<br>
[support(系统信息相关)](./src/support/)<br>
[toast(消息提示)](./src/toast/)<br>
[util(工具方法)](./src/util/)<br>
[wechat(加载微信JSSDK)](./src/wechat/)<br>
cookie(Cookies)


###qshTools.css
[weui(微信官方UI类库)](https://github.com/weui/weui)


####Cookies
更多细节，参考[js-cookie](https://github.com/js-cookie/js-cookie)
调用示例
```javascript
qshObject.Cookies.set('openid', '123');
```