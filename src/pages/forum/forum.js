import Side from '@/components/side'
import { mapActions,mapGetters } from 'vuex'

export default{
	name:'UserTop',
	components:{
		Side
	},
	computed:{
		...mapGetters(['forumList']),
		forums(){return this.forumList},
		currentDate(){
			var d = new Date()
			return d.toLocaleDateString()
		},
		isdetail(){
			return this.$route.path.indexOf("forum_detail") === -1?false:true
		},
		ask(){
			if(this.$route.path.indexOf("ask") !== -1){
				return true
			}
		}
	},
	methods:{
		...mapActions(['forumListInfo'])
	}
}