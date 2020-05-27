"use strict";
// const mutuusGlobleData = require('../../comm/config.js');
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    // 默认主页
    PageCur: 'basics',
  },
  onLoad: function(param) {
    // console.log('页面加载中～')
    let that = this;

    // if(that.data.phone == '') {
    //   wx.getStorage({
    //     key: 'userInfo',
    //     success: function(res){
    //       let data = res.data
    //       that.setData({
    //         phone: data.phone,
    //       })
    //       if(data.phone == '') {
    //         that.setData({
    //           PageCur: 'userinfo',
    //         })
    //       } else{
    //         that.setData({
    //           PageCur: 'basics',
    //         })
    //       }
    //     }
    //   })
    // } else {
    //   that.setData({
    //     PageCur: 'basics',
    //   })
    // };
  },
  onReady: function(e) {
    // console.log('页面渲染～')
  },
  onShow: function(e) {
    // console.log('页面显示～')
  },
  // 主导航 当前状态
  NavChange(param) {
    this.setData({
      PageCur: param.currentTarget.dataset.cur
    })
  },

  onShareAppMessage() {
    return {
      title: 'mutuus 运动公园',
      imageUrl: './../../static/images/share/share.png',
      path: '/pages/index/index'
    }
  },
})