import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import User from '@/pages/userTop/user.vue'
import Home from '@/pages/home/home.vue'
import Course from '@/pages/course/course.vue'
import Forum from '@/pages/forum/forum.vue'
import Memo from '@/pages/memo/memo.vue'
import Message from '@/pages/message/message.vue'
import Test from '@/pages/test/test.vue'

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
    	component:User,
    	children:[
    		{
    			path:'home',
    			name: Home,
    			component:Home
    		},
        {
          path:'course',
          name: Course,
          component:Course
        },
        {
          path:'forum',
          name: Forum,
          component:Forum
        },
        {
          path:'memo',
          name: Memo,
          component:Memo
        },
        {
          path:'message',
          name: Message,
          component:Message
        },
        {
          path:'exercise',
          name: Test,
          component:Test
        }

    	]
    }
  ]
})
