import AV from '../helper/leancloud.js'
import { Message } from 'element-ui'
export default{
	signUp(email,username,password){
		// 创建实例
		var user = new AV.User();

		user.setEmail(email);
		user.setUsername(username);
		user.setPassword(password);

		return user.signUp().then(function (user) {
		  // 注册成功
		  Message.success({
			message:'登録完成しました！',
			customClass:'message-popup'
		  })
		  
		  return user
		}, function (error) {
		  // 注册失败（通常是因为用户名已被使用） 
		  Message.error({
			message:'このユーザー名またはメールアドレスは利用できません',
			customClass:'message-popup'
		  });
		  return error
		})
	},

	signIn(username,password){
		return AV.User.logIn(username,password).then(function (user) {
			Message.success({
				message:'ログインしました！',
				customClass:'message-popup'
			})
			
			return user			
			}, function (error) {
				　Message.error({
				message:'ユーザー名またはパスワードが違います!',
				customClass:'message-popup'
			  });
			  return error
			})	
	},

	current(){
		var currentUser = AV.User.current()
		if (currentUser) {
			var obj = {
				username:'',
				email:'',
				userId:'',
				islogin:''
			}
			obj.username = currentUser.attributes.username
			obj.email = currentUser.attributes.email
			obj.userId = currentUser.id
			obj.islogin = currentUser._isCurrentUser
			return obj
		} else {
			return "用户未登录"
		}
	},

	signOut(){
		AV.User.logOut()
		Message({
          message: 'ログアウトしました',
          customClass:'message-popup'
	    })
	}


}