#提示框

##提示类型
```
success(成功) 默认提示内容（已完成）
loading(加载中) 默认提示内容（正在加载中...）
warn(提示) 默认提示内容（提示信息）
```

##使用示例
```js
qshObject.toast() //默认成功
//loading不会自动隐藏，所以当type为loading时，会返回一个对象
var toastObj = qshObject.toast('loading', '数据加载中...') 
//数据加载完成后
toastObj.hide();//将loading提示隐藏
```

提示框样式参考[weui](http://weui.github.io/weui/#toast)