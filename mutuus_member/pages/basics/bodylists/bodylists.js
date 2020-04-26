"use strict";
import * as echarts from './../../../ec-canvas/echarts';

const app = getApp();

function initCharSunburst(canvas, width, height, dpr) {
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

  var data = [{
      value: 50,
      name: '敏捷',
      children: [{
          value: 30,
          name: '速度',
          children: [{
              value: 45,
              // name: '动作速度',
              itemStyle: typeOneColorSubThree1
            },
            {
              value: 40,
              // name: '位移速度',
              itemStyle: typeOneColorSubThree2
            },
            {
              value: 15,
              // name: '速度耐力',
              itemStyle: typeOneColorSubThree3
            }
          ],
          itemStyle: typeOneColorSubTwo1
        },
        {
          value: 20,
          name: '灵敏',
          children: [{
              value: 45,
              // name: '移动灵敏',
              itemStyle: typeOneColorSubThree1
            },
            {
              value: 30,
              // name: '反应灵敏',
              itemStyle: typeOneColorSubThree2
            }, {
              value: 25,
              // name: '动作灵敏',
              itemStyle: typeOneColorSubThree3
            }
          ],
          itemStyle: typeOneColorSubTwo2
        }
      ],
      itemStyle: typeOneColor
    },
    {
      value: 50,
      name: '柔韧',
      children: [{
          value: 10,
          name: '运动灵敏性',
          itemStyle: typeTwoColorSubTwo1
        },
        {
          value: 40,
          name: '关节灵活性',
          children: [{
              value: 5,
              // name: '颈关节灵活性',
              itemStyle: typeTwoColorSubThree1
            },
            {
              value: 4,
              // name: '脊柱关节灵活性',
              itemStyle: typeTwoColorSubThree2
            },
            {
              value: 6,
              // name: '肩关节灵活性',
              itemStyle: typeTwoColorSubThree2
            },
            {
              value: 7,
              // name: '手肘关节灵活性',
              itemStyle: typeTwoColorSubThree2
            },
            {
              value: 3,
              // name: '手腕关节灵活性',
              itemStyle: typeTwoColorSubThree2
            },
            {
              value: 8,
              // name: '髋关节灵活性',
              itemStyle: typeTwoColorSubThree2
            },
            {
              value: 2,
              // name: '膝关节灵活性',
              itemStyle: typeTwoColorSubThree2
            },
            {
              value: 5,
              // name: '脚踝关节灵活性',
              itemStyle: typeTwoColorSubThree2
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