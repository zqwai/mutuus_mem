const  util = require('./../../../utils/util.js');
const app = getApp();
Page({
  data: {
    // 表单 value
    formId: '22',
    inputChildrenName: '发史蒂夫',
    inputChildrenBirthday: '2010-01-01',
    inputPhone: '15992919898',
    inputCode: '1212',
    // picker选择器
    pickerChildrenBirthday: '2010-01-01',
    // 提示框
    tipShow: 'hide',
    tipText: '',
    // 表单模版 显示
    isFormShow: true,
    isDialogModal: false,
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
    loginBtnBgBgColor:"mutuus-blue",
    btnLoading:false,
    disabled:false,
  },
  onLoad: function(options) {
    // wx.clearStorageSync(); //清除缓存
    console.log('页面加载中～')
  },
  onReady: function(e) {
  },
  onShow: function(e) {
    console.log('页面显示～')
  },

  // 生日 选择
  birthdayDateChange(e) {
    this.setData({
      inputChildrenBirthday: e.detail.value,
      pickerChildrenBirthday: e.detail.value,
    })
    console.log('生日', e.detail.value)
  },
  // 姓名 验证
  checkName(param){

    let reg = util.regexConfig().name; //姓名正则检验
    let eValue = param.detail.value.trim();
    let eValueLenth = parseInt(eValue.length);

    // console.log(regUserName.test(eValue));

    if(!reg.test(eValue)){
      this.setData({
        tipShow: 'error',
        tipText: '请输入中文姓名！',
      })
      showWxTip('请输入中文姓名！')
    } else {
      this.setData({
        tipShow: 'hide',
        tipText: '',
      })
      console.log(eValue);
      return true;
    }
  },
  // 日期 验证
  checkBirthday(param){
    let reg = util.regexConfig().birthday; 
    let eValue = param.detail.value.trim();
    let eValueLenth = parseInt(eValue.length);
    console.log(!reg.test(eValue))
    if(reg.test(eValue)){
      this.setData({
        tipShow: 'hide',
        tipText: '',
      })
      console.log(eValue);
      return true;
    } else {
      this.setData({
        tipShow: 'error',
        tipText: '日期格式有误，请重新输入！',
      })
      showWxTip('日期格式有误，请重新输入！')
    };
  },
  // 手机 验证
  checkPhone(param){
    let reg = util.regexConfig().phone; 
    let eValue = param.detail.value.trim();
    let eValueLenth = parseInt(eValue.length);
    console.log(!reg.test(eValue))
    if(!reg.test(eValue) ){
      this.setData({
        tipShow: 'error',
        tipText: '手机号有误,请重新输入！',
      })
      showWxTip('手机号有误请重新输入！')
    } else {
      this.setData({
        tipShow: 'hide',
        tipText: '',
      })
      console.log(eValue);
      return true;
    };
  },
  // 验证码 验证
  checkCode(param){
    let eValue = param.detail.value.trim();
    if(eValue <= 0){
      this.setData({
        tipShow: 'error',
        tipText: '验证码不能为空！',
      })
    } else {
        this.setData({
          tipShow: 'hide',
          tipText: '',
        })
        console.log(eValue);
        return true;
      };
      console.log(eValue);
    console.log('请输入验证码');
  },

  getCode(param){
    console.log('获取验证码');
  },
  // 获取会员表单信息
  formSubmit: function( param ) {
    var param = param.detail.value;
    this.mysubmit(param);
    console.log("登录页提交",param)

    // let childrenName = param.detail.value.inputChildrenName; 
    // let childrenBirthday = param.detail.value.inputChildrenBirthday;
    // let inputPhone = param.detail.value.inputPhone; 
    // let inputCode = param.detail.value.inputCode; 

    // console.log(`${childrenName},${childrenBirthday},${inputPhone},${inputCode}`)
    // this.setData({
    //   isDialogModal: true,
    // })
  },
  mysubmit:function (param){    //验证帐号密码输入信息完整度
    // var flag = this.checkCode(param) && this.checkPhone(param) && this.checkCode(param) && this.checkBirthday(param);
    wx.showToast({
      title: '提交中',
      icon: 'loading',
      duration: 3000,
      mask: true
    });
    // if(flag){
    //     this.setLoginData1();
    //     this.checkUserInfo(param);
    // } 
  },
  // 提示层 确定
  bandCode(e) {
    console.log('跳转页面')
    wx.navigateTo({ url: '/pages/bind/code/code'})
  },

  // 重新填写
  hideModal(e) {
    this.setData({
      isDialogModal: false
    })
  },

})

// 调用 wx默认提示框
var showWxTip = function(text) {
  wx.showToast({
    title: text,
    icon: 'none',
    duration: 1000,
    mask:true
  });
};