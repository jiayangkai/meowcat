// components/map/map.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    /*
     * 判断是否点击跳转到添加猫页面
     * @type {Boolean}
     */
    navigateToAddCat: {
      type: Boolean,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /*
    * 经度
    * @type {String}
    */
    longitude: '',
    /*
    * 纬度
    * @type {String}
    */
    latitude: '',
    /*
    * 速度，浮点数，单位m/s
    * @type {String}
    */
    speed: '',
    /*
    * 位置的精确度
    * @type {String}
    */
    accuracy: '',
    /*
    * 标记点用于在地图上显示标记的位置
    * @type {Array}
    */
    markers: [{
      id: '0',
      latitude: null,
      longitude: null,
      width: 30,
      height: 30,
      callout: {
        // 文本 @type {String}
        content: ' 当前位置  ',
        // 文本颜色 @type {String}
        color: "#CD9057",
        // 背景颜色 @type {String}
        bgColor: "#ffffff",
        // 文本边缘留白 @type {Number}
        padding: 8,
        // callout边框圆角 @type {Number}
        borderRadius: 10,
        // 文字大小 @type {Number}
        fontSize: 14,
        // 	'BYCLICK':点击显示; 'ALWAYS':常显  @type {String}
        display: "ALWAYS"
      }
    }]
  },
  created: function() {
  },

  /** 
   * 生命周期函数，可以为函数，或一个在methods段中定义的方法名
   */
  attached: function () {
    let _this = this
    // 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          speed: res.speed,
          accuracy: res.accuracy,
          'markers[0].latitude': res.latitude,
          'markers[0].longitude': res.longitude
        })
      }
    })
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    // 导航到添加猫信息
    navigateToAddCat: function () {
      if (!this.data.navigateToAddCat) {
        wx.navigateTo({
          url: '/pages/cat/add/add'
        })
      }

      // 设置已经点击过了
      this.setData({
        navigateToAddCat: true
      })
    },
    // 回到当前位置
    currentLocation: function () {
      let _this = this
      // 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
      wx.getLocation({
        type: 'gcj02',
        success: function (res) {
          _this.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            speed: res.speed,
            accuracy: res.accuracy,
            'markers[0].latitude': res.latitude,
            'markers[0].longitude': res.longitude
          })
        }
      })
    }
  }
})
