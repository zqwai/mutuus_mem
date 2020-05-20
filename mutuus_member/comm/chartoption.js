const tooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow'
  }
},
grid = {
  left: '3%',
  right: '4%',
  top: '8%',
  height: '90%',
  containLabel: true
},
yAxis = {
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
dataZoom = [{
    type: 'inside'
}, {
    type: 'slider'
}];

module.exports = {
  tooltip,
  grid,
  yAxis,
  dataZoom,
}