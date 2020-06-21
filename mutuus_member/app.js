
const CONFIG = require('./comm/config.js');

App({
  onLaunch: function(e) {
    let that = this;

    // 入场场景
    let isUserInfo = wx.getStorageSync('userInfo')
    let isMemberInfo = wx.getStorageSync('memberInfo')
    // console.log(isUserInfo)
    
    if (!isMemberInfo){

      that.globalData.PageCur = 'bind'
    }
    else if(isMemberInfo){
      wx.getStorage({
        key: 'memberInfo',
        success: (res) => {
          let phone = res.data.phone
          that.globalData.memberInfo = res.data
          if(phone == ''|| phone == undefined){
            that.globalData.PageCur = 'bind'
          } else {
            that.globalData.PageCur = 'basics'
          }
          console.log(that.globalData.memberInfo)
        }
      });
    } 
    // if (!isUserInfo) {
    //   that.globalData.PageCur = 'guide'
    // }
    // else {
    //   that.globalData.PageCur = 'basics'
    // }
    // console.log(that.globalData.PageCur);

    
    wx.checkSession({
　　　　success: function(res){
        console.log("处于登录态", res);// that.getUserInfo()
　　　　},
　　　　fail: function(res){
        console.log("需要重新登录",res);        
　　　　}
　　})

    wx.cloud.init({
      env: 'mutuus-mum-rs28n',
      traceUser: true,
    });

    // 从本地缓存中获取数据
    // let logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // statusBar
    wx.getSystemInfo({
      success: param => {
        // console.log(param);
        this.globalData.StatusBar = param.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - param.statusBarHeight;
        } else {
          this.globalData.CustomBar = param.statusBarHeight + 50;
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

  // onShow: function (e) {
  //   console.log('App Show ,app.js');
  // },
  // onHide: function (e) {
  //   console.log('App Hide ,app.js')
  // },
  // onError: function (e) {
  //   console.log('App error ,app.js')
  // },
  // onPageNotFound(e) {
  //   console.log('App Page is not found')
  //   wx.redirectTo({
  //     url: "pages/guide/reindex/reindex"
  //   })
  // },
  globalData: {
    userInfo: "",
    // phoneNum: null,
    // PageCur: '',
  },
})