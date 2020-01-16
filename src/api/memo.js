import AV from '../helper/leancloud.js'
import { Message } from 'element-ui'

var Memo = AV.Object.extend('Memo')
export default{
	createMemo(title,desc){
		var newMemo = new Memo()
		var acl = new AV.ACL()
		acl.setPublicReadAccess(false)
		acl.setReadAccess(AV.User.current(),true)
		acl.setWriteAccess(AV.User.current(),true)
		newMemo.setACL(acl)
		newMemo.set('memottl',title)
		newMemo.set('memoDesc',desc)
		return newMemo.save().then(function(memo){
			console.log('保存成功。memoObjId：' + memo.id)
			Message.success({
				message:'メモが保存されました！',
				customClass:'message-popup'
			})
			return memo
		},function(error){
			console.log('创建失败')
		})
	},

	getMemo(memoID){
		var query = new AV.Query('Memo')
		return query.get(memoID).then(function(memo){
			console.log(memo)
			var memottl = memo.get('memottl')
			var memoDesc = memo.get('memoDesc')
			return {memottl, memoDesc}
		},function(){
			console.log('获取记录失败')
		})
	},
	getMemoList(){
		let query = new AV.Query('Memo')
		return query.find().then((memos) => {
			//console.log(memos)
			return memos
		}, function() {
			console.log('获取记录失败')
		})
	  },

	updateMemo(memoID,title,desc){
		var query = new AV.Query('Memo')
		return query.get(memoID).then(function(memo){
			memo.set('memottl',title)
			memo.set('memoDesc',desc)
			memo.save()
		}).then(function(memo){
			console.log('修改成功。memoId：' + memo.id)
			Message.success({
				message:'メモが保存されました！',
				customClass:'message-popup'
			})
			return memo
		},function(error){
			console.log('修改失败')
		})
	},

	deleteMemo(memoID){
		var query = new AV.Query('Memo')
		return query.get(memoID).then(function(memo){
			memo.destroy();
		}).then(function(){
			Message.success({
				message:'メモが削除されました！',
				customClass:'message-popup'
			})
			console.log('删除成功')
		},function(error){
			console.log('删除失败')
		})
		
	}
}



