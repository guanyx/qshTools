#常用方法

##absoluteImg

调用示例
```js
qshObject.absoluteImg('http://www.baidu.com/logo.png') //返回     http://www.baidu.com/logo.png
qshObject.absoluteImg('images/aa.png') //返回     http://m.8673h.com/images/aa.png
qshObject.absoluteImg()     //返回    http://m.8673h.com/images/pro_pic.png
qshObject.absoluteImg(xxx)  //返回    http://img.8673h.com/xxx
```


##ajaxLoader

调用示例
```js
//对module的封装
qshObject.ajaxLoader(url, data, mount)
```

##back

调用示例
```js
//该方法会根据当前平台的差异来觉得是调用原生的方法返回还是history.back();
qshObject.back();
```

##checkLogin

调用示例
```js
//该方法使用同步ajax请求。不建议使用
qshObject.checkLogin()
```

##compileTpl

调用示例
```js
//解析模板
qshObject.compileTpl(<div>{{msg}}</div>, {msg: 123})    //返回<div>123</div>
```

##goLogin
调用示例
```js
//页面跳转到登陆页,并将当前页的url地址传递给登陆页
qshObject.goLogin();
```

##goRegister
调用示例
```js
//页面跳转到注册页,并将当前页的url地址传递给注册页
qshObject.goRegister();
```

##localStorage
调用示例
```js
//对localStorage的简单封装
qshObject.localStorage('a', 123)    //存储
qshObject.localStorage('a')     //获取 返回123
```

##loginStatus
调用示例
```js
//检测登陆状态
qshObject.loginStatus(function(status){
    //status true为已登录，false未登陆
})
```

##queryString
调用示例
```js
//获取url参数
qshObject.queryString('name')
```

##resizeImg
调用示例
```js
//根据当前设备的屏占比返回合适的图片
qshObject.resizeImg(imgUrl, 100)
```

##sessionStorage
类localStorage

##sourceLoad
调用示例
```js
//加载静态资源
qshObject.sourceLoad([a.js, b.css, b.js])   //返回jquery Deferred对象
当所有资源加载成功之后，返回成功，否则返回失败
```

##uncertainImage
调用示例
```js
qshObject.uncertainImage(image, src, replace)   //HTML Image对象，图片资源地址，备用资源地址
当src加载失败时，给image的地址指向replace
```

##validCard
调用示例
```js
//验证身份证号
qshObject.validCard(socialNo)
```

##validEmail
调用示例
```js
//验证邮箱
qshObject.validEmail(email)
```

##validMobile
调用示例
```js
//验证手机号
qshObject.validMobile(mobile)
```

##validTel
调用示例
```js
//验证电话
qshObject.validTel(tel)
```