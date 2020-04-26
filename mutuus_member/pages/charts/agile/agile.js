"use strict";
import * as echarts from './../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  const typeOneColor = {
    color: '#f60'
  },
  typeOneColorSubTwo1 = {
    color: '#ff7a51'
  },
  typeOneColorSubTwo2 = {
    color: '#b65537'
  },
  typeOneColorSubTwo3 = {
    color: '#71331f'
  },
  typeOneColorSubThree1 = {
    color: '#ffc7b6'
  },
  typeOneColorSubThree2 = {
    color: '#c39181'
  },
  typeOneColorSubThree3 = {
    color: '#85655a'
  },

  typeTwoColor = {
    color: '#0000ff'
  },
  typeTwoColorSubTwo1 = {
    color: '#4141f3'
  },
  typeTwoColorSubTwo2 = {
    color: '#a6a6f5'
  },
  typeTwoColorSubThree1 = {
    color: '#36369b'
  },
  typeTwoColorSubThree2 = {
    color: '#7e7ec1'
  };

  var data = [
    {
      name: '敏捷',
      itemStyle: typeOneColor
    },
    {
      name: '柔韧',
      children: [
      {
        value: 65,
        name: '关节灵活性',
        children: [
          {
            value: 5,
            name: '颈关节灵活性',
            itemStyle: typeTwoColorSubThree1
          }, 
          {
            value: 20,
            name: '脊柱关节灵活性',
            itemStyle: typeTwoColorSubThree2
          },
          {
            value: 20,
            name: '肩关节灵活性',
          },
          {
            value: 10,
            name: '手肘关节灵活性',
          },
          {
            value: 5,
            name: '手腕关节灵活性',
          },
          {
            value: 25,
            name: '髋关节灵活性',
          },
          {
            value: 10,
            name: '膝关节灵活性',
          },
          {
            value: 5,
            name: '脚踝关节灵活性',
          }
        ],
        itemStyle: typeTwoColorSubTwo2
      },
      ],
      itemStyle: typeTwoColor
    }
  ];

  var option = {
    series: {
      radius: ['15%', '80%'],
      type: 'sunburst',
      sort: null,
      highlightPolicy: 'ancestor',
      data: data,
      label: {
        rotate: 'radial'
      },
      levels: [],
      itemStyle: {
        color: '#e9e9e9',
        borderWidth: 1
      }
    }
  };

  chart.setOption(option);
  return chart;
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ecAgile: {
      onInit: initChart
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(res) {
    console.log(res.ecAgile.onInit)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },
})