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
    userInfo: {
      // 用户 基本信息
      userId: '', //用户 id
      userName: '', //用户 姓名
      userBirthday: '', //用户 生日
      userPhone: '', //用户 手机  **判断是否做过身份绑定，若无则调用绑定页面
      userIdentityId: '', //用户 身份证
      children: [ //孩子 基本信息
        // {
        //   id: '', //孩子 id
        //   identityId: '', //孩子 身份证
        //   name: '', //孩子 姓名
        //   birthday: '', //孩子 生日
        //   height: '', //孩子 身高
        //   qrcodeNum: '', //孩子 编码
        //   qrcodePic: '' //孩子 编码图
        // },
        {
          id: '12',
          name: '李晓洋',
          sex: '男',
          birth: '2016-04-15',
          height: '106',
          qrcodeNum: 'CX20200314A0006',
          qrcodePic: '../../../static/images/home/qrcode-student.png'
        },
        {
          id: '13',
          name: '林美霞',
          sex: '女',
          birth: '2017-05-15',
          height: '110',
          qrcodeNum: 'CX20200314A0007',
          qrcodePic: '../../../static/images/home/qrcode-student.png'
        },
      ],
    },
    layout: 'bodylists',
  },
})