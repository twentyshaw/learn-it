import auth from '@/api/auth.js'


const state = {
	user:auth.current() || null, //user是一个对象，里面有用户名 密码 邮箱
	isLogin:auth.current().islogin || false
}

const getters = {
	user: state => state.user, //getters里面放的是函数，所以user函数完成的操作就是接收一个state返回 state.user
	isLogin: state => state.isLogin
}

const mutations = { //mutations不发送请求，他只修改数据
	setUser(state,payload){
		state.user = payload.user
		state.isLogin = payload.isLogin
	}
}

const actions = {
	register({commit},{email, username, password}){
		return auth.signUp(email,username,password)
			.then(res=>{
				commit('setUser',{user:res,isLogin:true})
			})
	},

	login({commit},{username, password}){
		return auth.signIn(username, password)
			.then(res=>{
				commit('setUser',{user:res,isLogin:true})
			})
	},

	getInfo({commit,dispatch}){
		var res = auth.current()
		commit('setUser',{user:res,isLogin:res.islogin})
		dispatch('courseInfo',null,{root:true}) //调用course模块中的courseInfo
		console.log('ok')
		return res
	},

	logout({commit}){
		auth.signOut()
		commit('setUser',{user:null,isLogin:false})
		console.log("注销成功")
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}