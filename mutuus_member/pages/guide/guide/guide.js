const CONFIG = require('../../../comm/config.js');
const db = wx.cloud.database();
let app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    CustomBar: app.globalData.CustomBar,
    logged: false,
    userInfo: [],
    mainpic: "../../../static/images/guide/guide.png",
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function (res) {
      let that = this;
    },
    moved: function () {
      console.log("lifetimes:moved")
    },
    // 组件生命周期函数-在组件实例被从页面节点树移除时执行)
    detached: function () {
      console.log("lifetimes:detached")
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log("pageLifetimes:show")
    },
    hide: function() {
      // 页面被隐藏
      console.log("pageLifetimes:hide")
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log("pageLifetimes:resize")
    }
  },
  methods: {
    // 授权信息
    bindGetUserInfo(param) {


      if (param.detail.userInfo) {
        this.setData({
          logged: true,
          userInfo: param.detail.userInfo,
        })
        console.log(param.detail)
        console.log(param)
        // console.log(param.detail.cloudID)
        // console.log(param.detail.encryptedData)
        // console.log(param.detail.errMsg)
        // console.log(param.detail.rawData)
        // console.log(param.detail.userInfo)
        app.globalData.userInfo = param.detail.userInfo,
        // Object.assign(app.globalData.userInfo, param.detail.userInfo)
        console.log(app.globalData.userInfo)
        // setStorage
        wx.setStorage({
          data: param.detail.userInfo,
          key: 'userInfo',
        });
        // db 写入数据库
        // db.collection('userInfo').add({
        //   data: param.detail,
        // }).then(res =>{
        //   if (res.statusCode === 200) {
        //     wx.showToast({
        //       title: '绑定成功',
        //       icon: 'none',
        //       duration: 1000
        //     })
        //   } else if (res.statusCode === 501) {
        //     wx.showToast({
        //       title: `绑定失败，${res.data.msg}`,
        //       icon: 'none',
        //       duration: 1000
        //     })
        //   } else {
        //     wx.showToast({
        //       title: '绑定失败',
        //       icon: 'none',
        //       duration: 1000
        //     })
        //   }
        // });
        // // 页面跳转
        // wx.navigateTo({ url: '/pages/bind/home/home', })
      }
    }
  }
})