// 验证
const  util = require('./../../../utils/util.js');
// 初始化云
const db = wx.cloud.database();
const app = getApp();

Page({
  data:{
    userName: '',
    userBirthday: '2020-02-01',
    phone: '',
    code: '',
    userInfo: '',
  },
  // 日期
  DateChange (e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 会员绑定
  onGotUserInfo: function (param) {
    let that = this;
    that.setData({
      userInfo: param.detail.rawData,
    });
    wx.setStorage({
      data: that.data.userInfo,
      key: 'userInfo',
    });
    // console.log(param.detail.errMsg)
    // console.log(param.detail.userInfo)
    // console.log(param.detail.rawData)
    console.log(param)
  },
  // 表单提交
  formsubmit(param) {
    // db.collection('user').add({
    //   data: param,
    // }).then(res =>{
    // })
    console.log(param)
  }
})