import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    otherInfo: null,
    someInfo: null
  },
  getters: {
    otherInfo: state => state.otherInfo,
    someInfo: state => state.someInfo,
  },
  mutations: {
    setOtherInfo(state, payload) {
      state.otherInfo = payload
    },
    setSomeInfo(state, payload) {
      state.someInfo = payload
    },
  }
})
