import Side from '@/components/side'

export default{
	name:'UserTop',
	computed:{
		currentDate(){
			var d = new Date()
			return d.toLocaleDateString()
		}
	},
	components:{
		Side
	}
}