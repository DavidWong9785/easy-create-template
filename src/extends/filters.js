const filters = {

}

const installFilter = {
  install: function (Vue) {
    Object.keys(filters).map(key => {
      Vue.filter(key, filters[key])
    })
  }
}
export default installFilter
