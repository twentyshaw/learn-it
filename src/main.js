// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import  VueResource  from 'vue-resource'
import App from './App'
import store from './store/main.js'
import auth from './api/auth.js'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/font.css'
import Util from '@/helper/util'




Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Util)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
