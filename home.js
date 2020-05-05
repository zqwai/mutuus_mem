// 验证
const  util = require('./../../../utils/util.js');
// 初始化云
const db = wx.cloud.database();
let app = getApp();

Page({
  data:{
    username: '',
    userbirthday: '',
    phone: '',
    code: '',

    userInfo: {},
    avatarUrl: './../../../static/images/home/user-unlogin.png',
    pickerdate: '-',
    codeUrl: '1',
    // 提示
    tipShow: 'hide',
    tipText: '',
    // 按钮
    isDisabled: true,
    ShowCodeBtn: 'block',
    ShowCodepic: 'hide',
    showLoading: '',

    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function() {
  },
  // 授权信息
  bindGetUserInfo: function(param) {
    if (!this.data.logged && param.detail.userInfo) {
      this.setData({
        avatarUrl: param.detail.userInfo.avatarUrl,
        userInfo: param.detail.userInfo
      })
      app.globalData.userInfo = param.detail.userInfo
    }
  //   // console.log(param.detail.cloudID)
  //   // console.log(param.detail.encryptedData)
  //   // console.log(param.detail.errMsg)
  //   // console.log(param.detail.rawData)
  //   // console.log(param.detail.userInfo)
  },
  // 会员绑定
  checkUserInfo: function (param) {
    let that = this;

    // console.log(that.data.detail);
    // db.collection('user').add({
    //     data: param.detail,
    //   }).then(res =>{
    //     console.log(param.detail)
    // });

    // that.setData({
    //   userInfo: param.detail.userInfo,
    // });
      // 写入缓存
      wx.setStorage({
        data: param.detail.userInfo,
        key: 'userInfo',
      });

  },
  // 表单提交
  FormSubmit (param) {
    let that = this;

    let value = param.detail.username && param.detail.phone && param.detail.userbirthday && param.detail.code;
    console.log(app.globalData.userInfo)
    console.log(value);
    // db 写入数据库
    // db.collection('user').add({
    //   data: param,
    // }).then(res =>{
    //   if (res.statusCode === 200) {
    //     wx.showToast({
    //       title: '登录成功',
    //       icon: 'none',
    //       duration: 1000
    //     })
    //   } else if (res.statusCode === 501) {
    //     wx.showToast({
    //       title: `登录失败，${res.data.msg}`,
    //       icon: 'none',
    //       duration: 1000
    //     })
    //   } else {
    //     wx.showToast({
    //       title: '登录失败',
    //       icon: 'none',
    //       duration: 1000
    //     })
    //   }
    //   this.setState({
    //     showLoading: false
    //   })
    // });
    // local storange
  },
  // onUsernameChange
  OnUsernameChange (param) {
    let that = this;
    let value = param.detail.value.trim()
    let reg = util.regexConfig().name; //姓名正则检验
    console.log(value)
    if(value.length <= 1 || value ==undefined){
      that.setData({
        tipShow: 'error',
        tipText: '姓名不能少于两个字！',
      })
    }
    else if(!reg.test(value)){
      that.setData({
        tipShow: 'error',
        tipText: '请输入中文姓名！',
      })
    }
    else {
      that.setData({
        tipShow: 'correct',
        tipText: '姓名正确！',
      })
    }
  },
  // picker 日期控件
  OnDateChange (param) {
    this.setData({
      pickerdate: param.detail.value,
      userbirthday: param.detail.value,
    }),
    console.log(this.data.pickerdate);
  },
  // OnPhoneChange
  OnPhoneChange (param) {
    let that = this;
    let value = param.detail.value.trim()
    let reg = util.regexConfig().phone;

    console.log(value)

    if(value.length <= 1 || value ==undefined){
      that.setData({
        tipShow: 'error',
        tipText: '手机不能少于11个字符！',
      })
    }
    else if(!reg.test(value)){
      that.setData({
        tipShow: 'error',
        tipText: '手机请输入有误！',
      })
    }
    else {
      that.setData({
        tipShow: 'correct',
        tipText: '手机正确！',
      })
    }
  },
  // OnCodeChange
  OnCodeChange (param) {
    let that = this;
    let value = param.detail.value.trim()

    console.log(value)

    if(value.length <= 0 || value ==undefined){
      that.setData({
        tipShow: 'error',
        tipText: '验证码不能为空！',
      })
    }
    else {
      that.setData({
        tipShow: 'correct',
        tipText: '验证码正确！',
      })
    }

  },
  // 监听输入框状态 按钮有效
  inputWacth (param) {
    let that = this;
    let item = param.currentTarget.dataset.model;
    that.setData({
      [item]: param.detail.value
    });

    let usernameLen = that.data.username.length;
    let phoneLen = that.data.phone.length;
    let codeLen = that.data.code.length;
    console.log(that.data.username, that.data.phone, that.data.code)
    if (codeLen >= 4 && phoneLen >=11 && usernameLen > 1) {
      that.setData({
        isDisabled: false
      })
    } else {
      that.setData({
        isDisabled: true
      })
    };
  },
  // GetNewCode
  GetNewCode (param) {
    let that = this;
    that.setData({
      ShowCodeBtn: 'hide',
      ShowCodepic: 'block',
    })
  },
  // GetNewCode
  GetNewCodePic (param) {
    let that = this;
    // console.log('GetNewCode')
    that.setData({
      codeUrl: 2,
    })
    console.log(num)
  },
})