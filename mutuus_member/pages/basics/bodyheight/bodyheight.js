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
      title: '',
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
      title: '',
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
      lazyLoad: true
    },
    bodyheightData: {
      lazyLoad: true
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
      console.log(that)
      this.ecComponentWeight = this.selectComponent('#mychart-bodyweight');
      this.ecComponentHeight = this.selectComponent('#mychart-bodyheigh');
      // 体重
      if (!wx.getStorageSync("db_bodyweight")) {
        console.log("不存在 db_bodyweight");
        that.getCloudBodyWeight()
      } else {
        console.log("存在 db_bodyweight");
        that.getStorageBodyWeight()
      }
      // console.log( 'attached bodyweight\n',that.data.bodyweight.ec_series,)

      // 身高
      if (!wx.getStorageSync("db_bodyheight")) {
        console.log("不存在 db_bodyheight");
        that.getCloudBodyHeight()
      } else {
        console.log("存在 db_bodyheight");
        that.getStorageBodyHeight()
      }
      // console.log( 'attached bodyheight\n',that.data.bodyheight.ec_series,)

    },
    moved: function () {
      console.log("lifetimes:moved")
    },
    detached: function () {
      console.log("lifetimes:detached")
      // 重置数据
      this.setData({
        isDisposed: true,
        bodyweight:{
          title: '',
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
          title: '',
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
      })
      console.log(this.data.isDisposed)
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
      this.ecComponentWeight.init((canvas, width, height, dpr) => {
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
      this.ecComponentHeight.init((canvas, width, height, dpr) => {
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
    getStorageBodyWeight: function(){
      let that = this;

      wx.getStorage({
        key: 'db_bodyweight',
        success(res){
          const value = res.data
          console.log( '%c 本地 db_bodyweight 调用成功：\n','font-size:14px;color:green;',value,)
          that.setData({
            bodyweight:{
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

          that.data.bodyweight.ec_series.forEach((i,index) => {
            // console.log(i,index)
            i.type = value.ec_type
            i.color = value.theme.color[index]
          })
          console.log(that.data.bodyweight.ec_series,)
          that.initChartWeight()
        },
        fail(res){
          // console.log(value, '本地 db_bodyweight 调用失败')
        },
        complete(res){
          console.log('local complete \n','缓存 bodyweight ',that.data.bodyweight.ec_series)
        }
      })
    },
    getCloudBodyWeight: function(){
      let that = this;
      // 云 获取 db_bodyweight
      db.collection('db_bodyweight').where({
        port: 'bodyweight',
        id: '0001',
      }).get({
        success: function(pram) {
          const value = pram.data[0]
          console.log( 'db_bodyweight success \n',value,)
          wx.setStorage({
            key: 'db_bodyweight',
            data: value
          });

          that.setData({
            bodyweight:{
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
          that.data.bodyweight.ec_series.forEach((i,index) => {
            // console.log(i,index)
            i.type = value.ec_type
            i.color = value.theme.color[index]
          })
          that.initChartWeight()
          console.log('bodyweight new \n',that.data.bodyweight.ec_series)
        },
        fail(res){
          console.log(res, '云 db_bodyweight 调用失败')
        },
        complete(res){
          console.log('local complete \n','缓存 bodyweight ',that.data.bodyweight.ec_series)
        }
      })

    },
    // 图表 参数附值 体重
    setWeightOption: function(chart){
      let that = this;
      console.log('setWeightOption 参数附值 体重 \n',that.data.bodyweight.ec_series,)

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
    // 本地 获取数据 身高
    getStorageBodyHeight: function(){
      let that = this;

      wx.getStorage({
        key: 'db_bodyheight',
        success(pram){
          let value = pram.data;
          console.log( '%c 本地 db_bodyheight 调用成功：\n','font-size:14px;color:green;',value)
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
          that.initChartHeight()
        },
        fail(res){
          console.log(res, '本地 db_bodyheight 调用失败')
        },
        complete(res){
          console.log('local complete \n','缓存 bodyheight ',that.data.bodyheight.ec_series)
        }
      })
    },
    // 云 获取数据 身高
    getCloudBodyHeight: function(){
      let that = this;
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
            // console.log(i,index)
            i.type = value.ec_type
            i.color = value.theme.color[index]
          })
          that.initChartHeight()
          console.log('bodyheight 格式化数组 \n',that.data.bodyheight.ec_series,);
        },
      })
    },

    // 图表 参数附值 体重
    setHeightOption: function(chart){
      let that = this;
      console.log('setHeightOption 函数 调用 \n',that.data.bodyheight.ec_series,);

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