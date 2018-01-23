# wx-request-params
微信小程序跳转事件监听与参数回传
# what's this?
为了方便小程序页面间参数传递搞的轮子，省去原生方法繁琐的操作，
# how to use
* 封装了微信小程序的基本导航
* 1.以前可能是这样的...
```javascript
wx.navigateTo({
  url: 'test?id=1'
})
```
* 现在可以是这样的
```javascript
nav.go({
  url:"/test",
  params:{
    "user":"123",
    "id":12
  }
})
```
* 2.以前可能是这样的...
* 参数回传怎么搞...
* 现在可以这样
```javascript
event.on("call",(res) =>{
    //TODO 
})
```
* 3.以前销毁数据
* 我不知道
```javascript
event.destroy(event.eventId)
```
