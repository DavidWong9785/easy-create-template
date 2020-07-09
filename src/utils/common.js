import moment from 'moment'
export default {
  /**
   * 清空通用设置存储
   * @param key
   * @param value
   */
  removeStorage(key) {
    if (key) {
      localStorage.removeItem(key)
    }
  },
  /**
   * 通用设置存储
   * @param key
   * @param value
   */
  setStorage(key, value) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  },
  /**
   * 通用获取存储
   * @param key
   */
  getStorage(key) {
    let valueJson = localStorage.getItem(key)
    if (!valueJson) {
      return
    }
    return JSON.parse(valueJson)
  },
  /**
   * 通用设置存储sessionStorage
   * @param key
   * @param value
   */
  setSStorage(key, value = {}) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 通用获取存储sessionStorage
   * @param key
   */
  getSStorage(key) {
    let valueJson = sessionStorage.getItem(key)
    if (!valueJson) {
      return
    }
    return JSON.parse(valueJson)
  },

  /**
   * Created by 15733 on 2017/8/14.
   */
  getQueryString(name) {
    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
  },

  /**
   * 日期格式化
   * @param date
   * @param fmt
   * @returns {*}
   */
  formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero(str) {
    return ('00' + str).substr(str.length)
  },
  // 手机号校验
  // 手机尾号4位格式 也可满足该正则
  isPoneAvailable(phone) {
    let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    let numberReg = /^\d{4}$/
    if (numberReg.test(phone)|| myreg.test(phone)) {
      return false
    } else {
      return true
    }
  },
  /**
   * 数字校验
   * @param nubmer
   * @param isPositiveInt 是否正整数
   * @returns {boolean}
   */
  checkNum(nubmer, isPositiveInt = false) {
    let re = isPositiveInt ? /^[1-9]+.?[0-9]*/ : /^[0-9]+.?[0-9]*/ // 判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/
    if (re.test(nubmer)) {
      return true
    } else {
      return false
    }
  },
  /**
   * 获取UA标识
   */
  isWeiXin() {
    // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase()
    // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.indexOf('windowswechat') !== -1) {
      return true
    } else {
      return false
    }
  },
  /**
   * 强制跳转
   * @param targetProtocol http 或 https
   */
  forcedToJumpHttps(targetProtocol) {
    if (window.location.protocol.slice(0, window.location.protocol.length - 1) !== targetProtocol) {
      window.location.href = targetProtocol + ':' + window.location.href.substring(window.location.protocol.length)
    }
  },
  /**
   * 判断字符串是包含某字符
   * @param str 字符串
   * @param value 要判断的字符
   * @returns {boolean} 存在则返回true
   */
  isInClude(str, value) {
    return str.indexOf(value) !== -1
  },
  /**
   * 将数字转换成金额显示
   * @param num
   * @returns {string | *}
   */
  toMoney(num, fixed = 2) {
    if (num && typeof num !== 'string') {
      num = num.toFixed(fixed)
      num = parseFloat(num)
      num = num.toLocaleString()
      return num
    } else {
      return num
    }
  },
  /**
   * 获取当天日期
   * @param format
   * @returns {string}
   */
  getTodayDate(format) {
    return moment().format(format)
  },
  /**
   * 防反跳。func函数在最后一次调用时刻的wait毫秒之后执行
   * @param func 执行的函数
   * @param wait 时间间隔
   * @returns {funtion}
   */
  debounce(fn, delay) {
    var timer
    return function () {
      var context = this
      var args = arguments
      clearTimeout(timer)
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  },
  /**
   * 判断浮点数是否相等
   * @param left 左边数值
   * @param right 右边数值
   */
  isEqualDoubleNumber (left = 0.0, right = 0.0) {
    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2)
  }
}
