import store from '../store'

export default {
  // 用户信息
  getUserInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          username: '小米'
        })
      }, 1000)
    })
  },
  getOtherInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('OtherInfo')
      }, 1000)
    })
  },
  getSomeInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('SomeInfo')
      }, 1000)
    })
  },
}