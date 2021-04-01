import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   activeItemIndex:null,
   articleList:[],
   sentimentList:[
     {id:'',value:'全部'},
     {id:1,value:'正面'},
     {id:2,value:'负面'},
   ]
  },

  changeSentiment(e){
    this.setData({activeItemIndex:e.target.dataset.index})
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  async getData(){
    let res = await request({url:'/wechat/getArticle',data:{limit:20,offset:0,wechatId:'oqSEA5B74IJklsmJf00Ff4wHUxKg',groupId:3}});
    this.setData({articleList:res.data.list})
  },
  scroll(e){
    console.log(e);
  },
  touchStart(e){
    console.log(e)
  },
  touchEnd(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})