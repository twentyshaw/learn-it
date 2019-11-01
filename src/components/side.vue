<template>
	<aside>
		<div class="logo">LearnIT</div>
		<ul>
			<li><router-link to="/user/home"><span class="icon"><i class="iconfont icon-xuanzhongshangcheng"></i></span>Home</router-link></li>
			<li><router-link to="/user/course"><span class="icon"><i class="iconfont icon-course2"></i></span>Course</router-link></li>
			<li><router-link to="/user/exercise"><span class="icon"><i class="iconfont icon-Exercises"></i></span>exercise</router-link></li>
			<li><router-link to="/user/memo"><span class="icon"><i class="iconfont icon-ziyuan"></i></span>Memo</router-link></li>
			<li><router-link to="/user/message"><span class="icon"><i class="iconfont icon-message"></i></span>Message</router-link></li>
			<li><router-link to="/user/forum"><span class="icon"><i class="iconfont icon-kafei"></i></span>Forum</router-link></li>
		</ul>
		<div class="out"><span class="icon"><i class="iconfont icon-log-out"></i></span>Logout</div>
	</aside>
</template>

<style type="text/css" scoped>
aside{
	position: fixed;
	width: 20%;
	height: 100vh;
	padding: 20px 0 20px 20px;
	background: #00A491;
	color: #fff;
	text-align: left;
}
aside .logo{
    padding: 0;
    font-weight: bold;
	font-size: 24px;
	margin-bottom: 50px;
	padding-left: 20px
}
aside ul li a{
	display: block;
	padding:14px 0 14px 20px;
	border-top-left-radius: 90px;
	border-bottom-left-radius: 90px;
	color: #fff;
	font-size: 20px;
}
aside ul li a:hover{
	opacity: 0.8;
	background: rgba(0, 214, 189,0.8);
}
aside .icon{
	padding-right: 20px;
}
aside .iconfont{
	font-size: 22px;
} 
aside .out{
	position: absolute;
	bottom: 0;
	padding: 0 0 80px 20px;
	font-size: 20px;
	cursor: pointer;
}
aside .out:hover{
	opacity: 0.8;
}
</style>

<script type="text/javascript">
	export default{
		name:"Side"
	}
</script>