import Forum from '@/api/forum.js'
import forum from '../../api/forum'

const state = {
	forumID: "",
	forumTTl:"",
    forumDes:"",
    forumTime:"",
    forumLike:0,
    forumView:0,
    poster:"",
    posterID:"",
    posterIcon:"",
    forumCome:[],
	forumList:[]
}

const getters = {
	forumID:forumID=>state.forumID,
	forumTTl:forumTTl=>state.forumTTl,
    forumDes:forumDes=>state.forumDes,
    forumTime:forumTime=>state.forumTime,
    forumLike:forumLike=>state.forumLike,
    forumView:forumView=>state.forumView,
    poster:poster=>state.poster,
    posterID:posterID=>state.posterID,
    posterIcon:posterIcon=>state.posterIcon,
    forumCome:forumCome=>state.forumCome,
	forumList:forumList=>state.forumList
}

const mutations = {
	setForum(state,payload){
		state.forumID = payload.forumID
		state.forumTTl = payload.forumTTl
        state.forumDes = payload.forumDes
        state.forumTime = payload.forumTime
        state.forumLike = payload.forumLike
        state.forumView = payload.forumView
        state.poster = payload.poster
        state.posterID = payload.posterID
        state.posterIcon = payload.posterIcon
	},
	setForumList(state,payload){
		state.forumList = payload.forumList
    },
    setCommList(state,payload){
        state.forumCome = payload.forumCome
    }
}

const actions = {
	createForum({commit},{title,desc}){
		return Forum.createForum(title,desc)
			.then(res=>{
                commit('setForum',{
                    forumID:res.id,
                    forumTTl:res.attributes.forumttl,
                    forumDes:res.attributes.forumDesc,
                    forumTime:res.updatedAt,
                    forumLike:res.attributes.forumLike,
                    forumView:res.attributes.forumView,
                    poster:res.attributes.poster,
                    posterID:res.attributes.posterID,
                    posterIcon:res.attributes.avatar
                })
                return res
            })
	},

	commentForum({commit,dispatch},{forumID,text}){
		return Forum.commentForum(forumID,text)
			.then(res=>{
                console.log("myComment: ")
                console.log(res)
                dispatch('getcommList',{forumID})
			})
    },

    getcommList({commit},{forumID}){
        return Forum.commentList(forumID)
                .then(res=>{
                    console.log(res)
                    commit('setCommList',{forumCome:res})
                })
    },

    likeForum({commit},{forumID}){
        return Forum.likeForum(forumID)
            .then(res=>{
                commit('setForum',{forumLike:forum.attributes.forumLike})
            })
    },

    viewForum({commit},forumID){
        return Forum.viewForum(forumID)
            .then(res=>{
                commit('setForum',{forumView:forum.attributes.forumView})
            })
    },

	forumInfo({commit,dispatch},{forumID}){
		Forum.getForum(forumID)
			.then(res=>{
                console.log(res)
                console.log(res.updatedAt)
				commit('setForum',{
                    forumTTl:res.attributes.forumttl,
                    forumDes:res.attributes.forumDesc,
                    forumTime:res.updatedAt,
                    forumLike:res.attributes.forumLike,
                    forumView:res.attributes.forumView,
                    poster:res.attributes.poster,
                    posterID:res.attributes.posterID,
                    posterIcon:res.attributes.avatar
                })
                dispatch('getcommList',{forumID})
                console.log(state.poster)
			})
	},

	forumListInfo({commit}){
		Forum.getForumList()
			.then(res=>{
				commit('setForumList',{forumList:res})
				console.log(state.forumList)
			})
    }
}

export default {
	state,
	getters,
	mutations,
	actions
}