var imageRest = require('../../../utils/imagerest.js');  

// 获取全局数据
// let app = getApp();

Page({
  data: {
    // userInfo: {}, 
    // banner相关配置
    // imgUrls: app.globalData.companyBannerImgUrls,
    imgUrls: [
      './../../static/pic/company/mutuus_show_00.jpg',
      './../../static/pic/company/mutuus_show_01.jpg',
      './../../static/pic/company/mutuus_show_02.jpg',
      './../../static/pic/company/mutuus_show_03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    aboutTitle:[
      'for each unique kid',
      'we unlock their',
      'true potential',
    ],
    aboutCont:[
      '什么是好的教育？这个问题很难回答。孩子们会多背几首古诗、会多读几个英文单词？或者掌握一些熟练的绘画技巧，会一些乐器？这些成就虽然能令人羡慕，但其实并不能说明什么。',
      '英国著名的贵族学校，The Perse，它认可的顶尖教育成就，其实很简单，就是让孩子们喜爱思考（love to think），并且在思考的过程中表现出：independently（独立地）、analytically（分析地）、logically（逻辑地）、creatively（创造性地）、imaginatively（富有想象力地）这五个特征。这个目标看起来很朴实，远不如其它学校冠冕堂皇的营销话术来得令人心动，但如果深入探究，“喜爱思考” 这一教育成就的达成，高度概括了许多令人振奋的优良特质，能够令孩子在未来的人生旅程中受益无穷。所以，真正优秀的教育本该如此，化繁为简，简洁明了，彰显着王者的霸气。',
      '受此影响，为了我们自己的孩子，为了实践我们期望中的教学体验，我们共同创办了 mutuus。我们希望我们的孩子们能以自己的内因驱动进行自主地学习、探索、思考，成为能够适应未来快速变化的人。',
    ],
    studentInfo: [
      {
        id :'3',
        src: '../../static/pic/company/3.svg',
        info: 'true potential',
      },
      {
        id: '4',
        src: '../../static/pic/company/4.svg',
        info: 'true potential',
      },
      {
        id: '17',
        src: '../../static/pic/company/17.svg',
        info: 'true potential',
      },
      {
        id: '356',
        src: '../../static/pic/company/356.svg',
        info: 'true potential',
      },
    ],
    logo:[
      {
        title:'OUR LOGO',
        info:'BECOME AN EFFECTIVE LEARNER',
        imgsrc:'http://www.imutuus.com/images/bg/logo-size.png'
      }
    ],
    navList1:['about us','about EYFS','the logo','the space','open day'],
    navList2:['Locations','Events'],
    btnText:[
      'SEE DETAILS','REQUEST INVITATION'
    ],
    room:[
      '“ 为孩子们设计的空间','只属于孩子们的领地 ”'
    ],
    openday:[
      'OPEN DAY',
      'TAKE A TRIP, SEE WHAT WE DID FOR OUR KIDS'
    ]
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    
  },
  onReady: function (e) {

  },

  bannerImageLoad: function (e) {
    var imageSize = imageRest.imageRest(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  
  logoImageLoad: function (e) {
    var imageSize = imageRest.imageRest(e)
    this.setData({
      logoImagewidth: imageSize.imageWidth,
      logoImageheight: imageSize.imageHeight
    })
  }

});
