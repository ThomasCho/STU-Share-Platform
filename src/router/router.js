import Vue from 'vue'
import VueRouter from 'vue-router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

import routes from './routes'
/* eslint-disable no-unused-vars */
import { doGetGeneral, doPostWithObjectParams } from '../utils/request-common'
import requestApi from '../../option'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 路由拦截
router.beforeEach((to, from, next) => {
  if (from.fullPath === '/' && to.fullPath !== '/' && to.fullPath !== '/register' && document.cookie.indexOf('user_name') === -1) {  // 判断该路由是否需要登录权限
    next('/')
    alert('请登录')
  } else {
    next()
  }
})

// 导出router对象
export default router
