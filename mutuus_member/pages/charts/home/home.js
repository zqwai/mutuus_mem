"use strict";
import * as echarts from './../../../ec-canvas/echarts';

const app = getApp();

const typeOneColor = {color:'#FF7A51'},
typeTwoColor = {color:'#ffa286'},
typeThreeColor = {color:'#ffc7B6'},
typeFourColor = {color:'#ffe7e0'},
typeNullColor = {color:'#e9e9e9'};

function initCharSunburst(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var data = [{
    value: 100,
    name: '敏捷',
    itemStyle: typeOneColor,
    children: [{
        value: 50,
        name: '速度',
        itemStyle: typeTwoColor,
      },
      {
        value: 50,
        name: '灵敏',
        itemStyle: typeTwoColor,
      }
    ],
  },
  {
    value: 100,
    name: '协调', 
    itemStyle: typeOneColor,
    children: [
      {
        value: 60,
        name: '肢体协调性',
        itemStyle: typeTwoColor,
      },
      {
        value: 20,
        name: '平衡性',
        itemStyle: typeTwoColor,
      },
      {
        value: 10,
        name: '动作节奏',
        itemStyle: typeTwoColor,
      },
      {
        value: 10,
        name: '空间定位',
        itemStyle: typeTwoColor,
      }
    ],
  },
  {
    value: 100,
    name: '柔韧',
    itemStyle: typeOneColor,
    children: [{
        value: 65,
        name: '关节灵活性',
        itemStyle: typeTwoColor,
      },
      {
        value: 35,
        name: '关节稳定性',
        itemStyle: typeTwoColor,
      },
    ],
  },
  {
    value: 100,
    name: '力量', 
    itemStyle: typeOneColor,
    children: [{
        value: 45,
        name: '肌肉力量',
        itemStyle: typeTwoColor,
      },
      {
        value: 40,
        name: '爆发力',
        itemStyle: typeTwoColor,
      },
      {
        value: 15,
        name: '力量耐力',
        itemStyle: typeTwoColor,
      },
    ],
  },
  {
    value: 100,
    name: '耐力', 
    itemStyle: typeOneColor,
    children: [{
        value: 50,
        name: '心肺耐力',
        itemStyle: typeTwoColor,
      },
      {
        value: 50,
        name: '肌肉耐力',
        itemStyle: typeTwoColor,
      },
    ],
  },
];

  // var data = [{
  //     value: 25,
  //     name: '敏捷',
  //     itemStyle: typeOneColor,
  //     children: [{
  //         value: 50,
  //         name: '速度',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 50,
  //         name: '灵敏',
  //         itemStyle: typeTwoColor,
  //       }
  //     ],
  //   },
  //   {
  //     value: 25,
  //     name: '协调', 
  //     itemStyle: typeOneColor,
  //     children: [
  //       {
  //         value: 60,
  //         name: '肢体协调性',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 20,
  //         name: '平衡性',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 10,
  //         name: '动作节奏',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 10,
  //         name: '空间定位',
  //         itemStyle: typeTwoColor,
  //       }
  //     ],
  //   },
  //   {
  //     value: 25,
  //     name: '柔韧',
  //     itemStyle: typeOneColor,
  //     children: [{
  //         value: 65,
  //         name: '关节灵活性',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 35,
  //         name: '关节稳定性',
  //         itemStyle: typeTwoColor,
  //       },
  //     ],
  //   },
  //   {
  //     value: 25,
  //     name: '力量', 
  //     itemStyle: typeOneColor,
  //     children: [{
  //         value: 45,
  //         name: '肌肉力量',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 40,
  //         name: '爆发力',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 40,
  //         name: '爆发力',
  //         itemStyle: typeTwoColor,
  //       },
  //     ],
  //   },
  //   {
  //     value: 25,
  //     name: '耐力', 
  //     itemStyle: typeOneColor,
  //     children: [{
  //         value: 50,
  //         name: '心肺耐力',
  //         itemStyle: typeTwoColor,
  //       },
  //       {
  //         value: 50,
  //         name: '肌肉耐力',
  //         itemStyle: typeTwoColor,
  //       },
  //     ],
  //   },
  // ];


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

let chartBar = null;

function initCharBar(canvas, width, height, dpr) {
  chartBar = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chartBar);

  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      color: ["#F58080", "#47D8BE", "#F9A589"],
      data: ['新报', '流失', '续费'],
      left: 'center',
      bottom: 'bottom'
    },
    grid: {
      top: 'middle',
      left: '3%',
      right: '4%',
      bottom: '3%',
      height: '80%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [100, 200, 20, 30, 60, 89],
      axisLine: {
        lineStyle: {
          color: "#999"
        }
      }
    },
    yAxis: {
      type: 'value',

      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#DDD'
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#333"
        },
      },
      nameTextStyle: {
        color: "#999"
      },
      splitArea: {
        show: false
      }
    },
    series: [{
        name: '新报',
        type: 'line',
        data: [800, 900, 220, 130, 660, 289],
        color: "#F58080",
        lineStyle: {
          normal: {
            width: 5,
            color: {
              type: 'linear',

              colorStops: [{
                offset: 0,
                color: '#FFCAD4' // 0% 处的颜色
              }, {
                offset: 0.4,
                color: '#F58080' // 100% 处的颜色
              }, {
                offset: 1,
                color: '#F58080' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(245,128,128, 0.5)',
            shadowBlur: 10,
            shadowOffsetY: 7
          }
        },
        itemStyle: {
          normal: {
            color: '#F58080',
            borderWidth: 10,
            /*shadowColor: 'rgba(72,216,191, 0.3)',
             shadowBlur: 100,*/
            borderColor: "#F58080"
          }
        },
        smooth: true
      },
      {
        name: '流失',
        type: 'line',
        data: [123, 568, 111, 222, 123, 56],
        lineStyle: {
          normal: {
            width: 5,
            color: {
              type: 'linear',

              colorStops: [{
                  offset: 0,
                  color: '#AAF487' // 0% 处的颜色
                },
                {
                  offset: 0.4,
                  color: '#47D8BE' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#47D8BE' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(71,216,190, 0.5)',
            shadowBlur: 10,
            shadowOffsetY: 7
          }
        },
        itemStyle: {
          normal: {
            color: '#AAF487',
            borderWidth: 10,
            /*shadowColor: 'rgba(72,216,191, 0.3)',
             shadowBlur: 100,*/
            borderColor: "#AAF487"
          }
        },
        smooth: true
      },
      {
        name: '续费',
        type: 'line',
        data: [125, 568, 25, 36, 784, 56],
        lineStyle: {
          normal: {
            width: 5,
            color: {
              type: 'linear',

              colorStops: [{
                  offset: 0,
                  color: '#F6D06F' // 0% 处的颜色
                },
                {
                  offset: 0.4,
                  color: '#F9A589' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#F9A589' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(249,165,137, 0.5)',
            shadowBlur: 10,
            shadowOffsetY: 7
          }
        },
        itemStyle: {
          normal: {
            color: '#F6D06F',
            borderWidth: 10,
            /*shadowColor: 'rgba(72,216,191, 0.3)',
             shadowBlur: 100,*/
            borderColor: "#F6D06F"
          }
        },
        smooth: true
      }
    ]
  };

  chartBar.setOption(option);
  return chartBar;
}







Page({
  /**
   * 页面的初始数据
   */
  data: {
    sunburst: {
      onInit: initCharSunburst
    },
    bar: {
      onInit: initCharBar
    },

    chartsNavList: [{
        TabCur: 0,
        title: '敏捷',
        name: 'agile',
      },
      {
        TabCur: 1,
        title: '协调',
        name: 'coordination',
      },
      {
        TabCur: 2,
        title: '柔韧',
        name: 'flexible',
      },
      {
        TabCur: 3,
        title: '力量',
        name: 'power',
      },
      {
        TabCur: 4,
        title: '耐力',
        name: 'endurance',
      },
    ],
    TabCur: 0,
    scrollLeft: 0,
    posture: {
      url: '',
      bg: '../../../static/images/home/posturebg.png',
      num: '73.5',
    },
    layout: {
      layoutIdOne: 'bodydetil',
      layoutIdTwo: 'posturedetil',
      layoutIdThree: 'potentialdetil',
    },
    bodymeasurements: {
      title: '身体素质综合评级',
      grade: 'B-',
      btntxt: '点击可查看各身体体质素质完整评级',
      currentdetil: {
        title: '目前完成的测试总评数：',
        num: '29',
      },
      collectiondetil: {
        title: '采集数据被应用于综合评级的测试数为：',
        num: '21',
      },
    },
    potentiality: {
      title: '当前潜力评估',
      introduction: '根据孩子的上课表现进行评测，主要从学习能力坚毅力两大维度进行当前的潜力评估。点击可查看详细评价。',
      study: {
        num: '51',
        title: '学习能力',
      },
      tenacity: {
        num: '68',
        title: '坚韧力',
      }
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(res) {

  },
  showUrl(e) {
    console.log(`调用模版：${e.currentTarget.dataset.layout}`);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},
})