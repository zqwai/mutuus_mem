// 验证
const  util = require('./../../../utils/util.js');
// 初始化云
const db = wx.cloud.database();
let app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  data:{
    // 组件全局
    logged: false,
    showLoading: '',
    // 表单参数
    username: '',
    userbirthday: '',
    phone: '',
    code: '',
    // 表单-日期
    pickerdate: '-',
    codeUrl: '1',
    // 授权
    userInfo: [],
    nickName: '请先授权，然后填写表单！',
    avatarUrl: './../../../static/images/home/user-unlogin.png',
    // 表单-提示
    tipShow: 'hide',
    tipText: '',
    // 表单-input
    isInputDisabled: true,
    inputBgColor: 'd3d3d3',
    // 表单-按钮
    isDisabled: true,
    ShowCodeBtn: 'block',
    ShowCodepic: 'hide',

    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      console.log('lifetimes_attached')

      // 获取授权的用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                this.setData({
                  avatarUrl: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName,
                  isInputDisabled: false,
                  inputBgColor: 'white',
                  userInfo: res.userInfo
                })
              }
            })
          }
        }
      });
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
    // 授权信息
    bindGetUserInfo: function(param) {
      if (!this.data.logged && param.detail.userInfo) {
        this.setData({
          logged: true,
          avatarUrl: param.detail.userInfo.avatarUrl,
          nickName: param.detail.userInfo.nickName,
          userInfo: param.detail.userInfo,
          isInputDisabled: false,
          inputBgColor: 'white',
        })
        //   // console.log(param.detail.cloudID)
        //   // console.log(param.detail.encryptedData)
        //   // console.log(param.detail.errMsg)
        //   // console.log(param.detail.rawData)
        //   // console.log(param.detail.userInfo)
        app.globalData.userInfo = param.detail.userInfo,
        // 写入缓存
        wx.setStorage({
          data: param.detail.userInfo,
          key: 'userInfo',
        });
      }
    },
    // 会员绑定
    checkForm: function (param) {
      let that = this;
      console.log(param);
    },
    // 表单提交
    FormSubmit (param) {
      let that = this;
      var newObj = {};
      // 合并对象
      Object.assign(newObj,that.data.userInfo,param.detail.value);
      console.log(newObj);
      // 写入本地缓存
      wx.setStorage({
        key: 'userInfo',
        data: newObj
      })
      // 写入全局 userInfo
      app.globalData.userInfo = newObj;
      console.log(app.globalData.userInfo)

      // db 写入数据库
      db.collection('userInfo').add({
        data: newObj,
      }).then(res =>{
        if (res.statusCode === 200) {
          wx.showToast({
            title: '绑定成功',
            icon: 'none',
            duration: 1000
          })
        } else if (res.statusCode === 501) {
          wx.showToast({
            title: `绑定失败，${res.data.msg}`,
            icon: 'none',
            duration: 1000
          })
        } else {
          wx.showToast({
            title: '绑定失败',
            icon: 'none',
            duration: 1000
          })
        }
        wx.navigateTo({ url: '/pages/bind/code/code'})
        // this.setState({
        //   showLoading: false
        // })
      });
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
      };

      // 验证 是否同名
      db.collection('userInfo').where({
        username: value
      }).get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res)
          if(res.data.length > 0){
            that.setData({
              tipShow: 'error',
              tipText: '姓名已存在！',
              isDisabled: true
            })
            return false;
          }
        }
      })
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
      };

      // 验证 是否同手机
      db.collection('userInfo').where({
        phone: value
      }).get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data.length)
          if(res.data.length > 0){
            that.setData({
              tipShow: 'error',
              tipText: '手机号码已被绑定！',
              isDisabled: true
            })
          }
        }
      })
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
  }
})