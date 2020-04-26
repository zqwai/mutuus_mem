import * as echarts from './../../../ec-canvas/echarts';

const app = getApp();

// initChartGaugePosture
function initChartGaugePosture(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);


  let placeHolderStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      color: "rgba(0,0,0,0)",
      borderWidth: 0
    },
    emphasis: {
      color: "rgba(0,0,0,0)",
      borderWidth: 0
    }
  };

  let dataStyle = {
    normal: {
      formatter: '{c}',
      position: 'center',
      show: true,
      textStyle: {
        fontSize: '48',
        fontWeight: 'normal',
        color: '#34374E'
      }
    }
  };

  let option = {
    backgroundColor: '#fff',
    title: [{
      text: '体态综合分',
      left: '47%',
      top: '70%',
      textAlign: 'center',
      textStyle: {
        fontWeight: 'normal',
        fontSize: '22',
        color: '#333',
        textAlign: 'center',
      },
    }],

    //第一个图表
    series: [{
        type: 'pie',
        hoverAnimation: false, //鼠标经过的特效
        radius: ['70%', '85%'],
        center: ['50%', '50%'],
        startAngle: 225,
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
            value: 100,
            itemStyle: {
              normal: {
                color: '#E1E8EE'
              }
            },
          }, {
            value: 35,
            itemStyle: placeHolderStyle,
          },

        ]
      },
      //上层环形配置
      {
        type: 'pie',
        hoverAnimation: false, //鼠标经过的特效
        radius: ['70%', '85%'],
        center: ['50%', '50%'],
        startAngle: 225,
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
            value: 73.2,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FAD961'
                }, {
                  offset: 1,
                  color: '#F76B1C'
                }]),
              }
            },
            label: dataStyle,
          },
          {
            value: 35,
            itemStyle: placeHolderStyle,
          },
        ]
      },

    ]
  };
  chart.setOption(option, true);
  return chart;
}


Page({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,

    mychartGaugePosture: {
      onInit: initChartGaugePosture
    },
    posture: {
      title: '体态评测数据展示',
      updateTime: '2020.04.10',
      postureDetail: [
        {
          id: '0',
          title: '肩部',
          lists: [{
            id: '11',
            subTitle: '圆肩',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '12',
            subTitle: '高低肩',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '1',
          title: '颈部背部',
          lists: [{
            id: '21',
            subTitle: '颈前屈',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '22',
            subTitle: '驼背',
            text: '略微',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '2',
          title: '脊柱',
          lists: [{
            id: '31',
            subTitle: 'S型',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '32',
            subTitle: 'C型',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '3',
          title: '盆骨',
          lists: [{
            id: '41',
            subTitle: '盆骨前倾',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '42',
            subTitle: '盆骨后倾',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        },  
        {
          id: '4',
          title: '腿部',
          lists: [{
            id: '51',
            subTitle: 'O型腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '52',
            subTitle: 'X型腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '5',
          title: '腿部',
          lists: [{
            id: '61',
            subTitle: 'XO型腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '62',
            subTitle: '长短腿',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '6',
          title: '足部',
          lists: [{
            id: '71',
            subTitle: '平足',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '72',
            subTitle: '高弓足',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
        {
          id: '7',
          title: '足部',
          lists: [{
            id: '81',
            subTitle: '内八字',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          },
          {
            id: '82',
            subTitle: '外八字',
            text: '无',
            image: 'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',
          }],
        }, 
      ],
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(res) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {
    console.log(echarts)
  },

  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
})