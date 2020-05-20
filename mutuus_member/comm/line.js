const option = {
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      color: ["#F58080", "#47D8BE", "#F9A589"],
      data: ['2020年', '2021年', ],
      left: 'center',
      top: 'top'
  },
  grid: {
    //   top: 'middle',
    //   left: '3%',
    //   right: '4%',
    //   bottom: '3%',
    //   height: '90%',
    left: '3%',
    right: '4%',
    top: '8%',
    height: '90%',
    containLabel: true
  },
  xAxis: {
      type: 'category',
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
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
  dataZoom: [{
      type: 'inside'
  }, {
      type: 'slider'
  }],
  series: [{
          name: "2020年",
          type: 'line',
          data: [130, 135, 137, 140, 136, 139, 142, 145, 143, 140, 144, 146,],
          color: "#F58080",
          lineStyle: {
              normal: {
                  width: 3,
        //           color: {
        //               type: 'linear',

        //               colorStops: [{
        //                   offset: 0,
        //                   color: '#FFCAD4' // 0% 处的颜色
        //               }, {
        //                   offset: 0.4,
        //                   color: '#F58080' // 100% 处的颜色
        //               }, {
        //                   offset: 1,
        //                   color: '#F58080' // 100% 处的颜色
        //               }],
        //               globalCoord: false // 缺省为 false
        //           },
        //         //   shadowColor: 'rgba(245,128,128, 0.5)',
        //         //   shadowBlur: 10,
        //         //   shadowOffsetY: 7
              }
          },
          itemStyle: {
              normal: {
                  color: '#F58080',
                  borderWidth: 5,
        //           /*shadowColor: 'rgba(72,216,191, 0.3)',
        //            shadowBlur: 100,*/
        //           borderColor: "#F58080"
              }
          },
          smooth: true
      },
      {
          name: "2021年",
          type: 'line',
          data: [147, 145, 148, 150, 148, 152, 155, 157, 158, 160, 162, 159,],
          color: "#2ec7c9",
            lineStyle: {
              normal: {
                  width: 3,
        //           color: {
        //               type: 'linear',

        //               colorStops: [{
        //                       offset: 0,
        //                       color: '#AAF487' // 0% 处的颜色
        //                   },
        //                   {
        //                       offset: 0.4,
        //                       color: '#47D8BE' // 100% 处的颜色
        //                   }, {
        //                       offset: 1,
        //                       color: '#47D8BE' // 100% 处的颜色
        //                   }
        //               ],
        //               globalCoord: false // 缺省为 false
        //           },
                  shadowColor: 'rgba(0,0,0, 0.2)',
                  shadowBlur: 2,
                  shadowOffsetY: 1
              }
          },
          itemStyle: {
              normal: {
                  color: '#2ec7c9',
                  borderWidth: 2,
        //           /*shadowColor: 'rgba(72,216,191, 0.3)',
        //            shadowBlur: 100,*/
                  borderColor: "#2ec7c9"
              }
          },
          smooth: true
      },
  ]
};
module.exports = {
  option: option
}