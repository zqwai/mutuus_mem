"use strict";
// import * as mutuusGlobleData from '../../comm/config.js';
const mutuusGlobleData = require('../../comm/config.js');
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: { 
    // 默认主页
    PageCur: 'basics',
  },
  // 主导航 当前状态
  NavChange(param) {
    this.setData({
      PageCur: param.currentTarget.dataset.cur
    })
  },
  onLoad: function(param) {
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
      title: mutuusGlobleData.appName,
      shareImageUrl: mutuusGlobleData.shareImageUrl,
      path: '/pages/index/index'
    }
  },
})