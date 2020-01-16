import Memo from '@/api/memo.js'

const state = {
	memoID: "",
	memoTTl:"",
	memoDes:"",
	memoList:[]
}

const getters = {
	memoID:memoID=>state.memoID,
	memoTTl:memoTTl=>state.memoTTl,
	memoDes:memoDes=>state.memoDes,
	memoList:memoList=>state.memoList
}

const mutations = {
	setMemo(state,payload){
		if (payload.memoID) {
			state.memoID = payload.memoID
		}
		state.memoTTl = payload.memoTTl
		state.memoDes = payload.memoDes
	},
	setMemoList(state,payload){
		state.memoList = payload.memoList
	}
}

const actions = {
	createMemo({commit},{title,desc}){
		return Memo.createMemo(title,desc)
			.then(res=>{
				console.log(res)
				commit('setMemo',{memoID:res.id,memoTTl:res.attributes.memottl,memoDes:res.attributes.memoDesc})
			})
	},

	updateMemo({commit},{memoID,title,desc}){
		return Memo.updateMemo(memoID,title,desc)
			.then(res=>{
				console.log(res)
				commit('setMemo',{memoTTl:res.attributes.memottl,memoDes:res.attributes.memoDesc})
			})
	},

	memoInfo({commit},{memoID}){
		Memo.getMemo(memoID)
			.then(res=>{
				console.log(res)
				commit('setMemo',{memoTTl:res.memottl,memoDes:res.memoDesc})
			})
	},

	memoListInfo({commit}){
		Memo.getMemoList()
			.then(res=>{
				commit('setMemoList',{memoList:res})
				console.log(state.memoList)
			})
	},

	memoDelete({dispatch},{memoID}){ //注意即使没有用到commit也要写，占个位置
		Memo.deleteMemo(memoID)
			.then(()=>dispatch('memoListInfo'))
	}
	
}

export default {
	state,
	getters,
	mutations,
	actions
}