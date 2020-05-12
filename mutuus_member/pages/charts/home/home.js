"use strict";
import * as echarts from './../../../ec-canvas/echarts';
// 初始化云
const db = wx.cloud.database();
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    // 调用模版
    layout: {
      layoutIdOne: 'bodydetil',
      layoutIdTwo: 'posturedetil',
      layoutIdThree: 'potentialdetil',
    },
    sunburstData:'',
    sunburstDataNew:'',
    // isLoaded: false,
    // isDisposed: false,
    sunburst: {
      onInit: '',
      lazyLoad: true
    },
    randar: {
      onInit: '',
    },
    line: {
      onInit: '',
    },
    // 身体素质综合评级
    bodymeasurements: {
      id: '11', //页面跳转id
      title: '身体素质综合评级',
      grade: 'B-',
      introduction: '',
      btnText:'点击查看完整评级',
      currentdetil: {
        title: '目前完成的测试总评数：',
        num: '29',
      },
      collectiondetil: {
        title: '采集数据被应用于综合评级的测试数为：',
        num: '21',
      },
    },
    // 体态评测数据展示
    posture: {
      id: '12', //页面跳转id
      title: '体态评测数据展示',
      date: '2020-04-20',
      name: '体态综合分',
      image: './../../../static/images/home/titai.jpg',
      num: '73.5',
    },
    // 当前潜力评估
    potential:{
      id: '13', //页面跳转id
      title: '当前潜力评价',
      updateTime: '2020.04.10',
      introduction: '根据孩子的表现特征，基于量表评测工具进行评价。评价从学习力和坚韧力两大维度展开，评测结果是基于客观特征的主观判断，是展开个性化教学的依据。',
      potentialCurrent: [
        {
          id: '0',
          title: '学习力',
          num: '51',
        },
        {
          id: '1',
          title: '协调',
          num: '32',
        },
      ],
    },
  },

  lifetimes: {
    attached: function () {
      let that = this;
      // 获取组件
      this.ecComponent = this.selectComponent('#mychart-sunburst');
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
      var that = this;
      // console.log(this)
    },
    hide: function() {
      // 页面被隐藏
      // console.log("pageLifetimes:hide")
    },
    resize: function(size) {
      // 页面尺寸变化
      // console.log("pageLifetimes:resize")
    }
  },

  methods: {

    getSunburstDb: function(e) {
      let that = this;
      console.log(that.data.sunburstData, '读取缓存 sunburstData')
    },

    getStorageSunburstDb:function( chart){
      let that = this
      wx.getStorage({
        key: 'sunburstDb',
        success(res){
          console.log(res.data)
          that.setData({
            sunburstData: res.data[0]
          })
          console.log(that.data.sunburstData, '本地getStorage success')
        },
        fail(res){
          // 云 获取 sunburst数据
          db.collection('sunburst').where({
            _id: 'cYP5hH5LwdYUUcHwFGx0KUjZ9cTw5zAis42BO1vGvNgOn89P'
          }).get({
            success: function(res) {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res)
              that.setData({
                sunburstData: res.data
              })
              wx.setStorage({
                key: 'sunburstDb',
                data: res.data
              })
              console.log(that.data.sunburstData, '云 success')
            }
          })
        },
        complete(res){

          that.data.sunburstData.title.forEach((i,index) => {
            console.log(i,index)
            i.itmeStyle = res.data[0].colors[0]
            i.value = res.data[0].value
            i.children.forEach((j) => {
              if(i.children == undefined || i.children == ''){
                return
              } else{
                // console.log(j.children)
                j.itmeStyle = res.data[0].colors[1]
                j.value = parseInt(res.data[0].value / i.children.length)
                if(j.children == undefined || j.children == ''){
                  // console.log('err')
                  return false
                } else{
                j.children.forEach((h) => {
                    // console.log(h)
                    h.itmeStyle = res.data[0].colors[2]
                    h.value = parseInt(res.data[0].value / j.children.length)
                  })
                }
              }
            })
          })
          console.log(that.data.sunburstData, '本地getStorage结束 success')
          // sunburstDataNew
          
        }
      });
    },

    showUrl: function (e) {
      console.log(`调用模版：${e.currentTarget.dataset.layout}`);
    },


  },

})
