// pages/test01/test01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("Pull down")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("Reach bottom")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switch: function(e) {
    const temp = this.data.array[0]
    this.data.array[0] = this.data.array[1]
    this.data.array[1] = temp 
    this.setData({
      array: this.data.array
    })
  },
  ToNextPage(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  logEvent(event){
    console.log(event)
  },
  handleTap4(){
    console.log("handleTap4")
  },
  handleTap1(){
    console.log("handleTap1")
  },
  handleTap2(){
    console.log("handleTap2")
  },
  handleTap3(){
    console.log("handleTap3")
  },
  loadClick(){
    wx.showLoading({
      title: '等待请求',
    })
    wx.request({
      url: 'https://cn.bing.com/',
      success:(res)=>{
        console.log(res.statusCode)
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  }

})