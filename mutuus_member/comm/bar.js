const option = {
  xAxis: {
    type: 'category',
    data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [30, 35, 37, 40, 36, 39, 42, 45, 43, 40, 44, 46,],
      type: 'bar'
  }]
};
module.exports = {
  option: option
}