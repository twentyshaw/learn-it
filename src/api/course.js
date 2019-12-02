import AV from '../helper/leancloud.js'
var Course = AV.Object.extend('Course')
export default{
	complete(count,test){
		var courseDone = new Course()
		var acl = new AV.ACL()
		acl.setPublicReadAccess(false)
		acl.setReadAccess(AV.User.current(),true)
		acl.setWriteAccess(AV.User.current(),true)
		courseDone.setACL(acl)
		courseDone.set('courses',count)
		courseDone.set('tests',test)
		return courseDone.save().then(function(courses){
			console.log('保存成功。coursesId：' + courses.id)
			return courses
		},function(error){
			console.log('保存失败')
		})
	},

	getCourse(){
		var query = new AV.Query('Course')
		return query.find().then(function(course){
			console.log(course)
			var courseId = course[0].id
			var courseCount = course[0].get('courses')
			var courseTests = course[0].get('tests')
			return {courseId, courseCount, courseTests}
		},function(){
			console.log('获取记录失败')
		})
	},

	updateCourse(courseId,count){
		var query = new AV.Query('Course')
		return query.get(courseId).then(function(course){
			course.set('courses',count)
			return course.save()
		}).then(function(courses){
			console.log('修改成功。coursesId：' + courses.id)
			return courses
		},function(error){
			console.log('修改失败')
		})
	},

	updateTests(courseId,test){
		var query2 = new AV.Query('Course')
		return query2.get(courseId).then(function(course){
			course.set('tests',test)
			return course.save()
		}).then(function(courses){
			console.log(courses.attributes.tests)
			return courses
		},function(error){
			console.log('修改失败')
		})		
	}
}



