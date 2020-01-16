import file from '@/api/file.js'


const state = {
	usericon:"",
	iconID:""
}

const getters = {
	//user: state => state.user, //getters里面放的是函数，所以user函数完成的操作就是接收一个state返回 state.user
	usericon: state => state.usericon,
	iconID:state=>state.iconID
}

const mutations = { //mutations不发送请求，他只修改数据
	setUserIcon(state,payload){
		state.usericon = payload.usericon,
		state.iconID = payload.iconID
	}
}

const actions = {
    saveAvatar({commit},{image}){
		file.saveAvatar(image)
		.then(res=>{
			commit('setUserIcon',{usericon:res.attributes.url,iconID:res.id})
		})	
	},
	
	avatarInfo({commit},{user}){
		file.getAvatar(user)
			.then(res=>{
				console.log(res)
				commit('setUserIcon',{usericon:res.attributes.url,iconID:res.id})
			})
	},

	avatarDelete({commit},{id}){
		file.deleteOldAva(id)
	},

	defaultAva({commit}){
		file.setDefaultAva()
			.then(res=>{
				commit('setUserIcon',{usericon:res.attributes.url,iconID:res.id})
			})	
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}