"use strict";
Component({
  options: {
    addGlobalClass: true,
  },
  data: {

    bannerList: [
      {
        id: '0',
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
      },
      {
        id: '1',
        type: 'image',
        url: './../../../static/images/banner/b0.jpg',
      },
      {
        id: '2',
        type: 'image',
        url: './../../../static/images/banner/b2.jpg',
      },
      {
        id: '3',
        type: 'image',
        url: './../../../static/images/banner/b3.jpg',
      },
      {
        id: '4',
        type: 'image',
        url: './../../../static/images/banner/b4.jpg',
      },
      {
        id: '4',
        type: 'image',
        url: './../../../static/images/banner/b5.jpg',
      },
    ],
    students: [
      {
        id: '12',
        name: '李晓洋',
        sex: '男',
        birth: '2016.04.15',
        layout: 'bodylists',
        height: '106',
        qrcodeNum: 'CX20200314A0006',
        qrcodePic: '../../../static/images/home/qrcode-student.png'
      },
      {
        id: '13',
        name: '林美霞',
        sex: '女',
        birth: '2017.05.15',
        layout: 'bodylists',
        height: '110',
        qrcodeNum: 'CX20200314A0007',
        qrcodePic: '../../../static/images/home/qrcode-student.png'
      },
    ],
    stuUrls: {
      name: 'userinfo',
      subName: 'home',
    },
  },
})
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     PageCur: 'chart',
//     cardCur: 0,
//     bannerList: [
//       {
//         id: '0',
//         type: 'image',
//         url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
//         link: 'pages/tabBar/userinfo/index',
//       },
//       {
//         id: '1',
//         type: 'image',
//         url: './../../../static/images/banner/b0.jpg',
//         link: 'pages/tabBar/userinfo/index',
//       },
//       {
//         id: '2',
//         type: 'image',
//         url: './../../../static/images/banner/b2.jpg',
//         link: 'pages/tabBar/userinfo/index',
//       },
//       {
//         id: '3',
//         type: 'image',
//         url: './../../../static/images/banner/b3.jpg',
//         link: 'pages/tabBar/userinfo/index',
//       },
//       {
//         id: '4',
//         type: 'image',
//         url: './../../../static/images/banner/b4.jpg',
//         link: 'pages/tabBar/userinfo/index',
//       },
//       {
//         id: '4',
//         type: 'image',
//         url: './../../../static/images/banner/b5.jpg',
//         link: 'pages/tabBar/userinfo/index',
//       },
//     ],
//     studentQrcode: '../../../static/images/home/qrcode-student.png',
//     stuUrl: {
//       name: 'userinfo',
//       subName: 'home',
//     },
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(res) {
    
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {
//     // 执行coolsite360交互组件展示

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },
//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },
//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh(){

//   },
//   // banner
//   // bannerImageLoad: function (e) {
//   //   var imageSize = imageRest.imageRest(e)
//   //   this.setData({
//   //     imagewidth: imageSize.imageWidth,
//   //     imageheight: imageSize.imageHeight
//   //   })
//   // },
//   // logoImageLoad: function (e) {
//   //   var imageSize = imageRest.imageRest(e)
//   //   this.setData({
//   //     logoImagewidth: imageSize.imageWidth,
//   //     logoImageheight: imageSize.imageHeight
//   //   })
//   // },

// })