const app = getApp();
Page({
  data: {
    // 表单模版 显示
    isFormShow: false,
    isDialogModal: true,
    // 表单标题
    formTitle: {
      name: '请输⼊会员姓名',
      birthday: '请输⼊会员出⽣年月',
      phone: '请输⼊会员联系⽅式',
      code: '验证码',
      btn: '提交',
    },
    // 表单提示
    placeholder: {
      name: '请输入孩子姓名',
      birthday: '请选择孩子生日',
      phone: '请输入您的手机号码',
      code: '输入验证码',
    },
    // 按钮状态
    loginBtnTxt:"会员绑定",
    loginBtnBgBgColor:"green",
    btnLoading:false,
    disabled:false,
    // 表单 value
  },
  onLoad: function(options) {
    console.log('页面加载中～')
  },
  onReady: function(e) {
    console.log('页面渲染～')
    // let phone = this.inputPhone;
    // this.setData({
    //   mphone: phone.substr(0, 3) + '****' + phone.substr(7)
    // });
    // console.log(this.inputPhone,mphone)
    // Do something when page ready.
  },
  onShow: function(e) {
    console.log('页面显示～')
  },
  rebind(e) {
    console.log('跳转页面')
    wx.navigateTo({ url: '/pages/bind/home/home', })
  },
  bindMember(e) {
    console.log('跳转页面')
    wx.navigateTo({ url: '/pages/basics/home/home', })
  }

})

