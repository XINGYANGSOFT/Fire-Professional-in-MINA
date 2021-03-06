// pages/chouqian/chouqian.js
var url = "https://api.xingguiyang.com/xfyw/"
Page({
  data:{},
	cyqcsj: function () { //抽取常用器材
		var that = this
		wx.request({
			url: url,
			data: {
				a: "qcsj"
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					cyid: res.data,
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
				k: "qc",
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					qcid: res.data,
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
					xlid: res.data,
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
					cfid: res.data,
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
  onLoad:function(options){ //载入时获取初始抽取数据
		var that = this
		wx.request({
			url: url,
			data: {
				a: "qcsj"
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					cyid: res.data,
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
		wx.request({
			url: url,
			data: {
				a: "sj",
				k: "qc",
			},
			method: 'GET',
			success: function (res) {
				console.log(res.data)
				that.setData({
					qcid: res.data,
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
					xlid: res.data,
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
					cfid: res.data,
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
	
})