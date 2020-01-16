import AV from '../helper/leancloud.js'
import { Message } from 'element-ui'
import file from '@/api/file.js'

var Forum = AV.Object.extend('Forum')
var Comment = AV.Object.extend('Comment')

export default{
	createForum(title,desc){
		var newForum = new Forum()
		var acl = new AV.ACL()
        acl.setPublicReadAccess(true)
        acl.setPublicWriteAccess(true)
		acl.setReadAccess(AV.User.current(),true)
		acl.setWriteAccess(AV.User.current(),true)
		newForum.setACL(acl)
		newForum.set('forumttl',title)
        newForum.set('forumDesc',desc)
        newForum.set('forumLike',0)
		newForum.set('forumView',0)
		newForum.set('posterID',AV.User.current().id)
		newForum.set('poster',AV.User.current().attributes.username)
		return file.getAvatar(AV.User.current().id).then(res=>{
			console.log("hi:")
			console.log(res)
			newForum.set('avatar',res.attributes.url)
		}).then(function(){
			return newForum.save().then(function(forum){
				Message.success({
					message:'Submission Successful！',
					customClass:'message-popup'
				})
				return forum
			},function(error){
				console.log('创建失败')
			})
		})
    },
    
    getForum(forumID){
		var query = new AV.Query('Forum')
		return query.get(forumID).then(function(forum){
			console.log(forum)
			return forum
		},function(){
			console.log('获取记录失败')
		})
    },
    
	getForumList(){
		let query = new AV.Query('Forum')
		return query.find().then((forums) => {
			//console.log(forums)
			return forums
		}, function() {
			console.log('获取记录失败')
		})
    },

    commentForum(forumID,text){
        var Forum = AV.Object.createWithoutData('Forum', forumID)
        var comment = new Comment();
		comment.set('content', text);
		comment.set('comLike',0)
		comment.set('commentorID',AV.User.current().id)
		comment.set('commentor',AV.User.current().attributes.username)
		comment.set('post', Forum);
		return file.getAvatar(AV.User.current().id).then(res=>{
			comment.set('avatar',res.attributes.url)
		}).then(function(){
			return comment.save().then(function(come){
				console.log('保存成功。comeObjId：' + come.id)
				Message.success({
					message:'Submission Successful！',
					customClass:'message-popup'
				})
				return come
			},function(error){
				console.log('创建失败')
			})
		})
    },
	
	commentList(forumID){
		var post = AV.Object.createWithoutData('Forum', forumID);
		var query = new AV.Query('Comment');
		query.equalTo('post', post);
		return query.find().then(function (comments) {
			return comments
		});
	},
	
    likeForum(forumID){
		var query = new AV.Query('Forum')
		return query.get(forumID).then(function(forum){
			forum.increment('forumLike', 1);
			return forum.save().then(function(forum){
				console.log('like')
				console.log(forum)
				return forum
			},function(error){
				console.log('修改失败')
			})
		})
    },

    viewForum(forumID){
		var query = new AV.Query('Forum')
		return query.get(forumID).then(function(forum){
			forum.increment('forumView', 1);
		}).then(function(forum){
			return forum
		},function(error){
			console.log('修改失败')
		})
    }
}