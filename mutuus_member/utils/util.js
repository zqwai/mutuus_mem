// 时间 格式化
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 数字 格式化
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// html文本 格式化
const formatHtml = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function regexConfig() {
  var reg = {
    userid: /^[A-Za-z0-9]+$/,  //邮箱正则验证
    phone: /^1(3|4|5|7|8)\d{9}$/,  //手机号正则验证
    // phone: /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/,
    name: /^[\u4e00-\u9fa5]{2,10}$/,  //姓名汉字正则验证
    birthday: /^\d{4}([\/\-]?)\d{1,2}\1\d{1,2}$/,
  }
  return reg;
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  formatHtml: formatHtml,
  regexConfig: regexConfig
}
