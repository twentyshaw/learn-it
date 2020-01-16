import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import course from './modules/course.js'
import memo from './modules/memo.js'
import forum from './modules/forum.js'
import file from './modules/file.js'

Vue.use(Vuex) 

export default new Vuex.Store({
	modules:{
		auth,
		course,
		memo,
		forum,
		file
	}
})