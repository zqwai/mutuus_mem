// 设置图片宽高 默认设置与设备同宽
let imageRest = e => {
  let imageSize = {};
  const originalWidth = e.detail.width;//图片原始宽  
  const originalHeight = e.detail.height;//图片原始高  
  const originalScale = originalHeight / originalWidth;//图片高宽比  
  // console.log('originalWidth: ' + originalWidth)
  // console.log('originalHeight: ' + originalHeight)
  //获取屏幕宽高  
  wx.getSystemInfo({
    success: function (res) {
      const windowWidth = res.windowWidth;
      const windowHeight = res.windowHeight;
      const windowscale = windowHeight / windowWidth;//屏幕高宽比  
      // console.log('windowWidth: ' + windowWidth)
      // console.log('windowHeight: ' + windowHeight)
      if (originalScale < windowscale) {//图片高宽比小于屏幕高宽比  
        //图片缩放后的宽为屏幕宽  
        imageSize.imageWidth = windowWidth;
        const imageNewHeight = (windowWidth * originalHeight) / originalWidth ;
        imageSize.imageHeight = Math.floor(imageNewHeight);
      } else {
        //图片高宽比大于屏幕高宽比  
        //图片缩放后的高为屏幕高  
        imageSize.imageHeight = windowHeight;
        const imageNewWidth = (windowHeight * originalWidth) / originalHeight;
        imageSize.imageWidth = Math.floor(imageNewWidth);
      }

    }
  })
  // console.log('缩放后的宽: ' + imageSize.imageWidth)
  // console.log('缩放后的高: ' + imageSize.imageHeight)
  return imageSize;
}  
module.exports = {
  imageRest: imageRest,
}