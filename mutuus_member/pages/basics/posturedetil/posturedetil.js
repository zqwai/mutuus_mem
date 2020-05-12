"use strict";
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  
  data: {
    // 体态评测数据展示
    posture: {
      title: '体态评测数据展示',
      date: '2020-04-20',
      url: '',
      name: '体态综合分',
      image: './../../../static/images/home/titai.jpg',
      num: '73.5',
    },
    // 正面照片
    bodyphoto: [
      {
        id: '0',
        title: '正面照片',
        image: './../../../static/images/home/rectangle.png',
      },
      {
        id: '1',
        title: '侧面照片',
        image: './../../../static/images/home/rectangle.png',
      },
      {
        id: '2',
        title: '侧面照片',
        image: './../../../static/images/home/rectangle.png',
      }
    ],
    // 身体各部位
    bodypart:[
      {
        id: '0',
        title: '颈部曲度',
        detil: '正常',
      },
      {
        id: '1',
        title: '圆肩',
        detil: '轻微',
      },
      {
        id: '2',
        title: '高低肩',
        detil: '右肩偏高',
      },
      {
        id: '3',
        title: '驼背',
        detil: '轻微',
      },
      {
        id: '4',
        title: '脊柱侧弯',
        detil: '正常',
      },
      {
        id: '5',
        title: '盆骨位置',
        detil: '正常',
      },
      {
        id: '5',
        title: '腿部',
        detil: 'O型腿',
      },
      {
        id: '5',
        title: '足部',
        detil: '平足',
      },
    ]
  },

  lifetimes: {
    attached: function () {
      let that = this;
    },
    moved: function () {
      console.log("lifetimes:moved")
    },
    detached: function () {
      console.log("lifetimes:detached")
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },

  methods: {
    
  }
})