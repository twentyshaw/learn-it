import Side from '@/components/side'

export default{
	name:'UserTop',
	components:{
		Side
	},
	watch:{
		$route(to,from){
		   var target = to.path.split('/')[2]
		   findLi(target)
		}
	},
	mounted:function(){
		var url = window.location.href
		var item = url.split('/')[5]
		findLi(item)
	}
}

function findLi(li){
	var navlist = document.querySelectorAll('#side ul li')
	for (var i = 0; i < navlist.length; i++) {
		navlist[i].classList.remove('highlight')
		if(navlist[i].dataset.nav == li){
			navlist[i].classList.add('highlight')
		}
	}
}