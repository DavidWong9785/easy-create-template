export const routes = [{
  path: '*',
  redirect: '/'
}, {
  path: '/',
  name: 'error',
  component: () => import('../pages/error.vue'),
  meta: {
    title: 'easy-create error page'
  }
}, {
  path: '/home',
  name: 'home',
  component: () => import('../pages/home.vue'),
  meta: {
    title: 'easy-create home page',
    init: [{
      'userInfo': 'getUserInfo',
      'someInfo': 'getSomeInfo',
      'otherInfo': 'getOtherInfo',
    }]
  }
}]
