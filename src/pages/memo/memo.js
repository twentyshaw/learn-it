import Side from '@/components/side'
import { mapGetters, mapActions } from 'vuex'
import { create } from 'domain'

export default{
	name:'UserTop',
	computed:{
		...mapGetters(['memoList']),
		memos(){return this.memoList},
		isdetail(){
			return this.$route.path.indexOf("memo_detail") === -1?false:true
		}
	},
	components:{
		Side
	},
	methods:{
		...mapActions(['memoDelete']),
		linkToCreate:function(){
			this.$router.push({path:'/user/memo/memo_detail'})
			console.log(this.memos)
		},

		deleteItem:function(memoid){
			this.memoDelete({memoID:memoid})
		}
	}
}