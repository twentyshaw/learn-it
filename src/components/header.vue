<template>
	<header class="no-login">
		<template>
			<div class="nav-bar">
				<div class="logo"><a href="#">LearnIT</a></div>
				<div class="navlist">
					<ul>
						<li><a href="#">Home</a></li><li><a href="#">Course</a></li><li><a href="#">Programs</a></li><li><a href="#">Contact</a></li>
					</ul>
				</div>
				<div class="login-btn"><a class="btn" href="#">SIGN IN</a></div>
			</div>
		</template>
	</header>
</template>

<script type="text/javascript">
	export default{
		name:"Header"
	}
</script>

<style scoped>
header.no-login{
	height: 90px;
	padding: 24px;
	position: fixed;
	width: 100%;
	z-index: 9999;
}
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
.navlist ul li a{
	padding: 5px 20px 0;
	border-bottom: 5px solid transparent;
	color: #fff;
}


</style>