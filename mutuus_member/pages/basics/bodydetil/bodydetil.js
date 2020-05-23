"use strict";
const app = getApp();
const db = wx.cloud.database();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    bodydetilData: "",
  },

  lifetimes: {
    attached: function () {
      let that = this;
      if (!wx.getStorageInfo("db_bodydetil")) {
        console.log("不存在 db_bodydetil");
        that.getCloudBodydetilData()
      } else {
        console.log("存在 db_bodydetil");
        that.getStorageBodydetilData()
      }
    },
  },
  methods: {
    getStorageBodydetilData: function(){
      let that = this;
      wx.getStorage({
        key: 'db_bodydetil',
        success (param) {
          let value = param.data
          console.log(value)
          that.setData({
            bodydetilData: value
          })
        }
      })
    },
    getCloudBodydetilData: function() {
      let that = this;
      console.log('getBodydetilData')
      // 云 获取 sunburst数据
      db.collection('db_bodydetil').where({
        port: 'bodydetil',
      }).get({
        success: function(param) {
          let value = param.data[0]
          console.log(param.data[0])
          wx.setStorage({
            key: 'db_bodydetil',
            data: value
          })
          that.setData({
            bodydetilData: value
          })
        }
      })

    }
  }
})