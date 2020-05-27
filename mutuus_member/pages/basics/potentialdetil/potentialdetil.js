"use strict";
import * as echarts from './../../../ec-canvas/echarts';
const db = wx.cloud.database();
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    isDisposed: false,
    ecchart_study:{
      lazyLoad: true
    },
    ecchart_tenacity:{
      lazyLoad: true
    },

    ec_study_data: {
      "title": "学习力维度",
      "subtitle": "",
      "time": "",
      "gradedetil": [],
      "ec_series_type": "",
      "ec_legend_data": [],
      "ec_series_data": [],
      "ec_indicator":[],
      "theme": {
        "color": []
      },
      introduction: "学习力是指孩子在学习新知识、新技能时表现出的学习潜力，这个潜力关系到学习效率以及融会贯通的能力。下面的六维图是我们评估学习力的所有因素中最核心的六个素质。",
    },
    ec_tenacity_data: {
      title: '坚韧力维度',
      introduction: "坚韧力是指孩子在学习和生活的过程中表现出的坚韧性，比如意志力、逆境商（挫折商）等等。学习力如果是发动机，坚韧力就是供能系统，是学习力持续输出的重要前提，是决定孩子未来成就的核心素质。",
      "subtitle": "",
      "time": "",
      "gradedetil": [],
      "ec_series_type": "",
      "ec_legend_data": [],
      "ec_series_data": [],
      "ec_indicator":[],
      "theme": {
        "color": []
      },
    },
    potential_detil: {}
  },
  // 组件生命周期
  lifetimes: {
    attached: function () {
      // console.log(this.data.portnav)
      let that = this;

      if (!wx.getStorageSync("db_potentialdetil")) {
        console.log("不存在 db_potentialdetil getCloudPotentialdetil");
        that.getCloudPotentialdetil()
      } else {
        console.log("存在 db_potentialdetil getStoragePotentialdetil");
        that.getStoragePotentialdetil()
      }
      that.ecComponentRadarStudy = that.selectComponent('#mychartRadarStudy');
      that.ecComponentTenacity = that.selectComponent('#mychartRadarTenacity');

      if (!wx.getStorageSync("db_potential_study")) {
        console.log("不存在 db_potential_study getCloudPotentialStudy");
        that.getCloudPotentialStudy()
      } else {
        console.log("存在 db_potential_study getStoragePotentialStudy");
        that.getStoragePotentialStudy()
      }

      if (!wx.getStorageSync("db_potential_tenacity")) {
        console.log("不存在 db_potential_tenacity getCloudPotentiaTenacity");
        that.getCloudPotentiaTenacity()
      } else {
        console.log("存在 db_potential_tenacity getStoragePotentiaTenacity");
        that.getStoragePotentiaTenacity()
      }
    },
    moved: function () {
      // console.log("lifetimes:moved")
    },
    detached: function () {
      // console.log("lifetimes:detached")
    },
  },
  pageLifetimes: {
    show: function() {
      // console.log('页面显示')
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
    // 图表 学习力维度 初始化
    initRadarStudy: function(chart) {
      let that = this;
      console.log("setRadarStudyOption \n",that.data.ecchart_study)
      this.ecComponentRadarStudy.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        that.setRadarStudyOption(chart);
        this.chart = chart;
        this.setData({
          isDisposed: false
        });
        return chart;
      });
    },
    // 图表 学习力维度 设置参数
    setRadarStudyOption: function(chart){
      let that = this;
      let vData = that.data.ec_study_data
      console.log("setRadarStudyOption \n",that.data.ec_study_data)
      const option = {
        tooltip: {
          trigger: 'item',
          position: ['10%', '20%'],
          formatter:function (params) {
            const tit = vData.ec_indicator
            var returnStr = params.name+ '\n';
            for(var i=0;i<tit.length;i++){
              if(i === tit.length-1) {
                returnStr+=tit[i].name+': ' + params.value[i];
              } else {
                returnStr+=tit[i].name+': ' + params.value[i]+'\n';
              }
            }
            return returnStr;}
        },
        color: vData.theme.color,
        legend: {
            data: vData.ec_legend_data,
        },
        radar: {
            indicator: vData.ec_indicator,
            center: ['50%', '60%'],
            radius: 100
        },
        series: [{
            name: vData.subtitle,
            type: 'radar',
            data: vData.ec_series_data
        }]
      };
      chart.setOption(option);
    },
    // 图表 坚韧力维度 初始化
    initRadarTenacity: function(chart) {
      let that = this;
      this.ecComponentTenacity.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        that.setRadarTenacityOption(chart);
        this.chart = chart;
        this.setData({
          isDisposed: false
        });
        return chart;
      });
    },
    // 图表 坚韧力维度 设置参数
    setRadarTenacityOption: function(chart){
      let that = this;
      let vData = that.data.ec_tenacity_data
      const option = {
        tooltip: {
          trigger: 'item',
          position: ['10%', '20%'],
          formatter:function (params) {
            const tit = vData.ec_indicator
            var returnStr = params.name+ '\n';
            for(var i=0;i<tit.length;i++){
              if(i === tit.length-1) {
                returnStr+=tit[i].name+': ' + params.value[i];
              } else {
                returnStr+=tit[i].name+': ' + params.value[i]+'\n';
              }
            }
            return returnStr;}
        },
        color: vData.theme.color,
        legend: {
            data: vData.ec_legend_data,
        },
        radar: {
            indicator: vData.ec_indicator,
            center: ['50%', '60%'],
            radius: 100
        },
        series: [{
            name: vData.subtitle,
            type: 'radar',
            data: vData.ec_series_data
        }]
      };
      chart.setOption(option);
    },
    // getCloudPotentialdetil
    getCloudPotentialdetil: function(){
      let that = this;
      // console.log('getCloudPotentialdetil')
      // 云 获取 sunburst数据
      db.collection('db_potentialdetil').where({
        port: 'potentialdetil',
      }).get({
        success: function(param) {
          let that = this
          let value = param.data[0]
          console.log(value)
          wx.setStorage({
            key: 'db_potentialdetil',
            data: value
          })
        },
        fail(param){
          console.log(param)
        },
        complete(param){
          that.getStoragePotentialdetil()

        }
      })
    },
    getStoragePotentialdetil: function () {
      let that = this;
      wx.getStorage({
        key: 'db_potentialdetil',
        success(param){
          let value = param.data;
          // console.log(value)
          that.setData({
            // ecHysiqueData: value,
            potential_detil: value
          })
        }
      })
    },
    // 云端 学习力维度 获取参数
    getCloudPotentialStudy: function(){
      let that = this;
      // console.log('getCloudPotentialdetil')
      // 云 获取 sunburst数据
      db.collection('db_potential_study').where({
        port: 'potential_study',
      }).get({
        success: function(param) {
          let that = this
          let value = param.data[0]
          console.log(value)
          wx.setStorage({
            key: 'db_potential_study',
            data: value
          })
        },
        fail(param){
          console.log(param)
        },
        complete(param){
          that.getStoragePotentialStudy()
        }
      })
    },
    getStoragePotentialStudy: function () {
      let that = this;
      wx.getStorage({
        key: 'db_potential_study',
        success(param){
          let value = param.data;
          console.log(value)
          that.setData({
            ec_study_data: {
              "title": value.title,
              "subtitle": value.subtitle,
              "introduction": value.introduction,
              "time": value.time,
              "gradedetil": value.gradedetil,
              "ec_series_type": value.ec_series_type,
              "ec_legend_data": value.ec_legend_data,
              "ec_series_data": value.ec_series_data,
              "ec_indicator":value.ec_indicator,
              "theme": {
                "color": value.theme.color
              }
            }
          })
          that.initRadarStudy()
        }
      })
    },
    // 云端 坚韧力维度 获取参数
    getCloudPotentiaTenacity: function(){
      let that = this;
      // console.log('getCloudPotentialdetil')
      // 云 获取 sunburst数据
      db.collection('db_potential_tenacity').where({
        port: 'potential_tenacity',
      }).get({
        success: function(param) {
          let that = this
          let value = param.data[0]
          console.log(value)
          wx.setStorage({
            key: 'db_potential_tenacity',
            data: value
          })
        },
        fail(param){
          console.log(param)
        },
        complete(param){
          that.getStoragePotentiaTenacity()
        }
      })
    },
    getStoragePotentiaTenacity: function () {
      let that = this;
      wx.getStorage({
        key: 'db_potential_tenacity',
        success(param){
          let value = param.data;
          console.log(value)
          that.setData({
            ec_tenacity_data: {
              "title": value.title,
              "introduction": value.introduction,
              "subtitle": value.subtitle,
              "time": value.time,
              "gradedetil": value.gradedetil,
              "ec_series_type": value.ec_series_type,
              "ec_legend_data": value.ec_legend_data,
              "ec_series_data": value.ec_series_data,
              "ec_indicator":value.ec_indicator,
              "theme": {
                "color": value.theme.color
              }
            }
          })
          that.initRadarTenacity()
        }
      })
    }
  }
})
