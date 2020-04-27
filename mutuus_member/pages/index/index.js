"use strict";

const mutuusGlobledata = require('../../utils/globledata.js');

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: { 
    PageCur: 'userinfo',
  },
  // 主导航 当前状态
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  
  onShareAppMessage() {
    return {
      title: mutuusGlobledata.appName,
      imageUrl: mutuusGlobledata.shareImageUrl,
      path: '/pages/index/index'
    }
  },
})