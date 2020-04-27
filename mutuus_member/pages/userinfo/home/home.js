const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    // 表单模版 显示
    isFormShow: true,
    isDialogModal: false,
    // 表单标题
    fometitle: {
      name: '孩子姓名',
      birthday: '孩子生日',
      phone: '手机号码',
      code: '验证码',
      btn: '下一步',
    },
    // 表单提示
    placeholder: {
      name: '请输入孩子姓名',
      birthday: '请选择孩子生日',
      phone: '请输入您的手机号码',
      code: '输入验证码',
    },
    // 按钮状态
    loginBtnTxt:"会员绑定",
    loginBtnBgBgColor:"green",
    btnLoading:false,
    disabled:false,
    // 表单 value
    inputChildrenName: '小丽',
    pickerChildrenBirthday: '2020-4-27',
    inputChildrenBirthday: '2020-4-28',
    inputPhone: '15990149892',
    inputCode: '2323',
    // 提示信息
    basicsList: [{
      icon: 'usefullfill',
      name: '会员信息'
    }, {
      icon: 'radioboxfill',
      name: '确认码'
    }, {
      icon: 'radioboxfill',
      name: '完成'
    }, ],
    basics: 0,
    numList: [{
      name: '会员信息'
    }, {
      name: '确认码'
    }, {
      name: '完成'
    }, ],
    num: 0,
    scroll: 0
  },
  // 生日选择
  birthdayDateChange(e) {
    this.setData({
      inputChildrenBirthday: e.detail.value,
      pickerChildrenBirthday: e.detail.value,
    })
    console.log('picker发送选择改变，携带值为', e.detail.value)
  },
  formSubmit: function( e ) {
    let childrenName = e.detail.value.inputChildrenName; 
    let childrenBirthday = e.detail.value.inputChildrenBirthday;
    let pickerBirthday = e.detail.value.time;
    let inputPhone = e.detail.value.inputPhone; 
    let inputCode = e.detail.value.inputCode; 
    // childrenBirthday = this.pickerChildrenBirthday;
    console.log(`${childrenName},${childrenBirthday},${inputPhone},${inputCode}`)
    // console.log(typeof(childrenBirthday));
    this.setData({
      // modalName: e.currentTarget.dataset.target,
      isDialogModal: true,
    })
  },

  // 提示层
  // showModal(e) {
  //   this.setData({
  //     // modalName: e.currentTarget.dataset.target,
  //   })
  // },
  bandCode(e) {
    this.setData({
      modalName: null,
      isDialogModal: false,
      isFormShow: false,
    });
  },
  rebind(e) {
    this.setData({
      modalName: null,
      isFormShow: true,
    });
  }

})

