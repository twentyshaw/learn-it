import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'

Vue.use(Vuex) 
console.log('2')
export default new Vuex.Store({
	modules:{
		auth
	}
})