let option = {
  title: {
      text: '雷达图'
  },
  tooltip: {},
  legend: {
      top: 20,
      itemWidth: 12,
      itemHeight: 12,
      data: ['5岁', '6岁'],
      textStyle: {
          color: '#fff'
      }
  },
  radar: {
      radius: '60%',
      splitNumber: 8,
      axisLine: {
          lineStyle: {
              color: '#fff',
              opacity: .2
          }
      },
      splitLine: {
          lineStyle: {
              color: '#fff',
              opacity: .2
          }
      },
      splitArea: {
          areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
          }
      },
      indicator: [{
          name: '敏捷',
          max: 60
      }, {
          name: '协调',
          max: 160
      }, {
          name: '柔韧',
          max: 300
      }, {
          name: '耐力',
          max: 350
      }, {
          name: '力量',
          max: 500
      }]
  },
  series: [{
      name: '5岁 vs 6岁',
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
          normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
          }
      },
      data: [{
          value: [50, 70, 120, 110, 150,],
          name: '5岁',
      }, {
          value: [25, 120, 80, 85, 120,],
          name: '6岁',
      }]
  }],
  color: ['#ef4b4c', '#b1eadb'],
  backgroundColor: {
      type: 'radial',
      x: 0.4,
      y: 0.4,
      r: 0.35,
      colorStops: [{
          offset: 0,
          color: '#895355' // 0% 处的颜色
      }, {
          offset: .4,
          color: '#593640' // 100% 处的颜色
      }, {
          offset: 1,
          color: '#39273d' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
  }
};

module.exports = {
  option: option
}