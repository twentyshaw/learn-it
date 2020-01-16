import Compara from '@/components/echarts/compara.vue'
import Point from '@/components/echarts/point.vue'
import { mapGetters } from 'vuex'
export default{
	name:"Home",
	components:{
		Compara,
		Point
	},
	computed:{
		...mapGetters(['memoList','forumList']),
		memos(){return this.memoList},
		forums(){return this.forumList}
	}
}