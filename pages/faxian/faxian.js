// pages/chouqian/chouqian.js
var url = "https://winkcn.com/wechat/xfyw/"
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  },
	cyqcsj:function(){ //抽取常用器材
		var that = this
		wx.request({
			url: url,
			data: {
				a:"qcsj"
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					id: res.data,
				})
			},
			fail: function () {
				wx.showModal({
					title: '连接服务器失败',
					content: '请检查网络连接，并退出后重新进入',
					success: function (res) {
						if (res.confirm) {
							onload()
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			complete: function () {
				// complete
			}
		})
	},
	qcsj: function () { //抽取全部器材
		var that = this
		wx.request({
			url: url,
			data: {
				a: "sj",
				k:"qc",
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					id: res.data,
				})
			},
			fail: function () {
				wx.showModal({
					title: '连接服务器失败',
					content: '请检查网络连接，并退出后重新进入',
					success: function (res) {
						if (res.confirm) {
							onload()
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			complete: function () {
				// complete
			}
		})
	},
	xlsj: function () { //抽取训练项目
		var that = this
		wx.request({
			url: url,
			data: {
				a: "sj",
				k: "xl",
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					id: res.data,
				})
			},
			fail: function () {
				wx.showModal({
					title: '连接服务器失败',
					content: '请检查网络连接，并退出后重新进入',
					success: function (res) {
						if (res.confirm) {
							onload()
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			complete: function () {
				// complete
			}
		})
	}, 
	cfsj: function () { //抽取操法项目
		var that = this
		wx.request({
			url: url,
			data: {
				a: "sj",
				k: "cf",
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					id: res.data,
				})
			},
			fail: function () {
				wx.showModal({
					title: '连接服务器失败',
					content: '请检查网络连接，并退出后重新进入',
					success: function (res) {
						if (res.confirm) {
							onload()
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			complete: function () {
				// complete
			}
		})
	}
})