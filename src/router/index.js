import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import User from '@/pages/userTop/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/user',
    	name: 'User',
    	component:User
    }
  ]
})
