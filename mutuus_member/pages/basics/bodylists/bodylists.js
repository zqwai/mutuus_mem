"use strict";
import * as echarts from './../../../ec-canvas/echarts';

const app = getApp();

let a_level = {
    color: "#FF7A51"
  },
  b_level = {
    color: "#FFA286"
  },
  cd_level = {
    color: "#FFC7B6"
  };

let value = 20.0;

function initCharSunburst(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  let data = [{
    name: "敏捷",
    value: value,
    itmeStyle: a_level,
    children: [{
      name: "速度",
      value: value / 2.0,
      itmeStyle: a_level,
      children: [{
        name: "动作速度",
        value: value / 2.0 / 3.0,
        itmeStyle: a_level,
        children: [{
          name: "神经反应速度",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: a_level
        }, {
          name: "肢体协调性",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: b_level
        }, {
          name: "关节灵活性",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: a_level
        }, {
          name: "关节稳定性",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: cd_level
        }]
      }, {
        name: "位移速度",
        value: value / 2.0 / 3.0,
        itmeStyle: a_level,
        children: [{
          name: "下肢爆发力",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "肢体协调性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "髋关节灵活性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "髋关节稳定性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "肩关节灵活",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "肩关节稳定性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "膝关节灵活性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "膝关节稳定性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "脚踝关节灵活性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }, {
          name: "脚踝关节稳定性",
          value: value / 2.0 / 3.0 / 10.0,
          itmeStyle: b_level
        }]
      }, {
        name: "速度耐力",
        value: value / 2.0 / 3.0,
        itmeStyle: cd_level
      }]
    }, {
      name: "灵敏",
      value: value / 2.0,
      itmeStyle: b_level,
      children: [{
        name: "移动灵敏",
        value: value / 2.0 / 3.0,
        itmeStyle: b_level,
        children: [{
          name: "神经反应速度",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "肢体协调性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "下肢爆发力",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "髋关节灵活性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "髋关节稳定性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "膝关节灵活性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "膝关节稳定性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "脚踝关节灵活性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }, {
          name: "脚踝关节稳定性",
          value: value / 2.0 / 3.0 / 9.0,
          itmeStyle: b_level
        }]
      }, {
        name: "反应灵敏",
        value: value / 2.0 / 3.0,
        itmeStyle: b_level,
        children: [{
          name: "神经反应速度",
          value: value / 2.0 / 3.0 / 2.0,
          itmeStyle: b_level
        }, {
          name: "肢体协调性",
          value: value / 2.0 / 3.0 / 2.0,
          itmeStyle: b_level
        }]
      }, {
        name: "动作灵敏",
        value: value / 2.0 / 3.0,
        itmeStyle: b_level,
        children: [{
          name: "神经反应速度",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: b_level
        }, {
          name: "肢体协调性",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: b_level
        }, {
          name: "关节灵活性",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: b_level
        }, {
          name: "关节稳定性",
          value: value / 2.0 / 3.0 / 4.0,
          itmeStyle: b_level
        }]
      }]
    }]
  }, {
    name: "协调",
    value: value,
    itmeStyle: b_level,
    children: [{
      name: "肢体协调性",
      value: value / 4.0,
      itmeStyle: cd_level
    }, {
      name: "平衡性",
      value: value / 4.0,
      itmeStyle: a_level,
      children: [{
        name: "动态平衡",
        value: value / 4.0 / 2.0,
        itmeStyle: a_level
      }, {
        name: "静态平衡",
        value: value / 4.0 / 2.0,
        itmeStyle: a_level
      }]
    }, {
      name: "动作节奏",
      value: value / 4.0,
      itmeStyle: a_level
    }, {
      name: "空间定位",
      value: value / 4.0,
      itmeStyle: b_level
    }]
  }, {
    name: "柔韧",
    value: value,
    itmeStyle: cd_level,
    children: [{
      name: "关节灵活性",
      value: value / 2.0,
      itmeStyle: a_level,
      children: [{
        name: "颈关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "脊柱关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "肩关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "手肘关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "手腕关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "髋关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "膝关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "脚踝关节灵活性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }]
    }, {
      name: "关节稳定性",
      value: value / 2.0,
      itmeStyle: b_level,
      children: [{
        name: "颈关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "脊柱关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "肩关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "手肘关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "手腕关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "髋关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "膝关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }, {
        name: "脚踝关节稳定性",
        value: value / 2.0 / 8.0,
        itmeStyle: cd_level
      }]
    }]
  }, {
    name: "力量",
    value: value,
    itmeStyle: a_level,
    children: [{
      name: "肌肉力量",
      value: value / 3.0,
      itmeStyle: a_level,
      children: [{
        name: "上肢肌力",
        value: value / 3.0 / 3.0,
        itmeStyle: b_level
      }, {
        name: "核心肌力",
        value: value / 3.0 / 3.0,
        itmeStyle: cd_level
      }, {
        name: "下肢肌力",
        value: value / 3.0 / 3.0,
        itmeStyle: a_level
      }]
    }, {
      name: "爆发力",
      value: value / 3.0,
      itmeStyle: b_level,
      children: [{
        name: "上肢爆发力",
        value: value / 3.0 / 3.0,
        itmeStyle: b_level
      }, {
        name: "核心爆发力",
        value: value / 3.0 / 3.0,
        itmeStyle: cd_level
      }, {
        name: "下肢爆发力",
        value: value / 3.0 / 3.0,
        itmeStyle: a_level
      }]
    }, {
      name: "力量耐力",
      value: value / 3.0,
      itmeStyle: cd_level
    }]
  }, {
    name: "耐力",
    value: value,
    itmeStyle: b_level,
    children: [{
      name: "心肺耐力",
      value: value / 2.0,
      itmeStyle: cd_level,
      children: [{
        name: "有氧耐力",
        value: value / 2.0 / 2.0,
        itmeStyle: a_level
      }, {
        name: "速度耐力",
        value: value / 2.0 / 2.0,
        itmeStyle: cd_level
      }]
    }, {
      name: "肌肉耐力",
      value: value / 2.0,
      itmeStyle: a_level,
      children: [{
        name: "力量耐力",
        value: value / 2.0 / 2.0,
        itmeStyle: b_level,
        children: [{
          name: "上肢力量耐力",
          value: value / 2.0 / 2.0 / 3.0,
          itmeStyle: cd_level
        }, {
          name: "核心力量耐力",
          value: value / 2.0 / 2.0 / 3.0,
          itmeStyle: a_level
        }, {
          name: "下肢力量耐力",
          value: value / 2.0 / 2.0 / 3.0,
          itmeStyle: cd_level
        }]
      }, {
        name: "肌肉抗疲劳能力",
        value: value / 2.0 / 2.0,
        itmeStyle: a_level
      }]
    }]
  }];


  var option = {
    series: {
      type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '80%'],
        label: {
            rotate: 'radial'
        },
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