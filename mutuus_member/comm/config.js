const mutuusGlobleData = {
  // app地址
  // baseURL: 'https://mutuus-men.firebaseapp.com',
  // // api 地址
  // apiUrl: 'https://mutuus-men.firebaseapp.com/api',
  apiUrl: 'http://116.62.18.99/json/',
  phoneProt:'phone.ashx?phone=',
  // http://116.62.18.99/json/phone.ashx?phone=13588070921
  //  项目名称
  appName: 'mutuus 体育运动公园',
  shareImageUrl: '../static/images/share/share.png',
  // app 密钥
  appId: 'wxe6f7f5a8275ca2b6',
  appAppSecret: '',
  // app login
  appLoginName: 'jiansungamedev@vip.qq.com',
  appLoginPassword: 'mutuus100285100!',
  // 数据库
  dataBaseName: '',
  dataBasePassword: '',
}

const chartsData = {
  "color": [
      "#2ec7c9",
      "#b6a2de",
      "#5ab1ef",
      "#ffb980",
      "#d87a80",
      "#8d98b3",
      "#e5cf0d",
      "#97b552",
      "#95706d",
      "#dc69aa",
      "#07a2a4",
      "#9a7fd1",
      "#588dd5",
      "#f5994e",
      "#c05050",
      "#59678c",
      "#c9ab00",
      "#7eb00a",
      "#6f5553",
      "#c14089"
  ],
  bodyweightData:{
    month: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    detil: [{
        year: "2020年",
        age: "5岁",
        value: [30, 35, 37, 40, 36, 39, 42, 45, 43, 40, 44, 46,],
      },
      {
        year: "2021年",
        age: "6岁",
        value: [47, 45, 48, 50, 48, 52, 55, 57, 58, 60, 62, 59,],
      }
    ]
  },
  bodyheightData:{
    month: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    detil: [{
        year: "2020年",
        age: "6岁",
        value: [130, 135, 137, 140, 136, 139, 142, 145, 143, 140, 144, 146,],
      },
      {
        year: "2021年",
        age: "7岁",
        value: [147, 145, 148, 150, 148, 152, 155, 157, 158, 160, 162, 159,],
      }
    ]
  }

}


module.exports = {
  mutuusGlobleData,
  chartsData,
}