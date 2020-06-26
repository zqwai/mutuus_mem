//index.js
const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    avatarUrl: './../../images/user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {
    // 云加载失败
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        userInfo: e.detail.userInfo,
        // avatarUrl: e.detail.userInfo.avatarUrl,
        // city: e.detail.city,
        // country: e.detail.country,
        // gender: e.detail.gender,
        // language: e.detail.language,
        // nickname: e.detail.nickname,
        // province: e.detail.province,

        // signature: '',
        // phone: '',
        // time: new Date(),
      })
      db.collection('db_member').add({
        data: {
        userInfo: e.detail.userInfo,
        signature: e.detail.signature,
        time: new Date(),
        }
      }).then((res) => {
        console.log(res)
        db.collection('db_member').doc(res._id).get().then((res)=>{
          console.log(res)
          app.memberInfo = Object.assign(app.memberInfo, res.data)
        })

      })
      console.log(app.memberInfo)
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },


})
