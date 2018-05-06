Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: '当前位置',
    },
    latitude: {
      type: Number,
      value: 0
    },
    longtitude: {
      type: Number,
      value: 0
    },
    src:{
      type: String,
      value: './image/c1.jpg'
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    firstLeft: 110,
    firstTop: 190,
    left: '',
    top: ''
  },
  attached: function () {
    var nowLeft = this.data.firstLeft + this.properties.longtitude + 'rpx'
    var nowTop = this.data.firstTop + this.properties.latitude + 'rpx'
    console.log(nowLeft)
    this.setData({
      left: nowLeft,
      top: nowTop
    })
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})