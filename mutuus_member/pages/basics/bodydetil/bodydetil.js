"use strict";
import * as echarts from './../../../ec-canvas/echarts';
const app = getApp();
const db = wx.cloud.database();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    bodydetilData: '',
    ecHysiqueData: {
      "title": "",
      "subtitle": "",
      "time": "",
      "gradedetil": [],
      "ec_series_type": "",
      "ec_legend_data": [],
      "ec_series_data": [],
      "ec_indicator":[],
      "theme": {
        "color": []
      }
    },
    ec_hysique: {
      lazyLoad: true
    },
    isDisposed: false,
  },
  lifetimes: {
    attached: function () {
      let that = this;

      that.ecComponent = that.selectComponent('#mu-physique');
      if (!wx.getStorageSync("db_echysique")) {
        console.log("不存在 db_echysique getCloudEchysique");
        that.getCloudEchysique()
      } else {
        console.log("存在 db_echysique getStorageEchysique");
        that.getStorageEchysique()
      }

      if (!wx.getStorageSync("db_bodydetil")) {
        // console.log("不存在 db_bodydetil");
        that.getCloudBodydetilData()
      } else {
        // console.log("存在 db_bodydetil");
        that.getStorageBodydetilData()
      }
    },
  },
  methods: {
    getStorageBodydetilData: function(){
      let that = this;
      wx.getStorage({
        key: 'db_bodydetil',
        success (param) {
          let value = param.data
          // console.log(value)
          that.setData({
            bodydetilData: value
          })
        }
      })
    },
    getCloudBodydetilData: function() {
      let that = this;
      // console.log('getBodydetilData')
      // 云 获取 sunburst数据
      db.collection('db_bodydetil').where({
        port: 'bodydetil',
      }).get({
        success: function(param) {
          let value = param.data[0]
          // console.log(param.data[0])
          wx.setStorage({
            key: 'db_bodydetil',
            data: value
          })
          that.setData({
            bodydetilData: value
          })
        }
      })
    },
    // 初始化 图表
    initRadarEchysique: function() {
      let that = this;
      console.log(that.data.ecHysiqueData, '读取缓存 ecHysiqueData')
      this.ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        that.setEchysiqueOption(chart);
        this.chart = chart;
        this.setData({
          isDisposed: false
        });
        return chart;
      });
    },
    setEchysiqueOption: function(chart){
      let that = this
      // console.log(that.data.ecHysiqueData)
      let vData = that.data.ecHysiqueData
      let option = {
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
    getCloudEchysique: function(){
      let that = this;
      console.log('getCloudSunburstData')
      // 云 获取 sunburst数据
      db.collection('db_echysique').where({
        port: 'echysique',
      }).get({
        success: function(param) {
          console.log('getCloudSunburstData success')
          let that = this
          let value = param.data[0]
          // console.log(value)
          wx.setStorage({
            key: 'db_echysique',
            data: value
          })
        },
        fail(param){
          console.log(param)
        },
        complete(param){
          that.getStorageEchysique()
        }
      })

    },
    getStorageEchysique: function () {
      let that = this;
      wx.getStorage({
        key: 'db_echysique',
        success(param){
          let value = param.data;
          // console.log(value)
          that.setData({
            // ecHysiqueData: value,
            ecHysiqueData: {
              "title": value.title,
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
          that.initRadarEchysique()
        }
      })
    }
  }
})