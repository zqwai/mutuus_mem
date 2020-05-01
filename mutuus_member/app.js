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
  }
})