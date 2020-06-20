"use strict";
const CONFIG = require('../../comm/config.js');
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    phone: '',
    // 默认主页
    PageCur: '',
  },
  onLoad: function(param) {
    console.log('页面加载中～ index')
    let that = this;


    if(that.data.phone == '') {
      console.log('wx.getStorage userInfo')
      wx.getStorage({
        key: 'memberInfo',
        success: function(res){
          let data = res.data
          that.setData({
            phone: data.phone,
          })
          if(data.phone === '' || data.phone === undefined) {
            that.setData({
              PageCur: 'guide',
            })
          } else{
            that.setData({
              PageCur: 'basics',
            })
          }
        }
      })
    } else {
      that.setData({
        PageCur: 'basics',
      })
    };
  },
  onReady: function(e) {
    console.log('页面渲染～ index')
  },
  onShow: function(e) {
    console.log('页面显示～ index')
  },
  // 主导航 当前状态
  // NavChange(param) {
  //   this.setData({
  //     PageCur: param.currentTarget.dataset.cur
  //   })
  // },

  onShareAppMessage() {
    return {
      title: 'mutuus 运动公园',
      imageUrl: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'/share/share.png',
      path: '/pages/index/index'
    }
  },
  ShowPage(param) {
    this.setData({
      PageCur: param.currentTarget.dataset.cur
    })
    // wx.navigateTo({ url: '/pages/'+this.data.PageCur+'/home/home', })
  },
  ClearStorage(param) {
    console.log("clearStorage")
    wx.clearStorage({
      success: function(param){
        wx.showToast({
          title: '本地缓存已清空',
          icon: 'none',
          duration: 2000,
        })
      },
      fail: function(param){
        wx.showToast({
          title: '本地缓存清空失败',
          icon: 'none',
          duration: 2000,
        })
      },
      complete: function(param){}
    })
  },
  ScrollTop() {
    console.log(scrollTop)
  }
})