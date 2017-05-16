//index.js
var url = "https://api.xingguiyang.com/xfyw/?a=qc"
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
  onShow:function(){
    console.log('onShowed')
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var height = res.windowHeight;   //footerpannelheight为底部组件的高度
        that.setData({
          srollHeight: height
        });
      }
    })
  },
  bindFocus:function(){
        wx.navigateTo({
        url: '/pages/search/search?f=index'
      })
  },
  scrolltoupper:function(){
    console.log("chufa")
  },
  choiceWordindex: function (event) { 
  let wordindex = 'id' + event.currentTarget.dataset.wordindex;  
  if(wordindex == '灭火类') {
    this.setData({
      toView: 'id1',
    })
  } else {  
    this.setData({
      toView: wordindex,
    })
  }  
  console.log(wordindex);
  console.log(this.data.toView);  
}  
})
