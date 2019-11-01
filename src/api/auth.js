var AV = require('leancloud-storage');
var { Query, User } = AV;

AV.init({
  appId: "Q1Ys7Vyt30FfeLpYDsCek9pp-gzGzoHsz",
  appKey: "V45YzfwdXO7kak9rENDBeFWD"
});

export default{
	signUp(email,username,password){
		return new Promise((resolve,reject)=>{
			// 创建实例
			var user = new AV.User();

			user.setEmail(email);
			user.setUsername(username);
			user.setPassword(password);

			user.signUp().then(function (user) {
			  // 注册成功
			  console.log(user);
			  resolve(user)
			}, function (error) {
			  // 注册失败（通常是因为用户名已被使用） 
			  reject(error)
			  console.log('用户名被占用')
			});
		})
	},

	signIn(username,password){
		return new Promise((resolve,reject)=>{
			AV.User.logIn(username,password).then(function (user) {
			  resolve(user)
			}, function (error) {
			  // 登录失败（可能是密码错误）
			  reject(error)
			  console.log('密码错误')
			});
		})		
	},

	current(){
		var currentUser = AV.User.current();
		if (currentUser) {
			return true
		} else {
			return false
		}
	}


}