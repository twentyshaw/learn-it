import { mapActions } from 'vuex'
 
export default{
	data(){
		return {
			email:'',
			username:'',
			password:''
		}
	},
	methods:{
		...mapActions(['register']),
		onRegister(e){
			e.preventDefault()
			this.register({email:this.email,username:this.username,password:this.password})
				.then(()=>{
					console.log("success"),
					this.$router.push({path:'/user/home'})
				})
		}
	}
}
window.onscroll = function () {
	/*导航栏浮起*/
	var navBar = document.querySelector('header')
	if (document.documentElement.scrollTop>0) {
		navBar.classList.add('active')
	}else{
		navBar.classList.remove('active')
	}

	/* 锚点对应的导航tag高亮*/
	var contents = document.querySelectorAll('.home-content')
	var navlist = document.querySelectorAll('.navlist ul li a')
	for (var i = 0; i < contents.length; i++) {
		var yTop = document.documentElement.clientHeight - contents[i].getBoundingClientRect().top
		var yBottom = document.documentElement.clientHeight - contents[i].getBoundingClientRect().bottom
		if (yTop>=394 && yBottom<=394) {
			var itemId = contents[i].id
			for (var j = 0; j < navlist.length; j++) {
				if(navlist[j].dataset.view == itemId){
					var brothers = navlist[j].parentNode.parentNode.children
					for (var k = 0; k < brothers.length; k++) {
						if (brothers[k].classList.contains('inview')) {
							brothers[k].classList.remove('inview')
						}
					}
					navlist[j].parentNode.classList.add('inview')
				}
			}
		}
	}
}

