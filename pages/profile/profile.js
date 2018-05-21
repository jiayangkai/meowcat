// pages/profile/profile.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户实体
    user: {
      //昵称-nickname
      name: '喵与猫寻',
      //头像-avatarUrl
      url: '',
      points: 0
    },
    //未读消息数量
    noticeCount: 0,
    //导航list
    navigatorbarlist: [
    {
      //导航页面
      navigatorurl: '',
      //提示图
      imgurl: '../../images/profile/setting.png',
      //提示项
      message: '设置',
      url: '../timeline/timeline'
    }, {
      navigatorurl: '',
      imgurl: '../../images/profile/notifications.png',
      message: '消息通知',
      url: '../timeline/timeline'
    }, {
      navigatorurl: '',
      imgurl: '../../images/profile/paws.png',
      message: '我的时间轴',
      url:'../timeline/timeline'
    }, {
      navigatorurl: '',
      imgurl: '../../images/profile/notice.png',
      message: '须知',
      url: '../timeline/timeline'
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userinfo) {
      //更新数据
      that.setData({
        user: {
          name: userinfo.nickName,
          url: userinfo.avatarUrl,
          points: 0
        }
      })
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