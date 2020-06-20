
const mutuusGlobleData = require('./comm/config.js');

App({
  onLaunch: function(e) {
    let that = this


    wx.checkSession({
　　　　success: function(res){
　　　　　　console.log("处于登录态", res);
          // that.getUserInfo()
　　　　},
　　　　fail: function(res){
　　　　　　console.log("需要重新登录",res);
　　　　　　wx.login({})
　　　　}
　　})

    

    // wx.checkSession({
    //   success: function(){
    //     wx.getStorage({  
    //       key: 'sk',
    //       success: function(res) {
    //         let sk = res.data;
    //         util.req('user/vaild_sk', { "sk": sk }, function (data) {
    //           if (data.status == 1) {
    //             that.globalData.sk = sk;
    //           } else {
    //             that.login();
    //             return;
    //           }
    //         })
    //       },
    //       fail:function() {
    //         that.login();
    //          return;
    //       }
    //     });
    //     wx.getStorage({  
    //       key: 'userInfo',
    //       success: function(res) {
    //           that.globalData.userInfo = res.data;
    //       },
    //       fail:function() {
    //         that.login();
    //       }
    //     });
    //   }
    // })
    // 获取用户信息
    // this.getUserInfo()
    
    //初始化缓存
    // this.initStorage();

    wx.cloud.init({
      env: 'mutuus-mum-rs28n',
      traceUser: true,
    });

    // 用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    

    // statusBar
    wx.getSystemInfo({
      success: e => {
        console.log(e);
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
  login:function(){

    wx.reLaunch({
      url: '/pages/index/index'
    })
    
  } ,
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
              console.log(res, '用户信息')
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
              console.log(that.globalData.userInfo);
            }
          })
        }
      })
    }
  },
  initStorage: function() {
    wx.getStorageInfo({
      success: function(res) {
        // console.log(res.keys)
        console.log('当前存贮大小：' + res.currentSize)
        console.log('本地存贮大小：' + res.limitSize)

      }
    })
  },

  onShow: function (e) {
    console.log('App Show ,app.js');
  },
  onHide: function (e) {
    console.log('App Hide ,app.js')
  },
  onError: function (e) {
    console.log('App error ,app.js')
  },
  onPageNotFound(e) {
    console.log('App Page is not found')
    wx.redirectTo({
      url: "pages/guide/reindex/reindex"
    })
  },
  globalData: {
    userInfo: {},
    phoneNum: '',
  },
})