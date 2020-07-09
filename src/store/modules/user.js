const userInfo = {
  state: {
    userInfo: null,
  },
  mutations: {
    // 用户信息
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
  getters: {
    userInfo: state => state.userInfo,
  }
}
export default userInfo
