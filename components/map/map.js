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
    },
    /*
     * 获取猫坐标
     * @type {Array}
     * 
     * {
        id: '1',
        latitude: null,
        longitude: null,
        width: 40,
        height: 40,
        iconPath: '../../images/c1.jpg'
      }
     */
    catCoordinates: {
      type: Array,
      value: [{
        id: 'cat1',
        latitude: null,
        longitude: null,
        width: 40,
        height: 40,
        title: '猫猫',
        iconPath: '../../images/c1.jpg'
      }]
    },
    /*
     * 获取帮助机构坐标
     * @type {Array}
     */
    helpInstitutions: {
      type: Array,
      value: [{
        id: 'help1',
        latitude: null,
        longitude: null,
        width: 30,
        height: 30,
        title: '防虐动物协会\n啊啊啊啊啊啊啊啊\n啊啊啊啊啊啊啊啊\n\n',
        callout: {
          // 文本 @type {String}
          content: '防虐动物协会\n啊啊啊啊啊啊啊啊\n啊啊啊啊啊啊啊啊\n\n',
          // 文本颜色 @type {String}
          color: "#000",
          // 背景颜色 @type {String}
          bgColor: "#ffffff",
          // 文本边缘留白 @type {Number}
          padding: 8,
          // callout边框圆角 @type {Number}
          borderRadius: 10,
          // 文字大小 @type {Number}
          fontSize: 12,
          // 	'BYCLICK':点击显示; 'ALWAYS':常显  @type {String}
          display: "ALWAYS"
        },
        label: {
          // 	label的坐标，原点是 marker 对应的经纬度 @type {Number}
          x: -48,
          // label的坐标，原点是 marker 对应的经纬度 @type {Number}
          y: -58,
          // 文本 @type {String}
          content: '           导航           ',
          // 文本颜色 @type {String}
          color: "#ffffff",
          // 背景颜色 @type {String}
          bgColor: "#CD9057",
          // 文本边缘留白 @type {Number}
          padding: 4,
          // callout边框圆角 @type {Number}
          borderRadius: 10,
          // 文字大小 @type {Number}
          fontSize: 12,
          // 文本对齐方式。有效值: left, right, center  @type {String}
          textAlign: "center"
        }
      }]
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
        fontSize: 12,
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

        // 模拟数据
        _this.setData({
          'catCoordinates[0].latitude': res.latitude + 0.02,
          'catCoordinates[0].longitude': res.longitude + 0.01,
          'helpInstitutions[0].latitude': res.latitude + 0.005,
          'helpInstitutions[0].longitude': res.longitude + 0.005     
        })

        // 拼接获取猫坐标数据
        if (_this.data.catCoordinates.length) {
          _this.data.markers = _this.data.markers.concat(_this.data.catCoordinates)
        }

        // 拼接获取帮助机构坐标数据
        if (_this.data.helpInstitutions.length) {
          _this.data.markers = _this.data.markers.concat(_this.data.helpInstitutions)
        }

        _this.setData({
          markers: _this.data.markers 
        })

        console.log(_this.data.markers)
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
    },
    markertap(e) {
      let _markers = this.data.markers; // 拿到标记数组
      let markerId = e.markerId; // 获取点击的标记id
      let currMaker = _markers[markerId]; // 通过id,获取当前点击的标记
      let _openLocation;
      _markers.forEach((key,index,array) => {
          if (key.id === markerId) {
            _openLocation = key
          }
      })

      // 打开地图导航到指定位置
      if (_openLocation.id !== '0') {
        wx.openLocation({
          latitude: _openLocation.latitude,
          longitude: _openLocation.longitude,
          scale: 14,
          name: _openLocation.title
        }) 
      }
      
    }
  }
})
