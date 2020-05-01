const  util = require('./../../../utils/util.js');
var myMessage="";
Page({
  data:{
    loginBtnTxt:"登录",
    myMessage:"",
    loginBtnBgBgColor:"#0099FF",
    btnLoading:false,
    disabled:false,
    inputUserName: '',
    inputPassword: '',
    avatarUrl:"../../images/logo.jpg",
    logIcon:"../../images/logIcon.png",
    pwdIcon:"../../images/pwdIcon.png",
    curNav: 1,
    curIndex: 0
  },
 
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.clearStorageSync();   //清除缓存
  },
  formSubmit:function(e){  //form提交内容 对登录信息做判断
    var param = e.detail.value;
    this.mysubmit(param);
    console.log("登录页提交",param)
    

  },
  mysubmit:function (param){    //验证帐号密码输入信息完整度
    var flag = this.checkUserName(param) && this.checkPassword(param);
    console.log('信息填写',flag)
    if(flag){
        this.setLoginData1();
        this.checkUserInfo(param);
    } 
  },
  setLoginData1:function(){  //登录态提示
    this.setData({
      loginBtnTxt:"登录中",
      disabled: !this.data.disabled,
      loginBtnBgBgColor:"#999",
      btnLoading:!this.data.btnLoading
    });
  },
  setLoginData2:function(){
    this.setData({
      loginBtnTxt:"登录",
      disabled: !this.data.disabled, 
      loginBtnBgBgColor:"#0099FF",
      btnLoading:!this.data.btnLoading
    });
  },
  checkUserName:function(param){
    var userid = util.regexConfig().cards; //姓名正则检验
    var inputUserName = param.username.trim(); //输入信息确认
    var wellname = param.username.length; //字符长度确认
    console.log(inputUserName, wellname)
    if (userid.test(inputUserName) ){ //xxx.test是检测函数。
      return true;
    }else{
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '姓名输入错误'
      });
      return false;
    }
  },
  checkPassword:function(param){
    var phone = util.regexConfig().phone; //校验手机号
    var inputPassword = param.password.trim();  //核对输入手机号
    var password = param.password.length;
    if (phone.test(inputPassword)  && password == 11 ){ //验证手机号格式及长度
      return true;
    }else{
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '手机号输入错误'
      });
      return false;
    }
  },
  checkUserInfo:function(param){
    var username = param.username.trim();
    var password = param.password.trim();
    var goodname = param.username;   //提取帐号
    var goodpass = param.password;   //提取密码
    var that = this;
    if (username == goodname && password == goodpass){ //无需存贮，只为验证
        setTimeout(function(){
          wx.showToast({
            title: '',
            icon: 'success',
            duration: 1500
          });
          that.setLoginData2();
          that.redirectTo(param);
        },2000);
    }else{
      wx.showModal({
        title: '提示',
        showCancel:false,
        content: '信息有误，请重新输入'
      });
      this.setLoginData2();
    }
  },
  redirectTo:function(param){
    //需要将param转换为字符串
    param = JSON.stringify(param);
    wx.redirectTo({
      url: '../main/index?param='+ param//参数只能是字符串形式，不能为json对象
    })
  },
  onGotUserInfo: function (e) {  //授权过后不再调起
      // console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
    var tip = e.detail.userInfo;
    if (tip == undefined){
      wx.redirectTo({
        url: '../login/index',
      })
    }else{
      wx.setStorage({   //存储数据并准备发送给下一页使用
        key: "myMessage",
        data: e.detail.userInfo,
      })
    }
  },
 
})