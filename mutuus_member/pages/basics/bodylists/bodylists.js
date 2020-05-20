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
    isuse: false,
    // 调用模版
    layout: {
      bodydetil: 'bodydetil',
      bodyheight: 'bodyheight',
      posturedetil: 'posturedetil',
      potentialdetil: 'potentialdetil',
    },
    sunburstData: '',

    isDisposed: false,
    sunburst: {
      lazyLoad: true
    },
    imageL: './../../../static/images/home/chart-1.png',
    imageR: './../../../static/images/home/chart-2.png',
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
  // 组件生命周期
  lifetimes: {
    attached: function () {
      // console.log("lifetimes:attached")
      let that = this;

      if (!wx.getStorageSync("db_sunburst")) {
        console.log("不存在 db_sunburst");
        that.getCloudSunburstData()
      } else {
        console.log("存在 db_sunburst");
        that.getStorageSunburstData()
      }

      this.ecComponent = this.selectComponent('#mychart-sunburst');
      that.getSunburst();
    },
    moved: function () {
      // console.log("lifetimes:moved")
    },
    // 组件生命周期函数-在组件实例被从页面节点树移除时执行)
    detached: function () {
      // console.log("lifetimes:detached")
      // 图片消除
      this.setData({
        sunburstData: '',
        isDisposed: true,
      })
      console.log(this.data.isDisposed)
    },
  },
  pageLifetimes: {
    show: function() {
      // console.log('页面显示')
      var that = this;
      console.log('pageLifetimes show \n',that.data.sunburstData,)
    },
    hide: function() {
      // 页面被隐藏
      console.log('页面被隐藏')
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log("页面尺寸变化")
    }
  },

  methods: {
    // 创建旭日图
    getSunburst: function(chart) {
      let that = this;
      // console.log(that.data.sunburstData, '读取缓存 sunburstData')
      this.ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        that.setSunburstOption(chart);
        this.chart = chart;
        this.setData({
          isDisposed: false
        });
        return chart;
      });
    },
    // 旭日图 设置参数
    setSunburstOption: function(chart){
      let that = this;
      console.log('sunburstData调用 success \n',that.data.sunburstData.name,)
      const option = {
            series: {
              radius: ['15%', '100%'],
              type: 'sunburst',
              sort: null,
              highlightPolicy: 'ancestor',
              data: that.data.sunburstData.name,
              label: {
                rotate: 'radial'
              },
              levels: [],
              itemStyle: {
                  // color: '#ddd',
                  borderWidth: 2
              }
            }
          };
          chart.setOption(option);
    },

    getCloudSunburstData: function(){
      let that = this;
      // 云 获取 sunburst数据
      db.collection('db_sunburst').where({
        port: 'sunburst',
      }).get({
        success: function(pram) {
          // pram.data 是包含以上定义的两条记录的数组
          const value = pram.data[0]
          // console.log('db_sunburst success\n',value)
          that.setData({
            sunburstData: value,
          })

          wx.setStorage({
            key: 'db_sunburst',
            data: value
          })
          // sunburstData 数组更新
          that.data.sunburstData.name.forEach((i,index) => {
            // console.log(i,index)
            i.itmeStyle = value.theme.color[0]
            i.value = value.value
            i.children.forEach((j) => {
              if(i.children == undefined || i.children == ''){
                return
              } else{
                // console.log(j.children)
                j.itmeStyle = value.theme.color[1]
                j.value = value.value / i.children.length
                if(j.children == undefined || j.children == ''){
                  // console.log('err')
                  return false
                } else{
                j.children.forEach((h) => {
                    // console.log(h)
                    h.itmeStyle = value.theme.color[2]
                    h.value = value.value / i.children.length / j.children.length
                  })
                }
              }
            })
          })
          // console.log('云 sunburstData new \n',that.data.sunburstData,)
        }
      });
    },
    // 旭日图 获取数据
    getStorageSunburstData: function(){
      let that = this;
      wx.getStorage({
        key: 'db_sunburst',
        success(res){
          const value = res.data
          console.log('本地Storage \n', value)
          // console.log(e)
          that.setData({
            sunburstData: value,
          })
          // // 旭日图 data格式
          that.data.sunburstData.name.forEach((i,index) => {
            // console.log(i,index)
            i.itmeStyle = {color:value.theme.color[0]}
            i.value = value.value
            i.children.forEach((j) => {
              if(i.children == undefined || i.children == ''){
                return
              } else{
                // console.log(j.children)
                j.itmeStyle = {color:value.theme.color[1]}
                j.value = value.value / i.children.length
                if(j.children == undefined || j.children == ''){
                  // console.log('err')
                  return false
                } else{
                j.children.forEach((h) => {
                    // console.log(h)
                    h.itmeStyle = {color:value.theme.color[2]}
                    h.value = value.value / i.children.length / j.children.length
                  })
                }
              }
            })
          })
          // console.log(that.data.sunburstData, '本地getStorage success')
        },
        fail(res){
          console.error(res)
        },
        complete(res){
          console.log('本地complete',res)
        }
      });
    },

    showUrl: function (e) {
      console.log(`调用模版：${e.currentTarget.dataset.layout}`);
    },


  },

})
