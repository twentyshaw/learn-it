import course from '@/api/course.js'

const state = {
	courseId: '',
	courseCount:0,
	courseTests:[
		{testResult:false,
		testPoint:0},
		{testResult:false,
		testPoint:0},
		{testResult:false,
		testPoint:0},
		{testResult:false,
		testPoint:0},
		{testResult:false,
		testPoint:0},
		{testResult:false,
		testPoint:0},
		{testResult:false,
		testPoint:0}
	]
}

const getters = {
	courseId:courseId=>state.courseId,
	courseCount:courseCount=>state.courseCount,
	courseTests:courseTests=>state.courseTests
}

const mutations = {
	setCourse(state,payload){
		if (payload.courseId) {
			state.courseId = payload.courseId
		}
		if(payload.courseTests){
			state.courseTests = payload.courseTests
		}
		state.courseCount = payload.courseCount
	}
}

const actions = {
	createCourse({commit},{courseCount,courseTests}){
		return course.complete(courseCount,courseTests)
			.then(res=>{
				commit('setCourse',{courseId:res.id,courseCount:res.attributes.courses})
			})
	},

	addCourse({commit},{courseId,courseCount}){
		return course.updateCourse(courseId,courseCount)
			.then(res=>{
				commit('setCourse',{courseCount:res.attributes.courses})
			})
	},

	courseInfo({commit}){
		course.getCourse()
			.then(res=>{
				commit('setCourse',{courseId:res.courseId,courseCount:res.courseCount,courseTests:res.courseTests})
			})
	},

	addPoints({commit},{courseId,tests}){
		return course.updateTests(courseId,tests)
			.then(res=>{
				commit('setCourse',{courseTests:res.attributes.tests})
			})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}