import auth from '@/api/auth.js'

const state = {
	user:null, //user是一个对象，里面有用户名 密码 邮箱
	isLogin:false
}

const getters = {
	user: state => state.user, //getters里面放的是函数，所以user函数完成的操作就是接收一个state返回 state.user
	isLogin: state => state.isLogin 
}

const mutations = { //mutations不发送请求，他只修改数据
	setUser(state,payload){
		state.user = payload.user
	},
	setLogin(state,payload){
		state.isLogin = payload.isLogin
	}
}

const actions = {
	register({commit},{email, username, password}){
		auth.signUp(email,username,password)
			.then(res=>{
				commit('setUser',{user:res})
				commit('setLogin',{isLogin:true})
			})
	},

	login({commit},{username, password}){
		auth.signIn(username, password)
			.then(res=>{
				commit('setUser',{user:res})
				commit('setLogin',{isLogin:true})
			})
	},

	getInfo(){
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}