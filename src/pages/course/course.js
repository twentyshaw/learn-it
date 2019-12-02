import Side from '@/components/side'
console.log('hi')
import { mapGetters, mapActions } from 'vuex'

export default{
	name:'UserTop',
	data(){
		return {
			customColors: [
			{color: '#F56C6C', percentage: 14},
			{color: '#F56C6C', percentage: 28},
			{color: '#F56C6C', percentage: 42},
			{color: '#E6A23C', percentage: 56},
			{color: '#E6A23C', percentage: 70},
			{color: '#E6A23C', percentage: 84},
			{color: '#67C23A', percentage: 100},
			]
		}
	},
	computed:{
		...mapGetters(['courseId','courseCount','courseTests']),
		percentage(){
			return Math.round(((this.courseCount)/7)*100)
		}
	},
	methods:{
	  ...mapActions(['createCourse','addCourse']),
      increase(e) {
      	e.preventDefault()
      	if (this.courseCount>0) {
      		var mycount = this.courseCount + 1
      		this.addCourse({courseId:this.courseId,courseCount:mycount})
      	}else{
      		this.createCourse({courseCount:1,courseTests:this.courseTests})
      	}
      }
	},
	components:{
		Side
	},
	mounted(){
	}
}

