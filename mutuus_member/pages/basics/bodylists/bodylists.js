"use strict";
import * as echarts from './../../../ec-canvas/echarts';
const sunburstDB = require('./../../../comm/sunburst.js');
const randarDB = require('./../../../comm/randar.js');
const lineDB = require('./../../../comm/line.js');
const barDB = require('./../../../comm/bar.js');

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
    sunburst: {
      onInit: '',
    },
    randar: {
      onInit: '',
    },
    line: {
      onInit: '',
    },
    bar: {
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
      // console.log(that)
      // 旭日图调用
      that.setData({
        sunburst: {
          onInit: that.__proto__.initSunburs,
        },
        randar: {
          onInit: that.__proto__.initRandar,
        },
        line: {
          onInit: that.__proto__.initLine,
        },
        bar: {
          onInit: that.__proto__.initBar,
        },
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
    initSunburs: function (canvas, width, height, dpr) {
      const sunburs = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      let option = {
        series: {
          type: 'sunburst',
          sort: null,
          data: sunburstDB.sunburstData,
          radius: ['15%', '100%'],
          label: {
            rotate: 'radial',
            fontSize: '10',
          },
        }
      };
      canvas.setChart(sunburs);
      sunburs.setOption(option);
      return sunburs;
    },
    initRandar: function (canvas, width, height, dpr) {
      const randar = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      canvas.setChart(randar);
      randar.setOption(randarDB.option);
      return randar;
    },
    initLine: function (canvas, width, height, dpr) {
      const line = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      canvas.setChart(line);
      line.setOption(lineDB.option);
      return line;
    },
    initBar:  function (canvas, width, height, dpr) {
      const line = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      canvas.setChart(line);
      line.setOption(barDB.option);
      return line;
    },
    showUrl: function (e) {
      console.log(`调用模版：${e.currentTarget.dataset.layout}`);
    },
  }
})