"use strict";
const CONFIG = require('./../../../comm/config.js');
const db = wx.cloud.database();
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    // 模版
    PageCur: 'bodylists',
    // 焦点图
    bannerList: [],
    bannerErrImg: [
      {
        id: '0',
        type: 'image',
        url: '../../../static/images/banner/b0.jpg',
      },
      {
        id: '1',
        type: 'image',
        url: '../../../static/images/banner/b1.jpg',
      },
    ],
    errIMG: '../../../static/images/home/error.jpg',
    // 用户 完整的基本信息
    memberInfo: {
      userId: '', //用户 id
      userName: '', //用户 姓名
      userBirthday: '', //用户 生日
      userPhone: '', //用户 手机  **判断是否做过身份绑定，若无则调用绑定页面
      userIdentityId: '', //用户 身份证
      children: [ //孩子 基本信息
        {
          id: '0001',
          name: '李晓洋',
          sex: '男',
          birth: '2016-04-15',
          height: '106',
          qrcodeNum: 'CX20200314A0006',
          qrcodePic: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'home/qrcode-student.png'
        },
        {
          id: '0005',
          name: '林美霞',
          sex: '女',
          birth: '2017-05-15',
          height: '110',
          qrcodeNum: 'CX20200314A0007',
          qrcodePic: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'home/qrcode-student.png'
        },
      ],
    },
  },
  lifetimes: {
    attached: function () {
      let that = this;
      if (!wx.getStorageSync("db_banner")) {
        // console.log("不存在 db_banner");
        that.getCloudDbBanner()
      } else {
        // console.log("存在 db_banner");
        that.getStorageBanner()
      }
    }
  },
  methods: {

    getCloudDbBanner: function(){
      console.log('函数调用 getCloudDbEctheme')
      // 云 获取 db_banner
      db.collection('db_banner').where({
        port: 'banner',
      }).get({
        success: function(res) {
          let value = res.data[0]
          console.log(res.data[0], '云 db_banner 调用成功')

          wx.setStorage({
            key: 'db_banner',
            data: value
          })
        },
        fail(res){
          console.error(error, res)
        },
        complete(res){
          // console.log('本地complete',res)
          this.getStorageBanner()
        }
      })
    },
    getStorageBanner: function(){
      let that = this;
      wx.getStorage({
        key: 'db_banner',
        success(res){
          const value = res.data
          // console.log('本地Storage \n', value)
          // console.log(e)
          that.setData({
            bannerList: value.bannerlist,
          })
        },
        fail(res){
          console.log(res, 'getStorageBanner err')
        }
      })
    },
    onErrorQrcode: function(e) {
      // let that = this;
      // let _imgUrls = that.data.bannerList;
      // that.setData({
      //   imgUrls: _imgUrls
      // })
    },
    errorFu: function(event) {
      // let that = this;
      // let idx = event.currentTarget.dataset.idx;
      // let _imgUrls = 'bannerList[' + idx + '].url';
      // console.log(event)
      
      // for (var i = 0; i < _imgUrls.length; i++) {
      //   if (i == idx) {
      //     _imgUrls[i] = that.data.bannerErrImg[idx].url;
      //   }
      // }
      // that.setData({
      //   [_imgUrls]: _imgUrls
      // })
    },

  }

})