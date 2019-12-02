import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import course from './modules/course.js'

Vue.use(Vuex) 

export default new Vuex.Store({
	modules:{
		auth,
		course
	}
})