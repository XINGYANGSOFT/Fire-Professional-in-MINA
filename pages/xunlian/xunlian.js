// pages/xunlian/xunlian.js
var url = "https://winkcn.com/wechat/xfyw/?a=xl"
Page({
  data: {},
  onLoad: function () {
    var that = this
    console.log('onLoad')
    wx.showToast({
        title:"正在加载...",
        icon:"loading",
        duration:10000
    })
    wx.request({
          url: url,
          data: {},
          method: 'GET', 
          success: function(res){
            wx.hideToast();            
            that.setData({
                qclist:res.data,
            })
          },
          fail: function() {
            wx.showModal({
                title: '连接服务器失败',
                content: '请检查网络连接，并退出后重新进入',
                success: function(res) {
                  if (res.confirm) {
                    onload()
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
          },
          complete: function() {
            // complete
          }
        })
  },
  bindFocus:function(){
        wx.navigateTo({
        url: '/pages/search/search?f=xunlian'
      })
    }
})
