"use strict";
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: { 
    PageCur: 'basics',
    
  },
  // 主导航 当前状态
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: 'Mutuus 运动公园',
      imageUrl: '../../static/images/share/share.jpg',
      path: '/pages/index/index'
    }
  },
})