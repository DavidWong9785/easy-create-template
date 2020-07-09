import util from '../utils/common'
var moment = require('moment')
moment().format()
const filters = {
    // 日期格式化
    dayFormat: function (value, format) {
      return util.formatDate(new Date(value.replace(/-/g, '/')), format)
    },
    // 日期格式化
    dateFormat: function (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    },
    // 获取日期相差天数
    getDifferTime(value) {
      return moment(value).diff(moment(), 'days', true)
    },
    // 金额格式化
    moneyFormat(num) {
      return util.toMoney(num)
    },
    // 处理台号
    dealTable(value) {
      let arr = value.split('-')
      return arr[0] && arr[1] ? `${arr[0]} ( ${arr[1]} )` : '无台号'
    },
    // 处理单个商品退单金额
    dealRefundAmount(v) {
      let item = v.dot_order_item
      let refundAmount = 0
      if (item && item.length > 0) {
        item.forEach((item) => {
          // if (item.refund_status === 2 && (v.updated_at === item.refund_time || parseInt(b.diff(a, 'seconds')) === 1)) {
          //   refundAmount += item.pay_amount
          // }
          if (item.refund_status === 2) {
            refundAmount += item.pay_amount
          }
        })
        return refundAmount
      } else {
        return refundAmount
      }
    },
    dealRefundType (v) {
      let refundType = ''
      switch (v) {
        case 1:
          refundType = '会员卡'
          break
        case 2:
          refundType = '线下'
          break
        case 3:
          refundType = '赠送卡'
          break
        case 4:
          refundType = '股东卡'
          break
        case 5:
          refundType = '微信'
          break
        case 6:
          refundType = '支付宝'
          break
        default:
          refundType = '其他'
      }
      return refundType
    },
    dealPayType2(value) {
      let payTypes = ''
      switch (value) {
        case 1:
          payTypes = '微信'
          break
        case 2:
          payTypes = '支付宝'
          break
        case 3:
          payTypes = '小程序'
          break
        case 4:
          payTypes = '线下支付'
          break
        case 5:
          payTypes = '挂帐'
          break
        case 6:
          payTypes = '会员支付'
          break
        case 7:
          payTypes = '赠送卡支付'
          break
        case 8:
          payTypes = '股东卡'
          break
        default :
          payTypes = null
      }
      return payTypes
    },
    // 处理线下付款
    dealOfflineType(value) {
      value = value + ''
      let offlineType = ''
      switch (value) {
        case '1':
          offlineType = '微信'
          break
        case '2':
          offlineType = '支付宝'
          break
        case '3':
          offlineType = '现金'
          break
        case '4':
          offlineType = 'pos机'
          break
        case '5':
          offlineType = '宴请'
          break
        case '6':
          offlineType = '挂账'
          break
        case '7':
          offlineType = '后结'
          break
        case '8':
          offlineType = '美团'
          break
        case '10':
          offlineType = '混合'
          break
        default :
          offlineType = '其他'
      }
      return offlineType
    },
    // 处理支付类型
    dealPayType(value) {
      let arr = value.split('-')
      let payType = ''
      // 1:微信,2:支付宝,3:小程序 4:线下支付 5:挂账 6:会员卡支付
      switch (arr[0]) {
        case '1':
          payType = '微信'
          break
        case '2':
          payType = '支付宝'
          break
        case '3':
          payType = '小程序'
          break
        case '4':
          payType = '线下支付'
          break
        case '5':
          payType = '挂帐'
          break
        case '6':
          payType = '会员支付'
          break
        case '7':
          payType = '赠送卡支付'
          break
        case '8':
          payType = '股东卡支付'
          break
        default :
          payType = null
      }
      let text = ''
      if (Number(arr[0]) === 5) {
        switch (arr[1]) {
          case '2':
            text = '未付款'
            break
          case '3':
            text = '已付款'
            break
          case '4':
            text = '部分付款'
            break
          default:
            text = '未处理'
        }
        return `${payType} (${text})`
      }
      // | offline_pay_type | tinyint(3) unsigned | 支付类型(1:微信,2:支付宝,3:现金 4:pos机 5:宴请 6:挂账 7:后结 8:美团 9:其它) |
      let offlineType = ''
      switch (arr[1]) {
        case '1':
          offlineType = '微信'
          break
        case '2':
          offlineType = '支付宝'
          break
        case '3':
          offlineType = '现金'
          break
        case '4':
          offlineType = 'pos机'
          break
        case '5':
          offlineType = '宴请'
          break
        case '6':
          offlineType = '挂账'
          break
        case '7':
          offlineType = '后结'
          break
        case '8':
          offlineType = '美团'
          break
        case '9':
          offlineType = '其他'
          break
        case '10':
          offlineType = '混合'
          break
        default :
          offlineType = null
      }
      return offlineType ? `${payType} (${offlineType})` : payType
    },
    ledgerType(value) {
      let text = null
      switch (value) {
        case 2:
          text = '未付款'
          break
        case 3:
          text = '已付款'
          break
        default:
          text = '未处理'
      }
      return text
    }
  }

const installFilter = {
  install: function (Vue) {
    Vue.filter('amountFixedFilter', (val) => {
        if (!val) return val
        if (typeof val === 'string') val = Number(val)
        return (val !== Math.ceil(val)) ? val.toFixed(2) : val
    })
    Object.keys(filters).map(key => {
      Vue.filter(key, filters[key])
    })
  }
}
export default installFilter
