var registerId = 0
var events = {}
module.exports = {
  //容器
  events:events,   
  //数据注册
  register:function(flags,params) { 
    var eventId = registerId++
    var event = events[eventId] = {
      params: params || {},
      eventFn:{}
    }
    return {
      eventId:eventId,
      on:function(eventName,fn) {
        if (!event.eventFn[eventName]) {
          event.eventFn[eventName] = []
        }
        event.eventFn[eventName].push(fn)
      }
    }
  },
  //参数回传
  callBack:function(eventId,eventName,params) {
      let event = events[eventId]
      if (event && event.eventFn[eventName]) {
        event.eventFn[eventName].forEach(function (fn){
          fn(params)
        })
      }
  },
  //获取参数值
  getParams:function(eventId) {
    return events[eventId]['params']
  },
  //删除容器
  destroy:function(eventId) {
    delete events[eventId]
  },
  //返回
  back: function (currentPages = 1) {
    wx.navigateBack(currentPages)
  },
  //跳转
  go: function (opts) {
    let event = this.register(opts.page, opts.params)
    if(opts.url == '') {
      console.log('路由不合法')
      return {}
    }
    wx.navigateTo({
      url: opts.url + "?eventId=" + event.eventId + "&page=" + opts.page,
    })
    return event
  }  
}
