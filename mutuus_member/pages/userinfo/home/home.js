"use strict";
import * as echarts from './../../../ec-canvas/echarts';
const chartOption = require('./../../../comm/chartoption.js');
// 初始化云
const db = wx.cloud.database();
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    ectheme: '', //图表全局配置参数
    isDisposed: false, //是否显示charts
    bodyweight:{
      id: "112",
      title: '体重数据展示',
      time: '',
      appraisal: {
        percent: '',
        introduction: '',
      },

      ec_type: 'bar',
      ec_title: '',
      ec_color: [],
      ec_xAxis: '',
      ec_series: '',
    },
    bodyheight:{
      id: "113",
      title: '身高数据展示',
      time: '',
      appraisal: {
        percent: '',
        introduction: '',
      },

      ec_type: 'line',
      ec_color: [],
      ec_title: '',
      ec_xAxis: '',
      ec_series: '',
    },
    bodyweightData: {
      onInit: '',
    },
    bodyheightData: {
      onInit: '',
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
      // console.log(that)
      // 体重
      that.getChartValueWeight()
      this.ecComponent = this.selectComponent('#mychart-bodyweight');
      that.initChartWeight()
      // 身高
      that.getChartValueHeight()
      this.ecComponent = this.selectComponent('#mychart-bodyheigh');
      that.initChartHeight()

      // console.log( 'attached bodyweight\n',that.data.bodyweight.ec_series,)
    },
    moved: function () {
      console.log("lifetimes:moved")
    },
    detached: function () {
      console.log("lifetimes:detached")
    },
  },
  pageLifetimes: {
    show: function() {
      let that = this;
      // 页面被展示
      // console.log( 'show bodyweight\n',that.data.bodyweight.ec_series,)
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },

  methods: {
    // 图表 初始化 体重
    initChartWeight: function(chart) {
      let that = this;
      // console.log(that.data.sunburstData, '读取缓存 sunburstData')
      this.ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        that.setWeightOption(chart);
        this.chart = chart;
        this.setData({
          isDisposed: false
        });
        return chart;
      });
    },

    // 图表 初始化 体重
    initChartHeight: function(chart) {
      let that = this;
      // console.log(that.data.sunburstData, '读取缓存 sunburstData')
      this.ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        that.setHeightOption(chart);
        this.chart = chart;
        this.setData({
          isDisposed: false
        });
        return chart;
      });
    },

    // 图表 获取数据 体重
    getChartValueWeight: function(){
      let that = this;

      wx.getStorage({
        key: 'db_bodyweight',
        success(res){
          console.log( '%c 本地 db_bodyweight 调用成功：\n','font-size:14px;color:green;',res.data,)
          that.setData({
            bodyweight:{
              title: res.data.title,
              time: res.data.time,

              ec_type: res.data.ec_type,
              ec_title: res.data.ec_title,
              ec_xAxis: res.data.ec_xAxis,
              ec_series: res.data.ec_series,
              ec_color: res.data.theme.color,
            },
          })

          that.data.bodyweight.ec_series.forEach((i,index) => {
            // console.log(i,index)
            i.type = res.data.ec_type
            i.color = res.data.theme.color[index]
          })
          console.log(that.data.bodyweight.ec_series,)
        },
        fail(res){
          // console.log(res.data, '本地 db_bodyweight 调用失败')
          // 云 获取 db_bodyweight
          db.collection('db_bodyweight').where({
            port: 'bodyweight',
            id: '0001',
          }).get({
            success: function(pram) {
              console.log( 'db_bodyweight success \n',pram.data[0],)
              wx.setStorage({
                key: 'db_bodyweight',
                data: pram.data[0]
              });

              that.setData({
                bodyweight:{
                  title: pram.data[0].title,
                  time: pram.data[0].time,

                  ec_type: pram.data[0].ec_type,
                  ec_title: pram.data[0].ec_title,
                  ec_xAxis: pram.data[0].ec_xAxis,
                  ec_series: pram.data[0].ec_series,
                  ec_color: pram.data[0].theme.color,
                },
              })
              that.data.bodyweight.ec_series.forEach((i,index) => {
                console.log(i,index)
                i.type = pram.data[0].ec_type
                i.color = pram.data[0].theme.color[index]
              })
              console.log( '缓存 bodyweight 调用成功 \n',that.data.bodyweight.ec_series,)

            },
          })
          return;
        },
        complete(res){
          console.log('local complete \n','缓存 bodyweight ',that.data.bodyweight.ec_series)
        }
      })
    },
    // 图表 参数附值 体重
    setWeightOption: function(chart){
      let that = this;
      console.log('setWeightOption函数 调用 \n',that.data.bodyweight.ec_series,)

      const option = {
        tooltip: chartOption.tooltip,
        legend: {
          color: that.data.bodyweight.ec_color,
          data: that.data.bodyweight.ec_title,
          left: 'center',
          top: 'top'
        },
        grid: chartOption.grid,
        xAxis: {
          type: 'category',
          data: that.data.bodyweight.ec_xAxis,
          axisTick: {alignWithLabel: true},
          axisLabel:{rotate:45},
        },
        yAxis: chartOption.yAxis,
        dataZoom: chartOption.dataZoom,
        series: that.data.bodyweight.ec_series,
      };

      chart.setOption(option);
    },
    // 图表 获取数据 身高
    getChartValueHeight: function(){
      let that = this;

      wx.getStorage({
        key: 'db_bodyheight',
        success(pram){
          // console.log( '%c 本地 db_bodyheight 调用成功：\n','font-size:14px;color:green;',res.data,)
          let value = pram.data;

          that.setData({
            bodyheight:{
              title: value.title,
              time: value.time,
              appraisal: {
                percent: value.appraisal.percent,
                introduction: value.appraisal.introduction,
              },

              ec_type: value.ec_type,
              ec_title: value.ec_title,
              ec_xAxis: value.ec_xAxis,
              ec_series: value.ec_series,
              ec_color: value.theme.color,
            },
          })

          that.data.bodyheight.ec_series.forEach((i,index) => {
            // console.log(i,index)
            i.type = value.ec_type
            i.color = value.theme.color[index]
          })
          console.log(that.data.bodyheight.ec_series,)
        },
        fail(res){
          // console.log(res.data, '本地 db_bodyheight 调用失败')
          // 云 获取 db_bodyheight
          db.collection('db_bodyheight').where({
            port: 'bodyheight',
            id: '0001',
          }).get({
            success: function(pram) {
              console.log( 'db_bodyheight success \n',pram.data[0],)
              let value = pram.data[0]
              wx.setStorage({
                key: 'db_bodyheight',
                data: value
              });

              that.setData({
                bodyheight:{
                  title: value.title,
                  time: value.time,
                  appraisal: {
                    percent: value.appraisal.percent,
                    introduction: value.appraisal.introduction,
                  },

                  ec_type: value.ec_type,
                  ec_title: value.ec_title,
                  ec_xAxis: value.ec_xAxis,
                  ec_series: value.ec_series,
                  ec_color: value.theme.color,
                },
              })
              that.data.bodyheight.ec_series.forEach((i,index) => {
                console.log(i,index)
                i.type = value.ec_type
                i.color = value.theme.color[index]
              })
              console.log( '缓存 bodyheight 调用成功 \n',that.data.bodyheight.ec_series,)

            },
          })
          return;
        },
        complete(res){
          console.log('local complete \n','缓存 bodyheight ',that.data.bodyheight.ec_series)
        }
      })
    },
    // 图表 参数附值 体重
    setHeightOption: function(chart){
      let that = this;
      console.log('setHeightOption 函数 调用 \n',that.data.bodyheight.ec_series,)

      const option = {
        tooltip: chartOption.tooltip,
        legend: {
          color: that.data.bodyheight.ec_color,
          data: that.data.bodyheight.ec_title,
          left: 'center',
          top: 'top'
        },
        grid: chartOption.grid,
        xAxis: {
          type: 'category',
          data: that.data.bodyheight.ec_xAxis,
          axisTick: {alignWithLabel: true},
          axisLabel:{rotate:45},
        },
        yAxis: chartOption.yAxis,
        dataZoom: chartOption.dataZoom,
        series: that.data.bodyheight.ec_series,
      };

      chart.setOption(option);
    },

  }
})