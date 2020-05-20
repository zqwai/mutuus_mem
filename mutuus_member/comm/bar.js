const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    color: ["#F58080", "#47D8BE", "#F9A589"],
    data: ['2020年', '2021年', ],
    left: 'center',
    top: 'top'
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '8%',
    height: '90%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    // 角度
    axisTick: {
      alignWithLabel: true
    },
    axisLabel:{
      rotate:45
    },
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
  dataZoom: [{
      type: 'inside'
  }, {
      type: 'slider'
  }],
  series: [{
      name: '2020年',
      data: [30, 35, 37, 40, 36, 39, 42, 45, 43, 40, 44, 46,],
      type: 'bar',
      color: "#2ec7c9",
    },
    {
      name: '2021年',
      data: [47, 45, 48, 50, 48, 52, 55, 57, 58, 60, 62, 59,],
      type: 'bar',
      color: "#2ec7c9",
    }
  ]
};
module.exports = {
  option: option
}