// 验证
const  util = require('./../../../utils/util.js');
// 初始化云
const db = wx.cloud.database();
let app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    // 表单模版 显示
    isFormShow: false,
    isDialogModal: true,
    // 表单 value
    username: '张伟君',
    phone: '15612129032',
    phonecode: '',
    // phone btn
    getPhoneTime: 10,
    getNewCodeText: '获取验证码',
    getBtnDisabled: false,
    getCodeStatus: true,
    // submit
    isSubmitDisabled:true,
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function (res) {
      let that = this;
      let noPassPhone = util.noPassByMobile(that.data.phone);
      // console.log(noPassPhone);
      that.setData({
        phone: noPassPhone,
      });

      // 获取缓存的用户信息
      // wx.getStorage({
      //   key: 'userInfo',
      //   success: function(res){
      //     let data = res.data;
      //     that.setData({
      //       avatarUrl: data.avatarUrl,
      //       nickName: data.nickName,
      //       phone: data.phone,
      //     })
      //   }
      // })

    },
    moved: function () {
      console.log("lifetimes:moved")
    },
    // 组件生命周期函数-在组件实例被从页面节点树移除时执行)
    detached: function () {
      console.log("lifetimes:detached")
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log("pageLifetimes:show")
    },
    hide: function() {
      // 页面被隐藏
      console.log("pageLifetimes:hide")
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log("pageLifetimes:resize")
    }
  },
  methods: {
    getPoneCode(e) {
      let that = this;

      let timer = setInterval(function(){
        if(that.data.getPhoneTime > 0){
          that.setData({
            getPhoneTime: that.data.getPhoneTime-1,
            getNewCodeText: `还剩${that.data.getPhoneTime - 1}秒`,
            getCodeStatus: false,
            getBtnDisabled: true,
          })
        } else {
          clearInterval(timer);
          that.setData({
            getPhoneTime: 10,
            getNewCodeText: `重新获取验证码`,
            getBtnDisabled: false,
            getCodeStatus: true,
          })
        }
      },1000)

      // wx.request({
      //   url: '',
      //   data: {
      //     mobile: that.data.phone
      //   },
      //   success: function(res){
          
      //   },
      //   fail: function(res){
      //     wx.showToast({
      //       title: '请求失败',
      //       icon: 'loading',
      //       duration: 2000
      //     })
      //   }
      // })
    },
    // blur 监听手机验证码
    OnCodeChange(param){
      let that = this;
      let value = param.detail.value.trim()
      // if(e.phonecode)
      console.log(value)
      if(value.length == 0){
        wx.showToast({
          title: '验证码不能空着',
          icon: 'none',
          duration: 2000,
        })
      } else if(value.length > 0 && value.length < 4){
        wx.showToast({
          title: '验证码不得少于4字符',
          icon: 'none',
          duration: 2000,
        })
      } else {
        that.setData({
          isSubmitDisabled: false,
        })
      }
    },
    rebind(e) {
      console.log('跳转页面')
      wx.navigateTo({ url: '/pages/bind/home/home', })
    },
    FormSubmit(e) {
      console.log('跳转首页页面')
      wx.navigateTo({ url: '/pages/basics/home/home', })
    }
  }
})