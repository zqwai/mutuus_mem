//app.js
App({
  onLaunch: function () {

    // 用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // statusBar
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  // 用户信息
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
              console.log(that.globalData.userInfo);
            }
          })
        }
      })
    }
  },

  onShow: function (e) {
    console.log('App Show');
  },
  onHide: function (e) {
    console.log('App Hide')
  },
  onError: function (e) {
    console.log('App error')
  },
  onPageNotFound(e) {
    console.log('App Page is not found')
    wx.redirectTo({
      url: "pages/index/index"
    })
  },

  globalData: {
    userInfo: null,
    //   ColorList: [{
    //     title: '嫣红',
    //     name: 'red',
    //     color: '#e54d42'
    //   },
    //   {
    //     title: '桔橙',
    //     name: 'orange',
    //     color: '#f37b1d'
    //   },
    //   {
    //     title: '明黄',
    //     name: 'yellow',
    //     color: '#fbbd08'
    //   },
    //   {
    //     title: '橄榄',
    //     name: 'olive',
    //     color: '#8dc63f'
    //   },
    //   {
    //     title: '森绿',
    //     name: 'green',
    //     color: '#39b54a'
    //   },
    //   {
    //     title: '天青',
    //     name: 'cyan',
    //     color: '#1cbbb4'
    //   },
    //   {
    //     title: '海蓝',
    //     name: 'blue',
    //     color: '#0081ff'
    //   },
    //   {
    //     title: '姹紫',
    //     name: 'purple',
    //     color: '#6739b6'
    //   },
    //   {
    //     title: '木槿',
    //     name: 'mauve',
    //     color: '#9c26b0'
    //   },
    //   {
    //     title: '桃粉',
    //     name: 'pink',
    //     color: '#e03997'
    //   },
    //   {
    //     title: '棕褐',
    //     name: 'brown',
    //     color: '#a5673f'
    //   },
    //   {
    //     title: '玄灰',
    //     name: 'grey',
    //     color: '#8799a3'
    //   },
    //   {
    //     title: '草灰',
    //     name: 'gray',
    //     color: '#aaaaaa'
    //   },
    //   {
    //     title: '墨黑',
    //     name: 'black',
    //     color: '#333333'
    //   },
    //   {
    //     title: '雅白',
    //     name: 'white',
    //     color: '#ffffff'
    //   },
    // ]
  }
})