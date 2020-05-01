
import * as echarts from './../../../ec-canvas/echarts';

const app = getApp();

// initChartRadarStudy
function initChartRadarStudy(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '食品',
        max: 500
      },
      {
        name: '玩具',
        max: 500
      },
      {
        name: '服饰',
        max: 500
      },
      {
        name: '绘本',
        max: 500
      },
      {
        name: '医疗',
        max: 500
      },
      {
        name: '门票',
        max: 500
      }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [430, 340, 500, 300, 490, 400],
        name: '预算'
      },
      {
        value: [300, 430, 150, 300, 420, 250],
        name: '开销'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}


// initChartRadarTenacity
function initChartRadarTenacity(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '食品',
        max: 500
      },
      {
        name: '玩具',
        max: 500
      },
      {
        name: '服饰',
        max: 500
      },
      {
        name: '绘本',
        max: 500
      },
      {
        name: '医疗',
        max: 500
      },
      {
        name: '门票',
        max: 500
      }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [430, 340, 500, 300, 490, 400],
        name: '预算'
      },
      {
        value: [300, 430, 150, 300, 420, 250],
        name: '开销'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}


Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    mychartRadarStudy:{
      onInit: initChartRadarStudy
    },
    mychartRadarTenacity:{
      onInit: initChartRadarTenacity
    },
    topbar:{
      btnTxt: '返回',
      btnTxt: '潜力评价展示',
    },
    potential:{
      title: '当前潜力评价',
      updateTime: '2020.04.10',
      potentialCurrent: [
        {
          id: '0',
          title: '学习力',
          num: '51',
        },
        {
          id: '1',
          title: '协调',
          num: '32',
        },
      ],
      potentialExplanation: {
        title: '关于潜力评价的说明',
        introduction: `我们认为“潜力”并不是先天因素，而是可以在后天通过环境、行为的影响，进行动态改造的。在本页中的评价，我们仅仅<b>根据孩子在课程过程中表现出的客观特征为标准</b>，在量表工具下进行评测。如果孩子因情绪、日常习惯等原因没有表现出相应的特征，自然会影响到整体的评测，所以本页的数据仅做参考，但教练会根据孩子的评测进行针对性教学安排和设计。`,
      },
      potentialStudy: {
        title: '学习力维度',
        introduction: `学习力是指孩子在学习新知识、新技能时表现出的学习潜力，这个潜力关系到学习效率以及融会贯通的能力。下面的六维图是我们评估学习力的所有因素中最核心的六个素质。`,
      },
      potentialTenacity: {
        title: '坚韧力维度',
        introduction: `坚韧力是指孩子在学习和生活的过程中表现出的坚韧性，比如意志力、逆境商（挫折商）等等。学习力如果是发动机，坚韧力就是供能系统，是学习力持续输出的重要前提，是决定孩子未来成就的核心素质。`,
      },
      potentialAbility: [
        {
          id: '0',
          title: '自我驱动能力',
          introduction: `自我驱动是主动学习状态中最为重要的行为表征之一，我们通过观察孩子在有一定程度动机参与的前提下的自我驱使、不断尝试、克服困境、解决问题等方面的综合能力来评价自我驱动能力。`,
          grade: 'D-',
        },
        {
          id: '1',
          title: '抗挫折能力',
          introduction: `目前的孩子因为过度保护、过度表扬及奖励，往往缺乏应对逆境、挫折时应该保有的韧性。而抗压、抗挫折能力，是在应对未来不确定性时最为重要的能力，意志力、毅力等传统的品质，都属于抗挫折能力的子集。`,
          grade: 'c-',
        },
        {
          id: '2',
          title: '有效专注力',
          introduction: `影响学习效率的因素除了知识结构、领悟理解能力外，最重要的是有效专注力，因为只有在有效专注的时间内，才能获得最大的学习效能。我们评价有效专注，主要从观察孩子在专注过程中的状态和获得的结果这两大方面展开。`,
          grade: 'B+',
        },
        {
          id: '3',
          title: '思维表征',
          introduction: `授人予鱼不如授人予渔。所以相比单纯的知识和技能，我们更在意学习的方法和思维的模式。思维表征是用于描述孩子思维层次的一种方式，我们通过观察孩子表现出的高阶思维能力（归纳、抽象等），来对思维表征进行评测。`,
          grade: 'B-',
        },
      ]
    },
    
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(res) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {
    console.log(echarts)
  },
})