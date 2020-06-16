import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { login } from './login/index'
import { register } from './register/index'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('@/views/Home.vue'),
    meta: { requireAuth: true },
  },
  login,
  register
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 1、判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 2、判断本地是否存在access_token
    if (JSON.parse(sessionStorage.getItem('islogin'))) {
      next();
    } else {
      // 3、进入登录页面
      next({
        path: '/login'
      })
    }
  } else {
    next();
  }
  // 如果路由直接跳转到登录，判断本地 token 是否存在，存在不允许直接跳转
  if (to.fullPath === '/login') {
    if (JSON.parse(sessionStorage.getItem('islogin'))){
      next({
        path: from.fullPath
      })
    }
  }
})
export default router
