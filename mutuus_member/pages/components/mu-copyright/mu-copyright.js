const COMM = require('../../../comm/config')
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    copyright: COMM.MU_GLOBLE.COPYRIGHT
  },
  lifetimes: {
    attached: function () {
      console.log(this.data.copyright)
    }
  },
})