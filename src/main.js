import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import config from './config/config'
import moment from 'moment'
import util from './utils/common'
import extend from './extends/index'

// rem单位自适应
import 'amfe-flexible';
// 兼容低版本浏览器
import "babel-polyfill";

import './styles/base.less'
import './styles/animation.less'


Vue.prototype.$config = config
Vue.prototype.$util = util
Vue.prototype.$moment = moment
Vue.prototype.$Toast = vant.Toast

Vue.use(extend)


Vue.config.productionTip = false

window.app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

