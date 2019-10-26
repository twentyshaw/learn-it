<template>
<header class="no-login">
	<template>
		<div class="nav-bar">
			<div class="logo"><a href="#">LearnIT</a></div>
			<div class="navlist">
				<ul>
					<li><a href="#" data-view="home-top" @click="scrollTo">Home</a></li><li><a href="#" data-view="home-course" @click="scrollTo">Course</a></li><li><a href="#" data-view="home-merit" @click="scrollTo">Programs</a></li><li><a href="#" data-view="home-contact" @click="scrollTo">Contact</a></li>
				</ul>
			</div>
			<div class="login-btn"><a class="btn" href="#">SIGN IN</a></div>
		</div>
	</template>
</header>
<!-- 	<header class="login">
	<template>
		<div class="nav-bar">
			<div class="moto">
				<p>What doesn’t kill you, makes you stronger</p>
			</div>
			<div class="user-tag">
				<span class="greet">Hi,Dean</span>
				<span class="user-icon"><img src="../assets/user.jpg"></span>
			</div>
		</div>
	</template>
</header> -->
</template>

<script type="text/javascript">
	export default{
		name:"Header",
		methods:{
			scrollTo(e){
				e.preventDefault()
				var target = document.querySelector(`#${e.target.dataset.view}`)
				console.log(target)
				target.scrollIntoView()
			}
		}
	}
</script>

<style scoped>
/* 未登录 */
header.no-login{
	height: 90px;
	padding: 24px;
	position: fixed;
	width: 100%;
	z-index: 9999;
	transition: all 0.8s;
}

/* 导航栏的动画 */
header.no-login.active{
	background: #fff;
	height: 70px;
	box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.3);
	padding: 16px;
}
header.no-login.active .logo a,
header.no-login.active .navlist ul li a{
	color: #000;
}
header.no-login.active .navlist ul li a:hover{
	color: #00A491;
}
header.no-login .navlist ul li.inview a{
	border-bottom-color: #00A491; 
	color: #00A491;
}
/* ******** */
.nav-bar{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 112px;
	height: 100%;
	align-items: center;
}
.logo a{
	font-weight: bold;
	font-size: 22px;
	color: #fff;
	border-bottom: 5px solid transparent;
}
.navlist ul{
	display: flex;
	flex-wrap: wrap;
}
.navlist ul li{
	margin: 0 20px;
}
.navlist ul li a{
	padding: 5px 0 4px;
	border-bottom: 2px solid transparent;
	color: #fff;
}
.navlist ul li a:hover{
	border-bottom-color: #00A491; 
}

/* 登陆 */


</style>
