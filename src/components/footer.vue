<template>
	<footer v-bind:class="{'no-login':!isLogin,'login':isLogin}">Copyright ©2019 All rights reserved | Made by JIANG XIAO</footer>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
	export default{
		name:"Footer",
		computed:{
			...mapGetters(['isLogin'])
		}
	}
</script>

<style type="text/css">
	footer{
		padding: 30px 0;
		background: #fff;
	}
	footer.login{
		display: none;
	}
</style>