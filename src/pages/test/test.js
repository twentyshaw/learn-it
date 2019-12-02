import Side from '@/components/side'
import Ability from '@/components/echarts/ability.vue'
import { mapGetters } from 'vuex'

export default{
	name:'UserTop',
	components:{
		Side,
		Ability
	},
	computed:{
		...mapGetters(['courseTests']),
		topTestResult(){
			return this.courseTests
		}

	}
}