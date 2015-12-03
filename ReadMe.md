#修车仔公用工具集

##组成部分
```
qshTools.js
qshTools.css
```

##功能分割

###qshTools.js
```
[ajax(http请求)](./src/ajax/)
[alert(弹框提示)](./src/alert/)
[asset(站内地址链接)](./src/asset/)
[footer(通用底部)](./src/footer/)
[header(通用头部)](./src/header/)
[module(自带loading的加载)](./src/module/)
[spinner(加载菊花)](./src/spinner/)
[support(系统信息相关)](./src/support/)
[toast(消息提示)](./src/toast/)
[util(工具方法)](./src/util/)
[wechat(加载微信JSSDK)](./src/wechat/)
cookie(Cookies)
```

###qshTools.css
```
[weui(微信官方UI类库)](https://github.com/weui/weui)
```

####Cookies
更多细节，参考[js-cookie](https://github.com/js-cookie/js-cookie)
调用示例
```javascript
qshObject.Cookies.set('openid', '123');
```