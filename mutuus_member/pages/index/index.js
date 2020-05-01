"use strict";

const mutuusGlobledata = require('../../utils/globledata.js');

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: { 
    PageCur: 'bind',
  },
  // 主导航 当前状态
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onLoad: function(options) {
    console.log('页面加载中～')
  },
  onReady: function(e) {
    console.log('页面渲染～')
  },
  onShow: function(e) {
    console.log('页面显示～')
  },
  
  onShareAppMessage() {
    return {
      title: mutuusGlobledata.appName,
      imageUrl: mutuusGlobledata.shareImageUrl,
      path: '/pages/index/index'
    }
  },
})