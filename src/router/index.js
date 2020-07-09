import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import store from '../store'
import initAPI from '../api/baseInfo'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

router.beforeEach((to, from, next) => {
  const promiseAll = []
  let toast = null
  document.title = to.meta.title
  if (to.meta.init) {
    Object.keys(to.meta.init[0]).map(key => {
      if (!store.getters[key]) {
        promiseAll.push(new Promise(resolve => {
          initAPI[to.meta.init[0][key]](to.params.barId).then(resolve)
        }))
      }
    })
  }
  if (promiseAll.length) {
    toast = vant.Toast.loading({
      message: '信息请求中',
      forbidClick: true,
      loadingType: 'spinner',
    })
    Promise.all(promiseAll).then(() => {
      toast.clear()
      toast = null
      next()
    })
  } else next()
})

export default router
