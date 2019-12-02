<template>
	<div id="login-box">
	<div class="login-inner userbox">
      <form action="" method="post" class="form-box">
        <h3>Sign In</h3><span class="close"><a href="#" @click="closeBox"><i class="iconfont icon-hebingxingzhuang"></i></a></span>
        <div class="form-group">
          <input v-model="username" type="text" class="form-control" placeholder="Username"/>
        </div>
        <div class="form-group">
          <input v-model="password"  type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <input @click="signIn" @keyup.enter="signIn" type="submit" class="btn btn-primary btn-pill" value="Sign In">
        </div>
      </form>
      <p><a href="#">Forgot Password</a></p>
    </div>		
	</div>
</template>

<style type="text/css">
/* login-box */
#login-box{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999999;
	width: 100%;
	height: 100vh;
	background: rgba(52, 58, 64,0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	display: none;
}
#login-box .login-inner{
	width: 30%;
}
.login-inner{
	position: relative;
}
.close a{
	position: absolute;
	top: 14px;
	right: 14px;
	color: #00A491;
}
.close i{
	font-size: 24px;
}
p a{
	text-decoration: underline;
	color: #00A491;
}
</style>

<script type="text/javascript">
import { mapActions } from 'vuex'

export default{
	data(){
		return {
			username:'',
			password:''
		}
	},
	methods:{
		...mapActions(['login']),
		closeBox(e){
			e.preventDefault()
			var mybox = document.querySelector('#login-box')
			mybox.style.display = "none"
		},

		signIn(e){
			e.preventDefault()
			this.login({username:this.username, password:this.password})
				.then(()=>{
					this.$router.push({path:'/user/home'})
				})
		}
	}
}
</script>