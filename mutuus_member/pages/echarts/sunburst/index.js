import * as echarts from '../../../utils/ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var item1 = {
    color: '#f60'
  };
  var item2 = {
    color: '#ffff00'
  };
  var item3 = {
    color: '#4e72b8'
  };

  var data = [{
    name: 'Grandpa',
    children: [{
      value: 5,
      children: [{
        value: 1,
        itemStyle: item1
      }, {
        value: 2
      }, {
        value: 1
      }],
      itemStyle: item1
    }, {
      value: 10,
      children: [{
        value: 6,
        itemStyle: item3
      }, {
        value: 2,
        itemStyle: item3
      }, {
        value: 1
      }],
      itemStyle: item1
    }],
    itemStyle: item1
  }, {
    value: 9,
    children: [{
      value: 4,
      children: [{
        value: 2,
        itemStyle: item2
      }],
      itemStyle: item1
    }, {
      children: [{
        value: 3
      }],
      itemStyle: item3
    }],
    itemStyle: item2
  }, {
    value: 7,
    children: [{
      children: [{
        value: 1,
        itemStyle: item3
      }, {
        value: 3,
        itemStyle: item2
      }, {
        value: 2,
        itemStyle: item1
      }],
      itemStyle: item3
    }],
    itemStyle: item1
  }, {
    children: [{
      value: 6,
      children: [{
        value: 1,
        itemStyle: item2
      }, {
        value: 2,
        itemStyle: item1
      }, {
        value: 1,
        itemStyle: item3
      }],
      itemStyle: item3
    }, {
      value: 3,
      children: [{
        value: 1,
      }, {
        value: 1,
        itemStyle: item2
      }, {
        value: 1
      }],
      itemStyle: item3
    }],
    itemStyle: item1
  }];

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
        color: '#ddd',
        borderWidth: 2
      }
    }
  };


  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: 'pages/tabBar/company/index',
      success: function () { 
        console.log('ECharts可以在微信小程序中使用啦！')
      },
      fail: function () {
        console.log('ECharts微信小程序调用失败')
      }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
