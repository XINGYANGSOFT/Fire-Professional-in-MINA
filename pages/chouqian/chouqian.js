// pages/chouqian/chouqian.js
Page({
  data:{
    xiangmu:[
      {
        name:"常用器材",
        icon:"success_no_circle"
      },
      {
        name:"训练",
        icon:""
      },
      {
        name:"操法",
        icon:""
      },
    ]
  },
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
  selectClick:function(event){
    for(var i = 0; i < this.data.xiangmu.length;i++){  
        if(event.currentTarget.id == i){  
              this.data.xiangmu[i].icon = "success_no_circle"   
           }  
           else  
          {      
             this.data.xiangmu[i].icon = ""  
          }  
      }  
       this.setData(this.data)
  }
})