"use strict";
const CONFIG = require('./../../../comm/config.js');
const db = wx.cloud.database();
const app = getApp();


Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    // 体态评测数据展示
    posture: {
      title: '体态评测数据展示',
      date: '',
      image: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'/home/titai.jpg',
      name: '体态综合分',
      num: '73.5',
    },
    // 正面照片
    bodyphoto: [
      {
        id: '0',
        title: '正面照片',
        image: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'/home/rectangle.png',
      },
      {
        id: '1',
        title: '侧面照片',
        image: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'/home/rectangle.png',
      },
      {
        id: '2',
        title: '侧面照片',
        image: CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'/home/rectangle.png',
      }
    ],
    // 身体各部位
    bodypart:[
      {
        id: '0',
        title: '颈部曲度',
        detil: '正常',
      },
      {
        id: '1',
        title: '圆肩',
        detil: '轻微',
      },
      {
        id: '2',
        title: '高低肩',
        detil: '右肩偏高',
      },
      {
        id: '3',
        title: '驼背',
        detil: '轻微',
      },
      {
        id: '4',
        title: '脊柱侧弯',
        detil: '正常',
      },
      {
        id: '5',
        title: '盆骨位置',
        detil: '正常',
      },
      {
        id: '5',
        title: '腿部',
        detil: 'O型腿',
      },
      {
        id: '5',
        title: '足部',
        detil: '平足',
      },
    ]
  },

  lifetimes: {
    attached: function () {
      let that = this;
      console.log(CONFIG.MU_GLOBLE.DOMAIN+CONFIG.MU_GLOBLE.STATIC_PATH_IMG+'/home/titai.jpg')
      if (!wx.getStorageSync("db_posturedetil")) {
        console.log("不存在 db_posturedetil getCloudPosturedetilData");
        that.getCloudPosturedetilData()
      } else {
        console.log("存在 db_posturedetil getStoragePosturedetilData");
        that.getStoragePosturedetilData()
      }
    },
    moved: function () {
      console.log("lifetimes:moved")
    },
    detached: function () {
      console.log("lifetimes:detached")
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },

  methods: {
    // db_posturedetil
    getStoragePosturedetilData: function(){
      let that = this;
      wx.getStorage({
        key: 'db_posturedetil',
        success (param) {
          let value = param.data
          // console.log(value)
          that.setData({
            posture: value.posture,
            bodyphoto: value.bodyphoto,
            bodypart: value.bodypart
          })
        }
      })
    },
    getCloudPosturedetilData: function() {
      let that = this;
      // console.log('getBodydetilData')
      // 云 获取 sunburst数据
      db.collection('db_posturedetil').where({
        port: 'posturedetil',
      }).get({
        success: function(param) {
          let value = param.data[0]
          // console.log(param.data[0])
          wx.setStorage({
            key: 'db_posturedetil',
            data: value
          })
        },
        fail(param){
          console.log(param)
        },
        complete(param){
          that.getStoragePosturedetilData()
        }
      })
    },
  }
})