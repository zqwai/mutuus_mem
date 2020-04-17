"use strict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    PageCur: 'chart',
    cardCur: 0,
    bannerList: [
      {
        id: '0',
        type: 'image',
        url: './../../../static/images/banner/b1.jpg',
        link: 'pages/tabBar/userinfo/index',
      },
      {
        id: '1',
        type: 'image',
        url: './../../../static/images/banner/b2.jpg',
        link: 'pages/tabBar/userinfo/index',
      },
      {
        id: '2',
        type: 'image',
        url: './../../../static/images/banner/b3.jpg',
        link: 'pages/tabBar/userinfo/index',
      },
      {
        id: '3',
        type: 'image',
        url: './../../../static/images/banner/b4.jpg',
        link: 'pages/tabBar/userinfo/index',
      },
      {
        id: '4',
        type: 'image',
        url: './../../../static/images/banner/b5.jpg',
        link: 'pages/tabBar/userinfo/index',
      },
    ],
    studentQrcode: '../../../static/images/home/qrcode-student.png',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(res) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 执行coolsite360交互组件展示

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh(){

  },
  // banner
  // bannerImageLoad: function (e) {
  //   var imageSize = imageRest.imageRest(e)
  //   this.setData({
  //     imagewidth: imageSize.imageWidth,
  //     imageheight: imageSize.imageHeight
  //   })
  // },
  // logoImageLoad: function (e) {
  //   var imageSize = imageRest.imageRest(e)
  //   this.setData({
  //     logoImagewidth: imageSize.imageWidth,
  //     logoImageheight: imageSize.imageHeight
  //   })
  // },

})