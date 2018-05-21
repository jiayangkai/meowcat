// pages/settings/settings.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //用户实体
      user: {
        //用户的真实姓名
        name: 'xxx',
        //用户的生日
        birth: '1996-12-03',
        isNeedInfo: true,
     },
  },
  saveName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
    birth: e.detail.value
    })
  },
  isInfoOk: function (e) {
    if (e.detail.value) {
      isNeedInfo = true;
    } else {
      isNeedInfo = false;
    }
    console.log(isNeedInfo);   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //ajax请求到服务器请求该用户的数据
    this.setData({
      name: 'xxx',
      birth: 'kkk',
      isNeedInfo: true
    })
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
    // var newUserName = e.detail.value;
    // ajax请求将数据发到服务器保存
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