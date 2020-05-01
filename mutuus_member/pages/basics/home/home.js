"use strict";
Component({
  options: {
    addGlobalClass: true,
  },
  data: {

    bannerList: [
      {
        id: '0',
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
      },
      {
        id: '1',
        type: 'image',
        url: './../../../static/images/banner/b0.jpg',
      },
      {
        id: '2',
        type: 'image',
        url: './../../../static/images/banner/b2.jpg',
      },
      {
        id: '3',
        type: 'image',
        url: './../../../static/images/banner/b3.jpg',
      },
      {
        id: '4',
        type: 'image',
        url: './../../../static/images/banner/b4.jpg',
      },
      {
        id: '4',
        type: 'image',
        url: './../../../static/images/banner/b5.jpg',
      },
    ],
    students: [
      {
        id: '12',
        name: '李晓洋',
        sex: '男',
        birth: '2016.04.15',
        layout: 'bodylists',
        height: '106',
        qrcodeNum: 'CX20200314A0006',
        qrcodePic: '../../../static/images/home/qrcode-student.png'
      },
      {
        id: '13',
        name: '林美霞',
        sex: '女',
        birth: '2017.05.15',
        layout: 'bodylists',
        height: '110',
        qrcodeNum: 'CX20200314A0007',
        qrcodePic: '../../../static/images/home/qrcode-student.png'
      },
    ],
  },
})