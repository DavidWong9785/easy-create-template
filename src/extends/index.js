const paramsSection = [{
  "origin-pay": `import OP from './origin-pay'`,
  'ping++': `import PP from './ping++'`,
}, {
  "origin-pay": `Vue.prototype.$CALL_WE_PAY = OP.callWepay;\n    Vue.prototype.$CALL_ALI_PAY = OP.callAlipay`,
  'ping++': `Vue.prototype.$CALL_PING_PAY = PP.callPingPay`,
}]
const target = [
`import filters from './filters'
import VueLazyload from 'vue-lazyload'
import lazyImg from '../assets/icon-bang.svg'\n`
]

module.exports = function (params) {

  params = params.module
  if (params.length) {
    Object.keys(paramsSection[0]).map(key => {
      if (params.includes(key)) target.push(`${paramsSection[0][key]}\n`)
    })
  }

  target.push(`\nimport './storageExtends';\nimport './mathExtends'`)

  target.push(`
export default {
  install: (Vue) => {

    Vue.prototype.$WX = /MicroMessenger/.test(navigator.userAgent);
    Vue.prototype.$ZFB = /Alipay/.test(navigator.userAgent);\n`)

  if (params.length) {
    Object.keys(paramsSection[1]).map(key => {
      if (params.includes(key)) target.push(`    ${paramsSection[1][key]}\n`)
    })
  }

  target.push(`
    Vue.use(vant.Toast)
    Vue.use(filters)
    Vue.use(VueLazyload, {
      // preLoad: 1.3,
      error: require('../assets/icon_message.png'),
      loading: lazyImg,
      attempt: 1
    })
  }
}`)

  return target.join('')
}