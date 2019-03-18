// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueRouter from 'vue-router'
import { doGetGeneral, doPostWithObjectParams } from '../src/utils/request-common.js'
import requestApi from '../option'
import axios from 'axios'
import Vuex from 'vuex'
Vue.prototype.$http = axios
global.requestApi = requestApi
global.doGetGeneral = doGetGeneral
global.doPostWithObjectParams = doPostWithObjectParams

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.debug = true // 开启错误提示

import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
  store
})

const store = new Vuex.Store({
  state: {
    fileId: ''
  },
  mutations: {
    changeCurrentFileId (state, payload) {
      state.fileId = payload.fileId
    }
  }
})
export {store}

