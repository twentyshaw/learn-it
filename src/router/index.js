import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import User from '@/pages/userTop/user.vue'
import Home from '@/pages/home/home.vue'
import Course from '@/pages/course/course.vue'
import Forum from '@/pages/forum/forum.vue'
import ForumDetail from '@/pages/forum/forum-detail.vue'
import Ask from '@/pages/forum/ask.vue'
import Memo from '@/pages/memo/memo.vue'
import MemoDetail from '@/pages/memo/memo-detail.vue'
import Message from '@/pages/message/message.vue'
import Test from '@/pages/test/test.vue'
import Exam from '@/components/tests/exam.vue'
import Set from '@/pages/setting/set.vue'
import store from '@/store/main.js'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{vistor:true}
    },
    {
    	path: '/user',
    	name: 'User',
    	component:User,
      meta:{requiresAuth:true},
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
          component:Forum,
          children:[
            {
              path:'forum_detail/:forumID',
              name:ForumDetail,
              component:ForumDetail,
              props:true
            },
            {
              path:'forum_ask',
              name:Ask,
              component:Ask
            }
          ]
        },
        {
          path:'memo',
          name: Memo,
          component:Memo,
          children:[
            {
              path:'memo_detail/:memoID',
              name:MemoDetail,
              component:MemoDetail,
              props:true
            },
            {
              path:'memo_detail',
              name:MemoDetail,
              component:MemoDetail           
            }
          ]
        },
        {
          path:'message',
          name: Message,
          component:Message
        },
        {
          path:'exercise',
          name: Test,
          component:Test,
          children:[
            {
              path:'exam/:examid',
              name:Exam,
              component:Exam,
              props:true
            }
          ]
        },
        {
          path:'setting',
          name:Set,
          component:Set
        }

    	]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('getInfo').then(res=>{
      if (!res.islogin) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else if(to.matched.some(record => record.meta.vistor)) {
    store.dispatch('getInfo').then(res=>{
      if (res.islogin) {
        next({
          path: '/user/home',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })    
  } else {
    next()
  }
})

export default router