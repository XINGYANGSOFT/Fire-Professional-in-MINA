// pages/caofa/item/item.js
var url = "https://api.xingguiyang.com/xfyw/?a=cf"
Page({
  data:{},
  onLoad:function(e){
    var that = this
    console.log('onLoad')
    wx.showToast({
        title:"正在加载...",
        icon:"loading",
        duration:10000
    })
    wx.request({
          url: url,
          data: {
            id:e.id
          },
          method: 'GET', 
          success: function(res){
            wx.hideToast();            
            that.setData({
                qc:res.data,
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
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})