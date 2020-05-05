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
    phone: '',
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function (res) {
      let that = this;
      wx.getStorage({
        key: 'userInfo',
        success: function(res){
          let data = res.data
          that.setData({
            phone: data.phone,
          })
        }
      })
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
    rebind(e) {
      console.log('跳转页面')
      wx.navigateTo({ url: '/pages/bind/home/home', })
    },
    bindMember(e) {
      console.log('跳转页面')
      wx.navigateTo({ url: '/pages/basics/home/home', })
    }
  }
})

